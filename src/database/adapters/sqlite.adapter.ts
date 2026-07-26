import sqlite3 from "sqlite3";

import type { DatabaseAdapter } from "./database.adapter";

export class SqliteAdapter implements DatabaseAdapter {
  private connection: sqlite3.Database | null = null;

  async connect(): Promise<void> {
    if (this.connection) {
      return;
    }

    this.connection = await new Promise<sqlite3.Database>(
      (resolve, reject) => {
        const db = new sqlite3.Database(
          "./src/database/toolverse.db",
          (error) => {
            if (error) {
              reject(error);
            } else {
              resolve(db);
            }
          }
        );
      }
    );
  }

  async disconnect(): Promise<void> {
    if (!this.connection) {
      return;
    }

    await new Promise<void>((resolve, reject) => {
      this.connection!.close((error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });

    this.connection = null;
  }

  async initialize(): Promise<sqlite3.Database> {
    await this.connect();
    return this.database;
  }

  async all<T = unknown>(
    sql: string,
    params: unknown[] = []
  ): Promise<T[]> {
    const db = await this.initialize();

    return new Promise<T[]>((resolve, reject) => {
      db.all(sql, params as any[], (error, rows) => {
        if (error) {
          reject(error);
        } else {
          resolve((rows ?? []) as T[]);
        }
      });
    });
  }

  async get<T = unknown>(
    sql: string,
    params: unknown[] = []
  ): Promise<T | undefined> {
    const db = await this.initialize();

    return new Promise<T | undefined>((resolve, reject) => {
      db.get(sql, params as any[], (error, row) => {
        if (error) {
          reject(error);
        } else {
          resolve(row as T | undefined);
        }
      });
    });
  }

  async run(
    sql: string,
    params: unknown[] = []
  ): Promise<void> {
    const db = await this.initialize();

    return new Promise<void>((resolve, reject) => {
      db.run(sql, params as any[], (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  get database(): sqlite3.Database {
    if (!this.connection) {
      throw new Error("Database is not connected.");
    }

    return this.connection;
  }
}

export const sqliteAdapter = new SqliteAdapter();

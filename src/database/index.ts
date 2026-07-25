import sqlite3 from "sqlite3";
import { drizzle } from "drizzle-orm/sqlite-proxy";

import * as schema from "./schema";

const sqlite = new sqlite3.Database(
  "./src/database/toolverse.db"
);

export const db = drizzle(
  async (sql, params, method) => {
    const rows = await new Promise<any[]>((resolve, reject) => {
      if (method === "all") {
        sqlite.all(sql, params, (error, rows) => {
          if (error) reject(error);
          else resolve(rows ?? []);
        });
      } else {
        sqlite.run(sql, params, function (error) {
          if (error) reject(error);
          else resolve([]);
        });
      }
    });

    return rows;
  },
  { schema }
);

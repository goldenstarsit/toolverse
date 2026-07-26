export interface DatabaseAdapter {
  connect(): Promise<void>;
  disconnect(): Promise<void>;

  all<T = unknown>(
    sql: string,
    params?: unknown[]
  ): Promise<T[]>;

  get<T = unknown>(
    sql: string,
    params?: unknown[]
  ): Promise<T | undefined>;

  run(
    sql: string,
    params?: unknown[]
  ): Promise<void>;
}

 declare module '*.sqlite' {
 // declare module "../db/dev.sqlite" {
     const db: {
      query: (sql: string, params?: any[]) => Promise<any>;
    };
    export default db;
}
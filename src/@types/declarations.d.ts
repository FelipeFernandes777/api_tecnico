 declare module '*.sqlite' {
     const db: {
      query: (sql: string, params?: any[]) => Promise<any>;
    };
    export default db;
}
"server only"

import { Cirql } from 'cirql';

let db: Cirql;

export async function initDb(): Promise<Cirql> {
    if (db) return db;
    db = new Cirql();
    try {
        await db.handle.connect("http://localhost:8000/", {
            namespace: "root",
            database: "root"
        });

        return db;
    } catch (err) {
        console.error("Failed to connect to SurrealDB:", err);
        throw err;
    }
}

db = await initDb()

export { db }
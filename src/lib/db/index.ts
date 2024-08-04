"server only"

import { Cirql } from 'cirql';

let db: Cirql;

export async function initDb(): Promise<Cirql | undefined> {
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

//      ----------------------------   IGNORE ----------------------------

// Why do i need a closeDb function ?
export async function closeDb(): Promise<void> {
    if (!db) return;
    await db.handle.close();
    db = undefined;
}

// why this also ?
export function getDb(): Cirql | undefined {
    return db;
}

db = (await initDb())!

export { db }
import { type Database as DataBaseType } from "better-sqlite3";
import Database from "better-sqlite3";
import { ESQUEMA } from "./esquema.js";
export const createConnection = (route: string): DataBaseType => {
	const db = new Database(route)
	db.pragma("foreign_keys = ON");
	db.pragma("journal_mode = WAL");
	for (const sentencia of ESQUEMA) {
		db.exec(sentencia);
	}
	return db
}


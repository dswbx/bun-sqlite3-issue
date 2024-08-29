import { Database } from "bun:sqlite";

const db = new Database(":memory:");
const prepared = db.prepare("select 'Hello world' as message;");
console.log(prepared.reader);

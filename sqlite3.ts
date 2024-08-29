import Database from "better-sqlite3";

const db = new Database(":memory:");
const prepared = db.prepare("select 'Hello world' as message;");
console.log(prepared.reader);

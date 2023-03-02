import sqlite3 from "sqlite3";

const initDatabase = new Promise((resolve, reject) => {
  try {
    const db = new sqlite3.Database('lib/database.sqlite', sqlite3.OPEN_READWRITE, err => console.log(err ? err.message : 'Connected to the database'));
    resolve(db);
  } catch (err) {
    reject(err.message);
  }
});

const dbInstance = await initDatabase
  .then(res => res)
  .catch(err => console.log(err));

const times = 'CREATE TABLE times (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, nome VARCHAR(128) NOT NULL, tema VARCHAR(70) NOT NULL DEFAULT "white");';
const users = 'CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, time_id INTEGER NOT NULL UNIQUE, nome VARCHAR(150) NOT NULL, cargo TEXT NOT NULL, url_imagem TEXT, FOREIGN KEY (time_id) REFERENCES times (id));'

dbInstance.exec(`${times} ${users}`, err => console.log(err ? err.message : 'Tables created successfully'));

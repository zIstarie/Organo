import sqlite3, { Database } from "sqlite3";

const dbInstance = new Database('lib/database.sqlite', sqlite3.OPEN_READWRITE, err => console.log(err ? err.message : 'Connected to the database'));

async function createTeam({ name, theme }) {
  const createRecord = new Promise((resolve, reject) => {
    return dbInstance.run('INSERT INTO times(nome, tema) VALUES (?, ?))', [data.name, data.theme], err => !err ?
      resolve(this.lastID) :
      reject(err.message));
  });

  return await createRecord
    .then(res => res)
    .catch(err => console.log(err.message));
}

async function createUser({ teamId, name, role, image }) {
  const createRecord = new Promise((resolve, reject) => {
    return dbInstance.run('INSERT INTO users(time_id, nome, cargo, url_imagem) VALUES (?, ?))', [teamId, name, role, image], err => !err ?
      resolve(this.lastID) :
      reject(err.message));
  });

  return await createRecord
    .then(res => res)
    .catch(err => console.log(err.message));
}

export {
  createTeam,
  createUser
};

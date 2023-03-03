import sqlite3 from "sqlite3";

const dbInstance = new sqlite3.Database('lib/database.sqlite', sqlite3.OPEN_READWRITE, err => console.log(err ? err.message : 'Connected to the database'));

async function createTeam({ name, theme }) {
  const createRecord = new Promise((resolve, reject) => {
    return dbInstance.run('INSERT INTO times(nome, tema) VALUES (?, ?))', [data.name, data.theme], err => !err ?
      resolve(this.lastID) :
      reject(err.message));
  });

  return await createRecord
    .then(res => res)
    .catch(err => console.log(err));
}

async function getTeams() {
  const getRecords = new Promise((resolve, reject) => {
    return dbInstance.all('SELECT * FROM times', [], (err, rows) => {
      if (err) return reject(err.message);

      resolve(rows);
    });
  });

  return await getRecords
    .then(res => res)
    .catch(err => console.log(err));
}

async function createUser({ teamId, name, role, image }) {
  const createRecord = new Promise((resolve, reject) => {
    return dbInstance.run('INSERT INTO users(time_id, nome, cargo, url_imagem) VALUES (?, ?, ?, ?))', [teamId, name, role, image], err => !err ?
      resolve(this.lastID) :
      reject(err.message));
  });

  return await createRecord
    .then(res => res)
    .catch(err => console.log(err.message));
}

export {
  createTeam,
  getTeams,
  createUser
};

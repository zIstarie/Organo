import pkg from 'pg';
import 'dotenv/config';

const { Client } = pkg;
const client = new Client(process.env.DATABASE_URL);
await client.connect()
  .then(() => console.log(`Database connected successfully on:\n${process.env.DATABASE_URL}`))
  .catch(err => console.error(`Error attempting to stablish connection. Message: ${err.message}`, err.stack));

async function createTeam({ name, theme }) {
  const team = await client.query('INSERT INTO times (nome, tema) VALUES ($1, $2) RETURNING *', [name, theme])
    .then(res => res.rows[0])
    .catch(err => console.error(`Error attempting to insert data. Message: ${err.message}`));
  team && console.log('Inserted data record');

  return team;
}

async function getTeams() {
  const teams = await client.query('SELECT * FROM times')
    .then(res => res.rows)
    .catch(err => console.error(`Error attempting to retrieve data. Message: ${err.message}`));

  return teams;
}

async function createUser({ name, role, image, teamId }) {
  const user = await client.query('INSERT INTO users (nome, time_id, cargo, url_imagem) VALUES ($1, $2, $3, $4) RETURNING *', [name, teamId, role, image])
    .then(res => res.rows[0])
    .catch(err => console.log(console.error(`Error attempting to insert data. Message: ${err.message}`)));
  user && console.log('Inserted data record');

  return user;
}

async function getUser(id) {
  const user = await client.query('SELECT * FROM users WHERE id = ($1)', [id])
    .then(res => res.rows[0])
    .catch(err => console.error(`Error attempting to retrieve data. Message: ${err.message}`));

  return user;
}

export {
  createTeam,
  getTeams,
  createUser,
  getUser,
  client
};

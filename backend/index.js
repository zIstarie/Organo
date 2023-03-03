import express from 'express';
import { getTeams } from './lib/database.js';
import 'dotenv/config.js';

const app = express();
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  next();
});
app.use(express.json());


app.get('/', (req, res) => res.send({ greeting: 'Hi mom 🔥' }));

app.get('/api/teams', async (req, res) => {
  const teams = await getTeams();
  teams && res.status(200).send([...teams]);
});

app.listen(process.env.HOST_PORT, () => console.log(`Connected to ${process.env.HOST_URL}:${process.env.HOST_PORT}`));

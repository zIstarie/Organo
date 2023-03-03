import express from 'express';
import { getTeams } from './lib/database.js';
const PORT = 8080;

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

app.listen(PORT, () => console.log(`Connected to http://localhost:${PORT}`));


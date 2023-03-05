import express from 'express';
import { getTeams, createUser, getUser, createTeam } from './lib/database.js';
import { userBodySchema, teamBodySchema } from './utils/schemas.js';
import 'dotenv/config.js';

const PORT = process.env.HOST_PORT || 8080;

const app = express();
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Headers', ['Content-Type']);
  next();
});
app.use(express.json());


app.get('/', (req, res) => res.send({ greeting: 'Hi mom 🔥' }));

app.get('/api/teams', async (req, res) => {
  let teams = await getTeams();
  if (!teams) return res.send({ message: 'No registers' });

  teams = teams.map(team => {
    const { id, nome, tema } = team;
    return { id: id, name: nome, team: tema }
  });
  teams && res.status(200).send([...teams]);
});

app.post('/api/register', async (req, res) => {
  const body = userBodySchema.safeParse(req.body);
  if (!body.success) return res.status(405).send({ message: `Invalid request body. Message: ${body.error}` });
  
  const user = await createUser({ ...body.data });
  user && res.status(200).send({ ...user });
});

app.post('/api/create-team', async (req, res) => {
  const body = teamBodySchema.safeParse(req.body);
  if (!body.success) return res.status(405).send({ message: `Invalid request body. Message: ${body.error}` });

  const team = await createTeam({ ...body.data });
  team && res.status(200).send({ ...team });
});

app.get('/api/user/:id', async (req, res) => {
  const id = req.params.id;

  const user = await getUser(id);
  user && res.status(200).send({ ...user });
});

app.listen(PORT, () => console.log(`Connected to ${process.env.HOST_URL}:${PORT}`));


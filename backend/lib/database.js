import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
pb.autoCancellation(false);

async function createTeam({ name, theme }) {
  const team = await pb.collection('times').create({ nome: name, tema: theme });

  return team;
}

async function getTeams() {
  const teams = await pb.collection('times').getFullList();

  return teams;
}

async function createUser({ name, role, teamId, image = null }) {
  const user = await pb.collection('users').create({ nome: name, cargo: role, time_id: teamId, url_imagem: image });

  return user;
}

async function getUser(id) {
  const user = await pb.collection('users').getOne(id);

  return user;
}

export {
  createTeam,
  getTeams,
  createUser,
  getUser
};

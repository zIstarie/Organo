import { client } from "./database.js";

const times = "CREATE TABLE times (id serial PRIMARY KEY, nome VARCHAR(128) NOT NULL, tema VARCHAR(70) DEFAULT 'white' NOT NULL)";
const users = "CREATE TABLE users (id serial PRIMARY KEY, time_id INTEGER NOT NULL, nome VARCHAR(150) NOT NULL, cargo TEXT NOT NULL, url_imagem TEXT, FOREIGN KEY (time_id) REFERENCES times (id))";

client.query(times, (err, results, fields) => {
  if (err) throw new Error(`Failed to create Times table. Message: ${err.message}`);

  console.log('Times Table created successfully');
});

client.query(users, (err, results, fields) => {
  if (err) throw new Error(`Failed to create Users table. Message: ${err.message}`);

  console.log('Users Table created successfully');
});

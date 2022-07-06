import express from 'express';
import dotenv from 'dotenv';

import Connection from "./db/db.js";

dotenv.config();

const app = express();

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on port http://localhost:3001');
});

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);
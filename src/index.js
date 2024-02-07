// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();
const express = require('express');

const app = express();

const clienteRotas = require('./router/clienteRotas');

app.use(express.json());

app.use('/clientes', clienteRotas);

app.listen(process.env.PORT, console.log('Servidor inicializado...'));

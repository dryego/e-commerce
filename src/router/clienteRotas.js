const express = require('express');
const { cadastroCliente } = require('../controller/cliente/cadastroCliente');

const rotas = express.Router();

rotas.post('/cadastro', cadastroCliente);

module.exports = rotas;

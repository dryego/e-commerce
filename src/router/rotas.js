const express = require("express");
const teste = require("../controller/teste");

const rotas = express.Router();

rotas.get("/teste", teste);

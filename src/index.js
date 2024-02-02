// eslint-disable-next-line import/no-extraneous-dependencies
require("dotenv").config();
const express = require("express");
const teste = require("./controller/teste");

const app = express();

app.use(express.json());

app.use("/teste", teste);

app.listen(process.env.PORT, console.log("Servidor inicializado..."));

const express = require("express");
const teste = require("./controller/teste");

const app = express();

app.use(express.json());

app.use("/teste", teste);

app.listen(3000, console.log("Servidor inicializado..."));

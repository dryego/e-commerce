const knex = require('./connection/knex');

const buscarClientePorEmail = async (email) => {
  const cliente = await knex('clientes').where({ email }).first();
  return cliente;
};

module.exports = {
  buscarClientePorEmail,
};

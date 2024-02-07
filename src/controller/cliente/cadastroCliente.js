const { buscarClientePorEmail } = require('../../buscarCliente');
const knex = require('../../connection/knex');

const cadastroCliente = async (req, res) => {
  const { nome, telefone, email, cidade, estado, pais } = req.body;

  try {
    if (buscarClientePorEmail(email) !== undefined) {
      res.status(100).json({ mensagem: 'Cliente já cadastrado.' });
    }

    const [novoCliente] = await knex('clientes')
      .insert({
        nome,
        telefone,
        email,
        cidade,
        estado,
        pais,
        data_cadastro: new Date(),
      })
      .returning('*');
    console.log(novoCliente);
    return res.status(202).json(novoCliente);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno.' });
  }
};

module.exports = {
  cadastroCliente,
};

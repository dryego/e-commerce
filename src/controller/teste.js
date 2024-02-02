const teste = (req, res) => {
  try {
    res.status(200).json("teste OK.");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = teste;

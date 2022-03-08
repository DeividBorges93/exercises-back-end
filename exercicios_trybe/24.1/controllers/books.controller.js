const { Book } = require('../models');

const getAll = async (req, res) => {
  try {
    const books = await Book.findAll({
      order: [
        ['title', 'ASC'], ['createdAt', 'ASC']
      ]
    });
    return res.status(200).json(books);
  } catch (error) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado'});
  }
};

module.exports = {
  getAll,
}
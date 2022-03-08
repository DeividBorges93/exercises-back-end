const express = require('express');
const bodyParser = require('body-parser');

const booksController = require('./controllers/books.controller');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/books', booksController.getAll);


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const {  } = require('./models/User');

app.post('/user', )

const PORT = 3000;

app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); });

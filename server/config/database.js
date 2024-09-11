const mongoose = require('mongoose');

require('dotenv').config();


mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('Conectado ao MongoDB -- Nome do Banco: ' + process.env.DATABASE_URL))
    .catch((err) => console.log('Erro ao conectar' + err));

module.exports = mongoose;
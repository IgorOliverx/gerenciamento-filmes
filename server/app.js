const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./config/database');
const cors = require("cors");

const app = express();


// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas
const filmeRoutes = require('./routes/filmeRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
app.use('/api', filmeRoutes);
app.use('/api', usuarioRoutes);



module.exports = app;
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./config/database');
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "http://localhost:5173"
}
// Middlewares
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Rotas
const filmeRoutes = require('./routes/filmeRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
app.use('/api', filmeRoutes);
app.use('/api', usuarioRoutes);



module.exports = app;
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./config/database');
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "http://localhost:5174"
}
// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas
const filmeRoutes = require('./routes/filmeRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const comentarioRoutes = require('./routes/comentarioRoutes');

app.use('/api', filmeRoutes);
app.use('/api', usuarioRoutes);
app.use('/api', comentarioRoutes);



module.exports = app;
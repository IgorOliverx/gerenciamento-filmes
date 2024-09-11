const express = require('express');
const router = express.Router();
const FilmeController = require('../controllers/filmeController');


router.get('/filmes', FilmeController.listaFilmes);
router.get('/filmes/:id', FilmeController.verFilme)
router.post('/filmes', FilmeController.criaFilmes);
router.delete('/filmes/:id', FilmeController.deletaFilme);
router.put('/filmes/:id', FilmeController.editaFilme);

module.exports = router;
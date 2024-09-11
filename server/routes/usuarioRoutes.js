const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');

router.post('/usuario', UsuarioController.criaUsuario);
router.delete('/usuario/:id', UsuarioController.deletaUsuario);
router.put('/usuario/:id', UsuarioController.editaUsuario);

module.exports = router;
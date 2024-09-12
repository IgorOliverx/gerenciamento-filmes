const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/usuarioController");

// Rota para criar um novo usuário
router.post("/usuario", UsuarioController.criaUsuario);

// Rota para deletar um usuário
router.delete("/usuario/:id", UsuarioController.deletaUsuario);

// Rota para editar um usuário
router.put("/usuario/:id", UsuarioController.editaUsuario);

// Rota para login de usuário
router.post("/usuario/login", UsuarioController.loginUsuario);

module.exports = router;

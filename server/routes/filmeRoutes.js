const express = require("express");
const router = express.Router();
const FilmeController = require("../controllers/filmeController");
const { jwtMiddleware } = require("../utils/middleware");

// Rota pública para listar e ver filmes
router.get("/filmes", FilmeController.listaFilmes);
router.get("/filmes/:id", FilmeController.verFilme);

// Rota protegida para a página de criação de filmes
router.get(
  "/filme",
  jwtMiddleware((req, res) => {
    res
      .status(200)
      .json({ message: "Acesso à página de criação de filmes permitido." });
  })
);

// Rotas protegidas para criar, editar e deletar filmes
router.post("/filmes", FilmeController.criaFilmes);
router.delete("/filmes/:id", FilmeController.deletaFilme);
router.put("/filmes/:id", FilmeController.editaFilme);

module.exports = router;

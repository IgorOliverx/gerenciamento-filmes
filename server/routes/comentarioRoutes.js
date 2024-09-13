const express = require("express");
const router = express.Router();
const ComentarioController = require("../controllers/comentarioController");

// Rotas para criar, editar e deletar comentarios
router.post("/comentarios", ComentarioController.criaComentario);
router.delete("/comentarios/:id", ComentarioController.deletaComentario);
router.put("/comentarios/:id", ComentarioController.editaComentario);

module.exports = router;
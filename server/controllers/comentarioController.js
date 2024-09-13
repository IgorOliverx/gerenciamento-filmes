// Importa o modelo de Comentario para interagir com a coleção de comentários no banco de dados
const Comentario = require("../models/Comentario");

/**
 * Método para listar todos os comentários
 * @param req - Objeto da requisição
 * @param res - Objeto da resposta
 * @returns {Promise<void>} - Retorna uma Promise que resolve com a lista de comentários ou uma mensagem de erro
 */
exports.listaComentarios = async (req, res) => {
  console.log("Método para listar Comentários chamado corretamente.");
  try {
    // Busca todos os comentários no banco de dados
    const comentarios = await Comentario.find();
    // Envia a lista de comentários como resposta em formato JSON
    res.json(comentarios);
  } catch (err) {
    // Em caso de erro, envia uma mensagem de erro com status 500
    res.status(500).json({ message: err.message });
  }
};

/**
 * Método para criar um novo comentário
 * @param req - Objeto da requisição
 * @param res - Objeto da resposta
 * @returns {Promise<void>} - Retorna uma Promise que resolve com o comentário criado ou uma mensagem de erro
 */
exports.criaComentario = async (req, res) => {
  console.log("Método para criar Comentário chamado corretamente.");
  // Cria uma nova instância do modelo Comentario com os dados fornecidos na requisição
  const comentario = new Comentario({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
    nota: req.body.nota,
    filme_id: req.body.filme_id, // ID do filme
  });
  try {
    // Salva o novo comentário no banco de dados
    const novoComentario = await comentario.save();
    // Se o comentário foi salvo com sucesso, envia a resposta com status 201 e o comentário criado
    res.status(201).json(novoComentario);
  } catch (err) {
    // Em caso de erro, envia uma mensagem de erro com status 400
    console.error(err);
    res.status(400).json({ message: err.message });
  }
};

/**
 * Método para atualizar um comentário existente
 * @param req - Objeto da requisição
 * @param res - Objeto da resposta
 * @returns {Promise<*>} - Retorna uma Promise que resolve com o comentário atualizado ou uma mensagem de erro
 */
exports.editaComentario = async (req, res) => {
  console.log("Método para atualizar Comentário chamado corretamente.");
  try {
    // Busca o comentário pelo ID fornecido na URL dos parâmetros
    const comentario = await Comentario.findById(req.params.id);
    // Se o comentário não for encontrado, envia uma mensagem de erro com status 404
    if (comentario == null) {
      return res.status(404).json({ message: "Comentário não encontrado" });
    }

    // Atualiza os campos do comentário somente se novos valores forem fornecidos
    if (req.body.titulo != null) {
      comentario.titulo = req.body.titulo;
    }
    if (req.body.conteudo != null) {
      comentario.conteudo = req.body.conteudo;
    }
    if (req.body.nota != null) {
      comentario.nota = req.body.nota;
    }

    // Salva as alterações no banco de dados
    const comentarioAtualizado = await comentario.save();
    // Envia o comentário atualizado como resposta em formato JSON
    res.json(comentarioAtualizado);
  } catch (err) {
    // Em caso de erro, envia uma mensagem de erro com status 400
    res.status(400).json({ message: err.message });
  }
};

/**
 * Método para deletar um comentário pelo ID
 * @param req - Objeto da requisição
 * @param res - Objeto da resposta
 * @returns {Promise<*>} - Retorna uma Promise que resolve com uma mensagem de sucesso ou uma mensagem de erro
 */
exports.deletaComentario = async (req, res) => {
  console.log("Método para deletar Comentário chamado corretamente.");
  try {
    // Busca o comentário pelo ID fornecido na URL dos parâmetros
    const comentario = await Comentario.findById(req.params.id);
    // Se o comentário não for encontrado, envia uma mensagem de erro com status 404
    if (comentario == null) {
      return res.status(404).json({ message: "Comentário não encontrado" });
    }

    // Deleta o comentário do banco de dados
    await comentario.deleteOne();
    // Envia uma mensagem de sucesso como resposta em formato JSON
    res.json({ message: "Comentário deletado com sucesso" });
  } catch (err) {
    // Em caso de erro, envia uma mensagem de erro com status 500
    res.status(500).json({ message: err.message });
  }
};

// Listar comentários de um filme específico
exports.listaComentariosFilme = async (req, res) => {
   try {
       // Busca comentários pelo ID do filme
       const comentarios = await Comentario.find({ filme_id: req.params.filme_id });
       // Retorna os comentários do filme
       res.json(comentarios);
   } catch (err) {
       // Em caso de erro, retorna uma mensagem de erro com status 500 (Internal Server Error)
       res.status(500).json({ message: err.message });
   }
};

// Importa o modelo de Filme para interagir com a coleção de filmes no banco de dados
const Filme = require("../models/Filme");

/**
 * Método para listar todos os filmes
 * @param req - Objeto da requisição
 * @param res - Objeto da resposta
 * @returns {Promise<void>} - Retorna uma Promise que resolve com a lista de filmes ou uma mensagem de erro
 */
exports.listaFilmes = async (req, res) => {
  console.log("Método para listar Filmes chamado corretamente.");
  try {
    // Busca todos os filmes no banco de dados
    const filmes = await Filme.find();
    // Envia a lista de filmes como resposta em formato JSON
    res.json(filmes);
  } catch (err) {
    // Em caso de erro, envia uma mensagem de erro com status 500
    res.status(500).json({ message: err.message });
  }
};

/**
 * Método para criar um novo filme
 * @param req - Objeto da requisição
 * @param res - Objeto da resposta
 * @returns {Promise<void>} - Retorna uma Promise que resolve com o filme criado ou uma mensagem de erro
 */
exports.criaFilmes = async (req, res) => {
  console.log("Método para criar Filmes chamado corretamente.");
  // Cria uma nova instância do modelo Filme com os dados fornecidos na requisição
  const filme = new Filme({
    titulo: req.body.titulo,
    //  usuario_id: req.body.usuario_id, // ID do usuário (comentado no momento)
    descricao: req.body.descricao, // Descrição do filme
    estreia: req.body.estreia, // Data de estreia do filme
    genero: req.body.genero, // Gênero do filme
    imagem_capa: req.body.imagem_capa, // URL da imagem de capa do filme
  });
  try {
    // Salva o novo filme no banco de dados
    const novoFilme = await filme.save();
    // Se o filme foi salvo com sucesso, envia a resposta com status 201 e o filme criado
    if (novoFilme) {
      res.status(201).json(novoFilme);
    }
  } catch (err) {
    // Em caso de erro, envia uma mensagem de erro com status 400
    console.error(err);
    res.status(400).json({ message: err.message });
  }
};

/**
 * Método para buscar um filme por ID
 * @param req - Objeto da requisição
 * @param res - Objeto da resposta
 * @returns {Promise<*>} - Retorna uma Promise que resolve com o filme encontrado ou uma mensagem de erro
 */
exports.verFilme = async (req, res) => {
  console.log("Método para listar Filme pelo ID chamado corretamente.");
  try {
    // Busca o filme pelo ID fornecido na URL dos parâmetros
    const filme = await Filme.findById(req.params.id);
    // Se o filme não for encontrado, envia uma mensagem de erro com status 404
    if (filme == null) {
      return res.status(404).json({ message: "Filme não encontrado" });
    }
    // Envia o filme encontrado como resposta em formato JSON
    res.json(filme);
  } catch (err) {
    // Em caso de erro, envia uma mensagem de erro com status 500
    res.status(500).json({ message: err.message });
  }
};

/**
 * Método para atualizar um filme existente
 * @param req - Objeto da requisição
 * @param res - Objeto da resposta
 * @returns {Promise<*>} - Retorna uma Promise que resolve com o filme atualizado ou uma mensagem de erro
 */
exports.editaFilme = async (req, res) => {
  console.log("Método para atualizar Filme chamado corretamente.");
  try {
    // Busca o filme pelo ID fornecido na URL dos parâmetros
    const filme = await Filme.findById(req.params.id);
    // Se o filme não for encontrado, envia uma mensagem de erro com status 404
    if (filme == null) {
      return res.status(404).json({ message: "Filme não encontrado" });
    }

    // Atualiza os campos do filme somente se novos valores forem fornecidos
    if (req.body.titulo != null) {
      filme.titulo = req.body.titulo;
    }
    if (req.body.descricao != null) {
      filme.descricao = req.body.descricao;
    }
    if (req.body.estreia != null) {
      filme.estreia = req.body.estreia;
    }
    if (req.body.genero != null) {
      filme.genero = req.body.genero;
    }
    if (req.body.imagemCapa != null) {
      filme.imagemCapa = req.body.imagemCapa;
    }

    // Salva as alterações no banco de dados
    const filmeAtualizado = await filme.save();
    // Envia o filme atualizado como resposta em formato JSON
    res.json(filmeAtualizado);
  } catch (err) {
    // Em caso de erro, envia uma mensagem de erro com status 400
    res.status(400).json({ message: err.message });
  }
};

/**
 * Método para deletar um filme pelo ID
 * @param req - Objeto da requisição
 * @param res - Objeto da resposta
 * @returns {Promise<*>} - Retorna uma Promise que resolve com uma mensagem de sucesso ou uma mensagem de erro
 */
exports.deletaFilme = async (req, res) => {
  console.log("Método para deletar filme chamado corretamente");
  try {
    // Busca o filme pelo ID fornecido na URL dos parâmetros
    const filme = await Filme.findById(req.params.id);
    // Se o filme não for encontrado, envia uma mensagem de erro com status 404
    if (filme == null) {
      return res.status(404).json({ message: "Filme não encontrado" });
    }

    // Deleta o filme do banco de dados
    await filme.deleteOne();
    // Envia uma mensagem de sucesso como resposta em formato JSON
    res.json({ message: "Filme deletado com sucesso" });
  } catch (err) {
    // Em caso de erro, envia uma mensagem de erro com status 500
    res.status(500).json({ message: err.message });
  }
};

// AINDA NÃO IMPLEMENTADO
// Listar filmes de um usuário específico
//exports.listaFilmesUsuario = async (req, res) => {
//    try {
//        // Busca filmes pelo ID do usuário
//        const filmes = await Filme.find({ usuario_id: req.params.usuario_id });
//        // Retorna os filmes do usuário
//        res.json(filmes);
//    } catch (err) {
//        // Em caso de erro, retorna uma mensagem de erro com status 500 (Internal Server Error)
//        res.status(500).json({ message: err.message });
//    }
//};
const Filme = require('../models/Filme');

/**
 * Método para Listar Filmes
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.listaFilmes = async (req, res) => {
    console.log('Método para listar Filmes chamado corretamente.')
    try {
        const filmes = await Filme.find();
        res.json(filmes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/**
 * Método para Criar Filmes
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.criaFilmes = async (req, res) => {
    console.log('Método para criar  Filmes chamado corretamente.')
    const filme = new Filme({
        titulo: req.body.titulo,
      //  usuario_id: req.body.usuario_id, // ID do usuário
        descricao: req.body.descricao, // Descrição do filme
        estreia: req.body.estreia, // Data de estreia do filme
        genero: req.body.genero, // Gênero do filme
        imagem_capa: req.body.imagem_capa, // URL da imagem de capa do filme
    });
    try {
        const novoFilme = await filme.save();
        if(novoFilme){
            res.status(201).json(novoFilme);
        }
    } catch (err) {
        console.error(err)
        res.status(400).json({ message: err.message });
    }
}

/**
 * Método para Buscar Filme por ID
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.verFilme = async (req, res) => {
    console.log('Método para listar Filme pelo ID chamado corretamente.')
    try {
        const filme = await Filme.findById(req.params.id);
        if (filme == null) {
            return res.status(404).json({ message: "Filme não encontrado" });
        }
        res.json(filme);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/**
 * Método para Atualizar Filme
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.editaFilme = async (req, res) => {
    console.log('Método para atualizar Filme chamado corretamente.')
    try {
        const filme = await Filme.findById(req.params.id);
        if (filme == null) {
            return res.status(404).json({ message: "Filme não encontrado" });
        }

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

        const filmeAtualizado = await filme.save();
        res.json(filmeAtualizado);
    } catch (err) {

        res.status(400).json({ message: err.message });
    }
};

/**
 * Método para deletar um filme
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.deletaFilme = async (req, res) => {
    console.log('Método para deletar filme chamado corretamente')
    try {
        const filme = await Filme.findById(req.params.id);
        if (filme == null) {
            return res.status(404).json({ message: "Filme não encontrado" });
        }

        await filme.deleteOne();
        res.json({ message: "Filme deletado com sucesso" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//// Listar filmes de um usuário específico
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
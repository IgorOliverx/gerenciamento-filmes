const Usuario = require("../../server/models/Usuario"); // Importa o modelo 'Usuario'

/**
 * Método para criar um novo usuário
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.criaUsuario = async (req, res) => {
    console.log('Método de criar usuário sendo chamado corretamente')
    const usuario = new Usuario({
        nome: req.body.nome, // Nome do usuário
        email: req.body.email, // Email do usuário
        senha: req.body.senha, // Senha do usuário
    });

    try {

        const novoUsuario = await usuario.save();

        res.status(201).json(novoUsuario);
    } catch (err) {

        res.status(400).json({ message: err.message });
    }
};

/**
 * Método para editar um usuário
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.editaUsuario = async (req, res) => {
    try {
        // Busca o usuário pelo ID
        const usuario = await Usuario.findById(req.params.id);
        if (usuario == null) {
            // Se o usuário não for encontrado, retorna status 404 (Não Encontrado)
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        // Verifica quais campos foram enviados na requisição e os atualiza
        if (req.body.nome != null) {
            usuario.nome = req.body.nome;
        }
        if (req.body.email != null) {
            usuario.email = req.body.email;
        }
        if (req.body.senha != null) {
            usuario.senha = req.body.senha;
        }

        // Salva o usuário atualizado no banco de dados
        const usuarioAtualizado = await usuario.save();
        // Retorna o usuário atualizado
        res.json(usuarioAtualizado);
    } catch (err) {
        // Em caso de erro, retorna uma mensagem de erro com status 400 (Bad Request)
        res.status(400).json({ message: err.message });
    }
};

/**
 * Método para deletar um usuário
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.deletaUsuario = async (req, res) => {
    try {
        // Busca o usuário pelo ID
        const usuario = await Usuario.findById(req.params.id);
        if (usuario == null) {
            // Se o usuário não for encontrado, retorna status 404 (Não Encontrado)
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        // Remove o usuário do banco de dados
        await usuario.deleteOne();
        // Retorna uma mensagem de sucesso
        res.json({ message: "Usuário deletado com sucesso" });
    } catch (err) {
        // Em caso de erro, retorna uma mensagem de erro com status 500 (Internal Server Error)
        res.status(500).json({ message: err.message });
    }
};
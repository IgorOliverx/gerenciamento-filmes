// Importa o modelo de Usuário para interagir com a coleção de usuários no banco de dados
const Usuario = require("../models/Usuario");
// Importa o módulo jsonwebtoken para criar e verificar tokens JWT
const jwt = require("jsonwebtoken");

// Método para criar um novo usuário
exports.criaUsuario = async (req, res) => {
  // Cria uma nova instância do modelo Usuario com os dados fornecidos na requisição
  const usuario = new Usuario({
    nome: req.body.nome, // Nome do usuário
    email: req.body.email, // Email do usuário
    senha: req.body.senha, // Senha do usuário
  });

  try {
    // Salva o novo usuário no banco de dados
    const novoUsuario = await usuario.save();
    // Envia o usuário criado como resposta com status 201 (Created)
    res.status(201).json(novoUsuario);
  } catch (err) {
    // Em caso de erro, envia uma mensagem de erro com status 400 (Bad Request)
    res.status(400).json({ message: err.message });
  }
};

// Método para editar um usuário existente
exports.editaUsuario = async (req, res) => {
  try {
    // Busca o usuário pelo ID fornecido na URL dos parâmetros
    const usuario = await Usuario.findById(req.params.id);
    // Se o usuário não for encontrado, envia uma mensagem de erro com status 404 (Not Found)
    if (usuario == null) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Atualiza os campos do usuário somente se novos valores forem fornecidos
    if (req.body.nome != null) {
      usuario.nome = req.body.nome;
    }
    if (req.body.email != null) {
      usuario.email = req.body.email;
    }
    if (req.body.senha != null) {
      usuario.senha = req.body.senha; // Atualiza a senha do usuário
    }

    // Salva as alterações no banco de dados
    const usuarioAtualizado = await usuario.save();
    // Envia o usuário atualizado como resposta
    res.json(usuarioAtualizado);
  } catch (err) {
    // Em caso de erro, envia uma mensagem de erro com status 400 (Bad Request)
    res.status(400).json({ message: err.message });
  }
};

// Método para deletar um usuário pelo ID
exports.deletaUsuario = async (req, res) => {
  try {
    // Busca o usuário pelo ID fornecido na URL dos parâmetros
    const usuario = await Usuario.findById(req.params.id);
    // Se o usuário não for encontrado, envia uma mensagem de erro com status 404 (Not Found)
    if (usuario == null) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Deleta o usuário do banco de dados
    await usuario.deleteOne();
    // Envia uma mensagem de sucesso como resposta
    res.json({ message: "Usuário deletado com sucesso" });
  } catch (err) {
    // Em caso de erro, envia uma mensagem de erro com status 500 (Internal Server Error)
    res.status(500).json({ message: err.message });
  }
};

// Método para login de usuário
exports.loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Encontra o usuário pelo email fornecido
    const usuario = await Usuario.findOne({ email });
    // Se o usuário não for encontrado, envia uma mensagem de erro com status 400 (Bad Request)
    if (!usuario) {
      return res.status(400).json({ message: "Credenciais inválidas" });
    }

    // Compara a senha fornecida com a senha armazenada usando um método personalizado do modelo Usuario
    const isMatch = await usuario.compararSenha(senha);
    // Se a senha não corresponder, envia uma mensagem de erro com status 400 (Bad Request)
    if (!isMatch) {
      return res.status(400).json({ message: "Credenciais inválidas" });
    }

    // Cria um token JWT para o usuário
    const token = jwt.sign(
      { userId: usuario._id }, // Payload do token, incluindo o ID do usuário
      process.env.JWT_SECRET, // Chave secreta para assinar o token
      { expiresIn: "1h" } // Define a expiração do token para 1 hora
    );

    // Envia o token como resposta
    res.json({ token });
  } catch (err) {
    // Log de erro para ajudar na depuração
    console.error("Erro ao fazer login:", err);
    // Em caso de erro, envia uma mensagem de erro com status 500 (Internal Server Error)
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};
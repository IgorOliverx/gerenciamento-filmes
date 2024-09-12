const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken"); 

// Método para criar um novo usuário
exports.criaUsuario = async (req, res) => {
  const usuario = new Usuario({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
  });

  try {
    const novoUsuario = await usuario.save();
    res.status(201).json(novoUsuario);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Método para editar um usuário
exports.editaUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (usuario == null) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    if (req.body.nome != null) {
      usuario.nome = req.body.nome;
    }
    if (req.body.email != null) {
      usuario.email = req.body.email;
    }
    if (req.body.senha != null) {
      usuario.senha = req.body.senha; 
    }

    const usuarioAtualizado = await usuario.save();
    res.json(usuarioAtualizado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Método para deletar um usuário
exports.deletaUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (usuario == null) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    await usuario.deleteOne();
    res.json({ message: "Usuário deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Método para login de usuário
exports.loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Encontra o usuário pelo email
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ message: "Credenciais inválidas" });
    }

    // Compara a senha fornecida com a senha armazenada
    const isMatch = await usuario.compararSenha(senha);
    if (!isMatch) {
      return res.status(400).json({ message: "Credenciais inválidas" });
    }

    // Cria um token JWT
    const token = jwt.sign(
      { userId: usuario._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Define a expiração do token
    );

    res.json({ token });
  } catch (err) {
    console.error("Erro ao fazer login:", err); // Log para ajudar na depuração
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

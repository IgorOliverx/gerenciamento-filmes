const Usuario = require("../models/Usuario"); // Corrigido o caminho se necessário

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
      usuario.senha = req.body.senha; // A senha deve ser atualizada adequadamente
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

const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // Importar bcrypt

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
});

// Hash a senha antes de salvar
UsuarioSchema.pre("save", async function (next) {
  // Alterado para "save"
  if (!this.isModified("senha")) {
    // Verificar "senha" minúsculo
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.senha = await bcrypt.hash(this.senha, salt); 
  next();
});

// Método para comparar senhas
UsuarioSchema.methods.compararSenha = function (candidateSenha) {
  return bcrypt.compare(candidateSenha, this.senha); 
};

const Usuario =
  mongoose.models.Usuario || mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;

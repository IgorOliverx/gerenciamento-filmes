// Importa o módulo mongoose para definir e interagir com o esquema do banco de dados MongoDB
const mongoose = require("mongoose");
// Importa o módulo bcrypt para criptografar e comparar senhas
const bcrypt = require("bcrypt"); // Importar bcrypt

// Define o esquema para o modelo Usuario
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

// Middleware para hash da senha antes de salvar o usuário no banco de dados
UsuarioSchema.pre("save", async function (next) {
  // Verifica se a senha foi modificada; se não, passa para o próximo middleware
  if (!this.isModified("senha")) {
    return next();
  }
  // Gera um salt com 10 rounds
  const salt = await bcrypt.genSalt(10);
  // Criptografa a senha com o salt gerado
  this.senha = await bcrypt.hash(this.senha, salt);
  // Continua o processo de salvamento
  next();
});

// Método para comparar a senha fornecida com a senha criptografada armazenada
UsuarioSchema.methods.compararSenha = function (candidateSenha) {
  // Usa bcrypt para comparar a senha fornecida com a senha armazenada
  return bcrypt.compare(candidateSenha, this.senha);
};

// Cria o modelo Usuario se ainda não existir; caso contrário, usa o modelo existente
const Usuario =
  mongoose.models.Usuario || mongoose.model("Usuario", UsuarioSchema);

// Exporta o modelo Usuario
module.exports = Usuario;

// Importa o módulo mongoose para definir e interagir com o esquema do banco de dados MongoDB
const mongoose = require("mongoose");

// Define o esquema para o modelo Filme
const FilmeSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  // NÃO IMPLEMENTADO AINDA
  // usuario_id: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Usuario',                      // Referência ao modelo 'Usuario'
  //     required: false                     // Campo opcional
  // },
  descricao: {
    type: String,
    required: true,
  },
  estreia: {
    type: Date,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  imagem_capa: {
    type: String,
    required: true,
  },
});

// Exporta o modelo 'Filme' baseado no esquema definido
module.exports = mongoose.model("Filme", FilmeSchema);

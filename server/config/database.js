// Importa o módulo mongoose para interagir com o MongoDB
const mongoose = require("mongoose");

// Importa e configura as variáveis de ambiente do arquivo .env
require("dotenv").config();

// Conecta ao MongoDB usando a URL da base de dados especificada nas variáveis de ambiente
mongoose
  .connect(process.env.DATABASE_URL)
  // Se a conexão for bem-sucedida, exibe uma mensagem no console com o nome do banco de dados
  .then(() =>
    console.log(
      "Conectado ao MongoDB -- Nome do Banco: " + process.env.DATABASE_URL
    )
  )
  // Se ocorrer um erro na conexão, exibe a mensagem de erro no console
  .catch((err) => console.log("Erro ao conectar" + err));

// Exporta o módulo mongoose para que possa ser usado em outros arquivos
module.exports = mongoose;

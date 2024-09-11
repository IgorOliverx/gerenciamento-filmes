const mongoose = require('mongoose');

const FilmeSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
   // usuario_id: {
   //     type: mongoose.Schema.Types.ObjectId,
   //     ref: 'Usuario',
   //     required: false //por enquanto, somente para testes
   // },
    descricao: {
        type: String,
        required: true
    },
    estreia: {
        type: Date,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    imagem_capa: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Filme', FilmeSchema);
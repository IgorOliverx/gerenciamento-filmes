const mongoose = require('mongoose');

const ComentarioSchema = new mongoose.Schema({
    filme_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Filme',
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    conteudo: {
        type: String,
        required: true
    },
    nota: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    }
});

module.exports = mongoose.model('Comentario', ComentarioSchema);
const mongoose = require('mongoose');
const schema = mongoose.Schema;

let TestandoSchema = new schema ({
    nome: {
        type: String,
        required: "Este campo é obrigatório",
        max:100
    },
    status: {
        type: Boolean,
        required: "Este campo é obrigatório"
    },
});

module.exports = mongoose.model('teste', TestandoSchema);
const mongoose = require('mongoose');
const schema = mongoose.Schema;

let UserSchema = new schema ({
    username: {
        type: String,
        required: "Este campo é obrigatório",
        max:100
    },
    email: {
        type: Boolean,
        required: "Este campo é obrigatório"
    },
    password: {
        type: String,
        required: "Este campo é obrigatório",
        max:100
    },
    tipo: {
        type: Boolean,
        required: "Este campo é obrigatório",
        default: 1
    },
    status: {
        type: Boolean,
        required: "Este campo é obrigatório",
        default: 1
    },
    created_at: {
        type: Date,
        required: "Este campo é obrigatório",
        default: Date.now
    }
});

module.exports = mongoose.model('usuario', UserSchema);
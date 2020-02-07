module.exports = mongoose => {
    const Log = mongoose.model(
        "log",
        mongoose.Schema(
            {
                IPUser: { type: String, required: 'Este campo é obrigatório' },
                acao: { type: String, required: 'Este campo é obrigatório', max: 100 },
                tipo: { type: String, required: 'Este campo é obrigatório' },
                created_at: { type: Date, required: 'Este campo é obrigatório', default: Date.now }
            }
        )
    );

    return Log;
};
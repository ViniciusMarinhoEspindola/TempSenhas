module.exports = mongoose => {
    const Hospedagem = mongoose.model(
        "hospedagem",
        mongoose.Schema(
            {
                nome: { type: String, required: 'Este campo é obrigatório', max: 150 },
                user: { type: String, required: 'Este campo é obrigatório', max: 150 },
                senha: { type: String, required: 'Este campo é obrigatório', max: 150 },
                status: { type: Boolean, required: 'Este campo é obrigatório' },
                obs: { type: String },
                senhas: [Senha],
                created_at: { type: Date, required: 'Este campo é obrigatório', default: Date.now },
            }
        )
    );

    return Hospedagem;
};
module.exports = mongoose => {
    const Dominio = mongoose.model(
        "dominio",
        mongoose.Schema(
            {
                nome: { type: String, required: 'Este campo é obrigatório', max: 150 },
                user: { type: String, required: 'Este campo é obrigatório', max: 150 },
                senha: { type: String, required: 'Este campo é obrigatório', max: 150 },
                status: { type: Boolean, required: 'Este campo é obrigatório' },
                obs: { type: String },
            }
        )
    );

    return Dominio;
};
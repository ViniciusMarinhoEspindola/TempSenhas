module.exports = mongoose => {
    const Senha = mongoose.model(
        "senha",
        mongoose.Schema(
            {
                nome: { type: String, max: 150 },
                tipo: { type: String },
                host: { type: String },
                user: { type: String, max: 150 },
                senha: { type: String },
                status: { type: Boolean },
                obs: { type: String }
            }
        )
    );

    return Senha;
};
module.exports = mongoose => {
    const Cliente = mongoose.model(
        "cliente",
        mongoose.Schema(
            {
                nome: { type: String, required: 'Este campo é obrigatório' },
                status: { type: Boolean, required: 'Este campo é obrigatório' },
                projetos: [
                    { 
                        titulo: { type: String, required: 'Este campo é obrigatório' },
                        status: { type: Boolean, required: 'Este campo é obrigatório' },
                        hospedagens: [{ type: mongoose.Schema.Types.ObjectId, ref: 'hospedagem' }],
                        dominio: Dominio,
                    },
                ],
                created_at: { type: Date, required: 'Este campo é obrigatório', default: Date.now },
            }
        )
    );

    return Cliente;
};
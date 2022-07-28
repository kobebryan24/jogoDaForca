const database = require('../models');

class PalavraController {
    static async pegaTodasPalavra(req, res) {
        try {

            const todasAsPalavra = await database.Palavra.findAll();
            return res.status(200).json(todasAsPalavra);

        } catch {
            res.status(500).json(
                error.mesage
            )
        }
    }
    static async pegaUmaPalavra(req, res) {
        const {
            id
        } = req.params
        try {
            const umaPalavra = await database.Palavra.findOne({
                where: {
                    id: Number(id)
                }

            })
            return res.status(200).json(umaPalavra);
        } catch {
            return res.status(500);
        }
    }
    static async pegaPalavraCategoria(req, res) {
        const {
            id
        } = req.params
        try {
            const umaPalavra = await database.Palavra.findAll({
                where: {
                    categoria_id_categoria: Number(id)
                }

            })
            return res.status(200).json(umaPalavra);
        } catch {
            return res.status(500);
        }
    }
    static async criaPalavra(req, res) {
        const novaPalavra = req.body;
        try {
            const novaPalavraCriada = await database.Palavra.create(novaPalavra);
            return res.status(200).json(novaPalavra);
        } catch (error) {
            return res.status(500);

        }
    }
    static async atualizaPalavra(req, res) {
        const {
            id
        } = req.params;
        const novasInfos = req.body;
        try {
            await database.Palavra.update(novasInfos, {
                where: {
                    id: Number(id),
                }
            })
            const PalavraAtualizada = await database.Palavra.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(PalavraAtualizada);
        } catch (error) {
            return res.status(500);
        }
    }
    static async deletaPalavra(req, res) {
        const {
            id
        } = req.params;
        try {
            await database.Palavra.destroy({
                where: {
                    id: Number(id)
                }
            })
            res.status(200).json({
                mensagem: `id ${id} deletado`
            })
        } catch (error) {
            return res.status(500);

        }
    }

}
module.exports = PalavraController;
const database = require('../models');

class CategoriaController {
    static async pegaTodasCategoria(req, res) {
        try {

            const todasAsCategoria = await database.Categoria.findAll();
            return res.status(200).json(todasAsCategoria);

        } catch {
            res.status(500).json(
                error.mesage
            )
        }
    }
    static async pegaUmaCategoria(req, res) {
        const {
            id
        } = req.params
        try {
            const umaCategoria = await database.Categoria.findOne({
                where: {
                    id: Number(id)
                }

            })
            return res.status(200).json(umaCategoria);
        } catch {
            return res.status(500);
        }
    }
    static async criaCategoria(req, res) {
        const novaCategoria = req.body;
         try {
            const novaCategoriaCriada = await database.Categoria.create(novaCategoria);
            return res.status(200).json(novaCategoria);
        } catch (error) {
            return res.status(500);

        }
    }
    static async atualizaCategoria(req, res) {
        const {
            id
        } = req.params;
        const novasInfos = req.body;
        try {
            await database.Categoria.update(novasInfos, {
                where: {
                    id: Number(id),
                }
            })
            const CategoriaAtualizada = await database.Categoria.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(CategoriaAtualizada);
        } catch (error) {
            return res.status(500);
        }
    }
    static async deletaCategoria(req, res) {
        const {
            id
        } = req.params;
        try {
            await database.Categoria.destroy({
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
module.exports = CategoriaController;
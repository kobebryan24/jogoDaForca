
const database = require('../models');

class RankingController {
    static async pegaTodosRanking(req, res) {
        try {

            const todasAsRanking = await database.Ranking.findAll({
                order: [
                    ['pontuacao', 'DESC']
                ],
                limit: 10,
                subQuery: false
            });
            return res.status(200).json(todasAsRanking);

        } catch {
            res.status(500).json(
                error.mesage
            )
        }
    }

    static async criaRanking(req, res) {
        const novaRanking = req.body;
        try {
            const novaRankingCriada = await database.Ranking.create(novaRanking);
            return res.status(200).json(novaRanking);
        } catch (error) {
            return res.status(500);

        }
    }
    static async atualizaRanking(req, res) {
        const {
            id
        } = req.params;
        const novasInfos = req.body;
        try {
            await database.Ranking.update(novasInfos, {
                where: {
                    id: Number(id),
                }
            })
            const RankingAtualizada = await database.Ranking.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(RankingAtualizada);
        } catch (error) {
            return res.status(500);
        }
    }
    static async deletaRanking(req, res) {
        const {
            id
        } = req.params;
        try {
            await database.Ranking.destroy({
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
module.exports = RankingController;
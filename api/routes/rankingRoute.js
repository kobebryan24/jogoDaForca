const {
    Router
} = require('express')
const RankingController = require('../controllers/RankingController.js');

const router = Router();
router.get('/ranking', RankingController.pegaTodosRanking)
router.post('/ranking', RankingController.criaRanking)
router.put('/ranking/:id', RankingController.atualizaRanking)
router.delete('/ranking/:id', RankingController.deletaRanking)

module.exports = router
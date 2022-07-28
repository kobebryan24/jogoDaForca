const {
    Router
} = require('express')
const PalavraController = require('../controllers/PalavraController.js');

const router = Router();
router.get('/palavra', PalavraController.pegaTodasPalavra)
router.get('/palavra/:id', PalavraController.pegaUmaPalavra)
router.post('/palavra', PalavraController.criaPalavra)
router.put('/palavra/:id', PalavraController.atualizaPalavra)
router.delete('/palavra/:id', PalavraController.deletaPalavra)
router.get('/palavras/categorias/:id', PalavraController.pegaPalavraCategoria)

module.exports = router
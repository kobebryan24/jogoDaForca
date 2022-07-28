const {
    Router
} = require('express')
const CategoriaController = require('../controllers/CategoriaController.js')

const router = Router();

router.get('/categorias', CategoriaController.pegaTodasCategoria)
router.get('/categoria/:id', CategoriaController.pegaUmaCategoria)
router.post('/categorias', CategoriaController.criaCategoria)
router.put('/categorias/:id', CategoriaController.atualizaCategoria)
router.delete('/categorias/:id', CategoriaController.deletaCategoria)

module.exports = router
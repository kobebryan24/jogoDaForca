const bodyParcer = require('body-parser')
const categorias = require('./categoriaRoute.js')
const ranking = require('./rankingRoute.js')

const palavra = require('./palavraRoute.js');
module.exports = app => {
    app.use(bodyParcer.json())
    app.use(categorias)
    app.use(palavra)
    app.use(ranking)
   
}

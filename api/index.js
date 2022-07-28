const express = require('express');
const routes = require('./routes/index.js')
const router = express.Router();
const path = require('path');
const cors = require('cors')
const https = require('https');
const port = 3333;
const app = express();
let html = '/index.html'
let corsOptions = {
    origin: [''],
    methods: 'GET, POST, PATCH, DELETE, PUT'

};
const options = {
    hostname: 'http://localhost',
    port: 3333,
    path: '/palavra',
    method: 'GET',
};
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + html));
});
app.use(cors(corsOptions));


routes(app)
app.use('/', router);
app.listen(port, () => {
    console.log(`O servidor esta rodando na porta ${port}`)

})



module.exports = app;
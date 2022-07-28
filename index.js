const express = require('express');
const path = require('path');
const bodyParcer = require('body-parser');
const routesApi = require('./api/routes/index.js')
const ejs = require('ejs');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

routesApi(app)

app.listen(port, () => {
    console.log(`O servidor esta rodando na porta ${port}`)
});
module.exports = app;
const express = require('express')
const app = express()
const config = require('./config')
const apiRouter = require('./routes/api')

//nasze ścieżki - routes
app.use('/', apiRouter)

//server
app.listen(config.port, function(){
    console.log('serwer słucha... http://localhost:' + config.port)
})
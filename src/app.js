let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extened: true}))

require('./route.js')(app)


let port = 8080

app.listen(port, function () {
    console.log('server running on ' + port)
})
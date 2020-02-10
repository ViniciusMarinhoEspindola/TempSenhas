const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const sassMiddleware = require('node-sass-middleware')
const fs = require('fs');

const app = express()

// Rotas
fs.readdir(path.join(__dirname + '/src/routes'), (error,files) => {
  files.forEach((file) => app.use(require('./src/routes/' + file)))
})

// Banco
const mongoose = require('mongoose')

const mongoDB = `mongodb+srv://root:root123456@locallibrary-cutnw.gcp.mongodb.net/Senhas?retryWrites=true&w=majority`

mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.Promise = global.Promise
const db = mongoose.connection

db.on('error', console.error.bind(console, 'Erro na ligação ao MongoDB'))

// Views
app.set('views', path.join(__dirname, '/src/views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
  sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true,
  })
)
//app.use(express.static(path.join(__dirname, 'public')))

// Server
const porta = process.env.port || 8000

app.listen(porta, () => {
  console.log('Servidor na porta: ' + porta)
})

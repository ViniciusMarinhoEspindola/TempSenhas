const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const sassMiddleware = require('node-sass-middleware');
const cors = require('cors');
const fs = require('fs');

require('dotenv-safe').config({ allowEmptyValues: true });
require('./src/config/database.config');

const app = express();

// Rotas
fs.readdir(path.join(__dirname + '/src/routes'), (error, files) => {
  files.forEach(file => app.use('/api', require('./src/routes/' + file)));
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// SASS
app.use(
  sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true,
  }),
);

// Static Folder
app.use(express.static(path.join(__dirname, '/public/')));

// Passport
const passport = require('passport');
const session = require('express-session');

// Initialize Passport
require('./src/auth/init.auth')(passport);

app.use(
  session({ secret: 'mySecretKey', resave: false, saveUninitialized: true }),
);
app.use(passport.initialize());
app.use(passport.session());

// Server
const porta = process.env.PORT || 8000;

app.listen(porta, () => console.log(`Servidor em: http://localhost:${porta}`));

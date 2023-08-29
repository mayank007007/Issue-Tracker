// require all required module and variable
const express = require('express');
const server = express();
const port = 3700;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const flash = require('connect-flash');
const customMware = require('./config/middleware');
const session = require('express-session');

// setup the express and assets file
server.use(express.urlencoded());
server.use(express.static('./assets'));

// setup the view engine
server.set('view engine', 'ejs');
server.set('views', './views');

server.use(expressLayouts);

// extract the style and script
server.set('layout extractStyles', true);
server.set('layout extractScripts', true);

// use the session for flash function
server.use(session({
    secret: "IssueCreater",
    resave: false,
    saveUninitialized: false
}));

// use the falsh function and custom mware
server.use(flash());
server.use(customMware.setFlash);

// use the routes here
server.use('/', require('./routes'));

// here setup the port
server.listen(port, function (err) {
    if (err) {
        console.log('error in connecting to port', err);
    }
    console.log('app is listen successfully on port: ', port)
})
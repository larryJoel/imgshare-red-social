const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const multer = require('multer');
const express = require('express');
// const routes = require('../routes/index');
const errorHandler = require('errorhandler');

module.exports = app => {
    //settings
    app.set ('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, 'views'));
    app.engine('.hbs',exphbs({
        defaultLayout:'main',
        // layoutsDir: path.join(app.get('views','layouts')),
        partialsDir: path.join(app.get('views'),'partials'),
        extname:'.hbs',
        helpers:require('./helpers')
    }));
    app.set('view engine','.hbs');

    //middlewares
    app.use(morga('dev'));
    app.use(multer({dest:path.join(__dirname,'../public/uplad/temp')}).single('image'));
    app.use(express.urlencoded({extended:false}));
    app.use(express.json());

    // //routes
    // routes(app);

    // //static files
    // app.use('public',express.static(path.join(__dirname,('../public'))))

    // //errorhandlers
    // if('development' ===app.get('env')){
    //     app.use(errorHandler);
    // }

    return app;
}
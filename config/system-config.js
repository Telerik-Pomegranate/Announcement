System.config({
    'transpiler': 'plugin-babel',
    'map': {
        'main': '../assets/scripts/app.js',
        'router': '../config/sammy-config.js',
        'jquery': '../lib/scripts/bower_components/jquery/dist/jquery.js',
        'plugin-babel': '../lib/scripts/node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '../lib/scripts/node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
        'system': '../lib/scripts/bower_components/system.js/dist/system.js',
        'sammy': '../lib/scripts/bower_components/sammy/lib/sammy.js',
        'handlebars': '../lib/scripts/bower_components/handlebars/handlebars.js',
        'templates': '../views/helpers/templates.js',
        //'script-contact-form': '../assets/scripts/script-contact-form.js'
        'validator': '../models/helpers/validators.js',
        'encryptor': '../models/helpers/encryptors.js',
        'firebase-database': '../database/firebas-databas.js',
        'firebase-config': '../config/firebase-config.js',
        'user-model': '../models/users-model.js',
        'loading-screen': '../assets/scripts/loading-screen.js',
        'error-logger': '../models/helpers/error-loger.js',
        'accountController': '/../../controllers/account-controlers.js/',
        'login-logout': '../assets/scripts/login-logout.js',
    },
    //tuka poneje v node loaderite nakraq pri import i export ne se pishe .js puk i tuka intelisensa ne go slaga za da se znae che sa .js failove se pishe tuk 
    packages: {
        '/': {
            defaultExtension: 'js'
        }
    }
});
System.import('main');
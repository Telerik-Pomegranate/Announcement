SystemJS.config({
    'transpiler' : 'plugin-babel',
    'map' : {
        'router': '../config/sammy-config.js',
        'jquery': '../lib/scripts/bower_components/jquery/dist/jquery.js',
        'plugin-babel': '../lib/scripts/node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '../lib/scripts/node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
        'system': '../lib/scripts/bower_components/system.js/dist/system.js',
        'sammy': '../lib/scripts/bower_components/sammy/lib/sammy.js',
        'handlebars': '../lib/scripts/bower_components/handlebars/handlebars.js',
        'templates': '../views/helpers/templates.js',
        'validator': '../models/helpers/validators.js',
        'encryptor': '../models/helpers/encryptors.js',
        'firebase-database': '../database/firebas-databas.js',
        'firebase-config': '../config/firebase-config.js',
        'user-model': '../models/users-model.js',
        'announ-model': '../models/announ-model.js',
        'accountController': '../controllers/account-controlers.js',
        'announController': '../controllers/announ-controlers.js',
        'login-logout': '../assets/scripts/login-logout.js',
        'search':'../assets/scripts/searchNavBar.js',
        'public-announ':'../assets/scripts/publicannoun.js',
        'prevNextPage':'../assets/scripts/navigationPage.js',
        'eventImageAnnoun':'../assets/scripts/eventImageAnnoun.js',
        'test':'./test.js'
    }
});

System.import('test');
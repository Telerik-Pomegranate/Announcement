import 'jquery';
import Sammy from 'sammy';
import templates from 'templates';
//import eventLoader from '../../views/helpers/event-loader';
import accountController from 'accountController';
//import firebaseModule from '../../config/firebase-config';
import templateDb from 'templateDb';
import Handlebars from 'handlebars';
const router = (function() {
    function start() {
        var sammyApp = Sammy('#main', function() {
            this.get('/', function() {
                this.redirect('#/');
            });
            this.get('#/', function() {
                this.redirect('#/home');
            });
            this.get('#/home', function() {
                templates.load('home').then(templateHTML => { $('#main').html(templateHTML); });
            });
            this.get('/login', function() {
                templates.load('login').then(templateHTML => { $('#main').html(templateHTML); });
                //eventLoader.loginPageEvent('#main');
            });
            this.get('/register', function() {
                templates.load('register').then(templateHTML => { $('#main').html(templateHTML); });
                //eventLoader.loginPageEvent('#main');
            });
            this.get('/homes', function() {
                var items;
                templates.get('itemsHomes').then((res) => {
                    items = res;
                    //sega shte returnem promis-shtoto vzimame pak biblioteka handlebars
                    return templates.load('homes'); //-items tepleita-to sushto raboti s promisi- //towa handlebars za da e po qsno go pravim
                }).then((templateHTML) => {
                    var template = Handlebars.compile(templateHTML);
                    $('#main').html(template({
                        items
                    }));
                });
                //templates.load('homes').then(templateHTML => { $('#main').html(templateHTML); });
                // eventLoader.loadData('#main');
            });
            this.get('/cars', function() {
                var items;
                templates.get('itemsCars').then((res) => {
                    items = res;
                    //sega shte returnem promis-shtoto vzimame pak biblioteka handlebars
                    return templates.load('cars'); //-items tepleita-to sushto raboti s promisi- //towa handlebars za da e po qsno go pravim
                }).then((templateHTML) => {
                    var template = Handlebars.compile(templateHTML);
                    $('#main').html(template({
                        items
                    }));
                });
                //templates.load('cars').then(templateHTML => { $('#main').html(templateHTML); });

            });
            this.get('/pets', function() {
                var items;
                templates.get('itemsPets').then((res) => {
                    items = res;
                    //sega shte returnem promis-shtoto vzimame pak biblioteka handlebars
                    return templates.load('pets'); //-items tepleita-to sushto raboti s promisi- //towa handlebars za da e po qsno go pravim
                }).then((templateHTML) => {
                    var template = Handlebars.compile(templateHTML);
                    $('#main').html(template({
                        items
                    }));
                });
                //templates.load('pets').then(templateHTML => { $('#main').html(templateHTML); });

            });
            this.get('/contact', function() {
                templates.load('contact').then(templateHTML => { $('#main').html(templateHTML); });

            });
            this.get('/homes/announcement/:id', function() {
                var items;
                templates.getById(this.params.id, 'itemsHomes').then(function(res) {
                    items = res;
                    // $('<h1 />').html(res.name).appendTo('#content').html();--eto taka beshe samo no poneje ne iztrivahse staroto apendato zatowa kato dolu   
                    return templates.load('announcement'); //-items tepleita-to sushto raboti s promisi- //towa handlebars za da e po qsno go pravim
                }).then((templateHTML) => {
                    var template = Handlebars.compile(templateHTML);
                    $('#main').html(template({
                        // items
                    }));
                });
                // templates.load('announcement').then(templateHTML => { $('#main').html(templateHTML); });

            });
            this.get('/cars/announcement/:id', function() {
                var items;
                templates.getById(this.params.id, 'itemsCars').then(function(res) {
                    items = res;
                    // $('<h1 />').html(res.name).appendTo('#content').html();--eto taka beshe samo no poneje ne iztrivahse staroto apendato zatowa kato dolu   
                    return templates.load('announcement'); //-items tepleita-to sushto raboti s promisi- //towa handlebars za da e po qsno go pravim
                }).then((templateHTML) => {
                    var template = Handlebars.compile(templateHTML);
                    $('#main').html(template({
                        // items
                    }));
                });
                // templates.load('announcement').then(templateHTML => { $('#main').html(templateHTML); });

            });
            this.get('/pets/announcement/:id', function() {
                var items;
                templates.getById(this.params.id, 'itemsPets').then(function(res) {
                    items = res;
                    // $('<h1 />').html(res.name).appendTo('#content').html();--eto taka beshe samo no poneje ne iztrivahse staroto apendato zatowa kato dolu   
                    return templates.load('announcement'); //-items tepleita-to sushto raboti s promisi- //towa handlebars za da e po qsno go pravim
                }).then((templateHTML) => {
                    var template = Handlebars.compile(templateHTML);
                    $('#main').html(template({
                        // items
                    }));
                });
                // templates.load('announcement').then(templateHTML => { $('#main').html(templateHTML); });

            });
            this.post('#/login', accountController.signIn);
            this.post('#/register', accountController.signUp);
            this.get('#/logout', accountController.signOut);
        });
        sammyApp.run('#/home');
        /*let auth = firebase.auth();

        let promis = auth.createUserWithEmailAndPassword('asd@abv.bg', '123456')
            //let promis = auth.signInWithEmailAndPassword('asd@abv.bg', '123456')

        promis.then(e => alert(e)).catch(e => {
                let asd = document.getElementsByClassName('input-username')[0];
                console.log(asd.parentElement)
                let errorMsg = asd.parentElement;
                errorMsg.style.color = 'red';
                asd.parentElement.innerHTML += e.message;
                setTimeout(function() {
                    console.log(asd.parentElement)
                    asd.innerHTML = '';
                    errorMsg.style.color = '';
                    // asd.style
                }, 3000)
            }) */ //tuka ima i then(e => alert(e)) predi tova
        /*firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                //tuka btnlog.classlis.remove('hide')
                console.log('firebaseuser ', firebaseUser)
            } else {
                //a tuka da mu dobavim hide
                console.log('nema takuv uzer')
            }
        });*/
        //firebase.auth().signOut(); //tuka sled event logout*/
    }
    return {
        start
    };
}());

export default router;
import 'jquery';
import Sammy from 'sammy';
import templates from 'templates';
//import eventLoader from '../../views/helpers/event-loader';
import accountController from 'accountController';
//import firebaseModule from '../../config/firebase-config';
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
                templates.load('homes').then(templateHTML => { $('#main').html(templateHTML); });
                // eventLoader.loadData('#main');
            });
            this.get('/cars', function() {
                templates.load('cars').then(templateHTML => { $('#main').html(templateHTML); });

            });
            this.get('/pets', function() {
                templates.load('pets').then(templateHTML => { $('#main').html(templateHTML); });

            });
            this.get('/contact', function() {
                templates.load('contact').then(templateHTML => { $('#main').html(templateHTML); });

            });
            this.get('/announcement', function() {
                //    alert(this.params['id'])
                templates.load('announcement').then(templateHTML => { $('#main').html(templateHTML); });

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
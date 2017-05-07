import 'jquery';
import Sammy from 'sammy';
import templates from 'templates';
import accountController from 'accountController';
import announController from 'announController';
import Handlebars from 'handlebars';

const router = (function() {
    function start() {
        let sammyApp = Sammy('#main', function() {
            this.get('/', function() {
                this.redirect('#/');
            });
            this.get('#/', function() {
                this.redirect('#/home');
            });
            this.get('#/home', function() {
               // templates.load('home').then(templateHTML => { $('#main').html(templateHTML); });
               announController.getTwoAnnounEveryCategory();
            });
            this.get('/login', function() {
                templates.load('login').then(templateHTML => { $('#main').html(templateHTML); });
            });
            this.get('/register', function() {
                templates.load('register').then(templateHTML => { $('#main').html(templateHTML); });
            });
            this.get('/publicannoun', function() {
                templates.load('publicannoun').then(templateHTML => { $('#main').html(templateHTML); });
            });
            this.post('#/createannoun', announController.createAnnoun);
            this.get('/user-account/:page', function() {
                accountController.accountUser('user-account', this.params.page);
            });
            this.get('/announ-on-user/:page/:id', function() {
                accountController.userAnnoun('announ-on-user', this.params.page, this.params.id);
            });
            this.post('#/deleteAnnouncement/:id', function(sammy) {
                accountController.removeAnnouncement(sammy)
            });
            this.get('/contact', function() {
                templates.load('contact').then(templateHTML => { $('#main').html(templateHTML); });
            });
            this.get('/homes/:page', function() {
                announController.allItems('homes', this.params.page)
            });
            this.get('/cars/:page', function() {
                announController.allItems('cars', this.params.page)
            });
            this.get('/pets/:page', function() {
                announController.allItems('pets', this.params.page)
            });
            this.get('/homes/announcement/:id', function() {
                announController.getAnnoun('homes', this.params.id)
            });
            this.get('/cars/announcement/:id', function() {
                announController.getAnnoun('cars', this.params.id)
            });
            this.get('/pets/announcement/:id', function() {
                announController.getAnnoun('pets', this.params.id)
            });

            this.post('#/login', accountController.signIn);
            this.post('#/register', accountController.signUp);
            this.get('#/logout', accountController.signOut);
        });
        sammyApp.run('#/home');
    }
    return {
        start
    };
}());

export default router;
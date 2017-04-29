//import Sammy from 'sammy';
import 'jquery';
import router from 'router';
import firebaseDb from '../../database/firebas-databas';
import firebaseModule from 'firebase-config';
$(document).ready(function() {
    router.start();
    /*    var homes = firebaseModule.database.child('cars')
        var homeKes = homes.push();
        var key = homeKes.key;

        homeKes.set({
           
            id: key
        });*/
    //var key = homes.push({ pesho: 123 })
    //  alert(key.key)
    /* homes.on('value', function(snap) {
             for (let i in snap.val())
             // console.log('value ', snap.val())
                 console.log(snap.val()[i])
         })*/
    //    var homes = firebaseModule.database.child('homes')
    // var msgRef = homes.push({
    /* 'url': 'https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg',
     'head': 'Sale hose',
     'price': '12345 $',
     'subheading': '2 bed end terrace house for sale',
     'body': 'Summary Positioned within a no through road in a popular residential area is this spacious character cottage which has been fully renovated to a high standard by the current owner. The property is only 0.8 miles to Maidenhead town centre and mainline railway station (Future Crossrail).',
     id: 1*/
    /* 'url': 'https://static.pexels.com/photos/261187/pexels-photo-261187.jpeg',
     'head': 'Sale beauty mouse',
     'price': '5435 $',
     'subheading': '2 bed end terrace house for sale',
     'body': 'Summary Positioned within a no through road in a popular residential area is this spacious character cottage which has been fully renovated to a high standard by the current owner. The property is only 0.8 miles to Maidenhead town centre and mainline railway station (Future Crossrail).',
     'id': 2*/
    /*  'url': 'https://static.pexels.com/photos/259597/pexels-photo-259597.jpeg',
      'head': 'Sale small house',
      'price': '187945 $',
      'subheading': '2 bed end terrace house for sale',
      'body': 'Summary Positioned within a no through road in a popular residential area is this spacious character cottage which has been fully renovated to a high standard by the current owner. The property is only 0.8 miles to Maidenhead town centre and mainline railway station (Future Crossrail).',
      'id': 3*/
    // });
    /*  {
                    'url': 'https://static.pexels.com/photos/261187/pexels-photo-261187.jpeg',
                    'head': 'Sale beauty mouse',
                    'price': '5435 $',
                    'subheading': '2 bed end terrace house for sale',
                    'body': 'Summary Positioned within a no through road in a popular residential area is this spacious character cottage which has been fully renovated to a high standard by the current owner. The property is only 0.8 miles to Maidenhead town centre and mainline railway station (Future Crossrail).',
                    'id': 2
                },
                {
                    'url': 'https://static.pexels.com/photos/259597/pexels-photo-259597.jpeg',
                    'head': 'Sale small house',
                    'price': '187945 $',
                    'subheading': '2 bed end terrace house for sale',
                    'body': 'Summary Positioned within a no through road in a popular residential area is this spacious character cottage which has been fully renovated to a high standard by the current owner. The property is only 0.8 miles to Maidenhead town centre and mainline railway station (Future Crossrail).',
                    'id': 3
                }
            ]);*/

    /* var homes = firebaseModule.database.child('homes'); //pravq si papka homes

     var msgRef = homes.push([{ //taka poskam wutre masiwa 0,1,2]);*/

    /* msgRef.child('3').set({ pesho: 'pesho' }) //-taka dobavqm nowi s 3-ti nomer kato go vzema ot publikowanata forma-towa 3 e wse edno id-to

     msgRef.orderByKey().limitToLast(1).on('child_added', function(snap) { //taka mi dawa wsichki ot poslednoto 0,1,2,3 ako napisha 1 vmesto 100 shet dade poslednoto
         console.log('added ', snap.val())
     })
     msgRef.on('child_removed', function(snap) { //towa i dolnoto sa pod noejs ako se promenq w samata baza ili se trie ti pokazwa
         console.log('removed ', snap.val())
     })
     msgRef.on('child_changed', function(snap) {
         console.log('changed ', snap.val())
     })
     msgRef.on('value', function(snap) {
         console.log('value ', snap.val())
     })
     msgRef.child(3).remove(); //taka spored id-to go trie -ako e bez child iztrivwa wsichki vutre-govorim samo za poslednite ne tezi det sa se obrazuvali ot refresh-kakto i gore dawa samo ot poslednite*/
    /*firebaseDb.onAuthStateChanged(user => {
        console.log(user.displayName)
    })*/
    //ako e realen survur koda taka se zapazwat da vidim za posle dali da gi ostavim
    firebaseDb.onAuthStateChanged(user => {
        if (user) {

            localStorage.setItem('username', user.displayName);
            localStorage.setItem('userUid', user.uid);
        } else {

            localStorage.setItem('username', null);
            localStorage.setItem('userUid', null);
        }
    });

    //taka da gi vzimam ot bazata
    /* var ref = firebaseModule.database;
     ref.on('value', gotData, errData);

     function gotData(data) {

         let objHomes = {};
         var scores = data.val();
         console.log(scores)
         var keys = scores['pets'];
         console.log(keys)*/

    /* for (let sc in keys) {
         objHomes[sc] = keys[sc];

         console.log(keys[sc])
     }*/
    //    console.log('objHome ', objHomes)
    /*     //  return objHomes
     }


     function errData(data) {
         console.log(data)
     }*/


});



/*import 'jquery';
import Sammy from 'sammy';
import templates from 'templates';
//import eventLoader from '../../views/helpers/event-loader';
import accountController from 'accountController';
//import firebaseModule from '../../config/firebase-config';
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
/*firebase.auth().signOut(); //tuka sled event logout*/
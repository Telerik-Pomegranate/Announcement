//import Sammy from 'sammy';
import 'jquery';
import router from 'router';
import firebaseDb from '../../database/firebas-databas';
import firebaseModule from 'firebase-config';
import search from 'search';
$(document).ready(function() {
    router.start();
    search.start();
    firebaseDb.onAuthStateChanged(user => {
        if (user) {

            localStorage.setItem('username', user.displayName);
            localStorage.setItem('userUid', user.uid);
        } else {

            localStorage.setItem('username', null);
            localStorage.setItem('userUid', null);
        }
    });

    
});
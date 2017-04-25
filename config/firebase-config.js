  //import firebase from '';
  // Initialize Firebase
  const firebaseModule = (function() {
      let config = {
          apiKey: "AIzaSyCO5M1SvfgnogVLmYnUxPaBD3e0_5hD7nk",
          authDomain: "shops-b5548.firebaseapp.com",
          databaseURL: "https://shops-b5548.firebaseio.com",
          projectId: "shops-b5548",
          storageBucket: "shops-b5548.appspot.com",
          messagingSenderId: "32802370058"
      };
      firebase.initializeApp(config);

      const database = firebase.database().ref();
      const auth = firebase.auth();

      return {
          database,
          auth
      };

  }());
  export default firebaseModule;


  /* import { firebase } from 'firebase';

const firebaseModule = (function () {
    const config = {
        apiKey: "AIzaSyBbTzQlQZOfzJv-ksXnBCEkuXgWNWQhO9o",
        authDomain: "themovies-db.firebaseapp.com",
        databaseURL: "https://themovies-db.firebaseio.com",
        storageBucket: "",
        messagingSenderId: "786197584680"
    };

    firebase.initializeApp(config);

    const database = firebase.database().ref();
    const auth = firebase.auth();

    return {
        database, auth
    };
} ());

export default firebaseModule;*/
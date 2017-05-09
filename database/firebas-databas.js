import firebaseModule from 'firebase-config';

let firebaseDb = (function () {

    function getChild(child, database) {
        let db = database.database;
        return db.child(child);
    }

    function createUserWithEmail(email, password, username, database) {
        let auth = database.auth;
        return auth.createUserWithEmailAndPassword(email, password)
            .then(() => this.getCurrentUser(database))
            .then(user => {
                console.log(auth);

                user.updateProfile({ displayName: username });
                localStorage.setItem('username', username);
                localStorage.setItem('userUid', user.uid);
            })
            .catch(error => Promise.reject(error));
    }

    function signInWithEmail(email, password, database) {
        let auth = database.auth;

        return auth.signInWithEmailAndPassword(email, password)
            .catch(error => Promise.reject(error));
    }

    function signOut(database) {
        let auth = database.auth;

        return auth.signOut();
    }

    function getCurrentUser(database) {
        console.log(database);
        let auth = database.auth;

        return new Promise(resolve => {


            auth.onAuthStateChanged(userInfo => resolve(userInfo));
        });
    }

    function onAuthStateChanged(database, callback) {
        let auth = database.auth;

        return auth.onAuthStateChanged(function (user) {
            callback(user); nAuthStateChanged(userInfo => resolve(userInfo));
        });
    }

    function onAuthStateChanged(database, callback) {
        let auth = database.auth;

        return auth.onAuthStateChanged(function (user) {
            callback(user);
        });
    }

    return {
        getChild,
        getCurrentUser,
        createUserWithEmail,
        signInWithEmail,
        signOut,
        onAuthStateChanged,
    };
}());
export default firebaseDb;
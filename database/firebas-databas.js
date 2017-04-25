import firebaseModule from 'firebase-config';

const firebaseDb = (function() {
    const database = firebaseModule.database;
    const auth = firebaseModule.auth;

    function getChild(child) {
        return database.child(child);
    }

    function createUserWithEmail(email, password, username) {
        return auth.createUserWithEmailAndPassword(email, password)
            .then(() => this.getCurrentUser())
            .then(user => {
                user.updateProfile({ displayName: username });
                localStorage.setItem('username', username);
                localStorage.setItem('userUid', user.uid);
            })
            .catch(error => Promise.reject(error));
    }

    function signInWithEmail(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
            .catch(error => Promise.reject(error));
    }

    function signOut() {
        return auth.signOut();
    }

    function getCurrentUser() {
        return new Promise(resolve => {
            auth.onAuthStateChanged(userInfo => resolve(userInfo));
        });
    }

    function onAuthStateChanged(callback) {
        return auth.onAuthStateChanged(function(user) {
            callback(user);
        });
    }

    return {
        getCurrentUser,
        createUserWithEmail,
        signInWithEmail,
        signOut,
        onAuthStateChanged,
    };
}());
export default firebaseDb;
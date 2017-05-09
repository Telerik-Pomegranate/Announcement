import firebaseDb from 'firebase-database';
import validator from 'validator';
import encryptor from 'encryptor';
import announModel from 'announ-model';

class UserModel {
    constructor(database) {
        this.database = database;
    }
    signIn(email, password) {
        password = encryptor.encrypt(password);

        return firebaseDb.signInWithEmail(email, password, this.database)
            .catch(error => Promise.reject(error));
    }

    signUp(email, password, username) {

        try {
            validator.validateSignUpForm(email, password, username);
        } catch (error) {
            return Promise.reject({ code: '500', message: error });
        }

        password = encryptor.encrypt(password);

        return firebaseDb.createUserWithEmail(email, password, username, this.database)
            .catch(error => Promise.reject(error));
    }

    signOut() {
        return firebaseDb.signOut(this.database)
            .catch(error => Promise.reject(error));
    }
    accountInfo() {
        return firebaseDb.getCurrentUser(this.database)
            .catch(error => Promise.reject(error));
    }
    accountUser() {
        let promise = new Promise((resolve, reject) => {
            let currUser = firebaseDb.getCurrentUser();
            let resultUser;
            let items = {};
            currUser.then(user => {
                resultUser = user;
                announModel.getItems()
                    .then((res) => {
                        let AllAnnouncement = [];
                        for (let category in res) {
                            let AllAnnoun = res[category];
                            for (let announ in AllAnnoun) {
                                if (resultUser.uid === AllAnnoun[announ].currentUserId) {
                                    AllAnnouncement.push(AllAnnoun[announ]);
                                }
                            }
                        }
                        items.user = resultUser;
                        items.items = AllAnnouncement;
                        resolve(items);
                    });
            });
        });
        return promise;
    }
}

export default UserModel;
import firebaseDb from 'firebase-database';
import validator from 'validator';
import encryptor from 'encryptor';
import announModel from 'announ-model';
class UserModel {

    signIn(email, password) {
        password = encryptor.encrypt(password);

        return firebaseDb.signInWithEmail(email, password)
            .catch(error => Promise.reject(error));
    }

    signUp(email, password, username) {

        try {
            validator.validateSignUpForm(email, password, username);
        } catch (error) {
            console.log('eee', error)
            return Promise.reject({ code: '500', message: error });
        }

        password = encryptor.encrypt(password);

        return firebaseDb.createUserWithEmail(email, password, username)
            .catch(error => Promise.reject(error));
    }

    signOut() {
        return firebaseDb.signOut()
            .catch(error => Promise.reject(error));
    }
    accountInfo() {
        return firebaseDb.getCurrentUser()
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
                    })
            });
        })
        return promise;
    }
    userAnnoun(id) {
        let promise = new Promise((resolve, reject) => {
            let resultUser;
            let items = {};
            resultUser = id;
            announModel.getItems()
                .then((res) => {
                    let AllAnnouncement = [];
                    for (let category in res) {
                        let AllAnnoun = res[category];
                        for (let announ in AllAnnoun) {
                            if (id === AllAnnoun[announ].currentUserId) {
                                AllAnnouncement.push(AllAnnoun[announ]);
                            }
                        }
                    }
                    items.user = resultUser;
                    items.items = AllAnnouncement;
                    resolve(items);
                })
                // });
        })
        return promise;
    }
    removeAnnouncement(currId) {
        currId = currId;
        let getItems = announModel.getItems();
        let promise = new Promise((resolve, reject) => {
            let AllAnnouncement = [];
            getItems.then(res => {
                for (let category in res) {
                    let AllAnnoun = res[category];
                    for (let announ in AllAnnoun) {
                        if (currId === AllAnnoun[announ].id) {
                            AllAnnouncement.push({
                                idAnnoun: AllAnnoun[announ],
                                announCategory: category
                            });
                        }
                    }
                }
                return AllAnnouncement;
            });

            resolve(AllAnnouncement);
        });
        return promise;
    }
}

const userModel = new UserModel();
export default userModel;
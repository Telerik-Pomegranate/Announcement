import firebaseModule from 'firebase-config';
import userModel from 'user-model';
class AnnounModel {

    getItems() {
        let promis = new Promise((resolve, reject) => {
            firebaseModule.database.on('value', function(snap) {
                if (snap.val() == null) {
                    reject(null);
                } else {
                    let petsArr = [];
                    let carsArr = [];
                    let homesArr = [];
                    for (let i in snap.val().pets) {
                        petsArr.push(snap.val().pets[i]);
                    }
                    for (let i in snap.val().cars) {
                        carsArr.push(snap.val().cars[i]);
                    }
                    for (let i in snap.val().homes) {
                        homesArr.push(snap.val().homes[i]);
                    }

                    let items = {
                        pets: petsArr,
                        homes: homesArr, 
                        cars: carsArr 
                    };

                    resolve(items);
                }
            });
        });
        return promis;
    }

    getById(id, itemsAnnoun) {
        id = id; 
        let getItems = this.getItems();
        let promise = new Promise(function(resolve, reject) {
            getItems.then(res => {
                let item = res[itemsAnnoun].find(function(item) {
                    return item.id === id;
                })
                if (item) {
                    resolve(item);
                } else {
                    reject('ID not found')
                }
            });
        });
        return promise;
    }

    saveAnnoun(category, url, otherUrl, heading, price, subHeading, body, mobile) {

        let categoryRef = firebaseModule.database.child(category);
        let homeKey = categoryRef.push();
        var key = homeKey.key;
        let userId;
        let userName;
        let email;
        var obj = {};
        userModel.accountInfo().then((user) => {
            userId = user.uid;
            userName = user.displayName;
            email = user.email;
            obj = {
                'category': category,
                'url': url,
                'otherUrl': otherUrl,
                'head': heading,
                'price': price + ' лв.',
                'subheading': subHeading,
                'body': body,
                'gsm': mobile,
                'id': key,
                'currentUserId': userId,
                'userName': userName,
                'email': email
            };
            homeKey.set(obj);
        });
        return { key, userId };
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

const announModel = new AnnounModel();
export default announModel;
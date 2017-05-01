import firebaseModule from 'firebase-config';

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
                        // console.log('value ', snap.val())
                        petsArr.push(snap.val().pets[i]);
                    }
                    for (let i in snap.val().cars) {
                        // console.log('value ', snap.val())
                        carsArr.push(snap.val().cars[i]);
                    }
                    for (let i in snap.val().homes) {
                        // console.log('value ', snap.val())
                        homesArr.push(snap.val().homes[i]);
                    }

                    let items = {
                        pets: petsArr, //snap.val().pets['-KikZyXR-KSWMlLJbzLL'],
                        homes: homesArr, //snap.val().homes['-Kip1vzK1uykpHETuVEC'],
                        cars: carsArr //snap.val().cars['-KikZyXO22U5zrl4jzH6']
                    };

                    resolve(items);
                }
            });
        });
        return promis;
    }

    getById(id, itemsAnnoun) {
        id = id; //taka shtoto otdolu ot sami mi idva "100"i ne sa ravni poneje e string
        let getItems = this.getItems();
        let promise = new Promise(function(resolve, reject) {
            getItems.then(res => {
                res[itemsAnnoun].find(function(item) {
                    if (item.id === id) {
                        resolve(item)
                    } else {
                        reject: 'ID not found'
                    }
                })
            });
        });
        return promise;
    }

    saveAnnoun(category, url, heading, price, subHeading, body, mobile) {
        let categoryRef = firebaseModule.database.child(category);
        let homeKey = categoryRef.push();
        var key = homeKey.key;
        var obj = {
            'url': url,
            'head': heading,
            'price': price + ' $',
            'subheading': subHeading,
            'body': body,
            'gsm': mobile,
            'id': key
        };
        console.log(obj);
        homeKey.set(obj);
    }
}

const announModel = new AnnounModel();
export default announModel;
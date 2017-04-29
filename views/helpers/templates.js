//import items from 'templateDb';
import firebaseModule from 'firebase-config';
const templates = (function() {
    let cacheObj = {}; //for cache template
    function load(name) {
        if (cacheObj.hasOwnProperty(name)) {
            return Promise.resolve(cacheObj[name]);
        }

        let url = 'views/tenplates/' + name + '.handlebars';
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                success: function(data) {
                    cacheObj[name] = data; //cahce new template
                    resolve(data);
                },
                error: function(err) {
                    reject(err);
                }
            });
        });
    }

    /*    function get(itemsAnnoun) {
            //eto tuk get raboti s pormis dolu-v momenta e lokalno no v drug slochai towa shte e zaqwka kum servera
            var promise = new Promise(function(resolve, reject) {
                resolve(items[itemsAnnoun]);
            });
            return promise;
        }*/
    //to sushtiq get no s ajax zaqvka
    /* function getAjax() {//towa she mi e s zaqwkite kum syrvyra
         var promise = new Promise(function(resolve, reject) {
             $.ajax({
                 url: 'api/items',
                 type: 'GET',
                 contentType: 'application/json',
                 success: function(res) {
                     resolve(res)
                 },
                 error: function(err) {
                     reject(err);
                 }
             })
         });
     }*/
    function getItems() {
        var ref = firebaseModule.database; //tuka sa dwa varianta na wzimane-i otdolu
        //var homes = firebaseModule.database.child(`homes/`);

        let promis = new Promise((resolve, reject) => {
            ref.on('value', function(snap) {
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
                   
                    var items = {
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

    function getById(id, itemsAnnoun) {
        id = id; //taka shtoto otdolu ot sami mi idva "100"i ne sa ravni poneje e string
        var promise = new Promise(function(resolve, reject) {
            getItems().then(res => {
                res[itemsAnnoun].find(function(item) {
                    if (item.id === id) {
                        resolve(item)
                    } else {
                        reject: 'Nmq takova id'
                    }
                })
            });
        });
        return promise;
    }
    var lastId = 0;

    /* function save(item) {//towa e post kum survura
         var promise = new Promise(function(resolve, reject) {
             item.id = lastId += 1;
             items.push(item);
             resolve(item);
         })
         return promise;
     }*/
    return {
        load,
        // get,
        getById,
        getItems
        //save
    };
}());
export default templates;
import items from 'templateDb';

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

    function get(itemsAnnoun) {
        //eto tuk get raboti s pormis dolu-v momenta e lokalno no v drug slochai towa shte e zaqwka kum servera
        var promise = new Promise(function(resolve, reject) {
            resolve(items[itemsAnnoun]);
        });
        return promise;
    }
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

    function getById(id, itemsAnnoun) {
        id = +id; //taka shtoto otdolu ot sami mi idva "100"i ne sa ravni poneje e string
        var promise = new Promise(function(resolve, reject) {
            items[itemsAnnoun].find(function(item) {
                if (item.id === id) {
                    resolve(item)
                } else {
                    reject: 'Nmq takova id'
                }
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
        get,
        getById,
        //save
    };
}());
export default templates;
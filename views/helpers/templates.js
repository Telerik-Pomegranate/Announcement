let cacheObj = {}; //for cache template
export default {
    load: function(name) {
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
};
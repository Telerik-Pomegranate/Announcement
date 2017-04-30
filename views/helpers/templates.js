class Templates {
    load(name) {
        var cacheObj = {}; 
        if (cacheObj.hasOwnProperty(name)) {
            return Promise.resolve(cacheObj[name]);
        }

        var url = 'views/templates/' + name + '.handlebars';
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                success: function(data) {
                    cacheObj[name] = data; //cahce new temp late
                    resolve(data);
                    },
                    error: function(err) {
                    reject(err);
                    }
            });
        })
    }
}

const templates = new Templates();

export default templates;
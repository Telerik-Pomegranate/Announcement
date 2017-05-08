class Templates {
    load(name) {
        let cacheObj = {};
        if (cacheObj.hasOwnProperty(name)) {
            return Promise.resolve(cacheObj[name]);
        }

        let url = '../views/templates/' + name + '.handlebars';
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
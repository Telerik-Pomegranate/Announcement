 var db = function() {
     var items = [{
             'url': 'https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg',
             'head': 'Sale hose',
             'price': '12345 $',
             'subheading': '2 bed end terrace house for sale',
             'body': 'Summary Positioned within a no through road in a popular residential area is this spacious character cottage which has been fully renovated to a high standard by the current owner. The property is only 0.8 miles to Maidenhead town centre and mainline railway station (Future Crossrail).',
             id: 1
         },
         {
             'url': 'https://static.pexels.com/photos/261187/pexels-photo-261187.jpeg',
             'head': 'Sale beauty mouse',
             'price': '5435 $',
             'subheading': '2 bed end terrace house for sale',
             'body': 'Summary Positioned within a no through road in a popular residential area is this spacious character cottage which has been fully renovated to a high standard by the current owner. The property is only 0.8 miles to Maidenhead town centre and mainline railway station (Future Crossrail).',
             'id': 2
         },
         {
             'url': 'https://static.pexels.com/photos/259597/pexels-photo-259597.jpeg',
             'head': 'Sale small house',
             'price': '187945 $',
             'subheading': '2 bed end terrace house for sale',
             'body': 'Summary Positioned within a no through road in a popular residential area is this spacious character cottage which has been fully renovated to a high standard by the current owner. The property is only 0.8 miles to Maidenhead town centre and mainline railway station (Future Crossrail).',
             'id': 3
         }
     ];

     function get() {
         //eto tuk get raboti s pormis dolu-v momenta e lokalno no v drug slochai towa shte e zaqwka kum servera
         var promise = new Promise(function(resolve, reject) {
             resolve(items);
         })
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

     function getById(id) {
         id = +id; //taka shtoto otdolu ot sami mi idva "100"i ne sa ravni poneje e string
         var promise = new Promise(function(resolve, reject) {
             items.find(function(item) {
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
         get,
         getById,
         //save
     }
 }();
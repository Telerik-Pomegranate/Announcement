 import firebaseModule from 'firebase-config';
 let db = (function() {
     var itemsHomes = [{
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



   /*  var ref = firebaseModule.database; //tuka sa dwa varianta na wzimane-i otdolu
     //var homes = firebaseModule.database.child(`homes/`);

     let promis = new Promise((resolve, reject) => {
         ref.on('value', function(snap) {
             if (snap.val() == null) {
                 reject(null);
             } else {
                 var items = {
                     pets: snap.val().pets['-KikZyXR-KSWMlLJbzLL'],
                     homes: snap.val().homes['-KikZyXDlybDnC6Ulsy4'],
                     cars: snap.val().cars['-KikZyXO22U5zrl4jzH6']
                 };

                 resolve(items);
             }
         });
     });

     promis.then(items => {

          console.log(items.pets[0])
     })
     console.log()*/
         /* let homes = promis.then(items.homes[0]);
          let cars = promis.then(items.cars[0]);
          console.log(pets, cars, homes)*/

     let itemsPets = {};

     /*[{
             'url': 'http://static.baubau.bg/resources/haski.jpg',
             'head': 'Sale dog',
             'price': '123 $',
             'subheading': 'Husky',
             'body': 'Summary Positioned within a no through road in a popular residential area is this spacious character cottage which has been fully renovated to a high standard by the current owner. The property is only 0.8 miles to Maidenhead town centre and mainline railway station (Future Crossrail).',
             id: 1
         },
         {
             'url': 'http://gradcontent.com/lib/500x350/turkish-angora1.jpg',
             'head': 'Sale cat',
             'price': '543 $',
             'subheading': 'Angorska',
             'body': 'Summary Positioned within a no through road in a popular residential area is this spacious character cottage which has been fully renovated to a high standard by the current owner. The property is only 0.8 miles to Maidenhead town centre and mainline railway station (Future Crossrail).',
             'id': 2
         },
         {
             'url': 'http://www.petsfoto.com/wp-content/uploads/2011/03/Charming-Rabbits13.jpg',
             'head': 'Sale rabbits',
             'price': '187 $',
             'subheading': 'Bunny',
             'body': 'Summary Positioned within a no through road in a popular residential area is this spacious character cottage which has been fully renovated to a high standard by the current owner. The property is only 0.8 miles to Maidenhead town centre and mainline railway station (Future Crossrail).',
             'id': 3
         }
     ];*/
     let itemsCars = [{
             'url': 'http://buyersguide.caranddriver.com/media/assets/submodel/6937.jpg',
             'head': 'Sale BMW',
             'price': '1979 $',
             'subheading': 'z4',
             'body': 'Summary Positioned within a no through road in a popular residential area is this spacious character cottage which has been fully renovated to a high standard by the current owner. The property is only 0.8 miles to Maidenhead town centre and mainline railway station (Future Crossrail).',
             'id': 1
         },
         {
             'url': 'http://pop.h-cdn.co/assets/cm/15/05/54cb1a4276b40_-_retro-car-flops-01-0913-lgn.jpg',
             'head': 'Sale retro Ford',
             'price': '123 $',
             'subheading': 'Airbeg ABS',
             'body': 'Summary Positioned within a no through road in a popular residential area is this spacious character cottage which has been fully renovated to a high standard by the current owner. The property is only 0.8 miles to Maidenhead town centre and mainline railway station (Future Crossrail).',
             'id': 2
         }, {
             'url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/BMW_Z3_%285746806085%29.jpg/800px-BMW_Z3_%285746806085%29.jpg',
             'head': 'Sale BMW',
             'price': '1879 $',
             'subheading': 'z3',
             'body': 'Summary Positioned within a no through road in a popular residential area is this spacious character cottage which has been fully renovated to a high standard by the current owner. The property is only 0.8 miles to Maidenhead town centre and mainline railway station (Future Crossrail).',
             'id': 3
         }
     ];

     /*   function get() {
            //eto tuk get raboti s pormis dolu-v momenta e lokalno no v drug slochai towa shte e zaqwka kum servera
            var promise = new Promise(function(resolve, reject) {
                resolve(items);
            })
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

     /*function getById(id) {
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
     var lastId = 0;*/

     /* function save(item) {//towa e post kum survura
          var promise = new Promise(function(resolve, reject) {
              item.id = lastId += 1;
              items.push(item);
              resolve(item);
          })
          return promise;
      }*/
     return { itemsHomes: itemsHomes, itemsPets, itemsCars }
     /* get,
      getById,*/

     //save

 }());
 export default db;
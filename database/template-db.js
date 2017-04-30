 import firebaseModule from 'firebase-config';
 let db = (function() {
     var itemsHomes = [{
             'url': 'https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg',
             'head': 'A wonderful house',
             'price': '€ 529,200',
             'subheading': '4 Bedroom house',
             'body': 'Meticulously maintained throughout the years, this enchanting home is a showcase of beautiful original detail combined with custom craftsmanship. The main level features a spacious front living room. The elegant formal dining room features original built-in china cabinet, gorgeous decorative fireplace. Off the dining room is a sunroom, the perfect spot to enjoy your morning coffee. The kitchen features granite counters, wolf range and pantry offering plenty of storage. Journey up the elegant staircase and you will find a large central bath, four rooms + sunroom offering flexible use..',
             id: 1
         },
         {
             'url': 'https://static.pexels.com/photos/261187/pexels-photo-261187.jpeg',
             'head': '2 Bedroom house for sale',
             'price': '€ 150,000',
             'subheading': '2 Bedroom house',
             'body': 'Summary Positioned within a no through road in a popular residential area is this spacious character cottage which has been fully renovated to a high standard by the current owner. The property is only 12 km. to Sofia town centre.',
             'id': 2
         },
         {
             'url': 'https://static.pexels.com/photos/259597/pexels-photo-259597.jpeg',
             'head': '2 Bedroom house for sale',
             'price': '€ 187,945',
             'subheading': '2 Bedroom house',
             'body': 'Summary Positioned within a no through road in a popular residential area is this spacious character cottage which has been fully renovated to a high standard by the current owner.',
             'id': 3
         }
     ];

     var itemsPets = [{
             'url': 'http://static.baubau.bg/resources/haski.jpg',
             'head': 'Siberian Husky Puppies',
             'price': '€ 250',
             'subheading': '16 WEEKS OLD Husky',
             'body': 'Siberian Huskies are strong, hard-working dogs. As their name suggests, they come originally from Northeast Siberia.',
             id: 1
         },
         {
             'url': 'http://gradcontent.com/lib/500x350/turkish-angora1.jpg',
             'head': 'Angora Female cat',
             'price': '€ 200',
             'subheading': 'Beautiful Pure White Turkish Angora Female',
             'body': ' have for sale last twofold Turkish Angora white (and one white and black)kitten.',
             'id': 2
         },
         {
             'url': 'http://www.petsfoto.com/wp-content/uploads/2011/03/Charming-Rabbits13.jpg',
             'head': 'Rabbits',
             'price': '€ 30',
             'subheading': 'French Lop',
             'body': 'We have 4 lovely French lops available to reserve. Male chocolate and male choc white ear. Female agouti white ear and chocolate v.m. Friendly well handled with blue eyes. Will come with change over food.',
             'id': 3
         }
 ];
    var itemsCars = [{
             'url': 'http://buyersguide.caranddriver.com/media/assets/submodel/6937.jpg',
             'head': 'BMW',
             'price': '€ 12,000',
             'subheading': 'z4',
             'body': '2007 BMW Z4 M.This car is mechanically stock OEM. Cosmetic modifications are limited to powder coated wheels, stubby antenna, black kidney grilles, and de-badging .',
             'id': 1
         },
         {
             'url': 'http://pop.h-cdn.co/assets/cm/15/05/54cb1a4276b40_-_retro-car-flops-01-0913-lgn.jpg',
             'head': 'Retro Ford',
             'price': '€ 2,000',
             'subheading': '1985 Ford Thunderbird',
             'body': '2dr, first year for this body style, one family owned since new, great shape, nice body and paint, nice orig int, big block V8, auto, ps, pb, hide away headlights, swing away column, nice orig vinyl top, runs/drives great',
             'id': 2
         }, {
             'url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/BMW_Z3_%285746806085%29.jpg/800px-BMW_Z3_%285746806085%29.jpg',
             'head': 'BMW Z3 1.9 Roadster 2dr',
             'price': '€ 12,000',
             'subheading': 'A truly wonderful Z3 Roadster',
             'body': 'Cross Spoke Alloys - 16in, Black Leather Upholstery, Interior Chrome Pack, Traction Control, Air-Conditioning, Black Hood, Electric Hood Operation, BMW Six Disc CD Autochanger, Front Fog Lights, In Car Entertainment (Radio/CD), Alarm, Electric Windows (Front)',
             'id': 3
         }
     ];

    
     return { itemsHomes: itemsHomes, itemsPets, itemsCars } 

 }());
 export default db;
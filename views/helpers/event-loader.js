//import data from './data-login-register.js';
//
//export default {
//    loginPageEvent: function(container) {
//        var cont = document.querySelector(container);
//
//        cont.addEventListener('click', function(ev) {
//            if (ev.target.tagName === 'BUTTON') {
//                if (ev.target.className === 'btn-login') {
//                    let username = data.getUserPassword(ev).username;
//                    let password = data.getUserPassword(ev).password;
//                    //get zawka da drupne i nqkak si da provera ima li gi 
//                    data.users.login(username, password);
//                }
//                if (ev.target.className === 'btn-register') {
//                    let form = ev.target.parentNode;
//                    let username = data.getUserPassword(ev).username;
//                    let password = data.getUserPassword(ev).password;
//                    data.users.register(username, password);
//                }
//            }
//
//        });
//
//        /*
//                function getData() {
//            var promise = new Promise(function(resolve, reject) {
//                return $.ajax({
//                    url: url,
//                    //tuka
//                    success: function(data) { resolve(data) }
//                }); //.then(data => printDom(data)); //vmesto tuka da e })then(data=>printDom(data))-davame resolve s succes po gore
//            });
//            return promise;
//        }
//        //getData()
//        getData().then((data) => printDom(data));*/
//        /*   $(container).on('click', '.login', function(ev) {
//            console.log(Object.keys(ev))
//            alert('ss   ')
//            let username = $('.input-user').value;
//            let password = $('.input-password').value;
//        });
//*/
//    },
//    /* loginPageEvent: function(container) {
//         var cont = document.querySelector(container);
//         cont.addEventListener('click', function(ev) {
//             if (ev.target.tagName === 'BUTTON') {
//                 var form = ev.target.parentNode;
//                 console.log(form.getElementsByClassName('input-password')[0])
//                 var inputUser = form.getElementsByClassName('input-password')[0];
//                 let username = inputUser.value;
//                 let password = $('.input-password').value;
//                 console.log(username, password)
//             }
//         });
//
//     }*/
//    loadData: function(container) {
//        //te she imat idi-ta taka che pak s routowe no z aproba
//        var cont = document.querySelector(container);
//        console.log(cont.firstChild) //abe opitwam se tuka da vzema napravih div homes i taka na vski templeti moje
//            //za da zakacha na a-tata samo na tazi stranica eventa te sa kartinkata ili views detail i iskam na tqh da ima za tova
//            //inache ako zakachi na maina
//        var asd = cont.getElementsByClassName('homes')[0];
//        console.log(asd)
//        cont.addEventListener('click', function(ev) {
//            if (ev.target.tagName === 'A') {
//                console.log('aaaaaaaaaaaaaa')
//            }
//        });
//    }
//}
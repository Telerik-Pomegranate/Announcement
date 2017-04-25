/*//zaredeno e v index.html
export default {

    getUserPassword: function(ev) {
        let form = ev.target.parentNode;
        let inputUser = form.getElementsByClassName('input-username')[0];
        let username = inputUser.value;
        let inputPassword = form.getElementsByClassName('input-password')[0];
        console.log(inputUser)
        let password = inputPassword.value;
        return { username, password }
    },
    users: {
        login: function(loginUsername, loginPassword) {


            let promiseLogin = new Promise((resolve, reject) => {
                $.ajax({
                    url: 'https://shops-b5548.firebaseio.com/.json',
                    success: function(data) { resolve(data); }
                });
                return promiseLogin;
            });

            function haveUsers(data) {
                let haveUser = false;
                for (let d in data) {
                    let users = data[d];
                    let username = users.name;
                    let password = users.password;
                    if (username === loginUsername) {
                        haveUser = true;
                        //todo trqbva da skriq login formata i da logna usera
                    } else {
                        haveUser = false;
                    }
                }
                if (!haveUser) {
                    alert('nqma takuv user');
                } else { alert('ima takuw user'); }
            }
            promiseLogin.then(data => haveUsers(data));
        },
        logout: function() {

        },
        register: function(username, password) {
            $.ajax({
                url: 'https://shops-b5548.firebaseio.com/.json',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ name: username, password: password }),
                success: function(data) { type: 'GET', console.log(data) } //towa e kato get-prosto da si proverqvam v konzolata
            });

        }
    },
}*/
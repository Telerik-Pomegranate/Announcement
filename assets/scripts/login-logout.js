import firebaseDb from '../../database/firebas-databas';
let loginLogout = (function() {
    function login() {
        /*   firebaseDb.onAuthStateChanged(user => {
            let nav = document.getElementsByClassName('pull-right')[0];
            let li = document.createElement('li');
            let displayName = document.createElement('strong');
            displayName.style.color = 'lightsteelblue';
                displayName.style.display='inline-block';
    displayName.style.padding='10px 10px 0px 0px';
            li.appendChild(displayName)
            displayName.innerHTML = 'Hi ' + user.displayName;
            nav.insertBefore(li, nav.firstChild);
            console.log(nav)
        });*/
        let loginLogut = document.getElementsByClassName('pull-right')[0]
        let liElements = loginLogut.getElementsByTagName('li');
        let firstAnchor = liElements[1].getElementsByTagName('a');
        let secondAnchor = liElements[2].getElementsByTagName('a')
        firstAnchor[0].style.display = 'none';
        secondAnchor[0].style.display = 'none';
        let imgLogin = liElements[0].getElementsByTagName('img')[0];
        imgLogin.style.display = '';
        let logOutBtn = liElements[3].getElementsByTagName('a');
        logOutBtn[0].style.display = '';
        /* let loginLogut = document.getElementsByClassName('pull-right')[0]
         let liElements = loginLogut.getElementsByTagName('li');
         let firstAnchor = liElements[1].getElementsByTagName('a');
         let secondAnchor = liElements[2].getElementsByTagName('a')
         firstAnchor[0].style.display = 'none';
         secondAnchor[0].style.display = 'none';
         let imgLogin = liElements[0].getElementsByTagName('img')[0];
         imgLogin.style.display = '';
         let logOutBtn = liElements[3].getElementsByTagName('a');
         logOutBtn[0].style.display = '';*/
    }

    function logout() {
        let loginLogut = document.getElementsByClassName('pull-right')[0]

        let liElements = loginLogut.getElementsByTagName('li');
        let firstAnchor = liElements[1].getElementsByTagName('a');
        let secondAnchor = liElements[2].getElementsByTagName('a')
        firstAnchor[0].style.display = '';
        secondAnchor[0].style.display = '';
        let imgLogin = liElements[0].getElementsByTagName('img')[0];
        imgLogin.style.display = 'none';
        let logOutBtn = liElements[3].getElementsByTagName('a');
        logOutBtn[0].style.display = 'none';

    }
    return { login, logout };
}());
export default loginLogout;
import firebaseDb from 'firebase-database';
let loginLogout = (function() {
    function login() {
        let liElements = $('.pull-right li');
        let firstAnchor = liElements.eq(2).children('a');
        let secondAnchor = liElements.eq(3).children('a');
        firstAnchor[0].style.display = 'none';
        secondAnchor[0].style.display = 'none';
        let imgLogin = liElements.eq(1).children('p').children('a')[0];
        imgLogin.style.display = '';
        let logOutBtn = liElements.eq(4).children('a');
        logOutBtn[0].style.display = '';
        let publicAnnouncement = liElements.eq(0).children('a');
        publicAnnouncement[0].style.display = '';
    }

    function logout() {
        let liElements = $('.pull-right li');
        let firstAnchor = liElements.eq(2).children('a');
        let secondAnchor = liElements.eq(3).children('a');
        firstAnchor[0].style.display = '';
        secondAnchor[0].style.display = '';
        let imgLogin = liElements.eq(1).children('p').children('a')[0];
        imgLogin.style.display = 'none';
        let logOutBtn = liElements.eq(4).children('a');
        logOutBtn[0].style.display = 'none';
        let publicAnnouncement = liElements.eq(0).children('a');
        publicAnnouncement[0].style.display = 'none';
    }
    return { login, logout };
}());
export default loginLogout;
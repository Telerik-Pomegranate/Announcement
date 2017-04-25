/* globals Promise */

import userModel from 'user-model';
import loadingScreen from '../assets/scripts/loading-screen';

/*
import htmlHandler from 'html-handler';
import templateHandler from 'template-handler';
import loadingScreen from 'loading-screen';*/
import errorLogger from 'error-logger';

class AccountController {
    load(sammy) {
        sammy.redirect('#/login');
    }

    loadLoginPage() {
        let $warningContainer = $('.warning');
        $warningContainer.addClass('hide');

        htmlHandler.setHtml('login');
    }

    loadSignupPage() {
        let $warningContainer = $('.warning');
        $warningContainer.addClass('hide');

        htmlHandler.setHtml('register');
    }

    signIn(sammy) {
        let email = sammy.params.email;
        let password = sammy.params.password;

        userModel
            .signIn(email, password)

        .then(() => {
                //  loadingScreen.start();
            }).then(() => {
                return new Promise(resolve => {
                    setTimeout(() => {

                        let loginLogut = document.getElementsByClassName('pull-right')[0]

                        let liElements = loginLogut.getElementsByTagName('li');
                        let firstAnchor = liElements[0].getElementsByTagName('a');
                        let secondAnchor = liElements[1].getElementsByTagName('a')
                        firstAnchor[0].style.display = 'none';
                        secondAnchor[0].style.display = 'none';
                        let imgLogin = loginLogut.getElementsByTagName('img')[0];
                        imgLogin.style.display = '';
                        let logOutBtn = liElements[2].getElementsByTagName('a');
                        logOutBtn[0].style.display = '';
                        sammy.redirect('#/home');
                        // loadingScreen.stop();
                        resolve();
                    }, 1500);
                });
            })
            .catch(error => {
                const code = error.code;
                const message = error.message;

                let $warningContainer = $('.warning');
                $warningContainer.removeClass('hide');

                let $dangerMessageContainer = $('#danger-message-container');
                $dangerMessageContainer.html(message);

                // errorLogger.push(`${code} - ${message}`);
            });
    }

    signUp(sammy) {

        let username = sammy.params.username;

        let email = sammy.params.email;

        let password = sammy.params.password;
        //  let passwordConfirm = sammy.params['password-confirm'];

        userModel
            .signUp(email, password, username)
            .then(() => {

                // loadingScreen.start();
            }).then(() => {
                return new Promise(resolve => {

                    setTimeout(() => {



                        let loginLogut = document.getElementsByClassName('pull-right')[0]

                        let liElements = loginLogut.getElementsByTagName('li');
                        let firstAnchor = liElements[0].getElementsByTagName('a');
                        let secondAnchor = liElements[1].getElementsByTagName('a')
                        firstAnchor[0].style.display = 'none';
                        secondAnchor[0].style.display = 'none';
                        let imgLogin = loginLogut.getElementsByTagName('img')[0];
                        imgLogin.style.display = '';
                        let logOutBtn = liElements[2].getElementsByTagName('a');
                        logOutBtn[0].style.display = '';
                        sammy.redirect('#/home');
                        //  loadingScreen.stop();
                        resolve();
                    }, 750);
                });
            }).catch(error => {
                const code = error.code;
                const message = error.message;

                let $warningContainer = $('.warning');
                $warningContainer.removeClass('hide');

                let $dangerMessageContainer = $('#danger-message-container');
                $dangerMessageContainer.html(message);

                // errorLogger.push(`${code} - ${message}`);
            });
    }

    signOut(sammy) {
        userModel
            .signOut()
            .then(() => {
                //  loadingScreen.start();
            }).then(() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        let loginLogut = document.getElementsByClassName('pull-right')[0]

                        let liElements = loginLogut.getElementsByTagName('li');
                        let firstAnchor = liElements[0].getElementsByTagName('a');
                        let secondAnchor = liElements[1].getElementsByTagName('a')
                        firstAnchor[0].style.display = '';
                        secondAnchor[0].style.display = '';
                        let imgLogin = loginLogut.getElementsByTagName('img')[0];
                        imgLogin.style.display = 'none';
                        let logOutBtn = liElements[2].getElementsByTagName('a');
                        logOutBtn[0].style.display = 'none';
                        sammy.redirect('#/home');
                        // loadingScreen.stop();
                        resolve();
                    }, 750);
                });
            }).catch(error => {
                const code = error.code;
                const message = error.message;

                //  errorLogger.push(`${code} - ${message}`);
            });
    }


}

const accountController = new AccountController();
export default accountController;
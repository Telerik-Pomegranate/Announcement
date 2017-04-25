/* globals Promise */

import userModel from 'user-model';
//import loadingScreen from '../assets/scripts/loading-screen';
import loginLogout from 'login-logout';
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

        //htmlHandler.setHtml('login');
    }

    loadSignupPage() {
        let $warningContainer = $('.warning');
        $warningContainer.addClass('hide');

        // htmlHandler.setHtml('register');
    }

    signIn(sammy) {
        let email = sammy.params.email;
        let password = sammy.params.password;
        let username = sammy.params.username;

        userModel
            .signIn(email, password)

        .then(() => {
                //  loadingScreen.start();
            }).then(() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        loginLogout.login();

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
                $dangerMessageContainer.html(message); //tuka setvam ot obekta det si vrushtam validatora

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

                        loginLogout.login();
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
                        loginLogout.logout();
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
import userModel from 'user-model';
import loginLogout from 'login-logout';

class AccountController {
    load(sammy) {
        sammy.redirect('#/login');
    }

    loadLoginPage() {
        let $warningContainer = $('.warning');
        $warningContainer.addClass('hide');
    }

    loadSignupPage() {
        let $warningContainer = $('.warning');
        $warningContainer.addClass('hide');
    }

    signIn(sammy) {
        let email = sammy.params.email;
        let password = sammy.params.password;
        let username = sammy.params.username;

        userModel
            .signIn(email, password)

        .then(() => {}).then(() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        loginLogout.login();

                        sammy.redirect('#/home');
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
            });
    }

    signUp(sammy) {

        let username = sammy.params.username;

        let email = sammy.params.email;

        let password = sammy.params.password;
        userModel
            .signUp(email, password, username)
            .then(() => {}).then(() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        loginLogout.login();
                        sammy.redirect('#/home');
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
            });
    }

    signOut(sammy) {
        userModel
            .signOut()
            .then(() => {}).then(() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        loginLogout.logout();
                        sammy.redirect('#/home');
                        resolve();
                    }, 750);
                });
            }).catch(error => {
                const code = error.code;
                const message = error.message;
            });
    }


}

const accountController = new AccountController();
export default accountController;
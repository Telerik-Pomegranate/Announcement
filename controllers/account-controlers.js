import userModel from 'user-model';
import loginLogout from 'login-logout';
import templates from 'templates';
import Handlebars from 'handlebars';
import announModel from 'announ-model';
import firebaseModule from 'firebase-config';

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
    accountUser(category) {
        let items;
        userModel.accountUser().then((user) => {
            items = user;
            return templates.load(category);
        }).then((templateHTML) => {
            console.log('aaaaaaa', items)
            let template = Handlebars.compile(templateHTML);
            $('#main').html(template({
                items
            }));
        });

    }
    removeAnnouncement(sammy) {
        userModel.removeAnnouncement(sammy.params.id).then((idRemoveAnnoun) => {
            firebaseModule.database.child(idRemoveAnnoun[0].announCategory).child(idRemoveAnnoun[0].idAnnoun.id).remove();
        }).catch(err => alert(err))
        sammy.redirect(`#/user-account`)
    }

}

const accountController = new AccountController();
export default accountController;
import userModel from 'user-model';
import loginLogout from 'login-logout';
import templates from 'templates';
import Handlebars from 'handlebars';
import announModel from 'announ-model';
import navigationPage from 'prevNextPage';
import firebaseModule from 'firebase-config';

const user = new userModel(firebaseModule);
class AccountController {
    load(sammy) {
        sammy.redirect('#/login');
    }

    signIn(sammy) {
        let email = sammy.params.email;
        let password = sammy.params.password;
        let username = sammy.params.username;
        user
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
                let code = error.code;
                let message = error.message;
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
        user
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
                let code = error.code;
                let message = error.message;

                let $warningContainer = $('.warning');
                $warningContainer.removeClass('hide');

                let $dangerMessageContainer = $('#danger-message-container');
                $dangerMessageContainer.html(message);
            });
    }
    signOut(sammy) {
        user
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
                let code = error.code;
                let message = error.message;
            });
    }
    accountUser(category, page) {
        let clicedPage = +page;
        page = +page;
        let items = {};
        let displayItems;
        user.accountUser().then((user) => {
            items = user;
            displayItems = user.items.slice();
            items.user = user.user;
            for (let i = 0; i < page; i += 3) {
                items.items = displayItems.slice(i, i + 3);
                page += 2;
            }
            return templates.load(category);
        }).then((templateHTML) => {
            let template = Handlebars.compile(templateHTML);
            $('#main').html(template({
                items
            }));
            let ul = $('.pagination li').last();
            let currPage = 2;
            for (let i = 3; i < displayItems.length; i += 3) {
                ul.before($(`<li><a href="#/user-account/${currPage}">${currPage}</a></li>`));
                currPage += 1;
            }
            let clickedLi = $('.pagination li').eq(clicedPage);
            clickedLi.addClass('active');
            navigationPage.navigation();
        });
    }
}

const accountController = new AccountController();
export default accountController;
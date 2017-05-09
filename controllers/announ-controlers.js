import announModel from 'announ-model';
import templates from 'templates';
import Handlebars from 'handlebars';
import navigationPage from 'prevNextPage';
import eventImageAnnoun from 'eventImageAnnoun';
import firebaseDb from 'firebase-database';
import firebaseModule from 'firebase-config';

class AnnounController {
    allItems(category, page) {
        let clicedPage = +page;
        page = +page;
        let items;
        let displayItems;
        announModel.getItems().then((res) => {
            displayItems = res[category];
            for (let i = 0; i < page; i += 5) {
                items = displayItems.slice(i, i + 5);
                page += 4;
            }
            return templates.load(category);
        }).then((templateHTML) => {

            let template = Handlebars.compile(templateHTML);
            $('#main').html(template({
                items
            }));

            let ul = $('.pagination li').last();
            let currPage = 2;
            for (let i = 5; i < displayItems.length; i += 5) {
                ul.before($(`<li><a href="#/${category}/${currPage}">${currPage}</a></li>`));
                currPage += 1;
            }
            let clickedLi = $('.pagination li').eq(clicedPage);
            clickedLi.addClass('active');
            navigationPage.navigation();
        });

    }
    getThreeAnnounEveryCategory() {
        let items;
        announModel.getItems().then((res) => {
            items = res;
            items.homes = items.homes.splice(items.homes.length - 3);
            items.cars = items.cars.splice(items.cars.length - 3);
            items.pets = items.pets.splice(items.pets.length - 3);
            return templates.load('home');
        }).then((templateHTML) => {
            let template = Handlebars.compile(templateHTML);
            $('#main').html(template({
                items
            }));
            eventImageAnnoun.event();
        });
    }
    getAnnoun(category, currId) {
        let ad;
        return announModel.getById(currId, category).then(function(res) {
            ad = res;

            return templates.load('announcement'); //-items tepleita-to sushto raboti s promisi- //towa handlebars za da e po qsno go pravim
        }).then((templateHTML) => {
            let template = Handlebars.compile(templateHTML);
            $('#main').html(template({
                ad,
                category
            }));
            eventImageAnnoun.event();
        });
    }
    createAnnoun(sammy) {
        let heading = sammy.params.heading;
        let subHeading = sammy.params.subheading;
        let mobile = sammy.params.mobile;
        let price = sammy.params.price;
        let body = sammy.params.textannoun;
        let url = sammy.params.url;
        let otherUrl = [sammy.params.secondUrl, sammy.params.otherUrl, sammy.params.andOtherUrl];
        let category = sammy.params.category;
        let userObj = announModel
            .saveAnnoun(category, url, otherUrl, heading, price, subHeading, body, mobile)
        announModel
            .getItems().then(() => {
                $('').append('<div><span>New Ad is successfully added</span></div>').addClass('alert alert-success alert-dismissible');                setTimeout(function() { 
                    sammy.redirect(`#/${category.toLowerCase()}/announcement/${userObj.key}`) }, 1000);

            });
    }
    userAnnoun(category, page, id) {
        let clicedPage = +page;
        page = +page;
        let items = {};
        let displayItems;
        announModel.userAnnoun(id).then((user) => {
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

                ul.before($(`<li><a href="#/announ-on-user/${currPage}/${items.user}">${currPage}</a></li>`));
                currPage += 1;
            }
            let clickedLi = $('.pagination li').eq(clicedPage);
            clickedLi.addClass('active');
            navigationPage.navigation();
        });
    }
    removeAnnouncement(sammy) {
        announModel.removeAnnouncement(sammy.params.id).then((idRemoveAnnoun) => {
            firebaseDb.getChild(idRemoveAnnoun[0].announCategory, firebaseModule).child(idRemoveAnnoun[0].idAnnoun.id).remove();
        }).catch(err => alert(err))
        sammy.redirect(`#/user-account/1`)
    }
}

const announController = new AnnounController();
export default announController;
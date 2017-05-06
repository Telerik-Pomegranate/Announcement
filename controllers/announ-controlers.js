import announModel from 'announ-model';
import templates from 'templates';
import Handlebars from 'handlebars';
import navigationPage from 'prevNextPage';
import eventImageAnnoun from 'eventImageAnnoun';
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
    getAnnoun(category, currId) {
        let items;
        return announModel.getById(currId, category).then(function(res) {
            items = res;

            return templates.load('announcement');
        }).then((templateHTML) => {
            let template = Handlebars.compile(templateHTML);
            $('#main').html(template({

                items
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
                setTimeout(function() { sammy.redirect(`#/${category.toLowerCase()}/announcement/${userObj.key}`) }, 1000);

            });
    }


}

const announController = new AnnounController();
export default announController;
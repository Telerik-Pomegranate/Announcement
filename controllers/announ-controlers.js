import announModel from 'announ-model';
import templates from 'templates';
import Handlebars from 'handlebars';
import navigationPage from 'prevNextPage';
class AnnounController {
    allItems(category, page) {
        let clicedPage = +page;
        page = +page;
        let items;
        let displayItems;
        announModel.getItems().then((res) => {
            displayItems = res[category];
            for (let i = 0; i < page; i += 3) {
                items = displayItems.slice(i, i + 3);
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
                ul.before($(`<li><a href="#/${category}/${currPage}">${currPage}</a></li>`));
                currPage += 1;
            }
            let clickedLi = $('.pagination li').eq(clicedPage);
            clickedLi.addClass('active');
            navigationPage.navigation();
        });

    }
    getAnnoun(category, currId) {
        let id;
        return announModel.getById(currId, category).then(function(res) {
            id = res;

            return templates.load('announcement');
        }).then((templateHTML) => {
            let template = Handlebars.compile(templateHTML);
            $('#main').html(template({

                id
            }));
        });
    }
    createAnnoun(sammy) {
        let heading = sammy.params.heading;
        let subHeading = sammy.params.subheading;
        let mobile = sammy.params.mobile;
        let price = sammy.params.price;
        let body = sammy.params.textannoun;
        let url = sammy.params.url;
        let category = sammy.params.category;

        let userObj = announModel
            .saveAnnoun(category, url, heading, price, subHeading, body, mobile)
        announModel
            .getItems().then(() => {
                setTimeout(function() { sammy.redirect(`#/${category.toLowerCase()}/announcement/${userObj.key}`) }, 1000);

            });
    }


}

const announController = new AnnounController();
export default announController;
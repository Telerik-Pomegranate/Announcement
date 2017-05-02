import announModel from 'announ-model';
import templates from 'templates';
import Handlebars from 'handlebars';

class AnnounController {
    allItems(category) {
        let items;
        announModel.getItems().then((res) => {
            items = res[category];
            //sega shte returnem promis-shtoto vzimame pak biblioteka handlebars
            return templates.load(category); //-items tepleita-to sushto raboti s promisi- //towa handlebars za da e po qsno go pravim
        }).then((templateHTML) => {
            let template = Handlebars.compile(templateHTML);
            $('#main').html(template({
                items
            }));
        });
    }
    getAnnoun(category, currId) {
        let id;
        return announModel.getById(currId, category).then(function(res) {
            id = res;

            return templates.load('announcement'); //-items tepleita-to sushto raboti s promisi- //towa handlebars za da e po qsno go pravim
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
import announModel from 'announ-model';
import templates from 'templates';
import Handlebars from 'handlebars';

class AnnounController {
    allItems(category, id) {
        id = +id;
        let items;
        announModel.getItems().then((res) => {
            items = res[category];
            //sega shte returnem promis-shtoto vzimame pak biblioteka handlebars
            if (id === 1) { items = items.slice(0, 3); }
            if (id === 2) { items = items.slice(3, 6) }
            if (id === 3) { items = items.slice(6, 9) }
            if (id === 4) { items = items.slice(9, 12) }
            if (id === 5) { items = items.slice(12, 15) }
            return templates.load(category); //-items tepleita-to sushto raboti s promisi- //towa handlebars za da e po qsno go pravim
        }).then((templateHTML) => {
            let template = Handlebars.compile(templateHTML);
            $('#main').html(template({
                items
            }));
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
                $('').append('<div><span>New Ad is successfully added</span></div>').addClass('alert alert-success alert-dismissible');                setTimeout(function() { 
                    sammy.redirect(`#/${category.toLowerCase()}/announcement/${userObj.key}`) }, 1000);

            });
    }
}

const announController = new AnnounController();
export default announController;
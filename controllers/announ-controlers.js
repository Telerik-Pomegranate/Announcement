import announModel from 'announ-model';

class AnnounController {
    allItems(category) {
        var items;
        announModel.getItems().then((res) => {
           items = res[category];
           //sega shte returnem promis-shtoto vzimame pak biblioteka handlebars
           return templates.load(category); //-items tepleita-to sushto raboti s promisi- //towa handlebars za da e po qsno go pravim
        }).then((templateHTML) => {
            var template = Handlebars.compile(templateHTML);
            $('#main').html(template({
                items
            }));
        });
    }
    getAnnoun(category) {
        var id;
        announModel.getById(this.params.id, category).then(function(res) {
            id = res;
            return templates.load('announcement'); //-items tepleita-to sushto raboti s promisi- //towa handlebars za da e po qsno go pravim
        }).then((templateHTML) => {
            var template = Handlebars.compile(templateHTML);
            $('#main').html(template({
                id
            }));
        });
    }
}

const announController = new AnnounController();
export default announController;
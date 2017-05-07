const search = (function() {
    function start() {
        let asd = $('.search-panel .dropdown-menu').find('a');
        let concept;
        $('.search-panel .dropdown-menu').find('a').click(function(e) {
            //e.preventDefault();

            let param = $(this).attr("href") //.replace("#", "");
            concept = $(this).text();
            $('.search-panel span#search_concept').text(concept);
            $('.input-group #search_param').val(param);
        });
        ($('.btn.btn-default.searc-btn')).click(function(e) {
            let valueSearch = $('.form-control').val();
            let allElement = $('.row');
            let hr = $('hr');
            let aTags = $('.col-md-9');
            let searchText = valueSearch.toLowerCase();
            let found;
            let categori = concept;
            if (!categori) {
                alert('Please choose category from filter by')
            } else {
                for (let i = 0; i < aTags.length; i++) {
                    if (aTags[i].textContent.toLowerCase().indexOf(searchText) >= 0) {
                        found = aTags[i];
                        hr[i].style.display = '';
                        found.parentElement.style.display = '';
                    } else {
                        found = aTags[i];
                        found.parentElement.style.display = 'none';
                        hr[i].style.display = 'none';
                    }
                }
            }
        });
    }
    return {
        start
    };
}());

export default search;
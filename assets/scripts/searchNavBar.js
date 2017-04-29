$(document).ready(function(e) {
    // router.start();
    var asd = $('.search-panel .dropdown-menu').find('a')
    let concept;
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        //e.preventDefault();
        var param = $(this).attr("href") //.replace("#", "");
        concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });
    ($('.btn.btn-default.searc-btn')).click(function(e) {
        valueSearch = $('.form-control').val();
        var allElement = document.getElementsByClassName('row');
        var hr = document.getElementsByTagName('hr');
        var aTags = document.getElementsByClassName("col-md-5");
        var searchText = valueSearch.toLowerCase();

        var found;
        let categori = concept;
        console.log()
        if (!categori) {
            alert('Please choose category from filter by')
        } else {
            for (var i = 0; i < aTags.length; i++) {
                //   console.log(aTags[i].textContent)
                if (aTags[i].textContent.toLowerCase().indexOf(searchText) >= 0) {
                    found = aTags[i];
                    hr[i].style.display = ''
                    found.parentElement.style.display = '';
                    //  break;
                } else {
                    found = aTags[i];

                    found.parentElement.style.display = 'none';
                    hr[i].style.display = 'none';
                }
            }
        }
    });

});
$(document).ready(function(e) {
   
    var asd = $('.search-panel .dropdown-menu').find('a')
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();
        var param = $(this).attr("href") //.replace("#", "");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
        //router.start();
    });
    ($('.btn.btn-default.searc-btn')).click(function(e) {
        valueSearch = $('.form-control').val();
        var allElement = document.getElementsByClassName('row');
        var hr = document.getElementsByTagName('hr');
        var aTags = document.getElementsByClassName("col-md-5");
        var searchText = valueSearch.toLowerCase();

        var found;
      
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

    })

});
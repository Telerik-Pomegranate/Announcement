$(document).ready(function(e) {

    let currId = 1;
    let concept;

    function creatId() {
        let id = currId + 3;
        currId += 1;
        return id;
    };
    $('.search-panel .dropdown-menu').filter('.publicannoun').find('a').click(function(e) {

        e.preventDefault();
        var param = $(this).attr("href").replace("#", "");

        concept = $(this).text();
        $('.search-panel span#search').text(concept);
        $('.input-group #search_param').val(param);
    });
    ($('#submit')).click(function(e) {
        e.preventDefault();
        let heading = $('#heading').val();
        let subHeading = $('#subheading').val();
        let mobile = $('#mobile').val();
        let price = $('#price').val();
        let body = $('#textannoun').val();
        let url = $('#url').val();
        let id = creatId();
        let categori = concept;
        if (!categori) {
            alert('Please choose category from filter by')
        } else {
            let objAnnoun = {
                'url': url,
                'head': heading,
                'price': price + ' $',
                'subheading': subHeading,
                'body': body,
                'id': id
            };
            let idFromCategoryInFirebase;
            concept = concept.toLowerCase();
            if (concept.toLowerCase() === 'pets') { idFromCategoryInFirebase = '-KikZyXR-KSWMlLJbzLL' }
            if (concept.toLowerCase() === 'homes') { idFromCategoryInFirebase = '-Kip1vzK1uykpHETuVEC' }
            if (concept.toLowerCase() === 'cars') { idFromCategoryInFirebase = '-KikZyXO22U5zrl4jzH6' }
            // var publicInCategoryName = firebase.database().ref().child(concept).setValue(objAnnoun);
            ////publicInCategoryName.set(objAnnoun) //child(idFromCategoryInFirebase);
            // publicInCategoryName.setValue(objAnnoun)
            //  publicInCategoryName.push(objAnnoun)
            /* var updates = {};
             updates[`/${concept}/` + idFromCategoryInFirebase] = objAnnoun;
             firebase.database().ref().update(updates);*/
            msgRef = firebase.database().ref().child(concept).child(idFromCategoryInFirebase)
            msgRef.child(id).set(objAnnoun)
            alert('Success')
            $('#heading').val('');
            $('#subheading').val('');
            $('#mobile').val('');
            $('#price').val('');
            $('#textannoun').val('');
            $('#url').val('');
        }

    });
});
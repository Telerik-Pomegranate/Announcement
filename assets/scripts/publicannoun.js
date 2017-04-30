$(document).ready(function(e) {
    let concept;
    $('.search-panel .dropdown-menu').filter('.publicannoun').find('a').click(function(e) {
        // e.preventDefault();
        let param = $(this).attr("href"); //.replace("#", "");
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
        let categori = concept;
        if (!categori) {
            alert('Please choose category from filter by')
        } else {
            concept = concept.toLowerCase();
            msgRef = firebase.database().ref().child(concept);
            let homeKey = msgRef.push();
            let key = homeKey.key;
            let objAnnoun = {
                'url': url,
                'head': heading,
                'price': price + ' $',
                'subheading': subHeading,
                'body': body,
                'gsm': mobile,
                'id': key
            };
            homeKey.set(objAnnoun);
            alert('Success')
            $('#heading').val('');
            $('#subheading').val('');
            $('#mobile').val('');
            $('#price').val('');
            $('#textannoun').val('');
            $('#url').val('');
            window.location.href = `#/${concept.toLowerCase()}`;
        }
    });
});
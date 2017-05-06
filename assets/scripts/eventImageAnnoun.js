let eventImageAnnoun = (function() {
    function event() {
        console.log($('.views-other-image')[0])
            /*  $('.views-other-image')[0].click(function() {
                  alert('asd')
                  $(this).css("width", "500px");
              }, function() {
                  $(this).css("background-color", "pink");
              });*/
        $(".views-other-image").on("click", "img", function() {
            window.open(
                this.src,
                '_blank' // <- This is what makes it open in a new window.
            );
            //location.href = this.src;
        });
    }
    return { event };
}());
export default eventImageAnnoun;
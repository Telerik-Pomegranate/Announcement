let eventImageAnnoun = (function() {
    function event() {
        $(".views-other-image").on("click", "img", function() {
            window.open(
                this.src,
                '_blank' // <- This is what makes it open in a new window.
            );
        });
    }
    return { event };
}());
export default eventImageAnnoun;
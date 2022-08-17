moveToTop()
fadeIn()
$(window).scroll(function() {
    moveToTop()
    fadeIn()
});


function moveToTop() {
    $(".animate-cards").each(function(index, el) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(el).offset().top;
        let eh = $(el).outerHeight();
        let dh = $(document).height();
        if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
            $(el).addClass("animate-cards--active")
        }
    });
}

function fadeIn() {
    $(".animate-opacity").each(function(index, el) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(el).offset().top;
        let eh = $(el).outerHeight();
        let dh = $(document).height();
        if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
            $(el).addClass("animate-opacity--active")
        }
    });
}

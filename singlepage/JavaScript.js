$(document).ready(function () {
    $(window).scroll(function ()) {
        $('#appear').each(function (i) {
            var bottom = $(this).offset().top + $(this).outerHeight();
            var bottom = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 500);

            }
        });
    });
});
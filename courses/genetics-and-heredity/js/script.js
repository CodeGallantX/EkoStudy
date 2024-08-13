$(document).ready(function() {

    $('.video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        navText: ['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
        onInitialized: counter,
        onTranslated: counter
    });

    function counter(event) {
        var element = event.target; // DOM element, in this example .owl-carousel
        var items = event.item.count; // Number of items
        var item = event.item.index + 1; // Position of the current item
        $('#counter').html(item + " / " + items)
    }
});
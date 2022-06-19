new WOW().init();

 /*=====================
      12.Tap on Top
      ==========================*/
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.tap-top').fadeIn();
        } else {
            $('.tap-top').fadeOut();
        }
    });
      $('.tap-top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

$('.testimonials-slider').owlCarousel({
    loop:true,
    margin:50,
    nav: true,
    navText: ["<img src='assets/images/icon/arrow-left.png'>","<img src='assets/images/icon/arrow-right.png'>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})

$('.team-slide').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1,
		    autoplay:true,
		    autoplayTimeout:4000
        },
        600:{
            items:2,
		    autoplay:true,
		    autoplayTimeout:4000
        },
        1000:{
            items:4,
		    autoplay:true,
		    autoplayTimeout:4000
        }
    }
})	
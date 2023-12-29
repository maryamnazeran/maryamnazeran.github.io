$(document).ready(function () {
    'use strict';

	//********** menu background color change while scroll

	$(window).on('scroll', function () {
		var menu_area = $('.nav-area');
		if ($(window).scrollTop() > 200) {
			menu_area.addClass('sticky_navigation');
		} else {
			menu_area.removeClass('sticky_navigation');
		}
	});

	//********** menu hides after click (mobile menu)

	$(document).on('click', '.navbar-collapse.in', function (e) {
		if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
			$(this).collapse('hide');
		}
	});

	//*********** scrollspy js

	$('body').scrollspy({
		target: '.navbar-collapse',
		offset: 195
	});

	//************ smooth scroll js

	$('a.smooth-menu,a.custom-btn,a.dadada').on("click", function (e) {
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50
		}, 1000);
	});

	//*********** Animated headline js

	$('.animate-scale').animatedHeadline({
		animationType: 'clip'
	});

	//***** Skill bar js

	var skillbar = $(".skillbar");

	skillbar.waypoint(function () {
		skillbar.each(function () {
			$(this).find(".skillbar-child").animate({
				width: $(this).data("percent")
			}, 1000);
		});
	}, {
		offset: "80%"
	});
	
    //*************** Isotope filter

    var $Container = $('#img-filter');
    if( $Container.length>0 ) {
        $Container.isotope({
            itemSelector: '.single-port',
            transitionDuration: '0.8s'
        });
        $(".img-filter").on("click", function (e){
            $(".img-filter.active").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $Container.isotope({
                filter: selector
            });
            return false;
        });

        $(window).resize(function(){
            setTimeout(function(){
                $Container.isotope();
            },1000);
        }).trigger('resize');
    }

    //*************counter-up js

    $('.counter').counterUp({
        delay: 50,
        time: 8000
    });

    $('.client-testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    //************* Brand Carousel

    $("#brand-carousel").owlCarousel({
        navigation: false,
        pagination: true,
        rtl:true,
        slideSpeed: 800,
        paginationSpeed: 800,
        smartSpeed: 500,
        autoplay: true,
        singleItem: true,
        loop: true,
        responsive:{
            0:{
                items:2
            },
            680:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    var lang;
    // The default language is English
    lang = lang_en;
    english_language();

    // get/set the selected language
    $(".translate").click(function () {
        if ($(this).attr("id") == "en") {
            english_language();
        }
        else {
            persian_language();
        }
    });

    function persian_language() {
        lang = lang_fa;
        $("#bootstrap").attr("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css");
   
        $("html").css("direction", "rtl");
        $("body").css("direction", "rtl");
        $(".banner-bg").css("transform", "scaleX(-1)");
        $(".skillbar-percent").css("float", "left");
        $(".ah-words-wrapper").addClass("ah-words-wrapper-rtl");
        $(".social-icons .icon").css("padding-right", "0px");
        $(".social-icons .icon").css("padding-left", "20px");

        $(".translate").attr("id", "en");
        $(".translate").text("English");

        $(".lang").each(function (index, element) {
            $(this).text(lang[$(this).attr("key")]);
            $(this).addClass("persian");
        });
    }

    function english_language() {
        lang = lang_en;
        $("#bootstrap").attr("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");

        $("html").css("direction", "ltr");
        $("body").css("direction", "ltr");
        $(".banner-bg").css("transform", "scaleX(1)");
        $(".skillbar-percent").css("float", "right");
        $(".ah-words-wrapper").removeClass("ah-words-wrapper-rtl");
        $(".social-icons .icon").css("padding-right", "20px");
        $(".social-icons .icon").css("padding-left", "0px");

        $(".translate").attr("id", "fa");
        $(".translate").text("پارسی");

        $(".lang").each(function (index, element) {
            $(this).text(lang[$(this).attr("key")]);
            $(this).removeClass("persian");
        });
    }
});

document.getElementById("year").innerHTML = new Date().getFullYear();

function hbd() {
    party.confetti(document.body, {
        count: party.variation.range(60, 80),
    });
}

// infinte loop of confetti
// setInterval(hbd, 3000);
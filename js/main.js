var language, dict;

$(document).ready(function () {
    'use strict';

    //********** menu background color change while scroll

    $(window).on('scroll', function () {
        var menu_area = $('nav');
        if ($(window).scrollTop() > 150) {
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
    if ($Container.length > 0) {
        $Container.isotope({
            itemSelector: '.single-port',
            transitionDuration: '0.8s'
        });
        $(".img-filter").on("click", function (e) {
            $(".img-filter.active").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $Container.isotope({
                filter: selector
            });
            return false;
        });

        $(window).resize(function () {
            setTimeout(function () {
                $Container.isotope();
            }, 1000);
        }).trigger('resize');
    }

    $('.client-testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    //************* Brand Carousel

    $("#brand-carousel").owlCarousel({
        navigation: false,
        pagination: true,
        rtl: true,
        slideSpeed: 800,
        paginationSpeed: 800,
        smartSpeed: 500,
        autoplay: true,
        singleItem: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            680: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // get/set the selected language
    $(".translate").click(function () {
        if ($(this).attr("id") == "en") {
            setLanguagePreference("en");
            english_language();
        }
        else {
            setLanguagePreference("fa");
            persian_language();
        }
    });

    function persian_language() {
        dict = dict_fa;
        $("#bootstrap").attr("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css");

        $("html").css("direction", "rtl");
        $(".banner-bg").css("transform", "scaleX(-1)");
        $(".skillbar-percent").css("float", "left");
        $(".ah-words-wrapper").addClass("ah-words-wrapper-rtl");
        $(".translate").attr("id", "en");

        $(".lang").each(function (index, element) {
            $(this).text(dict[$(this).attr("key")]);
            $(this).addClass("persian");
        });
    }

    function english_language() {
        dict = dict_en;
        $("#bootstrap").attr("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");

        $("html").css("direction", "ltr");
        $(".banner-bg").css("transform", "scaleX(1)");
        $(".skillbar-percent").css("float", "right");
        $(".ah-words-wrapper").removeClass("ah-words-wrapper-rtl");
        $(".translate").attr("id", "fa");

        $(".lang").each(function (index, element) {
            $(this).text(dict[$(this).attr("key")]);
            $(this).removeClass("persian");
        });
    }

    // language cookie
    // Function to set a cookie
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    // Function to get the value of a cookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Function to check if a cookie exists
    function checkCookie(name) {
        var cookie = getCookie(name);
        return cookie !== null;
    }

    // Function to set language preference
    function setLanguagePreference(language) {
        setCookie('language', language, 365); // Set cookie to expire in 365 days
    }

    // Example: Get the preferred language from the cookie or set a default
    var language = getCookie('language');
    if (!language) {
        // Set a default language if the cookie doesn't exist
        language = 'en'; // Default language is English
        setLanguagePreference(language);
    }
    if (language == "en") {
        english_language();
    }
    else if (language == "fa") {
        persian_language();
    }
});

// navbar
document.addEventListener('click', function (event) {
    var isClickInside = document.getElementById('navbarSupportedContent').contains(event.target);

    if (!isClickInside) {
        // Close the Navbar when clicking outside
        var navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler.getAttribute('aria-expanded') === 'true') {
            navbarToggler.click();
        }
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
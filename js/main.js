(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $('.preloader').delay(500).fadeOut(500);

        //02. Isotope Initialize
       function isotopeInit() {
            $('.portfolio-items').isotope({
                itemSelector: '.item',
                masonry: {
                    columnWidth: '.item'
                }
            });
            $('.portfolio-menu ul li').on('click', function () {
                $('.portfolio-menu ul li').removeClass('sel-item');
                $(this).addClass('sel-item');
                var selector = $(this).attr('data-filter');
                $('.portfolio-items').isotope({
                    filter: selector
                });
                return false;
            });
        }
        isotopeInit();
    });


    $(document).ready(function () {
        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });
        // AOS-plugins

         AOS.init({
        duration: 2000,
       });

        //06. magnific Popup Initialize
        function magnificPopupInit() {
            $('.content a').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }
        magnificPopupInit();

        //08. Help Slider Initialize
            $('.owl-carousel.help_carousel').owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                nav: false,
                dots: false,
                autoplay: true,
                slideTransition: 'linear',
                autoplayTimeout: 2000,
                autoplaySpeed: 1000,
                autoplayHoverPause: false,
            });
         $('.owl-carousel.slider2').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            autoplay: true,
            autoplayTimeout: 4000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            freeDrag: false,
            nav: true,
            navText: [
                '<i class="fal fa-arrow-left"></i>', 
                '<i class="fal fa-arrow-right"></i>'
            ],
            dots: true,
        });


        //11. Video Popup Initialize
        function videoPopupInit() {
            $('#play-video').magnificPopup({
                type: 'iframe',
                iframe: {
                    patterns: {
                        youtube: {
                          index: 'youtube.com/', 

                          id: 'v=',
                          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                        },
                    },

                  srcAction: 'iframe_src',
                }
            });
        }
        videoPopupInit();

        // Progressbar

        $('.jqueryscript').rProgressbar({
            percentage: 80,
            fillBackgroundColor: '#489da5',
            borderRadius: '25px',
            height: '10px',
        });
        $('.jqueryscript1').rProgressbar({
            percentage: 70,
            fillBackgroundColor: '#f1c40f',
            borderRadius: '25px',
            height: '10px',
        });
        $('.jqueryscript2').rProgressbar({
            percentage: 60,
            fillBackgroundColor: '#092e69',
            borderRadius: '25px',
            height: '10px',
        });
         $('.jqueryscript3').rProgressbar({
            percentage: 50,
            fillBackgroundColor: '#e80845',
            borderRadius: '25px',
            height: '10px',
        });
    });

})(jQuery);


        //Counter Number
        $('.counter_content').on('inview', function(event, visible) {
            if (visible) {
                $(this).find('.counter').each(function () {
                    var $this = $(this);
                    $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                
                        duration: 1500,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).unbind('inview');
            }
        });
    
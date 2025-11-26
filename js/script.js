(function ($) {
  "use strict";

  // Preloader
  var initPreloader = function () {
    $(document).ready(function () {
      var Body = $('body');
      Body.addClass('preloader-site');
    });
    $(window).on('load', function () {
      $('.preloader').fadeOut();
      $('body').removeClass('preloader-site');
    });
  }

  $(document).ready(function () {
    // Swiper Initialization - Room Swiper (utilisé sur index.html)
    var roomSwiper = new Swiper(".room-swiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: ".room-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      },
    });

    // Preloader
    initPreloader();

    // Animate on Scroll
    AOS.init({
      duration: 1000,
      once: true,
    });
  });
})(jQuery);

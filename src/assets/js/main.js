(function ($) {
  "use strict";
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);
  new WOW().init();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="fa fa-angle-right"></i>',
      '<i class="fa fa-angle-left"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 1 },
      992: { items: 2 },
      1200: { items: 2 },
    },
  });
  $('[data-toggle="counter-up"]').counterUp({ delay: 5, time: 2000 });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
})(jQuery);
function playVideo() {
  var video = document.querySelector('.video-container video');
  var playButton = document.querySelector('.video-container .play-button');
  video.style.display = 'block';
  video.play();
  playButton.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', (event) => {
  const video = document.getElementById('myVideo');

  // Disable right-click context menu
  video.addEventListener('contextmenu', (e) => {
      e.preventDefault();
  });

  // Add custom controls if needed
  video.addEventListener('click', (e) => {
      // Your custom control logic here
  });
});
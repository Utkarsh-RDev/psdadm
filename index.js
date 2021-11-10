// navbar

$(document).ready(function() {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 56) {
        $(".navbar").addClass("bg-dark");
      } else {
        $(".navbar").removeClass("bg-dark");
      }
    });
    //If Mobile, add background color when toggler is clicked
    $(".navbar-toggler").click(function() {
      if (!$(".navbar-collapse").hasClass("show")) {
        $(".navbar").addClass("bg-dark");
      } else {
        if ($(window).scrollTop() < 56) {
          $(".navbar").removeClass("bg-dark");
        } else {
        }
      }
    });
  });

  //carousel
    $('.slider').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
    });
    $('.slider').on('wheel', (function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }));
$("nav ul li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

window.onload = function () {
  /********Slider*******/
  $(".slider2")
    .not(".slick-intialized")
    .slick({
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:
        "<span class='prev position-top2 left-0 ml-2'><i class='fas fa-chevron-left'></i></span>",
      nextArrow:
        "<span class='next position-top2 right-1 mr-2'><i class='fas fa-chevron-right'></i></span>",
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
};

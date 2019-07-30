$(document).on('ready', function () {
  $(".center").slick({
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 3
        }
      }
    ]
  });
  $(".hosting-support-technologies-slider").slick({
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow:6,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 3
        }
      }
    ]
  });
 
  $(".featured-hosting-slider").slick({
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
    ]
  });
  $(".category-slider").slick({
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    autoplay: false,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 1
        }
      }
    ]
  });

  

  $('#nav-toggler-button').on('click', function () {
    if ($('#nav-toggler-button').hasClass('nav-add-bar')) {
      $('#nav-toggler-button').removeClass('nav-add-bar');
    } else {
      $('#nav-toggler-button').addClass('nav-add-bar');
    }
  })
  $('.dropdown-toggle').on('click', function () {
    if ($(this).hasClass('dropdown-toggle-a')) {
      $(this).removeClass('dropdown-toggle-a');
    } else {
      $(this).addClass('dropdown-toggle-a');
    }
  })
});
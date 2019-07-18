$(document).on('ready', function() {
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
		});
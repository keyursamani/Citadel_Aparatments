$(document).ready(function(){
	// For Mobile Menu
	$("#mobilemenu").click(function(){
		$(".custnav .menus").slideToggle();
	});
	function nav(){
	    if ($(window).width() > 991) {
	        $(".custnav .menus").css({"display":"block"});
	    }
	    else
	    {
	        $(".custnav .menus").css({"display":"none"});
	    }
	}

	function setHeight() {
    	windowHeight = $(window).innerHeight();
    	$("#mainslider, #mainslider .itembox, .mainbanner").css("height", windowHeight);
	};
	setHeight();

	$(window).resize(function() {
		setTimeout(function(){nav();},0);
		setHeight();
	});

	$('#amenities .amenities ul > li > .amentitle').click( function() {
		var trig = $(this);
		if ( trig.hasClass('amentitle_a') ) {
			trig.next('#amenities .amenities ul > li .details').slideToggle('slow');
			trig.removeClass('amentitle_a');
		} else {
			$('.amentitle_a').next('#amenities .amenities ul > li .details').slideToggle('slow');
			$('.amentitle_a').removeClass('amentitle_a');
			trig.next('#amenities .amenities ul > li .details').slideToggle('slow');
			trig.addClass('amentitle_a');
		};
	return false;
	});

	$("#tablinks ul li a").click(function(){
		$("#tablinks ul li a").removeClass("active");
		$(this).addClass("active");
	});

	// For SmoothScrolling
	$(function() {
	    $("#tablinks ul li a").bind("click", function(event) {
	        var $anchor = $(this);
	        $("html, body").stop().animate({
	            scrollTop: $($anchor.attr("href")).offset().top
	        }, 1000, "easeInOutExpo");
	        event.preventDefault();
	    });
	});

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
	   	if (scroll > 80) {
	        $("header").addClass("aheader");
	    } 
	    else {
	    	$("header").removeClass("aheader");
	    }
	});

	$(function () {
	  $("#datepicker1, #datepicker2").datepicker({ 
	        autoclose: true, 
	        todayHighlight: true
	  }).datepicker('update', new Date());
	});

	// For Slickslider
	var _elSlick = $('.slider-box').slick({
	      slidesToShow: 3,
	      slidesToScroll: 1,
	      infinite: true,
	      arrows : false,
	      centerPadding: '0px',
	      // dots: false,
	      autoplay: true,
	      // draggable: false,
	      responsive: [
	          {
	            breakpoint: 1200,
	            settings: {
	              slidesToShow: 3,
	              slidesToScroll: 1
	            }
	          },
	          {
	            breakpoint: 1199,
	            settings: {
	              slidesToShow: 3,
	              slidesToScroll: 1
	            }
	          },
	          {
	            breakpoint: 992,
	            settings: {
	              slidesToShow: 2,
	              slidesToScroll: 1
	            }
	          },
	          {
	            breakpoint: 781,
	            settings: {
	              slidesToShow: 2,
	              slidesToScroll: 1
	            }
	          },
	          {
	            breakpoint: 460,
	            settings: {
	              slidesToShow: 1,
	              slidesToScroll: 1
	            }
	          }

	        ]
	    });
	  
	    upBox();

	    $('.left-controls').on('click', function() {
	      clearUpBox();
	      
	      _elSlick.slick('slickPrev');

	      setTimeout(function() { upBox(); }, 50);
	   })

	   $('.right-controls').on('click', function() {
	      clearUpBox();
	      
	      _elSlick.slick('slickNext');
	      
	      setTimeout(function() { upBox(); }, 50);
	   })

	   _elSlick.on('beforeChange', function(event, slick, currentSlide) {
	      clearUpBox();
	      
	      setTimeout(function() { upBox(); }, 50);
	   })

	   function upBox() {
	      $('.slick-list .slick-current.slick-active').css({
	        marginTop: '-30px',
	        // transition: '.4s all ease'
	      })
	    }

	    function clearUpBox() {
	      $('.slick-list .slick-current.slick-active').css({
	        marginTop: '0px',
	        // transition: '.2s all ease'
	      }) 
	    }

});

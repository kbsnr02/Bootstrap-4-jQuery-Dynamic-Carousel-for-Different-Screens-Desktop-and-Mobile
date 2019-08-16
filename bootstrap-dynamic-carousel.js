	$(document).ready(function(e) {
		//Create 2 arrays of image urls named desktopImages and mobileImages. Copy image urls from google.
		
		var desktopSlider = new Array(
			"http://freewebbappresources.com/demo/bootstrap-dynamic-carousel/images/desktop-slider/brticle-banner.jpg", 
			"http://freewebbappresources.com/demo/bootstrap-dynamic-carousel/images/desktop-slider/deeper.jpg",
			"http://freewebbappresources.com/demo/bootstrap-dynamic-carousel/images/desktop-slider/luxury-living.jpg", 
			"http://freewebbappresources.com/demo/bootstrap-dynamic-carousel/images/desktop-slider/sunset-banner.jpg");

		var mobileSlider = new Array(
			"http://freewebbappresources.com/demo/bootstrap-dynamic-carousel/images/mobile-slider/beautiful-bg.jpg", 
			"http://freewebbappresources.com/demo/bootstrap-dynamic-carousel/images/mobile-slider/out-of-thalberg.jpg", 
			"http://freewebbappresources.com/demo/bootstrap-dynamic-carousel/images/mobile-slider/rose-09.jpg", 
			"http://freewebbappresources.com/demo/bootstrap-dynamic-carousel/images/mobile-slider/sunset.jpg");

		var i;

		$('<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"></div>').appendTo("#carouselContainer");
		$('<ol class="carousel-indicators"></ol>').appendTo("#carouselExampleIndicators");
		$('<div class="carousel-inner"></div>').appendTo("#carouselExampleIndicators");
		$('<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a>').appendTo("#carouselExampleIndicators");
		$('<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>').appendTo("#carouselExampleIndicators");

		if($(window).width() <= 768) {
			$('<h5>MOBILE CAROUSEL</h5>').insertBefore('#carouselExampleIndicators');
			for(i = 0; i<mobileSlider.length; i++){
				$('<div class="carousel-item"><img class="img-fluid" src="'+mobileSlider[i]+'"></div>').appendTo('.carousel-inner');
				$('<li data-target="#carouselExampleIndicators" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators');
			}			
		} else {

			$('<h5>DESKTOP CAROUSEL</h5>').insertBefore('#carouselExampleIndicators');
			for(i = 0; i<desktopSlider.length; i++){
				$('<div class="carousel-item"><img class="img-fluid" src="'+desktopSlider[i]+'"></div>').appendTo('.carousel-inner');
				$('<li data-target="#carouselExampleIndicators" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators');
			}	
		}
		
		$(".carousel-item").first().addClass('active');
		$(".carousel-indicators").first().add('active');

		$(".carousel").carousel();
			
    });

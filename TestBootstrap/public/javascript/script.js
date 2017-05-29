$(document).ready(function(){
	window.addEventListener('hashchange', function(){
        if(window.location.hash === '#centerpartiet'){
            $('#content').load('centerpartiet.html', function () {
                $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
            });
        }
		if(window.location.hash === '#socialdemokraterna'){
			$('#content').load('socialdemokraterna.html', function () {
                $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
            });
		}
		if(window.location.hash === '#liberalerna'){
		    $('#content').load('liberalerna.html', function () {
                $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
            });
        }
        if(window.location.hash === '#moderaterna'){
            $('#content').load('moderaterna.html', function () {
                $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
            });
        }
        if(window.location.hash === '#vansterpartiet'){
            $('#content').load('vänsterpartiet.html', function () {
                $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
            });
        }
        if(window.location.hash === '#miljopartiet'){
            $('#content').load('miljöpartiet.html', function () {
                $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
            });
        }
        if(window.location.hash === '#kristdemokraterna'){
            $('#content').load('kristdemokraterna.html', function () {
                $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
            });
        }
        if(window.location.hash === '#sverigedemokraterna'){
            $('#content').load('sverigedemokraterna.html', function () {
                $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
            });
        }
        if(window.location.hash === '#home'){
            $('#content').load('home.html', function () {
                $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
            });
        }
		if(window.location.hash === '#veckansGreider'){
            $('#content').load('veckansGreider.html', function () {
                $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
			});
		}
	});

	//ett Litet test för att se om sidan laddar när man länkar till den
	if(window.location.hash === '#veckansGreider'){
        $('#content').load('veckansGreider.html', function () {
			$('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
		});
	}
    if(window.location.hash === '#centerpartiet'){
        $('#content').load('centerpartiet.html', function () {
            $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
        });
    }
    if(window.location.hash === '#socialdemokraterna'){
        $('#content').load('socialdemokraterna.html', function () {
            $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
        });
    }
    if(window.location.hash === '#liberalerna'){
        $('#content').load('liberalerna.html', function () {
            $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
        });
    }
    if(window.location.hash === '#moderaterna'){
        $('#content').load('moderaterna.html', function () {
            $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
        });
    }
    if(window.location.hash === '#vansterpartiet'){
        $('#content').load('vänsterpartiet.html', function () {
            $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
        });
    }
    if(window.location.hash === '#miljopartiet'){
        $('#content').load('miljöpartiet.html', function () {
            $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
        });
    }
    if(window.location.hash === '#kristdemokraterna'){
        $('#content').load('kristdemokraterna.html', function () {
            $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
        });
    }
    if(window.location.hash === '#sverigedemokraterna'){
        $('#content').load('sverigedemokraterna.html', function () {
            $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
        });
    }
    if(window.location.hash === '#home'){
        $('#content').load('home.html', function () {
            $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
        });
    }

    // // FUNKTION FÖR ATT "GO TO TOP" BTN SKA FLJA MED NÄR MAN SCROLLAR
    // (function($) {
    //     var element = $('.goToTopbtn'),
    //         originalY = element.offset().top;
    //
    //     // Space between element and top of screen (when scrolling)
    //     var topMargin = -350;
    //
    //     // Should probably be set in CSS; but here just for emphasis
    //     element.css('position', 'relative');
    //
    //     $(window).on('scroll', function(event) {
    //         var scrollTop = $(window).scrollTop();
    //
    //         element.stop(false, false).animate({
    //             top: scrollTop < originalY
    //                 ? 0
    //                 : scrollTop - originalY + topMargin
    //         }, 100);
    //     });
    // })(jQuery);
    //
     $('#EnKnapp').on('click', function () {
         $('html, body').animate ({
             scrollTop: $('#zeTOP').offset().top
         }, 800);
     });
});


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
        if(window.location.hash === '#vänsterpartiet'){
            $('#content').load('vänsterpartiet.html', function () {
                $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
            });
        }
        if(window.location.hash === '#miljöpartiet'){
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
    if(window.location.hash === '#vänsterpartiet'){
        $('#content').load('vänsterpartiet.html', function () {
            $('html, body').animate({ scrollTop: $('#testFocus').offset().top }, 'slow');
        });
    }
    if(window.location.hash === '#miljöpartiet'){
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
});


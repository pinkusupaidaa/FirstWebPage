$(document).ready(function(){
		location.hash = '#home';
	window.addEventListener('hashchange', function(){
        if(window.location.hash === '#centerpartiet'){
            $('#content').load('centerpartiet.html');
        }
		if(window.location.hash === '#socialdemokraterna'){
			$('#content').load('socialdemokraterna.html');
		}
        if(window.location.hash === '#home'){
            $('#content').load('home.html');
        }
	});
});

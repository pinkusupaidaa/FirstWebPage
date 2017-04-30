$(document).ready(function(){
	window.addEventListener('hashchange', function(){
		if(window.location.hash === '#socialdemokraterna'){
			$('#content').load('../view/socialdemokraterna.html');
		}
	});
});

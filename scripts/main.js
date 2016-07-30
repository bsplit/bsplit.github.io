$(document).ready(function(){

	$("a.scroll").on('click',function(e) {
		var url = e.target.href;
		var hash = url.substring(url.indexOf("#")+1);
		$('html, body').animate({
			scrollTop: $('#'+hash).offset().top - 50
		}, 500);
		return false;
	});

});

	var sc_project=10987063; var sc_invisible=1; var sc_security="69b8be84"; 
	var scJsHost = (("https:" == document.location.protocol) ?	"https://secure." : "http://www.");
	document.write("<sc"+"ript type='text/javascript' src='" +	scJsHost+	"statcounter.com/counter/counter.js'></"+"script>");

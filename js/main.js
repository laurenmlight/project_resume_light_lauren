$(document).ready(function() {

    $('section').verticalDotNav({
		dot_size: 5,
		dot_color: "#58585b",
		nav_color: "#e1e7ec"
	});

    var scroll = new SmoothScroll('a[href*="#"]');

//Add floral background when hovering over h1
    $("h1").hover(function(){
        $(this).addClass( "floral" );
    }, function() {
        $( this ).removeClass( "floral" );
    });

});

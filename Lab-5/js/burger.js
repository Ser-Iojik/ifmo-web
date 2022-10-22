$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('.fixed-page');
        $('.header__menu li a').each(function () { 
            var location = window.location.href; 
            var link = this.href;  
            if(location == link) { 
                $(this).addClass('active__burger');
            }
        });
	});
});
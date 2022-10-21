let loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
let pageloadtimeDiv = document.getElementById('page-load-time');

window.onload = function () {
    let loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart; 
    pageloadtimeDiv.append('Page load time is '+ loadTime +' milliseconds');
}


$(document).ready(function(){
    $('#header').load("header.html");
 });

 $(document).ready(function(){
    $('#footer').load("footer.html");
 });

//  $(document).ready(function(){
//     $('#header-game').load("../header.html");
//  });

//  $(document).ready(function(){
//     $('#footer-game').load("../footer.html");
//  });



 $(document).ready(function() {
	$('.menu-burger__header').click(function(){
                $('.menu-burger__header').toggleClass('open-menu');
                $('.header__nav').toggleClass('open-menu');
                $('body').toggleClass('fixed-page');
	});
});
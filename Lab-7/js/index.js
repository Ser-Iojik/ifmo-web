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

 $('.autoplay').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 6000,
  });
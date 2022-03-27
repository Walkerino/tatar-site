//animated scroll on JQuery 

$('a[href^="#"]').click(function(){
    let anchor = $(this).attr('href');
    $('html, body').animate({
    scrollTop:  $(anchor).offset().top}, 600);
});

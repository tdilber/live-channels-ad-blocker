$(document).ready(function() {
setTimeout(function(){
    $('#mvp-content-main').appendTo('head');
    $('body').empty();
    $('#mvp-content-main').appendTo('body');
    $('#mvp-content-main').css({"width":"1280px", "height":"720px"});
    setTimeout(function(){$('.swal2-container').empty(); $('.vjs-big-play-button').click(); }, 2000); 
}, 5000); 
});

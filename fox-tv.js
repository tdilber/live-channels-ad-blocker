$(document).ready(function() {
setTimeout(function(){
    $('#videoPlayer').appendTo('head');
    $('body').empty();
    $('#videoPlayer').appendTo('body');
    $('#videoPlayer').css({"width":"1280px", "height":"720px"});
    setTimeout(function(){
        $('.swal2-container').empty(); 
        $('.vjs-big-play-button').click(); 
        setTimeout(function(){
            $('.videoAdUi').empty();
            $('#banner').empty();
        }, 8000); 
    }, 2000); 
}, 5000); 
});

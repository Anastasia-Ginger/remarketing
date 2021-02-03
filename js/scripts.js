$(document).ready(function(){
    $("#menu-yak").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

(function($) {
    $(function() {

        $('#up').click(function() {
            $('body,html').animate({scrollTop:0},500);
            return false;
        })

    })
})(jQuery)


$(document).ready(function() {
    $(".btn-left").on("click", function() {
        $(".input-box").val(parseInt($(".input-box").val())-1);
    });
    $(".btn-right").on("click", function() {
        $(".input-box").val(parseInt($(".input-box").val())+1);
    });
});

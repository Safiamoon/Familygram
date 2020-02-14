$(function(){

    $('.modal').on('show.bs.modal', function (e) {
        $("body").css("overflow","hidden");
    });
    
    $('.modal').on('hidden.bs.modal', function (e) {
        $("body").css("overflow","auto");
    });

})




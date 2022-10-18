$( document ).ready(function() {
    $(".burger-menu ").on("click",".bar",function(){
        $(".right-header").slideToggle();
        $(".bar").toggleClass('change');
    });
});
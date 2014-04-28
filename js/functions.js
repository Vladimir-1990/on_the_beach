$(document).ready(function(){
    $(".arrow").click(function(){
        $(this).parent().next().slideToggle();
        $(this).toggleClass("rotate",1000);
        return false;
    });
     
    $(".offer_box").each(function(){
        var rating = $(this).data("rating");
        for(i=1;i<=rating;i++){
            $(this).find(".rating").append("<img src='images/rating_star.png' />");
        }
    });
    
    $(".offer_box").sort(function(a,b){
        return parseInt($(a).data("amount")) - parseInt($(b).data("amount"));
    }).appendTo("#content");
    $("#price_sort").addClass("active");
    
    $("#alphabetical_sort").click(function(){
        $(".offer_box").sort(function(a,b) {    
            return ($(a).data("name")) > ($(b).data("name")) ? 1 : ($(a).data("name")) < ($(b).data("name")) ? -1 : 0;
        }).appendTo("#content");
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
     
    $("#price_sort").click(function(){
        $(".offer_box").sort(function(a,b) {
            return parseInt($(a).data("amount")) - parseInt($(b).data("amount"));
        }).appendTo("#content");
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    
    $("#rating_sort").click(function(){ 
        $(".offer_box").sort(function(a,b) {
            return parseInt($(a).data("rating")) - parseInt($(b).data("rating"));
        }).appendTo("#content");
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });

});

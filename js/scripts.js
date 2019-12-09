$(document).ready(function(){
// $(".imgDetails img").hover(function(){
//     $(".details").show();
//     $(".imgDetails img").hide();

//     })
//     $(".imgDetails img").mouseout(function(){
//         $(".details").hide();
//         $(".imgDetails img").show();
//     });
    
$(".imgDetails .img1").click(function(){
    $(".details").show();
    $(".imgDetails .img1").hide();

});
$(".imgDetails .img2").click(function(){
    $(".ddetails").show();
    $(".imgDetails .img2").hide();

});
$(".imgDetails .img3").click(function(){
    $(".dddetails").show();
    $(".imgDetails .img3").hide();
});
$(".imgDetails .img1").mouseout(function(){
    $(".details").hide();
    $(".imgDetails .img1").show();

});
$(".imgDetails .img2").mouseout(function(){
    $(".ddetails").hide();
    $(".imgDetails .img2").show();

});
$(".imgDetails .img3").mouseout(function(){
    $(".dddetails").hide();
    $(".imgDetails .img3").show();
});


}); 

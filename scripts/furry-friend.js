$(document).ready(function (){
    $("#click-me").click(function () {
        $("img").fadeIn(5000);
        $("#picFrame").slideToggle("slow",function () {
            $("img").fadeIn(5000);
            $("#picFrame").slideToggle("slow");

        });
    });


});
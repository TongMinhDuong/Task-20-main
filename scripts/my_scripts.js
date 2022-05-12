$(document).ready(function () {
    var headClick = 0, eyeClick = 0,
        noseClick = 0, mouthClick = 0;


    lightning_one();
    lightning_two();
    lightning_three();

    $("#head").click(function () {
        if (headClick < 9) {
            $("#head").animate({left: "-=367px"}, 500);
            headClick += 1;
        } else {
            $("#head").animate({left: "0px"}, 500);
            headClick = 0;
        }

    });
    $("#eyes").click(function () {
        if (eyeClick < 9) {
            $("#eyes").animate({left: "-=367px"}, 500);
            eyeClick += 1;
        } else {
            $("#eyes").animate({left: "0px"}, 500);
            eyeClick = 0;
        }

    });
    $("#nose").click(function () {
        if (noseClick < 9) {
            $("#nose").animate({left: "-=367px"}, 500);
            noseClick += 1;
        } else {
            $("#nose").animate({left: "0px"}, 500);
            noseClick = 0;
        }

    });
    $("#mouth").click(function () {
        if (mouthClick < 9) {
            $("#mouth").animate({left: "-=367px"}, 500);
            mouthClick += 1;
        } else {
            $("#mouth").animate({left: "0px"}, 500);
            mouthClick = 0;
        }

    });




});


function lightning_one() {
    $("#container #lightning1").fadeIn(250).fadeOut(250);
    setTimeout('lightning_one()', 4000);
};


function lightning_two() {
    $("#container #lightning2").fadeIn("fast").fadeOut("fast");
    setTimeout("lightning_two()", 5000);
};

function lightning_three() {
    $("#container #lightning3").fadeIn("fast").fadeOut("fast");
    setTimeout('lightning_three()', 7000);
};
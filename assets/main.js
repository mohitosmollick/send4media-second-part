$(document).ready(function() {
    $(".login-btn").on("click", function() {
        $(".login-popup").css('display', "block");
        $(".login-popup").attr('class', "login-popup loginpop-anime");
    });

    $(".signin-btn").on("click", function() {
        $(".login-popup").css('display', "block");
        $(".login-popup").attr('class', "login-popup loginpop-anime");
    });

    $(".iconClose").on("click", function() {
        $(".login-popup").css('display', "none");
        $(".login-popup").attr('class', "login-popup");
    });

    $(".signup-popbtn").on("click", function() {
        $(".signup-popup").css('display', "block");
        $(".signup-popup").attr('class', "signup-popup signuppop-anime");
    });

    $(".signup-btn").on("click", function() {
        $(".signup-popup").css('display', "block");
        $(".signup-popup").attr('class', "signup-popup signuppop-anime");
    });

    $(".signup-section .CloseSection").on("click", function() {
        $(".signup-popup").css('display', "none");
        $(".signup-popup").attr('class', "signup-popup");
    });


    $(".item").on("click", function() {
        $(".item").attr("class", "nav-link active item");
        $(".item2").attr("class", "nav-link item2");
        $('html, body').animate({
            scrollTop: $('#myCarousel').offset().top
        }, 'slow');
    });

    $(".item2").on("click", function() {
        $(".item2").attr("class", "nav-link active item2");
        $(".item").attr("class", "nav-link item");
        $('html, body').animate({
            scrollTop: $('#marketing').offset().top
        }, 'slow');
    });

    $("#myCarousel").on("mouseover", function() {
        $(".item").attr("class", "nav-link active item");
        $(".item2").attr("class", "nav-link item2");
    });

    $("#marketing").on("mouseover", function() {
        $(".item2").attr("class", "nav-link active item2");
        $(".item").attr("class", "nav-link item");
    });

    $("#srcoll-fs").on("click", function() {
        $('html, body').animate({
            scrollTop: $('#myCarousel').offset().top
        }, 'slow');
    });


});
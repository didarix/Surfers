$(document).ready(function(){
    $(".change-img img").click(function(){
            var src=$(this).attr("src");
        $(this).parentsUntil(".scrole-container").find(".scoll img").attr("src",src);

    })
    $(".about-sco").children().click(function(){
        $(this).addClass("active-about").siblings().removeClass("active-about");
        if($(this).hasClass("active-about") && $(this).hasClass("features-sco")){
            $(this).parentsUntil(".sco").find(".about-sco-container").text("easy to use and fast boards not have abig size try it now");
        }
           if($(this).hasClass("active-about") && $(this).hasClass("dim-sco")){
            $(this).parentsUntil(".sco").find(".about-sco-container").text("1.5m * 0.6m ");
        }
           if($(this).hasClass("active-about") && $(this).hasClass("disc-sco")){
            $(this).parentsUntil(".sco").find(".about-sco-container").text("Easy to ride, care free surfing craft that's fun for everyone, paddles well, super fast down the line and great for any level of surfing depending on who rides it. The Donny Stoker, a rework on design from stokesys first ever pro model. A super easy to surf and fun board. The Donny Stoker is a board for total freesurfing expression.");
        }
    })
    
    $(".arrow-right").click(function(){
        $(".active-sco").next().removeClass("hide-sco").addClass("active-sco").siblings().addClass("hide-sco").removeClass("active-sco");
        if($(".scrole1").hasClass("active-sco")){
            $(".number-sider").text("1/4");
        }
         if($(".scrole2").hasClass("active-sco")){
            $(".number-sider").text("2/4");
        }
         if($(".scrole3").hasClass("active-sco")){
            $(".number-sider").text("3/4");
        }
         if($(".scrole4").hasClass("active-sco")){
            $(".number-sider").text("4/4");
        }
    })
    $(".arrow-left").click(function(){
        $(".active-sco").prev().removeClass("hide-sco").addClass("active-sco").siblings().addClass("hide-sco").removeClass("active-sco");
        if($(".scrole1").hasClass("active-sco")){
            $(".number-sider").text("1/4");
        }
         if($(".scrole2").hasClass("active-sco")){
            $(".number-sider").text("2/4");
        }
         if($(".scrole3").hasClass("active-sco")){
            $(".number-sider").text("3/4");
        }
         if($(".scrole4").hasClass("active-sco")){
            $(".number-sider").text("4/4");
        }
    }) 
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $(".slide-up").addClass("active-sco");
            $(".full-nav").css({ "backgroundColor":"#0004" });
            $(".navbar-light .navbar-nav .nav-link").css({"color":"#fff"});
        }
        else if($(window).scrollTop()<=0){
            $(".slide-up").removeClass("active-sco");
            $(".full-nav").css({ "backgroundColor":"transparent" });
            $(".navbar-light .navbar-nav .nav-link").css({"color":"#0005"});
        }
    })
    $(".fa-times").click(function(){
        $(this).parentsUntil("right-text-row").find(".right-text-row").addClass("hide-opacity");
    })
});

$(document).ready(function(){
    var i=0;
    $(".fa-arrow-alt-circle-right").click(function(){
                if (i==-125) i=25;
                i-=25;
            $(".sec-slider1-md").css({
            "left":i+"%",
        })
    })
        $(".fa-arrow-alt-circle-left").click(function(){
            if (i>=0) i=-125;
            i+=25;
            $(".sec-slider1-md").css({
            "left":i+"%",
        })
    })
    window.setInterval(function(){
                  if (i==-125) i=25;
                i-=25;
            $(".sec-slider1-md").css({
            "left":i+"%",
        })
    },5000);
 $('a').click(function(){               /*this is for scroll body*/
    $("html, body").animate({
        scrollTop:$('#'+$(this).data('value')).offset().top 
    },2000);
    });
})

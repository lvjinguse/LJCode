$('.menus li').each(function(){
    $('.menus li').mouseover(function(){
        $('.menus li').removeClass('bg');
        $(this).addClass('bg');
        var index = $(this).index();
        
        $('.scroll').css('margin-top',-index*500+'px');
        
    })
})
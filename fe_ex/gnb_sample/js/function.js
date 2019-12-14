$(function(){

    var prevScrollTop = $(window).scrollTop(),
    nowScrollTop = $(window).scrollTop(),
    nowDir = 'down',
    prevDir = 'down';

    $('.header').on('mouseenter', function(){
        $(this).addClass('on');
    });

    $('.header').on('mouseleave', function(){
        if( $('.header').hasClass('scroll') == false ){
            $(this).removeClass('on');
        }
    });

    $(document).on('scroll', function(){
        nowScrollTop = $(window).scrollTop();

        if(nowScrollTop > prevScrollTop){
            // down
            $('.header').addClass('on scroll');
            console.log('down');
        } else {
            // up
            $('.header').removeClass('on scroll');
            console.log('up');
        }

        prevScrollTop = nowScrollTop;
    });

});
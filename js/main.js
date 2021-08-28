$(document).ready(function(){

    $('.all_box').hide();

    $('.ham').click(function(){
        $('.all_box').fadeIn();
    });

    $('.all_close').click(function(){
        $('.all_box').fadeOut();
    })
    
    $(window).scroll(function(){

        var sct = $(window).scrollTop();
        console.log(sct);

        var sct = $(window).scrollTop();
        var wrapH = $('.wrap').height();
        var useScroll = sct / (wrapH - innerHeight);


        if(sct >= 2800){
            $('.sec4').css({
                left: -useScroll * 100 + '%',
            });
        }

        if(sct >= 920){
            $('header').addClass('on_header')
        }   else { $('header').removeClass('on_header');
            }

            
        if(sct >= 600){
            $('.sec2_img').addClass('sec2_img_active')
        }

        if(sct >= 620){
            $('.sec2_wrap').addClass('sec2_wrap_active')
        }

        if(sct >= 1500){
            $('.sec3-1').addClass('sec3-1_active')
        }

        if(sct >= 1800){
            $('.sec3-2img').addClass('sec3-2img_active')
        }

        if(sct >= 1800){
            $('.img31').addClass('img31_active')
        }

        if(sct >= 2100){
            $('.img32').addClass('img32_active')
        }

        if(sct >= 2200){
            $('.sec3_ul').addClass('sec3_ul_active')
        }

        if(sct >= 2250){
            $('.sec3_ul2').addClass('sec3_ul2_active')
        }

        if(sct >= 3400){
            $('.tgh').addClass('tgh_active')
        }

        if(sct >= 3700){
            $('.sec5_more').addClass('sec5_more_active')
        }

        if(sct >= 4500){
            $('.sub_t').addClass('sub_t_active')
        }

        if(sct >= 4700){
            $('.tit').addClass('tit_active')
        }

        if(sct >= 4800){
            $('.more').addClass('more_active')
        }

        if(sct >= 5100){
            $('.sub_t2').addClass('sub_t2_active')
        }

        if(sct >= 5300){
            $('.title').addClass('title_active')
        }

        if(sct >= 5500){
            $('.desc').addClass('desc_active')
        }

        if(sct >= 5100){
            $('.sec7_img').addClass('sec7_img_active')
        }

        

        if(sct >= 00){
            $('').addClass('_active')
        }

        

    });

  
  

});//end
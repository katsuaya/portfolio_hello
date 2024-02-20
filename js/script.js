

//TOPボタン-------------------------------------------------------------
$(function(){
  jQuery('#slideshow').slick ({
    lazyLoad: 'ondemand'
  });
  $('#slideshow').slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });
  $('#nav_toggle').on('click',function(){
    $('#nav_toggle,#header_menu_sp').delay(1000).toggleClass('show');
  });
  $(window).scroll(function(){
    let scroll= $(this).scrollTop();
    //  console.log(scroll);
     if(scroll<300){
       $('#top_button').fadeOut(300);
      } else {
        $('#top_button').fadeIn(300);
      }
  });
  $('#top_button').click(function(){
    $('html,body').animate({scrollTop:0},800,'swing');
  });
});
//------------------------------------------------------------------
$(window).on('load', function() {
  $('#slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });

$(document).ready(function(){
  
$('#slider').slick({
  fade:true,//切り替えをフェードで行う。初期値はfalse。
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 2000,//次のスライドに切り替わる待ち時間
  speed:1000,//スライドの動きのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
  arrows: true,//左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: true,//下部ドットナビゲーションの表示
      pauseOnFocus: false,//フォーカスで一時停止を無効
      pauseOnHover: false,//マウスホバーで一時停止を無効
      pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
      
});

$('#slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
  $('#slider').slick('slickPlay');
});
});

$(document).ready(function(){
  $('#slider').css('height','auto');
  
});


});

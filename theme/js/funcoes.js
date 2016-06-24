 //diminuir o padding do menu ao dar scroll.
 $(window).on('scroll', function() {
   var scrollTop = $(window).scrollTop();
   if (scrollTop > 50) {
     $('#topo').stop().animate({ padding: "5px" }, 210);
   } else {
     $('#topo').stop().animate({ padding: "25px" }, 10);
   }
 });

 $(document).ready(function() {
   // shadow + mini menu
   $(".mini-menu").on('click touchstart', function(e) {
     $('html').toggleClass('menu-active');
     e.preventDefault();
   });

   $(".shadow").on('click touchstart', function(e) {
     $('html').toggleClass('menu-active');
     e.preventDefault();
   });

   //slider topo


   $('.bxslider').bxSlider({
     auto: true,
     controls: false,
     maxSlides: 1,
     slideMargin: 1
   });

 });

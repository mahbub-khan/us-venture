$(document).ready(function() {
 
  $(".owl-carousel").owlCarousel({
 
     autoPlay: 3000,
      navigation : true,
    navigationText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],

      slideSpeed : 500,
      paginationSpeed : 500,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});
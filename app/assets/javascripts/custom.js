$(document).on('turbolinks:load',function() {
    /*---------------------------------------------------------------------------*
     *                              media slider                                 *
     *---------------------------------------------------------------------------*/
    $('.owl-carousel').owlCarousel({
      items: 4,
      slideBy: 3,
      loop: true,
      lazyLoad: true,
      responsive: true,
      rewindSpeed: 2500,
      stopOnHover: true,
      pagination: false,
      autoPlay: 5000,

      responsive:{
          0:{
              items:1,
              navigation:true
          },
          767:{
              items:2,
              navigation:false
          },
          991:{
              items:3,
              navigation:true,
              loop:false
          }
      }
  })

});

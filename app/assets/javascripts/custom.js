$(document).on('turbolinks:load',function() {
  /* -----------------------------------------------------------
   *                   Dropdown menu
   * ----------------------------------------------------------- */

   // for hover dropdown menu
   $('ul.nav li.dropdown').hover(function() {
     $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
   }, function() {
     $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
   });

   $('.carousel').carousel({
     interval: 4000 //changes the speed
   })
});

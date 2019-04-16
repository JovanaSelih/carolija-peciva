$(document).ready(function(){
  //ALL NAVIGATION MENUS
  $(".burger").click(function(){
    $(this).toggleClass("active");
    $(this).next().toggleClass("active");
  });
});

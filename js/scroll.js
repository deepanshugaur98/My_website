$(function () {
   $(document).scroll(function () {
   let $nav = $("nav");
   let $text = $("nav ul a li");
   let height = $(window).height() * .2;
   $nav.toggleClass('scrolled', $(this).scrollTop() > height);
   $text.toggleClass('scrolled_text', $(this).scrollTop() > height);
   });
});

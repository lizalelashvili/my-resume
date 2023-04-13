$(document).ready(function() {
    $('.controlbtn').click(function() {
      var slide = $(this).data('slide');
      $('.horizslider').css('transform', 'translateY(' + (-(slide - 1) * 200) + 'px)');
      $('.controlbtn').removeClass('active');
      $(this).addClass('active');
    });
  });
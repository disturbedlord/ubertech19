var slideIndex = 1;
$(document).ready(function() {
  $('#tabs li').on('click', function() {
    var tab = $(this).data('tab');

    $('#tabs li').removeClass('is-active');
    $(this).addClass('is-active');

    $('#tab-content div').removeClass('is-active');
    $('div[data-content="' + tab + '"]').addClass('is-active');
    
      if(tab == 1)
        slideIndex = 1;
        else if(tab == 2)
            slideIndex = 4;
            else if(tab == 3)
                slideIndex = 8;
                else if(tab == 4)
                    slideIndex = 12;
          console.log("slideIndex");
      plusDivs(1);

  });
});


showDivs(slideIndex);

function plusDivs(n) {
    
  showDivs(slideIndex += n);
    console.log(slideIndex);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n % 4 == 0) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
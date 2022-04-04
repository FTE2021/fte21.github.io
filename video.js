<script>
    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 5000); // Change image every 2 seconds
    }
    
/* ----------------------------------------------------------- */
/*  4. VIDEO POPUP
/* ----------------------------------------------------------- */

$('.mu-video-play-btn').on('click', function(event) {

event.preventDefault();

$('.mu-video-iframe-area').addClass('mu-video-iframe-display');

});

// when click the close btn

// disappear iframe window

$('.mu-video-close-btn').on('click', function(event) {

event.preventDefault();

$('.mu-video-iframe-area').removeClass('mu-video-iframe-display');

});

// stop iframe if it is play while close the iframe window

$('.mu-video-close-btn').click(function(){

$('.mu-video-iframe').attr('src', $('.mu-video-iframe').attr('src'));

});

// when click overlay area

$('.mu-video-iframe-area').on('click', function(event) {

event.preventDefault();

$('.mu-video-iframe-area').removeClass('mu-video-iframe-display');

});

$('.mu-video-iframe-area, .mu-video-iframe').on('click', function(e){
e.stopPropagation();
});


    </script>
  
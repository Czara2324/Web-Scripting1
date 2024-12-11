$(document).ready(function(){

  // Jquery format to call the function 'flickity' to initialize the image slider effect
  // The images are contained in the DIV CLASS .main-carousel
  
  $('.main-carousel').flickity({
    // options: images will slide to the left within the container, the next image will slide after 1.5 seconds
    cellAlign: 'left',
    contain: true,
    autoPlay: 1500
  });


});

	
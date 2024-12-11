$(document).ready(function(){

    $(function(){
        $('#imageZoom1').imageZoom()
        $('#imageZoom2').imageZoom()
        $('#imageZoom3').imageZoom()
        $('#imageZoom4').imageZoom()
        $('#imageZoom5').imageZoom()
        $('#imageZoom6').imageZoom()
       
    });

});
 // This is the function to initiate the imageZoom function when you click on an image of the menu page

 // $('.my-gallery').imageZoom({zoom:200})
 
 //The plugin has this code above to set it on a class, unfortunately this is not working as expected, maybe because I set the styling of the whole html doc first
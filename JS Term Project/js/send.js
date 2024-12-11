$(document).ready(function(){
    //This is a floating messenger function
    //Visitor must input a proper email, otherwise a warning will be shown
    $.fancyMessenger({
        onSend:function(obj){
        // Placeholder text "Send your message here." shows here
        console.log($(obj).find("textarea").val());
        }
    });
    //This function sets the messenger to close after the message has been sent
    //Default is false
    $.fancyMessenger({
        closeOnSend: true
    });
});

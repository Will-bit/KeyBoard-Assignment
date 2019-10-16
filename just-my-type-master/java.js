let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];



/// Step 1 || Code will hide the upper keyboard when page is loaded

$('document').ready(function(){
     $('#keyboard-upper-container').hide()
 })

/// Step 2.  When Shift is held down, lowerkey is hidden upper shows.  Opposite when released.  The stop clause at the end could cause me problems later on
$(document).keydown(function (e){

    if (e.which == 16) {
    $('#keyboard-lower-container').hide()
    $('#keyboard-upper-container').show() 
} else {
    $('#keyboard-lower-container').stop()
    }
}); 


$(document).keyup(function (e2) {
 
      
    if (e2.which == 16) {
       $('#keyboard-lower-container').show()
       $('#keyboard-upper-container').hide()
    } else {
       $('#keyboard-upper-container').stop()
    }

    });

    //Step 3  After many attempts, and assistance from Josh this code now highlights the appropiate key
   
    $(document).keypress(function(e){
        let which_letter = e.key.charCodeAt(0);
        $(`#${which_letter}`).addClass('highlight');
    });
    
    $(document).keyup(function(){
        $("span").removeClass('highlight');
        $('div').removeClass('highlight');
    });

    //var which_keys = String.fromCharCode()
         //    $(which_letter).addClass('highlight');
           //   var which_letter = e.which;

    //Step 4
    $(document).ready(function(){
        $('#sentence').append(sentences)
    })
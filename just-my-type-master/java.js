let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let letterCount = 0;
let sentenceNumber = 0; // first array
let sentence = sentences[sentenceNumber]; // reference sentence, pulls first
var currentLetterDiv = $("#target-letter"); // supposed to track the letter
currentLetterDiv.text(currentLetter); // prints it out below
var currentLetter = sentence[0];
var errors = 0;

/// Step 1 || Code will hide the upper keyboard when page is loaded

$('document').ready(function () {
    $('#keyboard-upper-container').hide()
    $("#yellow-block").animate({ left: 17 });
})

/// Step 2.  When Shift is held down, lowerkey is hidden upper shows.  Opposite when released.  The stop clause at the end could cause me problems later on
$(document).keydown(function (e) {
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

//Step 3, 5-8  After many attempts, and assistance from Josh this code now highlights the appropiate key

$(document).keypress(function (e) {
    let which_letter = e.key.charCodeAt(0);
    $(`#${which_letter}`).addClass('highlight');


    $('#yellow-block').animate({ 'left': '+=17.5px' }, 'fast'); // Moves the yellow block every click


    letterCount++; //advances the letterIndex by 1
    var nextLetter = sentence[letterCount]; // sets nextLetter = the current letterCount
    currentLetterDiv.text(nextLetter); //sets the content of currentLetterDiv = nextLetter

    if (letterCount < sentence.length - 1) { // if letter hasn't gone through the entire word yet
        if (which_letter == currentLetter.charCodeAt(0)) { // if key pressed is correct
            $("#feedback").append("<span class = 'glyphicon glyphicon-ok'></span>"); // gives check
        } else {
            $("#feedback").append("<span class = 'glyphicon glyphicon-remove'></span>"); // if wrong gives X
            errors++; // and advance the errors counter by 1
        }
    }
    if (letterCount == sentence.length) {
        $('#sentence').empty(); // local and empties once you're at the end
        sentenceNumber++; //increment, use to move to next sentence
        sentence = sentences[sentenceNumber] // may need to look back at this code
        $('#sentence').append(sentence)  /// when at the end, changes the sentence
        letterCount = 0; // resetting the letter count
        if (sentenceNumber < sentences.length - 1) {
            var nextLetter = sentence[letterCount];
        }
        currentLetterDiv.text(nextLetter); // set the content of the currentLetterDiv = nextLetter
        $("#yellow-block").animate({ left: 17 }); //resets the position at of the block
        $("#feedback").empty(); //clears the feedback div
    }


});

$(document).keyup(function () {
    $("span").removeClass('highlight');
    $('div').removeClass('highlight');
});


//Step 4 Print the sentence to the DOM, 
$(document).ready(function () {
    $('#sentence').append(sentence)


})


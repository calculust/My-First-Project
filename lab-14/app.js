$(function () {
    // Setup
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let currentSentence = 0;
    let currentChar = 0;
    let numberOfMistakes = 0;
    let numberOfWords = 0;
    let gameActive = 0;
    let gameStartTime, gameEndTime, minutes, wpm;

    // Determine wordcount
    sentences.forEach(e => {
        numberOfWords += e.split(" ").length;
    });

    // Setup Keyboard
    $('#keyboard-upper-container').hide();

    $(document)
    .on('keydown', function (e) {
        if (e.keyCode === 16) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
        }
    })
    .on('keyup', function (e) {
        if (e.keyCode === 16) {
            $('#keyboard-lower-container').show();
            $('#keyboard-upper-container').hide();
        } else {
            $('div,span').removeClass('highlight');
        }
    })
    .on('keypress', function (e) {
        // Highlight key that was pressed
        $('#' + e.keyCode).addClass('highlight');      

        // Key game logic

        if (!gameActive) { // Game timer starts after first keystroke
            gameActive = 1;
            gameStartTime = Date.now();
        }
        
        if (e.key === sentences[currentSentence][currentChar]) { // Correct key pressed
            console.log('yay')
            
            currentChar++;
            
            if (sentences[currentSentence][currentChar]) { // If we get the right key and we're not at the end of the sententence...
                $('#feedback').append('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>');
                $('#target-letter').empty();
                $('#target-letter').append(sentences[currentSentence][currentChar]);
                
                // Move Yellow Block
                $('#yellow-block').css('left', '+=17.5px');
            } else { // When we get to the end of a sentence...
                currentSentence++;
                currentChar = 0;
                
                $('#sentence').empty();
                $('#feedback').empty();
                $('#target-letter').empty();
                $('#yellow-block').css('left', '28px');

                if (sentences[currentSentence]) {
                    $('#sentence').append(sentences[currentSentence]);
                    $('#target-letter').append(sentences[currentSentence][currentChar]);
                } else { // When there are no more sentences...

                    // Determine WPM
                    gameEndTime = Date.now();
                    minutes = (gameEndTime - gameStartTime) / 1000 / 60;
                    wpm = Math.round(numberOfWords / minutes - 2 * numberOfMistakes);

                    $('#yellow-block').hide();
                    $('#feedback').append(`Congratulations! <br/><br/>Your typing speed was ${wpm} words per minute.`);

                    // Delayed prompt to user to see if they want to play again?
                    setTimeout(function() {
                        if (confirm("Would you like to play again?")) {
                            currentSentence = 0;
                            currentChar = 0;

                            $('#feedback').empty();
                            $('#sentence').append(sentences[0]);
                            $('#target-letter').append(sentences[0][0]);
                        }              
                    }, 3000);
                }
            }
        } else { // Log mistake
            $('#feedback').append('<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
            numberOfMistakes++;
        }
    });

    // Setup first game
    $('#sentence').append(sentences[0]);
    $('#target-letter').append(sentences[0][0]);
});
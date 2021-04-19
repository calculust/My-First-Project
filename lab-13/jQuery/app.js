$(function() {
    // 1
    $('body').prepend(`<button id="button1">I'm a Button</button>`);
    $('body').prepend(`<h1>1:</h1>`);

    $('#button1').click(function() {
        alert('Sup');
    });

    // 2
    $('#button').click(function (){
        if ($('#textBox').val() != '') {
            alert(`You typed: ${$('#textBox').val()}`);
        } else {
            alert('Plz enter some value in the box.');
        }
    });

    // 3
    $('#three').hover(
        function() {
          $(this).css('background-color', 'red');
        }, function() {
            $(this).css('background-color', 'darkgreen');
        }
    );

    // 4
    $('#paragraph').click(function () {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        $(this).css('color',`rgb(${r}, ${g}, ${b})`)
    });

    // 5
    $('#button5').click(function() {
        ($('#div5').children().length < 1) ? $('#div5').append('<span>Vishal Agarwala</span>') : '';
    });

    // 6
    let friends = ['Raul','Buo','Eric','Simon','Anthony','Randy','John','Isaac','Fernando','Salik'];
    let friendIndex = 0;

    $('#friendButton').click(function () {
        if (friendIndex < friends.length) {
            $('#friendList').append(`<li>${friends[friendIndex]}</li>`);
            friendIndex++;
        } else {
            alert(`I don't have any more friends.`);
        }
    });
});
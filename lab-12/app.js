// Runs once page loads
$(function() {

    // When form is submitted
    $( '#form' ).on( 'submit', function() {
        /*
        $('#container').append('<h2>' + $( '#textField' ).val() + '</h2>');
        $('h2').hover(
            function() {
              $(this).css({ 'background-color': 'gray', 'border-radius': '20px' });
            }, function() {
              $(this).css({ 'background-color': 'inherit', 'border-radius': '20px' });
            }
        );
        */ 
       
        // Add list items to unordered list
        $('#theList').append('<li>' + $( '#textField' ).val() + '</li>');
        $('li').on('click', function (e) {
            $(this).css('color', randomColor());
        });
        $('li').on('dblclick', function (e) {
            $(this).remove();
        });
    });

    // Disable and enable submit button
    $( '#textField' ).on('input', function (e) {
        if ($(this).val() != '') {
            $( '#btnSubmit' ).removeAttr('disabled');
        } else {
            $( '#btnSubmit' ).attr('disabled', 'disabled');
        }
    });
    
    // Setup page
    $('body').append('<div id="container"></div>');
    $('#container').append('<ul id="theList"></ul>');

    // Random Color Generator
    function randomColor() {
        return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    }
});
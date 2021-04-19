window.addEventListener('DOMContentLoaded', function () {
    // 1
    let myButton = document.createElement('button');
    myButton.appendChild(document.createTextNode(`I'm a Button`));
    myButton.addEventListener('click', function(e) {
        alert('Sup');
    })
    
    let h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode('1:'));
    document.body.insertBefore(myButton, document.body.childNodes[0]);
    document.body.insertBefore(h1, document.body.childNodes[0]);

    // 2
    document.getElementById('button').addEventListener('click', function(e) {
        let textBox = document.getElementById('textBox');
        
        if (textBox.value != '') {
            alert(`You typed: ${textBox.value}`);
        } else {
            alert('Plz enter some value in the box.');
        }
        
    })

    // 3
    let three = document.getElementById('three');

    three.addEventListener('mouseover', function(e) {
        three.style.backgroundColor = 'red';
    });

    three.addEventListener('mouseout', function(e) {
        three.style.backgroundColor = 'darkgreen';
    });

    // 4
    let paragraph = document.getElementById('paragraph');

    paragraph.addEventListener('click', function(e) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        
        paragraph.style.color = `rgb(${r}, ${g}, ${b})`;
    });

    // 5
    let button5 = document.getElementById('button5');
    let div5 = document.getElementById('div5'); 

    button5.addEventListener('click', function(e) {
        let span5 = document.createElement('span');
        span5.appendChild(document.createTextNode('Vishal Agarwala'));
        (!div5.hasChildNodes()) ? div5.appendChild(span5) : '';
    });

    // 6
    let friends = ['Raul','Buo','Eric','Simon','Anthony','Randy','John','Isaac','Fernando','Salik'];
    let friendIndex = 0;
    let friendList = document.getElementById('friendList');

    document.getElementById('friendButton').addEventListener('click', function(e) {
        if (friendIndex < friends.length) {
            let friendLI = document.createElement('li');
            friendLI.appendChild(document.createTextNode(friends[friendIndex]));
            friendList.appendChild(friendLI);
            friendIndex++;
        } else {
            alert(`I don't have any more friends.`);
        }
    });
});
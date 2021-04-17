let friends = ['Sanjay','Adam','Jordan','Fernando','Eric'];
let friendElements = []
let h3 = null;
let p = null;

function sing() {
    for (i = 0; i < friends.length; i++) {
        console.log(friends[i].toUpperCase() + ':');
        friendElements.push(document.createElement('div'));
        friendElements[friendElements.length-1].className = 'friend';
        
        h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode(friends[i]));
        friendElements[friendElements.length-1].appendChild(h3);
        
        document.body.appendChild(friendElements[friendElements.length-1]);

        for(j = 99; j > 0; j--) {
            if (j == 1) {
                // console.log(j + ' line of code in the file, ' + j + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');

                p = document.createElement('p');
                p.appendChild(document.createTextNode(`${j} line of code in the file, ${j} line of code; ${friends[i]} strikes one out, clears it all out, no more lines of code in the file`));
                friendElements[friendElements.length-1].appendChild(p);
            } else {
                // console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file');

                p = document.createElement('p');
                p.appendChild(document.createTextNode(`${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${(j-1)} lines of code in the file`));
                friendElements[friendElements.length-1].appendChild(p);
            }
        }
    }
}
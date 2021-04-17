let buttonAddSquare = document.createElement('button');
let buttonAddSquareText = document.createTextNode('Add Square');
buttonAddSquare.appendChild(buttonAddSquareText);
buttonAddSquare.className = 'buttonAddSquare';

let squareArray = [];
let uniqueSquareIndex = 1;

buttonAddSquare.addEventListener('click', function(e) {
    squareArray.push(document.createElement('div'));
    squareArray[squareArray.length-1].className = 'blackSquare';
    squareArray[squareArray.length-1].id = uniqueSquareIndex;
    squareArray[squareArray.length-1].appendChild(document.createTextNode(uniqueSquareIndex));

    squareArray[squareArray.length-1].addEventListener('click', function(e) {
        this.style.backgroundColor = randomColor();
    });

    squareArray[squareArray.length-1].addEventListener('dblclick', function(e) {
        let squares = document.getElementsByClassName('blackSquare');
        
        for (i = 0; i <= squares.length; i++) {

            // Check if even and remove next square
            if((this.id % 2) == 0 && this == squares[i-1]) {
                if (squares[i]) {
                    squares[i].remove();
                } else {
                    alert('No next square to remove');
                }
            }
            
            // Check if odd and remove previous square
            if((this.id % 2) == 1 && this == squares[i-1]) {
                if (squares[i-2]) {
                    squares[i-2].remove();
                } else {
                    alert('No previous square to remove');
                }
          }
        }
    });

    container.appendChild(squareArray[squareArray.length-1])
    uniqueSquareIndex++;
});

let container = document.createElement('div');
container.className = 'container';

window.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(buttonAddSquare);
    document.body.appendChild(container);
});

let colors = ['red','orange','yellow','green','blue','indigo','violet','teal'];

function randomColor() {
  return colors[Math.floor(Math.random()*colors.length)];
}
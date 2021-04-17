let headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

let headerH1 = document.createElement('h1');
let headerH1Text = document.createTextNode('This is an h1'); 
headerH1.appendChild(headerH1Text); 
headerH1.className = 'h1';

let headerH2 = document.createElement('h2');
let headerH2Text = document.createTextNode('This is an h2'); 
headerH2.appendChild(headerH2Text);
headerH2.className = 'h2'; 

let headerH3 = document.createElement('h3');
let headerH3Text = document.createTextNode('This is an h3'); 
headerH3.appendChild(headerH3Text);
headerH3.className = 'h3'; 

let headerH4 = document.createElement('h4');
let headerH4Text = document.createTextNode('This is an h4'); 
headerH4.appendChild(headerH4Text);
headerH4.className = 'h4';

let headerH5 = document.createElement('h5');
let headerH5Text = document.createTextNode('This is an h5'); 
headerH5.appendChild(headerH5Text);
headerH5.className = 'h5';

let headerH6 = document.createElement('h6');
let headerH6Text = document.createTextNode('This is an h6'); 
headerH6.appendChild(headerH6Text);
headerH6.className = 'h6';

let buttonAddList = document.createElement('button');
let buttonAddListText = document.createTextNode('Click to add new list item');
buttonAddList.appendChild(buttonAddListText);
buttonAddList.className = 'buttonAddList';

buttonAddList.addEventListener('click', function(e) {
  myList.appendChild(document.createElement('li'));
  listItems[myListIndex].appendChild(document.createTextNode('This is list item ' + (myListIndex + 1)));
  listItems[myListIndex].addEventListener('click', function(e) {
    this.style.color = randomColor();
  });
  listItems[myListIndex].addEventListener('dblclick', function(e) {
    this.remove();
    myListIndex--;
  });  

  myListIndex++;
});

let myList = document.createElement('ul');
let myListIndex = 0;
let listItems = document.getElementsByTagName('li');

window.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(headerContainer);
    headerContainer.appendChild(headerH1);
    headerContainer.appendChild(headerH2);
    headerContainer.appendChild(headerH3);
    headerContainer.appendChild(headerH4);
    headerContainer.appendChild(headerH5);
    headerContainer.appendChild(headerH6);
    headerContainer.appendChild(buttonAddList);
    headerContainer.appendChild(myList);
});

headerH1.addEventListener('dblclick', function(e) {
  headerH1.style.color = randomColor();
});

headerH2.addEventListener('dblclick', function(e) {
  headerH2.style.color = randomColor();
});

headerH3.addEventListener('dblclick', function(e) {
  headerH3.style.color = randomColor();
});

headerH4.addEventListener('dblclick', function(e) {
  headerH4.style.color = randomColor();
});

headerH5.addEventListener('dblclick', function(e) {
  headerH5.style.color = randomColor();
});

headerH6.addEventListener('dblclick', function(e) {
  headerH6.style.color = randomColor();
});

let colors = ['red','orange','yellow','green','blue','indigo','violet','teal'];

function randomColor() {
  return colors[Math.floor(Math.random()*colors.length)];
}
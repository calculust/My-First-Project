let myName = 'Vishal Agarwala';
let interests = ['Crypto','Psychedelics','Digital Nomadism','Film','Music'];

console.log('Name: ' + myName.toUpperCase());
console.log('Career: Full Stack Engineer / Instructor');
console.log('Description: I like turtles');
console.log('');

console.log('My Interests:');
for (i = 0; i < interests.length; i++) {
    console.log('* ' + interests[i]);
}
console.log('');

console.log('My Previous Experience:');
displayPosition('Symmetry Labs', 'VP, Sales', 'Oversaw revenue generation');
displayPosition('PHHHOTO', 'VP, Sales', 'Oversaw revenue generation');
displayPosition('VICE Media', 'Activation Manager', 'Digital marketing for The Creators Project');
console.log('');

console.log('My Skills:');
displaySkill('HTML', false);
displaySkill('CSS', false);
displaySkill('Webflow', true);
displaySkill('Sales', false);
displaySkill('Marketing', false);

/* Functions */

function displayPosition(company, title, description) {
    console.log('* ' + title + ' at ' + company + ' - ' + description);
}

function displaySkill(skill, isCool) {
    ( isCool ) ? console.log('* BAM: ' + skill) : console.log('* ' + skill);
}
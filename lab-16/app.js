var friends = ['Tina','Rob','Ravi','Steve','Sabrina'];
var locations = ['basement','attic','kitchen','bathroom','dining room','garage','hallway','foyer','closet','little room under the staircase where harry potter use to live'];
var objects = ['clock','eye liner','hair tie','blanket','soda can','headphones','spoon','camera','clothes','boombox','plate','piano','grid paper','nail file','lip gloss','pencil','toe ring','cinder block','bookmark','cork'];

for (var i = 1; i <= 100; i++) {
    var h3 = document.createElement('h3');
    var accusation = document.createTextNode(`Accusation ${i}`)
    h3.appendChild(accusation);
    h3.addEventListener('click', makeAlert());
    document.getElementById('container').appendChild(h3);

    function makeAlert() {
        var accusationNumber = i;

        function displayAlert() {
            Swal.fire(
                `Accusation ${accusationNumber}`,
                `I accuse ${friends[accusationNumber%5]}, with the ${objects[accusationNumber%20]} in the ${locations[accusationNumber%10]}!`,
                'warning'
            )  
        }
        return displayAlert;
    }
}
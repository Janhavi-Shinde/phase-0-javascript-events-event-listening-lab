

    const input = document.getElementById('input');

function addingEventListener ( ){
    input.addEventListener('click', function () {
        alert('I was clicked!');
      });
}
addingEventListener();


allDivs = document.getElementsByTagName('div');
const divFive = allDivs[5];

function addingEvListToDiv5 (){
    divFive.addEventListener('click', function (){
    alert('Hey There!');
});
}

addingEvListToDiv5();
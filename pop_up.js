var popUps =  document.querySelectorAll('.modal');


popUps.forEach((popUp) =>{

var popUpName = popUp.classList[1];


var gestureDetector = document.querySelector(`.gd.${popUpName}`);

var reason = document.querySelector(`.hide.${popUpName}`);

var close = document.querySelector(`span.close.${popUpName}`);


gestureDetector.addEventListener('click',() => {
    popUp.style.display = 'block';
    reason.style.display = 'none';
});



close.addEventListener('click',() => {
    popUp.style.display = 'none';
    reason.style.display = 'block';
});







});
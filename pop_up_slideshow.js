var popUps =  document.querySelectorAll('.modal-slideshow');


popUps.forEach((popUp) =>{

var popUpName = popUp.classList[1];




var gestureDetector = document.querySelector(`.gd.${popUpName}`);

var reason = document.querySelector(`.hide.${popUpName}`);

var close = document.querySelector(`span.close.${popUpName}`);

var emailButton = document.querySelector(`.email-me`);


gestureDetector.addEventListener('click',() => {
    popUp.style.display = 'block';
    reason.style.display = 'none';
    emailButton.style.display = 'none';
});



close.addEventListener('click',() => {
    popUp.style.display = 'none';
    reason.style.display = 'block';
    emailButton.style.display = 'block';
});







});
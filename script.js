
const sections = ['hero', 'perfect-match','why'];


sections.forEach((className) => {
    var section = document.querySelector(`section.slide.${className}`);
    var numberOfElements = document.querySelectorAll(`div.slide-element.${className}`).length;


    section.style.height = `${numberOfElements *100}vh`;
} );









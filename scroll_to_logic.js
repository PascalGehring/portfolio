gsap.registerPlugin(ScrollToPlugin);

const scrollButtons = document.querySelectorAll('.scroll-down-arrow');

let scrollIds = [];
scrollButtons.forEach((scrollButton) => {
    const scrollId = scrollButton.classList[0];

    scrollIds.push(scrollId);
});

scrollIds.push('contact')

console.log(scrollIds);

const scrollDownDuration = 0.7;


for (var i = 0; i< scrollIds.length - 1; i++){

    const scrollDownButton = document.querySelector(`.${scrollIds[i]}.scroll-down-arrow`);

    const scrollTo = `#${scrollIds[i+1]}`;

    scrollDownButton.addEventListener('click', ()=> {
        gsap.to(window, {duration: scrollDownDuration, scrollTo: scrollTo});
   });
}


// var: type, value dynamic
// let: type fixed, value dyn
// const: both fixed
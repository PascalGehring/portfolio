gsap.registerPlugin(ScrollToPlugin);

const scrollDownButtons = document.querySelectorAll('.scroll-down-arrow');


let scrollDownIds = [];
scrollDownButtons.forEach((scrollDownButton) => {
    const scrollDownId = scrollDownButton.classList[0];

    scrollDownIds.push(scrollDownId);
});

scrollDownIds.push('contact')

//console.log(scrollDownIds);




const scrollDuration = 0.5;


for (var i = 0; i< scrollDownIds.length - 1; i++){

    

    const scrollDownButton = document.querySelector(`.${scrollDownIds[i]}.scroll-down-arrow`);

    const scrollDownTo = `#${scrollDownIds[i+1]}`;

    scrollDownButton.addEventListener('click', ()=> {
        gsap.to(window, {duration: scrollDuration, scrollTo: scrollDownTo});
   });
}


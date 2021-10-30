gsap.registerPlugin(ScrollTrigger);

const animationScrollLength = 2000;

const className = 'fadeInOut'

const animations = document.querySelectorAll(`.${className}`);

console.log(animations);


let animationCounter = 0;

animations.forEach((animation) => {

    let anName = animation.classList[0];

    let tl = new gsap.timeline(
        {
        scrollTrigger: {
            trigger: `.${className}.${anName}`,
            end: `+=${animationScrollLength}`,
            markers: true,
            scrub: true,
            toggleActions: 'restart pause reverse pause',
            pin: true,
        }
    
    }
    
    );
    
    
    tl.from(`.${className}.${anName}`, {opacity: 0, y: 20, duration: 1})
    .to(`.${className}.${anName}`,{ duration: 4})
    .to(`.${className}.${anName}`, {opacity: 0, y: -20, duration:1});
    
    
});






    // animation.className = `animation-spacer ${animationCounter}`

    // animationCounter++;


// tl.from('.fadeIn', {opacity: 1, x: 2000, duration: 1})
// .to('.fadeIn',{ duration: 2})
// .to('.fadeIn', {opacity: 0, y: -20, duration:1});










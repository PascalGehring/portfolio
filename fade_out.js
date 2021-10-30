gsap.registerPlugin(ScrollTrigger);

const animationScrollLength = 1000;

const className = 'fadeOut'

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
    
    
    tl
    .to(`.${className}.${anName}`, {opacity: 0, y: -20, duration:2});
    
    
});

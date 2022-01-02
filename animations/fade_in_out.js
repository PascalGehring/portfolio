gsap.registerPlugin(ScrollTrigger);

var animationScrollLength = 1000;

var className = 'fadeInOut'

var animations = document.querySelectorAll(`.${className}`);

console.log(animations);

animations.forEach((animation) => {



    let anName = animation.classList[0];


    console.log(anName);

    let tl = new gsap.timeline(
        {
        scrollTrigger: {
            trigger: `.${className}.${anName}`,
            markers: true,
            scrub: true,
            toggleActions: 'restart pause reverse pause',
            pin: true,
            pinSpacing: false,
        }
    
    }
    
    );
    
    
    tl.from(`.${className}.${anName}`, {opacity: 0, y: 20, duration: 1})
    .to(`.${className}.${anName}`,{ duration: 4})
    .to(`.${className}.${anName}`, {opacity: 0, y: -20, duration:1});
    
    
});











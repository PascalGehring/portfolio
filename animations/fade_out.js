gsap.registerPlugin(ScrollTrigger);

var animationScrollLength = 333;

var className = 'fadeOut'

var animations = document.querySelectorAll(`.${className}`);

console.log(animations);


animations.forEach((animation) => {


    let anName = animation.classList[0];

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
    
    
    tl.to(`.${className}.${anName}`, {opacity: 0, y: -20, duration:1});
    
    
});

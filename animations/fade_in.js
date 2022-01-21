gsap.registerPlugin(ScrollTrigger);

var animationScrollLength = 333;

var className = 'fadeIn'

var animations = document.querySelectorAll(`.${className}`);



animations.forEach((animation) => {


    let anName = animation.classList[0];

    let tl = new gsap.timeline(
        {
        scrollTrigger: {
            trigger: `.${className}.${anName}`,
            scrub: true,
            toggleActions: 'restart pause reverse pause',
            pin: true,
            

        }
    
    }
    
    );
    
    
   // tl.set(".fadeIn" ,{zIndex: (i, target, targets) => -20});
    
    tl.from(animation, {opacity: 0, y: 20, duration: 1})
 
    
});

gsap.registerPlugin(ScrollTrigger);

var animationScrollLength = 1000;

var className = 'fadeInOut'

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
            pinSpacing: false,
            toggleClass: "active",
            markers: true
        }
    
    }
    
    );

    
    //tl.set(".fadeInOut" ,{zIndex: (i, target, targets) => targets.length - i});
    
    tl.from(animation, {opacity: 0, y: 20, duration: 1})
    .to(animation,{ duration: 2})
    .to(animation, {opacity: 0, y: -20, duration:1});
    
    
 

});








  








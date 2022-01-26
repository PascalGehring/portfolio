var animations  = document.querySelectorAll('.move-up-and-down')






animations.forEach((animation) => {

    var tl = gsap.timeline({});

    tl.to(animation, {
        y: 20,
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: Power2.easeOut,
    });



    

});
var animations  = document.querySelectorAll('.move-down-and-up')






animations.forEach((animation) => {

    var tl = gsap.timeline({});

    tl.from(animation, {
        y: 20,
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: Power2.easeOut,
    });



    

});
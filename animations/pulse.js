var animations  = document.querySelectorAll('.pulse')


console.log(animations);




animations.forEach((animation) => {

    var tl = gsap.timeline({yoyo: true,
        repeat: -1,});

    tl.from(animation, {
        opacity: 0,
        duration: 2,
        //ease: Power2.easeOut,
    });

    



    

});
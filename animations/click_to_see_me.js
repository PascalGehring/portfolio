var animations  = document.querySelectorAll('.click-to-see-me')






animations.forEach((animation) => {

    var tl = gsap.timeline({});


    tl.from(animation,{
        duration: 19
    });
    tl.from(animation, {
        opacity: 0,
        duration: 2,
        //ease: Power2.easeOut,
    });
    tl.to(animation, {
        opacity: 0
    });

   

    



    

});
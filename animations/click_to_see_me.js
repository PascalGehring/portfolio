let clickToSeeMe  = document.querySelector('.click-to-see-me')


    clickToSeeMe.style.display = 'block';



    var tl = gsap.timeline({repeat: -1,});


    tl.from(clickToSeeMe,{
        duration: 19
    });
    tl.from(clickToSeeMe, {
        opacity: 0,
        duration: 2,
        //ease: Power2.easeOut,
    });
    tl.to(clickToSeeMe, {
        opacity: 0
    });

   

    



    
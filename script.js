function init(){

    uss.hrefSetup(); 
    uss.setStepLengthCalculator(EASE_IN_OUT_QUART(1000)); 

  // const appHeight = () => {
  //   const doc = document.documentElement
  //   doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  // }
  // window.addEventListener('resize', appHeight)
  // appHeight()


  window.onload = function () {
    document.getElementsByClassName("active").onclick = function() {
      console.log("HelloMf");
    };
  };
    
}

init();
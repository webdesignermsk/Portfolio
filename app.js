

   function openNav() {
    document.getElementById("myNav").style.width = "40%";
   }
   
   
   function closeNav() {
     document.getElementById("myNav").style.width = "0%";
   }





  
   const body = document.querySelectorAll('body');





const wipe = document.querySelector('.wipe-transition');
const TLAnim = new TimelineMax();

function delay(n) {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n)
  })
}

barba.init({

  sync: true,
  
  transitions: [
    {
      async leave(){

        const done = this.async();


        TLAnim.to(wipe, {left: '0%', ease: "power2.out", duration: 0.4});
        
        await delay(500);
        done();

      },

      enter(){

        TLAnim
        .to(wipe, {left: '100%', ease:"power2.in", duration: 0.5})
        .set(wipe, {left: '-100%'})

      }

    }
  ]
})


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Scroll 



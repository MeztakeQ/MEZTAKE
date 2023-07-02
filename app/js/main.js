gsap.registerPlugin(ScrollTrigger);

const tlLoader = gsap.timeline()


tlLoader
  .set('.loader__item', {yPercent: -100})
  .set('.loader__title', {opacity: 0})
  .to('.loader__item', {
    yPercent: 0,
    duration: 0.5,
    stagger: 0.25
  })
  .to('.loader__item', {
    yPercent: 100,
    duration: 0.5,
    stagger: 0.25
  })
  .to('.loader__title', {
    opacity: 1,
    duration: 1,
    scale: 1.2,
  })
  .set('.loader__item', {
    yPercent: -100,
  })
  .to('.loader__title', {
    opacity: 0,
    duration: 1,
    scale: 0.8,
  })
  .to('.loader', {
   yPercent: -100,
   duration: 1,
  },
  '-=0.2',
  )


//Laptop Animations



  gsap.to('.home__content ', {
    scrollTrigger: {
      trigger: '.home',
      start: '-100 0',
      scrub: true,
    },
    yPercent: -100,
  })

  gsap.to('.home__picture-img ', {
    scrollTrigger: {
      trigger: '.home',
      start: '-100 0',
      scrub: true,
    },
    yPercent: 10,
  })

 //Section aboutme

 gsap.from('.aboutme__title-slagl ', {
  scrollTrigger: {
    trigger: '.aboutme',
    start: '-300 0',
  },
  x: 100,
  autoAlpha: 0,
  duration: 2,
})

gsap.from('.aboutme__title-slagr ', {
  scrollTrigger: {
    trigger: '.aboutme',
    start: '-500 0',
  },
  x: 300,
  autoAlpha: 0,
  duration: 3,
})

// Section banner
const tlBanner = gsap.timeline()

tlBanner
  .from('.banner', {
    scrollTrigger: {
      trigger: '.banner',
      start: '-200 0',
      scrub: true,
      pin: true,
    },
  })

.from('.banner__content-title', {
  scrollTrigger: {
    trigger: '.banner',
    start: '-200 0',
    scrub: true,
  },
  xPercent: -500,
})

.from('.banner__content-text', {
  scrollTrigger: {
    trigger: '.banner',
    start: '-200  0',
    scrub: true,
  },
  xPercent: 500,
})

//Section Project

gsap.from('.project__item', {
  scrollTrigger: {
    trigger: '.project',
    start: '-30% 0',
    end: '-300px',
  },
  scale: 0,
  stagger: 1,
  duration: 0.5,
})

//Section Blog

gsap.from('.blog__top-title', {
  scrollTrigger: {
    trigger: '.blog__inner ',
    start: '-500 0',
    end: '-100',
    
  },
  opacity: 0,
  autoAlpha: 0,
  duration: 3,
})

gsap.from('.blog__item', {
  scrollTrigger: {
    trigger: '.blog__inner ',
    start: '-300 0',
    end: '-100',
  },
  opacity: 0,
  stagger: 1,
  duration: 0.5,
  ease: 'bone'
})

// Section Contact

gsap.from('.contact__top-title', {
  scrollTrigger: {
    trigger: '.contact ',
    start: '-300 0',
    end: '-100',
    
  },
  opacity: 0,
  duration: 0.5,
  autoAlpha: 0,
  duration: 3,
})




const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll(".link");

window.addEventListener("mousemove", (e) => {
  
  let x = e.pageX;
  let y = e.pageY;
  
  cursor.forEach(el => {
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    
    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        el.classList.add("hover");
      })
      link.addEventListener("mouseleave", () => {
        el.classList.remove("hover");
      })
    })
    
  })
  
})  


function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


// const tl = gsap.timeline()

// tl.fromTo('.home__content-title', {
//   x: -100,
//   opacity: 0
// }, {
//   x: 0,
//   opacity: 1,
//   duration: 1
// }).fromTo('.home__content-slagl', {
//   y:50,
//   opacity: 0,
// }, {
//   y: 0,
//   opacity: 1,
//   duration: 2,
// }).fromTo('.home__content-slagr', {
//   y:50,
//   opacity: 0,
// }, {
//   y: 0,
//   opacity: 1,
//   duration: 3,
// }).fromTo('.header__logo', {
//   y:-150,
//   opacity: 0,
// }, {
//   y: 0,
//   opacity: 1,
//   duration: 3,
// },
// .2
// ).fromTo('.menu li', {
//   y:-150,
//   opacity: 0,
// }, {
//   y: 0,
//   opacity: 1,
//   duration: 1,
//   stagger: 0.15,
// },
// .3
// )











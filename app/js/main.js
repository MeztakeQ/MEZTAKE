
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


$(window).on('mousewheel DOMMouseScroll', function(e) {
  var dir,
      amt = 200;

  e.preventDefault();
  if(e.type === 'mousewheel') {
    dir = e.originalEvent.wheelDelta > 0 ? '-=' : '+=';
  }
  else {
    dir = e.originalEvent.detail < 0 ? '-=' : '+=';
  }      

  $('html, body').stop().animate({
    scrollTop: dir + amt
  },500, 'linear');
})

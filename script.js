document.querySelectorAll(".elem").forEach(function(elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function () {
    elem.querySelector("img").style.display = "none";

    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.4,
    });
    gsap.to(elem.querySelector("h1"), {
      opacity: 0.7,
      duration: 0.5,
      x: 0,
    });
  });

  elem.addEventListener("mouseover", function () {
    circleMouseFollower(30, 30);
    gsap.to(elem.querySelector("h1"), {
      opacity: 0.2,
      duration: 0.5,
      x: 50,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    elem.querySelector("img").style.display = "block";

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX - elem.getBoundingClientRect().left * 5,
      rotate: gsap.utils.clamp(-20, 20, diffrot),
    });
  });
});

// Link Animation
document.querySelectorAll('h4').forEach(function(a){
  a.addEventListener("mouseover", function (e) {
    gsap.to(a.querySelector('svg'), {
      rotate:45,
    })
    gsap.to(a.querySelector('.underline'), {
      xPercent: 100,
      duration: .5
    })
  })

  a.addEventListener("mouseleave", function (e) {
    gsap.to(a.querySelector('svg'), {
      rotate:10
    })
    gsap.to(a.querySelector('.underline'), {
      xPercent: -100,
      duration: .7
    })
  })

})

// gsap Animations
function gsapAnimations() {
  var tl = gsap.timeline();

  tl.from(".nav a", {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.6,
  })
    .to(".top .hiding-element h1", {
      delay: -1,
      y: -1,
      stagger: 0.2,
      duration: 2,
      ease: Expo.easeInOut,
    })
    .to(".top .hiding-element h4", {
      delay: -1,
      y: 1,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
    .from(".hero .bottom a, .hero .bottom h4, .hero .bottom span", {
      delay: -0.5,
      opacity: 0,
      y: -20,
      duration: 1,
    })
    .from(".second", {
      y: 100,
      opacity:0,
      delay:.5,
      scrollTrigger: {
        trigger: ".second",
        scroller: "#main",
        start: "top 90%",
      },
    });
}

gsapAnimations();

// Clock Time
function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; 
  const hoursStr = String(hours).padStart(2, '0');

  const currentTime = `${hoursStr}:${minutes} ${ampm}`;
  
  document.querySelector('#time').innerHTML = currentTime + " IST";
}

updateTime();
setInterval(updateTime, 10000);
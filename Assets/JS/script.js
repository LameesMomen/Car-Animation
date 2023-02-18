const buy = document.querySelector(".buy");

let t1 = gsap.timeline({ paused: true, reversed: true });
let t2 = gsap.timeline({ paused: true, reversed: true });

buy.addEventListener("click", (e) => {
  t2.play();
    setTimeout(() => {
        location.replace("./detail.html");
    }, 450);
});




t1.play();

t1.to(".car-1", {
  ease: "elastic.out(1, .4)",
  top: 0,
  rotate: 0,
  duration: 3,
});

t1.to(
  ".menu",
  {
    ease: "elastic.out(1, .4)",
    left: 0,
    duration: 1.5
  },
  0.2
);

t1.to(
  ".profile",
  {
    ease: "elastic.out(1, .8)",
    right: 0,
    duration: 1.5
  },
  0.2
);

t1.to(
  ".container h1",
  {
    ease: "elastic.out(1, .4)",
    bottom: 0,
    duration: 1.5
  },
  0.3
);

t1.to(
  ".container p",
  {
    ease: "elastic.out(1, .4)",
    bottom: 0,
    duration: 1.5
  },
  0.4
);




t1.from(
  ".buy",
  {
    ease: "elastic.out(1, .8)",
    scale: 0,
    duration: 1.5
  },
  0.6
);

t2.to(".car-1", {
  ease: "elastic.out(1, .8)",
  top: "-90%",
  duration: 2,
});


t2.to(
  ".menu",
  {
    ease: "power1.inOut",
    left: -80,
  },
  0
);







t2.to(
  ".profile",
  {
    ease: "power1.inOut",
    right: -80,
  },
  0
);

t2.to(
  ".container h1",
  {
    ease: "elastic.out(.5, .8)",
    bottom: "-10%",
  },
  0
);

t2.to(
  ".container p",
  {
    ease: "elastic.out(.5, .8)",
    bottom: "-10%",
  },
  0
);





t2.to(
  ".buy i",
  {
    ease: "power1.inOut",
    scale: 0,
    duration: 0.3,
  },
  0
);

t2.to(
  ".buy",
  {
    ease: "power1.inOut",
    scaleY: 16,
    width: 378,
    duration: 0.3,
  },
  0.3
);



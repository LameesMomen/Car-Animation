
const back = document.querySelector(".back-button");

let t1 = gsap.timeline({ paused: true, reversed: true });
let t2 = gsap.timeline({ paused: true, reversed: true });


back.addEventListener("click", (e) => {
    t2.play();
      setTimeout(() => {
          location.replace("./index.html");
      }, 800);
  });


t1.play();

t1.to(
    ".car-final",
    {
      ease: "elastic.out(1, .4)",
      left: 0,
      duration: 1.5,
    },
    0.2
  );

  t1.to(
    ".container h2",
    {
      ease: "elastic.out(1, .8)",
      left: 0,
      duration: 1.5,
    },
    0.2
  );
  
  t1.to(
    ".summary",
    {
      ease: "elastic.out(1, .8)",
      left: 0,
      duration: 1.5,
    },
    0.2
  );
  
  
  
  
  t1.to(
    ".summary-2",
    {
      ease: "elastic.out(1, .8)",
      left: 0,
      duration: 1.5,
    },
    0.2
  );


t1.to(
    ".back-button",
    {
      ease: "elastic.out(1, .8)",
      bottom: 0,
      duration: 1.5,
    },
    0.2
  );
  
  // First Transition Over
  t2.to(
    ".car-final",
    {
      ease: "elastic.out(1, .4)",
      left: "50%",
      duration: 1.5,
    },
    0.2
  );
  
  t2.to(
    ".container h2",
    {
      ease: "elastic.out(1, .8)",
      left: "60%",
      duration: 1.5,
    },
    0.5
  );
  
  t2.to(
    ".summary",
    {
      ease: "elastic.out(1, .8)",
      left: "52%",
      duration: 1.5,
    },
    0.6
  );
  
  
  
  
  t2.to(
    ".summary-2",
    {
      ease: "elastic.out(1, .8)",
      left: "52%",
      duration: 1.5,
    },
    0.7
  );
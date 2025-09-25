// Animate cards with a stagger effect
gsap.to(".card", {
  duration: 1,
  y: 0,
  opacity: 1,
  ease: "power3.out",
  stagger: 0.3,
});

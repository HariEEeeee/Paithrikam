// CUSTOM CURSOR
const cursor = document.querySelector('.cursor');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

const speed = 0.08;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;

  cursor.style.left = currentX + 'px';
  cursor.style.top = currentY + 'px';

  requestAnimationFrame(animateCursor);
}
animateCursor();


//BLOBIES
gsap.to(".b1", {
  x: 100,
  y: 80,
  duration: 5, // reduced from 8
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".b2", {
  x: -120,
  y: -60,
  duration: 6, // reduced from 10
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".b3", {
  x: 80,
  y: -100,
  duration: 7, // reduced from 12
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// TYPING EFFECT
const words = ["Film Director", "Editor", "Designer","Script Writer","Cinematographer","Actor","Lyricist"];
const typingElement = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) charIndex--;
  else charIndex++;

  typingElement.textContent = currentWord.substring(0, charIndex);

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1200;
    isDeleting = true;
  } 
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}
typeEffect();


// GSAP PARALLAX
// GSAP PARALLAX (FINAL CLEAN VERSION)
gsap.registerPlugin(ScrollTrigger);

const posters = document.querySelectorAll(".poster");

posters.forEach((poster, i) => {
  let isLeft = i % 2 === 0; // alternate left/right

  gsap.to(poster, {
    y: isLeft ? -180 : 180,   // balanced movement
    scale: 1.05,              // subtle zoom for depth
    ease: "none",
    scrollTrigger: {
      trigger: "#posters",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5              // SMOOTHNESS (important)
    }
  });
});


// TEXT FADE-IN ANIMATION
// SAFE TEXT ANIMATION (no conflict)
gsap.utils.toArray(".film-text").forEach((text) => {
  gsap.from(text, {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: text,   // 🔥 IMPORTANT CHANGE
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
});

const btn = document.getElementById("viewWorks");

btn.addEventListener("click", () => {

  // smooth scroll to posters
  document.querySelector("#posters").scrollIntoView({
    behavior: "smooth"
  });

  // animate timeline line
  gsap.to(".timeline-line", {
    scaleY: 1,
    duration: 1.2,
    ease: "power2.out",
    delay: 0.3
  });

  // animate dots
  gsap.from(".dot", {
    scale: 0,
    stagger: 0.15,
    duration: 0.5,
    ease: "back.out(2)",
    delay: 0.8
  });
});
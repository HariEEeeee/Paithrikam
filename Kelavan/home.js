const cursor = document.querySelector('.cursor');

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

const speed = 0.08; // smaller = smoother (try 0.05 - 0.15)

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;

  cursor.style.left = currentX + 'px';
  cursor.style.top = currentY + 'px';

  requestAnimationFrame(animate);
}

animate();

//type-ing animation
const words = ["Film Director", "Editor", "Designer","Script Writer","Cinematographer"];
const typingElement = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingElement.textContent = currentWord.substring(0, charIndex);
 
  let speed = isDeleting ? 70 : 100
  // When word is fully typed
  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1200; // pause before deleting
    isDeleting = true;
  }

  // When word is fully deleted
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 300; // pause before typing next
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
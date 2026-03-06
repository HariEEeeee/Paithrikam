const cs = document.getElementById("csLogo");
const fr = document.getElementById("frLogo");
const music = document.getElementById("bgMusic"); // Reference to your audio

// Start with CS fade-in
window.onload = () => {
  cs.classList.add("fade-in");
};

// On click → Fade out CS → Fade in F&R + start music
document.body.addEventListener("click", () => {
  // Play music
  music.play().catch(err => {
    console.log("Autoplay blocked, waiting for user interaction.");
  });

  // Animate logos
  cs.classList.remove("fade-in");
  cs.classList.add("fade-out");

  setTimeout(() => {
    fr.classList.add("fade-in");
  }, 1800); // Slower timing for elegance
}, { once: true }); // Ensures this runs only on the first click

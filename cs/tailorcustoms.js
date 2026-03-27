const tailorIntro = document.getElementById("tailorIntro");
const introOverlay = document.getElementById("introOverlay");
const music = document.getElementById("bgMusic");
const exploreLink = document.getElementById("exploreLink");

// Intro timing
window.addEventListener("load", () => {
  // white pause
  setTimeout(() => {
    introOverlay.classList.add("fade-out");
  }, 1200);

  // text appears
  setTimeout(() => {
    tailorIntro.classList.add("show");
  }, 2000);
});

// Click interaction
exploreLink.addEventListener("click", (e) => {
  e.preventDefault();

  // FORCE play with promise handling
  music.currentTime = 0;

  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        console.log("Music started");
      })
      .catch((error) => {
        console.log("Playback blocked:", error);
      });
  }

  // fade out intro
  tailorIntro.classList.remove("show");
  tailorIntro.classList.add("hide");

  setTimeout(() => {
    window.location.href = "tailoritforme.html";
  }, 1800);
});
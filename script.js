const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
let confetti = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function launchConfetti() {
  confetti = [];
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 150,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    });
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.y += Math.random() * 3 + 2;
  });
  requestAnimationFrame(animateConfetti);
}

function selectArtist(artist) {
  document.getElementById("cards").style.display = "none";
  const result = document.getElementById("result");
  document.getElementById("chosenText").innerText = `You chose ${artist}`;
  result.classList.remove("hidden");
  launchConfetti();
}

function resetChoice() {
  document.getElementById("cards").style.display = "grid";
  document.getElementById("result").classList.add("hidden");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

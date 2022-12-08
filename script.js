// Set up the canvas
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Set up the bird
const bird = {
  x: 20,
  y: 20,
  radius: 5,
  gravity: 0.6,
  lift: -8,
  velocity: 0,
};

document.getElementById("gravity").innerHTML = bird.gravity;

function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the bird
  ctx.beginPath();
  ctx.arc(bird.x, bird.y, bird.radius, 0, Math.PI * 2);
  ctx.fillStyle = "purple";
  ctx.fill();

  // Move the bird based on its velocity
  bird.velocity += bird.gravity;
  bird.y += bird.velocity;

  if (bird.y > canvas.height - bird.radius) {
    bird.y = canvas.height - bird.radius;
  }

  if (bird.y < bird.radius) {
    bird.y = bird.radius;
  }

  // Request the next animation frame
  requestAnimationFrame(draw);
}

// Start the game
draw();

// Listen for spacebar press to make the bird flap
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    bird.velocity += bird.lift;
    document.getElementById("velocity").innerHTML = Math.round(bird.velocity);
    document.getElementById("position").innerHTML = Math.round(bird.y);
  }
});

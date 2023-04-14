// Define the dimensions of the clock container
const containerWidth = 960; // 12 x 80px clock elements
const containerHeight = 1920; // 24 x 80px clock elements

// Create a canvas element to draw the clock on
const canvas = document.createElement("canvas");
canvas.width = containerWidth;
canvas.height = containerHeight;
document.body.appendChild(canvas);

// Get the drawing context for the canvas
const ctx = canvas.getContext("2d");

// Define the number of rows and columns of clock elements
const numRows = 24;
const numCols = 12;

// Define the dimensions of each clock element
const clockWidth = 80;
const clockHeight = 80;

// Define the padding between clock elements
const padding = 10;

// Define the dimensions of the entire grid of clock elements
const gridWidth = numCols * (clockWidth + padding);
const gridHeight = numRows * (clockHeight + padding);

// Define the position of the top-left corner of the clock grid
const gridX = (containerWidth - gridWidth) / 2;
const gridY = (containerHeight - gridHeight) / 2;

// Define a function to draw a clock element
function drawClock(x, y, hour, minute) {
  // Save the current canvas state
  ctx.save();

  // Translate the canvas to the center of the clock element
  ctx.translate(x + clockWidth / 2, y + clockHeight / 2);

  // Rotate the canvas to the current time
  const hourAngle = (hour % 12) / 12 * 360;
  const minuteAngle = minute / 60 * 360;
  ctx.rotate(-hourAngle * Math.PI / 180);
  ctx.rotate(-minuteAngle * Math.PI / 180);

  // Draw the clock hands
  ctx.beginPath();
  ctx.moveTo(-5, -clockHeight / 2 + 5);
  ctx.lineTo(5, -clockHeight / 2 + 5);
  ctx.lineTo(0, -clockHeight / 2 + 5 - 20);
  ctx.closePath();
  ctx.fillStyle = "black";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(-2, clockHeight / 2 - 5);
  ctx.lineTo(2, clockHeight / 2 - 5);
  ctx.lineTo(0, clockHeight / 2 - 5 + 20);
  ctx.closePath();
  ctx.fillStyle = "black";
  ctx.fill();

  // Restore the canvas state
  ctx.restore();
}

// Define a function to draw the entire clock grid
function drawClockGrid() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Get the current time
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Draw each clock element
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      // Calculate the position of the current clock element
      const x = gridX + col * (clockWidth + padding);
      const y = gridY + row * (clockHeight + padding);

      // Draw the clock element
      drawClock(x, y, hours, minutes);
    }
}
// Schedule the next frame
requestAnimationFrame(drawClockGrid);
}

// Start the clock
requestAnimationFrame(drawClockGrid);
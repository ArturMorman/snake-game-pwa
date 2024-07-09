
let width = 320
let height = 440
if (typeof window !== 'undefined') {
  if (window) {
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    width = window.innerWidth - 16
    height = window.innerHeight - 16
  }
}
if (width > 800) {
  width = 800
}
if (height > 800) {
  height = 800
}

const CANVAS_SIZE = [width, height];

const SNAKE_START = [
  [8, 32],
  [8, 33]
];
const APPLE_START = [8, 13];
const SCALE = 12;
const SPEED = 80;
const SPEED_GAIN = 2;
const SPEED_TRESHOLD = 30;
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0] // right
};

export {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  SPEED_GAIN,
  SPEED_TRESHOLD,
  DIRECTIONS
};

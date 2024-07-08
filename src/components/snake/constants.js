
let width = 320
let height = 440
if(typeof window !== 'undefined') {
  if ( window ) {
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    width = window.innerWidth - 10
    height = window.innerHeight - 10
  }
}
if (width > 1194) {
  width = 1194
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
const SPEED = 120;
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
  DIRECTIONS
};

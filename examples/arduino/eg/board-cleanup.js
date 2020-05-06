const { Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const led = new Led(13);
  led.on();


  board.on("exit", () => {
    led.off();
  });
});

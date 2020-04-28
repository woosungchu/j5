// Import the interface to Tessel hardware
var Tessel = require("tessel-io");
var five = require("johnny-five");

var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  var led = new five.Led("a5"); // start port
  led.blink(500); // the LED to blink every 500 milliseconds (half a second)
});

var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
          io: new Raspi()
});

board.on("ready", function() {
          var led = new five.Led("7");
          led.blink(1000);
});

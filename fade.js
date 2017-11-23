var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
          io: new Raspi()
});

board.on("ready", function() {

  var led = new five.Led(11);

  led.fadeIn();

  this.wait(5000, function() {
    led.fadeOut();
  });
});

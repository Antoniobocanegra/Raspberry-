var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
          io: new Raspi()
});

board.on("ready", function() {
  var servo = new five.Servo(10);
  
  this.repl.inject({
    servo: servo
  });
  
servo.sweep();
});

var five = require("johnny-five");
var keypress = require("keypress");
var Raspi = require("raspi-io");

keypress(process.stdin);

var board = new five.Board({
        io: new Raspi()
});

board.on("ready", function(){
        var led = new five.Led("7");
  
  process.stdin.on("keypress", function(ch, key) {
    if (!key) {
      return;
        }
    if (key.name === "i") {
      led.on();
    }
    else if (key.name === "o"){
      led.off();
    }
});
});

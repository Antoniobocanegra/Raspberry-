var five = require("johnny-five");
var keypress = require("keypress");
var Raspi = require("raspi-io");

keypress(process.stdin);

var board = new five.Board({
        io: new Raspi()
});

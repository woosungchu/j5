var os = require('os');
var execSync = require('child_process').execSync;
var regedit = require('regedit');

console.log('note: make sure t2 is in dfu-util mode (hold down the reset button while plugging in)')
console.log('');

console.log(execSync('dfu-util-static.exe -a0 -d 1209:7551 -D firmware-winusb.bin').toString())

console.log('');
console.log('firmware flashing complete.')

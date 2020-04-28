var os = require('os');
var execSync = require('child_process').execSync;
var regedit = require('regedit');

function cleanRegistry (next) {
  var regprefix = 'HKLM\\SYSTEM\\CurrentControlSet\\Control\\usbflags';
  regedit.list(regprefix, function(err, result) {
      if (err) { console.error(err); return; }

      var out = result[regprefix].keys.filter(function (str) {
        return str.match(/^12097551/);
      }).map(function (str) {
        return regprefix + '\\' + str;
      }).map(function (str) {
        console.error(' -', str);
        return str;
      });
      regedit.deleteKey(out, function (err, result) {
        if (err) { console.error(err); return; }

        console.log('t2 registry keys succesfully deleted.');
        next && next();
      });
  })
}

function removeDrivers (next) {
  // http://jesusnjim.com/programming/cmd-bat/cmd-shell-programming-workarounds.html#proc-arch
  var devcon;
  var archSwitch = process.env.PROCESSOR_ARCHITECTURE || process.arch;
  switch (archSwitch.toLowerCase()) {
    case 'arm':
      devcon = 'devcon-arm.exe';
      break;
    case 'arm64':
      devcon = 'devcon-arm64.exe';
      break;
    case 'x86':
    case 'ia32':
      devcon = 'devcon-x86.exe';
      break;
    case 'x64':
    case 'amd64':
    case 'ia64':
      devcon = 'devcon-x64.exe';
      break;
    default:
      console.error('fatal error: unknown Windows architecture:', archSwitch)
      process.exit(1);
  }

  var drivers = execSync(devcon + ' findall "usb\\VID_1209&PID_7551*"').toString()

  var list = drivers.split(/\r?\n/).sort().filter(function (a) {
    return a.match(/^USB/i)
  }).map(function (a) {
    return a.replace(/\s+.*$/, '');
  })

  list.forEach(function (u) {
    var command = devcon + ' remove "@' + u + '"'
    console.log(command);
    console.log(execSync(command).toString());
  })

  console.log('t2 drivers have been uninstalled.');
  next && next();
}

removeDrivers(function () {
  // console.log('');
  // cleanRegistry(function () {
    console.log('');
    console.log('done. you can now run node driver-install.js with t2 in dfu mode.')
    console.log('(hold the reset button while plugging in t2 to enter this mode)')
  // })
})

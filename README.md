#### Johnny-five

#### Arduino

1. download build tools
```
$ npm --add-python-to-path install --global --production windows-build-tools
$ npm install -g node-gyp
```
2. setup arduino hardware & download plugin with online IDE
 - Open [Arduino IDE](https://www.arduino.cc/en/main/software)
 - Verify correct port and board
 - Navigate to File > Examples > Firmata > StandardFirmataPlus
 - Upload sketch onto board.

###### Reference
 - [Johnny-five Getting-Started](https://github.com/rwaldron/johnny-five/wiki/Getting-Started)
 - [Arduino IDE](https://www.arduino.cc/en/main/software)


#### Tessel 2

```
// to install
$ npm install -g t2-cli
$ t2 list
INFO Searching for nearby Tessels...
  USB Frank(name)

// connection
$ t2 wifi -n "<network name>" -p "<password>"
$ t2 provision // security

// run basic example
$ t2 init
$ t2 run index.js

// run with package
$ t2 init
$ t2 install tessel-io johnny-five
$ t2 run led.js

// to untether
$ t2 push index.js
$ t2 erase

// other option only available on OS x or bash
$ t2 update
$ t2 restore

```

#### Reference
- [Experiment Guide](https://learn.sparkfun.com/tutorials/experiment-guide-for-the-johnny-five-inventors-kit?_ga=2.214761375.967955785.1587953474-777856882.1587366114)
- [http://tessel.io/start](http://tessel.github.io/t2-start/)
- [window fix](https://gist.github.com/tcr/992978a5dbe5bff2e18f495c5c0973c3#file-t2-windows-fix-zip)

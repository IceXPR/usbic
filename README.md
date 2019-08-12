# usbic

## USB Image Cloner

A tool to clone an image to multiple usb devices.  This is useful to clone a Raspberry to multiple USB devices.

## Requirements

- Node JS
- Linux (tested on Ubuntu 18)

## Usage

node usbic.js source-image target-disk1 target-disk2 target-diskX

## Example using NPM

``` sh
sudo npm i -g usbic
sudo usbic 2019-07-10-raspbian-buster-lite.img /dev/sdb /dev/sdc
```

## Example using GitHub clone

``` bash
node usbic.js 2019-07-10-raspbian-buster-lite.img /dev/sdb /dev/sdc
```

## Developers

To create a single binary installer use nexe

``` sh
sudo npm i -g nexe
cat usbic.js | nexe
```

## Notes

Depending on your system permissions you may need 'sudo' to write to the USB devices.

#!/bin/sh

function enableProxy {
  networksetup -setproxybypassdomains 'Wi-Fi' 'proxy-mirror'
  networksetup -setwebproxy 'Wi-Fi' localhost 8008 off
  networksetup -setwebproxystate 'Wi-Fi' on
  networksetup -setsecurewebproxy 'Wi-Fi' localhost 8008 off
  networksetup -setsecurewebproxystate 'Wi-Fi' on
  echo "Enabled proxy"
}

function disableProxy {
  networksetup -setwebproxystate 'Wi-Fi' off
  networksetup -setsecurewebproxystate 'Wi-Fi' off
  echo "Disabled proxy"
}


case "$1" in
"-enable")
    enableProxy
    ;;
"-disable")
    disableProxy
    ;;
*)
    echo "Usage: ./setup-proxy -enable or -disable"
    exit 1
    ;;
esac

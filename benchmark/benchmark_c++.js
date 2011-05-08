#!/usr/bin/env node

var binding = require('../build/default/city.node');
var util = require('util');
var City = binding.City;
var c = new City('/tmp/GeoLiteCity.dat', true);

var ip32 = function() {
  var ip = '';
  for (var i = 0; i < 4; ++i) {
    ip += Math.floor(Math.random() * 256);
    if (i <= 2) {
      ip += '.';
    }
  }
  return ip;
}

var start = new Date().getTime();
for (var i = 0; i < 10000; ++i) {
  var addr = '0.0.0.0';
  //console.log(addr);
  var l = c.lookupSync(addr);
  //console.log(l);
}
var end = new Date().getTime();

util.puts((end - start) / 1000);
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.square = square;
exports.diag = diag;
var sqrt = exports.sqrt = Math.sqrt;
function square(x) {
    return x * x;
}
function diag(x, y) {
    return sqrt(square(x) + square(y));
}

},{}],2:[function(require,module,exports){
'use strict';

var _testing = require('../../lib/testing');

console.log((0, _testing.square)(11)); // 121
console.log((0, _testing.diag)(4, 3)); // 5

},{"../../lib/testing":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9saWIvdGVzdGluZy5qcyIsImpzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztRQ0NnQixNLEdBQUEsTTtRQUdBLEksR0FBQSxJO0FBSlQsSUFBTSxzQkFBTyxLQUFLLElBQWxCO0FBQ0EsU0FBUyxNQUFULENBQWdCLENBQWhCLEVBQW1CO0FBQ3RCLFdBQU8sSUFBSSxDQUFYO0FBQ0g7QUFDTSxTQUFTLElBQVQsQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CO0FBQ3ZCLFdBQU8sS0FBSyxPQUFPLENBQVAsSUFBWSxPQUFPLENBQVAsQ0FBakIsQ0FBUDtBQUNIOzs7OztBQ05EOztBQUNBLFFBQVEsR0FBUixDQUFZLHFCQUFPLEVBQVAsQ0FBWixFLENBQXlCO0FBQ3pCLFFBQVEsR0FBUixDQUFZLG1CQUFLLENBQUwsRUFBUSxDQUFSLENBQVosRSxDQUF5QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgY29uc3Qgc3FydCA9IE1hdGguc3FydDtcbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmUoeCkge1xuICAgIHJldHVybiB4ICogeDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkaWFnKHgsIHkpIHtcbiAgICByZXR1cm4gc3FydChzcXVhcmUoeCkgKyBzcXVhcmUoeSkpO1xufSAiLCJpbXBvcnQgeyBzcXVhcmUsIGRpYWcgfSBmcm9tICcuLi8uLi9saWIvdGVzdGluZyc7XG5jb25zb2xlLmxvZyhzcXVhcmUoMTEpKTsgLy8gMTIxXG5jb25zb2xlLmxvZyhkaWFnKDQsIDMpKTsgLy8gNSJdfQ==

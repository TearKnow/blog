require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ulList = 0;
var li_height = $('#product-li').height();
var max = $('#recommended').height() / li_height;

$(window).resize(function () {
    max = $('#recommended').height() / li_height;
    $('#recommended').css('top', 0);
});

$('.arrow-left').on('click', function () {
    ulList = (ulList - 1 + max) % max;
    $('#recommended').css('top', -1 * ulList * li_height);
});

$('.arrow-right').on('click', function () {
    ulList = (ulList + 1 + max) % max;
    $('#recommended').css('top', -1 * ulList * li_height);
})

},{}],"product_not_available":[function(require,module,exports){
// require('./common')
require('../pages/product_not_available.js');
},{"../pages/product_not_available.js":1}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL3BhZ2VzL3Byb2R1Y3Rfbm90X2F2YWlsYWJsZS5qcyIsIi4vZ2FlYS9qcy9lbnRyeV9qcy9wcm9kdWN0X25vdF9hdmFpbGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgdWxMaXN0ID0gMDtcclxudmFyIGxpX2hlaWdodCA9ICQoJyNwcm9kdWN0LWxpJykuaGVpZ2h0KCk7XHJcbnZhciBtYXggPSAkKCcjcmVjb21tZW5kZWQnKS5oZWlnaHQoKSAvIGxpX2hlaWdodDtcclxuXHJcbiQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgbWF4ID0gJCgnI3JlY29tbWVuZGVkJykuaGVpZ2h0KCkgLyBsaV9oZWlnaHQ7XHJcbiAgICAkKCcjcmVjb21tZW5kZWQnKS5jc3MoJ3RvcCcsIDApO1xyXG59KTtcclxuXHJcbiQoJy5hcnJvdy1sZWZ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdWxMaXN0ID0gKHVsTGlzdCAtIDEgKyBtYXgpICUgbWF4O1xyXG4gICAgJCgnI3JlY29tbWVuZGVkJykuY3NzKCd0b3AnLCAtMSAqIHVsTGlzdCAqIGxpX2hlaWdodCk7XHJcbn0pO1xyXG5cclxuJCgnLmFycm93LXJpZ2h0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdWxMaXN0ID0gKHVsTGlzdCArIDEgKyBtYXgpICUgbWF4O1xyXG4gICAgJCgnI3JlY29tbWVuZGVkJykuY3NzKCd0b3AnLCAtMSAqIHVsTGlzdCAqIGxpX2hlaWdodCk7XHJcbn0pXHJcbiIsIi8vIHJlcXVpcmUoJy4vY29tbW9uJylcclxucmVxdWlyZSgnLi4vcGFnZXMvcHJvZHVjdF9ub3RfYXZhaWxhYmxlLmpzJyk7Il19

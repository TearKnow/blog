require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$('#fashion_blogger_pic_size_01').click(function(){
    $('#promotion_icon_size_1').show().siblings().hide();
    $('#fashion_blogger_pic_size_01').addClass('on').siblings().removeClass('on');
});

$('#fashion_blogger_pic_size_02').click(function(){
    $('#promotion_icon_size_2').show().siblings().hide();
    $('#fashion_blogger_pic_size_02').addClass('on').siblings().removeClass('on');
});

$('#fashion_blogger_pic_size_03').click(function(){
    $('#promotion_icon_size_3').show().siblings().hide();
    $('#fashion_blogger_pic_size_03').addClass('on').siblings().removeClass('on');
});

$('#fashion_blogger_pic_size_04').click(function(){
    $('#promotion_icon_size_4').show().siblings().hide();
    $('#fashion_blogger_pic_size_04').addClass('on').siblings().removeClass('on');
});

$('#fashion_blogger_step_1').click(function () {
    location.href = "fashionBlogger.php?act=blogger_policy"
})

$('#fashion_blogger_step_2').click(function () {
    location.href = "fashionBlogger.php?act=promotion_icon"
})

$('#fashion_blogger_step_3').click(function () {
    location.href = "fashionBlogger.php?act=contact_us"
})
},{}],"fashion_blog_promotion_icon":[function(require,module,exports){
// require('./common')
require('../goods/fashion_blog_promotion_icon.js');
},{"../goods/fashion_blog_promotion_icon.js":1}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL2dvb2RzL2Zhc2hpb25fYmxvZ19wcm9tb3Rpb25faWNvbi5qcyIsIi4vZ2FlYS9qcy9lbnRyeV9qcy9mYXNoaW9uX2Jsb2dfcHJvbW90aW9uX2ljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKCcjZmFzaGlvbl9ibG9nZ2VyX3BpY19zaXplXzAxJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICQoJyNwcm9tb3Rpb25faWNvbl9zaXplXzEnKS5zaG93KCkuc2libGluZ3MoKS5oaWRlKCk7XHJcbiAgICAkKCcjZmFzaGlvbl9ibG9nZ2VyX3BpY19zaXplXzAxJykuYWRkQ2xhc3MoJ29uJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnb24nKTtcclxufSk7XHJcblxyXG4kKCcjZmFzaGlvbl9ibG9nZ2VyX3BpY19zaXplXzAyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICQoJyNwcm9tb3Rpb25faWNvbl9zaXplXzInKS5zaG93KCkuc2libGluZ3MoKS5oaWRlKCk7XHJcbiAgICAkKCcjZmFzaGlvbl9ibG9nZ2VyX3BpY19zaXplXzAyJykuYWRkQ2xhc3MoJ29uJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnb24nKTtcclxufSk7XHJcblxyXG4kKCcjZmFzaGlvbl9ibG9nZ2VyX3BpY19zaXplXzAzJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICQoJyNwcm9tb3Rpb25faWNvbl9zaXplXzMnKS5zaG93KCkuc2libGluZ3MoKS5oaWRlKCk7XHJcbiAgICAkKCcjZmFzaGlvbl9ibG9nZ2VyX3BpY19zaXplXzAzJykuYWRkQ2xhc3MoJ29uJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnb24nKTtcclxufSk7XHJcblxyXG4kKCcjZmFzaGlvbl9ibG9nZ2VyX3BpY19zaXplXzA0JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICQoJyNwcm9tb3Rpb25faWNvbl9zaXplXzQnKS5zaG93KCkuc2libGluZ3MoKS5oaWRlKCk7XHJcbiAgICAkKCcjZmFzaGlvbl9ibG9nZ2VyX3BpY19zaXplXzA0JykuYWRkQ2xhc3MoJ29uJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnb24nKTtcclxufSk7XHJcblxyXG4kKCcjZmFzaGlvbl9ibG9nZ2VyX3N0ZXBfMScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGxvY2F0aW9uLmhyZWYgPSBcImZhc2hpb25CbG9nZ2VyLnBocD9hY3Q9YmxvZ2dlcl9wb2xpY3lcIlxyXG59KVxyXG5cclxuJCgnI2Zhc2hpb25fYmxvZ2dlcl9zdGVwXzInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBsb2NhdGlvbi5ocmVmID0gXCJmYXNoaW9uQmxvZ2dlci5waHA/YWN0PXByb21vdGlvbl9pY29uXCJcclxufSlcclxuXHJcbiQoJyNmYXNoaW9uX2Jsb2dnZXJfc3RlcF8zJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgbG9jYXRpb24uaHJlZiA9IFwiZmFzaGlvbkJsb2dnZXIucGhwP2FjdD1jb250YWN0X3VzXCJcclxufSkiLCIvLyByZXF1aXJlKCcuL2NvbW1vbicpXHJcbnJlcXVpcmUoJy4uL2dvb2RzL2Zhc2hpb25fYmxvZ19wcm9tb3Rpb25faWNvbi5qcycpOyJdfQ==

require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//define(function (require, exports, module) {
var md5cycle = function(x, k) {
var a = x[0], b = x[1], c = x[2], d = x[3];
a = ff(a, b, c, d, k[0], 7, -680876936);
d = ff(d, a, b, c, k[1], 12, -389564586);
c = ff(c, d, a, b, k[2], 17,  606105819);
b = ff(b, c, d, a, k[3], 22, -1044525330);
a = ff(a, b, c, d, k[4], 7, -176418897);
d = ff(d, a, b, c, k[5], 12,  1200080426);
c = ff(c, d, a, b, k[6], 17, -1473231341);
b = ff(b, c, d, a, k[7], 22, -45705983);
a = ff(a, b, c, d, k[8], 7,  1770035416);
d = ff(d, a, b, c, k[9], 12, -1958414417);
c = ff(c, d, a, b, k[10], 17, -42063);
b = ff(b, c, d, a, k[11], 22, -1990404162);
a = ff(a, b, c, d, k[12], 7,  1804603682);
d = ff(d, a, b, c, k[13], 12, -40341101);
c = ff(c, d, a, b, k[14], 17, -1502002290);
b = ff(b, c, d, a, k[15], 22,  1236535329);
 
a = gg(a, b, c, d, k[1], 5, -165796510);
d = gg(d, a, b, c, k[6], 9, -1069501632);
c = gg(c, d, a, b, k[11], 14,  643717713);
b = gg(b, c, d, a, k[0], 20, -373897302);
a = gg(a, b, c, d, k[5], 5, -701558691);
d = gg(d, a, b, c, k[10], 9,  38016083);
c = gg(c, d, a, b, k[15], 14, -660478335);
b = gg(b, c, d, a, k[4], 20, -405537848);
a = gg(a, b, c, d, k[9], 5,  568446438);
d = gg(d, a, b, c, k[14], 9, -1019803690);
c = gg(c, d, a, b, k[3], 14, -187363961);
b = gg(b, c, d, a, k[8], 20,  1163531501);
a = gg(a, b, c, d, k[13], 5, -1444681467);
d = gg(d, a, b, c, k[2], 9, -51403784);
c = gg(c, d, a, b, k[7], 14,  1735328473);
b = gg(b, c, d, a, k[12], 20, -1926607734);
 
a = hh(a, b, c, d, k[5], 4, -378558);
d = hh(d, a, b, c, k[8], 11, -2022574463);
c = hh(c, d, a, b, k[11], 16,  1839030562);
b = hh(b, c, d, a, k[14], 23, -35309556);
a = hh(a, b, c, d, k[1], 4, -1530992060);
d = hh(d, a, b, c, k[4], 11,  1272893353);
c = hh(c, d, a, b, k[7], 16, -155497632);
b = hh(b, c, d, a, k[10], 23, -1094730640);
a = hh(a, b, c, d, k[13], 4,  681279174);
d = hh(d, a, b, c, k[0], 11, -358537222);
c = hh(c, d, a, b, k[3], 16, -722521979);
b = hh(b, c, d, a, k[6], 23,  76029189);
a = hh(a, b, c, d, k[9], 4, -640364487);
d = hh(d, a, b, c, k[12], 11, -421815835);
c = hh(c, d, a, b, k[15], 16,  530742520);
b = hh(b, c, d, a, k[2], 23, -995338651);
 
a = ii(a, b, c, d, k[0], 6, -198630844);
d = ii(d, a, b, c, k[7], 10,  1126891415);
c = ii(c, d, a, b, k[14], 15, -1416354905);
b = ii(b, c, d, a, k[5], 21, -57434055);
a = ii(a, b, c, d, k[12], 6,  1700485571);
d = ii(d, a, b, c, k[3], 10, -1894986606);
c = ii(c, d, a, b, k[10], 15, -1051523);
b = ii(b, c, d, a, k[1], 21, -2054922799);
a = ii(a, b, c, d, k[8], 6,  1873313359);
d = ii(d, a, b, c, k[15], 10, -30611744);
c = ii(c, d, a, b, k[6], 15, -1560198380);
b = ii(b, c, d, a, k[13], 21,  1309151649);
a = ii(a, b, c, d, k[4], 6, -145523070);
d = ii(d, a, b, c, k[11], 10, -1120210379);
c = ii(c, d, a, b, k[2], 15,  718787259);
b = ii(b, c, d, a, k[9], 21, -343485551);
 
x[0] = add32(a, x[0]);
x[1] = add32(b, x[1]);
x[2] = add32(c, x[2]);
x[3] = add32(d, x[3]);
 
}
 
var cmn = function(q, a, b, x, s, t) {
a = add32(add32(a, q), add32(x, t));
return add32((a << s) | (a >>> (32 - s)), b);
}
 
var ff = function(a, b, c, d, x, s, t) {
return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
 
var gg = function(a, b, c, d, x, s, t) {
return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
 
var hh = function(a, b, c, d, x, s, t) {
return cmn(b ^ c ^ d, a, b, x, s, t);
}
 
var ii = function(a, b, c, d, x, s, t) {
return cmn(c ^ (b | (~d)), a, b, x, s, t);
}
 
var md51 = function(s) {
txt = '';
var n = s.length,
state = [1732584193, -271733879, -1732584194, 271733878], i;
for (i=64; i<=s.length; i+=64) {
md5cycle(state, md5blk(s.substring(i-64, i)));
}
s = s.substring(i-64);
var tail = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
for (i=0; i<s.length; i++)
tail[i>>2] |= s.charCodeAt(i) << ((i%4) << 3);
tail[i>>2] |= 0x80 << ((i%4) << 3);
if (i > 55) {
md5cycle(state, tail);
for (i=0; i<16; i++) tail[i] = 0;
}
tail[14] = n*8;
md5cycle(state, tail);
return state;
}
 
/* there needs to be support for Unicode here,
 * unless we pretend that we can redefine the MD-5
 * algorithm for multi-byte characters (perhaps
 * by adding every four 16-bit characters and
 * shortening the sum to 32 bits). Otherwise
 * I suggest performing MD-5 as if every character
 * was two bytes--e.g., 0040 0025 = @%--but then
 * how will an ordinary MD-5 sum be matched?
 * There is no way to standardize text to something
 * like UTF-8 before transformation; speed cost is
 * utterly prohibitive. The JavaScript standard
 * itself needs to look at this: it should start
 * providing access to strings as preformed UTF-8
 * 8-bit unsigned value arrays.
 */
var md5blk = function(s) { /* I figured global was faster.   */
var md5blks = [], i; /* Andy King said do it this way. */
for (i=0; i<64; i+=4) {
md5blks[i>>2] = s.charCodeAt(i)
+ (s.charCodeAt(i+1) << 8)
+ (s.charCodeAt(i+2) << 16)
+ (s.charCodeAt(i+3) << 24);
}
return md5blks;
}
 
var hex_chr = '0123456789abcdef'.split('');
 
var rhex = function(n)
{
var s='', j=0;
for(; j<4; j++)
s += hex_chr[(n >> (j * 8 + 4)) & 0x0F]
+ hex_chr[(n >> (j * 8)) & 0x0F];
return s;
}
 
var hex = function(x) {
for (var i=0; i<x.length; i++)
x[i] = rhex(x[i]);
return x.join('');
}
 
window.md5 = function(s) {
return hex(md51(s));
}
 
/* this function is much faster,
so if possible we use it. Some IEs
are the only ones I know of that
need the idiotic second function,
generated by an if clause.  */
 
var add32 = function(a, b) {
return (a + b) & 0xFFFFFFFF;
}
 
if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
var add32 = function(x, y) {
var lsw = (x & 0xFFFF) + (y & 0xFFFF),
msw = (x >> 16) + (y >> 16) + (lsw >> 16);
return (msw << 16) | (lsw & 0xFFFF);
}
}
 
//});
},{}],"md5":[function(require,module,exports){
//define(function (require, exports, module) {
	// price and off-countdown
	require('./mod/md5');
//});
},{"./mod/md5":1}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL21vZC9tZDUuanMiLCIuL2dhZWEvanMvbWQ1LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pMQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvL2RlZmluZShmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgbW9kdWxlKSB7XHJcbnZhciBtZDVjeWNsZSA9IGZ1bmN0aW9uKHgsIGspIHtcclxudmFyIGEgPSB4WzBdLCBiID0geFsxXSwgYyA9IHhbMl0sIGQgPSB4WzNdO1xyXG5hID0gZmYoYSwgYiwgYywgZCwga1swXSwgNywgLTY4MDg3NjkzNik7XHJcbmQgPSBmZihkLCBhLCBiLCBjLCBrWzFdLCAxMiwgLTM4OTU2NDU4Nik7XHJcbmMgPSBmZihjLCBkLCBhLCBiLCBrWzJdLCAxNywgIDYwNjEwNTgxOSk7XHJcbmIgPSBmZihiLCBjLCBkLCBhLCBrWzNdLCAyMiwgLTEwNDQ1MjUzMzApO1xyXG5hID0gZmYoYSwgYiwgYywgZCwga1s0XSwgNywgLTE3NjQxODg5Nyk7XHJcbmQgPSBmZihkLCBhLCBiLCBjLCBrWzVdLCAxMiwgIDEyMDAwODA0MjYpO1xyXG5jID0gZmYoYywgZCwgYSwgYiwga1s2XSwgMTcsIC0xNDczMjMxMzQxKTtcclxuYiA9IGZmKGIsIGMsIGQsIGEsIGtbN10sIDIyLCAtNDU3MDU5ODMpO1xyXG5hID0gZmYoYSwgYiwgYywgZCwga1s4XSwgNywgIDE3NzAwMzU0MTYpO1xyXG5kID0gZmYoZCwgYSwgYiwgYywga1s5XSwgMTIsIC0xOTU4NDE0NDE3KTtcclxuYyA9IGZmKGMsIGQsIGEsIGIsIGtbMTBdLCAxNywgLTQyMDYzKTtcclxuYiA9IGZmKGIsIGMsIGQsIGEsIGtbMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xyXG5hID0gZmYoYSwgYiwgYywgZCwga1sxMl0sIDcsICAxODA0NjAzNjgyKTtcclxuZCA9IGZmKGQsIGEsIGIsIGMsIGtbMTNdLCAxMiwgLTQwMzQxMTAxKTtcclxuYyA9IGZmKGMsIGQsIGEsIGIsIGtbMTRdLCAxNywgLTE1MDIwMDIyOTApO1xyXG5iID0gZmYoYiwgYywgZCwgYSwga1sxNV0sIDIyLCAgMTIzNjUzNTMyOSk7XHJcbiBcclxuYSA9IGdnKGEsIGIsIGMsIGQsIGtbMV0sIDUsIC0xNjU3OTY1MTApO1xyXG5kID0gZ2coZCwgYSwgYiwgYywga1s2XSwgOSwgLTEwNjk1MDE2MzIpO1xyXG5jID0gZ2coYywgZCwgYSwgYiwga1sxMV0sIDE0LCAgNjQzNzE3NzEzKTtcclxuYiA9IGdnKGIsIGMsIGQsIGEsIGtbMF0sIDIwLCAtMzczODk3MzAyKTtcclxuYSA9IGdnKGEsIGIsIGMsIGQsIGtbNV0sIDUsIC03MDE1NTg2OTEpO1xyXG5kID0gZ2coZCwgYSwgYiwgYywga1sxMF0sIDksICAzODAxNjA4Myk7XHJcbmMgPSBnZyhjLCBkLCBhLCBiLCBrWzE1XSwgMTQsIC02NjA0NzgzMzUpO1xyXG5iID0gZ2coYiwgYywgZCwgYSwga1s0XSwgMjAsIC00MDU1Mzc4NDgpO1xyXG5hID0gZ2coYSwgYiwgYywgZCwga1s5XSwgNSwgIDU2ODQ0NjQzOCk7XHJcbmQgPSBnZyhkLCBhLCBiLCBjLCBrWzE0XSwgOSwgLTEwMTk4MDM2OTApO1xyXG5jID0gZ2coYywgZCwgYSwgYiwga1szXSwgMTQsIC0xODczNjM5NjEpO1xyXG5iID0gZ2coYiwgYywgZCwgYSwga1s4XSwgMjAsICAxMTYzNTMxNTAxKTtcclxuYSA9IGdnKGEsIGIsIGMsIGQsIGtbMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XHJcbmQgPSBnZyhkLCBhLCBiLCBjLCBrWzJdLCA5LCAtNTE0MDM3ODQpO1xyXG5jID0gZ2coYywgZCwgYSwgYiwga1s3XSwgMTQsICAxNzM1MzI4NDczKTtcclxuYiA9IGdnKGIsIGMsIGQsIGEsIGtbMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xyXG4gXHJcbmEgPSBoaChhLCBiLCBjLCBkLCBrWzVdLCA0LCAtMzc4NTU4KTtcclxuZCA9IGhoKGQsIGEsIGIsIGMsIGtbOF0sIDExLCAtMjAyMjU3NDQ2Myk7XHJcbmMgPSBoaChjLCBkLCBhLCBiLCBrWzExXSwgMTYsICAxODM5MDMwNTYyKTtcclxuYiA9IGhoKGIsIGMsIGQsIGEsIGtbMTRdLCAyMywgLTM1MzA5NTU2KTtcclxuYSA9IGhoKGEsIGIsIGMsIGQsIGtbMV0sIDQsIC0xNTMwOTkyMDYwKTtcclxuZCA9IGhoKGQsIGEsIGIsIGMsIGtbNF0sIDExLCAgMTI3Mjg5MzM1Myk7XHJcbmMgPSBoaChjLCBkLCBhLCBiLCBrWzddLCAxNiwgLTE1NTQ5NzYzMik7XHJcbmIgPSBoaChiLCBjLCBkLCBhLCBrWzEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcclxuYSA9IGhoKGEsIGIsIGMsIGQsIGtbMTNdLCA0LCAgNjgxMjc5MTc0KTtcclxuZCA9IGhoKGQsIGEsIGIsIGMsIGtbMF0sIDExLCAtMzU4NTM3MjIyKTtcclxuYyA9IGhoKGMsIGQsIGEsIGIsIGtbM10sIDE2LCAtNzIyNTIxOTc5KTtcclxuYiA9IGhoKGIsIGMsIGQsIGEsIGtbNl0sIDIzLCAgNzYwMjkxODkpO1xyXG5hID0gaGgoYSwgYiwgYywgZCwga1s5XSwgNCwgLTY0MDM2NDQ4Nyk7XHJcbmQgPSBoaChkLCBhLCBiLCBjLCBrWzEyXSwgMTEsIC00MjE4MTU4MzUpO1xyXG5jID0gaGgoYywgZCwgYSwgYiwga1sxNV0sIDE2LCAgNTMwNzQyNTIwKTtcclxuYiA9IGhoKGIsIGMsIGQsIGEsIGtbMl0sIDIzLCAtOTk1MzM4NjUxKTtcclxuIFxyXG5hID0gaWkoYSwgYiwgYywgZCwga1swXSwgNiwgLTE5ODYzMDg0NCk7XHJcbmQgPSBpaShkLCBhLCBiLCBjLCBrWzddLCAxMCwgIDExMjY4OTE0MTUpO1xyXG5jID0gaWkoYywgZCwgYSwgYiwga1sxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XHJcbmIgPSBpaShiLCBjLCBkLCBhLCBrWzVdLCAyMSwgLTU3NDM0MDU1KTtcclxuYSA9IGlpKGEsIGIsIGMsIGQsIGtbMTJdLCA2LCAgMTcwMDQ4NTU3MSk7XHJcbmQgPSBpaShkLCBhLCBiLCBjLCBrWzNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xyXG5jID0gaWkoYywgZCwgYSwgYiwga1sxMF0sIDE1LCAtMTA1MTUyMyk7XHJcbmIgPSBpaShiLCBjLCBkLCBhLCBrWzFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xyXG5hID0gaWkoYSwgYiwgYywgZCwga1s4XSwgNiwgIDE4NzMzMTMzNTkpO1xyXG5kID0gaWkoZCwgYSwgYiwgYywga1sxNV0sIDEwLCAtMzA2MTE3NDQpO1xyXG5jID0gaWkoYywgZCwgYSwgYiwga1s2XSwgMTUsIC0xNTYwMTk4MzgwKTtcclxuYiA9IGlpKGIsIGMsIGQsIGEsIGtbMTNdLCAyMSwgIDEzMDkxNTE2NDkpO1xyXG5hID0gaWkoYSwgYiwgYywgZCwga1s0XSwgNiwgLTE0NTUyMzA3MCk7XHJcbmQgPSBpaShkLCBhLCBiLCBjLCBrWzExXSwgMTAsIC0xMTIwMjEwMzc5KTtcclxuYyA9IGlpKGMsIGQsIGEsIGIsIGtbMl0sIDE1LCAgNzE4Nzg3MjU5KTtcclxuYiA9IGlpKGIsIGMsIGQsIGEsIGtbOV0sIDIxLCAtMzQzNDg1NTUxKTtcclxuIFxyXG54WzBdID0gYWRkMzIoYSwgeFswXSk7XHJcbnhbMV0gPSBhZGQzMihiLCB4WzFdKTtcclxueFsyXSA9IGFkZDMyKGMsIHhbMl0pO1xyXG54WzNdID0gYWRkMzIoZCwgeFszXSk7XHJcbiBcclxufVxyXG4gXHJcbnZhciBjbW4gPSBmdW5jdGlvbihxLCBhLCBiLCB4LCBzLCB0KSB7XHJcbmEgPSBhZGQzMihhZGQzMihhLCBxKSwgYWRkMzIoeCwgdCkpO1xyXG5yZXR1cm4gYWRkMzIoKGEgPDwgcykgfCAoYSA+Pj4gKDMyIC0gcykpLCBiKTtcclxufVxyXG4gXHJcbnZhciBmZiA9IGZ1bmN0aW9uKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxucmV0dXJuIGNtbigoYiAmIGMpIHwgKCh+YikgJiBkKSwgYSwgYiwgeCwgcywgdCk7XHJcbn1cclxuIFxyXG52YXIgZ2cgPSBmdW5jdGlvbihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbnJldHVybiBjbW4oKGIgJiBkKSB8IChjICYgKH5kKSksIGEsIGIsIHgsIHMsIHQpO1xyXG59XHJcbiBcclxudmFyIGhoID0gZnVuY3Rpb24oYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG5yZXR1cm4gY21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XHJcbn1cclxuIFxyXG52YXIgaWkgPSBmdW5jdGlvbihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbnJldHVybiBjbW4oYyBeIChiIHwgKH5kKSksIGEsIGIsIHgsIHMsIHQpO1xyXG59XHJcbiBcclxudmFyIG1kNTEgPSBmdW5jdGlvbihzKSB7XHJcbnR4dCA9ICcnO1xyXG52YXIgbiA9IHMubGVuZ3RoLFxyXG5zdGF0ZSA9IFsxNzMyNTg0MTkzLCAtMjcxNzMzODc5LCAtMTczMjU4NDE5NCwgMjcxNzMzODc4XSwgaTtcclxuZm9yIChpPTY0OyBpPD1zLmxlbmd0aDsgaSs9NjQpIHtcclxubWQ1Y3ljbGUoc3RhdGUsIG1kNWJsayhzLnN1YnN0cmluZyhpLTY0LCBpKSkpO1xyXG59XHJcbnMgPSBzLnN1YnN0cmluZyhpLTY0KTtcclxudmFyIHRhaWwgPSBbMCwwLDAsMCwgMCwwLDAsMCwgMCwwLDAsMCwgMCwwLDAsMF07XHJcbmZvciAoaT0wOyBpPHMubGVuZ3RoOyBpKyspXHJcbnRhaWxbaT4+Ml0gfD0gcy5jaGFyQ29kZUF0KGkpIDw8ICgoaSU0KSA8PCAzKTtcclxudGFpbFtpPj4yXSB8PSAweDgwIDw8ICgoaSU0KSA8PCAzKTtcclxuaWYgKGkgPiA1NSkge1xyXG5tZDVjeWNsZShzdGF0ZSwgdGFpbCk7XHJcbmZvciAoaT0wOyBpPDE2OyBpKyspIHRhaWxbaV0gPSAwO1xyXG59XHJcbnRhaWxbMTRdID0gbio4O1xyXG5tZDVjeWNsZShzdGF0ZSwgdGFpbCk7XHJcbnJldHVybiBzdGF0ZTtcclxufVxyXG4gXHJcbi8qIHRoZXJlIG5lZWRzIHRvIGJlIHN1cHBvcnQgZm9yIFVuaWNvZGUgaGVyZSxcclxuICogdW5sZXNzIHdlIHByZXRlbmQgdGhhdCB3ZSBjYW4gcmVkZWZpbmUgdGhlIE1ELTVcclxuICogYWxnb3JpdGhtIGZvciBtdWx0aS1ieXRlIGNoYXJhY3RlcnMgKHBlcmhhcHNcclxuICogYnkgYWRkaW5nIGV2ZXJ5IGZvdXIgMTYtYml0IGNoYXJhY3RlcnMgYW5kXHJcbiAqIHNob3J0ZW5pbmcgdGhlIHN1bSB0byAzMiBiaXRzKS4gT3RoZXJ3aXNlXHJcbiAqIEkgc3VnZ2VzdCBwZXJmb3JtaW5nIE1ELTUgYXMgaWYgZXZlcnkgY2hhcmFjdGVyXHJcbiAqIHdhcyB0d28gYnl0ZXMtLWUuZy4sIDAwNDAgMDAyNSA9IEAlLS1idXQgdGhlblxyXG4gKiBob3cgd2lsbCBhbiBvcmRpbmFyeSBNRC01IHN1bSBiZSBtYXRjaGVkP1xyXG4gKiBUaGVyZSBpcyBubyB3YXkgdG8gc3RhbmRhcmRpemUgdGV4dCB0byBzb21ldGhpbmdcclxuICogbGlrZSBVVEYtOCBiZWZvcmUgdHJhbnNmb3JtYXRpb247IHNwZWVkIGNvc3QgaXNcclxuICogdXR0ZXJseSBwcm9oaWJpdGl2ZS4gVGhlIEphdmFTY3JpcHQgc3RhbmRhcmRcclxuICogaXRzZWxmIG5lZWRzIHRvIGxvb2sgYXQgdGhpczogaXQgc2hvdWxkIHN0YXJ0XHJcbiAqIHByb3ZpZGluZyBhY2Nlc3MgdG8gc3RyaW5ncyBhcyBwcmVmb3JtZWQgVVRGLThcclxuICogOC1iaXQgdW5zaWduZWQgdmFsdWUgYXJyYXlzLlxyXG4gKi9cclxudmFyIG1kNWJsayA9IGZ1bmN0aW9uKHMpIHsgLyogSSBmaWd1cmVkIGdsb2JhbCB3YXMgZmFzdGVyLiAgICovXHJcbnZhciBtZDVibGtzID0gW10sIGk7IC8qIEFuZHkgS2luZyBzYWlkIGRvIGl0IHRoaXMgd2F5LiAqL1xyXG5mb3IgKGk9MDsgaTw2NDsgaSs9NCkge1xyXG5tZDVibGtzW2k+PjJdID0gcy5jaGFyQ29kZUF0KGkpXHJcbisgKHMuY2hhckNvZGVBdChpKzEpIDw8IDgpXHJcbisgKHMuY2hhckNvZGVBdChpKzIpIDw8IDE2KVxyXG4rIChzLmNoYXJDb2RlQXQoaSszKSA8PCAyNCk7XHJcbn1cclxucmV0dXJuIG1kNWJsa3M7XHJcbn1cclxuIFxyXG52YXIgaGV4X2NociA9ICcwMTIzNDU2Nzg5YWJjZGVmJy5zcGxpdCgnJyk7XHJcbiBcclxudmFyIHJoZXggPSBmdW5jdGlvbihuKVxyXG57XHJcbnZhciBzPScnLCBqPTA7XHJcbmZvcig7IGo8NDsgaisrKVxyXG5zICs9IGhleF9jaHJbKG4gPj4gKGogKiA4ICsgNCkpICYgMHgwRl1cclxuKyBoZXhfY2hyWyhuID4+IChqICogOCkpICYgMHgwRl07XHJcbnJldHVybiBzO1xyXG59XHJcbiBcclxudmFyIGhleCA9IGZ1bmN0aW9uKHgpIHtcclxuZm9yICh2YXIgaT0wOyBpPHgubGVuZ3RoOyBpKyspXHJcbnhbaV0gPSByaGV4KHhbaV0pO1xyXG5yZXR1cm4geC5qb2luKCcnKTtcclxufVxyXG4gXHJcbndpbmRvdy5tZDUgPSBmdW5jdGlvbihzKSB7XHJcbnJldHVybiBoZXgobWQ1MShzKSk7XHJcbn1cclxuIFxyXG4vKiB0aGlzIGZ1bmN0aW9uIGlzIG11Y2ggZmFzdGVyLFxyXG5zbyBpZiBwb3NzaWJsZSB3ZSB1c2UgaXQuIFNvbWUgSUVzXHJcbmFyZSB0aGUgb25seSBvbmVzIEkga25vdyBvZiB0aGF0XHJcbm5lZWQgdGhlIGlkaW90aWMgc2Vjb25kIGZ1bmN0aW9uLFxyXG5nZW5lcmF0ZWQgYnkgYW4gaWYgY2xhdXNlLiAgKi9cclxuIFxyXG52YXIgYWRkMzIgPSBmdW5jdGlvbihhLCBiKSB7XHJcbnJldHVybiAoYSArIGIpICYgMHhGRkZGRkZGRjtcclxufVxyXG4gXHJcbmlmIChtZDUoJ2hlbGxvJykgIT0gJzVkNDE0MDJhYmM0YjJhNzZiOTcxOWQ5MTEwMTdjNTkyJykge1xyXG52YXIgYWRkMzIgPSBmdW5jdGlvbih4LCB5KSB7XHJcbnZhciBsc3cgPSAoeCAmIDB4RkZGRikgKyAoeSAmIDB4RkZGRiksXHJcbm1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xyXG5yZXR1cm4gKG1zdyA8PCAxNikgfCAobHN3ICYgMHhGRkZGKTtcclxufVxyXG59XHJcbiBcclxuLy99KTsiLCIvL2RlZmluZShmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgbW9kdWxlKSB7XHJcblx0Ly8gcHJpY2UgYW5kIG9mZi1jb3VudGRvd25cclxuXHRyZXF1aXJlKCcuL21vZC9tZDUnKTtcclxuLy99KTsiXX0=

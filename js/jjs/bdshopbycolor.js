require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var openInPopup =  function (open) {
    return function (url, name, w, h) {
        var w = parseInt(w) || 475;
        var h = parseInt(h) || 183;
        // Fixes dual-screen position                         Most browsers      Firefox
        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;
        var override_features = 'width=' + w + ',height=' + h + ',left=' + left + ',top=' + top + ',scrollbars=1,location=1,toolbar=0';

        // set name if missing here
        //name = name || "default_window_name";
        return open.call(window, url, name, override_features);
    };
}(window.open);

module.exports = openInPopup;

},{}],2:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
var Facebook = require('../socialMedia/facebook');

exports.init = function () {
    Facebook.init();
    $(function () {
        $(".main .facebook-share-icon").click(function(){
            var lang_suffix = webData.lang != webData.default_lang ? '/' + webData.lang : '';
            var pageUrl = document.location.protocol + '//'+document.location.host+lang_suffix+'/shop-by-color/';
            var facebook_title = document.querySelector("title").innerHTML;
            var facebook_descript = document.querySelector("meta[name='description']").content;
            var imageUrl = document.querySelector("meta[property='og:image']").content;

            var requestBody = {
                method: 'feed',
                display: 'popup',
                link: pageUrl,
                picture: imageUrl,
                title: facebook_title,
                description: facebook_descript
            }
            FB.ui(requestBody, function(response){
            });
            return false;
        });
    });
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvc2hvcGJ5Y29sb3Ivc2hvcGJ5Y29sb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcbnZhciBGYWNlYm9vayA9IHJlcXVpcmUoJy4uL3NvY2lhbE1lZGlhL2ZhY2Vib29rJyk7XHJcblxyXG5leHBvcnRzLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBGYWNlYm9vay5pbml0KCk7XHJcbiAgICAkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLm1haW4gLmZhY2Vib29rLXNoYXJlLWljb25cIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIGxhbmdfc3VmZml4ID0gd2ViRGF0YS5sYW5nICE9IHdlYkRhdGEuZGVmYXVsdF9sYW5nID8gJy8nICsgd2ViRGF0YS5sYW5nIDogJyc7XHJcbiAgICAgICAgICAgIHZhciBwYWdlVXJsID0gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nK2RvY3VtZW50LmxvY2F0aW9uLmhvc3QrbGFuZ19zdWZmaXgrJy9zaG9wLWJ5LWNvbG9yLyc7XHJcbiAgICAgICAgICAgIHZhciBmYWNlYm9va190aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgIHZhciBmYWNlYm9va19kZXNjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtZXRhW25hbWU9J2Rlc2NyaXB0aW9uJ11cIikuY29udGVudDtcclxuICAgICAgICAgICAgdmFyIGltYWdlVXJsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1ldGFbcHJvcGVydHk9J29nOmltYWdlJ11cIikuY29udGVudDtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ2ZlZWQnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ3BvcHVwJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IHBhZ2VVcmwsXHJcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiBpbWFnZVVybCxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBmYWNlYm9va190aXRsZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBmYWNlYm9va19kZXNjcmlwdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEZCLnVpKHJlcXVlc3RCb2R5LCBmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTsiXX0=
},{"../socialMedia/facebook":3}],3:[function(require,module,exports){
//define(function (require, exports, module) {
   var openInPopup = require('../mod/openInPopup');
   var init = function(FBAppId) {
        if (!FBAppId) {
            return false;
        }

        FB.init({
            appId : FBAppId,
            status : false,
            cookie : true,
            xfbml : true,
            oauth : true,
            version : 'v2.3'
        });
    };

   var shareGoodsPic = function (link, picUrl, name, caption, description, pageType) {
       window.open = openInPopup;
       FB.ui({
           method: 'feed',
           display: 'popup',
           link: link,
           picture: picUrl,
           name: name,
           caption: caption,
           description: description
       }, function(response){
           window.open = window.originOpen;
           var SHARE_SUCC_CONST = 1
           var SHARE_FAIL_CONST = 0
           if (response && !response.error_message) {
               window.dataLayer.push({
                   'snsPageType' : pageType,
                   'event' : 'fbShareSuccess'
               });
               // trackFacebookShare(link, picUrl, caption, SHARE_SUCC_CONST)
           } else {
               //only record when fail
               trackFacebookShare(link, picUrl, caption, SHARE_FAIL_CONST)
           }
       });
   };

   var trackFacebookShare = function (link, picUrl, caption, status) {
       var goodsId = link.replace(/.*-g([0-9]+).*/, "$1")
       if(goodsId == link) return
       $.ajax({
           "type": "POST",
           "url": webData.WEB_ROOT + "ajax.php",
           "data": "act=sns_share_data_record&goods_id=" + goodsId + "&domain=" + caption + "&share_status=" + status + "&sns_type=facebook",
           "cache": false,
           "dataType": "json"
       });
   }

    module.exports = {
        "init": init,
        "shareGoodsPic": shareGoodsPic
    };
//});
},{"../mod/openInPopup":1}],"bdshopbycolor":[function(require,module,exports){
// require('./common')
require('../shopbycolor/shopbycolor.js').init();
},{"../shopbycolor/shopbycolor.js":2}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL21vZC9vcGVuSW5Qb3B1cC5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL3Nob3BieWNvbG9yL3Nob3BieWNvbG9yLmpzIiwiRDovd3d3L3Byb21ldGhldXMvc3JjL2dhZWEvanMvc29jaWFsTWVkaWEvZmFjZWJvb2suanMiLCIuL2dhZWEvanMvZW50cnlfanMvYmRzaG9wYnljb2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIG9wZW5JblBvcHVwID0gIGZ1bmN0aW9uIChvcGVuKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHVybCwgbmFtZSwgdywgaCkge1xyXG4gICAgICAgIHZhciB3ID0gcGFyc2VJbnQodykgfHwgNDc1O1xyXG4gICAgICAgIHZhciBoID0gcGFyc2VJbnQoaCkgfHwgMTgzO1xyXG4gICAgICAgIC8vIEZpeGVzIGR1YWwtc2NyZWVuIHBvc2l0aW9uICAgICAgICAgICAgICAgICAgICAgICAgIE1vc3QgYnJvd3NlcnMgICAgICBGaXJlZm94XHJcbiAgICAgICAgdmFyIGR1YWxTY3JlZW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgIT0gdW5kZWZpbmVkID8gd2luZG93LnNjcmVlbkxlZnQgOiBzY3JlZW4ubGVmdDtcclxuICAgICAgICB2YXIgZHVhbFNjcmVlblRvcCA9IHdpbmRvdy5zY3JlZW5Ub3AgIT0gdW5kZWZpbmVkID8gd2luZG93LnNjcmVlblRvcCA6IHNjcmVlbi50b3A7XHJcblxyXG4gICAgICAgIHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoID8gd2luZG93LmlubmVyV2lkdGggOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggOiBzY3JlZW4ud2lkdGg7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IDogc2NyZWVuLmhlaWdodDtcclxuXHJcbiAgICAgICAgdmFyIGxlZnQgPSAoKHdpZHRoIC8gMikgLSAodyAvIDIpKSArIGR1YWxTY3JlZW5MZWZ0O1xyXG4gICAgICAgIHZhciB0b3AgPSAoKGhlaWdodCAvIDIpIC0gKGggLyAyKSkgKyBkdWFsU2NyZWVuVG9wO1xyXG4gICAgICAgIHZhciBvdmVycmlkZV9mZWF0dXJlcyA9ICd3aWR0aD0nICsgdyArICcsaGVpZ2h0PScgKyBoICsgJyxsZWZ0PScgKyBsZWZ0ICsgJyx0b3A9JyArIHRvcCArICcsc2Nyb2xsYmFycz0xLGxvY2F0aW9uPTEsdG9vbGJhcj0wJztcclxuXHJcbiAgICAgICAgLy8gc2V0IG5hbWUgaWYgbWlzc2luZyBoZXJlXHJcbiAgICAgICAgLy9uYW1lID0gbmFtZSB8fCBcImRlZmF1bHRfd2luZG93X25hbWVcIjtcclxuICAgICAgICByZXR1cm4gb3Blbi5jYWxsKHdpbmRvdywgdXJsLCBuYW1lLCBvdmVycmlkZV9mZWF0dXJlcyk7XHJcbiAgICB9O1xyXG59KHdpbmRvdy5vcGVuKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gb3BlbkluUG9wdXA7XHJcbiIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG52YXIgRmFjZWJvb2sgPSByZXF1aXJlKCcuLi9zb2NpYWxNZWRpYS9mYWNlYm9vaycpO1xyXG5cclxuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgRmFjZWJvb2suaW5pdCgpO1xyXG4gICAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5tYWluIC5mYWNlYm9vay1zaGFyZS1pY29uXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBsYW5nX3N1ZmZpeCA9IHdlYkRhdGEubGFuZyAhPSB3ZWJEYXRhLmRlZmF1bHRfbGFuZyA/ICcvJyArIHdlYkRhdGEubGFuZyA6ICcnO1xyXG4gICAgICAgICAgICB2YXIgcGFnZVVybCA9IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJytkb2N1bWVudC5sb2NhdGlvbi5ob3N0K2xhbmdfc3VmZml4Kycvc2hvcC1ieS1jb2xvci8nO1xyXG4gICAgICAgICAgICB2YXIgZmFjZWJvb2tfdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGl0bGVcIikuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICB2YXIgZmFjZWJvb2tfZGVzY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWV0YVtuYW1lPSdkZXNjcmlwdGlvbiddXCIpLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIHZhciBpbWFnZVVybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtZXRhW3Byb3BlcnR5PSdvZzppbWFnZSddXCIpLmNvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdmZWVkJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdwb3B1cCcsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBwYWdlVXJsLFxyXG4gICAgICAgICAgICAgICAgcGljdHVyZTogaW1hZ2VVcmwsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZmFjZWJvb2tfdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZmFjZWJvb2tfZGVzY3JpcHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBGQi51aShyZXF1ZXN0Qm9keSwgZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltZGhaV0V2YW5NdmMyaHZjR0o1WTI5c2IzSXZjMmh2Y0dKNVkyOXNiM0l1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVNJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lkbUZ5SUNRZ1BTQW9kSGx3Wlc5bUlIZHBibVJ2ZHlBaFBUMGdYQ0oxYm1SbFptbHVaV1JjSWlBL0lIZHBibVJ2ZDFzbkpDZGRJRG9nZEhsd1pXOW1JR2RzYjJKaGJDQWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JR2RzYjJKaGJGc25KQ2RkSURvZ2JuVnNiQ2s3WEhKY2JuWmhjaUJHWVdObFltOXZheUE5SUhKbGNYVnBjbVVvSnk0dUwzTnZZMmxoYkUxbFpHbGhMMlpoWTJWaWIyOXJKeWs3WEhKY2JseHlYRzVsZUhCdmNuUnpMbWx1YVhRZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0JHWVdObFltOXZheTVwYm1sMEtDazdYSEpjYmlBZ0lDQWtLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQWtLRndpTG0xaGFXNGdMbVpoWTJWaWIyOXJMWE5vWVhKbExXbGpiMjVjSWlrdVkyeHBZMnNvWm5WdVkzUnBiMjRvS1h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHeGhibWRmYzNWbVptbDRJRDBnZDJWaVJHRjBZUzVzWVc1bklDRTlJSGRsWWtSaGRHRXVaR1ZtWVhWc2RGOXNZVzVuSUQ4Z0p5OG5JQ3NnZDJWaVJHRjBZUzVzWVc1bklEb2dKeWM3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCd1lXZGxWWEpzSUQwZ1pHOWpkVzFsYm5RdWJHOWpZWFJwYjI0dWNISnZkRzlqYjJ3Z0t5QW5MeThuSzJSdlkzVnRaVzUwTG14dlkyRjBhVzl1TG1odmMzUXJiR0Z1WjE5emRXWm1hWGdySnk5emFHOXdMV0o1TFdOdmJHOXlMeWM3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCbVlXTmxZbTl2YTE5MGFYUnNaU0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9YQ0owYVhSc1pWd2lLUzVwYm01bGNraFVUVXc3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCbVlXTmxZbTl2YTE5a1pYTmpjbWx3ZENBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvWENKdFpYUmhXMjVoYldVOUoyUmxjMk55YVhCMGFXOXVKMTFjSWlrdVkyOXVkR1Z1ZER0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHbHRZV2RsVlhKc0lEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2loY0ltMWxkR0ZiY0hKdmNHVnlkSGs5SjI5bk9tbHRZV2RsSjExY0lpa3VZMjl1ZEdWdWREdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCeVpYRjFaWE4wUW05a2VTQTlJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUcxbGRHaHZaRG9nSjJabFpXUW5MRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdsemNHeGhlVG9nSjNCdmNIVndKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4cGJtczZJSEJoWjJWVmNtd3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3YVdOMGRYSmxPaUJwYldGblpWVnliQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhScGRHeGxPaUJtWVdObFltOXZhMTkwYVhSc1pTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsYzJOeWFYQjBhVzl1T2lCbVlXTmxZbTl2YTE5a1pYTmpjbWx3ZEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRVpDTG5WcEtISmxjWFZsYzNSQ2IyUjVMQ0JtZFc1amRHbHZiaWh5WlhOd2IyNXpaU2w3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hISmNiaUFnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0I5S1R0Y2NseHVmVHNpWFgwPSIsIi8vZGVmaW5lKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHtcclxuICAgdmFyIG9wZW5JblBvcHVwID0gcmVxdWlyZSgnLi4vbW9kL29wZW5JblBvcHVwJyk7XHJcbiAgIHZhciBpbml0ID0gZnVuY3Rpb24oRkJBcHBJZCkge1xyXG4gICAgICAgIGlmICghRkJBcHBJZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBGQi5pbml0KHtcclxuICAgICAgICAgICAgYXBwSWQgOiBGQkFwcElkLFxyXG4gICAgICAgICAgICBzdGF0dXMgOiBmYWxzZSxcclxuICAgICAgICAgICAgY29va2llIDogdHJ1ZSxcclxuICAgICAgICAgICAgeGZibWwgOiB0cnVlLFxyXG4gICAgICAgICAgICBvYXV0aCA6IHRydWUsXHJcbiAgICAgICAgICAgIHZlcnNpb24gOiAndjIuMydcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICB2YXIgc2hhcmVHb29kc1BpYyA9IGZ1bmN0aW9uIChsaW5rLCBwaWNVcmwsIG5hbWUsIGNhcHRpb24sIGRlc2NyaXB0aW9uLCBwYWdlVHlwZSkge1xyXG4gICAgICAgd2luZG93Lm9wZW4gPSBvcGVuSW5Qb3B1cDtcclxuICAgICAgIEZCLnVpKHtcclxuICAgICAgICAgICBtZXRob2Q6ICdmZWVkJyxcclxuICAgICAgICAgICBkaXNwbGF5OiAncG9wdXAnLFxyXG4gICAgICAgICAgIGxpbms6IGxpbmssXHJcbiAgICAgICAgICAgcGljdHVyZTogcGljVXJsLFxyXG4gICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgY2FwdGlvbjogY2FwdGlvbixcclxuICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cclxuICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICAgICB3aW5kb3cub3BlbiA9IHdpbmRvdy5vcmlnaW5PcGVuO1xyXG4gICAgICAgICAgIHZhciBTSEFSRV9TVUNDX0NPTlNUID0gMVxyXG4gICAgICAgICAgIHZhciBTSEFSRV9GQUlMX0NPTlNUID0gMFxyXG4gICAgICAgICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgJ3Nuc1BhZ2VUeXBlJyA6IHBhZ2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgJ2V2ZW50JyA6ICdmYlNoYXJlU3VjY2VzcydcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgIC8vIHRyYWNrRmFjZWJvb2tTaGFyZShsaW5rLCBwaWNVcmwsIGNhcHRpb24sIFNIQVJFX1NVQ0NfQ09OU1QpXHJcbiAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgLy9vbmx5IHJlY29yZCB3aGVuIGZhaWxcclxuICAgICAgICAgICAgICAgdHJhY2tGYWNlYm9va1NoYXJlKGxpbmssIHBpY1VybCwgY2FwdGlvbiwgU0hBUkVfRkFJTF9DT05TVClcclxuICAgICAgICAgICB9XHJcbiAgICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHZhciB0cmFja0ZhY2Vib29rU2hhcmUgPSBmdW5jdGlvbiAobGluaywgcGljVXJsLCBjYXB0aW9uLCBzdGF0dXMpIHtcclxuICAgICAgIHZhciBnb29kc0lkID0gbGluay5yZXBsYWNlKC8uKi1nKFswLTldKykuKi8sIFwiJDFcIilcclxuICAgICAgIGlmKGdvb2RzSWQgPT0gbGluaykgcmV0dXJuXHJcbiAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgIFwidHlwZVwiOiBcIlBPU1RcIixcclxuICAgICAgICAgICBcInVybFwiOiB3ZWJEYXRhLldFQl9ST09UICsgXCJhamF4LnBocFwiLFxyXG4gICAgICAgICAgIFwiZGF0YVwiOiBcImFjdD1zbnNfc2hhcmVfZGF0YV9yZWNvcmQmZ29vZHNfaWQ9XCIgKyBnb29kc0lkICsgXCImZG9tYWluPVwiICsgY2FwdGlvbiArIFwiJnNoYXJlX3N0YXR1cz1cIiArIHN0YXR1cyArIFwiJnNuc190eXBlPWZhY2Vib29rXCIsXHJcbiAgICAgICAgICAgXCJjYWNoZVwiOiBmYWxzZSxcclxuICAgICAgICAgICBcImRhdGFUeXBlXCI6IFwianNvblwiXHJcbiAgICAgICB9KTtcclxuICAgfVxyXG5cclxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgICAgIFwiaW5pdFwiOiBpbml0LFxyXG4gICAgICAgIFwic2hhcmVHb29kc1BpY1wiOiBzaGFyZUdvb2RzUGljXHJcbiAgICB9O1xyXG4vL30pOyIsIi8vIHJlcXVpcmUoJy4vY29tbW9uJylcclxucmVxdWlyZSgnLi4vc2hvcGJ5Y29sb3Ivc2hvcGJ5Y29sb3IuanMnKS5pbml0KCk7Il19

require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
//define(function (require, exports, module) {
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var UserAgent = require('../mod/userAgent');
var userAgent = new UserAgent();
// $(".style-block h5 b").each(function (n) {
// 	var _me = $(this),
// 	_dl = $(".style-block dl").eq(n);
// 	_me.initValue = false;
// 	_me.bind("click", function () {
// 		if (_dl.css("display") == "block") {
// 			_dl.slideUp("slow", function () {
// 				setMouseClass("top2", "top")
// 			});
// 		} else {
// 			_dl.slideDown("slow", function () {
// 				setMouseClass("top1", "")
// 			});
// 		}
// 	}).bind("mouseover", function () {
// 		setClass("top1", "top2");
// 		_me.initValue = true;
// 	}).bind("mouseout", function () {
// 		setClass("", "top");
// 		_me.initValue = false;
// 	});
// 	var setClass = function (a, b) {
// 		if (_dl.css("display") == "block") {
// 			setMe(a);
// 		} else {
// 			setMe(b);
// 		}
// 	};
// 	var setMouseClass = function (a, b) {
// 		if (_me.initValue == true) {
// 			setMe(a);
// 		} else {
// 			setMe(b);
// 		}
// 	};
// 	var setMe = function (a) {
// 		_me.removeClass().addClass(a);
// 	}
// });

$(".style-block dl dt h5").on('click',function() {
    var e = $(this);

    var t = e.parent('dt').next('dd');
    if (e.hasClass("expanded")) {
        e.removeClass("expanded");
        t.slideUp("slow");
    }
    else {
        e.addClass("expanded");
        t.slideDown("slow");
    }
});

$(".style-block .more-filter").on('click',function() {
    var e = $(this);
    e.siblings().removeClass("filterHide");
    e.hide();
});

$(".style-block dd .more").on('click',function() {
    var e = $(this);
    var text = e.toggleClass("less").hasClass("less") ? _lang.page_common_less : _lang.page_common_more;
    e.children('.more_text').text(text);
    var t = e.parent();
    if (e.hasClass("less")) {
        t.children(".moreHidden").css("display", "block");
    }
    else {
        t.children(".moreHidden").css("display", "none");
    }
});

$(".showLink").on('click', function() {
    var e = $(this);
    if (e.toggleClass("viewAll").hasClass("viewAll")) {
       $(".moreHidden").show();
       e.children('.btnText').text(_lang.page_list_hide);
    } else {
       $(".moreHidden").hide();
       e.children('.btnText').text(_lang.page_list_view_all);
    }
});

var colorfilter = $(".colorfilter");
if (!userAgent.isIpad()) { // ipad need click 2 times if has hover
    colorfilter.delegate('.colorLink a', 'mouseover', function () {
        $(this).find('.colorAlt').show();
    });
    colorfilter.delegate('.colorLink a', 'mouseout', function () {
        $(this).find('.colorAlt').hide();
    });
}

//colorfilter.delegate('.colorLink a', 'click', function () {
//    $(this).addClass('selected');
//});

$(".imgsizescroll a").mouseover(function() {
    var tip = $(".imgSizeTip");
    var arrow = $(".imgSizeArrow");
    var imgTipContent = $(this).children(".skirtsize").attr('data-name');
    var imgParentPosition = $(".imgsizescroll").position();
    var imgPosition = $(this).position();

    var tipOffsetX = -12;
    var arrowOffsetX = 25;
    var tipOffsetY = 64;
    var arrowOffsetY = 59;

    var tipLeft = imgParentPosition.left + imgPosition.left + tipOffsetX;
    var arrowLeft = imgParentPosition.left + imgPosition.left + arrowOffsetX;
    var tipTop = imgParentPosition.top + imgPosition.top + tipOffsetY;
    var arrowTop = imgParentPosition.top + imgPosition.top + arrowOffsetY;

    tip.css({"display": "inline-block", "top": tipTop, "left": tipLeft, "z-index": "9999"});
    tip.text(imgTipContent);
    arrow.css({"display": "inline-block", "top": arrowTop, "left": arrowLeft, "z-index": "9999"});
});

$(".imgsizescroll a").mouseout(function() {
    $(".imgSizeTip").css("display", "none");
    $(".imgSizeArrow").css("display", "none");
});

$(".imgshapescroll a").mouseover(function() {
    var tip = $(".imgShapeTip");
    var arrow = $(".imgShapeArrow");
    var imgTipContent = $(this).children('.silhouette').attr('data-name');
    var imgParentPosition = $(".imgshapescroll").position();
    var imgPosition = $(this).position();

    var tipOffsetX = -12;
    var arrowOffsetX = 25;
    var tipOffsetY = 64;
    var arrowOffsetY = 59;

    var tipLeft = imgParentPosition.left + imgPosition.left + tipOffsetX;
    var arrowLeft = imgParentPosition.left + imgPosition.left + arrowOffsetX;
    var tipTop = imgParentPosition.top + imgPosition.top + tipOffsetY;
    var arrowTop = imgParentPosition.top + imgPosition.top + arrowOffsetY;

    tip.css({"display": "inline-block", "top": tipTop, "left": tipLeft, "z-index": "9999"});
    tip.text(imgTipContent);
    arrow.css({"display": "inline-block", "top": arrowTop, "left": arrowLeft, "z-index": "9999"});
});

$(".imgshapescroll a").mouseout(function() {
    $(".imgShapeTip").css("display", "none");
    $(".imgShapeArrow").css("display", "none");
});

$(".scroll_neckline a").mouseover(function() {
    var tip = $(".tip_neckline");
    var arrow = $(".arrow_neckline");
    var imgTipContent = $(this).children('.neckline').attr('data-name');
    var imgParentPosition = $(".scroll_neckline").position();
    var imgPosition = $(this).position();

    var tipOffsetX = -12;
    var arrowOffsetX = 25;
    var tipOffsetY = 64;
    var arrowOffsetY = 59;

    var tipLeft = imgParentPosition.left + imgPosition.left + tipOffsetX;
    var arrowLeft = imgParentPosition.left + imgPosition.left + arrowOffsetX;
    var tipTop = imgParentPosition.top + imgPosition.top + tipOffsetY;
    var arrowTop = imgParentPosition.top + imgPosition.top + arrowOffsetY;

    tip.css({"display": "inline-block", "top": tipTop, "left": tipLeft, "z-index": "9999"});
    tip.text(imgTipContent);
    arrow.css({"display": "inline-block", "top": arrowTop, "left": arrowLeft, "z-index": "9999"});
});

$(".scroll_neckline a").mouseout(function() {
    $(".tip_neckline").css("display", "none");
    $(".arrow_neckline").css("display", "none");
});

$(".scroll_strorstp a").mouseover(function() {
    var tip = $(".tip_strorstp");
    var arrow = $(".arrow_strorstp");
    var imgTipContent = $(this).children('.strorstp').attr('data-name');
    var imgParentPosition = $(".scroll_strorstp").position();
    var imgPosition = $(this).position();

    var tipOffsetX = -12;
    var arrowOffsetX = 25;
    var tipOffsetY = 64;
    var arrowOffsetY = 59;

    var tipLeft = imgParentPosition.left + imgPosition.left + tipOffsetX;
    var arrowLeft = imgParentPosition.left + imgPosition.left + arrowOffsetX;
    var tipTop = imgParentPosition.top + imgPosition.top + tipOffsetY;
    var arrowTop = imgParentPosition.top + imgPosition.top + arrowOffsetY;

    tip.css({"display": "inline-block", "top": tipTop, "left": tipLeft, "z-index": "9999"});
    tip.text(imgTipContent);
    arrow.css({"display": "inline-block", "top": arrowTop, "left": arrowLeft, "z-index": "9999"});
});

$(".scroll_strorstp a").mouseout(function() {
    $(".tip_strorstp").css("display", "none");
    $(".arrow_strorstp").css("display", "none");
});

var countImg = $(".imgsizescroll a").length;
if (countImg > 9) {
    for (var i = 0; i < countImg; i++) {
        if ($(".imgsizescroll a").eq(i).attr("class") == "selected") {
            if (i > 8) {
                $(".imgsizescroll").animate({ scrollTop: $('.imgsizescroll').prop("scrollHeight")}, 0);
                break;
            }
        }
    }
}
//sample-dress sale-size notice
var Cookie = require('../mod/cookie');
var cookie = new Cookie();
var cookieKey = 'sample-dress-fit-notify-test';
//one day
var cookieTime = 1;
if(!cookie.getCookie(cookieKey)) {
    var SampleDressSaleSize = $('#left-filter-nav').find('#sale-size-filter');
    var sampleDressNoticeDialog = $('#sample-dress-filter-notice');
    if(sampleDressNoticeDialog.length) {
        var layer = $('<div id="dialogOverlay"><div style="background:rgb(0,0,0.1);opacity: 0.5"></div></div>').prependTo('body');

        sampleDressNoticeDialog.find('button').click(function () {
            layer.hide();
            sampleDressNoticeDialog.css('display','none');
            if(SampleDressSaleSize.length) {
                SampleDressSaleSize.addClass('sale-size-animate')
            }
        });
        layer.show(0.2,function () {
            cookie.setCookie(cookieKey,'testCookie',cookieTime);
            sampleDressNoticeDialog.css('display','flex');
        });
    }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvY2F0ZWdvcnkvZmlsdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvL2RlZmluZShmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgbW9kdWxlKSB7XHJcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG5cclxudmFyIFVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL21vZC91c2VyQWdlbnQnKTtcclxudmFyIHVzZXJBZ2VudCA9IG5ldyBVc2VyQWdlbnQoKTtcclxuLy8gJChcIi5zdHlsZS1ibG9jayBoNSBiXCIpLmVhY2goZnVuY3Rpb24gKG4pIHtcclxuLy8gXHR2YXIgX21lID0gJCh0aGlzKSxcclxuLy8gXHRfZGwgPSAkKFwiLnN0eWxlLWJsb2NrIGRsXCIpLmVxKG4pO1xyXG4vLyBcdF9tZS5pbml0VmFsdWUgPSBmYWxzZTtcclxuLy8gXHRfbWUuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gXHRcdGlmIChfZGwuY3NzKFwiZGlzcGxheVwiKSA9PSBcImJsb2NrXCIpIHtcclxuLy8gXHRcdFx0X2RsLnNsaWRlVXAoXCJzbG93XCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gXHRcdFx0XHRzZXRNb3VzZUNsYXNzKFwidG9wMlwiLCBcInRvcFwiKVxyXG4vLyBcdFx0XHR9KTtcclxuLy8gXHRcdH0gZWxzZSB7XHJcbi8vIFx0XHRcdF9kbC5zbGlkZURvd24oXCJzbG93XCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gXHRcdFx0XHRzZXRNb3VzZUNsYXNzKFwidG9wMVwiLCBcIlwiKVxyXG4vLyBcdFx0XHR9KTtcclxuLy8gXHRcdH1cclxuLy8gXHR9KS5iaW5kKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gXHRcdHNldENsYXNzKFwidG9wMVwiLCBcInRvcDJcIik7XHJcbi8vIFx0XHRfbWUuaW5pdFZhbHVlID0gdHJ1ZTtcclxuLy8gXHR9KS5iaW5kKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4vLyBcdFx0c2V0Q2xhc3MoXCJcIiwgXCJ0b3BcIik7XHJcbi8vIFx0XHRfbWUuaW5pdFZhbHVlID0gZmFsc2U7XHJcbi8vIFx0fSk7XHJcbi8vIFx0dmFyIHNldENsYXNzID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuLy8gXHRcdGlmIChfZGwuY3NzKFwiZGlzcGxheVwiKSA9PSBcImJsb2NrXCIpIHtcclxuLy8gXHRcdFx0c2V0TWUoYSk7XHJcbi8vIFx0XHR9IGVsc2Uge1xyXG4vLyBcdFx0XHRzZXRNZShiKTtcclxuLy8gXHRcdH1cclxuLy8gXHR9O1xyXG4vLyBcdHZhciBzZXRNb3VzZUNsYXNzID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuLy8gXHRcdGlmIChfbWUuaW5pdFZhbHVlID09IHRydWUpIHtcclxuLy8gXHRcdFx0c2V0TWUoYSk7XHJcbi8vIFx0XHR9IGVsc2Uge1xyXG4vLyBcdFx0XHRzZXRNZShiKTtcclxuLy8gXHRcdH1cclxuLy8gXHR9O1xyXG4vLyBcdHZhciBzZXRNZSA9IGZ1bmN0aW9uIChhKSB7XHJcbi8vIFx0XHRfbWUucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcyhhKTtcclxuLy8gXHR9XHJcbi8vIH0pO1xyXG5cclxuJChcIi5zdHlsZS1ibG9jayBkbCBkdCBoNVwiKS5vbignY2xpY2snLGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGUgPSAkKHRoaXMpO1xyXG5cclxuICAgIHZhciB0ID0gZS5wYXJlbnQoJ2R0JykubmV4dCgnZGQnKTtcclxuICAgIGlmIChlLmhhc0NsYXNzKFwiZXhwYW5kZWRcIikpIHtcclxuICAgICAgICBlLnJlbW92ZUNsYXNzKFwiZXhwYW5kZWRcIik7XHJcbiAgICAgICAgdC5zbGlkZVVwKFwic2xvd1wiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGUuYWRkQ2xhc3MoXCJleHBhbmRlZFwiKTtcclxuICAgICAgICB0LnNsaWRlRG93bihcInNsb3dcIik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuJChcIi5zdHlsZS1ibG9jayAubW9yZS1maWx0ZXJcIikub24oJ2NsaWNrJyxmdW5jdGlvbigpIHtcclxuICAgIHZhciBlID0gJCh0aGlzKTtcclxuICAgIGUuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImZpbHRlckhpZGVcIik7XHJcbiAgICBlLmhpZGUoKTtcclxufSk7XHJcblxyXG4kKFwiLnN0eWxlLWJsb2NrIGRkIC5tb3JlXCIpLm9uKCdjbGljaycsZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZSA9ICQodGhpcyk7XHJcbiAgICB2YXIgdGV4dCA9IGUudG9nZ2xlQ2xhc3MoXCJsZXNzXCIpLmhhc0NsYXNzKFwibGVzc1wiKSA/IF9sYW5nLnBhZ2VfY29tbW9uX2xlc3MgOiBfbGFuZy5wYWdlX2NvbW1vbl9tb3JlO1xyXG4gICAgZS5jaGlsZHJlbignLm1vcmVfdGV4dCcpLnRleHQodGV4dCk7XHJcbiAgICB2YXIgdCA9IGUucGFyZW50KCk7XHJcbiAgICBpZiAoZS5oYXNDbGFzcyhcImxlc3NcIikpIHtcclxuICAgICAgICB0LmNoaWxkcmVuKFwiLm1vcmVIaWRkZW5cIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdC5jaGlsZHJlbihcIi5tb3JlSGlkZGVuXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbiQoXCIuc2hvd0xpbmtcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZSA9ICQodGhpcyk7XHJcbiAgICBpZiAoZS50b2dnbGVDbGFzcyhcInZpZXdBbGxcIikuaGFzQ2xhc3MoXCJ2aWV3QWxsXCIpKSB7XHJcbiAgICAgICAkKFwiLm1vcmVIaWRkZW5cIikuc2hvdygpO1xyXG4gICAgICAgZS5jaGlsZHJlbignLmJ0blRleHQnKS50ZXh0KF9sYW5nLnBhZ2VfbGlzdF9oaWRlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAkKFwiLm1vcmVIaWRkZW5cIikuaGlkZSgpO1xyXG4gICAgICAgZS5jaGlsZHJlbignLmJ0blRleHQnKS50ZXh0KF9sYW5nLnBhZ2VfbGlzdF92aWV3X2FsbCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxudmFyIGNvbG9yZmlsdGVyID0gJChcIi5jb2xvcmZpbHRlclwiKTtcclxuaWYgKCF1c2VyQWdlbnQuaXNJcGFkKCkpIHsgLy8gaXBhZCBuZWVkIGNsaWNrIDIgdGltZXMgaWYgaGFzIGhvdmVyXHJcbiAgICBjb2xvcmZpbHRlci5kZWxlZ2F0ZSgnLmNvbG9yTGluayBhJywgJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5jb2xvckFsdCcpLnNob3coKTtcclxuICAgIH0pO1xyXG4gICAgY29sb3JmaWx0ZXIuZGVsZWdhdGUoJy5jb2xvckxpbmsgYScsICdtb3VzZW91dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5jb2xvckFsdCcpLmhpZGUoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vL2NvbG9yZmlsdGVyLmRlbGVnYXRlKCcuY29sb3JMaW5rIGEnLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICQodGhpcykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbi8vfSk7XHJcblxyXG4kKFwiLmltZ3NpemVzY3JvbGwgYVwiKS5tb3VzZW92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdGlwID0gJChcIi5pbWdTaXplVGlwXCIpO1xyXG4gICAgdmFyIGFycm93ID0gJChcIi5pbWdTaXplQXJyb3dcIik7XHJcbiAgICB2YXIgaW1nVGlwQ29udGVudCA9ICQodGhpcykuY2hpbGRyZW4oXCIuc2tpcnRzaXplXCIpLmF0dHIoJ2RhdGEtbmFtZScpO1xyXG4gICAgdmFyIGltZ1BhcmVudFBvc2l0aW9uID0gJChcIi5pbWdzaXplc2Nyb2xsXCIpLnBvc2l0aW9uKCk7XHJcbiAgICB2YXIgaW1nUG9zaXRpb24gPSAkKHRoaXMpLnBvc2l0aW9uKCk7XHJcblxyXG4gICAgdmFyIHRpcE9mZnNldFggPSAtMTI7XHJcbiAgICB2YXIgYXJyb3dPZmZzZXRYID0gMjU7XHJcbiAgICB2YXIgdGlwT2Zmc2V0WSA9IDY0O1xyXG4gICAgdmFyIGFycm93T2Zmc2V0WSA9IDU5O1xyXG5cclxuICAgIHZhciB0aXBMZWZ0ID0gaW1nUGFyZW50UG9zaXRpb24ubGVmdCArIGltZ1Bvc2l0aW9uLmxlZnQgKyB0aXBPZmZzZXRYO1xyXG4gICAgdmFyIGFycm93TGVmdCA9IGltZ1BhcmVudFBvc2l0aW9uLmxlZnQgKyBpbWdQb3NpdGlvbi5sZWZ0ICsgYXJyb3dPZmZzZXRYO1xyXG4gICAgdmFyIHRpcFRvcCA9IGltZ1BhcmVudFBvc2l0aW9uLnRvcCArIGltZ1Bvc2l0aW9uLnRvcCArIHRpcE9mZnNldFk7XHJcbiAgICB2YXIgYXJyb3dUb3AgPSBpbWdQYXJlbnRQb3NpdGlvbi50b3AgKyBpbWdQb3NpdGlvbi50b3AgKyBhcnJvd09mZnNldFk7XHJcblxyXG4gICAgdGlwLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCIsIFwidG9wXCI6IHRpcFRvcCwgXCJsZWZ0XCI6IHRpcExlZnQsIFwiei1pbmRleFwiOiBcIjk5OTlcIn0pO1xyXG4gICAgdGlwLnRleHQoaW1nVGlwQ29udGVudCk7XHJcbiAgICBhcnJvdy5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLCBcInRvcFwiOiBhcnJvd1RvcCwgXCJsZWZ0XCI6IGFycm93TGVmdCwgXCJ6LWluZGV4XCI6IFwiOTk5OVwifSk7XHJcbn0pO1xyXG5cclxuJChcIi5pbWdzaXplc2Nyb2xsIGFcIikubW91c2VvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLmltZ1NpemVUaXBcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAkKFwiLmltZ1NpemVBcnJvd1wiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxufSk7XHJcblxyXG4kKFwiLmltZ3NoYXBlc2Nyb2xsIGFcIikubW91c2VvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHRpcCA9ICQoXCIuaW1nU2hhcGVUaXBcIik7XHJcbiAgICB2YXIgYXJyb3cgPSAkKFwiLmltZ1NoYXBlQXJyb3dcIik7XHJcbiAgICB2YXIgaW1nVGlwQ29udGVudCA9ICQodGhpcykuY2hpbGRyZW4oJy5zaWxob3VldHRlJykuYXR0cignZGF0YS1uYW1lJyk7XHJcbiAgICB2YXIgaW1nUGFyZW50UG9zaXRpb24gPSAkKFwiLmltZ3NoYXBlc2Nyb2xsXCIpLnBvc2l0aW9uKCk7XHJcbiAgICB2YXIgaW1nUG9zaXRpb24gPSAkKHRoaXMpLnBvc2l0aW9uKCk7XHJcblxyXG4gICAgdmFyIHRpcE9mZnNldFggPSAtMTI7XHJcbiAgICB2YXIgYXJyb3dPZmZzZXRYID0gMjU7XHJcbiAgICB2YXIgdGlwT2Zmc2V0WSA9IDY0O1xyXG4gICAgdmFyIGFycm93T2Zmc2V0WSA9IDU5O1xyXG5cclxuICAgIHZhciB0aXBMZWZ0ID0gaW1nUGFyZW50UG9zaXRpb24ubGVmdCArIGltZ1Bvc2l0aW9uLmxlZnQgKyB0aXBPZmZzZXRYO1xyXG4gICAgdmFyIGFycm93TGVmdCA9IGltZ1BhcmVudFBvc2l0aW9uLmxlZnQgKyBpbWdQb3NpdGlvbi5sZWZ0ICsgYXJyb3dPZmZzZXRYO1xyXG4gICAgdmFyIHRpcFRvcCA9IGltZ1BhcmVudFBvc2l0aW9uLnRvcCArIGltZ1Bvc2l0aW9uLnRvcCArIHRpcE9mZnNldFk7XHJcbiAgICB2YXIgYXJyb3dUb3AgPSBpbWdQYXJlbnRQb3NpdGlvbi50b3AgKyBpbWdQb3NpdGlvbi50b3AgKyBhcnJvd09mZnNldFk7XHJcblxyXG4gICAgdGlwLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCIsIFwidG9wXCI6IHRpcFRvcCwgXCJsZWZ0XCI6IHRpcExlZnQsIFwiei1pbmRleFwiOiBcIjk5OTlcIn0pO1xyXG4gICAgdGlwLnRleHQoaW1nVGlwQ29udGVudCk7XHJcbiAgICBhcnJvdy5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLCBcInRvcFwiOiBhcnJvd1RvcCwgXCJsZWZ0XCI6IGFycm93TGVmdCwgXCJ6LWluZGV4XCI6IFwiOTk5OVwifSk7XHJcbn0pO1xyXG5cclxuJChcIi5pbWdzaGFwZXNjcm9sbCBhXCIpLm1vdXNlb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIi5pbWdTaGFwZVRpcFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICQoXCIuaW1nU2hhcGVBcnJvd1wiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxufSk7XHJcblxyXG4kKFwiLnNjcm9sbF9uZWNrbGluZSBhXCIpLm1vdXNlb3ZlcihmdW5jdGlvbigpIHtcclxuICAgIHZhciB0aXAgPSAkKFwiLnRpcF9uZWNrbGluZVwiKTtcclxuICAgIHZhciBhcnJvdyA9ICQoXCIuYXJyb3dfbmVja2xpbmVcIik7XHJcbiAgICB2YXIgaW1nVGlwQ29udGVudCA9ICQodGhpcykuY2hpbGRyZW4oJy5uZWNrbGluZScpLmF0dHIoJ2RhdGEtbmFtZScpO1xyXG4gICAgdmFyIGltZ1BhcmVudFBvc2l0aW9uID0gJChcIi5zY3JvbGxfbmVja2xpbmVcIikucG9zaXRpb24oKTtcclxuICAgIHZhciBpbWdQb3NpdGlvbiA9ICQodGhpcykucG9zaXRpb24oKTtcclxuXHJcbiAgICB2YXIgdGlwT2Zmc2V0WCA9IC0xMjtcclxuICAgIHZhciBhcnJvd09mZnNldFggPSAyNTtcclxuICAgIHZhciB0aXBPZmZzZXRZID0gNjQ7XHJcbiAgICB2YXIgYXJyb3dPZmZzZXRZID0gNTk7XHJcblxyXG4gICAgdmFyIHRpcExlZnQgPSBpbWdQYXJlbnRQb3NpdGlvbi5sZWZ0ICsgaW1nUG9zaXRpb24ubGVmdCArIHRpcE9mZnNldFg7XHJcbiAgICB2YXIgYXJyb3dMZWZ0ID0gaW1nUGFyZW50UG9zaXRpb24ubGVmdCArIGltZ1Bvc2l0aW9uLmxlZnQgKyBhcnJvd09mZnNldFg7XHJcbiAgICB2YXIgdGlwVG9wID0gaW1nUGFyZW50UG9zaXRpb24udG9wICsgaW1nUG9zaXRpb24udG9wICsgdGlwT2Zmc2V0WTtcclxuICAgIHZhciBhcnJvd1RvcCA9IGltZ1BhcmVudFBvc2l0aW9uLnRvcCArIGltZ1Bvc2l0aW9uLnRvcCArIGFycm93T2Zmc2V0WTtcclxuXHJcbiAgICB0aXAuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIiwgXCJ0b3BcIjogdGlwVG9wLCBcImxlZnRcIjogdGlwTGVmdCwgXCJ6LWluZGV4XCI6IFwiOTk5OVwifSk7XHJcbiAgICB0aXAudGV4dChpbWdUaXBDb250ZW50KTtcclxuICAgIGFycm93LmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCIsIFwidG9wXCI6IGFycm93VG9wLCBcImxlZnRcIjogYXJyb3dMZWZ0LCBcInotaW5kZXhcIjogXCI5OTk5XCJ9KTtcclxufSk7XHJcblxyXG4kKFwiLnNjcm9sbF9uZWNrbGluZSBhXCIpLm1vdXNlb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIi50aXBfbmVja2xpbmVcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAkKFwiLmFycm93X25lY2tsaW5lXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG59KTtcclxuXHJcbiQoXCIuc2Nyb2xsX3N0cm9yc3RwIGFcIikubW91c2VvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHRpcCA9ICQoXCIudGlwX3N0cm9yc3RwXCIpO1xyXG4gICAgdmFyIGFycm93ID0gJChcIi5hcnJvd19zdHJvcnN0cFwiKTtcclxuICAgIHZhciBpbWdUaXBDb250ZW50ID0gJCh0aGlzKS5jaGlsZHJlbignLnN0cm9yc3RwJykuYXR0cignZGF0YS1uYW1lJyk7XHJcbiAgICB2YXIgaW1nUGFyZW50UG9zaXRpb24gPSAkKFwiLnNjcm9sbF9zdHJvcnN0cFwiKS5wb3NpdGlvbigpO1xyXG4gICAgdmFyIGltZ1Bvc2l0aW9uID0gJCh0aGlzKS5wb3NpdGlvbigpO1xyXG5cclxuICAgIHZhciB0aXBPZmZzZXRYID0gLTEyO1xyXG4gICAgdmFyIGFycm93T2Zmc2V0WCA9IDI1O1xyXG4gICAgdmFyIHRpcE9mZnNldFkgPSA2NDtcclxuICAgIHZhciBhcnJvd09mZnNldFkgPSA1OTtcclxuXHJcbiAgICB2YXIgdGlwTGVmdCA9IGltZ1BhcmVudFBvc2l0aW9uLmxlZnQgKyBpbWdQb3NpdGlvbi5sZWZ0ICsgdGlwT2Zmc2V0WDtcclxuICAgIHZhciBhcnJvd0xlZnQgPSBpbWdQYXJlbnRQb3NpdGlvbi5sZWZ0ICsgaW1nUG9zaXRpb24ubGVmdCArIGFycm93T2Zmc2V0WDtcclxuICAgIHZhciB0aXBUb3AgPSBpbWdQYXJlbnRQb3NpdGlvbi50b3AgKyBpbWdQb3NpdGlvbi50b3AgKyB0aXBPZmZzZXRZO1xyXG4gICAgdmFyIGFycm93VG9wID0gaW1nUGFyZW50UG9zaXRpb24udG9wICsgaW1nUG9zaXRpb24udG9wICsgYXJyb3dPZmZzZXRZO1xyXG5cclxuICAgIHRpcC5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLCBcInRvcFwiOiB0aXBUb3AsIFwibGVmdFwiOiB0aXBMZWZ0LCBcInotaW5kZXhcIjogXCI5OTk5XCJ9KTtcclxuICAgIHRpcC50ZXh0KGltZ1RpcENvbnRlbnQpO1xyXG4gICAgYXJyb3cuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIiwgXCJ0b3BcIjogYXJyb3dUb3AsIFwibGVmdFwiOiBhcnJvd0xlZnQsIFwiei1pbmRleFwiOiBcIjk5OTlcIn0pO1xyXG59KTtcclxuXHJcbiQoXCIuc2Nyb2xsX3N0cm9yc3RwIGFcIikubW91c2VvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLnRpcF9zdHJvcnN0cFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICQoXCIuYXJyb3dfc3Ryb3JzdHBcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbn0pO1xyXG5cclxudmFyIGNvdW50SW1nID0gJChcIi5pbWdzaXplc2Nyb2xsIGFcIikubGVuZ3RoO1xyXG5pZiAoY291bnRJbWcgPiA5KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50SW1nOyBpKyspIHtcclxuICAgICAgICBpZiAoJChcIi5pbWdzaXplc2Nyb2xsIGFcIikuZXEoaSkuYXR0cihcImNsYXNzXCIpID09IFwic2VsZWN0ZWRcIikge1xyXG4gICAgICAgICAgICBpZiAoaSA+IDgpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuaW1nc2l6ZXNjcm9sbFwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKCcuaW1nc2l6ZXNjcm9sbCcpLnByb3AoXCJzY3JvbGxIZWlnaHRcIil9LCAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vc2FtcGxlLWRyZXNzIHNhbGUtc2l6ZSBub3RpY2VcclxudmFyIENvb2tpZSA9IHJlcXVpcmUoJy4uL21vZC9jb29raWUnKTtcclxudmFyIGNvb2tpZSA9IG5ldyBDb29raWUoKTtcclxudmFyIGNvb2tpZUtleSA9ICdzYW1wbGUtZHJlc3MtZml0LW5vdGlmeS10ZXN0JztcclxuLy9vbmUgZGF5XHJcbnZhciBjb29raWVUaW1lID0gMTtcclxuaWYoIWNvb2tpZS5nZXRDb29raWUoY29va2llS2V5KSkge1xyXG4gICAgdmFyIFNhbXBsZURyZXNzU2FsZVNpemUgPSAkKCcjbGVmdC1maWx0ZXItbmF2JykuZmluZCgnI3NhbGUtc2l6ZS1maWx0ZXInKTtcclxuICAgIHZhciBzYW1wbGVEcmVzc05vdGljZURpYWxvZyA9ICQoJyNzYW1wbGUtZHJlc3MtZmlsdGVyLW5vdGljZScpO1xyXG4gICAgaWYoc2FtcGxlRHJlc3NOb3RpY2VEaWFsb2cubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGxheWVyID0gJCgnPGRpdiBpZD1cImRpYWxvZ092ZXJsYXlcIj48ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDpyZ2IoMCwwLDAuMSk7b3BhY2l0eTogMC41XCI+PC9kaXY+PC9kaXY+JykucHJlcGVuZFRvKCdib2R5Jyk7XHJcblxyXG4gICAgICAgIHNhbXBsZURyZXNzTm90aWNlRGlhbG9nLmZpbmQoJ2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGF5ZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICBzYW1wbGVEcmVzc05vdGljZURpYWxvZy5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICAgICAgIGlmKFNhbXBsZURyZXNzU2FsZVNpemUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBTYW1wbGVEcmVzc1NhbGVTaXplLmFkZENsYXNzKCdzYWxlLXNpemUtYW5pbWF0ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBsYXllci5zaG93KDAuMixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXRDb29raWUoY29va2llS2V5LCd0ZXN0Q29va2llJyxjb29raWVUaW1lKTtcclxuICAgICAgICAgICAgc2FtcGxlRHJlc3NOb3RpY2VEaWFsb2cuY3NzKCdkaXNwbGF5JywnZmxleCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
},{"../mod/cookie":12,"../mod/userAgent":22}],2:[function(require,module,exports){
(function (global){
//define(function (require, exports, module) {

	var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
	
	$('#orderby').change(function(){
		location.href = $(this).val();
	});

//});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvY2F0ZWdvcnkvb3JkZXJieS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8vZGVmaW5lKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHtcclxuXHJcblx0dmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcblx0XHJcblx0JCgnI29yZGVyYnknKS5jaGFuZ2UoZnVuY3Rpb24oKXtcclxuXHRcdGxvY2F0aW9uLmhyZWYgPSAkKHRoaXMpLnZhbCgpO1xyXG5cdH0pO1xyXG5cclxuLy99KTtcclxuIl19
},{}],3:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var UserAgent = require('../mod/userAgent');
var userAgent = new UserAgent();
var StringHandle = require('../mod/stringHandle');
var stringHandle = new StringHandle();
var Cookie = require('../mod/cookie');
var cookie = new Cookie();

var status = {
    loadingGoodsInFavor : false,
    loadedGoodsInFavor : false,
    favorIsEmpty : true,
    mouseIsInFavorIcon : false
};

var favorIcon = $("#js-favor-icon");
var list = favorIcon.find(".nav-favor-desc");
var showRoomList = favorIcon.find(".showroom-list");
var navFavorite = favorIcon.find(".nav-favorite");

var userFavorCount = function() {
    $.ajax({
        'type': 'POST',
        'url': webData.WEB_ROOT + 'ajax.php',
        'data': 'act=get_default_showroom_goods_count',
        'dataType': 'json',
        'success': function (r) {
            if (r.code === 0 && r.count > 0) {
                $("#js-user-favor-count").html(r.count);
                $("#js-user-favor-count").show();
            }
        }
    });
};

var displayFavorList = function () {
    $('.tip-arrow').css('display','none');
    $('.showroom-tip').css('display','none');
    var favorCount = parseInt($('#favorGoodsTotal').html());
    if(favorCount <= 0){
        favorIcon.addClass("over");
    }
};

var hideFavorList = function () {
    status.mouseIsInFavorIcon = false;
    favorIcon.removeClass("over");
    showRoomList.css('display','none');
};

function openShowroomDialog() {
    if ($('#dialogOverlay').size() > 0) {
        var layer = $('#dialogOverlay');
    } else {
        var layer = $('<div id="dialogOverlay"><div style="background:rgb(0,0,0);"></div></div>').prependTo('body');
    };

    layer.show().children('div').stop().fadeTo(0, 0.1).fadeTo("fast", 0.5);

    $(".showroom-dialog").css("display", "block");
    $('#loginDialog').css('display','none');
    var clientHeight = window.innerHeight ;
    if(clientHeight > 650){
        $(".showroom-dialog").css("top",$(window).scrollTop() + $(window).height() / 7);
    }else{
        $(".showroom-dialog").css("top",$(window).scrollTop());
    }
};

var init = function () {
    // var isShowDialog = cookie.getCookie('HowItWork') ? cookie.getCookie('HowItWork') : false;
    // if (isShowDialog) {
    //     openShowroomDialog();
    //     cookie.setCookie('HowItWork', false, -1);
    // }
    // userFavorCount();
    favorIcon.hover(displayFavorList, function () {
        hideFavorList();
    });

    $('.showroom-dialog-close').on("click",function () {
        $(".showroom-dialog").css("display", "none");
        $('#dialogOverlay').css("display", "none");
    });

    $('.showroom-work-explain').on('mouseenter',function () {
        $('.explain-showroom-content').css("display","block");
    });

    $('.showroom-work-explain').on('mouseleave',function () {
        $('.explain-showroom-content').css("display","none");
    });

    initShowRoomList();
    initCreateShowRoom();

};

var initShowRoomList = function () {
    var param = {
        "act": "get_user_showroom_list",
    }
    $.ajax({
        'type': 'get',
        'url': webData.WEB_ROOT + 'ajax.php',
        'data': param,
        'cache': true,
        'dataType': 'json',
        'success': function (r) {
            if (r.code == 0) {
                var showroom_list = "";
                var otherShowroom = ""
                var defaultShowroom = ""
                var web_root = webData.WEB_ROOT || "/"
                var orignName = _lang.page_showroom_name || "{$sh_name}'s showroom"
                for (var i = 0;i<r.showroom_list.length;i++) {

                    //ellipsis the sh_name which is too long, it makes "aaaaaaaaaaaaaaaaaa's Showroom" to "aaaaaaaaaa...'s Showroom"
                    if(r.showroom_list[i]["sh_name"].length > 18)
                    {
                        r.showroom_list[i]["sh_name"] = r.showroom_list[i]["sh_name"].substr(0,15) + "..."
                    }

                    var name = orignName.replace("{$sh_name}", r.showroom_list[i]['sh_name'])
                    if (r.showroom_list[i]['is_default'] == 1) {
                        defaultShowroom = "<a class=\"default-showroom\" href=\"" + web_root + "showroom.php?id=" + r.showroom_list[i]['sh_id'] + "\">" + name + "</a>";
                    } else {
                        otherShowroom += "<a href=\"" + web_root + "showroom.php?id=" + r.showroom_list[i]['sh_id'] + "\">" + name + "</a>";
                    }
                }
                showroom_list += defaultShowroom + otherShowroom
                $('.user-showroom-list').html(showroom_list);
                if (r.self_showroom_count >= 3) {
                    $('.create-showroom').css('display','none');
                } else {
                    $('.create-showroom').css('display','block');
                }
            }
        }
    });
}

var initCreateShowRoom = function () {
    $('.create-showroom').on("click",function () {
        if (window.login_status === true) {
            openShowroomDialog();
        }
    });
}

var initActiveShowRoom = function () {
    var param = {
        "act": "get_active_showroom",
    }
    $.ajax({
        'type': 'get',
        'url': webData.WEB_ROOT + 'ajax.php',
        'data': param,
        'cache': true,
        'dataType': 'json',
        'success': function (r) {
            if (r.code == 0) {
                $('.favorite-link').find('.nologin-text').css("display", "none");
                $('.favorite-link').find('.showroom-text').css("display","block");
                $('.favorite-link').find('.showroom-text').text(r.data);
                $('.showroom-default-text').css("display","block");
                // $('.favorite-link').attr("href","/showroom.php");

                var width = $('.favorite-link').find('.showroom-text').width();
                var dwidth = $('.showroom-default-text').width();
                if (width+dwidth > 59) {
                    var dvalue = width+dwidth-59;
                    $('.nav-favorite').css('width',120+dvalue);
                    $('#js-favor-icon').css('right',120+dvalue);
                    $('.header-right').css('right',165+dvalue);
                }
                $('.nav-favorite').find('em').addClass('account-more');
            }
        }
    });
};

var disableLoaded = function () {
    status.loadedGoodsInFavor = false;
};

var pop = function () {
    displayFavorList();
};
module.exports = {
    "init": init,
    "disableLoaded": disableLoaded,
    "pop": pop,
    "initShowRoomList": initShowRoomList,
    "initActiveShowRoom": initActiveShowRoom,
    "initCreateShowRoom": initCreateShowRoom
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvY29tbW9uL2Zhdm9yX3F1aWNrX2Rpc3BsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcblxyXG52YXIgVXNlckFnZW50ID0gcmVxdWlyZSgnLi4vbW9kL3VzZXJBZ2VudCcpO1xyXG52YXIgdXNlckFnZW50ID0gbmV3IFVzZXJBZ2VudCgpO1xyXG52YXIgU3RyaW5nSGFuZGxlID0gcmVxdWlyZSgnLi4vbW9kL3N0cmluZ0hhbmRsZScpO1xyXG52YXIgc3RyaW5nSGFuZGxlID0gbmV3IFN0cmluZ0hhbmRsZSgpO1xyXG52YXIgQ29va2llID0gcmVxdWlyZSgnLi4vbW9kL2Nvb2tpZScpO1xyXG52YXIgY29va2llID0gbmV3IENvb2tpZSgpO1xyXG5cclxudmFyIHN0YXR1cyA9IHtcclxuICAgIGxvYWRpbmdHb29kc0luRmF2b3IgOiBmYWxzZSxcclxuICAgIGxvYWRlZEdvb2RzSW5GYXZvciA6IGZhbHNlLFxyXG4gICAgZmF2b3JJc0VtcHR5IDogdHJ1ZSxcclxuICAgIG1vdXNlSXNJbkZhdm9ySWNvbiA6IGZhbHNlXHJcbn07XHJcblxyXG52YXIgZmF2b3JJY29uID0gJChcIiNqcy1mYXZvci1pY29uXCIpO1xyXG52YXIgbGlzdCA9IGZhdm9ySWNvbi5maW5kKFwiLm5hdi1mYXZvci1kZXNjXCIpO1xyXG52YXIgc2hvd1Jvb21MaXN0ID0gZmF2b3JJY29uLmZpbmQoXCIuc2hvd3Jvb20tbGlzdFwiKTtcclxudmFyIG5hdkZhdm9yaXRlID0gZmF2b3JJY29uLmZpbmQoXCIubmF2LWZhdm9yaXRlXCIpO1xyXG5cclxudmFyIHVzZXJGYXZvckNvdW50ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgICd0eXBlJzogJ1BPU1QnLFxyXG4gICAgICAgICd1cmwnOiB3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwJyxcclxuICAgICAgICAnZGF0YSc6ICdhY3Q9Z2V0X2RlZmF1bHRfc2hvd3Jvb21fZ29vZHNfY291bnQnLFxyXG4gICAgICAgICdkYXRhVHlwZSc6ICdqc29uJyxcclxuICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIGlmIChyLmNvZGUgPT09IDAgJiYgci5jb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICQoXCIjanMtdXNlci1mYXZvci1jb3VudFwiKS5odG1sKHIuY291bnQpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNqcy11c2VyLWZhdm9yLWNvdW50XCIpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxudmFyIGRpc3BsYXlGYXZvckxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcudGlwLWFycm93JykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgJCgnLnNob3dyb29tLXRpcCcpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgIHZhciBmYXZvckNvdW50ID0gcGFyc2VJbnQoJCgnI2Zhdm9yR29vZHNUb3RhbCcpLmh0bWwoKSk7XHJcbiAgICBpZihmYXZvckNvdW50IDw9IDApe1xyXG4gICAgICAgIGZhdm9ySWNvbi5hZGRDbGFzcyhcIm92ZXJcIik7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgaGlkZUZhdm9yTGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHN0YXR1cy5tb3VzZUlzSW5GYXZvckljb24gPSBmYWxzZTtcclxuICAgIGZhdm9ySWNvbi5yZW1vdmVDbGFzcyhcIm92ZXJcIik7XHJcbiAgICBzaG93Um9vbUxpc3QuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gb3BlblNob3dyb29tRGlhbG9nKCkge1xyXG4gICAgaWYgKCQoJyNkaWFsb2dPdmVybGF5Jykuc2l6ZSgpID4gMCkge1xyXG4gICAgICAgIHZhciBsYXllciA9ICQoJyNkaWFsb2dPdmVybGF5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBsYXllciA9ICQoJzxkaXYgaWQ9XCJkaWFsb2dPdmVybGF5XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiKDAsMCwwKTtcIj48L2Rpdj48L2Rpdj4nKS5wcmVwZW5kVG8oJ2JvZHknKTtcclxuICAgIH07XHJcblxyXG4gICAgbGF5ZXIuc2hvdygpLmNoaWxkcmVuKCdkaXYnKS5zdG9wKCkuZmFkZVRvKDAsIDAuMSkuZmFkZVRvKFwiZmFzdFwiLCAwLjUpO1xyXG5cclxuICAgICQoXCIuc2hvd3Jvb20tZGlhbG9nXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICQoJyNsb2dpbkRpYWxvZycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgIHZhciBjbGllbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgO1xyXG4gICAgaWYoY2xpZW50SGVpZ2h0ID4gNjUwKXtcclxuICAgICAgICAkKFwiLnNob3dyb29tLWRpYWxvZ1wiKS5jc3MoXCJ0b3BcIiwkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCkgLyA3KTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICQoXCIuc2hvd3Jvb20tZGlhbG9nXCIpLmNzcyhcInRvcFwiLCQod2luZG93KS5zY3JvbGxUb3AoKSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIHZhciBpc1Nob3dEaWFsb2cgPSBjb29raWUuZ2V0Q29va2llKCdIb3dJdFdvcmsnKSA/IGNvb2tpZS5nZXRDb29raWUoJ0hvd0l0V29yaycpIDogZmFsc2U7XHJcbiAgICAvLyBpZiAoaXNTaG93RGlhbG9nKSB7XHJcbiAgICAvLyAgICAgb3BlblNob3dyb29tRGlhbG9nKCk7XHJcbiAgICAvLyAgICAgY29va2llLnNldENvb2tpZSgnSG93SXRXb3JrJywgZmFsc2UsIC0xKTtcclxuICAgIC8vIH1cclxuICAgIC8vIHVzZXJGYXZvckNvdW50KCk7XHJcbiAgICBmYXZvckljb24uaG92ZXIoZGlzcGxheUZhdm9yTGlzdCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGhpZGVGYXZvckxpc3QoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5zaG93cm9vbS1kaWFsb2ctY2xvc2UnKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuc2hvd3Jvb20tZGlhbG9nXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICQoJyNkaWFsb2dPdmVybGF5JykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuc2hvd3Jvb20td29yay1leHBsYWluJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuZXhwbGFpbi1zaG93cm9vbS1jb250ZW50JykuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuc2hvd3Jvb20td29yay1leHBsYWluJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuZXhwbGFpbi1zaG93cm9vbS1jb250ZW50JykuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGluaXRTaG93Um9vbUxpc3QoKTtcclxuICAgIGluaXRDcmVhdGVTaG93Um9vbSgpO1xyXG5cclxufTtcclxuXHJcbnZhciBpbml0U2hvd1Jvb21MaXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHBhcmFtID0ge1xyXG4gICAgICAgIFwiYWN0XCI6IFwiZ2V0X3VzZXJfc2hvd3Jvb21fbGlzdFwiLFxyXG4gICAgfVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICAndHlwZSc6ICdnZXQnLFxyXG4gICAgICAgICd1cmwnOiB3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwJyxcclxuICAgICAgICAnZGF0YSc6IHBhcmFtLFxyXG4gICAgICAgICdjYWNoZSc6IHRydWUsXHJcbiAgICAgICAgJ2RhdGFUeXBlJzogJ2pzb24nLFxyXG4gICAgICAgICdzdWNjZXNzJzogZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgaWYgKHIuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2hvd3Jvb21fbGlzdCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3RoZXJTaG93cm9vbSA9IFwiXCJcclxuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0U2hvd3Jvb20gPSBcIlwiXHJcbiAgICAgICAgICAgICAgICB2YXIgd2ViX3Jvb3QgPSB3ZWJEYXRhLldFQl9ST09UIHx8IFwiL1wiXHJcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ25OYW1lID0gX2xhbmcucGFnZV9zaG93cm9vbV9uYW1lIHx8IFwieyRzaF9uYW1lfSdzIHNob3dyb29tXCJcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwO2k8ci5zaG93cm9vbV9saXN0Lmxlbmd0aDtpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9lbGxpcHNpcyB0aGUgc2hfbmFtZSB3aGljaCBpcyB0b28gbG9uZywgaXQgbWFrZXMgXCJhYWFhYWFhYWFhYWFhYWFhYWEncyBTaG93cm9vbVwiIHRvIFwiYWFhYWFhYWFhYS4uLidzIFNob3dyb29tXCJcclxuICAgICAgICAgICAgICAgICAgICBpZihyLnNob3dyb29tX2xpc3RbaV1bXCJzaF9uYW1lXCJdLmxlbmd0aCA+IDE4KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgci5zaG93cm9vbV9saXN0W2ldW1wic2hfbmFtZVwiXSA9IHIuc2hvd3Jvb21fbGlzdFtpXVtcInNoX25hbWVcIl0uc3Vic3RyKDAsMTUpICsgXCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBvcmlnbk5hbWUucmVwbGFjZShcInskc2hfbmFtZX1cIiwgci5zaG93cm9vbV9saXN0W2ldWydzaF9uYW1lJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIuc2hvd3Jvb21fbGlzdFtpXVsnaXNfZGVmYXVsdCddID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFNob3dyb29tID0gXCI8YSBjbGFzcz1cXFwiZGVmYXVsdC1zaG93cm9vbVxcXCIgaHJlZj1cXFwiXCIgKyB3ZWJfcm9vdCArIFwic2hvd3Jvb20ucGhwP2lkPVwiICsgci5zaG93cm9vbV9saXN0W2ldWydzaF9pZCddICsgXCJcXFwiPlwiICsgbmFtZSArIFwiPC9hPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyU2hvd3Jvb20gKz0gXCI8YSBocmVmPVxcXCJcIiArIHdlYl9yb290ICsgXCJzaG93cm9vbS5waHA/aWQ9XCIgKyByLnNob3dyb29tX2xpc3RbaV1bJ3NoX2lkJ10gKyBcIlxcXCI+XCIgKyBuYW1lICsgXCI8L2E+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2hvd3Jvb21fbGlzdCArPSBkZWZhdWx0U2hvd3Jvb20gKyBvdGhlclNob3dyb29tXHJcbiAgICAgICAgICAgICAgICAkKCcudXNlci1zaG93cm9vbS1saXN0JykuaHRtbChzaG93cm9vbV9saXN0KTtcclxuICAgICAgICAgICAgICAgIGlmIChyLnNlbGZfc2hvd3Jvb21fY291bnQgPj0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5jcmVhdGUtc2hvd3Jvb20nKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5jcmVhdGUtc2hvd3Jvb20nKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbnZhciBpbml0Q3JlYXRlU2hvd1Jvb20gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuY3JlYXRlLXNob3dyb29tJykub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAod2luZG93LmxvZ2luX3N0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBvcGVuU2hvd3Jvb21EaWFsb2coKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxudmFyIGluaXRBY3RpdmVTaG93Um9vbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwYXJhbSA9IHtcclxuICAgICAgICBcImFjdFwiOiBcImdldF9hY3RpdmVfc2hvd3Jvb21cIixcclxuICAgIH1cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgJ3R5cGUnOiAnZ2V0JyxcclxuICAgICAgICAndXJsJzogd2ViRGF0YS5XRUJfUk9PVCArICdhamF4LnBocCcsXHJcbiAgICAgICAgJ2RhdGEnOiBwYXJhbSxcclxuICAgICAgICAnY2FjaGUnOiB0cnVlLFxyXG4gICAgICAgICdkYXRhVHlwZSc6ICdqc29uJyxcclxuICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIGlmIChyLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmZhdm9yaXRlLWxpbmsnKS5maW5kKCcubm9sb2dpbi10ZXh0JykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAkKCcuZmF2b3JpdGUtbGluaycpLmZpbmQoJy5zaG93cm9vbS10ZXh0JykuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICAkKCcuZmF2b3JpdGUtbGluaycpLmZpbmQoJy5zaG93cm9vbS10ZXh0JykudGV4dChyLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNob3dyb29tLWRlZmF1bHQtdGV4dCcpLmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gJCgnLmZhdm9yaXRlLWxpbmsnKS5hdHRyKFwiaHJlZlwiLFwiL3Nob3dyb29tLnBocFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSAkKCcuZmF2b3JpdGUtbGluaycpLmZpbmQoJy5zaG93cm9vbS10ZXh0Jykud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIHZhciBkd2lkdGggPSAkKCcuc2hvd3Jvb20tZGVmYXVsdC10ZXh0Jykud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIGlmICh3aWR0aCtkd2lkdGggPiA1OSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkdmFsdWUgPSB3aWR0aCtkd2lkdGgtNTk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm5hdi1mYXZvcml0ZScpLmNzcygnd2lkdGgnLDEyMCtkdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNqcy1mYXZvci1pY29uJykuY3NzKCdyaWdodCcsMTIwK2R2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhlYWRlci1yaWdodCcpLmNzcygncmlnaHQnLDE2NStkdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJCgnLm5hdi1mYXZvcml0ZScpLmZpbmQoJ2VtJykuYWRkQ2xhc3MoJ2FjY291bnQtbW9yZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG52YXIgZGlzYWJsZUxvYWRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHN0YXR1cy5sb2FkZWRHb29kc0luRmF2b3IgPSBmYWxzZTtcclxufTtcclxuXHJcbnZhciBwb3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBkaXNwbGF5RmF2b3JMaXN0KCk7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgXCJpbml0XCI6IGluaXQsXHJcbiAgICBcImRpc2FibGVMb2FkZWRcIjogZGlzYWJsZUxvYWRlZCxcclxuICAgIFwicG9wXCI6IHBvcCxcclxuICAgIFwiaW5pdFNob3dSb29tTGlzdFwiOiBpbml0U2hvd1Jvb21MaXN0LFxyXG4gICAgXCJpbml0QWN0aXZlU2hvd1Jvb21cIjogaW5pdEFjdGl2ZVNob3dSb29tLFxyXG4gICAgXCJpbml0Q3JlYXRlU2hvd1Jvb21cIjogaW5pdENyZWF0ZVNob3dSb29tXHJcbn07Il19
},{"../mod/cookie":12,"../mod/stringHandle":21,"../mod/userAgent":22}],4:[function(require,module,exports){
(function (global){
//define(function (require, exports, module) {

var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var Favorites = require('../mod/favorites');
var favorites = new Favorites();
var Cookie = require('../mod/cookie');
var cookie = new Cookie();

var addFavCount = function(favCount) {
    $('#favorGoodsTotal').html(favCount);
}

// hanlder_add2fav2 for detail page
var hanlder_add2fav2 = function (me, favCount) {
    addFavCount(favCount);
    $('#add2fav2').removeClass('processing').removeClass('add2fav2').addClass('existingFav2');
    cookie.setCookie('favGoodsId', 0, -1);
};

//delete favor for detail page
var delete_favor2 = function (me, favCount) {
    addFavCount(favCount);
    $('#add2fav2').removeClass('processing').removeClass('existingFav2').addClass('add2fav2');
    cookie.setCookie('favGoodsId', 0, -1);
};

// handle_favor for liat page and search page
var hanlder_favor = function(me, favCount){
    addFavCount(favCount);
    me.removeClass("favor_unselected").addClass("favor_select");
    cookie.setCookie('favGoodsId', 0, -1);
};

//delete favor for list page and search page
var delete_favor = function(me, favCount) {
    addFavCount(favCount);
    me.removeClass("favor_select").addClass("favor_unselected");
    cookie.setCookie('favGoodsId', 0, -1);
}

var refreshFavorites = function () {
    // detail page
    if (!$.isEmptyObject(pageData) && pageData.js_key == 'goods') {
        favorites.refreshFavorites($('.add2fav2'));
    }

    // list page
    if (!$.isEmptyObject(pageData) && pageData.js_key == 'category') {
        favorites.refreshFavorites($('.catpl-prod div .rating-favor .favor_product_page'));
    }

    // search page
    if (!$.isEmptyObject(pageData) && pageData.js_key == 'search') {
        favorites.refreshFavorites($('.catpl-prod .rating-favor .favor_product_page'));
    }

    // addOnItem page
    if (!$.isEmptyObject(pageData) && pageData.js_key == 'recommend_picks') {
        favorites.refreshFavorites($('.catpl-prod .rating-favor .favor_product_page'));
    }

    // landing page
    if (!$.isEmptyObject(pageData) && pageData.js_key == 'landing_page') {
        favorites.refreshFavorites($('.catpl-prod .rating-favor .favor_product_page'));
    }
}

var bindFavEvent = function () {
    var jumpUrl = document.URL.replace('#.*$', '');
    $(document).on('click', '.favor_product_page',function () {
        var me = $(this);
        if (me.hasClass('favor_unselected')) {
            var PopLogin = require('../mod/popLogin');
            var popLogin = new PopLogin();
            var me = $(this);
            var goods_id = me.attr('data-goodsId');
            if (window.login_status === false) {
                cookie.setCookie('favGoodsId', goods_id, 1);
            }
            popLogin.requestFloatingSign(function () {
                favorites.addFav(goods_id, hanlder_favor, me);
            }, jumpUrl);
        } else {
            var tips = _lang.page_delete_showroom_good;
            var rs = confirm(tips);
            if (rs == false) {
                return;
            }
            var PopLogin = require('../mod/popLogin');
            var popLogin = new PopLogin();
            var me = $(this);
            var goods_id = me.attr('data-goodsId');
            if (window.login_status === false) {
                cookie.setCookie('favGoodsId', goods_id, 1);
            }
            popLogin.requestFloatingSign(function () {
                favorites.delFav(goods_id, delete_favor, me);
            }, jumpUrl);
        }
    });
};

exports.init = function () {
    refreshFavorites();

    //detail click
    $(function () {
        var jumpUrl = document.URL.replace('#.*$', '');
        $('#add2fav2').on("click", function () {
            if (!$(this).hasClass('existingFav2')) {
                var me = $(this);
                if (window.login_status === false) {
                    cookie.setCookie('favGoodsId', pageData.goods_id, 1);
                }
                var PopLogin = require('../mod/popLogin');
                var popLogin = new PopLogin();
                popLogin.requestFloatingSign(function () {
                    favorites.addFav(pageData.goods_id, hanlder_add2fav2, me);
                }, jumpUrl);
            } else {
                var tips = _lang.page_delete_showroom_good;
                var rs = confirm(tips);
                if (rs == false) {
                    return;
                }
                var me = $(this);
                if (window.login_status === false) {
                    cookie.setCookie('favGoodsId', pageData.goods_id, 1);
                }
                var PopLogin = require('../mod/popLogin');
                var popLogin = new PopLogin();
                popLogin.requestFloatingSign(function () {
                    favorites.delFav(pageData.goods_id, delete_favor2, me);
                }, jumpUrl);
            }
        });

        var favBtn = $(".favor_product_page.favor_unselected");
        favBtn.hover(function(){
            $(this).addClass("hover");
        },function(){
            $(this).removeClass("hover");
        });

        $(document).ready(function () {
            //列表页&搜索页添加收藏
            bindFavEvent();
        })
    });
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvZ29vZHMvZG9fZmF2X25ldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8vZGVmaW5lKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHtcclxuXHJcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG5cclxudmFyIEZhdm9yaXRlcyA9IHJlcXVpcmUoJy4uL21vZC9mYXZvcml0ZXMnKTtcclxudmFyIGZhdm9yaXRlcyA9IG5ldyBGYXZvcml0ZXMoKTtcclxudmFyIENvb2tpZSA9IHJlcXVpcmUoJy4uL21vZC9jb29raWUnKTtcclxudmFyIGNvb2tpZSA9IG5ldyBDb29raWUoKTtcclxuXHJcbnZhciBhZGRGYXZDb3VudCA9IGZ1bmN0aW9uKGZhdkNvdW50KSB7XHJcbiAgICAkKCcjZmF2b3JHb29kc1RvdGFsJykuaHRtbChmYXZDb3VudCk7XHJcbn1cclxuXHJcbi8vIGhhbmxkZXJfYWRkMmZhdjIgZm9yIGRldGFpbCBwYWdlXHJcbnZhciBoYW5sZGVyX2FkZDJmYXYyID0gZnVuY3Rpb24gKG1lLCBmYXZDb3VudCkge1xyXG4gICAgYWRkRmF2Q291bnQoZmF2Q291bnQpO1xyXG4gICAgJCgnI2FkZDJmYXYyJykucmVtb3ZlQ2xhc3MoJ3Byb2Nlc3NpbmcnKS5yZW1vdmVDbGFzcygnYWRkMmZhdjInKS5hZGRDbGFzcygnZXhpc3RpbmdGYXYyJyk7XHJcbiAgICBjb29raWUuc2V0Q29va2llKCdmYXZHb29kc0lkJywgMCwgLTEpO1xyXG59O1xyXG5cclxuLy9kZWxldGUgZmF2b3IgZm9yIGRldGFpbCBwYWdlXHJcbnZhciBkZWxldGVfZmF2b3IyID0gZnVuY3Rpb24gKG1lLCBmYXZDb3VudCkge1xyXG4gICAgYWRkRmF2Q291bnQoZmF2Q291bnQpO1xyXG4gICAgJCgnI2FkZDJmYXYyJykucmVtb3ZlQ2xhc3MoJ3Byb2Nlc3NpbmcnKS5yZW1vdmVDbGFzcygnZXhpc3RpbmdGYXYyJykuYWRkQ2xhc3MoJ2FkZDJmYXYyJyk7XHJcbiAgICBjb29raWUuc2V0Q29va2llKCdmYXZHb29kc0lkJywgMCwgLTEpO1xyXG59O1xyXG5cclxuLy8gaGFuZGxlX2Zhdm9yIGZvciBsaWF0IHBhZ2UgYW5kIHNlYXJjaCBwYWdlXHJcbnZhciBoYW5sZGVyX2Zhdm9yID0gZnVuY3Rpb24obWUsIGZhdkNvdW50KXtcclxuICAgIGFkZEZhdkNvdW50KGZhdkNvdW50KTtcclxuICAgIG1lLnJlbW92ZUNsYXNzKFwiZmF2b3JfdW5zZWxlY3RlZFwiKS5hZGRDbGFzcyhcImZhdm9yX3NlbGVjdFwiKTtcclxuICAgIGNvb2tpZS5zZXRDb29raWUoJ2Zhdkdvb2RzSWQnLCAwLCAtMSk7XHJcbn07XHJcblxyXG4vL2RlbGV0ZSBmYXZvciBmb3IgbGlzdCBwYWdlIGFuZCBzZWFyY2ggcGFnZVxyXG52YXIgZGVsZXRlX2Zhdm9yID0gZnVuY3Rpb24obWUsIGZhdkNvdW50KSB7XHJcbiAgICBhZGRGYXZDb3VudChmYXZDb3VudCk7XHJcbiAgICBtZS5yZW1vdmVDbGFzcyhcImZhdm9yX3NlbGVjdFwiKS5hZGRDbGFzcyhcImZhdm9yX3Vuc2VsZWN0ZWRcIik7XHJcbiAgICBjb29raWUuc2V0Q29va2llKCdmYXZHb29kc0lkJywgMCwgLTEpO1xyXG59XHJcblxyXG52YXIgcmVmcmVzaEZhdm9yaXRlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGRldGFpbCBwYWdlXHJcbiAgICBpZiAoISQuaXNFbXB0eU9iamVjdChwYWdlRGF0YSkgJiYgcGFnZURhdGEuanNfa2V5ID09ICdnb29kcycpIHtcclxuICAgICAgICBmYXZvcml0ZXMucmVmcmVzaEZhdm9yaXRlcygkKCcuYWRkMmZhdjInKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGlzdCBwYWdlXHJcbiAgICBpZiAoISQuaXNFbXB0eU9iamVjdChwYWdlRGF0YSkgJiYgcGFnZURhdGEuanNfa2V5ID09ICdjYXRlZ29yeScpIHtcclxuICAgICAgICBmYXZvcml0ZXMucmVmcmVzaEZhdm9yaXRlcygkKCcuY2F0cGwtcHJvZCBkaXYgLnJhdGluZy1mYXZvciAuZmF2b3JfcHJvZHVjdF9wYWdlJykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNlYXJjaCBwYWdlXHJcbiAgICBpZiAoISQuaXNFbXB0eU9iamVjdChwYWdlRGF0YSkgJiYgcGFnZURhdGEuanNfa2V5ID09ICdzZWFyY2gnKSB7XHJcbiAgICAgICAgZmF2b3JpdGVzLnJlZnJlc2hGYXZvcml0ZXMoJCgnLmNhdHBsLXByb2QgLnJhdGluZy1mYXZvciAuZmF2b3JfcHJvZHVjdF9wYWdlJykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZE9uSXRlbSBwYWdlXHJcbiAgICBpZiAoISQuaXNFbXB0eU9iamVjdChwYWdlRGF0YSkgJiYgcGFnZURhdGEuanNfa2V5ID09ICdyZWNvbW1lbmRfcGlja3MnKSB7XHJcbiAgICAgICAgZmF2b3JpdGVzLnJlZnJlc2hGYXZvcml0ZXMoJCgnLmNhdHBsLXByb2QgLnJhdGluZy1mYXZvciAuZmF2b3JfcHJvZHVjdF9wYWdlJykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGxhbmRpbmcgcGFnZVxyXG4gICAgaWYgKCEkLmlzRW1wdHlPYmplY3QocGFnZURhdGEpICYmIHBhZ2VEYXRhLmpzX2tleSA9PSAnbGFuZGluZ19wYWdlJykge1xyXG4gICAgICAgIGZhdm9yaXRlcy5yZWZyZXNoRmF2b3JpdGVzKCQoJy5jYXRwbC1wcm9kIC5yYXRpbmctZmF2b3IgLmZhdm9yX3Byb2R1Y3RfcGFnZScpKTtcclxuICAgIH1cclxufVxyXG5cclxudmFyIGJpbmRGYXZFdmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBqdW1wVXJsID0gZG9jdW1lbnQuVVJMLnJlcGxhY2UoJyMuKiQnLCAnJyk7XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmZhdm9yX3Byb2R1Y3RfcGFnZScsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtZSA9ICQodGhpcyk7XHJcbiAgICAgICAgaWYgKG1lLmhhc0NsYXNzKCdmYXZvcl91bnNlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgdmFyIFBvcExvZ2luID0gcmVxdWlyZSgnLi4vbW9kL3BvcExvZ2luJyk7XHJcbiAgICAgICAgICAgIHZhciBwb3BMb2dpbiA9IG5ldyBQb3BMb2dpbigpO1xyXG4gICAgICAgICAgICB2YXIgbWUgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgZ29vZHNfaWQgPSBtZS5hdHRyKCdkYXRhLWdvb2RzSWQnKTtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2dpbl9zdGF0dXMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb29raWUuc2V0Q29va2llKCdmYXZHb29kc0lkJywgZ29vZHNfaWQsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvcExvZ2luLnJlcXVlc3RGbG9hdGluZ1NpZ24oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGVzLmFkZEZhdihnb29kc19pZCwgaGFubGRlcl9mYXZvciwgbWUpO1xyXG4gICAgICAgICAgICB9LCBqdW1wVXJsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgdGlwcyA9IF9sYW5nLnBhZ2VfZGVsZXRlX3Nob3dyb29tX2dvb2Q7XHJcbiAgICAgICAgICAgIHZhciBycyA9IGNvbmZpcm0odGlwcyk7XHJcbiAgICAgICAgICAgIGlmIChycyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBQb3BMb2dpbiA9IHJlcXVpcmUoJy4uL21vZC9wb3BMb2dpbicpO1xyXG4gICAgICAgICAgICB2YXIgcG9wTG9naW4gPSBuZXcgUG9wTG9naW4oKTtcclxuICAgICAgICAgICAgdmFyIG1lID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGdvb2RzX2lkID0gbWUuYXR0cignZGF0YS1nb29kc0lkJyk7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9naW5fc3RhdHVzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgY29va2llLnNldENvb2tpZSgnZmF2R29vZHNJZCcsIGdvb2RzX2lkLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3BMb2dpbi5yZXF1ZXN0RmxvYXRpbmdTaWduKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGZhdm9yaXRlcy5kZWxGYXYoZ29vZHNfaWQsIGRlbGV0ZV9mYXZvciwgbWUpO1xyXG4gICAgICAgICAgICB9LCBqdW1wVXJsKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJlZnJlc2hGYXZvcml0ZXMoKTtcclxuXHJcbiAgICAvL2RldGFpbCBjbGlja1xyXG4gICAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGp1bXBVcmwgPSBkb2N1bWVudC5VUkwucmVwbGFjZSgnIy4qJCcsICcnKTtcclxuICAgICAgICAkKCcjYWRkMmZhdjInKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdleGlzdGluZ0ZhdjInKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9naW5fc3RhdHVzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZS5zZXRDb29raWUoJ2Zhdkdvb2RzSWQnLCBwYWdlRGF0YS5nb29kc19pZCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgUG9wTG9naW4gPSByZXF1aXJlKCcuLi9tb2QvcG9wTG9naW4nKTtcclxuICAgICAgICAgICAgICAgIHZhciBwb3BMb2dpbiA9IG5ldyBQb3BMb2dpbigpO1xyXG4gICAgICAgICAgICAgICAgcG9wTG9naW4ucmVxdWVzdEZsb2F0aW5nU2lnbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVzLmFkZEZhdihwYWdlRGF0YS5nb29kc19pZCwgaGFubGRlcl9hZGQyZmF2MiwgbWUpO1xyXG4gICAgICAgICAgICAgICAgfSwganVtcFVybCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGlwcyA9IF9sYW5nLnBhZ2VfZGVsZXRlX3Nob3dyb29tX2dvb2Q7XHJcbiAgICAgICAgICAgICAgICB2YXIgcnMgPSBjb25maXJtKHRpcHMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJzID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG1lID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9naW5fc3RhdHVzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZS5zZXRDb29raWUoJ2Zhdkdvb2RzSWQnLCBwYWdlRGF0YS5nb29kc19pZCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgUG9wTG9naW4gPSByZXF1aXJlKCcuLi9tb2QvcG9wTG9naW4nKTtcclxuICAgICAgICAgICAgICAgIHZhciBwb3BMb2dpbiA9IG5ldyBQb3BMb2dpbigpO1xyXG4gICAgICAgICAgICAgICAgcG9wTG9naW4ucmVxdWVzdEZsb2F0aW5nU2lnbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVzLmRlbEZhdihwYWdlRGF0YS5nb29kc19pZCwgZGVsZXRlX2Zhdm9yMiwgbWUpO1xyXG4gICAgICAgICAgICAgICAgfSwganVtcFVybCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGZhdkJ0biA9ICQoXCIuZmF2b3JfcHJvZHVjdF9wYWdlLmZhdm9yX3Vuc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgZmF2QnRuLmhvdmVyKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJob3ZlclwiKTtcclxuICAgICAgICB9LGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJob3ZlclwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL+WIl+ihqOmhtSbmkJzntKLpobXmt7vliqDmlLbol49cclxuICAgICAgICAgICAgYmluZEZhdkV2ZW50KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59OyJdfQ==
},{"../mod/cookie":12,"../mod/favorites":16,"../mod/popLogin":20}],5:[function(require,module,exports){
(function (global){
var jQuery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
var Countdown = require('../mod/countdown');
const reviseFeatureName = 'carouselBanners';
var revisingFeaturesList = typeof pageData.revisingFeaturesList != undefined ? pageData.revisingFeaturesList : [];

(function($, revisingFeaturesList) {
    var specialOfferCountdown = $('.banner-countdown-SpecialOffer');
    var pageTypeCode =  typeof pageData.js_key != undefined ? pageData.js_key : '';
    var initBannerSize = function() {
        if (pageTypeCode == 'landing_page') {
            var bannerSize = getLandingBannerSize();
        } else if(revisingFeaturesList.indexOf(reviseFeatureName) > -1) {
            var bannerSize = getMergedBannerSize();
        }else {
            var bannerSize = getBannerSize();
        }
        var reSizeSelector = "img, ul, li, .focus, .focus_wrap, .jfocus, .narrow_banner_content, .wide_banner, .merged-carousel-banner";
        //landing page fix height
        if (pageTypeCode != 'landing_page') {
            $index = $(".index_auto_banner");
        } else {
            $index = $(".landing-page-auto-banner");
        }
        $index.find(reSizeSelector).css({'width': bannerSize.bannerWidth+'px', 'height': bannerSize.bannerHeight+'px'});
        $index.css({'height': bannerSize.bannerHeight+'px'});
    };

    var initCountdownSize = function () {
        if(specialOfferCountdown.length > 0) {
            if(revisingFeaturesList.indexOf(reviseFeatureName) > -1) {
                var bannerSize = getMergedBannerSize();
                $('.merged-carousel-banner .banner-countdown-SpecialOffer').css({'font-size': Math.round(bannerSize.bannerWidth / 1700 * 70 * 2) / 2 + 'px'});
            } else {
                var bannerSize = getBannerSize();
                $('.narrow_banner .banner-countdown-SpecialOffer').css({'font-size': Math.round(bannerSize.bannerWidth / 1200 * 56 * 2) / 2 + 'px'});

                $('.wide_banner .banner-countdown-SpecialOffer').css({'font-size': Math.round(bannerSize.bannerWidth / 1600 * 70 * 2) / 2 + 'px'});
            }
        }
    };

    var getBannerSize = function() {
        var bannerWidth;
        var bannerHeight;
        var clientWidth = window.innerWidth;
        var clientRealWidth = $(window).width();
        if(clientWidth > 1600) {
            bannerWidth = 1600;
            bannerHeight = 670;
        }else if(clientWidth >= 1400) {
            bannerWidth = clientRealWidth;
            bannerHeight = clientRealWidth * 670 / 1600;
        }else if(clientWidth > 1200) {
            bannerWidth = 1200;
            bannerHeight = 600;
        }else if(clientWidth > 990) {
            bannerWidth = clientRealWidth;
            bannerHeight = clientRealWidth * 600 / 1200;
        }else {
            bannerWidth = 990;
            bannerHeight = 990 * 600 / 1200;
        }
        return {"bannerWidth":bannerWidth,"bannerHeight":bannerHeight};
    };

    var getMergedBannerSize = function() {
        var bannerWidth;
        var bannerHeight;
        var clientWidth = window.innerWidth;
        var clientRealWidth = $(window).width();
        if(clientWidth > 990) {
            bannerWidth = clientRealWidth * 1920 / 1920;
            bannerHeight = clientRealWidth * 550 / 1920;
        }else {
            bannerWidth = 990;
            bannerHeight = 284;
        }
        return {"bannerWidth":bannerWidth,"bannerHeight":bannerHeight};
    }

    var getLandingBannerSize = function() {
        var bannerWidth;
        var bannerHeight;
        var clientWidth = window.innerWidth;
        var clientRealWidth = $(window).width();
        if(clientWidth >= 1024) {
            bannerWidth = clientRealWidth * 1920 / 1920;
            bannerHeight = clientRealWidth * 550 / 1920;
        }else {
            bannerWidth = 1007;
            bannerHeight = 288;
        }
        return {"bannerWidth":bannerWidth,"bannerHeight":bannerHeight};
    }

    initBannerSize();
    $(window).resize(function(){
        initBannerSize();
        initCountdownSize();
    });

    function addLoadEvent(func){
        var oldOnLoad = window.onload;
        if(typeof window.onload != 'function'){
            window.onload = func;
        }else{
            window.onload = function(){
                oldOnLoad();
                func();
            }
        }
    }

    var bannerInit = function (){
        $(".index_auto_banner").find('img').each(function(){
            if(typeof $(this).attr('src') == 'undefined' && typeof $(this).attr('data-src') != 'undefined'){
                $(this).attr('src',$(this).attr('data-src'));
            }
        });
    };
    addLoadEvent(bannerInit);

    $(".index-banner-popup").click(function (){
        $('#promotion-top-popup-img').show();
    });

    if(specialOfferCountdown.length > 0) {
        $.ajax({
            'type': 'POST',
            'url': webData.WEB_ROOT + 'ajax_general_promotion.php',
            'data': 'act=get_general_promotion_time&promotion_name=SpecialOffer',
            'cache': true,
            'dataType': 'json',
            'success': function (r) {
                if (r.code == 0) {
                    var _time = r.end_time - r.now_time;
                    var banner_cd = new Countdown('.banner-countdown-SpecialOffer', _time, r.time_format, false, false, true);
                    banner_cd.run();
                    initCountdownSize();
                }
            }
        })
    }
})(jQuery, revisingFeaturesList);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvaW5kZXgvYmFubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciBqUXVlcnkgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcbnZhciBDb3VudGRvd24gPSByZXF1aXJlKCcuLi9tb2QvY291bnRkb3duJyk7XHJcbmNvbnN0IHJldmlzZUZlYXR1cmVOYW1lID0gJ2Nhcm91c2VsQmFubmVycyc7XHJcbnZhciByZXZpc2luZ0ZlYXR1cmVzTGlzdCA9IHR5cGVvZiBwYWdlRGF0YS5yZXZpc2luZ0ZlYXR1cmVzTGlzdCAhPSB1bmRlZmluZWQgPyBwYWdlRGF0YS5yZXZpc2luZ0ZlYXR1cmVzTGlzdCA6IFtdO1xyXG5cclxuKGZ1bmN0aW9uKCQsIHJldmlzaW5nRmVhdHVyZXNMaXN0KSB7XHJcbiAgICB2YXIgc3BlY2lhbE9mZmVyQ291bnRkb3duID0gJCgnLmJhbm5lci1jb3VudGRvd24tU3BlY2lhbE9mZmVyJyk7XHJcbiAgICB2YXIgcGFnZVR5cGVDb2RlID0gIHR5cGVvZiBwYWdlRGF0YS5qc19rZXkgIT0gdW5kZWZpbmVkID8gcGFnZURhdGEuanNfa2V5IDogJyc7XHJcbiAgICB2YXIgaW5pdEJhbm5lclNpemUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAocGFnZVR5cGVDb2RlID09ICdsYW5kaW5nX3BhZ2UnKSB7XHJcbiAgICAgICAgICAgIHZhciBiYW5uZXJTaXplID0gZ2V0TGFuZGluZ0Jhbm5lclNpemUoKTtcclxuICAgICAgICB9IGVsc2UgaWYocmV2aXNpbmdGZWF0dXJlc0xpc3QuaW5kZXhPZihyZXZpc2VGZWF0dXJlTmFtZSkgPiAtMSkge1xyXG4gICAgICAgICAgICB2YXIgYmFubmVyU2l6ZSA9IGdldE1lcmdlZEJhbm5lclNpemUoKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBiYW5uZXJTaXplID0gZ2V0QmFubmVyU2l6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVTaXplU2VsZWN0b3IgPSBcImltZywgdWwsIGxpLCAuZm9jdXMsIC5mb2N1c193cmFwLCAuamZvY3VzLCAubmFycm93X2Jhbm5lcl9jb250ZW50LCAud2lkZV9iYW5uZXIsIC5tZXJnZWQtY2Fyb3VzZWwtYmFubmVyXCI7XHJcbiAgICAgICAgLy9sYW5kaW5nIHBhZ2UgZml4IGhlaWdodFxyXG4gICAgICAgIGlmIChwYWdlVHlwZUNvZGUgIT0gJ2xhbmRpbmdfcGFnZScpIHtcclxuICAgICAgICAgICAgJGluZGV4ID0gJChcIi5pbmRleF9hdXRvX2Jhbm5lclwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkaW5kZXggPSAkKFwiLmxhbmRpbmctcGFnZS1hdXRvLWJhbm5lclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGluZGV4LmZpbmQocmVTaXplU2VsZWN0b3IpLmNzcyh7J3dpZHRoJzogYmFubmVyU2l6ZS5iYW5uZXJXaWR0aCsncHgnLCAnaGVpZ2h0JzogYmFubmVyU2l6ZS5iYW5uZXJIZWlnaHQrJ3B4J30pO1xyXG4gICAgICAgICRpbmRleC5jc3MoeydoZWlnaHQnOiBiYW5uZXJTaXplLmJhbm5lckhlaWdodCsncHgnfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBpbml0Q291bnRkb3duU2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZihzcGVjaWFsT2ZmZXJDb3VudGRvd24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZihyZXZpc2luZ0ZlYXR1cmVzTGlzdC5pbmRleE9mKHJldmlzZUZlYXR1cmVOYW1lKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmFubmVyU2l6ZSA9IGdldE1lcmdlZEJhbm5lclNpemUoKTtcclxuICAgICAgICAgICAgICAgICQoJy5tZXJnZWQtY2Fyb3VzZWwtYmFubmVyIC5iYW5uZXItY291bnRkb3duLVNwZWNpYWxPZmZlcicpLmNzcyh7J2ZvbnQtc2l6ZSc6IE1hdGgucm91bmQoYmFubmVyU2l6ZS5iYW5uZXJXaWR0aCAvIDE3MDAgKiA3MCAqIDIpIC8gMiArICdweCd9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBiYW5uZXJTaXplID0gZ2V0QmFubmVyU2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hcnJvd19iYW5uZXIgLmJhbm5lci1jb3VudGRvd24tU3BlY2lhbE9mZmVyJykuY3NzKHsnZm9udC1zaXplJzogTWF0aC5yb3VuZChiYW5uZXJTaXplLmJhbm5lcldpZHRoIC8gMTIwMCAqIDU2ICogMikgLyAyICsgJ3B4J30pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJy53aWRlX2Jhbm5lciAuYmFubmVyLWNvdW50ZG93bi1TcGVjaWFsT2ZmZXInKS5jc3Moeydmb250LXNpemUnOiBNYXRoLnJvdW5kKGJhbm5lclNpemUuYmFubmVyV2lkdGggLyAxNjAwICogNzAgKiAyKSAvIDIgKyAncHgnfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBnZXRCYW5uZXJTaXplID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGJhbm5lcldpZHRoO1xyXG4gICAgICAgIHZhciBiYW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgdmFyIGNsaWVudFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdmFyIGNsaWVudFJlYWxXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgIGlmKGNsaWVudFdpZHRoID4gMTYwMCkge1xyXG4gICAgICAgICAgICBiYW5uZXJXaWR0aCA9IDE2MDA7XHJcbiAgICAgICAgICAgIGJhbm5lckhlaWdodCA9IDY3MDtcclxuICAgICAgICB9ZWxzZSBpZihjbGllbnRXaWR0aCA+PSAxNDAwKSB7XHJcbiAgICAgICAgICAgIGJhbm5lcldpZHRoID0gY2xpZW50UmVhbFdpZHRoO1xyXG4gICAgICAgICAgICBiYW5uZXJIZWlnaHQgPSBjbGllbnRSZWFsV2lkdGggKiA2NzAgLyAxNjAwO1xyXG4gICAgICAgIH1lbHNlIGlmKGNsaWVudFdpZHRoID4gMTIwMCkge1xyXG4gICAgICAgICAgICBiYW5uZXJXaWR0aCA9IDEyMDA7XHJcbiAgICAgICAgICAgIGJhbm5lckhlaWdodCA9IDYwMDtcclxuICAgICAgICB9ZWxzZSBpZihjbGllbnRXaWR0aCA+IDk5MCkge1xyXG4gICAgICAgICAgICBiYW5uZXJXaWR0aCA9IGNsaWVudFJlYWxXaWR0aDtcclxuICAgICAgICAgICAgYmFubmVySGVpZ2h0ID0gY2xpZW50UmVhbFdpZHRoICogNjAwIC8gMTIwMDtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGJhbm5lcldpZHRoID0gOTkwO1xyXG4gICAgICAgICAgICBiYW5uZXJIZWlnaHQgPSA5OTAgKiA2MDAgLyAxMjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1wiYmFubmVyV2lkdGhcIjpiYW5uZXJXaWR0aCxcImJhbm5lckhlaWdodFwiOmJhbm5lckhlaWdodH07XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBnZXRNZXJnZWRCYW5uZXJTaXplID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGJhbm5lcldpZHRoO1xyXG4gICAgICAgIHZhciBiYW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgdmFyIGNsaWVudFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdmFyIGNsaWVudFJlYWxXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgIGlmKGNsaWVudFdpZHRoID4gOTkwKSB7XHJcbiAgICAgICAgICAgIGJhbm5lcldpZHRoID0gY2xpZW50UmVhbFdpZHRoICogMTkyMCAvIDE5MjA7XHJcbiAgICAgICAgICAgIGJhbm5lckhlaWdodCA9IGNsaWVudFJlYWxXaWR0aCAqIDU1MCAvIDE5MjA7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBiYW5uZXJXaWR0aCA9IDk5MDtcclxuICAgICAgICAgICAgYmFubmVySGVpZ2h0ID0gMjg0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1wiYmFubmVyV2lkdGhcIjpiYW5uZXJXaWR0aCxcImJhbm5lckhlaWdodFwiOmJhbm5lckhlaWdodH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdldExhbmRpbmdCYW5uZXJTaXplID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGJhbm5lcldpZHRoO1xyXG4gICAgICAgIHZhciBiYW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgdmFyIGNsaWVudFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdmFyIGNsaWVudFJlYWxXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgIGlmKGNsaWVudFdpZHRoID49IDEwMjQpIHtcclxuICAgICAgICAgICAgYmFubmVyV2lkdGggPSBjbGllbnRSZWFsV2lkdGggKiAxOTIwIC8gMTkyMDtcclxuICAgICAgICAgICAgYmFubmVySGVpZ2h0ID0gY2xpZW50UmVhbFdpZHRoICogNTUwIC8gMTkyMDtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGJhbm5lcldpZHRoID0gMTAwNztcclxuICAgICAgICAgICAgYmFubmVySGVpZ2h0ID0gMjg4O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1wiYmFubmVyV2lkdGhcIjpiYW5uZXJXaWR0aCxcImJhbm5lckhlaWdodFwiOmJhbm5lckhlaWdodH07XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEJhbm5lclNpemUoKTtcclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICAgICBpbml0QmFubmVyU2l6ZSgpO1xyXG4gICAgICAgIGluaXRDb3VudGRvd25TaXplKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRMb2FkRXZlbnQoZnVuYyl7XHJcbiAgICAgICAgdmFyIG9sZE9uTG9hZCA9IHdpbmRvdy5vbmxvYWQ7XHJcbiAgICAgICAgaWYodHlwZW9mIHdpbmRvdy5vbmxvYWQgIT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIG9sZE9uTG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgZnVuYygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBiYW5uZXJJbml0ID0gZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgJChcIi5pbmRleF9hdXRvX2Jhbm5lclwiKS5maW5kKCdpbWcnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiAkKHRoaXMpLmF0dHIoJ3NyYycpID09ICd1bmRlZmluZWQnICYmIHR5cGVvZiAkKHRoaXMpLmF0dHIoJ2RhdGEtc3JjJykgIT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzcmMnLCQodGhpcykuYXR0cignZGF0YS1zcmMnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBhZGRMb2FkRXZlbnQoYmFubmVySW5pdCk7XHJcblxyXG4gICAgJChcIi5pbmRleC1iYW5uZXItcG9wdXBcIikuY2xpY2soZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbi10b3AtcG9wdXAtaW1nJykuc2hvdygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoc3BlY2lhbE9mZmVyQ291bnRkb3duLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAndHlwZSc6ICdQT1NUJyxcclxuICAgICAgICAgICAgJ3VybCc6IHdlYkRhdGEuV0VCX1JPT1QgKyAnYWpheF9nZW5lcmFsX3Byb21vdGlvbi5waHAnLFxyXG4gICAgICAgICAgICAnZGF0YSc6ICdhY3Q9Z2V0X2dlbmVyYWxfcHJvbW90aW9uX3RpbWUmcHJvbW90aW9uX25hbWU9U3BlY2lhbE9mZmVyJyxcclxuICAgICAgICAgICAgJ2NhY2hlJzogdHJ1ZSxcclxuICAgICAgICAgICAgJ2RhdGFUeXBlJzogJ2pzb24nLFxyXG4gICAgICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoci5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX3RpbWUgPSByLmVuZF90aW1lIC0gci5ub3dfdGltZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmFubmVyX2NkID0gbmV3IENvdW50ZG93bignLmJhbm5lci1jb3VudGRvd24tU3BlY2lhbE9mZmVyJywgX3RpbWUsIHIudGltZV9mb3JtYXQsIGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFubmVyX2NkLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRDb3VudGRvd25TaXplKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KShqUXVlcnksIHJldmlzaW5nRmVhdHVyZXNMaXN0KTsiXX0=
},{"../mod/countdown":13}],6:[function(require,module,exports){
(function (global){
var jQuery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

/*!
 * jQuery UI Core 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
(function( $, undefined ) {

var uuid = 0,
	runiqueId = /^ui-id-\d+$/;

// $.ui might exist from components with no dependencies, e.g., $.ui.position
$.ui = $.ui || {};

$.extend( $.ui, {
	version: "1.10.4",

	keyCode: {
		BACKSPACE: 8,
		COMMA: 188,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		LEFT: 37,
		NUMPAD_ADD: 107,
		NUMPAD_DECIMAL: 110,
		NUMPAD_DIVIDE: 111,
		NUMPAD_ENTER: 108,
		NUMPAD_MULTIPLY: 106,
		NUMPAD_SUBTRACT: 109,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SPACE: 32,
		TAB: 9,
		UP: 38
	}
});

// plugins
$.fn.extend({
	focus: (function( orig ) {
		return function( delay, fn ) {
			return typeof delay === "number" ?
				this.each(function() {
					var elem = this;
					setTimeout(function() {
						$( elem ).focus();
						if ( fn ) {
							fn.call( elem );
						}
					}, delay );
				}) :
				orig.apply( this, arguments );
		};
	})( $.fn.focus ),

	scrollParent: function() {
		var scrollParent;
		if (($.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
			scrollParent = this.parents().filter(function() {
				return (/(relative|absolute|fixed)/).test($.css(this,"position")) && (/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));
			}).eq(0);
		} else {
			scrollParent = this.parents().filter(function() {
				return (/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));
			}).eq(0);
		}

		return (/fixed/).test(this.css("position")) || !scrollParent.length ? $(document) : scrollParent;
	},

	zIndex: function( zIndex ) {
		if ( zIndex !== undefined ) {
			return this.css( "zIndex", zIndex );
		}

		if ( this.length ) {
			var elem = $( this[ 0 ] ), position, value;
			while ( elem.length && elem[ 0 ] !== document ) {
				// Ignore z-index if position is set to a value where z-index is ignored by the browser
				// This makes behavior of this function consistent across browsers
				// WebKit always returns auto if the element is positioned
				position = elem.css( "position" );
				if ( position === "absolute" || position === "relative" || position === "fixed" ) {
					// IE returns 0 when zIndex is not specified
					// other browsers return a string
					// we ignore the case of nested elements with an explicit value of 0
					// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
					value = parseInt( elem.css( "zIndex" ), 10 );
					if ( !isNaN( value ) && value !== 0 ) {
						return value;
					}
				}
				elem = elem.parent();
			}
		}

		return 0;
	},

	uniqueId: function() {
		return this.each(function() {
			if ( !this.id ) {
				this.id = "ui-id-" + (++uuid);
			}
		});
	},

	removeUniqueId: function() {
		return this.each(function() {
			if ( runiqueId.test( this.id ) ) {
				$( this ).removeAttr( "id" );
			}
		});
	}
});

// selectors
function focusable( element, isTabIndexNotNaN ) {
	var map, mapName, img,
		nodeName = element.nodeName.toLowerCase();
	if ( "area" === nodeName ) {
		map = element.parentNode;
		mapName = map.name;
		if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
			return false;
		}
		img = $( "img[usemap=#" + mapName + "]" )[0];
		return !!img && visible( img );
	}
	return ( /input|select|textarea|button|object/.test( nodeName ) ?
		!element.disabled :
		"a" === nodeName ?
			element.href || isTabIndexNotNaN :
			isTabIndexNotNaN) &&
		// the element and all of its ancestors must be visible
		visible( element );
}

function visible( element ) {
	return $.expr.filters.visible( element ) &&
		!$( element ).parents().addBack().filter(function() {
			return $.css( this, "visibility" ) === "hidden";
		}).length;
}

$.extend( $.expr[ ":" ], {
	data: $.expr.createPseudo ?
		$.expr.createPseudo(function( dataName ) {
			return function( elem ) {
				return !!$.data( elem, dataName );
			};
		}) :
		// support: jQuery <1.8
		function( elem, i, match ) {
			return !!$.data( elem, match[ 3 ] );
		},

	focusable: function( element ) {
		return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
	},

	tabbable: function( element ) {
		var tabIndex = $.attr( element, "tabindex" ),
			isTabIndexNaN = isNaN( tabIndex );
		return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
	}
});

// support: jQuery <1.8
if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
	$.each( [ "Width", "Height" ], function( i, name ) {
		var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
			type = name.toLowerCase(),
			orig = {
				innerWidth: $.fn.innerWidth,
				innerHeight: $.fn.innerHeight,
				outerWidth: $.fn.outerWidth,
				outerHeight: $.fn.outerHeight
			};

		function reduce( elem, size, border, margin ) {
			$.each( side, function() {
				size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
				if ( border ) {
					size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
				}
				if ( margin ) {
					size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
				}
			});
			return size;
		}

		$.fn[ "inner" + name ] = function( size ) {
			if ( size === undefined ) {
				return orig[ "inner" + name ].call( this );
			}

			return this.each(function() {
				$( this ).css( type, reduce( this, size ) + "px" );
			});
		};

		$.fn[ "outer" + name] = function( size, margin ) {
			if ( typeof size !== "number" ) {
				return orig[ "outer" + name ].call( this, size );
			}

			return this.each(function() {
				$( this).css( type, reduce( this, size, true, margin ) + "px" );
			});
		};
	});
}

// support: jQuery <1.8
if ( !$.fn.addBack ) {
	$.fn.addBack = function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	};
}

// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
	$.fn.removeData = (function( removeData ) {
		return function( key ) {
			if ( arguments.length ) {
				return removeData.call( this, $.camelCase( key ) );
			} else {
				return removeData.call( this );
			}
		};
	})( $.fn.removeData );
}





// deprecated
$.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

$.support.selectstart = "onselectstart" in document.createElement( "div" );
$.fn.extend({
	disableSelection: function() {
		return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
			".ui-disableSelection", function( event ) {
				event.preventDefault();
			});
	},

	enableSelection: function() {
		return this.unbind( ".ui-disableSelection" );
	}
});

$.extend( $.ui, {
	// $.ui.plugin is deprecated. Use $.widget() extensions instead.
	plugin: {
		add: function( module, option, set ) {
			var i,
				proto = $.ui[ module ].prototype;
			for ( i in set ) {
				proto.plugins[ i ] = proto.plugins[ i ] || [];
				proto.plugins[ i ].push( [ option, set[ i ] ] );
			}
		},
		call: function( instance, name, args ) {
			var i,
				set = instance.plugins[ name ];
			if ( !set || !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) {
				return;
			}

			for ( i = 0; i < set.length; i++ ) {
				if ( instance.options[ set[ i ][ 0 ] ] ) {
					set[ i ][ 1 ].apply( instance.element, args );
				}
			}
		}
	},

	// only used by resizable
	hasScroll: function( el, a ) {

		//If overflow is hidden, the element might have extra content, but the user wants to hide it
		if ( $( el ).css( "overflow" ) === "hidden") {
			return false;
		}

		var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
			has = false;

		if ( el[ scroll ] > 0 ) {
			return true;
		}

		// TODO: determine which cases actually cause this to happen
		// if the element doesn't have the scroll set, see if it's possible to
		// set the scroll
		el[ scroll ] = 1;
		has = ( el[ scroll ] > 0 );
		el[ scroll ] = 0;
		return has;
	}
});

})( jQuery );

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvbGliL2NvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciBqUXVlcnkgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcblxyXG4vKiFcclxuICogalF1ZXJ5IFVJIENvcmUgMS4xMC40XHJcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cclxuICpcclxuICogQ29weXJpZ2h0IDIwMTQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcclxuICpcclxuICogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20vY2F0ZWdvcnkvdWktY29yZS9cclxuICovXHJcbihmdW5jdGlvbiggJCwgdW5kZWZpbmVkICkge1xyXG5cclxudmFyIHV1aWQgPSAwLFxyXG5cdHJ1bmlxdWVJZCA9IC9edWktaWQtXFxkKyQvO1xyXG5cclxuLy8gJC51aSBtaWdodCBleGlzdCBmcm9tIGNvbXBvbmVudHMgd2l0aCBubyBkZXBlbmRlbmNpZXMsIGUuZy4sICQudWkucG9zaXRpb25cclxuJC51aSA9ICQudWkgfHwge307XHJcblxyXG4kLmV4dGVuZCggJC51aSwge1xyXG5cdHZlcnNpb246IFwiMS4xMC40XCIsXHJcblxyXG5cdGtleUNvZGU6IHtcclxuXHRcdEJBQ0tTUEFDRTogOCxcclxuXHRcdENPTU1BOiAxODgsXHJcblx0XHRERUxFVEU6IDQ2LFxyXG5cdFx0RE9XTjogNDAsXHJcblx0XHRFTkQ6IDM1LFxyXG5cdFx0RU5URVI6IDEzLFxyXG5cdFx0RVNDQVBFOiAyNyxcclxuXHRcdEhPTUU6IDM2LFxyXG5cdFx0TEVGVDogMzcsXHJcblx0XHROVU1QQURfQUREOiAxMDcsXHJcblx0XHROVU1QQURfREVDSU1BTDogMTEwLFxyXG5cdFx0TlVNUEFEX0RJVklERTogMTExLFxyXG5cdFx0TlVNUEFEX0VOVEVSOiAxMDgsXHJcblx0XHROVU1QQURfTVVMVElQTFk6IDEwNixcclxuXHRcdE5VTVBBRF9TVUJUUkFDVDogMTA5LFxyXG5cdFx0UEFHRV9ET1dOOiAzNCxcclxuXHRcdFBBR0VfVVA6IDMzLFxyXG5cdFx0UEVSSU9EOiAxOTAsXHJcblx0XHRSSUdIVDogMzksXHJcblx0XHRTUEFDRTogMzIsXHJcblx0XHRUQUI6IDksXHJcblx0XHRVUDogMzhcclxuXHR9XHJcbn0pO1xyXG5cclxuLy8gcGx1Z2luc1xyXG4kLmZuLmV4dGVuZCh7XHJcblx0Zm9jdXM6IChmdW5jdGlvbiggb3JpZyApIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbiggZGVsYXksIGZuICkge1xyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIGRlbGF5ID09PSBcIm51bWJlclwiID9cclxuXHRcdFx0XHR0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR2YXIgZWxlbSA9IHRoaXM7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQkKCBlbGVtICkuZm9jdXMoKTtcclxuXHRcdFx0XHRcdFx0aWYgKCBmbiApIHtcclxuXHRcdFx0XHRcdFx0XHRmbi5jYWxsKCBlbGVtICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sIGRlbGF5ICk7XHJcblx0XHRcdFx0fSkgOlxyXG5cdFx0XHRcdG9yaWcuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xyXG5cdFx0fTtcclxuXHR9KSggJC5mbi5mb2N1cyApLFxyXG5cclxuXHRzY3JvbGxQYXJlbnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHNjcm9sbFBhcmVudDtcclxuXHRcdGlmICgoJC51aS5pZSAmJiAoLyhzdGF0aWN8cmVsYXRpdmUpLykudGVzdCh0aGlzLmNzcyhcInBvc2l0aW9uXCIpKSkgfHwgKC9hYnNvbHV0ZS8pLnRlc3QodGhpcy5jc3MoXCJwb3NpdGlvblwiKSkpIHtcclxuXHRcdFx0c2Nyb2xsUGFyZW50ID0gdGhpcy5wYXJlbnRzKCkuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiAoLyhyZWxhdGl2ZXxhYnNvbHV0ZXxmaXhlZCkvKS50ZXN0KCQuY3NzKHRoaXMsXCJwb3NpdGlvblwiKSkgJiYgKC8oYXV0b3xzY3JvbGwpLykudGVzdCgkLmNzcyh0aGlzLFwib3ZlcmZsb3dcIikrJC5jc3ModGhpcyxcIm92ZXJmbG93LXlcIikrJC5jc3ModGhpcyxcIm92ZXJmbG93LXhcIikpO1xyXG5cdFx0XHR9KS5lcSgwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNjcm9sbFBhcmVudCA9IHRoaXMucGFyZW50cygpLmZpbHRlcihmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gKC8oYXV0b3xzY3JvbGwpLykudGVzdCgkLmNzcyh0aGlzLFwib3ZlcmZsb3dcIikrJC5jc3ModGhpcyxcIm92ZXJmbG93LXlcIikrJC5jc3ModGhpcyxcIm92ZXJmbG93LXhcIikpO1xyXG5cdFx0XHR9KS5lcSgwKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gKC9maXhlZC8pLnRlc3QodGhpcy5jc3MoXCJwb3NpdGlvblwiKSkgfHwgIXNjcm9sbFBhcmVudC5sZW5ndGggPyAkKGRvY3VtZW50KSA6IHNjcm9sbFBhcmVudDtcclxuXHR9LFxyXG5cclxuXHR6SW5kZXg6IGZ1bmN0aW9uKCB6SW5kZXggKSB7XHJcblx0XHRpZiAoIHpJbmRleCAhPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jc3MoIFwiekluZGV4XCIsIHpJbmRleCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggdGhpcy5sZW5ndGggKSB7XHJcblx0XHRcdHZhciBlbGVtID0gJCggdGhpc1sgMCBdICksIHBvc2l0aW9uLCB2YWx1ZTtcclxuXHRcdFx0d2hpbGUgKCBlbGVtLmxlbmd0aCAmJiBlbGVtWyAwIF0gIT09IGRvY3VtZW50ICkge1xyXG5cdFx0XHRcdC8vIElnbm9yZSB6LWluZGV4IGlmIHBvc2l0aW9uIGlzIHNldCB0byBhIHZhbHVlIHdoZXJlIHotaW5kZXggaXMgaWdub3JlZCBieSB0aGUgYnJvd3NlclxyXG5cdFx0XHRcdC8vIFRoaXMgbWFrZXMgYmVoYXZpb3Igb2YgdGhpcyBmdW5jdGlvbiBjb25zaXN0ZW50IGFjcm9zcyBicm93c2Vyc1xyXG5cdFx0XHRcdC8vIFdlYktpdCBhbHdheXMgcmV0dXJucyBhdXRvIGlmIHRoZSBlbGVtZW50IGlzIHBvc2l0aW9uZWRcclxuXHRcdFx0XHRwb3NpdGlvbiA9IGVsZW0uY3NzKCBcInBvc2l0aW9uXCIgKTtcclxuXHRcdFx0XHRpZiAoIHBvc2l0aW9uID09PSBcImFic29sdXRlXCIgfHwgcG9zaXRpb24gPT09IFwicmVsYXRpdmVcIiB8fCBwb3NpdGlvbiA9PT0gXCJmaXhlZFwiICkge1xyXG5cdFx0XHRcdFx0Ly8gSUUgcmV0dXJucyAwIHdoZW4gekluZGV4IGlzIG5vdCBzcGVjaWZpZWRcclxuXHRcdFx0XHRcdC8vIG90aGVyIGJyb3dzZXJzIHJldHVybiBhIHN0cmluZ1xyXG5cdFx0XHRcdFx0Ly8gd2UgaWdub3JlIHRoZSBjYXNlIG9mIG5lc3RlZCBlbGVtZW50cyB3aXRoIGFuIGV4cGxpY2l0IHZhbHVlIG9mIDBcclxuXHRcdFx0XHRcdC8vIDxkaXYgc3R5bGU9XCJ6LWluZGV4OiAtMTA7XCI+PGRpdiBzdHlsZT1cInotaW5kZXg6IDA7XCI+PC9kaXY+PC9kaXY+XHJcblx0XHRcdFx0XHR2YWx1ZSA9IHBhcnNlSW50KCBlbGVtLmNzcyggXCJ6SW5kZXhcIiApLCAxMCApO1xyXG5cdFx0XHRcdFx0aWYgKCAhaXNOYU4oIHZhbHVlICkgJiYgdmFsdWUgIT09IDAgKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxlbSA9IGVsZW0ucGFyZW50KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gMDtcclxuXHR9LFxyXG5cclxuXHR1bmlxdWVJZDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoICF0aGlzLmlkICkge1xyXG5cdFx0XHRcdHRoaXMuaWQgPSBcInVpLWlkLVwiICsgKCsrdXVpZCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcblxyXG5cdHJlbW92ZVVuaXF1ZUlkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICggcnVuaXF1ZUlkLnRlc3QoIHRoaXMuaWQgKSApIHtcclxuXHRcdFx0XHQkKCB0aGlzICkucmVtb3ZlQXR0ciggXCJpZFwiICk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufSk7XHJcblxyXG4vLyBzZWxlY3RvcnNcclxuZnVuY3Rpb24gZm9jdXNhYmxlKCBlbGVtZW50LCBpc1RhYkluZGV4Tm90TmFOICkge1xyXG5cdHZhciBtYXAsIG1hcE5hbWUsIGltZyxcclxuXHRcdG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdGlmICggXCJhcmVhXCIgPT09IG5vZGVOYW1lICkge1xyXG5cdFx0bWFwID0gZWxlbWVudC5wYXJlbnROb2RlO1xyXG5cdFx0bWFwTmFtZSA9IG1hcC5uYW1lO1xyXG5cdFx0aWYgKCAhZWxlbWVudC5ocmVmIHx8ICFtYXBOYW1lIHx8IG1hcC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcIm1hcFwiICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpbWcgPSAkKCBcImltZ1t1c2VtYXA9I1wiICsgbWFwTmFtZSArIFwiXVwiIClbMF07XHJcblx0XHRyZXR1cm4gISFpbWcgJiYgdmlzaWJsZSggaW1nICk7XHJcblx0fVxyXG5cdHJldHVybiAoIC9pbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9ufG9iamVjdC8udGVzdCggbm9kZU5hbWUgKSA/XHJcblx0XHQhZWxlbWVudC5kaXNhYmxlZCA6XHJcblx0XHRcImFcIiA9PT0gbm9kZU5hbWUgP1xyXG5cdFx0XHRlbGVtZW50LmhyZWYgfHwgaXNUYWJJbmRleE5vdE5hTiA6XHJcblx0XHRcdGlzVGFiSW5kZXhOb3ROYU4pICYmXHJcblx0XHQvLyB0aGUgZWxlbWVudCBhbmQgYWxsIG9mIGl0cyBhbmNlc3RvcnMgbXVzdCBiZSB2aXNpYmxlXHJcblx0XHR2aXNpYmxlKCBlbGVtZW50ICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZpc2libGUoIGVsZW1lbnQgKSB7XHJcblx0cmV0dXJuICQuZXhwci5maWx0ZXJzLnZpc2libGUoIGVsZW1lbnQgKSAmJlxyXG5cdFx0ISQoIGVsZW1lbnQgKS5wYXJlbnRzKCkuYWRkQmFjaygpLmZpbHRlcihmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQuY3NzKCB0aGlzLCBcInZpc2liaWxpdHlcIiApID09PSBcImhpZGRlblwiO1xyXG5cdFx0fSkubGVuZ3RoO1xyXG59XHJcblxyXG4kLmV4dGVuZCggJC5leHByWyBcIjpcIiBdLCB7XHJcblx0ZGF0YTogJC5leHByLmNyZWF0ZVBzZXVkbyA/XHJcblx0XHQkLmV4cHIuY3JlYXRlUHNldWRvKGZ1bmN0aW9uKCBkYXRhTmFtZSApIHtcclxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xyXG5cdFx0XHRcdHJldHVybiAhISQuZGF0YSggZWxlbSwgZGF0YU5hbWUgKTtcclxuXHRcdFx0fTtcclxuXHRcdH0pIDpcclxuXHRcdC8vIHN1cHBvcnQ6IGpRdWVyeSA8MS44XHJcblx0XHRmdW5jdGlvbiggZWxlbSwgaSwgbWF0Y2ggKSB7XHJcblx0XHRcdHJldHVybiAhISQuZGF0YSggZWxlbSwgbWF0Y2hbIDMgXSApO1xyXG5cdFx0fSxcclxuXHJcblx0Zm9jdXNhYmxlOiBmdW5jdGlvbiggZWxlbWVudCApIHtcclxuXHRcdHJldHVybiBmb2N1c2FibGUoIGVsZW1lbnQsICFpc05hTiggJC5hdHRyKCBlbGVtZW50LCBcInRhYmluZGV4XCIgKSApICk7XHJcblx0fSxcclxuXHJcblx0dGFiYmFibGU6IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xyXG5cdFx0dmFyIHRhYkluZGV4ID0gJC5hdHRyKCBlbGVtZW50LCBcInRhYmluZGV4XCIgKSxcclxuXHRcdFx0aXNUYWJJbmRleE5hTiA9IGlzTmFOKCB0YWJJbmRleCApO1xyXG5cdFx0cmV0dXJuICggaXNUYWJJbmRleE5hTiB8fCB0YWJJbmRleCA+PSAwICkgJiYgZm9jdXNhYmxlKCBlbGVtZW50LCAhaXNUYWJJbmRleE5hTiApO1xyXG5cdH1cclxufSk7XHJcblxyXG4vLyBzdXBwb3J0OiBqUXVlcnkgPDEuOFxyXG5pZiAoICEkKCBcIjxhPlwiICkub3V0ZXJXaWR0aCggMSApLmpxdWVyeSApIHtcclxuXHQkLmVhY2goIFsgXCJXaWR0aFwiLCBcIkhlaWdodFwiIF0sIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xyXG5cdFx0dmFyIHNpZGUgPSBuYW1lID09PSBcIldpZHRoXCIgPyBbIFwiTGVmdFwiLCBcIlJpZ2h0XCIgXSA6IFsgXCJUb3BcIiwgXCJCb3R0b21cIiBdLFxyXG5cdFx0XHR0eXBlID0gbmFtZS50b0xvd2VyQ2FzZSgpLFxyXG5cdFx0XHRvcmlnID0ge1xyXG5cdFx0XHRcdGlubmVyV2lkdGg6ICQuZm4uaW5uZXJXaWR0aCxcclxuXHRcdFx0XHRpbm5lckhlaWdodDogJC5mbi5pbm5lckhlaWdodCxcclxuXHRcdFx0XHRvdXRlcldpZHRoOiAkLmZuLm91dGVyV2lkdGgsXHJcblx0XHRcdFx0b3V0ZXJIZWlnaHQ6ICQuZm4ub3V0ZXJIZWlnaHRcclxuXHRcdFx0fTtcclxuXHJcblx0XHRmdW5jdGlvbiByZWR1Y2UoIGVsZW0sIHNpemUsIGJvcmRlciwgbWFyZ2luICkge1xyXG5cdFx0XHQkLmVhY2goIHNpZGUsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHNpemUgLT0gcGFyc2VGbG9hdCggJC5jc3MoIGVsZW0sIFwicGFkZGluZ1wiICsgdGhpcyApICkgfHwgMDtcclxuXHRcdFx0XHRpZiAoIGJvcmRlciApIHtcclxuXHRcdFx0XHRcdHNpemUgLT0gcGFyc2VGbG9hdCggJC5jc3MoIGVsZW0sIFwiYm9yZGVyXCIgKyB0aGlzICsgXCJXaWR0aFwiICkgKSB8fCAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIG1hcmdpbiApIHtcclxuXHRcdFx0XHRcdHNpemUgLT0gcGFyc2VGbG9hdCggJC5jc3MoIGVsZW0sIFwibWFyZ2luXCIgKyB0aGlzICkgKSB8fCAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBzaXplO1xyXG5cdFx0fVxyXG5cclxuXHRcdCQuZm5bIFwiaW5uZXJcIiArIG5hbWUgXSA9IGZ1bmN0aW9uKCBzaXplICkge1xyXG5cdFx0XHRpZiAoIHNpemUgPT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0XHRyZXR1cm4gb3JpZ1sgXCJpbm5lclwiICsgbmFtZSBdLmNhbGwoIHRoaXMgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKCB0aGlzICkuY3NzKCB0eXBlLCByZWR1Y2UoIHRoaXMsIHNpemUgKSArIFwicHhcIiApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0JC5mblsgXCJvdXRlclwiICsgbmFtZV0gPSBmdW5jdGlvbiggc2l6ZSwgbWFyZ2luICkge1xyXG5cdFx0XHRpZiAoIHR5cGVvZiBzaXplICE9PSBcIm51bWJlclwiICkge1xyXG5cdFx0XHRcdHJldHVybiBvcmlnWyBcIm91dGVyXCIgKyBuYW1lIF0uY2FsbCggdGhpcywgc2l6ZSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQoIHRoaXMpLmNzcyggdHlwZSwgcmVkdWNlKCB0aGlzLCBzaXplLCB0cnVlLCBtYXJnaW4gKSArIFwicHhcIiApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblx0fSk7XHJcbn1cclxuXHJcbi8vIHN1cHBvcnQ6IGpRdWVyeSA8MS44XHJcbmlmICggISQuZm4uYWRkQmFjayApIHtcclxuXHQkLmZuLmFkZEJhY2sgPSBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5hZGQoIHNlbGVjdG9yID09IG51bGwgP1xyXG5cdFx0XHR0aGlzLnByZXZPYmplY3QgOiB0aGlzLnByZXZPYmplY3QuZmlsdGVyKCBzZWxlY3RvciApXHJcblx0XHQpO1xyXG5cdH07XHJcbn1cclxuXHJcbi8vIHN1cHBvcnQ6IGpRdWVyeSAxLjYuMSwgMS42LjIgKGh0dHA6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0Lzk0MTMpXHJcbmlmICggJCggXCI8YT5cIiApLmRhdGEoIFwiYS1iXCIsIFwiYVwiICkucmVtb3ZlRGF0YSggXCJhLWJcIiApLmRhdGEoIFwiYS1iXCIgKSApIHtcclxuXHQkLmZuLnJlbW92ZURhdGEgPSAoZnVuY3Rpb24oIHJlbW92ZURhdGEgKSB7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24oIGtleSApIHtcclxuXHRcdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoICkge1xyXG5cdFx0XHRcdHJldHVybiByZW1vdmVEYXRhLmNhbGwoIHRoaXMsICQuY2FtZWxDYXNlKCBrZXkgKSApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiByZW1vdmVEYXRhLmNhbGwoIHRoaXMgKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9KSggJC5mbi5yZW1vdmVEYXRhICk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBkZXByZWNhdGVkXHJcbiQudWkuaWUgPSAhIS9tc2llIFtcXHcuXSsvLmV4ZWMoIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSApO1xyXG5cclxuJC5zdXBwb3J0LnNlbGVjdHN0YXJ0ID0gXCJvbnNlbGVjdHN0YXJ0XCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApO1xyXG4kLmZuLmV4dGVuZCh7XHJcblx0ZGlzYWJsZVNlbGVjdGlvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5iaW5kKCAoICQuc3VwcG9ydC5zZWxlY3RzdGFydCA/IFwic2VsZWN0c3RhcnRcIiA6IFwibW91c2Vkb3duXCIgKSArXHJcblx0XHRcdFwiLnVpLWRpc2FibGVTZWxlY3Rpb25cIiwgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdH0pO1xyXG5cdH0sXHJcblxyXG5cdGVuYWJsZVNlbGVjdGlvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy51bmJpbmQoIFwiLnVpLWRpc2FibGVTZWxlY3Rpb25cIiApO1xyXG5cdH1cclxufSk7XHJcblxyXG4kLmV4dGVuZCggJC51aSwge1xyXG5cdC8vICQudWkucGx1Z2luIGlzIGRlcHJlY2F0ZWQuIFVzZSAkLndpZGdldCgpIGV4dGVuc2lvbnMgaW5zdGVhZC5cclxuXHRwbHVnaW46IHtcclxuXHRcdGFkZDogZnVuY3Rpb24oIG1vZHVsZSwgb3B0aW9uLCBzZXQgKSB7XHJcblx0XHRcdHZhciBpLFxyXG5cdFx0XHRcdHByb3RvID0gJC51aVsgbW9kdWxlIF0ucHJvdG90eXBlO1xyXG5cdFx0XHRmb3IgKCBpIGluIHNldCApIHtcclxuXHRcdFx0XHRwcm90by5wbHVnaW5zWyBpIF0gPSBwcm90by5wbHVnaW5zWyBpIF0gfHwgW107XHJcblx0XHRcdFx0cHJvdG8ucGx1Z2luc1sgaSBdLnB1c2goIFsgb3B0aW9uLCBzZXRbIGkgXSBdICk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjYWxsOiBmdW5jdGlvbiggaW5zdGFuY2UsIG5hbWUsIGFyZ3MgKSB7XHJcblx0XHRcdHZhciBpLFxyXG5cdFx0XHRcdHNldCA9IGluc3RhbmNlLnBsdWdpbnNbIG5hbWUgXTtcclxuXHRcdFx0aWYgKCAhc2V0IHx8ICFpbnN0YW5jZS5lbGVtZW50WyAwIF0ucGFyZW50Tm9kZSB8fCBpbnN0YW5jZS5lbGVtZW50WyAwIF0ucGFyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMTEgKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKyApIHtcclxuXHRcdFx0XHRpZiAoIGluc3RhbmNlLm9wdGlvbnNbIHNldFsgaSBdWyAwIF0gXSApIHtcclxuXHRcdFx0XHRcdHNldFsgaSBdWyAxIF0uYXBwbHkoIGluc3RhbmNlLmVsZW1lbnQsIGFyZ3MgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvLyBvbmx5IHVzZWQgYnkgcmVzaXphYmxlXHJcblx0aGFzU2Nyb2xsOiBmdW5jdGlvbiggZWwsIGEgKSB7XHJcblxyXG5cdFx0Ly9JZiBvdmVyZmxvdyBpcyBoaWRkZW4sIHRoZSBlbGVtZW50IG1pZ2h0IGhhdmUgZXh0cmEgY29udGVudCwgYnV0IHRoZSB1c2VyIHdhbnRzIHRvIGhpZGUgaXRcclxuXHRcdGlmICggJCggZWwgKS5jc3MoIFwib3ZlcmZsb3dcIiApID09PSBcImhpZGRlblwiKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgc2Nyb2xsID0gKCBhICYmIGEgPT09IFwibGVmdFwiICkgPyBcInNjcm9sbExlZnRcIiA6IFwic2Nyb2xsVG9wXCIsXHJcblx0XHRcdGhhcyA9IGZhbHNlO1xyXG5cclxuXHRcdGlmICggZWxbIHNjcm9sbCBdID4gMCApIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVE9ETzogZGV0ZXJtaW5lIHdoaWNoIGNhc2VzIGFjdHVhbGx5IGNhdXNlIHRoaXMgdG8gaGFwcGVuXHJcblx0XHQvLyBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgdGhlIHNjcm9sbCBzZXQsIHNlZSBpZiBpdCdzIHBvc3NpYmxlIHRvXHJcblx0XHQvLyBzZXQgdGhlIHNjcm9sbFxyXG5cdFx0ZWxbIHNjcm9sbCBdID0gMTtcclxuXHRcdGhhcyA9ICggZWxbIHNjcm9sbCBdID4gMCApO1xyXG5cdFx0ZWxbIHNjcm9sbCBdID0gMDtcclxuXHRcdHJldHVybiBoYXM7XHJcblx0fVxyXG59KTtcclxuXHJcbn0pKCBqUXVlcnkgKTtcclxuIl19
},{}],7:[function(require,module,exports){
(function (global){
var jQuery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
require('./core');

/*!
 * jQuery UI Datepicker 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function( $, undefined ) {

$.extend($.ui, { datepicker: { version: "1.10.4" } });

var PROP_NAME = "datepicker",
	instActive;

/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

function Datepicker() {
	this._curInst = null; // The current instance in use
	this._keyEvent = false; // If the last event was a key event
	this._disabledInputs = []; // List of date picker inputs that have been disabled
	this._datepickerShowing = false; // True if the popup picker is showing , false if not
	this._inDialog = false; // True if showing within a "dialog", false if not
	this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
	this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
	this._appendClass = "ui-datepicker-append"; // The name of the append marker class
	this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
	this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
	this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
	this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
	this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
	this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
	this.regional = []; // Available regional settings, indexed by language code
	this.regional[""] = { // Default regional settings
		closeText: "Done", // Display text for close link
		prevText: "Prev", // Display text for previous month link
		nextText: "Next", // Display text for next month link
		currentText: "Today", // Display text for current month link
		monthNames: ["January","February","March","April","May","June",
			"July","August","September","October","November","December"], // Names of months for drop-down and formatting
		monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // For formatting
		dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], // For formatting
		dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // For formatting
		dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"], // Column headings for days starting at Sunday
		weekHeader: "Wk", // Column header for week of the year
		dateFormat: "mm/dd/yy", // See format options on parseDate
		firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
		isRTL: false, // True if right-to-left language, false if left-to-right
		showMonthAfterYear: false, // True if the year select precedes month, false for month then year
		yearSuffix: "" // Additional text to append to the year in the month headers
	};
	this._defaults = { // Global defaults for all the date picker instances
		showOn: "focus", // "focus" for popup on focus,
			// "button" for trigger button, or "both" for either
		showAnim: "fadeIn", // Name of jQuery animation for popup
		showOptions: {}, // Options for enhanced animations
		defaultDate: null, // Used when field is blank: actual date,
			// +/-number for offset from today, null for today
		appendText: "", // Display text following the input box, e.g. showing the format
		buttonText: "...", // Text for trigger button
		buttonImage: "", // URL for trigger button image
		buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
		hideIfNoPrevNext: false, // True to hide next/previous month links
			// if not applicable, false to just disable them
		navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
		gotoCurrent: false, // True if today link goes back to current selection instead
		changeMonth: false, // True if month can be selected directly, false if only prev/next
		changeYear: false, // True if year can be selected directly, false if only prev/next
		yearRange: "c-10:c+10", // Range of years to display in drop-down,
			// either relative to today's year (-nn:+nn), relative to currently displayed year
			// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
		showOtherMonths: false, // True to show dates in other months, false to leave blank
		selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
		showWeek: false, // True to show week of the year, false to not show it
		calculateWeek: this.iso8601Week, // How to calculate the week of the year,
			// takes a Date and returns the number of the week for it
		shortYearCutoff: "+10", // Short year values < this are in the current century,
			// > this are in the previous century,
			// string value starting with "+" for current year + value
		minDate: null, // The earliest selectable date, or null for no limit
		maxDate: null, // The latest selectable date, or null for no limit
		duration: "fast", // Duration of display/closure
		beforeShowDay: null, // Function that takes a date and returns an array with
			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
			// [2] = cell title (optional), e.g. $.datepicker.noWeekends
		beforeShow: null, // Function that takes an input field and
			// returns a set of custom settings for the date picker
		onSelect: null, // Define a callback function when a date is selected
		onChangeMonthYear: null, // Define a callback function when the month or year is changed
		onClose: null, // Define a callback function when the datepicker is closed
		numberOfMonths: 1, // Number of months to show at a time
		showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
		stepMonths: 1, // Number of months to step back/forward
		stepBigMonths: 12, // Number of months to step back/forward for the big links
		altField: "", // Selector for an alternate field to store selected dates into
		altFormat: "", // The date format to use for the alternate field
		constrainInput: true, // The input is constrained by the current date format
		showButtonPanel: false, // True to show button panel, false to not show it
		autoSize: false, // True to size the input for the date format, false to leave as is
		disabled: false // The initial disabled state
	};
	$.extend(this._defaults, this.regional[""]);
	this.dpDiv = bindHover($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
}

$.extend(Datepicker.prototype, {
	/* Class name added to elements to indicate already configured with a date picker. */
	markerClassName: "hasDatepicker",

	//Keep track of the maximum number of rows displayed (see #7043)
	maxRows: 4,

	// TODO rename to "widget" when switching to widget factory
	_widgetDatepicker: function() {
		return this.dpDiv;
	},

	/* Override the default settings for all instances of the date picker.
	 * @param  settings  object - the new settings to use as defaults (anonymous object)
	 * @return the manager object
	 */
	setDefaults: function(settings) {
		extendRemove(this._defaults, settings || {});
		return this;
	},

	/* Attach the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
	 */
	_attachDatepicker: function(target, settings) {
		var nodeName, inline, inst;
		nodeName = target.nodeName.toLowerCase();
		inline = (nodeName === "div" || nodeName === "span");
		if (!target.id) {
			this.uuid += 1;
			target.id = "dp" + this.uuid;
		}
		inst = this._newInst($(target), inline);
		inst.settings = $.extend({}, settings || {});
		if (nodeName === "input") {
			this._connectDatepicker(target, inst);
		} else if (inline) {
			this._inlineDatepicker(target, inst);
		}
	},

	/* Create a new instance object. */
	_newInst: function(target, inline) {
		var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); // escape jQuery meta chars
		return {id: id, input: target, // associated target
			selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
			drawMonth: 0, drawYear: 0, // month being drawn
			inline: inline, // is datepicker inline or not
			dpDiv: (!inline ? this.dpDiv : // presentation div
			bindHover($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))};
	},

	/* Attach the date picker to an input field. */
	_connectDatepicker: function(target, inst) {
		var input = $(target);
		inst.append = $([]);
		inst.trigger = $([]);
		if (input.hasClass(this.markerClassName)) {
			return;
		}
		this._attachments(input, inst);
		input.addClass(this.markerClassName).keydown(this._doKeyDown).
			keypress(this._doKeyPress).keyup(this._doKeyUp);
		this._autoSize(inst);
		$.data(target, PROP_NAME, inst);
		//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
		if( inst.settings.disabled ) {
			this._disableDatepicker( target );
		}
	},

	/* Make attachments based on settings. */
	_attachments: function(input, inst) {
		var showOn, buttonText, buttonImage,
			appendText = this._get(inst, "appendText"),
			isRTL = this._get(inst, "isRTL");

		if (inst.append) {
			inst.append.remove();
		}
		if (appendText) {
			inst.append = $("<span class='" + this._appendClass + "'>" + appendText + "</span>");
			input[isRTL ? "before" : "after"](inst.append);
		}

		input.unbind("focus", this._showDatepicker);

		if (inst.trigger) {
			inst.trigger.remove();
		}

		showOn = this._get(inst, "showOn");
		if (showOn === "focus" || showOn === "both") { // pop-up date picker when in the marked field
			input.focus(this._showDatepicker);
		}
		if (showOn === "button" || showOn === "both") { // pop-up date picker when button clicked
			buttonText = this._get(inst, "buttonText");
			buttonImage = this._get(inst, "buttonImage");
			inst.trigger = $(this._get(inst, "buttonImageOnly") ?
				$("<img/>").addClass(this._triggerClass).
					attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
				$("<button type='button'></button>").addClass(this._triggerClass).
					html(!buttonImage ? buttonText : $("<img/>").attr(
					{ src:buttonImage, alt:buttonText, title:buttonText })));
			input[isRTL ? "before" : "after"](inst.trigger);
			inst.trigger.click(function() {
				if ($.datepicker._datepickerShowing && $.datepicker._lastInput === input[0]) {
					$.datepicker._hideDatepicker();
				} else if ($.datepicker._datepickerShowing && $.datepicker._lastInput !== input[0]) {
					$.datepicker._hideDatepicker();
					$.datepicker._showDatepicker(input[0]);
				} else {
					$.datepicker._showDatepicker(input[0]);
				}
				return false;
			});
		}
	},

	/* Apply the maximum length for the date format. */
	_autoSize: function(inst) {
		if (this._get(inst, "autoSize") && !inst.inline) {
			var findMax, max, maxI, i,
				date = new Date(2009, 12 - 1, 20), // Ensure double digits
				dateFormat = this._get(inst, "dateFormat");

			if (dateFormat.match(/[DM]/)) {
				findMax = function(names) {
					max = 0;
					maxI = 0;
					for (i = 0; i < names.length; i++) {
						if (names[i].length > max) {
							max = names[i].length;
							maxI = i;
						}
					}
					return maxI;
				};
				date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
					"monthNames" : "monthNamesShort"))));
				date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
					"dayNames" : "dayNamesShort"))) + 20 - date.getDay());
			}
			inst.input.attr("size", this._formatDate(inst, date).length);
		}
	},

	/* Attach an inline date picker to a div. */
	_inlineDatepicker: function(target, inst) {
		var divSpan = $(target);
		if (divSpan.hasClass(this.markerClassName)) {
			return;
		}
		divSpan.addClass(this.markerClassName).append(inst.dpDiv);
		$.data(target, PROP_NAME, inst);
		this._setDate(inst, this._getDefaultDate(inst), true);
		this._updateDatepicker(inst);
		this._updateAlternate(inst);
		//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
		if( inst.settings.disabled ) {
			this._disableDatepicker( target );
		}
		// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
		// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
		inst.dpDiv.css( "display", "block" );
	},

	/* Pop-up the date picker in a "dialog" box.
	 * @param  input element - ignored
	 * @param  date	string or Date - the initial date to display
	 * @param  onSelect  function - the function to call when a date is selected
	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
	 *					event - with x/y coordinates or
	 *					leave empty for default (screen centre)
	 * @return the manager object
	 */
	_dialogDatepicker: function(input, date, onSelect, settings, pos) {
		var id, browserWidth, browserHeight, scrollX, scrollY,
			inst = this._dialogInst; // internal instance

		if (!inst) {
			this.uuid += 1;
			id = "dp" + this.uuid;
			this._dialogInput = $("<input type='text' id='" + id +
				"' style='position: absolute; top: -100px; width: 0px;'/>");
			this._dialogInput.keydown(this._doKeyDown);
			$("body").append(this._dialogInput);
			inst = this._dialogInst = this._newInst(this._dialogInput, false);
			inst.settings = {};
			$.data(this._dialogInput[0], PROP_NAME, inst);
		}
		extendRemove(inst.settings, settings || {});
		date = (date && date.constructor === Date ? this._formatDate(inst, date) : date);
		this._dialogInput.val(date);

		this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
		if (!this._pos) {
			browserWidth = document.documentElement.clientWidth;
			browserHeight = document.documentElement.clientHeight;
			scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			this._pos = // should use actual width/height below
				[(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
		}

		// move input on screen for focus, but hidden behind dialog
		this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
		inst.settings.onSelect = onSelect;
		this._inDialog = true;
		this.dpDiv.addClass(this._dialogClass);
		this._showDatepicker(this._dialogInput[0]);
		if ($.blockUI) {
			$.blockUI(this.dpDiv);
		}
		$.data(this._dialogInput[0], PROP_NAME, inst);
		return this;
	},

	/* Detach a datepicker from its control.
	 * @param  target	element - the target input field or division or span
	 */
	_destroyDatepicker: function(target) {
		var nodeName,
			$target = $(target),
			inst = $.data(target, PROP_NAME);

		if (!$target.hasClass(this.markerClassName)) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		$.removeData(target, PROP_NAME);
		if (nodeName === "input") {
			inst.append.remove();
			inst.trigger.remove();
			$target.removeClass(this.markerClassName).
				unbind("focus", this._showDatepicker).
				unbind("keydown", this._doKeyDown).
				unbind("keypress", this._doKeyPress).
				unbind("keyup", this._doKeyUp);
		} else if (nodeName === "div" || nodeName === "span") {
			$target.removeClass(this.markerClassName).empty();
		}
	},

	/* Enable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
	_enableDatepicker: function(target) {
		var nodeName, inline,
			$target = $(target),
			inst = $.data(target, PROP_NAME);

		if (!$target.hasClass(this.markerClassName)) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		if (nodeName === "input") {
			target.disabled = false;
			inst.trigger.filter("button").
				each(function() { this.disabled = false; }).end().
				filter("img").css({opacity: "1.0", cursor: ""});
		} else if (nodeName === "div" || nodeName === "span") {
			inline = $target.children("." + this._inlineClass);
			inline.children().removeClass("ui-state-disabled");
			inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
				prop("disabled", false);
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value === target ? null : value); }); // delete entry
	},

	/* Disable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
	_disableDatepicker: function(target) {
		var nodeName, inline,
			$target = $(target),
			inst = $.data(target, PROP_NAME);

		if (!$target.hasClass(this.markerClassName)) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		if (nodeName === "input") {
			target.disabled = true;
			inst.trigger.filter("button").
				each(function() { this.disabled = true; }).end().
				filter("img").css({opacity: "0.5", cursor: "default"});
		} else if (nodeName === "div" || nodeName === "span") {
			inline = $target.children("." + this._inlineClass);
			inline.children().addClass("ui-state-disabled");
			inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
				prop("disabled", true);
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value === target ? null : value); }); // delete entry
		this._disabledInputs[this._disabledInputs.length] = target;
	},

	/* Is the first field in a jQuery collection disabled as a datepicker?
	 * @param  target	element - the target input field or division or span
	 * @return boolean - true if disabled, false if enabled
	 */
	_isDisabledDatepicker: function(target) {
		if (!target) {
			return false;
		}
		for (var i = 0; i < this._disabledInputs.length; i++) {
			if (this._disabledInputs[i] === target) {
				return true;
			}
		}
		return false;
	},

	/* Retrieve the instance data for the target control.
	 * @param  target  element - the target input field or division or span
	 * @return  object - the associated instance data
	 * @throws  error if a jQuery problem getting data
	 */
	_getInst: function(target) {
		try {
			return $.data(target, PROP_NAME);
		}
		catch (err) {
			throw "Missing instance data for this datepicker";
		}
	},

	/* Update or retrieve the settings for a date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 * @param  name	object - the new settings to update or
	 *				string - the name of the setting to change or retrieve,
	 *				when retrieving also "all" for all instance settings or
	 *				"defaults" for all global defaults
	 * @param  value   any - the new value for the setting
	 *				(omit if above is an object or to retrieve a value)
	 */
	_optionDatepicker: function(target, name, value) {
		var settings, date, minDate, maxDate,
			inst = this._getInst(target);

		if (arguments.length === 2 && typeof name === "string") {
			return (name === "defaults" ? $.extend({}, $.datepicker._defaults) :
				(inst ? (name === "all" ? $.extend({}, inst.settings) :
				this._get(inst, name)) : null));
		}

		settings = name || {};
		if (typeof name === "string") {
			settings = {};
			settings[name] = value;
		}

		if (inst) {
			if (this._curInst === inst) {
				this._hideDatepicker();
			}

			date = this._getDateDatepicker(target, true);
			minDate = this._getMinMaxDate(inst, "min");
			maxDate = this._getMinMaxDate(inst, "max");
			extendRemove(inst.settings, settings);
			// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
			if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
				inst.settings.minDate = this._formatDate(inst, minDate);
			}
			if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
				inst.settings.maxDate = this._formatDate(inst, maxDate);
			}
			if ( "disabled" in settings ) {
				if ( settings.disabled ) {
					this._disableDatepicker(target);
				} else {
					this._enableDatepicker(target);
				}
			}
			this._attachments($(target), inst);
			this._autoSize(inst);
			this._setDate(inst, date);
			this._updateAlternate(inst);
			this._updateDatepicker(inst);
		}
	},

	// change method deprecated
	_changeDatepicker: function(target, name, value) {
		this._optionDatepicker(target, name, value);
	},

	/* Redraw the date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 */
	_refreshDatepicker: function(target) {
		var inst = this._getInst(target);
		if (inst) {
			this._updateDatepicker(inst);
		}
	},

	/* Set the dates for a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  date	Date - the new date
	 */
	_setDateDatepicker: function(target, date) {
		var inst = this._getInst(target);
		if (inst) {
			this._setDate(inst, date);
			this._updateDatepicker(inst);
			this._updateAlternate(inst);
		}
	},

	/* Get the date(s) for the first entry in a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  noDefault boolean - true if no default date is to be used
	 * @return Date - the current date
	 */
	_getDateDatepicker: function(target, noDefault) {
		var inst = this._getInst(target);
		if (inst && !inst.inline) {
			this._setDateFromField(inst, noDefault);
		}
		return (inst ? this._getDate(inst) : null);
	},

	/* Handle keystrokes. */
	_doKeyDown: function(event) {
		var onSelect, dateStr, sel,
			inst = $.datepicker._getInst(event.target),
			handled = true,
			isRTL = inst.dpDiv.is(".ui-datepicker-rtl");

		inst._keyEvent = true;
		if ($.datepicker._datepickerShowing) {
			switch (event.keyCode) {
				case 9: $.datepicker._hideDatepicker();
						handled = false;
						break; // hide on tab out
				case 13: sel = $("td." + $.datepicker._dayOverClass + ":not(." +
									$.datepicker._currentClass + ")", inst.dpDiv);
						if (sel[0]) {
							$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
						}

						onSelect = $.datepicker._get(inst, "onSelect");
						if (onSelect) {
							dateStr = $.datepicker._formatDate(inst);

							// trigger custom callback
							onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
						} else {
							$.datepicker._hideDatepicker();
						}

						return false; // don't submit the form
				case 27: $.datepicker._hideDatepicker();
						break; // hide on escape
				case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							-$.datepicker._get(inst, "stepBigMonths") :
							-$.datepicker._get(inst, "stepMonths")), "M");
						break; // previous month/year on page up/+ ctrl
				case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							+$.datepicker._get(inst, "stepBigMonths") :
							+$.datepicker._get(inst, "stepMonths")), "M");
						break; // next month/year on page down/+ ctrl
				case 35: if (event.ctrlKey || event.metaKey) {
							$.datepicker._clearDate(event.target);
						}
						handled = event.ctrlKey || event.metaKey;
						break; // clear on ctrl or command +end
				case 36: if (event.ctrlKey || event.metaKey) {
							$.datepicker._gotoToday(event.target);
						}
						handled = event.ctrlKey || event.metaKey;
						break; // current on ctrl or command +home
				case 37: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), "D");
						}
						handled = event.ctrlKey || event.metaKey;
						// -1 day on ctrl or command +left
						if (event.originalEvent.altKey) {
							$.datepicker._adjustDate(event.target, (event.ctrlKey ?
								-$.datepicker._get(inst, "stepBigMonths") :
								-$.datepicker._get(inst, "stepMonths")), "M");
						}
						// next month/year on alt +left on Mac
						break;
				case 38: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, -7, "D");
						}
						handled = event.ctrlKey || event.metaKey;
						break; // -1 week on ctrl or command +up
				case 39: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), "D");
						}
						handled = event.ctrlKey || event.metaKey;
						// +1 day on ctrl or command +right
						if (event.originalEvent.altKey) {
							$.datepicker._adjustDate(event.target, (event.ctrlKey ?
								+$.datepicker._get(inst, "stepBigMonths") :
								+$.datepicker._get(inst, "stepMonths")), "M");
						}
						// next month/year on alt +right
						break;
				case 40: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, +7, "D");
						}
						handled = event.ctrlKey || event.metaKey;
						break; // +1 week on ctrl or command +down
				default: handled = false;
			}
		} else if (event.keyCode === 36 && event.ctrlKey) { // display the date picker on ctrl+home
			$.datepicker._showDatepicker(this);
		} else {
			handled = false;
		}

		if (handled) {
			event.preventDefault();
			event.stopPropagation();
		}
	},

	/* Filter entered characters - based on date format. */
	_doKeyPress: function(event) {
		var chars, chr,
			inst = $.datepicker._getInst(event.target);

		if ($.datepicker._get(inst, "constrainInput")) {
			chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
			chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode);
			return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1);
		}
	},

	/* Synchronise manual entry and field/alternate field. */
	_doKeyUp: function(event) {
		var date,
			inst = $.datepicker._getInst(event.target);

		if (inst.input.val() !== inst.lastVal) {
			try {
				date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
					(inst.input ? inst.input.val() : null),
					$.datepicker._getFormatConfig(inst));

				if (date) { // only if valid
					$.datepicker._setDateFromField(inst);
					$.datepicker._updateAlternate(inst);
					$.datepicker._updateDatepicker(inst);
				}
			}
			catch (err) {
			}
		}
		return true;
	},

	/* Pop-up the date picker for a given input field.
	 * If false returned from beforeShow event handler do not show.
	 * @param  input  element - the input field attached to the date picker or
	 *					event - if triggered by focus
	 */
	_showDatepicker: function(input) {
		input = input.target || input;
		if (input.nodeName.toLowerCase() !== "input") { // find from button/image trigger
			input = $("input", input.parentNode)[0];
		}

		if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput === input) { // already here
			return;
		}

		var inst, beforeShow, beforeShowSettings, isFixed,
			offset, showAnim, duration;

		inst = $.datepicker._getInst(input);
		if ($.datepicker._curInst && $.datepicker._curInst !== inst) {
			$.datepicker._curInst.dpDiv.stop(true, true);
			if ( inst && $.datepicker._datepickerShowing ) {
				$.datepicker._hideDatepicker( $.datepicker._curInst.input[0] );
			}
		}

		beforeShow = $.datepicker._get(inst, "beforeShow");
		beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
		if(beforeShowSettings === false){
			return;
		}
		extendRemove(inst.settings, beforeShowSettings);

		inst.lastVal = null;
		$.datepicker._lastInput = input;
		$.datepicker._setDateFromField(inst);

		if ($.datepicker._inDialog) { // hide cursor
			input.value = "";
		}
		if (!$.datepicker._pos) { // position below input
			$.datepicker._pos = $.datepicker._findPos(input);
			$.datepicker._pos[1] += input.offsetHeight; // add the height
		}

		isFixed = false;
		$(input).parents().each(function() {
			isFixed |= $(this).css("position") === "fixed";
			return !isFixed;
		});

		offset = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
		$.datepicker._pos = null;
		//to avoid flashes on Firefox
		inst.dpDiv.empty();
		// determine sizing offscreen
		inst.dpDiv.css({position: "absolute", display: "block", top: "-1000px"});
		$.datepicker._updateDatepicker(inst);
		// fix width for dynamic number of date pickers
		// and adjust position before showing
		offset = $.datepicker._checkOffset(inst, offset, isFixed);
		inst.dpDiv.css({position: ($.datepicker._inDialog && $.blockUI ?
			"static" : (isFixed ? "fixed" : "absolute")), display: "none",
			left: offset.left + "px", top: offset.top + "px"});

		if (!inst.inline) {
			showAnim = $.datepicker._get(inst, "showAnim");
			duration = $.datepicker._get(inst, "duration");
			inst.dpDiv.zIndex($(input).zIndex()+1);
			$.datepicker._datepickerShowing = true;

			if ( $.effects && $.effects.effect[ showAnim ] ) {
				inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration);
			} else {
				inst.dpDiv[showAnim || "show"](showAnim ? duration : null);
			}

			if ( $.datepicker._shouldFocusInput( inst ) ) {
				inst.input.focus();
			}

			$.datepicker._curInst = inst;
		}
	},

	/* Generate the date picker content. */
	_updateDatepicker: function(inst) {
		this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
		instActive = inst; // for delegate hover events
		inst.dpDiv.empty().append(this._generateHTML(inst));
		this._attachHandlers(inst);
		inst.dpDiv.find("." + this._dayOverClass + " a").mouseover();

		var origyearshtml,
			numMonths = this._getNumberOfMonths(inst),
			cols = numMonths[1],
			width = 17;

		inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
		if (cols > 1) {
			inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em");
		}
		inst.dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") +
			"Class"]("ui-datepicker-multi");
		inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") +
			"Class"]("ui-datepicker-rtl");

		if (inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput( inst ) ) {
			inst.input.focus();
		}

		// deffered render of the years select (to avoid flashes on Firefox)
		if( inst.yearshtml ){
			origyearshtml = inst.yearshtml;
			setTimeout(function(){
				//assure that inst.yearshtml didn't change.
				if( origyearshtml === inst.yearshtml && inst.yearshtml ){
					inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
				}
				origyearshtml = inst.yearshtml = null;
			}, 0);
		}
	},

	// #6694 - don't focus the input if it's already focused
	// this breaks the change event in IE
	// Support: IE and jQuery <1.9
	_shouldFocusInput: function( inst ) {
		return inst.input && inst.input.is( ":visible" ) && !inst.input.is( ":disabled" ) && !inst.input.is( ":focus" );
	},

	/* Check positioning to remain on screen. */
	_checkOffset: function(inst, offset, isFixed) {
		var dpWidth = inst.dpDiv.outerWidth(),
			dpHeight = inst.dpDiv.outerHeight(),
			inputWidth = inst.input ? inst.input.outerWidth() : 0,
			inputHeight = inst.input ? inst.input.outerHeight() : 0,
			viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft()),
			viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());

		offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0);
		offset.left -= (isFixed && offset.left === inst.input.offset().left) ? $(document).scrollLeft() : 0;
		offset.top -= (isFixed && offset.top === (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

		// now check if datepicker is showing outside window viewport - move to a better place if so.
		offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
			Math.abs(offset.left + dpWidth - viewWidth) : 0);
		offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
			Math.abs(dpHeight + inputHeight) : 0);

		return offset;
	},

	/* Find an object's position on the screen. */
	_findPos: function(obj) {
		var position,
			inst = this._getInst(obj),
			isRTL = this._get(inst, "isRTL");

		while (obj && (obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden(obj))) {
			obj = obj[isRTL ? "previousSibling" : "nextSibling"];
		}

		position = $(obj).offset();
		return [position.left, position.top];
	},

	/* Hide the date picker from view.
	 * @param  input  element - the input field attached to the date picker
	 */
	_hideDatepicker: function(input) {
		var showAnim, duration, postProcess, onClose,
			inst = this._curInst;

		if (!inst || (input && inst !== $.data(input, PROP_NAME))) {
			return;
		}

		if (this._datepickerShowing) {
			showAnim = this._get(inst, "showAnim");
			duration = this._get(inst, "duration");
			postProcess = function() {
				$.datepicker._tidyDialog(inst);
			};

			// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
			if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) ) {
				inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
			} else {
				inst.dpDiv[(showAnim === "slideDown" ? "slideUp" :
					(showAnim === "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess);
			}

			if (!showAnim) {
				postProcess();
			}
			this._datepickerShowing = false;

			onClose = this._get(inst, "onClose");
			if (onClose) {
				onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst]);
			}

			this._lastInput = null;
			if (this._inDialog) {
				this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" });
				if ($.blockUI) {
					$.unblockUI();
					$("body").append(this.dpDiv);
				}
			}
			this._inDialog = false;
		}
	},

	/* Tidy up after a dialog display. */
	_tidyDialog: function(inst) {
		inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
	},

	/* Close date picker if clicked elsewhere. */
	_checkExternalClick: function(event) {
		if (!$.datepicker._curInst) {
			return;
		}

		var $target = $(event.target),
			inst = $.datepicker._getInst($target[0]);

		if ( ( ( $target[0].id !== $.datepicker._mainDivId &&
				$target.parents("#" + $.datepicker._mainDivId).length === 0 &&
				!$target.hasClass($.datepicker.markerClassName) &&
				!$target.closest("." + $.datepicker._triggerClass).length &&
				$.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) ) ) ||
			( $target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== inst ) ) {
				$.datepicker._hideDatepicker();
		}
	},

	/* Adjust one of the date sub-fields. */
	_adjustDate: function(id, offset, period) {
		var target = $(id),
			inst = this._getInst(target[0]);

		if (this._isDisabledDatepicker(target[0])) {
			return;
		}
		this._adjustInstDate(inst, offset +
			(period === "M" ? this._get(inst, "showCurrentAtPos") : 0), // undo positioning
			period);
		this._updateDatepicker(inst);
	},

	/* Action for current link. */
	_gotoToday: function(id) {
		var date,
			target = $(id),
			inst = this._getInst(target[0]);

		if (this._get(inst, "gotoCurrent") && inst.currentDay) {
			inst.selectedDay = inst.currentDay;
			inst.drawMonth = inst.selectedMonth = inst.currentMonth;
			inst.drawYear = inst.selectedYear = inst.currentYear;
		} else {
			date = new Date();
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
		}
		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Action for selecting a new month/year. */
	_selectMonthYear: function(id, select, period) {
		var target = $(id),
			inst = this._getInst(target[0]);

		inst["selected" + (period === "M" ? "Month" : "Year")] =
		inst["draw" + (period === "M" ? "Month" : "Year")] =
			parseInt(select.options[select.selectedIndex].value,10);

		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Action for selecting a day. */
	_selectDay: function(id, month, year, td) {
		var inst,
			target = $(id);

		if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
			return;
		}

		inst = this._getInst(target[0]);
		inst.selectedDay = inst.currentDay = $("a", td).html();
		inst.selectedMonth = inst.currentMonth = month;
		inst.selectedYear = inst.currentYear = year;
		this._selectDate(id, this._formatDate(inst,
			inst.currentDay, inst.currentMonth, inst.currentYear));
	},

	/* Erase the input field and hide the date picker. */
	_clearDate: function(id) {
		var target = $(id);
		this._selectDate(target, "");
	},

	/* Update the input field with the selected date. */
	_selectDate: function(id, dateStr) {
		var onSelect,
			target = $(id),
			inst = this._getInst(target[0]);

		dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
		if (inst.input) {
			inst.input.val(dateStr);
		}
		this._updateAlternate(inst);

		onSelect = this._get(inst, "onSelect");
		if (onSelect) {
			onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
		} else if (inst.input) {
			inst.input.trigger("change"); // fire the change event
		}

		if (inst.inline){
			this._updateDatepicker(inst);
		} else {
			this._hideDatepicker();
			this._lastInput = inst.input[0];
			if (typeof(inst.input[0]) !== "object") {
				inst.input.focus(); // restore focus
			}
			this._lastInput = null;
		}
	},

	/* Update any alternate field to synchronise with the main field. */
	_updateAlternate: function(inst) {
		var altFormat, date, dateStr,
			altField = this._get(inst, "altField");

		if (altField) { // update alternate field too
			altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
			date = this._getDate(inst);
			dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
			$(altField).each(function() { $(this).val(dateStr); });
		}
	},

	/* Set as beforeShowDay function to prevent selection of weekends.
	 * @param  date  Date - the date to customise
	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
	 */
	noWeekends: function(date) {
		var day = date.getDay();
		return [(day > 0 && day < 6), ""];
	},

	/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	 * @param  date  Date - the date to get the week for
	 * @return  number - the number of the week within the year that contains this date
	 */
	iso8601Week: function(date) {
		var time,
			checkDate = new Date(date.getTime());

		// Find Thursday of this week starting on Monday
		checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));

		time = checkDate.getTime();
		checkDate.setMonth(0); // Compare with Jan 1
		checkDate.setDate(1);
		return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	},

	/* Parse a string value into a date object.
	 * See formatDate below for the possible formats.
	 *
	 * @param  format string - the expected format of the date
	 * @param  value string - the date in the above format
	 * @param  settings Object - attributes include:
	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  Date - the extracted date value or null if value is blank
	 */
	parseDate: function (format, value, settings) {
		if (format == null || value == null) {
			throw "Invalid arguments";
		}

		value = (typeof value === "object" ? value.toString() : value + "");
		if (value === "") {
			return null;
		}

		var iFormat, dim, extra,
			iValue = 0,
			shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff,
			shortYearCutoff = (typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp :
				new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10)),
			dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
			dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
			monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
			monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
			year = -1,
			month = -1,
			day = -1,
			doy = -1,
			literal = false,
			date,
			// Check whether a format character is doubled
			lookAhead = function(match) {
				var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
				if (matches) {
					iFormat++;
				}
				return matches;
			},
			// Extract a number from the string value
			getNumber = function(match) {
				var isDoubled = lookAhead(match),
					size = (match === "@" ? 14 : (match === "!" ? 20 :
					(match === "y" && isDoubled ? 4 : (match === "o" ? 3 : 2)))),
					digits = new RegExp("^\\d{1," + size + "}"),
					num = value.substring(iValue).match(digits);
				if (!num) {
					throw "Missing number at position " + iValue;
				}
				iValue += num[0].length;
				return parseInt(num[0], 10);
			},
			// Extract a name from the string value and convert to an index
			getName = function(match, shortNames, longNames) {
				var index = -1,
					names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
						return [ [k, v] ];
					}).sort(function (a, b) {
						return -(a[1].length - b[1].length);
					});

				$.each(names, function (i, pair) {
					var name = pair[1];
					if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
						index = pair[0];
						iValue += name.length;
						return false;
					}
				});
				if (index !== -1) {
					return index + 1;
				} else {
					throw "Unknown name at position " + iValue;
				}
			},
			// Confirm that a literal character matches the string value
			checkLiteral = function() {
				if (value.charAt(iValue) !== format.charAt(iFormat)) {
					throw "Unexpected literal at position " + iValue;
				}
				iValue++;
			};

		for (iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal) {
				if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
					literal = false;
				} else {
					checkLiteral();
				}
			} else {
				switch (format.charAt(iFormat)) {
					case "d":
						day = getNumber("d");
						break;
					case "D":
						getName("D", dayNamesShort, dayNames);
						break;
					case "o":
						doy = getNumber("o");
						break;
					case "m":
						month = getNumber("m");
						break;
					case "M":
						month = getName("M", monthNamesShort, monthNames);
						break;
					case "y":
						year = getNumber("y");
						break;
					case "@":
						date = new Date(getNumber("@"));
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "!":
						date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "'":
						if (lookAhead("'")){
							checkLiteral();
						} else {
							literal = true;
						}
						break;
					default:
						checkLiteral();
				}
			}
		}

		if (iValue < value.length){
			extra = value.substr(iValue);
			if (!/^\s+/.test(extra)) {
				throw "Extra/unparsed characters found in date: " + extra;
			}
		}

		if (year === -1) {
			year = new Date().getFullYear();
		} else if (year < 100) {
			year += new Date().getFullYear() - new Date().getFullYear() % 100 +
				(year <= shortYearCutoff ? 0 : -100);
		}

		if (doy > -1) {
			month = 1;
			day = doy;
			do {
				dim = this._getDaysInMonth(year, month - 1);
				if (day <= dim) {
					break;
				}
				month++;
				day -= dim;
			} while (true);
		}

		date = this._daylightSavingAdjust(new Date(year, month - 1, day));
		if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
			throw "Invalid date"; // E.g. 31/02/00
		}
		return date;
	},

	/* Standard date formats. */
	ATOM: "yy-mm-dd", // RFC 3339 (ISO 8601)
	COOKIE: "D, dd M yy",
	ISO_8601: "yy-mm-dd",
	RFC_822: "D, d M y",
	RFC_850: "DD, dd-M-y",
	RFC_1036: "D, d M y",
	RFC_1123: "D, d M yy",
	RFC_2822: "D, d M yy",
	RSS: "D, d M y", // RFC 822
	TICKS: "!",
	TIMESTAMP: "@",
	W3C: "yy-mm-dd", // ISO 8601

	_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
		Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

	/* Format a date object into a string value.
	 * The format can be combinations of the following:
	 * d  - day of month (no leading zero)
	 * dd - day of month (two digit)
	 * o  - day of year (no leading zeros)
	 * oo - day of year (three digit)
	 * D  - day name short
	 * DD - day name long
	 * m  - month of year (no leading zero)
	 * mm - month of year (two digit)
	 * M  - month name short
	 * MM - month name long
	 * y  - year (two digit)
	 * yy - year (four digit)
	 * @ - Unix timestamp (ms since 01/01/1970)
	 * ! - Windows ticks (100ns since 01/01/0001)
	 * "..." - literal text
	 * '' - single quote
	 *
	 * @param  format string - the desired format of the date
	 * @param  date Date - the date value to format
	 * @param  settings Object - attributes include:
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  string - the date in the above format
	 */
	formatDate: function (format, date, settings) {
		if (!date) {
			return "";
		}

		var iFormat,
			dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
			dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
			monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
			monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
			// Check whether a format character is doubled
			lookAhead = function(match) {
				var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
				if (matches) {
					iFormat++;
				}
				return matches;
			},
			// Format a number, with leading zero if necessary
			formatNumber = function(match, value, len) {
				var num = "" + value;
				if (lookAhead(match)) {
					while (num.length < len) {
						num = "0" + num;
					}
				}
				return num;
			},
			// Format a name, short or long as requested
			formatName = function(match, value, shortNames, longNames) {
				return (lookAhead(match) ? longNames[value] : shortNames[value]);
			},
			output = "",
			literal = false;

		if (date) {
			for (iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
						literal = false;
					} else {
						output += format.charAt(iFormat);
					}
				} else {
					switch (format.charAt(iFormat)) {
						case "d":
							output += formatNumber("d", date.getDate(), 2);
							break;
						case "D":
							output += formatName("D", date.getDay(), dayNamesShort, dayNames);
							break;
						case "o":
							output += formatNumber("o",
								Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
							break;
						case "m":
							output += formatNumber("m", date.getMonth() + 1, 2);
							break;
						case "M":
							output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
							break;
						case "y":
							output += (lookAhead("y") ? date.getFullYear() :
								(date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100);
							break;
						case "@":
							output += date.getTime();
							break;
						case "!":
							output += date.getTime() * 10000 + this._ticksTo1970;
							break;
						case "'":
							if (lookAhead("'")) {
								output += "'";
							} else {
								literal = true;
							}
							break;
						default:
							output += format.charAt(iFormat);
					}
				}
			}
		}
		return output;
	},

	/* Extract all possible characters from the date format. */
	_possibleChars: function (format) {
		var iFormat,
			chars = "",
			literal = false,
			// Check whether a format character is doubled
			lookAhead = function(match) {
				var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
				if (matches) {
					iFormat++;
				}
				return matches;
			};

		for (iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal) {
				if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
					literal = false;
				} else {
					chars += format.charAt(iFormat);
				}
			} else {
				switch (format.charAt(iFormat)) {
					case "d": case "m": case "y": case "@":
						chars += "0123456789";
						break;
					case "D": case "M":
						return null; // Accept anything
					case "'":
						if (lookAhead("'")) {
							chars += "'";
						} else {
							literal = true;
						}
						break;
					default:
						chars += format.charAt(iFormat);
				}
			}
		}
		return chars;
	},

	/* Get a setting value, defaulting if necessary. */
	_get: function(inst, name) {
		return inst.settings[name] !== undefined ?
			inst.settings[name] : this._defaults[name];
	},

	/* Parse existing date and initialise date picker. */
	_setDateFromField: function(inst, noDefault) {
		if (inst.input.val() === inst.lastVal) {
			return;
		}

		var dateFormat = this._get(inst, "dateFormat"),
			dates = inst.lastVal = inst.input ? inst.input.val() : null,
			defaultDate = this._getDefaultDate(inst),
			date = defaultDate,
			settings = this._getFormatConfig(inst);

		try {
			date = this.parseDate(dateFormat, dates, settings) || defaultDate;
		} catch (event) {
			dates = (noDefault ? "" : dates);
		}
		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		inst.currentDay = (dates ? date.getDate() : 0);
		inst.currentMonth = (dates ? date.getMonth() : 0);
		inst.currentYear = (dates ? date.getFullYear() : 0);
		this._adjustInstDate(inst);
	},

	/* Retrieve the default date shown on opening. */
	_getDefaultDate: function(inst) {
		return this._restrictMinMax(inst,
			this._determineDate(inst, this._get(inst, "defaultDate"), new Date()));
	},

	/* A date may be specified as an exact value or a relative one. */
	_determineDate: function(inst, date, defaultDate) {
		var offsetNumeric = function(offset) {
				var date = new Date();
				date.setDate(date.getDate() + offset);
				return date;
			},
			offsetString = function(offset) {
				try {
					return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
						offset, $.datepicker._getFormatConfig(inst));
				}
				catch (e) {
					// Ignore
				}

				var date = (offset.toLowerCase().match(/^c/) ?
					$.datepicker._getDate(inst) : null) || new Date(),
					year = date.getFullYear(),
					month = date.getMonth(),
					day = date.getDate(),
					pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
					matches = pattern.exec(offset);

				while (matches) {
					switch (matches[2] || "d") {
						case "d" : case "D" :
							day += parseInt(matches[1],10); break;
						case "w" : case "W" :
							day += parseInt(matches[1],10) * 7; break;
						case "m" : case "M" :
							month += parseInt(matches[1],10);
							day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
							break;
						case "y": case "Y" :
							year += parseInt(matches[1],10);
							day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
							break;
					}
					matches = pattern.exec(offset);
				}
				return new Date(year, month, day);
			},
			newDate = (date == null || date === "" ? defaultDate : (typeof date === "string" ? offsetString(date) :
				(typeof date === "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));

		newDate = (newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate);
		if (newDate) {
			newDate.setHours(0);
			newDate.setMinutes(0);
			newDate.setSeconds(0);
			newDate.setMilliseconds(0);
		}
		return this._daylightSavingAdjust(newDate);
	},

	/* Handle switch to/from daylight saving.
	 * Hours may be non-zero on daylight saving cut-over:
	 * > 12 when midnight changeover, but then cannot generate
	 * midnight datetime, so jump to 1AM, otherwise reset.
	 * @param  date  (Date) the date to check
	 * @return  (Date) the corrected date
	 */
	_daylightSavingAdjust: function(date) {
		if (!date) {
			return null;
		}
		date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
		return date;
	},

	/* Set the date(s) directly. */
	_setDate: function(inst, date, noChange) {
		var clear = !date,
			origMonth = inst.selectedMonth,
			origYear = inst.selectedYear,
			newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));

		inst.selectedDay = inst.currentDay = newDate.getDate();
		inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
		inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
		if ((origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) && !noChange) {
			this._notifyChange(inst);
		}
		this._adjustInstDate(inst);
		if (inst.input) {
			inst.input.val(clear ? "" : this._formatDate(inst));
		}
	},

	/* Retrieve the date(s) directly. */
	_getDate: function(inst) {
		var startDate = (!inst.currentYear || (inst.input && inst.input.val() === "") ? null :
			this._daylightSavingAdjust(new Date(
			inst.currentYear, inst.currentMonth, inst.currentDay)));
			return startDate;
	},

	/* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */
	_attachHandlers: function(inst) {
		var stepMonths = this._get(inst, "stepMonths"),
			id = "#" + inst.id.replace( /\\\\/g, "\\" );
		inst.dpDiv.find("[data-handler]").map(function () {
			var handler = {
				prev: function () {
					$.datepicker._adjustDate(id, -stepMonths, "M");
				},
				next: function () {
					$.datepicker._adjustDate(id, +stepMonths, "M");
				},
				hide: function () {
					$.datepicker._hideDatepicker();
				},
				today: function () {
					$.datepicker._gotoToday(id);
				},
				selectDay: function () {
					$.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
					return false;
				},
				selectMonth: function () {
					$.datepicker._selectMonthYear(id, this, "M");
					return false;
				},
				selectYear: function () {
					$.datepicker._selectMonthYear(id, this, "Y");
					return false;
				}
			};
			$(this).bind(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
		});
	},

	/* Generate the HTML for the current state of the date picker. */
	_generateHTML: function(inst) {
		var maxDraw, prevText, prev, nextText, next, currentText, gotoDate,
			controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin,
			monthNames, monthNamesShort, beforeShowDay, showOtherMonths,
			selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate,
			cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows,
			printDate, dRow, tbody, daySettings, otherMonth, unselectable,
			tempDate = new Date(),
			today = this._daylightSavingAdjust(
				new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())), // clear time
			isRTL = this._get(inst, "isRTL"),
			showButtonPanel = this._get(inst, "showButtonPanel"),
			hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"),
			navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"),
			numMonths = this._getNumberOfMonths(inst),
			showCurrentAtPos = this._get(inst, "showCurrentAtPos"),
			stepMonths = this._get(inst, "stepMonths"),
			isMultiMonth = (numMonths[0] !== 1 || numMonths[1] !== 1),
			currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
				new Date(inst.currentYear, inst.currentMonth, inst.currentDay))),
			minDate = this._getMinMaxDate(inst, "min"),
			maxDate = this._getMinMaxDate(inst, "max"),
			drawMonth = inst.drawMonth - showCurrentAtPos,
			drawYear = inst.drawYear;

		if (drawMonth < 0) {
			drawMonth += 12;
			drawYear--;
		}
		if (maxDate) {
			maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
				maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
			maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
			while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
				drawMonth--;
				if (drawMonth < 0) {
					drawMonth = 11;
					drawYear--;
				}
			}
		}
		inst.drawMonth = drawMonth;
		inst.drawYear = drawYear;

		prevText = this._get(inst, "prevText");
		prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
			this._getFormatConfig(inst)));

		prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
			"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" +
			" title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>" :
			(hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+ prevText +"'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>"));

		nextText = this._get(inst, "nextText");
		nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
			this._getFormatConfig(inst)));

		next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
			"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" +
			" title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>" :
			(hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+ nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>"));

		currentText = this._get(inst, "currentText");
		gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today);
		currentText = (!navigationAsDateFormat ? currentText :
			this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));

		controls = (!inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
			this._get(inst, "closeText") + "</button>" : "");

		buttonPanel = (showButtonPanel) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (isRTL ? controls : "") +
			(this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" +
			">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";

		firstDay = parseInt(this._get(inst, "firstDay"),10);
		firstDay = (isNaN(firstDay) ? 0 : firstDay);

		showWeek = this._get(inst, "showWeek");
		dayNames = this._get(inst, "dayNames");
		dayNamesMin = this._get(inst, "dayNamesMin");
		monthNames = this._get(inst, "monthNames");
		monthNamesShort = this._get(inst, "monthNamesShort");
		beforeShowDay = this._get(inst, "beforeShowDay");
		showOtherMonths = this._get(inst, "showOtherMonths");
		selectOtherMonths = this._get(inst, "selectOtherMonths");
		defaultDate = this._getDefaultDate(inst);
		html = "";
		dow;
		for (row = 0; row < numMonths[0]; row++) {
			group = "";
			this.maxRows = 4;
			for (col = 0; col < numMonths[1]; col++) {
				selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
				cornerClass = " ui-corner-all";
				calender = "";
				if (isMultiMonth) {
					calender += "<div class='ui-datepicker-group";
					if (numMonths[1] > 1) {
						switch (col) {
							case 0: calender += " ui-datepicker-group-first";
								cornerClass = " ui-corner-" + (isRTL ? "right" : "left"); break;
							case numMonths[1]-1: calender += " ui-datepicker-group-last";
								cornerClass = " ui-corner-" + (isRTL ? "left" : "right"); break;
							default: calender += " ui-datepicker-group-middle"; cornerClass = ""; break;
						}
					}
					calender += "'>";
				}
				calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" +
					(/all|left/.test(cornerClass) && row === 0 ? (isRTL ? next : prev) : "") +
					(/all|right/.test(cornerClass) && row === 0 ? (isRTL ? prev : next) : "") +
					this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
					row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
					"</div><table class='ui-datepicker-calendar'><thead>" +
					"<tr>";
				thead = (showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : "");
				for (dow = 0; dow < 7; dow++) { // days of the week
					day = (dow + firstDay) % 7;
					thead += "<th" + ((dow + firstDay + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" +
						"<span title='" + dayNames[day] + "'>" + dayNamesMin[day] + "</span></th>";
				}
				calender += thead + "</tr></thead><tbody>";
				daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
				if (drawYear === inst.selectedYear && drawMonth === inst.selectedMonth) {
					inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
				}
				leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
				curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
				numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows); //If multiple months, use the higher number of rows (see #7043)
				this.maxRows = numRows;
				printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
				for (dRow = 0; dRow < numRows; dRow++) { // create date picker rows
					calender += "<tr>";
					tbody = (!showWeek ? "" : "<td class='ui-datepicker-week-col'>" +
						this._get(inst, "calculateWeek")(printDate) + "</td>");
					for (dow = 0; dow < 7; dow++) { // create date picker days
						daySettings = (beforeShowDay ?
							beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]);
						otherMonth = (printDate.getMonth() !== drawMonth);
						unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
							(minDate && printDate < minDate) || (maxDate && printDate > maxDate);
						tbody += "<td class='" +
							((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + // highlight weekends
							(otherMonth ? " ui-datepicker-other-month" : "") + // highlight days from other months
							((printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent) || // user pressed key
							(defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime()) ?
							// or defaultDate is current printedDate and defaultDate is selectedDate
							" " + this._dayOverClass : "") + // highlight selected day
							(unselectable ? " " + this._unselectableClass + " ui-state-disabled": "") +  // highlight unselectable days
							(otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + // highlight custom dates
							(printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") + // highlight selected day
							(printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" + // highlight today (if different)
							((!otherMonth || showOtherMonths) && daySettings[2] ? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'" : "") + // cell title
							(unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + // actions
							(otherMonth && !showOtherMonths ? "&#xa0;" : // display for other months
							(unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" +
							(printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") +
							(printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") + // highlight selected day
							(otherMonth ? " ui-priority-secondary" : "") + // distinguish dates from other months
							"' href='#'>" + printDate.getDate() + "</a>")) + "</td>"; // display selectable date
						printDate.setDate(printDate.getDate() + 1);
						printDate = this._daylightSavingAdjust(printDate);
					}
					calender += tbody + "</tr>";
				}
				drawMonth++;
				if (drawMonth > 11) {
					drawMonth = 0;
					drawYear++;
				}
				calender += "</tbody></table>" + (isMultiMonth ? "</div>" +
							((numMonths[0] > 0 && col === numMonths[1]-1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
				group += calender;
			}
			html += group;
		}
		html += buttonPanel;
		inst._keyEvent = false;
		return html;
	},

	/* Generate the month and year header. */
	_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
			secondary, monthNames, monthNamesShort) {

		var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear,
			changeMonth = this._get(inst, "changeMonth"),
			changeYear = this._get(inst, "changeYear"),
			showMonthAfterYear = this._get(inst, "showMonthAfterYear"),
			html = "<div class='ui-datepicker-title'>",
			monthHtml = "";

		// month selection
		if (secondary || !changeMonth) {
			monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>";
		} else {
			inMinYear = (minDate && minDate.getFullYear() === drawYear);
			inMaxYear = (maxDate && maxDate.getFullYear() === drawYear);
			monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
			for ( month = 0; month < 12; month++) {
				if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
					monthHtml += "<option value='" + month + "'" +
						(month === drawMonth ? " selected='selected'" : "") +
						">" + monthNamesShort[month] + "</option>";
				}
			}
			monthHtml += "</select>";
		}

		if (!showMonthAfterYear) {
			html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
		}

		// year selection
		if ( !inst.yearshtml ) {
			inst.yearshtml = "";
			if (secondary || !changeYear) {
				html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
			} else {
				// determine range of years to display
				years = this._get(inst, "yearRange").split(":");
				thisYear = new Date().getFullYear();
				determineYear = function(value) {
					var year = (value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) :
						(value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) :
						parseInt(value, 10)));
					return (isNaN(year) ? thisYear : year);
				};
				year = determineYear(years[0]);
				endYear = Math.max(year, determineYear(years[1] || ""));
				year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
				endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
				inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
				for (; year <= endYear; year++) {
					inst.yearshtml += "<option value='" + year + "'" +
						(year === drawYear ? " selected='selected'" : "") +
						">" + year + "</option>";
				}
				inst.yearshtml += "</select>";

				html += inst.yearshtml;
				inst.yearshtml = null;
			}
		}

		html += this._get(inst, "yearSuffix");
		if (showMonthAfterYear) {
			html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
		}
		html += "</div>"; // Close datepicker_header
		return html;
	},

	/* Adjust one of the date sub-fields. */
	_adjustInstDate: function(inst, offset, period) {
		var year = inst.drawYear + (period === "Y" ? offset : 0),
			month = inst.drawMonth + (period === "M" ? offset : 0),
			day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period === "D" ? offset : 0),
			date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));

		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		if (period === "M" || period === "Y") {
			this._notifyChange(inst);
		}
	},

	/* Ensure a date is within any min/max bounds. */
	_restrictMinMax: function(inst, date) {
		var minDate = this._getMinMaxDate(inst, "min"),
			maxDate = this._getMinMaxDate(inst, "max"),
			newDate = (minDate && date < minDate ? minDate : date);
		return (maxDate && newDate > maxDate ? maxDate : newDate);
	},

	/* Notify change of month/year. */
	_notifyChange: function(inst) {
		var onChange = this._get(inst, "onChangeMonthYear");
		if (onChange) {
			onChange.apply((inst.input ? inst.input[0] : null),
				[inst.selectedYear, inst.selectedMonth + 1, inst]);
		}
	},

	/* Determine the number of months to show. */
	_getNumberOfMonths: function(inst) {
		var numMonths = this._get(inst, "numberOfMonths");
		return (numMonths == null ? [1, 1] : (typeof numMonths === "number" ? [1, numMonths] : numMonths));
	},

	/* Determine the current maximum date - ensure no time components are set. */
	_getMinMaxDate: function(inst, minMax) {
		return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
	},

	/* Find the number of days in a given month. */
	_getDaysInMonth: function(year, month) {
		return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
	},

	/* Find the day of the week of the first of a month. */
	_getFirstDayOfMonth: function(year, month) {
		return new Date(year, month, 1).getDay();
	},

	/* Determines if we should allow a "next/prev" month display change. */
	_canAdjustMonth: function(inst, offset, curYear, curMonth) {
		var numMonths = this._getNumberOfMonths(inst),
			date = this._daylightSavingAdjust(new Date(curYear,
			curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));

		if (offset < 0) {
			date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
		}
		return this._isInRange(inst, date);
	},

	/* Is the given date in the accepted range? */
	_isInRange: function(inst, date) {
		var yearSplit, currentYear,
			minDate = this._getMinMaxDate(inst, "min"),
			maxDate = this._getMinMaxDate(inst, "max"),
			minYear = null,
			maxYear = null,
			years = this._get(inst, "yearRange");
			if (years){
				yearSplit = years.split(":");
				currentYear = new Date().getFullYear();
				minYear = parseInt(yearSplit[0], 10);
				maxYear = parseInt(yearSplit[1], 10);
				if ( yearSplit[0].match(/[+\-].*/) ) {
					minYear += currentYear;
				}
				if ( yearSplit[1].match(/[+\-].*/) ) {
					maxYear += currentYear;
				}
			}

		return ((!minDate || date.getTime() >= minDate.getTime()) &&
			(!maxDate || date.getTime() <= maxDate.getTime()) &&
			(!minYear || date.getFullYear() >= minYear) &&
			(!maxYear || date.getFullYear() <= maxYear));
	},

	/* Provide the configuration settings for formatting/parsing. */
	_getFormatConfig: function(inst) {
		var shortYearCutoff = this._get(inst, "shortYearCutoff");
		shortYearCutoff = (typeof shortYearCutoff !== "string" ? shortYearCutoff :
			new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
		return {shortYearCutoff: shortYearCutoff,
			dayNamesShort: this._get(inst, "dayNamesShort"), dayNames: this._get(inst, "dayNames"),
			monthNamesShort: this._get(inst, "monthNamesShort"), monthNames: this._get(inst, "monthNames")};
	},

	/* Format the given date for display. */
	_formatDate: function(inst, day, month, year) {
		if (!day) {
			inst.currentDay = inst.selectedDay;
			inst.currentMonth = inst.selectedMonth;
			inst.currentYear = inst.selectedYear;
		}
		var date = (day ? (typeof day === "object" ? day :
			this._daylightSavingAdjust(new Date(year, month, day))) :
			this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
		return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
	}
});

/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */
function bindHover(dpDiv) {
	var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
	return dpDiv.delegate(selector, "mouseout", function() {
			$(this).removeClass("ui-state-hover");
			if (this.className.indexOf("ui-datepicker-prev") !== -1) {
				$(this).removeClass("ui-datepicker-prev-hover");
			}
			if (this.className.indexOf("ui-datepicker-next") !== -1) {
				$(this).removeClass("ui-datepicker-next-hover");
			}
		})
		.delegate(selector, "mouseover", function(){
			if (!$.datepicker._isDisabledDatepicker( instActive.inline ? dpDiv.parent()[0] : instActive.input[0])) {
				$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
				$(this).addClass("ui-state-hover");
				if (this.className.indexOf("ui-datepicker-prev") !== -1) {
					$(this).addClass("ui-datepicker-prev-hover");
				}
				if (this.className.indexOf("ui-datepicker-next") !== -1) {
					$(this).addClass("ui-datepicker-next-hover");
				}
			}
		});
}

/* jQuery extend now ignores nulls! */
function extendRemove(target, props) {
	$.extend(target, props);
	for (var name in props) {
		if (props[name] == null) {
			target[name] = props[name];
		}
	}
	return target;
}

/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
					Object - settings for attaching new datepicker functionality
   @return  jQuery object */
$.fn.datepicker = function(options){

	/* Verify an empty collection wasn't passed - Fixes #6976 */
	if ( !this.length ) {
		return this;
	}

	/* Initialise the date picker. */
	if (!$.datepicker.initialized) {
		$(document).mousedown($.datepicker._checkExternalClick);
		$.datepicker.initialized = true;
	}

	/* Append datepicker main container to body if not exist. */
	if ($("#"+$.datepicker._mainDivId).length === 0) {
		$("body").append($.datepicker.dpDiv);
	}

	var otherArgs = Array.prototype.slice.call(arguments, 1);
	if (typeof options === "string" && (options === "isDisabled" || options === "getDate" || options === "widget")) {
		return $.datepicker["_" + options + "Datepicker"].
			apply($.datepicker, [this[0]].concat(otherArgs));
	}
	if (options === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
		return $.datepicker["_" + options + "Datepicker"].
			apply($.datepicker, [this[0]].concat(otherArgs));
	}
	return this.each(function() {
		typeof options === "string" ?
			$.datepicker["_" + options + "Datepicker"].
				apply($.datepicker, [this].concat(otherArgs)) :
			$.datepicker._attachDatepicker(this, options);
	});
};

$.datepicker = new Datepicker(); // singleton instance
$.datepicker.initialized = false;
$.datepicker.uuid = new Date().getTime();
$.datepicker.version = "1.10.4";

})(jQuery);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvbGliL2pRdWVyeURhdGVQaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciBqUXVlcnkgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcbnJlcXVpcmUoJy4vY29yZScpO1xyXG5cclxuLyohXHJcbiAqIGpRdWVyeSBVSSBEYXRlcGlja2VyIDEuMTAuNFxyXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXHJcbiAqXHJcbiAqIGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL2RhdGVwaWNrZXIvXHJcbiAqXHJcbiAqIERlcGVuZHM6XHJcbiAqXHRqcXVlcnkudWkuY29yZS5qc1xyXG4gKi9cclxuKGZ1bmN0aW9uKCAkLCB1bmRlZmluZWQgKSB7XHJcblxyXG4kLmV4dGVuZCgkLnVpLCB7IGRhdGVwaWNrZXI6IHsgdmVyc2lvbjogXCIxLjEwLjRcIiB9IH0pO1xyXG5cclxudmFyIFBST1BfTkFNRSA9IFwiZGF0ZXBpY2tlclwiLFxyXG5cdGluc3RBY3RpdmU7XHJcblxyXG4vKiBEYXRlIHBpY2tlciBtYW5hZ2VyLlxyXG4gICBVc2UgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzLCAkLmRhdGVwaWNrZXIsIHRvIGludGVyYWN0IHdpdGggdGhlIGRhdGUgcGlja2VyLlxyXG4gICBTZXR0aW5ncyBmb3IgKGdyb3VwcyBvZikgZGF0ZSBwaWNrZXJzIGFyZSBtYWludGFpbmVkIGluIGFuIGluc3RhbmNlIG9iamVjdCxcclxuICAgYWxsb3dpbmcgbXVsdGlwbGUgZGlmZmVyZW50IHNldHRpbmdzIG9uIHRoZSBzYW1lIHBhZ2UuICovXHJcblxyXG5mdW5jdGlvbiBEYXRlcGlja2VyKCkge1xyXG5cdHRoaXMuX2N1ckluc3QgPSBudWxsOyAvLyBUaGUgY3VycmVudCBpbnN0YW5jZSBpbiB1c2VcclxuXHR0aGlzLl9rZXlFdmVudCA9IGZhbHNlOyAvLyBJZiB0aGUgbGFzdCBldmVudCB3YXMgYSBrZXkgZXZlbnRcclxuXHR0aGlzLl9kaXNhYmxlZElucHV0cyA9IFtdOyAvLyBMaXN0IG9mIGRhdGUgcGlja2VyIGlucHV0cyB0aGF0IGhhdmUgYmVlbiBkaXNhYmxlZFxyXG5cdHRoaXMuX2RhdGVwaWNrZXJTaG93aW5nID0gZmFsc2U7IC8vIFRydWUgaWYgdGhlIHBvcHVwIHBpY2tlciBpcyBzaG93aW5nICwgZmFsc2UgaWYgbm90XHJcblx0dGhpcy5faW5EaWFsb2cgPSBmYWxzZTsgLy8gVHJ1ZSBpZiBzaG93aW5nIHdpdGhpbiBhIFwiZGlhbG9nXCIsIGZhbHNlIGlmIG5vdFxyXG5cdHRoaXMuX21haW5EaXZJZCA9IFwidWktZGF0ZXBpY2tlci1kaXZcIjsgLy8gVGhlIElEIG9mIHRoZSBtYWluIGRhdGVwaWNrZXIgZGl2aXNpb25cclxuXHR0aGlzLl9pbmxpbmVDbGFzcyA9IFwidWktZGF0ZXBpY2tlci1pbmxpbmVcIjsgLy8gVGhlIG5hbWUgb2YgdGhlIGlubGluZSBtYXJrZXIgY2xhc3NcclxuXHR0aGlzLl9hcHBlbmRDbGFzcyA9IFwidWktZGF0ZXBpY2tlci1hcHBlbmRcIjsgLy8gVGhlIG5hbWUgb2YgdGhlIGFwcGVuZCBtYXJrZXIgY2xhc3NcclxuXHR0aGlzLl90cmlnZ2VyQ2xhc3MgPSBcInVpLWRhdGVwaWNrZXItdHJpZ2dlclwiOyAvLyBUaGUgbmFtZSBvZiB0aGUgdHJpZ2dlciBtYXJrZXIgY2xhc3NcclxuXHR0aGlzLl9kaWFsb2dDbGFzcyA9IFwidWktZGF0ZXBpY2tlci1kaWFsb2dcIjsgLy8gVGhlIG5hbWUgb2YgdGhlIGRpYWxvZyBtYXJrZXIgY2xhc3NcclxuXHR0aGlzLl9kaXNhYmxlQ2xhc3MgPSBcInVpLWRhdGVwaWNrZXItZGlzYWJsZWRcIjsgLy8gVGhlIG5hbWUgb2YgdGhlIGRpc2FibGVkIGNvdmVyaW5nIG1hcmtlciBjbGFzc1xyXG5cdHRoaXMuX3Vuc2VsZWN0YWJsZUNsYXNzID0gXCJ1aS1kYXRlcGlja2VyLXVuc2VsZWN0YWJsZVwiOyAvLyBUaGUgbmFtZSBvZiB0aGUgdW5zZWxlY3RhYmxlIGNlbGwgbWFya2VyIGNsYXNzXHJcblx0dGhpcy5fY3VycmVudENsYXNzID0gXCJ1aS1kYXRlcGlja2VyLWN1cnJlbnQtZGF5XCI7IC8vIFRoZSBuYW1lIG9mIHRoZSBjdXJyZW50IGRheSBtYXJrZXIgY2xhc3NcclxuXHR0aGlzLl9kYXlPdmVyQ2xhc3MgPSBcInVpLWRhdGVwaWNrZXItZGF5cy1jZWxsLW92ZXJcIjsgLy8gVGhlIG5hbWUgb2YgdGhlIGRheSBob3ZlciBtYXJrZXIgY2xhc3NcclxuXHR0aGlzLnJlZ2lvbmFsID0gW107IC8vIEF2YWlsYWJsZSByZWdpb25hbCBzZXR0aW5ncywgaW5kZXhlZCBieSBsYW5ndWFnZSBjb2RlXHJcblx0dGhpcy5yZWdpb25hbFtcIlwiXSA9IHsgLy8gRGVmYXVsdCByZWdpb25hbCBzZXR0aW5nc1xyXG5cdFx0Y2xvc2VUZXh0OiBcIkRvbmVcIiwgLy8gRGlzcGxheSB0ZXh0IGZvciBjbG9zZSBsaW5rXHJcblx0XHRwcmV2VGV4dDogXCJQcmV2XCIsIC8vIERpc3BsYXkgdGV4dCBmb3IgcHJldmlvdXMgbW9udGggbGlua1xyXG5cdFx0bmV4dFRleHQ6IFwiTmV4dFwiLCAvLyBEaXNwbGF5IHRleHQgZm9yIG5leHQgbW9udGggbGlua1xyXG5cdFx0Y3VycmVudFRleHQ6IFwiVG9kYXlcIiwgLy8gRGlzcGxheSB0ZXh0IGZvciBjdXJyZW50IG1vbnRoIGxpbmtcclxuXHRcdG1vbnRoTmFtZXM6IFtcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFxyXG5cdFx0XHRcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl0sIC8vIE5hbWVzIG9mIG1vbnRocyBmb3IgZHJvcC1kb3duIGFuZCBmb3JtYXR0aW5nXHJcblx0XHRtb250aE5hbWVzU2hvcnQ6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXSwgLy8gRm9yIGZvcm1hdHRpbmdcclxuXHRcdGRheU5hbWVzOiBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXSwgLy8gRm9yIGZvcm1hdHRpbmdcclxuXHRcdGRheU5hbWVzU2hvcnQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSwgLy8gRm9yIGZvcm1hdHRpbmdcclxuXHRcdGRheU5hbWVzTWluOiBbXCJTdVwiLFwiTW9cIixcIlR1XCIsXCJXZVwiLFwiVGhcIixcIkZyXCIsXCJTYVwiXSwgLy8gQ29sdW1uIGhlYWRpbmdzIGZvciBkYXlzIHN0YXJ0aW5nIGF0IFN1bmRheVxyXG5cdFx0d2Vla0hlYWRlcjogXCJXa1wiLCAvLyBDb2x1bW4gaGVhZGVyIGZvciB3ZWVrIG9mIHRoZSB5ZWFyXHJcblx0XHRkYXRlRm9ybWF0OiBcIm1tL2RkL3l5XCIsIC8vIFNlZSBmb3JtYXQgb3B0aW9ucyBvbiBwYXJzZURhdGVcclxuXHRcdGZpcnN0RGF5OiAwLCAvLyBUaGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLCBTdW4gPSAwLCBNb24gPSAxLCAuLi5cclxuXHRcdGlzUlRMOiBmYWxzZSwgLy8gVHJ1ZSBpZiByaWdodC10by1sZWZ0IGxhbmd1YWdlLCBmYWxzZSBpZiBsZWZ0LXRvLXJpZ2h0XHJcblx0XHRzaG93TW9udGhBZnRlclllYXI6IGZhbHNlLCAvLyBUcnVlIGlmIHRoZSB5ZWFyIHNlbGVjdCBwcmVjZWRlcyBtb250aCwgZmFsc2UgZm9yIG1vbnRoIHRoZW4geWVhclxyXG5cdFx0eWVhclN1ZmZpeDogXCJcIiAvLyBBZGRpdGlvbmFsIHRleHQgdG8gYXBwZW5kIHRvIHRoZSB5ZWFyIGluIHRoZSBtb250aCBoZWFkZXJzXHJcblx0fTtcclxuXHR0aGlzLl9kZWZhdWx0cyA9IHsgLy8gR2xvYmFsIGRlZmF1bHRzIGZvciBhbGwgdGhlIGRhdGUgcGlja2VyIGluc3RhbmNlc1xyXG5cdFx0c2hvd09uOiBcImZvY3VzXCIsIC8vIFwiZm9jdXNcIiBmb3IgcG9wdXAgb24gZm9jdXMsXHJcblx0XHRcdC8vIFwiYnV0dG9uXCIgZm9yIHRyaWdnZXIgYnV0dG9uLCBvciBcImJvdGhcIiBmb3IgZWl0aGVyXHJcblx0XHRzaG93QW5pbTogXCJmYWRlSW5cIiwgLy8gTmFtZSBvZiBqUXVlcnkgYW5pbWF0aW9uIGZvciBwb3B1cFxyXG5cdFx0c2hvd09wdGlvbnM6IHt9LCAvLyBPcHRpb25zIGZvciBlbmhhbmNlZCBhbmltYXRpb25zXHJcblx0XHRkZWZhdWx0RGF0ZTogbnVsbCwgLy8gVXNlZCB3aGVuIGZpZWxkIGlzIGJsYW5rOiBhY3R1YWwgZGF0ZSxcclxuXHRcdFx0Ly8gKy8tbnVtYmVyIGZvciBvZmZzZXQgZnJvbSB0b2RheSwgbnVsbCBmb3IgdG9kYXlcclxuXHRcdGFwcGVuZFRleHQ6IFwiXCIsIC8vIERpc3BsYXkgdGV4dCBmb2xsb3dpbmcgdGhlIGlucHV0IGJveCwgZS5nLiBzaG93aW5nIHRoZSBmb3JtYXRcclxuXHRcdGJ1dHRvblRleHQ6IFwiLi4uXCIsIC8vIFRleHQgZm9yIHRyaWdnZXIgYnV0dG9uXHJcblx0XHRidXR0b25JbWFnZTogXCJcIiwgLy8gVVJMIGZvciB0cmlnZ2VyIGJ1dHRvbiBpbWFnZVxyXG5cdFx0YnV0dG9uSW1hZ2VPbmx5OiBmYWxzZSwgLy8gVHJ1ZSBpZiB0aGUgaW1hZ2UgYXBwZWFycyBhbG9uZSwgZmFsc2UgaWYgaXQgYXBwZWFycyBvbiBhIGJ1dHRvblxyXG5cdFx0aGlkZUlmTm9QcmV2TmV4dDogZmFsc2UsIC8vIFRydWUgdG8gaGlkZSBuZXh0L3ByZXZpb3VzIG1vbnRoIGxpbmtzXHJcblx0XHRcdC8vIGlmIG5vdCBhcHBsaWNhYmxlLCBmYWxzZSB0byBqdXN0IGRpc2FibGUgdGhlbVxyXG5cdFx0bmF2aWdhdGlvbkFzRGF0ZUZvcm1hdDogZmFsc2UsIC8vIFRydWUgaWYgZGF0ZSBmb3JtYXR0aW5nIGFwcGxpZWQgdG8gcHJldi90b2RheS9uZXh0IGxpbmtzXHJcblx0XHRnb3RvQ3VycmVudDogZmFsc2UsIC8vIFRydWUgaWYgdG9kYXkgbGluayBnb2VzIGJhY2sgdG8gY3VycmVudCBzZWxlY3Rpb24gaW5zdGVhZFxyXG5cdFx0Y2hhbmdlTW9udGg6IGZhbHNlLCAvLyBUcnVlIGlmIG1vbnRoIGNhbiBiZSBzZWxlY3RlZCBkaXJlY3RseSwgZmFsc2UgaWYgb25seSBwcmV2L25leHRcclxuXHRcdGNoYW5nZVllYXI6IGZhbHNlLCAvLyBUcnVlIGlmIHllYXIgY2FuIGJlIHNlbGVjdGVkIGRpcmVjdGx5LCBmYWxzZSBpZiBvbmx5IHByZXYvbmV4dFxyXG5cdFx0eWVhclJhbmdlOiBcImMtMTA6YysxMFwiLCAvLyBSYW5nZSBvZiB5ZWFycyB0byBkaXNwbGF5IGluIGRyb3AtZG93bixcclxuXHRcdFx0Ly8gZWl0aGVyIHJlbGF0aXZlIHRvIHRvZGF5J3MgeWVhciAoLW5uOitubiksIHJlbGF0aXZlIHRvIGN1cnJlbnRseSBkaXNwbGF5ZWQgeWVhclxyXG5cdFx0XHQvLyAoYy1ubjpjK25uKSwgYWJzb2x1dGUgKG5ubm46bm5ubiksIG9yIGEgY29tYmluYXRpb24gb2YgdGhlIGFib3ZlIChubm5uOi1uKVxyXG5cdFx0c2hvd090aGVyTW9udGhzOiBmYWxzZSwgLy8gVHJ1ZSB0byBzaG93IGRhdGVzIGluIG90aGVyIG1vbnRocywgZmFsc2UgdG8gbGVhdmUgYmxhbmtcclxuXHRcdHNlbGVjdE90aGVyTW9udGhzOiBmYWxzZSwgLy8gVHJ1ZSB0byBhbGxvdyBzZWxlY3Rpb24gb2YgZGF0ZXMgaW4gb3RoZXIgbW9udGhzLCBmYWxzZSBmb3IgdW5zZWxlY3RhYmxlXHJcblx0XHRzaG93V2VlazogZmFsc2UsIC8vIFRydWUgdG8gc2hvdyB3ZWVrIG9mIHRoZSB5ZWFyLCBmYWxzZSB0byBub3Qgc2hvdyBpdFxyXG5cdFx0Y2FsY3VsYXRlV2VlazogdGhpcy5pc284NjAxV2VlaywgLy8gSG93IHRvIGNhbGN1bGF0ZSB0aGUgd2VlayBvZiB0aGUgeWVhcixcclxuXHRcdFx0Ly8gdGFrZXMgYSBEYXRlIGFuZCByZXR1cm5zIHRoZSBudW1iZXIgb2YgdGhlIHdlZWsgZm9yIGl0XHJcblx0XHRzaG9ydFllYXJDdXRvZmY6IFwiKzEwXCIsIC8vIFNob3J0IHllYXIgdmFsdWVzIDwgdGhpcyBhcmUgaW4gdGhlIGN1cnJlbnQgY2VudHVyeSxcclxuXHRcdFx0Ly8gPiB0aGlzIGFyZSBpbiB0aGUgcHJldmlvdXMgY2VudHVyeSxcclxuXHRcdFx0Ly8gc3RyaW5nIHZhbHVlIHN0YXJ0aW5nIHdpdGggXCIrXCIgZm9yIGN1cnJlbnQgeWVhciArIHZhbHVlXHJcblx0XHRtaW5EYXRlOiBudWxsLCAvLyBUaGUgZWFybGllc3Qgc2VsZWN0YWJsZSBkYXRlLCBvciBudWxsIGZvciBubyBsaW1pdFxyXG5cdFx0bWF4RGF0ZTogbnVsbCwgLy8gVGhlIGxhdGVzdCBzZWxlY3RhYmxlIGRhdGUsIG9yIG51bGwgZm9yIG5vIGxpbWl0XHJcblx0XHRkdXJhdGlvbjogXCJmYXN0XCIsIC8vIER1cmF0aW9uIG9mIGRpc3BsYXkvY2xvc3VyZVxyXG5cdFx0YmVmb3JlU2hvd0RheTogbnVsbCwgLy8gRnVuY3Rpb24gdGhhdCB0YWtlcyBhIGRhdGUgYW5kIHJldHVybnMgYW4gYXJyYXkgd2l0aFxyXG5cdFx0XHQvLyBbMF0gPSB0cnVlIGlmIHNlbGVjdGFibGUsIGZhbHNlIGlmIG5vdCwgWzFdID0gY3VzdG9tIENTUyBjbGFzcyBuYW1lKHMpIG9yIFwiXCIsXHJcblx0XHRcdC8vIFsyXSA9IGNlbGwgdGl0bGUgKG9wdGlvbmFsKSwgZS5nLiAkLmRhdGVwaWNrZXIubm9XZWVrZW5kc1xyXG5cdFx0YmVmb3JlU2hvdzogbnVsbCwgLy8gRnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBpbnB1dCBmaWVsZCBhbmRcclxuXHRcdFx0Ly8gcmV0dXJucyBhIHNldCBvZiBjdXN0b20gc2V0dGluZ3MgZm9yIHRoZSBkYXRlIHBpY2tlclxyXG5cdFx0b25TZWxlY3Q6IG51bGwsIC8vIERlZmluZSBhIGNhbGxiYWNrIGZ1bmN0aW9uIHdoZW4gYSBkYXRlIGlzIHNlbGVjdGVkXHJcblx0XHRvbkNoYW5nZU1vbnRoWWVhcjogbnVsbCwgLy8gRGVmaW5lIGEgY2FsbGJhY2sgZnVuY3Rpb24gd2hlbiB0aGUgbW9udGggb3IgeWVhciBpcyBjaGFuZ2VkXHJcblx0XHRvbkNsb3NlOiBudWxsLCAvLyBEZWZpbmUgYSBjYWxsYmFjayBmdW5jdGlvbiB3aGVuIHRoZSBkYXRlcGlja2VyIGlzIGNsb3NlZFxyXG5cdFx0bnVtYmVyT2ZNb250aHM6IDEsIC8vIE51bWJlciBvZiBtb250aHMgdG8gc2hvdyBhdCBhIHRpbWVcclxuXHRcdHNob3dDdXJyZW50QXRQb3M6IDAsIC8vIFRoZSBwb3NpdGlvbiBpbiBtdWx0aXBlIG1vbnRocyBhdCB3aGljaCB0byBzaG93IHRoZSBjdXJyZW50IG1vbnRoIChzdGFydGluZyBhdCAwKVxyXG5cdFx0c3RlcE1vbnRoczogMSwgLy8gTnVtYmVyIG9mIG1vbnRocyB0byBzdGVwIGJhY2svZm9yd2FyZFxyXG5cdFx0c3RlcEJpZ01vbnRoczogMTIsIC8vIE51bWJlciBvZiBtb250aHMgdG8gc3RlcCBiYWNrL2ZvcndhcmQgZm9yIHRoZSBiaWcgbGlua3NcclxuXHRcdGFsdEZpZWxkOiBcIlwiLCAvLyBTZWxlY3RvciBmb3IgYW4gYWx0ZXJuYXRlIGZpZWxkIHRvIHN0b3JlIHNlbGVjdGVkIGRhdGVzIGludG9cclxuXHRcdGFsdEZvcm1hdDogXCJcIiwgLy8gVGhlIGRhdGUgZm9ybWF0IHRvIHVzZSBmb3IgdGhlIGFsdGVybmF0ZSBmaWVsZFxyXG5cdFx0Y29uc3RyYWluSW5wdXQ6IHRydWUsIC8vIFRoZSBpbnB1dCBpcyBjb25zdHJhaW5lZCBieSB0aGUgY3VycmVudCBkYXRlIGZvcm1hdFxyXG5cdFx0c2hvd0J1dHRvblBhbmVsOiBmYWxzZSwgLy8gVHJ1ZSB0byBzaG93IGJ1dHRvbiBwYW5lbCwgZmFsc2UgdG8gbm90IHNob3cgaXRcclxuXHRcdGF1dG9TaXplOiBmYWxzZSwgLy8gVHJ1ZSB0byBzaXplIHRoZSBpbnB1dCBmb3IgdGhlIGRhdGUgZm9ybWF0LCBmYWxzZSB0byBsZWF2ZSBhcyBpc1xyXG5cdFx0ZGlzYWJsZWQ6IGZhbHNlIC8vIFRoZSBpbml0aWFsIGRpc2FibGVkIHN0YXRlXHJcblx0fTtcclxuXHQkLmV4dGVuZCh0aGlzLl9kZWZhdWx0cywgdGhpcy5yZWdpb25hbFtcIlwiXSk7XHJcblx0dGhpcy5kcERpdiA9IGJpbmRIb3ZlcigkKFwiPGRpdiBpZD0nXCIgKyB0aGlzLl9tYWluRGl2SWQgKyBcIicgY2xhc3M9J3VpLWRhdGVwaWNrZXIgdWktd2lkZ2V0IHVpLXdpZGdldC1jb250ZW50IHVpLWhlbHBlci1jbGVhcmZpeCB1aS1jb3JuZXItYWxsJz48L2Rpdj5cIikpO1xyXG59XHJcblxyXG4kLmV4dGVuZChEYXRlcGlja2VyLnByb3RvdHlwZSwge1xyXG5cdC8qIENsYXNzIG5hbWUgYWRkZWQgdG8gZWxlbWVudHMgdG8gaW5kaWNhdGUgYWxyZWFkeSBjb25maWd1cmVkIHdpdGggYSBkYXRlIHBpY2tlci4gKi9cclxuXHRtYXJrZXJDbGFzc05hbWU6IFwiaGFzRGF0ZXBpY2tlclwiLFxyXG5cclxuXHQvL0tlZXAgdHJhY2sgb2YgdGhlIG1heGltdW0gbnVtYmVyIG9mIHJvd3MgZGlzcGxheWVkIChzZWUgIzcwNDMpXHJcblx0bWF4Um93czogNCxcclxuXHJcblx0Ly8gVE9ETyByZW5hbWUgdG8gXCJ3aWRnZXRcIiB3aGVuIHN3aXRjaGluZyB0byB3aWRnZXQgZmFjdG9yeVxyXG5cdF93aWRnZXREYXRlcGlja2VyOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmRwRGl2O1xyXG5cdH0sXHJcblxyXG5cdC8qIE92ZXJyaWRlIHRoZSBkZWZhdWx0IHNldHRpbmdzIGZvciBhbGwgaW5zdGFuY2VzIG9mIHRoZSBkYXRlIHBpY2tlci5cclxuXHQgKiBAcGFyYW0gIHNldHRpbmdzICBvYmplY3QgLSB0aGUgbmV3IHNldHRpbmdzIHRvIHVzZSBhcyBkZWZhdWx0cyAoYW5vbnltb3VzIG9iamVjdClcclxuXHQgKiBAcmV0dXJuIHRoZSBtYW5hZ2VyIG9iamVjdFxyXG5cdCAqL1xyXG5cdHNldERlZmF1bHRzOiBmdW5jdGlvbihzZXR0aW5ncykge1xyXG5cdFx0ZXh0ZW5kUmVtb3ZlKHRoaXMuX2RlZmF1bHRzLCBzZXR0aW5ncyB8fCB7fSk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHQvKiBBdHRhY2ggdGhlIGRhdGUgcGlja2VyIHRvIGEgalF1ZXJ5IHNlbGVjdGlvbi5cclxuXHQgKiBAcGFyYW0gIHRhcmdldFx0ZWxlbWVudCAtIHRoZSB0YXJnZXQgaW5wdXQgZmllbGQgb3IgZGl2aXNpb24gb3Igc3BhblxyXG5cdCAqIEBwYXJhbSAgc2V0dGluZ3MgIG9iamVjdCAtIHRoZSBuZXcgc2V0dGluZ3MgdG8gdXNlIGZvciB0aGlzIGRhdGUgcGlja2VyIGluc3RhbmNlIChhbm9ueW1vdXMpXHJcblx0ICovXHJcblx0X2F0dGFjaERhdGVwaWNrZXI6IGZ1bmN0aW9uKHRhcmdldCwgc2V0dGluZ3MpIHtcclxuXHRcdHZhciBub2RlTmFtZSwgaW5saW5lLCBpbnN0O1xyXG5cdFx0bm9kZU5hbWUgPSB0YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdGlubGluZSA9IChub2RlTmFtZSA9PT0gXCJkaXZcIiB8fCBub2RlTmFtZSA9PT0gXCJzcGFuXCIpO1xyXG5cdFx0aWYgKCF0YXJnZXQuaWQpIHtcclxuXHRcdFx0dGhpcy51dWlkICs9IDE7XHJcblx0XHRcdHRhcmdldC5pZCA9IFwiZHBcIiArIHRoaXMudXVpZDtcclxuXHRcdH1cclxuXHRcdGluc3QgPSB0aGlzLl9uZXdJbnN0KCQodGFyZ2V0KSwgaW5saW5lKTtcclxuXHRcdGluc3Quc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgc2V0dGluZ3MgfHwge30pO1xyXG5cdFx0aWYgKG5vZGVOYW1lID09PSBcImlucHV0XCIpIHtcclxuXHRcdFx0dGhpcy5fY29ubmVjdERhdGVwaWNrZXIodGFyZ2V0LCBpbnN0KTtcclxuXHRcdH0gZWxzZSBpZiAoaW5saW5lKSB7XHJcblx0XHRcdHRoaXMuX2lubGluZURhdGVwaWNrZXIodGFyZ2V0LCBpbnN0KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2JqZWN0LiAqL1xyXG5cdF9uZXdJbnN0OiBmdW5jdGlvbih0YXJnZXQsIGlubGluZSkge1xyXG5cdFx0dmFyIGlkID0gdGFyZ2V0WzBdLmlkLnJlcGxhY2UoLyhbXkEtWmEtejAtOV9cXC1dKS9nLCBcIlxcXFxcXFxcJDFcIik7IC8vIGVzY2FwZSBqUXVlcnkgbWV0YSBjaGFyc1xyXG5cdFx0cmV0dXJuIHtpZDogaWQsIGlucHV0OiB0YXJnZXQsIC8vIGFzc29jaWF0ZWQgdGFyZ2V0XHJcblx0XHRcdHNlbGVjdGVkRGF5OiAwLCBzZWxlY3RlZE1vbnRoOiAwLCBzZWxlY3RlZFllYXI6IDAsIC8vIGN1cnJlbnQgc2VsZWN0aW9uXHJcblx0XHRcdGRyYXdNb250aDogMCwgZHJhd1llYXI6IDAsIC8vIG1vbnRoIGJlaW5nIGRyYXduXHJcblx0XHRcdGlubGluZTogaW5saW5lLCAvLyBpcyBkYXRlcGlja2VyIGlubGluZSBvciBub3RcclxuXHRcdFx0ZHBEaXY6ICghaW5saW5lID8gdGhpcy5kcERpdiA6IC8vIHByZXNlbnRhdGlvbiBkaXZcclxuXHRcdFx0YmluZEhvdmVyKCQoXCI8ZGl2IGNsYXNzPSdcIiArIHRoaXMuX2lubGluZUNsYXNzICsgXCIgdWktZGF0ZXBpY2tlciB1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktaGVscGVyLWNsZWFyZml4IHVpLWNvcm5lci1hbGwnPjwvZGl2PlwiKSkpfTtcclxuXHR9LFxyXG5cclxuXHQvKiBBdHRhY2ggdGhlIGRhdGUgcGlja2VyIHRvIGFuIGlucHV0IGZpZWxkLiAqL1xyXG5cdF9jb25uZWN0RGF0ZXBpY2tlcjogZnVuY3Rpb24odGFyZ2V0LCBpbnN0KSB7XHJcblx0XHR2YXIgaW5wdXQgPSAkKHRhcmdldCk7XHJcblx0XHRpbnN0LmFwcGVuZCA9ICQoW10pO1xyXG5cdFx0aW5zdC50cmlnZ2VyID0gJChbXSk7XHJcblx0XHRpZiAoaW5wdXQuaGFzQ2xhc3ModGhpcy5tYXJrZXJDbGFzc05hbWUpKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuX2F0dGFjaG1lbnRzKGlucHV0LCBpbnN0KTtcclxuXHRcdGlucHV0LmFkZENsYXNzKHRoaXMubWFya2VyQ2xhc3NOYW1lKS5rZXlkb3duKHRoaXMuX2RvS2V5RG93bikuXHJcblx0XHRcdGtleXByZXNzKHRoaXMuX2RvS2V5UHJlc3MpLmtleXVwKHRoaXMuX2RvS2V5VXApO1xyXG5cdFx0dGhpcy5fYXV0b1NpemUoaW5zdCk7XHJcblx0XHQkLmRhdGEodGFyZ2V0LCBQUk9QX05BTUUsIGluc3QpO1xyXG5cdFx0Ly9JZiBkaXNhYmxlZCBvcHRpb24gaXMgdHJ1ZSwgZGlzYWJsZSB0aGUgZGF0ZXBpY2tlciBvbmNlIGl0IGhhcyBiZWVuIGF0dGFjaGVkIHRvIHRoZSBpbnB1dCAoc2VlIHRpY2tldCAjNTY2NSlcclxuXHRcdGlmKCBpbnN0LnNldHRpbmdzLmRpc2FibGVkICkge1xyXG5cdFx0XHR0aGlzLl9kaXNhYmxlRGF0ZXBpY2tlciggdGFyZ2V0ICk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyogTWFrZSBhdHRhY2htZW50cyBiYXNlZCBvbiBzZXR0aW5ncy4gKi9cclxuXHRfYXR0YWNobWVudHM6IGZ1bmN0aW9uKGlucHV0LCBpbnN0KSB7XHJcblx0XHR2YXIgc2hvd09uLCBidXR0b25UZXh0LCBidXR0b25JbWFnZSxcclxuXHRcdFx0YXBwZW5kVGV4dCA9IHRoaXMuX2dldChpbnN0LCBcImFwcGVuZFRleHRcIiksXHJcblx0XHRcdGlzUlRMID0gdGhpcy5fZ2V0KGluc3QsIFwiaXNSVExcIik7XHJcblxyXG5cdFx0aWYgKGluc3QuYXBwZW5kKSB7XHJcblx0XHRcdGluc3QuYXBwZW5kLnJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGFwcGVuZFRleHQpIHtcclxuXHRcdFx0aW5zdC5hcHBlbmQgPSAkKFwiPHNwYW4gY2xhc3M9J1wiICsgdGhpcy5fYXBwZW5kQ2xhc3MgKyBcIic+XCIgKyBhcHBlbmRUZXh0ICsgXCI8L3NwYW4+XCIpO1xyXG5cdFx0XHRpbnB1dFtpc1JUTCA/IFwiYmVmb3JlXCIgOiBcImFmdGVyXCJdKGluc3QuYXBwZW5kKTtcclxuXHRcdH1cclxuXHJcblx0XHRpbnB1dC51bmJpbmQoXCJmb2N1c1wiLCB0aGlzLl9zaG93RGF0ZXBpY2tlcik7XHJcblxyXG5cdFx0aWYgKGluc3QudHJpZ2dlcikge1xyXG5cdFx0XHRpbnN0LnRyaWdnZXIucmVtb3ZlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2hvd09uID0gdGhpcy5fZ2V0KGluc3QsIFwic2hvd09uXCIpO1xyXG5cdFx0aWYgKHNob3dPbiA9PT0gXCJmb2N1c1wiIHx8IHNob3dPbiA9PT0gXCJib3RoXCIpIHsgLy8gcG9wLXVwIGRhdGUgcGlja2VyIHdoZW4gaW4gdGhlIG1hcmtlZCBmaWVsZFxyXG5cdFx0XHRpbnB1dC5mb2N1cyh0aGlzLl9zaG93RGF0ZXBpY2tlcik7XHJcblx0XHR9XHJcblx0XHRpZiAoc2hvd09uID09PSBcImJ1dHRvblwiIHx8IHNob3dPbiA9PT0gXCJib3RoXCIpIHsgLy8gcG9wLXVwIGRhdGUgcGlja2VyIHdoZW4gYnV0dG9uIGNsaWNrZWRcclxuXHRcdFx0YnV0dG9uVGV4dCA9IHRoaXMuX2dldChpbnN0LCBcImJ1dHRvblRleHRcIik7XHJcblx0XHRcdGJ1dHRvbkltYWdlID0gdGhpcy5fZ2V0KGluc3QsIFwiYnV0dG9uSW1hZ2VcIik7XHJcblx0XHRcdGluc3QudHJpZ2dlciA9ICQodGhpcy5fZ2V0KGluc3QsIFwiYnV0dG9uSW1hZ2VPbmx5XCIpID9cclxuXHRcdFx0XHQkKFwiPGltZy8+XCIpLmFkZENsYXNzKHRoaXMuX3RyaWdnZXJDbGFzcykuXHJcblx0XHRcdFx0XHRhdHRyKHsgc3JjOiBidXR0b25JbWFnZSwgYWx0OiBidXR0b25UZXh0LCB0aXRsZTogYnV0dG9uVGV4dCB9KSA6XHJcblx0XHRcdFx0JChcIjxidXR0b24gdHlwZT0nYnV0dG9uJz48L2J1dHRvbj5cIikuYWRkQ2xhc3ModGhpcy5fdHJpZ2dlckNsYXNzKS5cclxuXHRcdFx0XHRcdGh0bWwoIWJ1dHRvbkltYWdlID8gYnV0dG9uVGV4dCA6ICQoXCI8aW1nLz5cIikuYXR0cihcclxuXHRcdFx0XHRcdHsgc3JjOmJ1dHRvbkltYWdlLCBhbHQ6YnV0dG9uVGV4dCwgdGl0bGU6YnV0dG9uVGV4dCB9KSkpO1xyXG5cdFx0XHRpbnB1dFtpc1JUTCA/IFwiYmVmb3JlXCIgOiBcImFmdGVyXCJdKGluc3QudHJpZ2dlcik7XHJcblx0XHRcdGluc3QudHJpZ2dlci5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoJC5kYXRlcGlja2VyLl9kYXRlcGlja2VyU2hvd2luZyAmJiAkLmRhdGVwaWNrZXIuX2xhc3RJbnB1dCA9PT0gaW5wdXRbMF0pIHtcclxuXHRcdFx0XHRcdCQuZGF0ZXBpY2tlci5faGlkZURhdGVwaWNrZXIoKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKCQuZGF0ZXBpY2tlci5fZGF0ZXBpY2tlclNob3dpbmcgJiYgJC5kYXRlcGlja2VyLl9sYXN0SW5wdXQgIT09IGlucHV0WzBdKSB7XHJcblx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX2hpZGVEYXRlcGlja2VyKCk7XHJcblx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX3Nob3dEYXRlcGlja2VyKGlucHV0WzBdKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JC5kYXRlcGlja2VyLl9zaG93RGF0ZXBpY2tlcihpbnB1dFswXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyogQXBwbHkgdGhlIG1heGltdW0gbGVuZ3RoIGZvciB0aGUgZGF0ZSBmb3JtYXQuICovXHJcblx0X2F1dG9TaXplOiBmdW5jdGlvbihpbnN0KSB7XHJcblx0XHRpZiAodGhpcy5fZ2V0KGluc3QsIFwiYXV0b1NpemVcIikgJiYgIWluc3QuaW5saW5lKSB7XHJcblx0XHRcdHZhciBmaW5kTWF4LCBtYXgsIG1heEksIGksXHJcblx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKDIwMDksIDEyIC0gMSwgMjApLCAvLyBFbnN1cmUgZG91YmxlIGRpZ2l0c1xyXG5cdFx0XHRcdGRhdGVGb3JtYXQgPSB0aGlzLl9nZXQoaW5zdCwgXCJkYXRlRm9ybWF0XCIpO1xyXG5cclxuXHRcdFx0aWYgKGRhdGVGb3JtYXQubWF0Y2goL1tETV0vKSkge1xyXG5cdFx0XHRcdGZpbmRNYXggPSBmdW5jdGlvbihuYW1lcykge1xyXG5cdFx0XHRcdFx0bWF4ID0gMDtcclxuXHRcdFx0XHRcdG1heEkgPSAwO1xyXG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdGlmIChuYW1lc1tpXS5sZW5ndGggPiBtYXgpIHtcclxuXHRcdFx0XHRcdFx0XHRtYXggPSBuYW1lc1tpXS5sZW5ndGg7XHJcblx0XHRcdFx0XHRcdFx0bWF4SSA9IGk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBtYXhJO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0ZGF0ZS5zZXRNb250aChmaW5kTWF4KHRoaXMuX2dldChpbnN0LCAoZGF0ZUZvcm1hdC5tYXRjaCgvTU0vKSA/XHJcblx0XHRcdFx0XHRcIm1vbnRoTmFtZXNcIiA6IFwibW9udGhOYW1lc1Nob3J0XCIpKSkpO1xyXG5cdFx0XHRcdGRhdGUuc2V0RGF0ZShmaW5kTWF4KHRoaXMuX2dldChpbnN0LCAoZGF0ZUZvcm1hdC5tYXRjaCgvREQvKSA/XHJcblx0XHRcdFx0XHRcImRheU5hbWVzXCIgOiBcImRheU5hbWVzU2hvcnRcIikpKSArIDIwIC0gZGF0ZS5nZXREYXkoKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aW5zdC5pbnB1dC5hdHRyKFwic2l6ZVwiLCB0aGlzLl9mb3JtYXREYXRlKGluc3QsIGRhdGUpLmxlbmd0aCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyogQXR0YWNoIGFuIGlubGluZSBkYXRlIHBpY2tlciB0byBhIGRpdi4gKi9cclxuXHRfaW5saW5lRGF0ZXBpY2tlcjogZnVuY3Rpb24odGFyZ2V0LCBpbnN0KSB7XHJcblx0XHR2YXIgZGl2U3BhbiA9ICQodGFyZ2V0KTtcclxuXHRcdGlmIChkaXZTcGFuLmhhc0NsYXNzKHRoaXMubWFya2VyQ2xhc3NOYW1lKSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRkaXZTcGFuLmFkZENsYXNzKHRoaXMubWFya2VyQ2xhc3NOYW1lKS5hcHBlbmQoaW5zdC5kcERpdik7XHJcblx0XHQkLmRhdGEodGFyZ2V0LCBQUk9QX05BTUUsIGluc3QpO1xyXG5cdFx0dGhpcy5fc2V0RGF0ZShpbnN0LCB0aGlzLl9nZXREZWZhdWx0RGF0ZShpbnN0KSwgdHJ1ZSk7XHJcblx0XHR0aGlzLl91cGRhdGVEYXRlcGlja2VyKGluc3QpO1xyXG5cdFx0dGhpcy5fdXBkYXRlQWx0ZXJuYXRlKGluc3QpO1xyXG5cdFx0Ly9JZiBkaXNhYmxlZCBvcHRpb24gaXMgdHJ1ZSwgZGlzYWJsZSB0aGUgZGF0ZXBpY2tlciBiZWZvcmUgc2hvd2luZyBpdCAoc2VlIHRpY2tldCAjNTY2NSlcclxuXHRcdGlmKCBpbnN0LnNldHRpbmdzLmRpc2FibGVkICkge1xyXG5cdFx0XHR0aGlzLl9kaXNhYmxlRGF0ZXBpY2tlciggdGFyZ2V0ICk7XHJcblx0XHR9XHJcblx0XHQvLyBTZXQgZGlzcGxheTpibG9jayBpbiBwbGFjZSBvZiBpbnN0LmRwRGl2LnNob3coKSB3aGljaCB3b24ndCB3b3JrIG9uIGRpc2Nvbm5lY3RlZCBlbGVtZW50c1xyXG5cdFx0Ly8gaHR0cDovL2J1Z3MuanF1ZXJ5dWkuY29tL3RpY2tldC83NTUyIC0gQSBEYXRlcGlja2VyIGNyZWF0ZWQgb24gYSBkZXRhY2hlZCBkaXYgaGFzIHplcm8gaGVpZ2h0XHJcblx0XHRpbnN0LmRwRGl2LmNzcyggXCJkaXNwbGF5XCIsIFwiYmxvY2tcIiApO1xyXG5cdH0sXHJcblxyXG5cdC8qIFBvcC11cCB0aGUgZGF0ZSBwaWNrZXIgaW4gYSBcImRpYWxvZ1wiIGJveC5cclxuXHQgKiBAcGFyYW0gIGlucHV0IGVsZW1lbnQgLSBpZ25vcmVkXHJcblx0ICogQHBhcmFtICBkYXRlXHRzdHJpbmcgb3IgRGF0ZSAtIHRoZSBpbml0aWFsIGRhdGUgdG8gZGlzcGxheVxyXG5cdCAqIEBwYXJhbSAgb25TZWxlY3QgIGZ1bmN0aW9uIC0gdGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIGRhdGUgaXMgc2VsZWN0ZWRcclxuXHQgKiBAcGFyYW0gIHNldHRpbmdzICBvYmplY3QgLSB1cGRhdGUgdGhlIGRpYWxvZyBkYXRlIHBpY2tlciBpbnN0YW5jZSdzIHNldHRpbmdzIChhbm9ueW1vdXMgb2JqZWN0KVxyXG5cdCAqIEBwYXJhbSAgcG9zIGludFsyXSAtIGNvb3JkaW5hdGVzIGZvciB0aGUgZGlhbG9nJ3MgcG9zaXRpb24gd2l0aGluIHRoZSBzY3JlZW4gb3JcclxuXHQgKlx0XHRcdFx0XHRldmVudCAtIHdpdGggeC95IGNvb3JkaW5hdGVzIG9yXHJcblx0ICpcdFx0XHRcdFx0bGVhdmUgZW1wdHkgZm9yIGRlZmF1bHQgKHNjcmVlbiBjZW50cmUpXHJcblx0ICogQHJldHVybiB0aGUgbWFuYWdlciBvYmplY3RcclxuXHQgKi9cclxuXHRfZGlhbG9nRGF0ZXBpY2tlcjogZnVuY3Rpb24oaW5wdXQsIGRhdGUsIG9uU2VsZWN0LCBzZXR0aW5ncywgcG9zKSB7XHJcblx0XHR2YXIgaWQsIGJyb3dzZXJXaWR0aCwgYnJvd3NlckhlaWdodCwgc2Nyb2xsWCwgc2Nyb2xsWSxcclxuXHRcdFx0aW5zdCA9IHRoaXMuX2RpYWxvZ0luc3Q7IC8vIGludGVybmFsIGluc3RhbmNlXHJcblxyXG5cdFx0aWYgKCFpbnN0KSB7XHJcblx0XHRcdHRoaXMudXVpZCArPSAxO1xyXG5cdFx0XHRpZCA9IFwiZHBcIiArIHRoaXMudXVpZDtcclxuXHRcdFx0dGhpcy5fZGlhbG9nSW5wdXQgPSAkKFwiPGlucHV0IHR5cGU9J3RleHQnIGlkPSdcIiArIGlkICtcclxuXHRcdFx0XHRcIicgc3R5bGU9J3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtMTAwcHg7IHdpZHRoOiAwcHg7Jy8+XCIpO1xyXG5cdFx0XHR0aGlzLl9kaWFsb2dJbnB1dC5rZXlkb3duKHRoaXMuX2RvS2V5RG93bik7XHJcblx0XHRcdCQoXCJib2R5XCIpLmFwcGVuZCh0aGlzLl9kaWFsb2dJbnB1dCk7XHJcblx0XHRcdGluc3QgPSB0aGlzLl9kaWFsb2dJbnN0ID0gdGhpcy5fbmV3SW5zdCh0aGlzLl9kaWFsb2dJbnB1dCwgZmFsc2UpO1xyXG5cdFx0XHRpbnN0LnNldHRpbmdzID0ge307XHJcblx0XHRcdCQuZGF0YSh0aGlzLl9kaWFsb2dJbnB1dFswXSwgUFJPUF9OQU1FLCBpbnN0KTtcclxuXHRcdH1cclxuXHRcdGV4dGVuZFJlbW92ZShpbnN0LnNldHRpbmdzLCBzZXR0aW5ncyB8fCB7fSk7XHJcblx0XHRkYXRlID0gKGRhdGUgJiYgZGF0ZS5jb25zdHJ1Y3RvciA9PT0gRGF0ZSA/IHRoaXMuX2Zvcm1hdERhdGUoaW5zdCwgZGF0ZSkgOiBkYXRlKTtcclxuXHRcdHRoaXMuX2RpYWxvZ0lucHV0LnZhbChkYXRlKTtcclxuXHJcblx0XHR0aGlzLl9wb3MgPSAocG9zID8gKHBvcy5sZW5ndGggPyBwb3MgOiBbcG9zLnBhZ2VYLCBwb3MucGFnZVldKSA6IG51bGwpO1xyXG5cdFx0aWYgKCF0aGlzLl9wb3MpIHtcclxuXHRcdFx0YnJvd3NlcldpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xyXG5cdFx0XHRicm93c2VySGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuXHRcdFx0c2Nyb2xsWCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcclxuXHRcdFx0c2Nyb2xsWSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblx0XHRcdHRoaXMuX3BvcyA9IC8vIHNob3VsZCB1c2UgYWN0dWFsIHdpZHRoL2hlaWdodCBiZWxvd1xyXG5cdFx0XHRcdFsoYnJvd3NlcldpZHRoIC8gMikgLSAxMDAgKyBzY3JvbGxYLCAoYnJvd3NlckhlaWdodCAvIDIpIC0gMTUwICsgc2Nyb2xsWV07XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbW92ZSBpbnB1dCBvbiBzY3JlZW4gZm9yIGZvY3VzLCBidXQgaGlkZGVuIGJlaGluZCBkaWFsb2dcclxuXHRcdHRoaXMuX2RpYWxvZ0lucHV0LmNzcyhcImxlZnRcIiwgKHRoaXMuX3Bvc1swXSArIDIwKSArIFwicHhcIikuY3NzKFwidG9wXCIsIHRoaXMuX3Bvc1sxXSArIFwicHhcIik7XHJcblx0XHRpbnN0LnNldHRpbmdzLm9uU2VsZWN0ID0gb25TZWxlY3Q7XHJcblx0XHR0aGlzLl9pbkRpYWxvZyA9IHRydWU7XHJcblx0XHR0aGlzLmRwRGl2LmFkZENsYXNzKHRoaXMuX2RpYWxvZ0NsYXNzKTtcclxuXHRcdHRoaXMuX3Nob3dEYXRlcGlja2VyKHRoaXMuX2RpYWxvZ0lucHV0WzBdKTtcclxuXHRcdGlmICgkLmJsb2NrVUkpIHtcclxuXHRcdFx0JC5ibG9ja1VJKHRoaXMuZHBEaXYpO1xyXG5cdFx0fVxyXG5cdFx0JC5kYXRhKHRoaXMuX2RpYWxvZ0lucHV0WzBdLCBQUk9QX05BTUUsIGluc3QpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0LyogRGV0YWNoIGEgZGF0ZXBpY2tlciBmcm9tIGl0cyBjb250cm9sLlxyXG5cdCAqIEBwYXJhbSAgdGFyZ2V0XHRlbGVtZW50IC0gdGhlIHRhcmdldCBpbnB1dCBmaWVsZCBvciBkaXZpc2lvbiBvciBzcGFuXHJcblx0ICovXHJcblx0X2Rlc3Ryb3lEYXRlcGlja2VyOiBmdW5jdGlvbih0YXJnZXQpIHtcclxuXHRcdHZhciBub2RlTmFtZSxcclxuXHRcdFx0JHRhcmdldCA9ICQodGFyZ2V0KSxcclxuXHRcdFx0aW5zdCA9ICQuZGF0YSh0YXJnZXQsIFBST1BfTkFNRSk7XHJcblxyXG5cdFx0aWYgKCEkdGFyZ2V0Lmhhc0NsYXNzKHRoaXMubWFya2VyQ2xhc3NOYW1lKSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0bm9kZU5hbWUgPSB0YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdCQucmVtb3ZlRGF0YSh0YXJnZXQsIFBST1BfTkFNRSk7XHJcblx0XHRpZiAobm9kZU5hbWUgPT09IFwiaW5wdXRcIikge1xyXG5cdFx0XHRpbnN0LmFwcGVuZC5yZW1vdmUoKTtcclxuXHRcdFx0aW5zdC50cmlnZ2VyLnJlbW92ZSgpO1xyXG5cdFx0XHQkdGFyZ2V0LnJlbW92ZUNsYXNzKHRoaXMubWFya2VyQ2xhc3NOYW1lKS5cclxuXHRcdFx0XHR1bmJpbmQoXCJmb2N1c1wiLCB0aGlzLl9zaG93RGF0ZXBpY2tlcikuXHJcblx0XHRcdFx0dW5iaW5kKFwia2V5ZG93blwiLCB0aGlzLl9kb0tleURvd24pLlxyXG5cdFx0XHRcdHVuYmluZChcImtleXByZXNzXCIsIHRoaXMuX2RvS2V5UHJlc3MpLlxyXG5cdFx0XHRcdHVuYmluZChcImtleXVwXCIsIHRoaXMuX2RvS2V5VXApO1xyXG5cdFx0fSBlbHNlIGlmIChub2RlTmFtZSA9PT0gXCJkaXZcIiB8fCBub2RlTmFtZSA9PT0gXCJzcGFuXCIpIHtcclxuXHRcdFx0JHRhcmdldC5yZW1vdmVDbGFzcyh0aGlzLm1hcmtlckNsYXNzTmFtZSkuZW1wdHkoKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvKiBFbmFibGUgdGhlIGRhdGUgcGlja2VyIHRvIGEgalF1ZXJ5IHNlbGVjdGlvbi5cclxuXHQgKiBAcGFyYW0gIHRhcmdldFx0ZWxlbWVudCAtIHRoZSB0YXJnZXQgaW5wdXQgZmllbGQgb3IgZGl2aXNpb24gb3Igc3BhblxyXG5cdCAqL1xyXG5cdF9lbmFibGVEYXRlcGlja2VyOiBmdW5jdGlvbih0YXJnZXQpIHtcclxuXHRcdHZhciBub2RlTmFtZSwgaW5saW5lLFxyXG5cdFx0XHQkdGFyZ2V0ID0gJCh0YXJnZXQpLFxyXG5cdFx0XHRpbnN0ID0gJC5kYXRhKHRhcmdldCwgUFJPUF9OQU1FKTtcclxuXHJcblx0XHRpZiAoISR0YXJnZXQuaGFzQ2xhc3ModGhpcy5tYXJrZXJDbGFzc05hbWUpKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRub2RlTmFtZSA9IHRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0aWYgKG5vZGVOYW1lID09PSBcImlucHV0XCIpIHtcclxuXHRcdFx0dGFyZ2V0LmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdGluc3QudHJpZ2dlci5maWx0ZXIoXCJidXR0b25cIikuXHJcblx0XHRcdFx0ZWFjaChmdW5jdGlvbigpIHsgdGhpcy5kaXNhYmxlZCA9IGZhbHNlOyB9KS5lbmQoKS5cclxuXHRcdFx0XHRmaWx0ZXIoXCJpbWdcIikuY3NzKHtvcGFjaXR5OiBcIjEuMFwiLCBjdXJzb3I6IFwiXCJ9KTtcclxuXHRcdH0gZWxzZSBpZiAobm9kZU5hbWUgPT09IFwiZGl2XCIgfHwgbm9kZU5hbWUgPT09IFwic3BhblwiKSB7XHJcblx0XHRcdGlubGluZSA9ICR0YXJnZXQuY2hpbGRyZW4oXCIuXCIgKyB0aGlzLl9pbmxpbmVDbGFzcyk7XHJcblx0XHRcdGlubGluZS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKFwidWktc3RhdGUtZGlzYWJsZWRcIik7XHJcblx0XHRcdGlubGluZS5maW5kKFwic2VsZWN0LnVpLWRhdGVwaWNrZXItbW9udGgsIHNlbGVjdC51aS1kYXRlcGlja2VyLXllYXJcIikuXHJcblx0XHRcdFx0cHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuX2Rpc2FibGVkSW5wdXRzID0gJC5tYXAodGhpcy5fZGlzYWJsZWRJbnB1dHMsXHJcblx0XHRcdGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiAodmFsdWUgPT09IHRhcmdldCA/IG51bGwgOiB2YWx1ZSk7IH0pOyAvLyBkZWxldGUgZW50cnlcclxuXHR9LFxyXG5cclxuXHQvKiBEaXNhYmxlIHRoZSBkYXRlIHBpY2tlciB0byBhIGpRdWVyeSBzZWxlY3Rpb24uXHJcblx0ICogQHBhcmFtICB0YXJnZXRcdGVsZW1lbnQgLSB0aGUgdGFyZ2V0IGlucHV0IGZpZWxkIG9yIGRpdmlzaW9uIG9yIHNwYW5cclxuXHQgKi9cclxuXHRfZGlzYWJsZURhdGVwaWNrZXI6IGZ1bmN0aW9uKHRhcmdldCkge1xyXG5cdFx0dmFyIG5vZGVOYW1lLCBpbmxpbmUsXHJcblx0XHRcdCR0YXJnZXQgPSAkKHRhcmdldCksXHJcblx0XHRcdGluc3QgPSAkLmRhdGEodGFyZ2V0LCBQUk9QX05BTUUpO1xyXG5cclxuXHRcdGlmICghJHRhcmdldC5oYXNDbGFzcyh0aGlzLm1hcmtlckNsYXNzTmFtZSkpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdG5vZGVOYW1lID0gdGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRpZiAobm9kZU5hbWUgPT09IFwiaW5wdXRcIikge1xyXG5cdFx0XHR0YXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRpbnN0LnRyaWdnZXIuZmlsdGVyKFwiYnV0dG9uXCIpLlxyXG5cdFx0XHRcdGVhY2goZnVuY3Rpb24oKSB7IHRoaXMuZGlzYWJsZWQgPSB0cnVlOyB9KS5lbmQoKS5cclxuXHRcdFx0XHRmaWx0ZXIoXCJpbWdcIikuY3NzKHtvcGFjaXR5OiBcIjAuNVwiLCBjdXJzb3I6IFwiZGVmYXVsdFwifSk7XHJcblx0XHR9IGVsc2UgaWYgKG5vZGVOYW1lID09PSBcImRpdlwiIHx8IG5vZGVOYW1lID09PSBcInNwYW5cIikge1xyXG5cdFx0XHRpbmxpbmUgPSAkdGFyZ2V0LmNoaWxkcmVuKFwiLlwiICsgdGhpcy5faW5saW5lQ2xhc3MpO1xyXG5cdFx0XHRpbmxpbmUuY2hpbGRyZW4oKS5hZGRDbGFzcyhcInVpLXN0YXRlLWRpc2FibGVkXCIpO1xyXG5cdFx0XHRpbmxpbmUuZmluZChcInNlbGVjdC51aS1kYXRlcGlja2VyLW1vbnRoLCBzZWxlY3QudWktZGF0ZXBpY2tlci15ZWFyXCIpLlxyXG5cdFx0XHRcdHByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuX2Rpc2FibGVkSW5wdXRzID0gJC5tYXAodGhpcy5fZGlzYWJsZWRJbnB1dHMsXHJcblx0XHRcdGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiAodmFsdWUgPT09IHRhcmdldCA/IG51bGwgOiB2YWx1ZSk7IH0pOyAvLyBkZWxldGUgZW50cnlcclxuXHRcdHRoaXMuX2Rpc2FibGVkSW5wdXRzW3RoaXMuX2Rpc2FibGVkSW5wdXRzLmxlbmd0aF0gPSB0YXJnZXQ7XHJcblx0fSxcclxuXHJcblx0LyogSXMgdGhlIGZpcnN0IGZpZWxkIGluIGEgalF1ZXJ5IGNvbGxlY3Rpb24gZGlzYWJsZWQgYXMgYSBkYXRlcGlja2VyP1xyXG5cdCAqIEBwYXJhbSAgdGFyZ2V0XHRlbGVtZW50IC0gdGhlIHRhcmdldCBpbnB1dCBmaWVsZCBvciBkaXZpc2lvbiBvciBzcGFuXHJcblx0ICogQHJldHVybiBib29sZWFuIC0gdHJ1ZSBpZiBkaXNhYmxlZCwgZmFsc2UgaWYgZW5hYmxlZFxyXG5cdCAqL1xyXG5cdF9pc0Rpc2FibGVkRGF0ZXBpY2tlcjogZnVuY3Rpb24odGFyZ2V0KSB7XHJcblx0XHRpZiAoIXRhcmdldCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2Rpc2FibGVkSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmICh0aGlzLl9kaXNhYmxlZElucHV0c1tpXSA9PT0gdGFyZ2V0KSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cclxuXHQvKiBSZXRyaWV2ZSB0aGUgaW5zdGFuY2UgZGF0YSBmb3IgdGhlIHRhcmdldCBjb250cm9sLlxyXG5cdCAqIEBwYXJhbSAgdGFyZ2V0ICBlbGVtZW50IC0gdGhlIHRhcmdldCBpbnB1dCBmaWVsZCBvciBkaXZpc2lvbiBvciBzcGFuXHJcblx0ICogQHJldHVybiAgb2JqZWN0IC0gdGhlIGFzc29jaWF0ZWQgaW5zdGFuY2UgZGF0YVxyXG5cdCAqIEB0aHJvd3MgIGVycm9yIGlmIGEgalF1ZXJ5IHByb2JsZW0gZ2V0dGluZyBkYXRhXHJcblx0ICovXHJcblx0X2dldEluc3Q6IGZ1bmN0aW9uKHRhcmdldCkge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0cmV0dXJuICQuZGF0YSh0YXJnZXQsIFBST1BfTkFNRSk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCAoZXJyKSB7XHJcblx0XHRcdHRocm93IFwiTWlzc2luZyBpbnN0YW5jZSBkYXRhIGZvciB0aGlzIGRhdGVwaWNrZXJcIjtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvKiBVcGRhdGUgb3IgcmV0cmlldmUgdGhlIHNldHRpbmdzIGZvciBhIGRhdGUgcGlja2VyIGF0dGFjaGVkIHRvIGFuIGlucHV0IGZpZWxkIG9yIGRpdmlzaW9uLlxyXG5cdCAqIEBwYXJhbSAgdGFyZ2V0ICBlbGVtZW50IC0gdGhlIHRhcmdldCBpbnB1dCBmaWVsZCBvciBkaXZpc2lvbiBvciBzcGFuXHJcblx0ICogQHBhcmFtICBuYW1lXHRvYmplY3QgLSB0aGUgbmV3IHNldHRpbmdzIHRvIHVwZGF0ZSBvclxyXG5cdCAqXHRcdFx0XHRzdHJpbmcgLSB0aGUgbmFtZSBvZiB0aGUgc2V0dGluZyB0byBjaGFuZ2Ugb3IgcmV0cmlldmUsXHJcblx0ICpcdFx0XHRcdHdoZW4gcmV0cmlldmluZyBhbHNvIFwiYWxsXCIgZm9yIGFsbCBpbnN0YW5jZSBzZXR0aW5ncyBvclxyXG5cdCAqXHRcdFx0XHRcImRlZmF1bHRzXCIgZm9yIGFsbCBnbG9iYWwgZGVmYXVsdHNcclxuXHQgKiBAcGFyYW0gIHZhbHVlICAgYW55IC0gdGhlIG5ldyB2YWx1ZSBmb3IgdGhlIHNldHRpbmdcclxuXHQgKlx0XHRcdFx0KG9taXQgaWYgYWJvdmUgaXMgYW4gb2JqZWN0IG9yIHRvIHJldHJpZXZlIGEgdmFsdWUpXHJcblx0ICovXHJcblx0X29wdGlvbkRhdGVwaWNrZXI6IGZ1bmN0aW9uKHRhcmdldCwgbmFtZSwgdmFsdWUpIHtcclxuXHRcdHZhciBzZXR0aW5ncywgZGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSxcclxuXHRcdFx0aW5zdCA9IHRoaXMuX2dldEluc3QodGFyZ2V0KTtcclxuXHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRyZXR1cm4gKG5hbWUgPT09IFwiZGVmYXVsdHNcIiA/ICQuZXh0ZW5kKHt9LCAkLmRhdGVwaWNrZXIuX2RlZmF1bHRzKSA6XHJcblx0XHRcdFx0KGluc3QgPyAobmFtZSA9PT0gXCJhbGxcIiA/ICQuZXh0ZW5kKHt9LCBpbnN0LnNldHRpbmdzKSA6XHJcblx0XHRcdFx0dGhpcy5fZ2V0KGluc3QsIG5hbWUpKSA6IG51bGwpKTtcclxuXHRcdH1cclxuXHJcblx0XHRzZXR0aW5ncyA9IG5hbWUgfHwge307XHJcblx0XHRpZiAodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0c2V0dGluZ3MgPSB7fTtcclxuXHRcdFx0c2V0dGluZ3NbbmFtZV0gPSB2YWx1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoaW5zdCkge1xyXG5cdFx0XHRpZiAodGhpcy5fY3VySW5zdCA9PT0gaW5zdCkge1xyXG5cdFx0XHRcdHRoaXMuX2hpZGVEYXRlcGlja2VyKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGRhdGUgPSB0aGlzLl9nZXREYXRlRGF0ZXBpY2tlcih0YXJnZXQsIHRydWUpO1xyXG5cdFx0XHRtaW5EYXRlID0gdGhpcy5fZ2V0TWluTWF4RGF0ZShpbnN0LCBcIm1pblwiKTtcclxuXHRcdFx0bWF4RGF0ZSA9IHRoaXMuX2dldE1pbk1heERhdGUoaW5zdCwgXCJtYXhcIik7XHJcblx0XHRcdGV4dGVuZFJlbW92ZShpbnN0LnNldHRpbmdzLCBzZXR0aW5ncyk7XHJcblx0XHRcdC8vIHJlZm9ybWF0IHRoZSBvbGQgbWluRGF0ZS9tYXhEYXRlIHZhbHVlcyBpZiBkYXRlRm9ybWF0IGNoYW5nZXMgYW5kIGEgbmV3IG1pbkRhdGUvbWF4RGF0ZSBpc24ndCBwcm92aWRlZFxyXG5cdFx0XHRpZiAobWluRGF0ZSAhPT0gbnVsbCAmJiBzZXR0aW5ncy5kYXRlRm9ybWF0ICE9PSB1bmRlZmluZWQgJiYgc2V0dGluZ3MubWluRGF0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0aW5zdC5zZXR0aW5ncy5taW5EYXRlID0gdGhpcy5fZm9ybWF0RGF0ZShpbnN0LCBtaW5EYXRlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAobWF4RGF0ZSAhPT0gbnVsbCAmJiBzZXR0aW5ncy5kYXRlRm9ybWF0ICE9PSB1bmRlZmluZWQgJiYgc2V0dGluZ3MubWF4RGF0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0aW5zdC5zZXR0aW5ncy5tYXhEYXRlID0gdGhpcy5fZm9ybWF0RGF0ZShpbnN0LCBtYXhEYXRlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIFwiZGlzYWJsZWRcIiBpbiBzZXR0aW5ncyApIHtcclxuXHRcdFx0XHRpZiAoIHNldHRpbmdzLmRpc2FibGVkICkge1xyXG5cdFx0XHRcdFx0dGhpcy5fZGlzYWJsZURhdGVwaWNrZXIodGFyZ2V0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5fZW5hYmxlRGF0ZXBpY2tlcih0YXJnZXQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLl9hdHRhY2htZW50cygkKHRhcmdldCksIGluc3QpO1xyXG5cdFx0XHR0aGlzLl9hdXRvU2l6ZShpbnN0KTtcclxuXHRcdFx0dGhpcy5fc2V0RGF0ZShpbnN0LCBkYXRlKTtcclxuXHRcdFx0dGhpcy5fdXBkYXRlQWx0ZXJuYXRlKGluc3QpO1xyXG5cdFx0XHR0aGlzLl91cGRhdGVEYXRlcGlja2VyKGluc3QpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8vIGNoYW5nZSBtZXRob2QgZGVwcmVjYXRlZFxyXG5cdF9jaGFuZ2VEYXRlcGlja2VyOiBmdW5jdGlvbih0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XHJcblx0XHR0aGlzLl9vcHRpb25EYXRlcGlja2VyKHRhcmdldCwgbmFtZSwgdmFsdWUpO1xyXG5cdH0sXHJcblxyXG5cdC8qIFJlZHJhdyB0aGUgZGF0ZSBwaWNrZXIgYXR0YWNoZWQgdG8gYW4gaW5wdXQgZmllbGQgb3IgZGl2aXNpb24uXHJcblx0ICogQHBhcmFtICB0YXJnZXQgIGVsZW1lbnQgLSB0aGUgdGFyZ2V0IGlucHV0IGZpZWxkIG9yIGRpdmlzaW9uIG9yIHNwYW5cclxuXHQgKi9cclxuXHRfcmVmcmVzaERhdGVwaWNrZXI6IGZ1bmN0aW9uKHRhcmdldCkge1xyXG5cdFx0dmFyIGluc3QgPSB0aGlzLl9nZXRJbnN0KHRhcmdldCk7XHJcblx0XHRpZiAoaW5zdCkge1xyXG5cdFx0XHR0aGlzLl91cGRhdGVEYXRlcGlja2VyKGluc3QpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8qIFNldCB0aGUgZGF0ZXMgZm9yIGEgalF1ZXJ5IHNlbGVjdGlvbi5cclxuXHQgKiBAcGFyYW0gIHRhcmdldCBlbGVtZW50IC0gdGhlIHRhcmdldCBpbnB1dCBmaWVsZCBvciBkaXZpc2lvbiBvciBzcGFuXHJcblx0ICogQHBhcmFtICBkYXRlXHREYXRlIC0gdGhlIG5ldyBkYXRlXHJcblx0ICovXHJcblx0X3NldERhdGVEYXRlcGlja2VyOiBmdW5jdGlvbih0YXJnZXQsIGRhdGUpIHtcclxuXHRcdHZhciBpbnN0ID0gdGhpcy5fZ2V0SW5zdCh0YXJnZXQpO1xyXG5cdFx0aWYgKGluc3QpIHtcclxuXHRcdFx0dGhpcy5fc2V0RGF0ZShpbnN0LCBkYXRlKTtcclxuXHRcdFx0dGhpcy5fdXBkYXRlRGF0ZXBpY2tlcihpbnN0KTtcclxuXHRcdFx0dGhpcy5fdXBkYXRlQWx0ZXJuYXRlKGluc3QpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8qIEdldCB0aGUgZGF0ZShzKSBmb3IgdGhlIGZpcnN0IGVudHJ5IGluIGEgalF1ZXJ5IHNlbGVjdGlvbi5cclxuXHQgKiBAcGFyYW0gIHRhcmdldCBlbGVtZW50IC0gdGhlIHRhcmdldCBpbnB1dCBmaWVsZCBvciBkaXZpc2lvbiBvciBzcGFuXHJcblx0ICogQHBhcmFtICBub0RlZmF1bHQgYm9vbGVhbiAtIHRydWUgaWYgbm8gZGVmYXVsdCBkYXRlIGlzIHRvIGJlIHVzZWRcclxuXHQgKiBAcmV0dXJuIERhdGUgLSB0aGUgY3VycmVudCBkYXRlXHJcblx0ICovXHJcblx0X2dldERhdGVEYXRlcGlja2VyOiBmdW5jdGlvbih0YXJnZXQsIG5vRGVmYXVsdCkge1xyXG5cdFx0dmFyIGluc3QgPSB0aGlzLl9nZXRJbnN0KHRhcmdldCk7XHJcblx0XHRpZiAoaW5zdCAmJiAhaW5zdC5pbmxpbmUpIHtcclxuXHRcdFx0dGhpcy5fc2V0RGF0ZUZyb21GaWVsZChpbnN0LCBub0RlZmF1bHQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIChpbnN0ID8gdGhpcy5fZ2V0RGF0ZShpbnN0KSA6IG51bGwpO1xyXG5cdH0sXHJcblxyXG5cdC8qIEhhbmRsZSBrZXlzdHJva2VzLiAqL1xyXG5cdF9kb0tleURvd246IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHR2YXIgb25TZWxlY3QsIGRhdGVTdHIsIHNlbCxcclxuXHRcdFx0aW5zdCA9ICQuZGF0ZXBpY2tlci5fZ2V0SW5zdChldmVudC50YXJnZXQpLFxyXG5cdFx0XHRoYW5kbGVkID0gdHJ1ZSxcclxuXHRcdFx0aXNSVEwgPSBpbnN0LmRwRGl2LmlzKFwiLnVpLWRhdGVwaWNrZXItcnRsXCIpO1xyXG5cclxuXHRcdGluc3QuX2tleUV2ZW50ID0gdHJ1ZTtcclxuXHRcdGlmICgkLmRhdGVwaWNrZXIuX2RhdGVwaWNrZXJTaG93aW5nKSB7XHJcblx0XHRcdHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG5cdFx0XHRcdGNhc2UgOTogJC5kYXRlcGlja2VyLl9oaWRlRGF0ZXBpY2tlcigpO1xyXG5cdFx0XHRcdFx0XHRoYW5kbGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdGJyZWFrOyAvLyBoaWRlIG9uIHRhYiBvdXRcclxuXHRcdFx0XHRjYXNlIDEzOiBzZWwgPSAkKFwidGQuXCIgKyAkLmRhdGVwaWNrZXIuX2RheU92ZXJDbGFzcyArIFwiOm5vdCguXCIgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX2N1cnJlbnRDbGFzcyArIFwiKVwiLCBpbnN0LmRwRGl2KTtcclxuXHRcdFx0XHRcdFx0aWYgKHNlbFswXSkge1xyXG5cdFx0XHRcdFx0XHRcdCQuZGF0ZXBpY2tlci5fc2VsZWN0RGF5KGV2ZW50LnRhcmdldCwgaW5zdC5zZWxlY3RlZE1vbnRoLCBpbnN0LnNlbGVjdGVkWWVhciwgc2VsWzBdKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0b25TZWxlY3QgPSAkLmRhdGVwaWNrZXIuX2dldChpbnN0LCBcIm9uU2VsZWN0XCIpO1xyXG5cdFx0XHRcdFx0XHRpZiAob25TZWxlY3QpIHtcclxuXHRcdFx0XHRcdFx0XHRkYXRlU3RyID0gJC5kYXRlcGlja2VyLl9mb3JtYXREYXRlKGluc3QpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyB0cmlnZ2VyIGN1c3RvbSBjYWxsYmFja1xyXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0LmFwcGx5KChpbnN0LmlucHV0ID8gaW5zdC5pbnB1dFswXSA6IG51bGwpLCBbZGF0ZVN0ciwgaW5zdF0pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdCQuZGF0ZXBpY2tlci5faGlkZURhdGVwaWNrZXIoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBkb24ndCBzdWJtaXQgdGhlIGZvcm1cclxuXHRcdFx0XHRjYXNlIDI3OiAkLmRhdGVwaWNrZXIuX2hpZGVEYXRlcGlja2VyKCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrOyAvLyBoaWRlIG9uIGVzY2FwZVxyXG5cdFx0XHRcdGNhc2UgMzM6ICQuZGF0ZXBpY2tlci5fYWRqdXN0RGF0ZShldmVudC50YXJnZXQsIChldmVudC5jdHJsS2V5ID9cclxuXHRcdFx0XHRcdFx0XHQtJC5kYXRlcGlja2VyLl9nZXQoaW5zdCwgXCJzdGVwQmlnTW9udGhzXCIpIDpcclxuXHRcdFx0XHRcdFx0XHQtJC5kYXRlcGlja2VyLl9nZXQoaW5zdCwgXCJzdGVwTW9udGhzXCIpKSwgXCJNXCIpO1xyXG5cdFx0XHRcdFx0XHRicmVhazsgLy8gcHJldmlvdXMgbW9udGgveWVhciBvbiBwYWdlIHVwLysgY3RybFxyXG5cdFx0XHRcdGNhc2UgMzQ6ICQuZGF0ZXBpY2tlci5fYWRqdXN0RGF0ZShldmVudC50YXJnZXQsIChldmVudC5jdHJsS2V5ID9cclxuXHRcdFx0XHRcdFx0XHQrJC5kYXRlcGlja2VyLl9nZXQoaW5zdCwgXCJzdGVwQmlnTW9udGhzXCIpIDpcclxuXHRcdFx0XHRcdFx0XHQrJC5kYXRlcGlja2VyLl9nZXQoaW5zdCwgXCJzdGVwTW9udGhzXCIpKSwgXCJNXCIpO1xyXG5cdFx0XHRcdFx0XHRicmVhazsgLy8gbmV4dCBtb250aC95ZWFyIG9uIHBhZ2UgZG93bi8rIGN0cmxcclxuXHRcdFx0XHRjYXNlIDM1OiBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XHJcblx0XHRcdFx0XHRcdFx0JC5kYXRlcGlja2VyLl9jbGVhckRhdGUoZXZlbnQudGFyZ2V0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRoYW5kbGVkID0gZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5O1xyXG5cdFx0XHRcdFx0XHRicmVhazsgLy8gY2xlYXIgb24gY3RybCBvciBjb21tYW5kICtlbmRcclxuXHRcdFx0XHRjYXNlIDM2OiBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XHJcblx0XHRcdFx0XHRcdFx0JC5kYXRlcGlja2VyLl9nb3RvVG9kYXkoZXZlbnQudGFyZ2V0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRoYW5kbGVkID0gZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5O1xyXG5cdFx0XHRcdFx0XHRicmVhazsgLy8gY3VycmVudCBvbiBjdHJsIG9yIGNvbW1hbmQgK2hvbWVcclxuXHRcdFx0XHRjYXNlIDM3OiBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XHJcblx0XHRcdFx0XHRcdFx0JC5kYXRlcGlja2VyLl9hZGp1c3REYXRlKGV2ZW50LnRhcmdldCwgKGlzUlRMID8gKzEgOiAtMSksIFwiRFwiKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRoYW5kbGVkID0gZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5O1xyXG5cdFx0XHRcdFx0XHQvLyAtMSBkYXkgb24gY3RybCBvciBjb21tYW5kICtsZWZ0XHJcblx0XHRcdFx0XHRcdGlmIChldmVudC5vcmlnaW5hbEV2ZW50LmFsdEtleSkge1xyXG5cdFx0XHRcdFx0XHRcdCQuZGF0ZXBpY2tlci5fYWRqdXN0RGF0ZShldmVudC50YXJnZXQsIChldmVudC5jdHJsS2V5ID9cclxuXHRcdFx0XHRcdFx0XHRcdC0kLmRhdGVwaWNrZXIuX2dldChpbnN0LCBcInN0ZXBCaWdNb250aHNcIikgOlxyXG5cdFx0XHRcdFx0XHRcdFx0LSQuZGF0ZXBpY2tlci5fZ2V0KGluc3QsIFwic3RlcE1vbnRoc1wiKSksIFwiTVwiKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyBuZXh0IG1vbnRoL3llYXIgb24gYWx0ICtsZWZ0IG9uIE1hY1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDM4OiBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XHJcblx0XHRcdFx0XHRcdFx0JC5kYXRlcGlja2VyLl9hZGp1c3REYXRlKGV2ZW50LnRhcmdldCwgLTcsIFwiRFwiKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRoYW5kbGVkID0gZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5O1xyXG5cdFx0XHRcdFx0XHRicmVhazsgLy8gLTEgd2VlayBvbiBjdHJsIG9yIGNvbW1hbmQgK3VwXHJcblx0XHRcdFx0Y2FzZSAzOTogaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkge1xyXG5cdFx0XHRcdFx0XHRcdCQuZGF0ZXBpY2tlci5fYWRqdXN0RGF0ZShldmVudC50YXJnZXQsIChpc1JUTCA/IC0xIDogKzEpLCBcIkRcIik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aGFuZGxlZCA9IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleTtcclxuXHRcdFx0XHRcdFx0Ly8gKzEgZGF5IG9uIGN0cmwgb3IgY29tbWFuZCArcmlnaHRcclxuXHRcdFx0XHRcdFx0aWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQuYWx0S2V5KSB7XHJcblx0XHRcdFx0XHRcdFx0JC5kYXRlcGlja2VyLl9hZGp1c3REYXRlKGV2ZW50LnRhcmdldCwgKGV2ZW50LmN0cmxLZXkgP1xyXG5cdFx0XHRcdFx0XHRcdFx0KyQuZGF0ZXBpY2tlci5fZ2V0KGluc3QsIFwic3RlcEJpZ01vbnRoc1wiKSA6XHJcblx0XHRcdFx0XHRcdFx0XHQrJC5kYXRlcGlja2VyLl9nZXQoaW5zdCwgXCJzdGVwTW9udGhzXCIpKSwgXCJNXCIpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC8vIG5leHQgbW9udGgveWVhciBvbiBhbHQgK3JpZ2h0XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgNDA6IGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpIHtcclxuXHRcdFx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX2FkanVzdERhdGUoZXZlbnQudGFyZ2V0LCArNywgXCJEXCIpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGhhbmRsZWQgPSBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXk7XHJcblx0XHRcdFx0XHRcdGJyZWFrOyAvLyArMSB3ZWVrIG9uIGN0cmwgb3IgY29tbWFuZCArZG93blxyXG5cdFx0XHRcdGRlZmF1bHQ6IGhhbmRsZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzNiAmJiBldmVudC5jdHJsS2V5KSB7IC8vIGRpc3BsYXkgdGhlIGRhdGUgcGlja2VyIG9uIGN0cmwraG9tZVxyXG5cdFx0XHQkLmRhdGVwaWNrZXIuX3Nob3dEYXRlcGlja2VyKHRoaXMpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGFuZGxlZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChoYW5kbGVkKSB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8qIEZpbHRlciBlbnRlcmVkIGNoYXJhY3RlcnMgLSBiYXNlZCBvbiBkYXRlIGZvcm1hdC4gKi9cclxuXHRfZG9LZXlQcmVzczogZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdHZhciBjaGFycywgY2hyLFxyXG5cdFx0XHRpbnN0ID0gJC5kYXRlcGlja2VyLl9nZXRJbnN0KGV2ZW50LnRhcmdldCk7XHJcblxyXG5cdFx0aWYgKCQuZGF0ZXBpY2tlci5fZ2V0KGluc3QsIFwiY29uc3RyYWluSW5wdXRcIikpIHtcclxuXHRcdFx0Y2hhcnMgPSAkLmRhdGVwaWNrZXIuX3Bvc3NpYmxlQ2hhcnMoJC5kYXRlcGlja2VyLl9nZXQoaW5zdCwgXCJkYXRlRm9ybWF0XCIpKTtcclxuXHRcdFx0Y2hyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5jaGFyQ29kZSA9PSBudWxsID8gZXZlbnQua2V5Q29kZSA6IGV2ZW50LmNoYXJDb2RlKTtcclxuXHRcdFx0cmV0dXJuIGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSB8fCAoY2hyIDwgXCIgXCIgfHwgIWNoYXJzIHx8IGNoYXJzLmluZGV4T2YoY2hyKSA+IC0xKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvKiBTeW5jaHJvbmlzZSBtYW51YWwgZW50cnkgYW5kIGZpZWxkL2FsdGVybmF0ZSBmaWVsZC4gKi9cclxuXHRfZG9LZXlVcDogZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdHZhciBkYXRlLFxyXG5cdFx0XHRpbnN0ID0gJC5kYXRlcGlja2VyLl9nZXRJbnN0KGV2ZW50LnRhcmdldCk7XHJcblxyXG5cdFx0aWYgKGluc3QuaW5wdXQudmFsKCkgIT09IGluc3QubGFzdFZhbCkge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGRhdGUgPSAkLmRhdGVwaWNrZXIucGFyc2VEYXRlKCQuZGF0ZXBpY2tlci5fZ2V0KGluc3QsIFwiZGF0ZUZvcm1hdFwiKSxcclxuXHRcdFx0XHRcdChpbnN0LmlucHV0ID8gaW5zdC5pbnB1dC52YWwoKSA6IG51bGwpLFxyXG5cdFx0XHRcdFx0JC5kYXRlcGlja2VyLl9nZXRGb3JtYXRDb25maWcoaW5zdCkpO1xyXG5cclxuXHRcdFx0XHRpZiAoZGF0ZSkgeyAvLyBvbmx5IGlmIHZhbGlkXHJcblx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX3NldERhdGVGcm9tRmllbGQoaW5zdCk7XHJcblx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX3VwZGF0ZUFsdGVybmF0ZShpbnN0KTtcclxuXHRcdFx0XHRcdCQuZGF0ZXBpY2tlci5fdXBkYXRlRGF0ZXBpY2tlcihpbnN0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2ggKGVycikge1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9LFxyXG5cclxuXHQvKiBQb3AtdXAgdGhlIGRhdGUgcGlja2VyIGZvciBhIGdpdmVuIGlucHV0IGZpZWxkLlxyXG5cdCAqIElmIGZhbHNlIHJldHVybmVkIGZyb20gYmVmb3JlU2hvdyBldmVudCBoYW5kbGVyIGRvIG5vdCBzaG93LlxyXG5cdCAqIEBwYXJhbSAgaW5wdXQgIGVsZW1lbnQgLSB0aGUgaW5wdXQgZmllbGQgYXR0YWNoZWQgdG8gdGhlIGRhdGUgcGlja2VyIG9yXHJcblx0ICpcdFx0XHRcdFx0ZXZlbnQgLSBpZiB0cmlnZ2VyZWQgYnkgZm9jdXNcclxuXHQgKi9cclxuXHRfc2hvd0RhdGVwaWNrZXI6IGZ1bmN0aW9uKGlucHV0KSB7XHJcblx0XHRpbnB1dCA9IGlucHV0LnRhcmdldCB8fCBpbnB1dDtcclxuXHRcdGlmIChpbnB1dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcImlucHV0XCIpIHsgLy8gZmluZCBmcm9tIGJ1dHRvbi9pbWFnZSB0cmlnZ2VyXHJcblx0XHRcdGlucHV0ID0gJChcImlucHV0XCIsIGlucHV0LnBhcmVudE5vZGUpWzBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICgkLmRhdGVwaWNrZXIuX2lzRGlzYWJsZWREYXRlcGlja2VyKGlucHV0KSB8fCAkLmRhdGVwaWNrZXIuX2xhc3RJbnB1dCA9PT0gaW5wdXQpIHsgLy8gYWxyZWFkeSBoZXJlXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgaW5zdCwgYmVmb3JlU2hvdywgYmVmb3JlU2hvd1NldHRpbmdzLCBpc0ZpeGVkLFxyXG5cdFx0XHRvZmZzZXQsIHNob3dBbmltLCBkdXJhdGlvbjtcclxuXHJcblx0XHRpbnN0ID0gJC5kYXRlcGlja2VyLl9nZXRJbnN0KGlucHV0KTtcclxuXHRcdGlmICgkLmRhdGVwaWNrZXIuX2N1ckluc3QgJiYgJC5kYXRlcGlja2VyLl9jdXJJbnN0ICE9PSBpbnN0KSB7XHJcblx0XHRcdCQuZGF0ZXBpY2tlci5fY3VySW5zdC5kcERpdi5zdG9wKHRydWUsIHRydWUpO1xyXG5cdFx0XHRpZiAoIGluc3QgJiYgJC5kYXRlcGlja2VyLl9kYXRlcGlja2VyU2hvd2luZyApIHtcclxuXHRcdFx0XHQkLmRhdGVwaWNrZXIuX2hpZGVEYXRlcGlja2VyKCAkLmRhdGVwaWNrZXIuX2N1ckluc3QuaW5wdXRbMF0gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGJlZm9yZVNob3cgPSAkLmRhdGVwaWNrZXIuX2dldChpbnN0LCBcImJlZm9yZVNob3dcIik7XHJcblx0XHRiZWZvcmVTaG93U2V0dGluZ3MgPSBiZWZvcmVTaG93ID8gYmVmb3JlU2hvdy5hcHBseShpbnB1dCwgW2lucHV0LCBpbnN0XSkgOiB7fTtcclxuXHRcdGlmKGJlZm9yZVNob3dTZXR0aW5ncyA9PT0gZmFsc2Upe1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRleHRlbmRSZW1vdmUoaW5zdC5zZXR0aW5ncywgYmVmb3JlU2hvd1NldHRpbmdzKTtcclxuXHJcblx0XHRpbnN0Lmxhc3RWYWwgPSBudWxsO1xyXG5cdFx0JC5kYXRlcGlja2VyLl9sYXN0SW5wdXQgPSBpbnB1dDtcclxuXHRcdCQuZGF0ZXBpY2tlci5fc2V0RGF0ZUZyb21GaWVsZChpbnN0KTtcclxuXHJcblx0XHRpZiAoJC5kYXRlcGlja2VyLl9pbkRpYWxvZykgeyAvLyBoaWRlIGN1cnNvclxyXG5cdFx0XHRpbnB1dC52YWx1ZSA9IFwiXCI7XHJcblx0XHR9XHJcblx0XHRpZiAoISQuZGF0ZXBpY2tlci5fcG9zKSB7IC8vIHBvc2l0aW9uIGJlbG93IGlucHV0XHJcblx0XHRcdCQuZGF0ZXBpY2tlci5fcG9zID0gJC5kYXRlcGlja2VyLl9maW5kUG9zKGlucHV0KTtcclxuXHRcdFx0JC5kYXRlcGlja2VyLl9wb3NbMV0gKz0gaW5wdXQub2Zmc2V0SGVpZ2h0OyAvLyBhZGQgdGhlIGhlaWdodFxyXG5cdFx0fVxyXG5cclxuXHRcdGlzRml4ZWQgPSBmYWxzZTtcclxuXHRcdCQoaW5wdXQpLnBhcmVudHMoKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpc0ZpeGVkIHw9ICQodGhpcykuY3NzKFwicG9zaXRpb25cIikgPT09IFwiZml4ZWRcIjtcclxuXHRcdFx0cmV0dXJuICFpc0ZpeGVkO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0b2Zmc2V0ID0ge2xlZnQ6ICQuZGF0ZXBpY2tlci5fcG9zWzBdLCB0b3A6ICQuZGF0ZXBpY2tlci5fcG9zWzFdfTtcclxuXHRcdCQuZGF0ZXBpY2tlci5fcG9zID0gbnVsbDtcclxuXHRcdC8vdG8gYXZvaWQgZmxhc2hlcyBvbiBGaXJlZm94XHJcblx0XHRpbnN0LmRwRGl2LmVtcHR5KCk7XHJcblx0XHQvLyBkZXRlcm1pbmUgc2l6aW5nIG9mZnNjcmVlblxyXG5cdFx0aW5zdC5kcERpdi5jc3Moe3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiwgdG9wOiBcIi0xMDAwcHhcIn0pO1xyXG5cdFx0JC5kYXRlcGlja2VyLl91cGRhdGVEYXRlcGlja2VyKGluc3QpO1xyXG5cdFx0Ly8gZml4IHdpZHRoIGZvciBkeW5hbWljIG51bWJlciBvZiBkYXRlIHBpY2tlcnNcclxuXHRcdC8vIGFuZCBhZGp1c3QgcG9zaXRpb24gYmVmb3JlIHNob3dpbmdcclxuXHRcdG9mZnNldCA9ICQuZGF0ZXBpY2tlci5fY2hlY2tPZmZzZXQoaW5zdCwgb2Zmc2V0LCBpc0ZpeGVkKTtcclxuXHRcdGluc3QuZHBEaXYuY3NzKHtwb3NpdGlvbjogKCQuZGF0ZXBpY2tlci5faW5EaWFsb2cgJiYgJC5ibG9ja1VJID9cclxuXHRcdFx0XCJzdGF0aWNcIiA6IChpc0ZpeGVkID8gXCJmaXhlZFwiIDogXCJhYnNvbHV0ZVwiKSksIGRpc3BsYXk6IFwibm9uZVwiLFxyXG5cdFx0XHRsZWZ0OiBvZmZzZXQubGVmdCArIFwicHhcIiwgdG9wOiBvZmZzZXQudG9wICsgXCJweFwifSk7XHJcblxyXG5cdFx0aWYgKCFpbnN0LmlubGluZSkge1xyXG5cdFx0XHRzaG93QW5pbSA9ICQuZGF0ZXBpY2tlci5fZ2V0KGluc3QsIFwic2hvd0FuaW1cIik7XHJcblx0XHRcdGR1cmF0aW9uID0gJC5kYXRlcGlja2VyLl9nZXQoaW5zdCwgXCJkdXJhdGlvblwiKTtcclxuXHRcdFx0aW5zdC5kcERpdi56SW5kZXgoJChpbnB1dCkuekluZGV4KCkrMSk7XHJcblx0XHRcdCQuZGF0ZXBpY2tlci5fZGF0ZXBpY2tlclNob3dpbmcgPSB0cnVlO1xyXG5cclxuXHRcdFx0aWYgKCAkLmVmZmVjdHMgJiYgJC5lZmZlY3RzLmVmZmVjdFsgc2hvd0FuaW0gXSApIHtcclxuXHRcdFx0XHRpbnN0LmRwRGl2LnNob3coc2hvd0FuaW0sICQuZGF0ZXBpY2tlci5fZ2V0KGluc3QsIFwic2hvd09wdGlvbnNcIiksIGR1cmF0aW9uKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpbnN0LmRwRGl2W3Nob3dBbmltIHx8IFwic2hvd1wiXShzaG93QW5pbSA/IGR1cmF0aW9uIDogbnVsbCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggJC5kYXRlcGlja2VyLl9zaG91bGRGb2N1c0lucHV0KCBpbnN0ICkgKSB7XHJcblx0XHRcdFx0aW5zdC5pbnB1dC5mb2N1cygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkLmRhdGVwaWNrZXIuX2N1ckluc3QgPSBpbnN0O1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8qIEdlbmVyYXRlIHRoZSBkYXRlIHBpY2tlciBjb250ZW50LiAqL1xyXG5cdF91cGRhdGVEYXRlcGlja2VyOiBmdW5jdGlvbihpbnN0KSB7XHJcblx0XHR0aGlzLm1heFJvd3MgPSA0OyAvL1Jlc2V0IHRoZSBtYXggbnVtYmVyIG9mIHJvd3MgYmVpbmcgZGlzcGxheWVkIChzZWUgIzcwNDMpXHJcblx0XHRpbnN0QWN0aXZlID0gaW5zdDsgLy8gZm9yIGRlbGVnYXRlIGhvdmVyIGV2ZW50c1xyXG5cdFx0aW5zdC5kcERpdi5lbXB0eSgpLmFwcGVuZCh0aGlzLl9nZW5lcmF0ZUhUTUwoaW5zdCkpO1xyXG5cdFx0dGhpcy5fYXR0YWNoSGFuZGxlcnMoaW5zdCk7XHJcblx0XHRpbnN0LmRwRGl2LmZpbmQoXCIuXCIgKyB0aGlzLl9kYXlPdmVyQ2xhc3MgKyBcIiBhXCIpLm1vdXNlb3ZlcigpO1xyXG5cclxuXHRcdHZhciBvcmlneWVhcnNodG1sLFxyXG5cdFx0XHRudW1Nb250aHMgPSB0aGlzLl9nZXROdW1iZXJPZk1vbnRocyhpbnN0KSxcclxuXHRcdFx0Y29scyA9IG51bU1vbnRoc1sxXSxcclxuXHRcdFx0d2lkdGggPSAxNztcclxuXHJcblx0XHRpbnN0LmRwRGl2LnJlbW92ZUNsYXNzKFwidWktZGF0ZXBpY2tlci1tdWx0aS0yIHVpLWRhdGVwaWNrZXItbXVsdGktMyB1aS1kYXRlcGlja2VyLW11bHRpLTRcIikud2lkdGgoXCJcIik7XHJcblx0XHRpZiAoY29scyA+IDEpIHtcclxuXHRcdFx0aW5zdC5kcERpdi5hZGRDbGFzcyhcInVpLWRhdGVwaWNrZXItbXVsdGktXCIgKyBjb2xzKS5jc3MoXCJ3aWR0aFwiLCAod2lkdGggKiBjb2xzKSArIFwiZW1cIik7XHJcblx0XHR9XHJcblx0XHRpbnN0LmRwRGl2WyhudW1Nb250aHNbMF0gIT09IDEgfHwgbnVtTW9udGhzWzFdICE9PSAxID8gXCJhZGRcIiA6IFwicmVtb3ZlXCIpICtcclxuXHRcdFx0XCJDbGFzc1wiXShcInVpLWRhdGVwaWNrZXItbXVsdGlcIik7XHJcblx0XHRpbnN0LmRwRGl2Wyh0aGlzLl9nZXQoaW5zdCwgXCJpc1JUTFwiKSA/IFwiYWRkXCIgOiBcInJlbW92ZVwiKSArXHJcblx0XHRcdFwiQ2xhc3NcIl0oXCJ1aS1kYXRlcGlja2VyLXJ0bFwiKTtcclxuXHJcblx0XHRpZiAoaW5zdCA9PT0gJC5kYXRlcGlja2VyLl9jdXJJbnN0ICYmICQuZGF0ZXBpY2tlci5fZGF0ZXBpY2tlclNob3dpbmcgJiYgJC5kYXRlcGlja2VyLl9zaG91bGRGb2N1c0lucHV0KCBpbnN0ICkgKSB7XHJcblx0XHRcdGluc3QuaW5wdXQuZm9jdXMoKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBkZWZmZXJlZCByZW5kZXIgb2YgdGhlIHllYXJzIHNlbGVjdCAodG8gYXZvaWQgZmxhc2hlcyBvbiBGaXJlZm94KVxyXG5cdFx0aWYoIGluc3QueWVhcnNodG1sICl7XHJcblx0XHRcdG9yaWd5ZWFyc2h0bWwgPSBpbnN0LnllYXJzaHRtbDtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdC8vYXNzdXJlIHRoYXQgaW5zdC55ZWFyc2h0bWwgZGlkbid0IGNoYW5nZS5cclxuXHRcdFx0XHRpZiggb3JpZ3llYXJzaHRtbCA9PT0gaW5zdC55ZWFyc2h0bWwgJiYgaW5zdC55ZWFyc2h0bWwgKXtcclxuXHRcdFx0XHRcdGluc3QuZHBEaXYuZmluZChcInNlbGVjdC51aS1kYXRlcGlja2VyLXllYXI6Zmlyc3RcIikucmVwbGFjZVdpdGgoaW5zdC55ZWFyc2h0bWwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRvcmlneWVhcnNodG1sID0gaW5zdC55ZWFyc2h0bWwgPSBudWxsO1xyXG5cdFx0XHR9LCAwKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvLyAjNjY5NCAtIGRvbid0IGZvY3VzIHRoZSBpbnB1dCBpZiBpdCdzIGFscmVhZHkgZm9jdXNlZFxyXG5cdC8vIHRoaXMgYnJlYWtzIHRoZSBjaGFuZ2UgZXZlbnQgaW4gSUVcclxuXHQvLyBTdXBwb3J0OiBJRSBhbmQgalF1ZXJ5IDwxLjlcclxuXHRfc2hvdWxkRm9jdXNJbnB1dDogZnVuY3Rpb24oIGluc3QgKSB7XHJcblx0XHRyZXR1cm4gaW5zdC5pbnB1dCAmJiBpbnN0LmlucHV0LmlzKCBcIjp2aXNpYmxlXCIgKSAmJiAhaW5zdC5pbnB1dC5pcyggXCI6ZGlzYWJsZWRcIiApICYmICFpbnN0LmlucHV0LmlzKCBcIjpmb2N1c1wiICk7XHJcblx0fSxcclxuXHJcblx0LyogQ2hlY2sgcG9zaXRpb25pbmcgdG8gcmVtYWluIG9uIHNjcmVlbi4gKi9cclxuXHRfY2hlY2tPZmZzZXQ6IGZ1bmN0aW9uKGluc3QsIG9mZnNldCwgaXNGaXhlZCkge1xyXG5cdFx0dmFyIGRwV2lkdGggPSBpbnN0LmRwRGl2Lm91dGVyV2lkdGgoKSxcclxuXHRcdFx0ZHBIZWlnaHQgPSBpbnN0LmRwRGl2Lm91dGVySGVpZ2h0KCksXHJcblx0XHRcdGlucHV0V2lkdGggPSBpbnN0LmlucHV0ID8gaW5zdC5pbnB1dC5vdXRlcldpZHRoKCkgOiAwLFxyXG5cdFx0XHRpbnB1dEhlaWdodCA9IGluc3QuaW5wdXQgPyBpbnN0LmlucHV0Lm91dGVySGVpZ2h0KCkgOiAwLFxyXG5cdFx0XHR2aWV3V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggKyAoaXNGaXhlZCA/IDAgOiAkKGRvY3VtZW50KS5zY3JvbGxMZWZ0KCkpLFxyXG5cdFx0XHR2aWV3SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCArIChpc0ZpeGVkID8gMCA6ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpKTtcclxuXHJcblx0XHRvZmZzZXQubGVmdCAtPSAodGhpcy5fZ2V0KGluc3QsIFwiaXNSVExcIikgPyAoZHBXaWR0aCAtIGlucHV0V2lkdGgpIDogMCk7XHJcblx0XHRvZmZzZXQubGVmdCAtPSAoaXNGaXhlZCAmJiBvZmZzZXQubGVmdCA9PT0gaW5zdC5pbnB1dC5vZmZzZXQoKS5sZWZ0KSA/ICQoZG9jdW1lbnQpLnNjcm9sbExlZnQoKSA6IDA7XHJcblx0XHRvZmZzZXQudG9wIC09IChpc0ZpeGVkICYmIG9mZnNldC50b3AgPT09IChpbnN0LmlucHV0Lm9mZnNldCgpLnRvcCArIGlucHV0SGVpZ2h0KSkgPyAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA6IDA7XHJcblxyXG5cdFx0Ly8gbm93IGNoZWNrIGlmIGRhdGVwaWNrZXIgaXMgc2hvd2luZyBvdXRzaWRlIHdpbmRvdyB2aWV3cG9ydCAtIG1vdmUgdG8gYSBiZXR0ZXIgcGxhY2UgaWYgc28uXHJcblx0XHRvZmZzZXQubGVmdCAtPSBNYXRoLm1pbihvZmZzZXQubGVmdCwgKG9mZnNldC5sZWZ0ICsgZHBXaWR0aCA+IHZpZXdXaWR0aCAmJiB2aWV3V2lkdGggPiBkcFdpZHRoKSA/XHJcblx0XHRcdE1hdGguYWJzKG9mZnNldC5sZWZ0ICsgZHBXaWR0aCAtIHZpZXdXaWR0aCkgOiAwKTtcclxuXHRcdG9mZnNldC50b3AgLT0gTWF0aC5taW4ob2Zmc2V0LnRvcCwgKG9mZnNldC50b3AgKyBkcEhlaWdodCA+IHZpZXdIZWlnaHQgJiYgdmlld0hlaWdodCA+IGRwSGVpZ2h0KSA/XHJcblx0XHRcdE1hdGguYWJzKGRwSGVpZ2h0ICsgaW5wdXRIZWlnaHQpIDogMCk7XHJcblxyXG5cdFx0cmV0dXJuIG9mZnNldDtcclxuXHR9LFxyXG5cclxuXHQvKiBGaW5kIGFuIG9iamVjdCdzIHBvc2l0aW9uIG9uIHRoZSBzY3JlZW4uICovXHJcblx0X2ZpbmRQb3M6IGZ1bmN0aW9uKG9iaikge1xyXG5cdFx0dmFyIHBvc2l0aW9uLFxyXG5cdFx0XHRpbnN0ID0gdGhpcy5fZ2V0SW5zdChvYmopLFxyXG5cdFx0XHRpc1JUTCA9IHRoaXMuX2dldChpbnN0LCBcImlzUlRMXCIpO1xyXG5cclxuXHRcdHdoaWxlIChvYmogJiYgKG9iai50eXBlID09PSBcImhpZGRlblwiIHx8IG9iai5ub2RlVHlwZSAhPT0gMSB8fCAkLmV4cHIuZmlsdGVycy5oaWRkZW4ob2JqKSkpIHtcclxuXHRcdFx0b2JqID0gb2JqW2lzUlRMID8gXCJwcmV2aW91c1NpYmxpbmdcIiA6IFwibmV4dFNpYmxpbmdcIl07XHJcblx0XHR9XHJcblxyXG5cdFx0cG9zaXRpb24gPSAkKG9iaikub2Zmc2V0KCk7XHJcblx0XHRyZXR1cm4gW3Bvc2l0aW9uLmxlZnQsIHBvc2l0aW9uLnRvcF07XHJcblx0fSxcclxuXHJcblx0LyogSGlkZSB0aGUgZGF0ZSBwaWNrZXIgZnJvbSB2aWV3LlxyXG5cdCAqIEBwYXJhbSAgaW5wdXQgIGVsZW1lbnQgLSB0aGUgaW5wdXQgZmllbGQgYXR0YWNoZWQgdG8gdGhlIGRhdGUgcGlja2VyXHJcblx0ICovXHJcblx0X2hpZGVEYXRlcGlja2VyOiBmdW5jdGlvbihpbnB1dCkge1xyXG5cdFx0dmFyIHNob3dBbmltLCBkdXJhdGlvbiwgcG9zdFByb2Nlc3MsIG9uQ2xvc2UsXHJcblx0XHRcdGluc3QgPSB0aGlzLl9jdXJJbnN0O1xyXG5cclxuXHRcdGlmICghaW5zdCB8fCAoaW5wdXQgJiYgaW5zdCAhPT0gJC5kYXRhKGlucHV0LCBQUk9QX05BTUUpKSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuX2RhdGVwaWNrZXJTaG93aW5nKSB7XHJcblx0XHRcdHNob3dBbmltID0gdGhpcy5fZ2V0KGluc3QsIFwic2hvd0FuaW1cIik7XHJcblx0XHRcdGR1cmF0aW9uID0gdGhpcy5fZ2V0KGluc3QsIFwiZHVyYXRpb25cIik7XHJcblx0XHRcdHBvc3RQcm9jZXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JC5kYXRlcGlja2VyLl90aWR5RGlhbG9nKGluc3QpO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0Ly8gREVQUkVDQVRFRDogYWZ0ZXIgQkMgZm9yIDEuOC54ICQuZWZmZWN0c1sgc2hvd0FuaW0gXSBpcyBub3QgbmVlZGVkXHJcblx0XHRcdGlmICggJC5lZmZlY3RzICYmICggJC5lZmZlY3RzLmVmZmVjdFsgc2hvd0FuaW0gXSB8fCAkLmVmZmVjdHNbIHNob3dBbmltIF0gKSApIHtcclxuXHRcdFx0XHRpbnN0LmRwRGl2LmhpZGUoc2hvd0FuaW0sICQuZGF0ZXBpY2tlci5fZ2V0KGluc3QsIFwic2hvd09wdGlvbnNcIiksIGR1cmF0aW9uLCBwb3N0UHJvY2Vzcyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aW5zdC5kcERpdlsoc2hvd0FuaW0gPT09IFwic2xpZGVEb3duXCIgPyBcInNsaWRlVXBcIiA6XHJcblx0XHRcdFx0XHQoc2hvd0FuaW0gPT09IFwiZmFkZUluXCIgPyBcImZhZGVPdXRcIiA6IFwiaGlkZVwiKSldKChzaG93QW5pbSA/IGR1cmF0aW9uIDogbnVsbCksIHBvc3RQcm9jZXNzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFzaG93QW5pbSkge1xyXG5cdFx0XHRcdHBvc3RQcm9jZXNzKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5fZGF0ZXBpY2tlclNob3dpbmcgPSBmYWxzZTtcclxuXHJcblx0XHRcdG9uQ2xvc2UgPSB0aGlzLl9nZXQoaW5zdCwgXCJvbkNsb3NlXCIpO1xyXG5cdFx0XHRpZiAob25DbG9zZSkge1xyXG5cdFx0XHRcdG9uQ2xvc2UuYXBwbHkoKGluc3QuaW5wdXQgPyBpbnN0LmlucHV0WzBdIDogbnVsbCksIFsoaW5zdC5pbnB1dCA/IGluc3QuaW5wdXQudmFsKCkgOiBcIlwiKSwgaW5zdF0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLl9sYXN0SW5wdXQgPSBudWxsO1xyXG5cdFx0XHRpZiAodGhpcy5faW5EaWFsb2cpIHtcclxuXHRcdFx0XHR0aGlzLl9kaWFsb2dJbnB1dC5jc3MoeyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjBcIiwgdG9wOiBcIi0xMDBweFwiIH0pO1xyXG5cdFx0XHRcdGlmICgkLmJsb2NrVUkpIHtcclxuXHRcdFx0XHRcdCQudW5ibG9ja1VJKCk7XHJcblx0XHRcdFx0XHQkKFwiYm9keVwiKS5hcHBlbmQodGhpcy5kcERpdik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuX2luRGlhbG9nID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyogVGlkeSB1cCBhZnRlciBhIGRpYWxvZyBkaXNwbGF5LiAqL1xyXG5cdF90aWR5RGlhbG9nOiBmdW5jdGlvbihpbnN0KSB7XHJcblx0XHRpbnN0LmRwRGl2LnJlbW92ZUNsYXNzKHRoaXMuX2RpYWxvZ0NsYXNzKS51bmJpbmQoXCIudWktZGF0ZXBpY2tlci1jYWxlbmRhclwiKTtcclxuXHR9LFxyXG5cclxuXHQvKiBDbG9zZSBkYXRlIHBpY2tlciBpZiBjbGlja2VkIGVsc2V3aGVyZS4gKi9cclxuXHRfY2hlY2tFeHRlcm5hbENsaWNrOiBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0aWYgKCEkLmRhdGVwaWNrZXIuX2N1ckluc3QpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciAkdGFyZ2V0ID0gJChldmVudC50YXJnZXQpLFxyXG5cdFx0XHRpbnN0ID0gJC5kYXRlcGlja2VyLl9nZXRJbnN0KCR0YXJnZXRbMF0pO1xyXG5cclxuXHRcdGlmICggKCAoICR0YXJnZXRbMF0uaWQgIT09ICQuZGF0ZXBpY2tlci5fbWFpbkRpdklkICYmXHJcblx0XHRcdFx0JHRhcmdldC5wYXJlbnRzKFwiI1wiICsgJC5kYXRlcGlja2VyLl9tYWluRGl2SWQpLmxlbmd0aCA9PT0gMCAmJlxyXG5cdFx0XHRcdCEkdGFyZ2V0Lmhhc0NsYXNzKCQuZGF0ZXBpY2tlci5tYXJrZXJDbGFzc05hbWUpICYmXHJcblx0XHRcdFx0ISR0YXJnZXQuY2xvc2VzdChcIi5cIiArICQuZGF0ZXBpY2tlci5fdHJpZ2dlckNsYXNzKS5sZW5ndGggJiZcclxuXHRcdFx0XHQkLmRhdGVwaWNrZXIuX2RhdGVwaWNrZXJTaG93aW5nICYmICEoJC5kYXRlcGlja2VyLl9pbkRpYWxvZyAmJiAkLmJsb2NrVUkpICkgKSB8fFxyXG5cdFx0XHQoICR0YXJnZXQuaGFzQ2xhc3MoJC5kYXRlcGlja2VyLm1hcmtlckNsYXNzTmFtZSkgJiYgJC5kYXRlcGlja2VyLl9jdXJJbnN0ICE9PSBpbnN0ICkgKSB7XHJcblx0XHRcdFx0JC5kYXRlcGlja2VyLl9oaWRlRGF0ZXBpY2tlcigpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8qIEFkanVzdCBvbmUgb2YgdGhlIGRhdGUgc3ViLWZpZWxkcy4gKi9cclxuXHRfYWRqdXN0RGF0ZTogZnVuY3Rpb24oaWQsIG9mZnNldCwgcGVyaW9kKSB7XHJcblx0XHR2YXIgdGFyZ2V0ID0gJChpZCksXHJcblx0XHRcdGluc3QgPSB0aGlzLl9nZXRJbnN0KHRhcmdldFswXSk7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2lzRGlzYWJsZWREYXRlcGlja2VyKHRhcmdldFswXSkpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fYWRqdXN0SW5zdERhdGUoaW5zdCwgb2Zmc2V0ICtcclxuXHRcdFx0KHBlcmlvZCA9PT0gXCJNXCIgPyB0aGlzLl9nZXQoaW5zdCwgXCJzaG93Q3VycmVudEF0UG9zXCIpIDogMCksIC8vIHVuZG8gcG9zaXRpb25pbmdcclxuXHRcdFx0cGVyaW9kKTtcclxuXHRcdHRoaXMuX3VwZGF0ZURhdGVwaWNrZXIoaW5zdCk7XHJcblx0fSxcclxuXHJcblx0LyogQWN0aW9uIGZvciBjdXJyZW50IGxpbmsuICovXHJcblx0X2dvdG9Ub2RheTogZnVuY3Rpb24oaWQpIHtcclxuXHRcdHZhciBkYXRlLFxyXG5cdFx0XHR0YXJnZXQgPSAkKGlkKSxcclxuXHRcdFx0aW5zdCA9IHRoaXMuX2dldEluc3QodGFyZ2V0WzBdKTtcclxuXHJcblx0XHRpZiAodGhpcy5fZ2V0KGluc3QsIFwiZ290b0N1cnJlbnRcIikgJiYgaW5zdC5jdXJyZW50RGF5KSB7XHJcblx0XHRcdGluc3Quc2VsZWN0ZWREYXkgPSBpbnN0LmN1cnJlbnREYXk7XHJcblx0XHRcdGluc3QuZHJhd01vbnRoID0gaW5zdC5zZWxlY3RlZE1vbnRoID0gaW5zdC5jdXJyZW50TW9udGg7XHJcblx0XHRcdGluc3QuZHJhd1llYXIgPSBpbnN0LnNlbGVjdGVkWWVhciA9IGluc3QuY3VycmVudFllYXI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdFx0aW5zdC5zZWxlY3RlZERheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG5cdFx0XHRpbnN0LmRyYXdNb250aCA9IGluc3Quc2VsZWN0ZWRNb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuXHRcdFx0aW5zdC5kcmF3WWVhciA9IGluc3Quc2VsZWN0ZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fbm90aWZ5Q2hhbmdlKGluc3QpO1xyXG5cdFx0dGhpcy5fYWRqdXN0RGF0ZSh0YXJnZXQpO1xyXG5cdH0sXHJcblxyXG5cdC8qIEFjdGlvbiBmb3Igc2VsZWN0aW5nIGEgbmV3IG1vbnRoL3llYXIuICovXHJcblx0X3NlbGVjdE1vbnRoWWVhcjogZnVuY3Rpb24oaWQsIHNlbGVjdCwgcGVyaW9kKSB7XHJcblx0XHR2YXIgdGFyZ2V0ID0gJChpZCksXHJcblx0XHRcdGluc3QgPSB0aGlzLl9nZXRJbnN0KHRhcmdldFswXSk7XHJcblxyXG5cdFx0aW5zdFtcInNlbGVjdGVkXCIgKyAocGVyaW9kID09PSBcIk1cIiA/IFwiTW9udGhcIiA6IFwiWWVhclwiKV0gPVxyXG5cdFx0aW5zdFtcImRyYXdcIiArIChwZXJpb2QgPT09IFwiTVwiID8gXCJNb250aFwiIDogXCJZZWFyXCIpXSA9XHJcblx0XHRcdHBhcnNlSW50KHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZSwxMCk7XHJcblxyXG5cdFx0dGhpcy5fbm90aWZ5Q2hhbmdlKGluc3QpO1xyXG5cdFx0dGhpcy5fYWRqdXN0RGF0ZSh0YXJnZXQpO1xyXG5cdH0sXHJcblxyXG5cdC8qIEFjdGlvbiBmb3Igc2VsZWN0aW5nIGEgZGF5LiAqL1xyXG5cdF9zZWxlY3REYXk6IGZ1bmN0aW9uKGlkLCBtb250aCwgeWVhciwgdGQpIHtcclxuXHRcdHZhciBpbnN0LFxyXG5cdFx0XHR0YXJnZXQgPSAkKGlkKTtcclxuXHJcblx0XHRpZiAoJCh0ZCkuaGFzQ2xhc3ModGhpcy5fdW5zZWxlY3RhYmxlQ2xhc3MpIHx8IHRoaXMuX2lzRGlzYWJsZWREYXRlcGlja2VyKHRhcmdldFswXSkpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGluc3QgPSB0aGlzLl9nZXRJbnN0KHRhcmdldFswXSk7XHJcblx0XHRpbnN0LnNlbGVjdGVkRGF5ID0gaW5zdC5jdXJyZW50RGF5ID0gJChcImFcIiwgdGQpLmh0bWwoKTtcclxuXHRcdGluc3Quc2VsZWN0ZWRNb250aCA9IGluc3QuY3VycmVudE1vbnRoID0gbW9udGg7XHJcblx0XHRpbnN0LnNlbGVjdGVkWWVhciA9IGluc3QuY3VycmVudFllYXIgPSB5ZWFyO1xyXG5cdFx0dGhpcy5fc2VsZWN0RGF0ZShpZCwgdGhpcy5fZm9ybWF0RGF0ZShpbnN0LFxyXG5cdFx0XHRpbnN0LmN1cnJlbnREYXksIGluc3QuY3VycmVudE1vbnRoLCBpbnN0LmN1cnJlbnRZZWFyKSk7XHJcblx0fSxcclxuXHJcblx0LyogRXJhc2UgdGhlIGlucHV0IGZpZWxkIGFuZCBoaWRlIHRoZSBkYXRlIHBpY2tlci4gKi9cclxuXHRfY2xlYXJEYXRlOiBmdW5jdGlvbihpZCkge1xyXG5cdFx0dmFyIHRhcmdldCA9ICQoaWQpO1xyXG5cdFx0dGhpcy5fc2VsZWN0RGF0ZSh0YXJnZXQsIFwiXCIpO1xyXG5cdH0sXHJcblxyXG5cdC8qIFVwZGF0ZSB0aGUgaW5wdXQgZmllbGQgd2l0aCB0aGUgc2VsZWN0ZWQgZGF0ZS4gKi9cclxuXHRfc2VsZWN0RGF0ZTogZnVuY3Rpb24oaWQsIGRhdGVTdHIpIHtcclxuXHRcdHZhciBvblNlbGVjdCxcclxuXHRcdFx0dGFyZ2V0ID0gJChpZCksXHJcblx0XHRcdGluc3QgPSB0aGlzLl9nZXRJbnN0KHRhcmdldFswXSk7XHJcblxyXG5cdFx0ZGF0ZVN0ciA9IChkYXRlU3RyICE9IG51bGwgPyBkYXRlU3RyIDogdGhpcy5fZm9ybWF0RGF0ZShpbnN0KSk7XHJcblx0XHRpZiAoaW5zdC5pbnB1dCkge1xyXG5cdFx0XHRpbnN0LmlucHV0LnZhbChkYXRlU3RyKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuX3VwZGF0ZUFsdGVybmF0ZShpbnN0KTtcclxuXHJcblx0XHRvblNlbGVjdCA9IHRoaXMuX2dldChpbnN0LCBcIm9uU2VsZWN0XCIpO1xyXG5cdFx0aWYgKG9uU2VsZWN0KSB7XHJcblx0XHRcdG9uU2VsZWN0LmFwcGx5KChpbnN0LmlucHV0ID8gaW5zdC5pbnB1dFswXSA6IG51bGwpLCBbZGF0ZVN0ciwgaW5zdF0pOyAgLy8gdHJpZ2dlciBjdXN0b20gY2FsbGJhY2tcclxuXHRcdH0gZWxzZSBpZiAoaW5zdC5pbnB1dCkge1xyXG5cdFx0XHRpbnN0LmlucHV0LnRyaWdnZXIoXCJjaGFuZ2VcIik7IC8vIGZpcmUgdGhlIGNoYW5nZSBldmVudFxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChpbnN0LmlubGluZSl7XHJcblx0XHRcdHRoaXMuX3VwZGF0ZURhdGVwaWNrZXIoaW5zdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9oaWRlRGF0ZXBpY2tlcigpO1xyXG5cdFx0XHR0aGlzLl9sYXN0SW5wdXQgPSBpbnN0LmlucHV0WzBdO1xyXG5cdFx0XHRpZiAodHlwZW9mKGluc3QuaW5wdXRbMF0pICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdFx0aW5zdC5pbnB1dC5mb2N1cygpOyAvLyByZXN0b3JlIGZvY3VzXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5fbGFzdElucHV0ID0gbnVsbDtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvKiBVcGRhdGUgYW55IGFsdGVybmF0ZSBmaWVsZCB0byBzeW5jaHJvbmlzZSB3aXRoIHRoZSBtYWluIGZpZWxkLiAqL1xyXG5cdF91cGRhdGVBbHRlcm5hdGU6IGZ1bmN0aW9uKGluc3QpIHtcclxuXHRcdHZhciBhbHRGb3JtYXQsIGRhdGUsIGRhdGVTdHIsXHJcblx0XHRcdGFsdEZpZWxkID0gdGhpcy5fZ2V0KGluc3QsIFwiYWx0RmllbGRcIik7XHJcblxyXG5cdFx0aWYgKGFsdEZpZWxkKSB7IC8vIHVwZGF0ZSBhbHRlcm5hdGUgZmllbGQgdG9vXHJcblx0XHRcdGFsdEZvcm1hdCA9IHRoaXMuX2dldChpbnN0LCBcImFsdEZvcm1hdFwiKSB8fCB0aGlzLl9nZXQoaW5zdCwgXCJkYXRlRm9ybWF0XCIpO1xyXG5cdFx0XHRkYXRlID0gdGhpcy5fZ2V0RGF0ZShpbnN0KTtcclxuXHRcdFx0ZGF0ZVN0ciA9IHRoaXMuZm9ybWF0RGF0ZShhbHRGb3JtYXQsIGRhdGUsIHRoaXMuX2dldEZvcm1hdENvbmZpZyhpbnN0KSk7XHJcblx0XHRcdCQoYWx0RmllbGQpLmVhY2goZnVuY3Rpb24oKSB7ICQodGhpcykudmFsKGRhdGVTdHIpOyB9KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvKiBTZXQgYXMgYmVmb3JlU2hvd0RheSBmdW5jdGlvbiB0byBwcmV2ZW50IHNlbGVjdGlvbiBvZiB3ZWVrZW5kcy5cclxuXHQgKiBAcGFyYW0gIGRhdGUgIERhdGUgLSB0aGUgZGF0ZSB0byBjdXN0b21pc2VcclxuXHQgKiBAcmV0dXJuIFtib29sZWFuLCBzdHJpbmddIC0gaXMgdGhpcyBkYXRlIHNlbGVjdGFibGU/LCB3aGF0IGlzIGl0cyBDU1MgY2xhc3M/XHJcblx0ICovXHJcblx0bm9XZWVrZW5kczogZnVuY3Rpb24oZGF0ZSkge1xyXG5cdFx0dmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XHJcblx0XHRyZXR1cm4gWyhkYXkgPiAwICYmIGRheSA8IDYpLCBcIlwiXTtcclxuXHR9LFxyXG5cclxuXHQvKiBTZXQgYXMgY2FsY3VsYXRlV2VlayB0byBkZXRlcm1pbmUgdGhlIHdlZWsgb2YgdGhlIHllYXIgYmFzZWQgb24gdGhlIElTTyA4NjAxIGRlZmluaXRpb24uXHJcblx0ICogQHBhcmFtICBkYXRlICBEYXRlIC0gdGhlIGRhdGUgdG8gZ2V0IHRoZSB3ZWVrIGZvclxyXG5cdCAqIEByZXR1cm4gIG51bWJlciAtIHRoZSBudW1iZXIgb2YgdGhlIHdlZWsgd2l0aGluIHRoZSB5ZWFyIHRoYXQgY29udGFpbnMgdGhpcyBkYXRlXHJcblx0ICovXHJcblx0aXNvODYwMVdlZWs6IGZ1bmN0aW9uKGRhdGUpIHtcclxuXHRcdHZhciB0aW1lLFxyXG5cdFx0XHRjaGVja0RhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XHJcblxyXG5cdFx0Ly8gRmluZCBUaHVyc2RheSBvZiB0aGlzIHdlZWsgc3RhcnRpbmcgb24gTW9uZGF5XHJcblx0XHRjaGVja0RhdGUuc2V0RGF0ZShjaGVja0RhdGUuZ2V0RGF0ZSgpICsgNCAtIChjaGVja0RhdGUuZ2V0RGF5KCkgfHwgNykpO1xyXG5cclxuXHRcdHRpbWUgPSBjaGVja0RhdGUuZ2V0VGltZSgpO1xyXG5cdFx0Y2hlY2tEYXRlLnNldE1vbnRoKDApOyAvLyBDb21wYXJlIHdpdGggSmFuIDFcclxuXHRcdGNoZWNrRGF0ZS5zZXREYXRlKDEpO1xyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yb3VuZCgodGltZSAtIGNoZWNrRGF0ZSkgLyA4NjQwMDAwMCkgLyA3KSArIDE7XHJcblx0fSxcclxuXHJcblx0LyogUGFyc2UgYSBzdHJpbmcgdmFsdWUgaW50byBhIGRhdGUgb2JqZWN0LlxyXG5cdCAqIFNlZSBmb3JtYXREYXRlIGJlbG93IGZvciB0aGUgcG9zc2libGUgZm9ybWF0cy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSAgZm9ybWF0IHN0cmluZyAtIHRoZSBleHBlY3RlZCBmb3JtYXQgb2YgdGhlIGRhdGVcclxuXHQgKiBAcGFyYW0gIHZhbHVlIHN0cmluZyAtIHRoZSBkYXRlIGluIHRoZSBhYm92ZSBmb3JtYXRcclxuXHQgKiBAcGFyYW0gIHNldHRpbmdzIE9iamVjdCAtIGF0dHJpYnV0ZXMgaW5jbHVkZTpcclxuXHQgKlx0XHRcdFx0XHRzaG9ydFllYXJDdXRvZmYgIG51bWJlciAtIHRoZSBjdXRvZmYgeWVhciBmb3IgZGV0ZXJtaW5pbmcgdGhlIGNlbnR1cnkgKG9wdGlvbmFsKVxyXG5cdCAqXHRcdFx0XHRcdGRheU5hbWVzU2hvcnRcdHN0cmluZ1s3XSAtIGFiYnJldmlhdGVkIG5hbWVzIG9mIHRoZSBkYXlzIGZyb20gU3VuZGF5IChvcHRpb25hbClcclxuXHQgKlx0XHRcdFx0XHRkYXlOYW1lc1x0XHRzdHJpbmdbN10gLSBuYW1lcyBvZiB0aGUgZGF5cyBmcm9tIFN1bmRheSAob3B0aW9uYWwpXHJcblx0ICpcdFx0XHRcdFx0bW9udGhOYW1lc1Nob3J0IHN0cmluZ1sxMl0gLSBhYmJyZXZpYXRlZCBuYW1lcyBvZiB0aGUgbW9udGhzIChvcHRpb25hbClcclxuXHQgKlx0XHRcdFx0XHRtb250aE5hbWVzXHRcdHN0cmluZ1sxMl0gLSBuYW1lcyBvZiB0aGUgbW9udGhzIChvcHRpb25hbClcclxuXHQgKiBAcmV0dXJuICBEYXRlIC0gdGhlIGV4dHJhY3RlZCBkYXRlIHZhbHVlIG9yIG51bGwgaWYgdmFsdWUgaXMgYmxhbmtcclxuXHQgKi9cclxuXHRwYXJzZURhdGU6IGZ1bmN0aW9uIChmb3JtYXQsIHZhbHVlLCBzZXR0aW5ncykge1xyXG5cdFx0aWYgKGZvcm1hdCA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIHtcclxuXHRcdFx0dGhyb3cgXCJJbnZhbGlkIGFyZ3VtZW50c1wiO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiA/IHZhbHVlLnRvU3RyaW5nKCkgOiB2YWx1ZSArIFwiXCIpO1xyXG5cdFx0aWYgKHZhbHVlID09PSBcIlwiKSB7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBpRm9ybWF0LCBkaW0sIGV4dHJhLFxyXG5cdFx0XHRpVmFsdWUgPSAwLFxyXG5cdFx0XHRzaG9ydFllYXJDdXRvZmZUZW1wID0gKHNldHRpbmdzID8gc2V0dGluZ3Muc2hvcnRZZWFyQ3V0b2ZmIDogbnVsbCkgfHwgdGhpcy5fZGVmYXVsdHMuc2hvcnRZZWFyQ3V0b2ZmLFxyXG5cdFx0XHRzaG9ydFllYXJDdXRvZmYgPSAodHlwZW9mIHNob3J0WWVhckN1dG9mZlRlbXAgIT09IFwic3RyaW5nXCIgPyBzaG9ydFllYXJDdXRvZmZUZW1wIDpcclxuXHRcdFx0XHRuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgJSAxMDAgKyBwYXJzZUludChzaG9ydFllYXJDdXRvZmZUZW1wLCAxMCkpLFxyXG5cdFx0XHRkYXlOYW1lc1Nob3J0ID0gKHNldHRpbmdzID8gc2V0dGluZ3MuZGF5TmFtZXNTaG9ydCA6IG51bGwpIHx8IHRoaXMuX2RlZmF1bHRzLmRheU5hbWVzU2hvcnQsXHJcblx0XHRcdGRheU5hbWVzID0gKHNldHRpbmdzID8gc2V0dGluZ3MuZGF5TmFtZXMgOiBudWxsKSB8fCB0aGlzLl9kZWZhdWx0cy5kYXlOYW1lcyxcclxuXHRcdFx0bW9udGhOYW1lc1Nob3J0ID0gKHNldHRpbmdzID8gc2V0dGluZ3MubW9udGhOYW1lc1Nob3J0IDogbnVsbCkgfHwgdGhpcy5fZGVmYXVsdHMubW9udGhOYW1lc1Nob3J0LFxyXG5cdFx0XHRtb250aE5hbWVzID0gKHNldHRpbmdzID8gc2V0dGluZ3MubW9udGhOYW1lcyA6IG51bGwpIHx8IHRoaXMuX2RlZmF1bHRzLm1vbnRoTmFtZXMsXHJcblx0XHRcdHllYXIgPSAtMSxcclxuXHRcdFx0bW9udGggPSAtMSxcclxuXHRcdFx0ZGF5ID0gLTEsXHJcblx0XHRcdGRveSA9IC0xLFxyXG5cdFx0XHRsaXRlcmFsID0gZmFsc2UsXHJcblx0XHRcdGRhdGUsXHJcblx0XHRcdC8vIENoZWNrIHdoZXRoZXIgYSBmb3JtYXQgY2hhcmFjdGVyIGlzIGRvdWJsZWRcclxuXHRcdFx0bG9va0FoZWFkID0gZnVuY3Rpb24obWF0Y2gpIHtcclxuXHRcdFx0XHR2YXIgbWF0Y2hlcyA9IChpRm9ybWF0ICsgMSA8IGZvcm1hdC5sZW5ndGggJiYgZm9ybWF0LmNoYXJBdChpRm9ybWF0ICsgMSkgPT09IG1hdGNoKTtcclxuXHRcdFx0XHRpZiAobWF0Y2hlcykge1xyXG5cdFx0XHRcdFx0aUZvcm1hdCsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gbWF0Y2hlcztcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gRXh0cmFjdCBhIG51bWJlciBmcm9tIHRoZSBzdHJpbmcgdmFsdWVcclxuXHRcdFx0Z2V0TnVtYmVyID0gZnVuY3Rpb24obWF0Y2gpIHtcclxuXHRcdFx0XHR2YXIgaXNEb3VibGVkID0gbG9va0FoZWFkKG1hdGNoKSxcclxuXHRcdFx0XHRcdHNpemUgPSAobWF0Y2ggPT09IFwiQFwiID8gMTQgOiAobWF0Y2ggPT09IFwiIVwiID8gMjAgOlxyXG5cdFx0XHRcdFx0KG1hdGNoID09PSBcInlcIiAmJiBpc0RvdWJsZWQgPyA0IDogKG1hdGNoID09PSBcIm9cIiA/IDMgOiAyKSkpKSxcclxuXHRcdFx0XHRcdGRpZ2l0cyA9IG5ldyBSZWdFeHAoXCJeXFxcXGR7MSxcIiArIHNpemUgKyBcIn1cIiksXHJcblx0XHRcdFx0XHRudW0gPSB2YWx1ZS5zdWJzdHJpbmcoaVZhbHVlKS5tYXRjaChkaWdpdHMpO1xyXG5cdFx0XHRcdGlmICghbnVtKSB7XHJcblx0XHRcdFx0XHR0aHJvdyBcIk1pc3NpbmcgbnVtYmVyIGF0IHBvc2l0aW9uIFwiICsgaVZhbHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpVmFsdWUgKz0gbnVtWzBdLmxlbmd0aDtcclxuXHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQobnVtWzBdLCAxMCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIEV4dHJhY3QgYSBuYW1lIGZyb20gdGhlIHN0cmluZyB2YWx1ZSBhbmQgY29udmVydCB0byBhbiBpbmRleFxyXG5cdFx0XHRnZXROYW1lID0gZnVuY3Rpb24obWF0Y2gsIHNob3J0TmFtZXMsIGxvbmdOYW1lcykge1xyXG5cdFx0XHRcdHZhciBpbmRleCA9IC0xLFxyXG5cdFx0XHRcdFx0bmFtZXMgPSAkLm1hcChsb29rQWhlYWQobWF0Y2gpID8gbG9uZ05hbWVzIDogc2hvcnROYW1lcywgZnVuY3Rpb24gKHYsIGspIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFsgW2ssIHZdIF07XHJcblx0XHRcdFx0XHR9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAtKGFbMV0ubGVuZ3RoIC0gYlsxXS5sZW5ndGgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdCQuZWFjaChuYW1lcywgZnVuY3Rpb24gKGksIHBhaXIpIHtcclxuXHRcdFx0XHRcdHZhciBuYW1lID0gcGFpclsxXTtcclxuXHRcdFx0XHRcdGlmICh2YWx1ZS5zdWJzdHIoaVZhbHVlLCBuYW1lLmxlbmd0aCkudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcblx0XHRcdFx0XHRcdGluZGV4ID0gcGFpclswXTtcclxuXHRcdFx0XHRcdFx0aVZhbHVlICs9IG5hbWUubGVuZ3RoO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aWYgKGluZGV4ICE9PSAtMSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGluZGV4ICsgMTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhyb3cgXCJVbmtub3duIG5hbWUgYXQgcG9zaXRpb24gXCIgKyBpVmFsdWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBDb25maXJtIHRoYXQgYSBsaXRlcmFsIGNoYXJhY3RlciBtYXRjaGVzIHRoZSBzdHJpbmcgdmFsdWVcclxuXHRcdFx0Y2hlY2tMaXRlcmFsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHZhbHVlLmNoYXJBdChpVmFsdWUpICE9PSBmb3JtYXQuY2hhckF0KGlGb3JtYXQpKSB7XHJcblx0XHRcdFx0XHR0aHJvdyBcIlVuZXhwZWN0ZWQgbGl0ZXJhbCBhdCBwb3NpdGlvbiBcIiArIGlWYWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aVZhbHVlKys7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0Zm9yIChpRm9ybWF0ID0gMDsgaUZvcm1hdCA8IGZvcm1hdC5sZW5ndGg7IGlGb3JtYXQrKykge1xyXG5cdFx0XHRpZiAobGl0ZXJhbCkge1xyXG5cdFx0XHRcdGlmIChmb3JtYXQuY2hhckF0KGlGb3JtYXQpID09PSBcIidcIiAmJiAhbG9va0FoZWFkKFwiJ1wiKSkge1xyXG5cdFx0XHRcdFx0bGl0ZXJhbCA9IGZhbHNlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjaGVja0xpdGVyYWwoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c3dpdGNoIChmb3JtYXQuY2hhckF0KGlGb3JtYXQpKSB7XHJcblx0XHRcdFx0XHRjYXNlIFwiZFwiOlxyXG5cdFx0XHRcdFx0XHRkYXkgPSBnZXROdW1iZXIoXCJkXCIpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCJEXCI6XHJcblx0XHRcdFx0XHRcdGdldE5hbWUoXCJEXCIsIGRheU5hbWVzU2hvcnQsIGRheU5hbWVzKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwib1wiOlxyXG5cdFx0XHRcdFx0XHRkb3kgPSBnZXROdW1iZXIoXCJvXCIpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCJtXCI6XHJcblx0XHRcdFx0XHRcdG1vbnRoID0gZ2V0TnVtYmVyKFwibVwiKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwiTVwiOlxyXG5cdFx0XHRcdFx0XHRtb250aCA9IGdldE5hbWUoXCJNXCIsIG1vbnRoTmFtZXNTaG9ydCwgbW9udGhOYW1lcyk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcInlcIjpcclxuXHRcdFx0XHRcdFx0eWVhciA9IGdldE51bWJlcihcInlcIik7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIkBcIjpcclxuXHRcdFx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKGdldE51bWJlcihcIkBcIikpO1xyXG5cdFx0XHRcdFx0XHR5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdFx0XHRcdFx0XHRtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0XHRcdFx0XHRcdGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCIhXCI6XHJcblx0XHRcdFx0XHRcdGRhdGUgPSBuZXcgRGF0ZSgoZ2V0TnVtYmVyKFwiIVwiKSAtIHRoaXMuX3RpY2tzVG8xOTcwKSAvIDEwMDAwKTtcclxuXHRcdFx0XHRcdFx0eWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHRcdFx0XHRcdFx0bW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG5cdFx0XHRcdFx0XHRkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwiJ1wiOlxyXG5cdFx0XHRcdFx0XHRpZiAobG9va0FoZWFkKFwiJ1wiKSl7XHJcblx0XHRcdFx0XHRcdFx0Y2hlY2tMaXRlcmFsKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0bGl0ZXJhbCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRjaGVja0xpdGVyYWwoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoaVZhbHVlIDwgdmFsdWUubGVuZ3RoKXtcclxuXHRcdFx0ZXh0cmEgPSB2YWx1ZS5zdWJzdHIoaVZhbHVlKTtcclxuXHRcdFx0aWYgKCEvXlxccysvLnRlc3QoZXh0cmEpKSB7XHJcblx0XHRcdFx0dGhyb3cgXCJFeHRyYS91bnBhcnNlZCBjaGFyYWN0ZXJzIGZvdW5kIGluIGRhdGU6IFwiICsgZXh0cmE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoeWVhciA9PT0gLTEpIHtcclxuXHRcdFx0eWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHRcdH0gZWxzZSBpZiAoeWVhciA8IDEwMCkge1xyXG5cdFx0XHR5ZWFyICs9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAlIDEwMCArXHJcblx0XHRcdFx0KHllYXIgPD0gc2hvcnRZZWFyQ3V0b2ZmID8gMCA6IC0xMDApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChkb3kgPiAtMSkge1xyXG5cdFx0XHRtb250aCA9IDE7XHJcblx0XHRcdGRheSA9IGRveTtcclxuXHRcdFx0ZG8ge1xyXG5cdFx0XHRcdGRpbSA9IHRoaXMuX2dldERheXNJbk1vbnRoKHllYXIsIG1vbnRoIC0gMSk7XHJcblx0XHRcdFx0aWYgKGRheSA8PSBkaW0pIHtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRtb250aCsrO1xyXG5cdFx0XHRcdGRheSAtPSBkaW07XHJcblx0XHRcdH0gd2hpbGUgKHRydWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGRhdGUgPSB0aGlzLl9kYXlsaWdodFNhdmluZ0FkanVzdChuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSkpO1xyXG5cdFx0aWYgKGRhdGUuZ2V0RnVsbFllYXIoKSAhPT0geWVhciB8fCBkYXRlLmdldE1vbnRoKCkgKyAxICE9PSBtb250aCB8fCBkYXRlLmdldERhdGUoKSAhPT0gZGF5KSB7XHJcblx0XHRcdHRocm93IFwiSW52YWxpZCBkYXRlXCI7IC8vIEUuZy4gMzEvMDIvMDBcclxuXHRcdH1cclxuXHRcdHJldHVybiBkYXRlO1xyXG5cdH0sXHJcblxyXG5cdC8qIFN0YW5kYXJkIGRhdGUgZm9ybWF0cy4gKi9cclxuXHRBVE9NOiBcInl5LW1tLWRkXCIsIC8vIFJGQyAzMzM5IChJU08gODYwMSlcclxuXHRDT09LSUU6IFwiRCwgZGQgTSB5eVwiLFxyXG5cdElTT184NjAxOiBcInl5LW1tLWRkXCIsXHJcblx0UkZDXzgyMjogXCJELCBkIE0geVwiLFxyXG5cdFJGQ184NTA6IFwiREQsIGRkLU0teVwiLFxyXG5cdFJGQ18xMDM2OiBcIkQsIGQgTSB5XCIsXHJcblx0UkZDXzExMjM6IFwiRCwgZCBNIHl5XCIsXHJcblx0UkZDXzI4MjI6IFwiRCwgZCBNIHl5XCIsXHJcblx0UlNTOiBcIkQsIGQgTSB5XCIsIC8vIFJGQyA4MjJcclxuXHRUSUNLUzogXCIhXCIsXHJcblx0VElNRVNUQU1QOiBcIkBcIixcclxuXHRXM0M6IFwieXktbW0tZGRcIiwgLy8gSVNPIDg2MDFcclxuXHJcblx0X3RpY2tzVG8xOTcwOiAoKCgxOTcwIC0gMSkgKiAzNjUgKyBNYXRoLmZsb29yKDE5NzAgLyA0KSAtIE1hdGguZmxvb3IoMTk3MCAvIDEwMCkgK1xyXG5cdFx0TWF0aC5mbG9vcigxOTcwIC8gNDAwKSkgKiAyNCAqIDYwICogNjAgKiAxMDAwMDAwMCksXHJcblxyXG5cdC8qIEZvcm1hdCBhIGRhdGUgb2JqZWN0IGludG8gYSBzdHJpbmcgdmFsdWUuXHJcblx0ICogVGhlIGZvcm1hdCBjYW4gYmUgY29tYmluYXRpb25zIG9mIHRoZSBmb2xsb3dpbmc6XHJcblx0ICogZCAgLSBkYXkgb2YgbW9udGggKG5vIGxlYWRpbmcgemVybylcclxuXHQgKiBkZCAtIGRheSBvZiBtb250aCAodHdvIGRpZ2l0KVxyXG5cdCAqIG8gIC0gZGF5IG9mIHllYXIgKG5vIGxlYWRpbmcgemVyb3MpXHJcblx0ICogb28gLSBkYXkgb2YgeWVhciAodGhyZWUgZGlnaXQpXHJcblx0ICogRCAgLSBkYXkgbmFtZSBzaG9ydFxyXG5cdCAqIEREIC0gZGF5IG5hbWUgbG9uZ1xyXG5cdCAqIG0gIC0gbW9udGggb2YgeWVhciAobm8gbGVhZGluZyB6ZXJvKVxyXG5cdCAqIG1tIC0gbW9udGggb2YgeWVhciAodHdvIGRpZ2l0KVxyXG5cdCAqIE0gIC0gbW9udGggbmFtZSBzaG9ydFxyXG5cdCAqIE1NIC0gbW9udGggbmFtZSBsb25nXHJcblx0ICogeSAgLSB5ZWFyICh0d28gZGlnaXQpXHJcblx0ICogeXkgLSB5ZWFyIChmb3VyIGRpZ2l0KVxyXG5cdCAqIEAgLSBVbml4IHRpbWVzdGFtcCAobXMgc2luY2UgMDEvMDEvMTk3MClcclxuXHQgKiAhIC0gV2luZG93cyB0aWNrcyAoMTAwbnMgc2luY2UgMDEvMDEvMDAwMSlcclxuXHQgKiBcIi4uLlwiIC0gbGl0ZXJhbCB0ZXh0XHJcblx0ICogJycgLSBzaW5nbGUgcXVvdGVcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSAgZm9ybWF0IHN0cmluZyAtIHRoZSBkZXNpcmVkIGZvcm1hdCBvZiB0aGUgZGF0ZVxyXG5cdCAqIEBwYXJhbSAgZGF0ZSBEYXRlIC0gdGhlIGRhdGUgdmFsdWUgdG8gZm9ybWF0XHJcblx0ICogQHBhcmFtICBzZXR0aW5ncyBPYmplY3QgLSBhdHRyaWJ1dGVzIGluY2x1ZGU6XHJcblx0ICpcdFx0XHRcdFx0ZGF5TmFtZXNTaG9ydFx0c3RyaW5nWzddIC0gYWJicmV2aWF0ZWQgbmFtZXMgb2YgdGhlIGRheXMgZnJvbSBTdW5kYXkgKG9wdGlvbmFsKVxyXG5cdCAqXHRcdFx0XHRcdGRheU5hbWVzXHRcdHN0cmluZ1s3XSAtIG5hbWVzIG9mIHRoZSBkYXlzIGZyb20gU3VuZGF5IChvcHRpb25hbClcclxuXHQgKlx0XHRcdFx0XHRtb250aE5hbWVzU2hvcnQgc3RyaW5nWzEyXSAtIGFiYnJldmlhdGVkIG5hbWVzIG9mIHRoZSBtb250aHMgKG9wdGlvbmFsKVxyXG5cdCAqXHRcdFx0XHRcdG1vbnRoTmFtZXNcdFx0c3RyaW5nWzEyXSAtIG5hbWVzIG9mIHRoZSBtb250aHMgKG9wdGlvbmFsKVxyXG5cdCAqIEByZXR1cm4gIHN0cmluZyAtIHRoZSBkYXRlIGluIHRoZSBhYm92ZSBmb3JtYXRcclxuXHQgKi9cclxuXHRmb3JtYXREYXRlOiBmdW5jdGlvbiAoZm9ybWF0LCBkYXRlLCBzZXR0aW5ncykge1xyXG5cdFx0aWYgKCFkYXRlKSB7XHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBpRm9ybWF0LFxyXG5cdFx0XHRkYXlOYW1lc1Nob3J0ID0gKHNldHRpbmdzID8gc2V0dGluZ3MuZGF5TmFtZXNTaG9ydCA6IG51bGwpIHx8IHRoaXMuX2RlZmF1bHRzLmRheU5hbWVzU2hvcnQsXHJcblx0XHRcdGRheU5hbWVzID0gKHNldHRpbmdzID8gc2V0dGluZ3MuZGF5TmFtZXMgOiBudWxsKSB8fCB0aGlzLl9kZWZhdWx0cy5kYXlOYW1lcyxcclxuXHRcdFx0bW9udGhOYW1lc1Nob3J0ID0gKHNldHRpbmdzID8gc2V0dGluZ3MubW9udGhOYW1lc1Nob3J0IDogbnVsbCkgfHwgdGhpcy5fZGVmYXVsdHMubW9udGhOYW1lc1Nob3J0LFxyXG5cdFx0XHRtb250aE5hbWVzID0gKHNldHRpbmdzID8gc2V0dGluZ3MubW9udGhOYW1lcyA6IG51bGwpIHx8IHRoaXMuX2RlZmF1bHRzLm1vbnRoTmFtZXMsXHJcblx0XHRcdC8vIENoZWNrIHdoZXRoZXIgYSBmb3JtYXQgY2hhcmFjdGVyIGlzIGRvdWJsZWRcclxuXHRcdFx0bG9va0FoZWFkID0gZnVuY3Rpb24obWF0Y2gpIHtcclxuXHRcdFx0XHR2YXIgbWF0Y2hlcyA9IChpRm9ybWF0ICsgMSA8IGZvcm1hdC5sZW5ndGggJiYgZm9ybWF0LmNoYXJBdChpRm9ybWF0ICsgMSkgPT09IG1hdGNoKTtcclxuXHRcdFx0XHRpZiAobWF0Y2hlcykge1xyXG5cdFx0XHRcdFx0aUZvcm1hdCsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gbWF0Y2hlcztcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gRm9ybWF0IGEgbnVtYmVyLCB3aXRoIGxlYWRpbmcgemVybyBpZiBuZWNlc3NhcnlcclxuXHRcdFx0Zm9ybWF0TnVtYmVyID0gZnVuY3Rpb24obWF0Y2gsIHZhbHVlLCBsZW4pIHtcclxuXHRcdFx0XHR2YXIgbnVtID0gXCJcIiArIHZhbHVlO1xyXG5cdFx0XHRcdGlmIChsb29rQWhlYWQobWF0Y2gpKSB7XHJcblx0XHRcdFx0XHR3aGlsZSAobnVtLmxlbmd0aCA8IGxlbikge1xyXG5cdFx0XHRcdFx0XHRudW0gPSBcIjBcIiArIG51bTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIG51bTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gRm9ybWF0IGEgbmFtZSwgc2hvcnQgb3IgbG9uZyBhcyByZXF1ZXN0ZWRcclxuXHRcdFx0Zm9ybWF0TmFtZSA9IGZ1bmN0aW9uKG1hdGNoLCB2YWx1ZSwgc2hvcnROYW1lcywgbG9uZ05hbWVzKSB7XHJcblx0XHRcdFx0cmV0dXJuIChsb29rQWhlYWQobWF0Y2gpID8gbG9uZ05hbWVzW3ZhbHVlXSA6IHNob3J0TmFtZXNbdmFsdWVdKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b3V0cHV0ID0gXCJcIixcclxuXHRcdFx0bGl0ZXJhbCA9IGZhbHNlO1xyXG5cclxuXHRcdGlmIChkYXRlKSB7XHJcblx0XHRcdGZvciAoaUZvcm1hdCA9IDA7IGlGb3JtYXQgPCBmb3JtYXQubGVuZ3RoOyBpRm9ybWF0KyspIHtcclxuXHRcdFx0XHRpZiAobGl0ZXJhbCkge1xyXG5cdFx0XHRcdFx0aWYgKGZvcm1hdC5jaGFyQXQoaUZvcm1hdCkgPT09IFwiJ1wiICYmICFsb29rQWhlYWQoXCInXCIpKSB7XHJcblx0XHRcdFx0XHRcdGxpdGVyYWwgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG91dHB1dCArPSBmb3JtYXQuY2hhckF0KGlGb3JtYXQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzd2l0Y2ggKGZvcm1hdC5jaGFyQXQoaUZvcm1hdCkpIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSBcImRcIjpcclxuXHRcdFx0XHRcdFx0XHRvdXRwdXQgKz0gZm9ybWF0TnVtYmVyKFwiZFwiLCBkYXRlLmdldERhdGUoKSwgMik7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgXCJEXCI6XHJcblx0XHRcdFx0XHRcdFx0b3V0cHV0ICs9IGZvcm1hdE5hbWUoXCJEXCIsIGRhdGUuZ2V0RGF5KCksIGRheU5hbWVzU2hvcnQsIGRheU5hbWVzKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSBcIm9cIjpcclxuXHRcdFx0XHRcdFx0XHRvdXRwdXQgKz0gZm9ybWF0TnVtYmVyKFwib1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0TWF0aC5yb3VuZCgobmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIDAsIDApLmdldFRpbWUoKSkgLyA4NjQwMDAwMCksIDMpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIFwibVwiOlxyXG5cdFx0XHRcdFx0XHRcdG91dHB1dCArPSBmb3JtYXROdW1iZXIoXCJtXCIsIGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIFwiTVwiOlxyXG5cdFx0XHRcdFx0XHRcdG91dHB1dCArPSBmb3JtYXROYW1lKFwiTVwiLCBkYXRlLmdldE1vbnRoKCksIG1vbnRoTmFtZXNTaG9ydCwgbW9udGhOYW1lcyk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgXCJ5XCI6XHJcblx0XHRcdFx0XHRcdFx0b3V0cHV0ICs9IChsb29rQWhlYWQoXCJ5XCIpID8gZGF0ZS5nZXRGdWxsWWVhcigpIDpcclxuXHRcdFx0XHRcdFx0XHRcdChkYXRlLmdldFllYXIoKSAlIDEwMCA8IDEwID8gXCIwXCIgOiBcIlwiKSArIGRhdGUuZ2V0WWVhcigpICUgMTAwKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSBcIkBcIjpcclxuXHRcdFx0XHRcdFx0XHRvdXRwdXQgKz0gZGF0ZS5nZXRUaW1lKCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgXCIhXCI6XHJcblx0XHRcdFx0XHRcdFx0b3V0cHV0ICs9IGRhdGUuZ2V0VGltZSgpICogMTAwMDAgKyB0aGlzLl90aWNrc1RvMTk3MDtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSBcIidcIjpcclxuXHRcdFx0XHRcdFx0XHRpZiAobG9va0FoZWFkKFwiJ1wiKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0b3V0cHV0ICs9IFwiJ1wiO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsaXRlcmFsID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdFx0b3V0cHV0ICs9IGZvcm1hdC5jaGFyQXQoaUZvcm1hdCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gb3V0cHV0O1xyXG5cdH0sXHJcblxyXG5cdC8qIEV4dHJhY3QgYWxsIHBvc3NpYmxlIGNoYXJhY3RlcnMgZnJvbSB0aGUgZGF0ZSBmb3JtYXQuICovXHJcblx0X3Bvc3NpYmxlQ2hhcnM6IGZ1bmN0aW9uIChmb3JtYXQpIHtcclxuXHRcdHZhciBpRm9ybWF0LFxyXG5cdFx0XHRjaGFycyA9IFwiXCIsXHJcblx0XHRcdGxpdGVyYWwgPSBmYWxzZSxcclxuXHRcdFx0Ly8gQ2hlY2sgd2hldGhlciBhIGZvcm1hdCBjaGFyYWN0ZXIgaXMgZG91YmxlZFxyXG5cdFx0XHRsb29rQWhlYWQgPSBmdW5jdGlvbihtYXRjaCkge1xyXG5cdFx0XHRcdHZhciBtYXRjaGVzID0gKGlGb3JtYXQgKyAxIDwgZm9ybWF0Lmxlbmd0aCAmJiBmb3JtYXQuY2hhckF0KGlGb3JtYXQgKyAxKSA9PT0gbWF0Y2gpO1xyXG5cdFx0XHRcdGlmIChtYXRjaGVzKSB7XHJcblx0XHRcdFx0XHRpRm9ybWF0Kys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBtYXRjaGVzO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGZvciAoaUZvcm1hdCA9IDA7IGlGb3JtYXQgPCBmb3JtYXQubGVuZ3RoOyBpRm9ybWF0KyspIHtcclxuXHRcdFx0aWYgKGxpdGVyYWwpIHtcclxuXHRcdFx0XHRpZiAoZm9ybWF0LmNoYXJBdChpRm9ybWF0KSA9PT0gXCInXCIgJiYgIWxvb2tBaGVhZChcIidcIikpIHtcclxuXHRcdFx0XHRcdGxpdGVyYWwgPSBmYWxzZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y2hhcnMgKz0gZm9ybWF0LmNoYXJBdChpRm9ybWF0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c3dpdGNoIChmb3JtYXQuY2hhckF0KGlGb3JtYXQpKSB7XHJcblx0XHRcdFx0XHRjYXNlIFwiZFwiOiBjYXNlIFwibVwiOiBjYXNlIFwieVwiOiBjYXNlIFwiQFwiOlxyXG5cdFx0XHRcdFx0XHRjaGFycyArPSBcIjAxMjM0NTY3ODlcIjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwiRFwiOiBjYXNlIFwiTVwiOlxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDsgLy8gQWNjZXB0IGFueXRoaW5nXHJcblx0XHRcdFx0XHRjYXNlIFwiJ1wiOlxyXG5cdFx0XHRcdFx0XHRpZiAobG9va0FoZWFkKFwiJ1wiKSkge1xyXG5cdFx0XHRcdFx0XHRcdGNoYXJzICs9IFwiJ1wiO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGxpdGVyYWwgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0Y2hhcnMgKz0gZm9ybWF0LmNoYXJBdChpRm9ybWF0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBjaGFycztcclxuXHR9LFxyXG5cclxuXHQvKiBHZXQgYSBzZXR0aW5nIHZhbHVlLCBkZWZhdWx0aW5nIGlmIG5lY2Vzc2FyeS4gKi9cclxuXHRfZ2V0OiBmdW5jdGlvbihpbnN0LCBuYW1lKSB7XHJcblx0XHRyZXR1cm4gaW5zdC5zZXR0aW5nc1tuYW1lXSAhPT0gdW5kZWZpbmVkID9cclxuXHRcdFx0aW5zdC5zZXR0aW5nc1tuYW1lXSA6IHRoaXMuX2RlZmF1bHRzW25hbWVdO1xyXG5cdH0sXHJcblxyXG5cdC8qIFBhcnNlIGV4aXN0aW5nIGRhdGUgYW5kIGluaXRpYWxpc2UgZGF0ZSBwaWNrZXIuICovXHJcblx0X3NldERhdGVGcm9tRmllbGQ6IGZ1bmN0aW9uKGluc3QsIG5vRGVmYXVsdCkge1xyXG5cdFx0aWYgKGluc3QuaW5wdXQudmFsKCkgPT09IGluc3QubGFzdFZhbCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGRhdGVGb3JtYXQgPSB0aGlzLl9nZXQoaW5zdCwgXCJkYXRlRm9ybWF0XCIpLFxyXG5cdFx0XHRkYXRlcyA9IGluc3QubGFzdFZhbCA9IGluc3QuaW5wdXQgPyBpbnN0LmlucHV0LnZhbCgpIDogbnVsbCxcclxuXHRcdFx0ZGVmYXVsdERhdGUgPSB0aGlzLl9nZXREZWZhdWx0RGF0ZShpbnN0KSxcclxuXHRcdFx0ZGF0ZSA9IGRlZmF1bHREYXRlLFxyXG5cdFx0XHRzZXR0aW5ncyA9IHRoaXMuX2dldEZvcm1hdENvbmZpZyhpbnN0KTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRkYXRlID0gdGhpcy5wYXJzZURhdGUoZGF0ZUZvcm1hdCwgZGF0ZXMsIHNldHRpbmdzKSB8fCBkZWZhdWx0RGF0ZTtcclxuXHRcdH0gY2F0Y2ggKGV2ZW50KSB7XHJcblx0XHRcdGRhdGVzID0gKG5vRGVmYXVsdCA/IFwiXCIgOiBkYXRlcyk7XHJcblx0XHR9XHJcblx0XHRpbnN0LnNlbGVjdGVkRGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcblx0XHRpbnN0LmRyYXdNb250aCA9IGluc3Quc2VsZWN0ZWRNb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuXHRcdGluc3QuZHJhd1llYXIgPSBpbnN0LnNlbGVjdGVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHRcdGluc3QuY3VycmVudERheSA9IChkYXRlcyA/IGRhdGUuZ2V0RGF0ZSgpIDogMCk7XHJcblx0XHRpbnN0LmN1cnJlbnRNb250aCA9IChkYXRlcyA/IGRhdGUuZ2V0TW9udGgoKSA6IDApO1xyXG5cdFx0aW5zdC5jdXJyZW50WWVhciA9IChkYXRlcyA/IGRhdGUuZ2V0RnVsbFllYXIoKSA6IDApO1xyXG5cdFx0dGhpcy5fYWRqdXN0SW5zdERhdGUoaW5zdCk7XHJcblx0fSxcclxuXHJcblx0LyogUmV0cmlldmUgdGhlIGRlZmF1bHQgZGF0ZSBzaG93biBvbiBvcGVuaW5nLiAqL1xyXG5cdF9nZXREZWZhdWx0RGF0ZTogZnVuY3Rpb24oaW5zdCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Jlc3RyaWN0TWluTWF4KGluc3QsXHJcblx0XHRcdHRoaXMuX2RldGVybWluZURhdGUoaW5zdCwgdGhpcy5fZ2V0KGluc3QsIFwiZGVmYXVsdERhdGVcIiksIG5ldyBEYXRlKCkpKTtcclxuXHR9LFxyXG5cclxuXHQvKiBBIGRhdGUgbWF5IGJlIHNwZWNpZmllZCBhcyBhbiBleGFjdCB2YWx1ZSBvciBhIHJlbGF0aXZlIG9uZS4gKi9cclxuXHRfZGV0ZXJtaW5lRGF0ZTogZnVuY3Rpb24oaW5zdCwgZGF0ZSwgZGVmYXVsdERhdGUpIHtcclxuXHRcdHZhciBvZmZzZXROdW1lcmljID0gZnVuY3Rpb24ob2Zmc2V0KSB7XHJcblx0XHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcdGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIG9mZnNldCk7XHJcblx0XHRcdFx0cmV0dXJuIGRhdGU7XHJcblx0XHRcdH0sXHJcblx0XHRcdG9mZnNldFN0cmluZyA9IGZ1bmN0aW9uKG9mZnNldCkge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJC5kYXRlcGlja2VyLnBhcnNlRGF0ZSgkLmRhdGVwaWNrZXIuX2dldChpbnN0LCBcImRhdGVGb3JtYXRcIiksXHJcblx0XHRcdFx0XHRcdG9mZnNldCwgJC5kYXRlcGlja2VyLl9nZXRGb3JtYXRDb25maWcoaW5zdCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0Ly8gSWdub3JlXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgZGF0ZSA9IChvZmZzZXQudG9Mb3dlckNhc2UoKS5tYXRjaCgvXmMvKSA/XHJcblx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX2dldERhdGUoaW5zdCkgOiBudWxsKSB8fCBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRcdFx0eWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSxcclxuXHRcdFx0XHRcdG1vbnRoID0gZGF0ZS5nZXRNb250aCgpLFxyXG5cdFx0XHRcdFx0ZGF5ID0gZGF0ZS5nZXREYXRlKCksXHJcblx0XHRcdFx0XHRwYXR0ZXJuID0gLyhbK1xcLV0/WzAtOV0rKVxccyooZHxEfHd8V3xtfE18eXxZKT8vZyxcclxuXHRcdFx0XHRcdG1hdGNoZXMgPSBwYXR0ZXJuLmV4ZWMob2Zmc2V0KTtcclxuXHJcblx0XHRcdFx0d2hpbGUgKG1hdGNoZXMpIHtcclxuXHRcdFx0XHRcdHN3aXRjaCAobWF0Y2hlc1syXSB8fCBcImRcIikge1xyXG5cdFx0XHRcdFx0XHRjYXNlIFwiZFwiIDogY2FzZSBcIkRcIiA6XHJcblx0XHRcdFx0XHRcdFx0ZGF5ICs9IHBhcnNlSW50KG1hdGNoZXNbMV0sMTApOyBicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSBcIndcIiA6IGNhc2UgXCJXXCIgOlxyXG5cdFx0XHRcdFx0XHRcdGRheSArPSBwYXJzZUludChtYXRjaGVzWzFdLDEwKSAqIDc7IGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIFwibVwiIDogY2FzZSBcIk1cIiA6XHJcblx0XHRcdFx0XHRcdFx0bW9udGggKz0gcGFyc2VJbnQobWF0Y2hlc1sxXSwxMCk7XHJcblx0XHRcdFx0XHRcdFx0ZGF5ID0gTWF0aC5taW4oZGF5LCAkLmRhdGVwaWNrZXIuX2dldERheXNJbk1vbnRoKHllYXIsIG1vbnRoKSk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgXCJ5XCI6IGNhc2UgXCJZXCIgOlxyXG5cdFx0XHRcdFx0XHRcdHllYXIgKz0gcGFyc2VJbnQobWF0Y2hlc1sxXSwxMCk7XHJcblx0XHRcdFx0XHRcdFx0ZGF5ID0gTWF0aC5taW4oZGF5LCAkLmRhdGVwaWNrZXIuX2dldERheXNJbk1vbnRoKHllYXIsIG1vbnRoKSk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRtYXRjaGVzID0gcGF0dGVybi5leGVjKG9mZnNldCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0bmV3RGF0ZSA9IChkYXRlID09IG51bGwgfHwgZGF0ZSA9PT0gXCJcIiA/IGRlZmF1bHREYXRlIDogKHR5cGVvZiBkYXRlID09PSBcInN0cmluZ1wiID8gb2Zmc2V0U3RyaW5nKGRhdGUpIDpcclxuXHRcdFx0XHQodHlwZW9mIGRhdGUgPT09IFwibnVtYmVyXCIgPyAoaXNOYU4oZGF0ZSkgPyBkZWZhdWx0RGF0ZSA6IG9mZnNldE51bWVyaWMoZGF0ZSkpIDogbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpKSkpO1xyXG5cclxuXHRcdG5ld0RhdGUgPSAobmV3RGF0ZSAmJiBuZXdEYXRlLnRvU3RyaW5nKCkgPT09IFwiSW52YWxpZCBEYXRlXCIgPyBkZWZhdWx0RGF0ZSA6IG5ld0RhdGUpO1xyXG5cdFx0aWYgKG5ld0RhdGUpIHtcclxuXHRcdFx0bmV3RGF0ZS5zZXRIb3VycygwKTtcclxuXHRcdFx0bmV3RGF0ZS5zZXRNaW51dGVzKDApO1xyXG5cdFx0XHRuZXdEYXRlLnNldFNlY29uZHMoMCk7XHJcblx0XHRcdG5ld0RhdGUuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KG5ld0RhdGUpO1xyXG5cdH0sXHJcblxyXG5cdC8qIEhhbmRsZSBzd2l0Y2ggdG8vZnJvbSBkYXlsaWdodCBzYXZpbmcuXHJcblx0ICogSG91cnMgbWF5IGJlIG5vbi16ZXJvIG9uIGRheWxpZ2h0IHNhdmluZyBjdXQtb3ZlcjpcclxuXHQgKiA+IDEyIHdoZW4gbWlkbmlnaHQgY2hhbmdlb3ZlciwgYnV0IHRoZW4gY2Fubm90IGdlbmVyYXRlXHJcblx0ICogbWlkbmlnaHQgZGF0ZXRpbWUsIHNvIGp1bXAgdG8gMUFNLCBvdGhlcndpc2UgcmVzZXQuXHJcblx0ICogQHBhcmFtICBkYXRlICAoRGF0ZSkgdGhlIGRhdGUgdG8gY2hlY2tcclxuXHQgKiBAcmV0dXJuICAoRGF0ZSkgdGhlIGNvcnJlY3RlZCBkYXRlXHJcblx0ICovXHJcblx0X2RheWxpZ2h0U2F2aW5nQWRqdXN0OiBmdW5jdGlvbihkYXRlKSB7XHJcblx0XHRpZiAoIWRhdGUpIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0XHRkYXRlLnNldEhvdXJzKGRhdGUuZ2V0SG91cnMoKSA+IDEyID8gZGF0ZS5nZXRIb3VycygpICsgMiA6IDApO1xyXG5cdFx0cmV0dXJuIGRhdGU7XHJcblx0fSxcclxuXHJcblx0LyogU2V0IHRoZSBkYXRlKHMpIGRpcmVjdGx5LiAqL1xyXG5cdF9zZXREYXRlOiBmdW5jdGlvbihpbnN0LCBkYXRlLCBub0NoYW5nZSkge1xyXG5cdFx0dmFyIGNsZWFyID0gIWRhdGUsXHJcblx0XHRcdG9yaWdNb250aCA9IGluc3Quc2VsZWN0ZWRNb250aCxcclxuXHRcdFx0b3JpZ1llYXIgPSBpbnN0LnNlbGVjdGVkWWVhcixcclxuXHRcdFx0bmV3RGF0ZSA9IHRoaXMuX3Jlc3RyaWN0TWluTWF4KGluc3QsIHRoaXMuX2RldGVybWluZURhdGUoaW5zdCwgZGF0ZSwgbmV3IERhdGUoKSkpO1xyXG5cclxuXHRcdGluc3Quc2VsZWN0ZWREYXkgPSBpbnN0LmN1cnJlbnREYXkgPSBuZXdEYXRlLmdldERhdGUoKTtcclxuXHRcdGluc3QuZHJhd01vbnRoID0gaW5zdC5zZWxlY3RlZE1vbnRoID0gaW5zdC5jdXJyZW50TW9udGggPSBuZXdEYXRlLmdldE1vbnRoKCk7XHJcblx0XHRpbnN0LmRyYXdZZWFyID0gaW5zdC5zZWxlY3RlZFllYXIgPSBpbnN0LmN1cnJlbnRZZWFyID0gbmV3RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdFx0aWYgKChvcmlnTW9udGggIT09IGluc3Quc2VsZWN0ZWRNb250aCB8fCBvcmlnWWVhciAhPT0gaW5zdC5zZWxlY3RlZFllYXIpICYmICFub0NoYW5nZSkge1xyXG5cdFx0XHR0aGlzLl9ub3RpZnlDaGFuZ2UoaW5zdCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLl9hZGp1c3RJbnN0RGF0ZShpbnN0KTtcclxuXHRcdGlmIChpbnN0LmlucHV0KSB7XHJcblx0XHRcdGluc3QuaW5wdXQudmFsKGNsZWFyID8gXCJcIiA6IHRoaXMuX2Zvcm1hdERhdGUoaW5zdCkpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8qIFJldHJpZXZlIHRoZSBkYXRlKHMpIGRpcmVjdGx5LiAqL1xyXG5cdF9nZXREYXRlOiBmdW5jdGlvbihpbnN0KSB7XHJcblx0XHR2YXIgc3RhcnREYXRlID0gKCFpbnN0LmN1cnJlbnRZZWFyIHx8IChpbnN0LmlucHV0ICYmIGluc3QuaW5wdXQudmFsKCkgPT09IFwiXCIpID8gbnVsbCA6XHJcblx0XHRcdHRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KG5ldyBEYXRlKFxyXG5cdFx0XHRpbnN0LmN1cnJlbnRZZWFyLCBpbnN0LmN1cnJlbnRNb250aCwgaW5zdC5jdXJyZW50RGF5KSkpO1xyXG5cdFx0XHRyZXR1cm4gc3RhcnREYXRlO1xyXG5cdH0sXHJcblxyXG5cdC8qIEF0dGFjaCB0aGUgb254eHggaGFuZGxlcnMuICBUaGVzZSBhcmUgZGVjbGFyZWQgc3RhdGljYWxseSBzb1xyXG5cdCAqIHRoZXkgd29yayB3aXRoIHN0YXRpYyBjb2RlIHRyYW5zZm9ybWVycyBsaWtlIENhamEuXHJcblx0ICovXHJcblx0X2F0dGFjaEhhbmRsZXJzOiBmdW5jdGlvbihpbnN0KSB7XHJcblx0XHR2YXIgc3RlcE1vbnRocyA9IHRoaXMuX2dldChpbnN0LCBcInN0ZXBNb250aHNcIiksXHJcblx0XHRcdGlkID0gXCIjXCIgKyBpbnN0LmlkLnJlcGxhY2UoIC9cXFxcXFxcXC9nLCBcIlxcXFxcIiApO1xyXG5cdFx0aW5zdC5kcERpdi5maW5kKFwiW2RhdGEtaGFuZGxlcl1cIikubWFwKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIGhhbmRsZXIgPSB7XHJcblx0XHRcdFx0cHJldjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0JC5kYXRlcGlja2VyLl9hZGp1c3REYXRlKGlkLCAtc3RlcE1vbnRocywgXCJNXCIpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bmV4dDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0JC5kYXRlcGlja2VyLl9hZGp1c3REYXRlKGlkLCArc3RlcE1vbnRocywgXCJNXCIpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0aGlkZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0JC5kYXRlcGlja2VyLl9oaWRlRGF0ZXBpY2tlcigpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dG9kYXk6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdCQuZGF0ZXBpY2tlci5fZ290b1RvZGF5KGlkKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNlbGVjdERheTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0JC5kYXRlcGlja2VyLl9zZWxlY3REYXkoaWQsICt0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtbW9udGhcIiksICt0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEteWVhclwiKSwgdGhpcyk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZWxlY3RNb250aDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0JC5kYXRlcGlja2VyLl9zZWxlY3RNb250aFllYXIoaWQsIHRoaXMsIFwiTVwiKTtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNlbGVjdFllYXI6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdCQuZGF0ZXBpY2tlci5fc2VsZWN0TW9udGhZZWFyKGlkLCB0aGlzLCBcIllcIik7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0XHQkKHRoaXMpLmJpbmQodGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWV2ZW50XCIpLCBoYW5kbGVyW3RoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1oYW5kbGVyXCIpXSk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cclxuXHQvKiBHZW5lcmF0ZSB0aGUgSFRNTCBmb3IgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGRhdGUgcGlja2VyLiAqL1xyXG5cdF9nZW5lcmF0ZUhUTUw6IGZ1bmN0aW9uKGluc3QpIHtcclxuXHRcdHZhciBtYXhEcmF3LCBwcmV2VGV4dCwgcHJldiwgbmV4dFRleHQsIG5leHQsIGN1cnJlbnRUZXh0LCBnb3RvRGF0ZSxcclxuXHRcdFx0Y29udHJvbHMsIGJ1dHRvblBhbmVsLCBmaXJzdERheSwgc2hvd1dlZWssIGRheU5hbWVzLCBkYXlOYW1lc01pbixcclxuXHRcdFx0bW9udGhOYW1lcywgbW9udGhOYW1lc1Nob3J0LCBiZWZvcmVTaG93RGF5LCBzaG93T3RoZXJNb250aHMsXHJcblx0XHRcdHNlbGVjdE90aGVyTW9udGhzLCBkZWZhdWx0RGF0ZSwgaHRtbCwgZG93LCByb3csIGdyb3VwLCBjb2wsIHNlbGVjdGVkRGF0ZSxcclxuXHRcdFx0Y29ybmVyQ2xhc3MsIGNhbGVuZGVyLCB0aGVhZCwgZGF5LCBkYXlzSW5Nb250aCwgbGVhZERheXMsIGN1clJvd3MsIG51bVJvd3MsXHJcblx0XHRcdHByaW50RGF0ZSwgZFJvdywgdGJvZHksIGRheVNldHRpbmdzLCBvdGhlck1vbnRoLCB1bnNlbGVjdGFibGUsXHJcblx0XHRcdHRlbXBEYXRlID0gbmV3IERhdGUoKSxcclxuXHRcdFx0dG9kYXkgPSB0aGlzLl9kYXlsaWdodFNhdmluZ0FkanVzdChcclxuXHRcdFx0XHRuZXcgRGF0ZSh0ZW1wRGF0ZS5nZXRGdWxsWWVhcigpLCB0ZW1wRGF0ZS5nZXRNb250aCgpLCB0ZW1wRGF0ZS5nZXREYXRlKCkpKSwgLy8gY2xlYXIgdGltZVxyXG5cdFx0XHRpc1JUTCA9IHRoaXMuX2dldChpbnN0LCBcImlzUlRMXCIpLFxyXG5cdFx0XHRzaG93QnV0dG9uUGFuZWwgPSB0aGlzLl9nZXQoaW5zdCwgXCJzaG93QnV0dG9uUGFuZWxcIiksXHJcblx0XHRcdGhpZGVJZk5vUHJldk5leHQgPSB0aGlzLl9nZXQoaW5zdCwgXCJoaWRlSWZOb1ByZXZOZXh0XCIpLFxyXG5cdFx0XHRuYXZpZ2F0aW9uQXNEYXRlRm9ybWF0ID0gdGhpcy5fZ2V0KGluc3QsIFwibmF2aWdhdGlvbkFzRGF0ZUZvcm1hdFwiKSxcclxuXHRcdFx0bnVtTW9udGhzID0gdGhpcy5fZ2V0TnVtYmVyT2ZNb250aHMoaW5zdCksXHJcblx0XHRcdHNob3dDdXJyZW50QXRQb3MgPSB0aGlzLl9nZXQoaW5zdCwgXCJzaG93Q3VycmVudEF0UG9zXCIpLFxyXG5cdFx0XHRzdGVwTW9udGhzID0gdGhpcy5fZ2V0KGluc3QsIFwic3RlcE1vbnRoc1wiKSxcclxuXHRcdFx0aXNNdWx0aU1vbnRoID0gKG51bU1vbnRoc1swXSAhPT0gMSB8fCBudW1Nb250aHNbMV0gIT09IDEpLFxyXG5cdFx0XHRjdXJyZW50RGF0ZSA9IHRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KCghaW5zdC5jdXJyZW50RGF5ID8gbmV3IERhdGUoOTk5OSwgOSwgOSkgOlxyXG5cdFx0XHRcdG5ldyBEYXRlKGluc3QuY3VycmVudFllYXIsIGluc3QuY3VycmVudE1vbnRoLCBpbnN0LmN1cnJlbnREYXkpKSksXHJcblx0XHRcdG1pbkRhdGUgPSB0aGlzLl9nZXRNaW5NYXhEYXRlKGluc3QsIFwibWluXCIpLFxyXG5cdFx0XHRtYXhEYXRlID0gdGhpcy5fZ2V0TWluTWF4RGF0ZShpbnN0LCBcIm1heFwiKSxcclxuXHRcdFx0ZHJhd01vbnRoID0gaW5zdC5kcmF3TW9udGggLSBzaG93Q3VycmVudEF0UG9zLFxyXG5cdFx0XHRkcmF3WWVhciA9IGluc3QuZHJhd1llYXI7XHJcblxyXG5cdFx0aWYgKGRyYXdNb250aCA8IDApIHtcclxuXHRcdFx0ZHJhd01vbnRoICs9IDEyO1xyXG5cdFx0XHRkcmF3WWVhci0tO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG1heERhdGUpIHtcclxuXHRcdFx0bWF4RHJhdyA9IHRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KG5ldyBEYXRlKG1heERhdGUuZ2V0RnVsbFllYXIoKSxcclxuXHRcdFx0XHRtYXhEYXRlLmdldE1vbnRoKCkgLSAobnVtTW9udGhzWzBdICogbnVtTW9udGhzWzFdKSArIDEsIG1heERhdGUuZ2V0RGF0ZSgpKSk7XHJcblx0XHRcdG1heERyYXcgPSAobWluRGF0ZSAmJiBtYXhEcmF3IDwgbWluRGF0ZSA/IG1pbkRhdGUgOiBtYXhEcmF3KTtcclxuXHRcdFx0d2hpbGUgKHRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KG5ldyBEYXRlKGRyYXdZZWFyLCBkcmF3TW9udGgsIDEpKSA+IG1heERyYXcpIHtcclxuXHRcdFx0XHRkcmF3TW9udGgtLTtcclxuXHRcdFx0XHRpZiAoZHJhd01vbnRoIDwgMCkge1xyXG5cdFx0XHRcdFx0ZHJhd01vbnRoID0gMTE7XHJcblx0XHRcdFx0XHRkcmF3WWVhci0tO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aW5zdC5kcmF3TW9udGggPSBkcmF3TW9udGg7XHJcblx0XHRpbnN0LmRyYXdZZWFyID0gZHJhd1llYXI7XHJcblxyXG5cdFx0cHJldlRleHQgPSB0aGlzLl9nZXQoaW5zdCwgXCJwcmV2VGV4dFwiKTtcclxuXHRcdHByZXZUZXh0ID0gKCFuYXZpZ2F0aW9uQXNEYXRlRm9ybWF0ID8gcHJldlRleHQgOiB0aGlzLmZvcm1hdERhdGUocHJldlRleHQsXHJcblx0XHRcdHRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KG5ldyBEYXRlKGRyYXdZZWFyLCBkcmF3TW9udGggLSBzdGVwTW9udGhzLCAxKSksXHJcblx0XHRcdHRoaXMuX2dldEZvcm1hdENvbmZpZyhpbnN0KSkpO1xyXG5cclxuXHRcdHByZXYgPSAodGhpcy5fY2FuQWRqdXN0TW9udGgoaW5zdCwgLTEsIGRyYXdZZWFyLCBkcmF3TW9udGgpID9cclxuXHRcdFx0XCI8YSBjbGFzcz0ndWktZGF0ZXBpY2tlci1wcmV2IHVpLWNvcm5lci1hbGwnIGRhdGEtaGFuZGxlcj0ncHJldicgZGF0YS1ldmVudD0nY2xpY2snXCIgK1xyXG5cdFx0XHRcIiB0aXRsZT0nXCIgKyBwcmV2VGV4dCArIFwiJz48c3BhbiBjbGFzcz0ndWktaWNvbiB1aS1pY29uLWNpcmNsZS10cmlhbmdsZS1cIiArICggaXNSVEwgPyBcImVcIiA6IFwid1wiKSArIFwiJz5cIiArIHByZXZUZXh0ICsgXCI8L3NwYW4+PC9hPlwiIDpcclxuXHRcdFx0KGhpZGVJZk5vUHJldk5leHQgPyBcIlwiIDogXCI8YSBjbGFzcz0ndWktZGF0ZXBpY2tlci1wcmV2IHVpLWNvcm5lci1hbGwgdWktc3RhdGUtZGlzYWJsZWQnIHRpdGxlPSdcIisgcHJldlRleHQgK1wiJz48c3BhbiBjbGFzcz0ndWktaWNvbiB1aS1pY29uLWNpcmNsZS10cmlhbmdsZS1cIiArICggaXNSVEwgPyBcImVcIiA6IFwid1wiKSArIFwiJz5cIiArIHByZXZUZXh0ICsgXCI8L3NwYW4+PC9hPlwiKSk7XHJcblxyXG5cdFx0bmV4dFRleHQgPSB0aGlzLl9nZXQoaW5zdCwgXCJuZXh0VGV4dFwiKTtcclxuXHRcdG5leHRUZXh0ID0gKCFuYXZpZ2F0aW9uQXNEYXRlRm9ybWF0ID8gbmV4dFRleHQgOiB0aGlzLmZvcm1hdERhdGUobmV4dFRleHQsXHJcblx0XHRcdHRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KG5ldyBEYXRlKGRyYXdZZWFyLCBkcmF3TW9udGggKyBzdGVwTW9udGhzLCAxKSksXHJcblx0XHRcdHRoaXMuX2dldEZvcm1hdENvbmZpZyhpbnN0KSkpO1xyXG5cclxuXHRcdG5leHQgPSAodGhpcy5fY2FuQWRqdXN0TW9udGgoaW5zdCwgKzEsIGRyYXdZZWFyLCBkcmF3TW9udGgpID9cclxuXHRcdFx0XCI8YSBjbGFzcz0ndWktZGF0ZXBpY2tlci1uZXh0IHVpLWNvcm5lci1hbGwnIGRhdGEtaGFuZGxlcj0nbmV4dCcgZGF0YS1ldmVudD0nY2xpY2snXCIgK1xyXG5cdFx0XHRcIiB0aXRsZT0nXCIgKyBuZXh0VGV4dCArIFwiJz48c3BhbiBjbGFzcz0ndWktaWNvbiB1aS1pY29uLWNpcmNsZS10cmlhbmdsZS1cIiArICggaXNSVEwgPyBcIndcIiA6IFwiZVwiKSArIFwiJz5cIiArIG5leHRUZXh0ICsgXCI8L3NwYW4+PC9hPlwiIDpcclxuXHRcdFx0KGhpZGVJZk5vUHJldk5leHQgPyBcIlwiIDogXCI8YSBjbGFzcz0ndWktZGF0ZXBpY2tlci1uZXh0IHVpLWNvcm5lci1hbGwgdWktc3RhdGUtZGlzYWJsZWQnIHRpdGxlPSdcIisgbmV4dFRleHQgKyBcIic+PHNwYW4gY2xhc3M9J3VpLWljb24gdWktaWNvbi1jaXJjbGUtdHJpYW5nbGUtXCIgKyAoIGlzUlRMID8gXCJ3XCIgOiBcImVcIikgKyBcIic+XCIgKyBuZXh0VGV4dCArIFwiPC9zcGFuPjwvYT5cIikpO1xyXG5cclxuXHRcdGN1cnJlbnRUZXh0ID0gdGhpcy5fZ2V0KGluc3QsIFwiY3VycmVudFRleHRcIik7XHJcblx0XHRnb3RvRGF0ZSA9ICh0aGlzLl9nZXQoaW5zdCwgXCJnb3RvQ3VycmVudFwiKSAmJiBpbnN0LmN1cnJlbnREYXkgPyBjdXJyZW50RGF0ZSA6IHRvZGF5KTtcclxuXHRcdGN1cnJlbnRUZXh0ID0gKCFuYXZpZ2F0aW9uQXNEYXRlRm9ybWF0ID8gY3VycmVudFRleHQgOlxyXG5cdFx0XHR0aGlzLmZvcm1hdERhdGUoY3VycmVudFRleHQsIGdvdG9EYXRlLCB0aGlzLl9nZXRGb3JtYXRDb25maWcoaW5zdCkpKTtcclxuXHJcblx0XHRjb250cm9scyA9ICghaW5zdC5pbmxpbmUgPyBcIjxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0ndWktZGF0ZXBpY2tlci1jbG9zZSB1aS1zdGF0ZS1kZWZhdWx0IHVpLXByaW9yaXR5LXByaW1hcnkgdWktY29ybmVyLWFsbCcgZGF0YS1oYW5kbGVyPSdoaWRlJyBkYXRhLWV2ZW50PSdjbGljayc+XCIgK1xyXG5cdFx0XHR0aGlzLl9nZXQoaW5zdCwgXCJjbG9zZVRleHRcIikgKyBcIjwvYnV0dG9uPlwiIDogXCJcIik7XHJcblxyXG5cdFx0YnV0dG9uUGFuZWwgPSAoc2hvd0J1dHRvblBhbmVsKSA/IFwiPGRpdiBjbGFzcz0ndWktZGF0ZXBpY2tlci1idXR0b25wYW5lIHVpLXdpZGdldC1jb250ZW50Jz5cIiArIChpc1JUTCA/IGNvbnRyb2xzIDogXCJcIikgK1xyXG5cdFx0XHQodGhpcy5faXNJblJhbmdlKGluc3QsIGdvdG9EYXRlKSA/IFwiPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSd1aS1kYXRlcGlja2VyLWN1cnJlbnQgdWktc3RhdGUtZGVmYXVsdCB1aS1wcmlvcml0eS1zZWNvbmRhcnkgdWktY29ybmVyLWFsbCcgZGF0YS1oYW5kbGVyPSd0b2RheScgZGF0YS1ldmVudD0nY2xpY2snXCIgK1xyXG5cdFx0XHRcIj5cIiArIGN1cnJlbnRUZXh0ICsgXCI8L2J1dHRvbj5cIiA6IFwiXCIpICsgKGlzUlRMID8gXCJcIiA6IGNvbnRyb2xzKSArIFwiPC9kaXY+XCIgOiBcIlwiO1xyXG5cclxuXHRcdGZpcnN0RGF5ID0gcGFyc2VJbnQodGhpcy5fZ2V0KGluc3QsIFwiZmlyc3REYXlcIiksMTApO1xyXG5cdFx0Zmlyc3REYXkgPSAoaXNOYU4oZmlyc3REYXkpID8gMCA6IGZpcnN0RGF5KTtcclxuXHJcblx0XHRzaG93V2VlayA9IHRoaXMuX2dldChpbnN0LCBcInNob3dXZWVrXCIpO1xyXG5cdFx0ZGF5TmFtZXMgPSB0aGlzLl9nZXQoaW5zdCwgXCJkYXlOYW1lc1wiKTtcclxuXHRcdGRheU5hbWVzTWluID0gdGhpcy5fZ2V0KGluc3QsIFwiZGF5TmFtZXNNaW5cIik7XHJcblx0XHRtb250aE5hbWVzID0gdGhpcy5fZ2V0KGluc3QsIFwibW9udGhOYW1lc1wiKTtcclxuXHRcdG1vbnRoTmFtZXNTaG9ydCA9IHRoaXMuX2dldChpbnN0LCBcIm1vbnRoTmFtZXNTaG9ydFwiKTtcclxuXHRcdGJlZm9yZVNob3dEYXkgPSB0aGlzLl9nZXQoaW5zdCwgXCJiZWZvcmVTaG93RGF5XCIpO1xyXG5cdFx0c2hvd090aGVyTW9udGhzID0gdGhpcy5fZ2V0KGluc3QsIFwic2hvd090aGVyTW9udGhzXCIpO1xyXG5cdFx0c2VsZWN0T3RoZXJNb250aHMgPSB0aGlzLl9nZXQoaW5zdCwgXCJzZWxlY3RPdGhlck1vbnRoc1wiKTtcclxuXHRcdGRlZmF1bHREYXRlID0gdGhpcy5fZ2V0RGVmYXVsdERhdGUoaW5zdCk7XHJcblx0XHRodG1sID0gXCJcIjtcclxuXHRcdGRvdztcclxuXHRcdGZvciAocm93ID0gMDsgcm93IDwgbnVtTW9udGhzWzBdOyByb3crKykge1xyXG5cdFx0XHRncm91cCA9IFwiXCI7XHJcblx0XHRcdHRoaXMubWF4Um93cyA9IDQ7XHJcblx0XHRcdGZvciAoY29sID0gMDsgY29sIDwgbnVtTW9udGhzWzFdOyBjb2wrKykge1xyXG5cdFx0XHRcdHNlbGVjdGVkRGF0ZSA9IHRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KG5ldyBEYXRlKGRyYXdZZWFyLCBkcmF3TW9udGgsIGluc3Quc2VsZWN0ZWREYXkpKTtcclxuXHRcdFx0XHRjb3JuZXJDbGFzcyA9IFwiIHVpLWNvcm5lci1hbGxcIjtcclxuXHRcdFx0XHRjYWxlbmRlciA9IFwiXCI7XHJcblx0XHRcdFx0aWYgKGlzTXVsdGlNb250aCkge1xyXG5cdFx0XHRcdFx0Y2FsZW5kZXIgKz0gXCI8ZGl2IGNsYXNzPSd1aS1kYXRlcGlja2VyLWdyb3VwXCI7XHJcblx0XHRcdFx0XHRpZiAobnVtTW9udGhzWzFdID4gMSkge1xyXG5cdFx0XHRcdFx0XHRzd2l0Y2ggKGNvbCkge1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgMDogY2FsZW5kZXIgKz0gXCIgdWktZGF0ZXBpY2tlci1ncm91cC1maXJzdFwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29ybmVyQ2xhc3MgPSBcIiB1aS1jb3JuZXItXCIgKyAoaXNSVEwgPyBcInJpZ2h0XCIgOiBcImxlZnRcIik7IGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgbnVtTW9udGhzWzFdLTE6IGNhbGVuZGVyICs9IFwiIHVpLWRhdGVwaWNrZXItZ3JvdXAtbGFzdFwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29ybmVyQ2xhc3MgPSBcIiB1aS1jb3JuZXItXCIgKyAoaXNSVEwgPyBcImxlZnRcIiA6IFwicmlnaHRcIik7IGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6IGNhbGVuZGVyICs9IFwiIHVpLWRhdGVwaWNrZXItZ3JvdXAtbWlkZGxlXCI7IGNvcm5lckNsYXNzID0gXCJcIjsgYnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNhbGVuZGVyICs9IFwiJz5cIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FsZW5kZXIgKz0gXCI8ZGl2IGNsYXNzPSd1aS1kYXRlcGlja2VyLWhlYWRlciB1aS13aWRnZXQtaGVhZGVyIHVpLWhlbHBlci1jbGVhcmZpeFwiICsgY29ybmVyQ2xhc3MgKyBcIic+XCIgK1xyXG5cdFx0XHRcdFx0KC9hbGx8bGVmdC8udGVzdChjb3JuZXJDbGFzcykgJiYgcm93ID09PSAwID8gKGlzUlRMID8gbmV4dCA6IHByZXYpIDogXCJcIikgK1xyXG5cdFx0XHRcdFx0KC9hbGx8cmlnaHQvLnRlc3QoY29ybmVyQ2xhc3MpICYmIHJvdyA9PT0gMCA/IChpc1JUTCA/IHByZXYgOiBuZXh0KSA6IFwiXCIpICtcclxuXHRcdFx0XHRcdHRoaXMuX2dlbmVyYXRlTW9udGhZZWFySGVhZGVyKGluc3QsIGRyYXdNb250aCwgZHJhd1llYXIsIG1pbkRhdGUsIG1heERhdGUsXHJcblx0XHRcdFx0XHRyb3cgPiAwIHx8IGNvbCA+IDAsIG1vbnRoTmFtZXMsIG1vbnRoTmFtZXNTaG9ydCkgKyAvLyBkcmF3IG1vbnRoIGhlYWRlcnNcclxuXHRcdFx0XHRcdFwiPC9kaXY+PHRhYmxlIGNsYXNzPSd1aS1kYXRlcGlja2VyLWNhbGVuZGFyJz48dGhlYWQ+XCIgK1xyXG5cdFx0XHRcdFx0XCI8dHI+XCI7XHJcblx0XHRcdFx0dGhlYWQgPSAoc2hvd1dlZWsgPyBcIjx0aCBjbGFzcz0ndWktZGF0ZXBpY2tlci13ZWVrLWNvbCc+XCIgKyB0aGlzLl9nZXQoaW5zdCwgXCJ3ZWVrSGVhZGVyXCIpICsgXCI8L3RoPlwiIDogXCJcIik7XHJcblx0XHRcdFx0Zm9yIChkb3cgPSAwOyBkb3cgPCA3OyBkb3crKykgeyAvLyBkYXlzIG9mIHRoZSB3ZWVrXHJcblx0XHRcdFx0XHRkYXkgPSAoZG93ICsgZmlyc3REYXkpICUgNztcclxuXHRcdFx0XHRcdHRoZWFkICs9IFwiPHRoXCIgKyAoKGRvdyArIGZpcnN0RGF5ICsgNikgJSA3ID49IDUgPyBcIiBjbGFzcz0ndWktZGF0ZXBpY2tlci13ZWVrLWVuZCdcIiA6IFwiXCIpICsgXCI+XCIgK1xyXG5cdFx0XHRcdFx0XHRcIjxzcGFuIHRpdGxlPSdcIiArIGRheU5hbWVzW2RheV0gKyBcIic+XCIgKyBkYXlOYW1lc01pbltkYXldICsgXCI8L3NwYW4+PC90aD5cIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FsZW5kZXIgKz0gdGhlYWQgKyBcIjwvdHI+PC90aGVhZD48dGJvZHk+XCI7XHJcblx0XHRcdFx0ZGF5c0luTW9udGggPSB0aGlzLl9nZXREYXlzSW5Nb250aChkcmF3WWVhciwgZHJhd01vbnRoKTtcclxuXHRcdFx0XHRpZiAoZHJhd1llYXIgPT09IGluc3Quc2VsZWN0ZWRZZWFyICYmIGRyYXdNb250aCA9PT0gaW5zdC5zZWxlY3RlZE1vbnRoKSB7XHJcblx0XHRcdFx0XHRpbnN0LnNlbGVjdGVkRGF5ID0gTWF0aC5taW4oaW5zdC5zZWxlY3RlZERheSwgZGF5c0luTW9udGgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZWFkRGF5cyA9ICh0aGlzLl9nZXRGaXJzdERheU9mTW9udGgoZHJhd1llYXIsIGRyYXdNb250aCkgLSBmaXJzdERheSArIDcpICUgNztcclxuXHRcdFx0XHRjdXJSb3dzID0gTWF0aC5jZWlsKChsZWFkRGF5cyArIGRheXNJbk1vbnRoKSAvIDcpOyAvLyBjYWxjdWxhdGUgdGhlIG51bWJlciBvZiByb3dzIHRvIGdlbmVyYXRlXHJcblx0XHRcdFx0bnVtUm93cyA9IChpc011bHRpTW9udGggPyB0aGlzLm1heFJvd3MgPiBjdXJSb3dzID8gdGhpcy5tYXhSb3dzIDogY3VyUm93cyA6IGN1clJvd3MpOyAvL0lmIG11bHRpcGxlIG1vbnRocywgdXNlIHRoZSBoaWdoZXIgbnVtYmVyIG9mIHJvd3MgKHNlZSAjNzA0MylcclxuXHRcdFx0XHR0aGlzLm1heFJvd3MgPSBudW1Sb3dzO1xyXG5cdFx0XHRcdHByaW50RGF0ZSA9IHRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KG5ldyBEYXRlKGRyYXdZZWFyLCBkcmF3TW9udGgsIDEgLSBsZWFkRGF5cykpO1xyXG5cdFx0XHRcdGZvciAoZFJvdyA9IDA7IGRSb3cgPCBudW1Sb3dzOyBkUm93KyspIHsgLy8gY3JlYXRlIGRhdGUgcGlja2VyIHJvd3NcclxuXHRcdFx0XHRcdGNhbGVuZGVyICs9IFwiPHRyPlwiO1xyXG5cdFx0XHRcdFx0dGJvZHkgPSAoIXNob3dXZWVrID8gXCJcIiA6IFwiPHRkIGNsYXNzPSd1aS1kYXRlcGlja2VyLXdlZWstY29sJz5cIiArXHJcblx0XHRcdFx0XHRcdHRoaXMuX2dldChpbnN0LCBcImNhbGN1bGF0ZVdlZWtcIikocHJpbnREYXRlKSArIFwiPC90ZD5cIik7XHJcblx0XHRcdFx0XHRmb3IgKGRvdyA9IDA7IGRvdyA8IDc7IGRvdysrKSB7IC8vIGNyZWF0ZSBkYXRlIHBpY2tlciBkYXlzXHJcblx0XHRcdFx0XHRcdGRheVNldHRpbmdzID0gKGJlZm9yZVNob3dEYXkgP1xyXG5cdFx0XHRcdFx0XHRcdGJlZm9yZVNob3dEYXkuYXBwbHkoKGluc3QuaW5wdXQgPyBpbnN0LmlucHV0WzBdIDogbnVsbCksIFtwcmludERhdGVdKSA6IFt0cnVlLCBcIlwiXSk7XHJcblx0XHRcdFx0XHRcdG90aGVyTW9udGggPSAocHJpbnREYXRlLmdldE1vbnRoKCkgIT09IGRyYXdNb250aCk7XHJcblx0XHRcdFx0XHRcdHVuc2VsZWN0YWJsZSA9IChvdGhlck1vbnRoICYmICFzZWxlY3RPdGhlck1vbnRocykgfHwgIWRheVNldHRpbmdzWzBdIHx8XHJcblx0XHRcdFx0XHRcdFx0KG1pbkRhdGUgJiYgcHJpbnREYXRlIDwgbWluRGF0ZSkgfHwgKG1heERhdGUgJiYgcHJpbnREYXRlID4gbWF4RGF0ZSk7XHJcblx0XHRcdFx0XHRcdHRib2R5ICs9IFwiPHRkIGNsYXNzPSdcIiArXHJcblx0XHRcdFx0XHRcdFx0KChkb3cgKyBmaXJzdERheSArIDYpICUgNyA+PSA1ID8gXCIgdWktZGF0ZXBpY2tlci13ZWVrLWVuZFwiIDogXCJcIikgKyAvLyBoaWdobGlnaHQgd2Vla2VuZHNcclxuXHRcdFx0XHRcdFx0XHQob3RoZXJNb250aCA/IFwiIHVpLWRhdGVwaWNrZXItb3RoZXItbW9udGhcIiA6IFwiXCIpICsgLy8gaGlnaGxpZ2h0IGRheXMgZnJvbSBvdGhlciBtb250aHNcclxuXHRcdFx0XHRcdFx0XHQoKHByaW50RGF0ZS5nZXRUaW1lKCkgPT09IHNlbGVjdGVkRGF0ZS5nZXRUaW1lKCkgJiYgZHJhd01vbnRoID09PSBpbnN0LnNlbGVjdGVkTW9udGggJiYgaW5zdC5fa2V5RXZlbnQpIHx8IC8vIHVzZXIgcHJlc3NlZCBrZXlcclxuXHRcdFx0XHRcdFx0XHQoZGVmYXVsdERhdGUuZ2V0VGltZSgpID09PSBwcmludERhdGUuZ2V0VGltZSgpICYmIGRlZmF1bHREYXRlLmdldFRpbWUoKSA9PT0gc2VsZWN0ZWREYXRlLmdldFRpbWUoKSkgP1xyXG5cdFx0XHRcdFx0XHRcdC8vIG9yIGRlZmF1bHREYXRlIGlzIGN1cnJlbnQgcHJpbnRlZERhdGUgYW5kIGRlZmF1bHREYXRlIGlzIHNlbGVjdGVkRGF0ZVxyXG5cdFx0XHRcdFx0XHRcdFwiIFwiICsgdGhpcy5fZGF5T3ZlckNsYXNzIDogXCJcIikgKyAvLyBoaWdobGlnaHQgc2VsZWN0ZWQgZGF5XHJcblx0XHRcdFx0XHRcdFx0KHVuc2VsZWN0YWJsZSA/IFwiIFwiICsgdGhpcy5fdW5zZWxlY3RhYmxlQ2xhc3MgKyBcIiB1aS1zdGF0ZS1kaXNhYmxlZFwiOiBcIlwiKSArICAvLyBoaWdobGlnaHQgdW5zZWxlY3RhYmxlIGRheXNcclxuXHRcdFx0XHRcdFx0XHQob3RoZXJNb250aCAmJiAhc2hvd090aGVyTW9udGhzID8gXCJcIiA6IFwiIFwiICsgZGF5U2V0dGluZ3NbMV0gKyAvLyBoaWdobGlnaHQgY3VzdG9tIGRhdGVzXHJcblx0XHRcdFx0XHRcdFx0KHByaW50RGF0ZS5nZXRUaW1lKCkgPT09IGN1cnJlbnREYXRlLmdldFRpbWUoKSA/IFwiIFwiICsgdGhpcy5fY3VycmVudENsYXNzIDogXCJcIikgKyAvLyBoaWdobGlnaHQgc2VsZWN0ZWQgZGF5XHJcblx0XHRcdFx0XHRcdFx0KHByaW50RGF0ZS5nZXRUaW1lKCkgPT09IHRvZGF5LmdldFRpbWUoKSA/IFwiIHVpLWRhdGVwaWNrZXItdG9kYXlcIiA6IFwiXCIpKSArIFwiJ1wiICsgLy8gaGlnaGxpZ2h0IHRvZGF5IChpZiBkaWZmZXJlbnQpXHJcblx0XHRcdFx0XHRcdFx0KCghb3RoZXJNb250aCB8fCBzaG93T3RoZXJNb250aHMpICYmIGRheVNldHRpbmdzWzJdID8gXCIgdGl0bGU9J1wiICsgZGF5U2V0dGluZ3NbMl0ucmVwbGFjZSgvJy9nLCBcIiYjMzk7XCIpICsgXCInXCIgOiBcIlwiKSArIC8vIGNlbGwgdGl0bGVcclxuXHRcdFx0XHRcdFx0XHQodW5zZWxlY3RhYmxlID8gXCJcIiA6IFwiIGRhdGEtaGFuZGxlcj0nc2VsZWN0RGF5JyBkYXRhLWV2ZW50PSdjbGljaycgZGF0YS1tb250aD0nXCIgKyBwcmludERhdGUuZ2V0TW9udGgoKSArIFwiJyBkYXRhLXllYXI9J1wiICsgcHJpbnREYXRlLmdldEZ1bGxZZWFyKCkgKyBcIidcIikgKyBcIj5cIiArIC8vIGFjdGlvbnNcclxuXHRcdFx0XHRcdFx0XHQob3RoZXJNb250aCAmJiAhc2hvd090aGVyTW9udGhzID8gXCImI3hhMDtcIiA6IC8vIGRpc3BsYXkgZm9yIG90aGVyIG1vbnRoc1xyXG5cdFx0XHRcdFx0XHRcdCh1bnNlbGVjdGFibGUgPyBcIjxzcGFuIGNsYXNzPSd1aS1zdGF0ZS1kZWZhdWx0Jz5cIiArIHByaW50RGF0ZS5nZXREYXRlKCkgKyBcIjwvc3Bhbj5cIiA6IFwiPGEgY2xhc3M9J3VpLXN0YXRlLWRlZmF1bHRcIiArXHJcblx0XHRcdFx0XHRcdFx0KHByaW50RGF0ZS5nZXRUaW1lKCkgPT09IHRvZGF5LmdldFRpbWUoKSA/IFwiIHVpLXN0YXRlLWhpZ2hsaWdodFwiIDogXCJcIikgK1xyXG5cdFx0XHRcdFx0XHRcdChwcmludERhdGUuZ2V0VGltZSgpID09PSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkgPyBcIiB1aS1zdGF0ZS1hY3RpdmVcIiA6IFwiXCIpICsgLy8gaGlnaGxpZ2h0IHNlbGVjdGVkIGRheVxyXG5cdFx0XHRcdFx0XHRcdChvdGhlck1vbnRoID8gXCIgdWktcHJpb3JpdHktc2Vjb25kYXJ5XCIgOiBcIlwiKSArIC8vIGRpc3Rpbmd1aXNoIGRhdGVzIGZyb20gb3RoZXIgbW9udGhzXHJcblx0XHRcdFx0XHRcdFx0XCInIGhyZWY9JyMnPlwiICsgcHJpbnREYXRlLmdldERhdGUoKSArIFwiPC9hPlwiKSkgKyBcIjwvdGQ+XCI7IC8vIGRpc3BsYXkgc2VsZWN0YWJsZSBkYXRlXHJcblx0XHRcdFx0XHRcdHByaW50RGF0ZS5zZXREYXRlKHByaW50RGF0ZS5nZXREYXRlKCkgKyAxKTtcclxuXHRcdFx0XHRcdFx0cHJpbnREYXRlID0gdGhpcy5fZGF5bGlnaHRTYXZpbmdBZGp1c3QocHJpbnREYXRlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNhbGVuZGVyICs9IHRib2R5ICsgXCI8L3RyPlwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRkcmF3TW9udGgrKztcclxuXHRcdFx0XHRpZiAoZHJhd01vbnRoID4gMTEpIHtcclxuXHRcdFx0XHRcdGRyYXdNb250aCA9IDA7XHJcblx0XHRcdFx0XHRkcmF3WWVhcisrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYWxlbmRlciArPSBcIjwvdGJvZHk+PC90YWJsZT5cIiArIChpc011bHRpTW9udGggPyBcIjwvZGl2PlwiICtcclxuXHRcdFx0XHRcdFx0XHQoKG51bU1vbnRoc1swXSA+IDAgJiYgY29sID09PSBudW1Nb250aHNbMV0tMSkgPyBcIjxkaXYgY2xhc3M9J3VpLWRhdGVwaWNrZXItcm93LWJyZWFrJz48L2Rpdj5cIiA6IFwiXCIpIDogXCJcIik7XHJcblx0XHRcdFx0Z3JvdXAgKz0gY2FsZW5kZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0aHRtbCArPSBncm91cDtcclxuXHRcdH1cclxuXHRcdGh0bWwgKz0gYnV0dG9uUGFuZWw7XHJcblx0XHRpbnN0Ll9rZXlFdmVudCA9IGZhbHNlO1xyXG5cdFx0cmV0dXJuIGh0bWw7XHJcblx0fSxcclxuXHJcblx0LyogR2VuZXJhdGUgdGhlIG1vbnRoIGFuZCB5ZWFyIGhlYWRlci4gKi9cclxuXHRfZ2VuZXJhdGVNb250aFllYXJIZWFkZXI6IGZ1bmN0aW9uKGluc3QsIGRyYXdNb250aCwgZHJhd1llYXIsIG1pbkRhdGUsIG1heERhdGUsXHJcblx0XHRcdHNlY29uZGFyeSwgbW9udGhOYW1lcywgbW9udGhOYW1lc1Nob3J0KSB7XHJcblxyXG5cdFx0dmFyIGluTWluWWVhciwgaW5NYXhZZWFyLCBtb250aCwgeWVhcnMsIHRoaXNZZWFyLCBkZXRlcm1pbmVZZWFyLCB5ZWFyLCBlbmRZZWFyLFxyXG5cdFx0XHRjaGFuZ2VNb250aCA9IHRoaXMuX2dldChpbnN0LCBcImNoYW5nZU1vbnRoXCIpLFxyXG5cdFx0XHRjaGFuZ2VZZWFyID0gdGhpcy5fZ2V0KGluc3QsIFwiY2hhbmdlWWVhclwiKSxcclxuXHRcdFx0c2hvd01vbnRoQWZ0ZXJZZWFyID0gdGhpcy5fZ2V0KGluc3QsIFwic2hvd01vbnRoQWZ0ZXJZZWFyXCIpLFxyXG5cdFx0XHRodG1sID0gXCI8ZGl2IGNsYXNzPSd1aS1kYXRlcGlja2VyLXRpdGxlJz5cIixcclxuXHRcdFx0bW9udGhIdG1sID0gXCJcIjtcclxuXHJcblx0XHQvLyBtb250aCBzZWxlY3Rpb25cclxuXHRcdGlmIChzZWNvbmRhcnkgfHwgIWNoYW5nZU1vbnRoKSB7XHJcblx0XHRcdG1vbnRoSHRtbCArPSBcIjxzcGFuIGNsYXNzPSd1aS1kYXRlcGlja2VyLW1vbnRoJz5cIiArIG1vbnRoTmFtZXNbZHJhd01vbnRoXSArIFwiPC9zcGFuPlwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aW5NaW5ZZWFyID0gKG1pbkRhdGUgJiYgbWluRGF0ZS5nZXRGdWxsWWVhcigpID09PSBkcmF3WWVhcik7XHJcblx0XHRcdGluTWF4WWVhciA9IChtYXhEYXRlICYmIG1heERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gZHJhd1llYXIpO1xyXG5cdFx0XHRtb250aEh0bWwgKz0gXCI8c2VsZWN0IGNsYXNzPSd1aS1kYXRlcGlja2VyLW1vbnRoJyBkYXRhLWhhbmRsZXI9J3NlbGVjdE1vbnRoJyBkYXRhLWV2ZW50PSdjaGFuZ2UnPlwiO1xyXG5cdFx0XHRmb3IgKCBtb250aCA9IDA7IG1vbnRoIDwgMTI7IG1vbnRoKyspIHtcclxuXHRcdFx0XHRpZiAoKCFpbk1pblllYXIgfHwgbW9udGggPj0gbWluRGF0ZS5nZXRNb250aCgpKSAmJiAoIWluTWF4WWVhciB8fCBtb250aCA8PSBtYXhEYXRlLmdldE1vbnRoKCkpKSB7XHJcblx0XHRcdFx0XHRtb250aEh0bWwgKz0gXCI8b3B0aW9uIHZhbHVlPSdcIiArIG1vbnRoICsgXCInXCIgK1xyXG5cdFx0XHRcdFx0XHQobW9udGggPT09IGRyYXdNb250aCA/IFwiIHNlbGVjdGVkPSdzZWxlY3RlZCdcIiA6IFwiXCIpICtcclxuXHRcdFx0XHRcdFx0XCI+XCIgKyBtb250aE5hbWVzU2hvcnRbbW9udGhdICsgXCI8L29wdGlvbj5cIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0bW9udGhIdG1sICs9IFwiPC9zZWxlY3Q+XCI7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCFzaG93TW9udGhBZnRlclllYXIpIHtcclxuXHRcdFx0aHRtbCArPSBtb250aEh0bWwgKyAoc2Vjb25kYXJ5IHx8ICEoY2hhbmdlTW9udGggJiYgY2hhbmdlWWVhcikgPyBcIiYjeGEwO1wiIDogXCJcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8geWVhciBzZWxlY3Rpb25cclxuXHRcdGlmICggIWluc3QueWVhcnNodG1sICkge1xyXG5cdFx0XHRpbnN0LnllYXJzaHRtbCA9IFwiXCI7XHJcblx0XHRcdGlmIChzZWNvbmRhcnkgfHwgIWNoYW5nZVllYXIpIHtcclxuXHRcdFx0XHRodG1sICs9IFwiPHNwYW4gY2xhc3M9J3VpLWRhdGVwaWNrZXIteWVhcic+XCIgKyBkcmF3WWVhciArIFwiPC9zcGFuPlwiO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIGRldGVybWluZSByYW5nZSBvZiB5ZWFycyB0byBkaXNwbGF5XHJcblx0XHRcdFx0eWVhcnMgPSB0aGlzLl9nZXQoaW5zdCwgXCJ5ZWFyUmFuZ2VcIikuc3BsaXQoXCI6XCIpO1xyXG5cdFx0XHRcdHRoaXNZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG5cdFx0XHRcdGRldGVybWluZVllYXIgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0XHRcdFx0dmFyIHllYXIgPSAodmFsdWUubWF0Y2goL2NbK1xcLV0uKi8pID8gZHJhd1llYXIgKyBwYXJzZUludCh2YWx1ZS5zdWJzdHJpbmcoMSksIDEwKSA6XHJcblx0XHRcdFx0XHRcdCh2YWx1ZS5tYXRjaCgvWytcXC1dLiovKSA/IHRoaXNZZWFyICsgcGFyc2VJbnQodmFsdWUsIDEwKSA6XHJcblx0XHRcdFx0XHRcdHBhcnNlSW50KHZhbHVlLCAxMCkpKTtcclxuXHRcdFx0XHRcdHJldHVybiAoaXNOYU4oeWVhcikgPyB0aGlzWWVhciA6IHllYXIpO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0eWVhciA9IGRldGVybWluZVllYXIoeWVhcnNbMF0pO1xyXG5cdFx0XHRcdGVuZFllYXIgPSBNYXRoLm1heCh5ZWFyLCBkZXRlcm1pbmVZZWFyKHllYXJzWzFdIHx8IFwiXCIpKTtcclxuXHRcdFx0XHR5ZWFyID0gKG1pbkRhdGUgPyBNYXRoLm1heCh5ZWFyLCBtaW5EYXRlLmdldEZ1bGxZZWFyKCkpIDogeWVhcik7XHJcblx0XHRcdFx0ZW5kWWVhciA9IChtYXhEYXRlID8gTWF0aC5taW4oZW5kWWVhciwgbWF4RGF0ZS5nZXRGdWxsWWVhcigpKSA6IGVuZFllYXIpO1xyXG5cdFx0XHRcdGluc3QueWVhcnNodG1sICs9IFwiPHNlbGVjdCBjbGFzcz0ndWktZGF0ZXBpY2tlci15ZWFyJyBkYXRhLWhhbmRsZXI9J3NlbGVjdFllYXInIGRhdGEtZXZlbnQ9J2NoYW5nZSc+XCI7XHJcblx0XHRcdFx0Zm9yICg7IHllYXIgPD0gZW5kWWVhcjsgeWVhcisrKSB7XHJcblx0XHRcdFx0XHRpbnN0LnllYXJzaHRtbCArPSBcIjxvcHRpb24gdmFsdWU9J1wiICsgeWVhciArIFwiJ1wiICtcclxuXHRcdFx0XHRcdFx0KHllYXIgPT09IGRyYXdZZWFyID8gXCIgc2VsZWN0ZWQ9J3NlbGVjdGVkJ1wiIDogXCJcIikgK1xyXG5cdFx0XHRcdFx0XHRcIj5cIiArIHllYXIgKyBcIjwvb3B0aW9uPlwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpbnN0LnllYXJzaHRtbCArPSBcIjwvc2VsZWN0PlwiO1xyXG5cclxuXHRcdFx0XHRodG1sICs9IGluc3QueWVhcnNodG1sO1xyXG5cdFx0XHRcdGluc3QueWVhcnNodG1sID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGh0bWwgKz0gdGhpcy5fZ2V0KGluc3QsIFwieWVhclN1ZmZpeFwiKTtcclxuXHRcdGlmIChzaG93TW9udGhBZnRlclllYXIpIHtcclxuXHRcdFx0aHRtbCArPSAoc2Vjb25kYXJ5IHx8ICEoY2hhbmdlTW9udGggJiYgY2hhbmdlWWVhcikgPyBcIiYjeGEwO1wiIDogXCJcIikgKyBtb250aEh0bWw7XHJcblx0XHR9XHJcblx0XHRodG1sICs9IFwiPC9kaXY+XCI7IC8vIENsb3NlIGRhdGVwaWNrZXJfaGVhZGVyXHJcblx0XHRyZXR1cm4gaHRtbDtcclxuXHR9LFxyXG5cclxuXHQvKiBBZGp1c3Qgb25lIG9mIHRoZSBkYXRlIHN1Yi1maWVsZHMuICovXHJcblx0X2FkanVzdEluc3REYXRlOiBmdW5jdGlvbihpbnN0LCBvZmZzZXQsIHBlcmlvZCkge1xyXG5cdFx0dmFyIHllYXIgPSBpbnN0LmRyYXdZZWFyICsgKHBlcmlvZCA9PT0gXCJZXCIgPyBvZmZzZXQgOiAwKSxcclxuXHRcdFx0bW9udGggPSBpbnN0LmRyYXdNb250aCArIChwZXJpb2QgPT09IFwiTVwiID8gb2Zmc2V0IDogMCksXHJcblx0XHRcdGRheSA9IE1hdGgubWluKGluc3Quc2VsZWN0ZWREYXksIHRoaXMuX2dldERheXNJbk1vbnRoKHllYXIsIG1vbnRoKSkgKyAocGVyaW9kID09PSBcIkRcIiA/IG9mZnNldCA6IDApLFxyXG5cdFx0XHRkYXRlID0gdGhpcy5fcmVzdHJpY3RNaW5NYXgoaW5zdCwgdGhpcy5fZGF5bGlnaHRTYXZpbmdBZGp1c3QobmV3IERhdGUoeWVhciwgbW9udGgsIGRheSkpKTtcclxuXHJcblx0XHRpbnN0LnNlbGVjdGVkRGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcblx0XHRpbnN0LmRyYXdNb250aCA9IGluc3Quc2VsZWN0ZWRNb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuXHRcdGluc3QuZHJhd1llYXIgPSBpbnN0LnNlbGVjdGVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHRcdGlmIChwZXJpb2QgPT09IFwiTVwiIHx8IHBlcmlvZCA9PT0gXCJZXCIpIHtcclxuXHRcdFx0dGhpcy5fbm90aWZ5Q2hhbmdlKGluc3QpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8qIEVuc3VyZSBhIGRhdGUgaXMgd2l0aGluIGFueSBtaW4vbWF4IGJvdW5kcy4gKi9cclxuXHRfcmVzdHJpY3RNaW5NYXg6IGZ1bmN0aW9uKGluc3QsIGRhdGUpIHtcclxuXHRcdHZhciBtaW5EYXRlID0gdGhpcy5fZ2V0TWluTWF4RGF0ZShpbnN0LCBcIm1pblwiKSxcclxuXHRcdFx0bWF4RGF0ZSA9IHRoaXMuX2dldE1pbk1heERhdGUoaW5zdCwgXCJtYXhcIiksXHJcblx0XHRcdG5ld0RhdGUgPSAobWluRGF0ZSAmJiBkYXRlIDwgbWluRGF0ZSA/IG1pbkRhdGUgOiBkYXRlKTtcclxuXHRcdHJldHVybiAobWF4RGF0ZSAmJiBuZXdEYXRlID4gbWF4RGF0ZSA/IG1heERhdGUgOiBuZXdEYXRlKTtcclxuXHR9LFxyXG5cclxuXHQvKiBOb3RpZnkgY2hhbmdlIG9mIG1vbnRoL3llYXIuICovXHJcblx0X25vdGlmeUNoYW5nZTogZnVuY3Rpb24oaW5zdCkge1xyXG5cdFx0dmFyIG9uQ2hhbmdlID0gdGhpcy5fZ2V0KGluc3QsIFwib25DaGFuZ2VNb250aFllYXJcIik7XHJcblx0XHRpZiAob25DaGFuZ2UpIHtcclxuXHRcdFx0b25DaGFuZ2UuYXBwbHkoKGluc3QuaW5wdXQgPyBpbnN0LmlucHV0WzBdIDogbnVsbCksXHJcblx0XHRcdFx0W2luc3Quc2VsZWN0ZWRZZWFyLCBpbnN0LnNlbGVjdGVkTW9udGggKyAxLCBpbnN0XSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyogRGV0ZXJtaW5lIHRoZSBudW1iZXIgb2YgbW9udGhzIHRvIHNob3cuICovXHJcblx0X2dldE51bWJlck9mTW9udGhzOiBmdW5jdGlvbihpbnN0KSB7XHJcblx0XHR2YXIgbnVtTW9udGhzID0gdGhpcy5fZ2V0KGluc3QsIFwibnVtYmVyT2ZNb250aHNcIik7XHJcblx0XHRyZXR1cm4gKG51bU1vbnRocyA9PSBudWxsID8gWzEsIDFdIDogKHR5cGVvZiBudW1Nb250aHMgPT09IFwibnVtYmVyXCIgPyBbMSwgbnVtTW9udGhzXSA6IG51bU1vbnRocykpO1xyXG5cdH0sXHJcblxyXG5cdC8qIERldGVybWluZSB0aGUgY3VycmVudCBtYXhpbXVtIGRhdGUgLSBlbnN1cmUgbm8gdGltZSBjb21wb25lbnRzIGFyZSBzZXQuICovXHJcblx0X2dldE1pbk1heERhdGU6IGZ1bmN0aW9uKGluc3QsIG1pbk1heCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RldGVybWluZURhdGUoaW5zdCwgdGhpcy5fZ2V0KGluc3QsIG1pbk1heCArIFwiRGF0ZVwiKSwgbnVsbCk7XHJcblx0fSxcclxuXHJcblx0LyogRmluZCB0aGUgbnVtYmVyIG9mIGRheXMgaW4gYSBnaXZlbiBtb250aC4gKi9cclxuXHRfZ2V0RGF5c0luTW9udGg6IGZ1bmN0aW9uKHllYXIsIG1vbnRoKSB7XHJcblx0XHRyZXR1cm4gMzIgLSB0aGlzLl9kYXlsaWdodFNhdmluZ0FkanVzdChuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMzIpKS5nZXREYXRlKCk7XHJcblx0fSxcclxuXHJcblx0LyogRmluZCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBmaXJzdCBvZiBhIG1vbnRoLiAqL1xyXG5cdF9nZXRGaXJzdERheU9mTW9udGg6IGZ1bmN0aW9uKHllYXIsIG1vbnRoKSB7XHJcblx0XHRyZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpLmdldERheSgpO1xyXG5cdH0sXHJcblxyXG5cdC8qIERldGVybWluZXMgaWYgd2Ugc2hvdWxkIGFsbG93IGEgXCJuZXh0L3ByZXZcIiBtb250aCBkaXNwbGF5IGNoYW5nZS4gKi9cclxuXHRfY2FuQWRqdXN0TW9udGg6IGZ1bmN0aW9uKGluc3QsIG9mZnNldCwgY3VyWWVhciwgY3VyTW9udGgpIHtcclxuXHRcdHZhciBudW1Nb250aHMgPSB0aGlzLl9nZXROdW1iZXJPZk1vbnRocyhpbnN0KSxcclxuXHRcdFx0ZGF0ZSA9IHRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KG5ldyBEYXRlKGN1clllYXIsXHJcblx0XHRcdGN1ck1vbnRoICsgKG9mZnNldCA8IDAgPyBvZmZzZXQgOiBudW1Nb250aHNbMF0gKiBudW1Nb250aHNbMV0pLCAxKSk7XHJcblxyXG5cdFx0aWYgKG9mZnNldCA8IDApIHtcclxuXHRcdFx0ZGF0ZS5zZXREYXRlKHRoaXMuX2dldERheXNJbk1vbnRoKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpKSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5faXNJblJhbmdlKGluc3QsIGRhdGUpO1xyXG5cdH0sXHJcblxyXG5cdC8qIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBhY2NlcHRlZCByYW5nZT8gKi9cclxuXHRfaXNJblJhbmdlOiBmdW5jdGlvbihpbnN0LCBkYXRlKSB7XHJcblx0XHR2YXIgeWVhclNwbGl0LCBjdXJyZW50WWVhcixcclxuXHRcdFx0bWluRGF0ZSA9IHRoaXMuX2dldE1pbk1heERhdGUoaW5zdCwgXCJtaW5cIiksXHJcblx0XHRcdG1heERhdGUgPSB0aGlzLl9nZXRNaW5NYXhEYXRlKGluc3QsIFwibWF4XCIpLFxyXG5cdFx0XHRtaW5ZZWFyID0gbnVsbCxcclxuXHRcdFx0bWF4WWVhciA9IG51bGwsXHJcblx0XHRcdHllYXJzID0gdGhpcy5fZ2V0KGluc3QsIFwieWVhclJhbmdlXCIpO1xyXG5cdFx0XHRpZiAoeWVhcnMpe1xyXG5cdFx0XHRcdHllYXJTcGxpdCA9IHllYXJzLnNwbGl0KFwiOlwiKTtcclxuXHRcdFx0XHRjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHRcdFx0XHRtaW5ZZWFyID0gcGFyc2VJbnQoeWVhclNwbGl0WzBdLCAxMCk7XHJcblx0XHRcdFx0bWF4WWVhciA9IHBhcnNlSW50KHllYXJTcGxpdFsxXSwgMTApO1xyXG5cdFx0XHRcdGlmICggeWVhclNwbGl0WzBdLm1hdGNoKC9bK1xcLV0uKi8pICkge1xyXG5cdFx0XHRcdFx0bWluWWVhciArPSBjdXJyZW50WWVhcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCB5ZWFyU3BsaXRbMV0ubWF0Y2goL1srXFwtXS4qLykgKSB7XHJcblx0XHRcdFx0XHRtYXhZZWFyICs9IGN1cnJlbnRZZWFyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdHJldHVybiAoKCFtaW5EYXRlIHx8IGRhdGUuZ2V0VGltZSgpID49IG1pbkRhdGUuZ2V0VGltZSgpKSAmJlxyXG5cdFx0XHQoIW1heERhdGUgfHwgZGF0ZS5nZXRUaW1lKCkgPD0gbWF4RGF0ZS5nZXRUaW1lKCkpICYmXHJcblx0XHRcdCghbWluWWVhciB8fCBkYXRlLmdldEZ1bGxZZWFyKCkgPj0gbWluWWVhcikgJiZcclxuXHRcdFx0KCFtYXhZZWFyIHx8IGRhdGUuZ2V0RnVsbFllYXIoKSA8PSBtYXhZZWFyKSk7XHJcblx0fSxcclxuXHJcblx0LyogUHJvdmlkZSB0aGUgY29uZmlndXJhdGlvbiBzZXR0aW5ncyBmb3IgZm9ybWF0dGluZy9wYXJzaW5nLiAqL1xyXG5cdF9nZXRGb3JtYXRDb25maWc6IGZ1bmN0aW9uKGluc3QpIHtcclxuXHRcdHZhciBzaG9ydFllYXJDdXRvZmYgPSB0aGlzLl9nZXQoaW5zdCwgXCJzaG9ydFllYXJDdXRvZmZcIik7XHJcblx0XHRzaG9ydFllYXJDdXRvZmYgPSAodHlwZW9mIHNob3J0WWVhckN1dG9mZiAhPT0gXCJzdHJpbmdcIiA/IHNob3J0WWVhckN1dG9mZiA6XHJcblx0XHRcdG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAlIDEwMCArIHBhcnNlSW50KHNob3J0WWVhckN1dG9mZiwgMTApKTtcclxuXHRcdHJldHVybiB7c2hvcnRZZWFyQ3V0b2ZmOiBzaG9ydFllYXJDdXRvZmYsXHJcblx0XHRcdGRheU5hbWVzU2hvcnQ6IHRoaXMuX2dldChpbnN0LCBcImRheU5hbWVzU2hvcnRcIiksIGRheU5hbWVzOiB0aGlzLl9nZXQoaW5zdCwgXCJkYXlOYW1lc1wiKSxcclxuXHRcdFx0bW9udGhOYW1lc1Nob3J0OiB0aGlzLl9nZXQoaW5zdCwgXCJtb250aE5hbWVzU2hvcnRcIiksIG1vbnRoTmFtZXM6IHRoaXMuX2dldChpbnN0LCBcIm1vbnRoTmFtZXNcIil9O1xyXG5cdH0sXHJcblxyXG5cdC8qIEZvcm1hdCB0aGUgZ2l2ZW4gZGF0ZSBmb3IgZGlzcGxheS4gKi9cclxuXHRfZm9ybWF0RGF0ZTogZnVuY3Rpb24oaW5zdCwgZGF5LCBtb250aCwgeWVhcikge1xyXG5cdFx0aWYgKCFkYXkpIHtcclxuXHRcdFx0aW5zdC5jdXJyZW50RGF5ID0gaW5zdC5zZWxlY3RlZERheTtcclxuXHRcdFx0aW5zdC5jdXJyZW50TW9udGggPSBpbnN0LnNlbGVjdGVkTW9udGg7XHJcblx0XHRcdGluc3QuY3VycmVudFllYXIgPSBpbnN0LnNlbGVjdGVkWWVhcjtcclxuXHRcdH1cclxuXHRcdHZhciBkYXRlID0gKGRheSA/ICh0eXBlb2YgZGF5ID09PSBcIm9iamVjdFwiID8gZGF5IDpcclxuXHRcdFx0dGhpcy5fZGF5bGlnaHRTYXZpbmdBZGp1c3QobmV3IERhdGUoeWVhciwgbW9udGgsIGRheSkpKSA6XHJcblx0XHRcdHRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KG5ldyBEYXRlKGluc3QuY3VycmVudFllYXIsIGluc3QuY3VycmVudE1vbnRoLCBpbnN0LmN1cnJlbnREYXkpKSk7XHJcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXREYXRlKHRoaXMuX2dldChpbnN0LCBcImRhdGVGb3JtYXRcIiksIGRhdGUsIHRoaXMuX2dldEZvcm1hdENvbmZpZyhpbnN0KSk7XHJcblx0fVxyXG59KTtcclxuXHJcbi8qXHJcbiAqIEJpbmQgaG92ZXIgZXZlbnRzIGZvciBkYXRlcGlja2VyIGVsZW1lbnRzLlxyXG4gKiBEb25lIHZpYSBkZWxlZ2F0ZSBzbyB0aGUgYmluZGluZyBvbmx5IG9jY3VycyBvbmNlIGluIHRoZSBsaWZldGltZSBvZiB0aGUgcGFyZW50IGRpdi5cclxuICogR2xvYmFsIGluc3RBY3RpdmUsIHNldCBieSBfdXBkYXRlRGF0ZXBpY2tlciBhbGxvd3MgdGhlIGhhbmRsZXJzIHRvIGZpbmQgdGhlaXIgd2F5IGJhY2sgdG8gdGhlIGFjdGl2ZSBwaWNrZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBiaW5kSG92ZXIoZHBEaXYpIHtcclxuXHR2YXIgc2VsZWN0b3IgPSBcImJ1dHRvbiwgLnVpLWRhdGVwaWNrZXItcHJldiwgLnVpLWRhdGVwaWNrZXItbmV4dCwgLnVpLWRhdGVwaWNrZXItY2FsZW5kYXIgdGQgYVwiO1xyXG5cdHJldHVybiBkcERpdi5kZWxlZ2F0ZShzZWxlY3RvciwgXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcyhcInVpLXN0YXRlLWhvdmVyXCIpO1xyXG5cdFx0XHRpZiAodGhpcy5jbGFzc05hbWUuaW5kZXhPZihcInVpLWRhdGVwaWNrZXItcHJldlwiKSAhPT0gLTEpIHtcclxuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKFwidWktZGF0ZXBpY2tlci1wcmV2LWhvdmVyXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLmNsYXNzTmFtZS5pbmRleE9mKFwidWktZGF0ZXBpY2tlci1uZXh0XCIpICE9PSAtMSkge1xyXG5cdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoXCJ1aS1kYXRlcGlja2VyLW5leHQtaG92ZXJcIik7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XHQuZGVsZWdhdGUoc2VsZWN0b3IsIFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmICghJC5kYXRlcGlja2VyLl9pc0Rpc2FibGVkRGF0ZXBpY2tlciggaW5zdEFjdGl2ZS5pbmxpbmUgPyBkcERpdi5wYXJlbnQoKVswXSA6IGluc3RBY3RpdmUuaW5wdXRbMF0pKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnRzKFwiLnVpLWRhdGVwaWNrZXItY2FsZW5kYXJcIikuZmluZChcImFcIikucmVtb3ZlQ2xhc3MoXCJ1aS1zdGF0ZS1ob3ZlclwiKTtcclxuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKFwidWktc3RhdGUtaG92ZXJcIik7XHJcblx0XHRcdFx0aWYgKHRoaXMuY2xhc3NOYW1lLmluZGV4T2YoXCJ1aS1kYXRlcGlja2VyLXByZXZcIikgIT09IC0xKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKFwidWktZGF0ZXBpY2tlci1wcmV2LWhvdmVyXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodGhpcy5jbGFzc05hbWUuaW5kZXhPZihcInVpLWRhdGVwaWNrZXItbmV4dFwiKSAhPT0gLTEpIHtcclxuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoXCJ1aS1kYXRlcGlja2VyLW5leHQtaG92ZXJcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxufVxyXG5cclxuLyogalF1ZXJ5IGV4dGVuZCBub3cgaWdub3JlcyBudWxscyEgKi9cclxuZnVuY3Rpb24gZXh0ZW5kUmVtb3ZlKHRhcmdldCwgcHJvcHMpIHtcclxuXHQkLmV4dGVuZCh0YXJnZXQsIHByb3BzKTtcclxuXHRmb3IgKHZhciBuYW1lIGluIHByb3BzKSB7XHJcblx0XHRpZiAocHJvcHNbbmFtZV0gPT0gbnVsbCkge1xyXG5cdFx0XHR0YXJnZXRbbmFtZV0gPSBwcm9wc1tuYW1lXTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuLyogSW52b2tlIHRoZSBkYXRlcGlja2VyIGZ1bmN0aW9uYWxpdHkuXHJcbiAgIEBwYXJhbSAgb3B0aW9ucyAgc3RyaW5nIC0gYSBjb21tYW5kLCBvcHRpb25hbGx5IGZvbGxvd2VkIGJ5IGFkZGl0aW9uYWwgcGFyYW1ldGVycyBvclxyXG5cdFx0XHRcdFx0T2JqZWN0IC0gc2V0dGluZ3MgZm9yIGF0dGFjaGluZyBuZXcgZGF0ZXBpY2tlciBmdW5jdGlvbmFsaXR5XHJcbiAgIEByZXR1cm4gIGpRdWVyeSBvYmplY3QgKi9cclxuJC5mbi5kYXRlcGlja2VyID0gZnVuY3Rpb24ob3B0aW9ucyl7XHJcblxyXG5cdC8qIFZlcmlmeSBhbiBlbXB0eSBjb2xsZWN0aW9uIHdhc24ndCBwYXNzZWQgLSBGaXhlcyAjNjk3NiAqL1xyXG5cdGlmICggIXRoaXMubGVuZ3RoICkge1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHQvKiBJbml0aWFsaXNlIHRoZSBkYXRlIHBpY2tlci4gKi9cclxuXHRpZiAoISQuZGF0ZXBpY2tlci5pbml0aWFsaXplZCkge1xyXG5cdFx0JChkb2N1bWVudCkubW91c2Vkb3duKCQuZGF0ZXBpY2tlci5fY2hlY2tFeHRlcm5hbENsaWNrKTtcclxuXHRcdCQuZGF0ZXBpY2tlci5pbml0aWFsaXplZCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHQvKiBBcHBlbmQgZGF0ZXBpY2tlciBtYWluIGNvbnRhaW5lciB0byBib2R5IGlmIG5vdCBleGlzdC4gKi9cclxuXHRpZiAoJChcIiNcIiskLmRhdGVwaWNrZXIuX21haW5EaXZJZCkubGVuZ3RoID09PSAwKSB7XHJcblx0XHQkKFwiYm9keVwiKS5hcHBlbmQoJC5kYXRlcGlja2VyLmRwRGl2KTtcclxuXHR9XHJcblxyXG5cdHZhciBvdGhlckFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiAmJiAob3B0aW9ucyA9PT0gXCJpc0Rpc2FibGVkXCIgfHwgb3B0aW9ucyA9PT0gXCJnZXREYXRlXCIgfHwgb3B0aW9ucyA9PT0gXCJ3aWRnZXRcIikpIHtcclxuXHRcdHJldHVybiAkLmRhdGVwaWNrZXJbXCJfXCIgKyBvcHRpb25zICsgXCJEYXRlcGlja2VyXCJdLlxyXG5cdFx0XHRhcHBseSgkLmRhdGVwaWNrZXIsIFt0aGlzWzBdXS5jb25jYXQob3RoZXJBcmdzKSk7XHJcblx0fVxyXG5cdGlmIChvcHRpb25zID09PSBcIm9wdGlvblwiICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0cmV0dXJuICQuZGF0ZXBpY2tlcltcIl9cIiArIG9wdGlvbnMgKyBcIkRhdGVwaWNrZXJcIl0uXHJcblx0XHRcdGFwcGx5KCQuZGF0ZXBpY2tlciwgW3RoaXNbMF1dLmNvbmNhdChvdGhlckFyZ3MpKTtcclxuXHR9XHJcblx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiID9cclxuXHRcdFx0JC5kYXRlcGlja2VyW1wiX1wiICsgb3B0aW9ucyArIFwiRGF0ZXBpY2tlclwiXS5cclxuXHRcdFx0XHRhcHBseSgkLmRhdGVwaWNrZXIsIFt0aGlzXS5jb25jYXQob3RoZXJBcmdzKSkgOlxyXG5cdFx0XHQkLmRhdGVwaWNrZXIuX2F0dGFjaERhdGVwaWNrZXIodGhpcywgb3B0aW9ucyk7XHJcblx0fSk7XHJcbn07XHJcblxyXG4kLmRhdGVwaWNrZXIgPSBuZXcgRGF0ZXBpY2tlcigpOyAvLyBzaW5nbGV0b24gaW5zdGFuY2VcclxuJC5kYXRlcGlja2VyLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiQuZGF0ZXBpY2tlci51dWlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiQuZGF0ZXBpY2tlci52ZXJzaW9uID0gXCIxLjEwLjRcIjtcclxuXHJcbn0pKGpRdWVyeSk7XHJcbiJdfQ==
},{"./core":6}],8:[function(require,module,exports){
(function (global){
//define(function(require, exports, modlue) {
	var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
	$.extend($.fn, {
		jmodal: function(setting) {
			var ps = $.fn.extend({
				data: {},
				marginTop: 100,
				buttonText: { ok: 'Ok', cancel: 'Cancel' },
				okEvent: function(e) { },
				width: 400,
				fixed: true,
				title: 'JModal Dialog',
				content: 'This is a jquery plugin!',
				skinId: 'jmodal-main'
			}, setting);
			var allSel = $('select').hide(), doc = $(document);

			ps.docWidth = doc.width();
			ps.docHeight = doc.height();
			var cache, cacheKey = 'jericho_modal';

			if ($('#jmodal-overlay').length == 0) {
				$('<div id="jmodal-overlay" class="jmodal-overlay"/>\
					<div class="jmodal-main" id="jmodal-main" >\
						<div class="jmodal-top">\
							<div class="jmodal-top-left jmodal-png-fiexed">&nbsp;</div>\
							<div class="jmodal-border-top jmodal-png-fiexed">&nbsp;</div>\
							<div class="jmodal-top-right jmodal-png-fiexed">&nbsp;</div>\
						</div>\
						<div class="jmodal-middle">\
							<div class="jmodal-border-left jmodal-png-fiexed">&nbsp;</div>\
							<div class="jmodal-middle-content">\
								<div class="jmodal-title" />\
								<div class="jmodal-content" id="jmodal-container-content" />\
								</div>\
							<div class="jmodal-border-right jmodal-png-fiexed">&nbsp;</div>\
						</div>\
						<div class="jmodal-bottom">\
							<div class="jmodal-bottom-left jmodal-png-fiexed">&nbsp;</div>\
							<div class="jmodal-border-bottom jmodal-png-fiexed">&nbsp;</div>\
							<div class="jmodal-bottom-right jmodal-png-fiexed">&nbsp;</div>\
						</div>\
					</div>').appendTo('body');
				//$(document.body).find('form:first-child') || $(document.body)
			}

			if (window[cacheKey] == undefined) {
				cache = {
					overlay: $('#jmodal-overlay'),
					modal: $('#jmodal-main'),
					body: $('#jmodal-container-content')
				};
				cache.title = cache.body.prev();
				cache.buttons = cache.body.next().children();
				window[cacheKey] = cache;
			}
			cache = window[cacheKey];
			var args = {
				hide: function() {
					cache.modal.fadeOut();
					cache.overlay.hide();
				},
				isCancelling: false
			};

			if (!cache.overlay.is(':visible')) {
				cache.overlay.css({ opacity: .4 }).show();
				cache.modal.attr('class', ps.skinId)
							.css({
								position: (ps.fixed ? 'fixed' : 'absolute'),
								width: ps.width,
								left: (ps.docWidth - ps.width) / 2,
								top: (ps.marginTop + document.documentElement.scrollTop)
							}).fadeIn();
			}
			cache.title.html(ps.title);
			//OK BUTTON
			cache.buttons.eq(0)
				.val(ps.buttonText.ok)
					.unbind('click')
						.click(function(e) {
							allSel.show();
							ps.okEvent(ps.data, args);
							if (!args.isCancelling) {
								args.hide();
							}
						})
			//CANCEL BUTTON
				.next()
					.val(ps.buttonText.cancel)
						.one('click', function() { args.hide(); allSel.show(); });

			if (typeof ps.content == 'string') {
				$('#jmodal-container-content').html(ps.content);
			}
			if (typeof ps.content == 'function') {
				ps.content(cache.body);
			}
		}
	})
//});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvbGliL2ptb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLy9kZWZpbmUoZnVuY3Rpb24ocmVxdWlyZSwgZXhwb3J0cywgbW9kbHVlKSB7XHJcblx0dmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcblx0JC5leHRlbmQoJC5mbiwge1xyXG5cdFx0am1vZGFsOiBmdW5jdGlvbihzZXR0aW5nKSB7XHJcblx0XHRcdHZhciBwcyA9ICQuZm4uZXh0ZW5kKHtcclxuXHRcdFx0XHRkYXRhOiB7fSxcclxuXHRcdFx0XHRtYXJnaW5Ub3A6IDEwMCxcclxuXHRcdFx0XHRidXR0b25UZXh0OiB7IG9rOiAnT2snLCBjYW5jZWw6ICdDYW5jZWwnIH0sXHJcblx0XHRcdFx0b2tFdmVudDogZnVuY3Rpb24oZSkgeyB9LFxyXG5cdFx0XHRcdHdpZHRoOiA0MDAsXHJcblx0XHRcdFx0Zml4ZWQ6IHRydWUsXHJcblx0XHRcdFx0dGl0bGU6ICdKTW9kYWwgRGlhbG9nJyxcclxuXHRcdFx0XHRjb250ZW50OiAnVGhpcyBpcyBhIGpxdWVyeSBwbHVnaW4hJyxcclxuXHRcdFx0XHRza2luSWQ6ICdqbW9kYWwtbWFpbidcclxuXHRcdFx0fSwgc2V0dGluZyk7XHJcblx0XHRcdHZhciBhbGxTZWwgPSAkKCdzZWxlY3QnKS5oaWRlKCksIGRvYyA9ICQoZG9jdW1lbnQpO1xyXG5cclxuXHRcdFx0cHMuZG9jV2lkdGggPSBkb2Mud2lkdGgoKTtcclxuXHRcdFx0cHMuZG9jSGVpZ2h0ID0gZG9jLmhlaWdodCgpO1xyXG5cdFx0XHR2YXIgY2FjaGUsIGNhY2hlS2V5ID0gJ2plcmljaG9fbW9kYWwnO1xyXG5cclxuXHRcdFx0aWYgKCQoJyNqbW9kYWwtb3ZlcmxheScpLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdFx0JCgnPGRpdiBpZD1cImptb2RhbC1vdmVybGF5XCIgY2xhc3M9XCJqbW9kYWwtb3ZlcmxheVwiLz5cXFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImptb2RhbC1tYWluXCIgaWQ9XCJqbW9kYWwtbWFpblwiID5cXFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiam1vZGFsLXRvcFwiPlxcXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImptb2RhbC10b3AtbGVmdCBqbW9kYWwtcG5nLWZpZXhlZFwiPiZuYnNwOzwvZGl2PlxcXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImptb2RhbC1ib3JkZXItdG9wIGptb2RhbC1wbmctZmlleGVkXCI+Jm5ic3A7PC9kaXY+XFxcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiam1vZGFsLXRvcC1yaWdodCBqbW9kYWwtcG5nLWZpZXhlZFwiPiZuYnNwOzwvZGl2PlxcXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxcXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJqbW9kYWwtbWlkZGxlXCI+XFxcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiam1vZGFsLWJvcmRlci1sZWZ0IGptb2RhbC1wbmctZmlleGVkXCI+Jm5ic3A7PC9kaXY+XFxcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiam1vZGFsLW1pZGRsZS1jb250ZW50XCI+XFxcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJqbW9kYWwtdGl0bGVcIiAvPlxcXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiam1vZGFsLWNvbnRlbnRcIiBpZD1cImptb2RhbC1jb250YWluZXItY29udGVudFwiIC8+XFxcclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxcXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImptb2RhbC1ib3JkZXItcmlnaHQgam1vZGFsLXBuZy1maWV4ZWRcIj4mbmJzcDs8L2Rpdj5cXFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiam1vZGFsLWJvdHRvbVwiPlxcXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImptb2RhbC1ib3R0b20tbGVmdCBqbW9kYWwtcG5nLWZpZXhlZFwiPiZuYnNwOzwvZGl2PlxcXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImptb2RhbC1ib3JkZXItYm90dG9tIGptb2RhbC1wbmctZmlleGVkXCI+Jm5ic3A7PC9kaXY+XFxcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiam1vZGFsLWJvdHRvbS1yaWdodCBqbW9kYWwtcG5nLWZpZXhlZFwiPiZuYnNwOzwvZGl2PlxcXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxcXHJcblx0XHRcdFx0XHQ8L2Rpdj4nKS5hcHBlbmRUbygnYm9keScpO1xyXG5cdFx0XHRcdC8vJChkb2N1bWVudC5ib2R5KS5maW5kKCdmb3JtOmZpcnN0LWNoaWxkJykgfHwgJChkb2N1bWVudC5ib2R5KVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAod2luZG93W2NhY2hlS2V5XSA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRjYWNoZSA9IHtcclxuXHRcdFx0XHRcdG92ZXJsYXk6ICQoJyNqbW9kYWwtb3ZlcmxheScpLFxyXG5cdFx0XHRcdFx0bW9kYWw6ICQoJyNqbW9kYWwtbWFpbicpLFxyXG5cdFx0XHRcdFx0Ym9keTogJCgnI2ptb2RhbC1jb250YWluZXItY29udGVudCcpXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRjYWNoZS50aXRsZSA9IGNhY2hlLmJvZHkucHJldigpO1xyXG5cdFx0XHRcdGNhY2hlLmJ1dHRvbnMgPSBjYWNoZS5ib2R5Lm5leHQoKS5jaGlsZHJlbigpO1xyXG5cdFx0XHRcdHdpbmRvd1tjYWNoZUtleV0gPSBjYWNoZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYWNoZSA9IHdpbmRvd1tjYWNoZUtleV07XHJcblx0XHRcdHZhciBhcmdzID0ge1xyXG5cdFx0XHRcdGhpZGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Y2FjaGUubW9kYWwuZmFkZU91dCgpO1xyXG5cdFx0XHRcdFx0Y2FjaGUub3ZlcmxheS5oaWRlKCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRpc0NhbmNlbGxpbmc6IGZhbHNlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRpZiAoIWNhY2hlLm92ZXJsYXkuaXMoJzp2aXNpYmxlJykpIHtcclxuXHRcdFx0XHRjYWNoZS5vdmVybGF5LmNzcyh7IG9wYWNpdHk6IC40IH0pLnNob3coKTtcclxuXHRcdFx0XHRjYWNoZS5tb2RhbC5hdHRyKCdjbGFzcycsIHBzLnNraW5JZClcclxuXHRcdFx0XHRcdFx0XHQuY3NzKHtcclxuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiAocHMuZml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJyksXHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogcHMud2lkdGgsXHJcblx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAocHMuZG9jV2lkdGggLSBwcy53aWR0aCkgLyAyLFxyXG5cdFx0XHRcdFx0XHRcdFx0dG9wOiAocHMubWFyZ2luVG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcClcclxuXHRcdFx0XHRcdFx0XHR9KS5mYWRlSW4oKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYWNoZS50aXRsZS5odG1sKHBzLnRpdGxlKTtcclxuXHRcdFx0Ly9PSyBCVVRUT05cclxuXHRcdFx0Y2FjaGUuYnV0dG9ucy5lcSgwKVxyXG5cdFx0XHRcdC52YWwocHMuYnV0dG9uVGV4dC5vaylcclxuXHRcdFx0XHRcdC51bmJpbmQoJ2NsaWNrJylcclxuXHRcdFx0XHRcdFx0LmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0XHRhbGxTZWwuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdHBzLm9rRXZlbnQocHMuZGF0YSwgYXJncyk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFhcmdzLmlzQ2FuY2VsbGluZykge1xyXG5cdFx0XHRcdFx0XHRcdFx0YXJncy5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHQvL0NBTkNFTCBCVVRUT05cclxuXHRcdFx0XHQubmV4dCgpXHJcblx0XHRcdFx0XHQudmFsKHBzLmJ1dHRvblRleHQuY2FuY2VsKVxyXG5cdFx0XHRcdFx0XHQub25lKCdjbGljaycsIGZ1bmN0aW9uKCkgeyBhcmdzLmhpZGUoKTsgYWxsU2VsLnNob3coKTsgfSk7XHJcblxyXG5cdFx0XHRpZiAodHlwZW9mIHBzLmNvbnRlbnQgPT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHQkKCcjam1vZGFsLWNvbnRhaW5lci1jb250ZW50JykuaHRtbChwcy5jb250ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mIHBzLmNvbnRlbnQgPT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdHBzLmNvbnRlbnQoY2FjaGUuYm9keSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KVxyXG4vL30pOyJdfQ==
},{}],9:[function(require,module,exports){
/*! jQuery UI - v1.11.1 - 2014-08-13
* http://jqueryui.com
* Includes: datepicker-af.js, datepicker-ar-DZ.js, datepicker-ar.js, datepicker-az.js, datepicker-be.js, datepicker-bg.js, datepicker-bs.js, datepicker-ca.js, datepicker-cs.js, datepicker-cy-GB.js, datepicker-da.js, datepicker-de.js, datepicker-el.js, datepicker-en-AU.js, datepicker-en-GB.js, datepicker-en-NZ.js, datepicker-eo.js, datepicker-es.js, datepicker-et.js, datepicker-eu.js, datepicker-fa.js, datepicker-fi.js, datepicker-fo.js, datepicker-fr-CA.js, datepicker-fr-CH.js, datepicker-fr.js, datepicker-gl.js, datepicker-he.js, datepicker-hi.js, datepicker-hr.js, datepicker-hu.js, datepicker-hy.js, datepicker-id.js, datepicker-is.js, datepicker-it-CH.js, datepicker-it.js, datepicker-ja.js, datepicker-ka.js, datepicker-kk.js, datepicker-km.js, datepicker-ko.js, datepicker-ky.js, datepicker-lb.js, datepicker-lt.js, datepicker-lv.js, datepicker-mk.js, datepicker-ml.js, datepicker-ms.js, datepicker-nb.js, datepicker-nl-BE.js, datepicker-nl.js, datepicker-nn.js, datepicker-no.js, datepicker-pl.js, datepicker-pt-BR.js, datepicker-pt.js, datepicker-rm.js, datepicker-ro.js, datepicker-ru.js, datepicker-sk.js, datepicker-sl.js, datepicker-sq.js, datepicker-sr-SR.js, datepicker-sr.js, datepicker-sv.js, datepicker-ta.js, datepicker-th.js, datepicker-tj.js, datepicker-tr.js, datepicker-uk.js, datepicker-vi.js, datepicker-zh-CN.js, datepicker-zh-HK.js, datepicker-zh-TW.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function (e) {
    var t = e.datepicker;
    t.regional.af = {
        closeText: "Selekteer",
        prevText: "Vorige",
        nextText: "Volgende",
        currentText: "Vandag",
        monthNames: ["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"],
        monthNamesShort: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
        dayNames: ["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"],
        dayNamesShort: ["Son", "Maa", "Din", "Woe", "Don", "Vry", "Sat"],
        dayNamesMin: ["So", "Ma", "Di", "Wo", "Do", "Vr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.af), t.regional.af, t.regional["ar-DZ"] = {
        closeText: "إغلاق",
        prevText: "&#x3C;السابق",
        nextText: "التالي&#x3E;",
        currentText: "اليوم",
        monthNames: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
        monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
        dayNamesShort: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
        dayNamesMin: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
        weekHeader: "أسبوع",
        dateFormat: "dd/mm/yy",
        firstDay: 6,
        isRTL: !0,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional["ar-DZ"]), t.regional["ar-DZ"], t.regional.ar = {
        closeText: "إغلاق",
        prevText: "&#x3C;السابق",
        nextText: "التالي&#x3E;",
        currentText: "اليوم",
        monthNames: ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
        monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
        dayNamesShort: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
        dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
        weekHeader: "أسبوع",
        dateFormat: "dd/mm/yy",
        firstDay: 6,
        isRTL: !0,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.ar), t.regional.ar, t.regional.az = {
        closeText: "Bağla",
        prevText: "&#x3C;Geri",
        nextText: "İrəli&#x3E;",
        currentText: "Bugün",
        monthNames: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
        monthNamesShort: ["Yan", "Fev", "Mar", "Apr", "May", "İyun", "İyul", "Avq", "Sen", "Okt", "Noy", "Dek"],
        dayNames: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"],
        dayNamesShort: ["B", "Be", "Ça", "Ç", "Ca", "C", "Ş"],
        dayNamesMin: ["B", "B", "Ç", "С", "Ç", "C", "Ş"],
        weekHeader: "Hf",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.az), t.regional.az, t.regional.be = {
        closeText: "Зачыніць",
        prevText: "&larr;Папяр.",
        nextText: "Наст.&rarr;",
        currentText: "Сёньня",
        monthNames: ["Студзень", "Люты", "Сакавік", "Красавік", "Травень", "Чэрвень", "Ліпень", "Жнівень", "Верасень", "Кастрычнік", "Лістапад", "Сьнежань"],
        monthNamesShort: ["Сту", "Лют", "Сак", "Кра", "Тра", "Чэр", "Ліп", "Жні", "Вер", "Кас", "Ліс", "Сьн"],
        dayNames: ["нядзеля", "панядзелак", "аўторак", "серада", "чацьвер", "пятніца", "субота"],
        dayNamesShort: ["ндз", "пнд", "аўт", "срд", "чцв", "птн", "сбт"],
        dayNamesMin: ["Нд", "Пн", "Аў", "Ср", "Чц", "Пт", "Сб"],
        weekHeader: "Тд",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.be), t.regional.be, t.regional.bg = {
        closeText: "затвори",
        prevText: "&#x3C;назад",
        nextText: "напред&#x3E;",
        nextBigText: "&#x3E;&#x3E;",
        currentText: "днес",
        monthNames: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
        monthNamesShort: ["Яну", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Нов", "Дек"],
        dayNames: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
        dayNamesShort: ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб"],
        dayNamesMin: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Съ"],
        weekHeader: "Wk",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.bg), t.regional.bg, t.regional.bs = {
        closeText: "Zatvori",
        prevText: "&#x3C;",
        nextText: "&#x3E;",
        currentText: "Danas",
        monthNames: ["Januar", "Februar", "Mart", "April", "Maj", "Juni", "Juli", "August", "Septembar", "Oktobar", "Novembar", "Decembar"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        dayNames: ["Nedelja", "Ponedeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
        dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
        dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
        weekHeader: "Wk",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.bs), t.regional.bs, t.regional.ca = {
        closeText: "Tanca",
        prevText: "Anterior",
        nextText: "Següent",
        currentText: "Avui",
        monthNames: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
        monthNamesShort: ["gen", "feb", "març", "abr", "maig", "juny", "jul", "ag", "set", "oct", "nov", "des"],
        dayNames: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
        dayNamesShort: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
        dayNamesMin: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
        weekHeader: "Set",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.ca), t.regional.ca, t.regional.cs = {
        closeText: "Zavřít",
        prevText: "&#x3C;Dříve",
        nextText: "Později&#x3E;",
        currentText: "Nyní",
        monthNames: ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"],
        monthNamesShort: ["led", "úno", "bře", "dub", "kvě", "čer", "čvc", "srp", "zář", "říj", "lis", "pro"],
        dayNames: ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"],
        dayNamesShort: ["ne", "po", "út", "st", "čt", "pá", "so"],
        dayNamesMin: ["ne", "po", "út", "st", "čt", "pá", "so"],
        weekHeader: "Týd",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.cs), t.regional.cs, t.regional["cy-GB"] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: ["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"],
        monthNamesShort: ["Ion", "Chw", "Maw", "Ebr", "Mai", "Meh", "Gor", "Aws", "Med", "Hyd", "Tac", "Rha"],
        dayNames: ["Dydd Sul", "Dydd Llun", "Dydd Mawrth", "Dydd Mercher", "Dydd Iau", "Dydd Gwener", "Dydd Sadwrn"],
        dayNamesShort: ["Sul", "Llu", "Maw", "Mer", "Iau", "Gwe", "Sad"],
        dayNamesMin: ["Su", "Ll", "Ma", "Me", "Ia", "Gw", "Sa"],
        weekHeader: "Wy",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional["cy-GB"]), t.regional["cy-GB"], t.regional.da = {
        closeText: "Luk",
        prevText: "&#x3C;Forrige",
        nextText: "Næste&#x3E;",
        currentText: "Idag",
        monthNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
        dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
        dayNamesMin: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
        weekHeader: "Uge",
        dateFormat: "dd-mm-yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.da), t.regional.da, t.regional.de = {
        closeText: "Schließen",
        prevText: "&#x3C;Zurück",
        nextText: "Vor&#x3E;",
        currentText: "Heute",
        monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
        dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        weekHeader: "KW",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.de), t.regional.de, t.regional.el = {
        closeText: "Κλείσιμο",
        prevText: "Προηγούμενος",
        nextText: "Επόμενος",
        currentText: "Τρέχων Μήνας",
        monthNames: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
        monthNamesShort: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
        dayNames: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
        dayNamesShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
        dayNamesMin: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
        weekHeader: "Εβδ",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.el), t.regional.el, t.regional["en-AU"] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional["en-AU"]), t.regional["en-AU"], t.regional["en"] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional["en"]), t.regional["en"], t.regional["en-NZ"] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional["en-NZ"]), t.regional["en-NZ"], t.regional.eo = {
        closeText: "Fermi",
        prevText: "&#x3C;Anta",
        nextText: "Sekv&#x3E;",
        currentText: "Nuna",
        monthNames: ["Januaro", "Februaro", "Marto", "Aprilo", "Majo", "Junio", "Julio", "Aŭgusto", "Septembro", "Oktobro", "Novembro", "Decembro"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aŭg", "Sep", "Okt", "Nov", "Dec"],
        dayNames: ["Dimanĉo", "Lundo", "Mardo", "Merkredo", "Ĵaŭdo", "Vendredo", "Sabato"],
        dayNamesShort: ["Dim", "Lun", "Mar", "Mer", "Ĵaŭ", "Ven", "Sab"],
        dayNamesMin: ["Di", "Lu", "Ma", "Me", "Ĵa", "Ve", "Sa"],
        weekHeader: "Sb",
        dateFormat: "dd/mm/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.eo), t.regional.eo, t.regional.es = {
        closeText: "Cerrar",
        prevText: "&#x3C;Ant",
        nextText: "Sig&#x3E;",
        currentText: "Hoy",
        monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
        monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
        dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
        dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
        dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
        weekHeader: "Sm",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.es), t.regional.es, t.regional.et = {
        closeText: "Sulge",
        prevText: "Eelnev",
        nextText: "Järgnev",
        currentText: "Täna",
        monthNames: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
        monthNamesShort: ["Jaan", "Veebr", "Märts", "Apr", "Mai", "Juuni", "Juuli", "Aug", "Sept", "Okt", "Nov", "Dets"],
        dayNames: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"],
        dayNamesShort: ["Pühap", "Esmasp", "Teisip", "Kolmap", "Neljap", "Reede", "Laup"],
        dayNamesMin: ["P", "E", "T", "K", "N", "R", "L"],
        weekHeader: "näd",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.et), t.regional.et, t.regional.eu = {
        closeText: "Egina",
        prevText: "&#x3C;Aur",
        nextText: "Hur&#x3E;",
        currentText: "Gaur",
        monthNames: ["urtarrila", "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua"],
        monthNamesShort: ["urt.", "ots.", "mar.", "api.", "mai.", "eka.", "uzt.", "abu.", "ira.", "urr.", "aza.", "abe."],
        dayNames: ["igandea", "astelehena", "asteartea", "asteazkena", "osteguna", "ostirala", "larunbata"],
        dayNamesShort: ["ig.", "al.", "ar.", "az.", "og.", "ol.", "lr."],
        dayNamesMin: ["ig", "al", "ar", "az", "og", "ol", "lr"],
        weekHeader: "As",
        dateFormat: "yy-mm-dd",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.eu), t.regional.eu, t.regional.fa = {
        closeText: "بستن",
        prevText: "&#x3C;قبلی",
        nextText: "بعدی&#x3E;",
        currentText: "امروز",
        monthNames: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        dayNames: ["يکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
        dayNamesShort: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
        dayNamesMin: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
        weekHeader: "هف",
        dateFormat: "yy/mm/dd",
        firstDay: 6,
        isRTL: !0,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.fa), t.regional.fa, t.regional.fi = {
        closeText: "Sulje",
        prevText: "&#xAB;Edellinen",
        nextText: "Seuraava&#xBB;",
        currentText: "Tänään",
        monthNames: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
        monthNamesShort: ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "Kesä", "Heinä", "Elo", "Syys", "Loka", "Marras", "Joulu"],
        dayNamesShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
        dayNames: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"],
        dayNamesMin: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
        weekHeader: "Vk",
        dateFormat: "d.m.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.fi), t.regional.fi, t.regional.fo = {
        closeText: "Lat aftur",
        prevText: "&#x3C;Fyrra",
        nextText: "Næsta&#x3E;",
        currentText: "Í dag",
        monthNames: ["Januar", "Februar", "Mars", "Apríl", "Mei", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
        dayNames: ["Sunnudagur", "Mánadagur", "Týsdagur", "Mikudagur", "Hósdagur", "Fríggjadagur", "Leyardagur"],
        dayNamesShort: ["Sun", "Mán", "Týs", "Mik", "Hós", "Frí", "Ley"],
        dayNamesMin: ["Su", "Má", "Tý", "Mi", "Hó", "Fr", "Le"],
        weekHeader: "Vk",
        dateFormat: "dd-mm-yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.fo), t.regional.fo, t.regional["fr-CA"] = {
        closeText: "Fermer",
        prevText: "Précédent",
        nextText: "Suivant",
        currentText: "Aujourd'hui",
        monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
        monthNamesShort: ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
        dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
        dayNamesShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
        dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
        weekHeader: "Sem.",
        dateFormat: "yy-mm-dd",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional["fr-CA"]), t.regional["fr-CA"], t.regional["fr-CH"] = {
        closeText: "Fermer",
        prevText: "&#x3C;Préc",
        nextText: "Suiv&#x3E;",
        currentText: "Courant",
        monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
        monthNamesShort: ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
        dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
        dayNamesShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
        dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
        weekHeader: "Sm",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional["fr-CH"]), t.regional["fr-CH"], t.regional.fr = {
        closeText: "Fermer",
        prevText: "Précédent",
        nextText: "Suivant",
        currentText: "Aujourd'hui",
        monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
        monthNamesShort: ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
        dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
        dayNamesShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
        dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
        weekHeader: "Sem.",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.fr), t.regional.fr, t.regional.gl = {
        closeText: "Pechar",
        prevText: "&#x3C;Ant",
        nextText: "Seg&#x3E;",
        currentText: "Hoxe",
        monthNames: ["Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xuño", "Xullo", "Agosto", "Setembro", "Outubro", "Novembro", "Decembro"],
        monthNamesShort: ["Xan", "Feb", "Mar", "Abr", "Mai", "Xuñ", "Xul", "Ago", "Set", "Out", "Nov", "Dec"],
        dayNames: ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"],
        dayNamesShort: ["Dom", "Lun", "Mar", "Mér", "Xov", "Ven", "Sáb"],
        dayNamesMin: ["Do", "Lu", "Ma", "Mé", "Xo", "Ve", "Sá"],
        weekHeader: "Sm",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.gl), t.regional.gl, t.regional.he = {
        closeText: "סגור",
        prevText: "&#x3C;הקודם",
        nextText: "הבא&#x3E;",
        currentText: "היום",
        monthNames: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
        monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יוני", "יולי", "אוג", "ספט", "אוק", "נוב", "דצמ"],
        dayNames: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
        dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"],
        dayNamesMin: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"],
        weekHeader: "Wk",
        dateFormat: "dd/mm/yy",
        firstDay: 0,
        isRTL: !0,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.he), t.regional.he, t.regional.hi = {
        closeText: "बंद",
        prevText: "पिछला",
        nextText: "अगला",
        currentText: "आज",
        monthNames: ["जनवरी ", "फरवरी", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अगस्त ", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"],
        monthNamesShort: ["जन", "फर", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अग", "सित", "अक्ट", "नव", "दि"],
        dayNames: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
        dayNamesShort: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
        dayNamesMin: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
        weekHeader: "हफ्ता",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.hi), t.regional.hi, t.regional.hr = {
        closeText: "Zatvori",
        prevText: "&#x3C;",
        nextText: "&#x3E;",
        currentText: "Danas",
        monthNames: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
        monthNamesShort: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
        dayNames: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
        dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
        dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
        weekHeader: "Tje",
        dateFormat: "dd.mm.yy.",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.hr), t.regional.hr, t.regional.hu = {
        closeText: "bezár",
        prevText: "vissza",
        nextText: "előre",
        currentText: "ma",
        monthNames: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
        dayNames: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
        dayNamesShort: ["Vas", "Hét", "Ked", "Sze", "Csü", "Pén", "Szo"],
        dayNamesMin: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
        weekHeader: "Hét",
        dateFormat: "yy.mm.dd.",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !0,
        yearSuffix: ""
    }, t.setDefaults(t.regional.hu), t.regional.hu, t.regional.hy = {
        closeText: "Փակել",
        prevText: "&#x3C;Նախ.",
        nextText: "Հաջ.&#x3E;",
        currentText: "Այսօր",
        monthNames: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"],
        monthNamesShort: ["Հունվ", "Փետր", "Մարտ", "Ապր", "Մայիս", "Հունիս", "Հուլ", "Օգս", "Սեպ", "Հոկ", "Նոյ", "Դեկ"],
        dayNames: ["կիրակի", "եկուշաբթի", "երեքշաբթի", "չորեքշաբթի", "հինգշաբթի", "ուրբաթ", "շաբաթ"],
        dayNamesShort: ["կիր", "երկ", "երք", "չրք", "հնգ", "ուրբ", "շբթ"],
        dayNamesMin: ["կիր", "երկ", "երք", "չրք", "հնգ", "ուրբ", "շբթ"],
        weekHeader: "ՇԲՏ",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.hy), t.regional.hy, t.regional.id = {
        closeText: "Tutup",
        prevText: "&#x3C;mundur",
        nextText: "maju&#x3E;",
        currentText: "hari ini",
        monthNames: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agus", "Sep", "Okt", "Nop", "Des"],
        dayNames: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
        dayNamesShort: ["Min", "Sen", "Sel", "Rab", "kam", "Jum", "Sab"],
        dayNamesMin: ["Mg", "Sn", "Sl", "Rb", "Km", "jm", "Sb"],
        weekHeader: "Mg",
        dateFormat: "dd/mm/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.id), t.regional.id, t.regional.is = {
        closeText: "Loka",
        prevText: "&#x3C; Fyrri",
        nextText: "Næsti &#x3E;",
        currentText: "Í dag",
        monthNames: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maí", "Jún", "Júl", "Ágú", "Sep", "Okt", "Nóv", "Des"],
        dayNames: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"],
        dayNamesShort: ["Sun", "Mán", "Þri", "Mið", "Fim", "Fös", "Lau"],
        dayNamesMin: ["Su", "Má", "Þr", "Mi", "Fi", "Fö", "La"],
        weekHeader: "Vika",
        dateFormat: "dd.mm.yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, t.setDefaults(t.regional.is),t.regional.is,t.regional["it-CH"] = {
        closeText: "Chiudi",
        prevText: "&#x3C;Prec",
        nextText: "Succ&#x3E;",
        currentText: "Oggi",
        monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
        dayNames: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
        dayNamesShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
        dayNamesMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
        weekHeader: "Sm",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional["it-CH"]),t.regional["it-CH"],t.regional.it = {
        closeText: "Chiudi",
        prevText: "&#x3C;Prec",
        nextText: "Succ&#x3E;",
        currentText: "Oggi",
        monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
        dayNames: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
        dayNamesShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
        dayNamesMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
        weekHeader: "Sm",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.it),t.regional.it,t.regional.ja = {
        closeText: "閉じる",
        prevText: "&#x3C;前",
        nextText: "次&#x3E;",
        currentText: "今日",
        monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        dayNames: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
        dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
        dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
        weekHeader: "週",
        dateFormat: "yy/mm/dd",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !0,
        yearSuffix: "年"
    },t.setDefaults(t.regional.ja),t.regional.ja,t.regional.ka = {
        closeText: "დახურვა",
        prevText: "&#x3c; წინა",
        nextText: "შემდეგი &#x3e;",
        currentText: "დღეს",
        monthNames: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"],
        monthNamesShort: ["იან", "თებ", "მარ", "აპრ", "მაი", "ივნ", "ივლ", "აგვ", "სექ", "ოქტ", "ნოე", "დეკ"],
        dayNames: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"],
        dayNamesShort: ["კვ", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"],
        dayNamesMin: ["კვ", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"],
        weekHeader: "კვირა",
        dateFormat: "dd-mm-yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.ka),t.regional.ka,t.regional.kk = {
        closeText: "Жабу",
        prevText: "&#x3C;Алдыңғы",
        nextText: "Келесі&#x3E;",
        currentText: "Бүгін",
        monthNames: ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"],
        monthNamesShort: ["Қаң", "Ақп", "Нау", "Сәу", "Мам", "Мау", "Шіл", "Там", "Қыр", "Қаз", "Қар", "Жел"],
        dayNames: ["Жексенбі", "Дүйсенбі", "Сейсенбі", "Сәрсенбі", "Бейсенбі", "Жұма", "Сенбі"],
        dayNamesShort: ["жкс", "дсн", "ссн", "срс", "бсн", "жма", "снб"],
        dayNamesMin: ["Жк", "Дс", "Сс", "Ср", "Бс", "Жм", "Сн"],
        weekHeader: "Не",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.kk),t.regional.kk,t.regional.km = {
        closeText: "ធ្វើ​រួច",
        prevText: "មុន",
        nextText: "បន្ទាប់",
        currentText: "ថ្ងៃ​នេះ",
        monthNames: ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"],
        monthNamesShort: ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"],
        dayNames: ["អាទិត្យ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ", "សៅរ៍"],
        dayNamesShort: ["អា", "ច", "អ", "ពុ", "ព្រហ", "សុ", "សៅ"],
        dayNamesMin: ["អា", "ច", "អ", "ពុ", "ព្រហ", "សុ", "សៅ"],
        weekHeader: "សប្ដាហ៍",
        dateFormat: "dd-mm-yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.km),t.regional.km,t.regional.ko = {
        closeText: "닫기",
        prevText: "이전달",
        nextText: "다음달",
        currentText: "오늘",
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        weekHeader: "Wk",
        dateFormat: "yy-mm-dd",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !0,
        yearSuffix: "년"
    },t.setDefaults(t.regional.ko),t.regional.ko,t.regional.ky = {
        closeText: "Жабуу",
        prevText: "&#x3c;Мур",
        nextText: "Кий&#x3e;",
        currentText: "Бүгүн",
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        dayNames: ["жекшемби", "дүйшөмбү", "шейшемби", "шаршемби", "бейшемби", "жума", "ишемби"],
        dayNamesShort: ["жек", "дүй", "шей", "шар", "бей", "жум", "ише"],
        dayNamesMin: ["Жк", "Дш", "Шш", "Шр", "Бш", "Жм", "Иш"],
        weekHeader: "Жум",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.ky),t.regional.ky,t.regional.lb = {
        closeText: "Fäerdeg",
        prevText: "Zréck",
        nextText: "Weider",
        currentText: "Haut",
        monthNames: ["Januar", "Februar", "Mäerz", "Abrëll", "Mee", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        monthNamesShort: ["Jan", "Feb", "Mäe", "Abr", "Mee", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
        dayNames: ["Sonndeg", "Méindeg", "Dënschdeg", "Mëttwoch", "Donneschdeg", "Freideg", "Samschdeg"],
        dayNamesShort: ["Son", "Méi", "Dën", "Mët", "Don", "Fre", "Sam"],
        dayNamesMin: ["So", "Mé", "Dë", "Më", "Do", "Fr", "Sa"],
        weekHeader: "W",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.lb),t.regional.lb,t.regional.lt = {
        closeText: "Uždaryti",
        prevText: "&#x3C;Atgal",
        nextText: "Pirmyn&#x3E;",
        currentText: "Šiandien",
        monthNames: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
        monthNamesShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gru"],
        dayNames: ["sekmadienis", "pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis"],
        dayNamesShort: ["sek", "pir", "ant", "tre", "ket", "pen", "šeš"],
        dayNamesMin: ["Se", "Pr", "An", "Tr", "Ke", "Pe", "Še"],
        weekHeader: "SAV",
        dateFormat: "yy-mm-dd",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !0,
        yearSuffix: ""
    },t.setDefaults(t.regional.lt),t.regional.lt,t.regional.lv = {
        closeText: "Aizvērt",
        prevText: "Iepr.",
        nextText: "Nāk.",
        currentText: "Šodien",
        monthNames: ["Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jūn", "Jūl", "Aug", "Sep", "Okt", "Nov", "Dec"],
        dayNames: ["svētdiena", "pirmdiena", "otrdiena", "trešdiena", "ceturtdiena", "piektdiena", "sestdiena"],
        dayNamesShort: ["svt", "prm", "otr", "tre", "ctr", "pkt", "sst"],
        dayNamesMin: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "Ss"],
        weekHeader: "Ned.",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.lv),t.regional.lv,t.regional.mk = {
        closeText: "Затвори",
        prevText: "&#x3C;",
        nextText: "&#x3E;",
        currentText: "Денес",
        monthNames: ["Јануари", "Февруари", "Март", "Април", "Мај", "Јуни", "Јули", "Август", "Септември", "Октомври", "Ноември", "Декември"],
        monthNamesShort: ["Јан", "Фев", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Ное", "Дек"],
        dayNames: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"],
        dayNamesShort: ["Нед", "Пон", "Вто", "Сре", "Чет", "Пет", "Саб"],
        dayNamesMin: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Са"],
        weekHeader: "Сед",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.mk),t.regional.mk,t.regional.ml = {
        closeText: "ശരി",
        prevText: "മുന്നത്തെ",
        nextText: "അടുത്തത് ",
        currentText: "ഇന്ന്",
        monthNames: ["ജനുവരി", "ഫെബ്രുവരി", "മാര്‍ച്ച്", "ഏപ്രില്‍", "മേയ്", "ജൂണ്‍", "ജൂലൈ", "ആഗസ്റ്റ്", "സെപ്റ്റംബര്‍", "ഒക്ടോബര്‍", "നവംബര്‍", "ഡിസംബര്‍"],
        monthNamesShort: ["ജനു", "ഫെബ്", "മാര്‍", "ഏപ്രി", "മേയ്", "ജൂണ്‍", "ജൂലാ", "ആഗ", "സെപ്", "ഒക്ടോ", "നവം", "ഡിസ"],
        dayNames: ["ഞായര്‍", "തിങ്കള്‍", "ചൊവ്വ", "ബുധന്‍", "വ്യാഴം", "വെള്ളി", "ശനി"],
        dayNamesShort: ["ഞായ", "തിങ്ക", "ചൊവ്വ", "ബുധ", "വ്യാഴം", "വെള്ളി", "ശനി"],
        dayNamesMin: ["ഞാ", "തി", "ചൊ", "ബു", "വ്യാ", "വെ", "ശ"],
        weekHeader: "ആ",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.ml),t.regional.ml,t.regional.ms = {
        closeText: "Tutup",
        prevText: "&#x3C;Sebelum",
        nextText: "Selepas&#x3E;",
        currentText: "hari ini",
        monthNames: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"],
        monthNamesShort: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"],
        dayNames: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
        dayNamesShort: ["Aha", "Isn", "Sel", "Rab", "kha", "Jum", "Sab"],
        dayNamesMin: ["Ah", "Is", "Se", "Ra", "Kh", "Ju", "Sa"],
        weekHeader: "Mg",
        dateFormat: "dd/mm/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.ms),t.regional.ms,t.regional.nb = {
        closeText: "Lukk",
        prevText: "&#xAB;Forrige",
        nextText: "Neste&#xBB;",
        currentText: "I dag",
        monthNames: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
        monthNamesShort: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
        dayNamesShort: ["søn", "man", "tir", "ons", "tor", "fre", "lør"],
        dayNames: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
        dayNamesMin: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
        weekHeader: "Uke",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.nb),t.regional.nb,t.regional["nl-BE"] = {
        closeText: "Sluiten",
        prevText: "←",
        nextText: "→",
        currentText: "Vandaag",
        monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
        monthNamesShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        dayNames: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
        dayNamesShort: ["zon", "maa", "din", "woe", "don", "vri", "zat"],
        dayNamesMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
        weekHeader: "Wk",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional["nl-BE"]),t.regional["nl-BE"],t.regional.nl = {
        closeText: "Sluiten",
        prevText: "←",
        nextText: "→",
        currentText: "Vandaag",
        monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
        monthNamesShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        dayNames: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
        dayNamesShort: ["zon", "maa", "din", "woe", "don", "vri", "zat"],
        dayNamesMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
        weekHeader: "Wk",
        dateFormat: "dd-mm-yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.nl),t.regional.nl,t.regional.nn = {
        closeText: "Lukk",
        prevText: "&#xAB;Førre",
        nextText: "Neste&#xBB;",
        currentText: "I dag",
        monthNames: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
        monthNamesShort: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
        dayNamesShort: ["sun", "mån", "tys", "ons", "tor", "fre", "lau"],
        dayNames: ["sundag", "måndag", "tysdag", "onsdag", "torsdag", "fredag", "laurdag"],
        dayNamesMin: ["su", "må", "ty", "on", "to", "fr", "la"],
        weekHeader: "Veke",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.nn),t.regional.nn,t.regional.no = {
        closeText: "Lukk",
        prevText: "&#xAB;Forrige",
        nextText: "Neste&#xBB;",
        currentText: "I dag",
        monthNames: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
        monthNamesShort: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
        dayNamesShort: ["søn", "man", "tir", "ons", "tor", "fre", "lør"],
        dayNames: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
        dayNamesMin: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
        weekHeader: "Uke",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.no),t.regional.no,t.regional.pl = {
        closeText: "Zamknij",
        prevText: "&#x3C;Poprzedni",
        nextText: "Następny&#x3E;",
        currentText: "Dziś",
        monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
        monthNamesShort: ["Sty", "Lu", "Mar", "Kw", "Maj", "Cze", "Lip", "Sie", "Wrz", "Pa", "Lis", "Gru"],
        dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
        dayNamesShort: ["Nie", "Pn", "Wt", "Śr", "Czw", "Pt", "So"],
        dayNamesMin: ["N", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
        weekHeader: "Tydz",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.pl),t.regional.pl,t.regional["pt-BR"] = {
        closeText: "Fechar",
        prevText: "&#x3C;Anterior",
        nextText: "Próximo&#x3E;",
        currentText: "Hoje",
        monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        weekHeader: "Sm",
        dateFormat: "dd/mm/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional["pt-BR"]),t.regional["pt-BR"],t.regional.pt = {
        closeText: "Fechar",
        prevText: "Anterior",
        nextText: "Seguinte",
        currentText: "Hoje",
        monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        weekHeader: "Sem",
        dateFormat: "dd/mm/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.pt),t.regional.pt,t.regional.rm = {
        closeText: "Serrar",
        prevText: "&#x3C;Suandant",
        nextText: "Precedent&#x3E;",
        currentText: "Actual",
        monthNames: ["Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"],
        monthNamesShort: ["Scha", "Fev", "Mar", "Avr", "Matg", "Zer", "Fan", "Avu", "Sett", "Oct", "Nov", "Dec"],
        dayNames: ["Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"],
        dayNamesShort: ["Dum", "Gli", "Mar", "Mes", "Gie", "Ven", "Som"],
        dayNamesMin: ["Du", "Gl", "Ma", "Me", "Gi", "Ve", "So"],
        weekHeader: "emna",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.rm),t.regional.rm,t.regional.ro = {
        closeText: "Închide",
        prevText: "&#xAB; Luna precedentă",
        nextText: "Luna următoare &#xBB;",
        currentText: "Azi",
        monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
        monthNamesShort: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayNames: ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
        dayNamesShort: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sâm"],
        dayNamesMin: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
        weekHeader: "Săpt",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.ro),t.regional.ro,t.regional.ru = {
        closeText: "Закрыть",
        prevText: "&#x3C;Пред",
        nextText: "След&#x3E;",
        currentText: "Сегодня",
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
        dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        weekHeader: "Нед",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.ru),t.regional.ru,t.regional.sk = {
        closeText: "Zavrieť",
        prevText: "&#x3C;Predchádzajúci",
        nextText: "Nasledujúci&#x3E;",
        currentText: "Dnes",
        monthNames: ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
        dayNames: ["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"],
        dayNamesShort: ["Ned", "Pon", "Uto", "Str", "Štv", "Pia", "Sob"],
        dayNamesMin: ["Ne", "Po", "Ut", "St", "Št", "Pia", "So"],
        weekHeader: "Ty",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.sk),t.regional.sk,t.regional.sl = {
        closeText: "Zapri",
        prevText: "&#x3C;Prejšnji",
        nextText: "Naslednji&#x3E;",
        currentText: "Trenutni",
        monthNames: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
        dayNames: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"],
        dayNamesShort: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
        dayNamesMin: ["Ne", "Po", "To", "Sr", "Če", "Pe", "So"],
        weekHeader: "Teden",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.sl),t.regional.sl,t.regional.sq = {
        closeText: "mbylle",
        prevText: "&#x3C;mbrapa",
        nextText: "Përpara&#x3E;",
        currentText: "sot",
        monthNames: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"],
        monthNamesShort: ["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Kor", "Gus", "Sht", "Tet", "Nën", "Dhj"],
        dayNames: ["E Diel", "E Hënë", "E Martë", "E Mërkurë", "E Enjte", "E Premte", "E Shtune"],
        dayNamesShort: ["Di", "Hë", "Ma", "Më", "En", "Pr", "Sh"],
        dayNamesMin: ["Di", "Hë", "Ma", "Më", "En", "Pr", "Sh"],
        weekHeader: "Ja",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.sq),t.regional.sq,t.regional["sr-SR"] = {
        closeText: "Zatvori",
        prevText: "&#x3C;",
        nextText: "&#x3E;",
        currentText: "Danas",
        monthNames: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
        dayNames: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"],
        dayNamesShort: ["Ned", "Pon", "Uto", "Sre", "Čet", "Pet", "Sub"],
        dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
        weekHeader: "Sed",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional["sr-SR"]),t.regional["sr-SR"],t.regional.sr = {
        closeText: "Затвори",
        prevText: "&#x3C;",
        nextText: "&#x3E;",
        currentText: "Данас",
        monthNames: ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
        monthNamesShort: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
        dayNames: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
        dayNamesShort: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
        dayNamesMin: ["Не", "По", "Ут", "Ср", "Че", "Пе", "Су"],
        weekHeader: "Сед",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.sr),t.regional.sr,t.regional.sv = {
        closeText: "Stäng",
        prevText: "&#xAB;Förra",
        nextText: "Nästa&#xBB;",
        currentText: "Idag",
        monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        dayNamesShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
        dayNames: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
        dayNamesMin: ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"],
        weekHeader: "Ve",
        dateFormat: "yy-mm-dd",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.sv),t.regional.sv,t.regional.se = {
        closeText: "Stäng",
        prevText: "&#xAB;Förra",
        nextText: "Nästa&#xBB;",
        currentText: "Idag",
        monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        dayNamesShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
        dayNames: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
        dayNamesMin: ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"],
        weekHeader: "Ve",
        dateFormat: "yy-mm-dd",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },t.setDefaults(t.regional.se),t.regional.se,t.regional.ta = {
        closeText: "மூடு",
        prevText: "முன்னையது",
        nextText: "அடுத்தது",
        currentText: "இன்று",
        monthNames: ["தை", "மாசி", "பங்குனி", "சித்திரை", "வைகாசி", "ஆனி", "ஆடி", "ஆவணி", "புரட்டாசி", "ஐப்பசி", "கார்த்திகை", "மார்கழி"],
        monthNamesShort: ["தை", "மாசி", "பங்", "சித்", "வைகா", "ஆனி", "ஆடி", "ஆவ", "புர", "ஐப்", "கார்", "மார்"],
        dayNames: ["ஞாயிற்றுக்கிழமை", "திங்கட்கிழமை", "செவ்வாய்க்கிழமை", "புதன்கிழமை", "வியாழக்கிழமை", "வெள்ளிக்கிழமை", "சனிக்கிழமை"],
        dayNamesShort: ["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"],
        dayNamesMin: ["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"],
        weekHeader: "Не",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },
    t.setDefaults(t.regional.ta),t.regional.ta,t.regional.th = {
        closeText: "ปิด",
        prevText: "&#xAB;&#xA0;ย้อน",
        nextText: "ถัดไป&#xA0;&#xBB;",
        currentText: "วันนี้",
        monthNames: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
        monthNamesShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
        dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
        dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
        dayNamesMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
        weekHeader: "Wk",
        dateFormat: "dd/mm/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },
    t.setDefaults(t.regional.th),t.regional.th,t.regional.tj = {
        closeText: "Идома",
        prevText: "&#x3c;Қафо",
        nextText: "Пеш&#x3e;",
        currentText: "Имрӯз",
        monthNames: ["Январ", "Феврал", "Март", "Апрел", "Май", "Июн", "Июл", "Август", "Сентябр", "Октябр", "Ноябр", "Декабр"],
        monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        dayNames: ["якшанбе", "душанбе", "сешанбе", "чоршанбе", "панҷшанбе", "ҷумъа", "шанбе"],
        dayNamesShort: ["якш", "душ", "сеш", "чор", "пан", "ҷум", "шан"],
        dayNamesMin: ["Як", "Дш", "Сш", "Чш", "Пш", "Ҷм", "Шн"],
        weekHeader: "Хф",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },
    t.setDefaults(t.regional.tj),t.regional.tj,t.regional.tr = {
        closeText: "kapat",
        prevText: "&#x3C;geri",
        nextText: "ileri&#x3e",
        currentText: "bugün",
        monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
        dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
        dayNamesShort: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
        dayNamesMin: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
        weekHeader: "Hf",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },
    t.setDefaults(t.regional.tr),t.regional.tr,t.regional.uk = {
        closeText: "Закрити",
        prevText: "&#x3C;",
        nextText: "&#x3E;",
        currentText: "Сьогодні",
        monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
        monthNamesShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
        dayNames: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"],
        dayNamesShort: ["нед", "пнд", "вів", "срд", "чтв", "птн", "сбт"],
        dayNamesMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        weekHeader: "Тиж",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },
    t.setDefaults(t.regional.uk),t.regional.uk,t.regional.vi = {
        closeText: "Đóng",
        prevText: "&#x3C;Trước",
        nextText: "Tiếp&#x3E;",
        currentText: "Hôm nay",
        monthNames: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"],
        monthNamesShort: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        dayNames: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
        dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        weekHeader: "Tu",
        dateFormat: "dd/mm/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    },
    t.setDefaults(t.regional.vi),t.regional.vi
});

},{}],10:[function(require,module,exports){
(function (global){
//define(function(require, exports, module) {
	var jQuery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
	
	/*!
	 * jQuery Form Plugin
	 * version: 3.45.0-2013.10.17
	 * Requires jQuery v1.5 or later
	 * Copyright (c) 2013 M. Alsup
	 * Examples and documentation at: http://malsup.com/jquery/form/
	 * Project repository: https://github.com/malsup/form
	 * Dual licensed under the MIT and GPL licenses.
	 * https://github.com/malsup/form#copyright-and-license
	 */
	/*global ActiveXObject */
	;(function($) {
	"use strict";

	/*
		Usage Note:
		-----------
		Do not use both ajaxSubmit and ajaxForm on the same form.  These
		functions are mutually exclusive.  Use ajaxSubmit if you want
		to bind your own submit handler to the form.  For example,

		$(document).ready(function() {
			$('#myForm').on('submit', function(e) {
				e.preventDefault(); // <-- important
				$(this).ajaxSubmit({
					target: '#output'
				});
			});
		});

		Use ajaxForm when you want the plugin to manage all the event binding
		for you.  For example,

		$(document).ready(function() {
			$('#myForm').ajaxForm({
				target: '#output'
			});
		});

		You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
		form does not have to exist when you invoke ajaxForm:

		$('#myForm').ajaxForm({
			delegation: true,
			target: '#output'
		});

		When using ajaxForm, the ajaxSubmit function will be invoked for you
		at the appropriate time.
	*/

	/**
	 * Feature detection
	 */
	var feature = {};
	feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
	feature.formdata = window.FormData !== undefined;

	var hasProp = !!$.fn.prop;

	// attr2 uses prop when it can but checks the return type for
	// an expected string.  this accounts for the case where a form 
	// contains inputs with names like "action" or "method"; in those
	// cases "prop" returns the element
	$.fn.attr2 = function() {
		if ( ! hasProp )
			return this.attr.apply(this, arguments);
		var val = this.prop.apply(this, arguments);
		if ( ( val && val.jquery ) || typeof val === 'string' )
			return val;
		return this.attr.apply(this, arguments);
	};

	/**
	 * ajaxSubmit() provides a mechanism for immediately submitting
	 * an HTML form using AJAX.
	 */
	$.fn.ajaxSubmit = function(options) {
		/*jshint scripturl:true */

		// fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
		if (!this.length) {
			log('ajaxSubmit: skipping submit process - no element selected');
			return this;
		}

		var method, action, url, $form = this;

		if (typeof options == 'function') {
			options = { success: options };
		}
		else if ( options === undefined ) {
			options = {};
		}

		method = options.type || this.attr2('method');
		action = options.url  || this.attr2('action');

		url = (typeof action === 'string') ? $.trim(action) : '';
		url = url || window.location.href || '';
		if (url) {
			// clean url (don't include hash vaue)
			url = (url.match(/^([^#]+)/)||[])[1];
		}

		options = $.extend(true, {
			url:  url,
			success: $.ajaxSettings.success,
			type: method || $.ajaxSettings.type,
			iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
		}, options);

		// hook for manipulating the form data before it is extracted;
		// convenient for use with rich editors like tinyMCE or FCKEditor
		var veto = {};
		this.trigger('form-pre-serialize', [this, options, veto]);
		if (veto.veto) {
			log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
			return this;
		}

		// provide opportunity to alter form data before it is serialized
		if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
			log('ajaxSubmit: submit aborted via beforeSerialize callback');
			return this;
		}

		var traditional = options.traditional;
		if ( traditional === undefined ) {
			traditional = $.ajaxSettings.traditional;
		}

		var elements = [];
		var qx, a = this.formToArray(options.semantic, elements);
		if (options.data) {
			options.extraData = options.data;
			qx = $.param(options.data, traditional);
		}

		// give pre-submit callback an opportunity to abort the submit
		if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
			log('ajaxSubmit: submit aborted via beforeSubmit callback');
			return this;
		}

		// fire vetoable 'validate' event
		this.trigger('form-submit-validate', [a, this, options, veto]);
		if (veto.veto) {
			log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
			return this;
		}

		var q = $.param(a, traditional);
		if (qx) {
			q = ( q ? (q + '&' + qx) : qx );
		}
		if (options.type.toUpperCase() == 'GET') {
			options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
			options.data = null;  // data is null for 'get'
		}
		else {
			options.data = q; // data is the query string for 'post'
		}

		var callbacks = [];
		if (options.resetForm) {
			callbacks.push(function() { $form.resetForm(); });
		}
		if (options.clearForm) {
			callbacks.push(function() { $form.clearForm(options.includeHidden); });
		}

		// perform a load on the target only if dataType is not provided
		if (!options.dataType && options.target) {
			var oldSuccess = options.success || function(){};
			callbacks.push(function(data) {
				var fn = options.replaceTarget ? 'replaceWith' : 'html';
				$(options.target)[fn](data).each(oldSuccess, arguments);
			});
		}
		else if (options.success) {
			callbacks.push(options.success);
		}

		options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
			var context = options.context || this ;    // jQuery 1.4+ supports scope context
			for (var i=0, max=callbacks.length; i < max; i++) {
				callbacks[i].apply(context, [data, status, xhr || $form, $form]);
			}
		};

		if (options.error) {
			var oldError = options.error;
			options.error = function(xhr, status, error) {
				var context = options.context || this;
				oldError.apply(context, [xhr, status, error, $form]);
			};
		}

		 if (options.complete) {
			var oldComplete = options.complete;
			options.complete = function(xhr, status) {
				var context = options.context || this;
				oldComplete.apply(context, [xhr, status, $form]);
			};
		}

		// are there files to upload?

		// [value] (issue #113), also see comment:
		// https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
		var fileInputs = $('input[type=file]:enabled', this).filter(function() { return $(this).val() !== ''; });

		var hasFileInputs = fileInputs.length > 0;
		var mp = 'multipart/form-data';
		var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

		var fileAPI = feature.fileapi && feature.formdata;
		log("fileAPI :" + fileAPI);
		var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

		var jqxhr;

		// options.iframe allows user to force iframe mode
		// 06-NOV-09: now defaulting to iframe mode if file input is detected
		if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
			// hack to fix Safari hang (thanks to Tim Molendijk for this)
			// see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
			if (options.closeKeepAlive) {
				$.get(options.closeKeepAlive, function() {
					jqxhr = fileUploadIframe(a);
				});
			}
			else {
				jqxhr = fileUploadIframe(a);
			}
		}
		else if ((hasFileInputs || multipart) && fileAPI) {
			jqxhr = fileUploadXhr(a);
		}
		else {
			jqxhr = $.ajax(options);
		}

		$form.removeData('jqxhr').data('jqxhr', jqxhr);

		// clear element array
		for (var k=0; k < elements.length; k++)
			elements[k] = null;

		// fire 'notify' event
		this.trigger('form-submit-notify', [this, options]);
		return this;

		// utility fn for deep serialization
		function deepSerialize(extraData){
			var serialized = $.param(extraData, options.traditional).split('&');
			var len = serialized.length;
			var result = [];
			var i, part;
			for (i=0; i < len; i++) {
				// #252; undo param space replacement
				serialized[i] = serialized[i].replace(/\+/g,' ');
				part = serialized[i].split('=');
				// #278; use array instead of object storage, favoring array serializations
				result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
			}
			return result;
		}

		 // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
		function fileUploadXhr(a) {
			var formdata = new FormData();

			for (var i=0; i < a.length; i++) {
				formdata.append(a[i].name, a[i].value);
			}

			if (options.extraData) {
				var serializedData = deepSerialize(options.extraData);
				for (i=0; i < serializedData.length; i++)
					if (serializedData[i])
						formdata.append(serializedData[i][0], serializedData[i][1]);
			}

			options.data = null;

			var s = $.extend(true, {}, $.ajaxSettings, options, {
				contentType: false,
				processData: false,
				cache: false,
				type: method || 'POST'
			});

			if (options.uploadProgress) {
				// workaround because jqXHR does not expose upload property
				s.xhr = function() {
					var xhr = $.ajaxSettings.xhr();
					if (xhr.upload) {
						xhr.upload.addEventListener('progress', function(event) {
							var percent = 0;
							var position = event.loaded || event.position; /*event.position is deprecated*/
							var total = event.total;
							if (event.lengthComputable) {
								percent = Math.ceil(position / total * 100);
							}
							options.uploadProgress(event, position, total, percent);
						}, false);
					}
					return xhr;
				};
			}

			s.data = null;
			var beforeSend = s.beforeSend;
			s.beforeSend = function(xhr, o) {
				//Send FormData() provided by user
				if (options.formData)
					o.data = options.formData;
				else
					o.data = formdata;
				if(beforeSend)
					beforeSend.call(this, xhr, o);
			};
			return $.ajax(s);
		}

		// private function for handling file uploads (hat tip to YAHOO!)
		function fileUploadIframe(a) {
			var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
			var deferred = $.Deferred();

			// #341
			deferred.abort = function(status) {
				xhr.abort(status);
			};

			if (a) {
				// ensure that every serialized input is still enabled
				for (i=0; i < elements.length; i++) {
					el = $(elements[i]);
					if ( hasProp )
						el.prop('disabled', false);
					else
						el.removeAttr('disabled');
				}
			}

			s = $.extend(true, {}, $.ajaxSettings, options);
			s.context = s.context || s;
			id = 'jqFormIO' + (new Date().getTime());
			if (s.iframeTarget) {
				$io = $(s.iframeTarget);
				n = $io.attr2('name');
				if (!n)
					 $io.attr2('name', id);
				else
					id = n;
			}
			else {
				$io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
				$io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
			}
			io = $io[0];


			xhr = { // mock object
				aborted: 0,
				responseText: null,
				responseXML: null,
				status: 0,
				statusText: 'n/a',
				getAllResponseHeaders: function() {},
				getResponseHeader: function() {},
				setRequestHeader: function() {},
				abort: function(status) {
					var e = (status === 'timeout' ? 'timeout' : 'aborted');
					log('aborting upload... ' + e);
					this.aborted = 1;

					try { // #214, #257
						if (io.contentWindow.document.execCommand) {
							io.contentWindow.document.execCommand('Stop');
						}
					}
					catch(ignore) {}

					$io.attr('src', s.iframeSrc); // abort op in progress
					xhr.error = e;
					if (s.error)
						s.error.call(s.context, xhr, e, status);
					if (g)
						$.event.trigger("ajaxError", [xhr, s, e]);
					if (s.complete)
						s.complete.call(s.context, xhr, e);
				}
			};

			g = s.global;
			// trigger ajax global events so that activity/block indicators work like normal
			if (g && 0 === $.active++) {
				$.event.trigger("ajaxStart");
			}
			if (g) {
				$.event.trigger("ajaxSend", [xhr, s]);
			}

			if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
				if (s.global) {
					$.active--;
				}
				deferred.reject();
				return deferred;
			}
			if (xhr.aborted) {
				deferred.reject();
				return deferred;
			}

			// add submitting element to data if we know it
			sub = form.clk;
			if (sub) {
				n = sub.name;
				if (n && !sub.disabled) {
					s.extraData = s.extraData || {};
					s.extraData[n] = sub.value;
					if (sub.type == "image") {
						s.extraData[n+'.x'] = form.clk_x;
						s.extraData[n+'.y'] = form.clk_y;
					}
				}
			}

			var CLIENT_TIMEOUT_ABORT = 1;
			var SERVER_ABORT = 2;
					
			function getDoc(frame) {
				/* it looks like contentWindow or contentDocument do not
				 * carry the protocol property in ie8, when running under ssl
				 * frame.document is the only valid response document, since
				 * the protocol is know but not on the other two objects. strange?
				 * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
				 */
				
				var doc = null;
				
				// IE8 cascading access check
				try {
					if (frame.contentWindow) {
						doc = frame.contentWindow.document;
					}
				} catch(err) {
					// IE8 access denied under ssl & missing protocol
					log('cannot get iframe.contentWindow document: ' + err);
				}

				if (doc) { // successful getting content
					return doc;
				}

				try { // simply checking may throw in ie8 under ssl or mismatched protocol
					doc = frame.contentDocument ? frame.contentDocument : frame.document;
				} catch(err) {
					// last attempt
					log('cannot get iframe.contentDocument: ' + err);
					doc = frame.document;
				}
				return doc;
			}

			// Rails CSRF hack (thanks to Yvan Barthelemy)
			var csrf_token = $('meta[name=csrf-token]').attr('content');
			var csrf_param = $('meta[name=csrf-param]').attr('content');
			if (csrf_param && csrf_token) {
				s.extraData = s.extraData || {};
				s.extraData[csrf_param] = csrf_token;
			}

			// take a breath so that pending repaints get some cpu time before the upload starts
			function doSubmit() {
				// make sure form attrs are set
				var t = $form.attr2('target'), a = $form.attr2('action');

				// update form attrs in IE friendly way
				form.setAttribute('target',id);
				if (!method || /post/i.test(method) ) {
					form.setAttribute('method', 'POST');
				}
				if (a != s.url) {
					form.setAttribute('action', s.url);
				}

				// ie borks in some cases when setting encoding
				if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
					$form.attr({
						encoding: 'multipart/form-data',
						enctype:  'multipart/form-data'
					});
				}

				// support timout
				if (s.timeout) {
					timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
				}

				// look for server aborts
				function checkState() {
					try {
						var state = getDoc(io).readyState;
						log('state = ' + state);
						if (state && state.toLowerCase() == 'uninitialized')
							setTimeout(checkState,50);
					}
					catch(e) {
						log('Server abort: ' , e, ' (', e.name, ')');
						cb(SERVER_ABORT);
						if (timeoutHandle)
							clearTimeout(timeoutHandle);
						timeoutHandle = undefined;
					}
				}

				// add "extra" data to form if provided in options
				var extraInputs = [];
				try {
					if (s.extraData) {
						for (var n in s.extraData) {
							if (s.extraData.hasOwnProperty(n)) {
							   // if using the $.param format that allows for multiple values with the same name
							   if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
								   extraInputs.push(
								   $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
									   .appendTo(form)[0]);
							   } else {
								   extraInputs.push(
								   $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
									   .appendTo(form)[0]);
							   }
							}
						}
					}

					if (!s.iframeTarget) {
						// add iframe to doc and submit the form
						$io.appendTo('body');
					}
					if (io.attachEvent)
						io.attachEvent('onload', cb);
					else
						io.addEventListener('load', cb, false);
					setTimeout(checkState,15);

					try {
						form.submit();
					} catch(err) {
						// just in case form has element with name/id of 'submit'
						var submitFn = document.createElement('form').submit;
						submitFn.apply(form);
					}
				}
				finally {
					// reset attrs and remove "extra" input elements
					form.setAttribute('action',a);
					if(t) {
						form.setAttribute('target', t);
					} else {
						$form.removeAttr('target');
					}
					$(extraInputs).remove();
				}
			}

			if (s.forceSync) {
				doSubmit();
			}
			else {
				setTimeout(doSubmit, 10); // this lets dom updates render
			}

			var data, doc, domCheckCount = 50, callbackProcessed;

			function cb(e) {
				if (xhr.aborted || callbackProcessed) {
					return;
				}
				
				doc = getDoc(io);
				if(!doc) {
					log('cannot access response document');
					e = SERVER_ABORT;
				}
				if (e === CLIENT_TIMEOUT_ABORT && xhr) {
					xhr.abort('timeout');
					deferred.reject(xhr, 'timeout');
					return;
				}
				else if (e == SERVER_ABORT && xhr) {
					xhr.abort('server abort');
					deferred.reject(xhr, 'error', 'server abort');
					return;
				}

				if (!doc || doc.location.href == s.iframeSrc) {
					// response not received yet
					if (!timedOut)
						return;
				}
				if (io.detachEvent)
					io.detachEvent('onload', cb);
				else
					io.removeEventListener('load', cb, false);

				var status = 'success', errMsg;
				try {
					if (timedOut) {
						throw 'timeout';
					}

					var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
					log('isXml='+isXml);
					if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
						if (--domCheckCount) {
							// in some browsers (Opera) the iframe DOM is not always traversable when
							// the onload callback fires, so we loop a bit to accommodate
							log('requeing onLoad callback, DOM not available');
							setTimeout(cb, 250);
							return;
						}
						// let this fall through because server response could be an empty document
						//log('Could not access iframe DOM after mutiple tries.');
						//throw 'DOMException: not available';
					}

					//log('response detected');
					var docRoot = doc.body ? doc.body : doc.documentElement;
					xhr.responseText = docRoot ? docRoot.innerHTML : null;
					xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
					if (isXml)
						s.dataType = 'xml';
					xhr.getResponseHeader = function(header){
						var headers = {'content-type': s.dataType};
						return headers[header.toLowerCase()];
					};
					// support for XHR 'status' & 'statusText' emulation :
					if (docRoot) {
						xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
						xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
					}

					var dt = (s.dataType || '').toLowerCase();
					var scr = /(json|script|text)/.test(dt);
					if (scr || s.textarea) {
						// see if user embedded response in textarea
						var ta = doc.getElementsByTagName('textarea')[0];
						if (ta) {
							xhr.responseText = ta.value;
							// support for XHR 'status' & 'statusText' emulation :
							xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
							xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
						}
						else if (scr) {
							// account for browsers injecting pre around json response
							var pre = doc.getElementsByTagName('pre')[0];
							var b = doc.getElementsByTagName('body')[0];
							if (pre) {
								xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
							}
							else if (b) {
								xhr.responseText = b.textContent ? b.textContent : b.innerText;
							}
						}
					}
					else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
						xhr.responseXML = toXml(xhr.responseText);
					}

					try {
						data = httpData(xhr, dt, s);
					}
					catch (err) {
						status = 'parsererror';
						xhr.error = errMsg = (err || status);
					}
				}
				catch (err) {
					log('error caught: ',err);
					status = 'error';
					xhr.error = errMsg = (err || status);
				}

				if (xhr.aborted) {
					log('upload aborted');
					status = null;
				}

				if (xhr.status) { // we've set xhr.status
					status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
				}

				// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
				if (status === 'success') {
					if (s.success)
						s.success.call(s.context, data, 'success', xhr);
					deferred.resolve(xhr.responseText, 'success', xhr);
					if (g)
						$.event.trigger("ajaxSuccess", [xhr, s]);
				}
				else if (status) {
					if (errMsg === undefined)
						errMsg = xhr.statusText;
					if (s.error)
						s.error.call(s.context, xhr, status, errMsg);
					deferred.reject(xhr, 'error', errMsg);
					if (g)
						$.event.trigger("ajaxError", [xhr, s, errMsg]);
				}

				if (g)
					$.event.trigger("ajaxComplete", [xhr, s]);

				if (g && ! --$.active) {
					$.event.trigger("ajaxStop");
				}

				if (s.complete)
					s.complete.call(s.context, xhr, status);

				callbackProcessed = true;
				if (s.timeout)
					clearTimeout(timeoutHandle);

				// clean up
				setTimeout(function() {
					if (!s.iframeTarget)
						$io.remove();
					else  //adding else to clean up existing iframe response.
						$io.attr('src', s.iframeSrc);
					xhr.responseXML = null;
				}, 100);
			}

			var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
				if (window.ActiveXObject) {
					doc = new ActiveXObject('Microsoft.XMLDOM');
					doc.async = 'false';
					doc.loadXML(s);
				}
				else {
					doc = (new DOMParser()).parseFromString(s, 'text/xml');
				}
				return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
			};
			var parseJSON = $.parseJSON || function(s) {
				/*jslint evil:true */
				return window['eval']('(' + s + ')');
			};

			var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

				var ct = xhr.getResponseHeader('content-type') || '',
					xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
					data = xml ? xhr.responseXML : xhr.responseText;

				if (xml && data.documentElement.nodeName === 'parsererror') {
					if ($.error)
						$.error('parsererror');
				}
				if (s && s.dataFilter) {
					data = s.dataFilter(data, type);
				}
				if (typeof data === 'string') {
					if (type === 'json' || !type && ct.indexOf('json') >= 0) {
						data = parseJSON(data);
					} else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
						$.globalEval(data);
					}
				}
				return data;
			};

			return deferred;
		}
	};

	/**
	 * ajaxForm() provides a mechanism for fully automating form submission.
	 *
	 * The advantages of using this method instead of ajaxSubmit() are:
	 *
	 * 1: This method will include coordinates for <input type="image" /> elements (if the element
	 *    is used to submit the form).
	 * 2. This method will include the submit element's name/value data (for the element that was
	 *    used to submit the form).
	 * 3. This method binds the submit() method to the form for you.
	 *
	 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
	 * passes the options argument along after properly binding events for submit elements and
	 * the form itself.
	 */
	$.fn.ajaxForm = function(options) {
		options = options || {};
		options.delegation = options.delegation && $.isFunction($.fn.on);

		// in jQuery 1.3+ we can fix mistakes with the ready state
		if (!options.delegation && this.length === 0) {
			var o = { s: this.selector, c: this.context };
			if (!$.isReady && o.s) {
				log('DOM not ready, queuing ajaxForm');
				$(function() {
					$(o.s,o.c).ajaxForm(options);
				});
				return this;
			}
			// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
			log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
			return this;
		}

		if ( options.delegation ) {
			$(document)
				.off('submit.form-plugin', this.selector, doAjaxSubmit)
				.off('click.form-plugin', this.selector, captureSubmittingElement)
				.on('submit.form-plugin', this.selector, options, doAjaxSubmit)
				.on('click.form-plugin', this.selector, options, captureSubmittingElement);
			return this;
		}

		return this.ajaxFormUnbind()
			.bind('submit.form-plugin', options, doAjaxSubmit)
			.bind('click.form-plugin', options, captureSubmittingElement);
	};

	// private event handlers
	function doAjaxSubmit(e) {
		/*jshint validthis:true */
		var options = e.data;
		if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
			e.preventDefault();
			$(e.target).ajaxSubmit(options); // #365
		}
	}

	function captureSubmittingElement(e) {
		/*jshint validthis:true */
		var target = e.target;
		var $el = $(target);
		if (!($el.is("[type=submit],[type=image]"))) {
			// is this a child element of the submit el?  (ex: a span within a button)
			var t = $el.closest('[type=submit]');
			if (t.length === 0) {
				return;
			}
			target = t[0];
		}
		var form = this;
		form.clk = target;
		if (target.type == 'image') {
			if (e.offsetX !== undefined) {
				form.clk_x = e.offsetX;
				form.clk_y = e.offsetY;
			} else if (typeof $.fn.offset == 'function') {
				var offset = $el.offset();
				form.clk_x = e.pageX - offset.left;
				form.clk_y = e.pageY - offset.top;
			} else {
				form.clk_x = e.pageX - target.offsetLeft;
				form.clk_y = e.pageY - target.offsetTop;
			}
		}
		// clear form vars
		setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
	}


	// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
	$.fn.ajaxFormUnbind = function() {
		return this.unbind('submit.form-plugin click.form-plugin');
	};

	/**
	 * formToArray() gathers form element data into an array of objects that can
	 * be passed to any of the following ajax functions: $.get, $.post, or load.
	 * Each object in the array has both a 'name' and 'value' property.  An example of
	 * an array for a simple login form might be:
	 *
	 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
	 *
	 * It is this array that is passed to pre-submit callback functions provided to the
	 * ajaxSubmit() and ajaxForm() methods.
	 */
	$.fn.formToArray = function(semantic, elements) {
		var a = [];
		if (this.length === 0) {
			return a;
		}

		var form = this[0];
		var els = semantic ? form.getElementsByTagName('*') : form.elements;
		if (!els) {
			return a;
		}

		var i,j,n,v,el,max,jmax;
		for(i=0, max=els.length; i < max; i++) {
			el = els[i];
			n = el.name;
			if (!n || el.disabled) {
				continue;
			}

			if (semantic && form.clk && el.type == "image") {
				// handle image inputs on the fly when semantic == true
				if(form.clk == el) {
					a.push({name: n, value: $(el).val(), type: el.type });
					a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
				}
				continue;
			}

			v = $.fieldValue(el, true);
			if (v && v.constructor == Array) {
				if (elements)
					elements.push(el);
				for(j=0, jmax=v.length; j < jmax; j++) {
					a.push({name: n, value: v[j]});
				}
			}
			else if (feature.fileapi && el.type == 'file') {
				if (elements)
					elements.push(el);
				var files = el.files;
				if (files.length) {
					for (j=0; j < files.length; j++) {
						a.push({name: n, value: files[j], type: el.type});
					}
				}
				else {
					// #180
					a.push({ name: n, value: '', type: el.type });
				}
			}
			else if (v !== null && typeof v != 'undefined') {
				if (elements)
					elements.push(el);
				a.push({name: n, value: v, type: el.type, required: el.required});
			}
		}

		if (!semantic && form.clk) {
			// input type=='image' are not found in elements array! handle it here
			var $input = $(form.clk), input = $input[0];
			n = input.name;
			if (n && !input.disabled && input.type == 'image') {
				a.push({name: n, value: $input.val()});
				a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
			}
		}
		return a;
	};

	/**
	 * Serializes form data into a 'submittable' string. This method will return a string
	 * in the format: name1=value1&amp;name2=value2
	 */
	$.fn.formSerialize = function(semantic) {
		//hand off to jQuery.param for proper encoding
		return $.param(this.formToArray(semantic));
	};

	/**
	 * Serializes all field elements in the jQuery object into a query string.
	 * This method will return a string in the format: name1=value1&amp;name2=value2
	 */
	$.fn.fieldSerialize = function(successful) {
		var a = [];
		this.each(function() {
			var n = this.name;
			if (!n) {
				return;
			}
			var v = $.fieldValue(this, successful);
			if (v && v.constructor == Array) {
				for (var i=0,max=v.length; i < max; i++) {
					a.push({name: n, value: v[i]});
				}
			}
			else if (v !== null && typeof v != 'undefined') {
				a.push({name: this.name, value: v});
			}
		});
		//hand off to jQuery.param for proper encoding
		return $.param(a);
	};

	/**
	 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
	 *
	 *  <form><fieldset>
	 *      <input name="A" type="text" />
	 *      <input name="A" type="text" />
	 *      <input name="B" type="checkbox" value="B1" />
	 *      <input name="B" type="checkbox" value="B2"/>
	 *      <input name="C" type="radio" value="C1" />
	 *      <input name="C" type="radio" value="C2" />
	 *  </fieldset></form>
	 *
	 *  var v = $('input[type=text]').fieldValue();
	 *  // if no values are entered into the text inputs
	 *  v == ['','']
	 *  // if values entered into the text inputs are 'foo' and 'bar'
	 *  v == ['foo','bar']
	 *
	 *  var v = $('input[type=checkbox]').fieldValue();
	 *  // if neither checkbox is checked
	 *  v === undefined
	 *  // if both checkboxes are checked
	 *  v == ['B1', 'B2']
	 *
	 *  var v = $('input[type=radio]').fieldValue();
	 *  // if neither radio is checked
	 *  v === undefined
	 *  // if first radio is checked
	 *  v == ['C1']
	 *
	 * The successful argument controls whether or not the field element must be 'successful'
	 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
	 * The default value of the successful argument is true.  If this value is false the value(s)
	 * for each element is returned.
	 *
	 * Note: This method *always* returns an array.  If no valid value can be determined the
	 *    array will be empty, otherwise it will contain one or more values.
	 */
	$.fn.fieldValue = function(successful) {
		for (var val=[], i=0, max=this.length; i < max; i++) {
			var el = this[i];
			var v = $.fieldValue(el, successful);
			if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
				continue;
			}
			if (v.constructor == Array)
				$.merge(val, v);
			else
				val.push(v);
		}
		return val;
	};

	/**
	 * Returns the value of the field element.
	 */
	$.fieldValue = function(el, successful) {
		var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
		if (successful === undefined) {
			successful = true;
		}

		if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
			(t == 'checkbox' || t == 'radio') && !el.checked ||
			(t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
			tag == 'select' && el.selectedIndex == -1)) {
				return null;
		}

		if (tag == 'select') {
			var index = el.selectedIndex;
			if (index < 0) {
				return null;
			}
			var a = [], ops = el.options;
			var one = (t == 'select-one');
			var max = (one ? index+1 : ops.length);
			for(var i=(one ? index : 0); i < max; i++) {
				var op = ops[i];
				if (op.selected) {
					var v = op.value;
					if (!v) { // extra pain for IE...
						v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
					}
					if (one) {
						return v;
					}
					a.push(v);
				}
			}
			return a;
		}
		return $(el).val();
	};

	/**
	 * Clears the form data.  Takes the following actions on the form's input fields:
	 *  - input text fields will have their 'value' property set to the empty string
	 *  - select elements will have their 'selectedIndex' property set to -1
	 *  - checkbox and radio inputs will have their 'checked' property set to false
	 *  - inputs of type submit, button, reset, and hidden will *not* be effected
	 *  - button elements will *not* be effected
	 */
	$.fn.clearForm = function(includeHidden) {
		return this.each(function() {
			$('input,select,textarea', this).clearFields(includeHidden);
		});
	};

	/**
	 * Clears the selected form elements.
	 */
	$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
		var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
		return this.each(function() {
			var t = this.type, tag = this.tagName.toLowerCase();
			if (re.test(t) || tag == 'textarea') {
				this.value = '';
			}
			else if (t == 'checkbox' || t == 'radio') {
				this.checked = false;
			}
			else if (tag == 'select') {
				this.selectedIndex = -1;
			}
			else if (t == "file") {
				if (/MSIE/.test(navigator.userAgent)) {
					$(this).replaceWith($(this).clone(true));
				} else {
					$(this).val('');
				}
			}
			else if (includeHidden) {
				// includeHidden can be the value true, or it can be a selector string
				// indicating a special test; for example:
				//  $('#myForm').clearForm('.special:hidden')
				// the above would clean hidden inputs that have the class of 'special'
				if ( (includeHidden === true && /hidden/.test(t)) ||
					 (typeof includeHidden == 'string' && $(this).is(includeHidden)) )
					this.value = '';
			}
		});
	};

	/**
	 * Resets the form data.  Causes all form elements to be reset to their original value.
	 */
	$.fn.resetForm = function() {
		return this.each(function() {
			// guard against an input with the name of 'reset'
			// note that IE reports the reset function as an 'object'
			if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
				this.reset();
			}
		});
	};

	/**
	 * Enables or disables any matching elements.
	 */
	$.fn.enable = function(b) {
		if (b === undefined) {
			b = true;
		}
		return this.each(function() {
			this.disabled = !b;
		});
	};

	/**
	 * Checks/unchecks any matching checkboxes or radio buttons and
	 * selects/deselects and matching option elements.
	 */
	$.fn.selected = function(select) {
		if (select === undefined) {
			select = true;
		}
		return this.each(function() {
			var t = this.type;
			if (t == 'checkbox' || t == 'radio') {
				this.checked = select;
			}
			else if (this.tagName.toLowerCase() == 'option') {
				var $sel = $(this).parent('select');
				if (select && $sel[0] && $sel[0].type == 'select-one') {
					// deselect all other options
					$sel.find('option').selected(false);
				}
				this.selected = select;
			}
		});
	};

	// expose debug var
	$.fn.ajaxSubmit.debug = false;

	// helper fn for console logging
	function log() {
		if (!$.fn.ajaxSubmit.debug)
			return;
		var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
		if (window.console && window.console.log) {
			window.console.log(msg);
		}
		else if (window.opera && window.opera.postError) {
			window.opera.postError(msg);
		}
	}

	})( (typeof(jQuery) != 'undefined') ? jQuery : window.Zepto );

//});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvbGliL2pxdWVyeUZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvL2RlZmluZShmdW5jdGlvbihyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHtcclxuXHR2YXIgalF1ZXJ5ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG5cdFxyXG5cdC8qIVxyXG5cdCAqIGpRdWVyeSBGb3JtIFBsdWdpblxyXG5cdCAqIHZlcnNpb246IDMuNDUuMC0yMDEzLjEwLjE3XHJcblx0ICogUmVxdWlyZXMgalF1ZXJ5IHYxLjUgb3IgbGF0ZXJcclxuXHQgKiBDb3B5cmlnaHQgKGMpIDIwMTMgTS4gQWxzdXBcclxuXHQgKiBFeGFtcGxlcyBhbmQgZG9jdW1lbnRhdGlvbiBhdDogaHR0cDovL21hbHN1cC5jb20vanF1ZXJ5L2Zvcm0vXHJcblx0ICogUHJvamVjdCByZXBvc2l0b3J5OiBodHRwczovL2dpdGh1Yi5jb20vbWFsc3VwL2Zvcm1cclxuXHQgKiBEdWFsIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgYW5kIEdQTCBsaWNlbnNlcy5cclxuXHQgKiBodHRwczovL2dpdGh1Yi5jb20vbWFsc3VwL2Zvcm0jY29weXJpZ2h0LWFuZC1saWNlbnNlXHJcblx0ICovXHJcblx0LypnbG9iYWwgQWN0aXZlWE9iamVjdCAqL1xyXG5cdDsoZnVuY3Rpb24oJCkge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHQvKlxyXG5cdFx0VXNhZ2UgTm90ZTpcclxuXHRcdC0tLS0tLS0tLS0tXHJcblx0XHREbyBub3QgdXNlIGJvdGggYWpheFN1Ym1pdCBhbmQgYWpheEZvcm0gb24gdGhlIHNhbWUgZm9ybS4gIFRoZXNlXHJcblx0XHRmdW5jdGlvbnMgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZS4gIFVzZSBhamF4U3VibWl0IGlmIHlvdSB3YW50XHJcblx0XHR0byBiaW5kIHlvdXIgb3duIHN1Ym1pdCBoYW5kbGVyIHRvIHRoZSBmb3JtLiAgRm9yIGV4YW1wbGUsXHJcblxyXG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJyNteUZvcm0nKS5vbignc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTsgLy8gPC0tIGltcG9ydGFudFxyXG5cdFx0XHRcdCQodGhpcykuYWpheFN1Ym1pdCh7XHJcblx0XHRcdFx0XHR0YXJnZXQ6ICcjb3V0cHV0J1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdFVzZSBhamF4Rm9ybSB3aGVuIHlvdSB3YW50IHRoZSBwbHVnaW4gdG8gbWFuYWdlIGFsbCB0aGUgZXZlbnQgYmluZGluZ1xyXG5cdFx0Zm9yIHlvdS4gIEZvciBleGFtcGxlLFxyXG5cclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcjbXlGb3JtJykuYWpheEZvcm0oe1xyXG5cdFx0XHRcdHRhcmdldDogJyNvdXRwdXQnXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0WW91IGNhbiBhbHNvIHVzZSBhamF4Rm9ybSB3aXRoIGRlbGVnYXRpb24gKHJlcXVpcmVzIGpRdWVyeSB2MS43KyksIHNvIHRoZVxyXG5cdFx0Zm9ybSBkb2VzIG5vdCBoYXZlIHRvIGV4aXN0IHdoZW4geW91IGludm9rZSBhamF4Rm9ybTpcclxuXHJcblx0XHQkKCcjbXlGb3JtJykuYWpheEZvcm0oe1xyXG5cdFx0XHRkZWxlZ2F0aW9uOiB0cnVlLFxyXG5cdFx0XHR0YXJnZXQ6ICcjb3V0cHV0J1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0V2hlbiB1c2luZyBhamF4Rm9ybSwgdGhlIGFqYXhTdWJtaXQgZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIGZvciB5b3VcclxuXHRcdGF0IHRoZSBhcHByb3ByaWF0ZSB0aW1lLlxyXG5cdCovXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZlYXR1cmUgZGV0ZWN0aW9uXHJcblx0ICovXHJcblx0dmFyIGZlYXR1cmUgPSB7fTtcclxuXHRmZWF0dXJlLmZpbGVhcGkgPSAkKFwiPGlucHV0IHR5cGU9J2ZpbGUnLz5cIikuZ2V0KDApLmZpbGVzICE9PSB1bmRlZmluZWQ7XHJcblx0ZmVhdHVyZS5mb3JtZGF0YSA9IHdpbmRvdy5Gb3JtRGF0YSAhPT0gdW5kZWZpbmVkO1xyXG5cclxuXHR2YXIgaGFzUHJvcCA9ICEhJC5mbi5wcm9wO1xyXG5cclxuXHQvLyBhdHRyMiB1c2VzIHByb3Agd2hlbiBpdCBjYW4gYnV0IGNoZWNrcyB0aGUgcmV0dXJuIHR5cGUgZm9yXHJcblx0Ly8gYW4gZXhwZWN0ZWQgc3RyaW5nLiAgdGhpcyBhY2NvdW50cyBmb3IgdGhlIGNhc2Ugd2hlcmUgYSBmb3JtIFxyXG5cdC8vIGNvbnRhaW5zIGlucHV0cyB3aXRoIG5hbWVzIGxpa2UgXCJhY3Rpb25cIiBvciBcIm1ldGhvZFwiOyBpbiB0aG9zZVxyXG5cdC8vIGNhc2VzIFwicHJvcFwiIHJldHVybnMgdGhlIGVsZW1lbnRcclxuXHQkLmZuLmF0dHIyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoICEgaGFzUHJvcCApXHJcblx0XHRcdHJldHVybiB0aGlzLmF0dHIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdHZhciB2YWwgPSB0aGlzLnByb3AuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdGlmICggKCB2YWwgJiYgdmFsLmpxdWVyeSApIHx8IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIClcclxuXHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdHJldHVybiB0aGlzLmF0dHIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBhamF4U3VibWl0KCkgcHJvdmlkZXMgYSBtZWNoYW5pc20gZm9yIGltbWVkaWF0ZWx5IHN1Ym1pdHRpbmdcclxuXHQgKiBhbiBIVE1MIGZvcm0gdXNpbmcgQUpBWC5cclxuXHQgKi9cclxuXHQkLmZuLmFqYXhTdWJtaXQgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0XHQvKmpzaGludCBzY3JpcHR1cmw6dHJ1ZSAqL1xyXG5cclxuXHRcdC8vIGZhc3QgZmFpbCBpZiBub3RoaW5nIHNlbGVjdGVkIChodHRwOi8vZGV2LmpxdWVyeS5jb20vdGlja2V0LzI3NTIpXHJcblx0XHRpZiAoIXRoaXMubGVuZ3RoKSB7XHJcblx0XHRcdGxvZygnYWpheFN1Ym1pdDogc2tpcHBpbmcgc3VibWl0IHByb2Nlc3MgLSBubyBlbGVtZW50IHNlbGVjdGVkJyk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBtZXRob2QsIGFjdGlvbiwgdXJsLCAkZm9ybSA9IHRoaXM7XHJcblxyXG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zID09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0b3B0aW9ucyA9IHsgc3VjY2Vzczogb3B0aW9ucyB9O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoIG9wdGlvbnMgPT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0b3B0aW9ucyA9IHt9O1xyXG5cdFx0fVxyXG5cclxuXHRcdG1ldGhvZCA9IG9wdGlvbnMudHlwZSB8fCB0aGlzLmF0dHIyKCdtZXRob2QnKTtcclxuXHRcdGFjdGlvbiA9IG9wdGlvbnMudXJsICB8fCB0aGlzLmF0dHIyKCdhY3Rpb24nKTtcclxuXHJcblx0XHR1cmwgPSAodHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycpID8gJC50cmltKGFjdGlvbikgOiAnJztcclxuXHRcdHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZiB8fCAnJztcclxuXHRcdGlmICh1cmwpIHtcclxuXHRcdFx0Ly8gY2xlYW4gdXJsIChkb24ndCBpbmNsdWRlIGhhc2ggdmF1ZSlcclxuXHRcdFx0dXJsID0gKHVybC5tYXRjaCgvXihbXiNdKykvKXx8W10pWzFdO1xyXG5cdFx0fVxyXG5cclxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7XHJcblx0XHRcdHVybDogIHVybCxcclxuXHRcdFx0c3VjY2VzczogJC5hamF4U2V0dGluZ3Muc3VjY2VzcyxcclxuXHRcdFx0dHlwZTogbWV0aG9kIHx8ICQuYWpheFNldHRpbmdzLnR5cGUsXHJcblx0XHRcdGlmcmFtZVNyYzogL15odHRwcy9pLnRlc3Qod2luZG93LmxvY2F0aW9uLmhyZWYgfHwgJycpID8gJ2phdmFzY3JpcHQ6ZmFsc2UnIDogJ2Fib3V0OmJsYW5rJ1xyXG5cdFx0fSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0Ly8gaG9vayBmb3IgbWFuaXB1bGF0aW5nIHRoZSBmb3JtIGRhdGEgYmVmb3JlIGl0IGlzIGV4dHJhY3RlZDtcclxuXHRcdC8vIGNvbnZlbmllbnQgZm9yIHVzZSB3aXRoIHJpY2ggZWRpdG9ycyBsaWtlIHRpbnlNQ0Ugb3IgRkNLRWRpdG9yXHJcblx0XHR2YXIgdmV0byA9IHt9O1xyXG5cdFx0dGhpcy50cmlnZ2VyKCdmb3JtLXByZS1zZXJpYWxpemUnLCBbdGhpcywgb3B0aW9ucywgdmV0b10pO1xyXG5cdFx0aWYgKHZldG8udmV0bykge1xyXG5cdFx0XHRsb2coJ2FqYXhTdWJtaXQ6IHN1Ym1pdCB2ZXRvZWQgdmlhIGZvcm0tcHJlLXNlcmlhbGl6ZSB0cmlnZ2VyJyk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHByb3ZpZGUgb3Bwb3J0dW5pdHkgdG8gYWx0ZXIgZm9ybSBkYXRhIGJlZm9yZSBpdCBpcyBzZXJpYWxpemVkXHJcblx0XHRpZiAob3B0aW9ucy5iZWZvcmVTZXJpYWxpemUgJiYgb3B0aW9ucy5iZWZvcmVTZXJpYWxpemUodGhpcywgb3B0aW9ucykgPT09IGZhbHNlKSB7XHJcblx0XHRcdGxvZygnYWpheFN1Ym1pdDogc3VibWl0IGFib3J0ZWQgdmlhIGJlZm9yZVNlcmlhbGl6ZSBjYWxsYmFjaycpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgdHJhZGl0aW9uYWwgPSBvcHRpb25zLnRyYWRpdGlvbmFsO1xyXG5cdFx0aWYgKCB0cmFkaXRpb25hbCA9PT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHR0cmFkaXRpb25hbCA9ICQuYWpheFNldHRpbmdzLnRyYWRpdGlvbmFsO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBlbGVtZW50cyA9IFtdO1xyXG5cdFx0dmFyIHF4LCBhID0gdGhpcy5mb3JtVG9BcnJheShvcHRpb25zLnNlbWFudGljLCBlbGVtZW50cyk7XHJcblx0XHRpZiAob3B0aW9ucy5kYXRhKSB7XHJcblx0XHRcdG9wdGlvbnMuZXh0cmFEYXRhID0gb3B0aW9ucy5kYXRhO1xyXG5cdFx0XHRxeCA9ICQucGFyYW0ob3B0aW9ucy5kYXRhLCB0cmFkaXRpb25hbCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZ2l2ZSBwcmUtc3VibWl0IGNhbGxiYWNrIGFuIG9wcG9ydHVuaXR5IHRvIGFib3J0IHRoZSBzdWJtaXRcclxuXHRcdGlmIChvcHRpb25zLmJlZm9yZVN1Ym1pdCAmJiBvcHRpb25zLmJlZm9yZVN1Ym1pdChhLCB0aGlzLCBvcHRpb25zKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0bG9nKCdhamF4U3VibWl0OiBzdWJtaXQgYWJvcnRlZCB2aWEgYmVmb3JlU3VibWl0IGNhbGxiYWNrJyk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGZpcmUgdmV0b2FibGUgJ3ZhbGlkYXRlJyBldmVudFxyXG5cdFx0dGhpcy50cmlnZ2VyKCdmb3JtLXN1Ym1pdC12YWxpZGF0ZScsIFthLCB0aGlzLCBvcHRpb25zLCB2ZXRvXSk7XHJcblx0XHRpZiAodmV0by52ZXRvKSB7XHJcblx0XHRcdGxvZygnYWpheFN1Ym1pdDogc3VibWl0IHZldG9lZCB2aWEgZm9ybS1zdWJtaXQtdmFsaWRhdGUgdHJpZ2dlcicpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgcSA9ICQucGFyYW0oYSwgdHJhZGl0aW9uYWwpO1xyXG5cdFx0aWYgKHF4KSB7XHJcblx0XHRcdHEgPSAoIHEgPyAocSArICcmJyArIHF4KSA6IHF4ICk7XHJcblx0XHR9XHJcblx0XHRpZiAob3B0aW9ucy50eXBlLnRvVXBwZXJDYXNlKCkgPT0gJ0dFVCcpIHtcclxuXHRcdFx0b3B0aW9ucy51cmwgKz0gKG9wdGlvbnMudXJsLmluZGV4T2YoJz8nKSA+PSAwID8gJyYnIDogJz8nKSArIHE7XHJcblx0XHRcdG9wdGlvbnMuZGF0YSA9IG51bGw7ICAvLyBkYXRhIGlzIG51bGwgZm9yICdnZXQnXHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0b3B0aW9ucy5kYXRhID0gcTsgLy8gZGF0YSBpcyB0aGUgcXVlcnkgc3RyaW5nIGZvciAncG9zdCdcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgY2FsbGJhY2tzID0gW107XHJcblx0XHRpZiAob3B0aW9ucy5yZXNldEZvcm0pIHtcclxuXHRcdFx0Y2FsbGJhY2tzLnB1c2goZnVuY3Rpb24oKSB7ICRmb3JtLnJlc2V0Rm9ybSgpOyB9KTtcclxuXHRcdH1cclxuXHRcdGlmIChvcHRpb25zLmNsZWFyRm9ybSkge1xyXG5cdFx0XHRjYWxsYmFja3MucHVzaChmdW5jdGlvbigpIHsgJGZvcm0uY2xlYXJGb3JtKG9wdGlvbnMuaW5jbHVkZUhpZGRlbik7IH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHBlcmZvcm0gYSBsb2FkIG9uIHRoZSB0YXJnZXQgb25seSBpZiBkYXRhVHlwZSBpcyBub3QgcHJvdmlkZWRcclxuXHRcdGlmICghb3B0aW9ucy5kYXRhVHlwZSAmJiBvcHRpb25zLnRhcmdldCkge1xyXG5cdFx0XHR2YXIgb2xkU3VjY2VzcyA9IG9wdGlvbnMuc3VjY2VzcyB8fCBmdW5jdGlvbigpe307XHJcblx0XHRcdGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHR2YXIgZm4gPSBvcHRpb25zLnJlcGxhY2VUYXJnZXQgPyAncmVwbGFjZVdpdGgnIDogJ2h0bWwnO1xyXG5cdFx0XHRcdCQob3B0aW9ucy50YXJnZXQpW2ZuXShkYXRhKS5lYWNoKG9sZFN1Y2Nlc3MsIGFyZ3VtZW50cyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XHJcblx0XHRcdGNhbGxiYWNrcy5wdXNoKG9wdGlvbnMuc3VjY2Vzcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0b3B0aW9ucy5zdWNjZXNzID0gZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHsgLy8galF1ZXJ5IDEuNCsgcGFzc2VzIHhociBhcyAzcmQgYXJnXHJcblx0XHRcdHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0IHx8IHRoaXMgOyAgICAvLyBqUXVlcnkgMS40KyBzdXBwb3J0cyBzY29wZSBjb250ZXh0XHJcblx0XHRcdGZvciAodmFyIGk9MCwgbWF4PWNhbGxiYWNrcy5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xyXG5cdFx0XHRcdGNhbGxiYWNrc1tpXS5hcHBseShjb250ZXh0LCBbZGF0YSwgc3RhdHVzLCB4aHIgfHwgJGZvcm0sICRmb3JtXSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMuZXJyb3IpIHtcclxuXHRcdFx0dmFyIG9sZEVycm9yID0gb3B0aW9ucy5lcnJvcjtcclxuXHRcdFx0b3B0aW9ucy5lcnJvciA9IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG5cdFx0XHRcdHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0IHx8IHRoaXM7XHJcblx0XHRcdFx0b2xkRXJyb3IuYXBwbHkoY29udGV4dCwgW3hociwgc3RhdHVzLCBlcnJvciwgJGZvcm1dKTtcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHQgaWYgKG9wdGlvbnMuY29tcGxldGUpIHtcclxuXHRcdFx0dmFyIG9sZENvbXBsZXRlID0gb3B0aW9ucy5jb21wbGV0ZTtcclxuXHRcdFx0b3B0aW9ucy5jb21wbGV0ZSA9IGZ1bmN0aW9uKHhociwgc3RhdHVzKSB7XHJcblx0XHRcdFx0dmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgfHwgdGhpcztcclxuXHRcdFx0XHRvbGRDb21wbGV0ZS5hcHBseShjb250ZXh0LCBbeGhyLCBzdGF0dXMsICRmb3JtXSk7XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYXJlIHRoZXJlIGZpbGVzIHRvIHVwbG9hZD9cclxuXHJcblx0XHQvLyBbdmFsdWVdIChpc3N1ZSAjMTEzKSwgYWxzbyBzZWUgY29tbWVudDpcclxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYWxzdXAvZm9ybS9jb21taXQvNTg4MzA2YWVkYmExZGUwMTM4ODAzMmQ1ZjQyYTYwMTU5ZWVhOTIyOCNjb21taXRjb21tZW50LTIxODAyMTlcclxuXHRcdHZhciBmaWxlSW5wdXRzID0gJCgnaW5wdXRbdHlwZT1maWxlXTplbmFibGVkJywgdGhpcykuZmlsdGVyKGZ1bmN0aW9uKCkgeyByZXR1cm4gJCh0aGlzKS52YWwoKSAhPT0gJyc7IH0pO1xyXG5cclxuXHRcdHZhciBoYXNGaWxlSW5wdXRzID0gZmlsZUlucHV0cy5sZW5ndGggPiAwO1xyXG5cdFx0dmFyIG1wID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xyXG5cdFx0dmFyIG11bHRpcGFydCA9ICgkZm9ybS5hdHRyKCdlbmN0eXBlJykgPT0gbXAgfHwgJGZvcm0uYXR0cignZW5jb2RpbmcnKSA9PSBtcCk7XHJcblxyXG5cdFx0dmFyIGZpbGVBUEkgPSBmZWF0dXJlLmZpbGVhcGkgJiYgZmVhdHVyZS5mb3JtZGF0YTtcclxuXHRcdGxvZyhcImZpbGVBUEkgOlwiICsgZmlsZUFQSSk7XHJcblx0XHR2YXIgc2hvdWxkVXNlRnJhbWUgPSAoaGFzRmlsZUlucHV0cyB8fCBtdWx0aXBhcnQpICYmICFmaWxlQVBJO1xyXG5cclxuXHRcdHZhciBqcXhocjtcclxuXHJcblx0XHQvLyBvcHRpb25zLmlmcmFtZSBhbGxvd3MgdXNlciB0byBmb3JjZSBpZnJhbWUgbW9kZVxyXG5cdFx0Ly8gMDYtTk9WLTA5OiBub3cgZGVmYXVsdGluZyB0byBpZnJhbWUgbW9kZSBpZiBmaWxlIGlucHV0IGlzIGRldGVjdGVkXHJcblx0XHRpZiAob3B0aW9ucy5pZnJhbWUgIT09IGZhbHNlICYmIChvcHRpb25zLmlmcmFtZSB8fCBzaG91bGRVc2VGcmFtZSkpIHtcclxuXHRcdFx0Ly8gaGFjayB0byBmaXggU2FmYXJpIGhhbmcgKHRoYW5rcyB0byBUaW0gTW9sZW5kaWprIGZvciB0aGlzKVxyXG5cdFx0XHQvLyBzZWU6ICBodHRwOi8vZ3JvdXBzLmdvb2dsZS5jb20vZ3JvdXAvanF1ZXJ5LWRldi9icm93c2VfdGhyZWFkL3RocmVhZC8zNjM5NWI3YWI1MTBkZDVkXHJcblx0XHRcdGlmIChvcHRpb25zLmNsb3NlS2VlcEFsaXZlKSB7XHJcblx0XHRcdFx0JC5nZXQob3B0aW9ucy5jbG9zZUtlZXBBbGl2ZSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRqcXhociA9IGZpbGVVcGxvYWRJZnJhbWUoYSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0anF4aHIgPSBmaWxlVXBsb2FkSWZyYW1lKGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICgoaGFzRmlsZUlucHV0cyB8fCBtdWx0aXBhcnQpICYmIGZpbGVBUEkpIHtcclxuXHRcdFx0anF4aHIgPSBmaWxlVXBsb2FkWGhyKGEpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGpxeGhyID0gJC5hamF4KG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRmb3JtLnJlbW92ZURhdGEoJ2pxeGhyJykuZGF0YSgnanF4aHInLCBqcXhocik7XHJcblxyXG5cdFx0Ly8gY2xlYXIgZWxlbWVudCBhcnJheVxyXG5cdFx0Zm9yICh2YXIgaz0wOyBrIDwgZWxlbWVudHMubGVuZ3RoOyBrKyspXHJcblx0XHRcdGVsZW1lbnRzW2tdID0gbnVsbDtcclxuXHJcblx0XHQvLyBmaXJlICdub3RpZnknIGV2ZW50XHJcblx0XHR0aGlzLnRyaWdnZXIoJ2Zvcm0tc3VibWl0LW5vdGlmeScsIFt0aGlzLCBvcHRpb25zXSk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0XHQvLyB1dGlsaXR5IGZuIGZvciBkZWVwIHNlcmlhbGl6YXRpb25cclxuXHRcdGZ1bmN0aW9uIGRlZXBTZXJpYWxpemUoZXh0cmFEYXRhKXtcclxuXHRcdFx0dmFyIHNlcmlhbGl6ZWQgPSAkLnBhcmFtKGV4dHJhRGF0YSwgb3B0aW9ucy50cmFkaXRpb25hbCkuc3BsaXQoJyYnKTtcclxuXHRcdFx0dmFyIGxlbiA9IHNlcmlhbGl6ZWQubGVuZ3RoO1xyXG5cdFx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRcdHZhciBpLCBwYXJ0O1xyXG5cdFx0XHRmb3IgKGk9MDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0Ly8gIzI1MjsgdW5kbyBwYXJhbSBzcGFjZSByZXBsYWNlbWVudFxyXG5cdFx0XHRcdHNlcmlhbGl6ZWRbaV0gPSBzZXJpYWxpemVkW2ldLnJlcGxhY2UoL1xcKy9nLCcgJyk7XHJcblx0XHRcdFx0cGFydCA9IHNlcmlhbGl6ZWRbaV0uc3BsaXQoJz0nKTtcclxuXHRcdFx0XHQvLyAjMjc4OyB1c2UgYXJyYXkgaW5zdGVhZCBvZiBvYmplY3Qgc3RvcmFnZSwgZmF2b3JpbmcgYXJyYXkgc2VyaWFsaXphdGlvbnNcclxuXHRcdFx0XHRyZXN1bHQucHVzaChbZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRbMF0pLCBkZWNvZGVVUklDb21wb25lbnQocGFydFsxXSldKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cclxuXHRcdCAvLyBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyIGZpbGUgdXBsb2FkcyAoYmlnIGhhdCB0aXAgdG8gZnJhbmNvaXMybWV0eilcclxuXHRcdGZ1bmN0aW9uIGZpbGVVcGxvYWRYaHIoYSkge1xyXG5cdFx0XHR2YXIgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcblx0XHRcdGZvciAodmFyIGk9MDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRmb3JtZGF0YS5hcHBlbmQoYVtpXS5uYW1lLCBhW2ldLnZhbHVlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG9wdGlvbnMuZXh0cmFEYXRhKSB7XHJcblx0XHRcdFx0dmFyIHNlcmlhbGl6ZWREYXRhID0gZGVlcFNlcmlhbGl6ZShvcHRpb25zLmV4dHJhRGF0YSk7XHJcblx0XHRcdFx0Zm9yIChpPTA7IGkgPCBzZXJpYWxpemVkRGF0YS5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHRcdGlmIChzZXJpYWxpemVkRGF0YVtpXSlcclxuXHRcdFx0XHRcdFx0Zm9ybWRhdGEuYXBwZW5kKHNlcmlhbGl6ZWREYXRhW2ldWzBdLCBzZXJpYWxpemVkRGF0YVtpXVsxXSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG9wdGlvbnMuZGF0YSA9IG51bGw7XHJcblxyXG5cdFx0XHR2YXIgcyA9ICQuZXh0ZW5kKHRydWUsIHt9LCAkLmFqYXhTZXR0aW5ncywgb3B0aW9ucywge1xyXG5cdFx0XHRcdGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuXHRcdFx0XHRwcm9jZXNzRGF0YTogZmFsc2UsXHJcblx0XHRcdFx0Y2FjaGU6IGZhbHNlLFxyXG5cdFx0XHRcdHR5cGU6IG1ldGhvZCB8fCAnUE9TVCdcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAob3B0aW9ucy51cGxvYWRQcm9ncmVzcykge1xyXG5cdFx0XHRcdC8vIHdvcmthcm91bmQgYmVjYXVzZSBqcVhIUiBkb2VzIG5vdCBleHBvc2UgdXBsb2FkIHByb3BlcnR5XHJcblx0XHRcdFx0cy54aHIgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHZhciB4aHIgPSAkLmFqYXhTZXR0aW5ncy54aHIoKTtcclxuXHRcdFx0XHRcdGlmICh4aHIudXBsb2FkKSB7XHJcblx0XHRcdFx0XHRcdHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBwZXJjZW50ID0gMDtcclxuXHRcdFx0XHRcdFx0XHR2YXIgcG9zaXRpb24gPSBldmVudC5sb2FkZWQgfHwgZXZlbnQucG9zaXRpb247IC8qZXZlbnQucG9zaXRpb24gaXMgZGVwcmVjYXRlZCovXHJcblx0XHRcdFx0XHRcdFx0dmFyIHRvdGFsID0gZXZlbnQudG90YWw7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHBlcmNlbnQgPSBNYXRoLmNlaWwocG9zaXRpb24gLyB0b3RhbCAqIDEwMCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMudXBsb2FkUHJvZ3Jlc3MoZXZlbnQsIHBvc2l0aW9uLCB0b3RhbCwgcGVyY2VudCk7XHJcblx0XHRcdFx0XHRcdH0sIGZhbHNlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiB4aHI7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cy5kYXRhID0gbnVsbDtcclxuXHRcdFx0dmFyIGJlZm9yZVNlbmQgPSBzLmJlZm9yZVNlbmQ7XHJcblx0XHRcdHMuYmVmb3JlU2VuZCA9IGZ1bmN0aW9uKHhociwgbykge1xyXG5cdFx0XHRcdC8vU2VuZCBGb3JtRGF0YSgpIHByb3ZpZGVkIGJ5IHVzZXJcclxuXHRcdFx0XHRpZiAob3B0aW9ucy5mb3JtRGF0YSlcclxuXHRcdFx0XHRcdG8uZGF0YSA9IG9wdGlvbnMuZm9ybURhdGE7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0by5kYXRhID0gZm9ybWRhdGE7XHJcblx0XHRcdFx0aWYoYmVmb3JlU2VuZClcclxuXHRcdFx0XHRcdGJlZm9yZVNlbmQuY2FsbCh0aGlzLCB4aHIsIG8pO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4gJC5hamF4KHMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHByaXZhdGUgZnVuY3Rpb24gZm9yIGhhbmRsaW5nIGZpbGUgdXBsb2FkcyAoaGF0IHRpcCB0byBZQUhPTyEpXHJcblx0XHRmdW5jdGlvbiBmaWxlVXBsb2FkSWZyYW1lKGEpIHtcclxuXHRcdFx0dmFyIGZvcm0gPSAkZm9ybVswXSwgZWwsIGksIHMsIGcsIGlkLCAkaW8sIGlvLCB4aHIsIHN1YiwgbiwgdGltZWRPdXQsIHRpbWVvdXRIYW5kbGU7XHJcblx0XHRcdHZhciBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcclxuXHJcblx0XHRcdC8vICMzNDFcclxuXHRcdFx0ZGVmZXJyZWQuYWJvcnQgPSBmdW5jdGlvbihzdGF0dXMpIHtcclxuXHRcdFx0XHR4aHIuYWJvcnQoc3RhdHVzKTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGlmIChhKSB7XHJcblx0XHRcdFx0Ly8gZW5zdXJlIHRoYXQgZXZlcnkgc2VyaWFsaXplZCBpbnB1dCBpcyBzdGlsbCBlbmFibGVkXHJcblx0XHRcdFx0Zm9yIChpPTA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0ZWwgPSAkKGVsZW1lbnRzW2ldKTtcclxuXHRcdFx0XHRcdGlmICggaGFzUHJvcCApXHJcblx0XHRcdFx0XHRcdGVsLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRlbC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cyA9ICQuZXh0ZW5kKHRydWUsIHt9LCAkLmFqYXhTZXR0aW5ncywgb3B0aW9ucyk7XHJcblx0XHRcdHMuY29udGV4dCA9IHMuY29udGV4dCB8fCBzO1xyXG5cdFx0XHRpZCA9ICdqcUZvcm1JTycgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xyXG5cdFx0XHRpZiAocy5pZnJhbWVUYXJnZXQpIHtcclxuXHRcdFx0XHQkaW8gPSAkKHMuaWZyYW1lVGFyZ2V0KTtcclxuXHRcdFx0XHRuID0gJGlvLmF0dHIyKCduYW1lJyk7XHJcblx0XHRcdFx0aWYgKCFuKVxyXG5cdFx0XHRcdFx0ICRpby5hdHRyMignbmFtZScsIGlkKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRpZCA9IG47XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0JGlvID0gJCgnPGlmcmFtZSBuYW1lPVwiJyArIGlkICsgJ1wiIHNyYz1cIicrIHMuaWZyYW1lU3JjICsnXCIgLz4nKTtcclxuXHRcdFx0XHQkaW8uY3NzKHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJy0xMDAwcHgnLCBsZWZ0OiAnLTEwMDBweCcgfSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aW8gPSAkaW9bMF07XHJcblxyXG5cclxuXHRcdFx0eGhyID0geyAvLyBtb2NrIG9iamVjdFxyXG5cdFx0XHRcdGFib3J0ZWQ6IDAsXHJcblx0XHRcdFx0cmVzcG9uc2VUZXh0OiBudWxsLFxyXG5cdFx0XHRcdHJlc3BvbnNlWE1MOiBudWxsLFxyXG5cdFx0XHRcdHN0YXR1czogMCxcclxuXHRcdFx0XHRzdGF0dXNUZXh0OiAnbi9hJyxcclxuXHRcdFx0XHRnZXRBbGxSZXNwb25zZUhlYWRlcnM6IGZ1bmN0aW9uKCkge30sXHJcblx0XHRcdFx0Z2V0UmVzcG9uc2VIZWFkZXI6IGZ1bmN0aW9uKCkge30sXHJcblx0XHRcdFx0c2V0UmVxdWVzdEhlYWRlcjogZnVuY3Rpb24oKSB7fSxcclxuXHRcdFx0XHRhYm9ydDogZnVuY3Rpb24oc3RhdHVzKSB7XHJcblx0XHRcdFx0XHR2YXIgZSA9IChzdGF0dXMgPT09ICd0aW1lb3V0JyA/ICd0aW1lb3V0JyA6ICdhYm9ydGVkJyk7XHJcblx0XHRcdFx0XHRsb2coJ2Fib3J0aW5nIHVwbG9hZC4uLiAnICsgZSk7XHJcblx0XHRcdFx0XHR0aGlzLmFib3J0ZWQgPSAxO1xyXG5cclxuXHRcdFx0XHRcdHRyeSB7IC8vICMyMTQsICMyNTdcclxuXHRcdFx0XHRcdFx0aWYgKGlvLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZXhlY0NvbW1hbmQpIHtcclxuXHRcdFx0XHRcdFx0XHRpby5jb250ZW50V2luZG93LmRvY3VtZW50LmV4ZWNDb21tYW5kKCdTdG9wJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNhdGNoKGlnbm9yZSkge31cclxuXHJcblx0XHRcdFx0XHQkaW8uYXR0cignc3JjJywgcy5pZnJhbWVTcmMpOyAvLyBhYm9ydCBvcCBpbiBwcm9ncmVzc1xyXG5cdFx0XHRcdFx0eGhyLmVycm9yID0gZTtcclxuXHRcdFx0XHRcdGlmIChzLmVycm9yKVxyXG5cdFx0XHRcdFx0XHRzLmVycm9yLmNhbGwocy5jb250ZXh0LCB4aHIsIGUsIHN0YXR1cyk7XHJcblx0XHRcdFx0XHRpZiAoZylcclxuXHRcdFx0XHRcdFx0JC5ldmVudC50cmlnZ2VyKFwiYWpheEVycm9yXCIsIFt4aHIsIHMsIGVdKTtcclxuXHRcdFx0XHRcdGlmIChzLmNvbXBsZXRlKVxyXG5cdFx0XHRcdFx0XHRzLmNvbXBsZXRlLmNhbGwocy5jb250ZXh0LCB4aHIsIGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGcgPSBzLmdsb2JhbDtcclxuXHRcdFx0Ly8gdHJpZ2dlciBhamF4IGdsb2JhbCBldmVudHMgc28gdGhhdCBhY3Rpdml0eS9ibG9jayBpbmRpY2F0b3JzIHdvcmsgbGlrZSBub3JtYWxcclxuXHRcdFx0aWYgKGcgJiYgMCA9PT0gJC5hY3RpdmUrKykge1xyXG5cdFx0XHRcdCQuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZykge1xyXG5cdFx0XHRcdCQuZXZlbnQudHJpZ2dlcihcImFqYXhTZW5kXCIsIFt4aHIsIHNdKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHMuYmVmb3JlU2VuZCAmJiBzLmJlZm9yZVNlbmQuY2FsbChzLmNvbnRleHQsIHhociwgcykgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0aWYgKHMuZ2xvYmFsKSB7XHJcblx0XHRcdFx0XHQkLmFjdGl2ZS0tO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoKTtcclxuXHRcdFx0XHRyZXR1cm4gZGVmZXJyZWQ7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHhoci5hYm9ydGVkKSB7XHJcblx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KCk7XHJcblx0XHRcdFx0cmV0dXJuIGRlZmVycmVkO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBhZGQgc3VibWl0dGluZyBlbGVtZW50IHRvIGRhdGEgaWYgd2Uga25vdyBpdFxyXG5cdFx0XHRzdWIgPSBmb3JtLmNsaztcclxuXHRcdFx0aWYgKHN1Yikge1xyXG5cdFx0XHRcdG4gPSBzdWIubmFtZTtcclxuXHRcdFx0XHRpZiAobiAmJiAhc3ViLmRpc2FibGVkKSB7XHJcblx0XHRcdFx0XHRzLmV4dHJhRGF0YSA9IHMuZXh0cmFEYXRhIHx8IHt9O1xyXG5cdFx0XHRcdFx0cy5leHRyYURhdGFbbl0gPSBzdWIudmFsdWU7XHJcblx0XHRcdFx0XHRpZiAoc3ViLnR5cGUgPT0gXCJpbWFnZVwiKSB7XHJcblx0XHRcdFx0XHRcdHMuZXh0cmFEYXRhW24rJy54J10gPSBmb3JtLmNsa194O1xyXG5cdFx0XHRcdFx0XHRzLmV4dHJhRGF0YVtuKycueSddID0gZm9ybS5jbGtfeTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBDTElFTlRfVElNRU9VVF9BQk9SVCA9IDE7XHJcblx0XHRcdHZhciBTRVJWRVJfQUJPUlQgPSAyO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdGZ1bmN0aW9uIGdldERvYyhmcmFtZSkge1xyXG5cdFx0XHRcdC8qIGl0IGxvb2tzIGxpa2UgY29udGVudFdpbmRvdyBvciBjb250ZW50RG9jdW1lbnQgZG8gbm90XHJcblx0XHRcdFx0ICogY2FycnkgdGhlIHByb3RvY29sIHByb3BlcnR5IGluIGllOCwgd2hlbiBydW5uaW5nIHVuZGVyIHNzbFxyXG5cdFx0XHRcdCAqIGZyYW1lLmRvY3VtZW50IGlzIHRoZSBvbmx5IHZhbGlkIHJlc3BvbnNlIGRvY3VtZW50LCBzaW5jZVxyXG5cdFx0XHRcdCAqIHRoZSBwcm90b2NvbCBpcyBrbm93IGJ1dCBub3Qgb24gdGhlIG90aGVyIHR3byBvYmplY3RzLiBzdHJhbmdlP1xyXG5cdFx0XHRcdCAqIFwiU2FtZSBvcmlnaW4gcG9saWN5XCIgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TYW1lX29yaWdpbl9wb2xpY3lcclxuXHRcdFx0XHQgKi9cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgZG9jID0gbnVsbDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBJRTggY2FzY2FkaW5nIGFjY2VzcyBjaGVja1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRpZiAoZnJhbWUuY29udGVudFdpbmRvdykge1xyXG5cdFx0XHRcdFx0XHRkb2MgPSBmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gY2F0Y2goZXJyKSB7XHJcblx0XHRcdFx0XHQvLyBJRTggYWNjZXNzIGRlbmllZCB1bmRlciBzc2wgJiBtaXNzaW5nIHByb3RvY29sXHJcblx0XHRcdFx0XHRsb2coJ2Nhbm5vdCBnZXQgaWZyYW1lLmNvbnRlbnRXaW5kb3cgZG9jdW1lbnQ6ICcgKyBlcnIpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGRvYykgeyAvLyBzdWNjZXNzZnVsIGdldHRpbmcgY29udGVudFxyXG5cdFx0XHRcdFx0cmV0dXJuIGRvYztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRyeSB7IC8vIHNpbXBseSBjaGVja2luZyBtYXkgdGhyb3cgaW4gaWU4IHVuZGVyIHNzbCBvciBtaXNtYXRjaGVkIHByb3RvY29sXHJcblx0XHRcdFx0XHRkb2MgPSBmcmFtZS5jb250ZW50RG9jdW1lbnQgPyBmcmFtZS5jb250ZW50RG9jdW1lbnQgOiBmcmFtZS5kb2N1bWVudDtcclxuXHRcdFx0XHR9IGNhdGNoKGVycikge1xyXG5cdFx0XHRcdFx0Ly8gbGFzdCBhdHRlbXB0XHJcblx0XHRcdFx0XHRsb2coJ2Nhbm5vdCBnZXQgaWZyYW1lLmNvbnRlbnREb2N1bWVudDogJyArIGVycik7XHJcblx0XHRcdFx0XHRkb2MgPSBmcmFtZS5kb2N1bWVudDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGRvYztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gUmFpbHMgQ1NSRiBoYWNrICh0aGFua3MgdG8gWXZhbiBCYXJ0aGVsZW15KVxyXG5cdFx0XHR2YXIgY3NyZl90b2tlbiA9ICQoJ21ldGFbbmFtZT1jc3JmLXRva2VuXScpLmF0dHIoJ2NvbnRlbnQnKTtcclxuXHRcdFx0dmFyIGNzcmZfcGFyYW0gPSAkKCdtZXRhW25hbWU9Y3NyZi1wYXJhbV0nKS5hdHRyKCdjb250ZW50Jyk7XHJcblx0XHRcdGlmIChjc3JmX3BhcmFtICYmIGNzcmZfdG9rZW4pIHtcclxuXHRcdFx0XHRzLmV4dHJhRGF0YSA9IHMuZXh0cmFEYXRhIHx8IHt9O1xyXG5cdFx0XHRcdHMuZXh0cmFEYXRhW2NzcmZfcGFyYW1dID0gY3NyZl90b2tlbjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gdGFrZSBhIGJyZWF0aCBzbyB0aGF0IHBlbmRpbmcgcmVwYWludHMgZ2V0IHNvbWUgY3B1IHRpbWUgYmVmb3JlIHRoZSB1cGxvYWQgc3RhcnRzXHJcblx0XHRcdGZ1bmN0aW9uIGRvU3VibWl0KCkge1xyXG5cdFx0XHRcdC8vIG1ha2Ugc3VyZSBmb3JtIGF0dHJzIGFyZSBzZXRcclxuXHRcdFx0XHR2YXIgdCA9ICRmb3JtLmF0dHIyKCd0YXJnZXQnKSwgYSA9ICRmb3JtLmF0dHIyKCdhY3Rpb24nKTtcclxuXHJcblx0XHRcdFx0Ly8gdXBkYXRlIGZvcm0gYXR0cnMgaW4gSUUgZnJpZW5kbHkgd2F5XHJcblx0XHRcdFx0Zm9ybS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsaWQpO1xyXG5cdFx0XHRcdGlmICghbWV0aG9kIHx8IC9wb3N0L2kudGVzdChtZXRob2QpICkge1xyXG5cdFx0XHRcdFx0Zm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdQT1NUJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChhICE9IHMudXJsKSB7XHJcblx0XHRcdFx0XHRmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgcy51cmwpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gaWUgYm9ya3MgaW4gc29tZSBjYXNlcyB3aGVuIHNldHRpbmcgZW5jb2RpbmdcclxuXHRcdFx0XHRpZiAoISBzLnNraXBFbmNvZGluZ092ZXJyaWRlICYmICghbWV0aG9kIHx8IC9wb3N0L2kudGVzdChtZXRob2QpKSkge1xyXG5cdFx0XHRcdFx0JGZvcm0uYXR0cih7XHJcblx0XHRcdFx0XHRcdGVuY29kaW5nOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXHJcblx0XHRcdFx0XHRcdGVuY3R5cGU6ICAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gc3VwcG9ydCB0aW1vdXRcclxuXHRcdFx0XHRpZiAocy50aW1lb3V0KSB7XHJcblx0XHRcdFx0XHR0aW1lb3V0SGFuZGxlID0gc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGltZWRPdXQgPSB0cnVlOyBjYihDTElFTlRfVElNRU9VVF9BQk9SVCk7IH0sIHMudGltZW91dCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBsb29rIGZvciBzZXJ2ZXIgYWJvcnRzXHJcblx0XHRcdFx0ZnVuY3Rpb24gY2hlY2tTdGF0ZSgpIHtcclxuXHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdHZhciBzdGF0ZSA9IGdldERvYyhpbykucmVhZHlTdGF0ZTtcclxuXHRcdFx0XHRcdFx0bG9nKCdzdGF0ZSA9ICcgKyBzdGF0ZSk7XHJcblx0XHRcdFx0XHRcdGlmIChzdGF0ZSAmJiBzdGF0ZS50b0xvd2VyQ2FzZSgpID09ICd1bmluaXRpYWxpemVkJylcclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdGUsNTApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y2F0Y2goZSkge1xyXG5cdFx0XHRcdFx0XHRsb2coJ1NlcnZlciBhYm9ydDogJyAsIGUsICcgKCcsIGUubmFtZSwgJyknKTtcclxuXHRcdFx0XHRcdFx0Y2IoU0VSVkVSX0FCT1JUKTtcclxuXHRcdFx0XHRcdFx0aWYgKHRpbWVvdXRIYW5kbGUpXHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXRIYW5kbGUpO1xyXG5cdFx0XHRcdFx0XHR0aW1lb3V0SGFuZGxlID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gYWRkIFwiZXh0cmFcIiBkYXRhIHRvIGZvcm0gaWYgcHJvdmlkZWQgaW4gb3B0aW9uc1xyXG5cdFx0XHRcdHZhciBleHRyYUlucHV0cyA9IFtdO1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRpZiAocy5leHRyYURhdGEpIHtcclxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgbiBpbiBzLmV4dHJhRGF0YSkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChzLmV4dHJhRGF0YS5oYXNPd25Qcm9wZXJ0eShuKSkge1xyXG5cdFx0XHRcdFx0XHRcdCAgIC8vIGlmIHVzaW5nIHRoZSAkLnBhcmFtIGZvcm1hdCB0aGF0IGFsbG93cyBmb3IgbXVsdGlwbGUgdmFsdWVzIHdpdGggdGhlIHNhbWUgbmFtZVxyXG5cdFx0XHRcdFx0XHRcdCAgIGlmKCQuaXNQbGFpbk9iamVjdChzLmV4dHJhRGF0YVtuXSkgJiYgcy5leHRyYURhdGFbbl0uaGFzT3duUHJvcGVydHkoJ25hbWUnKSAmJiBzLmV4dHJhRGF0YVtuXS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgZXh0cmFJbnB1dHMucHVzaChcclxuXHRcdFx0XHRcdFx0XHRcdCAgICQoJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIicrcy5leHRyYURhdGFbbl0ubmFtZSsnXCI+JykudmFsKHMuZXh0cmFEYXRhW25dLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAuYXBwZW5kVG8oZm9ybSlbMF0pO1xyXG5cdFx0XHRcdFx0XHRcdCAgIH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHQgICBleHRyYUlucHV0cy5wdXNoKFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiJytuKydcIj4nKS52YWwocy5leHRyYURhdGFbbl0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgIC5hcHBlbmRUbyhmb3JtKVswXSk7XHJcblx0XHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICghcy5pZnJhbWVUYXJnZXQpIHtcclxuXHRcdFx0XHRcdFx0Ly8gYWRkIGlmcmFtZSB0byBkb2MgYW5kIHN1Ym1pdCB0aGUgZm9ybVxyXG5cdFx0XHRcdFx0XHQkaW8uYXBwZW5kVG8oJ2JvZHknKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChpby5hdHRhY2hFdmVudClcclxuXHRcdFx0XHRcdFx0aW8uYXR0YWNoRXZlbnQoJ29ubG9hZCcsIGNiKTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0aW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNiLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdGUsMTUpO1xyXG5cclxuXHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdGZvcm0uc3VibWl0KCk7XHJcblx0XHRcdFx0XHR9IGNhdGNoKGVycikge1xyXG5cdFx0XHRcdFx0XHQvLyBqdXN0IGluIGNhc2UgZm9ybSBoYXMgZWxlbWVudCB3aXRoIG5hbWUvaWQgb2YgJ3N1Ym1pdCdcclxuXHRcdFx0XHRcdFx0dmFyIHN1Ym1pdEZuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpLnN1Ym1pdDtcclxuXHRcdFx0XHRcdFx0c3VibWl0Rm4uYXBwbHkoZm9ybSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZpbmFsbHkge1xyXG5cdFx0XHRcdFx0Ly8gcmVzZXQgYXR0cnMgYW5kIHJlbW92ZSBcImV4dHJhXCIgaW5wdXQgZWxlbWVudHNcclxuXHRcdFx0XHRcdGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLGEpO1xyXG5cdFx0XHRcdFx0aWYodCkge1xyXG5cdFx0XHRcdFx0XHRmb3JtLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgdCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQkZm9ybS5yZW1vdmVBdHRyKCd0YXJnZXQnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCQoZXh0cmFJbnB1dHMpLnJlbW92ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHMuZm9yY2VTeW5jKSB7XHJcblx0XHRcdFx0ZG9TdWJtaXQoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGRvU3VibWl0LCAxMCk7IC8vIHRoaXMgbGV0cyBkb20gdXBkYXRlcyByZW5kZXJcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIGRhdGEsIGRvYywgZG9tQ2hlY2tDb3VudCA9IDUwLCBjYWxsYmFja1Byb2Nlc3NlZDtcclxuXHJcblx0XHRcdGZ1bmN0aW9uIGNiKGUpIHtcclxuXHRcdFx0XHRpZiAoeGhyLmFib3J0ZWQgfHwgY2FsbGJhY2tQcm9jZXNzZWQpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ZG9jID0gZ2V0RG9jKGlvKTtcclxuXHRcdFx0XHRpZighZG9jKSB7XHJcblx0XHRcdFx0XHRsb2coJ2Nhbm5vdCBhY2Nlc3MgcmVzcG9uc2UgZG9jdW1lbnQnKTtcclxuXHRcdFx0XHRcdGUgPSBTRVJWRVJfQUJPUlQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChlID09PSBDTElFTlRfVElNRU9VVF9BQk9SVCAmJiB4aHIpIHtcclxuXHRcdFx0XHRcdHhoci5hYm9ydCgndGltZW91dCcpO1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KHhociwgJ3RpbWVvdXQnKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAoZSA9PSBTRVJWRVJfQUJPUlQgJiYgeGhyKSB7XHJcblx0XHRcdFx0XHR4aHIuYWJvcnQoJ3NlcnZlciBhYm9ydCcpO1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KHhociwgJ2Vycm9yJywgJ3NlcnZlciBhYm9ydCcpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCFkb2MgfHwgZG9jLmxvY2F0aW9uLmhyZWYgPT0gcy5pZnJhbWVTcmMpIHtcclxuXHRcdFx0XHRcdC8vIHJlc3BvbnNlIG5vdCByZWNlaXZlZCB5ZXRcclxuXHRcdFx0XHRcdGlmICghdGltZWRPdXQpXHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGlvLmRldGFjaEV2ZW50KVxyXG5cdFx0XHRcdFx0aW8uZGV0YWNoRXZlbnQoJ29ubG9hZCcsIGNiKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRpby5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgY2IsIGZhbHNlKTtcclxuXHJcblx0XHRcdFx0dmFyIHN0YXR1cyA9ICdzdWNjZXNzJywgZXJyTXNnO1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRpZiAodGltZWRPdXQpIHtcclxuXHRcdFx0XHRcdFx0dGhyb3cgJ3RpbWVvdXQnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhciBpc1htbCA9IHMuZGF0YVR5cGUgPT0gJ3htbCcgfHwgZG9jLlhNTERvY3VtZW50IHx8ICQuaXNYTUxEb2MoZG9jKTtcclxuXHRcdFx0XHRcdGxvZygnaXNYbWw9Jytpc1htbCk7XHJcblx0XHRcdFx0XHRpZiAoIWlzWG1sICYmIHdpbmRvdy5vcGVyYSAmJiAoZG9jLmJvZHkgPT09IG51bGwgfHwgIWRvYy5ib2R5LmlubmVySFRNTCkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKC0tZG9tQ2hlY2tDb3VudCkge1xyXG5cdFx0XHRcdFx0XHRcdC8vIGluIHNvbWUgYnJvd3NlcnMgKE9wZXJhKSB0aGUgaWZyYW1lIERPTSBpcyBub3QgYWx3YXlzIHRyYXZlcnNhYmxlIHdoZW5cclxuXHRcdFx0XHRcdFx0XHQvLyB0aGUgb25sb2FkIGNhbGxiYWNrIGZpcmVzLCBzbyB3ZSBsb29wIGEgYml0IHRvIGFjY29tbW9kYXRlXHJcblx0XHRcdFx0XHRcdFx0bG9nKCdyZXF1ZWluZyBvbkxvYWQgY2FsbGJhY2ssIERPTSBub3QgYXZhaWxhYmxlJyk7XHJcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChjYiwgMjUwKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8gbGV0IHRoaXMgZmFsbCB0aHJvdWdoIGJlY2F1c2Ugc2VydmVyIHJlc3BvbnNlIGNvdWxkIGJlIGFuIGVtcHR5IGRvY3VtZW50XHJcblx0XHRcdFx0XHRcdC8vbG9nKCdDb3VsZCBub3QgYWNjZXNzIGlmcmFtZSBET00gYWZ0ZXIgbXV0aXBsZSB0cmllcy4nKTtcclxuXHRcdFx0XHRcdFx0Ly90aHJvdyAnRE9NRXhjZXB0aW9uOiBub3QgYXZhaWxhYmxlJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL2xvZygncmVzcG9uc2UgZGV0ZWN0ZWQnKTtcclxuXHRcdFx0XHRcdHZhciBkb2NSb290ID0gZG9jLmJvZHkgPyBkb2MuYm9keSA6IGRvYy5kb2N1bWVudEVsZW1lbnQ7XHJcblx0XHRcdFx0XHR4aHIucmVzcG9uc2VUZXh0ID0gZG9jUm9vdCA/IGRvY1Jvb3QuaW5uZXJIVE1MIDogbnVsbDtcclxuXHRcdFx0XHRcdHhoci5yZXNwb25zZVhNTCA9IGRvYy5YTUxEb2N1bWVudCA/IGRvYy5YTUxEb2N1bWVudCA6IGRvYztcclxuXHRcdFx0XHRcdGlmIChpc1htbClcclxuXHRcdFx0XHRcdFx0cy5kYXRhVHlwZSA9ICd4bWwnO1xyXG5cdFx0XHRcdFx0eGhyLmdldFJlc3BvbnNlSGVhZGVyID0gZnVuY3Rpb24oaGVhZGVyKXtcclxuXHRcdFx0XHRcdFx0dmFyIGhlYWRlcnMgPSB7J2NvbnRlbnQtdHlwZSc6IHMuZGF0YVR5cGV9O1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gaGVhZGVyc1toZWFkZXIudG9Mb3dlckNhc2UoKV07XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0Ly8gc3VwcG9ydCBmb3IgWEhSICdzdGF0dXMnICYgJ3N0YXR1c1RleHQnIGVtdWxhdGlvbiA6XHJcblx0XHRcdFx0XHRpZiAoZG9jUm9vdCkge1xyXG5cdFx0XHRcdFx0XHR4aHIuc3RhdHVzID0gTnVtYmVyKCBkb2NSb290LmdldEF0dHJpYnV0ZSgnc3RhdHVzJykgKSB8fCB4aHIuc3RhdHVzO1xyXG5cdFx0XHRcdFx0XHR4aHIuc3RhdHVzVGV4dCA9IGRvY1Jvb3QuZ2V0QXR0cmlidXRlKCdzdGF0dXNUZXh0JykgfHwgeGhyLnN0YXR1c1RleHQ7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dmFyIGR0ID0gKHMuZGF0YVR5cGUgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdFx0XHR2YXIgc2NyID0gLyhqc29ufHNjcmlwdHx0ZXh0KS8udGVzdChkdCk7XHJcblx0XHRcdFx0XHRpZiAoc2NyIHx8IHMudGV4dGFyZWEpIHtcclxuXHRcdFx0XHRcdFx0Ly8gc2VlIGlmIHVzZXIgZW1iZWRkZWQgcmVzcG9uc2UgaW4gdGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0dmFyIHRhID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdO1xyXG5cdFx0XHRcdFx0XHRpZiAodGEpIHtcclxuXHRcdFx0XHRcdFx0XHR4aHIucmVzcG9uc2VUZXh0ID0gdGEudmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0Ly8gc3VwcG9ydCBmb3IgWEhSICdzdGF0dXMnICYgJ3N0YXR1c1RleHQnIGVtdWxhdGlvbiA6XHJcblx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1cyA9IE51bWJlciggdGEuZ2V0QXR0cmlidXRlKCdzdGF0dXMnKSApIHx8IHhoci5zdGF0dXM7XHJcblx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1c1RleHQgPSB0YS5nZXRBdHRyaWJ1dGUoJ3N0YXR1c1RleHQnKSB8fCB4aHIuc3RhdHVzVGV4dDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIGlmIChzY3IpIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBhY2NvdW50IGZvciBicm93c2VycyBpbmplY3RpbmcgcHJlIGFyb3VuZCBqc29uIHJlc3BvbnNlXHJcblx0XHRcdFx0XHRcdFx0dmFyIHByZSA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgncHJlJylbMF07XHJcblx0XHRcdFx0XHRcdFx0dmFyIGIgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcclxuXHRcdFx0XHRcdFx0XHRpZiAocHJlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR4aHIucmVzcG9uc2VUZXh0ID0gcHJlLnRleHRDb250ZW50ID8gcHJlLnRleHRDb250ZW50IDogcHJlLmlubmVyVGV4dDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSBpZiAoYikge1xyXG5cdFx0XHRcdFx0XHRcdFx0eGhyLnJlc3BvbnNlVGV4dCA9IGIudGV4dENvbnRlbnQgPyBiLnRleHRDb250ZW50IDogYi5pbm5lclRleHQ7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmIChkdCA9PSAneG1sJyAmJiAheGhyLnJlc3BvbnNlWE1MICYmIHhoci5yZXNwb25zZVRleHQpIHtcclxuXHRcdFx0XHRcdFx0eGhyLnJlc3BvbnNlWE1MID0gdG9YbWwoeGhyLnJlc3BvbnNlVGV4dCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0ZGF0YSA9IGh0dHBEYXRhKHhociwgZHQsIHMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdFx0XHRzdGF0dXMgPSAncGFyc2VyZXJyb3InO1xyXG5cdFx0XHRcdFx0XHR4aHIuZXJyb3IgPSBlcnJNc2cgPSAoZXJyIHx8IHN0YXR1cyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRcdGxvZygnZXJyb3IgY2F1Z2h0OiAnLGVycik7XHJcblx0XHRcdFx0XHRzdGF0dXMgPSAnZXJyb3InO1xyXG5cdFx0XHRcdFx0eGhyLmVycm9yID0gZXJyTXNnID0gKGVyciB8fCBzdGF0dXMpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHhoci5hYm9ydGVkKSB7XHJcblx0XHRcdFx0XHRsb2coJ3VwbG9hZCBhYm9ydGVkJyk7XHJcblx0XHRcdFx0XHRzdGF0dXMgPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHhoci5zdGF0dXMpIHsgLy8gd2UndmUgc2V0IHhoci5zdGF0dXNcclxuXHRcdFx0XHRcdHN0YXR1cyA9ICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwIHx8IHhoci5zdGF0dXMgPT09IDMwNCkgPyAnc3VjY2VzcycgOiAnZXJyb3InO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gb3JkZXJpbmcgb2YgdGhlc2UgY2FsbGJhY2tzL3RyaWdnZXJzIGlzIG9kZCwgYnV0IHRoYXQncyBob3cgJC5hamF4IGRvZXMgaXRcclxuXHRcdFx0XHRpZiAoc3RhdHVzID09PSAnc3VjY2VzcycpIHtcclxuXHRcdFx0XHRcdGlmIChzLnN1Y2Nlc3MpXHJcblx0XHRcdFx0XHRcdHMuc3VjY2Vzcy5jYWxsKHMuY29udGV4dCwgZGF0YSwgJ3N1Y2Nlc3MnLCB4aHIpO1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSh4aHIucmVzcG9uc2VUZXh0LCAnc3VjY2VzcycsIHhocik7XHJcblx0XHRcdFx0XHRpZiAoZylcclxuXHRcdFx0XHRcdFx0JC5ldmVudC50cmlnZ2VyKFwiYWpheFN1Y2Nlc3NcIiwgW3hociwgc10pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChzdGF0dXMpIHtcclxuXHRcdFx0XHRcdGlmIChlcnJNc2cgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdFx0ZXJyTXNnID0geGhyLnN0YXR1c1RleHQ7XHJcblx0XHRcdFx0XHRpZiAocy5lcnJvcilcclxuXHRcdFx0XHRcdFx0cy5lcnJvci5jYWxsKHMuY29udGV4dCwgeGhyLCBzdGF0dXMsIGVyck1zZyk7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoeGhyLCAnZXJyb3InLCBlcnJNc2cpO1xyXG5cdFx0XHRcdFx0aWYgKGcpXHJcblx0XHRcdFx0XHRcdCQuZXZlbnQudHJpZ2dlcihcImFqYXhFcnJvclwiLCBbeGhyLCBzLCBlcnJNc2ddKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChnKVxyXG5cdFx0XHRcdFx0JC5ldmVudC50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsIFt4aHIsIHNdKTtcclxuXHJcblx0XHRcdFx0aWYgKGcgJiYgISAtLSQuYWN0aXZlKSB7XHJcblx0XHRcdFx0XHQkLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChzLmNvbXBsZXRlKVxyXG5cdFx0XHRcdFx0cy5jb21wbGV0ZS5jYWxsKHMuY29udGV4dCwgeGhyLCBzdGF0dXMpO1xyXG5cclxuXHRcdFx0XHRjYWxsYmFja1Byb2Nlc3NlZCA9IHRydWU7XHJcblx0XHRcdFx0aWYgKHMudGltZW91dClcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKTtcclxuXHJcblx0XHRcdFx0Ly8gY2xlYW4gdXBcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCFzLmlmcmFtZVRhcmdldClcclxuXHRcdFx0XHRcdFx0JGlvLnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0ZWxzZSAgLy9hZGRpbmcgZWxzZSB0byBjbGVhbiB1cCBleGlzdGluZyBpZnJhbWUgcmVzcG9uc2UuXHJcblx0XHRcdFx0XHRcdCRpby5hdHRyKCdzcmMnLCBzLmlmcmFtZVNyYyk7XHJcblx0XHRcdFx0XHR4aHIucmVzcG9uc2VYTUwgPSBudWxsO1xyXG5cdFx0XHRcdH0sIDEwMCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciB0b1htbCA9ICQucGFyc2VYTUwgfHwgZnVuY3Rpb24ocywgZG9jKSB7IC8vIHVzZSBwYXJzZVhNTCBpZiBhdmFpbGFibGUgKGpRdWVyeSAxLjUrKVxyXG5cdFx0XHRcdGlmICh3aW5kb3cuQWN0aXZlWE9iamVjdCkge1xyXG5cdFx0XHRcdFx0ZG9jID0gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxET00nKTtcclxuXHRcdFx0XHRcdGRvYy5hc3luYyA9ICdmYWxzZSc7XHJcblx0XHRcdFx0XHRkb2MubG9hZFhNTChzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRkb2MgPSAobmV3IERPTVBhcnNlcigpKS5wYXJzZUZyb21TdHJpbmcocywgJ3RleHQveG1sJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiAoZG9jICYmIGRvYy5kb2N1bWVudEVsZW1lbnQgJiYgZG9jLmRvY3VtZW50RWxlbWVudC5ub2RlTmFtZSAhPSAncGFyc2VyZXJyb3InKSA/IGRvYyA6IG51bGw7XHJcblx0XHRcdH07XHJcblx0XHRcdHZhciBwYXJzZUpTT04gPSAkLnBhcnNlSlNPTiB8fCBmdW5jdGlvbihzKSB7XHJcblx0XHRcdFx0Lypqc2xpbnQgZXZpbDp0cnVlICovXHJcblx0XHRcdFx0cmV0dXJuIHdpbmRvd1snZXZhbCddKCcoJyArIHMgKyAnKScpO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIGh0dHBEYXRhID0gZnVuY3Rpb24oIHhociwgdHlwZSwgcyApIHsgLy8gbW9zdGx5IGxpZnRlZCBmcm9tIGpxMS40LjRcclxuXHJcblx0XHRcdFx0dmFyIGN0ID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdjb250ZW50LXR5cGUnKSB8fCAnJyxcclxuXHRcdFx0XHRcdHhtbCA9IHR5cGUgPT09ICd4bWwnIHx8ICF0eXBlICYmIGN0LmluZGV4T2YoJ3htbCcpID49IDAsXHJcblx0XHRcdFx0XHRkYXRhID0geG1sID8geGhyLnJlc3BvbnNlWE1MIDogeGhyLnJlc3BvbnNlVGV4dDtcclxuXHJcblx0XHRcdFx0aWYgKHhtbCAmJiBkYXRhLmRvY3VtZW50RWxlbWVudC5ub2RlTmFtZSA9PT0gJ3BhcnNlcmVycm9yJykge1xyXG5cdFx0XHRcdFx0aWYgKCQuZXJyb3IpXHJcblx0XHRcdFx0XHRcdCQuZXJyb3IoJ3BhcnNlcmVycm9yJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChzICYmIHMuZGF0YUZpbHRlcikge1xyXG5cdFx0XHRcdFx0ZGF0YSA9IHMuZGF0YUZpbHRlcihkYXRhLCB0eXBlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdFx0aWYgKHR5cGUgPT09ICdqc29uJyB8fCAhdHlwZSAmJiBjdC5pbmRleE9mKCdqc29uJykgPj0gMCkge1xyXG5cdFx0XHRcdFx0XHRkYXRhID0gcGFyc2VKU09OKGRhdGEpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlID09PSBcInNjcmlwdFwiIHx8ICF0eXBlICYmIGN0LmluZGV4T2YoXCJqYXZhc2NyaXB0XCIpID49IDApIHtcclxuXHRcdFx0XHRcdFx0JC5nbG9iYWxFdmFsKGRhdGEpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJldHVybiBkZWZlcnJlZDtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBhamF4Rm9ybSgpIHByb3ZpZGVzIGEgbWVjaGFuaXNtIGZvciBmdWxseSBhdXRvbWF0aW5nIGZvcm0gc3VibWlzc2lvbi5cclxuXHQgKlxyXG5cdCAqIFRoZSBhZHZhbnRhZ2VzIG9mIHVzaW5nIHRoaXMgbWV0aG9kIGluc3RlYWQgb2YgYWpheFN1Ym1pdCgpIGFyZTpcclxuXHQgKlxyXG5cdCAqIDE6IFRoaXMgbWV0aG9kIHdpbGwgaW5jbHVkZSBjb29yZGluYXRlcyBmb3IgPGlucHV0IHR5cGU9XCJpbWFnZVwiIC8+IGVsZW1lbnRzIChpZiB0aGUgZWxlbWVudFxyXG5cdCAqICAgIGlzIHVzZWQgdG8gc3VibWl0IHRoZSBmb3JtKS5cclxuXHQgKiAyLiBUaGlzIG1ldGhvZCB3aWxsIGluY2x1ZGUgdGhlIHN1Ym1pdCBlbGVtZW50J3MgbmFtZS92YWx1ZSBkYXRhIChmb3IgdGhlIGVsZW1lbnQgdGhhdCB3YXNcclxuXHQgKiAgICB1c2VkIHRvIHN1Ym1pdCB0aGUgZm9ybSkuXHJcblx0ICogMy4gVGhpcyBtZXRob2QgYmluZHMgdGhlIHN1Ym1pdCgpIG1ldGhvZCB0byB0aGUgZm9ybSBmb3IgeW91LlxyXG5cdCAqXHJcblx0ICogVGhlIG9wdGlvbnMgYXJndW1lbnQgZm9yIGFqYXhGb3JtIHdvcmtzIGV4YWN0bHkgYXMgaXQgZG9lcyBmb3IgYWpheFN1Ym1pdC4gIGFqYXhGb3JtIG1lcmVseVxyXG5cdCAqIHBhc3NlcyB0aGUgb3B0aW9ucyBhcmd1bWVudCBhbG9uZyBhZnRlciBwcm9wZXJseSBiaW5kaW5nIGV2ZW50cyBmb3Igc3VibWl0IGVsZW1lbnRzIGFuZFxyXG5cdCAqIHRoZSBmb3JtIGl0c2VsZi5cclxuXHQgKi9cclxuXHQkLmZuLmFqYXhGb3JtID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0XHRvcHRpb25zLmRlbGVnYXRpb24gPSBvcHRpb25zLmRlbGVnYXRpb24gJiYgJC5pc0Z1bmN0aW9uKCQuZm4ub24pO1xyXG5cclxuXHRcdC8vIGluIGpRdWVyeSAxLjMrIHdlIGNhbiBmaXggbWlzdGFrZXMgd2l0aCB0aGUgcmVhZHkgc3RhdGVcclxuXHRcdGlmICghb3B0aW9ucy5kZWxlZ2F0aW9uICYmIHRoaXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHZhciBvID0geyBzOiB0aGlzLnNlbGVjdG9yLCBjOiB0aGlzLmNvbnRleHQgfTtcclxuXHRcdFx0aWYgKCEkLmlzUmVhZHkgJiYgby5zKSB7XHJcblx0XHRcdFx0bG9nKCdET00gbm90IHJlYWR5LCBxdWV1aW5nIGFqYXhGb3JtJyk7XHJcblx0XHRcdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCQoby5zLG8uYykuYWpheEZvcm0ob3B0aW9ucyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gaXMgeW91ciBET00gcmVhZHk/ICBodHRwOi8vZG9jcy5qcXVlcnkuY29tL1R1dG9yaWFsczpJbnRyb2R1Y2luZ18kKGRvY3VtZW50KS5yZWFkeSgpXHJcblx0XHRcdGxvZygndGVybWluYXRpbmc7IHplcm8gZWxlbWVudHMgZm91bmQgYnkgc2VsZWN0b3InICsgKCQuaXNSZWFkeSA/ICcnIDogJyAoRE9NIG5vdCByZWFkeSknKSk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggb3B0aW9ucy5kZWxlZ2F0aW9uICkge1xyXG5cdFx0XHQkKGRvY3VtZW50KVxyXG5cdFx0XHRcdC5vZmYoJ3N1Ym1pdC5mb3JtLXBsdWdpbicsIHRoaXMuc2VsZWN0b3IsIGRvQWpheFN1Ym1pdClcclxuXHRcdFx0XHQub2ZmKCdjbGljay5mb3JtLXBsdWdpbicsIHRoaXMuc2VsZWN0b3IsIGNhcHR1cmVTdWJtaXR0aW5nRWxlbWVudClcclxuXHRcdFx0XHQub24oJ3N1Ym1pdC5mb3JtLXBsdWdpbicsIHRoaXMuc2VsZWN0b3IsIG9wdGlvbnMsIGRvQWpheFN1Ym1pdClcclxuXHRcdFx0XHQub24oJ2NsaWNrLmZvcm0tcGx1Z2luJywgdGhpcy5zZWxlY3Rvciwgb3B0aW9ucywgY2FwdHVyZVN1Ym1pdHRpbmdFbGVtZW50KTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuYWpheEZvcm1VbmJpbmQoKVxyXG5cdFx0XHQuYmluZCgnc3VibWl0LmZvcm0tcGx1Z2luJywgb3B0aW9ucywgZG9BamF4U3VibWl0KVxyXG5cdFx0XHQuYmluZCgnY2xpY2suZm9ybS1wbHVnaW4nLCBvcHRpb25zLCBjYXB0dXJlU3VibWl0dGluZ0VsZW1lbnQpO1xyXG5cdH07XHJcblxyXG5cdC8vIHByaXZhdGUgZXZlbnQgaGFuZGxlcnNcclxuXHRmdW5jdGlvbiBkb0FqYXhTdWJtaXQoZSkge1xyXG5cdFx0Lypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cclxuXHRcdHZhciBvcHRpb25zID0gZS5kYXRhO1xyXG5cdFx0aWYgKCFlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7IC8vIGlmIGV2ZW50IGhhcyBiZWVuIGNhbmNlbGVkLCBkb24ndCBwcm9jZWVkXHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0JChlLnRhcmdldCkuYWpheFN1Ym1pdChvcHRpb25zKTsgLy8gIzM2NVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2FwdHVyZVN1Ym1pdHRpbmdFbGVtZW50KGUpIHtcclxuXHRcdC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXHJcblx0XHR2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblx0XHR2YXIgJGVsID0gJCh0YXJnZXQpO1xyXG5cdFx0aWYgKCEoJGVsLmlzKFwiW3R5cGU9c3VibWl0XSxbdHlwZT1pbWFnZV1cIikpKSB7XHJcblx0XHRcdC8vIGlzIHRoaXMgYSBjaGlsZCBlbGVtZW50IG9mIHRoZSBzdWJtaXQgZWw/ICAoZXg6IGEgc3BhbiB3aXRoaW4gYSBidXR0b24pXHJcblx0XHRcdHZhciB0ID0gJGVsLmNsb3Nlc3QoJ1t0eXBlPXN1Ym1pdF0nKTtcclxuXHRcdFx0aWYgKHQubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRhcmdldCA9IHRbMF07XHJcblx0XHR9XHJcblx0XHR2YXIgZm9ybSA9IHRoaXM7XHJcblx0XHRmb3JtLmNsayA9IHRhcmdldDtcclxuXHRcdGlmICh0YXJnZXQudHlwZSA9PSAnaW1hZ2UnKSB7XHJcblx0XHRcdGlmIChlLm9mZnNldFggIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGZvcm0uY2xrX3ggPSBlLm9mZnNldFg7XHJcblx0XHRcdFx0Zm9ybS5jbGtfeSA9IGUub2Zmc2V0WTtcclxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgJC5mbi5vZmZzZXQgPT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdHZhciBvZmZzZXQgPSAkZWwub2Zmc2V0KCk7XHJcblx0XHRcdFx0Zm9ybS5jbGtfeCA9IGUucGFnZVggLSBvZmZzZXQubGVmdDtcclxuXHRcdFx0XHRmb3JtLmNsa195ID0gZS5wYWdlWSAtIG9mZnNldC50b3A7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Zm9ybS5jbGtfeCA9IGUucGFnZVggLSB0YXJnZXQub2Zmc2V0TGVmdDtcclxuXHRcdFx0XHRmb3JtLmNsa195ID0gZS5wYWdlWSAtIHRhcmdldC5vZmZzZXRUb3A7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vIGNsZWFyIGZvcm0gdmFyc1xyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHsgZm9ybS5jbGsgPSBmb3JtLmNsa194ID0gZm9ybS5jbGtfeSA9IG51bGw7IH0sIDEwMCk7XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gYWpheEZvcm1VbmJpbmQgdW5iaW5kcyB0aGUgZXZlbnQgaGFuZGxlcnMgdGhhdCB3ZXJlIGJvdW5kIGJ5IGFqYXhGb3JtXHJcblx0JC5mbi5hamF4Rm9ybVVuYmluZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudW5iaW5kKCdzdWJtaXQuZm9ybS1wbHVnaW4gY2xpY2suZm9ybS1wbHVnaW4nKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBmb3JtVG9BcnJheSgpIGdhdGhlcnMgZm9ybSBlbGVtZW50IGRhdGEgaW50byBhbiBhcnJheSBvZiBvYmplY3RzIHRoYXQgY2FuXHJcblx0ICogYmUgcGFzc2VkIHRvIGFueSBvZiB0aGUgZm9sbG93aW5nIGFqYXggZnVuY3Rpb25zOiAkLmdldCwgJC5wb3N0LCBvciBsb2FkLlxyXG5cdCAqIEVhY2ggb2JqZWN0IGluIHRoZSBhcnJheSBoYXMgYm90aCBhICduYW1lJyBhbmQgJ3ZhbHVlJyBwcm9wZXJ0eS4gIEFuIGV4YW1wbGUgb2ZcclxuXHQgKiBhbiBhcnJheSBmb3IgYSBzaW1wbGUgbG9naW4gZm9ybSBtaWdodCBiZTpcclxuXHQgKlxyXG5cdCAqIFsgeyBuYW1lOiAndXNlcm5hbWUnLCB2YWx1ZTogJ2pyZXNpZycgfSwgeyBuYW1lOiAncGFzc3dvcmQnLCB2YWx1ZTogJ3NlY3JldCcgfSBdXHJcblx0ICpcclxuXHQgKiBJdCBpcyB0aGlzIGFycmF5IHRoYXQgaXMgcGFzc2VkIHRvIHByZS1zdWJtaXQgY2FsbGJhY2sgZnVuY3Rpb25zIHByb3ZpZGVkIHRvIHRoZVxyXG5cdCAqIGFqYXhTdWJtaXQoKSBhbmQgYWpheEZvcm0oKSBtZXRob2RzLlxyXG5cdCAqL1xyXG5cdCQuZm4uZm9ybVRvQXJyYXkgPSBmdW5jdGlvbihzZW1hbnRpYywgZWxlbWVudHMpIHtcclxuXHRcdHZhciBhID0gW107XHJcblx0XHRpZiAodGhpcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0cmV0dXJuIGE7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGZvcm0gPSB0aGlzWzBdO1xyXG5cdFx0dmFyIGVscyA9IHNlbWFudGljID8gZm9ybS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpIDogZm9ybS5lbGVtZW50cztcclxuXHRcdGlmICghZWxzKSB7XHJcblx0XHRcdHJldHVybiBhO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBpLGosbix2LGVsLG1heCxqbWF4O1xyXG5cdFx0Zm9yKGk9MCwgbWF4PWVscy5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xyXG5cdFx0XHRlbCA9IGVsc1tpXTtcclxuXHRcdFx0biA9IGVsLm5hbWU7XHJcblx0XHRcdGlmICghbiB8fCBlbC5kaXNhYmxlZCkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoc2VtYW50aWMgJiYgZm9ybS5jbGsgJiYgZWwudHlwZSA9PSBcImltYWdlXCIpIHtcclxuXHRcdFx0XHQvLyBoYW5kbGUgaW1hZ2UgaW5wdXRzIG9uIHRoZSBmbHkgd2hlbiBzZW1hbnRpYyA9PSB0cnVlXHJcblx0XHRcdFx0aWYoZm9ybS5jbGsgPT0gZWwpIHtcclxuXHRcdFx0XHRcdGEucHVzaCh7bmFtZTogbiwgdmFsdWU6ICQoZWwpLnZhbCgpLCB0eXBlOiBlbC50eXBlIH0pO1xyXG5cdFx0XHRcdFx0YS5wdXNoKHtuYW1lOiBuKycueCcsIHZhbHVlOiBmb3JtLmNsa194fSwge25hbWU6IG4rJy55JywgdmFsdWU6IGZvcm0uY2xrX3l9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHYgPSAkLmZpZWxkVmFsdWUoZWwsIHRydWUpO1xyXG5cdFx0XHRpZiAodiAmJiB2LmNvbnN0cnVjdG9yID09IEFycmF5KSB7XHJcblx0XHRcdFx0aWYgKGVsZW1lbnRzKVxyXG5cdFx0XHRcdFx0ZWxlbWVudHMucHVzaChlbCk7XHJcblx0XHRcdFx0Zm9yKGo9MCwgam1heD12Lmxlbmd0aDsgaiA8IGptYXg7IGorKykge1xyXG5cdFx0XHRcdFx0YS5wdXNoKHtuYW1lOiBuLCB2YWx1ZTogdltqXX0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChmZWF0dXJlLmZpbGVhcGkgJiYgZWwudHlwZSA9PSAnZmlsZScpIHtcclxuXHRcdFx0XHRpZiAoZWxlbWVudHMpXHJcblx0XHRcdFx0XHRlbGVtZW50cy5wdXNoKGVsKTtcclxuXHRcdFx0XHR2YXIgZmlsZXMgPSBlbC5maWxlcztcclxuXHRcdFx0XHRpZiAoZmlsZXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRmb3IgKGo9MDsgaiA8IGZpbGVzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRcdGEucHVzaCh7bmFtZTogbiwgdmFsdWU6IGZpbGVzW2pdLCB0eXBlOiBlbC50eXBlfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gIzE4MFxyXG5cdFx0XHRcdFx0YS5wdXNoKHsgbmFtZTogbiwgdmFsdWU6ICcnLCB0eXBlOiBlbC50eXBlIH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh2ICE9PSBudWxsICYmIHR5cGVvZiB2ICE9ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0aWYgKGVsZW1lbnRzKVxyXG5cdFx0XHRcdFx0ZWxlbWVudHMucHVzaChlbCk7XHJcblx0XHRcdFx0YS5wdXNoKHtuYW1lOiBuLCB2YWx1ZTogdiwgdHlwZTogZWwudHlwZSwgcmVxdWlyZWQ6IGVsLnJlcXVpcmVkfSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXNlbWFudGljICYmIGZvcm0uY2xrKSB7XHJcblx0XHRcdC8vIGlucHV0IHR5cGU9PSdpbWFnZScgYXJlIG5vdCBmb3VuZCBpbiBlbGVtZW50cyBhcnJheSEgaGFuZGxlIGl0IGhlcmVcclxuXHRcdFx0dmFyICRpbnB1dCA9ICQoZm9ybS5jbGspLCBpbnB1dCA9ICRpbnB1dFswXTtcclxuXHRcdFx0biA9IGlucHV0Lm5hbWU7XHJcblx0XHRcdGlmIChuICYmICFpbnB1dC5kaXNhYmxlZCAmJiBpbnB1dC50eXBlID09ICdpbWFnZScpIHtcclxuXHRcdFx0XHRhLnB1c2goe25hbWU6IG4sIHZhbHVlOiAkaW5wdXQudmFsKCl9KTtcclxuXHRcdFx0XHRhLnB1c2goe25hbWU6IG4rJy54JywgdmFsdWU6IGZvcm0uY2xrX3h9LCB7bmFtZTogbisnLnknLCB2YWx1ZTogZm9ybS5jbGtfeX0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTZXJpYWxpemVzIGZvcm0gZGF0YSBpbnRvIGEgJ3N1Ym1pdHRhYmxlJyBzdHJpbmcuIFRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGEgc3RyaW5nXHJcblx0ICogaW4gdGhlIGZvcm1hdDogbmFtZTE9dmFsdWUxJmFtcDtuYW1lMj12YWx1ZTJcclxuXHQgKi9cclxuXHQkLmZuLmZvcm1TZXJpYWxpemUgPSBmdW5jdGlvbihzZW1hbnRpYykge1xyXG5cdFx0Ly9oYW5kIG9mZiB0byBqUXVlcnkucGFyYW0gZm9yIHByb3BlciBlbmNvZGluZ1xyXG5cdFx0cmV0dXJuICQucGFyYW0odGhpcy5mb3JtVG9BcnJheShzZW1hbnRpYykpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNlcmlhbGl6ZXMgYWxsIGZpZWxkIGVsZW1lbnRzIGluIHRoZSBqUXVlcnkgb2JqZWN0IGludG8gYSBxdWVyeSBzdHJpbmcuXHJcblx0ICogVGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gYSBzdHJpbmcgaW4gdGhlIGZvcm1hdDogbmFtZTE9dmFsdWUxJmFtcDtuYW1lMj12YWx1ZTJcclxuXHQgKi9cclxuXHQkLmZuLmZpZWxkU2VyaWFsaXplID0gZnVuY3Rpb24oc3VjY2Vzc2Z1bCkge1xyXG5cdFx0dmFyIGEgPSBbXTtcclxuXHRcdHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIG4gPSB0aGlzLm5hbWU7XHJcblx0XHRcdGlmICghbikge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgdiA9ICQuZmllbGRWYWx1ZSh0aGlzLCBzdWNjZXNzZnVsKTtcclxuXHRcdFx0aWYgKHYgJiYgdi5jb25zdHJ1Y3RvciA9PSBBcnJheSkge1xyXG5cdFx0XHRcdGZvciAodmFyIGk9MCxtYXg9di5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xyXG5cdFx0XHRcdFx0YS5wdXNoKHtuYW1lOiBuLCB2YWx1ZTogdltpXX0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh2ICE9PSBudWxsICYmIHR5cGVvZiB2ICE9ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0YS5wdXNoKHtuYW1lOiB0aGlzLm5hbWUsIHZhbHVlOiB2fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Ly9oYW5kIG9mZiB0byBqUXVlcnkucGFyYW0gZm9yIHByb3BlciBlbmNvZGluZ1xyXG5cdFx0cmV0dXJuICQucGFyYW0oYSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgdmFsdWUocykgb2YgdGhlIGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgc2V0LiAgRm9yIGV4YW1wbGUsIGNvbnNpZGVyIHRoZSBmb2xsb3dpbmcgZm9ybTpcclxuXHQgKlxyXG5cdCAqICA8Zm9ybT48ZmllbGRzZXQ+XHJcblx0ICogICAgICA8aW5wdXQgbmFtZT1cIkFcIiB0eXBlPVwidGV4dFwiIC8+XHJcblx0ICogICAgICA8aW5wdXQgbmFtZT1cIkFcIiB0eXBlPVwidGV4dFwiIC8+XHJcblx0ICogICAgICA8aW5wdXQgbmFtZT1cIkJcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIkIxXCIgLz5cclxuXHQgKiAgICAgIDxpbnB1dCBuYW1lPVwiQlwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiQjJcIi8+XHJcblx0ICogICAgICA8aW5wdXQgbmFtZT1cIkNcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIkMxXCIgLz5cclxuXHQgKiAgICAgIDxpbnB1dCBuYW1lPVwiQ1wiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiQzJcIiAvPlxyXG5cdCAqICA8L2ZpZWxkc2V0PjwvZm9ybT5cclxuXHQgKlxyXG5cdCAqICB2YXIgdiA9ICQoJ2lucHV0W3R5cGU9dGV4dF0nKS5maWVsZFZhbHVlKCk7XHJcblx0ICogIC8vIGlmIG5vIHZhbHVlcyBhcmUgZW50ZXJlZCBpbnRvIHRoZSB0ZXh0IGlucHV0c1xyXG5cdCAqICB2ID09IFsnJywnJ11cclxuXHQgKiAgLy8gaWYgdmFsdWVzIGVudGVyZWQgaW50byB0aGUgdGV4dCBpbnB1dHMgYXJlICdmb28nIGFuZCAnYmFyJ1xyXG5cdCAqICB2ID09IFsnZm9vJywnYmFyJ11cclxuXHQgKlxyXG5cdCAqICB2YXIgdiA9ICQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJykuZmllbGRWYWx1ZSgpO1xyXG5cdCAqICAvLyBpZiBuZWl0aGVyIGNoZWNrYm94IGlzIGNoZWNrZWRcclxuXHQgKiAgdiA9PT0gdW5kZWZpbmVkXHJcblx0ICogIC8vIGlmIGJvdGggY2hlY2tib3hlcyBhcmUgY2hlY2tlZFxyXG5cdCAqICB2ID09IFsnQjEnLCAnQjInXVxyXG5cdCAqXHJcblx0ICogIHZhciB2ID0gJCgnaW5wdXRbdHlwZT1yYWRpb10nKS5maWVsZFZhbHVlKCk7XHJcblx0ICogIC8vIGlmIG5laXRoZXIgcmFkaW8gaXMgY2hlY2tlZFxyXG5cdCAqICB2ID09PSB1bmRlZmluZWRcclxuXHQgKiAgLy8gaWYgZmlyc3QgcmFkaW8gaXMgY2hlY2tlZFxyXG5cdCAqICB2ID09IFsnQzEnXVxyXG5cdCAqXHJcblx0ICogVGhlIHN1Y2Nlc3NmdWwgYXJndW1lbnQgY29udHJvbHMgd2hldGhlciBvciBub3QgdGhlIGZpZWxkIGVsZW1lbnQgbXVzdCBiZSAnc3VjY2Vzc2Z1bCdcclxuXHQgKiAocGVyIGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw0L2ludGVyYWN0L2Zvcm1zLmh0bWwjc3VjY2Vzc2Z1bC1jb250cm9scykuXHJcblx0ICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIHN1Y2Nlc3NmdWwgYXJndW1lbnQgaXMgdHJ1ZS4gIElmIHRoaXMgdmFsdWUgaXMgZmFsc2UgdGhlIHZhbHVlKHMpXHJcblx0ICogZm9yIGVhY2ggZWxlbWVudCBpcyByZXR1cm5lZC5cclxuXHQgKlxyXG5cdCAqIE5vdGU6IFRoaXMgbWV0aG9kICphbHdheXMqIHJldHVybnMgYW4gYXJyYXkuICBJZiBubyB2YWxpZCB2YWx1ZSBjYW4gYmUgZGV0ZXJtaW5lZCB0aGVcclxuXHQgKiAgICBhcnJheSB3aWxsIGJlIGVtcHR5LCBvdGhlcndpc2UgaXQgd2lsbCBjb250YWluIG9uZSBvciBtb3JlIHZhbHVlcy5cclxuXHQgKi9cclxuXHQkLmZuLmZpZWxkVmFsdWUgPSBmdW5jdGlvbihzdWNjZXNzZnVsKSB7XHJcblx0XHRmb3IgKHZhciB2YWw9W10sIGk9MCwgbWF4PXRoaXMubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcclxuXHRcdFx0dmFyIGVsID0gdGhpc1tpXTtcclxuXHRcdFx0dmFyIHYgPSAkLmZpZWxkVmFsdWUoZWwsIHN1Y2Nlc3NmdWwpO1xyXG5cdFx0XHRpZiAodiA9PT0gbnVsbCB8fCB0eXBlb2YgdiA9PSAndW5kZWZpbmVkJyB8fCAodi5jb25zdHJ1Y3RvciA9PSBBcnJheSAmJiAhdi5sZW5ndGgpKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHYuY29uc3RydWN0b3IgPT0gQXJyYXkpXHJcblx0XHRcdFx0JC5tZXJnZSh2YWwsIHYpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dmFsLnB1c2godik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdmFsO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBlbGVtZW50LlxyXG5cdCAqL1xyXG5cdCQuZmllbGRWYWx1ZSA9IGZ1bmN0aW9uKGVsLCBzdWNjZXNzZnVsKSB7XHJcblx0XHR2YXIgbiA9IGVsLm5hbWUsIHQgPSBlbC50eXBlLCB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRpZiAoc3VjY2Vzc2Z1bCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHN1Y2Nlc3NmdWwgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzdWNjZXNzZnVsICYmICghbiB8fCBlbC5kaXNhYmxlZCB8fCB0ID09ICdyZXNldCcgfHwgdCA9PSAnYnV0dG9uJyB8fFxyXG5cdFx0XHQodCA9PSAnY2hlY2tib3gnIHx8IHQgPT0gJ3JhZGlvJykgJiYgIWVsLmNoZWNrZWQgfHxcclxuXHRcdFx0KHQgPT0gJ3N1Ym1pdCcgfHwgdCA9PSAnaW1hZ2UnKSAmJiBlbC5mb3JtICYmIGVsLmZvcm0uY2xrICE9IGVsIHx8XHJcblx0XHRcdHRhZyA9PSAnc2VsZWN0JyAmJiBlbC5zZWxlY3RlZEluZGV4ID09IC0xKSkge1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0YWcgPT0gJ3NlbGVjdCcpIHtcclxuXHRcdFx0dmFyIGluZGV4ID0gZWwuc2VsZWN0ZWRJbmRleDtcclxuXHRcdFx0aWYgKGluZGV4IDwgMCkge1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBhID0gW10sIG9wcyA9IGVsLm9wdGlvbnM7XHJcblx0XHRcdHZhciBvbmUgPSAodCA9PSAnc2VsZWN0LW9uZScpO1xyXG5cdFx0XHR2YXIgbWF4ID0gKG9uZSA/IGluZGV4KzEgOiBvcHMubGVuZ3RoKTtcclxuXHRcdFx0Zm9yKHZhciBpPShvbmUgPyBpbmRleCA6IDApOyBpIDwgbWF4OyBpKyspIHtcclxuXHRcdFx0XHR2YXIgb3AgPSBvcHNbaV07XHJcblx0XHRcdFx0aWYgKG9wLnNlbGVjdGVkKSB7XHJcblx0XHRcdFx0XHR2YXIgdiA9IG9wLnZhbHVlO1xyXG5cdFx0XHRcdFx0aWYgKCF2KSB7IC8vIGV4dHJhIHBhaW4gZm9yIElFLi4uXHJcblx0XHRcdFx0XHRcdHYgPSAob3AuYXR0cmlidXRlcyAmJiBvcC5hdHRyaWJ1dGVzWyd2YWx1ZSddICYmICEob3AuYXR0cmlidXRlc1sndmFsdWUnXS5zcGVjaWZpZWQpKSA/IG9wLnRleHQgOiBvcC52YWx1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChvbmUpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHY7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRhLnB1c2godik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBhO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICQoZWwpLnZhbCgpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIENsZWFycyB0aGUgZm9ybSBkYXRhLiAgVGFrZXMgdGhlIGZvbGxvd2luZyBhY3Rpb25zIG9uIHRoZSBmb3JtJ3MgaW5wdXQgZmllbGRzOlxyXG5cdCAqICAtIGlucHV0IHRleHQgZmllbGRzIHdpbGwgaGF2ZSB0aGVpciAndmFsdWUnIHByb3BlcnR5IHNldCB0byB0aGUgZW1wdHkgc3RyaW5nXHJcblx0ICogIC0gc2VsZWN0IGVsZW1lbnRzIHdpbGwgaGF2ZSB0aGVpciAnc2VsZWN0ZWRJbmRleCcgcHJvcGVydHkgc2V0IHRvIC0xXHJcblx0ICogIC0gY2hlY2tib3ggYW5kIHJhZGlvIGlucHV0cyB3aWxsIGhhdmUgdGhlaXIgJ2NoZWNrZWQnIHByb3BlcnR5IHNldCB0byBmYWxzZVxyXG5cdCAqICAtIGlucHV0cyBvZiB0eXBlIHN1Ym1pdCwgYnV0dG9uLCByZXNldCwgYW5kIGhpZGRlbiB3aWxsICpub3QqIGJlIGVmZmVjdGVkXHJcblx0ICogIC0gYnV0dG9uIGVsZW1lbnRzIHdpbGwgKm5vdCogYmUgZWZmZWN0ZWRcclxuXHQgKi9cclxuXHQkLmZuLmNsZWFyRm9ybSA9IGZ1bmN0aW9uKGluY2x1ZGVIaWRkZW4pIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ2lucHV0LHNlbGVjdCx0ZXh0YXJlYScsIHRoaXMpLmNsZWFyRmllbGRzKGluY2x1ZGVIaWRkZW4pO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ2xlYXJzIHRoZSBzZWxlY3RlZCBmb3JtIGVsZW1lbnRzLlxyXG5cdCAqL1xyXG5cdCQuZm4uY2xlYXJGaWVsZHMgPSAkLmZuLmNsZWFySW5wdXRzID0gZnVuY3Rpb24oaW5jbHVkZUhpZGRlbikge1xyXG5cdFx0dmFyIHJlID0gL14oPzpjb2xvcnxkYXRlfGRhdGV0aW1lfGVtYWlsfG1vbnRofG51bWJlcnxwYXNzd29yZHxyYW5nZXxzZWFyY2h8dGVsfHRleHR8dGltZXx1cmx8d2VlaykkL2k7IC8vICdoaWRkZW4nIGlzIG5vdCBpbiB0aGlzIGxpc3RcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciB0ID0gdGhpcy50eXBlLCB0YWcgPSB0aGlzLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0aWYgKHJlLnRlc3QodCkgfHwgdGFnID09ICd0ZXh0YXJlYScpIHtcclxuXHRcdFx0XHR0aGlzLnZhbHVlID0gJyc7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodCA9PSAnY2hlY2tib3gnIHx8IHQgPT0gJ3JhZGlvJykge1xyXG5cdFx0XHRcdHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRhZyA9PSAnc2VsZWN0Jykge1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHQgPT0gXCJmaWxlXCIpIHtcclxuXHRcdFx0XHRpZiAoL01TSUUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcclxuXHRcdFx0XHRcdCQodGhpcykucmVwbGFjZVdpdGgoJCh0aGlzKS5jbG9uZSh0cnVlKSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCQodGhpcykudmFsKCcnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoaW5jbHVkZUhpZGRlbikge1xyXG5cdFx0XHRcdC8vIGluY2x1ZGVIaWRkZW4gY2FuIGJlIHRoZSB2YWx1ZSB0cnVlLCBvciBpdCBjYW4gYmUgYSBzZWxlY3RvciBzdHJpbmdcclxuXHRcdFx0XHQvLyBpbmRpY2F0aW5nIGEgc3BlY2lhbCB0ZXN0OyBmb3IgZXhhbXBsZTpcclxuXHRcdFx0XHQvLyAgJCgnI215Rm9ybScpLmNsZWFyRm9ybSgnLnNwZWNpYWw6aGlkZGVuJylcclxuXHRcdFx0XHQvLyB0aGUgYWJvdmUgd291bGQgY2xlYW4gaGlkZGVuIGlucHV0cyB0aGF0IGhhdmUgdGhlIGNsYXNzIG9mICdzcGVjaWFsJ1xyXG5cdFx0XHRcdGlmICggKGluY2x1ZGVIaWRkZW4gPT09IHRydWUgJiYgL2hpZGRlbi8udGVzdCh0KSkgfHxcclxuXHRcdFx0XHRcdCAodHlwZW9mIGluY2x1ZGVIaWRkZW4gPT0gJ3N0cmluZycgJiYgJCh0aGlzKS5pcyhpbmNsdWRlSGlkZGVuKSkgKVxyXG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9ICcnO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXNldHMgdGhlIGZvcm0gZGF0YS4gIENhdXNlcyBhbGwgZm9ybSBlbGVtZW50cyB0byBiZSByZXNldCB0byB0aGVpciBvcmlnaW5hbCB2YWx1ZS5cclxuXHQgKi9cclxuXHQkLmZuLnJlc2V0Rm9ybSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gZ3VhcmQgYWdhaW5zdCBhbiBpbnB1dCB3aXRoIHRoZSBuYW1lIG9mICdyZXNldCdcclxuXHRcdFx0Ly8gbm90ZSB0aGF0IElFIHJlcG9ydHMgdGhlIHJlc2V0IGZ1bmN0aW9uIGFzIGFuICdvYmplY3QnXHJcblx0XHRcdGlmICh0eXBlb2YgdGhpcy5yZXNldCA9PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2YgdGhpcy5yZXNldCA9PSAnb2JqZWN0JyAmJiAhdGhpcy5yZXNldC5ub2RlVHlwZSkpIHtcclxuXHRcdFx0XHR0aGlzLnJlc2V0KCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgYW55IG1hdGNoaW5nIGVsZW1lbnRzLlxyXG5cdCAqL1xyXG5cdCQuZm4uZW5hYmxlID0gZnVuY3Rpb24oYikge1xyXG5cdFx0aWYgKGIgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRiID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuZGlzYWJsZWQgPSAhYjtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrcy91bmNoZWNrcyBhbnkgbWF0Y2hpbmcgY2hlY2tib3hlcyBvciByYWRpbyBidXR0b25zIGFuZFxyXG5cdCAqIHNlbGVjdHMvZGVzZWxlY3RzIGFuZCBtYXRjaGluZyBvcHRpb24gZWxlbWVudHMuXHJcblx0ICovXHJcblx0JC5mbi5zZWxlY3RlZCA9IGZ1bmN0aW9uKHNlbGVjdCkge1xyXG5cdFx0aWYgKHNlbGVjdCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHNlbGVjdCA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgdCA9IHRoaXMudHlwZTtcclxuXHRcdFx0aWYgKHQgPT0gJ2NoZWNrYm94JyB8fCB0ID09ICdyYWRpbycpIHtcclxuXHRcdFx0XHR0aGlzLmNoZWNrZWQgPSBzZWxlY3Q7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ29wdGlvbicpIHtcclxuXHRcdFx0XHR2YXIgJHNlbCA9ICQodGhpcykucGFyZW50KCdzZWxlY3QnKTtcclxuXHRcdFx0XHRpZiAoc2VsZWN0ICYmICRzZWxbMF0gJiYgJHNlbFswXS50eXBlID09ICdzZWxlY3Qtb25lJykge1xyXG5cdFx0XHRcdFx0Ly8gZGVzZWxlY3QgYWxsIG90aGVyIG9wdGlvbnNcclxuXHRcdFx0XHRcdCRzZWwuZmluZCgnb3B0aW9uJykuc2VsZWN0ZWQoZmFsc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkID0gc2VsZWN0O1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvLyBleHBvc2UgZGVidWcgdmFyXHJcblx0JC5mbi5hamF4U3VibWl0LmRlYnVnID0gZmFsc2U7XHJcblxyXG5cdC8vIGhlbHBlciBmbiBmb3IgY29uc29sZSBsb2dnaW5nXHJcblx0ZnVuY3Rpb24gbG9nKCkge1xyXG5cdFx0aWYgKCEkLmZuLmFqYXhTdWJtaXQuZGVidWcpXHJcblx0XHRcdHJldHVybjtcclxuXHRcdHZhciBtc2cgPSAnW2pxdWVyeS5mb3JtXSAnICsgQXJyYXkucHJvdG90eXBlLmpvaW4uY2FsbChhcmd1bWVudHMsJycpO1xyXG5cdFx0aWYgKHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLmxvZykge1xyXG5cdFx0XHR3aW5kb3cuY29uc29sZS5sb2cobXNnKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHdpbmRvdy5vcGVyYSAmJiB3aW5kb3cub3BlcmEucG9zdEVycm9yKSB7XHJcblx0XHRcdHdpbmRvdy5vcGVyYS5wb3N0RXJyb3IobXNnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdH0pKCAodHlwZW9mKGpRdWVyeSkgIT0gJ3VuZGVmaW5lZCcpID8galF1ZXJ5IDogd2luZG93LlplcHRvICk7XHJcblxyXG4vL30pO1xyXG4iXX0=
},{}],11:[function(require,module,exports){
(function (global){
//define(function (require, exports, module) {
	var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

	$.fn.autocompleteEmail = function (options) {
		var me = this,
		$input = $(this);
		var selector = $input['selector'];
		var defaults = {
			resultsClass : "mailInstant",
			resultsid : "resultsEmail",
			overClass : "over",
			minChars : 1,
			zIndex : 1000000003,
			width : 2,
			delay : 50,
			esc : false,
			data : []};
		var options = $.extend(defaults, options);
		var timeout = null;
		var active = -1;
		var hasFocus = false;
		var prev = "";
		var emailList = pageData.emailList || '';
		var lastKeyPressCode = null;
		var _url = webData.WEB_ROOT + 'ajax.php?act=get_email_domains&language=' + webData.lang;
		this.init = function () {
			var results = document.createElement("div");
			var $results = $(results);
			$results.css("z-index", options.zIndex);
			$results.attr("id", options.resultsid);
			$results.hide().addClass(options.resultsClass).css("position", "absolute");
			if (!$('#' + options.resultsid)[0])
				$("body").prepend(results)
		};
		$(document).ready(function () {
			if (emailList == '') {
				$.ajax({
					type : 'post',
					url : _url,
					success : function (data) {
						data = eval('[' + data + ']')[0];
						if (data != '') {
							emailList = data;
							pageData.emailList = data;
						}
					}
				})
			}
		});
		function hidePP(e) {
			var unicode = e.keyCode ? e.keyCode : e.charCode;
			if (unicode == 27) {
				$('#' + options.resultsid).hide();
				options.esc = true;
				$(document).unbind('keydown', hidePP)
			}
		};
		$(document).keydown(hidePP);
		this.showResult = function () {
			if (!$input.val())
				return;
			me.requestData()
		};
		this.showHtml = function (data, _len, _val, __val, ul) {
			for (var i = 0; i < data.length; i++) {
				var li = document.createElement("li");
				li.innerHTML = '<span>' + __val + '</span>@' + data[i];
				ul.appendChild(li);
				if (_len != -1 && data[i].indexOf(_val) != 0) {
					$(li).remove()
				} else {
					$(li).show()
				}
			}
			$('li', ul).each(function (n) {
				if (n > 11) {
					$(this).remove()
				} else if (n > 0 && $(this).text() == $input.val()) {
					$(this).remove()
				} else {
					$(this).hover(function () {
						$(this).addClass(options.overClass);
						active = n
					}, function () {
						$(this).removeClass(options.overClass)
					}).click(function (e) {
						me.selectItem(this);
						e.preventDefault();
						e.stopPropagation()
					})
				}
				$(this).attr({
					title : $(this).text(),
					alt : $(this).text()
				})
			});
			if(selector == "#your_email"){
				$("#" + options.resultsid).css({
					top : ($input.offset().top + $input.outerHeight() - 1) + "px",
					left : $input.offset().left + "px",
					width : 1.5*$input.width() + options.width + 22
				}).html(ul).show()
			}else if(selector == "#newuser_register_email"){
				$("#" + options.resultsid).css({
					top : ($input.offset().top + $input.outerHeight() - 1) + "px",
					left : $input.offset().left + "px",
					width : $input.width() + options.width + 22,
					position:'fixed'
				}).html(ul).show()
			}else if(selector == "#newuser_popup_register_email"){
				$("#" + options.resultsid).css({
					top : ($input.offset().top + $input.outerHeight() - 1) + "px",
					left : $input.offset().left + "px",
					width : $input.width() + options.width + 22,
					position:'fixed'
				}).html(ul).show()
			}else{
				$("#" + options.resultsid).css({
					top: ($input.offset().top + $input.outerHeight() - 1) + "px",
					left: $input.offset().left + "px",
					width: $input.width() + options.width
				}).html(ul).show()
			}
		};
		this.requestData = function () {
			var ul = document.createElement("ul");
			var _title = document.createElement("h4");
			_title.setAttribute("style","white-space:nowrap;overflow:hidden;width:100%;");
			$(_title).html(_lang.page_login_select_email_type);
			ul.appendChild(_title);
			var _val = $input.val(),
			__val = $input.val();
			var _len = _val.indexOf('@');
			if (_len != -1) {
				_val = _val.substring(_len + 1, _val.length);
				__val = $input.val().substring(0, _len)
			}
			if (emailList == '') {
				$.ajax({
					type : 'post',
					url : _url,
					data : '',
					complete : function () {},
					success : function (data) {
						data = eval('[' + data + ']')[0];
						if (data != '') {
							me.showHtml(data, _len, _val, __val, ul);
							emailList = data
						}
					},
					error : function () {}

				})
			} else {
				me.showHtml(emailList, _len, _val, __val, ul)
			}
		};
		this.selectItem = function (li) {
			var v = $.trim($(li).text());
			$input.val(v);
			me.hideResultsNow()
		};
		this.hideResultsNow = function () {
			if (timeout)
				clearTimeout(timeout);
			timeout = setTimeout(function () {
					if ($("#" + options.resultsid).is(":visible")) {
						$("#" + options.resultsid).hide()
					}
				}, 200)
		};
		this.onChange = function () {
			if ((lastKeyPressCode >= 33 && lastKeyPressCode <= 45) || lastKeyPressCode == 144 || lastKeyPressCode == 145 || lastKeyPressCode == 9 || (lastKeyPressCode >= 112 && lastKeyPressCode <= 135))
				return;
			var v = $input.val();
			if (v.length >= options.minChars && !options.esc) {
				me.showResult()
			} else {
				$("#" + options.resultsid).hide()
			};
			options.esc = false
		};
		this.moveSelect = function (step) {
			var lis = $("li", $("#" + options.resultsid));
			active += step;
			if (active < 0) {
				active = lis.size() - 1
			} else if (active >= lis.size()) {
				active = 0
			};
			$(lis).removeClass(options.overClass);
			$(lis).eq(active).addClass(options.overClass);
			$input.val($(lis).eq(active).text())
		};
		$input.keyup(function (e) {
			if (lastKeyPressCode == 13)
				return;
			hasFocus = true;
			lastKeyPressCode = e.keyCode;
			if (lastKeyPressCode < 37 || lastKeyPressCode > 40) {
				active = -1;
				if (timeout)
					clearTimeout(timeout);
				timeout = setTimeout(function () {
						me.onChange()
					}, options.delay)
			}
		}).keydown(function (e) {
			hasFocus = true;
			lastKeyPressCode = e.keyCode;
			switch (e.keyCode) {
			case 13:
				if ($input.val() == "") {};
				me.hideResultsNow();
				if ($('#resultsEmail')[0].style.display == "block") {
					e.keyCode = 0;
					return false
				}
				break;
			case 38:
				e.preventDefault();
				if ($("#" + options.resultsid).is(":visible"))
					me.moveSelect(-1);
				break;
			case 40:
				e.preventDefault();
				if ($("#" + options.resultsid).is(":visible"))
					me.moveSelect(1);
				break;
			default:
				break
			}
		}).blur(function () {
			hasFocus = false;
			me.hideResultsNow()
		});
		this.init()
	};

//});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvbW9kL2F1dG9jb21wbGV0ZUVtYWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLy9kZWZpbmUoZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSkge1xyXG5cdHZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG5cclxuXHQkLmZuLmF1dG9jb21wbGV0ZUVtYWlsID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuXHRcdHZhciBtZSA9IHRoaXMsXHJcblx0XHQkaW5wdXQgPSAkKHRoaXMpO1xyXG5cdFx0dmFyIHNlbGVjdG9yID0gJGlucHV0WydzZWxlY3RvciddO1xyXG5cdFx0dmFyIGRlZmF1bHRzID0ge1xyXG5cdFx0XHRyZXN1bHRzQ2xhc3MgOiBcIm1haWxJbnN0YW50XCIsXHJcblx0XHRcdHJlc3VsdHNpZCA6IFwicmVzdWx0c0VtYWlsXCIsXHJcblx0XHRcdG92ZXJDbGFzcyA6IFwib3ZlclwiLFxyXG5cdFx0XHRtaW5DaGFycyA6IDEsXHJcblx0XHRcdHpJbmRleCA6IDEwMDAwMDAwMDMsXHJcblx0XHRcdHdpZHRoIDogMixcclxuXHRcdFx0ZGVsYXkgOiA1MCxcclxuXHRcdFx0ZXNjIDogZmFsc2UsXHJcblx0XHRcdGRhdGEgOiBbXX07XHJcblx0XHR2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHRcdHZhciB0aW1lb3V0ID0gbnVsbDtcclxuXHRcdHZhciBhY3RpdmUgPSAtMTtcclxuXHRcdHZhciBoYXNGb2N1cyA9IGZhbHNlO1xyXG5cdFx0dmFyIHByZXYgPSBcIlwiO1xyXG5cdFx0dmFyIGVtYWlsTGlzdCA9IHBhZ2VEYXRhLmVtYWlsTGlzdCB8fCAnJztcclxuXHRcdHZhciBsYXN0S2V5UHJlc3NDb2RlID0gbnVsbDtcclxuXHRcdHZhciBfdXJsID0gd2ViRGF0YS5XRUJfUk9PVCArICdhamF4LnBocD9hY3Q9Z2V0X2VtYWlsX2RvbWFpbnMmbGFuZ3VhZ2U9JyArIHdlYkRhdGEubGFuZztcclxuXHRcdHRoaXMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIHJlc3VsdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHR2YXIgJHJlc3VsdHMgPSAkKHJlc3VsdHMpO1xyXG5cdFx0XHQkcmVzdWx0cy5jc3MoXCJ6LWluZGV4XCIsIG9wdGlvbnMuekluZGV4KTtcclxuXHRcdFx0JHJlc3VsdHMuYXR0cihcImlkXCIsIG9wdGlvbnMucmVzdWx0c2lkKTtcclxuXHRcdFx0JHJlc3VsdHMuaGlkZSgpLmFkZENsYXNzKG9wdGlvbnMucmVzdWx0c0NsYXNzKS5jc3MoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpO1xyXG5cdFx0XHRpZiAoISQoJyMnICsgb3B0aW9ucy5yZXN1bHRzaWQpWzBdKVxyXG5cdFx0XHRcdCQoXCJib2R5XCIpLnByZXBlbmQocmVzdWx0cylcclxuXHRcdH07XHJcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChlbWFpbExpc3QgPT0gJycpIHtcclxuXHRcdFx0XHQkLmFqYXgoe1xyXG5cdFx0XHRcdFx0dHlwZSA6ICdwb3N0JyxcclxuXHRcdFx0XHRcdHVybCA6IF91cmwsXHJcblx0XHRcdFx0XHRzdWNjZXNzIDogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHRcdFx0XHRcdFx0ZGF0YSA9IGV2YWwoJ1snICsgZGF0YSArICddJylbMF07XHJcblx0XHRcdFx0XHRcdGlmIChkYXRhICE9ICcnKSB7XHJcblx0XHRcdFx0XHRcdFx0ZW1haWxMaXN0ID0gZGF0YTtcclxuXHRcdFx0XHRcdFx0XHRwYWdlRGF0YS5lbWFpbExpc3QgPSBkYXRhO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRmdW5jdGlvbiBoaWRlUFAoZSkge1xyXG5cdFx0XHR2YXIgdW5pY29kZSA9IGUua2V5Q29kZSA/IGUua2V5Q29kZSA6IGUuY2hhckNvZGU7XHJcblx0XHRcdGlmICh1bmljb2RlID09IDI3KSB7XHJcblx0XHRcdFx0JCgnIycgKyBvcHRpb25zLnJlc3VsdHNpZCkuaGlkZSgpO1xyXG5cdFx0XHRcdG9wdGlvbnMuZXNjID0gdHJ1ZTtcclxuXHRcdFx0XHQkKGRvY3VtZW50KS51bmJpbmQoJ2tleWRvd24nLCBoaWRlUFApXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHQkKGRvY3VtZW50KS5rZXlkb3duKGhpZGVQUCk7XHJcblx0XHR0aGlzLnNob3dSZXN1bHQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICghJGlucHV0LnZhbCgpKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0bWUucmVxdWVzdERhdGEoKVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuc2hvd0h0bWwgPSBmdW5jdGlvbiAoZGF0YSwgX2xlbiwgX3ZhbCwgX192YWwsIHVsKSB7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHRcdFx0XHRsaS5pbm5lckhUTUwgPSAnPHNwYW4+JyArIF9fdmFsICsgJzwvc3Bhbj5AJyArIGRhdGFbaV07XHJcblx0XHRcdFx0dWwuYXBwZW5kQ2hpbGQobGkpO1xyXG5cdFx0XHRcdGlmIChfbGVuICE9IC0xICYmIGRhdGFbaV0uaW5kZXhPZihfdmFsKSAhPSAwKSB7XHJcblx0XHRcdFx0XHQkKGxpKS5yZW1vdmUoKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkKGxpKS5zaG93KClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0JCgnbGknLCB1bCkuZWFjaChmdW5jdGlvbiAobikge1xyXG5cdFx0XHRcdGlmIChuID4gMTEpIHtcclxuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKClcclxuXHRcdFx0XHR9IGVsc2UgaWYgKG4gPiAwICYmICQodGhpcykudGV4dCgpID09ICRpbnB1dC52YWwoKSkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcyhvcHRpb25zLm92ZXJDbGFzcyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZSA9IG5cclxuXHRcdFx0XHRcdH0sIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcyhvcHRpb25zLm92ZXJDbGFzcylcclxuXHRcdFx0XHRcdH0pLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0XHRcdG1lLnNlbGVjdEl0ZW0odGhpcyk7XHJcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0JCh0aGlzKS5hdHRyKHtcclxuXHRcdFx0XHRcdHRpdGxlIDogJCh0aGlzKS50ZXh0KCksXHJcblx0XHRcdFx0XHRhbHQgOiAkKHRoaXMpLnRleHQoKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRpZihzZWxlY3RvciA9PSBcIiN5b3VyX2VtYWlsXCIpe1xyXG5cdFx0XHRcdCQoXCIjXCIgKyBvcHRpb25zLnJlc3VsdHNpZCkuY3NzKHtcclxuXHRcdFx0XHRcdHRvcCA6ICgkaW5wdXQub2Zmc2V0KCkudG9wICsgJGlucHV0Lm91dGVySGVpZ2h0KCkgLSAxKSArIFwicHhcIixcclxuXHRcdFx0XHRcdGxlZnQgOiAkaW5wdXQub2Zmc2V0KCkubGVmdCArIFwicHhcIixcclxuXHRcdFx0XHRcdHdpZHRoIDogMS41KiRpbnB1dC53aWR0aCgpICsgb3B0aW9ucy53aWR0aCArIDIyXHJcblx0XHRcdFx0fSkuaHRtbCh1bCkuc2hvdygpXHJcblx0XHRcdH1lbHNlIGlmKHNlbGVjdG9yID09IFwiI25ld3VzZXJfcmVnaXN0ZXJfZW1haWxcIil7XHJcblx0XHRcdFx0JChcIiNcIiArIG9wdGlvbnMucmVzdWx0c2lkKS5jc3Moe1xyXG5cdFx0XHRcdFx0dG9wIDogKCRpbnB1dC5vZmZzZXQoKS50b3AgKyAkaW5wdXQub3V0ZXJIZWlnaHQoKSAtIDEpICsgXCJweFwiLFxyXG5cdFx0XHRcdFx0bGVmdCA6ICRpbnB1dC5vZmZzZXQoKS5sZWZ0ICsgXCJweFwiLFxyXG5cdFx0XHRcdFx0d2lkdGggOiAkaW5wdXQud2lkdGgoKSArIG9wdGlvbnMud2lkdGggKyAyMixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOidmaXhlZCdcclxuXHRcdFx0XHR9KS5odG1sKHVsKS5zaG93KClcclxuXHRcdFx0fWVsc2UgaWYoc2VsZWN0b3IgPT0gXCIjbmV3dXNlcl9wb3B1cF9yZWdpc3Rlcl9lbWFpbFwiKXtcclxuXHRcdFx0XHQkKFwiI1wiICsgb3B0aW9ucy5yZXN1bHRzaWQpLmNzcyh7XHJcblx0XHRcdFx0XHR0b3AgOiAoJGlucHV0Lm9mZnNldCgpLnRvcCArICRpbnB1dC5vdXRlckhlaWdodCgpIC0gMSkgKyBcInB4XCIsXHJcblx0XHRcdFx0XHRsZWZ0IDogJGlucHV0Lm9mZnNldCgpLmxlZnQgKyBcInB4XCIsXHJcblx0XHRcdFx0XHR3aWR0aCA6ICRpbnB1dC53aWR0aCgpICsgb3B0aW9ucy53aWR0aCArIDIyLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246J2ZpeGVkJ1xyXG5cdFx0XHRcdH0pLmh0bWwodWwpLnNob3coKVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHQkKFwiI1wiICsgb3B0aW9ucy5yZXN1bHRzaWQpLmNzcyh7XHJcblx0XHRcdFx0XHR0b3A6ICgkaW5wdXQub2Zmc2V0KCkudG9wICsgJGlucHV0Lm91dGVySGVpZ2h0KCkgLSAxKSArIFwicHhcIixcclxuXHRcdFx0XHRcdGxlZnQ6ICRpbnB1dC5vZmZzZXQoKS5sZWZ0ICsgXCJweFwiLFxyXG5cdFx0XHRcdFx0d2lkdGg6ICRpbnB1dC53aWR0aCgpICsgb3B0aW9ucy53aWR0aFxyXG5cdFx0XHRcdH0pLmh0bWwodWwpLnNob3coKVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0dGhpcy5yZXF1ZXN0RGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5cdFx0XHR2YXIgX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG5cdFx0XHRfdGl0bGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcIndoaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47d2lkdGg6MTAwJTtcIik7XHJcblx0XHRcdCQoX3RpdGxlKS5odG1sKF9sYW5nLnBhZ2VfbG9naW5fc2VsZWN0X2VtYWlsX3R5cGUpO1xyXG5cdFx0XHR1bC5hcHBlbmRDaGlsZChfdGl0bGUpO1xyXG5cdFx0XHR2YXIgX3ZhbCA9ICRpbnB1dC52YWwoKSxcclxuXHRcdFx0X192YWwgPSAkaW5wdXQudmFsKCk7XHJcblx0XHRcdHZhciBfbGVuID0gX3ZhbC5pbmRleE9mKCdAJyk7XHJcblx0XHRcdGlmIChfbGVuICE9IC0xKSB7XHJcblx0XHRcdFx0X3ZhbCA9IF92YWwuc3Vic3RyaW5nKF9sZW4gKyAxLCBfdmFsLmxlbmd0aCk7XHJcblx0XHRcdFx0X192YWwgPSAkaW5wdXQudmFsKCkuc3Vic3RyaW5nKDAsIF9sZW4pXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVtYWlsTGlzdCA9PSAnJykge1xyXG5cdFx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0XHR0eXBlIDogJ3Bvc3QnLFxyXG5cdFx0XHRcdFx0dXJsIDogX3VybCxcclxuXHRcdFx0XHRcdGRhdGEgOiAnJyxcclxuXHRcdFx0XHRcdGNvbXBsZXRlIDogZnVuY3Rpb24gKCkge30sXHJcblx0XHRcdFx0XHRzdWNjZXNzIDogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHRcdFx0XHRcdFx0ZGF0YSA9IGV2YWwoJ1snICsgZGF0YSArICddJylbMF07XHJcblx0XHRcdFx0XHRcdGlmIChkYXRhICE9ICcnKSB7XHJcblx0XHRcdFx0XHRcdFx0bWUuc2hvd0h0bWwoZGF0YSwgX2xlbiwgX3ZhbCwgX192YWwsIHVsKTtcclxuXHRcdFx0XHRcdFx0XHRlbWFpbExpc3QgPSBkYXRhXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRlcnJvciA6IGZ1bmN0aW9uICgpIHt9XHJcblxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bWUuc2hvd0h0bWwoZW1haWxMaXN0LCBfbGVuLCBfdmFsLCBfX3ZhbCwgdWwpXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHR0aGlzLnNlbGVjdEl0ZW0gPSBmdW5jdGlvbiAobGkpIHtcclxuXHRcdFx0dmFyIHYgPSAkLnRyaW0oJChsaSkudGV4dCgpKTtcclxuXHRcdFx0JGlucHV0LnZhbCh2KTtcclxuXHRcdFx0bWUuaGlkZVJlc3VsdHNOb3coKVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuaGlkZVJlc3VsdHNOb3cgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0aW1lb3V0KVxyXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0aWYgKCQoXCIjXCIgKyBvcHRpb25zLnJlc3VsdHNpZCkuaXMoXCI6dmlzaWJsZVwiKSkge1xyXG5cdFx0XHRcdFx0XHQkKFwiI1wiICsgb3B0aW9ucy5yZXN1bHRzaWQpLmhpZGUoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sIDIwMClcclxuXHRcdH07XHJcblx0XHR0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoKGxhc3RLZXlQcmVzc0NvZGUgPj0gMzMgJiYgbGFzdEtleVByZXNzQ29kZSA8PSA0NSkgfHwgbGFzdEtleVByZXNzQ29kZSA9PSAxNDQgfHwgbGFzdEtleVByZXNzQ29kZSA9PSAxNDUgfHwgbGFzdEtleVByZXNzQ29kZSA9PSA5IHx8IChsYXN0S2V5UHJlc3NDb2RlID49IDExMiAmJiBsYXN0S2V5UHJlc3NDb2RlIDw9IDEzNSkpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR2YXIgdiA9ICRpbnB1dC52YWwoKTtcclxuXHRcdFx0aWYgKHYubGVuZ3RoID49IG9wdGlvbnMubWluQ2hhcnMgJiYgIW9wdGlvbnMuZXNjKSB7XHJcblx0XHRcdFx0bWUuc2hvd1Jlc3VsdCgpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JChcIiNcIiArIG9wdGlvbnMucmVzdWx0c2lkKS5oaWRlKClcclxuXHRcdFx0fTtcclxuXHRcdFx0b3B0aW9ucy5lc2MgPSBmYWxzZVxyXG5cdFx0fTtcclxuXHRcdHRoaXMubW92ZVNlbGVjdCA9IGZ1bmN0aW9uIChzdGVwKSB7XHJcblx0XHRcdHZhciBsaXMgPSAkKFwibGlcIiwgJChcIiNcIiArIG9wdGlvbnMucmVzdWx0c2lkKSk7XHJcblx0XHRcdGFjdGl2ZSArPSBzdGVwO1xyXG5cdFx0XHRpZiAoYWN0aXZlIDwgMCkge1xyXG5cdFx0XHRcdGFjdGl2ZSA9IGxpcy5zaXplKCkgLSAxXHJcblx0XHRcdH0gZWxzZSBpZiAoYWN0aXZlID49IGxpcy5zaXplKCkpIHtcclxuXHRcdFx0XHRhY3RpdmUgPSAwXHJcblx0XHRcdH07XHJcblx0XHRcdCQobGlzKS5yZW1vdmVDbGFzcyhvcHRpb25zLm92ZXJDbGFzcyk7XHJcblx0XHRcdCQobGlzKS5lcShhY3RpdmUpLmFkZENsYXNzKG9wdGlvbnMub3ZlckNsYXNzKTtcclxuXHRcdFx0JGlucHV0LnZhbCgkKGxpcykuZXEoYWN0aXZlKS50ZXh0KCkpXHJcblx0XHR9O1xyXG5cdFx0JGlucHV0LmtleXVwKGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGlmIChsYXN0S2V5UHJlc3NDb2RlID09IDEzKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0aGFzRm9jdXMgPSB0cnVlO1xyXG5cdFx0XHRsYXN0S2V5UHJlc3NDb2RlID0gZS5rZXlDb2RlO1xyXG5cdFx0XHRpZiAobGFzdEtleVByZXNzQ29kZSA8IDM3IHx8IGxhc3RLZXlQcmVzc0NvZGUgPiA0MCkge1xyXG5cdFx0XHRcdGFjdGl2ZSA9IC0xO1xyXG5cdFx0XHRcdGlmICh0aW1lb3V0KVxyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0bWUub25DaGFuZ2UoKVxyXG5cdFx0XHRcdFx0fSwgb3B0aW9ucy5kZWxheSlcclxuXHRcdFx0fVxyXG5cdFx0fSkua2V5ZG93bihmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRoYXNGb2N1cyA9IHRydWU7XHJcblx0XHRcdGxhc3RLZXlQcmVzc0NvZGUgPSBlLmtleUNvZGU7XHJcblx0XHRcdHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcblx0XHRcdGNhc2UgMTM6XHJcblx0XHRcdFx0aWYgKCRpbnB1dC52YWwoKSA9PSBcIlwiKSB7fTtcclxuXHRcdFx0XHRtZS5oaWRlUmVzdWx0c05vdygpO1xyXG5cdFx0XHRcdGlmICgkKCcjcmVzdWx0c0VtYWlsJylbMF0uc3R5bGUuZGlzcGxheSA9PSBcImJsb2NrXCIpIHtcclxuXHRcdFx0XHRcdGUua2V5Q29kZSA9IDA7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMzg6XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdGlmICgkKFwiI1wiICsgb3B0aW9ucy5yZXN1bHRzaWQpLmlzKFwiOnZpc2libGVcIikpXHJcblx0XHRcdFx0XHRtZS5tb3ZlU2VsZWN0KC0xKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA0MDpcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0aWYgKCQoXCIjXCIgKyBvcHRpb25zLnJlc3VsdHNpZCkuaXMoXCI6dmlzaWJsZVwiKSlcclxuXHRcdFx0XHRcdG1lLm1vdmVTZWxlY3QoMSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0fVxyXG5cdFx0fSkuYmx1cihmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGhhc0ZvY3VzID0gZmFsc2U7XHJcblx0XHRcdG1lLmhpZGVSZXN1bHRzTm93KClcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5pbml0KClcclxuXHR9O1xyXG5cclxuLy99KTtcclxuIl19
},{}],12:[function(require,module,exports){
//define(function (require, exports, module) {

	function Cookie() {}
	module.exports = Cookie;
	var cookie_domain = webData.cookie_domain
	
	Cookie.prototype.setCookie = function (NameOfCookie, value, expiredays, domain) {
		if (expiredays == null || expiredays == undefined || expiredays == '' || isNaN(expiredays)) {
			expiredays = 365;
		}
		var ExpireDate = new Date();
		ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));
		domain = domain ? domain : cookie_domain
        var _domain = domain ? ";domain=" + domain : ""
		document.cookie = NameOfCookie + "=" + escape(value) + _domain + ((expiredays == null) ? "": ";path=/; expires=" + ExpireDate.toGMTString());
	}

	Cookie.prototype.getCookie = function (NameOfCookie) {
		if (document.cookie.length > 0) {
			begin = document.cookie.indexOf(NameOfCookie + "=");
			if (begin != -1) {
				begin += NameOfCookie.length + 1;
				end = document.cookie.indexOf(";", begin);
				if (end == -1) end = document.cookie.length;
				return unescape(document.cookie.substring(begin, end));
			}
		}
		return null;
	}
	
//});

},{}],13:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

function Countdown(container, time, format, isWrap, isWeeklyDeal, isSpecialOffer) {
    this.container = $(container);
    this.time = time;
    this.format = (typeof(format) == 'undefined') ? '' : format;
    this.isWrap = isWrap || false;
    this.isWeeklyDeal = isWeeklyDeal || false;
    this.isSpecialOffer = isSpecialOffer || false;
}
module.exports = Countdown;

Countdown.prototype.run = function () {
    if (this.container[0]) {
        this.init(this.time);
    } else {
        return false;
    }
};

Countdown.prototype.init = function (time) {
    var me = this;
    var container = me.container;
    var next_time = time = time - 1 > 0 ? time - 1 : 0;
    var _day = '', _dayTxt = '', isDays = false;
    if (this.format == 'days') {
        _day = Math.floor(time / (24 * 60 * 60));
        time = time - _day * 24 * 60 * 60;
        _dayTxt = _lang.page_common_day;
        if (_day >= 2) {
            _dayTxt = _lang.page_common_days;
            isDays = true;
        }
        if (!this.isWeeklyDeal) {
            _dayTxt = '<span class="day_txt">' + _dayTxt + '</span>';
        }
    }

    var _hour = Math.floor(time / (60 * 60));
    time = time - _hour * 60 * 60;
    var _minute = Math.floor(time / 60);
    var _second = time - _minute * 60;
    if (_hour < 10) {
        _hour = "0" + _hour;
    }
    if (_minute < 10) {
        _minute = '0' + _minute;
    }
    if (_second < 10) {
        _second = '0' + _second;
    }

    //wrap date time format
    var time_str = _hour + ':' + _minute + ':' + _second;
    if (this.isWrap) {
        _day = '<span class="day">' + _day + '</span>';
        time_str = '<span class="hour">' + time_str + '</span>';
    }

    txt = _day + ' ' + _dayTxt + ' ' + time_str;
    if (this.isWeeklyDeal) {
        var dayTxtClass = "weekly_day_txt";
        if (isDays) {
            dayTxtClass = "weekly_days_txt";
        }
        var dayTxtLangId = dayTxtClass + "_" + webData.lang;
        _day = '<span class="weekly_day">' + _day + '</span>';
        _dayTxt = '<span class= ' + dayTxtClass + ' id=' + dayTxtLangId + ' >' + _dayTxt + '</span>';
        _hour = '<span class="weekly_hour">' + _hour + '</span>';
        _minute = '<span class="weekly_minute">' + _minute + '</span>';
        _second = '<span class="weekly_second">' + _second + '</span>';

        var txt = _day + _dayTxt + _hour + _minute + _second;
    }
    if(this.isSpecialOffer) {
        if (_day < 10) {
            _day = "0" + _day;
        }
        _dayTxt = '<em class="special-offer-day-txt">D</em>';
        var colon = '<em class="special-offer-colon">:</em>';
        _day = '<span class="special-offer-day">' + _day + _dayTxt + '</span>';
        _hour = '<span class="special-offer-hour">' + _hour + colon + '</span>';
        _minute = '<span class="special-offer-minute">' + _minute + colon + '</span>';
        _second = '<span class="special-offer-second">' + _second + '</span>';

        txt = _day + _hour + _minute + _second;
    }
    container.html(txt);

    setTimeout(function () {
        me.init(next_time);
    }, 1000);
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvbW9kL2NvdW50ZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxuXHJcbmZ1bmN0aW9uIENvdW50ZG93bihjb250YWluZXIsIHRpbWUsIGZvcm1hdCwgaXNXcmFwLCBpc1dlZWtseURlYWwsIGlzU3BlY2lhbE9mZmVyKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcclxuICAgIHRoaXMudGltZSA9IHRpbWU7XHJcbiAgICB0aGlzLmZvcm1hdCA9ICh0eXBlb2YoZm9ybWF0KSA9PSAndW5kZWZpbmVkJykgPyAnJyA6IGZvcm1hdDtcclxuICAgIHRoaXMuaXNXcmFwID0gaXNXcmFwIHx8IGZhbHNlO1xyXG4gICAgdGhpcy5pc1dlZWtseURlYWwgPSBpc1dlZWtseURlYWwgfHwgZmFsc2U7XHJcbiAgICB0aGlzLmlzU3BlY2lhbE9mZmVyID0gaXNTcGVjaWFsT2ZmZXIgfHwgZmFsc2U7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBDb3VudGRvd247XHJcblxyXG5Db3VudGRvd24ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmNvbnRhaW5lclswXSkge1xyXG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLnRpbWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn07XHJcblxyXG5Db3VudGRvd24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAodGltZSkge1xyXG4gICAgdmFyIG1lID0gdGhpcztcclxuICAgIHZhciBjb250YWluZXIgPSBtZS5jb250YWluZXI7XHJcbiAgICB2YXIgbmV4dF90aW1lID0gdGltZSA9IHRpbWUgLSAxID4gMCA/IHRpbWUgLSAxIDogMDtcclxuICAgIHZhciBfZGF5ID0gJycsIF9kYXlUeHQgPSAnJywgaXNEYXlzID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5mb3JtYXQgPT0gJ2RheXMnKSB7XHJcbiAgICAgICAgX2RheSA9IE1hdGguZmxvb3IodGltZSAvICgyNCAqIDYwICogNjApKTtcclxuICAgICAgICB0aW1lID0gdGltZSAtIF9kYXkgKiAyNCAqIDYwICogNjA7XHJcbiAgICAgICAgX2RheVR4dCA9IF9sYW5nLnBhZ2VfY29tbW9uX2RheTtcclxuICAgICAgICBpZiAoX2RheSA+PSAyKSB7XHJcbiAgICAgICAgICAgIF9kYXlUeHQgPSBfbGFuZy5wYWdlX2NvbW1vbl9kYXlzO1xyXG4gICAgICAgICAgICBpc0RheXMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuaXNXZWVrbHlEZWFsKSB7XHJcbiAgICAgICAgICAgIF9kYXlUeHQgPSAnPHNwYW4gY2xhc3M9XCJkYXlfdHh0XCI+JyArIF9kYXlUeHQgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaG91ciA9IE1hdGguZmxvb3IodGltZSAvICg2MCAqIDYwKSk7XHJcbiAgICB0aW1lID0gdGltZSAtIF9ob3VyICogNjAgKiA2MDtcclxuICAgIHZhciBfbWludXRlID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xyXG4gICAgdmFyIF9zZWNvbmQgPSB0aW1lIC0gX21pbnV0ZSAqIDYwO1xyXG4gICAgaWYgKF9ob3VyIDwgMTApIHtcclxuICAgICAgICBfaG91ciA9IFwiMFwiICsgX2hvdXI7XHJcbiAgICB9XHJcbiAgICBpZiAoX21pbnV0ZSA8IDEwKSB7XHJcbiAgICAgICAgX21pbnV0ZSA9ICcwJyArIF9taW51dGU7XHJcbiAgICB9XHJcbiAgICBpZiAoX3NlY29uZCA8IDEwKSB7XHJcbiAgICAgICAgX3NlY29uZCA9ICcwJyArIF9zZWNvbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy93cmFwIGRhdGUgdGltZSBmb3JtYXRcclxuICAgIHZhciB0aW1lX3N0ciA9IF9ob3VyICsgJzonICsgX21pbnV0ZSArICc6JyArIF9zZWNvbmQ7XHJcbiAgICBpZiAodGhpcy5pc1dyYXApIHtcclxuICAgICAgICBfZGF5ID0gJzxzcGFuIGNsYXNzPVwiZGF5XCI+JyArIF9kYXkgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgdGltZV9zdHIgPSAnPHNwYW4gY2xhc3M9XCJob3VyXCI+JyArIHRpbWVfc3RyICsgJzwvc3Bhbj4nO1xyXG4gICAgfVxyXG5cclxuICAgIHR4dCA9IF9kYXkgKyAnICcgKyBfZGF5VHh0ICsgJyAnICsgdGltZV9zdHI7XHJcbiAgICBpZiAodGhpcy5pc1dlZWtseURlYWwpIHtcclxuICAgICAgICB2YXIgZGF5VHh0Q2xhc3MgPSBcIndlZWtseV9kYXlfdHh0XCI7XHJcbiAgICAgICAgaWYgKGlzRGF5cykge1xyXG4gICAgICAgICAgICBkYXlUeHRDbGFzcyA9IFwid2Vla2x5X2RheXNfdHh0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkYXlUeHRMYW5nSWQgPSBkYXlUeHRDbGFzcyArIFwiX1wiICsgd2ViRGF0YS5sYW5nO1xyXG4gICAgICAgIF9kYXkgPSAnPHNwYW4gY2xhc3M9XCJ3ZWVrbHlfZGF5XCI+JyArIF9kYXkgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgX2RheVR4dCA9ICc8c3BhbiBjbGFzcz0gJyArIGRheVR4dENsYXNzICsgJyBpZD0nICsgZGF5VHh0TGFuZ0lkICsgJyA+JyArIF9kYXlUeHQgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgX2hvdXIgPSAnPHNwYW4gY2xhc3M9XCJ3ZWVrbHlfaG91clwiPicgKyBfaG91ciArICc8L3NwYW4+JztcclxuICAgICAgICBfbWludXRlID0gJzxzcGFuIGNsYXNzPVwid2Vla2x5X21pbnV0ZVwiPicgKyBfbWludXRlICsgJzwvc3Bhbj4nO1xyXG4gICAgICAgIF9zZWNvbmQgPSAnPHNwYW4gY2xhc3M9XCJ3ZWVrbHlfc2Vjb25kXCI+JyArIF9zZWNvbmQgKyAnPC9zcGFuPic7XHJcblxyXG4gICAgICAgIHZhciB0eHQgPSBfZGF5ICsgX2RheVR4dCArIF9ob3VyICsgX21pbnV0ZSArIF9zZWNvbmQ7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmlzU3BlY2lhbE9mZmVyKSB7XHJcbiAgICAgICAgaWYgKF9kYXkgPCAxMCkge1xyXG4gICAgICAgICAgICBfZGF5ID0gXCIwXCIgKyBfZGF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBfZGF5VHh0ID0gJzxlbSBjbGFzcz1cInNwZWNpYWwtb2ZmZXItZGF5LXR4dFwiPkQ8L2VtPic7XHJcbiAgICAgICAgdmFyIGNvbG9uID0gJzxlbSBjbGFzcz1cInNwZWNpYWwtb2ZmZXItY29sb25cIj46PC9lbT4nO1xyXG4gICAgICAgIF9kYXkgPSAnPHNwYW4gY2xhc3M9XCJzcGVjaWFsLW9mZmVyLWRheVwiPicgKyBfZGF5ICsgX2RheVR4dCArICc8L3NwYW4+JztcclxuICAgICAgICBfaG91ciA9ICc8c3BhbiBjbGFzcz1cInNwZWNpYWwtb2ZmZXItaG91clwiPicgKyBfaG91ciArIGNvbG9uICsgJzwvc3Bhbj4nO1xyXG4gICAgICAgIF9taW51dGUgPSAnPHNwYW4gY2xhc3M9XCJzcGVjaWFsLW9mZmVyLW1pbnV0ZVwiPicgKyBfbWludXRlICsgY29sb24gKyAnPC9zcGFuPic7XHJcbiAgICAgICAgX3NlY29uZCA9ICc8c3BhbiBjbGFzcz1cInNwZWNpYWwtb2ZmZXItc2Vjb25kXCI+JyArIF9zZWNvbmQgKyAnPC9zcGFuPic7XHJcblxyXG4gICAgICAgIHR4dCA9IF9kYXkgKyBfaG91ciArIF9taW51dGUgKyBfc2Vjb25kO1xyXG4gICAgfVxyXG4gICAgY29udGFpbmVyLmh0bWwodHh0KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtZS5pbml0KG5leHRfdGltZSk7XHJcbiAgICB9LCAxMDAwKTtcclxufTsiXX0=
},{}],14:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
require('../lib/jqueryForm');
require('../mod/autocompleteEmail');
require('../mod/formCheck');

var Cookie = require('../mod/cookie');
var cookie = new Cookie();

var elem_mask = $('.register-dialog-mask');
var elem_coupon_dialog = $('#dialog_p');

//打开coupon code 展示弹窗
function open_coupon_dialog(couponCode,back) {
    var dh = $(document).height();
    handler_coupon_dialog(couponCode,back);
    elem_mask.height(dh).show();
    elem_coupon_dialog.show();
    $("body").css('overflow','hidden');
}

function handler_coupon_dialog(couponCode,back) {
    $("#coupon-code").html('<span style="color: #342F36">' + _lang.page_pop_dialog_register_coupon_tip + ': ' + '</span>' + couponCode);
    elem_coupon_dialog.on('click', '.close', function() {
        close_dialog(elem_mask, elem_coupon_dialog);
        location.href = back;
    });
    elem_coupon_dialog.on('click', '.button', function() {
        close_dialog(elem_mask, elem_coupon_dialog);
        location.href = back;
    });
    elem_mask.off('click');
}

function close_dialog(elem_mask, elem_dialog) {
    elem_mask.hide();
    elem_dialog.hide();
    $("body").css('overflow','auto');
    window.dataLayer.push({
        'category' : 'registerDialog',
        'action' : 'regDialogCloses',
        'event' : 'popRegisterDialog'
    });
}

exports.init = function(CouponCode,back) {
    if(elem_mask.length && elem_coupon_dialog.length) {
        if ((!elem_mask.is(":visible"))) {
            open_coupon_dialog(CouponCode,back);
            if($(".one_register_banner").length>0){
                $('#judge_register_banner').removeClass('two_register_banner');
            }else{
                $('#judge_register_banner').addClass('one_register_banner');
                $('#judge_register_banner').removeClass('two_register_banner');
            }
        }
    }
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvbW9kL2NvdXBvbl9yZWdpc3Rlcl9kaWFsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcbnJlcXVpcmUoJy4uL2xpYi9qcXVlcnlGb3JtJyk7XHJcbnJlcXVpcmUoJy4uL21vZC9hdXRvY29tcGxldGVFbWFpbCcpO1xyXG5yZXF1aXJlKCcuLi9tb2QvZm9ybUNoZWNrJyk7XHJcblxyXG52YXIgQ29va2llID0gcmVxdWlyZSgnLi4vbW9kL2Nvb2tpZScpO1xyXG52YXIgY29va2llID0gbmV3IENvb2tpZSgpO1xyXG5cclxudmFyIGVsZW1fbWFzayA9ICQoJy5yZWdpc3Rlci1kaWFsb2ctbWFzaycpO1xyXG52YXIgZWxlbV9jb3Vwb25fZGlhbG9nID0gJCgnI2RpYWxvZ19wJyk7XHJcblxyXG4vL+aJk+W8gGNvdXBvbiBjb2RlIOWxleekuuW8ueeql1xyXG5mdW5jdGlvbiBvcGVuX2NvdXBvbl9kaWFsb2coY291cG9uQ29kZSxiYWNrKSB7XHJcbiAgICB2YXIgZGggPSAkKGRvY3VtZW50KS5oZWlnaHQoKTtcclxuICAgIGhhbmRsZXJfY291cG9uX2RpYWxvZyhjb3Vwb25Db2RlLGJhY2spO1xyXG4gICAgZWxlbV9tYXNrLmhlaWdodChkaCkuc2hvdygpO1xyXG4gICAgZWxlbV9jb3Vwb25fZGlhbG9nLnNob3coKTtcclxuICAgICQoXCJib2R5XCIpLmNzcygnb3ZlcmZsb3cnLCdoaWRkZW4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlcl9jb3Vwb25fZGlhbG9nKGNvdXBvbkNvZGUsYmFjaykge1xyXG4gICAgJChcIiNjb3Vwb24tY29kZVwiKS5odG1sKCc8c3BhbiBzdHlsZT1cImNvbG9yOiAjMzQyRjM2XCI+JyArIF9sYW5nLnBhZ2VfcG9wX2RpYWxvZ19yZWdpc3Rlcl9jb3Vwb25fdGlwICsgJzogJyArICc8L3NwYW4+JyArIGNvdXBvbkNvZGUpO1xyXG4gICAgZWxlbV9jb3Vwb25fZGlhbG9nLm9uKCdjbGljaycsICcuY2xvc2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjbG9zZV9kaWFsb2coZWxlbV9tYXNrLCBlbGVtX2NvdXBvbl9kaWFsb2cpO1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBiYWNrO1xyXG4gICAgfSk7XHJcbiAgICBlbGVtX2NvdXBvbl9kaWFsb2cub24oJ2NsaWNrJywgJy5idXR0b24nLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjbG9zZV9kaWFsb2coZWxlbV9tYXNrLCBlbGVtX2NvdXBvbl9kaWFsb2cpO1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBiYWNrO1xyXG4gICAgfSk7XHJcbiAgICBlbGVtX21hc2sub2ZmKCdjbGljaycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZV9kaWFsb2coZWxlbV9tYXNrLCBlbGVtX2RpYWxvZykge1xyXG4gICAgZWxlbV9tYXNrLmhpZGUoKTtcclxuICAgIGVsZW1fZGlhbG9nLmhpZGUoKTtcclxuICAgICQoXCJib2R5XCIpLmNzcygnb3ZlcmZsb3cnLCdhdXRvJyk7XHJcbiAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goe1xyXG4gICAgICAgICdjYXRlZ29yeScgOiAncmVnaXN0ZXJEaWFsb2cnLFxyXG4gICAgICAgICdhY3Rpb24nIDogJ3JlZ0RpYWxvZ0Nsb3NlcycsXHJcbiAgICAgICAgJ2V2ZW50JyA6ICdwb3BSZWdpc3RlckRpYWxvZydcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnRzLmluaXQgPSBmdW5jdGlvbihDb3Vwb25Db2RlLGJhY2spIHtcclxuICAgIGlmKGVsZW1fbWFzay5sZW5ndGggJiYgZWxlbV9jb3Vwb25fZGlhbG9nLmxlbmd0aCkge1xyXG4gICAgICAgIGlmICgoIWVsZW1fbWFzay5pcyhcIjp2aXNpYmxlXCIpKSkge1xyXG4gICAgICAgICAgICBvcGVuX2NvdXBvbl9kaWFsb2coQ291cG9uQ29kZSxiYWNrKTtcclxuICAgICAgICAgICAgaWYoJChcIi5vbmVfcmVnaXN0ZXJfYmFubmVyXCIpLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICQoJyNqdWRnZV9yZWdpc3Rlcl9iYW5uZXInKS5yZW1vdmVDbGFzcygndHdvX3JlZ2lzdGVyX2Jhbm5lcicpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICQoJyNqdWRnZV9yZWdpc3Rlcl9iYW5uZXInKS5hZGRDbGFzcygnb25lX3JlZ2lzdGVyX2Jhbm5lcicpO1xyXG4gICAgICAgICAgICAgICAgJCgnI2p1ZGdlX3JlZ2lzdGVyX2Jhbm5lcicpLnJlbW92ZUNsYXNzKCd0d29fcmVnaXN0ZXJfYmFubmVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07Il19
},{"../lib/jqueryForm":10,"../mod/autocompleteEmail":11,"../mod/cookie":12,"../mod/formCheck":17}],15:[function(require,module,exports){
(function (global){
//define(function (require, exports, module) {

    var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
    var Cookie = require('../mod/cookie');
    var cookie = new Cookie();

	function Dialog() {}
	module.exports = new Dialog();

	Dialog.prototype.open = function(setting) {
		var me = this;
		var params = $.extend({
				modId : 'dialog',
				overlayOpacity : 0.5,
				overlayBgColor : '#000',
				width : Math.min(900, $(window).width() - 100),
				html : '',
			    canClose : true,
				closeWhenClickingBg : false,
                isUpdateHtml : false
			}, setting);

		//show overlayer
		if ($('#dialogOverlay').size() > 0) {
			var layer = $('#dialogOverlay');
		} else {
			var layer = $('<div id="dialogOverlay"><div style="background:' + params.overlayBgColor + ';"></div></div>').prependTo('body');
		};

        layer.show().children('div').stop().fadeTo(0, 0.1).fadeTo("fast", params.overlayOpacity);

		//show dialog box
		if($('#' + params.modId).size() == 0) {
			var html = ['<div class="dialog" id="' + params.modId + '">', '<div class="dialog-wrapper">', '<div class="dialog-content" oncontextmenu="return false">', '<img src="' + webData.IMG_PATH + 'tran.gif" class="dialog-img">', '</div>', '<a href="javascript:void(0)" class="dialog-close"></a>', '</div>', '</div>'];
			if (!params.canClose) {
				html[5] = "";
			}
			layer.after(html.join(''));
		}
		var winbox = $('#' + params.modId);
		var mainShow = winbox.find('.dialog-content');
		var btnClose = winbox.find('.dialog-close');

		if((params.html != "" && mainShow.find('.dialog-img').size() > 0) || (params.html != "" && params.isUpdateHtml)) {
			mainShow.html(params.html);
		}

		winbox.show().css({
			"top" : Math.max(50, $(window).scrollTop() + $(window).height() / 2 - winbox.height() / 2),
			"left" : Math.max(0, $(window).scrollLeft() + $(window).width() / 2 - winbox.width() / 2)
		});

		//click Esc key to hide all dialogs
		$(document).bind('keydown', enableEsc);

		//click overlayer
		layer.unbind();
		if (params.closeWhenClickingBg) {
			layer.bind('click', function () {
				me.close(winbox, true);
			});
		}

		//click close btn
		btnClose.unbind().bind('click', function () {
            if (!$.isEmptyObject(window.review) && window.review.status) {
                window.review = {
                    status: false,
                    url: webData.WEB_ROOT
                }
            }
            if (typeof cookie.getCookie('signInGoogle') != 'undefined' && cookie.getCookie('signInGoogle')) {
                cookie.setCookie('signInGoogle', false, 30);
            }
            cookie.setCookie('scrollTop', 0, -1);
            cookie.setCookie('scrollLeft', 0, -1);
			cookie.setCookie('favGoodsId', 0, -1);
			me.close(winbox, true);
			//return false
		});
		return winbox;
	};
	Dialog.prototype.openRegisterLogin = function(setting) {
		var me = this;
		var params = $.extend({
				modId : 'dialog',
				overlayOpacity : 0.5,
				overlayBgColor : '#000',
				width : Math.min(900, $(window).width() - 100),
				html : '',
			    canClose : true,
				closeWhenClickingBg : false,
                isUpdateHtml : false
			}, setting);

		//show overlayer
		if ($('#dialogOverlay').size() > 0) {
			var layer = $('#dialogOverlay');
		} else {
			var layer = $('<div id="dialogOverlay"><div style="background:' + params.overlayBgColor + ';"></div></div>').prependTo('body');
		};

        layer.show().children('div').stop().fadeTo(0, 0.1).fadeTo("fast", params.overlayOpacity);

		//show dialog box
		if($('#' + params.modId).size() == 0) {
			var html = ['<div class="dialog showroom-login-dialog" id="' + params.modId + '">', '<div class="dialog-wrapper">', '<div class="dialog-content" oncontextmenu="return false">', '<img src="' + webData.IMG_PATH + 'tran.gif" class="dialog-img">', '</div>', '<a href="javascript:void(0)" class="dialog-close"></a>', '</div>', '</div>'];
			if (!params.canClose) {
				html[5] = "";
			}
			layer.after(html.join(''));
		}
		var winbox = $('#' + params.modId);
		var mainShow = winbox.find('.dialog-content');
		var btnClose = winbox.find('.dialog-close');

		if((params.html != "" && mainShow.find('.dialog-img').size() > 0) || (params.html != "" && params.isUpdateHtml)) {
			mainShow.html(params.html);
		}

		// winbox.show().css({
		// 	"top" : Math.max(50, $(window).scrollTop() + $(window).height() / 2 - winbox.height() / 2),
		// 	"left" : Math.max(0, $(window).scrollLeft() + $(window).width() / 2 - winbox.width() / 2)
		// });
		winbox.css('display', 'flex')
		winbox.find('.dialog-close-icon').on('click', function () {
			layer.hide();
			winbox.hide();
		})
		//click Esc key to hide all dialogs
		$(document).bind('keydown', enableEsc);

		//click overlayer
		layer.unbind();
		if (params.closeWhenClickingBg) {
			layer.bind('click', function () {
				me.close(winbox, true);
			});
		}

		//click close btn
		btnClose.unbind().bind('click', function () {
            if (!$.isEmptyObject(window.review) && window.review.status) {
                window.review = {
                    status: false,
                    url: webData.WEB_ROOT
                }
            }
            if (typeof cookie.getCookie('signInGoogle') != 'undefined' && cookie.getCookie('signInGoogle')) {
                cookie.setCookie('signInGoogle', false, 30);
            }
            cookie.setCookie('scrollTop', 0, -1);
            cookie.setCookie('scrollLeft', 0, -1);
			cookie.setCookie('favGoodsId', 0, -1);
			me.close(winbox, true);
			//return false
		});
		return winbox;
	};

	Dialog.prototype.close = function(winbox, isHideOverlay) {
		$(winbox).hide();
		if(isHideOverlay) {
			var layer = $('#dialogOverlay');
			layer.children('div').stop().fadeTo("fast", 0.1, function () {
				layer.hide();
				layer.unbind();
			});
		}
		$(document).unbind('keydown', enableEsc);
	};

	function enableEsc(e) {
		var unicode = e.keyCode ? e.keyCode : e.charCode;
		if (unicode == 27) {
			$('.dialog:visible').hide();
			var layer = $('#dialogOverlay');
			layer.children('div').stop().fadeTo("fast", 0.1, function () {
				layer.hide()
			})
			$(document).unbind('keydown', enableEsc)
		}
	}

//});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvbW9kL2RpYWxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvL2RlZmluZShmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgbW9kdWxlKSB7XHJcblxyXG4gICAgdmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcbiAgICB2YXIgQ29va2llID0gcmVxdWlyZSgnLi4vbW9kL2Nvb2tpZScpO1xyXG4gICAgdmFyIGNvb2tpZSA9IG5ldyBDb29raWUoKTtcclxuXHJcblx0ZnVuY3Rpb24gRGlhbG9nKCkge31cclxuXHRtb2R1bGUuZXhwb3J0cyA9IG5ldyBEaWFsb2coKTtcclxuXHJcblx0RGlhbG9nLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oc2V0dGluZykge1xyXG5cdFx0dmFyIG1lID0gdGhpcztcclxuXHRcdHZhciBwYXJhbXMgPSAkLmV4dGVuZCh7XHJcblx0XHRcdFx0bW9kSWQgOiAnZGlhbG9nJyxcclxuXHRcdFx0XHRvdmVybGF5T3BhY2l0eSA6IDAuNSxcclxuXHRcdFx0XHRvdmVybGF5QmdDb2xvciA6ICcjMDAwJyxcclxuXHRcdFx0XHR3aWR0aCA6IE1hdGgubWluKDkwMCwgJCh3aW5kb3cpLndpZHRoKCkgLSAxMDApLFxyXG5cdFx0XHRcdGh0bWwgOiAnJyxcclxuXHRcdFx0ICAgIGNhbkNsb3NlIDogdHJ1ZSxcclxuXHRcdFx0XHRjbG9zZVdoZW5DbGlja2luZ0JnIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc1VwZGF0ZUh0bWwgOiBmYWxzZVxyXG5cdFx0XHR9LCBzZXR0aW5nKTtcclxuXHJcblx0XHQvL3Nob3cgb3ZlcmxheWVyXHJcblx0XHRpZiAoJCgnI2RpYWxvZ092ZXJsYXknKS5zaXplKCkgPiAwKSB7XHJcblx0XHRcdHZhciBsYXllciA9ICQoJyNkaWFsb2dPdmVybGF5Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgbGF5ZXIgPSAkKCc8ZGl2IGlkPVwiZGlhbG9nT3ZlcmxheVwiPjxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOicgKyBwYXJhbXMub3ZlcmxheUJnQ29sb3IgKyAnO1wiPjwvZGl2PjwvZGl2PicpLnByZXBlbmRUbygnYm9keScpO1xyXG5cdFx0fTtcclxuXHJcbiAgICAgICAgbGF5ZXIuc2hvdygpLmNoaWxkcmVuKCdkaXYnKS5zdG9wKCkuZmFkZVRvKDAsIDAuMSkuZmFkZVRvKFwiZmFzdFwiLCBwYXJhbXMub3ZlcmxheU9wYWNpdHkpO1xyXG5cclxuXHRcdC8vc2hvdyBkaWFsb2cgYm94XHJcblx0XHRpZigkKCcjJyArIHBhcmFtcy5tb2RJZCkuc2l6ZSgpID09IDApIHtcclxuXHRcdFx0dmFyIGh0bWwgPSBbJzxkaXYgY2xhc3M9XCJkaWFsb2dcIiBpZD1cIicgKyBwYXJhbXMubW9kSWQgKyAnXCI+JywgJzxkaXYgY2xhc3M9XCJkaWFsb2ctd3JhcHBlclwiPicsICc8ZGl2IGNsYXNzPVwiZGlhbG9nLWNvbnRlbnRcIiBvbmNvbnRleHRtZW51PVwicmV0dXJuIGZhbHNlXCI+JywgJzxpbWcgc3JjPVwiJyArIHdlYkRhdGEuSU1HX1BBVEggKyAndHJhbi5naWZcIiBjbGFzcz1cImRpYWxvZy1pbWdcIj4nLCAnPC9kaXY+JywgJzxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImRpYWxvZy1jbG9zZVwiPjwvYT4nLCAnPC9kaXY+JywgJzwvZGl2PiddO1xyXG5cdFx0XHRpZiAoIXBhcmFtcy5jYW5DbG9zZSkge1xyXG5cdFx0XHRcdGh0bWxbNV0gPSBcIlwiO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxheWVyLmFmdGVyKGh0bWwuam9pbignJykpO1xyXG5cdFx0fVxyXG5cdFx0dmFyIHdpbmJveCA9ICQoJyMnICsgcGFyYW1zLm1vZElkKTtcclxuXHRcdHZhciBtYWluU2hvdyA9IHdpbmJveC5maW5kKCcuZGlhbG9nLWNvbnRlbnQnKTtcclxuXHRcdHZhciBidG5DbG9zZSA9IHdpbmJveC5maW5kKCcuZGlhbG9nLWNsb3NlJyk7XHJcblxyXG5cdFx0aWYoKHBhcmFtcy5odG1sICE9IFwiXCIgJiYgbWFpblNob3cuZmluZCgnLmRpYWxvZy1pbWcnKS5zaXplKCkgPiAwKSB8fCAocGFyYW1zLmh0bWwgIT0gXCJcIiAmJiBwYXJhbXMuaXNVcGRhdGVIdG1sKSkge1xyXG5cdFx0XHRtYWluU2hvdy5odG1sKHBhcmFtcy5odG1sKTtcclxuXHRcdH1cclxuXHJcblx0XHR3aW5ib3guc2hvdygpLmNzcyh7XHJcblx0XHRcdFwidG9wXCIgOiBNYXRoLm1heCg1MCwgJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmhlaWdodCgpIC8gMiAtIHdpbmJveC5oZWlnaHQoKSAvIDIpLFxyXG5cdFx0XHRcImxlZnRcIiA6IE1hdGgubWF4KDAsICQod2luZG93KS5zY3JvbGxMZWZ0KCkgKyAkKHdpbmRvdykud2lkdGgoKSAvIDIgLSB3aW5ib3gud2lkdGgoKSAvIDIpXHJcblx0XHR9KTtcclxuXHJcblx0XHQvL2NsaWNrIEVzYyBrZXkgdG8gaGlkZSBhbGwgZGlhbG9nc1xyXG5cdFx0JChkb2N1bWVudCkuYmluZCgna2V5ZG93bicsIGVuYWJsZUVzYyk7XHJcblxyXG5cdFx0Ly9jbGljayBvdmVybGF5ZXJcclxuXHRcdGxheWVyLnVuYmluZCgpO1xyXG5cdFx0aWYgKHBhcmFtcy5jbG9zZVdoZW5DbGlja2luZ0JnKSB7XHJcblx0XHRcdGxheWVyLmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdG1lLmNsb3NlKHdpbmJveCwgdHJ1ZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vY2xpY2sgY2xvc2UgYnRuXHJcblx0XHRidG5DbG9zZS51bmJpbmQoKS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCEkLmlzRW1wdHlPYmplY3Qod2luZG93LnJldmlldykgJiYgd2luZG93LnJldmlldy5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZXZpZXcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHdlYkRhdGEuV0VCX1JPT1RcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvb2tpZS5nZXRDb29raWUoJ3NpZ25Jbkdvb2dsZScpICE9ICd1bmRlZmluZWQnICYmIGNvb2tpZS5nZXRDb29raWUoJ3NpZ25Jbkdvb2dsZScpKSB7XHJcbiAgICAgICAgICAgICAgICBjb29raWUuc2V0Q29va2llKCdzaWduSW5Hb29nbGUnLCBmYWxzZSwgMzApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXRDb29raWUoJ3Njcm9sbFRvcCcsIDAsIC0xKTtcclxuICAgICAgICAgICAgY29va2llLnNldENvb2tpZSgnc2Nyb2xsTGVmdCcsIDAsIC0xKTtcclxuXHRcdFx0Y29va2llLnNldENvb2tpZSgnZmF2R29vZHNJZCcsIDAsIC0xKTtcclxuXHRcdFx0bWUuY2xvc2Uod2luYm94LCB0cnVlKTtcclxuXHRcdFx0Ly9yZXR1cm4gZmFsc2VcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHdpbmJveDtcclxuXHR9O1xyXG5cdERpYWxvZy5wcm90b3R5cGUub3BlblJlZ2lzdGVyTG9naW4gPSBmdW5jdGlvbihzZXR0aW5nKSB7XHJcblx0XHR2YXIgbWUgPSB0aGlzO1xyXG5cdFx0dmFyIHBhcmFtcyA9ICQuZXh0ZW5kKHtcclxuXHRcdFx0XHRtb2RJZCA6ICdkaWFsb2cnLFxyXG5cdFx0XHRcdG92ZXJsYXlPcGFjaXR5IDogMC41LFxyXG5cdFx0XHRcdG92ZXJsYXlCZ0NvbG9yIDogJyMwMDAnLFxyXG5cdFx0XHRcdHdpZHRoIDogTWF0aC5taW4oOTAwLCAkKHdpbmRvdykud2lkdGgoKSAtIDEwMCksXHJcblx0XHRcdFx0aHRtbCA6ICcnLFxyXG5cdFx0XHQgICAgY2FuQ2xvc2UgOiB0cnVlLFxyXG5cdFx0XHRcdGNsb3NlV2hlbkNsaWNraW5nQmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzVXBkYXRlSHRtbCA6IGZhbHNlXHJcblx0XHRcdH0sIHNldHRpbmcpO1xyXG5cclxuXHRcdC8vc2hvdyBvdmVybGF5ZXJcclxuXHRcdGlmICgkKCcjZGlhbG9nT3ZlcmxheScpLnNpemUoKSA+IDApIHtcclxuXHRcdFx0dmFyIGxheWVyID0gJCgnI2RpYWxvZ092ZXJsYXknKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBsYXllciA9ICQoJzxkaXYgaWQ9XCJkaWFsb2dPdmVybGF5XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6JyArIHBhcmFtcy5vdmVybGF5QmdDb2xvciArICc7XCI+PC9kaXY+PC9kaXY+JykucHJlcGVuZFRvKCdib2R5Jyk7XHJcblx0XHR9O1xyXG5cclxuICAgICAgICBsYXllci5zaG93KCkuY2hpbGRyZW4oJ2RpdicpLnN0b3AoKS5mYWRlVG8oMCwgMC4xKS5mYWRlVG8oXCJmYXN0XCIsIHBhcmFtcy5vdmVybGF5T3BhY2l0eSk7XHJcblxyXG5cdFx0Ly9zaG93IGRpYWxvZyBib3hcclxuXHRcdGlmKCQoJyMnICsgcGFyYW1zLm1vZElkKS5zaXplKCkgPT0gMCkge1xyXG5cdFx0XHR2YXIgaHRtbCA9IFsnPGRpdiBjbGFzcz1cImRpYWxvZyBzaG93cm9vbS1sb2dpbi1kaWFsb2dcIiBpZD1cIicgKyBwYXJhbXMubW9kSWQgKyAnXCI+JywgJzxkaXYgY2xhc3M9XCJkaWFsb2ctd3JhcHBlclwiPicsICc8ZGl2IGNsYXNzPVwiZGlhbG9nLWNvbnRlbnRcIiBvbmNvbnRleHRtZW51PVwicmV0dXJuIGZhbHNlXCI+JywgJzxpbWcgc3JjPVwiJyArIHdlYkRhdGEuSU1HX1BBVEggKyAndHJhbi5naWZcIiBjbGFzcz1cImRpYWxvZy1pbWdcIj4nLCAnPC9kaXY+JywgJzxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImRpYWxvZy1jbG9zZVwiPjwvYT4nLCAnPC9kaXY+JywgJzwvZGl2PiddO1xyXG5cdFx0XHRpZiAoIXBhcmFtcy5jYW5DbG9zZSkge1xyXG5cdFx0XHRcdGh0bWxbNV0gPSBcIlwiO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxheWVyLmFmdGVyKGh0bWwuam9pbignJykpO1xyXG5cdFx0fVxyXG5cdFx0dmFyIHdpbmJveCA9ICQoJyMnICsgcGFyYW1zLm1vZElkKTtcclxuXHRcdHZhciBtYWluU2hvdyA9IHdpbmJveC5maW5kKCcuZGlhbG9nLWNvbnRlbnQnKTtcclxuXHRcdHZhciBidG5DbG9zZSA9IHdpbmJveC5maW5kKCcuZGlhbG9nLWNsb3NlJyk7XHJcblxyXG5cdFx0aWYoKHBhcmFtcy5odG1sICE9IFwiXCIgJiYgbWFpblNob3cuZmluZCgnLmRpYWxvZy1pbWcnKS5zaXplKCkgPiAwKSB8fCAocGFyYW1zLmh0bWwgIT0gXCJcIiAmJiBwYXJhbXMuaXNVcGRhdGVIdG1sKSkge1xyXG5cdFx0XHRtYWluU2hvdy5odG1sKHBhcmFtcy5odG1sKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyB3aW5ib3guc2hvdygpLmNzcyh7XHJcblx0XHQvLyBcdFwidG9wXCIgOiBNYXRoLm1heCg1MCwgJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmhlaWdodCgpIC8gMiAtIHdpbmJveC5oZWlnaHQoKSAvIDIpLFxyXG5cdFx0Ly8gXHRcImxlZnRcIiA6IE1hdGgubWF4KDAsICQod2luZG93KS5zY3JvbGxMZWZ0KCkgKyAkKHdpbmRvdykud2lkdGgoKSAvIDIgLSB3aW5ib3gud2lkdGgoKSAvIDIpXHJcblx0XHQvLyB9KTtcclxuXHRcdHdpbmJveC5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpXHJcblx0XHR3aW5ib3guZmluZCgnLmRpYWxvZy1jbG9zZS1pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRsYXllci5oaWRlKCk7XHJcblx0XHRcdHdpbmJveC5oaWRlKCk7XHJcblx0XHR9KVxyXG5cdFx0Ly9jbGljayBFc2Mga2V5IHRvIGhpZGUgYWxsIGRpYWxvZ3NcclxuXHRcdCQoZG9jdW1lbnQpLmJpbmQoJ2tleWRvd24nLCBlbmFibGVFc2MpO1xyXG5cclxuXHRcdC8vY2xpY2sgb3ZlcmxheWVyXHJcblx0XHRsYXllci51bmJpbmQoKTtcclxuXHRcdGlmIChwYXJhbXMuY2xvc2VXaGVuQ2xpY2tpbmdCZykge1xyXG5cdFx0XHRsYXllci5iaW5kKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRtZS5jbG9zZSh3aW5ib3gsIHRydWUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHQvL2NsaWNrIGNsb3NlIGJ0blxyXG5cdFx0YnRuQ2xvc2UudW5iaW5kKCkuYmluZCgnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghJC5pc0VtcHR5T2JqZWN0KHdpbmRvdy5yZXZpZXcpICYmIHdpbmRvdy5yZXZpZXcuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucmV2aWV3ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB3ZWJEYXRhLldFQl9ST09UXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb29raWUuZ2V0Q29va2llKCdzaWduSW5Hb29nbGUnKSAhPSAndW5kZWZpbmVkJyAmJiBjb29raWUuZ2V0Q29va2llKCdzaWduSW5Hb29nbGUnKSkge1xyXG4gICAgICAgICAgICAgICAgY29va2llLnNldENvb2tpZSgnc2lnbkluR29vZ2xlJywgZmFsc2UsIDMwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb29raWUuc2V0Q29va2llKCdzY3JvbGxUb3AnLCAwLCAtMSk7XHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXRDb29raWUoJ3Njcm9sbExlZnQnLCAwLCAtMSk7XHJcblx0XHRcdGNvb2tpZS5zZXRDb29raWUoJ2Zhdkdvb2RzSWQnLCAwLCAtMSk7XHJcblx0XHRcdG1lLmNsb3NlKHdpbmJveCwgdHJ1ZSk7XHJcblx0XHRcdC8vcmV0dXJuIGZhbHNlXHJcblx0XHR9KTtcclxuXHRcdHJldHVybiB3aW5ib3g7XHJcblx0fTtcclxuXHJcblx0RGlhbG9nLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKHdpbmJveCwgaXNIaWRlT3ZlcmxheSkge1xyXG5cdFx0JCh3aW5ib3gpLmhpZGUoKTtcclxuXHRcdGlmKGlzSGlkZU92ZXJsYXkpIHtcclxuXHRcdFx0dmFyIGxheWVyID0gJCgnI2RpYWxvZ092ZXJsYXknKTtcclxuXHRcdFx0bGF5ZXIuY2hpbGRyZW4oJ2RpdicpLnN0b3AoKS5mYWRlVG8oXCJmYXN0XCIsIDAuMSwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGxheWVyLmhpZGUoKTtcclxuXHRcdFx0XHRsYXllci51bmJpbmQoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHQkKGRvY3VtZW50KS51bmJpbmQoJ2tleWRvd24nLCBlbmFibGVFc2MpO1xyXG5cdH07XHJcblxyXG5cdGZ1bmN0aW9uIGVuYWJsZUVzYyhlKSB7XHJcblx0XHR2YXIgdW5pY29kZSA9IGUua2V5Q29kZSA/IGUua2V5Q29kZSA6IGUuY2hhckNvZGU7XHJcblx0XHRpZiAodW5pY29kZSA9PSAyNykge1xyXG5cdFx0XHQkKCcuZGlhbG9nOnZpc2libGUnKS5oaWRlKCk7XHJcblx0XHRcdHZhciBsYXllciA9ICQoJyNkaWFsb2dPdmVybGF5Jyk7XHJcblx0XHRcdGxheWVyLmNoaWxkcmVuKCdkaXYnKS5zdG9wKCkuZmFkZVRvKFwiZmFzdFwiLCAwLjEsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRsYXllci5oaWRlKClcclxuXHRcdFx0fSlcclxuXHRcdFx0JChkb2N1bWVudCkudW5iaW5kKCdrZXlkb3duJywgZW5hYmxlRXNjKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcbi8vfSk7XHJcbiJdfQ==
},{"../mod/cookie":12}],16:[function(require,module,exports){
(function (global){
//define(function (require, exports, module) {
    var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
    var Cookie = require('./cookie')
    var cookie = new Cookie()

	function Favorites() {}
	module.exports = Favorites;

    Favorites.prototype.addFav = function (goods_id, suc_func, srcEle, callback) {
        var param = {
            'act': 'add_favorites',
            'goods_id': goods_id
        }
        $.ajax({
            'type': 'POST',
            'url': webData.WEB_ROOT + 'ajax.php',
            'data': param,
            'cache': false,
            'dataType': 'json',
            'success': function (r) {
                if ((r.code == 0) && r.userFavorCount) {
                    if (typeof suc_func != 'undefined') {
                        suc_func(srcEle, r.userFavorCount);
                    }
                }
                if (typeof(callback) !== 'undefined') {
                    callback();
                }
            },
            'error': function () {
                if (typeof(callback) !== 'undefined') {
                    callback();
                }
            }
        });
    };

	Favorites.prototype.getFavCount = function (goods_id, suc_func, me) {
		var param = {
			'act'		:	'get_favorites_count',
			'goods_id'	:	goods_id
		}
		$.ajax({
			'type': 'GET',
			'url': webData.WEB_ROOT + 'ajax.php',
			'data': param,
			'cache': false,
			'dataType': 'json',
			'success': function(r) {
				if(r.code == 0) {
                    suc_func(r.data,me);
				}
			}
		});
	};

    Favorites.prototype.delFav = function (goods_id, suc_func, srcEle) {
        var param = {
            'act'		:	'del_favorites',
            'goods_id'	:	goods_id,
            'back':  location.pathname
        }
        $.ajax({
            'type': 'POST',
            'url': webData.WEB_ROOT + 'ajax.php',
            'data': param,
            'cache': false,
            'dataType': 'json',
            'success': function(r) {
                if(r.code == -1) {
                    alert(r.data);
                    self.location.href = r.url;
                    return;
                }
                if (r.code == 0) {
                    suc_func(srcEle, r.userFavorCount);
                }
            }
        });
    };

    Favorites.prototype.refreshFavorites = function (elementList) {
        var goodsIds = [];
        elementList.each(function () {
            goodsIds.push($(this).attr('data-goodsid'));
        });

        var params = {
            'act': 'refreshFavorites',
            'goodsIds': goodsIds
        };
        $.ajax({
            'type': 'POST',
            'url': webData.WEB_ROOT + 'ajax.php',
            'data': params,
            'cache': false,
            'dataType': 'json',
            'success': function (r) {
                if (r.code === 0) {
                    elementList.each(function () {
                        var have_showroom = webData.have_showroom;
                        if (have_showroom) {
                            var _goodsId = $(this).attr('data-goodsid');
                            if (r.isFavor[_goodsId] && $(this).hasClass('favor_unselected')) {
                                $(this).removeClass('favor_unselected').addClass('favor_select');
                            }
                        } else {
                            var _goodsId = $(this).attr('data-goodsid');
                            if (r.isFavor[_goodsId] && $(this).hasClass('favor_unselected')) {
                                $(this).removeClass('favor_unselected').addClass('favor_select');
                                $(this).unbind();
                            }
                            //detail
                            if (r.isFavor[_goodsId] && $(this).hasClass('add2fav2')) {
                                $(this).removeClass('add2fav2').addClass('existingFav2');
                            }
                            //cart
                            //console.log(r.isFavor[_goodsId], $(this).hasClass('moveToWishList'))
                            if (r.isFavor[_goodsId] && $(this).hasClass('moveToWishList')) {
                                $(this).remove();
                            }
                        }
                    });
                }
            }
        });
    };

    Favorites.prototype.addToShowRoom = function (goods_id, suc_func, srcEle, callback) {
        var favorQuickDisplay = require("../common/favor_quick_display");
        favorQuickDisplay.initShowRoomList();
        favorQuickDisplay.initCreateShowRoom();
        $('#loginDialog').css('display','none');
        $('#dialogOverlay').css('display','none');
        var param = {
            "act": "add_to_showroom",
            "goodsId": goods_id,
        }

        $.ajax({
            'type': 'get',
            'url': webData.WEB_ROOT + 'ajax.php',
            'data': param,
            'cache': true,
            'dataType': 'json',
            'success': function (r) {
                if (r.code == 0) {
                    suc_func(srcEle,'click');

                    if (!!r.guide_link) {
                        openShowroomTutorialDialog(r.guide_link)
                        cookie.setCookie("showroom_tutorial_link", r.guide_link, 1)
                    }
                } else if (r.code == 3) {
                    openShowroomDialog(goods_id);
                }
            }
        });
    };
    Favorites.prototype.deleteFromShowRoom = function (goods_id, suc_func, srcEle, callback) {
        var param = {
            "act": "move_from_showroom",
            "goodsId": goods_id,
        }

        $.ajax({
            'type': 'get',
            'url': webData.WEB_ROOT + 'ajax.php',
            'data': param,
            'cache': true,
            'dataType': 'json',
            'success': function (r) {
                if (r.code == 0) {
                    suc_func(srcEle,'click');
                }
            }
        });
    }

    function openShowroomDialog(goods_id) {
        if ($('#dialogOverlay').size() > 0) {
            var layer = $('#dialogOverlay');
        } else {
            var layer = $('<div id="dialogOverlay"><div style="background:rgb(0,0,0);"></div></div>').prependTo('body');
        };

        layer.show().children('div').stop().fadeTo(0, 0.1).fadeTo("fast", 0.5);

        $(".showroom-dialog").css("display", "block");
        $(".showroom-dialog").find(".enter-showroom").attr("data-kvalue",goods_id);
        $('#loginDialog').css('display','none');
        var clientHeight = window.innerHeight ;
        if(clientHeight > 650){
            $(".showroom-dialog").css("top",$(window).scrollTop() + $(window).height() / 7);
        }else{
            $(".showroom-dialog").css("top",$(window).scrollTop());
        }
    };

    function openShowroomTutorialDialog(guide_link) {
        var dialog = $('#showroom-common-tutorial-entry')

        if (dialog.length == 0) {
            return
        }

        if ($('#dialogOverlay').size() > 0) {
            var layer = $('#dialogOverlay')
        } else {
            var layer = $('<div id="dialogOverlay"><div style="background:rgb(0,0,0);"></div></div>').prependTo('body')
        }
        layer.show().children('div').stop().fadeTo(0, 0.1).fadeTo("fast", 0.5)
        $('body').css('overflow', 'hidden')

        $(dialog).css('display', 'flex')
        $(dialog).find('.learn-now').on('click', function() {
            closeShowroomTutorialDialog()
            location.href = guide_link
        })

        $(dialog).find('.learn-later').on('click', closeShowroomTutorialDialog)
        $(dialog).find('.dialog-close-icon').on('click', closeShowroomTutorialDialog)
    }

    function closeShowroomTutorialDialog() {
        $('#dialogOverlay').hide()
        $('body').css('overflow', 'visible')

        $('#showroom-common-tutorial-entry').hide()
        cookie.setCookie("showroom_tutorial_link", "", 1)
    }

//});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvbW9kL2Zhdm9yaXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLy9kZWZpbmUoZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSkge1xyXG4gICAgdmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcbiAgICB2YXIgQ29va2llID0gcmVxdWlyZSgnLi9jb29raWUnKVxyXG4gICAgdmFyIGNvb2tpZSA9IG5ldyBDb29raWUoKVxyXG5cclxuXHRmdW5jdGlvbiBGYXZvcml0ZXMoKSB7fVxyXG5cdG1vZHVsZS5leHBvcnRzID0gRmF2b3JpdGVzO1xyXG5cclxuICAgIEZhdm9yaXRlcy5wcm90b3R5cGUuYWRkRmF2ID0gZnVuY3Rpb24gKGdvb2RzX2lkLCBzdWNfZnVuYywgc3JjRWxlLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBwYXJhbSA9IHtcclxuICAgICAgICAgICAgJ2FjdCc6ICdhZGRfZmF2b3JpdGVzJyxcclxuICAgICAgICAgICAgJ2dvb2RzX2lkJzogZ29vZHNfaWRcclxuICAgICAgICB9XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgJ3R5cGUnOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICd1cmwnOiB3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwJyxcclxuICAgICAgICAgICAgJ2RhdGEnOiBwYXJhbSxcclxuICAgICAgICAgICAgJ2NhY2hlJzogZmFsc2UsXHJcbiAgICAgICAgICAgICdkYXRhVHlwZSc6ICdqc29uJyxcclxuICAgICAgICAgICAgJ3N1Y2Nlc3MnOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICAgICAgaWYgKChyLmNvZGUgPT0gMCkgJiYgci51c2VyRmF2b3JDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3VjX2Z1bmMgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjX2Z1bmMoc3JjRWxlLCByLnVzZXJGYXZvckNvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnZXJyb3InOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuXHRGYXZvcml0ZXMucHJvdG90eXBlLmdldEZhdkNvdW50ID0gZnVuY3Rpb24gKGdvb2RzX2lkLCBzdWNfZnVuYywgbWUpIHtcclxuXHRcdHZhciBwYXJhbSA9IHtcclxuXHRcdFx0J2FjdCdcdFx0Olx0J2dldF9mYXZvcml0ZXNfY291bnQnLFxyXG5cdFx0XHQnZ29vZHNfaWQnXHQ6XHRnb29kc19pZFxyXG5cdFx0fVxyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0J3R5cGUnOiAnR0VUJyxcclxuXHRcdFx0J3VybCc6IHdlYkRhdGEuV0VCX1JPT1QgKyAnYWpheC5waHAnLFxyXG5cdFx0XHQnZGF0YSc6IHBhcmFtLFxyXG5cdFx0XHQnY2FjaGUnOiBmYWxzZSxcclxuXHRcdFx0J2RhdGFUeXBlJzogJ2pzb24nLFxyXG5cdFx0XHQnc3VjY2Vzcyc6IGZ1bmN0aW9uKHIpIHtcclxuXHRcdFx0XHRpZihyLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y19mdW5jKHIuZGF0YSxtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuICAgIEZhdm9yaXRlcy5wcm90b3R5cGUuZGVsRmF2ID0gZnVuY3Rpb24gKGdvb2RzX2lkLCBzdWNfZnVuYywgc3JjRWxlKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtID0ge1xyXG4gICAgICAgICAgICAnYWN0J1x0XHQ6XHQnZGVsX2Zhdm9yaXRlcycsXHJcbiAgICAgICAgICAgICdnb29kc19pZCdcdDpcdGdvb2RzX2lkLFxyXG4gICAgICAgICAgICAnYmFjayc6ICBsb2NhdGlvbi5wYXRobmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAndHlwZSc6ICdQT1NUJyxcclxuICAgICAgICAgICAgJ3VybCc6IHdlYkRhdGEuV0VCX1JPT1QgKyAnYWpheC5waHAnLFxyXG4gICAgICAgICAgICAnZGF0YSc6IHBhcmFtLFxyXG4gICAgICAgICAgICAnY2FjaGUnOiBmYWxzZSxcclxuICAgICAgICAgICAgJ2RhdGFUeXBlJzogJ2pzb24nLFxyXG4gICAgICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uKHIpIHtcclxuICAgICAgICAgICAgICAgIGlmKHIuY29kZSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHIuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2NhdGlvbi5ocmVmID0gci51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHIuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjX2Z1bmMoc3JjRWxlLCByLnVzZXJGYXZvckNvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBGYXZvcml0ZXMucHJvdG90eXBlLnJlZnJlc2hGYXZvcml0ZXMgPSBmdW5jdGlvbiAoZWxlbWVudExpc3QpIHtcclxuICAgICAgICB2YXIgZ29vZHNJZHMgPSBbXTtcclxuICAgICAgICBlbGVtZW50TGlzdC5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZ29vZHNJZHMucHVzaCgkKHRoaXMpLmF0dHIoJ2RhdGEtZ29vZHNpZCcpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgJ2FjdCc6ICdyZWZyZXNoRmF2b3JpdGVzJyxcclxuICAgICAgICAgICAgJ2dvb2RzSWRzJzogZ29vZHNJZHNcclxuICAgICAgICB9O1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICd0eXBlJzogJ1BPU1QnLFxyXG4gICAgICAgICAgICAndXJsJzogd2ViRGF0YS5XRUJfUk9PVCArICdhamF4LnBocCcsXHJcbiAgICAgICAgICAgICdkYXRhJzogcGFyYW1zLFxyXG4gICAgICAgICAgICAnY2FjaGUnOiBmYWxzZSxcclxuICAgICAgICAgICAgJ2RhdGFUeXBlJzogJ2pzb24nLFxyXG4gICAgICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoci5jb2RlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudExpc3QuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYXZlX3Nob3dyb29tID0gd2ViRGF0YS5oYXZlX3Nob3dyb29tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGF2ZV9zaG93cm9vbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9nb29kc0lkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWdvb2RzaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmlzRmF2b3JbX2dvb2RzSWRdICYmICQodGhpcykuaGFzQ2xhc3MoJ2Zhdm9yX3Vuc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2Zhdm9yX3Vuc2VsZWN0ZWQnKS5hZGRDbGFzcygnZmF2b3Jfc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2dvb2RzSWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZ29vZHNpZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuaXNGYXZvcltfZ29vZHNJZF0gJiYgJCh0aGlzKS5oYXNDbGFzcygnZmF2b3JfdW5zZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZmF2b3JfdW5zZWxlY3RlZCcpLmFkZENsYXNzKCdmYXZvcl9zZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnVuYmluZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmlzRmF2b3JbX2dvb2RzSWRdICYmICQodGhpcykuaGFzQ2xhc3MoJ2FkZDJmYXYyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhZGQyZmF2MicpLmFkZENsYXNzKCdleGlzdGluZ0ZhdjInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2FydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyLmlzRmF2b3JbX2dvb2RzSWRdLCAkKHRoaXMpLmhhc0NsYXNzKCdtb3ZlVG9XaXNoTGlzdCcpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuaXNGYXZvcltfZ29vZHNJZF0gJiYgJCh0aGlzKS5oYXNDbGFzcygnbW92ZVRvV2lzaExpc3QnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBGYXZvcml0ZXMucHJvdG90eXBlLmFkZFRvU2hvd1Jvb20gPSBmdW5jdGlvbiAoZ29vZHNfaWQsIHN1Y19mdW5jLCBzcmNFbGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIGZhdm9yUXVpY2tEaXNwbGF5ID0gcmVxdWlyZShcIi4uL2NvbW1vbi9mYXZvcl9xdWlja19kaXNwbGF5XCIpO1xyXG4gICAgICAgIGZhdm9yUXVpY2tEaXNwbGF5LmluaXRTaG93Um9vbUxpc3QoKTtcclxuICAgICAgICBmYXZvclF1aWNrRGlzcGxheS5pbml0Q3JlYXRlU2hvd1Jvb20oKTtcclxuICAgICAgICAkKCcjbG9naW5EaWFsb2cnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICAgJCgnI2RpYWxvZ092ZXJsYXknKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICAgdmFyIHBhcmFtID0ge1xyXG4gICAgICAgICAgICBcImFjdFwiOiBcImFkZF90b19zaG93cm9vbVwiLFxyXG4gICAgICAgICAgICBcImdvb2RzSWRcIjogZ29vZHNfaWQsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAndHlwZSc6ICdnZXQnLFxyXG4gICAgICAgICAgICAndXJsJzogd2ViRGF0YS5XRUJfUk9PVCArICdhamF4LnBocCcsXHJcbiAgICAgICAgICAgICdkYXRhJzogcGFyYW0sXHJcbiAgICAgICAgICAgICdjYWNoZSc6IHRydWUsXHJcbiAgICAgICAgICAgICdkYXRhVHlwZSc6ICdqc29uJyxcclxuICAgICAgICAgICAgJ3N1Y2Nlc3MnOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHIuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjX2Z1bmMoc3JjRWxlLCdjbGljaycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoISFyLmd1aWRlX2xpbmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlblNob3dyb29tVHV0b3JpYWxEaWFsb2coci5ndWlkZV9saW5rKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29raWUuc2V0Q29va2llKFwic2hvd3Jvb21fdHV0b3JpYWxfbGlua1wiLCByLmd1aWRlX2xpbmssIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyLmNvZGUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5TaG93cm9vbURpYWxvZyhnb29kc19pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBGYXZvcml0ZXMucHJvdG90eXBlLmRlbGV0ZUZyb21TaG93Um9vbSA9IGZ1bmN0aW9uIChnb29kc19pZCwgc3VjX2Z1bmMsIHNyY0VsZSwgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgIFwiYWN0XCI6IFwibW92ZV9mcm9tX3Nob3dyb29tXCIsXHJcbiAgICAgICAgICAgIFwiZ29vZHNJZFwiOiBnb29kc19pZCxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICd0eXBlJzogJ2dldCcsXHJcbiAgICAgICAgICAgICd1cmwnOiB3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwJyxcclxuICAgICAgICAgICAgJ2RhdGEnOiBwYXJhbSxcclxuICAgICAgICAgICAgJ2NhY2hlJzogdHJ1ZSxcclxuICAgICAgICAgICAgJ2RhdGFUeXBlJzogJ2pzb24nLFxyXG4gICAgICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoci5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNfZnVuYyhzcmNFbGUsJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuU2hvd3Jvb21EaWFsb2coZ29vZHNfaWQpIHtcclxuICAgICAgICBpZiAoJCgnI2RpYWxvZ092ZXJsYXknKS5zaXplKCkgPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBsYXllciA9ICQoJyNkaWFsb2dPdmVybGF5Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGxheWVyID0gJCgnPGRpdiBpZD1cImRpYWxvZ092ZXJsYXlcIj48ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDpyZ2IoMCwwLDApO1wiPjwvZGl2PjwvZGl2PicpLnByZXBlbmRUbygnYm9keScpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxheWVyLnNob3coKS5jaGlsZHJlbignZGl2Jykuc3RvcCgpLmZhZGVUbygwLCAwLjEpLmZhZGVUbyhcImZhc3RcIiwgMC41KTtcclxuXHJcbiAgICAgICAgJChcIi5zaG93cm9vbS1kaWFsb2dcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICQoXCIuc2hvd3Jvb20tZGlhbG9nXCIpLmZpbmQoXCIuZW50ZXItc2hvd3Jvb21cIikuYXR0cihcImRhdGEta3ZhbHVlXCIsZ29vZHNfaWQpO1xyXG4gICAgICAgICQoJyNsb2dpbkRpYWxvZycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgICB2YXIgY2xpZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IDtcclxuICAgICAgICBpZihjbGllbnRIZWlnaHQgPiA2NTApe1xyXG4gICAgICAgICAgICAkKFwiLnNob3dyb29tLWRpYWxvZ1wiKS5jc3MoXCJ0b3BcIiwkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCkgLyA3KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJChcIi5zaG93cm9vbS1kaWFsb2dcIikuY3NzKFwidG9wXCIsJCh3aW5kb3cpLnNjcm9sbFRvcCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG9wZW5TaG93cm9vbVR1dG9yaWFsRGlhbG9nKGd1aWRlX2xpbmspIHtcclxuICAgICAgICB2YXIgZGlhbG9nID0gJCgnI3Nob3dyb29tLWNvbW1vbi10dXRvcmlhbC1lbnRyeScpXHJcblxyXG4gICAgICAgIGlmIChkaWFsb2cubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJCgnI2RpYWxvZ092ZXJsYXknKS5zaXplKCkgPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBsYXllciA9ICQoJyNkaWFsb2dPdmVybGF5JylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbGF5ZXIgPSAkKCc8ZGl2IGlkPVwiZGlhbG9nT3ZlcmxheVwiPjxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOnJnYigwLDAsMCk7XCI+PC9kaXY+PC9kaXY+JykucHJlcGVuZFRvKCdib2R5JylcclxuICAgICAgICB9XHJcbiAgICAgICAgbGF5ZXIuc2hvdygpLmNoaWxkcmVuKCdkaXYnKS5zdG9wKCkuZmFkZVRvKDAsIDAuMSkuZmFkZVRvKFwiZmFzdFwiLCAwLjUpXHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJylcclxuXHJcbiAgICAgICAgJChkaWFsb2cpLmNzcygnZGlzcGxheScsICdmbGV4JylcclxuICAgICAgICAkKGRpYWxvZykuZmluZCgnLmxlYXJuLW5vdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZVNob3dyb29tVHV0b3JpYWxEaWFsb2coKVxyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gZ3VpZGVfbGlua1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZGlhbG9nKS5maW5kKCcubGVhcm4tbGF0ZXInKS5vbignY2xpY2snLCBjbG9zZVNob3dyb29tVHV0b3JpYWxEaWFsb2cpXHJcbiAgICAgICAgJChkaWFsb2cpLmZpbmQoJy5kaWFsb2ctY2xvc2UtaWNvbicpLm9uKCdjbGljaycsIGNsb3NlU2hvd3Jvb21UdXRvcmlhbERpYWxvZylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZVNob3dyb29tVHV0b3JpYWxEaWFsb2coKSB7XHJcbiAgICAgICAgJCgnI2RpYWxvZ092ZXJsYXknKS5oaWRlKClcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICd2aXNpYmxlJylcclxuXHJcbiAgICAgICAgJCgnI3Nob3dyb29tLWNvbW1vbi10dXRvcmlhbC1lbnRyeScpLmhpZGUoKVxyXG4gICAgICAgIGNvb2tpZS5zZXRDb29raWUoXCJzaG93cm9vbV90dXRvcmlhbF9saW5rXCIsIFwiXCIsIDEpXHJcbiAgICB9XHJcblxyXG4vL30pOyJdfQ==
},{"../common/favor_quick_display":3,"./cookie":12}],17:[function(require,module,exports){
(function (global){
//define(function (require, exports, module) {
	var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
	
	$.fn.formCheck = function (items, params) {
		if (!params)
			params = {};
		params.rules = $.extend({
				'null' : function (obj, checks) {
					return $.trim($(obj).val()).length > 0
				},
				'maxlength' : function (obj, checks) {
					return $.trim($(obj).val()).length <= checks.maxlength
				},
				'minlength' : function (obj, checks) {
					return $.trim($(obj).val()).length >= checks.minlength
				},
				'digitMinlength' : function (obj, checks) {
					return $.trim($(obj).val().replace(/[^0-9]/g, '')).length >= checks.minlength
				},
				'email' : function (obj, checks) {
					return /(\,|^)([\w+._]+@\w+\.(\w+\.){0,3}\w{2,4})/.test($(obj).val().replace(/-|\//g, ''))
				},
				'checked' : function (obj, checks) {
					return obj.checked
				},
				'phone' : function (obj, checks) {
					return /^[\d-\s]{1,20}$/.test($(obj).val()) && $.trim($(obj).val()).replace(/[\s]+/g, ' ').length <= checks.maxlength
				},
				'number' : function (obj, checks) {
					return /^[0-9]+$/.test($.trim($(obj).val()))
				},
				'min' : function (obj, checks) {
					return parseInt($(obj).val()) >= checks.min
				},
				"regexp" : function (obj, checks) {
					return checks.pattern.test($.trim($(obj).val()))
				},
				'select' : function (obj, checks) {
					return $(obj).val() != checks.value
				},
				'user' : function (obj, checks) {
					return /^(?!\d)[a-zA-Z0-9\u4e00-\u9fa5_]{5,18}$/.test($.trim($(obj).val()))
				}
			}, params.rules);
		var result = true,
		focused = false;
		function checkItem(item, checks) {
			for (j in checks) {
				if (params.rules[checks[j].type])
					if (params.rules[checks[j].type](item, checks[j]))
						continue;
                /*
				if (!focused && !checks[j].noFocus) {
					if ($(item).offset().top < $(window).scrollTop()) {
						$('html, body').animate({
							scrollTop : $(item).offset().top
						}, 'fast')
					}
					focused = true
				};
                 */
				if (checks[j].showError) {
					checks[j].showError();
					result = false;
					break
				} else if (params.showError) {
					params.showError($(item), checks[j].errMsg, checks[j].errEvent);
					result = false;
					break
				} else if (params.errinfoFinder) {
					params.errinfoFinder($(item)).text(checks[j].errMsg);
					$(item).focus(function () {
						params.errinfoFinder($(item)).text('');
					});
					if ($(item).attr('type') != null && $(item).attr('type').toLowerCase() == 'checkbox') {
						$(item).click(function () {
							$(item).focus()
						})
					};
					result = false;
					break
				} else if (checks[j].errMsg) {
					alert(checks[j].errMsg);
					return false
				}
			};
			return true
		};
		for (i = 0; i < this[0].length; i++) {
			if ($(this[0][i]).attr('name') && $(this[0][i]).attr('name').length == 0 || $(this[0][i]).prop('disabled'))
				continue;
			var checks = items[$(this[0][i]).attr('name')];
			if (!checks)
				continue;
			if (!checkItem(this[0][i], checks))
				return false
		};
		return result
	};
	
//});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvbW9kL2Zvcm1DaGVjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLy9kZWZpbmUoZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSkge1xyXG5cdHZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG5cdFxyXG5cdCQuZm4uZm9ybUNoZWNrID0gZnVuY3Rpb24gKGl0ZW1zLCBwYXJhbXMpIHtcclxuXHRcdGlmICghcGFyYW1zKVxyXG5cdFx0XHRwYXJhbXMgPSB7fTtcclxuXHRcdHBhcmFtcy5ydWxlcyA9ICQuZXh0ZW5kKHtcclxuXHRcdFx0XHQnbnVsbCcgOiBmdW5jdGlvbiAob2JqLCBjaGVja3MpIHtcclxuXHRcdFx0XHRcdHJldHVybiAkLnRyaW0oJChvYmopLnZhbCgpKS5sZW5ndGggPiAwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnbWF4bGVuZ3RoJyA6IGZ1bmN0aW9uIChvYmosIGNoZWNrcykge1xyXG5cdFx0XHRcdFx0cmV0dXJuICQudHJpbSgkKG9iaikudmFsKCkpLmxlbmd0aCA8PSBjaGVja3MubWF4bGVuZ3RoXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnbWlubGVuZ3RoJyA6IGZ1bmN0aW9uIChvYmosIGNoZWNrcykge1xyXG5cdFx0XHRcdFx0cmV0dXJuICQudHJpbSgkKG9iaikudmFsKCkpLmxlbmd0aCA+PSBjaGVja3MubWlubGVuZ3RoXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnZGlnaXRNaW5sZW5ndGgnIDogZnVuY3Rpb24gKG9iaiwgY2hlY2tzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJC50cmltKCQob2JqKS52YWwoKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpKS5sZW5ndGggPj0gY2hlY2tzLm1pbmxlbmd0aFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J2VtYWlsJyA6IGZ1bmN0aW9uIChvYmosIGNoZWNrcykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIC8oXFwsfF4pKFtcXHcrLl9dK0BcXHcrXFwuKFxcdytcXC4pezAsM31cXHd7Miw0fSkvLnRlc3QoJChvYmopLnZhbCgpLnJlcGxhY2UoLy18XFwvL2csICcnKSlcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdjaGVja2VkJyA6IGZ1bmN0aW9uIChvYmosIGNoZWNrcykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG9iai5jaGVja2VkXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQncGhvbmUnIDogZnVuY3Rpb24gKG9iaiwgY2hlY2tzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gL15bXFxkLVxcc117MSwyMH0kLy50ZXN0KCQob2JqKS52YWwoKSkgJiYgJC50cmltKCQob2JqKS52YWwoKSkucmVwbGFjZSgvW1xcc10rL2csICcgJykubGVuZ3RoIDw9IGNoZWNrcy5tYXhsZW5ndGhcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdudW1iZXInIDogZnVuY3Rpb24gKG9iaiwgY2hlY2tzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gL15bMC05XSskLy50ZXN0KCQudHJpbSgkKG9iaikudmFsKCkpKVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J21pbicgOiBmdW5jdGlvbiAob2JqLCBjaGVja3MpIHtcclxuXHRcdFx0XHRcdHJldHVybiBwYXJzZUludCgkKG9iaikudmFsKCkpID49IGNoZWNrcy5taW5cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwicmVnZXhwXCIgOiBmdW5jdGlvbiAob2JqLCBjaGVja3MpIHtcclxuXHRcdFx0XHRcdHJldHVybiBjaGVja3MucGF0dGVybi50ZXN0KCQudHJpbSgkKG9iaikudmFsKCkpKVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J3NlbGVjdCcgOiBmdW5jdGlvbiAob2JqLCBjaGVja3MpIHtcclxuXHRcdFx0XHRcdHJldHVybiAkKG9iaikudmFsKCkgIT0gY2hlY2tzLnZhbHVlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQndXNlcicgOiBmdW5jdGlvbiAob2JqLCBjaGVja3MpIHtcclxuXHRcdFx0XHRcdHJldHVybiAvXig/IVxcZClbYS16QS1aMC05XFx1NGUwMC1cXHU5ZmE1X117NSwxOH0kLy50ZXN0KCQudHJpbSgkKG9iaikudmFsKCkpKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgcGFyYW1zLnJ1bGVzKTtcclxuXHRcdHZhciByZXN1bHQgPSB0cnVlLFxyXG5cdFx0Zm9jdXNlZCA9IGZhbHNlO1xyXG5cdFx0ZnVuY3Rpb24gY2hlY2tJdGVtKGl0ZW0sIGNoZWNrcykge1xyXG5cdFx0XHRmb3IgKGogaW4gY2hlY2tzKSB7XHJcblx0XHRcdFx0aWYgKHBhcmFtcy5ydWxlc1tjaGVja3Nbal0udHlwZV0pXHJcblx0XHRcdFx0XHRpZiAocGFyYW1zLnJ1bGVzW2NoZWNrc1tqXS50eXBlXShpdGVtLCBjaGVja3Nbal0pKVxyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIC8qXHJcblx0XHRcdFx0aWYgKCFmb2N1c2VkICYmICFjaGVja3Nbal0ubm9Gb2N1cykge1xyXG5cdFx0XHRcdFx0aWYgKCQoaXRlbSkub2Zmc2V0KCkudG9wIDwgJCh3aW5kb3cpLnNjcm9sbFRvcCgpKSB7XHJcblx0XHRcdFx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0XHRcdFx0XHRzY3JvbGxUb3AgOiAkKGl0ZW0pLm9mZnNldCgpLnRvcFxyXG5cdFx0XHRcdFx0XHR9LCAnZmFzdCcpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRmb2N1c2VkID0gdHJ1ZVxyXG5cdFx0XHRcdH07XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuXHRcdFx0XHRpZiAoY2hlY2tzW2pdLnNob3dFcnJvcikge1xyXG5cdFx0XHRcdFx0Y2hlY2tzW2pdLnNob3dFcnJvcigpO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAocGFyYW1zLnNob3dFcnJvcikge1xyXG5cdFx0XHRcdFx0cGFyYW1zLnNob3dFcnJvcigkKGl0ZW0pLCBjaGVja3Nbal0uZXJyTXNnLCBjaGVja3Nbal0uZXJyRXZlbnQpO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAocGFyYW1zLmVycmluZm9GaW5kZXIpIHtcclxuXHRcdFx0XHRcdHBhcmFtcy5lcnJpbmZvRmluZGVyKCQoaXRlbSkpLnRleHQoY2hlY2tzW2pdLmVyck1zZyk7XHJcblx0XHRcdFx0XHQkKGl0ZW0pLmZvY3VzKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0cGFyYW1zLmVycmluZm9GaW5kZXIoJChpdGVtKSkudGV4dCgnJyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdGlmICgkKGl0ZW0pLmF0dHIoJ3R5cGUnKSAhPSBudWxsICYmICQoaXRlbSkuYXR0cigndHlwZScpLnRvTG93ZXJDYXNlKCkgPT0gJ2NoZWNrYm94Jykge1xyXG5cdFx0XHRcdFx0XHQkKGl0ZW0pLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHQkKGl0ZW0pLmZvY3VzKClcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRyZXN1bHQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrXHJcblx0XHRcdFx0fSBlbHNlIGlmIChjaGVja3Nbal0uZXJyTXNnKSB7XHJcblx0XHRcdFx0XHRhbGVydChjaGVja3Nbal0uZXJyTXNnKTtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdH07XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgdGhpc1swXS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoJCh0aGlzWzBdW2ldKS5hdHRyKCduYW1lJykgJiYgJCh0aGlzWzBdW2ldKS5hdHRyKCduYW1lJykubGVuZ3RoID09IDAgfHwgJCh0aGlzWzBdW2ldKS5wcm9wKCdkaXNhYmxlZCcpKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR2YXIgY2hlY2tzID0gaXRlbXNbJCh0aGlzWzBdW2ldKS5hdHRyKCduYW1lJyldO1xyXG5cdFx0XHRpZiAoIWNoZWNrcylcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0aWYgKCFjaGVja0l0ZW0odGhpc1swXVtpXSwgY2hlY2tzKSlcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH07XHJcblx0XHRyZXR1cm4gcmVzdWx0XHJcblx0fTtcclxuXHRcclxuLy99KTsiXX0=
},{}],18:[function(require,module,exports){
//define(function (require, exports, module) {
	
    var loadJS = function (id, src) {
        if (document.getElementById(id)) return;
        var container = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.id = id;
        script.src = src;
        script.async = true;
        container.appendChild(script);
    };

    var loadSocialJS = function (id) {
        var config = {
            "facebook" : "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=" + webData.fb_app,
            "twitter" : "https://platform.twitter.com/widgets.js",
            "pinit" : "//assets.pinterest.com/js/pinit.js",
            "gplusone" : "https://apis.google.com/js/plusone.js",
            "livechat" : ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js',
            "gmail" : "https://apis.google.com/js/platform.js?onload=gmailLoadCallback"
        };
        for(var key in config) {
            if(key == id) {
                loadJS(id + '-sdk', config[key]);
                break;
            }
        }
    };

    module.exports = {
        "loadJS": loadJS,
        "loadSocialJS": loadSocialJS
    };

//});
},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
(function (global){
//define(function (require, exports, module) {

    var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
    var dialog = require('../mod/dialog');
    var Cookie = require('../mod/cookie');
    var cookie = new Cookie();

    function PopLogin() {
    }

    module.exports = PopLogin;

    PopLogin.prototype.requestFloatingSign = function (signSuccessCb, source, is_callback) {
        // var tab = arguments[2] && arguments[2] === "register" ? "register" : "login";
        //已登录
        if ($('#myAccount').find('dropdown').length > 0 || window.login_status == true) {
            signSuccessCb.call();
            return true;
        }

        function openLoginDialog() {
            var logUrl = webData.WEB_ROOT + "ajax.php?act=login&back=" + encodeURIComponent(source);
            var use_coupon_register = webData.use_coupon_register;
            var pageLoginByClickingRegister = _lang.page_register_webroot_agree_terms_privacy.replace(/{\$WEB_ROOT}/g, webData.WEB_ROOT);
            var fromEmail = "notice@" + webData.SITE_DOMAIN;
            var pageRemindRegisterEmail=_lang.page_remind_register_email.replace(/{\$from_email}/g, fromEmail);
            if(use_coupon_register) {
                var regUrl = webData.WEB_ROOT + "ajax.php?act=coupon_register&back=" + encodeURIComponent(source);
            }else{
                var regUrl = webData.WEB_ROOT + "ajax.php?act=register&back=" + encodeURIComponent(source);
            }
            var stylePreferenceHtml = "";
            for (var key in webData.stylePreference) {
                stylePreferenceHtml +=
                '<div class="style_preference">' +
                '<input type="checkbox" name="reg[style_preference][]" value="'+key+'" />' +
                '<label> '+ webData.stylePreference[key]+'</label>' +
                '</div>';
            }
            var couponUpper = _lang.page_checkout_coupon.toUpperCase()
            var loginDialogHtml =
                '<div class="login-register clearfix">'+
                '<div id="wrapper-r">' +
                    '<div class="widget w-scCreatNewAccount">' +
                    '<div class="w-rHeadingV2">' +
                    '<h2><span>' + _lang.page_common_register + '</span></h2>' +
                '<p class="register-coupon-tip">' + _lang.page_common_get + ' <b class="strong-bold">5% ' + _lang.page_common_price_off + ' </b>' + couponUpper + '</p>' +
                '</div>' +
                '<div class="mainbox">' +
                    '<p class="alert hide" id="_msgx"></p>' +
                    '<form action="'+regUrl+'" method="post" name="form_reg" id="form_reg" autocomplete="off" style="display: block;">' +
                    '<input type="hidden" name="act" value="register">' +
                    '<table cellspacing="0">' +
                    '<tbody>' +
                        '<tr>' +
                            '<td><span class="required">*</span>' + _lang.page_login_email + ':</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td class="inputcol relative"><input type="text" id="email" name="reg[email]" class="text elmbBlur" maxlength="60" autocomplete="off">' +
                                '<span id="regEmailValWait"></span>' +
                            '</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td><span class="required">*</span>' + _lang.page_login_password + ':</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td class="inputcol"><input type="password" id="password" name="reg[password]" class="text elmbBlur" maxlength="32">' +
                        '<tr>' +
                            '<td><span class="required">*</span>' + _lang.page_login_repeat_the_password + ':</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td class="inputcol" style="padding-top: 1px"><input type="password" id="password_again" name="reg[password_again]" class="text elmbBlur" maxlength="32"></td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td><span class="required"></span>' + _lang.page_common_event_day + ':</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td class="inputcol datepicker" style="padding-top: 1px"><input type="text" id="datepicker_pop" name="event_day" class="text elmbBlur" readonly="readonly" maxlength="32"></td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td>'+_lang.page_style_preference+':</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td>' +
                                stylePreferenceHtml +
                            '</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td class="newsletter"><input type="checkbox" checked="checked" id="agreeNewsLetter" name="reg[agreeNewsLetter]">' +
                            '<label> ' + _lang.page_register_agree_newsletter + '</label></td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td class="sign-up-btn-td">' +
                                '<a href="javascript:void(0);" class="sign-up-btn" tabindex="3">' +
                                    '<input type="submit" value="' + _lang.page_register_reg_submit + '" alt="' + _lang.page_register_reg_submit + '" title="' + _lang.page_register_reg_submit + '" src="' + webData.IMG_PATH + 'tran.gif"  class="signUpBtn">' +
                                '</a>' +
                            '</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td class="privacy"><p>' + pageLoginByClickingRegister +'</p>' +
                            '<p>' + pageRemindRegisterEmail + '</p>' +
                            '</td>' +
                        '</tr>' +
                    '</tbody>' +
                '</table>';
            if(use_coupon_register){
                 loginDialogHtml = loginDialogHtml + '<input type="hidden" name="act" value="coupon_register" />';
            }else{
                 loginDialogHtml = loginDialogHtml + '<input type="hidden" name="act" value="register" />';
            }
                loginDialogHtml +=  '</form>' +
                '</div></div></div>'

                + '<div id="wrapper-l">' +
                '<div class="widget w-signInGuide">' +
                '<div class="w-rHeadingV2">' +
                '<h2><span>'+ _lang.page_login_sign_in +'</span></h2>' +
                '</div>' +
                '<div class="mainboxV2">' +
                '<form action="'+ logUrl +'" method="post" name="form_login" id="form_login" autocomplete="off">' +
                '<input type="hidden" value="login" name="act">' +
                '<table cellspacing="0"><tbody><tr><td>' +
                '<span class="required">* </span>'+ _lang.page_login_email +':</td></tr>' +
                '<tr><td class="inputcol">' +
                '<input type="text" id="_email" name="login[email]" value="" class="text elmbBlur" maxlength="96" autocomplete="off"></td></tr>' +
                '<tr><td><span class="required">* </span>'+ _lang.page_login_password +':</td></tr><tr>' +
                '<td class="inputcol"><input type="password" id="_password" name="login[password]" class="text elmbBlur" maxlength="40"></td></tr>' +
                '<tr><td class="inputcol"><p id="_msg" class="hide"></p></td></tr>' +
                '<tr><td class="sign-in-btn-td">' +
                '<a href="javascript:void(0);" class="sign-btn" tabindex="3">' +
                '<input type="submit" value="'+ _lang.page_login_sign_in +'" alt="'+ _lang.page_login_sign_in +'" title="'+ _lang.page_login_sign_in +'" src="' + webData.IMG_PATH + 'tran.gif" class="signInBtn">' +
                '</a>' +
                '</td></tr>' +
                '<tr><td class="inputcol">' +
                '<p class="forgotTip">' +
                '<a href="' + webData.WEB_ROOT + 'forgotpassword.php" target="_blank" title="' + _lang.page_login_forgot_tip + '" class="u">' + _lang.page_login_forgot_tip + '</a></p>' +
                '</p></td></tr></tbody></table></form>' +
                '<div class="login-dividing-line"><span>' + _lang.page_common_or + '</span></div>' +
                '<div class="sns-login"><div class="facebook_login">' +
                '<div id="fbSignBtn" onclick="pageData.loginModule.get_facebook_login()">' + _lang.page_login_login_with_facebook + '</div>' +
                '</div>' +
                '<div class="gmail_login"><div id="gmailSignBtn">' + _lang.page_sns_google_sign + '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>'
            + '</div>'
            dialog.openRegisterLogin({modId: 'loginDialog', width: 560, html: loginDialogHtml, closeWhenClickingBg: false});
            return true;
        }

        function dialogHandler() {
            //登陆注册表单
            var login = require('../pages/login');
            login.init_login(is_callback);
            login.init_register(is_callback);
            login.init_calendar('#datepicker_pop');
            if (typeof (is_callback) == 'undefined' || is_callback) {
                login.init_callback(signSuccessCb);
            }
        }

        if ($('#loginDialog').length > 0) {
            openLoginDialog();
            // dialogHandler();
        } else {
            $.ajax({
                type: 'get',
                url: webData.WEB_ROOT + 'ajax.php?act=checkLoggedIn',
                data: '',
                dataType: 'json',
                complete: function () {
                },
                success: function (r) {
                    if (r.error == 1) {
                        var use_coupon_register = webData.use_coupon_register;
                        if(use_coupon_register){
                            $('#loginDialog').css("display","block");
                        }
                        openLoginDialog();
                        dialogHandler();
                    } else {
                        signSuccessCb();
                    }
                },
                error: function () {
                }
            });
        }
    }

    PopLogin.prototype.jumpToUrl = function (url) {
        if (location.href === url) {
            window.location.reload()
        } else {
            window.location.href = url
        }
    }

//});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvbW9kL3BvcExvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLy9kZWZpbmUoZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSkge1xyXG5cclxuICAgIHZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG4gICAgdmFyIGRpYWxvZyA9IHJlcXVpcmUoJy4uL21vZC9kaWFsb2cnKTtcclxuICAgIHZhciBDb29raWUgPSByZXF1aXJlKCcuLi9tb2QvY29va2llJyk7XHJcbiAgICB2YXIgY29va2llID0gbmV3IENvb2tpZSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIFBvcExvZ2luKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG1vZHVsZS5leHBvcnRzID0gUG9wTG9naW47XHJcblxyXG4gICAgUG9wTG9naW4ucHJvdG90eXBlLnJlcXVlc3RGbG9hdGluZ1NpZ24gPSBmdW5jdGlvbiAoc2lnblN1Y2Nlc3NDYiwgc291cmNlLCBpc19jYWxsYmFjaykge1xyXG4gICAgICAgIC8vIHZhciB0YWIgPSBhcmd1bWVudHNbMl0gJiYgYXJndW1lbnRzWzJdID09PSBcInJlZ2lzdGVyXCIgPyBcInJlZ2lzdGVyXCIgOiBcImxvZ2luXCI7XHJcbiAgICAgICAgLy/lt7LnmbvlvZVcclxuICAgICAgICBpZiAoJCgnI215QWNjb3VudCcpLmZpbmQoJ2Ryb3Bkb3duJykubGVuZ3RoID4gMCB8fCB3aW5kb3cubG9naW5fc3RhdHVzID09IHRydWUpIHtcclxuICAgICAgICAgICAgc2lnblN1Y2Nlc3NDYi5jYWxsKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlbkxvZ2luRGlhbG9nKCkge1xyXG4gICAgICAgICAgICB2YXIgbG9nVXJsID0gd2ViRGF0YS5XRUJfUk9PVCArIFwiYWpheC5waHA/YWN0PWxvZ2luJmJhY2s9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc291cmNlKTtcclxuICAgICAgICAgICAgdmFyIHVzZV9jb3Vwb25fcmVnaXN0ZXIgPSB3ZWJEYXRhLnVzZV9jb3Vwb25fcmVnaXN0ZXI7XHJcbiAgICAgICAgICAgIHZhciBwYWdlTG9naW5CeUNsaWNraW5nUmVnaXN0ZXIgPSBfbGFuZy5wYWdlX3JlZ2lzdGVyX3dlYnJvb3RfYWdyZWVfdGVybXNfcHJpdmFjeS5yZXBsYWNlKC97XFwkV0VCX1JPT1R9L2csIHdlYkRhdGEuV0VCX1JPT1QpO1xyXG4gICAgICAgICAgICB2YXIgZnJvbUVtYWlsID0gXCJub3RpY2VAXCIgKyB3ZWJEYXRhLlNJVEVfRE9NQUlOO1xyXG4gICAgICAgICAgICB2YXIgcGFnZVJlbWluZFJlZ2lzdGVyRW1haWw9X2xhbmcucGFnZV9yZW1pbmRfcmVnaXN0ZXJfZW1haWwucmVwbGFjZSgve1xcJGZyb21fZW1haWx9L2csIGZyb21FbWFpbCk7XHJcbiAgICAgICAgICAgIGlmKHVzZV9jb3Vwb25fcmVnaXN0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWdVcmwgPSB3ZWJEYXRhLldFQl9ST09UICsgXCJhamF4LnBocD9hY3Q9Y291cG9uX3JlZ2lzdGVyJmJhY2s9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc291cmNlKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVnVXJsID0gd2ViRGF0YS5XRUJfUk9PVCArIFwiYWpheC5waHA/YWN0PXJlZ2lzdGVyJmJhY2s9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc291cmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgc3R5bGVQcmVmZXJlbmNlSHRtbCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB3ZWJEYXRhLnN0eWxlUHJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICAgICAgc3R5bGVQcmVmZXJlbmNlSHRtbCArPVxyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJzdHlsZV9wcmVmZXJlbmNlXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZWdbc3R5bGVfcHJlZmVyZW5jZV1bXVwiIHZhbHVlPVwiJytrZXkrJ1wiIC8+JyArXHJcbiAgICAgICAgICAgICAgICAnPGxhYmVsPiAnKyB3ZWJEYXRhLnN0eWxlUHJlZmVyZW5jZVtrZXldKyc8L2xhYmVsPicgK1xyXG4gICAgICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGNvdXBvblVwcGVyID0gX2xhbmcucGFnZV9jaGVja291dF9jb3Vwb24udG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICB2YXIgbG9naW5EaWFsb2dIdG1sID1cclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG9naW4tcmVnaXN0ZXIgY2xlYXJmaXhcIj4nK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgaWQ9XCJ3cmFwcGVyLXJcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIndpZGdldCB3LXNjQ3JlYXROZXdBY2NvdW50XCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ3LXJIZWFkaW5nVjJcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGgyPjxzcGFuPicgKyBfbGFuZy5wYWdlX2NvbW1vbl9yZWdpc3RlciArICc8L3NwYW4+PC9oMj4nICtcclxuICAgICAgICAgICAgICAgICc8cCBjbGFzcz1cInJlZ2lzdGVyLWNvdXBvbi10aXBcIj4nICsgX2xhbmcucGFnZV9jb21tb25fZ2V0ICsgJyA8YiBjbGFzcz1cInN0cm9uZy1ib2xkXCI+NSUgJyArIF9sYW5nLnBhZ2VfY29tbW9uX3ByaWNlX29mZiArICcgPC9iPicgKyBjb3Vwb25VcHBlciArICc8L3A+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1haW5ib3hcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPHAgY2xhc3M9XCJhbGVydCBoaWRlXCIgaWQ9XCJfbXNneFwiPjwvcD4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGZvcm0gYWN0aW9uPVwiJytyZWdVcmwrJ1wiIG1ldGhvZD1cInBvc3RcIiBuYW1lPVwiZm9ybV9yZWdcIiBpZD1cImZvcm1fcmVnXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiYWN0XCIgdmFsdWU9XCJyZWdpc3RlclwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8dGFibGUgY2VsbHNwYWNpbmc9XCIwXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzx0Ym9keT4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzx0cj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+PHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+JyArIF9sYW5nLnBhZ2VfbG9naW5fZW1haWwgKyAnOjwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L3RyPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHRyPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzx0ZCBjbGFzcz1cImlucHV0Y29sIHJlbGF0aXZlXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJyZWdbZW1haWxdXCIgY2xhc3M9XCJ0ZXh0IGVsbWJCbHVyXCIgbWF4bGVuZ3RoPVwiNjBcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gaWQ9XCJyZWdFbWFpbFZhbFdhaXRcIj48L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC90ZD4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvdHI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8dHI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHRkPjxzcGFuIGNsYXNzPVwicmVxdWlyZWRcIj4qPC9zcGFuPicgKyBfbGFuZy5wYWdlX2xvZ2luX3Bhc3N3b3JkICsgJzo8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC90cj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzx0cj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQgY2xhc3M9XCJpbnB1dGNvbFwiPjxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInJlZ1twYXNzd29yZF1cIiBjbGFzcz1cInRleHQgZWxtYkJsdXJcIiBtYXhsZW5ndGg9XCIzMlwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHRyPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzx0ZD48c3BhbiBjbGFzcz1cInJlcXVpcmVkXCI+Kjwvc3Bhbj4nICsgX2xhbmcucGFnZV9sb2dpbl9yZXBlYXRfdGhlX3Bhc3N3b3JkICsgJzo8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC90cj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzx0cj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQgY2xhc3M9XCJpbnB1dGNvbFwiIHN0eWxlPVwicGFkZGluZy10b3A6IDFweFwiPjxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkX2FnYWluXCIgbmFtZT1cInJlZ1twYXNzd29yZF9hZ2Fpbl1cIiBjbGFzcz1cInRleHQgZWxtYkJsdXJcIiBtYXhsZW5ndGg9XCIzMlwiPjwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L3RyPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHRyPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzx0ZD48c3BhbiBjbGFzcz1cInJlcXVpcmVkXCI+PC9zcGFuPicgKyBfbGFuZy5wYWdlX2NvbW1vbl9ldmVudF9kYXkgKyAnOjwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L3RyPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHRyPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzx0ZCBjbGFzcz1cImlucHV0Y29sIGRhdGVwaWNrZXJcIiBzdHlsZT1cInBhZGRpbmctdG9wOiAxcHhcIj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRhdGVwaWNrZXJfcG9wXCIgbmFtZT1cImV2ZW50X2RheVwiIGNsYXNzPVwidGV4dCBlbG1iQmx1clwiIHJlYWRvbmx5PVwicmVhZG9ubHlcIiBtYXhsZW5ndGg9XCIzMlwiPjwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L3RyPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHRyPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzx0ZD4nK19sYW5nLnBhZ2Vfc3R5bGVfcHJlZmVyZW5jZSsnOjwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L3RyPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHRyPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzx0ZD4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVByZWZlcmVuY2VIdG1sICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC90cj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzx0cj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQgY2xhc3M9XCJuZXdzbGV0dGVyXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9XCJjaGVja2VkXCIgaWQ9XCJhZ3JlZU5ld3NMZXR0ZXJcIiBuYW1lPVwicmVnW2FncmVlTmV3c0xldHRlcl1cIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8bGFiZWw+ICcgKyBfbGFuZy5wYWdlX3JlZ2lzdGVyX2FncmVlX25ld3NsZXR0ZXIgKyAnPC9sYWJlbD48L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC90cj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzx0cj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQgY2xhc3M9XCJzaWduLXVwLWJ0bi10ZFwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwic2lnbi11cC1idG5cIiB0YWJpbmRleD1cIjNcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCInICsgX2xhbmcucGFnZV9yZWdpc3Rlcl9yZWdfc3VibWl0ICsgJ1wiIGFsdD1cIicgKyBfbGFuZy5wYWdlX3JlZ2lzdGVyX3JlZ19zdWJtaXQgKyAnXCIgdGl0bGU9XCInICsgX2xhbmcucGFnZV9yZWdpc3Rlcl9yZWdfc3VibWl0ICsgJ1wiIHNyYz1cIicgKyB3ZWJEYXRhLklNR19QQVRIICsgJ3RyYW4uZ2lmXCIgIGNsYXNzPVwic2lnblVwQnRuXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvYT4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC90cj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzx0cj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQgY2xhc3M9XCJwcml2YWN5XCI+PHA+JyArIHBhZ2VMb2dpbkJ5Q2xpY2tpbmdSZWdpc3RlciArJzwvcD4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8cD4nICsgcGFnZVJlbWluZFJlZ2lzdGVyRW1haWwgKyAnPC9wPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L3RyPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8L3Rib2R5PicgK1xyXG4gICAgICAgICAgICAgICAgJzwvdGFibGU+JztcclxuICAgICAgICAgICAgaWYodXNlX2NvdXBvbl9yZWdpc3Rlcil7XHJcbiAgICAgICAgICAgICAgICAgbG9naW5EaWFsb2dIdG1sID0gbG9naW5EaWFsb2dIdG1sICsgJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImFjdFwiIHZhbHVlPVwiY291cG9uX3JlZ2lzdGVyXCIgLz4nO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICBsb2dpbkRpYWxvZ0h0bWwgPSBsb2dpbkRpYWxvZ0h0bWwgKyAnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiYWN0XCIgdmFsdWU9XCJyZWdpc3RlclwiIC8+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbG9naW5EaWFsb2dIdG1sICs9ICAnPC9mb3JtPicgK1xyXG4gICAgICAgICAgICAgICAgJzwvZGl2PjwvZGl2PjwvZGl2PidcclxuXHJcbiAgICAgICAgICAgICAgICArICc8ZGl2IGlkPVwid3JhcHBlci1sXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIndpZGdldCB3LXNpZ25Jbkd1aWRlXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInctckhlYWRpbmdWMlwiPicgK1xyXG4gICAgICAgICAgICAgICAgJzxoMj48c3Bhbj4nKyBfbGFuZy5wYWdlX2xvZ2luX3NpZ25faW4gKyc8L3NwYW4+PC9oMj4nICtcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibWFpbmJveFYyXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPGZvcm0gYWN0aW9uPVwiJysgbG9nVXJsICsnXCIgbWV0aG9kPVwicG9zdFwiIG5hbWU9XCJmb3JtX2xvZ2luXCIgaWQ9XCJmb3JtX2xvZ2luXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cImxvZ2luXCIgbmFtZT1cImFjdFwiPicgK1xyXG4gICAgICAgICAgICAgICAgJzx0YWJsZSBjZWxsc3BhY2luZz1cIjBcIj48dGJvZHk+PHRyPjx0ZD4nICtcclxuICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInJlcXVpcmVkXCI+KiA8L3NwYW4+JysgX2xhbmcucGFnZV9sb2dpbl9lbWFpbCArJzo8L3RkPjwvdHI+JyArXHJcbiAgICAgICAgICAgICAgICAnPHRyPjx0ZCBjbGFzcz1cImlucHV0Y29sXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJfZW1haWxcIiBuYW1lPVwibG9naW5bZW1haWxdXCIgdmFsdWU9XCJcIiBjbGFzcz1cInRleHQgZWxtYkJsdXJcIiBtYXhsZW5ndGg9XCI5NlwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPjwvdGQ+PC90cj4nICtcclxuICAgICAgICAgICAgICAgICc8dHI+PHRkPjxzcGFuIGNsYXNzPVwicmVxdWlyZWRcIj4qIDwvc3Bhbj4nKyBfbGFuZy5wYWdlX2xvZ2luX3Bhc3N3b3JkICsnOjwvdGQ+PC90cj48dHI+JyArXHJcbiAgICAgICAgICAgICAgICAnPHRkIGNsYXNzPVwiaW5wdXRjb2xcIj48aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJfcGFzc3dvcmRcIiBuYW1lPVwibG9naW5bcGFzc3dvcmRdXCIgY2xhc3M9XCJ0ZXh0IGVsbWJCbHVyXCIgbWF4bGVuZ3RoPVwiNDBcIj48L3RkPjwvdHI+JyArXHJcbiAgICAgICAgICAgICAgICAnPHRyPjx0ZCBjbGFzcz1cImlucHV0Y29sXCI+PHAgaWQ9XCJfbXNnXCIgY2xhc3M9XCJoaWRlXCI+PC9wPjwvdGQ+PC90cj4nICtcclxuICAgICAgICAgICAgICAgICc8dHI+PHRkIGNsYXNzPVwic2lnbi1pbi1idG4tdGRcIj4nICtcclxuICAgICAgICAgICAgICAgICc8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwic2lnbi1idG5cIiB0YWJpbmRleD1cIjNcIj4nICtcclxuICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiJysgX2xhbmcucGFnZV9sb2dpbl9zaWduX2luICsnXCIgYWx0PVwiJysgX2xhbmcucGFnZV9sb2dpbl9zaWduX2luICsnXCIgdGl0bGU9XCInKyBfbGFuZy5wYWdlX2xvZ2luX3NpZ25faW4gKydcIiBzcmM9XCInICsgd2ViRGF0YS5JTUdfUEFUSCArICd0cmFuLmdpZlwiIGNsYXNzPVwic2lnbkluQnRuXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9hPicgK1xyXG4gICAgICAgICAgICAgICAgJzwvdGQ+PC90cj4nICtcclxuICAgICAgICAgICAgICAgICc8dHI+PHRkIGNsYXNzPVwiaW5wdXRjb2xcIj4nICtcclxuICAgICAgICAgICAgICAgICc8cCBjbGFzcz1cImZvcmdvdFRpcFwiPicgK1xyXG4gICAgICAgICAgICAgICAgJzxhIGhyZWY9XCInICsgd2ViRGF0YS5XRUJfUk9PVCArICdmb3Jnb3RwYXNzd29yZC5waHBcIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIicgKyBfbGFuZy5wYWdlX2xvZ2luX2ZvcmdvdF90aXAgKyAnXCIgY2xhc3M9XCJ1XCI+JyArIF9sYW5nLnBhZ2VfbG9naW5fZm9yZ290X3RpcCArICc8L2E+PC9wPicgK1xyXG4gICAgICAgICAgICAgICAgJzwvcD48L3RkPjwvdHI+PC90Ym9keT48L3RhYmxlPjwvZm9ybT4nICtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG9naW4tZGl2aWRpbmctbGluZVwiPjxzcGFuPicgKyBfbGFuZy5wYWdlX2NvbW1vbl9vciArICc8L3NwYW4+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInNucy1sb2dpblwiPjxkaXYgY2xhc3M9XCJmYWNlYm9va19sb2dpblwiPicgK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgaWQ9XCJmYlNpZ25CdG5cIiBvbmNsaWNrPVwicGFnZURhdGEubG9naW5Nb2R1bGUuZ2V0X2ZhY2Vib29rX2xvZ2luKClcIj4nICsgX2xhbmcucGFnZV9sb2dpbl9sb2dpbl93aXRoX2ZhY2Vib29rICsgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJnbWFpbF9sb2dpblwiPjxkaXYgaWQ9XCJnbWFpbFNpZ25CdG5cIj4nICsgX2xhbmcucGFnZV9zbnNfZ29vZ2xlX3NpZ24gKyAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xyXG4gICAgICAgICAgICArICc8L2Rpdj4nXHJcbiAgICAgICAgICAgIGRpYWxvZy5vcGVuUmVnaXN0ZXJMb2dpbih7bW9kSWQ6ICdsb2dpbkRpYWxvZycsIHdpZHRoOiA1NjAsIGh0bWw6IGxvZ2luRGlhbG9nSHRtbCwgY2xvc2VXaGVuQ2xpY2tpbmdCZzogZmFsc2V9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkaWFsb2dIYW5kbGVyKCkge1xyXG4gICAgICAgICAgICAvL+eZu+mZhuazqOWGjOihqOWNlVxyXG4gICAgICAgICAgICB2YXIgbG9naW4gPSByZXF1aXJlKCcuLi9wYWdlcy9sb2dpbicpO1xyXG4gICAgICAgICAgICBsb2dpbi5pbml0X2xvZ2luKGlzX2NhbGxiYWNrKTtcclxuICAgICAgICAgICAgbG9naW4uaW5pdF9yZWdpc3Rlcihpc19jYWxsYmFjayk7XHJcbiAgICAgICAgICAgIGxvZ2luLmluaXRfY2FsZW5kYXIoJyNkYXRlcGlja2VyX3BvcCcpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChpc19jYWxsYmFjaykgPT0gJ3VuZGVmaW5lZCcgfHwgaXNfY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGxvZ2luLmluaXRfY2FsbGJhY2soc2lnblN1Y2Nlc3NDYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKCcjbG9naW5EaWFsb2cnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG9wZW5Mb2dpbkRpYWxvZygpO1xyXG4gICAgICAgICAgICAvLyBkaWFsb2dIYW5kbGVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdnZXQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwP2FjdD1jaGVja0xvZ2dlZEluJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6ICcnLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoci5lcnJvciA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1c2VfY291cG9uX3JlZ2lzdGVyID0gd2ViRGF0YS51c2VfY291cG9uX3JlZ2lzdGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1c2VfY291cG9uX3JlZ2lzdGVyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNsb2dpbkRpYWxvZycpLmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Mb2dpbkRpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnblN1Y2Nlc3NDYigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgUG9wTG9naW4ucHJvdG90eXBlLmp1bXBUb1VybCA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICBpZiAobG9jYXRpb24uaHJlZiA9PT0gdXJsKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuLy99KTtcclxuIl19
},{"../mod/cookie":12,"../mod/dialog":15,"../pages/login":24}],21:[function(require,module,exports){
//define(function(require, exports, module) {
function StringHandle() {}
module.exports = StringHandle;

StringHandle.prototype.quoteattr = function (string, preserveCR) {
	preserveCR = preserveCR ? '&#13;' : '\n';
	return ('' + string)                   /* Forces the conversion to string. */
		.replace(/&/g, '&amp;')            /* This MUST be the 1st replacement. */
		.replace(/'/g, '&apos;')           /* The 4 other predefined entities, required. */
		.replace(/"/g, '&quot;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		/*
		 You may add other replacements here for HTML only
		 (but it's not necessary).
		 Or for XML, only if the named entities are defined in its DTD.
		 */
		.replace(/\r\n/g, preserveCR)      /* Must be before the next replacement. */
		.replace(/[\r\n]/g, preserveCR);
	;
}

//});
},{}],22:[function(require,module,exports){
//define(function (require, exports, module) {

    function UserAgent() {}
    module.exports = UserAgent;

    UserAgent.prototype.isIpad = function () {
        if (navigator.userAgent.match(/iPad/i)) {
            return true;
        } else {
            return false;
        }
    }
    
    UserAgent.prototype.isPhone = function () {
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/) || navigator.userAgent.match(/Windows Phone/i) ||	navigator.userAgent.match(/ZuneWP7/i)) {
            return true;
        } else {
            return false;
        }
    }

    UserAgent.prototype.isIE = function () {
        var userAgent = navigator.userAgent.toLowerCase();
        var isIE = (/msie/.test(userAgent) && !/opera/.test(userAgent)) ? true : false;
        return isIE;
    }

    UserAgent.prototype.isIEVersion = function (version) {
        var userAgent = navigator.userAgent.toLowerCase();
        var isIE = (/msie/.test(userAgent) && !/opera/.test(userAgent)) ? true : false;
        var uaVersion = (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1];
        if(isIE && parseInt(uaVersion) == parseInt(version)) {
            return true;
        } else {
            return false;
        }
    }
    UserAgent.prototype.detectBrowser=function(){
        var ua= navigator.userAgent, tem, 
        M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE '+(tem[1] || '');
        }
        if(M[1]=== 'Chrome'){
            tem= ua.match(/\bOPR\/(\d+)/)
            if(tem!= null) return 'Opera '+tem[1];
        }
        M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
        return M.join(' ');
    };

//});
},{}],23:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var filter = $('#landingPageFilter');
var selectedCat = filter.find('.cat-filter-selected');
var filterAnchor = $('#landing-page-filter-anchor');
var pageSkip = $('#page_skip');
var orderBySelector = $('#lpOrderBy')
var init = function () {
    var page = pageSkip.find('.page');
    page.addClass('skipPage')
    orderBySelector.find(".selected").attr("selected",true);
}

var scrollFilter = function (elem) {
    var gapX;
    var startX;
    var isClick = true;
    elem.bind("mousedown", start);
    function start(event) {
        // if click
        if (event.button == 0) {
            gapX = event.clientX;
            startX = elem.scrollLeft();
            elem.bind("mouseout", stop);
            elem.bind("mousemove", move);
            elem.bind("mouseup", stop);
            elem.find('a').attr("onclick", "");
        }
        return false;
    }

    function move(event) {
        var left = event.clientX - gapX;
        elem.scrollLeft(startX - left);
        isClick = false;
        return false;
    }

    function stop() {
        elem.unbind("mousemove", move);
        if (!isClick){
            elem.find('a').attr("onclick", "return false;");
            isClick = true;
        }
        elem.unbind("mouseup", stop);
    }
}

var adjustFilterDisplayPosition = function(){
    if (filter.length == 0){
        return;
    }
    var selectedCatDistance = selectedCat.position().left;
    var distance = filter.width() - selectedCat.width();
    if (selectedCatDistance > distance){
        filter.scrollLeft(selectedCatDistance - distance + selectedCat.width());
    }
}


var filterFixTop = function(){
    if (filter.length == 0){
        return;
    }
    $(document).ready(function () {
        $(window).scroll(function () {
            var toTopDistance = filterAnchor.offset().top;
            var scrollTopDistance = $(document).scrollTop();
            var filterContainer = filter.parent();
            if (scrollTopDistance >= toTopDistance){
                filterContainer.addClass('fixTop')
                filter.addClass('landing-page-filter-fix-top');
                filterAnchor.addClass('filter-anchor-fix-top');
            } else{
                filterContainer.removeClass('fixTop');
                filter.removeClass('landing-page-filter-fix-top');
                filterAnchor.removeClass('filter-anchor-fix-top');
            }
        })
    })
}

var orderBySelect = function(){
    orderBySelector.on('change', function () {
        var selectId = $('#lpOrderBy option:selected')
        var href = selectId.attr('data-href')
        window.location.href = href
    })
}

init();
scrollFilter(filter);
adjustFilterDisplayPosition();
filterFixTop();
orderBySelect();




}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvcGFnZXMvbGFuZGluZ19wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG5cclxudmFyIGZpbHRlciA9ICQoJyNsYW5kaW5nUGFnZUZpbHRlcicpO1xyXG52YXIgc2VsZWN0ZWRDYXQgPSBmaWx0ZXIuZmluZCgnLmNhdC1maWx0ZXItc2VsZWN0ZWQnKTtcclxudmFyIGZpbHRlckFuY2hvciA9ICQoJyNsYW5kaW5nLXBhZ2UtZmlsdGVyLWFuY2hvcicpO1xyXG52YXIgcGFnZVNraXAgPSAkKCcjcGFnZV9za2lwJyk7XHJcbnZhciBvcmRlckJ5U2VsZWN0b3IgPSAkKCcjbHBPcmRlckJ5JylcclxudmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcGFnZSA9IHBhZ2VTa2lwLmZpbmQoJy5wYWdlJyk7XHJcbiAgICBwYWdlLmFkZENsYXNzKCdza2lwUGFnZScpXHJcbiAgICBvcmRlckJ5U2VsZWN0b3IuZmluZChcIi5zZWxlY3RlZFwiKS5hdHRyKFwic2VsZWN0ZWRcIix0cnVlKTtcclxufVxyXG5cclxudmFyIHNjcm9sbEZpbHRlciA9IGZ1bmN0aW9uIChlbGVtKSB7XHJcbiAgICB2YXIgZ2FwWDtcclxuICAgIHZhciBzdGFydFg7XHJcbiAgICB2YXIgaXNDbGljayA9IHRydWU7XHJcbiAgICBlbGVtLmJpbmQoXCJtb3VzZWRvd25cIiwgc3RhcnQpO1xyXG4gICAgZnVuY3Rpb24gc3RhcnQoZXZlbnQpIHtcclxuICAgICAgICAvLyBpZiBjbGlja1xyXG4gICAgICAgIGlmIChldmVudC5idXR0b24gPT0gMCkge1xyXG4gICAgICAgICAgICBnYXBYID0gZXZlbnQuY2xpZW50WDtcclxuICAgICAgICAgICAgc3RhcnRYID0gZWxlbS5zY3JvbGxMZWZ0KCk7XHJcbiAgICAgICAgICAgIGVsZW0uYmluZChcIm1vdXNlb3V0XCIsIHN0b3ApO1xyXG4gICAgICAgICAgICBlbGVtLmJpbmQoXCJtb3VzZW1vdmVcIiwgbW92ZSk7XHJcbiAgICAgICAgICAgIGVsZW0uYmluZChcIm1vdXNldXBcIiwgc3RvcCk7XHJcbiAgICAgICAgICAgIGVsZW0uZmluZCgnYScpLmF0dHIoXCJvbmNsaWNrXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW92ZShldmVudCkge1xyXG4gICAgICAgIHZhciBsZWZ0ID0gZXZlbnQuY2xpZW50WCAtIGdhcFg7XHJcbiAgICAgICAgZWxlbS5zY3JvbGxMZWZ0KHN0YXJ0WCAtIGxlZnQpO1xyXG4gICAgICAgIGlzQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcclxuICAgICAgICBlbGVtLnVuYmluZChcIm1vdXNlbW92ZVwiLCBtb3ZlKTtcclxuICAgICAgICBpZiAoIWlzQ2xpY2spe1xyXG4gICAgICAgICAgICBlbGVtLmZpbmQoJ2EnKS5hdHRyKFwib25jbGlja1wiLCBcInJldHVybiBmYWxzZTtcIik7XHJcbiAgICAgICAgICAgIGlzQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtLnVuYmluZChcIm1vdXNldXBcIiwgc3RvcCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBhZGp1c3RGaWx0ZXJEaXNwbGF5UG9zaXRpb24gPSBmdW5jdGlvbigpe1xyXG4gICAgaWYgKGZpbHRlci5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHNlbGVjdGVkQ2F0RGlzdGFuY2UgPSBzZWxlY3RlZENhdC5wb3NpdGlvbigpLmxlZnQ7XHJcbiAgICB2YXIgZGlzdGFuY2UgPSBmaWx0ZXIud2lkdGgoKSAtIHNlbGVjdGVkQ2F0LndpZHRoKCk7XHJcbiAgICBpZiAoc2VsZWN0ZWRDYXREaXN0YW5jZSA+IGRpc3RhbmNlKXtcclxuICAgICAgICBmaWx0ZXIuc2Nyb2xsTGVmdChzZWxlY3RlZENhdERpc3RhbmNlIC0gZGlzdGFuY2UgKyBzZWxlY3RlZENhdC53aWR0aCgpKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbnZhciBmaWx0ZXJGaXhUb3AgPSBmdW5jdGlvbigpe1xyXG4gICAgaWYgKGZpbHRlci5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdG9Ub3BEaXN0YW5jZSA9IGZpbHRlckFuY2hvci5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxUb3BEaXN0YW5jZSA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICB2YXIgZmlsdGVyQ29udGFpbmVyID0gZmlsdGVyLnBhcmVudCgpO1xyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsVG9wRGlzdGFuY2UgPj0gdG9Ub3BEaXN0YW5jZSl7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJDb250YWluZXIuYWRkQ2xhc3MoJ2ZpeFRvcCcpXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIuYWRkQ2xhc3MoJ2xhbmRpbmctcGFnZS1maWx0ZXItZml4LXRvcCcpO1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyQW5jaG9yLmFkZENsYXNzKCdmaWx0ZXItYW5jaG9yLWZpeC10b3AnKTtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyQ29udGFpbmVyLnJlbW92ZUNsYXNzKCdmaXhUb3AnKTtcclxuICAgICAgICAgICAgICAgIGZpbHRlci5yZW1vdmVDbGFzcygnbGFuZGluZy1wYWdlLWZpbHRlci1maXgtdG9wJyk7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJBbmNob3IucmVtb3ZlQ2xhc3MoJ2ZpbHRlci1hbmNob3ItZml4LXRvcCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbnZhciBvcmRlckJ5U2VsZWN0ID0gZnVuY3Rpb24oKXtcclxuICAgIG9yZGVyQnlTZWxlY3Rvci5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZWxlY3RJZCA9ICQoJyNscE9yZGVyQnkgb3B0aW9uOnNlbGVjdGVkJylcclxuICAgICAgICB2YXIgaHJlZiA9IHNlbGVjdElkLmF0dHIoJ2RhdGEtaHJlZicpXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmXHJcbiAgICB9KVxyXG59XHJcblxyXG5pbml0KCk7XHJcbnNjcm9sbEZpbHRlcihmaWx0ZXIpO1xyXG5hZGp1c3RGaWx0ZXJEaXNwbGF5UG9zaXRpb24oKTtcclxuZmlsdGVyRml4VG9wKCk7XHJcbm9yZGVyQnlTZWxlY3QoKTtcclxuXHJcblxyXG5cclxuIl19
},{}],24:[function(require,module,exports){
(function (global){
//define(function (require, exports, module) {

    var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    require('../lib/jqueryForm');
    require('../lib/jmodal');
    require('../mod/autocompleteEmail');
    require('../mod/formCheck');
    var openInPopup = require('../mod/openInPopup');
    var CouponRegisterDialog = require('../mod/coupon_register_dialog');
    var Cookie = require('../mod/cookie');
    require('../lib/jQueryDatePicker');
    require('../lib/jquery-ui-i18.min');
    var cookie = new Cookie();

    var back_url = (pageData && pageData.back) ? pageData.back : location.href;
    var anchorPos = back_url.indexOf('#');
    var back_url = back_url.substr(0, anchorPos > 0 ? anchorPos : back_url.length);
    var google_auth_url = pageData.google_auth_url;

    window.dataLayer = window.dataLayer || [];

    if (pageData && pageData.isCheckoutLogin) {
        back_url += '?isLoginBack=1';
    }
    function changeWriteReviewUrl() {
        if (!$.isEmptyObject(window.review) && window.review.status) {
            return window.review.status ? window.review.url : back_url;
        }
        return back_url;
    }

    function revertWriteReviewUrl() {
        window.review = {
            status: false,
            url: webData.WEB_ROOT
        }
    }

    //显示/清除错误提示
    var showError = function(obj, errMsg) {
        var obj = $(obj);
        if (obj.parent().hasClass('inputcol')) {
            obj.parent().addClass('error').find('.error-tip').text(errMsg);
            var error_tip = obj.parent().find('.error-tip');
            if(error_tip.length > 0) {
                error_tip.text(errMsg);
            } else {
                obj.parent().append(' <p class="error-tip">' + errMsg + '</p>');
            }
        } else {
            obj.wrap('<div class="inputcol error"></div>').parent().append(' <p class="error-tip">' + errMsg + '</p>');
        }
        obj.focus(function() {
            clearError($(this));
        });
    }
    function clearError(obj) {
        $(obj).parent('.inputcol').removeClass('error').children('.error-tip').text('');
    }

    //鼠标焦点
    var init_focus = function (focus_key) {
        if (focus_key == 'register') {
            $('#email').focus();
        } else if (focus_key == 'order_status') {
            $('#order_sn').focus();
        } else {
            $('#_email').focus();
        }
    };
    var header_init_focus = function (focus_key) {
        if (focus_key == 'register') {
            $('#header_register_email').focus();
        } else if (focus_key == 'order_status') {
            $('#order_sn').focus();
        } else if(focus_key == 'login') {
            $('#header_login_email').focus();
        } else {
            $('#header_login_email').focus();
        }
    };
    //获取提示邮箱
    var init_email = function () {
        var _url = webData.WEB_ROOT + 'ajax.php?act=get_email_domains&language=' + webData.lang;
        $.ajax({
            type : 'post',
            url : _url,
            success : function (data) {
                data = eval('[' + data + ']')[0];
                if (data != '') {
                    pageData.emailList = data;
                    init_login();
                    header_init_login();
                    init_register();
                    header_init_register();
                }
            }
        })
    }

    var check_is_https = function () {
        var targetProtocol = "https:";
        if (window.location.protocol != targetProtocol) {
            window.location.href = targetProtocol +
                window.location.href.substring(window.location.protocol.length);
            return false
        }
        return true;
    }

    function initCalendar(selector) {
        var options = $.extend(
            {},                                 
            $.datepicker.regional[webData.lang],
            { 
                dateFormat: "yy-mm-dd",
                minDate: '+1d',
                changeYear: false,
            
            } // your custom options
        );
        $(selector).datepicker(options);
    $(selector).wrap('<div style="position: relative; height:100%;"></div>')
        .after('<span class="ui-icon-calendar-register"></span>');
        initCalendarClick(selector);
}

function initCalendarClick(select) {
        $('.ui-icon-calendar-register').bind('click',function () {
            console.log(2020)
            $(select).focus();
        })
}

$(function () {
    if(window.initedDatepicker) {
        return
    }
    window.initedDatepicker = true
    // initCalendar('#datepicker_header');
    initCalendar('#datepicker_page');
    // initCalendar('#datepicker_pop');
})

    //登陆
    var init_login = function (is_callback) {
        //邮件提示
        $('#_email').autocompleteEmail();

        $('#fbSignBtn').bind('click', function () {
            window.dataLayer.push({'event' : 'pcFbLoginBtnTotalClicks'});
        })

        $('#gmailSignBtn, #showroomGmailSignBtn').bind('click', function () {
            gmailSignin();
            cookie.setCookie('signInGoogle', true, 30);
            window.dataLayer.push({'event' : 'pcgPlusLoginBtnTotalClicks'});
        })

        $.ajax({
            method: "POST",
            url: "/ajax.php",
            dataType: 'json',
            data: {
                act: "initLogin",
                back: pageData.back
            },
            success: function(r) {
                if (r.error == 0) {
                    google_auth_url = r.googleUrl;
                }
            }
        });

        //验证表单及提交
        var elem_form = $('#form_login');
        var items = {
            'login[password]': [
                {type: 'null', errMsg: _lang.page_login_enter_password}
            ]
        };
        var itemsEmail = {
            'login[email]': [
                {type: 'null', errMsg: _lang.page_login_enter_email},
                {type: 'email', errMsg: _lang.page_login_check_email_format}
            ]
        };
        var opt = {
            dataType: 'json',
            success: function (r) {
                if (r.error == 0) {
                    if(typeof(callback_func) == 'function') {
                        callback_func.call();
                        // add setTimeout to async the ajax, make the location.href run after the callback function.
                        setTimeout(function() {
                                location.href = r.back
                        }, 500);
                    }else {
                            location.href = r.back;
                    }
                } else {
                    var _msg = $('#_msg');
                    _msg.html(r.msg).show();
                    elem_form.find(':input').focus(function () {
                        _msg.hide();
                    });
                }
            }
        }
        $('.login-register #_email').focus(function () {
            var emailObj = $('.login-register #_email');
            emailObj.css('color','#333');
            emailObj.css('border','');
        });

        elem_form.submit(function () {
            elem_form.find('.error-tip').html('');
            elem_form.find('#_msg').html('').hide();
            var httpsRs = check_is_https();
            if (!httpsRs) {
                return false;
            }
            var isChecked = $(this).formCheck(items, {
                showError : function (obj, errMsg) {
                    showError(obj, errMsg);
                }
            });
            var isCheckedEmail = $(this).formCheck(itemsEmail, {
                showError : function (obj, errMsg) {
                    showError(obj, errMsg);
                }
            });

            if (isChecked && isCheckedEmail) {
                elem_form.ajaxSubmit(opt);
            } else if(!isCheckedEmail) {
                var emailObj = $('.login-register .inputcol #_email');
                emailObj.css('color','#fb5058');
                emailObj.val() !== '' && emailObj.css('border','1px solid #fb5058');
            }
            return false;
        });

        //fackbook登陆
        if(webData.fb_app == '' && webData.gmail_app == '') {
            return;
        }
        window.fbAsyncInit = function() {
            FB.init({
                appId : webData.fb_app,
                status : false,
                cookie : true,
                xfbml : true,
                oauth : true,
                version : 'v2.3'
            });
//            FB.Event.subscribe('auth.statusChange', get_facebook_login);
        };
        if(typeof(FB) == 'undefined') {
            require('../mod/loader').loadSocialJS('facebook');
        }else {
            window.fbAsyncInit();
        }
    };

    //general login
var header_init_login = function (is_callback) {

    //邮件提示
    $('#header_login_email').autocompleteEmail();

    $('#header_login_fbSignBtn').bind('click', function () {
        window.dataLayer.push({'event' : 'pcFbLoginBtnTotalClicks'});
    })

    $('#header_login_gmailSignBtn, #header_login_showroomGmailSignBtn').bind('click', function () {
        gmailSignin();
        cookie.setCookie('signInGoogle', true, 30);
        window.dataLayer.push({'event' : 'pcgPlusLoginBtnTotalClicks'});
    })

    $.ajax({
        method: "POST",
        url: "/ajax.php",
        dataType: 'json',
        data: {
            act: "initLogin",
            back: pageData.back
        },
        success: function(r) {
            if (r.error == 0) {
                google_auth_url = r.googleUrl;
            }
        }
    });

    //验证表单及提交
    var elem_form = $('#header_form_login');
    var items = {
        'login[password]': [
            {type: 'null', errMsg: _lang.page_login_enter_password}
        ]
    };
    var itemsEmail = {
        'login[email]': [
            {type: 'null', errMsg: _lang.page_login_enter_email},
            {type: 'email', errMsg: _lang.page_login_check_email_format}
        ]
    };
    var opt = {
        dataType: 'json',
        success: function (r) {
            if (r.error == 0) {
                if(typeof(callback_func) == 'function') {
                    callback_func.call();
                    // add setTimeout to async the ajax, make the location.href run after the callback function.
                    setTimeout(function() {
                        location.href = r.back
                    }, 500);
                }else {
                    location.href = r.back;
                }
            } else {
                var _msg = $('#header_login_msg');
                _msg.html(r.msg).show();
                elem_form.find(':input').focus(function () {
                    _msg.hide();
                });
            }
        }
    }

    $('#header_login_email').focus(function () {
        var emailObj = $('#header_login_email');
        emailObj.css('color','#333');
        emailObj.css('border','');
    });
    elem_form.submit(function () {
        elem_form.find('.error-tip').html('');
        elem_form.find('#header_login_msg').html('').hide();
        var httpsRs = check_is_https();
        if (!httpsRs) {
            return false;
        }
        var isChecked = $(this).formCheck(items, {
            showError : function (obj, errMsg) {
                showError(obj, errMsg);
            }
        });
        var isCheckedEmail = $(this).formCheck(itemsEmail, {
            showError : function (obj, errMsg) {
                showError(obj, errMsg);
            }
        });

        if (isChecked && isCheckedEmail) {
            elem_form.ajaxSubmit(opt);
        } else if(!isCheckedEmail) {
            var emailObj = $('.login-register .inputcol #header_login_email');
            emailObj.css('color','#fb5058');
            emailObj.val() !== '' && emailObj.css('border','1px solid #fb5058');
        }
        return false;
    });

    //fackbook登陆
    if(webData.fb_app == '' && webData.gmail_app == '') {
        return;
    }
    window.fbAsyncInit = function() {
        FB.init({
            appId : webData.fb_app,
            status : false,
            cookie : true,
            xfbml : true,
            oauth : true,
            version : 'v2.3'
        });
    //FB.Event.subscribe('auth.statusChange', get_facebook_login);
    };
    if(typeof(FB) == 'undefined') {
        require('../mod/loader').loadSocialJS('facebook');
    }else {
        window.fbAsyncInit();
    }
};

    function gmailSignin() {
        openInPopup(google_auth_url, 'google_auth', 600, 500);
    }

    var facebook_login_email_registered = function () {
        var email = $('#_email').val();
        var password = $('#_password').val();
        if (!email) {
            alert(_lang.page_login_enter_email);
        } else if (!password) {
            alert(_lang.page_login_enter_password);
        } else {
            var login = {
                'email': email,
                'password': password
            };
            $.ajax({
                'type': 'POST',
                'url': webData.WEB_ROOT + 'ajax.php',
                'data': 'act=login&login[email]=' + login.email + '&login[password]=' + login.password + '&from=facebook' + '&back=' + back_url,
                'dataType': 'json',
                'success': function(r) {
                    if (r.error == 0) {
                        setTimeout(function () {
                            location.href = changeWriteReviewUrl();
                        }, 500);
                    } else {
                        alert(r.msg);
                        revertWriteReviewUrl();
                    }
                }
            });
        }
    }

    //注册
    var init_register = function (is_callback) {
        var elem_form = $('#form_reg');
        var ipt_email = $('#email');
        var btnContinue = $('#continue-btn');

        //绑定continue显示注册窗口
        btnContinue.bind('click',function () {
            elem_form.show();
            btnContinue.hide();
        });

        //邮件提示
        ipt_email.autocompleteEmail();

        //验证邮箱是否被占用
        var email_wait =  $('#regEmailValWait');
        var checkEmailExists = function () {
            elem_form.formCheck({
                'reg[email]': [
                    {type: 'null', showError: function () {}, noFocus: true},
                    {type: 'email', showError: function () {}, noFocus: true},
                    {type: 'availEmail', noFocus: true}
                ]
            }, {
                rules: {
                    availEmail: function (obj, checks) {
                        $.ajax({
                            type: 'POST',
                            url: webData.WEB_ROOT + 'ajax.php?act=register',
                            data: {'email': $(obj).val(), 'checkEmail': 1},
                            dataType: 'json',
                            beforeSend: function () {
                                // email_wait.show();
                            },
                            complete: function() {
                                // email_wait.hide();
                            },
                            success: function (r) {
                                if (r.error == 0) {
                                    clearError(obj);
                                } else {
                                    showError(obj, r.msg);
                                }
                            }
                        });
                    }
                }
            });
        };
        // ipt_email.change(checkEmailExists);
        ipt_email.blur(checkEmailExists);
        ipt_email.focus(function () {
            ipt_email.css('color','#333');
            ipt_email.css('border','');
        });
        //验证表单及提交
        var itemsx = {
            'reg[password]': [
                {type: 'null', errMsg: _lang.page_login_enter_password},
                {type: 'minlength', minlength: 5, errMsg: _lang.page_register_pwd_minimum_5}
            ],
            'reg[password_again]': [
                {type: 'null', errMsg: _lang.page_login_reenter_password},
                {type: 'matchPassword', errMsg: _lang.page_register_pwd_not_match}
            ],
            'terms': [
                {type: 'checked', value: -1, errMsg: _lang.page_register_please_agree}
            ]
        };
        //验证表单及提交
        var itemsEmail = {
            'reg[email]': [
                {type: 'null', errMsg: _lang.page_login_enter_email},
                {type: 'email', errMsg: _lang.page_login_check_email_format}
            ]
        };

        var optx = {
            dataType: 'json',
            success: function (r) {
                if (r.error == 0) {
                    var use_coupon_register = webData.use_coupon_register;
                    if(use_coupon_register){
                        $('#loginDialog').css("display","none");
                        CouponRegisterDialog.init(r.data.couponCode,r.back);
                        return false;
                    }
                    if(typeof(callback_func) == 'function') {
                        callback_func.call();
                        // add setTimeout to async the ajax, make the location.href run after the callback function.
                        setTimeout(function() {
                            location.href = r.back
                        }, 500);
                    }else {
                        location.href = r.back;
                    }
                } else {
                    var _msg = $('#_msgx');
                    _msg.html(r.msg).show();
                    elem_form.find(':input').focus(function () {
                        _msg.hide();
                        return true;
                    });
                }
            }
        }
        elem_form.submit(function () {
            elem_form.find('.error-tip').html('');
            elem_form.find('#_msgx').html('').hide();

            var isChecked = $(this).formCheck(itemsx, {
                showError : function (obj, errMsg) {
                    showError(obj, errMsg);
                },
                rules: {
                    matchPassword: function (obj, checks) {
                        return $(obj).val() == elem_form.find('#password').val();
                    }
                }
            });
            var isCheckedEmail = $(this).formCheck(itemsEmail, {
                showError : function (obj, errMsg) {
                    showError(obj, errMsg);
                }
            });
            if (isChecked && isCheckedEmail) {
                elem_form.ajaxSubmit(optx);
            } else if(!isCheckedEmail){
                var emailObj = $('.login-register .inputcol #email');
                emailObj.css('color','#fb5058');
                emailObj.val() !== '' && emailObj.css('border','1px solid #fb5058');
            }
            return false;
        });
        return true;
    };

    //general register
    var header_init_register = function (is_callback) {
    var elem_form = $('#header_form_reg');
    var ipt_email = $('#header_register_email');
    // var btnContinue = $('#header_continue-btn');

    //绑定continue显示注册窗口
    // btnContinue.bind('click',function () {
    //     elem_form.show();
    //     btnContinue.hide();
    // });

    //邮件提示
    ipt_email.autocompleteEmail();

    //验证邮箱是否被占用
    var email_wait =  $('#header_regEmailValWait');
    var checkEmailExists = function () {
        elem_form.formCheck({
            'reg[email]': [
                {type: 'null', showError: function () {}, noFocus: true},
                {type: 'email', showError: function () {}, noFocus: true},
                {type: 'availEmail', noFocus: true}
            ]
        }, {
            rules: {
                availEmail: function (obj, checks) {
                    $.ajax({
                        type: 'POST',
                        url: webData.WEB_ROOT + 'ajax.php?act=register',
                        data: {'email': $(obj).val(), 'checkEmail': 1},
                        dataType: 'json',
                        beforeSend: function () {
                            //email_wait.show();
                        },
                        complete: function() {
                            //email_wait.hide();
                        },
                        success: function (r) {
                            if (r.error == 0) {
                                clearError(obj);
                            } else {
                                showError(obj, r.msg);
                            }
                        }
                    });
                }
            }
        });
    };
    // ipt_email.change(checkEmailExists);
    ipt_email.blur(checkEmailExists);
    ipt_email.focus(function () {
        ipt_email.css('color','#333');
        ipt_email.css('border','');
    });
    //验证表单及提交
    var itemsx = {
        'reg[password]': [
            {type: 'null', errMsg: _lang.page_login_enter_password},
            {type: 'minlength', minlength: 5, errMsg: _lang.page_register_pwd_minimum_5}
        ],
        'reg[password_again]': [
            {type: 'null', errMsg: _lang.page_login_reenter_password},
            {type: 'matchPassword', errMsg: _lang.page_register_pwd_not_match}
        ],
        'terms': [
            {type: 'checked', value: -1, errMsg: _lang.page_register_please_agree}
        ]
    };
    var itemsEmail = {
        'reg[email]': [
            {type: 'null', errMsg: _lang.page_login_enter_email},
            {type: 'email', errMsg: _lang.page_login_check_email_format}
        ],
    };

    var optx = {
        dataType: 'json',
        success: function (r) {
            if (r.error == 0) {
                var use_coupon_register = webData.use_coupon_register;
                if(use_coupon_register){
                    $('#header_loginDialog').css("display","none");
                    CouponRegisterDialog.init(r.data.couponCode,r.back);
                    return false;
                }
                if(typeof(callback_func) == 'function') {
                    callback_func.call();
                    // add setTimeout to async the ajax, make the location.href run after the callback function.
                    setTimeout(function() {
                        location.href = r.back
                    }, 500);
                }else {
                    location.href = r.back;
                }
            } else {
                var _msg = $('#header_register_msgx');
                _msg.html(r.msg).show();
                elem_form.find(':input').focus(function () {
                    _msg.hide();
                });
            }
        }
    }
    elem_form.submit(function () {
        elem_form.find('.error-tip').html('');
        elem_form.find('#header_login_msg').html('').hide();

        var isChecked = $(this).formCheck(itemsx, {
            showError : function (obj, errMsg) {
                showError(obj, errMsg);
            },
            rules: {
                matchPassword: function (obj, checks) {
                    return $(obj).val() == elem_form.find('#header_register_password').val();
                }
            }
        });
        var isCheckedEmail = $(this).formCheck(itemsEmail, {
            showError : function (obj, errMsg) {
                showError(obj, errMsg);
            },
        });
        if (isChecked && isCheckedEmail) {
            elem_form.ajaxSubmit(optx);
        } else if(!isCheckedEmail) {
            ipt_email.css('color','#fb5058');
            ipt_email.val() !== '' && ipt_email.css('border','1px solid #fb5058');
        }
        return false;
    });

};
    // 匿名下单
    var init_login_guest = function () {
        var elem_form = $('#form_login_guest');

        //验证表单及提交
        var itemsx = {
            'guest[email]': [
                {type: 'null', errMsg: _lang.page_login_enter_email},
                {type: 'email', errMsg: _lang.page_login_check_email_format}
            ]
        };

        var optx = {
            dataType: 'json',
            success: function (r) {
                if (r.error == 0) {
                    if(typeof(callback_func) == 'function') {
                        callback_func.call();
                        // add setTimeout to async the ajax, make the location.href run after the callback function.
                        setTimeout(function() {
                            location.href = r.back
                        }, 500);
                    }else {
                        location.href = r.back;
                    }
                } else {
                    var _msg = $('#_msgx');
                    _msg.html(r.msg).show();
                    elem_form.find(':input').focus(function () {
                        _msg.hide();
                    });
                }
            }
        }
        elem_form.submit(function () {
            elem_form.find('.error-tip').html('');
            elem_form.find('#_msgx').html('').hide();

            var isChecked = $(this).formCheck(itemsx, {
                showError : function (obj, errMsg) {
                    showError(obj, errMsg);
                }
            });
            if (isChecked) {
                elem_form.ajaxSubmit(optx);
            }
            return false;
        });

    };

    function facebook_login(email,back_url) {
        $.post(webData.WEB_ROOT + 'ajax.php', {
            'act': 'register',
            'from': 'facebook',
            'back': back_url,
            'email': email
        }, function (r) {
            if (r.error == 0) {
                setTimeout(function () {
                    if(typeof(callback_func) == 'function') {
                        callback_func.call();
                        // add setTimeout to async the ajax, make the location.href run after the callback function.
                        setTimeout(function() {
                            location.href = r.back
                        }, 500);
                    }else {
                        location.href = r.back;
                    }
                }, 500);
                window.dataLayer.push({'event' : 'pcNotBindFbLoginSucceed'});
            } else {
                // for fail
                window.dataLayer.push({'event' : 'pcNotBindFbLoginFailed'});
            }
        }, 'json');
    }

    function get_facebook_login() {
        var Dialog = require('../mod/dialog');
        //for facebook login dialog not center on ff
        window.open = openInPopup;
        FB.login(function(response) {
            if (response.status == "connected" && response.authResponse) {
                $("#loginDialog").hide();
                window.open = window.originOpen;
                var fbWaiteDialog = '<div id="fbWaiteDialog" >'
                    + '<h1 class="sign-with-facebook">' + _lang.page_login_login_with_facebook + '</h1>'
                    + '<div class="please-waite">' + _lang.page_login_you_have_logged_on_facebook + '</div>'
                    + '</div>';
                Dialog.open({
                    'modId':'fbWaiting',
                    'html':fbWaiteDialog,
                    'canClose': false
                });
                var back = changeWriteReviewUrl()
                $.post(webData.WEB_ROOT + 'ajax.php', {
                    'act': 'register',
                    'from': 'facebook',
                    'back': back
                }, function (r) {
                    if ($('#loginDialog').css("display") == 'none') {
                        revertWriteReviewUrl();
                    }
                    if (r.error == 0) {
                        revertWriteReviewUrl();
                        setTimeout(function () {
                            if(typeof(callback_func) == 'function') {
                                callback_func.call();
                                // add setTimeout to async the ajax, make the location.href run after the callback function.
                                setTimeout(function() {
                                    location.href = r.back
                                }, 500);
                            }else {
                                    location.href = r.back;
                            }
                        }, 500);
                    } else if (r.error == 2) {
                        $("#fbWaiting").hide();
                        $("#loginDialog").hide();
                        var fbEmailDialog = '<form id="fbEmailDialog" >'
                            + '<div class="mainContent">'
                            + '<p class="congratulate">' + _lang.page_sns_jjshouse_congratulations + '</p>'
                            + '<p class="provide">' + _lang.page_sns_jjshouse_provide_email + '</p>'
                            + '<p class="email">' + _lang.page_sns_jjshouse_email_address + '</p>'
                            + '<input id="facebookEmail" name="fbEmail" type="text"/>'
                            + '<p class="note">' + _lang.page_sns_jjshouse_email_note + '</p>'
                            + '</div>'
                            + '<div class="btn-group">'
                            + '<div id="submit">' + _lang.page_sbumit + '</div>'
                            + '<div id="cancel">' + _lang.page_common_cancel + '</div>'
                            + '</div>'
                            + '</form>';
                        Dialog.open({
                            'modId':'fbDialog',
                            'html':fbEmailDialog
                        });
                        var emailDialog = $('#fbEmailDialog');
                        var facebookEmail = emailDialog.find('#facebookEmail');
                        var btnSummit = emailDialog.find('#submit');
                        var btnCancel = emailDialog.find('#cancel');
                        var fbmsg = $('#fbmsg');
                        facebookEmail.bind('keydown',function (e) {
                            var unicode = e.keyCode ? e.keyCode : e.charCode;
                            if (unicode == 13) {
                                btnSummit.click();
                                return false;
                            }
                        })
                        emailDialog.find(':input').focus(function () {
                            fbmsg.hide();
                        });
                        btnCancel.bind('click',function () {
                            Dialog.close('#fbDialog',true);
                        });
                        btnSummit.bind('click',function () {
                            var email = facebookEmail.val();
                            var fbLoginDialog = '<div id="floatingSign">'
                                + '<div class="tabbable">'
                                + '<div class="tab-content">'
                                + '<div class="tab-pane active" id="loginPane">'
                                + '<div id="emailRegisteredTips">'
                                + '<p><a class="emailRegisteredImg"></a>'
                                + _lang.page_email_registered + email + _lang.page_sign_with_email_and_password
                                + '</p>'
                                + '</div>'
                                + '<form action=' + webData.WEB_ROOT + 'ajax.php' + ' method="post" name="form_facebook_login" id="form_facebook_login" autocomplete="off">'
                                + '<label for="_email">' + _lang.page_login_email + ':</label>'
                                + '<input type="text" name="login[email]" id="_email" value="' + email + '" maxlength="96" autocomplete="off">'
                                + '<label for="_password">' + _lang.page_login_password + ':</label>'
                                + '<input type="password" name="login[password]" id="_password" maxlength="40">'
                                + '<p class="footRegion">'
                                + '<button type="button" class="btn btn-success btn-large" onclick="pageData.loginModule.facebook_login_email_registered()">' + _lang.page_login_sign_in + '</button>'
                                + '<span id="forgotPwd"><a target="_blank" href="' + webData.WEB_ROOT + 'forgotpassword.php" title="' + _lang.page_login_forgot_tip + '">' + _lang.page_login_forgot_tip + '</a></span>'
                                + '</p>'
                                + '</form>'
                                + '</div>'
                                + '</div>'
                                + '</div>'
                                + '</div>';
                            var check = emailDialog.formCheck({
                                    'fbEmail': [
                                        {type: 'null', errMsg: _lang.page_login_enter_email},
                                        {type: 'email', errMsg: _lang.page_login_check_email_format}
                                    ]
                                }, {
                                    showError : function (obj, errMsg) {
                                        showError(obj, errMsg);
                                    }
                                });
                            if (check) {
                                $.ajax({
                                    'type': 'POST',
                                    'async': false,
                                    'url': webData.WEB_ROOT + 'ajax.php',
                                    'data': 'act=checkEmailRegistered&email=' + email + '&back=' + back_url,
                                    'cache': true,
                                    'dataType': 'json',
                                    'success': function(r) {
                                        if (r.error == 1) {
                                            Dialog.close('#fbDialog',true);
                                            Dialog.open({'modId':'fbLoginDialog', html: fbLoginDialog});
                                        } else {
                                            $('#submit').text(_lang.page_order_progress_processing).attr('disabled',true);
                                            facebook_login(r.email,r.back);
                                        }
                                    }
                                });
                            }
                        });
                    } else {
                        $("#loginDialog").show();
                        $("#fbDialog").hide();
                        $("#fbWaiting").hide();
                        var _msg = $('#_msg');
                        var elem_form = $('#form_login');
                        _msg.html(r.msg).show();
                        elem_form.find(':input').focus(function () {
                            _msg.hide();
                        });
                        window.dataLayer.push({'event' : 'pcNotBindFbLoginFailed'});
                        if ($('#loginDialog').css("display") == 'none') {
                            revertWriteReviewUrl();
                        }
                    }
                }, 'json');
            } else {
                if ($('#loginDialog').css("display") == 'none') {
                    revertWriteReviewUrl();
                }
            }
        },{scope: 'email'});
    }

    // 绑定回调函数
    var callback_func;

    var init_callback = function (callback)    {
        callback_func = callback;
    };

    //登陆注册页面事件绑定
    var init = function() {
        if(window.initedLoginJs) {
            return
        }
        window.initedLoginJs = true
        init_email();
        init_login_guest();
        init_focus(pageData.focus_key);
        header_init_focus(pageData.focus_key);
    };

    module.exports = {
        "init": init,
        "init_login": init_login,
        "init_email": init_email,
        "init_register": init_register,
        "init_login_guest": init_login_guest,
        "get_facebook_login": get_facebook_login,
        "facebook_login_email_registered": facebook_login_email_registered,
        "init_callback": init_callback,
        "init_calendar": initCalendar,
        "init_calendar_click": initCalendarClick,
    };

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvL2RlZmluZShmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgbW9kdWxlKSB7XHJcblxyXG4gICAgdmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcblxyXG4gICAgcmVxdWlyZSgnLi4vbGliL2pxdWVyeUZvcm0nKTtcclxuICAgIHJlcXVpcmUoJy4uL2xpYi9qbW9kYWwnKTtcclxuICAgIHJlcXVpcmUoJy4uL21vZC9hdXRvY29tcGxldGVFbWFpbCcpO1xyXG4gICAgcmVxdWlyZSgnLi4vbW9kL2Zvcm1DaGVjaycpO1xyXG4gICAgdmFyIG9wZW5JblBvcHVwID0gcmVxdWlyZSgnLi4vbW9kL29wZW5JblBvcHVwJyk7XHJcbiAgICB2YXIgQ291cG9uUmVnaXN0ZXJEaWFsb2cgPSByZXF1aXJlKCcuLi9tb2QvY291cG9uX3JlZ2lzdGVyX2RpYWxvZycpO1xyXG4gICAgdmFyIENvb2tpZSA9IHJlcXVpcmUoJy4uL21vZC9jb29raWUnKTtcclxuICAgIHJlcXVpcmUoJy4uL2xpYi9qUXVlcnlEYXRlUGlja2VyJyk7XHJcbiAgICByZXF1aXJlKCcuLi9saWIvanF1ZXJ5LXVpLWkxOC5taW4nKTtcclxuICAgIHZhciBjb29raWUgPSBuZXcgQ29va2llKCk7XHJcblxyXG4gICAgdmFyIGJhY2tfdXJsID0gKHBhZ2VEYXRhICYmIHBhZ2VEYXRhLmJhY2spID8gcGFnZURhdGEuYmFjayA6IGxvY2F0aW9uLmhyZWY7XHJcbiAgICB2YXIgYW5jaG9yUG9zID0gYmFja191cmwuaW5kZXhPZignIycpO1xyXG4gICAgdmFyIGJhY2tfdXJsID0gYmFja191cmwuc3Vic3RyKDAsIGFuY2hvclBvcyA+IDAgPyBhbmNob3JQb3MgOiBiYWNrX3VybC5sZW5ndGgpO1xyXG4gICAgdmFyIGdvb2dsZV9hdXRoX3VybCA9IHBhZ2VEYXRhLmdvb2dsZV9hdXRoX3VybDtcclxuXHJcbiAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcclxuXHJcbiAgICBpZiAocGFnZURhdGEgJiYgcGFnZURhdGEuaXNDaGVja291dExvZ2luKSB7XHJcbiAgICAgICAgYmFja191cmwgKz0gJz9pc0xvZ2luQmFjaz0xJztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNoYW5nZVdyaXRlUmV2aWV3VXJsKCkge1xyXG4gICAgICAgIGlmICghJC5pc0VtcHR5T2JqZWN0KHdpbmRvdy5yZXZpZXcpICYmIHdpbmRvdy5yZXZpZXcuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmV2aWV3LnN0YXR1cyA/IHdpbmRvdy5yZXZpZXcudXJsIDogYmFja191cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiYWNrX3VybDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXZlcnRXcml0ZVJldmlld1VybCgpIHtcclxuICAgICAgICB3aW5kb3cucmV2aWV3ID0ge1xyXG4gICAgICAgICAgICBzdGF0dXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB1cmw6IHdlYkRhdGEuV0VCX1JPT1RcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/mmL7npLov5riF6Zmk6ZSZ6K+v5o+Q56S6XHJcbiAgICB2YXIgc2hvd0Vycm9yID0gZnVuY3Rpb24ob2JqLCBlcnJNc2cpIHtcclxuICAgICAgICB2YXIgb2JqID0gJChvYmopO1xyXG4gICAgICAgIGlmIChvYmoucGFyZW50KCkuaGFzQ2xhc3MoJ2lucHV0Y29sJykpIHtcclxuICAgICAgICAgICAgb2JqLnBhcmVudCgpLmFkZENsYXNzKCdlcnJvcicpLmZpbmQoJy5lcnJvci10aXAnKS50ZXh0KGVyck1zZyk7XHJcbiAgICAgICAgICAgIHZhciBlcnJvcl90aXAgPSBvYmoucGFyZW50KCkuZmluZCgnLmVycm9yLXRpcCcpO1xyXG4gICAgICAgICAgICBpZihlcnJvcl90aXAubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JfdGlwLnRleHQoZXJyTXNnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iai5wYXJlbnQoKS5hcHBlbmQoJyA8cCBjbGFzcz1cImVycm9yLXRpcFwiPicgKyBlcnJNc2cgKyAnPC9wPicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2JqLndyYXAoJzxkaXYgY2xhc3M9XCJpbnB1dGNvbCBlcnJvclwiPjwvZGl2PicpLnBhcmVudCgpLmFwcGVuZCgnIDxwIGNsYXNzPVwiZXJyb3ItdGlwXCI+JyArIGVyck1zZyArICc8L3A+Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iai5mb2N1cyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xlYXJFcnJvcigkKHRoaXMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFyRXJyb3Iob2JqKSB7XHJcbiAgICAgICAgJChvYmopLnBhcmVudCgnLmlucHV0Y29sJykucmVtb3ZlQ2xhc3MoJ2Vycm9yJykuY2hpbGRyZW4oJy5lcnJvci10aXAnKS50ZXh0KCcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+m8oOagh+eEpueCuVxyXG4gICAgdmFyIGluaXRfZm9jdXMgPSBmdW5jdGlvbiAoZm9jdXNfa2V5KSB7XHJcbiAgICAgICAgaWYgKGZvY3VzX2tleSA9PSAncmVnaXN0ZXInKSB7XHJcbiAgICAgICAgICAgICQoJyNlbWFpbCcpLmZvY3VzKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmb2N1c19rZXkgPT0gJ29yZGVyX3N0YXR1cycpIHtcclxuICAgICAgICAgICAgJCgnI29yZGVyX3NuJykuZm9jdXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjX2VtYWlsJykuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIGhlYWRlcl9pbml0X2ZvY3VzID0gZnVuY3Rpb24gKGZvY3VzX2tleSkge1xyXG4gICAgICAgIGlmIChmb2N1c19rZXkgPT0gJ3JlZ2lzdGVyJykge1xyXG4gICAgICAgICAgICAkKCcjaGVhZGVyX3JlZ2lzdGVyX2VtYWlsJykuZm9jdXMoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZvY3VzX2tleSA9PSAnb3JkZXJfc3RhdHVzJykge1xyXG4gICAgICAgICAgICAkKCcjb3JkZXJfc24nKS5mb2N1cygpO1xyXG4gICAgICAgIH0gZWxzZSBpZihmb2N1c19rZXkgPT0gJ2xvZ2luJykge1xyXG4gICAgICAgICAgICAkKCcjaGVhZGVyX2xvZ2luX2VtYWlsJykuZm9jdXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjaGVhZGVyX2xvZ2luX2VtYWlsJykuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy/ojrflj5bmj5DnpLrpgq7nrrFcclxuICAgIHZhciBpbml0X2VtYWlsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdXJsID0gd2ViRGF0YS5XRUJfUk9PVCArICdhamF4LnBocD9hY3Q9Z2V0X2VtYWlsX2RvbWFpbnMmbGFuZ3VhZ2U9JyArIHdlYkRhdGEubGFuZztcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlIDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICB1cmwgOiBfdXJsLFxyXG4gICAgICAgICAgICBzdWNjZXNzIDogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBldmFsKCdbJyArIGRhdGEgKyAnXScpWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlRGF0YS5lbWFpbExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRfbG9naW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJfaW5pdF9sb2dpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRfcmVnaXN0ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJfaW5pdF9yZWdpc3RlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2hlY2tfaXNfaHR0cHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldFByb3RvY29sID0gXCJodHRwczpcIjtcclxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnByb3RvY29sICE9IHRhcmdldFByb3RvY29sKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0UHJvdG9jb2wgK1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYuc3Vic3RyaW5nKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbC5sZW5ndGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdENhbGVuZGFyKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZChcclxuICAgICAgICAgICAge30sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQuZGF0ZXBpY2tlci5yZWdpb25hbFt3ZWJEYXRhLmxhbmddLFxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJ5eS1tbS1kZFwiLFxyXG4gICAgICAgICAgICAgICAgbWluRGF0ZTogJysxZCcsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VZZWFyOiBmYWxzZSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gLy8geW91ciBjdXN0b20gb3B0aW9uc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgJChzZWxlY3RvcikuZGF0ZXBpY2tlcihvcHRpb25zKTtcclxuICAgICQoc2VsZWN0b3IpLndyYXAoJzxkaXYgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IGhlaWdodDoxMDAlO1wiPjwvZGl2PicpXHJcbiAgICAgICAgLmFmdGVyKCc8c3BhbiBjbGFzcz1cInVpLWljb24tY2FsZW5kYXItcmVnaXN0ZXJcIj48L3NwYW4+Jyk7XHJcbiAgICAgICAgaW5pdENhbGVuZGFyQ2xpY2soc2VsZWN0b3IpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0Q2FsZW5kYXJDbGljayhzZWxlY3QpIHtcclxuICAgICAgICAkKCcudWktaWNvbi1jYWxlbmRhci1yZWdpc3RlcicpLmJpbmQoJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKDIwMjApXHJcbiAgICAgICAgICAgICQoc2VsZWN0KS5mb2N1cygpO1xyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYod2luZG93LmluaXRlZERhdGVwaWNrZXIpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHdpbmRvdy5pbml0ZWREYXRlcGlja2VyID0gdHJ1ZVxyXG4gICAgLy8gaW5pdENhbGVuZGFyKCcjZGF0ZXBpY2tlcl9oZWFkZXInKTtcclxuICAgIGluaXRDYWxlbmRhcignI2RhdGVwaWNrZXJfcGFnZScpO1xyXG4gICAgLy8gaW5pdENhbGVuZGFyKCcjZGF0ZXBpY2tlcl9wb3AnKTtcclxufSlcclxuXHJcbiAgICAvL+eZu+mZhlxyXG4gICAgdmFyIGluaXRfbG9naW4gPSBmdW5jdGlvbiAoaXNfY2FsbGJhY2spIHtcclxuICAgICAgICAvL+mCruS7tuaPkOekulxyXG4gICAgICAgICQoJyNfZW1haWwnKS5hdXRvY29tcGxldGVFbWFpbCgpO1xyXG5cclxuICAgICAgICAkKCcjZmJTaWduQnRuJykuYmluZCgnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIucHVzaCh7J2V2ZW50JyA6ICdwY0ZiTG9naW5CdG5Ub3RhbENsaWNrcyd9KTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcjZ21haWxTaWduQnRuLCAjc2hvd3Jvb21HbWFpbFNpZ25CdG4nKS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZ21haWxTaWduaW4oKTtcclxuICAgICAgICAgICAgY29va2llLnNldENvb2tpZSgnc2lnbkluR29vZ2xlJywgdHJ1ZSwgMzApO1xyXG4gICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goeydldmVudCcgOiAncGNnUGx1c0xvZ2luQnRuVG90YWxDbGlja3MnfSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9hamF4LnBocFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBhY3Q6IFwiaW5pdExvZ2luXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrOiBwYWdlRGF0YS5iYWNrXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyLmVycm9yID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBnb29nbGVfYXV0aF91cmwgPSByLmdvb2dsZVVybDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL+mqjOivgeihqOWNleWPiuaPkOS6pFxyXG4gICAgICAgIHZhciBlbGVtX2Zvcm0gPSAkKCcjZm9ybV9sb2dpbicpO1xyXG4gICAgICAgIHZhciBpdGVtcyA9IHtcclxuICAgICAgICAgICAgJ2xvZ2luW3Bhc3N3b3JkXSc6IFtcclxuICAgICAgICAgICAgICAgIHt0eXBlOiAnbnVsbCcsIGVyck1zZzogX2xhbmcucGFnZV9sb2dpbl9lbnRlcl9wYXNzd29yZH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGl0ZW1zRW1haWwgPSB7XHJcbiAgICAgICAgICAgICdsb2dpbltlbWFpbF0nOiBbXHJcbiAgICAgICAgICAgICAgICB7dHlwZTogJ251bGwnLCBlcnJNc2c6IF9sYW5nLnBhZ2VfbG9naW5fZW50ZXJfZW1haWx9LFxyXG4gICAgICAgICAgICAgICAge3R5cGU6ICdlbWFpbCcsIGVyck1zZzogX2xhbmcucGFnZV9sb2dpbl9jaGVja19lbWFpbF9mb3JtYXR9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBvcHQgPSB7XHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoci5lcnJvciA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mKGNhbGxiYWNrX2Z1bmMpID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tfZnVuYy5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCBzZXRUaW1lb3V0IHRvIGFzeW5jIHRoZSBhamF4LCBtYWtlIHRoZSBsb2NhdGlvbi5ocmVmIHJ1biBhZnRlciB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IHIuYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSByLmJhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX21zZyA9ICQoJyNfbXNnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX21zZy5odG1sKHIubXNnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbV9mb3JtLmZpbmQoJzppbnB1dCcpLmZvY3VzKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX21zZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnLmxvZ2luLXJlZ2lzdGVyICNfZW1haWwnKS5mb2N1cyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlbWFpbE9iaiA9ICQoJy5sb2dpbi1yZWdpc3RlciAjX2VtYWlsJyk7XHJcbiAgICAgICAgICAgIGVtYWlsT2JqLmNzcygnY29sb3InLCcjMzMzJyk7XHJcbiAgICAgICAgICAgIGVtYWlsT2JqLmNzcygnYm9yZGVyJywnJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGVsZW1fZm9ybS5zdWJtaXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlbGVtX2Zvcm0uZmluZCgnLmVycm9yLXRpcCcpLmh0bWwoJycpO1xyXG4gICAgICAgICAgICBlbGVtX2Zvcm0uZmluZCgnI19tc2cnKS5odG1sKCcnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZhciBodHRwc1JzID0gY2hlY2tfaXNfaHR0cHMoKTtcclxuICAgICAgICAgICAgaWYgKCFodHRwc1JzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGlzQ2hlY2tlZCA9ICQodGhpcykuZm9ybUNoZWNrKGl0ZW1zLCB7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IgOiBmdW5jdGlvbiAob2JqLCBlcnJNc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93RXJyb3Iob2JqLCBlcnJNc2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIGlzQ2hlY2tlZEVtYWlsID0gJCh0aGlzKS5mb3JtQ2hlY2soaXRlbXNFbWFpbCwge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yIDogZnVuY3Rpb24gKG9iaiwgZXJyTXNnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yKG9iaiwgZXJyTXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNDaGVja2VkICYmIGlzQ2hlY2tlZEVtYWlsKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtX2Zvcm0uYWpheFN1Ym1pdChvcHQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoIWlzQ2hlY2tlZEVtYWlsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW1haWxPYmogPSAkKCcubG9naW4tcmVnaXN0ZXIgLmlucHV0Y29sICNfZW1haWwnKTtcclxuICAgICAgICAgICAgICAgIGVtYWlsT2JqLmNzcygnY29sb3InLCcjZmI1MDU4Jyk7XHJcbiAgICAgICAgICAgICAgICBlbWFpbE9iai52YWwoKSAhPT0gJycgJiYgZW1haWxPYmouY3NzKCdib3JkZXInLCcxcHggc29saWQgI2ZiNTA1OCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9mYWNrYm9va+eZu+mZhlxyXG4gICAgICAgIGlmKHdlYkRhdGEuZmJfYXBwID09ICcnICYmIHdlYkRhdGEuZ21haWxfYXBwID09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmZiQXN5bmNJbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIEZCLmluaXQoe1xyXG4gICAgICAgICAgICAgICAgYXBwSWQgOiB3ZWJEYXRhLmZiX2FwcCxcclxuICAgICAgICAgICAgICAgIHN0YXR1cyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29va2llIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHhmYm1sIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9hdXRoIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHZlcnNpb24gOiAndjIuMydcclxuICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgRkIuRXZlbnQuc3Vic2NyaWJlKCdhdXRoLnN0YXR1c0NoYW5nZScsIGdldF9mYWNlYm9va19sb2dpbik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZih0eXBlb2YoRkIpID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJlcXVpcmUoJy4uL21vZC9sb2FkZXInKS5sb2FkU29jaWFsSlMoJ2ZhY2Vib29rJyk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cuZmJBc3luY0luaXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vZ2VuZXJhbCBsb2dpblxyXG52YXIgaGVhZGVyX2luaXRfbG9naW4gPSBmdW5jdGlvbiAoaXNfY2FsbGJhY2spIHtcclxuXHJcbiAgICAvL+mCruS7tuaPkOekulxyXG4gICAgJCgnI2hlYWRlcl9sb2dpbl9lbWFpbCcpLmF1dG9jb21wbGV0ZUVtYWlsKCk7XHJcblxyXG4gICAgJCgnI2hlYWRlcl9sb2dpbl9mYlNpZ25CdG4nKS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goeydldmVudCcgOiAncGNGYkxvZ2luQnRuVG90YWxDbGlja3MnfSk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoJyNoZWFkZXJfbG9naW5fZ21haWxTaWduQnRuLCAjaGVhZGVyX2xvZ2luX3Nob3dyb29tR21haWxTaWduQnRuJykuYmluZCgnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZ21haWxTaWduaW4oKTtcclxuICAgICAgICBjb29raWUuc2V0Q29va2llKCdzaWduSW5Hb29nbGUnLCB0cnVlLCAzMCk7XHJcbiAgICAgICAgd2luZG93LmRhdGFMYXllci5wdXNoKHsnZXZlbnQnIDogJ3BjZ1BsdXNMb2dpbkJ0blRvdGFsQ2xpY2tzJ30pO1xyXG4gICAgfSlcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hamF4LnBocFwiLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBhY3Q6IFwiaW5pdExvZ2luXCIsXHJcbiAgICAgICAgICAgIGJhY2s6IHBhZ2VEYXRhLmJhY2tcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHIpIHtcclxuICAgICAgICAgICAgaWYgKHIuZXJyb3IgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZ29vZ2xlX2F1dGhfdXJsID0gci5nb29nbGVVcmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL+mqjOivgeihqOWNleWPiuaPkOS6pFxyXG4gICAgdmFyIGVsZW1fZm9ybSA9ICQoJyNoZWFkZXJfZm9ybV9sb2dpbicpO1xyXG4gICAgdmFyIGl0ZW1zID0ge1xyXG4gICAgICAgICdsb2dpbltwYXNzd29yZF0nOiBbXHJcbiAgICAgICAgICAgIHt0eXBlOiAnbnVsbCcsIGVyck1zZzogX2xhbmcucGFnZV9sb2dpbl9lbnRlcl9wYXNzd29yZH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG4gICAgdmFyIGl0ZW1zRW1haWwgPSB7XHJcbiAgICAgICAgJ2xvZ2luW2VtYWlsXSc6IFtcclxuICAgICAgICAgICAge3R5cGU6ICdudWxsJywgZXJyTXNnOiBfbGFuZy5wYWdlX2xvZ2luX2VudGVyX2VtYWlsfSxcclxuICAgICAgICAgICAge3R5cGU6ICdlbWFpbCcsIGVyck1zZzogX2xhbmcucGFnZV9sb2dpbl9jaGVja19lbWFpbF9mb3JtYXR9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuICAgIHZhciBvcHQgPSB7XHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICBpZiAoci5lcnJvciA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YoY2FsbGJhY2tfZnVuYykgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrX2Z1bmMuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBzZXRUaW1lb3V0IHRvIGFzeW5jIHRoZSBhamF4LCBtYWtlIHRoZSBsb2NhdGlvbi5ocmVmIHJ1biBhZnRlciB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IHIuYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IHIuYmFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBfbXNnID0gJCgnI2hlYWRlcl9sb2dpbl9tc2cnKTtcclxuICAgICAgICAgICAgICAgIF9tc2cuaHRtbChyLm1zZykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgZWxlbV9mb3JtLmZpbmQoJzppbnB1dCcpLmZvY3VzKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBfbXNnLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQoJyNoZWFkZXJfbG9naW5fZW1haWwnKS5mb2N1cyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVtYWlsT2JqID0gJCgnI2hlYWRlcl9sb2dpbl9lbWFpbCcpO1xyXG4gICAgICAgIGVtYWlsT2JqLmNzcygnY29sb3InLCcjMzMzJyk7XHJcbiAgICAgICAgZW1haWxPYmouY3NzKCdib3JkZXInLCcnKTtcclxuICAgIH0pO1xyXG4gICAgZWxlbV9mb3JtLnN1Ym1pdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZWxlbV9mb3JtLmZpbmQoJy5lcnJvci10aXAnKS5odG1sKCcnKTtcclxuICAgICAgICBlbGVtX2Zvcm0uZmluZCgnI2hlYWRlcl9sb2dpbl9tc2cnKS5odG1sKCcnKS5oaWRlKCk7XHJcbiAgICAgICAgdmFyIGh0dHBzUnMgPSBjaGVja19pc19odHRwcygpO1xyXG4gICAgICAgIGlmICghaHR0cHNScykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpc0NoZWNrZWQgPSAkKHRoaXMpLmZvcm1DaGVjayhpdGVtcywge1xyXG4gICAgICAgICAgICBzaG93RXJyb3IgOiBmdW5jdGlvbiAob2JqLCBlcnJNc2cpIHtcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvcihvYmosIGVyck1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgaXNDaGVja2VkRW1haWwgPSAkKHRoaXMpLmZvcm1DaGVjayhpdGVtc0VtYWlsLCB7XHJcbiAgICAgICAgICAgIHNob3dFcnJvciA6IGZ1bmN0aW9uIChvYmosIGVyck1zZykge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKG9iaiwgZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaXNDaGVja2VkICYmIGlzQ2hlY2tlZEVtYWlsKSB7XHJcbiAgICAgICAgICAgIGVsZW1fZm9ybS5hamF4U3VibWl0KG9wdCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKCFpc0NoZWNrZWRFbWFpbCkge1xyXG4gICAgICAgICAgICB2YXIgZW1haWxPYmogPSAkKCcubG9naW4tcmVnaXN0ZXIgLmlucHV0Y29sICNoZWFkZXJfbG9naW5fZW1haWwnKTtcclxuICAgICAgICAgICAgZW1haWxPYmouY3NzKCdjb2xvcicsJyNmYjUwNTgnKTtcclxuICAgICAgICAgICAgZW1haWxPYmoudmFsKCkgIT09ICcnICYmIGVtYWlsT2JqLmNzcygnYm9yZGVyJywnMXB4IHNvbGlkICNmYjUwNTgnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9mYWNrYm9va+eZu+mZhlxyXG4gICAgaWYod2ViRGF0YS5mYl9hcHAgPT0gJycgJiYgd2ViRGF0YS5nbWFpbF9hcHAgPT0gJycpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuZmJBc3luY0luaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBGQi5pbml0KHtcclxuICAgICAgICAgICAgYXBwSWQgOiB3ZWJEYXRhLmZiX2FwcCxcclxuICAgICAgICAgICAgc3RhdHVzIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvb2tpZSA6IHRydWUsXHJcbiAgICAgICAgICAgIHhmYm1sIDogdHJ1ZSxcclxuICAgICAgICAgICAgb2F1dGggOiB0cnVlLFxyXG4gICAgICAgICAgICB2ZXJzaW9uIDogJ3YyLjMnXHJcbiAgICAgICAgfSk7XHJcbiAgICAvL0ZCLkV2ZW50LnN1YnNjcmliZSgnYXV0aC5zdGF0dXNDaGFuZ2UnLCBnZXRfZmFjZWJvb2tfbG9naW4pO1xyXG4gICAgfTtcclxuICAgIGlmKHR5cGVvZihGQikgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXF1aXJlKCcuLi9tb2QvbG9hZGVyJykubG9hZFNvY2lhbEpTKCdmYWNlYm9vaycpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5mYkFzeW5jSW5pdCgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuICAgIGZ1bmN0aW9uIGdtYWlsU2lnbmluKCkge1xyXG4gICAgICAgIG9wZW5JblBvcHVwKGdvb2dsZV9hdXRoX3VybCwgJ2dvb2dsZV9hdXRoJywgNjAwLCA1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmYWNlYm9va19sb2dpbl9lbWFpbF9yZWdpc3RlcmVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbWFpbCA9ICQoJyNfZW1haWwnKS52YWwoKTtcclxuICAgICAgICB2YXIgcGFzc3dvcmQgPSAkKCcjX3Bhc3N3b3JkJykudmFsKCk7XHJcbiAgICAgICAgaWYgKCFlbWFpbCkge1xyXG4gICAgICAgICAgICBhbGVydChfbGFuZy5wYWdlX2xvZ2luX2VudGVyX2VtYWlsKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFwYXNzd29yZCkge1xyXG4gICAgICAgICAgICBhbGVydChfbGFuZy5wYWdlX2xvZ2luX2VudGVyX3Bhc3N3b3JkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbG9naW4gPSB7XHJcbiAgICAgICAgICAgICAgICAnZW1haWwnOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgICdwYXNzd29yZCc6IHBhc3N3b3JkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiB3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwJyxcclxuICAgICAgICAgICAgICAgICdkYXRhJzogJ2FjdD1sb2dpbiZsb2dpbltlbWFpbF09JyArIGxvZ2luLmVtYWlsICsgJyZsb2dpbltwYXNzd29yZF09JyArIGxvZ2luLnBhc3N3b3JkICsgJyZmcm9tPWZhY2Vib29rJyArICcmYmFjaz0nICsgYmFja191cmwsXHJcbiAgICAgICAgICAgICAgICAnZGF0YVR5cGUnOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uKHIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoci5lcnJvciA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGNoYW5nZVdyaXRlUmV2aWV3VXJsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoci5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXZlcnRXcml0ZVJldmlld1VybCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5rOo5YaMXHJcbiAgICB2YXIgaW5pdF9yZWdpc3RlciA9IGZ1bmN0aW9uIChpc19jYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBlbGVtX2Zvcm0gPSAkKCcjZm9ybV9yZWcnKTtcclxuICAgICAgICB2YXIgaXB0X2VtYWlsID0gJCgnI2VtYWlsJyk7XHJcbiAgICAgICAgdmFyIGJ0bkNvbnRpbnVlID0gJCgnI2NvbnRpbnVlLWJ0bicpO1xyXG5cclxuICAgICAgICAvL+e7keWummNvbnRpbnVl5pi+56S65rOo5YaM56qX5Y+jXHJcbiAgICAgICAgYnRuQ29udGludWUuYmluZCgnY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZWxlbV9mb3JtLnNob3coKTtcclxuICAgICAgICAgICAgYnRuQ29udGludWUuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL+mCruS7tuaPkOekulxyXG4gICAgICAgIGlwdF9lbWFpbC5hdXRvY29tcGxldGVFbWFpbCgpO1xyXG5cclxuICAgICAgICAvL+mqjOivgemCrueuseaYr+WQpuiiq+WNoOeUqFxyXG4gICAgICAgIHZhciBlbWFpbF93YWl0ID0gICQoJyNyZWdFbWFpbFZhbFdhaXQnKTtcclxuICAgICAgICB2YXIgY2hlY2tFbWFpbEV4aXN0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZWxlbV9mb3JtLmZvcm1DaGVjayh7XHJcbiAgICAgICAgICAgICAgICAncmVnW2VtYWlsXSc6IFtcclxuICAgICAgICAgICAgICAgICAgICB7dHlwZTogJ251bGwnLCBzaG93RXJyb3I6IGZ1bmN0aW9uICgpIHt9LCBub0ZvY3VzOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dHlwZTogJ2VtYWlsJywgc2hvd0Vycm9yOiBmdW5jdGlvbiAoKSB7fSwgbm9Gb2N1czogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3R5cGU6ICdhdmFpbEVtYWlsJywgbm9Gb2N1czogdHJ1ZX1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBhdmFpbEVtYWlsOiBmdW5jdGlvbiAob2JqLCBjaGVja3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogd2ViRGF0YS5XRUJfUk9PVCArICdhamF4LnBocD9hY3Q9cmVnaXN0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeydlbWFpbCc6ICQob2JqKS52YWwoKSwgJ2NoZWNrRW1haWwnOiAxfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1haWxfd2FpdC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVtYWlsX3dhaXQuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuZXJyb3IgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckVycm9yKG9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yKG9iaiwgci5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGlwdF9lbWFpbC5jaGFuZ2UoY2hlY2tFbWFpbEV4aXN0cyk7XHJcbiAgICAgICAgaXB0X2VtYWlsLmJsdXIoY2hlY2tFbWFpbEV4aXN0cyk7XHJcbiAgICAgICAgaXB0X2VtYWlsLmZvY3VzKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaXB0X2VtYWlsLmNzcygnY29sb3InLCcjMzMzJyk7XHJcbiAgICAgICAgICAgIGlwdF9lbWFpbC5jc3MoJ2JvcmRlcicsJycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v6aqM6K+B6KGo5Y2V5Y+K5o+Q5LqkXHJcbiAgICAgICAgdmFyIGl0ZW1zeCA9IHtcclxuICAgICAgICAgICAgJ3JlZ1twYXNzd29yZF0nOiBbXHJcbiAgICAgICAgICAgICAgICB7dHlwZTogJ251bGwnLCBlcnJNc2c6IF9sYW5nLnBhZ2VfbG9naW5fZW50ZXJfcGFzc3dvcmR9LFxyXG4gICAgICAgICAgICAgICAge3R5cGU6ICdtaW5sZW5ndGgnLCBtaW5sZW5ndGg6IDUsIGVyck1zZzogX2xhbmcucGFnZV9yZWdpc3Rlcl9wd2RfbWluaW11bV81fVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAncmVnW3Bhc3N3b3JkX2FnYWluXSc6IFtcclxuICAgICAgICAgICAgICAgIHt0eXBlOiAnbnVsbCcsIGVyck1zZzogX2xhbmcucGFnZV9sb2dpbl9yZWVudGVyX3Bhc3N3b3JkfSxcclxuICAgICAgICAgICAgICAgIHt0eXBlOiAnbWF0Y2hQYXNzd29yZCcsIGVyck1zZzogX2xhbmcucGFnZV9yZWdpc3Rlcl9wd2Rfbm90X21hdGNofVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAndGVybXMnOiBbXHJcbiAgICAgICAgICAgICAgICB7dHlwZTogJ2NoZWNrZWQnLCB2YWx1ZTogLTEsIGVyck1zZzogX2xhbmcucGFnZV9yZWdpc3Rlcl9wbGVhc2VfYWdyZWV9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v6aqM6K+B6KGo5Y2V5Y+K5o+Q5LqkXHJcbiAgICAgICAgdmFyIGl0ZW1zRW1haWwgPSB7XHJcbiAgICAgICAgICAgICdyZWdbZW1haWxdJzogW1xyXG4gICAgICAgICAgICAgICAge3R5cGU6ICdudWxsJywgZXJyTXNnOiBfbGFuZy5wYWdlX2xvZ2luX2VudGVyX2VtYWlsfSxcclxuICAgICAgICAgICAgICAgIHt0eXBlOiAnZW1haWwnLCBlcnJNc2c6IF9sYW5nLnBhZ2VfbG9naW5fY2hlY2tfZW1haWxfZm9ybWF0fVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIG9wdHggPSB7XHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoci5lcnJvciA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzZV9jb3Vwb25fcmVnaXN0ZXIgPSB3ZWJEYXRhLnVzZV9jb3Vwb25fcmVnaXN0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodXNlX2NvdXBvbl9yZWdpc3Rlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNsb2dpbkRpYWxvZycpLmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvdXBvblJlZ2lzdGVyRGlhbG9nLmluaXQoci5kYXRhLmNvdXBvbkNvZGUsci5iYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YoY2FsbGJhY2tfZnVuYykgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja19mdW5jLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHNldFRpbWVvdXQgdG8gYXN5bmMgdGhlIGFqYXgsIG1ha2UgdGhlIGxvY2F0aW9uLmhyZWYgcnVuIGFmdGVyIHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSByLmJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSByLmJhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX21zZyA9ICQoJyNfbXNneCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9tc2cuaHRtbChyLm1zZykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1fZm9ybS5maW5kKCc6aW5wdXQnKS5mb2N1cyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9tc2cuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtX2Zvcm0uc3VibWl0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZWxlbV9mb3JtLmZpbmQoJy5lcnJvci10aXAnKS5odG1sKCcnKTtcclxuICAgICAgICAgICAgZWxlbV9mb3JtLmZpbmQoJyNfbXNneCcpLmh0bWwoJycpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpc0NoZWNrZWQgPSAkKHRoaXMpLmZvcm1DaGVjayhpdGVtc3gsIHtcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvciA6IGZ1bmN0aW9uIChvYmosIGVyck1zZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dFcnJvcihvYmosIGVyck1zZyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaFBhc3N3b3JkOiBmdW5jdGlvbiAob2JqLCBjaGVja3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQob2JqKS52YWwoKSA9PSBlbGVtX2Zvcm0uZmluZCgnI3Bhc3N3b3JkJykudmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIGlzQ2hlY2tlZEVtYWlsID0gJCh0aGlzKS5mb3JtQ2hlY2soaXRlbXNFbWFpbCwge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yIDogZnVuY3Rpb24gKG9iaiwgZXJyTXNnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yKG9iaiwgZXJyTXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChpc0NoZWNrZWQgJiYgaXNDaGVja2VkRW1haWwpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1fZm9ybS5hamF4U3VibWl0KG9wdHgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoIWlzQ2hlY2tlZEVtYWlsKXtcclxuICAgICAgICAgICAgICAgIHZhciBlbWFpbE9iaiA9ICQoJy5sb2dpbi1yZWdpc3RlciAuaW5wdXRjb2wgI2VtYWlsJyk7XHJcbiAgICAgICAgICAgICAgICBlbWFpbE9iai5jc3MoJ2NvbG9yJywnI2ZiNTA1OCcpO1xyXG4gICAgICAgICAgICAgICAgZW1haWxPYmoudmFsKCkgIT09ICcnICYmIGVtYWlsT2JqLmNzcygnYm9yZGVyJywnMXB4IHNvbGlkICNmYjUwNTgnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vZ2VuZXJhbCByZWdpc3RlclxyXG4gICAgdmFyIGhlYWRlcl9pbml0X3JlZ2lzdGVyID0gZnVuY3Rpb24gKGlzX2NhbGxiYWNrKSB7XHJcbiAgICB2YXIgZWxlbV9mb3JtID0gJCgnI2hlYWRlcl9mb3JtX3JlZycpO1xyXG4gICAgdmFyIGlwdF9lbWFpbCA9ICQoJyNoZWFkZXJfcmVnaXN0ZXJfZW1haWwnKTtcclxuICAgIC8vIHZhciBidG5Db250aW51ZSA9ICQoJyNoZWFkZXJfY29udGludWUtYnRuJyk7XHJcblxyXG4gICAgLy/nu5Hlrppjb250aW51ZeaYvuekuuazqOWGjOeql+WPo1xyXG4gICAgLy8gYnRuQ29udGludWUuYmluZCgnY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICBlbGVtX2Zvcm0uc2hvdygpO1xyXG4gICAgLy8gICAgIGJ0bkNvbnRpbnVlLmhpZGUoKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8v6YKu5Lu25o+Q56S6XHJcbiAgICBpcHRfZW1haWwuYXV0b2NvbXBsZXRlRW1haWwoKTtcclxuXHJcbiAgICAvL+mqjOivgemCrueuseaYr+WQpuiiq+WNoOeUqFxyXG4gICAgdmFyIGVtYWlsX3dhaXQgPSAgJCgnI2hlYWRlcl9yZWdFbWFpbFZhbFdhaXQnKTtcclxuICAgIHZhciBjaGVja0VtYWlsRXhpc3RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGVsZW1fZm9ybS5mb3JtQ2hlY2soe1xyXG4gICAgICAgICAgICAncmVnW2VtYWlsXSc6IFtcclxuICAgICAgICAgICAgICAgIHt0eXBlOiAnbnVsbCcsIHNob3dFcnJvcjogZnVuY3Rpb24gKCkge30sIG5vRm9jdXM6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAge3R5cGU6ICdlbWFpbCcsIHNob3dFcnJvcjogZnVuY3Rpb24gKCkge30sIG5vRm9jdXM6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAge3R5cGU6ICdhdmFpbEVtYWlsJywgbm9Gb2N1czogdHJ1ZX1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgICAgIGF2YWlsRW1haWw6IGZ1bmN0aW9uIChvYmosIGNoZWNrcykge1xyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwP2FjdD1yZWdpc3RlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsnZW1haWwnOiAkKG9iaikudmFsKCksICdjaGVja0VtYWlsJzogMX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZW1haWxfd2FpdC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZW1haWxfd2FpdC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5lcnJvciA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJFcnJvcihvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93RXJyb3Iob2JqLCByLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8vIGlwdF9lbWFpbC5jaGFuZ2UoY2hlY2tFbWFpbEV4aXN0cyk7XHJcbiAgICBpcHRfZW1haWwuYmx1cihjaGVja0VtYWlsRXhpc3RzKTtcclxuICAgIGlwdF9lbWFpbC5mb2N1cyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaXB0X2VtYWlsLmNzcygnY29sb3InLCcjMzMzJyk7XHJcbiAgICAgICAgaXB0X2VtYWlsLmNzcygnYm9yZGVyJywnJyk7XHJcbiAgICB9KTtcclxuICAgIC8v6aqM6K+B6KGo5Y2V5Y+K5o+Q5LqkXHJcbiAgICB2YXIgaXRlbXN4ID0ge1xyXG4gICAgICAgICdyZWdbcGFzc3dvcmRdJzogW1xyXG4gICAgICAgICAgICB7dHlwZTogJ251bGwnLCBlcnJNc2c6IF9sYW5nLnBhZ2VfbG9naW5fZW50ZXJfcGFzc3dvcmR9LFxyXG4gICAgICAgICAgICB7dHlwZTogJ21pbmxlbmd0aCcsIG1pbmxlbmd0aDogNSwgZXJyTXNnOiBfbGFuZy5wYWdlX3JlZ2lzdGVyX3B3ZF9taW5pbXVtXzV9XHJcbiAgICAgICAgXSxcclxuICAgICAgICAncmVnW3Bhc3N3b3JkX2FnYWluXSc6IFtcclxuICAgICAgICAgICAge3R5cGU6ICdudWxsJywgZXJyTXNnOiBfbGFuZy5wYWdlX2xvZ2luX3JlZW50ZXJfcGFzc3dvcmR9LFxyXG4gICAgICAgICAgICB7dHlwZTogJ21hdGNoUGFzc3dvcmQnLCBlcnJNc2c6IF9sYW5nLnBhZ2VfcmVnaXN0ZXJfcHdkX25vdF9tYXRjaH1cclxuICAgICAgICBdLFxyXG4gICAgICAgICd0ZXJtcyc6IFtcclxuICAgICAgICAgICAge3R5cGU6ICdjaGVja2VkJywgdmFsdWU6IC0xLCBlcnJNc2c6IF9sYW5nLnBhZ2VfcmVnaXN0ZXJfcGxlYXNlX2FncmVlfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcbiAgICB2YXIgaXRlbXNFbWFpbCA9IHtcclxuICAgICAgICAncmVnW2VtYWlsXSc6IFtcclxuICAgICAgICAgICAge3R5cGU6ICdudWxsJywgZXJyTXNnOiBfbGFuZy5wYWdlX2xvZ2luX2VudGVyX2VtYWlsfSxcclxuICAgICAgICAgICAge3R5cGU6ICdlbWFpbCcsIGVyck1zZzogX2xhbmcucGFnZV9sb2dpbl9jaGVja19lbWFpbF9mb3JtYXR9XHJcbiAgICAgICAgXSxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9wdHggPSB7XHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICBpZiAoci5lcnJvciA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXNlX2NvdXBvbl9yZWdpc3RlciA9IHdlYkRhdGEudXNlX2NvdXBvbl9yZWdpc3RlcjtcclxuICAgICAgICAgICAgICAgIGlmKHVzZV9jb3Vwb25fcmVnaXN0ZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNoZWFkZXJfbG9naW5EaWFsb2cnKS5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvdXBvblJlZ2lzdGVyRGlhbG9nLmluaXQoci5kYXRhLmNvdXBvbkNvZGUsci5iYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YoY2FsbGJhY2tfZnVuYykgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrX2Z1bmMuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBzZXRUaW1lb3V0IHRvIGFzeW5jIHRoZSBhamF4LCBtYWtlIHRoZSBsb2NhdGlvbi5ocmVmIHJ1biBhZnRlciB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IHIuYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IHIuYmFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBfbXNnID0gJCgnI2hlYWRlcl9yZWdpc3Rlcl9tc2d4Jyk7XHJcbiAgICAgICAgICAgICAgICBfbXNnLmh0bWwoci5tc2cpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIGVsZW1fZm9ybS5maW5kKCc6aW5wdXQnKS5mb2N1cyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX21zZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsZW1fZm9ybS5zdWJtaXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGVsZW1fZm9ybS5maW5kKCcuZXJyb3ItdGlwJykuaHRtbCgnJyk7XHJcbiAgICAgICAgZWxlbV9mb3JtLmZpbmQoJyNoZWFkZXJfbG9naW5fbXNnJykuaHRtbCgnJykuaGlkZSgpO1xyXG5cclxuICAgICAgICB2YXIgaXNDaGVja2VkID0gJCh0aGlzKS5mb3JtQ2hlY2soaXRlbXN4LCB7XHJcbiAgICAgICAgICAgIHNob3dFcnJvciA6IGZ1bmN0aW9uIChvYmosIGVyck1zZykge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKG9iaiwgZXJyTXNnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgICAgIG1hdGNoUGFzc3dvcmQ6IGZ1bmN0aW9uIChvYmosIGNoZWNrcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKG9iaikudmFsKCkgPT0gZWxlbV9mb3JtLmZpbmQoJyNoZWFkZXJfcmVnaXN0ZXJfcGFzc3dvcmQnKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBpc0NoZWNrZWRFbWFpbCA9ICQodGhpcykuZm9ybUNoZWNrKGl0ZW1zRW1haWwsIHtcclxuICAgICAgICAgICAgc2hvd0Vycm9yIDogZnVuY3Rpb24gKG9iaiwgZXJyTXNnKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3Iob2JqLCBlcnJNc2cpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpc0NoZWNrZWQgJiYgaXNDaGVja2VkRW1haWwpIHtcclxuICAgICAgICAgICAgZWxlbV9mb3JtLmFqYXhTdWJtaXQob3B0eCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKCFpc0NoZWNrZWRFbWFpbCkge1xyXG4gICAgICAgICAgICBpcHRfZW1haWwuY3NzKCdjb2xvcicsJyNmYjUwNTgnKTtcclxuICAgICAgICAgICAgaXB0X2VtYWlsLnZhbCgpICE9PSAnJyAmJiBpcHRfZW1haWwuY3NzKCdib3JkZXInLCcxcHggc29saWQgI2ZiNTA1OCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbn07XHJcbiAgICAvLyDljL/lkI3kuIvljZVcclxuICAgIHZhciBpbml0X2xvZ2luX2d1ZXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbGVtX2Zvcm0gPSAkKCcjZm9ybV9sb2dpbl9ndWVzdCcpO1xyXG5cclxuICAgICAgICAvL+mqjOivgeihqOWNleWPiuaPkOS6pFxyXG4gICAgICAgIHZhciBpdGVtc3ggPSB7XHJcbiAgICAgICAgICAgICdndWVzdFtlbWFpbF0nOiBbXHJcbiAgICAgICAgICAgICAgICB7dHlwZTogJ251bGwnLCBlcnJNc2c6IF9sYW5nLnBhZ2VfbG9naW5fZW50ZXJfZW1haWx9LFxyXG4gICAgICAgICAgICAgICAge3R5cGU6ICdlbWFpbCcsIGVyck1zZzogX2xhbmcucGFnZV9sb2dpbl9jaGVja19lbWFpbF9mb3JtYXR9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgb3B0eCA9IHtcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyLmVycm9yID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YoY2FsbGJhY2tfZnVuYykgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja19mdW5jLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHNldFRpbWVvdXQgdG8gYXN5bmMgdGhlIGFqYXgsIG1ha2UgdGhlIGxvY2F0aW9uLmhyZWYgcnVuIGFmdGVyIHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSByLmJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSByLmJhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX21zZyA9ICQoJyNfbXNneCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9tc2cuaHRtbChyLm1zZykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1fZm9ybS5maW5kKCc6aW5wdXQnKS5mb2N1cyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9tc2cuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1fZm9ybS5zdWJtaXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlbGVtX2Zvcm0uZmluZCgnLmVycm9yLXRpcCcpLmh0bWwoJycpO1xyXG4gICAgICAgICAgICBlbGVtX2Zvcm0uZmluZCgnI19tc2d4JykuaHRtbCgnJykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGlzQ2hlY2tlZCA9ICQodGhpcykuZm9ybUNoZWNrKGl0ZW1zeCwge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yIDogZnVuY3Rpb24gKG9iaiwgZXJyTXNnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yKG9iaiwgZXJyTXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChpc0NoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1fZm9ybS5hamF4U3VibWl0KG9wdHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGZhY2Vib29rX2xvZ2luKGVtYWlsLGJhY2tfdXJsKSB7XHJcbiAgICAgICAgJC5wb3N0KHdlYkRhdGEuV0VCX1JPT1QgKyAnYWpheC5waHAnLCB7XHJcbiAgICAgICAgICAgICdhY3QnOiAncmVnaXN0ZXInLFxyXG4gICAgICAgICAgICAnZnJvbSc6ICdmYWNlYm9vaycsXHJcbiAgICAgICAgICAgICdiYWNrJzogYmFja191cmwsXHJcbiAgICAgICAgICAgICdlbWFpbCc6IGVtYWlsXHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgaWYgKHIuZXJyb3IgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mKGNhbGxiYWNrX2Z1bmMpID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tfZnVuYy5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCBzZXRUaW1lb3V0IHRvIGFzeW5jIHRoZSBhamF4LCBtYWtlIHRoZSBsb2NhdGlvbi5ocmVmIHJ1biBhZnRlciB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gci5iYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gci5iYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goeydldmVudCcgOiAncGNOb3RCaW5kRmJMb2dpblN1Y2NlZWQnfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgZmFpbFxyXG4gICAgICAgICAgICAgICAgd2luZG93LmRhdGFMYXllci5wdXNoKHsnZXZlbnQnIDogJ3BjTm90QmluZEZiTG9naW5GYWlsZWQnfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAnanNvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldF9mYWNlYm9va19sb2dpbigpIHtcclxuICAgICAgICB2YXIgRGlhbG9nID0gcmVxdWlyZSgnLi4vbW9kL2RpYWxvZycpO1xyXG4gICAgICAgIC8vZm9yIGZhY2Vib29rIGxvZ2luIGRpYWxvZyBub3QgY2VudGVyIG9uIGZmXHJcbiAgICAgICAgd2luZG93Lm9wZW4gPSBvcGVuSW5Qb3B1cDtcclxuICAgICAgICBGQi5sb2dpbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwiY29ubmVjdGVkXCIgJiYgcmVzcG9uc2UuYXV0aFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2xvZ2luRGlhbG9nXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuID0gd2luZG93Lm9yaWdpbk9wZW47XHJcbiAgICAgICAgICAgICAgICB2YXIgZmJXYWl0ZURpYWxvZyA9ICc8ZGl2IGlkPVwiZmJXYWl0ZURpYWxvZ1wiID4nXHJcbiAgICAgICAgICAgICAgICAgICAgKyAnPGgxIGNsYXNzPVwic2lnbi13aXRoLWZhY2Vib29rXCI+JyArIF9sYW5nLnBhZ2VfbG9naW5fbG9naW5fd2l0aF9mYWNlYm9vayArICc8L2gxPidcclxuICAgICAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwicGxlYXNlLXdhaXRlXCI+JyArIF9sYW5nLnBhZ2VfbG9naW5feW91X2hhdmVfbG9nZ2VkX29uX2ZhY2Vib29rICsgJzwvZGl2PidcclxuICAgICAgICAgICAgICAgICAgICArICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgRGlhbG9nLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICdtb2RJZCc6J2ZiV2FpdGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2h0bWwnOmZiV2FpdGVEaWFsb2csXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhbkNsb3NlJzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJhY2sgPSBjaGFuZ2VXcml0ZVJldmlld1VybCgpXHJcbiAgICAgICAgICAgICAgICAkLnBvc3Qod2ViRGF0YS5XRUJfUk9PVCArICdhamF4LnBocCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAnYWN0JzogJ3JlZ2lzdGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnZnJvbSc6ICdmYWNlYm9vaycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2snOiBiYWNrXHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcjbG9naW5EaWFsb2cnKS5jc3MoXCJkaXNwbGF5XCIpID09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXZlcnRXcml0ZVJldmlld1VybCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoci5lcnJvciA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldmVydFdyaXRlUmV2aWV3VXJsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mKGNhbGxiYWNrX2Z1bmMpID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja19mdW5jLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgc2V0VGltZW91dCB0byBhc3luYyB0aGUgYWpheCwgbWFrZSB0aGUgbG9jYXRpb24uaHJlZiBydW4gYWZ0ZXIgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSByLmJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gci5iYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoci5lcnJvciA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZmJXYWl0aW5nXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNsb2dpbkRpYWxvZ1wiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmYkVtYWlsRGlhbG9nID0gJzxmb3JtIGlkPVwiZmJFbWFpbERpYWxvZ1wiID4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwibWFpbkNvbnRlbnRcIj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICc8cCBjbGFzcz1cImNvbmdyYXR1bGF0ZVwiPicgKyBfbGFuZy5wYWdlX3Nuc19qanNob3VzZV9jb25ncmF0dWxhdGlvbnMgKyAnPC9wPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJzxwIGNsYXNzPVwicHJvdmlkZVwiPicgKyBfbGFuZy5wYWdlX3Nuc19qanNob3VzZV9wcm92aWRlX2VtYWlsICsgJzwvcD4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICc8cCBjbGFzcz1cImVtYWlsXCI+JyArIF9sYW5nLnBhZ2Vfc25zX2pqc2hvdXNlX2VtYWlsX2FkZHJlc3MgKyAnPC9wPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJzxpbnB1dCBpZD1cImZhY2Vib29rRW1haWxcIiBuYW1lPVwiZmJFbWFpbFwiIHR5cGU9XCJ0ZXh0XCIvPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJzxwIGNsYXNzPVwibm90ZVwiPicgKyBfbGFuZy5wYWdlX3Nuc19qanNob3VzZV9lbWFpbF9ub3RlICsgJzwvcD4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICc8L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnPGRpdiBpZD1cInN1Ym1pdFwiPicgKyBfbGFuZy5wYWdlX3NidW1pdCArICc8L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICc8ZGl2IGlkPVwiY2FuY2VsXCI+JyArIF9sYW5nLnBhZ2VfY29tbW9uX2NhbmNlbCArICc8L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICc8L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICc8L2Zvcm0+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGlhbG9nLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21vZElkJzonZmJEaWFsb2cnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2h0bWwnOmZiRW1haWxEaWFsb2dcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbWFpbERpYWxvZyA9ICQoJyNmYkVtYWlsRGlhbG9nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmYWNlYm9va0VtYWlsID0gZW1haWxEaWFsb2cuZmluZCgnI2ZhY2Vib29rRW1haWwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJ0blN1bW1pdCA9IGVtYWlsRGlhbG9nLmZpbmQoJyNzdWJtaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJ0bkNhbmNlbCA9IGVtYWlsRGlhbG9nLmZpbmQoJyNjYW5jZWwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZibXNnID0gJCgnI2ZibXNnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY2Vib29rRW1haWwuYmluZCgna2V5ZG93bicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1bmljb2RlID0gZS5rZXlDb2RlID8gZS5rZXlDb2RlIDogZS5jaGFyQ29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bmljb2RlID09IDEzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuU3VtbWl0LmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbERpYWxvZy5maW5kKCc6aW5wdXQnKS5mb2N1cyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYm1zZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG5DYW5jZWwuYmluZCgnY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZy5jbG9zZSgnI2ZiRGlhbG9nJyx0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0blN1bW1pdC5iaW5kKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVtYWlsID0gZmFjZWJvb2tFbWFpbC52YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmYkxvZ2luRGlhbG9nID0gJzxkaXYgaWQ9XCJmbG9hdGluZ1NpZ25cIj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cInRhYmJhYmxlXCI+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICc8ZGl2IGNsYXNzPVwidGFiLXBhbmUgYWN0aXZlXCIgaWQ9XCJsb2dpblBhbmVcIj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnPGRpdiBpZD1cImVtYWlsUmVnaXN0ZXJlZFRpcHNcIj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnPHA+PGEgY2xhc3M9XCJlbWFpbFJlZ2lzdGVyZWRJbWdcIj48L2E+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgX2xhbmcucGFnZV9lbWFpbF9yZWdpc3RlcmVkICsgZW1haWwgKyBfbGFuZy5wYWdlX3NpZ25fd2l0aF9lbWFpbF9hbmRfcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICc8L3A+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJzwvZGl2PidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICc8Zm9ybSBhY3Rpb249JyArIHdlYkRhdGEuV0VCX1JPT1QgKyAnYWpheC5waHAnICsgJyBtZXRob2Q9XCJwb3N0XCIgbmFtZT1cImZvcm1fZmFjZWJvb2tfbG9naW5cIiBpZD1cImZvcm1fZmFjZWJvb2tfbG9naW5cIiBhdXRvY29tcGxldGU9XCJvZmZcIj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnPGxhYmVsIGZvcj1cIl9lbWFpbFwiPicgKyBfbGFuZy5wYWdlX2xvZ2luX2VtYWlsICsgJzo8L2xhYmVsPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibG9naW5bZW1haWxdXCIgaWQ9XCJfZW1haWxcIiB2YWx1ZT1cIicgKyBlbWFpbCArICdcIiBtYXhsZW5ndGg9XCI5NlwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICc8bGFiZWwgZm9yPVwiX3Bhc3N3b3JkXCI+JyArIF9sYW5nLnBhZ2VfbG9naW5fcGFzc3dvcmQgKyAnOjwvbGFiZWw+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJzxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwibG9naW5bcGFzc3dvcmRdXCIgaWQ9XCJfcGFzc3dvcmRcIiBtYXhsZW5ndGg9XCI0MFwiPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICc8cCBjbGFzcz1cImZvb3RSZWdpb25cIj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWxhcmdlXCIgb25jbGljaz1cInBhZ2VEYXRhLmxvZ2luTW9kdWxlLmZhY2Vib29rX2xvZ2luX2VtYWlsX3JlZ2lzdGVyZWQoKVwiPicgKyBfbGFuZy5wYWdlX2xvZ2luX3NpZ25faW4gKyAnPC9idXR0b24+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJzxzcGFuIGlkPVwiZm9yZ290UHdkXCI+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIicgKyB3ZWJEYXRhLldFQl9ST09UICsgJ2ZvcmdvdHBhc3N3b3JkLnBocFwiIHRpdGxlPVwiJyArIF9sYW5nLnBhZ2VfbG9naW5fZm9yZ290X3RpcCArICdcIj4nICsgX2xhbmcucGFnZV9sb2dpbl9mb3Jnb3RfdGlwICsgJzwvYT48L3NwYW4+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJzwvcD4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnPC9mb3JtPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICc8L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnPC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJzwvZGl2PidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrID0gZW1haWxEaWFsb2cuZm9ybUNoZWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZiRW1haWwnOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogJ251bGwnLCBlcnJNc2c6IF9sYW5nLnBhZ2VfbG9naW5fZW50ZXJfZW1haWx9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGU6ICdlbWFpbCcsIGVyck1zZzogX2xhbmcucGFnZV9sb2dpbl9jaGVja19lbWFpbF9mb3JtYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFcnJvciA6IGZ1bmN0aW9uIChvYmosIGVyck1zZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yKG9iaiwgZXJyTXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhc3luYyc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndXJsJzogd2ViRGF0YS5XRUJfUk9PVCArICdhamF4LnBocCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogJ2FjdD1jaGVja0VtYWlsUmVnaXN0ZXJlZCZlbWFpbD0nICsgZW1haWwgKyAnJmJhY2s9JyArIGJhY2tfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FjaGUnOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YVR5cGUnOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdWNjZXNzJzogZnVuY3Rpb24ocikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuZXJyb3IgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZy5jbG9zZSgnI2ZiRGlhbG9nJyx0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaWFsb2cub3Blbih7J21vZElkJzonZmJMb2dpbkRpYWxvZycsIGh0bWw6IGZiTG9naW5EaWFsb2d9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3N1Ym1pdCcpLnRleHQoX2xhbmcucGFnZV9vcmRlcl9wcm9ncmVzc19wcm9jZXNzaW5nKS5hdHRyKCdkaXNhYmxlZCcsdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjZWJvb2tfbG9naW4oci5lbWFpbCxyLmJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbG9naW5EaWFsb2dcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2ZiRGlhbG9nXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNmYldhaXRpbmdcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX21zZyA9ICQoJyNfbXNnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtX2Zvcm0gPSAkKCcjZm9ybV9sb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbXNnLmh0bWwoci5tc2cpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbV9mb3JtLmZpbmQoJzppbnB1dCcpLmZvY3VzKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9tc2cuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmRhdGFMYXllci5wdXNoKHsnZXZlbnQnIDogJ3BjTm90QmluZEZiTG9naW5GYWlsZWQnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKCcjbG9naW5EaWFsb2cnKS5jc3MoXCJkaXNwbGF5XCIpID09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJ0V3JpdGVSZXZpZXdVcmwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sICdqc29uJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2xvZ2luRGlhbG9nJykuY3NzKFwiZGlzcGxheVwiKSA9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXZlcnRXcml0ZVJldmlld1VybCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSx7c2NvcGU6ICdlbWFpbCd9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDnu5Hlrprlm57osIPlh73mlbBcclxuICAgIHZhciBjYWxsYmFja19mdW5jO1xyXG5cclxuICAgIHZhciBpbml0X2NhbGxiYWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSAgICB7XHJcbiAgICAgICAgY2FsbGJhY2tfZnVuYyA9IGNhbGxiYWNrO1xyXG4gICAgfTtcclxuXHJcbiAgICAvL+eZu+mZhuazqOWGjOmhtemdouS6i+S7tue7keWumlxyXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZih3aW5kb3cuaW5pdGVkTG9naW5Kcykge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmluaXRlZExvZ2luSnMgPSB0cnVlXHJcbiAgICAgICAgaW5pdF9lbWFpbCgpO1xyXG4gICAgICAgIGluaXRfbG9naW5fZ3Vlc3QoKTtcclxuICAgICAgICBpbml0X2ZvY3VzKHBhZ2VEYXRhLmZvY3VzX2tleSk7XHJcbiAgICAgICAgaGVhZGVyX2luaXRfZm9jdXMocGFnZURhdGEuZm9jdXNfa2V5KTtcclxuICAgIH07XHJcblxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAgICAgXCJpbml0XCI6IGluaXQsXHJcbiAgICAgICAgXCJpbml0X2xvZ2luXCI6IGluaXRfbG9naW4sXHJcbiAgICAgICAgXCJpbml0X2VtYWlsXCI6IGluaXRfZW1haWwsXHJcbiAgICAgICAgXCJpbml0X3JlZ2lzdGVyXCI6IGluaXRfcmVnaXN0ZXIsXHJcbiAgICAgICAgXCJpbml0X2xvZ2luX2d1ZXN0XCI6IGluaXRfbG9naW5fZ3Vlc3QsXHJcbiAgICAgICAgXCJnZXRfZmFjZWJvb2tfbG9naW5cIjogZ2V0X2ZhY2Vib29rX2xvZ2luLFxyXG4gICAgICAgIFwiZmFjZWJvb2tfbG9naW5fZW1haWxfcmVnaXN0ZXJlZFwiOiBmYWNlYm9va19sb2dpbl9lbWFpbF9yZWdpc3RlcmVkLFxyXG4gICAgICAgIFwiaW5pdF9jYWxsYmFja1wiOiBpbml0X2NhbGxiYWNrLFxyXG4gICAgICAgIFwiaW5pdF9jYWxlbmRhclwiOiBpbml0Q2FsZW5kYXIsXHJcbiAgICAgICAgXCJpbml0X2NhbGVuZGFyX2NsaWNrXCI6IGluaXRDYWxlbmRhckNsaWNrLFxyXG4gICAgfTtcclxuIl19
},{"../lib/jQueryDatePicker":7,"../lib/jmodal":8,"../lib/jquery-ui-i18.min":9,"../lib/jqueryForm":10,"../mod/autocompleteEmail":11,"../mod/cookie":12,"../mod/coupon_register_dialog":14,"../mod/dialog":15,"../mod/formCheck":17,"../mod/loader":18,"../mod/openInPopup":19}],"landing_page":[function(require,module,exports){
// require('./common')

require('../index/banner');
require('../goods/do_fav_new').init(); //get fav-count and add-to-fav
require('../pages/landing_page');
require('../category/filter');
require('../category/orderby'); // Sorted By

},{"../category/filter":1,"../category/orderby":2,"../goods/do_fav_new":4,"../index/banner":5,"../pages/landing_page":23}]},{},[])
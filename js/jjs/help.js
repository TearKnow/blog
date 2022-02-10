require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
//define(function(require, exports, module) {

	var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
	
	$('.openwin').click(function () {
		if (this.href.substr(-4) == '.swf') {
			var newin = window.open(this.href, 'dbdetails', 'height=500,width=500,scrollbars=yes');
		} else {
			if ( ($(this).attr('type') == 'heel_type') || ($(this).parents('.simple-tab').length > 0 && $(this).attr('type') == 'size') ) {
				var newin = window.open(this.href,this.window,'scrollbars=yes,height=660,width=780,top='+($(window).height()/4)+',left=10px' + ((window.screen.availWidth - 10 - 780) / 2));return false;
			}
			else if ( $(this).attr('type') == 'heel_height' ) {
				var newin = window.open(this.href,this.window,'scrollbars=yes,height=500,width=780,top='+($(window).height()/4)+',left=10px');return false;
			}
			else if ($(this).attr('type') == 'color') {
				var newin = window.open(this.href, 'dbdetails', 'height=900,width=780,scrollbars=yes, top=20px, left=10px');
			}
			else if ($(this).attr('type') == 'verse') {
				var newin = window.open(this.href, 'dbdetails', 'height=502,width=780,scrollbars=yes, top=150px, left=10px');
			}
			else if ($(this).attr('type') == 'length') {
				var newin = window.open(this.href, 'dbdetails', 'height=590,width=800,scrollbars=yes, top=150px, left=10px');
			}
			else if ($(this).attr('type') == 'hair_color') {
				var newin = window.open(this.href, 'dbdetails', 'height=600,width=800,scrollbars=yes, top=150px, left=10px');
			}
			else if ($(this).attr('type') == 'size_and_construction') {
				var newin = window.open(this.href, 'dbdetails', 'height=780,width=800,scrollbars=yes, top=100px, left=10px');
			}else if ($(this).attr('type') == 'veil_length') {
				var newin = window.open(this.href, 'dbdetails', 'height=600,width=1000,scrollbars=yes, top=100px, left=10px');
			}
			else {
				var newin = window.open(this.href, 'dbdetails', 'height=900,width=780,scrollbars=yes, top=20px, left=10px');
			}
		}
		if (newin != null) {
			newin.focus();
		}
		return false;
	});
	
//});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvY29tbW9uL29wZW53aW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvL2RlZmluZShmdW5jdGlvbihyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHtcclxuXHJcblx0dmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcblx0XHJcblx0JCgnLm9wZW53aW4nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAodGhpcy5ocmVmLnN1YnN0cigtNCkgPT0gJy5zd2YnKSB7XHJcblx0XHRcdHZhciBuZXdpbiA9IHdpbmRvdy5vcGVuKHRoaXMuaHJlZiwgJ2RiZGV0YWlscycsICdoZWlnaHQ9NTAwLHdpZHRoPTUwMCxzY3JvbGxiYXJzPXllcycpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKCAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ2hlZWxfdHlwZScpIHx8ICgkKHRoaXMpLnBhcmVudHMoJy5zaW1wbGUtdGFiJykubGVuZ3RoID4gMCAmJiAkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAnc2l6ZScpICkge1xyXG5cdFx0XHRcdHZhciBuZXdpbiA9IHdpbmRvdy5vcGVuKHRoaXMuaHJlZix0aGlzLndpbmRvdywnc2Nyb2xsYmFycz15ZXMsaGVpZ2h0PTY2MCx3aWR0aD03ODAsdG9wPScrKCQod2luZG93KS5oZWlnaHQoKS80KSsnLGxlZnQ9MTBweCcgKyAoKHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCAtIDEwIC0gNzgwKSAvIDIpKTtyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoICQodGhpcykuYXR0cigndHlwZScpID09ICdoZWVsX2hlaWdodCcgKSB7XHJcblx0XHRcdFx0dmFyIG5ld2luID0gd2luZG93Lm9wZW4odGhpcy5ocmVmLHRoaXMud2luZG93LCdzY3JvbGxiYXJzPXllcyxoZWlnaHQ9NTAwLHdpZHRoPTc4MCx0b3A9JysoJCh3aW5kb3cpLmhlaWdodCgpLzQpKycsbGVmdD0xMHB4Jyk7cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICdjb2xvcicpIHtcclxuXHRcdFx0XHR2YXIgbmV3aW4gPSB3aW5kb3cub3Blbih0aGlzLmhyZWYsICdkYmRldGFpbHMnLCAnaGVpZ2h0PTkwMCx3aWR0aD03ODAsc2Nyb2xsYmFycz15ZXMsIHRvcD0yMHB4LCBsZWZ0PTEwcHgnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAndmVyc2UnKSB7XHJcblx0XHRcdFx0dmFyIG5ld2luID0gd2luZG93Lm9wZW4odGhpcy5ocmVmLCAnZGJkZXRhaWxzJywgJ2hlaWdodD01MDIsd2lkdGg9NzgwLHNjcm9sbGJhcnM9eWVzLCB0b3A9MTUwcHgsIGxlZnQ9MTBweCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICdsZW5ndGgnKSB7XHJcblx0XHRcdFx0dmFyIG5ld2luID0gd2luZG93Lm9wZW4odGhpcy5ocmVmLCAnZGJkZXRhaWxzJywgJ2hlaWdodD01OTAsd2lkdGg9ODAwLHNjcm9sbGJhcnM9eWVzLCB0b3A9MTUwcHgsIGxlZnQ9MTBweCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICdoYWlyX2NvbG9yJykge1xyXG5cdFx0XHRcdHZhciBuZXdpbiA9IHdpbmRvdy5vcGVuKHRoaXMuaHJlZiwgJ2RiZGV0YWlscycsICdoZWlnaHQ9NjAwLHdpZHRoPTgwMCxzY3JvbGxiYXJzPXllcywgdG9wPTE1MHB4LCBsZWZ0PTEwcHgnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAnc2l6ZV9hbmRfY29uc3RydWN0aW9uJykge1xyXG5cdFx0XHRcdHZhciBuZXdpbiA9IHdpbmRvdy5vcGVuKHRoaXMuaHJlZiwgJ2RiZGV0YWlscycsICdoZWlnaHQ9NzgwLHdpZHRoPTgwMCxzY3JvbGxiYXJzPXllcywgdG9wPTEwMHB4LCBsZWZ0PTEwcHgnKTtcclxuXHRcdFx0fWVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICd2ZWlsX2xlbmd0aCcpIHtcclxuXHRcdFx0XHR2YXIgbmV3aW4gPSB3aW5kb3cub3Blbih0aGlzLmhyZWYsICdkYmRldGFpbHMnLCAnaGVpZ2h0PTYwMCx3aWR0aD0xMDAwLHNjcm9sbGJhcnM9eWVzLCB0b3A9MTAwcHgsIGxlZnQ9MTBweCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHZhciBuZXdpbiA9IHdpbmRvdy5vcGVuKHRoaXMuaHJlZiwgJ2RiZGV0YWlscycsICdoZWlnaHQ9OTAwLHdpZHRoPTc4MCxzY3JvbGxiYXJzPXllcywgdG9wPTIwcHgsIGxlZnQ9MTBweCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAobmV3aW4gIT0gbnVsbCkge1xyXG5cdFx0XHRuZXdpbi5mb2N1cygpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG4vL30pO1xyXG4iXX0=
},{}],2:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var plusCollapseToggle = function(plusEleClass) {
    $header = $(this);
    $content = $header.next();
    $plusElem = $header.find("." + plusEleClass);

    $content.is(":visible") ? $plusElem.removeClass("open") : $plusElem.addClass("open");
    $content.is(":visible") ? $content.hide() : $content.show();
};

exports.init = function() {
    $(".faqs .faqs-category-title").on("click", function() {
        plusCollapseToggle.call(this, "faqs-category-plus")
    });
    $(".faqs .question").on("click", function() {
        plusCollapseToggle.call(this, "faqs-question-plus")
    });

    $(".js-show-live-chat-dialog").on("click", function() {
        var LC_API = window.LC_API || {};
        LC_API.open_chat_window();
        window.LC_API = LC_API;
    });
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvaGVscC9mYXFzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcblxyXG52YXIgcGx1c0NvbGxhcHNlVG9nZ2xlID0gZnVuY3Rpb24ocGx1c0VsZUNsYXNzKSB7XHJcbiAgICAkaGVhZGVyID0gJCh0aGlzKTtcclxuICAgICRjb250ZW50ID0gJGhlYWRlci5uZXh0KCk7XHJcbiAgICAkcGx1c0VsZW0gPSAkaGVhZGVyLmZpbmQoXCIuXCIgKyBwbHVzRWxlQ2xhc3MpO1xyXG5cclxuICAgICRjb250ZW50LmlzKFwiOnZpc2libGVcIikgPyAkcGx1c0VsZW0ucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpIDogJHBsdXNFbGVtLmFkZENsYXNzKFwib3BlblwiKTtcclxuICAgICRjb250ZW50LmlzKFwiOnZpc2libGVcIikgPyAkY29udGVudC5oaWRlKCkgOiAkY29udGVudC5zaG93KCk7XHJcbn07XHJcblxyXG5leHBvcnRzLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICQoXCIuZmFxcyAuZmFxcy1jYXRlZ29yeS10aXRsZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHBsdXNDb2xsYXBzZVRvZ2dsZS5jYWxsKHRoaXMsIFwiZmFxcy1jYXRlZ29yeS1wbHVzXCIpXHJcbiAgICB9KTtcclxuICAgICQoXCIuZmFxcyAucXVlc3Rpb25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBwbHVzQ29sbGFwc2VUb2dnbGUuY2FsbCh0aGlzLCBcImZhcXMtcXVlc3Rpb24tcGx1c1wiKVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5qcy1zaG93LWxpdmUtY2hhdC1kaWFsb2dcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgTENfQVBJID0gd2luZG93LkxDX0FQSSB8fCB7fTtcclxuICAgICAgICBMQ19BUEkub3Blbl9jaGF0X3dpbmRvdygpO1xyXG4gICAgICAgIHdpbmRvdy5MQ19BUEkgPSBMQ19BUEk7XHJcbiAgICB9KTtcclxufTsiXX0=
},{}],3:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
var paymentInfoContent = $('.payment-info');
var paymentMethodsDom = $('.payment-methods');
var paymentsClasses = typeof pageData.paymentsClasses == "undefined" ? {} : pageData.paymentsClasses;
var inAjax = false;

var init = function () {
    paymentInfoContent.delegate('#select_region', 'change', function (){
        var regionId = $(this).val();
        if(regionId > 0 && inAjax === false){
            get_payment_method(regionId);
        }
    })
}

//get related data of payment when changing the country
var get_payment_method = function (country_id) {
    inAjax = true;
    $.ajax({
        'type': 'GET',
        'url': webData.WEB_ROOT + 'ajax.php',
        'data': 'act=get_payment_modules&country=' + country_id,
        'cache': true,
        'dataType': 'json',
        'beforeSend': function (r) {
        },
        'success': function (r) {
            inAjax = false;
            if (r.code == 0 && r.payment_modules) {
                render_payment_methods(r.payment_modules, r.show_paypal_currency_tip);
            }
        }
    });
};

var render_payment_methods = function(payment_methods, show_paypal_currency_tip) {
    var paymentDom = '';
    for(var i =0; i < payment_methods.length; i++) {
        var payment = payment_methods[i];
        paymentDom += '<li class="payment-dom">' +
            '<span class="help-sub-title">' + payment.payment_name + '</span>';
        if (payment.payment_id == 97) {
            paymentDom += '<span class="paypalIcon"></span>';
            if(!show_paypal_currency_tip) {
                paymentDom += '<p>' + _lang.page_paypal_checkout_paypal_tips + '</p>';
            } else {
                paymentDom += '<p>' + _lang.page_paypal_checkout_paypal_tips_new + '</p>' +
                '<span class="paypal-to-USD-tip">' + _lang.page_paypal_currency_to_usd_tips + '</span>';
            }
            paymentDom +='</li>';
        } else if (payment.payment_id == 157 || payment.payment_id == 186) {
            paymentDom += '<p>' + _lang.page_common_we_accept_credit_card + '</p>';
            paymentDom += '<div class="credit-cards">';
            if(typeof paymentsClasses[157] != "undefined") {
                for(var index = 0; index < paymentsClasses[157].length; index++) {
                    paymentDom += '<span class="' + paymentsClasses[157][index] + '"></span>';
                }
            }
            paymentDom += '</div>' +
                '<p>' + _lang.page_common_credit_card_note + '</p>' +
            '</li>';
        } else if (payment.payment_id == 165) {
            paymentDom += '<p>' + _lang.page_common_we_accept_credit_card + '</p>';
            paymentDom += '<div class="credit-cards">';
            if(typeof paymentsClasses[165] != "undefined") {
                for(var j = 0; j < paymentsClasses[165].length; j++) {
                    paymentDom += '<span class="' + paymentsClasses[165][j] + '"></span>';
                }
            }
            paymentDom += '</div>' +
                '<p>' + _lang.page_common_credit_card_note + '</p>' +
                '</li>';
        } else {
            paymentDom += '<span class="help-sub-content">' + payment.payment_desc.replace('{$IMG_PATH}', webData.IMG_PATH) + '</span>' +
            '</li>';
        }
    }
    paymentMethodsDom.html(paymentDom);
}

module.exports = {
    "init": init,
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvaGVscC9wYXltZW50X21ldGhvZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG52YXIgcGF5bWVudEluZm9Db250ZW50ID0gJCgnLnBheW1lbnQtaW5mbycpO1xyXG52YXIgcGF5bWVudE1ldGhvZHNEb20gPSAkKCcucGF5bWVudC1tZXRob2RzJyk7XHJcbnZhciBwYXltZW50c0NsYXNzZXMgPSB0eXBlb2YgcGFnZURhdGEucGF5bWVudHNDbGFzc2VzID09IFwidW5kZWZpbmVkXCIgPyB7fSA6IHBhZ2VEYXRhLnBheW1lbnRzQ2xhc3NlcztcclxudmFyIGluQWpheCA9IGZhbHNlO1xyXG5cclxudmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBwYXltZW50SW5mb0NvbnRlbnQuZGVsZWdhdGUoJyNzZWxlY3RfcmVnaW9uJywgJ2NoYW5nZScsIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIHZhciByZWdpb25JZCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYocmVnaW9uSWQgPiAwICYmIGluQWpheCA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBnZXRfcGF5bWVudF9tZXRob2QocmVnaW9uSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8vZ2V0IHJlbGF0ZWQgZGF0YSBvZiBwYXltZW50IHdoZW4gY2hhbmdpbmcgdGhlIGNvdW50cnlcclxudmFyIGdldF9wYXltZW50X21ldGhvZCA9IGZ1bmN0aW9uIChjb3VudHJ5X2lkKSB7XHJcbiAgICBpbkFqYXggPSB0cnVlO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICAndHlwZSc6ICdHRVQnLFxyXG4gICAgICAgICd1cmwnOiB3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwJyxcclxuICAgICAgICAnZGF0YSc6ICdhY3Q9Z2V0X3BheW1lbnRfbW9kdWxlcyZjb3VudHJ5PScgKyBjb3VudHJ5X2lkLFxyXG4gICAgICAgICdjYWNoZSc6IHRydWUsXHJcbiAgICAgICAgJ2RhdGFUeXBlJzogJ2pzb24nLFxyXG4gICAgICAgICdiZWZvcmVTZW5kJzogZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICB9LFxyXG4gICAgICAgICdzdWNjZXNzJzogZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgaW5BamF4ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChyLmNvZGUgPT0gMCAmJiByLnBheW1lbnRfbW9kdWxlcykge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyX3BheW1lbnRfbWV0aG9kcyhyLnBheW1lbnRfbW9kdWxlcywgci5zaG93X3BheXBhbF9jdXJyZW5jeV90aXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG52YXIgcmVuZGVyX3BheW1lbnRfbWV0aG9kcyA9IGZ1bmN0aW9uKHBheW1lbnRfbWV0aG9kcywgc2hvd19wYXlwYWxfY3VycmVuY3lfdGlwKSB7XHJcbiAgICB2YXIgcGF5bWVudERvbSA9ICcnO1xyXG4gICAgZm9yKHZhciBpID0wOyBpIDwgcGF5bWVudF9tZXRob2RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHBheW1lbnQgPSBwYXltZW50X21ldGhvZHNbaV07XHJcbiAgICAgICAgcGF5bWVudERvbSArPSAnPGxpIGNsYXNzPVwicGF5bWVudC1kb21cIj4nICtcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiaGVscC1zdWItdGl0bGVcIj4nICsgcGF5bWVudC5wYXltZW50X25hbWUgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgaWYgKHBheW1lbnQucGF5bWVudF9pZCA9PSA5Nykge1xyXG4gICAgICAgICAgICBwYXltZW50RG9tICs9ICc8c3BhbiBjbGFzcz1cInBheXBhbEljb25cIj48L3NwYW4+JztcclxuICAgICAgICAgICAgaWYoIXNob3dfcGF5cGFsX2N1cnJlbmN5X3RpcCkge1xyXG4gICAgICAgICAgICAgICAgcGF5bWVudERvbSArPSAnPHA+JyArIF9sYW5nLnBhZ2VfcGF5cGFsX2NoZWNrb3V0X3BheXBhbF90aXBzICsgJzwvcD4nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGF5bWVudERvbSArPSAnPHA+JyArIF9sYW5nLnBhZ2VfcGF5cGFsX2NoZWNrb3V0X3BheXBhbF90aXBzX25ldyArICc8L3A+JyArXHJcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJwYXlwYWwtdG8tVVNELXRpcFwiPicgKyBfbGFuZy5wYWdlX3BheXBhbF9jdXJyZW5jeV90b191c2RfdGlwcyArICc8L3NwYW4+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXltZW50RG9tICs9JzwvbGk+JztcclxuICAgICAgICB9IGVsc2UgaWYgKHBheW1lbnQucGF5bWVudF9pZCA9PSAxNTcgfHwgcGF5bWVudC5wYXltZW50X2lkID09IDE4Nikge1xyXG4gICAgICAgICAgICBwYXltZW50RG9tICs9ICc8cD4nICsgX2xhbmcucGFnZV9jb21tb25fd2VfYWNjZXB0X2NyZWRpdF9jYXJkICsgJzwvcD4nO1xyXG4gICAgICAgICAgICBwYXltZW50RG9tICs9ICc8ZGl2IGNsYXNzPVwiY3JlZGl0LWNhcmRzXCI+JztcclxuICAgICAgICAgICAgaWYodHlwZW9mIHBheW1lbnRzQ2xhc3Nlc1sxNTddICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaW5kZXggPSAwOyBpbmRleCA8IHBheW1lbnRzQ2xhc3Nlc1sxNTddLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnREb20gKz0gJzxzcGFuIGNsYXNzPVwiJyArIHBheW1lbnRzQ2xhc3Nlc1sxNTddW2luZGV4XSArICdcIj48L3NwYW4+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXltZW50RG9tICs9ICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICc8cD4nICsgX2xhbmcucGFnZV9jb21tb25fY3JlZGl0X2NhcmRfbm90ZSArICc8L3A+JyArXHJcbiAgICAgICAgICAgICc8L2xpPic7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXltZW50LnBheW1lbnRfaWQgPT0gMTY1KSB7XHJcbiAgICAgICAgICAgIHBheW1lbnREb20gKz0gJzxwPicgKyBfbGFuZy5wYWdlX2NvbW1vbl93ZV9hY2NlcHRfY3JlZGl0X2NhcmQgKyAnPC9wPic7XHJcbiAgICAgICAgICAgIHBheW1lbnREb20gKz0gJzxkaXYgY2xhc3M9XCJjcmVkaXQtY2FyZHNcIj4nO1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgcGF5bWVudHNDbGFzc2VzWzE2NV0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IHBheW1lbnRzQ2xhc3Nlc1sxNjVdLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudERvbSArPSAnPHNwYW4gY2xhc3M9XCInICsgcGF5bWVudHNDbGFzc2VzWzE2NV1bal0gKyAnXCI+PC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGF5bWVudERvbSArPSAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPHA+JyArIF9sYW5nLnBhZ2VfY29tbW9uX2NyZWRpdF9jYXJkX25vdGUgKyAnPC9wPicgK1xyXG4gICAgICAgICAgICAgICAgJzwvbGk+JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYXltZW50RG9tICs9ICc8c3BhbiBjbGFzcz1cImhlbHAtc3ViLWNvbnRlbnRcIj4nICsgcGF5bWVudC5wYXltZW50X2Rlc2MucmVwbGFjZSgneyRJTUdfUEFUSH0nLCB3ZWJEYXRhLklNR19QQVRIKSArICc8L3NwYW4+JyArXHJcbiAgICAgICAgICAgICc8L2xpPic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGF5bWVudE1ldGhvZHNEb20uaHRtbChwYXltZW50RG9tKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBcImluaXRcIjogaW5pdCxcclxufSJdfQ==
},{}],4:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
var processingTimeContent = $('.processing-time');
var shippingInfoContent = $('.shipping-info');
var inAjax = false;

var init = function () {
    processingTimeContent.delegate('#select_not_sample_sale_category', 'change', function () {
        var selectedOption = $(this)[0].selectedOptions;
        var catName = $(selectedOption).attr('data-cat-name');
        var catProcessingTime = $(selectedOption).attr('data-processing-time');
        var catNameDom = $(this).parents('.processing-time').find('#cat-name');
        var catProcessingTimeDom = $(this).parents('.processing-time').find('#cat-processing-time');
        if(catName === '') {
            catNameDom.html('');
            catProcessingTimeDom.html('');
        } else {
            catNameDom.html(catName);
            catProcessingTimeDom.html(catProcessingTime);
        }
    })
    shippingInfoContent.delegate('#select_region', 'change', function () {
        var countryId = $(this).val();
        if(countryId > 0 && inAjax == false) {
            get_shipping_info(countryId)
        }
    })
    //choose bridemaid dresses when init
    if(typeof $('#select_not_sample_sale_category')[0] != "undefined") {
        $('#select_not_sample_sale_category').val(7);
        var selectedOption = $('#select_not_sample_sale_category')[0].selectedOptions;
        var catName = $(selectedOption).attr('data-cat-name');
        var catProcessingTime = $(selectedOption).attr('data-processing-time');
        var catNameDom = $('.processing-time').find('#cat-name');
        var catProcessingTimeDom = $('.processing-time').find('#cat-processing-time');
        if(catName === '') {
            catNameDom.html('');
            catProcessingTimeDom.html('');
        } else {
            catNameDom.html(catName);
            catProcessingTimeDom.html(catProcessingTime);
        }
    }
}

var get_shipping_info = function(countryId) {
    $.ajax({
        'type': 'GET',
        'url': webData.WEB_ROOT + 'ajax.php',
        'data': 'act=get_shipping_method_with_basic_fee&country_id=' + countryId,
        'cache': true,
        'dataType': 'json',
        'beforeSend': function (r) {
        },
        'success': function (r) {
            render_shipping_info(r.shipping_methods);
        }
    });
}

var render_shipping_info = function(shippingInfo) {
    var shipmentsTbody = shippingInfoContent.find('tbody');
    var shipmentsDom = ''
    for (var i = 0; i < shippingInfo.length; i++) {
        var shipment = shippingInfo[i]
        shipmentsDom += '<tr>' +
            '               <td>' + shipment.name + '</td>' +
            '               <td>' + shipment.shipping_time.toLowerCase() + '</td>' +
            '               <td>' + shipment.costTip + '</td>' +
            '           </tr>'
    }
    shipmentsTbody.html(shipmentsDom);
}

module.exports = {
    "init": init,
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvaGVscC9zaGlwcGluZ19pbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcbnZhciBwcm9jZXNzaW5nVGltZUNvbnRlbnQgPSAkKCcucHJvY2Vzc2luZy10aW1lJyk7XHJcbnZhciBzaGlwcGluZ0luZm9Db250ZW50ID0gJCgnLnNoaXBwaW5nLWluZm8nKTtcclxudmFyIGluQWpheCA9IGZhbHNlO1xyXG5cclxudmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBwcm9jZXNzaW5nVGltZUNvbnRlbnQuZGVsZWdhdGUoJyNzZWxlY3Rfbm90X3NhbXBsZV9zYWxlX2NhdGVnb3J5JywgJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSAkKHRoaXMpWzBdLnNlbGVjdGVkT3B0aW9ucztcclxuICAgICAgICB2YXIgY2F0TmFtZSA9ICQoc2VsZWN0ZWRPcHRpb24pLmF0dHIoJ2RhdGEtY2F0LW5hbWUnKTtcclxuICAgICAgICB2YXIgY2F0UHJvY2Vzc2luZ1RpbWUgPSAkKHNlbGVjdGVkT3B0aW9uKS5hdHRyKCdkYXRhLXByb2Nlc3NpbmctdGltZScpO1xyXG4gICAgICAgIHZhciBjYXROYW1lRG9tID0gJCh0aGlzKS5wYXJlbnRzKCcucHJvY2Vzc2luZy10aW1lJykuZmluZCgnI2NhdC1uYW1lJyk7XHJcbiAgICAgICAgdmFyIGNhdFByb2Nlc3NpbmdUaW1lRG9tID0gJCh0aGlzKS5wYXJlbnRzKCcucHJvY2Vzc2luZy10aW1lJykuZmluZCgnI2NhdC1wcm9jZXNzaW5nLXRpbWUnKTtcclxuICAgICAgICBpZihjYXROYW1lID09PSAnJykge1xyXG4gICAgICAgICAgICBjYXROYW1lRG9tLmh0bWwoJycpO1xyXG4gICAgICAgICAgICBjYXRQcm9jZXNzaW5nVGltZURvbS5odG1sKCcnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYXROYW1lRG9tLmh0bWwoY2F0TmFtZSk7XHJcbiAgICAgICAgICAgIGNhdFByb2Nlc3NpbmdUaW1lRG9tLmh0bWwoY2F0UHJvY2Vzc2luZ1RpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBzaGlwcGluZ0luZm9Db250ZW50LmRlbGVnYXRlKCcjc2VsZWN0X3JlZ2lvbicsICdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNvdW50cnlJZCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYoY291bnRyeUlkID4gMCAmJiBpbkFqYXggPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZ2V0X3NoaXBwaW5nX2luZm8oY291bnRyeUlkKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvL2Nob29zZSBicmlkZW1haWQgZHJlc3NlcyB3aGVuIGluaXRcclxuICAgIGlmKHR5cGVvZiAkKCcjc2VsZWN0X25vdF9zYW1wbGVfc2FsZV9jYXRlZ29yeScpWzBdICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAkKCcjc2VsZWN0X25vdF9zYW1wbGVfc2FsZV9jYXRlZ29yeScpLnZhbCg3KTtcclxuICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSAkKCcjc2VsZWN0X25vdF9zYW1wbGVfc2FsZV9jYXRlZ29yeScpWzBdLnNlbGVjdGVkT3B0aW9ucztcclxuICAgICAgICB2YXIgY2F0TmFtZSA9ICQoc2VsZWN0ZWRPcHRpb24pLmF0dHIoJ2RhdGEtY2F0LW5hbWUnKTtcclxuICAgICAgICB2YXIgY2F0UHJvY2Vzc2luZ1RpbWUgPSAkKHNlbGVjdGVkT3B0aW9uKS5hdHRyKCdkYXRhLXByb2Nlc3NpbmctdGltZScpO1xyXG4gICAgICAgIHZhciBjYXROYW1lRG9tID0gJCgnLnByb2Nlc3NpbmctdGltZScpLmZpbmQoJyNjYXQtbmFtZScpO1xyXG4gICAgICAgIHZhciBjYXRQcm9jZXNzaW5nVGltZURvbSA9ICQoJy5wcm9jZXNzaW5nLXRpbWUnKS5maW5kKCcjY2F0LXByb2Nlc3NpbmctdGltZScpO1xyXG4gICAgICAgIGlmKGNhdE5hbWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGNhdE5hbWVEb20uaHRtbCgnJyk7XHJcbiAgICAgICAgICAgIGNhdFByb2Nlc3NpbmdUaW1lRG9tLmh0bWwoJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhdE5hbWVEb20uaHRtbChjYXROYW1lKTtcclxuICAgICAgICAgICAgY2F0UHJvY2Vzc2luZ1RpbWVEb20uaHRtbChjYXRQcm9jZXNzaW5nVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG52YXIgZ2V0X3NoaXBwaW5nX2luZm8gPSBmdW5jdGlvbihjb3VudHJ5SWQpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgJ3R5cGUnOiAnR0VUJyxcclxuICAgICAgICAndXJsJzogd2ViRGF0YS5XRUJfUk9PVCArICdhamF4LnBocCcsXHJcbiAgICAgICAgJ2RhdGEnOiAnYWN0PWdldF9zaGlwcGluZ19tZXRob2Rfd2l0aF9iYXNpY19mZWUmY291bnRyeV9pZD0nICsgY291bnRyeUlkLFxyXG4gICAgICAgICdjYWNoZSc6IHRydWUsXHJcbiAgICAgICAgJ2RhdGFUeXBlJzogJ2pzb24nLFxyXG4gICAgICAgICdiZWZvcmVTZW5kJzogZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICB9LFxyXG4gICAgICAgICdzdWNjZXNzJzogZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgcmVuZGVyX3NoaXBwaW5nX2luZm8oci5zaGlwcGluZ19tZXRob2RzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxudmFyIHJlbmRlcl9zaGlwcGluZ19pbmZvID0gZnVuY3Rpb24oc2hpcHBpbmdJbmZvKSB7XHJcbiAgICB2YXIgc2hpcG1lbnRzVGJvZHkgPSBzaGlwcGluZ0luZm9Db250ZW50LmZpbmQoJ3Rib2R5Jyk7XHJcbiAgICB2YXIgc2hpcG1lbnRzRG9tID0gJydcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hpcHBpbmdJbmZvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHNoaXBtZW50ID0gc2hpcHBpbmdJbmZvW2ldXHJcbiAgICAgICAgc2hpcG1lbnRzRG9tICs9ICc8dHI+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICA8dGQ+JyArIHNoaXBtZW50Lm5hbWUgKyAnPC90ZD4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgIDx0ZD4nICsgc2hpcG1lbnQuc2hpcHBpbmdfdGltZS50b0xvd2VyQ2FzZSgpICsgJzwvdGQ+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICA8dGQ+JyArIHNoaXBtZW50LmNvc3RUaXAgKyAnPC90ZD4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgPC90cj4nXHJcbiAgICB9XHJcbiAgICBzaGlwbWVudHNUYm9keS5odG1sKHNoaXBtZW50c0RvbSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgXCJpbml0XCI6IGluaXQsXHJcbn07Il19
},{}],5:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
var sizeChartInfo = $('.size-chart-info')
var inAjax = false;
var sizeChartDom = sizeChartInfo.find('.help-size-chart');
const BridesMaidDressedCatId = 7;

var init = function() {
    sizeChartInfo.delegate('#select_size_chart_category', 'change', function () {
        var catId = $(this).val();
        if(catId != '' && inAjax === false){
            getSizeChartByCatId(catId);
        }
    })
    //select the wedding dresses when the page loaded
    $('#select_size_chart_category').val(BridesMaidDressedCatId);
    getSizeChartByCatId(BridesMaidDressedCatId);
}

function getSizeChartByCatId(catId) {
    inAjax = true;
    $.ajax({
        'type': 'POST',
        'url': webData.WEB_ROOT + 'ajax.php',
        'data': 'act=get_size_chart&cat_id=' + catId,
        'cache': true,
        'dataType': 'json',
        'success': function (r) {
            if(r.code == 0){
                sizeChartDom.html(r.sizechart);
                $('#pop_measure_simple_tab').show();
                var sizeTableTitle = $('.help-size-chart').find('caption').html();
                var sizeBlockTitle = $('.help-sizechart-block-title')[0];
                $(sizeBlockTitle).html(sizeTableTitle)
                inAjax = false;
            } else {
                inAjax = false;
            }
        }
    })
}

module.exports = {
    "init": init,
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvaGVscC9zaXplX2NoYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxudmFyIHNpemVDaGFydEluZm8gPSAkKCcuc2l6ZS1jaGFydC1pbmZvJylcclxudmFyIGluQWpheCA9IGZhbHNlO1xyXG52YXIgc2l6ZUNoYXJ0RG9tID0gc2l6ZUNoYXJ0SW5mby5maW5kKCcuaGVscC1zaXplLWNoYXJ0Jyk7XHJcbmNvbnN0IEJyaWRlc01haWREcmVzc2VkQ2F0SWQgPSA3O1xyXG5cclxudmFyIGluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHNpemVDaGFydEluZm8uZGVsZWdhdGUoJyNzZWxlY3Rfc2l6ZV9jaGFydF9jYXRlZ29yeScsICdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNhdElkID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBpZihjYXRJZCAhPSAnJyAmJiBpbkFqYXggPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgZ2V0U2l6ZUNoYXJ0QnlDYXRJZChjYXRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vc2VsZWN0IHRoZSB3ZWRkaW5nIGRyZXNzZXMgd2hlbiB0aGUgcGFnZSBsb2FkZWRcclxuICAgICQoJyNzZWxlY3Rfc2l6ZV9jaGFydF9jYXRlZ29yeScpLnZhbChCcmlkZXNNYWlkRHJlc3NlZENhdElkKTtcclxuICAgIGdldFNpemVDaGFydEJ5Q2F0SWQoQnJpZGVzTWFpZERyZXNzZWRDYXRJZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNpemVDaGFydEJ5Q2F0SWQoY2F0SWQpIHtcclxuICAgIGluQWpheCA9IHRydWU7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgICd0eXBlJzogJ1BPU1QnLFxyXG4gICAgICAgICd1cmwnOiB3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwJyxcclxuICAgICAgICAnZGF0YSc6ICdhY3Q9Z2V0X3NpemVfY2hhcnQmY2F0X2lkPScgKyBjYXRJZCxcclxuICAgICAgICAnY2FjaGUnOiB0cnVlLFxyXG4gICAgICAgICdkYXRhVHlwZSc6ICdqc29uJyxcclxuICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIGlmKHIuY29kZSA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHNpemVDaGFydERvbS5odG1sKHIuc2l6ZWNoYXJ0KTtcclxuICAgICAgICAgICAgICAgICQoJyNwb3BfbWVhc3VyZV9zaW1wbGVfdGFiJykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNpemVUYWJsZVRpdGxlID0gJCgnLmhlbHAtc2l6ZS1jaGFydCcpLmZpbmQoJ2NhcHRpb24nKS5odG1sKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2l6ZUJsb2NrVGl0bGUgPSAkKCcuaGVscC1zaXplY2hhcnQtYmxvY2stdGl0bGUnKVswXTtcclxuICAgICAgICAgICAgICAgICQoc2l6ZUJsb2NrVGl0bGUpLmh0bWwoc2l6ZVRhYmxlVGl0bGUpXHJcbiAgICAgICAgICAgICAgICBpbkFqYXggPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGluQWpheCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBcImluaXRcIjogaW5pdCxcclxufSJdfQ==
},{}],6:[function(require,module,exports){
(function (global){
//define(function (require, exports, module) {

    var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    var init_testiomonials = function() {
        //插入国旗
        (function setFlag() {
            var flags = {
                'en' : ['flag_3859.gif', 'flag_3859.gif', 'flag_3858.gif', 'flag_3859.gif', 'flag_3844.gif', 'flag_3859.gif'],
                'de' : ['flag_4017.gif', 'flag_4017.gif', 'flag_3937.gif', 'flag_4017.gif', 'flag_4017.gif', 'flag_4017.gif'],
                'fr' : ['flag_4003.gif', 'flag_4003.gif', 'flag_4093.gif', 'flag_4203.gif', 'flag_3953.gif', 'flag_3953.gif'],
                'es' : ['flag_3859.gif', 'flag_3859.gif', 'flag_3858.gif', 'flag_3859.gif', 'flag_3844.gif', 'flag_3859.gif'],
                'se' : ['flag_4202.gif', 'flag_4202.gif', 'flag_4202.gif', 'flag_4202.gif', 'flag_4202.gif', 'flag_4202.gif'],
                'no' : ['flag_3859.gif', 'flag_3859.gif', 'flag_3858.gif', 'flag_3859.gif', 'flag_3844.gif', 'flag_3859.gif'],
                'it' : ['flag_3859.gif', 'flag_3859.gif', 'flag_3858.gif', 'flag_3859.gif', 'flag_3844.gif', 'flag_3859.gif'],
                'pt' : ['flag_3859.gif', 'flag_3859.gif', 'flag_3858.gif', 'flag_3859.gif', 'flag_3844.gif', 'flag_3859.gif'],
                'da' : ['flag_3987.gif', 'flag_3987.gif', 'flag_3987.gif', 'flag_3987.gif', 'flag_3987.gif', 'flag_3987.gif'],
                'fi' : ['flag_3859.gif', 'flag_3859.gif', 'flag_3858.gif', 'flag_3859.gif', 'flag_3844.gif', 'flag_3859.gif'],
                'ru' : ['flag_3859.gif', 'flag_3859.gif', 'flag_3858.gif', 'flag_3859.gif', 'flag_3844.gif', 'flag_3859.gif'],
                'nl' : ['flag_3859.gif', 'flag_3859.gif', 'flag_3858.gif', 'flag_3859.gif', 'flag_3844.gif', 'flag_3859.gif']
            };
            var lang_code = webData.lang;
            $('.tmreviews img').each(function(index) {
                $(this).attr('src', webData.IMG_PATH + 'flag/' + flags[lang_code][index]);
            });
        })();

        //插入评论时间
        function getMaxDay(y, m) {
            return new Date(y, m, 0).getDate();
        }

        (function setReviewTime() {
            var now = new Date();
            var year = 1900 + now.getYear();
            var month = (1 + now.getMonth()) / 10 < 1 ? '0' + (1 + now.getMonth()) : (1 + now.getMonth());
            var review_time = [];
            var max_day = getMaxDay(year, month - 1);
            for (var i = 2; i < 6; i++) {
                var r_month = (now.getDate() - i) < 1 ? month - 1 : month;
                var time = (now.getDate() + (now.getDate() - i < 1 ? max_day : 0) - i) + ' / ' + r_month + ' / ' + year;
                review_time.push(time);
                if (i == 2 || i == 5) {
                    review_time.push(time);
                }
            }

            $('.tmreviews .viewtime').each(function(index) {
                $(this).html(review_time[index]);
            });
        })();

        //when click a link, open the page in as new window
        require('../common/openwin');
    };

    exports.init = function () {
        //to determine which code to take effect
        var page_id = pageData && pageData.page_id ? pageData.page_id : '';

        // Testimonials
        if (page_id == 3 && $('.testiomonials').length > 0) {
            init_testiomonials();
        }

    };

//});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvaGVscC90ZXN0aW1vbmlhbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLy9kZWZpbmUoZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSkge1xyXG5cclxuICAgIHZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG5cclxuICAgIHZhciBpbml0X3Rlc3Rpb21vbmlhbHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvL+aPkuWFpeWbveaXl1xyXG4gICAgICAgIChmdW5jdGlvbiBzZXRGbGFnKCkge1xyXG4gICAgICAgICAgICB2YXIgZmxhZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICAnZW4nIDogWydmbGFnXzM4NTkuZ2lmJywgJ2ZsYWdfMzg1OS5naWYnLCAnZmxhZ18zODU4LmdpZicsICdmbGFnXzM4NTkuZ2lmJywgJ2ZsYWdfMzg0NC5naWYnLCAnZmxhZ18zODU5LmdpZiddLFxyXG4gICAgICAgICAgICAgICAgJ2RlJyA6IFsnZmxhZ180MDE3LmdpZicsICdmbGFnXzQwMTcuZ2lmJywgJ2ZsYWdfMzkzNy5naWYnLCAnZmxhZ180MDE3LmdpZicsICdmbGFnXzQwMTcuZ2lmJywgJ2ZsYWdfNDAxNy5naWYnXSxcclxuICAgICAgICAgICAgICAgICdmcicgOiBbJ2ZsYWdfNDAwMy5naWYnLCAnZmxhZ180MDAzLmdpZicsICdmbGFnXzQwOTMuZ2lmJywgJ2ZsYWdfNDIwMy5naWYnLCAnZmxhZ18zOTUzLmdpZicsICdmbGFnXzM5NTMuZ2lmJ10sXHJcbiAgICAgICAgICAgICAgICAnZXMnIDogWydmbGFnXzM4NTkuZ2lmJywgJ2ZsYWdfMzg1OS5naWYnLCAnZmxhZ18zODU4LmdpZicsICdmbGFnXzM4NTkuZ2lmJywgJ2ZsYWdfMzg0NC5naWYnLCAnZmxhZ18zODU5LmdpZiddLFxyXG4gICAgICAgICAgICAgICAgJ3NlJyA6IFsnZmxhZ180MjAyLmdpZicsICdmbGFnXzQyMDIuZ2lmJywgJ2ZsYWdfNDIwMi5naWYnLCAnZmxhZ180MjAyLmdpZicsICdmbGFnXzQyMDIuZ2lmJywgJ2ZsYWdfNDIwMi5naWYnXSxcclxuICAgICAgICAgICAgICAgICdubycgOiBbJ2ZsYWdfMzg1OS5naWYnLCAnZmxhZ18zODU5LmdpZicsICdmbGFnXzM4NTguZ2lmJywgJ2ZsYWdfMzg1OS5naWYnLCAnZmxhZ18zODQ0LmdpZicsICdmbGFnXzM4NTkuZ2lmJ10sXHJcbiAgICAgICAgICAgICAgICAnaXQnIDogWydmbGFnXzM4NTkuZ2lmJywgJ2ZsYWdfMzg1OS5naWYnLCAnZmxhZ18zODU4LmdpZicsICdmbGFnXzM4NTkuZ2lmJywgJ2ZsYWdfMzg0NC5naWYnLCAnZmxhZ18zODU5LmdpZiddLFxyXG4gICAgICAgICAgICAgICAgJ3B0JyA6IFsnZmxhZ18zODU5LmdpZicsICdmbGFnXzM4NTkuZ2lmJywgJ2ZsYWdfMzg1OC5naWYnLCAnZmxhZ18zODU5LmdpZicsICdmbGFnXzM4NDQuZ2lmJywgJ2ZsYWdfMzg1OS5naWYnXSxcclxuICAgICAgICAgICAgICAgICdkYScgOiBbJ2ZsYWdfMzk4Ny5naWYnLCAnZmxhZ18zOTg3LmdpZicsICdmbGFnXzM5ODcuZ2lmJywgJ2ZsYWdfMzk4Ny5naWYnLCAnZmxhZ18zOTg3LmdpZicsICdmbGFnXzM5ODcuZ2lmJ10sXHJcbiAgICAgICAgICAgICAgICAnZmknIDogWydmbGFnXzM4NTkuZ2lmJywgJ2ZsYWdfMzg1OS5naWYnLCAnZmxhZ18zODU4LmdpZicsICdmbGFnXzM4NTkuZ2lmJywgJ2ZsYWdfMzg0NC5naWYnLCAnZmxhZ18zODU5LmdpZiddLFxyXG4gICAgICAgICAgICAgICAgJ3J1JyA6IFsnZmxhZ18zODU5LmdpZicsICdmbGFnXzM4NTkuZ2lmJywgJ2ZsYWdfMzg1OC5naWYnLCAnZmxhZ18zODU5LmdpZicsICdmbGFnXzM4NDQuZ2lmJywgJ2ZsYWdfMzg1OS5naWYnXSxcclxuICAgICAgICAgICAgICAgICdubCcgOiBbJ2ZsYWdfMzg1OS5naWYnLCAnZmxhZ18zODU5LmdpZicsICdmbGFnXzM4NTguZ2lmJywgJ2ZsYWdfMzg1OS5naWYnLCAnZmxhZ18zODQ0LmdpZicsICdmbGFnXzM4NTkuZ2lmJ11cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIGxhbmdfY29kZSA9IHdlYkRhdGEubGFuZztcclxuICAgICAgICAgICAgJCgnLnRtcmV2aWV3cyBpbWcnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3NyYycsIHdlYkRhdGEuSU1HX1BBVEggKyAnZmxhZy8nICsgZmxhZ3NbbGFuZ19jb2RlXVtpbmRleF0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KSgpO1xyXG5cclxuICAgICAgICAvL+aPkuWFpeivhOiuuuaXtumXtFxyXG4gICAgICAgIGZ1bmN0aW9uIGdldE1heERheSh5LCBtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh5LCBtLCAwKS5nZXREYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoZnVuY3Rpb24gc2V0UmV2aWV3VGltZSgpIHtcclxuICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciB5ZWFyID0gMTkwMCArIG5vdy5nZXRZZWFyKCk7XHJcbiAgICAgICAgICAgIHZhciBtb250aCA9ICgxICsgbm93LmdldE1vbnRoKCkpIC8gMTAgPCAxID8gJzAnICsgKDEgKyBub3cuZ2V0TW9udGgoKSkgOiAoMSArIG5vdy5nZXRNb250aCgpKTtcclxuICAgICAgICAgICAgdmFyIHJldmlld190aW1lID0gW107XHJcbiAgICAgICAgICAgIHZhciBtYXhfZGF5ID0gZ2V0TWF4RGF5KHllYXIsIG1vbnRoIC0gMSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAyOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcl9tb250aCA9IChub3cuZ2V0RGF0ZSgpIC0gaSkgPCAxID8gbW9udGggLSAxIDogbW9udGg7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGltZSA9IChub3cuZ2V0RGF0ZSgpICsgKG5vdy5nZXREYXRlKCkgLSBpIDwgMSA/IG1heF9kYXkgOiAwKSAtIGkpICsgJyAvICcgKyByX21vbnRoICsgJyAvICcgKyB5ZWFyO1xyXG4gICAgICAgICAgICAgICAgcmV2aWV3X3RpbWUucHVzaCh0aW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IDIgfHwgaSA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV2aWV3X3RpbWUucHVzaCh0aW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCgnLnRtcmV2aWV3cyAudmlld3RpbWUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmh0bWwocmV2aWV3X3RpbWVbaW5kZXhdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgLy93aGVuIGNsaWNrIGEgbGluaywgb3BlbiB0aGUgcGFnZSBpbiBhcyBuZXcgd2luZG93XHJcbiAgICAgICAgcmVxdWlyZSgnLi4vY29tbW9uL29wZW53aW4nKTtcclxuICAgIH07XHJcblxyXG4gICAgZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vdG8gZGV0ZXJtaW5lIHdoaWNoIGNvZGUgdG8gdGFrZSBlZmZlY3RcclxuICAgICAgICB2YXIgcGFnZV9pZCA9IHBhZ2VEYXRhICYmIHBhZ2VEYXRhLnBhZ2VfaWQgPyBwYWdlRGF0YS5wYWdlX2lkIDogJyc7XHJcblxyXG4gICAgICAgIC8vIFRlc3RpbW9uaWFsc1xyXG4gICAgICAgIGlmIChwYWdlX2lkID09IDMgJiYgJCgnLnRlc3Rpb21vbmlhbHMnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGluaXRfdGVzdGlvbW9uaWFscygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuLy99KTtcclxuIl19
},{"../common/openwin":1}],7:[function(require,module,exports){
module.exports = require('./js')

},{"./js":10}],8:[function(require,module,exports){
/*
 * File: iframeResizer.contentWindow.js
 * Desc: Include this file in any page being loaded into an iframe
 *       to force the iframe to resize to the content size.
 * Requires: iframeResizer.js on host page.
 * Doc: https://github.com/davidjbradshaw/iframe-resizer
 * Author: David J. Bradshaw - dave@bradshaw.net
 *
 */

// eslint-disable-next-line sonarjs/cognitive-complexity, no-shadow-restricted-names
;(function (undefined) {
  if (typeof window === 'undefined') return // don't run for server side render

  var autoResize = true,
    base = 10,
    bodyBackground = '',
    bodyMargin = 0,
    bodyMarginStr = '',
    bodyObserver = null,
    bodyPadding = '',
    calculateWidth = false,
    doubleEventList = { resize: 1, click: 1 },
    eventCancelTimer = 128,
    firstRun = true,
    height = 1,
    heightCalcModeDefault = 'bodyOffset',
    heightCalcMode = heightCalcModeDefault,
    initLock = true,
    initMsg = '',
    inPageLinks = {},
    interval = 32,
    intervalTimer = null,
    logging = false,
    mouseEvents = false,
    msgID = '[iFrameSizer]', // Must match host page msg ID
    msgIdLen = msgID.length,
    myID = '',
    resetRequiredMethods = {
      max: 1,
      min: 1,
      bodyScroll: 1,
      documentElementScroll: 1
    },
    resizeFrom = 'child',
    sendPermit = true,
    target = window.parent,
    targetOriginDefault = '*',
    tolerance = 0,
    triggerLocked = false,
    triggerLockedTimer = null,
    throttledTimer = 16,
    width = 1,
    widthCalcModeDefault = 'scroll',
    widthCalcMode = widthCalcModeDefault,
    win = window,
    onMessage = function () {
      warn('onMessage function not defined')
    },
    onReady = function () {},
    onPageInfo = function () {},
    customCalcMethods = {
      height: function () {
        warn('Custom height calculation function not defined')
        return document.documentElement.offsetHeight
      },
      width: function () {
        warn('Custom width calculation function not defined')
        return document.body.scrollWidth
      }
    },
    eventHandlersByName = {},
    passiveSupported = false

  function noop() {}

  try {
    var options = Object.create(
      {},
      {
        passive: {
          get: function () {
            passiveSupported = true
          }
        }
      }
    )
    window.addEventListener('test', noop, options)
    window.removeEventListener('test', noop, options)
  } catch (error) {
    /* */
  }

  function addEventListener(el, evt, func, options) {
    el.addEventListener(evt, func, passiveSupported ? options || {} : false)
  }

  function removeEventListener(el, evt, func) {
    el.removeEventListener(evt, func, false)
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  // Based on underscore.js
  function throttle(func) {
    var context,
      args,
      result,
      timeout = null,
      previous = 0,
      later = function () {
        previous = Date.now()
        timeout = null
        result = func.apply(context, args)
        if (!timeout) {
          // eslint-disable-next-line no-multi-assign
          context = args = null
        }
      }

    return function () {
      var now = Date.now()

      if (!previous) {
        previous = now
      }

      var remaining = throttledTimer - (now - previous)

      context = this
      args = arguments

      if (remaining <= 0 || remaining > throttledTimer) {
        if (timeout) {
          clearTimeout(timeout)
          timeout = null
        }

        previous = now
        result = func.apply(context, args)

        if (!timeout) {
          // eslint-disable-next-line no-multi-assign
          context = args = null
        }
      } else if (!timeout) {
        timeout = setTimeout(later, remaining)
      }

      return result
    }
  }

  function formatLogMsg(msg) {
    return msgID + '[' + myID + '] ' + msg
  }

  function log(msg) {
    if (logging && 'object' === typeof window.console) {
      // eslint-disable-next-line no-console
      console.log(formatLogMsg(msg))
    }
  }

  function warn(msg) {
    if ('object' === typeof window.console) {
      // eslint-disable-next-line no-console
      console.warn(formatLogMsg(msg))
    }
  }

  function init() {
    readDataFromParent()
    log('Initialising iFrame (' + window.location.href + ')')
    readDataFromPage()
    setMargin()
    setBodyStyle('background', bodyBackground)
    setBodyStyle('padding', bodyPadding)
    injectClearFixIntoBodyElement()
    checkHeightMode()
    checkWidthMode()
    stopInfiniteResizingOfIFrame()
    setupPublicMethods()
    setupMouseEvents()
    startEventListeners()
    inPageLinks = setupInPageLinks()
    sendSize('init', 'Init message from host page')
    onReady()
  }

  function readDataFromParent() {
    function strBool(str) {
      return 'true' === str
    }

    var data = initMsg.substr(msgIdLen).split(':')

    myID = data[0]
    bodyMargin = undefined !== data[1] ? Number(data[1]) : bodyMargin // For V1 compatibility
    calculateWidth = undefined !== data[2] ? strBool(data[2]) : calculateWidth
    logging = undefined !== data[3] ? strBool(data[3]) : logging
    interval = undefined !== data[4] ? Number(data[4]) : interval
    autoResize = undefined !== data[6] ? strBool(data[6]) : autoResize
    bodyMarginStr = data[7]
    heightCalcMode = undefined !== data[8] ? data[8] : heightCalcMode
    bodyBackground = data[9]
    bodyPadding = data[10]
    tolerance = undefined !== data[11] ? Number(data[11]) : tolerance
    inPageLinks.enable = undefined !== data[12] ? strBool(data[12]) : false
    resizeFrom = undefined !== data[13] ? data[13] : resizeFrom
    widthCalcMode = undefined !== data[14] ? data[14] : widthCalcMode
    mouseEvents = undefined !== data[15] ? Boolean(data[15]) : mouseEvents
  }

  function depricate(key) {
    var splitName = key.split('Callback')

    if (splitName.length === 2) {
      var name =
        'on' + splitName[0].charAt(0).toUpperCase() + splitName[0].slice(1)
      this[name] = this[key]
      delete this[key]
      warn(
        "Deprecated: '" +
          key +
          "' has been renamed '" +
          name +
          "'. The old method will be removed in the next major version."
      )
    }
  }

  function readDataFromPage() {
    function readData() {
      var data = window.iFrameResizer

      log('Reading data from page: ' + JSON.stringify(data))
      Object.keys(data).forEach(depricate, data)

      onMessage = 'onMessage' in data ? data.onMessage : onMessage
      onReady = 'onReady' in data ? data.onReady : onReady
      targetOriginDefault =
        'targetOrigin' in data ? data.targetOrigin : targetOriginDefault
      heightCalcMode =
        'heightCalculationMethod' in data
          ? data.heightCalculationMethod
          : heightCalcMode
      widthCalcMode =
        'widthCalculationMethod' in data
          ? data.widthCalculationMethod
          : widthCalcMode
    }

    function setupCustomCalcMethods(calcMode, calcFunc) {
      if ('function' === typeof calcMode) {
        log('Setup custom ' + calcFunc + 'CalcMethod')
        customCalcMethods[calcFunc] = calcMode
        calcMode = 'custom'
      }

      return calcMode
    }

    if (
      'iFrameResizer' in window &&
      Object === window.iFrameResizer.constructor
    ) {
      readData()
      heightCalcMode = setupCustomCalcMethods(heightCalcMode, 'height')
      widthCalcMode = setupCustomCalcMethods(widthCalcMode, 'width')
    }

    log('TargetOrigin for parent set to: ' + targetOriginDefault)
  }

  function chkCSS(attr, value) {
    if (-1 !== value.indexOf('-')) {
      warn('Negative CSS value ignored for ' + attr)
      value = ''
    }
    return value
  }

  function setBodyStyle(attr, value) {
    if (undefined !== value && '' !== value && 'null' !== value) {
      document.body.style[attr] = value
      log('Body ' + attr + ' set to "' + value + '"')
    }
  }

  function setMargin() {
    // If called via V1 script, convert bodyMargin from int to str
    if (undefined === bodyMarginStr) {
      bodyMarginStr = bodyMargin + 'px'
    }

    setBodyStyle('margin', chkCSS('margin', bodyMarginStr))
  }

  function stopInfiniteResizingOfIFrame() {
    document.documentElement.style.height = ''
    document.body.style.height = ''
    log('HTML & body height set to "auto"')
  }

  function manageTriggerEvent(options) {
    var listener = {
      add: function (eventName) {
        function handleEvent() {
          sendSize(options.eventName, options.eventType)
        }

        eventHandlersByName[eventName] = handleEvent

        addEventListener(window, eventName, handleEvent, { passive: true })
      },
      remove: function (eventName) {
        var handleEvent = eventHandlersByName[eventName]
        delete eventHandlersByName[eventName]

        removeEventListener(window, eventName, handleEvent)
      }
    }

    if (options.eventNames && Array.prototype.map) {
      options.eventName = options.eventNames[0]
      options.eventNames.map(listener[options.method])
    } else {
      listener[options.method](options.eventName)
    }

    log(
      capitalizeFirstLetter(options.method) +
        ' event listener: ' +
        options.eventType
    )
  }

  function manageEventListeners(method) {
    manageTriggerEvent({
      method: method,
      eventType: 'Animation Start',
      eventNames: ['animationstart', 'webkitAnimationStart']
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Animation Iteration',
      eventNames: ['animationiteration', 'webkitAnimationIteration']
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Animation End',
      eventNames: ['animationend', 'webkitAnimationEnd']
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Input',
      eventName: 'input'
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Mouse Up',
      eventName: 'mouseup'
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Mouse Down',
      eventName: 'mousedown'
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Orientation Change',
      eventName: 'orientationchange'
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Print',
      eventName: ['afterprint', 'beforeprint']
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Ready State Change',
      eventName: 'readystatechange'
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Touch Start',
      eventName: 'touchstart'
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Touch End',
      eventName: 'touchend'
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Touch Cancel',
      eventName: 'touchcancel'
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Transition Start',
      eventNames: [
        'transitionstart',
        'webkitTransitionStart',
        'MSTransitionStart',
        'oTransitionStart',
        'otransitionstart'
      ]
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Transition Iteration',
      eventNames: [
        'transitioniteration',
        'webkitTransitionIteration',
        'MSTransitionIteration',
        'oTransitionIteration',
        'otransitioniteration'
      ]
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Transition End',
      eventNames: [
        'transitionend',
        'webkitTransitionEnd',
        'MSTransitionEnd',
        'oTransitionEnd',
        'otransitionend'
      ]
    })
    if ('child' === resizeFrom) {
      manageTriggerEvent({
        method: method,
        eventType: 'IFrame Resized',
        eventName: 'resize'
      })
    }
  }

  function checkCalcMode(calcMode, calcModeDefault, modes, type) {
    if (calcModeDefault !== calcMode) {
      if (!(calcMode in modes)) {
        warn(
          calcMode + ' is not a valid option for ' + type + 'CalculationMethod.'
        )
        calcMode = calcModeDefault
      }
      log(type + ' calculation method set to "' + calcMode + '"')
    }

    return calcMode
  }

  function checkHeightMode() {
    heightCalcMode = checkCalcMode(
      heightCalcMode,
      heightCalcModeDefault,
      getHeight,
      'height'
    )
  }

  function checkWidthMode() {
    widthCalcMode = checkCalcMode(
      widthCalcMode,
      widthCalcModeDefault,
      getWidth,
      'width'
    )
  }

  function startEventListeners() {
    if (true === autoResize) {
      manageEventListeners('add')
      setupMutationObserver()
    } else {
      log('Auto Resize disabled')
    }
  }

  //   function stopMsgsToParent() {
  //     log('Disable outgoing messages')
  //     sendPermit = false
  //   }

  //   function removeMsgListener() {
  //     log('Remove event listener: Message')
  //     removeEventListener(window, 'message', receiver)
  //   }

  function disconnectMutationObserver() {
    if (null !== bodyObserver) {
      /* istanbul ignore next */ // Not testable in PhantonJS
      bodyObserver.disconnect()
    }
  }

  function stopEventListeners() {
    manageEventListeners('remove')
    disconnectMutationObserver()
    clearInterval(intervalTimer)
  }

  //   function teardown() {
  //     stopMsgsToParent()
  //     removeMsgListener()
  //     if (true === autoResize) stopEventListeners()
  //   }

  function injectClearFixIntoBodyElement() {
    var clearFix = document.createElement('div')
    clearFix.style.clear = 'both'
    // Guard against the following having been globally redefined in CSS.
    clearFix.style.display = 'block'
    clearFix.style.height = '0'
    document.body.appendChild(clearFix)
  }

  function setupInPageLinks() {
    function getPagePosition() {
      return {
        x:
          window.pageXOffset !== undefined
            ? window.pageXOffset
            : document.documentElement.scrollLeft,
        y:
          window.pageYOffset !== undefined
            ? window.pageYOffset
            : document.documentElement.scrollTop
      }
    }

    function getElementPosition(el) {
      var elPosition = el.getBoundingClientRect(),
        pagePosition = getPagePosition()

      return {
        x: parseInt(elPosition.left, 10) + parseInt(pagePosition.x, 10),
        y: parseInt(elPosition.top, 10) + parseInt(pagePosition.y, 10)
      }
    }

    function findTarget(location) {
      function jumpToTarget(target) {
        var jumpPosition = getElementPosition(target)

        log(
          'Moving to in page link (#' +
            hash +
            ') at x: ' +
            jumpPosition.x +
            ' y: ' +
            jumpPosition.y
        )
        sendMsg(jumpPosition.y, jumpPosition.x, 'scrollToOffset') // X&Y reversed at sendMsg uses height/width
      }

      var hash = location.split('#')[1] || location, // Remove # if present
        hashData = decodeURIComponent(hash),
        target =
          document.getElementById(hashData) ||
          document.getElementsByName(hashData)[0]

      if (undefined !== target) {
        jumpToTarget(target)
      } else {
        log(
          'In page link (#' +
            hash +
            ') not found in iFrame, so sending to parent'
        )
        sendMsg(0, 0, 'inPageLink', '#' + hash)
      }
    }

    function checkLocationHash() {
      var hash = window.location.hash
      var href = window.location.href

      if ('' !== hash && '#' !== hash) {
        findTarget(href)
      }
    }

    function bindAnchors() {
      function setupLink(el) {
        function linkClicked(e) {
          e.preventDefault()

          /* jshint validthis:true */
          findTarget(this.getAttribute('href'))
        }

        if ('#' !== el.getAttribute('href')) {
          addEventListener(el, 'click', linkClicked)
        }
      }

      Array.prototype.forEach.call(
        document.querySelectorAll('a[href^="#"]'),
        setupLink
      )
    }

    function bindLocationHash() {
      addEventListener(window, 'hashchange', checkLocationHash)
    }

    function initCheck() {
      // Check if page loaded with location hash after init resize
      setTimeout(checkLocationHash, eventCancelTimer)
    }

    function enableInPageLinks() {
      /* istanbul ignore else */ // Not testable in phantonJS
      if (Array.prototype.forEach && document.querySelectorAll) {
        log('Setting up location.hash handlers')
        bindAnchors()
        bindLocationHash()
        initCheck()
      } else {
        warn(
          'In page linking not fully supported in this browser! (See README.md for IE8 workaround)'
        )
      }
    }

    if (inPageLinks.enable) {
      enableInPageLinks()
    } else {
      log('In page linking not enabled')
    }

    return {
      findTarget: findTarget
    }
  }

  function setupMouseEvents() {
    if (mouseEvents !== true) return

    function sendMouse(e) {
      sendMsg(0, 0, e.type, e.screenY + ':' + e.screenX)
    }

    function addMouseListener(evt, name) {
      log('Add event listener: ' + name)
      addEventListener(window.document, evt, sendMouse)
    }

    addMouseListener('mouseenter', 'Mouse Enter')
    addMouseListener('mouseleave', 'Mouse Leave')
  }

  function setupPublicMethods() {
    log('Enable public methods')

    win.parentIFrame = {
      autoResize: function autoResizeF(resize) {
        if (true === resize && false === autoResize) {
          autoResize = true
          startEventListeners()
        } else if (false === resize && true === autoResize) {
          autoResize = false
          stopEventListeners()
        }
        sendMsg(0, 0, 'autoResize', JSON.stringify(autoResize))
        return autoResize
      },

      close: function closeF() {
        sendMsg(0, 0, 'close')
        // teardown()
      },

      getId: function getIdF() {
        return myID
      },

      getPageInfo: function getPageInfoF(callback) {
        if ('function' === typeof callback) {
          onPageInfo = callback
          sendMsg(0, 0, 'pageInfo')
        } else {
          onPageInfo = function () {}
          sendMsg(0, 0, 'pageInfoStop')
        }
      },

      moveToAnchor: function moveToAnchorF(hash) {
        inPageLinks.findTarget(hash)
      },

      reset: function resetF() {
        resetIFrame('parentIFrame.reset')
      },

      scrollTo: function scrollToF(x, y) {
        sendMsg(y, x, 'scrollTo') // X&Y reversed at sendMsg uses height/width
      },

      scrollToOffset: function scrollToF(x, y) {
        sendMsg(y, x, 'scrollToOffset') // X&Y reversed at sendMsg uses height/width
      },

      sendMessage: function sendMessageF(msg, targetOrigin) {
        sendMsg(0, 0, 'message', JSON.stringify(msg), targetOrigin)
      },

      setHeightCalculationMethod: function setHeightCalculationMethodF(
        heightCalculationMethod
      ) {
        heightCalcMode = heightCalculationMethod
        checkHeightMode()
      },

      setWidthCalculationMethod: function setWidthCalculationMethodF(
        widthCalculationMethod
      ) {
        widthCalcMode = widthCalculationMethod
        checkWidthMode()
      },

      setTargetOrigin: function setTargetOriginF(targetOrigin) {
        log('Set targetOrigin: ' + targetOrigin)
        targetOriginDefault = targetOrigin
      },

      size: function sizeF(customHeight, customWidth) {
        var valString =
          '' + (customHeight || '') + (customWidth ? ',' + customWidth : '')
        sendSize(
          'size',
          'parentIFrame.size(' + valString + ')',
          customHeight,
          customWidth
        )
      }
    }
  }

  function initInterval() {
    if (0 !== interval) {
      log('setInterval: ' + interval + 'ms')
      intervalTimer = setInterval(function () {
        sendSize('interval', 'setInterval: ' + interval)
      }, Math.abs(interval))
    }
  }

  // Not testable in PhantomJS
  /* istanbul ignore next */
  function setupBodyMutationObserver() {
    function addImageLoadListners(mutation) {
      function addImageLoadListener(element) {
        if (false === element.complete) {
          log('Attach listeners to ' + element.src)
          element.addEventListener('load', imageLoaded, false)
          element.addEventListener('error', imageError, false)
          elements.push(element)
        }
      }

      if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
        addImageLoadListener(mutation.target)
      } else if (mutation.type === 'childList') {
        Array.prototype.forEach.call(
          mutation.target.querySelectorAll('img'),
          addImageLoadListener
        )
      }
    }

    function removeFromArray(element) {
      elements.splice(elements.indexOf(element), 1)
    }

    function removeImageLoadListener(element) {
      log('Remove listeners from ' + element.src)
      element.removeEventListener('load', imageLoaded, false)
      element.removeEventListener('error', imageError, false)
      removeFromArray(element)
    }

    function imageEventTriggered(event, type, typeDesc) {
      removeImageLoadListener(event.target)
      sendSize(type, typeDesc + ': ' + event.target.src)
    }

    function imageLoaded(event) {
      imageEventTriggered(event, 'imageLoad', 'Image loaded')
    }

    function imageError(event) {
      imageEventTriggered(event, 'imageLoadFailed', 'Image load failed')
    }

    function mutationObserved(mutations) {
      sendSize(
        'mutationObserver',
        'mutationObserver: ' + mutations[0].target + ' ' + mutations[0].type
      )

      // Deal with WebKit / Blink asyncing image loading when tags are injected into the page
      mutations.forEach(addImageLoadListners)
    }

    function createMutationObserver() {
      var target = document.querySelector('body'),
        config = {
          attributes: true,
          attributeOldValue: false,
          characterData: true,
          characterDataOldValue: false,
          childList: true,
          subtree: true
        }

      observer = new MutationObserver(mutationObserved)

      log('Create body MutationObserver')
      observer.observe(target, config)

      return observer
    }

    var elements = [],
      MutationObserver =
        window.MutationObserver || window.WebKitMutationObserver,
      observer = createMutationObserver()

    return {
      disconnect: function () {
        if ('disconnect' in observer) {
          log('Disconnect body MutationObserver')
          observer.disconnect()
          elements.forEach(removeImageLoadListener)
        }
      }
    }
  }

  function setupMutationObserver() {
    var forceIntervalTimer = 0 > interval

    // Not testable in PhantomJS
    /* istanbul ignore if */ if (
      window.MutationObserver ||
      window.WebKitMutationObserver
    ) {
      if (forceIntervalTimer) {
        initInterval()
      } else {
        bodyObserver = setupBodyMutationObserver()
      }
    } else {
      log('MutationObserver not supported in this browser!')
      initInterval()
    }
  }

  // document.documentElement.offsetHeight is not reliable, so
  // we have to jump through hoops to get a better value.
  function getComputedStyle(prop, el) {
    var retVal = 0
    el = el || document.body // Not testable in phantonJS

    retVal = document.defaultView.getComputedStyle(el, null)
    retVal = null !== retVal ? retVal[prop] : 0

    return parseInt(retVal, base)
  }

  function chkEventThottle(timer) {
    if (timer > throttledTimer / 2) {
      throttledTimer = 2 * timer
      log('Event throttle increased to ' + throttledTimer + 'ms')
    }
  }

  // Idea from https://github.com/guardian/iframe-messenger
  function getMaxElement(side, elements) {
    var elementsLength = elements.length,
      elVal = 0,
      maxVal = 0,
      Side = capitalizeFirstLetter(side),
      timer = Date.now()

    for (var i = 0; i < elementsLength; i++) {
      elVal =
        elements[i].getBoundingClientRect()[side] +
        getComputedStyle('margin' + Side, elements[i])
      if (elVal > maxVal) {
        maxVal = elVal
      }
    }

    timer = Date.now() - timer

    log('Parsed ' + elementsLength + ' HTML elements')
    log('Element position calculated in ' + timer + 'ms')

    chkEventThottle(timer)

    return maxVal
  }

  function getAllMeasurements(dimensions) {
    return [
      dimensions.bodyOffset(),
      dimensions.bodyScroll(),
      dimensions.documentElementOffset(),
      dimensions.documentElementScroll()
    ]
  }

  function getTaggedElements(side, tag) {
    function noTaggedElementsFound() {
      warn('No tagged elements (' + tag + ') found on page')
      return document.querySelectorAll('body *')
    }

    var elements = document.querySelectorAll('[' + tag + ']')

    if (elements.length === 0) noTaggedElementsFound()

    return getMaxElement(side, elements)
  }

  function getAllElements() {
    return document.querySelectorAll('body *')
  }

  var getHeight = {
      bodyOffset: function getBodyOffsetHeight() {
        return (
          document.body.offsetHeight +
          getComputedStyle('marginTop') +
          getComputedStyle('marginBottom')
        )
      },

      offset: function () {
        return getHeight.bodyOffset() // Backwards compatability
      },

      bodyScroll: function getBodyScrollHeight() {
        return document.body.scrollHeight
      },

      custom: function getCustomWidth() {
        return customCalcMethods.height()
      },

      documentElementOffset: function getDEOffsetHeight() {
        return document.documentElement.offsetHeight
      },

      documentElementScroll: function getDEScrollHeight() {
        return document.documentElement.scrollHeight
      },

      max: function getMaxHeight() {
        return Math.max.apply(null, getAllMeasurements(getHeight))
      },

      min: function getMinHeight() {
        return Math.min.apply(null, getAllMeasurements(getHeight))
      },

      grow: function growHeight() {
        return getHeight.max() // Run max without the forced downsizing
      },

      lowestElement: function getBestHeight() {
        return Math.max(
          getHeight.bodyOffset() || getHeight.documentElementOffset(),
          getMaxElement('bottom', getAllElements())
        )
      },

      taggedElement: function getTaggedElementsHeight() {
        return getTaggedElements('bottom', 'data-iframe-height')
      }
    },
    getWidth = {
      bodyScroll: function getBodyScrollWidth() {
        return document.body.scrollWidth
      },

      bodyOffset: function getBodyOffsetWidth() {
        return document.body.offsetWidth
      },

      custom: function getCustomWidth() {
        return customCalcMethods.width()
      },

      documentElementScroll: function getDEScrollWidth() {
        return document.documentElement.scrollWidth
      },

      documentElementOffset: function getDEOffsetWidth() {
        return document.documentElement.offsetWidth
      },

      scroll: function getMaxWidth() {
        return Math.max(getWidth.bodyScroll(), getWidth.documentElementScroll())
      },

      max: function getMaxWidth() {
        return Math.max.apply(null, getAllMeasurements(getWidth))
      },

      min: function getMinWidth() {
        return Math.min.apply(null, getAllMeasurements(getWidth))
      },

      rightMostElement: function rightMostElement() {
        return getMaxElement('right', getAllElements())
      },

      taggedElement: function getTaggedElementsWidth() {
        return getTaggedElements('right', 'data-iframe-width')
      }
    }

  function sizeIFrame(
    triggerEvent,
    triggerEventDesc,
    customHeight,
    customWidth
  ) {
    function resizeIFrame() {
      height = currentHeight
      width = currentWidth

      sendMsg(height, width, triggerEvent)
    }

    function isSizeChangeDetected() {
      function checkTolarance(a, b) {
        var retVal = Math.abs(a - b) <= tolerance
        return !retVal
      }

      currentHeight =
        undefined !== customHeight ? customHeight : getHeight[heightCalcMode]()
      currentWidth =
        undefined !== customWidth ? customWidth : getWidth[widthCalcMode]()

      return (
        checkTolarance(height, currentHeight) ||
        (calculateWidth && checkTolarance(width, currentWidth))
      )
    }

    function isForceResizableEvent() {
      return !(triggerEvent in { init: 1, interval: 1, size: 1 })
    }

    function isForceResizableCalcMode() {
      return (
        heightCalcMode in resetRequiredMethods ||
        (calculateWidth && widthCalcMode in resetRequiredMethods)
      )
    }

    function logIgnored() {
      log('No change in size detected')
    }

    function checkDownSizing() {
      if (isForceResizableEvent() && isForceResizableCalcMode()) {
        resetIFrame(triggerEventDesc)
      } else if (!(triggerEvent in { interval: 1 })) {
        logIgnored()
      }
    }

    var currentHeight, currentWidth

    if (isSizeChangeDetected() || 'init' === triggerEvent) {
      lockTrigger()
      resizeIFrame()
    } else {
      checkDownSizing()
    }
  }

  var sizeIFrameThrottled = throttle(sizeIFrame)

  function sendSize(triggerEvent, triggerEventDesc, customHeight, customWidth) {
    function recordTrigger() {
      if (!(triggerEvent in { reset: 1, resetPage: 1, init: 1 })) {
        log('Trigger event: ' + triggerEventDesc)
      }
    }

    function isDoubleFiredEvent() {
      return triggerLocked && triggerEvent in doubleEventList
    }

    if (!isDoubleFiredEvent()) {
      recordTrigger()
      if (triggerEvent === 'init') {
        sizeIFrame(triggerEvent, triggerEventDesc, customHeight, customWidth)
      } else {
        sizeIFrameThrottled(
          triggerEvent,
          triggerEventDesc,
          customHeight,
          customWidth
        )
      }
    } else {
      log('Trigger event cancelled: ' + triggerEvent)
    }
  }

  function lockTrigger() {
    if (!triggerLocked) {
      triggerLocked = true
      log('Trigger event lock on')
    }
    clearTimeout(triggerLockedTimer)
    triggerLockedTimer = setTimeout(function () {
      triggerLocked = false
      log('Trigger event lock off')
      log('--')
    }, eventCancelTimer)
  }

  function triggerReset(triggerEvent) {
    height = getHeight[heightCalcMode]()
    width = getWidth[widthCalcMode]()

    sendMsg(height, width, triggerEvent)
  }

  function resetIFrame(triggerEventDesc) {
    var hcm = heightCalcMode
    heightCalcMode = heightCalcModeDefault

    log('Reset trigger event: ' + triggerEventDesc)
    lockTrigger()
    triggerReset('reset')

    heightCalcMode = hcm
  }

  function sendMsg(height, width, triggerEvent, msg, targetOrigin) {
    function setTargetOrigin() {
      if (undefined === targetOrigin) {
        targetOrigin = targetOriginDefault
      } else {
        log('Message targetOrigin: ' + targetOrigin)
      }
    }

    function sendToParent() {
      var size = height + ':' + width,
        message =
          myID +
          ':' +
          size +
          ':' +
          triggerEvent +
          (undefined !== msg ? ':' + msg : '')

      log('Sending message to host page (' + message + ')')
      target.postMessage(msgID + message, targetOrigin)
    }

    if (true === sendPermit) {
      setTargetOrigin()
      sendToParent()
    }
  }

  function receiver(event) {
    var processRequestFromParent = {
      init: function initFromParent() {
        initMsg = event.data
        target = event.source

        init()
        firstRun = false
        setTimeout(function () {
          initLock = false
        }, eventCancelTimer)
      },

      reset: function resetFromParent() {
        if (!initLock) {
          log('Page size reset by host page')
          triggerReset('resetPage')
        } else {
          log('Page reset ignored by init')
        }
      },

      resize: function resizeFromParent() {
        sendSize('resizeParent', 'Parent window requested size check')
      },

      moveToAnchor: function moveToAnchorF() {
        inPageLinks.findTarget(getData())
      },
      inPageLink: function inPageLinkF() {
        this.moveToAnchor()
      }, // Backward compatability

      pageInfo: function pageInfoFromParent() {
        var msgBody = getData()
        log('PageInfoFromParent called from parent: ' + msgBody)
        onPageInfo(JSON.parse(msgBody))
        log(' --')
      },

      message: function messageFromParent() {
        var msgBody = getData()

        log('onMessage called from parent: ' + msgBody)
        // eslint-disable-next-line sonarjs/no-extra-arguments
        onMessage(JSON.parse(msgBody))
        log(' --')
      }
    }

    function isMessageForUs() {
      return msgID === ('' + event.data).substr(0, msgIdLen) // ''+ Protects against non-string messages
    }

    function getMessageType() {
      return event.data.split(']')[1].split(':')[0]
    }

    function getData() {
      return event.data.substr(event.data.indexOf(':') + 1)
    }

    function isMiddleTier() {
      return (
        (!(typeof module !== 'undefined' && module.exports) &&
          'iFrameResize' in window) ||
        ('jQuery' in window && 'iFrameResize' in window.jQuery.prototype)
      )
    }

    function isInitMsg() {
      // Test if this message is from a child below us. This is an ugly test, however, updating
      // the message format would break backwards compatibity.
      return event.data.split(':')[2] in { true: 1, false: 1 }
    }

    function callFromParent() {
      var messageType = getMessageType()

      if (messageType in processRequestFromParent) {
        processRequestFromParent[messageType]()
      } else if (!isMiddleTier() && !isInitMsg()) {
        warn('Unexpected message (' + event.data + ')')
      }
    }

    function processMessage() {
      if (false === firstRun) {
        callFromParent()
      } else if (isInitMsg()) {
        processRequestFromParent.init()
      } else {
        log(
          'Ignored message of type "' +
            getMessageType() +
            '". Received before initialization.'
        )
      }
    }

    if (isMessageForUs()) {
      processMessage()
    }
  }

  // Normally the parent kicks things off when it detects the iFrame has loaded.
  // If this script is async-loaded, then tell parent page to retry init.
  function chkLateLoaded() {
    if ('loading' !== document.readyState) {
      window.parent.postMessage('[iFrameResizerChild]Ready', '*')
    }
  }

  addEventListener(window, 'message', receiver)
  addEventListener(window, 'readystatechange', chkLateLoaded)
  chkLateLoaded()

  
})()

},{}],9:[function(require,module,exports){
/*
 * File: iframeResizer.js
 * Desc: Force iframes to size to content.
 * Requires: iframeResizer.contentWindow.js to be loaded into the target frame.
 * Doc: https://github.com/davidjbradshaw/iframe-resizer
 * Author: David J. Bradshaw - dave@bradshaw.net
 * Contributor: Jure Mav - jure.mav@gmail.com
 * Contributor: Reed Dadoune - reed@dadoune.com
 */

// eslint-disable-next-line sonarjs/cognitive-complexity, no-shadow-restricted-names
;(function (undefined) {
  if (typeof window === 'undefined') return // don't run for server side render

  var count = 0,
    logEnabled = false,
    hiddenCheckEnabled = false,
    msgHeader = 'message',
    msgHeaderLen = msgHeader.length,
    msgId = '[iFrameSizer]', // Must match iframe msg ID
    msgIdLen = msgId.length,
    pagePosition = null,
    requestAnimationFrame = window.requestAnimationFrame,
    resetRequiredMethods = {
      max: 1,
      scroll: 1,
      bodyScroll: 1,
      documentElementScroll: 1
    },
    settings = {},
    timer = null,
    defaults = {
      autoResize: true,
      bodyBackground: null,
      bodyMargin: null,
      bodyMarginV1: 8,
      bodyPadding: null,
      checkOrigin: true,
      inPageLinks: false,
      enablePublicMethods: true,
      heightCalculationMethod: 'bodyOffset',
      id: 'iFrameResizer',
      interval: 32,
      log: false,
      maxHeight: Infinity,
      maxWidth: Infinity,
      minHeight: 0,
      minWidth: 0,
      mouseEvents: true,
      resizeFrom: 'parent',
      scrolling: false,
      sizeHeight: true,
      sizeWidth: false,
      warningTimeout: 5000,
      tolerance: 0,
      widthCalculationMethod: 'scroll',
      onClose: function () {
        return true
      },
      onClosed: function () {},
      onInit: function () {},
      onMessage: function () {
        warn('onMessage function not defined')
      },
      onMouseEnter: function () {},
      onMouseLeave: function () {},
      onResized: function () {},
      onScroll: function () {
        return true
      }
    }

  function getMutationObserver() {
    return (
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    )
  }

  function addEventListener(el, evt, func) {
    el.addEventListener(evt, func, false)
  }

  function removeEventListener(el, evt, func) {
    el.removeEventListener(evt, func, false)
  }

  function setupRequestAnimationFrame() {
    var vendors = ['moz', 'webkit', 'o', 'ms']
    var x

    // Remove vendor prefixing if prefixed and break early if not
    for (x = 0; x < vendors.length && !requestAnimationFrame; x += 1) {
      requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
    }

    if (!requestAnimationFrame) {
      log('setup', 'RequestAnimationFrame not supported')
    } else {
      // Firefox extension content-scripts have a globalThis object that is not the same as window.
      // Binding `requestAnimationFrame` to window allows the function to work and prevents errors
      // being thrown when run in that context, and should be a no-op in every other context.
      requestAnimationFrame = requestAnimationFrame.bind(window)
    }
  }

  function getMyID(iframeId) {
    var retStr = 'Host page: ' + iframeId

    if (window.top !== window.self) {
      retStr =
        window.parentIFrame && window.parentIFrame.getId
          ? window.parentIFrame.getId() + ': ' + iframeId
          : 'Nested host page: ' + iframeId
    }

    return retStr
  }

  function formatLogHeader(iframeId) {
    return msgId + '[' + getMyID(iframeId) + ']'
  }

  function isLogEnabled(iframeId) {
    return settings[iframeId] ? settings[iframeId].log : logEnabled
  }

  function log(iframeId, msg) {
    output('log', iframeId, msg, isLogEnabled(iframeId))
  }

  function info(iframeId, msg) {
    output('info', iframeId, msg, isLogEnabled(iframeId))
  }

  function warn(iframeId, msg) {
    output('warn', iframeId, msg, true)
  }

  function output(type, iframeId, msg, enabled) {
    if (true === enabled && 'object' === typeof window.console) {
      // eslint-disable-next-line no-console
      console[type](formatLogHeader(iframeId), msg)
    }
  }

  function iFrameListener(event) {
    function resizeIFrame() {
      function resize() {
        setSize(messageData)
        setPagePosition(iframeId)
        on('onResized', messageData)
      }

      ensureInRange('Height')
      ensureInRange('Width')

      syncResize(resize, messageData, 'init')
    }

    function processMsg() {
      var data = msg.substr(msgIdLen).split(':')
      var height = data[1] ? parseInt(data[1], 10) : 0
      var iframe = settings[data[0]] && settings[data[0]].iframe
      var compStyle = getComputedStyle(iframe)

      return {
        iframe: iframe,
        id: data[0],
        height: height + getPaddingEnds(compStyle) + getBorderEnds(compStyle),
        width: data[2],
        type: data[3]
      }
    }

    function getPaddingEnds(compStyle) {
      if (compStyle.boxSizing !== 'border-box') {
        return 0
      }
      var top = compStyle.paddingTop ? parseInt(compStyle.paddingTop, 10) : 0
      var bot = compStyle.paddingBottom
        ? parseInt(compStyle.paddingBottom, 10)
        : 0
      return top + bot
    }

    function getBorderEnds(compStyle) {
      if (compStyle.boxSizing !== 'border-box') {
        return 0
      }
      var top = compStyle.borderTopWidth
        ? parseInt(compStyle.borderTopWidth, 10)
        : 0
      var bot = compStyle.borderBottomWidth
        ? parseInt(compStyle.borderBottomWidth, 10)
        : 0
      return top + bot
    }

    function ensureInRange(Dimension) {
      var max = Number(settings[iframeId]['max' + Dimension]),
        min = Number(settings[iframeId]['min' + Dimension]),
        dimension = Dimension.toLowerCase(),
        size = Number(messageData[dimension])

      log(iframeId, 'Checking ' + dimension + ' is in range ' + min + '-' + max)

      if (size < min) {
        size = min
        log(iframeId, 'Set ' + dimension + ' to min value')
      }

      if (size > max) {
        size = max
        log(iframeId, 'Set ' + dimension + ' to max value')
      }

      messageData[dimension] = '' + size
    }

    function isMessageFromIFrame() {
      function checkAllowedOrigin() {
        function checkList() {
          var i = 0,
            retCode = false

          log(
            iframeId,
            'Checking connection is from allowed list of origins: ' +
              checkOrigin
          )

          for (; i < checkOrigin.length; i++) {
            if (checkOrigin[i] === origin) {
              retCode = true
              break
            }
          }
          return retCode
        }

        function checkSingle() {
          var remoteHost = settings[iframeId] && settings[iframeId].remoteHost
          log(iframeId, 'Checking connection is from: ' + remoteHost)
          return origin === remoteHost
        }

        return checkOrigin.constructor === Array ? checkList() : checkSingle()
      }

      var origin = event.origin,
        checkOrigin = settings[iframeId] && settings[iframeId].checkOrigin

      if (checkOrigin && '' + origin !== 'null' && !checkAllowedOrigin()) {
        throw new Error(
          'Unexpected message received from: ' +
            origin +
            ' for ' +
            messageData.iframe.id +
            '. Message was: ' +
            event.data +
            '. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.'
        )
      }

      return true
    }

    function isMessageForUs() {
      return (
        msgId === ('' + msg).substr(0, msgIdLen) &&
        msg.substr(msgIdLen).split(':')[0] in settings
      ) // ''+Protects against non-string msg
    }

    function isMessageFromMetaParent() {
      // Test if this message is from a parent above us. This is an ugly test, however, updating
      // the message format would break backwards compatibity.
      var retCode = messageData.type in { true: 1, false: 1, undefined: 1 }

      if (retCode) {
        log(iframeId, 'Ignoring init message from meta parent page')
      }

      return retCode
    }

    function getMsgBody(offset) {
      return msg.substr(msg.indexOf(':') + msgHeaderLen + offset)
    }

    function forwardMsgFromIFrame(msgBody) {
      log(
        iframeId,
        'onMessage passed: {iframe: ' +
          messageData.iframe.id +
          ', message: ' +
          msgBody +
          '}'
      )

      on('onMessage', {
        iframe: messageData.iframe,
        message: JSON.parse(msgBody)
      })

      log(iframeId, '--')
    }

    function getPageInfo() {
      var bodyPosition = document.body.getBoundingClientRect(),
        iFramePosition = messageData.iframe.getBoundingClientRect()

      return JSON.stringify({
        iframeHeight: iFramePosition.height,
        iframeWidth: iFramePosition.width,
        clientHeight: Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        ),
        clientWidth: Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        ),
        offsetTop: parseInt(iFramePosition.top - bodyPosition.top, 10),
        offsetLeft: parseInt(iFramePosition.left - bodyPosition.left, 10),
        scrollTop: window.pageYOffset,
        scrollLeft: window.pageXOffset,
        documentHeight: document.documentElement.clientHeight,
        documentWidth: document.documentElement.clientWidth,
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
      })
    }

    function sendPageInfoToIframe(iframe, iframeId) {
      function debouncedTrigger() {
        trigger('Send Page Info', 'pageInfo:' + getPageInfo(), iframe, iframeId)
      }
      debounceFrameEvents(debouncedTrigger, 32, iframeId)
    }

    function startPageInfoMonitor() {
      function setListener(type, func) {
        function sendPageInfo() {
          if (settings[id]) {
            sendPageInfoToIframe(settings[id].iframe, id)
          } else {
            stop()
          }
        }

        ;['scroll', 'resize'].forEach(function (evt) {
          log(id, type + evt + ' listener for sendPageInfo')
          func(window, evt, sendPageInfo)
        })
      }

      function stop() {
        setListener('Remove ', removeEventListener)
      }

      function start() {
        setListener('Add ', addEventListener)
      }

      var id = iframeId // Create locally scoped copy of iFrame ID

      start()

      if (settings[id]) {
        settings[id].stopPageInfo = stop
      }
    }

    function stopPageInfoMonitor() {
      if (settings[iframeId] && settings[iframeId].stopPageInfo) {
        settings[iframeId].stopPageInfo()
        delete settings[iframeId].stopPageInfo
      }
    }

    function checkIFrameExists() {
      var retBool = true

      if (null === messageData.iframe) {
        warn(iframeId, 'IFrame (' + messageData.id + ') not found')
        retBool = false
      }
      return retBool
    }

    function getElementPosition(target) {
      var iFramePosition = target.getBoundingClientRect()

      getPagePosition(iframeId)

      return {
        x: Math.floor(Number(iFramePosition.left) + Number(pagePosition.x)),
        y: Math.floor(Number(iFramePosition.top) + Number(pagePosition.y))
      }
    }

    function scrollRequestFromChild(addOffset) {
      /* istanbul ignore next */ // Not testable in Karma
      function reposition() {
        pagePosition = newPosition
        scrollTo()
        log(iframeId, '--')
      }

      function calcOffset() {
        return {
          x: Number(messageData.width) + offset.x,
          y: Number(messageData.height) + offset.y
        }
      }

      function scrollParent() {
        if (window.parentIFrame) {
          window.parentIFrame['scrollTo' + (addOffset ? 'Offset' : '')](
            newPosition.x,
            newPosition.y
          )
        } else {
          warn(
            iframeId,
            'Unable to scroll to requested position, window.parentIFrame not found'
          )
        }
      }

      var offset = addOffset
          ? getElementPosition(messageData.iframe)
          : { x: 0, y: 0 },
        newPosition = calcOffset()

      log(
        iframeId,
        'Reposition requested from iFrame (offset x:' +
          offset.x +
          ' y:' +
          offset.y +
          ')'
      )

      if (window.top !== window.self) {
        scrollParent()
      } else {
        reposition()
      }
    }

    function scrollTo() {
      if (false !== on('onScroll', pagePosition)) {
        setPagePosition(iframeId)
      } else {
        unsetPagePosition()
      }
    }

    function findTarget(location) {
      function jumpToTarget() {
        var jumpPosition = getElementPosition(target)

        log(
          iframeId,
          'Moving to in page link (#' +
            hash +
            ') at x: ' +
            jumpPosition.x +
            ' y: ' +
            jumpPosition.y
        )
        pagePosition = {
          x: jumpPosition.x,
          y: jumpPosition.y
        }

        scrollTo()
        log(iframeId, '--')
      }

      function jumpToParent() {
        if (window.parentIFrame) {
          window.parentIFrame.moveToAnchor(hash)
        } else {
          log(
            iframeId,
            'In page link #' +
              hash +
              ' not found and window.parentIFrame not found'
          )
        }
      }

      var hash = location.split('#')[1] || '',
        hashData = decodeURIComponent(hash),
        target =
          document.getElementById(hashData) ||
          document.getElementsByName(hashData)[0]

      if (target) {
        jumpToTarget()
      } else if (window.top !== window.self) {
        jumpToParent()
      } else {
        log(iframeId, 'In page link #' + hash + ' not found')
      }
    }

    function onMouse(event) {
      var mousePos = {}

      if (Number(messageData.width) === 0 && Number(messageData.height) === 0) {
        var data = getMsgBody(9).split(':')
        mousePos = {
          x: data[1],
          y: data[0]
        }
      } else {
        mousePos = {
          x: messageData.width,
          y: messageData.height
        }
      }

      on(event, {
        iframe: messageData.iframe,
        screenX: Number(mousePos.x),
        screenY: Number(mousePos.y),
        type: messageData.type
      })
    }

    function on(funcName, val) {
      return chkEvent(iframeId, funcName, val)
    }

    function actionMsg() {
      if (settings[iframeId] && settings[iframeId].firstRun) firstRun()

      switch (messageData.type) {
        case 'close':
          closeIFrame(messageData.iframe)
          break

        case 'message':
          forwardMsgFromIFrame(getMsgBody(6))
          break

        case 'mouseenter':
          onMouse('onMouseEnter')
          break

        case 'mouseleave':
          onMouse('onMouseLeave')
          break

        case 'autoResize':
          settings[iframeId].autoResize = JSON.parse(getMsgBody(9))
          break

        case 'scrollTo':
          scrollRequestFromChild(false)
          break

        case 'scrollToOffset':
          scrollRequestFromChild(true)
          break

        case 'pageInfo':
          sendPageInfoToIframe(
            settings[iframeId] && settings[iframeId].iframe,
            iframeId
          )
          startPageInfoMonitor()
          break

        case 'pageInfoStop':
          stopPageInfoMonitor()
          break

        case 'inPageLink':
          findTarget(getMsgBody(9))
          break

        case 'reset':
          resetIFrame(messageData)
          break

        case 'init':
          resizeIFrame()
          on('onInit', messageData.iframe)
          break

        default:
          if (
            Number(messageData.width) === 0 &&
            Number(messageData.height) === 0
          ) {
            warn(
              'Unsupported message received (' +
                messageData.type +
                '), this is likely due to the iframe containing a later ' +
                'version of iframe-resizer than the parent page'
            )
          } else {
            resizeIFrame()
          }
      }
    }

    function hasSettings(iframeId) {
      var retBool = true

      if (!settings[iframeId]) {
        retBool = false
        warn(
          messageData.type +
            ' No settings for ' +
            iframeId +
            '. Message was: ' +
            msg
        )
      }

      return retBool
    }

    function iFrameReadyMsgReceived() {
      // eslint-disable-next-line no-restricted-syntax, guard-for-in
      for (var iframeId in settings) {
        trigger(
          'iFrame requested init',
          createOutgoingMsg(iframeId),
          settings[iframeId].iframe,
          iframeId
        )
      }
    }

    function firstRun() {
      if (settings[iframeId]) {
        settings[iframeId].firstRun = false
      }
    }

    var msg = event.data,
      messageData = {},
      iframeId = null

    if ('[iFrameResizerChild]Ready' === msg) {
      iFrameReadyMsgReceived()
    } else if (isMessageForUs()) {
      messageData = processMsg()
      iframeId = messageData.id
      if (settings[iframeId]) {
        settings[iframeId].loaded = true
      }

      if (!isMessageFromMetaParent() && hasSettings(iframeId)) {
        log(iframeId, 'Received: ' + msg)

        if (checkIFrameExists() && isMessageFromIFrame()) {
          actionMsg()
        }
      }
    } else {
      info(iframeId, 'Ignored: ' + msg)
    }
  }

  function chkEvent(iframeId, funcName, val) {
    var func = null,
      retVal = null

    if (settings[iframeId]) {
      func = settings[iframeId][funcName]

      if ('function' === typeof func) {
        retVal = func(val)
      } else {
        throw new TypeError(
          funcName + ' on iFrame[' + iframeId + '] is not a function'
        )
      }
    }

    return retVal
  }

  function removeIframeListeners(iframe) {
    var iframeId = iframe.id
    delete settings[iframeId]
  }

  function closeIFrame(iframe) {
    var iframeId = iframe.id
    if (chkEvent(iframeId, 'onClose', iframeId) === false) {
      log(iframeId, 'Close iframe cancelled by onClose event')
      return
    }
    log(iframeId, 'Removing iFrame: ' + iframeId)

    try {
      // Catch race condition error with React
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe)
      }
    } catch (error) {
      warn(error)
    }

    chkEvent(iframeId, 'onClosed', iframeId)
    log(iframeId, '--')
    removeIframeListeners(iframe)
  }

  function getPagePosition(iframeId) {
    if (null === pagePosition) {
      pagePosition = {
        x:
          window.pageXOffset !== undefined
            ? window.pageXOffset
            : document.documentElement.scrollLeft,
        y:
          window.pageYOffset !== undefined
            ? window.pageYOffset
            : document.documentElement.scrollTop
      }
      log(
        iframeId,
        'Get page position: ' + pagePosition.x + ',' + pagePosition.y
      )
    }
  }

  function setPagePosition(iframeId) {
    if (null !== pagePosition) {
      window.scrollTo(pagePosition.x, pagePosition.y)
      log(
        iframeId,
        'Set page position: ' + pagePosition.x + ',' + pagePosition.y
      )
      unsetPagePosition()
    }
  }

  function unsetPagePosition() {
    pagePosition = null
  }

  function resetIFrame(messageData) {
    function reset() {
      setSize(messageData)
      trigger('reset', 'reset', messageData.iframe, messageData.id)
    }

    log(
      messageData.id,
      'Size reset requested by ' +
        ('init' === messageData.type ? 'host page' : 'iFrame')
    )
    getPagePosition(messageData.id)
    syncResize(reset, messageData, 'reset')
  }

  function setSize(messageData) {
    function setDimension(dimension) {
      if (!messageData.id) {
        log('undefined', 'messageData id not set')
        return
      }
      messageData.iframe.style[dimension] = messageData[dimension] + 'px'
      log(
        messageData.id,
        'IFrame (' +
          iframeId +
          ') ' +
          dimension +
          ' set to ' +
          messageData[dimension] +
          'px'
      )
    }

    function chkZero(dimension) {
      // FireFox sets dimension of hidden iFrames to zero.
      // So if we detect that set up an event to check for
      // when iFrame becomes visible.

      /* istanbul ignore next */ // Not testable in PhantomJS
      if (!hiddenCheckEnabled && '0' === messageData[dimension]) {
        hiddenCheckEnabled = true
        log(iframeId, 'Hidden iFrame detected, creating visibility listener')
        fixHiddenIFrames()
      }
    }

    function processDimension(dimension) {
      setDimension(dimension)
      chkZero(dimension)
    }

    var iframeId = messageData.iframe.id

    if (settings[iframeId]) {
      if (settings[iframeId].sizeHeight) {
        processDimension('height')
      }
      if (settings[iframeId].sizeWidth) {
        processDimension('width')
      }
    }
  }

  function syncResize(func, messageData, doNotSync) {
    /* istanbul ignore if */ // Not testable in PhantomJS
    if (
      doNotSync !== messageData.type &&
      requestAnimationFrame &&
      // including check for jasmine because had trouble getting spy to work in unit test using requestAnimationFrame
      !window.jasmine
    ) {
      log(messageData.id, 'Requesting animation frame')
      requestAnimationFrame(func)
    } else {
      func()
    }
  }

  function trigger(calleeMsg, msg, iframe, id, noResponseWarning) {
    function postMessageToIFrame() {
      var target = settings[id] && settings[id].targetOrigin
      log(
        id,
        '[' +
          calleeMsg +
          '] Sending msg to iframe[' +
          id +
          '] (' +
          msg +
          ') targetOrigin: ' +
          target
      )
      iframe.contentWindow.postMessage(msgId + msg, target)
    }

    function iFrameNotFound() {
      warn(id, '[' + calleeMsg + '] IFrame(' + id + ') not found')
    }

    function chkAndSend() {
      if (
        iframe &&
        'contentWindow' in iframe &&
        null !== iframe.contentWindow
      ) {
        // Null test for PhantomJS
        postMessageToIFrame()
      } else {
        iFrameNotFound()
      }
    }

    function warnOnNoResponse() {
      function warning() {
        if (settings[id] && !settings[id].loaded && !errorShown) {
          errorShown = true
          warn(
            id,
            'IFrame has not responded within ' +
              settings[id].warningTimeout / 1000 +
              ' seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning.'
          )
        }
      }

      if (
        !!noResponseWarning &&
        settings[id] &&
        !!settings[id].warningTimeout
      ) {
        settings[id].msgTimeout = setTimeout(
          warning,
          settings[id].warningTimeout
        )
      }
    }

    var errorShown = false

    id = id || iframe.id

    if (settings[id]) {
      chkAndSend()
      warnOnNoResponse()
    }
  }

  function createOutgoingMsg(iframeId) {
    return (
      iframeId +
      ':' +
      settings[iframeId].bodyMarginV1 +
      ':' +
      settings[iframeId].sizeWidth +
      ':' +
      settings[iframeId].log +
      ':' +
      settings[iframeId].interval +
      ':' +
      settings[iframeId].enablePublicMethods +
      ':' +
      settings[iframeId].autoResize +
      ':' +
      settings[iframeId].bodyMargin +
      ':' +
      settings[iframeId].heightCalculationMethod +
      ':' +
      settings[iframeId].bodyBackground +
      ':' +
      settings[iframeId].bodyPadding +
      ':' +
      settings[iframeId].tolerance +
      ':' +
      settings[iframeId].inPageLinks +
      ':' +
      settings[iframeId].resizeFrom +
      ':' +
      settings[iframeId].widthCalculationMethod +
      ':' +
      settings[iframeId].mouseEvents
    )
  }

  function isNumber(value) {
    return typeof value === 'number'
  }

  function setupIFrame(iframe, options) {
    function setLimits() {
      function addStyle(style) {
        var styleValue = settings[iframeId][style]
        if (Infinity !== styleValue && 0 !== styleValue) {
          iframe.style[style] = isNumber(styleValue)
            ? styleValue + 'px'
            : styleValue
          log(iframeId, 'Set ' + style + ' = ' + iframe.style[style])
        }
      }

      function chkMinMax(dimension) {
        if (
          settings[iframeId]['min' + dimension] >
          settings[iframeId]['max' + dimension]
        ) {
          throw new Error(
            'Value for min' +
              dimension +
              ' can not be greater than max' +
              dimension
          )
        }
      }

      chkMinMax('Height')
      chkMinMax('Width')

      addStyle('maxHeight')
      addStyle('minHeight')
      addStyle('maxWidth')
      addStyle('minWidth')
    }

    function newId() {
      var id = (options && options.id) || defaults.id + count++
      if (null !== document.getElementById(id)) {
        id += count++
      }
      return id
    }

    function ensureHasId(iframeId) {
      if ('' === iframeId) {
        // eslint-disable-next-line no-multi-assign
        iframe.id = iframeId = newId()
        logEnabled = (options || {}).log
        log(
          iframeId,
          'Added missing iframe ID: ' + iframeId + ' (' + iframe.src + ')'
        )
      }

      return iframeId
    }

    function setScrolling() {
      log(
        iframeId,
        'IFrame scrolling ' +
          (settings[iframeId] && settings[iframeId].scrolling
            ? 'enabled'
            : 'disabled') +
          ' for ' +
          iframeId
      )
      iframe.style.overflow =
        false === (settings[iframeId] && settings[iframeId].scrolling)
          ? 'hidden'
          : 'auto'
      switch (settings[iframeId] && settings[iframeId].scrolling) {
        case 'omit':
          break

        case true:
          iframe.scrolling = 'yes'
          break

        case false:
          iframe.scrolling = 'no'
          break

        default:
          iframe.scrolling = settings[iframeId]
            ? settings[iframeId].scrolling
            : 'no'
      }
    }

    // The V1 iFrame script expects an int, where as in V2 expects a CSS
    // string value such as '1px 3em', so if we have an int for V2, set V1=V2
    // and then convert V2 to a string PX value.
    function setupBodyMarginValues() {
      if (
        'number' ===
          typeof (settings[iframeId] && settings[iframeId].bodyMargin) ||
        '0' === (settings[iframeId] && settings[iframeId].bodyMargin)
      ) {
        settings[iframeId].bodyMarginV1 = settings[iframeId].bodyMargin
        settings[iframeId].bodyMargin =
          '' + settings[iframeId].bodyMargin + 'px'
      }
    }

    function checkReset() {
      // Reduce scope of firstRun to function, because IE8's JS execution
      // context stack is borked and this value gets externally
      // changed midway through running this function!!!
      var firstRun = settings[iframeId] && settings[iframeId].firstRun,
        resetRequertMethod =
          settings[iframeId] &&
          settings[iframeId].heightCalculationMethod in resetRequiredMethods

      if (!firstRun && resetRequertMethod) {
        resetIFrame({ iframe: iframe, height: 0, width: 0, type: 'init' })
      }
    }

    function setupIFrameObject() {
      if (settings[iframeId]) {
        settings[iframeId].iframe.iFrameResizer = {
          close: closeIFrame.bind(null, settings[iframeId].iframe),

          removeListeners: removeIframeListeners.bind(
            null,
            settings[iframeId].iframe
          ),

          resize: trigger.bind(
            null,
            'Window resize',
            'resize',
            settings[iframeId].iframe
          ),

          moveToAnchor: function (anchor) {
            trigger(
              'Move to anchor',
              'moveToAnchor:' + anchor,
              settings[iframeId].iframe,
              iframeId
            )
          },

          sendMessage: function (message) {
            message = JSON.stringify(message)
            trigger(
              'Send Message',
              'message:' + message,
              settings[iframeId].iframe,
              iframeId
            )
          }
        }
      }
    }

    // We have to call trigger twice, as we can not be sure if all
    // iframes have completed loading when this code runs. The
    // event listener also catches the page changing in the iFrame.
    function init(msg) {
      function iFrameLoaded() {
        trigger('iFrame.onload', msg, iframe, undefined, true)
        checkReset()
      }

      function createDestroyObserver(MutationObserver) {
        if (!iframe.parentNode) {
          return
        }

        var destroyObserver = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            var removedNodes = Array.prototype.slice.call(mutation.removedNodes) // Transform NodeList into an Array
            removedNodes.forEach(function (removedNode) {
              if (removedNode === iframe) {
                closeIFrame(iframe)
              }
            })
          })
        })
        destroyObserver.observe(iframe.parentNode, {
          childList: true
        })
      }

      var MutationObserver = getMutationObserver()
      if (MutationObserver) {
        createDestroyObserver(MutationObserver)
      }

      addEventListener(iframe, 'load', iFrameLoaded)
      trigger('init', msg, iframe, undefined, true)
    }

    function checkOptions(options) {
      if ('object' !== typeof options) {
        throw new TypeError('Options is not an object')
      }
    }

    function copyOptions(options) {
      // eslint-disable-next-line no-restricted-syntax
      for (var option in defaults) {
        if (Object.prototype.hasOwnProperty.call(defaults, option)) {
          settings[iframeId][option] = Object.prototype.hasOwnProperty.call(
            options,
            option
          )
            ? options[option]
            : defaults[option]
        }
      }
    }

    function getTargetOrigin(remoteHost) {
      return '' === remoteHost ||
        null !== remoteHost.match(/^(about:blank|javascript:|file:\/\/)/)
        ? '*'
        : remoteHost
    }

    function depricate(key) {
      var splitName = key.split('Callback')

      if (splitName.length === 2) {
        var name =
          'on' + splitName[0].charAt(0).toUpperCase() + splitName[0].slice(1)
        this[name] = this[key]
        delete this[key]
        warn(
          iframeId,
          "Deprecated: '" +
            key +
            "' has been renamed '" +
            name +
            "'. The old method will be removed in the next major version."
        )
      }
    }

    function processOptions(options) {
      options = options || {}
      settings[iframeId] = {
        firstRun: true,
        iframe: iframe,
        remoteHost: iframe.src && iframe.src.split('/').slice(0, 3).join('/')
      }

      checkOptions(options)
      Object.keys(options).forEach(depricate, options)
      copyOptions(options)

      if (settings[iframeId]) {
        settings[iframeId].targetOrigin =
          true === settings[iframeId].checkOrigin
            ? getTargetOrigin(settings[iframeId].remoteHost)
            : '*'
      }
    }

    function beenHere() {
      return iframeId in settings && 'iFrameResizer' in iframe
    }

    var iframeId = ensureHasId(iframe.id)

    if (!beenHere()) {
      processOptions(options)
      setScrolling()
      setLimits()
      setupBodyMarginValues()
      init(createOutgoingMsg(iframeId))
      setupIFrameObject()
    } else {
      warn(iframeId, 'Ignored iFrame, already setup.')
    }
  }

  function debouce(fn, time) {
    if (null === timer) {
      timer = setTimeout(function () {
        timer = null
        fn()
      }, time)
    }
  }

  var frameTimer = {}
  function debounceFrameEvents(fn, time, frameId) {
    if (!frameTimer[frameId]) {
      frameTimer[frameId] = setTimeout(function () {
        frameTimer[frameId] = null
        fn()
      }, time)
    }
  }

  // Not testable in PhantomJS
  /* istanbul ignore next */

  function fixHiddenIFrames() {
    function checkIFrames() {
      function checkIFrame(settingId) {
        function chkDimension(dimension) {
          return (
            '0px' ===
            (settings[settingId] && settings[settingId].iframe.style[dimension])
          )
        }

        function isVisible(el) {
          return null !== el.offsetParent
        }

        if (
          settings[settingId] &&
          isVisible(settings[settingId].iframe) &&
          (chkDimension('height') || chkDimension('width'))
        ) {
          trigger(
            'Visibility change',
            'resize',
            settings[settingId].iframe,
            settingId
          )
        }
      }

      Object.keys(settings).forEach(function (key) {
        checkIFrame(key)
      })
    }

    function mutationObserved(mutations) {
      log(
        'window',
        'Mutation observed: ' + mutations[0].target + ' ' + mutations[0].type
      )
      debouce(checkIFrames, 16)
    }

    function createMutationObserver() {
      var target = document.querySelector('body'),
        config = {
          attributes: true,
          attributeOldValue: false,
          characterData: true,
          characterDataOldValue: false,
          childList: true,
          subtree: true
        },
        observer = new MutationObserver(mutationObserved)

      observer.observe(target, config)
    }

    var MutationObserver = getMutationObserver()
    if (MutationObserver) {
      createMutationObserver()
    }
  }

  function resizeIFrames(event) {
    function resize() {
      sendTriggerMsg('Window ' + event, 'resize')
    }

    log('window', 'Trigger event: ' + event)
    debouce(resize, 16)
  }

  // Not testable in PhantomJS
  /* istanbul ignore next */
  function tabVisible() {
    function resize() {
      sendTriggerMsg('Tab Visable', 'resize')
    }

    if ('hidden' !== document.visibilityState) {
      log('document', 'Trigger event: Visiblity change')
      debouce(resize, 16)
    }
  }

  function sendTriggerMsg(eventName, event) {
    function isIFrameResizeEnabled(iframeId) {
      return (
        settings[iframeId] &&
        'parent' === settings[iframeId].resizeFrom &&
        settings[iframeId].autoResize &&
        !settings[iframeId].firstRun
      )
    }

    Object.keys(settings).forEach(function (iframeId) {
      if (isIFrameResizeEnabled(iframeId)) {
        trigger(eventName, event, settings[iframeId].iframe, iframeId)
      }
    })
  }

  function setupEventListeners() {
    addEventListener(window, 'message', iFrameListener)

    addEventListener(window, 'resize', function () {
      resizeIFrames('resize')
    })

    addEventListener(document, 'visibilitychange', tabVisible)

    addEventListener(document, '-webkit-visibilitychange', tabVisible)
  }

  function factory() {
    function init(options, element) {
      function chkType() {
        if (!element.tagName) {
          throw new TypeError('Object is not a valid DOM element')
        } else if ('IFRAME' !== element.tagName.toUpperCase()) {
          throw new TypeError(
            'Expected <IFRAME> tag, found <' + element.tagName + '>'
          )
        }
      }

      if (element) {
        chkType()
        setupIFrame(element, options)
        iFrames.push(element)
      }
    }

    function warnDeprecatedOptions(options) {
      if (options && options.enablePublicMethods) {
        warn(
          'enablePublicMethods option has been removed, public methods are now always available in the iFrame'
        )
      }
    }

    var iFrames

    setupRequestAnimationFrame()
    setupEventListeners()

    return function iFrameResizeF(options, target) {
      iFrames = [] // Only return iFrames past in on this call

      warnDeprecatedOptions(options)

      switch (typeof target) {
        case 'undefined':
        case 'string':
          Array.prototype.forEach.call(
            document.querySelectorAll(target || 'iframe'),
            init.bind(undefined, options)
          )
          break

        case 'object':
          init(options, target)
          break

        default:
          throw new TypeError('Unexpected data type (' + typeof target + ')')
      }

      return iFrames
    }
  }

  function createJQueryPublicMethod($) {
    if (!$.fn) {
      info('', 'Unable to bind to jQuery, it is not fully loaded.')
    } else if (!$.fn.iFrameResize) {
      $.fn.iFrameResize = function $iFrameResizeF(options) {
        function init(index, element) {
          setupIFrame(element, options)
        }

        return this.filter('iframe').each(init).end()
      }
    }
  }

  if (window.jQuery) {
    createJQueryPublicMethod(window.jQuery)
  }

  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    // Node for browserfy
    module.exports = factory()
  }
  window.iFrameResize = window.iFrameResize || factory()
})()

},{}],10:[function(require,module,exports){
var iframeResize = require('./iframeResizer')

exports.iframeResize = iframeResize
exports.iframeResizer = iframeResize // Backwards compatability
exports.iframeResizerContentWindow = require('./iframeResizer.contentWindow')

},{"./iframeResizer":9,"./iframeResizer.contentWindow":8}],"help":[function(require,module,exports){
// require('./common')

require('iframe-resizer');
require('../help/testimonials').init(); //Testimonials
require('../help/faqs').init(); //for help faqs page
require('../help/shipping_info').init();
require('../help/payment_methods').init();
require('../help/size_chart').init();
},{"../help/faqs":2,"../help/payment_methods":3,"../help/shipping_info":4,"../help/size_chart":5,"../help/testimonials":6,"iframe-resizer":7}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL2NvbW1vbi9vcGVud2luLmpzIiwiRDovd3d3L3Byb21ldGhldXMvc3JjL2dhZWEvanMvaGVscC9mYXFzLmpzIiwiRDovd3d3L3Byb21ldGhldXMvc3JjL2dhZWEvanMvaGVscC9wYXltZW50X21ldGhvZHMuanMiLCJEOi93d3cvcHJvbWV0aGV1cy9zcmMvZ2FlYS9qcy9oZWxwL3NoaXBwaW5nX2luZm8uanMiLCJEOi93d3cvcHJvbWV0aGV1cy9zcmMvZ2FlYS9qcy9oZWxwL3NpemVfY2hhcnQuanMiLCJEOi93d3cvcHJvbWV0aGV1cy9zcmMvZ2FlYS9qcy9oZWxwL3Rlc3RpbW9uaWFscy5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9ub2RlX21vZHVsZXMvaWZyYW1lLXJlc2l6ZXIvaW5kZXguanMiLCJEOi93d3cvcHJvbWV0aGV1cy9zcmMvbm9kZV9tb2R1bGVzL2lmcmFtZS1yZXNpemVyL2pzL2lmcmFtZVJlc2l6ZXIuY29udGVudFdpbmRvdy5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9ub2RlX21vZHVsZXMvaWZyYW1lLXJlc2l6ZXIvanMvaWZyYW1lUmVzaXplci5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9ub2RlX21vZHVsZXMvaWZyYW1lLXJlc2l6ZXIvanMvaW5kZXguanMiLCIuL2dhZWEvanMvZW50cnlfanMvaGVscC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3Z4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqNkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbi8vZGVmaW5lKGZ1bmN0aW9uKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSkge1xyXG5cclxuXHR2YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxuXHRcclxuXHQkKCcub3BlbndpbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICh0aGlzLmhyZWYuc3Vic3RyKC00KSA9PSAnLnN3ZicpIHtcclxuXHRcdFx0dmFyIG5ld2luID0gd2luZG93Lm9wZW4odGhpcy5ocmVmLCAnZGJkZXRhaWxzJywgJ2hlaWdodD01MDAsd2lkdGg9NTAwLHNjcm9sbGJhcnM9eWVzJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAnaGVlbF90eXBlJykgfHwgKCQodGhpcykucGFyZW50cygnLnNpbXBsZS10YWInKS5sZW5ndGggPiAwICYmICQodGhpcykuYXR0cigndHlwZScpID09ICdzaXplJykgKSB7XHJcblx0XHRcdFx0dmFyIG5ld2luID0gd2luZG93Lm9wZW4odGhpcy5ocmVmLHRoaXMud2luZG93LCdzY3JvbGxiYXJzPXllcyxoZWlnaHQ9NjYwLHdpZHRoPTc4MCx0b3A9JysoJCh3aW5kb3cpLmhlaWdodCgpLzQpKycsbGVmdD0xMHB4JyArICgod2luZG93LnNjcmVlbi5hdmFpbFdpZHRoIC0gMTAgLSA3ODApIC8gMikpO3JldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICggJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ2hlZWxfaGVpZ2h0JyApIHtcclxuXHRcdFx0XHR2YXIgbmV3aW4gPSB3aW5kb3cub3Blbih0aGlzLmhyZWYsdGhpcy53aW5kb3csJ3Njcm9sbGJhcnM9eWVzLGhlaWdodD01MDAsd2lkdGg9NzgwLHRvcD0nKygkKHdpbmRvdykuaGVpZ2h0KCkvNCkrJyxsZWZ0PTEwcHgnKTtyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ2NvbG9yJykge1xyXG5cdFx0XHRcdHZhciBuZXdpbiA9IHdpbmRvdy5vcGVuKHRoaXMuaHJlZiwgJ2RiZGV0YWlscycsICdoZWlnaHQ9OTAwLHdpZHRoPTc4MCxzY3JvbGxiYXJzPXllcywgdG9wPTIwcHgsIGxlZnQ9MTBweCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICd2ZXJzZScpIHtcclxuXHRcdFx0XHR2YXIgbmV3aW4gPSB3aW5kb3cub3Blbih0aGlzLmhyZWYsICdkYmRldGFpbHMnLCAnaGVpZ2h0PTUwMix3aWR0aD03ODAsc2Nyb2xsYmFycz15ZXMsIHRvcD0xNTBweCwgbGVmdD0xMHB4Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ2xlbmd0aCcpIHtcclxuXHRcdFx0XHR2YXIgbmV3aW4gPSB3aW5kb3cub3Blbih0aGlzLmhyZWYsICdkYmRldGFpbHMnLCAnaGVpZ2h0PTU5MCx3aWR0aD04MDAsc2Nyb2xsYmFycz15ZXMsIHRvcD0xNTBweCwgbGVmdD0xMHB4Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ2hhaXJfY29sb3InKSB7XHJcblx0XHRcdFx0dmFyIG5ld2luID0gd2luZG93Lm9wZW4odGhpcy5ocmVmLCAnZGJkZXRhaWxzJywgJ2hlaWdodD02MDAsd2lkdGg9ODAwLHNjcm9sbGJhcnM9eWVzLCB0b3A9MTUwcHgsIGxlZnQ9MTBweCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICdzaXplX2FuZF9jb25zdHJ1Y3Rpb24nKSB7XHJcblx0XHRcdFx0dmFyIG5ld2luID0gd2luZG93Lm9wZW4odGhpcy5ocmVmLCAnZGJkZXRhaWxzJywgJ2hlaWdodD03ODAsd2lkdGg9ODAwLHNjcm9sbGJhcnM9eWVzLCB0b3A9MTAwcHgsIGxlZnQ9MTBweCcpO1xyXG5cdFx0XHR9ZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ3ZlaWxfbGVuZ3RoJykge1xyXG5cdFx0XHRcdHZhciBuZXdpbiA9IHdpbmRvdy5vcGVuKHRoaXMuaHJlZiwgJ2RiZGV0YWlscycsICdoZWlnaHQ9NjAwLHdpZHRoPTEwMDAsc2Nyb2xsYmFycz15ZXMsIHRvcD0xMDBweCwgbGVmdD0xMHB4Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dmFyIG5ld2luID0gd2luZG93Lm9wZW4odGhpcy5ocmVmLCAnZGJkZXRhaWxzJywgJ2hlaWdodD05MDAsd2lkdGg9NzgwLHNjcm9sbGJhcnM9eWVzLCB0b3A9MjBweCwgbGVmdD0xMHB4Jyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChuZXdpbiAhPSBudWxsKSB7XHJcblx0XHRcdG5ld2luLmZvY3VzKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcbi8vfSk7XHJcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWRoWldFdmFuTXZZMjl0Ylc5dUwyOXdaVzUzYVc0dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQklpd2labWxzWlNJNkltZGxibVZ5WVhSbFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2TDJSbFptbHVaU2htZFc1amRHbHZiaWh5WlhGMWFYSmxMQ0JsZUhCdmNuUnpMQ0J0YjJSMWJHVXBJSHRjY2x4dVhISmNibHgwZG1GeUlDUWdQU0FvZEhsd1pXOW1JSGRwYm1SdmR5QWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JSGRwYm1SdmQxc25KQ2RkSURvZ2RIbHdaVzltSUdkc2IySmhiQ0FoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUEvSUdkc2IySmhiRnNuSkNkZElEb2diblZzYkNrN1hISmNibHgwWEhKY2JseDBKQ2duTG05d1pXNTNhVzRuS1M1amJHbGpheWhtZFc1amRHbHZiaUFvS1NCN1hISmNibHgwWEhScFppQW9kR2hwY3k1b2NtVm1Mbk4xWW5OMGNpZ3ROQ2tnUFQwZ0p5NXpkMlluS1NCN1hISmNibHgwWEhSY2RIWmhjaUJ1WlhkcGJpQTlJSGRwYm1SdmR5NXZjR1Z1S0hSb2FYTXVhSEpsWml3Z0oyUmlaR1YwWVdsc2N5Y3NJQ2RvWldsbmFIUTlOVEF3TEhkcFpIUm9QVFV3TUN4elkzSnZiR3hpWVhKelBYbGxjeWNwTzF4eVhHNWNkRngwZlNCbGJITmxJSHRjY2x4dVhIUmNkRngwYVdZZ0tDQW9KQ2gwYUdsektTNWhkSFJ5S0NkMGVYQmxKeWtnUFQwZ0oyaGxaV3hmZEhsd1pTY3BJSHg4SUNna0tIUm9hWE1wTG5CaGNtVnVkSE1vSnk1emFXMXdiR1V0ZEdGaUp5a3ViR1Z1WjNSb0lENGdNQ0FtSmlBa0tIUm9hWE1wTG1GMGRISW9KM1I1Y0dVbktTQTlQU0FuYzJsNlpTY3BJQ2tnZTF4eVhHNWNkRngwWEhSY2RIWmhjaUJ1WlhkcGJpQTlJSGRwYm1SdmR5NXZjR1Z1S0hSb2FYTXVhSEpsWml4MGFHbHpMbmRwYm1SdmR5d25jMk55YjJ4c1ltRnljejE1WlhNc2FHVnBaMmgwUFRZMk1DeDNhV1IwYUQwM09EQXNkRzl3UFNjcktDUW9kMmx1Wkc5M0tTNW9aV2xuYUhRb0tTODBLU3NuTEd4bFpuUTlNVEJ3ZUNjZ0t5QW9LSGRwYm1SdmR5NXpZM0psWlc0dVlYWmhhV3hYYVdSMGFDQXRJREV3SUMwZ056Z3dLU0F2SURJcEtUdHlaWFIxY200Z1ptRnNjMlU3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEZ4MFpXeHpaU0JwWmlBb0lDUW9kR2hwY3lrdVlYUjBjaWduZEhsd1pTY3BJRDA5SUNkb1pXVnNYMmhsYVdkb2RDY2dLU0I3WEhKY2JseDBYSFJjZEZ4MGRtRnlJRzVsZDJsdUlEMGdkMmx1Wkc5M0xtOXdaVzRvZEdocGN5NW9jbVZtTEhSb2FYTXVkMmx1Wkc5M0xDZHpZM0p2Ykd4aVlYSnpQWGxsY3l4b1pXbG5hSFE5TlRBd0xIZHBaSFJvUFRjNE1DeDBiM0E5Snlzb0pDaDNhVzVrYjNjcExtaGxhV2RvZENncEx6UXBLeWNzYkdWbWREMHhNSEI0SnlrN2NtVjBkWEp1SUdaaGJITmxPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseDBYSFJjZEdWc2MyVWdhV1lnS0NRb2RHaHBjeWt1WVhSMGNpZ25kSGx3WlNjcElEMDlJQ2RqYjJ4dmNpY3BJSHRjY2x4dVhIUmNkRngwWEhSMllYSWdibVYzYVc0Z1BTQjNhVzVrYjNjdWIzQmxiaWgwYUdsekxtaHlaV1lzSUNka1ltUmxkR0ZwYkhNbkxDQW5hR1ZwWjJoMFBUa3dNQ3gzYVdSMGFEMDNPREFzYzJOeWIyeHNZbUZ5Y3oxNVpYTXNJSFJ2Y0QweU1IQjRMQ0JzWldaMFBURXdjSGduS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmxiSE5sSUdsbUlDZ2tLSFJvYVhNcExtRjBkSElvSjNSNWNHVW5LU0E5UFNBbmRtVnljMlVuS1NCN1hISmNibHgwWEhSY2RGeDBkbUZ5SUc1bGQybHVJRDBnZDJsdVpHOTNMbTl3Wlc0b2RHaHBjeTVvY21WbUxDQW5aR0prWlhSaGFXeHpKeXdnSjJobGFXZG9kRDAxTURJc2QybGtkR2c5Tnpnd0xITmpjbTlzYkdKaGNuTTllV1Z6TENCMGIzQTlNVFV3Y0hnc0lHeGxablE5TVRCd2VDY3BPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseDBYSFJjZEdWc2MyVWdhV1lnS0NRb2RHaHBjeWt1WVhSMGNpZ25kSGx3WlNjcElEMDlJQ2RzWlc1bmRHZ25LU0I3WEhKY2JseDBYSFJjZEZ4MGRtRnlJRzVsZDJsdUlEMGdkMmx1Wkc5M0xtOXdaVzRvZEdocGN5NW9jbVZtTENBblpHSmtaWFJoYVd4ekp5d2dKMmhsYVdkb2REMDFPVEFzZDJsa2RHZzlPREF3TEhOamNtOXNiR0poY25NOWVXVnpMQ0IwYjNBOU1UVXdjSGdzSUd4bFpuUTlNVEJ3ZUNjcE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkR1ZzYzJVZ2FXWWdLQ1FvZEdocGN5a3VZWFIwY2lnbmRIbHdaU2NwSUQwOUlDZG9ZV2x5WDJOdmJHOXlKeWtnZTF4eVhHNWNkRngwWEhSY2RIWmhjaUJ1WlhkcGJpQTlJSGRwYm1SdmR5NXZjR1Z1S0hSb2FYTXVhSEpsWml3Z0oyUmlaR1YwWVdsc2N5Y3NJQ2RvWldsbmFIUTlOakF3TEhkcFpIUm9QVGd3TUN4elkzSnZiR3hpWVhKelBYbGxjeXdnZEc5d1BURTFNSEI0TENCc1pXWjBQVEV3Y0hnbktUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJsYkhObElHbG1JQ2drS0hSb2FYTXBMbUYwZEhJb0ozUjVjR1VuS1NBOVBTQW5jMmw2WlY5aGJtUmZZMjl1YzNSeWRXTjBhVzl1SnlrZ2UxeHlYRzVjZEZ4MFhIUmNkSFpoY2lCdVpYZHBiaUE5SUhkcGJtUnZkeTV2Y0dWdUtIUm9hWE11YUhKbFppd2dKMlJpWkdWMFlXbHNjeWNzSUNkb1pXbG5hSFE5Tnpnd0xIZHBaSFJvUFRnd01DeHpZM0p2Ykd4aVlYSnpQWGxsY3l3Z2RHOXdQVEV3TUhCNExDQnNaV1owUFRFd2NIZ25LVHRjY2x4dVhIUmNkRngwZldWc2MyVWdhV1lnS0NRb2RHaHBjeWt1WVhSMGNpZ25kSGx3WlNjcElEMDlJQ2QyWldsc1gyeGxibWQwYUNjcElIdGNjbHh1WEhSY2RGeDBYSFIyWVhJZ2JtVjNhVzRnUFNCM2FXNWtiM2N1YjNCbGJpaDBhR2x6TG1oeVpXWXNJQ2RrWW1SbGRHRnBiSE1uTENBbmFHVnBaMmgwUFRZd01DeDNhV1IwYUQweE1EQXdMSE5qY205c2JHSmhjbk05ZVdWekxDQjBiM0E5TVRBd2NIZ3NJR3hsWm5ROU1UQndlQ2NwTzF4eVhHNWNkRngwWEhSOVhISmNibHgwWEhSY2RHVnNjMlVnZTF4eVhHNWNkRngwWEhSY2RIWmhjaUJ1WlhkcGJpQTlJSGRwYm1SdmR5NXZjR1Z1S0hSb2FYTXVhSEpsWml3Z0oyUmlaR1YwWVdsc2N5Y3NJQ2RvWldsbmFIUTlPVEF3TEhkcFpIUm9QVGM0TUN4elkzSnZiR3hpWVhKelBYbGxjeXdnZEc5d1BUSXdjSGdzSUd4bFpuUTlNVEJ3ZUNjcE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlYSEpjYmx4MFhIUnBaaUFvYm1WM2FXNGdJVDBnYm5Wc2JDa2dlMXh5WEc1Y2RGeDBYSFJ1WlhkcGJpNW1iMk4xY3lncE8xeHlYRzVjZEZ4MGZWeHlYRzVjZEZ4MGNtVjBkWEp1SUdaaGJITmxPMXh5WEc1Y2RIMHBPMXh5WEc1Y2RGeHlYRzR2TDMwcE8xeHlYRzRpWFgwPSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG5cclxudmFyIHBsdXNDb2xsYXBzZVRvZ2dsZSA9IGZ1bmN0aW9uKHBsdXNFbGVDbGFzcykge1xyXG4gICAgJGhlYWRlciA9ICQodGhpcyk7XHJcbiAgICAkY29udGVudCA9ICRoZWFkZXIubmV4dCgpO1xyXG4gICAgJHBsdXNFbGVtID0gJGhlYWRlci5maW5kKFwiLlwiICsgcGx1c0VsZUNsYXNzKTtcclxuXHJcbiAgICAkY29udGVudC5pcyhcIjp2aXNpYmxlXCIpID8gJHBsdXNFbGVtLnJlbW92ZUNsYXNzKFwib3BlblwiKSA6ICRwbHVzRWxlbS5hZGRDbGFzcyhcIm9wZW5cIik7XHJcbiAgICAkY29udGVudC5pcyhcIjp2aXNpYmxlXCIpID8gJGNvbnRlbnQuaGlkZSgpIDogJGNvbnRlbnQuc2hvdygpO1xyXG59O1xyXG5cclxuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLmZhcXMgLmZhcXMtY2F0ZWdvcnktdGl0bGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBwbHVzQ29sbGFwc2VUb2dnbGUuY2FsbCh0aGlzLCBcImZhcXMtY2F0ZWdvcnktcGx1c1wiKVxyXG4gICAgfSk7XHJcbiAgICAkKFwiLmZhcXMgLnF1ZXN0aW9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcGx1c0NvbGxhcHNlVG9nZ2xlLmNhbGwodGhpcywgXCJmYXFzLXF1ZXN0aW9uLXBsdXNcIilcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuanMtc2hvdy1saXZlLWNoYXQtZGlhbG9nXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIExDX0FQSSA9IHdpbmRvdy5MQ19BUEkgfHwge307XHJcbiAgICAgICAgTENfQVBJLm9wZW5fY2hhdF93aW5kb3coKTtcclxuICAgICAgICB3aW5kb3cuTENfQVBJID0gTENfQVBJO1xyXG4gICAgfSk7XHJcbn07XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltZGhaV0V2YW5NdmFHVnNjQzltWVhGekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTSXNJbVpwYkdVaU9pSm5aVzVsY21GMFpXUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpZG1GeUlDUWdQU0FvZEhsd1pXOW1JSGRwYm1SdmR5QWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JSGRwYm1SdmQxc25KQ2RkSURvZ2RIbHdaVzltSUdkc2IySmhiQ0FoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUEvSUdkc2IySmhiRnNuSkNkZElEb2diblZzYkNrN1hISmNibHh5WEc1MllYSWdjR3gxYzBOdmJHeGhjSE5sVkc5bloyeGxJRDBnWm5WdVkzUnBiMjRvY0d4MWMwVnNaVU5zWVhOektTQjdYSEpjYmlBZ0lDQWthR1ZoWkdWeUlEMGdKQ2gwYUdsektUdGNjbHh1SUNBZ0lDUmpiMjUwWlc1MElEMGdKR2hsWVdSbGNpNXVaWGgwS0NrN1hISmNiaUFnSUNBa2NHeDFjMFZzWlcwZ1BTQWthR1ZoWkdWeUxtWnBibVFvWENJdVhDSWdLeUJ3YkhWelJXeGxRMnhoYzNNcE8xeHlYRzVjY2x4dUlDQWdJQ1JqYjI1MFpXNTBMbWx6S0Z3aU9uWnBjMmxpYkdWY0lpa2dQeUFrY0d4MWMwVnNaVzB1Y21WdGIzWmxRMnhoYzNNb1hDSnZjR1Z1WENJcElEb2dKSEJzZFhORmJHVnRMbUZrWkVOc1lYTnpLRndpYjNCbGJsd2lLVHRjY2x4dUlDQWdJQ1JqYjI1MFpXNTBMbWx6S0Z3aU9uWnBjMmxpYkdWY0lpa2dQeUFrWTI5dWRHVnVkQzVvYVdSbEtDa2dPaUFrWTI5dWRHVnVkQzV6YUc5M0tDazdYSEpjYm4wN1hISmNibHh5WEc1bGVIQnZjblJ6TG1sdWFYUWdQU0JtZFc1amRHbHZiaWdwSUh0Y2NseHVJQ0FnSUNRb1hDSXVabUZ4Y3lBdVptRnhjeTFqWVhSbFoyOXllUzEwYVhSc1pWd2lLUzV2YmloY0ltTnNhV05yWENJc0lHWjFibU4wYVc5dUtDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhCc2RYTkRiMnhzWVhCelpWUnZaMmRzWlM1allXeHNLSFJvYVhNc0lGd2labUZ4Y3kxallYUmxaMjl5ZVMxd2JIVnpYQ0lwWEhKY2JpQWdJQ0I5S1R0Y2NseHVJQ0FnSUNRb1hDSXVabUZ4Y3lBdWNYVmxjM1JwYjI1Y0lpa3ViMjRvWENKamJHbGphMXdpTENCbWRXNWpkR2x2YmlncElIdGNjbHh1SUNBZ0lDQWdJQ0J3YkhWelEyOXNiR0Z3YzJWVWIyZG5iR1V1WTJGc2JDaDBhR2x6TENCY0ltWmhjWE10Y1hWbGMzUnBiMjR0Y0d4MWMxd2lLVnh5WEc0Z0lDQWdmU2s3WEhKY2JseHlYRzRnSUNBZ0pDaGNJaTVxY3kxemFHOTNMV3hwZG1VdFkyaGhkQzFrYVdGc2IyZGNJaWt1YjI0b1hDSmpiR2xqYTF3aUxDQm1kVzVqZEdsdmJpZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCMllYSWdURU5mUVZCSklEMGdkMmx1Wkc5M0xreERYMEZRU1NCOGZDQjdmVHRjY2x4dUlDQWdJQ0FnSUNCTVExOUJVRWt1YjNCbGJsOWphR0YwWDNkcGJtUnZkeWdwTzF4eVhHNGdJQ0FnSUNBZ0lIZHBibVJ2ZHk1TVExOUJVRWtnUFNCTVExOUJVRWs3WEhKY2JpQWdJQ0I5S1R0Y2NseHVmVHNpWFgwPSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG52YXIgcGF5bWVudEluZm9Db250ZW50ID0gJCgnLnBheW1lbnQtaW5mbycpO1xyXG52YXIgcGF5bWVudE1ldGhvZHNEb20gPSAkKCcucGF5bWVudC1tZXRob2RzJyk7XHJcbnZhciBwYXltZW50c0NsYXNzZXMgPSB0eXBlb2YgcGFnZURhdGEucGF5bWVudHNDbGFzc2VzID09IFwidW5kZWZpbmVkXCIgPyB7fSA6IHBhZ2VEYXRhLnBheW1lbnRzQ2xhc3NlcztcclxudmFyIGluQWpheCA9IGZhbHNlO1xyXG5cclxudmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBwYXltZW50SW5mb0NvbnRlbnQuZGVsZWdhdGUoJyNzZWxlY3RfcmVnaW9uJywgJ2NoYW5nZScsIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIHZhciByZWdpb25JZCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYocmVnaW9uSWQgPiAwICYmIGluQWpheCA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBnZXRfcGF5bWVudF9tZXRob2QocmVnaW9uSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8vZ2V0IHJlbGF0ZWQgZGF0YSBvZiBwYXltZW50IHdoZW4gY2hhbmdpbmcgdGhlIGNvdW50cnlcclxudmFyIGdldF9wYXltZW50X21ldGhvZCA9IGZ1bmN0aW9uIChjb3VudHJ5X2lkKSB7XHJcbiAgICBpbkFqYXggPSB0cnVlO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICAndHlwZSc6ICdHRVQnLFxyXG4gICAgICAgICd1cmwnOiB3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwJyxcclxuICAgICAgICAnZGF0YSc6ICdhY3Q9Z2V0X3BheW1lbnRfbW9kdWxlcyZjb3VudHJ5PScgKyBjb3VudHJ5X2lkLFxyXG4gICAgICAgICdjYWNoZSc6IHRydWUsXHJcbiAgICAgICAgJ2RhdGFUeXBlJzogJ2pzb24nLFxyXG4gICAgICAgICdiZWZvcmVTZW5kJzogZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICB9LFxyXG4gICAgICAgICdzdWNjZXNzJzogZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgaW5BamF4ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChyLmNvZGUgPT0gMCAmJiByLnBheW1lbnRfbW9kdWxlcykge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyX3BheW1lbnRfbWV0aG9kcyhyLnBheW1lbnRfbW9kdWxlcywgci5zaG93X3BheXBhbF9jdXJyZW5jeV90aXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG52YXIgcmVuZGVyX3BheW1lbnRfbWV0aG9kcyA9IGZ1bmN0aW9uKHBheW1lbnRfbWV0aG9kcywgc2hvd19wYXlwYWxfY3VycmVuY3lfdGlwKSB7XHJcbiAgICB2YXIgcGF5bWVudERvbSA9ICcnO1xyXG4gICAgZm9yKHZhciBpID0wOyBpIDwgcGF5bWVudF9tZXRob2RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHBheW1lbnQgPSBwYXltZW50X21ldGhvZHNbaV07XHJcbiAgICAgICAgcGF5bWVudERvbSArPSAnPGxpIGNsYXNzPVwicGF5bWVudC1kb21cIj4nICtcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiaGVscC1zdWItdGl0bGVcIj4nICsgcGF5bWVudC5wYXltZW50X25hbWUgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgaWYgKHBheW1lbnQucGF5bWVudF9pZCA9PSA5Nykge1xyXG4gICAgICAgICAgICBwYXltZW50RG9tICs9ICc8c3BhbiBjbGFzcz1cInBheXBhbEljb25cIj48L3NwYW4+JztcclxuICAgICAgICAgICAgaWYoIXNob3dfcGF5cGFsX2N1cnJlbmN5X3RpcCkge1xyXG4gICAgICAgICAgICAgICAgcGF5bWVudERvbSArPSAnPHA+JyArIF9sYW5nLnBhZ2VfcGF5cGFsX2NoZWNrb3V0X3BheXBhbF90aXBzICsgJzwvcD4nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGF5bWVudERvbSArPSAnPHA+JyArIF9sYW5nLnBhZ2VfcGF5cGFsX2NoZWNrb3V0X3BheXBhbF90aXBzX25ldyArICc8L3A+JyArXHJcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJwYXlwYWwtdG8tVVNELXRpcFwiPicgKyBfbGFuZy5wYWdlX3BheXBhbF9jdXJyZW5jeV90b191c2RfdGlwcyArICc8L3NwYW4+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXltZW50RG9tICs9JzwvbGk+JztcclxuICAgICAgICB9IGVsc2UgaWYgKHBheW1lbnQucGF5bWVudF9pZCA9PSAxNTcgfHwgcGF5bWVudC5wYXltZW50X2lkID09IDE4Nikge1xyXG4gICAgICAgICAgICBwYXltZW50RG9tICs9ICc8cD4nICsgX2xhbmcucGFnZV9jb21tb25fd2VfYWNjZXB0X2NyZWRpdF9jYXJkICsgJzwvcD4nO1xyXG4gICAgICAgICAgICBwYXltZW50RG9tICs9ICc8ZGl2IGNsYXNzPVwiY3JlZGl0LWNhcmRzXCI+JztcclxuICAgICAgICAgICAgaWYodHlwZW9mIHBheW1lbnRzQ2xhc3Nlc1sxNTddICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaW5kZXggPSAwOyBpbmRleCA8IHBheW1lbnRzQ2xhc3Nlc1sxNTddLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnREb20gKz0gJzxzcGFuIGNsYXNzPVwiJyArIHBheW1lbnRzQ2xhc3Nlc1sxNTddW2luZGV4XSArICdcIj48L3NwYW4+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXltZW50RG9tICs9ICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICc8cD4nICsgX2xhbmcucGFnZV9jb21tb25fY3JlZGl0X2NhcmRfbm90ZSArICc8L3A+JyArXHJcbiAgICAgICAgICAgICc8L2xpPic7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXltZW50LnBheW1lbnRfaWQgPT0gMTY1KSB7XHJcbiAgICAgICAgICAgIHBheW1lbnREb20gKz0gJzxwPicgKyBfbGFuZy5wYWdlX2NvbW1vbl93ZV9hY2NlcHRfY3JlZGl0X2NhcmQgKyAnPC9wPic7XHJcbiAgICAgICAgICAgIHBheW1lbnREb20gKz0gJzxkaXYgY2xhc3M9XCJjcmVkaXQtY2FyZHNcIj4nO1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgcGF5bWVudHNDbGFzc2VzWzE2NV0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IHBheW1lbnRzQ2xhc3Nlc1sxNjVdLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudERvbSArPSAnPHNwYW4gY2xhc3M9XCInICsgcGF5bWVudHNDbGFzc2VzWzE2NV1bal0gKyAnXCI+PC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGF5bWVudERvbSArPSAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPHA+JyArIF9sYW5nLnBhZ2VfY29tbW9uX2NyZWRpdF9jYXJkX25vdGUgKyAnPC9wPicgK1xyXG4gICAgICAgICAgICAgICAgJzwvbGk+JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYXltZW50RG9tICs9ICc8c3BhbiBjbGFzcz1cImhlbHAtc3ViLWNvbnRlbnRcIj4nICsgcGF5bWVudC5wYXltZW50X2Rlc2MucmVwbGFjZSgneyRJTUdfUEFUSH0nLCB3ZWJEYXRhLklNR19QQVRIKSArICc8L3NwYW4+JyArXHJcbiAgICAgICAgICAgICc8L2xpPic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGF5bWVudE1ldGhvZHNEb20uaHRtbChwYXltZW50RG9tKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBcImluaXRcIjogaW5pdCxcclxufVxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWRoWldFdmFuTXZhR1ZzY0M5d1lYbHRaVzUwWDIxbGRHaHZaSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJblpoY2lBa0lEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5QjNhVzVrYjNkYkp5UW5YU0E2SUhSNWNHVnZaaUJuYkc5aVlXd2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUJuYkc5aVlXeGJKeVFuWFNBNklHNTFiR3dwTzF4eVhHNTJZWElnY0dGNWJXVnVkRWx1Wm05RGIyNTBaVzUwSUQwZ0pDZ25MbkJoZVcxbGJuUXRhVzVtYnljcE8xeHlYRzUyWVhJZ2NHRjViV1Z1ZEUxbGRHaHZaSE5FYjIwZ1BTQWtLQ2N1Y0dGNWJXVnVkQzF0WlhSb2IyUnpKeWs3WEhKY2JuWmhjaUJ3WVhsdFpXNTBjME5zWVhOelpYTWdQU0IwZVhCbGIyWWdjR0ZuWlVSaGRHRXVjR0Y1YldWdWRITkRiR0Z6YzJWeklEMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5QjdmU0E2SUhCaFoyVkVZWFJoTG5CaGVXMWxiblJ6UTJ4aGMzTmxjenRjY2x4dWRtRnlJR2x1UVdwaGVDQTlJR1poYkhObE8xeHlYRzVjY2x4dWRtRnlJR2x1YVhRZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0J3WVhsdFpXNTBTVzVtYjBOdmJuUmxiblF1WkdWc1pXZGhkR1VvSnlOelpXeGxZM1JmY21WbmFXOXVKeXdnSjJOb1lXNW5aU2NzSUdaMWJtTjBhVzl1SUNncGUxeHlYRzRnSUNBZ0lDQWdJSFpoY2lCeVpXZHBiMjVKWkNBOUlDUW9kR2hwY3lrdWRtRnNLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2FXWW9jbVZuYVc5dVNXUWdQaUF3SUNZbUlHbHVRV3BoZUNBOVBUMGdabUZzYzJVcGUxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCblpYUmZjR0Y1YldWdWRGOXRaWFJvYjJRb2NtVm5hVzl1U1dRcE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDBwWEhKY2JuMWNjbHh1WEhKY2JpOHZaMlYwSUhKbGJHRjBaV1FnWkdGMFlTQnZaaUJ3WVhsdFpXNTBJSGRvWlc0Z1kyaGhibWRwYm1jZ2RHaGxJR052ZFc1MGNubGNjbHh1ZG1GeUlHZGxkRjl3WVhsdFpXNTBYMjFsZEdodlpDQTlJR1oxYm1OMGFXOXVJQ2hqYjNWdWRISjVYMmxrS1NCN1hISmNiaUFnSUNCcGJrRnFZWGdnUFNCMGNuVmxPMXh5WEc0Z0lDQWdKQzVoYW1GNEtIdGNjbHh1SUNBZ0lDQWdJQ0FuZEhsd1pTYzZJQ2RIUlZRbkxGeHlYRzRnSUNBZ0lDQWdJQ2QxY213bk9pQjNaV0pFWVhSaExsZEZRbDlTVDA5VUlDc2dKMkZxWVhndWNHaHdKeXhjY2x4dUlDQWdJQ0FnSUNBblpHRjBZU2M2SUNkaFkzUTlaMlYwWDNCaGVXMWxiblJmYlc5a2RXeGxjeVpqYjNWdWRISjVQU2NnS3lCamIzVnVkSEo1WDJsa0xGeHlYRzRnSUNBZ0lDQWdJQ2RqWVdOb1pTYzZJSFJ5ZFdVc1hISmNiaUFnSUNBZ0lDQWdKMlJoZEdGVWVYQmxKem9nSjJwemIyNG5MRnh5WEc0Z0lDQWdJQ0FnSUNkaVpXWnZjbVZUWlc1a0p6b2dablZ1WTNScGIyNGdLSElwSUh0Y2NseHVJQ0FnSUNBZ0lDQjlMRnh5WEc0Z0lDQWdJQ0FnSUNkemRXTmpaWE56SnpvZ1puVnVZM1JwYjI0Z0tISXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhVzVCYW1GNElEMGdabUZzYzJVN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHlMbU52WkdVZ1BUMGdNQ0FtSmlCeUxuQmhlVzFsYm5SZmJXOWtkV3hsY3lrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZ1WkdWeVgzQmhlVzFsYm5SZmJXVjBhRzlrY3loeUxuQmhlVzFsYm5SZmJXOWtkV3hsY3l3Z2NpNXphRzkzWDNCaGVYQmhiRjlqZFhKeVpXNWplVjkwYVhBcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmU2s3WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnY21WdVpHVnlYM0JoZVcxbGJuUmZiV1YwYUc5a2N5QTlJR1oxYm1OMGFXOXVLSEJoZVcxbGJuUmZiV1YwYUc5a2N5d2djMmh2ZDE5d1lYbHdZV3hmWTNWeWNtVnVZM2xmZEdsd0tTQjdYSEpjYmlBZ0lDQjJZWElnY0dGNWJXVnVkRVJ2YlNBOUlDY25PMXh5WEc0Z0lDQWdabTl5S0haaGNpQnBJRDB3T3lCcElEd2djR0Y1YldWdWRGOXRaWFJvYjJSekxteGxibWQwYURzZ2FTc3JLU0I3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJSEJoZVcxbGJuUWdQU0J3WVhsdFpXNTBYMjFsZEdodlpITmJhVjA3WEhKY2JpQWdJQ0FnSUNBZ2NHRjViV1Z1ZEVSdmJTQXJQU0FuUEd4cElHTnNZWE56UFZ3aWNHRjViV1Z1ZEMxa2IyMWNJajRuSUN0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSnp4emNHRnVJR05zWVhOelBWd2lhR1ZzY0MxemRXSXRkR2wwYkdWY0lqNG5JQ3NnY0dGNWJXVnVkQzV3WVhsdFpXNTBYMjVoYldVZ0t5QW5QQzl6Y0dGdVBpYzdYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tIQmhlVzFsYm5RdWNHRjViV1Z1ZEY5cFpDQTlQU0E1TnlrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCd1lYbHRaVzUwUkc5dElDczlJQ2M4YzNCaGJpQmpiR0Z6Y3oxY0luQmhlWEJoYkVsamIyNWNJajQ4TDNOd1lXNCtKenRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvSVhOb2IzZGZjR0Y1Y0dGc1gyTjFjbkpsYm1ONVgzUnBjQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NHRjViV1Z1ZEVSdmJTQXJQU0FuUEhBK0p5QXJJRjlzWVc1bkxuQmhaMlZmY0dGNWNHRnNYMk5vWldOcmIzVjBYM0JoZVhCaGJGOTBhWEJ6SUNzZ0p6d3ZjRDRuTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0dGNWJXVnVkRVJ2YlNBclBTQW5QSEErSnlBcklGOXNZVzVuTG5CaFoyVmZjR0Y1Y0dGc1gyTm9aV05yYjNWMFgzQmhlWEJoYkY5MGFYQnpYMjVsZHlBcklDYzhMM0ErSnlBclhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQW5QSE53WVc0Z1kyeGhjM005WENKd1lYbHdZV3d0ZEc4dFZWTkVMWFJwY0Z3aVBpY2dLeUJmYkdGdVp5NXdZV2RsWDNCaGVYQmhiRjlqZFhKeVpXNWplVjkwYjE5MWMyUmZkR2x3Y3lBcklDYzhMM053WVc0K0p6dGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCd1lYbHRaVzUwUkc5dElDczlKend2YkdrK0p6dGNjbHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0hCaGVXMWxiblF1Y0dGNWJXVnVkRjlwWkNBOVBTQXhOVGNnZkh3Z2NHRjViV1Z1ZEM1d1lYbHRaVzUwWDJsa0lEMDlJREU0TmlrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCd1lYbHRaVzUwUkc5dElDczlJQ2M4Y0Q0bklDc2dYMnhoYm1jdWNHRm5aVjlqYjIxdGIyNWZkMlZmWVdOalpYQjBYMk55WldScGRGOWpZWEprSUNzZ0p6d3ZjRDRuTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J3WVhsdFpXNTBSRzl0SUNzOUlDYzhaR2wySUdOc1lYTnpQVndpWTNKbFpHbDBMV05oY21SelhDSStKenRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvZEhsd1pXOW1JSEJoZVcxbGJuUnpRMnhoYzNObGMxc3hOVGRkSUNFOUlGd2lkVzVrWldacGJtVmtYQ0lwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnZjaWgyWVhJZ2FXNWtaWGdnUFNBd095QnBibVJsZUNBOElIQmhlVzFsYm5SelEyeGhjM05sYzFzeE5UZGRMbXhsYm1kMGFEc2dhVzVrWlhnckt5a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIQmhlVzFsYm5SRWIyMGdLejBnSnp4emNHRnVJR05zWVhOelBWd2lKeUFySUhCaGVXMWxiblJ6UTJ4aGMzTmxjMXN4TlRkZFcybHVaR1Y0WFNBcklDZGNJajQ4TDNOd1lXNCtKenRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J3WVhsdFpXNTBSRzl0SUNzOUlDYzhMMlJwZGo0bklDdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2M4Y0Q0bklDc2dYMnhoYm1jdWNHRm5aVjlqYjIxdGIyNWZZM0psWkdsMFgyTmhjbVJmYm05MFpTQXJJQ2M4TDNBK0p5QXJYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDYzhMMnhwUGljN1hISmNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2h3WVhsdFpXNTBMbkJoZVcxbGJuUmZhV1FnUFQwZ01UWTFLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEJoZVcxbGJuUkViMjBnS3owZ0p6eHdQaWNnS3lCZmJHRnVaeTV3WVdkbFgyTnZiVzF2Ymw5M1pWOWhZMk5sY0hSZlkzSmxaR2wwWDJOaGNtUWdLeUFuUEM5d1BpYzdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIQmhlVzFsYm5SRWIyMGdLejBnSnp4a2FYWWdZMnhoYzNNOVhDSmpjbVZrYVhRdFkyRnlaSE5jSWo0bk8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppaDBlWEJsYjJZZ2NHRjViV1Z1ZEhORGJHRnpjMlZ6V3pFMk5WMGdJVDBnWENKMWJtUmxabWx1WldSY0lpa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm05eUtIWmhjaUJxSUQwZ01Ec2dhaUE4SUhCaGVXMWxiblJ6UTJ4aGMzTmxjMXN4TmpWZExteGxibWQwYURzZ2Fpc3JLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjR0Y1YldWdWRFUnZiU0FyUFNBblBITndZVzRnWTJ4aGMzTTlYQ0luSUNzZ2NHRjViV1Z1ZEhORGJHRnpjMlZ6V3pFMk5WMWJhbDBnS3lBblhDSStQQzl6Y0dGdVBpYzdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjR0Y1YldWdWRFUnZiU0FyUFNBblBDOWthWFkrSnlBclhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQW5QSEErSnlBcklGOXNZVzVuTG5CaFoyVmZZMjl0Ylc5dVgyTnlaV1JwZEY5allYSmtYMjV2ZEdVZ0t5QW5QQzl3UGljZ0sxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdKend2YkdrK0p6dGNjbHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQndZWGx0Wlc1MFJHOXRJQ3M5SUNjOGMzQmhiaUJqYkdGemN6MWNJbWhsYkhBdGMzVmlMV052Ym5SbGJuUmNJajRuSUNzZ2NHRjViV1Z1ZEM1d1lYbHRaVzUwWDJSbGMyTXVjbVZ3YkdGalpTZ25leVJKVFVkZlVFRlVTSDBuTENCM1pXSkVZWFJoTGtsTlIxOVFRVlJJS1NBcklDYzhMM053WVc0K0p5QXJYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDYzhMMnhwUGljN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdjR0Y1YldWdWRFMWxkR2h2WkhORWIyMHVhSFJ0YkNod1lYbHRaVzUwUkc5dEtUdGNjbHh1ZlZ4eVhHNWNjbHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0I3WEhKY2JpQWdJQ0JjSW1sdWFYUmNJam9nYVc1cGRDeGNjbHh1ZlNKZGZRPT0iLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxudmFyIHByb2Nlc3NpbmdUaW1lQ29udGVudCA9ICQoJy5wcm9jZXNzaW5nLXRpbWUnKTtcclxudmFyIHNoaXBwaW5nSW5mb0NvbnRlbnQgPSAkKCcuc2hpcHBpbmctaW5mbycpO1xyXG52YXIgaW5BamF4ID0gZmFsc2U7XHJcblxyXG52YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHByb2Nlc3NpbmdUaW1lQ29udGVudC5kZWxlZ2F0ZSgnI3NlbGVjdF9ub3Rfc2FtcGxlX3NhbGVfY2F0ZWdvcnknLCAnY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9ICQodGhpcylbMF0uc2VsZWN0ZWRPcHRpb25zO1xyXG4gICAgICAgIHZhciBjYXROYW1lID0gJChzZWxlY3RlZE9wdGlvbikuYXR0cignZGF0YS1jYXQtbmFtZScpO1xyXG4gICAgICAgIHZhciBjYXRQcm9jZXNzaW5nVGltZSA9ICQoc2VsZWN0ZWRPcHRpb24pLmF0dHIoJ2RhdGEtcHJvY2Vzc2luZy10aW1lJyk7XHJcbiAgICAgICAgdmFyIGNhdE5hbWVEb20gPSAkKHRoaXMpLnBhcmVudHMoJy5wcm9jZXNzaW5nLXRpbWUnKS5maW5kKCcjY2F0LW5hbWUnKTtcclxuICAgICAgICB2YXIgY2F0UHJvY2Vzc2luZ1RpbWVEb20gPSAkKHRoaXMpLnBhcmVudHMoJy5wcm9jZXNzaW5nLXRpbWUnKS5maW5kKCcjY2F0LXByb2Nlc3NpbmctdGltZScpO1xyXG4gICAgICAgIGlmKGNhdE5hbWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGNhdE5hbWVEb20uaHRtbCgnJyk7XHJcbiAgICAgICAgICAgIGNhdFByb2Nlc3NpbmdUaW1lRG9tLmh0bWwoJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhdE5hbWVEb20uaHRtbChjYXROYW1lKTtcclxuICAgICAgICAgICAgY2F0UHJvY2Vzc2luZ1RpbWVEb20uaHRtbChjYXRQcm9jZXNzaW5nVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHNoaXBwaW5nSW5mb0NvbnRlbnQuZGVsZWdhdGUoJyNzZWxlY3RfcmVnaW9uJywgJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY291bnRyeUlkID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBpZihjb3VudHJ5SWQgPiAwICYmIGluQWpheCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBnZXRfc2hpcHBpbmdfaW5mbyhjb3VudHJ5SWQpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vY2hvb3NlIGJyaWRlbWFpZCBkcmVzc2VzIHdoZW4gaW5pdFxyXG4gICAgaWYodHlwZW9mICQoJyNzZWxlY3Rfbm90X3NhbXBsZV9zYWxlX2NhdGVnb3J5JylbMF0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICQoJyNzZWxlY3Rfbm90X3NhbXBsZV9zYWxlX2NhdGVnb3J5JykudmFsKDcpO1xyXG4gICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9ICQoJyNzZWxlY3Rfbm90X3NhbXBsZV9zYWxlX2NhdGVnb3J5JylbMF0uc2VsZWN0ZWRPcHRpb25zO1xyXG4gICAgICAgIHZhciBjYXROYW1lID0gJChzZWxlY3RlZE9wdGlvbikuYXR0cignZGF0YS1jYXQtbmFtZScpO1xyXG4gICAgICAgIHZhciBjYXRQcm9jZXNzaW5nVGltZSA9ICQoc2VsZWN0ZWRPcHRpb24pLmF0dHIoJ2RhdGEtcHJvY2Vzc2luZy10aW1lJyk7XHJcbiAgICAgICAgdmFyIGNhdE5hbWVEb20gPSAkKCcucHJvY2Vzc2luZy10aW1lJykuZmluZCgnI2NhdC1uYW1lJyk7XHJcbiAgICAgICAgdmFyIGNhdFByb2Nlc3NpbmdUaW1lRG9tID0gJCgnLnByb2Nlc3NpbmctdGltZScpLmZpbmQoJyNjYXQtcHJvY2Vzc2luZy10aW1lJyk7XHJcbiAgICAgICAgaWYoY2F0TmFtZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgY2F0TmFtZURvbS5odG1sKCcnKTtcclxuICAgICAgICAgICAgY2F0UHJvY2Vzc2luZ1RpbWVEb20uaHRtbCgnJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2F0TmFtZURvbS5odG1sKGNhdE5hbWUpO1xyXG4gICAgICAgICAgICBjYXRQcm9jZXNzaW5nVGltZURvbS5odG1sKGNhdFByb2Nlc3NpbmdUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBnZXRfc2hpcHBpbmdfaW5mbyA9IGZ1bmN0aW9uKGNvdW50cnlJZCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICAndHlwZSc6ICdHRVQnLFxyXG4gICAgICAgICd1cmwnOiB3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwJyxcclxuICAgICAgICAnZGF0YSc6ICdhY3Q9Z2V0X3NoaXBwaW5nX21ldGhvZF93aXRoX2Jhc2ljX2ZlZSZjb3VudHJ5X2lkPScgKyBjb3VudHJ5SWQsXHJcbiAgICAgICAgJ2NhY2hlJzogdHJ1ZSxcclxuICAgICAgICAnZGF0YVR5cGUnOiAnanNvbicsXHJcbiAgICAgICAgJ2JlZm9yZVNlbmQnOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3N1Y2Nlc3MnOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICByZW5kZXJfc2hpcHBpbmdfaW5mbyhyLnNoaXBwaW5nX21ldGhvZHMpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG52YXIgcmVuZGVyX3NoaXBwaW5nX2luZm8gPSBmdW5jdGlvbihzaGlwcGluZ0luZm8pIHtcclxuICAgIHZhciBzaGlwbWVudHNUYm9keSA9IHNoaXBwaW5nSW5mb0NvbnRlbnQuZmluZCgndGJvZHknKTtcclxuICAgIHZhciBzaGlwbWVudHNEb20gPSAnJ1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGlwcGluZ0luZm8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgc2hpcG1lbnQgPSBzaGlwcGluZ0luZm9baV1cclxuICAgICAgICBzaGlwbWVudHNEb20gKz0gJzx0cj4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgIDx0ZD4nICsgc2hpcG1lbnQubmFtZSArICc8L3RkPicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgPHRkPicgKyBzaGlwbWVudC5zaGlwcGluZ190aW1lLnRvTG93ZXJDYXNlKCkgKyAnPC90ZD4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgIDx0ZD4nICsgc2hpcG1lbnQuY29zdFRpcCArICc8L3RkPicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICA8L3RyPidcclxuICAgIH1cclxuICAgIHNoaXBtZW50c1Rib2R5Lmh0bWwoc2hpcG1lbnRzRG9tKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBcImluaXRcIjogaW5pdCxcclxufTtcbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1kaFpXRXZhbk12YUdWc2NDOXphR2x3Y0dsdVoxOXBibVp2TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTSXNJbVpwYkdVaU9pSm5aVzVsY21GMFpXUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpZG1GeUlDUWdQU0FvZEhsd1pXOW1JSGRwYm1SdmR5QWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JSGRwYm1SdmQxc25KQ2RkSURvZ2RIbHdaVzltSUdkc2IySmhiQ0FoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUEvSUdkc2IySmhiRnNuSkNkZElEb2diblZzYkNrN1hISmNiblpoY2lCd2NtOWpaWE56YVc1blZHbHRaVU52Ym5SbGJuUWdQU0FrS0NjdWNISnZZMlZ6YzJsdVp5MTBhVzFsSnlrN1hISmNiblpoY2lCemFHbHdjR2x1WjBsdVptOURiMjUwWlc1MElEMGdKQ2duTG5Ob2FYQndhVzVuTFdsdVptOG5LVHRjY2x4dWRtRnlJR2x1UVdwaGVDQTlJR1poYkhObE8xeHlYRzVjY2x4dWRtRnlJR2x1YVhRZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0J3Y205alpYTnphVzVuVkdsdFpVTnZiblJsYm5RdVpHVnNaV2RoZEdVb0p5TnpaV3hsWTNSZmJtOTBYM05oYlhCc1pWOXpZV3hsWDJOaGRHVm5iM0o1Snl3Z0oyTm9ZVzVuWlNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCMllYSWdjMlZzWldOMFpXUlBjSFJwYjI0Z1BTQWtLSFJvYVhNcFd6QmRMbk5sYkdWamRHVmtUM0IwYVc5dWN6dGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ1kyRjBUbUZ0WlNBOUlDUW9jMlZzWldOMFpXUlBjSFJwYjI0cExtRjBkSElvSjJSaGRHRXRZMkYwTFc1aGJXVW5LVHRjY2x4dUlDQWdJQ0FnSUNCMllYSWdZMkYwVUhKdlkyVnpjMmx1WjFScGJXVWdQU0FrS0hObGJHVmpkR1ZrVDNCMGFXOXVLUzVoZEhSeUtDZGtZWFJoTFhCeWIyTmxjM05wYm1jdGRHbHRaU2NwTzF4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJqWVhST1lXMWxSRzl0SUQwZ0pDaDBhR2x6S1M1d1lYSmxiblJ6S0NjdWNISnZZMlZ6YzJsdVp5MTBhVzFsSnlrdVptbHVaQ2duSTJOaGRDMXVZVzFsSnlrN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUdOaGRGQnliMk5sYzNOcGJtZFVhVzFsUkc5dElEMGdKQ2gwYUdsektTNXdZWEpsYm5SektDY3VjSEp2WTJWemMybHVaeTEwYVcxbEp5a3VabWx1WkNnbkkyTmhkQzF3Y205alpYTnphVzVuTFhScGJXVW5LVHRjY2x4dUlDQWdJQ0FnSUNCcFppaGpZWFJPWVcxbElEMDlQU0FuSnlrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCallYUk9ZVzFsUkc5dExtaDBiV3dvSnljcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCallYUlFjbTlqWlhOemFXNW5WR2x0WlVSdmJTNW9kRzFzS0NjbktUdGNjbHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWFJPWVcxbFJHOXRMbWgwYld3b1kyRjBUbUZ0WlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGRGQnliMk5sYzNOcGJtZFVhVzFsUkc5dExtaDBiV3dvWTJGMFVISnZZMlZ6YzJsdVoxUnBiV1VwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMHBYSEpjYmlBZ0lDQnphR2x3Y0dsdVowbHVabTlEYjI1MFpXNTBMbVJsYkdWbllYUmxLQ2NqYzJWc1pXTjBYM0psWjJsdmJpY3NJQ2RqYUdGdVoyVW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUdOdmRXNTBjbmxKWkNBOUlDUW9kR2hwY3lrdWRtRnNLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2FXWW9ZMjkxYm5SeWVVbGtJRDRnTUNBbUppQnBia0ZxWVhnZ1BUMGdabUZzYzJVcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1oyVjBYM05vYVhCd2FXNW5YMmx1Wm04b1kyOTFiblJ5ZVVsa0tWeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDBwWEhKY2JpQWdJQ0F2TDJOb2IyOXpaU0JpY21sa1pXMWhhV1FnWkhKbGMzTmxjeUIzYUdWdUlHbHVhWFJjY2x4dUlDQWdJR2xtS0hSNWNHVnZaaUFrS0NjamMyVnNaV04wWDI1dmRGOXpZVzF3YkdWZmMyRnNaVjlqWVhSbFoyOXllU2NwV3pCZElDRTlJRndpZFc1a1pXWnBibVZrWENJcElIdGNjbHh1SUNBZ0lDQWdJQ0FrS0NjamMyVnNaV04wWDI1dmRGOXpZVzF3YkdWZmMyRnNaVjlqWVhSbFoyOXllU2NwTG5aaGJDZzNLVHRjY2x4dUlDQWdJQ0FnSUNCMllYSWdjMlZzWldOMFpXUlBjSFJwYjI0Z1BTQWtLQ2NqYzJWc1pXTjBYMjV2ZEY5ellXMXdiR1ZmYzJGc1pWOWpZWFJsWjI5eWVTY3BXekJkTG5ObGJHVmpkR1ZrVDNCMGFXOXVjenRjY2x4dUlDQWdJQ0FnSUNCMllYSWdZMkYwVG1GdFpTQTlJQ1FvYzJWc1pXTjBaV1JQY0hScGIyNHBMbUYwZEhJb0oyUmhkR0V0WTJGMExXNWhiV1VuS1R0Y2NseHVJQ0FnSUNBZ0lDQjJZWElnWTJGMFVISnZZMlZ6YzJsdVoxUnBiV1VnUFNBa0tITmxiR1ZqZEdWa1QzQjBhVzl1S1M1aGRIUnlLQ2RrWVhSaExYQnliMk5sYzNOcGJtY3RkR2x0WlNjcE8xeHlYRzRnSUNBZ0lDQWdJSFpoY2lCallYUk9ZVzFsUkc5dElEMGdKQ2duTG5CeWIyTmxjM05wYm1jdGRHbHRaU2NwTG1acGJtUW9KeU5qWVhRdGJtRnRaU2NwTzF4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJqWVhSUWNtOWpaWE56YVc1blZHbHRaVVJ2YlNBOUlDUW9KeTV3Y205alpYTnphVzVuTFhScGJXVW5LUzVtYVc1a0tDY2pZMkYwTFhCeWIyTmxjM05wYm1jdGRHbHRaU2NwTzF4eVhHNGdJQ0FnSUNBZ0lHbG1LR05oZEU1aGJXVWdQVDA5SUNjbktTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhkRTVoYldWRWIyMHVhSFJ0YkNnbkp5azdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhkRkJ5YjJObGMzTnBibWRVYVcxbFJHOXRMbWgwYld3b0p5Y3BPMXh5WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR05oZEU1aGJXVkViMjB1YUhSdGJDaGpZWFJPWVcxbEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRjBVSEp2WTJWemMybHVaMVJwYldWRWIyMHVhSFJ0YkNoallYUlFjbTlqWlhOemFXNW5WR2x0WlNrN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibHh5WEc1MllYSWdaMlYwWDNOb2FYQndhVzVuWDJsdVptOGdQU0JtZFc1amRHbHZiaWhqYjNWdWRISjVTV1FwSUh0Y2NseHVJQ0FnSUNRdVlXcGhlQ2g3WEhKY2JpQWdJQ0FnSUNBZ0ozUjVjR1VuT2lBblIwVlVKeXhjY2x4dUlDQWdJQ0FnSUNBbmRYSnNKem9nZDJWaVJHRjBZUzVYUlVKZlVrOVBWQ0FySUNkaGFtRjRMbkJvY0Njc1hISmNiaUFnSUNBZ0lDQWdKMlJoZEdFbk9pQW5ZV04wUFdkbGRGOXphR2x3Y0dsdVoxOXRaWFJvYjJSZmQybDBhRjlpWVhOcFkxOW1aV1VtWTI5MWJuUnllVjlwWkQwbklDc2dZMjkxYm5SeWVVbGtMRnh5WEc0Z0lDQWdJQ0FnSUNkallXTm9aU2M2SUhSeWRXVXNYSEpjYmlBZ0lDQWdJQ0FnSjJSaGRHRlVlWEJsSnpvZ0oycHpiMjRuTEZ4eVhHNGdJQ0FnSUNBZ0lDZGlaV1p2Y21WVFpXNWtKem9nWm5WdVkzUnBiMjRnS0hJcElIdGNjbHh1SUNBZ0lDQWdJQ0I5TEZ4eVhHNGdJQ0FnSUNBZ0lDZHpkV05qWlhOekp6b2dablZ1WTNScGIyNGdLSElwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WdVpHVnlYM05vYVhCd2FXNW5YMmx1Wm04b2NpNXphR2x3Y0dsdVoxOXRaWFJvYjJSektUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5S1R0Y2NseHVmVnh5WEc1Y2NseHVkbUZ5SUhKbGJtUmxjbDl6YUdsd2NHbHVaMTlwYm1adklEMGdablZ1WTNScGIyNG9jMmhwY0hCcGJtZEpibVp2S1NCN1hISmNiaUFnSUNCMllYSWdjMmhwY0cxbGJuUnpWR0p2WkhrZ1BTQnphR2x3Y0dsdVowbHVabTlEYjI1MFpXNTBMbVpwYm1Rb0ozUmliMlI1SnlrN1hISmNiaUFnSUNCMllYSWdjMmhwY0cxbGJuUnpSRzl0SUQwZ0p5ZGNjbHh1SUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2djMmhwY0hCcGJtZEpibVp2TG14bGJtZDBhRHNnYVNzcktTQjdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlITm9hWEJ0Wlc1MElEMGdjMmhwY0hCcGJtZEpibVp2VzJsZFhISmNiaUFnSUNBZ0lDQWdjMmhwY0cxbGJuUnpSRzl0SUNzOUlDYzhkSEkrSnlBclhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNjZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4ZEdRK0p5QXJJSE5vYVhCdFpXNTBMbTVoYldVZ0t5QW5QQzkwWkQ0bklDdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0p5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4MFpENG5JQ3NnYzJocGNHMWxiblF1YzJocGNIQnBibWRmZEdsdFpTNTBiMHh2ZDJWeVEyRnpaU2dwSUNzZ0p6d3ZkR1ErSnlBclhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNjZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4ZEdRK0p5QXJJSE5vYVhCdFpXNTBMbU52YzNSVWFYQWdLeUFuUEM5MFpENG5JQ3RjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdKeUFnSUNBZ0lDQWdJQ0FnUEM5MGNqNG5YSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQnphR2x3YldWdWRITlVZbTlrZVM1b2RHMXNLSE5vYVhCdFpXNTBjMFJ2YlNrN1hISmNibjFjY2x4dVhISmNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdlMXh5WEc0Z0lDQWdYQ0pwYm1sMFhDSTZJR2x1YVhRc1hISmNibjA3SWwxOSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG52YXIgc2l6ZUNoYXJ0SW5mbyA9ICQoJy5zaXplLWNoYXJ0LWluZm8nKVxyXG52YXIgaW5BamF4ID0gZmFsc2U7XHJcbnZhciBzaXplQ2hhcnREb20gPSBzaXplQ2hhcnRJbmZvLmZpbmQoJy5oZWxwLXNpemUtY2hhcnQnKTtcclxuY29uc3QgQnJpZGVzTWFpZERyZXNzZWRDYXRJZCA9IDc7XHJcblxyXG52YXIgaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgc2l6ZUNoYXJ0SW5mby5kZWxlZ2F0ZSgnI3NlbGVjdF9zaXplX2NoYXJ0X2NhdGVnb3J5JywgJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY2F0SWQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmKGNhdElkICE9ICcnICYmIGluQWpheCA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBnZXRTaXplQ2hhcnRCeUNhdElkKGNhdElkKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLy9zZWxlY3QgdGhlIHdlZGRpbmcgZHJlc3NlcyB3aGVuIHRoZSBwYWdlIGxvYWRlZFxyXG4gICAgJCgnI3NlbGVjdF9zaXplX2NoYXJ0X2NhdGVnb3J5JykudmFsKEJyaWRlc01haWREcmVzc2VkQ2F0SWQpO1xyXG4gICAgZ2V0U2l6ZUNoYXJ0QnlDYXRJZChCcmlkZXNNYWlkRHJlc3NlZENhdElkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2l6ZUNoYXJ0QnlDYXRJZChjYXRJZCkge1xyXG4gICAgaW5BamF4ID0gdHJ1ZTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgJ3R5cGUnOiAnUE9TVCcsXHJcbiAgICAgICAgJ3VybCc6IHdlYkRhdGEuV0VCX1JPT1QgKyAnYWpheC5waHAnLFxyXG4gICAgICAgICdkYXRhJzogJ2FjdD1nZXRfc2l6ZV9jaGFydCZjYXRfaWQ9JyArIGNhdElkLFxyXG4gICAgICAgICdjYWNoZSc6IHRydWUsXHJcbiAgICAgICAgJ2RhdGFUeXBlJzogJ2pzb24nLFxyXG4gICAgICAgICdzdWNjZXNzJzogZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgaWYoci5jb2RlID09IDApe1xyXG4gICAgICAgICAgICAgICAgc2l6ZUNoYXJ0RG9tLmh0bWwoci5zaXplY2hhcnQpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3BvcF9tZWFzdXJlX3NpbXBsZV90YWInKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2l6ZVRhYmxlVGl0bGUgPSAkKCcuaGVscC1zaXplLWNoYXJ0JykuZmluZCgnY2FwdGlvbicpLmh0bWwoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzaXplQmxvY2tUaXRsZSA9ICQoJy5oZWxwLXNpemVjaGFydC1ibG9jay10aXRsZScpWzBdO1xyXG4gICAgICAgICAgICAgICAgJChzaXplQmxvY2tUaXRsZSkuaHRtbChzaXplVGFibGVUaXRsZSlcclxuICAgICAgICAgICAgICAgIGluQWpheCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5BamF4ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFwiaW5pdFwiOiBpbml0LFxyXG59XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltZGhaV0V2YW5NdmFHVnNjQzl6YVhwbFgyTm9ZWEowTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJJaXdpWm1sc1pTSTZJbWRsYm1WeVlYUmxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKMllYSWdKQ0E5SUNoMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJRDhnZDJsdVpHOTNXeWNrSjEwZ09pQjBlWEJsYjJZZ1oyeHZZbUZzSUNFOVBTQmNJblZ1WkdWbWFXNWxaRndpSUQ4Z1oyeHZZbUZzV3lja0oxMGdPaUJ1ZFd4c0tUdGNjbHh1ZG1GeUlITnBlbVZEYUdGeWRFbHVabThnUFNBa0tDY3VjMmw2WlMxamFHRnlkQzFwYm1adkp5bGNjbHh1ZG1GeUlHbHVRV3BoZUNBOUlHWmhiSE5sTzF4eVhHNTJZWElnYzJsNlpVTm9ZWEowUkc5dElEMGdjMmw2WlVOb1lYSjBTVzVtYnk1bWFXNWtLQ2N1YUdWc2NDMXphWHBsTFdOb1lYSjBKeWs3WEhKY2JtTnZibk4wSUVKeWFXUmxjMDFoYVdSRWNtVnpjMlZrUTJGMFNXUWdQU0EzTzF4eVhHNWNjbHh1ZG1GeUlHbHVhWFFnUFNCbWRXNWpkR2x2YmlncElIdGNjbHh1SUNBZ0lITnBlbVZEYUdGeWRFbHVabTh1WkdWc1pXZGhkR1VvSnlOelpXeGxZM1JmYzJsNlpWOWphR0Z5ZEY5allYUmxaMjl5ZVNjc0lDZGphR0Z1WjJVbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJR05oZEVsa0lEMGdKQ2gwYUdsektTNTJZV3dvS1R0Y2NseHVJQ0FnSUNBZ0lDQnBaaWhqWVhSSlpDQWhQU0FuSnlBbUppQnBia0ZxWVhnZ1BUMDlJR1poYkhObEtYdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1oyVjBVMmw2WlVOb1lYSjBRbmxEWVhSSlpDaGpZWFJKWkNrN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmU2xjY2x4dUlDQWdJQzh2YzJWc1pXTjBJSFJvWlNCM1pXUmthVzVuSUdSeVpYTnpaWE1nZDJobGJpQjBhR1VnY0dGblpTQnNiMkZrWldSY2NseHVJQ0FnSUNRb0p5TnpaV3hsWTNSZmMybDZaVjlqYUdGeWRGOWpZWFJsWjI5eWVTY3BMblpoYkNoQ2NtbGtaWE5OWVdsa1JISmxjM05sWkVOaGRFbGtLVHRjY2x4dUlDQWdJR2RsZEZOcGVtVkRhR0Z5ZEVKNVEyRjBTV1FvUW5KcFpHVnpUV0ZwWkVSeVpYTnpaV1JEWVhSSlpDazdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdkbGRGTnBlbVZEYUdGeWRFSjVRMkYwU1dRb1kyRjBTV1FwSUh0Y2NseHVJQ0FnSUdsdVFXcGhlQ0E5SUhSeWRXVTdYSEpjYmlBZ0lDQWtMbUZxWVhnb2UxeHlYRzRnSUNBZ0lDQWdJQ2QwZVhCbEp6b2dKMUJQVTFRbkxGeHlYRzRnSUNBZ0lDQWdJQ2QxY213bk9pQjNaV0pFWVhSaExsZEZRbDlTVDA5VUlDc2dKMkZxWVhndWNHaHdKeXhjY2x4dUlDQWdJQ0FnSUNBblpHRjBZU2M2SUNkaFkzUTlaMlYwWDNOcGVtVmZZMmhoY25RbVkyRjBYMmxrUFNjZ0t5QmpZWFJKWkN4Y2NseHVJQ0FnSUNBZ0lDQW5ZMkZqYUdVbk9pQjBjblZsTEZ4eVhHNGdJQ0FnSUNBZ0lDZGtZWFJoVkhsd1pTYzZJQ2RxYzI5dUp5eGNjbHh1SUNBZ0lDQWdJQ0FuYzNWalkyVnpjeWM2SUdaMWJtTjBhVzl1SUNoeUtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LSEl1WTI5a1pTQTlQU0F3S1h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITnBlbVZEYUdGeWRFUnZiUzVvZEcxc0tISXVjMmw2WldOb1lYSjBLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNRb0p5TndiM0JmYldWaGMzVnlaVjl6YVcxd2JHVmZkR0ZpSnlrdWMyaHZkeWdwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSE5wZW1WVVlXSnNaVlJwZEd4bElEMGdKQ2duTG1obGJIQXRjMmw2WlMxamFHRnlkQ2NwTG1acGJtUW9KMk5oY0hScGIyNG5LUzVvZEcxc0tDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2MybDZaVUpzYjJOclZHbDBiR1VnUFNBa0tDY3VhR1ZzY0MxemFYcGxZMmhoY25RdFlteHZZMnN0ZEdsMGJHVW5LVnN3WFR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDUW9jMmw2WlVKc2IyTnJWR2wwYkdVcExtaDBiV3dvYzJsNlpWUmhZbXhsVkdsMGJHVXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwYmtGcVlYZ2dQU0JtWVd4elpUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbHVRV3BoZUNBOUlHWmhiSE5sTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZTbGNjbHh1ZlZ4eVhHNWNjbHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0I3WEhKY2JpQWdJQ0JjSW1sdWFYUmNJam9nYVc1cGRDeGNjbHh1ZlNKZGZRPT0iLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4vL2RlZmluZShmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgbW9kdWxlKSB7XHJcblxyXG4gICAgdmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcblxyXG4gICAgdmFyIGluaXRfdGVzdGlvbW9uaWFscyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8v5o+S5YWl5Zu95peXXHJcbiAgICAgICAgKGZ1bmN0aW9uIHNldEZsYWcoKSB7XHJcbiAgICAgICAgICAgIHZhciBmbGFncyA9IHtcclxuICAgICAgICAgICAgICAgICdlbicgOiBbJ2ZsYWdfMzg1OS5naWYnLCAnZmxhZ18zODU5LmdpZicsICdmbGFnXzM4NTguZ2lmJywgJ2ZsYWdfMzg1OS5naWYnLCAnZmxhZ18zODQ0LmdpZicsICdmbGFnXzM4NTkuZ2lmJ10sXHJcbiAgICAgICAgICAgICAgICAnZGUnIDogWydmbGFnXzQwMTcuZ2lmJywgJ2ZsYWdfNDAxNy5naWYnLCAnZmxhZ18zOTM3LmdpZicsICdmbGFnXzQwMTcuZ2lmJywgJ2ZsYWdfNDAxNy5naWYnLCAnZmxhZ180MDE3LmdpZiddLFxyXG4gICAgICAgICAgICAgICAgJ2ZyJyA6IFsnZmxhZ180MDAzLmdpZicsICdmbGFnXzQwMDMuZ2lmJywgJ2ZsYWdfNDA5My5naWYnLCAnZmxhZ180MjAzLmdpZicsICdmbGFnXzM5NTMuZ2lmJywgJ2ZsYWdfMzk1My5naWYnXSxcclxuICAgICAgICAgICAgICAgICdlcycgOiBbJ2ZsYWdfMzg1OS5naWYnLCAnZmxhZ18zODU5LmdpZicsICdmbGFnXzM4NTguZ2lmJywgJ2ZsYWdfMzg1OS5naWYnLCAnZmxhZ18zODQ0LmdpZicsICdmbGFnXzM4NTkuZ2lmJ10sXHJcbiAgICAgICAgICAgICAgICAnc2UnIDogWydmbGFnXzQyMDIuZ2lmJywgJ2ZsYWdfNDIwMi5naWYnLCAnZmxhZ180MjAyLmdpZicsICdmbGFnXzQyMDIuZ2lmJywgJ2ZsYWdfNDIwMi5naWYnLCAnZmxhZ180MjAyLmdpZiddLFxyXG4gICAgICAgICAgICAgICAgJ25vJyA6IFsnZmxhZ18zODU5LmdpZicsICdmbGFnXzM4NTkuZ2lmJywgJ2ZsYWdfMzg1OC5naWYnLCAnZmxhZ18zODU5LmdpZicsICdmbGFnXzM4NDQuZ2lmJywgJ2ZsYWdfMzg1OS5naWYnXSxcclxuICAgICAgICAgICAgICAgICdpdCcgOiBbJ2ZsYWdfMzg1OS5naWYnLCAnZmxhZ18zODU5LmdpZicsICdmbGFnXzM4NTguZ2lmJywgJ2ZsYWdfMzg1OS5naWYnLCAnZmxhZ18zODQ0LmdpZicsICdmbGFnXzM4NTkuZ2lmJ10sXHJcbiAgICAgICAgICAgICAgICAncHQnIDogWydmbGFnXzM4NTkuZ2lmJywgJ2ZsYWdfMzg1OS5naWYnLCAnZmxhZ18zODU4LmdpZicsICdmbGFnXzM4NTkuZ2lmJywgJ2ZsYWdfMzg0NC5naWYnLCAnZmxhZ18zODU5LmdpZiddLFxyXG4gICAgICAgICAgICAgICAgJ2RhJyA6IFsnZmxhZ18zOTg3LmdpZicsICdmbGFnXzM5ODcuZ2lmJywgJ2ZsYWdfMzk4Ny5naWYnLCAnZmxhZ18zOTg3LmdpZicsICdmbGFnXzM5ODcuZ2lmJywgJ2ZsYWdfMzk4Ny5naWYnXSxcclxuICAgICAgICAgICAgICAgICdmaScgOiBbJ2ZsYWdfMzg1OS5naWYnLCAnZmxhZ18zODU5LmdpZicsICdmbGFnXzM4NTguZ2lmJywgJ2ZsYWdfMzg1OS5naWYnLCAnZmxhZ18zODQ0LmdpZicsICdmbGFnXzM4NTkuZ2lmJ10sXHJcbiAgICAgICAgICAgICAgICAncnUnIDogWydmbGFnXzM4NTkuZ2lmJywgJ2ZsYWdfMzg1OS5naWYnLCAnZmxhZ18zODU4LmdpZicsICdmbGFnXzM4NTkuZ2lmJywgJ2ZsYWdfMzg0NC5naWYnLCAnZmxhZ18zODU5LmdpZiddLFxyXG4gICAgICAgICAgICAgICAgJ25sJyA6IFsnZmxhZ18zODU5LmdpZicsICdmbGFnXzM4NTkuZ2lmJywgJ2ZsYWdfMzg1OC5naWYnLCAnZmxhZ18zODU5LmdpZicsICdmbGFnXzM4NDQuZ2lmJywgJ2ZsYWdfMzg1OS5naWYnXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgbGFuZ19jb2RlID0gd2ViRGF0YS5sYW5nO1xyXG4gICAgICAgICAgICAkKCcudG1yZXZpZXdzIGltZycpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignc3JjJywgd2ViRGF0YS5JTUdfUEFUSCArICdmbGFnLycgKyBmbGFnc1tsYW5nX2NvZGVdW2luZGV4XSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pKCk7XHJcblxyXG4gICAgICAgIC8v5o+S5YWl6K+E6K665pe26Ze0XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0TWF4RGF5KHksIG0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHksIG0sIDApLmdldERhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIChmdW5jdGlvbiBzZXRSZXZpZXdUaW1lKCkge1xyXG4gICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgdmFyIHllYXIgPSAxOTAwICsgbm93LmdldFllYXIoKTtcclxuICAgICAgICAgICAgdmFyIG1vbnRoID0gKDEgKyBub3cuZ2V0TW9udGgoKSkgLyAxMCA8IDEgPyAnMCcgKyAoMSArIG5vdy5nZXRNb250aCgpKSA6ICgxICsgbm93LmdldE1vbnRoKCkpO1xyXG4gICAgICAgICAgICB2YXIgcmV2aWV3X3RpbWUgPSBbXTtcclxuICAgICAgICAgICAgdmFyIG1heF9kYXkgPSBnZXRNYXhEYXkoeWVhciwgbW9udGggLSAxKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDI7IGkgPCA2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciByX21vbnRoID0gKG5vdy5nZXREYXRlKCkgLSBpKSA8IDEgPyBtb250aCAtIDEgOiBtb250aDtcclxuICAgICAgICAgICAgICAgIHZhciB0aW1lID0gKG5vdy5nZXREYXRlKCkgKyAobm93LmdldERhdGUoKSAtIGkgPCAxID8gbWF4X2RheSA6IDApIC0gaSkgKyAnIC8gJyArIHJfbW9udGggKyAnIC8gJyArIHllYXI7XHJcbiAgICAgICAgICAgICAgICByZXZpZXdfdGltZS5wdXNoKHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMiB8fCBpID09IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXZpZXdfdGltZS5wdXNoKHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKCcudG1yZXZpZXdzIC52aWV3dGltZScpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuaHRtbChyZXZpZXdfdGltZVtpbmRleF0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KSgpO1xyXG5cclxuICAgICAgICAvL3doZW4gY2xpY2sgYSBsaW5rLCBvcGVuIHRoZSBwYWdlIGluIGFzIG5ldyB3aW5kb3dcclxuICAgICAgICByZXF1aXJlKCcuLi9jb21tb24vb3BlbndpbicpO1xyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnRzLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy90byBkZXRlcm1pbmUgd2hpY2ggY29kZSB0byB0YWtlIGVmZmVjdFxyXG4gICAgICAgIHZhciBwYWdlX2lkID0gcGFnZURhdGEgJiYgcGFnZURhdGEucGFnZV9pZCA/IHBhZ2VEYXRhLnBhZ2VfaWQgOiAnJztcclxuXHJcbiAgICAgICAgLy8gVGVzdGltb25pYWxzXHJcbiAgICAgICAgaWYgKHBhZ2VfaWQgPT0gMyAmJiAkKCcudGVzdGlvbW9uaWFscycpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaW5pdF90ZXN0aW9tb25pYWxzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4vL30pO1xyXG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1kaFpXRXZhbk12YUdWc2NDOTBaWE4wYVcxdmJtbGhiSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTSXNJbVpwYkdVaU9pSm5aVzVsY21GMFpXUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk5a1pXWnBibVVvWm5WdVkzUnBiMjRnS0hKbGNYVnBjbVVzSUdWNGNHOXlkSE1zSUcxdlpIVnNaU2tnZTF4eVhHNWNjbHh1SUNBZ0lIWmhjaUFrSUQwZ0tIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnUHlCM2FXNWtiM2RiSnlRblhTQTZJSFI1Y0dWdlppQm5iRzlpWVd3Z0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5Qm5iRzlpWVd4Ykp5UW5YU0E2SUc1MWJHd3BPMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQnBibWwwWDNSbGMzUnBiMjF2Ym1saGJITWdQU0JtZFc1amRHbHZiaWdwSUh0Y2NseHVJQ0FnSUNBZ0lDQXZMK2FQa3VXRnBlV2J2ZWFYbDF4eVhHNGdJQ0FnSUNBZ0lDaG1kVzVqZEdsdmJpQnpaWFJHYkdGbktDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnWm14aFozTWdQU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBblpXNG5JRG9nV3lkbWJHRm5Yek00TlRrdVoybG1KeXdnSjJac1lXZGZNemcxT1M1bmFXWW5MQ0FuWm14aFoxOHpPRFU0TG1kcFppY3NJQ2RtYkdGblh6TTROVGt1WjJsbUp5d2dKMlpzWVdkZk16ZzBOQzVuYVdZbkxDQW5abXhoWjE4ek9EVTVMbWRwWmlkZExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdKMlJsSnlBNklGc25abXhoWjE4ME1ERTNMbWRwWmljc0lDZG1iR0ZuWHpRd01UY3VaMmxtSnl3Z0oyWnNZV2RmTXprek55NW5hV1luTENBblpteGhaMTgwTURFM0xtZHBaaWNzSUNkbWJHRm5YelF3TVRjdVoybG1KeXdnSjJac1lXZGZOREF4Tnk1bmFXWW5YU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNkbWNpY2dPaUJiSjJac1lXZGZOREF3TXk1bmFXWW5MQ0FuWm14aFoxODBNREF6TG1kcFppY3NJQ2RtYkdGblh6UXdPVE11WjJsbUp5d2dKMlpzWVdkZk5ESXdNeTVuYVdZbkxDQW5abXhoWjE4ek9UVXpMbWRwWmljc0lDZG1iR0ZuWHpNNU5UTXVaMmxtSjEwc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQW5aWE1uSURvZ1d5ZG1iR0ZuWHpNNE5Ua3VaMmxtSnl3Z0oyWnNZV2RmTXpnMU9TNW5hV1luTENBblpteGhaMTh6T0RVNExtZHBaaWNzSUNkbWJHRm5Yek00TlRrdVoybG1KeXdnSjJac1lXZGZNemcwTkM1bmFXWW5MQ0FuWm14aFoxOHpPRFU1TG1kcFppZGRMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSjNObEp5QTZJRnNuWm14aFoxODBNakF5TG1kcFppY3NJQ2RtYkdGblh6UXlNREl1WjJsbUp5d2dKMlpzWVdkZk5ESXdNaTVuYVdZbkxDQW5abXhoWjE4ME1qQXlMbWRwWmljc0lDZG1iR0ZuWHpReU1ESXVaMmxtSnl3Z0oyWnNZV2RmTkRJd01pNW5hV1luWFN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDZHVieWNnT2lCYkoyWnNZV2RmTXpnMU9TNW5hV1luTENBblpteGhaMTh6T0RVNUxtZHBaaWNzSUNkbWJHRm5Yek00TlRndVoybG1KeXdnSjJac1lXZGZNemcxT1M1bmFXWW5MQ0FuWm14aFoxOHpPRFEwTG1kcFppY3NJQ2RtYkdGblh6TTROVGt1WjJsbUoxMHNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FuYVhRbklEb2dXeWRtYkdGblh6TTROVGt1WjJsbUp5d2dKMlpzWVdkZk16ZzFPUzVuYVdZbkxDQW5abXhoWjE4ek9EVTRMbWRwWmljc0lDZG1iR0ZuWHpNNE5Ua3VaMmxtSnl3Z0oyWnNZV2RmTXpnME5DNW5hV1luTENBblpteGhaMTh6T0RVNUxtZHBaaWRkTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0ozQjBKeUE2SUZzblpteGhaMTh6T0RVNUxtZHBaaWNzSUNkbWJHRm5Yek00TlRrdVoybG1KeXdnSjJac1lXZGZNemcxT0M1bmFXWW5MQ0FuWm14aFoxOHpPRFU1TG1kcFppY3NJQ2RtYkdGblh6TTRORFF1WjJsbUp5d2dKMlpzWVdkZk16ZzFPUzVuYVdZblhTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2RrWVNjZ09pQmJKMlpzWVdkZk16azROeTVuYVdZbkxDQW5abXhoWjE4ek9UZzNMbWRwWmljc0lDZG1iR0ZuWHpNNU9EY3VaMmxtSnl3Z0oyWnNZV2RmTXprNE55NW5hV1luTENBblpteGhaMTh6T1RnM0xtZHBaaWNzSUNkbWJHRm5Yek01T0RjdVoybG1KMTBzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBblpta25JRG9nV3lkbWJHRm5Yek00TlRrdVoybG1KeXdnSjJac1lXZGZNemcxT1M1bmFXWW5MQ0FuWm14aFoxOHpPRFU0TG1kcFppY3NJQ2RtYkdGblh6TTROVGt1WjJsbUp5d2dKMlpzWVdkZk16ZzBOQzVuYVdZbkxDQW5abXhoWjE4ek9EVTVMbWRwWmlkZExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdKM0oxSnlBNklGc25abXhoWjE4ek9EVTVMbWRwWmljc0lDZG1iR0ZuWHpNNE5Ua3VaMmxtSnl3Z0oyWnNZV2RmTXpnMU9DNW5hV1luTENBblpteGhaMTh6T0RVNUxtZHBaaWNzSUNkbWJHRm5Yek00TkRRdVoybG1KeXdnSjJac1lXZGZNemcxT1M1bmFXWW5YU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNkdWJDY2dPaUJiSjJac1lXZGZNemcxT1M1bmFXWW5MQ0FuWm14aFoxOHpPRFU1TG1kcFppY3NJQ2RtYkdGblh6TTROVGd1WjJsbUp5d2dKMlpzWVdkZk16ZzFPUzVuYVdZbkxDQW5abXhoWjE4ek9EUTBMbWRwWmljc0lDZG1iR0ZuWHpNNE5Ua3VaMmxtSjExY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHeGhibWRmWTI5a1pTQTlJSGRsWWtSaGRHRXViR0Z1Wnp0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSkNnbkxuUnRjbVYyYVdWM2N5QnBiV2NuS1M1bFlXTm9LR1oxYm1OMGFXOXVLR2x1WkdWNEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FrS0hSb2FYTXBMbUYwZEhJb0ozTnlZeWNzSUhkbFlrUmhkR0V1U1UxSFgxQkJWRWdnS3lBblpteGhaeThuSUNzZ1pteGhaM05iYkdGdVoxOWpiMlJsWFZ0cGJtUmxlRjBwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUNBZ0lDQjlLU2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0F2TCthUGt1V0ZwZWl2aE9pdXV1YVh0dW1YdEZ4eVhHNGdJQ0FnSUNBZ0lHWjFibU4wYVc5dUlHZGxkRTFoZUVSaGVTaDVMQ0J0S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ1WlhjZ1JHRjBaU2g1TENCdExDQXdLUzVuWlhSRVlYUmxLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNBb1puVnVZM1JwYjI0Z2MyVjBVbVYyYVdWM1ZHbHRaU2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHNXZkeUE5SUc1bGR5QkVZWFJsS0NrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQjVaV0Z5SUQwZ01Ua3dNQ0FySUc1dmR5NW5aWFJaWldGeUtDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ0YjI1MGFDQTlJQ2d4SUNzZ2JtOTNMbWRsZEUxdmJuUm9LQ2twSUM4Z01UQWdQQ0F4SUQ4Z0p6QW5JQ3NnS0RFZ0t5QnViM2N1WjJWMFRXOXVkR2dvS1NrZ09pQW9NU0FySUc1dmR5NW5aWFJOYjI1MGFDZ3BLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhKbGRtbGxkMTkwYVcxbElEMGdXMTA3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCdFlYaGZaR0Y1SUQwZ1oyVjBUV0Y0UkdGNUtIbGxZWElzSUcxdmJuUm9JQzBnTVNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXlPeUJwSUR3Z05qc2dhU3NyS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnY2w5dGIyNTBhQ0E5SUNodWIzY3VaMlYwUkdGMFpTZ3BJQzBnYVNrZ1BDQXhJRDhnYlc5dWRHZ2dMU0F4SURvZ2JXOXVkR2c3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdkR2x0WlNBOUlDaHViM2N1WjJWMFJHRjBaU2dwSUNzZ0tHNXZkeTVuWlhSRVlYUmxLQ2tnTFNCcElEd2dNU0EvSUcxaGVGOWtZWGtnT2lBd0tTQXRJR2twSUNzZ0p5QXZJQ2NnS3lCeVgyMXZiblJvSUNzZ0p5QXZJQ2NnS3lCNVpXRnlPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMmFXVjNYM1JwYldVdWNIVnphQ2gwYVcxbEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNocElEMDlJRElnZkh3Z2FTQTlQU0ExS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMmFXVjNYM1JwYldVdWNIVnphQ2gwYVcxbEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSkNnbkxuUnRjbVYyYVdWM2N5QXVkbWxsZDNScGJXVW5LUzVsWVdOb0tHWjFibU4wYVc5dUtHbHVaR1Y0S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWtLSFJvYVhNcExtaDBiV3dvY21WMmFXVjNYM1JwYldWYmFXNWtaWGhkS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lDQWdmU2tvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnTHk5M2FHVnVJR05zYVdOcklHRWdiR2x1YXl3Z2IzQmxiaUIwYUdVZ2NHRm5aU0JwYmlCaGN5QnVaWGNnZDJsdVpHOTNYSEpjYmlBZ0lDQWdJQ0FnY21WeGRXbHlaU2duTGk0dlkyOXRiVzl1TDI5d1pXNTNhVzRuS1R0Y2NseHVJQ0FnSUgwN1hISmNibHh5WEc0Z0lDQWdaWGh3YjNKMGN5NXBibWwwSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdJQ0FnSUM4dmRHOGdaR1YwWlhKdGFXNWxJSGRvYVdOb0lHTnZaR1VnZEc4Z2RHRnJaU0JsWm1abFkzUmNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ2NHRm5aVjlwWkNBOUlIQmhaMlZFWVhSaElDWW1JSEJoWjJWRVlYUmhMbkJoWjJWZmFXUWdQeUJ3WVdkbFJHRjBZUzV3WVdkbFgybGtJRG9nSnljN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUM4dklGUmxjM1JwYlc5dWFXRnNjMXh5WEc0Z0lDQWdJQ0FnSUdsbUlDaHdZV2RsWDJsa0lEMDlJRE1nSmlZZ0pDZ25MblJsYzNScGIyMXZibWxoYkhNbktTNXNaVzVuZEdnZ1BpQXdLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2x1YVhSZmRHVnpkR2x2Ylc5dWFXRnNjeWdwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0I5TzF4eVhHNWNjbHh1THk5OUtUdGNjbHh1SWwxOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9qcycpXG4iLCIvKlxuICogRmlsZTogaWZyYW1lUmVzaXplci5jb250ZW50V2luZG93LmpzXG4gKiBEZXNjOiBJbmNsdWRlIHRoaXMgZmlsZSBpbiBhbnkgcGFnZSBiZWluZyBsb2FkZWQgaW50byBhbiBpZnJhbWVcbiAqICAgICAgIHRvIGZvcmNlIHRoZSBpZnJhbWUgdG8gcmVzaXplIHRvIHRoZSBjb250ZW50IHNpemUuXG4gKiBSZXF1aXJlczogaWZyYW1lUmVzaXplci5qcyBvbiBob3N0IHBhZ2UuXG4gKiBEb2M6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGpicmFkc2hhdy9pZnJhbWUtcmVzaXplclxuICogQXV0aG9yOiBEYXZpZCBKLiBCcmFkc2hhdyAtIGRhdmVAYnJhZHNoYXcubmV0XG4gKlxuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzb25hcmpzL2NvZ25pdGl2ZS1jb21wbGV4aXR5LCBuby1zaGFkb3ctcmVzdHJpY3RlZC1uYW1lc1xuOyhmdW5jdGlvbiAodW5kZWZpbmVkKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIC8vIGRvbid0IHJ1biBmb3Igc2VydmVyIHNpZGUgcmVuZGVyXG5cbiAgdmFyIGF1dG9SZXNpemUgPSB0cnVlLFxuICAgIGJhc2UgPSAxMCxcbiAgICBib2R5QmFja2dyb3VuZCA9ICcnLFxuICAgIGJvZHlNYXJnaW4gPSAwLFxuICAgIGJvZHlNYXJnaW5TdHIgPSAnJyxcbiAgICBib2R5T2JzZXJ2ZXIgPSBudWxsLFxuICAgIGJvZHlQYWRkaW5nID0gJycsXG4gICAgY2FsY3VsYXRlV2lkdGggPSBmYWxzZSxcbiAgICBkb3VibGVFdmVudExpc3QgPSB7IHJlc2l6ZTogMSwgY2xpY2s6IDEgfSxcbiAgICBldmVudENhbmNlbFRpbWVyID0gMTI4LFxuICAgIGZpcnN0UnVuID0gdHJ1ZSxcbiAgICBoZWlnaHQgPSAxLFxuICAgIGhlaWdodENhbGNNb2RlRGVmYXVsdCA9ICdib2R5T2Zmc2V0JyxcbiAgICBoZWlnaHRDYWxjTW9kZSA9IGhlaWdodENhbGNNb2RlRGVmYXVsdCxcbiAgICBpbml0TG9jayA9IHRydWUsXG4gICAgaW5pdE1zZyA9ICcnLFxuICAgIGluUGFnZUxpbmtzID0ge30sXG4gICAgaW50ZXJ2YWwgPSAzMixcbiAgICBpbnRlcnZhbFRpbWVyID0gbnVsbCxcbiAgICBsb2dnaW5nID0gZmFsc2UsXG4gICAgbW91c2VFdmVudHMgPSBmYWxzZSxcbiAgICBtc2dJRCA9ICdbaUZyYW1lU2l6ZXJdJywgLy8gTXVzdCBtYXRjaCBob3N0IHBhZ2UgbXNnIElEXG4gICAgbXNnSWRMZW4gPSBtc2dJRC5sZW5ndGgsXG4gICAgbXlJRCA9ICcnLFxuICAgIHJlc2V0UmVxdWlyZWRNZXRob2RzID0ge1xuICAgICAgbWF4OiAxLFxuICAgICAgbWluOiAxLFxuICAgICAgYm9keVNjcm9sbDogMSxcbiAgICAgIGRvY3VtZW50RWxlbWVudFNjcm9sbDogMVxuICAgIH0sXG4gICAgcmVzaXplRnJvbSA9ICdjaGlsZCcsXG4gICAgc2VuZFBlcm1pdCA9IHRydWUsXG4gICAgdGFyZ2V0ID0gd2luZG93LnBhcmVudCxcbiAgICB0YXJnZXRPcmlnaW5EZWZhdWx0ID0gJyonLFxuICAgIHRvbGVyYW5jZSA9IDAsXG4gICAgdHJpZ2dlckxvY2tlZCA9IGZhbHNlLFxuICAgIHRyaWdnZXJMb2NrZWRUaW1lciA9IG51bGwsXG4gICAgdGhyb3R0bGVkVGltZXIgPSAxNixcbiAgICB3aWR0aCA9IDEsXG4gICAgd2lkdGhDYWxjTW9kZURlZmF1bHQgPSAnc2Nyb2xsJyxcbiAgICB3aWR0aENhbGNNb2RlID0gd2lkdGhDYWxjTW9kZURlZmF1bHQsXG4gICAgd2luID0gd2luZG93LFxuICAgIG9uTWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oJ29uTWVzc2FnZSBmdW5jdGlvbiBub3QgZGVmaW5lZCcpXG4gICAgfSxcbiAgICBvblJlYWR5ID0gZnVuY3Rpb24gKCkge30sXG4gICAgb25QYWdlSW5mbyA9IGZ1bmN0aW9uICgpIHt9LFxuICAgIGN1c3RvbUNhbGNNZXRob2RzID0ge1xuICAgICAgaGVpZ2h0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0N1c3RvbSBoZWlnaHQgY2FsY3VsYXRpb24gZnVuY3Rpb24gbm90IGRlZmluZWQnKVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodFxuICAgICAgfSxcbiAgICAgIHdpZHRoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0N1c3RvbSB3aWR0aCBjYWxjdWxhdGlvbiBmdW5jdGlvbiBub3QgZGVmaW5lZCcpXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoXG4gICAgICB9XG4gICAgfSxcbiAgICBldmVudEhhbmRsZXJzQnlOYW1lID0ge30sXG4gICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG5cbiAgZnVuY3Rpb24gbm9vcCgpIHt9XG5cbiAgdHJ5IHtcbiAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5jcmVhdGUoXG4gICAgICB7fSxcbiAgICAgIHtcbiAgICAgICAgcGFzc2l2ZToge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcGFzc2l2ZVN1cHBvcnRlZCA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBub29wLCBvcHRpb25zKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgbm9vcCwgb3B0aW9ucylcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvKiAqL1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbCwgZXZ0LCBmdW5jLCBvcHRpb25zKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZ1bmMsIHBhc3NpdmVTdXBwb3J0ZWQgPyBvcHRpb25zIHx8IHt9IDogZmFsc2UpXG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKGVsLCBldnQsIGZ1bmMpIHtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgZnVuYywgZmFsc2UpXG4gIH1cblxuICBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKVxuICB9XG5cbiAgLy8gQmFzZWQgb24gdW5kZXJzY29yZS5qc1xuICBmdW5jdGlvbiB0aHJvdHRsZShmdW5jKSB7XG4gICAgdmFyIGNvbnRleHQsXG4gICAgICBhcmdzLFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZW91dCA9IG51bGwsXG4gICAgICBwcmV2aW91cyA9IDAsXG4gICAgICBsYXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcHJldmlvdXMgPSBEYXRlLm5vdygpXG4gICAgICAgIHRpbWVvdXQgPSBudWxsXG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICAgICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW11bHRpLWFzc2lnblxuICAgICAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG5vdyA9IERhdGUubm93KClcblxuICAgICAgaWYgKCFwcmV2aW91cykge1xuICAgICAgICBwcmV2aW91cyA9IG5vd1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVtYWluaW5nID0gdGhyb3R0bGVkVGltZXIgLSAobm93IC0gcHJldmlvdXMpXG5cbiAgICAgIGNvbnRleHQgPSB0aGlzXG4gICAgICBhcmdzID0gYXJndW1lbnRzXG5cbiAgICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB0aHJvdHRsZWRUaW1lcikge1xuICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICAgIHRpbWVvdXQgPSBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBwcmV2aW91cyA9IG5vd1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG5cbiAgICAgICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW11bHRpLWFzc2lnblxuICAgICAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRMb2dNc2cobXNnKSB7XG4gICAgcmV0dXJuIG1zZ0lEICsgJ1snICsgbXlJRCArICddICcgKyBtc2dcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvZyhtc2cpIHtcbiAgICBpZiAobG9nZ2luZyAmJiAnb2JqZWN0JyA9PT0gdHlwZW9mIHdpbmRvdy5jb25zb2xlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5sb2coZm9ybWF0TG9nTXNnKG1zZykpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gd2Fybihtc2cpIHtcbiAgICBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiB3aW5kb3cuY29uc29sZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2Fybihmb3JtYXRMb2dNc2cobXNnKSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHJlYWREYXRhRnJvbVBhcmVudCgpXG4gICAgbG9nKCdJbml0aWFsaXNpbmcgaUZyYW1lICgnICsgd2luZG93LmxvY2F0aW9uLmhyZWYgKyAnKScpXG4gICAgcmVhZERhdGFGcm9tUGFnZSgpXG4gICAgc2V0TWFyZ2luKClcbiAgICBzZXRCb2R5U3R5bGUoJ2JhY2tncm91bmQnLCBib2R5QmFja2dyb3VuZClcbiAgICBzZXRCb2R5U3R5bGUoJ3BhZGRpbmcnLCBib2R5UGFkZGluZylcbiAgICBpbmplY3RDbGVhckZpeEludG9Cb2R5RWxlbWVudCgpXG4gICAgY2hlY2tIZWlnaHRNb2RlKClcbiAgICBjaGVja1dpZHRoTW9kZSgpXG4gICAgc3RvcEluZmluaXRlUmVzaXppbmdPZklGcmFtZSgpXG4gICAgc2V0dXBQdWJsaWNNZXRob2RzKClcbiAgICBzZXR1cE1vdXNlRXZlbnRzKClcbiAgICBzdGFydEV2ZW50TGlzdGVuZXJzKClcbiAgICBpblBhZ2VMaW5rcyA9IHNldHVwSW5QYWdlTGlua3MoKVxuICAgIHNlbmRTaXplKCdpbml0JywgJ0luaXQgbWVzc2FnZSBmcm9tIGhvc3QgcGFnZScpXG4gICAgb25SZWFkeSgpXG4gIH1cblxuICBmdW5jdGlvbiByZWFkRGF0YUZyb21QYXJlbnQoKSB7XG4gICAgZnVuY3Rpb24gc3RyQm9vbChzdHIpIHtcbiAgICAgIHJldHVybiAndHJ1ZScgPT09IHN0clxuICAgIH1cblxuICAgIHZhciBkYXRhID0gaW5pdE1zZy5zdWJzdHIobXNnSWRMZW4pLnNwbGl0KCc6JylcblxuICAgIG15SUQgPSBkYXRhWzBdXG4gICAgYm9keU1hcmdpbiA9IHVuZGVmaW5lZCAhPT0gZGF0YVsxXSA/IE51bWJlcihkYXRhWzFdKSA6IGJvZHlNYXJnaW4gLy8gRm9yIFYxIGNvbXBhdGliaWxpdHlcbiAgICBjYWxjdWxhdGVXaWR0aCA9IHVuZGVmaW5lZCAhPT0gZGF0YVsyXSA/IHN0ckJvb2woZGF0YVsyXSkgOiBjYWxjdWxhdGVXaWR0aFxuICAgIGxvZ2dpbmcgPSB1bmRlZmluZWQgIT09IGRhdGFbM10gPyBzdHJCb29sKGRhdGFbM10pIDogbG9nZ2luZ1xuICAgIGludGVydmFsID0gdW5kZWZpbmVkICE9PSBkYXRhWzRdID8gTnVtYmVyKGRhdGFbNF0pIDogaW50ZXJ2YWxcbiAgICBhdXRvUmVzaXplID0gdW5kZWZpbmVkICE9PSBkYXRhWzZdID8gc3RyQm9vbChkYXRhWzZdKSA6IGF1dG9SZXNpemVcbiAgICBib2R5TWFyZ2luU3RyID0gZGF0YVs3XVxuICAgIGhlaWdodENhbGNNb2RlID0gdW5kZWZpbmVkICE9PSBkYXRhWzhdID8gZGF0YVs4XSA6IGhlaWdodENhbGNNb2RlXG4gICAgYm9keUJhY2tncm91bmQgPSBkYXRhWzldXG4gICAgYm9keVBhZGRpbmcgPSBkYXRhWzEwXVxuICAgIHRvbGVyYW5jZSA9IHVuZGVmaW5lZCAhPT0gZGF0YVsxMV0gPyBOdW1iZXIoZGF0YVsxMV0pIDogdG9sZXJhbmNlXG4gICAgaW5QYWdlTGlua3MuZW5hYmxlID0gdW5kZWZpbmVkICE9PSBkYXRhWzEyXSA/IHN0ckJvb2woZGF0YVsxMl0pIDogZmFsc2VcbiAgICByZXNpemVGcm9tID0gdW5kZWZpbmVkICE9PSBkYXRhWzEzXSA/IGRhdGFbMTNdIDogcmVzaXplRnJvbVxuICAgIHdpZHRoQ2FsY01vZGUgPSB1bmRlZmluZWQgIT09IGRhdGFbMTRdID8gZGF0YVsxNF0gOiB3aWR0aENhbGNNb2RlXG4gICAgbW91c2VFdmVudHMgPSB1bmRlZmluZWQgIT09IGRhdGFbMTVdID8gQm9vbGVhbihkYXRhWzE1XSkgOiBtb3VzZUV2ZW50c1xuICB9XG5cbiAgZnVuY3Rpb24gZGVwcmljYXRlKGtleSkge1xuICAgIHZhciBzcGxpdE5hbWUgPSBrZXkuc3BsaXQoJ0NhbGxiYWNrJylcblxuICAgIGlmIChzcGxpdE5hbWUubGVuZ3RoID09PSAyKSB7XG4gICAgICB2YXIgbmFtZSA9XG4gICAgICAgICdvbicgKyBzcGxpdE5hbWVbMF0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzcGxpdE5hbWVbMF0uc2xpY2UoMSlcbiAgICAgIHRoaXNbbmFtZV0gPSB0aGlzW2tleV1cbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICAgIHdhcm4oXG4gICAgICAgIFwiRGVwcmVjYXRlZDogJ1wiICtcbiAgICAgICAgICBrZXkgK1xuICAgICAgICAgIFwiJyBoYXMgYmVlbiByZW5hbWVkICdcIiArXG4gICAgICAgICAgbmFtZSArXG4gICAgICAgICAgXCInLiBUaGUgb2xkIG1ldGhvZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbi5cIlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWREYXRhRnJvbVBhZ2UoKSB7XG4gICAgZnVuY3Rpb24gcmVhZERhdGEoKSB7XG4gICAgICB2YXIgZGF0YSA9IHdpbmRvdy5pRnJhbWVSZXNpemVyXG5cbiAgICAgIGxvZygnUmVhZGluZyBkYXRhIGZyb20gcGFnZTogJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChkZXByaWNhdGUsIGRhdGEpXG5cbiAgICAgIG9uTWVzc2FnZSA9ICdvbk1lc3NhZ2UnIGluIGRhdGEgPyBkYXRhLm9uTWVzc2FnZSA6IG9uTWVzc2FnZVxuICAgICAgb25SZWFkeSA9ICdvblJlYWR5JyBpbiBkYXRhID8gZGF0YS5vblJlYWR5IDogb25SZWFkeVxuICAgICAgdGFyZ2V0T3JpZ2luRGVmYXVsdCA9XG4gICAgICAgICd0YXJnZXRPcmlnaW4nIGluIGRhdGEgPyBkYXRhLnRhcmdldE9yaWdpbiA6IHRhcmdldE9yaWdpbkRlZmF1bHRcbiAgICAgIGhlaWdodENhbGNNb2RlID1cbiAgICAgICAgJ2hlaWdodENhbGN1bGF0aW9uTWV0aG9kJyBpbiBkYXRhXG4gICAgICAgICAgPyBkYXRhLmhlaWdodENhbGN1bGF0aW9uTWV0aG9kXG4gICAgICAgICAgOiBoZWlnaHRDYWxjTW9kZVxuICAgICAgd2lkdGhDYWxjTW9kZSA9XG4gICAgICAgICd3aWR0aENhbGN1bGF0aW9uTWV0aG9kJyBpbiBkYXRhXG4gICAgICAgICAgPyBkYXRhLndpZHRoQ2FsY3VsYXRpb25NZXRob2RcbiAgICAgICAgICA6IHdpZHRoQ2FsY01vZGVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXR1cEN1c3RvbUNhbGNNZXRob2RzKGNhbGNNb2RlLCBjYWxjRnVuYykge1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBjYWxjTW9kZSkge1xuICAgICAgICBsb2coJ1NldHVwIGN1c3RvbSAnICsgY2FsY0Z1bmMgKyAnQ2FsY01ldGhvZCcpXG4gICAgICAgIGN1c3RvbUNhbGNNZXRob2RzW2NhbGNGdW5jXSA9IGNhbGNNb2RlXG4gICAgICAgIGNhbGNNb2RlID0gJ2N1c3RvbSdcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhbGNNb2RlXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgJ2lGcmFtZVJlc2l6ZXInIGluIHdpbmRvdyAmJlxuICAgICAgT2JqZWN0ID09PSB3aW5kb3cuaUZyYW1lUmVzaXplci5jb25zdHJ1Y3RvclxuICAgICkge1xuICAgICAgcmVhZERhdGEoKVxuICAgICAgaGVpZ2h0Q2FsY01vZGUgPSBzZXR1cEN1c3RvbUNhbGNNZXRob2RzKGhlaWdodENhbGNNb2RlLCAnaGVpZ2h0JylcbiAgICAgIHdpZHRoQ2FsY01vZGUgPSBzZXR1cEN1c3RvbUNhbGNNZXRob2RzKHdpZHRoQ2FsY01vZGUsICd3aWR0aCcpXG4gICAgfVxuXG4gICAgbG9nKCdUYXJnZXRPcmlnaW4gZm9yIHBhcmVudCBzZXQgdG86ICcgKyB0YXJnZXRPcmlnaW5EZWZhdWx0KVxuICB9XG5cbiAgZnVuY3Rpb24gY2hrQ1NTKGF0dHIsIHZhbHVlKSB7XG4gICAgaWYgKC0xICE9PSB2YWx1ZS5pbmRleE9mKCctJykpIHtcbiAgICAgIHdhcm4oJ05lZ2F0aXZlIENTUyB2YWx1ZSBpZ25vcmVkIGZvciAnICsgYXR0cilcbiAgICAgIHZhbHVlID0gJydcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBmdW5jdGlvbiBzZXRCb2R5U3R5bGUoYXR0ciwgdmFsdWUpIHtcbiAgICBpZiAodW5kZWZpbmVkICE9PSB2YWx1ZSAmJiAnJyAhPT0gdmFsdWUgJiYgJ251bGwnICE9PSB2YWx1ZSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZVthdHRyXSA9IHZhbHVlXG4gICAgICBsb2coJ0JvZHkgJyArIGF0dHIgKyAnIHNldCB0byBcIicgKyB2YWx1ZSArICdcIicpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0TWFyZ2luKCkge1xuICAgIC8vIElmIGNhbGxlZCB2aWEgVjEgc2NyaXB0LCBjb252ZXJ0IGJvZHlNYXJnaW4gZnJvbSBpbnQgdG8gc3RyXG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gYm9keU1hcmdpblN0cikge1xuICAgICAgYm9keU1hcmdpblN0ciA9IGJvZHlNYXJnaW4gKyAncHgnXG4gICAgfVxuXG4gICAgc2V0Qm9keVN0eWxlKCdtYXJnaW4nLCBjaGtDU1MoJ21hcmdpbicsIGJvZHlNYXJnaW5TdHIpKVxuICB9XG5cbiAgZnVuY3Rpb24gc3RvcEluZmluaXRlUmVzaXppbmdPZklGcmFtZSgpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJydcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9ICcnXG4gICAgbG9nKCdIVE1MICYgYm9keSBoZWlnaHQgc2V0IHRvIFwiYXV0b1wiJylcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hbmFnZVRyaWdnZXJFdmVudChvcHRpb25zKSB7XG4gICAgdmFyIGxpc3RlbmVyID0ge1xuICAgICAgYWRkOiBmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUV2ZW50KCkge1xuICAgICAgICAgIHNlbmRTaXplKG9wdGlvbnMuZXZlbnROYW1lLCBvcHRpb25zLmV2ZW50VHlwZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50SGFuZGxlcnNCeU5hbWVbZXZlbnROYW1lXSA9IGhhbmRsZUV2ZW50XG5cbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csIGV2ZW50TmFtZSwgaGFuZGxlRXZlbnQsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICB2YXIgaGFuZGxlRXZlbnQgPSBldmVudEhhbmRsZXJzQnlOYW1lW2V2ZW50TmFtZV1cbiAgICAgICAgZGVsZXRlIGV2ZW50SGFuZGxlcnNCeU5hbWVbZXZlbnROYW1lXVxuXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCBldmVudE5hbWUsIGhhbmRsZUV2ZW50KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmV2ZW50TmFtZXMgJiYgQXJyYXkucHJvdG90eXBlLm1hcCkge1xuICAgICAgb3B0aW9ucy5ldmVudE5hbWUgPSBvcHRpb25zLmV2ZW50TmFtZXNbMF1cbiAgICAgIG9wdGlvbnMuZXZlbnROYW1lcy5tYXAobGlzdGVuZXJbb3B0aW9ucy5tZXRob2RdKVxuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0ZW5lcltvcHRpb25zLm1ldGhvZF0ob3B0aW9ucy5ldmVudE5hbWUpXG4gICAgfVxuXG4gICAgbG9nKFxuICAgICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKG9wdGlvbnMubWV0aG9kKSArXG4gICAgICAgICcgZXZlbnQgbGlzdGVuZXI6ICcgK1xuICAgICAgICBvcHRpb25zLmV2ZW50VHlwZVxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hbmFnZUV2ZW50TGlzdGVuZXJzKG1ldGhvZCkge1xuICAgIG1hbmFnZVRyaWdnZXJFdmVudCh7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIGV2ZW50VHlwZTogJ0FuaW1hdGlvbiBTdGFydCcsXG4gICAgICBldmVudE5hbWVzOiBbJ2FuaW1hdGlvbnN0YXJ0JywgJ3dlYmtpdEFuaW1hdGlvblN0YXJ0J11cbiAgICB9KVxuICAgIG1hbmFnZVRyaWdnZXJFdmVudCh7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIGV2ZW50VHlwZTogJ0FuaW1hdGlvbiBJdGVyYXRpb24nLFxuICAgICAgZXZlbnROYW1lczogWydhbmltYXRpb25pdGVyYXRpb24nLCAnd2Via2l0QW5pbWF0aW9uSXRlcmF0aW9uJ11cbiAgICB9KVxuICAgIG1hbmFnZVRyaWdnZXJFdmVudCh7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIGV2ZW50VHlwZTogJ0FuaW1hdGlvbiBFbmQnLFxuICAgICAgZXZlbnROYW1lczogWydhbmltYXRpb25lbmQnLCAnd2Via2l0QW5pbWF0aW9uRW5kJ11cbiAgICB9KVxuICAgIG1hbmFnZVRyaWdnZXJFdmVudCh7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIGV2ZW50VHlwZTogJ0lucHV0JyxcbiAgICAgIGV2ZW50TmFtZTogJ2lucHV0J1xuICAgIH0pXG4gICAgbWFuYWdlVHJpZ2dlckV2ZW50KHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgZXZlbnRUeXBlOiAnTW91c2UgVXAnLFxuICAgICAgZXZlbnROYW1lOiAnbW91c2V1cCdcbiAgICB9KVxuICAgIG1hbmFnZVRyaWdnZXJFdmVudCh7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIGV2ZW50VHlwZTogJ01vdXNlIERvd24nLFxuICAgICAgZXZlbnROYW1lOiAnbW91c2Vkb3duJ1xuICAgIH0pXG4gICAgbWFuYWdlVHJpZ2dlckV2ZW50KHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgZXZlbnRUeXBlOiAnT3JpZW50YXRpb24gQ2hhbmdlJyxcbiAgICAgIGV2ZW50TmFtZTogJ29yaWVudGF0aW9uY2hhbmdlJ1xuICAgIH0pXG4gICAgbWFuYWdlVHJpZ2dlckV2ZW50KHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgZXZlbnRUeXBlOiAnUHJpbnQnLFxuICAgICAgZXZlbnROYW1lOiBbJ2FmdGVycHJpbnQnLCAnYmVmb3JlcHJpbnQnXVxuICAgIH0pXG4gICAgbWFuYWdlVHJpZ2dlckV2ZW50KHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgZXZlbnRUeXBlOiAnUmVhZHkgU3RhdGUgQ2hhbmdlJyxcbiAgICAgIGV2ZW50TmFtZTogJ3JlYWR5c3RhdGVjaGFuZ2UnXG4gICAgfSlcbiAgICBtYW5hZ2VUcmlnZ2VyRXZlbnQoe1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICBldmVudFR5cGU6ICdUb3VjaCBTdGFydCcsXG4gICAgICBldmVudE5hbWU6ICd0b3VjaHN0YXJ0J1xuICAgIH0pXG4gICAgbWFuYWdlVHJpZ2dlckV2ZW50KHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgZXZlbnRUeXBlOiAnVG91Y2ggRW5kJyxcbiAgICAgIGV2ZW50TmFtZTogJ3RvdWNoZW5kJ1xuICAgIH0pXG4gICAgbWFuYWdlVHJpZ2dlckV2ZW50KHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgZXZlbnRUeXBlOiAnVG91Y2ggQ2FuY2VsJyxcbiAgICAgIGV2ZW50TmFtZTogJ3RvdWNoY2FuY2VsJ1xuICAgIH0pXG4gICAgbWFuYWdlVHJpZ2dlckV2ZW50KHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgZXZlbnRUeXBlOiAnVHJhbnNpdGlvbiBTdGFydCcsXG4gICAgICBldmVudE5hbWVzOiBbXG4gICAgICAgICd0cmFuc2l0aW9uc3RhcnQnLFxuICAgICAgICAnd2Via2l0VHJhbnNpdGlvblN0YXJ0JyxcbiAgICAgICAgJ01TVHJhbnNpdGlvblN0YXJ0JyxcbiAgICAgICAgJ29UcmFuc2l0aW9uU3RhcnQnLFxuICAgICAgICAnb3RyYW5zaXRpb25zdGFydCdcbiAgICAgIF1cbiAgICB9KVxuICAgIG1hbmFnZVRyaWdnZXJFdmVudCh7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIGV2ZW50VHlwZTogJ1RyYW5zaXRpb24gSXRlcmF0aW9uJyxcbiAgICAgIGV2ZW50TmFtZXM6IFtcbiAgICAgICAgJ3RyYW5zaXRpb25pdGVyYXRpb24nLFxuICAgICAgICAnd2Via2l0VHJhbnNpdGlvbkl0ZXJhdGlvbicsXG4gICAgICAgICdNU1RyYW5zaXRpb25JdGVyYXRpb24nLFxuICAgICAgICAnb1RyYW5zaXRpb25JdGVyYXRpb24nLFxuICAgICAgICAnb3RyYW5zaXRpb25pdGVyYXRpb24nXG4gICAgICBdXG4gICAgfSlcbiAgICBtYW5hZ2VUcmlnZ2VyRXZlbnQoe1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICBldmVudFR5cGU6ICdUcmFuc2l0aW9uIEVuZCcsXG4gICAgICBldmVudE5hbWVzOiBbXG4gICAgICAgICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICAgJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICAgICAnTVNUcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgJ29UcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgJ290cmFuc2l0aW9uZW5kJ1xuICAgICAgXVxuICAgIH0pXG4gICAgaWYgKCdjaGlsZCcgPT09IHJlc2l6ZUZyb20pIHtcbiAgICAgIG1hbmFnZVRyaWdnZXJFdmVudCh7XG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBldmVudFR5cGU6ICdJRnJhbWUgUmVzaXplZCcsXG4gICAgICAgIGV2ZW50TmFtZTogJ3Jlc2l6ZSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tDYWxjTW9kZShjYWxjTW9kZSwgY2FsY01vZGVEZWZhdWx0LCBtb2RlcywgdHlwZSkge1xuICAgIGlmIChjYWxjTW9kZURlZmF1bHQgIT09IGNhbGNNb2RlKSB7XG4gICAgICBpZiAoIShjYWxjTW9kZSBpbiBtb2RlcykpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBjYWxjTW9kZSArICcgaXMgbm90IGEgdmFsaWQgb3B0aW9uIGZvciAnICsgdHlwZSArICdDYWxjdWxhdGlvbk1ldGhvZC4nXG4gICAgICAgIClcbiAgICAgICAgY2FsY01vZGUgPSBjYWxjTW9kZURlZmF1bHRcbiAgICAgIH1cbiAgICAgIGxvZyh0eXBlICsgJyBjYWxjdWxhdGlvbiBtZXRob2Qgc2V0IHRvIFwiJyArIGNhbGNNb2RlICsgJ1wiJylcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY01vZGVcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrSGVpZ2h0TW9kZSgpIHtcbiAgICBoZWlnaHRDYWxjTW9kZSA9IGNoZWNrQ2FsY01vZGUoXG4gICAgICBoZWlnaHRDYWxjTW9kZSxcbiAgICAgIGhlaWdodENhbGNNb2RlRGVmYXVsdCxcbiAgICAgIGdldEhlaWdodCxcbiAgICAgICdoZWlnaHQnXG4gICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tXaWR0aE1vZGUoKSB7XG4gICAgd2lkdGhDYWxjTW9kZSA9IGNoZWNrQ2FsY01vZGUoXG4gICAgICB3aWR0aENhbGNNb2RlLFxuICAgICAgd2lkdGhDYWxjTW9kZURlZmF1bHQsXG4gICAgICBnZXRXaWR0aCxcbiAgICAgICd3aWR0aCdcbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBzdGFydEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICh0cnVlID09PSBhdXRvUmVzaXplKSB7XG4gICAgICBtYW5hZ2VFdmVudExpc3RlbmVycygnYWRkJylcbiAgICAgIHNldHVwTXV0YXRpb25PYnNlcnZlcigpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZygnQXV0byBSZXNpemUgZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxuXG4gIC8vICAgZnVuY3Rpb24gc3RvcE1zZ3NUb1BhcmVudCgpIHtcbiAgLy8gICAgIGxvZygnRGlzYWJsZSBvdXRnb2luZyBtZXNzYWdlcycpXG4gIC8vICAgICBzZW5kUGVybWl0ID0gZmFsc2VcbiAgLy8gICB9XG5cbiAgLy8gICBmdW5jdGlvbiByZW1vdmVNc2dMaXN0ZW5lcigpIHtcbiAgLy8gICAgIGxvZygnUmVtb3ZlIGV2ZW50IGxpc3RlbmVyOiBNZXNzYWdlJylcbiAgLy8gICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnbWVzc2FnZScsIHJlY2VpdmVyKVxuICAvLyAgIH1cblxuICBmdW5jdGlvbiBkaXNjb25uZWN0TXV0YXRpb25PYnNlcnZlcigpIHtcbiAgICBpZiAobnVsbCAhPT0gYm9keU9ic2VydmVyKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyAvLyBOb3QgdGVzdGFibGUgaW4gUGhhbnRvbkpTXG4gICAgICBib2R5T2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RvcEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIG1hbmFnZUV2ZW50TGlzdGVuZXJzKCdyZW1vdmUnKVxuICAgIGRpc2Nvbm5lY3RNdXRhdGlvbk9ic2VydmVyKClcbiAgICBjbGVhckludGVydmFsKGludGVydmFsVGltZXIpXG4gIH1cblxuICAvLyAgIGZ1bmN0aW9uIHRlYXJkb3duKCkge1xuICAvLyAgICAgc3RvcE1zZ3NUb1BhcmVudCgpXG4gIC8vICAgICByZW1vdmVNc2dMaXN0ZW5lcigpXG4gIC8vICAgICBpZiAodHJ1ZSA9PT0gYXV0b1Jlc2l6ZSkgc3RvcEV2ZW50TGlzdGVuZXJzKClcbiAgLy8gICB9XG5cbiAgZnVuY3Rpb24gaW5qZWN0Q2xlYXJGaXhJbnRvQm9keUVsZW1lbnQoKSB7XG4gICAgdmFyIGNsZWFyRml4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjbGVhckZpeC5zdHlsZS5jbGVhciA9ICdib3RoJ1xuICAgIC8vIEd1YXJkIGFnYWluc3QgdGhlIGZvbGxvd2luZyBoYXZpbmcgYmVlbiBnbG9iYWxseSByZWRlZmluZWQgaW4gQ1NTLlxuICAgIGNsZWFyRml4LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgY2xlYXJGaXguc3R5bGUuaGVpZ2h0ID0gJzAnXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbGVhckZpeClcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwSW5QYWdlTGlua3MoKSB7XG4gICAgZnVuY3Rpb24gZ2V0UGFnZVBvc2l0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDpcbiAgICAgICAgICB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB3aW5kb3cucGFnZVhPZmZzZXRcbiAgICAgICAgICAgIDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICAgIHk6XG4gICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFbGVtZW50UG9zaXRpb24oZWwpIHtcbiAgICAgIHZhciBlbFBvc2l0aW9uID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHBhZ2VQb3NpdGlvbiA9IGdldFBhZ2VQb3NpdGlvbigpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IHBhcnNlSW50KGVsUG9zaXRpb24ubGVmdCwgMTApICsgcGFyc2VJbnQocGFnZVBvc2l0aW9uLngsIDEwKSxcbiAgICAgICAgeTogcGFyc2VJbnQoZWxQb3NpdGlvbi50b3AsIDEwKSArIHBhcnNlSW50KHBhZ2VQb3NpdGlvbi55LCAxMClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kVGFyZ2V0KGxvY2F0aW9uKSB7XG4gICAgICBmdW5jdGlvbiBqdW1wVG9UYXJnZXQodGFyZ2V0KSB7XG4gICAgICAgIHZhciBqdW1wUG9zaXRpb24gPSBnZXRFbGVtZW50UG9zaXRpb24odGFyZ2V0KVxuXG4gICAgICAgIGxvZyhcbiAgICAgICAgICAnTW92aW5nIHRvIGluIHBhZ2UgbGluayAoIycgK1xuICAgICAgICAgICAgaGFzaCArXG4gICAgICAgICAgICAnKSBhdCB4OiAnICtcbiAgICAgICAgICAgIGp1bXBQb3NpdGlvbi54ICtcbiAgICAgICAgICAgICcgeTogJyArXG4gICAgICAgICAgICBqdW1wUG9zaXRpb24ueVxuICAgICAgICApXG4gICAgICAgIHNlbmRNc2coanVtcFBvc2l0aW9uLnksIGp1bXBQb3NpdGlvbi54LCAnc2Nyb2xsVG9PZmZzZXQnKSAvLyBYJlkgcmV2ZXJzZWQgYXQgc2VuZE1zZyB1c2VzIGhlaWdodC93aWR0aFxuICAgICAgfVxuXG4gICAgICB2YXIgaGFzaCA9IGxvY2F0aW9uLnNwbGl0KCcjJylbMV0gfHwgbG9jYXRpb24sIC8vIFJlbW92ZSAjIGlmIHByZXNlbnRcbiAgICAgICAgaGFzaERhdGEgPSBkZWNvZGVVUklDb21wb25lbnQoaGFzaCksXG4gICAgICAgIHRhcmdldCA9XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaERhdGEpIHx8XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaERhdGEpWzBdXG5cbiAgICAgIGlmICh1bmRlZmluZWQgIT09IHRhcmdldCkge1xuICAgICAgICBqdW1wVG9UYXJnZXQodGFyZ2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nKFxuICAgICAgICAgICdJbiBwYWdlIGxpbmsgKCMnICtcbiAgICAgICAgICAgIGhhc2ggK1xuICAgICAgICAgICAgJykgbm90IGZvdW5kIGluIGlGcmFtZSwgc28gc2VuZGluZyB0byBwYXJlbnQnXG4gICAgICAgIClcbiAgICAgICAgc2VuZE1zZygwLCAwLCAnaW5QYWdlTGluaycsICcjJyArIGhhc2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tMb2NhdGlvbkhhc2goKSB7XG4gICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoXG4gICAgICB2YXIgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG5cbiAgICAgIGlmICgnJyAhPT0gaGFzaCAmJiAnIycgIT09IGhhc2gpIHtcbiAgICAgICAgZmluZFRhcmdldChocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpbmRBbmNob3JzKCkge1xuICAgICAgZnVuY3Rpb24gc2V0dXBMaW5rKGVsKSB7XG4gICAgICAgIGZ1bmN0aW9uIGxpbmtDbGlja2VkKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAgIC8qIGpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgICAgIGZpbmRUYXJnZXQodGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnIycgIT09IGVsLmdldEF0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihlbCwgJ2NsaWNrJywgbGlua0NsaWNrZWQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKSxcbiAgICAgICAgc2V0dXBMaW5rXG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZExvY2F0aW9uSGFzaCgpIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnaGFzaGNoYW5nZScsIGNoZWNrTG9jYXRpb25IYXNoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRDaGVjaygpIHtcbiAgICAgIC8vIENoZWNrIGlmIHBhZ2UgbG9hZGVkIHdpdGggbG9jYXRpb24gaGFzaCBhZnRlciBpbml0IHJlc2l6ZVxuICAgICAgc2V0VGltZW91dChjaGVja0xvY2F0aW9uSGFzaCwgZXZlbnRDYW5jZWxUaW1lcilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmFibGVJblBhZ2VMaW5rcygpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovIC8vIE5vdCB0ZXN0YWJsZSBpbiBwaGFudG9uSlNcbiAgICAgIGlmIChBcnJheS5wcm90b3R5cGUuZm9yRWFjaCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKSB7XG4gICAgICAgIGxvZygnU2V0dGluZyB1cCBsb2NhdGlvbi5oYXNoIGhhbmRsZXJzJylcbiAgICAgICAgYmluZEFuY2hvcnMoKVxuICAgICAgICBiaW5kTG9jYXRpb25IYXNoKClcbiAgICAgICAgaW5pdENoZWNrKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ0luIHBhZ2UgbGlua2luZyBub3QgZnVsbHkgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlciEgKFNlZSBSRUFETUUubWQgZm9yIElFOCB3b3JrYXJvdW5kKSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpblBhZ2VMaW5rcy5lbmFibGUpIHtcbiAgICAgIGVuYWJsZUluUGFnZUxpbmtzKClcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nKCdJbiBwYWdlIGxpbmtpbmcgbm90IGVuYWJsZWQnKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBmaW5kVGFyZ2V0OiBmaW5kVGFyZ2V0XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBNb3VzZUV2ZW50cygpIHtcbiAgICBpZiAobW91c2VFdmVudHMgIT09IHRydWUpIHJldHVyblxuXG4gICAgZnVuY3Rpb24gc2VuZE1vdXNlKGUpIHtcbiAgICAgIHNlbmRNc2coMCwgMCwgZS50eXBlLCBlLnNjcmVlblkgKyAnOicgKyBlLnNjcmVlblgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTW91c2VMaXN0ZW5lcihldnQsIG5hbWUpIHtcbiAgICAgIGxvZygnQWRkIGV2ZW50IGxpc3RlbmVyOiAnICsgbmFtZSlcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIod2luZG93LmRvY3VtZW50LCBldnQsIHNlbmRNb3VzZSlcbiAgICB9XG5cbiAgICBhZGRNb3VzZUxpc3RlbmVyKCdtb3VzZWVudGVyJywgJ01vdXNlIEVudGVyJylcbiAgICBhZGRNb3VzZUxpc3RlbmVyKCdtb3VzZWxlYXZlJywgJ01vdXNlIExlYXZlJylcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwUHVibGljTWV0aG9kcygpIHtcbiAgICBsb2coJ0VuYWJsZSBwdWJsaWMgbWV0aG9kcycpXG5cbiAgICB3aW4ucGFyZW50SUZyYW1lID0ge1xuICAgICAgYXV0b1Jlc2l6ZTogZnVuY3Rpb24gYXV0b1Jlc2l6ZUYocmVzaXplKSB7XG4gICAgICAgIGlmICh0cnVlID09PSByZXNpemUgJiYgZmFsc2UgPT09IGF1dG9SZXNpemUpIHtcbiAgICAgICAgICBhdXRvUmVzaXplID0gdHJ1ZVxuICAgICAgICAgIHN0YXJ0RXZlbnRMaXN0ZW5lcnMoKVxuICAgICAgICB9IGVsc2UgaWYgKGZhbHNlID09PSByZXNpemUgJiYgdHJ1ZSA9PT0gYXV0b1Jlc2l6ZSkge1xuICAgICAgICAgIGF1dG9SZXNpemUgPSBmYWxzZVxuICAgICAgICAgIHN0b3BFdmVudExpc3RlbmVycygpXG4gICAgICAgIH1cbiAgICAgICAgc2VuZE1zZygwLCAwLCAnYXV0b1Jlc2l6ZScsIEpTT04uc3RyaW5naWZ5KGF1dG9SZXNpemUpKVxuICAgICAgICByZXR1cm4gYXV0b1Jlc2l6ZVxuICAgICAgfSxcblxuICAgICAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlRigpIHtcbiAgICAgICAgc2VuZE1zZygwLCAwLCAnY2xvc2UnKVxuICAgICAgICAvLyB0ZWFyZG93bigpXG4gICAgICB9LFxuXG4gICAgICBnZXRJZDogZnVuY3Rpb24gZ2V0SWRGKCkge1xuICAgICAgICByZXR1cm4gbXlJRFxuICAgICAgfSxcblxuICAgICAgZ2V0UGFnZUluZm86IGZ1bmN0aW9uIGdldFBhZ2VJbmZvRihjYWxsYmFjaykge1xuICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNhbGxiYWNrKSB7XG4gICAgICAgICAgb25QYWdlSW5mbyA9IGNhbGxiYWNrXG4gICAgICAgICAgc2VuZE1zZygwLCAwLCAncGFnZUluZm8nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uUGFnZUluZm8gPSBmdW5jdGlvbiAoKSB7fVxuICAgICAgICAgIHNlbmRNc2coMCwgMCwgJ3BhZ2VJbmZvU3RvcCcpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIG1vdmVUb0FuY2hvcjogZnVuY3Rpb24gbW92ZVRvQW5jaG9yRihoYXNoKSB7XG4gICAgICAgIGluUGFnZUxpbmtzLmZpbmRUYXJnZXQoaGFzaClcbiAgICAgIH0sXG5cbiAgICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldEYoKSB7XG4gICAgICAgIHJlc2V0SUZyYW1lKCdwYXJlbnRJRnJhbWUucmVzZXQnKVxuICAgICAgfSxcblxuICAgICAgc2Nyb2xsVG86IGZ1bmN0aW9uIHNjcm9sbFRvRih4LCB5KSB7XG4gICAgICAgIHNlbmRNc2coeSwgeCwgJ3Njcm9sbFRvJykgLy8gWCZZIHJldmVyc2VkIGF0IHNlbmRNc2cgdXNlcyBoZWlnaHQvd2lkdGhcbiAgICAgIH0sXG5cbiAgICAgIHNjcm9sbFRvT2Zmc2V0OiBmdW5jdGlvbiBzY3JvbGxUb0YoeCwgeSkge1xuICAgICAgICBzZW5kTXNnKHksIHgsICdzY3JvbGxUb09mZnNldCcpIC8vIFgmWSByZXZlcnNlZCBhdCBzZW5kTXNnIHVzZXMgaGVpZ2h0L3dpZHRoXG4gICAgICB9LFxuXG4gICAgICBzZW5kTWVzc2FnZTogZnVuY3Rpb24gc2VuZE1lc3NhZ2VGKG1zZywgdGFyZ2V0T3JpZ2luKSB7XG4gICAgICAgIHNlbmRNc2coMCwgMCwgJ21lc3NhZ2UnLCBKU09OLnN0cmluZ2lmeShtc2cpLCB0YXJnZXRPcmlnaW4pXG4gICAgICB9LFxuXG4gICAgICBzZXRIZWlnaHRDYWxjdWxhdGlvbk1ldGhvZDogZnVuY3Rpb24gc2V0SGVpZ2h0Q2FsY3VsYXRpb25NZXRob2RGKFxuICAgICAgICBoZWlnaHRDYWxjdWxhdGlvbk1ldGhvZFxuICAgICAgKSB7XG4gICAgICAgIGhlaWdodENhbGNNb2RlID0gaGVpZ2h0Q2FsY3VsYXRpb25NZXRob2RcbiAgICAgICAgY2hlY2tIZWlnaHRNb2RlKClcbiAgICAgIH0sXG5cbiAgICAgIHNldFdpZHRoQ2FsY3VsYXRpb25NZXRob2Q6IGZ1bmN0aW9uIHNldFdpZHRoQ2FsY3VsYXRpb25NZXRob2RGKFxuICAgICAgICB3aWR0aENhbGN1bGF0aW9uTWV0aG9kXG4gICAgICApIHtcbiAgICAgICAgd2lkdGhDYWxjTW9kZSA9IHdpZHRoQ2FsY3VsYXRpb25NZXRob2RcbiAgICAgICAgY2hlY2tXaWR0aE1vZGUoKVxuICAgICAgfSxcblxuICAgICAgc2V0VGFyZ2V0T3JpZ2luOiBmdW5jdGlvbiBzZXRUYXJnZXRPcmlnaW5GKHRhcmdldE9yaWdpbikge1xuICAgICAgICBsb2coJ1NldCB0YXJnZXRPcmlnaW46ICcgKyB0YXJnZXRPcmlnaW4pXG4gICAgICAgIHRhcmdldE9yaWdpbkRlZmF1bHQgPSB0YXJnZXRPcmlnaW5cbiAgICAgIH0sXG5cbiAgICAgIHNpemU6IGZ1bmN0aW9uIHNpemVGKGN1c3RvbUhlaWdodCwgY3VzdG9tV2lkdGgpIHtcbiAgICAgICAgdmFyIHZhbFN0cmluZyA9XG4gICAgICAgICAgJycgKyAoY3VzdG9tSGVpZ2h0IHx8ICcnKSArIChjdXN0b21XaWR0aCA/ICcsJyArIGN1c3RvbVdpZHRoIDogJycpXG4gICAgICAgIHNlbmRTaXplKFxuICAgICAgICAgICdzaXplJyxcbiAgICAgICAgICAncGFyZW50SUZyYW1lLnNpemUoJyArIHZhbFN0cmluZyArICcpJyxcbiAgICAgICAgICBjdXN0b21IZWlnaHQsXG4gICAgICAgICAgY3VzdG9tV2lkdGhcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRJbnRlcnZhbCgpIHtcbiAgICBpZiAoMCAhPT0gaW50ZXJ2YWwpIHtcbiAgICAgIGxvZygnc2V0SW50ZXJ2YWw6ICcgKyBpbnRlcnZhbCArICdtcycpXG4gICAgICBpbnRlcnZhbFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZW5kU2l6ZSgnaW50ZXJ2YWwnLCAnc2V0SW50ZXJ2YWw6ICcgKyBpbnRlcnZhbClcbiAgICAgIH0sIE1hdGguYWJzKGludGVydmFsKSlcbiAgICB9XG4gIH1cblxuICAvLyBOb3QgdGVzdGFibGUgaW4gUGhhbnRvbUpTXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGZ1bmN0aW9uIHNldHVwQm9keU11dGF0aW9uT2JzZXJ2ZXIoKSB7XG4gICAgZnVuY3Rpb24gYWRkSW1hZ2VMb2FkTGlzdG5lcnMobXV0YXRpb24pIHtcbiAgICAgIGZ1bmN0aW9uIGFkZEltYWdlTG9hZExpc3RlbmVyKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGZhbHNlID09PSBlbGVtZW50LmNvbXBsZXRlKSB7XG4gICAgICAgICAgbG9nKCdBdHRhY2ggbGlzdGVuZXJzIHRvICcgKyBlbGVtZW50LnNyYylcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbWFnZUxvYWRlZCwgZmFsc2UpXG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGltYWdlRXJyb3IsIGZhbHNlKVxuICAgICAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdzcmMnKSB7XG4gICAgICAgIGFkZEltYWdlTG9hZExpc3RlbmVyKG11dGF0aW9uLnRhcmdldClcbiAgICAgIH0gZWxzZSBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChcbiAgICAgICAgICBtdXRhdGlvbi50YXJnZXQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyksXG4gICAgICAgICAgYWRkSW1hZ2VMb2FkTGlzdGVuZXJcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21BcnJheShlbGVtZW50KSB7XG4gICAgICBlbGVtZW50cy5zcGxpY2UoZWxlbWVudHMuaW5kZXhPZihlbGVtZW50KSwgMSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVJbWFnZUxvYWRMaXN0ZW5lcihlbGVtZW50KSB7XG4gICAgICBsb2coJ1JlbW92ZSBsaXN0ZW5lcnMgZnJvbSAnICsgZWxlbWVudC5zcmMpXG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbWFnZUxvYWRlZCwgZmFsc2UpXG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgaW1hZ2VFcnJvciwgZmFsc2UpXG4gICAgICByZW1vdmVGcm9tQXJyYXkoZWxlbWVudClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbWFnZUV2ZW50VHJpZ2dlcmVkKGV2ZW50LCB0eXBlLCB0eXBlRGVzYykge1xuICAgICAgcmVtb3ZlSW1hZ2VMb2FkTGlzdGVuZXIoZXZlbnQudGFyZ2V0KVxuICAgICAgc2VuZFNpemUodHlwZSwgdHlwZURlc2MgKyAnOiAnICsgZXZlbnQudGFyZ2V0LnNyYylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbWFnZUxvYWRlZChldmVudCkge1xuICAgICAgaW1hZ2VFdmVudFRyaWdnZXJlZChldmVudCwgJ2ltYWdlTG9hZCcsICdJbWFnZSBsb2FkZWQnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGltYWdlRXJyb3IoZXZlbnQpIHtcbiAgICAgIGltYWdlRXZlbnRUcmlnZ2VyZWQoZXZlbnQsICdpbWFnZUxvYWRGYWlsZWQnLCAnSW1hZ2UgbG9hZCBmYWlsZWQnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG11dGF0aW9uT2JzZXJ2ZWQobXV0YXRpb25zKSB7XG4gICAgICBzZW5kU2l6ZShcbiAgICAgICAgJ211dGF0aW9uT2JzZXJ2ZXInLFxuICAgICAgICAnbXV0YXRpb25PYnNlcnZlcjogJyArIG11dGF0aW9uc1swXS50YXJnZXQgKyAnICcgKyBtdXRhdGlvbnNbMF0udHlwZVxuICAgICAgKVxuXG4gICAgICAvLyBEZWFsIHdpdGggV2ViS2l0IC8gQmxpbmsgYXN5bmNpbmcgaW1hZ2UgbG9hZGluZyB3aGVuIHRhZ3MgYXJlIGluamVjdGVkIGludG8gdGhlIHBhZ2VcbiAgICAgIG11dGF0aW9ucy5mb3JFYWNoKGFkZEltYWdlTG9hZExpc3RuZXJzKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU11dGF0aW9uT2JzZXJ2ZXIoKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICAgICAgICBjaGFyYWN0ZXJEYXRhT2xkVmFsdWU6IGZhbHNlLFxuICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbk9ic2VydmVkKVxuXG4gICAgICBsb2coJ0NyZWF0ZSBib2R5IE11dGF0aW9uT2JzZXJ2ZXInKVxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIGNvbmZpZylcblxuICAgICAgcmV0dXJuIG9ic2VydmVyXG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnRzID0gW10sXG4gICAgICBNdXRhdGlvbk9ic2VydmVyID1cbiAgICAgICAgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgfHwgd2luZG93LldlYktpdE11dGF0aW9uT2JzZXJ2ZXIsXG4gICAgICBvYnNlcnZlciA9IGNyZWF0ZU11dGF0aW9uT2JzZXJ2ZXIoKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc2Nvbm5lY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCdkaXNjb25uZWN0JyBpbiBvYnNlcnZlcikge1xuICAgICAgICAgIGxvZygnRGlzY29ubmVjdCBib2R5IE11dGF0aW9uT2JzZXJ2ZXInKVxuICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2gocmVtb3ZlSW1hZ2VMb2FkTGlzdGVuZXIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cE11dGF0aW9uT2JzZXJ2ZXIoKSB7XG4gICAgdmFyIGZvcmNlSW50ZXJ2YWxUaW1lciA9IDAgPiBpbnRlcnZhbFxuXG4gICAgLy8gTm90IHRlc3RhYmxlIGluIFBoYW50b21KU1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqLyBpZiAoXG4gICAgICB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fFxuICAgICAgd2luZG93LldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgICApIHtcbiAgICAgIGlmIChmb3JjZUludGVydmFsVGltZXIpIHtcbiAgICAgICAgaW5pdEludGVydmFsKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvZHlPYnNlcnZlciA9IHNldHVwQm9keU11dGF0aW9uT2JzZXJ2ZXIoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2coJ011dGF0aW9uT2JzZXJ2ZXIgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXIhJylcbiAgICAgIGluaXRJbnRlcnZhbCgpXG4gICAgfVxuICB9XG5cbiAgLy8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCBpcyBub3QgcmVsaWFibGUsIHNvXG4gIC8vIHdlIGhhdmUgdG8ganVtcCB0aHJvdWdoIGhvb3BzIHRvIGdldCBhIGJldHRlciB2YWx1ZS5cbiAgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShwcm9wLCBlbCkge1xuICAgIHZhciByZXRWYWwgPSAwXG4gICAgZWwgPSBlbCB8fCBkb2N1bWVudC5ib2R5IC8vIE5vdCB0ZXN0YWJsZSBpbiBwaGFudG9uSlNcblxuICAgIHJldFZhbCA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpXG4gICAgcmV0VmFsID0gbnVsbCAhPT0gcmV0VmFsID8gcmV0VmFsW3Byb3BdIDogMFxuXG4gICAgcmV0dXJuIHBhcnNlSW50KHJldFZhbCwgYmFzZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoa0V2ZW50VGhvdHRsZSh0aW1lcikge1xuICAgIGlmICh0aW1lciA+IHRocm90dGxlZFRpbWVyIC8gMikge1xuICAgICAgdGhyb3R0bGVkVGltZXIgPSAyICogdGltZXJcbiAgICAgIGxvZygnRXZlbnQgdGhyb3R0bGUgaW5jcmVhc2VkIHRvICcgKyB0aHJvdHRsZWRUaW1lciArICdtcycpXG4gICAgfVxuICB9XG5cbiAgLy8gSWRlYSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9ndWFyZGlhbi9pZnJhbWUtbWVzc2VuZ2VyXG4gIGZ1bmN0aW9uIGdldE1heEVsZW1lbnQoc2lkZSwgZWxlbWVudHMpIHtcbiAgICB2YXIgZWxlbWVudHNMZW5ndGggPSBlbGVtZW50cy5sZW5ndGgsXG4gICAgICBlbFZhbCA9IDAsXG4gICAgICBtYXhWYWwgPSAwLFxuICAgICAgU2lkZSA9IGNhcGl0YWxpemVGaXJzdExldHRlcihzaWRlKSxcbiAgICAgIHRpbWVyID0gRGF0ZS5ub3coKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50c0xlbmd0aDsgaSsrKSB7XG4gICAgICBlbFZhbCA9XG4gICAgICAgIGVsZW1lbnRzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW3NpZGVdICtcbiAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZSgnbWFyZ2luJyArIFNpZGUsIGVsZW1lbnRzW2ldKVxuICAgICAgaWYgKGVsVmFsID4gbWF4VmFsKSB7XG4gICAgICAgIG1heFZhbCA9IGVsVmFsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGltZXIgPSBEYXRlLm5vdygpIC0gdGltZXJcblxuICAgIGxvZygnUGFyc2VkICcgKyBlbGVtZW50c0xlbmd0aCArICcgSFRNTCBlbGVtZW50cycpXG4gICAgbG9nKCdFbGVtZW50IHBvc2l0aW9uIGNhbGN1bGF0ZWQgaW4gJyArIHRpbWVyICsgJ21zJylcblxuICAgIGNoa0V2ZW50VGhvdHRsZSh0aW1lcilcblxuICAgIHJldHVybiBtYXhWYWxcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFsbE1lYXN1cmVtZW50cyhkaW1lbnNpb25zKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGRpbWVuc2lvbnMuYm9keU9mZnNldCgpLFxuICAgICAgZGltZW5zaW9ucy5ib2R5U2Nyb2xsKCksXG4gICAgICBkaW1lbnNpb25zLmRvY3VtZW50RWxlbWVudE9mZnNldCgpLFxuICAgICAgZGltZW5zaW9ucy5kb2N1bWVudEVsZW1lbnRTY3JvbGwoKVxuICAgIF1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRhZ2dlZEVsZW1lbnRzKHNpZGUsIHRhZykge1xuICAgIGZ1bmN0aW9uIG5vVGFnZ2VkRWxlbWVudHNGb3VuZCgpIHtcbiAgICAgIHdhcm4oJ05vIHRhZ2dlZCBlbGVtZW50cyAoJyArIHRhZyArICcpIGZvdW5kIG9uIHBhZ2UnKVxuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2JvZHkgKicpXG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnWycgKyB0YWcgKyAnXScpXG5cbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSBub1RhZ2dlZEVsZW1lbnRzRm91bmQoKVxuXG4gICAgcmV0dXJuIGdldE1heEVsZW1lbnQoc2lkZSwgZWxlbWVudHMpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbGxFbGVtZW50cygpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYm9keSAqJylcbiAgfVxuXG4gIHZhciBnZXRIZWlnaHQgPSB7XG4gICAgICBib2R5T2Zmc2V0OiBmdW5jdGlvbiBnZXRCb2R5T2Zmc2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0ICtcbiAgICAgICAgICBnZXRDb21wdXRlZFN0eWxlKCdtYXJnaW5Ub3AnKSArXG4gICAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZSgnbWFyZ2luQm90dG9tJylcbiAgICAgICAgKVxuICAgICAgfSxcblxuICAgICAgb2Zmc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXRIZWlnaHQuYm9keU9mZnNldCgpIC8vIEJhY2t3YXJkcyBjb21wYXRhYmlsaXR5XG4gICAgICB9LFxuXG4gICAgICBib2R5U2Nyb2xsOiBmdW5jdGlvbiBnZXRCb2R5U2Nyb2xsSGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHRcbiAgICAgIH0sXG5cbiAgICAgIGN1c3RvbTogZnVuY3Rpb24gZ2V0Q3VzdG9tV2lkdGgoKSB7XG4gICAgICAgIHJldHVybiBjdXN0b21DYWxjTWV0aG9kcy5oZWlnaHQoKVxuICAgICAgfSxcblxuICAgICAgZG9jdW1lbnRFbGVtZW50T2Zmc2V0OiBmdW5jdGlvbiBnZXRERU9mZnNldEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICAgIH0sXG5cbiAgICAgIGRvY3VtZW50RWxlbWVudFNjcm9sbDogZnVuY3Rpb24gZ2V0REVTY3JvbGxIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0XG4gICAgICB9LFxuXG4gICAgICBtYXg6IGZ1bmN0aW9uIGdldE1heEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIGdldEFsbE1lYXN1cmVtZW50cyhnZXRIZWlnaHQpKVxuICAgICAgfSxcblxuICAgICAgbWluOiBmdW5jdGlvbiBnZXRNaW5IZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1pbi5hcHBseShudWxsLCBnZXRBbGxNZWFzdXJlbWVudHMoZ2V0SGVpZ2h0KSlcbiAgICAgIH0sXG5cbiAgICAgIGdyb3c6IGZ1bmN0aW9uIGdyb3dIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiBnZXRIZWlnaHQubWF4KCkgLy8gUnVuIG1heCB3aXRob3V0IHRoZSBmb3JjZWQgZG93bnNpemluZ1xuICAgICAgfSxcblxuICAgICAgbG93ZXN0RWxlbWVudDogZnVuY3Rpb24gZ2V0QmVzdEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KFxuICAgICAgICAgIGdldEhlaWdodC5ib2R5T2Zmc2V0KCkgfHwgZ2V0SGVpZ2h0LmRvY3VtZW50RWxlbWVudE9mZnNldCgpLFxuICAgICAgICAgIGdldE1heEVsZW1lbnQoJ2JvdHRvbScsIGdldEFsbEVsZW1lbnRzKCkpXG4gICAgICAgIClcbiAgICAgIH0sXG5cbiAgICAgIHRhZ2dlZEVsZW1lbnQ6IGZ1bmN0aW9uIGdldFRhZ2dlZEVsZW1lbnRzSGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gZ2V0VGFnZ2VkRWxlbWVudHMoJ2JvdHRvbScsICdkYXRhLWlmcmFtZS1oZWlnaHQnKVxuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0V2lkdGggPSB7XG4gICAgICBib2R5U2Nyb2xsOiBmdW5jdGlvbiBnZXRCb2R5U2Nyb2xsV2lkdGgoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoXG4gICAgICB9LFxuXG4gICAgICBib2R5T2Zmc2V0OiBmdW5jdGlvbiBnZXRCb2R5T2Zmc2V0V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoXG4gICAgICB9LFxuXG4gICAgICBjdXN0b206IGZ1bmN0aW9uIGdldEN1c3RvbVdpZHRoKCkge1xuICAgICAgICByZXR1cm4gY3VzdG9tQ2FsY01ldGhvZHMud2lkdGgoKVxuICAgICAgfSxcblxuICAgICAgZG9jdW1lbnRFbGVtZW50U2Nyb2xsOiBmdW5jdGlvbiBnZXRERVNjcm9sbFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoXG4gICAgICB9LFxuXG4gICAgICBkb2N1bWVudEVsZW1lbnRPZmZzZXQ6IGZ1bmN0aW9uIGdldERFT2Zmc2V0V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgICAgIH0sXG5cbiAgICAgIHNjcm9sbDogZnVuY3Rpb24gZ2V0TWF4V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChnZXRXaWR0aC5ib2R5U2Nyb2xsKCksIGdldFdpZHRoLmRvY3VtZW50RWxlbWVudFNjcm9sbCgpKVxuICAgICAgfSxcblxuICAgICAgbWF4OiBmdW5jdGlvbiBnZXRNYXhXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIGdldEFsbE1lYXN1cmVtZW50cyhnZXRXaWR0aCkpXG4gICAgICB9LFxuXG4gICAgICBtaW46IGZ1bmN0aW9uIGdldE1pbldpZHRoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4uYXBwbHkobnVsbCwgZ2V0QWxsTWVhc3VyZW1lbnRzKGdldFdpZHRoKSlcbiAgICAgIH0sXG5cbiAgICAgIHJpZ2h0TW9zdEVsZW1lbnQ6IGZ1bmN0aW9uIHJpZ2h0TW9zdEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiBnZXRNYXhFbGVtZW50KCdyaWdodCcsIGdldEFsbEVsZW1lbnRzKCkpXG4gICAgICB9LFxuXG4gICAgICB0YWdnZWRFbGVtZW50OiBmdW5jdGlvbiBnZXRUYWdnZWRFbGVtZW50c1dpZHRoKCkge1xuICAgICAgICByZXR1cm4gZ2V0VGFnZ2VkRWxlbWVudHMoJ3JpZ2h0JywgJ2RhdGEtaWZyYW1lLXdpZHRoJylcbiAgICAgIH1cbiAgICB9XG5cbiAgZnVuY3Rpb24gc2l6ZUlGcmFtZShcbiAgICB0cmlnZ2VyRXZlbnQsXG4gICAgdHJpZ2dlckV2ZW50RGVzYyxcbiAgICBjdXN0b21IZWlnaHQsXG4gICAgY3VzdG9tV2lkdGhcbiAgKSB7XG4gICAgZnVuY3Rpb24gcmVzaXplSUZyYW1lKCkge1xuICAgICAgaGVpZ2h0ID0gY3VycmVudEhlaWdodFxuICAgICAgd2lkdGggPSBjdXJyZW50V2lkdGhcblxuICAgICAgc2VuZE1zZyhoZWlnaHQsIHdpZHRoLCB0cmlnZ2VyRXZlbnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTaXplQ2hhbmdlRGV0ZWN0ZWQoKSB7XG4gICAgICBmdW5jdGlvbiBjaGVja1RvbGFyYW5jZShhLCBiKSB7XG4gICAgICAgIHZhciByZXRWYWwgPSBNYXRoLmFicyhhIC0gYikgPD0gdG9sZXJhbmNlXG4gICAgICAgIHJldHVybiAhcmV0VmFsXG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRIZWlnaHQgPVxuICAgICAgICB1bmRlZmluZWQgIT09IGN1c3RvbUhlaWdodCA/IGN1c3RvbUhlaWdodCA6IGdldEhlaWdodFtoZWlnaHRDYWxjTW9kZV0oKVxuICAgICAgY3VycmVudFdpZHRoID1cbiAgICAgICAgdW5kZWZpbmVkICE9PSBjdXN0b21XaWR0aCA/IGN1c3RvbVdpZHRoIDogZ2V0V2lkdGhbd2lkdGhDYWxjTW9kZV0oKVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICBjaGVja1RvbGFyYW5jZShoZWlnaHQsIGN1cnJlbnRIZWlnaHQpIHx8XG4gICAgICAgIChjYWxjdWxhdGVXaWR0aCAmJiBjaGVja1RvbGFyYW5jZSh3aWR0aCwgY3VycmVudFdpZHRoKSlcbiAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0ZvcmNlUmVzaXphYmxlRXZlbnQoKSB7XG4gICAgICByZXR1cm4gISh0cmlnZ2VyRXZlbnQgaW4geyBpbml0OiAxLCBpbnRlcnZhbDogMSwgc2l6ZTogMSB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRm9yY2VSZXNpemFibGVDYWxjTW9kZSgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGhlaWdodENhbGNNb2RlIGluIHJlc2V0UmVxdWlyZWRNZXRob2RzIHx8XG4gICAgICAgIChjYWxjdWxhdGVXaWR0aCAmJiB3aWR0aENhbGNNb2RlIGluIHJlc2V0UmVxdWlyZWRNZXRob2RzKVxuICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvZ0lnbm9yZWQoKSB7XG4gICAgICBsb2coJ05vIGNoYW5nZSBpbiBzaXplIGRldGVjdGVkJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0Rvd25TaXppbmcoKSB7XG4gICAgICBpZiAoaXNGb3JjZVJlc2l6YWJsZUV2ZW50KCkgJiYgaXNGb3JjZVJlc2l6YWJsZUNhbGNNb2RlKCkpIHtcbiAgICAgICAgcmVzZXRJRnJhbWUodHJpZ2dlckV2ZW50RGVzYylcbiAgICAgIH0gZWxzZSBpZiAoISh0cmlnZ2VyRXZlbnQgaW4geyBpbnRlcnZhbDogMSB9KSkge1xuICAgICAgICBsb2dJZ25vcmVkKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY3VycmVudEhlaWdodCwgY3VycmVudFdpZHRoXG5cbiAgICBpZiAoaXNTaXplQ2hhbmdlRGV0ZWN0ZWQoKSB8fCAnaW5pdCcgPT09IHRyaWdnZXJFdmVudCkge1xuICAgICAgbG9ja1RyaWdnZXIoKVxuICAgICAgcmVzaXplSUZyYW1lKClcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2tEb3duU2l6aW5nKClcbiAgICB9XG4gIH1cblxuICB2YXIgc2l6ZUlGcmFtZVRocm90dGxlZCA9IHRocm90dGxlKHNpemVJRnJhbWUpXG5cbiAgZnVuY3Rpb24gc2VuZFNpemUodHJpZ2dlckV2ZW50LCB0cmlnZ2VyRXZlbnREZXNjLCBjdXN0b21IZWlnaHQsIGN1c3RvbVdpZHRoKSB7XG4gICAgZnVuY3Rpb24gcmVjb3JkVHJpZ2dlcigpIHtcbiAgICAgIGlmICghKHRyaWdnZXJFdmVudCBpbiB7IHJlc2V0OiAxLCByZXNldFBhZ2U6IDEsIGluaXQ6IDEgfSkpIHtcbiAgICAgICAgbG9nKCdUcmlnZ2VyIGV2ZW50OiAnICsgdHJpZ2dlckV2ZW50RGVzYylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0RvdWJsZUZpcmVkRXZlbnQoKSB7XG4gICAgICByZXR1cm4gdHJpZ2dlckxvY2tlZCAmJiB0cmlnZ2VyRXZlbnQgaW4gZG91YmxlRXZlbnRMaXN0XG4gICAgfVxuXG4gICAgaWYgKCFpc0RvdWJsZUZpcmVkRXZlbnQoKSkge1xuICAgICAgcmVjb3JkVHJpZ2dlcigpXG4gICAgICBpZiAodHJpZ2dlckV2ZW50ID09PSAnaW5pdCcpIHtcbiAgICAgICAgc2l6ZUlGcmFtZSh0cmlnZ2VyRXZlbnQsIHRyaWdnZXJFdmVudERlc2MsIGN1c3RvbUhlaWdodCwgY3VzdG9tV2lkdGgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaXplSUZyYW1lVGhyb3R0bGVkKFxuICAgICAgICAgIHRyaWdnZXJFdmVudCxcbiAgICAgICAgICB0cmlnZ2VyRXZlbnREZXNjLFxuICAgICAgICAgIGN1c3RvbUhlaWdodCxcbiAgICAgICAgICBjdXN0b21XaWR0aFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZygnVHJpZ2dlciBldmVudCBjYW5jZWxsZWQ6ICcgKyB0cmlnZ2VyRXZlbnQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbG9ja1RyaWdnZXIoKSB7XG4gICAgaWYgKCF0cmlnZ2VyTG9ja2VkKSB7XG4gICAgICB0cmlnZ2VyTG9ja2VkID0gdHJ1ZVxuICAgICAgbG9nKCdUcmlnZ2VyIGV2ZW50IGxvY2sgb24nKVxuICAgIH1cbiAgICBjbGVhclRpbWVvdXQodHJpZ2dlckxvY2tlZFRpbWVyKVxuICAgIHRyaWdnZXJMb2NrZWRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdHJpZ2dlckxvY2tlZCA9IGZhbHNlXG4gICAgICBsb2coJ1RyaWdnZXIgZXZlbnQgbG9jayBvZmYnKVxuICAgICAgbG9nKCctLScpXG4gICAgfSwgZXZlbnRDYW5jZWxUaW1lcilcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXJSZXNldCh0cmlnZ2VyRXZlbnQpIHtcbiAgICBoZWlnaHQgPSBnZXRIZWlnaHRbaGVpZ2h0Q2FsY01vZGVdKClcbiAgICB3aWR0aCA9IGdldFdpZHRoW3dpZHRoQ2FsY01vZGVdKClcblxuICAgIHNlbmRNc2coaGVpZ2h0LCB3aWR0aCwgdHJpZ2dlckV2ZW50KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRJRnJhbWUodHJpZ2dlckV2ZW50RGVzYykge1xuICAgIHZhciBoY20gPSBoZWlnaHRDYWxjTW9kZVxuICAgIGhlaWdodENhbGNNb2RlID0gaGVpZ2h0Q2FsY01vZGVEZWZhdWx0XG5cbiAgICBsb2coJ1Jlc2V0IHRyaWdnZXIgZXZlbnQ6ICcgKyB0cmlnZ2VyRXZlbnREZXNjKVxuICAgIGxvY2tUcmlnZ2VyKClcbiAgICB0cmlnZ2VyUmVzZXQoJ3Jlc2V0JylcblxuICAgIGhlaWdodENhbGNNb2RlID0gaGNtXG4gIH1cblxuICBmdW5jdGlvbiBzZW5kTXNnKGhlaWdodCwgd2lkdGgsIHRyaWdnZXJFdmVudCwgbXNnLCB0YXJnZXRPcmlnaW4pIHtcbiAgICBmdW5jdGlvbiBzZXRUYXJnZXRPcmlnaW4oKSB7XG4gICAgICBpZiAodW5kZWZpbmVkID09PSB0YXJnZXRPcmlnaW4pIHtcbiAgICAgICAgdGFyZ2V0T3JpZ2luID0gdGFyZ2V0T3JpZ2luRGVmYXVsdFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nKCdNZXNzYWdlIHRhcmdldE9yaWdpbjogJyArIHRhcmdldE9yaWdpbilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZW5kVG9QYXJlbnQoKSB7XG4gICAgICB2YXIgc2l6ZSA9IGhlaWdodCArICc6JyArIHdpZHRoLFxuICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICBteUlEICtcbiAgICAgICAgICAnOicgK1xuICAgICAgICAgIHNpemUgK1xuICAgICAgICAgICc6JyArXG4gICAgICAgICAgdHJpZ2dlckV2ZW50ICtcbiAgICAgICAgICAodW5kZWZpbmVkICE9PSBtc2cgPyAnOicgKyBtc2cgOiAnJylcblxuICAgICAgbG9nKCdTZW5kaW5nIG1lc3NhZ2UgdG8gaG9zdCBwYWdlICgnICsgbWVzc2FnZSArICcpJylcbiAgICAgIHRhcmdldC5wb3N0TWVzc2FnZShtc2dJRCArIG1lc3NhZ2UsIHRhcmdldE9yaWdpbilcbiAgICB9XG5cbiAgICBpZiAodHJ1ZSA9PT0gc2VuZFBlcm1pdCkge1xuICAgICAgc2V0VGFyZ2V0T3JpZ2luKClcbiAgICAgIHNlbmRUb1BhcmVudCgpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZXIoZXZlbnQpIHtcbiAgICB2YXIgcHJvY2Vzc1JlcXVlc3RGcm9tUGFyZW50ID0ge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdEZyb21QYXJlbnQoKSB7XG4gICAgICAgIGluaXRNc2cgPSBldmVudC5kYXRhXG4gICAgICAgIHRhcmdldCA9IGV2ZW50LnNvdXJjZVxuXG4gICAgICAgIGluaXQoKVxuICAgICAgICBmaXJzdFJ1biA9IGZhbHNlXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGluaXRMb2NrID0gZmFsc2VcbiAgICAgICAgfSwgZXZlbnRDYW5jZWxUaW1lcilcbiAgICAgIH0sXG5cbiAgICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldEZyb21QYXJlbnQoKSB7XG4gICAgICAgIGlmICghaW5pdExvY2spIHtcbiAgICAgICAgICBsb2coJ1BhZ2Ugc2l6ZSByZXNldCBieSBob3N0IHBhZ2UnKVxuICAgICAgICAgIHRyaWdnZXJSZXNldCgncmVzZXRQYWdlJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2coJ1BhZ2UgcmVzZXQgaWdub3JlZCBieSBpbml0JylcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgcmVzaXplOiBmdW5jdGlvbiByZXNpemVGcm9tUGFyZW50KCkge1xuICAgICAgICBzZW5kU2l6ZSgncmVzaXplUGFyZW50JywgJ1BhcmVudCB3aW5kb3cgcmVxdWVzdGVkIHNpemUgY2hlY2snKVxuICAgICAgfSxcblxuICAgICAgbW92ZVRvQW5jaG9yOiBmdW5jdGlvbiBtb3ZlVG9BbmNob3JGKCkge1xuICAgICAgICBpblBhZ2VMaW5rcy5maW5kVGFyZ2V0KGdldERhdGEoKSlcbiAgICAgIH0sXG4gICAgICBpblBhZ2VMaW5rOiBmdW5jdGlvbiBpblBhZ2VMaW5rRigpIHtcbiAgICAgICAgdGhpcy5tb3ZlVG9BbmNob3IoKVxuICAgICAgfSwgLy8gQmFja3dhcmQgY29tcGF0YWJpbGl0eVxuXG4gICAgICBwYWdlSW5mbzogZnVuY3Rpb24gcGFnZUluZm9Gcm9tUGFyZW50KCkge1xuICAgICAgICB2YXIgbXNnQm9keSA9IGdldERhdGEoKVxuICAgICAgICBsb2coJ1BhZ2VJbmZvRnJvbVBhcmVudCBjYWxsZWQgZnJvbSBwYXJlbnQ6ICcgKyBtc2dCb2R5KVxuICAgICAgICBvblBhZ2VJbmZvKEpTT04ucGFyc2UobXNnQm9keSkpXG4gICAgICAgIGxvZygnIC0tJylcbiAgICAgIH0sXG5cbiAgICAgIG1lc3NhZ2U6IGZ1bmN0aW9uIG1lc3NhZ2VGcm9tUGFyZW50KCkge1xuICAgICAgICB2YXIgbXNnQm9keSA9IGdldERhdGEoKVxuXG4gICAgICAgIGxvZygnb25NZXNzYWdlIGNhbGxlZCBmcm9tIHBhcmVudDogJyArIG1zZ0JvZHkpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzb25hcmpzL25vLWV4dHJhLWFyZ3VtZW50c1xuICAgICAgICBvbk1lc3NhZ2UoSlNPTi5wYXJzZShtc2dCb2R5KSlcbiAgICAgICAgbG9nKCcgLS0nKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTWVzc2FnZUZvclVzKCkge1xuICAgICAgcmV0dXJuIG1zZ0lEID09PSAoJycgKyBldmVudC5kYXRhKS5zdWJzdHIoMCwgbXNnSWRMZW4pIC8vICcnKyBQcm90ZWN0cyBhZ2FpbnN0IG5vbi1zdHJpbmcgbWVzc2FnZXNcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRNZXNzYWdlVHlwZSgpIHtcbiAgICAgIHJldHVybiBldmVudC5kYXRhLnNwbGl0KCddJylbMV0uc3BsaXQoJzonKVswXVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgICByZXR1cm4gZXZlbnQuZGF0YS5zdWJzdHIoZXZlbnQuZGF0YS5pbmRleE9mKCc6JykgKyAxKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTWlkZGxlVGllcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICghKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSAmJlxuICAgICAgICAgICdpRnJhbWVSZXNpemUnIGluIHdpbmRvdykgfHxcbiAgICAgICAgKCdqUXVlcnknIGluIHdpbmRvdyAmJiAnaUZyYW1lUmVzaXplJyBpbiB3aW5kb3cualF1ZXJ5LnByb3RvdHlwZSlcbiAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0luaXRNc2coKSB7XG4gICAgICAvLyBUZXN0IGlmIHRoaXMgbWVzc2FnZSBpcyBmcm9tIGEgY2hpbGQgYmVsb3cgdXMuIFRoaXMgaXMgYW4gdWdseSB0ZXN0LCBob3dldmVyLCB1cGRhdGluZ1xuICAgICAgLy8gdGhlIG1lc3NhZ2UgZm9ybWF0IHdvdWxkIGJyZWFrIGJhY2t3YXJkcyBjb21wYXRpYml0eS5cbiAgICAgIHJldHVybiBldmVudC5kYXRhLnNwbGl0KCc6JylbMl0gaW4geyB0cnVlOiAxLCBmYWxzZTogMSB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbEZyb21QYXJlbnQoKSB7XG4gICAgICB2YXIgbWVzc2FnZVR5cGUgPSBnZXRNZXNzYWdlVHlwZSgpXG5cbiAgICAgIGlmIChtZXNzYWdlVHlwZSBpbiBwcm9jZXNzUmVxdWVzdEZyb21QYXJlbnQpIHtcbiAgICAgICAgcHJvY2Vzc1JlcXVlc3RGcm9tUGFyZW50W21lc3NhZ2VUeXBlXSgpXG4gICAgICB9IGVsc2UgaWYgKCFpc01pZGRsZVRpZXIoKSAmJiAhaXNJbml0TXNnKCkpIHtcbiAgICAgICAgd2FybignVW5leHBlY3RlZCBtZXNzYWdlICgnICsgZXZlbnQuZGF0YSArICcpJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzTWVzc2FnZSgpIHtcbiAgICAgIGlmIChmYWxzZSA9PT0gZmlyc3RSdW4pIHtcbiAgICAgICAgY2FsbEZyb21QYXJlbnQoKVxuICAgICAgfSBlbHNlIGlmIChpc0luaXRNc2coKSkge1xuICAgICAgICBwcm9jZXNzUmVxdWVzdEZyb21QYXJlbnQuaW5pdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2coXG4gICAgICAgICAgJ0lnbm9yZWQgbWVzc2FnZSBvZiB0eXBlIFwiJyArXG4gICAgICAgICAgICBnZXRNZXNzYWdlVHlwZSgpICtcbiAgICAgICAgICAgICdcIi4gUmVjZWl2ZWQgYmVmb3JlIGluaXRpYWxpemF0aW9uLidcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc01lc3NhZ2VGb3JVcygpKSB7XG4gICAgICBwcm9jZXNzTWVzc2FnZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gTm9ybWFsbHkgdGhlIHBhcmVudCBraWNrcyB0aGluZ3Mgb2ZmIHdoZW4gaXQgZGV0ZWN0cyB0aGUgaUZyYW1lIGhhcyBsb2FkZWQuXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGFzeW5jLWxvYWRlZCwgdGhlbiB0ZWxsIHBhcmVudCBwYWdlIHRvIHJldHJ5IGluaXQuXG4gIGZ1bmN0aW9uIGNoa0xhdGVMb2FkZWQoKSB7XG4gICAgaWYgKCdsb2FkaW5nJyAhPT0gZG9jdW1lbnQucmVhZHlTdGF0ZSkge1xuICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSgnW2lGcmFtZVJlc2l6ZXJDaGlsZF1SZWFkeScsICcqJylcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ21lc3NhZ2UnLCByZWNlaXZlcilcbiAgYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZWFkeXN0YXRlY2hhbmdlJywgY2hrTGF0ZUxvYWRlZClcbiAgY2hrTGF0ZUxvYWRlZCgpXG5cbiAgXG59KSgpXG4iLCIvKlxuICogRmlsZTogaWZyYW1lUmVzaXplci5qc1xuICogRGVzYzogRm9yY2UgaWZyYW1lcyB0byBzaXplIHRvIGNvbnRlbnQuXG4gKiBSZXF1aXJlczogaWZyYW1lUmVzaXplci5jb250ZW50V2luZG93LmpzIHRvIGJlIGxvYWRlZCBpbnRvIHRoZSB0YXJnZXQgZnJhbWUuXG4gKiBEb2M6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGpicmFkc2hhdy9pZnJhbWUtcmVzaXplclxuICogQXV0aG9yOiBEYXZpZCBKLiBCcmFkc2hhdyAtIGRhdmVAYnJhZHNoYXcubmV0XG4gKiBDb250cmlidXRvcjogSnVyZSBNYXYgLSBqdXJlLm1hdkBnbWFpbC5jb21cbiAqIENvbnRyaWJ1dG9yOiBSZWVkIERhZG91bmUgLSByZWVkQGRhZG91bmUuY29tXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHNvbmFyanMvY29nbml0aXZlLWNvbXBsZXhpdHksIG5vLXNoYWRvdy1yZXN0cmljdGVkLW5hbWVzXG47KGZ1bmN0aW9uICh1bmRlZmluZWQpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gLy8gZG9uJ3QgcnVuIGZvciBzZXJ2ZXIgc2lkZSByZW5kZXJcblxuICB2YXIgY291bnQgPSAwLFxuICAgIGxvZ0VuYWJsZWQgPSBmYWxzZSxcbiAgICBoaWRkZW5DaGVja0VuYWJsZWQgPSBmYWxzZSxcbiAgICBtc2dIZWFkZXIgPSAnbWVzc2FnZScsXG4gICAgbXNnSGVhZGVyTGVuID0gbXNnSGVhZGVyLmxlbmd0aCxcbiAgICBtc2dJZCA9ICdbaUZyYW1lU2l6ZXJdJywgLy8gTXVzdCBtYXRjaCBpZnJhbWUgbXNnIElEXG4gICAgbXNnSWRMZW4gPSBtc2dJZC5sZW5ndGgsXG4gICAgcGFnZVBvc2l0aW9uID0gbnVsbCxcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuICAgIHJlc2V0UmVxdWlyZWRNZXRob2RzID0ge1xuICAgICAgbWF4OiAxLFxuICAgICAgc2Nyb2xsOiAxLFxuICAgICAgYm9keVNjcm9sbDogMSxcbiAgICAgIGRvY3VtZW50RWxlbWVudFNjcm9sbDogMVxuICAgIH0sXG4gICAgc2V0dGluZ3MgPSB7fSxcbiAgICB0aW1lciA9IG51bGwsXG4gICAgZGVmYXVsdHMgPSB7XG4gICAgICBhdXRvUmVzaXplOiB0cnVlLFxuICAgICAgYm9keUJhY2tncm91bmQ6IG51bGwsXG4gICAgICBib2R5TWFyZ2luOiBudWxsLFxuICAgICAgYm9keU1hcmdpblYxOiA4LFxuICAgICAgYm9keVBhZGRpbmc6IG51bGwsXG4gICAgICBjaGVja09yaWdpbjogdHJ1ZSxcbiAgICAgIGluUGFnZUxpbmtzOiBmYWxzZSxcbiAgICAgIGVuYWJsZVB1YmxpY01ldGhvZHM6IHRydWUsXG4gICAgICBoZWlnaHRDYWxjdWxhdGlvbk1ldGhvZDogJ2JvZHlPZmZzZXQnLFxuICAgICAgaWQ6ICdpRnJhbWVSZXNpemVyJyxcbiAgICAgIGludGVydmFsOiAzMixcbiAgICAgIGxvZzogZmFsc2UsXG4gICAgICBtYXhIZWlnaHQ6IEluZmluaXR5LFxuICAgICAgbWF4V2lkdGg6IEluZmluaXR5LFxuICAgICAgbWluSGVpZ2h0OiAwLFxuICAgICAgbWluV2lkdGg6IDAsXG4gICAgICBtb3VzZUV2ZW50czogdHJ1ZSxcbiAgICAgIHJlc2l6ZUZyb206ICdwYXJlbnQnLFxuICAgICAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgIHNpemVIZWlnaHQ6IHRydWUsXG4gICAgICBzaXplV2lkdGg6IGZhbHNlLFxuICAgICAgd2FybmluZ1RpbWVvdXQ6IDUwMDAsXG4gICAgICB0b2xlcmFuY2U6IDAsXG4gICAgICB3aWR0aENhbGN1bGF0aW9uTWV0aG9kOiAnc2Nyb2xsJyxcbiAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0sXG4gICAgICBvbkNsb3NlZDogZnVuY3Rpb24gKCkge30sXG4gICAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgb25NZXNzYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ29uTWVzc2FnZSBmdW5jdGlvbiBub3QgZGVmaW5lZCcpXG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgIG9uTW91c2VMZWF2ZTogZnVuY3Rpb24gKCkge30sXG4gICAgICBvblJlc2l6ZWQ6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgb25TY3JvbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgZnVuY3Rpb24gZ2V0TXV0YXRpb25PYnNlcnZlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgfHxcbiAgICAgIHdpbmRvdy5XZWJLaXRNdXRhdGlvbk9ic2VydmVyIHx8XG4gICAgICB3aW5kb3cuTW96TXV0YXRpb25PYnNlcnZlclxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZWwsIGV2dCwgZnVuYykge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBmdW5jLCBmYWxzZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZWwsIGV2dCwgZnVuYykge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBmdW5jLCBmYWxzZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwUmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkge1xuICAgIHZhciB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0JywgJ28nLCAnbXMnXVxuICAgIHZhciB4XG5cbiAgICAvLyBSZW1vdmUgdmVuZG9yIHByZWZpeGluZyBpZiBwcmVmaXhlZCBhbmQgYnJlYWsgZWFybHkgaWYgbm90XG4gICAgZm9yICh4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICFyZXF1ZXN0QW5pbWF0aW9uRnJhbWU7IHggKz0gMSkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0gKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ11cbiAgICB9XG5cbiAgICBpZiAoIXJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgbG9nKCdzZXR1cCcsICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgbm90IHN1cHBvcnRlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZpcmVmb3ggZXh0ZW5zaW9uIGNvbnRlbnQtc2NyaXB0cyBoYXZlIGEgZ2xvYmFsVGhpcyBvYmplY3QgdGhhdCBpcyBub3QgdGhlIHNhbWUgYXMgd2luZG93LlxuICAgICAgLy8gQmluZGluZyBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCB0byB3aW5kb3cgYWxsb3dzIHRoZSBmdW5jdGlvbiB0byB3b3JrIGFuZCBwcmV2ZW50cyBlcnJvcnNcbiAgICAgIC8vIGJlaW5nIHRocm93biB3aGVuIHJ1biBpbiB0aGF0IGNvbnRleHQsIGFuZCBzaG91bGQgYmUgYSBuby1vcCBpbiBldmVyeSBvdGhlciBjb250ZXh0LlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE15SUQoaWZyYW1lSWQpIHtcbiAgICB2YXIgcmV0U3RyID0gJ0hvc3QgcGFnZTogJyArIGlmcmFtZUlkXG5cbiAgICBpZiAod2luZG93LnRvcCAhPT0gd2luZG93LnNlbGYpIHtcbiAgICAgIHJldFN0ciA9XG4gICAgICAgIHdpbmRvdy5wYXJlbnRJRnJhbWUgJiYgd2luZG93LnBhcmVudElGcmFtZS5nZXRJZFxuICAgICAgICAgID8gd2luZG93LnBhcmVudElGcmFtZS5nZXRJZCgpICsgJzogJyArIGlmcmFtZUlkXG4gICAgICAgICAgOiAnTmVzdGVkIGhvc3QgcGFnZTogJyArIGlmcmFtZUlkXG4gICAgfVxuXG4gICAgcmV0dXJuIHJldFN0clxuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0TG9nSGVhZGVyKGlmcmFtZUlkKSB7XG4gICAgcmV0dXJuIG1zZ0lkICsgJ1snICsgZ2V0TXlJRChpZnJhbWVJZCkgKyAnXSdcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTG9nRW5hYmxlZChpZnJhbWVJZCkge1xuICAgIHJldHVybiBzZXR0aW5nc1tpZnJhbWVJZF0gPyBzZXR0aW5nc1tpZnJhbWVJZF0ubG9nIDogbG9nRW5hYmxlZFxuICB9XG5cbiAgZnVuY3Rpb24gbG9nKGlmcmFtZUlkLCBtc2cpIHtcbiAgICBvdXRwdXQoJ2xvZycsIGlmcmFtZUlkLCBtc2csIGlzTG9nRW5hYmxlZChpZnJhbWVJZCkpXG4gIH1cblxuICBmdW5jdGlvbiBpbmZvKGlmcmFtZUlkLCBtc2cpIHtcbiAgICBvdXRwdXQoJ2luZm8nLCBpZnJhbWVJZCwgbXNnLCBpc0xvZ0VuYWJsZWQoaWZyYW1lSWQpKVxuICB9XG5cbiAgZnVuY3Rpb24gd2FybihpZnJhbWVJZCwgbXNnKSB7XG4gICAgb3V0cHV0KCd3YXJuJywgaWZyYW1lSWQsIG1zZywgdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG91dHB1dCh0eXBlLCBpZnJhbWVJZCwgbXNnLCBlbmFibGVkKSB7XG4gICAgaWYgKHRydWUgPT09IGVuYWJsZWQgJiYgJ29iamVjdCcgPT09IHR5cGVvZiB3aW5kb3cuY29uc29sZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGVbdHlwZV0oZm9ybWF0TG9nSGVhZGVyKGlmcmFtZUlkKSwgbXNnKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlGcmFtZUxpc3RlbmVyKGV2ZW50KSB7XG4gICAgZnVuY3Rpb24gcmVzaXplSUZyYW1lKCkge1xuICAgICAgZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgICBzZXRTaXplKG1lc3NhZ2VEYXRhKVxuICAgICAgICBzZXRQYWdlUG9zaXRpb24oaWZyYW1lSWQpXG4gICAgICAgIG9uKCdvblJlc2l6ZWQnLCBtZXNzYWdlRGF0YSlcbiAgICAgIH1cblxuICAgICAgZW5zdXJlSW5SYW5nZSgnSGVpZ2h0JylcbiAgICAgIGVuc3VyZUluUmFuZ2UoJ1dpZHRoJylcblxuICAgICAgc3luY1Jlc2l6ZShyZXNpemUsIG1lc3NhZ2VEYXRhLCAnaW5pdCcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc01zZygpIHtcbiAgICAgIHZhciBkYXRhID0gbXNnLnN1YnN0cihtc2dJZExlbikuc3BsaXQoJzonKVxuICAgICAgdmFyIGhlaWdodCA9IGRhdGFbMV0gPyBwYXJzZUludChkYXRhWzFdLCAxMCkgOiAwXG4gICAgICB2YXIgaWZyYW1lID0gc2V0dGluZ3NbZGF0YVswXV0gJiYgc2V0dGluZ3NbZGF0YVswXV0uaWZyYW1lXG4gICAgICB2YXIgY29tcFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShpZnJhbWUpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlmcmFtZTogaWZyYW1lLFxuICAgICAgICBpZDogZGF0YVswXSxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKyBnZXRQYWRkaW5nRW5kcyhjb21wU3R5bGUpICsgZ2V0Qm9yZGVyRW5kcyhjb21wU3R5bGUpLFxuICAgICAgICB3aWR0aDogZGF0YVsyXSxcbiAgICAgICAgdHlwZTogZGF0YVszXVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBhZGRpbmdFbmRzKGNvbXBTdHlsZSkge1xuICAgICAgaWYgKGNvbXBTdHlsZS5ib3hTaXppbmcgIT09ICdib3JkZXItYm94Jykge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfVxuICAgICAgdmFyIHRvcCA9IGNvbXBTdHlsZS5wYWRkaW5nVG9wID8gcGFyc2VJbnQoY29tcFN0eWxlLnBhZGRpbmdUb3AsIDEwKSA6IDBcbiAgICAgIHZhciBib3QgPSBjb21wU3R5bGUucGFkZGluZ0JvdHRvbVxuICAgICAgICA/IHBhcnNlSW50KGNvbXBTdHlsZS5wYWRkaW5nQm90dG9tLCAxMClcbiAgICAgICAgOiAwXG4gICAgICByZXR1cm4gdG9wICsgYm90XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9yZGVyRW5kcyhjb21wU3R5bGUpIHtcbiAgICAgIGlmIChjb21wU3R5bGUuYm94U2l6aW5nICE9PSAnYm9yZGVyLWJveCcpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIHZhciB0b3AgPSBjb21wU3R5bGUuYm9yZGVyVG9wV2lkdGhcbiAgICAgICAgPyBwYXJzZUludChjb21wU3R5bGUuYm9yZGVyVG9wV2lkdGgsIDEwKVxuICAgICAgICA6IDBcbiAgICAgIHZhciBib3QgPSBjb21wU3R5bGUuYm9yZGVyQm90dG9tV2lkdGhcbiAgICAgICAgPyBwYXJzZUludChjb21wU3R5bGUuYm9yZGVyQm90dG9tV2lkdGgsIDEwKVxuICAgICAgICA6IDBcbiAgICAgIHJldHVybiB0b3AgKyBib3RcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbnN1cmVJblJhbmdlKERpbWVuc2lvbikge1xuICAgICAgdmFyIG1heCA9IE51bWJlcihzZXR0aW5nc1tpZnJhbWVJZF1bJ21heCcgKyBEaW1lbnNpb25dKSxcbiAgICAgICAgbWluID0gTnVtYmVyKHNldHRpbmdzW2lmcmFtZUlkXVsnbWluJyArIERpbWVuc2lvbl0pLFxuICAgICAgICBkaW1lbnNpb24gPSBEaW1lbnNpb24udG9Mb3dlckNhc2UoKSxcbiAgICAgICAgc2l6ZSA9IE51bWJlcihtZXNzYWdlRGF0YVtkaW1lbnNpb25dKVxuXG4gICAgICBsb2coaWZyYW1lSWQsICdDaGVja2luZyAnICsgZGltZW5zaW9uICsgJyBpcyBpbiByYW5nZSAnICsgbWluICsgJy0nICsgbWF4KVxuXG4gICAgICBpZiAoc2l6ZSA8IG1pbikge1xuICAgICAgICBzaXplID0gbWluXG4gICAgICAgIGxvZyhpZnJhbWVJZCwgJ1NldCAnICsgZGltZW5zaW9uICsgJyB0byBtaW4gdmFsdWUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2l6ZSA+IG1heCkge1xuICAgICAgICBzaXplID0gbWF4XG4gICAgICAgIGxvZyhpZnJhbWVJZCwgJ1NldCAnICsgZGltZW5zaW9uICsgJyB0byBtYXggdmFsdWUnKVxuICAgICAgfVxuXG4gICAgICBtZXNzYWdlRGF0YVtkaW1lbnNpb25dID0gJycgKyBzaXplXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNNZXNzYWdlRnJvbUlGcmFtZSgpIHtcbiAgICAgIGZ1bmN0aW9uIGNoZWNrQWxsb3dlZE9yaWdpbigpIHtcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tMaXN0KCkge1xuICAgICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgIHJldENvZGUgPSBmYWxzZVxuXG4gICAgICAgICAgbG9nKFxuICAgICAgICAgICAgaWZyYW1lSWQsXG4gICAgICAgICAgICAnQ2hlY2tpbmcgY29ubmVjdGlvbiBpcyBmcm9tIGFsbG93ZWQgbGlzdCBvZiBvcmlnaW5zOiAnICtcbiAgICAgICAgICAgICAgY2hlY2tPcmlnaW5cbiAgICAgICAgICApXG5cbiAgICAgICAgICBmb3IgKDsgaSA8IGNoZWNrT3JpZ2luLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tPcmlnaW5baV0gPT09IG9yaWdpbikge1xuICAgICAgICAgICAgICByZXRDb2RlID0gdHJ1ZVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmV0Q29kZVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tTaW5nbGUoKSB7XG4gICAgICAgICAgdmFyIHJlbW90ZUhvc3QgPSBzZXR0aW5nc1tpZnJhbWVJZF0gJiYgc2V0dGluZ3NbaWZyYW1lSWRdLnJlbW90ZUhvc3RcbiAgICAgICAgICBsb2coaWZyYW1lSWQsICdDaGVja2luZyBjb25uZWN0aW9uIGlzIGZyb206ICcgKyByZW1vdGVIb3N0KVxuICAgICAgICAgIHJldHVybiBvcmlnaW4gPT09IHJlbW90ZUhvc3RcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGVja09yaWdpbi5jb25zdHJ1Y3RvciA9PT0gQXJyYXkgPyBjaGVja0xpc3QoKSA6IGNoZWNrU2luZ2xlKClcbiAgICAgIH1cblxuICAgICAgdmFyIG9yaWdpbiA9IGV2ZW50Lm9yaWdpbixcbiAgICAgICAgY2hlY2tPcmlnaW4gPSBzZXR0aW5nc1tpZnJhbWVJZF0gJiYgc2V0dGluZ3NbaWZyYW1lSWRdLmNoZWNrT3JpZ2luXG5cbiAgICAgIGlmIChjaGVja09yaWdpbiAmJiAnJyArIG9yaWdpbiAhPT0gJ251bGwnICYmICFjaGVja0FsbG93ZWRPcmlnaW4oKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1VuZXhwZWN0ZWQgbWVzc2FnZSByZWNlaXZlZCBmcm9tOiAnICtcbiAgICAgICAgICAgIG9yaWdpbiArXG4gICAgICAgICAgICAnIGZvciAnICtcbiAgICAgICAgICAgIG1lc3NhZ2VEYXRhLmlmcmFtZS5pZCArXG4gICAgICAgICAgICAnLiBNZXNzYWdlIHdhczogJyArXG4gICAgICAgICAgICBldmVudC5kYXRhICtcbiAgICAgICAgICAgICcuIFRoaXMgZXJyb3IgY2FuIGJlIGRpc2FibGVkIGJ5IHNldHRpbmcgdGhlIGNoZWNrT3JpZ2luOiBmYWxzZSBvcHRpb24gb3IgYnkgcHJvdmlkaW5nIG9mIGFycmF5IG9mIHRydXN0ZWQgZG9tYWlucy4nXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc01lc3NhZ2VGb3JVcygpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIG1zZ0lkID09PSAoJycgKyBtc2cpLnN1YnN0cigwLCBtc2dJZExlbikgJiZcbiAgICAgICAgbXNnLnN1YnN0cihtc2dJZExlbikuc3BsaXQoJzonKVswXSBpbiBzZXR0aW5nc1xuICAgICAgKSAvLyAnJytQcm90ZWN0cyBhZ2FpbnN0IG5vbi1zdHJpbmcgbXNnXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNNZXNzYWdlRnJvbU1ldGFQYXJlbnQoKSB7XG4gICAgICAvLyBUZXN0IGlmIHRoaXMgbWVzc2FnZSBpcyBmcm9tIGEgcGFyZW50IGFib3ZlIHVzLiBUaGlzIGlzIGFuIHVnbHkgdGVzdCwgaG93ZXZlciwgdXBkYXRpbmdcbiAgICAgIC8vIHRoZSBtZXNzYWdlIGZvcm1hdCB3b3VsZCBicmVhayBiYWNrd2FyZHMgY29tcGF0aWJpdHkuXG4gICAgICB2YXIgcmV0Q29kZSA9IG1lc3NhZ2VEYXRhLnR5cGUgaW4geyB0cnVlOiAxLCBmYWxzZTogMSwgdW5kZWZpbmVkOiAxIH1cblxuICAgICAgaWYgKHJldENvZGUpIHtcbiAgICAgICAgbG9nKGlmcmFtZUlkLCAnSWdub3JpbmcgaW5pdCBtZXNzYWdlIGZyb20gbWV0YSBwYXJlbnQgcGFnZScpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXRDb2RlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TXNnQm9keShvZmZzZXQpIHtcbiAgICAgIHJldHVybiBtc2cuc3Vic3RyKG1zZy5pbmRleE9mKCc6JykgKyBtc2dIZWFkZXJMZW4gKyBvZmZzZXQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9yd2FyZE1zZ0Zyb21JRnJhbWUobXNnQm9keSkge1xuICAgICAgbG9nKFxuICAgICAgICBpZnJhbWVJZCxcbiAgICAgICAgJ29uTWVzc2FnZSBwYXNzZWQ6IHtpZnJhbWU6ICcgK1xuICAgICAgICAgIG1lc3NhZ2VEYXRhLmlmcmFtZS5pZCArXG4gICAgICAgICAgJywgbWVzc2FnZTogJyArXG4gICAgICAgICAgbXNnQm9keSArXG4gICAgICAgICAgJ30nXG4gICAgICApXG5cbiAgICAgIG9uKCdvbk1lc3NhZ2UnLCB7XG4gICAgICAgIGlmcmFtZTogbWVzc2FnZURhdGEuaWZyYW1lLFxuICAgICAgICBtZXNzYWdlOiBKU09OLnBhcnNlKG1zZ0JvZHkpXG4gICAgICB9KVxuXG4gICAgICBsb2coaWZyYW1lSWQsICctLScpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGFnZUluZm8oKSB7XG4gICAgICB2YXIgYm9keVBvc2l0aW9uID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgaUZyYW1lUG9zaXRpb24gPSBtZXNzYWdlRGF0YS5pZnJhbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaWZyYW1lSGVpZ2h0OiBpRnJhbWVQb3NpdGlvbi5oZWlnaHQsXG4gICAgICAgIGlmcmFtZVdpZHRoOiBpRnJhbWVQb3NpdGlvbi53aWR0aCxcbiAgICAgICAgY2xpZW50SGVpZ2h0OiBNYXRoLm1heChcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwXG4gICAgICAgICksXG4gICAgICAgIGNsaWVudFdpZHRoOiBNYXRoLm1heChcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgd2luZG93LmlubmVyV2lkdGggfHwgMFxuICAgICAgICApLFxuICAgICAgICBvZmZzZXRUb3A6IHBhcnNlSW50KGlGcmFtZVBvc2l0aW9uLnRvcCAtIGJvZHlQb3NpdGlvbi50b3AsIDEwKSxcbiAgICAgICAgb2Zmc2V0TGVmdDogcGFyc2VJbnQoaUZyYW1lUG9zaXRpb24ubGVmdCAtIGJvZHlQb3NpdGlvbi5sZWZ0LCAxMCksXG4gICAgICAgIHNjcm9sbFRvcDogd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgICAgICBzY3JvbGxMZWZ0OiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICAgIGRvY3VtZW50SGVpZ2h0OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICBkb2N1bWVudFdpZHRoOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgIHdpbmRvd0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICB3aW5kb3dXaWR0aDogd2luZG93LmlubmVyV2lkdGhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VuZFBhZ2VJbmZvVG9JZnJhbWUoaWZyYW1lLCBpZnJhbWVJZCkge1xuICAgICAgZnVuY3Rpb24gZGVib3VuY2VkVHJpZ2dlcigpIHtcbiAgICAgICAgdHJpZ2dlcignU2VuZCBQYWdlIEluZm8nLCAncGFnZUluZm86JyArIGdldFBhZ2VJbmZvKCksIGlmcmFtZSwgaWZyYW1lSWQpXG4gICAgICB9XG4gICAgICBkZWJvdW5jZUZyYW1lRXZlbnRzKGRlYm91bmNlZFRyaWdnZXIsIDMyLCBpZnJhbWVJZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydFBhZ2VJbmZvTW9uaXRvcigpIHtcbiAgICAgIGZ1bmN0aW9uIHNldExpc3RlbmVyKHR5cGUsIGZ1bmMpIHtcbiAgICAgICAgZnVuY3Rpb24gc2VuZFBhZ2VJbmZvKCkge1xuICAgICAgICAgIGlmIChzZXR0aW5nc1tpZF0pIHtcbiAgICAgICAgICAgIHNlbmRQYWdlSW5mb1RvSWZyYW1lKHNldHRpbmdzW2lkXS5pZnJhbWUsIGlkKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdG9wKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICA7WydzY3JvbGwnLCAncmVzaXplJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgbG9nKGlkLCB0eXBlICsgZXZ0ICsgJyBsaXN0ZW5lciBmb3Igc2VuZFBhZ2VJbmZvJylcbiAgICAgICAgICBmdW5jKHdpbmRvdywgZXZ0LCBzZW5kUGFnZUluZm8pXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIHNldExpc3RlbmVyKCdSZW1vdmUgJywgcmVtb3ZlRXZlbnRMaXN0ZW5lcilcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHNldExpc3RlbmVyKCdBZGQgJywgYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgIH1cblxuICAgICAgdmFyIGlkID0gaWZyYW1lSWQgLy8gQ3JlYXRlIGxvY2FsbHkgc2NvcGVkIGNvcHkgb2YgaUZyYW1lIElEXG5cbiAgICAgIHN0YXJ0KClcblxuICAgICAgaWYgKHNldHRpbmdzW2lkXSkge1xuICAgICAgICBzZXR0aW5nc1tpZF0uc3RvcFBhZ2VJbmZvID0gc3RvcFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BQYWdlSW5mb01vbml0b3IoKSB7XG4gICAgICBpZiAoc2V0dGluZ3NbaWZyYW1lSWRdICYmIHNldHRpbmdzW2lmcmFtZUlkXS5zdG9wUGFnZUluZm8pIHtcbiAgICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLnN0b3BQYWdlSW5mbygpXG4gICAgICAgIGRlbGV0ZSBzZXR0aW5nc1tpZnJhbWVJZF0uc3RvcFBhZ2VJbmZvXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tJRnJhbWVFeGlzdHMoKSB7XG4gICAgICB2YXIgcmV0Qm9vbCA9IHRydWVcblxuICAgICAgaWYgKG51bGwgPT09IG1lc3NhZ2VEYXRhLmlmcmFtZSkge1xuICAgICAgICB3YXJuKGlmcmFtZUlkLCAnSUZyYW1lICgnICsgbWVzc2FnZURhdGEuaWQgKyAnKSBub3QgZm91bmQnKVxuICAgICAgICByZXRCb29sID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXRCb29sXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RWxlbWVudFBvc2l0aW9uKHRhcmdldCkge1xuICAgICAgdmFyIGlGcmFtZVBvc2l0aW9uID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgIGdldFBhZ2VQb3NpdGlvbihpZnJhbWVJZClcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogTWF0aC5mbG9vcihOdW1iZXIoaUZyYW1lUG9zaXRpb24ubGVmdCkgKyBOdW1iZXIocGFnZVBvc2l0aW9uLngpKSxcbiAgICAgICAgeTogTWF0aC5mbG9vcihOdW1iZXIoaUZyYW1lUG9zaXRpb24udG9wKSArIE51bWJlcihwYWdlUG9zaXRpb24ueSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsUmVxdWVzdEZyb21DaGlsZChhZGRPZmZzZXQpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIC8vIE5vdCB0ZXN0YWJsZSBpbiBLYXJtYVxuICAgICAgZnVuY3Rpb24gcmVwb3NpdGlvbigpIHtcbiAgICAgICAgcGFnZVBvc2l0aW9uID0gbmV3UG9zaXRpb25cbiAgICAgICAgc2Nyb2xsVG8oKVxuICAgICAgICBsb2coaWZyYW1lSWQsICctLScpXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNhbGNPZmZzZXQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogTnVtYmVyKG1lc3NhZ2VEYXRhLndpZHRoKSArIG9mZnNldC54LFxuICAgICAgICAgIHk6IE51bWJlcihtZXNzYWdlRGF0YS5oZWlnaHQpICsgb2Zmc2V0LnlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzY3JvbGxQYXJlbnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cucGFyZW50SUZyYW1lKSB7XG4gICAgICAgICAgd2luZG93LnBhcmVudElGcmFtZVsnc2Nyb2xsVG8nICsgKGFkZE9mZnNldCA/ICdPZmZzZXQnIDogJycpXShcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9uLngsXG4gICAgICAgICAgICBuZXdQb3NpdGlvbi55XG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBpZnJhbWVJZCxcbiAgICAgICAgICAgICdVbmFibGUgdG8gc2Nyb2xsIHRvIHJlcXVlc3RlZCBwb3NpdGlvbiwgd2luZG93LnBhcmVudElGcmFtZSBub3QgZm91bmQnXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBvZmZzZXQgPSBhZGRPZmZzZXRcbiAgICAgICAgICA/IGdldEVsZW1lbnRQb3NpdGlvbihtZXNzYWdlRGF0YS5pZnJhbWUpXG4gICAgICAgICAgOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgbmV3UG9zaXRpb24gPSBjYWxjT2Zmc2V0KClcblxuICAgICAgbG9nKFxuICAgICAgICBpZnJhbWVJZCxcbiAgICAgICAgJ1JlcG9zaXRpb24gcmVxdWVzdGVkIGZyb20gaUZyYW1lIChvZmZzZXQgeDonICtcbiAgICAgICAgICBvZmZzZXQueCArXG4gICAgICAgICAgJyB5OicgK1xuICAgICAgICAgIG9mZnNldC55ICtcbiAgICAgICAgICAnKSdcbiAgICAgIClcblxuICAgICAgaWYgKHdpbmRvdy50b3AgIT09IHdpbmRvdy5zZWxmKSB7XG4gICAgICAgIHNjcm9sbFBhcmVudCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXBvc2l0aW9uKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUbygpIHtcbiAgICAgIGlmIChmYWxzZSAhPT0gb24oJ29uU2Nyb2xsJywgcGFnZVBvc2l0aW9uKSkge1xuICAgICAgICBzZXRQYWdlUG9zaXRpb24oaWZyYW1lSWQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1bnNldFBhZ2VQb3NpdGlvbigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZFRhcmdldChsb2NhdGlvbikge1xuICAgICAgZnVuY3Rpb24ganVtcFRvVGFyZ2V0KCkge1xuICAgICAgICB2YXIganVtcFBvc2l0aW9uID0gZ2V0RWxlbWVudFBvc2l0aW9uKHRhcmdldClcblxuICAgICAgICBsb2coXG4gICAgICAgICAgaWZyYW1lSWQsXG4gICAgICAgICAgJ01vdmluZyB0byBpbiBwYWdlIGxpbmsgKCMnICtcbiAgICAgICAgICAgIGhhc2ggK1xuICAgICAgICAgICAgJykgYXQgeDogJyArXG4gICAgICAgICAgICBqdW1wUG9zaXRpb24ueCArXG4gICAgICAgICAgICAnIHk6ICcgK1xuICAgICAgICAgICAganVtcFBvc2l0aW9uLnlcbiAgICAgICAgKVxuICAgICAgICBwYWdlUG9zaXRpb24gPSB7XG4gICAgICAgICAgeDoganVtcFBvc2l0aW9uLngsXG4gICAgICAgICAgeToganVtcFBvc2l0aW9uLnlcbiAgICAgICAgfVxuXG4gICAgICAgIHNjcm9sbFRvKClcbiAgICAgICAgbG9nKGlmcmFtZUlkLCAnLS0nKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBqdW1wVG9QYXJlbnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cucGFyZW50SUZyYW1lKSB7XG4gICAgICAgICAgd2luZG93LnBhcmVudElGcmFtZS5tb3ZlVG9BbmNob3IoaGFzaClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2coXG4gICAgICAgICAgICBpZnJhbWVJZCxcbiAgICAgICAgICAgICdJbiBwYWdlIGxpbmsgIycgK1xuICAgICAgICAgICAgICBoYXNoICtcbiAgICAgICAgICAgICAgJyBub3QgZm91bmQgYW5kIHdpbmRvdy5wYXJlbnRJRnJhbWUgbm90IGZvdW5kJ1xuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaGFzaCA9IGxvY2F0aW9uLnNwbGl0KCcjJylbMV0gfHwgJycsXG4gICAgICAgIGhhc2hEYXRhID0gZGVjb2RlVVJJQ29tcG9uZW50KGhhc2gpLFxuICAgICAgICB0YXJnZXQgPVxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2hEYXRhKSB8fFxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2hEYXRhKVswXVxuXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIGp1bXBUb1RhcmdldCgpXG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy50b3AgIT09IHdpbmRvdy5zZWxmKSB7XG4gICAgICAgIGp1bXBUb1BhcmVudCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2coaWZyYW1lSWQsICdJbiBwYWdlIGxpbmsgIycgKyBoYXNoICsgJyBub3QgZm91bmQnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW91c2UoZXZlbnQpIHtcbiAgICAgIHZhciBtb3VzZVBvcyA9IHt9XG5cbiAgICAgIGlmIChOdW1iZXIobWVzc2FnZURhdGEud2lkdGgpID09PSAwICYmIE51bWJlcihtZXNzYWdlRGF0YS5oZWlnaHQpID09PSAwKSB7XG4gICAgICAgIHZhciBkYXRhID0gZ2V0TXNnQm9keSg5KS5zcGxpdCgnOicpXG4gICAgICAgIG1vdXNlUG9zID0ge1xuICAgICAgICAgIHg6IGRhdGFbMV0sXG4gICAgICAgICAgeTogZGF0YVswXVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb3VzZVBvcyA9IHtcbiAgICAgICAgICB4OiBtZXNzYWdlRGF0YS53aWR0aCxcbiAgICAgICAgICB5OiBtZXNzYWdlRGF0YS5oZWlnaHRcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvbihldmVudCwge1xuICAgICAgICBpZnJhbWU6IG1lc3NhZ2VEYXRhLmlmcmFtZSxcbiAgICAgICAgc2NyZWVuWDogTnVtYmVyKG1vdXNlUG9zLngpLFxuICAgICAgICBzY3JlZW5ZOiBOdW1iZXIobW91c2VQb3MueSksXG4gICAgICAgIHR5cGU6IG1lc3NhZ2VEYXRhLnR5cGVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb24oZnVuY05hbWUsIHZhbCkge1xuICAgICAgcmV0dXJuIGNoa0V2ZW50KGlmcmFtZUlkLCBmdW5jTmFtZSwgdmFsKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGlvbk1zZygpIHtcbiAgICAgIGlmIChzZXR0aW5nc1tpZnJhbWVJZF0gJiYgc2V0dGluZ3NbaWZyYW1lSWRdLmZpcnN0UnVuKSBmaXJzdFJ1bigpXG5cbiAgICAgIHN3aXRjaCAobWVzc2FnZURhdGEudHlwZSkge1xuICAgICAgICBjYXNlICdjbG9zZSc6XG4gICAgICAgICAgY2xvc2VJRnJhbWUobWVzc2FnZURhdGEuaWZyYW1lKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbWVzc2FnZSc6XG4gICAgICAgICAgZm9yd2FyZE1zZ0Zyb21JRnJhbWUoZ2V0TXNnQm9keSg2KSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ21vdXNlZW50ZXInOlxuICAgICAgICAgIG9uTW91c2UoJ29uTW91c2VFbnRlcicpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdtb3VzZWxlYXZlJzpcbiAgICAgICAgICBvbk1vdXNlKCdvbk1vdXNlTGVhdmUnKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnYXV0b1Jlc2l6ZSc6XG4gICAgICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLmF1dG9SZXNpemUgPSBKU09OLnBhcnNlKGdldE1zZ0JvZHkoOSkpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdzY3JvbGxUbyc6XG4gICAgICAgICAgc2Nyb2xsUmVxdWVzdEZyb21DaGlsZChmYWxzZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ3Njcm9sbFRvT2Zmc2V0JzpcbiAgICAgICAgICBzY3JvbGxSZXF1ZXN0RnJvbUNoaWxkKHRydWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdwYWdlSW5mbyc6XG4gICAgICAgICAgc2VuZFBhZ2VJbmZvVG9JZnJhbWUoXG4gICAgICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF0gJiYgc2V0dGluZ3NbaWZyYW1lSWRdLmlmcmFtZSxcbiAgICAgICAgICAgIGlmcmFtZUlkXG4gICAgICAgICAgKVxuICAgICAgICAgIHN0YXJ0UGFnZUluZm9Nb25pdG9yKClcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ3BhZ2VJbmZvU3RvcCc6XG4gICAgICAgICAgc3RvcFBhZ2VJbmZvTW9uaXRvcigpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdpblBhZ2VMaW5rJzpcbiAgICAgICAgICBmaW5kVGFyZ2V0KGdldE1zZ0JvZHkoOSkpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdyZXNldCc6XG4gICAgICAgICAgcmVzZXRJRnJhbWUobWVzc2FnZURhdGEpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdpbml0JzpcbiAgICAgICAgICByZXNpemVJRnJhbWUoKVxuICAgICAgICAgIG9uKCdvbkluaXQnLCBtZXNzYWdlRGF0YS5pZnJhbWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIE51bWJlcihtZXNzYWdlRGF0YS53aWR0aCkgPT09IDAgJiZcbiAgICAgICAgICAgIE51bWJlcihtZXNzYWdlRGF0YS5oZWlnaHQpID09PSAwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgICAnVW5zdXBwb3J0ZWQgbWVzc2FnZSByZWNlaXZlZCAoJyArXG4gICAgICAgICAgICAgICAgbWVzc2FnZURhdGEudHlwZSArXG4gICAgICAgICAgICAgICAgJyksIHRoaXMgaXMgbGlrZWx5IGR1ZSB0byB0aGUgaWZyYW1lIGNvbnRhaW5pbmcgYSBsYXRlciAnICtcbiAgICAgICAgICAgICAgICAndmVyc2lvbiBvZiBpZnJhbWUtcmVzaXplciB0aGFuIHRoZSBwYXJlbnQgcGFnZSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzaXplSUZyYW1lKClcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzU2V0dGluZ3MoaWZyYW1lSWQpIHtcbiAgICAgIHZhciByZXRCb29sID0gdHJ1ZVxuXG4gICAgICBpZiAoIXNldHRpbmdzW2lmcmFtZUlkXSkge1xuICAgICAgICByZXRCb29sID0gZmFsc2VcbiAgICAgICAgd2FybihcbiAgICAgICAgICBtZXNzYWdlRGF0YS50eXBlICtcbiAgICAgICAgICAgICcgTm8gc2V0dGluZ3MgZm9yICcgK1xuICAgICAgICAgICAgaWZyYW1lSWQgK1xuICAgICAgICAgICAgJy4gTWVzc2FnZSB3YXM6ICcgK1xuICAgICAgICAgICAgbXNnXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldEJvb2xcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpRnJhbWVSZWFkeU1zZ1JlY2VpdmVkKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBndWFyZC1mb3ItaW5cbiAgICAgIGZvciAodmFyIGlmcmFtZUlkIGluIHNldHRpbmdzKSB7XG4gICAgICAgIHRyaWdnZXIoXG4gICAgICAgICAgJ2lGcmFtZSByZXF1ZXN0ZWQgaW5pdCcsXG4gICAgICAgICAgY3JlYXRlT3V0Z29pbmdNc2coaWZyYW1lSWQpLFxuICAgICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5pZnJhbWUsXG4gICAgICAgICAgaWZyYW1lSWRcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpcnN0UnVuKCkge1xuICAgICAgaWYgKHNldHRpbmdzW2lmcmFtZUlkXSkge1xuICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uZmlyc3RSdW4gPSBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtc2cgPSBldmVudC5kYXRhLFxuICAgICAgbWVzc2FnZURhdGEgPSB7fSxcbiAgICAgIGlmcmFtZUlkID0gbnVsbFxuXG4gICAgaWYgKCdbaUZyYW1lUmVzaXplckNoaWxkXVJlYWR5JyA9PT0gbXNnKSB7XG4gICAgICBpRnJhbWVSZWFkeU1zZ1JlY2VpdmVkKClcbiAgICB9IGVsc2UgaWYgKGlzTWVzc2FnZUZvclVzKCkpIHtcbiAgICAgIG1lc3NhZ2VEYXRhID0gcHJvY2Vzc01zZygpXG4gICAgICBpZnJhbWVJZCA9IG1lc3NhZ2VEYXRhLmlkXG4gICAgICBpZiAoc2V0dGluZ3NbaWZyYW1lSWRdKSB7XG4gICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5sb2FkZWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICghaXNNZXNzYWdlRnJvbU1ldGFQYXJlbnQoKSAmJiBoYXNTZXR0aW5ncyhpZnJhbWVJZCkpIHtcbiAgICAgICAgbG9nKGlmcmFtZUlkLCAnUmVjZWl2ZWQ6ICcgKyBtc2cpXG5cbiAgICAgICAgaWYgKGNoZWNrSUZyYW1lRXhpc3RzKCkgJiYgaXNNZXNzYWdlRnJvbUlGcmFtZSgpKSB7XG4gICAgICAgICAgYWN0aW9uTXNnKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvKGlmcmFtZUlkLCAnSWdub3JlZDogJyArIG1zZylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGtFdmVudChpZnJhbWVJZCwgZnVuY05hbWUsIHZhbCkge1xuICAgIHZhciBmdW5jID0gbnVsbCxcbiAgICAgIHJldFZhbCA9IG51bGxcblxuICAgIGlmIChzZXR0aW5nc1tpZnJhbWVJZF0pIHtcbiAgICAgIGZ1bmMgPSBzZXR0aW5nc1tpZnJhbWVJZF1bZnVuY05hbWVdXG5cbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZnVuYykge1xuICAgICAgICByZXRWYWwgPSBmdW5jKHZhbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgZnVuY05hbWUgKyAnIG9uIGlGcmFtZVsnICsgaWZyYW1lSWQgKyAnXSBpcyBub3QgYSBmdW5jdGlvbidcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXRWYWxcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUlmcmFtZUxpc3RlbmVycyhpZnJhbWUpIHtcbiAgICB2YXIgaWZyYW1lSWQgPSBpZnJhbWUuaWRcbiAgICBkZWxldGUgc2V0dGluZ3NbaWZyYW1lSWRdXG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZUlGcmFtZShpZnJhbWUpIHtcbiAgICB2YXIgaWZyYW1lSWQgPSBpZnJhbWUuaWRcbiAgICBpZiAoY2hrRXZlbnQoaWZyYW1lSWQsICdvbkNsb3NlJywgaWZyYW1lSWQpID09PSBmYWxzZSkge1xuICAgICAgbG9nKGlmcmFtZUlkLCAnQ2xvc2UgaWZyYW1lIGNhbmNlbGxlZCBieSBvbkNsb3NlIGV2ZW50JylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsb2coaWZyYW1lSWQsICdSZW1vdmluZyBpRnJhbWU6ICcgKyBpZnJhbWVJZClcblxuICAgIHRyeSB7XG4gICAgICAvLyBDYXRjaCByYWNlIGNvbmRpdGlvbiBlcnJvciB3aXRoIFJlYWN0XG4gICAgICBpZiAoaWZyYW1lLnBhcmVudE5vZGUpIHtcbiAgICAgICAgaWZyYW1lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaWZyYW1lKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB3YXJuKGVycm9yKVxuICAgIH1cblxuICAgIGNoa0V2ZW50KGlmcmFtZUlkLCAnb25DbG9zZWQnLCBpZnJhbWVJZClcbiAgICBsb2coaWZyYW1lSWQsICctLScpXG4gICAgcmVtb3ZlSWZyYW1lTGlzdGVuZXJzKGlmcmFtZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBhZ2VQb3NpdGlvbihpZnJhbWVJZCkge1xuICAgIGlmIChudWxsID09PSBwYWdlUG9zaXRpb24pIHtcbiAgICAgIHBhZ2VQb3NpdGlvbiA9IHtcbiAgICAgICAgeDpcbiAgICAgICAgICB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB3aW5kb3cucGFnZVhPZmZzZXRcbiAgICAgICAgICAgIDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICAgIHk6XG4gICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICAgIH1cbiAgICAgIGxvZyhcbiAgICAgICAgaWZyYW1lSWQsXG4gICAgICAgICdHZXQgcGFnZSBwb3NpdGlvbjogJyArIHBhZ2VQb3NpdGlvbi54ICsgJywnICsgcGFnZVBvc2l0aW9uLnlcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRQYWdlUG9zaXRpb24oaWZyYW1lSWQpIHtcbiAgICBpZiAobnVsbCAhPT0gcGFnZVBvc2l0aW9uKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8ocGFnZVBvc2l0aW9uLngsIHBhZ2VQb3NpdGlvbi55KVxuICAgICAgbG9nKFxuICAgICAgICBpZnJhbWVJZCxcbiAgICAgICAgJ1NldCBwYWdlIHBvc2l0aW9uOiAnICsgcGFnZVBvc2l0aW9uLnggKyAnLCcgKyBwYWdlUG9zaXRpb24ueVxuICAgICAgKVxuICAgICAgdW5zZXRQYWdlUG9zaXRpb24oKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVuc2V0UGFnZVBvc2l0aW9uKCkge1xuICAgIHBhZ2VQb3NpdGlvbiA9IG51bGxcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0SUZyYW1lKG1lc3NhZ2VEYXRhKSB7XG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICBzZXRTaXplKG1lc3NhZ2VEYXRhKVxuICAgICAgdHJpZ2dlcigncmVzZXQnLCAncmVzZXQnLCBtZXNzYWdlRGF0YS5pZnJhbWUsIG1lc3NhZ2VEYXRhLmlkKVxuICAgIH1cblxuICAgIGxvZyhcbiAgICAgIG1lc3NhZ2VEYXRhLmlkLFxuICAgICAgJ1NpemUgcmVzZXQgcmVxdWVzdGVkIGJ5ICcgK1xuICAgICAgICAoJ2luaXQnID09PSBtZXNzYWdlRGF0YS50eXBlID8gJ2hvc3QgcGFnZScgOiAnaUZyYW1lJylcbiAgICApXG4gICAgZ2V0UGFnZVBvc2l0aW9uKG1lc3NhZ2VEYXRhLmlkKVxuICAgIHN5bmNSZXNpemUocmVzZXQsIG1lc3NhZ2VEYXRhLCAncmVzZXQnKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0U2l6ZShtZXNzYWdlRGF0YSkge1xuICAgIGZ1bmN0aW9uIHNldERpbWVuc2lvbihkaW1lbnNpb24pIHtcbiAgICAgIGlmICghbWVzc2FnZURhdGEuaWQpIHtcbiAgICAgICAgbG9nKCd1bmRlZmluZWQnLCAnbWVzc2FnZURhdGEgaWQgbm90IHNldCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbWVzc2FnZURhdGEuaWZyYW1lLnN0eWxlW2RpbWVuc2lvbl0gPSBtZXNzYWdlRGF0YVtkaW1lbnNpb25dICsgJ3B4J1xuICAgICAgbG9nKFxuICAgICAgICBtZXNzYWdlRGF0YS5pZCxcbiAgICAgICAgJ0lGcmFtZSAoJyArXG4gICAgICAgICAgaWZyYW1lSWQgK1xuICAgICAgICAgICcpICcgK1xuICAgICAgICAgIGRpbWVuc2lvbiArXG4gICAgICAgICAgJyBzZXQgdG8gJyArXG4gICAgICAgICAgbWVzc2FnZURhdGFbZGltZW5zaW9uXSArXG4gICAgICAgICAgJ3B4J1xuICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoa1plcm8oZGltZW5zaW9uKSB7XG4gICAgICAvLyBGaXJlRm94IHNldHMgZGltZW5zaW9uIG9mIGhpZGRlbiBpRnJhbWVzIHRvIHplcm8uXG4gICAgICAvLyBTbyBpZiB3ZSBkZXRlY3QgdGhhdCBzZXQgdXAgYW4gZXZlbnQgdG8gY2hlY2sgZm9yXG4gICAgICAvLyB3aGVuIGlGcmFtZSBiZWNvbWVzIHZpc2libGUuXG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIC8vIE5vdCB0ZXN0YWJsZSBpbiBQaGFudG9tSlNcbiAgICAgIGlmICghaGlkZGVuQ2hlY2tFbmFibGVkICYmICcwJyA9PT0gbWVzc2FnZURhdGFbZGltZW5zaW9uXSkge1xuICAgICAgICBoaWRkZW5DaGVja0VuYWJsZWQgPSB0cnVlXG4gICAgICAgIGxvZyhpZnJhbWVJZCwgJ0hpZGRlbiBpRnJhbWUgZGV0ZWN0ZWQsIGNyZWF0aW5nIHZpc2liaWxpdHkgbGlzdGVuZXInKVxuICAgICAgICBmaXhIaWRkZW5JRnJhbWVzKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzRGltZW5zaW9uKGRpbWVuc2lvbikge1xuICAgICAgc2V0RGltZW5zaW9uKGRpbWVuc2lvbilcbiAgICAgIGNoa1plcm8oZGltZW5zaW9uKVxuICAgIH1cblxuICAgIHZhciBpZnJhbWVJZCA9IG1lc3NhZ2VEYXRhLmlmcmFtZS5pZFxuXG4gICAgaWYgKHNldHRpbmdzW2lmcmFtZUlkXSkge1xuICAgICAgaWYgKHNldHRpbmdzW2lmcmFtZUlkXS5zaXplSGVpZ2h0KSB7XG4gICAgICAgIHByb2Nlc3NEaW1lbnNpb24oJ2hlaWdodCcpXG4gICAgICB9XG4gICAgICBpZiAoc2V0dGluZ3NbaWZyYW1lSWRdLnNpemVXaWR0aCkge1xuICAgICAgICBwcm9jZXNzRGltZW5zaW9uKCd3aWR0aCcpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3luY1Jlc2l6ZShmdW5jLCBtZXNzYWdlRGF0YSwgZG9Ob3RTeW5jKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovIC8vIE5vdCB0ZXN0YWJsZSBpbiBQaGFudG9tSlNcbiAgICBpZiAoXG4gICAgICBkb05vdFN5bmMgIT09IG1lc3NhZ2VEYXRhLnR5cGUgJiZcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSAmJlxuICAgICAgLy8gaW5jbHVkaW5nIGNoZWNrIGZvciBqYXNtaW5lIGJlY2F1c2UgaGFkIHRyb3VibGUgZ2V0dGluZyBzcHkgdG8gd29yayBpbiB1bml0IHRlc3QgdXNpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAhd2luZG93Lmphc21pbmVcbiAgICApIHtcbiAgICAgIGxvZyhtZXNzYWdlRGF0YS5pZCwgJ1JlcXVlc3RpbmcgYW5pbWF0aW9uIGZyYW1lJylcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jKVxuICAgIH0gZWxzZSB7XG4gICAgICBmdW5jKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmlnZ2VyKGNhbGxlZU1zZywgbXNnLCBpZnJhbWUsIGlkLCBub1Jlc3BvbnNlV2FybmluZykge1xuICAgIGZ1bmN0aW9uIHBvc3RNZXNzYWdlVG9JRnJhbWUoKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gc2V0dGluZ3NbaWRdICYmIHNldHRpbmdzW2lkXS50YXJnZXRPcmlnaW5cbiAgICAgIGxvZyhcbiAgICAgICAgaWQsXG4gICAgICAgICdbJyArXG4gICAgICAgICAgY2FsbGVlTXNnICtcbiAgICAgICAgICAnXSBTZW5kaW5nIG1zZyB0byBpZnJhbWVbJyArXG4gICAgICAgICAgaWQgK1xuICAgICAgICAgICddICgnICtcbiAgICAgICAgICBtc2cgK1xuICAgICAgICAgICcpIHRhcmdldE9yaWdpbjogJyArXG4gICAgICAgICAgdGFyZ2V0XG4gICAgICApXG4gICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShtc2dJZCArIG1zZywgdGFyZ2V0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlGcmFtZU5vdEZvdW5kKCkge1xuICAgICAgd2FybihpZCwgJ1snICsgY2FsbGVlTXNnICsgJ10gSUZyYW1lKCcgKyBpZCArICcpIG5vdCBmb3VuZCcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hrQW5kU2VuZCgpIHtcbiAgICAgIGlmIChcbiAgICAgICAgaWZyYW1lICYmXG4gICAgICAgICdjb250ZW50V2luZG93JyBpbiBpZnJhbWUgJiZcbiAgICAgICAgbnVsbCAhPT0gaWZyYW1lLmNvbnRlbnRXaW5kb3dcbiAgICAgICkge1xuICAgICAgICAvLyBOdWxsIHRlc3QgZm9yIFBoYW50b21KU1xuICAgICAgICBwb3N0TWVzc2FnZVRvSUZyYW1lKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlGcmFtZU5vdEZvdW5kKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YXJuT25Ob1Jlc3BvbnNlKCkge1xuICAgICAgZnVuY3Rpb24gd2FybmluZygpIHtcbiAgICAgICAgaWYgKHNldHRpbmdzW2lkXSAmJiAhc2V0dGluZ3NbaWRdLmxvYWRlZCAmJiAhZXJyb3JTaG93bikge1xuICAgICAgICAgIGVycm9yU2hvd24gPSB0cnVlXG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgJ0lGcmFtZSBoYXMgbm90IHJlc3BvbmRlZCB3aXRoaW4gJyArXG4gICAgICAgICAgICAgIHNldHRpbmdzW2lkXS53YXJuaW5nVGltZW91dCAvIDEwMDAgK1xuICAgICAgICAgICAgICAnIHNlY29uZHMuIENoZWNrIGlGcmFtZVJlc2l6ZXIuY29udGVudFdpbmRvdy5qcyBoYXMgYmVlbiBsb2FkZWQgaW4gaUZyYW1lLiBUaGlzIG1lc3NhZ2UgY2FuIGJlIGlnbm9yZWQgaWYgZXZlcnl0aGluZyBpcyB3b3JraW5nLCBvciB5b3UgY2FuIHNldCB0aGUgd2FybmluZ1RpbWVvdXQgb3B0aW9uIHRvIGEgaGlnaGVyIHZhbHVlIG9yIHplcm8gdG8gc3VwcHJlc3MgdGhpcyB3YXJuaW5nLidcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAhIW5vUmVzcG9uc2VXYXJuaW5nICYmXG4gICAgICAgIHNldHRpbmdzW2lkXSAmJlxuICAgICAgICAhIXNldHRpbmdzW2lkXS53YXJuaW5nVGltZW91dFxuICAgICAgKSB7XG4gICAgICAgIHNldHRpbmdzW2lkXS5tc2dUaW1lb3V0ID0gc2V0VGltZW91dChcbiAgICAgICAgICB3YXJuaW5nLFxuICAgICAgICAgIHNldHRpbmdzW2lkXS53YXJuaW5nVGltZW91dFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGVycm9yU2hvd24gPSBmYWxzZVxuXG4gICAgaWQgPSBpZCB8fCBpZnJhbWUuaWRcblxuICAgIGlmIChzZXR0aW5nc1tpZF0pIHtcbiAgICAgIGNoa0FuZFNlbmQoKVxuICAgICAgd2Fybk9uTm9SZXNwb25zZSgpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT3V0Z29pbmdNc2coaWZyYW1lSWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgaWZyYW1lSWQgK1xuICAgICAgJzonICtcbiAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5ib2R5TWFyZ2luVjEgK1xuICAgICAgJzonICtcbiAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5zaXplV2lkdGggK1xuICAgICAgJzonICtcbiAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5sb2cgK1xuICAgICAgJzonICtcbiAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5pbnRlcnZhbCArXG4gICAgICAnOicgK1xuICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLmVuYWJsZVB1YmxpY01ldGhvZHMgK1xuICAgICAgJzonICtcbiAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5hdXRvUmVzaXplICtcbiAgICAgICc6JyArXG4gICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uYm9keU1hcmdpbiArXG4gICAgICAnOicgK1xuICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLmhlaWdodENhbGN1bGF0aW9uTWV0aG9kICtcbiAgICAgICc6JyArXG4gICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uYm9keUJhY2tncm91bmQgK1xuICAgICAgJzonICtcbiAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5ib2R5UGFkZGluZyArXG4gICAgICAnOicgK1xuICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLnRvbGVyYW5jZSArXG4gICAgICAnOicgK1xuICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLmluUGFnZUxpbmtzICtcbiAgICAgICc6JyArXG4gICAgICBzZXR0aW5nc1tpZnJhbWVJZF0ucmVzaXplRnJvbSArXG4gICAgICAnOicgK1xuICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLndpZHRoQ2FsY3VsYXRpb25NZXRob2QgK1xuICAgICAgJzonICtcbiAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5tb3VzZUV2ZW50c1xuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwSUZyYW1lKGlmcmFtZSwgb3B0aW9ucykge1xuICAgIGZ1bmN0aW9uIHNldExpbWl0cygpIHtcbiAgICAgIGZ1bmN0aW9uIGFkZFN0eWxlKHN0eWxlKSB7XG4gICAgICAgIHZhciBzdHlsZVZhbHVlID0gc2V0dGluZ3NbaWZyYW1lSWRdW3N0eWxlXVxuICAgICAgICBpZiAoSW5maW5pdHkgIT09IHN0eWxlVmFsdWUgJiYgMCAhPT0gc3R5bGVWYWx1ZSkge1xuICAgICAgICAgIGlmcmFtZS5zdHlsZVtzdHlsZV0gPSBpc051bWJlcihzdHlsZVZhbHVlKVxuICAgICAgICAgICAgPyBzdHlsZVZhbHVlICsgJ3B4J1xuICAgICAgICAgICAgOiBzdHlsZVZhbHVlXG4gICAgICAgICAgbG9nKGlmcmFtZUlkLCAnU2V0ICcgKyBzdHlsZSArICcgPSAnICsgaWZyYW1lLnN0eWxlW3N0eWxlXSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjaGtNaW5NYXgoZGltZW5zaW9uKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF1bJ21pbicgKyBkaW1lbnNpb25dID5cbiAgICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF1bJ21heCcgKyBkaW1lbnNpb25dXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdWYWx1ZSBmb3IgbWluJyArXG4gICAgICAgICAgICAgIGRpbWVuc2lvbiArXG4gICAgICAgICAgICAgICcgY2FuIG5vdCBiZSBncmVhdGVyIHRoYW4gbWF4JyArXG4gICAgICAgICAgICAgIGRpbWVuc2lvblxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaGtNaW5NYXgoJ0hlaWdodCcpXG4gICAgICBjaGtNaW5NYXgoJ1dpZHRoJylcblxuICAgICAgYWRkU3R5bGUoJ21heEhlaWdodCcpXG4gICAgICBhZGRTdHlsZSgnbWluSGVpZ2h0JylcbiAgICAgIGFkZFN0eWxlKCdtYXhXaWR0aCcpXG4gICAgICBhZGRTdHlsZSgnbWluV2lkdGgnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0lkKCkge1xuICAgICAgdmFyIGlkID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5pZCkgfHwgZGVmYXVsdHMuaWQgKyBjb3VudCsrXG4gICAgICBpZiAobnVsbCAhPT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XG4gICAgICAgIGlkICs9IGNvdW50KytcbiAgICAgIH1cbiAgICAgIHJldHVybiBpZFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuc3VyZUhhc0lkKGlmcmFtZUlkKSB7XG4gICAgICBpZiAoJycgPT09IGlmcmFtZUlkKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tdWx0aS1hc3NpZ25cbiAgICAgICAgaWZyYW1lLmlkID0gaWZyYW1lSWQgPSBuZXdJZCgpXG4gICAgICAgIGxvZ0VuYWJsZWQgPSAob3B0aW9ucyB8fCB7fSkubG9nXG4gICAgICAgIGxvZyhcbiAgICAgICAgICBpZnJhbWVJZCxcbiAgICAgICAgICAnQWRkZWQgbWlzc2luZyBpZnJhbWUgSUQ6ICcgKyBpZnJhbWVJZCArICcgKCcgKyBpZnJhbWUuc3JjICsgJyknXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlmcmFtZUlkXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U2Nyb2xsaW5nKCkge1xuICAgICAgbG9nKFxuICAgICAgICBpZnJhbWVJZCxcbiAgICAgICAgJ0lGcmFtZSBzY3JvbGxpbmcgJyArXG4gICAgICAgICAgKHNldHRpbmdzW2lmcmFtZUlkXSAmJiBzZXR0aW5nc1tpZnJhbWVJZF0uc2Nyb2xsaW5nXG4gICAgICAgICAgICA/ICdlbmFibGVkJ1xuICAgICAgICAgICAgOiAnZGlzYWJsZWQnKSArXG4gICAgICAgICAgJyBmb3IgJyArXG4gICAgICAgICAgaWZyYW1lSWRcbiAgICAgIClcbiAgICAgIGlmcmFtZS5zdHlsZS5vdmVyZmxvdyA9XG4gICAgICAgIGZhbHNlID09PSAoc2V0dGluZ3NbaWZyYW1lSWRdICYmIHNldHRpbmdzW2lmcmFtZUlkXS5zY3JvbGxpbmcpXG4gICAgICAgICAgPyAnaGlkZGVuJ1xuICAgICAgICAgIDogJ2F1dG8nXG4gICAgICBzd2l0Y2ggKHNldHRpbmdzW2lmcmFtZUlkXSAmJiBzZXR0aW5nc1tpZnJhbWVJZF0uc2Nyb2xsaW5nKSB7XG4gICAgICAgIGNhc2UgJ29taXQnOlxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgIGlmcmFtZS5zY3JvbGxpbmcgPSAneWVzJ1xuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICBpZnJhbWUuc2Nyb2xsaW5nID0gJ25vJ1xuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZnJhbWUuc2Nyb2xsaW5nID0gc2V0dGluZ3NbaWZyYW1lSWRdXG4gICAgICAgICAgICA/IHNldHRpbmdzW2lmcmFtZUlkXS5zY3JvbGxpbmdcbiAgICAgICAgICAgIDogJ25vJ1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZSBWMSBpRnJhbWUgc2NyaXB0IGV4cGVjdHMgYW4gaW50LCB3aGVyZSBhcyBpbiBWMiBleHBlY3RzIGEgQ1NTXG4gICAgLy8gc3RyaW5nIHZhbHVlIHN1Y2ggYXMgJzFweCAzZW0nLCBzbyBpZiB3ZSBoYXZlIGFuIGludCBmb3IgVjIsIHNldCBWMT1WMlxuICAgIC8vIGFuZCB0aGVuIGNvbnZlcnQgVjIgdG8gYSBzdHJpbmcgUFggdmFsdWUuXG4gICAgZnVuY3Rpb24gc2V0dXBCb2R5TWFyZ2luVmFsdWVzKCkge1xuICAgICAgaWYgKFxuICAgICAgICAnbnVtYmVyJyA9PT1cbiAgICAgICAgICB0eXBlb2YgKHNldHRpbmdzW2lmcmFtZUlkXSAmJiBzZXR0aW5nc1tpZnJhbWVJZF0uYm9keU1hcmdpbikgfHxcbiAgICAgICAgJzAnID09PSAoc2V0dGluZ3NbaWZyYW1lSWRdICYmIHNldHRpbmdzW2lmcmFtZUlkXS5ib2R5TWFyZ2luKVxuICAgICAgKSB7XG4gICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5ib2R5TWFyZ2luVjEgPSBzZXR0aW5nc1tpZnJhbWVJZF0uYm9keU1hcmdpblxuICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uYm9keU1hcmdpbiA9XG4gICAgICAgICAgJycgKyBzZXR0aW5nc1tpZnJhbWVJZF0uYm9keU1hcmdpbiArICdweCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1Jlc2V0KCkge1xuICAgICAgLy8gUmVkdWNlIHNjb3BlIG9mIGZpcnN0UnVuIHRvIGZ1bmN0aW9uLCBiZWNhdXNlIElFOCdzIEpTIGV4ZWN1dGlvblxuICAgICAgLy8gY29udGV4dCBzdGFjayBpcyBib3JrZWQgYW5kIHRoaXMgdmFsdWUgZ2V0cyBleHRlcm5hbGx5XG4gICAgICAvLyBjaGFuZ2VkIG1pZHdheSB0aHJvdWdoIHJ1bm5pbmcgdGhpcyBmdW5jdGlvbiEhIVxuICAgICAgdmFyIGZpcnN0UnVuID0gc2V0dGluZ3NbaWZyYW1lSWRdICYmIHNldHRpbmdzW2lmcmFtZUlkXS5maXJzdFJ1bixcbiAgICAgICAgcmVzZXRSZXF1ZXJ0TWV0aG9kID1cbiAgICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF0gJiZcbiAgICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uaGVpZ2h0Q2FsY3VsYXRpb25NZXRob2QgaW4gcmVzZXRSZXF1aXJlZE1ldGhvZHNcblxuICAgICAgaWYgKCFmaXJzdFJ1biAmJiByZXNldFJlcXVlcnRNZXRob2QpIHtcbiAgICAgICAgcmVzZXRJRnJhbWUoeyBpZnJhbWU6IGlmcmFtZSwgaGVpZ2h0OiAwLCB3aWR0aDogMCwgdHlwZTogJ2luaXQnIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXBJRnJhbWVPYmplY3QoKSB7XG4gICAgICBpZiAoc2V0dGluZ3NbaWZyYW1lSWRdKSB7XG4gICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5pZnJhbWUuaUZyYW1lUmVzaXplciA9IHtcbiAgICAgICAgICBjbG9zZTogY2xvc2VJRnJhbWUuYmluZChudWxsLCBzZXR0aW5nc1tpZnJhbWVJZF0uaWZyYW1lKSxcblxuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyczogcmVtb3ZlSWZyYW1lTGlzdGVuZXJzLmJpbmQoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLmlmcmFtZVxuICAgICAgICAgICksXG5cbiAgICAgICAgICByZXNpemU6IHRyaWdnZXIuYmluZChcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAnV2luZG93IHJlc2l6ZScsXG4gICAgICAgICAgICAncmVzaXplJyxcbiAgICAgICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5pZnJhbWVcbiAgICAgICAgICApLFxuXG4gICAgICAgICAgbW92ZVRvQW5jaG9yOiBmdW5jdGlvbiAoYW5jaG9yKSB7XG4gICAgICAgICAgICB0cmlnZ2VyKFxuICAgICAgICAgICAgICAnTW92ZSB0byBhbmNob3InLFxuICAgICAgICAgICAgICAnbW92ZVRvQW5jaG9yOicgKyBhbmNob3IsXG4gICAgICAgICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5pZnJhbWUsXG4gICAgICAgICAgICAgIGlmcmFtZUlkXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHNlbmRNZXNzYWdlOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpXG4gICAgICAgICAgICB0cmlnZ2VyKFxuICAgICAgICAgICAgICAnU2VuZCBNZXNzYWdlJyxcbiAgICAgICAgICAgICAgJ21lc3NhZ2U6JyArIG1lc3NhZ2UsXG4gICAgICAgICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5pZnJhbWUsXG4gICAgICAgICAgICAgIGlmcmFtZUlkXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2UgaGF2ZSB0byBjYWxsIHRyaWdnZXIgdHdpY2UsIGFzIHdlIGNhbiBub3QgYmUgc3VyZSBpZiBhbGxcbiAgICAvLyBpZnJhbWVzIGhhdmUgY29tcGxldGVkIGxvYWRpbmcgd2hlbiB0aGlzIGNvZGUgcnVucy4gVGhlXG4gICAgLy8gZXZlbnQgbGlzdGVuZXIgYWxzbyBjYXRjaGVzIHRoZSBwYWdlIGNoYW5naW5nIGluIHRoZSBpRnJhbWUuXG4gICAgZnVuY3Rpb24gaW5pdChtc2cpIHtcbiAgICAgIGZ1bmN0aW9uIGlGcmFtZUxvYWRlZCgpIHtcbiAgICAgICAgdHJpZ2dlcignaUZyYW1lLm9ubG9hZCcsIG1zZywgaWZyYW1lLCB1bmRlZmluZWQsIHRydWUpXG4gICAgICAgIGNoZWNrUmVzZXQoKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjcmVhdGVEZXN0cm95T2JzZXJ2ZXIoTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICBpZiAoIWlmcmFtZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVzdHJveU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgICAgICAgICAgdmFyIHJlbW92ZWROb2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG11dGF0aW9uLnJlbW92ZWROb2RlcykgLy8gVHJhbnNmb3JtIE5vZGVMaXN0IGludG8gYW4gQXJyYXlcbiAgICAgICAgICAgIHJlbW92ZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZW1vdmVkTm9kZSkge1xuICAgICAgICAgICAgICBpZiAocmVtb3ZlZE5vZGUgPT09IGlmcmFtZSkge1xuICAgICAgICAgICAgICAgIGNsb3NlSUZyYW1lKGlmcmFtZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBkZXN0cm95T2JzZXJ2ZXIub2JzZXJ2ZShpZnJhbWUucGFyZW50Tm9kZSwge1xuICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICB2YXIgTXV0YXRpb25PYnNlcnZlciA9IGdldE11dGF0aW9uT2JzZXJ2ZXIoKVxuICAgICAgaWYgKE11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgY3JlYXRlRGVzdHJveU9ic2VydmVyKE11dGF0aW9uT2JzZXJ2ZXIpXG4gICAgICB9XG5cbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIoaWZyYW1lLCAnbG9hZCcsIGlGcmFtZUxvYWRlZClcbiAgICAgIHRyaWdnZXIoJ2luaXQnLCBtc2csIGlmcmFtZSwgdW5kZWZpbmVkLCB0cnVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICBpZiAoJ29iamVjdCcgIT09IHR5cGVvZiBvcHRpb25zKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09wdGlvbnMgaXMgbm90IGFuIG9iamVjdCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29weU9wdGlvbnMob3B0aW9ucykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICBmb3IgKHZhciBvcHRpb24gaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZWZhdWx0cywgb3B0aW9uKSkge1xuICAgICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXVtvcHRpb25dID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvblxuICAgICAgICAgIClcbiAgICAgICAgICAgID8gb3B0aW9uc1tvcHRpb25dXG4gICAgICAgICAgICA6IGRlZmF1bHRzW29wdGlvbl1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRhcmdldE9yaWdpbihyZW1vdGVIb3N0KSB7XG4gICAgICByZXR1cm4gJycgPT09IHJlbW90ZUhvc3QgfHxcbiAgICAgICAgbnVsbCAhPT0gcmVtb3RlSG9zdC5tYXRjaCgvXihhYm91dDpibGFua3xqYXZhc2NyaXB0OnxmaWxlOlxcL1xcLykvKVxuICAgICAgICA/ICcqJ1xuICAgICAgICA6IHJlbW90ZUhvc3RcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXByaWNhdGUoa2V5KSB7XG4gICAgICB2YXIgc3BsaXROYW1lID0ga2V5LnNwbGl0KCdDYWxsYmFjaycpXG5cbiAgICAgIGlmIChzcGxpdE5hbWUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHZhciBuYW1lID1cbiAgICAgICAgICAnb24nICsgc3BsaXROYW1lWzBdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3BsaXROYW1lWzBdLnNsaWNlKDEpXG4gICAgICAgIHRoaXNbbmFtZV0gPSB0aGlzW2tleV1cbiAgICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgICAgICB3YXJuKFxuICAgICAgICAgIGlmcmFtZUlkLFxuICAgICAgICAgIFwiRGVwcmVjYXRlZDogJ1wiICtcbiAgICAgICAgICAgIGtleSArXG4gICAgICAgICAgICBcIicgaGFzIGJlZW4gcmVuYW1lZCAnXCIgK1xuICAgICAgICAgICAgbmFtZSArXG4gICAgICAgICAgICBcIicuIFRoZSBvbGQgbWV0aG9kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uLlwiXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdID0ge1xuICAgICAgICBmaXJzdFJ1bjogdHJ1ZSxcbiAgICAgICAgaWZyYW1lOiBpZnJhbWUsXG4gICAgICAgIHJlbW90ZUhvc3Q6IGlmcmFtZS5zcmMgJiYgaWZyYW1lLnNyYy5zcGxpdCgnLycpLnNsaWNlKDAsIDMpLmpvaW4oJy8nKVxuICAgICAgfVxuXG4gICAgICBjaGVja09wdGlvbnMob3B0aW9ucylcbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goZGVwcmljYXRlLCBvcHRpb25zKVxuICAgICAgY29weU9wdGlvbnMob3B0aW9ucylcblxuICAgICAgaWYgKHNldHRpbmdzW2lmcmFtZUlkXSkge1xuICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF0udGFyZ2V0T3JpZ2luID1cbiAgICAgICAgICB0cnVlID09PSBzZXR0aW5nc1tpZnJhbWVJZF0uY2hlY2tPcmlnaW5cbiAgICAgICAgICAgID8gZ2V0VGFyZ2V0T3JpZ2luKHNldHRpbmdzW2lmcmFtZUlkXS5yZW1vdGVIb3N0KVxuICAgICAgICAgICAgOiAnKidcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiZWVuSGVyZSgpIHtcbiAgICAgIHJldHVybiBpZnJhbWVJZCBpbiBzZXR0aW5ncyAmJiAnaUZyYW1lUmVzaXplcicgaW4gaWZyYW1lXG4gICAgfVxuXG4gICAgdmFyIGlmcmFtZUlkID0gZW5zdXJlSGFzSWQoaWZyYW1lLmlkKVxuXG4gICAgaWYgKCFiZWVuSGVyZSgpKSB7XG4gICAgICBwcm9jZXNzT3B0aW9ucyhvcHRpb25zKVxuICAgICAgc2V0U2Nyb2xsaW5nKClcbiAgICAgIHNldExpbWl0cygpXG4gICAgICBzZXR1cEJvZHlNYXJnaW5WYWx1ZXMoKVxuICAgICAgaW5pdChjcmVhdGVPdXRnb2luZ01zZyhpZnJhbWVJZCkpXG4gICAgICBzZXR1cElGcmFtZU9iamVjdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oaWZyYW1lSWQsICdJZ25vcmVkIGlGcmFtZSwgYWxyZWFkeSBzZXR1cC4nKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91Y2UoZm4sIHRpbWUpIHtcbiAgICBpZiAobnVsbCA9PT0gdGltZXIpIHtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbWVyID0gbnVsbFxuICAgICAgICBmbigpXG4gICAgICB9LCB0aW1lKVxuICAgIH1cbiAgfVxuXG4gIHZhciBmcmFtZVRpbWVyID0ge31cbiAgZnVuY3Rpb24gZGVib3VuY2VGcmFtZUV2ZW50cyhmbiwgdGltZSwgZnJhbWVJZCkge1xuICAgIGlmICghZnJhbWVUaW1lcltmcmFtZUlkXSkge1xuICAgICAgZnJhbWVUaW1lcltmcmFtZUlkXSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmcmFtZVRpbWVyW2ZyYW1lSWRdID0gbnVsbFxuICAgICAgICBmbigpXG4gICAgICB9LCB0aW1lKVxuICAgIH1cbiAgfVxuXG4gIC8vIE5vdCB0ZXN0YWJsZSBpbiBQaGFudG9tSlNcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuICBmdW5jdGlvbiBmaXhIaWRkZW5JRnJhbWVzKCkge1xuICAgIGZ1bmN0aW9uIGNoZWNrSUZyYW1lcygpIHtcbiAgICAgIGZ1bmN0aW9uIGNoZWNrSUZyYW1lKHNldHRpbmdJZCkge1xuICAgICAgICBmdW5jdGlvbiBjaGtEaW1lbnNpb24oZGltZW5zaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICcwcHgnID09PVxuICAgICAgICAgICAgKHNldHRpbmdzW3NldHRpbmdJZF0gJiYgc2V0dGluZ3Nbc2V0dGluZ0lkXS5pZnJhbWUuc3R5bGVbZGltZW5zaW9uXSlcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpc1Zpc2libGUoZWwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbCAhPT0gZWwub2Zmc2V0UGFyZW50XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgc2V0dGluZ3Nbc2V0dGluZ0lkXSAmJlxuICAgICAgICAgIGlzVmlzaWJsZShzZXR0aW5nc1tzZXR0aW5nSWRdLmlmcmFtZSkgJiZcbiAgICAgICAgICAoY2hrRGltZW5zaW9uKCdoZWlnaHQnKSB8fCBjaGtEaW1lbnNpb24oJ3dpZHRoJykpXG4gICAgICAgICkge1xuICAgICAgICAgIHRyaWdnZXIoXG4gICAgICAgICAgICAnVmlzaWJpbGl0eSBjaGFuZ2UnLFxuICAgICAgICAgICAgJ3Jlc2l6ZScsXG4gICAgICAgICAgICBzZXR0aW5nc1tzZXR0aW5nSWRdLmlmcmFtZSxcbiAgICAgICAgICAgIHNldHRpbmdJZFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhzZXR0aW5ncykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGNoZWNrSUZyYW1lKGtleSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbXV0YXRpb25PYnNlcnZlZChtdXRhdGlvbnMpIHtcbiAgICAgIGxvZyhcbiAgICAgICAgJ3dpbmRvdycsXG4gICAgICAgICdNdXRhdGlvbiBvYnNlcnZlZDogJyArIG11dGF0aW9uc1swXS50YXJnZXQgKyAnICcgKyBtdXRhdGlvbnNbMF0udHlwZVxuICAgICAgKVxuICAgICAgZGVib3VjZShjaGVja0lGcmFtZXMsIDE2KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU11dGF0aW9uT2JzZXJ2ZXIoKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICAgICAgICBjaGFyYWN0ZXJEYXRhT2xkVmFsdWU6IGZhbHNlLFxuICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25PYnNlcnZlZClcblxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIGNvbmZpZylcbiAgICB9XG5cbiAgICB2YXIgTXV0YXRpb25PYnNlcnZlciA9IGdldE11dGF0aW9uT2JzZXJ2ZXIoKVxuICAgIGlmIChNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICBjcmVhdGVNdXRhdGlvbk9ic2VydmVyKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNpemVJRnJhbWVzKGV2ZW50KSB7XG4gICAgZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgc2VuZFRyaWdnZXJNc2coJ1dpbmRvdyAnICsgZXZlbnQsICdyZXNpemUnKVxuICAgIH1cblxuICAgIGxvZygnd2luZG93JywgJ1RyaWdnZXIgZXZlbnQ6ICcgKyBldmVudClcbiAgICBkZWJvdWNlKHJlc2l6ZSwgMTYpXG4gIH1cblxuICAvLyBOb3QgdGVzdGFibGUgaW4gUGhhbnRvbUpTXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGZ1bmN0aW9uIHRhYlZpc2libGUoKSB7XG4gICAgZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgc2VuZFRyaWdnZXJNc2coJ1RhYiBWaXNhYmxlJywgJ3Jlc2l6ZScpXG4gICAgfVxuXG4gICAgaWYgKCdoaWRkZW4nICE9PSBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUpIHtcbiAgICAgIGxvZygnZG9jdW1lbnQnLCAnVHJpZ2dlciBldmVudDogVmlzaWJsaXR5IGNoYW5nZScpXG4gICAgICBkZWJvdWNlKHJlc2l6ZSwgMTYpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2VuZFRyaWdnZXJNc2coZXZlbnROYW1lLCBldmVudCkge1xuICAgIGZ1bmN0aW9uIGlzSUZyYW1lUmVzaXplRW5hYmxlZChpZnJhbWVJZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdICYmXG4gICAgICAgICdwYXJlbnQnID09PSBzZXR0aW5nc1tpZnJhbWVJZF0ucmVzaXplRnJvbSAmJlxuICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uYXV0b1Jlc2l6ZSAmJlxuICAgICAgICAhc2V0dGluZ3NbaWZyYW1lSWRdLmZpcnN0UnVuXG4gICAgICApXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoc2V0dGluZ3MpLmZvckVhY2goZnVuY3Rpb24gKGlmcmFtZUlkKSB7XG4gICAgICBpZiAoaXNJRnJhbWVSZXNpemVFbmFibGVkKGlmcmFtZUlkKSkge1xuICAgICAgICB0cmlnZ2VyKGV2ZW50TmFtZSwgZXZlbnQsIHNldHRpbmdzW2lmcmFtZUlkXS5pZnJhbWUsIGlmcmFtZUlkKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnbWVzc2FnZScsIGlGcmFtZUxpc3RlbmVyKVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXNpemVJRnJhbWVzKCdyZXNpemUnKVxuICAgIH0pXG5cbiAgICBhZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCAndmlzaWJpbGl0eWNoYW5nZScsIHRhYlZpc2libGUpXG5cbiAgICBhZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCAnLXdlYmtpdC12aXNpYmlsaXR5Y2hhbmdlJywgdGFiVmlzaWJsZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGZhY3RvcnkoKSB7XG4gICAgZnVuY3Rpb24gaW5pdChvcHRpb25zLCBlbGVtZW50KSB7XG4gICAgICBmdW5jdGlvbiBjaGtUeXBlKCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQudGFnTmFtZSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdCBpcyBub3QgYSB2YWxpZCBET00gZWxlbWVudCcpXG4gICAgICAgIH0gZWxzZSBpZiAoJ0lGUkFNRScgIT09IGVsZW1lbnQudGFnTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICdFeHBlY3RlZCA8SUZSQU1FPiB0YWcsIGZvdW5kIDwnICsgZWxlbWVudC50YWdOYW1lICsgJz4nXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGNoa1R5cGUoKVxuICAgICAgICBzZXR1cElGcmFtZShlbGVtZW50LCBvcHRpb25zKVxuICAgICAgICBpRnJhbWVzLnB1c2goZWxlbWVudClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YXJuRGVwcmVjYXRlZE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lbmFibGVQdWJsaWNNZXRob2RzKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ2VuYWJsZVB1YmxpY01ldGhvZHMgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQsIHB1YmxpYyBtZXRob2RzIGFyZSBub3cgYWx3YXlzIGF2YWlsYWJsZSBpbiB0aGUgaUZyYW1lJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGlGcmFtZXNcblxuICAgIHNldHVwUmVxdWVzdEFuaW1hdGlvbkZyYW1lKClcbiAgICBzZXR1cEV2ZW50TGlzdGVuZXJzKClcblxuICAgIHJldHVybiBmdW5jdGlvbiBpRnJhbWVSZXNpemVGKG9wdGlvbnMsIHRhcmdldCkge1xuICAgICAgaUZyYW1lcyA9IFtdIC8vIE9ubHkgcmV0dXJuIGlGcmFtZXMgcGFzdCBpbiBvbiB0aGlzIGNhbGxcblxuICAgICAgd2FybkRlcHJlY2F0ZWRPcHRpb25zKG9wdGlvbnMpXG5cbiAgICAgIHN3aXRjaCAodHlwZW9mIHRhcmdldCkge1xuICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldCB8fCAnaWZyYW1lJyksXG4gICAgICAgICAgICBpbml0LmJpbmQodW5kZWZpbmVkLCBvcHRpb25zKVxuICAgICAgICAgIClcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgaW5pdChvcHRpb25zLCB0YXJnZXQpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1VuZXhwZWN0ZWQgZGF0YSB0eXBlICgnICsgdHlwZW9mIHRhcmdldCArICcpJylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlGcmFtZXNcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVKUXVlcnlQdWJsaWNNZXRob2QoJCkge1xuICAgIGlmICghJC5mbikge1xuICAgICAgaW5mbygnJywgJ1VuYWJsZSB0byBiaW5kIHRvIGpRdWVyeSwgaXQgaXMgbm90IGZ1bGx5IGxvYWRlZC4nKVxuICAgIH0gZWxzZSBpZiAoISQuZm4uaUZyYW1lUmVzaXplKSB7XG4gICAgICAkLmZuLmlGcmFtZVJlc2l6ZSA9IGZ1bmN0aW9uICRpRnJhbWVSZXNpemVGKG9wdGlvbnMpIHtcbiAgICAgICAgZnVuY3Rpb24gaW5pdChpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgIHNldHVwSUZyYW1lKGVsZW1lbnQsIG9wdGlvbnMpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXIoJ2lmcmFtZScpLmVhY2goaW5pdCkuZW5kKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAod2luZG93LmpRdWVyeSkge1xuICAgIGNyZWF0ZUpRdWVyeVB1YmxpY01ldGhvZCh3aW5kb3cualF1ZXJ5KVxuICB9XG5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXSwgZmFjdG9yeSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gTm9kZSBmb3IgYnJvd3NlcmZ5XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KClcbiAgfVxuICB3aW5kb3cuaUZyYW1lUmVzaXplID0gd2luZG93LmlGcmFtZVJlc2l6ZSB8fCBmYWN0b3J5KClcbn0pKClcbiIsInZhciBpZnJhbWVSZXNpemUgPSByZXF1aXJlKCcuL2lmcmFtZVJlc2l6ZXInKVxuXG5leHBvcnRzLmlmcmFtZVJlc2l6ZSA9IGlmcmFtZVJlc2l6ZVxuZXhwb3J0cy5pZnJhbWVSZXNpemVyID0gaWZyYW1lUmVzaXplIC8vIEJhY2t3YXJkcyBjb21wYXRhYmlsaXR5XG5leHBvcnRzLmlmcmFtZVJlc2l6ZXJDb250ZW50V2luZG93ID0gcmVxdWlyZSgnLi9pZnJhbWVSZXNpemVyLmNvbnRlbnRXaW5kb3cnKVxuIiwiLy8gcmVxdWlyZSgnLi9jb21tb24nKVxyXG5cclxucmVxdWlyZSgnaWZyYW1lLXJlc2l6ZXInKTtcclxucmVxdWlyZSgnLi4vaGVscC90ZXN0aW1vbmlhbHMnKS5pbml0KCk7IC8vVGVzdGltb25pYWxzXHJcbnJlcXVpcmUoJy4uL2hlbHAvZmFxcycpLmluaXQoKTsgLy9mb3IgaGVscCBmYXFzIHBhZ2VcclxucmVxdWlyZSgnLi4vaGVscC9zaGlwcGluZ19pbmZvJykuaW5pdCgpO1xyXG5yZXF1aXJlKCcuLi9oZWxwL3BheW1lbnRfbWV0aG9kcycpLmluaXQoKTtcclxucmVxdWlyZSgnLi4vaGVscC9zaXplX2NoYXJ0JykuaW5pdCgpOyJdfQ==

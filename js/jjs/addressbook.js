require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){

var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

//loading
var loadingSelector = '.pop-loading';
function open() {
    if($(loadingSelector).length < 1) {
        $('body').append('<div class="pop-loading"></div>')
    }
    var loading = $(loadingSelector);

    var cw = $(window).width();
    var ch = $(window).height();
    var ldw = loading.width();
    var ldh = loading.height();
    loading.css({'left': cw / 2 - ldw / 2, 'top': ch / 2 - ldh / 2 + $(document).scrollTop()}).show();
}
function close() {
    $(loadingSelector).hide();
}

module.exports = {
    "open": open,
    "close": close
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvY2hlY2tvdXQvbG9hZGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG5cclxuLy9sb2FkaW5nXHJcbnZhciBsb2FkaW5nU2VsZWN0b3IgPSAnLnBvcC1sb2FkaW5nJztcclxuZnVuY3Rpb24gb3BlbigpIHtcclxuICAgIGlmKCQobG9hZGluZ1NlbGVjdG9yKS5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInBvcC1sb2FkaW5nXCI+PC9kaXY+JylcclxuICAgIH1cclxuICAgIHZhciBsb2FkaW5nID0gJChsb2FkaW5nU2VsZWN0b3IpO1xyXG5cclxuICAgIHZhciBjdyA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgdmFyIGNoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgdmFyIGxkdyA9IGxvYWRpbmcud2lkdGgoKTtcclxuICAgIHZhciBsZGggPSBsb2FkaW5nLmhlaWdodCgpO1xyXG4gICAgbG9hZGluZy5jc3MoeydsZWZ0JzogY3cgLyAyIC0gbGR3IC8gMiwgJ3RvcCc6IGNoIC8gMiAtIGxkaCAvIDIgKyAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKX0pLnNob3coKTtcclxufVxyXG5mdW5jdGlvbiBjbG9zZSgpIHtcclxuICAgICQobG9hZGluZ1NlbGVjdG9yKS5oaWRlKCk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgXCJvcGVuXCI6IG9wZW4sXHJcbiAgICBcImNsb3NlXCI6IGNsb3NlXHJcbn07XHJcbiJdfQ==
},{}],2:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var errorTip = $('.search-order-error'),
    orderSnInput = $('input[name="order_sn"]');

var searchOrder = function(e) {
    e.preventDefault();
    var orderSn = orderSnInput.val();
    orderSn = orderSn.replace(/(^\s+)|(\s+$)/,"");
    if(orderSn.length <= 0) {
        errorTip.show();
        orderSnInput.on('input', null, {}, function() {
            errorTip.hide();
            orderSnInput.off('input');
        });
    }
    $.get(webData.WEB_ROOT + 'ajax.php', {
        'act': 'check_order_sn',
        'order_sn': orderSn
    }, function(data) {
        if (data.error) {
            errorTip.show();
            orderSnInput.on('input', null, {}, function() {
                errorTip.hide();
                orderSnInput.off('input');
            });
        } else {
            location.href = webData.WEB_ROOT + 'account/order.php?order_sn=' + orderSn;
        }
    }, 'json');
    return false;
};
var init = function() {
    var input_order_tips = $('.input-order-tips');

    input_order_tips.bind('click', function () {
        if(!$('.input-order-tips-more').hasClass('up')) {
            $('.input-order-tips-more').show();
            $('.input-order-tips-more').addClass('up');
        }else {
            $('.input-order-tips-more').hide();
            $('.input-order-tips-more').removeClass('up');
        }
    });
    
    $('#search-order').submit(searchOrder);
};
module.exports = {
    init: init
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvY29tbW9uL2FjY291bnRfbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcblxyXG52YXIgZXJyb3JUaXAgPSAkKCcuc2VhcmNoLW9yZGVyLWVycm9yJyksXHJcbiAgICBvcmRlclNuSW5wdXQgPSAkKCdpbnB1dFtuYW1lPVwib3JkZXJfc25cIl0nKTtcclxuXHJcbnZhciBzZWFyY2hPcmRlciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBvcmRlclNuID0gb3JkZXJTbklucHV0LnZhbCgpO1xyXG4gICAgb3JkZXJTbiA9IG9yZGVyU24ucmVwbGFjZSgvKF5cXHMrKXwoXFxzKyQpLyxcIlwiKTtcclxuICAgIGlmKG9yZGVyU24ubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICBlcnJvclRpcC5zaG93KCk7XHJcbiAgICAgICAgb3JkZXJTbklucHV0Lm9uKCdpbnB1dCcsIG51bGwsIHt9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZXJyb3JUaXAuaGlkZSgpO1xyXG4gICAgICAgICAgICBvcmRlclNuSW5wdXQub2ZmKCdpbnB1dCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJC5nZXQod2ViRGF0YS5XRUJfUk9PVCArICdhamF4LnBocCcsIHtcclxuICAgICAgICAnYWN0JzogJ2NoZWNrX29yZGVyX3NuJyxcclxuICAgICAgICAnb3JkZXJfc24nOiBvcmRlclNuXHJcbiAgICB9LCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgZXJyb3JUaXAuc2hvdygpO1xyXG4gICAgICAgICAgICBvcmRlclNuSW5wdXQub24oJ2lucHV0JywgbnVsbCwge30sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JUaXAuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgb3JkZXJTbklucHV0Lm9mZignaW5wdXQnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IHdlYkRhdGEuV0VCX1JPT1QgKyAnYWNjb3VudC9vcmRlci5waHA/b3JkZXJfc249JyArIG9yZGVyU247XHJcbiAgICAgICAgfVxyXG4gICAgfSwgJ2pzb24nKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxudmFyIGluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBpbnB1dF9vcmRlcl90aXBzID0gJCgnLmlucHV0LW9yZGVyLXRpcHMnKTtcclxuXHJcbiAgICBpbnB1dF9vcmRlcl90aXBzLmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKCEkKCcuaW5wdXQtb3JkZXItdGlwcy1tb3JlJykuaGFzQ2xhc3MoJ3VwJykpIHtcclxuICAgICAgICAgICAgJCgnLmlucHV0LW9yZGVyLXRpcHMtbW9yZScpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnLmlucHV0LW9yZGVyLXRpcHMtbW9yZScpLmFkZENsYXNzKCd1cCcpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgJCgnLmlucHV0LW9yZGVyLXRpcHMtbW9yZScpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnLmlucHV0LW9yZGVyLXRpcHMtbW9yZScpLnJlbW92ZUNsYXNzKCd1cCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCcjc2VhcmNoLW9yZGVyJykuc3VibWl0KHNlYXJjaE9yZGVyKTtcclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBpbml0OiBpbml0XHJcbn07Il19
},{}],3:[function(require,module,exports){
/*
 * This is used to defined the application level event names.
 * The application events are fired in the document level.
     $( document ).on( "myCustomEvent", {
         foo: "bar"
     }, function( event, arg1, arg2 ) {
         console.log( event.data.foo ); // "bar"
         console.log( arg1 );           // "bim"
         console.log( arg2 );           // "baz"
     });

     $( document ).trigger( "myCustomEvent", [ "bim", "baz" ] );
 *
 */
module.exports = {
    addToCart: "es-addToCart",
    removeFromCart: "es-removeFromCart",
    updateCart: "es-updateCart",
    checkoutStep: "es-checkoutStep",
    purchase: "es-purchase",
    checkoutError: 'es-checkoutError',
    clickCheckout: "es-clickCheckout",
    clickGoodsQuantity: "es-clickGoodsQuantity",
    clickGoodsSize: "es-clickGoodsSize",
    clickGoodsSizeOption: "es-clickGoodsSizeOption",
};
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
require('../lib/jqueryForm');
require('../mod/formCheck');
var events = require('../common/events');
//3962 brazil
//4132 saudi arabia
//3974 chile
var specialCountryIds = [3962, 4132, 3974];
//1 cpf
//2 cnpj
//3 nid
//4 ncr
//5 rut
var specialCodes = [1, 2, 3, 4, 7];
var specialZipConfig = pageData.specialZipConfig ? pageData.specialZipConfig : [];
var specialPhoneConfig = pageData.specialPhoneConfig ? pageData.specialPhoneConfig : [];
//form source，city data(default,user,location)
var form_data_source = 'default';
var houseNoCountryIds = pageData.houseNoCountryIds ? pageData.houseNoCountryIds : [];

//获取表单中的DOM元素和值
var get_form_json = function(elem_form) {    
    var form_json = {};

    form_json['address_id'] = elem_form.find('input[name="address_id"]');
    form_json['address_id_val'] = $.trim(form_json['address_id'].val());

    form_json['gender'] = elem_form.find('input[name="address[gender]"]');
    form_json['gender_val'] = $.trim(form_json['gender'].val());

    form_json['first_name'] = elem_form.find('input[name="address[first_name]"]');
    form_json['first_name_val'] = $.trim(form_json['first_name'].val());

    form_json['last_name'] = elem_form.find('input[name="address[last_name]"]');
    form_json['last_name_val'] = $.trim(form_json['last_name'].val());

    form_json['address_1'] = elem_form.find('input[name="address[address_1]"]');
    form_json['address_1_val'] = $.trim(form_json['address_1'].val());

    form_json['address_2'] = elem_form.find('input[name="address[address_2]"]');
    form_json['address_2_val'] = $.trim(form_json['address_2'].val());

    form_json['city'] = elem_form.find('select[name="address[city]"]');
    form_json['city_val'] = parseInt(form_json['city'].val());

    form_json['city_text'] = elem_form.find('input[name="address[city_text]"]');
    form_json['city_text_val'] = $.trim(form_json['city_text'].val());

    form_json['country'] = elem_form.find('select[name="address[country]"]');
    form_json['country_val'] = parseInt(form_json['country'].val());

    form_json['country_select'] = elem_form.find('select[name="address[country]"] option[selected]');
    form_json['country_select_name'] = form_json['country_select'].html();

    form_json['tax_code_type'] = elem_form.find('select[name="address[tax_code_type]"]');
    form_json['tax_code_type_val'] = parseInt(form_json['tax_code_type'].val());

    form_json['tax_code_value'] = elem_form.find('input[name="address[tax_code_value]"]');
    form_json['tax_code_value_val'] = $.trim(form_json['tax_code_value'].val());

    form_json['province'] = elem_form.find('select[name="address[province]"]');
    form_json['province_val'] = parseInt(form_json['province'].val());

    form_json['province_text'] = elem_form.find('input[name="address[province_text]"]');
    form_json['province_text_val'] = $.trim(form_json['province_text'].val());

    form_json['zip'] = elem_form.find('input[name="address[zip]"]');
    form_json['zip_val'] = $.trim(form_json['zip'].val());

    form_json['phone'] = elem_form.find('input[name="address[phone]"]');
    form_json['phone_val'] = $.trim(form_json['phone'].val());

    form_json['email'] = elem_form.find('input[name="address[email]"]');
    form_json['email_val'] = $.trim(form_json['email'].val());

    //State/Province/Region前面显示*的容器
    form_json['provinceRequired'] = elem_form.find('#provinceRequired');
    //City前面显示*的容器
    form_json['cityRequired'] = elem_form.find('#cityRequired');

    //CPF or CNPJ code的容器
    form_json['taxCode'] = elem_form.find('#taxCode');

    //门牌号
    form_json['house_no_container'] = elem_form.find('#house_no');
    form_json['house_no'] = elem_form.find('input[name="address[house_no]"]');
    form_json['house_no_val'] = $.trim(form_json['house_no'].val());

    return form_json;
};

//default valid form items
var getDefaultItems = function(key) {
    var defaultItems = {
        "address[first_name]": [
            {
                type: "null",
                errMsg: _lang.page_checkout_first_name_minimum,
                errEvent: "first_name"
            },
            {
                type: "minlength",
                minlength: 2,
                errMsg: _lang.page_checkout_first_name_minimum,
                errEvent: "first_name"
            }
        ],
        "address[last_name]": [
            {
                type: "null",
                errMsg: _lang.page_checkout_last_name_minimum,
                errEvent: "last_name"
            },
            {
                type: "minlength",
                minlength: 2,
                errMsg: _lang.page_checkout_last_name_minimum,
                errEvent: "last_name"
            }
        ],
        "address[address_1]": [
            {
                type: "null",
                errMsg: _lang.page_checkout_shipping_address_at_least,
                errEvent: "address_1"
            },
            {
                type: "minlength",
                minlength: 5,
                errMsg: _lang.page_checkout_shipping_address_at_least,
                errEvent: "address_1"
            }
        ],
        "address[country]": [
            {
                type: "null",
                errMsg: _lang.page_checkout_please_select_country
            }
        ],
        "address[city_text]": [
            {
                type: "null",
                errMsg: _lang.page_checkout_your_city_at_least,
                errEvent: "city"
            },
            {
                type: "minlength",
                minlength: 3,
                errMsg: _lang.page_checkout_your_city_at_least,
                errEvent: "city"
            },
            {
                type: "regexp",
                pattern: new RegExp(/^(\D{3,28})$/),
                errMsg: _lang.page_checkout_your_city_format,
                errEvent: "city"
            }
        ],
        "address[province]": [
            {
                type: "null",
                errMsg: _lang.page_checkout_please_select_province,
                errEvent: "state"
            }
        ],
        "address[zip]": [
            {
                type: "null",
                errMsg: _lang.page_checkout_zip_code_at_least,
                errEvent: "zip"
            },
            {
                type: "minlength",
                minlength: 2,
                errMsg: _lang.page_checkout_zip_code_at_least,
                errEvent: "zip"
            }
        ],
        "address[phone]": [
            {
                type: "null",
                errMsg: _lang.page_checkout_phone_number_at_least,
                errEvent: "phone_number"
            },
            {
                type: "minlength",
                minlength: 6,
                errMsg: _lang.page_checkout_phone_number_at_least,
                errEvent: "phone_number"
            }
        ],
        "address[email]": [
            {
                type: "null",
                errMsg: _lang.page_login_enter_email,
                errEvent: "email_empty"
            },
            {
                type: "email",
                errMsg: _lang.page_login_check_email_format,
                errEvent: "email_erro"
            }
        ],
        "address[house_no]": [
            {
                type: "regexp",
                pattern: new RegExp(/^\d[\w/\-]{0,4}$/, "i"),
                errMsg: _lang.page_common_address_house_no_error,
            }
        ]
    }
    return typeof key !== 'undefined' && typeof defaultItems[key] !== 'undefined' ? defaultItems[key] : defaultItems
};
var items = getDefaultItems();
var setError = function (obj, errMsg, showLevel, errEvent) {
    obj.focus();
    obj.addClass('field-error');
    if(errEvent != '' && errEvent != undefined){
        $(document).trigger(events.checkoutError,errEvent);
    }
    if(showLevel == 0) {
        if(obj.next('.error-tip').length > 0) {
            obj.next('.error-tip').html(errMsg);
        } else {
            obj.after('<p class="error-tip">' + errMsg + '</p>');
        }
    } else if(showLevel == 1) {
        obj = obj.parent();
        if(obj.children('.error-tip').length > 0) {
            obj.children('.error-tip').html(errMsg);
        } else {
            obj.append('<p class="error-tip">' + errMsg + '</p>');
        }
    } else if(showLevel == 2) {
        obj = obj.parent().parent();
        if(obj.children('.error-tip').length > 0) {
            obj.children('.error-tip').html(errMsg);
        } else {
            obj.append('<p class="error-tip">' + errMsg + '</p>');
        }
    }

};

var cleanErrorTipExtra = function () {
    if($('.sample-sale-address-tips').length > 0){
        $('.sample-sale-address-tips').removeClass('sample-sale-address-tips-extra');
    }
}

var cleanError = function(elem, showLevel) {
    elem.removeClass('field-error');
    if(showLevel == 0) {
        elem.next('.error-tip').remove();
    } else if(showLevel == 1) {
        elem.parent().children('.error-tip').remove();
    } else if(showLevel == 2) {
        elem.parent().parent().children('.error-tip').remove();
    } else if(showLevel == 'all') {
        elem.find('.error-tip').remove();
        elem.find('.field-error').removeClass('field-error');
    }
    cleanErrorTipExtra();
};
var checkOneItem = function (elem, isShowError) {
    var elem = $(elem);
    var ipt_name = elem.attr('name');
    var elem_form = elem.closest('form');
    var form_json = get_form_json(elem_form);

    check_special_country_phone(form_json);
    check_special_country_zip(form_json);

    if (ipt_name == 'address[tax_code_value]') {                 //验证 CPF or CNPJ code
        var tax_code_type_val = form_json['tax_code_type_val'];
        var tax_code_value_val = form_json['tax_code_value_val'];
        if (tax_code_type_val == specialCodes[0] && (tax_code_value_val.length < 14)) {
            if (isShowError) {
                setError(form_json['tax_code_value'], _lang.page_common_cpf_code_error_tip, 0);
            }
            return false;
        } else if (tax_code_type_val == specialCodes[1] && (tax_code_value_val.length < 18)) {
            if (isShowError) {
                setError(form_json['tax_code_value'], _lang.page_common_cnpj_code_error_tip, 0);
            }
            return false;
        } else if (tax_code_type_val == specialCodes[2] && (tax_code_value_val.length != 10 || isNaN(tax_code_value_val))) {
            if (isShowError) {
                setError(form_json['tax_code_value'], _lang.page_checkout_national_id_error_tips, 0);
            }
            return false;
        } else if (tax_code_type_val == specialCodes[3] && (tax_code_value_val.length != 10 || isNaN(tax_code_value_val))) {
            if (isShowError) {
                setError(form_json['tax_code_value'], _lang.page_checkout_commercial_registry_error_tips, 0);
            }
            return false;
        } else if (tax_code_type_val == specialCodes[4] && (tax_code_value_val.length < 12)) {
            if (isShowError) {
                setError(form_json['tax_code_value'], _lang.page_common_rut_code_error_tip, 0);
            }
            return false;
        } else {
            cleanError(elem, 0);
            return true;
        }
    }

    //其它输入框和下拉框
    for (var key in items) {
        if (ipt_name == key) {
            var item = {};
            item[ipt_name] = items[key];
            var isChecked = elem_form.formCheck(item, {
                showError: function (obj, errMsg, errEvent) {
                    if(isShowError) {
                        if(ipt_name == 'address[first_name]' || ipt_name == 'address[last_name]') {
                            setError(obj, errMsg, 1, errEvent);
                        } else {
                            setError(obj, errMsg, 0, errEvent);
                        }
                    }
                }
            });

            if (isChecked) {
                if(ipt_name == 'address[first_name]' || ipt_name == 'address[last_name]') {
                    cleanError(elem, 1);

                    //first name 和 last name 总长度不等超过34
                    var first_name = elem_form.find('input[name="address[first_name]"]');
                    var last_name = elem_form.find('input[name="address[last_name]"]');
                    if ((first_name.val().length + last_name.val().length) > 34) {
                        if(isShowError) {
                            setError(first_name, _lang.page_checkout_full_name_cannot_ecxeed, 2);
                        }
                        return false;
                    } else {
                        cleanError(first_name, 2);
                    }
                } else {
                    cleanError(elem, 0);
                }
            } else {
                return false;
            }
            break;
        }
    }

    //disable filter samplesale
    var hasSampleSale = pageData.hasSampleSale
    if (hasSampleSale == 1) {
        var filed_value = elem.val();
        filed_value = filed_value.toLowerCase();
        var uk_addres_array = pageData.ukAddresFilter.uk_addres_array ? pageData.ukAddresFilter.uk_addres_array : []
        var uk_address_filter = pageData.ukAddresFilter.uk_address_filter ? pageData.ukAddresFilter.uk_address_filter : []
        var uk_zip_filter = pageData.ukAddresFilter.uk_zip_filter ? pageData.ukAddresFilter.uk_zip_filter : []
        if ($.inArray(ipt_name, uk_addres_array) != -1) {
            for (var m=0; m < uk_address_filter.length; m++) {
                if (filed_value.indexOf(uk_address_filter[m]) != -1) {
                    if(isShowError) {
                        setError(elem, _lang.page_common_can_not_ship, 0);
                    }
                    return false;
                }
            }
            cleanError(elem, 0);
        }
        if (ipt_name == 'address[zip]') {
            filed_value = filed_value.replace(/\s*/g, '')
            for (var n=0; n < uk_zip_filter.length; n++) {
                if (filed_value.indexOf(uk_zip_filter[n]) != -1) {
                    if(isShowError) {
                        setError(elem, _lang.page_common_can_not_ship, 0);
                    }
                    return false;
                }
            }
            cleanError(elem, 0);
        }
    }

    return true;
}

var check_special_country_phone = function (form_json) {
    var countryId = form_json['country_val'];
    var config = false;
    for(var i = 0; i < specialPhoneConfig.length; i++) {
        if(specialPhoneConfig[i].countryIds.indexOf(countryId) > -1) {
           config = specialPhoneConfig[i];
        }
    }
    if(config !== false) {
        items["address[phone]"] =  [
            {
                type: "null",
                errMsg: _lang.page_checkout_phone_number_at_least,
                errEvent: "phone_number"
            },
            {
                type: "regexp",
                pattern: new RegExp(config.pattern),
                errMsg: _lang[config.errTip],
                errEvent: "phone_number"
            }
        ]
    } else {
        items["address[phone]"] = getDefaultItems("address[phone]")
    }
}

var check_special_country_zip = function (form_json) {
    var countryId = form_json['country_val'];
    var config = false;
    for(var i = 0; i < specialZipConfig.length; i++) {
        if(specialZipConfig[i].countryIds.indexOf(countryId) > -1) {
           config = specialZipConfig[i];
        }
    }
    if(config !== false) {
        items["address[zip]"] =  [
            {
                type: "regexp",
                pattern: new RegExp(config.pattern),
                errMsg: _lang[config.errTip],
                errEvent: "zip"
            }
        ]
    } else {
        items["address[zip]"] = getDefaultItems("address[zip]")
    }
}

var country_error_tips_extra = function () {
    if($('.sample-sale-address-tips').length > 0){
        $('.sample-sale-address-tips').addClass('sample-sale-address-tips-extra');
    }
}

var check_addr_form = function(elem_form) {
    if(elem_form.length < 0) {
        return false;
    }
    var form_json = get_form_json(elem_form);

    if(form_json['email'].is(':visible')) {
        if(! checkOneItem(form_json['email'], true)) {
            return false;
        }
    }
    if(! checkOneItem(form_json['phone'], true)) {
        return false;
    }
    if(! checkOneItem(form_json['first_name'], true)) {
        return false;
    }
    if(! checkOneItem(form_json['last_name'], true)) {
        return false;
    }
    if (form_json['house_no'].is(':visible')) {
        if(! checkOneItem(form_json['house_no'], true)) {
            return false;
        }
    }
    if(! checkOneItem(form_json['address_1'], true)) {
        return false;
    }
    if(! checkOneItem(form_json['address_2'], true)) {
        return false;
    }
    if(! checkOneItem(form_json['province_text'], true)) {
        return false;
    }
    if(! checkOneItem(form_json['city_text'], true)) {
        return false;
    }
    if(! checkOneItem(form_json['country'], true)) {
        country_error_tips_extra();
        return false;
    }

    //选择巴西（country_id为3962），需要验证CPF or CNPJ code
    // Saudi Arabia（阿拉伯，country_id为4132）时, 验证ID or CR code
    if (specialCountryIds.indexOf(form_json['country_val']) !== -1) {
        if(! checkOneItem(form_json['tax_code_value'], true)) {
            return false;
        }
    }

    if (form_json['province'].is(':visible')) {
        if(! checkOneItem(form_json['province'], true)) {
            return false;
        }
    }

    if (form_json['city'].is(':visible')) {
        if(! checkOneItem(form_json['city'], true)) {
            return false;
        }
    }

    if(! checkOneItem(form_json['zip'], true)) {
        return false;
    }

    return true;
};

//bind form event
var handle_addr_form = function(elem_form) {
    if(elem_form.length < 0) {
        return false;
    }
    var form_json = get_form_json(elem_form);
   
    var setProvince = function (cid) {        

        setProvinceSelect(cid);
        setPhonePrefix(cid);
        
    };

    var setProvinceSelect = function (cid) {

        var region_is_select = false;
        var allRegion_json = pageData.allRegion_json;        

        for (var i in allRegion_json) {
            if(parseInt(i) == parseInt(cid)) {
                region_is_select = true;                
                
                form_json['province'].empty().show().append('<option value="">' + _lang.page_common_form_select + '</option>');
                for (var j in allRegion_json[i]) {
                    form_json['province'].append('<option value="' + j + '">' + allRegion_json[i][j] + '</option>');
                }                
                break;
            }
        }

        //location source region select
        if(region_is_select && form_data_source == 'location') {
            setProvinceTextHide();
            return;
        }

        //user source region select
        if(form_json['province_text_val'] != "" && form_data_source == 'user') {
            setProvinceSelectHide();
            return;
        }

        if(!region_is_select) {
            setProvinceSelectHide();            
        } else {
            setProvinceTextHide();
        }
    };
    
    var setProvinceSelectHide = function() {
        form_json['provinceRequired'].html('&nbsp;');
        form_json['province_text'].show();
        form_json['province'].hide().empty();
        cleanError(form_json['province'], 0);
        next_label_add_class(form_json['province_text'],'input');
        $('#_provinced_icon').hide();
    };
    
    var setProvinceTextHide = function() {
        form_json['provinceRequired'].html('*');
        form_json['province_text'].hide();
        next_label_add_class(form_json['province'],'select');
        $('#_provinced_icon').show();
    };
    
    var setPhonePrefix = function(cid) {
        var country_detail_json = pageData.countryDetail
        var phone_is_select = false;
        for (var i in country_detail_json){
            if(parseInt(i) == parseInt(cid) && typeof country_detail_json[i].phone_code !== undefined && typeof country_detail_json[i].region_code !== undefined){
                phone_is_select = true;
                var phone_prefix_text = country_detail_json[i].region_code;
                if(country_detail_json[i].phone_code  > 0){
                    phone_prefix_text += '&nbsp; + &nbsp;' + country_detail_json[i].phone_code;
                }
                $('#phone_prefix').html(phone_prefix_text);
                break;
            }
        }
        if(!phone_is_select){
            $('#phone_prefix').html('');
        }
    };
    
    var setCity = function (pid) {
        return;
    };

    elem_form.find('input').focus(function () {
        var me = $(this);
        next_label_add_class(me,'input')
    });
    
    elem_form.find('input').blur(function () {
        var me = $(this);
        next_label_remove_class(me,'input')
        if (me.attr('name') == 'address[tax_code_value]') {
            var tax_code_value_val = me.val()
                ,maxLength;
            switch(form_json['tax_code_type'].val()) {
                case 1:
                    maxLength = 14;
                    break;
                case 2:
                    maxLength = 18;
                    break;
                case 3:
                case 4:
                    maxLength = 10;
                    break;
            }
            if((tax_code_value_val.length == maxLength) && (! isNaN(tax_code_value_val))) {
                cleanError(me, 0);
            }
        }
    });
    elem_form.find('select').focus(function () {
        var me = $(this);
        next_label_add_class(me,'select')
    });
    elem_form.find('select').blur(function () {
        var me = $(this);
        next_label_remove_class(me,'select')
    });
    elem_form.find('select').change(function () {
        var me = $(this);
        next_label_remove_class(me,'select')
        if (me.attr('name') == 'address[country]') {
            var cid = $(this).val();            
            if (!(cid > 0)) {
                return false;
            }

            //选择Brazil（巴西，country_id为3962）时，出现CPF or CNPJ code
            if (specialCountryIds.indexOf(Number(cid)) != -1) {
                if(cid == specialCountryIds[0]) {
                    form_json['taxCode'].find('.tax-lable').hide();
                    form_json['taxCode'].find('p').hide();
                    form_json['taxCode'].find('select').val(1).change().find('option').hide();
                    form_json['taxCode'].find('.tax_code_op_cpf_cnpj').show();
                } else if(cid == specialCountryIds[1]) {
                    form_json['taxCode'].find('.tax-lable').hide();
                    form_json['taxCode'].find('p').hide();
                    form_json['taxCode'].find('select').val(3).change().find('option').hide();
                    form_json['taxCode'].find('.tax_code_op_nid_cid').show();
                } else if (cid == specialCountryIds[2]) {
                    form_json['taxCode'].find('.tax-lable').hide();
                    form_json['taxCode'].find('p').hide();
                    form_json['taxCode'].find('select').val(7).change().find('option').hide();
                    form_json['taxCode'].find('.tax_code_op_rut').show();
                }
                form_json['taxCode'].show();
            } else {
                form_json['taxCode'].hide();
            }

            if (houseNoCountryIds.indexOf(Number(cid)) != -1) {
                form_json['house_no_container'].show();
            } else {
                form_json['house_no_container'].hide();
            }
            
            setProvince(cid);
            setCity(-1);
        } else if(me.attr('name') == 'address[tax_code_type]') {
            if (me.val() == specialCodes[0]) {                          //CPF or CNPJ code，两种code的有效长度分别是14和18
                form_json['tax_code_value'].attr('maxlength', 14).val('');
            } else if (me.val() == specialCodes[1]) {
                form_json['tax_code_value'].attr('maxlength', 18).val('');
            } else if (me.val() == specialCodes[2] || me.val() == specialCodes[3]) {
                form_json['tax_code_value'].attr('maxlength', 10).val('');
            } else if (me.val() == specialCodes[4]) {
                form_json['tax_code_value'].attr('maxlength', 12).val('');
            }
        } else if(me.attr('name') == 'address[province]') {
            //default value:-1
            setCity(-1);                        
        }
    });
    
    form_json['country'].val(pageData.default_country_id).change();

    form_json['email'].blur(function () {
        if (checkOneItem(form_json['email'], false)) {
            checkEmailRegistered($.trim(form_json['email'].val()));
        } else {
            $('#emailRegisterTip').hide();
        }
    });

    form_json['email'].focus(function () {
        $('#emailRegisterTip').hide();
    });

};
var next_label_add_class = function (me,type) {
    if(!me.parent().find('.address-label label').hasClass('top-show')){
        me.parent().find('.address-label label').addClass('top-show')
    }
};

var next_label_remove_class = function (me,type) {
    if(type == 'select' && me.find('option:selected').val() == undefined && me.parent().find('.address-label label').hasClass('top-show')){
        me.parent().find('.address-label label').removeClass('top-show')
    }else if(type == 'input' && me.val() == '' && me.parent().find('.address-label label').hasClass('top-show'))
    {
        me.parent().find('.address-label label').removeClass('top-show')
    }
};

var form_field_top_show = function (elem_form) {
    var form_json = get_form_json(elem_form);
    var form_top_show = ['first_name','last_name','address_1','address_2','city_text','zip','phone','email','province_text','house_no'];

    for(var i in form_top_show){
        var field_val = form_top_show[i] + '_val'
        if(form_json[field_val] != ''){
            next_label_add_class(form_json[form_top_show[i]],'input');
        }else{
            next_label_remove_class(form_json[form_top_show[i]],'input');
        }
    }
    next_label_add_class(form_json['country'],'select');
    next_label_add_class(form_json['province'],'select');
    next_label_add_class(form_json['city'],'select');
}

//init form
var init_addr_form = function (elem_form, setting) {
    var form_json = get_form_json(elem_form);
    if (setting) {

        if(setting.form_data_source) {
            form_data_source = setting.form_data_source;
        }
        
        form_json['address_id'].val(setting.address_id);
        form_json['gender'].val(setting.gender);
        form_json['first_name'].val(setting.first_name);
        form_json['last_name'].val(setting.last_name);
        form_json['address_1'].val(setting.address);
        form_json['address_2'].val(setting.sign_building);

        form_json['country'].val(setting.country).change();
        form_json['province'].val(setting.province).change();
        form_json['province_text'].val(setting.province_text);

        form_json['city'].val(setting.city);
        form_json['city_text'].val(setting.city_text);

        form_json['email'].val(setting.email);
        form_json['house_no'].val(setting.house_no);

        var tax_code_type = specialCodes.indexOf(Number(setting.tax_code_type))
            ,max_length;
        if(tax_code_type !== -1) {
            form_json['tax_code_type'].val(setting.tax_code_type).change();
            switch(Number(setting.tax_code_type)) {
                case 1:
                    max_length = 14;
                    break;
                case 2:
                    max_length = 18;
                    break;
                case 3:
                case 4:
                    max_length = 10;
                    break;
            }
            form_json['tax_code_value'].attr('maxlength', max_length).val(setting.tax_code_value);
        }

        form_json['zip'].val(setting.zipcode);
        form_json['phone'].val(setting.tel);
    } else {
        elem_form.find('input[type="text"], select').val('');
        form_json['address_id'].val('0');
        form_json['country'].val(pageData.default_country_id).change();
        form_json['tax_code_type'].val('1').change();
    }
    form_field_top_show(elem_form)
};

var checkEmailRegistered = function (email) {
    $.ajax({
        'type': 'POST',
        'async': false,
        'url': webData.WEB_ROOT + 'ajax.php',
        'data': 'act=checkEmailRegistered&email=' + email,
        'cache': true,
        'dataType': 'json',
        'success': function(r) {
            if (r.error == 1) {
                $('#emailRegisterTip').hide();
            } else {
                $('#emailRegisterTip').show();
            }
        }
    });
}

module.exports = {
    "get_form_json": get_form_json,
    "check_addr_form": check_addr_form,
    "handle_addr_form": handle_addr_form,
    "init_addr_form": init_addr_form,
    "form_field_top_show": form_field_top_show,
    "checkOneItem" : checkOneItem,
    "cleanError" : cleanError
};

},{"../common/events":3,"../lib/jqueryForm":4,"../mod/formCheck":6}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
require('../lib/jqueryForm');
var address = require('../mod/address');
var loading = require('../checkout/loading');

var address_list = $('#shipping_address_list'); //地址列表
var new_address_div = address_list.find(".address-detail.add-new-address");
var billing_address_list = $('#billing_address_list');//billing address list
var new_billing_address_div = billing_address_list.find(".address-detail.add-new-billing-address");

var address_form = $('#address_form');//dialog form

//address dialog
var address_dialog = address_form.find('.address-dialog');

var edit_type = '';
var is_new_address = false;

function open_dialog() {
    if($('.mask').length < 1) {
        $('body').append('<div class="mask"></div>')
    }
    var dh = $(document).height(),
        cw = $(window).width(),
        ch = $(window).height();

    var sdw = address_dialog.width(),
        sdh = address_dialog.height();

    $('.mask').height(dh).show();
    address_dialog.css({'left': cw / 2 - sdw / 2, 'top': ch / 2 - sdh / 2 + $(document).scrollTop()}).show();
    address.cleanError(address_dialog,'all');
}
function close_dialog() {
    $('.mask').hide();
    address_dialog.hide();
    address.init_addr_form(address_form, false);
}

//修改地址
function editAddress(address_id) {
    $.ajax({
        'type': 'GET',
        'url': '/apis/user/self/address/'+address_id,
        'cache': false,
        'dataType': 'json',
        'beforeSend': function (r) {
            loading.open();
        },
        'success': function (r) {
            loading.close();
            if (r.code == -1) {
                self.location = r.url;
                return;
            } else if (r.code == 0) {
                address.init_addr_form(address_form, r.data);
            } else {
                address.init_addr_form(address_form, false);
            }
            open_dialog();
        },
        'error': function (r) {
            loading.close();
        }
    });
}


//保存dialog中的地址
function saveAddress() {
    if (!address.check_addr_form(address_form)) {
        return false;
    }
    address_form.ajaxSubmit({
        "beforeSubmit": function() {
            loading.open();
            $('.bt-1-new').attr('disabled', true);
        },
        "error": function(a, b, c){
            $('.bt-1-new').attr('disabled', false);
        },
        "success": function (html) {
            loading.close();
            var r = jQuery.parseJSON(html);
            if (r.code == -1) {
                self.location = r.url;
            } else if (r.code == 0) {
                var addr_json = r.address;
                var address_whole = addr_json.address;
                if (addr_json.sign_building != '') {
                    address_whole += ',' + addr_json.sign_building;
                }
                if (addr_json.house_no != '') {
                    address_whole += ',' + addr_json.house_no;
                }
                var province_whole = '';
                if (addr_json.province_name != null) {
                    province_whole = ' ' + addr_json.province_name + ',';
                } else if (addr_json.province_text != '') {
                    province_whole = ' ' + addr_json.province_text + ',';
                }
                var without_delete_html = 
                    '<p>' + addr_json.consignee + '</p>'+
                    '<p>' + address_whole + '</p>'+
                    '<p>' + addr_json.city_text + ',' + province_whole + addr_json.zipcode + '</p>'+
                    '<p>' + addr_json.country_name + '</p>'+
                    '<p>' + addr_json.tel + '</p>'+
                    '<a class="sbmt bt-1-new edit">' + _lang.page_common_edit + '</a>'
                ;
                var with_delete_html = without_delete_html + 
                    '<a class="sbmt bt-1-new delete">' + _lang.page_common_delete + '</a>';
                if (is_new_address == false) {
                    if (edit_type == 'shipping_address') {
                        $('.address-detail[address_id="' + addr_json.address_id + '"]').html(with_delete_html);
                    } else if (edit_type == 'billing_address') {
                        $('.address-detail[address_id="' + addr_json.address_id + '"]').html(without_delete_html);
                    }
                } else {
                    var with_delete_div = 
                        '<div class="address-detail" address_id="' + addr_json.address_id + '">' + 
                            with_delete_html + 
                        '</div>';
                    var without_delete_div = 
                            '<div class="address-detail" address_id="' + addr_json.address_id + '">' + 
                                without_delete_html + 
                            '</div>'; 
                    if (edit_type == 'shipping_address') {
                        new_address_div.before(with_delete_div);
                        if (pageData.has_no_billing_address == true && pageData.has_no_shipping_address == true) {
                            window.location.reload();
                        }
                    } else if (edit_type == 'billing_address') {
                        window.location.reload();
                    }
                }
                resetAllDiv();
                close_dialog();
                $('.bt-1-new').attr('disabled', false);
            } else {
                alert(r.msg);
            }
        }
    });
    return false;
}
//删除地址
function deleteAddress(address_id) {
    $.ajax({
        'type': 'POST',
        'url': '/apis/user/self/address/'+address_id,
        'cache': false,
        'dataType': 'json',
        'data': {'_METHOD':'DELETE'},
        'beforeSend': function (r) {
            loading.open();
        },
        'success': function (r) {
            loading.close();
            if (r.code == 0) {
                address_list.find('div.address-detail[address_id="' + address_id + '"]').remove();
                resetAllDiv();
            } else {
                alert(r.msg);
            }
        },
        'error': function (r) {
            loading.close();
        }
    });
}
function resetAllDiv() {
    address_list.find("div.address-detail").each(function(index) {
        if (index % 4 == 3 ) {
            $(this).addClass('address-detail-at-right');
        } else {
            $(this).removeClass('address-detail-at-right');
        }
    });
    billing_address_list.find("div.address-detail").each(function(index) {
        if (index % 4 == 3 ) {
            $(this).addClass('address-detail-at-right');
        } else {
            $(this).removeClass('address-detail-at-right');
        }
    });
}
var init = function () {
    //绑定地址表单相关事件，主要是切换国家和表单验证
    address.handle_addr_form(address_form);

    //提交Dialog中的地址表单
    address_form.submit(saveAddress);

    //关闭地址弹出层
    $('body').delegate('.mask, .address-dialog .close', 'click', function() {
        close_dialog();
    });

    //绑定地址列表相关事件
    address_list.delegate('.button_add_address', 'click', function () {
        //add new 
        address_form.find('input[name="address_id"]').val(0);
        edit_type = 'shipping_address';
        is_new_address = true;
        open_dialog();
    }).delegate('.edit', 'click', function () {
        //edit
        edit_type = 'shipping_address';
        is_new_address = false;
        editAddress($(this).closest('div.address-detail').attr('address_id'));
    }).delegate('.delete', 'click', function () {
        //delete
        deleteAddress($(this).closest('div.address-detail').attr('address_id'));
    });
    
    billing_address_list.delegate('.button_add_address', 'click', function () {
        //add a billing dress
        address_form.find('input[name="address_id"]').val(0);
        edit_type = 'billing_address';
        is_new_address = true;
        open_dialog();
    }).delegate('.edit', 'click', function () {
        //edit
        edit_type = 'billing_address';
        is_new_address = false;
        editAddress($(this).closest('div.address-detail').attr('address_id'));
    });

};

module.exports = {
    "init": init
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvb3JkZXIvYWRkcmVzc2Jvb2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcbnJlcXVpcmUoJy4uL2xpYi9qcXVlcnlGb3JtJyk7XHJcbnZhciBhZGRyZXNzID0gcmVxdWlyZSgnLi4vbW9kL2FkZHJlc3MnKTtcclxudmFyIGxvYWRpbmcgPSByZXF1aXJlKCcuLi9jaGVja291dC9sb2FkaW5nJyk7XHJcblxyXG52YXIgYWRkcmVzc19saXN0ID0gJCgnI3NoaXBwaW5nX2FkZHJlc3NfbGlzdCcpOyAvL+WcsOWdgOWIl+ihqFxyXG52YXIgbmV3X2FkZHJlc3NfZGl2ID0gYWRkcmVzc19saXN0LmZpbmQoXCIuYWRkcmVzcy1kZXRhaWwuYWRkLW5ldy1hZGRyZXNzXCIpO1xyXG52YXIgYmlsbGluZ19hZGRyZXNzX2xpc3QgPSAkKCcjYmlsbGluZ19hZGRyZXNzX2xpc3QnKTsvL2JpbGxpbmcgYWRkcmVzcyBsaXN0XHJcbnZhciBuZXdfYmlsbGluZ19hZGRyZXNzX2RpdiA9IGJpbGxpbmdfYWRkcmVzc19saXN0LmZpbmQoXCIuYWRkcmVzcy1kZXRhaWwuYWRkLW5ldy1iaWxsaW5nLWFkZHJlc3NcIik7XHJcblxyXG52YXIgYWRkcmVzc19mb3JtID0gJCgnI2FkZHJlc3NfZm9ybScpOy8vZGlhbG9nIGZvcm1cclxuXHJcbi8vYWRkcmVzcyBkaWFsb2dcclxudmFyIGFkZHJlc3NfZGlhbG9nID0gYWRkcmVzc19mb3JtLmZpbmQoJy5hZGRyZXNzLWRpYWxvZycpO1xyXG5cclxudmFyIGVkaXRfdHlwZSA9ICcnO1xyXG52YXIgaXNfbmV3X2FkZHJlc3MgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIG9wZW5fZGlhbG9nKCkge1xyXG4gICAgaWYoJCgnLm1hc2snKS5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cIm1hc2tcIj48L2Rpdj4nKVxyXG4gICAgfVxyXG4gICAgdmFyIGRoID0gJChkb2N1bWVudCkuaGVpZ2h0KCksXHJcbiAgICAgICAgY3cgPSAkKHdpbmRvdykud2lkdGgoKSxcclxuICAgICAgICBjaCA9ICQod2luZG93KS5oZWlnaHQoKTtcclxuXHJcbiAgICB2YXIgc2R3ID0gYWRkcmVzc19kaWFsb2cud2lkdGgoKSxcclxuICAgICAgICBzZGggPSBhZGRyZXNzX2RpYWxvZy5oZWlnaHQoKTtcclxuXHJcbiAgICAkKCcubWFzaycpLmhlaWdodChkaCkuc2hvdygpO1xyXG4gICAgYWRkcmVzc19kaWFsb2cuY3NzKHsnbGVmdCc6IGN3IC8gMiAtIHNkdyAvIDIsICd0b3AnOiBjaCAvIDIgLSBzZGggLyAyICsgJChkb2N1bWVudCkuc2Nyb2xsVG9wKCl9KS5zaG93KCk7XHJcbiAgICBhZGRyZXNzLmNsZWFuRXJyb3IoYWRkcmVzc19kaWFsb2csJ2FsbCcpO1xyXG59XHJcbmZ1bmN0aW9uIGNsb3NlX2RpYWxvZygpIHtcclxuICAgICQoJy5tYXNrJykuaGlkZSgpO1xyXG4gICAgYWRkcmVzc19kaWFsb2cuaGlkZSgpO1xyXG4gICAgYWRkcmVzcy5pbml0X2FkZHJfZm9ybShhZGRyZXNzX2Zvcm0sIGZhbHNlKTtcclxufVxyXG5cclxuLy/kv67mlLnlnLDlnYBcclxuZnVuY3Rpb24gZWRpdEFkZHJlc3MoYWRkcmVzc19pZCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICAndHlwZSc6ICdHRVQnLFxyXG4gICAgICAgICd1cmwnOiAnL2FwaXMvdXNlci9zZWxmL2FkZHJlc3MvJythZGRyZXNzX2lkLFxyXG4gICAgICAgICdjYWNoZSc6IGZhbHNlLFxyXG4gICAgICAgICdkYXRhVHlwZSc6ICdqc29uJyxcclxuICAgICAgICAnYmVmb3JlU2VuZCc6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmcub3BlbigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3N1Y2Nlc3MnOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICBsb2FkaW5nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIGlmIChyLmNvZGUgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubG9jYXRpb24gPSByLnVybDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzcy5pbml0X2FkZHJfZm9ybShhZGRyZXNzX2Zvcm0sIHIuZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzLmluaXRfYWRkcl9mb3JtKGFkZHJlc3NfZm9ybSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wZW5fZGlhbG9nKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZXJyb3InOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICBsb2FkaW5nLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG4vL+S/neWtmGRpYWxvZ+S4reeahOWcsOWdgFxyXG5mdW5jdGlvbiBzYXZlQWRkcmVzcygpIHtcclxuICAgIGlmICghYWRkcmVzcy5jaGVja19hZGRyX2Zvcm0oYWRkcmVzc19mb3JtKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGFkZHJlc3NfZm9ybS5hamF4U3VibWl0KHtcclxuICAgICAgICBcImJlZm9yZVN1Ym1pdFwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbG9hZGluZy5vcGVuKCk7XHJcbiAgICAgICAgICAgICQoJy5idC0xLW5ldycpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImVycm9yXCI6IGZ1bmN0aW9uKGEsIGIsIGMpe1xyXG4gICAgICAgICAgICAkKCcuYnQtMS1uZXcnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3VjY2Vzc1wiOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICBsb2FkaW5nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHZhciByID0galF1ZXJ5LnBhcnNlSlNPTihodG1sKTtcclxuICAgICAgICAgICAgaWYgKHIuY29kZSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sb2NhdGlvbiA9IHIudXJsO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHIuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWRkcl9qc29uID0gci5hZGRyZXNzO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFkZHJlc3Nfd2hvbGUgPSBhZGRyX2pzb24uYWRkcmVzcztcclxuICAgICAgICAgICAgICAgIGlmIChhZGRyX2pzb24uc2lnbl9idWlsZGluZyAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nfd2hvbGUgKz0gJywnICsgYWRkcl9qc29uLnNpZ25fYnVpbGRpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRkcl9qc29uLmhvdXNlX25vICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc193aG9sZSArPSAnLCcgKyBhZGRyX2pzb24uaG91c2Vfbm87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvdmluY2Vfd2hvbGUgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChhZGRyX2pzb24ucHJvdmluY2VfbmFtZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmluY2Vfd2hvbGUgPSAnICcgKyBhZGRyX2pzb24ucHJvdmluY2VfbmFtZSArICcsJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWRkcl9qc29uLnByb3ZpbmNlX3RleHQgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm92aW5jZV93aG9sZSA9ICcgJyArIGFkZHJfanNvbi5wcm92aW5jZV90ZXh0ICsgJywnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHdpdGhvdXRfZGVsZXRlX2h0bWwgPSBcclxuICAgICAgICAgICAgICAgICAgICAnPHA+JyArIGFkZHJfanNvbi5jb25zaWduZWUgKyAnPC9wPicrXHJcbiAgICAgICAgICAgICAgICAgICAgJzxwPicgKyBhZGRyZXNzX3dob2xlICsgJzwvcD4nK1xyXG4gICAgICAgICAgICAgICAgICAgICc8cD4nICsgYWRkcl9qc29uLmNpdHlfdGV4dCArICcsJyArIHByb3ZpbmNlX3dob2xlICsgYWRkcl9qc29uLnppcGNvZGUgKyAnPC9wPicrXHJcbiAgICAgICAgICAgICAgICAgICAgJzxwPicgKyBhZGRyX2pzb24uY291bnRyeV9uYW1lICsgJzwvcD4nK1xyXG4gICAgICAgICAgICAgICAgICAgICc8cD4nICsgYWRkcl9qc29uLnRlbCArICc8L3A+JytcclxuICAgICAgICAgICAgICAgICAgICAnPGEgY2xhc3M9XCJzYm10IGJ0LTEtbmV3IGVkaXRcIj4nICsgX2xhbmcucGFnZV9jb21tb25fZWRpdCArICc8L2E+J1xyXG4gICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpdGhfZGVsZXRlX2h0bWwgPSB3aXRob3V0X2RlbGV0ZV9odG1sICsgXHJcbiAgICAgICAgICAgICAgICAgICAgJzxhIGNsYXNzPVwic2JtdCBidC0xLW5ldyBkZWxldGVcIj4nICsgX2xhbmcucGFnZV9jb21tb25fZGVsZXRlICsgJzwvYT4nO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzX25ld19hZGRyZXNzID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVkaXRfdHlwZSA9PSAnc2hpcHBpbmdfYWRkcmVzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmFkZHJlc3MtZGV0YWlsW2FkZHJlc3NfaWQ9XCInICsgYWRkcl9qc29uLmFkZHJlc3NfaWQgKyAnXCJdJykuaHRtbCh3aXRoX2RlbGV0ZV9odG1sKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVkaXRfdHlwZSA9PSAnYmlsbGluZ19hZGRyZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuYWRkcmVzcy1kZXRhaWxbYWRkcmVzc19pZD1cIicgKyBhZGRyX2pzb24uYWRkcmVzc19pZCArICdcIl0nKS5odG1sKHdpdGhvdXRfZGVsZXRlX2h0bWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdpdGhfZGVsZXRlX2RpdiA9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImFkZHJlc3MtZGV0YWlsXCIgYWRkcmVzc19pZD1cIicgKyBhZGRyX2pzb24uYWRkcmVzc19pZCArICdcIj4nICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoX2RlbGV0ZV9odG1sICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3aXRob3V0X2RlbGV0ZV9kaXYgPSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYWRkcmVzcy1kZXRhaWxcIiBhZGRyZXNzX2lkPVwiJyArIGFkZHJfanNvbi5hZGRyZXNzX2lkICsgJ1wiPicgKyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRob3V0X2RlbGV0ZV9odG1sICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JzsgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVkaXRfdHlwZSA9PSAnc2hpcHBpbmdfYWRkcmVzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3X2FkZHJlc3NfZGl2LmJlZm9yZSh3aXRoX2RlbGV0ZV9kaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFnZURhdGEuaGFzX25vX2JpbGxpbmdfYWRkcmVzcyA9PSB0cnVlICYmIHBhZ2VEYXRhLmhhc19ub19zaGlwcGluZ19hZGRyZXNzID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWRpdF90eXBlID09ICdiaWxsaW5nX2FkZHJlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXNldEFsbERpdigpO1xyXG4gICAgICAgICAgICAgICAgY2xvc2VfZGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuYnQtMS1uZXcnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHIubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbi8v5Yig6Zmk5Zyw5Z2AXHJcbmZ1bmN0aW9uIGRlbGV0ZUFkZHJlc3MoYWRkcmVzc19pZCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICAndHlwZSc6ICdQT1NUJyxcclxuICAgICAgICAndXJsJzogJy9hcGlzL3VzZXIvc2VsZi9hZGRyZXNzLycrYWRkcmVzc19pZCxcclxuICAgICAgICAnY2FjaGUnOiBmYWxzZSxcclxuICAgICAgICAnZGF0YVR5cGUnOiAnanNvbicsXHJcbiAgICAgICAgJ2RhdGEnOiB7J19NRVRIT0QnOidERUxFVEUnfSxcclxuICAgICAgICAnYmVmb3JlU2VuZCc6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmcub3BlbigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3N1Y2Nlc3MnOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICBsb2FkaW5nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIGlmIChyLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzc19saXN0LmZpbmQoJ2Rpdi5hZGRyZXNzLWRldGFpbFthZGRyZXNzX2lkPVwiJyArIGFkZHJlc3NfaWQgKyAnXCJdJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICByZXNldEFsbERpdigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoci5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZXJyb3InOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICBsb2FkaW5nLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gcmVzZXRBbGxEaXYoKSB7XHJcbiAgICBhZGRyZXNzX2xpc3QuZmluZChcImRpdi5hZGRyZXNzLWRldGFpbFwiKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgaWYgKGluZGV4ICUgNCA9PSAzICkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhZGRyZXNzLWRldGFpbC1hdC1yaWdodCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FkZHJlc3MtZGV0YWlsLWF0LXJpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBiaWxsaW5nX2FkZHJlc3NfbGlzdC5maW5kKFwiZGl2LmFkZHJlc3MtZGV0YWlsXCIpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgICBpZiAoaW5kZXggJSA0ID09IDMgKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FkZHJlc3MtZGV0YWlsLWF0LXJpZ2h0Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWRkcmVzcy1kZXRhaWwtYXQtcmlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG52YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8v57uR5a6a5Zyw5Z2A6KGo5Y2V55u45YWz5LqL5Lu277yM5Li76KaB5piv5YiH5o2i5Zu95a625ZKM6KGo5Y2V6aqM6K+BXHJcbiAgICBhZGRyZXNzLmhhbmRsZV9hZGRyX2Zvcm0oYWRkcmVzc19mb3JtKTtcclxuXHJcbiAgICAvL+aPkOS6pERpYWxvZ+S4reeahOWcsOWdgOihqOWNlVxyXG4gICAgYWRkcmVzc19mb3JtLnN1Ym1pdChzYXZlQWRkcmVzcyk7XHJcblxyXG4gICAgLy/lhbPpl63lnLDlnYDlvLnlh7rlsYJcclxuICAgICQoJ2JvZHknKS5kZWxlZ2F0ZSgnLm1hc2ssIC5hZGRyZXNzLWRpYWxvZyAuY2xvc2UnLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjbG9zZV9kaWFsb2coKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8v57uR5a6a5Zyw5Z2A5YiX6KGo55u45YWz5LqL5Lu2XHJcbiAgICBhZGRyZXNzX2xpc3QuZGVsZWdhdGUoJy5idXR0b25fYWRkX2FkZHJlc3MnLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9hZGQgbmV3IFxyXG4gICAgICAgIGFkZHJlc3NfZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWRkcmVzc19pZFwiXScpLnZhbCgwKTtcclxuICAgICAgICBlZGl0X3R5cGUgPSAnc2hpcHBpbmdfYWRkcmVzcyc7XHJcbiAgICAgICAgaXNfbmV3X2FkZHJlc3MgPSB0cnVlO1xyXG4gICAgICAgIG9wZW5fZGlhbG9nKCk7XHJcbiAgICB9KS5kZWxlZ2F0ZSgnLmVkaXQnLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9lZGl0XHJcbiAgICAgICAgZWRpdF90eXBlID0gJ3NoaXBwaW5nX2FkZHJlc3MnO1xyXG4gICAgICAgIGlzX25ld19hZGRyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgZWRpdEFkZHJlc3MoJCh0aGlzKS5jbG9zZXN0KCdkaXYuYWRkcmVzcy1kZXRhaWwnKS5hdHRyKCdhZGRyZXNzX2lkJykpO1xyXG4gICAgfSkuZGVsZWdhdGUoJy5kZWxldGUnLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9kZWxldGVcclxuICAgICAgICBkZWxldGVBZGRyZXNzKCQodGhpcykuY2xvc2VzdCgnZGl2LmFkZHJlc3MtZGV0YWlsJykuYXR0cignYWRkcmVzc19pZCcpKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBiaWxsaW5nX2FkZHJlc3NfbGlzdC5kZWxlZ2F0ZSgnLmJ1dHRvbl9hZGRfYWRkcmVzcycsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL2FkZCBhIGJpbGxpbmcgZHJlc3NcclxuICAgICAgICBhZGRyZXNzX2Zvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFkZHJlc3NfaWRcIl0nKS52YWwoMCk7XHJcbiAgICAgICAgZWRpdF90eXBlID0gJ2JpbGxpbmdfYWRkcmVzcyc7XHJcbiAgICAgICAgaXNfbmV3X2FkZHJlc3MgPSB0cnVlO1xyXG4gICAgICAgIG9wZW5fZGlhbG9nKCk7XHJcbiAgICB9KS5kZWxlZ2F0ZSgnLmVkaXQnLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9lZGl0XHJcbiAgICAgICAgZWRpdF90eXBlID0gJ2JpbGxpbmdfYWRkcmVzcyc7XHJcbiAgICAgICAgaXNfbmV3X2FkZHJlc3MgPSBmYWxzZTtcclxuICAgICAgICBlZGl0QWRkcmVzcygkKHRoaXMpLmNsb3Nlc3QoJ2Rpdi5hZGRyZXNzLWRldGFpbCcpLmF0dHIoJ2FkZHJlc3NfaWQnKSk7XHJcbiAgICB9KTtcclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFwiaW5pdFwiOiBpbml0XHJcbn07XHJcbiJdfQ==
},{"../checkout/loading":1,"../lib/jqueryForm":4,"../mod/address":5}],"addressbook":[function(require,module,exports){
// require('./common')
require('../order/addressbook').init(); //Your Shipping Address
require('../common/account_menu').init();
},{"../common/account_menu":2,"../order/addressbook":7}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL2NoZWNrb3V0L2xvYWRpbmcuanMiLCJEOi93d3cvcHJvbWV0aGV1cy9zcmMvZ2FlYS9qcy9jb21tb24vYWNjb3VudF9tZW51LmpzIiwiRDovd3d3L3Byb21ldGhldXMvc3JjL2dhZWEvanMvY29tbW9uL2V2ZW50cy5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL2xpYi9qcXVlcnlGb3JtLmpzIiwiRDovd3d3L3Byb21ldGhldXMvc3JjL2dhZWEvanMvbW9kL2FkZHJlc3MuanMiLCJEOi93d3cvcHJvbWV0aGV1cy9zcmMvZ2FlYS9qcy9tb2QvZm9ybUNoZWNrLmpzIiwiRDovd3d3L3Byb21ldGhldXMvc3JjL2dhZWEvanMvb3JkZXIvYWRkcmVzc2Jvb2suanMiLCIuL2dhZWEvanMvZW50cnlfanMvYWRkcmVzc2Jvb2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1ckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ256QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVPQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuXHJcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG5cclxuLy9sb2FkaW5nXHJcbnZhciBsb2FkaW5nU2VsZWN0b3IgPSAnLnBvcC1sb2FkaW5nJztcclxuZnVuY3Rpb24gb3BlbigpIHtcclxuICAgIGlmKCQobG9hZGluZ1NlbGVjdG9yKS5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInBvcC1sb2FkaW5nXCI+PC9kaXY+JylcclxuICAgIH1cclxuICAgIHZhciBsb2FkaW5nID0gJChsb2FkaW5nU2VsZWN0b3IpO1xyXG5cclxuICAgIHZhciBjdyA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgdmFyIGNoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgdmFyIGxkdyA9IGxvYWRpbmcud2lkdGgoKTtcclxuICAgIHZhciBsZGggPSBsb2FkaW5nLmhlaWdodCgpO1xyXG4gICAgbG9hZGluZy5jc3MoeydsZWZ0JzogY3cgLyAyIC0gbGR3IC8gMiwgJ3RvcCc6IGNoIC8gMiAtIGxkaCAvIDIgKyAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKX0pLnNob3coKTtcclxufVxyXG5mdW5jdGlvbiBjbG9zZSgpIHtcclxuICAgICQobG9hZGluZ1NlbGVjdG9yKS5oaWRlKCk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgXCJvcGVuXCI6IG9wZW4sXHJcbiAgICBcImNsb3NlXCI6IGNsb3NlXHJcbn07XHJcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWRoWldFdmFuTXZZMmhsWTJ0dmRYUXZiRzloWkdsdVp5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVNJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lYSEpjYm5aaGNpQWtJRDBnS0hSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUIzYVc1a2IzZGJKeVFuWFNBNklIUjVjR1Z2WmlCbmJHOWlZV3dnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnUHlCbmJHOWlZV3hiSnlRblhTQTZJRzUxYkd3cE8xeHlYRzVjY2x4dUx5OXNiMkZrYVc1blhISmNiblpoY2lCc2IyRmthVzVuVTJWc1pXTjBiM0lnUFNBbkxuQnZjQzFzYjJGa2FXNW5KenRjY2x4dVpuVnVZM1JwYjI0Z2IzQmxiaWdwSUh0Y2NseHVJQ0FnSUdsbUtDUW9iRzloWkdsdVoxTmxiR1ZqZEc5eUtTNXNaVzVuZEdnZ1BDQXhLU0I3WEhKY2JpQWdJQ0FnSUNBZ0pDZ25ZbTlrZVNjcExtRndjR1Z1WkNnblBHUnBkaUJqYkdGemN6MWNJbkJ2Y0Mxc2IyRmthVzVuWENJK1BDOWthWFkrSnlsY2NseHVJQ0FnSUgxY2NseHVJQ0FnSUhaaGNpQnNiMkZrYVc1bklEMGdKQ2hzYjJGa2FXNW5VMlZzWldOMGIzSXBPMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQmpkeUE5SUNRb2QybHVaRzkzS1M1M2FXUjBhQ2dwTzF4eVhHNGdJQ0FnZG1GeUlHTm9JRDBnSkNoM2FXNWtiM2NwTG1obGFXZG9kQ2dwTzF4eVhHNGdJQ0FnZG1GeUlHeGtkeUE5SUd4dllXUnBibWN1ZDJsa2RHZ29LVHRjY2x4dUlDQWdJSFpoY2lCc1pHZ2dQU0JzYjJGa2FXNW5MbWhsYVdkb2RDZ3BPMXh5WEc0Z0lDQWdiRzloWkdsdVp5NWpjM01vZXlkc1pXWjBKem9nWTNjZ0x5QXlJQzBnYkdSM0lDOGdNaXdnSjNSdmNDYzZJR05vSUM4Z01pQXRJR3hrYUNBdklESWdLeUFrS0dSdlkzVnRaVzUwS1M1elkzSnZiR3hVYjNBb0tYMHBMbk5vYjNjb0tUdGNjbHh1ZlZ4eVhHNW1kVzVqZEdsdmJpQmpiRzl6WlNncElIdGNjbHh1SUNBZ0lDUW9iRzloWkdsdVoxTmxiR1ZqZEc5eUtTNW9hV1JsS0NrN1hISmNibjFjY2x4dVhISmNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdlMXh5WEc0Z0lDQWdYQ0p2Y0dWdVhDSTZJRzl3Wlc0c1hISmNiaUFnSUNCY0ltTnNiM05sWENJNklHTnNiM05sWEhKY2JuMDdYSEpjYmlKZGZRPT0iLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxuXHJcbnZhciBlcnJvclRpcCA9ICQoJy5zZWFyY2gtb3JkZXItZXJyb3InKSxcclxuICAgIG9yZGVyU25JbnB1dCA9ICQoJ2lucHV0W25hbWU9XCJvcmRlcl9zblwiXScpO1xyXG5cclxudmFyIHNlYXJjaE9yZGVyID0gZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIG9yZGVyU24gPSBvcmRlclNuSW5wdXQudmFsKCk7XHJcbiAgICBvcmRlclNuID0gb3JkZXJTbi5yZXBsYWNlKC8oXlxccyspfChcXHMrJCkvLFwiXCIpO1xyXG4gICAgaWYob3JkZXJTbi5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgIGVycm9yVGlwLnNob3coKTtcclxuICAgICAgICBvcmRlclNuSW5wdXQub24oJ2lucHV0JywgbnVsbCwge30sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBlcnJvclRpcC5oaWRlKCk7XHJcbiAgICAgICAgICAgIG9yZGVyU25JbnB1dC5vZmYoJ2lucHV0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkLmdldCh3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwJywge1xyXG4gICAgICAgICdhY3QnOiAnY2hlY2tfb3JkZXJfc24nLFxyXG4gICAgICAgICdvcmRlcl9zbic6IG9yZGVyU25cclxuICAgIH0sIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICBlcnJvclRpcC5zaG93KCk7XHJcbiAgICAgICAgICAgIG9yZGVyU25JbnB1dC5vbignaW5wdXQnLCBudWxsLCB7fSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvclRpcC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBvcmRlclNuSW5wdXQub2ZmKCdpbnB1dCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gd2ViRGF0YS5XRUJfUk9PVCArICdhY2NvdW50L29yZGVyLnBocD9vcmRlcl9zbj0nICsgb3JkZXJTbjtcclxuICAgICAgICB9XHJcbiAgICB9LCAnanNvbicpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG52YXIgaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGlucHV0X29yZGVyX3RpcHMgPSAkKCcuaW5wdXQtb3JkZXItdGlwcycpO1xyXG5cclxuICAgIGlucHV0X29yZGVyX3RpcHMuYmluZCgnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYoISQoJy5pbnB1dC1vcmRlci10aXBzLW1vcmUnKS5oYXNDbGFzcygndXAnKSkge1xyXG4gICAgICAgICAgICAkKCcuaW5wdXQtb3JkZXItdGlwcy1tb3JlJykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCcuaW5wdXQtb3JkZXItdGlwcy1tb3JlJykuYWRkQ2xhc3MoJ3VwJyk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuaW5wdXQtb3JkZXItdGlwcy1tb3JlJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcuaW5wdXQtb3JkZXItdGlwcy1tb3JlJykucmVtb3ZlQ2xhc3MoJ3VwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoJyNzZWFyY2gtb3JkZXInKS5zdWJtaXQoc2VhcmNoT3JkZXIpO1xyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGluaXQ6IGluaXRcclxufTtcbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1kaFpXRXZhbk12WTI5dGJXOXVMMkZqWTI5MWJuUmZiV1Z1ZFM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVNJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lkbUZ5SUNRZ1BTQW9kSGx3Wlc5bUlIZHBibVJ2ZHlBaFBUMGdYQ0oxYm1SbFptbHVaV1JjSWlBL0lIZHBibVJ2ZDFzbkpDZGRJRG9nZEhsd1pXOW1JR2RzYjJKaGJDQWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JR2RzYjJKaGJGc25KQ2RkSURvZ2JuVnNiQ2s3WEhKY2JseHlYRzUyWVhJZ1pYSnliM0pVYVhBZ1BTQWtLQ2N1YzJWaGNtTm9MVzl5WkdWeUxXVnljbTl5Snlrc1hISmNiaUFnSUNCdmNtUmxjbE51U1c1d2RYUWdQU0FrS0NkcGJuQjFkRnR1WVcxbFBWd2liM0prWlhKZmMyNWNJbDBuS1R0Y2NseHVYSEpjYm5aaGNpQnpaV0Z5WTJoUGNtUmxjaUE5SUdaMWJtTjBhVzl1S0dVcElIdGNjbHh1SUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1SUNBZ0lIWmhjaUJ2Y21SbGNsTnVJRDBnYjNKa1pYSlRia2x1Y0hWMExuWmhiQ2dwTzF4eVhHNGdJQ0FnYjNKa1pYSlRiaUE5SUc5eVpHVnlVMjR1Y21Wd2JHRmpaU2d2S0Y1Y1hITXJLWHdvWEZ4ekt5UXBMeXhjSWx3aUtUdGNjbHh1SUNBZ0lHbG1LRzl5WkdWeVUyNHViR1Z1WjNSb0lEdzlJREFwSUh0Y2NseHVJQ0FnSUNBZ0lDQmxjbkp2Y2xScGNDNXphRzkzS0NrN1hISmNiaUFnSUNBZ0lDQWdiM0prWlhKVGJrbHVjSFYwTG05dUtDZHBibkIxZENjc0lHNTFiR3dzSUh0OUxDQm1kVzVqZEdsdmJpZ3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaWEp5YjNKVWFYQXVhR2xrWlNncE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCdmNtUmxjbE51U1c1d2RYUXViMlptS0NkcGJuQjFkQ2NwTzF4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdKQzVuWlhRb2QyVmlSR0YwWVM1WFJVSmZVazlQVkNBcklDZGhhbUY0TG5Cb2NDY3NJSHRjY2x4dUlDQWdJQ0FnSUNBbllXTjBKem9nSjJOb1pXTnJYMjl5WkdWeVgzTnVKeXhjY2x4dUlDQWdJQ0FnSUNBbmIzSmtaWEpmYzI0bk9pQnZjbVJsY2xOdVhISmNiaUFnSUNCOUxDQm1kVzVqZEdsdmJpaGtZWFJoS1NCN1hISmNiaUFnSUNBZ0lDQWdhV1lnS0dSaGRHRXVaWEp5YjNJcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pYSnliM0pVYVhBdWMyaHZkeWdwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J2Y21SbGNsTnVTVzV3ZFhRdWIyNG9KMmx1Y0hWMEp5d2diblZzYkN3Z2UzMHNJR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pYSnliM0pVYVhBdWFHbGtaU2dwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IzSmtaWEpUYmtsdWNIVjBMbTltWmlnbmFXNXdkWFFuS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JHOWpZWFJwYjI0dWFISmxaaUE5SUhkbFlrUmhkR0V1VjBWQ1gxSlBUMVFnS3lBbllXTmpiM1Z1ZEM5dmNtUmxjaTV3YUhBL2IzSmtaWEpmYzI0OUp5QXJJRzl5WkdWeVUyNDdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlN3Z0oycHpiMjRuS1R0Y2NseHVJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNjbHh1ZlR0Y2NseHVkbUZ5SUdsdWFYUWdQU0JtZFc1amRHbHZiaWdwSUh0Y2NseHVJQ0FnSUhaaGNpQnBibkIxZEY5dmNtUmxjbDkwYVhCeklEMGdKQ2duTG1sdWNIVjBMVzl5WkdWeUxYUnBjSE1uS1R0Y2NseHVYSEpjYmlBZ0lDQnBibkIxZEY5dmNtUmxjbDkwYVhCekxtSnBibVFvSjJOc2FXTnJKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJR2xtS0NFa0tDY3VhVzV3ZFhRdGIzSmtaWEl0ZEdsd2N5MXRiM0psSnlrdWFHRnpRMnhoYzNNb0ozVndKeWtwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSkNnbkxtbHVjSFYwTFc5eVpHVnlMWFJwY0hNdGJXOXlaU2NwTG5Ob2IzY29LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdKQ2duTG1sdWNIVjBMVzl5WkdWeUxYUnBjSE10Ylc5eVpTY3BMbUZrWkVOc1lYTnpLQ2QxY0NjcE8xeHlYRzRnSUNBZ0lDQWdJSDFsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0pDZ25MbWx1Y0hWMExXOXlaR1Z5TFhScGNITXRiVzl5WlNjcExtaHBaR1VvS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSkNnbkxtbHVjSFYwTFc5eVpHVnlMWFJwY0hNdGJXOXlaU2NwTG5KbGJXOTJaVU5zWVhOektDZDFjQ2NwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMHBPMXh5WEc0Z0lDQWdYSEpjYmlBZ0lDQWtLQ2NqYzJWaGNtTm9MVzl5WkdWeUp5a3VjM1ZpYldsMEtITmxZWEpqYUU5eVpHVnlLVHRjY2x4dWZUdGNjbHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0I3WEhKY2JpQWdJQ0JwYm1sME9pQnBibWwwWEhKY2JuMDdJbDE5IiwiLypcclxuICogVGhpcyBpcyB1c2VkIHRvIGRlZmluZWQgdGhlIGFwcGxpY2F0aW9uIGxldmVsIGV2ZW50IG5hbWVzLlxyXG4gKiBUaGUgYXBwbGljYXRpb24gZXZlbnRzIGFyZSBmaXJlZCBpbiB0aGUgZG9jdW1lbnQgbGV2ZWwuXHJcbiAgICAgJCggZG9jdW1lbnQgKS5vbiggXCJteUN1c3RvbUV2ZW50XCIsIHtcclxuICAgICAgICAgZm9vOiBcImJhclwiXHJcbiAgICAgfSwgZnVuY3Rpb24oIGV2ZW50LCBhcmcxLCBhcmcyICkge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyggZXZlbnQuZGF0YS5mb28gKTsgLy8gXCJiYXJcIlxyXG4gICAgICAgICBjb25zb2xlLmxvZyggYXJnMSApOyAgICAgICAgICAgLy8gXCJiaW1cIlxyXG4gICAgICAgICBjb25zb2xlLmxvZyggYXJnMiApOyAgICAgICAgICAgLy8gXCJiYXpcIlxyXG4gICAgIH0pO1xyXG5cclxuICAgICAkKCBkb2N1bWVudCApLnRyaWdnZXIoIFwibXlDdXN0b21FdmVudFwiLCBbIFwiYmltXCIsIFwiYmF6XCIgXSApO1xyXG4gKlxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBhZGRUb0NhcnQ6IFwiZXMtYWRkVG9DYXJ0XCIsXHJcbiAgICByZW1vdmVGcm9tQ2FydDogXCJlcy1yZW1vdmVGcm9tQ2FydFwiLFxyXG4gICAgdXBkYXRlQ2FydDogXCJlcy11cGRhdGVDYXJ0XCIsXHJcbiAgICBjaGVja291dFN0ZXA6IFwiZXMtY2hlY2tvdXRTdGVwXCIsXHJcbiAgICBwdXJjaGFzZTogXCJlcy1wdXJjaGFzZVwiLFxyXG4gICAgY2hlY2tvdXRFcnJvcjogJ2VzLWNoZWNrb3V0RXJyb3InLFxyXG4gICAgY2xpY2tDaGVja291dDogXCJlcy1jbGlja0NoZWNrb3V0XCIsXHJcbiAgICBjbGlja0dvb2RzUXVhbnRpdHk6IFwiZXMtY2xpY2tHb29kc1F1YW50aXR5XCIsXHJcbiAgICBjbGlja0dvb2RzU2l6ZTogXCJlcy1jbGlja0dvb2RzU2l6ZVwiLFxyXG4gICAgY2xpY2tHb29kc1NpemVPcHRpb246IFwiZXMtY2xpY2tHb29kc1NpemVPcHRpb25cIixcclxufTsiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4vL2RlZmluZShmdW5jdGlvbihyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHtcclxuXHR2YXIgalF1ZXJ5ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG5cdFxyXG5cdC8qIVxyXG5cdCAqIGpRdWVyeSBGb3JtIFBsdWdpblxyXG5cdCAqIHZlcnNpb246IDMuNDUuMC0yMDEzLjEwLjE3XHJcblx0ICogUmVxdWlyZXMgalF1ZXJ5IHYxLjUgb3IgbGF0ZXJcclxuXHQgKiBDb3B5cmlnaHQgKGMpIDIwMTMgTS4gQWxzdXBcclxuXHQgKiBFeGFtcGxlcyBhbmQgZG9jdW1lbnRhdGlvbiBhdDogaHR0cDovL21hbHN1cC5jb20vanF1ZXJ5L2Zvcm0vXHJcblx0ICogUHJvamVjdCByZXBvc2l0b3J5OiBodHRwczovL2dpdGh1Yi5jb20vbWFsc3VwL2Zvcm1cclxuXHQgKiBEdWFsIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgYW5kIEdQTCBsaWNlbnNlcy5cclxuXHQgKiBodHRwczovL2dpdGh1Yi5jb20vbWFsc3VwL2Zvcm0jY29weXJpZ2h0LWFuZC1saWNlbnNlXHJcblx0ICovXHJcblx0LypnbG9iYWwgQWN0aXZlWE9iamVjdCAqL1xyXG5cdDsoZnVuY3Rpb24oJCkge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHQvKlxyXG5cdFx0VXNhZ2UgTm90ZTpcclxuXHRcdC0tLS0tLS0tLS0tXHJcblx0XHREbyBub3QgdXNlIGJvdGggYWpheFN1Ym1pdCBhbmQgYWpheEZvcm0gb24gdGhlIHNhbWUgZm9ybS4gIFRoZXNlXHJcblx0XHRmdW5jdGlvbnMgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZS4gIFVzZSBhamF4U3VibWl0IGlmIHlvdSB3YW50XHJcblx0XHR0byBiaW5kIHlvdXIgb3duIHN1Ym1pdCBoYW5kbGVyIHRvIHRoZSBmb3JtLiAgRm9yIGV4YW1wbGUsXHJcblxyXG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJyNteUZvcm0nKS5vbignc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTsgLy8gPC0tIGltcG9ydGFudFxyXG5cdFx0XHRcdCQodGhpcykuYWpheFN1Ym1pdCh7XHJcblx0XHRcdFx0XHR0YXJnZXQ6ICcjb3V0cHV0J1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdFVzZSBhamF4Rm9ybSB3aGVuIHlvdSB3YW50IHRoZSBwbHVnaW4gdG8gbWFuYWdlIGFsbCB0aGUgZXZlbnQgYmluZGluZ1xyXG5cdFx0Zm9yIHlvdS4gIEZvciBleGFtcGxlLFxyXG5cclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcjbXlGb3JtJykuYWpheEZvcm0oe1xyXG5cdFx0XHRcdHRhcmdldDogJyNvdXRwdXQnXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0WW91IGNhbiBhbHNvIHVzZSBhamF4Rm9ybSB3aXRoIGRlbGVnYXRpb24gKHJlcXVpcmVzIGpRdWVyeSB2MS43KyksIHNvIHRoZVxyXG5cdFx0Zm9ybSBkb2VzIG5vdCBoYXZlIHRvIGV4aXN0IHdoZW4geW91IGludm9rZSBhamF4Rm9ybTpcclxuXHJcblx0XHQkKCcjbXlGb3JtJykuYWpheEZvcm0oe1xyXG5cdFx0XHRkZWxlZ2F0aW9uOiB0cnVlLFxyXG5cdFx0XHR0YXJnZXQ6ICcjb3V0cHV0J1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0V2hlbiB1c2luZyBhamF4Rm9ybSwgdGhlIGFqYXhTdWJtaXQgZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIGZvciB5b3VcclxuXHRcdGF0IHRoZSBhcHByb3ByaWF0ZSB0aW1lLlxyXG5cdCovXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZlYXR1cmUgZGV0ZWN0aW9uXHJcblx0ICovXHJcblx0dmFyIGZlYXR1cmUgPSB7fTtcclxuXHRmZWF0dXJlLmZpbGVhcGkgPSAkKFwiPGlucHV0IHR5cGU9J2ZpbGUnLz5cIikuZ2V0KDApLmZpbGVzICE9PSB1bmRlZmluZWQ7XHJcblx0ZmVhdHVyZS5mb3JtZGF0YSA9IHdpbmRvdy5Gb3JtRGF0YSAhPT0gdW5kZWZpbmVkO1xyXG5cclxuXHR2YXIgaGFzUHJvcCA9ICEhJC5mbi5wcm9wO1xyXG5cclxuXHQvLyBhdHRyMiB1c2VzIHByb3Agd2hlbiBpdCBjYW4gYnV0IGNoZWNrcyB0aGUgcmV0dXJuIHR5cGUgZm9yXHJcblx0Ly8gYW4gZXhwZWN0ZWQgc3RyaW5nLiAgdGhpcyBhY2NvdW50cyBmb3IgdGhlIGNhc2Ugd2hlcmUgYSBmb3JtIFxyXG5cdC8vIGNvbnRhaW5zIGlucHV0cyB3aXRoIG5hbWVzIGxpa2UgXCJhY3Rpb25cIiBvciBcIm1ldGhvZFwiOyBpbiB0aG9zZVxyXG5cdC8vIGNhc2VzIFwicHJvcFwiIHJldHVybnMgdGhlIGVsZW1lbnRcclxuXHQkLmZuLmF0dHIyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoICEgaGFzUHJvcCApXHJcblx0XHRcdHJldHVybiB0aGlzLmF0dHIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdHZhciB2YWwgPSB0aGlzLnByb3AuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdGlmICggKCB2YWwgJiYgdmFsLmpxdWVyeSApIHx8IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIClcclxuXHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdHJldHVybiB0aGlzLmF0dHIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBhamF4U3VibWl0KCkgcHJvdmlkZXMgYSBtZWNoYW5pc20gZm9yIGltbWVkaWF0ZWx5IHN1Ym1pdHRpbmdcclxuXHQgKiBhbiBIVE1MIGZvcm0gdXNpbmcgQUpBWC5cclxuXHQgKi9cclxuXHQkLmZuLmFqYXhTdWJtaXQgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0XHQvKmpzaGludCBzY3JpcHR1cmw6dHJ1ZSAqL1xyXG5cclxuXHRcdC8vIGZhc3QgZmFpbCBpZiBub3RoaW5nIHNlbGVjdGVkIChodHRwOi8vZGV2LmpxdWVyeS5jb20vdGlja2V0LzI3NTIpXHJcblx0XHRpZiAoIXRoaXMubGVuZ3RoKSB7XHJcblx0XHRcdGxvZygnYWpheFN1Ym1pdDogc2tpcHBpbmcgc3VibWl0IHByb2Nlc3MgLSBubyBlbGVtZW50IHNlbGVjdGVkJyk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBtZXRob2QsIGFjdGlvbiwgdXJsLCAkZm9ybSA9IHRoaXM7XHJcblxyXG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zID09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0b3B0aW9ucyA9IHsgc3VjY2Vzczogb3B0aW9ucyB9O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoIG9wdGlvbnMgPT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0b3B0aW9ucyA9IHt9O1xyXG5cdFx0fVxyXG5cclxuXHRcdG1ldGhvZCA9IG9wdGlvbnMudHlwZSB8fCB0aGlzLmF0dHIyKCdtZXRob2QnKTtcclxuXHRcdGFjdGlvbiA9IG9wdGlvbnMudXJsICB8fCB0aGlzLmF0dHIyKCdhY3Rpb24nKTtcclxuXHJcblx0XHR1cmwgPSAodHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycpID8gJC50cmltKGFjdGlvbikgOiAnJztcclxuXHRcdHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZiB8fCAnJztcclxuXHRcdGlmICh1cmwpIHtcclxuXHRcdFx0Ly8gY2xlYW4gdXJsIChkb24ndCBpbmNsdWRlIGhhc2ggdmF1ZSlcclxuXHRcdFx0dXJsID0gKHVybC5tYXRjaCgvXihbXiNdKykvKXx8W10pWzFdO1xyXG5cdFx0fVxyXG5cclxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7XHJcblx0XHRcdHVybDogIHVybCxcclxuXHRcdFx0c3VjY2VzczogJC5hamF4U2V0dGluZ3Muc3VjY2VzcyxcclxuXHRcdFx0dHlwZTogbWV0aG9kIHx8ICQuYWpheFNldHRpbmdzLnR5cGUsXHJcblx0XHRcdGlmcmFtZVNyYzogL15odHRwcy9pLnRlc3Qod2luZG93LmxvY2F0aW9uLmhyZWYgfHwgJycpID8gJ2phdmFzY3JpcHQ6ZmFsc2UnIDogJ2Fib3V0OmJsYW5rJ1xyXG5cdFx0fSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0Ly8gaG9vayBmb3IgbWFuaXB1bGF0aW5nIHRoZSBmb3JtIGRhdGEgYmVmb3JlIGl0IGlzIGV4dHJhY3RlZDtcclxuXHRcdC8vIGNvbnZlbmllbnQgZm9yIHVzZSB3aXRoIHJpY2ggZWRpdG9ycyBsaWtlIHRpbnlNQ0Ugb3IgRkNLRWRpdG9yXHJcblx0XHR2YXIgdmV0byA9IHt9O1xyXG5cdFx0dGhpcy50cmlnZ2VyKCdmb3JtLXByZS1zZXJpYWxpemUnLCBbdGhpcywgb3B0aW9ucywgdmV0b10pO1xyXG5cdFx0aWYgKHZldG8udmV0bykge1xyXG5cdFx0XHRsb2coJ2FqYXhTdWJtaXQ6IHN1Ym1pdCB2ZXRvZWQgdmlhIGZvcm0tcHJlLXNlcmlhbGl6ZSB0cmlnZ2VyJyk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHByb3ZpZGUgb3Bwb3J0dW5pdHkgdG8gYWx0ZXIgZm9ybSBkYXRhIGJlZm9yZSBpdCBpcyBzZXJpYWxpemVkXHJcblx0XHRpZiAob3B0aW9ucy5iZWZvcmVTZXJpYWxpemUgJiYgb3B0aW9ucy5iZWZvcmVTZXJpYWxpemUodGhpcywgb3B0aW9ucykgPT09IGZhbHNlKSB7XHJcblx0XHRcdGxvZygnYWpheFN1Ym1pdDogc3VibWl0IGFib3J0ZWQgdmlhIGJlZm9yZVNlcmlhbGl6ZSBjYWxsYmFjaycpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgdHJhZGl0aW9uYWwgPSBvcHRpb25zLnRyYWRpdGlvbmFsO1xyXG5cdFx0aWYgKCB0cmFkaXRpb25hbCA9PT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHR0cmFkaXRpb25hbCA9ICQuYWpheFNldHRpbmdzLnRyYWRpdGlvbmFsO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBlbGVtZW50cyA9IFtdO1xyXG5cdFx0dmFyIHF4LCBhID0gdGhpcy5mb3JtVG9BcnJheShvcHRpb25zLnNlbWFudGljLCBlbGVtZW50cyk7XHJcblx0XHRpZiAob3B0aW9ucy5kYXRhKSB7XHJcblx0XHRcdG9wdGlvbnMuZXh0cmFEYXRhID0gb3B0aW9ucy5kYXRhO1xyXG5cdFx0XHRxeCA9ICQucGFyYW0ob3B0aW9ucy5kYXRhLCB0cmFkaXRpb25hbCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZ2l2ZSBwcmUtc3VibWl0IGNhbGxiYWNrIGFuIG9wcG9ydHVuaXR5IHRvIGFib3J0IHRoZSBzdWJtaXRcclxuXHRcdGlmIChvcHRpb25zLmJlZm9yZVN1Ym1pdCAmJiBvcHRpb25zLmJlZm9yZVN1Ym1pdChhLCB0aGlzLCBvcHRpb25zKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0bG9nKCdhamF4U3VibWl0OiBzdWJtaXQgYWJvcnRlZCB2aWEgYmVmb3JlU3VibWl0IGNhbGxiYWNrJyk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGZpcmUgdmV0b2FibGUgJ3ZhbGlkYXRlJyBldmVudFxyXG5cdFx0dGhpcy50cmlnZ2VyKCdmb3JtLXN1Ym1pdC12YWxpZGF0ZScsIFthLCB0aGlzLCBvcHRpb25zLCB2ZXRvXSk7XHJcblx0XHRpZiAodmV0by52ZXRvKSB7XHJcblx0XHRcdGxvZygnYWpheFN1Ym1pdDogc3VibWl0IHZldG9lZCB2aWEgZm9ybS1zdWJtaXQtdmFsaWRhdGUgdHJpZ2dlcicpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgcSA9ICQucGFyYW0oYSwgdHJhZGl0aW9uYWwpO1xyXG5cdFx0aWYgKHF4KSB7XHJcblx0XHRcdHEgPSAoIHEgPyAocSArICcmJyArIHF4KSA6IHF4ICk7XHJcblx0XHR9XHJcblx0XHRpZiAob3B0aW9ucy50eXBlLnRvVXBwZXJDYXNlKCkgPT0gJ0dFVCcpIHtcclxuXHRcdFx0b3B0aW9ucy51cmwgKz0gKG9wdGlvbnMudXJsLmluZGV4T2YoJz8nKSA+PSAwID8gJyYnIDogJz8nKSArIHE7XHJcblx0XHRcdG9wdGlvbnMuZGF0YSA9IG51bGw7ICAvLyBkYXRhIGlzIG51bGwgZm9yICdnZXQnXHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0b3B0aW9ucy5kYXRhID0gcTsgLy8gZGF0YSBpcyB0aGUgcXVlcnkgc3RyaW5nIGZvciAncG9zdCdcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgY2FsbGJhY2tzID0gW107XHJcblx0XHRpZiAob3B0aW9ucy5yZXNldEZvcm0pIHtcclxuXHRcdFx0Y2FsbGJhY2tzLnB1c2goZnVuY3Rpb24oKSB7ICRmb3JtLnJlc2V0Rm9ybSgpOyB9KTtcclxuXHRcdH1cclxuXHRcdGlmIChvcHRpb25zLmNsZWFyRm9ybSkge1xyXG5cdFx0XHRjYWxsYmFja3MucHVzaChmdW5jdGlvbigpIHsgJGZvcm0uY2xlYXJGb3JtKG9wdGlvbnMuaW5jbHVkZUhpZGRlbik7IH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHBlcmZvcm0gYSBsb2FkIG9uIHRoZSB0YXJnZXQgb25seSBpZiBkYXRhVHlwZSBpcyBub3QgcHJvdmlkZWRcclxuXHRcdGlmICghb3B0aW9ucy5kYXRhVHlwZSAmJiBvcHRpb25zLnRhcmdldCkge1xyXG5cdFx0XHR2YXIgb2xkU3VjY2VzcyA9IG9wdGlvbnMuc3VjY2VzcyB8fCBmdW5jdGlvbigpe307XHJcblx0XHRcdGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHR2YXIgZm4gPSBvcHRpb25zLnJlcGxhY2VUYXJnZXQgPyAncmVwbGFjZVdpdGgnIDogJ2h0bWwnO1xyXG5cdFx0XHRcdCQob3B0aW9ucy50YXJnZXQpW2ZuXShkYXRhKS5lYWNoKG9sZFN1Y2Nlc3MsIGFyZ3VtZW50cyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XHJcblx0XHRcdGNhbGxiYWNrcy5wdXNoKG9wdGlvbnMuc3VjY2Vzcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0b3B0aW9ucy5zdWNjZXNzID0gZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHsgLy8galF1ZXJ5IDEuNCsgcGFzc2VzIHhociBhcyAzcmQgYXJnXHJcblx0XHRcdHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0IHx8IHRoaXMgOyAgICAvLyBqUXVlcnkgMS40KyBzdXBwb3J0cyBzY29wZSBjb250ZXh0XHJcblx0XHRcdGZvciAodmFyIGk9MCwgbWF4PWNhbGxiYWNrcy5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xyXG5cdFx0XHRcdGNhbGxiYWNrc1tpXS5hcHBseShjb250ZXh0LCBbZGF0YSwgc3RhdHVzLCB4aHIgfHwgJGZvcm0sICRmb3JtXSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMuZXJyb3IpIHtcclxuXHRcdFx0dmFyIG9sZEVycm9yID0gb3B0aW9ucy5lcnJvcjtcclxuXHRcdFx0b3B0aW9ucy5lcnJvciA9IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG5cdFx0XHRcdHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0IHx8IHRoaXM7XHJcblx0XHRcdFx0b2xkRXJyb3IuYXBwbHkoY29udGV4dCwgW3hociwgc3RhdHVzLCBlcnJvciwgJGZvcm1dKTtcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHQgaWYgKG9wdGlvbnMuY29tcGxldGUpIHtcclxuXHRcdFx0dmFyIG9sZENvbXBsZXRlID0gb3B0aW9ucy5jb21wbGV0ZTtcclxuXHRcdFx0b3B0aW9ucy5jb21wbGV0ZSA9IGZ1bmN0aW9uKHhociwgc3RhdHVzKSB7XHJcblx0XHRcdFx0dmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgfHwgdGhpcztcclxuXHRcdFx0XHRvbGRDb21wbGV0ZS5hcHBseShjb250ZXh0LCBbeGhyLCBzdGF0dXMsICRmb3JtXSk7XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYXJlIHRoZXJlIGZpbGVzIHRvIHVwbG9hZD9cclxuXHJcblx0XHQvLyBbdmFsdWVdIChpc3N1ZSAjMTEzKSwgYWxzbyBzZWUgY29tbWVudDpcclxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYWxzdXAvZm9ybS9jb21taXQvNTg4MzA2YWVkYmExZGUwMTM4ODAzMmQ1ZjQyYTYwMTU5ZWVhOTIyOCNjb21taXRjb21tZW50LTIxODAyMTlcclxuXHRcdHZhciBmaWxlSW5wdXRzID0gJCgnaW5wdXRbdHlwZT1maWxlXTplbmFibGVkJywgdGhpcykuZmlsdGVyKGZ1bmN0aW9uKCkgeyByZXR1cm4gJCh0aGlzKS52YWwoKSAhPT0gJyc7IH0pO1xyXG5cclxuXHRcdHZhciBoYXNGaWxlSW5wdXRzID0gZmlsZUlucHV0cy5sZW5ndGggPiAwO1xyXG5cdFx0dmFyIG1wID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xyXG5cdFx0dmFyIG11bHRpcGFydCA9ICgkZm9ybS5hdHRyKCdlbmN0eXBlJykgPT0gbXAgfHwgJGZvcm0uYXR0cignZW5jb2RpbmcnKSA9PSBtcCk7XHJcblxyXG5cdFx0dmFyIGZpbGVBUEkgPSBmZWF0dXJlLmZpbGVhcGkgJiYgZmVhdHVyZS5mb3JtZGF0YTtcclxuXHRcdGxvZyhcImZpbGVBUEkgOlwiICsgZmlsZUFQSSk7XHJcblx0XHR2YXIgc2hvdWxkVXNlRnJhbWUgPSAoaGFzRmlsZUlucHV0cyB8fCBtdWx0aXBhcnQpICYmICFmaWxlQVBJO1xyXG5cclxuXHRcdHZhciBqcXhocjtcclxuXHJcblx0XHQvLyBvcHRpb25zLmlmcmFtZSBhbGxvd3MgdXNlciB0byBmb3JjZSBpZnJhbWUgbW9kZVxyXG5cdFx0Ly8gMDYtTk9WLTA5OiBub3cgZGVmYXVsdGluZyB0byBpZnJhbWUgbW9kZSBpZiBmaWxlIGlucHV0IGlzIGRldGVjdGVkXHJcblx0XHRpZiAob3B0aW9ucy5pZnJhbWUgIT09IGZhbHNlICYmIChvcHRpb25zLmlmcmFtZSB8fCBzaG91bGRVc2VGcmFtZSkpIHtcclxuXHRcdFx0Ly8gaGFjayB0byBmaXggU2FmYXJpIGhhbmcgKHRoYW5rcyB0byBUaW0gTW9sZW5kaWprIGZvciB0aGlzKVxyXG5cdFx0XHQvLyBzZWU6ICBodHRwOi8vZ3JvdXBzLmdvb2dsZS5jb20vZ3JvdXAvanF1ZXJ5LWRldi9icm93c2VfdGhyZWFkL3RocmVhZC8zNjM5NWI3YWI1MTBkZDVkXHJcblx0XHRcdGlmIChvcHRpb25zLmNsb3NlS2VlcEFsaXZlKSB7XHJcblx0XHRcdFx0JC5nZXQob3B0aW9ucy5jbG9zZUtlZXBBbGl2ZSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRqcXhociA9IGZpbGVVcGxvYWRJZnJhbWUoYSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0anF4aHIgPSBmaWxlVXBsb2FkSWZyYW1lKGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICgoaGFzRmlsZUlucHV0cyB8fCBtdWx0aXBhcnQpICYmIGZpbGVBUEkpIHtcclxuXHRcdFx0anF4aHIgPSBmaWxlVXBsb2FkWGhyKGEpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGpxeGhyID0gJC5hamF4KG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRmb3JtLnJlbW92ZURhdGEoJ2pxeGhyJykuZGF0YSgnanF4aHInLCBqcXhocik7XHJcblxyXG5cdFx0Ly8gY2xlYXIgZWxlbWVudCBhcnJheVxyXG5cdFx0Zm9yICh2YXIgaz0wOyBrIDwgZWxlbWVudHMubGVuZ3RoOyBrKyspXHJcblx0XHRcdGVsZW1lbnRzW2tdID0gbnVsbDtcclxuXHJcblx0XHQvLyBmaXJlICdub3RpZnknIGV2ZW50XHJcblx0XHR0aGlzLnRyaWdnZXIoJ2Zvcm0tc3VibWl0LW5vdGlmeScsIFt0aGlzLCBvcHRpb25zXSk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0XHQvLyB1dGlsaXR5IGZuIGZvciBkZWVwIHNlcmlhbGl6YXRpb25cclxuXHRcdGZ1bmN0aW9uIGRlZXBTZXJpYWxpemUoZXh0cmFEYXRhKXtcclxuXHRcdFx0dmFyIHNlcmlhbGl6ZWQgPSAkLnBhcmFtKGV4dHJhRGF0YSwgb3B0aW9ucy50cmFkaXRpb25hbCkuc3BsaXQoJyYnKTtcclxuXHRcdFx0dmFyIGxlbiA9IHNlcmlhbGl6ZWQubGVuZ3RoO1xyXG5cdFx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRcdHZhciBpLCBwYXJ0O1xyXG5cdFx0XHRmb3IgKGk9MDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0Ly8gIzI1MjsgdW5kbyBwYXJhbSBzcGFjZSByZXBsYWNlbWVudFxyXG5cdFx0XHRcdHNlcmlhbGl6ZWRbaV0gPSBzZXJpYWxpemVkW2ldLnJlcGxhY2UoL1xcKy9nLCcgJyk7XHJcblx0XHRcdFx0cGFydCA9IHNlcmlhbGl6ZWRbaV0uc3BsaXQoJz0nKTtcclxuXHRcdFx0XHQvLyAjMjc4OyB1c2UgYXJyYXkgaW5zdGVhZCBvZiBvYmplY3Qgc3RvcmFnZSwgZmF2b3JpbmcgYXJyYXkgc2VyaWFsaXphdGlvbnNcclxuXHRcdFx0XHRyZXN1bHQucHVzaChbZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRbMF0pLCBkZWNvZGVVUklDb21wb25lbnQocGFydFsxXSldKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cclxuXHRcdCAvLyBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyIGZpbGUgdXBsb2FkcyAoYmlnIGhhdCB0aXAgdG8gZnJhbmNvaXMybWV0eilcclxuXHRcdGZ1bmN0aW9uIGZpbGVVcGxvYWRYaHIoYSkge1xyXG5cdFx0XHR2YXIgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcblx0XHRcdGZvciAodmFyIGk9MDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRmb3JtZGF0YS5hcHBlbmQoYVtpXS5uYW1lLCBhW2ldLnZhbHVlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG9wdGlvbnMuZXh0cmFEYXRhKSB7XHJcblx0XHRcdFx0dmFyIHNlcmlhbGl6ZWREYXRhID0gZGVlcFNlcmlhbGl6ZShvcHRpb25zLmV4dHJhRGF0YSk7XHJcblx0XHRcdFx0Zm9yIChpPTA7IGkgPCBzZXJpYWxpemVkRGF0YS5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHRcdGlmIChzZXJpYWxpemVkRGF0YVtpXSlcclxuXHRcdFx0XHRcdFx0Zm9ybWRhdGEuYXBwZW5kKHNlcmlhbGl6ZWREYXRhW2ldWzBdLCBzZXJpYWxpemVkRGF0YVtpXVsxXSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG9wdGlvbnMuZGF0YSA9IG51bGw7XHJcblxyXG5cdFx0XHR2YXIgcyA9ICQuZXh0ZW5kKHRydWUsIHt9LCAkLmFqYXhTZXR0aW5ncywgb3B0aW9ucywge1xyXG5cdFx0XHRcdGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuXHRcdFx0XHRwcm9jZXNzRGF0YTogZmFsc2UsXHJcblx0XHRcdFx0Y2FjaGU6IGZhbHNlLFxyXG5cdFx0XHRcdHR5cGU6IG1ldGhvZCB8fCAnUE9TVCdcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAob3B0aW9ucy51cGxvYWRQcm9ncmVzcykge1xyXG5cdFx0XHRcdC8vIHdvcmthcm91bmQgYmVjYXVzZSBqcVhIUiBkb2VzIG5vdCBleHBvc2UgdXBsb2FkIHByb3BlcnR5XHJcblx0XHRcdFx0cy54aHIgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHZhciB4aHIgPSAkLmFqYXhTZXR0aW5ncy54aHIoKTtcclxuXHRcdFx0XHRcdGlmICh4aHIudXBsb2FkKSB7XHJcblx0XHRcdFx0XHRcdHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBwZXJjZW50ID0gMDtcclxuXHRcdFx0XHRcdFx0XHR2YXIgcG9zaXRpb24gPSBldmVudC5sb2FkZWQgfHwgZXZlbnQucG9zaXRpb247IC8qZXZlbnQucG9zaXRpb24gaXMgZGVwcmVjYXRlZCovXHJcblx0XHRcdFx0XHRcdFx0dmFyIHRvdGFsID0gZXZlbnQudG90YWw7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHBlcmNlbnQgPSBNYXRoLmNlaWwocG9zaXRpb24gLyB0b3RhbCAqIDEwMCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMudXBsb2FkUHJvZ3Jlc3MoZXZlbnQsIHBvc2l0aW9uLCB0b3RhbCwgcGVyY2VudCk7XHJcblx0XHRcdFx0XHRcdH0sIGZhbHNlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiB4aHI7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cy5kYXRhID0gbnVsbDtcclxuXHRcdFx0dmFyIGJlZm9yZVNlbmQgPSBzLmJlZm9yZVNlbmQ7XHJcblx0XHRcdHMuYmVmb3JlU2VuZCA9IGZ1bmN0aW9uKHhociwgbykge1xyXG5cdFx0XHRcdC8vU2VuZCBGb3JtRGF0YSgpIHByb3ZpZGVkIGJ5IHVzZXJcclxuXHRcdFx0XHRpZiAob3B0aW9ucy5mb3JtRGF0YSlcclxuXHRcdFx0XHRcdG8uZGF0YSA9IG9wdGlvbnMuZm9ybURhdGE7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0by5kYXRhID0gZm9ybWRhdGE7XHJcblx0XHRcdFx0aWYoYmVmb3JlU2VuZClcclxuXHRcdFx0XHRcdGJlZm9yZVNlbmQuY2FsbCh0aGlzLCB4aHIsIG8pO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4gJC5hamF4KHMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHByaXZhdGUgZnVuY3Rpb24gZm9yIGhhbmRsaW5nIGZpbGUgdXBsb2FkcyAoaGF0IHRpcCB0byBZQUhPTyEpXHJcblx0XHRmdW5jdGlvbiBmaWxlVXBsb2FkSWZyYW1lKGEpIHtcclxuXHRcdFx0dmFyIGZvcm0gPSAkZm9ybVswXSwgZWwsIGksIHMsIGcsIGlkLCAkaW8sIGlvLCB4aHIsIHN1YiwgbiwgdGltZWRPdXQsIHRpbWVvdXRIYW5kbGU7XHJcblx0XHRcdHZhciBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcclxuXHJcblx0XHRcdC8vICMzNDFcclxuXHRcdFx0ZGVmZXJyZWQuYWJvcnQgPSBmdW5jdGlvbihzdGF0dXMpIHtcclxuXHRcdFx0XHR4aHIuYWJvcnQoc3RhdHVzKTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGlmIChhKSB7XHJcblx0XHRcdFx0Ly8gZW5zdXJlIHRoYXQgZXZlcnkgc2VyaWFsaXplZCBpbnB1dCBpcyBzdGlsbCBlbmFibGVkXHJcblx0XHRcdFx0Zm9yIChpPTA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0ZWwgPSAkKGVsZW1lbnRzW2ldKTtcclxuXHRcdFx0XHRcdGlmICggaGFzUHJvcCApXHJcblx0XHRcdFx0XHRcdGVsLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRlbC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cyA9ICQuZXh0ZW5kKHRydWUsIHt9LCAkLmFqYXhTZXR0aW5ncywgb3B0aW9ucyk7XHJcblx0XHRcdHMuY29udGV4dCA9IHMuY29udGV4dCB8fCBzO1xyXG5cdFx0XHRpZCA9ICdqcUZvcm1JTycgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xyXG5cdFx0XHRpZiAocy5pZnJhbWVUYXJnZXQpIHtcclxuXHRcdFx0XHQkaW8gPSAkKHMuaWZyYW1lVGFyZ2V0KTtcclxuXHRcdFx0XHRuID0gJGlvLmF0dHIyKCduYW1lJyk7XHJcblx0XHRcdFx0aWYgKCFuKVxyXG5cdFx0XHRcdFx0ICRpby5hdHRyMignbmFtZScsIGlkKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRpZCA9IG47XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0JGlvID0gJCgnPGlmcmFtZSBuYW1lPVwiJyArIGlkICsgJ1wiIHNyYz1cIicrIHMuaWZyYW1lU3JjICsnXCIgLz4nKTtcclxuXHRcdFx0XHQkaW8uY3NzKHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJy0xMDAwcHgnLCBsZWZ0OiAnLTEwMDBweCcgfSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aW8gPSAkaW9bMF07XHJcblxyXG5cclxuXHRcdFx0eGhyID0geyAvLyBtb2NrIG9iamVjdFxyXG5cdFx0XHRcdGFib3J0ZWQ6IDAsXHJcblx0XHRcdFx0cmVzcG9uc2VUZXh0OiBudWxsLFxyXG5cdFx0XHRcdHJlc3BvbnNlWE1MOiBudWxsLFxyXG5cdFx0XHRcdHN0YXR1czogMCxcclxuXHRcdFx0XHRzdGF0dXNUZXh0OiAnbi9hJyxcclxuXHRcdFx0XHRnZXRBbGxSZXNwb25zZUhlYWRlcnM6IGZ1bmN0aW9uKCkge30sXHJcblx0XHRcdFx0Z2V0UmVzcG9uc2VIZWFkZXI6IGZ1bmN0aW9uKCkge30sXHJcblx0XHRcdFx0c2V0UmVxdWVzdEhlYWRlcjogZnVuY3Rpb24oKSB7fSxcclxuXHRcdFx0XHRhYm9ydDogZnVuY3Rpb24oc3RhdHVzKSB7XHJcblx0XHRcdFx0XHR2YXIgZSA9IChzdGF0dXMgPT09ICd0aW1lb3V0JyA/ICd0aW1lb3V0JyA6ICdhYm9ydGVkJyk7XHJcblx0XHRcdFx0XHRsb2coJ2Fib3J0aW5nIHVwbG9hZC4uLiAnICsgZSk7XHJcblx0XHRcdFx0XHR0aGlzLmFib3J0ZWQgPSAxO1xyXG5cclxuXHRcdFx0XHRcdHRyeSB7IC8vICMyMTQsICMyNTdcclxuXHRcdFx0XHRcdFx0aWYgKGlvLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZXhlY0NvbW1hbmQpIHtcclxuXHRcdFx0XHRcdFx0XHRpby5jb250ZW50V2luZG93LmRvY3VtZW50LmV4ZWNDb21tYW5kKCdTdG9wJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNhdGNoKGlnbm9yZSkge31cclxuXHJcblx0XHRcdFx0XHQkaW8uYXR0cignc3JjJywgcy5pZnJhbWVTcmMpOyAvLyBhYm9ydCBvcCBpbiBwcm9ncmVzc1xyXG5cdFx0XHRcdFx0eGhyLmVycm9yID0gZTtcclxuXHRcdFx0XHRcdGlmIChzLmVycm9yKVxyXG5cdFx0XHRcdFx0XHRzLmVycm9yLmNhbGwocy5jb250ZXh0LCB4aHIsIGUsIHN0YXR1cyk7XHJcblx0XHRcdFx0XHRpZiAoZylcclxuXHRcdFx0XHRcdFx0JC5ldmVudC50cmlnZ2VyKFwiYWpheEVycm9yXCIsIFt4aHIsIHMsIGVdKTtcclxuXHRcdFx0XHRcdGlmIChzLmNvbXBsZXRlKVxyXG5cdFx0XHRcdFx0XHRzLmNvbXBsZXRlLmNhbGwocy5jb250ZXh0LCB4aHIsIGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGcgPSBzLmdsb2JhbDtcclxuXHRcdFx0Ly8gdHJpZ2dlciBhamF4IGdsb2JhbCBldmVudHMgc28gdGhhdCBhY3Rpdml0eS9ibG9jayBpbmRpY2F0b3JzIHdvcmsgbGlrZSBub3JtYWxcclxuXHRcdFx0aWYgKGcgJiYgMCA9PT0gJC5hY3RpdmUrKykge1xyXG5cdFx0XHRcdCQuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZykge1xyXG5cdFx0XHRcdCQuZXZlbnQudHJpZ2dlcihcImFqYXhTZW5kXCIsIFt4aHIsIHNdKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHMuYmVmb3JlU2VuZCAmJiBzLmJlZm9yZVNlbmQuY2FsbChzLmNvbnRleHQsIHhociwgcykgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0aWYgKHMuZ2xvYmFsKSB7XHJcblx0XHRcdFx0XHQkLmFjdGl2ZS0tO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoKTtcclxuXHRcdFx0XHRyZXR1cm4gZGVmZXJyZWQ7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHhoci5hYm9ydGVkKSB7XHJcblx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KCk7XHJcblx0XHRcdFx0cmV0dXJuIGRlZmVycmVkO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBhZGQgc3VibWl0dGluZyBlbGVtZW50IHRvIGRhdGEgaWYgd2Uga25vdyBpdFxyXG5cdFx0XHRzdWIgPSBmb3JtLmNsaztcclxuXHRcdFx0aWYgKHN1Yikge1xyXG5cdFx0XHRcdG4gPSBzdWIubmFtZTtcclxuXHRcdFx0XHRpZiAobiAmJiAhc3ViLmRpc2FibGVkKSB7XHJcblx0XHRcdFx0XHRzLmV4dHJhRGF0YSA9IHMuZXh0cmFEYXRhIHx8IHt9O1xyXG5cdFx0XHRcdFx0cy5leHRyYURhdGFbbl0gPSBzdWIudmFsdWU7XHJcblx0XHRcdFx0XHRpZiAoc3ViLnR5cGUgPT0gXCJpbWFnZVwiKSB7XHJcblx0XHRcdFx0XHRcdHMuZXh0cmFEYXRhW24rJy54J10gPSBmb3JtLmNsa194O1xyXG5cdFx0XHRcdFx0XHRzLmV4dHJhRGF0YVtuKycueSddID0gZm9ybS5jbGtfeTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBDTElFTlRfVElNRU9VVF9BQk9SVCA9IDE7XHJcblx0XHRcdHZhciBTRVJWRVJfQUJPUlQgPSAyO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdGZ1bmN0aW9uIGdldERvYyhmcmFtZSkge1xyXG5cdFx0XHRcdC8qIGl0IGxvb2tzIGxpa2UgY29udGVudFdpbmRvdyBvciBjb250ZW50RG9jdW1lbnQgZG8gbm90XHJcblx0XHRcdFx0ICogY2FycnkgdGhlIHByb3RvY29sIHByb3BlcnR5IGluIGllOCwgd2hlbiBydW5uaW5nIHVuZGVyIHNzbFxyXG5cdFx0XHRcdCAqIGZyYW1lLmRvY3VtZW50IGlzIHRoZSBvbmx5IHZhbGlkIHJlc3BvbnNlIGRvY3VtZW50LCBzaW5jZVxyXG5cdFx0XHRcdCAqIHRoZSBwcm90b2NvbCBpcyBrbm93IGJ1dCBub3Qgb24gdGhlIG90aGVyIHR3byBvYmplY3RzLiBzdHJhbmdlP1xyXG5cdFx0XHRcdCAqIFwiU2FtZSBvcmlnaW4gcG9saWN5XCIgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TYW1lX29yaWdpbl9wb2xpY3lcclxuXHRcdFx0XHQgKi9cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgZG9jID0gbnVsbDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBJRTggY2FzY2FkaW5nIGFjY2VzcyBjaGVja1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRpZiAoZnJhbWUuY29udGVudFdpbmRvdykge1xyXG5cdFx0XHRcdFx0XHRkb2MgPSBmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gY2F0Y2goZXJyKSB7XHJcblx0XHRcdFx0XHQvLyBJRTggYWNjZXNzIGRlbmllZCB1bmRlciBzc2wgJiBtaXNzaW5nIHByb3RvY29sXHJcblx0XHRcdFx0XHRsb2coJ2Nhbm5vdCBnZXQgaWZyYW1lLmNvbnRlbnRXaW5kb3cgZG9jdW1lbnQ6ICcgKyBlcnIpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGRvYykgeyAvLyBzdWNjZXNzZnVsIGdldHRpbmcgY29udGVudFxyXG5cdFx0XHRcdFx0cmV0dXJuIGRvYztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRyeSB7IC8vIHNpbXBseSBjaGVja2luZyBtYXkgdGhyb3cgaW4gaWU4IHVuZGVyIHNzbCBvciBtaXNtYXRjaGVkIHByb3RvY29sXHJcblx0XHRcdFx0XHRkb2MgPSBmcmFtZS5jb250ZW50RG9jdW1lbnQgPyBmcmFtZS5jb250ZW50RG9jdW1lbnQgOiBmcmFtZS5kb2N1bWVudDtcclxuXHRcdFx0XHR9IGNhdGNoKGVycikge1xyXG5cdFx0XHRcdFx0Ly8gbGFzdCBhdHRlbXB0XHJcblx0XHRcdFx0XHRsb2coJ2Nhbm5vdCBnZXQgaWZyYW1lLmNvbnRlbnREb2N1bWVudDogJyArIGVycik7XHJcblx0XHRcdFx0XHRkb2MgPSBmcmFtZS5kb2N1bWVudDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGRvYztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gUmFpbHMgQ1NSRiBoYWNrICh0aGFua3MgdG8gWXZhbiBCYXJ0aGVsZW15KVxyXG5cdFx0XHR2YXIgY3NyZl90b2tlbiA9ICQoJ21ldGFbbmFtZT1jc3JmLXRva2VuXScpLmF0dHIoJ2NvbnRlbnQnKTtcclxuXHRcdFx0dmFyIGNzcmZfcGFyYW0gPSAkKCdtZXRhW25hbWU9Y3NyZi1wYXJhbV0nKS5hdHRyKCdjb250ZW50Jyk7XHJcblx0XHRcdGlmIChjc3JmX3BhcmFtICYmIGNzcmZfdG9rZW4pIHtcclxuXHRcdFx0XHRzLmV4dHJhRGF0YSA9IHMuZXh0cmFEYXRhIHx8IHt9O1xyXG5cdFx0XHRcdHMuZXh0cmFEYXRhW2NzcmZfcGFyYW1dID0gY3NyZl90b2tlbjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gdGFrZSBhIGJyZWF0aCBzbyB0aGF0IHBlbmRpbmcgcmVwYWludHMgZ2V0IHNvbWUgY3B1IHRpbWUgYmVmb3JlIHRoZSB1cGxvYWQgc3RhcnRzXHJcblx0XHRcdGZ1bmN0aW9uIGRvU3VibWl0KCkge1xyXG5cdFx0XHRcdC8vIG1ha2Ugc3VyZSBmb3JtIGF0dHJzIGFyZSBzZXRcclxuXHRcdFx0XHR2YXIgdCA9ICRmb3JtLmF0dHIyKCd0YXJnZXQnKSwgYSA9ICRmb3JtLmF0dHIyKCdhY3Rpb24nKTtcclxuXHJcblx0XHRcdFx0Ly8gdXBkYXRlIGZvcm0gYXR0cnMgaW4gSUUgZnJpZW5kbHkgd2F5XHJcblx0XHRcdFx0Zm9ybS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsaWQpO1xyXG5cdFx0XHRcdGlmICghbWV0aG9kIHx8IC9wb3N0L2kudGVzdChtZXRob2QpICkge1xyXG5cdFx0XHRcdFx0Zm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdQT1NUJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChhICE9IHMudXJsKSB7XHJcblx0XHRcdFx0XHRmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgcy51cmwpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gaWUgYm9ya3MgaW4gc29tZSBjYXNlcyB3aGVuIHNldHRpbmcgZW5jb2RpbmdcclxuXHRcdFx0XHRpZiAoISBzLnNraXBFbmNvZGluZ092ZXJyaWRlICYmICghbWV0aG9kIHx8IC9wb3N0L2kudGVzdChtZXRob2QpKSkge1xyXG5cdFx0XHRcdFx0JGZvcm0uYXR0cih7XHJcblx0XHRcdFx0XHRcdGVuY29kaW5nOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXHJcblx0XHRcdFx0XHRcdGVuY3R5cGU6ICAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gc3VwcG9ydCB0aW1vdXRcclxuXHRcdFx0XHRpZiAocy50aW1lb3V0KSB7XHJcblx0XHRcdFx0XHR0aW1lb3V0SGFuZGxlID0gc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGltZWRPdXQgPSB0cnVlOyBjYihDTElFTlRfVElNRU9VVF9BQk9SVCk7IH0sIHMudGltZW91dCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBsb29rIGZvciBzZXJ2ZXIgYWJvcnRzXHJcblx0XHRcdFx0ZnVuY3Rpb24gY2hlY2tTdGF0ZSgpIHtcclxuXHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdHZhciBzdGF0ZSA9IGdldERvYyhpbykucmVhZHlTdGF0ZTtcclxuXHRcdFx0XHRcdFx0bG9nKCdzdGF0ZSA9ICcgKyBzdGF0ZSk7XHJcblx0XHRcdFx0XHRcdGlmIChzdGF0ZSAmJiBzdGF0ZS50b0xvd2VyQ2FzZSgpID09ICd1bmluaXRpYWxpemVkJylcclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdGUsNTApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y2F0Y2goZSkge1xyXG5cdFx0XHRcdFx0XHRsb2coJ1NlcnZlciBhYm9ydDogJyAsIGUsICcgKCcsIGUubmFtZSwgJyknKTtcclxuXHRcdFx0XHRcdFx0Y2IoU0VSVkVSX0FCT1JUKTtcclxuXHRcdFx0XHRcdFx0aWYgKHRpbWVvdXRIYW5kbGUpXHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXRIYW5kbGUpO1xyXG5cdFx0XHRcdFx0XHR0aW1lb3V0SGFuZGxlID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gYWRkIFwiZXh0cmFcIiBkYXRhIHRvIGZvcm0gaWYgcHJvdmlkZWQgaW4gb3B0aW9uc1xyXG5cdFx0XHRcdHZhciBleHRyYUlucHV0cyA9IFtdO1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRpZiAocy5leHRyYURhdGEpIHtcclxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgbiBpbiBzLmV4dHJhRGF0YSkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChzLmV4dHJhRGF0YS5oYXNPd25Qcm9wZXJ0eShuKSkge1xyXG5cdFx0XHRcdFx0XHRcdCAgIC8vIGlmIHVzaW5nIHRoZSAkLnBhcmFtIGZvcm1hdCB0aGF0IGFsbG93cyBmb3IgbXVsdGlwbGUgdmFsdWVzIHdpdGggdGhlIHNhbWUgbmFtZVxyXG5cdFx0XHRcdFx0XHRcdCAgIGlmKCQuaXNQbGFpbk9iamVjdChzLmV4dHJhRGF0YVtuXSkgJiYgcy5leHRyYURhdGFbbl0uaGFzT3duUHJvcGVydHkoJ25hbWUnKSAmJiBzLmV4dHJhRGF0YVtuXS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgZXh0cmFJbnB1dHMucHVzaChcclxuXHRcdFx0XHRcdFx0XHRcdCAgICQoJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIicrcy5leHRyYURhdGFbbl0ubmFtZSsnXCI+JykudmFsKHMuZXh0cmFEYXRhW25dLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAuYXBwZW5kVG8oZm9ybSlbMF0pO1xyXG5cdFx0XHRcdFx0XHRcdCAgIH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHQgICBleHRyYUlucHV0cy5wdXNoKFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiJytuKydcIj4nKS52YWwocy5leHRyYURhdGFbbl0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgIC5hcHBlbmRUbyhmb3JtKVswXSk7XHJcblx0XHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICghcy5pZnJhbWVUYXJnZXQpIHtcclxuXHRcdFx0XHRcdFx0Ly8gYWRkIGlmcmFtZSB0byBkb2MgYW5kIHN1Ym1pdCB0aGUgZm9ybVxyXG5cdFx0XHRcdFx0XHQkaW8uYXBwZW5kVG8oJ2JvZHknKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChpby5hdHRhY2hFdmVudClcclxuXHRcdFx0XHRcdFx0aW8uYXR0YWNoRXZlbnQoJ29ubG9hZCcsIGNiKTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0aW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNiLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdGUsMTUpO1xyXG5cclxuXHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdGZvcm0uc3VibWl0KCk7XHJcblx0XHRcdFx0XHR9IGNhdGNoKGVycikge1xyXG5cdFx0XHRcdFx0XHQvLyBqdXN0IGluIGNhc2UgZm9ybSBoYXMgZWxlbWVudCB3aXRoIG5hbWUvaWQgb2YgJ3N1Ym1pdCdcclxuXHRcdFx0XHRcdFx0dmFyIHN1Ym1pdEZuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpLnN1Ym1pdDtcclxuXHRcdFx0XHRcdFx0c3VibWl0Rm4uYXBwbHkoZm9ybSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZpbmFsbHkge1xyXG5cdFx0XHRcdFx0Ly8gcmVzZXQgYXR0cnMgYW5kIHJlbW92ZSBcImV4dHJhXCIgaW5wdXQgZWxlbWVudHNcclxuXHRcdFx0XHRcdGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLGEpO1xyXG5cdFx0XHRcdFx0aWYodCkge1xyXG5cdFx0XHRcdFx0XHRmb3JtLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgdCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQkZm9ybS5yZW1vdmVBdHRyKCd0YXJnZXQnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCQoZXh0cmFJbnB1dHMpLnJlbW92ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHMuZm9yY2VTeW5jKSB7XHJcblx0XHRcdFx0ZG9TdWJtaXQoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGRvU3VibWl0LCAxMCk7IC8vIHRoaXMgbGV0cyBkb20gdXBkYXRlcyByZW5kZXJcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIGRhdGEsIGRvYywgZG9tQ2hlY2tDb3VudCA9IDUwLCBjYWxsYmFja1Byb2Nlc3NlZDtcclxuXHJcblx0XHRcdGZ1bmN0aW9uIGNiKGUpIHtcclxuXHRcdFx0XHRpZiAoeGhyLmFib3J0ZWQgfHwgY2FsbGJhY2tQcm9jZXNzZWQpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ZG9jID0gZ2V0RG9jKGlvKTtcclxuXHRcdFx0XHRpZighZG9jKSB7XHJcblx0XHRcdFx0XHRsb2coJ2Nhbm5vdCBhY2Nlc3MgcmVzcG9uc2UgZG9jdW1lbnQnKTtcclxuXHRcdFx0XHRcdGUgPSBTRVJWRVJfQUJPUlQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChlID09PSBDTElFTlRfVElNRU9VVF9BQk9SVCAmJiB4aHIpIHtcclxuXHRcdFx0XHRcdHhoci5hYm9ydCgndGltZW91dCcpO1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KHhociwgJ3RpbWVvdXQnKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAoZSA9PSBTRVJWRVJfQUJPUlQgJiYgeGhyKSB7XHJcblx0XHRcdFx0XHR4aHIuYWJvcnQoJ3NlcnZlciBhYm9ydCcpO1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KHhociwgJ2Vycm9yJywgJ3NlcnZlciBhYm9ydCcpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCFkb2MgfHwgZG9jLmxvY2F0aW9uLmhyZWYgPT0gcy5pZnJhbWVTcmMpIHtcclxuXHRcdFx0XHRcdC8vIHJlc3BvbnNlIG5vdCByZWNlaXZlZCB5ZXRcclxuXHRcdFx0XHRcdGlmICghdGltZWRPdXQpXHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGlvLmRldGFjaEV2ZW50KVxyXG5cdFx0XHRcdFx0aW8uZGV0YWNoRXZlbnQoJ29ubG9hZCcsIGNiKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRpby5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgY2IsIGZhbHNlKTtcclxuXHJcblx0XHRcdFx0dmFyIHN0YXR1cyA9ICdzdWNjZXNzJywgZXJyTXNnO1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRpZiAodGltZWRPdXQpIHtcclxuXHRcdFx0XHRcdFx0dGhyb3cgJ3RpbWVvdXQnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhciBpc1htbCA9IHMuZGF0YVR5cGUgPT0gJ3htbCcgfHwgZG9jLlhNTERvY3VtZW50IHx8ICQuaXNYTUxEb2MoZG9jKTtcclxuXHRcdFx0XHRcdGxvZygnaXNYbWw9Jytpc1htbCk7XHJcblx0XHRcdFx0XHRpZiAoIWlzWG1sICYmIHdpbmRvdy5vcGVyYSAmJiAoZG9jLmJvZHkgPT09IG51bGwgfHwgIWRvYy5ib2R5LmlubmVySFRNTCkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKC0tZG9tQ2hlY2tDb3VudCkge1xyXG5cdFx0XHRcdFx0XHRcdC8vIGluIHNvbWUgYnJvd3NlcnMgKE9wZXJhKSB0aGUgaWZyYW1lIERPTSBpcyBub3QgYWx3YXlzIHRyYXZlcnNhYmxlIHdoZW5cclxuXHRcdFx0XHRcdFx0XHQvLyB0aGUgb25sb2FkIGNhbGxiYWNrIGZpcmVzLCBzbyB3ZSBsb29wIGEgYml0IHRvIGFjY29tbW9kYXRlXHJcblx0XHRcdFx0XHRcdFx0bG9nKCdyZXF1ZWluZyBvbkxvYWQgY2FsbGJhY2ssIERPTSBub3QgYXZhaWxhYmxlJyk7XHJcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChjYiwgMjUwKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8gbGV0IHRoaXMgZmFsbCB0aHJvdWdoIGJlY2F1c2Ugc2VydmVyIHJlc3BvbnNlIGNvdWxkIGJlIGFuIGVtcHR5IGRvY3VtZW50XHJcblx0XHRcdFx0XHRcdC8vbG9nKCdDb3VsZCBub3QgYWNjZXNzIGlmcmFtZSBET00gYWZ0ZXIgbXV0aXBsZSB0cmllcy4nKTtcclxuXHRcdFx0XHRcdFx0Ly90aHJvdyAnRE9NRXhjZXB0aW9uOiBub3QgYXZhaWxhYmxlJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL2xvZygncmVzcG9uc2UgZGV0ZWN0ZWQnKTtcclxuXHRcdFx0XHRcdHZhciBkb2NSb290ID0gZG9jLmJvZHkgPyBkb2MuYm9keSA6IGRvYy5kb2N1bWVudEVsZW1lbnQ7XHJcblx0XHRcdFx0XHR4aHIucmVzcG9uc2VUZXh0ID0gZG9jUm9vdCA/IGRvY1Jvb3QuaW5uZXJIVE1MIDogbnVsbDtcclxuXHRcdFx0XHRcdHhoci5yZXNwb25zZVhNTCA9IGRvYy5YTUxEb2N1bWVudCA/IGRvYy5YTUxEb2N1bWVudCA6IGRvYztcclxuXHRcdFx0XHRcdGlmIChpc1htbClcclxuXHRcdFx0XHRcdFx0cy5kYXRhVHlwZSA9ICd4bWwnO1xyXG5cdFx0XHRcdFx0eGhyLmdldFJlc3BvbnNlSGVhZGVyID0gZnVuY3Rpb24oaGVhZGVyKXtcclxuXHRcdFx0XHRcdFx0dmFyIGhlYWRlcnMgPSB7J2NvbnRlbnQtdHlwZSc6IHMuZGF0YVR5cGV9O1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gaGVhZGVyc1toZWFkZXIudG9Mb3dlckNhc2UoKV07XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0Ly8gc3VwcG9ydCBmb3IgWEhSICdzdGF0dXMnICYgJ3N0YXR1c1RleHQnIGVtdWxhdGlvbiA6XHJcblx0XHRcdFx0XHRpZiAoZG9jUm9vdCkge1xyXG5cdFx0XHRcdFx0XHR4aHIuc3RhdHVzID0gTnVtYmVyKCBkb2NSb290LmdldEF0dHJpYnV0ZSgnc3RhdHVzJykgKSB8fCB4aHIuc3RhdHVzO1xyXG5cdFx0XHRcdFx0XHR4aHIuc3RhdHVzVGV4dCA9IGRvY1Jvb3QuZ2V0QXR0cmlidXRlKCdzdGF0dXNUZXh0JykgfHwgeGhyLnN0YXR1c1RleHQ7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dmFyIGR0ID0gKHMuZGF0YVR5cGUgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdFx0XHR2YXIgc2NyID0gLyhqc29ufHNjcmlwdHx0ZXh0KS8udGVzdChkdCk7XHJcblx0XHRcdFx0XHRpZiAoc2NyIHx8IHMudGV4dGFyZWEpIHtcclxuXHRcdFx0XHRcdFx0Ly8gc2VlIGlmIHVzZXIgZW1iZWRkZWQgcmVzcG9uc2UgaW4gdGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0dmFyIHRhID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdO1xyXG5cdFx0XHRcdFx0XHRpZiAodGEpIHtcclxuXHRcdFx0XHRcdFx0XHR4aHIucmVzcG9uc2VUZXh0ID0gdGEudmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0Ly8gc3VwcG9ydCBmb3IgWEhSICdzdGF0dXMnICYgJ3N0YXR1c1RleHQnIGVtdWxhdGlvbiA6XHJcblx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1cyA9IE51bWJlciggdGEuZ2V0QXR0cmlidXRlKCdzdGF0dXMnKSApIHx8IHhoci5zdGF0dXM7XHJcblx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1c1RleHQgPSB0YS5nZXRBdHRyaWJ1dGUoJ3N0YXR1c1RleHQnKSB8fCB4aHIuc3RhdHVzVGV4dDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIGlmIChzY3IpIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBhY2NvdW50IGZvciBicm93c2VycyBpbmplY3RpbmcgcHJlIGFyb3VuZCBqc29uIHJlc3BvbnNlXHJcblx0XHRcdFx0XHRcdFx0dmFyIHByZSA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgncHJlJylbMF07XHJcblx0XHRcdFx0XHRcdFx0dmFyIGIgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcclxuXHRcdFx0XHRcdFx0XHRpZiAocHJlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR4aHIucmVzcG9uc2VUZXh0ID0gcHJlLnRleHRDb250ZW50ID8gcHJlLnRleHRDb250ZW50IDogcHJlLmlubmVyVGV4dDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSBpZiAoYikge1xyXG5cdFx0XHRcdFx0XHRcdFx0eGhyLnJlc3BvbnNlVGV4dCA9IGIudGV4dENvbnRlbnQgPyBiLnRleHRDb250ZW50IDogYi5pbm5lclRleHQ7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmIChkdCA9PSAneG1sJyAmJiAheGhyLnJlc3BvbnNlWE1MICYmIHhoci5yZXNwb25zZVRleHQpIHtcclxuXHRcdFx0XHRcdFx0eGhyLnJlc3BvbnNlWE1MID0gdG9YbWwoeGhyLnJlc3BvbnNlVGV4dCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0ZGF0YSA9IGh0dHBEYXRhKHhociwgZHQsIHMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdFx0XHRzdGF0dXMgPSAncGFyc2VyZXJyb3InO1xyXG5cdFx0XHRcdFx0XHR4aHIuZXJyb3IgPSBlcnJNc2cgPSAoZXJyIHx8IHN0YXR1cyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRcdGxvZygnZXJyb3IgY2F1Z2h0OiAnLGVycik7XHJcblx0XHRcdFx0XHRzdGF0dXMgPSAnZXJyb3InO1xyXG5cdFx0XHRcdFx0eGhyLmVycm9yID0gZXJyTXNnID0gKGVyciB8fCBzdGF0dXMpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHhoci5hYm9ydGVkKSB7XHJcblx0XHRcdFx0XHRsb2coJ3VwbG9hZCBhYm9ydGVkJyk7XHJcblx0XHRcdFx0XHRzdGF0dXMgPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHhoci5zdGF0dXMpIHsgLy8gd2UndmUgc2V0IHhoci5zdGF0dXNcclxuXHRcdFx0XHRcdHN0YXR1cyA9ICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwIHx8IHhoci5zdGF0dXMgPT09IDMwNCkgPyAnc3VjY2VzcycgOiAnZXJyb3InO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gb3JkZXJpbmcgb2YgdGhlc2UgY2FsbGJhY2tzL3RyaWdnZXJzIGlzIG9kZCwgYnV0IHRoYXQncyBob3cgJC5hamF4IGRvZXMgaXRcclxuXHRcdFx0XHRpZiAoc3RhdHVzID09PSAnc3VjY2VzcycpIHtcclxuXHRcdFx0XHRcdGlmIChzLnN1Y2Nlc3MpXHJcblx0XHRcdFx0XHRcdHMuc3VjY2Vzcy5jYWxsKHMuY29udGV4dCwgZGF0YSwgJ3N1Y2Nlc3MnLCB4aHIpO1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSh4aHIucmVzcG9uc2VUZXh0LCAnc3VjY2VzcycsIHhocik7XHJcblx0XHRcdFx0XHRpZiAoZylcclxuXHRcdFx0XHRcdFx0JC5ldmVudC50cmlnZ2VyKFwiYWpheFN1Y2Nlc3NcIiwgW3hociwgc10pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChzdGF0dXMpIHtcclxuXHRcdFx0XHRcdGlmIChlcnJNc2cgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdFx0ZXJyTXNnID0geGhyLnN0YXR1c1RleHQ7XHJcblx0XHRcdFx0XHRpZiAocy5lcnJvcilcclxuXHRcdFx0XHRcdFx0cy5lcnJvci5jYWxsKHMuY29udGV4dCwgeGhyLCBzdGF0dXMsIGVyck1zZyk7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoeGhyLCAnZXJyb3InLCBlcnJNc2cpO1xyXG5cdFx0XHRcdFx0aWYgKGcpXHJcblx0XHRcdFx0XHRcdCQuZXZlbnQudHJpZ2dlcihcImFqYXhFcnJvclwiLCBbeGhyLCBzLCBlcnJNc2ddKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChnKVxyXG5cdFx0XHRcdFx0JC5ldmVudC50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsIFt4aHIsIHNdKTtcclxuXHJcblx0XHRcdFx0aWYgKGcgJiYgISAtLSQuYWN0aXZlKSB7XHJcblx0XHRcdFx0XHQkLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChzLmNvbXBsZXRlKVxyXG5cdFx0XHRcdFx0cy5jb21wbGV0ZS5jYWxsKHMuY29udGV4dCwgeGhyLCBzdGF0dXMpO1xyXG5cclxuXHRcdFx0XHRjYWxsYmFja1Byb2Nlc3NlZCA9IHRydWU7XHJcblx0XHRcdFx0aWYgKHMudGltZW91dClcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKTtcclxuXHJcblx0XHRcdFx0Ly8gY2xlYW4gdXBcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCFzLmlmcmFtZVRhcmdldClcclxuXHRcdFx0XHRcdFx0JGlvLnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0ZWxzZSAgLy9hZGRpbmcgZWxzZSB0byBjbGVhbiB1cCBleGlzdGluZyBpZnJhbWUgcmVzcG9uc2UuXHJcblx0XHRcdFx0XHRcdCRpby5hdHRyKCdzcmMnLCBzLmlmcmFtZVNyYyk7XHJcblx0XHRcdFx0XHR4aHIucmVzcG9uc2VYTUwgPSBudWxsO1xyXG5cdFx0XHRcdH0sIDEwMCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciB0b1htbCA9ICQucGFyc2VYTUwgfHwgZnVuY3Rpb24ocywgZG9jKSB7IC8vIHVzZSBwYXJzZVhNTCBpZiBhdmFpbGFibGUgKGpRdWVyeSAxLjUrKVxyXG5cdFx0XHRcdGlmICh3aW5kb3cuQWN0aXZlWE9iamVjdCkge1xyXG5cdFx0XHRcdFx0ZG9jID0gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxET00nKTtcclxuXHRcdFx0XHRcdGRvYy5hc3luYyA9ICdmYWxzZSc7XHJcblx0XHRcdFx0XHRkb2MubG9hZFhNTChzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRkb2MgPSAobmV3IERPTVBhcnNlcigpKS5wYXJzZUZyb21TdHJpbmcocywgJ3RleHQveG1sJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiAoZG9jICYmIGRvYy5kb2N1bWVudEVsZW1lbnQgJiYgZG9jLmRvY3VtZW50RWxlbWVudC5ub2RlTmFtZSAhPSAncGFyc2VyZXJyb3InKSA/IGRvYyA6IG51bGw7XHJcblx0XHRcdH07XHJcblx0XHRcdHZhciBwYXJzZUpTT04gPSAkLnBhcnNlSlNPTiB8fCBmdW5jdGlvbihzKSB7XHJcblx0XHRcdFx0Lypqc2xpbnQgZXZpbDp0cnVlICovXHJcblx0XHRcdFx0cmV0dXJuIHdpbmRvd1snZXZhbCddKCcoJyArIHMgKyAnKScpO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIGh0dHBEYXRhID0gZnVuY3Rpb24oIHhociwgdHlwZSwgcyApIHsgLy8gbW9zdGx5IGxpZnRlZCBmcm9tIGpxMS40LjRcclxuXHJcblx0XHRcdFx0dmFyIGN0ID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdjb250ZW50LXR5cGUnKSB8fCAnJyxcclxuXHRcdFx0XHRcdHhtbCA9IHR5cGUgPT09ICd4bWwnIHx8ICF0eXBlICYmIGN0LmluZGV4T2YoJ3htbCcpID49IDAsXHJcblx0XHRcdFx0XHRkYXRhID0geG1sID8geGhyLnJlc3BvbnNlWE1MIDogeGhyLnJlc3BvbnNlVGV4dDtcclxuXHJcblx0XHRcdFx0aWYgKHhtbCAmJiBkYXRhLmRvY3VtZW50RWxlbWVudC5ub2RlTmFtZSA9PT0gJ3BhcnNlcmVycm9yJykge1xyXG5cdFx0XHRcdFx0aWYgKCQuZXJyb3IpXHJcblx0XHRcdFx0XHRcdCQuZXJyb3IoJ3BhcnNlcmVycm9yJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChzICYmIHMuZGF0YUZpbHRlcikge1xyXG5cdFx0XHRcdFx0ZGF0YSA9IHMuZGF0YUZpbHRlcihkYXRhLCB0eXBlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdFx0aWYgKHR5cGUgPT09ICdqc29uJyB8fCAhdHlwZSAmJiBjdC5pbmRleE9mKCdqc29uJykgPj0gMCkge1xyXG5cdFx0XHRcdFx0XHRkYXRhID0gcGFyc2VKU09OKGRhdGEpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlID09PSBcInNjcmlwdFwiIHx8ICF0eXBlICYmIGN0LmluZGV4T2YoXCJqYXZhc2NyaXB0XCIpID49IDApIHtcclxuXHRcdFx0XHRcdFx0JC5nbG9iYWxFdmFsKGRhdGEpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJldHVybiBkZWZlcnJlZDtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBhamF4Rm9ybSgpIHByb3ZpZGVzIGEgbWVjaGFuaXNtIGZvciBmdWxseSBhdXRvbWF0aW5nIGZvcm0gc3VibWlzc2lvbi5cclxuXHQgKlxyXG5cdCAqIFRoZSBhZHZhbnRhZ2VzIG9mIHVzaW5nIHRoaXMgbWV0aG9kIGluc3RlYWQgb2YgYWpheFN1Ym1pdCgpIGFyZTpcclxuXHQgKlxyXG5cdCAqIDE6IFRoaXMgbWV0aG9kIHdpbGwgaW5jbHVkZSBjb29yZGluYXRlcyBmb3IgPGlucHV0IHR5cGU9XCJpbWFnZVwiIC8+IGVsZW1lbnRzIChpZiB0aGUgZWxlbWVudFxyXG5cdCAqICAgIGlzIHVzZWQgdG8gc3VibWl0IHRoZSBmb3JtKS5cclxuXHQgKiAyLiBUaGlzIG1ldGhvZCB3aWxsIGluY2x1ZGUgdGhlIHN1Ym1pdCBlbGVtZW50J3MgbmFtZS92YWx1ZSBkYXRhIChmb3IgdGhlIGVsZW1lbnQgdGhhdCB3YXNcclxuXHQgKiAgICB1c2VkIHRvIHN1Ym1pdCB0aGUgZm9ybSkuXHJcblx0ICogMy4gVGhpcyBtZXRob2QgYmluZHMgdGhlIHN1Ym1pdCgpIG1ldGhvZCB0byB0aGUgZm9ybSBmb3IgeW91LlxyXG5cdCAqXHJcblx0ICogVGhlIG9wdGlvbnMgYXJndW1lbnQgZm9yIGFqYXhGb3JtIHdvcmtzIGV4YWN0bHkgYXMgaXQgZG9lcyBmb3IgYWpheFN1Ym1pdC4gIGFqYXhGb3JtIG1lcmVseVxyXG5cdCAqIHBhc3NlcyB0aGUgb3B0aW9ucyBhcmd1bWVudCBhbG9uZyBhZnRlciBwcm9wZXJseSBiaW5kaW5nIGV2ZW50cyBmb3Igc3VibWl0IGVsZW1lbnRzIGFuZFxyXG5cdCAqIHRoZSBmb3JtIGl0c2VsZi5cclxuXHQgKi9cclxuXHQkLmZuLmFqYXhGb3JtID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0XHRvcHRpb25zLmRlbGVnYXRpb24gPSBvcHRpb25zLmRlbGVnYXRpb24gJiYgJC5pc0Z1bmN0aW9uKCQuZm4ub24pO1xyXG5cclxuXHRcdC8vIGluIGpRdWVyeSAxLjMrIHdlIGNhbiBmaXggbWlzdGFrZXMgd2l0aCB0aGUgcmVhZHkgc3RhdGVcclxuXHRcdGlmICghb3B0aW9ucy5kZWxlZ2F0aW9uICYmIHRoaXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHZhciBvID0geyBzOiB0aGlzLnNlbGVjdG9yLCBjOiB0aGlzLmNvbnRleHQgfTtcclxuXHRcdFx0aWYgKCEkLmlzUmVhZHkgJiYgby5zKSB7XHJcblx0XHRcdFx0bG9nKCdET00gbm90IHJlYWR5LCBxdWV1aW5nIGFqYXhGb3JtJyk7XHJcblx0XHRcdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCQoby5zLG8uYykuYWpheEZvcm0ob3B0aW9ucyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gaXMgeW91ciBET00gcmVhZHk/ICBodHRwOi8vZG9jcy5qcXVlcnkuY29tL1R1dG9yaWFsczpJbnRyb2R1Y2luZ18kKGRvY3VtZW50KS5yZWFkeSgpXHJcblx0XHRcdGxvZygndGVybWluYXRpbmc7IHplcm8gZWxlbWVudHMgZm91bmQgYnkgc2VsZWN0b3InICsgKCQuaXNSZWFkeSA/ICcnIDogJyAoRE9NIG5vdCByZWFkeSknKSk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggb3B0aW9ucy5kZWxlZ2F0aW9uICkge1xyXG5cdFx0XHQkKGRvY3VtZW50KVxyXG5cdFx0XHRcdC5vZmYoJ3N1Ym1pdC5mb3JtLXBsdWdpbicsIHRoaXMuc2VsZWN0b3IsIGRvQWpheFN1Ym1pdClcclxuXHRcdFx0XHQub2ZmKCdjbGljay5mb3JtLXBsdWdpbicsIHRoaXMuc2VsZWN0b3IsIGNhcHR1cmVTdWJtaXR0aW5nRWxlbWVudClcclxuXHRcdFx0XHQub24oJ3N1Ym1pdC5mb3JtLXBsdWdpbicsIHRoaXMuc2VsZWN0b3IsIG9wdGlvbnMsIGRvQWpheFN1Ym1pdClcclxuXHRcdFx0XHQub24oJ2NsaWNrLmZvcm0tcGx1Z2luJywgdGhpcy5zZWxlY3Rvciwgb3B0aW9ucywgY2FwdHVyZVN1Ym1pdHRpbmdFbGVtZW50KTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuYWpheEZvcm1VbmJpbmQoKVxyXG5cdFx0XHQuYmluZCgnc3VibWl0LmZvcm0tcGx1Z2luJywgb3B0aW9ucywgZG9BamF4U3VibWl0KVxyXG5cdFx0XHQuYmluZCgnY2xpY2suZm9ybS1wbHVnaW4nLCBvcHRpb25zLCBjYXB0dXJlU3VibWl0dGluZ0VsZW1lbnQpO1xyXG5cdH07XHJcblxyXG5cdC8vIHByaXZhdGUgZXZlbnQgaGFuZGxlcnNcclxuXHRmdW5jdGlvbiBkb0FqYXhTdWJtaXQoZSkge1xyXG5cdFx0Lypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cclxuXHRcdHZhciBvcHRpb25zID0gZS5kYXRhO1xyXG5cdFx0aWYgKCFlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7IC8vIGlmIGV2ZW50IGhhcyBiZWVuIGNhbmNlbGVkLCBkb24ndCBwcm9jZWVkXHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0JChlLnRhcmdldCkuYWpheFN1Ym1pdChvcHRpb25zKTsgLy8gIzM2NVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2FwdHVyZVN1Ym1pdHRpbmdFbGVtZW50KGUpIHtcclxuXHRcdC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXHJcblx0XHR2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblx0XHR2YXIgJGVsID0gJCh0YXJnZXQpO1xyXG5cdFx0aWYgKCEoJGVsLmlzKFwiW3R5cGU9c3VibWl0XSxbdHlwZT1pbWFnZV1cIikpKSB7XHJcblx0XHRcdC8vIGlzIHRoaXMgYSBjaGlsZCBlbGVtZW50IG9mIHRoZSBzdWJtaXQgZWw/ICAoZXg6IGEgc3BhbiB3aXRoaW4gYSBidXR0b24pXHJcblx0XHRcdHZhciB0ID0gJGVsLmNsb3Nlc3QoJ1t0eXBlPXN1Ym1pdF0nKTtcclxuXHRcdFx0aWYgKHQubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRhcmdldCA9IHRbMF07XHJcblx0XHR9XHJcblx0XHR2YXIgZm9ybSA9IHRoaXM7XHJcblx0XHRmb3JtLmNsayA9IHRhcmdldDtcclxuXHRcdGlmICh0YXJnZXQudHlwZSA9PSAnaW1hZ2UnKSB7XHJcblx0XHRcdGlmIChlLm9mZnNldFggIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGZvcm0uY2xrX3ggPSBlLm9mZnNldFg7XHJcblx0XHRcdFx0Zm9ybS5jbGtfeSA9IGUub2Zmc2V0WTtcclxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgJC5mbi5vZmZzZXQgPT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdHZhciBvZmZzZXQgPSAkZWwub2Zmc2V0KCk7XHJcblx0XHRcdFx0Zm9ybS5jbGtfeCA9IGUucGFnZVggLSBvZmZzZXQubGVmdDtcclxuXHRcdFx0XHRmb3JtLmNsa195ID0gZS5wYWdlWSAtIG9mZnNldC50b3A7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Zm9ybS5jbGtfeCA9IGUucGFnZVggLSB0YXJnZXQub2Zmc2V0TGVmdDtcclxuXHRcdFx0XHRmb3JtLmNsa195ID0gZS5wYWdlWSAtIHRhcmdldC5vZmZzZXRUb3A7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vIGNsZWFyIGZvcm0gdmFyc1xyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHsgZm9ybS5jbGsgPSBmb3JtLmNsa194ID0gZm9ybS5jbGtfeSA9IG51bGw7IH0sIDEwMCk7XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gYWpheEZvcm1VbmJpbmQgdW5iaW5kcyB0aGUgZXZlbnQgaGFuZGxlcnMgdGhhdCB3ZXJlIGJvdW5kIGJ5IGFqYXhGb3JtXHJcblx0JC5mbi5hamF4Rm9ybVVuYmluZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudW5iaW5kKCdzdWJtaXQuZm9ybS1wbHVnaW4gY2xpY2suZm9ybS1wbHVnaW4nKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBmb3JtVG9BcnJheSgpIGdhdGhlcnMgZm9ybSBlbGVtZW50IGRhdGEgaW50byBhbiBhcnJheSBvZiBvYmplY3RzIHRoYXQgY2FuXHJcblx0ICogYmUgcGFzc2VkIHRvIGFueSBvZiB0aGUgZm9sbG93aW5nIGFqYXggZnVuY3Rpb25zOiAkLmdldCwgJC5wb3N0LCBvciBsb2FkLlxyXG5cdCAqIEVhY2ggb2JqZWN0IGluIHRoZSBhcnJheSBoYXMgYm90aCBhICduYW1lJyBhbmQgJ3ZhbHVlJyBwcm9wZXJ0eS4gIEFuIGV4YW1wbGUgb2ZcclxuXHQgKiBhbiBhcnJheSBmb3IgYSBzaW1wbGUgbG9naW4gZm9ybSBtaWdodCBiZTpcclxuXHQgKlxyXG5cdCAqIFsgeyBuYW1lOiAndXNlcm5hbWUnLCB2YWx1ZTogJ2pyZXNpZycgfSwgeyBuYW1lOiAncGFzc3dvcmQnLCB2YWx1ZTogJ3NlY3JldCcgfSBdXHJcblx0ICpcclxuXHQgKiBJdCBpcyB0aGlzIGFycmF5IHRoYXQgaXMgcGFzc2VkIHRvIHByZS1zdWJtaXQgY2FsbGJhY2sgZnVuY3Rpb25zIHByb3ZpZGVkIHRvIHRoZVxyXG5cdCAqIGFqYXhTdWJtaXQoKSBhbmQgYWpheEZvcm0oKSBtZXRob2RzLlxyXG5cdCAqL1xyXG5cdCQuZm4uZm9ybVRvQXJyYXkgPSBmdW5jdGlvbihzZW1hbnRpYywgZWxlbWVudHMpIHtcclxuXHRcdHZhciBhID0gW107XHJcblx0XHRpZiAodGhpcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0cmV0dXJuIGE7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGZvcm0gPSB0aGlzWzBdO1xyXG5cdFx0dmFyIGVscyA9IHNlbWFudGljID8gZm9ybS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpIDogZm9ybS5lbGVtZW50cztcclxuXHRcdGlmICghZWxzKSB7XHJcblx0XHRcdHJldHVybiBhO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBpLGosbix2LGVsLG1heCxqbWF4O1xyXG5cdFx0Zm9yKGk9MCwgbWF4PWVscy5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xyXG5cdFx0XHRlbCA9IGVsc1tpXTtcclxuXHRcdFx0biA9IGVsLm5hbWU7XHJcblx0XHRcdGlmICghbiB8fCBlbC5kaXNhYmxlZCkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoc2VtYW50aWMgJiYgZm9ybS5jbGsgJiYgZWwudHlwZSA9PSBcImltYWdlXCIpIHtcclxuXHRcdFx0XHQvLyBoYW5kbGUgaW1hZ2UgaW5wdXRzIG9uIHRoZSBmbHkgd2hlbiBzZW1hbnRpYyA9PSB0cnVlXHJcblx0XHRcdFx0aWYoZm9ybS5jbGsgPT0gZWwpIHtcclxuXHRcdFx0XHRcdGEucHVzaCh7bmFtZTogbiwgdmFsdWU6ICQoZWwpLnZhbCgpLCB0eXBlOiBlbC50eXBlIH0pO1xyXG5cdFx0XHRcdFx0YS5wdXNoKHtuYW1lOiBuKycueCcsIHZhbHVlOiBmb3JtLmNsa194fSwge25hbWU6IG4rJy55JywgdmFsdWU6IGZvcm0uY2xrX3l9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHYgPSAkLmZpZWxkVmFsdWUoZWwsIHRydWUpO1xyXG5cdFx0XHRpZiAodiAmJiB2LmNvbnN0cnVjdG9yID09IEFycmF5KSB7XHJcblx0XHRcdFx0aWYgKGVsZW1lbnRzKVxyXG5cdFx0XHRcdFx0ZWxlbWVudHMucHVzaChlbCk7XHJcblx0XHRcdFx0Zm9yKGo9MCwgam1heD12Lmxlbmd0aDsgaiA8IGptYXg7IGorKykge1xyXG5cdFx0XHRcdFx0YS5wdXNoKHtuYW1lOiBuLCB2YWx1ZTogdltqXX0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChmZWF0dXJlLmZpbGVhcGkgJiYgZWwudHlwZSA9PSAnZmlsZScpIHtcclxuXHRcdFx0XHRpZiAoZWxlbWVudHMpXHJcblx0XHRcdFx0XHRlbGVtZW50cy5wdXNoKGVsKTtcclxuXHRcdFx0XHR2YXIgZmlsZXMgPSBlbC5maWxlcztcclxuXHRcdFx0XHRpZiAoZmlsZXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRmb3IgKGo9MDsgaiA8IGZpbGVzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRcdGEucHVzaCh7bmFtZTogbiwgdmFsdWU6IGZpbGVzW2pdLCB0eXBlOiBlbC50eXBlfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gIzE4MFxyXG5cdFx0XHRcdFx0YS5wdXNoKHsgbmFtZTogbiwgdmFsdWU6ICcnLCB0eXBlOiBlbC50eXBlIH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh2ICE9PSBudWxsICYmIHR5cGVvZiB2ICE9ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0aWYgKGVsZW1lbnRzKVxyXG5cdFx0XHRcdFx0ZWxlbWVudHMucHVzaChlbCk7XHJcblx0XHRcdFx0YS5wdXNoKHtuYW1lOiBuLCB2YWx1ZTogdiwgdHlwZTogZWwudHlwZSwgcmVxdWlyZWQ6IGVsLnJlcXVpcmVkfSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXNlbWFudGljICYmIGZvcm0uY2xrKSB7XHJcblx0XHRcdC8vIGlucHV0IHR5cGU9PSdpbWFnZScgYXJlIG5vdCBmb3VuZCBpbiBlbGVtZW50cyBhcnJheSEgaGFuZGxlIGl0IGhlcmVcclxuXHRcdFx0dmFyICRpbnB1dCA9ICQoZm9ybS5jbGspLCBpbnB1dCA9ICRpbnB1dFswXTtcclxuXHRcdFx0biA9IGlucHV0Lm5hbWU7XHJcblx0XHRcdGlmIChuICYmICFpbnB1dC5kaXNhYmxlZCAmJiBpbnB1dC50eXBlID09ICdpbWFnZScpIHtcclxuXHRcdFx0XHRhLnB1c2goe25hbWU6IG4sIHZhbHVlOiAkaW5wdXQudmFsKCl9KTtcclxuXHRcdFx0XHRhLnB1c2goe25hbWU6IG4rJy54JywgdmFsdWU6IGZvcm0uY2xrX3h9LCB7bmFtZTogbisnLnknLCB2YWx1ZTogZm9ybS5jbGtfeX0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTZXJpYWxpemVzIGZvcm0gZGF0YSBpbnRvIGEgJ3N1Ym1pdHRhYmxlJyBzdHJpbmcuIFRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGEgc3RyaW5nXHJcblx0ICogaW4gdGhlIGZvcm1hdDogbmFtZTE9dmFsdWUxJmFtcDtuYW1lMj12YWx1ZTJcclxuXHQgKi9cclxuXHQkLmZuLmZvcm1TZXJpYWxpemUgPSBmdW5jdGlvbihzZW1hbnRpYykge1xyXG5cdFx0Ly9oYW5kIG9mZiB0byBqUXVlcnkucGFyYW0gZm9yIHByb3BlciBlbmNvZGluZ1xyXG5cdFx0cmV0dXJuICQucGFyYW0odGhpcy5mb3JtVG9BcnJheShzZW1hbnRpYykpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNlcmlhbGl6ZXMgYWxsIGZpZWxkIGVsZW1lbnRzIGluIHRoZSBqUXVlcnkgb2JqZWN0IGludG8gYSBxdWVyeSBzdHJpbmcuXHJcblx0ICogVGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gYSBzdHJpbmcgaW4gdGhlIGZvcm1hdDogbmFtZTE9dmFsdWUxJmFtcDtuYW1lMj12YWx1ZTJcclxuXHQgKi9cclxuXHQkLmZuLmZpZWxkU2VyaWFsaXplID0gZnVuY3Rpb24oc3VjY2Vzc2Z1bCkge1xyXG5cdFx0dmFyIGEgPSBbXTtcclxuXHRcdHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIG4gPSB0aGlzLm5hbWU7XHJcblx0XHRcdGlmICghbikge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgdiA9ICQuZmllbGRWYWx1ZSh0aGlzLCBzdWNjZXNzZnVsKTtcclxuXHRcdFx0aWYgKHYgJiYgdi5jb25zdHJ1Y3RvciA9PSBBcnJheSkge1xyXG5cdFx0XHRcdGZvciAodmFyIGk9MCxtYXg9di5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xyXG5cdFx0XHRcdFx0YS5wdXNoKHtuYW1lOiBuLCB2YWx1ZTogdltpXX0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh2ICE9PSBudWxsICYmIHR5cGVvZiB2ICE9ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0YS5wdXNoKHtuYW1lOiB0aGlzLm5hbWUsIHZhbHVlOiB2fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Ly9oYW5kIG9mZiB0byBqUXVlcnkucGFyYW0gZm9yIHByb3BlciBlbmNvZGluZ1xyXG5cdFx0cmV0dXJuICQucGFyYW0oYSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgdmFsdWUocykgb2YgdGhlIGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgc2V0LiAgRm9yIGV4YW1wbGUsIGNvbnNpZGVyIHRoZSBmb2xsb3dpbmcgZm9ybTpcclxuXHQgKlxyXG5cdCAqICA8Zm9ybT48ZmllbGRzZXQ+XHJcblx0ICogICAgICA8aW5wdXQgbmFtZT1cIkFcIiB0eXBlPVwidGV4dFwiIC8+XHJcblx0ICogICAgICA8aW5wdXQgbmFtZT1cIkFcIiB0eXBlPVwidGV4dFwiIC8+XHJcblx0ICogICAgICA8aW5wdXQgbmFtZT1cIkJcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIkIxXCIgLz5cclxuXHQgKiAgICAgIDxpbnB1dCBuYW1lPVwiQlwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiQjJcIi8+XHJcblx0ICogICAgICA8aW5wdXQgbmFtZT1cIkNcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIkMxXCIgLz5cclxuXHQgKiAgICAgIDxpbnB1dCBuYW1lPVwiQ1wiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiQzJcIiAvPlxyXG5cdCAqICA8L2ZpZWxkc2V0PjwvZm9ybT5cclxuXHQgKlxyXG5cdCAqICB2YXIgdiA9ICQoJ2lucHV0W3R5cGU9dGV4dF0nKS5maWVsZFZhbHVlKCk7XHJcblx0ICogIC8vIGlmIG5vIHZhbHVlcyBhcmUgZW50ZXJlZCBpbnRvIHRoZSB0ZXh0IGlucHV0c1xyXG5cdCAqICB2ID09IFsnJywnJ11cclxuXHQgKiAgLy8gaWYgdmFsdWVzIGVudGVyZWQgaW50byB0aGUgdGV4dCBpbnB1dHMgYXJlICdmb28nIGFuZCAnYmFyJ1xyXG5cdCAqICB2ID09IFsnZm9vJywnYmFyJ11cclxuXHQgKlxyXG5cdCAqICB2YXIgdiA9ICQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJykuZmllbGRWYWx1ZSgpO1xyXG5cdCAqICAvLyBpZiBuZWl0aGVyIGNoZWNrYm94IGlzIGNoZWNrZWRcclxuXHQgKiAgdiA9PT0gdW5kZWZpbmVkXHJcblx0ICogIC8vIGlmIGJvdGggY2hlY2tib3hlcyBhcmUgY2hlY2tlZFxyXG5cdCAqICB2ID09IFsnQjEnLCAnQjInXVxyXG5cdCAqXHJcblx0ICogIHZhciB2ID0gJCgnaW5wdXRbdHlwZT1yYWRpb10nKS5maWVsZFZhbHVlKCk7XHJcblx0ICogIC8vIGlmIG5laXRoZXIgcmFkaW8gaXMgY2hlY2tlZFxyXG5cdCAqICB2ID09PSB1bmRlZmluZWRcclxuXHQgKiAgLy8gaWYgZmlyc3QgcmFkaW8gaXMgY2hlY2tlZFxyXG5cdCAqICB2ID09IFsnQzEnXVxyXG5cdCAqXHJcblx0ICogVGhlIHN1Y2Nlc3NmdWwgYXJndW1lbnQgY29udHJvbHMgd2hldGhlciBvciBub3QgdGhlIGZpZWxkIGVsZW1lbnQgbXVzdCBiZSAnc3VjY2Vzc2Z1bCdcclxuXHQgKiAocGVyIGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw0L2ludGVyYWN0L2Zvcm1zLmh0bWwjc3VjY2Vzc2Z1bC1jb250cm9scykuXHJcblx0ICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIHN1Y2Nlc3NmdWwgYXJndW1lbnQgaXMgdHJ1ZS4gIElmIHRoaXMgdmFsdWUgaXMgZmFsc2UgdGhlIHZhbHVlKHMpXHJcblx0ICogZm9yIGVhY2ggZWxlbWVudCBpcyByZXR1cm5lZC5cclxuXHQgKlxyXG5cdCAqIE5vdGU6IFRoaXMgbWV0aG9kICphbHdheXMqIHJldHVybnMgYW4gYXJyYXkuICBJZiBubyB2YWxpZCB2YWx1ZSBjYW4gYmUgZGV0ZXJtaW5lZCB0aGVcclxuXHQgKiAgICBhcnJheSB3aWxsIGJlIGVtcHR5LCBvdGhlcndpc2UgaXQgd2lsbCBjb250YWluIG9uZSBvciBtb3JlIHZhbHVlcy5cclxuXHQgKi9cclxuXHQkLmZuLmZpZWxkVmFsdWUgPSBmdW5jdGlvbihzdWNjZXNzZnVsKSB7XHJcblx0XHRmb3IgKHZhciB2YWw9W10sIGk9MCwgbWF4PXRoaXMubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcclxuXHRcdFx0dmFyIGVsID0gdGhpc1tpXTtcclxuXHRcdFx0dmFyIHYgPSAkLmZpZWxkVmFsdWUoZWwsIHN1Y2Nlc3NmdWwpO1xyXG5cdFx0XHRpZiAodiA9PT0gbnVsbCB8fCB0eXBlb2YgdiA9PSAndW5kZWZpbmVkJyB8fCAodi5jb25zdHJ1Y3RvciA9PSBBcnJheSAmJiAhdi5sZW5ndGgpKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHYuY29uc3RydWN0b3IgPT0gQXJyYXkpXHJcblx0XHRcdFx0JC5tZXJnZSh2YWwsIHYpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dmFsLnB1c2godik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdmFsO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBlbGVtZW50LlxyXG5cdCAqL1xyXG5cdCQuZmllbGRWYWx1ZSA9IGZ1bmN0aW9uKGVsLCBzdWNjZXNzZnVsKSB7XHJcblx0XHR2YXIgbiA9IGVsLm5hbWUsIHQgPSBlbC50eXBlLCB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRpZiAoc3VjY2Vzc2Z1bCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHN1Y2Nlc3NmdWwgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzdWNjZXNzZnVsICYmICghbiB8fCBlbC5kaXNhYmxlZCB8fCB0ID09ICdyZXNldCcgfHwgdCA9PSAnYnV0dG9uJyB8fFxyXG5cdFx0XHQodCA9PSAnY2hlY2tib3gnIHx8IHQgPT0gJ3JhZGlvJykgJiYgIWVsLmNoZWNrZWQgfHxcclxuXHRcdFx0KHQgPT0gJ3N1Ym1pdCcgfHwgdCA9PSAnaW1hZ2UnKSAmJiBlbC5mb3JtICYmIGVsLmZvcm0uY2xrICE9IGVsIHx8XHJcblx0XHRcdHRhZyA9PSAnc2VsZWN0JyAmJiBlbC5zZWxlY3RlZEluZGV4ID09IC0xKSkge1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0YWcgPT0gJ3NlbGVjdCcpIHtcclxuXHRcdFx0dmFyIGluZGV4ID0gZWwuc2VsZWN0ZWRJbmRleDtcclxuXHRcdFx0aWYgKGluZGV4IDwgMCkge1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBhID0gW10sIG9wcyA9IGVsLm9wdGlvbnM7XHJcblx0XHRcdHZhciBvbmUgPSAodCA9PSAnc2VsZWN0LW9uZScpO1xyXG5cdFx0XHR2YXIgbWF4ID0gKG9uZSA/IGluZGV4KzEgOiBvcHMubGVuZ3RoKTtcclxuXHRcdFx0Zm9yKHZhciBpPShvbmUgPyBpbmRleCA6IDApOyBpIDwgbWF4OyBpKyspIHtcclxuXHRcdFx0XHR2YXIgb3AgPSBvcHNbaV07XHJcblx0XHRcdFx0aWYgKG9wLnNlbGVjdGVkKSB7XHJcblx0XHRcdFx0XHR2YXIgdiA9IG9wLnZhbHVlO1xyXG5cdFx0XHRcdFx0aWYgKCF2KSB7IC8vIGV4dHJhIHBhaW4gZm9yIElFLi4uXHJcblx0XHRcdFx0XHRcdHYgPSAob3AuYXR0cmlidXRlcyAmJiBvcC5hdHRyaWJ1dGVzWyd2YWx1ZSddICYmICEob3AuYXR0cmlidXRlc1sndmFsdWUnXS5zcGVjaWZpZWQpKSA/IG9wLnRleHQgOiBvcC52YWx1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChvbmUpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHY7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRhLnB1c2godik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBhO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICQoZWwpLnZhbCgpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIENsZWFycyB0aGUgZm9ybSBkYXRhLiAgVGFrZXMgdGhlIGZvbGxvd2luZyBhY3Rpb25zIG9uIHRoZSBmb3JtJ3MgaW5wdXQgZmllbGRzOlxyXG5cdCAqICAtIGlucHV0IHRleHQgZmllbGRzIHdpbGwgaGF2ZSB0aGVpciAndmFsdWUnIHByb3BlcnR5IHNldCB0byB0aGUgZW1wdHkgc3RyaW5nXHJcblx0ICogIC0gc2VsZWN0IGVsZW1lbnRzIHdpbGwgaGF2ZSB0aGVpciAnc2VsZWN0ZWRJbmRleCcgcHJvcGVydHkgc2V0IHRvIC0xXHJcblx0ICogIC0gY2hlY2tib3ggYW5kIHJhZGlvIGlucHV0cyB3aWxsIGhhdmUgdGhlaXIgJ2NoZWNrZWQnIHByb3BlcnR5IHNldCB0byBmYWxzZVxyXG5cdCAqICAtIGlucHV0cyBvZiB0eXBlIHN1Ym1pdCwgYnV0dG9uLCByZXNldCwgYW5kIGhpZGRlbiB3aWxsICpub3QqIGJlIGVmZmVjdGVkXHJcblx0ICogIC0gYnV0dG9uIGVsZW1lbnRzIHdpbGwgKm5vdCogYmUgZWZmZWN0ZWRcclxuXHQgKi9cclxuXHQkLmZuLmNsZWFyRm9ybSA9IGZ1bmN0aW9uKGluY2x1ZGVIaWRkZW4pIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ2lucHV0LHNlbGVjdCx0ZXh0YXJlYScsIHRoaXMpLmNsZWFyRmllbGRzKGluY2x1ZGVIaWRkZW4pO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ2xlYXJzIHRoZSBzZWxlY3RlZCBmb3JtIGVsZW1lbnRzLlxyXG5cdCAqL1xyXG5cdCQuZm4uY2xlYXJGaWVsZHMgPSAkLmZuLmNsZWFySW5wdXRzID0gZnVuY3Rpb24oaW5jbHVkZUhpZGRlbikge1xyXG5cdFx0dmFyIHJlID0gL14oPzpjb2xvcnxkYXRlfGRhdGV0aW1lfGVtYWlsfG1vbnRofG51bWJlcnxwYXNzd29yZHxyYW5nZXxzZWFyY2h8dGVsfHRleHR8dGltZXx1cmx8d2VlaykkL2k7IC8vICdoaWRkZW4nIGlzIG5vdCBpbiB0aGlzIGxpc3RcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciB0ID0gdGhpcy50eXBlLCB0YWcgPSB0aGlzLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0aWYgKHJlLnRlc3QodCkgfHwgdGFnID09ICd0ZXh0YXJlYScpIHtcclxuXHRcdFx0XHR0aGlzLnZhbHVlID0gJyc7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodCA9PSAnY2hlY2tib3gnIHx8IHQgPT0gJ3JhZGlvJykge1xyXG5cdFx0XHRcdHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRhZyA9PSAnc2VsZWN0Jykge1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHQgPT0gXCJmaWxlXCIpIHtcclxuXHRcdFx0XHRpZiAoL01TSUUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcclxuXHRcdFx0XHRcdCQodGhpcykucmVwbGFjZVdpdGgoJCh0aGlzKS5jbG9uZSh0cnVlKSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCQodGhpcykudmFsKCcnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoaW5jbHVkZUhpZGRlbikge1xyXG5cdFx0XHRcdC8vIGluY2x1ZGVIaWRkZW4gY2FuIGJlIHRoZSB2YWx1ZSB0cnVlLCBvciBpdCBjYW4gYmUgYSBzZWxlY3RvciBzdHJpbmdcclxuXHRcdFx0XHQvLyBpbmRpY2F0aW5nIGEgc3BlY2lhbCB0ZXN0OyBmb3IgZXhhbXBsZTpcclxuXHRcdFx0XHQvLyAgJCgnI215Rm9ybScpLmNsZWFyRm9ybSgnLnNwZWNpYWw6aGlkZGVuJylcclxuXHRcdFx0XHQvLyB0aGUgYWJvdmUgd291bGQgY2xlYW4gaGlkZGVuIGlucHV0cyB0aGF0IGhhdmUgdGhlIGNsYXNzIG9mICdzcGVjaWFsJ1xyXG5cdFx0XHRcdGlmICggKGluY2x1ZGVIaWRkZW4gPT09IHRydWUgJiYgL2hpZGRlbi8udGVzdCh0KSkgfHxcclxuXHRcdFx0XHRcdCAodHlwZW9mIGluY2x1ZGVIaWRkZW4gPT0gJ3N0cmluZycgJiYgJCh0aGlzKS5pcyhpbmNsdWRlSGlkZGVuKSkgKVxyXG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9ICcnO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXNldHMgdGhlIGZvcm0gZGF0YS4gIENhdXNlcyBhbGwgZm9ybSBlbGVtZW50cyB0byBiZSByZXNldCB0byB0aGVpciBvcmlnaW5hbCB2YWx1ZS5cclxuXHQgKi9cclxuXHQkLmZuLnJlc2V0Rm9ybSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gZ3VhcmQgYWdhaW5zdCBhbiBpbnB1dCB3aXRoIHRoZSBuYW1lIG9mICdyZXNldCdcclxuXHRcdFx0Ly8gbm90ZSB0aGF0IElFIHJlcG9ydHMgdGhlIHJlc2V0IGZ1bmN0aW9uIGFzIGFuICdvYmplY3QnXHJcblx0XHRcdGlmICh0eXBlb2YgdGhpcy5yZXNldCA9PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2YgdGhpcy5yZXNldCA9PSAnb2JqZWN0JyAmJiAhdGhpcy5yZXNldC5ub2RlVHlwZSkpIHtcclxuXHRcdFx0XHR0aGlzLnJlc2V0KCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgYW55IG1hdGNoaW5nIGVsZW1lbnRzLlxyXG5cdCAqL1xyXG5cdCQuZm4uZW5hYmxlID0gZnVuY3Rpb24oYikge1xyXG5cdFx0aWYgKGIgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRiID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuZGlzYWJsZWQgPSAhYjtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrcy91bmNoZWNrcyBhbnkgbWF0Y2hpbmcgY2hlY2tib3hlcyBvciByYWRpbyBidXR0b25zIGFuZFxyXG5cdCAqIHNlbGVjdHMvZGVzZWxlY3RzIGFuZCBtYXRjaGluZyBvcHRpb24gZWxlbWVudHMuXHJcblx0ICovXHJcblx0JC5mbi5zZWxlY3RlZCA9IGZ1bmN0aW9uKHNlbGVjdCkge1xyXG5cdFx0aWYgKHNlbGVjdCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHNlbGVjdCA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgdCA9IHRoaXMudHlwZTtcclxuXHRcdFx0aWYgKHQgPT0gJ2NoZWNrYm94JyB8fCB0ID09ICdyYWRpbycpIHtcclxuXHRcdFx0XHR0aGlzLmNoZWNrZWQgPSBzZWxlY3Q7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ29wdGlvbicpIHtcclxuXHRcdFx0XHR2YXIgJHNlbCA9ICQodGhpcykucGFyZW50KCdzZWxlY3QnKTtcclxuXHRcdFx0XHRpZiAoc2VsZWN0ICYmICRzZWxbMF0gJiYgJHNlbFswXS50eXBlID09ICdzZWxlY3Qtb25lJykge1xyXG5cdFx0XHRcdFx0Ly8gZGVzZWxlY3QgYWxsIG90aGVyIG9wdGlvbnNcclxuXHRcdFx0XHRcdCRzZWwuZmluZCgnb3B0aW9uJykuc2VsZWN0ZWQoZmFsc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkID0gc2VsZWN0O1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvLyBleHBvc2UgZGVidWcgdmFyXHJcblx0JC5mbi5hamF4U3VibWl0LmRlYnVnID0gZmFsc2U7XHJcblxyXG5cdC8vIGhlbHBlciBmbiBmb3IgY29uc29sZSBsb2dnaW5nXHJcblx0ZnVuY3Rpb24gbG9nKCkge1xyXG5cdFx0aWYgKCEkLmZuLmFqYXhTdWJtaXQuZGVidWcpXHJcblx0XHRcdHJldHVybjtcclxuXHRcdHZhciBtc2cgPSAnW2pxdWVyeS5mb3JtXSAnICsgQXJyYXkucHJvdG90eXBlLmpvaW4uY2FsbChhcmd1bWVudHMsJycpO1xyXG5cdFx0aWYgKHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLmxvZykge1xyXG5cdFx0XHR3aW5kb3cuY29uc29sZS5sb2cobXNnKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHdpbmRvdy5vcGVyYSAmJiB3aW5kb3cub3BlcmEucG9zdEVycm9yKSB7XHJcblx0XHRcdHdpbmRvdy5vcGVyYS5wb3N0RXJyb3IobXNnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdH0pKCAodHlwZW9mKGpRdWVyeSkgIT0gJ3VuZGVmaW5lZCcpID8galF1ZXJ5IDogd2luZG93LlplcHRvICk7XHJcblxyXG4vL30pO1xyXG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1kaFpXRXZhbk12YkdsaUwycHhkV1Z5ZVVadmNtMHVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CSWl3aVptbHNaU0k2SW1kbGJtVnlZWFJsWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMMlJsWm1sdVpTaG1kVzVqZEdsdmJpaHlaWEYxYVhKbExDQmxlSEJ2Y25SekxDQnRiMlIxYkdVcElIdGNjbHh1WEhSMllYSWdhbEYxWlhKNUlEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5QjNhVzVrYjNkYkp5UW5YU0E2SUhSNWNHVnZaaUJuYkc5aVlXd2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUJuYkc5aVlXeGJKeVFuWFNBNklHNTFiR3dwTzF4eVhHNWNkRnh5WEc1Y2RDOHFJVnh5WEc1Y2RDQXFJR3BSZFdWeWVTQkdiM0p0SUZCc2RXZHBibHh5WEc1Y2RDQXFJSFpsY25OcGIyNDZJRE11TkRVdU1DMHlNREV6TGpFd0xqRTNYSEpjYmx4MElDb2dVbVZ4ZFdseVpYTWdhbEYxWlhKNUlIWXhMalVnYjNJZ2JHRjBaWEpjY2x4dVhIUWdLaUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVE1nVFM0Z1FXeHpkWEJjY2x4dVhIUWdLaUJGZUdGdGNHeGxjeUJoYm1RZ1pHOWpkVzFsYm5SaGRHbHZiaUJoZERvZ2FIUjBjRG92TDIxaGJITjFjQzVqYjIwdmFuRjFaWEo1TDJadmNtMHZYSEpjYmx4MElDb2dVSEp2YW1WamRDQnlaWEJ2YzJsMGIzSjVPaUJvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2YldGc2MzVndMMlp2Y20xY2NseHVYSFFnS2lCRWRXRnNJR3hwWTJWdWMyVmtJSFZ1WkdWeUlIUm9aU0JOU1ZRZ1lXNWtJRWRRVENCc2FXTmxibk5sY3k1Y2NseHVYSFFnS2lCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmJXRnNjM1Z3TDJadmNtMGpZMjl3ZVhKcFoyaDBMV0Z1WkMxc2FXTmxibk5sWEhKY2JseDBJQ292WEhKY2JseDBMeXBuYkc5aVlXd2dRV04wYVhabFdFOWlhbVZqZENBcUwxeHlYRzVjZERzb1puVnVZM1JwYjI0b0pDa2dlMXh5WEc1Y2RGd2lkWE5sSUhOMGNtbGpkRndpTzF4eVhHNWNjbHh1WEhRdktseHlYRzVjZEZ4MFZYTmhaMlVnVG05MFpUcGNjbHh1WEhSY2RDMHRMUzB0TFMwdExTMHRYSEpjYmx4MFhIUkVieUJ1YjNRZ2RYTmxJR0p2ZEdnZ1lXcGhlRk4xWW0xcGRDQmhibVFnWVdwaGVFWnZjbTBnYjI0Z2RHaGxJSE5oYldVZ1ptOXliUzRnSUZSb1pYTmxYSEpjYmx4MFhIUm1kVzVqZEdsdmJuTWdZWEpsSUcxMWRIVmhiR3g1SUdWNFkyeDFjMmwyWlM0Z0lGVnpaU0JoYW1GNFUzVmliV2wwSUdsbUlIbHZkU0IzWVc1MFhISmNibHgwWEhSMGJ5QmlhVzVrSUhsdmRYSWdiM2R1SUhOMVltMXBkQ0JvWVc1a2JHVnlJSFJ2SUhSb1pTQm1iM0p0TGlBZ1JtOXlJR1Y0WVcxd2JHVXNYSEpjYmx4eVhHNWNkRngwSkNoa2IyTjFiV1Z1ZENrdWNtVmhaSGtvWm5WdVkzUnBiMjRvS1NCN1hISmNibHgwWEhSY2RDUW9KeU50ZVVadmNtMG5LUzV2YmlnbmMzVmliV2wwSnl3Z1puVnVZM1JwYjI0b1pTa2dlMXh5WEc1Y2RGeDBYSFJjZEdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1RzZ0x5OGdQQzB0SUdsdGNHOXlkR0Z1ZEZ4eVhHNWNkRngwWEhSY2RDUW9kR2hwY3lrdVlXcGhlRk4xWW0xcGRDaDdYSEpjYmx4MFhIUmNkRngwWEhSMFlYSm5aWFE2SUNjamIzVjBjSFYwSjF4eVhHNWNkRngwWEhSY2RIMHBPMXh5WEc1Y2RGeDBYSFI5S1R0Y2NseHVYSFJjZEgwcE8xeHlYRzVjY2x4dVhIUmNkRlZ6WlNCaGFtRjRSbTl5YlNCM2FHVnVJSGx2ZFNCM1lXNTBJSFJvWlNCd2JIVm5hVzRnZEc4Z2JXRnVZV2RsSUdGc2JDQjBhR1VnWlhabGJuUWdZbWx1WkdsdVoxeHlYRzVjZEZ4MFptOXlJSGx2ZFM0Z0lFWnZjaUJsZUdGdGNHeGxMRnh5WEc1Y2NseHVYSFJjZENRb1pHOWpkVzFsYm5RcExuSmxZV1I1S0daMWJtTjBhVzl1S0NrZ2UxeHlYRzVjZEZ4MFhIUWtLQ2NqYlhsR2IzSnRKeWt1WVdwaGVFWnZjbTBvZTF4eVhHNWNkRngwWEhSY2RIUmhjbWRsZERvZ0p5TnZkWFJ3ZFhRblhISmNibHgwWEhSY2RIMHBPMXh5WEc1Y2RGeDBmU2s3WEhKY2JseHlYRzVjZEZ4MFdXOTFJR05oYmlCaGJITnZJSFZ6WlNCaGFtRjRSbTl5YlNCM2FYUm9JR1JsYkdWbllYUnBiMjRnS0hKbGNYVnBjbVZ6SUdwUmRXVnllU0IyTVM0M0t5a3NJSE52SUhSb1pWeHlYRzVjZEZ4MFptOXliU0JrYjJWeklHNXZkQ0JvWVhabElIUnZJR1Y0YVhOMElIZG9aVzRnZVc5MUlHbHVkbTlyWlNCaGFtRjRSbTl5YlRwY2NseHVYSEpjYmx4MFhIUWtLQ2NqYlhsR2IzSnRKeWt1WVdwaGVFWnZjbTBvZTF4eVhHNWNkRngwWEhSa1pXeGxaMkYwYVc5dU9pQjBjblZsTEZ4eVhHNWNkRngwWEhSMFlYSm5aWFE2SUNjamIzVjBjSFYwSjF4eVhHNWNkRngwZlNrN1hISmNibHh5WEc1Y2RGeDBWMmhsYmlCMWMybHVaeUJoYW1GNFJtOXliU3dnZEdobElHRnFZWGhUZFdKdGFYUWdablZ1WTNScGIyNGdkMmxzYkNCaVpTQnBiblp2YTJWa0lHWnZjaUI1YjNWY2NseHVYSFJjZEdGMElIUm9aU0JoY0hCeWIzQnlhV0YwWlNCMGFXMWxMbHh5WEc1Y2RDb3ZYSEpjYmx4eVhHNWNkQzhxS2x4eVhHNWNkQ0FxSUVabFlYUjFjbVVnWkdWMFpXTjBhVzl1WEhKY2JseDBJQ292WEhKY2JseDBkbUZ5SUdabFlYUjFjbVVnUFNCN2ZUdGNjbHh1WEhSbVpXRjBkWEpsTG1acGJHVmhjR2tnUFNBa0tGd2lQR2x1Y0hWMElIUjVjR1U5SjJacGJHVW5MejVjSWlrdVoyVjBLREFwTG1acGJHVnpJQ0U5UFNCMWJtUmxabWx1WldRN1hISmNibHgwWm1WaGRIVnlaUzVtYjNKdFpHRjBZU0E5SUhkcGJtUnZkeTVHYjNKdFJHRjBZU0FoUFQwZ2RXNWtaV1pwYm1Wa08xeHlYRzVjY2x4dVhIUjJZWElnYUdGelVISnZjQ0E5SUNFaEpDNW1iaTV3Y205d08xeHlYRzVjY2x4dVhIUXZMeUJoZEhSeU1pQjFjMlZ6SUhCeWIzQWdkMmhsYmlCcGRDQmpZVzRnWW5WMElHTm9aV05yY3lCMGFHVWdjbVYwZFhKdUlIUjVjR1VnWm05eVhISmNibHgwTHk4Z1lXNGdaWGh3WldOMFpXUWdjM1J5YVc1bkxpQWdkR2hwY3lCaFkyTnZkVzUwY3lCbWIzSWdkR2hsSUdOaGMyVWdkMmhsY21VZ1lTQm1iM0p0SUZ4eVhHNWNkQzh2SUdOdmJuUmhhVzV6SUdsdWNIVjBjeUIzYVhSb0lHNWhiV1Z6SUd4cGEyVWdYQ0poWTNScGIyNWNJaUJ2Y2lCY0ltMWxkR2h2WkZ3aU95QnBiaUIwYUc5elpWeHlYRzVjZEM4dklHTmhjMlZ6SUZ3aWNISnZjRndpSUhKbGRIVnlibk1nZEdobElHVnNaVzFsYm5SY2NseHVYSFFrTG1adUxtRjBkSEl5SUQwZ1puVnVZM1JwYjI0b0tTQjdYSEpjYmx4MFhIUnBaaUFvSUNFZ2FHRnpVSEp2Y0NBcFhISmNibHgwWEhSY2RISmxkSFZ5YmlCMGFHbHpMbUYwZEhJdVlYQndiSGtvZEdocGN5d2dZWEpuZFcxbGJuUnpLVHRjY2x4dVhIUmNkSFpoY2lCMllXd2dQU0IwYUdsekxuQnliM0F1WVhCd2JIa29kR2hwY3l3Z1lYSm5kVzFsYm5SektUdGNjbHh1WEhSY2RHbG1JQ2dnS0NCMllXd2dKaVlnZG1Gc0xtcHhkV1Z5ZVNBcElIeDhJSFI1Y0dWdlppQjJZV3dnUFQwOUlDZHpkSEpwYm1jbklDbGNjbHh1WEhSY2RGeDBjbVYwZFhKdUlIWmhiRHRjY2x4dVhIUmNkSEpsZEhWeWJpQjBhR2x6TG1GMGRISXVZWEJ3Ykhrb2RHaHBjeXdnWVhKbmRXMWxiblJ6S1R0Y2NseHVYSFI5TzF4eVhHNWNjbHh1WEhRdktpcGNjbHh1WEhRZ0tpQmhhbUY0VTNWaWJXbDBLQ2tnY0hKdmRtbGtaWE1nWVNCdFpXTm9ZVzVwYzIwZ1ptOXlJR2x0YldWa2FXRjBaV3g1SUhOMVltMXBkSFJwYm1kY2NseHVYSFFnS2lCaGJpQklWRTFNSUdadmNtMGdkWE5wYm1jZ1FVcEJXQzVjY2x4dVhIUWdLaTljY2x4dVhIUWtMbVp1TG1GcVlYaFRkV0p0YVhRZ1BTQm1kVzVqZEdsdmJpaHZjSFJwYjI1ektTQjdYSEpjYmx4MFhIUXZLbXB6YUdsdWRDQnpZM0pwY0hSMWNtdzZkSEoxWlNBcUwxeHlYRzVjY2x4dVhIUmNkQzh2SUdaaGMzUWdabUZwYkNCcFppQnViM1JvYVc1bklITmxiR1ZqZEdWa0lDaG9kSFJ3T2k4dlpHVjJMbXB4ZFdWeWVTNWpiMjB2ZEdsamEyVjBMekkzTlRJcFhISmNibHgwWEhScFppQW9JWFJvYVhNdWJHVnVaM1JvS1NCN1hISmNibHgwWEhSY2RHeHZaeWduWVdwaGVGTjFZbTFwZERvZ2MydHBjSEJwYm1jZ2MzVmliV2wwSUhCeWIyTmxjM01nTFNCdWJ5QmxiR1Z0Wlc1MElITmxiR1ZqZEdWa0p5azdYSEpjYmx4MFhIUmNkSEpsZEhWeWJpQjBhR2x6TzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RIWmhjaUJ0WlhSb2IyUXNJR0ZqZEdsdmJpd2dkWEpzTENBa1ptOXliU0E5SUhSb2FYTTdYSEpjYmx4eVhHNWNkRngwYVdZZ0tIUjVjR1Z2WmlCdmNIUnBiMjV6SUQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjY2x4dVhIUmNkRngwYjNCMGFXOXVjeUE5SUhzZ2MzVmpZMlZ6Y3pvZ2IzQjBhVzl1Y3lCOU8xeHlYRzVjZEZ4MGZWeHlYRzVjZEZ4MFpXeHpaU0JwWmlBb0lHOXdkR2x2Ym5NZ1BUMDlJSFZ1WkdWbWFXNWxaQ0FwSUh0Y2NseHVYSFJjZEZ4MGIzQjBhVzl1Y3lBOUlIdDlPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEcxbGRHaHZaQ0E5SUc5d2RHbHZibk11ZEhsd1pTQjhmQ0IwYUdsekxtRjBkSEl5S0NkdFpYUm9iMlFuS1R0Y2NseHVYSFJjZEdGamRHbHZiaUE5SUc5d2RHbHZibk11ZFhKc0lDQjhmQ0IwYUdsekxtRjBkSEl5S0NkaFkzUnBiMjRuS1R0Y2NseHVYSEpjYmx4MFhIUjFjbXdnUFNBb2RIbHdaVzltSUdGamRHbHZiaUE5UFQwZ0ozTjBjbWx1WnljcElEOGdKQzUwY21sdEtHRmpkR2x2YmlrZ09pQW5KenRjY2x4dVhIUmNkSFZ5YkNBOUlIVnliQ0I4ZkNCM2FXNWtiM2N1Ykc5allYUnBiMjR1YUhKbFppQjhmQ0FuSnp0Y2NseHVYSFJjZEdsbUlDaDFjbXdwSUh0Y2NseHVYSFJjZEZ4MEx5OGdZMnhsWVc0Z2RYSnNJQ2hrYjI0bmRDQnBibU5zZFdSbElHaGhjMmdnZG1GMVpTbGNjbHh1WEhSY2RGeDBkWEpzSUQwZ0tIVnliQzV0WVhSamFDZ3ZYaWhiWGlOZEt5a3ZLWHg4VzEwcFd6RmRPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEc5d2RHbHZibk1nUFNBa0xtVjRkR1Z1WkNoMGNuVmxMQ0I3WEhKY2JseDBYSFJjZEhWeWJEb2dJSFZ5YkN4Y2NseHVYSFJjZEZ4MGMzVmpZMlZ6Y3pvZ0pDNWhhbUY0VTJWMGRHbHVaM011YzNWalkyVnpjeXhjY2x4dVhIUmNkRngwZEhsd1pUb2diV1YwYUc5a0lIeDhJQ1F1WVdwaGVGTmxkSFJwYm1kekxuUjVjR1VzWEhKY2JseDBYSFJjZEdsbWNtRnRaVk55WXpvZ0wxNW9kSFJ3Y3k5cExuUmxjM1FvZDJsdVpHOTNMbXh2WTJGMGFXOXVMbWh5WldZZ2ZId2dKeWNwSUQ4Z0oycGhkbUZ6WTNKcGNIUTZabUZzYzJVbklEb2dKMkZpYjNWME9tSnNZVzVySjF4eVhHNWNkRngwZlN3Z2IzQjBhVzl1Y3lrN1hISmNibHh5WEc1Y2RGeDBMeThnYUc5dmF5Qm1iM0lnYldGdWFYQjFiR0YwYVc1bklIUm9aU0JtYjNKdElHUmhkR0VnWW1WbWIzSmxJR2wwSUdseklHVjRkSEpoWTNSbFpEdGNjbHh1WEhSY2RDOHZJR052Ym5abGJtbGxiblFnWm05eUlIVnpaU0IzYVhSb0lISnBZMmdnWldScGRHOXljeUJzYVd0bElIUnBibmxOUTBVZ2IzSWdSa05MUldScGRHOXlYSEpjYmx4MFhIUjJZWElnZG1WMGJ5QTlJSHQ5TzF4eVhHNWNkRngwZEdocGN5NTBjbWxuWjJWeUtDZG1iM0p0TFhCeVpTMXpaWEpwWVd4cGVtVW5MQ0JiZEdocGN5d2diM0IwYVc5dWN5d2dkbVYwYjEwcE8xeHlYRzVjZEZ4MGFXWWdLSFpsZEc4dWRtVjBieWtnZTF4eVhHNWNkRngwWEhSc2IyY29KMkZxWVhoVGRXSnRhWFE2SUhOMVltMXBkQ0IyWlhSdlpXUWdkbWxoSUdadmNtMHRjSEpsTFhObGNtbGhiR2w2WlNCMGNtbG5aMlZ5SnlrN1hISmNibHgwWEhSY2RISmxkSFZ5YmlCMGFHbHpPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEM4dklIQnliM1pwWkdVZ2IzQndiM0owZFc1cGRIa2dkRzhnWVd4MFpYSWdabTl5YlNCa1lYUmhJR0psWm05eVpTQnBkQ0JwY3lCelpYSnBZV3hwZW1Wa1hISmNibHgwWEhScFppQW9iM0IwYVc5dWN5NWlaV1p2Y21WVFpYSnBZV3hwZW1VZ0ppWWdiM0IwYVc5dWN5NWlaV1p2Y21WVFpYSnBZV3hwZW1Vb2RHaHBjeXdnYjNCMGFXOXVjeWtnUFQwOUlHWmhiSE5sS1NCN1hISmNibHgwWEhSY2RHeHZaeWduWVdwaGVGTjFZbTFwZERvZ2MzVmliV2wwSUdGaWIzSjBaV1FnZG1saElHSmxabTl5WlZObGNtbGhiR2w2WlNCallXeHNZbUZqYXljcE8xeHlYRzVjZEZ4MFhIUnlaWFIxY200Z2RHaHBjenRjY2x4dVhIUmNkSDFjY2x4dVhISmNibHgwWEhSMllYSWdkSEpoWkdsMGFXOXVZV3dnUFNCdmNIUnBiMjV6TG5SeVlXUnBkR2x2Ym1Gc08xeHlYRzVjZEZ4MGFXWWdLQ0IwY21Ga2FYUnBiMjVoYkNBOVBUMGdkVzVrWldacGJtVmtJQ2tnZTF4eVhHNWNkRngwWEhSMGNtRmthWFJwYjI1aGJDQTlJQ1F1WVdwaGVGTmxkSFJwYm1kekxuUnlZV1JwZEdsdmJtRnNPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEhaaGNpQmxiR1Z0Wlc1MGN5QTlJRnRkTzF4eVhHNWNkRngwZG1GeUlIRjRMQ0JoSUQwZ2RHaHBjeTVtYjNKdFZHOUJjbkpoZVNodmNIUnBiMjV6TG5ObGJXRnVkR2xqTENCbGJHVnRaVzUwY3lrN1hISmNibHgwWEhScFppQW9iM0IwYVc5dWN5NWtZWFJoS1NCN1hISmNibHgwWEhSY2RHOXdkR2x2Ym5NdVpYaDBjbUZFWVhSaElEMGdiM0IwYVc5dWN5NWtZWFJoTzF4eVhHNWNkRngwWEhSeGVDQTlJQ1F1Y0dGeVlXMG9iM0IwYVc5dWN5NWtZWFJoTENCMGNtRmthWFJwYjI1aGJDazdYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwTHk4Z1oybDJaU0J3Y21VdGMzVmliV2wwSUdOaGJHeGlZV05ySUdGdUlHOXdjRzl5ZEhWdWFYUjVJSFJ2SUdGaWIzSjBJSFJvWlNCemRXSnRhWFJjY2x4dVhIUmNkR2xtSUNodmNIUnBiMjV6TG1KbFptOXlaVk4xWW0xcGRDQW1KaUJ2Y0hScGIyNXpMbUpsWm05eVpWTjFZbTFwZENoaExDQjBhR2x6TENCdmNIUnBiMjV6S1NBOVBUMGdabUZzYzJVcElIdGNjbHh1WEhSY2RGeDBiRzluS0NkaGFtRjRVM1ZpYldsME9pQnpkV0p0YVhRZ1lXSnZjblJsWkNCMmFXRWdZbVZtYjNKbFUzVmliV2wwSUdOaGJHeGlZV05ySnlrN1hISmNibHgwWEhSY2RISmxkSFZ5YmlCMGFHbHpPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEM4dklHWnBjbVVnZG1WMGIyRmliR1VnSjNaaGJHbGtZWFJsSnlCbGRtVnVkRnh5WEc1Y2RGeDBkR2hwY3k1MGNtbG5aMlZ5S0NkbWIzSnRMWE4xWW0xcGRDMTJZV3hwWkdGMFpTY3NJRnRoTENCMGFHbHpMQ0J2Y0hScGIyNXpMQ0IyWlhSdlhTazdYSEpjYmx4MFhIUnBaaUFvZG1WMGJ5NTJaWFJ2S1NCN1hISmNibHgwWEhSY2RHeHZaeWduWVdwaGVGTjFZbTFwZERvZ2MzVmliV2wwSUhabGRHOWxaQ0IyYVdFZ1ptOXliUzF6ZFdKdGFYUXRkbUZzYVdSaGRHVWdkSEpwWjJkbGNpY3BPMXh5WEc1Y2RGeDBYSFJ5WlhSMWNtNGdkR2hwY3p0Y2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUjJZWElnY1NBOUlDUXVjR0Z5WVcwb1lTd2dkSEpoWkdsMGFXOXVZV3dwTzF4eVhHNWNkRngwYVdZZ0tIRjRLU0I3WEhKY2JseDBYSFJjZEhFZ1BTQW9JSEVnUHlBb2NTQXJJQ2NtSnlBcklIRjRLU0E2SUhGNElDazdYSEpjYmx4MFhIUjlYSEpjYmx4MFhIUnBaaUFvYjNCMGFXOXVjeTUwZVhCbExuUnZWWEJ3WlhKRFlYTmxLQ2tnUFQwZ0owZEZWQ2NwSUh0Y2NseHVYSFJjZEZ4MGIzQjBhVzl1Y3k1MWNtd2dLejBnS0c5d2RHbHZibk11ZFhKc0xtbHVaR1Y0VDJZb0p6OG5LU0ErUFNBd0lEOGdKeVluSURvZ0p6OG5LU0FySUhFN1hISmNibHgwWEhSY2RHOXdkR2x2Ym5NdVpHRjBZU0E5SUc1MWJHdzdJQ0F2THlCa1lYUmhJR2x6SUc1MWJHd2dabTl5SUNkblpYUW5YSEpjYmx4MFhIUjlYSEpjYmx4MFhIUmxiSE5sSUh0Y2NseHVYSFJjZEZ4MGIzQjBhVzl1Y3k1a1lYUmhJRDBnY1RzZ0x5OGdaR0YwWVNCcGN5QjBhR1VnY1hWbGNua2djM1J5YVc1bklHWnZjaUFuY0c5emRDZGNjbHh1WEhSY2RIMWNjbHh1WEhKY2JseDBYSFIyWVhJZ1kyRnNiR0poWTJ0eklEMGdXMTA3WEhKY2JseDBYSFJwWmlBb2IzQjBhVzl1Y3k1eVpYTmxkRVp2Y20wcElIdGNjbHh1WEhSY2RGeDBZMkZzYkdKaFkydHpMbkIxYzJnb1puVnVZM1JwYjI0b0tTQjdJQ1JtYjNKdExuSmxjMlYwUm05eWJTZ3BPeUI5S1R0Y2NseHVYSFJjZEgxY2NseHVYSFJjZEdsbUlDaHZjSFJwYjI1ekxtTnNaV0Z5Um05eWJTa2dlMXh5WEc1Y2RGeDBYSFJqWVd4c1ltRmphM011Y0hWemFDaG1kVzVqZEdsdmJpZ3BJSHNnSkdadmNtMHVZMnhsWVhKR2IzSnRLRzl3ZEdsdmJuTXVhVzVqYkhWa1pVaHBaR1JsYmlrN0lIMHBPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEM4dklIQmxjbVp2Y20wZ1lTQnNiMkZrSUc5dUlIUm9aU0IwWVhKblpYUWdiMjVzZVNCcFppQmtZWFJoVkhsd1pTQnBjeUJ1YjNRZ2NISnZkbWxrWldSY2NseHVYSFJjZEdsbUlDZ2hiM0IwYVc5dWN5NWtZWFJoVkhsd1pTQW1KaUJ2Y0hScGIyNXpMblJoY21kbGRDa2dlMXh5WEc1Y2RGeDBYSFIyWVhJZ2IyeGtVM1ZqWTJWemN5QTlJRzl3ZEdsdmJuTXVjM1ZqWTJWemN5QjhmQ0JtZFc1amRHbHZiaWdwZTMwN1hISmNibHgwWEhSY2RHTmhiR3hpWVdOcmN5NXdkWE5vS0daMWJtTjBhVzl1S0dSaGRHRXBJSHRjY2x4dVhIUmNkRngwWEhSMllYSWdabTRnUFNCdmNIUnBiMjV6TG5KbGNHeGhZMlZVWVhKblpYUWdQeUFuY21Wd2JHRmpaVmRwZEdnbklEb2dKMmgwYld3bk8xeHlYRzVjZEZ4MFhIUmNkQ1FvYjNCMGFXOXVjeTUwWVhKblpYUXBXMlp1WFNoa1lYUmhLUzVsWVdOb0tHOXNaRk4xWTJObGMzTXNJR0Z5WjNWdFpXNTBjeWs3WEhKY2JseDBYSFJjZEgwcE8xeHlYRzVjZEZ4MGZWeHlYRzVjZEZ4MFpXeHpaU0JwWmlBb2IzQjBhVzl1Y3k1emRXTmpaWE56S1NCN1hISmNibHgwWEhSY2RHTmhiR3hpWVdOcmN5NXdkWE5vS0c5d2RHbHZibk11YzNWalkyVnpjeWs3WEhKY2JseDBYSFI5WEhKY2JseHlYRzVjZEZ4MGIzQjBhVzl1Y3k1emRXTmpaWE56SUQwZ1puVnVZM1JwYjI0b1pHRjBZU3dnYzNSaGRIVnpMQ0I0YUhJcElIc2dMeThnYWxGMVpYSjVJREV1TkNzZ2NHRnpjMlZ6SUhob2NpQmhjeUF6Y21RZ1lYSm5YSEpjYmx4MFhIUmNkSFpoY2lCamIyNTBaWGgwSUQwZ2IzQjBhVzl1Y3k1amIyNTBaWGgwSUh4OElIUm9hWE1nT3lBZ0lDQXZMeUJxVVhWbGNua2dNUzQwS3lCemRYQndiM0owY3lCelkyOXdaU0JqYjI1MFpYaDBYSEpjYmx4MFhIUmNkR1p2Y2lBb2RtRnlJR2s5TUN3Z2JXRjRQV05oYkd4aVlXTnJjeTVzWlc1bmRHZzdJR2tnUENCdFlYZzdJR2tyS3lrZ2UxeHlYRzVjZEZ4MFhIUmNkR05oYkd4aVlXTnJjMXRwWFM1aGNIQnNlU2hqYjI1MFpYaDBMQ0JiWkdGMFlTd2djM1JoZEhWekxDQjRhSElnZkh3Z0pHWnZjbTBzSUNSbWIzSnRYU2s3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEgwN1hISmNibHh5WEc1Y2RGeDBhV1lnS0c5d2RHbHZibk11WlhKeWIzSXBJSHRjY2x4dVhIUmNkRngwZG1GeUlHOXNaRVZ5Y205eUlEMGdiM0IwYVc5dWN5NWxjbkp2Y2p0Y2NseHVYSFJjZEZ4MGIzQjBhVzl1Y3k1bGNuSnZjaUE5SUdaMWJtTjBhVzl1S0hob2Npd2djM1JoZEhWekxDQmxjbkp2Y2lrZ2UxeHlYRzVjZEZ4MFhIUmNkSFpoY2lCamIyNTBaWGgwSUQwZ2IzQjBhVzl1Y3k1amIyNTBaWGgwSUh4OElIUm9hWE03WEhKY2JseDBYSFJjZEZ4MGIyeGtSWEp5YjNJdVlYQndiSGtvWTI5dWRHVjRkQ3dnVzNob2Npd2djM1JoZEhWekxDQmxjbkp2Y2l3Z0pHWnZjbTFkS1R0Y2NseHVYSFJjZEZ4MGZUdGNjbHh1WEhSY2RIMWNjbHh1WEhKY2JseDBYSFFnYVdZZ0tHOXdkR2x2Ym5NdVkyOXRjR3hsZEdVcElIdGNjbHh1WEhSY2RGeDBkbUZ5SUc5c1pFTnZiWEJzWlhSbElEMGdiM0IwYVc5dWN5NWpiMjF3YkdWMFpUdGNjbHh1WEhSY2RGeDBiM0IwYVc5dWN5NWpiMjF3YkdWMFpTQTlJR1oxYm1OMGFXOXVLSGhvY2l3Z2MzUmhkSFZ6S1NCN1hISmNibHgwWEhSY2RGeDBkbUZ5SUdOdmJuUmxlSFFnUFNCdmNIUnBiMjV6TG1OdmJuUmxlSFFnZkh3Z2RHaHBjenRjY2x4dVhIUmNkRngwWEhSdmJHUkRiMjF3YkdWMFpTNWhjSEJzZVNoamIyNTBaWGgwTENCYmVHaHlMQ0J6ZEdGMGRYTXNJQ1JtYjNKdFhTazdYSEpjYmx4MFhIUmNkSDA3WEhKY2JseDBYSFI5WEhKY2JseHlYRzVjZEZ4MEx5OGdZWEpsSUhSb1pYSmxJR1pwYkdWeklIUnZJSFZ3Ykc5aFpEOWNjbHh1WEhKY2JseDBYSFF2THlCYmRtRnNkV1ZkSUNocGMzTjFaU0FqTVRFektTd2dZV3h6YnlCelpXVWdZMjl0YldWdWREcGNjbHh1WEhSY2RDOHZJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzl0WVd4emRYQXZabTl5YlM5amIyMXRhWFF2TlRnNE16QTJZV1ZrWW1FeFpHVXdNVE00T0RBek1tUTFaalF5WVRZd01UVTVaV1ZoT1RJeU9DTmpiMjF0YVhSamIyMXRaVzUwTFRJeE9EQXlNVGxjY2x4dVhIUmNkSFpoY2lCbWFXeGxTVzV3ZFhSeklEMGdKQ2duYVc1d2RYUmJkSGx3WlQxbWFXeGxYVHBsYm1GaWJHVmtKeXdnZEdocGN5a3VabWxzZEdWeUtHWjFibU4wYVc5dUtDa2dleUJ5WlhSMWNtNGdKQ2gwYUdsektTNTJZV3dvS1NBaFBUMGdKeWM3SUgwcE8xeHlYRzVjY2x4dVhIUmNkSFpoY2lCb1lYTkdhV3hsU1c1d2RYUnpJRDBnWm1sc1pVbHVjSFYwY3k1c1pXNW5kR2dnUGlBd08xeHlYRzVjZEZ4MGRtRnlJRzF3SUQwZ0oyMTFiSFJwY0dGeWRDOW1iM0p0TFdSaGRHRW5PMXh5WEc1Y2RGeDBkbUZ5SUcxMWJIUnBjR0Z5ZENBOUlDZ2tabTl5YlM1aGRIUnlLQ2RsYm1OMGVYQmxKeWtnUFQwZ2JYQWdmSHdnSkdadmNtMHVZWFIwY2lnblpXNWpiMlJwYm1jbktTQTlQU0J0Y0NrN1hISmNibHh5WEc1Y2RGeDBkbUZ5SUdacGJHVkJVRWtnUFNCbVpXRjBkWEpsTG1acGJHVmhjR2tnSmlZZ1ptVmhkSFZ5WlM1bWIzSnRaR0YwWVR0Y2NseHVYSFJjZEd4dlp5aGNJbVpwYkdWQlVFa2dPbHdpSUNzZ1ptbHNaVUZRU1NrN1hISmNibHgwWEhSMllYSWdjMmh2ZFd4a1ZYTmxSbkpoYldVZ1BTQW9hR0Z6Um1sc1pVbHVjSFYwY3lCOGZDQnRkV3gwYVhCaGNuUXBJQ1ltSUNGbWFXeGxRVkJKTzF4eVhHNWNjbHh1WEhSY2RIWmhjaUJxY1hob2NqdGNjbHh1WEhKY2JseDBYSFF2THlCdmNIUnBiMjV6TG1sbWNtRnRaU0JoYkd4dmQzTWdkWE5sY2lCMGJ5Qm1iM0pqWlNCcFpuSmhiV1VnYlc5a1pWeHlYRzVjZEZ4MEx5OGdNRFl0VGs5V0xUQTVPaUJ1YjNjZ1pHVm1ZWFZzZEdsdVp5QjBieUJwWm5KaGJXVWdiVzlrWlNCcFppQm1hV3hsSUdsdWNIVjBJR2x6SUdSbGRHVmpkR1ZrWEhKY2JseDBYSFJwWmlBb2IzQjBhVzl1Y3k1cFpuSmhiV1VnSVQwOUlHWmhiSE5sSUNZbUlDaHZjSFJwYjI1ekxtbG1jbUZ0WlNCOGZDQnphRzkxYkdSVmMyVkdjbUZ0WlNrcElIdGNjbHh1WEhSY2RGeDBMeThnYUdGamF5QjBieUJtYVhnZ1UyRm1ZWEpwSUdoaGJtY2dLSFJvWVc1cmN5QjBieUJVYVcwZ1RXOXNaVzVrYVdwcklHWnZjaUIwYUdsektWeHlYRzVjZEZ4MFhIUXZMeUJ6WldVNklDQm9kSFJ3T2k4dlozSnZkWEJ6TG1kdmIyZHNaUzVqYjIwdlozSnZkWEF2YW5GMVpYSjVMV1JsZGk5aWNtOTNjMlZmZEdoeVpXRmtMM1JvY21WaFpDOHpOak01TldJM1lXSTFNVEJrWkRWa1hISmNibHgwWEhSY2RHbG1JQ2h2Y0hScGIyNXpMbU5zYjNObFMyVmxjRUZzYVhabEtTQjdYSEpjYmx4MFhIUmNkRngwSkM1blpYUW9iM0IwYVc5dWN5NWpiRzl6WlV0bFpYQkJiR2wyWlN3Z1puVnVZM1JwYjI0b0tTQjdYSEpjYmx4MFhIUmNkRngwWEhScWNYaG9jaUE5SUdacGJHVlZjR3h2WVdSSlpuSmhiV1VvWVNrN1hISmNibHgwWEhSY2RGeDBmU2s3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEZ4MFpXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MGFuRjRhSElnUFNCbWFXeGxWWEJzYjJGa1NXWnlZVzFsS0dFcE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlYSEpjYmx4MFhIUmxiSE5sSUdsbUlDZ29hR0Z6Um1sc1pVbHVjSFYwY3lCOGZDQnRkV3gwYVhCaGNuUXBJQ1ltSUdacGJHVkJVRWtwSUh0Y2NseHVYSFJjZEZ4MGFuRjRhSElnUFNCbWFXeGxWWEJzYjJGa1dHaHlLR0VwTzF4eVhHNWNkRngwZlZ4eVhHNWNkRngwWld4elpTQjdYSEpjYmx4MFhIUmNkR3B4ZUdoeUlEMGdKQzVoYW1GNEtHOXdkR2x2Ym5NcE8xeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkQ1JtYjNKdExuSmxiVzkyWlVSaGRHRW9KMnB4ZUdoeUp5a3VaR0YwWVNnbmFuRjRhSEluTENCcWNYaG9jaWs3WEhKY2JseHlYRzVjZEZ4MEx5OGdZMnhsWVhJZ1pXeGxiV1Z1ZENCaGNuSmhlVnh5WEc1Y2RGeDBabTl5SUNoMllYSWdhejB3T3lCcklEd2daV3hsYldWdWRITXViR1Z1WjNSb095QnJLeXNwWEhKY2JseDBYSFJjZEdWc1pXMWxiblJ6VzJ0ZElEMGdiblZzYkR0Y2NseHVYSEpjYmx4MFhIUXZMeUJtYVhKbElDZHViM1JwWm5rbklHVjJaVzUwWEhKY2JseDBYSFIwYUdsekxuUnlhV2RuWlhJb0oyWnZjbTB0YzNWaWJXbDBMVzV2ZEdsbWVTY3NJRnQwYUdsekxDQnZjSFJwYjI1elhTazdYSEpjYmx4MFhIUnlaWFIxY200Z2RHaHBjenRjY2x4dVhISmNibHgwWEhRdkx5QjFkR2xzYVhSNUlHWnVJR1p2Y2lCa1pXVndJSE5sY21saGJHbDZZWFJwYjI1Y2NseHVYSFJjZEdaMWJtTjBhVzl1SUdSbFpYQlRaWEpwWVd4cGVtVW9aWGgwY21GRVlYUmhLWHRjY2x4dVhIUmNkRngwZG1GeUlITmxjbWxoYkdsNlpXUWdQU0FrTG5CaGNtRnRLR1Y0ZEhKaFJHRjBZU3dnYjNCMGFXOXVjeTUwY21Ga2FYUnBiMjVoYkNrdWMzQnNhWFFvSnlZbktUdGNjbHh1WEhSY2RGeDBkbUZ5SUd4bGJpQTlJSE5sY21saGJHbDZaV1F1YkdWdVozUm9PMXh5WEc1Y2RGeDBYSFIyWVhJZ2NtVnpkV3gwSUQwZ1cxMDdYSEpjYmx4MFhIUmNkSFpoY2lCcExDQndZWEowTzF4eVhHNWNkRngwWEhSbWIzSWdLR2s5TURzZ2FTQThJR3hsYmpzZ2FTc3JLU0I3WEhKY2JseDBYSFJjZEZ4MEx5OGdJekkxTWpzZ2RXNWtieUJ3WVhKaGJTQnpjR0ZqWlNCeVpYQnNZV05sYldWdWRGeHlYRzVjZEZ4MFhIUmNkSE5sY21saGJHbDZaV1JiYVYwZ1BTQnpaWEpwWVd4cGVtVmtXMmxkTG5KbGNHeGhZMlVvTDF4Y0t5OW5MQ2NnSnlrN1hISmNibHgwWEhSY2RGeDBjR0Z5ZENBOUlITmxjbWxoYkdsNlpXUmJhVjB1YzNCc2FYUW9KejBuS1R0Y2NseHVYSFJjZEZ4MFhIUXZMeUFqTWpjNE95QjFjMlVnWVhKeVlYa2dhVzV6ZEdWaFpDQnZaaUJ2WW1wbFkzUWdjM1J2Y21GblpTd2dabUYyYjNKcGJtY2dZWEp5WVhrZ2MyVnlhV0ZzYVhwaGRHbHZibk5jY2x4dVhIUmNkRngwWEhSeVpYTjFiSFF1Y0hWemFDaGJaR1ZqYjJSbFZWSkpRMjl0Y0c5dVpXNTBLSEJoY25SYk1GMHBMQ0JrWldOdlpHVlZVa2xEYjIxd2IyNWxiblFvY0dGeWRGc3hYU2xkS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUnlaWFIxY200Z2NtVnpkV3gwTzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RDQXZMeUJZVFV4SWRIUndVbVZ4ZFdWemRDQk1aWFpsYkNBeUlHWnBiR1VnZFhCc2IyRmtjeUFvWW1sbklHaGhkQ0IwYVhBZ2RHOGdabkpoYm1OdmFYTXliV1YwZWlsY2NseHVYSFJjZEdaMWJtTjBhVzl1SUdacGJHVlZjR3h2WVdSWWFISW9ZU2tnZTF4eVhHNWNkRngwWEhSMllYSWdabTl5YldSaGRHRWdQU0J1WlhjZ1JtOXliVVJoZEdFb0tUdGNjbHh1WEhKY2JseDBYSFJjZEdadmNpQW9kbUZ5SUdrOU1Ec2dhU0E4SUdFdWJHVnVaM1JvT3lCcEt5c3BJSHRjY2x4dVhIUmNkRngwWEhSbWIzSnRaR0YwWVM1aGNIQmxibVFvWVZ0cFhTNXVZVzFsTENCaFcybGRMblpoYkhWbEtUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MGFXWWdLRzl3ZEdsdmJuTXVaWGgwY21GRVlYUmhLU0I3WEhKY2JseDBYSFJjZEZ4MGRtRnlJSE5sY21saGJHbDZaV1JFWVhSaElEMGdaR1ZsY0ZObGNtbGhiR2w2WlNodmNIUnBiMjV6TG1WNGRISmhSR0YwWVNrN1hISmNibHgwWEhSY2RGeDBabTl5SUNocFBUQTdJR2tnUENCelpYSnBZV3hwZW1Wa1JHRjBZUzVzWlc1bmRHZzdJR2tyS3lsY2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNoelpYSnBZV3hwZW1Wa1JHRjBZVnRwWFNsY2NseHVYSFJjZEZ4MFhIUmNkRngwWm05eWJXUmhkR0V1WVhCd1pXNWtLSE5sY21saGJHbDZaV1JFWVhSaFcybGRXekJkTENCelpYSnBZV3hwZW1Wa1JHRjBZVnRwWFZzeFhTazdYSEpjYmx4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RHOXdkR2x2Ym5NdVpHRjBZU0E5SUc1MWJHdzdYSEpjYmx4eVhHNWNkRngwWEhSMllYSWdjeUE5SUNRdVpYaDBaVzVrS0hSeWRXVXNJSHQ5TENBa0xtRnFZWGhUWlhSMGFXNW5jeXdnYjNCMGFXOXVjeXdnZTF4eVhHNWNkRngwWEhSY2RHTnZiblJsYm5SVWVYQmxPaUJtWVd4elpTeGNjbHh1WEhSY2RGeDBYSFJ3Y205alpYTnpSR0YwWVRvZ1ptRnNjMlVzWEhKY2JseDBYSFJjZEZ4MFkyRmphR1U2SUdaaGJITmxMRnh5WEc1Y2RGeDBYSFJjZEhSNWNHVTZJRzFsZEdodlpDQjhmQ0FuVUU5VFZDZGNjbHh1WEhSY2RGeDBmU2s3WEhKY2JseHlYRzVjZEZ4MFhIUnBaaUFvYjNCMGFXOXVjeTUxY0d4dllXUlFjbTluY21WemN5a2dlMXh5WEc1Y2RGeDBYSFJjZEM4dklIZHZjbXRoY205MWJtUWdZbVZqWVhWelpTQnFjVmhJVWlCa2IyVnpJRzV2ZENCbGVIQnZjMlVnZFhCc2IyRmtJSEJ5YjNCbGNuUjVYSEpjYmx4MFhIUmNkRngwY3k1NGFISWdQU0JtZFc1amRHbHZiaWdwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkSFpoY2lCNGFISWdQU0FrTG1GcVlYaFRaWFIwYVc1bmN5NTRhSElvS1R0Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNoNGFISXVkWEJzYjJGa0tTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RIaG9jaTUxY0d4dllXUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25jSEp2WjNKbGMzTW5MQ0JtZFc1amRHbHZiaWhsZG1WdWRDa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkSFpoY2lCd1pYSmpaVzUwSUQwZ01EdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUjJZWElnY0c5emFYUnBiMjRnUFNCbGRtVnVkQzVzYjJGa1pXUWdmSHdnWlhabGJuUXVjRzl6YVhScGIyNDdJQzhxWlhabGJuUXVjRzl6YVhScGIyNGdhWE1nWkdWd2NtVmpZWFJsWkNvdlhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MGRtRnlJSFJ2ZEdGc0lEMGdaWFpsYm5RdWRHOTBZV3c3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwYVdZZ0tHVjJaVzUwTG14bGJtZDBhRU52YlhCMWRHRmliR1VwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RIQmxjbU5sYm5RZ1BTQk5ZWFJvTG1ObGFXd29jRzl6YVhScGIyNGdMeUIwYjNSaGJDQXFJREV3TUNrN1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RHOXdkR2x2Ym5NdWRYQnNiMkZrVUhKdlozSmxjM01vWlhabGJuUXNJSEJ2YzJsMGFXOXVMQ0IwYjNSaGJDd2djR1Z5WTJWdWRDazdYSEpjYmx4MFhIUmNkRngwWEhSY2RIMHNJR1poYkhObEtUdGNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQjRhSEk3WEhKY2JseDBYSFJjZEZ4MGZUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MGN5NWtZWFJoSUQwZ2JuVnNiRHRjY2x4dVhIUmNkRngwZG1GeUlHSmxabTl5WlZObGJtUWdQU0J6TG1KbFptOXlaVk5sYm1RN1hISmNibHgwWEhSY2RITXVZbVZtYjNKbFUyVnVaQ0E5SUdaMWJtTjBhVzl1S0hob2Npd2dieWtnZTF4eVhHNWNkRngwWEhSY2RDOHZVMlZ1WkNCR2IzSnRSR0YwWVNncElIQnliM1pwWkdWa0lHSjVJSFZ6WlhKY2NseHVYSFJjZEZ4MFhIUnBaaUFvYjNCMGFXOXVjeTVtYjNKdFJHRjBZU2xjY2x4dVhIUmNkRngwWEhSY2RHOHVaR0YwWVNBOUlHOXdkR2x2Ym5NdVptOXliVVJoZEdFN1hISmNibHgwWEhSY2RGeDBaV3h6WlZ4eVhHNWNkRngwWEhSY2RGeDBieTVrWVhSaElEMGdabTl5YldSaGRHRTdYSEpjYmx4MFhIUmNkRngwYVdZb1ltVm1iM0psVTJWdVpDbGNjbHh1WEhSY2RGeDBYSFJjZEdKbFptOXlaVk5sYm1RdVkyRnNiQ2gwYUdsekxDQjRhSElzSUc4cE8xeHlYRzVjZEZ4MFhIUjlPMXh5WEc1Y2RGeDBYSFJ5WlhSMWNtNGdKQzVoYW1GNEtITXBPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEM4dklIQnlhWFpoZEdVZ1puVnVZM1JwYjI0Z1ptOXlJR2hoYm1Sc2FXNW5JR1pwYkdVZ2RYQnNiMkZrY3lBb2FHRjBJSFJwY0NCMGJ5QlpRVWhQVHlFcFhISmNibHgwWEhSbWRXNWpkR2x2YmlCbWFXeGxWWEJzYjJGa1NXWnlZVzFsS0dFcElIdGNjbHh1WEhSY2RGeDBkbUZ5SUdadmNtMGdQU0FrWm05eWJWc3dYU3dnWld3c0lHa3NJSE1zSUdjc0lHbGtMQ0FrYVc4c0lHbHZMQ0I0YUhJc0lITjFZaXdnYml3Z2RHbHRaV1JQZFhRc0lIUnBiV1Z2ZFhSSVlXNWtiR1U3WEhKY2JseDBYSFJjZEhaaGNpQmtaV1psY25KbFpDQTlJQ1F1UkdWbVpYSnlaV1FvS1R0Y2NseHVYSEpjYmx4MFhIUmNkQzh2SUNNek5ERmNjbHh1WEhSY2RGeDBaR1ZtWlhKeVpXUXVZV0p2Y25RZ1BTQm1kVzVqZEdsdmJpaHpkR0YwZFhNcElIdGNjbHh1WEhSY2RGeDBYSFI0YUhJdVlXSnZjblFvYzNSaGRIVnpLVHRjY2x4dVhIUmNkRngwZlR0Y2NseHVYSEpjYmx4MFhIUmNkR2xtSUNoaEtTQjdYSEpjYmx4MFhIUmNkRngwTHk4Z1pXNXpkWEpsSUhSb1lYUWdaWFpsY25rZ2MyVnlhV0ZzYVhwbFpDQnBibkIxZENCcGN5QnpkR2xzYkNCbGJtRmliR1ZrWEhKY2JseDBYSFJjZEZ4MFptOXlJQ2hwUFRBN0lHa2dQQ0JsYkdWdFpXNTBjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWld3Z1BTQWtLR1ZzWlcxbGJuUnpXMmxkS1R0Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNnZ2FHRnpVSEp2Y0NBcFhISmNibHgwWEhSY2RGeDBYSFJjZEdWc0xuQnliM0FvSjJScGMyRmliR1ZrSnl3Z1ptRnNjMlVwTzF4eVhHNWNkRngwWEhSY2RGeDBaV3h6WlZ4eVhHNWNkRngwWEhSY2RGeDBYSFJsYkM1eVpXMXZkbVZCZEhSeUtDZGthWE5oWW14bFpDY3BPMXh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwY3lBOUlDUXVaWGgwWlc1a0tIUnlkV1VzSUh0OUxDQWtMbUZxWVhoVFpYUjBhVzVuY3l3Z2IzQjBhVzl1Y3lrN1hISmNibHgwWEhSY2RITXVZMjl1ZEdWNGRDQTlJSE11WTI5dWRHVjRkQ0I4ZkNCek8xeHlYRzVjZEZ4MFhIUnBaQ0E5SUNkcWNVWnZjbTFKVHljZ0t5QW9ibVYzSUVSaGRHVW9LUzVuWlhSVWFXMWxLQ2twTzF4eVhHNWNkRngwWEhScFppQW9jeTVwWm5KaGJXVlVZWEpuWlhRcElIdGNjbHh1WEhSY2RGeDBYSFFrYVc4Z1BTQWtLSE11YVdaeVlXMWxWR0Z5WjJWMEtUdGNjbHh1WEhSY2RGeDBYSFJ1SUQwZ0pHbHZMbUYwZEhJeUtDZHVZVzFsSnlrN1hISmNibHgwWEhSY2RGeDBhV1lnS0NGdUtWeHlYRzVjZEZ4MFhIUmNkRngwSUNScGJ5NWhkSFJ5TWlnbmJtRnRaU2NzSUdsa0tUdGNjbHh1WEhSY2RGeDBYSFJsYkhObFhISmNibHgwWEhSY2RGeDBYSFJwWkNBOUlHNDdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkRngwWld4elpTQjdYSEpjYmx4MFhIUmNkRngwSkdsdklEMGdKQ2duUEdsbWNtRnRaU0J1WVcxbFBWd2lKeUFySUdsa0lDc2dKMXdpSUhOeVl6MWNJaWNySUhNdWFXWnlZVzFsVTNKaklDc25YQ0lnTHo0bktUdGNjbHh1WEhSY2RGeDBYSFFrYVc4dVkzTnpLSHNnY0c5emFYUnBiMjQ2SUNkaFluTnZiSFYwWlNjc0lIUnZjRG9nSnkweE1EQXdjSGduTENCc1pXWjBPaUFuTFRFd01EQndlQ2NnZlNrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RGeDBhVzhnUFNBa2FXOWJNRjA3WEhKY2JseHlYRzVjY2x4dVhIUmNkRngwZUdoeUlEMGdleUF2THlCdGIyTnJJRzlpYW1WamRGeHlYRzVjZEZ4MFhIUmNkR0ZpYjNKMFpXUTZJREFzWEhKY2JseDBYSFJjZEZ4MGNtVnpjRzl1YzJWVVpYaDBPaUJ1ZFd4c0xGeHlYRzVjZEZ4MFhIUmNkSEpsYzNCdmJuTmxXRTFNT2lCdWRXeHNMRnh5WEc1Y2RGeDBYSFJjZEhOMFlYUjFjem9nTUN4Y2NseHVYSFJjZEZ4MFhIUnpkR0YwZFhOVVpYaDBPaUFuYmk5aEp5eGNjbHh1WEhSY2RGeDBYSFJuWlhSQmJHeFNaWE53YjI1elpVaGxZV1JsY25NNklHWjFibU4wYVc5dUtDa2dlMzBzWEhKY2JseDBYSFJjZEZ4MFoyVjBVbVZ6Y0c5dWMyVklaV0ZrWlhJNklHWjFibU4wYVc5dUtDa2dlMzBzWEhKY2JseDBYSFJjZEZ4MGMyVjBVbVZ4ZFdWemRFaGxZV1JsY2pvZ1puVnVZM1JwYjI0b0tTQjdmU3hjY2x4dVhIUmNkRngwWEhSaFltOXlkRG9nWm5WdVkzUnBiMjRvYzNSaGRIVnpLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUjJZWElnWlNBOUlDaHpkR0YwZFhNZ1BUMDlJQ2QwYVcxbGIzVjBKeUEvSUNkMGFXMWxiM1YwSnlBNklDZGhZbTl5ZEdWa0p5azdYSEpjYmx4MFhIUmNkRngwWEhSc2IyY29KMkZpYjNKMGFXNW5JSFZ3Ykc5aFpDNHVMaUFuSUNzZ1pTazdYSEpjYmx4MFhIUmNkRngwWEhSMGFHbHpMbUZpYjNKMFpXUWdQU0F4TzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEhSeWVTQjdJQzh2SUNNeU1UUXNJQ015TlRkY2NseHVYSFJjZEZ4MFhIUmNkRngwYVdZZ0tHbHZMbU52Ym5SbGJuUlhhVzVrYjNjdVpHOWpkVzFsYm5RdVpYaGxZME52YlcxaGJtUXBJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJwYnk1amIyNTBaVzUwVjJsdVpHOTNMbVJ2WTNWdFpXNTBMbVY0WldORGIyMXRZVzVrS0NkVGRHOXdKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBYSFJjZEdOaGRHTm9LR2xuYm05eVpTa2dlMzFjY2x4dVhISmNibHgwWEhSY2RGeDBYSFFrYVc4dVlYUjBjaWduYzNKakp5d2djeTVwWm5KaGJXVlRjbU1wT3lBdkx5QmhZbTl5ZENCdmNDQnBiaUJ3Y205bmNtVnpjMXh5WEc1Y2RGeDBYSFJjZEZ4MGVHaHlMbVZ5Y205eUlEMGdaVHRjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2h6TG1WeWNtOXlLVnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUnpMbVZ5Y205eUxtTmhiR3dvY3k1amIyNTBaWGgwTENCNGFISXNJR1VzSUhOMFlYUjFjeWs3WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvWnlsY2NseHVYSFJjZEZ4MFhIUmNkRngwSkM1bGRtVnVkQzUwY21sbloyVnlLRndpWVdwaGVFVnljbTl5WENJc0lGdDRhSElzSUhNc0lHVmRLVHRjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2h6TG1OdmJYQnNaWFJsS1Z4eVhHNWNkRngwWEhSY2RGeDBYSFJ6TG1OdmJYQnNaWFJsTG1OaGJHd29jeTVqYjI1MFpYaDBMQ0I0YUhJc0lHVXBPMXh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MGZUdGNjbHh1WEhKY2JseDBYSFJjZEdjZ1BTQnpMbWRzYjJKaGJEdGNjbHh1WEhSY2RGeDBMeThnZEhKcFoyZGxjaUJoYW1GNElHZHNiMkpoYkNCbGRtVnVkSE1nYzI4Z2RHaGhkQ0JoWTNScGRtbDBlUzlpYkc5amF5QnBibVJwWTJGMGIzSnpJSGR2Y21zZ2JHbHJaU0J1YjNKdFlXeGNjbHh1WEhSY2RGeDBhV1lnS0djZ0ppWWdNQ0E5UFQwZ0pDNWhZM1JwZG1Vckt5a2dlMXh5WEc1Y2RGeDBYSFJjZENRdVpYWmxiblF1ZEhKcFoyZGxjaWhjSW1GcVlYaFRkR0Z5ZEZ3aUtUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJwWmlBb1p5a2dlMXh5WEc1Y2RGeDBYSFJjZENRdVpYWmxiblF1ZEhKcFoyZGxjaWhjSW1GcVlYaFRaVzVrWENJc0lGdDRhSElzSUhOZEtUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MGFXWWdLSE11WW1WbWIzSmxVMlZ1WkNBbUppQnpMbUpsWm05eVpWTmxibVF1WTJGc2JDaHpMbU52Ym5SbGVIUXNJSGhvY2l3Z2N5a2dQVDA5SUdaaGJITmxLU0I3WEhKY2JseDBYSFJjZEZ4MGFXWWdLSE11WjJ4dlltRnNLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUWtMbUZqZEdsMlpTMHRPMXh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUmtaV1psY25KbFpDNXlaV3BsWTNRb0tUdGNjbHh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdaR1ZtWlhKeVpXUTdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkRngwYVdZZ0tIaG9jaTVoWW05eWRHVmtLU0I3WEhKY2JseDBYSFJjZEZ4MFpHVm1aWEp5WldRdWNtVnFaV04wS0NrN1hISmNibHgwWEhSY2RGeDBjbVYwZFhKdUlHUmxabVZ5Y21Wa08xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhRdkx5QmhaR1FnYzNWaWJXbDBkR2x1WnlCbGJHVnRaVzUwSUhSdklHUmhkR0VnYVdZZ2QyVWdhMjV2ZHlCcGRGeHlYRzVjZEZ4MFhIUnpkV0lnUFNCbWIzSnRMbU5zYXp0Y2NseHVYSFJjZEZ4MGFXWWdLSE4xWWlrZ2UxeHlYRzVjZEZ4MFhIUmNkRzRnUFNCemRXSXVibUZ0WlR0Y2NseHVYSFJjZEZ4MFhIUnBaaUFvYmlBbUppQWhjM1ZpTG1ScGMyRmliR1ZrS1NCN1hISmNibHgwWEhSY2RGeDBYSFJ6TG1WNGRISmhSR0YwWVNBOUlITXVaWGgwY21GRVlYUmhJSHg4SUh0OU8xeHlYRzVjZEZ4MFhIUmNkRngwY3k1bGVIUnlZVVJoZEdGYmJsMGdQU0J6ZFdJdWRtRnNkV1U3WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvYzNWaUxuUjVjR1VnUFQwZ1hDSnBiV0ZuWlZ3aUtTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RITXVaWGgwY21GRVlYUmhXMjRySnk1NEoxMGdQU0JtYjNKdExtTnNhMTk0TzF4eVhHNWNkRngwWEhSY2RGeDBYSFJ6TG1WNGRISmhSR0YwWVZ0dUt5Y3VlU2RkSUQwZ1ptOXliUzVqYkd0ZmVUdGNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RIWmhjaUJEVEVsRlRsUmZWRWxOUlU5VlZGOUJRazlTVkNBOUlERTdYSEpjYmx4MFhIUmNkSFpoY2lCVFJWSldSVkpmUVVKUFVsUWdQU0F5TzF4eVhHNWNkRngwWEhSY2RGeDBYSEpjYmx4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEVSdll5aG1jbUZ0WlNrZ2UxeHlYRzVjZEZ4MFhIUmNkQzhxSUdsMElHeHZiMnR6SUd4cGEyVWdZMjl1ZEdWdWRGZHBibVJ2ZHlCdmNpQmpiMjUwWlc1MFJHOWpkVzFsYm5RZ1pHOGdibTkwWEhKY2JseDBYSFJjZEZ4MElDb2dZMkZ5Y25rZ2RHaGxJSEJ5YjNSdlkyOXNJSEJ5YjNCbGNuUjVJR2x1SUdsbE9Dd2dkMmhsYmlCeWRXNXVhVzVuSUhWdVpHVnlJSE56YkZ4eVhHNWNkRngwWEhSY2RDQXFJR1p5WVcxbExtUnZZM1Z0Wlc1MElHbHpJSFJvWlNCdmJteDVJSFpoYkdsa0lISmxjM0J2Ym5ObElHUnZZM1Z0Wlc1MExDQnphVzVqWlZ4eVhHNWNkRngwWEhSY2RDQXFJSFJvWlNCd2NtOTBiMk52YkNCcGN5QnJibTkzSUdKMWRDQnViM1FnYjI0Z2RHaGxJRzkwYUdWeUlIUjNieUJ2WW1wbFkzUnpMaUJ6ZEhKaGJtZGxQMXh5WEc1Y2RGeDBYSFJjZENBcUlGd2lVMkZ0WlNCdmNtbG5hVzRnY0c5c2FXTjVYQ0lnYUhSMGNEb3ZMMlZ1TG5kcGEybHdaV1JwWVM1dmNtY3ZkMmxyYVM5VFlXMWxYMjl5YVdkcGJsOXdiMnhwWTNsY2NseHVYSFJjZEZ4MFhIUWdLaTljY2x4dVhIUmNkRngwWEhSY2NseHVYSFJjZEZ4MFhIUjJZWElnWkc5aklEMGdiblZzYkR0Y2NseHVYSFJjZEZ4MFhIUmNjbHh1WEhSY2RGeDBYSFF2THlCSlJUZ2dZMkZ6WTJGa2FXNW5JR0ZqWTJWemN5QmphR1ZqYTF4eVhHNWNkRngwWEhSY2RIUnllU0I3WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvWm5KaGJXVXVZMjl1ZEdWdWRGZHBibVJ2ZHlrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSa2IyTWdQU0JtY21GdFpTNWpiMjUwWlc1MFYybHVaRzkzTG1SdlkzVnRaVzUwTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEgwZ1kyRjBZMmdvWlhKeUtTQjdYSEpjYmx4MFhIUmNkRngwWEhRdkx5QkpSVGdnWVdOalpYTnpJR1JsYm1sbFpDQjFibVJsY2lCemMyd2dKaUJ0YVhOemFXNW5JSEJ5YjNSdlkyOXNYSEpjYmx4MFhIUmNkRngwWEhSc2IyY29KMk5oYm01dmRDQm5aWFFnYVdaeVlXMWxMbU52Ym5SbGJuUlhhVzVrYjNjZ1pHOWpkVzFsYm5RNklDY2dLeUJsY25JcE8xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RGeDBhV1lnS0dSdll5a2dleUF2THlCemRXTmpaWE56Wm5Wc0lHZGxkSFJwYm1jZ1kyOXVkR1Z1ZEZ4eVhHNWNkRngwWEhSY2RGeDBjbVYwZFhKdUlHUnZZenRjY2x4dVhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEhSeWVTQjdJQzh2SUhOcGJYQnNlU0JqYUdWamEybHVaeUJ0WVhrZ2RHaHliM2NnYVc0Z2FXVTRJSFZ1WkdWeUlITnpiQ0J2Y2lCdGFYTnRZWFJqYUdWa0lIQnliM1J2WTI5c1hISmNibHgwWEhSY2RGeDBYSFJrYjJNZ1BTQm1jbUZ0WlM1amIyNTBaVzUwUkc5amRXMWxiblFnUHlCbWNtRnRaUzVqYjI1MFpXNTBSRzlqZFcxbGJuUWdPaUJtY21GdFpTNWtiMk4xYldWdWREdGNjbHh1WEhSY2RGeDBYSFI5SUdOaGRHTm9LR1Z5Y2lrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwTHk4Z2JHRnpkQ0JoZEhSbGJYQjBYSEpjYmx4MFhIUmNkRngwWEhSc2IyY29KMk5oYm01dmRDQm5aWFFnYVdaeVlXMWxMbU52Ym5SbGJuUkViMk4xYldWdWREb2dKeUFySUdWeWNpazdYSEpjYmx4MFhIUmNkRngwWEhSa2IyTWdQU0JtY21GdFpTNWtiMk4xYldWdWREdGNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MGNtVjBkWEp1SUdSdll6dGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MEx5OGdVbUZwYkhNZ1ExTlNSaUJvWVdOcklDaDBhR0Z1YTNNZ2RHOGdXWFpoYmlCQ1lYSjBhR1ZzWlcxNUtWeHlYRzVjZEZ4MFhIUjJZWElnWTNOeVpsOTBiMnRsYmlBOUlDUW9KMjFsZEdGYmJtRnRaVDFqYzNKbUxYUnZhMlZ1WFNjcExtRjBkSElvSjJOdmJuUmxiblFuS1R0Y2NseHVYSFJjZEZ4MGRtRnlJR056Y21aZmNHRnlZVzBnUFNBa0tDZHRaWFJoVzI1aGJXVTlZM055Wmkxd1lYSmhiVjBuS1M1aGRIUnlLQ2RqYjI1MFpXNTBKeWs3WEhKY2JseDBYSFJjZEdsbUlDaGpjM0ptWDNCaGNtRnRJQ1ltSUdOemNtWmZkRzlyWlc0cElIdGNjbHh1WEhSY2RGeDBYSFJ6TG1WNGRISmhSR0YwWVNBOUlITXVaWGgwY21GRVlYUmhJSHg4SUh0OU8xeHlYRzVjZEZ4MFhIUmNkSE11WlhoMGNtRkVZWFJoVzJOemNtWmZjR0Z5WVcxZElEMGdZM055Wmw5MGIydGxianRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBMeThnZEdGclpTQmhJR0p5WldGMGFDQnpieUIwYUdGMElIQmxibVJwYm1jZ2NtVndZV2x1ZEhNZ1oyVjBJSE52YldVZ1kzQjFJSFJwYldVZ1ltVm1iM0psSUhSb1pTQjFjR3h2WVdRZ2MzUmhjblJ6WEhKY2JseDBYSFJjZEdaMWJtTjBhVzl1SUdSdlUzVmliV2wwS0NrZ2UxeHlYRzVjZEZ4MFhIUmNkQzh2SUcxaGEyVWdjM1Z5WlNCbWIzSnRJR0YwZEhKeklHRnlaU0J6WlhSY2NseHVYSFJjZEZ4MFhIUjJZWElnZENBOUlDUm1iM0p0TG1GMGRISXlLQ2QwWVhKblpYUW5LU3dnWVNBOUlDUm1iM0p0TG1GMGRISXlLQ2RoWTNScGIyNG5LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBMeThnZFhCa1lYUmxJR1p2Y20wZ1lYUjBjbk1nYVc0Z1NVVWdabkpwWlc1a2JIa2dkMkY1WEhKY2JseDBYSFJjZEZ4MFptOXliUzV6WlhSQmRIUnlhV0oxZEdVb0ozUmhjbWRsZENjc2FXUXBPMXh5WEc1Y2RGeDBYSFJjZEdsbUlDZ2hiV1YwYUc5a0lIeDhJQzl3YjNOMEwya3VkR1Z6ZENodFpYUm9iMlFwSUNrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWm05eWJTNXpaWFJCZEhSeWFXSjFkR1VvSjIxbGRHaHZaQ2NzSUNkUVQxTlVKeWs3WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkR2xtSUNoaElDRTlJSE11ZFhKc0tTQjdYSEpjYmx4MFhIUmNkRngwWEhSbWIzSnRMbk5sZEVGMGRISnBZblYwWlNnbllXTjBhVzl1Snl3Z2N5NTFjbXdwTzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MEx5OGdhV1VnWW05eWEzTWdhVzRnYzI5dFpTQmpZWE5sY3lCM2FHVnVJSE5sZEhScGJtY2daVzVqYjJScGJtZGNjbHh1WEhSY2RGeDBYSFJwWmlBb0lTQnpMbk5yYVhCRmJtTnZaR2x1WjA5MlpYSnlhV1JsSUNZbUlDZ2hiV1YwYUc5a0lIeDhJQzl3YjNOMEwya3VkR1Z6ZENodFpYUm9iMlFwS1NrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwSkdadmNtMHVZWFIwY2loN1hISmNibHgwWEhSY2RGeDBYSFJjZEdWdVkyOWthVzVuT2lBbmJYVnNkR2x3WVhKMEwyWnZjbTB0WkdGMFlTY3NYSEpjYmx4MFhIUmNkRngwWEhSY2RHVnVZM1I1Y0dVNklDQW5iWFZzZEdsd1lYSjBMMlp2Y20wdFpHRjBZU2RjY2x4dVhIUmNkRngwWEhSY2RIMHBPMXh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRngwTHk4Z2MzVndjRzl5ZENCMGFXMXZkWFJjY2x4dVhIUmNkRngwWEhScFppQW9jeTUwYVcxbGIzVjBLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUjBhVzFsYjNWMFNHRnVaR3hsSUQwZ2MyVjBWR2x0Wlc5MWRDaG1kVzVqZEdsdmJpZ3BJSHNnZEdsdFpXUlBkWFFnUFNCMGNuVmxPeUJqWWloRFRFbEZUbFJmVkVsTlJVOVZWRjlCUWs5U1ZDazdJSDBzSUhNdWRHbHRaVzkxZENrN1hISmNibHgwWEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MFhIUXZMeUJzYjI5cklHWnZjaUJ6WlhKMlpYSWdZV0p2Y25SelhISmNibHgwWEhSY2RGeDBablZ1WTNScGIyNGdZMmhsWTJ0VGRHRjBaU2dwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkSFJ5ZVNCN1hISmNibHgwWEhSY2RGeDBYSFJjZEhaaGNpQnpkR0YwWlNBOUlHZGxkRVJ2WXlocGJ5a3VjbVZoWkhsVGRHRjBaVHRjY2x4dVhIUmNkRngwWEhSY2RGeDBiRzluS0NkemRHRjBaU0E5SUNjZ0t5QnpkR0YwWlNrN1hISmNibHgwWEhSY2RGeDBYSFJjZEdsbUlDaHpkR0YwWlNBbUppQnpkR0YwWlM1MGIweHZkMlZ5UTJGelpTZ3BJRDA5SUNkMWJtbHVhWFJwWVd4cGVtVmtKeWxjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJ6WlhSVWFXMWxiM1YwS0dOb1pXTnJVM1JoZEdVc05UQXBPMXh5WEc1Y2RGeDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkRngwWTJGMFkyZ29aU2tnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJzYjJjb0oxTmxjblpsY2lCaFltOXlkRG9nSnlBc0lHVXNJQ2NnS0Njc0lHVXVibUZ0WlN3Z0p5a25LVHRjY2x4dVhIUmNkRngwWEhSY2RGeDBZMklvVTBWU1ZrVlNYMEZDVDFKVUtUdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGFXWWdLSFJwYldWdmRYUklZVzVrYkdVcFhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFkyeGxZWEpVYVcxbGIzVjBLSFJwYldWdmRYUklZVzVrYkdVcE8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSMGFXMWxiM1YwU0dGdVpHeGxJRDBnZFc1a1pXWnBibVZrTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRngwTHk4Z1lXUmtJRndpWlhoMGNtRmNJaUJrWVhSaElIUnZJR1p2Y20wZ2FXWWdjSEp2ZG1sa1pXUWdhVzRnYjNCMGFXOXVjMXh5WEc1Y2RGeDBYSFJjZEhaaGNpQmxlSFJ5WVVsdWNIVjBjeUE5SUZ0ZE8xeHlYRzVjZEZ4MFhIUmNkSFJ5ZVNCN1hISmNibHgwWEhSY2RGeDBYSFJwWmlBb2N5NWxlSFJ5WVVSaGRHRXBJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBabTl5SUNoMllYSWdiaUJwYmlCekxtVjRkSEpoUkdGMFlTa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkR2xtSUNoekxtVjRkSEpoUkdGMFlTNW9ZWE5QZDI1UWNtOXdaWEowZVNodUtTa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkQ0FnSUM4dklHbG1JSFZ6YVc1bklIUm9aU0FrTG5CaGNtRnRJR1p2Y20xaGRDQjBhR0YwSUdGc2JHOTNjeUJtYjNJZ2JYVnNkR2x3YkdVZ2RtRnNkV1Z6SUhkcGRHZ2dkR2hsSUhOaGJXVWdibUZ0WlZ4eVhHNWNkRngwWEhSY2RGeDBYSFJjZENBZ0lHbG1LQ1F1YVhOUWJHRnBiazlpYW1WamRDaHpMbVY0ZEhKaFJHRjBZVnR1WFNrZ0ppWWdjeTVsZUhSeVlVUmhkR0ZiYmwwdWFHRnpUM2R1VUhKdmNHVnlkSGtvSjI1aGJXVW5LU0FtSmlCekxtVjRkSEpoUkdGMFlWdHVYUzVvWVhOUGQyNVFjbTl3WlhKMGVTZ25kbUZzZFdVbktTa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwSUNBZ1pYaDBjbUZKYm5CMWRITXVjSFZ6YUNoY2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RDQWdJQ1FvSnp4cGJuQjFkQ0IwZVhCbFBWd2lhR2xrWkdWdVhDSWdibUZ0WlQxY0lpY3JjeTVsZUhSeVlVUmhkR0ZiYmwwdWJtRnRaU3NuWENJK0p5a3VkbUZzS0hNdVpYaDBjbUZFWVhSaFcyNWRMblpoYkhWbEtWeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFFnSUNBdVlYQndaVzVrVkc4b1ptOXliU2xiTUYwcE8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RDQWdJSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFFnSUNCbGVIUnlZVWx1Y0hWMGN5NXdkWE5vS0Z4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MElDQWdKQ2duUEdsdWNIVjBJSFI1Y0dVOVhDSm9hV1JrWlc1Y0lpQnVZVzFsUFZ3aUp5dHVLeWRjSWo0bktTNTJZV3dvY3k1bGVIUnlZVVJoZEdGYmJsMHBYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZENBZ0lDNWhjSEJsYm1SVWJ5aG1iM0p0S1Zzd1hTazdYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBJQ0FnZlZ4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNnaGN5NXBabkpoYldWVVlYSm5aWFFwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwTHk4Z1lXUmtJR2xtY21GdFpTQjBieUJrYjJNZ1lXNWtJSE4xWW0xcGRDQjBhR1VnWm05eWJWeHlYRzVjZEZ4MFhIUmNkRngwWEhRa2FXOHVZWEJ3Wlc1a1ZHOG9KMkp2WkhrbktUdGNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNocGJ5NWhkSFJoWTJoRmRtVnVkQ2xjY2x4dVhIUmNkRngwWEhSY2RGeDBhVzh1WVhSMFlXTm9SWFpsYm5Rb0oyOXViRzloWkNjc0lHTmlLVHRjY2x4dVhIUmNkRngwWEhSY2RHVnNjMlZjY2x4dVhIUmNkRngwWEhSY2RGeDBhVzh1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduYkc5aFpDY3NJR05pTENCbVlXeHpaU2s3WEhKY2JseDBYSFJjZEZ4MFhIUnpaWFJVYVcxbGIzVjBLR05vWldOclUzUmhkR1VzTVRVcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RIUnllU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkR1p2Y20wdWMzVmliV2wwS0NrN1hISmNibHgwWEhSY2RGeDBYSFI5SUdOaGRHTm9LR1Z5Y2lrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhRdkx5QnFkWE4wSUdsdUlHTmhjMlVnWm05eWJTQm9ZWE1nWld4bGJXVnVkQ0IzYVhSb0lHNWhiV1V2YVdRZ2IyWWdKM04xWW0xcGRDZGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGRtRnlJSE4xWW0xcGRFWnVJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25abTl5YlNjcExuTjFZbTFwZER0Y2NseHVYSFJjZEZ4MFhIUmNkRngwYzNWaWJXbDBSbTR1WVhCd2JIa29abTl5YlNrN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkR1pwYm1Gc2JIa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MEx5OGdjbVZ6WlhRZ1lYUjBjbk1nWVc1a0lISmxiVzkyWlNCY0ltVjRkSEpoWENJZ2FXNXdkWFFnWld4bGJXVnVkSE5jY2x4dVhIUmNkRngwWEhSY2RHWnZjbTB1YzJWMFFYUjBjbWxpZFhSbEtDZGhZM1JwYjI0bkxHRXBPMXh5WEc1Y2RGeDBYSFJjZEZ4MGFXWW9kQ2tnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJtYjNKdExuTmxkRUYwZEhKcFluVjBaU2duZEdGeVoyVjBKeXdnZENrN1hISmNibHgwWEhSY2RGeDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUWtabTl5YlM1eVpXMXZkbVZCZEhSeUtDZDBZWEpuWlhRbktUdGNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUmNkQ1FvWlhoMGNtRkpibkIxZEhNcExuSmxiVzkyWlNncE8xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0hNdVptOXlZMlZUZVc1aktTQjdYSEpjYmx4MFhIUmNkRngwWkc5VGRXSnRhWFFvS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmxiSE5sSUh0Y2NseHVYSFJjZEZ4MFhIUnpaWFJVYVcxbGIzVjBLR1J2VTNWaWJXbDBMQ0F4TUNrN0lDOHZJSFJvYVhNZ2JHVjBjeUJrYjIwZ2RYQmtZWFJsY3lCeVpXNWtaWEpjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBkbUZ5SUdSaGRHRXNJR1J2WXl3Z1pHOXRRMmhsWTJ0RGIzVnVkQ0E5SURVd0xDQmpZV3hzWW1GamExQnliMk5sYzNObFpEdGNjbHh1WEhKY2JseDBYSFJjZEdaMWJtTjBhVzl1SUdOaUtHVXBJSHRjY2x4dVhIUmNkRngwWEhScFppQW9lR2h5TG1GaWIzSjBaV1FnZkh3Z1kyRnNiR0poWTJ0UWNtOWpaWE56WldRcElIdGNjbHh1WEhSY2RGeDBYSFJjZEhKbGRIVnlianRjY2x4dVhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBYSEpjYmx4MFhIUmNkRngwWkc5aklEMGdaMlYwUkc5aktHbHZLVHRjY2x4dVhIUmNkRngwWEhScFppZ2haRzlqS1NCN1hISmNibHgwWEhSY2RGeDBYSFJzYjJjb0oyTmhibTV2ZENCaFkyTmxjM01nY21WemNHOXVjMlVnWkc5amRXMWxiblFuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkR1VnUFNCVFJWSldSVkpmUVVKUFVsUTdYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RHbG1JQ2hsSUQwOVBTQkRURWxGVGxSZlZFbE5SVTlWVkY5QlFrOVNWQ0FtSmlCNGFISXBJSHRjY2x4dVhIUmNkRngwWEhSY2RIaG9jaTVoWW05eWRDZ25kR2x0Wlc5MWRDY3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MFpHVm1aWEp5WldRdWNtVnFaV04wS0hob2Npd2dKM1JwYldWdmRYUW5LVHRjY2x4dVhIUmNkRngwWEhSY2RISmxkSFZ5Ymp0Y2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwWld4elpTQnBaaUFvWlNBOVBTQlRSVkpXUlZKZlFVSlBVbFFnSmlZZ2VHaHlLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUjRhSEl1WVdKdmNuUW9KM05sY25abGNpQmhZbTl5ZENjcE8xeHlYRzVjZEZ4MFhIUmNkRngwWkdWbVpYSnlaV1F1Y21WcVpXTjBLSGhvY2l3Z0oyVnljbTl5Snl3Z0ozTmxjblpsY2lCaFltOXlkQ2NwTzF4eVhHNWNkRngwWEhSY2RGeDBjbVYwZFhKdU8xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RGeDBhV1lnS0NGa2IyTWdmSHdnWkc5akxteHZZMkYwYVc5dUxtaHlaV1lnUFQwZ2N5NXBabkpoYldWVGNtTXBJSHRjY2x4dVhIUmNkRngwWEhSY2RDOHZJSEpsYzNCdmJuTmxJRzV2ZENCeVpXTmxhWFpsWkNCNVpYUmNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDZ2hkR2x0WldSUGRYUXBYSEpjYmx4MFhIUmNkRngwWEhSY2RISmxkSFZ5Ymp0Y2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwYVdZZ0tHbHZMbVJsZEdGamFFVjJaVzUwS1Z4eVhHNWNkRngwWEhSY2RGeDBhVzh1WkdWMFlXTm9SWFpsYm5Rb0oyOXViRzloWkNjc0lHTmlLVHRjY2x4dVhIUmNkRngwWEhSbGJITmxYSEpjYmx4MFhIUmNkRngwWEhScGJ5NXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLQ2RzYjJGa0p5d2dZMklzSUdaaGJITmxLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBkbUZ5SUhOMFlYUjFjeUE5SUNkemRXTmpaWE56Snl3Z1pYSnlUWE5uTzF4eVhHNWNkRngwWEhSY2RIUnllU0I3WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvZEdsdFpXUlBkWFFwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwZEdoeWIzY2dKM1JwYldWdmRYUW5PMXh5WEc1Y2RGeDBYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RIWmhjaUJwYzFodGJDQTlJSE11WkdGMFlWUjVjR1VnUFQwZ0ozaHRiQ2NnZkh3Z1pHOWpMbGhOVEVSdlkzVnRaVzUwSUh4OElDUXVhWE5ZVFV4RWIyTW9aRzlqS1R0Y2NseHVYSFJjZEZ4MFhIUmNkR3h2WnlnbmFYTlliV3c5Snl0cGMxaHRiQ2s3WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvSVdseldHMXNJQ1ltSUhkcGJtUnZkeTV2Y0dWeVlTQW1KaUFvWkc5akxtSnZaSGtnUFQwOUlHNTFiR3dnZkh3Z0lXUnZZeTVpYjJSNUxtbHVibVZ5U0ZSTlRDa3BJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBhV1lnS0MwdFpHOXRRMmhsWTJ0RGIzVnVkQ2tnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEM4dklHbHVJSE52YldVZ1luSnZkM05sY25NZ0tFOXdaWEpoS1NCMGFHVWdhV1p5WVcxbElFUlBUU0JwY3lCdWIzUWdZV3gzWVhseklIUnlZWFpsY25OaFlteGxJSGRvWlc1Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhRdkx5QjBhR1VnYjI1c2IyRmtJR05oYkd4aVlXTnJJR1pwY21WekxDQnpieUIzWlNCc2IyOXdJR0VnWW1sMElIUnZJR0ZqWTI5dGJXOWtZWFJsWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwYkc5bktDZHlaWEYxWldsdVp5QnZia3h2WVdRZ1kyRnNiR0poWTJzc0lFUlBUU0J1YjNRZ1lYWmhhV3hoWW14bEp5azdYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBjMlYwVkdsdFpXOTFkQ2hqWWl3Z01qVXdLVHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJ5WlhSMWNtNDdYSEpjYmx4MFhIUmNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBYSFJjZEZ4MEx5OGdiR1YwSUhSb2FYTWdabUZzYkNCMGFISnZkV2RvSUdKbFkyRjFjMlVnYzJWeWRtVnlJSEpsYzNCdmJuTmxJR052ZFd4a0lHSmxJR0Z1SUdWdGNIUjVJR1J2WTNWdFpXNTBYSEpjYmx4MFhIUmNkRngwWEhSY2RDOHZiRzluS0NkRGIzVnNaQ0J1YjNRZ1lXTmpaWE56SUdsbWNtRnRaU0JFVDAwZ1lXWjBaWElnYlhWMGFYQnNaU0IwY21sbGN5NG5LVHRjY2x4dVhIUmNkRngwWEhSY2RGeDBMeTkwYUhKdmR5QW5SRTlOUlhoalpYQjBhVzl1T2lCdWIzUWdZWFpoYVd4aFlteGxKenRjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUXZMMnh2WnlnbmNtVnpjRzl1YzJVZ1pHVjBaV04wWldRbktUdGNjbHh1WEhSY2RGeDBYSFJjZEhaaGNpQmtiMk5TYjI5MElEMGdaRzlqTG1KdlpIa2dQeUJrYjJNdVltOWtlU0E2SUdSdll5NWtiMk4xYldWdWRFVnNaVzFsYm5RN1hISmNibHgwWEhSY2RGeDBYSFI0YUhJdWNtVnpjRzl1YzJWVVpYaDBJRDBnWkc5alVtOXZkQ0EvSUdSdlkxSnZiM1F1YVc1dVpYSklWRTFNSURvZ2JuVnNiRHRjY2x4dVhIUmNkRngwWEhSY2RIaG9jaTV5WlhOd2IyNXpaVmhOVENBOUlHUnZZeTVZVFV4RWIyTjFiV1Z1ZENBL0lHUnZZeTVZVFV4RWIyTjFiV1Z1ZENBNklHUnZZenRjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2hwYzFodGJDbGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGN5NWtZWFJoVkhsd1pTQTlJQ2Q0Yld3bk8xeHlYRzVjZEZ4MFhIUmNkRngwZUdoeUxtZGxkRkpsYzNCdmJuTmxTR1ZoWkdWeUlEMGdablZ1WTNScGIyNG9hR1ZoWkdWeUtYdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGRtRnlJR2hsWVdSbGNuTWdQU0I3SjJOdmJuUmxiblF0ZEhsd1pTYzZJSE11WkdGMFlWUjVjR1Y5TzF4eVhHNWNkRngwWEhSY2RGeDBYSFJ5WlhSMWNtNGdhR1ZoWkdWeWMxdG9aV0ZrWlhJdWRHOU1iM2RsY2tOaGMyVW9LVjA3WEhKY2JseDBYSFJjZEZ4MFhIUjlPMXh5WEc1Y2RGeDBYSFJjZEZ4MEx5OGdjM1Z3Y0c5eWRDQm1iM0lnV0VoU0lDZHpkR0YwZFhNbklDWWdKM04wWVhSMWMxUmxlSFFuSUdWdGRXeGhkR2x2YmlBNlhISmNibHgwWEhSY2RGeDBYSFJwWmlBb1pHOWpVbTl2ZENrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSNGFISXVjM1JoZEhWeklEMGdUblZ0WW1WeUtDQmtiMk5TYjI5MExtZGxkRUYwZEhKcFluVjBaU2duYzNSaGRIVnpKeWtnS1NCOGZDQjRhSEl1YzNSaGRIVnpPMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUjRhSEl1YzNSaGRIVnpWR1Y0ZENBOUlHUnZZMUp2YjNRdVoyVjBRWFIwY21saWRYUmxLQ2R6ZEdGMGRYTlVaWGgwSnlrZ2ZId2dlR2h5TG5OMFlYUjFjMVJsZUhRN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwZG1GeUlHUjBJRDBnS0hNdVpHRjBZVlI1Y0dVZ2ZId2dKeWNwTG5SdlRHOTNaWEpEWVhObEtDazdYSEpjYmx4MFhIUmNkRngwWEhSMllYSWdjMk55SUQwZ0x5aHFjMjl1ZkhOamNtbHdkSHgwWlhoMEtTOHVkR1Z6ZENoa2RDazdYSEpjYmx4MFhIUmNkRngwWEhScFppQW9jMk55SUh4OElITXVkR1Y0ZEdGeVpXRXBJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBMeThnYzJWbElHbG1JSFZ6WlhJZ1pXMWlaV1JrWldRZ2NtVnpjRzl1YzJVZ2FXNGdkR1Y0ZEdGeVpXRmNjbHh1WEhSY2RGeDBYSFJjZEZ4MGRtRnlJSFJoSUQwZ1pHOWpMbWRsZEVWc1pXMWxiblJ6UW5sVVlXZE9ZVzFsS0NkMFpYaDBZWEpsWVNjcFd6QmRPMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUnBaaUFvZEdFcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUjRhSEl1Y21WemNHOXVjMlZVWlhoMElEMGdkR0V1ZG1Gc2RXVTdYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBMeThnYzNWd2NHOXlkQ0JtYjNJZ1dFaFNJQ2R6ZEdGMGRYTW5JQ1lnSjNOMFlYUjFjMVJsZUhRbklHVnRkV3hoZEdsdmJpQTZYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBlR2h5TG5OMFlYUjFjeUE5SUU1MWJXSmxjaWdnZEdFdVoyVjBRWFIwY21saWRYUmxLQ2R6ZEdGMGRYTW5LU0FwSUh4OElIaG9jaTV6ZEdGMGRYTTdYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBlR2h5TG5OMFlYUjFjMVJsZUhRZ1BTQjBZUzVuWlhSQmRIUnlhV0oxZEdVb0ozTjBZWFIxYzFSbGVIUW5LU0I4ZkNCNGFISXVjM1JoZEhWelZHVjRkRHRjY2x4dVhIUmNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmxiSE5sSUdsbUlDaHpZM0lwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhRdkx5QmhZMk52ZFc1MElHWnZjaUJpY205M2MyVnljeUJwYm1wbFkzUnBibWNnY0hKbElHRnliM1Z1WkNCcWMyOXVJSEpsYzNCdmJuTmxYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBkbUZ5SUhCeVpTQTlJR1J2WXk1blpYUkZiR1Z0Wlc1MGMwSjVWR0ZuVG1GdFpTZ25jSEpsSnlsYk1GMDdYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBkbUZ5SUdJZ1BTQmtiMk11WjJWMFJXeGxiV1Z1ZEhOQ2VWUmhaMDVoYldVb0oySnZaSGtuS1Zzd1hUdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUnBaaUFvY0hKbEtTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFI0YUhJdWNtVnpjRzl1YzJWVVpYaDBJRDBnY0hKbExuUmxlSFJEYjI1MFpXNTBJRDhnY0hKbExuUmxlSFJEYjI1MFpXNTBJRG9nY0hKbExtbHVibVZ5VkdWNGREdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBaV3h6WlNCcFppQW9ZaWtnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MGVHaHlMbkpsYzNCdmJuTmxWR1Y0ZENBOUlHSXVkR1Y0ZEVOdmJuUmxiblFnUHlCaUxuUmxlSFJEYjI1MFpXNTBJRG9nWWk1cGJtNWxjbFJsZUhRN1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MFhIUmxiSE5sSUdsbUlDaGtkQ0E5UFNBbmVHMXNKeUFtSmlBaGVHaHlMbkpsYzNCdmJuTmxXRTFNSUNZbUlIaG9jaTV5WlhOd2IyNXpaVlJsZUhRcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGVHaHlMbkpsYzNCdmJuTmxXRTFNSUQwZ2RHOVliV3dvZUdoeUxuSmxjM0J2Ym5ObFZHVjRkQ2s3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBkSEo1SUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWkdGMFlTQTlJR2gwZEhCRVlYUmhLSGhvY2l3Z1pIUXNJSE1wTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEZ4MFkyRjBZMmdnS0dWeWNpa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUnpkR0YwZFhNZ1BTQW5jR0Z5YzJWeVpYSnliM0luTzF4eVhHNWNkRngwWEhSY2RGeDBYSFI0YUhJdVpYSnliM0lnUFNCbGNuSk5jMmNnUFNBb1pYSnlJSHg4SUhOMFlYUjFjeWs3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RHTmhkR05vSUNobGNuSXBJSHRjY2x4dVhIUmNkRngwWEhSY2RHeHZaeWduWlhKeWIzSWdZMkYxWjJoME9pQW5MR1Z5Y2lrN1hISmNibHgwWEhSY2RGeDBYSFJ6ZEdGMGRYTWdQU0FuWlhKeWIzSW5PMXh5WEc1Y2RGeDBYSFJjZEZ4MGVHaHlMbVZ5Y205eUlEMGdaWEp5VFhObklEMGdLR1Z5Y2lCOGZDQnpkR0YwZFhNcE8xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RGeDBhV1lnS0hob2NpNWhZbTl5ZEdWa0tTQjdYSEpjYmx4MFhIUmNkRngwWEhSc2IyY29KM1Z3Ykc5aFpDQmhZbTl5ZEdWa0p5azdYSEpjYmx4MFhIUmNkRngwWEhSemRHRjBkWE1nUFNCdWRXeHNPMXh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRngwYVdZZ0tIaG9jaTV6ZEdGMGRYTXBJSHNnTHk4Z2QyVW5kbVVnYzJWMElIaG9jaTV6ZEdGMGRYTmNjbHh1WEhSY2RGeDBYSFJjZEhOMFlYUjFjeUE5SUNoNGFISXVjM1JoZEhWeklENDlJREl3TUNBbUppQjRhSEl1YzNSaGRIVnpJRHdnTXpBd0lIeDhJSGhvY2k1emRHRjBkWE1nUFQwOUlETXdOQ2tnUHlBbmMzVmpZMlZ6Y3ljZ09pQW5aWEp5YjNJbk8xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RGeDBMeThnYjNKa1pYSnBibWNnYjJZZ2RHaGxjMlVnWTJGc2JHSmhZMnR6TDNSeWFXZG5aWEp6SUdseklHOWtaQ3dnWW5WMElIUm9ZWFFuY3lCb2IzY2dKQzVoYW1GNElHUnZaWE1nYVhSY2NseHVYSFJjZEZ4MFhIUnBaaUFvYzNSaGRIVnpJRDA5UFNBbmMzVmpZMlZ6Y3ljcElIdGNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaHpMbk4xWTJObGMzTXBYSEpjYmx4MFhIUmNkRngwWEhSY2RITXVjM1ZqWTJWemN5NWpZV3hzS0hNdVkyOXVkR1Y0ZEN3Z1pHRjBZU3dnSjNOMVkyTmxjM01uTENCNGFISXBPMXh5WEc1Y2RGeDBYSFJjZEZ4MFpHVm1aWEp5WldRdWNtVnpiMngyWlNoNGFISXVjbVZ6Y0c5dWMyVlVaWGgwTENBbmMzVmpZMlZ6Y3ljc0lIaG9jaWs3WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvWnlsY2NseHVYSFJjZEZ4MFhIUmNkRngwSkM1bGRtVnVkQzUwY21sbloyVnlLRndpWVdwaGVGTjFZMk5sYzNOY0lpd2dXM2hvY2l3Z2MxMHBPMXh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUmxiSE5sSUdsbUlDaHpkR0YwZFhNcElIdGNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaGxjbkpOYzJjZ1BUMDlJSFZ1WkdWbWFXNWxaQ2xjY2x4dVhIUmNkRngwWEhSY2RGeDBaWEp5VFhObklEMGdlR2h5TG5OMFlYUjFjMVJsZUhRN1hISmNibHgwWEhSY2RGeDBYSFJwWmlBb2N5NWxjbkp2Y2lsY2NseHVYSFJjZEZ4MFhIUmNkRngwY3k1bGNuSnZjaTVqWVd4c0tITXVZMjl1ZEdWNGRDd2dlR2h5TENCemRHRjBkWE1zSUdWeWNrMXpaeWs3WEhKY2JseDBYSFJjZEZ4MFhIUmtaV1psY25KbFpDNXlaV3BsWTNRb2VHaHlMQ0FuWlhKeWIzSW5MQ0JsY25KTmMyY3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR2NwWEhKY2JseDBYSFJjZEZ4MFhIUmNkQ1F1WlhabGJuUXVkSEpwWjJkbGNpaGNJbUZxWVhoRmNuSnZjbHdpTENCYmVHaHlMQ0J6TENCbGNuSk5jMmRkS1R0Y2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhSY2RHbG1JQ2huS1Z4eVhHNWNkRngwWEhSY2RGeDBKQzVsZG1WdWRDNTBjbWxuWjJWeUtGd2lZV3BoZUVOdmJYQnNaWFJsWENJc0lGdDRhSElzSUhOZEtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MGFXWWdLR2NnSmlZZ0lTQXRMU1F1WVdOMGFYWmxLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUWtMbVYyWlc1MExuUnlhV2RuWlhJb1hDSmhhbUY0VTNSdmNGd2lLVHRjY2x4dVhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEdsbUlDaHpMbU52YlhCc1pYUmxLVnh5WEc1Y2RGeDBYSFJjZEZ4MGN5NWpiMjF3YkdWMFpTNWpZV3hzS0hNdVkyOXVkR1Y0ZEN3Z2VHaHlMQ0J6ZEdGMGRYTXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmpZV3hzWW1GamExQnliMk5sYzNObFpDQTlJSFJ5ZFdVN1hISmNibHgwWEhSY2RGeDBhV1lnS0hNdWRHbHRaVzkxZENsY2NseHVYSFJjZEZ4MFhIUmNkR05zWldGeVZHbHRaVzkxZENoMGFXMWxiM1YwU0dGdVpHeGxLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBMeThnWTJ4bFlXNGdkWEJjY2x4dVhIUmNkRngwWEhSelpYUlVhVzFsYjNWMEtHWjFibU4wYVc5dUtDa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLQ0Z6TG1sbWNtRnRaVlJoY21kbGRDbGNjbHh1WEhSY2RGeDBYSFJjZEZ4MEpHbHZMbkpsYlc5MlpTZ3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MFpXeHpaU0FnTHk5aFpHUnBibWNnWld4elpTQjBieUJqYkdWaGJpQjFjQ0JsZUdsemRHbHVaeUJwWm5KaGJXVWdjbVZ6Y0c5dWMyVXVYSEpjYmx4MFhIUmNkRngwWEhSY2RDUnBieTVoZEhSeUtDZHpjbU1uTENCekxtbG1jbUZ0WlZOeVl5azdYSEpjYmx4MFhIUmNkRngwWEhSNGFISXVjbVZ6Y0c5dWMyVllUVXdnUFNCdWRXeHNPMXh5WEc1Y2RGeDBYSFJjZEgwc0lERXdNQ2s3WEhKY2JseDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkSFpoY2lCMGIxaHRiQ0E5SUNRdWNHRnljMlZZVFV3Z2ZId2dablZ1WTNScGIyNG9jeXdnWkc5aktTQjdJQzh2SUhWelpTQndZWEp6WlZoTlRDQnBaaUJoZG1GcGJHRmliR1VnS0dwUmRXVnllU0F4TGpVcktWeHlYRzVjZEZ4MFhIUmNkR2xtSUNoM2FXNWtiM2N1UVdOMGFYWmxXRTlpYW1WamRDa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFpHOWpJRDBnYm1WM0lFRmpkR2wyWlZoUFltcGxZM1FvSjAxcFkzSnZjMjltZEM1WVRVeEVUMDBuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkR1J2WXk1aGMzbHVZeUE5SUNkbVlXeHpaU2M3WEhKY2JseDBYSFJjZEZ4MFhIUmtiMk11Ykc5aFpGaE5UQ2h6S1R0Y2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwWld4elpTQjdYSEpjYmx4MFhIUmNkRngwWEhSa2IyTWdQU0FvYm1WM0lFUlBUVkJoY25ObGNpZ3BLUzV3WVhKelpVWnliMjFUZEhKcGJtY29jeXdnSjNSbGVIUXZlRzFzSnlrN1hISmNibHgwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUFvWkc5aklDWW1JR1J2WXk1a2IyTjFiV1Z1ZEVWc1pXMWxiblFnSmlZZ1pHOWpMbVJ2WTNWdFpXNTBSV3hsYldWdWRDNXViMlJsVG1GdFpTQWhQU0FuY0dGeWMyVnlaWEp5YjNJbktTQS9JR1J2WXlBNklHNTFiR3c3WEhKY2JseDBYSFJjZEgwN1hISmNibHgwWEhSY2RIWmhjaUJ3WVhKelpVcFRUMDRnUFNBa0xuQmhjbk5sU2xOUFRpQjhmQ0JtZFc1amRHbHZiaWh6S1NCN1hISmNibHgwWEhSY2RGeDBMeXBxYzJ4cGJuUWdaWFpwYkRwMGNuVmxJQ292WEhKY2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhkcGJtUnZkMXNuWlhaaGJDZGRLQ2NvSnlBcklITWdLeUFuS1NjcE8xeHlYRzVjZEZ4MFhIUjlPMXh5WEc1Y2NseHVYSFJjZEZ4MGRtRnlJR2gwZEhCRVlYUmhJRDBnWm5WdVkzUnBiMjRvSUhob2Npd2dkSGx3WlN3Z2N5QXBJSHNnTHk4Z2JXOXpkR3g1SUd4cFpuUmxaQ0JtY205dElHcHhNUzQwTGpSY2NseHVYSEpjYmx4MFhIUmNkRngwZG1GeUlHTjBJRDBnZUdoeUxtZGxkRkpsYzNCdmJuTmxTR1ZoWkdWeUtDZGpiMjUwWlc1MExYUjVjR1VuS1NCOGZDQW5KeXhjY2x4dVhIUmNkRngwWEhSY2RIaHRiQ0E5SUhSNWNHVWdQVDA5SUNkNGJXd25JSHg4SUNGMGVYQmxJQ1ltSUdOMExtbHVaR1Y0VDJZb0ozaHRiQ2NwSUQ0OUlEQXNYSEpjYmx4MFhIUmNkRngwWEhSa1lYUmhJRDBnZUcxc0lEOGdlR2h5TG5KbGMzQnZibk5sV0UxTUlEb2dlR2h5TG5KbGMzQnZibk5sVkdWNGREdGNjbHh1WEhKY2JseDBYSFJjZEZ4MGFXWWdLSGh0YkNBbUppQmtZWFJoTG1SdlkzVnRaVzUwUld4bGJXVnVkQzV1YjJSbFRtRnRaU0E5UFQwZ0ozQmhjbk5sY21WeWNtOXlKeWtnZTF4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0NRdVpYSnliM0lwWEhKY2JseDBYSFJjZEZ4MFhIUmNkQ1F1WlhKeWIzSW9KM0JoY25ObGNtVnljbTl5SnlrN1hISmNibHgwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEdsbUlDaHpJQ1ltSUhNdVpHRjBZVVpwYkhSbGNpa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFpHRjBZU0E5SUhNdVpHRjBZVVpwYkhSbGNpaGtZWFJoTENCMGVYQmxLVHRjY2x4dVhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBhV1lnS0hSNWNHVnZaaUJrWVhSaElEMDlQU0FuYzNSeWFXNW5KeWtnZTF4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0hSNWNHVWdQVDA5SUNkcWMyOXVKeUI4ZkNBaGRIbHdaU0FtSmlCamRDNXBibVJsZUU5bUtDZHFjMjl1SnlrZ1BqMGdNQ2tnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJrWVhSaElEMGdjR0Z5YzJWS1UwOU9LR1JoZEdFcE8xeHlYRzVjZEZ4MFhIUmNkRngwZlNCbGJITmxJR2xtSUNoMGVYQmxJRDA5UFNCY0luTmpjbWx3ZEZ3aUlIeDhJQ0YwZVhCbElDWW1JR04wTG1sdVpHVjRUMllvWENKcVlYWmhjMk55YVhCMFhDSXBJRDQ5SURBcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MEpDNW5iRzlpWVd4RmRtRnNLR1JoZEdFcE8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdaR0YwWVR0Y2NseHVYSFJjZEZ4MGZUdGNjbHh1WEhKY2JseDBYSFJjZEhKbGRIVnliaUJrWldabGNuSmxaRHRjY2x4dVhIUmNkSDFjY2x4dVhIUjlPMXh5WEc1Y2NseHVYSFF2S2lwY2NseHVYSFFnS2lCaGFtRjRSbTl5YlNncElIQnliM1pwWkdWeklHRWdiV1ZqYUdGdWFYTnRJR1p2Y2lCbWRXeHNlU0JoZFhSdmJXRjBhVzVuSUdadmNtMGdjM1ZpYldsemMybHZiaTVjY2x4dVhIUWdLbHh5WEc1Y2RDQXFJRlJvWlNCaFpIWmhiblJoWjJWeklHOW1JSFZ6YVc1bklIUm9hWE1nYldWMGFHOWtJR2x1YzNSbFlXUWdiMllnWVdwaGVGTjFZbTFwZENncElHRnlaVHBjY2x4dVhIUWdLbHh5WEc1Y2RDQXFJREU2SUZSb2FYTWdiV1YwYUc5a0lIZHBiR3dnYVc1amJIVmtaU0JqYjI5eVpHbHVZWFJsY3lCbWIzSWdQR2x1Y0hWMElIUjVjR1U5WENKcGJXRm5aVndpSUM4K0lHVnNaVzFsYm5SeklDaHBaaUIwYUdVZ1pXeGxiV1Z1ZEZ4eVhHNWNkQ0FxSUNBZ0lHbHpJSFZ6WldRZ2RHOGdjM1ZpYldsMElIUm9aU0JtYjNKdEtTNWNjbHh1WEhRZ0tpQXlMaUJVYUdseklHMWxkR2h2WkNCM2FXeHNJR2x1WTJ4MVpHVWdkR2hsSUhOMVltMXBkQ0JsYkdWdFpXNTBKM01nYm1GdFpTOTJZV3gxWlNCa1lYUmhJQ2htYjNJZ2RHaGxJR1ZzWlcxbGJuUWdkR2hoZENCM1lYTmNjbHh1WEhRZ0tpQWdJQ0IxYzJWa0lIUnZJSE4xWW0xcGRDQjBhR1VnWm05eWJTa3VYSEpjYmx4MElDb2dNeTRnVkdocGN5QnRaWFJvYjJRZ1ltbHVaSE1nZEdobElITjFZbTFwZENncElHMWxkR2h2WkNCMGJ5QjBhR1VnWm05eWJTQm1iM0lnZVc5MUxseHlYRzVjZENBcVhISmNibHgwSUNvZ1ZHaGxJRzl3ZEdsdmJuTWdZWEpuZFcxbGJuUWdabTl5SUdGcVlYaEdiM0p0SUhkdmNtdHpJR1Y0WVdOMGJIa2dZWE1nYVhRZ1pHOWxjeUJtYjNJZ1lXcGhlRk4xWW0xcGRDNGdJR0ZxWVhoR2IzSnRJRzFsY21Wc2VWeHlYRzVjZENBcUlIQmhjM05sY3lCMGFHVWdiM0IwYVc5dWN5QmhjbWQxYldWdWRDQmhiRzl1WnlCaFpuUmxjaUJ3Y205d1pYSnNlU0JpYVc1a2FXNW5JR1YyWlc1MGN5Qm1iM0lnYzNWaWJXbDBJR1ZzWlcxbGJuUnpJR0Z1WkZ4eVhHNWNkQ0FxSUhSb1pTQm1iM0p0SUdsMGMyVnNaaTVjY2x4dVhIUWdLaTljY2x4dVhIUWtMbVp1TG1GcVlYaEdiM0p0SUQwZ1puVnVZM1JwYjI0b2IzQjBhVzl1Y3lrZ2UxeHlYRzVjZEZ4MGIzQjBhVzl1Y3lBOUlHOXdkR2x2Ym5NZ2ZId2dlMzA3WEhKY2JseDBYSFJ2Y0hScGIyNXpMbVJsYkdWbllYUnBiMjRnUFNCdmNIUnBiMjV6TG1SbGJHVm5ZWFJwYjI0Z0ppWWdKQzVwYzBaMWJtTjBhVzl1S0NRdVptNHViMjRwTzF4eVhHNWNjbHh1WEhSY2RDOHZJR2x1SUdwUmRXVnllU0F4TGpNcklIZGxJR05oYmlCbWFYZ2diV2x6ZEdGclpYTWdkMmwwYUNCMGFHVWdjbVZoWkhrZ2MzUmhkR1ZjY2x4dVhIUmNkR2xtSUNnaGIzQjBhVzl1Y3k1a1pXeGxaMkYwYVc5dUlDWW1JSFJvYVhNdWJHVnVaM1JvSUQwOVBTQXdLU0I3WEhKY2JseDBYSFJjZEhaaGNpQnZJRDBnZXlCek9pQjBhR2x6TG5ObGJHVmpkRzl5TENCak9pQjBhR2x6TG1OdmJuUmxlSFFnZlR0Y2NseHVYSFJjZEZ4MGFXWWdLQ0VrTG1selVtVmhaSGtnSmlZZ2J5NXpLU0I3WEhKY2JseDBYSFJjZEZ4MGJHOW5LQ2RFVDAwZ2JtOTBJSEpsWVdSNUxDQnhkV1YxYVc1bklHRnFZWGhHYjNKdEp5azdYSEpjYmx4MFhIUmNkRngwSkNobWRXNWpkR2x2YmlncElIdGNjbHh1WEhSY2RGeDBYSFJjZENRb2J5NXpMRzh1WXlrdVlXcGhlRVp2Y20wb2IzQjBhVzl1Y3lrN1hISmNibHgwWEhSY2RGeDBmU2s3WEhKY2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhSb2FYTTdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkRngwTHk4Z2FYTWdlVzkxY2lCRVQwMGdjbVZoWkhrL0lDQm9kSFJ3T2k4dlpHOWpjeTVxY1hWbGNua3VZMjl0TDFSMWRHOXlhV0ZzY3pwSmJuUnliMlIxWTJsdVoxOGtLR1J2WTNWdFpXNTBLUzV5WldGa2VTZ3BYSEpjYmx4MFhIUmNkR3h2WnlnbmRHVnliV2x1WVhScGJtYzdJSHBsY204Z1pXeGxiV1Z1ZEhNZ1ptOTFibVFnWW5rZ2MyVnNaV04wYjNJbklDc2dLQ1F1YVhOU1pXRmtlU0EvSUNjbklEb2dKeUFvUkU5TklHNXZkQ0J5WldGa2VTa25LU2s3WEhKY2JseDBYSFJjZEhKbGRIVnliaUIwYUdsek8xeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkR2xtSUNnZ2IzQjBhVzl1Y3k1a1pXeGxaMkYwYVc5dUlDa2dlMXh5WEc1Y2RGeDBYSFFrS0dSdlkzVnRaVzUwS1Z4eVhHNWNkRngwWEhSY2RDNXZabVlvSjNOMVltMXBkQzVtYjNKdExYQnNkV2RwYmljc0lIUm9hWE11YzJWc1pXTjBiM0lzSUdSdlFXcGhlRk4xWW0xcGRDbGNjbHh1WEhSY2RGeDBYSFF1YjJabUtDZGpiR2xqYXk1bWIzSnRMWEJzZFdkcGJpY3NJSFJvYVhNdWMyVnNaV04wYjNJc0lHTmhjSFIxY21WVGRXSnRhWFIwYVc1blJXeGxiV1Z1ZENsY2NseHVYSFJjZEZ4MFhIUXViMjRvSjNOMVltMXBkQzVtYjNKdExYQnNkV2RwYmljc0lIUm9hWE11YzJWc1pXTjBiM0lzSUc5d2RHbHZibk1zSUdSdlFXcGhlRk4xWW0xcGRDbGNjbHh1WEhSY2RGeDBYSFF1YjI0b0oyTnNhV05yTG1admNtMHRjR3gxWjJsdUp5d2dkR2hwY3k1elpXeGxZM1J2Y2l3Z2IzQjBhVzl1Y3l3Z1kyRndkSFZ5WlZOMVltMXBkSFJwYm1kRmJHVnRaVzUwS1R0Y2NseHVYSFJjZEZ4MGNtVjBkWEp1SUhSb2FYTTdYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwY21WMGRYSnVJSFJvYVhNdVlXcGhlRVp2Y20xVmJtSnBibVFvS1Z4eVhHNWNkRngwWEhRdVltbHVaQ2duYzNWaWJXbDBMbVp2Y20wdGNHeDFaMmx1Snl3Z2IzQjBhVzl1Y3l3Z1pHOUJhbUY0VTNWaWJXbDBLVnh5WEc1Y2RGeDBYSFF1WW1sdVpDZ25ZMnhwWTJzdVptOXliUzF3YkhWbmFXNG5MQ0J2Y0hScGIyNXpMQ0JqWVhCMGRYSmxVM1ZpYldsMGRHbHVaMFZzWlcxbGJuUXBPMXh5WEc1Y2RIMDdYSEpjYmx4eVhHNWNkQzh2SUhCeWFYWmhkR1VnWlhabGJuUWdhR0Z1Wkd4bGNuTmNjbHh1WEhSbWRXNWpkR2x2YmlCa2IwRnFZWGhUZFdKdGFYUW9aU2tnZTF4eVhHNWNkRngwTHlwcWMyaHBiblFnZG1Gc2FXUjBhR2x6T25SeWRXVWdLaTljY2x4dVhIUmNkSFpoY2lCdmNIUnBiMjV6SUQwZ1pTNWtZWFJoTzF4eVhHNWNkRngwYVdZZ0tDRmxMbWx6UkdWbVlYVnNkRkJ5WlhabGJuUmxaQ2dwS1NCN0lDOHZJR2xtSUdWMlpXNTBJR2hoY3lCaVpXVnVJR05oYm1ObGJHVmtMQ0JrYjI0bmRDQndjbTlqWldWa1hISmNibHgwWEhSY2RHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1WEhSY2RGeDBKQ2hsTG5SaGNtZGxkQ2t1WVdwaGVGTjFZbTFwZENodmNIUnBiMjV6S1RzZ0x5OGdJek0yTlZ4eVhHNWNkRngwZlZ4eVhHNWNkSDFjY2x4dVhISmNibHgwWm5WdVkzUnBiMjRnWTJGd2RIVnlaVk4xWW0xcGRIUnBibWRGYkdWdFpXNTBLR1VwSUh0Y2NseHVYSFJjZEM4cWFuTm9hVzUwSUhaaGJHbGtkR2hwY3pwMGNuVmxJQ292WEhKY2JseDBYSFIyWVhJZ2RHRnlaMlYwSUQwZ1pTNTBZWEpuWlhRN1hISmNibHgwWEhSMllYSWdKR1ZzSUQwZ0pDaDBZWEpuWlhRcE8xeHlYRzVjZEZ4MGFXWWdLQ0VvSkdWc0xtbHpLRndpVzNSNWNHVTljM1ZpYldsMFhTeGJkSGx3WlQxcGJXRm5aVjFjSWlrcEtTQjdYSEpjYmx4MFhIUmNkQzh2SUdseklIUm9hWE1nWVNCamFHbHNaQ0JsYkdWdFpXNTBJRzltSUhSb1pTQnpkV0p0YVhRZ1pXdy9JQ0FvWlhnNklHRWdjM0JoYmlCM2FYUm9hVzRnWVNCaWRYUjBiMjRwWEhKY2JseDBYSFJjZEhaaGNpQjBJRDBnSkdWc0xtTnNiM05sYzNRb0oxdDBlWEJsUFhOMVltMXBkRjBuS1R0Y2NseHVYSFJjZEZ4MGFXWWdLSFF1YkdWdVozUm9JRDA5UFNBd0tTQjdYSEpjYmx4MFhIUmNkRngwY21WMGRYSnVPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseDBYSFJjZEhSaGNtZGxkQ0E5SUhSYk1GMDdYSEpjYmx4MFhIUjlYSEpjYmx4MFhIUjJZWElnWm05eWJTQTlJSFJvYVhNN1hISmNibHgwWEhSbWIzSnRMbU5zYXlBOUlIUmhjbWRsZER0Y2NseHVYSFJjZEdsbUlDaDBZWEpuWlhRdWRIbHdaU0E5UFNBbmFXMWhaMlVuS1NCN1hISmNibHgwWEhSY2RHbG1JQ2hsTG05bVpuTmxkRmdnSVQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh5WEc1Y2RGeDBYSFJjZEdadmNtMHVZMnhyWDNnZ1BTQmxMbTltWm5ObGRGZzdYSEpjYmx4MFhIUmNkRngwWm05eWJTNWpiR3RmZVNBOUlHVXViMlptYzJWMFdUdGNjbHh1WEhSY2RGeDBmU0JsYkhObElHbG1JQ2gwZVhCbGIyWWdKQzVtYmk1dlptWnpaWFFnUFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh5WEc1Y2RGeDBYSFJjZEhaaGNpQnZabVp6WlhRZ1BTQWtaV3d1YjJabWMyVjBLQ2s3WEhKY2JseDBYSFJjZEZ4MFptOXliUzVqYkd0ZmVDQTlJR1V1Y0dGblpWZ2dMU0J2Wm1aelpYUXViR1ZtZER0Y2NseHVYSFJjZEZ4MFhIUm1iM0p0TG1Oc2ExOTVJRDBnWlM1d1lXZGxXU0F0SUc5bVpuTmxkQzUwYjNBN1hISmNibHgwWEhSY2RIMGdaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBabTl5YlM1amJHdGZlQ0E5SUdVdWNHRm5aVmdnTFNCMFlYSm5aWFF1YjJabWMyVjBUR1ZtZER0Y2NseHVYSFJjZEZ4MFhIUm1iM0p0TG1Oc2ExOTVJRDBnWlM1d1lXZGxXU0F0SUhSaGNtZGxkQzV2Wm1aelpYUlViM0E3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEgxY2NseHVYSFJjZEM4dklHTnNaV0Z5SUdadmNtMGdkbUZ5YzF4eVhHNWNkRngwYzJWMFZHbHRaVzkxZENobWRXNWpkR2x2YmlncElIc2dabTl5YlM1amJHc2dQU0JtYjNKdExtTnNhMTk0SUQwZ1ptOXliUzVqYkd0ZmVTQTlJRzUxYkd3N0lIMHNJREV3TUNrN1hISmNibHgwZlZ4eVhHNWNjbHh1WEhKY2JseDBMeThnWVdwaGVFWnZjbTFWYm1KcGJtUWdkVzVpYVc1a2N5QjBhR1VnWlhabGJuUWdhR0Z1Wkd4bGNuTWdkR2hoZENCM1pYSmxJR0p2ZFc1a0lHSjVJR0ZxWVhoR2IzSnRYSEpjYmx4MEpDNW1iaTVoYW1GNFJtOXliVlZ1WW1sdVpDQTlJR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNWNkRngwY21WMGRYSnVJSFJvYVhNdWRXNWlhVzVrS0NkemRXSnRhWFF1Wm05eWJTMXdiSFZuYVc0Z1kyeHBZMnN1Wm05eWJTMXdiSFZuYVc0bktUdGNjbHh1WEhSOU8xeHlYRzVjY2x4dVhIUXZLaXBjY2x4dVhIUWdLaUJtYjNKdFZHOUJjbkpoZVNncElHZGhkR2hsY25NZ1ptOXliU0JsYkdWdFpXNTBJR1JoZEdFZ2FXNTBieUJoYmlCaGNuSmhlU0J2WmlCdlltcGxZM1J6SUhSb1lYUWdZMkZ1WEhKY2JseDBJQ29nWW1VZ2NHRnpjMlZrSUhSdklHRnVlU0J2WmlCMGFHVWdabTlzYkc5M2FXNW5JR0ZxWVhnZ1puVnVZM1JwYjI1ek9pQWtMbWRsZEN3Z0pDNXdiM04wTENCdmNpQnNiMkZrTGx4eVhHNWNkQ0FxSUVWaFkyZ2diMkpxWldOMElHbHVJSFJvWlNCaGNuSmhlU0JvWVhNZ1ltOTBhQ0JoSUNkdVlXMWxKeUJoYm1RZ0ozWmhiSFZsSnlCd2NtOXdaWEowZVM0Z0lFRnVJR1Y0WVcxd2JHVWdiMlpjY2x4dVhIUWdLaUJoYmlCaGNuSmhlU0JtYjNJZ1lTQnphVzF3YkdVZ2JHOW5hVzRnWm05eWJTQnRhV2RvZENCaVpUcGNjbHh1WEhRZ0tseHlYRzVjZENBcUlGc2dleUJ1WVcxbE9pQW5kWE5sY201aGJXVW5MQ0IyWVd4MVpUb2dKMnB5WlhOcFp5Y2dmU3dnZXlCdVlXMWxPaUFuY0dGemMzZHZjbVFuTENCMllXeDFaVG9nSjNObFkzSmxkQ2NnZlNCZFhISmNibHgwSUNwY2NseHVYSFFnS2lCSmRDQnBjeUIwYUdseklHRnljbUY1SUhSb1lYUWdhWE1nY0dGemMyVmtJSFJ2SUhCeVpTMXpkV0p0YVhRZ1kyRnNiR0poWTJzZ1puVnVZM1JwYjI1eklIQnliM1pwWkdWa0lIUnZJSFJvWlZ4eVhHNWNkQ0FxSUdGcVlYaFRkV0p0YVhRb0tTQmhibVFnWVdwaGVFWnZjbTBvS1NCdFpYUm9iMlJ6TGx4eVhHNWNkQ0FxTDF4eVhHNWNkQ1F1Wm00dVptOXliVlJ2UVhKeVlYa2dQU0JtZFc1amRHbHZiaWh6WlcxaGJuUnBZeXdnWld4bGJXVnVkSE1wSUh0Y2NseHVYSFJjZEhaaGNpQmhJRDBnVzEwN1hISmNibHgwWEhScFppQW9kR2hwY3k1c1pXNW5kR2dnUFQwOUlEQXBJSHRjY2x4dVhIUmNkRngwY21WMGRYSnVJR0U3WEhKY2JseDBYSFI5WEhKY2JseHlYRzVjZEZ4MGRtRnlJR1p2Y20wZ1BTQjBhR2x6V3pCZE8xeHlYRzVjZEZ4MGRtRnlJR1ZzY3lBOUlITmxiV0Z1ZEdsaklEOGdabTl5YlM1blpYUkZiR1Z0Wlc1MGMwSjVWR0ZuVG1GdFpTZ25LaWNwSURvZ1ptOXliUzVsYkdWdFpXNTBjenRjY2x4dVhIUmNkR2xtSUNnaFpXeHpLU0I3WEhKY2JseDBYSFJjZEhKbGRIVnliaUJoTzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RIWmhjaUJwTEdvc2JpeDJMR1ZzTEcxaGVDeHFiV0Y0TzF4eVhHNWNkRngwWm05eUtHazlNQ3dnYldGNFBXVnNjeTVzWlc1bmRHZzdJR2tnUENCdFlYZzdJR2tyS3lrZ2UxeHlYRzVjZEZ4MFhIUmxiQ0E5SUdWc2MxdHBYVHRjY2x4dVhIUmNkRngwYmlBOUlHVnNMbTVoYldVN1hISmNibHgwWEhSY2RHbG1JQ2doYmlCOGZDQmxiQzVrYVhOaFlteGxaQ2tnZTF4eVhHNWNkRngwWEhSY2RHTnZiblJwYm5WbE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhScFppQW9jMlZ0WVc1MGFXTWdKaVlnWm05eWJTNWpiR3NnSmlZZ1pXd3VkSGx3WlNBOVBTQmNJbWx0WVdkbFhDSXBJSHRjY2x4dVhIUmNkRngwWEhRdkx5Qm9ZVzVrYkdVZ2FXMWhaMlVnYVc1d2RYUnpJRzl1SUhSb1pTQm1iSGtnZDJobGJpQnpaVzFoYm5ScFl5QTlQU0IwY25WbFhISmNibHgwWEhSY2RGeDBhV1lvWm05eWJTNWpiR3NnUFQwZ1pXd3BJSHRjY2x4dVhIUmNkRngwWEhSY2RHRXVjSFZ6YUNoN2JtRnRaVG9nYml3Z2RtRnNkV1U2SUNRb1pXd3BMblpoYkNncExDQjBlWEJsT2lCbGJDNTBlWEJsSUgwcE8xeHlYRzVjZEZ4MFhIUmNkRngwWVM1d2RYTm9LSHR1WVcxbE9pQnVLeWN1ZUNjc0lIWmhiSFZsT2lCbWIzSnRMbU5zYTE5NGZTd2dlMjVoYldVNklHNHJKeTU1Snl3Z2RtRnNkV1U2SUdadmNtMHVZMnhyWDNsOUtUdGNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MFkyOXVkR2x1ZFdVN1hISmNibHgwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEhZZ1BTQWtMbVpwWld4a1ZtRnNkV1VvWld3c0lIUnlkV1VwTzF4eVhHNWNkRngwWEhScFppQW9kaUFtSmlCMkxtTnZibk4wY25WamRHOXlJRDA5SUVGeWNtRjVLU0I3WEhKY2JseDBYSFJjZEZ4MGFXWWdLR1ZzWlcxbGJuUnpLVnh5WEc1Y2RGeDBYSFJjZEZ4MFpXeGxiV1Z1ZEhNdWNIVnphQ2hsYkNrN1hISmNibHgwWEhSY2RGeDBabTl5S0dvOU1Dd2dhbTFoZUQxMkxteGxibWQwYURzZ2FpQThJR3B0WVhnN0lHb3JLeWtnZTF4eVhHNWNkRngwWEhSY2RGeDBZUzV3ZFhOb0tIdHVZVzFsT2lCdUxDQjJZV3gxWlRvZ2RsdHFYWDBwTzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJsYkhObElHbG1JQ2htWldGMGRYSmxMbVpwYkdWaGNHa2dKaVlnWld3dWRIbHdaU0E5UFNBblptbHNaU2NwSUh0Y2NseHVYSFJjZEZ4MFhIUnBaaUFvWld4bGJXVnVkSE1wWEhKY2JseDBYSFJjZEZ4MFhIUmxiR1Z0Wlc1MGN5NXdkWE5vS0dWc0tUdGNjbHh1WEhSY2RGeDBYSFIyWVhJZ1ptbHNaWE1nUFNCbGJDNW1hV3hsY3p0Y2NseHVYSFJjZEZ4MFhIUnBaaUFvWm1sc1pYTXViR1Z1WjNSb0tTQjdYSEpjYmx4MFhIUmNkRngwWEhSbWIzSWdLR285TURzZ2FpQThJR1pwYkdWekxteGxibWQwYURzZ2Fpc3JLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkR0V1Y0hWemFDaDdibUZ0WlRvZ2Jpd2dkbUZzZFdVNklHWnBiR1Z6VzJwZExDQjBlWEJsT2lCbGJDNTBlWEJsZlNrN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkRngwTHk4Z0l6RTRNRnh5WEc1Y2RGeDBYSFJjZEZ4MFlTNXdkWE5vS0hzZ2JtRnRaVG9nYml3Z2RtRnNkV1U2SUNjbkxDQjBlWEJsT2lCbGJDNTBlWEJsSUgwcE8xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwZlZ4eVhHNWNkRngwWEhSbGJITmxJR2xtSUNoMklDRTlQU0J1ZFd4c0lDWW1JSFI1Y0dWdlppQjJJQ0U5SUNkMWJtUmxabWx1WldRbktTQjdYSEpjYmx4MFhIUmNkRngwYVdZZ0tHVnNaVzFsYm5SektWeHlYRzVjZEZ4MFhIUmNkRngwWld4bGJXVnVkSE11Y0hWemFDaGxiQ2s3WEhKY2JseDBYSFJjZEZ4MFlTNXdkWE5vS0h0dVlXMWxPaUJ1TENCMllXeDFaVG9nZGl3Z2RIbHdaVG9nWld3dWRIbHdaU3dnY21WeGRXbHlaV1E2SUdWc0xuSmxjWFZwY21Wa2ZTazdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkSDFjY2x4dVhISmNibHgwWEhScFppQW9JWE5sYldGdWRHbGpJQ1ltSUdadmNtMHVZMnhyS1NCN1hISmNibHgwWEhSY2RDOHZJR2x1Y0hWMElIUjVjR1U5UFNkcGJXRm5aU2NnWVhKbElHNXZkQ0JtYjNWdVpDQnBiaUJsYkdWdFpXNTBjeUJoY25KaGVTRWdhR0Z1Wkd4bElHbDBJR2hsY21WY2NseHVYSFJjZEZ4MGRtRnlJQ1JwYm5CMWRDQTlJQ1FvWm05eWJTNWpiR3NwTENCcGJuQjFkQ0E5SUNScGJuQjFkRnN3WFR0Y2NseHVYSFJjZEZ4MGJpQTlJR2x1Y0hWMExtNWhiV1U3WEhKY2JseDBYSFJjZEdsbUlDaHVJQ1ltSUNGcGJuQjFkQzVrYVhOaFlteGxaQ0FtSmlCcGJuQjFkQzUwZVhCbElEMDlJQ2RwYldGblpTY3BJSHRjY2x4dVhIUmNkRngwWEhSaExuQjFjMmdvZTI1aGJXVTZJRzRzSUhaaGJIVmxPaUFrYVc1d2RYUXVkbUZzS0NsOUtUdGNjbHh1WEhSY2RGeDBYSFJoTG5CMWMyZ29lMjVoYldVNklHNHJKeTU0Snl3Z2RtRnNkV1U2SUdadmNtMHVZMnhyWDNoOUxDQjdibUZ0WlRvZ2Jpc25MbmtuTENCMllXeDFaVG9nWm05eWJTNWpiR3RmZVgwcE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlYSEpjYmx4MFhIUnlaWFIxY200Z1lUdGNjbHh1WEhSOU8xeHlYRzVjY2x4dVhIUXZLaXBjY2x4dVhIUWdLaUJUWlhKcFlXeHBlbVZ6SUdadmNtMGdaR0YwWVNCcGJuUnZJR0VnSjNOMVltMXBkSFJoWW14bEp5QnpkSEpwYm1jdUlGUm9hWE1nYldWMGFHOWtJSGRwYkd3Z2NtVjBkWEp1SUdFZ2MzUnlhVzVuWEhKY2JseDBJQ29nYVc0Z2RHaGxJR1p2Y20xaGREb2dibUZ0WlRFOWRtRnNkV1V4Sm1GdGNEdHVZVzFsTWoxMllXeDFaVEpjY2x4dVhIUWdLaTljY2x4dVhIUWtMbVp1TG1admNtMVRaWEpwWVd4cGVtVWdQU0JtZFc1amRHbHZiaWh6WlcxaGJuUnBZeWtnZTF4eVhHNWNkRngwTHk5b1lXNWtJRzltWmlCMGJ5QnFVWFZsY25rdWNHRnlZVzBnWm05eUlIQnliM0JsY2lCbGJtTnZaR2x1WjF4eVhHNWNkRngwY21WMGRYSnVJQ1F1Y0dGeVlXMG9kR2hwY3k1bWIzSnRWRzlCY25KaGVTaHpaVzFoYm5ScFl5a3BPMXh5WEc1Y2RIMDdYSEpjYmx4eVhHNWNkQzhxS2x4eVhHNWNkQ0FxSUZObGNtbGhiR2w2WlhNZ1lXeHNJR1pwWld4a0lHVnNaVzFsYm5SeklHbHVJSFJvWlNCcVVYVmxjbmtnYjJKcVpXTjBJR2x1ZEc4Z1lTQnhkV1Z5ZVNCemRISnBibWN1WEhKY2JseDBJQ29nVkdocGN5QnRaWFJvYjJRZ2QybHNiQ0J5WlhSMWNtNGdZU0J6ZEhKcGJtY2dhVzRnZEdobElHWnZjbTFoZERvZ2JtRnRaVEU5ZG1Gc2RXVXhKbUZ0Y0R0dVlXMWxNajEyWVd4MVpUSmNjbHh1WEhRZ0tpOWNjbHh1WEhRa0xtWnVMbVpwWld4a1UyVnlhV0ZzYVhwbElEMGdablZ1WTNScGIyNG9jM1ZqWTJWemMyWjFiQ2tnZTF4eVhHNWNkRngwZG1GeUlHRWdQU0JiWFR0Y2NseHVYSFJjZEhSb2FYTXVaV0ZqYUNobWRXNWpkR2x2YmlncElIdGNjbHh1WEhSY2RGeDBkbUZ5SUc0Z1BTQjBhR2x6TG01aGJXVTdYSEpjYmx4MFhIUmNkR2xtSUNnaGJpa2dlMXh5WEc1Y2RGeDBYSFJjZEhKbGRIVnlianRjY2x4dVhIUmNkRngwZlZ4eVhHNWNkRngwWEhSMllYSWdkaUE5SUNRdVptbGxiR1JXWVd4MVpTaDBhR2x6TENCemRXTmpaWE56Wm5Wc0tUdGNjbHh1WEhSY2RGeDBhV1lnS0hZZ0ppWWdkaTVqYjI1emRISjFZM1J2Y2lBOVBTQkJjbkpoZVNrZ2UxeHlYRzVjZEZ4MFhIUmNkR1p2Y2lBb2RtRnlJR2s5TUN4dFlYZzlkaTVzWlc1bmRHZzdJR2tnUENCdFlYZzdJR2tyS3lrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWVM1d2RYTm9LSHR1WVcxbE9pQnVMQ0IyWVd4MVpUb2dkbHRwWFgwcE8xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwZlZ4eVhHNWNkRngwWEhSbGJITmxJR2xtSUNoMklDRTlQU0J1ZFd4c0lDWW1JSFI1Y0dWdlppQjJJQ0U5SUNkMWJtUmxabWx1WldRbktTQjdYSEpjYmx4MFhIUmNkRngwWVM1d2RYTm9LSHR1WVcxbE9pQjBhR2x6TG01aGJXVXNJSFpoYkhWbE9pQjJmU2s3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEgwcE8xeHlYRzVjZEZ4MEx5OW9ZVzVrSUc5bVppQjBieUJxVVhWbGNua3VjR0Z5WVcwZ1ptOXlJSEJ5YjNCbGNpQmxibU52WkdsdVoxeHlYRzVjZEZ4MGNtVjBkWEp1SUNRdWNHRnlZVzBvWVNrN1hISmNibHgwZlR0Y2NseHVYSEpjYmx4MEx5b3FYSEpjYmx4MElDb2dVbVYwZFhKdWN5QjBhR1VnZG1Gc2RXVW9jeWtnYjJZZ2RHaGxJR1ZzWlcxbGJuUWdhVzRnZEdobElHMWhkR05vWldRZ2MyVjBMaUFnUm05eUlHVjRZVzF3YkdVc0lHTnZibk5wWkdWeUlIUm9aU0JtYjJ4c2IzZHBibWNnWm05eWJUcGNjbHh1WEhRZ0tseHlYRzVjZENBcUlDQThabTl5YlQ0OFptbGxiR1J6WlhRK1hISmNibHgwSUNvZ0lDQWdJQ0E4YVc1d2RYUWdibUZ0WlQxY0lrRmNJaUIwZVhCbFBWd2lkR1Y0ZEZ3aUlDOCtYSEpjYmx4MElDb2dJQ0FnSUNBOGFXNXdkWFFnYm1GdFpUMWNJa0ZjSWlCMGVYQmxQVndpZEdWNGRGd2lJQzgrWEhKY2JseDBJQ29nSUNBZ0lDQThhVzV3ZFhRZ2JtRnRaVDFjSWtKY0lpQjBlWEJsUFZ3aVkyaGxZMnRpYjNoY0lpQjJZV3gxWlQxY0lrSXhYQ0lnTHo1Y2NseHVYSFFnS2lBZ0lDQWdJRHhwYm5CMWRDQnVZVzFsUFZ3aVFsd2lJSFI1Y0dVOVhDSmphR1ZqYTJKdmVGd2lJSFpoYkhWbFBWd2lRakpjSWk4K1hISmNibHgwSUNvZ0lDQWdJQ0E4YVc1d2RYUWdibUZ0WlQxY0lrTmNJaUIwZVhCbFBWd2ljbUZrYVc5Y0lpQjJZV3gxWlQxY0lrTXhYQ0lnTHo1Y2NseHVYSFFnS2lBZ0lDQWdJRHhwYm5CMWRDQnVZVzFsUFZ3aVExd2lJSFI1Y0dVOVhDSnlZV1JwYjF3aUlIWmhiSFZsUFZ3aVF6SmNJaUF2UGx4eVhHNWNkQ0FxSUNBOEwyWnBaV3hrYzJWMFBqd3ZabTl5YlQ1Y2NseHVYSFFnS2x4eVhHNWNkQ0FxSUNCMllYSWdkaUE5SUNRb0oybHVjSFYwVzNSNWNHVTlkR1Y0ZEYwbktTNW1hV1ZzWkZaaGJIVmxLQ2s3WEhKY2JseDBJQ29nSUM4dklHbG1JRzV2SUhaaGJIVmxjeUJoY21VZ1pXNTBaWEpsWkNCcGJuUnZJSFJvWlNCMFpYaDBJR2x1Y0hWMGMxeHlYRzVjZENBcUlDQjJJRDA5SUZzbkp5d25KMTFjY2x4dVhIUWdLaUFnTHk4Z2FXWWdkbUZzZFdWeklHVnVkR1Z5WldRZ2FXNTBieUIwYUdVZ2RHVjRkQ0JwYm5CMWRITWdZWEpsSUNkbWIyOG5JR0Z1WkNBblltRnlKMXh5WEc1Y2RDQXFJQ0IySUQwOUlGc25abTl2Snl3blltRnlKMTFjY2x4dVhIUWdLbHh5WEc1Y2RDQXFJQ0IyWVhJZ2RpQTlJQ1FvSjJsdWNIVjBXM1I1Y0dVOVkyaGxZMnRpYjNoZEp5a3VabWxsYkdSV1lXeDFaU2dwTzF4eVhHNWNkQ0FxSUNBdkx5QnBaaUJ1WldsMGFHVnlJR05vWldOclltOTRJR2x6SUdOb1pXTnJaV1JjY2x4dVhIUWdLaUFnZGlBOVBUMGdkVzVrWldacGJtVmtYSEpjYmx4MElDb2dJQzh2SUdsbUlHSnZkR2dnWTJobFkydGliM2hsY3lCaGNtVWdZMmhsWTJ0bFpGeHlYRzVjZENBcUlDQjJJRDA5SUZzblFqRW5MQ0FuUWpJblhWeHlYRzVjZENBcVhISmNibHgwSUNvZ0lIWmhjaUIySUQwZ0pDZ25hVzV3ZFhSYmRIbHdaVDF5WVdScGIxMG5LUzVtYVdWc1pGWmhiSFZsS0NrN1hISmNibHgwSUNvZ0lDOHZJR2xtSUc1bGFYUm9aWElnY21Ga2FXOGdhWE1nWTJobFkydGxaRnh5WEc1Y2RDQXFJQ0IySUQwOVBTQjFibVJsWm1sdVpXUmNjbHh1WEhRZ0tpQWdMeThnYVdZZ1ptbHljM1FnY21Ga2FXOGdhWE1nWTJobFkydGxaRnh5WEc1Y2RDQXFJQ0IySUQwOUlGc25RekVuWFZ4eVhHNWNkQ0FxWEhKY2JseDBJQ29nVkdobElITjFZMk5sYzNObWRXd2dZWEpuZFcxbGJuUWdZMjl1ZEhKdmJITWdkMmhsZEdobGNpQnZjaUJ1YjNRZ2RHaGxJR1pwWld4a0lHVnNaVzFsYm5RZ2JYVnpkQ0JpWlNBbmMzVmpZMlZ6YzJaMWJDZGNjbHh1WEhRZ0tpQW9jR1Z5SUdoMGRIQTZMeTkzZDNjdWR6TXViM0puTDFSU0wyaDBiV3cwTDJsdWRHVnlZV04wTDJadmNtMXpMbWgwYld3amMzVmpZMlZ6YzJaMWJDMWpiMjUwY205c2N5a3VYSEpjYmx4MElDb2dWR2hsSUdSbFptRjFiSFFnZG1Gc2RXVWdiMllnZEdobElITjFZMk5sYzNObWRXd2dZWEpuZFcxbGJuUWdhWE1nZEhKMVpTNGdJRWxtSUhSb2FYTWdkbUZzZFdVZ2FYTWdabUZzYzJVZ2RHaGxJSFpoYkhWbEtITXBYSEpjYmx4MElDb2dabTl5SUdWaFkyZ2daV3hsYldWdWRDQnBjeUJ5WlhSMWNtNWxaQzVjY2x4dVhIUWdLbHh5WEc1Y2RDQXFJRTV2ZEdVNklGUm9hWE1nYldWMGFHOWtJQ3BoYkhkaGVYTXFJSEpsZEhWeWJuTWdZVzRnWVhKeVlYa3VJQ0JKWmlCdWJ5QjJZV3hwWkNCMllXeDFaU0JqWVc0Z1ltVWdaR1YwWlhKdGFXNWxaQ0IwYUdWY2NseHVYSFFnS2lBZ0lDQmhjbkpoZVNCM2FXeHNJR0psSUdWdGNIUjVMQ0J2ZEdobGNuZHBjMlVnYVhRZ2QybHNiQ0JqYjI1MFlXbHVJRzl1WlNCdmNpQnRiM0psSUhaaGJIVmxjeTVjY2x4dVhIUWdLaTljY2x4dVhIUWtMbVp1TG1acFpXeGtWbUZzZFdVZ1BTQm1kVzVqZEdsdmJpaHpkV05qWlhOelpuVnNLU0I3WEhKY2JseDBYSFJtYjNJZ0tIWmhjaUIyWVd3OVcxMHNJR2s5TUN3Z2JXRjRQWFJvYVhNdWJHVnVaM1JvT3lCcElEd2diV0Y0T3lCcEt5c3BJSHRjY2x4dVhIUmNkRngwZG1GeUlHVnNJRDBnZEdocGMxdHBYVHRjY2x4dVhIUmNkRngwZG1GeUlIWWdQU0FrTG1acFpXeGtWbUZzZFdVb1pXd3NJSE4xWTJObGMzTm1kV3dwTzF4eVhHNWNkRngwWEhScFppQW9kaUE5UFQwZ2JuVnNiQ0I4ZkNCMGVYQmxiMllnZGlBOVBTQW5kVzVrWldacGJtVmtKeUI4ZkNBb2RpNWpiMjV6ZEhKMVkzUnZjaUE5UFNCQmNuSmhlU0FtSmlBaGRpNXNaVzVuZEdncEtTQjdYSEpjYmx4MFhIUmNkRngwWTI5dWRHbHVkV1U3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEZ4MGFXWWdLSFl1WTI5dWMzUnlkV04wYjNJZ1BUMGdRWEp5WVhrcFhISmNibHgwWEhSY2RGeDBKQzV0WlhKblpTaDJZV3dzSUhZcE8xeHlYRzVjZEZ4MFhIUmxiSE5sWEhKY2JseDBYSFJjZEZ4MGRtRnNMbkIxYzJnb2RpazdYSEpjYmx4MFhIUjlYSEpjYmx4MFhIUnlaWFIxY200Z2RtRnNPMXh5WEc1Y2RIMDdYSEpjYmx4eVhHNWNkQzhxS2x4eVhHNWNkQ0FxSUZKbGRIVnlibk1nZEdobElIWmhiSFZsSUc5bUlIUm9aU0JtYVdWc1pDQmxiR1Z0Wlc1MExseHlYRzVjZENBcUwxeHlYRzVjZENRdVptbGxiR1JXWVd4MVpTQTlJR1oxYm1OMGFXOXVLR1ZzTENCemRXTmpaWE56Wm5Wc0tTQjdYSEpjYmx4MFhIUjJZWElnYmlBOUlHVnNMbTVoYldVc0lIUWdQU0JsYkM1MGVYQmxMQ0IwWVdjZ1BTQmxiQzUwWVdkT1lXMWxMblJ2VEc5M1pYSkRZWE5sS0NrN1hISmNibHgwWEhScFppQW9jM1ZqWTJWemMyWjFiQ0E5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdYSEpjYmx4MFhIUmNkSE4xWTJObGMzTm1kV3dnUFNCMGNuVmxPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEdsbUlDaHpkV05qWlhOelpuVnNJQ1ltSUNnaGJpQjhmQ0JsYkM1a2FYTmhZbXhsWkNCOGZDQjBJRDA5SUNkeVpYTmxkQ2NnZkh3Z2RDQTlQU0FuWW5WMGRHOXVKeUI4ZkZ4eVhHNWNkRngwWEhRb2RDQTlQU0FuWTJobFkydGliM2duSUh4OElIUWdQVDBnSjNKaFpHbHZKeWtnSmlZZ0lXVnNMbU5vWldOclpXUWdmSHhjY2x4dVhIUmNkRngwS0hRZ1BUMGdKM04xWW0xcGRDY2dmSHdnZENBOVBTQW5hVzFoWjJVbktTQW1KaUJsYkM1bWIzSnRJQ1ltSUdWc0xtWnZjbTB1WTJ4cklDRTlJR1ZzSUh4OFhISmNibHgwWEhSY2RIUmhaeUE5UFNBbmMyVnNaV04wSnlBbUppQmxiQzV6Wld4bFkzUmxaRWx1WkdWNElEMDlJQzB4S1NrZ2UxeHlYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQnVkV3hzTzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHbG1JQ2gwWVdjZ1BUMGdKM05sYkdWamRDY3BJSHRjY2x4dVhIUmNkRngwZG1GeUlHbHVaR1Y0SUQwZ1pXd3VjMlZzWldOMFpXUkpibVJsZUR0Y2NseHVYSFJjZEZ4MGFXWWdLR2x1WkdWNElEd2dNQ2tnZTF4eVhHNWNkRngwWEhSY2RISmxkSFZ5YmlCdWRXeHNPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseDBYSFJjZEhaaGNpQmhJRDBnVzEwc0lHOXdjeUE5SUdWc0xtOXdkR2x2Ym5NN1hISmNibHgwWEhSY2RIWmhjaUJ2Ym1VZ1BTQW9kQ0E5UFNBbmMyVnNaV04wTFc5dVpTY3BPMXh5WEc1Y2RGeDBYSFIyWVhJZ2JXRjRJRDBnS0c5dVpTQS9JR2x1WkdWNEt6RWdPaUJ2Y0hNdWJHVnVaM1JvS1R0Y2NseHVYSFJjZEZ4MFptOXlLSFpoY2lCcFBTaHZibVVnUHlCcGJtUmxlQ0E2SURBcE95QnBJRHdnYldGNE95QnBLeXNwSUh0Y2NseHVYSFJjZEZ4MFhIUjJZWElnYjNBZ1BTQnZjSE5iYVYwN1hISmNibHgwWEhSY2RGeDBhV1lnS0c5d0xuTmxiR1ZqZEdWa0tTQjdYSEpjYmx4MFhIUmNkRngwWEhSMllYSWdkaUE5SUc5d0xuWmhiSFZsTzF4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0NGMktTQjdJQzh2SUdWNGRISmhJSEJoYVc0Z1ptOXlJRWxGTGk0dVhISmNibHgwWEhSY2RGeDBYSFJjZEhZZ1BTQW9iM0F1WVhSMGNtbGlkWFJsY3lBbUppQnZjQzVoZEhSeWFXSjFkR1Z6V3lkMllXeDFaU2RkSUNZbUlDRW9iM0F1WVhSMGNtbGlkWFJsYzFzbmRtRnNkV1VuWFM1emNHVmphV1pwWldRcEtTQS9JRzl3TG5SbGVIUWdPaUJ2Y0M1MllXeDFaVHRjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaHZibVVwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwY21WMGRYSnVJSFk3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwWEhSaExuQjFjMmdvZGlrN1hISmNibHgwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFI5WEhKY2JseDBYSFJjZEhKbGRIVnliaUJoTzF4eVhHNWNkRngwZlZ4eVhHNWNkRngwY21WMGRYSnVJQ1FvWld3cExuWmhiQ2dwTzF4eVhHNWNkSDA3WEhKY2JseHlYRzVjZEM4cUtseHlYRzVjZENBcUlFTnNaV0Z5Y3lCMGFHVWdabTl5YlNCa1lYUmhMaUFnVkdGclpYTWdkR2hsSUdadmJHeHZkMmx1WnlCaFkzUnBiMjV6SUc5dUlIUm9aU0JtYjNKdEozTWdhVzV3ZFhRZ1ptbGxiR1J6T2x4eVhHNWNkQ0FxSUNBdElHbHVjSFYwSUhSbGVIUWdabWxsYkdSeklIZHBiR3dnYUdGMlpTQjBhR1ZwY2lBbmRtRnNkV1VuSUhCeWIzQmxjblI1SUhObGRDQjBieUIwYUdVZ1pXMXdkSGtnYzNSeWFXNW5YSEpjYmx4MElDb2dJQzBnYzJWc1pXTjBJR1ZzWlcxbGJuUnpJSGRwYkd3Z2FHRjJaU0IwYUdWcGNpQW5jMlZzWldOMFpXUkpibVJsZUNjZ2NISnZjR1Z5ZEhrZ2MyVjBJSFJ2SUMweFhISmNibHgwSUNvZ0lDMGdZMmhsWTJ0aWIzZ2dZVzVrSUhKaFpHbHZJR2x1Y0hWMGN5QjNhV3hzSUdoaGRtVWdkR2hsYVhJZ0oyTm9aV05yWldRbklIQnliM0JsY25SNUlITmxkQ0IwYnlCbVlXeHpaVnh5WEc1Y2RDQXFJQ0F0SUdsdWNIVjBjeUJ2WmlCMGVYQmxJSE4xWW0xcGRDd2dZblYwZEc5dUxDQnlaWE5sZEN3Z1lXNWtJR2hwWkdSbGJpQjNhV3hzSUNwdWIzUXFJR0psSUdWbVptVmpkR1ZrWEhKY2JseDBJQ29nSUMwZ1luVjBkRzl1SUdWc1pXMWxiblJ6SUhkcGJHd2dLbTV2ZENvZ1ltVWdaV1ptWldOMFpXUmNjbHh1WEhRZ0tpOWNjbHh1WEhRa0xtWnVMbU5zWldGeVJtOXliU0E5SUdaMWJtTjBhVzl1S0dsdVkyeDFaR1ZJYVdSa1pXNHBJSHRjY2x4dVhIUmNkSEpsZEhWeWJpQjBhR2x6TG1WaFkyZ29ablZ1WTNScGIyNG9LU0I3WEhKY2JseDBYSFJjZENRb0oybHVjSFYwTEhObGJHVmpkQ3gwWlhoMFlYSmxZU2NzSUhSb2FYTXBMbU5zWldGeVJtbGxiR1J6S0dsdVkyeDFaR1ZJYVdSa1pXNHBPMXh5WEc1Y2RGeDBmU2s3WEhKY2JseDBmVHRjY2x4dVhISmNibHgwTHlvcVhISmNibHgwSUNvZ1EyeGxZWEp6SUhSb1pTQnpaV3hsWTNSbFpDQm1iM0p0SUdWc1pXMWxiblJ6TGx4eVhHNWNkQ0FxTDF4eVhHNWNkQ1F1Wm00dVkyeGxZWEpHYVdWc1pITWdQU0FrTG1adUxtTnNaV0Z5U1c1d2RYUnpJRDBnWm5WdVkzUnBiMjRvYVc1amJIVmtaVWhwWkdSbGJpa2dlMXh5WEc1Y2RGeDBkbUZ5SUhKbElEMGdMMTRvUHpwamIyeHZjbnhrWVhSbGZHUmhkR1YwYVcxbGZHVnRZV2xzZkcxdmJuUm9mRzUxYldKbGNueHdZWE56ZDI5eVpIeHlZVzVuWlh4elpXRnlZMmg4ZEdWc2ZIUmxlSFI4ZEdsdFpYeDFjbXg4ZDJWbGF5a2tMMms3SUM4dklDZG9hV1JrWlc0bklHbHpJRzV2ZENCcGJpQjBhR2x6SUd4cGMzUmNjbHh1WEhSY2RISmxkSFZ5YmlCMGFHbHpMbVZoWTJnb1puVnVZM1JwYjI0b0tTQjdYSEpjYmx4MFhIUmNkSFpoY2lCMElEMGdkR2hwY3k1MGVYQmxMQ0IwWVdjZ1BTQjBhR2x6TG5SaFowNWhiV1V1ZEc5TWIzZGxja05oYzJVb0tUdGNjbHh1WEhSY2RGeDBhV1lnS0hKbExuUmxjM1FvZENrZ2ZId2dkR0ZuSUQwOUlDZDBaWGgwWVhKbFlTY3BJSHRjY2x4dVhIUmNkRngwWEhSMGFHbHpMblpoYkhWbElEMGdKeWM3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEZ4MFpXeHpaU0JwWmlBb2RDQTlQU0FuWTJobFkydGliM2duSUh4OElIUWdQVDBnSjNKaFpHbHZKeWtnZTF4eVhHNWNkRngwWEhSY2RIUm9hWE11WTJobFkydGxaQ0E5SUdaaGJITmxPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseDBYSFJjZEdWc2MyVWdhV1lnS0hSaFp5QTlQU0FuYzJWc1pXTjBKeWtnZTF4eVhHNWNkRngwWEhSY2RIUm9hWE11YzJWc1pXTjBaV1JKYm1SbGVDQTlJQzB4TzF4eVhHNWNkRngwWEhSOVhISmNibHgwWEhSY2RHVnNjMlVnYVdZZ0tIUWdQVDBnWENKbWFXeGxYQ0lwSUh0Y2NseHVYSFJjZEZ4MFhIUnBaaUFvTDAxVFNVVXZMblJsYzNRb2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDa3BJSHRjY2x4dVhIUmNkRngwWEhSY2RDUW9kR2hwY3lrdWNtVndiR0ZqWlZkcGRHZ29KQ2gwYUdsektTNWpiRzl1WlNoMGNuVmxLU2s3WEhKY2JseDBYSFJjZEZ4MGZTQmxiSE5sSUh0Y2NseHVYSFJjZEZ4MFhIUmNkQ1FvZEdocGN5a3VkbUZzS0NjbktUdGNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEZ4MFpXeHpaU0JwWmlBb2FXNWpiSFZrWlVocFpHUmxiaWtnZTF4eVhHNWNkRngwWEhSY2RDOHZJR2x1WTJ4MVpHVklhV1JrWlc0Z1kyRnVJR0psSUhSb1pTQjJZV3gxWlNCMGNuVmxMQ0J2Y2lCcGRDQmpZVzRnWW1VZ1lTQnpaV3hsWTNSdmNpQnpkSEpwYm1kY2NseHVYSFJjZEZ4MFhIUXZMeUJwYm1ScFkyRjBhVzVuSUdFZ2MzQmxZMmxoYkNCMFpYTjBPeUJtYjNJZ1pYaGhiWEJzWlRwY2NseHVYSFJjZEZ4MFhIUXZMeUFnSkNnbkkyMTVSbTl5YlNjcExtTnNaV0Z5Um05eWJTZ25Mbk53WldOcFlXdzZhR2xrWkdWdUp5bGNjbHh1WEhSY2RGeDBYSFF2THlCMGFHVWdZV0p2ZG1VZ2QyOTFiR1FnWTJ4bFlXNGdhR2xrWkdWdUlHbHVjSFYwY3lCMGFHRjBJR2hoZG1VZ2RHaGxJR05zWVhOeklHOW1JQ2R6Y0dWamFXRnNKMXh5WEc1Y2RGeDBYSFJjZEdsbUlDZ2dLR2x1WTJ4MVpHVklhV1JrWlc0Z1BUMDlJSFJ5ZFdVZ0ppWWdMMmhwWkdSbGJpOHVkR1Z6ZENoMEtTa2dmSHhjY2x4dVhIUmNkRngwWEhSY2RDQW9kSGx3Wlc5bUlHbHVZMngxWkdWSWFXUmtaVzRnUFQwZ0ozTjBjbWx1WnljZ0ppWWdKQ2gwYUdsektTNXBjeWhwYm1Oc2RXUmxTR2xrWkdWdUtTa2dLVnh5WEc1Y2RGeDBYSFJjZEZ4MGRHaHBjeTUyWVd4MVpTQTlJQ2NuTzF4eVhHNWNkRngwWEhSOVhISmNibHgwWEhSOUtUdGNjbHh1WEhSOU8xeHlYRzVjY2x4dVhIUXZLaXBjY2x4dVhIUWdLaUJTWlhObGRITWdkR2hsSUdadmNtMGdaR0YwWVM0Z0lFTmhkWE5sY3lCaGJHd2dabTl5YlNCbGJHVnRaVzUwY3lCMGJ5QmlaU0J5WlhObGRDQjBieUIwYUdWcGNpQnZjbWxuYVc1aGJDQjJZV3gxWlM1Y2NseHVYSFFnS2k5Y2NseHVYSFFrTG1adUxuSmxjMlYwUm05eWJTQTlJR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNWNkRngwY21WMGRYSnVJSFJvYVhNdVpXRmphQ2htZFc1amRHbHZiaWdwSUh0Y2NseHVYSFJjZEZ4MEx5OGdaM1ZoY21RZ1lXZGhhVzV6ZENCaGJpQnBibkIxZENCM2FYUm9JSFJvWlNCdVlXMWxJRzltSUNkeVpYTmxkQ2RjY2x4dVhIUmNkRngwTHk4Z2JtOTBaU0IwYUdGMElFbEZJSEpsY0c5eWRITWdkR2hsSUhKbGMyVjBJR1oxYm1OMGFXOXVJR0Z6SUdGdUlDZHZZbXBsWTNRblhISmNibHgwWEhSY2RHbG1JQ2gwZVhCbGIyWWdkR2hwY3k1eVpYTmxkQ0E5UFNBblpuVnVZM1JwYjI0bklIeDhJQ2gwZVhCbGIyWWdkR2hwY3k1eVpYTmxkQ0E5UFNBbmIySnFaV04wSnlBbUppQWhkR2hwY3k1eVpYTmxkQzV1YjJSbFZIbHdaU2twSUh0Y2NseHVYSFJjZEZ4MFhIUjBhR2x6TG5KbGMyVjBLQ2s3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEgwcE8xeHlYRzVjZEgwN1hISmNibHh5WEc1Y2RDOHFLbHh5WEc1Y2RDQXFJRVZ1WVdKc1pYTWdiM0lnWkdsellXSnNaWE1nWVc1NUlHMWhkR05vYVc1bklHVnNaVzFsYm5SekxseHlYRzVjZENBcUwxeHlYRzVjZENRdVptNHVaVzVoWW14bElEMGdablZ1WTNScGIyNG9ZaWtnZTF4eVhHNWNkRngwYVdZZ0tHSWdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHlYRzVjZEZ4MFhIUmlJRDBnZEhKMVpUdGNjbHh1WEhSY2RIMWNjbHh1WEhSY2RISmxkSFZ5YmlCMGFHbHpMbVZoWTJnb1puVnVZM1JwYjI0b0tTQjdYSEpjYmx4MFhIUmNkSFJvYVhNdVpHbHpZV0pzWldRZ1BTQWhZanRjY2x4dVhIUmNkSDBwTzF4eVhHNWNkSDA3WEhKY2JseHlYRzVjZEM4cUtseHlYRzVjZENBcUlFTm9aV05yY3k5MWJtTm9aV05yY3lCaGJua2diV0YwWTJocGJtY2dZMmhsWTJ0aWIzaGxjeUJ2Y2lCeVlXUnBieUJpZFhSMGIyNXpJR0Z1WkZ4eVhHNWNkQ0FxSUhObGJHVmpkSE12WkdWelpXeGxZM1J6SUdGdVpDQnRZWFJqYUdsdVp5QnZjSFJwYjI0Z1pXeGxiV1Z1ZEhNdVhISmNibHgwSUNvdlhISmNibHgwSkM1bWJpNXpaV3hsWTNSbFpDQTlJR1oxYm1OMGFXOXVLSE5sYkdWamRDa2dlMXh5WEc1Y2RGeDBhV1lnS0hObGJHVmpkQ0E5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdYSEpjYmx4MFhIUmNkSE5sYkdWamRDQTlJSFJ5ZFdVN1hISmNibHgwWEhSOVhISmNibHgwWEhSeVpYUjFjbTRnZEdocGN5NWxZV05vS0daMWJtTjBhVzl1S0NrZ2UxeHlYRzVjZEZ4MFhIUjJZWElnZENBOUlIUm9hWE11ZEhsd1pUdGNjbHh1WEhSY2RGeDBhV1lnS0hRZ1BUMGdKMk5vWldOclltOTRKeUI4ZkNCMElEMDlJQ2R5WVdScGJ5Y3BJSHRjY2x4dVhIUmNkRngwWEhSMGFHbHpMbU5vWldOclpXUWdQU0J6Wld4bFkzUTdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkRngwWld4elpTQnBaaUFvZEdocGN5NTBZV2RPWVcxbExuUnZURzkzWlhKRFlYTmxLQ2tnUFQwZ0oyOXdkR2x2YmljcElIdGNjbHh1WEhSY2RGeDBYSFIyWVhJZ0pITmxiQ0E5SUNRb2RHaHBjeWt1Y0dGeVpXNTBLQ2R6Wld4bFkzUW5LVHRjY2x4dVhIUmNkRngwWEhScFppQW9jMlZzWldOMElDWW1JQ1J6Wld4Yk1GMGdKaVlnSkhObGJGc3dYUzUwZVhCbElEMDlJQ2R6Wld4bFkzUXRiMjVsSnlrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwTHk4Z1pHVnpaV3hsWTNRZ1lXeHNJRzkwYUdWeUlHOXdkR2x2Ym5OY2NseHVYSFJjZEZ4MFhIUmNkQ1J6Wld3dVptbHVaQ2duYjNCMGFXOXVKeWt1YzJWc1pXTjBaV1FvWm1Gc2MyVXBPMXh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUjBhR2x6TG5ObGJHVmpkR1ZrSUQwZ2MyVnNaV04wTzF4eVhHNWNkRngwWEhSOVhISmNibHgwWEhSOUtUdGNjbHh1WEhSOU8xeHlYRzVjY2x4dVhIUXZMeUJsZUhCdmMyVWdaR1ZpZFdjZ2RtRnlYSEpjYmx4MEpDNW1iaTVoYW1GNFUzVmliV2wwTG1SbFluVm5JRDBnWm1Gc2MyVTdYSEpjYmx4eVhHNWNkQzh2SUdobGJIQmxjaUJtYmlCbWIzSWdZMjl1YzI5c1pTQnNiMmRuYVc1blhISmNibHgwWm5WdVkzUnBiMjRnYkc5bktDa2dlMXh5WEc1Y2RGeDBhV1lnS0NFa0xtWnVMbUZxWVhoVGRXSnRhWFF1WkdWaWRXY3BYSEpjYmx4MFhIUmNkSEpsZEhWeWJqdGNjbHh1WEhSY2RIWmhjaUJ0YzJjZ1BTQW5XMnB4ZFdWeWVTNW1iM0p0WFNBbklDc2dRWEp5WVhrdWNISnZkRzkwZVhCbExtcHZhVzR1WTJGc2JDaGhjbWQxYldWdWRITXNKeWNwTzF4eVhHNWNkRngwYVdZZ0tIZHBibVJ2ZHk1amIyNXpiMnhsSUNZbUlIZHBibVJ2ZHk1amIyNXpiMnhsTG14dlp5a2dlMXh5WEc1Y2RGeDBYSFIzYVc1a2IzY3VZMjl1YzI5c1pTNXNiMmNvYlhObktUdGNjbHh1WEhSY2RIMWNjbHh1WEhSY2RHVnNjMlVnYVdZZ0tIZHBibVJ2ZHk1dmNHVnlZU0FtSmlCM2FXNWtiM2N1YjNCbGNtRXVjRzl6ZEVWeWNtOXlLU0I3WEhKY2JseDBYSFJjZEhkcGJtUnZkeTV2Y0dWeVlTNXdiM04wUlhKeWIzSW9iWE5uS1R0Y2NseHVYSFJjZEgxY2NseHVYSFI5WEhKY2JseHlYRzVjZEgwcEtDQW9kSGx3Wlc5bUtHcFJkV1Z5ZVNrZ0lUMGdKM1Z1WkdWbWFXNWxaQ2NwSUQ4Z2FsRjFaWEo1SURvZ2QybHVaRzkzTGxwbGNIUnZJQ2s3WEhKY2JseHlYRzR2TDMwcE8xeHlYRzRpWFgwPSIsInJlcXVpcmUoJy4uL2xpYi9qcXVlcnlGb3JtJyk7XHJcbnJlcXVpcmUoJy4uL21vZC9mb3JtQ2hlY2snKTtcclxudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ldmVudHMnKTtcclxuLy8zOTYyIGJyYXppbFxyXG4vLzQxMzIgc2F1ZGkgYXJhYmlhXHJcbi8vMzk3NCBjaGlsZVxyXG52YXIgc3BlY2lhbENvdW50cnlJZHMgPSBbMzk2MiwgNDEzMiwgMzk3NF07XHJcbi8vMSBjcGZcclxuLy8yIGNucGpcclxuLy8zIG5pZFxyXG4vLzQgbmNyXHJcbi8vNSBydXRcclxudmFyIHNwZWNpYWxDb2RlcyA9IFsxLCAyLCAzLCA0LCA3XTtcclxudmFyIHNwZWNpYWxaaXBDb25maWcgPSBwYWdlRGF0YS5zcGVjaWFsWmlwQ29uZmlnID8gcGFnZURhdGEuc3BlY2lhbFppcENvbmZpZyA6IFtdO1xyXG52YXIgc3BlY2lhbFBob25lQ29uZmlnID0gcGFnZURhdGEuc3BlY2lhbFBob25lQ29uZmlnID8gcGFnZURhdGEuc3BlY2lhbFBob25lQ29uZmlnIDogW107XHJcbi8vZm9ybSBzb3VyY2XvvIxjaXR5IGRhdGEoZGVmYXVsdCx1c2VyLGxvY2F0aW9uKVxyXG52YXIgZm9ybV9kYXRhX3NvdXJjZSA9ICdkZWZhdWx0JztcclxudmFyIGhvdXNlTm9Db3VudHJ5SWRzID0gcGFnZURhdGEuaG91c2VOb0NvdW50cnlJZHMgPyBwYWdlRGF0YS5ob3VzZU5vQ291bnRyeUlkcyA6IFtdO1xyXG5cclxuLy/ojrflj5booajljZXkuK3nmoRET03lhYPntKDlkozlgLxcclxudmFyIGdldF9mb3JtX2pzb24gPSBmdW5jdGlvbihlbGVtX2Zvcm0pIHsgICAgXHJcbiAgICB2YXIgZm9ybV9qc29uID0ge307XHJcblxyXG4gICAgZm9ybV9qc29uWydhZGRyZXNzX2lkJ10gPSBlbGVtX2Zvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFkZHJlc3NfaWRcIl0nKTtcclxuICAgIGZvcm1fanNvblsnYWRkcmVzc19pZF92YWwnXSA9ICQudHJpbShmb3JtX2pzb25bJ2FkZHJlc3NfaWQnXS52YWwoKSk7XHJcblxyXG4gICAgZm9ybV9qc29uWydnZW5kZXInXSA9IGVsZW1fZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWRkcmVzc1tnZW5kZXJdXCJdJyk7XHJcbiAgICBmb3JtX2pzb25bJ2dlbmRlcl92YWwnXSA9ICQudHJpbShmb3JtX2pzb25bJ2dlbmRlciddLnZhbCgpKTtcclxuXHJcbiAgICBmb3JtX2pzb25bJ2ZpcnN0X25hbWUnXSA9IGVsZW1fZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWRkcmVzc1tmaXJzdF9uYW1lXVwiXScpO1xyXG4gICAgZm9ybV9qc29uWydmaXJzdF9uYW1lX3ZhbCddID0gJC50cmltKGZvcm1fanNvblsnZmlyc3RfbmFtZSddLnZhbCgpKTtcclxuXHJcbiAgICBmb3JtX2pzb25bJ2xhc3RfbmFtZSddID0gZWxlbV9mb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZGRyZXNzW2xhc3RfbmFtZV1cIl0nKTtcclxuICAgIGZvcm1fanNvblsnbGFzdF9uYW1lX3ZhbCddID0gJC50cmltKGZvcm1fanNvblsnbGFzdF9uYW1lJ10udmFsKCkpO1xyXG5cclxuICAgIGZvcm1fanNvblsnYWRkcmVzc18xJ10gPSBlbGVtX2Zvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFkZHJlc3NbYWRkcmVzc18xXVwiXScpO1xyXG4gICAgZm9ybV9qc29uWydhZGRyZXNzXzFfdmFsJ10gPSAkLnRyaW0oZm9ybV9qc29uWydhZGRyZXNzXzEnXS52YWwoKSk7XHJcblxyXG4gICAgZm9ybV9qc29uWydhZGRyZXNzXzInXSA9IGVsZW1fZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWRkcmVzc1thZGRyZXNzXzJdXCJdJyk7XHJcbiAgICBmb3JtX2pzb25bJ2FkZHJlc3NfMl92YWwnXSA9ICQudHJpbShmb3JtX2pzb25bJ2FkZHJlc3NfMiddLnZhbCgpKTtcclxuXHJcbiAgICBmb3JtX2pzb25bJ2NpdHknXSA9IGVsZW1fZm9ybS5maW5kKCdzZWxlY3RbbmFtZT1cImFkZHJlc3NbY2l0eV1cIl0nKTtcclxuICAgIGZvcm1fanNvblsnY2l0eV92YWwnXSA9IHBhcnNlSW50KGZvcm1fanNvblsnY2l0eSddLnZhbCgpKTtcclxuXHJcbiAgICBmb3JtX2pzb25bJ2NpdHlfdGV4dCddID0gZWxlbV9mb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZGRyZXNzW2NpdHlfdGV4dF1cIl0nKTtcclxuICAgIGZvcm1fanNvblsnY2l0eV90ZXh0X3ZhbCddID0gJC50cmltKGZvcm1fanNvblsnY2l0eV90ZXh0J10udmFsKCkpO1xyXG5cclxuICAgIGZvcm1fanNvblsnY291bnRyeSddID0gZWxlbV9mb3JtLmZpbmQoJ3NlbGVjdFtuYW1lPVwiYWRkcmVzc1tjb3VudHJ5XVwiXScpO1xyXG4gICAgZm9ybV9qc29uWydjb3VudHJ5X3ZhbCddID0gcGFyc2VJbnQoZm9ybV9qc29uWydjb3VudHJ5J10udmFsKCkpO1xyXG5cclxuICAgIGZvcm1fanNvblsnY291bnRyeV9zZWxlY3QnXSA9IGVsZW1fZm9ybS5maW5kKCdzZWxlY3RbbmFtZT1cImFkZHJlc3NbY291bnRyeV1cIl0gb3B0aW9uW3NlbGVjdGVkXScpO1xyXG4gICAgZm9ybV9qc29uWydjb3VudHJ5X3NlbGVjdF9uYW1lJ10gPSBmb3JtX2pzb25bJ2NvdW50cnlfc2VsZWN0J10uaHRtbCgpO1xyXG5cclxuICAgIGZvcm1fanNvblsndGF4X2NvZGVfdHlwZSddID0gZWxlbV9mb3JtLmZpbmQoJ3NlbGVjdFtuYW1lPVwiYWRkcmVzc1t0YXhfY29kZV90eXBlXVwiXScpO1xyXG4gICAgZm9ybV9qc29uWyd0YXhfY29kZV90eXBlX3ZhbCddID0gcGFyc2VJbnQoZm9ybV9qc29uWyd0YXhfY29kZV90eXBlJ10udmFsKCkpO1xyXG5cclxuICAgIGZvcm1fanNvblsndGF4X2NvZGVfdmFsdWUnXSA9IGVsZW1fZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWRkcmVzc1t0YXhfY29kZV92YWx1ZV1cIl0nKTtcclxuICAgIGZvcm1fanNvblsndGF4X2NvZGVfdmFsdWVfdmFsJ10gPSAkLnRyaW0oZm9ybV9qc29uWyd0YXhfY29kZV92YWx1ZSddLnZhbCgpKTtcclxuXHJcbiAgICBmb3JtX2pzb25bJ3Byb3ZpbmNlJ10gPSBlbGVtX2Zvcm0uZmluZCgnc2VsZWN0W25hbWU9XCJhZGRyZXNzW3Byb3ZpbmNlXVwiXScpO1xyXG4gICAgZm9ybV9qc29uWydwcm92aW5jZV92YWwnXSA9IHBhcnNlSW50KGZvcm1fanNvblsncHJvdmluY2UnXS52YWwoKSk7XHJcblxyXG4gICAgZm9ybV9qc29uWydwcm92aW5jZV90ZXh0J10gPSBlbGVtX2Zvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFkZHJlc3NbcHJvdmluY2VfdGV4dF1cIl0nKTtcclxuICAgIGZvcm1fanNvblsncHJvdmluY2VfdGV4dF92YWwnXSA9ICQudHJpbShmb3JtX2pzb25bJ3Byb3ZpbmNlX3RleHQnXS52YWwoKSk7XHJcblxyXG4gICAgZm9ybV9qc29uWyd6aXAnXSA9IGVsZW1fZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWRkcmVzc1t6aXBdXCJdJyk7XHJcbiAgICBmb3JtX2pzb25bJ3ppcF92YWwnXSA9ICQudHJpbShmb3JtX2pzb25bJ3ppcCddLnZhbCgpKTtcclxuXHJcbiAgICBmb3JtX2pzb25bJ3Bob25lJ10gPSBlbGVtX2Zvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFkZHJlc3NbcGhvbmVdXCJdJyk7XHJcbiAgICBmb3JtX2pzb25bJ3Bob25lX3ZhbCddID0gJC50cmltKGZvcm1fanNvblsncGhvbmUnXS52YWwoKSk7XHJcblxyXG4gICAgZm9ybV9qc29uWydlbWFpbCddID0gZWxlbV9mb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZGRyZXNzW2VtYWlsXVwiXScpO1xyXG4gICAgZm9ybV9qc29uWydlbWFpbF92YWwnXSA9ICQudHJpbShmb3JtX2pzb25bJ2VtYWlsJ10udmFsKCkpO1xyXG5cclxuICAgIC8vU3RhdGUvUHJvdmluY2UvUmVnaW9u5YmN6Z2i5pi+56S6KueahOWuueWZqFxyXG4gICAgZm9ybV9qc29uWydwcm92aW5jZVJlcXVpcmVkJ10gPSBlbGVtX2Zvcm0uZmluZCgnI3Byb3ZpbmNlUmVxdWlyZWQnKTtcclxuICAgIC8vQ2l0eeWJjemdouaYvuekuirnmoTlrrnlmahcclxuICAgIGZvcm1fanNvblsnY2l0eVJlcXVpcmVkJ10gPSBlbGVtX2Zvcm0uZmluZCgnI2NpdHlSZXF1aXJlZCcpO1xyXG5cclxuICAgIC8vQ1BGIG9yIENOUEogY29kZeeahOWuueWZqFxyXG4gICAgZm9ybV9qc29uWyd0YXhDb2RlJ10gPSBlbGVtX2Zvcm0uZmluZCgnI3RheENvZGUnKTtcclxuXHJcbiAgICAvL+mXqOeJjOWPt1xyXG4gICAgZm9ybV9qc29uWydob3VzZV9ub19jb250YWluZXInXSA9IGVsZW1fZm9ybS5maW5kKCcjaG91c2Vfbm8nKTtcclxuICAgIGZvcm1fanNvblsnaG91c2Vfbm8nXSA9IGVsZW1fZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWRkcmVzc1tob3VzZV9ub11cIl0nKTtcclxuICAgIGZvcm1fanNvblsnaG91c2Vfbm9fdmFsJ10gPSAkLnRyaW0oZm9ybV9qc29uWydob3VzZV9ubyddLnZhbCgpKTtcclxuXHJcbiAgICByZXR1cm4gZm9ybV9qc29uO1xyXG59O1xyXG5cclxuLy9kZWZhdWx0IHZhbGlkIGZvcm0gaXRlbXNcclxudmFyIGdldERlZmF1bHRJdGVtcyA9IGZ1bmN0aW9uKGtleSkge1xyXG4gICAgdmFyIGRlZmF1bHRJdGVtcyA9IHtcclxuICAgICAgICBcImFkZHJlc3NbZmlyc3RfbmFtZV1cIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bGxcIixcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmcucGFnZV9jaGVja291dF9maXJzdF9uYW1lX21pbmltdW0sXHJcbiAgICAgICAgICAgICAgICBlcnJFdmVudDogXCJmaXJzdF9uYW1lXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtaW5sZW5ndGhcIixcclxuICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogMixcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmcucGFnZV9jaGVja291dF9maXJzdF9uYW1lX21pbmltdW0sXHJcbiAgICAgICAgICAgICAgICBlcnJFdmVudDogXCJmaXJzdF9uYW1lXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJhZGRyZXNzW2xhc3RfbmFtZV1cIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bGxcIixcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmcucGFnZV9jaGVja291dF9sYXN0X25hbWVfbWluaW11bSxcclxuICAgICAgICAgICAgICAgIGVyckV2ZW50OiBcImxhc3RfbmFtZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWlubGVuZ3RoXCIsXHJcbiAgICAgICAgICAgICAgICBtaW5sZW5ndGg6IDIsXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nLnBhZ2VfY2hlY2tvdXRfbGFzdF9uYW1lX21pbmltdW0sXHJcbiAgICAgICAgICAgICAgICBlcnJFdmVudDogXCJsYXN0X25hbWVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImFkZHJlc3NbYWRkcmVzc18xXVwiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVsbFwiLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZy5wYWdlX2NoZWNrb3V0X3NoaXBwaW5nX2FkZHJlc3NfYXRfbGVhc3QsXHJcbiAgICAgICAgICAgICAgICBlcnJFdmVudDogXCJhZGRyZXNzXzFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1pbmxlbmd0aFwiLFxyXG4gICAgICAgICAgICAgICAgbWlubGVuZ3RoOiA1LFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZy5wYWdlX2NoZWNrb3V0X3NoaXBwaW5nX2FkZHJlc3NfYXRfbGVhc3QsXHJcbiAgICAgICAgICAgICAgICBlcnJFdmVudDogXCJhZGRyZXNzXzFcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImFkZHJlc3NbY291bnRyeV1cIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bGxcIixcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmcucGFnZV9jaGVja291dF9wbGVhc2Vfc2VsZWN0X2NvdW50cnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJhZGRyZXNzW2NpdHlfdGV4dF1cIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bGxcIixcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmcucGFnZV9jaGVja291dF95b3VyX2NpdHlfYXRfbGVhc3QsXHJcbiAgICAgICAgICAgICAgICBlcnJFdmVudDogXCJjaXR5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtaW5sZW5ndGhcIixcclxuICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogMyxcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmcucGFnZV9jaGVja291dF95b3VyX2NpdHlfYXRfbGVhc3QsXHJcbiAgICAgICAgICAgICAgICBlcnJFdmVudDogXCJjaXR5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJyZWdleHBcIixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoL14oXFxEezMsMjh9KSQvKSxcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmcucGFnZV9jaGVja291dF95b3VyX2NpdHlfZm9ybWF0LFxyXG4gICAgICAgICAgICAgICAgZXJyRXZlbnQ6IFwiY2l0eVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiYWRkcmVzc1twcm92aW5jZV1cIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bGxcIixcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmcucGFnZV9jaGVja291dF9wbGVhc2Vfc2VsZWN0X3Byb3ZpbmNlLFxyXG4gICAgICAgICAgICAgICAgZXJyRXZlbnQ6IFwic3RhdGVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImFkZHJlc3NbemlwXVwiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVsbFwiLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZy5wYWdlX2NoZWNrb3V0X3ppcF9jb2RlX2F0X2xlYXN0LFxyXG4gICAgICAgICAgICAgICAgZXJyRXZlbnQ6IFwiemlwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtaW5sZW5ndGhcIixcclxuICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogMixcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmcucGFnZV9jaGVja291dF96aXBfY29kZV9hdF9sZWFzdCxcclxuICAgICAgICAgICAgICAgIGVyckV2ZW50OiBcInppcFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiYWRkcmVzc1twaG9uZV1cIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bGxcIixcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmcucGFnZV9jaGVja291dF9waG9uZV9udW1iZXJfYXRfbGVhc3QsXHJcbiAgICAgICAgICAgICAgICBlcnJFdmVudDogXCJwaG9uZV9udW1iZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1pbmxlbmd0aFwiLFxyXG4gICAgICAgICAgICAgICAgbWlubGVuZ3RoOiA2LFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZy5wYWdlX2NoZWNrb3V0X3Bob25lX251bWJlcl9hdF9sZWFzdCxcclxuICAgICAgICAgICAgICAgIGVyckV2ZW50OiBcInBob25lX251bWJlclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiYWRkcmVzc1tlbWFpbF1cIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bGxcIixcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmcucGFnZV9sb2dpbl9lbnRlcl9lbWFpbCxcclxuICAgICAgICAgICAgICAgIGVyckV2ZW50OiBcImVtYWlsX2VtcHR5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZy5wYWdlX2xvZ2luX2NoZWNrX2VtYWlsX2Zvcm1hdCxcclxuICAgICAgICAgICAgICAgIGVyckV2ZW50OiBcImVtYWlsX2Vycm9cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImFkZHJlc3NbaG91c2Vfbm9dXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJyZWdleHBcIixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoL15cXGRbXFx3L1xcLV17MCw0fSQvLCBcImlcIiksXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nLnBhZ2VfY29tbW9uX2FkZHJlc3NfaG91c2Vfbm9fZXJyb3IsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHlwZW9mIGtleSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRlZmF1bHRJdGVtc1trZXldICE9PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRJdGVtc1trZXldIDogZGVmYXVsdEl0ZW1zXHJcbn07XHJcbnZhciBpdGVtcyA9IGdldERlZmF1bHRJdGVtcygpO1xyXG52YXIgc2V0RXJyb3IgPSBmdW5jdGlvbiAob2JqLCBlcnJNc2csIHNob3dMZXZlbCwgZXJyRXZlbnQpIHtcclxuICAgIG9iai5mb2N1cygpO1xyXG4gICAgb2JqLmFkZENsYXNzKCdmaWVsZC1lcnJvcicpO1xyXG4gICAgaWYoZXJyRXZlbnQgIT0gJycgJiYgZXJyRXZlbnQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKGV2ZW50cy5jaGVja291dEVycm9yLGVyckV2ZW50KTtcclxuICAgIH1cclxuICAgIGlmKHNob3dMZXZlbCA9PSAwKSB7XHJcbiAgICAgICAgaWYob2JqLm5leHQoJy5lcnJvci10aXAnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG9iai5uZXh0KCcuZXJyb3ItdGlwJykuaHRtbChlcnJNc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9iai5hZnRlcignPHAgY2xhc3M9XCJlcnJvci10aXBcIj4nICsgZXJyTXNnICsgJzwvcD4nKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYoc2hvd0xldmVsID09IDEpIHtcclxuICAgICAgICBvYmogPSBvYmoucGFyZW50KCk7XHJcbiAgICAgICAgaWYob2JqLmNoaWxkcmVuKCcuZXJyb3ItdGlwJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBvYmouY2hpbGRyZW4oJy5lcnJvci10aXAnKS5odG1sKGVyck1zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2JqLmFwcGVuZCgnPHAgY2xhc3M9XCJlcnJvci10aXBcIj4nICsgZXJyTXNnICsgJzwvcD4nKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYoc2hvd0xldmVsID09IDIpIHtcclxuICAgICAgICBvYmogPSBvYmoucGFyZW50KCkucGFyZW50KCk7XHJcbiAgICAgICAgaWYob2JqLmNoaWxkcmVuKCcuZXJyb3ItdGlwJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBvYmouY2hpbGRyZW4oJy5lcnJvci10aXAnKS5odG1sKGVyck1zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2JqLmFwcGVuZCgnPHAgY2xhc3M9XCJlcnJvci10aXBcIj4nICsgZXJyTXNnICsgJzwvcD4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxudmFyIGNsZWFuRXJyb3JUaXBFeHRyYSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKCQoJy5zYW1wbGUtc2FsZS1hZGRyZXNzLXRpcHMnKS5sZW5ndGggPiAwKXtcclxuICAgICAgICAkKCcuc2FtcGxlLXNhbGUtYWRkcmVzcy10aXBzJykucmVtb3ZlQ2xhc3MoJ3NhbXBsZS1zYWxlLWFkZHJlc3MtdGlwcy1leHRyYScpO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgY2xlYW5FcnJvciA9IGZ1bmN0aW9uKGVsZW0sIHNob3dMZXZlbCkge1xyXG4gICAgZWxlbS5yZW1vdmVDbGFzcygnZmllbGQtZXJyb3InKTtcclxuICAgIGlmKHNob3dMZXZlbCA9PSAwKSB7XHJcbiAgICAgICAgZWxlbS5uZXh0KCcuZXJyb3ItdGlwJykucmVtb3ZlKCk7XHJcbiAgICB9IGVsc2UgaWYoc2hvd0xldmVsID09IDEpIHtcclxuICAgICAgICBlbGVtLnBhcmVudCgpLmNoaWxkcmVuKCcuZXJyb3ItdGlwJykucmVtb3ZlKCk7XHJcbiAgICB9IGVsc2UgaWYoc2hvd0xldmVsID09IDIpIHtcclxuICAgICAgICBlbGVtLnBhcmVudCgpLnBhcmVudCgpLmNoaWxkcmVuKCcuZXJyb3ItdGlwJykucmVtb3ZlKCk7XHJcbiAgICB9IGVsc2UgaWYoc2hvd0xldmVsID09ICdhbGwnKSB7XHJcbiAgICAgICAgZWxlbS5maW5kKCcuZXJyb3ItdGlwJykucmVtb3ZlKCk7XHJcbiAgICAgICAgZWxlbS5maW5kKCcuZmllbGQtZXJyb3InKS5yZW1vdmVDbGFzcygnZmllbGQtZXJyb3InKTtcclxuICAgIH1cclxuICAgIGNsZWFuRXJyb3JUaXBFeHRyYSgpO1xyXG59O1xyXG52YXIgY2hlY2tPbmVJdGVtID0gZnVuY3Rpb24gKGVsZW0sIGlzU2hvd0Vycm9yKSB7XHJcbiAgICB2YXIgZWxlbSA9ICQoZWxlbSk7XHJcbiAgICB2YXIgaXB0X25hbWUgPSBlbGVtLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBlbGVtX2Zvcm0gPSBlbGVtLmNsb3Nlc3QoJ2Zvcm0nKTtcclxuICAgIHZhciBmb3JtX2pzb24gPSBnZXRfZm9ybV9qc29uKGVsZW1fZm9ybSk7XHJcblxyXG4gICAgY2hlY2tfc3BlY2lhbF9jb3VudHJ5X3Bob25lKGZvcm1fanNvbik7XHJcbiAgICBjaGVja19zcGVjaWFsX2NvdW50cnlfemlwKGZvcm1fanNvbik7XHJcblxyXG4gICAgaWYgKGlwdF9uYW1lID09ICdhZGRyZXNzW3RheF9jb2RlX3ZhbHVlXScpIHsgICAgICAgICAgICAgICAgIC8v6aqM6K+BIENQRiBvciBDTlBKIGNvZGVcclxuICAgICAgICB2YXIgdGF4X2NvZGVfdHlwZV92YWwgPSBmb3JtX2pzb25bJ3RheF9jb2RlX3R5cGVfdmFsJ107XHJcbiAgICAgICAgdmFyIHRheF9jb2RlX3ZhbHVlX3ZhbCA9IGZvcm1fanNvblsndGF4X2NvZGVfdmFsdWVfdmFsJ107XHJcbiAgICAgICAgaWYgKHRheF9jb2RlX3R5cGVfdmFsID09IHNwZWNpYWxDb2Rlc1swXSAmJiAodGF4X2NvZGVfdmFsdWVfdmFsLmxlbmd0aCA8IDE0KSkge1xyXG4gICAgICAgICAgICBpZiAoaXNTaG93RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGZvcm1fanNvblsndGF4X2NvZGVfdmFsdWUnXSwgX2xhbmcucGFnZV9jb21tb25fY3BmX2NvZGVfZXJyb3JfdGlwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXhfY29kZV90eXBlX3ZhbCA9PSBzcGVjaWFsQ29kZXNbMV0gJiYgKHRheF9jb2RlX3ZhbHVlX3ZhbC5sZW5ndGggPCAxOCkpIHtcclxuICAgICAgICAgICAgaWYgKGlzU2hvd0Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihmb3JtX2pzb25bJ3RheF9jb2RlX3ZhbHVlJ10sIF9sYW5nLnBhZ2VfY29tbW9uX2NucGpfY29kZV9lcnJvcl90aXAsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRheF9jb2RlX3R5cGVfdmFsID09IHNwZWNpYWxDb2Rlc1syXSAmJiAodGF4X2NvZGVfdmFsdWVfdmFsLmxlbmd0aCAhPSAxMCB8fCBpc05hTih0YXhfY29kZV92YWx1ZV92YWwpKSkge1xyXG4gICAgICAgICAgICBpZiAoaXNTaG93RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGZvcm1fanNvblsndGF4X2NvZGVfdmFsdWUnXSwgX2xhbmcucGFnZV9jaGVja291dF9uYXRpb25hbF9pZF9lcnJvcl90aXBzLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXhfY29kZV90eXBlX3ZhbCA9PSBzcGVjaWFsQ29kZXNbM10gJiYgKHRheF9jb2RlX3ZhbHVlX3ZhbC5sZW5ndGggIT0gMTAgfHwgaXNOYU4odGF4X2NvZGVfdmFsdWVfdmFsKSkpIHtcclxuICAgICAgICAgICAgaWYgKGlzU2hvd0Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihmb3JtX2pzb25bJ3RheF9jb2RlX3ZhbHVlJ10sIF9sYW5nLnBhZ2VfY2hlY2tvdXRfY29tbWVyY2lhbF9yZWdpc3RyeV9lcnJvcl90aXBzLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXhfY29kZV90eXBlX3ZhbCA9PSBzcGVjaWFsQ29kZXNbNF0gJiYgKHRheF9jb2RlX3ZhbHVlX3ZhbC5sZW5ndGggPCAxMikpIHtcclxuICAgICAgICAgICAgaWYgKGlzU2hvd0Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihmb3JtX2pzb25bJ3RheF9jb2RlX3ZhbHVlJ10sIF9sYW5nLnBhZ2VfY29tbW9uX3J1dF9jb2RlX2Vycm9yX3RpcCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNsZWFuRXJyb3IoZWxlbSwgMCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WFtuWug+i+k+WFpeahhuWSjOS4i+aLieahhlxyXG4gICAgZm9yICh2YXIga2V5IGluIGl0ZW1zKSB7XHJcbiAgICAgICAgaWYgKGlwdF9uYW1lID09IGtleSkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHt9O1xyXG4gICAgICAgICAgICBpdGVtW2lwdF9uYW1lXSA9IGl0ZW1zW2tleV07XHJcbiAgICAgICAgICAgIHZhciBpc0NoZWNrZWQgPSBlbGVtX2Zvcm0uZm9ybUNoZWNrKGl0ZW0sIHtcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvcjogZnVuY3Rpb24gKG9iaiwgZXJyTXNnLCBlcnJFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzU2hvd0Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlwdF9uYW1lID09ICdhZGRyZXNzW2ZpcnN0X25hbWVdJyB8fCBpcHRfbmFtZSA9PSAnYWRkcmVzc1tsYXN0X25hbWVdJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3Iob2JqLCBlcnJNc2csIDEsIGVyckV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKG9iaiwgZXJyTXNnLCAwLCBlcnJFdmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYoaXB0X25hbWUgPT0gJ2FkZHJlc3NbZmlyc3RfbmFtZV0nIHx8IGlwdF9uYW1lID09ICdhZGRyZXNzW2xhc3RfbmFtZV0nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYW5FcnJvcihlbGVtLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9maXJzdCBuYW1lIOWSjCBsYXN0IG5hbWUg5oC76ZW/5bqm5LiN562J6LaF6L+HMzRcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZmlyc3RfbmFtZSA9IGVsZW1fZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWRkcmVzc1tmaXJzdF9uYW1lXVwiXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXN0X25hbWUgPSBlbGVtX2Zvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFkZHJlc3NbbGFzdF9uYW1lXVwiXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoZmlyc3RfbmFtZS52YWwoKS5sZW5ndGggKyBsYXN0X25hbWUudmFsKCkubGVuZ3RoKSA+IDM0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzU2hvd0Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihmaXJzdF9uYW1lLCBfbGFuZy5wYWdlX2NoZWNrb3V0X2Z1bGxfbmFtZV9jYW5ub3RfZWN4ZWVkLCAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW5FcnJvcihmaXJzdF9uYW1lLCAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFuRXJyb3IoZWxlbSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vZGlzYWJsZSBmaWx0ZXIgc2FtcGxlc2FsZVxyXG4gICAgdmFyIGhhc1NhbXBsZVNhbGUgPSBwYWdlRGF0YS5oYXNTYW1wbGVTYWxlXHJcbiAgICBpZiAoaGFzU2FtcGxlU2FsZSA9PSAxKSB7XHJcbiAgICAgICAgdmFyIGZpbGVkX3ZhbHVlID0gZWxlbS52YWwoKTtcclxuICAgICAgICBmaWxlZF92YWx1ZSA9IGZpbGVkX3ZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdmFyIHVrX2FkZHJlc19hcnJheSA9IHBhZ2VEYXRhLnVrQWRkcmVzRmlsdGVyLnVrX2FkZHJlc19hcnJheSA/IHBhZ2VEYXRhLnVrQWRkcmVzRmlsdGVyLnVrX2FkZHJlc19hcnJheSA6IFtdXHJcbiAgICAgICAgdmFyIHVrX2FkZHJlc3NfZmlsdGVyID0gcGFnZURhdGEudWtBZGRyZXNGaWx0ZXIudWtfYWRkcmVzc19maWx0ZXIgPyBwYWdlRGF0YS51a0FkZHJlc0ZpbHRlci51a19hZGRyZXNzX2ZpbHRlciA6IFtdXHJcbiAgICAgICAgdmFyIHVrX3ppcF9maWx0ZXIgPSBwYWdlRGF0YS51a0FkZHJlc0ZpbHRlci51a196aXBfZmlsdGVyID8gcGFnZURhdGEudWtBZGRyZXNGaWx0ZXIudWtfemlwX2ZpbHRlciA6IFtdXHJcbiAgICAgICAgaWYgKCQuaW5BcnJheShpcHRfbmFtZSwgdWtfYWRkcmVzX2FycmF5KSAhPSAtMSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBtPTA7IG0gPCB1a19hZGRyZXNzX2ZpbHRlci5sZW5ndGg7IG0rKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGVkX3ZhbHVlLmluZGV4T2YodWtfYWRkcmVzc19maWx0ZXJbbV0pICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNTaG93RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZWxlbSwgX2xhbmcucGFnZV9jb21tb25fY2FuX25vdF9zaGlwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsZWFuRXJyb3IoZWxlbSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpcHRfbmFtZSA9PSAnYWRkcmVzc1t6aXBdJykge1xyXG4gICAgICAgICAgICBmaWxlZF92YWx1ZSA9IGZpbGVkX3ZhbHVlLnJlcGxhY2UoL1xccyovZywgJycpXHJcbiAgICAgICAgICAgIGZvciAodmFyIG49MDsgbiA8IHVrX3ppcF9maWx0ZXIubGVuZ3RoOyBuKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlZF92YWx1ZS5pbmRleE9mKHVrX3ppcF9maWx0ZXJbbl0pICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNTaG93RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZWxlbSwgX2xhbmcucGFnZV9jb21tb25fY2FuX25vdF9zaGlwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsZWFuRXJyb3IoZWxlbSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG52YXIgY2hlY2tfc3BlY2lhbF9jb3VudHJ5X3Bob25lID0gZnVuY3Rpb24gKGZvcm1fanNvbikge1xyXG4gICAgdmFyIGNvdW50cnlJZCA9IGZvcm1fanNvblsnY291bnRyeV92YWwnXTtcclxuICAgIHZhciBjb25maWcgPSBmYWxzZTtcclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzcGVjaWFsUGhvbmVDb25maWcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihzcGVjaWFsUGhvbmVDb25maWdbaV0uY291bnRyeUlkcy5pbmRleE9mKGNvdW50cnlJZCkgPiAtMSkge1xyXG4gICAgICAgICAgIGNvbmZpZyA9IHNwZWNpYWxQaG9uZUNvbmZpZ1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihjb25maWcgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgaXRlbXNbXCJhZGRyZXNzW3Bob25lXVwiXSA9ICBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVsbFwiLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZy5wYWdlX2NoZWNrb3V0X3Bob25lX251bWJlcl9hdF9sZWFzdCxcclxuICAgICAgICAgICAgICAgIGVyckV2ZW50OiBcInBob25lX251bWJlclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwicmVnZXhwXCIsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKGNvbmZpZy5wYXR0ZXJuKSxcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmdbY29uZmlnLmVyclRpcF0sXHJcbiAgICAgICAgICAgICAgICBlcnJFdmVudDogXCJwaG9uZV9udW1iZXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpdGVtc1tcImFkZHJlc3NbcGhvbmVdXCJdID0gZ2V0RGVmYXVsdEl0ZW1zKFwiYWRkcmVzc1twaG9uZV1cIilcclxuICAgIH1cclxufVxyXG5cclxudmFyIGNoZWNrX3NwZWNpYWxfY291bnRyeV96aXAgPSBmdW5jdGlvbiAoZm9ybV9qc29uKSB7XHJcbiAgICB2YXIgY291bnRyeUlkID0gZm9ybV9qc29uWydjb3VudHJ5X3ZhbCddO1xyXG4gICAgdmFyIGNvbmZpZyA9IGZhbHNlO1xyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHNwZWNpYWxaaXBDb25maWcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihzcGVjaWFsWmlwQ29uZmlnW2ldLmNvdW50cnlJZHMuaW5kZXhPZihjb3VudHJ5SWQpID4gLTEpIHtcclxuICAgICAgICAgICBjb25maWcgPSBzcGVjaWFsWmlwQ29uZmlnW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKGNvbmZpZyAhPT0gZmFsc2UpIHtcclxuICAgICAgICBpdGVtc1tcImFkZHJlc3NbemlwXVwiXSA9ICBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwicmVnZXhwXCIsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKGNvbmZpZy5wYXR0ZXJuKSxcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmdbY29uZmlnLmVyclRpcF0sXHJcbiAgICAgICAgICAgICAgICBlcnJFdmVudDogXCJ6aXBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpdGVtc1tcImFkZHJlc3NbemlwXVwiXSA9IGdldERlZmF1bHRJdGVtcyhcImFkZHJlc3NbemlwXVwiKVxyXG4gICAgfVxyXG59XHJcblxyXG52YXIgY291bnRyeV9lcnJvcl90aXBzX2V4dHJhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYoJCgnLnNhbXBsZS1zYWxlLWFkZHJlc3MtdGlwcycpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICQoJy5zYW1wbGUtc2FsZS1hZGRyZXNzLXRpcHMnKS5hZGRDbGFzcygnc2FtcGxlLXNhbGUtYWRkcmVzcy10aXBzLWV4dHJhJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBjaGVja19hZGRyX2Zvcm0gPSBmdW5jdGlvbihlbGVtX2Zvcm0pIHtcclxuICAgIGlmKGVsZW1fZm9ybS5sZW5ndGggPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFyIGZvcm1fanNvbiA9IGdldF9mb3JtX2pzb24oZWxlbV9mb3JtKTtcclxuXHJcbiAgICBpZihmb3JtX2pzb25bJ2VtYWlsJ10uaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICBpZighIGNoZWNrT25lSXRlbShmb3JtX2pzb25bJ2VtYWlsJ10sIHRydWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZighIGNoZWNrT25lSXRlbShmb3JtX2pzb25bJ3Bob25lJ10sIHRydWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYoISBjaGVja09uZUl0ZW0oZm9ybV9qc29uWydmaXJzdF9uYW1lJ10sIHRydWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYoISBjaGVja09uZUl0ZW0oZm9ybV9qc29uWydsYXN0X25hbWUnXSwgdHJ1ZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZm9ybV9qc29uWydob3VzZV9ubyddLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgaWYoISBjaGVja09uZUl0ZW0oZm9ybV9qc29uWydob3VzZV9ubyddLCB0cnVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoISBjaGVja09uZUl0ZW0oZm9ybV9qc29uWydhZGRyZXNzXzEnXSwgdHJ1ZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZighIGNoZWNrT25lSXRlbShmb3JtX2pzb25bJ2FkZHJlc3NfMiddLCB0cnVlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmKCEgY2hlY2tPbmVJdGVtKGZvcm1fanNvblsncHJvdmluY2VfdGV4dCddLCB0cnVlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmKCEgY2hlY2tPbmVJdGVtKGZvcm1fanNvblsnY2l0eV90ZXh0J10sIHRydWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYoISBjaGVja09uZUl0ZW0oZm9ybV9qc29uWydjb3VudHJ5J10sIHRydWUpKSB7XHJcbiAgICAgICAgY291bnRyeV9lcnJvcl90aXBzX2V4dHJhKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6YCJ5oup5be06KW/77yIY291bnRyeV9pZOS4ujM5NjLvvInvvIzpnIDopoHpqozor4FDUEYgb3IgQ05QSiBjb2RlXHJcbiAgICAvLyBTYXVkaSBBcmFiaWHvvIjpmL/mi4nkvK/vvIxjb3VudHJ5X2lk5Li6NDEzMu+8ieaXtiwg6aqM6K+BSUQgb3IgQ1IgY29kZVxyXG4gICAgaWYgKHNwZWNpYWxDb3VudHJ5SWRzLmluZGV4T2YoZm9ybV9qc29uWydjb3VudHJ5X3ZhbCddKSAhPT0gLTEpIHtcclxuICAgICAgICBpZighIGNoZWNrT25lSXRlbShmb3JtX2pzb25bJ3RheF9jb2RlX3ZhbHVlJ10sIHRydWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZvcm1fanNvblsncHJvdmluY2UnXS5pcygnOnZpc2libGUnKSkge1xyXG4gICAgICAgIGlmKCEgY2hlY2tPbmVJdGVtKGZvcm1fanNvblsncHJvdmluY2UnXSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZm9ybV9qc29uWydjaXR5J10uaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICBpZighIGNoZWNrT25lSXRlbShmb3JtX2pzb25bJ2NpdHknXSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZighIGNoZWNrT25lSXRlbShmb3JtX2pzb25bJ3ppcCddLCB0cnVlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbi8vYmluZCBmb3JtIGV2ZW50XHJcbnZhciBoYW5kbGVfYWRkcl9mb3JtID0gZnVuY3Rpb24oZWxlbV9mb3JtKSB7XHJcbiAgICBpZihlbGVtX2Zvcm0ubGVuZ3RoIDwgMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHZhciBmb3JtX2pzb24gPSBnZXRfZm9ybV9qc29uKGVsZW1fZm9ybSk7XHJcbiAgIFxyXG4gICAgdmFyIHNldFByb3ZpbmNlID0gZnVuY3Rpb24gKGNpZCkgeyAgICAgICAgXHJcblxyXG4gICAgICAgIHNldFByb3ZpbmNlU2VsZWN0KGNpZCk7XHJcbiAgICAgICAgc2V0UGhvbmVQcmVmaXgoY2lkKTtcclxuICAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHNldFByb3ZpbmNlU2VsZWN0ID0gZnVuY3Rpb24gKGNpZCkge1xyXG5cclxuICAgICAgICB2YXIgcmVnaW9uX2lzX3NlbGVjdCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBhbGxSZWdpb25fanNvbiA9IHBhZ2VEYXRhLmFsbFJlZ2lvbl9qc29uOyAgICAgICAgXHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgaW4gYWxsUmVnaW9uX2pzb24pIHtcclxuICAgICAgICAgICAgaWYocGFyc2VJbnQoaSkgPT0gcGFyc2VJbnQoY2lkKSkge1xyXG4gICAgICAgICAgICAgICAgcmVnaW9uX2lzX3NlbGVjdCA9IHRydWU7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3Byb3ZpbmNlJ10uZW1wdHkoKS5zaG93KCkuYXBwZW5kKCc8b3B0aW9uIHZhbHVlPVwiXCI+JyArIF9sYW5nLnBhZ2VfY29tbW9uX2Zvcm1fc2VsZWN0ICsgJzwvb3B0aW9uPicpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBhbGxSZWdpb25fanNvbltpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1fanNvblsncHJvdmluY2UnXS5hcHBlbmQoJzxvcHRpb24gdmFsdWU9XCInICsgaiArICdcIj4nICsgYWxsUmVnaW9uX2pzb25baV1bal0gKyAnPC9vcHRpb24+Jyk7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vbG9jYXRpb24gc291cmNlIHJlZ2lvbiBzZWxlY3RcclxuICAgICAgICBpZihyZWdpb25faXNfc2VsZWN0ICYmIGZvcm1fZGF0YV9zb3VyY2UgPT0gJ2xvY2F0aW9uJykge1xyXG4gICAgICAgICAgICBzZXRQcm92aW5jZVRleHRIaWRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdXNlciBzb3VyY2UgcmVnaW9uIHNlbGVjdFxyXG4gICAgICAgIGlmKGZvcm1fanNvblsncHJvdmluY2VfdGV4dF92YWwnXSAhPSBcIlwiICYmIGZvcm1fZGF0YV9zb3VyY2UgPT0gJ3VzZXInKSB7XHJcbiAgICAgICAgICAgIHNldFByb3ZpbmNlU2VsZWN0SGlkZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighcmVnaW9uX2lzX3NlbGVjdCkge1xyXG4gICAgICAgICAgICBzZXRQcm92aW5jZVNlbGVjdEhpZGUoKTsgICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRQcm92aW5jZVRleHRIaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdmFyIHNldFByb3ZpbmNlU2VsZWN0SGlkZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvcm1fanNvblsncHJvdmluY2VSZXF1aXJlZCddLmh0bWwoJyZuYnNwOycpO1xyXG4gICAgICAgIGZvcm1fanNvblsncHJvdmluY2VfdGV4dCddLnNob3coKTtcclxuICAgICAgICBmb3JtX2pzb25bJ3Byb3ZpbmNlJ10uaGlkZSgpLmVtcHR5KCk7XHJcbiAgICAgICAgY2xlYW5FcnJvcihmb3JtX2pzb25bJ3Byb3ZpbmNlJ10sIDApO1xyXG4gICAgICAgIG5leHRfbGFiZWxfYWRkX2NsYXNzKGZvcm1fanNvblsncHJvdmluY2VfdGV4dCddLCdpbnB1dCcpO1xyXG4gICAgICAgICQoJyNfcHJvdmluY2VkX2ljb24nKS5oaWRlKCk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB2YXIgc2V0UHJvdmluY2VUZXh0SGlkZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvcm1fanNvblsncHJvdmluY2VSZXF1aXJlZCddLmh0bWwoJyonKTtcclxuICAgICAgICBmb3JtX2pzb25bJ3Byb3ZpbmNlX3RleHQnXS5oaWRlKCk7XHJcbiAgICAgICAgbmV4dF9sYWJlbF9hZGRfY2xhc3MoZm9ybV9qc29uWydwcm92aW5jZSddLCdzZWxlY3QnKTtcclxuICAgICAgICAkKCcjX3Byb3ZpbmNlZF9pY29uJykuc2hvdygpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdmFyIHNldFBob25lUHJlZml4ID0gZnVuY3Rpb24oY2lkKSB7XHJcbiAgICAgICAgdmFyIGNvdW50cnlfZGV0YWlsX2pzb24gPSBwYWdlRGF0YS5jb3VudHJ5RGV0YWlsXHJcbiAgICAgICAgdmFyIHBob25lX2lzX3NlbGVjdCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gY291bnRyeV9kZXRhaWxfanNvbil7XHJcbiAgICAgICAgICAgIGlmKHBhcnNlSW50KGkpID09IHBhcnNlSW50KGNpZCkgJiYgdHlwZW9mIGNvdW50cnlfZGV0YWlsX2pzb25baV0ucGhvbmVfY29kZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBjb3VudHJ5X2RldGFpbF9qc29uW2ldLnJlZ2lvbl9jb2RlICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgcGhvbmVfaXNfc2VsZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZhciBwaG9uZV9wcmVmaXhfdGV4dCA9IGNvdW50cnlfZGV0YWlsX2pzb25baV0ucmVnaW9uX2NvZGU7XHJcbiAgICAgICAgICAgICAgICBpZihjb3VudHJ5X2RldGFpbF9qc29uW2ldLnBob25lX2NvZGUgID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVfcHJlZml4X3RleHQgKz0gJyZuYnNwOyArICZuYnNwOycgKyBjb3VudHJ5X2RldGFpbF9qc29uW2ldLnBob25lX2NvZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkKCcjcGhvbmVfcHJlZml4JykuaHRtbChwaG9uZV9wcmVmaXhfdGV4dCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighcGhvbmVfaXNfc2VsZWN0KXtcclxuICAgICAgICAgICAgJCgnI3Bob25lX3ByZWZpeCcpLmh0bWwoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHZhciBzZXRDaXR5ID0gZnVuY3Rpb24gKHBpZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcblxyXG4gICAgZWxlbV9mb3JtLmZpbmQoJ2lucHV0JykuZm9jdXMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtZSA9ICQodGhpcyk7XHJcbiAgICAgICAgbmV4dF9sYWJlbF9hZGRfY2xhc3MobWUsJ2lucHV0JylcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBlbGVtX2Zvcm0uZmluZCgnaW5wdXQnKS5ibHVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWUgPSAkKHRoaXMpO1xyXG4gICAgICAgIG5leHRfbGFiZWxfcmVtb3ZlX2NsYXNzKG1lLCdpbnB1dCcpXHJcbiAgICAgICAgaWYgKG1lLmF0dHIoJ25hbWUnKSA9PSAnYWRkcmVzc1t0YXhfY29kZV92YWx1ZV0nKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXhfY29kZV92YWx1ZV92YWwgPSBtZS52YWwoKVxyXG4gICAgICAgICAgICAgICAgLG1heExlbmd0aDtcclxuICAgICAgICAgICAgc3dpdGNoKGZvcm1fanNvblsndGF4X2NvZGVfdHlwZSddLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoID0gMTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoID0gMTg7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoID0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoKHRheF9jb2RlX3ZhbHVlX3ZhbC5sZW5ndGggPT0gbWF4TGVuZ3RoKSAmJiAoISBpc05hTih0YXhfY29kZV92YWx1ZV92YWwpKSkge1xyXG4gICAgICAgICAgICAgICAgY2xlYW5FcnJvcihtZSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGVsZW1fZm9ybS5maW5kKCdzZWxlY3QnKS5mb2N1cyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1lID0gJCh0aGlzKTtcclxuICAgICAgICBuZXh0X2xhYmVsX2FkZF9jbGFzcyhtZSwnc2VsZWN0JylcclxuICAgIH0pO1xyXG4gICAgZWxlbV9mb3JtLmZpbmQoJ3NlbGVjdCcpLmJsdXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtZSA9ICQodGhpcyk7XHJcbiAgICAgICAgbmV4dF9sYWJlbF9yZW1vdmVfY2xhc3MobWUsJ3NlbGVjdCcpXHJcbiAgICB9KTtcclxuICAgIGVsZW1fZm9ybS5maW5kKCdzZWxlY3QnKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtZSA9ICQodGhpcyk7XHJcbiAgICAgICAgbmV4dF9sYWJlbF9yZW1vdmVfY2xhc3MobWUsJ3NlbGVjdCcpXHJcbiAgICAgICAgaWYgKG1lLmF0dHIoJ25hbWUnKSA9PSAnYWRkcmVzc1tjb3VudHJ5XScpIHtcclxuICAgICAgICAgICAgdmFyIGNpZCA9ICQodGhpcykudmFsKCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghKGNpZCA+IDApKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v6YCJ5oupQnJhemls77yI5be06KW/77yMY291bnRyeV9pZOS4ujM5NjLvvInml7bvvIzlh7rnjrBDUEYgb3IgQ05QSiBjb2RlXHJcbiAgICAgICAgICAgIGlmIChzcGVjaWFsQ291bnRyeUlkcy5pbmRleE9mKE51bWJlcihjaWQpKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYoY2lkID09IHNwZWNpYWxDb3VudHJ5SWRzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhDb2RlJ10uZmluZCgnLnRheC1sYWJsZScpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3RheENvZGUnXS5maW5kKCdwJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1fanNvblsndGF4Q29kZSddLmZpbmQoJ3NlbGVjdCcpLnZhbCgxKS5jaGFuZ2UoKS5maW5kKCdvcHRpb24nKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhDb2RlJ10uZmluZCgnLnRheF9jb2RlX29wX2NwZl9jbnBqJykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNpZCA9PSBzcGVjaWFsQ291bnRyeUlkc1sxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1fanNvblsndGF4Q29kZSddLmZpbmQoJy50YXgtbGFibGUnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhDb2RlJ10uZmluZCgncCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3RheENvZGUnXS5maW5kKCdzZWxlY3QnKS52YWwoMykuY2hhbmdlKCkuZmluZCgnb3B0aW9uJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1fanNvblsndGF4Q29kZSddLmZpbmQoJy50YXhfY29kZV9vcF9uaWRfY2lkJykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaWQgPT0gc3BlY2lhbENvdW50cnlJZHNbMl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3RheENvZGUnXS5maW5kKCcudGF4LWxhYmxlJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1fanNvblsndGF4Q29kZSddLmZpbmQoJ3AnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhDb2RlJ10uZmluZCgnc2VsZWN0JykudmFsKDcpLmNoYW5nZSgpLmZpbmQoJ29wdGlvbicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3RheENvZGUnXS5maW5kKCcudGF4X2NvZGVfb3BfcnV0Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhDb2RlJ10uc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhDb2RlJ10uaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaG91c2VOb0NvdW50cnlJZHMuaW5kZXhPZihOdW1iZXIoY2lkKSkgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1fanNvblsnaG91c2Vfbm9fY29udGFpbmVyJ10uc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9ybV9qc29uWydob3VzZV9ub19jb250YWluZXInXS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFByb3ZpbmNlKGNpZCk7XHJcbiAgICAgICAgICAgIHNldENpdHkoLTEpO1xyXG4gICAgICAgIH0gZWxzZSBpZihtZS5hdHRyKCduYW1lJykgPT0gJ2FkZHJlc3NbdGF4X2NvZGVfdHlwZV0nKSB7XHJcbiAgICAgICAgICAgIGlmIChtZS52YWwoKSA9PSBzcGVjaWFsQ29kZXNbMF0pIHsgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQ1BGIG9yIENOUEogY29kZe+8jOS4pOenjWNvZGXnmoTmnInmlYjplb/luqbliIbliKvmmK8xNOWSjDE4XHJcbiAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3RheF9jb2RlX3ZhbHVlJ10uYXR0cignbWF4bGVuZ3RoJywgMTQpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWUudmFsKCkgPT0gc3BlY2lhbENvZGVzWzFdKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3RheF9jb2RlX3ZhbHVlJ10uYXR0cignbWF4bGVuZ3RoJywgMTgpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWUudmFsKCkgPT0gc3BlY2lhbENvZGVzWzJdIHx8IG1lLnZhbCgpID09IHNwZWNpYWxDb2Rlc1szXSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhfY29kZV92YWx1ZSddLmF0dHIoJ21heGxlbmd0aCcsIDEwKS52YWwoJycpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lLnZhbCgpID09IHNwZWNpYWxDb2Rlc1s0XSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhfY29kZV92YWx1ZSddLmF0dHIoJ21heGxlbmd0aCcsIDEyKS52YWwoJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmKG1lLmF0dHIoJ25hbWUnKSA9PSAnYWRkcmVzc1twcm92aW5jZV0nKSB7XHJcbiAgICAgICAgICAgIC8vZGVmYXVsdCB2YWx1ZTotMVxyXG4gICAgICAgICAgICBzZXRDaXR5KC0xKTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZm9ybV9qc29uWydjb3VudHJ5J10udmFsKHBhZ2VEYXRhLmRlZmF1bHRfY291bnRyeV9pZCkuY2hhbmdlKCk7XHJcblxyXG4gICAgZm9ybV9qc29uWydlbWFpbCddLmJsdXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChjaGVja09uZUl0ZW0oZm9ybV9qc29uWydlbWFpbCddLCBmYWxzZSkpIHtcclxuICAgICAgICAgICAgY2hlY2tFbWFpbFJlZ2lzdGVyZWQoJC50cmltKGZvcm1fanNvblsnZW1haWwnXS52YWwoKSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNlbWFpbFJlZ2lzdGVyVGlwJykuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm1fanNvblsnZW1haWwnXS5mb2N1cyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnI2VtYWlsUmVnaXN0ZXJUaXAnKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuXHJcbn07XHJcbnZhciBuZXh0X2xhYmVsX2FkZF9jbGFzcyA9IGZ1bmN0aW9uIChtZSx0eXBlKSB7XHJcbiAgICBpZighbWUucGFyZW50KCkuZmluZCgnLmFkZHJlc3MtbGFiZWwgbGFiZWwnKS5oYXNDbGFzcygndG9wLXNob3cnKSl7XHJcbiAgICAgICAgbWUucGFyZW50KCkuZmluZCgnLmFkZHJlc3MtbGFiZWwgbGFiZWwnKS5hZGRDbGFzcygndG9wLXNob3cnKVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG5leHRfbGFiZWxfcmVtb3ZlX2NsYXNzID0gZnVuY3Rpb24gKG1lLHR5cGUpIHtcclxuICAgIGlmKHR5cGUgPT0gJ3NlbGVjdCcgJiYgbWUuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCkgPT0gdW5kZWZpbmVkICYmIG1lLnBhcmVudCgpLmZpbmQoJy5hZGRyZXNzLWxhYmVsIGxhYmVsJykuaGFzQ2xhc3MoJ3RvcC1zaG93Jykpe1xyXG4gICAgICAgIG1lLnBhcmVudCgpLmZpbmQoJy5hZGRyZXNzLWxhYmVsIGxhYmVsJykucmVtb3ZlQ2xhc3MoJ3RvcC1zaG93JylcclxuICAgIH1lbHNlIGlmKHR5cGUgPT0gJ2lucHV0JyAmJiBtZS52YWwoKSA9PSAnJyAmJiBtZS5wYXJlbnQoKS5maW5kKCcuYWRkcmVzcy1sYWJlbCBsYWJlbCcpLmhhc0NsYXNzKCd0b3Atc2hvdycpKVxyXG4gICAge1xyXG4gICAgICAgIG1lLnBhcmVudCgpLmZpbmQoJy5hZGRyZXNzLWxhYmVsIGxhYmVsJykucmVtb3ZlQ2xhc3MoJ3RvcC1zaG93JylcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmb3JtX2ZpZWxkX3RvcF9zaG93ID0gZnVuY3Rpb24gKGVsZW1fZm9ybSkge1xyXG4gICAgdmFyIGZvcm1fanNvbiA9IGdldF9mb3JtX2pzb24oZWxlbV9mb3JtKTtcclxuICAgIHZhciBmb3JtX3RvcF9zaG93ID0gWydmaXJzdF9uYW1lJywnbGFzdF9uYW1lJywnYWRkcmVzc18xJywnYWRkcmVzc18yJywnY2l0eV90ZXh0JywnemlwJywncGhvbmUnLCdlbWFpbCcsJ3Byb3ZpbmNlX3RleHQnLCdob3VzZV9ubyddO1xyXG5cclxuICAgIGZvcih2YXIgaSBpbiBmb3JtX3RvcF9zaG93KXtcclxuICAgICAgICB2YXIgZmllbGRfdmFsID0gZm9ybV90b3Bfc2hvd1tpXSArICdfdmFsJ1xyXG4gICAgICAgIGlmKGZvcm1fanNvbltmaWVsZF92YWxdICE9ICcnKXtcclxuICAgICAgICAgICAgbmV4dF9sYWJlbF9hZGRfY2xhc3MoZm9ybV9qc29uW2Zvcm1fdG9wX3Nob3dbaV1dLCdpbnB1dCcpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBuZXh0X2xhYmVsX3JlbW92ZV9jbGFzcyhmb3JtX2pzb25bZm9ybV90b3Bfc2hvd1tpXV0sJ2lucHV0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmV4dF9sYWJlbF9hZGRfY2xhc3MoZm9ybV9qc29uWydjb3VudHJ5J10sJ3NlbGVjdCcpO1xyXG4gICAgbmV4dF9sYWJlbF9hZGRfY2xhc3MoZm9ybV9qc29uWydwcm92aW5jZSddLCdzZWxlY3QnKTtcclxuICAgIG5leHRfbGFiZWxfYWRkX2NsYXNzKGZvcm1fanNvblsnY2l0eSddLCdzZWxlY3QnKTtcclxufVxyXG5cclxuLy9pbml0IGZvcm1cclxudmFyIGluaXRfYWRkcl9mb3JtID0gZnVuY3Rpb24gKGVsZW1fZm9ybSwgc2V0dGluZykge1xyXG4gICAgdmFyIGZvcm1fanNvbiA9IGdldF9mb3JtX2pzb24oZWxlbV9mb3JtKTtcclxuICAgIGlmIChzZXR0aW5nKSB7XHJcblxyXG4gICAgICAgIGlmKHNldHRpbmcuZm9ybV9kYXRhX3NvdXJjZSkge1xyXG4gICAgICAgICAgICBmb3JtX2RhdGFfc291cmNlID0gc2V0dGluZy5mb3JtX2RhdGFfc291cmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3JtX2pzb25bJ2FkZHJlc3NfaWQnXS52YWwoc2V0dGluZy5hZGRyZXNzX2lkKTtcclxuICAgICAgICBmb3JtX2pzb25bJ2dlbmRlciddLnZhbChzZXR0aW5nLmdlbmRlcik7XHJcbiAgICAgICAgZm9ybV9qc29uWydmaXJzdF9uYW1lJ10udmFsKHNldHRpbmcuZmlyc3RfbmFtZSk7XHJcbiAgICAgICAgZm9ybV9qc29uWydsYXN0X25hbWUnXS52YWwoc2V0dGluZy5sYXN0X25hbWUpO1xyXG4gICAgICAgIGZvcm1fanNvblsnYWRkcmVzc18xJ10udmFsKHNldHRpbmcuYWRkcmVzcyk7XHJcbiAgICAgICAgZm9ybV9qc29uWydhZGRyZXNzXzInXS52YWwoc2V0dGluZy5zaWduX2J1aWxkaW5nKTtcclxuXHJcbiAgICAgICAgZm9ybV9qc29uWydjb3VudHJ5J10udmFsKHNldHRpbmcuY291bnRyeSkuY2hhbmdlKCk7XHJcbiAgICAgICAgZm9ybV9qc29uWydwcm92aW5jZSddLnZhbChzZXR0aW5nLnByb3ZpbmNlKS5jaGFuZ2UoKTtcclxuICAgICAgICBmb3JtX2pzb25bJ3Byb3ZpbmNlX3RleHQnXS52YWwoc2V0dGluZy5wcm92aW5jZV90ZXh0KTtcclxuXHJcbiAgICAgICAgZm9ybV9qc29uWydjaXR5J10udmFsKHNldHRpbmcuY2l0eSk7XHJcbiAgICAgICAgZm9ybV9qc29uWydjaXR5X3RleHQnXS52YWwoc2V0dGluZy5jaXR5X3RleHQpO1xyXG5cclxuICAgICAgICBmb3JtX2pzb25bJ2VtYWlsJ10udmFsKHNldHRpbmcuZW1haWwpO1xyXG4gICAgICAgIGZvcm1fanNvblsnaG91c2Vfbm8nXS52YWwoc2V0dGluZy5ob3VzZV9ubyk7XHJcblxyXG4gICAgICAgIHZhciB0YXhfY29kZV90eXBlID0gc3BlY2lhbENvZGVzLmluZGV4T2YoTnVtYmVyKHNldHRpbmcudGF4X2NvZGVfdHlwZSkpXHJcbiAgICAgICAgICAgICxtYXhfbGVuZ3RoO1xyXG4gICAgICAgIGlmKHRheF9jb2RlX3R5cGUgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGZvcm1fanNvblsndGF4X2NvZGVfdHlwZSddLnZhbChzZXR0aW5nLnRheF9jb2RlX3R5cGUpLmNoYW5nZSgpO1xyXG4gICAgICAgICAgICBzd2l0Y2goTnVtYmVyKHNldHRpbmcudGF4X2NvZGVfdHlwZSkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBtYXhfbGVuZ3RoID0gMTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4X2xlbmd0aCA9IDE4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIG1heF9sZW5ndGggPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3JtX2pzb25bJ3RheF9jb2RlX3ZhbHVlJ10uYXR0cignbWF4bGVuZ3RoJywgbWF4X2xlbmd0aCkudmFsKHNldHRpbmcudGF4X2NvZGVfdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybV9qc29uWyd6aXAnXS52YWwoc2V0dGluZy56aXBjb2RlKTtcclxuICAgICAgICBmb3JtX2pzb25bJ3Bob25lJ10udmFsKHNldHRpbmcudGVsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbV9mb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBzZWxlY3QnKS52YWwoJycpO1xyXG4gICAgICAgIGZvcm1fanNvblsnYWRkcmVzc19pZCddLnZhbCgnMCcpO1xyXG4gICAgICAgIGZvcm1fanNvblsnY291bnRyeSddLnZhbChwYWdlRGF0YS5kZWZhdWx0X2NvdW50cnlfaWQpLmNoYW5nZSgpO1xyXG4gICAgICAgIGZvcm1fanNvblsndGF4X2NvZGVfdHlwZSddLnZhbCgnMScpLmNoYW5nZSgpO1xyXG4gICAgfVxyXG4gICAgZm9ybV9maWVsZF90b3Bfc2hvdyhlbGVtX2Zvcm0pXHJcbn07XHJcblxyXG52YXIgY2hlY2tFbWFpbFJlZ2lzdGVyZWQgPSBmdW5jdGlvbiAoZW1haWwpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgJ3R5cGUnOiAnUE9TVCcsXHJcbiAgICAgICAgJ2FzeW5jJzogZmFsc2UsXHJcbiAgICAgICAgJ3VybCc6IHdlYkRhdGEuV0VCX1JPT1QgKyAnYWpheC5waHAnLFxyXG4gICAgICAgICdkYXRhJzogJ2FjdD1jaGVja0VtYWlsUmVnaXN0ZXJlZCZlbWFpbD0nICsgZW1haWwsXHJcbiAgICAgICAgJ2NhY2hlJzogdHJ1ZSxcclxuICAgICAgICAnZGF0YVR5cGUnOiAnanNvbicsXHJcbiAgICAgICAgJ3N1Y2Nlc3MnOiBmdW5jdGlvbihyKSB7XHJcbiAgICAgICAgICAgIGlmIChyLmVycm9yID09IDEpIHtcclxuICAgICAgICAgICAgICAgICQoJyNlbWFpbFJlZ2lzdGVyVGlwJykuaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnI2VtYWlsUmVnaXN0ZXJUaXAnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBcImdldF9mb3JtX2pzb25cIjogZ2V0X2Zvcm1fanNvbixcclxuICAgIFwiY2hlY2tfYWRkcl9mb3JtXCI6IGNoZWNrX2FkZHJfZm9ybSxcclxuICAgIFwiaGFuZGxlX2FkZHJfZm9ybVwiOiBoYW5kbGVfYWRkcl9mb3JtLFxyXG4gICAgXCJpbml0X2FkZHJfZm9ybVwiOiBpbml0X2FkZHJfZm9ybSxcclxuICAgIFwiZm9ybV9maWVsZF90b3Bfc2hvd1wiOiBmb3JtX2ZpZWxkX3RvcF9zaG93LFxyXG4gICAgXCJjaGVja09uZUl0ZW1cIiA6IGNoZWNrT25lSXRlbSxcclxuICAgIFwiY2xlYW5FcnJvclwiIDogY2xlYW5FcnJvclxyXG59O1xyXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4vL2RlZmluZShmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgbW9kdWxlKSB7XHJcblx0dmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcblx0XHJcblx0JC5mbi5mb3JtQ2hlY2sgPSBmdW5jdGlvbiAoaXRlbXMsIHBhcmFtcykge1xyXG5cdFx0aWYgKCFwYXJhbXMpXHJcblx0XHRcdHBhcmFtcyA9IHt9O1xyXG5cdFx0cGFyYW1zLnJ1bGVzID0gJC5leHRlbmQoe1xyXG5cdFx0XHRcdCdudWxsJyA6IGZ1bmN0aW9uIChvYmosIGNoZWNrcykge1xyXG5cdFx0XHRcdFx0cmV0dXJuICQudHJpbSgkKG9iaikudmFsKCkpLmxlbmd0aCA+IDBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdtYXhsZW5ndGgnIDogZnVuY3Rpb24gKG9iaiwgY2hlY2tzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJC50cmltKCQob2JqKS52YWwoKSkubGVuZ3RoIDw9IGNoZWNrcy5tYXhsZW5ndGhcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdtaW5sZW5ndGgnIDogZnVuY3Rpb24gKG9iaiwgY2hlY2tzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJC50cmltKCQob2JqKS52YWwoKSkubGVuZ3RoID49IGNoZWNrcy5taW5sZW5ndGhcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdkaWdpdE1pbmxlbmd0aCcgOiBmdW5jdGlvbiAob2JqLCBjaGVja3MpIHtcclxuXHRcdFx0XHRcdHJldHVybiAkLnRyaW0oJChvYmopLnZhbCgpLnJlcGxhY2UoL1teMC05XS9nLCAnJykpLmxlbmd0aCA+PSBjaGVja3MubWlubGVuZ3RoXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnZW1haWwnIDogZnVuY3Rpb24gKG9iaiwgY2hlY2tzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gLyhcXCx8XikoW1xcdysuX10rQFxcdytcXC4oXFx3K1xcLil7MCwzfVxcd3syLDR9KS8udGVzdCgkKG9iaikudmFsKCkucmVwbGFjZSgvLXxcXC8vZywgJycpKVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J2NoZWNrZWQnIDogZnVuY3Rpb24gKG9iaiwgY2hlY2tzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gb2JqLmNoZWNrZWRcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdwaG9uZScgOiBmdW5jdGlvbiAob2JqLCBjaGVja3MpIHtcclxuXHRcdFx0XHRcdHJldHVybiAvXltcXGQtXFxzXXsxLDIwfSQvLnRlc3QoJChvYmopLnZhbCgpKSAmJiAkLnRyaW0oJChvYmopLnZhbCgpKS5yZXBsYWNlKC9bXFxzXSsvZywgJyAnKS5sZW5ndGggPD0gY2hlY2tzLm1heGxlbmd0aFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J251bWJlcicgOiBmdW5jdGlvbiAob2JqLCBjaGVja3MpIHtcclxuXHRcdFx0XHRcdHJldHVybiAvXlswLTldKyQvLnRlc3QoJC50cmltKCQob2JqKS52YWwoKSkpXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnbWluJyA6IGZ1bmN0aW9uIChvYmosIGNoZWNrcykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KCQob2JqKS52YWwoKSkgPj0gY2hlY2tzLm1pblxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCJyZWdleHBcIiA6IGZ1bmN0aW9uIChvYmosIGNoZWNrcykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNoZWNrcy5wYXR0ZXJuLnRlc3QoJC50cmltKCQob2JqKS52YWwoKSkpXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnc2VsZWN0JyA6IGZ1bmN0aW9uIChvYmosIGNoZWNrcykge1xyXG5cdFx0XHRcdFx0cmV0dXJuICQob2JqKS52YWwoKSAhPSBjaGVja3MudmFsdWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCd1c2VyJyA6IGZ1bmN0aW9uIChvYmosIGNoZWNrcykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIC9eKD8hXFxkKVthLXpBLVowLTlcXHU0ZTAwLVxcdTlmYTVfXXs1LDE4fSQvLnRlc3QoJC50cmltKCQob2JqKS52YWwoKSkpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCBwYXJhbXMucnVsZXMpO1xyXG5cdFx0dmFyIHJlc3VsdCA9IHRydWUsXHJcblx0XHRmb2N1c2VkID0gZmFsc2U7XHJcblx0XHRmdW5jdGlvbiBjaGVja0l0ZW0oaXRlbSwgY2hlY2tzKSB7XHJcblx0XHRcdGZvciAoaiBpbiBjaGVja3MpIHtcclxuXHRcdFx0XHRpZiAocGFyYW1zLnJ1bGVzW2NoZWNrc1tqXS50eXBlXSlcclxuXHRcdFx0XHRcdGlmIChwYXJhbXMucnVsZXNbY2hlY2tzW2pdLnR5cGVdKGl0ZW0sIGNoZWNrc1tqXSkpXHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgLypcclxuXHRcdFx0XHRpZiAoIWZvY3VzZWQgJiYgIWNoZWNrc1tqXS5ub0ZvY3VzKSB7XHJcblx0XHRcdFx0XHRpZiAoJChpdGVtKS5vZmZzZXQoKS50b3AgPCAkKHdpbmRvdykuc2Nyb2xsVG9wKCkpIHtcclxuXHRcdFx0XHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG5cdFx0XHRcdFx0XHRcdHNjcm9sbFRvcCA6ICQoaXRlbSkub2Zmc2V0KCkudG9wXHJcblx0XHRcdFx0XHRcdH0sICdmYXN0JylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGZvY3VzZWQgPSB0cnVlXHJcblx0XHRcdFx0fTtcclxuICAgICAgICAgICAgICAgICAqL1xyXG5cdFx0XHRcdGlmIChjaGVja3Nbal0uc2hvd0Vycm9yKSB7XHJcblx0XHRcdFx0XHRjaGVja3Nbal0uc2hvd0Vycm9yKCk7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrXHJcblx0XHRcdFx0fSBlbHNlIGlmIChwYXJhbXMuc2hvd0Vycm9yKSB7XHJcblx0XHRcdFx0XHRwYXJhbXMuc2hvd0Vycm9yKCQoaXRlbSksIGNoZWNrc1tqXS5lcnJNc2csIGNoZWNrc1tqXS5lcnJFdmVudCk7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrXHJcblx0XHRcdFx0fSBlbHNlIGlmIChwYXJhbXMuZXJyaW5mb0ZpbmRlcikge1xyXG5cdFx0XHRcdFx0cGFyYW1zLmVycmluZm9GaW5kZXIoJChpdGVtKSkudGV4dChjaGVja3Nbal0uZXJyTXNnKTtcclxuXHRcdFx0XHRcdCQoaXRlbSkuZm9jdXMoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRwYXJhbXMuZXJyaW5mb0ZpbmRlcigkKGl0ZW0pKS50ZXh0KCcnKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0aWYgKCQoaXRlbSkuYXR0cigndHlwZScpICE9IG51bGwgJiYgJChpdGVtKS5hdHRyKCd0eXBlJykudG9Mb3dlckNhc2UoKSA9PSAnY2hlY2tib3gnKSB7XHJcblx0XHRcdFx0XHRcdCQoaXRlbSkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdCQoaXRlbSkuZm9jdXMoKVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdHJlc3VsdCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGNoZWNrc1tqXS5lcnJNc2cpIHtcclxuXHRcdFx0XHRcdGFsZXJ0KGNoZWNrc1tqXS5lcnJNc2cpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZVxyXG5cdFx0fTtcclxuXHRcdGZvciAoaSA9IDA7IGkgPCB0aGlzWzBdLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmICgkKHRoaXNbMF1baV0pLmF0dHIoJ25hbWUnKSAmJiAkKHRoaXNbMF1baV0pLmF0dHIoJ25hbWUnKS5sZW5ndGggPT0gMCB8fCAkKHRoaXNbMF1baV0pLnByb3AoJ2Rpc2FibGVkJykpXHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdHZhciBjaGVja3MgPSBpdGVtc1skKHRoaXNbMF1baV0pLmF0dHIoJ25hbWUnKV07XHJcblx0XHRcdGlmICghY2hlY2tzKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRpZiAoIWNoZWNrSXRlbSh0aGlzWzBdW2ldLCBjaGVja3MpKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiByZXN1bHRcclxuXHR9O1xyXG5cdFxyXG4vL30pO1xufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWRoWldFdmFuTXZiVzlrTDJadmNtMURhR1ZqYXk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTSXNJbVpwYkdVaU9pSm5aVzVsY21GMFpXUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk5a1pXWnBibVVvWm5WdVkzUnBiMjRnS0hKbGNYVnBjbVVzSUdWNGNHOXlkSE1zSUcxdlpIVnNaU2tnZTF4eVhHNWNkSFpoY2lBa0lEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5QjNhVzVrYjNkYkp5UW5YU0E2SUhSNWNHVnZaaUJuYkc5aVlXd2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUJuYkc5aVlXeGJKeVFuWFNBNklHNTFiR3dwTzF4eVhHNWNkRnh5WEc1Y2RDUXVabTR1Wm05eWJVTm9aV05ySUQwZ1puVnVZM1JwYjI0Z0tHbDBaVzF6TENCd1lYSmhiWE1wSUh0Y2NseHVYSFJjZEdsbUlDZ2hjR0Z5WVcxektWeHlYRzVjZEZ4MFhIUndZWEpoYlhNZ1BTQjdmVHRjY2x4dVhIUmNkSEJoY21GdGN5NXlkV3hsY3lBOUlDUXVaWGgwWlc1a0tIdGNjbHh1WEhSY2RGeDBYSFFuYm5Wc2JDY2dPaUJtZFc1amRHbHZiaUFvYjJKcUxDQmphR1ZqYTNNcElIdGNjbHh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUFrTG5SeWFXMG9KQ2h2WW1vcExuWmhiQ2dwS1M1c1pXNW5kR2dnUGlBd1hISmNibHgwWEhSY2RGeDBmU3hjY2x4dVhIUmNkRngwWEhRbmJXRjRiR1Z1WjNSb0p5QTZJR1oxYm1OMGFXOXVJQ2h2WW1vc0lHTm9aV05yY3lrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJQ1F1ZEhKcGJTZ2tLRzlpYWlrdWRtRnNLQ2twTG14bGJtZDBhQ0E4UFNCamFHVmphM011YldGNGJHVnVaM1JvWEhKY2JseDBYSFJjZEZ4MGZTeGNjbHh1WEhSY2RGeDBYSFFuYldsdWJHVnVaM1JvSnlBNklHWjFibU4wYVc5dUlDaHZZbW9zSUdOb1pXTnJjeWtnZTF4eVhHNWNkRngwWEhSY2RGeDBjbVYwZFhKdUlDUXVkSEpwYlNna0tHOWlhaWt1ZG1Gc0tDa3BMbXhsYm1kMGFDQStQU0JqYUdWamEzTXViV2x1YkdWdVozUm9YSEpjYmx4MFhIUmNkRngwZlN4Y2NseHVYSFJjZEZ4MFhIUW5aR2xuYVhSTmFXNXNaVzVuZEdnbklEb2dablZ1WTNScGIyNGdLRzlpYWl3Z1kyaGxZMnR6S1NCN1hISmNibHgwWEhSY2RGeDBYSFJ5WlhSMWNtNGdKQzUwY21sdEtDUW9iMkpxS1M1MllXd29LUzV5WlhCc1lXTmxLQzliWGpBdE9WMHZaeXdnSnljcEtTNXNaVzVuZEdnZ1BqMGdZMmhsWTJ0ekxtMXBibXhsYm1kMGFGeHlYRzVjZEZ4MFhIUmNkSDBzWEhKY2JseDBYSFJjZEZ4MEoyVnRZV2xzSnlBNklHWjFibU4wYVc5dUlDaHZZbW9zSUdOb1pXTnJjeWtnZTF4eVhHNWNkRngwWEhSY2RGeDBjbVYwZFhKdUlDOG9YRndzZkY0cEtGdGNYSGNyTGw5ZEswQmNYSGNyWEZ3dUtGeGNkeXRjWEM0cGV6QXNNMzFjWEhkN01pdzBmU2t2TG5SbGMzUW9KQ2h2WW1vcExuWmhiQ2dwTG5KbGNHeGhZMlVvTHkxOFhGd3ZMMmNzSUNjbktTbGNjbHh1WEhSY2RGeDBYSFI5TEZ4eVhHNWNkRngwWEhSY2RDZGphR1ZqYTJWa0p5QTZJR1oxYm1OMGFXOXVJQ2h2WW1vc0lHTm9aV05yY3lrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJRzlpYWk1amFHVmphMlZrWEhKY2JseDBYSFJjZEZ4MGZTeGNjbHh1WEhSY2RGeDBYSFFuY0dodmJtVW5JRG9nWm5WdVkzUnBiMjRnS0c5aWFpd2dZMmhsWTJ0ektTQjdYSEpjYmx4MFhIUmNkRngwWEhSeVpYUjFjbTRnTDE1YlhGeGtMVnhjYzExN01Td3lNSDBrTHk1MFpYTjBLQ1FvYjJKcUtTNTJZV3dvS1NrZ0ppWWdKQzUwY21sdEtDUW9iMkpxS1M1MllXd29LU2t1Y21Wd2JHRmpaU2d2VzF4Y2MxMHJMMmNzSUNjZ0p5a3ViR1Z1WjNSb0lEdzlJR05vWldOcmN5NXRZWGhzWlc1bmRHaGNjbHh1WEhSY2RGeDBYSFI5TEZ4eVhHNWNkRngwWEhSY2RDZHVkVzFpWlhJbklEb2dablZ1WTNScGIyNGdLRzlpYWl3Z1kyaGxZMnR6S1NCN1hISmNibHgwWEhSY2RGeDBYSFJ5WlhSMWNtNGdMMTViTUMwNVhTc2tMeTUwWlhOMEtDUXVkSEpwYlNna0tHOWlhaWt1ZG1Gc0tDa3BLVnh5WEc1Y2RGeDBYSFJjZEgwc1hISmNibHgwWEhSY2RGeDBKMjFwYmljZ09pQm1kVzVqZEdsdmJpQW9iMkpxTENCamFHVmphM01wSUh0Y2NseHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQndZWEp6WlVsdWRDZ2tLRzlpYWlrdWRtRnNLQ2twSUQ0OUlHTm9aV05yY3k1dGFXNWNjbHh1WEhSY2RGeDBYSFI5TEZ4eVhHNWNkRngwWEhSY2RGd2ljbVZuWlhod1hDSWdPaUJtZFc1amRHbHZiaUFvYjJKcUxDQmphR1ZqYTNNcElIdGNjbHh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUJqYUdWamEzTXVjR0YwZEdWeWJpNTBaWE4wS0NRdWRISnBiU2drS0c5aWFpa3VkbUZzS0NrcEtWeHlYRzVjZEZ4MFhIUmNkSDBzWEhKY2JseDBYSFJjZEZ4MEozTmxiR1ZqZENjZ09pQm1kVzVqZEdsdmJpQW9iMkpxTENCamFHVmphM01wSUh0Y2NseHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQWtLRzlpYWlrdWRtRnNLQ2tnSVQwZ1kyaGxZMnR6TG5aaGJIVmxYSEpjYmx4MFhIUmNkRngwZlN4Y2NseHVYSFJjZEZ4MFhIUW5kWE5sY2ljZ09pQm1kVzVqZEdsdmJpQW9iMkpxTENCamFHVmphM01wSUh0Y2NseHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQXZYaWcvSVZ4Y1pDbGJZUzE2UVMxYU1DMDVYRngxTkdVd01DMWNYSFU1Wm1FMVgxMTdOU3d4T0gwa0x5NTBaWE4wS0NRdWRISnBiU2drS0c5aWFpa3VkbUZzS0NrcEtWeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwZlN3Z2NHRnlZVzF6TG5KMWJHVnpLVHRjY2x4dVhIUmNkSFpoY2lCeVpYTjFiSFFnUFNCMGNuVmxMRnh5WEc1Y2RGeDBabTlqZFhObFpDQTlJR1poYkhObE8xeHlYRzVjZEZ4MFpuVnVZM1JwYjI0Z1kyaGxZMnRKZEdWdEtHbDBaVzBzSUdOb1pXTnJjeWtnZTF4eVhHNWNkRngwWEhSbWIzSWdLR29nYVc0Z1kyaGxZMnR6S1NCN1hISmNibHgwWEhSY2RGeDBhV1lnS0hCaGNtRnRjeTV5ZFd4bGMxdGphR1ZqYTNOYmFsMHVkSGx3WlYwcFhISmNibHgwWEhSY2RGeDBYSFJwWmlBb2NHRnlZVzF6TG5KMWJHVnpXMk5vWldOcmMxdHFYUzUwZVhCbFhTaHBkR1Z0TENCamFHVmphM05iYWwwcEtWeHlYRzVjZEZ4MFhIUmNkRngwWEhSamIyNTBhVzUxWlR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHFYSEpjYmx4MFhIUmNkRngwYVdZZ0tDRm1iMk4xYzJWa0lDWW1JQ0ZqYUdWamEzTmJhbDB1Ym05R2IyTjFjeWtnZTF4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0NRb2FYUmxiU2t1YjJabWMyVjBLQ2t1ZEc5d0lEd2dKQ2gzYVc1a2IzY3BMbk5qY205c2JGUnZjQ2dwS1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZENRb0oyaDBiV3dzSUdKdlpIa25LUzVoYm1sdFlYUmxLSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJ6WTNKdmJHeFViM0FnT2lBa0tHbDBaVzBwTG05bVpuTmxkQ2dwTG5SdmNGeHlYRzVjZEZ4MFhIUmNkRngwWEhSOUxDQW5abUZ6ZENjcFhISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MFhIUm1iMk4xYzJWa0lEMGdkSEoxWlZ4eVhHNWNkRngwWEhSY2RIMDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS2k5Y2NseHVYSFJjZEZ4MFhIUnBaaUFvWTJobFkydHpXMnBkTG5Ob2IzZEZjbkp2Y2lrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWTJobFkydHpXMnBkTG5Ob2IzZEZjbkp2Y2lncE8xeHlYRzVjZEZ4MFhIUmNkRngwY21WemRXeDBJRDBnWm1Gc2MyVTdYSEpjYmx4MFhIUmNkRngwWEhSaWNtVmhhMXh5WEc1Y2RGeDBYSFJjZEgwZ1pXeHpaU0JwWmlBb2NHRnlZVzF6TG5Ob2IzZEZjbkp2Y2lrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwY0dGeVlXMXpMbk5vYjNkRmNuSnZjaWdrS0dsMFpXMHBMQ0JqYUdWamEzTmJhbDB1WlhKeVRYTm5MQ0JqYUdWamEzTmJhbDB1WlhKeVJYWmxiblFwTzF4eVhHNWNkRngwWEhSY2RGeDBjbVZ6ZFd4MElEMGdabUZzYzJVN1hISmNibHgwWEhSY2RGeDBYSFJpY21WaGExeHlYRzVjZEZ4MFhIUmNkSDBnWld4elpTQnBaaUFvY0dGeVlXMXpMbVZ5Y21sdVptOUdhVzVrWlhJcElIdGNjbHh1WEhSY2RGeDBYSFJjZEhCaGNtRnRjeTVsY25KcGJtWnZSbWx1WkdWeUtDUW9hWFJsYlNrcExuUmxlSFFvWTJobFkydHpXMnBkTG1WeWNrMXpaeWs3WEhKY2JseDBYSFJjZEZ4MFhIUWtLR2wwWlcwcExtWnZZM1Z6S0daMWJtTjBhVzl1SUNncElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGNHRnlZVzF6TG1WeWNtbHVabTlHYVc1a1pYSW9KQ2hwZEdWdEtTa3VkR1Y0ZENnbkp5azdYSEpjYmx4MFhIUmNkRngwWEhSOUtUdGNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDZ2tLR2wwWlcwcExtRjBkSElvSjNSNWNHVW5LU0FoUFNCdWRXeHNJQ1ltSUNRb2FYUmxiU2t1WVhSMGNpZ25kSGx3WlNjcExuUnZURzkzWlhKRFlYTmxLQ2tnUFQwZ0oyTm9aV05yWW05NEp5a2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUWtLR2wwWlcwcExtTnNhV05yS0daMWJtTjBhVzl1SUNncElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUWtLR2wwWlcwcExtWnZZM1Z6S0NsY2NseHVYSFJjZEZ4MFhIUmNkRngwZlNsY2NseHVYSFJjZEZ4MFhIUmNkSDA3WEhKY2JseDBYSFJjZEZ4MFhIUnlaWE4xYkhRZ1BTQm1ZV3h6WlR0Y2NseHVYSFJjZEZ4MFhIUmNkR0p5WldGclhISmNibHgwWEhSY2RGeDBmU0JsYkhObElHbG1JQ2hqYUdWamEzTmJhbDB1WlhKeVRYTm5LU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmhiR1Z5ZENoamFHVmphM05iYWwwdVpYSnlUWE5uS1R0Y2NseHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQm1ZV3h6WlZ4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBmVHRjY2x4dVhIUmNkRngwY21WMGRYSnVJSFJ5ZFdWY2NseHVYSFJjZEgwN1hISmNibHgwWEhSbWIzSWdLR2tnUFNBd095QnBJRHdnZEdocGMxc3dYUzVzWlc1bmRHZzdJR2tyS3lrZ2UxeHlYRzVjZEZ4MFhIUnBaaUFvSkNoMGFHbHpXekJkVzJsZEtTNWhkSFJ5S0NkdVlXMWxKeWtnSmlZZ0pDaDBhR2x6V3pCZFcybGRLUzVoZEhSeUtDZHVZVzFsSnlrdWJHVnVaM1JvSUQwOUlEQWdmSHdnSkNoMGFHbHpXekJkVzJsZEtTNXdjbTl3S0Nka2FYTmhZbXhsWkNjcEtWeHlYRzVjZEZ4MFhIUmNkR052Ym5ScGJuVmxPMXh5WEc1Y2RGeDBYSFIyWVhJZ1kyaGxZMnR6SUQwZ2FYUmxiWE5iSkNoMGFHbHpXekJkVzJsZEtTNWhkSFJ5S0NkdVlXMWxKeWxkTzF4eVhHNWNkRngwWEhScFppQW9JV05vWldOcmN5bGNjbHh1WEhSY2RGeDBYSFJqYjI1MGFXNTFaVHRjY2x4dVhIUmNkRngwYVdZZ0tDRmphR1ZqYTBsMFpXMG9kR2hwYzFzd1hWdHBYU3dnWTJobFkydHpLU2xjY2x4dVhIUmNkRngwWEhSeVpYUjFjbTRnWm1Gc2MyVmNjbHh1WEhSY2RIMDdYSEpjYmx4MFhIUnlaWFIxY200Z2NtVnpkV3gwWEhKY2JseDBmVHRjY2x4dVhIUmNjbHh1THk5OUtUc2lYWDA9IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcbnJlcXVpcmUoJy4uL2xpYi9qcXVlcnlGb3JtJyk7XHJcbnZhciBhZGRyZXNzID0gcmVxdWlyZSgnLi4vbW9kL2FkZHJlc3MnKTtcclxudmFyIGxvYWRpbmcgPSByZXF1aXJlKCcuLi9jaGVja291dC9sb2FkaW5nJyk7XHJcblxyXG52YXIgYWRkcmVzc19saXN0ID0gJCgnI3NoaXBwaW5nX2FkZHJlc3NfbGlzdCcpOyAvL+WcsOWdgOWIl+ihqFxyXG52YXIgbmV3X2FkZHJlc3NfZGl2ID0gYWRkcmVzc19saXN0LmZpbmQoXCIuYWRkcmVzcy1kZXRhaWwuYWRkLW5ldy1hZGRyZXNzXCIpO1xyXG52YXIgYmlsbGluZ19hZGRyZXNzX2xpc3QgPSAkKCcjYmlsbGluZ19hZGRyZXNzX2xpc3QnKTsvL2JpbGxpbmcgYWRkcmVzcyBsaXN0XHJcbnZhciBuZXdfYmlsbGluZ19hZGRyZXNzX2RpdiA9IGJpbGxpbmdfYWRkcmVzc19saXN0LmZpbmQoXCIuYWRkcmVzcy1kZXRhaWwuYWRkLW5ldy1iaWxsaW5nLWFkZHJlc3NcIik7XHJcblxyXG52YXIgYWRkcmVzc19mb3JtID0gJCgnI2FkZHJlc3NfZm9ybScpOy8vZGlhbG9nIGZvcm1cclxuXHJcbi8vYWRkcmVzcyBkaWFsb2dcclxudmFyIGFkZHJlc3NfZGlhbG9nID0gYWRkcmVzc19mb3JtLmZpbmQoJy5hZGRyZXNzLWRpYWxvZycpO1xyXG5cclxudmFyIGVkaXRfdHlwZSA9ICcnO1xyXG52YXIgaXNfbmV3X2FkZHJlc3MgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIG9wZW5fZGlhbG9nKCkge1xyXG4gICAgaWYoJCgnLm1hc2snKS5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cIm1hc2tcIj48L2Rpdj4nKVxyXG4gICAgfVxyXG4gICAgdmFyIGRoID0gJChkb2N1bWVudCkuaGVpZ2h0KCksXHJcbiAgICAgICAgY3cgPSAkKHdpbmRvdykud2lkdGgoKSxcclxuICAgICAgICBjaCA9ICQod2luZG93KS5oZWlnaHQoKTtcclxuXHJcbiAgICB2YXIgc2R3ID0gYWRkcmVzc19kaWFsb2cud2lkdGgoKSxcclxuICAgICAgICBzZGggPSBhZGRyZXNzX2RpYWxvZy5oZWlnaHQoKTtcclxuXHJcbiAgICAkKCcubWFzaycpLmhlaWdodChkaCkuc2hvdygpO1xyXG4gICAgYWRkcmVzc19kaWFsb2cuY3NzKHsnbGVmdCc6IGN3IC8gMiAtIHNkdyAvIDIsICd0b3AnOiBjaCAvIDIgLSBzZGggLyAyICsgJChkb2N1bWVudCkuc2Nyb2xsVG9wKCl9KS5zaG93KCk7XHJcbiAgICBhZGRyZXNzLmNsZWFuRXJyb3IoYWRkcmVzc19kaWFsb2csJ2FsbCcpO1xyXG59XHJcbmZ1bmN0aW9uIGNsb3NlX2RpYWxvZygpIHtcclxuICAgICQoJy5tYXNrJykuaGlkZSgpO1xyXG4gICAgYWRkcmVzc19kaWFsb2cuaGlkZSgpO1xyXG4gICAgYWRkcmVzcy5pbml0X2FkZHJfZm9ybShhZGRyZXNzX2Zvcm0sIGZhbHNlKTtcclxufVxyXG5cclxuLy/kv67mlLnlnLDlnYBcclxuZnVuY3Rpb24gZWRpdEFkZHJlc3MoYWRkcmVzc19pZCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICAndHlwZSc6ICdHRVQnLFxyXG4gICAgICAgICd1cmwnOiAnL2FwaXMvdXNlci9zZWxmL2FkZHJlc3MvJythZGRyZXNzX2lkLFxyXG4gICAgICAgICdjYWNoZSc6IGZhbHNlLFxyXG4gICAgICAgICdkYXRhVHlwZSc6ICdqc29uJyxcclxuICAgICAgICAnYmVmb3JlU2VuZCc6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmcub3BlbigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3N1Y2Nlc3MnOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICBsb2FkaW5nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIGlmIChyLmNvZGUgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubG9jYXRpb24gPSByLnVybDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzcy5pbml0X2FkZHJfZm9ybShhZGRyZXNzX2Zvcm0sIHIuZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzLmluaXRfYWRkcl9mb3JtKGFkZHJlc3NfZm9ybSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wZW5fZGlhbG9nKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZXJyb3InOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICBsb2FkaW5nLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG4vL+S/neWtmGRpYWxvZ+S4reeahOWcsOWdgFxyXG5mdW5jdGlvbiBzYXZlQWRkcmVzcygpIHtcclxuICAgIGlmICghYWRkcmVzcy5jaGVja19hZGRyX2Zvcm0oYWRkcmVzc19mb3JtKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGFkZHJlc3NfZm9ybS5hamF4U3VibWl0KHtcclxuICAgICAgICBcImJlZm9yZVN1Ym1pdFwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbG9hZGluZy5vcGVuKCk7XHJcbiAgICAgICAgICAgICQoJy5idC0xLW5ldycpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImVycm9yXCI6IGZ1bmN0aW9uKGEsIGIsIGMpe1xyXG4gICAgICAgICAgICAkKCcuYnQtMS1uZXcnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3VjY2Vzc1wiOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICBsb2FkaW5nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHZhciByID0galF1ZXJ5LnBhcnNlSlNPTihodG1sKTtcclxuICAgICAgICAgICAgaWYgKHIuY29kZSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sb2NhdGlvbiA9IHIudXJsO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHIuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWRkcl9qc29uID0gci5hZGRyZXNzO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFkZHJlc3Nfd2hvbGUgPSBhZGRyX2pzb24uYWRkcmVzcztcclxuICAgICAgICAgICAgICAgIGlmIChhZGRyX2pzb24uc2lnbl9idWlsZGluZyAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nfd2hvbGUgKz0gJywnICsgYWRkcl9qc29uLnNpZ25fYnVpbGRpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRkcl9qc29uLmhvdXNlX25vICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc193aG9sZSArPSAnLCcgKyBhZGRyX2pzb24uaG91c2Vfbm87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvdmluY2Vfd2hvbGUgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChhZGRyX2pzb24ucHJvdmluY2VfbmFtZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmluY2Vfd2hvbGUgPSAnICcgKyBhZGRyX2pzb24ucHJvdmluY2VfbmFtZSArICcsJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWRkcl9qc29uLnByb3ZpbmNlX3RleHQgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm92aW5jZV93aG9sZSA9ICcgJyArIGFkZHJfanNvbi5wcm92aW5jZV90ZXh0ICsgJywnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHdpdGhvdXRfZGVsZXRlX2h0bWwgPSBcclxuICAgICAgICAgICAgICAgICAgICAnPHA+JyArIGFkZHJfanNvbi5jb25zaWduZWUgKyAnPC9wPicrXHJcbiAgICAgICAgICAgICAgICAgICAgJzxwPicgKyBhZGRyZXNzX3dob2xlICsgJzwvcD4nK1xyXG4gICAgICAgICAgICAgICAgICAgICc8cD4nICsgYWRkcl9qc29uLmNpdHlfdGV4dCArICcsJyArIHByb3ZpbmNlX3dob2xlICsgYWRkcl9qc29uLnppcGNvZGUgKyAnPC9wPicrXHJcbiAgICAgICAgICAgICAgICAgICAgJzxwPicgKyBhZGRyX2pzb24uY291bnRyeV9uYW1lICsgJzwvcD4nK1xyXG4gICAgICAgICAgICAgICAgICAgICc8cD4nICsgYWRkcl9qc29uLnRlbCArICc8L3A+JytcclxuICAgICAgICAgICAgICAgICAgICAnPGEgY2xhc3M9XCJzYm10IGJ0LTEtbmV3IGVkaXRcIj4nICsgX2xhbmcucGFnZV9jb21tb25fZWRpdCArICc8L2E+J1xyXG4gICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpdGhfZGVsZXRlX2h0bWwgPSB3aXRob3V0X2RlbGV0ZV9odG1sICsgXHJcbiAgICAgICAgICAgICAgICAgICAgJzxhIGNsYXNzPVwic2JtdCBidC0xLW5ldyBkZWxldGVcIj4nICsgX2xhbmcucGFnZV9jb21tb25fZGVsZXRlICsgJzwvYT4nO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzX25ld19hZGRyZXNzID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVkaXRfdHlwZSA9PSAnc2hpcHBpbmdfYWRkcmVzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmFkZHJlc3MtZGV0YWlsW2FkZHJlc3NfaWQ9XCInICsgYWRkcl9qc29uLmFkZHJlc3NfaWQgKyAnXCJdJykuaHRtbCh3aXRoX2RlbGV0ZV9odG1sKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVkaXRfdHlwZSA9PSAnYmlsbGluZ19hZGRyZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuYWRkcmVzcy1kZXRhaWxbYWRkcmVzc19pZD1cIicgKyBhZGRyX2pzb24uYWRkcmVzc19pZCArICdcIl0nKS5odG1sKHdpdGhvdXRfZGVsZXRlX2h0bWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdpdGhfZGVsZXRlX2RpdiA9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImFkZHJlc3MtZGV0YWlsXCIgYWRkcmVzc19pZD1cIicgKyBhZGRyX2pzb24uYWRkcmVzc19pZCArICdcIj4nICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoX2RlbGV0ZV9odG1sICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3aXRob3V0X2RlbGV0ZV9kaXYgPSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYWRkcmVzcy1kZXRhaWxcIiBhZGRyZXNzX2lkPVwiJyArIGFkZHJfanNvbi5hZGRyZXNzX2lkICsgJ1wiPicgKyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRob3V0X2RlbGV0ZV9odG1sICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JzsgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVkaXRfdHlwZSA9PSAnc2hpcHBpbmdfYWRkcmVzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3X2FkZHJlc3NfZGl2LmJlZm9yZSh3aXRoX2RlbGV0ZV9kaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFnZURhdGEuaGFzX25vX2JpbGxpbmdfYWRkcmVzcyA9PSB0cnVlICYmIHBhZ2VEYXRhLmhhc19ub19zaGlwcGluZ19hZGRyZXNzID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWRpdF90eXBlID09ICdiaWxsaW5nX2FkZHJlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXNldEFsbERpdigpO1xyXG4gICAgICAgICAgICAgICAgY2xvc2VfZGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuYnQtMS1uZXcnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHIubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbi8v5Yig6Zmk5Zyw5Z2AXHJcbmZ1bmN0aW9uIGRlbGV0ZUFkZHJlc3MoYWRkcmVzc19pZCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICAndHlwZSc6ICdQT1NUJyxcclxuICAgICAgICAndXJsJzogJy9hcGlzL3VzZXIvc2VsZi9hZGRyZXNzLycrYWRkcmVzc19pZCxcclxuICAgICAgICAnY2FjaGUnOiBmYWxzZSxcclxuICAgICAgICAnZGF0YVR5cGUnOiAnanNvbicsXHJcbiAgICAgICAgJ2RhdGEnOiB7J19NRVRIT0QnOidERUxFVEUnfSxcclxuICAgICAgICAnYmVmb3JlU2VuZCc6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmcub3BlbigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3N1Y2Nlc3MnOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICBsb2FkaW5nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIGlmIChyLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzc19saXN0LmZpbmQoJ2Rpdi5hZGRyZXNzLWRldGFpbFthZGRyZXNzX2lkPVwiJyArIGFkZHJlc3NfaWQgKyAnXCJdJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICByZXNldEFsbERpdigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoci5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZXJyb3InOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICBsb2FkaW5nLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gcmVzZXRBbGxEaXYoKSB7XHJcbiAgICBhZGRyZXNzX2xpc3QuZmluZChcImRpdi5hZGRyZXNzLWRldGFpbFwiKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgaWYgKGluZGV4ICUgNCA9PSAzICkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhZGRyZXNzLWRldGFpbC1hdC1yaWdodCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FkZHJlc3MtZGV0YWlsLWF0LXJpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBiaWxsaW5nX2FkZHJlc3NfbGlzdC5maW5kKFwiZGl2LmFkZHJlc3MtZGV0YWlsXCIpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgICBpZiAoaW5kZXggJSA0ID09IDMgKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FkZHJlc3MtZGV0YWlsLWF0LXJpZ2h0Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWRkcmVzcy1kZXRhaWwtYXQtcmlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG52YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8v57uR5a6a5Zyw5Z2A6KGo5Y2V55u45YWz5LqL5Lu277yM5Li76KaB5piv5YiH5o2i5Zu95a625ZKM6KGo5Y2V6aqM6K+BXHJcbiAgICBhZGRyZXNzLmhhbmRsZV9hZGRyX2Zvcm0oYWRkcmVzc19mb3JtKTtcclxuXHJcbiAgICAvL+aPkOS6pERpYWxvZ+S4reeahOWcsOWdgOihqOWNlVxyXG4gICAgYWRkcmVzc19mb3JtLnN1Ym1pdChzYXZlQWRkcmVzcyk7XHJcblxyXG4gICAgLy/lhbPpl63lnLDlnYDlvLnlh7rlsYJcclxuICAgICQoJ2JvZHknKS5kZWxlZ2F0ZSgnLm1hc2ssIC5hZGRyZXNzLWRpYWxvZyAuY2xvc2UnLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjbG9zZV9kaWFsb2coKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8v57uR5a6a5Zyw5Z2A5YiX6KGo55u45YWz5LqL5Lu2XHJcbiAgICBhZGRyZXNzX2xpc3QuZGVsZWdhdGUoJy5idXR0b25fYWRkX2FkZHJlc3MnLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9hZGQgbmV3IFxyXG4gICAgICAgIGFkZHJlc3NfZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWRkcmVzc19pZFwiXScpLnZhbCgwKTtcclxuICAgICAgICBlZGl0X3R5cGUgPSAnc2hpcHBpbmdfYWRkcmVzcyc7XHJcbiAgICAgICAgaXNfbmV3X2FkZHJlc3MgPSB0cnVlO1xyXG4gICAgICAgIG9wZW5fZGlhbG9nKCk7XHJcbiAgICB9KS5kZWxlZ2F0ZSgnLmVkaXQnLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9lZGl0XHJcbiAgICAgICAgZWRpdF90eXBlID0gJ3NoaXBwaW5nX2FkZHJlc3MnO1xyXG4gICAgICAgIGlzX25ld19hZGRyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgZWRpdEFkZHJlc3MoJCh0aGlzKS5jbG9zZXN0KCdkaXYuYWRkcmVzcy1kZXRhaWwnKS5hdHRyKCdhZGRyZXNzX2lkJykpO1xyXG4gICAgfSkuZGVsZWdhdGUoJy5kZWxldGUnLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9kZWxldGVcclxuICAgICAgICBkZWxldGVBZGRyZXNzKCQodGhpcykuY2xvc2VzdCgnZGl2LmFkZHJlc3MtZGV0YWlsJykuYXR0cignYWRkcmVzc19pZCcpKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBiaWxsaW5nX2FkZHJlc3NfbGlzdC5kZWxlZ2F0ZSgnLmJ1dHRvbl9hZGRfYWRkcmVzcycsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL2FkZCBhIGJpbGxpbmcgZHJlc3NcclxuICAgICAgICBhZGRyZXNzX2Zvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFkZHJlc3NfaWRcIl0nKS52YWwoMCk7XHJcbiAgICAgICAgZWRpdF90eXBlID0gJ2JpbGxpbmdfYWRkcmVzcyc7XHJcbiAgICAgICAgaXNfbmV3X2FkZHJlc3MgPSB0cnVlO1xyXG4gICAgICAgIG9wZW5fZGlhbG9nKCk7XHJcbiAgICB9KS5kZWxlZ2F0ZSgnLmVkaXQnLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9lZGl0XHJcbiAgICAgICAgZWRpdF90eXBlID0gJ2JpbGxpbmdfYWRkcmVzcyc7XHJcbiAgICAgICAgaXNfbmV3X2FkZHJlc3MgPSBmYWxzZTtcclxuICAgICAgICBlZGl0QWRkcmVzcygkKHRoaXMpLmNsb3Nlc3QoJ2Rpdi5hZGRyZXNzLWRldGFpbCcpLmF0dHIoJ2FkZHJlc3NfaWQnKSk7XHJcbiAgICB9KTtcclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFwiaW5pdFwiOiBpbml0XHJcbn07XHJcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWRoWldFdmFuTXZiM0prWlhJdllXUmtjbVZ6YzJKdmIyc3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU0lzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWRtRnlJQ1FnUFNBb2RIbHdaVzltSUhkcGJtUnZkeUFoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUEvSUhkcGJtUnZkMXNuSkNkZElEb2dkSGx3Wlc5bUlHZHNiMkpoYkNBaFBUMGdYQ0oxYm1SbFptbHVaV1JjSWlBL0lHZHNiMkpoYkZzbkpDZGRJRG9nYm5Wc2JDazdYSEpjYm5KbGNYVnBjbVVvSnk0dUwyeHBZaTlxY1hWbGNubEdiM0p0SnlrN1hISmNiblpoY2lCaFpHUnlaWE56SUQwZ2NtVnhkV2x5WlNnbkxpNHZiVzlrTDJGa1pISmxjM01uS1R0Y2NseHVkbUZ5SUd4dllXUnBibWNnUFNCeVpYRjFhWEpsS0NjdUxpOWphR1ZqYTI5MWRDOXNiMkZrYVc1bkp5azdYSEpjYmx4eVhHNTJZWElnWVdSa2NtVnpjMTlzYVhOMElEMGdKQ2duSTNOb2FYQndhVzVuWDJGa1pISmxjM05mYkdsemRDY3BPeUF2TCtXY3NPV2RnT1dJbCtpaHFGeHlYRzUyWVhJZ2JtVjNYMkZrWkhKbGMzTmZaR2wySUQwZ1lXUmtjbVZ6YzE5c2FYTjBMbVpwYm1Rb1hDSXVZV1JrY21WemN5MWtaWFJoYVd3dVlXUmtMVzVsZHkxaFpHUnlaWE56WENJcE8xeHlYRzUyWVhJZ1ltbHNiR2x1WjE5aFpHUnlaWE56WDJ4cGMzUWdQU0FrS0NjalltbHNiR2x1WjE5aFpHUnlaWE56WDJ4cGMzUW5LVHN2TDJKcGJHeHBibWNnWVdSa2NtVnpjeUJzYVhOMFhISmNiblpoY2lCdVpYZGZZbWxzYkdsdVoxOWhaR1J5WlhOelgyUnBkaUE5SUdKcGJHeHBibWRmWVdSa2NtVnpjMTlzYVhOMExtWnBibVFvWENJdVlXUmtjbVZ6Y3kxa1pYUmhhV3d1WVdSa0xXNWxkeTFpYVd4c2FXNW5MV0ZrWkhKbGMzTmNJaWs3WEhKY2JseHlYRzUyWVhJZ1lXUmtjbVZ6YzE5bWIzSnRJRDBnSkNnbkkyRmtaSEpsYzNOZlptOXliU2NwT3k4dlpHbGhiRzluSUdadmNtMWNjbHh1WEhKY2JpOHZZV1JrY21WemN5QmthV0ZzYjJkY2NseHVkbUZ5SUdGa1pISmxjM05mWkdsaGJHOW5JRDBnWVdSa2NtVnpjMTltYjNKdExtWnBibVFvSnk1aFpHUnlaWE56TFdScFlXeHZaeWNwTzF4eVhHNWNjbHh1ZG1GeUlHVmthWFJmZEhsd1pTQTlJQ2NuTzF4eVhHNTJZWElnYVhOZmJtVjNYMkZrWkhKbGMzTWdQU0JtWVd4elpUdGNjbHh1WEhKY2JtWjFibU4wYVc5dUlHOXdaVzVmWkdsaGJHOW5LQ2tnZTF4eVhHNGdJQ0FnYVdZb0pDZ25MbTFoYzJzbktTNXNaVzVuZEdnZ1BDQXhLU0I3WEhKY2JpQWdJQ0FnSUNBZ0pDZ25ZbTlrZVNjcExtRndjR1Z1WkNnblBHUnBkaUJqYkdGemN6MWNJbTFoYzJ0Y0lqNDhMMlJwZGo0bktWeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ2RtRnlJR1JvSUQwZ0pDaGtiMk4xYldWdWRDa3VhR1ZwWjJoMEtDa3NYSEpjYmlBZ0lDQWdJQ0FnWTNjZ1BTQWtLSGRwYm1SdmR5a3VkMmxrZEdnb0tTeGNjbHh1SUNBZ0lDQWdJQ0JqYUNBOUlDUW9kMmx1Wkc5M0tTNW9aV2xuYUhRb0tUdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ2MyUjNJRDBnWVdSa2NtVnpjMTlrYVdGc2IyY3VkMmxrZEdnb0tTeGNjbHh1SUNBZ0lDQWdJQ0J6WkdnZ1BTQmhaR1J5WlhOelgyUnBZV3h2Wnk1b1pXbG5hSFFvS1R0Y2NseHVYSEpjYmlBZ0lDQWtLQ2N1YldGemF5Y3BMbWhsYVdkb2RDaGthQ2t1YzJodmR5Z3BPMXh5WEc0Z0lDQWdZV1JrY21WemMxOWthV0ZzYjJjdVkzTnpLSHNuYkdWbWRDYzZJR04zSUM4Z01pQXRJSE5rZHlBdklESXNJQ2QwYjNBbk9pQmphQ0F2SURJZ0xTQnpaR2dnTHlBeUlDc2dKQ2hrYjJOMWJXVnVkQ2t1YzJOeWIyeHNWRzl3S0NsOUtTNXphRzkzS0NrN1hISmNiaUFnSUNCaFpHUnlaWE56TG1Oc1pXRnVSWEp5YjNJb1lXUmtjbVZ6YzE5a2FXRnNiMmNzSjJGc2JDY3BPMXh5WEc1OVhISmNibVoxYm1OMGFXOXVJR05zYjNObFgyUnBZV3h2WnlncElIdGNjbHh1SUNBZ0lDUW9KeTV0WVhOckp5a3VhR2xrWlNncE8xeHlYRzRnSUNBZ1lXUmtjbVZ6YzE5a2FXRnNiMmN1YUdsa1pTZ3BPMXh5WEc0Z0lDQWdZV1JrY21WemN5NXBibWwwWDJGa1pISmZabTl5YlNoaFpHUnlaWE56WDJadmNtMHNJR1poYkhObEtUdGNjbHh1ZlZ4eVhHNWNjbHh1THkva3Y2N21sTG5sbkxEbG5ZQmNjbHh1Wm5WdVkzUnBiMjRnWldScGRFRmtaSEpsYzNNb1lXUmtjbVZ6YzE5cFpDa2dlMXh5WEc0Z0lDQWdKQzVoYW1GNEtIdGNjbHh1SUNBZ0lDQWdJQ0FuZEhsd1pTYzZJQ2RIUlZRbkxGeHlYRzRnSUNBZ0lDQWdJQ2QxY213bk9pQW5MMkZ3YVhNdmRYTmxjaTl6Wld4bUwyRmtaSEpsYzNNdkp5dGhaR1J5WlhOelgybGtMRnh5WEc0Z0lDQWdJQ0FnSUNkallXTm9aU2M2SUdaaGJITmxMRnh5WEc0Z0lDQWdJQ0FnSUNka1lYUmhWSGx3WlNjNklDZHFjMjl1Snl4Y2NseHVJQ0FnSUNBZ0lDQW5ZbVZtYjNKbFUyVnVaQ2M2SUdaMWJtTjBhVzl1SUNoeUtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHeHZZV1JwYm1jdWIzQmxiaWdwTzF4eVhHNGdJQ0FnSUNBZ0lIMHNYSEpjYmlBZ0lDQWdJQ0FnSjNOMVkyTmxjM01uT2lCbWRXNWpkR2x2YmlBb2Npa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNiMkZrYVc1bkxtTnNiM05sS0NrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHlMbU52WkdVZ1BUMGdMVEVwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITmxiR1l1Ykc5allYUnBiMjRnUFNCeUxuVnliRHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnlianRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2h5TG1OdlpHVWdQVDBnTUNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZV1JrY21WemN5NXBibWwwWDJGa1pISmZabTl5YlNoaFpHUnlaWE56WDJadmNtMHNJSEl1WkdGMFlTazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhaR1J5WlhOekxtbHVhWFJmWVdSa2NsOW1iM0p0S0dGa1pISmxjM05mWm05eWJTd2dabUZzYzJVcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUc5d1pXNWZaR2xoYkc5bktDazdYSEpjYmlBZ0lDQWdJQ0FnZlN4Y2NseHVJQ0FnSUNBZ0lDQW5aWEp5YjNJbk9pQm1kVzVqZEdsdmJpQW9jaWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JzYjJGa2FXNW5MbU5zYjNObEtDazdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlNrN1hISmNibjFjY2x4dVhISmNibHh5WEc0dkwrUy9uZVd0bUdScFlXeHZaK1M0cmVlYWhPV2NzT1dkZ0Z4eVhHNW1kVzVqZEdsdmJpQnpZWFpsUVdSa2NtVnpjeWdwSUh0Y2NseHVJQ0FnSUdsbUlDZ2hZV1JrY21WemN5NWphR1ZqYTE5aFpHUnlYMlp2Y20wb1lXUmtjbVZ6YzE5bWIzSnRLU2tnZTF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjY2x4dUlDQWdJSDFjY2x4dUlDQWdJR0ZrWkhKbGMzTmZabTl5YlM1aGFtRjRVM1ZpYldsMEtIdGNjbHh1SUNBZ0lDQWdJQ0JjSW1KbFptOXlaVk4xWW0xcGRGd2lPaUJtZFc1amRHbHZiaWdwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYkc5aFpHbHVaeTV2Y0dWdUtDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDUW9KeTVpZEMweExXNWxkeWNwTG1GMGRISW9KMlJwYzJGaWJHVmtKeXdnZEhKMVpTazdYSEpjYmlBZ0lDQWdJQ0FnZlN4Y2NseHVJQ0FnSUNBZ0lDQmNJbVZ5Y205eVhDSTZJR1oxYm1OMGFXOXVLR0VzSUdJc0lHTXBlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWtLQ2N1WW5RdE1TMXVaWGNuS1M1aGRIUnlLQ2RrYVhOaFlteGxaQ2NzSUdaaGJITmxLVHRjY2x4dUlDQWdJQ0FnSUNCOUxGeHlYRzRnSUNBZ0lDQWdJRndpYzNWalkyVnpjMXdpT2lCbWRXNWpkR2x2YmlBb2FIUnRiQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JzYjJGa2FXNW5MbU5zYjNObEtDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ5SUQwZ2FsRjFaWEo1TG5CaGNuTmxTbE5QVGlob2RHMXNLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hJdVkyOWtaU0E5UFNBdE1Ta2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJWc1ppNXNiMk5oZEdsdmJpQTlJSEl1ZFhKc08xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tISXVZMjlrWlNBOVBTQXdLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdZV1JrY2w5cWMyOXVJRDBnY2k1aFpHUnlaWE56TzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR0ZrWkhKbGMzTmZkMmh2YkdVZ1BTQmhaR1J5WDJwemIyNHVZV1JrY21WemN6dGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoaFpHUnlYMnB6YjI0dWMybG5ibDlpZFdsc1pHbHVaeUFoUFNBbkp5a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRmtaSEpsYzNOZmQyaHZiR1VnS3owZ0p5d25JQ3NnWVdSa2NsOXFjMjl1TG5OcFoyNWZZblZwYkdScGJtYzdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZV1JrY2w5cWMyOXVMbWh2ZFhObFgyNXZJQ0U5SUNjbktTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lXUmtjbVZ6YzE5M2FHOXNaU0FyUFNBbkxDY2dLeUJoWkdSeVgycHpiMjR1YUc5MWMyVmZibTg3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnY0hKdmRtbHVZMlZmZDJodmJHVWdQU0FuSnp0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hoWkdSeVgycHpiMjR1Y0hKdmRtbHVZMlZmYm1GdFpTQWhQU0J1ZFd4c0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NISnZkbWx1WTJWZmQyaHZiR1VnUFNBbklDY2dLeUJoWkdSeVgycHpiMjR1Y0hKdmRtbHVZMlZmYm1GdFpTQXJJQ2NzSnp0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9ZV1JrY2w5cWMyOXVMbkJ5YjNacGJtTmxYM1JsZUhRZ0lUMGdKeWNwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205MmFXNWpaVjkzYUc5c1pTQTlJQ2NnSnlBcklHRmtaSEpmYW5OdmJpNXdjbTkyYVc1alpWOTBaWGgwSUNzZ0p5d25PMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSGRwZEdodmRYUmZaR1ZzWlhSbFgyaDBiV3dnUFNCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FuUEhBK0p5QXJJR0ZrWkhKZmFuTnZiaTVqYjI1emFXZHVaV1VnS3lBblBDOXdQaWNyWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdKenh3UGljZ0t5QmhaR1J5WlhOelgzZG9iMnhsSUNzZ0p6d3ZjRDRuSzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2M4Y0Q0bklDc2dZV1JrY2w5cWMyOXVMbU5wZEhsZmRHVjRkQ0FySUNjc0p5QXJJSEJ5YjNacGJtTmxYM2RvYjJ4bElDc2dZV1JrY2w5cWMyOXVMbnBwY0dOdlpHVWdLeUFuUEM5d1BpY3JYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0p6eHdQaWNnS3lCaFpHUnlYMnB6YjI0dVkyOTFiblJ5ZVY5dVlXMWxJQ3NnSnp3dmNENG5LMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDYzhjRDRuSUNzZ1lXUmtjbDlxYzI5dUxuUmxiQ0FySUNjOEwzQStKeXRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQW5QR0VnWTJ4aGMzTTlYQ0p6WW0xMElHSjBMVEV0Ym1WM0lHVmthWFJjSWo0bklDc2dYMnhoYm1jdWNHRm5aVjlqYjIxdGIyNWZaV1JwZENBcklDYzhMMkUrSjF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ08xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhkcGRHaGZaR1ZzWlhSbFgyaDBiV3dnUFNCM2FYUm9iM1YwWDJSbGJHVjBaVjlvZEcxc0lDc2dYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0p6eGhJR05zWVhOelBWd2ljMkp0ZENCaWRDMHhMVzVsZHlCa1pXeGxkR1ZjSWo0bklDc2dYMnhoYm1jdWNHRm5aVjlqYjIxdGIyNWZaR1ZzWlhSbElDc2dKend2WVQ0bk8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dselgyNWxkMTloWkdSeVpYTnpJRDA5SUdaaGJITmxLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dWa2FYUmZkSGx3WlNBOVBTQW5jMmhwY0hCcGJtZGZZV1JrY21WemN5Y3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSkNnbkxtRmtaSEpsYzNNdFpHVjBZV2xzVzJGa1pISmxjM05mYVdROVhDSW5JQ3NnWVdSa2NsOXFjMjl1TG1Ga1pISmxjM05mYVdRZ0t5QW5YQ0pkSnlrdWFIUnRiQ2gzYVhSb1gyUmxiR1YwWlY5b2RHMXNLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLR1ZrYVhSZmRIbHdaU0E5UFNBblltbHNiR2x1WjE5aFpHUnlaWE56SnlrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWtLQ2N1WVdSa2NtVnpjeTFrWlhSaGFXeGJZV1JrY21WemMxOXBaRDFjSWljZ0t5QmhaR1J5WDJwemIyNHVZV1JrY21WemMxOXBaQ0FySUNkY0lsMG5LUzVvZEcxc0tIZHBkR2h2ZFhSZlpHVnNaWFJsWDJoMGJXd3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSGRwZEdoZlpHVnNaWFJsWDJScGRpQTlJRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FuUEdScGRpQmpiR0Z6Y3oxY0ltRmtaSEpsYzNNdFpHVjBZV2xzWENJZ1lXUmtjbVZ6YzE5cFpEMWNJaWNnS3lCaFpHUnlYMnB6YjI0dVlXUmtjbVZ6YzE5cFpDQXJJQ2RjSWo0bklDc2dYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCM2FYUm9YMlJsYkdWMFpWOW9kRzFzSUNzZ1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDYzhMMlJwZGo0bk8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQjNhWFJvYjNWMFgyUmxiR1YwWlY5a2FYWWdQU0JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDYzhaR2wySUdOc1lYTnpQVndpWVdSa2NtVnpjeTFrWlhSaGFXeGNJaUJoWkdSeVpYTnpYMmxrUFZ3aUp5QXJJR0ZrWkhKZmFuTnZiaTVoWkdSeVpYTnpYMmxrSUNzZ0oxd2lQaWNnS3lCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCM2FYUm9iM1YwWDJSbGJHVjBaVjlvZEcxc0lDc2dYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBblBDOWthWFkrSnpzZ1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHVmthWFJmZEhsd1pTQTlQU0FuYzJocGNIQnBibWRmWVdSa2NtVnpjeWNwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNYMkZrWkhKbGMzTmZaR2wyTG1KbFptOXlaU2gzYVhSb1gyUmxiR1YwWlY5a2FYWXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2NHRm5aVVJoZEdFdWFHRnpYMjV2WDJKcGJHeHBibWRmWVdSa2NtVnpjeUE5UFNCMGNuVmxJQ1ltSUhCaFoyVkVZWFJoTG1oaGMxOXViMTl6YUdsd2NHbHVaMTloWkdSeVpYTnpJRDA5SUhSeWRXVXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZHBibVJ2ZHk1c2IyTmhkR2x2Ymk1eVpXeHZZV1FvS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1pXUnBkRjkwZVhCbElEMDlJQ2RpYVd4c2FXNW5YMkZrWkhKbGMzTW5LU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhkcGJtUnZkeTVzYjJOaGRHbHZiaTV5Wld4dllXUW9LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYTmxkRUZzYkVScGRpZ3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJ4dmMyVmZaR2xoYkc5bktDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FrS0NjdVluUXRNUzF1WlhjbktTNWhkSFJ5S0Nka2FYTmhZbXhsWkNjc0lHWmhiSE5sS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGc1pYSjBLSEl1YlhObktUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDBwTzF4eVhHNGdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHlYRzU5WEhKY2JpOHY1WWlnNlptazVaeXc1WjJBWEhKY2JtWjFibU4wYVc5dUlHUmxiR1YwWlVGa1pISmxjM01vWVdSa2NtVnpjMTlwWkNrZ2UxeHlYRzRnSUNBZ0pDNWhhbUY0S0h0Y2NseHVJQ0FnSUNBZ0lDQW5kSGx3WlNjNklDZFFUMU5VSnl4Y2NseHVJQ0FnSUNBZ0lDQW5kWEpzSnpvZ0p5OWhjR2x6TDNWelpYSXZjMlZzWmk5aFpHUnlaWE56THljcllXUmtjbVZ6YzE5cFpDeGNjbHh1SUNBZ0lDQWdJQ0FuWTJGamFHVW5PaUJtWVd4elpTeGNjbHh1SUNBZ0lDQWdJQ0FuWkdGMFlWUjVjR1VuT2lBbmFuTnZiaWNzWEhKY2JpQWdJQ0FnSUNBZ0oyUmhkR0VuT2lCN0oxOU5SVlJJVDBRbk9pZEVSVXhGVkVVbmZTeGNjbHh1SUNBZ0lDQWdJQ0FuWW1WbWIzSmxVMlZ1WkNjNklHWjFibU4wYVc5dUlDaHlLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR3h2WVdScGJtY3ViM0JsYmlncE8xeHlYRzRnSUNBZ0lDQWdJSDBzWEhKY2JpQWdJQ0FnSUNBZ0ozTjFZMk5sYzNNbk9pQm1kVzVqZEdsdmJpQW9jaWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JzYjJGa2FXNW5MbU5zYjNObEtDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h5TG1OdlpHVWdQVDBnTUNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZV1JrY21WemMxOXNhWE4wTG1acGJtUW9KMlJwZGk1aFpHUnlaWE56TFdSbGRHRnBiRnRoWkdSeVpYTnpYMmxrUFZ3aUp5QXJJR0ZrWkhKbGMzTmZhV1FnS3lBblhDSmRKeWt1Y21WdGIzWmxLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYTmxkRUZzYkVScGRpZ3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZV3hsY25Rb2NpNXRjMmNwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lDQWdJQ0FuWlhKeWIzSW5PaUJtZFc1amRHbHZiaUFvY2lrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCc2IyRmthVzVuTG1Oc2IzTmxLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZTazdYSEpjYm4xY2NseHVablZ1WTNScGIyNGdjbVZ6WlhSQmJHeEVhWFlvS1NCN1hISmNiaUFnSUNCaFpHUnlaWE56WDJ4cGMzUXVabWx1WkNoY0ltUnBkaTVoWkdSeVpYTnpMV1JsZEdGcGJGd2lLUzVsWVdOb0tHWjFibU4wYVc5dUtHbHVaR1Y0S1NCN1hISmNiaUFnSUNBZ0lDQWdhV1lnS0dsdVpHVjRJQ1VnTkNBOVBTQXpJQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FrS0hSb2FYTXBMbUZrWkVOc1lYTnpLQ2RoWkdSeVpYTnpMV1JsZEdGcGJDMWhkQzF5YVdkb2RDY3BPMXh5WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ1FvZEdocGN5a3VjbVZ0YjNabFEyeGhjM01vSjJGa1pISmxjM010WkdWMFlXbHNMV0YwTFhKcFoyaDBKeWs3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZTazdYSEpjYmlBZ0lDQmlhV3hzYVc1blgyRmtaSEpsYzNOZmJHbHpkQzVtYVc1a0tGd2laR2wyTG1Ga1pISmxjM010WkdWMFlXbHNYQ0lwTG1WaFkyZ29ablZ1WTNScGIyNG9hVzVrWlhncElIdGNjbHh1SUNBZ0lDQWdJQ0JwWmlBb2FXNWtaWGdnSlNBMElEMDlJRE1nS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNRb2RHaHBjeWt1WVdSa1EyeGhjM01vSjJGa1pISmxjM010WkdWMFlXbHNMV0YwTFhKcFoyaDBKeWs3WEhKY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSkNoMGFHbHpLUzV5WlcxdmRtVkRiR0Z6Y3lnbllXUmtjbVZ6Y3kxa1pYUmhhV3d0WVhRdGNtbG5hSFFuS1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlLVHRjY2x4dWZWeHlYRzUyWVhJZ2FXNXBkQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDOHY1N3VSNWE2YTVaeXc1WjJBNktHbzVZMlY1NXU0NVlXejVMcUw1THUyNzd5TTVMaTc2S2FCNXBpdjVZaUg1bzJpNVp1OTVhNjI1WktNNktHbzVZMlY2YXFNNksrQlhISmNiaUFnSUNCaFpHUnlaWE56TG1oaGJtUnNaVjloWkdSeVgyWnZjbTBvWVdSa2NtVnpjMTltYjNKdEtUdGNjbHh1WEhKY2JpQWdJQ0F2TCthUGtPUzZwRVJwWVd4dlorUzRyZWVhaE9XY3NPV2RnT2locU9XTmxWeHlYRzRnSUNBZ1lXUmtjbVZ6YzE5bWIzSnRMbk4xWW0xcGRDaHpZWFpsUVdSa2NtVnpjeWs3WEhKY2JseHlYRzRnSUNBZ0x5L2xoYlBwbDYzbG5MRGxuWURsdkxubGg3cmxzWUpjY2x4dUlDQWdJQ1FvSjJKdlpIa25LUzVrWld4bFoyRjBaU2duTG0xaGMyc3NJQzVoWkdSeVpYTnpMV1JwWVd4dlp5QXVZMnh2YzJVbkxDQW5ZMnhwWTJzbkxDQm1kVzVqZEdsdmJpZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCamJHOXpaVjlrYVdGc2IyY29LVHRjY2x4dUlDQWdJSDBwTzF4eVhHNWNjbHh1SUNBZ0lDOHY1N3VSNWE2YTVaeXc1WjJBNVlpWDZLR281NXU0NVlXejVMcUw1THUyWEhKY2JpQWdJQ0JoWkdSeVpYTnpYMnhwYzNRdVpHVnNaV2RoZEdVb0p5NWlkWFIwYjI1ZllXUmtYMkZrWkhKbGMzTW5MQ0FuWTJ4cFkyc25MQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBZ0lDQWdMeTloWkdRZ2JtVjNJRnh5WEc0Z0lDQWdJQ0FnSUdGa1pISmxjM05mWm05eWJTNW1hVzVrS0NkcGJuQjFkRnR1WVcxbFBWd2lZV1JrY21WemMxOXBaRndpWFNjcExuWmhiQ2d3S1R0Y2NseHVJQ0FnSUNBZ0lDQmxaR2wwWDNSNWNHVWdQU0FuYzJocGNIQnBibWRmWVdSa2NtVnpjeWM3WEhKY2JpQWdJQ0FnSUNBZ2FYTmZibVYzWDJGa1pISmxjM01nUFNCMGNuVmxPMXh5WEc0Z0lDQWdJQ0FnSUc5d1pXNWZaR2xoYkc5bktDazdYSEpjYmlBZ0lDQjlLUzVrWld4bFoyRjBaU2duTG1Wa2FYUW5MQ0FuWTJ4cFkyc25MQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBZ0lDQWdMeTlsWkdsMFhISmNiaUFnSUNBZ0lDQWdaV1JwZEY5MGVYQmxJRDBnSjNOb2FYQndhVzVuWDJGa1pISmxjM01uTzF4eVhHNGdJQ0FnSUNBZ0lHbHpYMjVsZDE5aFpHUnlaWE56SUQwZ1ptRnNjMlU3WEhKY2JpQWdJQ0FnSUNBZ1pXUnBkRUZrWkhKbGMzTW9KQ2gwYUdsektTNWpiRzl6WlhOMEtDZGthWFl1WVdSa2NtVnpjeTFrWlhSaGFXd25LUzVoZEhSeUtDZGhaR1J5WlhOelgybGtKeWtwTzF4eVhHNGdJQ0FnZlNrdVpHVnNaV2RoZEdVb0p5NWtaV3hsZEdVbkxDQW5ZMnhwWTJzbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ0x5OWtaV3hsZEdWY2NseHVJQ0FnSUNBZ0lDQmtaV3hsZEdWQlpHUnlaWE56S0NRb2RHaHBjeWt1WTJ4dmMyVnpkQ2duWkdsMkxtRmtaSEpsYzNNdFpHVjBZV2xzSnlrdVlYUjBjaWduWVdSa2NtVnpjMTlwWkNjcEtUdGNjbHh1SUNBZ0lIMHBPMXh5WEc0Z0lDQWdYSEpjYmlBZ0lDQmlhV3hzYVc1blgyRmtaSEpsYzNOZmJHbHpkQzVrWld4bFoyRjBaU2duTG1KMWRIUnZibDloWkdSZllXUmtjbVZ6Y3ljc0lDZGpiR2xqYXljc0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJQ0FnSUNBdkwyRmtaQ0JoSUdKcGJHeHBibWNnWkhKbGMzTmNjbHh1SUNBZ0lDQWdJQ0JoWkdSeVpYTnpYMlp2Y20wdVptbHVaQ2duYVc1d2RYUmJibUZ0WlQxY0ltRmtaSEpsYzNOZmFXUmNJbDBuS1M1MllXd29NQ2s3WEhKY2JpQWdJQ0FnSUNBZ1pXUnBkRjkwZVhCbElEMGdKMkpwYkd4cGJtZGZZV1JrY21WemN5YzdYSEpjYmlBZ0lDQWdJQ0FnYVhOZmJtVjNYMkZrWkhKbGMzTWdQU0IwY25WbE8xeHlYRzRnSUNBZ0lDQWdJRzl3Wlc1ZlpHbGhiRzluS0NrN1hISmNiaUFnSUNCOUtTNWtaV3hsWjJGMFpTZ25MbVZrYVhRbkxDQW5ZMnhwWTJzbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ0x5OWxaR2wwWEhKY2JpQWdJQ0FnSUNBZ1pXUnBkRjkwZVhCbElEMGdKMkpwYkd4cGJtZGZZV1JrY21WemN5YzdYSEpjYmlBZ0lDQWdJQ0FnYVhOZmJtVjNYMkZrWkhKbGMzTWdQU0JtWVd4elpUdGNjbHh1SUNBZ0lDQWdJQ0JsWkdsMFFXUmtjbVZ6Y3lna0tIUm9hWE1wTG1Oc2IzTmxjM1FvSjJScGRpNWhaR1J5WlhOekxXUmxkR0ZwYkNjcExtRjBkSElvSjJGa1pISmxjM05mYVdRbktTazdYSEpjYmlBZ0lDQjlLVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSHRjY2x4dUlDQWdJRndpYVc1cGRGd2lPaUJwYm1sMFhISmNibjA3WEhKY2JpSmRmUT09IiwiLy8gcmVxdWlyZSgnLi9jb21tb24nKVxyXG5yZXF1aXJlKCcuLi9vcmRlci9hZGRyZXNzYm9vaycpLmluaXQoKTsgLy9Zb3VyIFNoaXBwaW5nIEFkZHJlc3NcclxucmVxdWlyZSgnLi4vY29tbW9uL2FjY291bnRfbWVudScpLmluaXQoKTsiXX0=

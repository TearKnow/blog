require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
//define(function(require, exports, module) {

    var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
    var Facebook = require('../socialMedia/facebook');
    window.dataLayer = window.dataLayer || [];
    $(window).load(function(){
        var loader = require('../mod/loader');
        loader.loadSocialJS('facebook');
        // loader.loadSocialJS('pinit');
        loader.loadSocialJS('gplusone');

        // Facebook share button show, when the js has been loaded.
        (function() {
            var MAX_TRY = 10;
            var try_i = 0;

            (function share() {
                if(typeof(FB) == 'undefined' || !webData.fb_app) {
                    if (try_i++ < MAX_TRY) {
                        setTimeout(share, 500);
                    }
                } else {
                    Facebook.init();
                    $('.fb_icon').on('click', function() {
                        window.dataLayer.push({
                            'snsPageType' : 'checkoutSuccess',
                            'event' : 'fbBtnClick'
                        });

                        Facebook.shareGoodsPic(
                            $(this).attr('data-url'),
                            $(this).attr('data-image'),
                            $(this).attr('data-title'),
                            $(this).attr('data-site_name'),
                            $(this).attr('data-description'),
                            'checkoutSuccess'
                        );
                    });
                }
            })();
        })();

        $('.cksuc-purchase-list .pint_icon').click(function() {
            window.dataLayer.push({
                'snsPageType' : 'checkoutSuccess',
                'event' : 'pintBtnClick'
            });

            pintUrl = $(this).attr('data-href');
            window.open(pintUrl,this.window,'height=320,width=700,top='+($(window).height()/3)+',left='+($(window).width()/3));
            return false;
        });

        $('.cksuc-purchase-list .twitter_icon').click(function() {
            window.dataLayer.push({
                'snsPageType' : 'checkoutSuccess',
                'event' : 'twitBtnClick'
            });

            twitUrl = $(this).attr('data-href');
            window.open(twitUrl,this.window,'height=320,width=700,top='+($(window).height()/3)+',left='+($(window).width()/3));
            return false;
        });

        $('.cksuc-purchase-list .gplusone_icon').click(function() {
            window.dataLayer.push({
                'snsPageType' : 'checkoutSuccess',
                'event' : 'gplusBtnClick'
            });

            gplusUrl = $(this).attr('data-href');
            window.open(gplusUrl,this.window,'height=320,width=700,top='+($(window).height()/3)+',left='+($(window).width()/3));
            return false;
        });
    });
//});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvY2hlY2tvdXQvY2hlY2tvdXRfc2hhcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvL2RlZmluZShmdW5jdGlvbihyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHtcclxuXHJcbiAgICB2YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxuICAgIHZhciBGYWNlYm9vayA9IHJlcXVpcmUoJy4uL3NvY2lhbE1lZGlhL2ZhY2Vib29rJyk7XHJcbiAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcclxuICAgICQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGxvYWRlciA9IHJlcXVpcmUoJy4uL21vZC9sb2FkZXInKTtcclxuICAgICAgICBsb2FkZXIubG9hZFNvY2lhbEpTKCdmYWNlYm9vaycpO1xyXG4gICAgICAgIC8vIGxvYWRlci5sb2FkU29jaWFsSlMoJ3Bpbml0Jyk7XHJcbiAgICAgICAgbG9hZGVyLmxvYWRTb2NpYWxKUygnZ3BsdXNvbmUnKTtcclxuXHJcbiAgICAgICAgLy8gRmFjZWJvb2sgc2hhcmUgYnV0dG9uIHNob3csIHdoZW4gdGhlIGpzIGhhcyBiZWVuIGxvYWRlZC5cclxuICAgICAgICAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBNQVhfVFJZID0gMTA7XHJcbiAgICAgICAgICAgIHZhciB0cnlfaSA9IDA7XHJcblxyXG4gICAgICAgICAgICAoZnVuY3Rpb24gc2hhcmUoKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YoRkIpID09ICd1bmRlZmluZWQnIHx8ICF3ZWJEYXRhLmZiX2FwcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cnlfaSsrIDwgTUFYX1RSWSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHNoYXJlLCA1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRmFjZWJvb2suaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5mYl9pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc25zUGFnZVR5cGUnIDogJ2NoZWNrb3V0U3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnIDogJ2ZiQnRuQ2xpY2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmFjZWJvb2suc2hhcmVHb29kc1BpYyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignZGF0YS11cmwnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignZGF0YS1pbWFnZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdkYXRhLXRpdGxlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtc2l0ZV9uYW1lJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtZGVzY3JpcHRpb24nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGVja291dFN1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKCk7XHJcbiAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgJCgnLmNrc3VjLXB1cmNoYXNlLWxpc3QgLnBpbnRfaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgJ3Nuc1BhZ2VUeXBlJyA6ICdjaGVja291dFN1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgJ2V2ZW50JyA6ICdwaW50QnRuQ2xpY2snXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGludFVybCA9ICQodGhpcykuYXR0cignZGF0YS1ocmVmJyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHBpbnRVcmwsdGhpcy53aW5kb3csJ2hlaWdodD0zMjAsd2lkdGg9NzAwLHRvcD0nKygkKHdpbmRvdykuaGVpZ2h0KCkvMykrJyxsZWZ0PScrKCQod2luZG93KS53aWR0aCgpLzMpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuY2tzdWMtcHVyY2hhc2UtbGlzdCAudHdpdHRlcl9pY29uJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAnc25zUGFnZVR5cGUnIDogJ2NoZWNrb3V0U3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAnZXZlbnQnIDogJ3R3aXRCdG5DbGljaydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0d2l0VXJsID0gJCh0aGlzKS5hdHRyKCdkYXRhLWhyZWYnKTtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4odHdpdFVybCx0aGlzLndpbmRvdywnaGVpZ2h0PTMyMCx3aWR0aD03MDAsdG9wPScrKCQod2luZG93KS5oZWlnaHQoKS8zKSsnLGxlZnQ9JysoJCh3aW5kb3cpLndpZHRoKCkvMykpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5ja3N1Yy1wdXJjaGFzZS1saXN0IC5ncGx1c29uZV9pY29uJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAnc25zUGFnZVR5cGUnIDogJ2NoZWNrb3V0U3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAnZXZlbnQnIDogJ2dwbHVzQnRuQ2xpY2snXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZ3BsdXNVcmwgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaHJlZicpO1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbihncGx1c1VybCx0aGlzLndpbmRvdywnaGVpZ2h0PTMyMCx3aWR0aD03MDAsdG9wPScrKCQod2luZG93KS5oZWlnaHQoKS8zKSsnLGxlZnQ9JysoJCh3aW5kb3cpLndpZHRoKCkvMykpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuLy99KTsiXX0=
},{"../mod/loader":7,"../socialMedia/facebook":12}],2:[function(require,module,exports){
exports.init = function () {
    var Tracker = require('../mod/tracker');
    var tracker = new Tracker();
    tracker.sendAll('enter', 'enter_Afterpayment_');
};

},{"../mod/tracker":11}],3:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);



var initQuestionnaire = function () {
    var quesDialog = $('#checkout-success-questionnaire')
    var layer = $('<div id="dialogOverlay"><div style="background:rgb(0,0,0.1);opacity: 0.5"></div></div>');
    var scenes = webData.scenes;
    var currentScenesName = '';
    if (typeof (scenes.currentScenes) !== 'undefined') {
        var currentScenesName = scenes.currentScenes.name;
    }
   var data = {
       'act' : 'get_questionnaire_info',
       'scene' : 'checkout_success',
       'currentScenesName' : currentScenesName,
   }
   var quesDialogClose = function () {
       layer.hide()
       quesDialog.hide()
   }
   quesDialog.find('.dialog-close,.dialog-close-btn').click(function () {
       quesDialogClose()
   });

    $.ajax({
        type: 'POST',
        url : webData.WEB_ROOT + 'ajax.php',
        dataType : 'json',
        async : false,
        data : data,
        success : function(ret) {
            if(ret.code == 0) {
                var quesUrl = ret.data.questionnaire_url;
                if(quesUrl) {
                    layer.prependTo('body')
                    quesDialog[0].style.display = 'flex'
                    quesDialog.find('#goto-questionnaire-btn').click(function () {
                        window.open(quesUrl)
                    })
                }


            } else {

            }
        }
    });


}

module.exports = {
    init: initQuestionnaire
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvY2hlY2tvdXQvcXVlc3Rpb25uYWlyZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcblxyXG5cclxuXHJcbnZhciBpbml0UXVlc3Rpb25uYWlyZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBxdWVzRGlhbG9nID0gJCgnI2NoZWNrb3V0LXN1Y2Nlc3MtcXVlc3Rpb25uYWlyZScpXHJcbiAgICB2YXIgbGF5ZXIgPSAkKCc8ZGl2IGlkPVwiZGlhbG9nT3ZlcmxheVwiPjxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOnJnYigwLDAsMC4xKTtvcGFjaXR5OiAwLjVcIj48L2Rpdj48L2Rpdj4nKTtcclxuICAgIHZhciBzY2VuZXMgPSB3ZWJEYXRhLnNjZW5lcztcclxuICAgIHZhciBjdXJyZW50U2NlbmVzTmFtZSA9ICcnO1xyXG4gICAgaWYgKHR5cGVvZiAoc2NlbmVzLmN1cnJlbnRTY2VuZXMpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHZhciBjdXJyZW50U2NlbmVzTmFtZSA9IHNjZW5lcy5jdXJyZW50U2NlbmVzLm5hbWU7XHJcbiAgICB9XHJcbiAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgJ2FjdCcgOiAnZ2V0X3F1ZXN0aW9ubmFpcmVfaW5mbycsXHJcbiAgICAgICAnc2NlbmUnIDogJ2NoZWNrb3V0X3N1Y2Nlc3MnLFxyXG4gICAgICAgJ2N1cnJlbnRTY2VuZXNOYW1lJyA6IGN1cnJlbnRTY2VuZXNOYW1lLFxyXG4gICB9XHJcbiAgIHZhciBxdWVzRGlhbG9nQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICBsYXllci5oaWRlKClcclxuICAgICAgIHF1ZXNEaWFsb2cuaGlkZSgpXHJcbiAgIH1cclxuICAgcXVlc0RpYWxvZy5maW5kKCcuZGlhbG9nLWNsb3NlLC5kaWFsb2ctY2xvc2UtYnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgcXVlc0RpYWxvZ0Nsb3NlKClcclxuICAgfSk7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsIDogd2ViRGF0YS5XRUJfUk9PVCArICdhamF4LnBocCcsXHJcbiAgICAgICAgZGF0YVR5cGUgOiAnanNvbicsXHJcbiAgICAgICAgYXN5bmMgOiBmYWxzZSxcclxuICAgICAgICBkYXRhIDogZGF0YSxcclxuICAgICAgICBzdWNjZXNzIDogZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgICAgIGlmKHJldC5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBxdWVzVXJsID0gcmV0LmRhdGEucXVlc3Rpb25uYWlyZV91cmw7XHJcbiAgICAgICAgICAgICAgICBpZihxdWVzVXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXIucHJlcGVuZFRvKCdib2R5JylcclxuICAgICAgICAgICAgICAgICAgICBxdWVzRGlhbG9nWzBdLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICAgICAgICAgICAgICBxdWVzRGlhbG9nLmZpbmQoJyNnb3RvLXF1ZXN0aW9ubmFpcmUtYnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihxdWVzVXJsKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGluaXQ6IGluaXRRdWVzdGlvbm5haXJlXHJcbn07XHJcbiJdfQ==
},{}],4:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
$('#fitanalytics-size-advisor').hide();

var Cookie = require('../mod/cookie');
var cookie = new Cookie();
var fitsCName = 'fa_sizes';
function getFits(){
    var fitsC = cookie.getCookie(fitsCName)
    if(null == fitsC){
        fitsC = '{}';
    }
    return JSON.parse(fitsC);
}

function setFits(fits){
    cookie.setCookie(fitsCName, JSON.stringify(fits));
}

function clearFits(){
    cookie.setCookie(fitsCName, '{}', -1);
}

window._fitAnalytics = function() {
    var thumb_list = $('#goods_thumb_list');
    var magnify_pic = thumb_list.find('#magnify_pic');
    var thumbimg = magnify_pic.attr('src');
    var params = {
        productId: pageData.fitId,
        language: webData.lang,
        thumb: thumbimg,
        close: function(productId, size) {
            var val = $(".prod-info-styles #_size option").filter(function() {
                return $(this).attr('kvalue') == size;
            }).val();
            $('.prod-info-styles #_size').val(val).trigger('change');
            if(size != 0){
                var fits = getFits();
                fits[pageData.goods_id] = size;
                setFits(fits);
            }
        },
        load: function(productId) {
            //$('.prod-info-styles #_size').hide();
            $('#fitanalytics-size-advisor').bind('click', function() {
                widget.open();
                return false;
            });
            $('#fitanalytics-size-advisor').show();
        }
    };
    //Error: something went wrong
    //if(webData.lang == 'en' && webData.currency == 'GBP'){
    //    params.sizesRegion = 'gb';
    //}
    var widget = new FitAnalyticsWidget(params);
};


window._fitAnalyticsReportPurchase = function() {
    fits = getFits();
    for(fit in fits){
        for(product in pageData.order.products){
            if(fits.indexOf(product.id) != -1){
                var fitsize = fits[product.id];
                if(fitsize == product.size){
                    window._sendPurchaseInformation({
                        productId: product.fitId,
                        orderId:   pageData.order.sn,
                        userId: pageData.order.userId,
                        purchasedSize: product.size,
                        sizeRegion: order.sizeRegion,
                        price: product.price,
                        currency: order.currency
                    });
                }
            }
        }
    }
    clearFits();
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvZ29vZHMvZml0X2FuYWx5dGljcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxuJCgnI2ZpdGFuYWx5dGljcy1zaXplLWFkdmlzb3InKS5oaWRlKCk7XHJcblxyXG52YXIgQ29va2llID0gcmVxdWlyZSgnLi4vbW9kL2Nvb2tpZScpO1xyXG52YXIgY29va2llID0gbmV3IENvb2tpZSgpO1xyXG52YXIgZml0c0NOYW1lID0gJ2ZhX3NpemVzJztcclxuZnVuY3Rpb24gZ2V0Rml0cygpe1xyXG4gICAgdmFyIGZpdHNDID0gY29va2llLmdldENvb2tpZShmaXRzQ05hbWUpXHJcbiAgICBpZihudWxsID09IGZpdHNDKXtcclxuICAgICAgICBmaXRzQyA9ICd7fSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShmaXRzQyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEZpdHMoZml0cyl7XHJcbiAgICBjb29raWUuc2V0Q29va2llKGZpdHNDTmFtZSwgSlNPTi5zdHJpbmdpZnkoZml0cykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckZpdHMoKXtcclxuICAgIGNvb2tpZS5zZXRDb29raWUoZml0c0NOYW1lLCAne30nLCAtMSk7XHJcbn1cclxuXHJcbndpbmRvdy5fZml0QW5hbHl0aWNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdGh1bWJfbGlzdCA9ICQoJyNnb29kc190aHVtYl9saXN0Jyk7XHJcbiAgICB2YXIgbWFnbmlmeV9waWMgPSB0aHVtYl9saXN0LmZpbmQoJyNtYWduaWZ5X3BpYycpO1xyXG4gICAgdmFyIHRodW1iaW1nID0gbWFnbmlmeV9waWMuYXR0cignc3JjJyk7XHJcbiAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgIHByb2R1Y3RJZDogcGFnZURhdGEuZml0SWQsXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHdlYkRhdGEubGFuZyxcclxuICAgICAgICB0aHVtYjogdGh1bWJpbWcsXHJcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKHByb2R1Y3RJZCwgc2l6ZSkge1xyXG4gICAgICAgICAgICB2YXIgdmFsID0gJChcIi5wcm9kLWluZm8tc3R5bGVzICNfc2l6ZSBvcHRpb25cIikuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICQodGhpcykuYXR0cigna3ZhbHVlJykgPT0gc2l6ZTtcclxuICAgICAgICAgICAgfSkudmFsKCk7XHJcbiAgICAgICAgICAgICQoJy5wcm9kLWluZm8tc3R5bGVzICNfc2l6ZScpLnZhbCh2YWwpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICBpZihzaXplICE9IDApe1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpdHMgPSBnZXRGaXRzKCk7XHJcbiAgICAgICAgICAgICAgICBmaXRzW3BhZ2VEYXRhLmdvb2RzX2lkXSA9IHNpemU7XHJcbiAgICAgICAgICAgICAgICBzZXRGaXRzKGZpdHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2FkOiBmdW5jdGlvbihwcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgLy8kKCcucHJvZC1pbmZvLXN0eWxlcyAjX3NpemUnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNmaXRhbmFseXRpY3Mtc2l6ZS1hZHZpc29yJykuYmluZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHdpZGdldC5vcGVuKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKCcjZml0YW5hbHl0aWNzLXNpemUtYWR2aXNvcicpLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy9FcnJvcjogc29tZXRoaW5nIHdlbnQgd3JvbmdcclxuICAgIC8vaWYod2ViRGF0YS5sYW5nID09ICdlbicgJiYgd2ViRGF0YS5jdXJyZW5jeSA9PSAnR0JQJyl7XHJcbiAgICAvLyAgICBwYXJhbXMuc2l6ZXNSZWdpb24gPSAnZ2InO1xyXG4gICAgLy99XHJcbiAgICB2YXIgd2lkZ2V0ID0gbmV3IEZpdEFuYWx5dGljc1dpZGdldChwYXJhbXMpO1xyXG59O1xyXG5cclxuXHJcbndpbmRvdy5fZml0QW5hbHl0aWNzUmVwb3J0UHVyY2hhc2UgPSBmdW5jdGlvbigpIHtcclxuICAgIGZpdHMgPSBnZXRGaXRzKCk7XHJcbiAgICBmb3IoZml0IGluIGZpdHMpe1xyXG4gICAgICAgIGZvcihwcm9kdWN0IGluIHBhZ2VEYXRhLm9yZGVyLnByb2R1Y3RzKXtcclxuICAgICAgICAgICAgaWYoZml0cy5pbmRleE9mKHByb2R1Y3QuaWQpICE9IC0xKXtcclxuICAgICAgICAgICAgICAgIHZhciBmaXRzaXplID0gZml0c1twcm9kdWN0LmlkXTtcclxuICAgICAgICAgICAgICAgIGlmKGZpdHNpemUgPT0gcHJvZHVjdC5zaXplKXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuX3NlbmRQdXJjaGFzZUluZm9ybWF0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0LmZpdElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcklkOiAgIHBhZ2VEYXRhLm9yZGVyLnNuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHBhZ2VEYXRhLm9yZGVyLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VkU2l6ZTogcHJvZHVjdC5zaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplUmVnaW9uOiBvcmRlci5zaXplUmVnaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogcHJvZHVjdC5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6IG9yZGVyLmN1cnJlbmN5XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGVhckZpdHMoKTtcclxufTtcclxuIl19
},{"../mod/cookie":6}],5:[function(require,module,exports){
(function (global){
//define(function (require, exports, module) {

    var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    var Cookie = require('../mod/cookie');
    var cookie = new Cookie();

    var MyArray = require('../mod/myArray');
    var myarr = new MyArray();

    var Request = require('../mod/request');
    var request = new Request();

    function ABTest() {
        this.abtest_config = webData.abtest;
    }
    module.exports = ABTest;

    ABTest.prototype.getOneInConfig = function(cookieName) {
        var abtest_config = this.abtest_config;
        for(var i = 0; i < abtest_config.length; i ++) {
            var o_cookie = abtest_config[i];
            if(o_cookie['cookieName'] == cookieName && o_cookie['isActive'] && myarr.in_array(webData.lang, o_cookie['languages']))
                return o_cookie;
        }
        return false;
    }

    ABTest.prototype.getOneInCookie = function(cookieName) {
        var abtest_cookie = cookie.getCookie('abTest') ? cookie.getCookie('abTest') : '';
        if(abtest_cookie.length == 0)
            return false;
        abtest_cookie = abtest_cookie.split(',');
        for(var i = 0; i < abtest_cookie.length; i ++) {
            var c_cookie =  abtest_cookie[i].split('|');
            if(c_cookie[0] == cookieName) {
                return c_cookie;
            }
        }
        return false;
    }

    /* 该操作已在php端执行
     ABTest.prototype.setCookie = function () {
     var me = this;
     var abtest_config = this.abtest_config;
     var abtest_cookie = cookie.getCookie('abTest') ? cookie.getCookie('abTest') : '',
     abtest_cookie_arr = abtest_cookie.split(','),
     new_cookie = '',
     new_cookie_arr = [],
     unique_names = {};
     if(abtest_config.length == 0)
     return false;
     for(var i = 0; i < abtest_config.length; i ++) {
     var o_cookie = abtest_config[i],
     o_name = o_cookie['cookieName'];

     //cookie must be unique and active
     if ((typeof(unique_names[o_name]) != 'undefined') || (! o_cookie['isActive'])){
     continue;
     }
     unique_names[o_name] = 1;

     var o_values = o_cookie['cookieValue'],
     o_rate0 = parseInt(o_cookie['cookieRate'][0]),
     o_rate1 = parseInt(o_cookie['cookieRate'][1]);

     var c_cookie = me.getOneInCookie(o_name);
     if(c_cookie != false && c_cookie[2] == o_rate0 && c_cookie[3] == o_rate1 && myarr.in_array(c_cookie[1], o_values))  {
     new_cookie_arr.push(c_cookie.join('|'));
     continue;
     }

     var rand = parseInt(Math.random() * (o_rate0 + o_rate1)) + 1;
     var o_value = (rand <= o_rate0) ? o_values[0] : o_values[1];
     new_cookie_arr.push(o_name + '|' + o_value + '|' + o_rate0 + '|' + o_rate1);
     }
     new_cookie = new_cookie_arr.join(',');
     if(abtest_cookie != new_cookie) {
     cookie.setCookie('abTest', new_cookie, 365);
     //console.log('setCookie: ' + new_cookie);
     }
     }
     */

    ABTest.prototype.getCookie = function (cookieName) {
        var o_cookie = this.getOneInConfig(cookieName);
        var c_cookie = this.getOneInCookie(cookieName);
        if(! o_cookie || ! c_cookie)
            return false;
        return unescape(c_cookie[1]);
    }

    ABTest.prototype.getVersion = function(cookieName) {
        var o_cookie = this.getOneInConfig(cookieName);
        var c_cookie = this.getOneInCookie(cookieName);
        if(! o_cookie || ! c_cookie)
            return false;
        var c_value = unescape(c_cookie[1]);

        var o_values = o_cookie['cookieValues'];
        for(var i = 0; i < o_values.length; i ++) {
            var o_value = o_values[i]['activeValues'];
            if(c_value == o_value[0]) {
                return 'old';
            } else if(c_value == o_value[1]) {
                return 'new';
            }
        }
        return false;
    }

    ABTest.prototype.setUrl = function (container, attribute, urlKey, cookieName) {
        var urlVal = this.getCookie(cookieName);
        if(! urlVal)
            return false;
        $(container).each(function(index, elem) {
            var url = $(elem).attr(attribute);
            if(url.length < 1) {
                return false;
            }
            var urlNew = request.setOne(url, urlKey, urlVal);
            $(elem).attr(attribute, urlNew);
        });
    }

//});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvbW9kL2FiVGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8vZGVmaW5lKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHtcclxuXHJcbiAgICB2YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxuXHJcbiAgICB2YXIgQ29va2llID0gcmVxdWlyZSgnLi4vbW9kL2Nvb2tpZScpO1xyXG4gICAgdmFyIGNvb2tpZSA9IG5ldyBDb29raWUoKTtcclxuXHJcbiAgICB2YXIgTXlBcnJheSA9IHJlcXVpcmUoJy4uL21vZC9teUFycmF5Jyk7XHJcbiAgICB2YXIgbXlhcnIgPSBuZXcgTXlBcnJheSgpO1xyXG5cclxuICAgIHZhciBSZXF1ZXN0ID0gcmVxdWlyZSgnLi4vbW9kL3JlcXVlc3QnKTtcclxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBBQlRlc3QoKSB7XHJcbiAgICAgICAgdGhpcy5hYnRlc3RfY29uZmlnID0gd2ViRGF0YS5hYnRlc3Q7XHJcbiAgICB9XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEFCVGVzdDtcclxuXHJcbiAgICBBQlRlc3QucHJvdG90eXBlLmdldE9uZUluQ29uZmlnID0gZnVuY3Rpb24oY29va2llTmFtZSkge1xyXG4gICAgICAgIHZhciBhYnRlc3RfY29uZmlnID0gdGhpcy5hYnRlc3RfY29uZmlnO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhYnRlc3RfY29uZmlnLmxlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICB2YXIgb19jb29raWUgPSBhYnRlc3RfY29uZmlnW2ldO1xyXG4gICAgICAgICAgICBpZihvX2Nvb2tpZVsnY29va2llTmFtZSddID09IGNvb2tpZU5hbWUgJiYgb19jb29raWVbJ2lzQWN0aXZlJ10gJiYgbXlhcnIuaW5fYXJyYXkod2ViRGF0YS5sYW5nLCBvX2Nvb2tpZVsnbGFuZ3VhZ2VzJ10pKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9fY29va2llO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgQUJUZXN0LnByb3RvdHlwZS5nZXRPbmVJbkNvb2tpZSA9IGZ1bmN0aW9uKGNvb2tpZU5hbWUpIHtcclxuICAgICAgICB2YXIgYWJ0ZXN0X2Nvb2tpZSA9IGNvb2tpZS5nZXRDb29raWUoJ2FiVGVzdCcpID8gY29va2llLmdldENvb2tpZSgnYWJUZXN0JykgOiAnJztcclxuICAgICAgICBpZihhYnRlc3RfY29va2llLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgYWJ0ZXN0X2Nvb2tpZSA9IGFidGVzdF9jb29raWUuc3BsaXQoJywnKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYWJ0ZXN0X2Nvb2tpZS5sZW5ndGg7IGkgKyspIHtcclxuICAgICAgICAgICAgdmFyIGNfY29va2llID0gIGFidGVzdF9jb29raWVbaV0uc3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgaWYoY19jb29raWVbMF0gPT0gY29va2llTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNfY29va2llO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiDor6Xmk43kvZzlt7LlnKhwaHDnq6/miafooYxcclxuICAgICBBQlRlc3QucHJvdG90eXBlLnNldENvb2tpZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgIHZhciBhYnRlc3RfY29uZmlnID0gdGhpcy5hYnRlc3RfY29uZmlnO1xyXG4gICAgIHZhciBhYnRlc3RfY29va2llID0gY29va2llLmdldENvb2tpZSgnYWJUZXN0JykgPyBjb29raWUuZ2V0Q29va2llKCdhYlRlc3QnKSA6ICcnLFxyXG4gICAgIGFidGVzdF9jb29raWVfYXJyID0gYWJ0ZXN0X2Nvb2tpZS5zcGxpdCgnLCcpLFxyXG4gICAgIG5ld19jb29raWUgPSAnJyxcclxuICAgICBuZXdfY29va2llX2FyciA9IFtdLFxyXG4gICAgIHVuaXF1ZV9uYW1lcyA9IHt9O1xyXG4gICAgIGlmKGFidGVzdF9jb25maWcubGVuZ3RoID09IDApXHJcbiAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhYnRlc3RfY29uZmlnLmxlbmd0aDsgaSArKykge1xyXG4gICAgIHZhciBvX2Nvb2tpZSA9IGFidGVzdF9jb25maWdbaV0sXHJcbiAgICAgb19uYW1lID0gb19jb29raWVbJ2Nvb2tpZU5hbWUnXTtcclxuXHJcbiAgICAgLy9jb29raWUgbXVzdCBiZSB1bmlxdWUgYW5kIGFjdGl2ZVxyXG4gICAgIGlmICgodHlwZW9mKHVuaXF1ZV9uYW1lc1tvX25hbWVdKSAhPSAndW5kZWZpbmVkJykgfHwgKCEgb19jb29raWVbJ2lzQWN0aXZlJ10pKXtcclxuICAgICBjb250aW51ZTtcclxuICAgICB9XHJcbiAgICAgdW5pcXVlX25hbWVzW29fbmFtZV0gPSAxO1xyXG5cclxuICAgICB2YXIgb192YWx1ZXMgPSBvX2Nvb2tpZVsnY29va2llVmFsdWUnXSxcclxuICAgICBvX3JhdGUwID0gcGFyc2VJbnQob19jb29raWVbJ2Nvb2tpZVJhdGUnXVswXSksXHJcbiAgICAgb19yYXRlMSA9IHBhcnNlSW50KG9fY29va2llWydjb29raWVSYXRlJ11bMV0pO1xyXG5cclxuICAgICB2YXIgY19jb29raWUgPSBtZS5nZXRPbmVJbkNvb2tpZShvX25hbWUpO1xyXG4gICAgIGlmKGNfY29va2llICE9IGZhbHNlICYmIGNfY29va2llWzJdID09IG9fcmF0ZTAgJiYgY19jb29raWVbM10gPT0gb19yYXRlMSAmJiBteWFyci5pbl9hcnJheShjX2Nvb2tpZVsxXSwgb192YWx1ZXMpKSAge1xyXG4gICAgIG5ld19jb29raWVfYXJyLnB1c2goY19jb29raWUuam9pbignfCcpKTtcclxuICAgICBjb250aW51ZTtcclxuICAgICB9XHJcblxyXG4gICAgIHZhciByYW5kID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIChvX3JhdGUwICsgb19yYXRlMSkpICsgMTtcclxuICAgICB2YXIgb192YWx1ZSA9IChyYW5kIDw9IG9fcmF0ZTApID8gb192YWx1ZXNbMF0gOiBvX3ZhbHVlc1sxXTtcclxuICAgICBuZXdfY29va2llX2Fyci5wdXNoKG9fbmFtZSArICd8JyArIG9fdmFsdWUgKyAnfCcgKyBvX3JhdGUwICsgJ3wnICsgb19yYXRlMSk7XHJcbiAgICAgfVxyXG4gICAgIG5ld19jb29raWUgPSBuZXdfY29va2llX2Fyci5qb2luKCcsJyk7XHJcbiAgICAgaWYoYWJ0ZXN0X2Nvb2tpZSAhPSBuZXdfY29va2llKSB7XHJcbiAgICAgY29va2llLnNldENvb2tpZSgnYWJUZXN0JywgbmV3X2Nvb2tpZSwgMzY1KTtcclxuICAgICAvL2NvbnNvbGUubG9nKCdzZXRDb29raWU6ICcgKyBuZXdfY29va2llKTtcclxuICAgICB9XHJcbiAgICAgfVxyXG4gICAgICovXHJcblxyXG4gICAgQUJUZXN0LnByb3RvdHlwZS5nZXRDb29raWUgPSBmdW5jdGlvbiAoY29va2llTmFtZSkge1xyXG4gICAgICAgIHZhciBvX2Nvb2tpZSA9IHRoaXMuZ2V0T25lSW5Db25maWcoY29va2llTmFtZSk7XHJcbiAgICAgICAgdmFyIGNfY29va2llID0gdGhpcy5nZXRPbmVJbkNvb2tpZShjb29raWVOYW1lKTtcclxuICAgICAgICBpZighIG9fY29va2llIHx8ICEgY19jb29raWUpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdW5lc2NhcGUoY19jb29raWVbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIEFCVGVzdC5wcm90b3R5cGUuZ2V0VmVyc2lvbiA9IGZ1bmN0aW9uKGNvb2tpZU5hbWUpIHtcclxuICAgICAgICB2YXIgb19jb29raWUgPSB0aGlzLmdldE9uZUluQ29uZmlnKGNvb2tpZU5hbWUpO1xyXG4gICAgICAgIHZhciBjX2Nvb2tpZSA9IHRoaXMuZ2V0T25lSW5Db29raWUoY29va2llTmFtZSk7XHJcbiAgICAgICAgaWYoISBvX2Nvb2tpZSB8fCAhIGNfY29va2llKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIGNfdmFsdWUgPSB1bmVzY2FwZShjX2Nvb2tpZVsxXSk7XHJcblxyXG4gICAgICAgIHZhciBvX3ZhbHVlcyA9IG9fY29va2llWydjb29raWVWYWx1ZXMnXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgb192YWx1ZXMubGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgICAgIHZhciBvX3ZhbHVlID0gb192YWx1ZXNbaV1bJ2FjdGl2ZVZhbHVlcyddO1xyXG4gICAgICAgICAgICBpZihjX3ZhbHVlID09IG9fdmFsdWVbMF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnb2xkJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGNfdmFsdWUgPT0gb192YWx1ZVsxXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICduZXcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBBQlRlc3QucHJvdG90eXBlLnNldFVybCA9IGZ1bmN0aW9uIChjb250YWluZXIsIGF0dHJpYnV0ZSwgdXJsS2V5LCBjb29raWVOYW1lKSB7XHJcbiAgICAgICAgdmFyIHVybFZhbCA9IHRoaXMuZ2V0Q29va2llKGNvb2tpZU5hbWUpO1xyXG4gICAgICAgIGlmKCEgdXJsVmFsKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgJChjb250YWluZXIpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW0pIHtcclxuICAgICAgICAgICAgdmFyIHVybCA9ICQoZWxlbSkuYXR0cihhdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICBpZih1cmwubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB1cmxOZXcgPSByZXF1ZXN0LnNldE9uZSh1cmwsIHVybEtleSwgdXJsVmFsKTtcclxuICAgICAgICAgICAgJChlbGVtKS5hdHRyKGF0dHJpYnV0ZSwgdXJsTmV3KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbi8vfSk7Il19
},{"../mod/cookie":6,"../mod/myArray":8,"../mod/request":10}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
//define(function (require, exports, module) {
	
	function MyArray() {}
	module.exports = MyArray;

	MyArray.prototype.in_array = function (elem, arr) {
		for(var i = 0; i < arr.length; i++){
			if(arr[i] == elem)
				return true;
		}
		return false;
	}
	
	MyArray.prototype.getIndex = function (elem, arr) {
		for(var i = 0; i < arr.length; i++){
			if(arr[i] == elem)
				return i;
		}
		return false;
	}

//});

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
//define(function (require, exports, module) {

	function Request() {}
	module.exports = Request;

	Request.prototype.getAll = function () {
		var url = location.search;
		var requests = new Object();
		if (url.indexOf("?") != -1) {
			var str = url.substr(1);
			strs = str.split("&");
			for (var i = 0; i < strs.length; i++) {
				requests[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
			}
		}
		return requests;
	}
	
	Request.prototype.getOne = function (key) {
		var requests = this.getAll();
		return requests[key];
	}
	
	Request.prototype.setOne = function (url, key, val) {
		var url_new = '';
		if(url.indexOf('?' + key + '=') != -1 || url.indexOf('&' + key + '=') != -1) {
			return url;
		} else if (url.indexOf('?') != -1) {
			url_new = url.replace('?', '?' + key + '=' + val + '&');
		} else if(url.indexOf('#') != -1) {
			url_new = url.replace('#', '?' + key + '=' + val + '#');
		} else {
			url_new = url + '?' + key + '=' + val;
		}
		return url_new;
	}

//});

},{}],11:[function(require,module,exports){
//define(function (require, exports, module) {

    var ABTest = require('../mod/abTest');
    var abTest = new ABTest();

    var Request = require('../mod/request');
    var request = new Request();

    function Tracker() {
        this.analytics = webData.analytics;
        this.abtest_config = webData.abtest;
    }
    module.exports = Tracker;

    Tracker.prototype.send = function (category, action, label) {
        // ga初始化代码在模板 analytics_tracking.htm 中
        if(typeof(_gaq) != 'undefined') {
            var analytics = this.analytics;
            var index = 0;
            for(var analytics_id in analytics) {
                var prefix = (index != 0) ? (String.fromCharCode(97 + index) + '.') : '';
                _gaq.push([prefix + '_trackEvent', category, action, label]);
                //console.log(category + ', ' + action + ', ' + label);
                index ++;
            }
        }
    }

    //追踪abtest_config中的某个A/Btest
    Tracker.prototype.sendOne = function (cookieName, action, labelPrefix) {
        var me = this;
        var version = abTest.getVersion(cookieName);
        var o_cookie = abTest.getOneInConfig(cookieName);
        if(! version || ! o_cookie)
            return false;

        if(version == 'old') {
            me.send(o_cookie['category'], action, labelPrefix + 0 + '_' + cookieName);
        } else if(version == 'new') {
            me.send(o_cookie['category'], action, labelPrefix + 1 + '_' + cookieName);
        } else {
            return false;
        }
    }

    //根据url的参数追踪abtest_config中的某个A/Btest
    Tracker.prototype.sendOneByUrl = function (cookieName, urlKey, action, labelPrefix) {
        var me = this;
        var urlVal = request.getOne(urlKey);
        if(urlVal) {
            var o_cookie = abTest.getOneInConfig(cookieName);
            if(! o_cookie)
                return false;

            if(urlVal == o_cookie['cookieValue'][0]) {
                me.send(o_cookie['category'], action, labelPrefix + 0 + '_' + urlVal);
            } else if(urlVal == o_cookie['cookieValue'][1]) {
                me.send(o_cookie['category'], action, labelPrefix + 1 + '_' + urlVal);
            } else {
                return false;
            }
        }
    }

    //追踪abtest_config中的所有A/Btest
    Tracker.prototype.sendAll = function (action, labelPrefix) {
        var me = this;
        var abtest_config = me.abtest_config;
        for(var i = 0; i < abtest_config.length; i ++) {
            var o_name = abtest_config[i]['cookieName'];
            me.sendOne(o_name, action, labelPrefix);
        }
    }

//});
},{"../mod/abTest":5,"../mod/request":10}],12:[function(require,module,exports){
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
},{"../mod/openInPopup":9}],"checkout_success":[function(require,module,exports){
// require('./common')
require('../checkout/cksuc_track').init(); //track ABTest
require('../goods/fit_analytics'); //fit analytics
require('../checkout/checkout_share'); //checkout share
require('../checkout/questionnaire').init(); //cehckout_success questionnaire
// require('../checkout/email_share').init(); //email share init
},{"../checkout/checkout_share":1,"../checkout/cksuc_track":2,"../checkout/questionnaire":3,"../goods/fit_analytics":4}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL2NoZWNrb3V0L2NoZWNrb3V0X3NoYXJlLmpzIiwiRDovd3d3L3Byb21ldGhldXMvc3JjL2dhZWEvanMvY2hlY2tvdXQvY2tzdWNfdHJhY2suanMiLCJEOi93d3cvcHJvbWV0aGV1cy9zcmMvZ2FlYS9qcy9jaGVja291dC9xdWVzdGlvbm5haXJlLmpzIiwiRDovd3d3L3Byb21ldGhldXMvc3JjL2dhZWEvanMvZ29vZHMvZml0X2FuYWx5dGljcy5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL21vZC9hYlRlc3QuanMiLCJEOi93d3cvcHJvbWV0aGV1cy9zcmMvZ2FlYS9qcy9tb2QvY29va2llLmpzIiwiRDovd3d3L3Byb21ldGhldXMvc3JjL2dhZWEvanMvbW9kL2xvYWRlci5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL21vZC9teUFycmF5LmpzIiwiRDovd3d3L3Byb21ldGhldXMvc3JjL2dhZWEvanMvbW9kL29wZW5JblBvcHVwLmpzIiwiRDovd3d3L3Byb21ldGhldXMvc3JjL2dhZWEvanMvbW9kL3JlcXVlc3QuanMiLCJEOi93d3cvcHJvbWV0aGV1cy9zcmMvZ2FlYS9qcy9tb2QvdHJhY2tlci5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL3NvY2lhbE1lZGlhL2ZhY2Vib29rLmpzIiwiLi9nYWVhL2pzL2VudHJ5X2pzL2NoZWNrb3V0X3N1Y2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbi8vZGVmaW5lKGZ1bmN0aW9uKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSkge1xyXG5cclxuICAgIHZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG4gICAgdmFyIEZhY2Vib29rID0gcmVxdWlyZSgnLi4vc29jaWFsTWVkaWEvZmFjZWJvb2snKTtcclxuICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4gICAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgbG9hZGVyID0gcmVxdWlyZSgnLi4vbW9kL2xvYWRlcicpO1xyXG4gICAgICAgIGxvYWRlci5sb2FkU29jaWFsSlMoJ2ZhY2Vib29rJyk7XHJcbiAgICAgICAgLy8gbG9hZGVyLmxvYWRTb2NpYWxKUygncGluaXQnKTtcclxuICAgICAgICBsb2FkZXIubG9hZFNvY2lhbEpTKCdncGx1c29uZScpO1xyXG5cclxuICAgICAgICAvLyBGYWNlYm9vayBzaGFyZSBidXR0b24gc2hvdywgd2hlbiB0aGUganMgaGFzIGJlZW4gbG9hZGVkLlxyXG4gICAgICAgIChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIE1BWF9UUlkgPSAxMDtcclxuICAgICAgICAgICAgdmFyIHRyeV9pID0gMDtcclxuXHJcbiAgICAgICAgICAgIChmdW5jdGlvbiBzaGFyZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZihGQikgPT0gJ3VuZGVmaW5lZCcgfHwgIXdlYkRhdGEuZmJfYXBwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyeV9pKysgPCBNQVhfVFJZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoc2hhcmUsIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBGYWNlYm9vay5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmZiX2ljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmRhdGFMYXllci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzbnNQYWdlVHlwZScgOiAnY2hlY2tvdXRTdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCcgOiAnZmJCdG5DbGljaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGYWNlYm9vay5zaGFyZUdvb2RzUGljKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdkYXRhLXVybCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdkYXRhLWltYWdlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtdGl0bGUnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignZGF0YS1zaXRlX25hbWUnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignZGF0YS1kZXNjcmlwdGlvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoZWNrb3V0U3VjY2VzcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkoKTtcclxuICAgICAgICB9KSgpO1xyXG5cclxuICAgICAgICAkKCcuY2tzdWMtcHVyY2hhc2UtbGlzdCAucGludF9pY29uJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAnc25zUGFnZVR5cGUnIDogJ2NoZWNrb3V0U3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAnZXZlbnQnIDogJ3BpbnRCdG5DbGljaydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwaW50VXJsID0gJCh0aGlzKS5hdHRyKCdkYXRhLWhyZWYnKTtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4ocGludFVybCx0aGlzLndpbmRvdywnaGVpZ2h0PTMyMCx3aWR0aD03MDAsdG9wPScrKCQod2luZG93KS5oZWlnaHQoKS8zKSsnLGxlZnQ9JysoJCh3aW5kb3cpLndpZHRoKCkvMykpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5ja3N1Yy1wdXJjaGFzZS1saXN0IC50d2l0dGVyX2ljb24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgd2luZG93LmRhdGFMYXllci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICdzbnNQYWdlVHlwZScgOiAnY2hlY2tvdXRTdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICdldmVudCcgOiAndHdpdEJ0bkNsaWNrJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHR3aXRVcmwgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaHJlZicpO1xyXG4gICAgICAgICAgICB3aW5kb3cub3Blbih0d2l0VXJsLHRoaXMud2luZG93LCdoZWlnaHQ9MzIwLHdpZHRoPTcwMCx0b3A9JysoJCh3aW5kb3cpLmhlaWdodCgpLzMpKycsbGVmdD0nKygkKHdpbmRvdykud2lkdGgoKS8zKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmNrc3VjLXB1cmNoYXNlLWxpc3QgLmdwbHVzb25lX2ljb24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgd2luZG93LmRhdGFMYXllci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICdzbnNQYWdlVHlwZScgOiAnY2hlY2tvdXRTdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICdldmVudCcgOiAnZ3BsdXNCdG5DbGljaydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBncGx1c1VybCA9ICQodGhpcykuYXR0cignZGF0YS1ocmVmJyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKGdwbHVzVXJsLHRoaXMud2luZG93LCdoZWlnaHQ9MzIwLHdpZHRoPTcwMCx0b3A9JysoJCh3aW5kb3cpLmhlaWdodCgpLzMpKycsbGVmdD0nKygkKHdpbmRvdykud2lkdGgoKS8zKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4vL30pO1xufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWRoWldFdmFuTXZZMmhsWTJ0dmRYUXZZMmhsWTJ0dmRYUmZjMmhoY21VdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJJaXdpWm1sc1pTSTZJbWRsYm1WeVlYUmxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdkwyUmxabWx1WlNobWRXNWpkR2x2YmloeVpYRjFhWEpsTENCbGVIQnZjblJ6TENCdGIyUjFiR1VwSUh0Y2NseHVYSEpjYmlBZ0lDQjJZWElnSkNBOUlDaDBlWEJsYjJZZ2QybHVaRzkzSUNFOVBTQmNJblZ1WkdWbWFXNWxaRndpSUQ4Z2QybHVaRzkzV3lja0oxMGdPaUIwZVhCbGIyWWdaMnh2WW1Gc0lDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlEOGdaMnh2WW1Gc1d5Y2tKMTBnT2lCdWRXeHNLVHRjY2x4dUlDQWdJSFpoY2lCR1lXTmxZbTl2YXlBOUlISmxjWFZwY21Vb0p5NHVMM052WTJsaGJFMWxaR2xoTDJaaFkyVmliMjlySnlrN1hISmNiaUFnSUNCM2FXNWtiM2N1WkdGMFlVeGhlV1Z5SUQwZ2QybHVaRzkzTG1SaGRHRk1ZWGxsY2lCOGZDQmJYVHRjY2x4dUlDQWdJQ1FvZDJsdVpHOTNLUzVzYjJGa0tHWjFibU4wYVc5dUtDbDdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlHeHZZV1JsY2lBOUlISmxjWFZwY21Vb0p5NHVMMjF2WkM5c2IyRmtaWEluS1R0Y2NseHVJQ0FnSUNBZ0lDQnNiMkZrWlhJdWJHOWhaRk52WTJsaGJFcFRLQ2RtWVdObFltOXZheWNwTzF4eVhHNGdJQ0FnSUNBZ0lDOHZJR3h2WVdSbGNpNXNiMkZrVTI5amFXRnNTbE1vSjNCcGJtbDBKeWs3WEhKY2JpQWdJQ0FnSUNBZ2JHOWhaR1Z5TG14dllXUlRiMk5wWVd4S1V5Z25aM0JzZFhOdmJtVW5LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdMeThnUm1GalpXSnZiMnNnYzJoaGNtVWdZblYwZEc5dUlITm9iM2NzSUhkb1pXNGdkR2hsSUdweklHaGhjeUJpWldWdUlHeHZZV1JsWkM1Y2NseHVJQ0FnSUNBZ0lDQW9ablZ1WTNScGIyNG9LU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCTlFWaGZWRkpaSUQwZ01UQTdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUIwY25sZmFTQTlJREE3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBb1puVnVZM1JwYjI0Z2MyaGhjbVVvS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaWgwZVhCbGIyWW9Sa0lwSUQwOUlDZDFibVJsWm1sdVpXUW5JSHg4SUNGM1pXSkVZWFJoTG1aaVgyRndjQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGNubGZhU3NySUR3Z1RVRllYMVJTV1NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpaWFJVYVcxbGIzVjBLSE5vWVhKbExDQTFNREFwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdSbUZqWldKdmIyc3VhVzVwZENncE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNRb0p5NW1ZbDlwWTI5dUp5a3ViMjRvSjJOc2FXTnJKeXdnWm5WdVkzUnBiMjRvS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZHBibVJ2ZHk1a1lYUmhUR0Y1WlhJdWNIVnphQ2g3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQW5jMjV6VUdGblpWUjVjR1VuSURvZ0oyTm9aV05yYjNWMFUzVmpZMlZ6Y3ljc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FuWlhabGJuUW5JRG9nSjJaaVFuUnVRMnhwWTJzblhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1JtRmpaV0p2YjJzdWMyaGhjbVZIYjI5a2MxQnBZeWhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDUW9kR2hwY3lrdVlYUjBjaWduWkdGMFlTMTFjbXduS1N4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ1FvZEdocGN5a3VZWFIwY2lnblpHRjBZUzFwYldGblpTY3BMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0pDaDBhR2x6S1M1aGRIUnlLQ2RrWVhSaExYUnBkR3hsSnlrc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FrS0hSb2FYTXBMbUYwZEhJb0oyUmhkR0V0YzJsMFpWOXVZVzFsSnlrc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FrS0hSb2FYTXBMbUYwZEhJb0oyUmhkR0V0WkdWelkzSnBjSFJwYjI0bktTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNkamFHVmphMjkxZEZOMVkyTmxjM01uWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2ZTa29LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdKQ2duTG1OcmMzVmpMWEIxY21Ob1lYTmxMV3hwYzNRZ0xuQnBiblJmYVdOdmJpY3BMbU5zYVdOcktHWjFibU4wYVc5dUtDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjNhVzVrYjNjdVpHRjBZVXhoZVdWeUxuQjFjMmdvZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0ozTnVjMUJoWjJWVWVYQmxKeUE2SUNkamFHVmphMjkxZEZOMVkyTmxjM01uTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0oyVjJaVzUwSnlBNklDZHdhVzUwUW5SdVEyeHBZMnNuWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NHbHVkRlZ5YkNBOUlDUW9kR2hwY3lrdVlYUjBjaWduWkdGMFlTMW9jbVZtSnlrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhkcGJtUnZkeTV2Y0dWdUtIQnBiblJWY213c2RHaHBjeTUzYVc1a2IzY3NKMmhsYVdkb2REMHpNakFzZDJsa2RHZzlOekF3TEhSdmNEMG5LeWdrS0hkcGJtUnZkeWt1YUdWcFoyaDBLQ2t2TXlrckp5eHNaV1owUFNjcktDUW9kMmx1Wkc5M0tTNTNhV1IwYUNncEx6TXBLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWtLQ2N1WTJ0emRXTXRjSFZ5WTJoaGMyVXRiR2x6ZENBdWRIZHBkSFJsY2w5cFkyOXVKeWt1WTJ4cFkyc29ablZ1WTNScGIyNG9LU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSGRwYm1SdmR5NWtZWFJoVEdGNVpYSXVjSFZ6YUNoN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQW5jMjV6VUdGblpWUjVjR1VuSURvZ0oyTm9aV05yYjNWMFUzVmpZMlZ6Y3ljc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQW5aWFpsYm5RbklEb2dKM1IzYVhSQ2RHNURiR2xqYXlkY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBkMmwwVlhKc0lEMGdKQ2gwYUdsektTNWhkSFJ5S0Nka1lYUmhMV2h5WldZbktUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2QybHVaRzkzTG05d1pXNG9kSGRwZEZWeWJDeDBhR2x6TG5kcGJtUnZkeXduYUdWcFoyaDBQVE15TUN4M2FXUjBhRDAzTURBc2RHOXdQU2NyS0NRb2QybHVaRzkzS1M1b1pXbG5hSFFvS1M4ektTc25MR3hsWm5ROUp5c29KQ2gzYVc1a2IzY3BMbmRwWkhSb0tDa3ZNeWtwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hISmNiaUFnSUNBZ0lDQWdmU2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ1FvSnk1amEzTjFZeTF3ZFhKamFHRnpaUzFzYVhOMElDNW5jR3gxYzI5dVpWOXBZMjl1SnlrdVkyeHBZMnNvWm5WdVkzUnBiMjRvS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhkcGJtUnZkeTVrWVhSaFRHRjVaWEl1Y0hWemFDaDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FuYzI1elVHRm5aVlI1Y0dVbklEb2dKMk5vWldOcmIzVjBVM1ZqWTJWemN5Y3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FuWlhabGJuUW5JRG9nSjJkd2JIVnpRblJ1UTJ4cFkyc25YSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWjNCc2RYTlZjbXdnUFNBa0tIUm9hWE1wTG1GMGRISW9KMlJoZEdFdGFISmxaaWNwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IzYVc1a2IzY3ViM0JsYmlobmNHeDFjMVZ5YkN4MGFHbHpMbmRwYm1SdmR5d25hR1ZwWjJoMFBUTXlNQ3gzYVdSMGFEMDNNREFzZEc5d1BTY3JLQ1FvZDJsdVpHOTNLUzVvWldsbmFIUW9LUzh6S1NzbkxHeGxablE5Snlzb0pDaDNhVzVrYjNjcExuZHBaSFJvS0Nrdk15a3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEhKY2JpQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQjlLVHRjY2x4dUx5OTlLVHNpWFgwPSIsImV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBUcmFja2VyID0gcmVxdWlyZSgnLi4vbW9kL3RyYWNrZXInKTtcclxuICAgIHZhciB0cmFja2VyID0gbmV3IFRyYWNrZXIoKTtcclxuICAgIHRyYWNrZXIuc2VuZEFsbCgnZW50ZXInLCAnZW50ZXJfQWZ0ZXJwYXltZW50XycpO1xyXG59O1xyXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxuXHJcblxyXG5cclxudmFyIGluaXRRdWVzdGlvbm5haXJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHF1ZXNEaWFsb2cgPSAkKCcjY2hlY2tvdXQtc3VjY2Vzcy1xdWVzdGlvbm5haXJlJylcclxuICAgIHZhciBsYXllciA9ICQoJzxkaXYgaWQ9XCJkaWFsb2dPdmVybGF5XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiKDAsMCwwLjEpO29wYWNpdHk6IDAuNVwiPjwvZGl2PjwvZGl2PicpO1xyXG4gICAgdmFyIHNjZW5lcyA9IHdlYkRhdGEuc2NlbmVzO1xyXG4gICAgdmFyIGN1cnJlbnRTY2VuZXNOYW1lID0gJyc7XHJcbiAgICBpZiAodHlwZW9mIChzY2VuZXMuY3VycmVudFNjZW5lcykgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRTY2VuZXNOYW1lID0gc2NlbmVzLmN1cnJlbnRTY2VuZXMubmFtZTtcclxuICAgIH1cclxuICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAnYWN0JyA6ICdnZXRfcXVlc3Rpb25uYWlyZV9pbmZvJyxcclxuICAgICAgICdzY2VuZScgOiAnY2hlY2tvdXRfc3VjY2VzcycsXHJcbiAgICAgICAnY3VycmVudFNjZW5lc05hbWUnIDogY3VycmVudFNjZW5lc05hbWUsXHJcbiAgIH1cclxuICAgdmFyIHF1ZXNEaWFsb2dDbG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgIGxheWVyLmhpZGUoKVxyXG4gICAgICAgcXVlc0RpYWxvZy5oaWRlKClcclxuICAgfVxyXG4gICBxdWVzRGlhbG9nLmZpbmQoJy5kaWFsb2ctY2xvc2UsLmRpYWxvZy1jbG9zZS1idG4nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICBxdWVzRGlhbG9nQ2xvc2UoKVxyXG4gICB9KTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmwgOiB3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwJyxcclxuICAgICAgICBkYXRhVHlwZSA6ICdqc29uJyxcclxuICAgICAgICBhc3luYyA6IGZhbHNlLFxyXG4gICAgICAgIGRhdGEgOiBkYXRhLFxyXG4gICAgICAgIHN1Y2Nlc3MgOiBmdW5jdGlvbihyZXQpIHtcclxuICAgICAgICAgICAgaWYocmV0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHF1ZXNVcmwgPSByZXQuZGF0YS5xdWVzdGlvbm5haXJlX3VybDtcclxuICAgICAgICAgICAgICAgIGlmKHF1ZXNVcmwpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXllci5wcmVwZW5kVG8oJ2JvZHknKVxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXNEaWFsb2dbMF0uc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXNEaWFsb2cuZmluZCgnI2dvdG8tcXVlc3Rpb25uYWlyZS1idG4nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHF1ZXNVcmwpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgaW5pdDogaW5pdFF1ZXN0aW9ubmFpcmVcclxufTtcclxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltZGhaV0V2YW5NdlkyaGxZMnR2ZFhRdmNYVmxjM1JwYjI1dVlXbHlaUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVNJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lkbUZ5SUNRZ1BTQW9kSGx3Wlc5bUlIZHBibVJ2ZHlBaFBUMGdYQ0oxYm1SbFptbHVaV1JjSWlBL0lIZHBibVJ2ZDFzbkpDZGRJRG9nZEhsd1pXOW1JR2RzYjJKaGJDQWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JR2RzYjJKaGJGc25KQ2RkSURvZ2JuVnNiQ2s3WEhKY2JseHlYRzVjY2x4dVhISmNiblpoY2lCcGJtbDBVWFZsYzNScGIyNXVZV2x5WlNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJSFpoY2lCeGRXVnpSR2xoYkc5bklEMGdKQ2duSTJOb1pXTnJiM1YwTFhOMVkyTmxjM010Y1hWbGMzUnBiMjV1WVdseVpTY3BYSEpjYmlBZ0lDQjJZWElnYkdGNVpYSWdQU0FrS0NjOFpHbDJJR2xrUFZ3aVpHbGhiRzluVDNabGNteGhlVndpUGp4a2FYWWdjM1I1YkdVOVhDSmlZV05yWjNKdmRXNWtPbkpuWWlnd0xEQXNNQzR4S1R0dmNHRmphWFI1T2lBd0xqVmNJajQ4TDJScGRqNDhMMlJwZGo0bktUdGNjbHh1SUNBZ0lIWmhjaUJ6WTJWdVpYTWdQU0IzWldKRVlYUmhMbk5qWlc1bGN6dGNjbHh1SUNBZ0lIWmhjaUJqZFhKeVpXNTBVMk5sYm1WelRtRnRaU0E5SUNjbk8xeHlYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQW9jMk5sYm1WekxtTjFjbkpsYm5SVFkyVnVaWE1wSUNFOVBTQW5kVzVrWldacGJtVmtKeWtnZTF4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJqZFhKeVpXNTBVMk5sYm1WelRtRnRaU0E5SUhOalpXNWxjeTVqZFhKeVpXNTBVMk5sYm1WekxtNWhiV1U3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJSFpoY2lCa1lYUmhJRDBnZTF4eVhHNGdJQ0FnSUNBZ0oyRmpkQ2NnT2lBbloyVjBYM0YxWlhOMGFXOXVibUZwY21WZmFXNW1ieWNzWEhKY2JpQWdJQ0FnSUNBbmMyTmxibVVuSURvZ0oyTm9aV05yYjNWMFgzTjFZMk5sYzNNbkxGeHlYRzRnSUNBZ0lDQWdKMk4xY25KbGJuUlRZMlZ1WlhOT1lXMWxKeUE2SUdOMWNuSmxiblJUWTJWdVpYTk9ZVzFsTEZ4eVhHNGdJQ0I5WEhKY2JpQWdJSFpoY2lCeGRXVnpSR2xoYkc5blEyeHZjMlVnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJQ0JzWVhsbGNpNW9hV1JsS0NsY2NseHVJQ0FnSUNBZ0lIRjFaWE5FYVdGc2IyY3VhR2xrWlNncFhISmNiaUFnSUgxY2NseHVJQ0FnY1hWbGMwUnBZV3h2Wnk1bWFXNWtLQ2N1WkdsaGJHOW5MV05zYjNObExDNWthV0ZzYjJjdFkyeHZjMlV0WW5SdUp5a3VZMnhwWTJzb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdJQ0FnY1hWbGMwUnBZV3h2WjBOc2IzTmxLQ2xjY2x4dUlDQWdmU2s3WEhKY2JseHlYRzRnSUNBZ0pDNWhhbUY0S0h0Y2NseHVJQ0FnSUNBZ0lDQjBlWEJsT2lBblVFOVRWQ2NzWEhKY2JpQWdJQ0FnSUNBZ2RYSnNJRG9nZDJWaVJHRjBZUzVYUlVKZlVrOVBWQ0FySUNkaGFtRjRMbkJvY0Njc1hISmNiaUFnSUNBZ0lDQWdaR0YwWVZSNWNHVWdPaUFuYW5OdmJpY3NYSEpjYmlBZ0lDQWdJQ0FnWVhONWJtTWdPaUJtWVd4elpTeGNjbHh1SUNBZ0lDQWdJQ0JrWVhSaElEb2daR0YwWVN4Y2NseHVJQ0FnSUNBZ0lDQnpkV05qWlhOeklEb2dablZ1WTNScGIyNG9jbVYwS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtISmxkQzVqYjJSbElEMDlJREFwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ4ZFdWelZYSnNJRDBnY21WMExtUmhkR0V1Y1hWbGMzUnBiMjV1WVdseVpWOTFjbXc3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppaHhkV1Z6VlhKc0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHRjVaWEl1Y0hKbGNHVnVaRlJ2S0NkaWIyUjVKeWxjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnhkV1Z6UkdsaGJHOW5XekJkTG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FuWm14bGVDZGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeGRXVnpSR2xoYkc5bkxtWnBibVFvSnlObmIzUnZMWEYxWlhOMGFXOXVibUZwY21VdFluUnVKeWt1WTJ4cFkyc29ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCM2FXNWtiM2N1YjNCbGJpaHhkV1Z6VlhKc0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5S1R0Y2NseHVYSEpjYmx4eVhHNTlYSEpjYmx4eVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlIdGNjbHh1SUNBZ0lHbHVhWFE2SUdsdWFYUlJkV1Z6ZEdsdmJtNWhhWEpsWEhKY2JuMDdYSEpjYmlKZGZRPT0iLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxuJCgnI2ZpdGFuYWx5dGljcy1zaXplLWFkdmlzb3InKS5oaWRlKCk7XHJcblxyXG52YXIgQ29va2llID0gcmVxdWlyZSgnLi4vbW9kL2Nvb2tpZScpO1xyXG52YXIgY29va2llID0gbmV3IENvb2tpZSgpO1xyXG52YXIgZml0c0NOYW1lID0gJ2ZhX3NpemVzJztcclxuZnVuY3Rpb24gZ2V0Rml0cygpe1xyXG4gICAgdmFyIGZpdHNDID0gY29va2llLmdldENvb2tpZShmaXRzQ05hbWUpXHJcbiAgICBpZihudWxsID09IGZpdHNDKXtcclxuICAgICAgICBmaXRzQyA9ICd7fSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShmaXRzQyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEZpdHMoZml0cyl7XHJcbiAgICBjb29raWUuc2V0Q29va2llKGZpdHNDTmFtZSwgSlNPTi5zdHJpbmdpZnkoZml0cykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckZpdHMoKXtcclxuICAgIGNvb2tpZS5zZXRDb29raWUoZml0c0NOYW1lLCAne30nLCAtMSk7XHJcbn1cclxuXHJcbndpbmRvdy5fZml0QW5hbHl0aWNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdGh1bWJfbGlzdCA9ICQoJyNnb29kc190aHVtYl9saXN0Jyk7XHJcbiAgICB2YXIgbWFnbmlmeV9waWMgPSB0aHVtYl9saXN0LmZpbmQoJyNtYWduaWZ5X3BpYycpO1xyXG4gICAgdmFyIHRodW1iaW1nID0gbWFnbmlmeV9waWMuYXR0cignc3JjJyk7XHJcbiAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgIHByb2R1Y3RJZDogcGFnZURhdGEuZml0SWQsXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHdlYkRhdGEubGFuZyxcclxuICAgICAgICB0aHVtYjogdGh1bWJpbWcsXHJcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKHByb2R1Y3RJZCwgc2l6ZSkge1xyXG4gICAgICAgICAgICB2YXIgdmFsID0gJChcIi5wcm9kLWluZm8tc3R5bGVzICNfc2l6ZSBvcHRpb25cIikuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICQodGhpcykuYXR0cigna3ZhbHVlJykgPT0gc2l6ZTtcclxuICAgICAgICAgICAgfSkudmFsKCk7XHJcbiAgICAgICAgICAgICQoJy5wcm9kLWluZm8tc3R5bGVzICNfc2l6ZScpLnZhbCh2YWwpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICBpZihzaXplICE9IDApe1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpdHMgPSBnZXRGaXRzKCk7XHJcbiAgICAgICAgICAgICAgICBmaXRzW3BhZ2VEYXRhLmdvb2RzX2lkXSA9IHNpemU7XHJcbiAgICAgICAgICAgICAgICBzZXRGaXRzKGZpdHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2FkOiBmdW5jdGlvbihwcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgLy8kKCcucHJvZC1pbmZvLXN0eWxlcyAjX3NpemUnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNmaXRhbmFseXRpY3Mtc2l6ZS1hZHZpc29yJykuYmluZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHdpZGdldC5vcGVuKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKCcjZml0YW5hbHl0aWNzLXNpemUtYWR2aXNvcicpLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy9FcnJvcjogc29tZXRoaW5nIHdlbnQgd3JvbmdcclxuICAgIC8vaWYod2ViRGF0YS5sYW5nID09ICdlbicgJiYgd2ViRGF0YS5jdXJyZW5jeSA9PSAnR0JQJyl7XHJcbiAgICAvLyAgICBwYXJhbXMuc2l6ZXNSZWdpb24gPSAnZ2InO1xyXG4gICAgLy99XHJcbiAgICB2YXIgd2lkZ2V0ID0gbmV3IEZpdEFuYWx5dGljc1dpZGdldChwYXJhbXMpO1xyXG59O1xyXG5cclxuXHJcbndpbmRvdy5fZml0QW5hbHl0aWNzUmVwb3J0UHVyY2hhc2UgPSBmdW5jdGlvbigpIHtcclxuICAgIGZpdHMgPSBnZXRGaXRzKCk7XHJcbiAgICBmb3IoZml0IGluIGZpdHMpe1xyXG4gICAgICAgIGZvcihwcm9kdWN0IGluIHBhZ2VEYXRhLm9yZGVyLnByb2R1Y3RzKXtcclxuICAgICAgICAgICAgaWYoZml0cy5pbmRleE9mKHByb2R1Y3QuaWQpICE9IC0xKXtcclxuICAgICAgICAgICAgICAgIHZhciBmaXRzaXplID0gZml0c1twcm9kdWN0LmlkXTtcclxuICAgICAgICAgICAgICAgIGlmKGZpdHNpemUgPT0gcHJvZHVjdC5zaXplKXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuX3NlbmRQdXJjaGFzZUluZm9ybWF0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0LmZpdElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcklkOiAgIHBhZ2VEYXRhLm9yZGVyLnNuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHBhZ2VEYXRhLm9yZGVyLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VkU2l6ZTogcHJvZHVjdC5zaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplUmVnaW9uOiBvcmRlci5zaXplUmVnaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogcHJvZHVjdC5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6IG9yZGVyLmN1cnJlbmN5XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGVhckZpdHMoKTtcclxufTtcclxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltZGhaV0V2YW5NdloyOXZaSE12Wm1sMFgyRnVZV3g1ZEdsamN5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJJaXdpWm1sc1pTSTZJbWRsYm1WeVlYUmxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKMllYSWdKQ0E5SUNoMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJRDhnZDJsdVpHOTNXeWNrSjEwZ09pQjBlWEJsYjJZZ1oyeHZZbUZzSUNFOVBTQmNJblZ1WkdWbWFXNWxaRndpSUQ4Z1oyeHZZbUZzV3lja0oxMGdPaUJ1ZFd4c0tUdGNjbHh1SkNnbkkyWnBkR0Z1WVd4NWRHbGpjeTF6YVhwbExXRmtkbWx6YjNJbktTNW9hV1JsS0NrN1hISmNibHh5WEc1MllYSWdRMjl2YTJsbElEMGdjbVZ4ZFdseVpTZ25MaTR2Ylc5a0wyTnZiMnRwWlNjcE8xeHlYRzUyWVhJZ1kyOXZhMmxsSUQwZ2JtVjNJRU52YjJ0cFpTZ3BPMXh5WEc1MllYSWdabWwwYzBOT1lXMWxJRDBnSjJaaFgzTnBlbVZ6Snp0Y2NseHVablZ1WTNScGIyNGdaMlYwUm1sMGN5Z3BlMXh5WEc0Z0lDQWdkbUZ5SUdacGRITkRJRDBnWTI5dmEybGxMbWRsZEVOdmIydHBaU2htYVhSelEwNWhiV1VwWEhKY2JpQWdJQ0JwWmlodWRXeHNJRDA5SUdacGRITkRLWHRjY2x4dUlDQWdJQ0FnSUNCbWFYUnpReUE5SUNkN2ZTYzdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQnlaWFIxY200Z1NsTlBUaTV3WVhKelpTaG1hWFJ6UXlrN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJSE5sZEVacGRITW9abWwwY3lsN1hISmNiaUFnSUNCamIyOXJhV1V1YzJWMFEyOXZhMmxsS0dacGRITkRUbUZ0WlN3Z1NsTlBUaTV6ZEhKcGJtZHBabmtvWm1sMGN5a3BPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCamJHVmhja1pwZEhNb0tYdGNjbHh1SUNBZ0lHTnZiMnRwWlM1elpYUkRiMjlyYVdVb1ptbDBjME5PWVcxbExDQW5lMzBuTENBdE1TazdYSEpjYm4xY2NseHVYSEpjYm5kcGJtUnZkeTVmWm1sMFFXNWhiSGwwYVdOeklEMGdablZ1WTNScGIyNG9LU0I3WEhKY2JpQWdJQ0IyWVhJZ2RHaDFiV0pmYkdsemRDQTlJQ1FvSnlObmIyOWtjMTkwYUhWdFlsOXNhWE4wSnlrN1hISmNiaUFnSUNCMllYSWdiV0ZuYm1sbWVWOXdhV01nUFNCMGFIVnRZbDlzYVhOMExtWnBibVFvSnlOdFlXZHVhV1o1WDNCcFl5Y3BPMXh5WEc0Z0lDQWdkbUZ5SUhSb2RXMWlhVzFuSUQwZ2JXRm5ibWxtZVY5d2FXTXVZWFIwY2lnbmMzSmpKeWs3WEhKY2JpQWdJQ0IyWVhJZ2NHRnlZVzF6SUQwZ2UxeHlYRzRnSUNBZ0lDQWdJSEJ5YjJSMVkzUkpaRG9nY0dGblpVUmhkR0V1Wm1sMFNXUXNYSEpjYmlBZ0lDQWdJQ0FnYkdGdVozVmhaMlU2SUhkbFlrUmhkR0V1YkdGdVp5eGNjbHh1SUNBZ0lDQWdJQ0IwYUhWdFlqb2dkR2gxYldKcGJXY3NYSEpjYmlBZ0lDQWdJQ0FnWTJ4dmMyVTZJR1oxYm1OMGFXOXVLSEJ5YjJSMVkzUkpaQ3dnYzJsNlpTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnZG1Gc0lEMGdKQ2hjSWk1d2NtOWtMV2x1Wm04dGMzUjViR1Z6SUNOZmMybDZaU0J2Y0hScGIyNWNJaWt1Wm1sc2RHVnlLR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUNRb2RHaHBjeWt1WVhSMGNpZ25hM1poYkhWbEp5a2dQVDBnYzJsNlpUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTa3VkbUZzS0NrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNRb0p5NXdjbTlrTFdsdVptOHRjM1I1YkdWeklDTmZjMmw2WlNjcExuWmhiQ2gyWVd3cExuUnlhV2RuWlhJb0oyTm9ZVzVuWlNjcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppaHphWHBsSUNFOUlEQXBlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHWnBkSE1nUFNCblpYUkdhWFJ6S0NrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1hWFJ6VzNCaFoyVkVZWFJoTG1kdmIyUnpYMmxrWFNBOUlITnBlbVU3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCelpYUkdhWFJ6S0dacGRITXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnZlN4Y2NseHVJQ0FnSUNBZ0lDQnNiMkZrT2lCbWRXNWpkR2x2Ymlod2NtOWtkV04wU1dRcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGtLQ2N1Y0hKdlpDMXBibVp2TFhOMGVXeGxjeUFqWDNOcGVtVW5LUzVvYVdSbEtDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDUW9KeU5tYVhSaGJtRnNlWFJwWTNNdGMybDZaUzFoWkhacGMyOXlKeWt1WW1sdVpDZ25ZMnhwWTJzbkxDQm1kVzVqZEdsdmJpZ3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhkcFpHZGxkQzV2Y0dWdUtDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBa0tDY2pabWwwWVc1aGJIbDBhV056TFhOcGVtVXRZV1IyYVhOdmNpY3BMbk5vYjNjb0tUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5TzF4eVhHNGdJQ0FnTHk5RmNuSnZjam9nYzI5dFpYUm9hVzVuSUhkbGJuUWdkM0p2Ym1kY2NseHVJQ0FnSUM4dmFXWW9kMlZpUkdGMFlTNXNZVzVuSUQwOUlDZGxiaWNnSmlZZ2QyVmlSR0YwWVM1amRYSnlaVzVqZVNBOVBTQW5SMEpRSnlsN1hISmNiaUFnSUNBdkx5QWdJQ0J3WVhKaGJYTXVjMmw2WlhOU1pXZHBiMjRnUFNBbloySW5PMXh5WEc0Z0lDQWdMeTk5WEhKY2JpQWdJQ0IyWVhJZ2QybGtaMlYwSUQwZ2JtVjNJRVpwZEVGdVlXeDVkR2xqYzFkcFpHZGxkQ2h3WVhKaGJYTXBPMXh5WEc1OU8xeHlYRzVjY2x4dVhISmNibmRwYm1SdmR5NWZabWwwUVc1aGJIbDBhV056VW1Wd2IzSjBVSFZ5WTJoaGMyVWdQU0JtZFc1amRHbHZiaWdwSUh0Y2NseHVJQ0FnSUdacGRITWdQU0JuWlhSR2FYUnpLQ2s3WEhKY2JpQWdJQ0JtYjNJb1ptbDBJR2x1SUdacGRITXBlMXh5WEc0Z0lDQWdJQ0FnSUdadmNpaHdjbTlrZFdOMElHbHVJSEJoWjJWRVlYUmhMbTl5WkdWeUxuQnliMlIxWTNSektYdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9abWwwY3k1cGJtUmxlRTltS0hCeWIyUjFZM1F1YVdRcElDRTlJQzB4S1h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJtYVhSemFYcGxJRDBnWm1sMGMxdHdjbTlrZFdOMExtbGtYVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUtHWnBkSE5wZW1VZ1BUMGdjSEp2WkhWamRDNXphWHBsS1h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IzYVc1a2IzY3VYM05sYm1SUWRYSmphR0Z6WlVsdVptOXliV0YwYVc5dUtIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEp2WkhWamRFbGtPaUJ3Y205a2RXTjBMbVpwZEVsa0xGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnZjbVJsY2tsa09pQWdJSEJoWjJWRVlYUmhMbTl5WkdWeUxuTnVMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IxYzJWeVNXUTZJSEJoWjJWRVlYUmhMbTl5WkdWeUxuVnpaWEpKWkN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NIVnlZMmhoYzJWa1UybDZaVG9nY0hKdlpIVmpkQzV6YVhwbExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnphWHBsVW1WbmFXOXVPaUJ2Y21SbGNpNXphWHBsVW1WbmFXOXVMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y21salpUb2djSEp2WkhWamRDNXdjbWxqWlN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kzVnljbVZ1WTNrNklHOXlaR1Z5TG1OMWNuSmxibU41WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQmpiR1ZoY2tacGRITW9LVHRjY2x4dWZUdGNjbHh1SWwxOSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbi8vZGVmaW5lKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHtcclxuXHJcbiAgICB2YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxuXHJcbiAgICB2YXIgQ29va2llID0gcmVxdWlyZSgnLi4vbW9kL2Nvb2tpZScpO1xyXG4gICAgdmFyIGNvb2tpZSA9IG5ldyBDb29raWUoKTtcclxuXHJcbiAgICB2YXIgTXlBcnJheSA9IHJlcXVpcmUoJy4uL21vZC9teUFycmF5Jyk7XHJcbiAgICB2YXIgbXlhcnIgPSBuZXcgTXlBcnJheSgpO1xyXG5cclxuICAgIHZhciBSZXF1ZXN0ID0gcmVxdWlyZSgnLi4vbW9kL3JlcXVlc3QnKTtcclxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBBQlRlc3QoKSB7XHJcbiAgICAgICAgdGhpcy5hYnRlc3RfY29uZmlnID0gd2ViRGF0YS5hYnRlc3Q7XHJcbiAgICB9XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEFCVGVzdDtcclxuXHJcbiAgICBBQlRlc3QucHJvdG90eXBlLmdldE9uZUluQ29uZmlnID0gZnVuY3Rpb24oY29va2llTmFtZSkge1xyXG4gICAgICAgIHZhciBhYnRlc3RfY29uZmlnID0gdGhpcy5hYnRlc3RfY29uZmlnO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhYnRlc3RfY29uZmlnLmxlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICB2YXIgb19jb29raWUgPSBhYnRlc3RfY29uZmlnW2ldO1xyXG4gICAgICAgICAgICBpZihvX2Nvb2tpZVsnY29va2llTmFtZSddID09IGNvb2tpZU5hbWUgJiYgb19jb29raWVbJ2lzQWN0aXZlJ10gJiYgbXlhcnIuaW5fYXJyYXkod2ViRGF0YS5sYW5nLCBvX2Nvb2tpZVsnbGFuZ3VhZ2VzJ10pKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9fY29va2llO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgQUJUZXN0LnByb3RvdHlwZS5nZXRPbmVJbkNvb2tpZSA9IGZ1bmN0aW9uKGNvb2tpZU5hbWUpIHtcclxuICAgICAgICB2YXIgYWJ0ZXN0X2Nvb2tpZSA9IGNvb2tpZS5nZXRDb29raWUoJ2FiVGVzdCcpID8gY29va2llLmdldENvb2tpZSgnYWJUZXN0JykgOiAnJztcclxuICAgICAgICBpZihhYnRlc3RfY29va2llLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgYWJ0ZXN0X2Nvb2tpZSA9IGFidGVzdF9jb29raWUuc3BsaXQoJywnKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYWJ0ZXN0X2Nvb2tpZS5sZW5ndGg7IGkgKyspIHtcclxuICAgICAgICAgICAgdmFyIGNfY29va2llID0gIGFidGVzdF9jb29raWVbaV0uc3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgaWYoY19jb29raWVbMF0gPT0gY29va2llTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNfY29va2llO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiDor6Xmk43kvZzlt7LlnKhwaHDnq6/miafooYxcclxuICAgICBBQlRlc3QucHJvdG90eXBlLnNldENvb2tpZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgIHZhciBhYnRlc3RfY29uZmlnID0gdGhpcy5hYnRlc3RfY29uZmlnO1xyXG4gICAgIHZhciBhYnRlc3RfY29va2llID0gY29va2llLmdldENvb2tpZSgnYWJUZXN0JykgPyBjb29raWUuZ2V0Q29va2llKCdhYlRlc3QnKSA6ICcnLFxyXG4gICAgIGFidGVzdF9jb29raWVfYXJyID0gYWJ0ZXN0X2Nvb2tpZS5zcGxpdCgnLCcpLFxyXG4gICAgIG5ld19jb29raWUgPSAnJyxcclxuICAgICBuZXdfY29va2llX2FyciA9IFtdLFxyXG4gICAgIHVuaXF1ZV9uYW1lcyA9IHt9O1xyXG4gICAgIGlmKGFidGVzdF9jb25maWcubGVuZ3RoID09IDApXHJcbiAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhYnRlc3RfY29uZmlnLmxlbmd0aDsgaSArKykge1xyXG4gICAgIHZhciBvX2Nvb2tpZSA9IGFidGVzdF9jb25maWdbaV0sXHJcbiAgICAgb19uYW1lID0gb19jb29raWVbJ2Nvb2tpZU5hbWUnXTtcclxuXHJcbiAgICAgLy9jb29raWUgbXVzdCBiZSB1bmlxdWUgYW5kIGFjdGl2ZVxyXG4gICAgIGlmICgodHlwZW9mKHVuaXF1ZV9uYW1lc1tvX25hbWVdKSAhPSAndW5kZWZpbmVkJykgfHwgKCEgb19jb29raWVbJ2lzQWN0aXZlJ10pKXtcclxuICAgICBjb250aW51ZTtcclxuICAgICB9XHJcbiAgICAgdW5pcXVlX25hbWVzW29fbmFtZV0gPSAxO1xyXG5cclxuICAgICB2YXIgb192YWx1ZXMgPSBvX2Nvb2tpZVsnY29va2llVmFsdWUnXSxcclxuICAgICBvX3JhdGUwID0gcGFyc2VJbnQob19jb29raWVbJ2Nvb2tpZVJhdGUnXVswXSksXHJcbiAgICAgb19yYXRlMSA9IHBhcnNlSW50KG9fY29va2llWydjb29raWVSYXRlJ11bMV0pO1xyXG5cclxuICAgICB2YXIgY19jb29raWUgPSBtZS5nZXRPbmVJbkNvb2tpZShvX25hbWUpO1xyXG4gICAgIGlmKGNfY29va2llICE9IGZhbHNlICYmIGNfY29va2llWzJdID09IG9fcmF0ZTAgJiYgY19jb29raWVbM10gPT0gb19yYXRlMSAmJiBteWFyci5pbl9hcnJheShjX2Nvb2tpZVsxXSwgb192YWx1ZXMpKSAge1xyXG4gICAgIG5ld19jb29raWVfYXJyLnB1c2goY19jb29raWUuam9pbignfCcpKTtcclxuICAgICBjb250aW51ZTtcclxuICAgICB9XHJcblxyXG4gICAgIHZhciByYW5kID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIChvX3JhdGUwICsgb19yYXRlMSkpICsgMTtcclxuICAgICB2YXIgb192YWx1ZSA9IChyYW5kIDw9IG9fcmF0ZTApID8gb192YWx1ZXNbMF0gOiBvX3ZhbHVlc1sxXTtcclxuICAgICBuZXdfY29va2llX2Fyci5wdXNoKG9fbmFtZSArICd8JyArIG9fdmFsdWUgKyAnfCcgKyBvX3JhdGUwICsgJ3wnICsgb19yYXRlMSk7XHJcbiAgICAgfVxyXG4gICAgIG5ld19jb29raWUgPSBuZXdfY29va2llX2Fyci5qb2luKCcsJyk7XHJcbiAgICAgaWYoYWJ0ZXN0X2Nvb2tpZSAhPSBuZXdfY29va2llKSB7XHJcbiAgICAgY29va2llLnNldENvb2tpZSgnYWJUZXN0JywgbmV3X2Nvb2tpZSwgMzY1KTtcclxuICAgICAvL2NvbnNvbGUubG9nKCdzZXRDb29raWU6ICcgKyBuZXdfY29va2llKTtcclxuICAgICB9XHJcbiAgICAgfVxyXG4gICAgICovXHJcblxyXG4gICAgQUJUZXN0LnByb3RvdHlwZS5nZXRDb29raWUgPSBmdW5jdGlvbiAoY29va2llTmFtZSkge1xyXG4gICAgICAgIHZhciBvX2Nvb2tpZSA9IHRoaXMuZ2V0T25lSW5Db25maWcoY29va2llTmFtZSk7XHJcbiAgICAgICAgdmFyIGNfY29va2llID0gdGhpcy5nZXRPbmVJbkNvb2tpZShjb29raWVOYW1lKTtcclxuICAgICAgICBpZighIG9fY29va2llIHx8ICEgY19jb29raWUpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdW5lc2NhcGUoY19jb29raWVbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIEFCVGVzdC5wcm90b3R5cGUuZ2V0VmVyc2lvbiA9IGZ1bmN0aW9uKGNvb2tpZU5hbWUpIHtcclxuICAgICAgICB2YXIgb19jb29raWUgPSB0aGlzLmdldE9uZUluQ29uZmlnKGNvb2tpZU5hbWUpO1xyXG4gICAgICAgIHZhciBjX2Nvb2tpZSA9IHRoaXMuZ2V0T25lSW5Db29raWUoY29va2llTmFtZSk7XHJcbiAgICAgICAgaWYoISBvX2Nvb2tpZSB8fCAhIGNfY29va2llKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIGNfdmFsdWUgPSB1bmVzY2FwZShjX2Nvb2tpZVsxXSk7XHJcblxyXG4gICAgICAgIHZhciBvX3ZhbHVlcyA9IG9fY29va2llWydjb29raWVWYWx1ZXMnXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgb192YWx1ZXMubGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgICAgIHZhciBvX3ZhbHVlID0gb192YWx1ZXNbaV1bJ2FjdGl2ZVZhbHVlcyddO1xyXG4gICAgICAgICAgICBpZihjX3ZhbHVlID09IG9fdmFsdWVbMF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnb2xkJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGNfdmFsdWUgPT0gb192YWx1ZVsxXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICduZXcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBBQlRlc3QucHJvdG90eXBlLnNldFVybCA9IGZ1bmN0aW9uIChjb250YWluZXIsIGF0dHJpYnV0ZSwgdXJsS2V5LCBjb29raWVOYW1lKSB7XHJcbiAgICAgICAgdmFyIHVybFZhbCA9IHRoaXMuZ2V0Q29va2llKGNvb2tpZU5hbWUpO1xyXG4gICAgICAgIGlmKCEgdXJsVmFsKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgJChjb250YWluZXIpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW0pIHtcclxuICAgICAgICAgICAgdmFyIHVybCA9ICQoZWxlbSkuYXR0cihhdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICBpZih1cmwubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB1cmxOZXcgPSByZXF1ZXN0LnNldE9uZSh1cmwsIHVybEtleSwgdXJsVmFsKTtcclxuICAgICAgICAgICAgJChlbGVtKS5hdHRyKGF0dHJpYnV0ZSwgdXJsTmV3KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbi8vfSk7XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltZGhaV0V2YW5NdmJXOWtMMkZpVkdWemRDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2WkdWbWFXNWxLR1oxYm1OMGFXOXVJQ2h5WlhGMWFYSmxMQ0JsZUhCdmNuUnpMQ0J0YjJSMWJHVXBJSHRjY2x4dVhISmNiaUFnSUNCMllYSWdKQ0E5SUNoMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJRDhnZDJsdVpHOTNXeWNrSjEwZ09pQjBlWEJsYjJZZ1oyeHZZbUZzSUNFOVBTQmNJblZ1WkdWbWFXNWxaRndpSUQ4Z1oyeHZZbUZzV3lja0oxMGdPaUJ1ZFd4c0tUdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ1EyOXZhMmxsSUQwZ2NtVnhkV2x5WlNnbkxpNHZiVzlrTDJOdmIydHBaU2NwTzF4eVhHNGdJQ0FnZG1GeUlHTnZiMnRwWlNBOUlHNWxkeUJEYjI5cmFXVW9LVHRjY2x4dVhISmNiaUFnSUNCMllYSWdUWGxCY25KaGVTQTlJSEpsY1hWcGNtVW9KeTR1TDIxdlpDOXRlVUZ5Y21GNUp5azdYSEpjYmlBZ0lDQjJZWElnYlhsaGNuSWdQU0J1WlhjZ1RYbEJjbkpoZVNncE8xeHlYRzVjY2x4dUlDQWdJSFpoY2lCU1pYRjFaWE4wSUQwZ2NtVnhkV2x5WlNnbkxpNHZiVzlrTDNKbGNYVmxjM1FuS1R0Y2NseHVJQ0FnSUhaaGNpQnlaWEYxWlhOMElEMGdibVYzSUZKbGNYVmxjM1FvS1R0Y2NseHVYSEpjYmlBZ0lDQm1kVzVqZEdsdmJpQkJRbFJsYzNRb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWhZblJsYzNSZlkyOXVabWxuSUQwZ2QyVmlSR0YwWVM1aFluUmxjM1E3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRUZDVkdWemREdGNjbHh1WEhKY2JpQWdJQ0JCUWxSbGMzUXVjSEp2ZEc5MGVYQmxMbWRsZEU5dVpVbHVRMjl1Wm1sbklEMGdablZ1WTNScGIyNG9ZMjl2YTJsbFRtRnRaU2tnZTF4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJoWW5SbGMzUmZZMjl1Wm1sbklEMGdkR2hwY3k1aFluUmxjM1JmWTI5dVptbG5PMXh5WEc0Z0lDQWdJQ0FnSUdadmNpaDJZWElnYVNBOUlEQTdJR2tnUENCaFluUmxjM1JmWTI5dVptbG5MbXhsYm1kMGFEc2dhU0FyS3lrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdiMTlqYjI5cmFXVWdQU0JoWW5SbGMzUmZZMjl1Wm1sblcybGRPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWh2WDJOdmIydHBaVnNuWTI5dmEybGxUbUZ0WlNkZElEMDlJR052YjJ0cFpVNWhiV1VnSmlZZ2IxOWpiMjlyYVdWYkoybHpRV04wYVhabEoxMGdKaVlnYlhsaGNuSXVhVzVmWVhKeVlYa29kMlZpUkdGMFlTNXNZVzVuTENCdlgyTnZiMnRwWlZzbmJHRnVaM1ZoWjJWekoxMHBLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRzlmWTI5dmEybGxPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ1FVSlVaWE4wTG5CeWIzUnZkSGx3WlM1blpYUlBibVZKYmtOdmIydHBaU0E5SUdaMWJtTjBhVzl1S0dOdmIydHBaVTVoYldVcElIdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ1lXSjBaWE4wWDJOdmIydHBaU0E5SUdOdmIydHBaUzVuWlhSRGIyOXJhV1VvSjJGaVZHVnpkQ2NwSUQ4Z1kyOXZhMmxsTG1kbGRFTnZiMnRwWlNnbllXSlVaWE4wSnlrZ09pQW5KenRjY2x4dUlDQWdJQ0FnSUNCcFppaGhZblJsYzNSZlkyOXZhMmxsTG14bGJtZDBhQ0E5UFNBd0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYSEpjYmlBZ0lDQWdJQ0FnWVdKMFpYTjBYMk52YjJ0cFpTQTlJR0ZpZEdWemRGOWpiMjlyYVdVdWMzQnNhWFFvSnl3bktUdGNjbHh1SUNBZ0lDQWdJQ0JtYjNJb2RtRnlJR2tnUFNBd095QnBJRHdnWVdKMFpYTjBYMk52YjJ0cFpTNXNaVzVuZEdnN0lHa2dLeXNwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHTmZZMjl2YTJsbElEMGdJR0ZpZEdWemRGOWpiMjlyYVdWYmFWMHVjM0JzYVhRb0ozd25LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvWTE5amIyOXJhV1ZiTUYwZ1BUMGdZMjl2YTJsbFRtRnRaU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOZlkyOXZhMmxsTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQXZLaURvcjZYbWs0M2t2WnpsdDdMbG5LaHdhSERucTYvbWlhZm9vWXhjY2x4dUlDQWdJQ0JCUWxSbGMzUXVjSEp2ZEc5MGVYQmxMbk5sZEVOdmIydHBaU0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDQjJZWElnYldVZ1BTQjBhR2x6TzF4eVhHNGdJQ0FnSUhaaGNpQmhZblJsYzNSZlkyOXVabWxuSUQwZ2RHaHBjeTVoWW5SbGMzUmZZMjl1Wm1sbk8xeHlYRzRnSUNBZ0lIWmhjaUJoWW5SbGMzUmZZMjl2YTJsbElEMGdZMjl2YTJsbExtZGxkRU52YjJ0cFpTZ25ZV0pVWlhOMEp5a2dQeUJqYjI5cmFXVXVaMlYwUTI5dmEybGxLQ2RoWWxSbGMzUW5LU0E2SUNjbkxGeHlYRzRnSUNBZ0lHRmlkR1Z6ZEY5amIyOXJhV1ZmWVhKeUlEMGdZV0owWlhOMFgyTnZiMnRwWlM1emNHeHBkQ2duTENjcExGeHlYRzRnSUNBZ0lHNWxkMTlqYjI5cmFXVWdQU0FuSnl4Y2NseHVJQ0FnSUNCdVpYZGZZMjl2YTJsbFgyRnljaUE5SUZ0ZExGeHlYRzRnSUNBZ0lIVnVhWEYxWlY5dVlXMWxjeUE5SUh0OU8xeHlYRzRnSUNBZ0lHbG1LR0ZpZEdWemRGOWpiMjVtYVdjdWJHVnVaM1JvSUQwOUlEQXBYSEpjYmlBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4eVhHNGdJQ0FnSUdadmNpaDJZWElnYVNBOUlEQTdJR2tnUENCaFluUmxjM1JmWTI5dVptbG5MbXhsYm1kMGFEc2dhU0FyS3lrZ2UxeHlYRzRnSUNBZ0lIWmhjaUJ2WDJOdmIydHBaU0E5SUdGaWRHVnpkRjlqYjI1bWFXZGJhVjBzWEhKY2JpQWdJQ0FnYjE5dVlXMWxJRDBnYjE5amIyOXJhV1ZiSjJOdmIydHBaVTVoYldVblhUdGNjbHh1WEhKY2JpQWdJQ0FnTHk5amIyOXJhV1VnYlhWemRDQmlaU0IxYm1seGRXVWdZVzVrSUdGamRHbDJaVnh5WEc0Z0lDQWdJR2xtSUNnb2RIbHdaVzltS0hWdWFYRjFaVjl1WVcxbGMxdHZYMjVoYldWZEtTQWhQU0FuZFc1a1pXWnBibVZrSnlrZ2ZId2dLQ0VnYjE5amIyOXJhV1ZiSjJselFXTjBhWFpsSjEwcEtYdGNjbHh1SUNBZ0lDQmpiMjUwYVc1MVpUdGNjbHh1SUNBZ0lDQjlYSEpjYmlBZ0lDQWdkVzVwY1hWbFgyNWhiV1Z6VzI5ZmJtRnRaVjBnUFNBeE8xeHlYRzVjY2x4dUlDQWdJQ0IyWVhJZ2IxOTJZV3gxWlhNZ1BTQnZYMk52YjJ0cFpWc25ZMjl2YTJsbFZtRnNkV1VuWFN4Y2NseHVJQ0FnSUNCdlgzSmhkR1V3SUQwZ2NHRnljMlZKYm5Rb2IxOWpiMjlyYVdWYkoyTnZiMnRwWlZKaGRHVW5YVnN3WFNrc1hISmNiaUFnSUNBZ2IxOXlZWFJsTVNBOUlIQmhjbk5sU1c1MEtHOWZZMjl2YTJsbFd5ZGpiMjlyYVdWU1lYUmxKMTFiTVYwcE8xeHlYRzVjY2x4dUlDQWdJQ0IyWVhJZ1kxOWpiMjlyYVdVZ1BTQnRaUzVuWlhSUGJtVkpia052YjJ0cFpTaHZYMjVoYldVcE8xeHlYRzRnSUNBZ0lHbG1LR05mWTI5dmEybGxJQ0U5SUdaaGJITmxJQ1ltSUdOZlkyOXZhMmxsV3pKZElEMDlJRzlmY21GMFpUQWdKaVlnWTE5amIyOXJhV1ZiTTEwZ1BUMGdiMTl5WVhSbE1TQW1KaUJ0ZVdGeWNpNXBibDloY25KaGVTaGpYMk52YjJ0cFpWc3hYU3dnYjE5MllXeDFaWE1wS1NBZ2UxeHlYRzRnSUNBZ0lHNWxkMTlqYjI5cmFXVmZZWEp5TG5CMWMyZ29ZMTlqYjI5cmFXVXVhbTlwYmlnbmZDY3BLVHRjY2x4dUlDQWdJQ0JqYjI1MGFXNTFaVHRjY2x4dUlDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lIWmhjaUJ5WVc1a0lEMGdjR0Z5YzJWSmJuUW9UV0YwYUM1eVlXNWtiMjBvS1NBcUlDaHZYM0poZEdVd0lDc2diMTl5WVhSbE1Ta3BJQ3NnTVR0Y2NseHVJQ0FnSUNCMllYSWdiMTkyWVd4MVpTQTlJQ2h5WVc1a0lEdzlJRzlmY21GMFpUQXBJRDhnYjE5MllXeDFaWE5iTUYwZ09pQnZYM1poYkhWbGMxc3hYVHRjY2x4dUlDQWdJQ0J1WlhkZlkyOXZhMmxsWDJGeWNpNXdkWE5vS0c5ZmJtRnRaU0FySUNkOEp5QXJJRzlmZG1Gc2RXVWdLeUFuZkNjZ0t5QnZYM0poZEdVd0lDc2dKM3duSUNzZ2IxOXlZWFJsTVNrN1hISmNiaUFnSUNBZ2ZWeHlYRzRnSUNBZ0lHNWxkMTlqYjI5cmFXVWdQU0J1WlhkZlkyOXZhMmxsWDJGeWNpNXFiMmx1S0Njc0p5azdYSEpjYmlBZ0lDQWdhV1lvWVdKMFpYTjBYMk52YjJ0cFpTQWhQU0J1WlhkZlkyOXZhMmxsS1NCN1hISmNiaUFnSUNBZ1kyOXZhMmxsTG5ObGRFTnZiMnRwWlNnbllXSlVaWE4wSnl3Z2JtVjNYMk52YjJ0cFpTd2dNelkxS1R0Y2NseHVJQ0FnSUNBdkwyTnZibk52YkdVdWJHOW5LQ2R6WlhSRGIyOXJhV1U2SUNjZ0t5QnVaWGRmWTI5dmEybGxLVHRjY2x4dUlDQWdJQ0I5WEhKY2JpQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNvdlhISmNibHh5WEc0Z0lDQWdRVUpVWlhOMExuQnliM1J2ZEhsd1pTNW5aWFJEYjI5cmFXVWdQU0JtZFc1amRHbHZiaUFvWTI5dmEybGxUbUZ0WlNrZ2UxeHlYRzRnSUNBZ0lDQWdJSFpoY2lCdlgyTnZiMnRwWlNBOUlIUm9hWE11WjJWMFQyNWxTVzVEYjI1bWFXY29ZMjl2YTJsbFRtRnRaU2s3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJR05mWTI5dmEybGxJRDBnZEdocGN5NW5aWFJQYm1WSmJrTnZiMnRwWlNoamIyOXJhV1ZPWVcxbEtUdGNjbHh1SUNBZ0lDQWdJQ0JwWmlnaElHOWZZMjl2YTJsbElIeDhJQ0VnWTE5amIyOXJhV1VwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RXNWxjMk5oY0dVb1kxOWpiMjlyYVdWYk1WMHBPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUVGQ1ZHVnpkQzV3Y205MGIzUjVjR1V1WjJWMFZtVnljMmx2YmlBOUlHWjFibU4wYVc5dUtHTnZiMnRwWlU1aGJXVXBJSHRjY2x4dUlDQWdJQ0FnSUNCMllYSWdiMTlqYjI5cmFXVWdQU0IwYUdsekxtZGxkRTl1WlVsdVEyOXVabWxuS0dOdmIydHBaVTVoYldVcE8xeHlYRzRnSUNBZ0lDQWdJSFpoY2lCalgyTnZiMnRwWlNBOUlIUm9hWE11WjJWMFQyNWxTVzVEYjI5cmFXVW9ZMjl2YTJsbFRtRnRaU2s3WEhKY2JpQWdJQ0FnSUNBZ2FXWW9JU0J2WDJOdmIydHBaU0I4ZkNBaElHTmZZMjl2YTJsbEtWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlHTmZkbUZzZFdVZ1BTQjFibVZ6WTJGd1pTaGpYMk52YjJ0cFpWc3hYU2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFpoY2lCdlgzWmhiSFZsY3lBOUlHOWZZMjl2YTJsbFd5ZGpiMjlyYVdWV1lXeDFaWE1uWFR0Y2NseHVJQ0FnSUNBZ0lDQm1iM0lvZG1GeUlHa2dQU0F3T3lCcElEd2diMTkyWVd4MVpYTXViR1Z1WjNSb095QnBJQ3NyS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQnZYM1poYkhWbElEMGdiMTkyWVd4MVpYTmJhVjFiSjJGamRHbDJaVlpoYkhWbGN5ZGRPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWhqWDNaaGJIVmxJRDA5SUc5ZmRtRnNkV1ZiTUYwcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQW5iMnhrSnp0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtS0dOZmRtRnNkV1VnUFQwZ2IxOTJZV3gxWlZzeFhTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJQ2R1Wlhjbk8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JCUWxSbGMzUXVjSEp2ZEc5MGVYQmxMbk5sZEZWeWJDQTlJR1oxYm1OMGFXOXVJQ2hqYjI1MFlXbHVaWElzSUdGMGRISnBZblYwWlN3Z2RYSnNTMlY1TENCamIyOXJhV1ZPWVcxbEtTQjdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlIVnliRlpoYkNBOUlIUm9hWE11WjJWMFEyOXZhMmxsS0dOdmIydHBaVTVoYldVcE8xeHlYRzRnSUNBZ0lDQWdJR2xtS0NFZ2RYSnNWbUZzS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hISmNiaUFnSUNBZ0lDQWdKQ2hqYjI1MFlXbHVaWElwTG1WaFkyZ29ablZ1WTNScGIyNG9hVzVrWlhnc0lHVnNaVzBwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlIVnliQ0E5SUNRb1pXeGxiU2t1WVhSMGNpaGhkSFJ5YVdKMWRHVXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWgxY213dWJHVnVaM1JvSUR3Z01Ta2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQjFjbXhPWlhjZ1BTQnlaWEYxWlhOMExuTmxkRTl1WlNoMWNtd3NJSFZ5YkV0bGVTd2dkWEpzVm1Gc0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0pDaGxiR1Z0S1M1aGRIUnlLR0YwZEhKcFluVjBaU3dnZFhKc1RtVjNLVHRjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpOHZmU2s3SWwxOSIsIi8vZGVmaW5lKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHtcclxuXHJcblx0ZnVuY3Rpb24gQ29va2llKCkge31cclxuXHRtb2R1bGUuZXhwb3J0cyA9IENvb2tpZTtcclxuXHR2YXIgY29va2llX2RvbWFpbiA9IHdlYkRhdGEuY29va2llX2RvbWFpblxyXG5cdFxyXG5cdENvb2tpZS5wcm90b3R5cGUuc2V0Q29va2llID0gZnVuY3Rpb24gKE5hbWVPZkNvb2tpZSwgdmFsdWUsIGV4cGlyZWRheXMsIGRvbWFpbikge1xyXG5cdFx0aWYgKGV4cGlyZWRheXMgPT0gbnVsbCB8fCBleHBpcmVkYXlzID09IHVuZGVmaW5lZCB8fCBleHBpcmVkYXlzID09ICcnIHx8IGlzTmFOKGV4cGlyZWRheXMpKSB7XHJcblx0XHRcdGV4cGlyZWRheXMgPSAzNjU7XHJcblx0XHR9XHJcblx0XHR2YXIgRXhwaXJlRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHRFeHBpcmVEYXRlLnNldFRpbWUoRXhwaXJlRGF0ZS5nZXRUaW1lKCkgKyAoZXhwaXJlZGF5cyAqIDI0ICogMzYwMCAqIDEwMDApKTtcclxuXHRcdGRvbWFpbiA9IGRvbWFpbiA/IGRvbWFpbiA6IGNvb2tpZV9kb21haW5cclxuICAgICAgICB2YXIgX2RvbWFpbiA9IGRvbWFpbiA/IFwiO2RvbWFpbj1cIiArIGRvbWFpbiA6IFwiXCJcclxuXHRcdGRvY3VtZW50LmNvb2tpZSA9IE5hbWVPZkNvb2tpZSArIFwiPVwiICsgZXNjYXBlKHZhbHVlKSArIF9kb21haW4gKyAoKGV4cGlyZWRheXMgPT0gbnVsbCkgPyBcIlwiOiBcIjtwYXRoPS87IGV4cGlyZXM9XCIgKyBFeHBpcmVEYXRlLnRvR01UU3RyaW5nKCkpO1xyXG5cdH1cclxuXHJcblx0Q29va2llLnByb3RvdHlwZS5nZXRDb29raWUgPSBmdW5jdGlvbiAoTmFtZU9mQ29va2llKSB7XHJcblx0XHRpZiAoZG9jdW1lbnQuY29va2llLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0YmVnaW4gPSBkb2N1bWVudC5jb29raWUuaW5kZXhPZihOYW1lT2ZDb29raWUgKyBcIj1cIik7XHJcblx0XHRcdGlmIChiZWdpbiAhPSAtMSkge1xyXG5cdFx0XHRcdGJlZ2luICs9IE5hbWVPZkNvb2tpZS5sZW5ndGggKyAxO1xyXG5cdFx0XHRcdGVuZCA9IGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKFwiO1wiLCBiZWdpbik7XHJcblx0XHRcdFx0aWYgKGVuZCA9PSAtMSkgZW5kID0gZG9jdW1lbnQuY29va2llLmxlbmd0aDtcclxuXHRcdFx0XHRyZXR1cm4gdW5lc2NhcGUoZG9jdW1lbnQuY29va2llLnN1YnN0cmluZyhiZWdpbiwgZW5kKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHRcclxuLy99KTtcclxuIiwiLy9kZWZpbmUoZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSkge1xyXG5cdFxyXG4gICAgdmFyIGxvYWRKUyA9IGZ1bmN0aW9uIChpZCwgc3JjKSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkgcmV0dXJuO1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xyXG4gICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICBzY3JpcHQuaWQgPSBpZDtcclxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xyXG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBsb2FkU29jaWFsSlMgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBcImZhY2Vib29rXCIgOiBcIi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvc2RrLmpzI3hmYm1sPTEmdmVyc2lvbj12Mi4zJmFwcElkPVwiICsgd2ViRGF0YS5mYl9hcHAsXHJcbiAgICAgICAgICAgIFwidHdpdHRlclwiIDogXCJodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanNcIixcclxuICAgICAgICAgICAgXCJwaW5pdFwiIDogXCIvL2Fzc2V0cy5waW50ZXJlc3QuY29tL2pzL3Bpbml0LmpzXCIsXHJcbiAgICAgICAgICAgIFwiZ3BsdXNvbmVcIiA6IFwiaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvcGx1c29uZS5qc1wiLFxyXG4gICAgICAgICAgICBcImxpdmVjaGF0XCIgOiAoJ2h0dHBzOicgPT0gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgPyAnaHR0cHM6Ly8nIDogJ2h0dHA6Ly8nKSArICdjZG4ubGl2ZWNoYXRpbmMuY29tL3RyYWNraW5nLmpzJyxcclxuICAgICAgICAgICAgXCJnbWFpbFwiIDogXCJodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9wbGF0Zm9ybS5qcz9vbmxvYWQ9Z21haWxMb2FkQ2FsbGJhY2tcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGlmKGtleSA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgbG9hZEpTKGlkICsgJy1zZGsnLCBjb25maWdba2V5XSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAgICAgXCJsb2FkSlNcIjogbG9hZEpTLFxyXG4gICAgICAgIFwibG9hZFNvY2lhbEpTXCI6IGxvYWRTb2NpYWxKU1xyXG4gICAgfTtcclxuXHJcbi8vfSk7IiwiLy9kZWZpbmUoZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSkge1xyXG5cdFxyXG5cdGZ1bmN0aW9uIE15QXJyYXkoKSB7fVxyXG5cdG1vZHVsZS5leHBvcnRzID0gTXlBcnJheTtcclxuXHJcblx0TXlBcnJheS5wcm90b3R5cGUuaW5fYXJyYXkgPSBmdW5jdGlvbiAoZWxlbSwgYXJyKSB7XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0aWYoYXJyW2ldID09IGVsZW0pXHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cdFxyXG5cdE15QXJyYXkucHJvdG90eXBlLmdldEluZGV4ID0gZnVuY3Rpb24gKGVsZW0sIGFycikge1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGlmKGFycltpXSA9PSBlbGVtKVxyXG5cdFx0XHRcdHJldHVybiBpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcbi8vfSk7XHJcbiIsInZhciBvcGVuSW5Qb3B1cCA9ICBmdW5jdGlvbiAob3Blbikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh1cmwsIG5hbWUsIHcsIGgpIHtcclxuICAgICAgICB2YXIgdyA9IHBhcnNlSW50KHcpIHx8IDQ3NTtcclxuICAgICAgICB2YXIgaCA9IHBhcnNlSW50KGgpIHx8IDE4MztcclxuICAgICAgICAvLyBGaXhlcyBkdWFsLXNjcmVlbiBwb3NpdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICBNb3N0IGJyb3dzZXJzICAgICAgRmlyZWZveFxyXG4gICAgICAgIHZhciBkdWFsU2NyZWVuTGVmdCA9IHdpbmRvdy5zY3JlZW5MZWZ0ICE9IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogc2NyZWVuLmxlZnQ7XHJcbiAgICAgICAgdmFyIGR1YWxTY3JlZW5Ub3AgPSB3aW5kb3cuc2NyZWVuVG9wICE9IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5Ub3AgOiBzY3JlZW4udG9wO1xyXG5cclxuICAgICAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA/IHdpbmRvdy5pbm5lcldpZHRoIDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDogc2NyZWVuLndpZHRoO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA6IHNjcmVlbi5oZWlnaHQ7XHJcblxyXG4gICAgICAgIHZhciBsZWZ0ID0gKCh3aWR0aCAvIDIpIC0gKHcgLyAyKSkgKyBkdWFsU2NyZWVuTGVmdDtcclxuICAgICAgICB2YXIgdG9wID0gKChoZWlnaHQgLyAyKSAtIChoIC8gMikpICsgZHVhbFNjcmVlblRvcDtcclxuICAgICAgICB2YXIgb3ZlcnJpZGVfZmVhdHVyZXMgPSAnd2lkdGg9JyArIHcgKyAnLGhlaWdodD0nICsgaCArICcsbGVmdD0nICsgbGVmdCArICcsdG9wPScgKyB0b3AgKyAnLHNjcm9sbGJhcnM9MSxsb2NhdGlvbj0xLHRvb2xiYXI9MCc7XHJcblxyXG4gICAgICAgIC8vIHNldCBuYW1lIGlmIG1pc3NpbmcgaGVyZVxyXG4gICAgICAgIC8vbmFtZSA9IG5hbWUgfHwgXCJkZWZhdWx0X3dpbmRvd19uYW1lXCI7XHJcbiAgICAgICAgcmV0dXJuIG9wZW4uY2FsbCh3aW5kb3csIHVybCwgbmFtZSwgb3ZlcnJpZGVfZmVhdHVyZXMpO1xyXG4gICAgfTtcclxufSh3aW5kb3cub3Blbik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG9wZW5JblBvcHVwO1xyXG4iLCIvL2RlZmluZShmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgbW9kdWxlKSB7XHJcblxyXG5cdGZ1bmN0aW9uIFJlcXVlc3QoKSB7fVxyXG5cdG1vZHVsZS5leHBvcnRzID0gUmVxdWVzdDtcclxuXHJcblx0UmVxdWVzdC5wcm90b3R5cGUuZ2V0QWxsID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIHVybCA9IGxvY2F0aW9uLnNlYXJjaDtcclxuXHRcdHZhciByZXF1ZXN0cyA9IG5ldyBPYmplY3QoKTtcclxuXHRcdGlmICh1cmwuaW5kZXhPZihcIj9cIikgIT0gLTEpIHtcclxuXHRcdFx0dmFyIHN0ciA9IHVybC5zdWJzdHIoMSk7XHJcblx0XHRcdHN0cnMgPSBzdHIuc3BsaXQoXCImXCIpO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0cnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRyZXF1ZXN0c1tzdHJzW2ldLnNwbGl0KFwiPVwiKVswXV0gPSB1bmVzY2FwZShzdHJzW2ldLnNwbGl0KFwiPVwiKVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXF1ZXN0cztcclxuXHR9XHJcblx0XHJcblx0UmVxdWVzdC5wcm90b3R5cGUuZ2V0T25lID0gZnVuY3Rpb24gKGtleSkge1xyXG5cdFx0dmFyIHJlcXVlc3RzID0gdGhpcy5nZXRBbGwoKTtcclxuXHRcdHJldHVybiByZXF1ZXN0c1trZXldO1xyXG5cdH1cclxuXHRcclxuXHRSZXF1ZXN0LnByb3RvdHlwZS5zZXRPbmUgPSBmdW5jdGlvbiAodXJsLCBrZXksIHZhbCkge1xyXG5cdFx0dmFyIHVybF9uZXcgPSAnJztcclxuXHRcdGlmKHVybC5pbmRleE9mKCc/JyArIGtleSArICc9JykgIT0gLTEgfHwgdXJsLmluZGV4T2YoJyYnICsga2V5ICsgJz0nKSAhPSAtMSkge1xyXG5cdFx0XHRyZXR1cm4gdXJsO1xyXG5cdFx0fSBlbHNlIGlmICh1cmwuaW5kZXhPZignPycpICE9IC0xKSB7XHJcblx0XHRcdHVybF9uZXcgPSB1cmwucmVwbGFjZSgnPycsICc/JyArIGtleSArICc9JyArIHZhbCArICcmJyk7XHJcblx0XHR9IGVsc2UgaWYodXJsLmluZGV4T2YoJyMnKSAhPSAtMSkge1xyXG5cdFx0XHR1cmxfbmV3ID0gdXJsLnJlcGxhY2UoJyMnLCAnPycgKyBrZXkgKyAnPScgKyB2YWwgKyAnIycpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dXJsX25ldyA9IHVybCArICc/JyArIGtleSArICc9JyArIHZhbDtcclxuXHRcdH1cclxuXHRcdHJldHVybiB1cmxfbmV3O1xyXG5cdH1cclxuXHJcbi8vfSk7XHJcbiIsIi8vZGVmaW5lKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHtcclxuXHJcbiAgICB2YXIgQUJUZXN0ID0gcmVxdWlyZSgnLi4vbW9kL2FiVGVzdCcpO1xyXG4gICAgdmFyIGFiVGVzdCA9IG5ldyBBQlRlc3QoKTtcclxuXHJcbiAgICB2YXIgUmVxdWVzdCA9IHJlcXVpcmUoJy4uL21vZC9yZXF1ZXN0Jyk7XHJcbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gVHJhY2tlcigpIHtcclxuICAgICAgICB0aGlzLmFuYWx5dGljcyA9IHdlYkRhdGEuYW5hbHl0aWNzO1xyXG4gICAgICAgIHRoaXMuYWJ0ZXN0X2NvbmZpZyA9IHdlYkRhdGEuYWJ0ZXN0O1xyXG4gICAgfVxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBUcmFja2VyO1xyXG5cclxuICAgIFRyYWNrZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwpIHtcclxuICAgICAgICAvLyBnYeWIneWni+WMluS7o+eggeWcqOaooeadvyBhbmFseXRpY3NfdHJhY2tpbmcuaHRtIOS4rVxyXG4gICAgICAgIGlmKHR5cGVvZihfZ2FxKSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB2YXIgYW5hbHl0aWNzID0gdGhpcy5hbmFseXRpY3M7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgIGZvcih2YXIgYW5hbHl0aWNzX2lkIGluIGFuYWx5dGljcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHByZWZpeCA9IChpbmRleCAhPSAwKSA/IChTdHJpbmcuZnJvbUNoYXJDb2RlKDk3ICsgaW5kZXgpICsgJy4nKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgX2dhcS5wdXNoKFtwcmVmaXggKyAnX3RyYWNrRXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbF0pO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjYXRlZ29yeSArICcsICcgKyBhY3Rpb24gKyAnLCAnICsgbGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgaW5kZXggKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/ov73ouKphYnRlc3RfY29uZmln5Lit55qE5p+Q5LiqQS9CdGVzdFxyXG4gICAgVHJhY2tlci5wcm90b3R5cGUuc2VuZE9uZSA9IGZ1bmN0aW9uIChjb29raWVOYW1lLCBhY3Rpb24sIGxhYmVsUHJlZml4KSB7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcztcclxuICAgICAgICB2YXIgdmVyc2lvbiA9IGFiVGVzdC5nZXRWZXJzaW9uKGNvb2tpZU5hbWUpO1xyXG4gICAgICAgIHZhciBvX2Nvb2tpZSA9IGFiVGVzdC5nZXRPbmVJbkNvbmZpZyhjb29raWVOYW1lKTtcclxuICAgICAgICBpZighIHZlcnNpb24gfHwgISBvX2Nvb2tpZSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBpZih2ZXJzaW9uID09ICdvbGQnKSB7XHJcbiAgICAgICAgICAgIG1lLnNlbmQob19jb29raWVbJ2NhdGVnb3J5J10sIGFjdGlvbiwgbGFiZWxQcmVmaXggKyAwICsgJ18nICsgY29va2llTmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHZlcnNpb24gPT0gJ25ldycpIHtcclxuICAgICAgICAgICAgbWUuc2VuZChvX2Nvb2tpZVsnY2F0ZWdvcnknXSwgYWN0aW9uLCBsYWJlbFByZWZpeCArIDEgKyAnXycgKyBjb29raWVOYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5qC55o2udXJs55qE5Y+C5pWw6L+96LiqYWJ0ZXN0X2NvbmZpZ+S4reeahOafkOS4qkEvQnRlc3RcclxuICAgIFRyYWNrZXIucHJvdG90eXBlLnNlbmRPbmVCeVVybCA9IGZ1bmN0aW9uIChjb29raWVOYW1lLCB1cmxLZXksIGFjdGlvbiwgbGFiZWxQcmVmaXgpIHtcclxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgICAgIHZhciB1cmxWYWwgPSByZXF1ZXN0LmdldE9uZSh1cmxLZXkpO1xyXG4gICAgICAgIGlmKHVybFZhbCkge1xyXG4gICAgICAgICAgICB2YXIgb19jb29raWUgPSBhYlRlc3QuZ2V0T25lSW5Db25maWcoY29va2llTmFtZSk7XHJcbiAgICAgICAgICAgIGlmKCEgb19jb29raWUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZih1cmxWYWwgPT0gb19jb29raWVbJ2Nvb2tpZVZhbHVlJ11bMF0pIHtcclxuICAgICAgICAgICAgICAgIG1lLnNlbmQob19jb29raWVbJ2NhdGVnb3J5J10sIGFjdGlvbiwgbGFiZWxQcmVmaXggKyAwICsgJ18nICsgdXJsVmFsKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHVybFZhbCA9PSBvX2Nvb2tpZVsnY29va2llVmFsdWUnXVsxXSkge1xyXG4gICAgICAgICAgICAgICAgbWUuc2VuZChvX2Nvb2tpZVsnY2F0ZWdvcnknXSwgYWN0aW9uLCBsYWJlbFByZWZpeCArIDEgKyAnXycgKyB1cmxWYWwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v6L+96LiqYWJ0ZXN0X2NvbmZpZ+S4reeahOaJgOaciUEvQnRlc3RcclxuICAgIFRyYWNrZXIucHJvdG90eXBlLnNlbmRBbGwgPSBmdW5jdGlvbiAoYWN0aW9uLCBsYWJlbFByZWZpeCkge1xyXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGFidGVzdF9jb25maWcgPSBtZS5hYnRlc3RfY29uZmlnO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhYnRlc3RfY29uZmlnLmxlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICB2YXIgb19uYW1lID0gYWJ0ZXN0X2NvbmZpZ1tpXVsnY29va2llTmFtZSddO1xyXG4gICAgICAgICAgICBtZS5zZW5kT25lKG9fbmFtZSwgYWN0aW9uLCBsYWJlbFByZWZpeCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuLy99KTsiLCIvL2RlZmluZShmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgbW9kdWxlKSB7XHJcbiAgIHZhciBvcGVuSW5Qb3B1cCA9IHJlcXVpcmUoJy4uL21vZC9vcGVuSW5Qb3B1cCcpO1xyXG4gICB2YXIgaW5pdCA9IGZ1bmN0aW9uKEZCQXBwSWQpIHtcclxuICAgICAgICBpZiAoIUZCQXBwSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRkIuaW5pdCh7XHJcbiAgICAgICAgICAgIGFwcElkIDogRkJBcHBJZCxcclxuICAgICAgICAgICAgc3RhdHVzIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvb2tpZSA6IHRydWUsXHJcbiAgICAgICAgICAgIHhmYm1sIDogdHJ1ZSxcclxuICAgICAgICAgICAgb2F1dGggOiB0cnVlLFxyXG4gICAgICAgICAgICB2ZXJzaW9uIDogJ3YyLjMnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgdmFyIHNoYXJlR29vZHNQaWMgPSBmdW5jdGlvbiAobGluaywgcGljVXJsLCBuYW1lLCBjYXB0aW9uLCBkZXNjcmlwdGlvbiwgcGFnZVR5cGUpIHtcclxuICAgICAgIHdpbmRvdy5vcGVuID0gb3BlbkluUG9wdXA7XHJcbiAgICAgICBGQi51aSh7XHJcbiAgICAgICAgICAgbWV0aG9kOiAnZmVlZCcsXHJcbiAgICAgICAgICAgZGlzcGxheTogJ3BvcHVwJyxcclxuICAgICAgICAgICBsaW5rOiBsaW5rLFxyXG4gICAgICAgICAgIHBpY3R1cmU6IHBpY1VybCxcclxuICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgIGNhcHRpb246IGNhcHRpb24sXHJcbiAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXHJcbiAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgICAgd2luZG93Lm9wZW4gPSB3aW5kb3cub3JpZ2luT3BlbjtcclxuICAgICAgICAgICB2YXIgU0hBUkVfU1VDQ19DT05TVCA9IDFcclxuICAgICAgICAgICB2YXIgU0hBUkVfRkFJTF9DT05TVCA9IDBcclxuICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmVycm9yX21lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgd2luZG93LmRhdGFMYXllci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICdzbnNQYWdlVHlwZScgOiBwYWdlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICdldmVudCcgOiAnZmJTaGFyZVN1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAvLyB0cmFja0ZhY2Vib29rU2hhcmUobGluaywgcGljVXJsLCBjYXB0aW9uLCBTSEFSRV9TVUNDX0NPTlNUKVxyXG4gICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgIC8vb25seSByZWNvcmQgd2hlbiBmYWlsXHJcbiAgICAgICAgICAgICAgIHRyYWNrRmFjZWJvb2tTaGFyZShsaW5rLCBwaWNVcmwsIGNhcHRpb24sIFNIQVJFX0ZBSUxfQ09OU1QpXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICB2YXIgdHJhY2tGYWNlYm9va1NoYXJlID0gZnVuY3Rpb24gKGxpbmssIHBpY1VybCwgY2FwdGlvbiwgc3RhdHVzKSB7XHJcbiAgICAgICB2YXIgZ29vZHNJZCA9IGxpbmsucmVwbGFjZSgvLiotZyhbMC05XSspLiovLCBcIiQxXCIpXHJcbiAgICAgICBpZihnb29kc0lkID09IGxpbmspIHJldHVyblxyXG4gICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICBcInR5cGVcIjogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgXCJ1cmxcIjogd2ViRGF0YS5XRUJfUk9PVCArIFwiYWpheC5waHBcIixcclxuICAgICAgICAgICBcImRhdGFcIjogXCJhY3Q9c25zX3NoYXJlX2RhdGFfcmVjb3JkJmdvb2RzX2lkPVwiICsgZ29vZHNJZCArIFwiJmRvbWFpbj1cIiArIGNhcHRpb24gKyBcIiZzaGFyZV9zdGF0dXM9XCIgKyBzdGF0dXMgKyBcIiZzbnNfdHlwZT1mYWNlYm9va1wiLFxyXG4gICAgICAgICAgIFwiY2FjaGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgXCJkYXRhVHlwZVwiOiBcImpzb25cIlxyXG4gICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICAgICBcImluaXRcIjogaW5pdCxcclxuICAgICAgICBcInNoYXJlR29vZHNQaWNcIjogc2hhcmVHb29kc1BpY1xyXG4gICAgfTtcclxuLy99KTsiLCIvLyByZXF1aXJlKCcuL2NvbW1vbicpXHJcbnJlcXVpcmUoJy4uL2NoZWNrb3V0L2Nrc3VjX3RyYWNrJykuaW5pdCgpOyAvL3RyYWNrIEFCVGVzdFxyXG5yZXF1aXJlKCcuLi9nb29kcy9maXRfYW5hbHl0aWNzJyk7IC8vZml0IGFuYWx5dGljc1xyXG5yZXF1aXJlKCcuLi9jaGVja291dC9jaGVja291dF9zaGFyZScpOyAvL2NoZWNrb3V0IHNoYXJlXHJcbnJlcXVpcmUoJy4uL2NoZWNrb3V0L3F1ZXN0aW9ubmFpcmUnKS5pbml0KCk7IC8vY2VoY2tvdXRfc3VjY2VzcyBxdWVzdGlvbm5haXJlXHJcbi8vIHJlcXVpcmUoJy4uL2NoZWNrb3V0L2VtYWlsX3NoYXJlJykuaW5pdCgpOyAvL2VtYWlsIHNoYXJlIGluaXQiXX0=

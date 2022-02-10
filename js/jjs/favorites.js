require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
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
},{"../mod/cookie":4,"../mod/stringHandle":9,"../mod/userAgent":10}],3:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
var Cookie = require('../mod/cookie');
var Facebook = require('../socialMedia/facebook');
require('../mod/md5');
var cookie = new Cookie();
window.dataLayer = window.dataLayer || [];
$(window).load(function(){
    var loader = require('../mod/loader');
    loader.loadSocialJS('facebook');
    loader.loadSocialJS('pinit');
    loader.loadSocialJS('gplusone');

    // Facebook share button show, when the js has been loaded.
    (function() {
        var MAX_TRY = 10;
        var try_i = 0;

        (function share() {
            if(typeof(FB) === 'undefined' || !webData.fb_app) {
                if (try_i++ < MAX_TRY) {
                    setTimeout(share, 500);
                }
            }
            else {
                Facebook.init();
                $('.fb_icon').on('click', function() {
                    window.dataLayer.push({
                        'snsPageType' : 'favorites',
                        'event' : 'fbBtnClick'
                    });

                    Facebook.shareGoodsPic(
                        $(this).attr('data-url'),
                        $(this).attr('data-image'),
                        $(this).attr('data-title'),
                        $(this).attr('data-site-name'),
                        $(this).attr('data-description'),
                        'favorites'
                    );
                });
            }
        })();
    })();

    var favList = $('.fav-prod-list');

    favList.find('.pint_icon').on("click", function() {
        window.dataLayer.push({
            'snsPageType' : 'favorites',
            'event' : 'pintBtnClick'
        });

        pintUrl = $(this).attr('data-href');
        window.open(pintUrl,this.window,'height=320,width=700,top='+($(window).height()/3)+',left='+($(window).width()/3));
        return false;
    });

    favList.find('.twitter_icon').on("click", function() {
        window.dataLayer.push({
            'snsPageType' : 'favorites',
            'event' : 'twitBtnClick'
        });

        twitUrl = $(this).attr('data-href');
        window.open(twitUrl,this.window,'height=320,width=700,top='+($(window).height()/3)+',left='+($(window).width()/3));
        return false;
    });

    favList.find('.gplusone_icon').on("click", function() {
        window.dataLayer.push({
            'snsPageType' : 'favorites',
            'event' : 'gplusBtnClick'
        });

        gplusUrl = $(this).attr('data-href');
        window.open(gplusUrl,this.window,'height=320,width=700,top='+($(window).height()/3)+',left='+($(window).width()/3));
        return false;
    });
});


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvZmF2b3JpdGVzL3NoYXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG52YXIgQ29va2llID0gcmVxdWlyZSgnLi4vbW9kL2Nvb2tpZScpO1xyXG52YXIgRmFjZWJvb2sgPSByZXF1aXJlKCcuLi9zb2NpYWxNZWRpYS9mYWNlYm9vaycpO1xyXG5yZXF1aXJlKCcuLi9tb2QvbWQ1Jyk7XHJcbnZhciBjb29raWUgPSBuZXcgQ29va2llKCk7XHJcbndpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpe1xyXG4gICAgdmFyIGxvYWRlciA9IHJlcXVpcmUoJy4uL21vZC9sb2FkZXInKTtcclxuICAgIGxvYWRlci5sb2FkU29jaWFsSlMoJ2ZhY2Vib29rJyk7XHJcbiAgICBsb2FkZXIubG9hZFNvY2lhbEpTKCdwaW5pdCcpO1xyXG4gICAgbG9hZGVyLmxvYWRTb2NpYWxKUygnZ3BsdXNvbmUnKTtcclxuXHJcbiAgICAvLyBGYWNlYm9vayBzaGFyZSBidXR0b24gc2hvdywgd2hlbiB0aGUganMgaGFzIGJlZW4gbG9hZGVkLlxyXG4gICAgKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBNQVhfVFJZID0gMTA7XHJcbiAgICAgICAgdmFyIHRyeV9pID0gMDtcclxuXHJcbiAgICAgICAgKGZ1bmN0aW9uIHNoYXJlKCkge1xyXG4gICAgICAgICAgICBpZih0eXBlb2YoRkIpID09PSAndW5kZWZpbmVkJyB8fCAhd2ViRGF0YS5mYl9hcHApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0cnlfaSsrIDwgTUFYX1RSWSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoc2hhcmUsIDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBGYWNlYm9vay5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuZmJfaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzbnNQYWdlVHlwZScgOiAnZmF2b3JpdGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JyA6ICdmYkJ0bkNsaWNrJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBGYWNlYm9vay5zaGFyZUdvb2RzUGljKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtdXJsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignZGF0YS1pbWFnZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtdGl0bGUnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdkYXRhLXNpdGUtbmFtZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtZGVzY3JpcHRpb24nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Zhdm9yaXRlcydcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSgpO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICB2YXIgZmF2TGlzdCA9ICQoJy5mYXYtcHJvZC1saXN0Jyk7XHJcblxyXG4gICAgZmF2TGlzdC5maW5kKCcucGludF9pY29uJykub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goe1xyXG4gICAgICAgICAgICAnc25zUGFnZVR5cGUnIDogJ2Zhdm9yaXRlcycsXHJcbiAgICAgICAgICAgICdldmVudCcgOiAncGludEJ0bkNsaWNrJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwaW50VXJsID0gJCh0aGlzKS5hdHRyKCdkYXRhLWhyZWYnKTtcclxuICAgICAgICB3aW5kb3cub3BlbihwaW50VXJsLHRoaXMud2luZG93LCdoZWlnaHQ9MzIwLHdpZHRoPTcwMCx0b3A9JysoJCh3aW5kb3cpLmhlaWdodCgpLzMpKycsbGVmdD0nKygkKHdpbmRvdykud2lkdGgoKS8zKSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZmF2TGlzdC5maW5kKCcudHdpdHRlcl9pY29uJykub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goe1xyXG4gICAgICAgICAgICAnc25zUGFnZVR5cGUnIDogJ2Zhdm9yaXRlcycsXHJcbiAgICAgICAgICAgICdldmVudCcgOiAndHdpdEJ0bkNsaWNrJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0d2l0VXJsID0gJCh0aGlzKS5hdHRyKCdkYXRhLWhyZWYnKTtcclxuICAgICAgICB3aW5kb3cub3Blbih0d2l0VXJsLHRoaXMud2luZG93LCdoZWlnaHQ9MzIwLHdpZHRoPTcwMCx0b3A9JysoJCh3aW5kb3cpLmhlaWdodCgpLzMpKycsbGVmdD0nKygkKHdpbmRvdykud2lkdGgoKS8zKSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZmF2TGlzdC5maW5kKCcuZ3BsdXNvbmVfaWNvbicpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgd2luZG93LmRhdGFMYXllci5wdXNoKHtcclxuICAgICAgICAgICAgJ3Nuc1BhZ2VUeXBlJyA6ICdmYXZvcml0ZXMnLFxyXG4gICAgICAgICAgICAnZXZlbnQnIDogJ2dwbHVzQnRuQ2xpY2snXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdwbHVzVXJsID0gJCh0aGlzKS5hdHRyKCdkYXRhLWhyZWYnKTtcclxuICAgICAgICB3aW5kb3cub3BlbihncGx1c1VybCx0aGlzLndpbmRvdywnaGVpZ2h0PTMyMCx3aWR0aD03MDAsdG9wPScrKCQod2luZG93KS5oZWlnaHQoKS8zKSsnLGxlZnQ9JysoJCh3aW5kb3cpLndpZHRoKCkvMykpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiJdfQ==
},{"../mod/cookie":4,"../mod/loader":6,"../mod/md5":7,"../socialMedia/facebook":12}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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
},{"../common/favor_quick_display":2,"./cookie":4}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
(function (global){

var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var Favorites = require('../mod/favorites');
var favorites = new Favorites();

var delete_favor = function(me, favCount) {
    window.location.reload();
}

exports.init = function () {
    var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

    var Favorites = require('../mod/favorites');
    var favorites = new Favorites();

    var prod_list = $('.fav-prod-list');

    prod_list.find('.js-del-fav-btn').on('click', function () {
        var tips = _lang.page_delete_showroom_good;
        var rs = confirm(tips);
        if (rs == false) {
            return;
        }
        var goodsId = $(this).data('goods-id');
        favorites.delFav(goodsId, delete_favor, $(this));
    });

    // $('.favorite-share-icon, .favorite-share').on('click', function(){
    //     alert(123);
    // });
};


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvcGFnZXMvZmF2b3JpdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG5cclxudmFyIEZhdm9yaXRlcyA9IHJlcXVpcmUoJy4uL21vZC9mYXZvcml0ZXMnKTtcclxudmFyIGZhdm9yaXRlcyA9IG5ldyBGYXZvcml0ZXMoKTtcclxuXHJcbnZhciBkZWxldGVfZmF2b3IgPSBmdW5jdGlvbihtZSwgZmF2Q291bnQpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxufVxyXG5cclxuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcblxyXG4gICAgdmFyIEZhdm9yaXRlcyA9IHJlcXVpcmUoJy4uL21vZC9mYXZvcml0ZXMnKTtcclxuICAgIHZhciBmYXZvcml0ZXMgPSBuZXcgRmF2b3JpdGVzKCk7XHJcblxyXG4gICAgdmFyIHByb2RfbGlzdCA9ICQoJy5mYXYtcHJvZC1saXN0Jyk7XHJcblxyXG4gICAgcHJvZF9saXN0LmZpbmQoJy5qcy1kZWwtZmF2LWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGlwcyA9IF9sYW5nLnBhZ2VfZGVsZXRlX3Nob3dyb29tX2dvb2Q7XHJcbiAgICAgICAgdmFyIHJzID0gY29uZmlybSh0aXBzKTtcclxuICAgICAgICBpZiAocnMgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZ29vZHNJZCA9ICQodGhpcykuZGF0YSgnZ29vZHMtaWQnKTtcclxuICAgICAgICBmYXZvcml0ZXMuZGVsRmF2KGdvb2RzSWQsIGRlbGV0ZV9mYXZvciwgJCh0aGlzKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAkKCcuZmF2b3JpdGUtc2hhcmUtaWNvbiwgLmZhdm9yaXRlLXNoYXJlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIC8vICAgICBhbGVydCgxMjMpO1xyXG4gICAgLy8gfSk7XHJcbn07XHJcblxyXG4iXX0=
},{"../mod/favorites":5}],12:[function(require,module,exports){
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
},{"../mod/openInPopup":8}],"favorites":[function(require,module,exports){
// require('./common')

require('../pages/favorites').init(); //Favorites
require('../favorites/share'); //sns share
// require('../favorites/email_share').init(); //email share
require('../common/account_menu').init();

},{"../common/account_menu":1,"../favorites/share":3,"../pages/favorites":11}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL2NvbW1vbi9hY2NvdW50X21lbnUuanMiLCJEOi93d3cvcHJvbWV0aGV1cy9zcmMvZ2FlYS9qcy9jb21tb24vZmF2b3JfcXVpY2tfZGlzcGxheS5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL2Zhdm9yaXRlcy9zaGFyZS5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL21vZC9jb29raWUuanMiLCJEOi93d3cvcHJvbWV0aGV1cy9zcmMvZ2FlYS9qcy9tb2QvZmF2b3JpdGVzLmpzIiwiRDovd3d3L3Byb21ldGhldXMvc3JjL2dhZWEvanMvbW9kL2xvYWRlci5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL21vZC9tZDUuanMiLCJEOi93d3cvcHJvbWV0aGV1cy9zcmMvZ2FlYS9qcy9tb2Qvb3BlbkluUG9wdXAuanMiLCJEOi93d3cvcHJvbWV0aGV1cy9zcmMvZ2FlYS9qcy9tb2Qvc3RyaW5nSGFuZGxlLmpzIiwiRDovd3d3L3Byb21ldGhldXMvc3JjL2dhZWEvanMvbW9kL3VzZXJBZ2VudC5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL3BhZ2VzL2Zhdm9yaXRlcy5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL3NvY2lhbE1lZGlhL2ZhY2Vib29rLmpzIiwiLi9nYWVhL2pzL2VudHJ5X2pzL2Zhdm9yaXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxuXHJcbnZhciBlcnJvclRpcCA9ICQoJy5zZWFyY2gtb3JkZXItZXJyb3InKSxcclxuICAgIG9yZGVyU25JbnB1dCA9ICQoJ2lucHV0W25hbWU9XCJvcmRlcl9zblwiXScpO1xyXG5cclxudmFyIHNlYXJjaE9yZGVyID0gZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIG9yZGVyU24gPSBvcmRlclNuSW5wdXQudmFsKCk7XHJcbiAgICBvcmRlclNuID0gb3JkZXJTbi5yZXBsYWNlKC8oXlxccyspfChcXHMrJCkvLFwiXCIpO1xyXG4gICAgaWYob3JkZXJTbi5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgIGVycm9yVGlwLnNob3coKTtcclxuICAgICAgICBvcmRlclNuSW5wdXQub24oJ2lucHV0JywgbnVsbCwge30sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBlcnJvclRpcC5oaWRlKCk7XHJcbiAgICAgICAgICAgIG9yZGVyU25JbnB1dC5vZmYoJ2lucHV0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkLmdldCh3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwJywge1xyXG4gICAgICAgICdhY3QnOiAnY2hlY2tfb3JkZXJfc24nLFxyXG4gICAgICAgICdvcmRlcl9zbic6IG9yZGVyU25cclxuICAgIH0sIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICBlcnJvclRpcC5zaG93KCk7XHJcbiAgICAgICAgICAgIG9yZGVyU25JbnB1dC5vbignaW5wdXQnLCBudWxsLCB7fSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvclRpcC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBvcmRlclNuSW5wdXQub2ZmKCdpbnB1dCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gd2ViRGF0YS5XRUJfUk9PVCArICdhY2NvdW50L29yZGVyLnBocD9vcmRlcl9zbj0nICsgb3JkZXJTbjtcclxuICAgICAgICB9XHJcbiAgICB9LCAnanNvbicpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG52YXIgaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGlucHV0X29yZGVyX3RpcHMgPSAkKCcuaW5wdXQtb3JkZXItdGlwcycpO1xyXG5cclxuICAgIGlucHV0X29yZGVyX3RpcHMuYmluZCgnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYoISQoJy5pbnB1dC1vcmRlci10aXBzLW1vcmUnKS5oYXNDbGFzcygndXAnKSkge1xyXG4gICAgICAgICAgICAkKCcuaW5wdXQtb3JkZXItdGlwcy1tb3JlJykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCcuaW5wdXQtb3JkZXItdGlwcy1tb3JlJykuYWRkQ2xhc3MoJ3VwJyk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuaW5wdXQtb3JkZXItdGlwcy1tb3JlJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcuaW5wdXQtb3JkZXItdGlwcy1tb3JlJykucmVtb3ZlQ2xhc3MoJ3VwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoJyNzZWFyY2gtb3JkZXInKS5zdWJtaXQoc2VhcmNoT3JkZXIpO1xyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGluaXQ6IGluaXRcclxufTtcbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1kaFpXRXZhbk12WTI5dGJXOXVMMkZqWTI5MWJuUmZiV1Z1ZFM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVNJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lkbUZ5SUNRZ1BTQW9kSGx3Wlc5bUlIZHBibVJ2ZHlBaFBUMGdYQ0oxYm1SbFptbHVaV1JjSWlBL0lIZHBibVJ2ZDFzbkpDZGRJRG9nZEhsd1pXOW1JR2RzYjJKaGJDQWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JR2RzYjJKaGJGc25KQ2RkSURvZ2JuVnNiQ2s3WEhKY2JseHlYRzUyWVhJZ1pYSnliM0pVYVhBZ1BTQWtLQ2N1YzJWaGNtTm9MVzl5WkdWeUxXVnljbTl5Snlrc1hISmNiaUFnSUNCdmNtUmxjbE51U1c1d2RYUWdQU0FrS0NkcGJuQjFkRnR1WVcxbFBWd2liM0prWlhKZmMyNWNJbDBuS1R0Y2NseHVYSEpjYm5aaGNpQnpaV0Z5WTJoUGNtUmxjaUE5SUdaMWJtTjBhVzl1S0dVcElIdGNjbHh1SUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1SUNBZ0lIWmhjaUJ2Y21SbGNsTnVJRDBnYjNKa1pYSlRia2x1Y0hWMExuWmhiQ2dwTzF4eVhHNGdJQ0FnYjNKa1pYSlRiaUE5SUc5eVpHVnlVMjR1Y21Wd2JHRmpaU2d2S0Y1Y1hITXJLWHdvWEZ4ekt5UXBMeXhjSWx3aUtUdGNjbHh1SUNBZ0lHbG1LRzl5WkdWeVUyNHViR1Z1WjNSb0lEdzlJREFwSUh0Y2NseHVJQ0FnSUNBZ0lDQmxjbkp2Y2xScGNDNXphRzkzS0NrN1hISmNiaUFnSUNBZ0lDQWdiM0prWlhKVGJrbHVjSFYwTG05dUtDZHBibkIxZENjc0lHNTFiR3dzSUh0OUxDQm1kVzVqZEdsdmJpZ3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaWEp5YjNKVWFYQXVhR2xrWlNncE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCdmNtUmxjbE51U1c1d2RYUXViMlptS0NkcGJuQjFkQ2NwTzF4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdKQzVuWlhRb2QyVmlSR0YwWVM1WFJVSmZVazlQVkNBcklDZGhhbUY0TG5Cb2NDY3NJSHRjY2x4dUlDQWdJQ0FnSUNBbllXTjBKem9nSjJOb1pXTnJYMjl5WkdWeVgzTnVKeXhjY2x4dUlDQWdJQ0FnSUNBbmIzSmtaWEpmYzI0bk9pQnZjbVJsY2xOdVhISmNiaUFnSUNCOUxDQm1kVzVqZEdsdmJpaGtZWFJoS1NCN1hISmNiaUFnSUNBZ0lDQWdhV1lnS0dSaGRHRXVaWEp5YjNJcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pYSnliM0pVYVhBdWMyaHZkeWdwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J2Y21SbGNsTnVTVzV3ZFhRdWIyNG9KMmx1Y0hWMEp5d2diblZzYkN3Z2UzMHNJR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pYSnliM0pVYVhBdWFHbGtaU2dwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IzSmtaWEpUYmtsdWNIVjBMbTltWmlnbmFXNXdkWFFuS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JHOWpZWFJwYjI0dWFISmxaaUE5SUhkbFlrUmhkR0V1VjBWQ1gxSlBUMVFnS3lBbllXTmpiM1Z1ZEM5dmNtUmxjaTV3YUhBL2IzSmtaWEpmYzI0OUp5QXJJRzl5WkdWeVUyNDdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlN3Z0oycHpiMjRuS1R0Y2NseHVJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNjbHh1ZlR0Y2NseHVkbUZ5SUdsdWFYUWdQU0JtZFc1amRHbHZiaWdwSUh0Y2NseHVJQ0FnSUhaaGNpQnBibkIxZEY5dmNtUmxjbDkwYVhCeklEMGdKQ2duTG1sdWNIVjBMVzl5WkdWeUxYUnBjSE1uS1R0Y2NseHVYSEpjYmlBZ0lDQnBibkIxZEY5dmNtUmxjbDkwYVhCekxtSnBibVFvSjJOc2FXTnJKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJR2xtS0NFa0tDY3VhVzV3ZFhRdGIzSmtaWEl0ZEdsd2N5MXRiM0psSnlrdWFHRnpRMnhoYzNNb0ozVndKeWtwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSkNnbkxtbHVjSFYwTFc5eVpHVnlMWFJwY0hNdGJXOXlaU2NwTG5Ob2IzY29LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdKQ2duTG1sdWNIVjBMVzl5WkdWeUxYUnBjSE10Ylc5eVpTY3BMbUZrWkVOc1lYTnpLQ2QxY0NjcE8xeHlYRzRnSUNBZ0lDQWdJSDFsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0pDZ25MbWx1Y0hWMExXOXlaR1Z5TFhScGNITXRiVzl5WlNjcExtaHBaR1VvS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSkNnbkxtbHVjSFYwTFc5eVpHVnlMWFJwY0hNdGJXOXlaU2NwTG5KbGJXOTJaVU5zWVhOektDZDFjQ2NwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMHBPMXh5WEc0Z0lDQWdYSEpjYmlBZ0lDQWtLQ2NqYzJWaGNtTm9MVzl5WkdWeUp5a3VjM1ZpYldsMEtITmxZWEpqYUU5eVpHVnlLVHRjY2x4dWZUdGNjbHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0I3WEhKY2JpQWdJQ0JwYm1sME9pQnBibWwwWEhKY2JuMDdJbDE5IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcblxyXG52YXIgVXNlckFnZW50ID0gcmVxdWlyZSgnLi4vbW9kL3VzZXJBZ2VudCcpO1xyXG52YXIgdXNlckFnZW50ID0gbmV3IFVzZXJBZ2VudCgpO1xyXG52YXIgU3RyaW5nSGFuZGxlID0gcmVxdWlyZSgnLi4vbW9kL3N0cmluZ0hhbmRsZScpO1xyXG52YXIgc3RyaW5nSGFuZGxlID0gbmV3IFN0cmluZ0hhbmRsZSgpO1xyXG52YXIgQ29va2llID0gcmVxdWlyZSgnLi4vbW9kL2Nvb2tpZScpO1xyXG52YXIgY29va2llID0gbmV3IENvb2tpZSgpO1xyXG5cclxudmFyIHN0YXR1cyA9IHtcclxuICAgIGxvYWRpbmdHb29kc0luRmF2b3IgOiBmYWxzZSxcclxuICAgIGxvYWRlZEdvb2RzSW5GYXZvciA6IGZhbHNlLFxyXG4gICAgZmF2b3JJc0VtcHR5IDogdHJ1ZSxcclxuICAgIG1vdXNlSXNJbkZhdm9ySWNvbiA6IGZhbHNlXHJcbn07XHJcblxyXG52YXIgZmF2b3JJY29uID0gJChcIiNqcy1mYXZvci1pY29uXCIpO1xyXG52YXIgbGlzdCA9IGZhdm9ySWNvbi5maW5kKFwiLm5hdi1mYXZvci1kZXNjXCIpO1xyXG52YXIgc2hvd1Jvb21MaXN0ID0gZmF2b3JJY29uLmZpbmQoXCIuc2hvd3Jvb20tbGlzdFwiKTtcclxudmFyIG5hdkZhdm9yaXRlID0gZmF2b3JJY29uLmZpbmQoXCIubmF2LWZhdm9yaXRlXCIpO1xyXG5cclxudmFyIHVzZXJGYXZvckNvdW50ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgICd0eXBlJzogJ1BPU1QnLFxyXG4gICAgICAgICd1cmwnOiB3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwJyxcclxuICAgICAgICAnZGF0YSc6ICdhY3Q9Z2V0X2RlZmF1bHRfc2hvd3Jvb21fZ29vZHNfY291bnQnLFxyXG4gICAgICAgICdkYXRhVHlwZSc6ICdqc29uJyxcclxuICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIGlmIChyLmNvZGUgPT09IDAgJiYgci5jb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICQoXCIjanMtdXNlci1mYXZvci1jb3VudFwiKS5odG1sKHIuY291bnQpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNqcy11c2VyLWZhdm9yLWNvdW50XCIpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxudmFyIGRpc3BsYXlGYXZvckxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcudGlwLWFycm93JykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgJCgnLnNob3dyb29tLXRpcCcpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgIHZhciBmYXZvckNvdW50ID0gcGFyc2VJbnQoJCgnI2Zhdm9yR29vZHNUb3RhbCcpLmh0bWwoKSk7XHJcbiAgICBpZihmYXZvckNvdW50IDw9IDApe1xyXG4gICAgICAgIGZhdm9ySWNvbi5hZGRDbGFzcyhcIm92ZXJcIik7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgaGlkZUZhdm9yTGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHN0YXR1cy5tb3VzZUlzSW5GYXZvckljb24gPSBmYWxzZTtcclxuICAgIGZhdm9ySWNvbi5yZW1vdmVDbGFzcyhcIm92ZXJcIik7XHJcbiAgICBzaG93Um9vbUxpc3QuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gb3BlblNob3dyb29tRGlhbG9nKCkge1xyXG4gICAgaWYgKCQoJyNkaWFsb2dPdmVybGF5Jykuc2l6ZSgpID4gMCkge1xyXG4gICAgICAgIHZhciBsYXllciA9ICQoJyNkaWFsb2dPdmVybGF5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBsYXllciA9ICQoJzxkaXYgaWQ9XCJkaWFsb2dPdmVybGF5XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiKDAsMCwwKTtcIj48L2Rpdj48L2Rpdj4nKS5wcmVwZW5kVG8oJ2JvZHknKTtcclxuICAgIH07XHJcblxyXG4gICAgbGF5ZXIuc2hvdygpLmNoaWxkcmVuKCdkaXYnKS5zdG9wKCkuZmFkZVRvKDAsIDAuMSkuZmFkZVRvKFwiZmFzdFwiLCAwLjUpO1xyXG5cclxuICAgICQoXCIuc2hvd3Jvb20tZGlhbG9nXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICQoJyNsb2dpbkRpYWxvZycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgIHZhciBjbGllbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgO1xyXG4gICAgaWYoY2xpZW50SGVpZ2h0ID4gNjUwKXtcclxuICAgICAgICAkKFwiLnNob3dyb29tLWRpYWxvZ1wiKS5jc3MoXCJ0b3BcIiwkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCkgLyA3KTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICQoXCIuc2hvd3Jvb20tZGlhbG9nXCIpLmNzcyhcInRvcFwiLCQod2luZG93KS5zY3JvbGxUb3AoKSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIHZhciBpc1Nob3dEaWFsb2cgPSBjb29raWUuZ2V0Q29va2llKCdIb3dJdFdvcmsnKSA/IGNvb2tpZS5nZXRDb29raWUoJ0hvd0l0V29yaycpIDogZmFsc2U7XHJcbiAgICAvLyBpZiAoaXNTaG93RGlhbG9nKSB7XHJcbiAgICAvLyAgICAgb3BlblNob3dyb29tRGlhbG9nKCk7XHJcbiAgICAvLyAgICAgY29va2llLnNldENvb2tpZSgnSG93SXRXb3JrJywgZmFsc2UsIC0xKTtcclxuICAgIC8vIH1cclxuICAgIC8vIHVzZXJGYXZvckNvdW50KCk7XHJcbiAgICBmYXZvckljb24uaG92ZXIoZGlzcGxheUZhdm9yTGlzdCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGhpZGVGYXZvckxpc3QoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5zaG93cm9vbS1kaWFsb2ctY2xvc2UnKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuc2hvd3Jvb20tZGlhbG9nXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICQoJyNkaWFsb2dPdmVybGF5JykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuc2hvd3Jvb20td29yay1leHBsYWluJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuZXhwbGFpbi1zaG93cm9vbS1jb250ZW50JykuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuc2hvd3Jvb20td29yay1leHBsYWluJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuZXhwbGFpbi1zaG93cm9vbS1jb250ZW50JykuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGluaXRTaG93Um9vbUxpc3QoKTtcclxuICAgIGluaXRDcmVhdGVTaG93Um9vbSgpO1xyXG5cclxufTtcclxuXHJcbnZhciBpbml0U2hvd1Jvb21MaXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHBhcmFtID0ge1xyXG4gICAgICAgIFwiYWN0XCI6IFwiZ2V0X3VzZXJfc2hvd3Jvb21fbGlzdFwiLFxyXG4gICAgfVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICAndHlwZSc6ICdnZXQnLFxyXG4gICAgICAgICd1cmwnOiB3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwJyxcclxuICAgICAgICAnZGF0YSc6IHBhcmFtLFxyXG4gICAgICAgICdjYWNoZSc6IHRydWUsXHJcbiAgICAgICAgJ2RhdGFUeXBlJzogJ2pzb24nLFxyXG4gICAgICAgICdzdWNjZXNzJzogZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgaWYgKHIuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2hvd3Jvb21fbGlzdCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3RoZXJTaG93cm9vbSA9IFwiXCJcclxuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0U2hvd3Jvb20gPSBcIlwiXHJcbiAgICAgICAgICAgICAgICB2YXIgd2ViX3Jvb3QgPSB3ZWJEYXRhLldFQl9ST09UIHx8IFwiL1wiXHJcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ25OYW1lID0gX2xhbmcucGFnZV9zaG93cm9vbV9uYW1lIHx8IFwieyRzaF9uYW1lfSdzIHNob3dyb29tXCJcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwO2k8ci5zaG93cm9vbV9saXN0Lmxlbmd0aDtpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9lbGxpcHNpcyB0aGUgc2hfbmFtZSB3aGljaCBpcyB0b28gbG9uZywgaXQgbWFrZXMgXCJhYWFhYWFhYWFhYWFhYWFhYWEncyBTaG93cm9vbVwiIHRvIFwiYWFhYWFhYWFhYS4uLidzIFNob3dyb29tXCJcclxuICAgICAgICAgICAgICAgICAgICBpZihyLnNob3dyb29tX2xpc3RbaV1bXCJzaF9uYW1lXCJdLmxlbmd0aCA+IDE4KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgci5zaG93cm9vbV9saXN0W2ldW1wic2hfbmFtZVwiXSA9IHIuc2hvd3Jvb21fbGlzdFtpXVtcInNoX25hbWVcIl0uc3Vic3RyKDAsMTUpICsgXCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBvcmlnbk5hbWUucmVwbGFjZShcInskc2hfbmFtZX1cIiwgci5zaG93cm9vbV9saXN0W2ldWydzaF9uYW1lJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIuc2hvd3Jvb21fbGlzdFtpXVsnaXNfZGVmYXVsdCddID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFNob3dyb29tID0gXCI8YSBjbGFzcz1cXFwiZGVmYXVsdC1zaG93cm9vbVxcXCIgaHJlZj1cXFwiXCIgKyB3ZWJfcm9vdCArIFwic2hvd3Jvb20ucGhwP2lkPVwiICsgci5zaG93cm9vbV9saXN0W2ldWydzaF9pZCddICsgXCJcXFwiPlwiICsgbmFtZSArIFwiPC9hPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyU2hvd3Jvb20gKz0gXCI8YSBocmVmPVxcXCJcIiArIHdlYl9yb290ICsgXCJzaG93cm9vbS5waHA/aWQ9XCIgKyByLnNob3dyb29tX2xpc3RbaV1bJ3NoX2lkJ10gKyBcIlxcXCI+XCIgKyBuYW1lICsgXCI8L2E+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2hvd3Jvb21fbGlzdCArPSBkZWZhdWx0U2hvd3Jvb20gKyBvdGhlclNob3dyb29tXHJcbiAgICAgICAgICAgICAgICAkKCcudXNlci1zaG93cm9vbS1saXN0JykuaHRtbChzaG93cm9vbV9saXN0KTtcclxuICAgICAgICAgICAgICAgIGlmIChyLnNlbGZfc2hvd3Jvb21fY291bnQgPj0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5jcmVhdGUtc2hvd3Jvb20nKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5jcmVhdGUtc2hvd3Jvb20nKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbnZhciBpbml0Q3JlYXRlU2hvd1Jvb20gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuY3JlYXRlLXNob3dyb29tJykub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAod2luZG93LmxvZ2luX3N0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBvcGVuU2hvd3Jvb21EaWFsb2coKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxudmFyIGluaXRBY3RpdmVTaG93Um9vbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwYXJhbSA9IHtcclxuICAgICAgICBcImFjdFwiOiBcImdldF9hY3RpdmVfc2hvd3Jvb21cIixcclxuICAgIH1cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgJ3R5cGUnOiAnZ2V0JyxcclxuICAgICAgICAndXJsJzogd2ViRGF0YS5XRUJfUk9PVCArICdhamF4LnBocCcsXHJcbiAgICAgICAgJ2RhdGEnOiBwYXJhbSxcclxuICAgICAgICAnY2FjaGUnOiB0cnVlLFxyXG4gICAgICAgICdkYXRhVHlwZSc6ICdqc29uJyxcclxuICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIGlmIChyLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmZhdm9yaXRlLWxpbmsnKS5maW5kKCcubm9sb2dpbi10ZXh0JykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAkKCcuZmF2b3JpdGUtbGluaycpLmZpbmQoJy5zaG93cm9vbS10ZXh0JykuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICAkKCcuZmF2b3JpdGUtbGluaycpLmZpbmQoJy5zaG93cm9vbS10ZXh0JykudGV4dChyLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNob3dyb29tLWRlZmF1bHQtdGV4dCcpLmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gJCgnLmZhdm9yaXRlLWxpbmsnKS5hdHRyKFwiaHJlZlwiLFwiL3Nob3dyb29tLnBocFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSAkKCcuZmF2b3JpdGUtbGluaycpLmZpbmQoJy5zaG93cm9vbS10ZXh0Jykud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIHZhciBkd2lkdGggPSAkKCcuc2hvd3Jvb20tZGVmYXVsdC10ZXh0Jykud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIGlmICh3aWR0aCtkd2lkdGggPiA1OSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkdmFsdWUgPSB3aWR0aCtkd2lkdGgtNTk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm5hdi1mYXZvcml0ZScpLmNzcygnd2lkdGgnLDEyMCtkdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNqcy1mYXZvci1pY29uJykuY3NzKCdyaWdodCcsMTIwK2R2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhlYWRlci1yaWdodCcpLmNzcygncmlnaHQnLDE2NStkdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJCgnLm5hdi1mYXZvcml0ZScpLmZpbmQoJ2VtJykuYWRkQ2xhc3MoJ2FjY291bnQtbW9yZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG52YXIgZGlzYWJsZUxvYWRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHN0YXR1cy5sb2FkZWRHb29kc0luRmF2b3IgPSBmYWxzZTtcclxufTtcclxuXHJcbnZhciBwb3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBkaXNwbGF5RmF2b3JMaXN0KCk7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgXCJpbml0XCI6IGluaXQsXHJcbiAgICBcImRpc2FibGVMb2FkZWRcIjogZGlzYWJsZUxvYWRlZCxcclxuICAgIFwicG9wXCI6IHBvcCxcclxuICAgIFwiaW5pdFNob3dSb29tTGlzdFwiOiBpbml0U2hvd1Jvb21MaXN0LFxyXG4gICAgXCJpbml0QWN0aXZlU2hvd1Jvb21cIjogaW5pdEFjdGl2ZVNob3dSb29tLFxyXG4gICAgXCJpbml0Q3JlYXRlU2hvd1Jvb21cIjogaW5pdENyZWF0ZVNob3dSb29tXHJcbn07XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltZGhaV0V2YW5NdlkyOXRiVzl1TDJaaGRtOXlYM0YxYVdOclgyUnBjM0JzWVhrdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTSXNJbVpwYkdVaU9pSm5aVzVsY21GMFpXUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpZG1GeUlDUWdQU0FvZEhsd1pXOW1JSGRwYm1SdmR5QWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JSGRwYm1SdmQxc25KQ2RkSURvZ2RIbHdaVzltSUdkc2IySmhiQ0FoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUEvSUdkc2IySmhiRnNuSkNkZElEb2diblZzYkNrN1hISmNibHh5WEc1MllYSWdWWE5sY2tGblpXNTBJRDBnY21WeGRXbHlaU2duTGk0dmJXOWtMM1Z6WlhKQloyVnVkQ2NwTzF4eVhHNTJZWElnZFhObGNrRm5aVzUwSUQwZ2JtVjNJRlZ6WlhKQloyVnVkQ2dwTzF4eVhHNTJZWElnVTNSeWFXNW5TR0Z1Wkd4bElEMGdjbVZ4ZFdseVpTZ25MaTR2Ylc5a0wzTjBjbWx1WjBoaGJtUnNaU2NwTzF4eVhHNTJZWElnYzNSeWFXNW5TR0Z1Wkd4bElEMGdibVYzSUZOMGNtbHVaMGhoYm1Sc1pTZ3BPMXh5WEc1MllYSWdRMjl2YTJsbElEMGdjbVZ4ZFdseVpTZ25MaTR2Ylc5a0wyTnZiMnRwWlNjcE8xeHlYRzUyWVhJZ1kyOXZhMmxsSUQwZ2JtVjNJRU52YjJ0cFpTZ3BPMXh5WEc1Y2NseHVkbUZ5SUhOMFlYUjFjeUE5SUh0Y2NseHVJQ0FnSUd4dllXUnBibWRIYjI5a2MwbHVSbUYyYjNJZ09pQm1ZV3h6WlN4Y2NseHVJQ0FnSUd4dllXUmxaRWR2YjJSelNXNUdZWFp2Y2lBNklHWmhiSE5sTEZ4eVhHNGdJQ0FnWm1GMmIzSkpjMFZ0Y0hSNUlEb2dkSEoxWlN4Y2NseHVJQ0FnSUcxdmRYTmxTWE5KYmtaaGRtOXlTV052YmlBNklHWmhiSE5sWEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnWm1GMmIzSkpZMjl1SUQwZ0pDaGNJaU5xY3kxbVlYWnZjaTFwWTI5dVhDSXBPMXh5WEc1MllYSWdiR2x6ZENBOUlHWmhkbTl5U1dOdmJpNW1hVzVrS0Z3aUxtNWhkaTFtWVhadmNpMWtaWE5qWENJcE8xeHlYRzUyWVhJZ2MyaHZkMUp2YjIxTWFYTjBJRDBnWm1GMmIzSkpZMjl1TG1acGJtUW9YQ0l1YzJodmQzSnZiMjB0YkdsemRGd2lLVHRjY2x4dWRtRnlJRzVoZGtaaGRtOXlhWFJsSUQwZ1ptRjJiM0pKWTI5dUxtWnBibVFvWENJdWJtRjJMV1poZG05eWFYUmxYQ0lwTzF4eVhHNWNjbHh1ZG1GeUlIVnpaWEpHWVhadmNrTnZkVzUwSUQwZ1puVnVZM1JwYjI0b0tTQjdYSEpjYmlBZ0lDQWtMbUZxWVhnb2UxeHlYRzRnSUNBZ0lDQWdJQ2QwZVhCbEp6b2dKMUJQVTFRbkxGeHlYRzRnSUNBZ0lDQWdJQ2QxY213bk9pQjNaV0pFWVhSaExsZEZRbDlTVDA5VUlDc2dKMkZxWVhndWNHaHdKeXhjY2x4dUlDQWdJQ0FnSUNBblpHRjBZU2M2SUNkaFkzUTlaMlYwWDJSbFptRjFiSFJmYzJodmQzSnZiMjFmWjI5dlpITmZZMjkxYm5RbkxGeHlYRzRnSUNBZ0lDQWdJQ2RrWVhSaFZIbHdaU2M2SUNkcWMyOXVKeXhjY2x4dUlDQWdJQ0FnSUNBbmMzVmpZMlZ6Y3ljNklHWjFibU4wYVc5dUlDaHlLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoeUxtTnZaR1VnUFQwOUlEQWdKaVlnY2k1amIzVnVkQ0ErSURBcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ1FvWENJamFuTXRkWE5sY2kxbVlYWnZjaTFqYjNWdWRGd2lLUzVvZEcxc0tISXVZMjkxYm5RcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdKQ2hjSWlOcWN5MTFjMlZ5TFdaaGRtOXlMV052ZFc1MFhDSXBMbk5vYjNjb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDBwTzF4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUdScGMzQnNZWGxHWVhadmNreHBjM1FnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWtLQ2N1ZEdsd0xXRnljbTkzSnlrdVkzTnpLQ2RrYVhOd2JHRjVKeXduYm05dVpTY3BPMXh5WEc0Z0lDQWdKQ2duTG5Ob2IzZHliMjl0TFhScGNDY3BMbU56Y3lnblpHbHpjR3hoZVNjc0oyNXZibVVuS1R0Y2NseHVJQ0FnSUhaaGNpQm1ZWFp2Y2tOdmRXNTBJRDBnY0dGeWMyVkpiblFvSkNnbkkyWmhkbTl5UjI5dlpITlViM1JoYkNjcExtaDBiV3dvS1NrN1hISmNiaUFnSUNCcFppaG1ZWFp2Y2tOdmRXNTBJRHc5SURBcGUxeHlYRzRnSUNBZ0lDQWdJR1poZG05eVNXTnZiaTVoWkdSRGJHRnpjeWhjSW05MlpYSmNJaWs3WEhKY2JpQWdJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnYUdsa1pVWmhkbTl5VEdsemRDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUhOMFlYUjFjeTV0YjNWelpVbHpTVzVHWVhadmNrbGpiMjRnUFNCbVlXeHpaVHRjY2x4dUlDQWdJR1poZG05eVNXTnZiaTV5WlcxdmRtVkRiR0Z6Y3loY0ltOTJaWEpjSWlrN1hISmNiaUFnSUNCemFHOTNVbTl2YlV4cGMzUXVZM056S0Nka2FYTndiR0Y1Snl3bmJtOXVaU2NwTzF4eVhHNTlPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdiM0JsYmxOb2IzZHliMjl0UkdsaGJHOW5LQ2tnZTF4eVhHNGdJQ0FnYVdZZ0tDUW9KeU5rYVdGc2IyZFBkbVZ5YkdGNUp5a3VjMmw2WlNncElENGdNQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJzWVhsbGNpQTlJQ1FvSnlOa2FXRnNiMmRQZG1WeWJHRjVKeWs3WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQnNZWGxsY2lBOUlDUW9KenhrYVhZZ2FXUTlYQ0prYVdGc2IyZFBkbVZ5YkdGNVhDSStQR1JwZGlCemRIbHNaVDFjSW1KaFkydG5jbTkxYm1RNmNtZGlLREFzTUN3d0tUdGNJajQ4TDJScGRqNDhMMlJwZGo0bktTNXdjbVZ3Wlc1a1ZHOG9KMkp2WkhrbktUdGNjbHh1SUNBZ0lIMDdYSEpjYmx4eVhHNGdJQ0FnYkdGNVpYSXVjMmh2ZHlncExtTm9hV3hrY21WdUtDZGthWFluS1M1emRHOXdLQ2t1Wm1Ga1pWUnZLREFzSURBdU1Ta3VabUZrWlZSdktGd2labUZ6ZEZ3aUxDQXdMalVwTzF4eVhHNWNjbHh1SUNBZ0lDUW9YQ0l1YzJodmQzSnZiMjB0WkdsaGJHOW5YQ0lwTG1OemN5aGNJbVJwYzNCc1lYbGNJaXdnWENKaWJHOWphMXdpS1R0Y2NseHVJQ0FnSUNRb0p5TnNiMmRwYmtScFlXeHZaeWNwTG1OemN5Z25aR2x6Y0d4aGVTY3NKMjV2Ym1VbktUdGNjbHh1SUNBZ0lIWmhjaUJqYkdsbGJuUklaV2xuYUhRZ1BTQjNhVzVrYjNjdWFXNXVaWEpJWldsbmFIUWdPMXh5WEc0Z0lDQWdhV1lvWTJ4cFpXNTBTR1ZwWjJoMElENGdOalV3S1h0Y2NseHVJQ0FnSUNBZ0lDQWtLRndpTG5Ob2IzZHliMjl0TFdScFlXeHZaMXdpS1M1amMzTW9YQ0owYjNCY0lpd2tLSGRwYm1SdmR5a3VjMk55YjJ4c1ZHOXdLQ2tnS3lBa0tIZHBibVJ2ZHlrdWFHVnBaMmgwS0NrZ0x5QTNLVHRjY2x4dUlDQWdJSDFsYkhObGUxeHlYRzRnSUNBZ0lDQWdJQ1FvWENJdWMyaHZkM0p2YjIwdFpHbGhiRzluWENJcExtTnpjeWhjSW5SdmNGd2lMQ1FvZDJsdVpHOTNLUzV6WTNKdmJHeFViM0FvS1NrN1hISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ2FXNXBkQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDOHZJSFpoY2lCcGMxTm9iM2RFYVdGc2IyY2dQU0JqYjI5cmFXVXVaMlYwUTI5dmEybGxLQ2RJYjNkSmRGZHZjbXNuS1NBL0lHTnZiMnRwWlM1blpYUkRiMjlyYVdVb0owaHZkMGwwVjI5eWF5Y3BJRG9nWm1Gc2MyVTdYSEpjYmlBZ0lDQXZMeUJwWmlBb2FYTlRhRzkzUkdsaGJHOW5LU0I3WEhKY2JpQWdJQ0F2THlBZ0lDQWdiM0JsYmxOb2IzZHliMjl0UkdsaGJHOW5LQ2s3WEhKY2JpQWdJQ0F2THlBZ0lDQWdZMjl2YTJsbExuTmxkRU52YjJ0cFpTZ25TRzkzU1hSWGIzSnJKeXdnWm1Gc2MyVXNJQzB4S1R0Y2NseHVJQ0FnSUM4dklIMWNjbHh1SUNBZ0lDOHZJSFZ6WlhKR1lYWnZja052ZFc1MEtDazdYSEpjYmlBZ0lDQm1ZWFp2Y2tsamIyNHVhRzkyWlhJb1pHbHpjR3hoZVVaaGRtOXlUR2x6ZEN3Z1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdJQ0FnSUdocFpHVkdZWFp2Y2t4cGMzUW9LVHRjY2x4dUlDQWdJSDBwTzF4eVhHNWNjbHh1SUNBZ0lDUW9KeTV6YUc5M2NtOXZiUzFrYVdGc2IyY3RZMnh2YzJVbktTNXZiaWhjSW1Oc2FXTnJYQ0lzWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ1FvWENJdWMyaHZkM0p2YjIwdFpHbGhiRzluWENJcExtTnpjeWhjSW1ScGMzQnNZWGxjSWl3Z1hDSnViMjVsWENJcE8xeHlYRzRnSUNBZ0lDQWdJQ1FvSnlOa2FXRnNiMmRQZG1WeWJHRjVKeWt1WTNOektGd2laR2x6Y0d4aGVWd2lMQ0JjSW01dmJtVmNJaWs3WEhKY2JpQWdJQ0I5S1R0Y2NseHVYSEpjYmlBZ0lDQWtLQ2N1YzJodmQzSnZiMjB0ZDI5eWF5MWxlSEJzWVdsdUp5a3ViMjRvSjIxdmRYTmxaVzUwWlhJbkxHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJQ0FnSUNBa0tDY3VaWGh3YkdGcGJpMXphRzkzY205dmJTMWpiMjUwWlc1MEp5a3VZM056S0Z3aVpHbHpjR3hoZVZ3aUxGd2lZbXh2WTJ0Y0lpazdYSEpjYmlBZ0lDQjlLVHRjY2x4dVhISmNiaUFnSUNBa0tDY3VjMmh2ZDNKdmIyMHRkMjl5YXkxbGVIQnNZV2x1SnlrdWIyNG9KMjF2ZFhObGJHVmhkbVVuTEdaMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDQWdJQ0FrS0NjdVpYaHdiR0ZwYmkxemFHOTNjbTl2YlMxamIyNTBaVzUwSnlrdVkzTnpLRndpWkdsemNHeGhlVndpTEZ3aWJtOXVaVndpS1R0Y2NseHVJQ0FnSUgwcE8xeHlYRzVjY2x4dUlDQWdJR2x1YVhSVGFHOTNVbTl2YlV4cGMzUW9LVHRjY2x4dUlDQWdJR2x1YVhSRGNtVmhkR1ZUYUc5M1VtOXZiU2dwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQnBibWwwVTJodmQxSnZiMjFNYVhOMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnZG1GeUlIQmhjbUZ0SUQwZ2UxeHlYRzRnSUNBZ0lDQWdJRndpWVdOMFhDSTZJRndpWjJWMFgzVnpaWEpmYzJodmQzSnZiMjFmYkdsemRGd2lMRnh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdKQzVoYW1GNEtIdGNjbHh1SUNBZ0lDQWdJQ0FuZEhsd1pTYzZJQ2RuWlhRbkxGeHlYRzRnSUNBZ0lDQWdJQ2QxY213bk9pQjNaV0pFWVhSaExsZEZRbDlTVDA5VUlDc2dKMkZxWVhndWNHaHdKeXhjY2x4dUlDQWdJQ0FnSUNBblpHRjBZU2M2SUhCaGNtRnRMRnh5WEc0Z0lDQWdJQ0FnSUNkallXTm9aU2M2SUhSeWRXVXNYSEpjYmlBZ0lDQWdJQ0FnSjJSaGRHRlVlWEJsSnpvZ0oycHpiMjRuTEZ4eVhHNGdJQ0FnSUNBZ0lDZHpkV05qWlhOekp6b2dablZ1WTNScGIyNGdLSElwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tISXVZMjlrWlNBOVBTQXdLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdjMmh2ZDNKdmIyMWZiR2x6ZENBOUlGd2lYQ0k3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdiM1JvWlhKVGFHOTNjbTl2YlNBOUlGd2lYQ0pjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQmtaV1poZFd4MFUyaHZkM0p2YjIwZ1BTQmNJbHdpWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdkMlZpWDNKdmIzUWdQU0IzWldKRVlYUmhMbGRGUWw5U1QwOVVJSHg4SUZ3aUwxd2lYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2IzSnBaMjVPWVcxbElEMGdYMnhoYm1jdWNHRm5aVjl6YUc5M2NtOXZiVjl1WVcxbElIeDhJRndpZXlSemFGOXVZVzFsZlNkeklITm9iM2R5YjI5dFhDSmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd08yazhjaTV6YUc5M2NtOXZiVjlzYVhOMExteGxibWQwYUR0cEt5c3BJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk5bGJHeHBjSE5wY3lCMGFHVWdjMmhmYm1GdFpTQjNhR2xqYUNCcGN5QjBiMjhnYkc5dVp5d2dhWFFnYldGclpYTWdYQ0poWVdGaFlXRmhZV0ZoWVdGaFlXRmhZV0VuY3lCVGFHOTNjbTl2YlZ3aUlIUnZJRndpWVdGaFlXRmhZV0ZoWVM0dUxpZHpJRk5vYjNkeWIyOXRYQ0pjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaWh5TG5Ob2IzZHliMjl0WDJ4cGMzUmJhVjFiWENKemFGOXVZVzFsWENKZExteGxibWQwYUNBK0lERTRLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjaTV6YUc5M2NtOXZiVjlzYVhOMFcybGRXMXdpYzJoZmJtRnRaVndpWFNBOUlISXVjMmh2ZDNKdmIyMWZiR2x6ZEZ0cFhWdGNJbk5vWDI1aGJXVmNJbDB1YzNWaWMzUnlLREFzTVRVcElDc2dYQ0l1TGk1Y0lseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJRzVoYldVZ1BTQnZjbWxuYms1aGJXVXVjbVZ3YkdGalpTaGNJbnNrYzJoZmJtRnRaWDFjSWl3Z2NpNXphRzkzY205dmJWOXNhWE4wVzJsZFd5ZHphRjl1WVcxbEoxMHBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEl1YzJodmQzSnZiMjFmYkdsemRGdHBYVnNuYVhOZlpHVm1ZWFZzZENkZElEMDlJREVwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHVm1ZWFZzZEZOb2IzZHliMjl0SUQwZ1hDSThZU0JqYkdGemN6MWNYRndpWkdWbVlYVnNkQzF6YUc5M2NtOXZiVnhjWENJZ2FISmxaajFjWEZ3aVhDSWdLeUIzWldKZmNtOXZkQ0FySUZ3aWMyaHZkM0p2YjIwdWNHaHdQMmxrUFZ3aUlDc2djaTV6YUc5M2NtOXZiVjlzYVhOMFcybGRXeWR6YUY5cFpDZGRJQ3NnWENKY1hGd2lQbHdpSUNzZ2JtRnRaU0FySUZ3aVBDOWhQbHdpTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzkwYUdWeVUyaHZkM0p2YjIwZ0t6MGdYQ0k4WVNCb2NtVm1QVnhjWENKY0lpQXJJSGRsWWw5eWIyOTBJQ3NnWENKemFHOTNjbTl2YlM1d2FIQS9hV1E5WENJZ0t5QnlMbk5vYjNkeWIyOXRYMnhwYzNSYmFWMWJKM05vWDJsa0oxMGdLeUJjSWx4Y1hDSStYQ0lnS3lCdVlXMWxJQ3NnWENJOEwyRStYQ0k3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MyaHZkM0p2YjIxZmJHbHpkQ0FyUFNCa1pXWmhkV3gwVTJodmQzSnZiMjBnS3lCdmRHaGxjbE5vYjNkeWIyOXRYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FrS0NjdWRYTmxjaTF6YUc5M2NtOXZiUzFzYVhOMEp5a3VhSFJ0YkNoemFHOTNjbTl2YlY5c2FYTjBLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHlMbk5sYkdaZmMyaHZkM0p2YjIxZlkyOTFiblFnUGowZ015a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDUW9KeTVqY21WaGRHVXRjMmh2ZDNKdmIyMG5LUzVqYzNNb0oyUnBjM0JzWVhrbkxDZHViMjVsSnlrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNRb0p5NWpjbVZoZEdVdGMyaHZkM0p2YjIwbktTNWpjM01vSjJScGMzQnNZWGtuTENkaWJHOWpheWNwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmU2s3WEhKY2JuMWNjbHh1WEhKY2JuWmhjaUJwYm1sMFEzSmxZWFJsVTJodmQxSnZiMjBnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWtLQ2N1WTNKbFlYUmxMWE5vYjNkeWIyOXRKeWt1YjI0b1hDSmpiR2xqYTF3aUxHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCcFppQW9kMmx1Wkc5M0xteHZaMmx1WDNOMFlYUjFjeUE5UFQwZ2RISjFaU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J2Y0dWdVUyaHZkM0p2YjIxRWFXRnNiMmNvS1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlLVHRjY2x4dWZWeHlYRzVjY2x4dWRtRnlJR2x1YVhSQlkzUnBkbVZUYUc5M1VtOXZiU0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lIWmhjaUJ3WVhKaGJTQTlJSHRjY2x4dUlDQWdJQ0FnSUNCY0ltRmpkRndpT2lCY0ltZGxkRjloWTNScGRtVmZjMmh2ZDNKdmIyMWNJaXhjY2x4dUlDQWdJSDFjY2x4dUlDQWdJQ1F1WVdwaGVDaDdYSEpjYmlBZ0lDQWdJQ0FnSjNSNWNHVW5PaUFuWjJWMEp5eGNjbHh1SUNBZ0lDQWdJQ0FuZFhKc0p6b2dkMlZpUkdGMFlTNVhSVUpmVWs5UFZDQXJJQ2RoYW1GNExuQm9jQ2NzWEhKY2JpQWdJQ0FnSUNBZ0oyUmhkR0VuT2lCd1lYSmhiU3hjY2x4dUlDQWdJQ0FnSUNBblkyRmphR1VuT2lCMGNuVmxMRnh5WEc0Z0lDQWdJQ0FnSUNka1lYUmhWSGx3WlNjNklDZHFjMjl1Snl4Y2NseHVJQ0FnSUNBZ0lDQW5jM1ZqWTJWemN5YzZJR1oxYm1OMGFXOXVJQ2h5S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHlMbU52WkdVZ1BUMGdNQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0pDZ25MbVpoZG05eWFYUmxMV3hwYm1zbktTNW1hVzVrS0NjdWJtOXNiMmRwYmkxMFpYaDBKeWt1WTNOektGd2laR2x6Y0d4aGVWd2lMQ0JjSW01dmJtVmNJaWs3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBa0tDY3VabUYyYjNKcGRHVXRiR2x1YXljcExtWnBibVFvSnk1emFHOTNjbTl2YlMxMFpYaDBKeWt1WTNOektGd2laR2x6Y0d4aGVWd2lMRndpWW14dlkydGNJaWs3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBa0tDY3VabUYyYjNKcGRHVXRiR2x1YXljcExtWnBibVFvSnk1emFHOTNjbTl2YlMxMFpYaDBKeWt1ZEdWNGRDaHlMbVJoZEdFcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdKQ2duTG5Ob2IzZHliMjl0TFdSbFptRjFiSFF0ZEdWNGRDY3BMbU56Y3loY0ltUnBjM0JzWVhsY0lpeGNJbUpzYjJOclhDSXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z0pDZ25MbVpoZG05eWFYUmxMV3hwYm1zbktTNWhkSFJ5S0Z3aWFISmxabHdpTEZ3aUwzTm9iM2R5YjI5dExuQm9jRndpS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2QybGtkR2dnUFNBa0tDY3VabUYyYjNKcGRHVXRiR2x1YXljcExtWnBibVFvSnk1emFHOTNjbTl2YlMxMFpYaDBKeWt1ZDJsa2RHZ29LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQmtkMmxrZEdnZ1BTQWtLQ2N1YzJodmQzSnZiMjB0WkdWbVlYVnNkQzEwWlhoMEp5a3VkMmxrZEdnb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoM2FXUjBhQ3RrZDJsa2RHZ2dQaUExT1NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQmtkbUZzZFdVZ1BTQjNhV1IwYUN0a2QybGtkR2d0TlRrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSkNnbkxtNWhkaTFtWVhadmNtbDBaU2NwTG1OemN5Z25kMmxrZEdnbkxERXlNQ3RrZG1Gc2RXVXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDUW9KeU5xY3kxbVlYWnZjaTFwWTI5dUp5a3VZM056S0NkeWFXZG9kQ2NzTVRJd0syUjJZV3gxWlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSkNnbkxtaGxZV1JsY2kxeWFXZG9kQ2NwTG1OemN5Z25jbWxuYUhRbkxERTJOU3RrZG1Gc2RXVXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0pDZ25MbTVoZGkxbVlYWnZjbWwwWlNjcExtWnBibVFvSjJWdEp5a3VZV1JrUTJ4aGMzTW9KMkZqWTI5MWJuUXRiVzl5WlNjcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmU2s3WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnWkdsellXSnNaVXh2WVdSbFpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUhOMFlYUjFjeTVzYjJGa1pXUkhiMjlrYzBsdVJtRjJiM0lnUFNCbVlXeHpaVHRjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJ3YjNBZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0JrYVhOd2JHRjVSbUYyYjNKTWFYTjBLQ2s3WEhKY2JuMDdYSEpjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnZTF4eVhHNGdJQ0FnWENKcGJtbDBYQ0k2SUdsdWFYUXNYSEpjYmlBZ0lDQmNJbVJwYzJGaWJHVk1iMkZrWldSY0lqb2daR2x6WVdKc1pVeHZZV1JsWkN4Y2NseHVJQ0FnSUZ3aWNHOXdYQ0k2SUhCdmNDeGNjbHh1SUNBZ0lGd2lhVzVwZEZOb2IzZFNiMjl0VEdsemRGd2lPaUJwYm1sMFUyaHZkMUp2YjIxTWFYTjBMRnh5WEc0Z0lDQWdYQ0pwYm1sMFFXTjBhWFpsVTJodmQxSnZiMjFjSWpvZ2FXNXBkRUZqZEdsMlpWTm9iM2RTYjI5dExGeHlYRzRnSUNBZ1hDSnBibWwwUTNKbFlYUmxVMmh2ZDFKdmIyMWNJam9nYVc1cGRFTnlaV0YwWlZOb2IzZFNiMjl0WEhKY2JuMDdJbDE5IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcbnZhciBDb29raWUgPSByZXF1aXJlKCcuLi9tb2QvY29va2llJyk7XHJcbnZhciBGYWNlYm9vayA9IHJlcXVpcmUoJy4uL3NvY2lhbE1lZGlhL2ZhY2Vib29rJyk7XHJcbnJlcXVpcmUoJy4uL21vZC9tZDUnKTtcclxudmFyIGNvb2tpZSA9IG5ldyBDb29raWUoKTtcclxud2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgbG9hZGVyID0gcmVxdWlyZSgnLi4vbW9kL2xvYWRlcicpO1xyXG4gICAgbG9hZGVyLmxvYWRTb2NpYWxKUygnZmFjZWJvb2snKTtcclxuICAgIGxvYWRlci5sb2FkU29jaWFsSlMoJ3Bpbml0Jyk7XHJcbiAgICBsb2FkZXIubG9hZFNvY2lhbEpTKCdncGx1c29uZScpO1xyXG5cclxuICAgIC8vIEZhY2Vib29rIHNoYXJlIGJ1dHRvbiBzaG93LCB3aGVuIHRoZSBqcyBoYXMgYmVlbiBsb2FkZWQuXHJcbiAgICAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIE1BWF9UUlkgPSAxMDtcclxuICAgICAgICB2YXIgdHJ5X2kgPSAwO1xyXG5cclxuICAgICAgICAoZnVuY3Rpb24gc2hhcmUoKSB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZihGQikgPT09ICd1bmRlZmluZWQnIHx8ICF3ZWJEYXRhLmZiX2FwcCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyeV9pKysgPCBNQVhfVFJZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChzaGFyZSwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIEZhY2Vib29rLmluaXQoKTtcclxuICAgICAgICAgICAgICAgICQoJy5mYl9pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmRhdGFMYXllci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Nuc1BhZ2VUeXBlJyA6ICdmYXZvcml0ZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnIDogJ2ZiQnRuQ2xpY2snXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEZhY2Vib29rLnNoYXJlR29vZHNQaWMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignZGF0YS11cmwnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdkYXRhLWltYWdlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignZGF0YS10aXRsZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtc2l0ZS1uYW1lJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignZGF0YS1kZXNjcmlwdGlvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF2b3JpdGVzJ1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKCk7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHZhciBmYXZMaXN0ID0gJCgnLmZhdi1wcm9kLWxpc3QnKTtcclxuXHJcbiAgICBmYXZMaXN0LmZpbmQoJy5waW50X2ljb24nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICdzbnNQYWdlVHlwZScgOiAnZmF2b3JpdGVzJyxcclxuICAgICAgICAgICAgJ2V2ZW50JyA6ICdwaW50QnRuQ2xpY2snXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBpbnRVcmwgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaHJlZicpO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKHBpbnRVcmwsdGhpcy53aW5kb3csJ2hlaWdodD0zMjAsd2lkdGg9NzAwLHRvcD0nKygkKHdpbmRvdykuaGVpZ2h0KCkvMykrJyxsZWZ0PScrKCQod2luZG93KS53aWR0aCgpLzMpKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmYXZMaXN0LmZpbmQoJy50d2l0dGVyX2ljb24nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICdzbnNQYWdlVHlwZScgOiAnZmF2b3JpdGVzJyxcclxuICAgICAgICAgICAgJ2V2ZW50JyA6ICd0d2l0QnRuQ2xpY2snXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHR3aXRVcmwgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaHJlZicpO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKHR3aXRVcmwsdGhpcy53aW5kb3csJ2hlaWdodD0zMjAsd2lkdGg9NzAwLHRvcD0nKygkKHdpbmRvdykuaGVpZ2h0KCkvMykrJyxsZWZ0PScrKCQod2luZG93KS53aWR0aCgpLzMpKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmYXZMaXN0LmZpbmQoJy5ncGx1c29uZV9pY29uJykub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goe1xyXG4gICAgICAgICAgICAnc25zUGFnZVR5cGUnIDogJ2Zhdm9yaXRlcycsXHJcbiAgICAgICAgICAgICdldmVudCcgOiAnZ3BsdXNCdG5DbGljaydcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZ3BsdXNVcmwgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaHJlZicpO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKGdwbHVzVXJsLHRoaXMud2luZG93LCdoZWlnaHQ9MzIwLHdpZHRoPTcwMCx0b3A9JysoJCh3aW5kb3cpLmhlaWdodCgpLzMpKycsbGVmdD0nKygkKHdpbmRvdykud2lkdGgoKS8zKSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltZGhaV0V2YW5NdlptRjJiM0pwZEdWekwzTm9ZWEpsTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJblpoY2lBa0lEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5QjNhVzVrYjNkYkp5UW5YU0E2SUhSNWNHVnZaaUJuYkc5aVlXd2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUJuYkc5aVlXeGJKeVFuWFNBNklHNTFiR3dwTzF4eVhHNTJZWElnUTI5dmEybGxJRDBnY21WeGRXbHlaU2duTGk0dmJXOWtMMk52YjJ0cFpTY3BPMXh5WEc1MllYSWdSbUZqWldKdmIyc2dQU0J5WlhGMWFYSmxLQ2N1TGk5emIyTnBZV3hOWldScFlTOW1ZV05sWW05dmF5Y3BPMXh5WEc1eVpYRjFhWEpsS0NjdUxpOXRiMlF2YldRMUp5azdYSEpjYm5aaGNpQmpiMjlyYVdVZ1BTQnVaWGNnUTI5dmEybGxLQ2s3WEhKY2JuZHBibVJ2ZHk1a1lYUmhUR0Y1WlhJZ1BTQjNhVzVrYjNjdVpHRjBZVXhoZVdWeUlIeDhJRnRkTzF4eVhHNGtLSGRwYm1SdmR5a3ViRzloWkNobWRXNWpkR2x2YmlncGUxeHlYRzRnSUNBZ2RtRnlJR3h2WVdSbGNpQTlJSEpsY1hWcGNtVW9KeTR1TDIxdlpDOXNiMkZrWlhJbktUdGNjbHh1SUNBZ0lHeHZZV1JsY2k1c2IyRmtVMjlqYVdGc1NsTW9KMlpoWTJWaWIyOXJKeWs3WEhKY2JpQWdJQ0JzYjJGa1pYSXViRzloWkZOdlkybGhiRXBUS0Nkd2FXNXBkQ2NwTzF4eVhHNGdJQ0FnYkc5aFpHVnlMbXh2WVdSVGIyTnBZV3hLVXlnblozQnNkWE52Ym1VbktUdGNjbHh1WEhKY2JpQWdJQ0F2THlCR1lXTmxZbTl2YXlCemFHRnlaU0JpZFhSMGIyNGdjMmh2ZHl3Z2QyaGxiaUIwYUdVZ2FuTWdhR0Z6SUdKbFpXNGdiRzloWkdWa0xseHlYRzRnSUNBZ0tHWjFibU4wYVc5dUtDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQk5RVmhmVkZKWklEMGdNVEE3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJSFJ5ZVY5cElEMGdNRHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdLR1oxYm1OMGFXOXVJSE5vWVhKbEtDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWgwZVhCbGIyWW9Sa0lwSUQwOVBTQW5kVzVrWldacGJtVmtKeUI4ZkNBaGQyVmlSR0YwWVM1bVlsOWhjSEFwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwY25sZmFTc3JJRHdnVFVGWVgxUlNXU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5sZEZScGJXVnZkWFFvYzJoaGNtVXNJRFV3TUNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCR1lXTmxZbTl2YXk1cGJtbDBLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBa0tDY3VabUpmYVdOdmJpY3BMbTl1S0NkamJHbGpheWNzSUdaMWJtTjBhVzl1S0NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhkcGJtUnZkeTVrWVhSaFRHRjVaWEl1Y0hWemFDaDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2R6Ym5OUVlXZGxWSGx3WlNjZ09pQW5abUYyYjNKcGRHVnpKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSjJWMlpXNTBKeUE2SUNkbVlrSjBia05zYVdOckoxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQkdZV05sWW05dmF5NXphR0Z5WlVkdmIyUnpVR2xqS0Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBa0tIUm9hWE1wTG1GMGRISW9KMlJoZEdFdGRYSnNKeWtzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNRb2RHaHBjeWt1WVhSMGNpZ25aR0YwWVMxcGJXRm5aU2NwTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBa0tIUm9hWE1wTG1GMGRISW9KMlJoZEdFdGRHbDBiR1VuS1N4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0pDaDBhR2x6S1M1aGRIUnlLQ2RrWVhSaExYTnBkR1V0Ym1GdFpTY3BMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FrS0hSb2FYTXBMbUYwZEhJb0oyUmhkR0V0WkdWelkzSnBjSFJwYjI0bktTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdKMlpoZG05eWFYUmxjeWRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQjlLU2dwTzF4eVhHNGdJQ0FnZlNrb0tUdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ1ptRjJUR2x6ZENBOUlDUW9KeTVtWVhZdGNISnZaQzFzYVhOMEp5azdYSEpjYmx4eVhHNGdJQ0FnWm1GMlRHbHpkQzVtYVc1a0tDY3VjR2x1ZEY5cFkyOXVKeWt1YjI0b1hDSmpiR2xqYTF3aUxDQm1kVzVqZEdsdmJpZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCM2FXNWtiM2N1WkdGMFlVeGhlV1Z5TG5CMWMyZ29lMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQW5jMjV6VUdGblpWUjVjR1VuSURvZ0oyWmhkbTl5YVhSbGN5Y3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDZGxkbVZ1ZENjZ09pQW5jR2x1ZEVKMGJrTnNhV05ySjF4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQndhVzUwVlhKc0lEMGdKQ2gwYUdsektTNWhkSFJ5S0Nka1lYUmhMV2h5WldZbktUdGNjbHh1SUNBZ0lDQWdJQ0IzYVc1a2IzY3ViM0JsYmlod2FXNTBWWEpzTEhSb2FYTXVkMmx1Wkc5M0xDZG9aV2xuYUhROU16SXdMSGRwWkhSb1BUY3dNQ3gwYjNBOUp5c29KQ2gzYVc1a2IzY3BMbWhsYVdkb2RDZ3BMek1wS3ljc2JHVm1kRDBuS3lna0tIZHBibVJ2ZHlrdWQybGtkR2dvS1M4ektTazdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHlYRzRnSUNBZ2ZTazdYSEpjYmx4eVhHNGdJQ0FnWm1GMlRHbHpkQzVtYVc1a0tDY3VkSGRwZEhSbGNsOXBZMjl1SnlrdWIyNG9YQ0pqYkdsamExd2lMQ0JtZFc1amRHbHZiaWdwSUh0Y2NseHVJQ0FnSUNBZ0lDQjNhVzVrYjNjdVpHRjBZVXhoZVdWeUxuQjFjMmdvZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FuYzI1elVHRm5aVlI1Y0dVbklEb2dKMlpoZG05eWFYUmxjeWNzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ2RsZG1WdWRDY2dPaUFuZEhkcGRFSjBia05zYVdOckoxeHlYRzRnSUNBZ0lDQWdJSDBwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IwZDJsMFZYSnNJRDBnSkNoMGFHbHpLUzVoZEhSeUtDZGtZWFJoTFdoeVpXWW5LVHRjY2x4dUlDQWdJQ0FnSUNCM2FXNWtiM2N1YjNCbGJpaDBkMmwwVlhKc0xIUm9hWE11ZDJsdVpHOTNMQ2RvWldsbmFIUTlNekl3TEhkcFpIUm9QVGN3TUN4MGIzQTlKeXNvSkNoM2FXNWtiM2NwTG1obGFXZG9kQ2dwTHpNcEt5Y3NiR1ZtZEQwbkt5Z2tLSGRwYm1SdmR5a3VkMmxrZEdnb0tTOHpLU2s3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh5WEc0Z0lDQWdmU2s3WEhKY2JseHlYRzRnSUNBZ1ptRjJUR2x6ZEM1bWFXNWtLQ2N1WjNCc2RYTnZibVZmYVdOdmJpY3BMbTl1S0Z3aVkyeHBZMnRjSWl3Z1puVnVZM1JwYjI0b0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZDJsdVpHOTNMbVJoZEdGTVlYbGxjaTV3ZFhOb0tIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0ozTnVjMUJoWjJWVWVYQmxKeUE2SUNkbVlYWnZjbWwwWlhNbkxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBblpYWmxiblFuSURvZ0oyZHdiSFZ6UW5SdVEyeHBZMnNuWEhKY2JpQWdJQ0FnSUNBZ2ZTazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHZHdiSFZ6VlhKc0lEMGdKQ2gwYUdsektTNWhkSFJ5S0Nka1lYUmhMV2h5WldZbktUdGNjbHh1SUNBZ0lDQWdJQ0IzYVc1a2IzY3ViM0JsYmlobmNHeDFjMVZ5YkN4MGFHbHpMbmRwYm1SdmR5d25hR1ZwWjJoMFBUTXlNQ3gzYVdSMGFEMDNNREFzZEc5d1BTY3JLQ1FvZDJsdVpHOTNLUzVvWldsbmFIUW9LUzh6S1NzbkxHeGxablE5Snlzb0pDaDNhVzVrYjNjcExuZHBaSFJvS0Nrdk15a3BPMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNjbHh1SUNBZ0lIMHBPMXh5WEc1OUtUdGNjbHh1WEhKY2JpSmRmUT09IiwiLy9kZWZpbmUoZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSkge1xyXG5cclxuXHRmdW5jdGlvbiBDb29raWUoKSB7fVxyXG5cdG1vZHVsZS5leHBvcnRzID0gQ29va2llO1xyXG5cdHZhciBjb29raWVfZG9tYWluID0gd2ViRGF0YS5jb29raWVfZG9tYWluXHJcblx0XHJcblx0Q29va2llLnByb3RvdHlwZS5zZXRDb29raWUgPSBmdW5jdGlvbiAoTmFtZU9mQ29va2llLCB2YWx1ZSwgZXhwaXJlZGF5cywgZG9tYWluKSB7XHJcblx0XHRpZiAoZXhwaXJlZGF5cyA9PSBudWxsIHx8IGV4cGlyZWRheXMgPT0gdW5kZWZpbmVkIHx8IGV4cGlyZWRheXMgPT0gJycgfHwgaXNOYU4oZXhwaXJlZGF5cykpIHtcclxuXHRcdFx0ZXhwaXJlZGF5cyA9IDM2NTtcclxuXHRcdH1cclxuXHRcdHZhciBFeHBpcmVEYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdEV4cGlyZURhdGUuc2V0VGltZShFeHBpcmVEYXRlLmdldFRpbWUoKSArIChleHBpcmVkYXlzICogMjQgKiAzNjAwICogMTAwMCkpO1xyXG5cdFx0ZG9tYWluID0gZG9tYWluID8gZG9tYWluIDogY29va2llX2RvbWFpblxyXG4gICAgICAgIHZhciBfZG9tYWluID0gZG9tYWluID8gXCI7ZG9tYWluPVwiICsgZG9tYWluIDogXCJcIlxyXG5cdFx0ZG9jdW1lbnQuY29va2llID0gTmFtZU9mQ29va2llICsgXCI9XCIgKyBlc2NhcGUodmFsdWUpICsgX2RvbWFpbiArICgoZXhwaXJlZGF5cyA9PSBudWxsKSA/IFwiXCI6IFwiO3BhdGg9LzsgZXhwaXJlcz1cIiArIEV4cGlyZURhdGUudG9HTVRTdHJpbmcoKSk7XHJcblx0fVxyXG5cclxuXHRDb29raWUucHJvdG90eXBlLmdldENvb2tpZSA9IGZ1bmN0aW9uIChOYW1lT2ZDb29raWUpIHtcclxuXHRcdGlmIChkb2N1bWVudC5jb29raWUubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRiZWdpbiA9IGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKE5hbWVPZkNvb2tpZSArIFwiPVwiKTtcclxuXHRcdFx0aWYgKGJlZ2luICE9IC0xKSB7XHJcblx0XHRcdFx0YmVnaW4gKz0gTmFtZU9mQ29va2llLmxlbmd0aCArIDE7XHJcblx0XHRcdFx0ZW5kID0gZG9jdW1lbnQuY29va2llLmluZGV4T2YoXCI7XCIsIGJlZ2luKTtcclxuXHRcdFx0XHRpZiAoZW5kID09IC0xKSBlbmQgPSBkb2N1bWVudC5jb29raWUubGVuZ3RoO1xyXG5cdFx0XHRcdHJldHVybiB1bmVzY2FwZShkb2N1bWVudC5jb29raWUuc3Vic3RyaW5nKGJlZ2luLCBlbmQpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdFxyXG4vL30pO1xyXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4vL2RlZmluZShmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgbW9kdWxlKSB7XHJcbiAgICB2YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxuICAgIHZhciBDb29raWUgPSByZXF1aXJlKCcuL2Nvb2tpZScpXHJcbiAgICB2YXIgY29va2llID0gbmV3IENvb2tpZSgpXHJcblxyXG5cdGZ1bmN0aW9uIEZhdm9yaXRlcygpIHt9XHJcblx0bW9kdWxlLmV4cG9ydHMgPSBGYXZvcml0ZXM7XHJcblxyXG4gICAgRmF2b3JpdGVzLnByb3RvdHlwZS5hZGRGYXYgPSBmdW5jdGlvbiAoZ29vZHNfaWQsIHN1Y19mdW5jLCBzcmNFbGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtID0ge1xyXG4gICAgICAgICAgICAnYWN0JzogJ2FkZF9mYXZvcml0ZXMnLFxyXG4gICAgICAgICAgICAnZ29vZHNfaWQnOiBnb29kc19pZFxyXG4gICAgICAgIH1cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAndHlwZSc6ICdQT1NUJyxcclxuICAgICAgICAgICAgJ3VybCc6IHdlYkRhdGEuV0VCX1JPT1QgKyAnYWpheC5waHAnLFxyXG4gICAgICAgICAgICAnZGF0YSc6IHBhcmFtLFxyXG4gICAgICAgICAgICAnY2FjaGUnOiBmYWxzZSxcclxuICAgICAgICAgICAgJ2RhdGFUeXBlJzogJ2pzb24nLFxyXG4gICAgICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHIuY29kZSA9PSAwKSAmJiByLnVzZXJGYXZvckNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzdWNfZnVuYyAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNfZnVuYyhzcmNFbGUsIHIudXNlckZhdm9yQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YoY2FsbGJhY2spICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdlcnJvcic6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YoY2FsbGJhY2spICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG5cdEZhdm9yaXRlcy5wcm90b3R5cGUuZ2V0RmF2Q291bnQgPSBmdW5jdGlvbiAoZ29vZHNfaWQsIHN1Y19mdW5jLCBtZSkge1xyXG5cdFx0dmFyIHBhcmFtID0ge1xyXG5cdFx0XHQnYWN0J1x0XHQ6XHQnZ2V0X2Zhdm9yaXRlc19jb3VudCcsXHJcblx0XHRcdCdnb29kc19pZCdcdDpcdGdvb2RzX2lkXHJcblx0XHR9XHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0XHQndHlwZSc6ICdHRVQnLFxyXG5cdFx0XHQndXJsJzogd2ViRGF0YS5XRUJfUk9PVCArICdhamF4LnBocCcsXHJcblx0XHRcdCdkYXRhJzogcGFyYW0sXHJcblx0XHRcdCdjYWNoZSc6IGZhbHNlLFxyXG5cdFx0XHQnZGF0YVR5cGUnOiAnanNvbicsXHJcblx0XHRcdCdzdWNjZXNzJzogZnVuY3Rpb24ocikge1xyXG5cdFx0XHRcdGlmKHIuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjX2Z1bmMoci5kYXRhLG1lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG4gICAgRmF2b3JpdGVzLnByb3RvdHlwZS5kZWxGYXYgPSBmdW5jdGlvbiAoZ29vZHNfaWQsIHN1Y19mdW5jLCBzcmNFbGUpIHtcclxuICAgICAgICB2YXIgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgICdhY3QnXHRcdDpcdCdkZWxfZmF2b3JpdGVzJyxcclxuICAgICAgICAgICAgJ2dvb2RzX2lkJ1x0Olx0Z29vZHNfaWQsXHJcbiAgICAgICAgICAgICdiYWNrJzogIGxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICd0eXBlJzogJ1BPU1QnLFxyXG4gICAgICAgICAgICAndXJsJzogd2ViRGF0YS5XRUJfUk9PVCArICdhamF4LnBocCcsXHJcbiAgICAgICAgICAgICdkYXRhJzogcGFyYW0sXHJcbiAgICAgICAgICAgICdjYWNoZSc6IGZhbHNlLFxyXG4gICAgICAgICAgICAnZGF0YVR5cGUnOiAnanNvbicsXHJcbiAgICAgICAgICAgICdzdWNjZXNzJzogZnVuY3Rpb24ocikge1xyXG4gICAgICAgICAgICAgICAgaWYoci5jb2RlID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoci5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhyZWYgPSByLnVybDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoci5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNfZnVuYyhzcmNFbGUsIHIudXNlckZhdm9yQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIEZhdm9yaXRlcy5wcm90b3R5cGUucmVmcmVzaEZhdm9yaXRlcyA9IGZ1bmN0aW9uIChlbGVtZW50TGlzdCkge1xyXG4gICAgICAgIHZhciBnb29kc0lkcyA9IFtdO1xyXG4gICAgICAgIGVsZW1lbnRMaXN0LmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBnb29kc0lkcy5wdXNoKCQodGhpcykuYXR0cignZGF0YS1nb29kc2lkJykpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAnYWN0JzogJ3JlZnJlc2hGYXZvcml0ZXMnLFxyXG4gICAgICAgICAgICAnZ29vZHNJZHMnOiBnb29kc0lkc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgJ3R5cGUnOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICd1cmwnOiB3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwJyxcclxuICAgICAgICAgICAgJ2RhdGEnOiBwYXJhbXMsXHJcbiAgICAgICAgICAgICdjYWNoZSc6IGZhbHNlLFxyXG4gICAgICAgICAgICAnZGF0YVR5cGUnOiAnanNvbicsXHJcbiAgICAgICAgICAgICdzdWNjZXNzJzogZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyLmNvZGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50TGlzdC5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhdmVfc2hvd3Jvb20gPSB3ZWJEYXRhLmhhdmVfc2hvd3Jvb207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXZlX3Nob3dyb29tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2dvb2RzSWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZ29vZHNpZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuaXNGYXZvcltfZ29vZHNJZF0gJiYgJCh0aGlzKS5oYXNDbGFzcygnZmF2b3JfdW5zZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZmF2b3JfdW5zZWxlY3RlZCcpLmFkZENsYXNzKCdmYXZvcl9zZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfZ29vZHNJZCA9ICQodGhpcykuYXR0cignZGF0YS1nb29kc2lkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5pc0Zhdm9yW19nb29kc0lkXSAmJiAkKHRoaXMpLmhhc0NsYXNzKCdmYXZvcl91bnNlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdmYXZvcl91bnNlbGVjdGVkJykuYWRkQ2xhc3MoJ2Zhdm9yX3NlbGVjdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykudW5iaW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuaXNGYXZvcltfZ29vZHNJZF0gJiYgJCh0aGlzKS5oYXNDbGFzcygnYWRkMmZhdjInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FkZDJmYXYyJykuYWRkQ2xhc3MoJ2V4aXN0aW5nRmF2MicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHIuaXNGYXZvcltfZ29vZHNJZF0sICQodGhpcykuaGFzQ2xhc3MoJ21vdmVUb1dpc2hMaXN0JykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5pc0Zhdm9yW19nb29kc0lkXSAmJiAkKHRoaXMpLmhhc0NsYXNzKCdtb3ZlVG9XaXNoTGlzdCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIEZhdm9yaXRlcy5wcm90b3R5cGUuYWRkVG9TaG93Um9vbSA9IGZ1bmN0aW9uIChnb29kc19pZCwgc3VjX2Z1bmMsIHNyY0VsZSwgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgZmF2b3JRdWlja0Rpc3BsYXkgPSByZXF1aXJlKFwiLi4vY29tbW9uL2Zhdm9yX3F1aWNrX2Rpc3BsYXlcIik7XHJcbiAgICAgICAgZmF2b3JRdWlja0Rpc3BsYXkuaW5pdFNob3dSb29tTGlzdCgpO1xyXG4gICAgICAgIGZhdm9yUXVpY2tEaXNwbGF5LmluaXRDcmVhdGVTaG93Um9vbSgpO1xyXG4gICAgICAgICQoJyNsb2dpbkRpYWxvZycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgICAkKCcjZGlhbG9nT3ZlcmxheScpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgICB2YXIgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgIFwiYWN0XCI6IFwiYWRkX3RvX3Nob3dyb29tXCIsXHJcbiAgICAgICAgICAgIFwiZ29vZHNJZFwiOiBnb29kc19pZCxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICd0eXBlJzogJ2dldCcsXHJcbiAgICAgICAgICAgICd1cmwnOiB3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwJyxcclxuICAgICAgICAgICAgJ2RhdGEnOiBwYXJhbSxcclxuICAgICAgICAgICAgJ2NhY2hlJzogdHJ1ZSxcclxuICAgICAgICAgICAgJ2RhdGFUeXBlJzogJ2pzb24nLFxyXG4gICAgICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoci5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNfZnVuYyhzcmNFbGUsJ2NsaWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghIXIuZ3VpZGVfbGluaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuU2hvd3Jvb21UdXRvcmlhbERpYWxvZyhyLmd1aWRlX2xpbmspXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZS5zZXRDb29raWUoXCJzaG93cm9vbV90dXRvcmlhbF9saW5rXCIsIHIuZ3VpZGVfbGluaywgMSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHIuY29kZSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlblNob3dyb29tRGlhbG9nKGdvb2RzX2lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEZhdm9yaXRlcy5wcm90b3R5cGUuZGVsZXRlRnJvbVNob3dSb29tID0gZnVuY3Rpb24gKGdvb2RzX2lkLCBzdWNfZnVuYywgc3JjRWxlLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBwYXJhbSA9IHtcclxuICAgICAgICAgICAgXCJhY3RcIjogXCJtb3ZlX2Zyb21fc2hvd3Jvb21cIixcclxuICAgICAgICAgICAgXCJnb29kc0lkXCI6IGdvb2RzX2lkLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgJ3R5cGUnOiAnZ2V0JyxcclxuICAgICAgICAgICAgJ3VybCc6IHdlYkRhdGEuV0VCX1JPT1QgKyAnYWpheC5waHAnLFxyXG4gICAgICAgICAgICAnZGF0YSc6IHBhcmFtLFxyXG4gICAgICAgICAgICAnY2FjaGUnOiB0cnVlLFxyXG4gICAgICAgICAgICAnZGF0YVR5cGUnOiAnanNvbicsXHJcbiAgICAgICAgICAgICdzdWNjZXNzJzogZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y19mdW5jKHNyY0VsZSwnY2xpY2snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9wZW5TaG93cm9vbURpYWxvZyhnb29kc19pZCkge1xyXG4gICAgICAgIGlmICgkKCcjZGlhbG9nT3ZlcmxheScpLnNpemUoKSA+IDApIHtcclxuICAgICAgICAgICAgdmFyIGxheWVyID0gJCgnI2RpYWxvZ092ZXJsYXknKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbGF5ZXIgPSAkKCc8ZGl2IGlkPVwiZGlhbG9nT3ZlcmxheVwiPjxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOnJnYigwLDAsMCk7XCI+PC9kaXY+PC9kaXY+JykucHJlcGVuZFRvKCdib2R5Jyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGF5ZXIuc2hvdygpLmNoaWxkcmVuKCdkaXYnKS5zdG9wKCkuZmFkZVRvKDAsIDAuMSkuZmFkZVRvKFwiZmFzdFwiLCAwLjUpO1xyXG5cclxuICAgICAgICAkKFwiLnNob3dyb29tLWRpYWxvZ1wiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgJChcIi5zaG93cm9vbS1kaWFsb2dcIikuZmluZChcIi5lbnRlci1zaG93cm9vbVwiKS5hdHRyKFwiZGF0YS1rdmFsdWVcIixnb29kc19pZCk7XHJcbiAgICAgICAgJCgnI2xvZ2luRGlhbG9nJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAgIHZhciBjbGllbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgO1xyXG4gICAgICAgIGlmKGNsaWVudEhlaWdodCA+IDY1MCl7XHJcbiAgICAgICAgICAgICQoXCIuc2hvd3Jvb20tZGlhbG9nXCIpLmNzcyhcInRvcFwiLCQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKSAvIDcpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAkKFwiLnNob3dyb29tLWRpYWxvZ1wiKS5jc3MoXCJ0b3BcIiwkKHdpbmRvdykuc2Nyb2xsVG9wKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlblNob3dyb29tVHV0b3JpYWxEaWFsb2coZ3VpZGVfbGluaykge1xyXG4gICAgICAgIHZhciBkaWFsb2cgPSAkKCcjc2hvd3Jvb20tY29tbW9uLXR1dG9yaWFsLWVudHJ5JylcclxuXHJcbiAgICAgICAgaWYgKGRpYWxvZy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKCcjZGlhbG9nT3ZlcmxheScpLnNpemUoKSA+IDApIHtcclxuICAgICAgICAgICAgdmFyIGxheWVyID0gJCgnI2RpYWxvZ092ZXJsYXknKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBsYXllciA9ICQoJzxkaXYgaWQ9XCJkaWFsb2dPdmVybGF5XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiKDAsMCwwKTtcIj48L2Rpdj48L2Rpdj4nKS5wcmVwZW5kVG8oJ2JvZHknKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsYXllci5zaG93KCkuY2hpbGRyZW4oJ2RpdicpLnN0b3AoKS5mYWRlVG8oMCwgMC4xKS5mYWRlVG8oXCJmYXN0XCIsIDAuNSlcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKVxyXG5cclxuICAgICAgICAkKGRpYWxvZykuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKVxyXG4gICAgICAgICQoZGlhbG9nKS5maW5kKCcubGVhcm4tbm93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlU2hvd3Jvb21UdXRvcmlhbERpYWxvZygpXHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBndWlkZV9saW5rXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkaWFsb2cpLmZpbmQoJy5sZWFybi1sYXRlcicpLm9uKCdjbGljaycsIGNsb3NlU2hvd3Jvb21UdXRvcmlhbERpYWxvZylcclxuICAgICAgICAkKGRpYWxvZykuZmluZCgnLmRpYWxvZy1jbG9zZS1pY29uJykub24oJ2NsaWNrJywgY2xvc2VTaG93cm9vbVR1dG9yaWFsRGlhbG9nKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlU2hvd3Jvb21UdXRvcmlhbERpYWxvZygpIHtcclxuICAgICAgICAkKCcjZGlhbG9nT3ZlcmxheScpLmhpZGUoKVxyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ3Zpc2libGUnKVxyXG5cclxuICAgICAgICAkKCcjc2hvd3Jvb20tY29tbW9uLXR1dG9yaWFsLWVudHJ5JykuaGlkZSgpXHJcbiAgICAgICAgY29va2llLnNldENvb2tpZShcInNob3dyb29tX3R1dG9yaWFsX2xpbmtcIiwgXCJcIiwgMSlcclxuICAgIH1cclxuXHJcbi8vfSk7XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltZGhaV0V2YW5NdmJXOWtMMlpoZG05eWFYUmxjeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTSXNJbVpwYkdVaU9pSm5aVzVsY21GMFpXUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk5a1pXWnBibVVvWm5WdVkzUnBiMjRnS0hKbGNYVnBjbVVzSUdWNGNHOXlkSE1zSUcxdlpIVnNaU2tnZTF4eVhHNGdJQ0FnZG1GeUlDUWdQU0FvZEhsd1pXOW1JSGRwYm1SdmR5QWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JSGRwYm1SdmQxc25KQ2RkSURvZ2RIbHdaVzltSUdkc2IySmhiQ0FoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUEvSUdkc2IySmhiRnNuSkNkZElEb2diblZzYkNrN1hISmNiaUFnSUNCMllYSWdRMjl2YTJsbElEMGdjbVZ4ZFdseVpTZ25MaTlqYjI5cmFXVW5LVnh5WEc0Z0lDQWdkbUZ5SUdOdmIydHBaU0E5SUc1bGR5QkRiMjlyYVdVb0tWeHlYRzVjY2x4dVhIUm1kVzVqZEdsdmJpQkdZWFp2Y21sMFpYTW9LU0I3ZlZ4eVhHNWNkRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdSbUYyYjNKcGRHVnpPMXh5WEc1Y2NseHVJQ0FnSUVaaGRtOXlhWFJsY3k1d2NtOTBiM1I1Y0dVdVlXUmtSbUYySUQwZ1puVnVZM1JwYjI0Z0tHZHZiMlJ6WDJsa0xDQnpkV05mWm5WdVl5d2djM0pqUld4bExDQmpZV3hzWW1GamF5a2dlMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQndZWEpoYlNBOUlIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0oyRmpkQ2M2SUNkaFpHUmZabUYyYjNKcGRHVnpKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdKMmR2YjJSelgybGtKem9nWjI5dlpITmZhV1JjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdKQzVoYW1GNEtIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0ozUjVjR1VuT2lBblVFOVRWQ2NzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ2QxY213bk9pQjNaV0pFWVhSaExsZEZRbDlTVDA5VUlDc2dKMkZxWVhndWNHaHdKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdKMlJoZEdFbk9pQndZWEpoYlN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSjJOaFkyaGxKem9nWm1Gc2MyVXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDZGtZWFJoVkhsd1pTYzZJQ2RxYzI5dUp5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0ozTjFZMk5sYzNNbk9pQm1kVzVqZEdsdmJpQW9jaWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ2h5TG1OdlpHVWdQVDBnTUNrZ0ppWWdjaTUxYzJWeVJtRjJiM0pEYjNWdWRDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdjM1ZqWDJaMWJtTWdJVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjM1ZqWDJaMWJtTW9jM0pqUld4bExDQnlMblZ6WlhKR1lYWnZja052ZFc1MEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltS0dOaGJHeGlZV05yS1NBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqWVd4c1ltRmpheWdwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBblpYSnliM0luT2lCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltS0dOaGJHeGlZV05yS1NBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqWVd4c1ltRmpheWdwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0I5TzF4eVhHNWNjbHh1WEhSR1lYWnZjbWwwWlhNdWNISnZkRzkwZVhCbExtZGxkRVpoZGtOdmRXNTBJRDBnWm5WdVkzUnBiMjRnS0dkdmIyUnpYMmxrTENCemRXTmZablZ1WXl3Z2JXVXBJSHRjY2x4dVhIUmNkSFpoY2lCd1lYSmhiU0E5SUh0Y2NseHVYSFJjZEZ4MEoyRmpkQ2RjZEZ4ME9seDBKMmRsZEY5bVlYWnZjbWwwWlhOZlkyOTFiblFuTEZ4eVhHNWNkRngwWEhRbloyOXZaSE5mYVdRblhIUTZYSFJuYjI5a2MxOXBaRnh5WEc1Y2RGeDBmVnh5WEc1Y2RGeDBKQzVoYW1GNEtIdGNjbHh1WEhSY2RGeDBKM1I1Y0dVbk9pQW5SMFZVSnl4Y2NseHVYSFJjZEZ4MEozVnliQ2M2SUhkbFlrUmhkR0V1VjBWQ1gxSlBUMVFnS3lBbllXcGhlQzV3YUhBbkxGeHlYRzVjZEZ4MFhIUW5aR0YwWVNjNklIQmhjbUZ0TEZ4eVhHNWNkRngwWEhRblkyRmphR1VuT2lCbVlXeHpaU3hjY2x4dVhIUmNkRngwSjJSaGRHRlVlWEJsSnpvZ0oycHpiMjRuTEZ4eVhHNWNkRngwWEhRbmMzVmpZMlZ6Y3ljNklHWjFibU4wYVc5dUtISXBJSHRjY2x4dVhIUmNkRngwWEhScFppaHlMbU52WkdVZ1BUMGdNQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE4xWTE5bWRXNWpLSEl1WkdGMFlTeHRaU2s3WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlLVHRjY2x4dVhIUjlPMXh5WEc1Y2NseHVJQ0FnSUVaaGRtOXlhWFJsY3k1d2NtOTBiM1I1Y0dVdVpHVnNSbUYySUQwZ1puVnVZM1JwYjI0Z0tHZHZiMlJ6WDJsa0xDQnpkV05mWm5WdVl5d2djM0pqUld4bEtTQjdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlIQmhjbUZ0SUQwZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBbllXTjBKMXgwWEhRNlhIUW5aR1ZzWDJaaGRtOXlhWFJsY3ljc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNkbmIyOWtjMTlwWkNkY2REcGNkR2R2YjJSelgybGtMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQW5ZbUZqYXljNklDQnNiMk5oZEdsdmJpNXdZWFJvYm1GdFpWeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBa0xtRnFZWGdvZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FuZEhsd1pTYzZJQ2RRVDFOVUp5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0ozVnliQ2M2SUhkbFlrUmhkR0V1VjBWQ1gxSlBUMVFnS3lBbllXcGhlQzV3YUhBbkxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBblpHRjBZU2M2SUhCaGNtRnRMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQW5ZMkZqYUdVbk9pQm1ZV3h6WlN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSjJSaGRHRlVlWEJsSnpvZ0oycHpiMjRuTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FuYzNWalkyVnpjeWM2SUdaMWJtTjBhVzl1S0hJcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtS0hJdVkyOWtaU0E5UFNBdE1Ta2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnNaWEowS0hJdVpHRjBZU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjMlZzWmk1c2IyTmhkR2x2Ymk1b2NtVm1JRDBnY2k1MWNtdzdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hJdVkyOWtaU0E5UFNBd0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzVmpYMloxYm1Nb2MzSmpSV3hsTENCeUxuVnpaWEpHWVhadmNrTnZkVzUwS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnZlR0Y2NseHVYSEpjYmlBZ0lDQkdZWFp2Y21sMFpYTXVjSEp2ZEc5MGVYQmxMbkpsWm5KbGMyaEdZWFp2Y21sMFpYTWdQU0JtZFc1amRHbHZiaUFvWld4bGJXVnVkRXhwYzNRcElIdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ1oyOXZaSE5KWkhNZ1BTQmJYVHRjY2x4dUlDQWdJQ0FnSUNCbGJHVnRaVzUwVEdsemRDNWxZV05vS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1oyOXZaSE5KWkhNdWNIVnphQ2drS0hSb2FYTXBMbUYwZEhJb0oyUmhkR0V0WjI5dlpITnBaQ2NwS1R0Y2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkbUZ5SUhCaGNtRnRjeUE5SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSjJGamRDYzZJQ2R5WldaeVpYTm9SbUYyYjNKcGRHVnpKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdKMmR2YjJSelNXUnpKem9nWjI5dlpITkpaSE5jY2x4dUlDQWdJQ0FnSUNCOU8xeHlYRzRnSUNBZ0lDQWdJQ1F1WVdwaGVDaDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDZDBlWEJsSnpvZ0oxQlBVMVFuTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FuZFhKc0p6b2dkMlZpUkdGMFlTNVhSVUpmVWs5UFZDQXJJQ2RoYW1GNExuQm9jQ2NzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ2RrWVhSaEp6b2djR0Z5WVcxekxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBblkyRmphR1VuT2lCbVlXeHpaU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdKMlJoZEdGVWVYQmxKem9nSjJwemIyNG5MRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQW5jM1ZqWTJWemN5YzZJR1oxYm1OMGFXOXVJQ2h5S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY2k1amIyUmxJRDA5UFNBd0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEV4cGMzUXVaV0ZqYUNobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCb1lYWmxYM05vYjNkeWIyOXRJRDBnZDJWaVJHRjBZUzVvWVhabFgzTm9iM2R5YjI5dE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYUdGMlpWOXphRzkzY205dmJTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJRjluYjI5a2MwbGtJRDBnSkNoMGFHbHpLUzVoZEhSeUtDZGtZWFJoTFdkdmIyUnphV1FuS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoeUxtbHpSbUYyYjNKYlgyZHZiMlJ6U1dSZElDWW1JQ1FvZEdocGN5a3VhR0Z6UTJ4aGMzTW9KMlpoZG05eVgzVnVjMlZzWldOMFpXUW5LU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNRb2RHaHBjeWt1Y21WdGIzWmxRMnhoYzNNb0oyWmhkbTl5WDNWdWMyVnNaV04wWldRbktTNWhaR1JEYkdGemN5Z25abUYyYjNKZmMyVnNaV04wSnlrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnWDJkdmIyUnpTV1FnUFNBa0tIUm9hWE1wTG1GMGRISW9KMlJoZEdFdFoyOXZaSE5wWkNjcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tISXVhWE5HWVhadmNsdGZaMjl2WkhOSlpGMGdKaVlnSkNoMGFHbHpLUzVvWVhORGJHRnpjeWduWm1GMmIzSmZkVzV6Wld4bFkzUmxaQ2NwS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0pDaDBhR2x6S1M1eVpXMXZkbVZEYkdGemN5Z25abUYyYjNKZmRXNXpaV3hsWTNSbFpDY3BMbUZrWkVOc1lYTnpLQ2RtWVhadmNsOXpaV3hsWTNRbktUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWtLSFJvYVhNcExuVnVZbWx1WkNncE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeTlrWlhSaGFXeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHlMbWx6Um1GMmIzSmJYMmR2YjJSelNXUmRJQ1ltSUNRb2RHaHBjeWt1YUdGelEyeGhjM01vSjJGa1pESm1ZWFl5SnlrcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWtLSFJvYVhNcExuSmxiVzkyWlVOc1lYTnpLQ2RoWkdReVptRjJNaWNwTG1Ga1pFTnNZWE56S0NkbGVHbHpkR2x1WjBaaGRqSW5LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dlkyRnlkRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OWpiMjV6YjJ4bExteHZaeWh5TG1selJtRjJiM0piWDJkdmIyUnpTV1JkTENBa0tIUm9hWE1wTG1oaGMwTnNZWE56S0NkdGIzWmxWRzlYYVhOb1RHbHpkQ2NwS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hJdWFYTkdZWFp2Y2x0ZloyOXZaSE5KWkYwZ0ppWWdKQ2gwYUdsektTNW9ZWE5EYkdGemN5Z25iVzkyWlZSdlYybHphRXhwYzNRbktTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ1FvZEdocGN5a3VjbVZ0YjNabEtDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgwcE8xeHlYRzRnSUNBZ2ZUdGNjbHh1WEhKY2JpQWdJQ0JHWVhadmNtbDBaWE11Y0hKdmRHOTBlWEJsTG1Ga1pGUnZVMmh2ZDFKdmIyMGdQU0JtZFc1amRHbHZiaUFvWjI5dlpITmZhV1FzSUhOMVkxOW1kVzVqTENCemNtTkZiR1VzSUdOaGJHeGlZV05yS1NCN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUdaaGRtOXlVWFZwWTJ0RWFYTndiR0Y1SUQwZ2NtVnhkV2x5WlNoY0lpNHVMMk52YlcxdmJpOW1ZWFp2Y2w5eGRXbGphMTlrYVhOd2JHRjVYQ0lwTzF4eVhHNGdJQ0FnSUNBZ0lHWmhkbTl5VVhWcFkydEVhWE53YkdGNUxtbHVhWFJUYUc5M1VtOXZiVXhwYzNRb0tUdGNjbHh1SUNBZ0lDQWdJQ0JtWVhadmNsRjFhV05yUkdsemNHeGhlUzVwYm1sMFEzSmxZWFJsVTJodmQxSnZiMjBvS1R0Y2NseHVJQ0FnSUNBZ0lDQWtLQ2NqYkc5bmFXNUVhV0ZzYjJjbktTNWpjM01vSjJScGMzQnNZWGtuTENkdWIyNWxKeWs3WEhKY2JpQWdJQ0FnSUNBZ0pDZ25JMlJwWVd4dlowOTJaWEpzWVhrbktTNWpjM01vSjJScGMzQnNZWGtuTENkdWIyNWxKeWs3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJSEJoY21GdElEMGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJbUZqZEZ3aU9pQmNJbUZrWkY5MGIxOXphRzkzY205dmJWd2lMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJbWR2YjJSelNXUmNJam9nWjI5dlpITmZhV1FzWEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNBa0xtRnFZWGdvZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FuZEhsd1pTYzZJQ2RuWlhRbkxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBbmRYSnNKem9nZDJWaVJHRjBZUzVYUlVKZlVrOVBWQ0FySUNkaGFtRjRMbkJvY0Njc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNka1lYUmhKem9nY0dGeVlXMHNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDZGpZV05vWlNjNklIUnlkV1VzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ2RrWVhSaFZIbHdaU2M2SUNkcWMyOXVKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdKM04xWTJObGMzTW5PaUJtZFc1amRHbHZiaUFvY2lrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hJdVkyOWtaU0E5UFNBd0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzVmpYMloxYm1Nb2MzSmpSV3hsTENkamJHbGpheWNwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JU0Z5TG1kMWFXUmxYMnhwYm1zcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiM0JsYmxOb2IzZHliMjl0VkhWMGIzSnBZV3hFYVdGc2IyY29jaTVuZFdsa1pWOXNhVzVyS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyOXJhV1V1YzJWMFEyOXZhMmxsS0Z3aWMyaHZkM0p2YjIxZmRIVjBiM0pwWVd4ZmJHbHVhMXdpTENCeUxtZDFhV1JsWDJ4cGJtc3NJREVwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoeUxtTnZaR1VnUFQwZ015a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHOXdaVzVUYUc5M2NtOXZiVVJwWVd4dlp5aG5iMjlrYzE5cFpDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lIMDdYSEpjYmlBZ0lDQkdZWFp2Y21sMFpYTXVjSEp2ZEc5MGVYQmxMbVJsYkdWMFpVWnliMjFUYUc5M1VtOXZiU0E5SUdaMWJtTjBhVzl1SUNobmIyOWtjMTlwWkN3Z2MzVmpYMloxYm1Nc0lITnlZMFZzWlN3Z1kyRnNiR0poWTJzcElIdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ2NHRnlZVzBnUFNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aVlXTjBYQ0k2SUZ3aWJXOTJaVjltY205dFgzTm9iM2R5YjI5dFhDSXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lGd2laMjl2WkhOSlpGd2lPaUJuYjI5a2MxOXBaQ3hjY2x4dUlDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUNRdVlXcGhlQ2g3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ2QwZVhCbEp6b2dKMmRsZENjc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNkMWNtd25PaUIzWldKRVlYUmhMbGRGUWw5U1QwOVVJQ3NnSjJGcVlYZ3VjR2h3Snl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSjJSaGRHRW5PaUJ3WVhKaGJTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0oyTmhZMmhsSnpvZ2RISjFaU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdKMlJoZEdGVWVYQmxKem9nSjJwemIyNG5MRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQW5jM1ZqWTJWemN5YzZJR1oxYm1OMGFXOXVJQ2h5S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY2k1amIyUmxJRDA5SURBcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemRXTmZablZ1WXloemNtTkZiR1VzSjJOc2FXTnJKeWs3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCbWRXNWpkR2x2YmlCdmNHVnVVMmh2ZDNKdmIyMUVhV0ZzYjJjb1oyOXZaSE5mYVdRcElIdGNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0pDZ25JMlJwWVd4dlowOTJaWEpzWVhrbktTNXphWHBsS0NrZ1BpQXdLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCc1lYbGxjaUE5SUNRb0p5TmthV0ZzYjJkUGRtVnliR0Y1SnlrN1hISmNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR3hoZVdWeUlEMGdKQ2duUEdScGRpQnBaRDFjSW1ScFlXeHZaMDkyWlhKc1lYbGNJajQ4WkdsMklITjBlV3hsUFZ3aVltRmphMmR5YjNWdVpEcHlaMklvTUN3d0xEQXBPMXdpUGp3dlpHbDJQand2WkdsMlBpY3BMbkJ5WlhCbGJtUlVieWduWW05a2VTY3BPMXh5WEc0Z0lDQWdJQ0FnSUgwN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUd4aGVXVnlMbk5vYjNjb0tTNWphR2xzWkhKbGJpZ25aR2wySnlrdWMzUnZjQ2dwTG1aaFpHVlVieWd3TENBd0xqRXBMbVpoWkdWVWJ5aGNJbVpoYzNSY0lpd2dNQzQxS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSkNoY0lpNXphRzkzY205dmJTMWthV0ZzYjJkY0lpa3VZM056S0Z3aVpHbHpjR3hoZVZ3aUxDQmNJbUpzYjJOclhDSXBPMXh5WEc0Z0lDQWdJQ0FnSUNRb1hDSXVjMmh2ZDNKdmIyMHRaR2xoYkc5blhDSXBMbVpwYm1Rb1hDSXVaVzUwWlhJdGMyaHZkM0p2YjIxY0lpa3VZWFIwY2loY0ltUmhkR0V0YTNaaGJIVmxYQ0lzWjI5dlpITmZhV1FwTzF4eVhHNGdJQ0FnSUNBZ0lDUW9KeU5zYjJkcGJrUnBZV3h2WnljcExtTnpjeWduWkdsemNHeGhlU2NzSjI1dmJtVW5LVHRjY2x4dUlDQWdJQ0FnSUNCMllYSWdZMnhwWlc1MFNHVnBaMmgwSUQwZ2QybHVaRzkzTG1sdWJtVnlTR1ZwWjJoMElEdGNjbHh1SUNBZ0lDQWdJQ0JwWmloamJHbGxiblJJWldsbmFIUWdQaUEyTlRBcGUxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBa0tGd2lMbk5vYjNkeWIyOXRMV1JwWVd4dloxd2lLUzVqYzNNb1hDSjBiM0JjSWl3a0tIZHBibVJ2ZHlrdWMyTnliMnhzVkc5d0tDa2dLeUFrS0hkcGJtUnZkeWt1YUdWcFoyaDBLQ2tnTHlBM0tUdGNjbHh1SUNBZ0lDQWdJQ0I5Wld4elpYdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0pDaGNJaTV6YUc5M2NtOXZiUzFrYVdGc2IyZGNJaWt1WTNOektGd2lkRzl3WENJc0pDaDNhVzVrYjNjcExuTmpjbTlzYkZSdmNDZ3BLVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOU8xeHlYRzVjY2x4dUlDQWdJR1oxYm1OMGFXOXVJRzl3Wlc1VGFHOTNjbTl2YlZSMWRHOXlhV0ZzUkdsaGJHOW5LR2QxYVdSbFgyeHBibXNwSUh0Y2NseHVJQ0FnSUNBZ0lDQjJZWElnWkdsaGJHOW5JRDBnSkNnbkkzTm9iM2R5YjI5dExXTnZiVzF2YmkxMGRYUnZjbWxoYkMxbGJuUnllU2NwWEhKY2JseHlYRzRnSUNBZ0lDQWdJR2xtSUNoa2FXRnNiMmN1YkdWdVozUm9JRDA5SURBcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9KQ2duSTJScFlXeHZaMDkyWlhKc1lYa25LUzV6YVhwbEtDa2dQaUF3S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQnNZWGxsY2lBOUlDUW9KeU5rYVdGc2IyZFBkbVZ5YkdGNUp5bGNjbHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnYkdGNVpYSWdQU0FrS0NjOFpHbDJJR2xrUFZ3aVpHbGhiRzluVDNabGNteGhlVndpUGp4a2FYWWdjM1I1YkdVOVhDSmlZV05yWjNKdmRXNWtPbkpuWWlnd0xEQXNNQ2s3WENJK1BDOWthWFkrUEM5a2FYWStKeWt1Y0hKbGNHVnVaRlJ2S0NkaWIyUjVKeWxjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdiR0Y1WlhJdWMyaHZkeWdwTG1Ob2FXeGtjbVZ1S0Nka2FYWW5LUzV6ZEc5d0tDa3VabUZrWlZSdktEQXNJREF1TVNrdVptRmtaVlJ2S0Z3aVptRnpkRndpTENBd0xqVXBYSEpjYmlBZ0lDQWdJQ0FnSkNnblltOWtlU2NwTG1OemN5Z25iM1psY21ac2IzY25MQ0FuYUdsa1pHVnVKeWxjY2x4dVhISmNiaUFnSUNBZ0lDQWdKQ2hrYVdGc2IyY3BMbU56Y3lnblpHbHpjR3hoZVNjc0lDZG1iR1Y0SnlsY2NseHVJQ0FnSUNBZ0lDQWtLR1JwWVd4dlp5a3VabWx1WkNnbkxteGxZWEp1TFc1dmR5Y3BMbTl1S0NkamJHbGpheWNzSUdaMWJtTjBhVzl1S0NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamJHOXpaVk5vYjNkeWIyOXRWSFYwYjNKcFlXeEVhV0ZzYjJjb0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCc2IyTmhkR2x2Ymk1b2NtVm1JRDBnWjNWcFpHVmZiR2x1YTF4eVhHNGdJQ0FnSUNBZ0lIMHBYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDUW9aR2xoYkc5bktTNW1hVzVrS0NjdWJHVmhjbTR0YkdGMFpYSW5LUzV2YmlnblkyeHBZMnNuTENCamJHOXpaVk5vYjNkeWIyOXRWSFYwYjNKcFlXeEVhV0ZzYjJjcFhISmNiaUFnSUNBZ0lDQWdKQ2hrYVdGc2IyY3BMbVpwYm1Rb0p5NWthV0ZzYjJjdFkyeHZjMlV0YVdOdmJpY3BMbTl1S0NkamJHbGpheWNzSUdOc2IzTmxVMmh2ZDNKdmIyMVVkWFJ2Y21saGJFUnBZV3h2WnlsY2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQm1kVzVqZEdsdmJpQmpiRzl6WlZOb2IzZHliMjl0VkhWMGIzSnBZV3hFYVdGc2IyY29LU0I3WEhKY2JpQWdJQ0FnSUNBZ0pDZ25JMlJwWVd4dlowOTJaWEpzWVhrbktTNW9hV1JsS0NsY2NseHVJQ0FnSUNBZ0lDQWtLQ2RpYjJSNUp5a3VZM056S0NkdmRtVnlabXh2ZHljc0lDZDJhWE5wWW14bEp5bGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0pDZ25JM05vYjNkeWIyOXRMV052YlcxdmJpMTBkWFJ2Y21saGJDMWxiblJ5ZVNjcExtaHBaR1VvS1Z4eVhHNGdJQ0FnSUNBZ0lHTnZiMnRwWlM1elpYUkRiMjlyYVdVb1hDSnphRzkzY205dmJWOTBkWFJ2Y21saGJGOXNhVzVyWENJc0lGd2lYQ0lzSURFcFhISmNiaUFnSUNCOVhISmNibHh5WEc0dkwzMHBPeUpkZlE9PSIsIi8vZGVmaW5lKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHtcclxuXHRcclxuICAgIHZhciBsb2FkSlMgPSBmdW5jdGlvbiAoaWQsIHNyYykge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHJldHVybjtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcclxuICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgc2NyaXB0LmlkID0gaWQ7XHJcbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcclxuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbG9hZFNvY2lhbEpTID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgXCJmYWNlYm9va1wiIDogXCIvL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL3Nkay5qcyN4ZmJtbD0xJnZlcnNpb249djIuMyZhcHBJZD1cIiArIHdlYkRhdGEuZmJfYXBwLFxyXG4gICAgICAgICAgICBcInR3aXR0ZXJcIiA6IFwiaHR0cHM6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbS93aWRnZXRzLmpzXCIsXHJcbiAgICAgICAgICAgIFwicGluaXRcIiA6IFwiLy9hc3NldHMucGludGVyZXN0LmNvbS9qcy9waW5pdC5qc1wiLFxyXG4gICAgICAgICAgICBcImdwbHVzb25lXCIgOiBcImh0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL3BsdXNvbmUuanNcIixcclxuICAgICAgICAgICAgXCJsaXZlY2hhdFwiIDogKCdodHRwczonID09IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sID8gJ2h0dHBzOi8vJyA6ICdodHRwOi8vJykgKyAnY2RuLmxpdmVjaGF0aW5jLmNvbS90cmFja2luZy5qcycsXHJcbiAgICAgICAgICAgIFwiZ21haWxcIiA6IFwiaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvcGxhdGZvcm0uanM/b25sb2FkPWdtYWlsTG9hZENhbGxiYWNrXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvcih2YXIga2V5IGluIGNvbmZpZykge1xyXG4gICAgICAgICAgICBpZihrZXkgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIGxvYWRKUyhpZCArICctc2RrJywgY29uZmlnW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgICAgIFwibG9hZEpTXCI6IGxvYWRKUyxcclxuICAgICAgICBcImxvYWRTb2NpYWxKU1wiOiBsb2FkU29jaWFsSlNcclxuICAgIH07XHJcblxyXG4vL30pOyIsIi8vZGVmaW5lKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHtcclxudmFyIG1kNWN5Y2xlID0gZnVuY3Rpb24oeCwgaykge1xyXG52YXIgYSA9IHhbMF0sIGIgPSB4WzFdLCBjID0geFsyXSwgZCA9IHhbM107XHJcbmEgPSBmZihhLCBiLCBjLCBkLCBrWzBdLCA3LCAtNjgwODc2OTM2KTtcclxuZCA9IGZmKGQsIGEsIGIsIGMsIGtbMV0sIDEyLCAtMzg5NTY0NTg2KTtcclxuYyA9IGZmKGMsIGQsIGEsIGIsIGtbMl0sIDE3LCAgNjA2MTA1ODE5KTtcclxuYiA9IGZmKGIsIGMsIGQsIGEsIGtbM10sIDIyLCAtMTA0NDUyNTMzMCk7XHJcbmEgPSBmZihhLCBiLCBjLCBkLCBrWzRdLCA3LCAtMTc2NDE4ODk3KTtcclxuZCA9IGZmKGQsIGEsIGIsIGMsIGtbNV0sIDEyLCAgMTIwMDA4MDQyNik7XHJcbmMgPSBmZihjLCBkLCBhLCBiLCBrWzZdLCAxNywgLTE0NzMyMzEzNDEpO1xyXG5iID0gZmYoYiwgYywgZCwgYSwga1s3XSwgMjIsIC00NTcwNTk4Myk7XHJcbmEgPSBmZihhLCBiLCBjLCBkLCBrWzhdLCA3LCAgMTc3MDAzNTQxNik7XHJcbmQgPSBmZihkLCBhLCBiLCBjLCBrWzldLCAxMiwgLTE5NTg0MTQ0MTcpO1xyXG5jID0gZmYoYywgZCwgYSwgYiwga1sxMF0sIDE3LCAtNDIwNjMpO1xyXG5iID0gZmYoYiwgYywgZCwgYSwga1sxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XHJcbmEgPSBmZihhLCBiLCBjLCBkLCBrWzEyXSwgNywgIDE4MDQ2MDM2ODIpO1xyXG5kID0gZmYoZCwgYSwgYiwgYywga1sxM10sIDEyLCAtNDAzNDExMDEpO1xyXG5jID0gZmYoYywgZCwgYSwgYiwga1sxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XHJcbmIgPSBmZihiLCBjLCBkLCBhLCBrWzE1XSwgMjIsICAxMjM2NTM1MzI5KTtcclxuIFxyXG5hID0gZ2coYSwgYiwgYywgZCwga1sxXSwgNSwgLTE2NTc5NjUxMCk7XHJcbmQgPSBnZyhkLCBhLCBiLCBjLCBrWzZdLCA5LCAtMTA2OTUwMTYzMik7XHJcbmMgPSBnZyhjLCBkLCBhLCBiLCBrWzExXSwgMTQsICA2NDM3MTc3MTMpO1xyXG5iID0gZ2coYiwgYywgZCwgYSwga1swXSwgMjAsIC0zNzM4OTczMDIpO1xyXG5hID0gZ2coYSwgYiwgYywgZCwga1s1XSwgNSwgLTcwMTU1ODY5MSk7XHJcbmQgPSBnZyhkLCBhLCBiLCBjLCBrWzEwXSwgOSwgIDM4MDE2MDgzKTtcclxuYyA9IGdnKGMsIGQsIGEsIGIsIGtbMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XHJcbmIgPSBnZyhiLCBjLCBkLCBhLCBrWzRdLCAyMCwgLTQwNTUzNzg0OCk7XHJcbmEgPSBnZyhhLCBiLCBjLCBkLCBrWzldLCA1LCAgNTY4NDQ2NDM4KTtcclxuZCA9IGdnKGQsIGEsIGIsIGMsIGtbMTRdLCA5LCAtMTAxOTgwMzY5MCk7XHJcbmMgPSBnZyhjLCBkLCBhLCBiLCBrWzNdLCAxNCwgLTE4NzM2Mzk2MSk7XHJcbmIgPSBnZyhiLCBjLCBkLCBhLCBrWzhdLCAyMCwgIDExNjM1MzE1MDEpO1xyXG5hID0gZ2coYSwgYiwgYywgZCwga1sxM10sIDUsIC0xNDQ0NjgxNDY3KTtcclxuZCA9IGdnKGQsIGEsIGIsIGMsIGtbMl0sIDksIC01MTQwMzc4NCk7XHJcbmMgPSBnZyhjLCBkLCBhLCBiLCBrWzddLCAxNCwgIDE3MzUzMjg0NzMpO1xyXG5iID0gZ2coYiwgYywgZCwgYSwga1sxMl0sIDIwLCAtMTkyNjYwNzczNCk7XHJcbiBcclxuYSA9IGhoKGEsIGIsIGMsIGQsIGtbNV0sIDQsIC0zNzg1NTgpO1xyXG5kID0gaGgoZCwgYSwgYiwgYywga1s4XSwgMTEsIC0yMDIyNTc0NDYzKTtcclxuYyA9IGhoKGMsIGQsIGEsIGIsIGtbMTFdLCAxNiwgIDE4MzkwMzA1NjIpO1xyXG5iID0gaGgoYiwgYywgZCwgYSwga1sxNF0sIDIzLCAtMzUzMDk1NTYpO1xyXG5hID0gaGgoYSwgYiwgYywgZCwga1sxXSwgNCwgLTE1MzA5OTIwNjApO1xyXG5kID0gaGgoZCwgYSwgYiwgYywga1s0XSwgMTEsICAxMjcyODkzMzUzKTtcclxuYyA9IGhoKGMsIGQsIGEsIGIsIGtbN10sIDE2LCAtMTU1NDk3NjMyKTtcclxuYiA9IGhoKGIsIGMsIGQsIGEsIGtbMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xyXG5hID0gaGgoYSwgYiwgYywgZCwga1sxM10sIDQsICA2ODEyNzkxNzQpO1xyXG5kID0gaGgoZCwgYSwgYiwgYywga1swXSwgMTEsIC0zNTg1MzcyMjIpO1xyXG5jID0gaGgoYywgZCwgYSwgYiwga1szXSwgMTYsIC03MjI1MjE5NzkpO1xyXG5iID0gaGgoYiwgYywgZCwgYSwga1s2XSwgMjMsICA3NjAyOTE4OSk7XHJcbmEgPSBoaChhLCBiLCBjLCBkLCBrWzldLCA0LCAtNjQwMzY0NDg3KTtcclxuZCA9IGhoKGQsIGEsIGIsIGMsIGtbMTJdLCAxMSwgLTQyMTgxNTgzNSk7XHJcbmMgPSBoaChjLCBkLCBhLCBiLCBrWzE1XSwgMTYsICA1MzA3NDI1MjApO1xyXG5iID0gaGgoYiwgYywgZCwgYSwga1syXSwgMjMsIC05OTUzMzg2NTEpO1xyXG4gXHJcbmEgPSBpaShhLCBiLCBjLCBkLCBrWzBdLCA2LCAtMTk4NjMwODQ0KTtcclxuZCA9IGlpKGQsIGEsIGIsIGMsIGtbN10sIDEwLCAgMTEyNjg5MTQxNSk7XHJcbmMgPSBpaShjLCBkLCBhLCBiLCBrWzE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcclxuYiA9IGlpKGIsIGMsIGQsIGEsIGtbNV0sIDIxLCAtNTc0MzQwNTUpO1xyXG5hID0gaWkoYSwgYiwgYywgZCwga1sxMl0sIDYsICAxNzAwNDg1NTcxKTtcclxuZCA9IGlpKGQsIGEsIGIsIGMsIGtbM10sIDEwLCAtMTg5NDk4NjYwNik7XHJcbmMgPSBpaShjLCBkLCBhLCBiLCBrWzEwXSwgMTUsIC0xMDUxNTIzKTtcclxuYiA9IGlpKGIsIGMsIGQsIGEsIGtbMV0sIDIxLCAtMjA1NDkyMjc5OSk7XHJcbmEgPSBpaShhLCBiLCBjLCBkLCBrWzhdLCA2LCAgMTg3MzMxMzM1OSk7XHJcbmQgPSBpaShkLCBhLCBiLCBjLCBrWzE1XSwgMTAsIC0zMDYxMTc0NCk7XHJcbmMgPSBpaShjLCBkLCBhLCBiLCBrWzZdLCAxNSwgLTE1NjAxOTgzODApO1xyXG5iID0gaWkoYiwgYywgZCwgYSwga1sxM10sIDIxLCAgMTMwOTE1MTY0OSk7XHJcbmEgPSBpaShhLCBiLCBjLCBkLCBrWzRdLCA2LCAtMTQ1NTIzMDcwKTtcclxuZCA9IGlpKGQsIGEsIGIsIGMsIGtbMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xyXG5jID0gaWkoYywgZCwgYSwgYiwga1syXSwgMTUsICA3MTg3ODcyNTkpO1xyXG5iID0gaWkoYiwgYywgZCwgYSwga1s5XSwgMjEsIC0zNDM0ODU1NTEpO1xyXG4gXHJcbnhbMF0gPSBhZGQzMihhLCB4WzBdKTtcclxueFsxXSA9IGFkZDMyKGIsIHhbMV0pO1xyXG54WzJdID0gYWRkMzIoYywgeFsyXSk7XHJcbnhbM10gPSBhZGQzMihkLCB4WzNdKTtcclxuIFxyXG59XHJcbiBcclxudmFyIGNtbiA9IGZ1bmN0aW9uKHEsIGEsIGIsIHgsIHMsIHQpIHtcclxuYSA9IGFkZDMyKGFkZDMyKGEsIHEpLCBhZGQzMih4LCB0KSk7XHJcbnJldHVybiBhZGQzMigoYSA8PCBzKSB8IChhID4+PiAoMzIgLSBzKSksIGIpO1xyXG59XHJcbiBcclxudmFyIGZmID0gZnVuY3Rpb24oYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG5yZXR1cm4gY21uKChiICYgYykgfCAoKH5iKSAmIGQpLCBhLCBiLCB4LCBzLCB0KTtcclxufVxyXG4gXHJcbnZhciBnZyA9IGZ1bmN0aW9uKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxucmV0dXJuIGNtbigoYiAmIGQpIHwgKGMgJiAofmQpKSwgYSwgYiwgeCwgcywgdCk7XHJcbn1cclxuIFxyXG52YXIgaGggPSBmdW5jdGlvbihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbnJldHVybiBjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcclxufVxyXG4gXHJcbnZhciBpaSA9IGZ1bmN0aW9uKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxucmV0dXJuIGNtbihjIF4gKGIgfCAofmQpKSwgYSwgYiwgeCwgcywgdCk7XHJcbn1cclxuIFxyXG52YXIgbWQ1MSA9IGZ1bmN0aW9uKHMpIHtcclxudHh0ID0gJyc7XHJcbnZhciBuID0gcy5sZW5ndGgsXHJcbnN0YXRlID0gWzE3MzI1ODQxOTMsIC0yNzE3MzM4NzksIC0xNzMyNTg0MTk0LCAyNzE3MzM4NzhdLCBpO1xyXG5mb3IgKGk9NjQ7IGk8PXMubGVuZ3RoOyBpKz02NCkge1xyXG5tZDVjeWNsZShzdGF0ZSwgbWQ1YmxrKHMuc3Vic3RyaW5nKGktNjQsIGkpKSk7XHJcbn1cclxucyA9IHMuc3Vic3RyaW5nKGktNjQpO1xyXG52YXIgdGFpbCA9IFswLDAsMCwwLCAwLDAsMCwwLCAwLDAsMCwwLCAwLDAsMCwwXTtcclxuZm9yIChpPTA7IGk8cy5sZW5ndGg7IGkrKylcclxudGFpbFtpPj4yXSB8PSBzLmNoYXJDb2RlQXQoaSkgPDwgKChpJTQpIDw8IDMpO1xyXG50YWlsW2k+PjJdIHw9IDB4ODAgPDwgKChpJTQpIDw8IDMpO1xyXG5pZiAoaSA+IDU1KSB7XHJcbm1kNWN5Y2xlKHN0YXRlLCB0YWlsKTtcclxuZm9yIChpPTA7IGk8MTY7IGkrKykgdGFpbFtpXSA9IDA7XHJcbn1cclxudGFpbFsxNF0gPSBuKjg7XHJcbm1kNWN5Y2xlKHN0YXRlLCB0YWlsKTtcclxucmV0dXJuIHN0YXRlO1xyXG59XHJcbiBcclxuLyogdGhlcmUgbmVlZHMgdG8gYmUgc3VwcG9ydCBmb3IgVW5pY29kZSBoZXJlLFxyXG4gKiB1bmxlc3Mgd2UgcHJldGVuZCB0aGF0IHdlIGNhbiByZWRlZmluZSB0aGUgTUQtNVxyXG4gKiBhbGdvcml0aG0gZm9yIG11bHRpLWJ5dGUgY2hhcmFjdGVycyAocGVyaGFwc1xyXG4gKiBieSBhZGRpbmcgZXZlcnkgZm91ciAxNi1iaXQgY2hhcmFjdGVycyBhbmRcclxuICogc2hvcnRlbmluZyB0aGUgc3VtIHRvIDMyIGJpdHMpLiBPdGhlcndpc2VcclxuICogSSBzdWdnZXN0IHBlcmZvcm1pbmcgTUQtNSBhcyBpZiBldmVyeSBjaGFyYWN0ZXJcclxuICogd2FzIHR3byBieXRlcy0tZS5nLiwgMDA0MCAwMDI1ID0gQCUtLWJ1dCB0aGVuXHJcbiAqIGhvdyB3aWxsIGFuIG9yZGluYXJ5IE1ELTUgc3VtIGJlIG1hdGNoZWQ/XHJcbiAqIFRoZXJlIGlzIG5vIHdheSB0byBzdGFuZGFyZGl6ZSB0ZXh0IHRvIHNvbWV0aGluZ1xyXG4gKiBsaWtlIFVURi04IGJlZm9yZSB0cmFuc2Zvcm1hdGlvbjsgc3BlZWQgY29zdCBpc1xyXG4gKiB1dHRlcmx5IHByb2hpYml0aXZlLiBUaGUgSmF2YVNjcmlwdCBzdGFuZGFyZFxyXG4gKiBpdHNlbGYgbmVlZHMgdG8gbG9vayBhdCB0aGlzOiBpdCBzaG91bGQgc3RhcnRcclxuICogcHJvdmlkaW5nIGFjY2VzcyB0byBzdHJpbmdzIGFzIHByZWZvcm1lZCBVVEYtOFxyXG4gKiA4LWJpdCB1bnNpZ25lZCB2YWx1ZSBhcnJheXMuXHJcbiAqL1xyXG52YXIgbWQ1YmxrID0gZnVuY3Rpb24ocykgeyAvKiBJIGZpZ3VyZWQgZ2xvYmFsIHdhcyBmYXN0ZXIuICAgKi9cclxudmFyIG1kNWJsa3MgPSBbXSwgaTsgLyogQW5keSBLaW5nIHNhaWQgZG8gaXQgdGhpcyB3YXkuICovXHJcbmZvciAoaT0wOyBpPDY0OyBpKz00KSB7XHJcbm1kNWJsa3NbaT4+Ml0gPSBzLmNoYXJDb2RlQXQoaSlcclxuKyAocy5jaGFyQ29kZUF0KGkrMSkgPDwgOClcclxuKyAocy5jaGFyQ29kZUF0KGkrMikgPDwgMTYpXHJcbisgKHMuY2hhckNvZGVBdChpKzMpIDw8IDI0KTtcclxufVxyXG5yZXR1cm4gbWQ1YmxrcztcclxufVxyXG4gXHJcbnZhciBoZXhfY2hyID0gJzAxMjM0NTY3ODlhYmNkZWYnLnNwbGl0KCcnKTtcclxuIFxyXG52YXIgcmhleCA9IGZ1bmN0aW9uKG4pXHJcbntcclxudmFyIHM9JycsIGo9MDtcclxuZm9yKDsgajw0OyBqKyspXHJcbnMgKz0gaGV4X2NoclsobiA+PiAoaiAqIDggKyA0KSkgJiAweDBGXVxyXG4rIGhleF9jaHJbKG4gPj4gKGogKiA4KSkgJiAweDBGXTtcclxucmV0dXJuIHM7XHJcbn1cclxuIFxyXG52YXIgaGV4ID0gZnVuY3Rpb24oeCkge1xyXG5mb3IgKHZhciBpPTA7IGk8eC5sZW5ndGg7IGkrKylcclxueFtpXSA9IHJoZXgoeFtpXSk7XHJcbnJldHVybiB4LmpvaW4oJycpO1xyXG59XHJcbiBcclxud2luZG93Lm1kNSA9IGZ1bmN0aW9uKHMpIHtcclxucmV0dXJuIGhleChtZDUxKHMpKTtcclxufVxyXG4gXHJcbi8qIHRoaXMgZnVuY3Rpb24gaXMgbXVjaCBmYXN0ZXIsXHJcbnNvIGlmIHBvc3NpYmxlIHdlIHVzZSBpdC4gU29tZSBJRXNcclxuYXJlIHRoZSBvbmx5IG9uZXMgSSBrbm93IG9mIHRoYXRcclxubmVlZCB0aGUgaWRpb3RpYyBzZWNvbmQgZnVuY3Rpb24sXHJcbmdlbmVyYXRlZCBieSBhbiBpZiBjbGF1c2UuICAqL1xyXG4gXHJcbnZhciBhZGQzMiA9IGZ1bmN0aW9uKGEsIGIpIHtcclxucmV0dXJuIChhICsgYikgJiAweEZGRkZGRkZGO1xyXG59XHJcbiBcclxuaWYgKG1kNSgnaGVsbG8nKSAhPSAnNWQ0MTQwMmFiYzRiMmE3NmI5NzE5ZDkxMTAxN2M1OTInKSB7XHJcbnZhciBhZGQzMiA9IGZ1bmN0aW9uKHgsIHkpIHtcclxudmFyIGxzdyA9ICh4ICYgMHhGRkZGKSArICh5ICYgMHhGRkZGKSxcclxubXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XHJcbnJldHVybiAobXN3IDw8IDE2KSB8IChsc3cgJiAweEZGRkYpO1xyXG59XHJcbn1cclxuIFxyXG4vL30pOyIsInZhciBvcGVuSW5Qb3B1cCA9ICBmdW5jdGlvbiAob3Blbikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh1cmwsIG5hbWUsIHcsIGgpIHtcclxuICAgICAgICB2YXIgdyA9IHBhcnNlSW50KHcpIHx8IDQ3NTtcclxuICAgICAgICB2YXIgaCA9IHBhcnNlSW50KGgpIHx8IDE4MztcclxuICAgICAgICAvLyBGaXhlcyBkdWFsLXNjcmVlbiBwb3NpdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICBNb3N0IGJyb3dzZXJzICAgICAgRmlyZWZveFxyXG4gICAgICAgIHZhciBkdWFsU2NyZWVuTGVmdCA9IHdpbmRvdy5zY3JlZW5MZWZ0ICE9IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogc2NyZWVuLmxlZnQ7XHJcbiAgICAgICAgdmFyIGR1YWxTY3JlZW5Ub3AgPSB3aW5kb3cuc2NyZWVuVG9wICE9IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5Ub3AgOiBzY3JlZW4udG9wO1xyXG5cclxuICAgICAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA/IHdpbmRvdy5pbm5lcldpZHRoIDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDogc2NyZWVuLndpZHRoO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA6IHNjcmVlbi5oZWlnaHQ7XHJcblxyXG4gICAgICAgIHZhciBsZWZ0ID0gKCh3aWR0aCAvIDIpIC0gKHcgLyAyKSkgKyBkdWFsU2NyZWVuTGVmdDtcclxuICAgICAgICB2YXIgdG9wID0gKChoZWlnaHQgLyAyKSAtIChoIC8gMikpICsgZHVhbFNjcmVlblRvcDtcclxuICAgICAgICB2YXIgb3ZlcnJpZGVfZmVhdHVyZXMgPSAnd2lkdGg9JyArIHcgKyAnLGhlaWdodD0nICsgaCArICcsbGVmdD0nICsgbGVmdCArICcsdG9wPScgKyB0b3AgKyAnLHNjcm9sbGJhcnM9MSxsb2NhdGlvbj0xLHRvb2xiYXI9MCc7XHJcblxyXG4gICAgICAgIC8vIHNldCBuYW1lIGlmIG1pc3NpbmcgaGVyZVxyXG4gICAgICAgIC8vbmFtZSA9IG5hbWUgfHwgXCJkZWZhdWx0X3dpbmRvd19uYW1lXCI7XHJcbiAgICAgICAgcmV0dXJuIG9wZW4uY2FsbCh3aW5kb3csIHVybCwgbmFtZSwgb3ZlcnJpZGVfZmVhdHVyZXMpO1xyXG4gICAgfTtcclxufSh3aW5kb3cub3Blbik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG9wZW5JblBvcHVwO1xyXG4iLCIvL2RlZmluZShmdW5jdGlvbihyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHtcclxuZnVuY3Rpb24gU3RyaW5nSGFuZGxlKCkge31cclxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmdIYW5kbGU7XHJcblxyXG5TdHJpbmdIYW5kbGUucHJvdG90eXBlLnF1b3RlYXR0ciA9IGZ1bmN0aW9uIChzdHJpbmcsIHByZXNlcnZlQ1IpIHtcclxuXHRwcmVzZXJ2ZUNSID0gcHJlc2VydmVDUiA/ICcmIzEzOycgOiAnXFxuJztcclxuXHRyZXR1cm4gKCcnICsgc3RyaW5nKSAgICAgICAgICAgICAgICAgICAvKiBGb3JjZXMgdGhlIGNvbnZlcnNpb24gdG8gc3RyaW5nLiAqL1xyXG5cdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7JykgICAgICAgICAgICAvKiBUaGlzIE1VU1QgYmUgdGhlIDFzdCByZXBsYWNlbWVudC4gKi9cclxuXHRcdC5yZXBsYWNlKC8nL2csICcmYXBvczsnKSAgICAgICAgICAgLyogVGhlIDQgb3RoZXIgcHJlZGVmaW5lZCBlbnRpdGllcywgcmVxdWlyZWQuICovXHJcblx0XHQucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXHJcblx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXHJcblx0XHQucmVwbGFjZSgvPi9nLCAnJmd0OycpXHJcblx0XHQvKlxyXG5cdFx0IFlvdSBtYXkgYWRkIG90aGVyIHJlcGxhY2VtZW50cyBoZXJlIGZvciBIVE1MIG9ubHlcclxuXHRcdCAoYnV0IGl0J3Mgbm90IG5lY2Vzc2FyeSkuXHJcblx0XHQgT3IgZm9yIFhNTCwgb25seSBpZiB0aGUgbmFtZWQgZW50aXRpZXMgYXJlIGRlZmluZWQgaW4gaXRzIERURC5cclxuXHRcdCAqL1xyXG5cdFx0LnJlcGxhY2UoL1xcclxcbi9nLCBwcmVzZXJ2ZUNSKSAgICAgIC8qIE11c3QgYmUgYmVmb3JlIHRoZSBuZXh0IHJlcGxhY2VtZW50LiAqL1xyXG5cdFx0LnJlcGxhY2UoL1tcXHJcXG5dL2csIHByZXNlcnZlQ1IpO1xyXG5cdDtcclxufVxyXG5cclxuLy99KTsiLCIvL2RlZmluZShmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgbW9kdWxlKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gVXNlckFnZW50KCkge31cclxuICAgIG1vZHVsZS5leHBvcnRzID0gVXNlckFnZW50O1xyXG5cclxuICAgIFVzZXJBZ2VudC5wcm90b3R5cGUuaXNJcGFkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFVzZXJBZ2VudC5wcm90b3R5cGUuaXNQaG9uZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKSB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC93ZWJPUy9pKSB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSkgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKSB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5LykgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV2luZG93cyBQaG9uZS9pKSB8fFx0bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvWnVuZVdQNy9pKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFVzZXJBZ2VudC5wcm90b3R5cGUuaXNJRSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHZhciBpc0lFID0gKC9tc2llLy50ZXN0KHVzZXJBZ2VudCkgJiYgIS9vcGVyYS8udGVzdCh1c2VyQWdlbnQpKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gaXNJRTtcclxuICAgIH1cclxuXHJcbiAgICBVc2VyQWdlbnQucHJvdG90eXBlLmlzSUVWZXJzaW9uID0gZnVuY3Rpb24gKHZlcnNpb24pIHtcclxuICAgICAgICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHZhciBpc0lFID0gKC9tc2llLy50ZXN0KHVzZXJBZ2VudCkgJiYgIS9vcGVyYS8udGVzdCh1c2VyQWdlbnQpKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB2YXIgdWFWZXJzaW9uID0gKHVzZXJBZ2VudC5tYXRjaCggLy4rKD86cnZ8aXR8cmF8aWUpW1xcLzogXShbXFxkLl0rKS8gKSB8fCBbXSlbMV07XHJcbiAgICAgICAgaWYoaXNJRSAmJiBwYXJzZUludCh1YVZlcnNpb24pID09IHBhcnNlSW50KHZlcnNpb24pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBVc2VyQWdlbnQucHJvdG90eXBlLmRldGVjdEJyb3dzZXI9ZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdWE9IG5hdmlnYXRvci51c2VyQWdlbnQsIHRlbSwgXHJcbiAgICAgICAgTT0gdWEubWF0Y2goLyhvcGVyYXxjaHJvbWV8c2FmYXJpfGZpcmVmb3h8bXNpZXx0cmlkZW50KD89XFwvKSlcXC8/XFxzKihcXGQrKS9pKSB8fCBbXTtcclxuICAgICAgICBpZigvdHJpZGVudC9pLnRlc3QoTVsxXSkpe1xyXG4gICAgICAgICAgICB0ZW09ICAvXFxicnZbIDpdKyhcXGQrKS9nLmV4ZWModWEpIHx8IFtdO1xyXG4gICAgICAgICAgICByZXR1cm4gJ0lFICcrKHRlbVsxXSB8fCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKE1bMV09PT0gJ0Nocm9tZScpe1xyXG4gICAgICAgICAgICB0ZW09IHVhLm1hdGNoKC9cXGJPUFJcXC8oXFxkKykvKVxyXG4gICAgICAgICAgICBpZih0ZW0hPSBudWxsKSByZXR1cm4gJ09wZXJhICcrdGVtWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBNPSBNWzJdPyBbTVsxXSwgTVsyXV06IFtuYXZpZ2F0b3IuYXBwTmFtZSwgbmF2aWdhdG9yLmFwcFZlcnNpb24sICctPyddO1xyXG4gICAgICAgIGlmKCh0ZW09IHVhLm1hdGNoKC92ZXJzaW9uXFwvKFxcZCspL2kpKSE9IG51bGwpIE0uc3BsaWNlKDEsIDEsIHRlbVsxXSk7XHJcbiAgICAgICAgcmV0dXJuIE0uam9pbignICcpO1xyXG4gICAgfTtcclxuXHJcbi8vfSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuXHJcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG5cclxudmFyIEZhdm9yaXRlcyA9IHJlcXVpcmUoJy4uL21vZC9mYXZvcml0ZXMnKTtcclxudmFyIGZhdm9yaXRlcyA9IG5ldyBGYXZvcml0ZXMoKTtcclxuXHJcbnZhciBkZWxldGVfZmF2b3IgPSBmdW5jdGlvbihtZSwgZmF2Q291bnQpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxufVxyXG5cclxuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcblxyXG4gICAgdmFyIEZhdm9yaXRlcyA9IHJlcXVpcmUoJy4uL21vZC9mYXZvcml0ZXMnKTtcclxuICAgIHZhciBmYXZvcml0ZXMgPSBuZXcgRmF2b3JpdGVzKCk7XHJcblxyXG4gICAgdmFyIHByb2RfbGlzdCA9ICQoJy5mYXYtcHJvZC1saXN0Jyk7XHJcblxyXG4gICAgcHJvZF9saXN0LmZpbmQoJy5qcy1kZWwtZmF2LWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGlwcyA9IF9sYW5nLnBhZ2VfZGVsZXRlX3Nob3dyb29tX2dvb2Q7XHJcbiAgICAgICAgdmFyIHJzID0gY29uZmlybSh0aXBzKTtcclxuICAgICAgICBpZiAocnMgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZ29vZHNJZCA9ICQodGhpcykuZGF0YSgnZ29vZHMtaWQnKTtcclxuICAgICAgICBmYXZvcml0ZXMuZGVsRmF2KGdvb2RzSWQsIGRlbGV0ZV9mYXZvciwgJCh0aGlzKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAkKCcuZmF2b3JpdGUtc2hhcmUtaWNvbiwgLmZhdm9yaXRlLXNoYXJlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIC8vICAgICBhbGVydCgxMjMpO1xyXG4gICAgLy8gfSk7XHJcbn07XHJcblxyXG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1kaFpXRXZhbk12Y0dGblpYTXZabUYyYjNKcGRHVnpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU0lzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVhISmNiblpoY2lBa0lEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5QjNhVzVrYjNkYkp5UW5YU0E2SUhSNWNHVnZaaUJuYkc5aVlXd2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUJuYkc5aVlXeGJKeVFuWFNBNklHNTFiR3dwTzF4eVhHNWNjbHh1ZG1GeUlFWmhkbTl5YVhSbGN5QTlJSEpsY1hWcGNtVW9KeTR1TDIxdlpDOW1ZWFp2Y21sMFpYTW5LVHRjY2x4dWRtRnlJR1poZG05eWFYUmxjeUE5SUc1bGR5QkdZWFp2Y21sMFpYTW9LVHRjY2x4dVhISmNiblpoY2lCa1pXeGxkR1ZmWm1GMmIzSWdQU0JtZFc1amRHbHZiaWh0WlN3Z1ptRjJRMjkxYm5RcElIdGNjbHh1SUNBZ0lIZHBibVJ2ZHk1c2IyTmhkR2x2Ymk1eVpXeHZZV1FvS1R0Y2NseHVmVnh5WEc1Y2NseHVaWGh3YjNKMGN5NXBibWwwSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdkbUZ5SUNRZ1BTQW9kSGx3Wlc5bUlIZHBibVJ2ZHlBaFBUMGdYQ0oxYm1SbFptbHVaV1JjSWlBL0lIZHBibVJ2ZDFzbkpDZGRJRG9nZEhsd1pXOW1JR2RzYjJKaGJDQWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JR2RzYjJKaGJGc25KQ2RkSURvZ2JuVnNiQ2s3WEhKY2JseHlYRzRnSUNBZ2RtRnlJRVpoZG05eWFYUmxjeUE5SUhKbGNYVnBjbVVvSnk0dUwyMXZaQzltWVhadmNtbDBaWE1uS1R0Y2NseHVJQ0FnSUhaaGNpQm1ZWFp2Y21sMFpYTWdQU0J1WlhjZ1JtRjJiM0pwZEdWektDazdYSEpjYmx4eVhHNGdJQ0FnZG1GeUlIQnliMlJmYkdsemRDQTlJQ1FvSnk1bVlYWXRjSEp2WkMxc2FYTjBKeWs3WEhKY2JseHlYRzRnSUNBZ2NISnZaRjlzYVhOMExtWnBibVFvSnk1cWN5MWtaV3d0Wm1GMkxXSjBiaWNwTG05dUtDZGpiR2xqYXljc0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCMllYSWdkR2x3Y3lBOUlGOXNZVzVuTG5CaFoyVmZaR1ZzWlhSbFgzTm9iM2R5YjI5dFgyZHZiMlE3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJSEp6SUQwZ1kyOXVabWx5YlNoMGFYQnpLVHRjY2x4dUlDQWdJQ0FnSUNCcFppQW9jbk1nUFQwZ1ptRnNjMlVwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQjJZWElnWjI5dlpITkpaQ0E5SUNRb2RHaHBjeWt1WkdGMFlTZ25aMjl2WkhNdGFXUW5LVHRjY2x4dUlDQWdJQ0FnSUNCbVlYWnZjbWwwWlhNdVpHVnNSbUYyS0dkdmIyUnpTV1FzSUdSbGJHVjBaVjltWVhadmNpd2dKQ2gwYUdsektTazdYSEpjYmlBZ0lDQjlLVHRjY2x4dVhISmNiaUFnSUNBdkx5QWtLQ2N1Wm1GMmIzSnBkR1V0YzJoaGNtVXRhV052Yml3Z0xtWmhkbTl5YVhSbExYTm9ZWEpsSnlrdWIyNG9KMk5zYVdOckp5d2dablZ1WTNScGIyNG9LWHRjY2x4dUlDQWdJQzh2SUNBZ0lDQmhiR1Z5ZENneE1qTXBPMXh5WEc0Z0lDQWdMeThnZlNrN1hISmNibjA3WEhKY2JseHlYRzRpWFgwPSIsIi8vZGVmaW5lKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHtcclxuICAgdmFyIG9wZW5JblBvcHVwID0gcmVxdWlyZSgnLi4vbW9kL29wZW5JblBvcHVwJyk7XHJcbiAgIHZhciBpbml0ID0gZnVuY3Rpb24oRkJBcHBJZCkge1xyXG4gICAgICAgIGlmICghRkJBcHBJZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBGQi5pbml0KHtcclxuICAgICAgICAgICAgYXBwSWQgOiBGQkFwcElkLFxyXG4gICAgICAgICAgICBzdGF0dXMgOiBmYWxzZSxcclxuICAgICAgICAgICAgY29va2llIDogdHJ1ZSxcclxuICAgICAgICAgICAgeGZibWwgOiB0cnVlLFxyXG4gICAgICAgICAgICBvYXV0aCA6IHRydWUsXHJcbiAgICAgICAgICAgIHZlcnNpb24gOiAndjIuMydcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICB2YXIgc2hhcmVHb29kc1BpYyA9IGZ1bmN0aW9uIChsaW5rLCBwaWNVcmwsIG5hbWUsIGNhcHRpb24sIGRlc2NyaXB0aW9uLCBwYWdlVHlwZSkge1xyXG4gICAgICAgd2luZG93Lm9wZW4gPSBvcGVuSW5Qb3B1cDtcclxuICAgICAgIEZCLnVpKHtcclxuICAgICAgICAgICBtZXRob2Q6ICdmZWVkJyxcclxuICAgICAgICAgICBkaXNwbGF5OiAncG9wdXAnLFxyXG4gICAgICAgICAgIGxpbms6IGxpbmssXHJcbiAgICAgICAgICAgcGljdHVyZTogcGljVXJsLFxyXG4gICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgY2FwdGlvbjogY2FwdGlvbixcclxuICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cclxuICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICAgICB3aW5kb3cub3BlbiA9IHdpbmRvdy5vcmlnaW5PcGVuO1xyXG4gICAgICAgICAgIHZhciBTSEFSRV9TVUNDX0NPTlNUID0gMVxyXG4gICAgICAgICAgIHZhciBTSEFSRV9GQUlMX0NPTlNUID0gMFxyXG4gICAgICAgICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgJ3Nuc1BhZ2VUeXBlJyA6IHBhZ2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgJ2V2ZW50JyA6ICdmYlNoYXJlU3VjY2VzcydcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgIC8vIHRyYWNrRmFjZWJvb2tTaGFyZShsaW5rLCBwaWNVcmwsIGNhcHRpb24sIFNIQVJFX1NVQ0NfQ09OU1QpXHJcbiAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgLy9vbmx5IHJlY29yZCB3aGVuIGZhaWxcclxuICAgICAgICAgICAgICAgdHJhY2tGYWNlYm9va1NoYXJlKGxpbmssIHBpY1VybCwgY2FwdGlvbiwgU0hBUkVfRkFJTF9DT05TVClcclxuICAgICAgICAgICB9XHJcbiAgICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHZhciB0cmFja0ZhY2Vib29rU2hhcmUgPSBmdW5jdGlvbiAobGluaywgcGljVXJsLCBjYXB0aW9uLCBzdGF0dXMpIHtcclxuICAgICAgIHZhciBnb29kc0lkID0gbGluay5yZXBsYWNlKC8uKi1nKFswLTldKykuKi8sIFwiJDFcIilcclxuICAgICAgIGlmKGdvb2RzSWQgPT0gbGluaykgcmV0dXJuXHJcbiAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgIFwidHlwZVwiOiBcIlBPU1RcIixcclxuICAgICAgICAgICBcInVybFwiOiB3ZWJEYXRhLldFQl9ST09UICsgXCJhamF4LnBocFwiLFxyXG4gICAgICAgICAgIFwiZGF0YVwiOiBcImFjdD1zbnNfc2hhcmVfZGF0YV9yZWNvcmQmZ29vZHNfaWQ9XCIgKyBnb29kc0lkICsgXCImZG9tYWluPVwiICsgY2FwdGlvbiArIFwiJnNoYXJlX3N0YXR1cz1cIiArIHN0YXR1cyArIFwiJnNuc190eXBlPWZhY2Vib29rXCIsXHJcbiAgICAgICAgICAgXCJjYWNoZVwiOiBmYWxzZSxcclxuICAgICAgICAgICBcImRhdGFUeXBlXCI6IFwianNvblwiXHJcbiAgICAgICB9KTtcclxuICAgfVxyXG5cclxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgICAgIFwiaW5pdFwiOiBpbml0LFxyXG4gICAgICAgIFwic2hhcmVHb29kc1BpY1wiOiBzaGFyZUdvb2RzUGljXHJcbiAgICB9O1xyXG4vL30pOyIsIi8vIHJlcXVpcmUoJy4vY29tbW9uJylcclxuXHJcbnJlcXVpcmUoJy4uL3BhZ2VzL2Zhdm9yaXRlcycpLmluaXQoKTsgLy9GYXZvcml0ZXNcclxucmVxdWlyZSgnLi4vZmF2b3JpdGVzL3NoYXJlJyk7IC8vc25zIHNoYXJlXHJcbi8vIHJlcXVpcmUoJy4uL2Zhdm9yaXRlcy9lbWFpbF9zaGFyZScpLmluaXQoKTsgLy9lbWFpbCBzaGFyZVxyXG5yZXF1aXJlKCcuLi9jb21tb24vYWNjb3VudF9tZW51JykuaW5pdCgpO1xyXG4iXX0=

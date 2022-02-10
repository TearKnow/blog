require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
require('../lib/jqueryForm');
var address = require('../mod/address');
var loading = require('./loading');

var address_list = $('.addressbook-list'); //地址列表
var address_form = $('#address_form');

//修改地址
function editAddress(address_id, address_type) {
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

            //更换标题，显示/隐藏Address 1的tip
            if(address_type == 'BILLING') {
                address_form.find('h4:eq(0)').html(_lang.page_billing_address_your_address);
                address_form.find('#_address_1').siblings('.address-tip').hide();
            } else {
                address_form.find('h4:eq(0)').html(_lang.page_checkout_your_shipping_address);
                address_form.find('#_address_1').siblings('.address-tip').show();
            }
            $(window).scrollTop(address_form.offset().top);
        },
        'error': function (r) {
            loading.close();
        }
    });
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
                address_list.find('ul[data-id="' + address_id + '"]').remove();
            } else {
                alert(r.msg);
            }
        },
        'error': function (r) {
            loading.close();
        }
    });
}

//将地址设为默认Shipping Address
function setDefaultAddress(address_id) {
    $.ajax({
        'type': 'GET',
        'url': webData.WEB_ROOT + 'ajax.php',
        'data': 'act=set_default_address&address_id='+address_id,
        'cache': false,
        'dataType': 'json',
        'beforeSend': function (r) {
            loading.open();
        },
        'success': function (r) {
            loading.close();
            if (r.code == 0) {
                self.location = webData.WEB_ROOT + 'checkout.php?act=checkout_payment_process';
            } else if (r.code == -1) {
                self.location = r.url;
            }
        },
        'error': function (r) {
            loading.close();
        }
    });
}

//保存地址
function saveAddress() {
    if (!address.check_addr_form(address_form)) {
        return false;
    }
    address_form.ajaxSubmit({
        "beforeSubmit": function() {
            $('.bt-1-new').attr('disabled', true);
            loading.open();
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
                $('.bt-1-new').attr('disabled', false);
                if(address_list.find('ul').length < 1) {
                    self.location = location.href;
                    return;
                }

                var addr_json = r.address;
                var address_whole = addr_json.address;
                if (addr_json.sign_building != '') {
                    address_whole += ',' + addr_json.sign_building;
                }

                var province_whole = '';
                if (addr_json.province_name != null) {
                    province_whole = addr_json.province_name + ',';
                } else if (addr_json.province_text != '') {
                    province_whole = addr_json.province_text + ',';
                }

                var html = '<li><strong>' + addr_json.consignee + '</strong></li>'
                        + '<li>' + address_whole + '</li>'
                        + '<li>' + addr_json.city_text + ',' + province_whole + addr_json.zipcode + '</li>'
                        + '<li>' + addr_json.country_name + '</li>'
                        + '<li>' + addr_json.tel + '</li>'
                        + '<li class="btn-wrap">'
                        + '<a class="edit btn_1" href="javascript:void(0)"><span>' + _lang.page_common_edit + '</span></a>';
                if(addr_json.address_type == 'SHIPPING') {
                    html += '<a class="delete btn_1" href="javascript:void(0)"><span>' + _lang.page_common_delete + '</span></a>';
                    html += '<a class="shipto btn_1" href="javascript:void(0)"><span>' + _lang.page_common_ship_to_this_address + '</span></a>';
                }
                html += '</li>';

                if(addr_json.address_type == 'BILLING') {
                    address_list.find('ul:eq(0)').html(html);
                }

                var address_ul = address_list.find('ul[data-id="' + addr_json.address_id  + '"]');

                if (address_ul.length < 1) {
                    address_list.find('h3:eq(1)').after('<ul data-id="' + addr_json.address_id  + '" data-type="' + addr_json.address_type  + '">' + html + '</ul>');
                    address_ul = address_list.find('ul[data-id="' + addr_json.address_id  + '"]');
                } else {
                    address_ul.html(html);
                }

                $(window).scrollTop(address_ul.offset().top);
                address.init_addr_form(address_form, false);

            } else {
                alert(r.msg);
            }
        }
    });
    return false;
}

var init = function () {
    //绑定地址表单相关事件，主要是切换国家和表单验证
    address.handle_addr_form(address_form);

    //提交表单
    address_form.submit(saveAddress);

    //绑定地址列表相关事件
    address_list.delegate('.edit', 'click', function () {
        //Edit
        var address_id = $(this).closest('ul').attr('data-id');
        var address_type = $(this).closest('ul').attr('data-type');
        editAddress(address_id, address_type);

    }).delegate('.delete', 'click', function () {
        //Delete
        var address_id = $(this).closest('ul').attr('data-id');
        deleteAddress(address_id);

    }).delegate('.shipto', 'click', function () {
        //Ship to this address
        var address_id = $(this).closest('ul').attr('data-id');
        if(parseInt(address_id) == pageData.default_address_id) {
            self.location = webData.WEB_ROOT + 'checkout.php?act=checkout_payment_process';
        } else {
            setDefaultAddress(address_id);
        }
    });
};

module.exports = {
    "init": init
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvY2hlY2tvdXQvYWRkcmVzc19ib29rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG5yZXF1aXJlKCcuLi9saWIvanF1ZXJ5Rm9ybScpO1xyXG52YXIgYWRkcmVzcyA9IHJlcXVpcmUoJy4uL21vZC9hZGRyZXNzJyk7XHJcbnZhciBsb2FkaW5nID0gcmVxdWlyZSgnLi9sb2FkaW5nJyk7XHJcblxyXG52YXIgYWRkcmVzc19saXN0ID0gJCgnLmFkZHJlc3Nib29rLWxpc3QnKTsgLy/lnLDlnYDliJfooahcclxudmFyIGFkZHJlc3NfZm9ybSA9ICQoJyNhZGRyZXNzX2Zvcm0nKTtcclxuXHJcbi8v5L+u5pS55Zyw5Z2AXHJcbmZ1bmN0aW9uIGVkaXRBZGRyZXNzKGFkZHJlc3NfaWQsIGFkZHJlc3NfdHlwZSkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICAndHlwZSc6ICdHRVQnLFxyXG4gICAgICAgICd1cmwnOiAnL2FwaXMvdXNlci9zZWxmL2FkZHJlc3MvJythZGRyZXNzX2lkLFxyXG4gICAgICAgICdjYWNoZSc6IGZhbHNlLFxyXG4gICAgICAgICdkYXRhVHlwZSc6ICdqc29uJyxcclxuICAgICAgICAnYmVmb3JlU2VuZCc6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmcub3BlbigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3N1Y2Nlc3MnOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICBsb2FkaW5nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIGlmIChyLmNvZGUgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubG9jYXRpb24gPSByLnVybDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzcy5pbml0X2FkZHJfZm9ybShhZGRyZXNzX2Zvcm0sIHIuZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzLmluaXRfYWRkcl9mb3JtKGFkZHJlc3NfZm9ybSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+abtOaNouagh+mimO+8jOaYvuekui/pmpDol49BZGRyZXNzIDHnmoR0aXBcclxuICAgICAgICAgICAgaWYoYWRkcmVzc190eXBlID09ICdCSUxMSU5HJykge1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzc19mb3JtLmZpbmQoJ2g0OmVxKDApJykuaHRtbChfbGFuZy5wYWdlX2JpbGxpbmdfYWRkcmVzc195b3VyX2FkZHJlc3MpO1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzc19mb3JtLmZpbmQoJyNfYWRkcmVzc18xJykuc2libGluZ3MoJy5hZGRyZXNzLXRpcCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3NfZm9ybS5maW5kKCdoNDplcSgwKScpLmh0bWwoX2xhbmcucGFnZV9jaGVja291dF95b3VyX3NoaXBwaW5nX2FkZHJlc3MpO1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzc19mb3JtLmZpbmQoJyNfYWRkcmVzc18xJykuc2libGluZ3MoJy5hZGRyZXNzLXRpcCcpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKGFkZHJlc3NfZm9ybS5vZmZzZXQoKS50b3ApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2Vycm9yJzogZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgbG9hZGluZy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+WIoOmZpOWcsOWdgFxyXG5mdW5jdGlvbiBkZWxldGVBZGRyZXNzKGFkZHJlc3NfaWQpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgJ3R5cGUnOiAnUE9TVCcsXHJcbiAgICAgICAgJ3VybCc6ICcvYXBpcy91c2VyL3NlbGYvYWRkcmVzcy8nK2FkZHJlc3NfaWQsXHJcbiAgICAgICAgJ2NhY2hlJzogZmFsc2UsXHJcbiAgICAgICAgJ2RhdGFUeXBlJzogJ2pzb24nLFxyXG4gICAgICAgICdkYXRhJzogeydfTUVUSE9EJzonREVMRVRFJ30sXHJcbiAgICAgICAgJ2JlZm9yZVNlbmQnOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICBsb2FkaW5nLm9wZW4oKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICdzdWNjZXNzJzogZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgbG9hZGluZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICBpZiAoci5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3NfbGlzdC5maW5kKCd1bFtkYXRhLWlkPVwiJyArIGFkZHJlc3NfaWQgKyAnXCJdJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChyLm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdlcnJvcic6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmcuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/lsIblnLDlnYDorr7kuLrpu5jorqRTaGlwcGluZyBBZGRyZXNzXHJcbmZ1bmN0aW9uIHNldERlZmF1bHRBZGRyZXNzKGFkZHJlc3NfaWQpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgJ3R5cGUnOiAnR0VUJyxcclxuICAgICAgICAndXJsJzogd2ViRGF0YS5XRUJfUk9PVCArICdhamF4LnBocCcsXHJcbiAgICAgICAgJ2RhdGEnOiAnYWN0PXNldF9kZWZhdWx0X2FkZHJlc3MmYWRkcmVzc19pZD0nK2FkZHJlc3NfaWQsXHJcbiAgICAgICAgJ2NhY2hlJzogZmFsc2UsXHJcbiAgICAgICAgJ2RhdGFUeXBlJzogJ2pzb24nLFxyXG4gICAgICAgICdiZWZvcmVTZW5kJzogZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgbG9hZGluZy5vcGVuKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmcuY2xvc2UoKTtcclxuICAgICAgICAgICAgaWYgKHIuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvY2F0aW9uID0gd2ViRGF0YS5XRUJfUk9PVCArICdjaGVja291dC5waHA/YWN0PWNoZWNrb3V0X3BheW1lbnRfcHJvY2Vzcyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoci5jb2RlID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvY2F0aW9uID0gci51cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdlcnJvcic6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmcuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/kv53lrZjlnLDlnYBcclxuZnVuY3Rpb24gc2F2ZUFkZHJlc3MoKSB7XHJcbiAgICBpZiAoIWFkZHJlc3MuY2hlY2tfYWRkcl9mb3JtKGFkZHJlc3NfZm9ybSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBhZGRyZXNzX2Zvcm0uYWpheFN1Ym1pdCh7XHJcbiAgICAgICAgXCJiZWZvcmVTdWJtaXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5idC0xLW5ldycpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGxvYWRpbmcub3BlbigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJlcnJvclwiOiBmdW5jdGlvbihhLCBiLCBjKXtcclxuICAgICAgICAgICAgJCgnLmJ0LTEtbmV3JykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN1Y2Nlc3NcIjogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgbG9hZGluZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB2YXIgciA9IGpRdWVyeS5wYXJzZUpTT04oaHRtbCk7XHJcbiAgICAgICAgICAgIGlmIChyLmNvZGUgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubG9jYXRpb24gPSByLnVybDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmJ0LTEtbmV3JykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZihhZGRyZXNzX2xpc3QuZmluZCgndWwnKS5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2NhdGlvbiA9IGxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhZGRyX2pzb24gPSByLmFkZHJlc3M7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWRkcmVzc193aG9sZSA9IGFkZHJfanNvbi5hZGRyZXNzO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFkZHJfanNvbi5zaWduX2J1aWxkaW5nICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc193aG9sZSArPSAnLCcgKyBhZGRyX2pzb24uc2lnbl9idWlsZGluZztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvdmluY2Vfd2hvbGUgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChhZGRyX2pzb24ucHJvdmluY2VfbmFtZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmluY2Vfd2hvbGUgPSBhZGRyX2pzb24ucHJvdmluY2VfbmFtZSArICcsJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWRkcl9qc29uLnByb3ZpbmNlX3RleHQgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm92aW5jZV93aG9sZSA9IGFkZHJfanNvbi5wcm92aW5jZV90ZXh0ICsgJywnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBodG1sID0gJzxsaT48c3Ryb25nPicgKyBhZGRyX2pzb24uY29uc2lnbmVlICsgJzwvc3Ryb25nPjwvbGk+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICArICc8bGk+JyArIGFkZHJlc3Nfd2hvbGUgKyAnPC9saT4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJzxsaT4nICsgYWRkcl9qc29uLmNpdHlfdGV4dCArICcsJyArIHByb3ZpbmNlX3dob2xlICsgYWRkcl9qc29uLnppcGNvZGUgKyAnPC9saT4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJzxsaT4nICsgYWRkcl9qc29uLmNvdW50cnlfbmFtZSArICc8L2xpPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyAnPGxpPicgKyBhZGRyX2pzb24udGVsICsgJzwvbGk+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICArICc8bGkgY2xhc3M9XCJidG4td3JhcFwiPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyAnPGEgY2xhc3M9XCJlZGl0IGJ0bl8xXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPjxzcGFuPicgKyBfbGFuZy5wYWdlX2NvbW1vbl9lZGl0ICsgJzwvc3Bhbj48L2E+JztcclxuICAgICAgICAgICAgICAgIGlmKGFkZHJfanNvbi5hZGRyZXNzX3R5cGUgPT0gJ1NISVBQSU5HJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJzxhIGNsYXNzPVwiZGVsZXRlIGJ0bl8xXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPjxzcGFuPicgKyBfbGFuZy5wYWdlX2NvbW1vbl9kZWxldGUgKyAnPC9zcGFuPjwvYT4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJzxhIGNsYXNzPVwic2hpcHRvIGJ0bl8xXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPjxzcGFuPicgKyBfbGFuZy5wYWdlX2NvbW1vbl9zaGlwX3RvX3RoaXNfYWRkcmVzcyArICc8L3NwYW4+PC9hPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8L2xpPic7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoYWRkcl9qc29uLmFkZHJlc3NfdHlwZSA9PSAnQklMTElORycpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzX2xpc3QuZmluZCgndWw6ZXEoMCknKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhZGRyZXNzX3VsID0gYWRkcmVzc19saXN0LmZpbmQoJ3VsW2RhdGEtaWQ9XCInICsgYWRkcl9qc29uLmFkZHJlc3NfaWQgICsgJ1wiXScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzX3VsLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzX2xpc3QuZmluZCgnaDM6ZXEoMSknKS5hZnRlcignPHVsIGRhdGEtaWQ9XCInICsgYWRkcl9qc29uLmFkZHJlc3NfaWQgICsgJ1wiIGRhdGEtdHlwZT1cIicgKyBhZGRyX2pzb24uYWRkcmVzc190eXBlICArICdcIj4nICsgaHRtbCArICc8L3VsPicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NfdWwgPSBhZGRyZXNzX2xpc3QuZmluZCgndWxbZGF0YS1pZD1cIicgKyBhZGRyX2pzb24uYWRkcmVzc19pZCAgKyAnXCJdJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NfdWwuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKGFkZHJlc3NfdWwub2Zmc2V0KCkudG9wKTtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MuaW5pdF9hZGRyX2Zvcm0oYWRkcmVzc19mb3JtLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoci5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbnZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy/nu5HlrprlnLDlnYDooajljZXnm7jlhbPkuovku7bvvIzkuLvopoHmmK/liIfmjaLlm73lrrblkozooajljZXpqozor4FcclxuICAgIGFkZHJlc3MuaGFuZGxlX2FkZHJfZm9ybShhZGRyZXNzX2Zvcm0pO1xyXG5cclxuICAgIC8v5o+Q5Lqk6KGo5Y2VXHJcbiAgICBhZGRyZXNzX2Zvcm0uc3VibWl0KHNhdmVBZGRyZXNzKTtcclxuXHJcbiAgICAvL+e7keWumuWcsOWdgOWIl+ihqOebuOWFs+S6i+S7tlxyXG4gICAgYWRkcmVzc19saXN0LmRlbGVnYXRlKCcuZWRpdCcsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL0VkaXRcclxuICAgICAgICB2YXIgYWRkcmVzc19pZCA9ICQodGhpcykuY2xvc2VzdCgndWwnKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgdmFyIGFkZHJlc3NfdHlwZSA9ICQodGhpcykuY2xvc2VzdCgndWwnKS5hdHRyKCdkYXRhLXR5cGUnKTtcclxuICAgICAgICBlZGl0QWRkcmVzcyhhZGRyZXNzX2lkLCBhZGRyZXNzX3R5cGUpO1xyXG5cclxuICAgIH0pLmRlbGVnYXRlKCcuZGVsZXRlJywgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vRGVsZXRlXHJcbiAgICAgICAgdmFyIGFkZHJlc3NfaWQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3VsJykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgICAgIGRlbGV0ZUFkZHJlc3MoYWRkcmVzc19pZCk7XHJcblxyXG4gICAgfSkuZGVsZWdhdGUoJy5zaGlwdG8nLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9TaGlwIHRvIHRoaXMgYWRkcmVzc1xyXG4gICAgICAgIHZhciBhZGRyZXNzX2lkID0gJCh0aGlzKS5jbG9zZXN0KCd1bCcpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgICAgICBpZihwYXJzZUludChhZGRyZXNzX2lkKSA9PSBwYWdlRGF0YS5kZWZhdWx0X2FkZHJlc3NfaWQpIHtcclxuICAgICAgICAgICAgc2VsZi5sb2NhdGlvbiA9IHdlYkRhdGEuV0VCX1JPT1QgKyAnY2hlY2tvdXQucGhwP2FjdD1jaGVja291dF9wYXltZW50X3Byb2Nlc3MnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldERlZmF1bHRBZGRyZXNzKGFkZHJlc3NfaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBcImluaXRcIjogaW5pdFxyXG59O1xyXG4iXX0=
},{"../lib/jqueryForm":4,"../mod/address":5,"./loading":2}],2:[function(require,module,exports){
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
},{}],"address_book":[function(require,module,exports){
// require('./common')
require('../checkout/address_book').init(); //Your Shipping Address
},{"../checkout/address_book":1}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL2NoZWNrb3V0L2FkZHJlc3NfYm9vay5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL2NoZWNrb3V0L2xvYWRpbmcuanMiLCJEOi93d3cvcHJvbWV0aGV1cy9zcmMvZ2FlYS9qcy9jb21tb24vZXZlbnRzLmpzIiwiRDovd3d3L3Byb21ldGhldXMvc3JjL2dhZWEvanMvbGliL2pxdWVyeUZvcm0uanMiLCJEOi93d3cvcHJvbWV0aGV1cy9zcmMvZ2FlYS9qcy9tb2QvYWRkcmVzcy5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL21vZC9mb3JtQ2hlY2suanMiLCIuL2dhZWEvanMvZW50cnlfanMvYWRkcmVzc19ib29rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1ckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ256QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2R0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxucmVxdWlyZSgnLi4vbGliL2pxdWVyeUZvcm0nKTtcclxudmFyIGFkZHJlc3MgPSByZXF1aXJlKCcuLi9tb2QvYWRkcmVzcycpO1xyXG52YXIgbG9hZGluZyA9IHJlcXVpcmUoJy4vbG9hZGluZycpO1xyXG5cclxudmFyIGFkZHJlc3NfbGlzdCA9ICQoJy5hZGRyZXNzYm9vay1saXN0Jyk7IC8v5Zyw5Z2A5YiX6KGoXHJcbnZhciBhZGRyZXNzX2Zvcm0gPSAkKCcjYWRkcmVzc19mb3JtJyk7XHJcblxyXG4vL+S/ruaUueWcsOWdgFxyXG5mdW5jdGlvbiBlZGl0QWRkcmVzcyhhZGRyZXNzX2lkLCBhZGRyZXNzX3R5cGUpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgJ3R5cGUnOiAnR0VUJyxcclxuICAgICAgICAndXJsJzogJy9hcGlzL3VzZXIvc2VsZi9hZGRyZXNzLycrYWRkcmVzc19pZCxcclxuICAgICAgICAnY2FjaGUnOiBmYWxzZSxcclxuICAgICAgICAnZGF0YVR5cGUnOiAnanNvbicsXHJcbiAgICAgICAgJ2JlZm9yZVNlbmQnOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICBsb2FkaW5nLm9wZW4oKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICdzdWNjZXNzJzogZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgbG9hZGluZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICBpZiAoci5jb2RlID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvY2F0aW9uID0gci51cmw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoci5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MuaW5pdF9hZGRyX2Zvcm0oYWRkcmVzc19mb3JtLCByLmRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzcy5pbml0X2FkZHJfZm9ybShhZGRyZXNzX2Zvcm0sIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/mm7TmjaLmoIfpopjvvIzmmL7npLov6ZqQ6JePQWRkcmVzcyAx55qEdGlwXHJcbiAgICAgICAgICAgIGlmKGFkZHJlc3NfdHlwZSA9PSAnQklMTElORycpIHtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3NfZm9ybS5maW5kKCdoNDplcSgwKScpLmh0bWwoX2xhbmcucGFnZV9iaWxsaW5nX2FkZHJlc3NfeW91cl9hZGRyZXNzKTtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3NfZm9ybS5maW5kKCcjX2FkZHJlc3NfMScpLnNpYmxpbmdzKCcuYWRkcmVzcy10aXAnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzX2Zvcm0uZmluZCgnaDQ6ZXEoMCknKS5odG1sKF9sYW5nLnBhZ2VfY2hlY2tvdXRfeW91cl9zaGlwcGluZ19hZGRyZXNzKTtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3NfZm9ybS5maW5kKCcjX2FkZHJlc3NfMScpLnNpYmxpbmdzKCcuYWRkcmVzcy10aXAnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcChhZGRyZXNzX2Zvcm0ub2Zmc2V0KCkudG9wKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICdlcnJvcic6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmcuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/liKDpmaTlnLDlnYBcclxuZnVuY3Rpb24gZGVsZXRlQWRkcmVzcyhhZGRyZXNzX2lkKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgICd0eXBlJzogJ1BPU1QnLFxyXG4gICAgICAgICd1cmwnOiAnL2FwaXMvdXNlci9zZWxmL2FkZHJlc3MvJythZGRyZXNzX2lkLFxyXG4gICAgICAgICdjYWNoZSc6IGZhbHNlLFxyXG4gICAgICAgICdkYXRhVHlwZSc6ICdqc29uJyxcclxuICAgICAgICAnZGF0YSc6IHsnX01FVEhPRCc6J0RFTEVURSd9LFxyXG4gICAgICAgICdiZWZvcmVTZW5kJzogZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgbG9hZGluZy5vcGVuKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmcuY2xvc2UoKTtcclxuICAgICAgICAgICAgaWYgKHIuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzX2xpc3QuZmluZCgndWxbZGF0YS1pZD1cIicgKyBhZGRyZXNzX2lkICsgJ1wiXScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoci5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZXJyb3InOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICBsb2FkaW5nLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v5bCG5Zyw5Z2A6K6+5Li66buY6K6kU2hpcHBpbmcgQWRkcmVzc1xyXG5mdW5jdGlvbiBzZXREZWZhdWx0QWRkcmVzcyhhZGRyZXNzX2lkKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgICd0eXBlJzogJ0dFVCcsXHJcbiAgICAgICAgJ3VybCc6IHdlYkRhdGEuV0VCX1JPT1QgKyAnYWpheC5waHAnLFxyXG4gICAgICAgICdkYXRhJzogJ2FjdD1zZXRfZGVmYXVsdF9hZGRyZXNzJmFkZHJlc3NfaWQ9JythZGRyZXNzX2lkLFxyXG4gICAgICAgICdjYWNoZSc6IGZhbHNlLFxyXG4gICAgICAgICdkYXRhVHlwZSc6ICdqc29uJyxcclxuICAgICAgICAnYmVmb3JlU2VuZCc6IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmcub3BlbigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3N1Y2Nlc3MnOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICBsb2FkaW5nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIGlmIChyLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sb2NhdGlvbiA9IHdlYkRhdGEuV0VCX1JPT1QgKyAnY2hlY2tvdXQucGhwP2FjdD1jaGVja291dF9wYXltZW50X3Byb2Nlc3MnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHIuY29kZSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sb2NhdGlvbiA9IHIudXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZXJyb3InOiBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICBsb2FkaW5nLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v5L+d5a2Y5Zyw5Z2AXHJcbmZ1bmN0aW9uIHNhdmVBZGRyZXNzKCkge1xyXG4gICAgaWYgKCFhZGRyZXNzLmNoZWNrX2FkZHJfZm9ybShhZGRyZXNzX2Zvcm0pKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgYWRkcmVzc19mb3JtLmFqYXhTdWJtaXQoe1xyXG4gICAgICAgIFwiYmVmb3JlU3VibWl0XCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcuYnQtMS1uZXcnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICBsb2FkaW5nLm9wZW4oKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZXJyb3JcIjogZnVuY3Rpb24oYSwgYiwgYyl7XHJcbiAgICAgICAgICAgICQoJy5idC0xLW5ldycpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdWNjZXNzXCI6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmcuY2xvc2UoKTtcclxuICAgICAgICAgICAgdmFyIHIgPSBqUXVlcnkucGFyc2VKU09OKGh0bWwpO1xyXG4gICAgICAgICAgICBpZiAoci5jb2RlID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvY2F0aW9uID0gci51cmw7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoci5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICQoJy5idC0xLW5ldycpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaWYoYWRkcmVzc19saXN0LmZpbmQoJ3VsJykubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubG9jYXRpb24gPSBsb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYWRkcl9qc29uID0gci5hZGRyZXNzO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFkZHJlc3Nfd2hvbGUgPSBhZGRyX2pzb24uYWRkcmVzcztcclxuICAgICAgICAgICAgICAgIGlmIChhZGRyX2pzb24uc2lnbl9idWlsZGluZyAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nfd2hvbGUgKz0gJywnICsgYWRkcl9qc29uLnNpZ25fYnVpbGRpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb3ZpbmNlX3dob2xlID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRkcl9qc29uLnByb3ZpbmNlX25hbWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpbmNlX3dob2xlID0gYWRkcl9qc29uLnByb3ZpbmNlX25hbWUgKyAnLCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFkZHJfanNvbi5wcm92aW5jZV90ZXh0ICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmluY2Vfd2hvbGUgPSBhZGRyX2pzb24ucHJvdmluY2VfdGV4dCArICcsJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaHRtbCA9ICc8bGk+PHN0cm9uZz4nICsgYWRkcl9qc29uLmNvbnNpZ25lZSArICc8L3N0cm9uZz48L2xpPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyAnPGxpPicgKyBhZGRyZXNzX3dob2xlICsgJzwvbGk+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICArICc8bGk+JyArIGFkZHJfanNvbi5jaXR5X3RleHQgKyAnLCcgKyBwcm92aW5jZV93aG9sZSArIGFkZHJfanNvbi56aXBjb2RlICsgJzwvbGk+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICArICc8bGk+JyArIGFkZHJfanNvbi5jb3VudHJ5X25hbWUgKyAnPC9saT4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJzxsaT4nICsgYWRkcl9qc29uLnRlbCArICc8L2xpPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyAnPGxpIGNsYXNzPVwiYnRuLXdyYXBcIj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJzxhIGNsYXNzPVwiZWRpdCBidG5fMVwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj48c3Bhbj4nICsgX2xhbmcucGFnZV9jb21tb25fZWRpdCArICc8L3NwYW4+PC9hPic7XHJcbiAgICAgICAgICAgICAgICBpZihhZGRyX2pzb24uYWRkcmVzc190eXBlID09ICdTSElQUElORycpIHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sICs9ICc8YSBjbGFzcz1cImRlbGV0ZSBidG5fMVwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj48c3Bhbj4nICsgX2xhbmcucGFnZV9jb21tb25fZGVsZXRlICsgJzwvc3Bhbj48L2E+JztcclxuICAgICAgICAgICAgICAgICAgICBodG1sICs9ICc8YSBjbGFzcz1cInNoaXB0byBidG5fMVwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj48c3Bhbj4nICsgX2xhbmcucGFnZV9jb21tb25fc2hpcF90b190aGlzX2FkZHJlc3MgKyAnPC9zcGFuPjwvYT4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGFkZHJfanNvbi5hZGRyZXNzX3R5cGUgPT0gJ0JJTExJTkcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc19saXN0LmZpbmQoJ3VsOmVxKDApJykuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYWRkcmVzc191bCA9IGFkZHJlc3NfbGlzdC5maW5kKCd1bFtkYXRhLWlkPVwiJyArIGFkZHJfanNvbi5hZGRyZXNzX2lkICArICdcIl0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWRkcmVzc191bC5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc19saXN0LmZpbmQoJ2gzOmVxKDEpJykuYWZ0ZXIoJzx1bCBkYXRhLWlkPVwiJyArIGFkZHJfanNvbi5hZGRyZXNzX2lkICArICdcIiBkYXRhLXR5cGU9XCInICsgYWRkcl9qc29uLmFkZHJlc3NfdHlwZSAgKyAnXCI+JyArIGh0bWwgKyAnPC91bD4nKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzX3VsID0gYWRkcmVzc19saXN0LmZpbmQoJ3VsW2RhdGEtaWQ9XCInICsgYWRkcl9qc29uLmFkZHJlc3NfaWQgICsgJ1wiXScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzX3VsLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcChhZGRyZXNzX3VsLm9mZnNldCgpLnRvcCk7XHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzLmluaXRfYWRkcl9mb3JtKGFkZHJlc3NfZm9ybSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHIubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG52YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8v57uR5a6a5Zyw5Z2A6KGo5Y2V55u45YWz5LqL5Lu277yM5Li76KaB5piv5YiH5o2i5Zu95a625ZKM6KGo5Y2V6aqM6K+BXHJcbiAgICBhZGRyZXNzLmhhbmRsZV9hZGRyX2Zvcm0oYWRkcmVzc19mb3JtKTtcclxuXHJcbiAgICAvL+aPkOS6pOihqOWNlVxyXG4gICAgYWRkcmVzc19mb3JtLnN1Ym1pdChzYXZlQWRkcmVzcyk7XHJcblxyXG4gICAgLy/nu5HlrprlnLDlnYDliJfooajnm7jlhbPkuovku7ZcclxuICAgIGFkZHJlc3NfbGlzdC5kZWxlZ2F0ZSgnLmVkaXQnLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9FZGl0XHJcbiAgICAgICAgdmFyIGFkZHJlc3NfaWQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3VsJykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgICAgIHZhciBhZGRyZXNzX3R5cGUgPSAkKHRoaXMpLmNsb3Nlc3QoJ3VsJykuYXR0cignZGF0YS10eXBlJyk7XHJcbiAgICAgICAgZWRpdEFkZHJlc3MoYWRkcmVzc19pZCwgYWRkcmVzc190eXBlKTtcclxuXHJcbiAgICB9KS5kZWxlZ2F0ZSgnLmRlbGV0ZScsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL0RlbGV0ZVxyXG4gICAgICAgIHZhciBhZGRyZXNzX2lkID0gJCh0aGlzKS5jbG9zZXN0KCd1bCcpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgICAgICBkZWxldGVBZGRyZXNzKGFkZHJlc3NfaWQpO1xyXG5cclxuICAgIH0pLmRlbGVnYXRlKCcuc2hpcHRvJywgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vU2hpcCB0byB0aGlzIGFkZHJlc3NcclxuICAgICAgICB2YXIgYWRkcmVzc19pZCA9ICQodGhpcykuY2xvc2VzdCgndWwnKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgaWYocGFyc2VJbnQoYWRkcmVzc19pZCkgPT0gcGFnZURhdGEuZGVmYXVsdF9hZGRyZXNzX2lkKSB7XHJcbiAgICAgICAgICAgIHNlbGYubG9jYXRpb24gPSB3ZWJEYXRhLldFQl9ST09UICsgJ2NoZWNrb3V0LnBocD9hY3Q9Y2hlY2tvdXRfcGF5bWVudF9wcm9jZXNzJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXREZWZhdWx0QWRkcmVzcyhhZGRyZXNzX2lkKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgXCJpbml0XCI6IGluaXRcclxufTtcclxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltZGhaV0V2YW5NdlkyaGxZMnR2ZFhRdllXUmtjbVZ6YzE5aWIyOXJMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJblpoY2lBa0lEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5QjNhVzVrYjNkYkp5UW5YU0E2SUhSNWNHVnZaaUJuYkc5aVlXd2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUJuYkc5aVlXeGJKeVFuWFNBNklHNTFiR3dwTzF4eVhHNXlaWEYxYVhKbEtDY3VMaTlzYVdJdmFuRjFaWEo1Um05eWJTY3BPMXh5WEc1MllYSWdZV1JrY21WemN5QTlJSEpsY1hWcGNtVW9KeTR1TDIxdlpDOWhaR1J5WlhOekp5azdYSEpjYm5aaGNpQnNiMkZrYVc1bklEMGdjbVZ4ZFdseVpTZ25MaTlzYjJGa2FXNW5KeWs3WEhKY2JseHlYRzUyWVhJZ1lXUmtjbVZ6YzE5c2FYTjBJRDBnSkNnbkxtRmtaSEpsYzNOaWIyOXJMV3hwYzNRbktUc2dMeS9sbkxEbG5ZRGxpSmZvb2FoY2NseHVkbUZ5SUdGa1pISmxjM05mWm05eWJTQTlJQ1FvSnlOaFpHUnlaWE56WDJadmNtMG5LVHRjY2x4dVhISmNiaTh2NUwrdTVwUzU1Wnl3NVoyQVhISmNibVoxYm1OMGFXOXVJR1ZrYVhSQlpHUnlaWE56S0dGa1pISmxjM05mYVdRc0lHRmtaSEpsYzNOZmRIbHdaU2tnZTF4eVhHNGdJQ0FnSkM1aGFtRjRLSHRjY2x4dUlDQWdJQ0FnSUNBbmRIbHdaU2M2SUNkSFJWUW5MRnh5WEc0Z0lDQWdJQ0FnSUNkMWNtd25PaUFuTDJGd2FYTXZkWE5sY2k5elpXeG1MMkZrWkhKbGMzTXZKeXRoWkdSeVpYTnpYMmxrTEZ4eVhHNGdJQ0FnSUNBZ0lDZGpZV05vWlNjNklHWmhiSE5sTEZ4eVhHNGdJQ0FnSUNBZ0lDZGtZWFJoVkhsd1pTYzZJQ2RxYzI5dUp5eGNjbHh1SUNBZ0lDQWdJQ0FuWW1WbWIzSmxVMlZ1WkNjNklHWjFibU4wYVc5dUlDaHlLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR3h2WVdScGJtY3ViM0JsYmlncE8xeHlYRzRnSUNBZ0lDQWdJSDBzWEhKY2JpQWdJQ0FnSUNBZ0ozTjFZMk5sYzNNbk9pQm1kVzVqZEdsdmJpQW9jaWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JzYjJGa2FXNW5MbU5zYjNObEtDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h5TG1OdlpHVWdQVDBnTFRFcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5sYkdZdWJHOWpZWFJwYjI0Z1BTQnlMblZ5YkR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoeUxtTnZaR1VnUFQwZ01Da2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVdSa2NtVnpjeTVwYm1sMFgyRmtaSEpmWm05eWJTaGhaR1J5WlhOelgyWnZjbTBzSUhJdVpHRjBZU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoWkdSeVpYTnpMbWx1YVhSZllXUmtjbDltYjNKdEtHRmtaSEpsYzNOZlptOXliU3dnWm1Gc2MyVXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2TCthYnRPYU5vdWFnaCttaW1PKzhqT2FZdnVla3VpL3BtcERvbDQ5QlpHUnlaWE56SURIbm1vUjBhWEJjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvWVdSa2NtVnpjMTkwZVhCbElEMDlJQ2RDU1V4TVNVNUhKeWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lXUmtjbVZ6YzE5bWIzSnRMbVpwYm1Rb0oyZzBPbVZ4S0RBcEp5a3VhSFJ0YkNoZmJHRnVaeTV3WVdkbFgySnBiR3hwYm1kZllXUmtjbVZ6YzE5NWIzVnlYMkZrWkhKbGMzTXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVdSa2NtVnpjMTltYjNKdExtWnBibVFvSnlOZllXUmtjbVZ6YzE4eEp5a3VjMmxpYkdsdVozTW9KeTVoWkdSeVpYTnpMWFJwY0NjcExtaHBaR1VvS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGa1pISmxjM05mWm05eWJTNW1hVzVrS0Nkb05EcGxjU2d3S1NjcExtaDBiV3dvWDJ4aGJtY3VjR0ZuWlY5amFHVmphMjkxZEY5NWIzVnlYM05vYVhCd2FXNW5YMkZrWkhKbGMzTXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVdSa2NtVnpjMTltYjNKdExtWnBibVFvSnlOZllXUmtjbVZ6YzE4eEp5a3VjMmxpYkdsdVozTW9KeTVoWkdSeVpYTnpMWFJwY0NjcExuTm9iM2NvS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FrS0hkcGJtUnZkeWt1YzJOeWIyeHNWRzl3S0dGa1pISmxjM05mWm05eWJTNXZabVp6WlhRb0tTNTBiM0FwTzF4eVhHNGdJQ0FnSUNBZ0lIMHNYSEpjYmlBZ0lDQWdJQ0FnSjJWeWNtOXlKem9nWm5WdVkzUnBiMjRnS0hJcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JHOWhaR2x1Wnk1amJHOXpaU2dwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMHBPMXh5WEc1OVhISmNibHh5WEc0dkwrV0lvT21acE9XY3NPV2RnRnh5WEc1bWRXNWpkR2x2YmlCa1pXeGxkR1ZCWkdSeVpYTnpLR0ZrWkhKbGMzTmZhV1FwSUh0Y2NseHVJQ0FnSUNRdVlXcGhlQ2g3WEhKY2JpQWdJQ0FnSUNBZ0ozUjVjR1VuT2lBblVFOVRWQ2NzWEhKY2JpQWdJQ0FnSUNBZ0ozVnliQ2M2SUNjdllYQnBjeTkxYzJWeUwzTmxiR1l2WVdSa2NtVnpjeThuSzJGa1pISmxjM05mYVdRc1hISmNiaUFnSUNBZ0lDQWdKMk5oWTJobEp6b2dabUZzYzJVc1hISmNiaUFnSUNBZ0lDQWdKMlJoZEdGVWVYQmxKem9nSjJwemIyNG5MRnh5WEc0Z0lDQWdJQ0FnSUNka1lYUmhKem9nZXlkZlRVVlVTRTlFSnpvblJFVk1SVlJGSjMwc1hISmNiaUFnSUNBZ0lDQWdKMkpsWm05eVpWTmxibVFuT2lCbWRXNWpkR2x2YmlBb2Npa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNiMkZrYVc1bkxtOXdaVzRvS1R0Y2NseHVJQ0FnSUNBZ0lDQjlMRnh5WEc0Z0lDQWdJQ0FnSUNkemRXTmpaWE56SnpvZ1puVnVZM1JwYjI0Z0tISXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdiRzloWkdsdVp5NWpiRzl6WlNncE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jaTVqYjJSbElEMDlJREFwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRmtaSEpsYzNOZmJHbHpkQzVtYVc1a0tDZDFiRnRrWVhSaExXbGtQVndpSnlBcklHRmtaSEpsYzNOZmFXUWdLeUFuWENKZEp5a3VjbVZ0YjNabEtDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhiR1Z5ZENoeUxtMXpaeWs3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOUxGeHlYRzRnSUNBZ0lDQWdJQ2RsY25KdmNpYzZJR1oxYm1OMGFXOXVJQ2h5S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUd4dllXUnBibWN1WTJ4dmMyVW9LVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOUtUdGNjbHh1ZlZ4eVhHNWNjbHh1THkvbHNJYmxuTERsbllEb3JyN2t1THJwdTVqb3JxUlRhR2x3Y0dsdVp5QkJaR1J5WlhOelhISmNibVoxYm1OMGFXOXVJSE5sZEVSbFptRjFiSFJCWkdSeVpYTnpLR0ZrWkhKbGMzTmZhV1FwSUh0Y2NseHVJQ0FnSUNRdVlXcGhlQ2g3WEhKY2JpQWdJQ0FnSUNBZ0ozUjVjR1VuT2lBblIwVlVKeXhjY2x4dUlDQWdJQ0FnSUNBbmRYSnNKem9nZDJWaVJHRjBZUzVYUlVKZlVrOVBWQ0FySUNkaGFtRjRMbkJvY0Njc1hISmNiaUFnSUNBZ0lDQWdKMlJoZEdFbk9pQW5ZV04wUFhObGRGOWtaV1poZFd4MFgyRmtaSEpsYzNNbVlXUmtjbVZ6YzE5cFpEMG5LMkZrWkhKbGMzTmZhV1FzWEhKY2JpQWdJQ0FnSUNBZ0oyTmhZMmhsSnpvZ1ptRnNjMlVzWEhKY2JpQWdJQ0FnSUNBZ0oyUmhkR0ZVZVhCbEp6b2dKMnB6YjI0bkxGeHlYRzRnSUNBZ0lDQWdJQ2RpWldadmNtVlRaVzVrSnpvZ1puVnVZM1JwYjI0Z0tISXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdiRzloWkdsdVp5NXZjR1Z1S0NrN1hISmNiaUFnSUNBZ0lDQWdmU3hjY2x4dUlDQWdJQ0FnSUNBbmMzVmpZMlZ6Y3ljNklHWjFibU4wYVc5dUlDaHlLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR3h2WVdScGJtY3VZMnh2YzJVb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEl1WTI5a1pTQTlQU0F3S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpaV3htTG14dlkyRjBhVzl1SUQwZ2QyVmlSR0YwWVM1WFJVSmZVazlQVkNBcklDZGphR1ZqYTI5MWRDNXdhSEEvWVdOMFBXTm9aV05yYjNWMFgzQmhlVzFsYm5SZmNISnZZMlZ6Y3ljN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2NpNWpiMlJsSUQwOUlDMHhLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCelpXeG1MbXh2WTJGMGFXOXVJRDBnY2k1MWNtdzdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0I5TEZ4eVhHNGdJQ0FnSUNBZ0lDZGxjbkp2Y2ljNklHWjFibU4wYVc5dUlDaHlLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR3h2WVdScGJtY3VZMnh2YzJVb0tUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5S1R0Y2NseHVmVnh5WEc1Y2NseHVMeS9rdjUzbHJaamxuTERsbllCY2NseHVablZ1WTNScGIyNGdjMkYyWlVGa1pISmxjM01vS1NCN1hISmNiaUFnSUNCcFppQW9JV0ZrWkhKbGMzTXVZMmhsWTJ0ZllXUmtjbDltYjNKdEtHRmtaSEpsYzNOZlptOXliU2twSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JoWkdSeVpYTnpYMlp2Y20wdVlXcGhlRk4xWW0xcGRDaDdYSEpjYmlBZ0lDQWdJQ0FnWENKaVpXWnZjbVZUZFdKdGFYUmNJam9nWm5WdVkzUnBiMjRvS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNRb0p5NWlkQzB4TFc1bGR5Y3BMbUYwZEhJb0oyUnBjMkZpYkdWa0p5d2dkSEoxWlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUd4dllXUnBibWN1YjNCbGJpZ3BPMXh5WEc0Z0lDQWdJQ0FnSUgwc1hISmNiaUFnSUNBZ0lDQWdYQ0psY25KdmNsd2lPaUJtZFc1amRHbHZiaWhoTENCaUxDQmpLWHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdKQ2duTG1KMExURXRibVYzSnlrdVlYUjBjaWduWkdsellXSnNaV1FuTENCbVlXeHpaU2s3WEhKY2JpQWdJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lDQWdJQ0JjSW5OMVkyTmxjM05jSWpvZ1puVnVZM1JwYjI0Z0tHaDBiV3dwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYkc5aFpHbHVaeTVqYkc5elpTZ3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnY2lBOUlHcFJkV1Z5ZVM1d1lYSnpaVXBUVDA0b2FIUnRiQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoeUxtTnZaR1VnUFQwZ0xURXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhObGJHWXViRzlqWVhScGIyNGdQU0J5TG5WeWJEdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaHlMbU52WkdVZ1BUMGdNQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0pDZ25MbUowTFRFdGJtVjNKeWt1WVhSMGNpZ25aR2x6WVdKc1pXUW5MQ0JtWVd4elpTazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmloaFpHUnlaWE56WDJ4cGMzUXVabWx1WkNnbmRXd25LUzVzWlc1bmRHZ2dQQ0F4S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJWc1ppNXNiMk5oZEdsdmJpQTlJR3h2WTJGMGFXOXVMbWh5WldZN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCaFpHUnlYMnB6YjI0Z1BTQnlMbUZrWkhKbGMzTTdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ1lXUmtjbVZ6YzE5M2FHOXNaU0E5SUdGa1pISmZhbk52Ymk1aFpHUnlaWE56TzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR0ZrWkhKZmFuTnZiaTV6YVdkdVgySjFhV3hrYVc1bklDRTlJQ2NuS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVdSa2NtVnpjMTkzYUc5c1pTQXJQU0FuTENjZ0t5QmhaR1J5WDJwemIyNHVjMmxuYmw5aWRXbHNaR2x1Wnp0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdjSEp2ZG1sdVkyVmZkMmh2YkdVZ1BTQW5KenRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaGhaR1J5WDJwemIyNHVjSEp2ZG1sdVkyVmZibUZ0WlNBaFBTQnVkV3hzS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKdmRtbHVZMlZmZDJodmJHVWdQU0JoWkdSeVgycHpiMjR1Y0hKdmRtbHVZMlZmYm1GdFpTQXJJQ2NzSnp0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9ZV1JrY2w5cWMyOXVMbkJ5YjNacGJtTmxYM1JsZUhRZ0lUMGdKeWNwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205MmFXNWpaVjkzYUc5c1pTQTlJR0ZrWkhKZmFuTnZiaTV3Y205MmFXNWpaVjkwWlhoMElDc2dKeXduTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQm9kRzFzSUQwZ0p6eHNhVDQ4YzNSeWIyNW5QaWNnS3lCaFpHUnlYMnB6YjI0dVkyOXVjMmxuYm1WbElDc2dKend2YzNSeWIyNW5Qand2YkdrK0oxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXJJQ2M4YkdrK0p5QXJJR0ZrWkhKbGMzTmZkMmh2YkdVZ0t5QW5QQzlzYVQ0blhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDc2dKenhzYVQ0bklDc2dZV1JrY2w5cWMyOXVMbU5wZEhsZmRHVjRkQ0FySUNjc0p5QXJJSEJ5YjNacGJtTmxYM2RvYjJ4bElDc2dZV1JrY2w5cWMyOXVMbnBwY0dOdlpHVWdLeUFuUEM5c2FUNG5YSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ3NnSnp4c2FUNG5JQ3NnWVdSa2NsOXFjMjl1TG1OdmRXNTBjbmxmYm1GdFpTQXJJQ2M4TDJ4cFBpZGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLeUFuUEd4cFBpY2dLeUJoWkdSeVgycHpiMjR1ZEdWc0lDc2dKend2YkdrK0oxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXJJQ2M4YkdrZ1kyeGhjM005WENKaWRHNHRkM0poY0Z3aVBpZGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLeUFuUEdFZ1kyeGhjM005WENKbFpHbDBJR0owYmw4eFhDSWdhSEpsWmoxY0ltcGhkbUZ6WTNKcGNIUTZkbTlwWkNnd0tWd2lQanh6Y0dGdVBpY2dLeUJmYkdGdVp5NXdZV2RsWDJOdmJXMXZibDlsWkdsMElDc2dKend2YzNCaGJqNDhMMkUrSnp0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1LR0ZrWkhKZmFuTnZiaTVoWkdSeVpYTnpYM1I1Y0dVZ1BUMGdKMU5JU1ZCUVNVNUhKeWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2gwYld3Z0t6MGdKenhoSUdOc1lYTnpQVndpWkdWc1pYUmxJR0owYmw4eFhDSWdhSEpsWmoxY0ltcGhkbUZ6WTNKcGNIUTZkbTlwWkNnd0tWd2lQanh6Y0dGdVBpY2dLeUJmYkdGdVp5NXdZV2RsWDJOdmJXMXZibDlrWld4bGRHVWdLeUFuUEM5emNHRnVQand2WVQ0bk8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdoMGJXd2dLejBnSnp4aElHTnNZWE56UFZ3aWMyaHBjSFJ2SUdKMGJsOHhYQ0lnYUhKbFpqMWNJbXBoZG1GelkzSnBjSFE2ZG05cFpDZ3dLVndpUGp4emNHRnVQaWNnS3lCZmJHRnVaeTV3WVdkbFgyTnZiVzF2Ymw5emFHbHdYM1J2WDNSb2FYTmZZV1JrY21WemN5QXJJQ2M4TDNOd1lXNCtQQzloUGljN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JvZEcxc0lDczlJQ2M4TDJ4cFBpYzdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWW9ZV1JrY2w5cWMyOXVMbUZrWkhKbGMzTmZkSGx3WlNBOVBTQW5Ra2xNVEVsT1J5Y3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhaR1J5WlhOelgyeHBjM1F1Wm1sdVpDZ25kV3c2WlhFb01Da25LUzVvZEcxc0tHaDBiV3dwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQmhaR1J5WlhOelgzVnNJRDBnWVdSa2NtVnpjMTlzYVhOMExtWnBibVFvSjNWc1cyUmhkR0V0YVdROVhDSW5JQ3NnWVdSa2NsOXFjMjl1TG1Ga1pISmxjM05mYVdRZ0lDc2dKMXdpWFNjcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaGhaR1J5WlhOelgzVnNMbXhsYm1kMGFDQThJREVwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoWkdSeVpYTnpYMnhwYzNRdVptbHVaQ2duYURNNlpYRW9NU2tuS1M1aFpuUmxjaWduUEhWc0lHUmhkR0V0YVdROVhDSW5JQ3NnWVdSa2NsOXFjMjl1TG1Ga1pISmxjM05mYVdRZ0lDc2dKMXdpSUdSaGRHRXRkSGx3WlQxY0lpY2dLeUJoWkdSeVgycHpiMjR1WVdSa2NtVnpjMTkwZVhCbElDQXJJQ2RjSWo0bklDc2dhSFJ0YkNBcklDYzhMM1ZzUGljcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGa1pISmxjM05mZFd3Z1BTQmhaR1J5WlhOelgyeHBjM1F1Wm1sdVpDZ25kV3hiWkdGMFlTMXBaRDFjSWljZ0t5QmhaR1J5WDJwemIyNHVZV1JrY21WemMxOXBaQ0FnS3lBblhDSmRKeWs3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0ZrWkhKbGMzTmZkV3d1YUhSdGJDaG9kRzFzS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBa0tIZHBibVJ2ZHlrdWMyTnliMnhzVkc5d0tHRmtaSEpsYzNOZmRXd3ViMlptYzJWMEtDa3VkRzl3S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRmtaSEpsYzNNdWFXNXBkRjloWkdSeVgyWnZjbTBvWVdSa2NtVnpjMTltYjNKdExDQm1ZV3h6WlNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZV3hsY25Rb2NpNXRjMmNwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZTazdYSEpjYmlBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEhKY2JuMWNjbHh1WEhKY2JuWmhjaUJwYm1sMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnTHkvbnU1SGxycHJsbkxEbG5ZRG9vYWpsalpYbm03amxoYlBrdW92a3U3YnZ2SXprdUx2b3BvSG1tSy9saUlmbWphTGxtNzNscnJibGtvem9vYWpsalpYcHFvem9yNEZjY2x4dUlDQWdJR0ZrWkhKbGMzTXVhR0Z1Wkd4bFgyRmtaSEpmWm05eWJTaGhaR1J5WlhOelgyWnZjbTBwTzF4eVhHNWNjbHh1SUNBZ0lDOHY1bytRNUxxazZLR281WTJWWEhKY2JpQWdJQ0JoWkdSeVpYTnpYMlp2Y20wdWMzVmliV2wwS0hOaGRtVkJaR1J5WlhOektUdGNjbHh1WEhKY2JpQWdJQ0F2TCtlN2tlV3VtdVdjc09XZGdPV0lsK2locU9lYnVPV0ZzK1M2aStTN3RseHlYRzRnSUNBZ1lXUmtjbVZ6YzE5c2FYTjBMbVJsYkdWbllYUmxLQ2N1WldScGRDY3NJQ2RqYkdsamF5Y3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQXZMMFZrYVhSY2NseHVJQ0FnSUNBZ0lDQjJZWElnWVdSa2NtVnpjMTlwWkNBOUlDUW9kR2hwY3lrdVkyeHZjMlZ6ZENnbmRXd25LUzVoZEhSeUtDZGtZWFJoTFdsa0p5azdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlHRmtaSEpsYzNOZmRIbHdaU0E5SUNRb2RHaHBjeWt1WTJ4dmMyVnpkQ2duZFd3bktTNWhkSFJ5S0Nka1lYUmhMWFI1Y0dVbktUdGNjbHh1SUNBZ0lDQWdJQ0JsWkdsMFFXUmtjbVZ6Y3loaFpHUnlaWE56WDJsa0xDQmhaR1J5WlhOelgzUjVjR1VwTzF4eVhHNWNjbHh1SUNBZ0lIMHBMbVJsYkdWbllYUmxLQ2N1WkdWc1pYUmxKeXdnSjJOc2FXTnJKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJQzh2UkdWc1pYUmxYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlHRmtaSEpsYzNOZmFXUWdQU0FrS0hSb2FYTXBMbU5zYjNObGMzUW9KM1ZzSnlrdVlYUjBjaWduWkdGMFlTMXBaQ2NwTzF4eVhHNGdJQ0FnSUNBZ0lHUmxiR1YwWlVGa1pISmxjM01vWVdSa2NtVnpjMTlwWkNrN1hISmNibHh5WEc0Z0lDQWdmU2t1WkdWc1pXZGhkR1VvSnk1emFHbHdkRzhuTENBblkyeHBZMnNuTENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnTHk5VGFHbHdJSFJ2SUhSb2FYTWdZV1JrY21WemMxeHlYRzRnSUNBZ0lDQWdJSFpoY2lCaFpHUnlaWE56WDJsa0lEMGdKQ2gwYUdsektTNWpiRzl6WlhOMEtDZDFiQ2NwTG1GMGRISW9KMlJoZEdFdGFXUW5LVHRjY2x4dUlDQWdJQ0FnSUNCcFppaHdZWEp6WlVsdWRDaGhaR1J5WlhOelgybGtLU0E5UFNCd1lXZGxSR0YwWVM1a1pXWmhkV3gwWDJGa1pISmxjM05mYVdRcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2MyVnNaaTVzYjJOaGRHbHZiaUE5SUhkbFlrUmhkR0V1VjBWQ1gxSlBUMVFnS3lBblkyaGxZMnR2ZFhRdWNHaHdQMkZqZEQxamFHVmphMjkxZEY5d1lYbHRaVzUwWDNCeWIyTmxjM01uTzF4eVhHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhObGRFUmxabUYxYkhSQlpHUnlaWE56S0dGa1pISmxjM05mYVdRcE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDBwTzF4eVhHNTlPMXh5WEc1Y2NseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjdYSEpjYmlBZ0lDQmNJbWx1YVhSY0lqb2dhVzVwZEZ4eVhHNTlPMXh5WEc0aVhYMD0iLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG5cclxudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcblxyXG4vL2xvYWRpbmdcclxudmFyIGxvYWRpbmdTZWxlY3RvciA9ICcucG9wLWxvYWRpbmcnO1xyXG5mdW5jdGlvbiBvcGVuKCkge1xyXG4gICAgaWYoJChsb2FkaW5nU2VsZWN0b3IpLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwicG9wLWxvYWRpbmdcIj48L2Rpdj4nKVxyXG4gICAgfVxyXG4gICAgdmFyIGxvYWRpbmcgPSAkKGxvYWRpbmdTZWxlY3Rvcik7XHJcblxyXG4gICAgdmFyIGN3ID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICB2YXIgY2ggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICB2YXIgbGR3ID0gbG9hZGluZy53aWR0aCgpO1xyXG4gICAgdmFyIGxkaCA9IGxvYWRpbmcuaGVpZ2h0KCk7XHJcbiAgICBsb2FkaW5nLmNzcyh7J2xlZnQnOiBjdyAvIDIgLSBsZHcgLyAyLCAndG9wJzogY2ggLyAyIC0gbGRoIC8gMiArICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpfSkuc2hvdygpO1xyXG59XHJcbmZ1bmN0aW9uIGNsb3NlKCkge1xyXG4gICAgJChsb2FkaW5nU2VsZWN0b3IpLmhpZGUoKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBcIm9wZW5cIjogb3BlbixcclxuICAgIFwiY2xvc2VcIjogY2xvc2VcclxufTtcclxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltZGhaV0V2YW5NdlkyaGxZMnR2ZFhRdmJHOWhaR2x1Wnk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU0lzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVhISmNiblpoY2lBa0lEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5QjNhVzVrYjNkYkp5UW5YU0E2SUhSNWNHVnZaaUJuYkc5aVlXd2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUJuYkc5aVlXeGJKeVFuWFNBNklHNTFiR3dwTzF4eVhHNWNjbHh1THk5c2IyRmthVzVuWEhKY2JuWmhjaUJzYjJGa2FXNW5VMlZzWldOMGIzSWdQU0FuTG5CdmNDMXNiMkZrYVc1bkp6dGNjbHh1Wm5WdVkzUnBiMjRnYjNCbGJpZ3BJSHRjY2x4dUlDQWdJR2xtS0NRb2JHOWhaR2x1WjFObGJHVmpkRzl5S1M1c1pXNW5kR2dnUENBeEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSkNnblltOWtlU2NwTG1Gd2NHVnVaQ2duUEdScGRpQmpiR0Z6Y3oxY0luQnZjQzFzYjJGa2FXNW5YQ0krUEM5a2FYWStKeWxjY2x4dUlDQWdJSDFjY2x4dUlDQWdJSFpoY2lCc2IyRmthVzVuSUQwZ0pDaHNiMkZrYVc1blUyVnNaV04wYjNJcE8xeHlYRzVjY2x4dUlDQWdJSFpoY2lCamR5QTlJQ1FvZDJsdVpHOTNLUzUzYVdSMGFDZ3BPMXh5WEc0Z0lDQWdkbUZ5SUdOb0lEMGdKQ2gzYVc1a2IzY3BMbWhsYVdkb2RDZ3BPMXh5WEc0Z0lDQWdkbUZ5SUd4a2R5QTlJR3h2WVdScGJtY3VkMmxrZEdnb0tUdGNjbHh1SUNBZ0lIWmhjaUJzWkdnZ1BTQnNiMkZrYVc1bkxtaGxhV2RvZENncE8xeHlYRzRnSUNBZ2JHOWhaR2x1Wnk1amMzTW9leWRzWldaMEp6b2dZM2NnTHlBeUlDMGdiR1IzSUM4Z01pd2dKM1J2Y0NjNklHTm9JQzhnTWlBdElHeGthQ0F2SURJZ0t5QWtLR1J2WTNWdFpXNTBLUzV6WTNKdmJHeFViM0FvS1gwcExuTm9iM2NvS1R0Y2NseHVmVnh5WEc1bWRXNWpkR2x2YmlCamJHOXpaU2dwSUh0Y2NseHVJQ0FnSUNRb2JHOWhaR2x1WjFObGJHVmpkRzl5S1M1b2FXUmxLQ2s3WEhKY2JuMWNjbHh1WEhKY2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2UxeHlYRzRnSUNBZ1hDSnZjR1Z1WENJNklHOXdaVzRzWEhKY2JpQWdJQ0JjSW1Oc2IzTmxYQ0k2SUdOc2IzTmxYSEpjYm4wN1hISmNiaUpkZlE9PSIsIi8qXHJcbiAqIFRoaXMgaXMgdXNlZCB0byBkZWZpbmVkIHRoZSBhcHBsaWNhdGlvbiBsZXZlbCBldmVudCBuYW1lcy5cclxuICogVGhlIGFwcGxpY2F0aW9uIGV2ZW50cyBhcmUgZmlyZWQgaW4gdGhlIGRvY3VtZW50IGxldmVsLlxyXG4gICAgICQoIGRvY3VtZW50ICkub24oIFwibXlDdXN0b21FdmVudFwiLCB7XHJcbiAgICAgICAgIGZvbzogXCJiYXJcIlxyXG4gICAgIH0sIGZ1bmN0aW9uKCBldmVudCwgYXJnMSwgYXJnMiApIHtcclxuICAgICAgICAgY29uc29sZS5sb2coIGV2ZW50LmRhdGEuZm9vICk7IC8vIFwiYmFyXCJcclxuICAgICAgICAgY29uc29sZS5sb2coIGFyZzEgKTsgICAgICAgICAgIC8vIFwiYmltXCJcclxuICAgICAgICAgY29uc29sZS5sb2coIGFyZzIgKTsgICAgICAgICAgIC8vIFwiYmF6XCJcclxuICAgICB9KTtcclxuXHJcbiAgICAgJCggZG9jdW1lbnQgKS50cmlnZ2VyKCBcIm15Q3VzdG9tRXZlbnRcIiwgWyBcImJpbVwiLCBcImJhelwiIF0gKTtcclxuICpcclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgYWRkVG9DYXJ0OiBcImVzLWFkZFRvQ2FydFwiLFxyXG4gICAgcmVtb3ZlRnJvbUNhcnQ6IFwiZXMtcmVtb3ZlRnJvbUNhcnRcIixcclxuICAgIHVwZGF0ZUNhcnQ6IFwiZXMtdXBkYXRlQ2FydFwiLFxyXG4gICAgY2hlY2tvdXRTdGVwOiBcImVzLWNoZWNrb3V0U3RlcFwiLFxyXG4gICAgcHVyY2hhc2U6IFwiZXMtcHVyY2hhc2VcIixcclxuICAgIGNoZWNrb3V0RXJyb3I6ICdlcy1jaGVja291dEVycm9yJyxcclxuICAgIGNsaWNrQ2hlY2tvdXQ6IFwiZXMtY2xpY2tDaGVja291dFwiLFxyXG4gICAgY2xpY2tHb29kc1F1YW50aXR5OiBcImVzLWNsaWNrR29vZHNRdWFudGl0eVwiLFxyXG4gICAgY2xpY2tHb29kc1NpemU6IFwiZXMtY2xpY2tHb29kc1NpemVcIixcclxuICAgIGNsaWNrR29vZHNTaXplT3B0aW9uOiBcImVzLWNsaWNrR29vZHNTaXplT3B0aW9uXCIsXHJcbn07IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuLy9kZWZpbmUoZnVuY3Rpb24ocmVxdWlyZSwgZXhwb3J0cywgbW9kdWxlKSB7XHJcblx0dmFyIGpRdWVyeSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxuXHRcclxuXHQvKiFcclxuXHQgKiBqUXVlcnkgRm9ybSBQbHVnaW5cclxuXHQgKiB2ZXJzaW9uOiAzLjQ1LjAtMjAxMy4xMC4xN1xyXG5cdCAqIFJlcXVpcmVzIGpRdWVyeSB2MS41IG9yIGxhdGVyXHJcblx0ICogQ29weXJpZ2h0IChjKSAyMDEzIE0uIEFsc3VwXHJcblx0ICogRXhhbXBsZXMgYW5kIGRvY3VtZW50YXRpb24gYXQ6IGh0dHA6Ly9tYWxzdXAuY29tL2pxdWVyeS9mb3JtL1xyXG5cdCAqIFByb2plY3QgcmVwb3NpdG9yeTogaHR0cHM6Ly9naXRodWIuY29tL21hbHN1cC9mb3JtXHJcblx0ICogRHVhbCBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGFuZCBHUEwgbGljZW5zZXMuXHJcblx0ICogaHR0cHM6Ly9naXRodWIuY29tL21hbHN1cC9mb3JtI2NvcHlyaWdodC1hbmQtbGljZW5zZVxyXG5cdCAqL1xyXG5cdC8qZ2xvYmFsIEFjdGl2ZVhPYmplY3QgKi9cclxuXHQ7KGZ1bmN0aW9uKCQpIHtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0LypcclxuXHRcdFVzYWdlIE5vdGU6XHJcblx0XHQtLS0tLS0tLS0tLVxyXG5cdFx0RG8gbm90IHVzZSBib3RoIGFqYXhTdWJtaXQgYW5kIGFqYXhGb3JtIG9uIHRoZSBzYW1lIGZvcm0uICBUaGVzZVxyXG5cdFx0ZnVuY3Rpb25zIGFyZSBtdXR1YWxseSBleGNsdXNpdmUuICBVc2UgYWpheFN1Ym1pdCBpZiB5b3Ugd2FudFxyXG5cdFx0dG8gYmluZCB5b3VyIG93biBzdWJtaXQgaGFuZGxlciB0byB0aGUgZm9ybS4gIEZvciBleGFtcGxlLFxyXG5cclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcjbXlGb3JtJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7IC8vIDwtLSBpbXBvcnRhbnRcclxuXHRcdFx0XHQkKHRoaXMpLmFqYXhTdWJtaXQoe1xyXG5cdFx0XHRcdFx0dGFyZ2V0OiAnI291dHB1dCdcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRVc2UgYWpheEZvcm0gd2hlbiB5b3Ugd2FudCB0aGUgcGx1Z2luIHRvIG1hbmFnZSBhbGwgdGhlIGV2ZW50IGJpbmRpbmdcclxuXHRcdGZvciB5b3UuICBGb3IgZXhhbXBsZSxcclxuXHJcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnI215Rm9ybScpLmFqYXhGb3JtKHtcclxuXHRcdFx0XHR0YXJnZXQ6ICcjb3V0cHV0J1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdFlvdSBjYW4gYWxzbyB1c2UgYWpheEZvcm0gd2l0aCBkZWxlZ2F0aW9uIChyZXF1aXJlcyBqUXVlcnkgdjEuNyspLCBzbyB0aGVcclxuXHRcdGZvcm0gZG9lcyBub3QgaGF2ZSB0byBleGlzdCB3aGVuIHlvdSBpbnZva2UgYWpheEZvcm06XHJcblxyXG5cdFx0JCgnI215Rm9ybScpLmFqYXhGb3JtKHtcclxuXHRcdFx0ZGVsZWdhdGlvbjogdHJ1ZSxcclxuXHRcdFx0dGFyZ2V0OiAnI291dHB1dCdcclxuXHRcdH0pO1xyXG5cclxuXHRcdFdoZW4gdXNpbmcgYWpheEZvcm0sIHRoZSBhamF4U3VibWl0IGZ1bmN0aW9uIHdpbGwgYmUgaW52b2tlZCBmb3IgeW91XHJcblx0XHRhdCB0aGUgYXBwcm9wcmlhdGUgdGltZS5cclxuXHQqL1xyXG5cclxuXHQvKipcclxuXHQgKiBGZWF0dXJlIGRldGVjdGlvblxyXG5cdCAqL1xyXG5cdHZhciBmZWF0dXJlID0ge307XHJcblx0ZmVhdHVyZS5maWxlYXBpID0gJChcIjxpbnB1dCB0eXBlPSdmaWxlJy8+XCIpLmdldCgwKS5maWxlcyAhPT0gdW5kZWZpbmVkO1xyXG5cdGZlYXR1cmUuZm9ybWRhdGEgPSB3aW5kb3cuRm9ybURhdGEgIT09IHVuZGVmaW5lZDtcclxuXHJcblx0dmFyIGhhc1Byb3AgPSAhISQuZm4ucHJvcDtcclxuXHJcblx0Ly8gYXR0cjIgdXNlcyBwcm9wIHdoZW4gaXQgY2FuIGJ1dCBjaGVja3MgdGhlIHJldHVybiB0eXBlIGZvclxyXG5cdC8vIGFuIGV4cGVjdGVkIHN0cmluZy4gIHRoaXMgYWNjb3VudHMgZm9yIHRoZSBjYXNlIHdoZXJlIGEgZm9ybSBcclxuXHQvLyBjb250YWlucyBpbnB1dHMgd2l0aCBuYW1lcyBsaWtlIFwiYWN0aW9uXCIgb3IgXCJtZXRob2RcIjsgaW4gdGhvc2VcclxuXHQvLyBjYXNlcyBcInByb3BcIiByZXR1cm5zIHRoZSBlbGVtZW50XHJcblx0JC5mbi5hdHRyMiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKCAhIGhhc1Byb3AgKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5hdHRyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHR2YXIgdmFsID0gdGhpcy5wcm9wLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRpZiAoICggdmFsICYmIHZhbC5qcXVlcnkgKSB8fCB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyApXHJcblx0XHRcdHJldHVybiB2YWw7XHJcblx0XHRyZXR1cm4gdGhpcy5hdHRyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogYWpheFN1Ym1pdCgpIHByb3ZpZGVzIGEgbWVjaGFuaXNtIGZvciBpbW1lZGlhdGVseSBzdWJtaXR0aW5nXHJcblx0ICogYW4gSFRNTCBmb3JtIHVzaW5nIEFKQVguXHJcblx0ICovXHJcblx0JC5mbi5hamF4U3VibWl0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG5cdFx0Lypqc2hpbnQgc2NyaXB0dXJsOnRydWUgKi9cclxuXHJcblx0XHQvLyBmYXN0IGZhaWwgaWYgbm90aGluZyBzZWxlY3RlZCAoaHR0cDovL2Rldi5qcXVlcnkuY29tL3RpY2tldC8yNzUyKVxyXG5cdFx0aWYgKCF0aGlzLmxlbmd0aCkge1xyXG5cdFx0XHRsb2coJ2FqYXhTdWJtaXQ6IHNraXBwaW5nIHN1Ym1pdCBwcm9jZXNzIC0gbm8gZWxlbWVudCBzZWxlY3RlZCcpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgbWV0aG9kLCBhY3Rpb24sIHVybCwgJGZvcm0gPSB0aGlzO1xyXG5cclxuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucyA9PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdG9wdGlvbnMgPSB7IHN1Y2Nlc3M6IG9wdGlvbnMgfTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKCBvcHRpb25zID09PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdG9wdGlvbnMgPSB7fTtcclxuXHRcdH1cclxuXHJcblx0XHRtZXRob2QgPSBvcHRpb25zLnR5cGUgfHwgdGhpcy5hdHRyMignbWV0aG9kJyk7XHJcblx0XHRhY3Rpb24gPSBvcHRpb25zLnVybCAgfHwgdGhpcy5hdHRyMignYWN0aW9uJyk7XHJcblxyXG5cdFx0dXJsID0gKHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnKSA/ICQudHJpbShhY3Rpb24pIDogJyc7XHJcblx0XHR1cmwgPSB1cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYgfHwgJyc7XHJcblx0XHRpZiAodXJsKSB7XHJcblx0XHRcdC8vIGNsZWFuIHVybCAoZG9uJ3QgaW5jbHVkZSBoYXNoIHZhdWUpXHJcblx0XHRcdHVybCA9ICh1cmwubWF0Y2goL14oW14jXSspLyl8fFtdKVsxXTtcclxuXHRcdH1cclxuXHJcblx0XHRvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge1xyXG5cdFx0XHR1cmw6ICB1cmwsXHJcblx0XHRcdHN1Y2Nlc3M6ICQuYWpheFNldHRpbmdzLnN1Y2Nlc3MsXHJcblx0XHRcdHR5cGU6IG1ldGhvZCB8fCAkLmFqYXhTZXR0aW5ncy50eXBlLFxyXG5cdFx0XHRpZnJhbWVTcmM6IC9eaHR0cHMvaS50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ocmVmIHx8ICcnKSA/ICdqYXZhc2NyaXB0OmZhbHNlJyA6ICdhYm91dDpibGFuaydcclxuXHRcdH0sIG9wdGlvbnMpO1xyXG5cclxuXHRcdC8vIGhvb2sgZm9yIG1hbmlwdWxhdGluZyB0aGUgZm9ybSBkYXRhIGJlZm9yZSBpdCBpcyBleHRyYWN0ZWQ7XHJcblx0XHQvLyBjb252ZW5pZW50IGZvciB1c2Ugd2l0aCByaWNoIGVkaXRvcnMgbGlrZSB0aW55TUNFIG9yIEZDS0VkaXRvclxyXG5cdFx0dmFyIHZldG8gPSB7fTtcclxuXHRcdHRoaXMudHJpZ2dlcignZm9ybS1wcmUtc2VyaWFsaXplJywgW3RoaXMsIG9wdGlvbnMsIHZldG9dKTtcclxuXHRcdGlmICh2ZXRvLnZldG8pIHtcclxuXHRcdFx0bG9nKCdhamF4U3VibWl0OiBzdWJtaXQgdmV0b2VkIHZpYSBmb3JtLXByZS1zZXJpYWxpemUgdHJpZ2dlcicpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHJcblx0XHQvLyBwcm92aWRlIG9wcG9ydHVuaXR5IHRvIGFsdGVyIGZvcm0gZGF0YSBiZWZvcmUgaXQgaXMgc2VyaWFsaXplZFxyXG5cdFx0aWYgKG9wdGlvbnMuYmVmb3JlU2VyaWFsaXplICYmIG9wdGlvbnMuYmVmb3JlU2VyaWFsaXplKHRoaXMsIG9wdGlvbnMpID09PSBmYWxzZSkge1xyXG5cdFx0XHRsb2coJ2FqYXhTdWJtaXQ6IHN1Ym1pdCBhYm9ydGVkIHZpYSBiZWZvcmVTZXJpYWxpemUgY2FsbGJhY2snKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHRyYWRpdGlvbmFsID0gb3B0aW9ucy50cmFkaXRpb25hbDtcclxuXHRcdGlmICggdHJhZGl0aW9uYWwgPT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0dHJhZGl0aW9uYWwgPSAkLmFqYXhTZXR0aW5ncy50cmFkaXRpb25hbDtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgZWxlbWVudHMgPSBbXTtcclxuXHRcdHZhciBxeCwgYSA9IHRoaXMuZm9ybVRvQXJyYXkob3B0aW9ucy5zZW1hbnRpYywgZWxlbWVudHMpO1xyXG5cdFx0aWYgKG9wdGlvbnMuZGF0YSkge1xyXG5cdFx0XHRvcHRpb25zLmV4dHJhRGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuXHRcdFx0cXggPSAkLnBhcmFtKG9wdGlvbnMuZGF0YSwgdHJhZGl0aW9uYWwpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGdpdmUgcHJlLXN1Ym1pdCBjYWxsYmFjayBhbiBvcHBvcnR1bml0eSB0byBhYm9ydCB0aGUgc3VibWl0XHJcblx0XHRpZiAob3B0aW9ucy5iZWZvcmVTdWJtaXQgJiYgb3B0aW9ucy5iZWZvcmVTdWJtaXQoYSwgdGhpcywgb3B0aW9ucykgPT09IGZhbHNlKSB7XHJcblx0XHRcdGxvZygnYWpheFN1Ym1pdDogc3VibWl0IGFib3J0ZWQgdmlhIGJlZm9yZVN1Ym1pdCBjYWxsYmFjaycpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHJcblx0XHQvLyBmaXJlIHZldG9hYmxlICd2YWxpZGF0ZScgZXZlbnRcclxuXHRcdHRoaXMudHJpZ2dlcignZm9ybS1zdWJtaXQtdmFsaWRhdGUnLCBbYSwgdGhpcywgb3B0aW9ucywgdmV0b10pO1xyXG5cdFx0aWYgKHZldG8udmV0bykge1xyXG5cdFx0XHRsb2coJ2FqYXhTdWJtaXQ6IHN1Ym1pdCB2ZXRvZWQgdmlhIGZvcm0tc3VibWl0LXZhbGlkYXRlIHRyaWdnZXInKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHEgPSAkLnBhcmFtKGEsIHRyYWRpdGlvbmFsKTtcclxuXHRcdGlmIChxeCkge1xyXG5cdFx0XHRxID0gKCBxID8gKHEgKyAnJicgKyBxeCkgOiBxeCApO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG9wdGlvbnMudHlwZS50b1VwcGVyQ2FzZSgpID09ICdHRVQnKSB7XHJcblx0XHRcdG9wdGlvbnMudXJsICs9IChvcHRpb25zLnVybC5pbmRleE9mKCc/JykgPj0gMCA/ICcmJyA6ICc/JykgKyBxO1xyXG5cdFx0XHRvcHRpb25zLmRhdGEgPSBudWxsOyAgLy8gZGF0YSBpcyBudWxsIGZvciAnZ2V0J1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdG9wdGlvbnMuZGF0YSA9IHE7IC8vIGRhdGEgaXMgdGhlIHF1ZXJ5IHN0cmluZyBmb3IgJ3Bvc3QnXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xyXG5cdFx0aWYgKG9wdGlvbnMucmVzZXRGb3JtKSB7XHJcblx0XHRcdGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uKCkgeyAkZm9ybS5yZXNldEZvcm0oKTsgfSk7XHJcblx0XHR9XHJcblx0XHRpZiAob3B0aW9ucy5jbGVhckZvcm0pIHtcclxuXHRcdFx0Y2FsbGJhY2tzLnB1c2goZnVuY3Rpb24oKSB7ICRmb3JtLmNsZWFyRm9ybShvcHRpb25zLmluY2x1ZGVIaWRkZW4pOyB9KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBwZXJmb3JtIGEgbG9hZCBvbiB0aGUgdGFyZ2V0IG9ubHkgaWYgZGF0YVR5cGUgaXMgbm90IHByb3ZpZGVkXHJcblx0XHRpZiAoIW9wdGlvbnMuZGF0YVR5cGUgJiYgb3B0aW9ucy50YXJnZXQpIHtcclxuXHRcdFx0dmFyIG9sZFN1Y2Nlc3MgPSBvcHRpb25zLnN1Y2Nlc3MgfHwgZnVuY3Rpb24oKXt9O1xyXG5cdFx0XHRjYWxsYmFja3MucHVzaChmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0dmFyIGZuID0gb3B0aW9ucy5yZXBsYWNlVGFyZ2V0ID8gJ3JlcGxhY2VXaXRoJyA6ICdodG1sJztcclxuXHRcdFx0XHQkKG9wdGlvbnMudGFyZ2V0KVtmbl0oZGF0YSkuZWFjaChvbGRTdWNjZXNzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xyXG5cdFx0XHRjYWxsYmFja3MucHVzaChvcHRpb25zLnN1Y2Nlc3MpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG9wdGlvbnMuc3VjY2VzcyA9IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywgeGhyKSB7IC8vIGpRdWVyeSAxLjQrIHBhc3NlcyB4aHIgYXMgM3JkIGFyZ1xyXG5cdFx0XHR2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCB8fCB0aGlzIDsgICAgLy8galF1ZXJ5IDEuNCsgc3VwcG9ydHMgc2NvcGUgY29udGV4dFxyXG5cdFx0XHRmb3IgKHZhciBpPTAsIG1heD1jYWxsYmFja3MubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcclxuXHRcdFx0XHRjYWxsYmFja3NbaV0uYXBwbHkoY29udGV4dCwgW2RhdGEsIHN0YXR1cywgeGhyIHx8ICRmb3JtLCAkZm9ybV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmIChvcHRpb25zLmVycm9yKSB7XHJcblx0XHRcdHZhciBvbGRFcnJvciA9IG9wdGlvbnMuZXJyb3I7XHJcblx0XHRcdG9wdGlvbnMuZXJyb3IgPSBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuXHRcdFx0XHR2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCB8fCB0aGlzO1xyXG5cdFx0XHRcdG9sZEVycm9yLmFwcGx5KGNvbnRleHQsIFt4aHIsIHN0YXR1cywgZXJyb3IsICRmb3JtXSk7XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0IGlmIChvcHRpb25zLmNvbXBsZXRlKSB7XHJcblx0XHRcdHZhciBvbGRDb21wbGV0ZSA9IG9wdGlvbnMuY29tcGxldGU7XHJcblx0XHRcdG9wdGlvbnMuY29tcGxldGUgPSBmdW5jdGlvbih4aHIsIHN0YXR1cykge1xyXG5cdFx0XHRcdHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0IHx8IHRoaXM7XHJcblx0XHRcdFx0b2xkQ29tcGxldGUuYXBwbHkoY29udGV4dCwgW3hociwgc3RhdHVzLCAkZm9ybV0pO1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGFyZSB0aGVyZSBmaWxlcyB0byB1cGxvYWQ/XHJcblxyXG5cdFx0Ly8gW3ZhbHVlXSAoaXNzdWUgIzExMyksIGFsc28gc2VlIGNvbW1lbnQ6XHJcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vbWFsc3VwL2Zvcm0vY29tbWl0LzU4ODMwNmFlZGJhMWRlMDEzODgwMzJkNWY0MmE2MDE1OWVlYTkyMjgjY29tbWl0Y29tbWVudC0yMTgwMjE5XHJcblx0XHR2YXIgZmlsZUlucHV0cyA9ICQoJ2lucHV0W3R5cGU9ZmlsZV06ZW5hYmxlZCcsIHRoaXMpLmZpbHRlcihmdW5jdGlvbigpIHsgcmV0dXJuICQodGhpcykudmFsKCkgIT09ICcnOyB9KTtcclxuXHJcblx0XHR2YXIgaGFzRmlsZUlucHV0cyA9IGZpbGVJbnB1dHMubGVuZ3RoID4gMDtcclxuXHRcdHZhciBtcCA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcclxuXHRcdHZhciBtdWx0aXBhcnQgPSAoJGZvcm0uYXR0cignZW5jdHlwZScpID09IG1wIHx8ICRmb3JtLmF0dHIoJ2VuY29kaW5nJykgPT0gbXApO1xyXG5cclxuXHRcdHZhciBmaWxlQVBJID0gZmVhdHVyZS5maWxlYXBpICYmIGZlYXR1cmUuZm9ybWRhdGE7XHJcblx0XHRsb2coXCJmaWxlQVBJIDpcIiArIGZpbGVBUEkpO1xyXG5cdFx0dmFyIHNob3VsZFVzZUZyYW1lID0gKGhhc0ZpbGVJbnB1dHMgfHwgbXVsdGlwYXJ0KSAmJiAhZmlsZUFQSTtcclxuXHJcblx0XHR2YXIganF4aHI7XHJcblxyXG5cdFx0Ly8gb3B0aW9ucy5pZnJhbWUgYWxsb3dzIHVzZXIgdG8gZm9yY2UgaWZyYW1lIG1vZGVcclxuXHRcdC8vIDA2LU5PVi0wOTogbm93IGRlZmF1bHRpbmcgdG8gaWZyYW1lIG1vZGUgaWYgZmlsZSBpbnB1dCBpcyBkZXRlY3RlZFxyXG5cdFx0aWYgKG9wdGlvbnMuaWZyYW1lICE9PSBmYWxzZSAmJiAob3B0aW9ucy5pZnJhbWUgfHwgc2hvdWxkVXNlRnJhbWUpKSB7XHJcblx0XHRcdC8vIGhhY2sgdG8gZml4IFNhZmFyaSBoYW5nICh0aGFua3MgdG8gVGltIE1vbGVuZGlqayBmb3IgdGhpcylcclxuXHRcdFx0Ly8gc2VlOiAgaHR0cDovL2dyb3Vwcy5nb29nbGUuY29tL2dyb3VwL2pxdWVyeS1kZXYvYnJvd3NlX3RocmVhZC90aHJlYWQvMzYzOTViN2FiNTEwZGQ1ZFxyXG5cdFx0XHRpZiAob3B0aW9ucy5jbG9zZUtlZXBBbGl2ZSkge1xyXG5cdFx0XHRcdCQuZ2V0KG9wdGlvbnMuY2xvc2VLZWVwQWxpdmUsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0anF4aHIgPSBmaWxlVXBsb2FkSWZyYW1lKGEpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGpxeGhyID0gZmlsZVVwbG9hZElmcmFtZShhKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoKGhhc0ZpbGVJbnB1dHMgfHwgbXVsdGlwYXJ0KSAmJiBmaWxlQVBJKSB7XHJcblx0XHRcdGpxeGhyID0gZmlsZVVwbG9hZFhocihhKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRqcXhociA9ICQuYWpheChvcHRpb25zKTtcclxuXHRcdH1cclxuXHJcblx0XHQkZm9ybS5yZW1vdmVEYXRhKCdqcXhocicpLmRhdGEoJ2pxeGhyJywganF4aHIpO1xyXG5cclxuXHRcdC8vIGNsZWFyIGVsZW1lbnQgYXJyYXlcclxuXHRcdGZvciAodmFyIGs9MDsgayA8IGVsZW1lbnRzLmxlbmd0aDsgaysrKVxyXG5cdFx0XHRlbGVtZW50c1trXSA9IG51bGw7XHJcblxyXG5cdFx0Ly8gZmlyZSAnbm90aWZ5JyBldmVudFxyXG5cdFx0dGhpcy50cmlnZ2VyKCdmb3JtLXN1Ym1pdC1ub3RpZnknLCBbdGhpcywgb3B0aW9uc10pO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdFx0Ly8gdXRpbGl0eSBmbiBmb3IgZGVlcCBzZXJpYWxpemF0aW9uXHJcblx0XHRmdW5jdGlvbiBkZWVwU2VyaWFsaXplKGV4dHJhRGF0YSl7XHJcblx0XHRcdHZhciBzZXJpYWxpemVkID0gJC5wYXJhbShleHRyYURhdGEsIG9wdGlvbnMudHJhZGl0aW9uYWwpLnNwbGl0KCcmJyk7XHJcblx0XHRcdHZhciBsZW4gPSBzZXJpYWxpemVkLmxlbmd0aDtcclxuXHRcdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0XHR2YXIgaSwgcGFydDtcclxuXHRcdFx0Zm9yIChpPTA7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdC8vICMyNTI7IHVuZG8gcGFyYW0gc3BhY2UgcmVwbGFjZW1lbnRcclxuXHRcdFx0XHRzZXJpYWxpemVkW2ldID0gc2VyaWFsaXplZFtpXS5yZXBsYWNlKC9cXCsvZywnICcpO1xyXG5cdFx0XHRcdHBhcnQgPSBzZXJpYWxpemVkW2ldLnNwbGl0KCc9Jyk7XHJcblx0XHRcdFx0Ly8gIzI3ODsgdXNlIGFycmF5IGluc3RlYWQgb2Ygb2JqZWN0IHN0b3JhZ2UsIGZhdm9yaW5nIGFycmF5IHNlcmlhbGl6YXRpb25zXHJcblx0XHRcdFx0cmVzdWx0LnB1c2goW2RlY29kZVVSSUNvbXBvbmVudChwYXJ0WzBdKSwgZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRbMV0pXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHJcblx0XHQgLy8gWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMiBmaWxlIHVwbG9hZHMgKGJpZyBoYXQgdGlwIHRvIGZyYW5jb2lzMm1ldHopXHJcblx0XHRmdW5jdGlvbiBmaWxlVXBsb2FkWGhyKGEpIHtcclxuXHRcdFx0dmFyIGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBpPTA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0Zm9ybWRhdGEuYXBwZW5kKGFbaV0ubmFtZSwgYVtpXS52YWx1ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChvcHRpb25zLmV4dHJhRGF0YSkge1xyXG5cdFx0XHRcdHZhciBzZXJpYWxpemVkRGF0YSA9IGRlZXBTZXJpYWxpemUob3B0aW9ucy5leHRyYURhdGEpO1xyXG5cdFx0XHRcdGZvciAoaT0wOyBpIDwgc2VyaWFsaXplZERhdGEubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0XHRpZiAoc2VyaWFsaXplZERhdGFbaV0pXHJcblx0XHRcdFx0XHRcdGZvcm1kYXRhLmFwcGVuZChzZXJpYWxpemVkRGF0YVtpXVswXSwgc2VyaWFsaXplZERhdGFbaV1bMV0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRvcHRpb25zLmRhdGEgPSBudWxsO1xyXG5cclxuXHRcdFx0dmFyIHMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgJC5hamF4U2V0dGluZ3MsIG9wdGlvbnMsIHtcclxuXHRcdFx0XHRjb250ZW50VHlwZTogZmFsc2UsXHJcblx0XHRcdFx0cHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG5cdFx0XHRcdGNhY2hlOiBmYWxzZSxcclxuXHRcdFx0XHR0eXBlOiBtZXRob2QgfHwgJ1BPU1QnXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKG9wdGlvbnMudXBsb2FkUHJvZ3Jlc3MpIHtcclxuXHRcdFx0XHQvLyB3b3JrYXJvdW5kIGJlY2F1c2UganFYSFIgZG9lcyBub3QgZXhwb3NlIHVwbG9hZCBwcm9wZXJ0eVxyXG5cdFx0XHRcdHMueGhyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR2YXIgeGhyID0gJC5hamF4U2V0dGluZ3MueGhyKCk7XHJcblx0XHRcdFx0XHRpZiAoeGhyLnVwbG9hZCkge1xyXG5cdFx0XHRcdFx0XHR4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgcGVyY2VudCA9IDA7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHBvc2l0aW9uID0gZXZlbnQubG9hZGVkIHx8IGV2ZW50LnBvc2l0aW9uOyAvKmV2ZW50LnBvc2l0aW9uIGlzIGRlcHJlY2F0ZWQqL1xyXG5cdFx0XHRcdFx0XHRcdHZhciB0b3RhbCA9IGV2ZW50LnRvdGFsO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRwZXJjZW50ID0gTWF0aC5jZWlsKHBvc2l0aW9uIC8gdG90YWwgKiAxMDApO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRvcHRpb25zLnVwbG9hZFByb2dyZXNzKGV2ZW50LCBwb3NpdGlvbiwgdG90YWwsIHBlcmNlbnQpO1xyXG5cdFx0XHRcdFx0XHR9LCBmYWxzZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4geGhyO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHMuZGF0YSA9IG51bGw7XHJcblx0XHRcdHZhciBiZWZvcmVTZW5kID0gcy5iZWZvcmVTZW5kO1xyXG5cdFx0XHRzLmJlZm9yZVNlbmQgPSBmdW5jdGlvbih4aHIsIG8pIHtcclxuXHRcdFx0XHQvL1NlbmQgRm9ybURhdGEoKSBwcm92aWRlZCBieSB1c2VyXHJcblx0XHRcdFx0aWYgKG9wdGlvbnMuZm9ybURhdGEpXHJcblx0XHRcdFx0XHRvLmRhdGEgPSBvcHRpb25zLmZvcm1EYXRhO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdG8uZGF0YSA9IGZvcm1kYXRhO1xyXG5cdFx0XHRcdGlmKGJlZm9yZVNlbmQpXHJcblx0XHRcdFx0XHRiZWZvcmVTZW5kLmNhbGwodGhpcywgeGhyLCBvKTtcclxuXHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuICQuYWpheChzKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBwcml2YXRlIGZ1bmN0aW9uIGZvciBoYW5kbGluZyBmaWxlIHVwbG9hZHMgKGhhdCB0aXAgdG8gWUFIT08hKVxyXG5cdFx0ZnVuY3Rpb24gZmlsZVVwbG9hZElmcmFtZShhKSB7XHJcblx0XHRcdHZhciBmb3JtID0gJGZvcm1bMF0sIGVsLCBpLCBzLCBnLCBpZCwgJGlvLCBpbywgeGhyLCBzdWIsIG4sIHRpbWVkT3V0LCB0aW1lb3V0SGFuZGxlO1xyXG5cdFx0XHR2YXIgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XHJcblxyXG5cdFx0XHQvLyAjMzQxXHJcblx0XHRcdGRlZmVycmVkLmFib3J0ID0gZnVuY3Rpb24oc3RhdHVzKSB7XHJcblx0XHRcdFx0eGhyLmFib3J0KHN0YXR1cyk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRpZiAoYSkge1xyXG5cdFx0XHRcdC8vIGVuc3VyZSB0aGF0IGV2ZXJ5IHNlcmlhbGl6ZWQgaW5wdXQgaXMgc3RpbGwgZW5hYmxlZFxyXG5cdFx0XHRcdGZvciAoaT0wOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGVsID0gJChlbGVtZW50c1tpXSk7XHJcblx0XHRcdFx0XHRpZiAoIGhhc1Byb3AgKVxyXG5cdFx0XHRcdFx0XHRlbC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0ZWwucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgJC5hamF4U2V0dGluZ3MsIG9wdGlvbnMpO1xyXG5cdFx0XHRzLmNvbnRleHQgPSBzLmNvbnRleHQgfHwgcztcclxuXHRcdFx0aWQgPSAnanFGb3JtSU8nICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcclxuXHRcdFx0aWYgKHMuaWZyYW1lVGFyZ2V0KSB7XHJcblx0XHRcdFx0JGlvID0gJChzLmlmcmFtZVRhcmdldCk7XHJcblx0XHRcdFx0biA9ICRpby5hdHRyMignbmFtZScpO1xyXG5cdFx0XHRcdGlmICghbilcclxuXHRcdFx0XHRcdCAkaW8uYXR0cjIoJ25hbWUnLCBpZCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0aWQgPSBuO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdCRpbyA9ICQoJzxpZnJhbWUgbmFtZT1cIicgKyBpZCArICdcIiBzcmM9XCInKyBzLmlmcmFtZVNyYyArJ1wiIC8+Jyk7XHJcblx0XHRcdFx0JGlvLmNzcyh7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICctMTAwMHB4JywgbGVmdDogJy0xMDAwcHgnIH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlvID0gJGlvWzBdO1xyXG5cclxuXHJcblx0XHRcdHhociA9IHsgLy8gbW9jayBvYmplY3RcclxuXHRcdFx0XHRhYm9ydGVkOiAwLFxyXG5cdFx0XHRcdHJlc3BvbnNlVGV4dDogbnVsbCxcclxuXHRcdFx0XHRyZXNwb25zZVhNTDogbnVsbCxcclxuXHRcdFx0XHRzdGF0dXM6IDAsXHJcblx0XHRcdFx0c3RhdHVzVGV4dDogJ24vYScsXHJcblx0XHRcdFx0Z2V0QWxsUmVzcG9uc2VIZWFkZXJzOiBmdW5jdGlvbigpIHt9LFxyXG5cdFx0XHRcdGdldFJlc3BvbnNlSGVhZGVyOiBmdW5jdGlvbigpIHt9LFxyXG5cdFx0XHRcdHNldFJlcXVlc3RIZWFkZXI6IGZ1bmN0aW9uKCkge30sXHJcblx0XHRcdFx0YWJvcnQ6IGZ1bmN0aW9uKHN0YXR1cykge1xyXG5cdFx0XHRcdFx0dmFyIGUgPSAoc3RhdHVzID09PSAndGltZW91dCcgPyAndGltZW91dCcgOiAnYWJvcnRlZCcpO1xyXG5cdFx0XHRcdFx0bG9nKCdhYm9ydGluZyB1cGxvYWQuLi4gJyArIGUpO1xyXG5cdFx0XHRcdFx0dGhpcy5hYm9ydGVkID0gMTtcclxuXHJcblx0XHRcdFx0XHR0cnkgeyAvLyAjMjE0LCAjMjU3XHJcblx0XHRcdFx0XHRcdGlmIChpby5jb250ZW50V2luZG93LmRvY3VtZW50LmV4ZWNDb21tYW5kKSB7XHJcblx0XHRcdFx0XHRcdFx0aW8uY29udGVudFdpbmRvdy5kb2N1bWVudC5leGVjQ29tbWFuZCgnU3RvcCcpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYXRjaChpZ25vcmUpIHt9XHJcblxyXG5cdFx0XHRcdFx0JGlvLmF0dHIoJ3NyYycsIHMuaWZyYW1lU3JjKTsgLy8gYWJvcnQgb3AgaW4gcHJvZ3Jlc3NcclxuXHRcdFx0XHRcdHhoci5lcnJvciA9IGU7XHJcblx0XHRcdFx0XHRpZiAocy5lcnJvcilcclxuXHRcdFx0XHRcdFx0cy5lcnJvci5jYWxsKHMuY29udGV4dCwgeGhyLCBlLCBzdGF0dXMpO1xyXG5cdFx0XHRcdFx0aWYgKGcpXHJcblx0XHRcdFx0XHRcdCQuZXZlbnQudHJpZ2dlcihcImFqYXhFcnJvclwiLCBbeGhyLCBzLCBlXSk7XHJcblx0XHRcdFx0XHRpZiAocy5jb21wbGV0ZSlcclxuXHRcdFx0XHRcdFx0cy5jb21wbGV0ZS5jYWxsKHMuY29udGV4dCwgeGhyLCBlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRnID0gcy5nbG9iYWw7XHJcblx0XHRcdC8vIHRyaWdnZXIgYWpheCBnbG9iYWwgZXZlbnRzIHNvIHRoYXQgYWN0aXZpdHkvYmxvY2sgaW5kaWNhdG9ycyB3b3JrIGxpa2Ugbm9ybWFsXHJcblx0XHRcdGlmIChnICYmIDAgPT09ICQuYWN0aXZlKyspIHtcclxuXHRcdFx0XHQkLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGcpIHtcclxuXHRcdFx0XHQkLmV2ZW50LnRyaWdnZXIoXCJhamF4U2VuZFwiLCBbeGhyLCBzXSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChzLmJlZm9yZVNlbmQgJiYgcy5iZWZvcmVTZW5kLmNhbGwocy5jb250ZXh0LCB4aHIsIHMpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdGlmIChzLmdsb2JhbCkge1xyXG5cdFx0XHRcdFx0JC5hY3RpdmUtLTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KCk7XHJcblx0XHRcdFx0cmV0dXJuIGRlZmVycmVkO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh4aHIuYWJvcnRlZCkge1xyXG5cdFx0XHRcdGRlZmVycmVkLnJlamVjdCgpO1xyXG5cdFx0XHRcdHJldHVybiBkZWZlcnJlZDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gYWRkIHN1Ym1pdHRpbmcgZWxlbWVudCB0byBkYXRhIGlmIHdlIGtub3cgaXRcclxuXHRcdFx0c3ViID0gZm9ybS5jbGs7XHJcblx0XHRcdGlmIChzdWIpIHtcclxuXHRcdFx0XHRuID0gc3ViLm5hbWU7XHJcblx0XHRcdFx0aWYgKG4gJiYgIXN1Yi5kaXNhYmxlZCkge1xyXG5cdFx0XHRcdFx0cy5leHRyYURhdGEgPSBzLmV4dHJhRGF0YSB8fCB7fTtcclxuXHRcdFx0XHRcdHMuZXh0cmFEYXRhW25dID0gc3ViLnZhbHVlO1xyXG5cdFx0XHRcdFx0aWYgKHN1Yi50eXBlID09IFwiaW1hZ2VcIikge1xyXG5cdFx0XHRcdFx0XHRzLmV4dHJhRGF0YVtuKycueCddID0gZm9ybS5jbGtfeDtcclxuXHRcdFx0XHRcdFx0cy5leHRyYURhdGFbbisnLnknXSA9IGZvcm0uY2xrX3k7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgQ0xJRU5UX1RJTUVPVVRfQUJPUlQgPSAxO1xyXG5cdFx0XHR2YXIgU0VSVkVSX0FCT1JUID0gMjtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRmdW5jdGlvbiBnZXREb2MoZnJhbWUpIHtcclxuXHRcdFx0XHQvKiBpdCBsb29rcyBsaWtlIGNvbnRlbnRXaW5kb3cgb3IgY29udGVudERvY3VtZW50IGRvIG5vdFxyXG5cdFx0XHRcdCAqIGNhcnJ5IHRoZSBwcm90b2NvbCBwcm9wZXJ0eSBpbiBpZTgsIHdoZW4gcnVubmluZyB1bmRlciBzc2xcclxuXHRcdFx0XHQgKiBmcmFtZS5kb2N1bWVudCBpcyB0aGUgb25seSB2YWxpZCByZXNwb25zZSBkb2N1bWVudCwgc2luY2VcclxuXHRcdFx0XHQgKiB0aGUgcHJvdG9jb2wgaXMga25vdyBidXQgbm90IG9uIHRoZSBvdGhlciB0d28gb2JqZWN0cy4gc3RyYW5nZT9cclxuXHRcdFx0XHQgKiBcIlNhbWUgb3JpZ2luIHBvbGljeVwiIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU2FtZV9vcmlnaW5fcG9saWN5XHJcblx0XHRcdFx0ICovXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dmFyIGRvYyA9IG51bGw7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gSUU4IGNhc2NhZGluZyBhY2Nlc3MgY2hlY2tcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0aWYgKGZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcclxuXHRcdFx0XHRcdFx0ZG9jID0gZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGNhdGNoKGVycikge1xyXG5cdFx0XHRcdFx0Ly8gSUU4IGFjY2VzcyBkZW5pZWQgdW5kZXIgc3NsICYgbWlzc2luZyBwcm90b2NvbFxyXG5cdFx0XHRcdFx0bG9nKCdjYW5ub3QgZ2V0IGlmcmFtZS5jb250ZW50V2luZG93IGRvY3VtZW50OiAnICsgZXJyKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChkb2MpIHsgLy8gc3VjY2Vzc2Z1bCBnZXR0aW5nIGNvbnRlbnRcclxuXHRcdFx0XHRcdHJldHVybiBkb2M7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0cnkgeyAvLyBzaW1wbHkgY2hlY2tpbmcgbWF5IHRocm93IGluIGllOCB1bmRlciBzc2wgb3IgbWlzbWF0Y2hlZCBwcm90b2NvbFxyXG5cdFx0XHRcdFx0ZG9jID0gZnJhbWUuY29udGVudERvY3VtZW50ID8gZnJhbWUuY29udGVudERvY3VtZW50IDogZnJhbWUuZG9jdW1lbnQ7XHJcblx0XHRcdFx0fSBjYXRjaChlcnIpIHtcclxuXHRcdFx0XHRcdC8vIGxhc3QgYXR0ZW1wdFxyXG5cdFx0XHRcdFx0bG9nKCdjYW5ub3QgZ2V0IGlmcmFtZS5jb250ZW50RG9jdW1lbnQ6ICcgKyBlcnIpO1xyXG5cdFx0XHRcdFx0ZG9jID0gZnJhbWUuZG9jdW1lbnQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBkb2M7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFJhaWxzIENTUkYgaGFjayAodGhhbmtzIHRvIFl2YW4gQmFydGhlbGVteSlcclxuXHRcdFx0dmFyIGNzcmZfdG9rZW4gPSAkKCdtZXRhW25hbWU9Y3NyZi10b2tlbl0nKS5hdHRyKCdjb250ZW50Jyk7XHJcblx0XHRcdHZhciBjc3JmX3BhcmFtID0gJCgnbWV0YVtuYW1lPWNzcmYtcGFyYW1dJykuYXR0cignY29udGVudCcpO1xyXG5cdFx0XHRpZiAoY3NyZl9wYXJhbSAmJiBjc3JmX3Rva2VuKSB7XHJcblx0XHRcdFx0cy5leHRyYURhdGEgPSBzLmV4dHJhRGF0YSB8fCB7fTtcclxuXHRcdFx0XHRzLmV4dHJhRGF0YVtjc3JmX3BhcmFtXSA9IGNzcmZfdG9rZW47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHRha2UgYSBicmVhdGggc28gdGhhdCBwZW5kaW5nIHJlcGFpbnRzIGdldCBzb21lIGNwdSB0aW1lIGJlZm9yZSB0aGUgdXBsb2FkIHN0YXJ0c1xyXG5cdFx0XHRmdW5jdGlvbiBkb1N1Ym1pdCgpIHtcclxuXHRcdFx0XHQvLyBtYWtlIHN1cmUgZm9ybSBhdHRycyBhcmUgc2V0XHJcblx0XHRcdFx0dmFyIHQgPSAkZm9ybS5hdHRyMigndGFyZ2V0JyksIGEgPSAkZm9ybS5hdHRyMignYWN0aW9uJyk7XHJcblxyXG5cdFx0XHRcdC8vIHVwZGF0ZSBmb3JtIGF0dHJzIGluIElFIGZyaWVuZGx5IHdheVxyXG5cdFx0XHRcdGZvcm0uc2V0QXR0cmlidXRlKCd0YXJnZXQnLGlkKTtcclxuXHRcdFx0XHRpZiAoIW1ldGhvZCB8fCAvcG9zdC9pLnRlc3QobWV0aG9kKSApIHtcclxuXHRcdFx0XHRcdGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnUE9TVCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoYSAhPSBzLnVybCkge1xyXG5cdFx0XHRcdFx0Zm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsIHMudXJsKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGllIGJvcmtzIGluIHNvbWUgY2FzZXMgd2hlbiBzZXR0aW5nIGVuY29kaW5nXHJcblx0XHRcdFx0aWYgKCEgcy5za2lwRW5jb2RpbmdPdmVycmlkZSAmJiAoIW1ldGhvZCB8fCAvcG9zdC9pLnRlc3QobWV0aG9kKSkpIHtcclxuXHRcdFx0XHRcdCRmb3JtLmF0dHIoe1xyXG5cdFx0XHRcdFx0XHRlbmNvZGluZzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG5cdFx0XHRcdFx0XHRlbmN0eXBlOiAgJ211bHRpcGFydC9mb3JtLWRhdGEnXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIHN1cHBvcnQgdGltb3V0XHJcblx0XHRcdFx0aWYgKHMudGltZW91dCkge1xyXG5cdFx0XHRcdFx0dGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRpbWVkT3V0ID0gdHJ1ZTsgY2IoQ0xJRU5UX1RJTUVPVVRfQUJPUlQpOyB9LCBzLnRpbWVvdXQpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gbG9vayBmb3Igc2VydmVyIGFib3J0c1xyXG5cdFx0XHRcdGZ1bmN0aW9uIGNoZWNrU3RhdGUoKSB7XHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHR2YXIgc3RhdGUgPSBnZXREb2MoaW8pLnJlYWR5U3RhdGU7XHJcblx0XHRcdFx0XHRcdGxvZygnc3RhdGUgPSAnICsgc3RhdGUpO1xyXG5cdFx0XHRcdFx0XHRpZiAoc3RhdGUgJiYgc3RhdGUudG9Mb3dlckNhc2UoKSA9PSAndW5pbml0aWFsaXplZCcpXHJcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChjaGVja1N0YXRlLDUwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNhdGNoKGUpIHtcclxuXHRcdFx0XHRcdFx0bG9nKCdTZXJ2ZXIgYWJvcnQ6ICcgLCBlLCAnICgnLCBlLm5hbWUsICcpJyk7XHJcblx0XHRcdFx0XHRcdGNiKFNFUlZFUl9BQk9SVCk7XHJcblx0XHRcdFx0XHRcdGlmICh0aW1lb3V0SGFuZGxlKVxyXG5cdFx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKTtcclxuXHRcdFx0XHRcdFx0dGltZW91dEhhbmRsZSA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGFkZCBcImV4dHJhXCIgZGF0YSB0byBmb3JtIGlmIHByb3ZpZGVkIGluIG9wdGlvbnNcclxuXHRcdFx0XHR2YXIgZXh0cmFJbnB1dHMgPSBbXTtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0aWYgKHMuZXh0cmFEYXRhKSB7XHJcblx0XHRcdFx0XHRcdGZvciAodmFyIG4gaW4gcy5leHRyYURhdGEpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAocy5leHRyYURhdGEuaGFzT3duUHJvcGVydHkobikpIHtcclxuXHRcdFx0XHRcdFx0XHQgICAvLyBpZiB1c2luZyB0aGUgJC5wYXJhbSBmb3JtYXQgdGhhdCBhbGxvd3MgZm9yIG11bHRpcGxlIHZhbHVlcyB3aXRoIHRoZSBzYW1lIG5hbWVcclxuXHRcdFx0XHRcdFx0XHQgICBpZigkLmlzUGxhaW5PYmplY3Qocy5leHRyYURhdGFbbl0pICYmIHMuZXh0cmFEYXRhW25dLmhhc093blByb3BlcnR5KCduYW1lJykgJiYgcy5leHRyYURhdGFbbl0uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgIGV4dHJhSW5wdXRzLnB1c2goXHJcblx0XHRcdFx0XHRcdFx0XHQgICAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCInK3MuZXh0cmFEYXRhW25dLm5hbWUrJ1wiPicpLnZhbChzLmV4dHJhRGF0YVtuXS52YWx1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgLmFwcGVuZFRvKGZvcm0pWzBdKTtcclxuXHRcdFx0XHRcdFx0XHQgICB9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgZXh0cmFJbnB1dHMucHVzaChcclxuXHRcdFx0XHRcdFx0XHRcdCAgICQoJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIicrbisnXCI+JykudmFsKHMuZXh0cmFEYXRhW25dKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAuYXBwZW5kVG8oZm9ybSlbMF0pO1xyXG5cdFx0XHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoIXMuaWZyYW1lVGFyZ2V0KSB7XHJcblx0XHRcdFx0XHRcdC8vIGFkZCBpZnJhbWUgdG8gZG9jIGFuZCBzdWJtaXQgdGhlIGZvcm1cclxuXHRcdFx0XHRcdFx0JGlvLmFwcGVuZFRvKCdib2R5Jyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAoaW8uYXR0YWNoRXZlbnQpXHJcblx0XHRcdFx0XHRcdGlvLmF0dGFjaEV2ZW50KCdvbmxvYWQnLCBjYik7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjYiwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dChjaGVja1N0YXRlLDE1KTtcclxuXHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRmb3JtLnN1Ym1pdCgpO1xyXG5cdFx0XHRcdFx0fSBjYXRjaChlcnIpIHtcclxuXHRcdFx0XHRcdFx0Ly8ganVzdCBpbiBjYXNlIGZvcm0gaGFzIGVsZW1lbnQgd2l0aCBuYW1lL2lkIG9mICdzdWJtaXQnXHJcblx0XHRcdFx0XHRcdHZhciBzdWJtaXRGbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKS5zdWJtaXQ7XHJcblx0XHRcdFx0XHRcdHN1Ym1pdEZuLmFwcGx5KGZvcm0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmaW5hbGx5IHtcclxuXHRcdFx0XHRcdC8vIHJlc2V0IGF0dHJzIGFuZCByZW1vdmUgXCJleHRyYVwiIGlucHV0IGVsZW1lbnRzXHJcblx0XHRcdFx0XHRmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJyxhKTtcclxuXHRcdFx0XHRcdGlmKHQpIHtcclxuXHRcdFx0XHRcdFx0Zm9ybS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsIHQpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0JGZvcm0ucmVtb3ZlQXR0cigndGFyZ2V0Jyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQkKGV4dHJhSW5wdXRzKS5yZW1vdmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChzLmZvcmNlU3luYykge1xyXG5cdFx0XHRcdGRvU3VibWl0KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0c2V0VGltZW91dChkb1N1Ym1pdCwgMTApOyAvLyB0aGlzIGxldHMgZG9tIHVwZGF0ZXMgcmVuZGVyXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBkYXRhLCBkb2MsIGRvbUNoZWNrQ291bnQgPSA1MCwgY2FsbGJhY2tQcm9jZXNzZWQ7XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBjYihlKSB7XHJcblx0XHRcdFx0aWYgKHhoci5hYm9ydGVkIHx8IGNhbGxiYWNrUHJvY2Vzc2VkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRvYyA9IGdldERvYyhpbyk7XHJcblx0XHRcdFx0aWYoIWRvYykge1xyXG5cdFx0XHRcdFx0bG9nKCdjYW5ub3QgYWNjZXNzIHJlc3BvbnNlIGRvY3VtZW50Jyk7XHJcblx0XHRcdFx0XHRlID0gU0VSVkVSX0FCT1JUO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZSA9PT0gQ0xJRU5UX1RJTUVPVVRfQUJPUlQgJiYgeGhyKSB7XHJcblx0XHRcdFx0XHR4aHIuYWJvcnQoJ3RpbWVvdXQnKTtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdCh4aHIsICd0aW1lb3V0Jyk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKGUgPT0gU0VSVkVSX0FCT1JUICYmIHhocikge1xyXG5cdFx0XHRcdFx0eGhyLmFib3J0KCdzZXJ2ZXIgYWJvcnQnKTtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdCh4aHIsICdlcnJvcicsICdzZXJ2ZXIgYWJvcnQnKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICghZG9jIHx8IGRvYy5sb2NhdGlvbi5ocmVmID09IHMuaWZyYW1lU3JjKSB7XHJcblx0XHRcdFx0XHQvLyByZXNwb25zZSBub3QgcmVjZWl2ZWQgeWV0XHJcblx0XHRcdFx0XHRpZiAoIXRpbWVkT3V0KVxyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChpby5kZXRhY2hFdmVudClcclxuXHRcdFx0XHRcdGlvLmRldGFjaEV2ZW50KCdvbmxvYWQnLCBjYik7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0aW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNiLCBmYWxzZSk7XHJcblxyXG5cdFx0XHRcdHZhciBzdGF0dXMgPSAnc3VjY2VzcycsIGVyck1zZztcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0aWYgKHRpbWVkT3V0KSB7XHJcblx0XHRcdFx0XHRcdHRocm93ICd0aW1lb3V0JztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR2YXIgaXNYbWwgPSBzLmRhdGFUeXBlID09ICd4bWwnIHx8IGRvYy5YTUxEb2N1bWVudCB8fCAkLmlzWE1MRG9jKGRvYyk7XHJcblx0XHRcdFx0XHRsb2coJ2lzWG1sPScraXNYbWwpO1xyXG5cdFx0XHRcdFx0aWYgKCFpc1htbCAmJiB3aW5kb3cub3BlcmEgJiYgKGRvYy5ib2R5ID09PSBudWxsIHx8ICFkb2MuYm9keS5pbm5lckhUTUwpKSB7XHJcblx0XHRcdFx0XHRcdGlmICgtLWRvbUNoZWNrQ291bnQpIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBpbiBzb21lIGJyb3dzZXJzIChPcGVyYSkgdGhlIGlmcmFtZSBET00gaXMgbm90IGFsd2F5cyB0cmF2ZXJzYWJsZSB3aGVuXHJcblx0XHRcdFx0XHRcdFx0Ly8gdGhlIG9ubG9hZCBjYWxsYmFjayBmaXJlcywgc28gd2UgbG9vcCBhIGJpdCB0byBhY2NvbW1vZGF0ZVxyXG5cdFx0XHRcdFx0XHRcdGxvZygncmVxdWVpbmcgb25Mb2FkIGNhbGxiYWNrLCBET00gbm90IGF2YWlsYWJsZScpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoY2IsIDI1MCk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC8vIGxldCB0aGlzIGZhbGwgdGhyb3VnaCBiZWNhdXNlIHNlcnZlciByZXNwb25zZSBjb3VsZCBiZSBhbiBlbXB0eSBkb2N1bWVudFxyXG5cdFx0XHRcdFx0XHQvL2xvZygnQ291bGQgbm90IGFjY2VzcyBpZnJhbWUgRE9NIGFmdGVyIG11dGlwbGUgdHJpZXMuJyk7XHJcblx0XHRcdFx0XHRcdC8vdGhyb3cgJ0RPTUV4Y2VwdGlvbjogbm90IGF2YWlsYWJsZSc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9sb2coJ3Jlc3BvbnNlIGRldGVjdGVkJyk7XHJcblx0XHRcdFx0XHR2YXIgZG9jUm9vdCA9IGRvYy5ib2R5ID8gZG9jLmJvZHkgOiBkb2MuZG9jdW1lbnRFbGVtZW50O1xyXG5cdFx0XHRcdFx0eGhyLnJlc3BvbnNlVGV4dCA9IGRvY1Jvb3QgPyBkb2NSb290LmlubmVySFRNTCA6IG51bGw7XHJcblx0XHRcdFx0XHR4aHIucmVzcG9uc2VYTUwgPSBkb2MuWE1MRG9jdW1lbnQgPyBkb2MuWE1MRG9jdW1lbnQgOiBkb2M7XHJcblx0XHRcdFx0XHRpZiAoaXNYbWwpXHJcblx0XHRcdFx0XHRcdHMuZGF0YVR5cGUgPSAneG1sJztcclxuXHRcdFx0XHRcdHhoci5nZXRSZXNwb25zZUhlYWRlciA9IGZ1bmN0aW9uKGhlYWRlcil7XHJcblx0XHRcdFx0XHRcdHZhciBoZWFkZXJzID0geydjb250ZW50LXR5cGUnOiBzLmRhdGFUeXBlfTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGhlYWRlcnNbaGVhZGVyLnRvTG93ZXJDYXNlKCldO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdC8vIHN1cHBvcnQgZm9yIFhIUiAnc3RhdHVzJyAmICdzdGF0dXNUZXh0JyBlbXVsYXRpb24gOlxyXG5cdFx0XHRcdFx0aWYgKGRvY1Jvb3QpIHtcclxuXHRcdFx0XHRcdFx0eGhyLnN0YXR1cyA9IE51bWJlciggZG9jUm9vdC5nZXRBdHRyaWJ1dGUoJ3N0YXR1cycpICkgfHwgeGhyLnN0YXR1cztcclxuXHRcdFx0XHRcdFx0eGhyLnN0YXR1c1RleHQgPSBkb2NSb290LmdldEF0dHJpYnV0ZSgnc3RhdHVzVGV4dCcpIHx8IHhoci5zdGF0dXNUZXh0O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhciBkdCA9IChzLmRhdGFUeXBlIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRcdFx0dmFyIHNjciA9IC8oanNvbnxzY3JpcHR8dGV4dCkvLnRlc3QoZHQpO1xyXG5cdFx0XHRcdFx0aWYgKHNjciB8fCBzLnRleHRhcmVhKSB7XHJcblx0XHRcdFx0XHRcdC8vIHNlZSBpZiB1c2VyIGVtYmVkZGVkIHJlc3BvbnNlIGluIHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdHZhciB0YSA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcclxuXHRcdFx0XHRcdFx0aWYgKHRhKSB7XHJcblx0XHRcdFx0XHRcdFx0eGhyLnJlc3BvbnNlVGV4dCA9IHRhLnZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdC8vIHN1cHBvcnQgZm9yIFhIUiAnc3RhdHVzJyAmICdzdGF0dXNUZXh0JyBlbXVsYXRpb24gOlxyXG5cdFx0XHRcdFx0XHRcdHhoci5zdGF0dXMgPSBOdW1iZXIoIHRhLmdldEF0dHJpYnV0ZSgnc3RhdHVzJykgKSB8fCB4aHIuc3RhdHVzO1xyXG5cdFx0XHRcdFx0XHRcdHhoci5zdGF0dXNUZXh0ID0gdGEuZ2V0QXR0cmlidXRlKCdzdGF0dXNUZXh0JykgfHwgeGhyLnN0YXR1c1RleHQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSBpZiAoc2NyKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gYWNjb3VudCBmb3IgYnJvd3NlcnMgaW5qZWN0aW5nIHByZSBhcm91bmQganNvbiByZXNwb25zZVxyXG5cdFx0XHRcdFx0XHRcdHZhciBwcmUgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3ByZScpWzBdO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBiID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XHJcblx0XHRcdFx0XHRcdFx0aWYgKHByZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0eGhyLnJlc3BvbnNlVGV4dCA9IHByZS50ZXh0Q29udGVudCA/IHByZS50ZXh0Q29udGVudCA6IHByZS5pbm5lclRleHQ7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGVsc2UgaWYgKGIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHhoci5yZXNwb25zZVRleHQgPSBiLnRleHRDb250ZW50ID8gYi50ZXh0Q29udGVudCA6IGIuaW5uZXJUZXh0O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBpZiAoZHQgPT0gJ3htbCcgJiYgIXhoci5yZXNwb25zZVhNTCAmJiB4aHIucmVzcG9uc2VUZXh0KSB7XHJcblx0XHRcdFx0XHRcdHhoci5yZXNwb25zZVhNTCA9IHRvWG1sKHhoci5yZXNwb25zZVRleHQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdGRhdGEgPSBodHRwRGF0YSh4aHIsIGR0LCBzKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0c3RhdHVzID0gJ3BhcnNlcmVycm9yJztcclxuXHRcdFx0XHRcdFx0eGhyLmVycm9yID0gZXJyTXNnID0gKGVyciB8fCBzdGF0dXMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHRsb2coJ2Vycm9yIGNhdWdodDogJyxlcnIpO1xyXG5cdFx0XHRcdFx0c3RhdHVzID0gJ2Vycm9yJztcclxuXHRcdFx0XHRcdHhoci5lcnJvciA9IGVyck1zZyA9IChlcnIgfHwgc3RhdHVzKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh4aHIuYWJvcnRlZCkge1xyXG5cdFx0XHRcdFx0bG9nKCd1cGxvYWQgYWJvcnRlZCcpO1xyXG5cdFx0XHRcdFx0c3RhdHVzID0gbnVsbDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh4aHIuc3RhdHVzKSB7IC8vIHdlJ3ZlIHNldCB4aHIuc3RhdHVzXHJcblx0XHRcdFx0XHRzdGF0dXMgPSAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCB8fCB4aHIuc3RhdHVzID09PSAzMDQpID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIG9yZGVyaW5nIG9mIHRoZXNlIGNhbGxiYWNrcy90cmlnZ2VycyBpcyBvZGQsIGJ1dCB0aGF0J3MgaG93ICQuYWpheCBkb2VzIGl0XHJcblx0XHRcdFx0aWYgKHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcblx0XHRcdFx0XHRpZiAocy5zdWNjZXNzKVxyXG5cdFx0XHRcdFx0XHRzLnN1Y2Nlc3MuY2FsbChzLmNvbnRleHQsIGRhdGEsICdzdWNjZXNzJywgeGhyKTtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoeGhyLnJlc3BvbnNlVGV4dCwgJ3N1Y2Nlc3MnLCB4aHIpO1xyXG5cdFx0XHRcdFx0aWYgKGcpXHJcblx0XHRcdFx0XHRcdCQuZXZlbnQudHJpZ2dlcihcImFqYXhTdWNjZXNzXCIsIFt4aHIsIHNdKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAoc3RhdHVzKSB7XHJcblx0XHRcdFx0XHRpZiAoZXJyTXNnID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRcdGVyck1zZyA9IHhoci5zdGF0dXNUZXh0O1xyXG5cdFx0XHRcdFx0aWYgKHMuZXJyb3IpXHJcblx0XHRcdFx0XHRcdHMuZXJyb3IuY2FsbChzLmNvbnRleHQsIHhociwgc3RhdHVzLCBlcnJNc2cpO1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KHhociwgJ2Vycm9yJywgZXJyTXNnKTtcclxuXHRcdFx0XHRcdGlmIChnKVxyXG5cdFx0XHRcdFx0XHQkLmV2ZW50LnRyaWdnZXIoXCJhamF4RXJyb3JcIiwgW3hociwgcywgZXJyTXNnXSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoZylcclxuXHRcdFx0XHRcdCQuZXZlbnQudHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLCBbeGhyLCBzXSk7XHJcblxyXG5cdFx0XHRcdGlmIChnICYmICEgLS0kLmFjdGl2ZSkge1xyXG5cdFx0XHRcdFx0JC5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAocy5jb21wbGV0ZSlcclxuXHRcdFx0XHRcdHMuY29tcGxldGUuY2FsbChzLmNvbnRleHQsIHhociwgc3RhdHVzKTtcclxuXHJcblx0XHRcdFx0Y2FsbGJhY2tQcm9jZXNzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdGlmIChzLnRpbWVvdXQpXHJcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZSk7XHJcblxyXG5cdFx0XHRcdC8vIGNsZWFuIHVwXHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmICghcy5pZnJhbWVUYXJnZXQpXHJcblx0XHRcdFx0XHRcdCRpby5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdGVsc2UgIC8vYWRkaW5nIGVsc2UgdG8gY2xlYW4gdXAgZXhpc3RpbmcgaWZyYW1lIHJlc3BvbnNlLlxyXG5cdFx0XHRcdFx0XHQkaW8uYXR0cignc3JjJywgcy5pZnJhbWVTcmMpO1xyXG5cdFx0XHRcdFx0eGhyLnJlc3BvbnNlWE1MID0gbnVsbDtcclxuXHRcdFx0XHR9LCAxMDApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgdG9YbWwgPSAkLnBhcnNlWE1MIHx8IGZ1bmN0aW9uKHMsIGRvYykgeyAvLyB1c2UgcGFyc2VYTUwgaWYgYXZhaWxhYmxlIChqUXVlcnkgMS41KylcclxuXHRcdFx0XHRpZiAod2luZG93LkFjdGl2ZVhPYmplY3QpIHtcclxuXHRcdFx0XHRcdGRvYyA9IG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MRE9NJyk7XHJcblx0XHRcdFx0XHRkb2MuYXN5bmMgPSAnZmFsc2UnO1xyXG5cdFx0XHRcdFx0ZG9jLmxvYWRYTUwocyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0ZG9jID0gKG5ldyBET01QYXJzZXIoKSkucGFyc2VGcm9tU3RyaW5nKHMsICd0ZXh0L3htbCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gKGRvYyAmJiBkb2MuZG9jdW1lbnRFbGVtZW50ICYmIGRvYy5kb2N1bWVudEVsZW1lbnQubm9kZU5hbWUgIT0gJ3BhcnNlcmVycm9yJykgPyBkb2MgOiBudWxsO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHR2YXIgcGFyc2VKU09OID0gJC5wYXJzZUpTT04gfHwgZnVuY3Rpb24ocykge1xyXG5cdFx0XHRcdC8qanNsaW50IGV2aWw6dHJ1ZSAqL1xyXG5cdFx0XHRcdHJldHVybiB3aW5kb3dbJ2V2YWwnXSgnKCcgKyBzICsgJyknKTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciBodHRwRGF0YSA9IGZ1bmN0aW9uKCB4aHIsIHR5cGUsIHMgKSB7IC8vIG1vc3RseSBsaWZ0ZWQgZnJvbSBqcTEuNC40XHJcblxyXG5cdFx0XHRcdHZhciBjdCA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJykgfHwgJycsXHJcblx0XHRcdFx0XHR4bWwgPSB0eXBlID09PSAneG1sJyB8fCAhdHlwZSAmJiBjdC5pbmRleE9mKCd4bWwnKSA+PSAwLFxyXG5cdFx0XHRcdFx0ZGF0YSA9IHhtbCA/IHhoci5yZXNwb25zZVhNTCA6IHhoci5yZXNwb25zZVRleHQ7XHJcblxyXG5cdFx0XHRcdGlmICh4bWwgJiYgZGF0YS5kb2N1bWVudEVsZW1lbnQubm9kZU5hbWUgPT09ICdwYXJzZXJlcnJvcicpIHtcclxuXHRcdFx0XHRcdGlmICgkLmVycm9yKVxyXG5cdFx0XHRcdFx0XHQkLmVycm9yKCdwYXJzZXJlcnJvcicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAocyAmJiBzLmRhdGFGaWx0ZXIpIHtcclxuXHRcdFx0XHRcdGRhdGEgPSBzLmRhdGFGaWx0ZXIoZGF0YSwgdHlwZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHRcdGlmICh0eXBlID09PSAnanNvbicgfHwgIXR5cGUgJiYgY3QuaW5kZXhPZignanNvbicpID49IDApIHtcclxuXHRcdFx0XHRcdFx0ZGF0YSA9IHBhcnNlSlNPTihkYXRhKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZSA9PT0gXCJzY3JpcHRcIiB8fCAhdHlwZSAmJiBjdC5pbmRleE9mKFwiamF2YXNjcmlwdFwiKSA+PSAwKSB7XHJcblx0XHRcdFx0XHRcdCQuZ2xvYmFsRXZhbChkYXRhKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQ7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogYWpheEZvcm0oKSBwcm92aWRlcyBhIG1lY2hhbmlzbSBmb3IgZnVsbHkgYXV0b21hdGluZyBmb3JtIHN1Ym1pc3Npb24uXHJcblx0ICpcclxuXHQgKiBUaGUgYWR2YW50YWdlcyBvZiB1c2luZyB0aGlzIG1ldGhvZCBpbnN0ZWFkIG9mIGFqYXhTdWJtaXQoKSBhcmU6XHJcblx0ICpcclxuXHQgKiAxOiBUaGlzIG1ldGhvZCB3aWxsIGluY2x1ZGUgY29vcmRpbmF0ZXMgZm9yIDxpbnB1dCB0eXBlPVwiaW1hZ2VcIiAvPiBlbGVtZW50cyAoaWYgdGhlIGVsZW1lbnRcclxuXHQgKiAgICBpcyB1c2VkIHRvIHN1Ym1pdCB0aGUgZm9ybSkuXHJcblx0ICogMi4gVGhpcyBtZXRob2Qgd2lsbCBpbmNsdWRlIHRoZSBzdWJtaXQgZWxlbWVudCdzIG5hbWUvdmFsdWUgZGF0YSAoZm9yIHRoZSBlbGVtZW50IHRoYXQgd2FzXHJcblx0ICogICAgdXNlZCB0byBzdWJtaXQgdGhlIGZvcm0pLlxyXG5cdCAqIDMuIFRoaXMgbWV0aG9kIGJpbmRzIHRoZSBzdWJtaXQoKSBtZXRob2QgdG8gdGhlIGZvcm0gZm9yIHlvdS5cclxuXHQgKlxyXG5cdCAqIFRoZSBvcHRpb25zIGFyZ3VtZW50IGZvciBhamF4Rm9ybSB3b3JrcyBleGFjdGx5IGFzIGl0IGRvZXMgZm9yIGFqYXhTdWJtaXQuICBhamF4Rm9ybSBtZXJlbHlcclxuXHQgKiBwYXNzZXMgdGhlIG9wdGlvbnMgYXJndW1lbnQgYWxvbmcgYWZ0ZXIgcHJvcGVybHkgYmluZGluZyBldmVudHMgZm9yIHN1Ym1pdCBlbGVtZW50cyBhbmRcclxuXHQgKiB0aGUgZm9ybSBpdHNlbGYuXHJcblx0ICovXHJcblx0JC5mbi5hamF4Rm9ybSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdFx0b3B0aW9ucy5kZWxlZ2F0aW9uID0gb3B0aW9ucy5kZWxlZ2F0aW9uICYmICQuaXNGdW5jdGlvbigkLmZuLm9uKTtcclxuXHJcblx0XHQvLyBpbiBqUXVlcnkgMS4zKyB3ZSBjYW4gZml4IG1pc3Rha2VzIHdpdGggdGhlIHJlYWR5IHN0YXRlXHJcblx0XHRpZiAoIW9wdGlvbnMuZGVsZWdhdGlvbiAmJiB0aGlzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHR2YXIgbyA9IHsgczogdGhpcy5zZWxlY3RvciwgYzogdGhpcy5jb250ZXh0IH07XHJcblx0XHRcdGlmICghJC5pc1JlYWR5ICYmIG8ucykge1xyXG5cdFx0XHRcdGxvZygnRE9NIG5vdCByZWFkeSwgcXVldWluZyBhamF4Rm9ybScpO1xyXG5cdFx0XHRcdCQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkKG8ucyxvLmMpLmFqYXhGb3JtKG9wdGlvbnMpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIGlzIHlvdXIgRE9NIHJlYWR5PyAgaHR0cDovL2RvY3MuanF1ZXJ5LmNvbS9UdXRvcmlhbHM6SW50cm9kdWNpbmdfJChkb2N1bWVudCkucmVhZHkoKVxyXG5cdFx0XHRsb2coJ3Rlcm1pbmF0aW5nOyB6ZXJvIGVsZW1lbnRzIGZvdW5kIGJ5IHNlbGVjdG9yJyArICgkLmlzUmVhZHkgPyAnJyA6ICcgKERPTSBub3QgcmVhZHkpJykpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIG9wdGlvbnMuZGVsZWdhdGlvbiApIHtcclxuXHRcdFx0JChkb2N1bWVudClcclxuXHRcdFx0XHQub2ZmKCdzdWJtaXQuZm9ybS1wbHVnaW4nLCB0aGlzLnNlbGVjdG9yLCBkb0FqYXhTdWJtaXQpXHJcblx0XHRcdFx0Lm9mZignY2xpY2suZm9ybS1wbHVnaW4nLCB0aGlzLnNlbGVjdG9yLCBjYXB0dXJlU3VibWl0dGluZ0VsZW1lbnQpXHJcblx0XHRcdFx0Lm9uKCdzdWJtaXQuZm9ybS1wbHVnaW4nLCB0aGlzLnNlbGVjdG9yLCBvcHRpb25zLCBkb0FqYXhTdWJtaXQpXHJcblx0XHRcdFx0Lm9uKCdjbGljay5mb3JtLXBsdWdpbicsIHRoaXMuc2VsZWN0b3IsIG9wdGlvbnMsIGNhcHR1cmVTdWJtaXR0aW5nRWxlbWVudCk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmFqYXhGb3JtVW5iaW5kKClcclxuXHRcdFx0LmJpbmQoJ3N1Ym1pdC5mb3JtLXBsdWdpbicsIG9wdGlvbnMsIGRvQWpheFN1Ym1pdClcclxuXHRcdFx0LmJpbmQoJ2NsaWNrLmZvcm0tcGx1Z2luJywgb3B0aW9ucywgY2FwdHVyZVN1Ym1pdHRpbmdFbGVtZW50KTtcclxuXHR9O1xyXG5cclxuXHQvLyBwcml2YXRlIGV2ZW50IGhhbmRsZXJzXHJcblx0ZnVuY3Rpb24gZG9BamF4U3VibWl0KGUpIHtcclxuXHRcdC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXHJcblx0XHR2YXIgb3B0aW9ucyA9IGUuZGF0YTtcclxuXHRcdGlmICghZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgeyAvLyBpZiBldmVudCBoYXMgYmVlbiBjYW5jZWxlZCwgZG9uJ3QgcHJvY2VlZFxyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdCQoZS50YXJnZXQpLmFqYXhTdWJtaXQob3B0aW9ucyk7IC8vICMzNjVcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNhcHR1cmVTdWJtaXR0aW5nRWxlbWVudChlKSB7XHJcblx0XHQvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xyXG5cdFx0dmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cdFx0dmFyICRlbCA9ICQodGFyZ2V0KTtcclxuXHRcdGlmICghKCRlbC5pcyhcIlt0eXBlPXN1Ym1pdF0sW3R5cGU9aW1hZ2VdXCIpKSkge1xyXG5cdFx0XHQvLyBpcyB0aGlzIGEgY2hpbGQgZWxlbWVudCBvZiB0aGUgc3VibWl0IGVsPyAgKGV4OiBhIHNwYW4gd2l0aGluIGEgYnV0dG9uKVxyXG5cdFx0XHR2YXIgdCA9ICRlbC5jbG9zZXN0KCdbdHlwZT1zdWJtaXRdJyk7XHJcblx0XHRcdGlmICh0Lmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR0YXJnZXQgPSB0WzBdO1xyXG5cdFx0fVxyXG5cdFx0dmFyIGZvcm0gPSB0aGlzO1xyXG5cdFx0Zm9ybS5jbGsgPSB0YXJnZXQ7XHJcblx0XHRpZiAodGFyZ2V0LnR5cGUgPT0gJ2ltYWdlJykge1xyXG5cdFx0XHRpZiAoZS5vZmZzZXRYICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRmb3JtLmNsa194ID0gZS5vZmZzZXRYO1xyXG5cdFx0XHRcdGZvcm0uY2xrX3kgPSBlLm9mZnNldFk7XHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mICQuZm4ub2Zmc2V0ID09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHR2YXIgb2Zmc2V0ID0gJGVsLm9mZnNldCgpO1xyXG5cdFx0XHRcdGZvcm0uY2xrX3ggPSBlLnBhZ2VYIC0gb2Zmc2V0LmxlZnQ7XHJcblx0XHRcdFx0Zm9ybS5jbGtfeSA9IGUucGFnZVkgLSBvZmZzZXQudG9wO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGZvcm0uY2xrX3ggPSBlLnBhZ2VYIC0gdGFyZ2V0Lm9mZnNldExlZnQ7XHJcblx0XHRcdFx0Zm9ybS5jbGtfeSA9IGUucGFnZVkgLSB0YXJnZXQub2Zmc2V0VG9wO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvLyBjbGVhciBmb3JtIHZhcnNcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGZvcm0uY2xrID0gZm9ybS5jbGtfeCA9IGZvcm0uY2xrX3kgPSBudWxsOyB9LCAxMDApO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vIGFqYXhGb3JtVW5iaW5kIHVuYmluZHMgdGhlIGV2ZW50IGhhbmRsZXJzIHRoYXQgd2VyZSBib3VuZCBieSBhamF4Rm9ybVxyXG5cdCQuZm4uYWpheEZvcm1VbmJpbmQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLnVuYmluZCgnc3VibWl0LmZvcm0tcGx1Z2luIGNsaWNrLmZvcm0tcGx1Z2luJyk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogZm9ybVRvQXJyYXkoKSBnYXRoZXJzIGZvcm0gZWxlbWVudCBkYXRhIGludG8gYW4gYXJyYXkgb2Ygb2JqZWN0cyB0aGF0IGNhblxyXG5cdCAqIGJlIHBhc3NlZCB0byBhbnkgb2YgdGhlIGZvbGxvd2luZyBhamF4IGZ1bmN0aW9uczogJC5nZXQsICQucG9zdCwgb3IgbG9hZC5cclxuXHQgKiBFYWNoIG9iamVjdCBpbiB0aGUgYXJyYXkgaGFzIGJvdGggYSAnbmFtZScgYW5kICd2YWx1ZScgcHJvcGVydHkuICBBbiBleGFtcGxlIG9mXHJcblx0ICogYW4gYXJyYXkgZm9yIGEgc2ltcGxlIGxvZ2luIGZvcm0gbWlnaHQgYmU6XHJcblx0ICpcclxuXHQgKiBbIHsgbmFtZTogJ3VzZXJuYW1lJywgdmFsdWU6ICdqcmVzaWcnIH0sIHsgbmFtZTogJ3Bhc3N3b3JkJywgdmFsdWU6ICdzZWNyZXQnIH0gXVxyXG5cdCAqXHJcblx0ICogSXQgaXMgdGhpcyBhcnJheSB0aGF0IGlzIHBhc3NlZCB0byBwcmUtc3VibWl0IGNhbGxiYWNrIGZ1bmN0aW9ucyBwcm92aWRlZCB0byB0aGVcclxuXHQgKiBhamF4U3VibWl0KCkgYW5kIGFqYXhGb3JtKCkgbWV0aG9kcy5cclxuXHQgKi9cclxuXHQkLmZuLmZvcm1Ub0FycmF5ID0gZnVuY3Rpb24oc2VtYW50aWMsIGVsZW1lbnRzKSB7XHJcblx0XHR2YXIgYSA9IFtdO1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHJldHVybiBhO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBmb3JtID0gdGhpc1swXTtcclxuXHRcdHZhciBlbHMgPSBzZW1hbnRpYyA/IGZvcm0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKSA6IGZvcm0uZWxlbWVudHM7XHJcblx0XHRpZiAoIWVscykge1xyXG5cdFx0XHRyZXR1cm4gYTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgaSxqLG4sdixlbCxtYXgsam1heDtcclxuXHRcdGZvcihpPTAsIG1heD1lbHMubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcclxuXHRcdFx0ZWwgPSBlbHNbaV07XHJcblx0XHRcdG4gPSBlbC5uYW1lO1xyXG5cdFx0XHRpZiAoIW4gfHwgZWwuZGlzYWJsZWQpIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHNlbWFudGljICYmIGZvcm0uY2xrICYmIGVsLnR5cGUgPT0gXCJpbWFnZVwiKSB7XHJcblx0XHRcdFx0Ly8gaGFuZGxlIGltYWdlIGlucHV0cyBvbiB0aGUgZmx5IHdoZW4gc2VtYW50aWMgPT0gdHJ1ZVxyXG5cdFx0XHRcdGlmKGZvcm0uY2xrID09IGVsKSB7XHJcblx0XHRcdFx0XHRhLnB1c2goe25hbWU6IG4sIHZhbHVlOiAkKGVsKS52YWwoKSwgdHlwZTogZWwudHlwZSB9KTtcclxuXHRcdFx0XHRcdGEucHVzaCh7bmFtZTogbisnLngnLCB2YWx1ZTogZm9ybS5jbGtfeH0sIHtuYW1lOiBuKycueScsIHZhbHVlOiBmb3JtLmNsa195fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2ID0gJC5maWVsZFZhbHVlKGVsLCB0cnVlKTtcclxuXHRcdFx0aWYgKHYgJiYgdi5jb25zdHJ1Y3RvciA9PSBBcnJheSkge1xyXG5cdFx0XHRcdGlmIChlbGVtZW50cylcclxuXHRcdFx0XHRcdGVsZW1lbnRzLnB1c2goZWwpO1xyXG5cdFx0XHRcdGZvcihqPTAsIGptYXg9di5sZW5ndGg7IGogPCBqbWF4OyBqKyspIHtcclxuXHRcdFx0XHRcdGEucHVzaCh7bmFtZTogbiwgdmFsdWU6IHZbal19KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoZmVhdHVyZS5maWxlYXBpICYmIGVsLnR5cGUgPT0gJ2ZpbGUnKSB7XHJcblx0XHRcdFx0aWYgKGVsZW1lbnRzKVxyXG5cdFx0XHRcdFx0ZWxlbWVudHMucHVzaChlbCk7XHJcblx0XHRcdFx0dmFyIGZpbGVzID0gZWwuZmlsZXM7XHJcblx0XHRcdFx0aWYgKGZpbGVzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0Zm9yIChqPTA7IGogPCBmaWxlcy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdFx0XHRhLnB1c2goe25hbWU6IG4sIHZhbHVlOiBmaWxlc1tqXSwgdHlwZTogZWwudHlwZX0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdC8vICMxODBcclxuXHRcdFx0XHRcdGEucHVzaCh7IG5hbWU6IG4sIHZhbHVlOiAnJywgdHlwZTogZWwudHlwZSB9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodiAhPT0gbnVsbCAmJiB0eXBlb2YgdiAhPSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdGlmIChlbGVtZW50cylcclxuXHRcdFx0XHRcdGVsZW1lbnRzLnB1c2goZWwpO1xyXG5cdFx0XHRcdGEucHVzaCh7bmFtZTogbiwgdmFsdWU6IHYsIHR5cGU6IGVsLnR5cGUsIHJlcXVpcmVkOiBlbC5yZXF1aXJlZH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCFzZW1hbnRpYyAmJiBmb3JtLmNsaykge1xyXG5cdFx0XHQvLyBpbnB1dCB0eXBlPT0naW1hZ2UnIGFyZSBub3QgZm91bmQgaW4gZWxlbWVudHMgYXJyYXkhIGhhbmRsZSBpdCBoZXJlXHJcblx0XHRcdHZhciAkaW5wdXQgPSAkKGZvcm0uY2xrKSwgaW5wdXQgPSAkaW5wdXRbMF07XHJcblx0XHRcdG4gPSBpbnB1dC5uYW1lO1xyXG5cdFx0XHRpZiAobiAmJiAhaW5wdXQuZGlzYWJsZWQgJiYgaW5wdXQudHlwZSA9PSAnaW1hZ2UnKSB7XHJcblx0XHRcdFx0YS5wdXNoKHtuYW1lOiBuLCB2YWx1ZTogJGlucHV0LnZhbCgpfSk7XHJcblx0XHRcdFx0YS5wdXNoKHtuYW1lOiBuKycueCcsIHZhbHVlOiBmb3JtLmNsa194fSwge25hbWU6IG4rJy55JywgdmFsdWU6IGZvcm0uY2xrX3l9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGE7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU2VyaWFsaXplcyBmb3JtIGRhdGEgaW50byBhICdzdWJtaXR0YWJsZScgc3RyaW5nLiBUaGlzIG1ldGhvZCB3aWxsIHJldHVybiBhIHN0cmluZ1xyXG5cdCAqIGluIHRoZSBmb3JtYXQ6IG5hbWUxPXZhbHVlMSZhbXA7bmFtZTI9dmFsdWUyXHJcblx0ICovXHJcblx0JC5mbi5mb3JtU2VyaWFsaXplID0gZnVuY3Rpb24oc2VtYW50aWMpIHtcclxuXHRcdC8vaGFuZCBvZmYgdG8galF1ZXJ5LnBhcmFtIGZvciBwcm9wZXIgZW5jb2RpbmdcclxuXHRcdHJldHVybiAkLnBhcmFtKHRoaXMuZm9ybVRvQXJyYXkoc2VtYW50aWMpKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTZXJpYWxpemVzIGFsbCBmaWVsZCBlbGVtZW50cyBpbiB0aGUgalF1ZXJ5IG9iamVjdCBpbnRvIGEgcXVlcnkgc3RyaW5nLlxyXG5cdCAqIFRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGEgc3RyaW5nIGluIHRoZSBmb3JtYXQ6IG5hbWUxPXZhbHVlMSZhbXA7bmFtZTI9dmFsdWUyXHJcblx0ICovXHJcblx0JC5mbi5maWVsZFNlcmlhbGl6ZSA9IGZ1bmN0aW9uKHN1Y2Nlc3NmdWwpIHtcclxuXHRcdHZhciBhID0gW107XHJcblx0XHR0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBuID0gdGhpcy5uYW1lO1xyXG5cdFx0XHRpZiAoIW4pIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIHYgPSAkLmZpZWxkVmFsdWUodGhpcywgc3VjY2Vzc2Z1bCk7XHJcblx0XHRcdGlmICh2ICYmIHYuY29uc3RydWN0b3IgPT0gQXJyYXkpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpPTAsbWF4PXYubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcclxuXHRcdFx0XHRcdGEucHVzaCh7bmFtZTogbiwgdmFsdWU6IHZbaV19KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodiAhPT0gbnVsbCAmJiB0eXBlb2YgdiAhPSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdGEucHVzaCh7bmFtZTogdGhpcy5uYW1lLCB2YWx1ZTogdn0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdC8vaGFuZCBvZmYgdG8galF1ZXJ5LnBhcmFtIGZvciBwcm9wZXIgZW5jb2RpbmdcclxuXHRcdHJldHVybiAkLnBhcmFtKGEpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHZhbHVlKHMpIG9mIHRoZSBlbGVtZW50IGluIHRoZSBtYXRjaGVkIHNldC4gIEZvciBleGFtcGxlLCBjb25zaWRlciB0aGUgZm9sbG93aW5nIGZvcm06XHJcblx0ICpcclxuXHQgKiAgPGZvcm0+PGZpZWxkc2V0PlxyXG5cdCAqICAgICAgPGlucHV0IG5hbWU9XCJBXCIgdHlwZT1cInRleHRcIiAvPlxyXG5cdCAqICAgICAgPGlucHV0IG5hbWU9XCJBXCIgdHlwZT1cInRleHRcIiAvPlxyXG5cdCAqICAgICAgPGlucHV0IG5hbWU9XCJCXCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJCMVwiIC8+XHJcblx0ICogICAgICA8aW5wdXQgbmFtZT1cIkJcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIkIyXCIvPlxyXG5cdCAqICAgICAgPGlucHV0IG5hbWU9XCJDXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJDMVwiIC8+XHJcblx0ICogICAgICA8aW5wdXQgbmFtZT1cIkNcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIkMyXCIgLz5cclxuXHQgKiAgPC9maWVsZHNldD48L2Zvcm0+XHJcblx0ICpcclxuXHQgKiAgdmFyIHYgPSAkKCdpbnB1dFt0eXBlPXRleHRdJykuZmllbGRWYWx1ZSgpO1xyXG5cdCAqICAvLyBpZiBubyB2YWx1ZXMgYXJlIGVudGVyZWQgaW50byB0aGUgdGV4dCBpbnB1dHNcclxuXHQgKiAgdiA9PSBbJycsJyddXHJcblx0ICogIC8vIGlmIHZhbHVlcyBlbnRlcmVkIGludG8gdGhlIHRleHQgaW5wdXRzIGFyZSAnZm9vJyBhbmQgJ2JhcidcclxuXHQgKiAgdiA9PSBbJ2ZvbycsJ2JhciddXHJcblx0ICpcclxuXHQgKiAgdmFyIHYgPSAkKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpLmZpZWxkVmFsdWUoKTtcclxuXHQgKiAgLy8gaWYgbmVpdGhlciBjaGVja2JveCBpcyBjaGVja2VkXHJcblx0ICogIHYgPT09IHVuZGVmaW5lZFxyXG5cdCAqICAvLyBpZiBib3RoIGNoZWNrYm94ZXMgYXJlIGNoZWNrZWRcclxuXHQgKiAgdiA9PSBbJ0IxJywgJ0IyJ11cclxuXHQgKlxyXG5cdCAqICB2YXIgdiA9ICQoJ2lucHV0W3R5cGU9cmFkaW9dJykuZmllbGRWYWx1ZSgpO1xyXG5cdCAqICAvLyBpZiBuZWl0aGVyIHJhZGlvIGlzIGNoZWNrZWRcclxuXHQgKiAgdiA9PT0gdW5kZWZpbmVkXHJcblx0ICogIC8vIGlmIGZpcnN0IHJhZGlvIGlzIGNoZWNrZWRcclxuXHQgKiAgdiA9PSBbJ0MxJ11cclxuXHQgKlxyXG5cdCAqIFRoZSBzdWNjZXNzZnVsIGFyZ3VtZW50IGNvbnRyb2xzIHdoZXRoZXIgb3Igbm90IHRoZSBmaWVsZCBlbGVtZW50IG11c3QgYmUgJ3N1Y2Nlc3NmdWwnXHJcblx0ICogKHBlciBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNC9pbnRlcmFjdC9mb3Jtcy5odG1sI3N1Y2Nlc3NmdWwtY29udHJvbHMpLlxyXG5cdCAqIFRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBzdWNjZXNzZnVsIGFyZ3VtZW50IGlzIHRydWUuICBJZiB0aGlzIHZhbHVlIGlzIGZhbHNlIHRoZSB2YWx1ZShzKVxyXG5cdCAqIGZvciBlYWNoIGVsZW1lbnQgaXMgcmV0dXJuZWQuXHJcblx0ICpcclxuXHQgKiBOb3RlOiBUaGlzIG1ldGhvZCAqYWx3YXlzKiByZXR1cm5zIGFuIGFycmF5LiAgSWYgbm8gdmFsaWQgdmFsdWUgY2FuIGJlIGRldGVybWluZWQgdGhlXHJcblx0ICogICAgYXJyYXkgd2lsbCBiZSBlbXB0eSwgb3RoZXJ3aXNlIGl0IHdpbGwgY29udGFpbiBvbmUgb3IgbW9yZSB2YWx1ZXMuXHJcblx0ICovXHJcblx0JC5mbi5maWVsZFZhbHVlID0gZnVuY3Rpb24oc3VjY2Vzc2Z1bCkge1xyXG5cdFx0Zm9yICh2YXIgdmFsPVtdLCBpPTAsIG1heD10aGlzLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XHJcblx0XHRcdHZhciBlbCA9IHRoaXNbaV07XHJcblx0XHRcdHZhciB2ID0gJC5maWVsZFZhbHVlKGVsLCBzdWNjZXNzZnVsKTtcclxuXHRcdFx0aWYgKHYgPT09IG51bGwgfHwgdHlwZW9mIHYgPT0gJ3VuZGVmaW5lZCcgfHwgKHYuY29uc3RydWN0b3IgPT0gQXJyYXkgJiYgIXYubGVuZ3RoKSkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh2LmNvbnN0cnVjdG9yID09IEFycmF5KVxyXG5cdFx0XHRcdCQubWVyZ2UodmFsLCB2KTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHZhbC5wdXNoKHYpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHZhbDtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgZWxlbWVudC5cclxuXHQgKi9cclxuXHQkLmZpZWxkVmFsdWUgPSBmdW5jdGlvbihlbCwgc3VjY2Vzc2Z1bCkge1xyXG5cdFx0dmFyIG4gPSBlbC5uYW1lLCB0ID0gZWwudHlwZSwgdGFnID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0aWYgKHN1Y2Nlc3NmdWwgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRzdWNjZXNzZnVsID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc3VjY2Vzc2Z1bCAmJiAoIW4gfHwgZWwuZGlzYWJsZWQgfHwgdCA9PSAncmVzZXQnIHx8IHQgPT0gJ2J1dHRvbicgfHxcclxuXHRcdFx0KHQgPT0gJ2NoZWNrYm94JyB8fCB0ID09ICdyYWRpbycpICYmICFlbC5jaGVja2VkIHx8XHJcblx0XHRcdCh0ID09ICdzdWJtaXQnIHx8IHQgPT0gJ2ltYWdlJykgJiYgZWwuZm9ybSAmJiBlbC5mb3JtLmNsayAhPSBlbCB8fFxyXG5cdFx0XHR0YWcgPT0gJ3NlbGVjdCcgJiYgZWwuc2VsZWN0ZWRJbmRleCA9PSAtMSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGFnID09ICdzZWxlY3QnKSB7XHJcblx0XHRcdHZhciBpbmRleCA9IGVsLnNlbGVjdGVkSW5kZXg7XHJcblx0XHRcdGlmIChpbmRleCA8IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgYSA9IFtdLCBvcHMgPSBlbC5vcHRpb25zO1xyXG5cdFx0XHR2YXIgb25lID0gKHQgPT0gJ3NlbGVjdC1vbmUnKTtcclxuXHRcdFx0dmFyIG1heCA9IChvbmUgPyBpbmRleCsxIDogb3BzLmxlbmd0aCk7XHJcblx0XHRcdGZvcih2YXIgaT0ob25lID8gaW5kZXggOiAwKTsgaSA8IG1heDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIG9wID0gb3BzW2ldO1xyXG5cdFx0XHRcdGlmIChvcC5zZWxlY3RlZCkge1xyXG5cdFx0XHRcdFx0dmFyIHYgPSBvcC52YWx1ZTtcclxuXHRcdFx0XHRcdGlmICghdikgeyAvLyBleHRyYSBwYWluIGZvciBJRS4uLlxyXG5cdFx0XHRcdFx0XHR2ID0gKG9wLmF0dHJpYnV0ZXMgJiYgb3AuYXR0cmlidXRlc1sndmFsdWUnXSAmJiAhKG9wLmF0dHJpYnV0ZXNbJ3ZhbHVlJ10uc3BlY2lmaWVkKSkgPyBvcC50ZXh0IDogb3AudmFsdWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAob25lKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB2O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YS5wdXNoKHYpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gYTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAkKGVsKS52YWwoKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBDbGVhcnMgdGhlIGZvcm0gZGF0YS4gIFRha2VzIHRoZSBmb2xsb3dpbmcgYWN0aW9ucyBvbiB0aGUgZm9ybSdzIGlucHV0IGZpZWxkczpcclxuXHQgKiAgLSBpbnB1dCB0ZXh0IGZpZWxkcyB3aWxsIGhhdmUgdGhlaXIgJ3ZhbHVlJyBwcm9wZXJ0eSBzZXQgdG8gdGhlIGVtcHR5IHN0cmluZ1xyXG5cdCAqICAtIHNlbGVjdCBlbGVtZW50cyB3aWxsIGhhdmUgdGhlaXIgJ3NlbGVjdGVkSW5kZXgnIHByb3BlcnR5IHNldCB0byAtMVxyXG5cdCAqICAtIGNoZWNrYm94IGFuZCByYWRpbyBpbnB1dHMgd2lsbCBoYXZlIHRoZWlyICdjaGVja2VkJyBwcm9wZXJ0eSBzZXQgdG8gZmFsc2VcclxuXHQgKiAgLSBpbnB1dHMgb2YgdHlwZSBzdWJtaXQsIGJ1dHRvbiwgcmVzZXQsIGFuZCBoaWRkZW4gd2lsbCAqbm90KiBiZSBlZmZlY3RlZFxyXG5cdCAqICAtIGJ1dHRvbiBlbGVtZW50cyB3aWxsICpub3QqIGJlIGVmZmVjdGVkXHJcblx0ICovXHJcblx0JC5mbi5jbGVhckZvcm0gPSBmdW5jdGlvbihpbmNsdWRlSGlkZGVuKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdpbnB1dCxzZWxlY3QsdGV4dGFyZWEnLCB0aGlzKS5jbGVhckZpZWxkcyhpbmNsdWRlSGlkZGVuKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIENsZWFycyB0aGUgc2VsZWN0ZWQgZm9ybSBlbGVtZW50cy5cclxuXHQgKi9cclxuXHQkLmZuLmNsZWFyRmllbGRzID0gJC5mbi5jbGVhcklucHV0cyA9IGZ1bmN0aW9uKGluY2x1ZGVIaWRkZW4pIHtcclxuXHRcdHZhciByZSA9IC9eKD86Y29sb3J8ZGF0ZXxkYXRldGltZXxlbWFpbHxtb250aHxudW1iZXJ8cGFzc3dvcmR8cmFuZ2V8c2VhcmNofHRlbHx0ZXh0fHRpbWV8dXJsfHdlZWspJC9pOyAvLyAnaGlkZGVuJyBpcyBub3QgaW4gdGhpcyBsaXN0XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgdCA9IHRoaXMudHlwZSwgdGFnID0gdGhpcy50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdGlmIChyZS50ZXN0KHQpIHx8IHRhZyA9PSAndGV4dGFyZWEnKSB7XHJcblx0XHRcdFx0dGhpcy52YWx1ZSA9ICcnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHQgPT0gJ2NoZWNrYm94JyB8fCB0ID09ICdyYWRpbycpIHtcclxuXHRcdFx0XHR0aGlzLmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0YWcgPT0gJ3NlbGVjdCcpIHtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkSW5kZXggPSAtMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0ID09IFwiZmlsZVwiKSB7XHJcblx0XHRcdFx0aWYgKC9NU0lFLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnJlcGxhY2VXaXRoKCQodGhpcykuY2xvbmUodHJ1ZSkpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnZhbCgnJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGluY2x1ZGVIaWRkZW4pIHtcclxuXHRcdFx0XHQvLyBpbmNsdWRlSGlkZGVuIGNhbiBiZSB0aGUgdmFsdWUgdHJ1ZSwgb3IgaXQgY2FuIGJlIGEgc2VsZWN0b3Igc3RyaW5nXHJcblx0XHRcdFx0Ly8gaW5kaWNhdGluZyBhIHNwZWNpYWwgdGVzdDsgZm9yIGV4YW1wbGU6XHJcblx0XHRcdFx0Ly8gICQoJyNteUZvcm0nKS5jbGVhckZvcm0oJy5zcGVjaWFsOmhpZGRlbicpXHJcblx0XHRcdFx0Ly8gdGhlIGFib3ZlIHdvdWxkIGNsZWFuIGhpZGRlbiBpbnB1dHMgdGhhdCBoYXZlIHRoZSBjbGFzcyBvZiAnc3BlY2lhbCdcclxuXHRcdFx0XHRpZiAoIChpbmNsdWRlSGlkZGVuID09PSB0cnVlICYmIC9oaWRkZW4vLnRlc3QodCkpIHx8XHJcblx0XHRcdFx0XHQgKHR5cGVvZiBpbmNsdWRlSGlkZGVuID09ICdzdHJpbmcnICYmICQodGhpcykuaXMoaW5jbHVkZUhpZGRlbikpIClcclxuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSAnJztcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogUmVzZXRzIHRoZSBmb3JtIGRhdGEuICBDYXVzZXMgYWxsIGZvcm0gZWxlbWVudHMgdG8gYmUgcmVzZXQgdG8gdGhlaXIgb3JpZ2luYWwgdmFsdWUuXHJcblx0ICovXHJcblx0JC5mbi5yZXNldEZvcm0gPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIGd1YXJkIGFnYWluc3QgYW4gaW5wdXQgd2l0aCB0aGUgbmFtZSBvZiAncmVzZXQnXHJcblx0XHRcdC8vIG5vdGUgdGhhdCBJRSByZXBvcnRzIHRoZSByZXNldCBmdW5jdGlvbiBhcyBhbiAnb2JqZWN0J1xyXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucmVzZXQgPT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIHRoaXMucmVzZXQgPT0gJ29iamVjdCcgJiYgIXRoaXMucmVzZXQubm9kZVR5cGUpKSB7XHJcblx0XHRcdFx0dGhpcy5yZXNldCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBFbmFibGVzIG9yIGRpc2FibGVzIGFueSBtYXRjaGluZyBlbGVtZW50cy5cclxuXHQgKi9cclxuXHQkLmZuLmVuYWJsZSA9IGZ1bmN0aW9uKGIpIHtcclxuXHRcdGlmIChiID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0YiA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmRpc2FibGVkID0gIWI7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBDaGVja3MvdW5jaGVja3MgYW55IG1hdGNoaW5nIGNoZWNrYm94ZXMgb3IgcmFkaW8gYnV0dG9ucyBhbmRcclxuXHQgKiBzZWxlY3RzL2Rlc2VsZWN0cyBhbmQgbWF0Y2hpbmcgb3B0aW9uIGVsZW1lbnRzLlxyXG5cdCAqL1xyXG5cdCQuZm4uc2VsZWN0ZWQgPSBmdW5jdGlvbihzZWxlY3QpIHtcclxuXHRcdGlmIChzZWxlY3QgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRzZWxlY3QgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHQgPSB0aGlzLnR5cGU7XHJcblx0XHRcdGlmICh0ID09ICdjaGVja2JveCcgfHwgdCA9PSAncmFkaW8nKSB7XHJcblx0XHRcdFx0dGhpcy5jaGVja2VkID0gc2VsZWN0O1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09ICdvcHRpb24nKSB7XHJcblx0XHRcdFx0dmFyICRzZWwgPSAkKHRoaXMpLnBhcmVudCgnc2VsZWN0Jyk7XHJcblx0XHRcdFx0aWYgKHNlbGVjdCAmJiAkc2VsWzBdICYmICRzZWxbMF0udHlwZSA9PSAnc2VsZWN0LW9uZScpIHtcclxuXHRcdFx0XHRcdC8vIGRlc2VsZWN0IGFsbCBvdGhlciBvcHRpb25zXHJcblx0XHRcdFx0XHQkc2VsLmZpbmQoJ29wdGlvbicpLnNlbGVjdGVkKGZhbHNlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZCA9IHNlbGVjdDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlIGRlYnVnIHZhclxyXG5cdCQuZm4uYWpheFN1Ym1pdC5kZWJ1ZyA9IGZhbHNlO1xyXG5cclxuXHQvLyBoZWxwZXIgZm4gZm9yIGNvbnNvbGUgbG9nZ2luZ1xyXG5cdGZ1bmN0aW9uIGxvZygpIHtcclxuXHRcdGlmICghJC5mbi5hamF4U3VibWl0LmRlYnVnKVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR2YXIgbXNnID0gJ1tqcXVlcnkuZm9ybV0gJyArIEFycmF5LnByb3RvdHlwZS5qb2luLmNhbGwoYXJndW1lbnRzLCcnKTtcclxuXHRcdGlmICh3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS5sb2cpIHtcclxuXHRcdFx0d2luZG93LmNvbnNvbGUubG9nKG1zZyk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh3aW5kb3cub3BlcmEgJiYgd2luZG93Lm9wZXJhLnBvc3RFcnJvcikge1xyXG5cdFx0XHR3aW5kb3cub3BlcmEucG9zdEVycm9yKG1zZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR9KSggKHR5cGVvZihqUXVlcnkpICE9ICd1bmRlZmluZWQnKSA/IGpRdWVyeSA6IHdpbmRvdy5aZXB0byApO1xyXG5cclxuLy99KTtcclxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltZGhaV0V2YW5NdmJHbGlMMnB4ZFdWeWVVWnZjbTB1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQklpd2labWxzWlNJNkltZGxibVZ5WVhSbFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2TDJSbFptbHVaU2htZFc1amRHbHZiaWh5WlhGMWFYSmxMQ0JsZUhCdmNuUnpMQ0J0YjJSMWJHVXBJSHRjY2x4dVhIUjJZWElnYWxGMVpYSjVJRDBnS0hSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUIzYVc1a2IzZGJKeVFuWFNBNklIUjVjR1Z2WmlCbmJHOWlZV3dnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnUHlCbmJHOWlZV3hiSnlRblhTQTZJRzUxYkd3cE8xeHlYRzVjZEZ4eVhHNWNkQzhxSVZ4eVhHNWNkQ0FxSUdwUmRXVnllU0JHYjNKdElGQnNkV2RwYmx4eVhHNWNkQ0FxSUhabGNuTnBiMjQ2SURNdU5EVXVNQzB5TURFekxqRXdMakUzWEhKY2JseDBJQ29nVW1WeGRXbHlaWE1nYWxGMVpYSjVJSFl4TGpVZ2IzSWdiR0YwWlhKY2NseHVYSFFnS2lCRGIzQjVjbWxuYUhRZ0tHTXBJREl3TVRNZ1RTNGdRV3h6ZFhCY2NseHVYSFFnS2lCRmVHRnRjR3hsY3lCaGJtUWdaRzlqZFcxbGJuUmhkR2x2YmlCaGREb2dhSFIwY0RvdkwyMWhiSE4xY0M1amIyMHZhbkYxWlhKNUwyWnZjbTB2WEhKY2JseDBJQ29nVUhKdmFtVmpkQ0J5WlhCdmMybDBiM0o1T2lCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmJXRnNjM1Z3TDJadmNtMWNjbHh1WEhRZ0tpQkVkV0ZzSUd4cFkyVnVjMlZrSUhWdVpHVnlJSFJvWlNCTlNWUWdZVzVrSUVkUVRDQnNhV05sYm5ObGN5NWNjbHh1WEhRZ0tpQm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZiV0ZzYzNWd0wyWnZjbTBqWTI5d2VYSnBaMmgwTFdGdVpDMXNhV05sYm5ObFhISmNibHgwSUNvdlhISmNibHgwTHlwbmJHOWlZV3dnUVdOMGFYWmxXRTlpYW1WamRDQXFMMXh5WEc1Y2REc29ablZ1WTNScGIyNG9KQ2tnZTF4eVhHNWNkRndpZFhObElITjBjbWxqZEZ3aU8xeHlYRzVjY2x4dVhIUXZLbHh5WEc1Y2RGeDBWWE5oWjJVZ1RtOTBaVHBjY2x4dVhIUmNkQzB0TFMwdExTMHRMUzB0WEhKY2JseDBYSFJFYnlCdWIzUWdkWE5sSUdKdmRHZ2dZV3BoZUZOMVltMXBkQ0JoYm1RZ1lXcGhlRVp2Y20wZ2IyNGdkR2hsSUhOaGJXVWdabTl5YlM0Z0lGUm9aWE5sWEhKY2JseDBYSFJtZFc1amRHbHZibk1nWVhKbElHMTFkSFZoYkd4NUlHVjRZMngxYzJsMlpTNGdJRlZ6WlNCaGFtRjRVM1ZpYldsMElHbG1JSGx2ZFNCM1lXNTBYSEpjYmx4MFhIUjBieUJpYVc1a0lIbHZkWElnYjNkdUlITjFZbTFwZENCb1lXNWtiR1Z5SUhSdklIUm9aU0JtYjNKdExpQWdSbTl5SUdWNFlXMXdiR1VzWEhKY2JseHlYRzVjZEZ4MEpDaGtiMk4xYldWdWRDa3VjbVZoWkhrb1puVnVZM1JwYjI0b0tTQjdYSEpjYmx4MFhIUmNkQ1FvSnlOdGVVWnZjbTBuS1M1dmJpZ25jM1ZpYldsMEp5d2dablZ1WTNScGIyNG9aU2tnZTF4eVhHNWNkRngwWEhSY2RHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUc2dMeThnUEMwdElHbHRjRzl5ZEdGdWRGeHlYRzVjZEZ4MFhIUmNkQ1FvZEdocGN5a3VZV3BoZUZOMVltMXBkQ2g3WEhKY2JseDBYSFJjZEZ4MFhIUjBZWEpuWlhRNklDY2piM1YwY0hWMEoxeHlYRzVjZEZ4MFhIUmNkSDBwTzF4eVhHNWNkRngwWEhSOUtUdGNjbHh1WEhSY2RIMHBPMXh5WEc1Y2NseHVYSFJjZEZWelpTQmhhbUY0Um05eWJTQjNhR1Z1SUhsdmRTQjNZVzUwSUhSb1pTQndiSFZuYVc0Z2RHOGdiV0Z1WVdkbElHRnNiQ0IwYUdVZ1pYWmxiblFnWW1sdVpHbHVaMXh5WEc1Y2RGeDBabTl5SUhsdmRTNGdJRVp2Y2lCbGVHRnRjR3hsTEZ4eVhHNWNjbHh1WEhSY2RDUW9aRzlqZFcxbGJuUXBMbkpsWVdSNUtHWjFibU4wYVc5dUtDa2dlMXh5WEc1Y2RGeDBYSFFrS0NjamJYbEdiM0p0SnlrdVlXcGhlRVp2Y20wb2UxeHlYRzVjZEZ4MFhIUmNkSFJoY21kbGREb2dKeU52ZFhSd2RYUW5YSEpjYmx4MFhIUmNkSDBwTzF4eVhHNWNkRngwZlNrN1hISmNibHh5WEc1Y2RGeDBXVzkxSUdOaGJpQmhiSE52SUhWelpTQmhhbUY0Um05eWJTQjNhWFJvSUdSbGJHVm5ZWFJwYjI0Z0tISmxjWFZwY21WeklHcFJkV1Z5ZVNCMk1TNDNLeWtzSUhOdklIUm9aVnh5WEc1Y2RGeDBabTl5YlNCa2IyVnpJRzV2ZENCb1lYWmxJSFJ2SUdWNGFYTjBJSGRvWlc0Z2VXOTFJR2x1ZG05clpTQmhhbUY0Um05eWJUcGNjbHh1WEhKY2JseDBYSFFrS0NjamJYbEdiM0p0SnlrdVlXcGhlRVp2Y20wb2UxeHlYRzVjZEZ4MFhIUmtaV3hsWjJGMGFXOXVPaUIwY25WbExGeHlYRzVjZEZ4MFhIUjBZWEpuWlhRNklDY2piM1YwY0hWMEoxeHlYRzVjZEZ4MGZTazdYSEpjYmx4eVhHNWNkRngwVjJobGJpQjFjMmx1WnlCaGFtRjRSbTl5YlN3Z2RHaGxJR0ZxWVhoVGRXSnRhWFFnWm5WdVkzUnBiMjRnZDJsc2JDQmlaU0JwYm5admEyVmtJR1p2Y2lCNWIzVmNjbHh1WEhSY2RHRjBJSFJvWlNCaGNIQnliM0J5YVdGMFpTQjBhVzFsTGx4eVhHNWNkQ292WEhKY2JseHlYRzVjZEM4cUtseHlYRzVjZENBcUlFWmxZWFIxY21VZ1pHVjBaV04wYVc5dVhISmNibHgwSUNvdlhISmNibHgwZG1GeUlHWmxZWFIxY21VZ1BTQjdmVHRjY2x4dVhIUm1aV0YwZFhKbExtWnBiR1ZoY0drZ1BTQWtLRndpUEdsdWNIVjBJSFI1Y0dVOUoyWnBiR1VuTHo1Y0lpa3VaMlYwS0RBcExtWnBiR1Z6SUNFOVBTQjFibVJsWm1sdVpXUTdYSEpjYmx4MFptVmhkSFZ5WlM1bWIzSnRaR0YwWVNBOUlIZHBibVJ2ZHk1R2IzSnRSR0YwWVNBaFBUMGdkVzVrWldacGJtVmtPMXh5WEc1Y2NseHVYSFIyWVhJZ2FHRnpVSEp2Y0NBOUlDRWhKQzVtYmk1d2NtOXdPMXh5WEc1Y2NseHVYSFF2THlCaGRIUnlNaUIxYzJWeklIQnliM0FnZDJobGJpQnBkQ0JqWVc0Z1luVjBJR05vWldOcmN5QjBhR1VnY21WMGRYSnVJSFI1Y0dVZ1ptOXlYSEpjYmx4MEx5OGdZVzRnWlhod1pXTjBaV1FnYzNSeWFXNW5MaUFnZEdocGN5QmhZMk52ZFc1MGN5Qm1iM0lnZEdobElHTmhjMlVnZDJobGNtVWdZU0JtYjNKdElGeHlYRzVjZEM4dklHTnZiblJoYVc1eklHbHVjSFYwY3lCM2FYUm9JRzVoYldWeklHeHBhMlVnWENKaFkzUnBiMjVjSWlCdmNpQmNJbTFsZEdodlpGd2lPeUJwYmlCMGFHOXpaVnh5WEc1Y2RDOHZJR05oYzJWeklGd2ljSEp2Y0Z3aUlISmxkSFZ5Ym5NZ2RHaGxJR1ZzWlcxbGJuUmNjbHh1WEhRa0xtWnVMbUYwZEhJeUlEMGdablZ1WTNScGIyNG9LU0I3WEhKY2JseDBYSFJwWmlBb0lDRWdhR0Z6VUhKdmNDQXBYSEpjYmx4MFhIUmNkSEpsZEhWeWJpQjBhR2x6TG1GMGRISXVZWEJ3Ykhrb2RHaHBjeXdnWVhKbmRXMWxiblJ6S1R0Y2NseHVYSFJjZEhaaGNpQjJZV3dnUFNCMGFHbHpMbkJ5YjNBdVlYQndiSGtvZEdocGN5d2dZWEpuZFcxbGJuUnpLVHRjY2x4dVhIUmNkR2xtSUNnZ0tDQjJZV3dnSmlZZ2RtRnNMbXB4ZFdWeWVTQXBJSHg4SUhSNWNHVnZaaUIyWVd3Z1BUMDlJQ2R6ZEhKcGJtY25JQ2xjY2x4dVhIUmNkRngwY21WMGRYSnVJSFpoYkR0Y2NseHVYSFJjZEhKbGRIVnliaUIwYUdsekxtRjBkSEl1WVhCd2JIa29kR2hwY3l3Z1lYSm5kVzFsYm5SektUdGNjbHh1WEhSOU8xeHlYRzVjY2x4dVhIUXZLaXBjY2x4dVhIUWdLaUJoYW1GNFUzVmliV2wwS0NrZ2NISnZkbWxrWlhNZ1lTQnRaV05vWVc1cGMyMGdabTl5SUdsdGJXVmthV0YwWld4NUlITjFZbTFwZEhScGJtZGNjbHh1WEhRZ0tpQmhiaUJJVkUxTUlHWnZjbTBnZFhOcGJtY2dRVXBCV0M1Y2NseHVYSFFnS2k5Y2NseHVYSFFrTG1adUxtRnFZWGhUZFdKdGFYUWdQU0JtZFc1amRHbHZiaWh2Y0hScGIyNXpLU0I3WEhKY2JseDBYSFF2S21wemFHbHVkQ0J6WTNKcGNIUjFjbXc2ZEhKMVpTQXFMMXh5WEc1Y2NseHVYSFJjZEM4dklHWmhjM1FnWm1GcGJDQnBaaUJ1YjNSb2FXNW5JSE5sYkdWamRHVmtJQ2hvZEhSd09pOHZaR1YyTG1weGRXVnllUzVqYjIwdmRHbGphMlYwTHpJM05USXBYSEpjYmx4MFhIUnBaaUFvSVhSb2FYTXViR1Z1WjNSb0tTQjdYSEpjYmx4MFhIUmNkR3h2WnlnbllXcGhlRk4xWW0xcGREb2djMnRwY0hCcGJtY2djM1ZpYldsMElIQnliMk5sYzNNZ0xTQnVieUJsYkdWdFpXNTBJSE5sYkdWamRHVmtKeWs3WEhKY2JseDBYSFJjZEhKbGRIVnliaUIwYUdsek8xeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkSFpoY2lCdFpYUm9iMlFzSUdGamRHbHZiaXdnZFhKc0xDQWtabTl5YlNBOUlIUm9hWE03WEhKY2JseHlYRzVjZEZ4MGFXWWdLSFI1Y0dWdlppQnZjSFJwYjI1eklEMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2NseHVYSFJjZEZ4MGIzQjBhVzl1Y3lBOUlIc2djM1ZqWTJWemN6b2diM0IwYVc5dWN5QjlPMXh5WEc1Y2RGeDBmVnh5WEc1Y2RGeDBaV3h6WlNCcFppQW9JRzl3ZEdsdmJuTWdQVDA5SUhWdVpHVm1hVzVsWkNBcElIdGNjbHh1WEhSY2RGeDBiM0IwYVc5dWN5QTlJSHQ5TzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHMWxkR2h2WkNBOUlHOXdkR2x2Ym5NdWRIbHdaU0I4ZkNCMGFHbHpMbUYwZEhJeUtDZHRaWFJvYjJRbktUdGNjbHh1WEhSY2RHRmpkR2x2YmlBOUlHOXdkR2x2Ym5NdWRYSnNJQ0I4ZkNCMGFHbHpMbUYwZEhJeUtDZGhZM1JwYjI0bktUdGNjbHh1WEhKY2JseDBYSFIxY213Z1BTQW9kSGx3Wlc5bUlHRmpkR2x2YmlBOVBUMGdKM04wY21sdVp5Y3BJRDhnSkM1MGNtbHRLR0ZqZEdsdmJpa2dPaUFuSnp0Y2NseHVYSFJjZEhWeWJDQTlJSFZ5YkNCOGZDQjNhVzVrYjNjdWJHOWpZWFJwYjI0dWFISmxaaUI4ZkNBbkp6dGNjbHh1WEhSY2RHbG1JQ2gxY213cElIdGNjbHh1WEhSY2RGeDBMeThnWTJ4bFlXNGdkWEpzSUNoa2IyNG5kQ0JwYm1Oc2RXUmxJR2hoYzJnZ2RtRjFaU2xjY2x4dVhIUmNkRngwZFhKc0lEMGdLSFZ5YkM1dFlYUmphQ2d2WGloYlhpTmRLeWt2S1h4OFcxMHBXekZkTzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHOXdkR2x2Ym5NZ1BTQWtMbVY0ZEdWdVpDaDBjblZsTENCN1hISmNibHgwWEhSY2RIVnliRG9nSUhWeWJDeGNjbHh1WEhSY2RGeDBjM1ZqWTJWemN6b2dKQzVoYW1GNFUyVjBkR2x1WjNNdWMzVmpZMlZ6Y3l4Y2NseHVYSFJjZEZ4MGRIbHdaVG9nYldWMGFHOWtJSHg4SUNRdVlXcGhlRk5sZEhScGJtZHpMblI1Y0dVc1hISmNibHgwWEhSY2RHbG1jbUZ0WlZOeVl6b2dMMTVvZEhSd2N5OXBMblJsYzNRb2QybHVaRzkzTG14dlkyRjBhVzl1TG1oeVpXWWdmSHdnSnljcElEOGdKMnBoZG1GelkzSnBjSFE2Wm1Gc2MyVW5JRG9nSjJGaWIzVjBPbUpzWVc1ckoxeHlYRzVjZEZ4MGZTd2diM0IwYVc5dWN5azdYSEpjYmx4eVhHNWNkRngwTHk4Z2FHOXZheUJtYjNJZ2JXRnVhWEIxYkdGMGFXNW5JSFJvWlNCbWIzSnRJR1JoZEdFZ1ltVm1iM0psSUdsMElHbHpJR1Y0ZEhKaFkzUmxaRHRjY2x4dVhIUmNkQzh2SUdOdmJuWmxibWxsYm5RZ1ptOXlJSFZ6WlNCM2FYUm9JSEpwWTJnZ1pXUnBkRzl5Y3lCc2FXdGxJSFJwYm5sTlEwVWdiM0lnUmtOTFJXUnBkRzl5WEhKY2JseDBYSFIyWVhJZ2RtVjBieUE5SUh0OU8xeHlYRzVjZEZ4MGRHaHBjeTUwY21sbloyVnlLQ2RtYjNKdExYQnlaUzF6WlhKcFlXeHBlbVVuTENCYmRHaHBjeXdnYjNCMGFXOXVjeXdnZG1WMGIxMHBPMXh5WEc1Y2RGeDBhV1lnS0habGRHOHVkbVYwYnlrZ2UxeHlYRzVjZEZ4MFhIUnNiMmNvSjJGcVlYaFRkV0p0YVhRNklITjFZbTFwZENCMlpYUnZaV1FnZG1saElHWnZjbTB0Y0hKbExYTmxjbWxoYkdsNlpTQjBjbWxuWjJWeUp5azdYSEpjYmx4MFhIUmNkSEpsZEhWeWJpQjBhR2x6TzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RDOHZJSEJ5YjNacFpHVWdiM0J3YjNKMGRXNXBkSGtnZEc4Z1lXeDBaWElnWm05eWJTQmtZWFJoSUdKbFptOXlaU0JwZENCcGN5QnpaWEpwWVd4cGVtVmtYSEpjYmx4MFhIUnBaaUFvYjNCMGFXOXVjeTVpWldadmNtVlRaWEpwWVd4cGVtVWdKaVlnYjNCMGFXOXVjeTVpWldadmNtVlRaWEpwWVd4cGVtVW9kR2hwY3l3Z2IzQjBhVzl1Y3lrZ1BUMDlJR1poYkhObEtTQjdYSEpjYmx4MFhIUmNkR3h2WnlnbllXcGhlRk4xWW0xcGREb2djM1ZpYldsMElHRmliM0owWldRZ2RtbGhJR0psWm05eVpWTmxjbWxoYkdsNlpTQmpZV3hzWW1GamF5Y3BPMXh5WEc1Y2RGeDBYSFJ5WlhSMWNtNGdkR2hwY3p0Y2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUjJZWElnZEhKaFpHbDBhVzl1WVd3Z1BTQnZjSFJwYjI1ekxuUnlZV1JwZEdsdmJtRnNPMXh5WEc1Y2RGeDBhV1lnS0NCMGNtRmthWFJwYjI1aGJDQTlQVDBnZFc1a1pXWnBibVZrSUNrZ2UxeHlYRzVjZEZ4MFhIUjBjbUZrYVhScGIyNWhiQ0E5SUNRdVlXcGhlRk5sZEhScGJtZHpMblJ5WVdScGRHbHZibUZzTzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RIWmhjaUJsYkdWdFpXNTBjeUE5SUZ0ZE8xeHlYRzVjZEZ4MGRtRnlJSEY0TENCaElEMGdkR2hwY3k1bWIzSnRWRzlCY25KaGVTaHZjSFJwYjI1ekxuTmxiV0Z1ZEdsakxDQmxiR1Z0Wlc1MGN5azdYSEpjYmx4MFhIUnBaaUFvYjNCMGFXOXVjeTVrWVhSaEtTQjdYSEpjYmx4MFhIUmNkRzl3ZEdsdmJuTXVaWGgwY21GRVlYUmhJRDBnYjNCMGFXOXVjeTVrWVhSaE8xeHlYRzVjZEZ4MFhIUnhlQ0E5SUNRdWNHRnlZVzBvYjNCMGFXOXVjeTVrWVhSaExDQjBjbUZrYVhScGIyNWhiQ2s3WEhKY2JseDBYSFI5WEhKY2JseHlYRzVjZEZ4MEx5OGdaMmwyWlNCd2NtVXRjM1ZpYldsMElHTmhiR3hpWVdOcklHRnVJRzl3Y0c5eWRIVnVhWFI1SUhSdklHRmliM0owSUhSb1pTQnpkV0p0YVhSY2NseHVYSFJjZEdsbUlDaHZjSFJwYjI1ekxtSmxabTl5WlZOMVltMXBkQ0FtSmlCdmNIUnBiMjV6TG1KbFptOXlaVk4xWW0xcGRDaGhMQ0IwYUdsekxDQnZjSFJwYjI1ektTQTlQVDBnWm1Gc2MyVXBJSHRjY2x4dVhIUmNkRngwYkc5bktDZGhhbUY0VTNWaWJXbDBPaUJ6ZFdKdGFYUWdZV0p2Y25SbFpDQjJhV0VnWW1WbWIzSmxVM1ZpYldsMElHTmhiR3hpWVdOckp5azdYSEpjYmx4MFhIUmNkSEpsZEhWeWJpQjBhR2x6TzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RDOHZJR1pwY21VZ2RtVjBiMkZpYkdVZ0ozWmhiR2xrWVhSbEp5QmxkbVZ1ZEZ4eVhHNWNkRngwZEdocGN5NTBjbWxuWjJWeUtDZG1iM0p0TFhOMVltMXBkQzEyWVd4cFpHRjBaU2NzSUZ0aExDQjBhR2x6TENCdmNIUnBiMjV6TENCMlpYUnZYU2s3WEhKY2JseDBYSFJwWmlBb2RtVjBieTUyWlhSdktTQjdYSEpjYmx4MFhIUmNkR3h2WnlnbllXcGhlRk4xWW0xcGREb2djM1ZpYldsMElIWmxkRzlsWkNCMmFXRWdabTl5YlMxemRXSnRhWFF0ZG1Gc2FXUmhkR1VnZEhKcFoyZGxjaWNwTzF4eVhHNWNkRngwWEhSeVpYUjFjbTRnZEdocGN6dGNjbHh1WEhSY2RIMWNjbHh1WEhKY2JseDBYSFIyWVhJZ2NTQTlJQ1F1Y0dGeVlXMG9ZU3dnZEhKaFpHbDBhVzl1WVd3cE8xeHlYRzVjZEZ4MGFXWWdLSEY0S1NCN1hISmNibHgwWEhSY2RIRWdQU0FvSUhFZ1B5QW9jU0FySUNjbUp5QXJJSEY0S1NBNklIRjRJQ2s3WEhKY2JseDBYSFI5WEhKY2JseDBYSFJwWmlBb2IzQjBhVzl1Y3k1MGVYQmxMblJ2VlhCd1pYSkRZWE5sS0NrZ1BUMGdKMGRGVkNjcElIdGNjbHh1WEhSY2RGeDBiM0IwYVc5dWN5NTFjbXdnS3owZ0tHOXdkR2x2Ym5NdWRYSnNMbWx1WkdWNFQyWW9KejhuS1NBK1BTQXdJRDhnSnlZbklEb2dKejhuS1NBcklIRTdYSEpjYmx4MFhIUmNkRzl3ZEdsdmJuTXVaR0YwWVNBOUlHNTFiR3c3SUNBdkx5QmtZWFJoSUdseklHNTFiR3dnWm05eUlDZG5aWFFuWEhKY2JseDBYSFI5WEhKY2JseDBYSFJsYkhObElIdGNjbHh1WEhSY2RGeDBiM0IwYVc5dWN5NWtZWFJoSUQwZ2NUc2dMeThnWkdGMFlTQnBjeUIwYUdVZ2NYVmxjbmtnYzNSeWFXNW5JR1p2Y2lBbmNHOXpkQ2RjY2x4dVhIUmNkSDFjY2x4dVhISmNibHgwWEhSMllYSWdZMkZzYkdKaFkydHpJRDBnVzEwN1hISmNibHgwWEhScFppQW9iM0IwYVc5dWN5NXlaWE5sZEVadmNtMHBJSHRjY2x4dVhIUmNkRngwWTJGc2JHSmhZMnR6TG5CMWMyZ29ablZ1WTNScGIyNG9LU0I3SUNSbWIzSnRMbkpsYzJWMFJtOXliU2dwT3lCOUtUdGNjbHh1WEhSY2RIMWNjbHh1WEhSY2RHbG1JQ2h2Y0hScGIyNXpMbU5zWldGeVJtOXliU2tnZTF4eVhHNWNkRngwWEhSallXeHNZbUZqYTNNdWNIVnphQ2htZFc1amRHbHZiaWdwSUhzZ0pHWnZjbTB1WTJ4bFlYSkdiM0p0S0c5d2RHbHZibk11YVc1amJIVmtaVWhwWkdSbGJpazdJSDBwTzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RDOHZJSEJsY21admNtMGdZU0JzYjJGa0lHOXVJSFJvWlNCMFlYSm5aWFFnYjI1c2VTQnBaaUJrWVhSaFZIbHdaU0JwY3lCdWIzUWdjSEp2ZG1sa1pXUmNjbHh1WEhSY2RHbG1JQ2doYjNCMGFXOXVjeTVrWVhSaFZIbHdaU0FtSmlCdmNIUnBiMjV6TG5SaGNtZGxkQ2tnZTF4eVhHNWNkRngwWEhSMllYSWdiMnhrVTNWalkyVnpjeUE5SUc5d2RHbHZibk11YzNWalkyVnpjeUI4ZkNCbWRXNWpkR2x2YmlncGUzMDdYSEpjYmx4MFhIUmNkR05oYkd4aVlXTnJjeTV3ZFhOb0tHWjFibU4wYVc5dUtHUmhkR0VwSUh0Y2NseHVYSFJjZEZ4MFhIUjJZWElnWm00Z1BTQnZjSFJwYjI1ekxuSmxjR3hoWTJWVVlYSm5aWFFnUHlBbmNtVndiR0ZqWlZkcGRHZ25JRG9nSjJoMGJXd25PMXh5WEc1Y2RGeDBYSFJjZENRb2IzQjBhVzl1Y3k1MFlYSm5aWFFwVzJadVhTaGtZWFJoS1M1bFlXTm9LRzlzWkZOMVkyTmxjM01zSUdGeVozVnRaVzUwY3lrN1hISmNibHgwWEhSY2RIMHBPMXh5WEc1Y2RGeDBmVnh5WEc1Y2RGeDBaV3h6WlNCcFppQW9iM0IwYVc5dWN5NXpkV05qWlhOektTQjdYSEpjYmx4MFhIUmNkR05oYkd4aVlXTnJjeTV3ZFhOb0tHOXdkR2x2Ym5NdWMzVmpZMlZ6Y3lrN1hISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBiM0IwYVc5dWN5NXpkV05qWlhOeklEMGdablZ1WTNScGIyNG9aR0YwWVN3Z2MzUmhkSFZ6TENCNGFISXBJSHNnTHk4Z2FsRjFaWEo1SURFdU5Dc2djR0Z6YzJWeklIaG9jaUJoY3lBemNtUWdZWEpuWEhKY2JseDBYSFJjZEhaaGNpQmpiMjUwWlhoMElEMGdiM0IwYVc5dWN5NWpiMjUwWlhoMElIeDhJSFJvYVhNZ095QWdJQ0F2THlCcVVYVmxjbmtnTVM0MEt5QnpkWEJ3YjNKMGN5QnpZMjl3WlNCamIyNTBaWGgwWEhKY2JseDBYSFJjZEdadmNpQW9kbUZ5SUdrOU1Dd2diV0Y0UFdOaGJHeGlZV05yY3k1c1pXNW5kR2c3SUdrZ1BDQnRZWGc3SUdrckt5a2dlMXh5WEc1Y2RGeDBYSFJjZEdOaGJHeGlZV05yYzF0cFhTNWhjSEJzZVNoamIyNTBaWGgwTENCYlpHRjBZU3dnYzNSaGRIVnpMQ0I0YUhJZ2ZId2dKR1p2Y20wc0lDUm1iM0p0WFNrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMDdYSEpjYmx4eVhHNWNkRngwYVdZZ0tHOXdkR2x2Ym5NdVpYSnliM0lwSUh0Y2NseHVYSFJjZEZ4MGRtRnlJRzlzWkVWeWNtOXlJRDBnYjNCMGFXOXVjeTVsY25KdmNqdGNjbHh1WEhSY2RGeDBiM0IwYVc5dWN5NWxjbkp2Y2lBOUlHWjFibU4wYVc5dUtIaG9jaXdnYzNSaGRIVnpMQ0JsY25KdmNpa2dlMXh5WEc1Y2RGeDBYSFJjZEhaaGNpQmpiMjUwWlhoMElEMGdiM0IwYVc5dWN5NWpiMjUwWlhoMElIeDhJSFJvYVhNN1hISmNibHgwWEhSY2RGeDBiMnhrUlhKeWIzSXVZWEJ3Ykhrb1kyOXVkR1Y0ZEN3Z1czaG9jaXdnYzNSaGRIVnpMQ0JsY25KdmNpd2dKR1p2Y20xZEtUdGNjbHh1WEhSY2RGeDBmVHRjY2x4dVhIUmNkSDFjY2x4dVhISmNibHgwWEhRZ2FXWWdLRzl3ZEdsdmJuTXVZMjl0Y0d4bGRHVXBJSHRjY2x4dVhIUmNkRngwZG1GeUlHOXNaRU52YlhCc1pYUmxJRDBnYjNCMGFXOXVjeTVqYjIxd2JHVjBaVHRjY2x4dVhIUmNkRngwYjNCMGFXOXVjeTVqYjIxd2JHVjBaU0E5SUdaMWJtTjBhVzl1S0hob2Npd2djM1JoZEhWektTQjdYSEpjYmx4MFhIUmNkRngwZG1GeUlHTnZiblJsZUhRZ1BTQnZjSFJwYjI1ekxtTnZiblJsZUhRZ2ZId2dkR2hwY3p0Y2NseHVYSFJjZEZ4MFhIUnZiR1JEYjIxd2JHVjBaUzVoY0hCc2VTaGpiMjUwWlhoMExDQmJlR2h5TENCemRHRjBkWE1zSUNSbWIzSnRYU2s3WEhKY2JseDBYSFJjZEgwN1hISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBMeThnWVhKbElIUm9aWEpsSUdacGJHVnpJSFJ2SUhWd2JHOWhaRDljY2x4dVhISmNibHgwWEhRdkx5QmJkbUZzZFdWZElDaHBjM04xWlNBak1URXpLU3dnWVd4emJ5QnpaV1VnWTI5dGJXVnVkRHBjY2x4dVhIUmNkQzh2SUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5dFlXeHpkWEF2Wm05eWJTOWpiMjF0YVhRdk5UZzRNekEyWVdWa1ltRXhaR1V3TVRNNE9EQXpNbVExWmpReVlUWXdNVFU1WldWaE9USXlPQ05qYjIxdGFYUmpiMjF0Wlc1MExUSXhPREF5TVRsY2NseHVYSFJjZEhaaGNpQm1hV3hsU1c1d2RYUnpJRDBnSkNnbmFXNXdkWFJiZEhsd1pUMW1hV3hsWFRwbGJtRmliR1ZrSnl3Z2RHaHBjeWt1Wm1sc2RHVnlLR1oxYm1OMGFXOXVLQ2tnZXlCeVpYUjFjbTRnSkNoMGFHbHpLUzUyWVd3b0tTQWhQVDBnSnljN0lIMHBPMXh5WEc1Y2NseHVYSFJjZEhaaGNpQm9ZWE5HYVd4bFNXNXdkWFJ6SUQwZ1ptbHNaVWx1Y0hWMGN5NXNaVzVuZEdnZ1BpQXdPMXh5WEc1Y2RGeDBkbUZ5SUcxd0lEMGdKMjExYkhScGNHRnlkQzltYjNKdExXUmhkR0VuTzF4eVhHNWNkRngwZG1GeUlHMTFiSFJwY0dGeWRDQTlJQ2drWm05eWJTNWhkSFJ5S0NkbGJtTjBlWEJsSnlrZ1BUMGdiWEFnZkh3Z0pHWnZjbTB1WVhSMGNpZ25aVzVqYjJScGJtY25LU0E5UFNCdGNDazdYSEpjYmx4eVhHNWNkRngwZG1GeUlHWnBiR1ZCVUVrZ1BTQm1aV0YwZFhKbExtWnBiR1ZoY0drZ0ppWWdabVZoZEhWeVpTNW1iM0p0WkdGMFlUdGNjbHh1WEhSY2RHeHZaeWhjSW1acGJHVkJVRWtnT2x3aUlDc2dabWxzWlVGUVNTazdYSEpjYmx4MFhIUjJZWElnYzJodmRXeGtWWE5sUm5KaGJXVWdQU0FvYUdGelJtbHNaVWx1Y0hWMGN5QjhmQ0J0ZFd4MGFYQmhjblFwSUNZbUlDRm1hV3hsUVZCSk8xeHlYRzVjY2x4dVhIUmNkSFpoY2lCcWNYaG9janRjY2x4dVhISmNibHgwWEhRdkx5QnZjSFJwYjI1ekxtbG1jbUZ0WlNCaGJHeHZkM01nZFhObGNpQjBieUJtYjNKalpTQnBabkpoYldVZ2JXOWtaVnh5WEc1Y2RGeDBMeThnTURZdFRrOVdMVEE1T2lCdWIzY2daR1ZtWVhWc2RHbHVaeUIwYnlCcFpuSmhiV1VnYlc5a1pTQnBaaUJtYVd4bElHbHVjSFYwSUdseklHUmxkR1ZqZEdWa1hISmNibHgwWEhScFppQW9iM0IwYVc5dWN5NXBabkpoYldVZ0lUMDlJR1poYkhObElDWW1JQ2h2Y0hScGIyNXpMbWxtY21GdFpTQjhmQ0J6YUc5MWJHUlZjMlZHY21GdFpTa3BJSHRjY2x4dVhIUmNkRngwTHk4Z2FHRmpheUIwYnlCbWFYZ2dVMkZtWVhKcElHaGhibWNnS0hSb1lXNXJjeUIwYnlCVWFXMGdUVzlzWlc1a2FXcHJJR1p2Y2lCMGFHbHpLVnh5WEc1Y2RGeDBYSFF2THlCelpXVTZJQ0JvZEhSd09pOHZaM0p2ZFhCekxtZHZiMmRzWlM1amIyMHZaM0p2ZFhBdmFuRjFaWEo1TFdSbGRpOWljbTkzYzJWZmRHaHlaV0ZrTDNSb2NtVmhaQzh6TmpNNU5XSTNZV0kxTVRCa1pEVmtYSEpjYmx4MFhIUmNkR2xtSUNodmNIUnBiMjV6TG1Oc2IzTmxTMlZsY0VGc2FYWmxLU0I3WEhKY2JseDBYSFJjZEZ4MEpDNW5aWFFvYjNCMGFXOXVjeTVqYkc5elpVdGxaWEJCYkdsMlpTd2dablZ1WTNScGIyNG9LU0I3WEhKY2JseDBYSFJjZEZ4MFhIUnFjWGhvY2lBOUlHWnBiR1ZWY0d4dllXUkpabkpoYldVb1lTazdYSEpjYmx4MFhIUmNkRngwZlNrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RGeDBaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBhbkY0YUhJZ1BTQm1hV3hsVlhCc2IyRmtTV1p5WVcxbEtHRXBPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseDBYSFI5WEhKY2JseDBYSFJsYkhObElHbG1JQ2dvYUdGelJtbHNaVWx1Y0hWMGN5QjhmQ0J0ZFd4MGFYQmhjblFwSUNZbUlHWnBiR1ZCVUVrcElIdGNjbHh1WEhSY2RGeDBhbkY0YUhJZ1BTQm1hV3hsVlhCc2IyRmtXR2h5S0dFcE8xeHlYRzVjZEZ4MGZWeHlYRzVjZEZ4MFpXeHpaU0I3WEhKY2JseDBYSFJjZEdweGVHaHlJRDBnSkM1aGFtRjRLRzl3ZEdsdmJuTXBPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZENSbWIzSnRMbkpsYlc5MlpVUmhkR0VvSjJweGVHaHlKeWt1WkdGMFlTZ25hbkY0YUhJbkxDQnFjWGhvY2lrN1hISmNibHh5WEc1Y2RGeDBMeThnWTJ4bFlYSWdaV3hsYldWdWRDQmhjbkpoZVZ4eVhHNWNkRngwWm05eUlDaDJZWElnYXowd095QnJJRHdnWld4bGJXVnVkSE11YkdWdVozUm9PeUJyS3lzcFhISmNibHgwWEhSY2RHVnNaVzFsYm5SelcydGRJRDBnYm5Wc2JEdGNjbHh1WEhKY2JseDBYSFF2THlCbWFYSmxJQ2R1YjNScFpua25JR1YyWlc1MFhISmNibHgwWEhSMGFHbHpMblJ5YVdkblpYSW9KMlp2Y20wdGMzVmliV2wwTFc1dmRHbG1lU2NzSUZ0MGFHbHpMQ0J2Y0hScGIyNXpYU2s3WEhKY2JseDBYSFJ5WlhSMWNtNGdkR2hwY3p0Y2NseHVYSEpjYmx4MFhIUXZMeUIxZEdsc2FYUjVJR1p1SUdadmNpQmtaV1Z3SUhObGNtbGhiR2w2WVhScGIyNWNjbHh1WEhSY2RHWjFibU4wYVc5dUlHUmxaWEJUWlhKcFlXeHBlbVVvWlhoMGNtRkVZWFJoS1h0Y2NseHVYSFJjZEZ4MGRtRnlJSE5sY21saGJHbDZaV1FnUFNBa0xuQmhjbUZ0S0dWNGRISmhSR0YwWVN3Z2IzQjBhVzl1Y3k1MGNtRmthWFJwYjI1aGJDa3VjM0JzYVhRb0p5WW5LVHRjY2x4dVhIUmNkRngwZG1GeUlHeGxiaUE5SUhObGNtbGhiR2w2WldRdWJHVnVaM1JvTzF4eVhHNWNkRngwWEhSMllYSWdjbVZ6ZFd4MElEMGdXMTA3WEhKY2JseDBYSFJjZEhaaGNpQnBMQ0J3WVhKME8xeHlYRzVjZEZ4MFhIUm1iM0lnS0drOU1Ec2dhU0E4SUd4bGJqc2dhU3NyS1NCN1hISmNibHgwWEhSY2RGeDBMeThnSXpJMU1qc2dkVzVrYnlCd1lYSmhiU0J6Y0dGalpTQnlaWEJzWVdObGJXVnVkRnh5WEc1Y2RGeDBYSFJjZEhObGNtbGhiR2w2WldSYmFWMGdQU0J6WlhKcFlXeHBlbVZrVzJsZExuSmxjR3hoWTJVb0wxeGNLeTluTENjZ0p5azdYSEpjYmx4MFhIUmNkRngwY0dGeWRDQTlJSE5sY21saGJHbDZaV1JiYVYwdWMzQnNhWFFvSnowbktUdGNjbHh1WEhSY2RGeDBYSFF2THlBak1qYzRPeUIxYzJVZ1lYSnlZWGtnYVc1emRHVmhaQ0J2WmlCdlltcGxZM1FnYzNSdmNtRm5aU3dnWm1GMmIzSnBibWNnWVhKeVlYa2djMlZ5YVdGc2FYcGhkR2x2Ym5OY2NseHVYSFJjZEZ4MFhIUnlaWE4xYkhRdWNIVnphQ2hiWkdWamIyUmxWVkpKUTI5dGNHOXVaVzUwS0hCaGNuUmJNRjBwTENCa1pXTnZaR1ZWVWtsRGIyMXdiMjVsYm5Rb2NHRnlkRnN4WFNsZEtUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJ5WlhSMWNtNGdjbVZ6ZFd4ME8xeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkQ0F2THlCWVRVeElkSFJ3VW1WeGRXVnpkQ0JNWlhabGJDQXlJR1pwYkdVZ2RYQnNiMkZrY3lBb1ltbG5JR2hoZENCMGFYQWdkRzhnWm5KaGJtTnZhWE15YldWMGVpbGNjbHh1WEhSY2RHWjFibU4wYVc5dUlHWnBiR1ZWY0d4dllXUllhSElvWVNrZ2UxeHlYRzVjZEZ4MFhIUjJZWElnWm05eWJXUmhkR0VnUFNCdVpYY2dSbTl5YlVSaGRHRW9LVHRjY2x4dVhISmNibHgwWEhSY2RHWnZjaUFvZG1GeUlHazlNRHNnYVNBOElHRXViR1Z1WjNSb095QnBLeXNwSUh0Y2NseHVYSFJjZEZ4MFhIUm1iM0p0WkdGMFlTNWhjSEJsYm1Rb1lWdHBYUzV1WVcxbExDQmhXMmxkTG5aaGJIVmxLVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0c5d2RHbHZibk11WlhoMGNtRkVZWFJoS1NCN1hISmNibHgwWEhSY2RGeDBkbUZ5SUhObGNtbGhiR2w2WldSRVlYUmhJRDBnWkdWbGNGTmxjbWxoYkdsNlpTaHZjSFJwYjI1ekxtVjRkSEpoUkdGMFlTazdYSEpjYmx4MFhIUmNkRngwWm05eUlDaHBQVEE3SUdrZ1BDQnpaWEpwWVd4cGVtVmtSR0YwWVM1c1pXNW5kR2c3SUdrckt5bGNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaHpaWEpwWVd4cGVtVmtSR0YwWVZ0cFhTbGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFptOXliV1JoZEdFdVlYQndaVzVrS0hObGNtbGhiR2w2WldSRVlYUmhXMmxkV3pCZExDQnpaWEpwWVd4cGVtVmtSR0YwWVZ0cFhWc3hYU2s3WEhKY2JseDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRzl3ZEdsdmJuTXVaR0YwWVNBOUlHNTFiR3c3WEhKY2JseHlYRzVjZEZ4MFhIUjJZWElnY3lBOUlDUXVaWGgwWlc1a0tIUnlkV1VzSUh0OUxDQWtMbUZxWVhoVFpYUjBhVzVuY3l3Z2IzQjBhVzl1Y3l3Z2UxeHlYRzVjZEZ4MFhIUmNkR052Ym5SbGJuUlVlWEJsT2lCbVlXeHpaU3hjY2x4dVhIUmNkRngwWEhSd2NtOWpaWE56UkdGMFlUb2dabUZzYzJVc1hISmNibHgwWEhSY2RGeDBZMkZqYUdVNklHWmhiSE5sTEZ4eVhHNWNkRngwWEhSY2RIUjVjR1U2SUcxbGRHaHZaQ0I4ZkNBblVFOVRWQ2RjY2x4dVhIUmNkRngwZlNrN1hISmNibHh5WEc1Y2RGeDBYSFJwWmlBb2IzQjBhVzl1Y3k1MWNHeHZZV1JRY205bmNtVnpjeWtnZTF4eVhHNWNkRngwWEhSY2RDOHZJSGR2Y210aGNtOTFibVFnWW1WallYVnpaU0JxY1ZoSVVpQmtiMlZ6SUc1dmRDQmxlSEJ2YzJVZ2RYQnNiMkZrSUhCeWIzQmxjblI1WEhKY2JseDBYSFJjZEZ4MGN5NTRhSElnUFNCbWRXNWpkR2x2YmlncElIdGNjbHh1WEhSY2RGeDBYSFJjZEhaaGNpQjRhSElnUFNBa0xtRnFZWGhUWlhSMGFXNW5jeTU0YUhJb0tUdGNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaDRhSEl1ZFhCc2IyRmtLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkSGhvY2k1MWNHeHZZV1F1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduY0hKdlozSmxjM01uTENCbWRXNWpkR2x2YmlobGRtVnVkQ2tnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEhaaGNpQndaWEpqWlc1MElEMGdNRHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFIyWVhJZ2NHOXphWFJwYjI0Z1BTQmxkbVZ1ZEM1c2IyRmtaV1FnZkh3Z1pYWmxiblF1Y0c5emFYUnBiMjQ3SUM4cVpYWmxiblF1Y0c5emFYUnBiMjRnYVhNZ1pHVndjbVZqWVhSbFpDb3ZYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBkbUZ5SUhSdmRHRnNJRDBnWlhabGJuUXVkRzkwWVd3N1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MGFXWWdLR1YyWlc1MExteGxibWQwYUVOdmJYQjFkR0ZpYkdVcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkSEJsY21ObGJuUWdQU0JOWVhSb0xtTmxhV3dvY0c5emFYUnBiMjRnTHlCMGIzUmhiQ0FxSURFd01DazdYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRzl3ZEdsdmJuTXVkWEJzYjJGa1VISnZaM0psYzNNb1pYWmxiblFzSUhCdmMybDBhVzl1TENCMGIzUmhiQ3dnY0dWeVkyVnVkQ2s3WEhKY2JseDBYSFJjZEZ4MFhIUmNkSDBzSUdaaGJITmxLVHRjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUI0YUhJN1hISmNibHgwWEhSY2RGeDBmVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBjeTVrWVhSaElEMGdiblZzYkR0Y2NseHVYSFJjZEZ4MGRtRnlJR0psWm05eVpWTmxibVFnUFNCekxtSmxabTl5WlZObGJtUTdYSEpjYmx4MFhIUmNkSE11WW1WbWIzSmxVMlZ1WkNBOUlHWjFibU4wYVc5dUtIaG9jaXdnYnlrZ2UxeHlYRzVjZEZ4MFhIUmNkQzh2VTJWdVpDQkdiM0p0UkdGMFlTZ3BJSEJ5YjNacFpHVmtJR0o1SUhWelpYSmNjbHh1WEhSY2RGeDBYSFJwWmlBb2IzQjBhVzl1Y3k1bWIzSnRSR0YwWVNsY2NseHVYSFJjZEZ4MFhIUmNkRzh1WkdGMFlTQTlJRzl3ZEdsdmJuTXVabTl5YlVSaGRHRTdYSEpjYmx4MFhIUmNkRngwWld4elpWeHlYRzVjZEZ4MFhIUmNkRngwYnk1a1lYUmhJRDBnWm05eWJXUmhkR0U3WEhKY2JseDBYSFJjZEZ4MGFXWW9ZbVZtYjNKbFUyVnVaQ2xjY2x4dVhIUmNkRngwWEhSY2RHSmxabTl5WlZObGJtUXVZMkZzYkNoMGFHbHpMQ0I0YUhJc0lHOHBPMXh5WEc1Y2RGeDBYSFI5TzF4eVhHNWNkRngwWEhSeVpYUjFjbTRnSkM1aGFtRjRLSE1wTzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RDOHZJSEJ5YVhaaGRHVWdablZ1WTNScGIyNGdabTl5SUdoaGJtUnNhVzVuSUdacGJHVWdkWEJzYjJGa2N5QW9hR0YwSUhScGNDQjBieUJaUVVoUFR5RXBYSEpjYmx4MFhIUm1kVzVqZEdsdmJpQm1hV3hsVlhCc2IyRmtTV1p5WVcxbEtHRXBJSHRjY2x4dVhIUmNkRngwZG1GeUlHWnZjbTBnUFNBa1ptOXliVnN3WFN3Z1pXd3NJR2tzSUhNc0lHY3NJR2xrTENBa2FXOHNJR2x2TENCNGFISXNJSE4xWWl3Z2Jpd2dkR2x0WldSUGRYUXNJSFJwYldWdmRYUklZVzVrYkdVN1hISmNibHgwWEhSY2RIWmhjaUJrWldabGNuSmxaQ0E5SUNRdVJHVm1aWEp5WldRb0tUdGNjbHh1WEhKY2JseDBYSFJjZEM4dklDTXpOREZjY2x4dVhIUmNkRngwWkdWbVpYSnlaV1F1WVdKdmNuUWdQU0JtZFc1amRHbHZiaWh6ZEdGMGRYTXBJSHRjY2x4dVhIUmNkRngwWEhSNGFISXVZV0p2Y25Rb2MzUmhkSFZ6S1R0Y2NseHVYSFJjZEZ4MGZUdGNjbHh1WEhKY2JseDBYSFJjZEdsbUlDaGhLU0I3WEhKY2JseDBYSFJjZEZ4MEx5OGdaVzV6ZFhKbElIUm9ZWFFnWlhabGNua2djMlZ5YVdGc2FYcGxaQ0JwYm5CMWRDQnBjeUJ6ZEdsc2JDQmxibUZpYkdWa1hISmNibHgwWEhSY2RGeDBabTl5SUNocFBUQTdJR2tnUENCbGJHVnRaVzUwY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFpXd2dQU0FrS0dWc1pXMWxiblJ6VzJsZEtUdGNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDZ2dhR0Z6VUhKdmNDQXBYSEpjYmx4MFhIUmNkRngwWEhSY2RHVnNMbkJ5YjNBb0oyUnBjMkZpYkdWa0p5d2dabUZzYzJVcE8xeHlYRzVjZEZ4MFhIUmNkRngwWld4elpWeHlYRzVjZEZ4MFhIUmNkRngwWEhSbGJDNXlaVzF2ZG1WQmRIUnlLQ2RrYVhOaFlteGxaQ2NwTzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MGN5QTlJQ1F1WlhoMFpXNWtLSFJ5ZFdVc0lIdDlMQ0FrTG1GcVlYaFRaWFIwYVc1bmN5d2diM0IwYVc5dWN5azdYSEpjYmx4MFhIUmNkSE11WTI5dWRHVjRkQ0E5SUhNdVkyOXVkR1Y0ZENCOGZDQnpPMXh5WEc1Y2RGeDBYSFJwWkNBOUlDZHFjVVp2Y20xSlR5Y2dLeUFvYm1WM0lFUmhkR1VvS1M1blpYUlVhVzFsS0NrcE8xeHlYRzVjZEZ4MFhIUnBaaUFvY3k1cFpuSmhiV1ZVWVhKblpYUXBJSHRjY2x4dVhIUmNkRngwWEhRa2FXOGdQU0FrS0hNdWFXWnlZVzFsVkdGeVoyVjBLVHRjY2x4dVhIUmNkRngwWEhSdUlEMGdKR2x2TG1GMGRISXlLQ2R1WVcxbEp5azdYSEpjYmx4MFhIUmNkRngwYVdZZ0tDRnVLVnh5WEc1Y2RGeDBYSFJjZEZ4MElDUnBieTVoZEhSeU1pZ25ibUZ0WlNjc0lHbGtLVHRjY2x4dVhIUmNkRngwWEhSbGJITmxYSEpjYmx4MFhIUmNkRngwWEhScFpDQTlJRzQ3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEZ4MFpXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MEpHbHZJRDBnSkNnblBHbG1jbUZ0WlNCdVlXMWxQVndpSnlBcklHbGtJQ3NnSjF3aUlITnlZejFjSWljcklITXVhV1p5WVcxbFUzSmpJQ3NuWENJZ0x6NG5LVHRjY2x4dVhIUmNkRngwWEhRa2FXOHVZM056S0hzZ2NHOXphWFJwYjI0NklDZGhZbk52YkhWMFpTY3NJSFJ2Y0RvZ0p5MHhNREF3Y0hnbkxDQnNaV1owT2lBbkxURXdNREJ3ZUNjZ2ZTazdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkRngwYVc4Z1BTQWthVzliTUYwN1hISmNibHh5WEc1Y2NseHVYSFJjZEZ4MGVHaHlJRDBnZXlBdkx5QnRiMk5ySUc5aWFtVmpkRnh5WEc1Y2RGeDBYSFJjZEdGaWIzSjBaV1E2SURBc1hISmNibHgwWEhSY2RGeDBjbVZ6Y0c5dWMyVlVaWGgwT2lCdWRXeHNMRnh5WEc1Y2RGeDBYSFJjZEhKbGMzQnZibk5sV0UxTU9pQnVkV3hzTEZ4eVhHNWNkRngwWEhSY2RITjBZWFIxY3pvZ01DeGNjbHh1WEhSY2RGeDBYSFJ6ZEdGMGRYTlVaWGgwT2lBbmJpOWhKeXhjY2x4dVhIUmNkRngwWEhSblpYUkJiR3hTWlhOd2IyNXpaVWhsWVdSbGNuTTZJR1oxYm1OMGFXOXVLQ2tnZTMwc1hISmNibHgwWEhSY2RGeDBaMlYwVW1WemNHOXVjMlZJWldGa1pYSTZJR1oxYm1OMGFXOXVLQ2tnZTMwc1hISmNibHgwWEhSY2RGeDBjMlYwVW1WeGRXVnpkRWhsWVdSbGNqb2dablZ1WTNScGIyNG9LU0I3ZlN4Y2NseHVYSFJjZEZ4MFhIUmhZbTl5ZERvZ1puVnVZM1JwYjI0b2MzUmhkSFZ6S1NCN1hISmNibHgwWEhSY2RGeDBYSFIyWVhJZ1pTQTlJQ2h6ZEdGMGRYTWdQVDA5SUNkMGFXMWxiM1YwSnlBL0lDZDBhVzFsYjNWMEp5QTZJQ2RoWW05eWRHVmtKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUnNiMmNvSjJGaWIzSjBhVzVuSUhWd2JHOWhaQzR1TGlBbklDc2daU2s3WEhKY2JseDBYSFJjZEZ4MFhIUjBhR2x6TG1GaWIzSjBaV1FnUFNBeE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RIUnllU0I3SUM4dklDTXlNVFFzSUNNeU5UZGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGFXWWdLR2x2TG1OdmJuUmxiblJYYVc1a2IzY3VaRzlqZFcxbGJuUXVaWGhsWTBOdmJXMWhibVFwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhScGJ5NWpiMjUwWlc1MFYybHVaRzkzTG1SdlkzVnRaVzUwTG1WNFpXTkRiMjF0WVc1a0tDZFRkRzl3SnlrN1hISmNibHgwWEhSY2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSY2RHTmhkR05vS0dsbmJtOXlaU2tnZTMxY2NseHVYSEpjYmx4MFhIUmNkRngwWEhRa2FXOHVZWFIwY2lnbmMzSmpKeXdnY3k1cFpuSmhiV1ZUY21NcE95QXZMeUJoWW05eWRDQnZjQ0JwYmlCd2NtOW5jbVZ6YzF4eVhHNWNkRngwWEhSY2RGeDBlR2h5TG1WeWNtOXlJRDBnWlR0Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNoekxtVnljbTl5S1Z4eVhHNWNkRngwWEhSY2RGeDBYSFJ6TG1WeWNtOXlMbU5oYkd3b2N5NWpiMjUwWlhoMExDQjRhSElzSUdVc0lITjBZWFIxY3lrN1hISmNibHgwWEhSY2RGeDBYSFJwWmlBb1p5bGNjbHh1WEhSY2RGeDBYSFJjZEZ4MEpDNWxkbVZ1ZEM1MGNtbG5aMlZ5S0Z3aVlXcGhlRVZ5Y205eVhDSXNJRnQ0YUhJc0lITXNJR1ZkS1R0Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNoekxtTnZiWEJzWlhSbEtWeHlYRzVjZEZ4MFhIUmNkRngwWEhSekxtTnZiWEJzWlhSbExtTmhiR3dvY3k1amIyNTBaWGgwTENCNGFISXNJR1VwTzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBmVHRjY2x4dVhISmNibHgwWEhSY2RHY2dQU0J6TG1kc2IySmhiRHRjY2x4dVhIUmNkRngwTHk4Z2RISnBaMmRsY2lCaGFtRjRJR2RzYjJKaGJDQmxkbVZ1ZEhNZ2MyOGdkR2hoZENCaFkzUnBkbWwwZVM5aWJHOWpheUJwYm1ScFkyRjBiM0p6SUhkdmNtc2diR2xyWlNCdWIzSnRZV3hjY2x4dVhIUmNkRngwYVdZZ0tHY2dKaVlnTUNBOVBUMGdKQzVoWTNScGRtVXJLeWtnZTF4eVhHNWNkRngwWEhSY2RDUXVaWFpsYm5RdWRISnBaMmRsY2loY0ltRnFZWGhUZEdGeWRGd2lLVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNkRngwWEhScFppQW9aeWtnZTF4eVhHNWNkRngwWEhSY2RDUXVaWFpsYm5RdWRISnBaMmRsY2loY0ltRnFZWGhUWlc1a1hDSXNJRnQ0YUhJc0lITmRLVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0hNdVltVm1iM0psVTJWdVpDQW1KaUJ6TG1KbFptOXlaVk5sYm1RdVkyRnNiQ2h6TG1OdmJuUmxlSFFzSUhob2Npd2djeWtnUFQwOUlHWmhiSE5sS1NCN1hISmNibHgwWEhSY2RGeDBhV1lnS0hNdVoyeHZZbUZzS1NCN1hISmNibHgwWEhSY2RGeDBYSFFrTG1GamRHbDJaUzB0TzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBYSFJrWldabGNuSmxaQzV5WldwbFkzUW9LVHRjY2x4dVhIUmNkRngwWEhSeVpYUjFjbTRnWkdWbVpYSnlaV1E3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEZ4MGFXWWdLSGhvY2k1aFltOXlkR1ZrS1NCN1hISmNibHgwWEhSY2RGeDBaR1ZtWlhKeVpXUXVjbVZxWldOMEtDazdYSEpjYmx4MFhIUmNkRngwY21WMGRYSnVJR1JsWm1WeWNtVmtPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUXZMeUJoWkdRZ2MzVmliV2wwZEdsdVp5QmxiR1Z0Wlc1MElIUnZJR1JoZEdFZ2FXWWdkMlVnYTI1dmR5QnBkRnh5WEc1Y2RGeDBYSFJ6ZFdJZ1BTQm1iM0p0TG1Oc2F6dGNjbHh1WEhSY2RGeDBhV1lnS0hOMVlpa2dlMXh5WEc1Y2RGeDBYSFJjZEc0Z1BTQnpkV0l1Ym1GdFpUdGNjbHh1WEhSY2RGeDBYSFJwWmlBb2JpQW1KaUFoYzNWaUxtUnBjMkZpYkdWa0tTQjdYSEpjYmx4MFhIUmNkRngwWEhSekxtVjRkSEpoUkdGMFlTQTlJSE11WlhoMGNtRkVZWFJoSUh4OElIdDlPMXh5WEc1Y2RGeDBYSFJjZEZ4MGN5NWxlSFJ5WVVSaGRHRmJibDBnUFNCemRXSXVkbUZzZFdVN1hISmNibHgwWEhSY2RGeDBYSFJwWmlBb2MzVmlMblI1Y0dVZ1BUMGdYQ0pwYldGblpWd2lLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkSE11WlhoMGNtRkVZWFJoVzI0ckp5NTRKMTBnUFNCbWIzSnRMbU5zYTE5NE8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSekxtVjRkSEpoUkdGMFlWdHVLeWN1ZVNkZElEMGdabTl5YlM1amJHdGZlVHRjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkSFpoY2lCRFRFbEZUbFJmVkVsTlJVOVZWRjlCUWs5U1ZDQTlJREU3WEhKY2JseDBYSFJjZEhaaGNpQlRSVkpXUlZKZlFVSlBVbFFnUFNBeU8xeHlYRzVjZEZ4MFhIUmNkRngwWEhKY2JseDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUnZZeWhtY21GdFpTa2dlMXh5WEc1Y2RGeDBYSFJjZEM4cUlHbDBJR3h2YjJ0eklHeHBhMlVnWTI5dWRHVnVkRmRwYm1SdmR5QnZjaUJqYjI1MFpXNTBSRzlqZFcxbGJuUWdaRzhnYm05MFhISmNibHgwWEhSY2RGeDBJQ29nWTJGeWNua2dkR2hsSUhCeWIzUnZZMjlzSUhCeWIzQmxjblI1SUdsdUlHbGxPQ3dnZDJobGJpQnlkVzV1YVc1bklIVnVaR1Z5SUhOemJGeHlYRzVjZEZ4MFhIUmNkQ0FxSUdaeVlXMWxMbVJ2WTNWdFpXNTBJR2x6SUhSb1pTQnZibXg1SUhaaGJHbGtJSEpsYzNCdmJuTmxJR1J2WTNWdFpXNTBMQ0J6YVc1alpWeHlYRzVjZEZ4MFhIUmNkQ0FxSUhSb1pTQndjbTkwYjJOdmJDQnBjeUJyYm05M0lHSjFkQ0J1YjNRZ2IyNGdkR2hsSUc5MGFHVnlJSFIzYnlCdlltcGxZM1J6TGlCemRISmhibWRsUDF4eVhHNWNkRngwWEhSY2RDQXFJRndpVTJGdFpTQnZjbWxuYVc0Z2NHOXNhV041WENJZ2FIUjBjRG92TDJWdUxuZHBhMmx3WldScFlTNXZjbWN2ZDJscmFTOVRZVzFsWDI5eWFXZHBibDl3YjJ4cFkzbGNjbHh1WEhSY2RGeDBYSFFnS2k5Y2NseHVYSFJjZEZ4MFhIUmNjbHh1WEhSY2RGeDBYSFIyWVhJZ1pHOWpJRDBnYm5Wc2JEdGNjbHh1WEhSY2RGeDBYSFJjY2x4dVhIUmNkRngwWEhRdkx5QkpSVGdnWTJGelkyRmthVzVuSUdGalkyVnpjeUJqYUdWamExeHlYRzVjZEZ4MFhIUmNkSFJ5ZVNCN1hISmNibHgwWEhSY2RGeDBYSFJwWmlBb1puSmhiV1V1WTI5dWRHVnVkRmRwYm1SdmR5a2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmtiMk1nUFNCbWNtRnRaUzVqYjI1MFpXNTBWMmx1Wkc5M0xtUnZZM1Z0Wlc1ME8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RIMGdZMkYwWTJnb1pYSnlLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUXZMeUJKUlRnZ1lXTmpaWE56SUdSbGJtbGxaQ0IxYm1SbGNpQnpjMndnSmlCdGFYTnphVzVuSUhCeWIzUnZZMjlzWEhKY2JseDBYSFJjZEZ4MFhIUnNiMmNvSjJOaGJtNXZkQ0JuWlhRZ2FXWnlZVzFsTG1OdmJuUmxiblJYYVc1a2IzY2daRzlqZFcxbGJuUTZJQ2NnS3lCbGNuSXBPMXh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRngwYVdZZ0tHUnZZeWtnZXlBdkx5QnpkV05qWlhOelpuVnNJR2RsZEhScGJtY2dZMjl1ZEdWdWRGeHlYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJR1J2WXp0Y2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhSY2RIUnllU0I3SUM4dklITnBiWEJzZVNCamFHVmphMmx1WnlCdFlYa2dkR2h5YjNjZ2FXNGdhV1U0SUhWdVpHVnlJSE56YkNCdmNpQnRhWE50WVhSamFHVmtJSEJ5YjNSdlkyOXNYSEpjYmx4MFhIUmNkRngwWEhSa2IyTWdQU0JtY21GdFpTNWpiMjUwWlc1MFJHOWpkVzFsYm5RZ1B5Qm1jbUZ0WlM1amIyNTBaVzUwUkc5amRXMWxiblFnT2lCbWNtRnRaUzVrYjJOMWJXVnVkRHRjY2x4dVhIUmNkRngwWEhSOUlHTmhkR05vS0dWeWNpa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MEx5OGdiR0Z6ZENCaGRIUmxiWEIwWEhKY2JseDBYSFJjZEZ4MFhIUnNiMmNvSjJOaGJtNXZkQ0JuWlhRZ2FXWnlZVzFsTG1OdmJuUmxiblJFYjJOMWJXVnVkRG9nSnlBcklHVnljaWs3WEhKY2JseDBYSFJjZEZ4MFhIUmtiMk1nUFNCbWNtRnRaUzVrYjJOMWJXVnVkRHRjY2x4dVhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBjbVYwZFhKdUlHUnZZenRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBMeThnVW1GcGJITWdRMU5TUmlCb1lXTnJJQ2gwYUdGdWEzTWdkRzhnV1haaGJpQkNZWEowYUdWc1pXMTVLVnh5WEc1Y2RGeDBYSFIyWVhJZ1kzTnlabDkwYjJ0bGJpQTlJQ1FvSjIxbGRHRmJibUZ0WlQxamMzSm1MWFJ2YTJWdVhTY3BMbUYwZEhJb0oyTnZiblJsYm5RbktUdGNjbHh1WEhSY2RGeDBkbUZ5SUdOemNtWmZjR0Z5WVcwZ1BTQWtLQ2R0WlhSaFcyNWhiV1U5WTNOeVppMXdZWEpoYlYwbktTNWhkSFJ5S0NkamIyNTBaVzUwSnlrN1hISmNibHgwWEhSY2RHbG1JQ2hqYzNKbVgzQmhjbUZ0SUNZbUlHTnpjbVpmZEc5clpXNHBJSHRjY2x4dVhIUmNkRngwWEhSekxtVjRkSEpoUkdGMFlTQTlJSE11WlhoMGNtRkVZWFJoSUh4OElIdDlPMXh5WEc1Y2RGeDBYSFJjZEhNdVpYaDBjbUZFWVhSaFcyTnpjbVpmY0dGeVlXMWRJRDBnWTNOeVpsOTBiMnRsYmp0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwTHk4Z2RHRnJaU0JoSUdKeVpXRjBhQ0J6YnlCMGFHRjBJSEJsYm1ScGJtY2djbVZ3WVdsdWRITWdaMlYwSUhOdmJXVWdZM0IxSUhScGJXVWdZbVZtYjNKbElIUm9aU0IxY0d4dllXUWdjM1JoY25SelhISmNibHgwWEhSY2RHWjFibU4wYVc5dUlHUnZVM1ZpYldsMEtDa2dlMXh5WEc1Y2RGeDBYSFJjZEM4dklHMWhhMlVnYzNWeVpTQm1iM0p0SUdGMGRISnpJR0Z5WlNCelpYUmNjbHh1WEhSY2RGeDBYSFIyWVhJZ2RDQTlJQ1JtYjNKdExtRjBkSEl5S0NkMFlYSm5aWFFuS1N3Z1lTQTlJQ1JtYjNKdExtRjBkSEl5S0NkaFkzUnBiMjRuS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwTHk4Z2RYQmtZWFJsSUdadmNtMGdZWFIwY25NZ2FXNGdTVVVnWm5KcFpXNWtiSGtnZDJGNVhISmNibHgwWEhSY2RGeDBabTl5YlM1elpYUkJkSFJ5YVdKMWRHVW9KM1JoY21kbGRDY3NhV1FwTzF4eVhHNWNkRngwWEhSY2RHbG1JQ2doYldWMGFHOWtJSHg4SUM5d2IzTjBMMmt1ZEdWemRDaHRaWFJvYjJRcElDa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFptOXliUzV6WlhSQmRIUnlhV0oxZEdVb0oyMWxkR2h2WkNjc0lDZFFUMU5VSnlrN1hISmNibHgwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEdsbUlDaGhJQ0U5SUhNdWRYSnNLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUm1iM0p0TG5ObGRFRjBkSEpwWW5WMFpTZ25ZV04wYVc5dUp5d2djeTUxY213cE8xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RGeDBMeThnYVdVZ1ltOXlhM01nYVc0Z2MyOXRaU0JqWVhObGN5QjNhR1Z1SUhObGRIUnBibWNnWlc1amIyUnBibWRjY2x4dVhIUmNkRngwWEhScFppQW9JU0J6TG5OcmFYQkZibU52WkdsdVowOTJaWEp5YVdSbElDWW1JQ2doYldWMGFHOWtJSHg4SUM5d2IzTjBMMmt1ZEdWemRDaHRaWFJvYjJRcEtTa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MEpHWnZjbTB1WVhSMGNpaDdYSEpjYmx4MFhIUmNkRngwWEhSY2RHVnVZMjlrYVc1bk9pQW5iWFZzZEdsd1lYSjBMMlp2Y20wdFpHRjBZU2NzWEhKY2JseDBYSFJjZEZ4MFhIUmNkR1Z1WTNSNWNHVTZJQ0FuYlhWc2RHbHdZWEowTDJadmNtMHRaR0YwWVNkY2NseHVYSFJjZEZ4MFhIUmNkSDBwTzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MEx5OGdjM1Z3Y0c5eWRDQjBhVzF2ZFhSY2NseHVYSFJjZEZ4MFhIUnBaaUFvY3k1MGFXMWxiM1YwS1NCN1hISmNibHgwWEhSY2RGeDBYSFIwYVcxbGIzVjBTR0Z1Wkd4bElEMGdjMlYwVkdsdFpXOTFkQ2htZFc1amRHbHZiaWdwSUhzZ2RHbHRaV1JQZFhRZ1BTQjBjblZsT3lCallpaERURWxGVGxSZlZFbE5SVTlWVkY5QlFrOVNWQ2s3SUgwc0lITXVkR2x0Wlc5MWRDazdYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFF2THlCc2IyOXJJR1p2Y2lCelpYSjJaWElnWVdKdmNuUnpYSEpjYmx4MFhIUmNkRngwWm5WdVkzUnBiMjRnWTJobFkydFRkR0YwWlNncElIdGNjbHh1WEhSY2RGeDBYSFJjZEhSeWVTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RIWmhjaUJ6ZEdGMFpTQTlJR2RsZEVSdll5aHBieWt1Y21WaFpIbFRkR0YwWlR0Y2NseHVYSFJjZEZ4MFhIUmNkRngwYkc5bktDZHpkR0YwWlNBOUlDY2dLeUJ6ZEdGMFpTazdYSEpjYmx4MFhIUmNkRngwWEhSY2RHbG1JQ2h6ZEdGMFpTQW1KaUJ6ZEdGMFpTNTBiMHh2ZDJWeVEyRnpaU2dwSUQwOUlDZDFibWx1YVhScFlXeHBlbVZrSnlsY2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSelpYUlVhVzFsYjNWMEtHTm9aV05yVTNSaGRHVXNOVEFwTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEZ4MFkyRjBZMmdvWlNrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSc2IyY29KMU5sY25abGNpQmhZbTl5ZERvZ0p5QXNJR1VzSUNjZ0tDY3NJR1V1Ym1GdFpTd2dKeWtuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWTJJb1UwVlNWa1ZTWDBGQ1QxSlVLVHRjY2x4dVhIUmNkRngwWEhSY2RGeDBhV1lnS0hScGJXVnZkWFJJWVc1a2JHVXBYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBZMnhsWVhKVWFXMWxiM1YwS0hScGJXVnZkWFJJWVc1a2JHVXBPMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUjBhVzFsYjNWMFNHRnVaR3hsSUQwZ2RXNWtaV1pwYm1Wa08xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MEx5OGdZV1JrSUZ3aVpYaDBjbUZjSWlCa1lYUmhJSFJ2SUdadmNtMGdhV1lnY0hKdmRtbGtaV1FnYVc0Z2IzQjBhVzl1YzF4eVhHNWNkRngwWEhSY2RIWmhjaUJsZUhSeVlVbHVjSFYwY3lBOUlGdGRPMXh5WEc1Y2RGeDBYSFJjZEhSeWVTQjdYSEpjYmx4MFhIUmNkRngwWEhScFppQW9jeTVsZUhSeVlVUmhkR0VwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWm05eUlDaDJZWElnYmlCcGJpQnpMbVY0ZEhKaFJHRjBZU2tnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEdsbUlDaHpMbVY0ZEhKaFJHRjBZUzVvWVhOUGQyNVFjbTl3WlhKMGVTaHVLU2tnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJjZENBZ0lDOHZJR2xtSUhWemFXNW5JSFJvWlNBa0xuQmhjbUZ0SUdadmNtMWhkQ0IwYUdGMElHRnNiRzkzY3lCbWIzSWdiWFZzZEdsd2JHVWdkbUZzZFdWeklIZHBkR2dnZEdobElITmhiV1VnYm1GdFpWeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RDQWdJR2xtS0NRdWFYTlFiR0ZwYms5aWFtVmpkQ2h6TG1WNGRISmhSR0YwWVZ0dVhTa2dKaVlnY3k1bGVIUnlZVVJoZEdGYmJsMHVhR0Z6VDNkdVVISnZjR1Z5ZEhrb0oyNWhiV1VuS1NBbUppQnpMbVY0ZEhKaFJHRjBZVnR1WFM1b1lYTlBkMjVRY205d1pYSjBlU2duZG1Gc2RXVW5LU2tnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MElDQWdaWGgwY21GSmJuQjFkSE11Y0hWemFDaGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkQ0FnSUNRb0p6eHBibkIxZENCMGVYQmxQVndpYUdsa1pHVnVYQ0lnYm1GdFpUMWNJaWNyY3k1bGVIUnlZVVJoZEdGYmJsMHVibUZ0WlNzblhDSStKeWt1ZG1Gc0tITXVaWGgwY21GRVlYUmhXMjVkTG5aaGJIVmxLVnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhRZ0lDQXVZWEJ3Wlc1a1ZHOG9abTl5YlNsYk1GMHBPMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkQ0FnSUgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhRZ0lDQmxlSFJ5WVVsdWNIVjBjeTV3ZFhOb0tGeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBJQ0FnSkNnblBHbHVjSFYwSUhSNWNHVTlYQ0pvYVdSa1pXNWNJaUJ1WVcxbFBWd2lKeXR1S3lkY0lqNG5LUzUyWVd3b2N5NWxlSFJ5WVVSaGRHRmJibDBwWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RDQWdJQzVoY0hCbGJtUlVieWhtYjNKdEtWc3dYU2s3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwSUNBZ2ZWeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDZ2hjeTVwWm5KaGJXVlVZWEpuWlhRcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MEx5OGdZV1JrSUdsbWNtRnRaU0IwYnlCa2IyTWdZVzVrSUhOMVltMXBkQ0IwYUdVZ1ptOXliVnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUWthVzh1WVhCd1pXNWtWRzhvSjJKdlpIa25LVHRjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaHBieTVoZEhSaFkyaEZkbVZ1ZENsY2NseHVYSFJjZEZ4MFhIUmNkRngwYVc4dVlYUjBZV05vUlhabGJuUW9KMjl1Ykc5aFpDY3NJR05pS1R0Y2NseHVYSFJjZEZ4MFhIUmNkR1ZzYzJWY2NseHVYSFJjZEZ4MFhIUmNkRngwYVc4dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbmJHOWhaQ2NzSUdOaUxDQm1ZV3h6WlNrN1hISmNibHgwWEhSY2RGeDBYSFJ6WlhSVWFXMWxiM1YwS0dOb1pXTnJVM1JoZEdVc01UVXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkSFJ5ZVNCN1hISmNibHgwWEhSY2RGeDBYSFJjZEdadmNtMHVjM1ZpYldsMEtDazdYSEpjYmx4MFhIUmNkRngwWEhSOUlHTmhkR05vS0dWeWNpa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUXZMeUJxZFhOMElHbHVJR05oYzJVZ1ptOXliU0JvWVhNZ1pXeGxiV1Z1ZENCM2FYUm9JRzVoYldVdmFXUWdiMllnSjNOMVltMXBkQ2RjY2x4dVhIUmNkRngwWEhSY2RGeDBkbUZ5SUhOMVltMXBkRVp1SUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWm05eWJTY3BMbk4xWW0xcGREdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGMzVmliV2wwUm00dVlYQndiSGtvWm05eWJTazdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEdacGJtRnNiSGtnZTF4eVhHNWNkRngwWEhSY2RGeDBMeThnY21WelpYUWdZWFIwY25NZ1lXNWtJSEpsYlc5MlpTQmNJbVY0ZEhKaFhDSWdhVzV3ZFhRZ1pXeGxiV1Z1ZEhOY2NseHVYSFJjZEZ4MFhIUmNkR1p2Y20wdWMyVjBRWFIwY21saWRYUmxLQ2RoWTNScGIyNG5MR0VwTzF4eVhHNWNkRngwWEhSY2RGeDBhV1lvZENrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSbWIzSnRMbk5sZEVGMGRISnBZblYwWlNnbmRHRnlaMlYwSnl3Z2RDazdYSEpjYmx4MFhIUmNkRngwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFFrWm05eWJTNXlaVzF2ZG1WQmRIUnlLQ2QwWVhKblpYUW5LVHRjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBYSFJjZENRb1pYaDBjbUZKYm5CMWRITXBMbkpsYlc5MlpTZ3BPMXh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwYVdZZ0tITXVabTl5WTJWVGVXNWpLU0I3WEhKY2JseDBYSFJjZEZ4MFpHOVRkV0p0YVhRb0tUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJsYkhObElIdGNjbHh1WEhSY2RGeDBYSFJ6WlhSVWFXMWxiM1YwS0dSdlUzVmliV2wwTENBeE1DazdJQzh2SUhSb2FYTWdiR1YwY3lCa2IyMGdkWEJrWVhSbGN5QnlaVzVrWlhKY2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwZG1GeUlHUmhkR0VzSUdSdll5d2daRzl0UTJobFkydERiM1Z1ZENBOUlEVXdMQ0JqWVd4c1ltRmphMUJ5YjJObGMzTmxaRHRjY2x4dVhISmNibHgwWEhSY2RHWjFibU4wYVc5dUlHTmlLR1VwSUh0Y2NseHVYSFJjZEZ4MFhIUnBaaUFvZUdoeUxtRmliM0owWldRZ2ZId2dZMkZzYkdKaFkydFFjbTlqWlhOelpXUXBJSHRjY2x4dVhIUmNkRngwWEhSY2RISmxkSFZ5Ymp0Y2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwWEhKY2JseDBYSFJjZEZ4MFpHOWpJRDBnWjJWMFJHOWpLR2x2S1R0Y2NseHVYSFJjZEZ4MFhIUnBaaWdoWkc5aktTQjdYSEpjYmx4MFhIUmNkRngwWEhSc2IyY29KMk5oYm01dmRDQmhZMk5sYzNNZ2NtVnpjRzl1YzJVZ1pHOWpkVzFsYm5RbktUdGNjbHh1WEhSY2RGeDBYSFJjZEdVZ1BTQlRSVkpXUlZKZlFVSlBVbFE3WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkR2xtSUNobElEMDlQU0JEVEVsRlRsUmZWRWxOUlU5VlZGOUJRazlTVkNBbUppQjRhSElwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkSGhvY2k1aFltOXlkQ2duZEdsdFpXOTFkQ2NwTzF4eVhHNWNkRngwWEhSY2RGeDBaR1ZtWlhKeVpXUXVjbVZxWldOMEtIaG9jaXdnSjNScGJXVnZkWFFuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJqdGNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MFpXeHpaU0JwWmlBb1pTQTlQU0JUUlZKV1JWSmZRVUpQVWxRZ0ppWWdlR2h5S1NCN1hISmNibHgwWEhSY2RGeDBYSFI0YUhJdVlXSnZjblFvSjNObGNuWmxjaUJoWW05eWRDY3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MFpHVm1aWEp5WldRdWNtVnFaV04wS0hob2Npd2dKMlZ5Y205eUp5d2dKM05sY25abGNpQmhZbTl5ZENjcE8xeHlYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVPMXh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRngwYVdZZ0tDRmtiMk1nZkh3Z1pHOWpMbXh2WTJGMGFXOXVMbWh5WldZZ1BUMGdjeTVwWm5KaGJXVlRjbU1wSUh0Y2NseHVYSFJjZEZ4MFhIUmNkQzh2SUhKbGMzQnZibk5sSUc1dmRDQnlaV05sYVhabFpDQjVaWFJjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2doZEdsdFpXUlBkWFFwWEhKY2JseDBYSFJjZEZ4MFhIUmNkSEpsZEhWeWJqdGNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MGFXWWdLR2x2TG1SbGRHRmphRVYyWlc1MEtWeHlYRzVjZEZ4MFhIUmNkRngwYVc4dVpHVjBZV05vUlhabGJuUW9KMjl1Ykc5aFpDY3NJR05pS1R0Y2NseHVYSFJjZEZ4MFhIUmxiSE5sWEhKY2JseDBYSFJjZEZ4MFhIUnBieTV5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5S0Nkc2IyRmtKeXdnWTJJc0lHWmhiSE5sS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwZG1GeUlITjBZWFIxY3lBOUlDZHpkV05qWlhOekp5d2daWEp5VFhObk8xeHlYRzVjZEZ4MFhIUmNkSFJ5ZVNCN1hISmNibHgwWEhSY2RGeDBYSFJwWmlBb2RHbHRaV1JQZFhRcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGRHaHliM2NnSjNScGJXVnZkWFFuTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkSFpoY2lCcGMxaHRiQ0E5SUhNdVpHRjBZVlI1Y0dVZ1BUMGdKM2h0YkNjZ2ZId2daRzlqTGxoTlRFUnZZM1Z0Wlc1MElIeDhJQ1F1YVhOWVRVeEViMk1vWkc5aktUdGNjbHh1WEhSY2RGeDBYSFJjZEd4dlp5Z25hWE5ZYld3OUp5dHBjMWh0YkNrN1hISmNibHgwWEhSY2RGeDBYSFJwWmlBb0lXbHpXRzFzSUNZbUlIZHBibVJ2ZHk1dmNHVnlZU0FtSmlBb1pHOWpMbUp2WkhrZ1BUMDlJRzUxYkd3Z2ZId2dJV1J2WXk1aWIyUjVMbWx1Ym1WeVNGUk5UQ2twSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwYVdZZ0tDMHRaRzl0UTJobFkydERiM1Z1ZENrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RDOHZJR2x1SUhOdmJXVWdZbkp2ZDNObGNuTWdLRTl3WlhKaEtTQjBhR1VnYVdaeVlXMWxJRVJQVFNCcGN5QnViM1FnWVd4M1lYbHpJSFJ5WVhabGNuTmhZbXhsSUhkb1pXNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUXZMeUIwYUdVZ2IyNXNiMkZrSUdOaGJHeGlZV05ySUdacGNtVnpMQ0J6YnlCM1pTQnNiMjl3SUdFZ1ltbDBJSFJ2SUdGalkyOXRiVzlrWVhSbFhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MGJHOW5LQ2R5WlhGMVpXbHVaeUJ2Ymt4dllXUWdZMkZzYkdKaFkyc3NJRVJQVFNCdWIzUWdZWFpoYVd4aFlteGxKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwYzJWMFZHbHRaVzkxZENoallpd2dNalV3S1R0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSeVpYUjFjbTQ3WEhKY2JseDBYSFJjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSY2RGeDBMeThnYkdWMElIUm9hWE1nWm1Gc2JDQjBhSEp2ZFdkb0lHSmxZMkYxYzJVZ2MyVnlkbVZ5SUhKbGMzQnZibk5sSUdOdmRXeGtJR0psSUdGdUlHVnRjSFI1SUdSdlkzVnRaVzUwWEhKY2JseDBYSFJjZEZ4MFhIUmNkQzh2Ykc5bktDZERiM1ZzWkNCdWIzUWdZV05qWlhOeklHbG1jbUZ0WlNCRVQwMGdZV1owWlhJZ2JYVjBhWEJzWlNCMGNtbGxjeTRuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkRngwTHk5MGFISnZkeUFuUkU5TlJYaGpaWEIwYVc5dU9pQnViM1FnWVhaaGFXeGhZbXhsSnp0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RGeDBYSFF2TDJ4dlp5Z25jbVZ6Y0c5dWMyVWdaR1YwWldOMFpXUW5LVHRjY2x4dVhIUmNkRngwWEhSY2RIWmhjaUJrYjJOU2IyOTBJRDBnWkc5akxtSnZaSGtnUHlCa2IyTXVZbTlrZVNBNklHUnZZeTVrYjJOMWJXVnVkRVZzWlcxbGJuUTdYSEpjYmx4MFhIUmNkRngwWEhSNGFISXVjbVZ6Y0c5dWMyVlVaWGgwSUQwZ1pHOWpVbTl2ZENBL0lHUnZZMUp2YjNRdWFXNXVaWEpJVkUxTUlEb2diblZzYkR0Y2NseHVYSFJjZEZ4MFhIUmNkSGhvY2k1eVpYTndiMjV6WlZoTlRDQTlJR1J2WXk1WVRVeEViMk4xYldWdWRDQS9JR1J2WXk1WVRVeEViMk4xYldWdWRDQTZJR1J2WXp0Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNocGMxaHRiQ2xjY2x4dVhIUmNkRngwWEhSY2RGeDBjeTVrWVhSaFZIbHdaU0E5SUNkNGJXd25PMXh5WEc1Y2RGeDBYSFJjZEZ4MGVHaHlMbWRsZEZKbGMzQnZibk5sU0dWaFpHVnlJRDBnWm5WdVkzUnBiMjRvYUdWaFpHVnlLWHRjY2x4dVhIUmNkRngwWEhSY2RGeDBkbUZ5SUdobFlXUmxjbk1nUFNCN0oyTnZiblJsYm5RdGRIbHdaU2M2SUhNdVpHRjBZVlI1Y0dWOU8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSeVpYUjFjbTRnYUdWaFpHVnljMXRvWldGa1pYSXVkRzlNYjNkbGNrTmhjMlVvS1YwN1hISmNibHgwWEhSY2RGeDBYSFI5TzF4eVhHNWNkRngwWEhSY2RGeDBMeThnYzNWd2NHOXlkQ0JtYjNJZ1dFaFNJQ2R6ZEdGMGRYTW5JQ1lnSjNOMFlYUjFjMVJsZUhRbklHVnRkV3hoZEdsdmJpQTZYSEpjYmx4MFhIUmNkRngwWEhScFppQW9aRzlqVW05dmRDa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUjRhSEl1YzNSaGRIVnpJRDBnVG5WdFltVnlLQ0JrYjJOU2IyOTBMbWRsZEVGMGRISnBZblYwWlNnbmMzUmhkSFZ6SnlrZ0tTQjhmQ0I0YUhJdWMzUmhkSFZ6TzF4eVhHNWNkRngwWEhSY2RGeDBYSFI0YUhJdWMzUmhkSFZ6VkdWNGRDQTlJR1J2WTFKdmIzUXVaMlYwUVhSMGNtbGlkWFJsS0NkemRHRjBkWE5VWlhoMEp5a2dmSHdnZUdoeUxuTjBZWFIxYzFSbGVIUTdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGRtRnlJR1IwSUQwZ0tITXVaR0YwWVZSNWNHVWdmSHdnSnljcExuUnZURzkzWlhKRFlYTmxLQ2s3WEhKY2JseDBYSFJjZEZ4MFhIUjJZWElnYzJOeUlEMGdMeWhxYzI5dWZITmpjbWx3ZEh4MFpYaDBLUzh1ZEdWemRDaGtkQ2s3WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvYzJOeUlIeDhJSE11ZEdWNGRHRnlaV0VwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwTHk4Z2MyVmxJR2xtSUhWelpYSWdaVzFpWldSa1pXUWdjbVZ6Y0c5dWMyVWdhVzRnZEdWNGRHRnlaV0ZjY2x4dVhIUmNkRngwWEhSY2RGeDBkbUZ5SUhSaElEMGdaRzlqTG1kbGRFVnNaVzFsYm5SelFubFVZV2RPWVcxbEtDZDBaWGgwWVhKbFlTY3BXekJkTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJwWmlBb2RHRXBJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFI0YUhJdWNtVnpjRzl1YzJWVVpYaDBJRDBnZEdFdWRtRnNkV1U3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwTHk4Z2MzVndjRzl5ZENCbWIzSWdXRWhTSUNkemRHRjBkWE1uSUNZZ0ozTjBZWFIxYzFSbGVIUW5JR1Z0ZFd4aGRHbHZiaUE2WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwZUdoeUxuTjBZWFIxY3lBOUlFNTFiV0psY2lnZ2RHRXVaMlYwUVhSMGNtbGlkWFJsS0NkemRHRjBkWE1uS1NBcElIeDhJSGhvY2k1emRHRjBkWE03WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwZUdoeUxuTjBZWFIxYzFSbGVIUWdQU0IwWVM1blpYUkJkSFJ5YVdKMWRHVW9KM04wWVhSMWMxUmxlSFFuS1NCOGZDQjRhSEl1YzNSaGRIVnpWR1Y0ZER0Y2NseHVYSFJjZEZ4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RGeDBYSFJsYkhObElHbG1JQ2h6WTNJcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUXZMeUJoWTJOdmRXNTBJR1p2Y2lCaWNtOTNjMlZ5Y3lCcGJtcGxZM1JwYm1jZ2NISmxJR0Z5YjNWdVpDQnFjMjl1SUhKbGMzQnZibk5sWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwZG1GeUlIQnlaU0E5SUdSdll5NW5aWFJGYkdWdFpXNTBjMEo1VkdGblRtRnRaU2duY0hKbEp5bGJNRjA3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwZG1GeUlHSWdQU0JrYjJNdVoyVjBSV3hsYldWdWRITkNlVlJoWjA1aGJXVW9KMkp2WkhrbktWc3dYVHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJwWmlBb2NISmxLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSNGFISXVjbVZ6Y0c5dWMyVlVaWGgwSUQwZ2NISmxMblJsZUhSRGIyNTBaVzUwSUQ4Z2NISmxMblJsZUhSRGIyNTBaVzUwSURvZ2NISmxMbWx1Ym1WeVZHVjRkRHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWld4elpTQnBaaUFvWWlrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBlR2h5TG5KbGMzQnZibk5sVkdWNGRDQTlJR0l1ZEdWNGRFTnZiblJsYm5RZ1B5QmlMblJsZUhSRGIyNTBaVzUwSURvZ1lpNXBibTVsY2xSbGVIUTdYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBYSFJsYkhObElHbG1JQ2hrZENBOVBTQW5lRzFzSnlBbUppQWhlR2h5TG5KbGMzQnZibk5sV0UxTUlDWW1JSGhvY2k1eVpYTndiMjV6WlZSbGVIUXBJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBlR2h5TG5KbGMzQnZibk5sV0UxTUlEMGdkRzlZYld3b2VHaHlMbkpsYzNCdmJuTmxWR1Y0ZENrN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwZEhKNUlIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFpHRjBZU0E5SUdoMGRIQkVZWFJoS0hob2Npd2daSFFzSUhNcE8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RGeDBZMkYwWTJnZ0tHVnljaWtnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJ6ZEdGMGRYTWdQU0FuY0dGeWMyVnlaWEp5YjNJbk8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSNGFISXVaWEp5YjNJZ1BTQmxjbkpOYzJjZ1BTQW9aWEp5SUh4OElITjBZWFIxY3lrN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkR05oZEdOb0lDaGxjbklwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkR3h2WnlnblpYSnliM0lnWTJGMVoyaDBPaUFuTEdWeWNpazdYSEpjYmx4MFhIUmNkRngwWEhSemRHRjBkWE1nUFNBblpYSnliM0luTzF4eVhHNWNkRngwWEhSY2RGeDBlR2h5TG1WeWNtOXlJRDBnWlhKeVRYTm5JRDBnS0dWeWNpQjhmQ0J6ZEdGMGRYTXBPMXh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRngwYVdZZ0tIaG9jaTVoWW05eWRHVmtLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUnNiMmNvSjNWd2JHOWhaQ0JoWW05eWRHVmtKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUnpkR0YwZFhNZ1BTQnVkV3hzTzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MGFXWWdLSGhvY2k1emRHRjBkWE1wSUhzZ0x5OGdkMlVuZG1VZ2MyVjBJSGhvY2k1emRHRjBkWE5jY2x4dVhIUmNkRngwWEhSY2RITjBZWFIxY3lBOUlDaDRhSEl1YzNSaGRIVnpJRDQ5SURJd01DQW1KaUI0YUhJdWMzUmhkSFZ6SUR3Z016QXdJSHg4SUhob2NpNXpkR0YwZFhNZ1BUMDlJRE13TkNrZ1B5QW5jM1ZqWTJWemN5Y2dPaUFuWlhKeWIzSW5PMXh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRngwTHk4Z2IzSmtaWEpwYm1jZ2IyWWdkR2hsYzJVZ1kyRnNiR0poWTJ0ekwzUnlhV2RuWlhKeklHbHpJRzlrWkN3Z1luVjBJSFJvWVhRbmN5Qm9iM2NnSkM1aGFtRjRJR1J2WlhNZ2FYUmNjbHh1WEhSY2RGeDBYSFJwWmlBb2MzUmhkSFZ6SUQwOVBTQW5jM1ZqWTJWemN5Y3BJSHRjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2h6TG5OMVkyTmxjM01wWEhKY2JseDBYSFJjZEZ4MFhIUmNkSE11YzNWalkyVnpjeTVqWVd4c0tITXVZMjl1ZEdWNGRDd2daR0YwWVN3Z0ozTjFZMk5sYzNNbkxDQjRhSElwTzF4eVhHNWNkRngwWEhSY2RGeDBaR1ZtWlhKeVpXUXVjbVZ6YjJ4MlpTaDRhSEl1Y21WemNHOXVjMlZVWlhoMExDQW5jM1ZqWTJWemN5Y3NJSGhvY2lrN1hISmNibHgwWEhSY2RGeDBYSFJwWmlBb1p5bGNjbHh1WEhSY2RGeDBYSFJjZEZ4MEpDNWxkbVZ1ZEM1MGNtbG5aMlZ5S0Z3aVlXcGhlRk4xWTJObGMzTmNJaXdnVzNob2Npd2djMTBwTzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBYSFJsYkhObElHbG1JQ2h6ZEdGMGRYTXBJSHRjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2hsY25KTmMyY2dQVDA5SUhWdVpHVm1hVzVsWkNsY2NseHVYSFJjZEZ4MFhIUmNkRngwWlhKeVRYTm5JRDBnZUdoeUxuTjBZWFIxYzFSbGVIUTdYSEpjYmx4MFhIUmNkRngwWEhScFppQW9jeTVsY25KdmNpbGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGN5NWxjbkp2Y2k1allXeHNLSE11WTI5dWRHVjRkQ3dnZUdoeUxDQnpkR0YwZFhNc0lHVnljazF6WnlrN1hISmNibHgwWEhSY2RGeDBYSFJrWldabGNuSmxaQzV5WldwbFkzUW9lR2h5TENBblpYSnliM0luTENCbGNuSk5jMmNwTzF4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0djcFhISmNibHgwWEhSY2RGeDBYSFJjZENRdVpYWmxiblF1ZEhKcFoyZGxjaWhjSW1GcVlYaEZjbkp2Y2x3aUxDQmJlR2h5TENCekxDQmxjbkpOYzJkZEtUdGNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUmNkR2xtSUNobktWeHlYRzVjZEZ4MFhIUmNkRngwSkM1bGRtVnVkQzUwY21sbloyVnlLRndpWVdwaGVFTnZiWEJzWlhSbFhDSXNJRnQ0YUhJc0lITmRLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBhV1lnS0djZ0ppWWdJU0F0TFNRdVlXTjBhWFpsS1NCN1hISmNibHgwWEhSY2RGeDBYSFFrTG1WMlpXNTBMblJ5YVdkblpYSW9YQ0poYW1GNFUzUnZjRndpS1R0Y2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhSY2RHbG1JQ2h6TG1OdmJYQnNaWFJsS1Z4eVhHNWNkRngwWEhSY2RGeDBjeTVqYjIxd2JHVjBaUzVqWVd4c0tITXVZMjl1ZEdWNGRDd2dlR2h5TENCemRHRjBkWE1wTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJqWVd4c1ltRmphMUJ5YjJObGMzTmxaQ0E5SUhSeWRXVTdYSEpjYmx4MFhIUmNkRngwYVdZZ0tITXVkR2x0Wlc5MWRDbGNjbHh1WEhSY2RGeDBYSFJjZEdOc1pXRnlWR2x0Wlc5MWRDaDBhVzFsYjNWMFNHRnVaR3hsS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwTHk4Z1kyeGxZVzRnZFhCY2NseHVYSFJjZEZ4MFhIUnpaWFJVYVcxbGIzVjBLR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0NGekxtbG1jbUZ0WlZSaGNtZGxkQ2xjY2x4dVhIUmNkRngwWEhSY2RGeDBKR2x2TG5KbGJXOTJaU2dwTzF4eVhHNWNkRngwWEhSY2RGeDBaV3h6WlNBZ0x5OWhaR1JwYm1jZ1pXeHpaU0IwYnlCamJHVmhiaUIxY0NCbGVHbHpkR2x1WnlCcFpuSmhiV1VnY21WemNHOXVjMlV1WEhKY2JseDBYSFJjZEZ4MFhIUmNkQ1JwYnk1aGRIUnlLQ2R6Y21NbkxDQnpMbWxtY21GdFpWTnlZeWs3WEhKY2JseDBYSFJjZEZ4MFhIUjRhSEl1Y21WemNHOXVjMlZZVFV3Z1BTQnVkV3hzTzF4eVhHNWNkRngwWEhSY2RIMHNJREV3TUNrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEhaaGNpQjBiMWh0YkNBOUlDUXVjR0Z5YzJWWVRVd2dmSHdnWm5WdVkzUnBiMjRvY3l3Z1pHOWpLU0I3SUM4dklIVnpaU0J3WVhKelpWaE5UQ0JwWmlCaGRtRnBiR0ZpYkdVZ0tHcFJkV1Z5ZVNBeExqVXJLVnh5WEc1Y2RGeDBYSFJjZEdsbUlDaDNhVzVrYjNjdVFXTjBhWFpsV0U5aWFtVmpkQ2tnZTF4eVhHNWNkRngwWEhSY2RGeDBaRzlqSUQwZ2JtVjNJRUZqZEdsMlpWaFBZbXBsWTNRb0owMXBZM0p2YzI5bWRDNVlUVXhFVDAwbktUdGNjbHh1WEhSY2RGeDBYSFJjZEdSdll5NWhjM2x1WXlBOUlDZG1ZV3h6WlNjN1hISmNibHgwWEhSY2RGeDBYSFJrYjJNdWJHOWhaRmhOVENoektUdGNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MFpXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmtiMk1nUFNBb2JtVjNJRVJQVFZCaGNuTmxjaWdwS1M1d1lYSnpaVVp5YjIxVGRISnBibWNvY3l3Z0ozUmxlSFF2ZUcxc0p5azdYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RISmxkSFZ5YmlBb1pHOWpJQ1ltSUdSdll5NWtiMk4xYldWdWRFVnNaVzFsYm5RZ0ppWWdaRzlqTG1SdlkzVnRaVzUwUld4bGJXVnVkQzV1YjJSbFRtRnRaU0FoUFNBbmNHRnljMlZ5WlhKeWIzSW5LU0EvSUdSdll5QTZJRzUxYkd3N1hISmNibHgwWEhSY2RIMDdYSEpjYmx4MFhIUmNkSFpoY2lCd1lYSnpaVXBUVDA0Z1BTQWtMbkJoY25ObFNsTlBUaUI4ZkNCbWRXNWpkR2x2YmloektTQjdYSEpjYmx4MFhIUmNkRngwTHlwcWMyeHBiblFnWlhacGJEcDBjblZsSUNvdlhISmNibHgwWEhSY2RGeDBjbVYwZFhKdUlIZHBibVJ2ZDFzblpYWmhiQ2RkS0Njb0p5QXJJSE1nS3lBbktTY3BPMXh5WEc1Y2RGeDBYSFI5TzF4eVhHNWNjbHh1WEhSY2RGeDBkbUZ5SUdoMGRIQkVZWFJoSUQwZ1puVnVZM1JwYjI0b0lIaG9jaXdnZEhsd1pTd2djeUFwSUhzZ0x5OGdiVzl6ZEd4NUlHeHBablJsWkNCbWNtOXRJR3B4TVM0MExqUmNjbHh1WEhKY2JseDBYSFJjZEZ4MGRtRnlJR04wSUQwZ2VHaHlMbWRsZEZKbGMzQnZibk5sU0dWaFpHVnlLQ2RqYjI1MFpXNTBMWFI1Y0dVbktTQjhmQ0FuSnl4Y2NseHVYSFJjZEZ4MFhIUmNkSGh0YkNBOUlIUjVjR1VnUFQwOUlDZDRiV3duSUh4OElDRjBlWEJsSUNZbUlHTjBMbWx1WkdWNFQyWW9KM2h0YkNjcElENDlJREFzWEhKY2JseDBYSFJjZEZ4MFhIUmtZWFJoSUQwZ2VHMXNJRDhnZUdoeUxuSmxjM0J2Ym5ObFdFMU1JRG9nZUdoeUxuSmxjM0J2Ym5ObFZHVjRkRHRjY2x4dVhISmNibHgwWEhSY2RGeDBhV1lnS0hodGJDQW1KaUJrWVhSaExtUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEM1dWIyUmxUbUZ0WlNBOVBUMGdKM0JoY25ObGNtVnljbTl5SnlrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tDUXVaWEp5YjNJcFhISmNibHgwWEhSY2RGeDBYSFJjZENRdVpYSnliM0lvSjNCaGNuTmxjbVZ5Y205eUp5azdYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RHbG1JQ2h6SUNZbUlITXVaR0YwWVVacGJIUmxjaWtnZTF4eVhHNWNkRngwWEhSY2RGeDBaR0YwWVNBOUlITXVaR0YwWVVacGJIUmxjaWhrWVhSaExDQjBlWEJsS1R0Y2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwYVdZZ0tIUjVjR1Z2WmlCa1lYUmhJRDA5UFNBbmMzUnlhVzVuSnlrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tIUjVjR1VnUFQwOUlDZHFjMjl1SnlCOGZDQWhkSGx3WlNBbUppQmpkQzVwYm1SbGVFOW1LQ2RxYzI5dUp5a2dQajBnTUNrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSa1lYUmhJRDBnY0dGeWMyVktVMDlPS0dSaGRHRXBPMXh5WEc1Y2RGeDBYSFJjZEZ4MGZTQmxiSE5sSUdsbUlDaDBlWEJsSUQwOVBTQmNJbk5qY21sd2RGd2lJSHg4SUNGMGVYQmxJQ1ltSUdOMExtbHVaR1Y0VDJZb1hDSnFZWFpoYzJOeWFYQjBYQ0lwSUQ0OUlEQXBJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBKQzVuYkc5aVlXeEZkbUZzS0dSaGRHRXBPMXh5WEc1Y2RGeDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSeVpYUjFjbTRnWkdGMFlUdGNjbHh1WEhSY2RGeDBmVHRjY2x4dVhISmNibHgwWEhSY2RISmxkSFZ5YmlCa1pXWmxjbkpsWkR0Y2NseHVYSFJjZEgxY2NseHVYSFI5TzF4eVhHNWNjbHh1WEhRdktpcGNjbHh1WEhRZ0tpQmhhbUY0Um05eWJTZ3BJSEJ5YjNacFpHVnpJR0VnYldWamFHRnVhWE50SUdadmNpQm1kV3hzZVNCaGRYUnZiV0YwYVc1bklHWnZjbTBnYzNWaWJXbHpjMmx2Ymk1Y2NseHVYSFFnS2x4eVhHNWNkQ0FxSUZSb1pTQmhaSFpoYm5SaFoyVnpJRzltSUhWemFXNW5JSFJvYVhNZ2JXVjBhRzlrSUdsdWMzUmxZV1FnYjJZZ1lXcGhlRk4xWW0xcGRDZ3BJR0Z5WlRwY2NseHVYSFFnS2x4eVhHNWNkQ0FxSURFNklGUm9hWE1nYldWMGFHOWtJSGRwYkd3Z2FXNWpiSFZrWlNCamIyOXlaR2x1WVhSbGN5Qm1iM0lnUEdsdWNIVjBJSFI1Y0dVOVhDSnBiV0ZuWlZ3aUlDOCtJR1ZzWlcxbGJuUnpJQ2hwWmlCMGFHVWdaV3hsYldWdWRGeHlYRzVjZENBcUlDQWdJR2x6SUhWelpXUWdkRzhnYzNWaWJXbDBJSFJvWlNCbWIzSnRLUzVjY2x4dVhIUWdLaUF5TGlCVWFHbHpJRzFsZEdodlpDQjNhV3hzSUdsdVkyeDFaR1VnZEdobElITjFZbTFwZENCbGJHVnRaVzUwSjNNZ2JtRnRaUzkyWVd4MVpTQmtZWFJoSUNobWIzSWdkR2hsSUdWc1pXMWxiblFnZEdoaGRDQjNZWE5jY2x4dVhIUWdLaUFnSUNCMWMyVmtJSFJ2SUhOMVltMXBkQ0IwYUdVZ1ptOXliU2t1WEhKY2JseDBJQ29nTXk0Z1ZHaHBjeUJ0WlhSb2IyUWdZbWx1WkhNZ2RHaGxJSE4xWW0xcGRDZ3BJRzFsZEdodlpDQjBieUIwYUdVZ1ptOXliU0JtYjNJZ2VXOTFMbHh5WEc1Y2RDQXFYSEpjYmx4MElDb2dWR2hsSUc5d2RHbHZibk1nWVhKbmRXMWxiblFnWm05eUlHRnFZWGhHYjNKdElIZHZjbXR6SUdWNFlXTjBiSGtnWVhNZ2FYUWdaRzlsY3lCbWIzSWdZV3BoZUZOMVltMXBkQzRnSUdGcVlYaEdiM0p0SUcxbGNtVnNlVnh5WEc1Y2RDQXFJSEJoYzNObGN5QjBhR1VnYjNCMGFXOXVjeUJoY21kMWJXVnVkQ0JoYkc5dVp5QmhablJsY2lCd2NtOXdaWEpzZVNCaWFXNWthVzVuSUdWMlpXNTBjeUJtYjNJZ2MzVmliV2wwSUdWc1pXMWxiblJ6SUdGdVpGeHlYRzVjZENBcUlIUm9aU0JtYjNKdElHbDBjMlZzWmk1Y2NseHVYSFFnS2k5Y2NseHVYSFFrTG1adUxtRnFZWGhHYjNKdElEMGdablZ1WTNScGIyNG9iM0IwYVc5dWN5a2dlMXh5WEc1Y2RGeDBiM0IwYVc5dWN5QTlJRzl3ZEdsdmJuTWdmSHdnZTMwN1hISmNibHgwWEhSdmNIUnBiMjV6TG1SbGJHVm5ZWFJwYjI0Z1BTQnZjSFJwYjI1ekxtUmxiR1ZuWVhScGIyNGdKaVlnSkM1cGMwWjFibU4wYVc5dUtDUXVabTR1YjI0cE8xeHlYRzVjY2x4dVhIUmNkQzh2SUdsdUlHcFJkV1Z5ZVNBeExqTXJJSGRsSUdOaGJpQm1hWGdnYldsemRHRnJaWE1nZDJsMGFDQjBhR1VnY21WaFpIa2djM1JoZEdWY2NseHVYSFJjZEdsbUlDZ2hiM0IwYVc5dWN5NWtaV3hsWjJGMGFXOXVJQ1ltSUhSb2FYTXViR1Z1WjNSb0lEMDlQU0F3S1NCN1hISmNibHgwWEhSY2RIWmhjaUJ2SUQwZ2V5QnpPaUIwYUdsekxuTmxiR1ZqZEc5eUxDQmpPaUIwYUdsekxtTnZiblJsZUhRZ2ZUdGNjbHh1WEhSY2RGeDBhV1lnS0NFa0xtbHpVbVZoWkhrZ0ppWWdieTV6S1NCN1hISmNibHgwWEhSY2RGeDBiRzluS0NkRVQwMGdibTkwSUhKbFlXUjVMQ0J4ZFdWMWFXNW5JR0ZxWVhoR2IzSnRKeWs3WEhKY2JseDBYSFJjZEZ4MEpDaG1kVzVqZEdsdmJpZ3BJSHRjY2x4dVhIUmNkRngwWEhSY2RDUW9ieTV6TEc4dVl5a3VZV3BoZUVadmNtMG9iM0IwYVc5dWN5azdYSEpjYmx4MFhIUmNkRngwZlNrN1hISmNibHgwWEhSY2RGeDBjbVYwZFhKdUlIUm9hWE03WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEZ4MEx5OGdhWE1nZVc5MWNpQkVUMDBnY21WaFpIay9JQ0JvZEhSd09pOHZaRzlqY3k1cWNYVmxjbmt1WTI5dEwxUjFkRzl5YVdGc2N6cEpiblJ5YjJSMVkybHVaMThrS0dSdlkzVnRaVzUwS1M1eVpXRmtlU2dwWEhKY2JseDBYSFJjZEd4dlp5Z25kR1Z5YldsdVlYUnBibWM3SUhwbGNtOGdaV3hsYldWdWRITWdabTkxYm1RZ1lua2djMlZzWldOMGIzSW5JQ3NnS0NRdWFYTlNaV0ZrZVNBL0lDY25JRG9nSnlBb1JFOU5JRzV2ZENCeVpXRmtlU2tuS1NrN1hISmNibHgwWEhSY2RISmxkSFZ5YmlCMGFHbHpPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEdsbUlDZ2diM0IwYVc5dWN5NWtaV3hsWjJGMGFXOXVJQ2tnZTF4eVhHNWNkRngwWEhRa0tHUnZZM1Z0Wlc1MEtWeHlYRzVjZEZ4MFhIUmNkQzV2Wm1Zb0ozTjFZbTFwZEM1bWIzSnRMWEJzZFdkcGJpY3NJSFJvYVhNdWMyVnNaV04wYjNJc0lHUnZRV3BoZUZOMVltMXBkQ2xjY2x4dVhIUmNkRngwWEhRdWIyWm1LQ2RqYkdsamF5NW1iM0p0TFhCc2RXZHBiaWNzSUhSb2FYTXVjMlZzWldOMGIzSXNJR05oY0hSMWNtVlRkV0p0YVhSMGFXNW5SV3hsYldWdWRDbGNjbHh1WEhSY2RGeDBYSFF1YjI0b0ozTjFZbTFwZEM1bWIzSnRMWEJzZFdkcGJpY3NJSFJvYVhNdWMyVnNaV04wYjNJc0lHOXdkR2x2Ym5Nc0lHUnZRV3BoZUZOMVltMXBkQ2xjY2x4dVhIUmNkRngwWEhRdWIyNG9KMk5zYVdOckxtWnZjbTB0Y0d4MVoybHVKeXdnZEdocGN5NXpaV3hsWTNSdmNpd2diM0IwYVc5dWN5d2dZMkZ3ZEhWeVpWTjFZbTFwZEhScGJtZEZiR1Z0Wlc1MEtUdGNjbHh1WEhSY2RGeDBjbVYwZFhKdUlIUm9hWE03WEhKY2JseDBYSFI5WEhKY2JseHlYRzVjZEZ4MGNtVjBkWEp1SUhSb2FYTXVZV3BoZUVadmNtMVZibUpwYm1Rb0tWeHlYRzVjZEZ4MFhIUXVZbWx1WkNnbmMzVmliV2wwTG1admNtMHRjR3gxWjJsdUp5d2diM0IwYVc5dWN5d2daRzlCYW1GNFUzVmliV2wwS1Z4eVhHNWNkRngwWEhRdVltbHVaQ2duWTJ4cFkyc3VabTl5YlMxd2JIVm5hVzRuTENCdmNIUnBiMjV6TENCallYQjBkWEpsVTNWaWJXbDBkR2x1WjBWc1pXMWxiblFwTzF4eVhHNWNkSDA3WEhKY2JseHlYRzVjZEM4dklIQnlhWFpoZEdVZ1pYWmxiblFnYUdGdVpHeGxjbk5jY2x4dVhIUm1kVzVqZEdsdmJpQmtiMEZxWVhoVGRXSnRhWFFvWlNrZ2UxeHlYRzVjZEZ4MEx5cHFjMmhwYm5RZ2RtRnNhV1IwYUdsek9uUnlkV1VnS2k5Y2NseHVYSFJjZEhaaGNpQnZjSFJwYjI1eklEMGdaUzVrWVhSaE8xeHlYRzVjZEZ4MGFXWWdLQ0ZsTG1selJHVm1ZWFZzZEZCeVpYWmxiblJsWkNncEtTQjdJQzh2SUdsbUlHVjJaVzUwSUdoaGN5QmlaV1Z1SUdOaGJtTmxiR1ZrTENCa2IyNG5kQ0J3Y205alpXVmtYSEpjYmx4MFhIUmNkR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjY2x4dVhIUmNkRngwSkNobExuUmhjbWRsZENrdVlXcGhlRk4xWW0xcGRDaHZjSFJwYjI1ektUc2dMeThnSXpNMk5WeHlYRzVjZEZ4MGZWeHlYRzVjZEgxY2NseHVYSEpjYmx4MFpuVnVZM1JwYjI0Z1kyRndkSFZ5WlZOMVltMXBkSFJwYm1kRmJHVnRaVzUwS0dVcElIdGNjbHh1WEhSY2RDOHFhbk5vYVc1MElIWmhiR2xrZEdocGN6cDBjblZsSUNvdlhISmNibHgwWEhSMllYSWdkR0Z5WjJWMElEMGdaUzUwWVhKblpYUTdYSEpjYmx4MFhIUjJZWElnSkdWc0lEMGdKQ2gwWVhKblpYUXBPMXh5WEc1Y2RGeDBhV1lnS0NFb0pHVnNMbWx6S0Z3aVczUjVjR1U5YzNWaWJXbDBYU3hiZEhsd1pUMXBiV0ZuWlYxY0lpa3BLU0I3WEhKY2JseDBYSFJjZEM4dklHbHpJSFJvYVhNZ1lTQmphR2xzWkNCbGJHVnRaVzUwSUc5bUlIUm9aU0J6ZFdKdGFYUWdaV3cvSUNBb1pYZzZJR0VnYzNCaGJpQjNhWFJvYVc0Z1lTQmlkWFIwYjI0cFhISmNibHgwWEhSY2RIWmhjaUIwSUQwZ0pHVnNMbU5zYjNObGMzUW9KMXQwZVhCbFBYTjFZbTFwZEYwbktUdGNjbHh1WEhSY2RGeDBhV1lnS0hRdWJHVnVaM1JvSUQwOVBTQXdLU0I3WEhKY2JseDBYSFJjZEZ4MGNtVjBkWEp1TzF4eVhHNWNkRngwWEhSOVhISmNibHgwWEhSY2RIUmhjbWRsZENBOUlIUmJNRjA3WEhKY2JseDBYSFI5WEhKY2JseDBYSFIyWVhJZ1ptOXliU0E5SUhSb2FYTTdYSEpjYmx4MFhIUm1iM0p0TG1Oc2F5QTlJSFJoY21kbGREdGNjbHh1WEhSY2RHbG1JQ2gwWVhKblpYUXVkSGx3WlNBOVBTQW5hVzFoWjJVbktTQjdYSEpjYmx4MFhIUmNkR2xtSUNobExtOW1abk5sZEZnZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4eVhHNWNkRngwWEhSY2RHWnZjbTB1WTJ4clgzZ2dQU0JsTG05bVpuTmxkRmc3WEhKY2JseDBYSFJjZEZ4MFptOXliUzVqYkd0ZmVTQTlJR1V1YjJabWMyVjBXVHRjY2x4dVhIUmNkRngwZlNCbGJITmxJR2xtSUNoMGVYQmxiMllnSkM1bWJpNXZabVp6WlhRZ1BUMGdKMloxYm1OMGFXOXVKeWtnZTF4eVhHNWNkRngwWEhSY2RIWmhjaUJ2Wm1aelpYUWdQU0FrWld3dWIyWm1jMlYwS0NrN1hISmNibHgwWEhSY2RGeDBabTl5YlM1amJHdGZlQ0E5SUdVdWNHRm5aVmdnTFNCdlptWnpaWFF1YkdWbWREdGNjbHh1WEhSY2RGeDBYSFJtYjNKdExtTnNhMTk1SUQwZ1pTNXdZV2RsV1NBdElHOW1abk5sZEM1MGIzQTdYSEpjYmx4MFhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwWm05eWJTNWpiR3RmZUNBOUlHVXVjR0ZuWlZnZ0xTQjBZWEpuWlhRdWIyWm1jMlYwVEdWbWREdGNjbHh1WEhSY2RGeDBYSFJtYjNKdExtTnNhMTk1SUQwZ1pTNXdZV2RsV1NBdElIUmhjbWRsZEM1dlptWnpaWFJVYjNBN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMWNjbHh1WEhSY2RDOHZJR05zWldGeUlHWnZjbTBnZG1GeWMxeHlYRzVjZEZ4MGMyVjBWR2x0Wlc5MWRDaG1kVzVqZEdsdmJpZ3BJSHNnWm05eWJTNWpiR3NnUFNCbWIzSnRMbU5zYTE5NElEMGdabTl5YlM1amJHdGZlU0E5SUc1MWJHdzdJSDBzSURFd01DazdYSEpjYmx4MGZWeHlYRzVjY2x4dVhISmNibHgwTHk4Z1lXcGhlRVp2Y20xVmJtSnBibVFnZFc1aWFXNWtjeUIwYUdVZ1pYWmxiblFnYUdGdVpHeGxjbk1nZEdoaGRDQjNaWEpsSUdKdmRXNWtJR0o1SUdGcVlYaEdiM0p0WEhKY2JseDBKQzVtYmk1aGFtRjRSbTl5YlZWdVltbHVaQ0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHlYRzVjZEZ4MGNtVjBkWEp1SUhSb2FYTXVkVzVpYVc1a0tDZHpkV0p0YVhRdVptOXliUzF3YkhWbmFXNGdZMnhwWTJzdVptOXliUzF3YkhWbmFXNG5LVHRjY2x4dVhIUjlPMXh5WEc1Y2NseHVYSFF2S2lwY2NseHVYSFFnS2lCbWIzSnRWRzlCY25KaGVTZ3BJR2RoZEdobGNuTWdabTl5YlNCbGJHVnRaVzUwSUdSaGRHRWdhVzUwYnlCaGJpQmhjbkpoZVNCdlppQnZZbXBsWTNSeklIUm9ZWFFnWTJGdVhISmNibHgwSUNvZ1ltVWdjR0Z6YzJWa0lIUnZJR0Z1ZVNCdlppQjBhR1VnWm05c2JHOTNhVzVuSUdGcVlYZ2dablZ1WTNScGIyNXpPaUFrTG1kbGRDd2dKQzV3YjNOMExDQnZjaUJzYjJGa0xseHlYRzVjZENBcUlFVmhZMmdnYjJKcVpXTjBJR2x1SUhSb1pTQmhjbkpoZVNCb1lYTWdZbTkwYUNCaElDZHVZVzFsSnlCaGJtUWdKM1poYkhWbEp5QndjbTl3WlhKMGVTNGdJRUZ1SUdWNFlXMXdiR1VnYjJaY2NseHVYSFFnS2lCaGJpQmhjbkpoZVNCbWIzSWdZU0J6YVcxd2JHVWdiRzluYVc0Z1ptOXliU0J0YVdkb2RDQmlaVHBjY2x4dVhIUWdLbHh5WEc1Y2RDQXFJRnNnZXlCdVlXMWxPaUFuZFhObGNtNWhiV1VuTENCMllXeDFaVG9nSjJweVpYTnBaeWNnZlN3Z2V5QnVZVzFsT2lBbmNHRnpjM2R2Y21RbkxDQjJZV3gxWlRvZ0ozTmxZM0psZENjZ2ZTQmRYSEpjYmx4MElDcGNjbHh1WEhRZ0tpQkpkQ0JwY3lCMGFHbHpJR0Z5Y21GNUlIUm9ZWFFnYVhNZ2NHRnpjMlZrSUhSdklIQnlaUzF6ZFdKdGFYUWdZMkZzYkdKaFkyc2dablZ1WTNScGIyNXpJSEJ5YjNacFpHVmtJSFJ2SUhSb1pWeHlYRzVjZENBcUlHRnFZWGhUZFdKdGFYUW9LU0JoYm1RZ1lXcGhlRVp2Y20wb0tTQnRaWFJvYjJSekxseHlYRzVjZENBcUwxeHlYRzVjZENRdVptNHVabTl5YlZSdlFYSnlZWGtnUFNCbWRXNWpkR2x2YmloelpXMWhiblJwWXl3Z1pXeGxiV1Z1ZEhNcElIdGNjbHh1WEhSY2RIWmhjaUJoSUQwZ1cxMDdYSEpjYmx4MFhIUnBaaUFvZEdocGN5NXNaVzVuZEdnZ1BUMDlJREFwSUh0Y2NseHVYSFJjZEZ4MGNtVjBkWEp1SUdFN1hISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBkbUZ5SUdadmNtMGdQU0IwYUdseld6QmRPMXh5WEc1Y2RGeDBkbUZ5SUdWc2N5QTlJSE5sYldGdWRHbGpJRDhnWm05eWJTNW5aWFJGYkdWdFpXNTBjMEo1VkdGblRtRnRaU2duS2ljcElEb2dabTl5YlM1bGJHVnRaVzUwY3p0Y2NseHVYSFJjZEdsbUlDZ2haV3h6S1NCN1hISmNibHgwWEhSY2RISmxkSFZ5YmlCaE8xeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkSFpoY2lCcExHb3NiaXgyTEdWc0xHMWhlQ3hxYldGNE8xeHlYRzVjZEZ4MFptOXlLR2s5TUN3Z2JXRjRQV1ZzY3k1c1pXNW5kR2c3SUdrZ1BDQnRZWGc3SUdrckt5a2dlMXh5WEc1Y2RGeDBYSFJsYkNBOUlHVnNjMXRwWFR0Y2NseHVYSFJjZEZ4MGJpQTlJR1ZzTG01aGJXVTdYSEpjYmx4MFhIUmNkR2xtSUNnaGJpQjhmQ0JsYkM1a2FYTmhZbXhsWkNrZ2UxeHlYRzVjZEZ4MFhIUmNkR052Ym5ScGJuVmxPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUnBaaUFvYzJWdFlXNTBhV01nSmlZZ1ptOXliUzVqYkdzZ0ppWWdaV3d1ZEhsd1pTQTlQU0JjSW1sdFlXZGxYQ0lwSUh0Y2NseHVYSFJjZEZ4MFhIUXZMeUJvWVc1a2JHVWdhVzFoWjJVZ2FXNXdkWFJ6SUc5dUlIUm9aU0JtYkhrZ2QyaGxiaUJ6WlcxaGJuUnBZeUE5UFNCMGNuVmxYSEpjYmx4MFhIUmNkRngwYVdZb1ptOXliUzVqYkdzZ1BUMGdaV3dwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkR0V1Y0hWemFDaDdibUZ0WlRvZ2Jpd2dkbUZzZFdVNklDUW9aV3dwTG5aaGJDZ3BMQ0IwZVhCbE9pQmxiQzUwZVhCbElIMHBPMXh5WEc1Y2RGeDBYSFJjZEZ4MFlTNXdkWE5vS0h0dVlXMWxPaUJ1S3ljdWVDY3NJSFpoYkhWbE9pQm1iM0p0TG1Oc2ExOTRmU3dnZTI1aGJXVTZJRzRySnk1NUp5d2dkbUZzZFdVNklHWnZjbTB1WTJ4clgzbDlLVHRjY2x4dVhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBZMjl1ZEdsdWRXVTdYSEpjYmx4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RIWWdQU0FrTG1acFpXeGtWbUZzZFdVb1pXd3NJSFJ5ZFdVcE8xeHlYRzVjZEZ4MFhIUnBaaUFvZGlBbUppQjJMbU52Ym5OMGNuVmpkRzl5SUQwOUlFRnljbUY1S1NCN1hISmNibHgwWEhSY2RGeDBhV1lnS0dWc1pXMWxiblJ6S1Z4eVhHNWNkRngwWEhSY2RGeDBaV3hsYldWdWRITXVjSFZ6YUNobGJDazdYSEpjYmx4MFhIUmNkRngwWm05eUtHbzlNQ3dnYW0xaGVEMTJMbXhsYm1kMGFEc2dhaUE4SUdwdFlYZzdJR29yS3lrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWVM1d2RYTm9LSHR1WVcxbE9pQnVMQ0IyWVd4MVpUb2dkbHRxWFgwcE8xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwZlZ4eVhHNWNkRngwWEhSbGJITmxJR2xtSUNobVpXRjBkWEpsTG1acGJHVmhjR2tnSmlZZ1pXd3VkSGx3WlNBOVBTQW5abWxzWlNjcElIdGNjbHh1WEhSY2RGeDBYSFJwWmlBb1pXeGxiV1Z1ZEhNcFhISmNibHgwWEhSY2RGeDBYSFJsYkdWdFpXNTBjeTV3ZFhOb0tHVnNLVHRjY2x4dVhIUmNkRngwWEhSMllYSWdabWxzWlhNZ1BTQmxiQzVtYVd4bGN6dGNjbHh1WEhSY2RGeDBYSFJwWmlBb1ptbHNaWE11YkdWdVozUm9LU0I3WEhKY2JseDBYSFJjZEZ4MFhIUm1iM0lnS0dvOU1Ec2dhaUE4SUdacGJHVnpMbXhsYm1kMGFEc2dhaXNyS1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZEdFdWNIVnphQ2g3Ym1GdFpUb2diaXdnZG1Gc2RXVTZJR1pwYkdWelcycGRMQ0IwZVhCbE9pQmxiQzUwZVhCbGZTazdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZEZ4MEx5OGdJekU0TUZ4eVhHNWNkRngwWEhSY2RGeDBZUzV3ZFhOb0tIc2dibUZ0WlRvZ2Jpd2dkbUZzZFdVNklDY25MQ0IwZVhCbE9pQmxiQzUwZVhCbElIMHBPMXh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmxiSE5sSUdsbUlDaDJJQ0U5UFNCdWRXeHNJQ1ltSUhSNWNHVnZaaUIySUNFOUlDZDFibVJsWm1sdVpXUW5LU0I3WEhKY2JseDBYSFJjZEZ4MGFXWWdLR1ZzWlcxbGJuUnpLVnh5WEc1Y2RGeDBYSFJjZEZ4MFpXeGxiV1Z1ZEhNdWNIVnphQ2hsYkNrN1hISmNibHgwWEhSY2RGeDBZUzV3ZFhOb0tIdHVZVzFsT2lCdUxDQjJZV3gxWlRvZ2Rpd2dkSGx3WlRvZ1pXd3VkSGx3WlN3Z2NtVnhkV2x5WldRNklHVnNMbkpsY1hWcGNtVmtmU2s3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUnBaaUFvSVhObGJXRnVkR2xqSUNZbUlHWnZjbTB1WTJ4cktTQjdYSEpjYmx4MFhIUmNkQzh2SUdsdWNIVjBJSFI1Y0dVOVBTZHBiV0ZuWlNjZ1lYSmxJRzV2ZENCbWIzVnVaQ0JwYmlCbGJHVnRaVzUwY3lCaGNuSmhlU0VnYUdGdVpHeGxJR2wwSUdobGNtVmNjbHh1WEhSY2RGeDBkbUZ5SUNScGJuQjFkQ0E5SUNRb1ptOXliUzVqYkdzcExDQnBibkIxZENBOUlDUnBibkIxZEZzd1hUdGNjbHh1WEhSY2RGeDBiaUE5SUdsdWNIVjBMbTVoYldVN1hISmNibHgwWEhSY2RHbG1JQ2h1SUNZbUlDRnBibkIxZEM1a2FYTmhZbXhsWkNBbUppQnBibkIxZEM1MGVYQmxJRDA5SUNkcGJXRm5aU2NwSUh0Y2NseHVYSFJjZEZ4MFhIUmhMbkIxYzJnb2UyNWhiV1U2SUc0c0lIWmhiSFZsT2lBa2FXNXdkWFF1ZG1Gc0tDbDlLVHRjY2x4dVhIUmNkRngwWEhSaExuQjFjMmdvZTI1aGJXVTZJRzRySnk1NEp5d2dkbUZzZFdVNklHWnZjbTB1WTJ4clgzaDlMQ0I3Ym1GdFpUb2diaXNuTG5rbkxDQjJZV3gxWlRvZ1ptOXliUzVqYkd0ZmVYMHBPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseDBYSFI5WEhKY2JseDBYSFJ5WlhSMWNtNGdZVHRjY2x4dVhIUjlPMXh5WEc1Y2NseHVYSFF2S2lwY2NseHVYSFFnS2lCVFpYSnBZV3hwZW1WeklHWnZjbTBnWkdGMFlTQnBiblJ2SUdFZ0ozTjFZbTFwZEhSaFlteGxKeUJ6ZEhKcGJtY3VJRlJvYVhNZ2JXVjBhRzlrSUhkcGJHd2djbVYwZFhKdUlHRWdjM1J5YVc1blhISmNibHgwSUNvZ2FXNGdkR2hsSUdadmNtMWhkRG9nYm1GdFpURTlkbUZzZFdVeEptRnRjRHR1WVcxbE1qMTJZV3gxWlRKY2NseHVYSFFnS2k5Y2NseHVYSFFrTG1adUxtWnZjbTFUWlhKcFlXeHBlbVVnUFNCbWRXNWpkR2x2YmloelpXMWhiblJwWXlrZ2UxeHlYRzVjZEZ4MEx5OW9ZVzVrSUc5bVppQjBieUJxVVhWbGNua3VjR0Z5WVcwZ1ptOXlJSEJ5YjNCbGNpQmxibU52WkdsdVoxeHlYRzVjZEZ4MGNtVjBkWEp1SUNRdWNHRnlZVzBvZEdocGN5NW1iM0p0Vkc5QmNuSmhlU2h6WlcxaGJuUnBZeWtwTzF4eVhHNWNkSDA3WEhKY2JseHlYRzVjZEM4cUtseHlYRzVjZENBcUlGTmxjbWxoYkdsNlpYTWdZV3hzSUdacFpXeGtJR1ZzWlcxbGJuUnpJR2x1SUhSb1pTQnFVWFZsY25rZ2IySnFaV04wSUdsdWRHOGdZU0J4ZFdWeWVTQnpkSEpwYm1jdVhISmNibHgwSUNvZ1ZHaHBjeUJ0WlhSb2IyUWdkMmxzYkNCeVpYUjFjbTRnWVNCemRISnBibWNnYVc0Z2RHaGxJR1p2Y20xaGREb2dibUZ0WlRFOWRtRnNkV1V4Sm1GdGNEdHVZVzFsTWoxMllXeDFaVEpjY2x4dVhIUWdLaTljY2x4dVhIUWtMbVp1TG1acFpXeGtVMlZ5YVdGc2FYcGxJRDBnWm5WdVkzUnBiMjRvYzNWalkyVnpjMloxYkNrZ2UxeHlYRzVjZEZ4MGRtRnlJR0VnUFNCYlhUdGNjbHh1WEhSY2RIUm9hWE11WldGamFDaG1kVzVqZEdsdmJpZ3BJSHRjY2x4dVhIUmNkRngwZG1GeUlHNGdQU0IwYUdsekxtNWhiV1U3WEhKY2JseDBYSFJjZEdsbUlDZ2hiaWtnZTF4eVhHNWNkRngwWEhSY2RISmxkSFZ5Ymp0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUjJZWElnZGlBOUlDUXVabWxsYkdSV1lXeDFaU2gwYUdsekxDQnpkV05qWlhOelpuVnNLVHRjY2x4dVhIUmNkRngwYVdZZ0tIWWdKaVlnZGk1amIyNXpkSEoxWTNSdmNpQTlQU0JCY25KaGVTa2dlMXh5WEc1Y2RGeDBYSFJjZEdadmNpQW9kbUZ5SUdrOU1DeHRZWGc5ZGk1c1pXNW5kR2c3SUdrZ1BDQnRZWGc3SUdrckt5a2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFlTNXdkWE5vS0h0dVlXMWxPaUJ1TENCMllXeDFaVG9nZGx0cFhYMHBPMXh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmxiSE5sSUdsbUlDaDJJQ0U5UFNCdWRXeHNJQ1ltSUhSNWNHVnZaaUIySUNFOUlDZDFibVJsWm1sdVpXUW5LU0I3WEhKY2JseDBYSFJjZEZ4MFlTNXdkWE5vS0h0dVlXMWxPaUIwYUdsekxtNWhiV1VzSUhaaGJIVmxPaUIyZlNrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMHBPMXh5WEc1Y2RGeDBMeTlvWVc1a0lHOW1aaUIwYnlCcVVYVmxjbmt1Y0dGeVlXMGdabTl5SUhCeWIzQmxjaUJsYm1OdlpHbHVaMXh5WEc1Y2RGeDBjbVYwZFhKdUlDUXVjR0Z5WVcwb1lTazdYSEpjYmx4MGZUdGNjbHh1WEhKY2JseDBMeW9xWEhKY2JseDBJQ29nVW1WMGRYSnVjeUIwYUdVZ2RtRnNkV1VvY3lrZ2IyWWdkR2hsSUdWc1pXMWxiblFnYVc0Z2RHaGxJRzFoZEdOb1pXUWdjMlYwTGlBZ1JtOXlJR1Y0WVcxd2JHVXNJR052Ym5OcFpHVnlJSFJvWlNCbWIyeHNiM2RwYm1jZ1ptOXliVHBjY2x4dVhIUWdLbHh5WEc1Y2RDQXFJQ0E4Wm05eWJUNDhabWxsYkdSelpYUStYSEpjYmx4MElDb2dJQ0FnSUNBOGFXNXdkWFFnYm1GdFpUMWNJa0ZjSWlCMGVYQmxQVndpZEdWNGRGd2lJQzgrWEhKY2JseDBJQ29nSUNBZ0lDQThhVzV3ZFhRZ2JtRnRaVDFjSWtGY0lpQjBlWEJsUFZ3aWRHVjRkRndpSUM4K1hISmNibHgwSUNvZ0lDQWdJQ0E4YVc1d2RYUWdibUZ0WlQxY0lrSmNJaUIwZVhCbFBWd2lZMmhsWTJ0aWIzaGNJaUIyWVd4MVpUMWNJa0l4WENJZ0x6NWNjbHh1WEhRZ0tpQWdJQ0FnSUR4cGJuQjFkQ0J1WVcxbFBWd2lRbHdpSUhSNWNHVTlYQ0pqYUdWamEySnZlRndpSUhaaGJIVmxQVndpUWpKY0lpOCtYSEpjYmx4MElDb2dJQ0FnSUNBOGFXNXdkWFFnYm1GdFpUMWNJa05jSWlCMGVYQmxQVndpY21Ga2FXOWNJaUIyWVd4MVpUMWNJa014WENJZ0x6NWNjbHh1WEhRZ0tpQWdJQ0FnSUR4cGJuQjFkQ0J1WVcxbFBWd2lRMXdpSUhSNWNHVTlYQ0p5WVdScGIxd2lJSFpoYkhWbFBWd2lRekpjSWlBdlBseHlYRzVjZENBcUlDQThMMlpwWld4a2MyVjBQand2Wm05eWJUNWNjbHh1WEhRZ0tseHlYRzVjZENBcUlDQjJZWElnZGlBOUlDUW9KMmx1Y0hWMFczUjVjR1U5ZEdWNGRGMG5LUzVtYVdWc1pGWmhiSFZsS0NrN1hISmNibHgwSUNvZ0lDOHZJR2xtSUc1dklIWmhiSFZsY3lCaGNtVWdaVzUwWlhKbFpDQnBiblJ2SUhSb1pTQjBaWGgwSUdsdWNIVjBjMXh5WEc1Y2RDQXFJQ0IySUQwOUlGc25KeXduSjExY2NseHVYSFFnS2lBZ0x5OGdhV1lnZG1Gc2RXVnpJR1Z1ZEdWeVpXUWdhVzUwYnlCMGFHVWdkR1Y0ZENCcGJuQjFkSE1nWVhKbElDZG1iMjhuSUdGdVpDQW5ZbUZ5SjF4eVhHNWNkQ0FxSUNCMklEMDlJRnNuWm05dkp5d25ZbUZ5SjExY2NseHVYSFFnS2x4eVhHNWNkQ0FxSUNCMllYSWdkaUE5SUNRb0oybHVjSFYwVzNSNWNHVTlZMmhsWTJ0aWIzaGRKeWt1Wm1sbGJHUldZV3gxWlNncE8xeHlYRzVjZENBcUlDQXZMeUJwWmlCdVpXbDBhR1Z5SUdOb1pXTnJZbTk0SUdseklHTm9aV05yWldSY2NseHVYSFFnS2lBZ2RpQTlQVDBnZFc1a1pXWnBibVZrWEhKY2JseDBJQ29nSUM4dklHbG1JR0p2ZEdnZ1kyaGxZMnRpYjNobGN5QmhjbVVnWTJobFkydGxaRnh5WEc1Y2RDQXFJQ0IySUQwOUlGc25RakVuTENBblFqSW5YVnh5WEc1Y2RDQXFYSEpjYmx4MElDb2dJSFpoY2lCMklEMGdKQ2duYVc1d2RYUmJkSGx3WlQxeVlXUnBiMTBuS1M1bWFXVnNaRlpoYkhWbEtDazdYSEpjYmx4MElDb2dJQzh2SUdsbUlHNWxhWFJvWlhJZ2NtRmthVzhnYVhNZ1kyaGxZMnRsWkZ4eVhHNWNkQ0FxSUNCMklEMDlQU0IxYm1SbFptbHVaV1JjY2x4dVhIUWdLaUFnTHk4Z2FXWWdabWx5YzNRZ2NtRmthVzhnYVhNZ1kyaGxZMnRsWkZ4eVhHNWNkQ0FxSUNCMklEMDlJRnNuUXpFblhWeHlYRzVjZENBcVhISmNibHgwSUNvZ1ZHaGxJSE4xWTJObGMzTm1kV3dnWVhKbmRXMWxiblFnWTI5dWRISnZiSE1nZDJobGRHaGxjaUJ2Y2lCdWIzUWdkR2hsSUdacFpXeGtJR1ZzWlcxbGJuUWdiWFZ6ZENCaVpTQW5jM1ZqWTJWemMyWjFiQ2RjY2x4dVhIUWdLaUFvY0dWeUlHaDBkSEE2THk5M2QzY3Vkek11YjNKbkwxUlNMMmgwYld3MEwybHVkR1Z5WVdOMEwyWnZjbTF6TG1oMGJXd2pjM1ZqWTJWemMyWjFiQzFqYjI1MGNtOXNjeWt1WEhKY2JseDBJQ29nVkdobElHUmxabUYxYkhRZ2RtRnNkV1VnYjJZZ2RHaGxJSE4xWTJObGMzTm1kV3dnWVhKbmRXMWxiblFnYVhNZ2RISjFaUzRnSUVsbUlIUm9hWE1nZG1Gc2RXVWdhWE1nWm1Gc2MyVWdkR2hsSUhaaGJIVmxLSE1wWEhKY2JseDBJQ29nWm05eUlHVmhZMmdnWld4bGJXVnVkQ0JwY3lCeVpYUjFjbTVsWkM1Y2NseHVYSFFnS2x4eVhHNWNkQ0FxSUU1dmRHVTZJRlJvYVhNZ2JXVjBhRzlrSUNwaGJIZGhlWE1xSUhKbGRIVnlibk1nWVc0Z1lYSnlZWGt1SUNCSlppQnVieUIyWVd4cFpDQjJZV3gxWlNCallXNGdZbVVnWkdWMFpYSnRhVzVsWkNCMGFHVmNjbHh1WEhRZ0tpQWdJQ0JoY25KaGVTQjNhV3hzSUdKbElHVnRjSFI1TENCdmRHaGxjbmRwYzJVZ2FYUWdkMmxzYkNCamIyNTBZV2x1SUc5dVpTQnZjaUJ0YjNKbElIWmhiSFZsY3k1Y2NseHVYSFFnS2k5Y2NseHVYSFFrTG1adUxtWnBaV3hrVm1Gc2RXVWdQU0JtZFc1amRHbHZiaWh6ZFdOalpYTnpablZzS1NCN1hISmNibHgwWEhSbWIzSWdLSFpoY2lCMllXdzlXMTBzSUdrOU1Dd2diV0Y0UFhSb2FYTXViR1Z1WjNSb095QnBJRHdnYldGNE95QnBLeXNwSUh0Y2NseHVYSFJjZEZ4MGRtRnlJR1ZzSUQwZ2RHaHBjMXRwWFR0Y2NseHVYSFJjZEZ4MGRtRnlJSFlnUFNBa0xtWnBaV3hrVm1Gc2RXVW9aV3dzSUhOMVkyTmxjM05tZFd3cE8xeHlYRzVjZEZ4MFhIUnBaaUFvZGlBOVBUMGdiblZzYkNCOGZDQjBlWEJsYjJZZ2RpQTlQU0FuZFc1a1pXWnBibVZrSnlCOGZDQW9kaTVqYjI1emRISjFZM1J2Y2lBOVBTQkJjbkpoZVNBbUppQWhkaTVzWlc1bmRHZ3BLU0I3WEhKY2JseDBYSFJjZEZ4MFkyOXVkR2x1ZFdVN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RGeDBhV1lnS0hZdVkyOXVjM1J5ZFdOMGIzSWdQVDBnUVhKeVlYa3BYSEpjYmx4MFhIUmNkRngwSkM1dFpYSm5aU2gyWVd3c0lIWXBPMXh5WEc1Y2RGeDBYSFJsYkhObFhISmNibHgwWEhSY2RGeDBkbUZzTG5CMWMyZ29kaWs3WEhKY2JseDBYSFI5WEhKY2JseDBYSFJ5WlhSMWNtNGdkbUZzTzF4eVhHNWNkSDA3WEhKY2JseHlYRzVjZEM4cUtseHlYRzVjZENBcUlGSmxkSFZ5Ym5NZ2RHaGxJSFpoYkhWbElHOW1JSFJvWlNCbWFXVnNaQ0JsYkdWdFpXNTBMbHh5WEc1Y2RDQXFMMXh5WEc1Y2RDUXVabWxsYkdSV1lXeDFaU0E5SUdaMWJtTjBhVzl1S0dWc0xDQnpkV05qWlhOelpuVnNLU0I3WEhKY2JseDBYSFIyWVhJZ2JpQTlJR1ZzTG01aGJXVXNJSFFnUFNCbGJDNTBlWEJsTENCMFlXY2dQU0JsYkM1MFlXZE9ZVzFsTG5SdlRHOTNaWEpEWVhObEtDazdYSEpjYmx4MFhIUnBaaUFvYzNWalkyVnpjMloxYkNBOVBUMGdkVzVrWldacGJtVmtLU0I3WEhKY2JseDBYSFJjZEhOMVkyTmxjM05tZFd3Z1BTQjBjblZsTzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHbG1JQ2h6ZFdOalpYTnpablZzSUNZbUlDZ2hiaUI4ZkNCbGJDNWthWE5oWW14bFpDQjhmQ0IwSUQwOUlDZHlaWE5sZENjZ2ZId2dkQ0E5UFNBblluVjBkRzl1SnlCOGZGeHlYRzVjZEZ4MFhIUW9kQ0E5UFNBblkyaGxZMnRpYjNnbklIeDhJSFFnUFQwZ0ozSmhaR2x2SnlrZ0ppWWdJV1ZzTG1Ob1pXTnJaV1FnZkh4Y2NseHVYSFJjZEZ4MEtIUWdQVDBnSjNOMVltMXBkQ2NnZkh3Z2RDQTlQU0FuYVcxaFoyVW5LU0FtSmlCbGJDNW1iM0p0SUNZbUlHVnNMbVp2Y20wdVkyeHJJQ0U5SUdWc0lIeDhYSEpjYmx4MFhIUmNkSFJoWnlBOVBTQW5jMlZzWldOMEp5QW1KaUJsYkM1elpXeGxZM1JsWkVsdVpHVjRJRDA5SUMweEtTa2dlMXh5WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUJ1ZFd4c08xeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkR2xtSUNoMFlXY2dQVDBnSjNObGJHVmpkQ2NwSUh0Y2NseHVYSFJjZEZ4MGRtRnlJR2x1WkdWNElEMGdaV3d1YzJWc1pXTjBaV1JKYm1SbGVEdGNjbHh1WEhSY2RGeDBhV1lnS0dsdVpHVjRJRHdnTUNrZ2UxeHlYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQnVkV3hzTzF4eVhHNWNkRngwWEhSOVhISmNibHgwWEhSY2RIWmhjaUJoSUQwZ1cxMHNJRzl3Y3lBOUlHVnNMbTl3ZEdsdmJuTTdYSEpjYmx4MFhIUmNkSFpoY2lCdmJtVWdQU0FvZENBOVBTQW5jMlZzWldOMExXOXVaU2NwTzF4eVhHNWNkRngwWEhSMllYSWdiV0Y0SUQwZ0tHOXVaU0EvSUdsdVpHVjRLekVnT2lCdmNITXViR1Z1WjNSb0tUdGNjbHh1WEhSY2RGeDBabTl5S0haaGNpQnBQU2h2Ym1VZ1B5QnBibVJsZUNBNklEQXBPeUJwSUR3Z2JXRjRPeUJwS3lzcElIdGNjbHh1WEhSY2RGeDBYSFIyWVhJZ2IzQWdQU0J2Y0hOYmFWMDdYSEpjYmx4MFhIUmNkRngwYVdZZ0tHOXdMbk5sYkdWamRHVmtLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUjJZWElnZGlBOUlHOXdMblpoYkhWbE8xeHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tDRjJLU0I3SUM4dklHVjRkSEpoSUhCaGFXNGdabTl5SUVsRkxpNHVYSEpjYmx4MFhIUmNkRngwWEhSY2RIWWdQU0FvYjNBdVlYUjBjbWxpZFhSbGN5QW1KaUJ2Y0M1aGRIUnlhV0oxZEdWeld5ZDJZV3gxWlNkZElDWW1JQ0VvYjNBdVlYUjBjbWxpZFhSbGMxc25kbUZzZFdVblhTNXpjR1ZqYVdacFpXUXBLU0EvSUc5d0xuUmxlSFFnT2lCdmNDNTJZV3gxWlR0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2h2Ym1VcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUhZN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MFhIUmhMbkIxYzJnb2RpazdYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSOVhISmNibHgwWEhSY2RISmxkSFZ5YmlCaE8xeHlYRzVjZEZ4MGZWeHlYRzVjZEZ4MGNtVjBkWEp1SUNRb1pXd3BMblpoYkNncE8xeHlYRzVjZEgwN1hISmNibHh5WEc1Y2RDOHFLbHh5WEc1Y2RDQXFJRU5zWldGeWN5QjBhR1VnWm05eWJTQmtZWFJoTGlBZ1ZHRnJaWE1nZEdobElHWnZiR3h2ZDJsdVp5QmhZM1JwYjI1eklHOXVJSFJvWlNCbWIzSnRKM01nYVc1d2RYUWdabWxsYkdSek9seHlYRzVjZENBcUlDQXRJR2x1Y0hWMElIUmxlSFFnWm1sbGJHUnpJSGRwYkd3Z2FHRjJaU0IwYUdWcGNpQW5kbUZzZFdVbklIQnliM0JsY25SNUlITmxkQ0IwYnlCMGFHVWdaVzF3ZEhrZ2MzUnlhVzVuWEhKY2JseDBJQ29nSUMwZ2MyVnNaV04wSUdWc1pXMWxiblJ6SUhkcGJHd2dhR0YyWlNCMGFHVnBjaUFuYzJWc1pXTjBaV1JKYm1SbGVDY2djSEp2Y0dWeWRIa2djMlYwSUhSdklDMHhYSEpjYmx4MElDb2dJQzBnWTJobFkydGliM2dnWVc1a0lISmhaR2x2SUdsdWNIVjBjeUIzYVd4c0lHaGhkbVVnZEdobGFYSWdKMk5vWldOclpXUW5JSEJ5YjNCbGNuUjVJSE5sZENCMGJ5Qm1ZV3h6WlZ4eVhHNWNkQ0FxSUNBdElHbHVjSFYwY3lCdlppQjBlWEJsSUhOMVltMXBkQ3dnWW5WMGRHOXVMQ0J5WlhObGRDd2dZVzVrSUdocFpHUmxiaUIzYVd4c0lDcHViM1FxSUdKbElHVm1abVZqZEdWa1hISmNibHgwSUNvZ0lDMGdZblYwZEc5dUlHVnNaVzFsYm5SeklIZHBiR3dnS201dmRDb2dZbVVnWldabVpXTjBaV1JjY2x4dVhIUWdLaTljY2x4dVhIUWtMbVp1TG1Oc1pXRnlSbTl5YlNBOUlHWjFibU4wYVc5dUtHbHVZMngxWkdWSWFXUmtaVzRwSUh0Y2NseHVYSFJjZEhKbGRIVnliaUIwYUdsekxtVmhZMmdvWm5WdVkzUnBiMjRvS1NCN1hISmNibHgwWEhSY2RDUW9KMmx1Y0hWMExITmxiR1ZqZEN4MFpYaDBZWEpsWVNjc0lIUm9hWE1wTG1Oc1pXRnlSbWxsYkdSektHbHVZMngxWkdWSWFXUmtaVzRwTzF4eVhHNWNkRngwZlNrN1hISmNibHgwZlR0Y2NseHVYSEpjYmx4MEx5b3FYSEpjYmx4MElDb2dRMnhsWVhKeklIUm9aU0J6Wld4bFkzUmxaQ0JtYjNKdElHVnNaVzFsYm5SekxseHlYRzVjZENBcUwxeHlYRzVjZENRdVptNHVZMnhsWVhKR2FXVnNaSE1nUFNBa0xtWnVMbU5zWldGeVNXNXdkWFJ6SUQwZ1puVnVZM1JwYjI0b2FXNWpiSFZrWlVocFpHUmxiaWtnZTF4eVhHNWNkRngwZG1GeUlISmxJRDBnTDE0b1B6cGpiMnh2Y254a1lYUmxmR1JoZEdWMGFXMWxmR1Z0WVdsc2ZHMXZiblJvZkc1MWJXSmxjbnh3WVhOemQyOXlaSHh5WVc1blpYeHpaV0Z5WTJoOGRHVnNmSFJsZUhSOGRHbHRaWHgxY214OGQyVmxheWtrTDJrN0lDOHZJQ2RvYVdSa1pXNG5JR2x6SUc1dmRDQnBiaUIwYUdseklHeHBjM1JjY2x4dVhIUmNkSEpsZEhWeWJpQjBhR2x6TG1WaFkyZ29ablZ1WTNScGIyNG9LU0I3WEhKY2JseDBYSFJjZEhaaGNpQjBJRDBnZEdocGN5NTBlWEJsTENCMFlXY2dQU0IwYUdsekxuUmhaMDVoYldVdWRHOU1iM2RsY2tOaGMyVW9LVHRjY2x4dVhIUmNkRngwYVdZZ0tISmxMblJsYzNRb2RDa2dmSHdnZEdGbklEMDlJQ2QwWlhoMFlYSmxZU2NwSUh0Y2NseHVYSFJjZEZ4MFhIUjBhR2x6TG5aaGJIVmxJRDBnSnljN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RGeDBaV3h6WlNCcFppQW9kQ0E5UFNBblkyaGxZMnRpYjNnbklIeDhJSFFnUFQwZ0ozSmhaR2x2SnlrZ2UxeHlYRzVjZEZ4MFhIUmNkSFJvYVhNdVkyaGxZMnRsWkNBOUlHWmhiSE5sTzF4eVhHNWNkRngwWEhSOVhISmNibHgwWEhSY2RHVnNjMlVnYVdZZ0tIUmhaeUE5UFNBbmMyVnNaV04wSnlrZ2UxeHlYRzVjZEZ4MFhIUmNkSFJvYVhNdWMyVnNaV04wWldSSmJtUmxlQ0E5SUMweE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkR1ZzYzJVZ2FXWWdLSFFnUFQwZ1hDSm1hV3hsWENJcElIdGNjbHh1WEhSY2RGeDBYSFJwWmlBb0wwMVRTVVV2TG5SbGMzUW9ibUYyYVdkaGRHOXlMblZ6WlhKQloyVnVkQ2twSUh0Y2NseHVYSFJjZEZ4MFhIUmNkQ1FvZEdocGN5a3VjbVZ3YkdGalpWZHBkR2dvSkNoMGFHbHpLUzVqYkc5dVpTaDBjblZsS1NrN1hISmNibHgwWEhSY2RGeDBmU0JsYkhObElIdGNjbHh1WEhSY2RGeDBYSFJjZENRb2RHaHBjeWt1ZG1Gc0tDY25LVHRjY2x4dVhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RGeDBaV3h6WlNCcFppQW9hVzVqYkhWa1pVaHBaR1JsYmlrZ2UxeHlYRzVjZEZ4MFhIUmNkQzh2SUdsdVkyeDFaR1ZJYVdSa1pXNGdZMkZ1SUdKbElIUm9aU0IyWVd4MVpTQjBjblZsTENCdmNpQnBkQ0JqWVc0Z1ltVWdZU0J6Wld4bFkzUnZjaUJ6ZEhKcGJtZGNjbHh1WEhSY2RGeDBYSFF2THlCcGJtUnBZMkYwYVc1bklHRWdjM0JsWTJsaGJDQjBaWE4wT3lCbWIzSWdaWGhoYlhCc1pUcGNjbHh1WEhSY2RGeDBYSFF2THlBZ0pDZ25JMjE1Um05eWJTY3BMbU5zWldGeVJtOXliU2duTG5Od1pXTnBZV3c2YUdsa1pHVnVKeWxjY2x4dVhIUmNkRngwWEhRdkx5QjBhR1VnWVdKdmRtVWdkMjkxYkdRZ1kyeGxZVzRnYUdsa1pHVnVJR2x1Y0hWMGN5QjBhR0YwSUdoaGRtVWdkR2hsSUdOc1lYTnpJRzltSUNkemNHVmphV0ZzSjF4eVhHNWNkRngwWEhSY2RHbG1JQ2dnS0dsdVkyeDFaR1ZJYVdSa1pXNGdQVDA5SUhSeWRXVWdKaVlnTDJocFpHUmxiaTh1ZEdWemRDaDBLU2tnZkh4Y2NseHVYSFJjZEZ4MFhIUmNkQ0FvZEhsd1pXOW1JR2x1WTJ4MVpHVklhV1JrWlc0Z1BUMGdKM04wY21sdVp5Y2dKaVlnSkNoMGFHbHpLUzVwY3locGJtTnNkV1JsU0dsa1pHVnVLU2tnS1Z4eVhHNWNkRngwWEhSY2RGeDBkR2hwY3k1MllXeDFaU0E5SUNjbk8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlLVHRjY2x4dVhIUjlPMXh5WEc1Y2NseHVYSFF2S2lwY2NseHVYSFFnS2lCU1pYTmxkSE1nZEdobElHWnZjbTBnWkdGMFlTNGdJRU5oZFhObGN5QmhiR3dnWm05eWJTQmxiR1Z0Wlc1MGN5QjBieUJpWlNCeVpYTmxkQ0IwYnlCMGFHVnBjaUJ2Y21sbmFXNWhiQ0IyWVd4MVpTNWNjbHh1WEhRZ0tpOWNjbHh1WEhRa0xtWnVMbkpsYzJWMFJtOXliU0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHlYRzVjZEZ4MGNtVjBkWEp1SUhSb2FYTXVaV0ZqYUNobWRXNWpkR2x2YmlncElIdGNjbHh1WEhSY2RGeDBMeThnWjNWaGNtUWdZV2RoYVc1emRDQmhiaUJwYm5CMWRDQjNhWFJvSUhSb1pTQnVZVzFsSUc5bUlDZHlaWE5sZENkY2NseHVYSFJjZEZ4MEx5OGdibTkwWlNCMGFHRjBJRWxGSUhKbGNHOXlkSE1nZEdobElISmxjMlYwSUdaMWJtTjBhVzl1SUdGeklHRnVJQ2R2WW1wbFkzUW5YSEpjYmx4MFhIUmNkR2xtSUNoMGVYQmxiMllnZEdocGN5NXlaWE5sZENBOVBTQW5ablZ1WTNScGIyNG5JSHg4SUNoMGVYQmxiMllnZEdocGN5NXlaWE5sZENBOVBTQW5iMkpxWldOMEp5QW1KaUFoZEdocGN5NXlaWE5sZEM1dWIyUmxWSGx3WlNrcElIdGNjbHh1WEhSY2RGeDBYSFIwYUdsekxuSmxjMlYwS0NrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMHBPMXh5WEc1Y2RIMDdYSEpjYmx4eVhHNWNkQzhxS2x4eVhHNWNkQ0FxSUVWdVlXSnNaWE1nYjNJZ1pHbHpZV0pzWlhNZ1lXNTVJRzFoZEdOb2FXNW5JR1ZzWlcxbGJuUnpMbHh5WEc1Y2RDQXFMMXh5WEc1Y2RDUXVabTR1Wlc1aFlteGxJRDBnWm5WdVkzUnBiMjRvWWlrZ2UxeHlYRzVjZEZ4MGFXWWdLR0lnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh5WEc1Y2RGeDBYSFJpSUQwZ2RISjFaVHRjY2x4dVhIUmNkSDFjY2x4dVhIUmNkSEpsZEhWeWJpQjBhR2x6TG1WaFkyZ29ablZ1WTNScGIyNG9LU0I3WEhKY2JseDBYSFJjZEhSb2FYTXVaR2x6WVdKc1pXUWdQU0FoWWp0Y2NseHVYSFJjZEgwcE8xeHlYRzVjZEgwN1hISmNibHh5WEc1Y2RDOHFLbHh5WEc1Y2RDQXFJRU5vWldOcmN5OTFibU5vWldOcmN5QmhibmtnYldGMFkyaHBibWNnWTJobFkydGliM2hsY3lCdmNpQnlZV1JwYnlCaWRYUjBiMjV6SUdGdVpGeHlYRzVjZENBcUlITmxiR1ZqZEhNdlpHVnpaV3hsWTNSeklHRnVaQ0J0WVhSamFHbHVaeUJ2Y0hScGIyNGdaV3hsYldWdWRITXVYSEpjYmx4MElDb3ZYSEpjYmx4MEpDNW1iaTV6Wld4bFkzUmxaQ0E5SUdaMWJtTjBhVzl1S0hObGJHVmpkQ2tnZTF4eVhHNWNkRngwYVdZZ0tITmxiR1ZqZENBOVBUMGdkVzVrWldacGJtVmtLU0I3WEhKY2JseDBYSFJjZEhObGJHVmpkQ0E5SUhSeWRXVTdYSEpjYmx4MFhIUjlYSEpjYmx4MFhIUnlaWFIxY200Z2RHaHBjeTVsWVdOb0tHWjFibU4wYVc5dUtDa2dlMXh5WEc1Y2RGeDBYSFIyWVhJZ2RDQTlJSFJvYVhNdWRIbHdaVHRjY2x4dVhIUmNkRngwYVdZZ0tIUWdQVDBnSjJOb1pXTnJZbTk0SnlCOGZDQjBJRDA5SUNkeVlXUnBieWNwSUh0Y2NseHVYSFJjZEZ4MFhIUjBhR2x6TG1Ob1pXTnJaV1FnUFNCelpXeGxZM1E3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEZ4MFpXeHpaU0JwWmlBb2RHaHBjeTUwWVdkT1lXMWxMblJ2VEc5M1pYSkRZWE5sS0NrZ1BUMGdKMjl3ZEdsdmJpY3BJSHRjY2x4dVhIUmNkRngwWEhSMllYSWdKSE5sYkNBOUlDUW9kR2hwY3lrdWNHRnlaVzUwS0NkelpXeGxZM1FuS1R0Y2NseHVYSFJjZEZ4MFhIUnBaaUFvYzJWc1pXTjBJQ1ltSUNSelpXeGJNRjBnSmlZZ0pITmxiRnN3WFM1MGVYQmxJRDA5SUNkelpXeGxZM1F0YjI1bEp5a2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MEx5OGdaR1Z6Wld4bFkzUWdZV3hzSUc5MGFHVnlJRzl3ZEdsdmJuTmNjbHh1WEhSY2RGeDBYSFJjZENSelpXd3VabWx1WkNnbmIzQjBhVzl1SnlrdWMyVnNaV04wWldRb1ptRnNjMlVwTzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBYSFIwYUdsekxuTmxiR1ZqZEdWa0lEMGdjMlZzWldOME8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlLVHRjY2x4dVhIUjlPMXh5WEc1Y2NseHVYSFF2THlCbGVIQnZjMlVnWkdWaWRXY2dkbUZ5WEhKY2JseDBKQzVtYmk1aGFtRjRVM1ZpYldsMExtUmxZblZuSUQwZ1ptRnNjMlU3WEhKY2JseHlYRzVjZEM4dklHaGxiSEJsY2lCbWJpQm1iM0lnWTI5dWMyOXNaU0JzYjJkbmFXNW5YSEpjYmx4MFpuVnVZM1JwYjI0Z2JHOW5LQ2tnZTF4eVhHNWNkRngwYVdZZ0tDRWtMbVp1TG1GcVlYaFRkV0p0YVhRdVpHVmlkV2NwWEhKY2JseDBYSFJjZEhKbGRIVnlianRjY2x4dVhIUmNkSFpoY2lCdGMyY2dQU0FuVzJweGRXVnllUzVtYjNKdFhTQW5JQ3NnUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbXB2YVc0dVkyRnNiQ2hoY21kMWJXVnVkSE1zSnljcE8xeHlYRzVjZEZ4MGFXWWdLSGRwYm1SdmR5NWpiMjV6YjJ4bElDWW1JSGRwYm1SdmR5NWpiMjV6YjJ4bExteHZaeWtnZTF4eVhHNWNkRngwWEhSM2FXNWtiM2N1WTI5dWMyOXNaUzVzYjJjb2JYTm5LVHRjY2x4dVhIUmNkSDFjY2x4dVhIUmNkR1ZzYzJVZ2FXWWdLSGRwYm1SdmR5NXZjR1Z5WVNBbUppQjNhVzVrYjNjdWIzQmxjbUV1Y0c5emRFVnljbTl5S1NCN1hISmNibHgwWEhSY2RIZHBibVJ2ZHk1dmNHVnlZUzV3YjNOMFJYSnliM0lvYlhObktUdGNjbHh1WEhSY2RIMWNjbHh1WEhSOVhISmNibHh5WEc1Y2RIMHBLQ0FvZEhsd1pXOW1LR3BSZFdWeWVTa2dJVDBnSjNWdVpHVm1hVzVsWkNjcElEOGdhbEYxWlhKNUlEb2dkMmx1Wkc5M0xscGxjSFJ2SUNrN1hISmNibHh5WEc0dkwzMHBPMXh5WEc0aVhYMD0iLCJyZXF1aXJlKCcuLi9saWIvanF1ZXJ5Rm9ybScpO1xyXG5yZXF1aXJlKCcuLi9tb2QvZm9ybUNoZWNrJyk7XHJcbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi9jb21tb24vZXZlbnRzJyk7XHJcbi8vMzk2MiBicmF6aWxcclxuLy80MTMyIHNhdWRpIGFyYWJpYVxyXG4vLzM5NzQgY2hpbGVcclxudmFyIHNwZWNpYWxDb3VudHJ5SWRzID0gWzM5NjIsIDQxMzIsIDM5NzRdO1xyXG4vLzEgY3BmXHJcbi8vMiBjbnBqXHJcbi8vMyBuaWRcclxuLy80IG5jclxyXG4vLzUgcnV0XHJcbnZhciBzcGVjaWFsQ29kZXMgPSBbMSwgMiwgMywgNCwgN107XHJcbnZhciBzcGVjaWFsWmlwQ29uZmlnID0gcGFnZURhdGEuc3BlY2lhbFppcENvbmZpZyA/IHBhZ2VEYXRhLnNwZWNpYWxaaXBDb25maWcgOiBbXTtcclxudmFyIHNwZWNpYWxQaG9uZUNvbmZpZyA9IHBhZ2VEYXRhLnNwZWNpYWxQaG9uZUNvbmZpZyA/IHBhZ2VEYXRhLnNwZWNpYWxQaG9uZUNvbmZpZyA6IFtdO1xyXG4vL2Zvcm0gc291cmNl77yMY2l0eSBkYXRhKGRlZmF1bHQsdXNlcixsb2NhdGlvbilcclxudmFyIGZvcm1fZGF0YV9zb3VyY2UgPSAnZGVmYXVsdCc7XHJcbnZhciBob3VzZU5vQ291bnRyeUlkcyA9IHBhZ2VEYXRhLmhvdXNlTm9Db3VudHJ5SWRzID8gcGFnZURhdGEuaG91c2VOb0NvdW50cnlJZHMgOiBbXTtcclxuXHJcbi8v6I635Y+W6KGo5Y2V5Lit55qERE9N5YWD57Sg5ZKM5YC8XHJcbnZhciBnZXRfZm9ybV9qc29uID0gZnVuY3Rpb24oZWxlbV9mb3JtKSB7ICAgIFxyXG4gICAgdmFyIGZvcm1fanNvbiA9IHt9O1xyXG5cclxuICAgIGZvcm1fanNvblsnYWRkcmVzc19pZCddID0gZWxlbV9mb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZGRyZXNzX2lkXCJdJyk7XHJcbiAgICBmb3JtX2pzb25bJ2FkZHJlc3NfaWRfdmFsJ10gPSAkLnRyaW0oZm9ybV9qc29uWydhZGRyZXNzX2lkJ10udmFsKCkpO1xyXG5cclxuICAgIGZvcm1fanNvblsnZ2VuZGVyJ10gPSBlbGVtX2Zvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFkZHJlc3NbZ2VuZGVyXVwiXScpO1xyXG4gICAgZm9ybV9qc29uWydnZW5kZXJfdmFsJ10gPSAkLnRyaW0oZm9ybV9qc29uWydnZW5kZXInXS52YWwoKSk7XHJcblxyXG4gICAgZm9ybV9qc29uWydmaXJzdF9uYW1lJ10gPSBlbGVtX2Zvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFkZHJlc3NbZmlyc3RfbmFtZV1cIl0nKTtcclxuICAgIGZvcm1fanNvblsnZmlyc3RfbmFtZV92YWwnXSA9ICQudHJpbShmb3JtX2pzb25bJ2ZpcnN0X25hbWUnXS52YWwoKSk7XHJcblxyXG4gICAgZm9ybV9qc29uWydsYXN0X25hbWUnXSA9IGVsZW1fZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWRkcmVzc1tsYXN0X25hbWVdXCJdJyk7XHJcbiAgICBmb3JtX2pzb25bJ2xhc3RfbmFtZV92YWwnXSA9ICQudHJpbShmb3JtX2pzb25bJ2xhc3RfbmFtZSddLnZhbCgpKTtcclxuXHJcbiAgICBmb3JtX2pzb25bJ2FkZHJlc3NfMSddID0gZWxlbV9mb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZGRyZXNzW2FkZHJlc3NfMV1cIl0nKTtcclxuICAgIGZvcm1fanNvblsnYWRkcmVzc18xX3ZhbCddID0gJC50cmltKGZvcm1fanNvblsnYWRkcmVzc18xJ10udmFsKCkpO1xyXG5cclxuICAgIGZvcm1fanNvblsnYWRkcmVzc18yJ10gPSBlbGVtX2Zvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFkZHJlc3NbYWRkcmVzc18yXVwiXScpO1xyXG4gICAgZm9ybV9qc29uWydhZGRyZXNzXzJfdmFsJ10gPSAkLnRyaW0oZm9ybV9qc29uWydhZGRyZXNzXzInXS52YWwoKSk7XHJcblxyXG4gICAgZm9ybV9qc29uWydjaXR5J10gPSBlbGVtX2Zvcm0uZmluZCgnc2VsZWN0W25hbWU9XCJhZGRyZXNzW2NpdHldXCJdJyk7XHJcbiAgICBmb3JtX2pzb25bJ2NpdHlfdmFsJ10gPSBwYXJzZUludChmb3JtX2pzb25bJ2NpdHknXS52YWwoKSk7XHJcblxyXG4gICAgZm9ybV9qc29uWydjaXR5X3RleHQnXSA9IGVsZW1fZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWRkcmVzc1tjaXR5X3RleHRdXCJdJyk7XHJcbiAgICBmb3JtX2pzb25bJ2NpdHlfdGV4dF92YWwnXSA9ICQudHJpbShmb3JtX2pzb25bJ2NpdHlfdGV4dCddLnZhbCgpKTtcclxuXHJcbiAgICBmb3JtX2pzb25bJ2NvdW50cnknXSA9IGVsZW1fZm9ybS5maW5kKCdzZWxlY3RbbmFtZT1cImFkZHJlc3NbY291bnRyeV1cIl0nKTtcclxuICAgIGZvcm1fanNvblsnY291bnRyeV92YWwnXSA9IHBhcnNlSW50KGZvcm1fanNvblsnY291bnRyeSddLnZhbCgpKTtcclxuXHJcbiAgICBmb3JtX2pzb25bJ2NvdW50cnlfc2VsZWN0J10gPSBlbGVtX2Zvcm0uZmluZCgnc2VsZWN0W25hbWU9XCJhZGRyZXNzW2NvdW50cnldXCJdIG9wdGlvbltzZWxlY3RlZF0nKTtcclxuICAgIGZvcm1fanNvblsnY291bnRyeV9zZWxlY3RfbmFtZSddID0gZm9ybV9qc29uWydjb3VudHJ5X3NlbGVjdCddLmh0bWwoKTtcclxuXHJcbiAgICBmb3JtX2pzb25bJ3RheF9jb2RlX3R5cGUnXSA9IGVsZW1fZm9ybS5maW5kKCdzZWxlY3RbbmFtZT1cImFkZHJlc3NbdGF4X2NvZGVfdHlwZV1cIl0nKTtcclxuICAgIGZvcm1fanNvblsndGF4X2NvZGVfdHlwZV92YWwnXSA9IHBhcnNlSW50KGZvcm1fanNvblsndGF4X2NvZGVfdHlwZSddLnZhbCgpKTtcclxuXHJcbiAgICBmb3JtX2pzb25bJ3RheF9jb2RlX3ZhbHVlJ10gPSBlbGVtX2Zvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFkZHJlc3NbdGF4X2NvZGVfdmFsdWVdXCJdJyk7XHJcbiAgICBmb3JtX2pzb25bJ3RheF9jb2RlX3ZhbHVlX3ZhbCddID0gJC50cmltKGZvcm1fanNvblsndGF4X2NvZGVfdmFsdWUnXS52YWwoKSk7XHJcblxyXG4gICAgZm9ybV9qc29uWydwcm92aW5jZSddID0gZWxlbV9mb3JtLmZpbmQoJ3NlbGVjdFtuYW1lPVwiYWRkcmVzc1twcm92aW5jZV1cIl0nKTtcclxuICAgIGZvcm1fanNvblsncHJvdmluY2VfdmFsJ10gPSBwYXJzZUludChmb3JtX2pzb25bJ3Byb3ZpbmNlJ10udmFsKCkpO1xyXG5cclxuICAgIGZvcm1fanNvblsncHJvdmluY2VfdGV4dCddID0gZWxlbV9mb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZGRyZXNzW3Byb3ZpbmNlX3RleHRdXCJdJyk7XHJcbiAgICBmb3JtX2pzb25bJ3Byb3ZpbmNlX3RleHRfdmFsJ10gPSAkLnRyaW0oZm9ybV9qc29uWydwcm92aW5jZV90ZXh0J10udmFsKCkpO1xyXG5cclxuICAgIGZvcm1fanNvblsnemlwJ10gPSBlbGVtX2Zvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFkZHJlc3NbemlwXVwiXScpO1xyXG4gICAgZm9ybV9qc29uWyd6aXBfdmFsJ10gPSAkLnRyaW0oZm9ybV9qc29uWyd6aXAnXS52YWwoKSk7XHJcblxyXG4gICAgZm9ybV9qc29uWydwaG9uZSddID0gZWxlbV9mb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZGRyZXNzW3Bob25lXVwiXScpO1xyXG4gICAgZm9ybV9qc29uWydwaG9uZV92YWwnXSA9ICQudHJpbShmb3JtX2pzb25bJ3Bob25lJ10udmFsKCkpO1xyXG5cclxuICAgIGZvcm1fanNvblsnZW1haWwnXSA9IGVsZW1fZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWRkcmVzc1tlbWFpbF1cIl0nKTtcclxuICAgIGZvcm1fanNvblsnZW1haWxfdmFsJ10gPSAkLnRyaW0oZm9ybV9qc29uWydlbWFpbCddLnZhbCgpKTtcclxuXHJcbiAgICAvL1N0YXRlL1Byb3ZpbmNlL1JlZ2lvbuWJjemdouaYvuekuirnmoTlrrnlmahcclxuICAgIGZvcm1fanNvblsncHJvdmluY2VSZXF1aXJlZCddID0gZWxlbV9mb3JtLmZpbmQoJyNwcm92aW5jZVJlcXVpcmVkJyk7XHJcbiAgICAvL0NpdHnliY3pnaLmmL7npLoq55qE5a655ZmoXHJcbiAgICBmb3JtX2pzb25bJ2NpdHlSZXF1aXJlZCddID0gZWxlbV9mb3JtLmZpbmQoJyNjaXR5UmVxdWlyZWQnKTtcclxuXHJcbiAgICAvL0NQRiBvciBDTlBKIGNvZGXnmoTlrrnlmahcclxuICAgIGZvcm1fanNvblsndGF4Q29kZSddID0gZWxlbV9mb3JtLmZpbmQoJyN0YXhDb2RlJyk7XHJcblxyXG4gICAgLy/pl6jniYzlj7dcclxuICAgIGZvcm1fanNvblsnaG91c2Vfbm9fY29udGFpbmVyJ10gPSBlbGVtX2Zvcm0uZmluZCgnI2hvdXNlX25vJyk7XHJcbiAgICBmb3JtX2pzb25bJ2hvdXNlX25vJ10gPSBlbGVtX2Zvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFkZHJlc3NbaG91c2Vfbm9dXCJdJyk7XHJcbiAgICBmb3JtX2pzb25bJ2hvdXNlX25vX3ZhbCddID0gJC50cmltKGZvcm1fanNvblsnaG91c2Vfbm8nXS52YWwoKSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm1fanNvbjtcclxufTtcclxuXHJcbi8vZGVmYXVsdCB2YWxpZCBmb3JtIGl0ZW1zXHJcbnZhciBnZXREZWZhdWx0SXRlbXMgPSBmdW5jdGlvbihrZXkpIHtcclxuICAgIHZhciBkZWZhdWx0SXRlbXMgPSB7XHJcbiAgICAgICAgXCJhZGRyZXNzW2ZpcnN0X25hbWVdXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJudWxsXCIsXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nLnBhZ2VfY2hlY2tvdXRfZmlyc3RfbmFtZV9taW5pbXVtLFxyXG4gICAgICAgICAgICAgICAgZXJyRXZlbnQ6IFwiZmlyc3RfbmFtZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWlubGVuZ3RoXCIsXHJcbiAgICAgICAgICAgICAgICBtaW5sZW5ndGg6IDIsXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nLnBhZ2VfY2hlY2tvdXRfZmlyc3RfbmFtZV9taW5pbXVtLFxyXG4gICAgICAgICAgICAgICAgZXJyRXZlbnQ6IFwiZmlyc3RfbmFtZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiYWRkcmVzc1tsYXN0X25hbWVdXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJudWxsXCIsXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nLnBhZ2VfY2hlY2tvdXRfbGFzdF9uYW1lX21pbmltdW0sXHJcbiAgICAgICAgICAgICAgICBlcnJFdmVudDogXCJsYXN0X25hbWVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1pbmxlbmd0aFwiLFxyXG4gICAgICAgICAgICAgICAgbWlubGVuZ3RoOiAyLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZy5wYWdlX2NoZWNrb3V0X2xhc3RfbmFtZV9taW5pbXVtLFxyXG4gICAgICAgICAgICAgICAgZXJyRXZlbnQ6IFwibGFzdF9uYW1lXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJhZGRyZXNzW2FkZHJlc3NfMV1cIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bGxcIixcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmcucGFnZV9jaGVja291dF9zaGlwcGluZ19hZGRyZXNzX2F0X2xlYXN0LFxyXG4gICAgICAgICAgICAgICAgZXJyRXZlbnQ6IFwiYWRkcmVzc18xXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtaW5sZW5ndGhcIixcclxuICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogNSxcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmcucGFnZV9jaGVja291dF9zaGlwcGluZ19hZGRyZXNzX2F0X2xlYXN0LFxyXG4gICAgICAgICAgICAgICAgZXJyRXZlbnQ6IFwiYWRkcmVzc18xXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJhZGRyZXNzW2NvdW50cnldXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJudWxsXCIsXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nLnBhZ2VfY2hlY2tvdXRfcGxlYXNlX3NlbGVjdF9jb3VudHJ5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiYWRkcmVzc1tjaXR5X3RleHRdXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJudWxsXCIsXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nLnBhZ2VfY2hlY2tvdXRfeW91cl9jaXR5X2F0X2xlYXN0LFxyXG4gICAgICAgICAgICAgICAgZXJyRXZlbnQ6IFwiY2l0eVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWlubGVuZ3RoXCIsXHJcbiAgICAgICAgICAgICAgICBtaW5sZW5ndGg6IDMsXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nLnBhZ2VfY2hlY2tvdXRfeW91cl9jaXR5X2F0X2xlYXN0LFxyXG4gICAgICAgICAgICAgICAgZXJyRXZlbnQ6IFwiY2l0eVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwicmVnZXhwXCIsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKC9eKFxcRHszLDI4fSkkLyksXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nLnBhZ2VfY2hlY2tvdXRfeW91cl9jaXR5X2Zvcm1hdCxcclxuICAgICAgICAgICAgICAgIGVyckV2ZW50OiBcImNpdHlcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImFkZHJlc3NbcHJvdmluY2VdXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJudWxsXCIsXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nLnBhZ2VfY2hlY2tvdXRfcGxlYXNlX3NlbGVjdF9wcm92aW5jZSxcclxuICAgICAgICAgICAgICAgIGVyckV2ZW50OiBcInN0YXRlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJhZGRyZXNzW3ppcF1cIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bGxcIixcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmcucGFnZV9jaGVja291dF96aXBfY29kZV9hdF9sZWFzdCxcclxuICAgICAgICAgICAgICAgIGVyckV2ZW50OiBcInppcFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWlubGVuZ3RoXCIsXHJcbiAgICAgICAgICAgICAgICBtaW5sZW5ndGg6IDIsXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nLnBhZ2VfY2hlY2tvdXRfemlwX2NvZGVfYXRfbGVhc3QsXHJcbiAgICAgICAgICAgICAgICBlcnJFdmVudDogXCJ6aXBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImFkZHJlc3NbcGhvbmVdXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJudWxsXCIsXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nLnBhZ2VfY2hlY2tvdXRfcGhvbmVfbnVtYmVyX2F0X2xlYXN0LFxyXG4gICAgICAgICAgICAgICAgZXJyRXZlbnQ6IFwicGhvbmVfbnVtYmVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtaW5sZW5ndGhcIixcclxuICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogNixcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmcucGFnZV9jaGVja291dF9waG9uZV9udW1iZXJfYXRfbGVhc3QsXHJcbiAgICAgICAgICAgICAgICBlcnJFdmVudDogXCJwaG9uZV9udW1iZXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImFkZHJlc3NbZW1haWxdXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJudWxsXCIsXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nLnBhZ2VfbG9naW5fZW50ZXJfZW1haWwsXHJcbiAgICAgICAgICAgICAgICBlcnJFdmVudDogXCJlbWFpbF9lbXB0eVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmcucGFnZV9sb2dpbl9jaGVja19lbWFpbF9mb3JtYXQsXHJcbiAgICAgICAgICAgICAgICBlcnJFdmVudDogXCJlbWFpbF9lcnJvXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJhZGRyZXNzW2hvdXNlX25vXVwiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwicmVnZXhwXCIsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKC9eXFxkW1xcdy9cXC1dezAsNH0kLywgXCJpXCIpLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZy5wYWdlX2NvbW1vbl9hZGRyZXNzX2hvdXNlX25vX2Vycm9yLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHR5cGVvZiBrZXkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkZWZhdWx0SXRlbXNba2V5XSAhPT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0SXRlbXNba2V5XSA6IGRlZmF1bHRJdGVtc1xyXG59O1xyXG52YXIgaXRlbXMgPSBnZXREZWZhdWx0SXRlbXMoKTtcclxudmFyIHNldEVycm9yID0gZnVuY3Rpb24gKG9iaiwgZXJyTXNnLCBzaG93TGV2ZWwsIGVyckV2ZW50KSB7XHJcbiAgICBvYmouZm9jdXMoKTtcclxuICAgIG9iai5hZGRDbGFzcygnZmllbGQtZXJyb3InKTtcclxuICAgIGlmKGVyckV2ZW50ICE9ICcnICYmIGVyckV2ZW50ICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcihldmVudHMuY2hlY2tvdXRFcnJvcixlcnJFdmVudCk7XHJcbiAgICB9XHJcbiAgICBpZihzaG93TGV2ZWwgPT0gMCkge1xyXG4gICAgICAgIGlmKG9iai5uZXh0KCcuZXJyb3ItdGlwJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBvYmoubmV4dCgnLmVycm9yLXRpcCcpLmh0bWwoZXJyTXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmouYWZ0ZXIoJzxwIGNsYXNzPVwiZXJyb3ItdGlwXCI+JyArIGVyck1zZyArICc8L3A+Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKHNob3dMZXZlbCA9PSAxKSB7XHJcbiAgICAgICAgb2JqID0gb2JqLnBhcmVudCgpO1xyXG4gICAgICAgIGlmKG9iai5jaGlsZHJlbignLmVycm9yLXRpcCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgb2JqLmNoaWxkcmVuKCcuZXJyb3ItdGlwJykuaHRtbChlcnJNc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9iai5hcHBlbmQoJzxwIGNsYXNzPVwiZXJyb3ItdGlwXCI+JyArIGVyck1zZyArICc8L3A+Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKHNob3dMZXZlbCA9PSAyKSB7XHJcbiAgICAgICAgb2JqID0gb2JqLnBhcmVudCgpLnBhcmVudCgpO1xyXG4gICAgICAgIGlmKG9iai5jaGlsZHJlbignLmVycm9yLXRpcCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgb2JqLmNoaWxkcmVuKCcuZXJyb3ItdGlwJykuaHRtbChlcnJNc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9iai5hcHBlbmQoJzxwIGNsYXNzPVwiZXJyb3ItdGlwXCI+JyArIGVyck1zZyArICc8L3A+Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbnZhciBjbGVhbkVycm9yVGlwRXh0cmEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZigkKCcuc2FtcGxlLXNhbGUtYWRkcmVzcy10aXBzJykubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgJCgnLnNhbXBsZS1zYWxlLWFkZHJlc3MtdGlwcycpLnJlbW92ZUNsYXNzKCdzYW1wbGUtc2FsZS1hZGRyZXNzLXRpcHMtZXh0cmEnKTtcclxuICAgIH1cclxufVxyXG5cclxudmFyIGNsZWFuRXJyb3IgPSBmdW5jdGlvbihlbGVtLCBzaG93TGV2ZWwpIHtcclxuICAgIGVsZW0ucmVtb3ZlQ2xhc3MoJ2ZpZWxkLWVycm9yJyk7XHJcbiAgICBpZihzaG93TGV2ZWwgPT0gMCkge1xyXG4gICAgICAgIGVsZW0ubmV4dCgnLmVycm9yLXRpcCcpLnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIGlmKHNob3dMZXZlbCA9PSAxKSB7XHJcbiAgICAgICAgZWxlbS5wYXJlbnQoKS5jaGlsZHJlbignLmVycm9yLXRpcCcpLnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIGlmKHNob3dMZXZlbCA9PSAyKSB7XHJcbiAgICAgICAgZWxlbS5wYXJlbnQoKS5wYXJlbnQoKS5jaGlsZHJlbignLmVycm9yLXRpcCcpLnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIGlmKHNob3dMZXZlbCA9PSAnYWxsJykge1xyXG4gICAgICAgIGVsZW0uZmluZCgnLmVycm9yLXRpcCcpLnJlbW92ZSgpO1xyXG4gICAgICAgIGVsZW0uZmluZCgnLmZpZWxkLWVycm9yJykucmVtb3ZlQ2xhc3MoJ2ZpZWxkLWVycm9yJyk7XHJcbiAgICB9XHJcbiAgICBjbGVhbkVycm9yVGlwRXh0cmEoKTtcclxufTtcclxudmFyIGNoZWNrT25lSXRlbSA9IGZ1bmN0aW9uIChlbGVtLCBpc1Nob3dFcnJvcikge1xyXG4gICAgdmFyIGVsZW0gPSAkKGVsZW0pO1xyXG4gICAgdmFyIGlwdF9uYW1lID0gZWxlbS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZWxlbV9mb3JtID0gZWxlbS5jbG9zZXN0KCdmb3JtJyk7XHJcbiAgICB2YXIgZm9ybV9qc29uID0gZ2V0X2Zvcm1fanNvbihlbGVtX2Zvcm0pO1xyXG5cclxuICAgIGNoZWNrX3NwZWNpYWxfY291bnRyeV9waG9uZShmb3JtX2pzb24pO1xyXG4gICAgY2hlY2tfc3BlY2lhbF9jb3VudHJ5X3ppcChmb3JtX2pzb24pO1xyXG5cclxuICAgIGlmIChpcHRfbmFtZSA9PSAnYWRkcmVzc1t0YXhfY29kZV92YWx1ZV0nKSB7ICAgICAgICAgICAgICAgICAvL+mqjOivgSBDUEYgb3IgQ05QSiBjb2RlXHJcbiAgICAgICAgdmFyIHRheF9jb2RlX3R5cGVfdmFsID0gZm9ybV9qc29uWyd0YXhfY29kZV90eXBlX3ZhbCddO1xyXG4gICAgICAgIHZhciB0YXhfY29kZV92YWx1ZV92YWwgPSBmb3JtX2pzb25bJ3RheF9jb2RlX3ZhbHVlX3ZhbCddO1xyXG4gICAgICAgIGlmICh0YXhfY29kZV90eXBlX3ZhbCA9PSBzcGVjaWFsQ29kZXNbMF0gJiYgKHRheF9jb2RlX3ZhbHVlX3ZhbC5sZW5ndGggPCAxNCkpIHtcclxuICAgICAgICAgICAgaWYgKGlzU2hvd0Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihmb3JtX2pzb25bJ3RheF9jb2RlX3ZhbHVlJ10sIF9sYW5nLnBhZ2VfY29tbW9uX2NwZl9jb2RlX2Vycm9yX3RpcCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGF4X2NvZGVfdHlwZV92YWwgPT0gc3BlY2lhbENvZGVzWzFdICYmICh0YXhfY29kZV92YWx1ZV92YWwubGVuZ3RoIDwgMTgpKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1Nob3dFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZm9ybV9qc29uWyd0YXhfY29kZV92YWx1ZSddLCBfbGFuZy5wYWdlX2NvbW1vbl9jbnBqX2NvZGVfZXJyb3JfdGlwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXhfY29kZV90eXBlX3ZhbCA9PSBzcGVjaWFsQ29kZXNbMl0gJiYgKHRheF9jb2RlX3ZhbHVlX3ZhbC5sZW5ndGggIT0gMTAgfHwgaXNOYU4odGF4X2NvZGVfdmFsdWVfdmFsKSkpIHtcclxuICAgICAgICAgICAgaWYgKGlzU2hvd0Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihmb3JtX2pzb25bJ3RheF9jb2RlX3ZhbHVlJ10sIF9sYW5nLnBhZ2VfY2hlY2tvdXRfbmF0aW9uYWxfaWRfZXJyb3JfdGlwcywgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGF4X2NvZGVfdHlwZV92YWwgPT0gc3BlY2lhbENvZGVzWzNdICYmICh0YXhfY29kZV92YWx1ZV92YWwubGVuZ3RoICE9IDEwIHx8IGlzTmFOKHRheF9jb2RlX3ZhbHVlX3ZhbCkpKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1Nob3dFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZm9ybV9qc29uWyd0YXhfY29kZV92YWx1ZSddLCBfbGFuZy5wYWdlX2NoZWNrb3V0X2NvbW1lcmNpYWxfcmVnaXN0cnlfZXJyb3JfdGlwcywgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGF4X2NvZGVfdHlwZV92YWwgPT0gc3BlY2lhbENvZGVzWzRdICYmICh0YXhfY29kZV92YWx1ZV92YWwubGVuZ3RoIDwgMTIpKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1Nob3dFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZm9ybV9qc29uWyd0YXhfY29kZV92YWx1ZSddLCBfbGFuZy5wYWdlX2NvbW1vbl9ydXRfY29kZV9lcnJvcl90aXAsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhbkVycm9yKGVsZW0sIDApO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/lhbblroPovpPlhaXmoYblkozkuIvmi4nmoYZcclxuICAgIGZvciAodmFyIGtleSBpbiBpdGVtcykge1xyXG4gICAgICAgIGlmIChpcHRfbmFtZSA9PSBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSB7fTtcclxuICAgICAgICAgICAgaXRlbVtpcHRfbmFtZV0gPSBpdGVtc1trZXldO1xyXG4gICAgICAgICAgICB2YXIgaXNDaGVja2VkID0gZWxlbV9mb3JtLmZvcm1DaGVjayhpdGVtLCB7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3I6IGZ1bmN0aW9uIChvYmosIGVyck1zZywgZXJyRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihpc1Nob3dFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpcHRfbmFtZSA9PSAnYWRkcmVzc1tmaXJzdF9uYW1lXScgfHwgaXB0X25hbWUgPT0gJ2FkZHJlc3NbbGFzdF9uYW1lXScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKG9iaiwgZXJyTXNnLCAxLCBlcnJFdmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihvYmosIGVyck1zZywgMCwgZXJyRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0NoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmKGlwdF9uYW1lID09ICdhZGRyZXNzW2ZpcnN0X25hbWVdJyB8fCBpcHRfbmFtZSA9PSAnYWRkcmVzc1tsYXN0X25hbWVdJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFuRXJyb3IoZWxlbSwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vZmlyc3QgbmFtZSDlkowgbGFzdCBuYW1lIOaAu+mVv+W6puS4jeetiei2hei/hzM0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpcnN0X25hbWUgPSBlbGVtX2Zvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFkZHJlc3NbZmlyc3RfbmFtZV1cIl0nKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdF9uYW1lID0gZWxlbV9mb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZGRyZXNzW2xhc3RfbmFtZV1cIl0nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGZpcnN0X25hbWUudmFsKCkubGVuZ3RoICsgbGFzdF9uYW1lLnZhbCgpLmxlbmd0aCkgPiAzNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpc1Nob3dFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZmlyc3RfbmFtZSwgX2xhbmcucGFnZV9jaGVja291dF9mdWxsX25hbWVfY2Fubm90X2VjeGVlZCwgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFuRXJyb3IoZmlyc3RfbmFtZSwgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhbkVycm9yKGVsZW0sIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL2Rpc2FibGUgZmlsdGVyIHNhbXBsZXNhbGVcclxuICAgIHZhciBoYXNTYW1wbGVTYWxlID0gcGFnZURhdGEuaGFzU2FtcGxlU2FsZVxyXG4gICAgaWYgKGhhc1NhbXBsZVNhbGUgPT0gMSkge1xyXG4gICAgICAgIHZhciBmaWxlZF92YWx1ZSA9IGVsZW0udmFsKCk7XHJcbiAgICAgICAgZmlsZWRfdmFsdWUgPSBmaWxlZF92YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHZhciB1a19hZGRyZXNfYXJyYXkgPSBwYWdlRGF0YS51a0FkZHJlc0ZpbHRlci51a19hZGRyZXNfYXJyYXkgPyBwYWdlRGF0YS51a0FkZHJlc0ZpbHRlci51a19hZGRyZXNfYXJyYXkgOiBbXVxyXG4gICAgICAgIHZhciB1a19hZGRyZXNzX2ZpbHRlciA9IHBhZ2VEYXRhLnVrQWRkcmVzRmlsdGVyLnVrX2FkZHJlc3NfZmlsdGVyID8gcGFnZURhdGEudWtBZGRyZXNGaWx0ZXIudWtfYWRkcmVzc19maWx0ZXIgOiBbXVxyXG4gICAgICAgIHZhciB1a196aXBfZmlsdGVyID0gcGFnZURhdGEudWtBZGRyZXNGaWx0ZXIudWtfemlwX2ZpbHRlciA/IHBhZ2VEYXRhLnVrQWRkcmVzRmlsdGVyLnVrX3ppcF9maWx0ZXIgOiBbXVxyXG4gICAgICAgIGlmICgkLmluQXJyYXkoaXB0X25hbWUsIHVrX2FkZHJlc19hcnJheSkgIT0gLTEpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbT0wOyBtIDwgdWtfYWRkcmVzc19maWx0ZXIubGVuZ3RoOyBtKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlZF92YWx1ZS5pbmRleE9mKHVrX2FkZHJlc3NfZmlsdGVyW21dKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzU2hvd0Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVsZW0sIF9sYW5nLnBhZ2VfY29tbW9uX2Nhbl9ub3Rfc2hpcCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbGVhbkVycm9yKGVsZW0sIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXB0X25hbWUgPT0gJ2FkZHJlc3NbemlwXScpIHtcclxuICAgICAgICAgICAgZmlsZWRfdmFsdWUgPSBmaWxlZF92YWx1ZS5yZXBsYWNlKC9cXHMqL2csICcnKVxyXG4gICAgICAgICAgICBmb3IgKHZhciBuPTA7IG4gPCB1a196aXBfZmlsdGVyLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZWRfdmFsdWUuaW5kZXhPZih1a196aXBfZmlsdGVyW25dKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzU2hvd0Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVsZW0sIF9sYW5nLnBhZ2VfY29tbW9uX2Nhbl9ub3Rfc2hpcCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbGVhbkVycm9yKGVsZW0sIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxudmFyIGNoZWNrX3NwZWNpYWxfY291bnRyeV9waG9uZSA9IGZ1bmN0aW9uIChmb3JtX2pzb24pIHtcclxuICAgIHZhciBjb3VudHJ5SWQgPSBmb3JtX2pzb25bJ2NvdW50cnlfdmFsJ107XHJcbiAgICB2YXIgY29uZmlnID0gZmFsc2U7XHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgc3BlY2lhbFBob25lQ29uZmlnLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYoc3BlY2lhbFBob25lQ29uZmlnW2ldLmNvdW50cnlJZHMuaW5kZXhPZihjb3VudHJ5SWQpID4gLTEpIHtcclxuICAgICAgICAgICBjb25maWcgPSBzcGVjaWFsUGhvbmVDb25maWdbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoY29uZmlnICE9PSBmYWxzZSkge1xyXG4gICAgICAgIGl0ZW1zW1wiYWRkcmVzc1twaG9uZV1cIl0gPSAgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bGxcIixcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmcucGFnZV9jaGVja291dF9waG9uZV9udW1iZXJfYXRfbGVhc3QsXHJcbiAgICAgICAgICAgICAgICBlcnJFdmVudDogXCJwaG9uZV9udW1iZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInJlZ2V4cFwiLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChjb25maWcucGF0dGVybiksXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nW2NvbmZpZy5lcnJUaXBdLFxyXG4gICAgICAgICAgICAgICAgZXJyRXZlbnQ6IFwicGhvbmVfbnVtYmVyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbXNbXCJhZGRyZXNzW3Bob25lXVwiXSA9IGdldERlZmF1bHRJdGVtcyhcImFkZHJlc3NbcGhvbmVdXCIpXHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBjaGVja19zcGVjaWFsX2NvdW50cnlfemlwID0gZnVuY3Rpb24gKGZvcm1fanNvbikge1xyXG4gICAgdmFyIGNvdW50cnlJZCA9IGZvcm1fanNvblsnY291bnRyeV92YWwnXTtcclxuICAgIHZhciBjb25maWcgPSBmYWxzZTtcclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzcGVjaWFsWmlwQ29uZmlnLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYoc3BlY2lhbFppcENvbmZpZ1tpXS5jb3VudHJ5SWRzLmluZGV4T2YoY291bnRyeUlkKSA+IC0xKSB7XHJcbiAgICAgICAgICAgY29uZmlnID0gc3BlY2lhbFppcENvbmZpZ1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihjb25maWcgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgaXRlbXNbXCJhZGRyZXNzW3ppcF1cIl0gPSAgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInJlZ2V4cFwiLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChjb25maWcucGF0dGVybiksXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nW2NvbmZpZy5lcnJUaXBdLFxyXG4gICAgICAgICAgICAgICAgZXJyRXZlbnQ6IFwiemlwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbXNbXCJhZGRyZXNzW3ppcF1cIl0gPSBnZXREZWZhdWx0SXRlbXMoXCJhZGRyZXNzW3ppcF1cIilcclxuICAgIH1cclxufVxyXG5cclxudmFyIGNvdW50cnlfZXJyb3JfdGlwc19leHRyYSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKCQoJy5zYW1wbGUtc2FsZS1hZGRyZXNzLXRpcHMnKS5sZW5ndGggPiAwKXtcclxuICAgICAgICAkKCcuc2FtcGxlLXNhbGUtYWRkcmVzcy10aXBzJykuYWRkQ2xhc3MoJ3NhbXBsZS1zYWxlLWFkZHJlc3MtdGlwcy1leHRyYScpO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgY2hlY2tfYWRkcl9mb3JtID0gZnVuY3Rpb24oZWxlbV9mb3JtKSB7XHJcbiAgICBpZihlbGVtX2Zvcm0ubGVuZ3RoIDwgMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHZhciBmb3JtX2pzb24gPSBnZXRfZm9ybV9qc29uKGVsZW1fZm9ybSk7XHJcblxyXG4gICAgaWYoZm9ybV9qc29uWydlbWFpbCddLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgaWYoISBjaGVja09uZUl0ZW0oZm9ybV9qc29uWydlbWFpbCddLCB0cnVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoISBjaGVja09uZUl0ZW0oZm9ybV9qc29uWydwaG9uZSddLCB0cnVlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmKCEgY2hlY2tPbmVJdGVtKGZvcm1fanNvblsnZmlyc3RfbmFtZSddLCB0cnVlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmKCEgY2hlY2tPbmVJdGVtKGZvcm1fanNvblsnbGFzdF9uYW1lJ10sIHRydWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGZvcm1fanNvblsnaG91c2Vfbm8nXS5pcygnOnZpc2libGUnKSkge1xyXG4gICAgICAgIGlmKCEgY2hlY2tPbmVJdGVtKGZvcm1fanNvblsnaG91c2Vfbm8nXSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKCEgY2hlY2tPbmVJdGVtKGZvcm1fanNvblsnYWRkcmVzc18xJ10sIHRydWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYoISBjaGVja09uZUl0ZW0oZm9ybV9qc29uWydhZGRyZXNzXzInXSwgdHJ1ZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZighIGNoZWNrT25lSXRlbShmb3JtX2pzb25bJ3Byb3ZpbmNlX3RleHQnXSwgdHJ1ZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZighIGNoZWNrT25lSXRlbShmb3JtX2pzb25bJ2NpdHlfdGV4dCddLCB0cnVlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmKCEgY2hlY2tPbmVJdGVtKGZvcm1fanNvblsnY291bnRyeSddLCB0cnVlKSkge1xyXG4gICAgICAgIGNvdW50cnlfZXJyb3JfdGlwc19leHRyYSgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+mAieaLqeW3tOilv++8iGNvdW50cnlfaWTkuLozOTYy77yJ77yM6ZyA6KaB6aqM6K+BQ1BGIG9yIENOUEogY29kZVxyXG4gICAgLy8gU2F1ZGkgQXJhYmlh77yI6Zi/5ouJ5Lyv77yMY291bnRyeV9pZOS4ujQxMzLvvInml7YsIOmqjOivgUlEIG9yIENSIGNvZGVcclxuICAgIGlmIChzcGVjaWFsQ291bnRyeUlkcy5pbmRleE9mKGZvcm1fanNvblsnY291bnRyeV92YWwnXSkgIT09IC0xKSB7XHJcbiAgICAgICAgaWYoISBjaGVja09uZUl0ZW0oZm9ybV9qc29uWyd0YXhfY29kZV92YWx1ZSddLCB0cnVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmb3JtX2pzb25bJ3Byb3ZpbmNlJ10uaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICBpZighIGNoZWNrT25lSXRlbShmb3JtX2pzb25bJ3Byb3ZpbmNlJ10sIHRydWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZvcm1fanNvblsnY2l0eSddLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgaWYoISBjaGVja09uZUl0ZW0oZm9ybV9qc29uWydjaXR5J10sIHRydWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoISBjaGVja09uZUl0ZW0oZm9ybV9qc29uWyd6aXAnXSwgdHJ1ZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG4vL2JpbmQgZm9ybSBldmVudFxyXG52YXIgaGFuZGxlX2FkZHJfZm9ybSA9IGZ1bmN0aW9uKGVsZW1fZm9ybSkge1xyXG4gICAgaWYoZWxlbV9mb3JtLmxlbmd0aCA8IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YXIgZm9ybV9qc29uID0gZ2V0X2Zvcm1fanNvbihlbGVtX2Zvcm0pO1xyXG4gICBcclxuICAgIHZhciBzZXRQcm92aW5jZSA9IGZ1bmN0aW9uIChjaWQpIHsgICAgICAgIFxyXG5cclxuICAgICAgICBzZXRQcm92aW5jZVNlbGVjdChjaWQpO1xyXG4gICAgICAgIHNldFBob25lUHJlZml4KGNpZCk7XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzZXRQcm92aW5jZVNlbGVjdCA9IGZ1bmN0aW9uIChjaWQpIHtcclxuXHJcbiAgICAgICAgdmFyIHJlZ2lvbl9pc19zZWxlY3QgPSBmYWxzZTtcclxuICAgICAgICB2YXIgYWxsUmVnaW9uX2pzb24gPSBwYWdlRGF0YS5hbGxSZWdpb25fanNvbjsgICAgICAgIFxyXG5cclxuICAgICAgICBmb3IgKHZhciBpIGluIGFsbFJlZ2lvbl9qc29uKSB7XHJcbiAgICAgICAgICAgIGlmKHBhcnNlSW50KGkpID09IHBhcnNlSW50KGNpZCkpIHtcclxuICAgICAgICAgICAgICAgIHJlZ2lvbl9pc19zZWxlY3QgPSB0cnVlOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9ybV9qc29uWydwcm92aW5jZSddLmVtcHR5KCkuc2hvdygpLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT1cIlwiPicgKyBfbGFuZy5wYWdlX2NvbW1vbl9mb3JtX3NlbGVjdCArICc8L29wdGlvbj4nKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gYWxsUmVnaW9uX2pzb25baV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3Byb3ZpbmNlJ10uYXBwZW5kKCc8b3B0aW9uIHZhbHVlPVwiJyArIGogKyAnXCI+JyArIGFsbFJlZ2lvbl9qc29uW2ldW2pdICsgJzwvb3B0aW9uPicpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2xvY2F0aW9uIHNvdXJjZSByZWdpb24gc2VsZWN0XHJcbiAgICAgICAgaWYocmVnaW9uX2lzX3NlbGVjdCAmJiBmb3JtX2RhdGFfc291cmNlID09ICdsb2NhdGlvbicpIHtcclxuICAgICAgICAgICAgc2V0UHJvdmluY2VUZXh0SGlkZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3VzZXIgc291cmNlIHJlZ2lvbiBzZWxlY3RcclxuICAgICAgICBpZihmb3JtX2pzb25bJ3Byb3ZpbmNlX3RleHRfdmFsJ10gIT0gXCJcIiAmJiBmb3JtX2RhdGFfc291cmNlID09ICd1c2VyJykge1xyXG4gICAgICAgICAgICBzZXRQcm92aW5jZVNlbGVjdEhpZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIXJlZ2lvbl9pc19zZWxlY3QpIHtcclxuICAgICAgICAgICAgc2V0UHJvdmluY2VTZWxlY3RIaWRlKCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UHJvdmluY2VUZXh0SGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHZhciBzZXRQcm92aW5jZVNlbGVjdEhpZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3JtX2pzb25bJ3Byb3ZpbmNlUmVxdWlyZWQnXS5odG1sKCcmbmJzcDsnKTtcclxuICAgICAgICBmb3JtX2pzb25bJ3Byb3ZpbmNlX3RleHQnXS5zaG93KCk7XHJcbiAgICAgICAgZm9ybV9qc29uWydwcm92aW5jZSddLmhpZGUoKS5lbXB0eSgpO1xyXG4gICAgICAgIGNsZWFuRXJyb3IoZm9ybV9qc29uWydwcm92aW5jZSddLCAwKTtcclxuICAgICAgICBuZXh0X2xhYmVsX2FkZF9jbGFzcyhmb3JtX2pzb25bJ3Byb3ZpbmNlX3RleHQnXSwnaW5wdXQnKTtcclxuICAgICAgICAkKCcjX3Byb3ZpbmNlZF9pY29uJykuaGlkZSgpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdmFyIHNldFByb3ZpbmNlVGV4dEhpZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3JtX2pzb25bJ3Byb3ZpbmNlUmVxdWlyZWQnXS5odG1sKCcqJyk7XHJcbiAgICAgICAgZm9ybV9qc29uWydwcm92aW5jZV90ZXh0J10uaGlkZSgpO1xyXG4gICAgICAgIG5leHRfbGFiZWxfYWRkX2NsYXNzKGZvcm1fanNvblsncHJvdmluY2UnXSwnc2VsZWN0Jyk7XHJcbiAgICAgICAgJCgnI19wcm92aW5jZWRfaWNvbicpLnNob3coKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHZhciBzZXRQaG9uZVByZWZpeCA9IGZ1bmN0aW9uKGNpZCkge1xyXG4gICAgICAgIHZhciBjb3VudHJ5X2RldGFpbF9qc29uID0gcGFnZURhdGEuY291bnRyeURldGFpbFxyXG4gICAgICAgIHZhciBwaG9uZV9pc19zZWxlY3QgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciBpIGluIGNvdW50cnlfZGV0YWlsX2pzb24pe1xyXG4gICAgICAgICAgICBpZihwYXJzZUludChpKSA9PSBwYXJzZUludChjaWQpICYmIHR5cGVvZiBjb3VudHJ5X2RldGFpbF9qc29uW2ldLnBob25lX2NvZGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgY291bnRyeV9kZXRhaWxfanNvbltpXS5yZWdpb25fY29kZSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHBob25lX2lzX3NlbGVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGhvbmVfcHJlZml4X3RleHQgPSBjb3VudHJ5X2RldGFpbF9qc29uW2ldLnJlZ2lvbl9jb2RlO1xyXG4gICAgICAgICAgICAgICAgaWYoY291bnRyeV9kZXRhaWxfanNvbltpXS5waG9uZV9jb2RlICA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHBob25lX3ByZWZpeF90ZXh0ICs9ICcmbmJzcDsgKyAmbmJzcDsnICsgY291bnRyeV9kZXRhaWxfanNvbltpXS5waG9uZV9jb2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJCgnI3Bob25lX3ByZWZpeCcpLmh0bWwocGhvbmVfcHJlZml4X3RleHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXBob25lX2lzX3NlbGVjdCl7XHJcbiAgICAgICAgICAgICQoJyNwaG9uZV9wcmVmaXgnKS5odG1sKCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB2YXIgc2V0Q2l0eSA9IGZ1bmN0aW9uIChwaWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1fZm9ybS5maW5kKCdpbnB1dCcpLmZvY3VzKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWUgPSAkKHRoaXMpO1xyXG4gICAgICAgIG5leHRfbGFiZWxfYWRkX2NsYXNzKG1lLCdpbnB1dCcpXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZWxlbV9mb3JtLmZpbmQoJ2lucHV0JykuYmx1cihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1lID0gJCh0aGlzKTtcclxuICAgICAgICBuZXh0X2xhYmVsX3JlbW92ZV9jbGFzcyhtZSwnaW5wdXQnKVxyXG4gICAgICAgIGlmIChtZS5hdHRyKCduYW1lJykgPT0gJ2FkZHJlc3NbdGF4X2NvZGVfdmFsdWVdJykge1xyXG4gICAgICAgICAgICB2YXIgdGF4X2NvZGVfdmFsdWVfdmFsID0gbWUudmFsKClcclxuICAgICAgICAgICAgICAgICxtYXhMZW5ndGg7XHJcbiAgICAgICAgICAgIHN3aXRjaChmb3JtX2pzb25bJ3RheF9jb2RlX3R5cGUnXS52YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aCA9IDE0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aCA9IDE4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aCA9IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCh0YXhfY29kZV92YWx1ZV92YWwubGVuZ3RoID09IG1heExlbmd0aCkgJiYgKCEgaXNOYU4odGF4X2NvZGVfdmFsdWVfdmFsKSkpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFuRXJyb3IobWUsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlbGVtX2Zvcm0uZmluZCgnc2VsZWN0JykuZm9jdXMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtZSA9ICQodGhpcyk7XHJcbiAgICAgICAgbmV4dF9sYWJlbF9hZGRfY2xhc3MobWUsJ3NlbGVjdCcpXHJcbiAgICB9KTtcclxuICAgIGVsZW1fZm9ybS5maW5kKCdzZWxlY3QnKS5ibHVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWUgPSAkKHRoaXMpO1xyXG4gICAgICAgIG5leHRfbGFiZWxfcmVtb3ZlX2NsYXNzKG1lLCdzZWxlY3QnKVxyXG4gICAgfSk7XHJcbiAgICBlbGVtX2Zvcm0uZmluZCgnc2VsZWN0JykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWUgPSAkKHRoaXMpO1xyXG4gICAgICAgIG5leHRfbGFiZWxfcmVtb3ZlX2NsYXNzKG1lLCdzZWxlY3QnKVxyXG4gICAgICAgIGlmIChtZS5hdHRyKCduYW1lJykgPT0gJ2FkZHJlc3NbY291bnRyeV0nKSB7XHJcbiAgICAgICAgICAgIHZhciBjaWQgPSAkKHRoaXMpLnZhbCgpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIShjaWQgPiAwKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+mAieaLqUJyYXppbO+8iOW3tOilv++8jGNvdW50cnlfaWTkuLozOTYy77yJ5pe277yM5Ye6546wQ1BGIG9yIENOUEogY29kZVxyXG4gICAgICAgICAgICBpZiAoc3BlY2lhbENvdW50cnlJZHMuaW5kZXhPZihOdW1iZXIoY2lkKSkgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGlmKGNpZCA9PSBzcGVjaWFsQ291bnRyeUlkc1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1fanNvblsndGF4Q29kZSddLmZpbmQoJy50YXgtbGFibGUnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhDb2RlJ10uZmluZCgncCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3RheENvZGUnXS5maW5kKCdzZWxlY3QnKS52YWwoMSkuY2hhbmdlKCkuZmluZCgnb3B0aW9uJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1fanNvblsndGF4Q29kZSddLmZpbmQoJy50YXhfY29kZV9vcF9jcGZfY25waicpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjaWQgPT0gc3BlY2lhbENvdW50cnlJZHNbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3RheENvZGUnXS5maW5kKCcudGF4LWxhYmxlJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1fanNvblsndGF4Q29kZSddLmZpbmQoJ3AnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhDb2RlJ10uZmluZCgnc2VsZWN0JykudmFsKDMpLmNoYW5nZSgpLmZpbmQoJ29wdGlvbicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3RheENvZGUnXS5maW5kKCcudGF4X2NvZGVfb3BfbmlkX2NpZCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2lkID09IHNwZWNpYWxDb3VudHJ5SWRzWzJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhDb2RlJ10uZmluZCgnLnRheC1sYWJsZScpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3RheENvZGUnXS5maW5kKCdwJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1fanNvblsndGF4Q29kZSddLmZpbmQoJ3NlbGVjdCcpLnZhbCg3KS5jaGFuZ2UoKS5maW5kKCdvcHRpb24nKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhDb2RlJ10uZmluZCgnLnRheF9jb2RlX29wX3J1dCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvcm1fanNvblsndGF4Q29kZSddLnNob3coKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcm1fanNvblsndGF4Q29kZSddLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGhvdXNlTm9Db3VudHJ5SWRzLmluZGV4T2YoTnVtYmVyKGNpZCkpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ2hvdXNlX25vX2NvbnRhaW5lciddLnNob3coKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcm1fanNvblsnaG91c2Vfbm9fY29udGFpbmVyJ10uaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRQcm92aW5jZShjaWQpO1xyXG4gICAgICAgICAgICBzZXRDaXR5KC0xKTtcclxuICAgICAgICB9IGVsc2UgaWYobWUuYXR0cignbmFtZScpID09ICdhZGRyZXNzW3RheF9jb2RlX3R5cGVdJykge1xyXG4gICAgICAgICAgICBpZiAobWUudmFsKCkgPT0gc3BlY2lhbENvZGVzWzBdKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAvL0NQRiBvciBDTlBKIGNvZGXvvIzkuKTnp41jb2Rl55qE5pyJ5pWI6ZW/5bqm5YiG5Yir5pivMTTlkowxOFxyXG4gICAgICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhfY29kZV92YWx1ZSddLmF0dHIoJ21heGxlbmd0aCcsIDE0KS52YWwoJycpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lLnZhbCgpID09IHNwZWNpYWxDb2Rlc1sxXSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhfY29kZV92YWx1ZSddLmF0dHIoJ21heGxlbmd0aCcsIDE4KS52YWwoJycpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lLnZhbCgpID09IHNwZWNpYWxDb2Rlc1syXSB8fCBtZS52YWwoKSA9PSBzcGVjaWFsQ29kZXNbM10pIHtcclxuICAgICAgICAgICAgICAgIGZvcm1fanNvblsndGF4X2NvZGVfdmFsdWUnXS5hdHRyKCdtYXhsZW5ndGgnLCAxMCkudmFsKCcnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZS52YWwoKSA9PSBzcGVjaWFsQ29kZXNbNF0pIHtcclxuICAgICAgICAgICAgICAgIGZvcm1fanNvblsndGF4X2NvZGVfdmFsdWUnXS5hdHRyKCdtYXhsZW5ndGgnLCAxMikudmFsKCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZihtZS5hdHRyKCduYW1lJykgPT0gJ2FkZHJlc3NbcHJvdmluY2VdJykge1xyXG4gICAgICAgICAgICAvL2RlZmF1bHQgdmFsdWU6LTFcclxuICAgICAgICAgICAgc2V0Q2l0eSgtMSk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGZvcm1fanNvblsnY291bnRyeSddLnZhbChwYWdlRGF0YS5kZWZhdWx0X2NvdW50cnlfaWQpLmNoYW5nZSgpO1xyXG5cclxuICAgIGZvcm1fanNvblsnZW1haWwnXS5ibHVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoY2hlY2tPbmVJdGVtKGZvcm1fanNvblsnZW1haWwnXSwgZmFsc2UpKSB7XHJcbiAgICAgICAgICAgIGNoZWNrRW1haWxSZWdpc3RlcmVkKCQudHJpbShmb3JtX2pzb25bJ2VtYWlsJ10udmFsKCkpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjZW1haWxSZWdpc3RlclRpcCcpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3JtX2pzb25bJ2VtYWlsJ10uZm9jdXMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJyNlbWFpbFJlZ2lzdGVyVGlwJykuaGlkZSgpO1xyXG4gICAgfSk7XHJcblxyXG59O1xyXG52YXIgbmV4dF9sYWJlbF9hZGRfY2xhc3MgPSBmdW5jdGlvbiAobWUsdHlwZSkge1xyXG4gICAgaWYoIW1lLnBhcmVudCgpLmZpbmQoJy5hZGRyZXNzLWxhYmVsIGxhYmVsJykuaGFzQ2xhc3MoJ3RvcC1zaG93Jykpe1xyXG4gICAgICAgIG1lLnBhcmVudCgpLmZpbmQoJy5hZGRyZXNzLWxhYmVsIGxhYmVsJykuYWRkQ2xhc3MoJ3RvcC1zaG93JylcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBuZXh0X2xhYmVsX3JlbW92ZV9jbGFzcyA9IGZ1bmN0aW9uIChtZSx0eXBlKSB7XHJcbiAgICBpZih0eXBlID09ICdzZWxlY3QnICYmIG1lLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpID09IHVuZGVmaW5lZCAmJiBtZS5wYXJlbnQoKS5maW5kKCcuYWRkcmVzcy1sYWJlbCBsYWJlbCcpLmhhc0NsYXNzKCd0b3Atc2hvdycpKXtcclxuICAgICAgICBtZS5wYXJlbnQoKS5maW5kKCcuYWRkcmVzcy1sYWJlbCBsYWJlbCcpLnJlbW92ZUNsYXNzKCd0b3Atc2hvdycpXHJcbiAgICB9ZWxzZSBpZih0eXBlID09ICdpbnB1dCcgJiYgbWUudmFsKCkgPT0gJycgJiYgbWUucGFyZW50KCkuZmluZCgnLmFkZHJlc3MtbGFiZWwgbGFiZWwnKS5oYXNDbGFzcygndG9wLXNob3cnKSlcclxuICAgIHtcclxuICAgICAgICBtZS5wYXJlbnQoKS5maW5kKCcuYWRkcmVzcy1sYWJlbCBsYWJlbCcpLnJlbW92ZUNsYXNzKCd0b3Atc2hvdycpXHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgZm9ybV9maWVsZF90b3Bfc2hvdyA9IGZ1bmN0aW9uIChlbGVtX2Zvcm0pIHtcclxuICAgIHZhciBmb3JtX2pzb24gPSBnZXRfZm9ybV9qc29uKGVsZW1fZm9ybSk7XHJcbiAgICB2YXIgZm9ybV90b3Bfc2hvdyA9IFsnZmlyc3RfbmFtZScsJ2xhc3RfbmFtZScsJ2FkZHJlc3NfMScsJ2FkZHJlc3NfMicsJ2NpdHlfdGV4dCcsJ3ppcCcsJ3Bob25lJywnZW1haWwnLCdwcm92aW5jZV90ZXh0JywnaG91c2Vfbm8nXTtcclxuXHJcbiAgICBmb3IodmFyIGkgaW4gZm9ybV90b3Bfc2hvdyl7XHJcbiAgICAgICAgdmFyIGZpZWxkX3ZhbCA9IGZvcm1fdG9wX3Nob3dbaV0gKyAnX3ZhbCdcclxuICAgICAgICBpZihmb3JtX2pzb25bZmllbGRfdmFsXSAhPSAnJyl7XHJcbiAgICAgICAgICAgIG5leHRfbGFiZWxfYWRkX2NsYXNzKGZvcm1fanNvbltmb3JtX3RvcF9zaG93W2ldXSwnaW5wdXQnKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbmV4dF9sYWJlbF9yZW1vdmVfY2xhc3MoZm9ybV9qc29uW2Zvcm1fdG9wX3Nob3dbaV1dLCdpbnB1dCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG5leHRfbGFiZWxfYWRkX2NsYXNzKGZvcm1fanNvblsnY291bnRyeSddLCdzZWxlY3QnKTtcclxuICAgIG5leHRfbGFiZWxfYWRkX2NsYXNzKGZvcm1fanNvblsncHJvdmluY2UnXSwnc2VsZWN0Jyk7XHJcbiAgICBuZXh0X2xhYmVsX2FkZF9jbGFzcyhmb3JtX2pzb25bJ2NpdHknXSwnc2VsZWN0Jyk7XHJcbn1cclxuXHJcbi8vaW5pdCBmb3JtXHJcbnZhciBpbml0X2FkZHJfZm9ybSA9IGZ1bmN0aW9uIChlbGVtX2Zvcm0sIHNldHRpbmcpIHtcclxuICAgIHZhciBmb3JtX2pzb24gPSBnZXRfZm9ybV9qc29uKGVsZW1fZm9ybSk7XHJcbiAgICBpZiAoc2V0dGluZykge1xyXG5cclxuICAgICAgICBpZihzZXR0aW5nLmZvcm1fZGF0YV9zb3VyY2UpIHtcclxuICAgICAgICAgICAgZm9ybV9kYXRhX3NvdXJjZSA9IHNldHRpbmcuZm9ybV9kYXRhX3NvdXJjZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9ybV9qc29uWydhZGRyZXNzX2lkJ10udmFsKHNldHRpbmcuYWRkcmVzc19pZCk7XHJcbiAgICAgICAgZm9ybV9qc29uWydnZW5kZXInXS52YWwoc2V0dGluZy5nZW5kZXIpO1xyXG4gICAgICAgIGZvcm1fanNvblsnZmlyc3RfbmFtZSddLnZhbChzZXR0aW5nLmZpcnN0X25hbWUpO1xyXG4gICAgICAgIGZvcm1fanNvblsnbGFzdF9uYW1lJ10udmFsKHNldHRpbmcubGFzdF9uYW1lKTtcclxuICAgICAgICBmb3JtX2pzb25bJ2FkZHJlc3NfMSddLnZhbChzZXR0aW5nLmFkZHJlc3MpO1xyXG4gICAgICAgIGZvcm1fanNvblsnYWRkcmVzc18yJ10udmFsKHNldHRpbmcuc2lnbl9idWlsZGluZyk7XHJcblxyXG4gICAgICAgIGZvcm1fanNvblsnY291bnRyeSddLnZhbChzZXR0aW5nLmNvdW50cnkpLmNoYW5nZSgpO1xyXG4gICAgICAgIGZvcm1fanNvblsncHJvdmluY2UnXS52YWwoc2V0dGluZy5wcm92aW5jZSkuY2hhbmdlKCk7XHJcbiAgICAgICAgZm9ybV9qc29uWydwcm92aW5jZV90ZXh0J10udmFsKHNldHRpbmcucHJvdmluY2VfdGV4dCk7XHJcblxyXG4gICAgICAgIGZvcm1fanNvblsnY2l0eSddLnZhbChzZXR0aW5nLmNpdHkpO1xyXG4gICAgICAgIGZvcm1fanNvblsnY2l0eV90ZXh0J10udmFsKHNldHRpbmcuY2l0eV90ZXh0KTtcclxuXHJcbiAgICAgICAgZm9ybV9qc29uWydlbWFpbCddLnZhbChzZXR0aW5nLmVtYWlsKTtcclxuICAgICAgICBmb3JtX2pzb25bJ2hvdXNlX25vJ10udmFsKHNldHRpbmcuaG91c2Vfbm8pO1xyXG5cclxuICAgICAgICB2YXIgdGF4X2NvZGVfdHlwZSA9IHNwZWNpYWxDb2Rlcy5pbmRleE9mKE51bWJlcihzZXR0aW5nLnRheF9jb2RlX3R5cGUpKVxyXG4gICAgICAgICAgICAsbWF4X2xlbmd0aDtcclxuICAgICAgICBpZih0YXhfY29kZV90eXBlICE9PSAtMSkge1xyXG4gICAgICAgICAgICBmb3JtX2pzb25bJ3RheF9jb2RlX3R5cGUnXS52YWwoc2V0dGluZy50YXhfY29kZV90eXBlKS5jaGFuZ2UoKTtcclxuICAgICAgICAgICAgc3dpdGNoKE51bWJlcihzZXR0aW5nLnRheF9jb2RlX3R5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4X2xlbmd0aCA9IDE0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIG1heF9sZW5ndGggPSAxODtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBtYXhfbGVuZ3RoID0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhfY29kZV92YWx1ZSddLmF0dHIoJ21heGxlbmd0aCcsIG1heF9sZW5ndGgpLnZhbChzZXR0aW5nLnRheF9jb2RlX3ZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm1fanNvblsnemlwJ10udmFsKHNldHRpbmcuemlwY29kZSk7XHJcbiAgICAgICAgZm9ybV9qc29uWydwaG9uZSddLnZhbChzZXR0aW5nLnRlbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1fZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgc2VsZWN0JykudmFsKCcnKTtcclxuICAgICAgICBmb3JtX2pzb25bJ2FkZHJlc3NfaWQnXS52YWwoJzAnKTtcclxuICAgICAgICBmb3JtX2pzb25bJ2NvdW50cnknXS52YWwocGFnZURhdGEuZGVmYXVsdF9jb3VudHJ5X2lkKS5jaGFuZ2UoKTtcclxuICAgICAgICBmb3JtX2pzb25bJ3RheF9jb2RlX3R5cGUnXS52YWwoJzEnKS5jaGFuZ2UoKTtcclxuICAgIH1cclxuICAgIGZvcm1fZmllbGRfdG9wX3Nob3coZWxlbV9mb3JtKVxyXG59O1xyXG5cclxudmFyIGNoZWNrRW1haWxSZWdpc3RlcmVkID0gZnVuY3Rpb24gKGVtYWlsKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgICd0eXBlJzogJ1BPU1QnLFxyXG4gICAgICAgICdhc3luYyc6IGZhbHNlLFxyXG4gICAgICAgICd1cmwnOiB3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwJyxcclxuICAgICAgICAnZGF0YSc6ICdhY3Q9Y2hlY2tFbWFpbFJlZ2lzdGVyZWQmZW1haWw9JyArIGVtYWlsLFxyXG4gICAgICAgICdjYWNoZSc6IHRydWUsXHJcbiAgICAgICAgJ2RhdGFUeXBlJzogJ2pzb24nLFxyXG4gICAgICAgICdzdWNjZXNzJzogZnVuY3Rpb24ocikge1xyXG4gICAgICAgICAgICBpZiAoci5lcnJvciA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjZW1haWxSZWdpc3RlclRpcCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJyNlbWFpbFJlZ2lzdGVyVGlwJykuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgXCJnZXRfZm9ybV9qc29uXCI6IGdldF9mb3JtX2pzb24sXHJcbiAgICBcImNoZWNrX2FkZHJfZm9ybVwiOiBjaGVja19hZGRyX2Zvcm0sXHJcbiAgICBcImhhbmRsZV9hZGRyX2Zvcm1cIjogaGFuZGxlX2FkZHJfZm9ybSxcclxuICAgIFwiaW5pdF9hZGRyX2Zvcm1cIjogaW5pdF9hZGRyX2Zvcm0sXHJcbiAgICBcImZvcm1fZmllbGRfdG9wX3Nob3dcIjogZm9ybV9maWVsZF90b3Bfc2hvdyxcclxuICAgIFwiY2hlY2tPbmVJdGVtXCIgOiBjaGVja09uZUl0ZW0sXHJcbiAgICBcImNsZWFuRXJyb3JcIiA6IGNsZWFuRXJyb3JcclxufTtcclxuIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuLy9kZWZpbmUoZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSkge1xyXG5cdHZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG5cdFxyXG5cdCQuZm4uZm9ybUNoZWNrID0gZnVuY3Rpb24gKGl0ZW1zLCBwYXJhbXMpIHtcclxuXHRcdGlmICghcGFyYW1zKVxyXG5cdFx0XHRwYXJhbXMgPSB7fTtcclxuXHRcdHBhcmFtcy5ydWxlcyA9ICQuZXh0ZW5kKHtcclxuXHRcdFx0XHQnbnVsbCcgOiBmdW5jdGlvbiAob2JqLCBjaGVja3MpIHtcclxuXHRcdFx0XHRcdHJldHVybiAkLnRyaW0oJChvYmopLnZhbCgpKS5sZW5ndGggPiAwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnbWF4bGVuZ3RoJyA6IGZ1bmN0aW9uIChvYmosIGNoZWNrcykge1xyXG5cdFx0XHRcdFx0cmV0dXJuICQudHJpbSgkKG9iaikudmFsKCkpLmxlbmd0aCA8PSBjaGVja3MubWF4bGVuZ3RoXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnbWlubGVuZ3RoJyA6IGZ1bmN0aW9uIChvYmosIGNoZWNrcykge1xyXG5cdFx0XHRcdFx0cmV0dXJuICQudHJpbSgkKG9iaikudmFsKCkpLmxlbmd0aCA+PSBjaGVja3MubWlubGVuZ3RoXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnZGlnaXRNaW5sZW5ndGgnIDogZnVuY3Rpb24gKG9iaiwgY2hlY2tzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJC50cmltKCQob2JqKS52YWwoKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpKS5sZW5ndGggPj0gY2hlY2tzLm1pbmxlbmd0aFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J2VtYWlsJyA6IGZ1bmN0aW9uIChvYmosIGNoZWNrcykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIC8oXFwsfF4pKFtcXHcrLl9dK0BcXHcrXFwuKFxcdytcXC4pezAsM31cXHd7Miw0fSkvLnRlc3QoJChvYmopLnZhbCgpLnJlcGxhY2UoLy18XFwvL2csICcnKSlcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdjaGVja2VkJyA6IGZ1bmN0aW9uIChvYmosIGNoZWNrcykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG9iai5jaGVja2VkXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQncGhvbmUnIDogZnVuY3Rpb24gKG9iaiwgY2hlY2tzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gL15bXFxkLVxcc117MSwyMH0kLy50ZXN0KCQob2JqKS52YWwoKSkgJiYgJC50cmltKCQob2JqKS52YWwoKSkucmVwbGFjZSgvW1xcc10rL2csICcgJykubGVuZ3RoIDw9IGNoZWNrcy5tYXhsZW5ndGhcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdudW1iZXInIDogZnVuY3Rpb24gKG9iaiwgY2hlY2tzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gL15bMC05XSskLy50ZXN0KCQudHJpbSgkKG9iaikudmFsKCkpKVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J21pbicgOiBmdW5jdGlvbiAob2JqLCBjaGVja3MpIHtcclxuXHRcdFx0XHRcdHJldHVybiBwYXJzZUludCgkKG9iaikudmFsKCkpID49IGNoZWNrcy5taW5cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwicmVnZXhwXCIgOiBmdW5jdGlvbiAob2JqLCBjaGVja3MpIHtcclxuXHRcdFx0XHRcdHJldHVybiBjaGVja3MucGF0dGVybi50ZXN0KCQudHJpbSgkKG9iaikudmFsKCkpKVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J3NlbGVjdCcgOiBmdW5jdGlvbiAob2JqLCBjaGVja3MpIHtcclxuXHRcdFx0XHRcdHJldHVybiAkKG9iaikudmFsKCkgIT0gY2hlY2tzLnZhbHVlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQndXNlcicgOiBmdW5jdGlvbiAob2JqLCBjaGVja3MpIHtcclxuXHRcdFx0XHRcdHJldHVybiAvXig/IVxcZClbYS16QS1aMC05XFx1NGUwMC1cXHU5ZmE1X117NSwxOH0kLy50ZXN0KCQudHJpbSgkKG9iaikudmFsKCkpKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgcGFyYW1zLnJ1bGVzKTtcclxuXHRcdHZhciByZXN1bHQgPSB0cnVlLFxyXG5cdFx0Zm9jdXNlZCA9IGZhbHNlO1xyXG5cdFx0ZnVuY3Rpb24gY2hlY2tJdGVtKGl0ZW0sIGNoZWNrcykge1xyXG5cdFx0XHRmb3IgKGogaW4gY2hlY2tzKSB7XHJcblx0XHRcdFx0aWYgKHBhcmFtcy5ydWxlc1tjaGVja3Nbal0udHlwZV0pXHJcblx0XHRcdFx0XHRpZiAocGFyYW1zLnJ1bGVzW2NoZWNrc1tqXS50eXBlXShpdGVtLCBjaGVja3Nbal0pKVxyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIC8qXHJcblx0XHRcdFx0aWYgKCFmb2N1c2VkICYmICFjaGVja3Nbal0ubm9Gb2N1cykge1xyXG5cdFx0XHRcdFx0aWYgKCQoaXRlbSkub2Zmc2V0KCkudG9wIDwgJCh3aW5kb3cpLnNjcm9sbFRvcCgpKSB7XHJcblx0XHRcdFx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0XHRcdFx0XHRzY3JvbGxUb3AgOiAkKGl0ZW0pLm9mZnNldCgpLnRvcFxyXG5cdFx0XHRcdFx0XHR9LCAnZmFzdCcpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRmb2N1c2VkID0gdHJ1ZVxyXG5cdFx0XHRcdH07XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuXHRcdFx0XHRpZiAoY2hlY2tzW2pdLnNob3dFcnJvcikge1xyXG5cdFx0XHRcdFx0Y2hlY2tzW2pdLnNob3dFcnJvcigpO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAocGFyYW1zLnNob3dFcnJvcikge1xyXG5cdFx0XHRcdFx0cGFyYW1zLnNob3dFcnJvcigkKGl0ZW0pLCBjaGVja3Nbal0uZXJyTXNnLCBjaGVja3Nbal0uZXJyRXZlbnQpO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAocGFyYW1zLmVycmluZm9GaW5kZXIpIHtcclxuXHRcdFx0XHRcdHBhcmFtcy5lcnJpbmZvRmluZGVyKCQoaXRlbSkpLnRleHQoY2hlY2tzW2pdLmVyck1zZyk7XHJcblx0XHRcdFx0XHQkKGl0ZW0pLmZvY3VzKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0cGFyYW1zLmVycmluZm9GaW5kZXIoJChpdGVtKSkudGV4dCgnJyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdGlmICgkKGl0ZW0pLmF0dHIoJ3R5cGUnKSAhPSBudWxsICYmICQoaXRlbSkuYXR0cigndHlwZScpLnRvTG93ZXJDYXNlKCkgPT0gJ2NoZWNrYm94Jykge1xyXG5cdFx0XHRcdFx0XHQkKGl0ZW0pLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHQkKGl0ZW0pLmZvY3VzKClcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRyZXN1bHQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrXHJcblx0XHRcdFx0fSBlbHNlIGlmIChjaGVja3Nbal0uZXJyTXNnKSB7XHJcblx0XHRcdFx0XHRhbGVydChjaGVja3Nbal0uZXJyTXNnKTtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdH07XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgdGhpc1swXS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoJCh0aGlzWzBdW2ldKS5hdHRyKCduYW1lJykgJiYgJCh0aGlzWzBdW2ldKS5hdHRyKCduYW1lJykubGVuZ3RoID09IDAgfHwgJCh0aGlzWzBdW2ldKS5wcm9wKCdkaXNhYmxlZCcpKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR2YXIgY2hlY2tzID0gaXRlbXNbJCh0aGlzWzBdW2ldKS5hdHRyKCduYW1lJyldO1xyXG5cdFx0XHRpZiAoIWNoZWNrcylcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0aWYgKCFjaGVja0l0ZW0odGhpc1swXVtpXSwgY2hlY2tzKSlcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH07XHJcblx0XHRyZXR1cm4gcmVzdWx0XHJcblx0fTtcclxuXHRcclxuLy99KTtcbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1kaFpXRXZhbk12Ylc5a0wyWnZjbTFEYUdWamF5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU0lzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5OWtaV1pwYm1Vb1puVnVZM1JwYjI0Z0tISmxjWFZwY21Vc0lHVjRjRzl5ZEhNc0lHMXZaSFZzWlNrZ2UxeHlYRzVjZEhaaGNpQWtJRDBnS0hSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUIzYVc1a2IzZGJKeVFuWFNBNklIUjVjR1Z2WmlCbmJHOWlZV3dnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnUHlCbmJHOWlZV3hiSnlRblhTQTZJRzUxYkd3cE8xeHlYRzVjZEZ4eVhHNWNkQ1F1Wm00dVptOXliVU5vWldOcklEMGdablZ1WTNScGIyNGdLR2wwWlcxekxDQndZWEpoYlhNcElIdGNjbHh1WEhSY2RHbG1JQ2doY0dGeVlXMXpLVnh5WEc1Y2RGeDBYSFJ3WVhKaGJYTWdQU0I3ZlR0Y2NseHVYSFJjZEhCaGNtRnRjeTV5ZFd4bGN5QTlJQ1F1WlhoMFpXNWtLSHRjY2x4dVhIUmNkRngwWEhRbmJuVnNiQ2NnT2lCbWRXNWpkR2x2YmlBb2IySnFMQ0JqYUdWamEzTXBJSHRjY2x4dVhIUmNkRngwWEhSY2RISmxkSFZ5YmlBa0xuUnlhVzBvSkNodlltb3BMblpoYkNncEtTNXNaVzVuZEdnZ1BpQXdYSEpjYmx4MFhIUmNkRngwZlN4Y2NseHVYSFJjZEZ4MFhIUW5iV0Y0YkdWdVozUm9KeUE2SUdaMWJtTjBhVzl1SUNodlltb3NJR05vWldOcmN5a2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUNRdWRISnBiU2drS0c5aWFpa3VkbUZzS0NrcExteGxibWQwYUNBOFBTQmphR1ZqYTNNdWJXRjRiR1Z1WjNSb1hISmNibHgwWEhSY2RGeDBmU3hjY2x4dVhIUmNkRngwWEhRbmJXbHViR1Z1WjNSb0p5QTZJR1oxYm1OMGFXOXVJQ2h2WW1vc0lHTm9aV05yY3lrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJQ1F1ZEhKcGJTZ2tLRzlpYWlrdWRtRnNLQ2twTG14bGJtZDBhQ0ErUFNCamFHVmphM011YldsdWJHVnVaM1JvWEhKY2JseDBYSFJjZEZ4MGZTeGNjbHh1WEhSY2RGeDBYSFFuWkdsbmFYUk5hVzVzWlc1bmRHZ25JRG9nWm5WdVkzUnBiMjRnS0c5aWFpd2dZMmhsWTJ0ektTQjdYSEpjYmx4MFhIUmNkRngwWEhSeVpYUjFjbTRnSkM1MGNtbHRLQ1FvYjJKcUtTNTJZV3dvS1M1eVpYQnNZV05sS0M5YlhqQXRPVjB2Wnl3Z0p5Y3BLUzVzWlc1bmRHZ2dQajBnWTJobFkydHpMbTFwYm14bGJtZDBhRnh5WEc1Y2RGeDBYSFJjZEgwc1hISmNibHgwWEhSY2RGeDBKMlZ0WVdsc0p5QTZJR1oxYm1OMGFXOXVJQ2h2WW1vc0lHTm9aV05yY3lrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJQzhvWEZ3c2ZGNHBLRnRjWEhjckxsOWRLMEJjWEhjclhGd3VLRnhjZHl0Y1hDNHBlekFzTTMxY1hIZDdNaXcwZlNrdkxuUmxjM1FvSkNodlltb3BMblpoYkNncExuSmxjR3hoWTJVb0x5MThYRnd2TDJjc0lDY25LU2xjY2x4dVhIUmNkRngwWEhSOUxGeHlYRzVjZEZ4MFhIUmNkQ2RqYUdWamEyVmtKeUE2SUdaMWJtTjBhVzl1SUNodlltb3NJR05vWldOcmN5a2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUc5aWFpNWphR1ZqYTJWa1hISmNibHgwWEhSY2RGeDBmU3hjY2x4dVhIUmNkRngwWEhRbmNHaHZibVVuSURvZ1puVnVZM1JwYjI0Z0tHOWlhaXdnWTJobFkydHpLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUnlaWFIxY200Z0wxNWJYRnhrTFZ4Y2MxMTdNU3d5TUgwa0x5NTBaWE4wS0NRb2IySnFLUzUyWVd3b0tTa2dKaVlnSkM1MGNtbHRLQ1FvYjJKcUtTNTJZV3dvS1NrdWNtVndiR0ZqWlNndlcxeGNjMTByTDJjc0lDY2dKeWt1YkdWdVozUm9JRHc5SUdOb1pXTnJjeTV0WVhoc1pXNW5kR2hjY2x4dVhIUmNkRngwWEhSOUxGeHlYRzVjZEZ4MFhIUmNkQ2R1ZFcxaVpYSW5JRG9nWm5WdVkzUnBiMjRnS0c5aWFpd2dZMmhsWTJ0ektTQjdYSEpjYmx4MFhIUmNkRngwWEhSeVpYUjFjbTRnTDE1Yk1DMDVYU3NrTHk1MFpYTjBLQ1F1ZEhKcGJTZ2tLRzlpYWlrdWRtRnNLQ2twS1Z4eVhHNWNkRngwWEhSY2RIMHNYSEpjYmx4MFhIUmNkRngwSjIxcGJpY2dPaUJtZFc1amRHbHZiaUFvYjJKcUxDQmphR1ZqYTNNcElIdGNjbHh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUJ3WVhKelpVbHVkQ2drS0c5aWFpa3VkbUZzS0NrcElENDlJR05vWldOcmN5NXRhVzVjY2x4dVhIUmNkRngwWEhSOUxGeHlYRzVjZEZ4MFhIUmNkRndpY21WblpYaHdYQ0lnT2lCbWRXNWpkR2x2YmlBb2IySnFMQ0JqYUdWamEzTXBJSHRjY2x4dVhIUmNkRngwWEhSY2RISmxkSFZ5YmlCamFHVmphM011Y0dGMGRHVnliaTUwWlhOMEtDUXVkSEpwYlNna0tHOWlhaWt1ZG1Gc0tDa3BLVnh5WEc1Y2RGeDBYSFJjZEgwc1hISmNibHgwWEhSY2RGeDBKM05sYkdWamRDY2dPaUJtZFc1amRHbHZiaUFvYjJKcUxDQmphR1ZqYTNNcElIdGNjbHh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUFrS0c5aWFpa3VkbUZzS0NrZ0lUMGdZMmhsWTJ0ekxuWmhiSFZsWEhKY2JseDBYSFJjZEZ4MGZTeGNjbHh1WEhSY2RGeDBYSFFuZFhObGNpY2dPaUJtZFc1amRHbHZiaUFvYjJKcUxDQmphR1ZqYTNNcElIdGNjbHh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUF2WGlnL0lWeGNaQ2xiWVMxNlFTMWFNQzA1WEZ4MU5HVXdNQzFjWEhVNVptRTFYMTE3TlN3eE9IMGtMeTUwWlhOMEtDUXVkSEpwYlNna0tHOWlhaWt1ZG1Gc0tDa3BLVnh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MGZTd2djR0Z5WVcxekxuSjFiR1Z6S1R0Y2NseHVYSFJjZEhaaGNpQnlaWE4xYkhRZ1BTQjBjblZsTEZ4eVhHNWNkRngwWm05amRYTmxaQ0E5SUdaaGJITmxPMXh5WEc1Y2RGeDBablZ1WTNScGIyNGdZMmhsWTJ0SmRHVnRLR2wwWlcwc0lHTm9aV05yY3lrZ2UxeHlYRzVjZEZ4MFhIUm1iM0lnS0dvZ2FXNGdZMmhsWTJ0ektTQjdYSEpjYmx4MFhIUmNkRngwYVdZZ0tIQmhjbUZ0Y3k1eWRXeGxjMXRqYUdWamEzTmJhbDB1ZEhsd1pWMHBYSEpjYmx4MFhIUmNkRngwWEhScFppQW9jR0Z5WVcxekxuSjFiR1Z6VzJOb1pXTnJjMXRxWFM1MGVYQmxYU2hwZEdWdExDQmphR1ZqYTNOYmFsMHBLVnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmpiMjUwYVc1MVpUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzhxWEhKY2JseDBYSFJjZEZ4MGFXWWdLQ0ZtYjJOMWMyVmtJQ1ltSUNGamFHVmphM05iYWwwdWJtOUdiMk4xY3lrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tDUW9hWFJsYlNrdWIyWm1jMlYwS0NrdWRHOXdJRHdnSkNoM2FXNWtiM2NwTG5OamNtOXNiRlJ2Y0NncEtTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RDUW9KMmgwYld3c0lHSnZaSGtuS1M1aGJtbHRZWFJsS0h0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSelkzSnZiR3hVYjNBZ09pQWtLR2wwWlcwcExtOW1abk5sZENncExuUnZjRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUjlMQ0FuWm1GemRDY3BYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBYSFJtYjJOMWMyVmtJRDBnZEhKMVpWeHlYRzVjZEZ4MFhIUmNkSDA3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tpOWNjbHh1WEhSY2RGeDBYSFJwWmlBb1kyaGxZMnR6VzJwZExuTm9iM2RGY25KdmNpa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFkyaGxZMnR6VzJwZExuTm9iM2RGY25KdmNpZ3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MGNtVnpkV3gwSUQwZ1ptRnNjMlU3WEhKY2JseDBYSFJjZEZ4MFhIUmljbVZoYTF4eVhHNWNkRngwWEhSY2RIMGdaV3h6WlNCcFppQW9jR0Z5WVcxekxuTm9iM2RGY25KdmNpa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MGNHRnlZVzF6TG5Ob2IzZEZjbkp2Y2lna0tHbDBaVzBwTENCamFHVmphM05iYWwwdVpYSnlUWE5uTENCamFHVmphM05iYWwwdVpYSnlSWFpsYm5RcE8xeHlYRzVjZEZ4MFhIUmNkRngwY21WemRXeDBJRDBnWm1Gc2MyVTdYSEpjYmx4MFhIUmNkRngwWEhSaWNtVmhhMXh5WEc1Y2RGeDBYSFJjZEgwZ1pXeHpaU0JwWmlBb2NHRnlZVzF6TG1WeWNtbHVabTlHYVc1a1pYSXBJSHRjY2x4dVhIUmNkRngwWEhSY2RIQmhjbUZ0Y3k1bGNuSnBibVp2Um1sdVpHVnlLQ1FvYVhSbGJTa3BMblJsZUhRb1kyaGxZMnR6VzJwZExtVnljazF6WnlrN1hISmNibHgwWEhSY2RGeDBYSFFrS0dsMFpXMHBMbVp2WTNWektHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBjR0Z5WVcxekxtVnljbWx1Wm05R2FXNWtaWElvSkNocGRHVnRLU2t1ZEdWNGRDZ25KeWs3WEhKY2JseDBYSFJjZEZ4MFhIUjlLVHRjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2drS0dsMFpXMHBMbUYwZEhJb0ozUjVjR1VuS1NBaFBTQnVkV3hzSUNZbUlDUW9hWFJsYlNrdVlYUjBjaWduZEhsd1pTY3BMblJ2VEc5M1pYSkRZWE5sS0NrZ1BUMGdKMk5vWldOclltOTRKeWtnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFFrS0dsMFpXMHBMbU5zYVdOcktHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFFrS0dsMFpXMHBMbVp2WTNWektDbGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGZTbGNjbHh1WEhSY2RGeDBYSFJjZEgwN1hISmNibHgwWEhSY2RGeDBYSFJ5WlhOMWJIUWdQU0JtWVd4elpUdGNjbHh1WEhSY2RGeDBYSFJjZEdKeVpXRnJYSEpjYmx4MFhIUmNkRngwZlNCbGJITmxJR2xtSUNoamFHVmphM05iYWwwdVpYSnlUWE5uS1NCN1hISmNibHgwWEhSY2RGeDBYSFJoYkdWeWRDaGphR1ZqYTNOYmFsMHVaWEp5VFhObktUdGNjbHh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUJtWVd4elpWeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwZlR0Y2NseHVYSFJjZEZ4MGNtVjBkWEp1SUhSeWRXVmNjbHh1WEhSY2RIMDdYSEpjYmx4MFhIUm1iM0lnS0drZ1BTQXdPeUJwSUR3Z2RHaHBjMXN3WFM1c1pXNW5kR2c3SUdrckt5a2dlMXh5WEc1Y2RGeDBYSFJwWmlBb0pDaDBhR2x6V3pCZFcybGRLUzVoZEhSeUtDZHVZVzFsSnlrZ0ppWWdKQ2gwYUdseld6QmRXMmxkS1M1aGRIUnlLQ2R1WVcxbEp5a3ViR1Z1WjNSb0lEMDlJREFnZkh3Z0pDaDBhR2x6V3pCZFcybGRLUzV3Y205d0tDZGthWE5oWW14bFpDY3BLVnh5WEc1Y2RGeDBYSFJjZEdOdmJuUnBiblZsTzF4eVhHNWNkRngwWEhSMllYSWdZMmhsWTJ0eklEMGdhWFJsYlhOYkpDaDBhR2x6V3pCZFcybGRLUzVoZEhSeUtDZHVZVzFsSnlsZE8xeHlYRzVjZEZ4MFhIUnBaaUFvSVdOb1pXTnJjeWxjY2x4dVhIUmNkRngwWEhSamIyNTBhVzUxWlR0Y2NseHVYSFJjZEZ4MGFXWWdLQ0ZqYUdWamEwbDBaVzBvZEdocGMxc3dYVnRwWFN3Z1kyaGxZMnR6S1NsY2NseHVYSFJjZEZ4MFhIUnlaWFIxY200Z1ptRnNjMlZjY2x4dVhIUmNkSDA3WEhKY2JseDBYSFJ5WlhSMWNtNGdjbVZ6ZFd4MFhISmNibHgwZlR0Y2NseHVYSFJjY2x4dUx5OTlLVHNpWFgwPSIsIi8vIHJlcXVpcmUoJy4vY29tbW9uJylcclxucmVxdWlyZSgnLi4vY2hlY2tvdXQvYWRkcmVzc19ib29rJykuaW5pdCgpOyAvL1lvdXIgU2hpcHBpbmcgQWRkcmVzcyJdfQ==

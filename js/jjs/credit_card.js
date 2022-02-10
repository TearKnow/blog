require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
require('../lib/jqueryForm');
var address = require('../mod/address');
var loading = require('./loading');
var JsTemplate = require('../mod/jsTemplate');

var address_list = $('#billing_adress_div'); //地址列表
var address_form = $('#address_form');
var address_form_wrap = $('#div_billing_address');
var btn_edit = address_list.find('.edit');

var btn_same_as_shipping = $("#same_as_shipping");
var val_same_as_shipping = $("#input_same_as_shipping");

//地址表单和edit链接切换
function toggleForm() {
    loading.close();
    address_form_wrap.slideToggle('fast');
    btn_edit.toggle();
}

//保存dialog中的地址
function saveAddress() {
    if (!address.check_addr_form(address_form)) {
        return false;
    }
    address_form.ajaxSubmit({
        "beforeSubmit": function() {
            loading.open();
        },
        "success": function (html) {
            loading.close();
            var r = jQuery.parseJSON(html);
            if (r.code == -1) {
                self.location = r.url;
            } else if (r.code == 0) {
                //刷新页面重新检查是否支持信用卡
                self.location = '?order_sn=' + pageData.order_sn + '&checkout_guest=' + r.checkout_guest;
            } else {
                alert(r.msg);
            }
        }
    });
    return false;
}

function getAddressHtml(address) {
    var address_copy = Object.assign({}, address);
    var address_template = new JsTemplate(''
      + '    {{consignee}} ( {{address}}'
      + '    {{sign_building}}'
      + '    {{city_name}},'
      + '    {{zipcode}}'
      + '    {{province_name}}'
      + '    {{country_name}} )'
    );
    address_copy["sign_building"] += address_copy["sign_building"] ? " " : "";
    address_copy["city_name"] = address_copy["city_name"] || address_copy["city_text"];
    address_copy["province_name"] = address_copy["province_name"] 
                                ? address_copy["province_name"] + "," 
                                : address_copy["province_text"] ? address_copy["province_text"] + "," : "";
    
    return  address_template.render(
        Object.assign({}, address_copy, {lang_edit: _lang.page_common_edit})
    );
}
var init = function () {
    if($.isEmptyObject(pageData.billing_address)) {
        return false;
    }

    btn_same_as_shipping.on("click", function() {
        if (btn_same_as_shipping.hasClass("selected")) {
            btn_same_as_shipping.removeClass("selected");
            val_same_as_shipping.val("0");
            address_list.find(".address-detail").html(getAddressHtml(pageData.billing_address));
            btn_edit.show();
            address_form_wrap.removeAttr("style");
        } else {
            btn_same_as_shipping.addClass("selected");
            val_same_as_shipping.val("1");
            address_list.find(".address-detail").html(getAddressHtml(pageData.shipping_address));
            btn_edit.hide();
            address_form_wrap.hide();
        }
    });
    //绑定地址表单相关事件，主要是切换国家和表单验证
    address.handle_addr_form(address_form);

    //给地址表单赋值
    address.init_addr_form(address_form, pageData.billing_address);

    //页面加载完成后验证billing address是够合法
    if(! address.check_addr_form(address_form)) {
        btn_edit.click();
    }

    //提交Dialog中的地址表单
    address_form.submit(saveAddress);

    //绑定地址列表相关事件
    address_list.delegate('.edit', 'click', function () {
        //修改地址
        address.init_addr_form(address_form, pageData.billing_address);
        toggleForm();
    });

    address_form.delegate('.input_cancel', 'click', function () {
        toggleForm();
    });
};

module.exports = {
    "init": init
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvY2hlY2tvdXQvZ2NfYWRkcmVzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG5yZXF1aXJlKCcuLi9saWIvanF1ZXJ5Rm9ybScpO1xyXG52YXIgYWRkcmVzcyA9IHJlcXVpcmUoJy4uL21vZC9hZGRyZXNzJyk7XHJcbnZhciBsb2FkaW5nID0gcmVxdWlyZSgnLi9sb2FkaW5nJyk7XHJcbnZhciBKc1RlbXBsYXRlID0gcmVxdWlyZSgnLi4vbW9kL2pzVGVtcGxhdGUnKTtcclxuXHJcbnZhciBhZGRyZXNzX2xpc3QgPSAkKCcjYmlsbGluZ19hZHJlc3NfZGl2Jyk7IC8v5Zyw5Z2A5YiX6KGoXHJcbnZhciBhZGRyZXNzX2Zvcm0gPSAkKCcjYWRkcmVzc19mb3JtJyk7XHJcbnZhciBhZGRyZXNzX2Zvcm1fd3JhcCA9ICQoJyNkaXZfYmlsbGluZ19hZGRyZXNzJyk7XHJcbnZhciBidG5fZWRpdCA9IGFkZHJlc3NfbGlzdC5maW5kKCcuZWRpdCcpO1xyXG5cclxudmFyIGJ0bl9zYW1lX2FzX3NoaXBwaW5nID0gJChcIiNzYW1lX2FzX3NoaXBwaW5nXCIpO1xyXG52YXIgdmFsX3NhbWVfYXNfc2hpcHBpbmcgPSAkKFwiI2lucHV0X3NhbWVfYXNfc2hpcHBpbmdcIik7XHJcblxyXG4vL+WcsOWdgOihqOWNleWSjGVkaXTpk77mjqXliIfmjaJcclxuZnVuY3Rpb24gdG9nZ2xlRm9ybSgpIHtcclxuICAgIGxvYWRpbmcuY2xvc2UoKTtcclxuICAgIGFkZHJlc3NfZm9ybV93cmFwLnNsaWRlVG9nZ2xlKCdmYXN0Jyk7XHJcbiAgICBidG5fZWRpdC50b2dnbGUoKTtcclxufVxyXG5cclxuLy/kv53lrZhkaWFsb2fkuK3nmoTlnLDlnYBcclxuZnVuY3Rpb24gc2F2ZUFkZHJlc3MoKSB7XHJcbiAgICBpZiAoIWFkZHJlc3MuY2hlY2tfYWRkcl9mb3JtKGFkZHJlc3NfZm9ybSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBhZGRyZXNzX2Zvcm0uYWpheFN1Ym1pdCh7XHJcbiAgICAgICAgXCJiZWZvcmVTdWJtaXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmcub3BlbigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdWNjZXNzXCI6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmcuY2xvc2UoKTtcclxuICAgICAgICAgICAgdmFyIHIgPSBqUXVlcnkucGFyc2VKU09OKGh0bWwpO1xyXG4gICAgICAgICAgICBpZiAoci5jb2RlID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvY2F0aW9uID0gci51cmw7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoci5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgIC8v5Yi35paw6aG16Z2i6YeN5paw5qOA5p+l5piv5ZCm5pSv5oyB5L+h55So5Y2hXHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvY2F0aW9uID0gJz9vcmRlcl9zbj0nICsgcGFnZURhdGEub3JkZXJfc24gKyAnJmNoZWNrb3V0X2d1ZXN0PScgKyByLmNoZWNrb3V0X2d1ZXN0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoci5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFkZHJlc3NIdG1sKGFkZHJlc3MpIHtcclxuICAgIHZhciBhZGRyZXNzX2NvcHkgPSBPYmplY3QuYXNzaWduKHt9LCBhZGRyZXNzKTtcclxuICAgIHZhciBhZGRyZXNzX3RlbXBsYXRlID0gbmV3IEpzVGVtcGxhdGUoJydcclxuICAgICAgKyAnICAgIHt7Y29uc2lnbmVlfX0gKCB7e2FkZHJlc3N9fSdcclxuICAgICAgKyAnICAgIHt7c2lnbl9idWlsZGluZ319J1xyXG4gICAgICArICcgICAge3tjaXR5X25hbWV9fSwnXHJcbiAgICAgICsgJyAgICB7e3ppcGNvZGV9fSdcclxuICAgICAgKyAnICAgIHt7cHJvdmluY2VfbmFtZX19J1xyXG4gICAgICArICcgICAge3tjb3VudHJ5X25hbWV9fSApJ1xyXG4gICAgKTtcclxuICAgIGFkZHJlc3NfY29weVtcInNpZ25fYnVpbGRpbmdcIl0gKz0gYWRkcmVzc19jb3B5W1wic2lnbl9idWlsZGluZ1wiXSA/IFwiIFwiIDogXCJcIjtcclxuICAgIGFkZHJlc3NfY29weVtcImNpdHlfbmFtZVwiXSA9IGFkZHJlc3NfY29weVtcImNpdHlfbmFtZVwiXSB8fCBhZGRyZXNzX2NvcHlbXCJjaXR5X3RleHRcIl07XHJcbiAgICBhZGRyZXNzX2NvcHlbXCJwcm92aW5jZV9uYW1lXCJdID0gYWRkcmVzc19jb3B5W1wicHJvdmluY2VfbmFtZVwiXSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFkZHJlc3NfY29weVtcInByb3ZpbmNlX25hbWVcIl0gKyBcIixcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFkZHJlc3NfY29weVtcInByb3ZpbmNlX3RleHRcIl0gPyBhZGRyZXNzX2NvcHlbXCJwcm92aW5jZV90ZXh0XCJdICsgXCIsXCIgOiBcIlwiO1xyXG4gICAgXHJcbiAgICByZXR1cm4gIGFkZHJlc3NfdGVtcGxhdGUucmVuZGVyKFxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGFkZHJlc3NfY29weSwge2xhbmdfZWRpdDogX2xhbmcucGFnZV9jb21tb25fZWRpdH0pXHJcbiAgICApO1xyXG59XHJcbnZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYoJC5pc0VtcHR5T2JqZWN0KHBhZ2VEYXRhLmJpbGxpbmdfYWRkcmVzcykpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYnRuX3NhbWVfYXNfc2hpcHBpbmcub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoYnRuX3NhbWVfYXNfc2hpcHBpbmcuaGFzQ2xhc3MoXCJzZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICBidG5fc2FtZV9hc19zaGlwcGluZy5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICB2YWxfc2FtZV9hc19zaGlwcGluZy52YWwoXCIwXCIpO1xyXG4gICAgICAgICAgICBhZGRyZXNzX2xpc3QuZmluZChcIi5hZGRyZXNzLWRldGFpbFwiKS5odG1sKGdldEFkZHJlc3NIdG1sKHBhZ2VEYXRhLmJpbGxpbmdfYWRkcmVzcykpO1xyXG4gICAgICAgICAgICBidG5fZWRpdC5zaG93KCk7XHJcbiAgICAgICAgICAgIGFkZHJlc3NfZm9ybV93cmFwLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidG5fc2FtZV9hc19zaGlwcGluZy5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICB2YWxfc2FtZV9hc19zaGlwcGluZy52YWwoXCIxXCIpO1xyXG4gICAgICAgICAgICBhZGRyZXNzX2xpc3QuZmluZChcIi5hZGRyZXNzLWRldGFpbFwiKS5odG1sKGdldEFkZHJlc3NIdG1sKHBhZ2VEYXRhLnNoaXBwaW5nX2FkZHJlc3MpKTtcclxuICAgICAgICAgICAgYnRuX2VkaXQuaGlkZSgpO1xyXG4gICAgICAgICAgICBhZGRyZXNzX2Zvcm1fd3JhcC5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL+e7keWumuWcsOWdgOihqOWNleebuOWFs+S6i+S7tu+8jOS4u+imgeaYr+WIh+aNouWbveWutuWSjOihqOWNlemqjOivgVxyXG4gICAgYWRkcmVzcy5oYW5kbGVfYWRkcl9mb3JtKGFkZHJlc3NfZm9ybSk7XHJcblxyXG4gICAgLy/nu5nlnLDlnYDooajljZXotYvlgLxcclxuICAgIGFkZHJlc3MuaW5pdF9hZGRyX2Zvcm0oYWRkcmVzc19mb3JtLCBwYWdlRGF0YS5iaWxsaW5nX2FkZHJlc3MpO1xyXG5cclxuICAgIC8v6aG16Z2i5Yqg6L295a6M5oiQ5ZCO6aqM6K+BYmlsbGluZyBhZGRyZXNz5piv5aSf5ZCI5rOVXHJcbiAgICBpZighIGFkZHJlc3MuY2hlY2tfYWRkcl9mb3JtKGFkZHJlc3NfZm9ybSkpIHtcclxuICAgICAgICBidG5fZWRpdC5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5o+Q5LqkRGlhbG9n5Lit55qE5Zyw5Z2A6KGo5Y2VXHJcbiAgICBhZGRyZXNzX2Zvcm0uc3VibWl0KHNhdmVBZGRyZXNzKTtcclxuXHJcbiAgICAvL+e7keWumuWcsOWdgOWIl+ihqOebuOWFs+S6i+S7tlxyXG4gICAgYWRkcmVzc19saXN0LmRlbGVnYXRlKCcuZWRpdCcsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL+S/ruaUueWcsOWdgFxyXG4gICAgICAgIGFkZHJlc3MuaW5pdF9hZGRyX2Zvcm0oYWRkcmVzc19mb3JtLCBwYWdlRGF0YS5iaWxsaW5nX2FkZHJlc3MpO1xyXG4gICAgICAgIHRvZ2dsZUZvcm0oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFkZHJlc3NfZm9ybS5kZWxlZ2F0ZSgnLmlucHV0X2NhbmNlbCcsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0b2dnbGVGb3JtKCk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgXCJpbml0XCI6IGluaXRcclxufTsiXX0=
},{"../lib/jqueryForm":7,"../mod/address":8,"../mod/jsTemplate":10,"./loading":4}],2:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
var address = require('../mod/address');

var address_list = $('#billing_adress_div');
var address_form = $('#address_form');
var address_form_wrap = $('#div_billing_address');
var btn_edit = address_list.find('.edit');

var pay_iframe = $('#iframe_emulator');
var pay_mask = $('.masked');
var pay_mask_table = $('.mask_table');

var boleto_fail_info = '';
if (webData.lang == 'en') {
    boleto_fail_info += _lang.page_pay_fail_tip_pre + '<span id="payment-livechat"><a class="start-now" href="javascript:;">';
    boleto_fail_info += _lang.page_common_live_chat;
    boleto_fail_info += '</a></span>';
} else {
    boleto_fail_info += _lang.page_pay_fail_tip_pre;
    boleto_fail_info += '<a class="start-now" rel="nofollow" target="_blank" href="' + webData.WEB_ROOT + 'about/email.php?type=pre_sales">';
    boleto_fail_info += _lang.page_payment_contact_us;
    boleto_fail_info += '</a>';
}
var bindClick = function() {
    $("#payment-livechat .start-now").on('click', function() {
        var LC_API = window.LC_API || {};
        LC_API.open_chat_window();
        window.LC_API = LC_API;
    });
};
bindClick();
var init_with_table = function () {
    function doSth() {
        pay_mask_table.hide();
        pay_mask.hide();
        pay_iframe.show();
    }
    $('input[name="bank"]').click(function() {
        if(! address.check_addr_form(address_form)) {
            $('input[name="bank"]:checked').prop('checked', false);
            if (address_form_wrap.is(':hidden')) {
                btn_edit.trigger('click');
            }
            return false;
        }
        if (address_form_wrap.is(':visible')) {
            alert(_lang.page_billing_save_first);
            $('input[name="bank"]:checked').prop('checked', false);
            return false;
        }

        $('#fail_info_div').hide();

        pay_iframe.hide();
        pay_mask.show();

        //<!--{* 模拟 iframe 加载。 一旦 onload 完毕就执行某些操作 *}-->
        //creditIframe
        var param = 'order_sn=' + pageData.order_sn + '&bank=' + $('input[name="bank"]:checked').val() + '&tax_code=' + $('#_tax_code_value').val();
        $.ajax({
            'type': 'post',
            'url': webData.WEB_ROOT + 'ajax.php?act=get_gc_pay_url',
            'data': param,
            'cache': true,
            'dataType': 'json',
            'success': function(r) {
                if (r.code == 0) {
                    if (r.seta) {
                        $('#no_credit_card_continue').attr('href', r.url);
                        $('#iframe_emulator, #iframe_emulator iframe').hide();
                        doSth();
                        return;
                    } else if (r.target && r.target == 'top') {
                        top.location.href = r.url;
                    } else {
                        document.getElementById('creditIframe').src = r.url;
                        doSth();
                    }
                } else {
                    if (r.target && r.target == 'top') {
                        top.location.href = r.url;
                    }
                    $('#fail_info_div').show().html(boleto_fail_info);
                    bindClick();

                    pay_mask_table.show();
                    pay_iframe.hide();
                    pay_mask.hide();
                    $('input[name="bank"]:checked').prop('checked', false);
                }
            }
        });
    });
};

var init_without_table = function () {
    function doSth() {
        pay_mask.hide();
    }
    $('input[name="bank"]').click(function() {
        if(! address.check_addr_form(address_form)) {
            $('input[name="bank"]:checked').prop('checked', false);
            if (address_form_wrap.is(':hidden')) {
                btn_edit.trigger('click');
            }
            return false;
        }
        if (address_form_wrap.is(':visible')) {
            alert(_lang.page_billing_save_first);
            $('input[name="bank"]:checked').prop('checked', false);
            return false;
        }

        $('#fail_info_div').hide();
        pay_mask.show();

        //<!--{* 模拟 iframe 加载。 一旦 onload 完毕就执行某些操作 *}-->
        //creditIframe
        var param = 'order_sn=' + pageData.order_sn + '&bank=' + $('input[name="bank"]:checked').val() + '&tax_code=' + $('#_tax_code_value').val();
        $.ajax({
            'type': 'post',
            'url': webData.WEB_ROOT + 'ajax.php?act=get_gc_pay_url',
            'data': param,
            'cache': true,
            'dataType': 'json',
            'success': function(r) {
                if (r.target && r.target == 'top') {
                    top.location.href = r.url;
                }
                if (r.code == 0) {
                    doSth();
                    return;
                } else {
                    $('#fail_info_div').show().html(boleto_fail_info);
                    bindClick();

                    $('input[name="bank"]:checked').prop('checked', false);
                    doSth();
                }
            }
        });
    });
    $('input[name="astro_bank"]').click(function() {
        if(! address.check_addr_form(address_form)) {
            $('input[name="astro_bank"]:checked').prop('checked', false);
            if (address_form_wrap.is(':hidden')) {
                btn_edit.trigger('click');
            }
            return false;
        }
        if (address_form_wrap.is(':visible')) {
            alert(_lang.page_billing_save_first);
            $('input[name="astro_bank"]:checked').prop('checked', false);
            return false;
        }

        $('#fail_info_div').hide();
        pay_mask.show();

        //<!--{* 模拟 iframe 加载。 一旦 onload 完毕就执行某些操作 *}-->
        //creditIframe
        var param = 'order_sn=' + pageData.order_sn + '&astro_bank=' + $('input[name="astro_bank"]:checked').val();
        $.ajax({
            'type': 'post',
            'url': webData.WEB_ROOT + 'ajax.php?act=get_astropay_url',
            'data': param,
            'cache': true,
            'dataType': 'json',
            'success': function(r) {
                if (r.code == 1) {
                    $('#astro_credit_card_continue').attr('href', r.data);
                } else {
                    $('#fail_info_div').show().html(r.data);
                    bindClick();

                    $('input[name="astro_bank"]:checked').prop('checked', false);
                    $('#astro_credit_card_continue').removeAttr('href');
                }
                doSth();
            }
        });
    });
};

var init = function () {
    if(pageData.is_display_table) {
        init_with_table();
    } else {
        init_without_table();
    }
};

module.exports = {
    "init": init
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvY2hlY2tvdXQvZ2NfcGF5X2FyZWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxudmFyIGFkZHJlc3MgPSByZXF1aXJlKCcuLi9tb2QvYWRkcmVzcycpO1xyXG5cclxudmFyIGFkZHJlc3NfbGlzdCA9ICQoJyNiaWxsaW5nX2FkcmVzc19kaXYnKTtcclxudmFyIGFkZHJlc3NfZm9ybSA9ICQoJyNhZGRyZXNzX2Zvcm0nKTtcclxudmFyIGFkZHJlc3NfZm9ybV93cmFwID0gJCgnI2Rpdl9iaWxsaW5nX2FkZHJlc3MnKTtcclxudmFyIGJ0bl9lZGl0ID0gYWRkcmVzc19saXN0LmZpbmQoJy5lZGl0Jyk7XHJcblxyXG52YXIgcGF5X2lmcmFtZSA9ICQoJyNpZnJhbWVfZW11bGF0b3InKTtcclxudmFyIHBheV9tYXNrID0gJCgnLm1hc2tlZCcpO1xyXG52YXIgcGF5X21hc2tfdGFibGUgPSAkKCcubWFza190YWJsZScpO1xyXG5cclxudmFyIGJvbGV0b19mYWlsX2luZm8gPSAnJztcclxuaWYgKHdlYkRhdGEubGFuZyA9PSAnZW4nKSB7XHJcbiAgICBib2xldG9fZmFpbF9pbmZvICs9IF9sYW5nLnBhZ2VfcGF5X2ZhaWxfdGlwX3ByZSArICc8c3BhbiBpZD1cInBheW1lbnQtbGl2ZWNoYXRcIj48YSBjbGFzcz1cInN0YXJ0LW5vd1wiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj4nO1xyXG4gICAgYm9sZXRvX2ZhaWxfaW5mbyArPSBfbGFuZy5wYWdlX2NvbW1vbl9saXZlX2NoYXQ7XHJcbiAgICBib2xldG9fZmFpbF9pbmZvICs9ICc8L2E+PC9zcGFuPic7XHJcbn0gZWxzZSB7XHJcbiAgICBib2xldG9fZmFpbF9pbmZvICs9IF9sYW5nLnBhZ2VfcGF5X2ZhaWxfdGlwX3ByZTtcclxuICAgIGJvbGV0b19mYWlsX2luZm8gKz0gJzxhIGNsYXNzPVwic3RhcnQtbm93XCIgcmVsPVwibm9mb2xsb3dcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJyArIHdlYkRhdGEuV0VCX1JPT1QgKyAnYWJvdXQvZW1haWwucGhwP3R5cGU9cHJlX3NhbGVzXCI+JztcclxuICAgIGJvbGV0b19mYWlsX2luZm8gKz0gX2xhbmcucGFnZV9wYXltZW50X2NvbnRhY3RfdXM7XHJcbiAgICBib2xldG9fZmFpbF9pbmZvICs9ICc8L2E+JztcclxufVxyXG52YXIgYmluZENsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiI3BheW1lbnQtbGl2ZWNoYXQgLnN0YXJ0LW5vd1wiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgTENfQVBJID0gd2luZG93LkxDX0FQSSB8fCB7fTtcclxuICAgICAgICBMQ19BUEkub3Blbl9jaGF0X3dpbmRvdygpO1xyXG4gICAgICAgIHdpbmRvdy5MQ19BUEkgPSBMQ19BUEk7XHJcbiAgICB9KTtcclxufTtcclxuYmluZENsaWNrKCk7XHJcbnZhciBpbml0X3dpdGhfdGFibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBkb1N0aCgpIHtcclxuICAgICAgICBwYXlfbWFza190YWJsZS5oaWRlKCk7XHJcbiAgICAgICAgcGF5X21hc2suaGlkZSgpO1xyXG4gICAgICAgIHBheV9pZnJhbWUuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgJCgnaW5wdXRbbmFtZT1cImJhbmtcIl0nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBpZighIGFkZHJlc3MuY2hlY2tfYWRkcl9mb3JtKGFkZHJlc3NfZm9ybSkpIHtcclxuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cImJhbmtcIl06Y2hlY2tlZCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChhZGRyZXNzX2Zvcm1fd3JhcC5pcygnOmhpZGRlbicpKSB7XHJcbiAgICAgICAgICAgICAgICBidG5fZWRpdC50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFkZHJlc3NfZm9ybV93cmFwLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KF9sYW5nLnBhZ2VfYmlsbGluZ19zYXZlX2ZpcnN0KTtcclxuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cImJhbmtcIl06Y2hlY2tlZCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJyNmYWlsX2luZm9fZGl2JykuaGlkZSgpO1xyXG5cclxuICAgICAgICBwYXlfaWZyYW1lLmhpZGUoKTtcclxuICAgICAgICBwYXlfbWFzay5zaG93KCk7XHJcblxyXG4gICAgICAgIC8vPCEtLXsqIOaooeaLnyBpZnJhbWUg5Yqg6L2944CCIOS4gOaXpiBvbmxvYWQg5a6M5q+V5bCx5omn6KGM5p+Q5Lqb5pON5L2cICp9LS0+XHJcbiAgICAgICAgLy9jcmVkaXRJZnJhbWVcclxuICAgICAgICB2YXIgcGFyYW0gPSAnb3JkZXJfc249JyArIHBhZ2VEYXRhLm9yZGVyX3NuICsgJyZiYW5rPScgKyAkKCdpbnB1dFtuYW1lPVwiYmFua1wiXTpjaGVja2VkJykudmFsKCkgKyAnJnRheF9jb2RlPScgKyAkKCcjX3RheF9jb2RlX3ZhbHVlJykudmFsKCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgJ3R5cGUnOiAncG9zdCcsXHJcbiAgICAgICAgICAgICd1cmwnOiB3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwP2FjdD1nZXRfZ2NfcGF5X3VybCcsXHJcbiAgICAgICAgICAgICdkYXRhJzogcGFyYW0sXHJcbiAgICAgICAgICAgICdjYWNoZSc6IHRydWUsXHJcbiAgICAgICAgICAgICdkYXRhVHlwZSc6ICdqc29uJyxcclxuICAgICAgICAgICAgJ3N1Y2Nlc3MnOiBmdW5jdGlvbihyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoci5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoci5zZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNub19jcmVkaXRfY2FyZF9jb250aW51ZScpLmF0dHIoJ2hyZWYnLCByLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNpZnJhbWVfZW11bGF0b3IsICNpZnJhbWVfZW11bGF0b3IgaWZyYW1lJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb1N0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyLnRhcmdldCAmJiByLnRhcmdldCA9PSAndG9wJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AubG9jYXRpb24uaHJlZiA9IHIudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVkaXRJZnJhbWUnKS5zcmMgPSByLnVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9TdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyLnRhcmdldCAmJiByLnRhcmdldCA9PSAndG9wJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AubG9jYXRpb24uaHJlZiA9IHIudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAkKCcjZmFpbF9pbmZvX2RpdicpLnNob3coKS5odG1sKGJvbGV0b19mYWlsX2luZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbmRDbGljaygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwYXlfbWFza190YWJsZS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF5X2lmcmFtZS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF5X21hc2suaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJiYW5rXCJdOmNoZWNrZWQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbnZhciBpbml0X3dpdGhvdXRfdGFibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBkb1N0aCgpIHtcclxuICAgICAgICBwYXlfbWFzay5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICAkKCdpbnB1dFtuYW1lPVwiYmFua1wiXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKCEgYWRkcmVzcy5jaGVja19hZGRyX2Zvcm0oYWRkcmVzc19mb3JtKSkge1xyXG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiYmFua1wiXTpjaGVja2VkJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKGFkZHJlc3NfZm9ybV93cmFwLmlzKCc6aGlkZGVuJykpIHtcclxuICAgICAgICAgICAgICAgIGJ0bl9lZGl0LnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWRkcmVzc19mb3JtX3dyYXAuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgYWxlcnQoX2xhbmcucGFnZV9iaWxsaW5nX3NhdmVfZmlyc3QpO1xyXG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiYmFua1wiXTpjaGVja2VkJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnI2ZhaWxfaW5mb19kaXYnKS5oaWRlKCk7XHJcbiAgICAgICAgcGF5X21hc2suc2hvdygpO1xyXG5cclxuICAgICAgICAvLzwhLS17KiDmqKHmi58gaWZyYW1lIOWKoOi9veOAgiDkuIDml6Ygb25sb2FkIOWujOavleWwseaJp+ihjOafkOS6m+aTjeS9nCAqfS0tPlxyXG4gICAgICAgIC8vY3JlZGl0SWZyYW1lXHJcbiAgICAgICAgdmFyIHBhcmFtID0gJ29yZGVyX3NuPScgKyBwYWdlRGF0YS5vcmRlcl9zbiArICcmYmFuaz0nICsgJCgnaW5wdXRbbmFtZT1cImJhbmtcIl06Y2hlY2tlZCcpLnZhbCgpICsgJyZ0YXhfY29kZT0nICsgJCgnI190YXhfY29kZV92YWx1ZScpLnZhbCgpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICd0eXBlJzogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAndXJsJzogd2ViRGF0YS5XRUJfUk9PVCArICdhamF4LnBocD9hY3Q9Z2V0X2djX3BheV91cmwnLFxyXG4gICAgICAgICAgICAnZGF0YSc6IHBhcmFtLFxyXG4gICAgICAgICAgICAnY2FjaGUnOiB0cnVlLFxyXG4gICAgICAgICAgICAnZGF0YVR5cGUnOiAnanNvbicsXHJcbiAgICAgICAgICAgICdzdWNjZXNzJzogZnVuY3Rpb24ocikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHIudGFyZ2V0ICYmIHIudGFyZ2V0ID09ICd0b3AnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wLmxvY2F0aW9uLmhyZWYgPSByLnVybDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvU3RoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZmFpbF9pbmZvX2RpdicpLnNob3coKS5odG1sKGJvbGV0b19mYWlsX2luZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbmRDbGljaygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiYmFua1wiXTpjaGVja2VkJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBkb1N0aCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgICQoJ2lucHV0W25hbWU9XCJhc3Ryb19iYW5rXCJdJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYoISBhZGRyZXNzLmNoZWNrX2FkZHJfZm9ybShhZGRyZXNzX2Zvcm0pKSB7XHJcbiAgICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJhc3Ryb19iYW5rXCJdOmNoZWNrZWQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoYWRkcmVzc19mb3JtX3dyYXAuaXMoJzpoaWRkZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgYnRuX2VkaXQudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhZGRyZXNzX2Zvcm1fd3JhcC5pcygnOnZpc2libGUnKSkge1xyXG4gICAgICAgICAgICBhbGVydChfbGFuZy5wYWdlX2JpbGxpbmdfc2F2ZV9maXJzdCk7XHJcbiAgICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJhc3Ryb19iYW5rXCJdOmNoZWNrZWQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcjZmFpbF9pbmZvX2RpdicpLmhpZGUoKTtcclxuICAgICAgICBwYXlfbWFzay5zaG93KCk7XHJcblxyXG4gICAgICAgIC8vPCEtLXsqIOaooeaLnyBpZnJhbWUg5Yqg6L2944CCIOS4gOaXpiBvbmxvYWQg5a6M5q+V5bCx5omn6KGM5p+Q5Lqb5pON5L2cICp9LS0+XHJcbiAgICAgICAgLy9jcmVkaXRJZnJhbWVcclxuICAgICAgICB2YXIgcGFyYW0gPSAnb3JkZXJfc249JyArIHBhZ2VEYXRhLm9yZGVyX3NuICsgJyZhc3Ryb19iYW5rPScgKyAkKCdpbnB1dFtuYW1lPVwiYXN0cm9fYmFua1wiXTpjaGVja2VkJykudmFsKCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgJ3R5cGUnOiAncG9zdCcsXHJcbiAgICAgICAgICAgICd1cmwnOiB3ZWJEYXRhLldFQl9ST09UICsgJ2FqYXgucGhwP2FjdD1nZXRfYXN0cm9wYXlfdXJsJyxcclxuICAgICAgICAgICAgJ2RhdGEnOiBwYXJhbSxcclxuICAgICAgICAgICAgJ2NhY2hlJzogdHJ1ZSxcclxuICAgICAgICAgICAgJ2RhdGFUeXBlJzogJ2pzb24nLFxyXG4gICAgICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uKHIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyLmNvZGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNhc3Ryb19jcmVkaXRfY2FyZF9jb250aW51ZScpLmF0dHIoJ2hyZWYnLCByLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZmFpbF9pbmZvX2RpdicpLnNob3coKS5odG1sKHIuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmluZENsaWNrKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJhc3Ryb19iYW5rXCJdOmNoZWNrZWQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNhc3Ryb19jcmVkaXRfY2FyZF9jb250aW51ZScpLnJlbW92ZUF0dHIoJ2hyZWYnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRvU3RoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxudmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZihwYWdlRGF0YS5pc19kaXNwbGF5X3RhYmxlKSB7XHJcbiAgICAgICAgaW5pdF93aXRoX3RhYmxlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGluaXRfd2l0aG91dF90YWJsZSgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBcImluaXRcIjogaW5pdFxyXG59O1xyXG4iXX0=
},{"../mod/address":8}],3:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

//TODO：Your Order模块底部有livechat隐藏域，不知道是做什么的
module.exports = {
    "init" : function() {
        $(function() {
            var loader = require('../mod/loader');
            loader.loadSocialJS('livechat');
        });

        window.LC_API = window.LC_API || {};
        window.LC_API.on_load = function() {
            var livechatinc_visitor_id = $('#livechatinc_visitor_id');
            if(livechatinc_visitor_id.length > 0) {
                livechatinc_visitor_id.val(window.LC_API.get_visitor_id());
            }
            window.LC_API.hide_chat_window();
        };
    }
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvY2hlY2tvdXQvbGl2ZWNoYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG5cclxuLy9UT0RP77yaWW91ciBPcmRlcuaooeWdl+W6lemDqOaciWxpdmVjaGF06ZqQ6JeP5Z+f77yM5LiN55+l6YGT5piv5YGa5LuA5LmI55qEXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgXCJpbml0XCIgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgbG9hZGVyID0gcmVxdWlyZSgnLi4vbW9kL2xvYWRlcicpO1xyXG4gICAgICAgICAgICBsb2FkZXIubG9hZFNvY2lhbEpTKCdsaXZlY2hhdCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuTENfQVBJID0gd2luZG93LkxDX0FQSSB8fCB7fTtcclxuICAgICAgICB3aW5kb3cuTENfQVBJLm9uX2xvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGxpdmVjaGF0aW5jX3Zpc2l0b3JfaWQgPSAkKCcjbGl2ZWNoYXRpbmNfdmlzaXRvcl9pZCcpO1xyXG4gICAgICAgICAgICBpZihsaXZlY2hhdGluY192aXNpdG9yX2lkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxpdmVjaGF0aW5jX3Zpc2l0b3JfaWQudmFsKHdpbmRvdy5MQ19BUEkuZ2V0X3Zpc2l0b3JfaWQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LkxDX0FQSS5oaWRlX2NoYXRfd2luZG93KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufTsiXX0=
},{"../mod/loader":11}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var validateCreditCard = function(option) {
	var card_types, is_valid_length, is_valid_luhn, is_varlid_cvv_legth, is_valid_card, get_card, 
	    card,valid_length = false, valid_luhn = false, valid_cvv = false;
	var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
	if(option.cardNumber != undefined) {
	  option.cardNumberLength = option.cardNumber.length;
	} else {
	  option.cardNumber = "";
	  option.cardNumberLength = 0;
	}
	if(option.cvv != undefined) {
	  option.cvvLength = option.cvv.length;
	} else {
	  option.cvvLength = 0;
	  option.cvv = "";
	}
	if (option.gcId == undefined) {
		option.gcId = 0;
	}
	
	card_types = [
	{
	  type: 'visaelectron',
	  pattern: /^4(026|17500|405|508|844|91[37])/,
	  length: [16],
	  cvcLength: [3],
	  luhn: true,
	  gcId: 122
	},
	{
	  type: 'maestro',
	  // pattern: /^(5(018|0[23]|[68])|6(39|7))/,
	  pattern: /^(5(0|[6-9])|6)/,
	  length: [12, 13, 14, 15, 16, 17, 18, 19],
	  cvcLength: [3],
	  luhn: true,
	  gcId: 117
	},
	{
	  type: 'visa',
	  pattern: /^4/,
	  length: [13, 16],
	  cvcLength: [3],
	  luhn: true,
	  gcId: 1
	},
	{
	  type: 'mastercard',
	  pattern: /^5[0-5]/,
	  length: [16],
	  cvcLength: [3],
	  luhn: true,
	  gcId: 3
	},
	{
	  type: 'amex',
	  pattern: /^3[47]/,
	  length: [15],
	  cvcLength: [3, 4],
	  luhn: true,
	  gcId: 2
	},
	{
	  type: 'dinersclub',
	  pattern: /^3[0689]/,
	  length: [14],
	  cvcLength: [3],
	  luhn: true,
	  gcId: 132
	},
	{
	  type: 'discover',
	  pattern: /^6([045]|22)/,
	  length: [16],
	  cvcLength: [3],
	  luhn: true,
	  gcId: 128
	},
	{
	  type: 'unionpay',
	  pattern: /^(62|88)/,
	  length: [16, 17, 18, 19],
	  cvcLength: [3],
	  luhn: false,
	  gcId: -1
	},
	{
	  type: 'jcb',
	  pattern: /^35/,
	  length: [16],
	  cvcLength: [3],
	  luhn: true,
	  gcId: 125
	}
	];
	
	get_card = function() {
	  var card_obj = null;
	  for(c in card_types) {
	     var id = card_types[c].gcId;
	     if (id == option.gcId) {
	       card_obj = card_types[c];
	       break;
	     }
	   } 
	  return card_obj;
	};
	
	is_valid_length = function(card_obj) {
	   var validLength = card_obj.length;
	   if (__indexOf.call(validLength, option.cardNumberLength) >= 0) {
	     return true;
	   } 
	   return false;
	};
	
	is_valid_card = function(card_obj) {
	  var pattern = card_obj.pattern,
	      cardNumber = option.cardNumber;
	  if (cardNumber.match(pattern)) {
		  return true;
	  }
	  return false;
	}
	
	is_varlid_cvv_legth = function(card_obj) {
	  var cvvLength = card_obj.cvcLength;
	  if(__indexOf.call(cvvLength, option.cvvLength) >= 0) { 
	     return true;
	  }
	  return false;
	};
	
	is_valid_luhn = function(num) {
	  var digit, digits, odd, sum, _i, _len;
	  odd = true;
	  sum = 0;
	  digits = (num + '').split('').reverse();
	  for (_i = 0, _len = digits.length; _i < _len; _i++) {
	   digit = digits[_i];
	   digit = parseInt(digit, 10);
	   if ((odd = !odd)) {
	      digit *= 2;
	   }
	   if (digit > 9) {
	      digit -= 9;
	   }
	   sum += digit;
	  }
	  return sum % 10 === 0;
	}; 
	
	card = get_card();
	if (card != null) {
	  valid_length = is_valid_length(card) ;
	  valid_card = is_valid_card(card);
	  valid_cvv = is_varlid_cvv_legth(card);
	  valid_luhn = (card.luhn ? true : is_valid_luhn(option.cardNumber));
	} else {
	  valid_length = true;
	  valid_card = true;
	  valid_luhn = is_valid_luhn(option.cardNumber);
	  valid_cvv = true;
	}
	return {
		  valid_length: valid_length,
		  valid_card: valid_card,
		  valid_luhn: valid_luhn,
		  valid_cvv: valid_cvv
	 };
}

function init_expire_info() {
	var expire_mm = $('EXPIRYDATE_MM');
	for(var i = 1; i <= 12; i++) {
		var month = ''+i;
		if(i < 10) {
		month = '0'+i;
	    }
	  $('#EXPIRYDATE_MM').append('<option value='+month+'>'+month+'</option>');
	}
	var curr_date = new Date();
	var curr_year = curr_date.getFullYear();
	y = curr_year - 1;
	for(j = 0; j < 27; j++) {
		y = y + 1;
		var prefix_num = ('' + y).substr(2,2);
	    //alert(prefix_num);
	   $('#EXPIRYDATE_YY').append('<option value='+prefix_num+'>'+prefix_num+'</option>');
	 }
 }

var submit_check = function() {
    //choose bank 
    var bank_id = $("ul.accept_bk :radio:checked").val();
    if (bank_id == undefined) {
         $("#please-select-card").text(creditCardTips.pleaseChooseCredit);
         return false;	
    } else {
    	$("#please-select-card").text("");
    }
	var credit_card = $.trim($("#creditCardNumber").val());
	var result = 0;
	if(credit_card == "") {
	   $("#CREDITCARDNUMBER_tips").text(creditCardTips.pleaseEnterCardNum);
	} else if(!credit_card.match(/[0-9]+\d*/)) {
	   $("#CREDITCARDNUMBER_tips").text(creditCardTips.cardNumberInvalid);
	} else {
	   $("#CREDITCARDNUMBER_tips").text('');
	   result = result + 1;
	}
	if(result == 0 ) {
	   return false;
	}
	var mm_select = $("#EXPIRYDATE_MM").val();
	var yy_select = $("#EXPIRYDATE_YY").val();
	if ((mm_select == -1) || (yy_select == -1)) {
	    $("#EXPIRYDATE_tips").text(creditCardTips.pleaseChooseExpiryDate);
	    return false;
	} else {
	   $("#EXPIRYDATE_tips").text('');
	}
	result = 0 ;
	var cvv = $.trim($("#CVV").val());
	if(cvv == "") {
	    $("#CVV_tips").text(creditCardTips.pleaseEnterSeCode);
	} else if(!cvv.match(/[0-9]+\d*/)) {
	    $("#CVV_tips").text(creditCardTips.securityCodeInvalid);
	} else {
	   result = result + 1;
	   $("#CVV_tips").text('');
	}
	if(result == 0 ) {
	   return false;
	}
	
	var cardInfo = {};
	cardInfo.cardNumber = credit_card;
	cardInfo.cvv = cvv;
	cardInfo.gcId = bank_id;
	
	 var checkResult = validateCreditCard(cardInfo);
	 //@TODO
	 //result = 0;
	 if (!checkResult.valid_length || !checkResult.valid_card || !checkResult.valid_luhn) {
		 $("#CREDITCARDNUMBER_tips").text(creditCardTips.cardNumberInvalid);
		 //result = result + 1;
	 }  
	
	 if (!checkResult.valid_cvv) {
		$("#CVV_tips").text(creditCardTips.securityCodeInvalid);
		//result = result + 1;
	 }  
	  
	 /*
	 if (result > 0) {
		return false; 
	 }*/
	 
	$("#ORB_BUTTON").attr('disabled', true);
	$('#fail_info_box').hide();
	$('.masked').show();
	return true;
}

var init = function() {
   init_expire_info();

   $("ul.accept_bk :radio").click(function(){
	 	$("#please-select-card").text("");
   });

   $("#creditCardNumber").focus(function(){
	   $("#CREDITCARDNUMBER_tips").text('');
   });

   $("#EXPIRYDATE_MM").focus(function(){
	   $("#EXPIRYDATE_tips").text('');
   });

   $("#EXPIRYDATE_YY").focus(function(){
	   $("#EXPIRYDATE_tips").text('');
   });

   $("#CVV").focus(function(){
	  $("#CVV_tips").text('');
   });
   
   $("#pay_credit_direct_form").submit( function () {
	   return submit_check();
   } );
}

module.exports = {
		"init": init,
	    "validateCreditCard" : validateCreditCard
	};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhZWEvanMvY2hlY2tvdXQvdmFsaWRhdGVfY3JlZGl0Y2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxuXHJcbnZhciB2YWxpZGF0ZUNyZWRpdENhcmQgPSBmdW5jdGlvbihvcHRpb24pIHtcclxuXHR2YXIgY2FyZF90eXBlcywgaXNfdmFsaWRfbGVuZ3RoLCBpc192YWxpZF9sdWhuLCBpc192YXJsaWRfY3Z2X2xlZ3RoLCBpc192YWxpZF9jYXJkLCBnZXRfY2FyZCwgXHJcblx0ICAgIGNhcmQsdmFsaWRfbGVuZ3RoID0gZmFsc2UsIHZhbGlkX2x1aG4gPSBmYWxzZSwgdmFsaWRfY3Z2ID0gZmFsc2U7XHJcblx0dmFyIF9faW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkgeyBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7IGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7IH0gcmV0dXJuIC0xOyB9O1xyXG5cdGlmKG9wdGlvbi5jYXJkTnVtYmVyICE9IHVuZGVmaW5lZCkge1xyXG5cdCAgb3B0aW9uLmNhcmROdW1iZXJMZW5ndGggPSBvcHRpb24uY2FyZE51bWJlci5sZW5ndGg7XHJcblx0fSBlbHNlIHtcclxuXHQgIG9wdGlvbi5jYXJkTnVtYmVyID0gXCJcIjtcclxuXHQgIG9wdGlvbi5jYXJkTnVtYmVyTGVuZ3RoID0gMDtcclxuXHR9XHJcblx0aWYob3B0aW9uLmN2diAhPSB1bmRlZmluZWQpIHtcclxuXHQgIG9wdGlvbi5jdnZMZW5ndGggPSBvcHRpb24uY3Z2Lmxlbmd0aDtcclxuXHR9IGVsc2Uge1xyXG5cdCAgb3B0aW9uLmN2dkxlbmd0aCA9IDA7XHJcblx0ICBvcHRpb24uY3Z2ID0gXCJcIjtcclxuXHR9XHJcblx0aWYgKG9wdGlvbi5nY0lkID09IHVuZGVmaW5lZCkge1xyXG5cdFx0b3B0aW9uLmdjSWQgPSAwO1xyXG5cdH1cclxuXHRcclxuXHRjYXJkX3R5cGVzID0gW1xyXG5cdHtcclxuXHQgIHR5cGU6ICd2aXNhZWxlY3Ryb24nLFxyXG5cdCAgcGF0dGVybjogL140KDAyNnwxNzUwMHw0MDV8NTA4fDg0NHw5MVszN10pLyxcclxuXHQgIGxlbmd0aDogWzE2XSxcclxuXHQgIGN2Y0xlbmd0aDogWzNdLFxyXG5cdCAgbHVobjogdHJ1ZSxcclxuXHQgIGdjSWQ6IDEyMlxyXG5cdH0sXHJcblx0e1xyXG5cdCAgdHlwZTogJ21hZXN0cm8nLFxyXG5cdCAgLy8gcGF0dGVybjogL14oNSgwMTh8MFsyM118WzY4XSl8NigzOXw3KSkvLFxyXG5cdCAgcGF0dGVybjogL14oNSgwfFs2LTldKXw2KS8sXHJcblx0ICBsZW5ndGg6IFsxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTldLFxyXG5cdCAgY3ZjTGVuZ3RoOiBbM10sXHJcblx0ICBsdWhuOiB0cnVlLFxyXG5cdCAgZ2NJZDogMTE3XHJcblx0fSxcclxuXHR7XHJcblx0ICB0eXBlOiAndmlzYScsXHJcblx0ICBwYXR0ZXJuOiAvXjQvLFxyXG5cdCAgbGVuZ3RoOiBbMTMsIDE2XSxcclxuXHQgIGN2Y0xlbmd0aDogWzNdLFxyXG5cdCAgbHVobjogdHJ1ZSxcclxuXHQgIGdjSWQ6IDFcclxuXHR9LFxyXG5cdHtcclxuXHQgIHR5cGU6ICdtYXN0ZXJjYXJkJyxcclxuXHQgIHBhdHRlcm46IC9eNVswLTVdLyxcclxuXHQgIGxlbmd0aDogWzE2XSxcclxuXHQgIGN2Y0xlbmd0aDogWzNdLFxyXG5cdCAgbHVobjogdHJ1ZSxcclxuXHQgIGdjSWQ6IDNcclxuXHR9LFxyXG5cdHtcclxuXHQgIHR5cGU6ICdhbWV4JyxcclxuXHQgIHBhdHRlcm46IC9eM1s0N10vLFxyXG5cdCAgbGVuZ3RoOiBbMTVdLFxyXG5cdCAgY3ZjTGVuZ3RoOiBbMywgNF0sXHJcblx0ICBsdWhuOiB0cnVlLFxyXG5cdCAgZ2NJZDogMlxyXG5cdH0sXHJcblx0e1xyXG5cdCAgdHlwZTogJ2RpbmVyc2NsdWInLFxyXG5cdCAgcGF0dGVybjogL14zWzA2ODldLyxcclxuXHQgIGxlbmd0aDogWzE0XSxcclxuXHQgIGN2Y0xlbmd0aDogWzNdLFxyXG5cdCAgbHVobjogdHJ1ZSxcclxuXHQgIGdjSWQ6IDEzMlxyXG5cdH0sXHJcblx0e1xyXG5cdCAgdHlwZTogJ2Rpc2NvdmVyJyxcclxuXHQgIHBhdHRlcm46IC9eNihbMDQ1XXwyMikvLFxyXG5cdCAgbGVuZ3RoOiBbMTZdLFxyXG5cdCAgY3ZjTGVuZ3RoOiBbM10sXHJcblx0ICBsdWhuOiB0cnVlLFxyXG5cdCAgZ2NJZDogMTI4XHJcblx0fSxcclxuXHR7XHJcblx0ICB0eXBlOiAndW5pb25wYXknLFxyXG5cdCAgcGF0dGVybjogL14oNjJ8ODgpLyxcclxuXHQgIGxlbmd0aDogWzE2LCAxNywgMTgsIDE5XSxcclxuXHQgIGN2Y0xlbmd0aDogWzNdLFxyXG5cdCAgbHVobjogZmFsc2UsXHJcblx0ICBnY0lkOiAtMVxyXG5cdH0sXHJcblx0e1xyXG5cdCAgdHlwZTogJ2pjYicsXHJcblx0ICBwYXR0ZXJuOiAvXjM1LyxcclxuXHQgIGxlbmd0aDogWzE2XSxcclxuXHQgIGN2Y0xlbmd0aDogWzNdLFxyXG5cdCAgbHVobjogdHJ1ZSxcclxuXHQgIGdjSWQ6IDEyNVxyXG5cdH1cclxuXHRdO1xyXG5cdFxyXG5cdGdldF9jYXJkID0gZnVuY3Rpb24oKSB7XHJcblx0ICB2YXIgY2FyZF9vYmogPSBudWxsO1xyXG5cdCAgZm9yKGMgaW4gY2FyZF90eXBlcykge1xyXG5cdCAgICAgdmFyIGlkID0gY2FyZF90eXBlc1tjXS5nY0lkO1xyXG5cdCAgICAgaWYgKGlkID09IG9wdGlvbi5nY0lkKSB7XHJcblx0ICAgICAgIGNhcmRfb2JqID0gY2FyZF90eXBlc1tjXTtcclxuXHQgICAgICAgYnJlYWs7XHJcblx0ICAgICB9XHJcblx0ICAgfSBcclxuXHQgIHJldHVybiBjYXJkX29iajtcclxuXHR9O1xyXG5cdFxyXG5cdGlzX3ZhbGlkX2xlbmd0aCA9IGZ1bmN0aW9uKGNhcmRfb2JqKSB7XHJcblx0ICAgdmFyIHZhbGlkTGVuZ3RoID0gY2FyZF9vYmoubGVuZ3RoO1xyXG5cdCAgIGlmIChfX2luZGV4T2YuY2FsbCh2YWxpZExlbmd0aCwgb3B0aW9uLmNhcmROdW1iZXJMZW5ndGgpID49IDApIHtcclxuXHQgICAgIHJldHVybiB0cnVlO1xyXG5cdCAgIH0gXHJcblx0ICAgcmV0dXJuIGZhbHNlO1xyXG5cdH07XHJcblx0XHJcblx0aXNfdmFsaWRfY2FyZCA9IGZ1bmN0aW9uKGNhcmRfb2JqKSB7XHJcblx0ICB2YXIgcGF0dGVybiA9IGNhcmRfb2JqLnBhdHRlcm4sXHJcblx0ICAgICAgY2FyZE51bWJlciA9IG9wdGlvbi5jYXJkTnVtYmVyO1xyXG5cdCAgaWYgKGNhcmROdW1iZXIubWF0Y2gocGF0dGVybikpIHtcclxuXHRcdCAgcmV0dXJuIHRydWU7XHJcblx0ICB9XHJcblx0ICByZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cdFxyXG5cdGlzX3ZhcmxpZF9jdnZfbGVndGggPSBmdW5jdGlvbihjYXJkX29iaikge1xyXG5cdCAgdmFyIGN2dkxlbmd0aCA9IGNhcmRfb2JqLmN2Y0xlbmd0aDtcclxuXHQgIGlmKF9faW5kZXhPZi5jYWxsKGN2dkxlbmd0aCwgb3B0aW9uLmN2dkxlbmd0aCkgPj0gMCkgeyBcclxuXHQgICAgIHJldHVybiB0cnVlO1xyXG5cdCAgfVxyXG5cdCAgcmV0dXJuIGZhbHNlO1xyXG5cdH07XHJcblx0XHJcblx0aXNfdmFsaWRfbHVobiA9IGZ1bmN0aW9uKG51bSkge1xyXG5cdCAgdmFyIGRpZ2l0LCBkaWdpdHMsIG9kZCwgc3VtLCBfaSwgX2xlbjtcclxuXHQgIG9kZCA9IHRydWU7XHJcblx0ICBzdW0gPSAwO1xyXG5cdCAgZGlnaXRzID0gKG51bSArICcnKS5zcGxpdCgnJykucmV2ZXJzZSgpO1xyXG5cdCAgZm9yIChfaSA9IDAsIF9sZW4gPSBkaWdpdHMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcclxuXHQgICBkaWdpdCA9IGRpZ2l0c1tfaV07XHJcblx0ICAgZGlnaXQgPSBwYXJzZUludChkaWdpdCwgMTApO1xyXG5cdCAgIGlmICgob2RkID0gIW9kZCkpIHtcclxuXHQgICAgICBkaWdpdCAqPSAyO1xyXG5cdCAgIH1cclxuXHQgICBpZiAoZGlnaXQgPiA5KSB7XHJcblx0ICAgICAgZGlnaXQgLT0gOTtcclxuXHQgICB9XHJcblx0ICAgc3VtICs9IGRpZ2l0O1xyXG5cdCAgfVxyXG5cdCAgcmV0dXJuIHN1bSAlIDEwID09PSAwO1xyXG5cdH07IFxyXG5cdFxyXG5cdGNhcmQgPSBnZXRfY2FyZCgpO1xyXG5cdGlmIChjYXJkICE9IG51bGwpIHtcclxuXHQgIHZhbGlkX2xlbmd0aCA9IGlzX3ZhbGlkX2xlbmd0aChjYXJkKSA7XHJcblx0ICB2YWxpZF9jYXJkID0gaXNfdmFsaWRfY2FyZChjYXJkKTtcclxuXHQgIHZhbGlkX2N2diA9IGlzX3ZhcmxpZF9jdnZfbGVndGgoY2FyZCk7XHJcblx0ICB2YWxpZF9sdWhuID0gKGNhcmQubHVobiA/IHRydWUgOiBpc192YWxpZF9sdWhuKG9wdGlvbi5jYXJkTnVtYmVyKSk7XHJcblx0fSBlbHNlIHtcclxuXHQgIHZhbGlkX2xlbmd0aCA9IHRydWU7XHJcblx0ICB2YWxpZF9jYXJkID0gdHJ1ZTtcclxuXHQgIHZhbGlkX2x1aG4gPSBpc192YWxpZF9sdWhuKG9wdGlvbi5jYXJkTnVtYmVyKTtcclxuXHQgIHZhbGlkX2N2diA9IHRydWU7XHJcblx0fVxyXG5cdHJldHVybiB7XHJcblx0XHQgIHZhbGlkX2xlbmd0aDogdmFsaWRfbGVuZ3RoLFxyXG5cdFx0ICB2YWxpZF9jYXJkOiB2YWxpZF9jYXJkLFxyXG5cdFx0ICB2YWxpZF9sdWhuOiB2YWxpZF9sdWhuLFxyXG5cdFx0ICB2YWxpZF9jdnY6IHZhbGlkX2N2dlxyXG5cdCB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0X2V4cGlyZV9pbmZvKCkge1xyXG5cdHZhciBleHBpcmVfbW0gPSAkKCdFWFBJUllEQVRFX01NJyk7XHJcblx0Zm9yKHZhciBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XHJcblx0XHR2YXIgbW9udGggPSAnJytpO1xyXG5cdFx0aWYoaSA8IDEwKSB7XHJcblx0XHRtb250aCA9ICcwJytpO1xyXG5cdCAgICB9XHJcblx0ICAkKCcjRVhQSVJZREFURV9NTScpLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT0nK21vbnRoKyc+Jyttb250aCsnPC9vcHRpb24+Jyk7XHJcblx0fVxyXG5cdHZhciBjdXJyX2RhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdHZhciBjdXJyX3llYXIgPSBjdXJyX2RhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHR5ID0gY3Vycl95ZWFyIC0gMTtcclxuXHRmb3IoaiA9IDA7IGogPCAyNzsgaisrKSB7XHJcblx0XHR5ID0geSArIDE7XHJcblx0XHR2YXIgcHJlZml4X251bSA9ICgnJyArIHkpLnN1YnN0cigyLDIpO1xyXG5cdCAgICAvL2FsZXJ0KHByZWZpeF9udW0pO1xyXG5cdCAgICQoJyNFWFBJUllEQVRFX1lZJykuYXBwZW5kKCc8b3B0aW9uIHZhbHVlPScrcHJlZml4X251bSsnPicrcHJlZml4X251bSsnPC9vcHRpb24+Jyk7XHJcblx0IH1cclxuIH1cclxuXHJcbnZhciBzdWJtaXRfY2hlY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vY2hvb3NlIGJhbmsgXHJcbiAgICB2YXIgYmFua19pZCA9ICQoXCJ1bC5hY2NlcHRfYmsgOnJhZGlvOmNoZWNrZWRcIikudmFsKCk7XHJcbiAgICBpZiAoYmFua19pZCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgJChcIiNwbGVhc2Utc2VsZWN0LWNhcmRcIikudGV4dChjcmVkaXRDYXJkVGlwcy5wbGVhc2VDaG9vc2VDcmVkaXQpO1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHRcclxuICAgIH0gZWxzZSB7XHJcbiAgICBcdCQoXCIjcGxlYXNlLXNlbGVjdC1jYXJkXCIpLnRleHQoXCJcIik7XHJcbiAgICB9XHJcblx0dmFyIGNyZWRpdF9jYXJkID0gJC50cmltKCQoXCIjY3JlZGl0Q2FyZE51bWJlclwiKS52YWwoKSk7XHJcblx0dmFyIHJlc3VsdCA9IDA7XHJcblx0aWYoY3JlZGl0X2NhcmQgPT0gXCJcIikge1xyXG5cdCAgICQoXCIjQ1JFRElUQ0FSRE5VTUJFUl90aXBzXCIpLnRleHQoY3JlZGl0Q2FyZFRpcHMucGxlYXNlRW50ZXJDYXJkTnVtKTtcclxuXHR9IGVsc2UgaWYoIWNyZWRpdF9jYXJkLm1hdGNoKC9bMC05XStcXGQqLykpIHtcclxuXHQgICAkKFwiI0NSRURJVENBUkROVU1CRVJfdGlwc1wiKS50ZXh0KGNyZWRpdENhcmRUaXBzLmNhcmROdW1iZXJJbnZhbGlkKTtcclxuXHR9IGVsc2Uge1xyXG5cdCAgICQoXCIjQ1JFRElUQ0FSRE5VTUJFUl90aXBzXCIpLnRleHQoJycpO1xyXG5cdCAgIHJlc3VsdCA9IHJlc3VsdCArIDE7XHJcblx0fVxyXG5cdGlmKHJlc3VsdCA9PSAwICkge1xyXG5cdCAgIHJldHVybiBmYWxzZTtcclxuXHR9XHJcblx0dmFyIG1tX3NlbGVjdCA9ICQoXCIjRVhQSVJZREFURV9NTVwiKS52YWwoKTtcclxuXHR2YXIgeXlfc2VsZWN0ID0gJChcIiNFWFBJUllEQVRFX1lZXCIpLnZhbCgpO1xyXG5cdGlmICgobW1fc2VsZWN0ID09IC0xKSB8fCAoeXlfc2VsZWN0ID09IC0xKSkge1xyXG5cdCAgICAkKFwiI0VYUElSWURBVEVfdGlwc1wiKS50ZXh0KGNyZWRpdENhcmRUaXBzLnBsZWFzZUNob29zZUV4cGlyeURhdGUpO1xyXG5cdCAgICByZXR1cm4gZmFsc2U7XHJcblx0fSBlbHNlIHtcclxuXHQgICAkKFwiI0VYUElSWURBVEVfdGlwc1wiKS50ZXh0KCcnKTtcclxuXHR9XHJcblx0cmVzdWx0ID0gMCA7XHJcblx0dmFyIGN2diA9ICQudHJpbSgkKFwiI0NWVlwiKS52YWwoKSk7XHJcblx0aWYoY3Z2ID09IFwiXCIpIHtcclxuXHQgICAgJChcIiNDVlZfdGlwc1wiKS50ZXh0KGNyZWRpdENhcmRUaXBzLnBsZWFzZUVudGVyU2VDb2RlKTtcclxuXHR9IGVsc2UgaWYoIWN2di5tYXRjaCgvWzAtOV0rXFxkKi8pKSB7XHJcblx0ICAgICQoXCIjQ1ZWX3RpcHNcIikudGV4dChjcmVkaXRDYXJkVGlwcy5zZWN1cml0eUNvZGVJbnZhbGlkKTtcclxuXHR9IGVsc2Uge1xyXG5cdCAgIHJlc3VsdCA9IHJlc3VsdCArIDE7XHJcblx0ICAgJChcIiNDVlZfdGlwc1wiKS50ZXh0KCcnKTtcclxuXHR9XHJcblx0aWYocmVzdWx0ID09IDAgKSB7XHJcblx0ICAgcmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRcclxuXHR2YXIgY2FyZEluZm8gPSB7fTtcclxuXHRjYXJkSW5mby5jYXJkTnVtYmVyID0gY3JlZGl0X2NhcmQ7XHJcblx0Y2FyZEluZm8uY3Z2ID0gY3Z2O1xyXG5cdGNhcmRJbmZvLmdjSWQgPSBiYW5rX2lkO1xyXG5cdFxyXG5cdCB2YXIgY2hlY2tSZXN1bHQgPSB2YWxpZGF0ZUNyZWRpdENhcmQoY2FyZEluZm8pO1xyXG5cdCAvL0BUT0RPXHJcblx0IC8vcmVzdWx0ID0gMDtcclxuXHQgaWYgKCFjaGVja1Jlc3VsdC52YWxpZF9sZW5ndGggfHwgIWNoZWNrUmVzdWx0LnZhbGlkX2NhcmQgfHwgIWNoZWNrUmVzdWx0LnZhbGlkX2x1aG4pIHtcclxuXHRcdCAkKFwiI0NSRURJVENBUkROVU1CRVJfdGlwc1wiKS50ZXh0KGNyZWRpdENhcmRUaXBzLmNhcmROdW1iZXJJbnZhbGlkKTtcclxuXHRcdCAvL3Jlc3VsdCA9IHJlc3VsdCArIDE7XHJcblx0IH0gIFxyXG5cdFxyXG5cdCBpZiAoIWNoZWNrUmVzdWx0LnZhbGlkX2N2dikge1xyXG5cdFx0JChcIiNDVlZfdGlwc1wiKS50ZXh0KGNyZWRpdENhcmRUaXBzLnNlY3VyaXR5Q29kZUludmFsaWQpO1xyXG5cdFx0Ly9yZXN1bHQgPSByZXN1bHQgKyAxO1xyXG5cdCB9ICBcclxuXHQgIFxyXG5cdCAvKlxyXG5cdCBpZiAocmVzdWx0ID4gMCkge1xyXG5cdFx0cmV0dXJuIGZhbHNlOyBcclxuXHQgfSovXHJcblx0IFxyXG5cdCQoXCIjT1JCX0JVVFRPTlwiKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cdCQoJyNmYWlsX2luZm9fYm94JykuaGlkZSgpO1xyXG5cdCQoJy5tYXNrZWQnKS5zaG93KCk7XHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbnZhciBpbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgIGluaXRfZXhwaXJlX2luZm8oKTtcclxuXHJcbiAgICQoXCJ1bC5hY2NlcHRfYmsgOnJhZGlvXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0IFx0JChcIiNwbGVhc2Utc2VsZWN0LWNhcmRcIikudGV4dChcIlwiKTtcclxuICAgfSk7XHJcblxyXG4gICAkKFwiI2NyZWRpdENhcmROdW1iZXJcIikuZm9jdXMoZnVuY3Rpb24oKXtcclxuXHQgICAkKFwiI0NSRURJVENBUkROVU1CRVJfdGlwc1wiKS50ZXh0KCcnKTtcclxuICAgfSk7XHJcblxyXG4gICAkKFwiI0VYUElSWURBVEVfTU1cIikuZm9jdXMoZnVuY3Rpb24oKXtcclxuXHQgICAkKFwiI0VYUElSWURBVEVfdGlwc1wiKS50ZXh0KCcnKTtcclxuICAgfSk7XHJcblxyXG4gICAkKFwiI0VYUElSWURBVEVfWVlcIikuZm9jdXMoZnVuY3Rpb24oKXtcclxuXHQgICAkKFwiI0VYUElSWURBVEVfdGlwc1wiKS50ZXh0KCcnKTtcclxuICAgfSk7XHJcblxyXG4gICAkKFwiI0NWVlwiKS5mb2N1cyhmdW5jdGlvbigpe1xyXG5cdCAgJChcIiNDVlZfdGlwc1wiKS50ZXh0KCcnKTtcclxuICAgfSk7XHJcbiAgIFxyXG4gICAkKFwiI3BheV9jcmVkaXRfZGlyZWN0X2Zvcm1cIikuc3VibWl0KCBmdW5jdGlvbiAoKSB7XHJcblx0ICAgcmV0dXJuIHN1Ym1pdF9jaGVjaygpO1xyXG4gICB9ICk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdFx0XCJpbml0XCI6IGluaXQsXHJcblx0ICAgIFwidmFsaWRhdGVDcmVkaXRDYXJkXCIgOiB2YWxpZGF0ZUNyZWRpdENhcmRcclxuXHR9O1xyXG4iXX0=
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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

},{"../common/events":6,"../lib/jqueryForm":7,"../mod/formCheck":9}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
function JsTemplate(template, filler) {
    this.template = template;
    this.filler = filler;
}

JsTemplate.prototype.render = function(filler) {
    var html = this.template || ""; 
    var replaceObj = filler || this.filler || {};
    for (var pattern in replaceObj) {
        var regPattern = new RegExp("{{" + pattern + "}}", "g");
        html = html.replace(regPattern, replaceObj[pattern]);
    }
    html = html.replace(/{{[^}]*}}/g, "");
    return html;
}

JsTemplate.prototype.setTemplate = function(template) {
    this.template = template;
}

JsTemplate.prototype.setFiller = function(filler) {
    this.filler = filler;
}

module.exports = JsTemplate;
},{}],11:[function(require,module,exports){
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
},{}],"credit_card":[function(require,module,exports){
// require('./common')

require('../checkout/gc_address').init(); //Billing Address

require('../checkout/gc_pay_area').init(); //Pay Area
require('../checkout/validate_creditcard').init(); //validate_creditcard
require('../checkout/livechat').init(); //livechat
},{"../checkout/gc_address":1,"../checkout/gc_pay_area":2,"../checkout/livechat":3,"../checkout/validate_creditcard":5}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL2NoZWNrb3V0L2djX2FkZHJlc3MuanMiLCJEOi93d3cvcHJvbWV0aGV1cy9zcmMvZ2FlYS9qcy9jaGVja291dC9nY19wYXlfYXJlYS5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL2NoZWNrb3V0L2xpdmVjaGF0LmpzIiwiRDovd3d3L3Byb21ldGhldXMvc3JjL2dhZWEvanMvY2hlY2tvdXQvbG9hZGluZy5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL2NoZWNrb3V0L3ZhbGlkYXRlX2NyZWRpdGNhcmQuanMiLCJEOi93d3cvcHJvbWV0aGV1cy9zcmMvZ2FlYS9qcy9jb21tb24vZXZlbnRzLmpzIiwiRDovd3d3L3Byb21ldGhldXMvc3JjL2dhZWEvanMvbGliL2pxdWVyeUZvcm0uanMiLCJEOi93d3cvcHJvbWV0aGV1cy9zcmMvZ2FlYS9qcy9tb2QvYWRkcmVzcy5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL21vZC9mb3JtQ2hlY2suanMiLCJEOi93d3cvcHJvbWV0aGV1cy9zcmMvZ2FlYS9qcy9tb2QvanNUZW1wbGF0ZS5qcyIsIkQ6L3d3dy9wcm9tZXRoZXVzL3NyYy9nYWVhL2pzL21vZC9sb2FkZXIuanMiLCIuL2dhZWEvanMvZW50cnlfanMvY3JlZGl0X2NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNXJDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxucmVxdWlyZSgnLi4vbGliL2pxdWVyeUZvcm0nKTtcclxudmFyIGFkZHJlc3MgPSByZXF1aXJlKCcuLi9tb2QvYWRkcmVzcycpO1xyXG52YXIgbG9hZGluZyA9IHJlcXVpcmUoJy4vbG9hZGluZycpO1xyXG52YXIgSnNUZW1wbGF0ZSA9IHJlcXVpcmUoJy4uL21vZC9qc1RlbXBsYXRlJyk7XHJcblxyXG52YXIgYWRkcmVzc19saXN0ID0gJCgnI2JpbGxpbmdfYWRyZXNzX2RpdicpOyAvL+WcsOWdgOWIl+ihqFxyXG52YXIgYWRkcmVzc19mb3JtID0gJCgnI2FkZHJlc3NfZm9ybScpO1xyXG52YXIgYWRkcmVzc19mb3JtX3dyYXAgPSAkKCcjZGl2X2JpbGxpbmdfYWRkcmVzcycpO1xyXG52YXIgYnRuX2VkaXQgPSBhZGRyZXNzX2xpc3QuZmluZCgnLmVkaXQnKTtcclxuXHJcbnZhciBidG5fc2FtZV9hc19zaGlwcGluZyA9ICQoXCIjc2FtZV9hc19zaGlwcGluZ1wiKTtcclxudmFyIHZhbF9zYW1lX2FzX3NoaXBwaW5nID0gJChcIiNpbnB1dF9zYW1lX2FzX3NoaXBwaW5nXCIpO1xyXG5cclxuLy/lnLDlnYDooajljZXlkoxlZGl06ZO+5o6l5YiH5o2iXHJcbmZ1bmN0aW9uIHRvZ2dsZUZvcm0oKSB7XHJcbiAgICBsb2FkaW5nLmNsb3NlKCk7XHJcbiAgICBhZGRyZXNzX2Zvcm1fd3JhcC5zbGlkZVRvZ2dsZSgnZmFzdCcpO1xyXG4gICAgYnRuX2VkaXQudG9nZ2xlKCk7XHJcbn1cclxuXHJcbi8v5L+d5a2YZGlhbG9n5Lit55qE5Zyw5Z2AXHJcbmZ1bmN0aW9uIHNhdmVBZGRyZXNzKCkge1xyXG4gICAgaWYgKCFhZGRyZXNzLmNoZWNrX2FkZHJfZm9ybShhZGRyZXNzX2Zvcm0pKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgYWRkcmVzc19mb3JtLmFqYXhTdWJtaXQoe1xyXG4gICAgICAgIFwiYmVmb3JlU3VibWl0XCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsb2FkaW5nLm9wZW4oKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3VjY2Vzc1wiOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICBsb2FkaW5nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHZhciByID0galF1ZXJ5LnBhcnNlSlNPTihodG1sKTtcclxuICAgICAgICAgICAgaWYgKHIuY29kZSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sb2NhdGlvbiA9IHIudXJsO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHIuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WIt+aWsOmhtemdoumHjeaWsOajgOafpeaYr+WQpuaUr+aMgeS/oeeUqOWNoVxyXG4gICAgICAgICAgICAgICAgc2VsZi5sb2NhdGlvbiA9ICc/b3JkZXJfc249JyArIHBhZ2VEYXRhLm9yZGVyX3NuICsgJyZjaGVja291dF9ndWVzdD0nICsgci5jaGVja291dF9ndWVzdDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHIubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBZGRyZXNzSHRtbChhZGRyZXNzKSB7XHJcbiAgICB2YXIgYWRkcmVzc19jb3B5ID0gT2JqZWN0LmFzc2lnbih7fSwgYWRkcmVzcyk7XHJcbiAgICB2YXIgYWRkcmVzc190ZW1wbGF0ZSA9IG5ldyBKc1RlbXBsYXRlKCcnXHJcbiAgICAgICsgJyAgICB7e2NvbnNpZ25lZX19ICgge3thZGRyZXNzfX0nXHJcbiAgICAgICsgJyAgICB7e3NpZ25fYnVpbGRpbmd9fSdcclxuICAgICAgKyAnICAgIHt7Y2l0eV9uYW1lfX0sJ1xyXG4gICAgICArICcgICAge3t6aXBjb2RlfX0nXHJcbiAgICAgICsgJyAgICB7e3Byb3ZpbmNlX25hbWV9fSdcclxuICAgICAgKyAnICAgIHt7Y291bnRyeV9uYW1lfX0gKSdcclxuICAgICk7XHJcbiAgICBhZGRyZXNzX2NvcHlbXCJzaWduX2J1aWxkaW5nXCJdICs9IGFkZHJlc3NfY29weVtcInNpZ25fYnVpbGRpbmdcIl0gPyBcIiBcIiA6IFwiXCI7XHJcbiAgICBhZGRyZXNzX2NvcHlbXCJjaXR5X25hbWVcIl0gPSBhZGRyZXNzX2NvcHlbXCJjaXR5X25hbWVcIl0gfHwgYWRkcmVzc19jb3B5W1wiY2l0eV90ZXh0XCJdO1xyXG4gICAgYWRkcmVzc19jb3B5W1wicHJvdmluY2VfbmFtZVwiXSA9IGFkZHJlc3NfY29weVtcInByb3ZpbmNlX25hbWVcIl0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhZGRyZXNzX2NvcHlbXCJwcm92aW5jZV9uYW1lXCJdICsgXCIsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhZGRyZXNzX2NvcHlbXCJwcm92aW5jZV90ZXh0XCJdID8gYWRkcmVzc19jb3B5W1wicHJvdmluY2VfdGV4dFwiXSArIFwiLFwiIDogXCJcIjtcclxuICAgIFxyXG4gICAgcmV0dXJuICBhZGRyZXNzX3RlbXBsYXRlLnJlbmRlcihcclxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBhZGRyZXNzX2NvcHksIHtsYW5nX2VkaXQ6IF9sYW5nLnBhZ2VfY29tbW9uX2VkaXR9KVxyXG4gICAgKTtcclxufVxyXG52YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKCQuaXNFbXB0eU9iamVjdChwYWdlRGF0YS5iaWxsaW5nX2FkZHJlc3MpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGJ0bl9zYW1lX2FzX3NoaXBwaW5nLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGJ0bl9zYW1lX2FzX3NoaXBwaW5nLmhhc0NsYXNzKFwic2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgYnRuX3NhbWVfYXNfc2hpcHBpbmcucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgdmFsX3NhbWVfYXNfc2hpcHBpbmcudmFsKFwiMFwiKTtcclxuICAgICAgICAgICAgYWRkcmVzc19saXN0LmZpbmQoXCIuYWRkcmVzcy1kZXRhaWxcIikuaHRtbChnZXRBZGRyZXNzSHRtbChwYWdlRGF0YS5iaWxsaW5nX2FkZHJlc3MpKTtcclxuICAgICAgICAgICAgYnRuX2VkaXQuc2hvdygpO1xyXG4gICAgICAgICAgICBhZGRyZXNzX2Zvcm1fd3JhcC5yZW1vdmVBdHRyKFwic3R5bGVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnRuX3NhbWVfYXNfc2hpcHBpbmcuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgdmFsX3NhbWVfYXNfc2hpcHBpbmcudmFsKFwiMVwiKTtcclxuICAgICAgICAgICAgYWRkcmVzc19saXN0LmZpbmQoXCIuYWRkcmVzcy1kZXRhaWxcIikuaHRtbChnZXRBZGRyZXNzSHRtbChwYWdlRGF0YS5zaGlwcGluZ19hZGRyZXNzKSk7XHJcbiAgICAgICAgICAgIGJ0bl9lZGl0LmhpZGUoKTtcclxuICAgICAgICAgICAgYWRkcmVzc19mb3JtX3dyYXAuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy/nu5HlrprlnLDlnYDooajljZXnm7jlhbPkuovku7bvvIzkuLvopoHmmK/liIfmjaLlm73lrrblkozooajljZXpqozor4FcclxuICAgIGFkZHJlc3MuaGFuZGxlX2FkZHJfZm9ybShhZGRyZXNzX2Zvcm0pO1xyXG5cclxuICAgIC8v57uZ5Zyw5Z2A6KGo5Y2V6LWL5YC8XHJcbiAgICBhZGRyZXNzLmluaXRfYWRkcl9mb3JtKGFkZHJlc3NfZm9ybSwgcGFnZURhdGEuYmlsbGluZ19hZGRyZXNzKTtcclxuXHJcbiAgICAvL+mhtemdouWKoOi9veWujOaIkOWQjumqjOivgWJpbGxpbmcgYWRkcmVzc+aYr+Wkn+WQiOazlVxyXG4gICAgaWYoISBhZGRyZXNzLmNoZWNrX2FkZHJfZm9ybShhZGRyZXNzX2Zvcm0pKSB7XHJcbiAgICAgICAgYnRuX2VkaXQuY2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aPkOS6pERpYWxvZ+S4reeahOWcsOWdgOihqOWNlVxyXG4gICAgYWRkcmVzc19mb3JtLnN1Ym1pdChzYXZlQWRkcmVzcyk7XHJcblxyXG4gICAgLy/nu5HlrprlnLDlnYDliJfooajnm7jlhbPkuovku7ZcclxuICAgIGFkZHJlc3NfbGlzdC5kZWxlZ2F0ZSgnLmVkaXQnLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy/kv67mlLnlnLDlnYBcclxuICAgICAgICBhZGRyZXNzLmluaXRfYWRkcl9mb3JtKGFkZHJlc3NfZm9ybSwgcGFnZURhdGEuYmlsbGluZ19hZGRyZXNzKTtcclxuICAgICAgICB0b2dnbGVGb3JtKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRyZXNzX2Zvcm0uZGVsZWdhdGUoJy5pbnB1dF9jYW5jZWwnLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdG9nZ2xlRm9ybSgpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFwiaW5pdFwiOiBpbml0XHJcbn07XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltZGhaV0V2YW5NdlkyaGxZMnR2ZFhRdloyTmZZV1JrY21WemN5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRWlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW5aaGNpQWtJRDBnS0hSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUIzYVc1a2IzZGJKeVFuWFNBNklIUjVjR1Z2WmlCbmJHOWlZV3dnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnUHlCbmJHOWlZV3hiSnlRblhTQTZJRzUxYkd3cE8xeHlYRzV5WlhGMWFYSmxLQ2N1TGk5c2FXSXZhbkYxWlhKNVJtOXliU2NwTzF4eVhHNTJZWElnWVdSa2NtVnpjeUE5SUhKbGNYVnBjbVVvSnk0dUwyMXZaQzloWkdSeVpYTnpKeWs3WEhKY2JuWmhjaUJzYjJGa2FXNW5JRDBnY21WeGRXbHlaU2duTGk5c2IyRmthVzVuSnlrN1hISmNiblpoY2lCS2MxUmxiWEJzWVhSbElEMGdjbVZ4ZFdseVpTZ25MaTR2Ylc5a0wycHpWR1Z0Y0d4aGRHVW5LVHRjY2x4dVhISmNiblpoY2lCaFpHUnlaWE56WDJ4cGMzUWdQU0FrS0NjalltbHNiR2x1WjE5aFpISmxjM05mWkdsMkp5azdJQzh2NVp5dzVaMkE1WWlYNktHb1hISmNiblpoY2lCaFpHUnlaWE56WDJadmNtMGdQU0FrS0NjallXUmtjbVZ6YzE5bWIzSnRKeWs3WEhKY2JuWmhjaUJoWkdSeVpYTnpYMlp2Y20xZmQzSmhjQ0E5SUNRb0p5TmthWFpmWW1sc2JHbHVaMTloWkdSeVpYTnpKeWs3WEhKY2JuWmhjaUJpZEc1ZlpXUnBkQ0E5SUdGa1pISmxjM05mYkdsemRDNW1hVzVrS0NjdVpXUnBkQ2NwTzF4eVhHNWNjbHh1ZG1GeUlHSjBibDl6WVcxbFgyRnpYM05vYVhCd2FXNW5JRDBnSkNoY0lpTnpZVzFsWDJGelgzTm9hWEJ3YVc1blhDSXBPMXh5WEc1MllYSWdkbUZzWDNOaGJXVmZZWE5mYzJocGNIQnBibWNnUFNBa0tGd2lJMmx1Y0hWMFgzTmhiV1ZmWVhOZmMyaHBjSEJwYm1kY0lpazdYSEpjYmx4eVhHNHZMK1djc09XZGdPaWhxT1dObGVXU2pHVmthWFRwazc3bWpxWGxpSWZtamFKY2NseHVablZ1WTNScGIyNGdkRzluWjJ4bFJtOXliU2dwSUh0Y2NseHVJQ0FnSUd4dllXUnBibWN1WTJ4dmMyVW9LVHRjY2x4dUlDQWdJR0ZrWkhKbGMzTmZabTl5YlY5M2NtRndMbk5zYVdSbFZHOW5aMnhsS0NkbVlYTjBKeWs3WEhKY2JpQWdJQ0JpZEc1ZlpXUnBkQzUwYjJkbmJHVW9LVHRjY2x4dWZWeHlYRzVjY2x4dUx5L2t2NTNsclpoa2FXRnNiMmZrdUszbm1vVGxuTERsbllCY2NseHVablZ1WTNScGIyNGdjMkYyWlVGa1pISmxjM01vS1NCN1hISmNiaUFnSUNCcFppQW9JV0ZrWkhKbGMzTXVZMmhsWTJ0ZllXUmtjbDltYjNKdEtHRmtaSEpsYzNOZlptOXliU2twSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JoWkdSeVpYTnpYMlp2Y20wdVlXcGhlRk4xWW0xcGRDaDdYSEpjYmlBZ0lDQWdJQ0FnWENKaVpXWnZjbVZUZFdKdGFYUmNJam9nWm5WdVkzUnBiMjRvS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUd4dllXUnBibWN1YjNCbGJpZ3BPMXh5WEc0Z0lDQWdJQ0FnSUgwc1hISmNiaUFnSUNBZ0lDQWdYQ0p6ZFdOalpYTnpYQ0k2SUdaMWJtTjBhVzl1SUNob2RHMXNLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR3h2WVdScGJtY3VZMnh2YzJVb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSElnUFNCcVVYVmxjbmt1Y0dGeWMyVktVMDlPS0doMGJXd3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY2k1amIyUmxJRDA5SUMweEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6Wld4bUxteHZZMkYwYVc5dUlEMGdjaTUxY213N1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2NpNWpiMlJsSUQwOUlEQXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4djVZaTM1cGF3NmFHMTZaMmk2WWVONXBhdzVxT0E1cCtsNXBpdjVaQ201cFN2NW95QjVMK2g1NVNvNVkyaFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpaV3htTG14dlkyRjBhVzl1SUQwZ0p6OXZjbVJsY2w5emJqMG5JQ3NnY0dGblpVUmhkR0V1YjNKa1pYSmZjMjRnS3lBbkptTm9aV05yYjNWMFgyZDFaWE4wUFNjZ0t5QnlMbU5vWldOcmIzVjBYMmQxWlhOME8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lXeGxjblFvY2k1dGMyY3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlNrN1hISmNiaUFnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdkbGRFRmtaSEpsYzNOSWRHMXNLR0ZrWkhKbGMzTXBJSHRjY2x4dUlDQWdJSFpoY2lCaFpHUnlaWE56WDJOdmNIa2dQU0JQWW1wbFkzUXVZWE56YVdkdUtIdDlMQ0JoWkdSeVpYTnpLVHRjY2x4dUlDQWdJSFpoY2lCaFpHUnlaWE56WDNSbGJYQnNZWFJsSUQwZ2JtVjNJRXB6VkdWdGNHeGhkR1VvSnlkY2NseHVJQ0FnSUNBZ0t5QW5JQ0FnSUh0N1kyOXVjMmxuYm1WbGZYMGdLQ0I3ZTJGa1pISmxjM045ZlNkY2NseHVJQ0FnSUNBZ0t5QW5JQ0FnSUh0N2MybG5ibDlpZFdsc1pHbHVaMzE5SjF4eVhHNGdJQ0FnSUNBcklDY2dJQ0FnZTN0amFYUjVYMjVoYldWOWZTd25YSEpjYmlBZ0lDQWdJQ3NnSnlBZ0lDQjdlM3BwY0dOdlpHVjlmU2RjY2x4dUlDQWdJQ0FnS3lBbklDQWdJSHQ3Y0hKdmRtbHVZMlZmYm1GdFpYMTlKMXh5WEc0Z0lDQWdJQ0FySUNjZ0lDQWdlM3RqYjNWdWRISjVYMjVoYldWOWZTQXBKMXh5WEc0Z0lDQWdLVHRjY2x4dUlDQWdJR0ZrWkhKbGMzTmZZMjl3ZVZ0Y0luTnBaMjVmWW5WcGJHUnBibWRjSWwwZ0t6MGdZV1JrY21WemMxOWpiM0I1VzF3aWMybG5ibDlpZFdsc1pHbHVaMXdpWFNBL0lGd2lJRndpSURvZ1hDSmNJanRjY2x4dUlDQWdJR0ZrWkhKbGMzTmZZMjl3ZVZ0Y0ltTnBkSGxmYm1GdFpWd2lYU0E5SUdGa1pISmxjM05mWTI5d2VWdGNJbU5wZEhsZmJtRnRaVndpWFNCOGZDQmhaR1J5WlhOelgyTnZjSGxiWENKamFYUjVYM1JsZUhSY0lsMDdYSEpjYmlBZ0lDQmhaR1J5WlhOelgyTnZjSGxiWENKd2NtOTJhVzVqWlY5dVlXMWxYQ0pkSUQwZ1lXUmtjbVZ6YzE5amIzQjVXMXdpY0hKdmRtbHVZMlZmYm1GdFpWd2lYU0JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0EvSUdGa1pISmxjM05mWTI5d2VWdGNJbkJ5YjNacGJtTmxYMjVoYldWY0lsMGdLeUJjSWl4Y0lpQmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQTZJR0ZrWkhKbGMzTmZZMjl3ZVZ0Y0luQnliM1pwYm1ObFgzUmxlSFJjSWwwZ1B5QmhaR1J5WlhOelgyTnZjSGxiWENKd2NtOTJhVzVqWlY5MFpYaDBYQ0pkSUNzZ1hDSXNYQ0lnT2lCY0lsd2lPMXh5WEc0Z0lDQWdYSEpjYmlBZ0lDQnlaWFIxY200Z0lHRmtaSEpsYzNOZmRHVnRjR3hoZEdVdWNtVnVaR1Z5S0Z4eVhHNGdJQ0FnSUNBZ0lFOWlhbVZqZEM1aGMzTnBaMjRvZTMwc0lHRmtaSEpsYzNOZlkyOXdlU3dnZTJ4aGJtZGZaV1JwZERvZ1gyeGhibWN1Y0dGblpWOWpiMjF0YjI1ZlpXUnBkSDBwWEhKY2JpQWdJQ0FwTzF4eVhHNTlYSEpjYm5aaGNpQnBibWwwSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdhV1lvSkM1cGMwVnRjSFI1VDJKcVpXTjBLSEJoWjJWRVlYUmhMbUpwYkd4cGJtZGZZV1JrY21WemN5a3BJSHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWW5SdVgzTmhiV1ZmWVhOZmMyaHBjSEJwYm1jdWIyNG9YQ0pqYkdsamExd2lMQ0JtZFc1amRHbHZiaWdwSUh0Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvWW5SdVgzTmhiV1ZmWVhOZmMyaHBjSEJwYm1jdWFHRnpRMnhoYzNNb1hDSnpaV3hsWTNSbFpGd2lLU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JpZEc1ZmMyRnRaVjloYzE5emFHbHdjR2x1Wnk1eVpXMXZkbVZEYkdGemN5aGNJbk5sYkdWamRHVmtYQ0lwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd4ZmMyRnRaVjloYzE5emFHbHdjR2x1Wnk1MllXd29YQ0l3WENJcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCaFpHUnlaWE56WDJ4cGMzUXVabWx1WkNoY0lpNWhaR1J5WlhOekxXUmxkR0ZwYkZ3aUtTNW9kRzFzS0dkbGRFRmtaSEpsYzNOSWRHMXNLSEJoWjJWRVlYUmhMbUpwYkd4cGJtZGZZV1JrY21WemN5a3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmlkRzVmWldScGRDNXphRzkzS0NrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdGa1pISmxjM05mWm05eWJWOTNjbUZ3TG5KbGJXOTJaVUYwZEhJb1hDSnpkSGxzWlZ3aUtUdGNjbHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmlkRzVmYzJGdFpWOWhjMTl6YUdsd2NHbHVaeTVoWkdSRGJHRnpjeWhjSW5ObGJHVmpkR1ZrWENJcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeGZjMkZ0WlY5aGMxOXphR2x3Y0dsdVp5NTJZV3dvWENJeFhDSXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmhaR1J5WlhOelgyeHBjM1F1Wm1sdVpDaGNJaTVoWkdSeVpYTnpMV1JsZEdGcGJGd2lLUzVvZEcxc0tHZGxkRUZrWkhKbGMzTklkRzFzS0hCaFoyVkVZWFJoTG5Ob2FYQndhVzVuWDJGa1pISmxjM01wS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWW5SdVgyVmthWFF1YUdsa1pTZ3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmhaR1J5WlhOelgyWnZjbTFmZDNKaGNDNW9hV1JsS0NrN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmU2s3WEhKY2JpQWdJQ0F2TCtlN2tlV3VtdVdjc09XZGdPaWhxT1dObGVlYnVPV0ZzK1M2aStTN3R1KzhqT1M0dStpbWdlYVlyK1dJaCthTm91V2J2ZVd1dHVXU2pPaWhxT1dObGVtcWpPaXZnVnh5WEc0Z0lDQWdZV1JrY21WemN5NW9ZVzVrYkdWZllXUmtjbDltYjNKdEtHRmtaSEpsYzNOZlptOXliU2s3WEhKY2JseHlYRzRnSUNBZ0x5L251NW5sbkxEbG5ZRG9vYWpsalpYb3RZdmxnTHhjY2x4dUlDQWdJR0ZrWkhKbGMzTXVhVzVwZEY5aFpHUnlYMlp2Y20wb1lXUmtjbVZ6YzE5bWIzSnRMQ0J3WVdkbFJHRjBZUzVpYVd4c2FXNW5YMkZrWkhKbGMzTXBPMXh5WEc1Y2NseHVJQ0FnSUM4djZhRzE2WjJpNVlxZzZMMjk1YTZNNW9pUTVaQ082YXFNNksrQlltbHNiR2x1WnlCaFpHUnlaWE56NXBpdjVhU2Y1WkNJNXJPVlhISmNiaUFnSUNCcFppZ2hJR0ZrWkhKbGMzTXVZMmhsWTJ0ZllXUmtjbDltYjNKdEtHRmtaSEpsYzNOZlptOXliU2twSUh0Y2NseHVJQ0FnSUNBZ0lDQmlkRzVmWldScGRDNWpiR2xqYXlncE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQzh2NW8rUTVMcWtSR2xoYkc5bjVMaXQ1NXFFNVp5dzVaMkE2S0dvNVkyVlhISmNiaUFnSUNCaFpHUnlaWE56WDJadmNtMHVjM1ZpYldsMEtITmhkbVZCWkdSeVpYTnpLVHRjY2x4dVhISmNiaUFnSUNBdkwrZTdrZVd1bXVXY3NPV2RnT1dJbCtpaHFPZWJ1T1dGcytTNmkrUzd0bHh5WEc0Z0lDQWdZV1JrY21WemMxOXNhWE4wTG1SbGJHVm5ZWFJsS0NjdVpXUnBkQ2NzSUNkamJHbGpheWNzSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDQWdJQ0F2TCtTL3J1YVV1ZVdjc09XZGdGeHlYRzRnSUNBZ0lDQWdJR0ZrWkhKbGMzTXVhVzVwZEY5aFpHUnlYMlp2Y20wb1lXUmtjbVZ6YzE5bWIzSnRMQ0J3WVdkbFJHRjBZUzVpYVd4c2FXNW5YMkZrWkhKbGMzTXBPMXh5WEc0Z0lDQWdJQ0FnSUhSdloyZHNaVVp2Y20wb0tUdGNjbHh1SUNBZ0lIMHBPMXh5WEc1Y2NseHVJQ0FnSUdGa1pISmxjM05mWm05eWJTNWtaV3hsWjJGMFpTZ25MbWx1Y0hWMFgyTmhibU5sYkNjc0lDZGpiR2xqYXljc0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCMGIyZG5iR1ZHYjNKdEtDazdYSEpjYmlBZ0lDQjlLVHRjY2x4dWZUdGNjbHh1WEhKY2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2UxeHlYRzRnSUNBZ1hDSnBibWwwWENJNklHbHVhWFJjY2x4dWZUc2lYWDA9IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcbnZhciBhZGRyZXNzID0gcmVxdWlyZSgnLi4vbW9kL2FkZHJlc3MnKTtcclxuXHJcbnZhciBhZGRyZXNzX2xpc3QgPSAkKCcjYmlsbGluZ19hZHJlc3NfZGl2Jyk7XHJcbnZhciBhZGRyZXNzX2Zvcm0gPSAkKCcjYWRkcmVzc19mb3JtJyk7XHJcbnZhciBhZGRyZXNzX2Zvcm1fd3JhcCA9ICQoJyNkaXZfYmlsbGluZ19hZGRyZXNzJyk7XHJcbnZhciBidG5fZWRpdCA9IGFkZHJlc3NfbGlzdC5maW5kKCcuZWRpdCcpO1xyXG5cclxudmFyIHBheV9pZnJhbWUgPSAkKCcjaWZyYW1lX2VtdWxhdG9yJyk7XHJcbnZhciBwYXlfbWFzayA9ICQoJy5tYXNrZWQnKTtcclxudmFyIHBheV9tYXNrX3RhYmxlID0gJCgnLm1hc2tfdGFibGUnKTtcclxuXHJcbnZhciBib2xldG9fZmFpbF9pbmZvID0gJyc7XHJcbmlmICh3ZWJEYXRhLmxhbmcgPT0gJ2VuJykge1xyXG4gICAgYm9sZXRvX2ZhaWxfaW5mbyArPSBfbGFuZy5wYWdlX3BheV9mYWlsX3RpcF9wcmUgKyAnPHNwYW4gaWQ9XCJwYXltZW50LWxpdmVjaGF0XCI+PGEgY2xhc3M9XCJzdGFydC1ub3dcIiBocmVmPVwiamF2YXNjcmlwdDo7XCI+JztcclxuICAgIGJvbGV0b19mYWlsX2luZm8gKz0gX2xhbmcucGFnZV9jb21tb25fbGl2ZV9jaGF0O1xyXG4gICAgYm9sZXRvX2ZhaWxfaW5mbyArPSAnPC9hPjwvc3Bhbj4nO1xyXG59IGVsc2Uge1xyXG4gICAgYm9sZXRvX2ZhaWxfaW5mbyArPSBfbGFuZy5wYWdlX3BheV9mYWlsX3RpcF9wcmU7XHJcbiAgICBib2xldG9fZmFpbF9pbmZvICs9ICc8YSBjbGFzcz1cInN0YXJ0LW5vd1wiIHJlbD1cIm5vZm9sbG93XCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIicgKyB3ZWJEYXRhLldFQl9ST09UICsgJ2Fib3V0L2VtYWlsLnBocD90eXBlPXByZV9zYWxlc1wiPic7XHJcbiAgICBib2xldG9fZmFpbF9pbmZvICs9IF9sYW5nLnBhZ2VfcGF5bWVudF9jb250YWN0X3VzO1xyXG4gICAgYm9sZXRvX2ZhaWxfaW5mbyArPSAnPC9hPic7XHJcbn1cclxudmFyIGJpbmRDbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIiNwYXltZW50LWxpdmVjaGF0IC5zdGFydC1ub3dcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIExDX0FQSSA9IHdpbmRvdy5MQ19BUEkgfHwge307XHJcbiAgICAgICAgTENfQVBJLm9wZW5fY2hhdF93aW5kb3coKTtcclxuICAgICAgICB3aW5kb3cuTENfQVBJID0gTENfQVBJO1xyXG4gICAgfSk7XHJcbn07XHJcbmJpbmRDbGljaygpO1xyXG52YXIgaW5pdF93aXRoX3RhYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gZG9TdGgoKSB7XHJcbiAgICAgICAgcGF5X21hc2tfdGFibGUuaGlkZSgpO1xyXG4gICAgICAgIHBheV9tYXNrLmhpZGUoKTtcclxuICAgICAgICBwYXlfaWZyYW1lLnNob3coKTtcclxuICAgIH1cclxuICAgICQoJ2lucHV0W25hbWU9XCJiYW5rXCJdJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYoISBhZGRyZXNzLmNoZWNrX2FkZHJfZm9ybShhZGRyZXNzX2Zvcm0pKSB7XHJcbiAgICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJiYW5rXCJdOmNoZWNrZWQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoYWRkcmVzc19mb3JtX3dyYXAuaXMoJzpoaWRkZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgYnRuX2VkaXQudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhZGRyZXNzX2Zvcm1fd3JhcC5pcygnOnZpc2libGUnKSkge1xyXG4gICAgICAgICAgICBhbGVydChfbGFuZy5wYWdlX2JpbGxpbmdfc2F2ZV9maXJzdCk7XHJcbiAgICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJiYW5rXCJdOmNoZWNrZWQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcjZmFpbF9pbmZvX2RpdicpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgcGF5X2lmcmFtZS5oaWRlKCk7XHJcbiAgICAgICAgcGF5X21hc2suc2hvdygpO1xyXG5cclxuICAgICAgICAvLzwhLS17KiDmqKHmi58gaWZyYW1lIOWKoOi9veOAgiDkuIDml6Ygb25sb2FkIOWujOavleWwseaJp+ihjOafkOS6m+aTjeS9nCAqfS0tPlxyXG4gICAgICAgIC8vY3JlZGl0SWZyYW1lXHJcbiAgICAgICAgdmFyIHBhcmFtID0gJ29yZGVyX3NuPScgKyBwYWdlRGF0YS5vcmRlcl9zbiArICcmYmFuaz0nICsgJCgnaW5wdXRbbmFtZT1cImJhbmtcIl06Y2hlY2tlZCcpLnZhbCgpICsgJyZ0YXhfY29kZT0nICsgJCgnI190YXhfY29kZV92YWx1ZScpLnZhbCgpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICd0eXBlJzogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAndXJsJzogd2ViRGF0YS5XRUJfUk9PVCArICdhamF4LnBocD9hY3Q9Z2V0X2djX3BheV91cmwnLFxyXG4gICAgICAgICAgICAnZGF0YSc6IHBhcmFtLFxyXG4gICAgICAgICAgICAnY2FjaGUnOiB0cnVlLFxyXG4gICAgICAgICAgICAnZGF0YVR5cGUnOiAnanNvbicsXHJcbiAgICAgICAgICAgICdzdWNjZXNzJzogZnVuY3Rpb24ocikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHIuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIuc2V0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbm9fY3JlZGl0X2NhcmRfY29udGludWUnKS5hdHRyKCdocmVmJywgci51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjaWZyYW1lX2VtdWxhdG9yLCAjaWZyYW1lX2VtdWxhdG9yIGlmcmFtZScpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9TdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoci50YXJnZXQgJiYgci50YXJnZXQgPT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wLmxvY2F0aW9uLmhyZWYgPSByLnVybDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlZGl0SWZyYW1lJykuc3JjID0gci51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvU3RoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoci50YXJnZXQgJiYgci50YXJnZXQgPT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wLmxvY2F0aW9uLmhyZWYgPSByLnVybDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2ZhaWxfaW5mb19kaXYnKS5zaG93KCkuaHRtbChib2xldG9fZmFpbF9pbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICBiaW5kQ2xpY2soKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5X21hc2tfdGFibGUuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBheV9pZnJhbWUuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBheV9tYXNrLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiYmFua1wiXTpjaGVja2VkJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG52YXIgaW5pdF93aXRob3V0X3RhYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gZG9TdGgoKSB7XHJcbiAgICAgICAgcGF5X21hc2suaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgJCgnaW5wdXRbbmFtZT1cImJhbmtcIl0nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBpZighIGFkZHJlc3MuY2hlY2tfYWRkcl9mb3JtKGFkZHJlc3NfZm9ybSkpIHtcclxuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cImJhbmtcIl06Y2hlY2tlZCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChhZGRyZXNzX2Zvcm1fd3JhcC5pcygnOmhpZGRlbicpKSB7XHJcbiAgICAgICAgICAgICAgICBidG5fZWRpdC50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFkZHJlc3NfZm9ybV93cmFwLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KF9sYW5nLnBhZ2VfYmlsbGluZ19zYXZlX2ZpcnN0KTtcclxuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cImJhbmtcIl06Y2hlY2tlZCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJyNmYWlsX2luZm9fZGl2JykuaGlkZSgpO1xyXG4gICAgICAgIHBheV9tYXNrLnNob3coKTtcclxuXHJcbiAgICAgICAgLy88IS0teyog5qih5oufIGlmcmFtZSDliqDovb3jgIIg5LiA5pemIG9ubG9hZCDlrozmr5XlsLHmiafooYzmn5Dkupvmk43kvZwgKn0tLT5cclxuICAgICAgICAvL2NyZWRpdElmcmFtZVxyXG4gICAgICAgIHZhciBwYXJhbSA9ICdvcmRlcl9zbj0nICsgcGFnZURhdGEub3JkZXJfc24gKyAnJmJhbms9JyArICQoJ2lucHV0W25hbWU9XCJiYW5rXCJdOmNoZWNrZWQnKS52YWwoKSArICcmdGF4X2NvZGU9JyArICQoJyNfdGF4X2NvZGVfdmFsdWUnKS52YWwoKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAndHlwZSc6ICdwb3N0JyxcclxuICAgICAgICAgICAgJ3VybCc6IHdlYkRhdGEuV0VCX1JPT1QgKyAnYWpheC5waHA/YWN0PWdldF9nY19wYXlfdXJsJyxcclxuICAgICAgICAgICAgJ2RhdGEnOiBwYXJhbSxcclxuICAgICAgICAgICAgJ2NhY2hlJzogdHJ1ZSxcclxuICAgICAgICAgICAgJ2RhdGFUeXBlJzogJ2pzb24nLFxyXG4gICAgICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uKHIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyLnRhcmdldCAmJiByLnRhcmdldCA9PSAndG9wJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcC5sb2NhdGlvbi5ocmVmID0gci51cmw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoci5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkb1N0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2ZhaWxfaW5mb19kaXYnKS5zaG93KCkuaHRtbChib2xldG9fZmFpbF9pbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICBiaW5kQ2xpY2soKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cImJhbmtcIl06Y2hlY2tlZCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9TdGgoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAkKCdpbnB1dFtuYW1lPVwiYXN0cm9fYmFua1wiXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKCEgYWRkcmVzcy5jaGVja19hZGRyX2Zvcm0oYWRkcmVzc19mb3JtKSkge1xyXG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiYXN0cm9fYmFua1wiXTpjaGVja2VkJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKGFkZHJlc3NfZm9ybV93cmFwLmlzKCc6aGlkZGVuJykpIHtcclxuICAgICAgICAgICAgICAgIGJ0bl9lZGl0LnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWRkcmVzc19mb3JtX3dyYXAuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgYWxlcnQoX2xhbmcucGFnZV9iaWxsaW5nX3NhdmVfZmlyc3QpO1xyXG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiYXN0cm9fYmFua1wiXTpjaGVja2VkJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnI2ZhaWxfaW5mb19kaXYnKS5oaWRlKCk7XHJcbiAgICAgICAgcGF5X21hc2suc2hvdygpO1xyXG5cclxuICAgICAgICAvLzwhLS17KiDmqKHmi58gaWZyYW1lIOWKoOi9veOAgiDkuIDml6Ygb25sb2FkIOWujOavleWwseaJp+ihjOafkOS6m+aTjeS9nCAqfS0tPlxyXG4gICAgICAgIC8vY3JlZGl0SWZyYW1lXHJcbiAgICAgICAgdmFyIHBhcmFtID0gJ29yZGVyX3NuPScgKyBwYWdlRGF0YS5vcmRlcl9zbiArICcmYXN0cm9fYmFuaz0nICsgJCgnaW5wdXRbbmFtZT1cImFzdHJvX2JhbmtcIl06Y2hlY2tlZCcpLnZhbCgpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICd0eXBlJzogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAndXJsJzogd2ViRGF0YS5XRUJfUk9PVCArICdhamF4LnBocD9hY3Q9Z2V0X2FzdHJvcGF5X3VybCcsXHJcbiAgICAgICAgICAgICdkYXRhJzogcGFyYW0sXHJcbiAgICAgICAgICAgICdjYWNoZSc6IHRydWUsXHJcbiAgICAgICAgICAgICdkYXRhVHlwZSc6ICdqc29uJyxcclxuICAgICAgICAgICAgJ3N1Y2Nlc3MnOiBmdW5jdGlvbihyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoci5jb2RlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjYXN0cm9fY3JlZGl0X2NhcmRfY29udGludWUnKS5hdHRyKCdocmVmJywgci5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2ZhaWxfaW5mb19kaXYnKS5zaG93KCkuaHRtbChyLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbmRDbGljaygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiYXN0cm9fYmFua1wiXTpjaGVja2VkJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjYXN0cm9fY3JlZGl0X2NhcmRfY29udGludWUnKS5yZW1vdmVBdHRyKCdocmVmJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkb1N0aCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbnZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYocGFnZURhdGEuaXNfZGlzcGxheV90YWJsZSkge1xyXG4gICAgICAgIGluaXRfd2l0aF90YWJsZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpbml0X3dpdGhvdXRfdGFibGUoKTtcclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgXCJpbml0XCI6IGluaXRcclxufTtcclxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltZGhaV0V2YW5NdlkyaGxZMnR2ZFhRdloyTmZjR0Y1WDJGeVpXRXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJJaXdpWm1sc1pTSTZJbWRsYm1WeVlYUmxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKMllYSWdKQ0E5SUNoMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJRDhnZDJsdVpHOTNXeWNrSjEwZ09pQjBlWEJsYjJZZ1oyeHZZbUZzSUNFOVBTQmNJblZ1WkdWbWFXNWxaRndpSUQ4Z1oyeHZZbUZzV3lja0oxMGdPaUJ1ZFd4c0tUdGNjbHh1ZG1GeUlHRmtaSEpsYzNNZ1BTQnlaWEYxYVhKbEtDY3VMaTl0YjJRdllXUmtjbVZ6Y3ljcE8xeHlYRzVjY2x4dWRtRnlJR0ZrWkhKbGMzTmZiR2x6ZENBOUlDUW9KeU5pYVd4c2FXNW5YMkZrY21WemMxOWthWFluS1R0Y2NseHVkbUZ5SUdGa1pISmxjM05mWm05eWJTQTlJQ1FvSnlOaFpHUnlaWE56WDJadmNtMG5LVHRjY2x4dWRtRnlJR0ZrWkhKbGMzTmZabTl5YlY5M2NtRndJRDBnSkNnbkkyUnBkbDlpYVd4c2FXNW5YMkZrWkhKbGMzTW5LVHRjY2x4dWRtRnlJR0owYmw5bFpHbDBJRDBnWVdSa2NtVnpjMTlzYVhOMExtWnBibVFvSnk1bFpHbDBKeWs3WEhKY2JseHlYRzUyWVhJZ2NHRjVYMmxtY21GdFpTQTlJQ1FvSnlOcFpuSmhiV1ZmWlcxMWJHRjBiM0luS1R0Y2NseHVkbUZ5SUhCaGVWOXRZWE5ySUQwZ0pDZ25MbTFoYzJ0bFpDY3BPMXh5WEc1MllYSWdjR0Y1WDIxaGMydGZkR0ZpYkdVZ1BTQWtLQ2N1YldGemExOTBZV0pzWlNjcE8xeHlYRzVjY2x4dWRtRnlJR0p2YkdWMGIxOW1ZV2xzWDJsdVptOGdQU0FuSnp0Y2NseHVhV1lnS0hkbFlrUmhkR0V1YkdGdVp5QTlQU0FuWlc0bktTQjdYSEpjYmlBZ0lDQmliMnhsZEc5ZlptRnBiRjlwYm1adklDczlJRjlzWVc1bkxuQmhaMlZmY0dGNVgyWmhhV3hmZEdsd1gzQnlaU0FySUNjOGMzQmhiaUJwWkQxY0luQmhlVzFsYm5RdGJHbDJaV05vWVhSY0lqNDhZU0JqYkdGemN6MWNJbk4wWVhKMExXNXZkMXdpSUdoeVpXWTlYQ0pxWVhaaGMyTnlhWEIwT2p0Y0lqNG5PMXh5WEc0Z0lDQWdZbTlzWlhSdlgyWmhhV3hmYVc1bWJ5QXJQU0JmYkdGdVp5NXdZV2RsWDJOdmJXMXZibDlzYVhabFgyTm9ZWFE3WEhKY2JpQWdJQ0JpYjJ4bGRHOWZabUZwYkY5cGJtWnZJQ3M5SUNjOEwyRStQQzl6Y0dGdVBpYzdYSEpjYm4wZ1pXeHpaU0I3WEhKY2JpQWdJQ0JpYjJ4bGRHOWZabUZwYkY5cGJtWnZJQ3M5SUY5c1lXNW5MbkJoWjJWZmNHRjVYMlpoYVd4ZmRHbHdYM0J5WlR0Y2NseHVJQ0FnSUdKdmJHVjBiMTltWVdsc1gybHVabThnS3owZ0p6eGhJR05zWVhOelBWd2ljM1JoY25RdGJtOTNYQ0lnY21Wc1BWd2libTltYjJ4c2IzZGNJaUIwWVhKblpYUTlYQ0pmWW14aGJtdGNJaUJvY21WbVBWd2lKeUFySUhkbFlrUmhkR0V1VjBWQ1gxSlBUMVFnS3lBbllXSnZkWFF2WlcxaGFXd3VjR2h3UDNSNWNHVTljSEpsWDNOaGJHVnpYQ0krSnp0Y2NseHVJQ0FnSUdKdmJHVjBiMTltWVdsc1gybHVabThnS3owZ1gyeGhibWN1Y0dGblpWOXdZWGx0Wlc1MFgyTnZiblJoWTNSZmRYTTdYSEpjYmlBZ0lDQmliMnhsZEc5ZlptRnBiRjlwYm1adklDczlJQ2M4TDJFK0p6dGNjbHh1ZlZ4eVhHNTJZWElnWW1sdVpFTnNhV05ySUQwZ1puVnVZM1JwYjI0b0tTQjdYSEpjYmlBZ0lDQWtLRndpSTNCaGVXMWxiblF0YkdsMlpXTm9ZWFFnTG5OMFlYSjBMVzV2ZDF3aUtTNXZiaWduWTJ4cFkyc25MQ0JtZFc1amRHbHZiaWdwSUh0Y2NseHVJQ0FnSUNBZ0lDQjJZWElnVEVOZlFWQkpJRDBnZDJsdVpHOTNMa3hEWDBGUVNTQjhmQ0I3ZlR0Y2NseHVJQ0FnSUNBZ0lDQk1RMTlCVUVrdWIzQmxibDlqYUdGMFgzZHBibVJ2ZHlncE8xeHlYRzRnSUNBZ0lDQWdJSGRwYm1SdmR5NU1RMTlCVUVrZ1BTQk1RMTlCVUVrN1hISmNiaUFnSUNCOUtUdGNjbHh1ZlR0Y2NseHVZbWx1WkVOc2FXTnJLQ2s3WEhKY2JuWmhjaUJwYm1sMFgzZHBkR2hmZEdGaWJHVWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNCbWRXNWpkR2x2YmlCa2IxTjBhQ2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQndZWGxmYldGemExOTBZV0pzWlM1b2FXUmxLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2NHRjVYMjFoYzJzdWFHbGtaU2dwTzF4eVhHNGdJQ0FnSUNBZ0lIQmhlVjlwWm5KaGJXVXVjMmh2ZHlncE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ0pDZ25hVzV3ZFhSYmJtRnRaVDFjSW1KaGJtdGNJbDBuS1M1amJHbGpheWhtZFc1amRHbHZiaWdwSUh0Y2NseHVJQ0FnSUNBZ0lDQnBaaWdoSUdGa1pISmxjM011WTJobFkydGZZV1JrY2w5bWIzSnRLR0ZrWkhKbGMzTmZabTl5YlNrcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0pDZ25hVzV3ZFhSYmJtRnRaVDFjSW1KaGJtdGNJbDA2WTJobFkydGxaQ2NwTG5CeWIzQW9KMk5vWldOclpXUW5MQ0JtWVd4elpTazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hoWkdSeVpYTnpYMlp2Y20xZmQzSmhjQzVwY3lnbk9taHBaR1JsYmljcEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpZEc1ZlpXUnBkQzUwY21sbloyVnlLQ2RqYkdsamF5Y3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdhV1lnS0dGa1pISmxjM05mWm05eWJWOTNjbUZ3TG1sektDYzZkbWx6YVdKc1pTY3BLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR0ZzWlhKMEtGOXNZVzVuTG5CaFoyVmZZbWxzYkdsdVoxOXpZWFpsWDJacGNuTjBLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdKQ2duYVc1d2RYUmJibUZ0WlQxY0ltSmhibXRjSWwwNlkyaGxZMnRsWkNjcExuQnliM0FvSjJOb1pXTnJaV1FuTENCbVlXeHpaU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDUW9KeU5tWVdsc1gybHVabTlmWkdsMkp5a3VhR2xrWlNncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCd1lYbGZhV1p5WVcxbExtaHBaR1VvS1R0Y2NseHVJQ0FnSUNBZ0lDQndZWGxmYldGemF5NXphRzkzS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUM4dlBDRXRMWHNxSU9hb29lYUxueUJwWm5KaGJXVWc1WXFnNkwyOTQ0Q0NJT1M0Z09hWHBpQnZibXh2WVdRZzVhNk01cStWNWJDeDVvbW42S0dNNXArUTVMcWI1cE9ONUwyY0lDcDlMUzArWEhKY2JpQWdJQ0FnSUNBZ0x5OWpjbVZrYVhSSlpuSmhiV1ZjY2x4dUlDQWdJQ0FnSUNCMllYSWdjR0Z5WVcwZ1BTQW5iM0prWlhKZmMyNDlKeUFySUhCaFoyVkVZWFJoTG05eVpHVnlYM051SUNzZ0p5WmlZVzVyUFNjZ0t5QWtLQ2RwYm5CMWRGdHVZVzFsUFZ3aVltRnVhMXdpWFRwamFHVmphMlZrSnlrdWRtRnNLQ2tnS3lBbkpuUmhlRjlqYjJSbFBTY2dLeUFrS0NjalgzUmhlRjlqYjJSbFgzWmhiSFZsSnlrdWRtRnNLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0pDNWhhbUY0S0h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSjNSNWNHVW5PaUFuY0c5emRDY3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDZDFjbXduT2lCM1pXSkVZWFJoTGxkRlFsOVNUMDlVSUNzZ0oyRnFZWGd1Y0dod1AyRmpkRDFuWlhSZloyTmZjR0Y1WDNWeWJDY3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDZGtZWFJoSnpvZ2NHRnlZVzBzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ2RqWVdOb1pTYzZJSFJ5ZFdVc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNka1lYUmhWSGx3WlNjNklDZHFjMjl1Snl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSjNOMVkyTmxjM01uT2lCbWRXNWpkR2x2YmloeUtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2NpNWpiMlJsSUQwOUlEQXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY2k1elpYUmhLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNRb0p5TnViMTlqY21Wa2FYUmZZMkZ5WkY5amIyNTBhVzUxWlNjcExtRjBkSElvSjJoeVpXWW5MQ0J5TG5WeWJDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ1FvSnlOcFpuSmhiV1ZmWlcxMWJHRjBiM0lzSUNOcFpuSmhiV1ZmWlcxMWJHRjBiM0lnYVdaeVlXMWxKeWt1YUdsa1pTZ3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrYjFOMGFDZ3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaHlMblJoY21kbGRDQW1KaUJ5TG5SaGNtZGxkQ0E5UFNBbmRHOXdKeWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGIzQXViRzlqWVhScGIyNHVhSEpsWmlBOUlISXVkWEpzTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZGpjbVZrYVhSSlpuSmhiV1VuS1M1emNtTWdQU0J5TG5WeWJEdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaRzlUZEdnb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHlMblJoY21kbGRDQW1KaUJ5TG5SaGNtZGxkQ0E5UFNBbmRHOXdKeWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGIzQXViRzlqWVhScGIyNHVhSEpsWmlBOUlISXVkWEpzTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWtLQ2NqWm1GcGJGOXBibVp2WDJScGRpY3BMbk5vYjNjb0tTNW9kRzFzS0dKdmJHVjBiMTltWVdsc1gybHVabThwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0pwYm1SRGJHbGpheWdwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd1lYbGZiV0Z6YTE5MFlXSnNaUzV6YUc5M0tDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NHRjVYMmxtY21GdFpTNW9hV1JsS0NrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0dGNVgyMWhjMnN1YUdsa1pTZ3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDUW9KMmx1Y0hWMFcyNWhiV1U5WENKaVlXNXJYQ0pkT21Ob1pXTnJaV1FuS1M1d2NtOXdLQ2RqYUdWamEyVmtKeXdnWm1Gc2MyVXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQjlLVHRjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJwYm1sMFgzZHBkR2h2ZFhSZmRHRmliR1VnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQm1kVzVqZEdsdmJpQmtiMU4wYUNncElIdGNjbHh1SUNBZ0lDQWdJQ0J3WVhsZmJXRnpheTVvYVdSbEtDazdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQWtLQ2RwYm5CMWRGdHVZVzFsUFZ3aVltRnVhMXdpWFNjcExtTnNhV05yS0daMWJtTjBhVzl1S0NrZ2UxeHlYRzRnSUNBZ0lDQWdJR2xtS0NFZ1lXUmtjbVZ6Y3k1amFHVmphMTloWkdSeVgyWnZjbTBvWVdSa2NtVnpjMTltYjNKdEtTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWtLQ2RwYm5CMWRGdHVZVzFsUFZ3aVltRnVhMXdpWFRwamFHVmphMlZrSnlrdWNISnZjQ2duWTJobFkydGxaQ2NzSUdaaGJITmxLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dGa1pISmxjM05mWm05eWJWOTNjbUZ3TG1sektDYzZhR2xrWkdWdUp5a3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKMGJsOWxaR2wwTG5SeWFXZG5aWElvSjJOc2FXTnJKeWs3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0JwWmlBb1lXUmtjbVZ6YzE5bWIzSnRYM2R5WVhBdWFYTW9KenAyYVhOcFlteGxKeWtwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWVd4bGNuUW9YMnhoYm1jdWNHRm5aVjlpYVd4c2FXNW5YM05oZG1WZlptbHljM1FwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FrS0NkcGJuQjFkRnR1WVcxbFBWd2lZbUZ1YTF3aVhUcGphR1ZqYTJWa0p5a3VjSEp2Y0NnblkyaGxZMnRsWkNjc0lHWmhiSE5sS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNBZ0lDQWdKQ2duSTJaaGFXeGZhVzVtYjE5a2FYWW5LUzVvYVdSbEtDazdYSEpjYmlBZ0lDQWdJQ0FnY0dGNVgyMWhjMnN1YzJodmR5Z3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQXZMendoTFMxN0tpRG1xS0htaTU4Z2FXWnlZVzFsSU9XS29PaTl2ZU9BZ2lEa3VJRG1sNllnYjI1c2IyRmtJT1d1ak9hdmxlV3dzZWFKcCtpaGpPYWZrT1M2bSthVGplUzluQ0FxZlMwdFBseHlYRzRnSUNBZ0lDQWdJQzh2WTNKbFpHbDBTV1p5WVcxbFhISmNiaUFnSUNBZ0lDQWdkbUZ5SUhCaGNtRnRJRDBnSjI5eVpHVnlYM051UFNjZ0t5QndZV2RsUkdGMFlTNXZjbVJsY2w5emJpQXJJQ2NtWW1GdWF6MG5JQ3NnSkNnbmFXNXdkWFJiYm1GdFpUMWNJbUpoYm10Y0lsMDZZMmhsWTJ0bFpDY3BMblpoYkNncElDc2dKeVowWVhoZlkyOWtaVDBuSUNzZ0pDZ25JMTkwWVhoZlkyOWtaVjkyWVd4MVpTY3BMblpoYkNncE8xeHlYRzRnSUNBZ0lDQWdJQ1F1WVdwaGVDaDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDZDBlWEJsSnpvZ0ozQnZjM1FuTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FuZFhKc0p6b2dkMlZpUkdGMFlTNVhSVUpmVWs5UFZDQXJJQ2RoYW1GNExuQm9jRDloWTNROVoyVjBYMmRqWDNCaGVWOTFjbXduTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FuWkdGMFlTYzZJSEJoY21GdExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBblkyRmphR1VuT2lCMGNuVmxMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQW5aR0YwWVZSNWNHVW5PaUFuYW5OdmJpY3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDZHpkV05qWlhOekp6b2dablZ1WTNScGIyNG9jaWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEl1ZEdGeVoyVjBJQ1ltSUhJdWRHRnlaMlYwSUQwOUlDZDBiM0FuS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEc5d0xteHZZMkYwYVc5dUxtaHlaV1lnUFNCeUxuVnliRHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h5TG1OdlpHVWdQVDBnTUNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSdlUzUm9LQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdU8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBa0tDY2pabUZwYkY5cGJtWnZYMlJwZGljcExuTm9iM2NvS1M1b2RHMXNLR0p2YkdWMGIxOW1ZV2xzWDJsdVptOHBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnBibVJEYkdsamF5Z3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FrS0NkcGJuQjFkRnR1WVcxbFBWd2lZbUZ1YTF3aVhUcGphR1ZqYTJWa0p5a3VjSEp2Y0NnblkyaGxZMnRsWkNjc0lHWmhiSE5sS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrYjFOMGFDZ3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQjlLVHRjY2x4dUlDQWdJQ1FvSjJsdWNIVjBXMjVoYldVOVhDSmhjM1J5YjE5aVlXNXJYQ0pkSnlrdVkyeHBZMnNvWm5WdVkzUnBiMjRvS1NCN1hISmNiaUFnSUNBZ0lDQWdhV1lvSVNCaFpHUnlaWE56TG1Ob1pXTnJYMkZrWkhKZlptOXliU2hoWkdSeVpYTnpYMlp2Y20wcEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDUW9KMmx1Y0hWMFcyNWhiV1U5WENKaGMzUnliMTlpWVc1clhDSmRPbU5vWldOclpXUW5LUzV3Y205d0tDZGphR1ZqYTJWa0p5d2dabUZzYzJVcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZV1JrY21WemMxOW1iM0p0WDNkeVlYQXVhWE1vSnpwb2FXUmtaVzRuS1NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZblJ1WDJWa2FYUXVkSEpwWjJkbGNpZ25ZMnhwWTJzbktUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2hoWkdSeVpYTnpYMlp2Y20xZmQzSmhjQzVwY3lnbk9uWnBjMmxpYkdVbktTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmhiR1Z5ZENoZmJHRnVaeTV3WVdkbFgySnBiR3hwYm1kZmMyRjJaVjltYVhKemRDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDUW9KMmx1Y0hWMFcyNWhiV1U5WENKaGMzUnliMTlpWVc1clhDSmRPbU5vWldOclpXUW5LUzV3Y205d0tDZGphR1ZqYTJWa0p5d2dabUZzYzJVcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FrS0NjalptRnBiRjlwYm1adlgyUnBkaWNwTG1ocFpHVW9LVHRjY2x4dUlDQWdJQ0FnSUNCd1lYbGZiV0Z6YXk1emFHOTNLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQzh2UENFdExYc3FJT2Fvb2VhTG55QnBabkpoYldVZzVZcWc2TDI5NDRDQ0lPUzRnT2FYcGlCdmJteHZZV1FnNWE2TTVxK1Y1YkN4NW9tbjZLR001cCtRNUxxYjVwT041TDJjSUNwOUxTMCtYSEpjYmlBZ0lDQWdJQ0FnTHk5amNtVmthWFJKWm5KaGJXVmNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ2NHRnlZVzBnUFNBbmIzSmtaWEpmYzI0OUp5QXJJSEJoWjJWRVlYUmhMbTl5WkdWeVgzTnVJQ3NnSnlaaGMzUnliMTlpWVc1clBTY2dLeUFrS0NkcGJuQjFkRnR1WVcxbFBWd2lZWE4wY205ZlltRnVhMXdpWFRwamFHVmphMlZrSnlrdWRtRnNLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0pDNWhhbUY0S0h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSjNSNWNHVW5PaUFuY0c5emRDY3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDZDFjbXduT2lCM1pXSkVZWFJoTGxkRlFsOVNUMDlVSUNzZ0oyRnFZWGd1Y0dod1AyRmpkRDFuWlhSZllYTjBjbTl3WVhsZmRYSnNKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdKMlJoZEdFbk9pQndZWEpoYlN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSjJOaFkyaGxKem9nZEhKMVpTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0oyUmhkR0ZVZVhCbEp6b2dKMnB6YjI0bkxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBbmMzVmpZMlZ6Y3ljNklHWjFibU4wYVc5dUtISXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHlMbU52WkdVZ1BUMGdNU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ1FvSnlOaGMzUnliMTlqY21Wa2FYUmZZMkZ5WkY5amIyNTBhVzUxWlNjcExtRjBkSElvSjJoeVpXWW5MQ0J5TG1SaGRHRXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWtLQ2NqWm1GcGJGOXBibVp2WDJScGRpY3BMbk5vYjNjb0tTNW9kRzFzS0hJdVpHRjBZU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbWx1WkVOc2FXTnJLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNRb0oybHVjSFYwVzI1aGJXVTlYQ0poYzNSeWIxOWlZVzVyWENKZE9tTm9aV05yWldRbktTNXdjbTl3S0NkamFHVmphMlZrSnl3Z1ptRnNjMlVwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ1FvSnlOaGMzUnliMTlqY21Wa2FYUmZZMkZ5WkY5amIyNTBhVzUxWlNjcExuSmxiVzkyWlVGMGRISW9KMmh5WldZbktUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSdlUzUm9LQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lIMHBPMXh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJR2x1YVhRZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0JwWmlod1lXZGxSR0YwWVM1cGMxOWthWE53YkdGNVgzUmhZbXhsS1NCN1hISmNiaUFnSUNBZ0lDQWdhVzVwZEY5M2FYUm9YM1JoWW14bEtDazdYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJR2x1YVhSZmQybDBhRzkxZEY5MFlXSnNaU2dwTzF4eVhHNGdJQ0FnZlZ4eVhHNTlPMXh5WEc1Y2NseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjdYSEpjYmlBZ0lDQmNJbWx1YVhSY0lqb2dhVzVwZEZ4eVhHNTlPMXh5WEc0aVhYMD0iLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxuXHJcbi8vVE9ET++8mllvdXIgT3JkZXLmqKHlnZflupXpg6jmnIlsaXZlY2hhdOmakOiXj+Wfn++8jOS4jeefpemBk+aYr+WBmuS7gOS5iOeahFxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFwiaW5pdFwiIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGxvYWRlciA9IHJlcXVpcmUoJy4uL21vZC9sb2FkZXInKTtcclxuICAgICAgICAgICAgbG9hZGVyLmxvYWRTb2NpYWxKUygnbGl2ZWNoYXQnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LkxDX0FQSSA9IHdpbmRvdy5MQ19BUEkgfHwge307XHJcbiAgICAgICAgd2luZG93LkxDX0FQSS5vbl9sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBsaXZlY2hhdGluY192aXNpdG9yX2lkID0gJCgnI2xpdmVjaGF0aW5jX3Zpc2l0b3JfaWQnKTtcclxuICAgICAgICAgICAgaWYobGl2ZWNoYXRpbmNfdmlzaXRvcl9pZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsaXZlY2hhdGluY192aXNpdG9yX2lkLnZhbCh3aW5kb3cuTENfQVBJLmdldF92aXNpdG9yX2lkKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvdy5MQ19BUEkuaGlkZV9jaGF0X3dpbmRvdygpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn07XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltZGhaV0V2YW5NdlkyaGxZMnR2ZFhRdmJHbDJaV05vWVhRdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRWlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW5aaGNpQWtJRDBnS0hSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUIzYVc1a2IzZGJKeVFuWFNBNklIUjVjR1Z2WmlCbmJHOWlZV3dnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnUHlCbmJHOWlZV3hiSnlRblhTQTZJRzUxYkd3cE8xeHlYRzVjY2x4dUx5OVVUMFJQNzd5YVdXOTFjaUJQY21SbGN1YW9vZVdkbCtXNmxlbURxT2FjaVd4cGRtVmphR0YwNlpxUTZKZVA1WitmNzd5TTVMaU41NStsNllHVDVwaXY1WUdhNUx1QTVMbUk1NXFFWEhKY2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2UxeHlYRzRnSUNBZ1hDSnBibWwwWENJZ09pQm1kVzVqZEdsdmJpZ3BJSHRjY2x4dUlDQWdJQ0FnSUNBa0tHWjFibU4wYVc5dUtDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnYkc5aFpHVnlJRDBnY21WeGRXbHlaU2duTGk0dmJXOWtMMnh2WVdSbGNpY3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNiMkZrWlhJdWJHOWhaRk52WTJsaGJFcFRLQ2RzYVhabFkyaGhkQ2NwTzF4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjNhVzVrYjNjdVRFTmZRVkJKSUQwZ2QybHVaRzkzTGt4RFgwRlFTU0I4ZkNCN2ZUdGNjbHh1SUNBZ0lDQWdJQ0IzYVc1a2IzY3VURU5mUVZCSkxtOXVYMnh2WVdRZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUd4cGRtVmphR0YwYVc1algzWnBjMmwwYjNKZmFXUWdQU0FrS0NjamJHbDJaV05vWVhScGJtTmZkbWx6YVhSdmNsOXBaQ2NwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmloc2FYWmxZMmhoZEdsdVkxOTJhWE5wZEc5eVgybGtMbXhsYm1kMGFDQStJREFwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeHBkbVZqYUdGMGFXNWpYM1pwYzJsMGIzSmZhV1F1ZG1Gc0tIZHBibVJ2ZHk1TVExOUJVRWt1WjJWMFgzWnBjMmwwYjNKZmFXUW9LU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkMmx1Wkc5M0xreERYMEZRU1M1b2FXUmxYMk5vWVhSZmQybHVaRzkzS0NrN1hISmNiaUFnSUNBZ0lDQWdmVHRjY2x4dUlDQWdJSDFjY2x4dWZUc2lYWDA9IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuXHJcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG5cclxuLy9sb2FkaW5nXHJcbnZhciBsb2FkaW5nU2VsZWN0b3IgPSAnLnBvcC1sb2FkaW5nJztcclxuZnVuY3Rpb24gb3BlbigpIHtcclxuICAgIGlmKCQobG9hZGluZ1NlbGVjdG9yKS5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInBvcC1sb2FkaW5nXCI+PC9kaXY+JylcclxuICAgIH1cclxuICAgIHZhciBsb2FkaW5nID0gJChsb2FkaW5nU2VsZWN0b3IpO1xyXG5cclxuICAgIHZhciBjdyA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgdmFyIGNoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgdmFyIGxkdyA9IGxvYWRpbmcud2lkdGgoKTtcclxuICAgIHZhciBsZGggPSBsb2FkaW5nLmhlaWdodCgpO1xyXG4gICAgbG9hZGluZy5jc3MoeydsZWZ0JzogY3cgLyAyIC0gbGR3IC8gMiwgJ3RvcCc6IGNoIC8gMiAtIGxkaCAvIDIgKyAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKX0pLnNob3coKTtcclxufVxyXG5mdW5jdGlvbiBjbG9zZSgpIHtcclxuICAgICQobG9hZGluZ1NlbGVjdG9yKS5oaWRlKCk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgXCJvcGVuXCI6IG9wZW4sXHJcbiAgICBcImNsb3NlXCI6IGNsb3NlXHJcbn07XHJcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWRoWldFdmFuTXZZMmhsWTJ0dmRYUXZiRzloWkdsdVp5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVNJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lYSEpjYm5aaGNpQWtJRDBnS0hSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUIzYVc1a2IzZGJKeVFuWFNBNklIUjVjR1Z2WmlCbmJHOWlZV3dnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnUHlCbmJHOWlZV3hiSnlRblhTQTZJRzUxYkd3cE8xeHlYRzVjY2x4dUx5OXNiMkZrYVc1blhISmNiblpoY2lCc2IyRmthVzVuVTJWc1pXTjBiM0lnUFNBbkxuQnZjQzFzYjJGa2FXNW5KenRjY2x4dVpuVnVZM1JwYjI0Z2IzQmxiaWdwSUh0Y2NseHVJQ0FnSUdsbUtDUW9iRzloWkdsdVoxTmxiR1ZqZEc5eUtTNXNaVzVuZEdnZ1BDQXhLU0I3WEhKY2JpQWdJQ0FnSUNBZ0pDZ25ZbTlrZVNjcExtRndjR1Z1WkNnblBHUnBkaUJqYkdGemN6MWNJbkJ2Y0Mxc2IyRmthVzVuWENJK1BDOWthWFkrSnlsY2NseHVJQ0FnSUgxY2NseHVJQ0FnSUhaaGNpQnNiMkZrYVc1bklEMGdKQ2hzYjJGa2FXNW5VMlZzWldOMGIzSXBPMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQmpkeUE5SUNRb2QybHVaRzkzS1M1M2FXUjBhQ2dwTzF4eVhHNGdJQ0FnZG1GeUlHTm9JRDBnSkNoM2FXNWtiM2NwTG1obGFXZG9kQ2dwTzF4eVhHNGdJQ0FnZG1GeUlHeGtkeUE5SUd4dllXUnBibWN1ZDJsa2RHZ29LVHRjY2x4dUlDQWdJSFpoY2lCc1pHZ2dQU0JzYjJGa2FXNW5MbWhsYVdkb2RDZ3BPMXh5WEc0Z0lDQWdiRzloWkdsdVp5NWpjM01vZXlkc1pXWjBKem9nWTNjZ0x5QXlJQzBnYkdSM0lDOGdNaXdnSjNSdmNDYzZJR05vSUM4Z01pQXRJR3hrYUNBdklESWdLeUFrS0dSdlkzVnRaVzUwS1M1elkzSnZiR3hVYjNBb0tYMHBMbk5vYjNjb0tUdGNjbHh1ZlZ4eVhHNW1kVzVqZEdsdmJpQmpiRzl6WlNncElIdGNjbHh1SUNBZ0lDUW9iRzloWkdsdVoxTmxiR1ZqZEc5eUtTNW9hV1JsS0NrN1hISmNibjFjY2x4dVhISmNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdlMXh5WEc0Z0lDQWdYQ0p2Y0dWdVhDSTZJRzl3Wlc0c1hISmNiaUFnSUNCY0ltTnNiM05sWENJNklHTnNiM05sWEhKY2JuMDdYSEpjYmlKZGZRPT0iLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxuXHJcbnZhciB2YWxpZGF0ZUNyZWRpdENhcmQgPSBmdW5jdGlvbihvcHRpb24pIHtcclxuXHR2YXIgY2FyZF90eXBlcywgaXNfdmFsaWRfbGVuZ3RoLCBpc192YWxpZF9sdWhuLCBpc192YXJsaWRfY3Z2X2xlZ3RoLCBpc192YWxpZF9jYXJkLCBnZXRfY2FyZCwgXHJcblx0ICAgIGNhcmQsdmFsaWRfbGVuZ3RoID0gZmFsc2UsIHZhbGlkX2x1aG4gPSBmYWxzZSwgdmFsaWRfY3Z2ID0gZmFsc2U7XHJcblx0dmFyIF9faW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkgeyBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7IGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7IH0gcmV0dXJuIC0xOyB9O1xyXG5cdGlmKG9wdGlvbi5jYXJkTnVtYmVyICE9IHVuZGVmaW5lZCkge1xyXG5cdCAgb3B0aW9uLmNhcmROdW1iZXJMZW5ndGggPSBvcHRpb24uY2FyZE51bWJlci5sZW5ndGg7XHJcblx0fSBlbHNlIHtcclxuXHQgIG9wdGlvbi5jYXJkTnVtYmVyID0gXCJcIjtcclxuXHQgIG9wdGlvbi5jYXJkTnVtYmVyTGVuZ3RoID0gMDtcclxuXHR9XHJcblx0aWYob3B0aW9uLmN2diAhPSB1bmRlZmluZWQpIHtcclxuXHQgIG9wdGlvbi5jdnZMZW5ndGggPSBvcHRpb24uY3Z2Lmxlbmd0aDtcclxuXHR9IGVsc2Uge1xyXG5cdCAgb3B0aW9uLmN2dkxlbmd0aCA9IDA7XHJcblx0ICBvcHRpb24uY3Z2ID0gXCJcIjtcclxuXHR9XHJcblx0aWYgKG9wdGlvbi5nY0lkID09IHVuZGVmaW5lZCkge1xyXG5cdFx0b3B0aW9uLmdjSWQgPSAwO1xyXG5cdH1cclxuXHRcclxuXHRjYXJkX3R5cGVzID0gW1xyXG5cdHtcclxuXHQgIHR5cGU6ICd2aXNhZWxlY3Ryb24nLFxyXG5cdCAgcGF0dGVybjogL140KDAyNnwxNzUwMHw0MDV8NTA4fDg0NHw5MVszN10pLyxcclxuXHQgIGxlbmd0aDogWzE2XSxcclxuXHQgIGN2Y0xlbmd0aDogWzNdLFxyXG5cdCAgbHVobjogdHJ1ZSxcclxuXHQgIGdjSWQ6IDEyMlxyXG5cdH0sXHJcblx0e1xyXG5cdCAgdHlwZTogJ21hZXN0cm8nLFxyXG5cdCAgLy8gcGF0dGVybjogL14oNSgwMTh8MFsyM118WzY4XSl8NigzOXw3KSkvLFxyXG5cdCAgcGF0dGVybjogL14oNSgwfFs2LTldKXw2KS8sXHJcblx0ICBsZW5ndGg6IFsxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTldLFxyXG5cdCAgY3ZjTGVuZ3RoOiBbM10sXHJcblx0ICBsdWhuOiB0cnVlLFxyXG5cdCAgZ2NJZDogMTE3XHJcblx0fSxcclxuXHR7XHJcblx0ICB0eXBlOiAndmlzYScsXHJcblx0ICBwYXR0ZXJuOiAvXjQvLFxyXG5cdCAgbGVuZ3RoOiBbMTMsIDE2XSxcclxuXHQgIGN2Y0xlbmd0aDogWzNdLFxyXG5cdCAgbHVobjogdHJ1ZSxcclxuXHQgIGdjSWQ6IDFcclxuXHR9LFxyXG5cdHtcclxuXHQgIHR5cGU6ICdtYXN0ZXJjYXJkJyxcclxuXHQgIHBhdHRlcm46IC9eNVswLTVdLyxcclxuXHQgIGxlbmd0aDogWzE2XSxcclxuXHQgIGN2Y0xlbmd0aDogWzNdLFxyXG5cdCAgbHVobjogdHJ1ZSxcclxuXHQgIGdjSWQ6IDNcclxuXHR9LFxyXG5cdHtcclxuXHQgIHR5cGU6ICdhbWV4JyxcclxuXHQgIHBhdHRlcm46IC9eM1s0N10vLFxyXG5cdCAgbGVuZ3RoOiBbMTVdLFxyXG5cdCAgY3ZjTGVuZ3RoOiBbMywgNF0sXHJcblx0ICBsdWhuOiB0cnVlLFxyXG5cdCAgZ2NJZDogMlxyXG5cdH0sXHJcblx0e1xyXG5cdCAgdHlwZTogJ2RpbmVyc2NsdWInLFxyXG5cdCAgcGF0dGVybjogL14zWzA2ODldLyxcclxuXHQgIGxlbmd0aDogWzE0XSxcclxuXHQgIGN2Y0xlbmd0aDogWzNdLFxyXG5cdCAgbHVobjogdHJ1ZSxcclxuXHQgIGdjSWQ6IDEzMlxyXG5cdH0sXHJcblx0e1xyXG5cdCAgdHlwZTogJ2Rpc2NvdmVyJyxcclxuXHQgIHBhdHRlcm46IC9eNihbMDQ1XXwyMikvLFxyXG5cdCAgbGVuZ3RoOiBbMTZdLFxyXG5cdCAgY3ZjTGVuZ3RoOiBbM10sXHJcblx0ICBsdWhuOiB0cnVlLFxyXG5cdCAgZ2NJZDogMTI4XHJcblx0fSxcclxuXHR7XHJcblx0ICB0eXBlOiAndW5pb25wYXknLFxyXG5cdCAgcGF0dGVybjogL14oNjJ8ODgpLyxcclxuXHQgIGxlbmd0aDogWzE2LCAxNywgMTgsIDE5XSxcclxuXHQgIGN2Y0xlbmd0aDogWzNdLFxyXG5cdCAgbHVobjogZmFsc2UsXHJcblx0ICBnY0lkOiAtMVxyXG5cdH0sXHJcblx0e1xyXG5cdCAgdHlwZTogJ2pjYicsXHJcblx0ICBwYXR0ZXJuOiAvXjM1LyxcclxuXHQgIGxlbmd0aDogWzE2XSxcclxuXHQgIGN2Y0xlbmd0aDogWzNdLFxyXG5cdCAgbHVobjogdHJ1ZSxcclxuXHQgIGdjSWQ6IDEyNVxyXG5cdH1cclxuXHRdO1xyXG5cdFxyXG5cdGdldF9jYXJkID0gZnVuY3Rpb24oKSB7XHJcblx0ICB2YXIgY2FyZF9vYmogPSBudWxsO1xyXG5cdCAgZm9yKGMgaW4gY2FyZF90eXBlcykge1xyXG5cdCAgICAgdmFyIGlkID0gY2FyZF90eXBlc1tjXS5nY0lkO1xyXG5cdCAgICAgaWYgKGlkID09IG9wdGlvbi5nY0lkKSB7XHJcblx0ICAgICAgIGNhcmRfb2JqID0gY2FyZF90eXBlc1tjXTtcclxuXHQgICAgICAgYnJlYWs7XHJcblx0ICAgICB9XHJcblx0ICAgfSBcclxuXHQgIHJldHVybiBjYXJkX29iajtcclxuXHR9O1xyXG5cdFxyXG5cdGlzX3ZhbGlkX2xlbmd0aCA9IGZ1bmN0aW9uKGNhcmRfb2JqKSB7XHJcblx0ICAgdmFyIHZhbGlkTGVuZ3RoID0gY2FyZF9vYmoubGVuZ3RoO1xyXG5cdCAgIGlmIChfX2luZGV4T2YuY2FsbCh2YWxpZExlbmd0aCwgb3B0aW9uLmNhcmROdW1iZXJMZW5ndGgpID49IDApIHtcclxuXHQgICAgIHJldHVybiB0cnVlO1xyXG5cdCAgIH0gXHJcblx0ICAgcmV0dXJuIGZhbHNlO1xyXG5cdH07XHJcblx0XHJcblx0aXNfdmFsaWRfY2FyZCA9IGZ1bmN0aW9uKGNhcmRfb2JqKSB7XHJcblx0ICB2YXIgcGF0dGVybiA9IGNhcmRfb2JqLnBhdHRlcm4sXHJcblx0ICAgICAgY2FyZE51bWJlciA9IG9wdGlvbi5jYXJkTnVtYmVyO1xyXG5cdCAgaWYgKGNhcmROdW1iZXIubWF0Y2gocGF0dGVybikpIHtcclxuXHRcdCAgcmV0dXJuIHRydWU7XHJcblx0ICB9XHJcblx0ICByZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cdFxyXG5cdGlzX3ZhcmxpZF9jdnZfbGVndGggPSBmdW5jdGlvbihjYXJkX29iaikge1xyXG5cdCAgdmFyIGN2dkxlbmd0aCA9IGNhcmRfb2JqLmN2Y0xlbmd0aDtcclxuXHQgIGlmKF9faW5kZXhPZi5jYWxsKGN2dkxlbmd0aCwgb3B0aW9uLmN2dkxlbmd0aCkgPj0gMCkgeyBcclxuXHQgICAgIHJldHVybiB0cnVlO1xyXG5cdCAgfVxyXG5cdCAgcmV0dXJuIGZhbHNlO1xyXG5cdH07XHJcblx0XHJcblx0aXNfdmFsaWRfbHVobiA9IGZ1bmN0aW9uKG51bSkge1xyXG5cdCAgdmFyIGRpZ2l0LCBkaWdpdHMsIG9kZCwgc3VtLCBfaSwgX2xlbjtcclxuXHQgIG9kZCA9IHRydWU7XHJcblx0ICBzdW0gPSAwO1xyXG5cdCAgZGlnaXRzID0gKG51bSArICcnKS5zcGxpdCgnJykucmV2ZXJzZSgpO1xyXG5cdCAgZm9yIChfaSA9IDAsIF9sZW4gPSBkaWdpdHMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcclxuXHQgICBkaWdpdCA9IGRpZ2l0c1tfaV07XHJcblx0ICAgZGlnaXQgPSBwYXJzZUludChkaWdpdCwgMTApO1xyXG5cdCAgIGlmICgob2RkID0gIW9kZCkpIHtcclxuXHQgICAgICBkaWdpdCAqPSAyO1xyXG5cdCAgIH1cclxuXHQgICBpZiAoZGlnaXQgPiA5KSB7XHJcblx0ICAgICAgZGlnaXQgLT0gOTtcclxuXHQgICB9XHJcblx0ICAgc3VtICs9IGRpZ2l0O1xyXG5cdCAgfVxyXG5cdCAgcmV0dXJuIHN1bSAlIDEwID09PSAwO1xyXG5cdH07IFxyXG5cdFxyXG5cdGNhcmQgPSBnZXRfY2FyZCgpO1xyXG5cdGlmIChjYXJkICE9IG51bGwpIHtcclxuXHQgIHZhbGlkX2xlbmd0aCA9IGlzX3ZhbGlkX2xlbmd0aChjYXJkKSA7XHJcblx0ICB2YWxpZF9jYXJkID0gaXNfdmFsaWRfY2FyZChjYXJkKTtcclxuXHQgIHZhbGlkX2N2diA9IGlzX3ZhcmxpZF9jdnZfbGVndGgoY2FyZCk7XHJcblx0ICB2YWxpZF9sdWhuID0gKGNhcmQubHVobiA/IHRydWUgOiBpc192YWxpZF9sdWhuKG9wdGlvbi5jYXJkTnVtYmVyKSk7XHJcblx0fSBlbHNlIHtcclxuXHQgIHZhbGlkX2xlbmd0aCA9IHRydWU7XHJcblx0ICB2YWxpZF9jYXJkID0gdHJ1ZTtcclxuXHQgIHZhbGlkX2x1aG4gPSBpc192YWxpZF9sdWhuKG9wdGlvbi5jYXJkTnVtYmVyKTtcclxuXHQgIHZhbGlkX2N2diA9IHRydWU7XHJcblx0fVxyXG5cdHJldHVybiB7XHJcblx0XHQgIHZhbGlkX2xlbmd0aDogdmFsaWRfbGVuZ3RoLFxyXG5cdFx0ICB2YWxpZF9jYXJkOiB2YWxpZF9jYXJkLFxyXG5cdFx0ICB2YWxpZF9sdWhuOiB2YWxpZF9sdWhuLFxyXG5cdFx0ICB2YWxpZF9jdnY6IHZhbGlkX2N2dlxyXG5cdCB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0X2V4cGlyZV9pbmZvKCkge1xyXG5cdHZhciBleHBpcmVfbW0gPSAkKCdFWFBJUllEQVRFX01NJyk7XHJcblx0Zm9yKHZhciBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XHJcblx0XHR2YXIgbW9udGggPSAnJytpO1xyXG5cdFx0aWYoaSA8IDEwKSB7XHJcblx0XHRtb250aCA9ICcwJytpO1xyXG5cdCAgICB9XHJcblx0ICAkKCcjRVhQSVJZREFURV9NTScpLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT0nK21vbnRoKyc+Jyttb250aCsnPC9vcHRpb24+Jyk7XHJcblx0fVxyXG5cdHZhciBjdXJyX2RhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdHZhciBjdXJyX3llYXIgPSBjdXJyX2RhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHR5ID0gY3Vycl95ZWFyIC0gMTtcclxuXHRmb3IoaiA9IDA7IGogPCAyNzsgaisrKSB7XHJcblx0XHR5ID0geSArIDE7XHJcblx0XHR2YXIgcHJlZml4X251bSA9ICgnJyArIHkpLnN1YnN0cigyLDIpO1xyXG5cdCAgICAvL2FsZXJ0KHByZWZpeF9udW0pO1xyXG5cdCAgICQoJyNFWFBJUllEQVRFX1lZJykuYXBwZW5kKCc8b3B0aW9uIHZhbHVlPScrcHJlZml4X251bSsnPicrcHJlZml4X251bSsnPC9vcHRpb24+Jyk7XHJcblx0IH1cclxuIH1cclxuXHJcbnZhciBzdWJtaXRfY2hlY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vY2hvb3NlIGJhbmsgXHJcbiAgICB2YXIgYmFua19pZCA9ICQoXCJ1bC5hY2NlcHRfYmsgOnJhZGlvOmNoZWNrZWRcIikudmFsKCk7XHJcbiAgICBpZiAoYmFua19pZCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgJChcIiNwbGVhc2Utc2VsZWN0LWNhcmRcIikudGV4dChjcmVkaXRDYXJkVGlwcy5wbGVhc2VDaG9vc2VDcmVkaXQpO1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHRcclxuICAgIH0gZWxzZSB7XHJcbiAgICBcdCQoXCIjcGxlYXNlLXNlbGVjdC1jYXJkXCIpLnRleHQoXCJcIik7XHJcbiAgICB9XHJcblx0dmFyIGNyZWRpdF9jYXJkID0gJC50cmltKCQoXCIjY3JlZGl0Q2FyZE51bWJlclwiKS52YWwoKSk7XHJcblx0dmFyIHJlc3VsdCA9IDA7XHJcblx0aWYoY3JlZGl0X2NhcmQgPT0gXCJcIikge1xyXG5cdCAgICQoXCIjQ1JFRElUQ0FSRE5VTUJFUl90aXBzXCIpLnRleHQoY3JlZGl0Q2FyZFRpcHMucGxlYXNlRW50ZXJDYXJkTnVtKTtcclxuXHR9IGVsc2UgaWYoIWNyZWRpdF9jYXJkLm1hdGNoKC9bMC05XStcXGQqLykpIHtcclxuXHQgICAkKFwiI0NSRURJVENBUkROVU1CRVJfdGlwc1wiKS50ZXh0KGNyZWRpdENhcmRUaXBzLmNhcmROdW1iZXJJbnZhbGlkKTtcclxuXHR9IGVsc2Uge1xyXG5cdCAgICQoXCIjQ1JFRElUQ0FSRE5VTUJFUl90aXBzXCIpLnRleHQoJycpO1xyXG5cdCAgIHJlc3VsdCA9IHJlc3VsdCArIDE7XHJcblx0fVxyXG5cdGlmKHJlc3VsdCA9PSAwICkge1xyXG5cdCAgIHJldHVybiBmYWxzZTtcclxuXHR9XHJcblx0dmFyIG1tX3NlbGVjdCA9ICQoXCIjRVhQSVJZREFURV9NTVwiKS52YWwoKTtcclxuXHR2YXIgeXlfc2VsZWN0ID0gJChcIiNFWFBJUllEQVRFX1lZXCIpLnZhbCgpO1xyXG5cdGlmICgobW1fc2VsZWN0ID09IC0xKSB8fCAoeXlfc2VsZWN0ID09IC0xKSkge1xyXG5cdCAgICAkKFwiI0VYUElSWURBVEVfdGlwc1wiKS50ZXh0KGNyZWRpdENhcmRUaXBzLnBsZWFzZUNob29zZUV4cGlyeURhdGUpO1xyXG5cdCAgICByZXR1cm4gZmFsc2U7XHJcblx0fSBlbHNlIHtcclxuXHQgICAkKFwiI0VYUElSWURBVEVfdGlwc1wiKS50ZXh0KCcnKTtcclxuXHR9XHJcblx0cmVzdWx0ID0gMCA7XHJcblx0dmFyIGN2diA9ICQudHJpbSgkKFwiI0NWVlwiKS52YWwoKSk7XHJcblx0aWYoY3Z2ID09IFwiXCIpIHtcclxuXHQgICAgJChcIiNDVlZfdGlwc1wiKS50ZXh0KGNyZWRpdENhcmRUaXBzLnBsZWFzZUVudGVyU2VDb2RlKTtcclxuXHR9IGVsc2UgaWYoIWN2di5tYXRjaCgvWzAtOV0rXFxkKi8pKSB7XHJcblx0ICAgICQoXCIjQ1ZWX3RpcHNcIikudGV4dChjcmVkaXRDYXJkVGlwcy5zZWN1cml0eUNvZGVJbnZhbGlkKTtcclxuXHR9IGVsc2Uge1xyXG5cdCAgIHJlc3VsdCA9IHJlc3VsdCArIDE7XHJcblx0ICAgJChcIiNDVlZfdGlwc1wiKS50ZXh0KCcnKTtcclxuXHR9XHJcblx0aWYocmVzdWx0ID09IDAgKSB7XHJcblx0ICAgcmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRcclxuXHR2YXIgY2FyZEluZm8gPSB7fTtcclxuXHRjYXJkSW5mby5jYXJkTnVtYmVyID0gY3JlZGl0X2NhcmQ7XHJcblx0Y2FyZEluZm8uY3Z2ID0gY3Z2O1xyXG5cdGNhcmRJbmZvLmdjSWQgPSBiYW5rX2lkO1xyXG5cdFxyXG5cdCB2YXIgY2hlY2tSZXN1bHQgPSB2YWxpZGF0ZUNyZWRpdENhcmQoY2FyZEluZm8pO1xyXG5cdCAvL0BUT0RPXHJcblx0IC8vcmVzdWx0ID0gMDtcclxuXHQgaWYgKCFjaGVja1Jlc3VsdC52YWxpZF9sZW5ndGggfHwgIWNoZWNrUmVzdWx0LnZhbGlkX2NhcmQgfHwgIWNoZWNrUmVzdWx0LnZhbGlkX2x1aG4pIHtcclxuXHRcdCAkKFwiI0NSRURJVENBUkROVU1CRVJfdGlwc1wiKS50ZXh0KGNyZWRpdENhcmRUaXBzLmNhcmROdW1iZXJJbnZhbGlkKTtcclxuXHRcdCAvL3Jlc3VsdCA9IHJlc3VsdCArIDE7XHJcblx0IH0gIFxyXG5cdFxyXG5cdCBpZiAoIWNoZWNrUmVzdWx0LnZhbGlkX2N2dikge1xyXG5cdFx0JChcIiNDVlZfdGlwc1wiKS50ZXh0KGNyZWRpdENhcmRUaXBzLnNlY3VyaXR5Q29kZUludmFsaWQpO1xyXG5cdFx0Ly9yZXN1bHQgPSByZXN1bHQgKyAxO1xyXG5cdCB9ICBcclxuXHQgIFxyXG5cdCAvKlxyXG5cdCBpZiAocmVzdWx0ID4gMCkge1xyXG5cdFx0cmV0dXJuIGZhbHNlOyBcclxuXHQgfSovXHJcblx0IFxyXG5cdCQoXCIjT1JCX0JVVFRPTlwiKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cdCQoJyNmYWlsX2luZm9fYm94JykuaGlkZSgpO1xyXG5cdCQoJy5tYXNrZWQnKS5zaG93KCk7XHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbnZhciBpbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgIGluaXRfZXhwaXJlX2luZm8oKTtcclxuXHJcbiAgICQoXCJ1bC5hY2NlcHRfYmsgOnJhZGlvXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0IFx0JChcIiNwbGVhc2Utc2VsZWN0LWNhcmRcIikudGV4dChcIlwiKTtcclxuICAgfSk7XHJcblxyXG4gICAkKFwiI2NyZWRpdENhcmROdW1iZXJcIikuZm9jdXMoZnVuY3Rpb24oKXtcclxuXHQgICAkKFwiI0NSRURJVENBUkROVU1CRVJfdGlwc1wiKS50ZXh0KCcnKTtcclxuICAgfSk7XHJcblxyXG4gICAkKFwiI0VYUElSWURBVEVfTU1cIikuZm9jdXMoZnVuY3Rpb24oKXtcclxuXHQgICAkKFwiI0VYUElSWURBVEVfdGlwc1wiKS50ZXh0KCcnKTtcclxuICAgfSk7XHJcblxyXG4gICAkKFwiI0VYUElSWURBVEVfWVlcIikuZm9jdXMoZnVuY3Rpb24oKXtcclxuXHQgICAkKFwiI0VYUElSWURBVEVfdGlwc1wiKS50ZXh0KCcnKTtcclxuICAgfSk7XHJcblxyXG4gICAkKFwiI0NWVlwiKS5mb2N1cyhmdW5jdGlvbigpe1xyXG5cdCAgJChcIiNDVlZfdGlwc1wiKS50ZXh0KCcnKTtcclxuICAgfSk7XHJcbiAgIFxyXG4gICAkKFwiI3BheV9jcmVkaXRfZGlyZWN0X2Zvcm1cIikuc3VibWl0KCBmdW5jdGlvbiAoKSB7XHJcblx0ICAgcmV0dXJuIHN1Ym1pdF9jaGVjaygpO1xyXG4gICB9ICk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdFx0XCJpbml0XCI6IGluaXQsXHJcblx0ICAgIFwidmFsaWRhdGVDcmVkaXRDYXJkXCIgOiB2YWxpZGF0ZUNyZWRpdENhcmRcclxuXHR9O1xyXG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1kaFpXRXZhbk12WTJobFkydHZkWFF2ZG1Gc2FXUmhkR1ZmWTNKbFpHbDBZMkZ5WkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CSWl3aVptbHNaU0k2SW1kbGJtVnlZWFJsWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SjJZWElnSkNBOUlDaDBlWEJsYjJZZ2QybHVaRzkzSUNFOVBTQmNJblZ1WkdWbWFXNWxaRndpSUQ4Z2QybHVaRzkzV3lja0oxMGdPaUIwZVhCbGIyWWdaMnh2WW1Gc0lDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlEOGdaMnh2WW1Gc1d5Y2tKMTBnT2lCdWRXeHNLVHRjY2x4dVhISmNiblpoY2lCMllXeHBaR0YwWlVOeVpXUnBkRU5oY21RZ1BTQm1kVzVqZEdsdmJpaHZjSFJwYjI0cElIdGNjbHh1WEhSMllYSWdZMkZ5WkY5MGVYQmxjeXdnYVhOZmRtRnNhV1JmYkdWdVozUm9MQ0JwYzE5MllXeHBaRjlzZFdodUxDQnBjMTkyWVhKc2FXUmZZM1oyWDJ4bFozUm9MQ0JwYzE5MllXeHBaRjlqWVhKa0xDQm5aWFJmWTJGeVpDd2dYSEpjYmx4MElDQWdJR05oY21Rc2RtRnNhV1JmYkdWdVozUm9JRDBnWm1Gc2MyVXNJSFpoYkdsa1gyeDFhRzRnUFNCbVlXeHpaU3dnZG1Gc2FXUmZZM1oySUQwZ1ptRnNjMlU3WEhKY2JseDBkbUZ5SUY5ZmFXNWtaWGhQWmlBOUlGdGRMbWx1WkdWNFQyWWdmSHdnWm5WdVkzUnBiMjRvYVhSbGJTa2dleUJtYjNJZ0tIWmhjaUJwSUQwZ01Dd2diQ0E5SUhSb2FYTXViR1Z1WjNSb095QnBJRHdnYkRzZ2FTc3JLU0I3SUdsbUlDaHBJR2x1SUhSb2FYTWdKaVlnZEdocGMxdHBYU0E5UFQwZ2FYUmxiU2tnY21WMGRYSnVJR2s3SUgwZ2NtVjBkWEp1SUMweE95QjlPMXh5WEc1Y2RHbG1LRzl3ZEdsdmJpNWpZWEprVG5WdFltVnlJQ0U5SUhWdVpHVm1hVzVsWkNrZ2UxeHlYRzVjZENBZ2IzQjBhVzl1TG1OaGNtUk9kVzFpWlhKTVpXNW5kR2dnUFNCdmNIUnBiMjR1WTJGeVpFNTFiV0psY2k1c1pXNW5kR2c3WEhKY2JseDBmU0JsYkhObElIdGNjbHh1WEhRZ0lHOXdkR2x2Ymk1allYSmtUblZ0WW1WeUlEMGdYQ0pjSWp0Y2NseHVYSFFnSUc5d2RHbHZiaTVqWVhKa1RuVnRZbVZ5VEdWdVozUm9JRDBnTUR0Y2NseHVYSFI5WEhKY2JseDBhV1lvYjNCMGFXOXVMbU4yZGlBaFBTQjFibVJsWm1sdVpXUXBJSHRjY2x4dVhIUWdJRzl3ZEdsdmJpNWpkblpNWlc1bmRHZ2dQU0J2Y0hScGIyNHVZM1oyTG14bGJtZDBhRHRjY2x4dVhIUjlJR1ZzYzJVZ2UxeHlYRzVjZENBZ2IzQjBhVzl1TG1OMmRreGxibWQwYUNBOUlEQTdYSEpjYmx4MElDQnZjSFJwYjI0dVkzWjJJRDBnWENKY0lqdGNjbHh1WEhSOVhISmNibHgwYVdZZ0tHOXdkR2x2Ymk1blkwbGtJRDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHlYRzVjZEZ4MGIzQjBhVzl1TG1kalNXUWdQU0F3TzF4eVhHNWNkSDFjY2x4dVhIUmNjbHh1WEhSallYSmtYM1I1Y0dWeklEMGdXMXh5WEc1Y2RIdGNjbHh1WEhRZ0lIUjVjR1U2SUNkMmFYTmhaV3hsWTNSeWIyNG5MRnh5WEc1Y2RDQWdjR0YwZEdWeWJqb2dMMTQwS0RBeU5ud3hOelV3TUh3ME1EVjhOVEE0ZkRnME5IdzVNVnN6TjEwcEx5eGNjbHh1WEhRZ0lHeGxibWQwYURvZ1d6RTJYU3hjY2x4dVhIUWdJR04yWTB4bGJtZDBhRG9nV3pOZExGeHlYRzVjZENBZ2JIVm9iam9nZEhKMVpTeGNjbHh1WEhRZ0lHZGpTV1E2SURFeU1seHlYRzVjZEgwc1hISmNibHgwZTF4eVhHNWNkQ0FnZEhsd1pUb2dKMjFoWlhOMGNtOG5MRnh5WEc1Y2RDQWdMeThnY0dGMGRHVnliam9nTDE0b05TZ3dNVGg4TUZzeU0xMThXelk0WFNsOE5pZ3pPWHczS1NrdkxGeHlYRzVjZENBZ2NHRjBkR1Z5YmpvZ0wxNG9OU2d3ZkZzMkxUbGRLWHcyS1M4c1hISmNibHgwSUNCc1pXNW5kR2c2SUZzeE1pd2dNVE1zSURFMExDQXhOU3dnTVRZc0lERTNMQ0F4T0N3Z01UbGRMRnh5WEc1Y2RDQWdZM1pqVEdWdVozUm9PaUJiTTEwc1hISmNibHgwSUNCc2RXaHVPaUIwY25WbExGeHlYRzVjZENBZ1oyTkpaRG9nTVRFM1hISmNibHgwZlN4Y2NseHVYSFI3WEhKY2JseDBJQ0IwZVhCbE9pQW5kbWx6WVNjc1hISmNibHgwSUNCd1lYUjBaWEp1T2lBdlhqUXZMRnh5WEc1Y2RDQWdiR1Z1WjNSb09pQmJNVE1zSURFMlhTeGNjbHh1WEhRZ0lHTjJZMHhsYm1kMGFEb2dXek5kTEZ4eVhHNWNkQ0FnYkhWb2Jqb2dkSEoxWlN4Y2NseHVYSFFnSUdkalNXUTZJREZjY2x4dVhIUjlMRnh5WEc1Y2RIdGNjbHh1WEhRZ0lIUjVjR1U2SUNkdFlYTjBaWEpqWVhKa0p5eGNjbHh1WEhRZ0lIQmhkSFJsY200NklDOWVOVnN3TFRWZEx5eGNjbHh1WEhRZ0lHeGxibWQwYURvZ1d6RTJYU3hjY2x4dVhIUWdJR04yWTB4bGJtZDBhRG9nV3pOZExGeHlYRzVjZENBZ2JIVm9iam9nZEhKMVpTeGNjbHh1WEhRZ0lHZGpTV1E2SUROY2NseHVYSFI5TEZ4eVhHNWNkSHRjY2x4dVhIUWdJSFI1Y0dVNklDZGhiV1Y0Snl4Y2NseHVYSFFnSUhCaGRIUmxjbTQ2SUM5ZU0xczBOMTB2TEZ4eVhHNWNkQ0FnYkdWdVozUm9PaUJiTVRWZExGeHlYRzVjZENBZ1kzWmpUR1Z1WjNSb09pQmJNeXdnTkYwc1hISmNibHgwSUNCc2RXaHVPaUIwY25WbExGeHlYRzVjZENBZ1oyTkpaRG9nTWx4eVhHNWNkSDBzWEhKY2JseDBlMXh5WEc1Y2RDQWdkSGx3WlRvZ0oyUnBibVZ5YzJOc2RXSW5MRnh5WEc1Y2RDQWdjR0YwZEdWeWJqb2dMMTR6V3pBMk9EbGRMeXhjY2x4dVhIUWdJR3hsYm1kMGFEb2dXekUwWFN4Y2NseHVYSFFnSUdOMlkweGxibWQwYURvZ1d6TmRMRnh5WEc1Y2RDQWdiSFZvYmpvZ2RISjFaU3hjY2x4dVhIUWdJR2RqU1dRNklERXpNbHh5WEc1Y2RIMHNYSEpjYmx4MGUxeHlYRzVjZENBZ2RIbHdaVG9nSjJScGMyTnZkbVZ5Snl4Y2NseHVYSFFnSUhCaGRIUmxjbTQ2SUM5ZU5paGJNRFExWFh3eU1pa3ZMRnh5WEc1Y2RDQWdiR1Z1WjNSb09pQmJNVFpkTEZ4eVhHNWNkQ0FnWTNaalRHVnVaM1JvT2lCYk0xMHNYSEpjYmx4MElDQnNkV2h1T2lCMGNuVmxMRnh5WEc1Y2RDQWdaMk5KWkRvZ01USTRYSEpjYmx4MGZTeGNjbHh1WEhSN1hISmNibHgwSUNCMGVYQmxPaUFuZFc1cGIyNXdZWGtuTEZ4eVhHNWNkQ0FnY0dGMGRHVnliam9nTDE0b05qSjhPRGdwTHl4Y2NseHVYSFFnSUd4bGJtZDBhRG9nV3pFMkxDQXhOeXdnTVRnc0lERTVYU3hjY2x4dVhIUWdJR04yWTB4bGJtZDBhRG9nV3pOZExGeHlYRzVjZENBZ2JIVm9iam9nWm1Gc2MyVXNYSEpjYmx4MElDQm5ZMGxrT2lBdE1WeHlYRzVjZEgwc1hISmNibHgwZTF4eVhHNWNkQ0FnZEhsd1pUb2dKMnBqWWljc1hISmNibHgwSUNCd1lYUjBaWEp1T2lBdlhqTTFMeXhjY2x4dVhIUWdJR3hsYm1kMGFEb2dXekUyWFN4Y2NseHVYSFFnSUdOMlkweGxibWQwYURvZ1d6TmRMRnh5WEc1Y2RDQWdiSFZvYmpvZ2RISjFaU3hjY2x4dVhIUWdJR2RqU1dRNklERXlOVnh5WEc1Y2RIMWNjbHh1WEhSZE8xeHlYRzVjZEZ4eVhHNWNkR2RsZEY5allYSmtJRDBnWm5WdVkzUnBiMjRvS1NCN1hISmNibHgwSUNCMllYSWdZMkZ5WkY5dlltb2dQU0J1ZFd4c08xeHlYRzVjZENBZ1ptOXlLR01nYVc0Z1kyRnlaRjkwZVhCbGN5a2dlMXh5WEc1Y2RDQWdJQ0FnZG1GeUlHbGtJRDBnWTJGeVpGOTBlWEJsYzF0alhTNW5ZMGxrTzF4eVhHNWNkQ0FnSUNBZ2FXWWdLR2xrSUQwOUlHOXdkR2x2Ymk1blkwbGtLU0I3WEhKY2JseDBJQ0FnSUNBZ0lHTmhjbVJmYjJKcUlEMGdZMkZ5WkY5MGVYQmxjMXRqWFR0Y2NseHVYSFFnSUNBZ0lDQWdZbkpsWVdzN1hISmNibHgwSUNBZ0lDQjlYSEpjYmx4MElDQWdmU0JjY2x4dVhIUWdJSEpsZEhWeWJpQmpZWEprWDI5aWFqdGNjbHh1WEhSOU8xeHlYRzVjZEZ4eVhHNWNkR2x6WDNaaGJHbGtYMnhsYm1kMGFDQTlJR1oxYm1OMGFXOXVLR05oY21SZmIySnFLU0I3WEhKY2JseDBJQ0FnZG1GeUlIWmhiR2xrVEdWdVozUm9JRDBnWTJGeVpGOXZZbW91YkdWdVozUm9PMXh5WEc1Y2RDQWdJR2xtSUNoZlgybHVaR1Y0VDJZdVkyRnNiQ2gyWVd4cFpFeGxibWQwYUN3Z2IzQjBhVzl1TG1OaGNtUk9kVzFpWlhKTVpXNW5kR2dwSUQ0OUlEQXBJSHRjY2x4dVhIUWdJQ0FnSUhKbGRIVnliaUIwY25WbE8xeHlYRzVjZENBZ0lIMGdYSEpjYmx4MElDQWdjbVYwZFhKdUlHWmhiSE5sTzF4eVhHNWNkSDA3WEhKY2JseDBYSEpjYmx4MGFYTmZkbUZzYVdSZlkyRnlaQ0E5SUdaMWJtTjBhVzl1S0dOaGNtUmZiMkpxS1NCN1hISmNibHgwSUNCMllYSWdjR0YwZEdWeWJpQTlJR05oY21SZmIySnFMbkJoZEhSbGNtNHNYSEpjYmx4MElDQWdJQ0FnWTJGeVpFNTFiV0psY2lBOUlHOXdkR2x2Ymk1allYSmtUblZ0WW1WeU8xeHlYRzVjZENBZ2FXWWdLR05oY21ST2RXMWlaWEl1YldGMFkyZ29jR0YwZEdWeWJpa3BJSHRjY2x4dVhIUmNkQ0FnY21WMGRYSnVJSFJ5ZFdVN1hISmNibHgwSUNCOVhISmNibHgwSUNCeVpYUjFjbTRnWm1Gc2MyVTdYSEpjYmx4MGZWeHlYRzVjZEZ4eVhHNWNkR2x6WDNaaGNteHBaRjlqZG5aZmJHVm5kR2dnUFNCbWRXNWpkR2x2YmloallYSmtYMjlpYWlrZ2UxeHlYRzVjZENBZ2RtRnlJR04yZGt4bGJtZDBhQ0E5SUdOaGNtUmZiMkpxTG1OMlkweGxibWQwYUR0Y2NseHVYSFFnSUdsbUtGOWZhVzVrWlhoUFppNWpZV3hzS0dOMmRreGxibWQwYUN3Z2IzQjBhVzl1TG1OMmRreGxibWQwYUNrZ1BqMGdNQ2tnZXlCY2NseHVYSFFnSUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh5WEc1Y2RDQWdmVnh5WEc1Y2RDQWdjbVYwZFhKdUlHWmhiSE5sTzF4eVhHNWNkSDA3WEhKY2JseDBYSEpjYmx4MGFYTmZkbUZzYVdSZmJIVm9iaUE5SUdaMWJtTjBhVzl1S0c1MWJTa2dlMXh5WEc1Y2RDQWdkbUZ5SUdScFoybDBMQ0JrYVdkcGRITXNJRzlrWkN3Z2MzVnRMQ0JmYVN3Z1gyeGxianRjY2x4dVhIUWdJRzlrWkNBOUlIUnlkV1U3WEhKY2JseDBJQ0J6ZFcwZ1BTQXdPMXh5WEc1Y2RDQWdaR2xuYVhSeklEMGdLRzUxYlNBcklDY25LUzV6Y0d4cGRDZ25KeWt1Y21WMlpYSnpaU2dwTzF4eVhHNWNkQ0FnWm05eUlDaGZhU0E5SURBc0lGOXNaVzRnUFNCa2FXZHBkSE11YkdWdVozUm9PeUJmYVNBOElGOXNaVzQ3SUY5cEt5c3BJSHRjY2x4dVhIUWdJQ0JrYVdkcGRDQTlJR1JwWjJsMGMxdGZhVjA3WEhKY2JseDBJQ0FnWkdsbmFYUWdQU0J3WVhKelpVbHVkQ2hrYVdkcGRDd2dNVEFwTzF4eVhHNWNkQ0FnSUdsbUlDZ29iMlJrSUQwZ0lXOWtaQ2twSUh0Y2NseHVYSFFnSUNBZ0lDQmthV2RwZENBcVBTQXlPMXh5WEc1Y2RDQWdJSDFjY2x4dVhIUWdJQ0JwWmlBb1pHbG5hWFFnUGlBNUtTQjdYSEpjYmx4MElDQWdJQ0FnWkdsbmFYUWdMVDBnT1R0Y2NseHVYSFFnSUNCOVhISmNibHgwSUNBZ2MzVnRJQ3M5SUdScFoybDBPMXh5WEc1Y2RDQWdmVnh5WEc1Y2RDQWdjbVYwZFhKdUlITjFiU0FsSURFd0lEMDlQU0F3TzF4eVhHNWNkSDA3SUZ4eVhHNWNkRnh5WEc1Y2RHTmhjbVFnUFNCblpYUmZZMkZ5WkNncE8xeHlYRzVjZEdsbUlDaGpZWEprSUNFOUlHNTFiR3dwSUh0Y2NseHVYSFFnSUhaaGJHbGtYMnhsYm1kMGFDQTlJR2x6WDNaaGJHbGtYMnhsYm1kMGFDaGpZWEprS1NBN1hISmNibHgwSUNCMllXeHBaRjlqWVhKa0lEMGdhWE5mZG1Gc2FXUmZZMkZ5WkNoallYSmtLVHRjY2x4dVhIUWdJSFpoYkdsa1gyTjJkaUE5SUdselgzWmhjbXhwWkY5amRuWmZiR1ZuZEdnb1kyRnlaQ2s3WEhKY2JseDBJQ0IyWVd4cFpGOXNkV2h1SUQwZ0tHTmhjbVF1YkhWb2JpQS9JSFJ5ZFdVZ09pQnBjMTkyWVd4cFpGOXNkV2h1S0c5d2RHbHZiaTVqWVhKa1RuVnRZbVZ5S1NrN1hISmNibHgwZlNCbGJITmxJSHRjY2x4dVhIUWdJSFpoYkdsa1gyeGxibWQwYUNBOUlIUnlkV1U3WEhKY2JseDBJQ0IyWVd4cFpGOWpZWEprSUQwZ2RISjFaVHRjY2x4dVhIUWdJSFpoYkdsa1gyeDFhRzRnUFNCcGMxOTJZV3hwWkY5c2RXaHVLRzl3ZEdsdmJpNWpZWEprVG5WdFltVnlLVHRjY2x4dVhIUWdJSFpoYkdsa1gyTjJkaUE5SUhSeWRXVTdYSEpjYmx4MGZWeHlYRzVjZEhKbGRIVnliaUI3WEhKY2JseDBYSFFnSUhaaGJHbGtYMnhsYm1kMGFEb2dkbUZzYVdSZmJHVnVaM1JvTEZ4eVhHNWNkRngwSUNCMllXeHBaRjlqWVhKa09pQjJZV3hwWkY5allYSmtMRnh5WEc1Y2RGeDBJQ0IyWVd4cFpGOXNkV2h1T2lCMllXeHBaRjlzZFdodUxGeHlYRzVjZEZ4MElDQjJZV3hwWkY5amRuWTZJSFpoYkdsa1gyTjJkbHh5WEc1Y2RDQjlPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCcGJtbDBYMlY0Y0dseVpWOXBibVp2S0NrZ2UxeHlYRzVjZEhaaGNpQmxlSEJwY21WZmJXMGdQU0FrS0NkRldGQkpVbGxFUVZSRlgwMU5KeWs3WEhKY2JseDBabTl5S0haaGNpQnBJRDBnTVRzZ2FTQThQU0F4TWpzZ2FTc3JLU0I3WEhKY2JseDBYSFIyWVhJZ2JXOXVkR2dnUFNBbkp5dHBPMXh5WEc1Y2RGeDBhV1lvYVNBOElERXdLU0I3WEhKY2JseDBYSFJ0YjI1MGFDQTlJQ2N3Snl0cE8xeHlYRzVjZENBZ0lDQjlYSEpjYmx4MElDQWtLQ2NqUlZoUVNWSlpSRUZVUlY5TlRTY3BMbUZ3Y0dWdVpDZ25QRzl3ZEdsdmJpQjJZV3gxWlQwbksyMXZiblJvS3ljK0p5dHRiMjUwYUNzblBDOXZjSFJwYjI0K0p5azdYSEpjYmx4MGZWeHlYRzVjZEhaaGNpQmpkWEp5WDJSaGRHVWdQU0J1WlhjZ1JHRjBaU2dwTzF4eVhHNWNkSFpoY2lCamRYSnlYM2xsWVhJZ1BTQmpkWEp5WDJSaGRHVXVaMlYwUm5Wc2JGbGxZWElvS1R0Y2NseHVYSFI1SUQwZ1kzVnljbDk1WldGeUlDMGdNVHRjY2x4dVhIUm1iM0lvYWlBOUlEQTdJR29nUENBeU56c2dhaXNyS1NCN1hISmNibHgwWEhSNUlEMGdlU0FySURFN1hISmNibHgwWEhSMllYSWdjSEpsWm1sNFgyNTFiU0E5SUNnbkp5QXJJSGtwTG5OMVluTjBjaWd5TERJcE8xeHlYRzVjZENBZ0lDQXZMMkZzWlhKMEtIQnlaV1pwZUY5dWRXMHBPMXh5WEc1Y2RDQWdJQ1FvSnlORldGQkpVbGxFUVZSRlgxbFpKeWt1WVhCd1pXNWtLQ2M4YjNCMGFXOXVJSFpoYkhWbFBTY3JjSEpsWm1sNFgyNTFiU3NuUGljcmNISmxabWw0WDI1MWJTc25QQzl2Y0hScGIyNCtKeWs3WEhKY2JseDBJSDFjY2x4dUlIMWNjbHh1WEhKY2JuWmhjaUJ6ZFdKdGFYUmZZMmhsWTJzZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjY2x4dUlDQWdJQzh2WTJodmIzTmxJR0poYm1zZ1hISmNiaUFnSUNCMllYSWdZbUZ1YTE5cFpDQTlJQ1FvWENKMWJDNWhZMk5sY0hSZlltc2dPbkpoWkdsdk9tTm9aV05yWldSY0lpa3VkbUZzS0NrN1hISmNiaUFnSUNCcFppQW9ZbUZ1YTE5cFpDQTlQU0IxYm1SbFptbHVaV1FwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdKQ2hjSWlOd2JHVmhjMlV0YzJWc1pXTjBMV05oY21SY0lpa3VkR1Y0ZENoamNtVmthWFJEWVhKa1ZHbHdjeTV3YkdWaGMyVkRhRzl2YzJWRGNtVmthWFFwTzF4eVhHNGdJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEhSY2NseHVJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0JjZENRb1hDSWpjR3hsWVhObExYTmxiR1ZqZEMxallYSmtYQ0lwTG5SbGVIUW9YQ0pjSWlrN1hISmNiaUFnSUNCOVhISmNibHgwZG1GeUlHTnlaV1JwZEY5allYSmtJRDBnSkM1MGNtbHRLQ1FvWENJalkzSmxaR2wwUTJGeVpFNTFiV0psY2x3aUtTNTJZV3dvS1NrN1hISmNibHgwZG1GeUlISmxjM1ZzZENBOUlEQTdYSEpjYmx4MGFXWW9ZM0psWkdsMFgyTmhjbVFnUFQwZ1hDSmNJaWtnZTF4eVhHNWNkQ0FnSUNRb1hDSWpRMUpGUkVsVVEwRlNSRTVWVFVKRlVsOTBhWEJ6WENJcExuUmxlSFFvWTNKbFpHbDBRMkZ5WkZScGNITXVjR3hsWVhObFJXNTBaWEpEWVhKa1RuVnRLVHRjY2x4dVhIUjlJR1ZzYzJVZ2FXWW9JV055WldScGRGOWpZWEprTG0xaGRHTm9LQzliTUMwNVhTdGNYR1FxTHlrcElIdGNjbHh1WEhRZ0lDQWtLRndpSTBOU1JVUkpWRU5CVWtST1ZVMUNSVkpmZEdsd2Mxd2lLUzUwWlhoMEtHTnlaV1JwZEVOaGNtUlVhWEJ6TG1OaGNtUk9kVzFpWlhKSmJuWmhiR2xrS1R0Y2NseHVYSFI5SUdWc2MyVWdlMXh5WEc1Y2RDQWdJQ1FvWENJalExSkZSRWxVUTBGU1JFNVZUVUpGVWw5MGFYQnpYQ0lwTG5SbGVIUW9KeWNwTzF4eVhHNWNkQ0FnSUhKbGMzVnNkQ0E5SUhKbGMzVnNkQ0FySURFN1hISmNibHgwZlZ4eVhHNWNkR2xtS0hKbGMzVnNkQ0E5UFNBd0lDa2dlMXh5WEc1Y2RDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2NseHVYSFI5WEhKY2JseDBkbUZ5SUcxdFgzTmxiR1ZqZENBOUlDUW9YQ0lqUlZoUVNWSlpSRUZVUlY5TlRWd2lLUzUyWVd3b0tUdGNjbHh1WEhSMllYSWdlWGxmYzJWc1pXTjBJRDBnSkNoY0lpTkZXRkJKVWxsRVFWUkZYMWxaWENJcExuWmhiQ2dwTzF4eVhHNWNkR2xtSUNnb2JXMWZjMlZzWldOMElEMDlJQzB4S1NCOGZDQW9lWGxmYzJWc1pXTjBJRDA5SUMweEtTa2dlMXh5WEc1Y2RDQWdJQ0FrS0Z3aUkwVllVRWxTV1VSQlZFVmZkR2x3YzF3aUtTNTBaWGgwS0dOeVpXUnBkRU5oY21SVWFYQnpMbkJzWldGelpVTm9iMjl6WlVWNGNHbHllVVJoZEdVcE8xeHlYRzVjZENBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEhKY2JseDBmU0JsYkhObElIdGNjbHh1WEhRZ0lDQWtLRndpSTBWWVVFbFNXVVJCVkVWZmRHbHdjMXdpS1M1MFpYaDBLQ2NuS1R0Y2NseHVYSFI5WEhKY2JseDBjbVZ6ZFd4MElEMGdNQ0E3WEhKY2JseDBkbUZ5SUdOMmRpQTlJQ1F1ZEhKcGJTZ2tLRndpSTBOV1Zsd2lLUzUyWVd3b0tTazdYSEpjYmx4MGFXWW9ZM1oySUQwOUlGd2lYQ0lwSUh0Y2NseHVYSFFnSUNBZ0pDaGNJaU5EVmxaZmRHbHdjMXdpS1M1MFpYaDBLR055WldScGRFTmhjbVJVYVhCekxuQnNaV0Z6WlVWdWRHVnlVMlZEYjJSbEtUdGNjbHh1WEhSOUlHVnNjMlVnYVdZb0lXTjJkaTV0WVhSamFDZ3ZXekF0T1YwclhGeGtLaThwS1NCN1hISmNibHgwSUNBZ0lDUW9YQ0lqUTFaV1gzUnBjSE5jSWlrdWRHVjRkQ2hqY21Wa2FYUkRZWEprVkdsd2N5NXpaV04xY21sMGVVTnZaR1ZKYm5aaGJHbGtLVHRjY2x4dVhIUjlJR1ZzYzJVZ2UxeHlYRzVjZENBZ0lISmxjM1ZzZENBOUlISmxjM1ZzZENBcklERTdYSEpjYmx4MElDQWdKQ2hjSWlORFZsWmZkR2x3YzF3aUtTNTBaWGgwS0NjbktUdGNjbHh1WEhSOVhISmNibHgwYVdZb2NtVnpkV3gwSUQwOUlEQWdLU0I3WEhKY2JseDBJQ0FnY21WMGRYSnVJR1poYkhObE8xeHlYRzVjZEgxY2NseHVYSFJjY2x4dVhIUjJZWElnWTJGeVpFbHVabThnUFNCN2ZUdGNjbHh1WEhSallYSmtTVzVtYnk1allYSmtUblZ0WW1WeUlEMGdZM0psWkdsMFgyTmhjbVE3WEhKY2JseDBZMkZ5WkVsdVptOHVZM1oySUQwZ1kzWjJPMXh5WEc1Y2RHTmhjbVJKYm1adkxtZGpTV1FnUFNCaVlXNXJYMmxrTzF4eVhHNWNkRnh5WEc1Y2RDQjJZWElnWTJobFkydFNaWE4xYkhRZ1BTQjJZV3hwWkdGMFpVTnlaV1JwZEVOaGNtUW9ZMkZ5WkVsdVptOHBPMXh5WEc1Y2RDQXZMMEJVVDBSUFhISmNibHgwSUM4dmNtVnpkV3gwSUQwZ01EdGNjbHh1WEhRZ2FXWWdLQ0ZqYUdWamExSmxjM1ZzZEM1MllXeHBaRjlzWlc1bmRHZ2dmSHdnSVdOb1pXTnJVbVZ6ZFd4MExuWmhiR2xrWDJOaGNtUWdmSHdnSVdOb1pXTnJVbVZ6ZFd4MExuWmhiR2xrWDJ4MWFHNHBJSHRjY2x4dVhIUmNkQ0FrS0Z3aUkwTlNSVVJKVkVOQlVrUk9WVTFDUlZKZmRHbHdjMXdpS1M1MFpYaDBLR055WldScGRFTmhjbVJVYVhCekxtTmhjbVJPZFcxaVpYSkpiblpoYkdsa0tUdGNjbHh1WEhSY2RDQXZMM0psYzNWc2RDQTlJSEpsYzNWc2RDQXJJREU3WEhKY2JseDBJSDBnSUZ4eVhHNWNkRnh5WEc1Y2RDQnBaaUFvSVdOb1pXTnJVbVZ6ZFd4MExuWmhiR2xrWDJOMmRpa2dlMXh5WEc1Y2RGeDBKQ2hjSWlORFZsWmZkR2x3YzF3aUtTNTBaWGgwS0dOeVpXUnBkRU5oY21SVWFYQnpMbk5sWTNWeWFYUjVRMjlrWlVsdWRtRnNhV1FwTzF4eVhHNWNkRngwTHk5eVpYTjFiSFFnUFNCeVpYTjFiSFFnS3lBeE8xeHlYRzVjZENCOUlDQmNjbHh1WEhRZ0lGeHlYRzVjZENBdktseHlYRzVjZENCcFppQW9jbVZ6ZFd4MElENGdNQ2tnZTF4eVhHNWNkRngwY21WMGRYSnVJR1poYkhObE95QmNjbHh1WEhRZ2ZTb3ZYSEpjYmx4MElGeHlYRzVjZENRb1hDSWpUMUpDWDBKVlZGUlBUbHdpS1M1aGRIUnlLQ2RrYVhOaFlteGxaQ2NzSUhSeWRXVXBPMXh5WEc1Y2RDUW9KeU5tWVdsc1gybHVabTlmWW05NEp5a3VhR2xrWlNncE8xeHlYRzVjZENRb0p5NXRZWE5yWldRbktTNXphRzkzS0NrN1hISmNibHgwY21WMGRYSnVJSFJ5ZFdVN1hISmNibjFjY2x4dVhISmNiblpoY2lCcGJtbDBJRDBnWm5WdVkzUnBiMjRvS1NCN1hISmNiaUFnSUdsdWFYUmZaWGh3YVhKbFgybHVabThvS1R0Y2NseHVYSEpjYmlBZ0lDUW9YQ0oxYkM1aFkyTmxjSFJmWW1zZ09uSmhaR2x2WENJcExtTnNhV05yS0daMWJtTjBhVzl1S0NsN1hISmNibHgwSUZ4MEpDaGNJaU53YkdWaGMyVXRjMlZzWldOMExXTmhjbVJjSWlrdWRHVjRkQ2hjSWx3aUtUdGNjbHh1SUNBZ2ZTazdYSEpjYmx4eVhHNGdJQ0FrS0Z3aUkyTnlaV1JwZEVOaGNtUk9kVzFpWlhKY0lpa3VabTlqZFhNb1puVnVZM1JwYjI0b0tYdGNjbHh1WEhRZ0lDQWtLRndpSTBOU1JVUkpWRU5CVWtST1ZVMUNSVkpmZEdsd2Mxd2lLUzUwWlhoMEtDY25LVHRjY2x4dUlDQWdmU2s3WEhKY2JseHlYRzRnSUNBa0tGd2lJMFZZVUVsU1dVUkJWRVZmVFUxY0lpa3VabTlqZFhNb1puVnVZM1JwYjI0b0tYdGNjbHh1WEhRZ0lDQWtLRndpSTBWWVVFbFNXVVJCVkVWZmRHbHdjMXdpS1M1MFpYaDBLQ2NuS1R0Y2NseHVJQ0FnZlNrN1hISmNibHh5WEc0Z0lDQWtLRndpSTBWWVVFbFNXVVJCVkVWZldWbGNJaWt1Wm05amRYTW9ablZ1WTNScGIyNG9LWHRjY2x4dVhIUWdJQ0FrS0Z3aUkwVllVRWxTV1VSQlZFVmZkR2x3YzF3aUtTNTBaWGgwS0NjbktUdGNjbHh1SUNBZ2ZTazdYSEpjYmx4eVhHNGdJQ0FrS0Z3aUkwTldWbHdpS1M1bWIyTjFjeWhtZFc1amRHbHZiaWdwZTF4eVhHNWNkQ0FnSkNoY0lpTkRWbFpmZEdsd2Mxd2lLUzUwWlhoMEtDY25LVHRjY2x4dUlDQWdmU2s3WEhKY2JpQWdJRnh5WEc0Z0lDQWtLRndpSTNCaGVWOWpjbVZrYVhSZlpHbHlaV04wWDJadmNtMWNJaWt1YzNWaWJXbDBLQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHgwSUNBZ2NtVjBkWEp1SUhOMVltMXBkRjlqYUdWamF5Z3BPMXh5WEc0Z0lDQjlJQ2s3WEhKY2JuMWNjbHh1WEhKY2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2UxeHlYRzVjZEZ4MFhDSnBibWwwWENJNklHbHVhWFFzWEhKY2JseDBJQ0FnSUZ3aWRtRnNhV1JoZEdWRGNtVmthWFJEWVhKa1hDSWdPaUIyWVd4cFpHRjBaVU55WldScGRFTmhjbVJjY2x4dVhIUjlPMXh5WEc0aVhYMD0iLCIvKlxyXG4gKiBUaGlzIGlzIHVzZWQgdG8gZGVmaW5lZCB0aGUgYXBwbGljYXRpb24gbGV2ZWwgZXZlbnQgbmFtZXMuXHJcbiAqIFRoZSBhcHBsaWNhdGlvbiBldmVudHMgYXJlIGZpcmVkIGluIHRoZSBkb2N1bWVudCBsZXZlbC5cclxuICAgICAkKCBkb2N1bWVudCApLm9uKCBcIm15Q3VzdG9tRXZlbnRcIiwge1xyXG4gICAgICAgICBmb286IFwiYmFyXCJcclxuICAgICB9LCBmdW5jdGlvbiggZXZlbnQsIGFyZzEsIGFyZzIgKSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCBldmVudC5kYXRhLmZvbyApOyAvLyBcImJhclwiXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCBhcmcxICk7ICAgICAgICAgICAvLyBcImJpbVwiXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCBhcmcyICk7ICAgICAgICAgICAvLyBcImJhelwiXHJcbiAgICAgfSk7XHJcblxyXG4gICAgICQoIGRvY3VtZW50ICkudHJpZ2dlciggXCJteUN1c3RvbUV2ZW50XCIsIFsgXCJiaW1cIiwgXCJiYXpcIiBdICk7XHJcbiAqXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGFkZFRvQ2FydDogXCJlcy1hZGRUb0NhcnRcIixcclxuICAgIHJlbW92ZUZyb21DYXJ0OiBcImVzLXJlbW92ZUZyb21DYXJ0XCIsXHJcbiAgICB1cGRhdGVDYXJ0OiBcImVzLXVwZGF0ZUNhcnRcIixcclxuICAgIGNoZWNrb3V0U3RlcDogXCJlcy1jaGVja291dFN0ZXBcIixcclxuICAgIHB1cmNoYXNlOiBcImVzLXB1cmNoYXNlXCIsXHJcbiAgICBjaGVja291dEVycm9yOiAnZXMtY2hlY2tvdXRFcnJvcicsXHJcbiAgICBjbGlja0NoZWNrb3V0OiBcImVzLWNsaWNrQ2hlY2tvdXRcIixcclxuICAgIGNsaWNrR29vZHNRdWFudGl0eTogXCJlcy1jbGlja0dvb2RzUXVhbnRpdHlcIixcclxuICAgIGNsaWNrR29vZHNTaXplOiBcImVzLWNsaWNrR29vZHNTaXplXCIsXHJcbiAgICBjbGlja0dvb2RzU2l6ZU9wdGlvbjogXCJlcy1jbGlja0dvb2RzU2l6ZU9wdGlvblwiLFxyXG59OyIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbi8vZGVmaW5lKGZ1bmN0aW9uKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSkge1xyXG5cdHZhciBqUXVlcnkgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XHJcblx0XHJcblx0LyohXHJcblx0ICogalF1ZXJ5IEZvcm0gUGx1Z2luXHJcblx0ICogdmVyc2lvbjogMy40NS4wLTIwMTMuMTAuMTdcclxuXHQgKiBSZXF1aXJlcyBqUXVlcnkgdjEuNSBvciBsYXRlclxyXG5cdCAqIENvcHlyaWdodCAoYykgMjAxMyBNLiBBbHN1cFxyXG5cdCAqIEV4YW1wbGVzIGFuZCBkb2N1bWVudGF0aW9uIGF0OiBodHRwOi8vbWFsc3VwLmNvbS9qcXVlcnkvZm9ybS9cclxuXHQgKiBQcm9qZWN0IHJlcG9zaXRvcnk6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYWxzdXAvZm9ybVxyXG5cdCAqIER1YWwgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBhbmQgR1BMIGxpY2Vuc2VzLlxyXG5cdCAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYWxzdXAvZm9ybSNjb3B5cmlnaHQtYW5kLWxpY2Vuc2VcclxuXHQgKi9cclxuXHQvKmdsb2JhbCBBY3RpdmVYT2JqZWN0ICovXHJcblx0OyhmdW5jdGlvbigkKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdC8qXHJcblx0XHRVc2FnZSBOb3RlOlxyXG5cdFx0LS0tLS0tLS0tLS1cclxuXHRcdERvIG5vdCB1c2UgYm90aCBhamF4U3VibWl0IGFuZCBhamF4Rm9ybSBvbiB0aGUgc2FtZSBmb3JtLiAgVGhlc2VcclxuXHRcdGZ1bmN0aW9ucyBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLiAgVXNlIGFqYXhTdWJtaXQgaWYgeW91IHdhbnRcclxuXHRcdHRvIGJpbmQgeW91ciBvd24gc3VibWl0IGhhbmRsZXIgdG8gdGhlIGZvcm0uICBGb3IgZXhhbXBsZSxcclxuXHJcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnI215Rm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyA8LS0gaW1wb3J0YW50XHJcblx0XHRcdFx0JCh0aGlzKS5hamF4U3VibWl0KHtcclxuXHRcdFx0XHRcdHRhcmdldDogJyNvdXRwdXQnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0VXNlIGFqYXhGb3JtIHdoZW4geW91IHdhbnQgdGhlIHBsdWdpbiB0byBtYW5hZ2UgYWxsIHRoZSBldmVudCBiaW5kaW5nXHJcblx0XHRmb3IgeW91LiAgRm9yIGV4YW1wbGUsXHJcblxyXG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJyNteUZvcm0nKS5hamF4Rm9ybSh7XHJcblx0XHRcdFx0dGFyZ2V0OiAnI291dHB1dCdcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRZb3UgY2FuIGFsc28gdXNlIGFqYXhGb3JtIHdpdGggZGVsZWdhdGlvbiAocmVxdWlyZXMgalF1ZXJ5IHYxLjcrKSwgc28gdGhlXHJcblx0XHRmb3JtIGRvZXMgbm90IGhhdmUgdG8gZXhpc3Qgd2hlbiB5b3UgaW52b2tlIGFqYXhGb3JtOlxyXG5cclxuXHRcdCQoJyNteUZvcm0nKS5hamF4Rm9ybSh7XHJcblx0XHRcdGRlbGVnYXRpb246IHRydWUsXHJcblx0XHRcdHRhcmdldDogJyNvdXRwdXQnXHJcblx0XHR9KTtcclxuXHJcblx0XHRXaGVuIHVzaW5nIGFqYXhGb3JtLCB0aGUgYWpheFN1Ym1pdCBmdW5jdGlvbiB3aWxsIGJlIGludm9rZWQgZm9yIHlvdVxyXG5cdFx0YXQgdGhlIGFwcHJvcHJpYXRlIHRpbWUuXHJcblx0Ki9cclxuXHJcblx0LyoqXHJcblx0ICogRmVhdHVyZSBkZXRlY3Rpb25cclxuXHQgKi9cclxuXHR2YXIgZmVhdHVyZSA9IHt9O1xyXG5cdGZlYXR1cmUuZmlsZWFwaSA9ICQoXCI8aW5wdXQgdHlwZT0nZmlsZScvPlwiKS5nZXQoMCkuZmlsZXMgIT09IHVuZGVmaW5lZDtcclxuXHRmZWF0dXJlLmZvcm1kYXRhID0gd2luZG93LkZvcm1EYXRhICE9PSB1bmRlZmluZWQ7XHJcblxyXG5cdHZhciBoYXNQcm9wID0gISEkLmZuLnByb3A7XHJcblxyXG5cdC8vIGF0dHIyIHVzZXMgcHJvcCB3aGVuIGl0IGNhbiBidXQgY2hlY2tzIHRoZSByZXR1cm4gdHlwZSBmb3JcclxuXHQvLyBhbiBleHBlY3RlZCBzdHJpbmcuICB0aGlzIGFjY291bnRzIGZvciB0aGUgY2FzZSB3aGVyZSBhIGZvcm0gXHJcblx0Ly8gY29udGFpbnMgaW5wdXRzIHdpdGggbmFtZXMgbGlrZSBcImFjdGlvblwiIG9yIFwibWV0aG9kXCI7IGluIHRob3NlXHJcblx0Ly8gY2FzZXMgXCJwcm9wXCIgcmV0dXJucyB0aGUgZWxlbWVudFxyXG5cdCQuZm4uYXR0cjIgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICggISBoYXNQcm9wIClcclxuXHRcdFx0cmV0dXJuIHRoaXMuYXR0ci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0dmFyIHZhbCA9IHRoaXMucHJvcC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0aWYgKCAoIHZhbCAmJiB2YWwuanF1ZXJ5ICkgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgKVxyXG5cdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0cmV0dXJuIHRoaXMuYXR0ci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIGFqYXhTdWJtaXQoKSBwcm92aWRlcyBhIG1lY2hhbmlzbSBmb3IgaW1tZWRpYXRlbHkgc3VibWl0dGluZ1xyXG5cdCAqIGFuIEhUTUwgZm9ybSB1c2luZyBBSkFYLlxyXG5cdCAqL1xyXG5cdCQuZm4uYWpheFN1Ym1pdCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHRcdC8qanNoaW50IHNjcmlwdHVybDp0cnVlICovXHJcblxyXG5cdFx0Ly8gZmFzdCBmYWlsIGlmIG5vdGhpbmcgc2VsZWN0ZWQgKGh0dHA6Ly9kZXYuanF1ZXJ5LmNvbS90aWNrZXQvMjc1MilcclxuXHRcdGlmICghdGhpcy5sZW5ndGgpIHtcclxuXHRcdFx0bG9nKCdhamF4U3VibWl0OiBza2lwcGluZyBzdWJtaXQgcHJvY2VzcyAtIG5vIGVsZW1lbnQgc2VsZWN0ZWQnKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIG1ldGhvZCwgYWN0aW9uLCB1cmwsICRmb3JtID0gdGhpcztcclxuXHJcblx0XHRpZiAodHlwZW9mIG9wdGlvbnMgPT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRvcHRpb25zID0geyBzdWNjZXNzOiBvcHRpb25zIH07XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICggb3B0aW9ucyA9PT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRvcHRpb25zID0ge307XHJcblx0XHR9XHJcblxyXG5cdFx0bWV0aG9kID0gb3B0aW9ucy50eXBlIHx8IHRoaXMuYXR0cjIoJ21ldGhvZCcpO1xyXG5cdFx0YWN0aW9uID0gb3B0aW9ucy51cmwgIHx8IHRoaXMuYXR0cjIoJ2FjdGlvbicpO1xyXG5cclxuXHRcdHVybCA9ICh0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJykgPyAkLnRyaW0oYWN0aW9uKSA6ICcnO1xyXG5cdFx0dXJsID0gdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmIHx8ICcnO1xyXG5cdFx0aWYgKHVybCkge1xyXG5cdFx0XHQvLyBjbGVhbiB1cmwgKGRvbid0IGluY2x1ZGUgaGFzaCB2YXVlKVxyXG5cdFx0XHR1cmwgPSAodXJsLm1hdGNoKC9eKFteI10rKS8pfHxbXSlbMV07XHJcblx0XHR9XHJcblxyXG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHtcclxuXHRcdFx0dXJsOiAgdXJsLFxyXG5cdFx0XHRzdWNjZXNzOiAkLmFqYXhTZXR0aW5ncy5zdWNjZXNzLFxyXG5cdFx0XHR0eXBlOiBtZXRob2QgfHwgJC5hamF4U2V0dGluZ3MudHlwZSxcclxuXHRcdFx0aWZyYW1lU3JjOiAvXmh0dHBzL2kudGVzdCh3aW5kb3cubG9jYXRpb24uaHJlZiB8fCAnJykgPyAnamF2YXNjcmlwdDpmYWxzZScgOiAnYWJvdXQ6YmxhbmsnXHJcblx0XHR9LCBvcHRpb25zKTtcclxuXHJcblx0XHQvLyBob29rIGZvciBtYW5pcHVsYXRpbmcgdGhlIGZvcm0gZGF0YSBiZWZvcmUgaXQgaXMgZXh0cmFjdGVkO1xyXG5cdFx0Ly8gY29udmVuaWVudCBmb3IgdXNlIHdpdGggcmljaCBlZGl0b3JzIGxpa2UgdGlueU1DRSBvciBGQ0tFZGl0b3JcclxuXHRcdHZhciB2ZXRvID0ge307XHJcblx0XHR0aGlzLnRyaWdnZXIoJ2Zvcm0tcHJlLXNlcmlhbGl6ZScsIFt0aGlzLCBvcHRpb25zLCB2ZXRvXSk7XHJcblx0XHRpZiAodmV0by52ZXRvKSB7XHJcblx0XHRcdGxvZygnYWpheFN1Ym1pdDogc3VibWl0IHZldG9lZCB2aWEgZm9ybS1wcmUtc2VyaWFsaXplIHRyaWdnZXInKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcHJvdmlkZSBvcHBvcnR1bml0eSB0byBhbHRlciBmb3JtIGRhdGEgYmVmb3JlIGl0IGlzIHNlcmlhbGl6ZWRcclxuXHRcdGlmIChvcHRpb25zLmJlZm9yZVNlcmlhbGl6ZSAmJiBvcHRpb25zLmJlZm9yZVNlcmlhbGl6ZSh0aGlzLCBvcHRpb25zKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0bG9nKCdhamF4U3VibWl0OiBzdWJtaXQgYWJvcnRlZCB2aWEgYmVmb3JlU2VyaWFsaXplIGNhbGxiYWNrJyk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciB0cmFkaXRpb25hbCA9IG9wdGlvbnMudHJhZGl0aW9uYWw7XHJcblx0XHRpZiAoIHRyYWRpdGlvbmFsID09PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdHRyYWRpdGlvbmFsID0gJC5hamF4U2V0dGluZ3MudHJhZGl0aW9uYWw7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGVsZW1lbnRzID0gW107XHJcblx0XHR2YXIgcXgsIGEgPSB0aGlzLmZvcm1Ub0FycmF5KG9wdGlvbnMuc2VtYW50aWMsIGVsZW1lbnRzKTtcclxuXHRcdGlmIChvcHRpb25zLmRhdGEpIHtcclxuXHRcdFx0b3B0aW9ucy5leHRyYURhdGEgPSBvcHRpb25zLmRhdGE7XHJcblx0XHRcdHF4ID0gJC5wYXJhbShvcHRpb25zLmRhdGEsIHRyYWRpdGlvbmFsKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBnaXZlIHByZS1zdWJtaXQgY2FsbGJhY2sgYW4gb3Bwb3J0dW5pdHkgdG8gYWJvcnQgdGhlIHN1Ym1pdFxyXG5cdFx0aWYgKG9wdGlvbnMuYmVmb3JlU3VibWl0ICYmIG9wdGlvbnMuYmVmb3JlU3VibWl0KGEsIHRoaXMsIG9wdGlvbnMpID09PSBmYWxzZSkge1xyXG5cdFx0XHRsb2coJ2FqYXhTdWJtaXQ6IHN1Ym1pdCBhYm9ydGVkIHZpYSBiZWZvcmVTdWJtaXQgY2FsbGJhY2snKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZmlyZSB2ZXRvYWJsZSAndmFsaWRhdGUnIGV2ZW50XHJcblx0XHR0aGlzLnRyaWdnZXIoJ2Zvcm0tc3VibWl0LXZhbGlkYXRlJywgW2EsIHRoaXMsIG9wdGlvbnMsIHZldG9dKTtcclxuXHRcdGlmICh2ZXRvLnZldG8pIHtcclxuXHRcdFx0bG9nKCdhamF4U3VibWl0OiBzdWJtaXQgdmV0b2VkIHZpYSBmb3JtLXN1Ym1pdC12YWxpZGF0ZSB0cmlnZ2VyJyk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBxID0gJC5wYXJhbShhLCB0cmFkaXRpb25hbCk7XHJcblx0XHRpZiAocXgpIHtcclxuXHRcdFx0cSA9ICggcSA/IChxICsgJyYnICsgcXgpIDogcXggKTtcclxuXHRcdH1cclxuXHRcdGlmIChvcHRpb25zLnR5cGUudG9VcHBlckNhc2UoKSA9PSAnR0VUJykge1xyXG5cdFx0XHRvcHRpb25zLnVybCArPSAob3B0aW9ucy51cmwuaW5kZXhPZignPycpID49IDAgPyAnJicgOiAnPycpICsgcTtcclxuXHRcdFx0b3B0aW9ucy5kYXRhID0gbnVsbDsgIC8vIGRhdGEgaXMgbnVsbCBmb3IgJ2dldCdcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRvcHRpb25zLmRhdGEgPSBxOyAvLyBkYXRhIGlzIHRoZSBxdWVyeSBzdHJpbmcgZm9yICdwb3N0J1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBjYWxsYmFja3MgPSBbXTtcclxuXHRcdGlmIChvcHRpb25zLnJlc2V0Rm9ybSkge1xyXG5cdFx0XHRjYWxsYmFja3MucHVzaChmdW5jdGlvbigpIHsgJGZvcm0ucmVzZXRGb3JtKCk7IH0pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG9wdGlvbnMuY2xlYXJGb3JtKSB7XHJcblx0XHRcdGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uKCkgeyAkZm9ybS5jbGVhckZvcm0ob3B0aW9ucy5pbmNsdWRlSGlkZGVuKTsgfSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcGVyZm9ybSBhIGxvYWQgb24gdGhlIHRhcmdldCBvbmx5IGlmIGRhdGFUeXBlIGlzIG5vdCBwcm92aWRlZFxyXG5cdFx0aWYgKCFvcHRpb25zLmRhdGFUeXBlICYmIG9wdGlvbnMudGFyZ2V0KSB7XHJcblx0XHRcdHZhciBvbGRTdWNjZXNzID0gb3B0aW9ucy5zdWNjZXNzIHx8IGZ1bmN0aW9uKCl7fTtcclxuXHRcdFx0Y2FsbGJhY2tzLnB1c2goZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdHZhciBmbiA9IG9wdGlvbnMucmVwbGFjZVRhcmdldCA/ICdyZXBsYWNlV2l0aCcgOiAnaHRtbCc7XHJcblx0XHRcdFx0JChvcHRpb25zLnRhcmdldClbZm5dKGRhdGEpLmVhY2gob2xkU3VjY2VzcywgYXJndW1lbnRzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcclxuXHRcdFx0Y2FsbGJhY2tzLnB1c2gob3B0aW9ucy5zdWNjZXNzKTtcclxuXHRcdH1cclxuXHJcblx0XHRvcHRpb25zLnN1Y2Nlc3MgPSBmdW5jdGlvbihkYXRhLCBzdGF0dXMsIHhocikgeyAvLyBqUXVlcnkgMS40KyBwYXNzZXMgeGhyIGFzIDNyZCBhcmdcclxuXHRcdFx0dmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgfHwgdGhpcyA7ICAgIC8vIGpRdWVyeSAxLjQrIHN1cHBvcnRzIHNjb3BlIGNvbnRleHRcclxuXHRcdFx0Zm9yICh2YXIgaT0wLCBtYXg9Y2FsbGJhY2tzLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2tzW2ldLmFwcGx5KGNvbnRleHQsIFtkYXRhLCBzdGF0dXMsIHhociB8fCAkZm9ybSwgJGZvcm1dKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAob3B0aW9ucy5lcnJvcikge1xyXG5cdFx0XHR2YXIgb2xkRXJyb3IgPSBvcHRpb25zLmVycm9yO1xyXG5cdFx0XHRvcHRpb25zLmVycm9yID0gZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcblx0XHRcdFx0dmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgfHwgdGhpcztcclxuXHRcdFx0XHRvbGRFcnJvci5hcHBseShjb250ZXh0LCBbeGhyLCBzdGF0dXMsIGVycm9yLCAkZm9ybV0pO1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdCBpZiAob3B0aW9ucy5jb21wbGV0ZSkge1xyXG5cdFx0XHR2YXIgb2xkQ29tcGxldGUgPSBvcHRpb25zLmNvbXBsZXRlO1xyXG5cdFx0XHRvcHRpb25zLmNvbXBsZXRlID0gZnVuY3Rpb24oeGhyLCBzdGF0dXMpIHtcclxuXHRcdFx0XHR2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCB8fCB0aGlzO1xyXG5cdFx0XHRcdG9sZENvbXBsZXRlLmFwcGx5KGNvbnRleHQsIFt4aHIsIHN0YXR1cywgJGZvcm1dKTtcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBhcmUgdGhlcmUgZmlsZXMgdG8gdXBsb2FkP1xyXG5cclxuXHRcdC8vIFt2YWx1ZV0gKGlzc3VlICMxMTMpLCBhbHNvIHNlZSBjb21tZW50OlxyXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL21hbHN1cC9mb3JtL2NvbW1pdC81ODgzMDZhZWRiYTFkZTAxMzg4MDMyZDVmNDJhNjAxNTllZWE5MjI4I2NvbW1pdGNvbW1lbnQtMjE4MDIxOVxyXG5cdFx0dmFyIGZpbGVJbnB1dHMgPSAkKCdpbnB1dFt0eXBlPWZpbGVdOmVuYWJsZWQnLCB0aGlzKS5maWx0ZXIoZnVuY3Rpb24oKSB7IHJldHVybiAkKHRoaXMpLnZhbCgpICE9PSAnJzsgfSk7XHJcblxyXG5cdFx0dmFyIGhhc0ZpbGVJbnB1dHMgPSBmaWxlSW5wdXRzLmxlbmd0aCA+IDA7XHJcblx0XHR2YXIgbXAgPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XHJcblx0XHR2YXIgbXVsdGlwYXJ0ID0gKCRmb3JtLmF0dHIoJ2VuY3R5cGUnKSA9PSBtcCB8fCAkZm9ybS5hdHRyKCdlbmNvZGluZycpID09IG1wKTtcclxuXHJcblx0XHR2YXIgZmlsZUFQSSA9IGZlYXR1cmUuZmlsZWFwaSAmJiBmZWF0dXJlLmZvcm1kYXRhO1xyXG5cdFx0bG9nKFwiZmlsZUFQSSA6XCIgKyBmaWxlQVBJKTtcclxuXHRcdHZhciBzaG91bGRVc2VGcmFtZSA9IChoYXNGaWxlSW5wdXRzIHx8IG11bHRpcGFydCkgJiYgIWZpbGVBUEk7XHJcblxyXG5cdFx0dmFyIGpxeGhyO1xyXG5cclxuXHRcdC8vIG9wdGlvbnMuaWZyYW1lIGFsbG93cyB1c2VyIHRvIGZvcmNlIGlmcmFtZSBtb2RlXHJcblx0XHQvLyAwNi1OT1YtMDk6IG5vdyBkZWZhdWx0aW5nIHRvIGlmcmFtZSBtb2RlIGlmIGZpbGUgaW5wdXQgaXMgZGV0ZWN0ZWRcclxuXHRcdGlmIChvcHRpb25zLmlmcmFtZSAhPT0gZmFsc2UgJiYgKG9wdGlvbnMuaWZyYW1lIHx8IHNob3VsZFVzZUZyYW1lKSkge1xyXG5cdFx0XHQvLyBoYWNrIHRvIGZpeCBTYWZhcmkgaGFuZyAodGhhbmtzIHRvIFRpbSBNb2xlbmRpamsgZm9yIHRoaXMpXHJcblx0XHRcdC8vIHNlZTogIGh0dHA6Ly9ncm91cHMuZ29vZ2xlLmNvbS9ncm91cC9qcXVlcnktZGV2L2Jyb3dzZV90aHJlYWQvdGhyZWFkLzM2Mzk1YjdhYjUxMGRkNWRcclxuXHRcdFx0aWYgKG9wdGlvbnMuY2xvc2VLZWVwQWxpdmUpIHtcclxuXHRcdFx0XHQkLmdldChvcHRpb25zLmNsb3NlS2VlcEFsaXZlLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGpxeGhyID0gZmlsZVVwbG9hZElmcmFtZShhKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRqcXhociA9IGZpbGVVcGxvYWRJZnJhbWUoYSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKChoYXNGaWxlSW5wdXRzIHx8IG11bHRpcGFydCkgJiYgZmlsZUFQSSkge1xyXG5cdFx0XHRqcXhociA9IGZpbGVVcGxvYWRYaHIoYSk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0anF4aHIgPSAkLmFqYXgob3B0aW9ucyk7XHJcblx0XHR9XHJcblxyXG5cdFx0JGZvcm0ucmVtb3ZlRGF0YSgnanF4aHInKS5kYXRhKCdqcXhocicsIGpxeGhyKTtcclxuXHJcblx0XHQvLyBjbGVhciBlbGVtZW50IGFycmF5XHJcblx0XHRmb3IgKHZhciBrPTA7IGsgPCBlbGVtZW50cy5sZW5ndGg7IGsrKylcclxuXHRcdFx0ZWxlbWVudHNba10gPSBudWxsO1xyXG5cclxuXHRcdC8vIGZpcmUgJ25vdGlmeScgZXZlbnRcclxuXHRcdHRoaXMudHJpZ2dlcignZm9ybS1zdWJtaXQtbm90aWZ5JywgW3RoaXMsIG9wdGlvbnNdKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHRcdC8vIHV0aWxpdHkgZm4gZm9yIGRlZXAgc2VyaWFsaXphdGlvblxyXG5cdFx0ZnVuY3Rpb24gZGVlcFNlcmlhbGl6ZShleHRyYURhdGEpe1xyXG5cdFx0XHR2YXIgc2VyaWFsaXplZCA9ICQucGFyYW0oZXh0cmFEYXRhLCBvcHRpb25zLnRyYWRpdGlvbmFsKS5zcGxpdCgnJicpO1xyXG5cdFx0XHR2YXIgbGVuID0gc2VyaWFsaXplZC5sZW5ndGg7XHJcblx0XHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdFx0dmFyIGksIHBhcnQ7XHJcblx0XHRcdGZvciAoaT0wOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHQvLyAjMjUyOyB1bmRvIHBhcmFtIHNwYWNlIHJlcGxhY2VtZW50XHJcblx0XHRcdFx0c2VyaWFsaXplZFtpXSA9IHNlcmlhbGl6ZWRbaV0ucmVwbGFjZSgvXFwrL2csJyAnKTtcclxuXHRcdFx0XHRwYXJ0ID0gc2VyaWFsaXplZFtpXS5zcGxpdCgnPScpO1xyXG5cdFx0XHRcdC8vICMyNzg7IHVzZSBhcnJheSBpbnN0ZWFkIG9mIG9iamVjdCBzdG9yYWdlLCBmYXZvcmluZyBhcnJheSBzZXJpYWxpemF0aW9uc1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFtkZWNvZGVVUklDb21wb25lbnQocGFydFswXSksIGRlY29kZVVSSUNvbXBvbmVudChwYXJ0WzFdKV0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblxyXG5cdFx0IC8vIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIgZmlsZSB1cGxvYWRzIChiaWcgaGF0IHRpcCB0byBmcmFuY29pczJtZXR6KVxyXG5cdFx0ZnVuY3Rpb24gZmlsZVVwbG9hZFhocihhKSB7XHJcblx0XHRcdHZhciBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgaT0wOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGZvcm1kYXRhLmFwcGVuZChhW2ldLm5hbWUsIGFbaV0udmFsdWUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAob3B0aW9ucy5leHRyYURhdGEpIHtcclxuXHRcdFx0XHR2YXIgc2VyaWFsaXplZERhdGEgPSBkZWVwU2VyaWFsaXplKG9wdGlvbnMuZXh0cmFEYXRhKTtcclxuXHRcdFx0XHRmb3IgKGk9MDsgaSA8IHNlcmlhbGl6ZWREYXRhLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdFx0aWYgKHNlcmlhbGl6ZWREYXRhW2ldKVxyXG5cdFx0XHRcdFx0XHRmb3JtZGF0YS5hcHBlbmQoc2VyaWFsaXplZERhdGFbaV1bMF0sIHNlcmlhbGl6ZWREYXRhW2ldWzFdKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0b3B0aW9ucy5kYXRhID0gbnVsbDtcclxuXHJcblx0XHRcdHZhciBzID0gJC5leHRlbmQodHJ1ZSwge30sICQuYWpheFNldHRpbmdzLCBvcHRpb25zLCB7XHJcblx0XHRcdFx0Y29udGVudFR5cGU6IGZhbHNlLFxyXG5cdFx0XHRcdHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuXHRcdFx0XHRjYWNoZTogZmFsc2UsXHJcblx0XHRcdFx0dHlwZTogbWV0aG9kIHx8ICdQT1NUJ1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmIChvcHRpb25zLnVwbG9hZFByb2dyZXNzKSB7XHJcblx0XHRcdFx0Ly8gd29ya2Fyb3VuZCBiZWNhdXNlIGpxWEhSIGRvZXMgbm90IGV4cG9zZSB1cGxvYWQgcHJvcGVydHlcclxuXHRcdFx0XHRzLnhociA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dmFyIHhociA9ICQuYWpheFNldHRpbmdzLnhocigpO1xyXG5cdFx0XHRcdFx0aWYgKHhoci51cGxvYWQpIHtcclxuXHRcdFx0XHRcdFx0eGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHBlcmNlbnQgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBwb3NpdGlvbiA9IGV2ZW50LmxvYWRlZCB8fCBldmVudC5wb3NpdGlvbjsgLypldmVudC5wb3NpdGlvbiBpcyBkZXByZWNhdGVkKi9cclxuXHRcdFx0XHRcdFx0XHR2YXIgdG90YWwgPSBldmVudC50b3RhbDtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cGVyY2VudCA9IE1hdGguY2VpbChwb3NpdGlvbiAvIHRvdGFsICogMTAwKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0b3B0aW9ucy51cGxvYWRQcm9ncmVzcyhldmVudCwgcG9zaXRpb24sIHRvdGFsLCBwZXJjZW50KTtcclxuXHRcdFx0XHRcdFx0fSwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIHhocjtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzLmRhdGEgPSBudWxsO1xyXG5cdFx0XHR2YXIgYmVmb3JlU2VuZCA9IHMuYmVmb3JlU2VuZDtcclxuXHRcdFx0cy5iZWZvcmVTZW5kID0gZnVuY3Rpb24oeGhyLCBvKSB7XHJcblx0XHRcdFx0Ly9TZW5kIEZvcm1EYXRhKCkgcHJvdmlkZWQgYnkgdXNlclxyXG5cdFx0XHRcdGlmIChvcHRpb25zLmZvcm1EYXRhKVxyXG5cdFx0XHRcdFx0by5kYXRhID0gb3B0aW9ucy5mb3JtRGF0YTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRvLmRhdGEgPSBmb3JtZGF0YTtcclxuXHRcdFx0XHRpZihiZWZvcmVTZW5kKVxyXG5cdFx0XHRcdFx0YmVmb3JlU2VuZC5jYWxsKHRoaXMsIHhociwgbyk7XHJcblx0XHRcdH07XHJcblx0XHRcdHJldHVybiAkLmFqYXgocyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcHJpdmF0ZSBmdW5jdGlvbiBmb3IgaGFuZGxpbmcgZmlsZSB1cGxvYWRzIChoYXQgdGlwIHRvIFlBSE9PISlcclxuXHRcdGZ1bmN0aW9uIGZpbGVVcGxvYWRJZnJhbWUoYSkge1xyXG5cdFx0XHR2YXIgZm9ybSA9ICRmb3JtWzBdLCBlbCwgaSwgcywgZywgaWQsICRpbywgaW8sIHhociwgc3ViLCBuLCB0aW1lZE91dCwgdGltZW91dEhhbmRsZTtcclxuXHRcdFx0dmFyIGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xyXG5cclxuXHRcdFx0Ly8gIzM0MVxyXG5cdFx0XHRkZWZlcnJlZC5hYm9ydCA9IGZ1bmN0aW9uKHN0YXR1cykge1xyXG5cdFx0XHRcdHhoci5hYm9ydChzdGF0dXMpO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0aWYgKGEpIHtcclxuXHRcdFx0XHQvLyBlbnN1cmUgdGhhdCBldmVyeSBzZXJpYWxpemVkIGlucHV0IGlzIHN0aWxsIGVuYWJsZWRcclxuXHRcdFx0XHRmb3IgKGk9MDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRlbCA9ICQoZWxlbWVudHNbaV0pO1xyXG5cdFx0XHRcdFx0aWYgKCBoYXNQcm9wIClcclxuXHRcdFx0XHRcdFx0ZWwucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdGVsLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzID0gJC5leHRlbmQodHJ1ZSwge30sICQuYWpheFNldHRpbmdzLCBvcHRpb25zKTtcclxuXHRcdFx0cy5jb250ZXh0ID0gcy5jb250ZXh0IHx8IHM7XHJcblx0XHRcdGlkID0gJ2pxRm9ybUlPJyArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XHJcblx0XHRcdGlmIChzLmlmcmFtZVRhcmdldCkge1xyXG5cdFx0XHRcdCRpbyA9ICQocy5pZnJhbWVUYXJnZXQpO1xyXG5cdFx0XHRcdG4gPSAkaW8uYXR0cjIoJ25hbWUnKTtcclxuXHRcdFx0XHRpZiAoIW4pXHJcblx0XHRcdFx0XHQgJGlvLmF0dHIyKCduYW1lJywgaWQpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdGlkID0gbjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHQkaW8gPSAkKCc8aWZyYW1lIG5hbWU9XCInICsgaWQgKyAnXCIgc3JjPVwiJysgcy5pZnJhbWVTcmMgKydcIiAvPicpO1xyXG5cdFx0XHRcdCRpby5jc3MoeyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnLTEwMDBweCcsIGxlZnQ6ICctMTAwMHB4JyB9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpbyA9ICRpb1swXTtcclxuXHJcblxyXG5cdFx0XHR4aHIgPSB7IC8vIG1vY2sgb2JqZWN0XHJcblx0XHRcdFx0YWJvcnRlZDogMCxcclxuXHRcdFx0XHRyZXNwb25zZVRleHQ6IG51bGwsXHJcblx0XHRcdFx0cmVzcG9uc2VYTUw6IG51bGwsXHJcblx0XHRcdFx0c3RhdHVzOiAwLFxyXG5cdFx0XHRcdHN0YXR1c1RleHQ6ICduL2EnLFxyXG5cdFx0XHRcdGdldEFsbFJlc3BvbnNlSGVhZGVyczogZnVuY3Rpb24oKSB7fSxcclxuXHRcdFx0XHRnZXRSZXNwb25zZUhlYWRlcjogZnVuY3Rpb24oKSB7fSxcclxuXHRcdFx0XHRzZXRSZXF1ZXN0SGVhZGVyOiBmdW5jdGlvbigpIHt9LFxyXG5cdFx0XHRcdGFib3J0OiBmdW5jdGlvbihzdGF0dXMpIHtcclxuXHRcdFx0XHRcdHZhciBlID0gKHN0YXR1cyA9PT0gJ3RpbWVvdXQnID8gJ3RpbWVvdXQnIDogJ2Fib3J0ZWQnKTtcclxuXHRcdFx0XHRcdGxvZygnYWJvcnRpbmcgdXBsb2FkLi4uICcgKyBlKTtcclxuXHRcdFx0XHRcdHRoaXMuYWJvcnRlZCA9IDE7XHJcblxyXG5cdFx0XHRcdFx0dHJ5IHsgLy8gIzIxNCwgIzI1N1xyXG5cdFx0XHRcdFx0XHRpZiAoaW8uY29udGVudFdpbmRvdy5kb2N1bWVudC5leGVjQ29tbWFuZCkge1xyXG5cdFx0XHRcdFx0XHRcdGlvLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ1N0b3AnKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y2F0Y2goaWdub3JlKSB7fVxyXG5cclxuXHRcdFx0XHRcdCRpby5hdHRyKCdzcmMnLCBzLmlmcmFtZVNyYyk7IC8vIGFib3J0IG9wIGluIHByb2dyZXNzXHJcblx0XHRcdFx0XHR4aHIuZXJyb3IgPSBlO1xyXG5cdFx0XHRcdFx0aWYgKHMuZXJyb3IpXHJcblx0XHRcdFx0XHRcdHMuZXJyb3IuY2FsbChzLmNvbnRleHQsIHhociwgZSwgc3RhdHVzKTtcclxuXHRcdFx0XHRcdGlmIChnKVxyXG5cdFx0XHRcdFx0XHQkLmV2ZW50LnRyaWdnZXIoXCJhamF4RXJyb3JcIiwgW3hociwgcywgZV0pO1xyXG5cdFx0XHRcdFx0aWYgKHMuY29tcGxldGUpXHJcblx0XHRcdFx0XHRcdHMuY29tcGxldGUuY2FsbChzLmNvbnRleHQsIHhociwgZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0ZyA9IHMuZ2xvYmFsO1xyXG5cdFx0XHQvLyB0cmlnZ2VyIGFqYXggZ2xvYmFsIGV2ZW50cyBzbyB0aGF0IGFjdGl2aXR5L2Jsb2NrIGluZGljYXRvcnMgd29yayBsaWtlIG5vcm1hbFxyXG5cdFx0XHRpZiAoZyAmJiAwID09PSAkLmFjdGl2ZSsrKSB7XHJcblx0XHRcdFx0JC5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChnKSB7XHJcblx0XHRcdFx0JC5ldmVudC50cmlnZ2VyKFwiYWpheFNlbmRcIiwgW3hociwgc10pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAocy5iZWZvcmVTZW5kICYmIHMuYmVmb3JlU2VuZC5jYWxsKHMuY29udGV4dCwgeGhyLCBzKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRpZiAocy5nbG9iYWwpIHtcclxuXHRcdFx0XHRcdCQuYWN0aXZlLS07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGRlZmVycmVkLnJlamVjdCgpO1xyXG5cdFx0XHRcdHJldHVybiBkZWZlcnJlZDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoeGhyLmFib3J0ZWQpIHtcclxuXHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoKTtcclxuXHRcdFx0XHRyZXR1cm4gZGVmZXJyZWQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGFkZCBzdWJtaXR0aW5nIGVsZW1lbnQgdG8gZGF0YSBpZiB3ZSBrbm93IGl0XHJcblx0XHRcdHN1YiA9IGZvcm0uY2xrO1xyXG5cdFx0XHRpZiAoc3ViKSB7XHJcblx0XHRcdFx0biA9IHN1Yi5uYW1lO1xyXG5cdFx0XHRcdGlmIChuICYmICFzdWIuZGlzYWJsZWQpIHtcclxuXHRcdFx0XHRcdHMuZXh0cmFEYXRhID0gcy5leHRyYURhdGEgfHwge307XHJcblx0XHRcdFx0XHRzLmV4dHJhRGF0YVtuXSA9IHN1Yi52YWx1ZTtcclxuXHRcdFx0XHRcdGlmIChzdWIudHlwZSA9PSBcImltYWdlXCIpIHtcclxuXHRcdFx0XHRcdFx0cy5leHRyYURhdGFbbisnLngnXSA9IGZvcm0uY2xrX3g7XHJcblx0XHRcdFx0XHRcdHMuZXh0cmFEYXRhW24rJy55J10gPSBmb3JtLmNsa195O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIENMSUVOVF9USU1FT1VUX0FCT1JUID0gMTtcclxuXHRcdFx0dmFyIFNFUlZFUl9BQk9SVCA9IDI7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gZ2V0RG9jKGZyYW1lKSB7XHJcblx0XHRcdFx0LyogaXQgbG9va3MgbGlrZSBjb250ZW50V2luZG93IG9yIGNvbnRlbnREb2N1bWVudCBkbyBub3RcclxuXHRcdFx0XHQgKiBjYXJyeSB0aGUgcHJvdG9jb2wgcHJvcGVydHkgaW4gaWU4LCB3aGVuIHJ1bm5pbmcgdW5kZXIgc3NsXHJcblx0XHRcdFx0ICogZnJhbWUuZG9jdW1lbnQgaXMgdGhlIG9ubHkgdmFsaWQgcmVzcG9uc2UgZG9jdW1lbnQsIHNpbmNlXHJcblx0XHRcdFx0ICogdGhlIHByb3RvY29sIGlzIGtub3cgYnV0IG5vdCBvbiB0aGUgb3RoZXIgdHdvIG9iamVjdHMuIHN0cmFuZ2U/XHJcblx0XHRcdFx0ICogXCJTYW1lIG9yaWdpbiBwb2xpY3lcIiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NhbWVfb3JpZ2luX3BvbGljeVxyXG5cdFx0XHRcdCAqL1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHZhciBkb2MgPSBudWxsO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIElFOCBjYXNjYWRpbmcgYWNjZXNzIGNoZWNrXHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGlmIChmcmFtZS5jb250ZW50V2luZG93KSB7XHJcblx0XHRcdFx0XHRcdGRvYyA9IGZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBjYXRjaChlcnIpIHtcclxuXHRcdFx0XHRcdC8vIElFOCBhY2Nlc3MgZGVuaWVkIHVuZGVyIHNzbCAmIG1pc3NpbmcgcHJvdG9jb2xcclxuXHRcdFx0XHRcdGxvZygnY2Fubm90IGdldCBpZnJhbWUuY29udGVudFdpbmRvdyBkb2N1bWVudDogJyArIGVycik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoZG9jKSB7IC8vIHN1Y2Nlc3NmdWwgZ2V0dGluZyBjb250ZW50XHJcblx0XHRcdFx0XHRyZXR1cm4gZG9jO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dHJ5IHsgLy8gc2ltcGx5IGNoZWNraW5nIG1heSB0aHJvdyBpbiBpZTggdW5kZXIgc3NsIG9yIG1pc21hdGNoZWQgcHJvdG9jb2xcclxuXHRcdFx0XHRcdGRvYyA9IGZyYW1lLmNvbnRlbnREb2N1bWVudCA/IGZyYW1lLmNvbnRlbnREb2N1bWVudCA6IGZyYW1lLmRvY3VtZW50O1xyXG5cdFx0XHRcdH0gY2F0Y2goZXJyKSB7XHJcblx0XHRcdFx0XHQvLyBsYXN0IGF0dGVtcHRcclxuXHRcdFx0XHRcdGxvZygnY2Fubm90IGdldCBpZnJhbWUuY29udGVudERvY3VtZW50OiAnICsgZXJyKTtcclxuXHRcdFx0XHRcdGRvYyA9IGZyYW1lLmRvY3VtZW50O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZG9jO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBSYWlscyBDU1JGIGhhY2sgKHRoYW5rcyB0byBZdmFuIEJhcnRoZWxlbXkpXHJcblx0XHRcdHZhciBjc3JmX3Rva2VuID0gJCgnbWV0YVtuYW1lPWNzcmYtdG9rZW5dJykuYXR0cignY29udGVudCcpO1xyXG5cdFx0XHR2YXIgY3NyZl9wYXJhbSA9ICQoJ21ldGFbbmFtZT1jc3JmLXBhcmFtXScpLmF0dHIoJ2NvbnRlbnQnKTtcclxuXHRcdFx0aWYgKGNzcmZfcGFyYW0gJiYgY3NyZl90b2tlbikge1xyXG5cdFx0XHRcdHMuZXh0cmFEYXRhID0gcy5leHRyYURhdGEgfHwge307XHJcblx0XHRcdFx0cy5leHRyYURhdGFbY3NyZl9wYXJhbV0gPSBjc3JmX3Rva2VuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyB0YWtlIGEgYnJlYXRoIHNvIHRoYXQgcGVuZGluZyByZXBhaW50cyBnZXQgc29tZSBjcHUgdGltZSBiZWZvcmUgdGhlIHVwbG9hZCBzdGFydHNcclxuXHRcdFx0ZnVuY3Rpb24gZG9TdWJtaXQoKSB7XHJcblx0XHRcdFx0Ly8gbWFrZSBzdXJlIGZvcm0gYXR0cnMgYXJlIHNldFxyXG5cdFx0XHRcdHZhciB0ID0gJGZvcm0uYXR0cjIoJ3RhcmdldCcpLCBhID0gJGZvcm0uYXR0cjIoJ2FjdGlvbicpO1xyXG5cclxuXHRcdFx0XHQvLyB1cGRhdGUgZm9ybSBhdHRycyBpbiBJRSBmcmllbmRseSB3YXlcclxuXHRcdFx0XHRmb3JtLnNldEF0dHJpYnV0ZSgndGFyZ2V0JyxpZCk7XHJcblx0XHRcdFx0aWYgKCFtZXRob2QgfHwgL3Bvc3QvaS50ZXN0KG1ldGhvZCkgKSB7XHJcblx0XHRcdFx0XHRmb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ1BPU1QnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGEgIT0gcy51cmwpIHtcclxuXHRcdFx0XHRcdGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCBzLnVybCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBpZSBib3JrcyBpbiBzb21lIGNhc2VzIHdoZW4gc2V0dGluZyBlbmNvZGluZ1xyXG5cdFx0XHRcdGlmICghIHMuc2tpcEVuY29kaW5nT3ZlcnJpZGUgJiYgKCFtZXRob2QgfHwgL3Bvc3QvaS50ZXN0KG1ldGhvZCkpKSB7XHJcblx0XHRcdFx0XHQkZm9ybS5hdHRyKHtcclxuXHRcdFx0XHRcdFx0ZW5jb2Rpbmc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuXHRcdFx0XHRcdFx0ZW5jdHlwZTogICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBzdXBwb3J0IHRpbW91dFxyXG5cdFx0XHRcdGlmIChzLnRpbWVvdXQpIHtcclxuXHRcdFx0XHRcdHRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0aW1lZE91dCA9IHRydWU7IGNiKENMSUVOVF9USU1FT1VUX0FCT1JUKTsgfSwgcy50aW1lb3V0KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGxvb2sgZm9yIHNlcnZlciBhYm9ydHNcclxuXHRcdFx0XHRmdW5jdGlvbiBjaGVja1N0YXRlKCkge1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0dmFyIHN0YXRlID0gZ2V0RG9jKGlvKS5yZWFkeVN0YXRlO1xyXG5cdFx0XHRcdFx0XHRsb2coJ3N0YXRlID0gJyArIHN0YXRlKTtcclxuXHRcdFx0XHRcdFx0aWYgKHN0YXRlICYmIHN0YXRlLnRvTG93ZXJDYXNlKCkgPT0gJ3VuaW5pdGlhbGl6ZWQnKVxyXG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0ZSw1MCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYXRjaChlKSB7XHJcblx0XHRcdFx0XHRcdGxvZygnU2VydmVyIGFib3J0OiAnICwgZSwgJyAoJywgZS5uYW1lLCAnKScpO1xyXG5cdFx0XHRcdFx0XHRjYihTRVJWRVJfQUJPUlQpO1xyXG5cdFx0XHRcdFx0XHRpZiAodGltZW91dEhhbmRsZSlcclxuXHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZSk7XHJcblx0XHRcdFx0XHRcdHRpbWVvdXRIYW5kbGUgPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBhZGQgXCJleHRyYVwiIGRhdGEgdG8gZm9ybSBpZiBwcm92aWRlZCBpbiBvcHRpb25zXHJcblx0XHRcdFx0dmFyIGV4dHJhSW5wdXRzID0gW107XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGlmIChzLmV4dHJhRGF0YSkge1xyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBuIGluIHMuZXh0cmFEYXRhKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHMuZXh0cmFEYXRhLmhhc093blByb3BlcnR5KG4pKSB7XHJcblx0XHRcdFx0XHRcdFx0ICAgLy8gaWYgdXNpbmcgdGhlICQucGFyYW0gZm9ybWF0IHRoYXQgYWxsb3dzIGZvciBtdWx0aXBsZSB2YWx1ZXMgd2l0aCB0aGUgc2FtZSBuYW1lXHJcblx0XHRcdFx0XHRcdFx0ICAgaWYoJC5pc1BsYWluT2JqZWN0KHMuZXh0cmFEYXRhW25dKSAmJiBzLmV4dHJhRGF0YVtuXS5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpICYmIHMuZXh0cmFEYXRhW25dLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQgICBleHRyYUlucHV0cy5wdXNoKFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiJytzLmV4dHJhRGF0YVtuXS5uYW1lKydcIj4nKS52YWwocy5leHRyYURhdGFbbl0udmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgIC5hcHBlbmRUbyhmb3JtKVswXSk7XHJcblx0XHRcdFx0XHRcdFx0ICAgfSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgIGV4dHJhSW5wdXRzLnB1c2goXHJcblx0XHRcdFx0XHRcdFx0XHQgICAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCInK24rJ1wiPicpLnZhbChzLmV4dHJhRGF0YVtuXSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgLmFwcGVuZFRvKGZvcm0pWzBdKTtcclxuXHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKCFzLmlmcmFtZVRhcmdldCkge1xyXG5cdFx0XHRcdFx0XHQvLyBhZGQgaWZyYW1lIHRvIGRvYyBhbmQgc3VibWl0IHRoZSBmb3JtXHJcblx0XHRcdFx0XHRcdCRpby5hcHBlbmRUbygnYm9keScpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKGlvLmF0dGFjaEV2ZW50KVxyXG5cdFx0XHRcdFx0XHRpby5hdHRhY2hFdmVudCgnb25sb2FkJywgY2IpO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRpby5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2IsIGZhbHNlKTtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0ZSwxNSk7XHJcblxyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0Zm9ybS5zdWJtaXQoKTtcclxuXHRcdFx0XHRcdH0gY2F0Y2goZXJyKSB7XHJcblx0XHRcdFx0XHRcdC8vIGp1c3QgaW4gY2FzZSBmb3JtIGhhcyBlbGVtZW50IHdpdGggbmFtZS9pZCBvZiAnc3VibWl0J1xyXG5cdFx0XHRcdFx0XHR2YXIgc3VibWl0Rm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJykuc3VibWl0O1xyXG5cdFx0XHRcdFx0XHRzdWJtaXRGbi5hcHBseShmb3JtKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZmluYWxseSB7XHJcblx0XHRcdFx0XHQvLyByZXNldCBhdHRycyBhbmQgcmVtb3ZlIFwiZXh0cmFcIiBpbnB1dCBlbGVtZW50c1xyXG5cdFx0XHRcdFx0Zm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsYSk7XHJcblx0XHRcdFx0XHRpZih0KSB7XHJcblx0XHRcdFx0XHRcdGZvcm0uc2V0QXR0cmlidXRlKCd0YXJnZXQnLCB0KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdCRmb3JtLnJlbW92ZUF0dHIoJ3RhcmdldCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0JChleHRyYUlucHV0cykucmVtb3ZlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAocy5mb3JjZVN5bmMpIHtcclxuXHRcdFx0XHRkb1N1Ym1pdCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZG9TdWJtaXQsIDEwKTsgLy8gdGhpcyBsZXRzIGRvbSB1cGRhdGVzIHJlbmRlclxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgZGF0YSwgZG9jLCBkb21DaGVja0NvdW50ID0gNTAsIGNhbGxiYWNrUHJvY2Vzc2VkO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gY2IoZSkge1xyXG5cdFx0XHRcdGlmICh4aHIuYWJvcnRlZCB8fCBjYWxsYmFja1Byb2Nlc3NlZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRkb2MgPSBnZXREb2MoaW8pO1xyXG5cdFx0XHRcdGlmKCFkb2MpIHtcclxuXHRcdFx0XHRcdGxvZygnY2Fubm90IGFjY2VzcyByZXNwb25zZSBkb2N1bWVudCcpO1xyXG5cdFx0XHRcdFx0ZSA9IFNFUlZFUl9BQk9SVDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGUgPT09IENMSUVOVF9USU1FT1VUX0FCT1JUICYmIHhocikge1xyXG5cdFx0XHRcdFx0eGhyLmFib3J0KCd0aW1lb3V0Jyk7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoeGhyLCAndGltZW91dCcpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChlID09IFNFUlZFUl9BQk9SVCAmJiB4aHIpIHtcclxuXHRcdFx0XHRcdHhoci5hYm9ydCgnc2VydmVyIGFib3J0Jyk7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoeGhyLCAnZXJyb3InLCAnc2VydmVyIGFib3J0Jyk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIWRvYyB8fCBkb2MubG9jYXRpb24uaHJlZiA9PSBzLmlmcmFtZVNyYykge1xyXG5cdFx0XHRcdFx0Ly8gcmVzcG9uc2Ugbm90IHJlY2VpdmVkIHlldFxyXG5cdFx0XHRcdFx0aWYgKCF0aW1lZE91dClcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoaW8uZGV0YWNoRXZlbnQpXHJcblx0XHRcdFx0XHRpby5kZXRhY2hFdmVudCgnb25sb2FkJywgY2IpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdGlvLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjYiwgZmFsc2UpO1xyXG5cclxuXHRcdFx0XHR2YXIgc3RhdHVzID0gJ3N1Y2Nlc3MnLCBlcnJNc2c7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGlmICh0aW1lZE91dCkge1xyXG5cdFx0XHRcdFx0XHR0aHJvdyAndGltZW91dCc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dmFyIGlzWG1sID0gcy5kYXRhVHlwZSA9PSAneG1sJyB8fCBkb2MuWE1MRG9jdW1lbnQgfHwgJC5pc1hNTERvYyhkb2MpO1xyXG5cdFx0XHRcdFx0bG9nKCdpc1htbD0nK2lzWG1sKTtcclxuXHRcdFx0XHRcdGlmICghaXNYbWwgJiYgd2luZG93Lm9wZXJhICYmIChkb2MuYm9keSA9PT0gbnVsbCB8fCAhZG9jLmJvZHkuaW5uZXJIVE1MKSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoLS1kb21DaGVja0NvdW50KSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gaW4gc29tZSBicm93c2VycyAoT3BlcmEpIHRoZSBpZnJhbWUgRE9NIGlzIG5vdCBhbHdheXMgdHJhdmVyc2FibGUgd2hlblxyXG5cdFx0XHRcdFx0XHRcdC8vIHRoZSBvbmxvYWQgY2FsbGJhY2sgZmlyZXMsIHNvIHdlIGxvb3AgYSBiaXQgdG8gYWNjb21tb2RhdGVcclxuXHRcdFx0XHRcdFx0XHRsb2coJ3JlcXVlaW5nIG9uTG9hZCBjYWxsYmFjaywgRE9NIG5vdCBhdmFpbGFibGUnKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGNiLCAyNTApO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyBsZXQgdGhpcyBmYWxsIHRocm91Z2ggYmVjYXVzZSBzZXJ2ZXIgcmVzcG9uc2UgY291bGQgYmUgYW4gZW1wdHkgZG9jdW1lbnRcclxuXHRcdFx0XHRcdFx0Ly9sb2coJ0NvdWxkIG5vdCBhY2Nlc3MgaWZyYW1lIERPTSBhZnRlciBtdXRpcGxlIHRyaWVzLicpO1xyXG5cdFx0XHRcdFx0XHQvL3Rocm93ICdET01FeGNlcHRpb246IG5vdCBhdmFpbGFibGUnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vbG9nKCdyZXNwb25zZSBkZXRlY3RlZCcpO1xyXG5cdFx0XHRcdFx0dmFyIGRvY1Jvb3QgPSBkb2MuYm9keSA/IGRvYy5ib2R5IDogZG9jLmRvY3VtZW50RWxlbWVudDtcclxuXHRcdFx0XHRcdHhoci5yZXNwb25zZVRleHQgPSBkb2NSb290ID8gZG9jUm9vdC5pbm5lckhUTUwgOiBudWxsO1xyXG5cdFx0XHRcdFx0eGhyLnJlc3BvbnNlWE1MID0gZG9jLlhNTERvY3VtZW50ID8gZG9jLlhNTERvY3VtZW50IDogZG9jO1xyXG5cdFx0XHRcdFx0aWYgKGlzWG1sKVxyXG5cdFx0XHRcdFx0XHRzLmRhdGFUeXBlID0gJ3htbCc7XHJcblx0XHRcdFx0XHR4aHIuZ2V0UmVzcG9uc2VIZWFkZXIgPSBmdW5jdGlvbihoZWFkZXIpe1xyXG5cdFx0XHRcdFx0XHR2YXIgaGVhZGVycyA9IHsnY29udGVudC10eXBlJzogcy5kYXRhVHlwZX07XHJcblx0XHRcdFx0XHRcdHJldHVybiBoZWFkZXJzW2hlYWRlci50b0xvd2VyQ2FzZSgpXTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHQvLyBzdXBwb3J0IGZvciBYSFIgJ3N0YXR1cycgJiAnc3RhdHVzVGV4dCcgZW11bGF0aW9uIDpcclxuXHRcdFx0XHRcdGlmIChkb2NSb290KSB7XHJcblx0XHRcdFx0XHRcdHhoci5zdGF0dXMgPSBOdW1iZXIoIGRvY1Jvb3QuZ2V0QXR0cmlidXRlKCdzdGF0dXMnKSApIHx8IHhoci5zdGF0dXM7XHJcblx0XHRcdFx0XHRcdHhoci5zdGF0dXNUZXh0ID0gZG9jUm9vdC5nZXRBdHRyaWJ1dGUoJ3N0YXR1c1RleHQnKSB8fCB4aHIuc3RhdHVzVGV4dDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR2YXIgZHQgPSAocy5kYXRhVHlwZSB8fCAnJykudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0XHRcdHZhciBzY3IgPSAvKGpzb258c2NyaXB0fHRleHQpLy50ZXN0KGR0KTtcclxuXHRcdFx0XHRcdGlmIChzY3IgfHwgcy50ZXh0YXJlYSkge1xyXG5cdFx0XHRcdFx0XHQvLyBzZWUgaWYgdXNlciBlbWJlZGRlZCByZXNwb25zZSBpbiB0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHR2YXIgdGEgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF07XHJcblx0XHRcdFx0XHRcdGlmICh0YSkge1xyXG5cdFx0XHRcdFx0XHRcdHhoci5yZXNwb25zZVRleHQgPSB0YS52YWx1ZTtcclxuXHRcdFx0XHRcdFx0XHQvLyBzdXBwb3J0IGZvciBYSFIgJ3N0YXR1cycgJiAnc3RhdHVzVGV4dCcgZW11bGF0aW9uIDpcclxuXHRcdFx0XHRcdFx0XHR4aHIuc3RhdHVzID0gTnVtYmVyKCB0YS5nZXRBdHRyaWJ1dGUoJ3N0YXR1cycpICkgfHwgeGhyLnN0YXR1cztcclxuXHRcdFx0XHRcdFx0XHR4aHIuc3RhdHVzVGV4dCA9IHRhLmdldEF0dHJpYnV0ZSgnc3RhdHVzVGV4dCcpIHx8IHhoci5zdGF0dXNUZXh0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2UgaWYgKHNjcikge1xyXG5cdFx0XHRcdFx0XHRcdC8vIGFjY291bnQgZm9yIGJyb3dzZXJzIGluamVjdGluZyBwcmUgYXJvdW5kIGpzb24gcmVzcG9uc2VcclxuXHRcdFx0XHRcdFx0XHR2YXIgcHJlID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdwcmUnKVswXTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgYiA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChwcmUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHhoci5yZXNwb25zZVRleHQgPSBwcmUudGV4dENvbnRlbnQgPyBwcmUudGV4dENvbnRlbnQgOiBwcmUuaW5uZXJUZXh0O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbHNlIGlmIChiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR4aHIucmVzcG9uc2VUZXh0ID0gYi50ZXh0Q29udGVudCA/IGIudGV4dENvbnRlbnQgOiBiLmlubmVyVGV4dDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYgKGR0ID09ICd4bWwnICYmICF4aHIucmVzcG9uc2VYTUwgJiYgeGhyLnJlc3BvbnNlVGV4dCkge1xyXG5cdFx0XHRcdFx0XHR4aHIucmVzcG9uc2VYTUwgPSB0b1htbCh4aHIucmVzcG9uc2VUZXh0KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRkYXRhID0gaHR0cERhdGEoeGhyLCBkdCwgcyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdHN0YXR1cyA9ICdwYXJzZXJlcnJvcic7XHJcblx0XHRcdFx0XHRcdHhoci5lcnJvciA9IGVyck1zZyA9IChlcnIgfHwgc3RhdHVzKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdFx0bG9nKCdlcnJvciBjYXVnaHQ6ICcsZXJyKTtcclxuXHRcdFx0XHRcdHN0YXR1cyA9ICdlcnJvcic7XHJcblx0XHRcdFx0XHR4aHIuZXJyb3IgPSBlcnJNc2cgPSAoZXJyIHx8IHN0YXR1cyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoeGhyLmFib3J0ZWQpIHtcclxuXHRcdFx0XHRcdGxvZygndXBsb2FkIGFib3J0ZWQnKTtcclxuXHRcdFx0XHRcdHN0YXR1cyA9IG51bGw7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoeGhyLnN0YXR1cykgeyAvLyB3ZSd2ZSBzZXQgeGhyLnN0YXR1c1xyXG5cdFx0XHRcdFx0c3RhdHVzID0gKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDAgfHwgeGhyLnN0YXR1cyA9PT0gMzA0KSA/ICdzdWNjZXNzJyA6ICdlcnJvcic7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBvcmRlcmluZyBvZiB0aGVzZSBjYWxsYmFja3MvdHJpZ2dlcnMgaXMgb2RkLCBidXQgdGhhdCdzIGhvdyAkLmFqYXggZG9lcyBpdFxyXG5cdFx0XHRcdGlmIChzdGF0dXMgPT09ICdzdWNjZXNzJykge1xyXG5cdFx0XHRcdFx0aWYgKHMuc3VjY2VzcylcclxuXHRcdFx0XHRcdFx0cy5zdWNjZXNzLmNhbGwocy5jb250ZXh0LCBkYXRhLCAnc3VjY2VzcycsIHhocik7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHhoci5yZXNwb25zZVRleHQsICdzdWNjZXNzJywgeGhyKTtcclxuXHRcdFx0XHRcdGlmIChnKVxyXG5cdFx0XHRcdFx0XHQkLmV2ZW50LnRyaWdnZXIoXCJhamF4U3VjY2Vzc1wiLCBbeGhyLCBzXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHN0YXR1cykge1xyXG5cdFx0XHRcdFx0aWYgKGVyck1zZyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0XHRlcnJNc2cgPSB4aHIuc3RhdHVzVGV4dDtcclxuXHRcdFx0XHRcdGlmIChzLmVycm9yKVxyXG5cdFx0XHRcdFx0XHRzLmVycm9yLmNhbGwocy5jb250ZXh0LCB4aHIsIHN0YXR1cywgZXJyTXNnKTtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdCh4aHIsICdlcnJvcicsIGVyck1zZyk7XHJcblx0XHRcdFx0XHRpZiAoZylcclxuXHRcdFx0XHRcdFx0JC5ldmVudC50cmlnZ2VyKFwiYWpheEVycm9yXCIsIFt4aHIsIHMsIGVyck1zZ10pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGcpXHJcblx0XHRcdFx0XHQkLmV2ZW50LnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIiwgW3hociwgc10pO1xyXG5cclxuXHRcdFx0XHRpZiAoZyAmJiAhIC0tJC5hY3RpdmUpIHtcclxuXHRcdFx0XHRcdCQuZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHMuY29tcGxldGUpXHJcblx0XHRcdFx0XHRzLmNvbXBsZXRlLmNhbGwocy5jb250ZXh0LCB4aHIsIHN0YXR1cyk7XHJcblxyXG5cdFx0XHRcdGNhbGxiYWNrUHJvY2Vzc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRpZiAocy50aW1lb3V0KVxyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXRIYW5kbGUpO1xyXG5cclxuXHRcdFx0XHQvLyBjbGVhbiB1cFxyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoIXMuaWZyYW1lVGFyZ2V0KVxyXG5cdFx0XHRcdFx0XHQkaW8ucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHRlbHNlICAvL2FkZGluZyBlbHNlIHRvIGNsZWFuIHVwIGV4aXN0aW5nIGlmcmFtZSByZXNwb25zZS5cclxuXHRcdFx0XHRcdFx0JGlvLmF0dHIoJ3NyYycsIHMuaWZyYW1lU3JjKTtcclxuXHRcdFx0XHRcdHhoci5yZXNwb25zZVhNTCA9IG51bGw7XHJcblx0XHRcdFx0fSwgMTAwKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIHRvWG1sID0gJC5wYXJzZVhNTCB8fCBmdW5jdGlvbihzLCBkb2MpIHsgLy8gdXNlIHBhcnNlWE1MIGlmIGF2YWlsYWJsZSAoalF1ZXJ5IDEuNSspXHJcblx0XHRcdFx0aWYgKHdpbmRvdy5BY3RpdmVYT2JqZWN0KSB7XHJcblx0XHRcdFx0XHRkb2MgPSBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTERPTScpO1xyXG5cdFx0XHRcdFx0ZG9jLmFzeW5jID0gJ2ZhbHNlJztcclxuXHRcdFx0XHRcdGRvYy5sb2FkWE1MKHMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdGRvYyA9IChuZXcgRE9NUGFyc2VyKCkpLnBhcnNlRnJvbVN0cmluZyhzLCAndGV4dC94bWwnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIChkb2MgJiYgZG9jLmRvY3VtZW50RWxlbWVudCAmJiBkb2MuZG9jdW1lbnRFbGVtZW50Lm5vZGVOYW1lICE9ICdwYXJzZXJlcnJvcicpID8gZG9jIDogbnVsbDtcclxuXHRcdFx0fTtcclxuXHRcdFx0dmFyIHBhcnNlSlNPTiA9ICQucGFyc2VKU09OIHx8IGZ1bmN0aW9uKHMpIHtcclxuXHRcdFx0XHQvKmpzbGludCBldmlsOnRydWUgKi9cclxuXHRcdFx0XHRyZXR1cm4gd2luZG93WydldmFsJ10oJygnICsgcyArICcpJyk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgaHR0cERhdGEgPSBmdW5jdGlvbiggeGhyLCB0eXBlLCBzICkgeyAvLyBtb3N0bHkgbGlmdGVkIGZyb20ganExLjQuNFxyXG5cclxuXHRcdFx0XHR2YXIgY3QgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ2NvbnRlbnQtdHlwZScpIHx8ICcnLFxyXG5cdFx0XHRcdFx0eG1sID0gdHlwZSA9PT0gJ3htbCcgfHwgIXR5cGUgJiYgY3QuaW5kZXhPZigneG1sJykgPj0gMCxcclxuXHRcdFx0XHRcdGRhdGEgPSB4bWwgPyB4aHIucmVzcG9uc2VYTUwgOiB4aHIucmVzcG9uc2VUZXh0O1xyXG5cclxuXHRcdFx0XHRpZiAoeG1sICYmIGRhdGEuZG9jdW1lbnRFbGVtZW50Lm5vZGVOYW1lID09PSAncGFyc2VyZXJyb3InKSB7XHJcblx0XHRcdFx0XHRpZiAoJC5lcnJvcilcclxuXHRcdFx0XHRcdFx0JC5lcnJvcigncGFyc2VyZXJyb3InKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHMgJiYgcy5kYXRhRmlsdGVyKSB7XHJcblx0XHRcdFx0XHRkYXRhID0gcy5kYXRhRmlsdGVyKGRhdGEsIHR5cGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0XHRpZiAodHlwZSA9PT0gJ2pzb24nIHx8ICF0eXBlICYmIGN0LmluZGV4T2YoJ2pzb24nKSA+PSAwKSB7XHJcblx0XHRcdFx0XHRcdGRhdGEgPSBwYXJzZUpTT04oZGF0YSk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGUgPT09IFwic2NyaXB0XCIgfHwgIXR5cGUgJiYgY3QuaW5kZXhPZihcImphdmFzY3JpcHRcIikgPj0gMCkge1xyXG5cdFx0XHRcdFx0XHQkLmdsb2JhbEV2YWwoZGF0YSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBkYXRhO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmV0dXJuIGRlZmVycmVkO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIGFqYXhGb3JtKCkgcHJvdmlkZXMgYSBtZWNoYW5pc20gZm9yIGZ1bGx5IGF1dG9tYXRpbmcgZm9ybSBzdWJtaXNzaW9uLlxyXG5cdCAqXHJcblx0ICogVGhlIGFkdmFudGFnZXMgb2YgdXNpbmcgdGhpcyBtZXRob2QgaW5zdGVhZCBvZiBhamF4U3VibWl0KCkgYXJlOlxyXG5cdCAqXHJcblx0ICogMTogVGhpcyBtZXRob2Qgd2lsbCBpbmNsdWRlIGNvb3JkaW5hdGVzIGZvciA8aW5wdXQgdHlwZT1cImltYWdlXCIgLz4gZWxlbWVudHMgKGlmIHRoZSBlbGVtZW50XHJcblx0ICogICAgaXMgdXNlZCB0byBzdWJtaXQgdGhlIGZvcm0pLlxyXG5cdCAqIDIuIFRoaXMgbWV0aG9kIHdpbGwgaW5jbHVkZSB0aGUgc3VibWl0IGVsZW1lbnQncyBuYW1lL3ZhbHVlIGRhdGEgKGZvciB0aGUgZWxlbWVudCB0aGF0IHdhc1xyXG5cdCAqICAgIHVzZWQgdG8gc3VibWl0IHRoZSBmb3JtKS5cclxuXHQgKiAzLiBUaGlzIG1ldGhvZCBiaW5kcyB0aGUgc3VibWl0KCkgbWV0aG9kIHRvIHRoZSBmb3JtIGZvciB5b3UuXHJcblx0ICpcclxuXHQgKiBUaGUgb3B0aW9ucyBhcmd1bWVudCBmb3IgYWpheEZvcm0gd29ya3MgZXhhY3RseSBhcyBpdCBkb2VzIGZvciBhamF4U3VibWl0LiAgYWpheEZvcm0gbWVyZWx5XHJcblx0ICogcGFzc2VzIHRoZSBvcHRpb25zIGFyZ3VtZW50IGFsb25nIGFmdGVyIHByb3Blcmx5IGJpbmRpbmcgZXZlbnRzIGZvciBzdWJtaXQgZWxlbWVudHMgYW5kXHJcblx0ICogdGhlIGZvcm0gaXRzZWxmLlxyXG5cdCAqL1xyXG5cdCQuZm4uYWpheEZvcm0gPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHRcdG9wdGlvbnMuZGVsZWdhdGlvbiA9IG9wdGlvbnMuZGVsZWdhdGlvbiAmJiAkLmlzRnVuY3Rpb24oJC5mbi5vbik7XHJcblxyXG5cdFx0Ly8gaW4galF1ZXJ5IDEuMysgd2UgY2FuIGZpeCBtaXN0YWtlcyB3aXRoIHRoZSByZWFkeSBzdGF0ZVxyXG5cdFx0aWYgKCFvcHRpb25zLmRlbGVnYXRpb24gJiYgdGhpcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0dmFyIG8gPSB7IHM6IHRoaXMuc2VsZWN0b3IsIGM6IHRoaXMuY29udGV4dCB9O1xyXG5cdFx0XHRpZiAoISQuaXNSZWFkeSAmJiBvLnMpIHtcclxuXHRcdFx0XHRsb2coJ0RPTSBub3QgcmVhZHksIHF1ZXVpbmcgYWpheEZvcm0nKTtcclxuXHRcdFx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0JChvLnMsby5jKS5hamF4Rm9ybShvcHRpb25zKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBpcyB5b3VyIERPTSByZWFkeT8gIGh0dHA6Ly9kb2NzLmpxdWVyeS5jb20vVHV0b3JpYWxzOkludHJvZHVjaW5nXyQoZG9jdW1lbnQpLnJlYWR5KClcclxuXHRcdFx0bG9nKCd0ZXJtaW5hdGluZzsgemVybyBlbGVtZW50cyBmb3VuZCBieSBzZWxlY3RvcicgKyAoJC5pc1JlYWR5ID8gJycgOiAnIChET00gbm90IHJlYWR5KScpKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBvcHRpb25zLmRlbGVnYXRpb24gKSB7XHJcblx0XHRcdCQoZG9jdW1lbnQpXHJcblx0XHRcdFx0Lm9mZignc3VibWl0LmZvcm0tcGx1Z2luJywgdGhpcy5zZWxlY3RvciwgZG9BamF4U3VibWl0KVxyXG5cdFx0XHRcdC5vZmYoJ2NsaWNrLmZvcm0tcGx1Z2luJywgdGhpcy5zZWxlY3RvciwgY2FwdHVyZVN1Ym1pdHRpbmdFbGVtZW50KVxyXG5cdFx0XHRcdC5vbignc3VibWl0LmZvcm0tcGx1Z2luJywgdGhpcy5zZWxlY3Rvciwgb3B0aW9ucywgZG9BamF4U3VibWl0KVxyXG5cdFx0XHRcdC5vbignY2xpY2suZm9ybS1wbHVnaW4nLCB0aGlzLnNlbGVjdG9yLCBvcHRpb25zLCBjYXB0dXJlU3VibWl0dGluZ0VsZW1lbnQpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5hamF4Rm9ybVVuYmluZCgpXHJcblx0XHRcdC5iaW5kKCdzdWJtaXQuZm9ybS1wbHVnaW4nLCBvcHRpb25zLCBkb0FqYXhTdWJtaXQpXHJcblx0XHRcdC5iaW5kKCdjbGljay5mb3JtLXBsdWdpbicsIG9wdGlvbnMsIGNhcHR1cmVTdWJtaXR0aW5nRWxlbWVudCk7XHJcblx0fTtcclxuXHJcblx0Ly8gcHJpdmF0ZSBldmVudCBoYW5kbGVyc1xyXG5cdGZ1bmN0aW9uIGRvQWpheFN1Ym1pdChlKSB7XHJcblx0XHQvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xyXG5cdFx0dmFyIG9wdGlvbnMgPSBlLmRhdGE7XHJcblx0XHRpZiAoIWUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHsgLy8gaWYgZXZlbnQgaGFzIGJlZW4gY2FuY2VsZWQsIGRvbid0IHByb2NlZWRcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHQkKGUudGFyZ2V0KS5hamF4U3VibWl0KG9wdGlvbnMpOyAvLyAjMzY1XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjYXB0dXJlU3VibWl0dGluZ0VsZW1lbnQoZSkge1xyXG5cdFx0Lypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cclxuXHRcdHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHRcdHZhciAkZWwgPSAkKHRhcmdldCk7XHJcblx0XHRpZiAoISgkZWwuaXMoXCJbdHlwZT1zdWJtaXRdLFt0eXBlPWltYWdlXVwiKSkpIHtcclxuXHRcdFx0Ly8gaXMgdGhpcyBhIGNoaWxkIGVsZW1lbnQgb2YgdGhlIHN1Ym1pdCBlbD8gIChleDogYSBzcGFuIHdpdGhpbiBhIGJ1dHRvbilcclxuXHRcdFx0dmFyIHQgPSAkZWwuY2xvc2VzdCgnW3R5cGU9c3VibWl0XScpO1xyXG5cdFx0XHRpZiAodC5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0dGFyZ2V0ID0gdFswXTtcclxuXHRcdH1cclxuXHRcdHZhciBmb3JtID0gdGhpcztcclxuXHRcdGZvcm0uY2xrID0gdGFyZ2V0O1xyXG5cdFx0aWYgKHRhcmdldC50eXBlID09ICdpbWFnZScpIHtcclxuXHRcdFx0aWYgKGUub2Zmc2V0WCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0Zm9ybS5jbGtfeCA9IGUub2Zmc2V0WDtcclxuXHRcdFx0XHRmb3JtLmNsa195ID0gZS5vZmZzZXRZO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiAkLmZuLm9mZnNldCA9PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0dmFyIG9mZnNldCA9ICRlbC5vZmZzZXQoKTtcclxuXHRcdFx0XHRmb3JtLmNsa194ID0gZS5wYWdlWCAtIG9mZnNldC5sZWZ0O1xyXG5cdFx0XHRcdGZvcm0uY2xrX3kgPSBlLnBhZ2VZIC0gb2Zmc2V0LnRvcDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRmb3JtLmNsa194ID0gZS5wYWdlWCAtIHRhcmdldC5vZmZzZXRMZWZ0O1xyXG5cdFx0XHRcdGZvcm0uY2xrX3kgPSBlLnBhZ2VZIC0gdGFyZ2V0Lm9mZnNldFRvcDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8gY2xlYXIgZm9ybSB2YXJzXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBmb3JtLmNsayA9IGZvcm0uY2xrX3ggPSBmb3JtLmNsa195ID0gbnVsbDsgfSwgMTAwKTtcclxuXHR9XHJcblxyXG5cclxuXHQvLyBhamF4Rm9ybVVuYmluZCB1bmJpbmRzIHRoZSBldmVudCBoYW5kbGVycyB0aGF0IHdlcmUgYm91bmQgYnkgYWpheEZvcm1cclxuXHQkLmZuLmFqYXhGb3JtVW5iaW5kID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy51bmJpbmQoJ3N1Ym1pdC5mb3JtLXBsdWdpbiBjbGljay5mb3JtLXBsdWdpbicpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIGZvcm1Ub0FycmF5KCkgZ2F0aGVycyBmb3JtIGVsZW1lbnQgZGF0YSBpbnRvIGFuIGFycmF5IG9mIG9iamVjdHMgdGhhdCBjYW5cclxuXHQgKiBiZSBwYXNzZWQgdG8gYW55IG9mIHRoZSBmb2xsb3dpbmcgYWpheCBmdW5jdGlvbnM6ICQuZ2V0LCAkLnBvc3QsIG9yIGxvYWQuXHJcblx0ICogRWFjaCBvYmplY3QgaW4gdGhlIGFycmF5IGhhcyBib3RoIGEgJ25hbWUnIGFuZCAndmFsdWUnIHByb3BlcnR5LiAgQW4gZXhhbXBsZSBvZlxyXG5cdCAqIGFuIGFycmF5IGZvciBhIHNpbXBsZSBsb2dpbiBmb3JtIG1pZ2h0IGJlOlxyXG5cdCAqXHJcblx0ICogWyB7IG5hbWU6ICd1c2VybmFtZScsIHZhbHVlOiAnanJlc2lnJyB9LCB7IG5hbWU6ICdwYXNzd29yZCcsIHZhbHVlOiAnc2VjcmV0JyB9IF1cclxuXHQgKlxyXG5cdCAqIEl0IGlzIHRoaXMgYXJyYXkgdGhhdCBpcyBwYXNzZWQgdG8gcHJlLXN1Ym1pdCBjYWxsYmFjayBmdW5jdGlvbnMgcHJvdmlkZWQgdG8gdGhlXHJcblx0ICogYWpheFN1Ym1pdCgpIGFuZCBhamF4Rm9ybSgpIG1ldGhvZHMuXHJcblx0ICovXHJcblx0JC5mbi5mb3JtVG9BcnJheSA9IGZ1bmN0aW9uKHNlbWFudGljLCBlbGVtZW50cykge1xyXG5cdFx0dmFyIGEgPSBbXTtcclxuXHRcdGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gYTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgZm9ybSA9IHRoaXNbMF07XHJcblx0XHR2YXIgZWxzID0gc2VtYW50aWMgPyBmb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykgOiBmb3JtLmVsZW1lbnRzO1xyXG5cdFx0aWYgKCFlbHMpIHtcclxuXHRcdFx0cmV0dXJuIGE7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGksaixuLHYsZWwsbWF4LGptYXg7XHJcblx0XHRmb3IoaT0wLCBtYXg9ZWxzLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XHJcblx0XHRcdGVsID0gZWxzW2ldO1xyXG5cdFx0XHRuID0gZWwubmFtZTtcclxuXHRcdFx0aWYgKCFuIHx8IGVsLmRpc2FibGVkKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChzZW1hbnRpYyAmJiBmb3JtLmNsayAmJiBlbC50eXBlID09IFwiaW1hZ2VcIikge1xyXG5cdFx0XHRcdC8vIGhhbmRsZSBpbWFnZSBpbnB1dHMgb24gdGhlIGZseSB3aGVuIHNlbWFudGljID09IHRydWVcclxuXHRcdFx0XHRpZihmb3JtLmNsayA9PSBlbCkge1xyXG5cdFx0XHRcdFx0YS5wdXNoKHtuYW1lOiBuLCB2YWx1ZTogJChlbCkudmFsKCksIHR5cGU6IGVsLnR5cGUgfSk7XHJcblx0XHRcdFx0XHRhLnB1c2goe25hbWU6IG4rJy54JywgdmFsdWU6IGZvcm0uY2xrX3h9LCB7bmFtZTogbisnLnknLCB2YWx1ZTogZm9ybS5jbGtfeX0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0diA9ICQuZmllbGRWYWx1ZShlbCwgdHJ1ZSk7XHJcblx0XHRcdGlmICh2ICYmIHYuY29uc3RydWN0b3IgPT0gQXJyYXkpIHtcclxuXHRcdFx0XHRpZiAoZWxlbWVudHMpXHJcblx0XHRcdFx0XHRlbGVtZW50cy5wdXNoKGVsKTtcclxuXHRcdFx0XHRmb3Ioaj0wLCBqbWF4PXYubGVuZ3RoOyBqIDwgam1heDsgaisrKSB7XHJcblx0XHRcdFx0XHRhLnB1c2goe25hbWU6IG4sIHZhbHVlOiB2W2pdfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGZlYXR1cmUuZmlsZWFwaSAmJiBlbC50eXBlID09ICdmaWxlJykge1xyXG5cdFx0XHRcdGlmIChlbGVtZW50cylcclxuXHRcdFx0XHRcdGVsZW1lbnRzLnB1c2goZWwpO1xyXG5cdFx0XHRcdHZhciBmaWxlcyA9IGVsLmZpbGVzO1xyXG5cdFx0XHRcdGlmIChmaWxlcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGZvciAoaj0wOyBqIDwgZmlsZXMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0YS5wdXNoKHtuYW1lOiBuLCB2YWx1ZTogZmlsZXNbal0sIHR5cGU6IGVsLnR5cGV9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHQvLyAjMTgwXHJcblx0XHRcdFx0XHRhLnB1c2goeyBuYW1lOiBuLCB2YWx1ZTogJycsIHR5cGU6IGVsLnR5cGUgfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHYgIT09IG51bGwgJiYgdHlwZW9mIHYgIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRpZiAoZWxlbWVudHMpXHJcblx0XHRcdFx0XHRlbGVtZW50cy5wdXNoKGVsKTtcclxuXHRcdFx0XHRhLnB1c2goe25hbWU6IG4sIHZhbHVlOiB2LCB0eXBlOiBlbC50eXBlLCByZXF1aXJlZDogZWwucmVxdWlyZWR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghc2VtYW50aWMgJiYgZm9ybS5jbGspIHtcclxuXHRcdFx0Ly8gaW5wdXQgdHlwZT09J2ltYWdlJyBhcmUgbm90IGZvdW5kIGluIGVsZW1lbnRzIGFycmF5ISBoYW5kbGUgaXQgaGVyZVxyXG5cdFx0XHR2YXIgJGlucHV0ID0gJChmb3JtLmNsayksIGlucHV0ID0gJGlucHV0WzBdO1xyXG5cdFx0XHRuID0gaW5wdXQubmFtZTtcclxuXHRcdFx0aWYgKG4gJiYgIWlucHV0LmRpc2FibGVkICYmIGlucHV0LnR5cGUgPT0gJ2ltYWdlJykge1xyXG5cdFx0XHRcdGEucHVzaCh7bmFtZTogbiwgdmFsdWU6ICRpbnB1dC52YWwoKX0pO1xyXG5cdFx0XHRcdGEucHVzaCh7bmFtZTogbisnLngnLCB2YWx1ZTogZm9ybS5jbGtfeH0sIHtuYW1lOiBuKycueScsIHZhbHVlOiBmb3JtLmNsa195fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBhO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNlcmlhbGl6ZXMgZm9ybSBkYXRhIGludG8gYSAnc3VibWl0dGFibGUnIHN0cmluZy4gVGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gYSBzdHJpbmdcclxuXHQgKiBpbiB0aGUgZm9ybWF0OiBuYW1lMT12YWx1ZTEmYW1wO25hbWUyPXZhbHVlMlxyXG5cdCAqL1xyXG5cdCQuZm4uZm9ybVNlcmlhbGl6ZSA9IGZ1bmN0aW9uKHNlbWFudGljKSB7XHJcblx0XHQvL2hhbmQgb2ZmIHRvIGpRdWVyeS5wYXJhbSBmb3IgcHJvcGVyIGVuY29kaW5nXHJcblx0XHRyZXR1cm4gJC5wYXJhbSh0aGlzLmZvcm1Ub0FycmF5KHNlbWFudGljKSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU2VyaWFsaXplcyBhbGwgZmllbGQgZWxlbWVudHMgaW4gdGhlIGpRdWVyeSBvYmplY3QgaW50byBhIHF1ZXJ5IHN0cmluZy5cclxuXHQgKiBUaGlzIG1ldGhvZCB3aWxsIHJldHVybiBhIHN0cmluZyBpbiB0aGUgZm9ybWF0OiBuYW1lMT12YWx1ZTEmYW1wO25hbWUyPXZhbHVlMlxyXG5cdCAqL1xyXG5cdCQuZm4uZmllbGRTZXJpYWxpemUgPSBmdW5jdGlvbihzdWNjZXNzZnVsKSB7XHJcblx0XHR2YXIgYSA9IFtdO1xyXG5cdFx0dGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgbiA9IHRoaXMubmFtZTtcclxuXHRcdFx0aWYgKCFuKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciB2ID0gJC5maWVsZFZhbHVlKHRoaXMsIHN1Y2Nlc3NmdWwpO1xyXG5cdFx0XHRpZiAodiAmJiB2LmNvbnN0cnVjdG9yID09IEFycmF5KSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaT0wLG1heD12Lmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XHJcblx0XHRcdFx0XHRhLnB1c2goe25hbWU6IG4sIHZhbHVlOiB2W2ldfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHYgIT09IG51bGwgJiYgdHlwZW9mIHYgIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRhLnB1c2goe25hbWU6IHRoaXMubmFtZSwgdmFsdWU6IHZ9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHQvL2hhbmQgb2ZmIHRvIGpRdWVyeS5wYXJhbSBmb3IgcHJvcGVyIGVuY29kaW5nXHJcblx0XHRyZXR1cm4gJC5wYXJhbShhKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSB2YWx1ZShzKSBvZiB0aGUgZWxlbWVudCBpbiB0aGUgbWF0Y2hlZCBzZXQuICBGb3IgZXhhbXBsZSwgY29uc2lkZXIgdGhlIGZvbGxvd2luZyBmb3JtOlxyXG5cdCAqXHJcblx0ICogIDxmb3JtPjxmaWVsZHNldD5cclxuXHQgKiAgICAgIDxpbnB1dCBuYW1lPVwiQVwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuXHQgKiAgICAgIDxpbnB1dCBuYW1lPVwiQVwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuXHQgKiAgICAgIDxpbnB1dCBuYW1lPVwiQlwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiQjFcIiAvPlxyXG5cdCAqICAgICAgPGlucHV0IG5hbWU9XCJCXCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJCMlwiLz5cclxuXHQgKiAgICAgIDxpbnB1dCBuYW1lPVwiQ1wiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiQzFcIiAvPlxyXG5cdCAqICAgICAgPGlucHV0IG5hbWU9XCJDXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJDMlwiIC8+XHJcblx0ICogIDwvZmllbGRzZXQ+PC9mb3JtPlxyXG5cdCAqXHJcblx0ICogIHZhciB2ID0gJCgnaW5wdXRbdHlwZT10ZXh0XScpLmZpZWxkVmFsdWUoKTtcclxuXHQgKiAgLy8gaWYgbm8gdmFsdWVzIGFyZSBlbnRlcmVkIGludG8gdGhlIHRleHQgaW5wdXRzXHJcblx0ICogIHYgPT0gWycnLCcnXVxyXG5cdCAqICAvLyBpZiB2YWx1ZXMgZW50ZXJlZCBpbnRvIHRoZSB0ZXh0IGlucHV0cyBhcmUgJ2ZvbycgYW5kICdiYXInXHJcblx0ICogIHYgPT0gWydmb28nLCdiYXInXVxyXG5cdCAqXHJcblx0ICogIHZhciB2ID0gJCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKS5maWVsZFZhbHVlKCk7XHJcblx0ICogIC8vIGlmIG5laXRoZXIgY2hlY2tib3ggaXMgY2hlY2tlZFxyXG5cdCAqICB2ID09PSB1bmRlZmluZWRcclxuXHQgKiAgLy8gaWYgYm90aCBjaGVja2JveGVzIGFyZSBjaGVja2VkXHJcblx0ICogIHYgPT0gWydCMScsICdCMiddXHJcblx0ICpcclxuXHQgKiAgdmFyIHYgPSAkKCdpbnB1dFt0eXBlPXJhZGlvXScpLmZpZWxkVmFsdWUoKTtcclxuXHQgKiAgLy8gaWYgbmVpdGhlciByYWRpbyBpcyBjaGVja2VkXHJcblx0ICogIHYgPT09IHVuZGVmaW5lZFxyXG5cdCAqICAvLyBpZiBmaXJzdCByYWRpbyBpcyBjaGVja2VkXHJcblx0ICogIHYgPT0gWydDMSddXHJcblx0ICpcclxuXHQgKiBUaGUgc3VjY2Vzc2Z1bCBhcmd1bWVudCBjb250cm9scyB3aGV0aGVyIG9yIG5vdCB0aGUgZmllbGQgZWxlbWVudCBtdXN0IGJlICdzdWNjZXNzZnVsJ1xyXG5cdCAqIChwZXIgaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDQvaW50ZXJhY3QvZm9ybXMuaHRtbCNzdWNjZXNzZnVsLWNvbnRyb2xzKS5cclxuXHQgKiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgc3VjY2Vzc2Z1bCBhcmd1bWVudCBpcyB0cnVlLiAgSWYgdGhpcyB2YWx1ZSBpcyBmYWxzZSB0aGUgdmFsdWUocylcclxuXHQgKiBmb3IgZWFjaCBlbGVtZW50IGlzIHJldHVybmVkLlxyXG5cdCAqXHJcblx0ICogTm90ZTogVGhpcyBtZXRob2QgKmFsd2F5cyogcmV0dXJucyBhbiBhcnJheS4gIElmIG5vIHZhbGlkIHZhbHVlIGNhbiBiZSBkZXRlcm1pbmVkIHRoZVxyXG5cdCAqICAgIGFycmF5IHdpbGwgYmUgZW1wdHksIG90aGVyd2lzZSBpdCB3aWxsIGNvbnRhaW4gb25lIG9yIG1vcmUgdmFsdWVzLlxyXG5cdCAqL1xyXG5cdCQuZm4uZmllbGRWYWx1ZSA9IGZ1bmN0aW9uKHN1Y2Nlc3NmdWwpIHtcclxuXHRcdGZvciAodmFyIHZhbD1bXSwgaT0wLCBtYXg9dGhpcy5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xyXG5cdFx0XHR2YXIgZWwgPSB0aGlzW2ldO1xyXG5cdFx0XHR2YXIgdiA9ICQuZmllbGRWYWx1ZShlbCwgc3VjY2Vzc2Z1bCk7XHJcblx0XHRcdGlmICh2ID09PSBudWxsIHx8IHR5cGVvZiB2ID09ICd1bmRlZmluZWQnIHx8ICh2LmNvbnN0cnVjdG9yID09IEFycmF5ICYmICF2Lmxlbmd0aCkpIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodi5jb25zdHJ1Y3RvciA9PSBBcnJheSlcclxuXHRcdFx0XHQkLm1lcmdlKHZhbCwgdik7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR2YWwucHVzaCh2KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB2YWw7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGZpZWxkIGVsZW1lbnQuXHJcblx0ICovXHJcblx0JC5maWVsZFZhbHVlID0gZnVuY3Rpb24oZWwsIHN1Y2Nlc3NmdWwpIHtcclxuXHRcdHZhciBuID0gZWwubmFtZSwgdCA9IGVsLnR5cGUsIHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdGlmIChzdWNjZXNzZnVsID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0c3VjY2Vzc2Z1bCA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHN1Y2Nlc3NmdWwgJiYgKCFuIHx8IGVsLmRpc2FibGVkIHx8IHQgPT0gJ3Jlc2V0JyB8fCB0ID09ICdidXR0b24nIHx8XHJcblx0XHRcdCh0ID09ICdjaGVja2JveCcgfHwgdCA9PSAncmFkaW8nKSAmJiAhZWwuY2hlY2tlZCB8fFxyXG5cdFx0XHQodCA9PSAnc3VibWl0JyB8fCB0ID09ICdpbWFnZScpICYmIGVsLmZvcm0gJiYgZWwuZm9ybS5jbGsgIT0gZWwgfHxcclxuXHRcdFx0dGFnID09ICdzZWxlY3QnICYmIGVsLnNlbGVjdGVkSW5kZXggPT0gLTEpKSB7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRhZyA9PSAnc2VsZWN0Jykge1xyXG5cdFx0XHR2YXIgaW5kZXggPSBlbC5zZWxlY3RlZEluZGV4O1xyXG5cdFx0XHRpZiAoaW5kZXggPCAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIGEgPSBbXSwgb3BzID0gZWwub3B0aW9ucztcclxuXHRcdFx0dmFyIG9uZSA9ICh0ID09ICdzZWxlY3Qtb25lJyk7XHJcblx0XHRcdHZhciBtYXggPSAob25lID8gaW5kZXgrMSA6IG9wcy5sZW5ndGgpO1xyXG5cdFx0XHRmb3IodmFyIGk9KG9uZSA/IGluZGV4IDogMCk7IGkgPCBtYXg7IGkrKykge1xyXG5cdFx0XHRcdHZhciBvcCA9IG9wc1tpXTtcclxuXHRcdFx0XHRpZiAob3Auc2VsZWN0ZWQpIHtcclxuXHRcdFx0XHRcdHZhciB2ID0gb3AudmFsdWU7XHJcblx0XHRcdFx0XHRpZiAoIXYpIHsgLy8gZXh0cmEgcGFpbiBmb3IgSUUuLi5cclxuXHRcdFx0XHRcdFx0diA9IChvcC5hdHRyaWJ1dGVzICYmIG9wLmF0dHJpYnV0ZXNbJ3ZhbHVlJ10gJiYgIShvcC5hdHRyaWJ1dGVzWyd2YWx1ZSddLnNwZWNpZmllZCkpID8gb3AudGV4dCA6IG9wLnZhbHVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKG9uZSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGEucHVzaCh2KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGE7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJChlbCkudmFsKCk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ2xlYXJzIHRoZSBmb3JtIGRhdGEuICBUYWtlcyB0aGUgZm9sbG93aW5nIGFjdGlvbnMgb24gdGhlIGZvcm0ncyBpbnB1dCBmaWVsZHM6XHJcblx0ICogIC0gaW5wdXQgdGV4dCBmaWVsZHMgd2lsbCBoYXZlIHRoZWlyICd2YWx1ZScgcHJvcGVydHkgc2V0IHRvIHRoZSBlbXB0eSBzdHJpbmdcclxuXHQgKiAgLSBzZWxlY3QgZWxlbWVudHMgd2lsbCBoYXZlIHRoZWlyICdzZWxlY3RlZEluZGV4JyBwcm9wZXJ0eSBzZXQgdG8gLTFcclxuXHQgKiAgLSBjaGVja2JveCBhbmQgcmFkaW8gaW5wdXRzIHdpbGwgaGF2ZSB0aGVpciAnY2hlY2tlZCcgcHJvcGVydHkgc2V0IHRvIGZhbHNlXHJcblx0ICogIC0gaW5wdXRzIG9mIHR5cGUgc3VibWl0LCBidXR0b24sIHJlc2V0LCBhbmQgaGlkZGVuIHdpbGwgKm5vdCogYmUgZWZmZWN0ZWRcclxuXHQgKiAgLSBidXR0b24gZWxlbWVudHMgd2lsbCAqbm90KiBiZSBlZmZlY3RlZFxyXG5cdCAqL1xyXG5cdCQuZm4uY2xlYXJGb3JtID0gZnVuY3Rpb24oaW5jbHVkZUhpZGRlbikge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnaW5wdXQsc2VsZWN0LHRleHRhcmVhJywgdGhpcykuY2xlYXJGaWVsZHMoaW5jbHVkZUhpZGRlbik7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBDbGVhcnMgdGhlIHNlbGVjdGVkIGZvcm0gZWxlbWVudHMuXHJcblx0ICovXHJcblx0JC5mbi5jbGVhckZpZWxkcyA9ICQuZm4uY2xlYXJJbnB1dHMgPSBmdW5jdGlvbihpbmNsdWRlSGlkZGVuKSB7XHJcblx0XHR2YXIgcmUgPSAvXig/OmNvbG9yfGRhdGV8ZGF0ZXRpbWV8ZW1haWx8bW9udGh8bnVtYmVyfHBhc3N3b3JkfHJhbmdlfHNlYXJjaHx0ZWx8dGV4dHx0aW1lfHVybHx3ZWVrKSQvaTsgLy8gJ2hpZGRlbicgaXMgbm90IGluIHRoaXMgbGlzdFxyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHQgPSB0aGlzLnR5cGUsIHRhZyA9IHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRpZiAocmUudGVzdCh0KSB8fCB0YWcgPT0gJ3RleHRhcmVhJykge1xyXG5cdFx0XHRcdHRoaXMudmFsdWUgPSAnJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0ID09ICdjaGVja2JveCcgfHwgdCA9PSAncmFkaW8nKSB7XHJcblx0XHRcdFx0dGhpcy5jaGVja2VkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGFnID09ICdzZWxlY3QnKSB7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZEluZGV4ID0gLTE7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodCA9PSBcImZpbGVcIikge1xyXG5cdFx0XHRcdGlmICgvTVNJRS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5yZXBsYWNlV2l0aCgkKHRoaXMpLmNsb25lKHRydWUpKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS52YWwoJycpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChpbmNsdWRlSGlkZGVuKSB7XHJcblx0XHRcdFx0Ly8gaW5jbHVkZUhpZGRlbiBjYW4gYmUgdGhlIHZhbHVlIHRydWUsIG9yIGl0IGNhbiBiZSBhIHNlbGVjdG9yIHN0cmluZ1xyXG5cdFx0XHRcdC8vIGluZGljYXRpbmcgYSBzcGVjaWFsIHRlc3Q7IGZvciBleGFtcGxlOlxyXG5cdFx0XHRcdC8vICAkKCcjbXlGb3JtJykuY2xlYXJGb3JtKCcuc3BlY2lhbDpoaWRkZW4nKVxyXG5cdFx0XHRcdC8vIHRoZSBhYm92ZSB3b3VsZCBjbGVhbiBoaWRkZW4gaW5wdXRzIHRoYXQgaGF2ZSB0aGUgY2xhc3Mgb2YgJ3NwZWNpYWwnXHJcblx0XHRcdFx0aWYgKCAoaW5jbHVkZUhpZGRlbiA9PT0gdHJ1ZSAmJiAvaGlkZGVuLy50ZXN0KHQpKSB8fFxyXG5cdFx0XHRcdFx0ICh0eXBlb2YgaW5jbHVkZUhpZGRlbiA9PSAnc3RyaW5nJyAmJiAkKHRoaXMpLmlzKGluY2x1ZGVIaWRkZW4pKSApXHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gJyc7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0cyB0aGUgZm9ybSBkYXRhLiAgQ2F1c2VzIGFsbCBmb3JtIGVsZW1lbnRzIHRvIGJlIHJlc2V0IHRvIHRoZWlyIG9yaWdpbmFsIHZhbHVlLlxyXG5cdCAqL1xyXG5cdCQuZm4ucmVzZXRGb3JtID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBndWFyZCBhZ2FpbnN0IGFuIGlucHV0IHdpdGggdGhlIG5hbWUgb2YgJ3Jlc2V0J1xyXG5cdFx0XHQvLyBub3RlIHRoYXQgSUUgcmVwb3J0cyB0aGUgcmVzZXQgZnVuY3Rpb24gYXMgYW4gJ29iamVjdCdcclxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnJlc2V0ID09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiB0aGlzLnJlc2V0ID09ICdvYmplY3QnICYmICF0aGlzLnJlc2V0Lm5vZGVUeXBlKSkge1xyXG5cdFx0XHRcdHRoaXMucmVzZXQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogRW5hYmxlcyBvciBkaXNhYmxlcyBhbnkgbWF0Y2hpbmcgZWxlbWVudHMuXHJcblx0ICovXHJcblx0JC5mbi5lbmFibGUgPSBmdW5jdGlvbihiKSB7XHJcblx0XHRpZiAoYiA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGIgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5kaXNhYmxlZCA9ICFiO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2tzL3VuY2hlY2tzIGFueSBtYXRjaGluZyBjaGVja2JveGVzIG9yIHJhZGlvIGJ1dHRvbnMgYW5kXHJcblx0ICogc2VsZWN0cy9kZXNlbGVjdHMgYW5kIG1hdGNoaW5nIG9wdGlvbiBlbGVtZW50cy5cclxuXHQgKi9cclxuXHQkLmZuLnNlbGVjdGVkID0gZnVuY3Rpb24oc2VsZWN0KSB7XHJcblx0XHRpZiAoc2VsZWN0ID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0c2VsZWN0ID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciB0ID0gdGhpcy50eXBlO1xyXG5cdFx0XHRpZiAodCA9PSAnY2hlY2tib3gnIHx8IHQgPT0gJ3JhZGlvJykge1xyXG5cdFx0XHRcdHRoaXMuY2hlY2tlZCA9IHNlbGVjdDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAnb3B0aW9uJykge1xyXG5cdFx0XHRcdHZhciAkc2VsID0gJCh0aGlzKS5wYXJlbnQoJ3NlbGVjdCcpO1xyXG5cdFx0XHRcdGlmIChzZWxlY3QgJiYgJHNlbFswXSAmJiAkc2VsWzBdLnR5cGUgPT0gJ3NlbGVjdC1vbmUnKSB7XHJcblx0XHRcdFx0XHQvLyBkZXNlbGVjdCBhbGwgb3RoZXIgb3B0aW9uc1xyXG5cdFx0XHRcdFx0JHNlbC5maW5kKCdvcHRpb24nKS5zZWxlY3RlZChmYWxzZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3Q7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSBkZWJ1ZyB2YXJcclxuXHQkLmZuLmFqYXhTdWJtaXQuZGVidWcgPSBmYWxzZTtcclxuXHJcblx0Ly8gaGVscGVyIGZuIGZvciBjb25zb2xlIGxvZ2dpbmdcclxuXHRmdW5jdGlvbiBsb2coKSB7XHJcblx0XHRpZiAoISQuZm4uYWpheFN1Ym1pdC5kZWJ1ZylcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0dmFyIG1zZyA9ICdbanF1ZXJ5LmZvcm1dICcgKyBBcnJheS5wcm90b3R5cGUuam9pbi5jYWxsKGFyZ3VtZW50cywnJyk7XHJcblx0XHRpZiAod2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUubG9nKSB7XHJcblx0XHRcdHdpbmRvdy5jb25zb2xlLmxvZyhtc2cpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAod2luZG93Lm9wZXJhICYmIHdpbmRvdy5vcGVyYS5wb3N0RXJyb3IpIHtcclxuXHRcdFx0d2luZG93Lm9wZXJhLnBvc3RFcnJvcihtc2cpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0fSkoICh0eXBlb2YoalF1ZXJ5KSAhPSAndW5kZWZpbmVkJykgPyBqUXVlcnkgOiB3aW5kb3cuWmVwdG8gKTtcclxuXHJcbi8vfSk7XHJcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWRoWldFdmFuTXZiR2xpTDJweGRXVnllVVp2Y20wdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJJaXdpWm1sc1pTSTZJbWRsYm1WeVlYUmxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdkwyUmxabWx1WlNobWRXNWpkR2x2YmloeVpYRjFhWEpsTENCbGVIQnZjblJ6TENCdGIyUjFiR1VwSUh0Y2NseHVYSFIyWVhJZ2FsRjFaWEo1SUQwZ0tIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnUHlCM2FXNWtiM2RiSnlRblhTQTZJSFI1Y0dWdlppQm5iRzlpWVd3Z0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5Qm5iRzlpWVd4Ykp5UW5YU0E2SUc1MWJHd3BPMXh5WEc1Y2RGeHlYRzVjZEM4cUlWeHlYRzVjZENBcUlHcFJkV1Z5ZVNCR2IzSnRJRkJzZFdkcGJseHlYRzVjZENBcUlIWmxjbk5wYjI0NklETXVORFV1TUMweU1ERXpMakV3TGpFM1hISmNibHgwSUNvZ1VtVnhkV2x5WlhNZ2FsRjFaWEo1SUhZeExqVWdiM0lnYkdGMFpYSmNjbHh1WEhRZ0tpQkRiM0I1Y21sbmFIUWdLR01wSURJd01UTWdUUzRnUVd4emRYQmNjbHh1WEhRZ0tpQkZlR0Z0Y0d4bGN5QmhibVFnWkc5amRXMWxiblJoZEdsdmJpQmhkRG9nYUhSMGNEb3ZMMjFoYkhOMWNDNWpiMjB2YW5GMVpYSjVMMlp2Y20wdlhISmNibHgwSUNvZ1VISnZhbVZqZENCeVpYQnZjMmwwYjNKNU9pQm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZiV0ZzYzNWd0wyWnZjbTFjY2x4dVhIUWdLaUJFZFdGc0lHeHBZMlZ1YzJWa0lIVnVaR1Z5SUhSb1pTQk5TVlFnWVc1a0lFZFFUQ0JzYVdObGJuTmxjeTVjY2x4dVhIUWdLaUJvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2YldGc2MzVndMMlp2Y20walkyOXdlWEpwWjJoMExXRnVaQzFzYVdObGJuTmxYSEpjYmx4MElDb3ZYSEpjYmx4MEx5cG5iRzlpWVd3Z1FXTjBhWFpsV0U5aWFtVmpkQ0FxTDF4eVhHNWNkRHNvWm5WdVkzUnBiMjRvSkNrZ2UxeHlYRzVjZEZ3aWRYTmxJSE4wY21samRGd2lPMXh5WEc1Y2NseHVYSFF2S2x4eVhHNWNkRngwVlhOaFoyVWdUbTkwWlRwY2NseHVYSFJjZEMwdExTMHRMUzB0TFMwdFhISmNibHgwWEhSRWJ5QnViM1FnZFhObElHSnZkR2dnWVdwaGVGTjFZbTFwZENCaGJtUWdZV3BoZUVadmNtMGdiMjRnZEdobElITmhiV1VnWm05eWJTNGdJRlJvWlhObFhISmNibHgwWEhSbWRXNWpkR2x2Ym5NZ1lYSmxJRzExZEhWaGJHeDVJR1Y0WTJ4MWMybDJaUzRnSUZWelpTQmhhbUY0VTNWaWJXbDBJR2xtSUhsdmRTQjNZVzUwWEhKY2JseDBYSFIwYnlCaWFXNWtJSGx2ZFhJZ2IzZHVJSE4xWW0xcGRDQm9ZVzVrYkdWeUlIUnZJSFJvWlNCbWIzSnRMaUFnUm05eUlHVjRZVzF3YkdVc1hISmNibHh5WEc1Y2RGeDBKQ2hrYjJOMWJXVnVkQ2t1Y21WaFpIa29ablZ1WTNScGIyNG9LU0I3WEhKY2JseDBYSFJjZENRb0p5TnRlVVp2Y20wbktTNXZiaWduYzNWaWJXbDBKeXdnWm5WdVkzUnBiMjRvWlNrZ2UxeHlYRzVjZEZ4MFhIUmNkR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHNnTHk4Z1BDMHRJR2x0Y0c5eWRHRnVkRnh5WEc1Y2RGeDBYSFJjZENRb2RHaHBjeWt1WVdwaGVGTjFZbTFwZENoN1hISmNibHgwWEhSY2RGeDBYSFIwWVhKblpYUTZJQ2NqYjNWMGNIVjBKMXh5WEc1Y2RGeDBYSFJjZEgwcE8xeHlYRzVjZEZ4MFhIUjlLVHRjY2x4dVhIUmNkSDBwTzF4eVhHNWNjbHh1WEhSY2RGVnpaU0JoYW1GNFJtOXliU0IzYUdWdUlIbHZkU0IzWVc1MElIUm9aU0J3YkhWbmFXNGdkRzhnYldGdVlXZGxJR0ZzYkNCMGFHVWdaWFpsYm5RZ1ltbHVaR2x1WjF4eVhHNWNkRngwWm05eUlIbHZkUzRnSUVadmNpQmxlR0Z0Y0d4bExGeHlYRzVjY2x4dVhIUmNkQ1FvWkc5amRXMWxiblFwTG5KbFlXUjVLR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNWNkRngwWEhRa0tDY2piWGxHYjNKdEp5a3VZV3BoZUVadmNtMG9lMXh5WEc1Y2RGeDBYSFJjZEhSaGNtZGxkRG9nSnlOdmRYUndkWFFuWEhKY2JseDBYSFJjZEgwcE8xeHlYRzVjZEZ4MGZTazdYSEpjYmx4eVhHNWNkRngwV1c5MUlHTmhiaUJoYkhOdklIVnpaU0JoYW1GNFJtOXliU0IzYVhSb0lHUmxiR1ZuWVhScGIyNGdLSEpsY1hWcGNtVnpJR3BSZFdWeWVTQjJNUzQzS3lrc0lITnZJSFJvWlZ4eVhHNWNkRngwWm05eWJTQmtiMlZ6SUc1dmRDQm9ZWFpsSUhSdklHVjRhWE4wSUhkb1pXNGdlVzkxSUdsdWRtOXJaU0JoYW1GNFJtOXliVHBjY2x4dVhISmNibHgwWEhRa0tDY2piWGxHYjNKdEp5a3VZV3BoZUVadmNtMG9lMXh5WEc1Y2RGeDBYSFJrWld4bFoyRjBhVzl1T2lCMGNuVmxMRnh5WEc1Y2RGeDBYSFIwWVhKblpYUTZJQ2NqYjNWMGNIVjBKMXh5WEc1Y2RGeDBmU2s3WEhKY2JseHlYRzVjZEZ4MFYyaGxiaUIxYzJsdVp5QmhhbUY0Um05eWJTd2dkR2hsSUdGcVlYaFRkV0p0YVhRZ1puVnVZM1JwYjI0Z2QybHNiQ0JpWlNCcGJuWnZhMlZrSUdadmNpQjViM1ZjY2x4dVhIUmNkR0YwSUhSb1pTQmhjSEJ5YjNCeWFXRjBaU0IwYVcxbExseHlYRzVjZENvdlhISmNibHh5WEc1Y2RDOHFLbHh5WEc1Y2RDQXFJRVpsWVhSMWNtVWdaR1YwWldOMGFXOXVYSEpjYmx4MElDb3ZYSEpjYmx4MGRtRnlJR1psWVhSMWNtVWdQU0I3ZlR0Y2NseHVYSFJtWldGMGRYSmxMbVpwYkdWaGNHa2dQU0FrS0Z3aVBHbHVjSFYwSUhSNWNHVTlKMlpwYkdVbkx6NWNJaWt1WjJWMEtEQXBMbVpwYkdWeklDRTlQU0IxYm1SbFptbHVaV1E3WEhKY2JseDBabVZoZEhWeVpTNW1iM0p0WkdGMFlTQTlJSGRwYm1SdmR5NUdiM0p0UkdGMFlTQWhQVDBnZFc1a1pXWnBibVZrTzF4eVhHNWNjbHh1WEhSMllYSWdhR0Z6VUhKdmNDQTlJQ0VoSkM1bWJpNXdjbTl3TzF4eVhHNWNjbHh1WEhRdkx5QmhkSFJ5TWlCMWMyVnpJSEJ5YjNBZ2QyaGxiaUJwZENCallXNGdZblYwSUdOb1pXTnJjeUIwYUdVZ2NtVjBkWEp1SUhSNWNHVWdabTl5WEhKY2JseDBMeThnWVc0Z1pYaHdaV04wWldRZ2MzUnlhVzVuTGlBZ2RHaHBjeUJoWTJOdmRXNTBjeUJtYjNJZ2RHaGxJR05oYzJVZ2QyaGxjbVVnWVNCbWIzSnRJRnh5WEc1Y2RDOHZJR052Ym5SaGFXNXpJR2x1Y0hWMGN5QjNhWFJvSUc1aGJXVnpJR3hwYTJVZ1hDSmhZM1JwYjI1Y0lpQnZjaUJjSW0xbGRHaHZaRndpT3lCcGJpQjBhRzl6WlZ4eVhHNWNkQzh2SUdOaGMyVnpJRndpY0hKdmNGd2lJSEpsZEhWeWJuTWdkR2hsSUdWc1pXMWxiblJjY2x4dVhIUWtMbVp1TG1GMGRISXlJRDBnWm5WdVkzUnBiMjRvS1NCN1hISmNibHgwWEhScFppQW9JQ0VnYUdGelVISnZjQ0FwWEhKY2JseDBYSFJjZEhKbGRIVnliaUIwYUdsekxtRjBkSEl1WVhCd2JIa29kR2hwY3l3Z1lYSm5kVzFsYm5SektUdGNjbHh1WEhSY2RIWmhjaUIyWVd3Z1BTQjBhR2x6TG5CeWIzQXVZWEJ3Ykhrb2RHaHBjeXdnWVhKbmRXMWxiblJ6S1R0Y2NseHVYSFJjZEdsbUlDZ2dLQ0IyWVd3Z0ppWWdkbUZzTG1weGRXVnllU0FwSUh4OElIUjVjR1Z2WmlCMllXd2dQVDA5SUNkemRISnBibWNuSUNsY2NseHVYSFJjZEZ4MGNtVjBkWEp1SUhaaGJEdGNjbHh1WEhSY2RISmxkSFZ5YmlCMGFHbHpMbUYwZEhJdVlYQndiSGtvZEdocGN5d2dZWEpuZFcxbGJuUnpLVHRjY2x4dVhIUjlPMXh5WEc1Y2NseHVYSFF2S2lwY2NseHVYSFFnS2lCaGFtRjRVM1ZpYldsMEtDa2djSEp2ZG1sa1pYTWdZU0J0WldOb1lXNXBjMjBnWm05eUlHbHRiV1ZrYVdGMFpXeDVJSE4xWW0xcGRIUnBibWRjY2x4dVhIUWdLaUJoYmlCSVZFMU1JR1p2Y20wZ2RYTnBibWNnUVVwQldDNWNjbHh1WEhRZ0tpOWNjbHh1WEhRa0xtWnVMbUZxWVhoVGRXSnRhWFFnUFNCbWRXNWpkR2x2YmlodmNIUnBiMjV6S1NCN1hISmNibHgwWEhRdkttcHphR2x1ZENCelkzSnBjSFIxY213NmRISjFaU0FxTDF4eVhHNWNjbHh1WEhSY2RDOHZJR1poYzNRZ1ptRnBiQ0JwWmlCdWIzUm9hVzVuSUhObGJHVmpkR1ZrSUNob2RIUndPaTh2WkdWMkxtcHhkV1Z5ZVM1amIyMHZkR2xqYTJWMEx6STNOVElwWEhKY2JseDBYSFJwWmlBb0lYUm9hWE11YkdWdVozUm9LU0I3WEhKY2JseDBYSFJjZEd4dlp5Z25ZV3BoZUZOMVltMXBkRG9nYzJ0cGNIQnBibWNnYzNWaWJXbDBJSEJ5YjJObGMzTWdMU0J1YnlCbGJHVnRaVzUwSUhObGJHVmpkR1ZrSnlrN1hISmNibHgwWEhSY2RISmxkSFZ5YmlCMGFHbHpPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEhaaGNpQnRaWFJvYjJRc0lHRmpkR2x2Yml3Z2RYSnNMQ0FrWm05eWJTQTlJSFJvYVhNN1hISmNibHh5WEc1Y2RGeDBhV1lnS0hSNWNHVnZaaUJ2Y0hScGIyNXpJRDA5SUNkbWRXNWpkR2x2YmljcElIdGNjbHh1WEhSY2RGeDBiM0IwYVc5dWN5QTlJSHNnYzNWalkyVnpjem9nYjNCMGFXOXVjeUI5TzF4eVhHNWNkRngwZlZ4eVhHNWNkRngwWld4elpTQnBaaUFvSUc5d2RHbHZibk1nUFQwOUlIVnVaR1ZtYVc1bFpDQXBJSHRjY2x4dVhIUmNkRngwYjNCMGFXOXVjeUE5SUh0OU8xeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRzFsZEdodlpDQTlJRzl3ZEdsdmJuTXVkSGx3WlNCOGZDQjBhR2x6TG1GMGRISXlLQ2R0WlhSb2IyUW5LVHRjY2x4dVhIUmNkR0ZqZEdsdmJpQTlJRzl3ZEdsdmJuTXVkWEpzSUNCOGZDQjBhR2x6TG1GMGRISXlLQ2RoWTNScGIyNG5LVHRjY2x4dVhISmNibHgwWEhSMWNtd2dQU0FvZEhsd1pXOW1JR0ZqZEdsdmJpQTlQVDBnSjNOMGNtbHVaeWNwSUQ4Z0pDNTBjbWx0S0dGamRHbHZiaWtnT2lBbkp6dGNjbHh1WEhSY2RIVnliQ0E5SUhWeWJDQjhmQ0IzYVc1a2IzY3ViRzlqWVhScGIyNHVhSEpsWmlCOGZDQW5KenRjY2x4dVhIUmNkR2xtSUNoMWNtd3BJSHRjY2x4dVhIUmNkRngwTHk4Z1kyeGxZVzRnZFhKc0lDaGtiMjRuZENCcGJtTnNkV1JsSUdoaGMyZ2dkbUYxWlNsY2NseHVYSFJjZEZ4MGRYSnNJRDBnS0hWeWJDNXRZWFJqYUNndlhpaGJYaU5kS3lrdktYeDhXMTBwV3pGZE8xeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRzl3ZEdsdmJuTWdQU0FrTG1WNGRHVnVaQ2gwY25WbExDQjdYSEpjYmx4MFhIUmNkSFZ5YkRvZ0lIVnliQ3hjY2x4dVhIUmNkRngwYzNWalkyVnpjem9nSkM1aGFtRjRVMlYwZEdsdVozTXVjM1ZqWTJWemN5eGNjbHh1WEhSY2RGeDBkSGx3WlRvZ2JXVjBhRzlrSUh4OElDUXVZV3BoZUZObGRIUnBibWR6TG5SNWNHVXNYSEpjYmx4MFhIUmNkR2xtY21GdFpWTnlZem9nTDE1b2RIUndjeTlwTG5SbGMzUW9kMmx1Wkc5M0xteHZZMkYwYVc5dUxtaHlaV1lnZkh3Z0p5Y3BJRDhnSjJwaGRtRnpZM0pwY0hRNlptRnNjMlVuSURvZ0oyRmliM1YwT21Kc1lXNXJKMXh5WEc1Y2RGeDBmU3dnYjNCMGFXOXVjeWs3WEhKY2JseHlYRzVjZEZ4MEx5OGdhRzl2YXlCbWIzSWdiV0Z1YVhCMWJHRjBhVzVuSUhSb1pTQm1iM0p0SUdSaGRHRWdZbVZtYjNKbElHbDBJR2x6SUdWNGRISmhZM1JsWkR0Y2NseHVYSFJjZEM4dklHTnZiblpsYm1sbGJuUWdabTl5SUhWelpTQjNhWFJvSUhKcFkyZ2daV1JwZEc5eWN5QnNhV3RsSUhScGJubE5RMFVnYjNJZ1JrTkxSV1JwZEc5eVhISmNibHgwWEhSMllYSWdkbVYwYnlBOUlIdDlPMXh5WEc1Y2RGeDBkR2hwY3k1MGNtbG5aMlZ5S0NkbWIzSnRMWEJ5WlMxelpYSnBZV3hwZW1VbkxDQmJkR2hwY3l3Z2IzQjBhVzl1Y3l3Z2RtVjBiMTBwTzF4eVhHNWNkRngwYVdZZ0tIWmxkRzh1ZG1WMGJ5a2dlMXh5WEc1Y2RGeDBYSFJzYjJjb0oyRnFZWGhUZFdKdGFYUTZJSE4xWW0xcGRDQjJaWFJ2WldRZ2RtbGhJR1p2Y20wdGNISmxMWE5sY21saGJHbDZaU0IwY21sbloyVnlKeWs3WEhKY2JseDBYSFJjZEhKbGRIVnliaUIwYUdsek8xeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkQzh2SUhCeWIzWnBaR1VnYjNCd2IzSjBkVzVwZEhrZ2RHOGdZV3gwWlhJZ1ptOXliU0JrWVhSaElHSmxabTl5WlNCcGRDQnBjeUJ6WlhKcFlXeHBlbVZrWEhKY2JseDBYSFJwWmlBb2IzQjBhVzl1Y3k1aVpXWnZjbVZUWlhKcFlXeHBlbVVnSmlZZ2IzQjBhVzl1Y3k1aVpXWnZjbVZUWlhKcFlXeHBlbVVvZEdocGN5d2diM0IwYVc5dWN5a2dQVDA5SUdaaGJITmxLU0I3WEhKY2JseDBYSFJjZEd4dlp5Z25ZV3BoZUZOMVltMXBkRG9nYzNWaWJXbDBJR0ZpYjNKMFpXUWdkbWxoSUdKbFptOXlaVk5sY21saGJHbDZaU0JqWVd4c1ltRmpheWNwTzF4eVhHNWNkRngwWEhSeVpYUjFjbTRnZEdocGN6dGNjbHh1WEhSY2RIMWNjbHh1WEhKY2JseDBYSFIyWVhJZ2RISmhaR2wwYVc5dVlXd2dQU0J2Y0hScGIyNXpMblJ5WVdScGRHbHZibUZzTzF4eVhHNWNkRngwYVdZZ0tDQjBjbUZrYVhScGIyNWhiQ0E5UFQwZ2RXNWtaV1pwYm1Wa0lDa2dlMXh5WEc1Y2RGeDBYSFIwY21Ga2FYUnBiMjVoYkNBOUlDUXVZV3BoZUZObGRIUnBibWR6TG5SeVlXUnBkR2x2Ym1Gc08xeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkSFpoY2lCbGJHVnRaVzUwY3lBOUlGdGRPMXh5WEc1Y2RGeDBkbUZ5SUhGNExDQmhJRDBnZEdocGN5NW1iM0p0Vkc5QmNuSmhlU2h2Y0hScGIyNXpMbk5sYldGdWRHbGpMQ0JsYkdWdFpXNTBjeWs3WEhKY2JseDBYSFJwWmlBb2IzQjBhVzl1Y3k1a1lYUmhLU0I3WEhKY2JseDBYSFJjZEc5d2RHbHZibk11WlhoMGNtRkVZWFJoSUQwZ2IzQjBhVzl1Y3k1a1lYUmhPMXh5WEc1Y2RGeDBYSFJ4ZUNBOUlDUXVjR0Z5WVcwb2IzQjBhVzl1Y3k1a1lYUmhMQ0IwY21Ga2FYUnBiMjVoYkNrN1hISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBMeThnWjJsMlpTQndjbVV0YzNWaWJXbDBJR05oYkd4aVlXTnJJR0Z1SUc5d2NHOXlkSFZ1YVhSNUlIUnZJR0ZpYjNKMElIUm9aU0J6ZFdKdGFYUmNjbHh1WEhSY2RHbG1JQ2h2Y0hScGIyNXpMbUpsWm05eVpWTjFZbTFwZENBbUppQnZjSFJwYjI1ekxtSmxabTl5WlZOMVltMXBkQ2hoTENCMGFHbHpMQ0J2Y0hScGIyNXpLU0E5UFQwZ1ptRnNjMlVwSUh0Y2NseHVYSFJjZEZ4MGJHOW5LQ2RoYW1GNFUzVmliV2wwT2lCemRXSnRhWFFnWVdKdmNuUmxaQ0IyYVdFZ1ltVm1iM0psVTNWaWJXbDBJR05oYkd4aVlXTnJKeWs3WEhKY2JseDBYSFJjZEhKbGRIVnliaUIwYUdsek8xeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkQzh2SUdacGNtVWdkbVYwYjJGaWJHVWdKM1poYkdsa1lYUmxKeUJsZG1WdWRGeHlYRzVjZEZ4MGRHaHBjeTUwY21sbloyVnlLQ2RtYjNKdExYTjFZbTFwZEMxMllXeHBaR0YwWlNjc0lGdGhMQ0IwYUdsekxDQnZjSFJwYjI1ekxDQjJaWFJ2WFNrN1hISmNibHgwWEhScFppQW9kbVYwYnk1MlpYUnZLU0I3WEhKY2JseDBYSFJjZEd4dlp5Z25ZV3BoZUZOMVltMXBkRG9nYzNWaWJXbDBJSFpsZEc5bFpDQjJhV0VnWm05eWJTMXpkV0p0YVhRdGRtRnNhV1JoZEdVZ2RISnBaMmRsY2ljcE8xeHlYRzVjZEZ4MFhIUnlaWFIxY200Z2RHaHBjenRjY2x4dVhIUmNkSDFjY2x4dVhISmNibHgwWEhSMllYSWdjU0E5SUNRdWNHRnlZVzBvWVN3Z2RISmhaR2wwYVc5dVlXd3BPMXh5WEc1Y2RGeDBhV1lnS0hGNEtTQjdYSEpjYmx4MFhIUmNkSEVnUFNBb0lIRWdQeUFvY1NBcklDY21KeUFySUhGNEtTQTZJSEY0SUNrN1hISmNibHgwWEhSOVhISmNibHgwWEhScFppQW9iM0IwYVc5dWN5NTBlWEJsTG5SdlZYQndaWEpEWVhObEtDa2dQVDBnSjBkRlZDY3BJSHRjY2x4dVhIUmNkRngwYjNCMGFXOXVjeTUxY213Z0t6MGdLRzl3ZEdsdmJuTXVkWEpzTG1sdVpHVjRUMllvSno4bktTQStQU0F3SUQ4Z0p5WW5JRG9nSno4bktTQXJJSEU3WEhKY2JseDBYSFJjZEc5d2RHbHZibk11WkdGMFlTQTlJRzUxYkd3N0lDQXZMeUJrWVhSaElHbHpJRzUxYkd3Z1ptOXlJQ2RuWlhRblhISmNibHgwWEhSOVhISmNibHgwWEhSbGJITmxJSHRjY2x4dVhIUmNkRngwYjNCMGFXOXVjeTVrWVhSaElEMGdjVHNnTHk4Z1pHRjBZU0JwY3lCMGFHVWdjWFZsY25rZ2MzUnlhVzVuSUdadmNpQW5jRzl6ZENkY2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUjJZWElnWTJGc2JHSmhZMnR6SUQwZ1cxMDdYSEpjYmx4MFhIUnBaaUFvYjNCMGFXOXVjeTV5WlhObGRFWnZjbTBwSUh0Y2NseHVYSFJjZEZ4MFkyRnNiR0poWTJ0ekxuQjFjMmdvWm5WdVkzUnBiMjRvS1NCN0lDUm1iM0p0TG5KbGMyVjBSbTl5YlNncE95QjlLVHRjY2x4dVhIUmNkSDFjY2x4dVhIUmNkR2xtSUNodmNIUnBiMjV6TG1Oc1pXRnlSbTl5YlNrZ2UxeHlYRzVjZEZ4MFhIUmpZV3hzWW1GamEzTXVjSFZ6YUNobWRXNWpkR2x2YmlncElIc2dKR1p2Y20wdVkyeGxZWEpHYjNKdEtHOXdkR2x2Ym5NdWFXNWpiSFZrWlVocFpHUmxiaWs3SUgwcE8xeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkQzh2SUhCbGNtWnZjbTBnWVNCc2IyRmtJRzl1SUhSb1pTQjBZWEpuWlhRZ2IyNXNlU0JwWmlCa1lYUmhWSGx3WlNCcGN5QnViM1FnY0hKdmRtbGtaV1JjY2x4dVhIUmNkR2xtSUNnaGIzQjBhVzl1Y3k1a1lYUmhWSGx3WlNBbUppQnZjSFJwYjI1ekxuUmhjbWRsZENrZ2UxeHlYRzVjZEZ4MFhIUjJZWElnYjJ4a1UzVmpZMlZ6Y3lBOUlHOXdkR2x2Ym5NdWMzVmpZMlZ6Y3lCOGZDQm1kVzVqZEdsdmJpZ3BlMzA3WEhKY2JseDBYSFJjZEdOaGJHeGlZV05yY3k1d2RYTm9LR1oxYm1OMGFXOXVLR1JoZEdFcElIdGNjbHh1WEhSY2RGeDBYSFIyWVhJZ1ptNGdQU0J2Y0hScGIyNXpMbkpsY0d4aFkyVlVZWEpuWlhRZ1B5QW5jbVZ3YkdGalpWZHBkR2duSURvZ0oyaDBiV3duTzF4eVhHNWNkRngwWEhSY2RDUW9iM0IwYVc5dWN5NTBZWEpuWlhRcFcyWnVYU2hrWVhSaEtTNWxZV05vS0c5c1pGTjFZMk5sYzNNc0lHRnlaM1Z0Wlc1MGN5azdYSEpjYmx4MFhIUmNkSDBwTzF4eVhHNWNkRngwZlZ4eVhHNWNkRngwWld4elpTQnBaaUFvYjNCMGFXOXVjeTV6ZFdOalpYTnpLU0I3WEhKY2JseDBYSFJjZEdOaGJHeGlZV05yY3k1d2RYTm9LRzl3ZEdsdmJuTXVjM1ZqWTJWemN5azdYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwYjNCMGFXOXVjeTV6ZFdOalpYTnpJRDBnWm5WdVkzUnBiMjRvWkdGMFlTd2djM1JoZEhWekxDQjRhSElwSUhzZ0x5OGdhbEYxWlhKNUlERXVOQ3NnY0dGemMyVnpJSGhvY2lCaGN5QXpjbVFnWVhKblhISmNibHgwWEhSY2RIWmhjaUJqYjI1MFpYaDBJRDBnYjNCMGFXOXVjeTVqYjI1MFpYaDBJSHg4SUhSb2FYTWdPeUFnSUNBdkx5QnFVWFZsY25rZ01TNDBLeUJ6ZFhCd2IzSjBjeUJ6WTI5d1pTQmpiMjUwWlhoMFhISmNibHgwWEhSY2RHWnZjaUFvZG1GeUlHazlNQ3dnYldGNFBXTmhiR3hpWVdOcmN5NXNaVzVuZEdnN0lHa2dQQ0J0WVhnN0lHa3JLeWtnZTF4eVhHNWNkRngwWEhSY2RHTmhiR3hpWVdOcmMxdHBYUzVoY0hCc2VTaGpiMjUwWlhoMExDQmJaR0YwWVN3Z2MzUmhkSFZ6TENCNGFISWdmSHdnSkdadmNtMHNJQ1JtYjNKdFhTazdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkSDA3WEhKY2JseHlYRzVjZEZ4MGFXWWdLRzl3ZEdsdmJuTXVaWEp5YjNJcElIdGNjbHh1WEhSY2RGeDBkbUZ5SUc5c1pFVnljbTl5SUQwZ2IzQjBhVzl1Y3k1bGNuSnZjanRjY2x4dVhIUmNkRngwYjNCMGFXOXVjeTVsY25KdmNpQTlJR1oxYm1OMGFXOXVLSGhvY2l3Z2MzUmhkSFZ6TENCbGNuSnZjaWtnZTF4eVhHNWNkRngwWEhSY2RIWmhjaUJqYjI1MFpYaDBJRDBnYjNCMGFXOXVjeTVqYjI1MFpYaDBJSHg4SUhSb2FYTTdYSEpjYmx4MFhIUmNkRngwYjJ4a1JYSnliM0l1WVhCd2JIa29ZMjl1ZEdWNGRDd2dXM2hvY2l3Z2MzUmhkSFZ6TENCbGNuSnZjaXdnSkdadmNtMWRLVHRjY2x4dVhIUmNkRngwZlR0Y2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUWdhV1lnS0c5d2RHbHZibk11WTI5dGNHeGxkR1VwSUh0Y2NseHVYSFJjZEZ4MGRtRnlJRzlzWkVOdmJYQnNaWFJsSUQwZ2IzQjBhVzl1Y3k1amIyMXdiR1YwWlR0Y2NseHVYSFJjZEZ4MGIzQjBhVzl1Y3k1amIyMXdiR1YwWlNBOUlHWjFibU4wYVc5dUtIaG9jaXdnYzNSaGRIVnpLU0I3WEhKY2JseDBYSFJjZEZ4MGRtRnlJR052Ym5SbGVIUWdQU0J2Y0hScGIyNXpMbU52Ym5SbGVIUWdmSHdnZEdocGN6dGNjbHh1WEhSY2RGeDBYSFJ2YkdSRGIyMXdiR1YwWlM1aGNIQnNlU2hqYjI1MFpYaDBMQ0JiZUdoeUxDQnpkR0YwZFhNc0lDUm1iM0p0WFNrN1hISmNibHgwWEhSY2RIMDdYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwTHk4Z1lYSmxJSFJvWlhKbElHWnBiR1Z6SUhSdklIVndiRzloWkQ5Y2NseHVYSEpjYmx4MFhIUXZMeUJiZG1Gc2RXVmRJQ2hwYzNOMVpTQWpNVEV6S1N3Z1lXeHpieUJ6WldVZ1kyOXRiV1Z1ZERwY2NseHVYSFJjZEM4dklHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOXRZV3h6ZFhBdlptOXliUzlqYjIxdGFYUXZOVGc0TXpBMllXVmtZbUV4WkdVd01UTTRPREF6TW1RMVpqUXlZVFl3TVRVNVpXVmhPVEl5T0NOamIyMXRhWFJqYjIxdFpXNTBMVEl4T0RBeU1UbGNjbHh1WEhSY2RIWmhjaUJtYVd4bFNXNXdkWFJ6SUQwZ0pDZ25hVzV3ZFhSYmRIbHdaVDFtYVd4bFhUcGxibUZpYkdWa0p5d2dkR2hwY3lrdVptbHNkR1Z5S0daMWJtTjBhVzl1S0NrZ2V5QnlaWFIxY200Z0pDaDBhR2x6S1M1MllXd29LU0FoUFQwZ0p5YzdJSDBwTzF4eVhHNWNjbHh1WEhSY2RIWmhjaUJvWVhOR2FXeGxTVzV3ZFhSeklEMGdabWxzWlVsdWNIVjBjeTVzWlc1bmRHZ2dQaUF3TzF4eVhHNWNkRngwZG1GeUlHMXdJRDBnSjIxMWJIUnBjR0Z5ZEM5bWIzSnRMV1JoZEdFbk8xeHlYRzVjZEZ4MGRtRnlJRzExYkhScGNHRnlkQ0E5SUNna1ptOXliUzVoZEhSeUtDZGxibU4wZVhCbEp5a2dQVDBnYlhBZ2ZId2dKR1p2Y20wdVlYUjBjaWduWlc1amIyUnBibWNuS1NBOVBTQnRjQ2s3WEhKY2JseHlYRzVjZEZ4MGRtRnlJR1pwYkdWQlVFa2dQU0JtWldGMGRYSmxMbVpwYkdWaGNHa2dKaVlnWm1WaGRIVnlaUzVtYjNKdFpHRjBZVHRjY2x4dVhIUmNkR3h2WnloY0ltWnBiR1ZCVUVrZ09sd2lJQ3NnWm1sc1pVRlFTU2s3WEhKY2JseDBYSFIyWVhJZ2MyaHZkV3hrVlhObFJuSmhiV1VnUFNBb2FHRnpSbWxzWlVsdWNIVjBjeUI4ZkNCdGRXeDBhWEJoY25RcElDWW1JQ0ZtYVd4bFFWQkpPMXh5WEc1Y2NseHVYSFJjZEhaaGNpQnFjWGhvY2p0Y2NseHVYSEpjYmx4MFhIUXZMeUJ2Y0hScGIyNXpMbWxtY21GdFpTQmhiR3h2ZDNNZ2RYTmxjaUIwYnlCbWIzSmpaU0JwWm5KaGJXVWdiVzlrWlZ4eVhHNWNkRngwTHk4Z01EWXRUazlXTFRBNU9pQnViM2NnWkdWbVlYVnNkR2x1WnlCMGJ5QnBabkpoYldVZ2JXOWtaU0JwWmlCbWFXeGxJR2x1Y0hWMElHbHpJR1JsZEdWamRHVmtYSEpjYmx4MFhIUnBaaUFvYjNCMGFXOXVjeTVwWm5KaGJXVWdJVDA5SUdaaGJITmxJQ1ltSUNodmNIUnBiMjV6TG1sbWNtRnRaU0I4ZkNCemFHOTFiR1JWYzJWR2NtRnRaU2twSUh0Y2NseHVYSFJjZEZ4MEx5OGdhR0ZqYXlCMGJ5Qm1hWGdnVTJGbVlYSnBJR2hoYm1jZ0tIUm9ZVzVyY3lCMGJ5QlVhVzBnVFc5c1pXNWthV3BySUdadmNpQjBhR2x6S1Z4eVhHNWNkRngwWEhRdkx5QnpaV1U2SUNCb2RIUndPaTh2WjNKdmRYQnpMbWR2YjJkc1pTNWpiMjB2WjNKdmRYQXZhbkYxWlhKNUxXUmxkaTlpY205M2MyVmZkR2h5WldGa0wzUm9jbVZoWkM4ek5qTTVOV0kzWVdJMU1UQmtaRFZrWEhKY2JseDBYSFJjZEdsbUlDaHZjSFJwYjI1ekxtTnNiM05sUzJWbGNFRnNhWFpsS1NCN1hISmNibHgwWEhSY2RGeDBKQzVuWlhRb2IzQjBhVzl1Y3k1amJHOXpaVXRsWlhCQmJHbDJaU3dnWm5WdVkzUnBiMjRvS1NCN1hISmNibHgwWEhSY2RGeDBYSFJxY1hob2NpQTlJR1pwYkdWVmNHeHZZV1JKWm5KaGJXVW9ZU2s3WEhKY2JseDBYSFJjZEZ4MGZTazdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkRngwWld4elpTQjdYSEpjYmx4MFhIUmNkRngwYW5GNGFISWdQU0JtYVd4bFZYQnNiMkZrU1daeVlXMWxLR0VwTzF4eVhHNWNkRngwWEhSOVhISmNibHgwWEhSOVhISmNibHgwWEhSbGJITmxJR2xtSUNnb2FHRnpSbWxzWlVsdWNIVjBjeUI4ZkNCdGRXeDBhWEJoY25RcElDWW1JR1pwYkdWQlVFa3BJSHRjY2x4dVhIUmNkRngwYW5GNGFISWdQU0JtYVd4bFZYQnNiMkZrV0doeUtHRXBPMXh5WEc1Y2RGeDBmVnh5WEc1Y2RGeDBaV3h6WlNCN1hISmNibHgwWEhSY2RHcHhlR2h5SUQwZ0pDNWhhbUY0S0c5d2RHbHZibk1wTzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RDUm1iM0p0TG5KbGJXOTJaVVJoZEdFb0oycHhlR2h5SnlrdVpHRjBZU2duYW5GNGFISW5MQ0JxY1hob2NpazdYSEpjYmx4eVhHNWNkRngwTHk4Z1kyeGxZWElnWld4bGJXVnVkQ0JoY25KaGVWeHlYRzVjZEZ4MFptOXlJQ2gyWVhJZ2F6MHdPeUJySUR3Z1pXeGxiV1Z1ZEhNdWJHVnVaM1JvT3lCckt5c3BYSEpjYmx4MFhIUmNkR1ZzWlcxbGJuUnpXMnRkSUQwZ2JuVnNiRHRjY2x4dVhISmNibHgwWEhRdkx5Qm1hWEpsSUNkdWIzUnBabmtuSUdWMlpXNTBYSEpjYmx4MFhIUjBhR2x6TG5SeWFXZG5aWElvSjJadmNtMHRjM1ZpYldsMExXNXZkR2xtZVNjc0lGdDBhR2x6TENCdmNIUnBiMjV6WFNrN1hISmNibHgwWEhSeVpYUjFjbTRnZEdocGN6dGNjbHh1WEhKY2JseDBYSFF2THlCMWRHbHNhWFI1SUdadUlHWnZjaUJrWldWd0lITmxjbWxoYkdsNllYUnBiMjVjY2x4dVhIUmNkR1oxYm1OMGFXOXVJR1JsWlhCVFpYSnBZV3hwZW1Vb1pYaDBjbUZFWVhSaEtYdGNjbHh1WEhSY2RGeDBkbUZ5SUhObGNtbGhiR2w2WldRZ1BTQWtMbkJoY21GdEtHVjRkSEpoUkdGMFlTd2diM0IwYVc5dWN5NTBjbUZrYVhScGIyNWhiQ2t1YzNCc2FYUW9KeVluS1R0Y2NseHVYSFJjZEZ4MGRtRnlJR3hsYmlBOUlITmxjbWxoYkdsNlpXUXViR1Z1WjNSb08xeHlYRzVjZEZ4MFhIUjJZWElnY21WemRXeDBJRDBnVzEwN1hISmNibHgwWEhSY2RIWmhjaUJwTENCd1lYSjBPMXh5WEc1Y2RGeDBYSFJtYjNJZ0tHazlNRHNnYVNBOElHeGxianNnYVNzcktTQjdYSEpjYmx4MFhIUmNkRngwTHk4Z0l6STFNanNnZFc1a2J5QndZWEpoYlNCemNHRmpaU0J5WlhCc1lXTmxiV1Z1ZEZ4eVhHNWNkRngwWEhSY2RITmxjbWxoYkdsNlpXUmJhVjBnUFNCelpYSnBZV3hwZW1Wa1cybGRMbkpsY0d4aFkyVW9MMXhjS3k5bkxDY2dKeWs3WEhKY2JseDBYSFJjZEZ4MGNHRnlkQ0E5SUhObGNtbGhiR2w2WldSYmFWMHVjM0JzYVhRb0p6MG5LVHRjY2x4dVhIUmNkRngwWEhRdkx5QWpNamM0T3lCMWMyVWdZWEp5WVhrZ2FXNXpkR1ZoWkNCdlppQnZZbXBsWTNRZ2MzUnZjbUZuWlN3Z1ptRjJiM0pwYm1jZ1lYSnlZWGtnYzJWeWFXRnNhWHBoZEdsdmJuTmNjbHh1WEhSY2RGeDBYSFJ5WlhOMWJIUXVjSFZ6YUNoYlpHVmpiMlJsVlZKSlEyOXRjRzl1Wlc1MEtIQmhjblJiTUYwcExDQmtaV052WkdWVlVrbERiMjF3YjI1bGJuUW9jR0Z5ZEZzeFhTbGRLVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNkRngwWEhSeVpYUjFjbTRnY21WemRXeDBPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZENBdkx5QllUVXhJZEhSd1VtVnhkV1Z6ZENCTVpYWmxiQ0F5SUdacGJHVWdkWEJzYjJGa2N5QW9ZbWxuSUdoaGRDQjBhWEFnZEc4Z1puSmhibU52YVhNeWJXVjBlaWxjY2x4dVhIUmNkR1oxYm1OMGFXOXVJR1pwYkdWVmNHeHZZV1JZYUhJb1lTa2dlMXh5WEc1Y2RGeDBYSFIyWVhJZ1ptOXliV1JoZEdFZ1BTQnVaWGNnUm05eWJVUmhkR0VvS1R0Y2NseHVYSEpjYmx4MFhIUmNkR1p2Y2lBb2RtRnlJR2s5TURzZ2FTQThJR0V1YkdWdVozUm9PeUJwS3lzcElIdGNjbHh1WEhSY2RGeDBYSFJtYjNKdFpHRjBZUzVoY0hCbGJtUW9ZVnRwWFM1dVlXMWxMQ0JoVzJsZExuWmhiSFZsS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwYVdZZ0tHOXdkR2x2Ym5NdVpYaDBjbUZFWVhSaEtTQjdYSEpjYmx4MFhIUmNkRngwZG1GeUlITmxjbWxoYkdsNlpXUkVZWFJoSUQwZ1pHVmxjRk5sY21saGJHbDZaU2h2Y0hScGIyNXpMbVY0ZEhKaFJHRjBZU2s3WEhKY2JseDBYSFJjZEZ4MFptOXlJQ2hwUFRBN0lHa2dQQ0J6WlhKcFlXeHBlbVZrUkdGMFlTNXNaVzVuZEdnN0lHa3JLeWxjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2h6WlhKcFlXeHBlbVZrUkdGMFlWdHBYU2xjY2x4dVhIUmNkRngwWEhSY2RGeDBabTl5YldSaGRHRXVZWEJ3Wlc1a0tITmxjbWxoYkdsNlpXUkVZWFJoVzJsZFd6QmRMQ0J6WlhKcFlXeHBlbVZrUkdGMFlWdHBYVnN4WFNrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEc5d2RHbHZibk11WkdGMFlTQTlJRzUxYkd3N1hISmNibHh5WEc1Y2RGeDBYSFIyWVhJZ2N5QTlJQ1F1WlhoMFpXNWtLSFJ5ZFdVc0lIdDlMQ0FrTG1GcVlYaFRaWFIwYVc1bmN5d2diM0IwYVc5dWN5d2dlMXh5WEc1Y2RGeDBYSFJjZEdOdmJuUmxiblJVZVhCbE9pQm1ZV3h6WlN4Y2NseHVYSFJjZEZ4MFhIUndjbTlqWlhOelJHRjBZVG9nWm1Gc2MyVXNYSEpjYmx4MFhIUmNkRngwWTJGamFHVTZJR1poYkhObExGeHlYRzVjZEZ4MFhIUmNkSFI1Y0dVNklHMWxkR2h2WkNCOGZDQW5VRTlUVkNkY2NseHVYSFJjZEZ4MGZTazdYSEpjYmx4eVhHNWNkRngwWEhScFppQW9iM0IwYVc5dWN5NTFjR3h2WVdSUWNtOW5jbVZ6Y3lrZ2UxeHlYRzVjZEZ4MFhIUmNkQzh2SUhkdmNtdGhjbTkxYm1RZ1ltVmpZWFZ6WlNCcWNWaElVaUJrYjJWeklHNXZkQ0JsZUhCdmMyVWdkWEJzYjJGa0lIQnliM0JsY25SNVhISmNibHgwWEhSY2RGeDBjeTU0YUhJZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjY2x4dVhIUmNkRngwWEhSY2RIWmhjaUI0YUhJZ1BTQWtMbUZxWVhoVFpYUjBhVzVuY3k1NGFISW9LVHRjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2g0YUhJdWRYQnNiMkZrS1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZEhob2NpNTFjR3h2WVdRdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbmNISnZaM0psYzNNbkxDQm1kVzVqZEdsdmJpaGxkbVZ1ZENrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RIWmhjaUJ3WlhKalpXNTBJRDBnTUR0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSMllYSWdjRzl6YVhScGIyNGdQU0JsZG1WdWRDNXNiMkZrWldRZ2ZId2daWFpsYm5RdWNHOXphWFJwYjI0N0lDOHFaWFpsYm5RdWNHOXphWFJwYjI0Z2FYTWdaR1Z3Y21WallYUmxaQ292WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwZG1GeUlIUnZkR0ZzSUQwZ1pYWmxiblF1ZEc5MFlXdzdYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBhV1lnS0dWMlpXNTBMbXhsYm1kMGFFTnZiWEIxZEdGaWJHVXBJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEhCbGNtTmxiblFnUFNCTllYUm9MbU5sYVd3b2NHOXphWFJwYjI0Z0x5QjBiM1JoYkNBcUlERXdNQ2s3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEc5d2RHbHZibk11ZFhCc2IyRmtVSEp2WjNKbGMzTW9aWFpsYm5Rc0lIQnZjMmwwYVc5dUxDQjBiM1JoYkN3Z2NHVnlZMlZ1ZENrN1hISmNibHgwWEhSY2RGeDBYSFJjZEgwc0lHWmhiSE5sS1R0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSY2RISmxkSFZ5YmlCNGFISTdYSEpjYmx4MFhIUmNkRngwZlR0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwY3k1a1lYUmhJRDBnYm5Wc2JEdGNjbHh1WEhSY2RGeDBkbUZ5SUdKbFptOXlaVk5sYm1RZ1BTQnpMbUpsWm05eVpWTmxibVE3WEhKY2JseDBYSFJjZEhNdVltVm1iM0psVTJWdVpDQTlJR1oxYm1OMGFXOXVLSGhvY2l3Z2J5a2dlMXh5WEc1Y2RGeDBYSFJjZEM4dlUyVnVaQ0JHYjNKdFJHRjBZU2dwSUhCeWIzWnBaR1ZrSUdKNUlIVnpaWEpjY2x4dVhIUmNkRngwWEhScFppQW9iM0IwYVc5dWN5NW1iM0p0UkdGMFlTbGNjbHh1WEhSY2RGeDBYSFJjZEc4dVpHRjBZU0E5SUc5d2RHbHZibk11Wm05eWJVUmhkR0U3WEhKY2JseDBYSFJjZEZ4MFpXeHpaVnh5WEc1Y2RGeDBYSFJjZEZ4MGJ5NWtZWFJoSUQwZ1ptOXliV1JoZEdFN1hISmNibHgwWEhSY2RGeDBhV1lvWW1WbWIzSmxVMlZ1WkNsY2NseHVYSFJjZEZ4MFhIUmNkR0psWm05eVpWTmxibVF1WTJGc2JDaDBhR2x6TENCNGFISXNJRzhwTzF4eVhHNWNkRngwWEhSOU8xeHlYRzVjZEZ4MFhIUnlaWFIxY200Z0pDNWhhbUY0S0hNcE8xeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkQzh2SUhCeWFYWmhkR1VnWm5WdVkzUnBiMjRnWm05eUlHaGhibVJzYVc1bklHWnBiR1VnZFhCc2IyRmtjeUFvYUdGMElIUnBjQ0IwYnlCWlFVaFBUeUVwWEhKY2JseDBYSFJtZFc1amRHbHZiaUJtYVd4bFZYQnNiMkZrU1daeVlXMWxLR0VwSUh0Y2NseHVYSFJjZEZ4MGRtRnlJR1p2Y20wZ1BTQWtabTl5YlZzd1hTd2daV3dzSUdrc0lITXNJR2NzSUdsa0xDQWthVzhzSUdsdkxDQjRhSElzSUhOMVlpd2diaXdnZEdsdFpXUlBkWFFzSUhScGJXVnZkWFJJWVc1a2JHVTdYSEpjYmx4MFhIUmNkSFpoY2lCa1pXWmxjbkpsWkNBOUlDUXVSR1ZtWlhKeVpXUW9LVHRjY2x4dVhISmNibHgwWEhSY2RDOHZJQ016TkRGY2NseHVYSFJjZEZ4MFpHVm1aWEp5WldRdVlXSnZjblFnUFNCbWRXNWpkR2x2YmloemRHRjBkWE1wSUh0Y2NseHVYSFJjZEZ4MFhIUjRhSEl1WVdKdmNuUW9jM1JoZEhWektUdGNjbHh1WEhSY2RGeDBmVHRjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2hoS1NCN1hISmNibHgwWEhSY2RGeDBMeThnWlc1emRYSmxJSFJvWVhRZ1pYWmxjbmtnYzJWeWFXRnNhWHBsWkNCcGJuQjFkQ0JwY3lCemRHbHNiQ0JsYm1GaWJHVmtYSEpjYmx4MFhIUmNkRngwWm05eUlDaHBQVEE3SUdrZ1BDQmxiR1Z0Wlc1MGN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4eVhHNWNkRngwWEhSY2RGeDBaV3dnUFNBa0tHVnNaVzFsYm5SelcybGRLVHRjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2dnYUdGelVISnZjQ0FwWEhKY2JseDBYSFJjZEZ4MFhIUmNkR1ZzTG5CeWIzQW9KMlJwYzJGaWJHVmtKeXdnWm1Gc2MyVXBPMXh5WEc1Y2RGeDBYSFJjZEZ4MFpXeHpaVnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmxiQzV5WlcxdmRtVkJkSFJ5S0Nka2FYTmhZbXhsWkNjcE8xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBjeUE5SUNRdVpYaDBaVzVrS0hSeWRXVXNJSHQ5TENBa0xtRnFZWGhUWlhSMGFXNW5jeXdnYjNCMGFXOXVjeWs3WEhKY2JseDBYSFJjZEhNdVkyOXVkR1Y0ZENBOUlITXVZMjl1ZEdWNGRDQjhmQ0J6TzF4eVhHNWNkRngwWEhScFpDQTlJQ2RxY1VadmNtMUpUeWNnS3lBb2JtVjNJRVJoZEdVb0tTNW5aWFJVYVcxbEtDa3BPMXh5WEc1Y2RGeDBYSFJwWmlBb2N5NXBabkpoYldWVVlYSm5aWFFwSUh0Y2NseHVYSFJjZEZ4MFhIUWthVzhnUFNBa0tITXVhV1p5WVcxbFZHRnlaMlYwS1R0Y2NseHVYSFJjZEZ4MFhIUnVJRDBnSkdsdkxtRjBkSEl5S0NkdVlXMWxKeWs3WEhKY2JseDBYSFJjZEZ4MGFXWWdLQ0Z1S1Z4eVhHNWNkRngwWEhSY2RGeDBJQ1JwYnk1aGRIUnlNaWduYm1GdFpTY3NJR2xrS1R0Y2NseHVYSFJjZEZ4MFhIUmxiSE5sWEhKY2JseDBYSFJjZEZ4MFhIUnBaQ0E5SUc0N1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RGeDBaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBKR2x2SUQwZ0pDZ25QR2xtY21GdFpTQnVZVzFsUFZ3aUp5QXJJR2xrSUNzZ0oxd2lJSE55WXoxY0lpY3JJSE11YVdaeVlXMWxVM0pqSUNzblhDSWdMejRuS1R0Y2NseHVYSFJjZEZ4MFhIUWthVzh1WTNOektIc2djRzl6YVhScGIyNDZJQ2RoWW5OdmJIVjBaU2NzSUhSdmNEb2dKeTB4TURBd2NIZ25MQ0JzWldaME9pQW5MVEV3TURCd2VDY2dmU2s3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEZ4MGFXOGdQU0FrYVc5Yk1GMDdYSEpjYmx4eVhHNWNjbHh1WEhSY2RGeDBlR2h5SUQwZ2V5QXZMeUJ0YjJOcklHOWlhbVZqZEZ4eVhHNWNkRngwWEhSY2RHRmliM0owWldRNklEQXNYSEpjYmx4MFhIUmNkRngwY21WemNHOXVjMlZVWlhoME9pQnVkV3hzTEZ4eVhHNWNkRngwWEhSY2RISmxjM0J2Ym5ObFdFMU1PaUJ1ZFd4c0xGeHlYRzVjZEZ4MFhIUmNkSE4wWVhSMWN6b2dNQ3hjY2x4dVhIUmNkRngwWEhSemRHRjBkWE5VWlhoME9pQW5iaTloSnl4Y2NseHVYSFJjZEZ4MFhIUm5aWFJCYkd4U1pYTndiMjV6WlVobFlXUmxjbk02SUdaMWJtTjBhVzl1S0NrZ2UzMHNYSEpjYmx4MFhIUmNkRngwWjJWMFVtVnpjRzl1YzJWSVpXRmtaWEk2SUdaMWJtTjBhVzl1S0NrZ2UzMHNYSEpjYmx4MFhIUmNkRngwYzJWMFVtVnhkV1Z6ZEVobFlXUmxjam9nWm5WdVkzUnBiMjRvS1NCN2ZTeGNjbHh1WEhSY2RGeDBYSFJoWW05eWREb2dablZ1WTNScGIyNG9jM1JoZEhWektTQjdYSEpjYmx4MFhIUmNkRngwWEhSMllYSWdaU0E5SUNoemRHRjBkWE1nUFQwOUlDZDBhVzFsYjNWMEp5QS9JQ2QwYVcxbGIzVjBKeUE2SUNkaFltOXlkR1ZrSnlrN1hISmNibHgwWEhSY2RGeDBYSFJzYjJjb0oyRmliM0owYVc1bklIVndiRzloWkM0dUxpQW5JQ3NnWlNrN1hISmNibHgwWEhSY2RGeDBYSFIwYUdsekxtRmliM0owWldRZ1BTQXhPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkSFJ5ZVNCN0lDOHZJQ015TVRRc0lDTXlOVGRjY2x4dVhIUmNkRngwWEhSY2RGeDBhV1lnS0dsdkxtTnZiblJsYm5SWGFXNWtiM2N1Wkc5amRXMWxiblF1WlhobFkwTnZiVzFoYm1RcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUnBieTVqYjI1MFpXNTBWMmx1Wkc5M0xtUnZZM1Z0Wlc1MExtVjRaV05EYjIxdFlXNWtLQ2RUZEc5d0p5azdYSEpjYmx4MFhIUmNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUmNkR05oZEdOb0tHbG5ibTl5WlNrZ2UzMWNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUWthVzh1WVhSMGNpZ25jM0pqSnl3Z2N5NXBabkpoYldWVGNtTXBPeUF2THlCaFltOXlkQ0J2Y0NCcGJpQndjbTluY21WemMxeHlYRzVjZEZ4MFhIUmNkRngwZUdoeUxtVnljbTl5SUQwZ1pUdGNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaHpMbVZ5Y205eUtWeHlYRzVjZEZ4MFhIUmNkRngwWEhSekxtVnljbTl5TG1OaGJHd29jeTVqYjI1MFpYaDBMQ0I0YUhJc0lHVXNJSE4wWVhSMWN5azdYSEpjYmx4MFhIUmNkRngwWEhScFppQW9aeWxjY2x4dVhIUmNkRngwWEhSY2RGeDBKQzVsZG1WdWRDNTBjbWxuWjJWeUtGd2lZV3BoZUVWeWNtOXlYQ0lzSUZ0NGFISXNJSE1zSUdWZEtUdGNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaHpMbU52YlhCc1pYUmxLVnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUnpMbU52YlhCc1pYUmxMbU5oYkd3b2N5NWpiMjUwWlhoMExDQjRhSElzSUdVcE8xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwZlR0Y2NseHVYSEpjYmx4MFhIUmNkR2NnUFNCekxtZHNiMkpoYkR0Y2NseHVYSFJjZEZ4MEx5OGdkSEpwWjJkbGNpQmhhbUY0SUdkc2IySmhiQ0JsZG1WdWRITWdjMjhnZEdoaGRDQmhZM1JwZG1sMGVTOWliRzlqYXlCcGJtUnBZMkYwYjNKeklIZHZjbXNnYkdsclpTQnViM0p0WVd4Y2NseHVYSFJjZEZ4MGFXWWdLR2NnSmlZZ01DQTlQVDBnSkM1aFkzUnBkbVVyS3lrZ2UxeHlYRzVjZEZ4MFhIUmNkQ1F1WlhabGJuUXVkSEpwWjJkbGNpaGNJbUZxWVhoVGRHRnlkRndpS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUnBaaUFvWnlrZ2UxeHlYRzVjZEZ4MFhIUmNkQ1F1WlhabGJuUXVkSEpwWjJkbGNpaGNJbUZxWVhoVFpXNWtYQ0lzSUZ0NGFISXNJSE5kS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwYVdZZ0tITXVZbVZtYjNKbFUyVnVaQ0FtSmlCekxtSmxabTl5WlZObGJtUXVZMkZzYkNoekxtTnZiblJsZUhRc0lIaG9jaXdnY3lrZ1BUMDlJR1poYkhObEtTQjdYSEpjYmx4MFhIUmNkRngwYVdZZ0tITXVaMnh2WW1Gc0tTQjdYSEpjYmx4MFhIUmNkRngwWEhRa0xtRmpkR2wyWlMwdE8xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSa1pXWmxjbkpsWkM1eVpXcGxZM1FvS1R0Y2NseHVYSFJjZEZ4MFhIUnlaWFIxY200Z1pHVm1aWEp5WldRN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RGeDBhV1lnS0hob2NpNWhZbTl5ZEdWa0tTQjdYSEpjYmx4MFhIUmNkRngwWkdWbVpYSnlaV1F1Y21WcVpXTjBLQ2s3WEhKY2JseDBYSFJjZEZ4MGNtVjBkWEp1SUdSbFptVnljbVZrTzF4eVhHNWNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFF2THlCaFpHUWdjM1ZpYldsMGRHbHVaeUJsYkdWdFpXNTBJSFJ2SUdSaGRHRWdhV1lnZDJVZ2EyNXZkeUJwZEZ4eVhHNWNkRngwWEhSemRXSWdQU0JtYjNKdExtTnNhenRjY2x4dVhIUmNkRngwYVdZZ0tITjFZaWtnZTF4eVhHNWNkRngwWEhSY2RHNGdQU0J6ZFdJdWJtRnRaVHRjY2x4dVhIUmNkRngwWEhScFppQW9iaUFtSmlBaGMzVmlMbVJwYzJGaWJHVmtLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUnpMbVY0ZEhKaFJHRjBZU0E5SUhNdVpYaDBjbUZFWVhSaElIeDhJSHQ5TzF4eVhHNWNkRngwWEhSY2RGeDBjeTVsZUhSeVlVUmhkR0ZiYmwwZ1BTQnpkV0l1ZG1Gc2RXVTdYSEpjYmx4MFhIUmNkRngwWEhScFppQW9jM1ZpTG5SNWNHVWdQVDBnWENKcGJXRm5aVndpS1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZEhNdVpYaDBjbUZFWVhSaFcyNHJKeTU0SjEwZ1BTQm1iM0p0TG1Oc2ExOTRPMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUnpMbVY0ZEhKaFJHRjBZVnR1S3ljdWVTZGRJRDBnWm05eWJTNWpiR3RmZVR0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEhaaGNpQkRURWxGVGxSZlZFbE5SVTlWVkY5QlFrOVNWQ0E5SURFN1hISmNibHgwWEhSY2RIWmhjaUJUUlZKV1JWSmZRVUpQVWxRZ1BTQXlPMXh5WEc1Y2RGeDBYSFJjZEZ4MFhISmNibHgwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJ2WXlobWNtRnRaU2tnZTF4eVhHNWNkRngwWEhSY2RDOHFJR2wwSUd4dmIydHpJR3hwYTJVZ1kyOXVkR1Z1ZEZkcGJtUnZkeUJ2Y2lCamIyNTBaVzUwUkc5amRXMWxiblFnWkc4Z2JtOTBYSEpjYmx4MFhIUmNkRngwSUNvZ1kyRnljbmtnZEdobElIQnliM1J2WTI5c0lIQnliM0JsY25SNUlHbHVJR2xsT0N3Z2QyaGxiaUJ5ZFc1dWFXNW5JSFZ1WkdWeUlITnpiRnh5WEc1Y2RGeDBYSFJjZENBcUlHWnlZVzFsTG1SdlkzVnRaVzUwSUdseklIUm9aU0J2Ym14NUlIWmhiR2xrSUhKbGMzQnZibk5sSUdSdlkzVnRaVzUwTENCemFXNWpaVnh5WEc1Y2RGeDBYSFJjZENBcUlIUm9aU0J3Y205MGIyTnZiQ0JwY3lCcmJtOTNJR0oxZENCdWIzUWdiMjRnZEdobElHOTBhR1Z5SUhSM2J5QnZZbXBsWTNSekxpQnpkSEpoYm1kbFAxeHlYRzVjZEZ4MFhIUmNkQ0FxSUZ3aVUyRnRaU0J2Y21sbmFXNGdjRzlzYVdONVhDSWdhSFIwY0RvdkwyVnVMbmRwYTJsd1pXUnBZUzV2Y21jdmQybHJhUzlUWVcxbFgyOXlhV2RwYmw5d2IyeHBZM2xjY2x4dVhIUmNkRngwWEhRZ0tpOWNjbHh1WEhSY2RGeDBYSFJjY2x4dVhIUmNkRngwWEhSMllYSWdaRzlqSUQwZ2JuVnNiRHRjY2x4dVhIUmNkRngwWEhSY2NseHVYSFJjZEZ4MFhIUXZMeUJKUlRnZ1kyRnpZMkZrYVc1bklHRmpZMlZ6Y3lCamFHVmphMXh5WEc1Y2RGeDBYSFJjZEhSeWVTQjdYSEpjYmx4MFhIUmNkRngwWEhScFppQW9abkpoYldVdVkyOXVkR1Z1ZEZkcGJtUnZkeWtnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJrYjJNZ1BTQm1jbUZ0WlM1amIyNTBaVzUwVjJsdVpHOTNMbVJ2WTNWdFpXNTBPMXh5WEc1Y2RGeDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkSDBnWTJGMFkyZ29aWEp5S1NCN1hISmNibHgwWEhSY2RGeDBYSFF2THlCSlJUZ2dZV05qWlhOeklHUmxibWxsWkNCMWJtUmxjaUJ6YzJ3Z0ppQnRhWE56YVc1bklIQnliM1J2WTI5c1hISmNibHgwWEhSY2RGeDBYSFJzYjJjb0oyTmhibTV2ZENCblpYUWdhV1p5WVcxbExtTnZiblJsYm5SWGFXNWtiM2NnWkc5amRXMWxiblE2SUNjZ0t5QmxjbklwTzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MGFXWWdLR1J2WXlrZ2V5QXZMeUJ6ZFdOalpYTnpablZzSUdkbGRIUnBibWNnWTI5dWRHVnVkRnh5WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUdSdll6dGNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUmNkSFJ5ZVNCN0lDOHZJSE5wYlhCc2VTQmphR1ZqYTJsdVp5QnRZWGtnZEdoeWIzY2dhVzRnYVdVNElIVnVaR1Z5SUhOemJDQnZjaUJ0YVhOdFlYUmphR1ZrSUhCeWIzUnZZMjlzWEhKY2JseDBYSFJjZEZ4MFhIUmtiMk1nUFNCbWNtRnRaUzVqYjI1MFpXNTBSRzlqZFcxbGJuUWdQeUJtY21GdFpTNWpiMjUwWlc1MFJHOWpkVzFsYm5RZ09pQm1jbUZ0WlM1a2IyTjFiV1Z1ZER0Y2NseHVYSFJjZEZ4MFhIUjlJR05oZEdOb0tHVnljaWtnZTF4eVhHNWNkRngwWEhSY2RGeDBMeThnYkdGemRDQmhkSFJsYlhCMFhISmNibHgwWEhSY2RGeDBYSFJzYjJjb0oyTmhibTV2ZENCblpYUWdhV1p5WVcxbExtTnZiblJsYm5SRWIyTjFiV1Z1ZERvZ0p5QXJJR1Z5Y2lrN1hISmNibHgwWEhSY2RGeDBYSFJrYjJNZ1BTQm1jbUZ0WlM1a2IyTjFiV1Z1ZER0Y2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwY21WMGRYSnVJR1J2WXp0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwTHk4Z1VtRnBiSE1nUTFOU1JpQm9ZV05ySUNoMGFHRnVhM01nZEc4Z1dYWmhiaUJDWVhKMGFHVnNaVzE1S1Z4eVhHNWNkRngwWEhSMllYSWdZM055Wmw5MGIydGxiaUE5SUNRb0oyMWxkR0ZiYm1GdFpUMWpjM0ptTFhSdmEyVnVYU2NwTG1GMGRISW9KMk52Ym5SbGJuUW5LVHRjY2x4dVhIUmNkRngwZG1GeUlHTnpjbVpmY0dGeVlXMGdQU0FrS0NkdFpYUmhXMjVoYldVOVkzTnlaaTF3WVhKaGJWMG5LUzVoZEhSeUtDZGpiMjUwWlc1MEp5azdYSEpjYmx4MFhIUmNkR2xtSUNoamMzSm1YM0JoY21GdElDWW1JR056Y21aZmRHOXJaVzRwSUh0Y2NseHVYSFJjZEZ4MFhIUnpMbVY0ZEhKaFJHRjBZU0E5SUhNdVpYaDBjbUZFWVhSaElIeDhJSHQ5TzF4eVhHNWNkRngwWEhSY2RITXVaWGgwY21GRVlYUmhXMk56Y21aZmNHRnlZVzFkSUQwZ1kzTnlabDkwYjJ0bGJqdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MEx5OGdkR0ZyWlNCaElHSnlaV0YwYUNCemJ5QjBhR0YwSUhCbGJtUnBibWNnY21Wd1lXbHVkSE1nWjJWMElITnZiV1VnWTNCMUlIUnBiV1VnWW1WbWIzSmxJSFJvWlNCMWNHeHZZV1FnYzNSaGNuUnpYSEpjYmx4MFhIUmNkR1oxYm1OMGFXOXVJR1J2VTNWaWJXbDBLQ2tnZTF4eVhHNWNkRngwWEhSY2RDOHZJRzFoYTJVZ2MzVnlaU0JtYjNKdElHRjBkSEp6SUdGeVpTQnpaWFJjY2x4dVhIUmNkRngwWEhSMllYSWdkQ0E5SUNSbWIzSnRMbUYwZEhJeUtDZDBZWEpuWlhRbktTd2dZU0E5SUNSbWIzSnRMbUYwZEhJeUtDZGhZM1JwYjI0bktUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MEx5OGdkWEJrWVhSbElHWnZjbTBnWVhSMGNuTWdhVzRnU1VVZ1puSnBaVzVrYkhrZ2QyRjVYSEpjYmx4MFhIUmNkRngwWm05eWJTNXpaWFJCZEhSeWFXSjFkR1VvSjNSaGNtZGxkQ2NzYVdRcE8xeHlYRzVjZEZ4MFhIUmNkR2xtSUNnaGJXVjBhRzlrSUh4OElDOXdiM04wTDJrdWRHVnpkQ2h0WlhSb2IyUXBJQ2tnZTF4eVhHNWNkRngwWEhSY2RGeDBabTl5YlM1elpYUkJkSFJ5YVdKMWRHVW9KMjFsZEdodlpDY3NJQ2RRVDFOVUp5azdYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RHbG1JQ2hoSUNFOUlITXVkWEpzS1NCN1hISmNibHgwWEhSY2RGeDBYSFJtYjNKdExuTmxkRUYwZEhKcFluVjBaU2duWVdOMGFXOXVKeXdnY3k1MWNtd3BPMXh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRngwTHk4Z2FXVWdZbTl5YTNNZ2FXNGdjMjl0WlNCallYTmxjeUIzYUdWdUlITmxkSFJwYm1jZ1pXNWpiMlJwYm1kY2NseHVYSFJjZEZ4MFhIUnBaaUFvSVNCekxuTnJhWEJGYm1OdlpHbHVaMDkyWlhKeWFXUmxJQ1ltSUNnaGJXVjBhRzlrSUh4OElDOXdiM04wTDJrdWRHVnpkQ2h0WlhSb2IyUXBLU2tnZTF4eVhHNWNkRngwWEhSY2RGeDBKR1p2Y20wdVlYUjBjaWg3WEhKY2JseDBYSFJjZEZ4MFhIUmNkR1Z1WTI5a2FXNW5PaUFuYlhWc2RHbHdZWEowTDJadmNtMHRaR0YwWVNjc1hISmNibHgwWEhSY2RGeDBYSFJjZEdWdVkzUjVjR1U2SUNBbmJYVnNkR2x3WVhKMEwyWnZjbTB0WkdGMFlTZGNjbHh1WEhSY2RGeDBYSFJjZEgwcE8xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RGeDBMeThnYzNWd2NHOXlkQ0IwYVcxdmRYUmNjbHh1WEhSY2RGeDBYSFJwWmlBb2N5NTBhVzFsYjNWMEtTQjdYSEpjYmx4MFhIUmNkRngwWEhSMGFXMWxiM1YwU0dGdVpHeGxJRDBnYzJWMFZHbHRaVzkxZENobWRXNWpkR2x2YmlncElIc2dkR2x0WldSUGRYUWdQU0IwY25WbE95QmpZaWhEVEVsRlRsUmZWRWxOUlU5VlZGOUJRazlTVkNrN0lIMHNJSE11ZEdsdFpXOTFkQ2s3WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwWEhRdkx5QnNiMjlySUdadmNpQnpaWEoyWlhJZ1lXSnZjblJ6WEhKY2JseDBYSFJjZEZ4MFpuVnVZM1JwYjI0Z1kyaGxZMnRUZEdGMFpTZ3BJSHRjY2x4dVhIUmNkRngwWEhSY2RIUnllU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkSFpoY2lCemRHRjBaU0E5SUdkbGRFUnZZeWhwYnlrdWNtVmhaSGxUZEdGMFpUdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGJHOW5LQ2R6ZEdGMFpTQTlJQ2NnS3lCemRHRjBaU2s3WEhKY2JseDBYSFJjZEZ4MFhIUmNkR2xtSUNoemRHRjBaU0FtSmlCemRHRjBaUzUwYjB4dmQyVnlRMkZ6WlNncElEMDlJQ2QxYm1sdWFYUnBZV3hwZW1Wa0p5bGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUnpaWFJVYVcxbGIzVjBLR05vWldOclUzUmhkR1VzTlRBcE8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RGeDBZMkYwWTJnb1pTa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUnNiMmNvSjFObGNuWmxjaUJoWW05eWREb2dKeUFzSUdVc0lDY2dLQ2NzSUdVdWJtRnRaU3dnSnlrbktUdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFkySW9VMFZTVmtWU1gwRkNUMUpVS1R0Y2NseHVYSFJjZEZ4MFhIUmNkRngwYVdZZ0tIUnBiV1Z2ZFhSSVlXNWtiR1VwWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWTJ4bFlYSlVhVzFsYjNWMEtIUnBiV1Z2ZFhSSVlXNWtiR1VwTzF4eVhHNWNkRngwWEhSY2RGeDBYSFIwYVcxbGIzVjBTR0Z1Wkd4bElEMGdkVzVrWldacGJtVmtPMXh5WEc1Y2RGeDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RGeDBMeThnWVdSa0lGd2laWGgwY21GY0lpQmtZWFJoSUhSdklHWnZjbTBnYVdZZ2NISnZkbWxrWldRZ2FXNGdiM0IwYVc5dWMxeHlYRzVjZEZ4MFhIUmNkSFpoY2lCbGVIUnlZVWx1Y0hWMGN5QTlJRnRkTzF4eVhHNWNkRngwWEhSY2RIUnllU0I3WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvY3k1bGVIUnlZVVJoZEdFcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFptOXlJQ2gyWVhJZ2JpQnBiaUJ6TG1WNGRISmhSR0YwWVNrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RHbG1JQ2h6TG1WNGRISmhSR0YwWVM1b1lYTlBkMjVRY205d1pYSjBlU2h1S1NrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RDQWdJQzh2SUdsbUlIVnphVzVuSUhSb1pTQWtMbkJoY21GdElHWnZjbTFoZENCMGFHRjBJR0ZzYkc5M2N5Qm1iM0lnYlhWc2RHbHdiR1VnZG1Gc2RXVnpJSGRwZEdnZ2RHaGxJSE5oYldVZ2JtRnRaVnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkQ0FnSUdsbUtDUXVhWE5RYkdGcGJrOWlhbVZqZENoekxtVjRkSEpoUkdGMFlWdHVYU2tnSmlZZ2N5NWxlSFJ5WVVSaGRHRmJibDB1YUdGelQzZHVVSEp2Y0dWeWRIa29KMjVoYldVbktTQW1KaUJ6TG1WNGRISmhSR0YwWVZ0dVhTNW9ZWE5QZDI1UWNtOXdaWEowZVNnbmRtRnNkV1VuS1NrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBJQ0FnWlhoMGNtRkpibkIxZEhNdWNIVnphQ2hjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZENBZ0lDUW9KenhwYm5CMWRDQjBlWEJsUFZ3aWFHbGtaR1Z1WENJZ2JtRnRaVDFjSWljcmN5NWxlSFJ5WVVSaGRHRmJibDB1Ym1GdFpTc25YQ0krSnlrdWRtRnNLSE11WlhoMGNtRkVZWFJoVzI1ZExuWmhiSFZsS1Z4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUWdJQ0F1WVhCd1pXNWtWRzhvWm05eWJTbGJNRjBwTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJjZENBZ0lIMGdaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUWdJQ0JsZUhSeVlVbHVjSFYwY3k1d2RYTm9LRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwSUNBZ0pDZ25QR2x1Y0hWMElIUjVjR1U5WENKb2FXUmtaVzVjSWlCdVlXMWxQVndpSnl0dUt5ZGNJajRuS1M1MllXd29jeTVsZUhSeVlVUmhkR0ZiYmwwcFhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkQ0FnSUM1aGNIQmxibVJVYnlobWIzSnRLVnN3WFNrN1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MElDQWdmVnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2doY3k1cFpuSmhiV1ZVWVhKblpYUXBJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBMeThnWVdSa0lHbG1jbUZ0WlNCMGJ5QmtiMk1nWVc1a0lITjFZbTFwZENCMGFHVWdabTl5YlZ4eVhHNWNkRngwWEhSY2RGeDBYSFFrYVc4dVlYQndaVzVrVkc4b0oySnZaSGtuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2hwYnk1aGRIUmhZMmhGZG1WdWRDbGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGFXOHVZWFIwWVdOb1JYWmxiblFvSjI5dWJHOWhaQ2NzSUdOaUtUdGNjbHh1WEhSY2RGeDBYSFJjZEdWc2MyVmNjbHh1WEhSY2RGeDBYSFJjZEZ4MGFXOHVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25iRzloWkNjc0lHTmlMQ0JtWVd4elpTazdYSEpjYmx4MFhIUmNkRngwWEhSelpYUlVhVzFsYjNWMEtHTm9aV05yVTNSaGRHVXNNVFVwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEhSeWVTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RHWnZjbTB1YzNWaWJXbDBLQ2s3WEhKY2JseDBYSFJjZEZ4MFhIUjlJR05oZEdOb0tHVnljaWtnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFF2THlCcWRYTjBJR2x1SUdOaGMyVWdabTl5YlNCb1lYTWdaV3hsYldWdWRDQjNhWFJvSUc1aGJXVXZhV1FnYjJZZ0ozTjFZbTFwZENkY2NseHVYSFJjZEZ4MFhIUmNkRngwZG1GeUlITjFZbTFwZEVadUlEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblptOXliU2NwTG5OMVltMXBkRHRjY2x4dVhIUmNkRngwWEhSY2RGeDBjM1ZpYldsMFJtNHVZWEJ3Ykhrb1ptOXliU2s3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RHWnBibUZzYkhrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwTHk4Z2NtVnpaWFFnWVhSMGNuTWdZVzVrSUhKbGJXOTJaU0JjSW1WNGRISmhYQ0lnYVc1d2RYUWdaV3hsYldWdWRITmNjbHh1WEhSY2RGeDBYSFJjZEdadmNtMHVjMlYwUVhSMGNtbGlkWFJsS0NkaFkzUnBiMjRuTEdFcE8xeHlYRzVjZEZ4MFhIUmNkRngwYVdZb2RDa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUm1iM0p0TG5ObGRFRjBkSEpwWW5WMFpTZ25kR0Z5WjJWMEp5d2dkQ2s3WEhKY2JseDBYSFJjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhRa1ptOXliUzV5WlcxdmRtVkJkSFJ5S0NkMFlYSm5aWFFuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSY2RDUW9aWGgwY21GSmJuQjFkSE1wTG5KbGJXOTJaU2dwTzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MGFXWWdLSE11Wm05eVkyVlRlVzVqS1NCN1hISmNibHgwWEhSY2RGeDBaRzlUZFdKdGFYUW9LVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNkRngwWEhSbGJITmxJSHRjY2x4dVhIUmNkRngwWEhSelpYUlVhVzFsYjNWMEtHUnZVM1ZpYldsMExDQXhNQ2s3SUM4dklIUm9hWE1nYkdWMGN5QmtiMjBnZFhCa1lYUmxjeUJ5Wlc1a1pYSmNjbHh1WEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MGRtRnlJR1JoZEdFc0lHUnZZeXdnWkc5dFEyaGxZMnREYjNWdWRDQTlJRFV3TENCallXeHNZbUZqYTFCeWIyTmxjM05sWkR0Y2NseHVYSEpjYmx4MFhIUmNkR1oxYm1OMGFXOXVJR05pS0dVcElIdGNjbHh1WEhSY2RGeDBYSFJwWmlBb2VHaHlMbUZpYjNKMFpXUWdmSHdnWTJGc2JHSmhZMnRRY205alpYTnpaV1FwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJqdGNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MFhISmNibHgwWEhSY2RGeDBaRzlqSUQwZ1oyVjBSRzlqS0dsdktUdGNjbHh1WEhSY2RGeDBYSFJwWmlnaFpHOWpLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUnNiMmNvSjJOaGJtNXZkQ0JoWTJObGMzTWdjbVZ6Y0c5dWMyVWdaRzlqZFcxbGJuUW5LVHRjY2x4dVhIUmNkRngwWEhSY2RHVWdQU0JUUlZKV1JWSmZRVUpQVWxRN1hISmNibHgwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEdsbUlDaGxJRDA5UFNCRFRFbEZUbFJmVkVsTlJVOVZWRjlCUWs5U1ZDQW1KaUI0YUhJcElIdGNjbHh1WEhSY2RGeDBYSFJjZEhob2NpNWhZbTl5ZENnbmRHbHRaVzkxZENjcE8xeHlYRzVjZEZ4MFhIUmNkRngwWkdWbVpYSnlaV1F1Y21WcVpXTjBLSGhvY2l3Z0ozUnBiV1Z2ZFhRbktUdGNjbHh1WEhSY2RGeDBYSFJjZEhKbGRIVnlianRjY2x4dVhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBaV3h6WlNCcFppQW9aU0E5UFNCVFJWSldSVkpmUVVKUFVsUWdKaVlnZUdoeUtTQjdYSEpjYmx4MFhIUmNkRngwWEhSNGFISXVZV0p2Y25Rb0ozTmxjblpsY2lCaFltOXlkQ2NwTzF4eVhHNWNkRngwWEhSY2RGeDBaR1ZtWlhKeVpXUXVjbVZxWldOMEtIaG9jaXdnSjJWeWNtOXlKeXdnSjNObGNuWmxjaUJoWW05eWRDY3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1TzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MGFXWWdLQ0ZrYjJNZ2ZId2daRzlqTG14dlkyRjBhVzl1TG1oeVpXWWdQVDBnY3k1cFpuSmhiV1ZUY21NcElIdGNjbHh1WEhSY2RGeDBYSFJjZEM4dklISmxjM0J2Ym5ObElHNXZkQ0J5WldObGFYWmxaQ0I1WlhSY2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNnaGRHbHRaV1JQZFhRcFhISmNibHgwWEhSY2RGeDBYSFJjZEhKbGRIVnlianRjY2x4dVhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBhV1lnS0dsdkxtUmxkR0ZqYUVWMlpXNTBLVnh5WEc1Y2RGeDBYSFJjZEZ4MGFXOHVaR1YwWVdOb1JYWmxiblFvSjI5dWJHOWhaQ2NzSUdOaUtUdGNjbHh1WEhSY2RGeDBYSFJsYkhObFhISmNibHgwWEhSY2RGeDBYSFJwYnk1eVpXMXZkbVZGZG1WdWRFeHBjM1JsYm1WeUtDZHNiMkZrSnl3Z1kySXNJR1poYkhObEtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MGRtRnlJSE4wWVhSMWN5QTlJQ2R6ZFdOalpYTnpKeXdnWlhKeVRYTm5PMXh5WEc1Y2RGeDBYSFJjZEhSeWVTQjdYSEpjYmx4MFhIUmNkRngwWEhScFppQW9kR2x0WldSUGRYUXBJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBkR2h5YjNjZ0ozUnBiV1Z2ZFhRbk8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEhaaGNpQnBjMWh0YkNBOUlITXVaR0YwWVZSNWNHVWdQVDBnSjNodGJDY2dmSHdnWkc5akxsaE5URVJ2WTNWdFpXNTBJSHg4SUNRdWFYTllUVXhFYjJNb1pHOWpLVHRjY2x4dVhIUmNkRngwWEhSY2RHeHZaeWduYVhOWWJXdzlKeXRwYzFodGJDazdYSEpjYmx4MFhIUmNkRngwWEhScFppQW9JV2x6V0cxc0lDWW1JSGRwYm1SdmR5NXZjR1Z5WVNBbUppQW9aRzlqTG1KdlpIa2dQVDA5SUc1MWJHd2dmSHdnSVdSdll5NWliMlI1TG1sdWJtVnlTRlJOVENrcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGFXWWdLQzB0Wkc5dFEyaGxZMnREYjNWdWRDa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkQzh2SUdsdUlITnZiV1VnWW5KdmQzTmxjbk1nS0U5d1pYSmhLU0IwYUdVZ2FXWnlZVzFsSUVSUFRTQnBjeUJ1YjNRZ1lXeDNZWGx6SUhSeVlYWmxjbk5oWW14bElIZG9aVzVjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFF2THlCMGFHVWdiMjVzYjJGa0lHTmhiR3hpWVdOcklHWnBjbVZ6TENCemJ5QjNaU0JzYjI5d0lHRWdZbWwwSUhSdklHRmpZMjl0Ylc5a1lYUmxYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBiRzluS0NkeVpYRjFaV2x1WnlCdmJreHZZV1FnWTJGc2JHSmhZMnNzSUVSUFRTQnViM1FnWVhaaGFXeGhZbXhsSnlrN1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MGMyVjBWR2x0Wlc5MWRDaGpZaXdnTWpVd0tUdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUnlaWFIxY200N1hISmNibHgwWEhSY2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUmNkRngwTHk4Z2JHVjBJSFJvYVhNZ1ptRnNiQ0IwYUhKdmRXZG9JR0psWTJGMWMyVWdjMlZ5ZG1WeUlISmxjM0J2Ym5ObElHTnZkV3hrSUdKbElHRnVJR1Z0Y0hSNUlHUnZZM1Z0Wlc1MFhISmNibHgwWEhSY2RGeDBYSFJjZEM4dmJHOW5LQ2REYjNWc1pDQnViM1FnWVdOalpYTnpJR2xtY21GdFpTQkVUMDBnWVdaMFpYSWdiWFYwYVhCc1pTQjBjbWxsY3k0bktUdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MEx5OTBhSEp2ZHlBblJFOU5SWGhqWlhCMGFXOXVPaUJ1YjNRZ1lYWmhhV3hoWW14bEp6dGNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRngwWEhRdkwyeHZaeWduY21WemNHOXVjMlVnWkdWMFpXTjBaV1FuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkSFpoY2lCa2IyTlNiMjkwSUQwZ1pHOWpMbUp2WkhrZ1B5QmtiMk11WW05a2VTQTZJR1J2WXk1a2IyTjFiV1Z1ZEVWc1pXMWxiblE3WEhKY2JseDBYSFJjZEZ4MFhIUjRhSEl1Y21WemNHOXVjMlZVWlhoMElEMGdaRzlqVW05dmRDQS9JR1J2WTFKdmIzUXVhVzV1WlhKSVZFMU1JRG9nYm5Wc2JEdGNjbHh1WEhSY2RGeDBYSFJjZEhob2NpNXlaWE53YjI1elpWaE5UQ0E5SUdSdll5NVlUVXhFYjJOMWJXVnVkQ0EvSUdSdll5NVlUVXhFYjJOMWJXVnVkQ0E2SUdSdll6dGNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaHBjMWh0YkNsY2NseHVYSFJjZEZ4MFhIUmNkRngwY3k1a1lYUmhWSGx3WlNBOUlDZDRiV3duTzF4eVhHNWNkRngwWEhSY2RGeDBlR2h5TG1kbGRGSmxjM0J2Ym5ObFNHVmhaR1Z5SUQwZ1puVnVZM1JwYjI0b2FHVmhaR1Z5S1h0Y2NseHVYSFJjZEZ4MFhIUmNkRngwZG1GeUlHaGxZV1JsY25NZ1BTQjdKMk52Ym5SbGJuUXRkSGx3WlNjNklITXVaR0YwWVZSNWNHVjlPMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUnlaWFIxY200Z2FHVmhaR1Z5YzF0b1pXRmtaWEl1ZEc5TWIzZGxja05oYzJVb0tWMDdYSEpjYmx4MFhIUmNkRngwWEhSOU8xeHlYRzVjZEZ4MFhIUmNkRngwTHk4Z2MzVndjRzl5ZENCbWIzSWdXRWhTSUNkemRHRjBkWE1uSUNZZ0ozTjBZWFIxYzFSbGVIUW5JR1Z0ZFd4aGRHbHZiaUE2WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvWkc5alVtOXZkQ2tnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFI0YUhJdWMzUmhkSFZ6SUQwZ1RuVnRZbVZ5S0NCa2IyTlNiMjkwTG1kbGRFRjBkSEpwWW5WMFpTZ25jM1JoZEhWekp5a2dLU0I4ZkNCNGFISXVjM1JoZEhWek8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSNGFISXVjM1JoZEhWelZHVjRkQ0E5SUdSdlkxSnZiM1F1WjJWMFFYUjBjbWxpZFhSbEtDZHpkR0YwZFhOVVpYaDBKeWtnZkh3Z2VHaHlMbk4wWVhSMWMxUmxlSFE3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBkbUZ5SUdSMElEMGdLSE11WkdGMFlWUjVjR1VnZkh3Z0p5Y3BMblJ2VEc5M1pYSkRZWE5sS0NrN1hISmNibHgwWEhSY2RGeDBYSFIyWVhJZ2MyTnlJRDBnTHlocWMyOXVmSE5qY21sd2RIeDBaWGgwS1M4dWRHVnpkQ2hrZENrN1hISmNibHgwWEhSY2RGeDBYSFJwWmlBb2MyTnlJSHg4SUhNdWRHVjRkR0Z5WldFcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MEx5OGdjMlZsSUdsbUlIVnpaWElnWlcxaVpXUmtaV1FnY21WemNHOXVjMlVnYVc0Z2RHVjRkR0Z5WldGY2NseHVYSFJjZEZ4MFhIUmNkRngwZG1GeUlIUmhJRDBnWkc5akxtZGxkRVZzWlcxbGJuUnpRbmxVWVdkT1lXMWxLQ2QwWlhoMFlYSmxZU2NwV3pCZE8xeHlYRzVjZEZ4MFhIUmNkRngwWEhScFppQW9kR0VwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSNGFISXVjbVZ6Y0c5dWMyVlVaWGgwSUQwZ2RHRXVkbUZzZFdVN1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MEx5OGdjM1Z3Y0c5eWRDQm1iM0lnV0VoU0lDZHpkR0YwZFhNbklDWWdKM04wWVhSMWMxUmxlSFFuSUdWdGRXeGhkR2x2YmlBNlhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MGVHaHlMbk4wWVhSMWN5QTlJRTUxYldKbGNpZ2dkR0V1WjJWMFFYUjBjbWxpZFhSbEtDZHpkR0YwZFhNbktTQXBJSHg4SUhob2NpNXpkR0YwZFhNN1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MGVHaHlMbk4wWVhSMWMxUmxlSFFnUFNCMFlTNW5aWFJCZEhSeWFXSjFkR1VvSjNOMFlYUjFjMVJsZUhRbktTQjhmQ0I0YUhJdWMzUmhkSFZ6VkdWNGREdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkRngwWEhSbGJITmxJR2xtSUNoelkzSXBJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFF2THlCaFkyTnZkVzUwSUdadmNpQmljbTkzYzJWeWN5QnBibXBsWTNScGJtY2djSEpsSUdGeWIzVnVaQ0JxYzI5dUlISmxjM0J2Ym5ObFhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MGRtRnlJSEJ5WlNBOUlHUnZZeTVuWlhSRmJHVnRaVzUwYzBKNVZHRm5UbUZ0WlNnbmNISmxKeWxiTUYwN1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MGRtRnlJR0lnUFNCa2IyTXVaMlYwUld4bGJXVnVkSE5DZVZSaFowNWhiV1VvSjJKdlpIa25LVnN3WFR0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhScFppQW9jSEpsS1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUjRhSEl1Y21WemNHOXVjMlZVWlhoMElEMGdjSEpsTG5SbGVIUkRiMjUwWlc1MElEOGdjSEpsTG5SbGVIUkRiMjUwWlc1MElEb2djSEpsTG1sdWJtVnlWR1Y0ZER0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFpXeHpaU0JwWmlBb1lpa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwZUdoeUxuSmxjM0J2Ym5ObFZHVjRkQ0E5SUdJdWRHVjRkRU52Ym5SbGJuUWdQeUJpTG5SbGVIUkRiMjUwWlc1MElEb2dZaTVwYm01bGNsUmxlSFE3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwWEhSbGJITmxJR2xtSUNoa2RDQTlQU0FuZUcxc0p5QW1KaUFoZUdoeUxuSmxjM0J2Ym5ObFdFMU1JQ1ltSUhob2NpNXlaWE53YjI1elpWUmxlSFFwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwZUdoeUxuSmxjM0J2Ym5ObFdFMU1JRDBnZEc5WWJXd29lR2h5TG5KbGMzQnZibk5sVkdWNGRDazdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGRISjVJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBaR0YwWVNBOUlHaDBkSEJFWVhSaEtIaG9jaXdnWkhRc0lITXBPMXh5WEc1Y2RGeDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkRngwWTJGMFkyZ2dLR1Z5Y2lrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSemRHRjBkWE1nUFNBbmNHRnljMlZ5WlhKeWIzSW5PMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUjRhSEl1WlhKeWIzSWdQU0JsY25KTmMyY2dQU0FvWlhKeUlIeDhJSE4wWVhSMWN5azdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEdOaGRHTm9JQ2hsY25JcElIdGNjbHh1WEhSY2RGeDBYSFJjZEd4dlp5Z25aWEp5YjNJZ1kyRjFaMmgwT2lBbkxHVnljaWs3WEhKY2JseDBYSFJjZEZ4MFhIUnpkR0YwZFhNZ1BTQW5aWEp5YjNJbk8xeHlYRzVjZEZ4MFhIUmNkRngwZUdoeUxtVnljbTl5SUQwZ1pYSnlUWE5uSUQwZ0tHVnljaUI4ZkNCemRHRjBkWE1wTzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MGFXWWdLSGhvY2k1aFltOXlkR1ZrS1NCN1hISmNibHgwWEhSY2RGeDBYSFJzYjJjb0ozVndiRzloWkNCaFltOXlkR1ZrSnlrN1hISmNibHgwWEhSY2RGeDBYSFJ6ZEdGMGRYTWdQU0J1ZFd4c08xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RGeDBhV1lnS0hob2NpNXpkR0YwZFhNcElIc2dMeThnZDJVbmRtVWdjMlYwSUhob2NpNXpkR0YwZFhOY2NseHVYSFJjZEZ4MFhIUmNkSE4wWVhSMWN5QTlJQ2g0YUhJdWMzUmhkSFZ6SUQ0OUlESXdNQ0FtSmlCNGFISXVjM1JoZEhWeklEd2dNekF3SUh4OElIaG9jaTV6ZEdGMGRYTWdQVDA5SURNd05Da2dQeUFuYzNWalkyVnpjeWNnT2lBblpYSnliM0luTzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MEx5OGdiM0prWlhKcGJtY2diMllnZEdobGMyVWdZMkZzYkdKaFkydHpMM1J5YVdkblpYSnpJR2x6SUc5a1pDd2dZblYwSUhSb1lYUW5jeUJvYjNjZ0pDNWhhbUY0SUdSdlpYTWdhWFJjY2x4dVhIUmNkRngwWEhScFppQW9jM1JoZEhWeklEMDlQU0FuYzNWalkyVnpjeWNwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNoekxuTjFZMk5sYzNNcFhISmNibHgwWEhSY2RGeDBYSFJjZEhNdWMzVmpZMlZ6Y3k1allXeHNLSE11WTI5dWRHVjRkQ3dnWkdGMFlTd2dKM04xWTJObGMzTW5MQ0I0YUhJcE8xeHlYRzVjZEZ4MFhIUmNkRngwWkdWbVpYSnlaV1F1Y21WemIyeDJaU2g0YUhJdWNtVnpjRzl1YzJWVVpYaDBMQ0FuYzNWalkyVnpjeWNzSUhob2NpazdYSEpjYmx4MFhIUmNkRngwWEhScFppQW9aeWxjY2x4dVhIUmNkRngwWEhSY2RGeDBKQzVsZG1WdWRDNTBjbWxuWjJWeUtGd2lZV3BoZUZOMVkyTmxjM05jSWl3Z1czaG9jaXdnYzEwcE8xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSbGJITmxJR2xtSUNoemRHRjBkWE1wSUh0Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNobGNuSk5jMmNnUFQwOUlIVnVaR1ZtYVc1bFpDbGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFpYSnlUWE5uSUQwZ2VHaHlMbk4wWVhSMWMxUmxlSFE3WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvY3k1bGNuSnZjaWxjY2x4dVhIUmNkRngwWEhSY2RGeDBjeTVsY25KdmNpNWpZV3hzS0hNdVkyOXVkR1Y0ZEN3Z2VHaHlMQ0J6ZEdGMGRYTXNJR1Z5Y2sxelp5azdYSEpjYmx4MFhIUmNkRngwWEhSa1pXWmxjbkpsWkM1eVpXcGxZM1FvZUdoeUxDQW5aWEp5YjNJbkxDQmxjbkpOYzJjcE8xeHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tHY3BYSEpjYmx4MFhIUmNkRngwWEhSY2RDUXVaWFpsYm5RdWRISnBaMmRsY2loY0ltRnFZWGhGY25KdmNsd2lMQ0JiZUdoeUxDQnpMQ0JsY25KTmMyZGRLVHRjY2x4dVhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEdsbUlDaG5LVnh5WEc1Y2RGeDBYSFJjZEZ4MEpDNWxkbVZ1ZEM1MGNtbG5aMlZ5S0Z3aVlXcGhlRU52YlhCc1pYUmxYQ0lzSUZ0NGFISXNJSE5kS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwYVdZZ0tHY2dKaVlnSVNBdExTUXVZV04wYVhabEtTQjdYSEpjYmx4MFhIUmNkRngwWEhRa0xtVjJaVzUwTG5SeWFXZG5aWElvWENKaGFtRjRVM1J2Y0Z3aUtUdGNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUmNkR2xtSUNoekxtTnZiWEJzWlhSbEtWeHlYRzVjZEZ4MFhIUmNkRngwY3k1amIyMXdiR1YwWlM1allXeHNLSE11WTI5dWRHVjRkQ3dnZUdoeUxDQnpkR0YwZFhNcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSallXeHNZbUZqYTFCeWIyTmxjM05sWkNBOUlIUnlkV1U3WEhKY2JseDBYSFJjZEZ4MGFXWWdLSE11ZEdsdFpXOTFkQ2xjY2x4dVhIUmNkRngwWEhSY2RHTnNaV0Z5VkdsdFpXOTFkQ2gwYVcxbGIzVjBTR0Z1Wkd4bEtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MEx5OGdZMnhsWVc0Z2RYQmNjbHh1WEhSY2RGeDBYSFJ6WlhSVWFXMWxiM1YwS0daMWJtTjBhVzl1S0NrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tDRnpMbWxtY21GdFpWUmhjbWRsZENsY2NseHVYSFJjZEZ4MFhIUmNkRngwSkdsdkxuSmxiVzkyWlNncE8xeHlYRzVjZEZ4MFhIUmNkRngwWld4elpTQWdMeTloWkdScGJtY2daV3h6WlNCMGJ5QmpiR1ZoYmlCMWNDQmxlR2x6ZEdsdVp5QnBabkpoYldVZ2NtVnpjRzl1YzJVdVhISmNibHgwWEhSY2RGeDBYSFJjZENScGJ5NWhkSFJ5S0NkemNtTW5MQ0J6TG1sbWNtRnRaVk55WXlrN1hISmNibHgwWEhSY2RGeDBYSFI0YUhJdWNtVnpjRzl1YzJWWVRVd2dQU0J1ZFd4c08xeHlYRzVjZEZ4MFhIUmNkSDBzSURFd01DazdYSEpjYmx4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RIWmhjaUIwYjFodGJDQTlJQ1F1Y0dGeWMyVllUVXdnZkh3Z1puVnVZM1JwYjI0b2N5d2daRzlqS1NCN0lDOHZJSFZ6WlNCd1lYSnpaVmhOVENCcFppQmhkbUZwYkdGaWJHVWdLR3BSZFdWeWVTQXhMalVyS1Z4eVhHNWNkRngwWEhSY2RHbG1JQ2gzYVc1a2IzY3VRV04wYVhabFdFOWlhbVZqZENrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWkc5aklEMGdibVYzSUVGamRHbDJaVmhQWW1wbFkzUW9KMDFwWTNKdmMyOW1kQzVZVFV4RVQwMG5LVHRjY2x4dVhIUmNkRngwWEhSY2RHUnZZeTVoYzNsdVl5QTlJQ2RtWVd4elpTYzdYSEpjYmx4MFhIUmNkRngwWEhSa2IyTXViRzloWkZoTlRDaHpLVHRjY2x4dVhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBYSFJrYjJNZ1BTQW9ibVYzSUVSUFRWQmhjbk5sY2lncEtTNXdZWEp6WlVaeWIyMVRkSEpwYm1jb2N5d2dKM1JsZUhRdmVHMXNKeWs3WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQW9aRzlqSUNZbUlHUnZZeTVrYjJOMWJXVnVkRVZzWlcxbGJuUWdKaVlnWkc5akxtUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEM1dWIyUmxUbUZ0WlNBaFBTQW5jR0Z5YzJWeVpYSnliM0luS1NBL0lHUnZZeUE2SUc1MWJHdzdYSEpjYmx4MFhIUmNkSDA3WEhKY2JseDBYSFJjZEhaaGNpQndZWEp6WlVwVFQwNGdQU0FrTG5CaGNuTmxTbE5QVGlCOGZDQm1kVzVqZEdsdmJpaHpLU0I3WEhKY2JseDBYSFJjZEZ4MEx5cHFjMnhwYm5RZ1pYWnBiRHAwY25WbElDb3ZYSEpjYmx4MFhIUmNkRngwY21WMGRYSnVJSGRwYm1SdmQxc25aWFpoYkNkZEtDY29KeUFySUhNZ0t5QW5LU2NwTzF4eVhHNWNkRngwWEhSOU8xeHlYRzVjY2x4dVhIUmNkRngwZG1GeUlHaDBkSEJFWVhSaElEMGdablZ1WTNScGIyNG9JSGhvY2l3Z2RIbHdaU3dnY3lBcElIc2dMeThnYlc5emRHeDVJR3hwWm5SbFpDQm1jbTl0SUdweE1TNDBMalJjY2x4dVhISmNibHgwWEhSY2RGeDBkbUZ5SUdOMElEMGdlR2h5TG1kbGRGSmxjM0J2Ym5ObFNHVmhaR1Z5S0NkamIyNTBaVzUwTFhSNWNHVW5LU0I4ZkNBbkp5eGNjbHh1WEhSY2RGeDBYSFJjZEhodGJDQTlJSFI1Y0dVZ1BUMDlJQ2Q0Yld3bklIeDhJQ0YwZVhCbElDWW1JR04wTG1sdVpHVjRUMllvSjNodGJDY3BJRDQ5SURBc1hISmNibHgwWEhSY2RGeDBYSFJrWVhSaElEMGdlRzFzSUQ4Z2VHaHlMbkpsYzNCdmJuTmxXRTFNSURvZ2VHaHlMbkpsYzNCdmJuTmxWR1Y0ZER0Y2NseHVYSEpjYmx4MFhIUmNkRngwYVdZZ0tIaHRiQ0FtSmlCa1lYUmhMbVJ2WTNWdFpXNTBSV3hsYldWdWRDNXViMlJsVG1GdFpTQTlQVDBnSjNCaGNuTmxjbVZ5Y205eUp5a2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLQ1F1WlhKeWIzSXBYSEpjYmx4MFhIUmNkRngwWEhSY2RDUXVaWEp5YjNJb0ozQmhjbk5sY21WeWNtOXlKeWs3WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkR2xtSUNoeklDWW1JSE11WkdGMFlVWnBiSFJsY2lrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWkdGMFlTQTlJSE11WkdGMFlVWnBiSFJsY2loa1lYUmhMQ0IwZVhCbEtUdGNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MGFXWWdLSFI1Y0dWdlppQmtZWFJoSUQwOVBTQW5jM1J5YVc1bkp5a2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLSFI1Y0dVZ1BUMDlJQ2RxYzI5dUp5QjhmQ0FoZEhsd1pTQW1KaUJqZEM1cGJtUmxlRTltS0NkcWMyOXVKeWtnUGowZ01Da2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmtZWFJoSUQwZ2NHRnljMlZLVTA5T0tHUmhkR0VwTzF4eVhHNWNkRngwWEhSY2RGeDBmU0JsYkhObElHbG1JQ2gwZVhCbElEMDlQU0JjSW5OamNtbHdkRndpSUh4OElDRjBlWEJsSUNZbUlHTjBMbWx1WkdWNFQyWW9YQ0pxWVhaaGMyTnlhWEIwWENJcElENDlJREFwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwSkM1bmJHOWlZV3hGZG1Gc0tHUmhkR0VwTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUnlaWFIxY200Z1pHRjBZVHRjY2x4dVhIUmNkRngwZlR0Y2NseHVYSEpjYmx4MFhIUmNkSEpsZEhWeWJpQmtaV1psY25KbFpEdGNjbHh1WEhSY2RIMWNjbHh1WEhSOU8xeHlYRzVjY2x4dVhIUXZLaXBjY2x4dVhIUWdLaUJoYW1GNFJtOXliU2dwSUhCeWIzWnBaR1Z6SUdFZ2JXVmphR0Z1YVhOdElHWnZjaUJtZFd4c2VTQmhkWFJ2YldGMGFXNW5JR1p2Y20wZ2MzVmliV2x6YzJsdmJpNWNjbHh1WEhRZ0tseHlYRzVjZENBcUlGUm9aU0JoWkhaaGJuUmhaMlZ6SUc5bUlIVnphVzVuSUhSb2FYTWdiV1YwYUc5a0lHbHVjM1JsWVdRZ2IyWWdZV3BoZUZOMVltMXBkQ2dwSUdGeVpUcGNjbHh1WEhRZ0tseHlYRzVjZENBcUlERTZJRlJvYVhNZ2JXVjBhRzlrSUhkcGJHd2dhVzVqYkhWa1pTQmpiMjl5WkdsdVlYUmxjeUJtYjNJZ1BHbHVjSFYwSUhSNWNHVTlYQ0pwYldGblpWd2lJQzgrSUdWc1pXMWxiblJ6SUNocFppQjBhR1VnWld4bGJXVnVkRnh5WEc1Y2RDQXFJQ0FnSUdseklIVnpaV1FnZEc4Z2MzVmliV2wwSUhSb1pTQm1iM0p0S1M1Y2NseHVYSFFnS2lBeUxpQlVhR2x6SUcxbGRHaHZaQ0IzYVd4c0lHbHVZMngxWkdVZ2RHaGxJSE4xWW0xcGRDQmxiR1Z0Wlc1MEozTWdibUZ0WlM5MllXeDFaU0JrWVhSaElDaG1iM0lnZEdobElHVnNaVzFsYm5RZ2RHaGhkQ0IzWVhOY2NseHVYSFFnS2lBZ0lDQjFjMlZrSUhSdklITjFZbTFwZENCMGFHVWdabTl5YlNrdVhISmNibHgwSUNvZ015NGdWR2hwY3lCdFpYUm9iMlFnWW1sdVpITWdkR2hsSUhOMVltMXBkQ2dwSUcxbGRHaHZaQ0IwYnlCMGFHVWdabTl5YlNCbWIzSWdlVzkxTGx4eVhHNWNkQ0FxWEhKY2JseDBJQ29nVkdobElHOXdkR2x2Ym5NZ1lYSm5kVzFsYm5RZ1ptOXlJR0ZxWVhoR2IzSnRJSGR2Y210eklHVjRZV04wYkhrZ1lYTWdhWFFnWkc5bGN5Qm1iM0lnWVdwaGVGTjFZbTFwZEM0Z0lHRnFZWGhHYjNKdElHMWxjbVZzZVZ4eVhHNWNkQ0FxSUhCaGMzTmxjeUIwYUdVZ2IzQjBhVzl1Y3lCaGNtZDFiV1Z1ZENCaGJHOXVaeUJoWm5SbGNpQndjbTl3WlhKc2VTQmlhVzVrYVc1bklHVjJaVzUwY3lCbWIzSWdjM1ZpYldsMElHVnNaVzFsYm5SeklHRnVaRnh5WEc1Y2RDQXFJSFJvWlNCbWIzSnRJR2wwYzJWc1ppNWNjbHh1WEhRZ0tpOWNjbHh1WEhRa0xtWnVMbUZxWVhoR2IzSnRJRDBnWm5WdVkzUnBiMjRvYjNCMGFXOXVjeWtnZTF4eVhHNWNkRngwYjNCMGFXOXVjeUE5SUc5d2RHbHZibk1nZkh3Z2UzMDdYSEpjYmx4MFhIUnZjSFJwYjI1ekxtUmxiR1ZuWVhScGIyNGdQU0J2Y0hScGIyNXpMbVJsYkdWbllYUnBiMjRnSmlZZ0pDNXBjMFoxYm1OMGFXOXVLQ1F1Wm00dWIyNHBPMXh5WEc1Y2NseHVYSFJjZEM4dklHbHVJR3BSZFdWeWVTQXhMak1ySUhkbElHTmhiaUJtYVhnZ2JXbHpkR0ZyWlhNZ2QybDBhQ0IwYUdVZ2NtVmhaSGtnYzNSaGRHVmNjbHh1WEhSY2RHbG1JQ2doYjNCMGFXOXVjeTVrWld4bFoyRjBhVzl1SUNZbUlIUm9hWE11YkdWdVozUm9JRDA5UFNBd0tTQjdYSEpjYmx4MFhIUmNkSFpoY2lCdklEMGdleUJ6T2lCMGFHbHpMbk5sYkdWamRHOXlMQ0JqT2lCMGFHbHpMbU52Ym5SbGVIUWdmVHRjY2x4dVhIUmNkRngwYVdZZ0tDRWtMbWx6VW1WaFpIa2dKaVlnYnk1ektTQjdYSEpjYmx4MFhIUmNkRngwYkc5bktDZEVUMDBnYm05MElISmxZV1I1TENCeGRXVjFhVzVuSUdGcVlYaEdiM0p0SnlrN1hISmNibHgwWEhSY2RGeDBKQ2htZFc1amRHbHZiaWdwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkQ1FvYnk1ekxHOHVZeWt1WVdwaGVFWnZjbTBvYjNCMGFXOXVjeWs3WEhKY2JseDBYSFJjZEZ4MGZTazdYSEpjYmx4MFhIUmNkRngwY21WMGRYSnVJSFJvYVhNN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RGeDBMeThnYVhNZ2VXOTFjaUJFVDAwZ2NtVmhaSGsvSUNCb2RIUndPaTh2Wkc5amN5NXFjWFZsY25rdVkyOXRMMVIxZEc5eWFXRnNjenBKYm5SeWIyUjFZMmx1WjE4a0tHUnZZM1Z0Wlc1MEtTNXlaV0ZrZVNncFhISmNibHgwWEhSY2RHeHZaeWduZEdWeWJXbHVZWFJwYm1jN0lIcGxjbThnWld4bGJXVnVkSE1nWm05MWJtUWdZbmtnYzJWc1pXTjBiM0luSUNzZ0tDUXVhWE5TWldGa2VTQS9JQ2NuSURvZ0p5QW9SRTlOSUc1dmRDQnlaV0ZrZVNrbktTazdYSEpjYmx4MFhIUmNkSEpsZEhWeWJpQjBhR2x6TzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHbG1JQ2dnYjNCMGFXOXVjeTVrWld4bFoyRjBhVzl1SUNrZ2UxeHlYRzVjZEZ4MFhIUWtLR1J2WTNWdFpXNTBLVnh5WEc1Y2RGeDBYSFJjZEM1dlptWW9KM04xWW0xcGRDNW1iM0p0TFhCc2RXZHBiaWNzSUhSb2FYTXVjMlZzWldOMGIzSXNJR1J2UVdwaGVGTjFZbTFwZENsY2NseHVYSFJjZEZ4MFhIUXViMlptS0NkamJHbGpheTVtYjNKdExYQnNkV2RwYmljc0lIUm9hWE11YzJWc1pXTjBiM0lzSUdOaGNIUjFjbVZUZFdKdGFYUjBhVzVuUld4bGJXVnVkQ2xjY2x4dVhIUmNkRngwWEhRdWIyNG9KM04xWW0xcGRDNW1iM0p0TFhCc2RXZHBiaWNzSUhSb2FYTXVjMlZzWldOMGIzSXNJRzl3ZEdsdmJuTXNJR1J2UVdwaGVGTjFZbTFwZENsY2NseHVYSFJjZEZ4MFhIUXViMjRvSjJOc2FXTnJMbVp2Y20wdGNHeDFaMmx1Snl3Z2RHaHBjeTV6Wld4bFkzUnZjaXdnYjNCMGFXOXVjeXdnWTJGd2RIVnlaVk4xWW0xcGRIUnBibWRGYkdWdFpXNTBLVHRjY2x4dVhIUmNkRngwY21WMGRYSnVJSFJvYVhNN1hISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBjbVYwZFhKdUlIUm9hWE11WVdwaGVFWnZjbTFWYm1KcGJtUW9LVnh5WEc1Y2RGeDBYSFF1WW1sdVpDZ25jM1ZpYldsMExtWnZjbTB0Y0d4MVoybHVKeXdnYjNCMGFXOXVjeXdnWkc5QmFtRjRVM1ZpYldsMEtWeHlYRzVjZEZ4MFhIUXVZbWx1WkNnblkyeHBZMnN1Wm05eWJTMXdiSFZuYVc0bkxDQnZjSFJwYjI1ekxDQmpZWEIwZFhKbFUzVmliV2wwZEdsdVowVnNaVzFsYm5RcE8xeHlYRzVjZEgwN1hISmNibHh5WEc1Y2RDOHZJSEJ5YVhaaGRHVWdaWFpsYm5RZ2FHRnVaR3hsY25OY2NseHVYSFJtZFc1amRHbHZiaUJrYjBGcVlYaFRkV0p0YVhRb1pTa2dlMXh5WEc1Y2RGeDBMeXBxYzJocGJuUWdkbUZzYVdSMGFHbHpPblJ5ZFdVZ0tpOWNjbHh1WEhSY2RIWmhjaUJ2Y0hScGIyNXpJRDBnWlM1a1lYUmhPMXh5WEc1Y2RGeDBhV1lnS0NGbExtbHpSR1ZtWVhWc2RGQnlaWFpsYm5SbFpDZ3BLU0I3SUM4dklHbG1JR1YyWlc1MElHaGhjeUJpWldWdUlHTmhibU5sYkdWa0xDQmtiMjRuZENCd2NtOWpaV1ZrWEhKY2JseDBYSFJjZEdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2NseHVYSFJjZEZ4MEpDaGxMblJoY21kbGRDa3VZV3BoZUZOMVltMXBkQ2h2Y0hScGIyNXpLVHNnTHk4Z0l6TTJOVnh5WEc1Y2RGeDBmVnh5WEc1Y2RIMWNjbHh1WEhKY2JseDBablZ1WTNScGIyNGdZMkZ3ZEhWeVpWTjFZbTFwZEhScGJtZEZiR1Z0Wlc1MEtHVXBJSHRjY2x4dVhIUmNkQzhxYW5Ob2FXNTBJSFpoYkdsa2RHaHBjenAwY25WbElDb3ZYSEpjYmx4MFhIUjJZWElnZEdGeVoyVjBJRDBnWlM1MFlYSm5aWFE3WEhKY2JseDBYSFIyWVhJZ0pHVnNJRDBnSkNoMFlYSm5aWFFwTzF4eVhHNWNkRngwYVdZZ0tDRW9KR1ZzTG1sektGd2lXM1I1Y0dVOWMzVmliV2wwWFN4YmRIbHdaVDFwYldGblpWMWNJaWtwS1NCN1hISmNibHgwWEhSY2RDOHZJR2x6SUhSb2FYTWdZU0JqYUdsc1pDQmxiR1Z0Wlc1MElHOW1JSFJvWlNCemRXSnRhWFFnWld3L0lDQW9aWGc2SUdFZ2MzQmhiaUIzYVhSb2FXNGdZU0JpZFhSMGIyNHBYSEpjYmx4MFhIUmNkSFpoY2lCMElEMGdKR1ZzTG1Oc2IzTmxjM1FvSjF0MGVYQmxQWE4xWW0xcGRGMG5LVHRjY2x4dVhIUmNkRngwYVdZZ0tIUXViR1Z1WjNSb0lEMDlQU0F3S1NCN1hISmNibHgwWEhSY2RGeDBjbVYwZFhKdU8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkSFJoY21kbGRDQTlJSFJiTUYwN1hISmNibHgwWEhSOVhISmNibHgwWEhSMllYSWdabTl5YlNBOUlIUm9hWE03WEhKY2JseDBYSFJtYjNKdExtTnNheUE5SUhSaGNtZGxkRHRjY2x4dVhIUmNkR2xtSUNoMFlYSm5aWFF1ZEhsd1pTQTlQU0FuYVcxaFoyVW5LU0I3WEhKY2JseDBYSFJjZEdsbUlDaGxMbTltWm5ObGRGZ2dJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHlYRzVjZEZ4MFhIUmNkR1p2Y20wdVkyeHJYM2dnUFNCbExtOW1abk5sZEZnN1hISmNibHgwWEhSY2RGeDBabTl5YlM1amJHdGZlU0E5SUdVdWIyWm1jMlYwV1R0Y2NseHVYSFJjZEZ4MGZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ0pDNW1iaTV2Wm1aelpYUWdQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHlYRzVjZEZ4MFhIUmNkSFpoY2lCdlptWnpaWFFnUFNBa1pXd3ViMlptYzJWMEtDazdYSEpjYmx4MFhIUmNkRngwWm05eWJTNWpiR3RmZUNBOUlHVXVjR0ZuWlZnZ0xTQnZabVp6WlhRdWJHVm1kRHRjY2x4dVhIUmNkRngwWEhSbWIzSnRMbU5zYTE5NUlEMGdaUzV3WVdkbFdTQXRJRzltWm5ObGRDNTBiM0E3WEhKY2JseDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MFptOXliUzVqYkd0ZmVDQTlJR1V1Y0dGblpWZ2dMU0IwWVhKblpYUXViMlptYzJWMFRHVm1kRHRjY2x4dVhIUmNkRngwWEhSbWIzSnRMbU5zYTE5NUlEMGdaUzV3WVdkbFdTQXRJSFJoY21kbGRDNXZabVp6WlhSVWIzQTdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkSDFjY2x4dVhIUmNkQzh2SUdOc1pXRnlJR1p2Y20wZ2RtRnljMXh5WEc1Y2RGeDBjMlYwVkdsdFpXOTFkQ2htZFc1amRHbHZiaWdwSUhzZ1ptOXliUzVqYkdzZ1BTQm1iM0p0TG1Oc2ExOTRJRDBnWm05eWJTNWpiR3RmZVNBOUlHNTFiR3c3SUgwc0lERXdNQ2s3WEhKY2JseDBmVnh5WEc1Y2NseHVYSEpjYmx4MEx5OGdZV3BoZUVadmNtMVZibUpwYm1RZ2RXNWlhVzVrY3lCMGFHVWdaWFpsYm5RZ2FHRnVaR3hsY25NZ2RHaGhkQ0IzWlhKbElHSnZkVzVrSUdKNUlHRnFZWGhHYjNKdFhISmNibHgwSkM1bWJpNWhhbUY0Um05eWJWVnVZbWx1WkNBOUlHWjFibU4wYVc5dUtDa2dlMXh5WEc1Y2RGeDBjbVYwZFhKdUlIUm9hWE11ZFc1aWFXNWtLQ2R6ZFdKdGFYUXVabTl5YlMxd2JIVm5hVzRnWTJ4cFkyc3VabTl5YlMxd2JIVm5hVzRuS1R0Y2NseHVYSFI5TzF4eVhHNWNjbHh1WEhRdktpcGNjbHh1WEhRZ0tpQm1iM0p0Vkc5QmNuSmhlU2dwSUdkaGRHaGxjbk1nWm05eWJTQmxiR1Z0Wlc1MElHUmhkR0VnYVc1MGJ5QmhiaUJoY25KaGVTQnZaaUJ2WW1wbFkzUnpJSFJvWVhRZ1kyRnVYSEpjYmx4MElDb2dZbVVnY0dGemMyVmtJSFJ2SUdGdWVTQnZaaUIwYUdVZ1ptOXNiRzkzYVc1bklHRnFZWGdnWm5WdVkzUnBiMjV6T2lBa0xtZGxkQ3dnSkM1d2IzTjBMQ0J2Y2lCc2IyRmtMbHh5WEc1Y2RDQXFJRVZoWTJnZ2IySnFaV04wSUdsdUlIUm9aU0JoY25KaGVTQm9ZWE1nWW05MGFDQmhJQ2R1WVcxbEp5QmhibVFnSjNaaGJIVmxKeUJ3Y205d1pYSjBlUzRnSUVGdUlHVjRZVzF3YkdVZ2IyWmNjbHh1WEhRZ0tpQmhiaUJoY25KaGVTQm1iM0lnWVNCemFXMXdiR1VnYkc5bmFXNGdabTl5YlNCdGFXZG9kQ0JpWlRwY2NseHVYSFFnS2x4eVhHNWNkQ0FxSUZzZ2V5QnVZVzFsT2lBbmRYTmxjbTVoYldVbkxDQjJZV3gxWlRvZ0oycHlaWE5wWnljZ2ZTd2dleUJ1WVcxbE9pQW5jR0Z6YzNkdmNtUW5MQ0IyWVd4MVpUb2dKM05sWTNKbGRDY2dmU0JkWEhKY2JseDBJQ3BjY2x4dVhIUWdLaUJKZENCcGN5QjBhR2x6SUdGeWNtRjVJSFJvWVhRZ2FYTWdjR0Z6YzJWa0lIUnZJSEJ5WlMxemRXSnRhWFFnWTJGc2JHSmhZMnNnWm5WdVkzUnBiMjV6SUhCeWIzWnBaR1ZrSUhSdklIUm9aVnh5WEc1Y2RDQXFJR0ZxWVhoVGRXSnRhWFFvS1NCaGJtUWdZV3BoZUVadmNtMG9LU0J0WlhSb2IyUnpMbHh5WEc1Y2RDQXFMMXh5WEc1Y2RDUXVabTR1Wm05eWJWUnZRWEp5WVhrZ1BTQm1kVzVqZEdsdmJpaHpaVzFoYm5ScFl5d2daV3hsYldWdWRITXBJSHRjY2x4dVhIUmNkSFpoY2lCaElEMGdXMTA3WEhKY2JseDBYSFJwWmlBb2RHaHBjeTVzWlc1bmRHZ2dQVDA5SURBcElIdGNjbHh1WEhSY2RGeDBjbVYwZFhKdUlHRTdYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwZG1GeUlHWnZjbTBnUFNCMGFHbHpXekJkTzF4eVhHNWNkRngwZG1GeUlHVnNjeUE5SUhObGJXRnVkR2xqSUQ4Z1ptOXliUzVuWlhSRmJHVnRaVzUwYzBKNVZHRm5UbUZ0WlNnbktpY3BJRG9nWm05eWJTNWxiR1Z0Wlc1MGN6dGNjbHh1WEhSY2RHbG1JQ2doWld4ektTQjdYSEpjYmx4MFhIUmNkSEpsZEhWeWJpQmhPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEhaaGNpQnBMR29zYml4MkxHVnNMRzFoZUN4cWJXRjRPMXh5WEc1Y2RGeDBabTl5S0drOU1Dd2diV0Y0UFdWc2N5NXNaVzVuZEdnN0lHa2dQQ0J0WVhnN0lHa3JLeWtnZTF4eVhHNWNkRngwWEhSbGJDQTlJR1ZzYzF0cFhUdGNjbHh1WEhSY2RGeDBiaUE5SUdWc0xtNWhiV1U3WEhKY2JseDBYSFJjZEdsbUlDZ2hiaUI4ZkNCbGJDNWthWE5oWW14bFpDa2dlMXh5WEc1Y2RGeDBYSFJjZEdOdmJuUnBiblZsTzF4eVhHNWNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJwWmlBb2MyVnRZVzUwYVdNZ0ppWWdabTl5YlM1amJHc2dKaVlnWld3dWRIbHdaU0E5UFNCY0ltbHRZV2RsWENJcElIdGNjbHh1WEhSY2RGeDBYSFF2THlCb1lXNWtiR1VnYVcxaFoyVWdhVzV3ZFhSeklHOXVJSFJvWlNCbWJIa2dkMmhsYmlCelpXMWhiblJwWXlBOVBTQjBjblZsWEhKY2JseDBYSFJjZEZ4MGFXWW9abTl5YlM1amJHc2dQVDBnWld3cElIdGNjbHh1WEhSY2RGeDBYSFJjZEdFdWNIVnphQ2g3Ym1GdFpUb2diaXdnZG1Gc2RXVTZJQ1FvWld3cExuWmhiQ2dwTENCMGVYQmxPaUJsYkM1MGVYQmxJSDBwTzF4eVhHNWNkRngwWEhSY2RGeDBZUzV3ZFhOb0tIdHVZVzFsT2lCdUt5Y3VlQ2NzSUhaaGJIVmxPaUJtYjNKdExtTnNhMTk0ZlN3Z2UyNWhiV1U2SUc0ckp5NTVKeXdnZG1Gc2RXVTZJR1p2Y20wdVkyeHJYM2w5S1R0Y2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwWTI5dWRHbHVkV1U3WEhKY2JseDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkSFlnUFNBa0xtWnBaV3hrVm1Gc2RXVW9aV3dzSUhSeWRXVXBPMXh5WEc1Y2RGeDBYSFJwWmlBb2RpQW1KaUIyTG1OdmJuTjBjblZqZEc5eUlEMDlJRUZ5Y21GNUtTQjdYSEpjYmx4MFhIUmNkRngwYVdZZ0tHVnNaVzFsYm5SektWeHlYRzVjZEZ4MFhIUmNkRngwWld4bGJXVnVkSE11Y0hWemFDaGxiQ2s3WEhKY2JseDBYSFJjZEZ4MFptOXlLR285TUN3Z2FtMWhlRDEyTG14bGJtZDBhRHNnYWlBOElHcHRZWGc3SUdvckt5a2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFlTNXdkWE5vS0h0dVlXMWxPaUJ1TENCMllXeDFaVG9nZGx0cVhYMHBPMXh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmxiSE5sSUdsbUlDaG1aV0YwZFhKbExtWnBiR1ZoY0drZ0ppWWdaV3d1ZEhsd1pTQTlQU0FuWm1sc1pTY3BJSHRjY2x4dVhIUmNkRngwWEhScFppQW9aV3hsYldWdWRITXBYSEpjYmx4MFhIUmNkRngwWEhSbGJHVnRaVzUwY3k1d2RYTm9LR1ZzS1R0Y2NseHVYSFJjZEZ4MFhIUjJZWElnWm1sc1pYTWdQU0JsYkM1bWFXeGxjenRjY2x4dVhIUmNkRngwWEhScFppQW9abWxzWlhNdWJHVnVaM1JvS1NCN1hISmNibHgwWEhSY2RGeDBYSFJtYjNJZ0tHbzlNRHNnYWlBOElHWnBiR1Z6TG14bGJtZDBhRHNnYWlzcktTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RHRXVjSFZ6YUNoN2JtRnRaVG9nYml3Z2RtRnNkV1U2SUdacGJHVnpXMnBkTENCMGVYQmxPaUJsYkM1MGVYQmxmU2s3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RHVnNjMlVnZTF4eVhHNWNkRngwWEhSY2RGeDBMeThnSXpFNE1GeHlYRzVjZEZ4MFhIUmNkRngwWVM1d2RYTm9LSHNnYm1GdFpUb2diaXdnZG1Gc2RXVTZJQ2NuTENCMGVYQmxPaUJsYkM1MGVYQmxJSDBwTzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJsYkhObElHbG1JQ2gySUNFOVBTQnVkV3hzSUNZbUlIUjVjR1Z2WmlCMklDRTlJQ2QxYm1SbFptbHVaV1FuS1NCN1hISmNibHgwWEhSY2RGeDBhV1lnS0dWc1pXMWxiblJ6S1Z4eVhHNWNkRngwWEhSY2RGeDBaV3hsYldWdWRITXVjSFZ6YUNobGJDazdYSEpjYmx4MFhIUmNkRngwWVM1d2RYTm9LSHR1WVcxbE9pQnVMQ0IyWVd4MVpUb2dkaXdnZEhsd1pUb2daV3d1ZEhsd1pTd2djbVZ4ZFdseVpXUTZJR1ZzTG5KbGNYVnBjbVZrZlNrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMWNjbHh1WEhKY2JseDBYSFJwWmlBb0lYTmxiV0Z1ZEdsaklDWW1JR1p2Y20wdVkyeHJLU0I3WEhKY2JseDBYSFJjZEM4dklHbHVjSFYwSUhSNWNHVTlQU2RwYldGblpTY2dZWEpsSUc1dmRDQm1iM1Z1WkNCcGJpQmxiR1Z0Wlc1MGN5QmhjbkpoZVNFZ2FHRnVaR3hsSUdsMElHaGxjbVZjY2x4dVhIUmNkRngwZG1GeUlDUnBibkIxZENBOUlDUW9abTl5YlM1amJHc3BMQ0JwYm5CMWRDQTlJQ1JwYm5CMWRGc3dYVHRjY2x4dVhIUmNkRngwYmlBOUlHbHVjSFYwTG01aGJXVTdYSEpjYmx4MFhIUmNkR2xtSUNodUlDWW1JQ0ZwYm5CMWRDNWthWE5oWW14bFpDQW1KaUJwYm5CMWRDNTBlWEJsSUQwOUlDZHBiV0ZuWlNjcElIdGNjbHh1WEhSY2RGeDBYSFJoTG5CMWMyZ29lMjVoYldVNklHNHNJSFpoYkhWbE9pQWthVzV3ZFhRdWRtRnNLQ2w5S1R0Y2NseHVYSFJjZEZ4MFhIUmhMbkIxYzJnb2UyNWhiV1U2SUc0ckp5NTRKeXdnZG1Gc2RXVTZJR1p2Y20wdVkyeHJYM2g5TENCN2JtRnRaVG9nYmlzbkxua25MQ0IyWVd4MVpUb2dabTl5YlM1amJHdGZlWDBwTzF4eVhHNWNkRngwWEhSOVhISmNibHgwWEhSOVhISmNibHgwWEhSeVpYUjFjbTRnWVR0Y2NseHVYSFI5TzF4eVhHNWNjbHh1WEhRdktpcGNjbHh1WEhRZ0tpQlRaWEpwWVd4cGVtVnpJR1p2Y20wZ1pHRjBZU0JwYm5SdklHRWdKM04xWW0xcGRIUmhZbXhsSnlCemRISnBibWN1SUZSb2FYTWdiV1YwYUc5a0lIZHBiR3dnY21WMGRYSnVJR0VnYzNSeWFXNW5YSEpjYmx4MElDb2dhVzRnZEdobElHWnZjbTFoZERvZ2JtRnRaVEU5ZG1Gc2RXVXhKbUZ0Y0R0dVlXMWxNajEyWVd4MVpUSmNjbHh1WEhRZ0tpOWNjbHh1WEhRa0xtWnVMbVp2Y20xVFpYSnBZV3hwZW1VZ1BTQm1kVzVqZEdsdmJpaHpaVzFoYm5ScFl5a2dlMXh5WEc1Y2RGeDBMeTlvWVc1a0lHOW1aaUIwYnlCcVVYVmxjbmt1Y0dGeVlXMGdabTl5SUhCeWIzQmxjaUJsYm1OdlpHbHVaMXh5WEc1Y2RGeDBjbVYwZFhKdUlDUXVjR0Z5WVcwb2RHaHBjeTVtYjNKdFZHOUJjbkpoZVNoelpXMWhiblJwWXlrcE8xeHlYRzVjZEgwN1hISmNibHh5WEc1Y2RDOHFLbHh5WEc1Y2RDQXFJRk5sY21saGJHbDZaWE1nWVd4c0lHWnBaV3hrSUdWc1pXMWxiblJ6SUdsdUlIUm9aU0JxVVhWbGNua2diMkpxWldOMElHbHVkRzhnWVNCeGRXVnllU0J6ZEhKcGJtY3VYSEpjYmx4MElDb2dWR2hwY3lCdFpYUm9iMlFnZDJsc2JDQnlaWFIxY200Z1lTQnpkSEpwYm1jZ2FXNGdkR2hsSUdadmNtMWhkRG9nYm1GdFpURTlkbUZzZFdVeEptRnRjRHR1WVcxbE1qMTJZV3gxWlRKY2NseHVYSFFnS2k5Y2NseHVYSFFrTG1adUxtWnBaV3hrVTJWeWFXRnNhWHBsSUQwZ1puVnVZM1JwYjI0b2MzVmpZMlZ6YzJaMWJDa2dlMXh5WEc1Y2RGeDBkbUZ5SUdFZ1BTQmJYVHRjY2x4dVhIUmNkSFJvYVhNdVpXRmphQ2htZFc1amRHbHZiaWdwSUh0Y2NseHVYSFJjZEZ4MGRtRnlJRzRnUFNCMGFHbHpMbTVoYldVN1hISmNibHgwWEhSY2RHbG1JQ2doYmlrZ2UxeHlYRzVjZEZ4MFhIUmNkSEpsZEhWeWJqdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFIyWVhJZ2RpQTlJQ1F1Wm1sbGJHUldZV3gxWlNoMGFHbHpMQ0J6ZFdOalpYTnpablZzS1R0Y2NseHVYSFJjZEZ4MGFXWWdLSFlnSmlZZ2RpNWpiMjV6ZEhKMVkzUnZjaUE5UFNCQmNuSmhlU2tnZTF4eVhHNWNkRngwWEhSY2RHWnZjaUFvZG1GeUlHazlNQ3h0WVhnOWRpNXNaVzVuZEdnN0lHa2dQQ0J0WVhnN0lHa3JLeWtnZTF4eVhHNWNkRngwWEhSY2RGeDBZUzV3ZFhOb0tIdHVZVzFsT2lCdUxDQjJZV3gxWlRvZ2RsdHBYWDBwTzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJsYkhObElHbG1JQ2gySUNFOVBTQnVkV3hzSUNZbUlIUjVjR1Z2WmlCMklDRTlJQ2QxYm1SbFptbHVaV1FuS1NCN1hISmNibHgwWEhSY2RGeDBZUzV3ZFhOb0tIdHVZVzFsT2lCMGFHbHpMbTVoYldVc0lIWmhiSFZsT2lCMmZTazdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkSDBwTzF4eVhHNWNkRngwTHk5b1lXNWtJRzltWmlCMGJ5QnFVWFZsY25rdWNHRnlZVzBnWm05eUlIQnliM0JsY2lCbGJtTnZaR2x1WjF4eVhHNWNkRngwY21WMGRYSnVJQ1F1Y0dGeVlXMG9ZU2s3WEhKY2JseDBmVHRjY2x4dVhISmNibHgwTHlvcVhISmNibHgwSUNvZ1VtVjBkWEp1Y3lCMGFHVWdkbUZzZFdVb2N5a2diMllnZEdobElHVnNaVzFsYm5RZ2FXNGdkR2hsSUcxaGRHTm9aV1FnYzJWMExpQWdSbTl5SUdWNFlXMXdiR1VzSUdOdmJuTnBaR1Z5SUhSb1pTQm1iMnhzYjNkcGJtY2dabTl5YlRwY2NseHVYSFFnS2x4eVhHNWNkQ0FxSUNBOFptOXliVDQ4Wm1sbGJHUnpaWFErWEhKY2JseDBJQ29nSUNBZ0lDQThhVzV3ZFhRZ2JtRnRaVDFjSWtGY0lpQjBlWEJsUFZ3aWRHVjRkRndpSUM4K1hISmNibHgwSUNvZ0lDQWdJQ0E4YVc1d2RYUWdibUZ0WlQxY0lrRmNJaUIwZVhCbFBWd2lkR1Y0ZEZ3aUlDOCtYSEpjYmx4MElDb2dJQ0FnSUNBOGFXNXdkWFFnYm1GdFpUMWNJa0pjSWlCMGVYQmxQVndpWTJobFkydGliM2hjSWlCMllXeDFaVDFjSWtJeFhDSWdMejVjY2x4dVhIUWdLaUFnSUNBZ0lEeHBibkIxZENCdVlXMWxQVndpUWx3aUlIUjVjR1U5WENKamFHVmphMkp2ZUZ3aUlIWmhiSFZsUFZ3aVFqSmNJaTgrWEhKY2JseDBJQ29nSUNBZ0lDQThhVzV3ZFhRZ2JtRnRaVDFjSWtOY0lpQjBlWEJsUFZ3aWNtRmthVzljSWlCMllXeDFaVDFjSWtNeFhDSWdMejVjY2x4dVhIUWdLaUFnSUNBZ0lEeHBibkIxZENCdVlXMWxQVndpUTF3aUlIUjVjR1U5WENKeVlXUnBiMXdpSUhaaGJIVmxQVndpUXpKY0lpQXZQbHh5WEc1Y2RDQXFJQ0E4TDJacFpXeGtjMlYwUGp3dlptOXliVDVjY2x4dVhIUWdLbHh5WEc1Y2RDQXFJQ0IyWVhJZ2RpQTlJQ1FvSjJsdWNIVjBXM1I1Y0dVOWRHVjRkRjBuS1M1bWFXVnNaRlpoYkhWbEtDazdYSEpjYmx4MElDb2dJQzh2SUdsbUlHNXZJSFpoYkhWbGN5QmhjbVVnWlc1MFpYSmxaQ0JwYm5SdklIUm9aU0IwWlhoMElHbHVjSFYwYzF4eVhHNWNkQ0FxSUNCMklEMDlJRnNuSnl3bkoxMWNjbHh1WEhRZ0tpQWdMeThnYVdZZ2RtRnNkV1Z6SUdWdWRHVnlaV1FnYVc1MGJ5QjBhR1VnZEdWNGRDQnBibkIxZEhNZ1lYSmxJQ2RtYjI4bklHRnVaQ0FuWW1GeUoxeHlYRzVjZENBcUlDQjJJRDA5SUZzblptOXZKeXduWW1GeUoxMWNjbHh1WEhRZ0tseHlYRzVjZENBcUlDQjJZWElnZGlBOUlDUW9KMmx1Y0hWMFczUjVjR1U5WTJobFkydGliM2hkSnlrdVptbGxiR1JXWVd4MVpTZ3BPMXh5WEc1Y2RDQXFJQ0F2THlCcFppQnVaV2wwYUdWeUlHTm9aV05yWW05NElHbHpJR05vWldOclpXUmNjbHh1WEhRZ0tpQWdkaUE5UFQwZ2RXNWtaV1pwYm1Wa1hISmNibHgwSUNvZ0lDOHZJR2xtSUdKdmRHZ2dZMmhsWTJ0aWIzaGxjeUJoY21VZ1kyaGxZMnRsWkZ4eVhHNWNkQ0FxSUNCMklEMDlJRnNuUWpFbkxDQW5RakluWFZ4eVhHNWNkQ0FxWEhKY2JseDBJQ29nSUhaaGNpQjJJRDBnSkNnbmFXNXdkWFJiZEhsd1pUMXlZV1JwYjEwbktTNW1hV1ZzWkZaaGJIVmxLQ2s3WEhKY2JseDBJQ29nSUM4dklHbG1JRzVsYVhSb1pYSWdjbUZrYVc4Z2FYTWdZMmhsWTJ0bFpGeHlYRzVjZENBcUlDQjJJRDA5UFNCMWJtUmxabWx1WldSY2NseHVYSFFnS2lBZ0x5OGdhV1lnWm1seWMzUWdjbUZrYVc4Z2FYTWdZMmhsWTJ0bFpGeHlYRzVjZENBcUlDQjJJRDA5SUZzblF6RW5YVnh5WEc1Y2RDQXFYSEpjYmx4MElDb2dWR2hsSUhOMVkyTmxjM05tZFd3Z1lYSm5kVzFsYm5RZ1kyOXVkSEp2YkhNZ2QyaGxkR2hsY2lCdmNpQnViM1FnZEdobElHWnBaV3hrSUdWc1pXMWxiblFnYlhWemRDQmlaU0FuYzNWalkyVnpjMloxYkNkY2NseHVYSFFnS2lBb2NHVnlJR2gwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MMVJTTDJoMGJXdzBMMmx1ZEdWeVlXTjBMMlp2Y20xekxtaDBiV3dqYzNWalkyVnpjMloxYkMxamIyNTBjbTlzY3lrdVhISmNibHgwSUNvZ1ZHaGxJR1JsWm1GMWJIUWdkbUZzZFdVZ2IyWWdkR2hsSUhOMVkyTmxjM05tZFd3Z1lYSm5kVzFsYm5RZ2FYTWdkSEoxWlM0Z0lFbG1JSFJvYVhNZ2RtRnNkV1VnYVhNZ1ptRnNjMlVnZEdobElIWmhiSFZsS0hNcFhISmNibHgwSUNvZ1ptOXlJR1ZoWTJnZ1pXeGxiV1Z1ZENCcGN5QnlaWFIxY201bFpDNWNjbHh1WEhRZ0tseHlYRzVjZENBcUlFNXZkR1U2SUZSb2FYTWdiV1YwYUc5a0lDcGhiSGRoZVhNcUlISmxkSFZ5Ym5NZ1lXNGdZWEp5WVhrdUlDQkpaaUJ1YnlCMllXeHBaQ0IyWVd4MVpTQmpZVzRnWW1VZ1pHVjBaWEp0YVc1bFpDQjBhR1ZjY2x4dVhIUWdLaUFnSUNCaGNuSmhlU0IzYVd4c0lHSmxJR1Z0Y0hSNUxDQnZkR2hsY25kcGMyVWdhWFFnZDJsc2JDQmpiMjUwWVdsdUlHOXVaU0J2Y2lCdGIzSmxJSFpoYkhWbGN5NWNjbHh1WEhRZ0tpOWNjbHh1WEhRa0xtWnVMbVpwWld4a1ZtRnNkV1VnUFNCbWRXNWpkR2x2YmloemRXTmpaWE56Wm5Wc0tTQjdYSEpjYmx4MFhIUm1iM0lnS0haaGNpQjJZV3c5VzEwc0lHazlNQ3dnYldGNFBYUm9hWE11YkdWdVozUm9PeUJwSUR3Z2JXRjRPeUJwS3lzcElIdGNjbHh1WEhSY2RGeDBkbUZ5SUdWc0lEMGdkR2hwYzF0cFhUdGNjbHh1WEhSY2RGeDBkbUZ5SUhZZ1BTQWtMbVpwWld4a1ZtRnNkV1VvWld3c0lITjFZMk5sYzNObWRXd3BPMXh5WEc1Y2RGeDBYSFJwWmlBb2RpQTlQVDBnYm5Wc2JDQjhmQ0IwZVhCbGIyWWdkaUE5UFNBbmRXNWtaV1pwYm1Wa0p5QjhmQ0FvZGk1amIyNXpkSEoxWTNSdmNpQTlQU0JCY25KaGVTQW1KaUFoZGk1c1pXNW5kR2dwS1NCN1hISmNibHgwWEhSY2RGeDBZMjl1ZEdsdWRXVTdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkRngwYVdZZ0tIWXVZMjl1YzNSeWRXTjBiM0lnUFQwZ1FYSnlZWGtwWEhKY2JseDBYSFJjZEZ4MEpDNXRaWEpuWlNoMllXd3NJSFlwTzF4eVhHNWNkRngwWEhSbGJITmxYSEpjYmx4MFhIUmNkRngwZG1Gc0xuQjFjMmdvZGlrN1hISmNibHgwWEhSOVhISmNibHgwWEhSeVpYUjFjbTRnZG1Gc08xeHlYRzVjZEgwN1hISmNibHh5WEc1Y2RDOHFLbHh5WEc1Y2RDQXFJRkpsZEhWeWJuTWdkR2hsSUhaaGJIVmxJRzltSUhSb1pTQm1hV1ZzWkNCbGJHVnRaVzUwTGx4eVhHNWNkQ0FxTDF4eVhHNWNkQ1F1Wm1sbGJHUldZV3gxWlNBOUlHWjFibU4wYVc5dUtHVnNMQ0J6ZFdOalpYTnpablZzS1NCN1hISmNibHgwWEhSMllYSWdiaUE5SUdWc0xtNWhiV1VzSUhRZ1BTQmxiQzUwZVhCbExDQjBZV2NnUFNCbGJDNTBZV2RPWVcxbExuUnZURzkzWlhKRFlYTmxLQ2s3WEhKY2JseDBYSFJwWmlBb2MzVmpZMlZ6YzJaMWJDQTlQVDBnZFc1a1pXWnBibVZrS1NCN1hISmNibHgwWEhSY2RITjFZMk5sYzNObWRXd2dQU0IwY25WbE8xeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkR2xtSUNoemRXTmpaWE56Wm5Wc0lDWW1JQ2doYmlCOGZDQmxiQzVrYVhOaFlteGxaQ0I4ZkNCMElEMDlJQ2R5WlhObGRDY2dmSHdnZENBOVBTQW5ZblYwZEc5dUp5QjhmRnh5WEc1Y2RGeDBYSFFvZENBOVBTQW5ZMmhsWTJ0aWIzZ25JSHg4SUhRZ1BUMGdKM0poWkdsdkp5a2dKaVlnSVdWc0xtTm9aV05yWldRZ2ZIeGNjbHh1WEhSY2RGeDBLSFFnUFQwZ0ozTjFZbTFwZENjZ2ZId2dkQ0E5UFNBbmFXMWhaMlVuS1NBbUppQmxiQzVtYjNKdElDWW1JR1ZzTG1admNtMHVZMnhySUNFOUlHVnNJSHg4WEhKY2JseDBYSFJjZEhSaFp5QTlQU0FuYzJWc1pXTjBKeUFtSmlCbGJDNXpaV3hsWTNSbFpFbHVaR1Y0SUQwOUlDMHhLU2tnZTF4eVhHNWNkRngwWEhSY2RISmxkSFZ5YmlCdWRXeHNPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEdsbUlDaDBZV2NnUFQwZ0ozTmxiR1ZqZENjcElIdGNjbHh1WEhSY2RGeDBkbUZ5SUdsdVpHVjRJRDBnWld3dWMyVnNaV04wWldSSmJtUmxlRHRjY2x4dVhIUmNkRngwYVdZZ0tHbHVaR1Y0SUR3Z01Da2dlMXh5WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUJ1ZFd4c08xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkSFpoY2lCaElEMGdXMTBzSUc5d2N5QTlJR1ZzTG05d2RHbHZibk03WEhKY2JseDBYSFJjZEhaaGNpQnZibVVnUFNBb2RDQTlQU0FuYzJWc1pXTjBMVzl1WlNjcE8xeHlYRzVjZEZ4MFhIUjJZWElnYldGNElEMGdLRzl1WlNBL0lHbHVaR1Y0S3pFZ09pQnZjSE11YkdWdVozUm9LVHRjY2x4dVhIUmNkRngwWm05eUtIWmhjaUJwUFNodmJtVWdQeUJwYm1SbGVDQTZJREFwT3lCcElEd2diV0Y0T3lCcEt5c3BJSHRjY2x4dVhIUmNkRngwWEhSMllYSWdiM0FnUFNCdmNITmJhVjA3WEhKY2JseDBYSFJjZEZ4MGFXWWdLRzl3TG5ObGJHVmpkR1ZrS1NCN1hISmNibHgwWEhSY2RGeDBYSFIyWVhJZ2RpQTlJRzl3TG5aaGJIVmxPMXh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLQ0YyS1NCN0lDOHZJR1Y0ZEhKaElIQmhhVzRnWm05eUlFbEZMaTR1WEhKY2JseDBYSFJjZEZ4MFhIUmNkSFlnUFNBb2IzQXVZWFIwY21saWRYUmxjeUFtSmlCdmNDNWhkSFJ5YVdKMWRHVnpXeWQyWVd4MVpTZGRJQ1ltSUNFb2IzQXVZWFIwY21saWRYUmxjMXNuZG1Gc2RXVW5YUzV6Y0dWamFXWnBaV1FwS1NBL0lHOXdMblJsZUhRZ09pQnZjQzUyWVd4MVpUdGNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNodmJtVXBJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBjbVYwZFhKdUlIWTdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBYSFJoTG5CMWMyZ29kaWs3WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkSEpsZEhWeWJpQmhPMXh5WEc1Y2RGeDBmVnh5WEc1Y2RGeDBjbVYwZFhKdUlDUW9aV3dwTG5aaGJDZ3BPMXh5WEc1Y2RIMDdYSEpjYmx4eVhHNWNkQzhxS2x4eVhHNWNkQ0FxSUVOc1pXRnljeUIwYUdVZ1ptOXliU0JrWVhSaExpQWdWR0ZyWlhNZ2RHaGxJR1p2Ykd4dmQybHVaeUJoWTNScGIyNXpJRzl1SUhSb1pTQm1iM0p0SjNNZ2FXNXdkWFFnWm1sbGJHUnpPbHh5WEc1Y2RDQXFJQ0F0SUdsdWNIVjBJSFJsZUhRZ1ptbGxiR1J6SUhkcGJHd2dhR0YyWlNCMGFHVnBjaUFuZG1Gc2RXVW5JSEJ5YjNCbGNuUjVJSE5sZENCMGJ5QjBhR1VnWlcxd2RIa2djM1J5YVc1blhISmNibHgwSUNvZ0lDMGdjMlZzWldOMElHVnNaVzFsYm5SeklIZHBiR3dnYUdGMlpTQjBhR1ZwY2lBbmMyVnNaV04wWldSSmJtUmxlQ2NnY0hKdmNHVnlkSGtnYzJWMElIUnZJQzB4WEhKY2JseDBJQ29nSUMwZ1kyaGxZMnRpYjNnZ1lXNWtJSEpoWkdsdklHbHVjSFYwY3lCM2FXeHNJR2hoZG1VZ2RHaGxhWElnSjJOb1pXTnJaV1FuSUhCeWIzQmxjblI1SUhObGRDQjBieUJtWVd4elpWeHlYRzVjZENBcUlDQXRJR2x1Y0hWMGN5QnZaaUIwZVhCbElITjFZbTFwZEN3Z1luVjBkRzl1TENCeVpYTmxkQ3dnWVc1a0lHaHBaR1JsYmlCM2FXeHNJQ3B1YjNRcUlHSmxJR1ZtWm1WamRHVmtYSEpjYmx4MElDb2dJQzBnWW5WMGRHOXVJR1ZzWlcxbGJuUnpJSGRwYkd3Z0ttNXZkQ29nWW1VZ1pXWm1aV04wWldSY2NseHVYSFFnS2k5Y2NseHVYSFFrTG1adUxtTnNaV0Z5Um05eWJTQTlJR1oxYm1OMGFXOXVLR2x1WTJ4MVpHVklhV1JrWlc0cElIdGNjbHh1WEhSY2RISmxkSFZ5YmlCMGFHbHpMbVZoWTJnb1puVnVZM1JwYjI0b0tTQjdYSEpjYmx4MFhIUmNkQ1FvSjJsdWNIVjBMSE5sYkdWamRDeDBaWGgwWVhKbFlTY3NJSFJvYVhNcExtTnNaV0Z5Um1sbGJHUnpLR2x1WTJ4MVpHVklhV1JrWlc0cE8xeHlYRzVjZEZ4MGZTazdYSEpjYmx4MGZUdGNjbHh1WEhKY2JseDBMeW9xWEhKY2JseDBJQ29nUTJ4bFlYSnpJSFJvWlNCelpXeGxZM1JsWkNCbWIzSnRJR1ZzWlcxbGJuUnpMbHh5WEc1Y2RDQXFMMXh5WEc1Y2RDUXVabTR1WTJ4bFlYSkdhV1ZzWkhNZ1BTQWtMbVp1TG1Oc1pXRnlTVzV3ZFhSeklEMGdablZ1WTNScGIyNG9hVzVqYkhWa1pVaHBaR1JsYmlrZ2UxeHlYRzVjZEZ4MGRtRnlJSEpsSUQwZ0wxNG9QenBqYjJ4dmNueGtZWFJsZkdSaGRHVjBhVzFsZkdWdFlXbHNmRzF2Ym5Sb2ZHNTFiV0psY254d1lYTnpkMjl5Wkh4eVlXNW5aWHh6WldGeVkyaDhkR1ZzZkhSbGVIUjhkR2x0Wlh4MWNteDhkMlZsYXlra0wyazdJQzh2SUNkb2FXUmtaVzRuSUdseklHNXZkQ0JwYmlCMGFHbHpJR3hwYzNSY2NseHVYSFJjZEhKbGRIVnliaUIwYUdsekxtVmhZMmdvWm5WdVkzUnBiMjRvS1NCN1hISmNibHgwWEhSY2RIWmhjaUIwSUQwZ2RHaHBjeTUwZVhCbExDQjBZV2NnUFNCMGFHbHpMblJoWjA1aGJXVXVkRzlNYjNkbGNrTmhjMlVvS1R0Y2NseHVYSFJjZEZ4MGFXWWdLSEpsTG5SbGMzUW9kQ2tnZkh3Z2RHRm5JRDA5SUNkMFpYaDBZWEpsWVNjcElIdGNjbHh1WEhSY2RGeDBYSFIwYUdsekxuWmhiSFZsSUQwZ0p5YzdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkRngwWld4elpTQnBaaUFvZENBOVBTQW5ZMmhsWTJ0aWIzZ25JSHg4SUhRZ1BUMGdKM0poWkdsdkp5a2dlMXh5WEc1Y2RGeDBYSFJjZEhSb2FYTXVZMmhsWTJ0bFpDQTlJR1poYkhObE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkR1ZzYzJVZ2FXWWdLSFJoWnlBOVBTQW5jMlZzWldOMEp5a2dlMXh5WEc1Y2RGeDBYSFJjZEhSb2FYTXVjMlZzWldOMFpXUkpibVJsZUNBOUlDMHhPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseDBYSFJjZEdWc2MyVWdhV1lnS0hRZ1BUMGdYQ0ptYVd4bFhDSXBJSHRjY2x4dVhIUmNkRngwWEhScFppQW9MMDFUU1VVdkxuUmxjM1FvYm1GMmFXZGhkRzl5TG5WelpYSkJaMlZ1ZENrcElIdGNjbHh1WEhSY2RGeDBYSFJjZENRb2RHaHBjeWt1Y21Wd2JHRmpaVmRwZEdnb0pDaDBhR2x6S1M1amJHOXVaU2gwY25WbEtTazdYSEpjYmx4MFhIUmNkRngwZlNCbGJITmxJSHRjY2x4dVhIUmNkRngwWEhSY2RDUW9kR2hwY3lrdWRtRnNLQ2NuS1R0Y2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkRngwWld4elpTQnBaaUFvYVc1amJIVmtaVWhwWkdSbGJpa2dlMXh5WEc1Y2RGeDBYSFJjZEM4dklHbHVZMngxWkdWSWFXUmtaVzRnWTJGdUlHSmxJSFJvWlNCMllXeDFaU0IwY25WbExDQnZjaUJwZENCallXNGdZbVVnWVNCelpXeGxZM1J2Y2lCemRISnBibWRjY2x4dVhIUmNkRngwWEhRdkx5QnBibVJwWTJGMGFXNW5JR0VnYzNCbFkybGhiQ0IwWlhOME95Qm1iM0lnWlhoaGJYQnNaVHBjY2x4dVhIUmNkRngwWEhRdkx5QWdKQ2duSTIxNVJtOXliU2NwTG1Oc1pXRnlSbTl5YlNnbkxuTndaV05wWVd3NmFHbGtaR1Z1SnlsY2NseHVYSFJjZEZ4MFhIUXZMeUIwYUdVZ1lXSnZkbVVnZDI5MWJHUWdZMnhsWVc0Z2FHbGtaR1Z1SUdsdWNIVjBjeUIwYUdGMElHaGhkbVVnZEdobElHTnNZWE56SUc5bUlDZHpjR1ZqYVdGc0oxeHlYRzVjZEZ4MFhIUmNkR2xtSUNnZ0tHbHVZMngxWkdWSWFXUmtaVzRnUFQwOUlIUnlkV1VnSmlZZ0wyaHBaR1JsYmk4dWRHVnpkQ2gwS1NrZ2ZIeGNjbHh1WEhSY2RGeDBYSFJjZENBb2RIbHdaVzltSUdsdVkyeDFaR1ZJYVdSa1pXNGdQVDBnSjNOMGNtbHVaeWNnSmlZZ0pDaDBhR2x6S1M1cGN5aHBibU5zZFdSbFNHbGtaR1Z1S1NrZ0tWeHlYRzVjZEZ4MFhIUmNkRngwZEdocGN5NTJZV3gxWlNBOUlDY25PMXh5WEc1Y2RGeDBYSFI5WEhKY2JseDBYSFI5S1R0Y2NseHVYSFI5TzF4eVhHNWNjbHh1WEhRdktpcGNjbHh1WEhRZ0tpQlNaWE5sZEhNZ2RHaGxJR1p2Y20wZ1pHRjBZUzRnSUVOaGRYTmxjeUJoYkd3Z1ptOXliU0JsYkdWdFpXNTBjeUIwYnlCaVpTQnlaWE5sZENCMGJ5QjBhR1ZwY2lCdmNtbG5hVzVoYkNCMllXeDFaUzVjY2x4dVhIUWdLaTljY2x4dVhIUWtMbVp1TG5KbGMyVjBSbTl5YlNBOUlHWjFibU4wYVc5dUtDa2dlMXh5WEc1Y2RGeDBjbVYwZFhKdUlIUm9hWE11WldGamFDaG1kVzVqZEdsdmJpZ3BJSHRjY2x4dVhIUmNkRngwTHk4Z1ozVmhjbVFnWVdkaGFXNXpkQ0JoYmlCcGJuQjFkQ0IzYVhSb0lIUm9aU0J1WVcxbElHOW1JQ2R5WlhObGRDZGNjbHh1WEhSY2RGeDBMeThnYm05MFpTQjBhR0YwSUVsRklISmxjRzl5ZEhNZ2RHaGxJSEpsYzJWMElHWjFibU4wYVc5dUlHRnpJR0Z1SUNkdlltcGxZM1FuWEhKY2JseDBYSFJjZEdsbUlDaDBlWEJsYjJZZ2RHaHBjeTV5WlhObGRDQTlQU0FuWm5WdVkzUnBiMjRuSUh4OElDaDBlWEJsYjJZZ2RHaHBjeTV5WlhObGRDQTlQU0FuYjJKcVpXTjBKeUFtSmlBaGRHaHBjeTV5WlhObGRDNXViMlJsVkhsd1pTa3BJSHRjY2x4dVhIUmNkRngwWEhSMGFHbHpMbkpsYzJWMEtDazdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkSDBwTzF4eVhHNWNkSDA3WEhKY2JseHlYRzVjZEM4cUtseHlYRzVjZENBcUlFVnVZV0pzWlhNZ2IzSWdaR2x6WVdKc1pYTWdZVzU1SUcxaGRHTm9hVzVuSUdWc1pXMWxiblJ6TGx4eVhHNWNkQ0FxTDF4eVhHNWNkQ1F1Wm00dVpXNWhZbXhsSUQwZ1puVnVZM1JwYjI0b1lpa2dlMXh5WEc1Y2RGeDBhV1lnS0dJZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4eVhHNWNkRngwWEhSaUlEMGdkSEoxWlR0Y2NseHVYSFJjZEgxY2NseHVYSFJjZEhKbGRIVnliaUIwYUdsekxtVmhZMmdvWm5WdVkzUnBiMjRvS1NCN1hISmNibHgwWEhSY2RIUm9hWE11WkdsellXSnNaV1FnUFNBaFlqdGNjbHh1WEhSY2RIMHBPMXh5WEc1Y2RIMDdYSEpjYmx4eVhHNWNkQzhxS2x4eVhHNWNkQ0FxSUVOb1pXTnJjeTkxYm1Ob1pXTnJjeUJoYm5rZ2JXRjBZMmhwYm1jZ1kyaGxZMnRpYjNobGN5QnZjaUJ5WVdScGJ5QmlkWFIwYjI1eklHRnVaRnh5WEc1Y2RDQXFJSE5sYkdWamRITXZaR1Z6Wld4bFkzUnpJR0Z1WkNCdFlYUmphR2x1WnlCdmNIUnBiMjRnWld4bGJXVnVkSE11WEhKY2JseDBJQ292WEhKY2JseDBKQzVtYmk1elpXeGxZM1JsWkNBOUlHWjFibU4wYVc5dUtITmxiR1ZqZENrZ2UxeHlYRzVjZEZ4MGFXWWdLSE5sYkdWamRDQTlQVDBnZFc1a1pXWnBibVZrS1NCN1hISmNibHgwWEhSY2RITmxiR1ZqZENBOUlIUnlkV1U3WEhKY2JseDBYSFI5WEhKY2JseDBYSFJ5WlhSMWNtNGdkR2hwY3k1bFlXTm9LR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNWNkRngwWEhSMllYSWdkQ0E5SUhSb2FYTXVkSGx3WlR0Y2NseHVYSFJjZEZ4MGFXWWdLSFFnUFQwZ0oyTm9aV05yWW05NEp5QjhmQ0IwSUQwOUlDZHlZV1JwYnljcElIdGNjbHh1WEhSY2RGeDBYSFIwYUdsekxtTm9aV05yWldRZ1BTQnpaV3hsWTNRN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RGeDBaV3h6WlNCcFppQW9kR2hwY3k1MFlXZE9ZVzFsTG5SdlRHOTNaWEpEWVhObEtDa2dQVDBnSjI5d2RHbHZiaWNwSUh0Y2NseHVYSFJjZEZ4MFhIUjJZWElnSkhObGJDQTlJQ1FvZEdocGN5a3VjR0Z5Wlc1MEtDZHpaV3hsWTNRbktUdGNjbHh1WEhSY2RGeDBYSFJwWmlBb2MyVnNaV04wSUNZbUlDUnpaV3hiTUYwZ0ppWWdKSE5sYkZzd1hTNTBlWEJsSUQwOUlDZHpaV3hsWTNRdGIyNWxKeWtnZTF4eVhHNWNkRngwWEhSY2RGeDBMeThnWkdWelpXeGxZM1FnWVd4c0lHOTBhR1Z5SUc5d2RHbHZibk5jY2x4dVhIUmNkRngwWEhSY2RDUnpaV3d1Wm1sdVpDZ25iM0IwYVc5dUp5a3VjMlZzWldOMFpXUW9abUZzYzJVcE8xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSMGFHbHpMbk5sYkdWamRHVmtJRDBnYzJWc1pXTjBPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseDBYSFI5S1R0Y2NseHVYSFI5TzF4eVhHNWNjbHh1WEhRdkx5QmxlSEJ2YzJVZ1pHVmlkV2NnZG1GeVhISmNibHgwSkM1bWJpNWhhbUY0VTNWaWJXbDBMbVJsWW5WbklEMGdabUZzYzJVN1hISmNibHh5WEc1Y2RDOHZJR2hsYkhCbGNpQm1iaUJtYjNJZ1kyOXVjMjlzWlNCc2IyZG5hVzVuWEhKY2JseDBablZ1WTNScGIyNGdiRzluS0NrZ2UxeHlYRzVjZEZ4MGFXWWdLQ0VrTG1adUxtRnFZWGhUZFdKdGFYUXVaR1ZpZFdjcFhISmNibHgwWEhSY2RISmxkSFZ5Ymp0Y2NseHVYSFJjZEhaaGNpQnRjMmNnUFNBblcycHhkV1Z5ZVM1bWIzSnRYU0FuSUNzZ1FYSnlZWGt1Y0hKdmRHOTBlWEJsTG1wdmFXNHVZMkZzYkNoaGNtZDFiV1Z1ZEhNc0p5Y3BPMXh5WEc1Y2RGeDBhV1lnS0hkcGJtUnZkeTVqYjI1emIyeGxJQ1ltSUhkcGJtUnZkeTVqYjI1emIyeGxMbXh2WnlrZ2UxeHlYRzVjZEZ4MFhIUjNhVzVrYjNjdVkyOXVjMjlzWlM1c2IyY29iWE5uS1R0Y2NseHVYSFJjZEgxY2NseHVYSFJjZEdWc2MyVWdhV1lnS0hkcGJtUnZkeTV2Y0dWeVlTQW1KaUIzYVc1a2IzY3ViM0JsY21FdWNHOXpkRVZ5Y205eUtTQjdYSEpjYmx4MFhIUmNkSGRwYm1SdmR5NXZjR1Z5WVM1d2IzTjBSWEp5YjNJb2JYTm5LVHRjY2x4dVhIUmNkSDFjY2x4dVhIUjlYSEpjYmx4eVhHNWNkSDBwS0NBb2RIbHdaVzltS0dwUmRXVnllU2tnSVQwZ0ozVnVaR1ZtYVc1bFpDY3BJRDhnYWxGMVpYSjVJRG9nZDJsdVpHOTNMbHBsY0hSdklDazdYSEpjYmx4eVhHNHZMMzBwTzF4eVhHNGlYWDA9IiwicmVxdWlyZSgnLi4vbGliL2pxdWVyeUZvcm0nKTtcclxucmVxdWlyZSgnLi4vbW9kL2Zvcm1DaGVjaycpO1xyXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vY29tbW9uL2V2ZW50cycpO1xyXG4vLzM5NjIgYnJhemlsXHJcbi8vNDEzMiBzYXVkaSBhcmFiaWFcclxuLy8zOTc0IGNoaWxlXHJcbnZhciBzcGVjaWFsQ291bnRyeUlkcyA9IFszOTYyLCA0MTMyLCAzOTc0XTtcclxuLy8xIGNwZlxyXG4vLzIgY25walxyXG4vLzMgbmlkXHJcbi8vNCBuY3JcclxuLy81IHJ1dFxyXG52YXIgc3BlY2lhbENvZGVzID0gWzEsIDIsIDMsIDQsIDddO1xyXG52YXIgc3BlY2lhbFppcENvbmZpZyA9IHBhZ2VEYXRhLnNwZWNpYWxaaXBDb25maWcgPyBwYWdlRGF0YS5zcGVjaWFsWmlwQ29uZmlnIDogW107XHJcbnZhciBzcGVjaWFsUGhvbmVDb25maWcgPSBwYWdlRGF0YS5zcGVjaWFsUGhvbmVDb25maWcgPyBwYWdlRGF0YS5zcGVjaWFsUGhvbmVDb25maWcgOiBbXTtcclxuLy9mb3JtIHNvdXJjZe+8jGNpdHkgZGF0YShkZWZhdWx0LHVzZXIsbG9jYXRpb24pXHJcbnZhciBmb3JtX2RhdGFfc291cmNlID0gJ2RlZmF1bHQnO1xyXG52YXIgaG91c2VOb0NvdW50cnlJZHMgPSBwYWdlRGF0YS5ob3VzZU5vQ291bnRyeUlkcyA/IHBhZ2VEYXRhLmhvdXNlTm9Db3VudHJ5SWRzIDogW107XHJcblxyXG4vL+iOt+WPluihqOWNleS4reeahERPTeWFg+e0oOWSjOWAvFxyXG52YXIgZ2V0X2Zvcm1fanNvbiA9IGZ1bmN0aW9uKGVsZW1fZm9ybSkgeyAgICBcclxuICAgIHZhciBmb3JtX2pzb24gPSB7fTtcclxuXHJcbiAgICBmb3JtX2pzb25bJ2FkZHJlc3NfaWQnXSA9IGVsZW1fZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWRkcmVzc19pZFwiXScpO1xyXG4gICAgZm9ybV9qc29uWydhZGRyZXNzX2lkX3ZhbCddID0gJC50cmltKGZvcm1fanNvblsnYWRkcmVzc19pZCddLnZhbCgpKTtcclxuXHJcbiAgICBmb3JtX2pzb25bJ2dlbmRlciddID0gZWxlbV9mb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZGRyZXNzW2dlbmRlcl1cIl0nKTtcclxuICAgIGZvcm1fanNvblsnZ2VuZGVyX3ZhbCddID0gJC50cmltKGZvcm1fanNvblsnZ2VuZGVyJ10udmFsKCkpO1xyXG5cclxuICAgIGZvcm1fanNvblsnZmlyc3RfbmFtZSddID0gZWxlbV9mb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZGRyZXNzW2ZpcnN0X25hbWVdXCJdJyk7XHJcbiAgICBmb3JtX2pzb25bJ2ZpcnN0X25hbWVfdmFsJ10gPSAkLnRyaW0oZm9ybV9qc29uWydmaXJzdF9uYW1lJ10udmFsKCkpO1xyXG5cclxuICAgIGZvcm1fanNvblsnbGFzdF9uYW1lJ10gPSBlbGVtX2Zvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFkZHJlc3NbbGFzdF9uYW1lXVwiXScpO1xyXG4gICAgZm9ybV9qc29uWydsYXN0X25hbWVfdmFsJ10gPSAkLnRyaW0oZm9ybV9qc29uWydsYXN0X25hbWUnXS52YWwoKSk7XHJcblxyXG4gICAgZm9ybV9qc29uWydhZGRyZXNzXzEnXSA9IGVsZW1fZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWRkcmVzc1thZGRyZXNzXzFdXCJdJyk7XHJcbiAgICBmb3JtX2pzb25bJ2FkZHJlc3NfMV92YWwnXSA9ICQudHJpbShmb3JtX2pzb25bJ2FkZHJlc3NfMSddLnZhbCgpKTtcclxuXHJcbiAgICBmb3JtX2pzb25bJ2FkZHJlc3NfMiddID0gZWxlbV9mb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZGRyZXNzW2FkZHJlc3NfMl1cIl0nKTtcclxuICAgIGZvcm1fanNvblsnYWRkcmVzc18yX3ZhbCddID0gJC50cmltKGZvcm1fanNvblsnYWRkcmVzc18yJ10udmFsKCkpO1xyXG5cclxuICAgIGZvcm1fanNvblsnY2l0eSddID0gZWxlbV9mb3JtLmZpbmQoJ3NlbGVjdFtuYW1lPVwiYWRkcmVzc1tjaXR5XVwiXScpO1xyXG4gICAgZm9ybV9qc29uWydjaXR5X3ZhbCddID0gcGFyc2VJbnQoZm9ybV9qc29uWydjaXR5J10udmFsKCkpO1xyXG5cclxuICAgIGZvcm1fanNvblsnY2l0eV90ZXh0J10gPSBlbGVtX2Zvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFkZHJlc3NbY2l0eV90ZXh0XVwiXScpO1xyXG4gICAgZm9ybV9qc29uWydjaXR5X3RleHRfdmFsJ10gPSAkLnRyaW0oZm9ybV9qc29uWydjaXR5X3RleHQnXS52YWwoKSk7XHJcblxyXG4gICAgZm9ybV9qc29uWydjb3VudHJ5J10gPSBlbGVtX2Zvcm0uZmluZCgnc2VsZWN0W25hbWU9XCJhZGRyZXNzW2NvdW50cnldXCJdJyk7XHJcbiAgICBmb3JtX2pzb25bJ2NvdW50cnlfdmFsJ10gPSBwYXJzZUludChmb3JtX2pzb25bJ2NvdW50cnknXS52YWwoKSk7XHJcblxyXG4gICAgZm9ybV9qc29uWydjb3VudHJ5X3NlbGVjdCddID0gZWxlbV9mb3JtLmZpbmQoJ3NlbGVjdFtuYW1lPVwiYWRkcmVzc1tjb3VudHJ5XVwiXSBvcHRpb25bc2VsZWN0ZWRdJyk7XHJcbiAgICBmb3JtX2pzb25bJ2NvdW50cnlfc2VsZWN0X25hbWUnXSA9IGZvcm1fanNvblsnY291bnRyeV9zZWxlY3QnXS5odG1sKCk7XHJcblxyXG4gICAgZm9ybV9qc29uWyd0YXhfY29kZV90eXBlJ10gPSBlbGVtX2Zvcm0uZmluZCgnc2VsZWN0W25hbWU9XCJhZGRyZXNzW3RheF9jb2RlX3R5cGVdXCJdJyk7XHJcbiAgICBmb3JtX2pzb25bJ3RheF9jb2RlX3R5cGVfdmFsJ10gPSBwYXJzZUludChmb3JtX2pzb25bJ3RheF9jb2RlX3R5cGUnXS52YWwoKSk7XHJcblxyXG4gICAgZm9ybV9qc29uWyd0YXhfY29kZV92YWx1ZSddID0gZWxlbV9mb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZGRyZXNzW3RheF9jb2RlX3ZhbHVlXVwiXScpO1xyXG4gICAgZm9ybV9qc29uWyd0YXhfY29kZV92YWx1ZV92YWwnXSA9ICQudHJpbShmb3JtX2pzb25bJ3RheF9jb2RlX3ZhbHVlJ10udmFsKCkpO1xyXG5cclxuICAgIGZvcm1fanNvblsncHJvdmluY2UnXSA9IGVsZW1fZm9ybS5maW5kKCdzZWxlY3RbbmFtZT1cImFkZHJlc3NbcHJvdmluY2VdXCJdJyk7XHJcbiAgICBmb3JtX2pzb25bJ3Byb3ZpbmNlX3ZhbCddID0gcGFyc2VJbnQoZm9ybV9qc29uWydwcm92aW5jZSddLnZhbCgpKTtcclxuXHJcbiAgICBmb3JtX2pzb25bJ3Byb3ZpbmNlX3RleHQnXSA9IGVsZW1fZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWRkcmVzc1twcm92aW5jZV90ZXh0XVwiXScpO1xyXG4gICAgZm9ybV9qc29uWydwcm92aW5jZV90ZXh0X3ZhbCddID0gJC50cmltKGZvcm1fanNvblsncHJvdmluY2VfdGV4dCddLnZhbCgpKTtcclxuXHJcbiAgICBmb3JtX2pzb25bJ3ppcCddID0gZWxlbV9mb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZGRyZXNzW3ppcF1cIl0nKTtcclxuICAgIGZvcm1fanNvblsnemlwX3ZhbCddID0gJC50cmltKGZvcm1fanNvblsnemlwJ10udmFsKCkpO1xyXG5cclxuICAgIGZvcm1fanNvblsncGhvbmUnXSA9IGVsZW1fZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWRkcmVzc1twaG9uZV1cIl0nKTtcclxuICAgIGZvcm1fanNvblsncGhvbmVfdmFsJ10gPSAkLnRyaW0oZm9ybV9qc29uWydwaG9uZSddLnZhbCgpKTtcclxuXHJcbiAgICBmb3JtX2pzb25bJ2VtYWlsJ10gPSBlbGVtX2Zvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFkZHJlc3NbZW1haWxdXCJdJyk7XHJcbiAgICBmb3JtX2pzb25bJ2VtYWlsX3ZhbCddID0gJC50cmltKGZvcm1fanNvblsnZW1haWwnXS52YWwoKSk7XHJcblxyXG4gICAgLy9TdGF0ZS9Qcm92aW5jZS9SZWdpb27liY3pnaLmmL7npLoq55qE5a655ZmoXHJcbiAgICBmb3JtX2pzb25bJ3Byb3ZpbmNlUmVxdWlyZWQnXSA9IGVsZW1fZm9ybS5maW5kKCcjcHJvdmluY2VSZXF1aXJlZCcpO1xyXG4gICAgLy9DaXR55YmN6Z2i5pi+56S6KueahOWuueWZqFxyXG4gICAgZm9ybV9qc29uWydjaXR5UmVxdWlyZWQnXSA9IGVsZW1fZm9ybS5maW5kKCcjY2l0eVJlcXVpcmVkJyk7XHJcblxyXG4gICAgLy9DUEYgb3IgQ05QSiBjb2Rl55qE5a655ZmoXHJcbiAgICBmb3JtX2pzb25bJ3RheENvZGUnXSA9IGVsZW1fZm9ybS5maW5kKCcjdGF4Q29kZScpO1xyXG5cclxuICAgIC8v6Zeo54mM5Y+3XHJcbiAgICBmb3JtX2pzb25bJ2hvdXNlX25vX2NvbnRhaW5lciddID0gZWxlbV9mb3JtLmZpbmQoJyNob3VzZV9ubycpO1xyXG4gICAgZm9ybV9qc29uWydob3VzZV9ubyddID0gZWxlbV9mb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZGRyZXNzW2hvdXNlX25vXVwiXScpO1xyXG4gICAgZm9ybV9qc29uWydob3VzZV9ub192YWwnXSA9ICQudHJpbShmb3JtX2pzb25bJ2hvdXNlX25vJ10udmFsKCkpO1xyXG5cclxuICAgIHJldHVybiBmb3JtX2pzb247XHJcbn07XHJcblxyXG4vL2RlZmF1bHQgdmFsaWQgZm9ybSBpdGVtc1xyXG52YXIgZ2V0RGVmYXVsdEl0ZW1zID0gZnVuY3Rpb24oa2V5KSB7XHJcbiAgICB2YXIgZGVmYXVsdEl0ZW1zID0ge1xyXG4gICAgICAgIFwiYWRkcmVzc1tmaXJzdF9uYW1lXVwiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVsbFwiLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZy5wYWdlX2NoZWNrb3V0X2ZpcnN0X25hbWVfbWluaW11bSxcclxuICAgICAgICAgICAgICAgIGVyckV2ZW50OiBcImZpcnN0X25hbWVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1pbmxlbmd0aFwiLFxyXG4gICAgICAgICAgICAgICAgbWlubGVuZ3RoOiAyLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZy5wYWdlX2NoZWNrb3V0X2ZpcnN0X25hbWVfbWluaW11bSxcclxuICAgICAgICAgICAgICAgIGVyckV2ZW50OiBcImZpcnN0X25hbWVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImFkZHJlc3NbbGFzdF9uYW1lXVwiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVsbFwiLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZy5wYWdlX2NoZWNrb3V0X2xhc3RfbmFtZV9taW5pbXVtLFxyXG4gICAgICAgICAgICAgICAgZXJyRXZlbnQ6IFwibGFzdF9uYW1lXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtaW5sZW5ndGhcIixcclxuICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogMixcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmcucGFnZV9jaGVja291dF9sYXN0X25hbWVfbWluaW11bSxcclxuICAgICAgICAgICAgICAgIGVyckV2ZW50OiBcImxhc3RfbmFtZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiYWRkcmVzc1thZGRyZXNzXzFdXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJudWxsXCIsXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nLnBhZ2VfY2hlY2tvdXRfc2hpcHBpbmdfYWRkcmVzc19hdF9sZWFzdCxcclxuICAgICAgICAgICAgICAgIGVyckV2ZW50OiBcImFkZHJlc3NfMVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWlubGVuZ3RoXCIsXHJcbiAgICAgICAgICAgICAgICBtaW5sZW5ndGg6IDUsXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nLnBhZ2VfY2hlY2tvdXRfc2hpcHBpbmdfYWRkcmVzc19hdF9sZWFzdCxcclxuICAgICAgICAgICAgICAgIGVyckV2ZW50OiBcImFkZHJlc3NfMVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiYWRkcmVzc1tjb3VudHJ5XVwiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVsbFwiLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZy5wYWdlX2NoZWNrb3V0X3BsZWFzZV9zZWxlY3RfY291bnRyeVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImFkZHJlc3NbY2l0eV90ZXh0XVwiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVsbFwiLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZy5wYWdlX2NoZWNrb3V0X3lvdXJfY2l0eV9hdF9sZWFzdCxcclxuICAgICAgICAgICAgICAgIGVyckV2ZW50OiBcImNpdHlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1pbmxlbmd0aFwiLFxyXG4gICAgICAgICAgICAgICAgbWlubGVuZ3RoOiAzLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZy5wYWdlX2NoZWNrb3V0X3lvdXJfY2l0eV9hdF9sZWFzdCxcclxuICAgICAgICAgICAgICAgIGVyckV2ZW50OiBcImNpdHlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInJlZ2V4cFwiLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgvXihcXER7MywyOH0pJC8pLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZy5wYWdlX2NoZWNrb3V0X3lvdXJfY2l0eV9mb3JtYXQsXHJcbiAgICAgICAgICAgICAgICBlcnJFdmVudDogXCJjaXR5XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJhZGRyZXNzW3Byb3ZpbmNlXVwiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVsbFwiLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZy5wYWdlX2NoZWNrb3V0X3BsZWFzZV9zZWxlY3RfcHJvdmluY2UsXHJcbiAgICAgICAgICAgICAgICBlcnJFdmVudDogXCJzdGF0ZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiYWRkcmVzc1t6aXBdXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJudWxsXCIsXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nLnBhZ2VfY2hlY2tvdXRfemlwX2NvZGVfYXRfbGVhc3QsXHJcbiAgICAgICAgICAgICAgICBlcnJFdmVudDogXCJ6aXBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1pbmxlbmd0aFwiLFxyXG4gICAgICAgICAgICAgICAgbWlubGVuZ3RoOiAyLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZy5wYWdlX2NoZWNrb3V0X3ppcF9jb2RlX2F0X2xlYXN0LFxyXG4gICAgICAgICAgICAgICAgZXJyRXZlbnQ6IFwiemlwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJhZGRyZXNzW3Bob25lXVwiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVsbFwiLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZy5wYWdlX2NoZWNrb3V0X3Bob25lX251bWJlcl9hdF9sZWFzdCxcclxuICAgICAgICAgICAgICAgIGVyckV2ZW50OiBcInBob25lX251bWJlclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWlubGVuZ3RoXCIsXHJcbiAgICAgICAgICAgICAgICBtaW5sZW5ndGg6IDYsXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nLnBhZ2VfY2hlY2tvdXRfcGhvbmVfbnVtYmVyX2F0X2xlYXN0LFxyXG4gICAgICAgICAgICAgICAgZXJyRXZlbnQ6IFwicGhvbmVfbnVtYmVyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJhZGRyZXNzW2VtYWlsXVwiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVsbFwiLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZy5wYWdlX2xvZ2luX2VudGVyX2VtYWlsLFxyXG4gICAgICAgICAgICAgICAgZXJyRXZlbnQ6IFwiZW1haWxfZW1wdHlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nLnBhZ2VfbG9naW5fY2hlY2tfZW1haWxfZm9ybWF0LFxyXG4gICAgICAgICAgICAgICAgZXJyRXZlbnQ6IFwiZW1haWxfZXJyb1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiYWRkcmVzc1tob3VzZV9ub11cIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInJlZ2V4cFwiLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgvXlxcZFtcXHcvXFwtXXswLDR9JC8sIFwiaVwiKSxcclxuICAgICAgICAgICAgICAgIGVyck1zZzogX2xhbmcucGFnZV9jb21tb25fYWRkcmVzc19ob3VzZV9ub19lcnJvcixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuICAgIHJldHVybiB0eXBlb2Yga2V5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZGVmYXVsdEl0ZW1zW2tleV0gIT09ICd1bmRlZmluZWQnID8gZGVmYXVsdEl0ZW1zW2tleV0gOiBkZWZhdWx0SXRlbXNcclxufTtcclxudmFyIGl0ZW1zID0gZ2V0RGVmYXVsdEl0ZW1zKCk7XHJcbnZhciBzZXRFcnJvciA9IGZ1bmN0aW9uIChvYmosIGVyck1zZywgc2hvd0xldmVsLCBlcnJFdmVudCkge1xyXG4gICAgb2JqLmZvY3VzKCk7XHJcbiAgICBvYmouYWRkQ2xhc3MoJ2ZpZWxkLWVycm9yJyk7XHJcbiAgICBpZihlcnJFdmVudCAhPSAnJyAmJiBlcnJFdmVudCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoZXZlbnRzLmNoZWNrb3V0RXJyb3IsZXJyRXZlbnQpO1xyXG4gICAgfVxyXG4gICAgaWYoc2hvd0xldmVsID09IDApIHtcclxuICAgICAgICBpZihvYmoubmV4dCgnLmVycm9yLXRpcCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgb2JqLm5leHQoJy5lcnJvci10aXAnKS5odG1sKGVyck1zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2JqLmFmdGVyKCc8cCBjbGFzcz1cImVycm9yLXRpcFwiPicgKyBlcnJNc2cgKyAnPC9wPicpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZihzaG93TGV2ZWwgPT0gMSkge1xyXG4gICAgICAgIG9iaiA9IG9iai5wYXJlbnQoKTtcclxuICAgICAgICBpZihvYmouY2hpbGRyZW4oJy5lcnJvci10aXAnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG9iai5jaGlsZHJlbignLmVycm9yLXRpcCcpLmh0bWwoZXJyTXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmouYXBwZW5kKCc8cCBjbGFzcz1cImVycm9yLXRpcFwiPicgKyBlcnJNc2cgKyAnPC9wPicpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZihzaG93TGV2ZWwgPT0gMikge1xyXG4gICAgICAgIG9iaiA9IG9iai5wYXJlbnQoKS5wYXJlbnQoKTtcclxuICAgICAgICBpZihvYmouY2hpbGRyZW4oJy5lcnJvci10aXAnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG9iai5jaGlsZHJlbignLmVycm9yLXRpcCcpLmh0bWwoZXJyTXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmouYXBwZW5kKCc8cCBjbGFzcz1cImVycm9yLXRpcFwiPicgKyBlcnJNc2cgKyAnPC9wPicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG52YXIgY2xlYW5FcnJvclRpcEV4dHJhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYoJCgnLnNhbXBsZS1zYWxlLWFkZHJlc3MtdGlwcycpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICQoJy5zYW1wbGUtc2FsZS1hZGRyZXNzLXRpcHMnKS5yZW1vdmVDbGFzcygnc2FtcGxlLXNhbGUtYWRkcmVzcy10aXBzLWV4dHJhJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBjbGVhbkVycm9yID0gZnVuY3Rpb24oZWxlbSwgc2hvd0xldmVsKSB7XHJcbiAgICBlbGVtLnJlbW92ZUNsYXNzKCdmaWVsZC1lcnJvcicpO1xyXG4gICAgaWYoc2hvd0xldmVsID09IDApIHtcclxuICAgICAgICBlbGVtLm5leHQoJy5lcnJvci10aXAnKS5yZW1vdmUoKTtcclxuICAgIH0gZWxzZSBpZihzaG93TGV2ZWwgPT0gMSkge1xyXG4gICAgICAgIGVsZW0ucGFyZW50KCkuY2hpbGRyZW4oJy5lcnJvci10aXAnKS5yZW1vdmUoKTtcclxuICAgIH0gZWxzZSBpZihzaG93TGV2ZWwgPT0gMikge1xyXG4gICAgICAgIGVsZW0ucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oJy5lcnJvci10aXAnKS5yZW1vdmUoKTtcclxuICAgIH0gZWxzZSBpZihzaG93TGV2ZWwgPT0gJ2FsbCcpIHtcclxuICAgICAgICBlbGVtLmZpbmQoJy5lcnJvci10aXAnKS5yZW1vdmUoKTtcclxuICAgICAgICBlbGVtLmZpbmQoJy5maWVsZC1lcnJvcicpLnJlbW92ZUNsYXNzKCdmaWVsZC1lcnJvcicpO1xyXG4gICAgfVxyXG4gICAgY2xlYW5FcnJvclRpcEV4dHJhKCk7XHJcbn07XHJcbnZhciBjaGVja09uZUl0ZW0gPSBmdW5jdGlvbiAoZWxlbSwgaXNTaG93RXJyb3IpIHtcclxuICAgIHZhciBlbGVtID0gJChlbGVtKTtcclxuICAgIHZhciBpcHRfbmFtZSA9IGVsZW0uYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGVsZW1fZm9ybSA9IGVsZW0uY2xvc2VzdCgnZm9ybScpO1xyXG4gICAgdmFyIGZvcm1fanNvbiA9IGdldF9mb3JtX2pzb24oZWxlbV9mb3JtKTtcclxuXHJcbiAgICBjaGVja19zcGVjaWFsX2NvdW50cnlfcGhvbmUoZm9ybV9qc29uKTtcclxuICAgIGNoZWNrX3NwZWNpYWxfY291bnRyeV96aXAoZm9ybV9qc29uKTtcclxuXHJcbiAgICBpZiAoaXB0X25hbWUgPT0gJ2FkZHJlc3NbdGF4X2NvZGVfdmFsdWVdJykgeyAgICAgICAgICAgICAgICAgLy/pqozor4EgQ1BGIG9yIENOUEogY29kZVxyXG4gICAgICAgIHZhciB0YXhfY29kZV90eXBlX3ZhbCA9IGZvcm1fanNvblsndGF4X2NvZGVfdHlwZV92YWwnXTtcclxuICAgICAgICB2YXIgdGF4X2NvZGVfdmFsdWVfdmFsID0gZm9ybV9qc29uWyd0YXhfY29kZV92YWx1ZV92YWwnXTtcclxuICAgICAgICBpZiAodGF4X2NvZGVfdHlwZV92YWwgPT0gc3BlY2lhbENvZGVzWzBdICYmICh0YXhfY29kZV92YWx1ZV92YWwubGVuZ3RoIDwgMTQpKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1Nob3dFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZm9ybV9qc29uWyd0YXhfY29kZV92YWx1ZSddLCBfbGFuZy5wYWdlX2NvbW1vbl9jcGZfY29kZV9lcnJvcl90aXAsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRheF9jb2RlX3R5cGVfdmFsID09IHNwZWNpYWxDb2Rlc1sxXSAmJiAodGF4X2NvZGVfdmFsdWVfdmFsLmxlbmd0aCA8IDE4KSkge1xyXG4gICAgICAgICAgICBpZiAoaXNTaG93RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGZvcm1fanNvblsndGF4X2NvZGVfdmFsdWUnXSwgX2xhbmcucGFnZV9jb21tb25fY25wal9jb2RlX2Vycm9yX3RpcCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGF4X2NvZGVfdHlwZV92YWwgPT0gc3BlY2lhbENvZGVzWzJdICYmICh0YXhfY29kZV92YWx1ZV92YWwubGVuZ3RoICE9IDEwIHx8IGlzTmFOKHRheF9jb2RlX3ZhbHVlX3ZhbCkpKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1Nob3dFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZm9ybV9qc29uWyd0YXhfY29kZV92YWx1ZSddLCBfbGFuZy5wYWdlX2NoZWNrb3V0X25hdGlvbmFsX2lkX2Vycm9yX3RpcHMsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRheF9jb2RlX3R5cGVfdmFsID09IHNwZWNpYWxDb2Rlc1szXSAmJiAodGF4X2NvZGVfdmFsdWVfdmFsLmxlbmd0aCAhPSAxMCB8fCBpc05hTih0YXhfY29kZV92YWx1ZV92YWwpKSkge1xyXG4gICAgICAgICAgICBpZiAoaXNTaG93RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGZvcm1fanNvblsndGF4X2NvZGVfdmFsdWUnXSwgX2xhbmcucGFnZV9jaGVja291dF9jb21tZXJjaWFsX3JlZ2lzdHJ5X2Vycm9yX3RpcHMsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRheF9jb2RlX3R5cGVfdmFsID09IHNwZWNpYWxDb2Rlc1s0XSAmJiAodGF4X2NvZGVfdmFsdWVfdmFsLmxlbmd0aCA8IDEyKSkge1xyXG4gICAgICAgICAgICBpZiAoaXNTaG93RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGZvcm1fanNvblsndGF4X2NvZGVfdmFsdWUnXSwgX2xhbmcucGFnZV9jb21tb25fcnV0X2NvZGVfZXJyb3JfdGlwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xlYW5FcnJvcihlbGVtLCAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5YW25a6D6L6T5YWl5qGG5ZKM5LiL5ouJ5qGGXHJcbiAgICBmb3IgKHZhciBrZXkgaW4gaXRlbXMpIHtcclxuICAgICAgICBpZiAoaXB0X25hbWUgPT0ga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0ge307XHJcbiAgICAgICAgICAgIGl0ZW1baXB0X25hbWVdID0gaXRlbXNba2V5XTtcclxuICAgICAgICAgICAgdmFyIGlzQ2hlY2tlZCA9IGVsZW1fZm9ybS5mb3JtQ2hlY2soaXRlbSwge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yOiBmdW5jdGlvbiAob2JqLCBlcnJNc2csIGVyckV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNTaG93RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXB0X25hbWUgPT0gJ2FkZHJlc3NbZmlyc3RfbmFtZV0nIHx8IGlwdF9uYW1lID09ICdhZGRyZXNzW2xhc3RfbmFtZV0nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihvYmosIGVyck1zZywgMSwgZXJyRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3Iob2JqLCBlcnJNc2csIDAsIGVyckV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNDaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpcHRfbmFtZSA9PSAnYWRkcmVzc1tmaXJzdF9uYW1lXScgfHwgaXB0X25hbWUgPT0gJ2FkZHJlc3NbbGFzdF9uYW1lXScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhbkVycm9yKGVsZW0sIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2ZpcnN0IG5hbWUg5ZKMIGxhc3QgbmFtZSDmgLvplb/luqbkuI3nrYnotoXov4czNFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdF9uYW1lID0gZWxlbV9mb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZGRyZXNzW2ZpcnN0X25hbWVdXCJdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RfbmFtZSA9IGVsZW1fZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWRkcmVzc1tsYXN0X25hbWVdXCJdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChmaXJzdF9uYW1lLnZhbCgpLmxlbmd0aCArIGxhc3RfbmFtZS52YWwoKS5sZW5ndGgpID4gMzQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNTaG93RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGZpcnN0X25hbWUsIF9sYW5nLnBhZ2VfY2hlY2tvdXRfZnVsbF9uYW1lX2Nhbm5vdF9lY3hlZWQsIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhbkVycm9yKGZpcnN0X25hbWUsIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYW5FcnJvcihlbGVtLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9kaXNhYmxlIGZpbHRlciBzYW1wbGVzYWxlXHJcbiAgICB2YXIgaGFzU2FtcGxlU2FsZSA9IHBhZ2VEYXRhLmhhc1NhbXBsZVNhbGVcclxuICAgIGlmIChoYXNTYW1wbGVTYWxlID09IDEpIHtcclxuICAgICAgICB2YXIgZmlsZWRfdmFsdWUgPSBlbGVtLnZhbCgpO1xyXG4gICAgICAgIGZpbGVkX3ZhbHVlID0gZmlsZWRfdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB2YXIgdWtfYWRkcmVzX2FycmF5ID0gcGFnZURhdGEudWtBZGRyZXNGaWx0ZXIudWtfYWRkcmVzX2FycmF5ID8gcGFnZURhdGEudWtBZGRyZXNGaWx0ZXIudWtfYWRkcmVzX2FycmF5IDogW11cclxuICAgICAgICB2YXIgdWtfYWRkcmVzc19maWx0ZXIgPSBwYWdlRGF0YS51a0FkZHJlc0ZpbHRlci51a19hZGRyZXNzX2ZpbHRlciA/IHBhZ2VEYXRhLnVrQWRkcmVzRmlsdGVyLnVrX2FkZHJlc3NfZmlsdGVyIDogW11cclxuICAgICAgICB2YXIgdWtfemlwX2ZpbHRlciA9IHBhZ2VEYXRhLnVrQWRkcmVzRmlsdGVyLnVrX3ppcF9maWx0ZXIgPyBwYWdlRGF0YS51a0FkZHJlc0ZpbHRlci51a196aXBfZmlsdGVyIDogW11cclxuICAgICAgICBpZiAoJC5pbkFycmF5KGlwdF9uYW1lLCB1a19hZGRyZXNfYXJyYXkpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG09MDsgbSA8IHVrX2FkZHJlc3NfZmlsdGVyLmxlbmd0aDsgbSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZWRfdmFsdWUuaW5kZXhPZih1a19hZGRyZXNzX2ZpbHRlclttXSkgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihpc1Nob3dFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlbGVtLCBfbGFuZy5wYWdlX2NvbW1vbl9jYW5fbm90X3NoaXAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xlYW5FcnJvcihlbGVtLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlwdF9uYW1lID09ICdhZGRyZXNzW3ppcF0nKSB7XHJcbiAgICAgICAgICAgIGZpbGVkX3ZhbHVlID0gZmlsZWRfdmFsdWUucmVwbGFjZSgvXFxzKi9nLCAnJylcclxuICAgICAgICAgICAgZm9yICh2YXIgbj0wOyBuIDwgdWtfemlwX2ZpbHRlci5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGVkX3ZhbHVlLmluZGV4T2YodWtfemlwX2ZpbHRlcltuXSkgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihpc1Nob3dFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlbGVtLCBfbGFuZy5wYWdlX2NvbW1vbl9jYW5fbm90X3NoaXAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xlYW5FcnJvcihlbGVtLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbnZhciBjaGVja19zcGVjaWFsX2NvdW50cnlfcGhvbmUgPSBmdW5jdGlvbiAoZm9ybV9qc29uKSB7XHJcbiAgICB2YXIgY291bnRyeUlkID0gZm9ybV9qc29uWydjb3VudHJ5X3ZhbCddO1xyXG4gICAgdmFyIGNvbmZpZyA9IGZhbHNlO1xyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHNwZWNpYWxQaG9uZUNvbmZpZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKHNwZWNpYWxQaG9uZUNvbmZpZ1tpXS5jb3VudHJ5SWRzLmluZGV4T2YoY291bnRyeUlkKSA+IC0xKSB7XHJcbiAgICAgICAgICAgY29uZmlnID0gc3BlY2lhbFBob25lQ29uZmlnW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKGNvbmZpZyAhPT0gZmFsc2UpIHtcclxuICAgICAgICBpdGVtc1tcImFkZHJlc3NbcGhvbmVdXCJdID0gIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJudWxsXCIsXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IF9sYW5nLnBhZ2VfY2hlY2tvdXRfcGhvbmVfbnVtYmVyX2F0X2xlYXN0LFxyXG4gICAgICAgICAgICAgICAgZXJyRXZlbnQ6IFwicGhvbmVfbnVtYmVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJyZWdleHBcIixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoY29uZmlnLnBhdHRlcm4pLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZ1tjb25maWcuZXJyVGlwXSxcclxuICAgICAgICAgICAgICAgIGVyckV2ZW50OiBcInBob25lX251bWJlclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGl0ZW1zW1wiYWRkcmVzc1twaG9uZV1cIl0gPSBnZXREZWZhdWx0SXRlbXMoXCJhZGRyZXNzW3Bob25lXVwiKVxyXG4gICAgfVxyXG59XHJcblxyXG52YXIgY2hlY2tfc3BlY2lhbF9jb3VudHJ5X3ppcCA9IGZ1bmN0aW9uIChmb3JtX2pzb24pIHtcclxuICAgIHZhciBjb3VudHJ5SWQgPSBmb3JtX2pzb25bJ2NvdW50cnlfdmFsJ107XHJcbiAgICB2YXIgY29uZmlnID0gZmFsc2U7XHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgc3BlY2lhbFppcENvbmZpZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKHNwZWNpYWxaaXBDb25maWdbaV0uY291bnRyeUlkcy5pbmRleE9mKGNvdW50cnlJZCkgPiAtMSkge1xyXG4gICAgICAgICAgIGNvbmZpZyA9IHNwZWNpYWxaaXBDb25maWdbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoY29uZmlnICE9PSBmYWxzZSkge1xyXG4gICAgICAgIGl0ZW1zW1wiYWRkcmVzc1t6aXBdXCJdID0gIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJyZWdleHBcIixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoY29uZmlnLnBhdHRlcm4pLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiBfbGFuZ1tjb25maWcuZXJyVGlwXSxcclxuICAgICAgICAgICAgICAgIGVyckV2ZW50OiBcInppcFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGl0ZW1zW1wiYWRkcmVzc1t6aXBdXCJdID0gZ2V0RGVmYXVsdEl0ZW1zKFwiYWRkcmVzc1t6aXBdXCIpXHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBjb3VudHJ5X2Vycm9yX3RpcHNfZXh0cmEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZigkKCcuc2FtcGxlLXNhbGUtYWRkcmVzcy10aXBzJykubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgJCgnLnNhbXBsZS1zYWxlLWFkZHJlc3MtdGlwcycpLmFkZENsYXNzKCdzYW1wbGUtc2FsZS1hZGRyZXNzLXRpcHMtZXh0cmEnKTtcclxuICAgIH1cclxufVxyXG5cclxudmFyIGNoZWNrX2FkZHJfZm9ybSA9IGZ1bmN0aW9uKGVsZW1fZm9ybSkge1xyXG4gICAgaWYoZWxlbV9mb3JtLmxlbmd0aCA8IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YXIgZm9ybV9qc29uID0gZ2V0X2Zvcm1fanNvbihlbGVtX2Zvcm0pO1xyXG5cclxuICAgIGlmKGZvcm1fanNvblsnZW1haWwnXS5pcygnOnZpc2libGUnKSkge1xyXG4gICAgICAgIGlmKCEgY2hlY2tPbmVJdGVtKGZvcm1fanNvblsnZW1haWwnXSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKCEgY2hlY2tPbmVJdGVtKGZvcm1fanNvblsncGhvbmUnXSwgdHJ1ZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZighIGNoZWNrT25lSXRlbShmb3JtX2pzb25bJ2ZpcnN0X25hbWUnXSwgdHJ1ZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZighIGNoZWNrT25lSXRlbShmb3JtX2pzb25bJ2xhc3RfbmFtZSddLCB0cnVlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChmb3JtX2pzb25bJ2hvdXNlX25vJ10uaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICBpZighIGNoZWNrT25lSXRlbShmb3JtX2pzb25bJ2hvdXNlX25vJ10sIHRydWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZighIGNoZWNrT25lSXRlbShmb3JtX2pzb25bJ2FkZHJlc3NfMSddLCB0cnVlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmKCEgY2hlY2tPbmVJdGVtKGZvcm1fanNvblsnYWRkcmVzc18yJ10sIHRydWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYoISBjaGVja09uZUl0ZW0oZm9ybV9qc29uWydwcm92aW5jZV90ZXh0J10sIHRydWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYoISBjaGVja09uZUl0ZW0oZm9ybV9qc29uWydjaXR5X3RleHQnXSwgdHJ1ZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZighIGNoZWNrT25lSXRlbShmb3JtX2pzb25bJ2NvdW50cnknXSwgdHJ1ZSkpIHtcclxuICAgICAgICBjb3VudHJ5X2Vycm9yX3RpcHNfZXh0cmEoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy/pgInmi6nlt7Topb/vvIhjb3VudHJ5X2lk5Li6Mzk2Mu+8ie+8jOmcgOimgemqjOivgUNQRiBvciBDTlBKIGNvZGVcclxuICAgIC8vIFNhdWRpIEFyYWJpYe+8iOmYv+aLieS8r++8jGNvdW50cnlfaWTkuLo0MTMy77yJ5pe2LCDpqozor4FJRCBvciBDUiBjb2RlXHJcbiAgICBpZiAoc3BlY2lhbENvdW50cnlJZHMuaW5kZXhPZihmb3JtX2pzb25bJ2NvdW50cnlfdmFsJ10pICE9PSAtMSkge1xyXG4gICAgICAgIGlmKCEgY2hlY2tPbmVJdGVtKGZvcm1fanNvblsndGF4X2NvZGVfdmFsdWUnXSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZm9ybV9qc29uWydwcm92aW5jZSddLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgaWYoISBjaGVja09uZUl0ZW0oZm9ybV9qc29uWydwcm92aW5jZSddLCB0cnVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmb3JtX2pzb25bJ2NpdHknXS5pcygnOnZpc2libGUnKSkge1xyXG4gICAgICAgIGlmKCEgY2hlY2tPbmVJdGVtKGZvcm1fanNvblsnY2l0eSddLCB0cnVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKCEgY2hlY2tPbmVJdGVtKGZvcm1fanNvblsnemlwJ10sIHRydWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuLy9iaW5kIGZvcm0gZXZlbnRcclxudmFyIGhhbmRsZV9hZGRyX2Zvcm0gPSBmdW5jdGlvbihlbGVtX2Zvcm0pIHtcclxuICAgIGlmKGVsZW1fZm9ybS5sZW5ndGggPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFyIGZvcm1fanNvbiA9IGdldF9mb3JtX2pzb24oZWxlbV9mb3JtKTtcclxuICAgXHJcbiAgICB2YXIgc2V0UHJvdmluY2UgPSBmdW5jdGlvbiAoY2lkKSB7ICAgICAgICBcclxuXHJcbiAgICAgICAgc2V0UHJvdmluY2VTZWxlY3QoY2lkKTtcclxuICAgICAgICBzZXRQaG9uZVByZWZpeChjaWQpO1xyXG4gICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc2V0UHJvdmluY2VTZWxlY3QgPSBmdW5jdGlvbiAoY2lkKSB7XHJcblxyXG4gICAgICAgIHZhciByZWdpb25faXNfc2VsZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGFsbFJlZ2lvbl9qc29uID0gcGFnZURhdGEuYWxsUmVnaW9uX2pzb247ICAgICAgICBcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBhbGxSZWdpb25fanNvbikge1xyXG4gICAgICAgICAgICBpZihwYXJzZUludChpKSA9PSBwYXJzZUludChjaWQpKSB7XHJcbiAgICAgICAgICAgICAgICByZWdpb25faXNfc2VsZWN0ID0gdHJ1ZTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZvcm1fanNvblsncHJvdmluY2UnXS5lbXB0eSgpLnNob3coKS5hcHBlbmQoJzxvcHRpb24gdmFsdWU9XCJcIj4nICsgX2xhbmcucGFnZV9jb21tb25fZm9ybV9zZWxlY3QgKyAnPC9vcHRpb24+Jyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIGFsbFJlZ2lvbl9qc29uW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybV9qc29uWydwcm92aW5jZSddLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT1cIicgKyBqICsgJ1wiPicgKyBhbGxSZWdpb25fanNvbltpXVtqXSArICc8L29wdGlvbj4nKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9sb2NhdGlvbiBzb3VyY2UgcmVnaW9uIHNlbGVjdFxyXG4gICAgICAgIGlmKHJlZ2lvbl9pc19zZWxlY3QgJiYgZm9ybV9kYXRhX3NvdXJjZSA9PSAnbG9jYXRpb24nKSB7XHJcbiAgICAgICAgICAgIHNldFByb3ZpbmNlVGV4dEhpZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy91c2VyIHNvdXJjZSByZWdpb24gc2VsZWN0XHJcbiAgICAgICAgaWYoZm9ybV9qc29uWydwcm92aW5jZV90ZXh0X3ZhbCddICE9IFwiXCIgJiYgZm9ybV9kYXRhX3NvdXJjZSA9PSAndXNlcicpIHtcclxuICAgICAgICAgICAgc2V0UHJvdmluY2VTZWxlY3RIaWRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCFyZWdpb25faXNfc2VsZWN0KSB7XHJcbiAgICAgICAgICAgIHNldFByb3ZpbmNlU2VsZWN0SGlkZSgpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFByb3ZpbmNlVGV4dEhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB2YXIgc2V0UHJvdmluY2VTZWxlY3RIaWRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9ybV9qc29uWydwcm92aW5jZVJlcXVpcmVkJ10uaHRtbCgnJm5ic3A7Jyk7XHJcbiAgICAgICAgZm9ybV9qc29uWydwcm92aW5jZV90ZXh0J10uc2hvdygpO1xyXG4gICAgICAgIGZvcm1fanNvblsncHJvdmluY2UnXS5oaWRlKCkuZW1wdHkoKTtcclxuICAgICAgICBjbGVhbkVycm9yKGZvcm1fanNvblsncHJvdmluY2UnXSwgMCk7XHJcbiAgICAgICAgbmV4dF9sYWJlbF9hZGRfY2xhc3MoZm9ybV9qc29uWydwcm92aW5jZV90ZXh0J10sJ2lucHV0Jyk7XHJcbiAgICAgICAgJCgnI19wcm92aW5jZWRfaWNvbicpLmhpZGUoKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHZhciBzZXRQcm92aW5jZVRleHRIaWRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9ybV9qc29uWydwcm92aW5jZVJlcXVpcmVkJ10uaHRtbCgnKicpO1xyXG4gICAgICAgIGZvcm1fanNvblsncHJvdmluY2VfdGV4dCddLmhpZGUoKTtcclxuICAgICAgICBuZXh0X2xhYmVsX2FkZF9jbGFzcyhmb3JtX2pzb25bJ3Byb3ZpbmNlJ10sJ3NlbGVjdCcpO1xyXG4gICAgICAgICQoJyNfcHJvdmluY2VkX2ljb24nKS5zaG93KCk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB2YXIgc2V0UGhvbmVQcmVmaXggPSBmdW5jdGlvbihjaWQpIHtcclxuICAgICAgICB2YXIgY291bnRyeV9kZXRhaWxfanNvbiA9IHBhZ2VEYXRhLmNvdW50cnlEZXRhaWxcclxuICAgICAgICB2YXIgcGhvbmVfaXNfc2VsZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBjb3VudHJ5X2RldGFpbF9qc29uKXtcclxuICAgICAgICAgICAgaWYocGFyc2VJbnQoaSkgPT0gcGFyc2VJbnQoY2lkKSAmJiB0eXBlb2YgY291bnRyeV9kZXRhaWxfanNvbltpXS5waG9uZV9jb2RlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGNvdW50cnlfZGV0YWlsX2pzb25baV0ucmVnaW9uX2NvZGUgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBwaG9uZV9pc19zZWxlY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBob25lX3ByZWZpeF90ZXh0ID0gY291bnRyeV9kZXRhaWxfanNvbltpXS5yZWdpb25fY29kZTtcclxuICAgICAgICAgICAgICAgIGlmKGNvdW50cnlfZGV0YWlsX2pzb25baV0ucGhvbmVfY29kZSAgPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZV9wcmVmaXhfdGV4dCArPSAnJm5ic3A7ICsgJm5ic3A7JyArIGNvdW50cnlfZGV0YWlsX2pzb25baV0ucGhvbmVfY29kZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICQoJyNwaG9uZV9wcmVmaXgnKS5odG1sKHBob25lX3ByZWZpeF90ZXh0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFwaG9uZV9pc19zZWxlY3Qpe1xyXG4gICAgICAgICAgICAkKCcjcGhvbmVfcHJlZml4JykuaHRtbCgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdmFyIHNldENpdHkgPSBmdW5jdGlvbiAocGlkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtX2Zvcm0uZmluZCgnaW5wdXQnKS5mb2N1cyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1lID0gJCh0aGlzKTtcclxuICAgICAgICBuZXh0X2xhYmVsX2FkZF9jbGFzcyhtZSwnaW5wdXQnKVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGVsZW1fZm9ybS5maW5kKCdpbnB1dCcpLmJsdXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtZSA9ICQodGhpcyk7XHJcbiAgICAgICAgbmV4dF9sYWJlbF9yZW1vdmVfY2xhc3MobWUsJ2lucHV0JylcclxuICAgICAgICBpZiAobWUuYXR0cignbmFtZScpID09ICdhZGRyZXNzW3RheF9jb2RlX3ZhbHVlXScpIHtcclxuICAgICAgICAgICAgdmFyIHRheF9jb2RlX3ZhbHVlX3ZhbCA9IG1lLnZhbCgpXHJcbiAgICAgICAgICAgICAgICAsbWF4TGVuZ3RoO1xyXG4gICAgICAgICAgICBzd2l0Y2goZm9ybV9qc29uWyd0YXhfY29kZV90eXBlJ10udmFsKCkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGggPSAxNDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGggPSAxODtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGggPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigodGF4X2NvZGVfdmFsdWVfdmFsLmxlbmd0aCA9PSBtYXhMZW5ndGgpICYmICghIGlzTmFOKHRheF9jb2RlX3ZhbHVlX3ZhbCkpKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhbkVycm9yKG1lLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZWxlbV9mb3JtLmZpbmQoJ3NlbGVjdCcpLmZvY3VzKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWUgPSAkKHRoaXMpO1xyXG4gICAgICAgIG5leHRfbGFiZWxfYWRkX2NsYXNzKG1lLCdzZWxlY3QnKVxyXG4gICAgfSk7XHJcbiAgICBlbGVtX2Zvcm0uZmluZCgnc2VsZWN0JykuYmx1cihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1lID0gJCh0aGlzKTtcclxuICAgICAgICBuZXh0X2xhYmVsX3JlbW92ZV9jbGFzcyhtZSwnc2VsZWN0JylcclxuICAgIH0pO1xyXG4gICAgZWxlbV9mb3JtLmZpbmQoJ3NlbGVjdCcpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1lID0gJCh0aGlzKTtcclxuICAgICAgICBuZXh0X2xhYmVsX3JlbW92ZV9jbGFzcyhtZSwnc2VsZWN0JylcclxuICAgICAgICBpZiAobWUuYXR0cignbmFtZScpID09ICdhZGRyZXNzW2NvdW50cnldJykge1xyXG4gICAgICAgICAgICB2YXIgY2lkID0gJCh0aGlzKS52YWwoKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCEoY2lkID4gMCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/pgInmi6lCcmF6aWzvvIjlt7Topb/vvIxjb3VudHJ5X2lk5Li6Mzk2Mu+8ieaXtu+8jOWHuueOsENQRiBvciBDTlBKIGNvZGVcclxuICAgICAgICAgICAgaWYgKHNwZWNpYWxDb3VudHJ5SWRzLmluZGV4T2YoTnVtYmVyKGNpZCkpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpZihjaWQgPT0gc3BlY2lhbENvdW50cnlJZHNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3RheENvZGUnXS5maW5kKCcudGF4LWxhYmxlJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1fanNvblsndGF4Q29kZSddLmZpbmQoJ3AnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhDb2RlJ10uZmluZCgnc2VsZWN0JykudmFsKDEpLmNoYW5nZSgpLmZpbmQoJ29wdGlvbicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3RheENvZGUnXS5maW5kKCcudGF4X2NvZGVfb3BfY3BmX2NucGonKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY2lkID09IHNwZWNpYWxDb3VudHJ5SWRzWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhDb2RlJ10uZmluZCgnLnRheC1sYWJsZScpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3RheENvZGUnXS5maW5kKCdwJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1fanNvblsndGF4Q29kZSddLmZpbmQoJ3NlbGVjdCcpLnZhbCgzKS5jaGFuZ2UoKS5maW5kKCdvcHRpb24nKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhDb2RlJ10uZmluZCgnLnRheF9jb2RlX29wX25pZF9jaWQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNpZCA9PSBzcGVjaWFsQ291bnRyeUlkc1syXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1fanNvblsndGF4Q29kZSddLmZpbmQoJy50YXgtbGFibGUnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhDb2RlJ10uZmluZCgncCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3RheENvZGUnXS5maW5kKCdzZWxlY3QnKS52YWwoNykuY2hhbmdlKCkuZmluZCgnb3B0aW9uJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1fanNvblsndGF4Q29kZSddLmZpbmQoJy50YXhfY29kZV9vcF9ydXQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3RheENvZGUnXS5zaG93KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3RheENvZGUnXS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChob3VzZU5vQ291bnRyeUlkcy5pbmRleE9mKE51bWJlcihjaWQpKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybV9qc29uWydob3VzZV9ub19jb250YWluZXInXS5zaG93KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ2hvdXNlX25vX2NvbnRhaW5lciddLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0UHJvdmluY2UoY2lkKTtcclxuICAgICAgICAgICAgc2V0Q2l0eSgtMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKG1lLmF0dHIoJ25hbWUnKSA9PSAnYWRkcmVzc1t0YXhfY29kZV90eXBlXScpIHtcclxuICAgICAgICAgICAgaWYgKG1lLnZhbCgpID09IHNwZWNpYWxDb2Rlc1swXSkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgLy9DUEYgb3IgQ05QSiBjb2Rl77yM5Lik56eNY29kZeeahOacieaViOmVv+W6puWIhuWIq+aYrzE05ZKMMThcclxuICAgICAgICAgICAgICAgIGZvcm1fanNvblsndGF4X2NvZGVfdmFsdWUnXS5hdHRyKCdtYXhsZW5ndGgnLCAxNCkudmFsKCcnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZS52YWwoKSA9PSBzcGVjaWFsQ29kZXNbMV0pIHtcclxuICAgICAgICAgICAgICAgIGZvcm1fanNvblsndGF4X2NvZGVfdmFsdWUnXS5hdHRyKCdtYXhsZW5ndGgnLCAxOCkudmFsKCcnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZS52YWwoKSA9PSBzcGVjaWFsQ29kZXNbMl0gfHwgbWUudmFsKCkgPT0gc3BlY2lhbENvZGVzWzNdKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3RheF9jb2RlX3ZhbHVlJ10uYXR0cignbWF4bGVuZ3RoJywgMTApLnZhbCgnJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWUudmFsKCkgPT0gc3BlY2lhbENvZGVzWzRdKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtX2pzb25bJ3RheF9jb2RlX3ZhbHVlJ10uYXR0cignbWF4bGVuZ3RoJywgMTIpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYobWUuYXR0cignbmFtZScpID09ICdhZGRyZXNzW3Byb3ZpbmNlXScpIHtcclxuICAgICAgICAgICAgLy9kZWZhdWx0IHZhbHVlOi0xXHJcbiAgICAgICAgICAgIHNldENpdHkoLTEpOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBmb3JtX2pzb25bJ2NvdW50cnknXS52YWwocGFnZURhdGEuZGVmYXVsdF9jb3VudHJ5X2lkKS5jaGFuZ2UoKTtcclxuXHJcbiAgICBmb3JtX2pzb25bJ2VtYWlsJ10uYmx1cihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGNoZWNrT25lSXRlbShmb3JtX2pzb25bJ2VtYWlsJ10sIGZhbHNlKSkge1xyXG4gICAgICAgICAgICBjaGVja0VtYWlsUmVnaXN0ZXJlZCgkLnRyaW0oZm9ybV9qc29uWydlbWFpbCddLnZhbCgpKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnI2VtYWlsUmVnaXN0ZXJUaXAnKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9ybV9qc29uWydlbWFpbCddLmZvY3VzKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcjZW1haWxSZWdpc3RlclRpcCcpLmhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxufTtcclxudmFyIG5leHRfbGFiZWxfYWRkX2NsYXNzID0gZnVuY3Rpb24gKG1lLHR5cGUpIHtcclxuICAgIGlmKCFtZS5wYXJlbnQoKS5maW5kKCcuYWRkcmVzcy1sYWJlbCBsYWJlbCcpLmhhc0NsYXNzKCd0b3Atc2hvdycpKXtcclxuICAgICAgICBtZS5wYXJlbnQoKS5maW5kKCcuYWRkcmVzcy1sYWJlbCBsYWJlbCcpLmFkZENsYXNzKCd0b3Atc2hvdycpXHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgbmV4dF9sYWJlbF9yZW1vdmVfY2xhc3MgPSBmdW5jdGlvbiAobWUsdHlwZSkge1xyXG4gICAgaWYodHlwZSA9PSAnc2VsZWN0JyAmJiBtZS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS52YWwoKSA9PSB1bmRlZmluZWQgJiYgbWUucGFyZW50KCkuZmluZCgnLmFkZHJlc3MtbGFiZWwgbGFiZWwnKS5oYXNDbGFzcygndG9wLXNob3cnKSl7XHJcbiAgICAgICAgbWUucGFyZW50KCkuZmluZCgnLmFkZHJlc3MtbGFiZWwgbGFiZWwnKS5yZW1vdmVDbGFzcygndG9wLXNob3cnKVxyXG4gICAgfWVsc2UgaWYodHlwZSA9PSAnaW5wdXQnICYmIG1lLnZhbCgpID09ICcnICYmIG1lLnBhcmVudCgpLmZpbmQoJy5hZGRyZXNzLWxhYmVsIGxhYmVsJykuaGFzQ2xhc3MoJ3RvcC1zaG93JykpXHJcbiAgICB7XHJcbiAgICAgICAgbWUucGFyZW50KCkuZmluZCgnLmFkZHJlc3MtbGFiZWwgbGFiZWwnKS5yZW1vdmVDbGFzcygndG9wLXNob3cnKVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGZvcm1fZmllbGRfdG9wX3Nob3cgPSBmdW5jdGlvbiAoZWxlbV9mb3JtKSB7XHJcbiAgICB2YXIgZm9ybV9qc29uID0gZ2V0X2Zvcm1fanNvbihlbGVtX2Zvcm0pO1xyXG4gICAgdmFyIGZvcm1fdG9wX3Nob3cgPSBbJ2ZpcnN0X25hbWUnLCdsYXN0X25hbWUnLCdhZGRyZXNzXzEnLCdhZGRyZXNzXzInLCdjaXR5X3RleHQnLCd6aXAnLCdwaG9uZScsJ2VtYWlsJywncHJvdmluY2VfdGV4dCcsJ2hvdXNlX25vJ107XHJcblxyXG4gICAgZm9yKHZhciBpIGluIGZvcm1fdG9wX3Nob3cpe1xyXG4gICAgICAgIHZhciBmaWVsZF92YWwgPSBmb3JtX3RvcF9zaG93W2ldICsgJ192YWwnXHJcbiAgICAgICAgaWYoZm9ybV9qc29uW2ZpZWxkX3ZhbF0gIT0gJycpe1xyXG4gICAgICAgICAgICBuZXh0X2xhYmVsX2FkZF9jbGFzcyhmb3JtX2pzb25bZm9ybV90b3Bfc2hvd1tpXV0sJ2lucHV0Jyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5leHRfbGFiZWxfcmVtb3ZlX2NsYXNzKGZvcm1fanNvbltmb3JtX3RvcF9zaG93W2ldXSwnaW5wdXQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZXh0X2xhYmVsX2FkZF9jbGFzcyhmb3JtX2pzb25bJ2NvdW50cnknXSwnc2VsZWN0Jyk7XHJcbiAgICBuZXh0X2xhYmVsX2FkZF9jbGFzcyhmb3JtX2pzb25bJ3Byb3ZpbmNlJ10sJ3NlbGVjdCcpO1xyXG4gICAgbmV4dF9sYWJlbF9hZGRfY2xhc3MoZm9ybV9qc29uWydjaXR5J10sJ3NlbGVjdCcpO1xyXG59XHJcblxyXG4vL2luaXQgZm9ybVxyXG52YXIgaW5pdF9hZGRyX2Zvcm0gPSBmdW5jdGlvbiAoZWxlbV9mb3JtLCBzZXR0aW5nKSB7XHJcbiAgICB2YXIgZm9ybV9qc29uID0gZ2V0X2Zvcm1fanNvbihlbGVtX2Zvcm0pO1xyXG4gICAgaWYgKHNldHRpbmcpIHtcclxuXHJcbiAgICAgICAgaWYoc2V0dGluZy5mb3JtX2RhdGFfc291cmNlKSB7XHJcbiAgICAgICAgICAgIGZvcm1fZGF0YV9zb3VyY2UgPSBzZXR0aW5nLmZvcm1fZGF0YV9zb3VyY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcm1fanNvblsnYWRkcmVzc19pZCddLnZhbChzZXR0aW5nLmFkZHJlc3NfaWQpO1xyXG4gICAgICAgIGZvcm1fanNvblsnZ2VuZGVyJ10udmFsKHNldHRpbmcuZ2VuZGVyKTtcclxuICAgICAgICBmb3JtX2pzb25bJ2ZpcnN0X25hbWUnXS52YWwoc2V0dGluZy5maXJzdF9uYW1lKTtcclxuICAgICAgICBmb3JtX2pzb25bJ2xhc3RfbmFtZSddLnZhbChzZXR0aW5nLmxhc3RfbmFtZSk7XHJcbiAgICAgICAgZm9ybV9qc29uWydhZGRyZXNzXzEnXS52YWwoc2V0dGluZy5hZGRyZXNzKTtcclxuICAgICAgICBmb3JtX2pzb25bJ2FkZHJlc3NfMiddLnZhbChzZXR0aW5nLnNpZ25fYnVpbGRpbmcpO1xyXG5cclxuICAgICAgICBmb3JtX2pzb25bJ2NvdW50cnknXS52YWwoc2V0dGluZy5jb3VudHJ5KS5jaGFuZ2UoKTtcclxuICAgICAgICBmb3JtX2pzb25bJ3Byb3ZpbmNlJ10udmFsKHNldHRpbmcucHJvdmluY2UpLmNoYW5nZSgpO1xyXG4gICAgICAgIGZvcm1fanNvblsncHJvdmluY2VfdGV4dCddLnZhbChzZXR0aW5nLnByb3ZpbmNlX3RleHQpO1xyXG5cclxuICAgICAgICBmb3JtX2pzb25bJ2NpdHknXS52YWwoc2V0dGluZy5jaXR5KTtcclxuICAgICAgICBmb3JtX2pzb25bJ2NpdHlfdGV4dCddLnZhbChzZXR0aW5nLmNpdHlfdGV4dCk7XHJcblxyXG4gICAgICAgIGZvcm1fanNvblsnZW1haWwnXS52YWwoc2V0dGluZy5lbWFpbCk7XHJcbiAgICAgICAgZm9ybV9qc29uWydob3VzZV9ubyddLnZhbChzZXR0aW5nLmhvdXNlX25vKTtcclxuXHJcbiAgICAgICAgdmFyIHRheF9jb2RlX3R5cGUgPSBzcGVjaWFsQ29kZXMuaW5kZXhPZihOdW1iZXIoc2V0dGluZy50YXhfY29kZV90eXBlKSlcclxuICAgICAgICAgICAgLG1heF9sZW5ndGg7XHJcbiAgICAgICAgaWYodGF4X2NvZGVfdHlwZSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgZm9ybV9qc29uWyd0YXhfY29kZV90eXBlJ10udmFsKHNldHRpbmcudGF4X2NvZGVfdHlwZSkuY2hhbmdlKCk7XHJcbiAgICAgICAgICAgIHN3aXRjaChOdW1iZXIoc2V0dGluZy50YXhfY29kZV90eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIG1heF9sZW5ndGggPSAxNDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBtYXhfbGVuZ3RoID0gMTg7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4X2xlbmd0aCA9IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcm1fanNvblsndGF4X2NvZGVfdmFsdWUnXS5hdHRyKCdtYXhsZW5ndGgnLCBtYXhfbGVuZ3RoKS52YWwoc2V0dGluZy50YXhfY29kZV92YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtX2pzb25bJ3ppcCddLnZhbChzZXR0aW5nLnppcGNvZGUpO1xyXG4gICAgICAgIGZvcm1fanNvblsncGhvbmUnXS52YWwoc2V0dGluZy50ZWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtX2Zvcm0uZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0sIHNlbGVjdCcpLnZhbCgnJyk7XHJcbiAgICAgICAgZm9ybV9qc29uWydhZGRyZXNzX2lkJ10udmFsKCcwJyk7XHJcbiAgICAgICAgZm9ybV9qc29uWydjb3VudHJ5J10udmFsKHBhZ2VEYXRhLmRlZmF1bHRfY291bnRyeV9pZCkuY2hhbmdlKCk7XHJcbiAgICAgICAgZm9ybV9qc29uWyd0YXhfY29kZV90eXBlJ10udmFsKCcxJykuY2hhbmdlKCk7XHJcbiAgICB9XHJcbiAgICBmb3JtX2ZpZWxkX3RvcF9zaG93KGVsZW1fZm9ybSlcclxufTtcclxuXHJcbnZhciBjaGVja0VtYWlsUmVnaXN0ZXJlZCA9IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICAndHlwZSc6ICdQT1NUJyxcclxuICAgICAgICAnYXN5bmMnOiBmYWxzZSxcclxuICAgICAgICAndXJsJzogd2ViRGF0YS5XRUJfUk9PVCArICdhamF4LnBocCcsXHJcbiAgICAgICAgJ2RhdGEnOiAnYWN0PWNoZWNrRW1haWxSZWdpc3RlcmVkJmVtYWlsPScgKyBlbWFpbCxcclxuICAgICAgICAnY2FjaGUnOiB0cnVlLFxyXG4gICAgICAgICdkYXRhVHlwZSc6ICdqc29uJyxcclxuICAgICAgICAnc3VjY2Vzcyc6IGZ1bmN0aW9uKHIpIHtcclxuICAgICAgICAgICAgaWYgKHIuZXJyb3IgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgJCgnI2VtYWlsUmVnaXN0ZXJUaXAnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjZW1haWxSZWdpc3RlclRpcCcpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFwiZ2V0X2Zvcm1fanNvblwiOiBnZXRfZm9ybV9qc29uLFxyXG4gICAgXCJjaGVja19hZGRyX2Zvcm1cIjogY2hlY2tfYWRkcl9mb3JtLFxyXG4gICAgXCJoYW5kbGVfYWRkcl9mb3JtXCI6IGhhbmRsZV9hZGRyX2Zvcm0sXHJcbiAgICBcImluaXRfYWRkcl9mb3JtXCI6IGluaXRfYWRkcl9mb3JtLFxyXG4gICAgXCJmb3JtX2ZpZWxkX3RvcF9zaG93XCI6IGZvcm1fZmllbGRfdG9wX3Nob3csXHJcbiAgICBcImNoZWNrT25lSXRlbVwiIDogY2hlY2tPbmVJdGVtLFxyXG4gICAgXCJjbGVhbkVycm9yXCIgOiBjbGVhbkVycm9yXHJcbn07XHJcbiIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbi8vZGVmaW5lKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHtcclxuXHR2YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxuXHRcclxuXHQkLmZuLmZvcm1DaGVjayA9IGZ1bmN0aW9uIChpdGVtcywgcGFyYW1zKSB7XHJcblx0XHRpZiAoIXBhcmFtcylcclxuXHRcdFx0cGFyYW1zID0ge307XHJcblx0XHRwYXJhbXMucnVsZXMgPSAkLmV4dGVuZCh7XHJcblx0XHRcdFx0J251bGwnIDogZnVuY3Rpb24gKG9iaiwgY2hlY2tzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJC50cmltKCQob2JqKS52YWwoKSkubGVuZ3RoID4gMFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J21heGxlbmd0aCcgOiBmdW5jdGlvbiAob2JqLCBjaGVja3MpIHtcclxuXHRcdFx0XHRcdHJldHVybiAkLnRyaW0oJChvYmopLnZhbCgpKS5sZW5ndGggPD0gY2hlY2tzLm1heGxlbmd0aFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J21pbmxlbmd0aCcgOiBmdW5jdGlvbiAob2JqLCBjaGVja3MpIHtcclxuXHRcdFx0XHRcdHJldHVybiAkLnRyaW0oJChvYmopLnZhbCgpKS5sZW5ndGggPj0gY2hlY2tzLm1pbmxlbmd0aFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J2RpZ2l0TWlubGVuZ3RoJyA6IGZ1bmN0aW9uIChvYmosIGNoZWNrcykge1xyXG5cdFx0XHRcdFx0cmV0dXJuICQudHJpbSgkKG9iaikudmFsKCkucmVwbGFjZSgvW14wLTldL2csICcnKSkubGVuZ3RoID49IGNoZWNrcy5taW5sZW5ndGhcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdlbWFpbCcgOiBmdW5jdGlvbiAob2JqLCBjaGVja3MpIHtcclxuXHRcdFx0XHRcdHJldHVybiAvKFxcLHxeKShbXFx3Ky5fXStAXFx3K1xcLihcXHcrXFwuKXswLDN9XFx3ezIsNH0pLy50ZXN0KCQob2JqKS52YWwoKS5yZXBsYWNlKC8tfFxcLy9nLCAnJykpXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnY2hlY2tlZCcgOiBmdW5jdGlvbiAob2JqLCBjaGVja3MpIHtcclxuXHRcdFx0XHRcdHJldHVybiBvYmouY2hlY2tlZFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J3Bob25lJyA6IGZ1bmN0aW9uIChvYmosIGNoZWNrcykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIC9eW1xcZC1cXHNdezEsMjB9JC8udGVzdCgkKG9iaikudmFsKCkpICYmICQudHJpbSgkKG9iaikudmFsKCkpLnJlcGxhY2UoL1tcXHNdKy9nLCAnICcpLmxlbmd0aCA8PSBjaGVja3MubWF4bGVuZ3RoXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnbnVtYmVyJyA6IGZ1bmN0aW9uIChvYmosIGNoZWNrcykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIC9eWzAtOV0rJC8udGVzdCgkLnRyaW0oJChvYmopLnZhbCgpKSlcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdtaW4nIDogZnVuY3Rpb24gKG9iaiwgY2hlY2tzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQoJChvYmopLnZhbCgpKSA+PSBjaGVja3MubWluXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcInJlZ2V4cFwiIDogZnVuY3Rpb24gKG9iaiwgY2hlY2tzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gY2hlY2tzLnBhdHRlcm4udGVzdCgkLnRyaW0oJChvYmopLnZhbCgpKSlcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdzZWxlY3QnIDogZnVuY3Rpb24gKG9iaiwgY2hlY2tzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJChvYmopLnZhbCgpICE9IGNoZWNrcy52YWx1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J3VzZXInIDogZnVuY3Rpb24gKG9iaiwgY2hlY2tzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gL14oPyFcXGQpW2EtekEtWjAtOVxcdTRlMDAtXFx1OWZhNV9dezUsMTh9JC8udGVzdCgkLnRyaW0oJChvYmopLnZhbCgpKSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIHBhcmFtcy5ydWxlcyk7XHJcblx0XHR2YXIgcmVzdWx0ID0gdHJ1ZSxcclxuXHRcdGZvY3VzZWQgPSBmYWxzZTtcclxuXHRcdGZ1bmN0aW9uIGNoZWNrSXRlbShpdGVtLCBjaGVja3MpIHtcclxuXHRcdFx0Zm9yIChqIGluIGNoZWNrcykge1xyXG5cdFx0XHRcdGlmIChwYXJhbXMucnVsZXNbY2hlY2tzW2pdLnR5cGVdKVxyXG5cdFx0XHRcdFx0aWYgKHBhcmFtcy5ydWxlc1tjaGVja3Nbal0udHlwZV0oaXRlbSwgY2hlY2tzW2pdKSlcclxuXHRcdFx0XHRcdFx0Y29udGludWU7XHJcbiAgICAgICAgICAgICAgICAvKlxyXG5cdFx0XHRcdGlmICghZm9jdXNlZCAmJiAhY2hlY2tzW2pdLm5vRm9jdXMpIHtcclxuXHRcdFx0XHRcdGlmICgkKGl0ZW0pLm9mZnNldCgpLnRvcCA8ICQod2luZG93KS5zY3JvbGxUb3AoKSkge1xyXG5cdFx0XHRcdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0c2Nyb2xsVG9wIDogJChpdGVtKS5vZmZzZXQoKS50b3BcclxuXHRcdFx0XHRcdFx0fSwgJ2Zhc3QnKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Zm9jdXNlZCA9IHRydWVcclxuXHRcdFx0XHR9O1xyXG4gICAgICAgICAgICAgICAgICovXHJcblx0XHRcdFx0aWYgKGNoZWNrc1tqXS5zaG93RXJyb3IpIHtcclxuXHRcdFx0XHRcdGNoZWNrc1tqXS5zaG93RXJyb3IoKTtcclxuXHRcdFx0XHRcdHJlc3VsdCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHBhcmFtcy5zaG93RXJyb3IpIHtcclxuXHRcdFx0XHRcdHBhcmFtcy5zaG93RXJyb3IoJChpdGVtKSwgY2hlY2tzW2pdLmVyck1zZywgY2hlY2tzW2pdLmVyckV2ZW50KTtcclxuXHRcdFx0XHRcdHJlc3VsdCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHBhcmFtcy5lcnJpbmZvRmluZGVyKSB7XHJcblx0XHRcdFx0XHRwYXJhbXMuZXJyaW5mb0ZpbmRlcigkKGl0ZW0pKS50ZXh0KGNoZWNrc1tqXS5lcnJNc2cpO1xyXG5cdFx0XHRcdFx0JChpdGVtKS5mb2N1cyhmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdHBhcmFtcy5lcnJpbmZvRmluZGVyKCQoaXRlbSkpLnRleHQoJycpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRpZiAoJChpdGVtKS5hdHRyKCd0eXBlJykgIT0gbnVsbCAmJiAkKGl0ZW0pLmF0dHIoJ3R5cGUnKS50b0xvd2VyQ2FzZSgpID09ICdjaGVja2JveCcpIHtcclxuXHRcdFx0XHRcdFx0JChpdGVtKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdFx0JChpdGVtKS5mb2N1cygpXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hlY2tzW2pdLmVyck1zZykge1xyXG5cdFx0XHRcdFx0YWxlcnQoY2hlY2tzW2pdLmVyck1zZyk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHRcdHJldHVybiB0cnVlXHJcblx0XHR9O1xyXG5cdFx0Zm9yIChpID0gMDsgaSA8IHRoaXNbMF0ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKCQodGhpc1swXVtpXSkuYXR0cignbmFtZScpICYmICQodGhpc1swXVtpXSkuYXR0cignbmFtZScpLmxlbmd0aCA9PSAwIHx8ICQodGhpc1swXVtpXSkucHJvcCgnZGlzYWJsZWQnKSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0dmFyIGNoZWNrcyA9IGl0ZW1zWyQodGhpc1swXVtpXSkuYXR0cignbmFtZScpXTtcclxuXHRcdFx0aWYgKCFjaGVja3MpXHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdGlmICghY2hlY2tJdGVtKHRoaXNbMF1baV0sIGNoZWNrcykpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIHJlc3VsdFxyXG5cdH07XHJcblx0XHJcbi8vfSk7XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltZGhaV0V2YW5NdmJXOWtMMlp2Y20xRGFHVmpheTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVNJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeTlrWldacGJtVW9ablZ1WTNScGIyNGdLSEpsY1hWcGNtVXNJR1Y0Y0c5eWRITXNJRzF2WkhWc1pTa2dlMXh5WEc1Y2RIWmhjaUFrSUQwZ0tIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnUHlCM2FXNWtiM2RiSnlRblhTQTZJSFI1Y0dWdlppQm5iRzlpWVd3Z0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5Qm5iRzlpWVd4Ykp5UW5YU0E2SUc1MWJHd3BPMXh5WEc1Y2RGeHlYRzVjZENRdVptNHVabTl5YlVOb1pXTnJJRDBnWm5WdVkzUnBiMjRnS0dsMFpXMXpMQ0J3WVhKaGJYTXBJSHRjY2x4dVhIUmNkR2xtSUNnaGNHRnlZVzF6S1Z4eVhHNWNkRngwWEhSd1lYSmhiWE1nUFNCN2ZUdGNjbHh1WEhSY2RIQmhjbUZ0Y3k1eWRXeGxjeUE5SUNRdVpYaDBaVzVrS0h0Y2NseHVYSFJjZEZ4MFhIUW5iblZzYkNjZ09pQm1kVzVqZEdsdmJpQW9iMkpxTENCamFHVmphM01wSUh0Y2NseHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQWtMblJ5YVcwb0pDaHZZbW9wTG5aaGJDZ3BLUzVzWlc1bmRHZ2dQaUF3WEhKY2JseDBYSFJjZEZ4MGZTeGNjbHh1WEhSY2RGeDBYSFFuYldGNGJHVnVaM1JvSnlBNklHWjFibU4wYVc5dUlDaHZZbW9zSUdOb1pXTnJjeWtnZTF4eVhHNWNkRngwWEhSY2RGeDBjbVYwZFhKdUlDUXVkSEpwYlNna0tHOWlhaWt1ZG1Gc0tDa3BMbXhsYm1kMGFDQThQU0JqYUdWamEzTXViV0Y0YkdWdVozUm9YSEpjYmx4MFhIUmNkRngwZlN4Y2NseHVYSFJjZEZ4MFhIUW5iV2x1YkdWdVozUm9KeUE2SUdaMWJtTjBhVzl1SUNodlltb3NJR05vWldOcmN5a2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUNRdWRISnBiU2drS0c5aWFpa3VkbUZzS0NrcExteGxibWQwYUNBK1BTQmphR1ZqYTNNdWJXbHViR1Z1WjNSb1hISmNibHgwWEhSY2RGeDBmU3hjY2x4dVhIUmNkRngwWEhRblpHbG5hWFJOYVc1c1pXNW5kR2duSURvZ1puVnVZM1JwYjI0Z0tHOWlhaXdnWTJobFkydHpLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUnlaWFIxY200Z0pDNTBjbWx0S0NRb2IySnFLUzUyWVd3b0tTNXlaWEJzWVdObEtDOWJYakF0T1Ywdlp5d2dKeWNwS1M1c1pXNW5kR2dnUGowZ1kyaGxZMnR6TG0xcGJteGxibWQwYUZ4eVhHNWNkRngwWEhSY2RIMHNYSEpjYmx4MFhIUmNkRngwSjJWdFlXbHNKeUE2SUdaMWJtTjBhVzl1SUNodlltb3NJR05vWldOcmN5a2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUM4b1hGd3NmRjRwS0Z0Y1hIY3JMbDlkSzBCY1hIY3JYRnd1S0Z4Y2R5dGNYQzRwZXpBc00zMWNYSGQ3TWl3MGZTa3ZMblJsYzNRb0pDaHZZbW9wTG5aaGJDZ3BMbkpsY0d4aFkyVW9MeTE4WEZ3dkwyY3NJQ2NuS1NsY2NseHVYSFJjZEZ4MFhIUjlMRnh5WEc1Y2RGeDBYSFJjZENkamFHVmphMlZrSnlBNklHWjFibU4wYVc5dUlDaHZZbW9zSUdOb1pXTnJjeWtnZTF4eVhHNWNkRngwWEhSY2RGeDBjbVYwZFhKdUlHOWlhaTVqYUdWamEyVmtYSEpjYmx4MFhIUmNkRngwZlN4Y2NseHVYSFJjZEZ4MFhIUW5jR2h2Ym1VbklEb2dablZ1WTNScGIyNGdLRzlpYWl3Z1kyaGxZMnR6S1NCN1hISmNibHgwWEhSY2RGeDBYSFJ5WlhSMWNtNGdMMTViWEZ4a0xWeGNjMTE3TVN3eU1IMGtMeTUwWlhOMEtDUW9iMkpxS1M1MllXd29LU2tnSmlZZ0pDNTBjbWx0S0NRb2IySnFLUzUyWVd3b0tTa3VjbVZ3YkdGalpTZ3ZXMXhjYzEwckwyY3NJQ2NnSnlrdWJHVnVaM1JvSUR3OUlHTm9aV05yY3k1dFlYaHNaVzVuZEdoY2NseHVYSFJjZEZ4MFhIUjlMRnh5WEc1Y2RGeDBYSFJjZENkdWRXMWlaWEluSURvZ1puVnVZM1JwYjI0Z0tHOWlhaXdnWTJobFkydHpLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUnlaWFIxY200Z0wxNWJNQzA1WFNza0x5NTBaWE4wS0NRdWRISnBiU2drS0c5aWFpa3VkbUZzS0NrcEtWeHlYRzVjZEZ4MFhIUmNkSDBzWEhKY2JseDBYSFJjZEZ4MEoyMXBiaWNnT2lCbWRXNWpkR2x2YmlBb2IySnFMQ0JqYUdWamEzTXBJSHRjY2x4dVhIUmNkRngwWEhSY2RISmxkSFZ5YmlCd1lYSnpaVWx1ZENna0tHOWlhaWt1ZG1Gc0tDa3BJRDQ5SUdOb1pXTnJjeTV0YVc1Y2NseHVYSFJjZEZ4MFhIUjlMRnh5WEc1Y2RGeDBYSFJjZEZ3aWNtVm5aWGh3WENJZ09pQm1kVzVqZEdsdmJpQW9iMkpxTENCamFHVmphM01wSUh0Y2NseHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQmphR1ZqYTNNdWNHRjBkR1Z5Ymk1MFpYTjBLQ1F1ZEhKcGJTZ2tLRzlpYWlrdWRtRnNLQ2twS1Z4eVhHNWNkRngwWEhSY2RIMHNYSEpjYmx4MFhIUmNkRngwSjNObGJHVmpkQ2NnT2lCbWRXNWpkR2x2YmlBb2IySnFMQ0JqYUdWamEzTXBJSHRjY2x4dVhIUmNkRngwWEhSY2RISmxkSFZ5YmlBa0tHOWlhaWt1ZG1Gc0tDa2dJVDBnWTJobFkydHpMblpoYkhWbFhISmNibHgwWEhSY2RGeDBmU3hjY2x4dVhIUmNkRngwWEhRbmRYTmxjaWNnT2lCbWRXNWpkR2x2YmlBb2IySnFMQ0JqYUdWamEzTXBJSHRjY2x4dVhIUmNkRngwWEhSY2RISmxkSFZ5YmlBdlhpZy9JVnhjWkNsYllTMTZRUzFhTUMwNVhGeDFOR1V3TUMxY1hIVTVabUUxWDExN05Td3hPSDBrTHk1MFpYTjBLQ1F1ZEhKcGJTZ2tLRzlpYWlrdWRtRnNLQ2twS1Z4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBmU3dnY0dGeVlXMXpMbkoxYkdWektUdGNjbHh1WEhSY2RIWmhjaUJ5WlhOMWJIUWdQU0IwY25WbExGeHlYRzVjZEZ4MFptOWpkWE5sWkNBOUlHWmhiSE5sTzF4eVhHNWNkRngwWm5WdVkzUnBiMjRnWTJobFkydEpkR1Z0S0dsMFpXMHNJR05vWldOcmN5a2dlMXh5WEc1Y2RGeDBYSFJtYjNJZ0tHb2dhVzRnWTJobFkydHpLU0I3WEhKY2JseDBYSFJjZEZ4MGFXWWdLSEJoY21GdGN5NXlkV3hsYzF0amFHVmphM05iYWwwdWRIbHdaVjBwWEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvY0dGeVlXMXpMbkoxYkdWelcyTm9aV05yYzF0cVhTNTBlWEJsWFNocGRHVnRMQ0JqYUdWamEzTmJhbDBwS1Z4eVhHNWNkRngwWEhSY2RGeDBYSFJqYjI1MGFXNTFaVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4cVhISmNibHgwWEhSY2RGeDBhV1lnS0NGbWIyTjFjMlZrSUNZbUlDRmphR1ZqYTNOYmFsMHVibTlHYjJOMWN5a2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLQ1FvYVhSbGJTa3ViMlptYzJWMEtDa3VkRzl3SUR3Z0pDaDNhVzVrYjNjcExuTmpjbTlzYkZSdmNDZ3BLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkQ1FvSjJoMGJXd3NJR0p2WkhrbktTNWhibWx0WVhSbEtIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUnpZM0p2Ykd4VWIzQWdPaUFrS0dsMFpXMHBMbTltWm5ObGRDZ3BMblJ2Y0Z4eVhHNWNkRngwWEhSY2RGeDBYSFI5TENBblptRnpkQ2NwWEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwWEhSbWIyTjFjMlZrSUQwZ2RISjFaVnh5WEc1Y2RGeDBYSFJjZEgwN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLaTljY2x4dVhIUmNkRngwWEhScFppQW9ZMmhsWTJ0elcycGRMbk5vYjNkRmNuSnZjaWtnZTF4eVhHNWNkRngwWEhSY2RGeDBZMmhsWTJ0elcycGRMbk5vYjNkRmNuSnZjaWdwTzF4eVhHNWNkRngwWEhSY2RGeDBjbVZ6ZFd4MElEMGdabUZzYzJVN1hISmNibHgwWEhSY2RGeDBYSFJpY21WaGExeHlYRzVjZEZ4MFhIUmNkSDBnWld4elpTQnBaaUFvY0dGeVlXMXpMbk5vYjNkRmNuSnZjaWtnZTF4eVhHNWNkRngwWEhSY2RGeDBjR0Z5WVcxekxuTm9iM2RGY25KdmNpZ2tLR2wwWlcwcExDQmphR1ZqYTNOYmFsMHVaWEp5VFhObkxDQmphR1ZqYTNOYmFsMHVaWEp5UlhabGJuUXBPMXh5WEc1Y2RGeDBYSFJjZEZ4MGNtVnpkV3gwSUQwZ1ptRnNjMlU3WEhKY2JseDBYSFJjZEZ4MFhIUmljbVZoYTF4eVhHNWNkRngwWEhSY2RIMGdaV3h6WlNCcFppQW9jR0Z5WVcxekxtVnljbWx1Wm05R2FXNWtaWElwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkSEJoY21GdGN5NWxjbkpwYm1adlJtbHVaR1Z5S0NRb2FYUmxiU2twTG5SbGVIUW9ZMmhsWTJ0elcycGRMbVZ5Y2sxelp5azdYSEpjYmx4MFhIUmNkRngwWEhRa0tHbDBaVzBwTG1adlkzVnpLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwY0dGeVlXMXpMbVZ5Y21sdVptOUdhVzVrWlhJb0pDaHBkR1Z0S1NrdWRHVjRkQ2duSnlrN1hISmNibHgwWEhSY2RGeDBYSFI5S1R0Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNna0tHbDBaVzBwTG1GMGRISW9KM1I1Y0dVbktTQWhQU0J1ZFd4c0lDWW1JQ1FvYVhSbGJTa3VZWFIwY2lnbmRIbHdaU2NwTG5SdlRHOTNaWEpEWVhObEtDa2dQVDBnSjJOb1pXTnJZbTk0SnlrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhRa0tHbDBaVzBwTG1Oc2FXTnJLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhRa0tHbDBaVzBwTG1adlkzVnpLQ2xjY2x4dVhIUmNkRngwWEhSY2RGeDBmU2xjY2x4dVhIUmNkRngwWEhSY2RIMDdYSEpjYmx4MFhIUmNkRngwWEhSeVpYTjFiSFFnUFNCbVlXeHpaVHRjY2x4dVhIUmNkRngwWEhSY2RHSnlaV0ZyWEhKY2JseDBYSFJjZEZ4MGZTQmxiSE5sSUdsbUlDaGphR1ZqYTNOYmFsMHVaWEp5VFhObktTQjdYSEpjYmx4MFhIUmNkRngwWEhSaGJHVnlkQ2hqYUdWamEzTmJhbDB1WlhKeVRYTm5LVHRjY2x4dVhIUmNkRngwWEhSY2RISmxkSFZ5YmlCbVlXeHpaVnh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MGZUdGNjbHh1WEhSY2RGeDBjbVYwZFhKdUlIUnlkV1ZjY2x4dVhIUmNkSDA3WEhKY2JseDBYSFJtYjNJZ0tHa2dQU0F3T3lCcElEd2dkR2hwYzFzd1hTNXNaVzVuZEdnN0lHa3JLeWtnZTF4eVhHNWNkRngwWEhScFppQW9KQ2gwYUdseld6QmRXMmxkS1M1aGRIUnlLQ2R1WVcxbEp5a2dKaVlnSkNoMGFHbHpXekJkVzJsZEtTNWhkSFJ5S0NkdVlXMWxKeWt1YkdWdVozUm9JRDA5SURBZ2ZId2dKQ2gwYUdseld6QmRXMmxkS1M1d2NtOXdLQ2RrYVhOaFlteGxaQ2NwS1Z4eVhHNWNkRngwWEhSY2RHTnZiblJwYm5WbE8xeHlYRzVjZEZ4MFhIUjJZWElnWTJobFkydHpJRDBnYVhSbGJYTmJKQ2gwYUdseld6QmRXMmxkS1M1aGRIUnlLQ2R1WVcxbEp5bGRPMXh5WEc1Y2RGeDBYSFJwWmlBb0lXTm9aV05yY3lsY2NseHVYSFJjZEZ4MFhIUmpiMjUwYVc1MVpUdGNjbHh1WEhSY2RGeDBhV1lnS0NGamFHVmphMGwwWlcwb2RHaHBjMXN3WFZ0cFhTd2dZMmhsWTJ0ektTbGNjbHh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdabUZzYzJWY2NseHVYSFJjZEgwN1hISmNibHgwWEhSeVpYUjFjbTRnY21WemRXeDBYSEpjYmx4MGZUdGNjbHh1WEhSY2NseHVMeTk5S1RzaVhYMD0iLCJmdW5jdGlvbiBKc1RlbXBsYXRlKHRlbXBsYXRlLCBmaWxsZXIpIHtcclxuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuICAgIHRoaXMuZmlsbGVyID0gZmlsbGVyO1xyXG59XHJcblxyXG5Kc1RlbXBsYXRlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihmaWxsZXIpIHtcclxuICAgIHZhciBodG1sID0gdGhpcy50ZW1wbGF0ZSB8fCBcIlwiOyBcclxuICAgIHZhciByZXBsYWNlT2JqID0gZmlsbGVyIHx8IHRoaXMuZmlsbGVyIHx8IHt9O1xyXG4gICAgZm9yICh2YXIgcGF0dGVybiBpbiByZXBsYWNlT2JqKSB7XHJcbiAgICAgICAgdmFyIHJlZ1BhdHRlcm4gPSBuZXcgUmVnRXhwKFwie3tcIiArIHBhdHRlcm4gKyBcIn19XCIsIFwiZ1wiKTtcclxuICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKHJlZ1BhdHRlcm4sIHJlcGxhY2VPYmpbcGF0dGVybl0pO1xyXG4gICAgfVxyXG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSgve3tbXn1dKn19L2csIFwiXCIpO1xyXG4gICAgcmV0dXJuIGh0bWw7XHJcbn1cclxuXHJcbkpzVGVtcGxhdGUucHJvdG90eXBlLnNldFRlbXBsYXRlID0gZnVuY3Rpb24odGVtcGxhdGUpIHtcclxuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxufVxyXG5cclxuSnNUZW1wbGF0ZS5wcm90b3R5cGUuc2V0RmlsbGVyID0gZnVuY3Rpb24oZmlsbGVyKSB7XHJcbiAgICB0aGlzLmZpbGxlciA9IGZpbGxlcjtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBKc1RlbXBsYXRlOyIsIi8vZGVmaW5lKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHtcclxuXHRcclxuICAgIHZhciBsb2FkSlMgPSBmdW5jdGlvbiAoaWQsIHNyYykge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHJldHVybjtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcclxuICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgc2NyaXB0LmlkID0gaWQ7XHJcbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcclxuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbG9hZFNvY2lhbEpTID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgXCJmYWNlYm9va1wiIDogXCIvL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL3Nkay5qcyN4ZmJtbD0xJnZlcnNpb249djIuMyZhcHBJZD1cIiArIHdlYkRhdGEuZmJfYXBwLFxyXG4gICAgICAgICAgICBcInR3aXR0ZXJcIiA6IFwiaHR0cHM6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbS93aWRnZXRzLmpzXCIsXHJcbiAgICAgICAgICAgIFwicGluaXRcIiA6IFwiLy9hc3NldHMucGludGVyZXN0LmNvbS9qcy9waW5pdC5qc1wiLFxyXG4gICAgICAgICAgICBcImdwbHVzb25lXCIgOiBcImh0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL3BsdXNvbmUuanNcIixcclxuICAgICAgICAgICAgXCJsaXZlY2hhdFwiIDogKCdodHRwczonID09IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sID8gJ2h0dHBzOi8vJyA6ICdodHRwOi8vJykgKyAnY2RuLmxpdmVjaGF0aW5jLmNvbS90cmFja2luZy5qcycsXHJcbiAgICAgICAgICAgIFwiZ21haWxcIiA6IFwiaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvcGxhdGZvcm0uanM/b25sb2FkPWdtYWlsTG9hZENhbGxiYWNrXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvcih2YXIga2V5IGluIGNvbmZpZykge1xyXG4gICAgICAgICAgICBpZihrZXkgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIGxvYWRKUyhpZCArICctc2RrJywgY29uZmlnW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgICAgIFwibG9hZEpTXCI6IGxvYWRKUyxcclxuICAgICAgICBcImxvYWRTb2NpYWxKU1wiOiBsb2FkU29jaWFsSlNcclxuICAgIH07XHJcblxyXG4vL30pOyIsIi8vIHJlcXVpcmUoJy4vY29tbW9uJylcclxuXHJcbnJlcXVpcmUoJy4uL2NoZWNrb3V0L2djX2FkZHJlc3MnKS5pbml0KCk7IC8vQmlsbGluZyBBZGRyZXNzXHJcblxyXG5yZXF1aXJlKCcuLi9jaGVja291dC9nY19wYXlfYXJlYScpLmluaXQoKTsgLy9QYXkgQXJlYVxyXG5yZXF1aXJlKCcuLi9jaGVja291dC92YWxpZGF0ZV9jcmVkaXRjYXJkJykuaW5pdCgpOyAvL3ZhbGlkYXRlX2NyZWRpdGNhcmRcclxucmVxdWlyZSgnLi4vY2hlY2tvdXQvbGl2ZWNoYXQnKS5pbml0KCk7IC8vbGl2ZWNoYXQiXX0=

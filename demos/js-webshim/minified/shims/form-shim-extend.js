(!Modernizr.formvalidation||webshims.bugs.bustedValidity)&&webshims.register("form-shim-extend",function(e,t,n,i,a,r){"use strict";t.inputTypes=t.inputTypes||{};var o,s=t.cfg.forms,u=t.bugs,l=function(e){return"number"==typeof e||e&&e==1*e},c=t.inputTypes,p={radio:1,checkbox:1},d=function(e){return(e.getAttribute("type")||e.type||"").toLowerCase()};(function(){if("querySelector"in i){try{u.findRequired=!e('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /></form>')[0].querySelector("select:required")}catch(t){u.findRequired=!1}(u.bustedValidity||u.findRequired)&&function(){var t=e.find,n=e.find.matchesSelector,a=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/gi,r=function(e){return e+"-element"};e.find=function(){var e=Array.prototype.slice,n=function(n){var i=arguments;return i=e.call(i,1,i.length),i.unshift(n.replace(a,r)),t.apply(this,i)};for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);return n}(),(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",i.documentElement))&&(e.find.matchesSelector=function(e,t){return t=t.replace(a,r),n.call(this,e,t)})}()}})(),t.addInputType=function(e,t){c[e]=t};var f={customError:!1,typeMismatch:!1,badInput:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},h=function(t){if("select-one"==t.type&&2>t.size){var n=e("> option:first-child",t);return!!n.prop("selected")}return!1},m=t.modules,v=e([]),g=function(t){t=e(t);var n,a,r=v;return"radio"==t[0].type&&(a=t.prop("form"),n=t[0].name,r=n?a?e(a[n]):e(i.getElementsByName(n)).filter(function(){return!e.prop(this,"form")}):t,r=r.filter('[type="radio"]')),r},y={valueMissing:function(e,t,n){if(!e.prop("required"))return!1;var i=!1;return"type"in n||(n.type=d(e[0])),i="select"==n.nodeName?!t&&(0>e[0].selectedIndex||h(e[0])):p[n.type]?"checkbox"==n.type?!e.is(":checked"):!g(e).filter(":checked")[0]:!t},tooLong:function(){return!1},patternMismatch:function(e,n,i){if(""===n||"select"==i.nodeName)return!1;var a=e.attr("pattern");if(!a)return!1;try{a=RegExp("^(?:"+a+")$")}catch(r){t.error('invalid pattern value: "'+a+'" | '+r),a=!1}return a?!a.test(n):!1}};e.each({typeMismatch:"mismatch",badInput:"bad"},function(e,t){y[e]=function(n,i,a){if(""===i||"select"==a.nodeName)return!1;var r=!1;return"type"in a||(a.type=d(n[0])),c[a.type]&&c[a.type][t]?r=c[a.type][t](i,n):"validity"in n[0]&&"name"in n[0].validity&&(r=n[0].validity[e]||!1),r}}),t.addValidityRule=function(e,t){y[e]=t},e.event.special.invalid={add:function(){e.event.special.invalid.setup.call(this.form||this)},setup:function(){var n=this.form||this;return e.data(n,"invalidEventShim")?(n=null,a):(e(n).data("invalidEventShim",!0).on("submit",e.event.special.invalid.handler),t.moveToFirstEvent(n,"submit"),t.bugs.bustedValidity&&e.nodeName(n,"form")&&function(){var e=n.getAttribute("novalidate");n.setAttribute("novalidate","novalidate"),t.data(n,"bustedNoValidate",null==e?null:e)}(),n=null,a)},teardown:e.noop,handler:function(t){if("submit"==t.type&&!t.testedValidity&&t.originalEvent&&e.nodeName(t.target,"form")&&!e.prop(t.target,"noValidate")){o=!0,t.testedValidity=!0;var n=!e(t.target).checkValidity();return n?(t.stopImmediatePropagation(),o=!1,!1):(o=!1,a)}}};var b=!("submitBubbles"in e.support)||e.support.submitBubbles,w=function(t){b||!t||"object"!=typeof t||t._submit_attached||(e.event.add(t,"submit._submit",function(e){e._submit_bubble=!0}),t._submit_attached=!0)};!b&&e.event.special.submit&&(e.event.special.submit.setup=function(){return e.nodeName(this,"form")?!1:(e.event.add(this,"click._submit keypress._submit",function(t){var n=t.target,i=e.nodeName(n,"input")||e.nodeName(n,"button")?e.prop(n,"form"):a;w(i)}),a)}),e.event.special.submit=e.event.special.submit||{setup:function(){return!1}};var T=e.event.special.submit.setup;e.extend(e.event.special.submit,{setup:function(){return e.nodeName(this,"form")?e(this).on("invalid",e.noop):e("form",this).on("invalid",e.noop),T.apply(this,arguments)}}),e(n).on("invalid",e.noop),t.addInputType("email",{mismatch:function(){var e=s.emailReg||/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;return function(t){if(n.punycode&&punycode.toASCII)try{if(e.test(punycode.toASCII(t)))return!1}catch(i){}return!e.test(t)}}()}),t.addInputType("url",{mismatch:function(){var e=s.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;return function(t){return!e.test(t)}}()}),t.defineNodeNameProperty("input","type",{prop:{get:function(){var e=this,n=(e.getAttribute("type")||"").toLowerCase();return t.inputTypes[n]?n:e.type}}}),t.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:e.noop},validity:{writeable:!1,get:function(){return e.extend({},f)}}},"prop");var N=function(n){var i,a=e.prop(n,"validity");if(!a)return!0;if(e.data(n,"cachedValidity",a),!a.valid){i=e.Event("invalid");var r=e(n).trigger(i);!o||N.unhandledInvalids||i.isDefaultPrevented()||(t.validityAlert.showFor(r),N.unhandledInvalids=!0)}return e.removeData(n,"cachedValidity"),a.valid},x=/^(?:select|textarea|input)/i;if(t.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var n=!0,i=e(e.prop(this,"elements")).filter(function(){if(!x.test(this.nodeName))return!1;var e=t.data(this,"shadowData");return!e||!e.nativeElement||e.nativeElement===this});N.unhandledInvalids=!1;for(var a=0,r=i.length;r>a;a++)N(i[a])||(n=!1);return n}}}),t.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){return N.unhandledInvalids=!1,N(e(this).getNativeElement()[0])}},setCustomValidity:{value:function(n){e.removeData(this,"cachedValidity"),t.data(this,"customvalidationMessage",""+n)}},willValidate:{writeable:!1,get:function(){var t={button:1,reset:1,hidden:1,image:1};return function(){var n=e(this).getNativeElement()[0];return!(n.disabled||n.readOnly||t[n.type])}}()},validity:{writeable:!1,get:function(){var n=e(this).getNativeElement(),i=n[0],a=e.data(i,"cachedValidity");if(a)return a;if(a=e.extend({},f),!e.prop(i,"willValidate")||"submit"==i.type)return a;var r=n.val(),o={nodeName:i.nodeName.toLowerCase()};return a.customError=!!t.data(i,"customvalidationMessage"),a.customError&&(a.valid=!1),e.each(y,function(e,t){t(n,r,o)&&(a[e]=!0,a.valid=!1)}),e(this).getShadowFocusElement().attr("aria-invalid",a.valid?"false":"true"),n=null,i=null,a}}},"prop"),t.defineNodeNamesBooleanProperty(["input","textarea","select"],"required",{set:function(t){e(this).getShadowFocusElement().attr("aria-required",!!t+"")},initAttr:Modernizr.localstorage}),t.reflectProperties(["input"],["pattern"]),!("maxLength"in i.createElement("textarea"))){var E=function(){var t,n=0,i=e([]),a=1e9,r=function(){var e=i.prop("value"),t=e.length;t>n&&t>a&&(t=Math.max(n,a),i.prop("value",e.substr(0,t))),n=t},o=function(){clearTimeout(t),i.unbind(".maxlengthconstraint")};return function(s,u){o(),u>-1&&(a=u,n=e.prop(s,"value").length,i=e(s),i.on({"keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint":function(){setTimeout(r,0)},"keyup.maxlengthconstraint":r,"blur.maxlengthconstraint":o}),t=setInterval(r,200))}}();E.update=function(t,n){e(t).is(":focus")&&(n||(n=e.prop(t,"maxlength")),E(t,n))},e(i).on("focusin",function(t){var n;"TEXTAREA"==t.target.nodeName&&(n=e.prop(t.target,"maxlength"))>-1&&E(t.target,n)}),t.defineNodeNameProperty("textarea","maxlength",{attr:{set:function(e){this.setAttribute("maxlength",""+e),E.update(this)},get:function(){var e=this.getAttribute("maxlength");return null==e?a:e}},prop:{set:function(e){if(l(e)){if(0>e)throw"INDEX_SIZE_ERR";return e=parseInt(e,10),this.setAttribute("maxlength",e),E.update(this,e),a}this.setAttribute("maxlength","0"),E.update(this,0)},get:function(){var e=this.getAttribute("maxlength");return l(e)&&e>=0?parseInt(e,10):-1}}}),t.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(t){e.prop(this,"maxlength",t)},get:function(){return e.prop(this,"maxlength")}}})}var A={submit:1,button:1,image:1},k={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(t){var n="form"+(t.propName||t.name).replace(/^[a-z]/,function(e){return e.toUpperCase()}),a="form"+t.name,r=t.name,o="click.webshimssubmittermutate"+r,s=function(){var i=this;if("form"in i&&A[i.type]){var o=e.prop(i,"form");if(o){var s=e.attr(i,a);if(null!=s&&(!t.limitedTo||s.toLowerCase()===e.prop(i,n))){var u=e.attr(o,r);e.attr(o,r,s),setTimeout(function(){if(null!=u)e.attr(o,r,u);else try{e(o).removeAttr(r)}catch(t){o.removeAttribute(r)}},9)}}}};switch(t.proptype){case"url":var u=i.createElement("form");k[n]={prop:{set:function(t){e.attr(this,a,t)},get:function(){var t=e.attr(this,a);return null==t?"":(u.setAttribute("action",t),u.action)}}};break;case"boolean":k[n]={prop:{set:function(t){t=!!t,t?e.attr(this,"formnovalidate","formnovalidate"):e(this).removeAttr("formnovalidate")},get:function(){return null!=e.attr(this,"formnovalidate")}}};break;case"enum":k[n]={prop:{set:function(t){e.attr(this,a,t)},get:function(){var n=e.attr(this,a);return!n||(n=n.toLowerCase())&&!t.limitedTo[n]?t.defaultProp:n}}};break;default:k[n]={prop:{set:function(t){e.attr(this,a,t)},get:function(){var t=e.attr(this,a);return null!=t?t:""}}}}k[a]||(k[a]={}),k[a].attr={set:function(t){k[a].attr._supset.call(this,t),e(this).unbind(o).on(o,s)},get:function(){return k[a].attr._supget.call(this)}},k[a].initAttr=!0,k[a].removeAttr={value:function(){e(this).unbind(o),k[a].removeAttr._supvalue.call(this)}}}),t.defineNodeNamesProperties(["input","button"],k),e.support.getSetAttribute||null!=e("<form novalidate></form>").attr("novalidate")?t.bugs.bustedValidity&&(t.defineNodeNameProperty("form","novalidate",{attr:{set:function(e){t.data(this,"bustedNoValidate",""+e)},get:function(){var e=t.data(this,"bustedNoValidate");return null==e?a:e}},removeAttr:{value:function(){t.data(this,"bustedNoValidate",null)}}}),e.each(["rangeUnderflow","rangeOverflow","stepMismatch"],function(e,t){y[t]=function(e){return(e[0].validity||{})[t]||!1}})):t.defineNodeNameProperty("form","novalidate",{attr:{set:function(e){this.setAttribute("novalidate",""+e)},get:function(){var e=this.getAttribute("novalidate");return null==e?a:e}}}),t.defineNodeNameProperty("form","noValidate",{prop:{set:function(t){t=!!t,t?e.attr(this,"novalidate","novalidate"):e(this).removeAttr("novalidate")},get:function(){return null!=e.attr(this,"novalidate")}}}),Modernizr.inputtypes.date&&/webkit/i.test(navigator.userAgent)&&function(){var t={updateInput:1,input:1},n={date:1,time:1,month:1,week:1,"datetime-local":1},a={focusout:1,blur:1},r={updateInput:1,change:1},o=function(e){var n,i,o=!0,s=e.prop("value"),u=s,l=function(n){if(e){var i=e.prop("value");i!==s&&(s=i,n&&t[n.type]||e.trigger("input")),n&&r[n.type]&&(u=i),o||i===u||e.trigger("change")}},c=function(){clearTimeout(i),i=setTimeout(l,9)},p=function(t){clearInterval(n),setTimeout(function(){t&&a[t.type]&&(o=!1),e&&(e.unbind("focusout blur",p).unbind("input change updateInput",l),l()),e=null},1)};clearInterval(n),n=setInterval(l,160),c(),e.off({"focusout blur":p,"input change updateInput":l}).on({"focusout blur":p,"input updateInput change":l})};e(i).on("focusin",function(t){t.target&&n[t.target.type]&&!t.target.readOnly&&!t.target.disabled&&o(e(t.target))})}(),t.addReady(function(t,n){var a;e("form",t).add(n.filter("form")).bind("invalid",e.noop);try{t!=i||"form"in(i.activeElement||{})||(a=e("input[autofocus], select[autofocus], textarea[autofocus]",t).eq(0).getShadowFocusElement()[0],a&&a.offsetHeight&&a.offsetWidth&&a.focus())}catch(r){}}),Modernizr.input.list||(t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var n,i=this,a=e("select",i);return a[0]?n=a[0].options:(n=e("option",i).get(),n.length&&t.warn("you should wrap your option-elements for a datalist in a select element to support IE and other old browsers.")),n}}}),t.ready("form-datalist",function(){t.defineNodeNameProperties("input",{list:{attr:{get:function(){var e=t.contentAttr(this,"list");return null==e?a:e},set:function(n){var i=this;t.contentAttr(i,"list",n),t.objectCreate(r.shadowListProto,a,{input:i,id:n,datalist:e.prop(i,"list")}),e(i).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}})})),Modernizr.formattribute!==!1&&Modernizr.fieldsetdisabled||function(){(function(t,n){e.prop=function(a,r,o){var s;return a&&1==a.nodeType&&o===n&&e.nodeName(a,"form")&&a.id&&(s=i.getElementsByName(r),s&&s.length||(s=i.getElementById(r)),s&&(s=e(s).filter(function(){return e.prop(this,"form")==a}).get(),s.length))?1==s.length?s[0]:s:t.apply(this,arguments)}})(e.prop,a);var n=function(t){var n=e.data(t,"webshimsAddedElements");n&&(n.remove(),e.removeData(t,"webshimsAddedElements"))};if(Modernizr.formattribute||(t.defineNodeNamesProperty(["input","textarea","select","button","fieldset"],"form",{prop:{get:function(){var n=t.contentAttr(this,"form");return n&&(n=i.getElementById(n),n&&!e.nodeName(n,"form")&&(n=null)),n||this.form},writeable:!1}}),t.defineNodeNamesProperty(["form"],"elements",{prop:{get:function(){var t=this.id,n=e.makeArray(this.elements);return t&&(n=e(n).add('input[form="'+t+'"], select[form="'+t+'"], textarea[form="'+t+'"], button[form="'+t+'"], fieldset[form="'+t+'"]').not(".webshims-visual-hide > *").get()),n},writeable:!1}}),e(function(){var t=function(e){e.stopPropagation()},a={image:1,submit:1};e(i).on("submit",function(t){if(!t.isDefaultPrevented()){var i,a=t.target,r=a.id;r&&(n(a),i=e('input[form="'+r+'"], select[form="'+r+'"], textarea[form="'+r+'"]').filter(function(){return!this.disabled&&this.name&&this.form!=a}).clone(),i.length&&(e.data(a,"webshimsAddedElements",e('<div class="webshims-visual-hide" />').append(i).appendTo(a)),setTimeout(function(){n(a)},9)),i=null)}}),e(i).on("click",function(n){if(a[n.target.type]&&!n.isDefaultPrevented()&&e(n.target).is("input[form], button[form]")){var i,r=e.prop(n.target,"form"),o=n.target.form;r&&r!=o&&(i=e(n.target).clone().removeAttr("form").addClass("webshims-visual-hide").on("click",t).appendTo(r),o&&n.preventDefault(),w(r),i.trigger("click"),setTimeout(function(){i.remove(),i=null},9))}})})),Modernizr.fieldsetdisabled||t.defineNodeNamesProperty(["fieldset"],"elements",{prop:{get:function(){return e("input, select, textarea, button, fieldset",this).get()||[]},writeable:!1}}),!e.fn.finish&&1.9>parseFloat(e.fn.jquery,10)){var r=/\r?\n/g,o=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,s=/^(?:select|textarea)/i;e.fn.serializeArray=function(){return this.map(function(){var t=e.prop(this,"elements");return t?e.makeArray(t):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||s.test(this.nodeName)||o.test(this.type))}).map(function(t,n){var i=e(this).val();return null==i?null:e.isArray(i)?e.map(i,function(e){return{name:n.name,value:e.replace(r,"\r\n")}}):{name:n.name,value:i.replace(r,"\r\n")}}).get()}}}(),null==e("<input />").prop("labels")&&t.defineNodeNamesProperty("button, input, keygen, meter, output, progress, select, textarea","labels",{prop:{get:function(){if("hidden"==this.type)return null;var t=this.id,n=e(this).closest("label").filter(function(){var e=this.attributes["for"]||{};return!e.specified||e.value==t});return t&&(n=n.add('label[for="'+t+'"]')),n.get()},writeable:!1}}),"value"in i.createElement("progress")||function(){var n=parseInt("NaN",10),i=function(t){var n;n=e.prop(t,"position"),e.attr(t,"data-position",n),e("> span",t).css({width:(0>n?100:100*n)+"%"})},a={position:{prop:{get:function(){var t,a=this.getAttribute("value"),r=-1;return a=a?1*a:n,isNaN(a)?i.isInChange&&e(this).removeAttr("aria-valuenow"):(t=e.prop(this,"max"),r=Math.max(Math.min(a/t,1),0),i.isInChange&&(e.attr(this,"aria-valuenow",100*r),"max"==i.isInChange&&e.attr(this,"aria-valuemax",t))),r},writeable:!1}}};e.each({value:0,max:1},function(n,r){var o="value"==n&&!e.fn.finish;a[n]={attr:{set:function(e){var t=a[n].attr._supset.call(this,e);return i.isInChange=n,i(this),i.isInChange=!1,t}},removeAttr:{value:function(){if(this.removeAttribute(n),o)try{delete this.value}catch(e){}i.isInChange=n,i(this),i.isInChange=!1}},prop:{get:function(){var t=1*a[n].attr.get.call(this);return 0>t||isNaN(t)?t=r:"value"==n?t=Math.min(t,e.prop(this,"max")):0===t&&(t=r),t},set:function(e){return e=1*e,isNaN(e)&&t.error("Floating-point value is not finite."),a[n].attr.set.call(this,e)}}}}),t.createElement("progress",function(){var n=e(this).attr({role:"progressbar","aria-valuemin":"0"}).html('<span class="progress-value" />').jProp("labels").map(function(){return t.getID(this)}).get();n.length?e.attr(this,"aria-labelledby",n.join(" ")):t.info("you should use label elements for your prgogress elements"),i.isInChange="max",i(this),i.isInChange=!1},a)}();try{i.querySelector(":checked")}catch(S){(function(){e("html").addClass("no-csschecked");var n={radio:1,checkbox:1},a=function(){var t,n,i,a=this.options||[];for(t=0,n=a.length;n>t;t++)i=e(a[t]),i[e.prop(a[t],"selected")?"addClass":"removeClass"]("prop-checked")},r=function(){var t,n=e.prop(this,"checked")?"addClass":"removeClass",i=this.className||"";-1==i.indexOf("prop-checked")==("addClass"==n)&&(e(this)[n]("prop-checked"),(t=this.parentNode)&&(t.className=t.className))};t.onNodeNamesPropertyModify("select","value",a),t.onNodeNamesPropertyModify("select","selectedIndex",a),t.onNodeNamesPropertyModify("option","selected",function(){e(this).closest("select").each(a)}),t.onNodeNamesPropertyModify("input","checked",function(t,i){var a=this.type;"radio"==a&&i?g(this).each(r):n[a]&&e(this).each(r)}),e(i).on("change",function(t){n[t.target.type]?"radio"==t.target.type?g(t.target).each(r):e(t.target)[e.prop(t.target,"checked")?"addClass":"removeClass"]("prop-checked"):"select"==t.target.nodeName.toLowerCase()&&e(t.target).each(a)}),t.addReady(function(t,i){e("option, input",t).add(i.filter("option, input")).each(function(){var t;n[this.type]?t="checked":"option"==this.nodeName.toLowerCase()&&(t="selected"),t&&e(this)[e.prop(this,t)?"addClass":"removeClass"]("prop-checked")})})})()}(function(){var i;if(Modernizr.textareaPlaceholder=!!("placeholder"in e("<textarea />")[0]),Modernizr.input.placeholder&&r.overridePlaceholder&&(i=!0),Modernizr.input.placeholder&&Modernizr.textareaPlaceholder&&!i)return function(){var t=navigator.userAgent;-1!=t.indexOf("Mobile")&&-1!=t.indexOf("Safari")&&e(n).on("orientationchange",function(){var t,n=function(e,t){return t},i=function(){e("input[placeholder], textarea[placeholder]").attr("placeholder",n)};return function(){clearTimeout(t),t=setTimeout(i,9)}}())}(),a;var o="over"==t.cfg.forms.placeholderType,s=t.cfg.forms.responsivePlaceholder,u=["textarea"];t.debug!==!1,(!Modernizr.input.placeholder||i)&&u.push("input");var l=function(e){try{if(e.setSelectionRange)return e.setSelectionRange(0,0),!0;if(e.createTextRange){var t=e.createTextRange();return t.collapse(!0),t.moveEnd("character",0),t.moveStart("character",0),t.select(),!0}}catch(n){}},c=function(t,n,i,r){if(i===!1&&(i=e.prop(t,"value")),o||"password"==t.type){if(!i&&r)return e(t).off(".placeholderremove").on({"keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove":function(i){(!i||17!=i.keyCode&&16!=i.keyCode)&&(n.box.removeClass("placeholder-visible"),e(t).unbind(".placeholderremove"))},"blur.placeholderremove":function(){e(t).unbind(".placeholderremove")}}),a}else{if(!i&&r&&l(t)){var s=setTimeout(function(){l(t)},9);return e(t).off(".placeholderremove").on({"keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove":function(i){(!i||17!=i.keyCode&&16!=i.keyCode)&&(t.value=e.prop(t,"value"),n.box.removeClass("placeholder-visible"),clearTimeout(s),e(t).unbind(".placeholderremove"))},"mousedown.placeholderremove drag.placeholderremove select.placeholderremove":function(){l(t),clearTimeout(s),s=setTimeout(function(){l(t)},9)},"blur.placeholderremove":function(){clearTimeout(s),e(t).unbind(".placeholderremove")}}),a}r||i||!t.value||(t.value=i)}n.box.removeClass("placeholder-visible")},p=function(t,n,i){i===!1&&(i=e.prop(t,"placeholder")),o||"password"==t.type||(t.value=i),n.box.addClass("placeholder-visible")},d=function(t,n,i,r,s){if(r||(r=e.data(t,"placeHolder"))){var u=e(t).hasClass("placeholder-visible");return i===!1&&(i=e.attr(t,"placeholder")||""),e(t).unbind(".placeholderremove"),n===!1&&(n=e.prop(t,"value")),n||"focus"!=s&&(s||!e(t).is(":focus"))?n?(c(t,r,n),a):(i&&!n?p(t,r,i):c(t,r,n),a):(("password"==t.type||o||u)&&c(t,r,"",!0),a)}},f=function(t){return t=e(t),!!(t.prop("title")||t.attr("aria-labelledby")||t.attr("aria-label")||t.jProp("labels").length)},h=function(t){return t=e(t),e(f(t)?'<span class="placeholder-text"></span>':'<label for="'+t.prop("id")+'" class="placeholder-text"></label>')},v=function(){var i={text:1,search:1,url:1,email:1,password:1,tel:1,number:1};return m["form-number-date-ui"].loaded&&delete i.number,{create:function(t){var i,a,r=e.data(t,"placeHolder");if(r)return r;if(r=e.data(t,"placeHolder",{}),e(t).on("focus.placeholder blur.placeholder",function(e){d(this,!1,!1,r,e.type),r.box["focus"==e.type?"addClass":"removeClass"]("placeholder-focused")}),(i=e.prop(t,"form"))&&e(t).onWSOff("reset.placeholder",function(e){setTimeout(function(){d(t,!1,!1,r,e.type)},0)},!1,i),"password"==t.type||o)r.text=h(t),s||e(t).is(".responsive-width")||-1!=(t.currentStyle||{width:""}).width.indexOf("%")?(a=!0,r.box=r.text):r.box=e(t).wrap('<span class="placeholder-box placeholder-box-'+(t.nodeName||"").toLowerCase()+" placeholder-box-"+e.css(t,"float")+'" />').parent(),r.text.insertAfter(t).on("mousedown.placeholder",function(){d(this,!1,!1,r,"focus");try{setTimeout(function(){t.focus()},0)}catch(e){}return!1}),e.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(n,i){var a=e.css(t,i);r.text.css(i)!=a&&r.text.css(i,a)}),e.each(["Left","Top"],function(n,i){var a=(parseInt(e.css(t,"padding"+i),10)||0)+Math.max(parseInt(e.css(t,"margin"+i),10)||0,0)+(parseInt(e.css(t,"border"+i+"Width"),10)||0);r.text.css("padding"+i,a)}),e(t).onWSOff("updateshadowdom",function(){var n,i;((i=t.offsetWidth)||(n=t.offsetHeight))&&r.text.css({width:i,height:n}).css(e(t).position())},!0);else{var u=function(n){e(t).hasClass("placeholder-visible")&&(c(t,r,""),setTimeout(function(){(!n||"submit"!=n.type||n.isDefaultPrevented())&&d(t,!1,!1,r)},9))};e(t).onWSOff("beforeunload",u,!1,n),r.box=e(t),i&&e(t).onWSOff("submit",u,!1,i)}return r},update:function(n,r){var o=(e.attr(n,"type")||e.prop(n,"type")||"").toLowerCase();if(!i[o]&&!e.nodeName(n,"textarea"))return t.warn('placeholder not allowed on input[type="'+o+'"], but it is a good fallback :-)'),a;var s=v.create(n);s.text&&s.text.text(r),d(n,!1,r,s)}}}();e.webshims.publicMethods={pHolder:v},u.forEach(function(e){t.defineNodeNameProperty(e,"placeholder",{attr:{set:function(e){var n=this;i?(t.data(n,"bustedPlaceholder",e),n.placeholder=""):t.contentAttr(n,"placeholder",e),v.update(n,e)},get:function(){var e;return i&&(e=t.data(this,"bustedPlaceholder")),e||t.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})}),u.forEach(function(n){var a,r={};["attr","prop"].forEach(function(n){r[n]={set:function(r){var o,s=this;i&&(o=t.data(s,"bustedPlaceholder")),o||(o=t.contentAttr(s,"placeholder")),e.removeData(s,"cachedValidity");var u=a[n]._supset.call(s,r);return o&&"value"in s&&d(s,r,o),u},get:function(){var t=this;return e(t).hasClass("placeholder-visible")?"":a[n]._supget.call(t)}}}),a=t.defineNodeNameProperty(n,"value",r)})})(),function(){var n=i;if(!("value"in i.createElement("output"))){t.defineNodeNameProperty("output","value",{prop:{set:function(t){var n=e.data(this,"outputShim");n||(n=a(this)),n(t)},get:function(){return t.contentAttr(this,"value")||e(this).text()||""}}}),t.onNodeNamesPropertyModify("input","value",function(t,n,i){if("removeAttr"!=i){var a=e.data(this,"outputShim");a&&a(t)}});var a=function(a){if(!a.getAttribute("aria-live")){a=e(a);var r=(a.text()||"").trim(),o=a.prop("id"),s=a.attr("for"),u=e('<input class="output-shim" type="text" disabled name="'+(a.attr("name")||"")+'" value="'+r+'" style="display: none !important;" />').insertAfter(a);u[0].form||n;var l=function(e){u[0].value=e,e=u[0].value,a.text(e),t.contentAttr(a[0],"value",e)};return a[0].defaultValue=r,t.contentAttr(a[0],"value",r),a.attr({"aria-live":"polite"}),o&&(u.attr("id",o),a.attr("aria-labelledby",a.jProp("labels").map(function(){return t.getID(this)}).get().join(" "))),s&&(o=t.getID(a),s.split(" ").forEach(function(e){e=i.getElementById(e),e&&e.setAttribute("aria-controls",o)})),a.data("outputShim",l),u.data("outputShim",l),l}};t.addReady(function(t,n){e("output",t).add(n.filter("output")).each(function(){a(this)})}),function(){var i={updateInput:1,input:1},a={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},r=function(e){var n,a,r=e.prop("value"),o=function(n){if(e){var a=e.prop("value");a!==r&&(r=a,n&&i[n.type]||t.triggerInlineForm&&t.triggerInlineForm(e[0],"input"))}},s=function(){clearTimeout(a),a=setTimeout(o,9)},u=function(){e.unbind("focusout",u).unbind("keyup keypress keydown paste cut",s).unbind("input change updateInput",o),clearInterval(n),setTimeout(function(){o(),e=null},1)};clearInterval(n),n=setInterval(o,200),s(),e.on({"keyup keypress keydown paste cut":s,focusout:u,"input updateInput change":o})};e(n).on("focusin",function(n){!n.target||n.target.readOnly||n.target.disabled||"input"!=(n.target.nodeName||"").toLowerCase()||a[n.target.type]||(t.data(n.target,"implemented")||{}).inputwidgets||r(e(n.target))})}()}}()});
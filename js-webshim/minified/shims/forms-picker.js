!function(a){!function(){function b(b){var f=b||window.event,g=h.call(arguments,1),i=0,j=0,k=0,l=0;return b=a.event.fix(f),b.type="mousewheel","detail"in f&&(k=-1*f.detail),"wheelDelta"in f&&(k=f.wheelDelta),"wheelDeltaY"in f&&(k=f.wheelDeltaY),"wheelDeltaX"in f&&(j=-1*f.wheelDeltaX),"axis"in f&&f.axis===f.HORIZONTAL_AXIS&&(j=-1*k,k=0),i=0===k?j:k,"deltaY"in f&&(k=-1*f.deltaY,i=k),"deltaX"in f&&(j=f.deltaX,0===k&&(i=-1*j)),0!==k||0!==j?(l=Math.max(Math.abs(k),Math.abs(j)),(!e||e>l)&&(e=l),i=Math[i>=1?"floor":"ceil"](i/e),j=Math[j>=1?"floor":"ceil"](j/e),k=Math[k>=1?"floor":"ceil"](k/e),b.deltaX=j,b.deltaY=k,b.deltaFactor=e,g.unshift(b,i,j,k),d&&clearTimeout(d),d=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,g)):void 0}function c(){e=null}if(!a.event.special.mousewheel){var d,e,f=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],g="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],h=Array.prototype.slice;if(a.event.fixHooks)for(var i=f.length;i;)a.event.fixHooks[f[--i]]=a.event.mouseHooks;a.event.special.mousewheel={version:"3.1.6",setup:function(){if(this.addEventListener)for(var a=g.length;a;)this.addEventListener(g[--a],b,!1);else this.onmousewheel=b},teardown:function(){if(this.removeEventListener)for(var a=g.length;a;)this.removeEventListener(g[--a],b,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}}(),function(){function b(){this===e.elem&&(e.pos=[-260,-260],e.elem=!1,f=3)}if(!a.event.special.mwheelIntent){var c,d,e={pos:[-260,-260]},f=3,g=document,h=g.documentElement,i=g.body;i||a(function(){i=g.body}),a.event.special.mwheelIntent={setup:function(){var c=a(this).bind("mousewheel",a.event.special.mwheelIntent.handler);return this!==g&&this!==h&&this!==i&&c.bind("mouseleave",b),c=null,!0},teardown:function(){return a(this).unbind("mousewheel",a.event.special.mwheelIntent.handler).unbind("mouseleave",b),!0},handler:function(b){var g=[b.clientX,b.clientY];return this===e.elem||Math.abs(e.pos[0]-g[0])>f||Math.abs(e.pos[1]-g[1])>f?(e.elem=this,e.pos=g,f=250,clearTimeout(d),d=setTimeout(function(){f=10},200),clearTimeout(c),c=setTimeout(function(){f=3},1500),b=a.extend({},b,{type:"mwheelIntent"}),(a.event.dispatch||a.event.handle).apply(this,arguments)):void 0}},a.fn.extend({mwheelIntent:function(a){return a?this.bind("mwheelIntent",a):this.trigger("mwheelIntent")},unmwheelIntent:function(a){return this.unbind("mwheelIntent",a)}}),a(function(){i=g.body,a(g).bind("mwheelIntent.mwheelIntentDefault",a.noop)})}}(),function(){if(!a.event.special.mousepress){var b=function(a,b){var c=a.data("mousepresstimer");c&&clearTimeout(c),b&&a.off("mouseup.mousepressext mouseleave.mousepressext"),a=null};a.event.special.mousepress={setup:function(){a(this).on("mousedown.mousepressext",function(c){var d=a(this),e=function(f){var g=0;b(d),d.data("mousepresstimer",setInterval(function(){a.event.special.mousepress.handler(d[0],c),g++,g>3&&f>45&&e(f-40)},f))},f=a(c.target).trigger("mousepressstart",[c]);b(d),d.data("mousepresstimer",setTimeout(function(){e(180)},200)),d.on("mouseup.mousepressext mouseleave.mousepressext",function(a){b(d,!0),f.trigger("mousepressend",[a]),d=null,f=null})})},teardown:function(){b(a(this).off(".mousepressext"),!0)},handler:function(b,c){return a.event.dispatch.call(b,{type:"mousepress",target:c.target,pageX:c.pageX,pageY:c.pageY})}}}}()}(webshims.$),webshims.register("forms-picker",function(a,b,c,d,e,f){"use strict";var g=b.picker,h=g._actions,i=f,j=function(a){var b=[a.getFullYear(),i.addZero(a.getMonth()+1),i.addZero(a.getDate())];return b.month=b[0]+"-"+b[1],b.date=b[0]+"-"+b[1]+"-"+b[2],b.time=i.addZero(a.getHours())+":"+i.addZero(a.getMinutes()),b["datetime-local"]=b.date+"T"+b.time,b},k=j(new Date),l=function(b){b=a(b||this.activeButton),this.activeButton.attr({tabindex:"-1","aria-selected":"false"}),this.activeButton=b.attr({tabindex:"0","aria-selected":"true"}),this.index=this.buttons.index(this.activeButton[0]),clearTimeout(this.timer),g._genericSetFocus.apply(this,arguments)},m=function(){var b;this.popover.navedInitFocus&&(b=this.popover.navedInitFocus.sel||this.popover.navedInitFocus,this.activeButton&&this.activeButton[0]||!this.buttons[b]?b&&(this.activeButton=a(b,this.element)):this.activeButton=this.buttons[b](),!this.activeButton[0]&&this.popover.navedInitFocus.alt&&(this.activeButton=this.buttons[this.popover.navedInitFocus.alt]())),this.activeButton&&this.activeButton[0]||(this.activeButton=this.buttons.filter(".checked-value")),this.activeButton[0]||(this.activeButton=this.buttons.filter(".this-value")),this.activeButton[0]||(this.activeButton=this.buttons.eq(0)),this.setFocus(this.activeButton,this.opts.noFocus)},n=b.formcfg,o=n.__active||n[""],p=function(a){a.stopImmediatePropagation()},q=f.steps,r=function(b){a(this)["mousepressstart"==b.type?"addClass":"removeClass"]("mousepress-ui")},s=function(b,c,d){var e=o.date,f=[];return d||(d=""),a.each({monthNames:"montname",monthDigits:"month-digit",monthNamesShort:"monthname-short"},function(a,g){var h=[d+e[a][b]];c&&(h.push(c),e.showMonthAfterYear&&h.reverse()),f.push('<span class="'+g+'">'+h.join(" ")+"</span>")}),f.join("")},t={_addBindings:function(){var b,c=this,d=this.options,e=function(){var b={};return{init:function(d,e,f){b[d]||(b[d]={fn:f},a(c.orig).on(d,function(){b[d].val=a.prop(c.orig,"value")})),b[d].val=e},call:function(a,d){b[a]&&b[a].val!=d&&(clearTimeout(b[a].timer),b[a].val=d,b[a].timer=setTimeout(function(){b[a].fn(d,c)},9))}}}(),f=function(){e.init("input",a.prop(c.orig,"value"),c.options.input),e.init("change",a.prop(c.orig,"value"),c.options.change)},g={},h=function(d){return h.prevent?(d.preventDefault(),a(b||c.element.getShadowFocusElement()).trigger("focus"),p(d),!0):void 0},i=(function(){var b,f=function(d){var f;clearTimeout(b),f=c.parseValue(),"color"==c.type&&c.inputElements.val(f),a.prop(c.orig,"value",f),e.call("input",f),d&&"wsupdatevalue"==d.type||e.call("change",f)},g=function(){clearTimeout(b)},h=function(a){clearTimeout(b),b=setTimeout(f,0),"ws__change"==a.type&&(p(a),d.splitInput||f())};c.element.on("wsupdatevalue",f),c.inputElements.add(c.buttonWrapper).add(c.element).on({ws__focusin:g,"ws__blur ws__focusout ws__change":h}),setTimeout(function(){c.popover&&(c.popover.element.on("wspopoverhide",h),c.popover.element.children().on({focusin:g,focusout:h}))},0)}(),{}),j=d.splitInput?this.inputElements.filter(".ws-spin"):this.inputElements.eq(0),k={ws__blur:function(a){h(a)||d.disabled||d.readonly||h.prevent||(b=!1),p(a)},ws__focus:function(){b||(f(),b=this)},keypress:function(a){if(!a.isDefaultPrevented()){var b,d=!0,e=a.keyCode;a.ctrlKey||a.metaKey||!o[c.type+"Signs"]?d=!1:(b=String.fromCharCode(null==a.charCode?e:a.charCode),d=!(" ">b||(o[c.type+"Signs"]+"0123456789").indexOf(b)>-1)),d&&a.preventDefault()}},ws__input:"color"==this.type&&this.isValid?a.noop:function(){var a,b=function(){var a=c.parseValue(!0);a&&c.isValid(a)&&c.setInput(a)};return function(){clearTimeout(a),a=setTimeout(b,200)}}(),"ws__input keydown keypress":function(){var b,c=!1,e=function(){c===!0?(c="semi",b=setTimeout(e,250)):c=!1},f=function(){c=!0,clearTimeout(b),b=setTimeout(e,300)},g=function(){var a=this;setTimeout(function(){a.focus(),a.select()},4),f()};return function(b){if(d.splitInput&&d.jumpInputs)if("ws__input"==b.type){if(a.prop(this,"value").length===a.prop(this,"maxLength"))try{a(this).next().next("input, select").each(g)}catch(e){}}else b.shiftKey||b.crtlKey||9!=b.keyCode||c!==!0&&(!c||a.prop(this,"value"))||b.preventDefault()}}()},l=function(){return d.disabled||b||c.element.getShadowFocusElement().trigger("focus"),h.set(),!1};h.set=function(){var a,b=function(){h.prevent=!1};return function(){clearTimeout(a),h.prevent=!0,setTimeout(b,9)}}(),d.splitInput&&null==d.jumpInputs&&(d.jumpInputs=!0),this.buttonWrapper.on("mousedown",l),this.setInput=function(a){c.value(a),e.call("input",a)},this.setChange=function(a){c.setInput(a),e.call("change",a)},this.inputElements.on(k),q[this.type]&&(["stepUp","stepDown"].forEach(function(a){g[a]=function(f){if(!d.disabled&&!d.readonly){b||l();var g=!1;f||(f=1);try{c.elemHelper[a](f),g=c.elemHelper.prop("value")}catch(h){!d.value&&c.maxAsNumber>=c.minAsNumber&&(g=d.defValue)}return g!==!1&&d.value!=g&&(c.value(g),e.call("input",g)),g}}}),d.noSpinbtn||(i.mwheelIntent=function(a,c){c&&b&&!d.disabled&&(g[c>0?"stepUp":"stepDown"](),a.preventDefault())},i.keydown=function(b){if(!(d.list||b.isDefaultPrevented()||b.altKey&&40==b.keyCode||a.attr(this,"list"))){var c=!0,e=b.keyCode;38==e?g.stepUp():40==e?g.stepDown():c=!1,c&&b.preventDefault()}},j.attr({autocomplete:"off",role:"spinbutton"}).on(i)),a(this.buttonWrapper).on("mousepressstart mousepressend",".step-up, .step-down",r).on("mousedown mousepress",".step-up",function(){g.stepUp()}).on("mousedown mousepress",".step-down",function(){g.stepDown()}),f())},initDataList:function(){var b,c=this,d=function(){a(c.orig).jProp("list").off("updateDatalist",d).on("updateDatalist",d),clearTimeout(b),b=setTimeout(function(){c.list&&c.list()},9)};a(this.orig).onTrigger("listdatalistchange",d)},getOptions:function(){var b={},c=a(this.orig).jProp("list");return c.find("option").each(function(){b[a.prop(this,"value")]=a.prop(this,"label")}),[b,c.data("label")]}};a.extend(a.fn.wsBaseWidget.wsProto,t),a.extend(a.fn.spinbtnUI.wsProto,t),a(n).on("change",function(){o=n.__active}),b.ListBox=function(b,c,d){this.element=a("ul",b),this.popover=c,this.opts=d||{},this.buttons=a("button:not(:disabled)",this.element),this.ons(this),this._initialFocus()},b.ListBox.prototype={setFocus:l,_initialFocus:m,prev:function(){var a=this.index-1;0>a?this.opts.prev&&(this.popover.navedInitFocus="last",this.popover.actionFn(this.opts.prev),this.popover.navedInitFocus=!1):this.setFocus(this.buttons.eq(a))},next:function(){var a=this.index+1;a>=this.buttons.length?this.opts.next&&(this.popover.navedInitFocus="first",this.popover.actionFn(this.opts.next),this.popover.navedInitFocus=!1):this.setFocus(this.buttons.eq(a))},ons:function(a){this.element.on({keydown:function(b){var c,d=b.keyCode;return b.ctrlKey?void 0:(36==d||33==d?(a.setFocus(a.buttons.eq(0)),c=!0):34==d||35==d?(a.setFocus(a.buttons.eq(a.buttons.length-1)),c=!0):38==d||37==d?(a.prev(),c=!0):(40==d||39==d)&&(a.next(),c=!0),c?!1:void 0)}})}},b.Grid=function(b,c,d){this.element=a("tbody",b),this.popover=c,this.opts=d||{},this.buttons=a("button:not(:disabled):not(.othermonth)",this.element),this.ons(this),this._initialFocus(),this.popover.openedByFocus&&(this.popover.activeElement=this.activeButton)},b.Grid.prototype={setFocus:l,_initialFocus:m,first:function(){this.setFocus(this.buttons.eq(0))},last:function(){this.setFocus(this.buttons.eq(this.buttons.length-1))},upPage:function(){a(".ws-picker-header > button:not(:disabled)",this.popover.element).trigger("click")},downPage:function(){this.activeButton.filter(':not([data-action="changeInput"])').trigger("click")},ons:function(a){this.element.on({keydown:function(b){var c,d=b.keyCode;return b.shiftKey?void 0:(b.ctrlKey&&40==d?c="downPage":b.ctrlKey&&38==d?c="upPage":33==d||b.ctrlKey&&37==d?c="prevPage":34==d||b.ctrlKey&&39==d?c="nextPage":36==b.keyCode||33==b.keyCode?c="first":35==b.keyCode?c="last":38==b.keyCode?c="up":37==b.keyCode?c="prev":40==b.keyCode?c="down":39==b.keyCode&&(c="next"),c?(a[c](),!1):void 0)}})}},a.each({prevPage:{get:"last",action:"prev"},nextPage:{get:"first",action:"next"}},function(a,c){b.Grid.prototype[a]=function(){this.opts[c.action]&&(this.popover.navedInitFocus={sel:'button[data-id="'+this.activeButton.attr("data-id")+'"]:not(:disabled,.othermonth)',alt:c.get},this.popover.actionFn(this.opts[c.action]),this.popover.navedInitFocus=!1)}}),a.each({up:{traverse:"prevAll",get:"last",action:"prev",reverse:!0},down:{traverse:"nextAll",get:"first",action:"next"}},function(c,d){b.Grid.prototype[c]=function(){var b=this.activeButton.closest("td").prop("cellIndex"),c="td:nth-child("+(b+1)+") button:not(:disabled,.othermonth)",e=this.activeButton.closest("tr")[d.traverse]();d.reverse&&(e=a(e.get().reverse())),e=e.find(c)[d.get](),e[0]?this.setFocus(e.eq(0)):this.opts[d.action]&&(this.popover.navedInitFocus=c+":"+d.get,this.popover.actionFn(this.opts[d.action]),this.popover.navedInitFocus=!1)}}),a.each({prev:{traverse:"prevAll",get:"last",reverse:!0},next:{traverse:"nextAll",get:"first"}},function(c,d){b.Grid.prototype[c]=function(){var b="button:not(:disabled,.othermonth)",e=this.activeButton.closest("td")[d.traverse]("td");d.reverse&&(e=a(e.get().reverse())),e=e.find(b)[d.get](),e[0]||(e=this.activeButton.closest("tr")[d.traverse]("tr"),d.reverse&&(e=a(e.get().reverse())),e=e.find(b)[d.get]()),e[0]?this.setFocus(e.eq(0)):this.opts[c]&&(this.popover.navedInitFocus=d.get,this.popover.actionFn(this.opts[c]),this.popover.navedInitFocus=!1)}}),g.getWeek=function(a){var b,c=new Date(a.getTime());return c.setDate(c.getDate()+4-(c.getDay()||7)),b=c.getTime(),c.setMonth(0),c.setDate(1),Math.floor(Math.round((b-c)/864e5)/7)+1},g.getYearList=function(a,b){var c,d,e,f,h,i,j,l,m,n,o=b.options,p=o.size,q=o.max.split("-"),r=o.min.split("-"),s=o.cols||4,t=o.value.split("-"),u=0,v=0,w="",x=0;for("max"==b.options.useDecadeBase&&q[0]?u=11-q[0]%12:"min"==b.options.useDecadeBase&&r[0]&&(u=11-r[0]%12),a=1*a[0],n=a-(a+u)%(12*p),c=0;p>c;c++){for(c?n+=12:i=g.isInRange([n-1],q,r)?{"data-action":"setYearList",value:n-1}:!1,w+='<div class="year-list picker-list ws-index-'+c+'"><div class="ws-picker-header"><select data-action="setYearList" class="decade-select">'+g.createYearSelect(a,q,r,"",{start:n,step:12*p,label:n+" \u2013 "+(n+11)}).join("")+'</select><button disabled="disabled"><span>'+n+" \u2013 "+(n+11)+"</span></button></div>",h=[],d=0;12>d;d++)e=n+d,m=[],g.isInRange([e],q,r)?(f="",v++):f=' disabled=""',e==k[0]&&m.push("this-value"),t[0]==e&&m.push("checked-value"),l=m.length?' class="'+m.join(" ")+'"':"",!d||d%s||(x++,h.push('</tr><tr class="ws-row-'+x+'">')),h.push('<td class="ws-item-'+d+'" role="presentation"><button  data-id="year-'+d+'" type="button"'+f+l+' data-action="setMonthList" value="'+e+'" tabindex="-1" role="gridcell">'+e+"</button></td>");c==p-1&&(j=g.isInRange([e+1],q,r)?{"data-action":"setYearList",value:e+1}:!1),w+='<div class="picker-grid"><table role="grid" aria-label="'+n+" \u2013 "+(n+11)+'"><tbody><tr class="ws-row-0">'+h.join("")+"</tr></tbody></table></div></div>"}return{enabled:v,main:w,next:j,prev:i,type:"Grid"}},g.getMonthList=function(a,b){var c,d,e,f,h,i,j,l,m,n,p,q=b.options,r=q.size,t=q.max.split("-"),u=q.min.split("-"),v=q.cols||4,w=q.value.split("-"),x=0,y=0,z="";for(a=a[0]-Math.floor((r-1)/2),c=0;r>c;c++){for(c?a++:l=g.isInRange([a-1],t,u)?{"data-action":"setMonthList",value:a-1}:!1,c==r-1&&(m=g.isInRange([a+1],t,u)?{"data-action":"setMonthList",value:a+1}:!1),i=[],g.isInRange([a,"01"],t,u)||g.isInRange([a,"12"],t,u)?(j=!1,h=""):(h=' disabled=""',j=!0),q.minView>=1&&(h=' disabled=""'),z+='<div class="month-list picker-list ws-index-'+c+'"><div class="ws-picker-header">',z+='<select data-action="setMonthList" class="year-select">'+g.createYearSelect(a,t,u).join("")+'</select> <button data-action="setYearList"'+h+' value="'+a+'" tabindex="-1"><span>'+a+"</span></button>",z+="</div>",d=0;12>d;d++)f=o.date.monthkeys[d+1],e=s(d),p=[],j||!g.isInRange([a,f],t,u)?h=' disabled=""':(h="",x++),a==k[0]&&k[1]==f&&p.push("this-value"),w[0]==a&&w[1]==f&&p.push("checked-value"),n=p.length?' class="'+p.join(" ")+'"':"",!d||d%v||(y++,i.push('</tr><tr class="ws-row-'+y+'">')),i.push('<td class="ws-item-'+d+'" role="presentation"><button data-id="month-'+d+'" type="button"'+h+n+' data-action="'+("month"==b.type?"changeInput":"setDayList")+'" value="'+a+"-"+f+'" tabindex="-1" role="gridcell" aria-label="'+o.date.monthNames[d]+'">'+e+"</button></td>");z+='<div class="picker-grid"><table role="grid" aria-label="'+a+'"><tbody><tr class="ws-row-0">'+i.join("")+"</tr></tbody></table></div></div>"}return{enabled:x,main:z,prev:l,next:m,type:"Grid"}},g.getDayList=function(b,c){var d,e,f,h,i,l,m,n,p,q,r,t,u,v,w,x,y,z,A,B,C,D=c.options,E=D.size,F=D.maxS,G=D.minS,H=D.value.split("T")[0].split("-"),I=o.date,J=[],K=new Date(b[0],b[1]-1,1),L="datetime-local"==c.type?"setTimeList":"changeInput";for(K.setMonth(K.getMonth()-Math.floor((E-1)/2)),n=[1*b[0]+1,b[1]],n=g.isInRange(n,F,G)?{"data-action":"setDayList",value:n.join("-")}:!1,p=[1*b[0]-1,b[1]],p=g.isInRange(p,F,G)?{"data-action":"setDayList",value:p.join("-")}:!1,d=0;E>d;d++){for(K.setDate(1),u=K.getMonth(),t=0,d||(B=new Date(K.getTime()),B.setDate(-1),x=j(B),l=g.isInRange(x,F,G)?{"data-action":"setDayList",value:x[0]+"-"+x[1]}:!1),x=j(K),J.push('<div class="day-list picker-list ws-index-'+d+'"><div class="ws-picker-header">'),y=['<select data-action="setDayList" class="month-select" tabindex="0">'+g.createMonthSelect(x,F,G).join("")+"</select>",'<select data-action="setDayList" class="year-select" tabindex="0">'+g.createYearSelect(x[0],F,G,"-"+x[1]).join("")+"</select>"],o.date.showMonthAfterYear&&y.reverse(),J.push(y.join(" ")),z=[I.monthNames[1*x[1]-1],x[0]],I.showMonthAfterYear&&z.reverse(),J.push('<button data-action="setMonthList"'+(D.minView>=2?' disabled="" ':"")+' value="'+x.date+'" tabindex="-1">'+s(1*x[1]-1,x[0])+"</button>"),J.push('</div><div class="picker-grid"><table role="grid" aria-label="'+z.join(" ")+'"><thead><tr>'),J.push('<th class="week-header">'+I.weekHeader+"</th>"),f=I.firstDay;f<I.dayNamesShort.length;f++)J.push('<th class="day-'+f+'"><abbr title="'+I.dayNames[f]+'">'+I.dayNamesShort[f]+"</abbr></th>");for(f=I.firstDay;f--;)J.push('<th class="day-'+f+'"><abbr title="'+I.dayNames[f]+'">'+I.dayNamesShort[f]+"</abbr></th>");for(J.push('</tr></thead><tbody><tr class="ws-row-0">'),r=g.getWeek(K),J.push('<td class="week-cell">'+r+"</td>"),e=0;99>e;e++){if(q=e&&!(e%7),v=K.getMonth(),w=u!=v,h=K.getDay(),C=[],q&&w&&t>=5){J.push("</tr>");break}q&&(t++,J.push('</tr><tr class="ws-row-'+t+(w?" other-month-row":"")+'">'),r++,r>52&&(r=g.getWeek(K)),J.push('<td class="week-cell">'+r+"</td>")),e||h!=o.date.firstDay&&(i=h-o.date.firstDay,0>i&&(i+=7),K.setDate(K.getDate()-i),h=K.getDay(),v=K.getMonth(),w=u!=v),x=j(K),A='<td role="presentation" class="day-'+h+'"><button data-id="day-'+K.getDate()+'" role="gridcell" data-action="'+L+'" value="'+x.join("-")+'" type="button"',w?C.push("othermonth"):C.push("day-"+K.getDate()),x[0]==k[0]&&k[1]==x[1]&&k[2]==x[2]&&C.push("this-value"),H[0]==x[0]&&x[1]==H[1]&&x[2]==H[2]&&C.push("checked-value"),C.length&&(A+=' class="'+C.join(" ")+'"'),(!g.isInRange(x,F,G)||c.options.disableDays&&-1!=a.inArray(h,c.options.disableDays))&&(A+=' disabled=""'),J.push(A+' tabindex="-1">'+K.getDate()+"</button></td>"),K.setDate(K.getDate()+1)}J.push("</tbody></table></div></div>"),d==E-1&&(x=j(K),x[2]=1,m=g.isInRange(x,F,G)?{"data-action":"setDayList",value:x.date}:!1)}return{enabled:9,main:J.join(""),prev:l,next:m,yearPrev:p,yearNext:n,type:"Grid"}},g.getTimeList=function(b,c){var d,e,f,g,h,j='<div class="time-list picker-list ws-index-0">',k=0,l=0,m=23,n={min:a.prop(c.orig,"min"),max:a.prop(c.orig,"max"),step:a.prop(c.orig,"step")},p=(c.options,"");for("time"==c.type?d='<button type="button" disabled="">'+a.trim(a(c.orig).jProp("labels").text()||"").replace(/[\:\*]/g,"")+"</button>":(e=b[2].split("T"),b[2]=e[0],e[1]&&(b[3]=e[1]),p=' aria-label="'+b[2]+". "+o.date.monthNames[1*b[1]-1]+" "+b[0]+'"',d=s(1*b[1]-1,b[0],b[2]+". "),d='<button tabindex="-1" data-action="setDayList" value="'+b[0]+"-"+b[1]+"-"+b[2]+'" type="button">'+d+"</button>",h=b[0]+"-"+b[1]+"-"+b[2]+"T"),j+='<div class="ws-picker-header">'+d+"</div>",j+='<div class="picker-grid"><table role="grid"'+p+"><tbody><tr>";m>=k;k++)f=i.addZero(""+k)+":00",g=h?h+f:f,!k||k%4||(l++,j+='</tr><tr class="ws-row-'+l+'">'),j+='<td role="presentation"><button role="gridcell" data-action="changeInput" value="'+g+'" type="button" tabindex="-1"',c.isValid(g,n)||(j+=' disabled=""'),b==f&&(j+=' class="checked-value"'),j+=">"+c.formatValue(f)+"</button></td>";return j+="</tr></tbody></table></div></div>",{enabled:9,main:j,prev:!1,next:!1,type:"Grid"}},g.isInRange=function(a,b,c){var d,e=!0;for(d=0;d<a.length;d++){if(c[d]&&c[d]>a[d]){e=!1;break}if(!c[d]||c[d]!=a[d])break}if(e)for(d=0;d<a.length;d++){if(b[d]&&b[d]<a[d]){e=!1;break}if(!b[d]||b[d]!=a[d])break}return e},g.createMonthSelect=function(a,b,c,d){d||(d=o.date.monthNames);for(var e,f=0,h=[],j=a[1]-1;f<d.length;f++)e=j==f?' selected=""':"",(e||g.isInRange([a[0],f+1],b,c))&&h.push('<option value="'+a[0]+"-"+i.addZero(f+1)+'"'+e+">"+d[f]+"</option>");return h},g.createYearSelect=function(a,b,c,d,e){e||(e={start:a,step:1,label:a});var f,h=!0,i=!0,j=['<option selected="">'+e.label+"</option>"],k=0,l=function(a,f){var h,i;return e.step>1?(h=a+e.step-1,i=a+" \u2013 "+h):i=a,g.isInRange([a],b,c)||h&&g.isInRange([h],b,c)?(j[f]('<option value="'+(a+d)+'">'+i+"</option>"),!0):void 0};for(d||(d="");18>k&&(h||i);)k++,h&&(f=e.start-k*e.step,h=l(f,"unshift")),i&&(f=e.start+k*e.step,i=l(f,"push"));return j},function(){var c=function(a){return"get"+a+"List"},d=function(a){return"set"+a+"List"},e={date:"Day",week:"Day",month:"Month","datetime-local":"Time",time:"Time"},f=function(a,b,c){a[c]?b[c+"Element"].attr(a[c]).prop({disabled:!1}):b[c+"Element"].removeAttr("data-action").prop({disabled:!0})};a.each({setYearList:["Year","Month","Day","Time"],setMonthList:["Month","Day","Time"],setDayList:["Day","Time"],setTimeList:["Time"]},function(i,j){var k=j.map(c),l=j.map(d);h[i]=function(c,d,h,i){c=""+c;var m=h.options,n=c.split("-");i||(i=0),a.each(k,function(a,c){if(a>=i){var k=g[c](n,h);if(n.length<2||k.enabled>1||e[h.type]===j[a])return d.element.attr({"data-currentview":l[a]}).addClass("ws-size-"+m.size).data("pickercontent",{data:h,content:k,values:n}),d.bodyElement.html(k.main),f(k,d,"prev"),f(k,d,"next"),f(k,d,"yearPrev"),f(k,d,"yearNext"),b[k.type]&&new b[k.type](d.bodyElement.children(),d,k),d.element.trigger("pickerchange").filter('[data-vertical="bottom"]').triggerHandler("pospopover"),!1}})}})}(),g.showPickerContent=function(a,b){var c=a.options,d=a._popoverinit;a._popoverinit=!0,d||(g.commonInit(a,b),g.commonDateInit(a,b)),b.element.triggerHandler("updatepickercontent"),!d||c.restartView?h.setYearList(c.defValue||c.value,b,a,c.startView):h[b.element.attr("data-currentview")||"setYearList"](c.defValue||c.value,b,a,0),a._popoverinit=!0},g.commonDateInit=function(c,e){if(!c._commonDateInit){c._commonDateInit=!0;var f=c.options,i=function(){return a(this).is(".othermonth")&&"pointer"!=a(this).css("cursor")||e.actionFn({"data-action":a.attr(this,"data-action"),value:a(this).val()||a.attr(this,"value")}),!1},j=(new Date).getTime(),l=function(d){var f=[],h="",i="";d.options=c.getOptions()||{},a("div.ws-options",e.contentElement).remove(),a.each(d.options[0],function(a,b){var e=g.isInRange(a.split("-"),d.maxS,d.minS)?"":' disabled="" ';b&&(b=' <span class="ws-label">'+b+"</span>"),f.push('<li role="presentation"><button value="'+a+'" '+e+' data-action="changeInput" tabindex="-1"  role="option"><span class="ws-value">'+c.formatValue(a,!1)+"</span>"+b+"</button></li>")}),f.length&&(j++,d.options[1]&&(i="datalist-"+j,h='<h5 id="'+i+'">'+d.options[1]+"</h5>",i=' aria-labelledbyid="'+i+'" '),new b.ListBox(a('<div class="ws-options">'+h+'<ul role="listbox" '+i+">"+f.join("")+"</div>").insertAfter(e.bodyElement)[0],e,{noFocus:!0}))},m=function(){var d;e.isDirty&&(e.isDirty=!1,d=f.max.split("T"),f.maxS=d[0].split("-"),d[1]&&f.maxS.push(d[1]),d=f.min.split("T"),f.minS=d[0].split("-"),d[1]&&f.minS.push(d[1]),a("button",e.buttonRow).each(function(){var d;a(this).is(".ws-empty")?(d=o.date.clear,d||(d=n[""].date.clear||"clear",b.warn("could not get clear text from form cfg"))):a(this).is(".ws-current")&&(d=(o[c.type]||{}).currentText,d||(d=(n[""][[c.type]]||{}).currentText||(o.date||{}).currentText||"current",b.warn("could not get currentText from form cfg for "+c.type)),k[c.type]&&"time"!=c.type&&a.prop(this,"disabled",!g.isInRange(k[c.type].split("-"),f.maxS,f.minS))),d&&(a(this).text(d).attr({"aria-label":d}),b.assumeARIA&&a.attr(this,"aria-label",d))}),e.nextElement.attr({"aria-label":o.date.nextText}),e.prevElement.attr({"aria-label":o.date.prevText}),e.yearNextElement.attr({"aria-label":o.date.nextText}),e.yearPrevElement.attr({"aria-label":o.date.prevText}),l(f,f.maxS,f.minS),e.isVisible&&g.showPickerContent(c,e)),a("button.ws-empty",e.buttonRow).prop("disabled",a.prop(c.orig,"required")),e.isDirty=!1};"time"==c.type&&(f.minView=3,f.startView=3),f.minView||(f.minView=0),f.startView<f.minView&&(f.startView=f.minView,b.warn("wrong config for minView/startView.")),f.size||(f.size=1),e.actionFn=function(a){h[a["data-action"]]?h[a["data-action"]](a.value,e,c,0):b.warn("no action for "+a["data-action"])},e.contentElement.html('<div class="prev-controls"><button class="ws-super-prev" tabindex="0"></button><button class="ws-prev" tabindex="0"></button></div> <div class="next-controls"><button class="ws-next" tabindex="0"></button><button class="ws-super-next" tabindex="0"></button></div><div class="ws-picker-body"></div><div class="ws-button-row"><button type="button" class="ws-current" data-action="changeInput" value="'+k[c.type]+'" tabindex="0"></button> <button type="button" data-action="changeInput" value="" class="ws-empty" tabindex="0"></button></div>'),e.nextElement=a("button.ws-next",e.contentElement),e.prevElement=a("button.ws-prev",e.contentElement),e.yearNextElement=a("button.ws-super-next",e.contentElement),e.yearPrevElement=a("button.ws-super-prev",e.contentElement),e.bodyElement=a("div.ws-picker-body",e.contentElement),e.buttonRow=a("div.ws-button-row",e.contentElement),e.element.on("updatepickercontent",m),e.contentElement.on("click","button[data-action]",i).on("change","select[data-action]",i),a(f.orig).on("input",function(){var a;f.updateOnInput&&e.isVisible&&f.value&&(a=e.element.attr("data-currentview"))&&h[a](c.options.value,e,c,0)}),a(d).onTrigger("wslocalechange",c._propertyChange),f.inlinePicker&&(f.updateOnInput=!0)}}});
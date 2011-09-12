jQuery.webshims.ready("dom-support",function(e,f,q,o){var m=o.createElement("a");["poster","src"].forEach(function(l){f.defineNodeNamesProperty(l=="src"?["audio","video","source"]:["video"],l,{prop:{get:function(){var n=e.attr(this,l);if(n==null)return"";m.setAttribute("href",n);return m.href},set:function(n){e.attr(this,l,n)}}})});["autoplay","controls"].forEach(function(e){f.defineNodeNamesBooleanProperty(["audio","video"],e)});f.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},
HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop")});
jQuery.webshims.register("mediaelement-swf",function(e,f,q,o,m,l){var n=f.mediaelement,t=q.swfobject,D=Modernizr.audio&&Modernizr.video,E=t.hasFlashPlayerVersion("9.0.115"),y,B={paused:!0,ended:!1,currentSrc:"",duration:q.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(b){if(b)f.error("buffered index size error");else return 0},end:function(b){if(b)f.error("buffered index size error");else return 0},length:0}},i=Object.keys(B),v={currentTime:0,volume:1,
muted:!1};Object.keys(v);var z=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,_callMeta:!1,currentTime:0,_ppFlag:m},B,v),A=/^jwplayer-/,j=function(b){if(b=o.getElementById(b.replace(A,"")))return b=f.data(b,"mediaelement"),b.isActive=="flash"?b:null},s=function(b){return(b=f.data(b,"mediaelement"))&&b.isActive=="flash"?b:null},k=function(b,a){a=e.Event(a);a.preventDefault();e.event.trigger(a,m,b)},w,u=f.cfg.basePath+"swf/jwwebshims.swf",d=
f.cfg.basePath+"jwplayer/player.swf";E&&f.ready("WINDOWLOAD",function(){y||e.ajax(u,f.xhrPreloadOption)});f.extendUNDEFProp(l.jwParams,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent"});f.extendUNDEFProp(l.jwVars,{screencolor:"ffffffff"});f.extendUNDEFProp(l.jwAttrs,{bgcolor:"#000000"});n.jwEvents={View:{PLAY:function(b){var a=j(b.id);if(a&&!a.stopPlayPause&&(a._ppFlag=!0,a.paused==b.state)){a.paused=!b.state;if(a.ended)a.ended=!1;k(a._elem,b.state?"play":"pause")}}},Model:{BUFFER:function(b){var a=
j(b.id);if(a&&a._bufferedEnd!=b.percentage){a.networkState=b.percentage==100?1:2;if(!a.duration){try{if(a.duration=a.jwapi.getPlaylist()[0].duration,a.duration<=0)a.duration=q.NaN}catch(d){}a.duration&&(k(a._elem,"durationchange"),(a._elemNodeName=="audio"||a._callMeta)&&this.META(e.extend({duration:a.duration},b),a))}if(a.ended)a.ended=!1;if(a.duration){if(b.percentage>1&&a.readyState<3)a.readyState=3,k(a._elem,"canplay");if(a._bufferedEnd&&a._bufferedEnd>b.percentage)a._bufferedStart=a.currentTime||
0;a._bufferedEnd=b.percentage;a.buffered.length=1;if(b.percentage==100)a.networkState=1,a.readyState=4;e.event.trigger("progress",m,a._elem,!0)}}},META:function(b,a){a=a&&a.networkState?a:j(b.id);if("duration"in b){if(a&&!a._metadata){a._metadata=!0;var d=a.duration;a.duration=b.duration;a.videoHeight=b.height||0;a.videoWidth=b.width||0;if(!a.networkState)a.networkState=2;if(a.readyState<1)a.readyState=1;d!==a.duration&&k(a._elem,"durationchange");k(a._elem,"loadedmetadata")}}else a._callMeta=!0},
TIME:function(b){var a=j(b.id);if(a&&a.currentTime!==b.position){a.currentTime=b.position;if(a.readyState<2)a.readyState=2;if(a.ended)a.ended=!1;k(a._elem,"timeupdate")}},STATE:function(b){var a=j(b.id);if(a)switch(b.newstate){case "BUFFERING":if(a.readyState>1)a.readyState=1;if(a.ended)a.ended=!1;k(a._elem,"waiting");break;case "PLAYING":a.paused=!1;a._ppFlag=!0;if(a.readyState<3)a.readyState=3,k(a._elem,"canplay");if(a.ended)a.ended=!1;k(a._elem,"playing");break;case "PAUSED":if(!a.paused&&!a.stopPlayPause)a.paused=
!0,a._ppFlag=!0,k(a._elem,"pause");break;case "COMPLETED":if(a.readyState<4)a.readyState=4;a.ended=!0;k(a._elem,"ended")}}},Controller:{ERROR:function(b){var a=j(b.id);a&&n.setError(a._elem,b.message)},SEEK:function(b){var a=j(b.id);if(a){if(a.ended)a.ended=!1;if(a.paused)try{a.jwapi.sendEvent("play","false")}catch(d){}if(a.currentTime!=b.position)a.currentTime=b.position,k(a._elem,"timeupdate")}},VOLUME:function(b){var a=j(b.id);if(a&&(b=b.percentage/100,a.volume!=b))a.volume=b,k(a._elem,"volumechange")},
MUTE:function(b){if(!w||!b.state){var a=j(b.id);if(a&&a.muted!=b.state)a.muted=b.state,k(a._elem,"volumechange")}}}};var c=function(b){e.each(n.jwEvents,function(a,d){e.each(d,function(d){b.jwapi["add"+a+"Listener"](d,"jQuery.webshims.mediaelement.jwEvents."+a+"."+d)})})},h=function(b){b&&(b._ppFlag===m&&e.prop(b._elem,"autoplay")||!b.paused)&&setTimeout(function(){if(b.isActive=="flash"&&(b._ppFlag===m||!b.paused))try{e(b._elem).play()}catch(a){}},1)},g=function(b){if(b&&b._elemNodeName=="video"){var a,
d,c,h={},p,r,n,g=function(g,f){if(f&&g&&!(f<1||g<1||b.isActive!="flash"))if(a&&(a.remove(),a=!1),h.width=g,h.height=f,clearTimeout(r),d=b._elem.style.width=="auto",c=b._elem.style.height=="auto",d||c){p=p||e(b._elem).getShadowElement();var t;d&&!c?(t=p.height(),g*=t/f,f=t):!d&&c&&(t=p.width(),f*=t/g,g=t);n=!0;setTimeout(function(){n=!1},9);p.css({width:g,height:f})}},f=function(){if(!(b.isActive!="flash"||e.prop(b._elem,"readyState")&&e.prop(this,"videoWidth"))){var p=e.prop(b._elem,"poster");if(p&&
(d=b._elem.style.width=="auto",c=b._elem.style.height=="auto",d||c))a&&(a.remove(),a=!1),a=e('<img style="position: absolute; height: auto; width: auto; top: 0px; left: 0px; visibility: hidden;" />'),a.bind("load error alreadycomplete",function(){clearTimeout(r);var b=this,d=b.naturalWidth||b.width||b.offsetWidth,c=b.naturalHeight||b.height||b.offsetHeight;c&&d?(g(d,c),b=null):setTimeout(function(){d=b.naturalWidth||b.width||b.offsetWidth;c=b.naturalHeight||b.height||b.offsetHeight;g(d,c);a&&(a.remove(),
a=!1);b=null},9);e(this).unbind()}).prop("src",p).appendTo("body").each(function(){this.complete||this.error?e(this).triggerHandler("alreadycomplete"):(clearTimeout(r),r=setTimeout(function(){e(b._elem).triggerHandler("error")},9999))})}};e(b._elem).bind("loadedmetadata",function(){g(e.prop(this,"videoWidth"),e.prop(this,"videoHeight"))}).bind("emptied",f).bind("swfstageresize",function(){n||g(h.width,h.height)}).triggerHandler("swfstageresize");f();e.prop(b._elem,"readyState")&&g(e.prop(b._elem,
"videoWidth"),e.prop(b._elem,"videoHeight"))}};n.playerResize=function(b){b&&(b=o.getElementById(b.replace(A,"")))&&e(b).triggerHandler("swfstageresize")};e(o).bind("emptied",function(b){b=s(b.target);h(b)});var C;n.jwPlayerReady=function(b){var a=j(b.id);if(a&&a.jwapi){clearTimeout(C);a.jwData=b;a.wasSwfReady?e(a._elem).mediaLoad():(b=parseFloat(b.version,10),(b<5.6||b>=6)&&f.warn("mediaelement-swf is only testet with jwplayer 5.6+"),e.prop(a._elem,"volume",a.volume),e.prop(a._elem,"muted",a.muted),
c(a));a.wasSwfReady=!0;var b=a.actionQueue.length,d=0,g;if(b&&a.isActive=="flash")for(;a.actionQueue.length&&b>d;)d++,g=a.actionQueue.shift(),a.jwapi[g.fn].apply(a.jwapi,g.args);if(a.actionQueue.length)a.actionQueue=[];h(a)}};var G=e.noop;if(D){var I={play:1,playing:1},F=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"].map(function(b){return b+".webshimspolyfill"}).join(" "),H=function(b){var a=f.data(b.target,"mediaelement");a&&(b.originalEvent&&
b.originalEvent.type===b.type)==(a.activating=="flash")&&(b.stopImmediatePropagation(),I[b.type]&&a.isActive!=a.activating&&e(b.target).pause())};e(o).bind(F,H);G=function(b){e(b).unbind(F).bind(F,H)}}n.setActive=function(b,a,d){d||(d=f.data(b,"mediaelement"));if(d&&d.isActive!=a){a!="html5"&&a!="flash"&&f.warn("wrong type for mediaelement activating: "+a);var c=f.data(b,"shadowData");d.activating=a;e(b).pause();d.isActive=a;a=="flash"?(c.shadowElement=c.shadowFocusElement=d.shadowElem[0],e(b).hide().getShadowElement().show()):
(e(b).show().getShadowElement().hide(),c.shadowElement=c.shadowFocusElement=!1)}};var J=function(){var b=["_bufferedEnd","_bufferedStart","_metadata","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth","_callMeta"],a=b.length;return function(d){if(d){for(var c=a,e=d.networkState;--c;)delete d[b[c]];d.actionQueue=[];d.buffered.length=0;e&&k(d._elem,"emptied")}}}();n.createSWF=function(b,a,c){if(E){y=!0;var h=e.extend({},l.jwVars,{image:e.prop(b,
"poster")||"",file:a.srcProp}),i=e(b).data("jwvars")||{};if(c&&c.swfCreated)n.setActive(b,"flash",c),J(c),c.currentSrc=a.srcProp,e.extend(h,i),l.changeJW(h,b,a,c,"load"),x(b,"sendEvent",["LOAD",h]);else{var p=e.prop(b,"controls"),r="jwplayer-"+f.getID(b),k=e.extend({},l.jwParams,e(b).data("jwparams")),j=b.nodeName.toLowerCase(),o=e.extend({},l.jwAttrs,{name:r,id:r},e(b).data("jwattrs")),m=e('<div class="polyfill-'+j+' polyfill-mediaelement" id="wrapper-'+r+'"><div id="'+r+'"></div>').css({position:"relative",
overflow:"hidden"});j=="audio"&&!p?m.css({width:0,height:0}):m.css({width:b.style.width||e(b).width(),height:b.style.height||e(b).height()});m.insertBefore(b);c=f.data(b,"mediaelement",f.objectCreate(z,{actionQueue:{value:[]},shadowElem:{value:m},_elemNodeName:{value:j},_elem:{value:b},currentSrc:{value:a.srcProp},swfCreated:{value:!0},buffered:{value:{start:function(a){if(a>=c.buffered.length)f.error("buffered index size error");else return 0},end:function(a){if(a>=c.buffered.length)f.error("buffered index size error");
else return(c.duration-c._bufferedStart)*c._bufferedEnd/100+c._bufferedStart},length:0}}}));D&&e.extend(c,{volume:e.prop(b,"volume"),muted:e.prop(b,"muted")});e.extend(h,{id:r,controlbar:p?l.jwVars.controlbar||(j=="video"?"over":"bottom"):"none",icons:""+(p&&j=="video")},i,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"});h.plugins?h.plugins+=","+u:h.plugins=u;f.addShadowDom(b,m);G(b);n.setActive(b,"flash",c);l.changeJW(h,b,a,c,"embed");g(c);t.embedSWF(d,r,"100%","100%","9.0.0",!1,h,k,o,
function(a){if(a.success)c.jwapi=a.ref,p||e(a.ref).attr("tabindex","-1").css("outline","none"),C||(clearTimeout(C),C=setTimeout(function(){var b=e(a.ref).css({minHeight:"2px",minWidth:"2px",display:"block"});b[0].offsetWidth>1&&b[0].offsetHeight>1&&location.protocol.indexOf("file:")===0?f.warn("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(b[0].offsetWidth<2||b[0].offsetHeight<
2)&&f.info("JS-SWF connection can't be established on hidden or unconnected flash objects")},8E3))})}}else setTimeout(function(){e(b).mediaLoad()},1)};var x=function(b,a,d,c){return(c=c||s(b))?(c.jwapi&&c.jwapi[a]?c.jwapi[a].apply(c.jwapi,d||[]):(c.actionQueue.push({fn:a,args:d}),c.actionQueue.length>10&&setTimeout(function(){c.actionQueue.length>5&&c.actionQueue.shift()},99)),c):!1};["audio","video"].forEach(function(b){var a={},d,c=function(c){b=="audio"&&(c=="videoHeight"||c=="videoWidth")||(a[c]=
{get:function(){var a=s(this);return a?a[c]:D&&d[c].prop._supget?d[c].prop._supget.apply(this):z[c]},writeable:!1})},h=function(b,d){c(b);delete a[b].writeable;a[b].set=d};h("volume",function(a){var b=s(this);if(b){if(a*=100,!isNaN(a)){(a<0||a>100)&&f.error("volume greater or less than allowed "+a/100);b.muted&&(w=!0);x(this,"sendEvent",["VOLUME",a],b);if(w){try{b.jwapi.sendEvent("mute","true")}catch(c){}w=!1}setTimeout(function(){a/=100;if(!(b.volume==a||b.isActive!="flash"))b.volume=a,k(b._elem,
"volumechange"),b=null},1)}}else if(d.volume.prop._supset)return d.volume.prop._supset.apply(this,arguments)});h("muted",function(a){var b=s(this);if(b)a=!!a,x(this,"sendEvent",["mute",""+a],b),setTimeout(function(){if(!(b.muted==a||b.isActive!="flash"))b.muted=a,k(b._elem,"volumechange"),b=null},1);else if(d.muted.prop._supset)return d.muted.prop._supset.apply(this,arguments)});h("currentTime",function(a){var b=s(this);if(b){if(a*=1,!isNaN(a)){if(b.paused)clearTimeout(b.stopPlayPause),b.stopPlayPause=
setTimeout(function(){b.paused=!0;b.stopPlayPause=!1},50);x(this,"sendEvent",["SEEK",""+a],b);if(b.paused){if(b.readyState>0)b.currentTime=a,k(b._elem,"timeupdate");try{b.jwapi.sendEvent("play","false")}catch(c){}}}}else if(d.currentTime.prop._supset)return d.currentTime.prop._supset.apply(this,arguments)});["play","pause"].forEach(function(b){a[b]={value:function(){var a=s(this);if(a)a.stopPlayPause&&clearTimeout(a.stopPlayPause),x(this,"sendEvent",["play",b=="play"],a),setTimeout(function(){if(a.isActive==
"flash"&&(a._ppFlag=!0,a.paused!=(b!="play")))a.paused=b!="play",k(a._elem,b)},1);else if(d[b].prop._supvalue)return d[b].prop._supvalue.apply(this,arguments)}}});i.forEach(c);f.onNodeNamesPropertyModify(b,"controls",function(a,d){var c=x(this,d?"showControls":"hideControls",[b]);e(this)[d?"addClass":"removeClass"]("webshims-controls");c&&e(c.jwapi).attr("tabindex",d?"0":"-1")});d=f.defineNodeNameProperties(b,a,"prop")});if(E&&e.browser.msie&&f.borwserVersion<9){var K=e.cleanData;e.cleanData=function(b){b&&
b[0]&&b[0].nodeType==1&&e("object",b).add(e(b).filter("object")).each(function(){try{for(var a in this)typeof this[a]=="function"&&(this[a]=null)}catch(b){}});return K.apply(this,arguments)}}});
(function(e,f,q){var o=f.audio&&f.video,m=!1;if(o){var l=document.createElement("video");f.videoBuffered="buffered"in l;m="loop"in l;f.videoBuffered||(q.addPolyfill("mediaelement-native-fix",{feature:"mediaelement",test:f.videoBuffered,dependencies:["dom-support"]}),q.cfg.waitReady&&e.readyWait++,q.loader.loadScript("mediaelement-native-fix",function(){q.cfg.waitReady&&e.ready(!0)}))}e.webshims.ready("dom-support",function(e,f,l,q,y){var B=f.cfg.mediaelement,i=f.mediaelement,v=!l.swfobject||swfobject.hasFlashPlayerVersion("9.0.115"),
z=function(){f.ready("mediaelement-swf",function(){if(!i.createSWF)f.modules["mediaelement-swf"].test=!1,delete e.event.special["mediaelement-swfReady"],f.loader.loadList(["mediaelement-swf"])})},A=function(d,c){var d=e(d),h={src:d.attr("src")||"",elem:d,srcProp:d.prop("src")};if(!h.src)return h;var g=d.attr("type");if(g)h.type=g,h.container=e.trim(g.split(";")[0]);else if(c||(c=d[0].nodeName.toLowerCase(),c=="source"&&(c=(d.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),
g=i.getTypeForSrc(h.src,c))h.type=g,h.container=g,f.warn("you should always provide a proper mime-type using the source element. "+h.src+" detected as: "+g),e.nodeName(d[0],"source")&&d.attr("type",g);if(g=d.attr("media"))h.media=g;return h};f.loader.loadList(["swfobject"]);f.ready("swfobject",function(){(v=swfobject.hasFlashPlayerVersion("9.0.115"))&&f.ready("WINDOWLOAD",z)});o&&f.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]);
i.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r"],"audio/wav":["wav"],"audio/x-m4a":["m4a"],"audio/x-m4p":["m4p"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"]}};
i.mimeTypes.source=e.extend({},i.mimeTypes.audio,i.mimeTypes.video);i.getTypeForSrc=function(d,c){if(d.indexOf("youtube.com/watch?")!=-1)return"video/youtube";var d=d.split("?")[0].split("."),d=d[d.length-1],f;e.each(i.mimeTypes[c],function(c,e){if(e.indexOf(d)!==-1)return f=c,!1});return f};i.srces=function(d,c){d=e(d);if(c)d.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(c)||(c=[c]),c.forEach(function(c){var e=q.createElement("source");typeof c=="string"&&(c={src:c});e.setAttribute("src",
c.src);c.type&&e.setAttribute("type",c.type);c.media&&e.setAttribute("media",c.media);d.append(e)});else{var c=[],f=d[0].nodeName.toLowerCase(),g=A(d,f);g.src?c.push(g):e("source",d).each(function(){g=A(this,f);g.src&&c.push(g)});return c}};e.fn.loadMediaSrc=function(d,c){return this.each(function(){c!==y&&(e(this).removeAttr("poster"),c&&e.attr(this,"poster",c));i.srces(this,d);e(this).mediaLoad()})};i.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p",
"video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","jwplayer/jwplayer","video/youtube"];i.canSwfPlaySrces=function(d,c){var f="";v&&(d=e(d),c=c||i.srces(d),e.each(c,function(d,c){if(c.container&&c.src&&i.swfMimeTypes.indexOf(c.container)!=-1)return f=c,!1}));return f};var j={};i.canNativePlaySrces=function(d,c){var f="";if(o){var d=e(d),g=(d[0].nodeName||"").toLowerCase();if(!j[g])return f;c=c||i.srces(d);e.each(c,
function(c,e){if(e.type&&j[g].prop._supvalue.call(d[0],e.type))return f=e,!1})}return f};i.setError=function(d,c){c||(c="can't play sources");e(d).data("mediaerror",c);f.warn("mediaelementError: "+c);setTimeout(function(){e(d).data("mediaerror")&&e(d).trigger("mediaerror")},1)};var s=function(){var d;return function(c,e,g){f.ready("mediaelement-swf",function(){i.createSWF?i.createSWF(c,e,g):d||(d=!0,z(),s(c,e,g))})}}(),k=function(d,c,e,f,j){e||e!==!1&&c&&c.isActive=="flash"?(e=i.canSwfPlaySrces(d,
f))?s(d,e,c):j?i.setError(d,!1):k(d,c,!1,f,!0):(e=i.canNativePlaySrces(d,f))?c&&c.isActive=="flash"&&i.setActive(d,"html5",c):j?i.setError(d,!1):k(d,c,!0,f,!0)},w=/^(?:embed|object)$/i,u=function(d,c){var h=f.data(d,"mediaelementBase")||f.data(d,"mediaelementBase",{}),g=i.srces(d),j=d.parentNode;clearTimeout(h.loadTimer);e.data(d,"mediaerror",!1);if(g.length&&j&&!w.test(j.nodeName||""))c=c||f.data(d,"mediaelement"),k(d,c,B.preferFlash||y,g)};e(q).bind("ended",function(d){var c=f.data(d.target,"mediaelement");
(!m||c&&c.isActive!="html5"||e.prop(d.target,"loop"))&&setTimeout(function(){!e.prop(d.target,"paused")&&e.prop(d.target,"loop")&&e(d.target).prop("currentTime",0).play()},1)});m||f.defineNodeNamesBooleanProperty(["audio","video"],"loop");f.addReady(function(d,c){e("video, audio",d).add(c.filter("video, audio")).each(function(){u(this)})});["audio","video"].forEach(function(d){var c=f.defineNodeNameProperty(d,"load",{prop:{value:function(){var d=f.data(this,"mediaelement");u(this,d);o&&(!d||d.isActive==
"html5")&&c.prop._supvalue&&c.prop._supvalue.apply(this,arguments)}}});j[d]=f.defineNodeNameProperty(d,"canPlayType",{prop:{value:function(c){var f="";o&&j[d].prop._supvalue&&(f=j[d].prop._supvalue.call(this,c),f=="no"&&(f=""));!f&&v&&(c=e.trim(c.split(";")[0]),i.swfMimeTypes.indexOf(c)!=-1&&(f="maybe"));return f}}})});f.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var d=this,c=f.data(d,"mediaelementBase")||f.data(d,"mediaelementBase",{});clearTimeout(c.loadTimer);
c.loadTimer=setTimeout(function(){u(d);d=null},9)}});f.isReady("mediaelement-core",!0)})})(jQuery,Modernizr,jQuery.webshims);

(function(e){if(!navigator.geolocation){var t=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatible with this plugin"},1)},n=0,a=e.webshims.cfg.geolocation||{};navigator.geolocation=function(){var r,i={getCurrentPosition:function(n,i,o){var s,u,l,c=2,p=function(){if(!l)if(r){if(l=!0,n(e.extend({timestamp:(new Date).getTime()},r)),f(),window.JSON&&window.sessionStorage)try{sessionStorage.setItem("storedGeolocationData654321",JSON.stringify(r))}catch(t){}}else i&&!c&&(l=!0,f(),i({code:2,message:"POSITION_UNAVAILABLE"}))},d=function(){c--,h(),p()},f=function(){e(document).unbind("google-loader",f),clearTimeout(u),clearTimeout(s)},h=function(){if(r||!window.google||!google.loader||!google.loader.ClientLocation)return!1;var t=google.loader.ClientLocation;return r={coords:{latitude:t.latitude,longitude:t.longitude,altitude:null,accuracy:43e3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:e.extend({streetNumber:"",street:"",premises:"",county:"",postalCode:""},t.address)},!0},m=function(){if(!r&&(h(),!r&&window.JSON&&window.sessionStorage))try{r=sessionStorage.getItem("storedGeolocationData654321"),r=r?JSON.parse(r):!1,r.coords||(r=!1)}catch(e){r=!1}};return m(),r?(setTimeout(p,1),void 0):a.confirmText&&!confirm(a.confirmText.replace("{location}",location.hostname))?(i&&i({code:1,message:"PERMISSION_DENIED"}),void 0):(e.ajax({url:"http://freegeoip.net/json/",dataType:"jsonp",cache:!0,jsonp:"callback",success:function(e){c--,e&&(r=r||{coords:{latitude:e.latitude,longitude:e.longitude,altitude:null,accuracy:43e3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:{city:e.city,country:e.country_name,countryCode:e.country_code,county:"",postalCode:e.zipcode,premises:"",region:e.region_name,street:"",streetNumber:""}},p())},error:function(){c--,p()}}),clearTimeout(u),window.google&&window.google.loader?c--:u=setTimeout(function(){a.destroyWrite&&(document.write=t,document.writeln=t),e(document).one("google-loader",d),webshims.loader.loadScript("http://www.google.com/jsapi",!1,"google-loader")},800),s=o&&o.timeout?setTimeout(function(){f(),i&&i({code:3,message:"TIMEOUT"})},o.timeout):setTimeout(function(){c=0,p()},1e4),void 0)},clearWatch:e.noop};return i.watchPosition=function(e,t,a){return i.getCurrentPosition(e,t,a),n++,n},i}(),webshims.isReady("geolocation",!0)}})(jQuery),webshims.register("details",function(e,t,n,a,r,i){var o=function(t){var n=e(t).parent("details");return n[0]&&n.children(":first").get(0)===t?n:r},s=function(t,n){t=e(t),n=e(n);var a=e.data(n[0],"summaryElement");e.data(t[0],"detailsElement",n),a&&t[0]===a[0]||(a&&(a.hasClass("fallback-summary")?a.remove():a.unbind(".summaryPolyfill").removeData("detailsElement").removeAttr("role").removeAttr("tabindex").removeAttr("aria-expanded").removeClass("summary-button").find("span.details-open-indicator").remove()),e.data(n[0],"summaryElement",t),n.prop("open",n.prop("open")))},u=function(t){var n=e.data(t,"summaryElement");return n||(n=e("> summary:first-child",t),n[0]?s(n,t):(e(t).prependPolyfill('<summary class="fallback-summary">'+i.text+"</summary>"),n=e.data(t,"summaryElement"))),n};t.createElement("summary",function(){var n=o(this);if(n&&!e.data(this,"detailsElement")){var a,r,i=e.attr(this,"tabIndex")||"0";s(this,n),e(this).on({"focus.summaryPolyfill":function(){e(this).addClass("summary-has-focus")},"blur.summaryPolyfill":function(){e(this).removeClass("summary-has-focus")},"mouseenter.summaryPolyfill":function(){e(this).addClass("summary-has-hover")},"mouseleave.summaryPolyfill":function(){e(this).removeClass("summary-has-hover")},"click.summaryPolyfill":function(t){var n=o(this);if(n){if(!r&&t.originalEvent)return r=!0,t.stopImmediatePropagation(),t.preventDefault(),e(this).trigger("click"),r=!1,!1;clearTimeout(a),a=setTimeout(function(){t.isDefaultPrevented()||n.prop("open",!n.prop("open"))},0)}},"keydown.summaryPolyfill":function(t){13!=t.keyCode&&32!=t.keyCode||t.isDefaultPrevented()||(r=!0,t.preventDefault(),e(this).trigger("click"),r=!1)}}).attr({tabindex:i,role:"button"}).prepend('<span class="details-open-indicator" />'),t.moveToFirstEvent(this,"click")}});var l;t.defineNodeNamesBooleanProperty("details","open",function(t){var n=e(e.data(this,"summaryElement"));if(n){var a=t?"removeClass":"addClass",r=e(this);if(!l&&i.animate){r.stop().css({width:"",height:""});var o={width:r.width(),height:r.height()}}if(n.attr("aria-expanded",""+t),r[a]("closed-details-summary").children().not(n[0])[a]("closed-details-child"),!l&&i.animate){var s={width:r.width(),height:r.height()};r.css(o).animate(s,{complete:function(){e(this).css({width:"",height:""})}})}}}),t.createElement("details",function(){l=!0,u(this),e.prop(this,"open",e.prop(this,"open")),l=!1})}),webshims.register("mediaelement-jaris",function(e,t,n,a,r,i){"use strict";var o=t.mediaelement,s=n.swfmini,u=Modernizr.audio&&Modernizr.video,l=s.hasFlashPlayerVersion("9.0.115"),c=0,p={paused:!0,ended:!1,currentSrc:"",duration:n.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(e){return e?(t.error("buffered index size error"),r):0},end:function(e){return e?(t.error("buffered index size error"),r):0},length:0}},d=Object.keys(p),f={currentTime:0,volume:1,muted:!1};Object.keys(f);var h=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,_ppFlag:r,_calledMeta:!1,lastDuration:0},p,f),m=function(e){try{e.nodeName}catch(n){return null}var a=t.data(e,"mediaelement");return a&&"third"==a.isActive?a:null},v=function(t,n){n=e.Event(n),n.preventDefault(),e.event.trigger(n,r,t)},g=i.playerPath||t.cfg.basePath+"swf/"+(i.playerName||"JarisFLVPlayer.swf");t.extendUNDEFProp(i.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"}),t.extendUNDEFProp(i.vars,{controltype:"1",jsapi:"1"}),t.extendUNDEFProp(i.attrs,{bgcolor:"#000000"});var y=function(e,t){3>e&&clearTimeout(t._canplaythroughTimer),e>=3&&3>t.readyState&&(t.readyState=e,v(t._elem,"canplay"),t.paused||v(t._elem,"playing"),clearTimeout(t._canplaythroughTimer),t._canplaythroughTimer=setTimeout(function(){y(4,t)},4e3)),e>=4&&4>t.readyState&&(t.readyState=e,v(t._elem,"canplaythrough")),t.readyState=e};e.extend(e.event.customEvent,{updatemediaelementdimensions:!0,flashblocker:!0,swfstageresize:!0,mediaelementapichange:!0}),o.jarisEvent={};var b,w={onPlayPause:function(e,t,n){var a,r;if(null==n)try{a=t.api.api_get("isPlaying")}catch(i){}else a=n;a==t.paused&&(t.paused=!a,r=t.paused?"pause":"play",t._ppFlag=!0,v(t._elem,r),3>t.readyState&&y(3,t),t.paused||v(t._elem,"playing"))},onNotBuffering:function(e,t){y(3,t)},onDataInitialized:function(e,t){var n,a=t.duration;t.duration=e.duration,a==t.duration||isNaN(t.duration)||t._calledMeta&&2>(n=Math.abs(t.lastDuration-t.duration))||(t.videoHeight=e.height,t.videoWidth=e.width,t.networkState||(t.networkState=2),1>t.readyState&&y(1,t),clearTimeout(t._durationChangeTimer),t._calledMeta&&t.duration?t._durationChangeTimer=setTimeout(function(){t.lastDuration=t.duration,v(t._elem,"durationchange")},n>50?0:n>9?9:99):(t.lastDuration=t.duration,t.duration&&v(t._elem,"durationchange"),t._calledMeta||v(t._elem,"loadedmetadata")),t._calledMeta=!0)},onBuffering:function(e,t){t.ended&&(t.ended=!1),y(1,t),v(t._elem,"waiting")},onTimeUpdate:function(e,t){t.ended&&(t.ended=!1),3>t.readyState&&(y(3,t),v(t._elem,"playing")),v(t._elem,"timeupdate")},onProgress:function(t,n){if(n.ended&&(n.ended=!1),n.duration&&!isNaN(n.duration)){var a=t.loaded/t.total;a>.02&&.2>a?y(3,n):a>.2&&(a>.99&&(n.networkState=1),y(4,n)),n._bufferedEnd&&n._bufferedEnd>a&&(n._bufferedStart=n.currentTime||0),n._bufferedEnd=a,n.buffered.length=1,e.event.trigger("progress",r,n._elem,!0)}},onPlaybackFinished:function(e,t){4>t.readyState&&y(4,t),t.ended=!0,v(t._elem,"ended")},onVolumeChange:function(e,t){(t.volume!=e.volume||t.muted!=e.mute)&&(t.volume=e.volume,t.muted=e.mute,v(t._elem,"volumechange"))},ready:function(){var n=function(e){var t=!0;try{e.api.api_get("volume")}catch(n){t=!1}return t};return function(a,i){var o=0,s=function(){return o>9?(i.tryedReframeing=0,r):(o++,i.tryedReframeing++,n(i)?(i.wasSwfReady=!0,i.tryedReframeing=0,x(i),T(i)):6>i.tryedReframeing?3>i.tryedReframeing?(i.reframeTimer=setTimeout(s,9),i.shadowElem.css({overflow:"visible"}),setTimeout(function(){i.shadowElem.css({overflow:"hidden"})},1)):(i.shadowElem.css({overflow:"hidden"}),e(i._elem).mediaLoad()):(clearTimeout(i.reframeTimer),t.error("reframing error")),r)};i&&i.api&&(i.tryedReframeing||(i.tryedReframeing=0),clearTimeout(b),clearTimeout(i.reframeTimer),i.shadowElem.removeClass("flashblocker-assumed"),o?i.reframeTimer=setTimeout(s,9):s())}}()};w.onMute=w.onVolumeChange;var T=function(e){var n,a=e.actionQueue.length,r=0;if(a&&"third"==e.isActive)for(;e.actionQueue.length&&a>r;){r++,n=e.actionQueue.shift();try{e.api[n.fn].apply(e.api,n.args)}catch(i){t.warn(i)}}e.actionQueue.length&&(e.actionQueue=[])},x=function(t){t&&((t._ppFlag===r&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===r||!t.paused))try{e(t._elem).play(),t._ppFlag=!0}catch(n){}},1),t.muted&&e.prop(t._elem,"muted",!0),1!=t.volume&&e.prop(t._elem,"volume",t.volume))},N=e.noop;if(u){var E={play:1,playing:1},k=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],A=k.map(function(e){return e+".webshimspolyfill"}).join(" "),C=function(n){var a=t.data(n.target,"mediaelement");if(a){var r=n.originalEvent&&n.originalEvent.type===n.type;r==("third"==a.activating)&&(n.stopImmediatePropagation(),E[n.type]&&a.isActive!=a.activating&&e(n.target).pause())}};N=function(n){e(n).off(A).on(A,C),k.forEach(function(e){t.moveToFirstEvent(n,e)})},N(a)}o.setActive=function(n,a,r){if(r||(r=t.data(n,"mediaelement")),r&&r.isActive!=a){"html5"!=a&&"third"!=a&&t.warn("wrong type for mediaelement activating: "+a);var i=t.data(n,"shadowData");r.activating=a,e(n).pause(),r.isActive=a,"third"==a?(i.shadowElement=i.shadowFocusElement=r.shadowElem[0],e(n).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(e(n).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),i.shadowElement=i.shadowFocusElement=!1),e(n).trigger("mediaelementapichange")}};var S=function(){var e=["_calledMeta","lastDuration","_bufferedEnd","_bufferedStart","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth"],t=e.length;return function(n){if(n){var a=t,r=n.networkState;for(y(0,n),clearTimeout(n._durationChangeTimer);--a>-1;)delete n[e[a]];n.actionQueue=[],n.buffered.length=0,r&&v(n._elem,"emptied")}}}(),_=function(t,n){var a=t._elem,r=t.shadowElem;e(a)[n?"addClass":"removeClass"]("webshims-controls"),"audio"!=t._elemNodeName||n?r.css({width:a.style.width||e(a).width(),height:a.style.height||e(a).height()}):r.css({width:0,height:0})},P=function(){var t={"":1,auto:1};return function(n){var a=e.attr(n,"preload");return null==a||"none"==a||e.prop(n,"autoplay")?!1:(a=e.prop(n,"preload"),!!(t[a]||"metadata"==a&&e(n).is(".preload-in-doubt, video:not([poster])")))}}(),D={A:/&amp;/g,a:/&/g,e:/\=/g,q:/\?/g},F=function(e){return e.replace?e.replace(D.A,"%26").replace(D.a,"%26").replace(D.e,"%3D").replace(D.q,"%3F"):e};o.createSWF=function(n,a,p){if(!l)return setTimeout(function(){e(n).mediaLoad()},1),r;1>c?c=1:c++,p||(p=t.data(n,"mediaelement")),(e.attr(n,"height")||e.attr(n,"width"))&&t.warn("width or height content attributes used. Webshims only uses CSS (computed styles or inline styles) to detect size of a video/audio");var d,f="audio/rtmp"==a.type||"video/rtmp"==a.type,m=e.extend({},i.vars,{poster:F(e.attr(n,"poster")&&e.prop(n,"poster")||""),source:F(a.streamId||a.srcProp),server:F(a.server||"")}),v=e(n).data("vars")||{},y=e.prop(n,"controls"),T="jarisplayer-"+t.getID(n),x=e.extend({},i.params,e(n).data("params")),E=n.nodeName.toLowerCase(),k=e.extend({},i.attrs,{name:T,id:T},e(n).data("attrs")),A=function(){_(p,e.prop(n,"controls"))};p&&p.swfCreated?(o.setActive(n,"third",p),p.currentSrc=a.srcProp,p.shadowElem.html('<div id="'+T+'">'),p.api=!1,p.actionQueue=[],d=p.shadowElem,S(p)):(d=e('<div class="polyfill-'+E+' polyfill-mediaelement" id="wrapper-'+T+'"><div id="'+T+'"></div>').css({position:"relative",overflow:"hidden"}),p=t.data(n,"mediaelement",t.objectCreate(h,{actionQueue:{value:[]},shadowElem:{value:d},_elemNodeName:{value:E},_elem:{value:n},currentSrc:{value:a.srcProp},swfCreated:{value:!0},id:{value:T.replace(/-/g,"")},buffered:{value:{start:function(e){return e>=p.buffered.length?(t.error("buffered index size error"),r):0},end:function(e){return e>=p.buffered.length?(t.error("buffered index size error"),r):(p.duration-p._bufferedStart)*p._bufferedEnd+p._bufferedStart},length:0}}})),_(p,y),d.insertBefore(n),u&&e.extend(p,{volume:e.prop(n,"volume"),muted:e.prop(n,"muted"),paused:e.prop(n,"paused")}),t.addShadowDom(n,d),N(n),o.setActive(n,"third",p),e(n).on({updatemediaelementdimensions:A}).onWSOff("updateshadowdom",A)),o.jarisEvent[p.id]||(o.jarisEvent[p.id]=function(e){if("ready"==e.type){var t=function(){p.api&&(P(n)&&p.api.api_preload(),w.ready(e,p))};p.api?t():setTimeout(t,9)}else p.currentTime=e.position,p.api&&(!p._calledMeta&&isNaN(e.duration)&&p.duration!=e.duration&&isNaN(p.duration)&&w.onDataInitialized(e,p),p._ppFlag||"onPlayPause"==e.type||w.onPlayPause(e,p),w[e.type]&&w[e.type](e,p)),p.duration=e.duration}),e.extend(m,{id:T,evtId:p.id,controls:""+y,autostart:"false",nodename:E},v),f?m.streamtype="rtmp":"audio/mpeg"==a.type||"audio/mp3"==a.type?(m.type="audio",m.streamtype="file"):"video/youtube"==a.type&&(m.streamtype="youtube"),i.changeSWF(m,n,a,p,"embed"),clearTimeout(p.flashBlock),s.embedSWF(g,T,"100%","100%","9.0.115",!1,m,x,k,function(a){a.success&&(p.api=a.ref,y||e(a.ref).attr("tabindex","-1").css("outline","none"),p.flashBlock=setTimeout(function(){(!a.ref.parentNode&&d[0].parentNode||"none"==a.ref.style.display)&&(d.addClass("flashblocker-assumed"),e(n).trigger("flashblocker"),t.warn("flashblocker assumed")),e(a.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})},9),b||(clearTimeout(b),b=setTimeout(function(){var n=e(a.ref);n[0].offsetWidth>1&&n[0].offsetHeight>1&&0===location.protocol.indexOf("file:")?t.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(2>n[0].offsetWidth||2>n[0].offsetHeight)&&t.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),n=null},8e3)))})};var O=function(e,t,n,a){return a=a||m(e),a?(a.api&&a.api[t]?a.api[t].apply(a.api,n||[]):(a.actionQueue.push({fn:t,args:n}),a.actionQueue.length>10&&setTimeout(function(){a.actionQueue.length>5&&a.actionQueue.shift()},99)),a):!1};if(["audio","video"].forEach(function(n){var a,r={},i=function(e){("audio"!=n||"videoHeight"!=e&&"videoWidth"!=e)&&(r[e]={get:function(){var t=m(this);return t?t[e]:u&&a[e].prop._supget?a[e].prop._supget.apply(this):h[e]},writeable:!1})},o=function(e,t){i(e),delete r[e].writeable,r[e].set=t};o("volume",function(e){var n=m(this);if(n)e*=1,isNaN(e)||((0>e||e>1)&&t.error("volume greater or less than allowed "+e/100),O(this,"api_volume",[e],n),n.volume!=e&&(n.volume=e,v(n._elem,"volumechange")),n=null);else if(a.volume.prop._supset)return a.volume.prop._supset.apply(this,arguments)}),o("muted",function(e){var t=m(this);if(t)e=!!e,O(this,"api_muted",[e],t),t.muted!=e&&(t.muted=e,v(t._elem,"volumechange")),t=null;else if(a.muted.prop._supset)return a.muted.prop._supset.apply(this,arguments)}),o("currentTime",function(e){var t=m(this);if(t)e*=1,isNaN(e)||O(this,"api_seek",[e],t);else if(a.currentTime.prop._supset)return a.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(e){r[e]={value:function(){var t=m(this);if(t)t.stopPlayPause&&clearTimeout(t.stopPlayPause),O(this,"play"==e?"api_play":"api_pause",[],t),t._ppFlag=!0,t.paused!=("play"!=e)&&(t.paused="play"!=e,v(t._elem,e));else if(a[e].prop._supvalue)return a[e].prop._supvalue.apply(this,arguments)}}}),d.forEach(i),t.onNodeNamesPropertyModify(n,"controls",function(t,a){var r=m(this);e(this)[a?"addClass":"removeClass"]("webshims-controls"),r&&("audio"==n&&_(r,a),O(this,"api_controls",[a],r))}),t.onNodeNamesPropertyModify(n,"preload",function(){var e=m(this);e&&P(this)&&O(this,"api_preload",[],e)}),a=t.defineNodeNameProperties(n,r,"prop")}),l&&e.cleanData){var M=e.cleanData,j={object:1,OBJECT:1};e.cleanData=function(e){var t,n;if(e&&(n=e.length)&&c)for(t=0;n>t;t++)if(j[e[t].nodeName]&&"api_pause"in e[t]){c--;try{e[t].api_pause()}catch(a){}}return M.apply(this,arguments)}}u||(["poster","src"].forEach(function(e){t.defineNodeNamesProperty("src"==e?["audio","video","source"]:["video"],e,{reflect:!0,propType:"src"})}),t.defineNodeNamesProperty(["audio","video"],"preload",{reflect:!0,propType:"enumarated",defaultValue:"",limitedTo:["","auto","metadata","none"]}),["autoplay","controls"].forEach(function(e){t.defineNodeNamesBooleanProperty(["audio","video"],e)}),t.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))}),webshims.register("track",function(e,t,n,a){"use strict";var r=t.mediaelement;(new Date).getTime();var i=e.fn.addBack?"addBack":"andSelf",o={subtitles:1,captions:1,descriptions:1},s=e("<track />"),u=Modernizr.ES5&&Modernizr.objectAccessor,l=function(e){var n={};return e.addEventListener=function(e,a){n[e]&&t.error("always use $.on to the shimed event: "+e+" already bound fn was: "+n[e]+" your fn was: "+a),n[e]=a},e.removeEventListener=function(e,a){n[e]&&n[e]!=a&&t.error("always use $.on/$.off to the shimed event: "+e+" already bound fn was: "+n[e]+" your fn was: "+a),n[e]&&delete n[e]},e},c={getCueById:function(e){for(var t=null,n=0,a=this.length;a>n;n++)if(this[n].id===e){t=this[n];break}return t}},p={0:"disabled",1:"hidden",2:"showing"},d={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",mode:"disabled",readyState:0,oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(e){if(this.cues){var n=this.cues[this.cues.length-1];n&&n.startTime>e.startTime&&t.error("cue startTime higher than previous cue's startTime")}else this.cues=r.createCueList();e.track&&e.track.removeCue&&e.track.removeCue(e),e.track=this,this.cues.push(e)},removeCue:function(e){var n=this.cues||[],a=0,r=n.length;if(e.track!=this)return t.error("cue not part of track"),undefined;for(;r>a;a++)if(n[a]===e){n.splice(a,1),e.track=null;break}return e.track?(t.error("cue not part of track"),undefined):undefined},DISABLED:"disabled",OFF:"disabled",HIDDEN:"hidden",SHOWING:"showing",ERROR:3,LOADED:2,LOADING:1,NONE:0},f=["kind","label","srclang"],h={srclang:"language"},m=Function.prototype.call.bind(Object.prototype.hasOwnProperty),v=function(n,a){var r,i,o=[],s=[],u=[];if(n||(n=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{})),a||(n.blockTrackListUpdate=!0,a=e.prop(this,"textTracks"),n.blockTrackListUpdate=!1),clearTimeout(n.updateTrackListTimer),e("track",this).each(function(){var t=e.prop(this,"track");u.push(t),-1==a.indexOf(t)&&s.push(t)}),n.scriptedTextTracks)for(r=0,i=n.scriptedTextTracks.length;i>r;r++)u.push(n.scriptedTextTracks[r]),-1==a.indexOf(n.scriptedTextTracks[r])&&s.push(n.scriptedTextTracks[r]);for(r=0,i=a.length;i>r;r++)-1==u.indexOf(a[r])&&o.push(a[r]);if(o.length||s.length){for(a.splice(0),r=0,i=u.length;i>r;r++)a.push(u[r]);for(r=0,i=o.length;i>r;r++)e([a]).triggerHandler(e.Event({type:"removetrack",track:o[r]}));for(r=0,i=s.length;i>r;r++)e([a]).triggerHandler(e.Event({type:"addtrack",track:s[r]}));(n.scriptedTextTracks||o.length)&&e(this).triggerHandler("updatetrackdisplay")}},g=function(n,a){a||(a=t.data(n,"trackData")),a&&!a.isTriggering&&(a.isTriggering=!0,setTimeout(function(){(a.track||{}).readyState?e(n).closest("audio, video").triggerHandler("updatetrackdisplay"):e(n).triggerHandler("checktrackmode"),a.isTriggering=!1},1))},y=e("<div />")[0];n.TextTrackCue=function(e,n,a){3!=arguments.length&&t.error("wrong arguments.length for TextTrackCue.constructor"),this.startTime=e,this.endTime=n,this.text=a,this.id="",this.pauseOnExit=!1,l(this)},n.TextTrackCue.prototype={onenter:null,onexit:null,pauseOnExit:!1,getCueAsHTML:function(){var e,t="",n="",i=a.createDocumentFragment();return m(this,"getCueAsHTML")||(e=this.getCueAsHTML=function(){var e,a;if(t!=this.text)for(t=this.text,n=r.parseCueTextToHTML(t),y.innerHTML=n,e=0,a=y.childNodes.length;a>e;e++)i.appendChild(y.childNodes[e].cloneNode(!0));return i.cloneNode(!0)}),e?e.apply(this,arguments):i.cloneNode(!0)},track:null,id:""},r.createCueList=function(){return e.extend([],c)},r.parseCueTextToHTML=function(){var e=/(<\/?[^>]+>)/gi,t=/^(?:c|v|ruby|rt|b|i|u)/,n=/\<\s*\//,a=function(e,t,a,r){var i;return n.test(r)?i="</"+e+">":(a.splice(0,1),i="<"+e+" "+t+'="'+a.join(" ").replace(/\"/g,"&#34;")+'">'),i},r=function(e){var n=e.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return n[0]&&(n[0]=n[0].toLowerCase(),t.test(n[0])?"c"==n[0]?e=a("span","class",n,e):"v"==n[0]&&(e=a("q","title",n,e)):e=""),e};return function(t){return t.replace(e,r)}}(),r.loadTextTrack=function(n,a,i,s){var u="play playing timeupdate updatetrackdisplay",l=i.track,c=function(){var i,o,s=e.prop(a,"src");if("disabled"!=l.mode&&s&&e.attr(a,"src")&&(e(n).unbind(u,c),e(a).unbind("checktrackmode",c),!l.readyState)){i=function(){l.readyState=3,l.cues=null,l.activeCues=l.shimActiveCues=l._shimActiveCues=null,e(a).triggerHandler("error")},l.readyState=1;try{l.cues=r.createCueList(),l.activeCues=l.shimActiveCues=l._shimActiveCues=r.createCueList(),o=e.ajax({dataType:"text",url:s,success:function(s){"text/vtt"!=o.getResponseHeader("content-type")&&t.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"),r.parseCaptions(s,l,function(t){t&&"length"in t?(l.readyState=2,e(a).triggerHandler("load"),e(n).triggerHandler("updatetrackdisplay")):i()})},error:i})}catch(p){i(),t.warn(p)}}};l.readyState=0,l.shimActiveCues=null,l._shimActiveCues=null,l.activeCues=null,l.cues=null,e(n).unbind(u,c),e(a).unbind("checktrackmode",c),e(n).on(u,c),e(a).on("checktrackmode",c),s&&(l.mode=o[l.kind]?"showing":"hidden",c())},r.createTextTrack=function(n,a){var o,s;return a.nodeName&&(s=t.data(a,"trackData"),s&&(g(a,s),o=s.track)),o||(o=l(t.objectCreate(d)),u||f.forEach(function(t){var n=e.prop(a,t);n&&(o[h[t]||t]=n)}),a.nodeName?(u&&f.forEach(function(n){t.defineProperty(o,h[n]||n,{get:function(){return e.prop(a,n)}})}),s=t.data(a,"trackData",{track:o}),r.loadTextTrack(n,a,s,e.prop(a,"default")&&e(a).siblings("track[default]")[i]()[0]==a)):(u&&f.forEach(function(e){t.defineProperty(o,h[e]||e,{value:a[e],writeable:!1})}),o.cues=r.createCueList(),o.activeCues=o._shimActiveCues=o.shimActiveCues=r.createCueList(),o.mode="hidden",o.readyState=2)),o},r.parseCaptionChunk=function(){var e=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,n=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,a=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,r=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(i){var o,s,u,l,c,p,d,f,h,m;if(f=n.exec(i))return null;if(f=a.exec(i))return null;if(f=r.exec(i))return null;for(o=i.split(/\n/g);!o[0].replace(/\s+/gi,"").length&&o.length>0;)o.shift();for(o[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(d=o.shift().replace(/\s*/gi,"")+""),p=0;o.length>p;p++){var v=o[p];(h=e.exec(v))&&(c=h.slice(1),s=parseInt(60*60*(c[0]||0),10)+parseInt(60*(c[1]||0),10)+parseInt(c[2]||0,10)+parseFloat("0."+(c[3]||0)),u=parseInt(60*60*(c[4]||0),10)+parseInt(60*(c[5]||0),10)+parseInt(c[6]||0,10)+parseFloat("0."+(c[7]||0))),o=o.slice(0,p).concat(o.slice(p+1));break}return s||u?(l=o.join("\n"),m=new TextTrackCue(s,u,l),d&&(m.id=d),m):(t.warn("couldn't extract time information: "+[s,u,o.join("\n"),d].join(" ; ")),null)}}(),r.parseCaptions=function(e,n,a){r.createCueList();var i,o,s,u,l;e?(s=/^WEBVTT(\s*FILE)?/gi,o=function(c,p){for(;p>c;c++){if(i=e[c],s.test(i))l=!0;else if(i.replace(/\s*/gi,"").length){if(!l){t.error("please use WebVTT format. This is the standard"),a(null);break}i=r.parseCaptionChunk(i,c),i&&n.addCue(i)}if((new Date).getTime()-30>u){c++,setTimeout(function(){u=(new Date).getTime(),o(c,p)},90);break}}c>=p&&(l||t.error("please use WebVTT format. This is the standard"),a(n.cues))},e=e.replace(/\r\n/g,"\n"),setTimeout(function(){e=e.replace(/\r/g,"\n"),setTimeout(function(){u=(new Date).getTime(),e=e.split(/\n\n+/g),o(0,e.length)},9)},9)):t.error("Required parameter captionData not supplied.")},r.createTrackList=function(e,n){return n=n||t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),n.textTracks||(n.textTracks=[],t.defineProperties(n.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null}}),l(n.textTracks)),n.textTracks},Modernizr.track||(t.defineNodeNamesBooleanProperty(["track"],"default"),t.reflectProperties(["track"],["srclang","label"]),t.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),t.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(e){var n=t.data(this,"trackData");this.setAttribute("data-kind",e),n&&(n.attrKind=e)},get:function(){var e=t.data(this,"trackData");return e&&"attrKind"in e?e.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),e.each(f,function(n,a){var r=h[a]||a;t.onNodeNamesPropertyModify("track",a,function(){var n=t.data(this,"trackData"),i=this;n&&("kind"==a&&g(this,n),u||(n.track[r]=e.prop(this,a)),clearTimeout(n.changedTrackPropTimer),n.changedTrackPropTimer=setTimeout(function(){e(i).trigger("updatesubtitlestate")},1))})}),t.onNodeNamesPropertyModify("track","src",function(n){if(n){var a,i=t.data(this,"trackData");i&&(a=e(this).closest("video, audio"),a[0]&&r.loadTextTrack(a,this,i))}}),t.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(e.prop(this,"track")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return r.createTextTrack(e(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),t.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var e=this,n=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),a=r.createTrackList(e,n);return n.blockTrackListUpdate||v.call(e,n,a),a},writeable:!1},addTextTrack:{value:function(e,n,a){var i=r.createTextTrack(this,{kind:s.prop("kind",e||"").prop("kind"),label:n||"",srclang:a||""}),o=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{});return o.scriptedTextTracks||(o.scriptedTextTracks=[]),o.scriptedTextTracks.push(i),v.call(this),i}}},"prop"),e(a).on("emptied ended updatetracklist",function(n){if(e(n.target).is("audio, video")){var a=t.data(n.target,"mediaelementBase");a&&(clearTimeout(a.updateTrackListTimer),a.updateTrackListTimer=setTimeout(function(){v.call(n.target,a)},0))}});var b=function(e,t){return t.readyState||e.readyState},w=function(e){e.originalEvent&&e.stopImmediatePropagation()},T=function(){if(t.implement(this,"track")){var n,a,r=e.prop(this,"track"),i=this.track;i&&(n=e.prop(this,"kind"),a=b(this,i),(i.mode||a)&&(r.mode=p[i.mode]||i.mode),"descriptions"!=n&&(i.mode="string"==typeof i.mode?"disabled":0,this.kind="metadata",e(this).attr({kind:n}))),e(this).on("load error",w)}};t.addReady(function(n,a){var r=a.filter("video, audio, track").closest("audio, video");e("video, audio",n).add(r).each(function(){v.call(this)}).each(function(){if(Modernizr.track){var n=e.prop(this,"textTracks"),a=this.textTracks;n.length!=a.length&&t.error("textTracks couldn't be copied"),e("track",this).each(T)}}),r.each(function(){var e=this,n=t.data(e,"mediaelementBase");n&&(clearTimeout(n.updateTrackListTimer),n.updateTrackListTimer=setTimeout(function(){v.call(e,n)},9))})}),Modernizr.track&&e("video, audio").trigger("trackapichange")});
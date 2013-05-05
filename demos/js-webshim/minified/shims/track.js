webshims.register("track",function(e,t,n,a){"use strict";var i=t.mediaelement;(new Date).getTime();var r=e.fn.addBack?"addBack":"andSelf",o={subtitles:1,captions:1,descriptions:1},s=e("<track />"),u=Modernizr.ES5&&Modernizr.objectAccessor,l=function(e){var n={};return e.addEventListener=function(e,a){n[e]&&t.error("always use $.on to the shimed event: "+e+" already bound fn was: "+n[e]+" your fn was: "+a),n[e]=a},e.removeEventListener=function(e,a){n[e]&&n[e]!=a&&t.error("always use $.on/$.off to the shimed event: "+e+" already bound fn was: "+n[e]+" your fn was: "+a),n[e]&&delete n[e]},e},c={getCueById:function(e){for(var t=null,n=0,a=this.length;a>n;n++)if(this[n].id===e){t=this[n];break}return t}},p={0:"disabled",1:"hidden",2:"showing"},d={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",mode:"disabled",readyState:0,oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(e){if(this.cues){var n=this.cues[this.cues.length-1];n&&n.startTime>e.startTime&&t.error("cue startTime higher than previous cue's startTime")}else this.cues=i.createCueList();e.track&&e.track.removeCue&&e.track.removeCue(e),e.track=this,this.cues.push(e)},removeCue:function(e){var n=this.cues||[],a=0,i=n.length;if(e.track!=this)return t.error("cue not part of track"),undefined;for(;i>a;a++)if(n[a]===e){n.splice(a,1),e.track=null;break}return e.track?(t.error("cue not part of track"),undefined):undefined},DISABLED:"disabled",OFF:"disabled",HIDDEN:"hidden",SHOWING:"showing",ERROR:3,LOADED:2,LOADING:1,NONE:0},f=["kind","label","srclang"],m={srclang:"language"},h=Function.prototype.call.bind(Object.prototype.hasOwnProperty),v=function(n,a){var i,r,o=[],s=[],u=[];if(n||(n=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{})),a||(n.blockTrackListUpdate=!0,a=e.prop(this,"textTracks"),n.blockTrackListUpdate=!1),clearTimeout(n.updateTrackListTimer),e("track",this).each(function(){var t=e.prop(this,"track");u.push(t),-1==a.indexOf(t)&&s.push(t)}),n.scriptedTextTracks)for(i=0,r=n.scriptedTextTracks.length;r>i;i++)u.push(n.scriptedTextTracks[i]),-1==a.indexOf(n.scriptedTextTracks[i])&&s.push(n.scriptedTextTracks[i]);for(i=0,r=a.length;r>i;i++)-1==u.indexOf(a[i])&&o.push(a[i]);if(o.length||s.length){for(a.splice(0),i=0,r=u.length;r>i;i++)a.push(u[i]);for(i=0,r=o.length;r>i;i++)e([a]).triggerHandler(e.Event({type:"removetrack",track:o[i]}));for(i=0,r=s.length;r>i;i++)e([a]).triggerHandler(e.Event({type:"addtrack",track:s[i]}));(n.scriptedTextTracks||o.length)&&e(this).triggerHandler("updatetrackdisplay")}},g=function(n,a){a||(a=t.data(n,"trackData")),a&&!a.isTriggering&&(a.isTriggering=!0,setTimeout(function(){(a.track||{}).readyState?e(n).closest("audio, video").triggerHandler("updatetrackdisplay"):e(n).triggerHandler("checktrackmode"),a.isTriggering=!1},1))},y=e("<div />")[0];n.TextTrackCue=function(e,n,a){3!=arguments.length&&t.error("wrong arguments.length for TextTrackCue.constructor"),this.startTime=e,this.endTime=n,this.text=a,this.id="",this.pauseOnExit=!1,l(this)},n.TextTrackCue.prototype={onenter:null,onexit:null,pauseOnExit:!1,getCueAsHTML:function(){var e,t="",n="",r=a.createDocumentFragment();return h(this,"getCueAsHTML")||(e=this.getCueAsHTML=function(){var e,a;if(t!=this.text)for(t=this.text,n=i.parseCueTextToHTML(t),y.innerHTML=n,e=0,a=y.childNodes.length;a>e;e++)r.appendChild(y.childNodes[e].cloneNode(!0));return r.cloneNode(!0)}),e?e.apply(this,arguments):r.cloneNode(!0)},track:null,id:""},i.createCueList=function(){return e.extend([],c)},i.parseCueTextToHTML=function(){var e=/(<\/?[^>]+>)/gi,t=/^(?:c|v|ruby|rt|b|i|u)/,n=/\<\s*\//,a=function(e,t,a,i){var r;return n.test(i)?r="</"+e+">":(a.splice(0,1),r="<"+e+" "+t+'="'+a.join(" ").replace(/\"/g,"&#34;")+'">'),r},i=function(e){var n=e.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return n[0]&&(n[0]=n[0].toLowerCase(),t.test(n[0])?"c"==n[0]?e=a("span","class",n,e):"v"==n[0]&&(e=a("q","title",n,e)):e=""),e};return function(t){return t.replace(e,i)}}(),i.loadTextTrack=function(n,a,r,s){var u="play playing timeupdate updatetrackdisplay",l=r.track,c=function(){var r,o,s=e.prop(a,"src");if("disabled"!=l.mode&&s&&e.attr(a,"src")&&(e(n).unbind(u,c),e(a).unbind("checktrackmode",c),!l.readyState)){r=function(){l.readyState=3,l.cues=null,l.activeCues=l.shimActiveCues=l._shimActiveCues=null,e(a).triggerHandler("error")},l.readyState=1;try{l.cues=i.createCueList(),l.activeCues=l.shimActiveCues=l._shimActiveCues=i.createCueList(),o=e.ajax({dataType:"text",url:s,success:function(s){"text/vtt"!=o.getResponseHeader("content-type")&&t.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"),i.parseCaptions(s,l,function(t){t&&"length"in t?(l.readyState=2,e(a).triggerHandler("load"),e(n).triggerHandler("updatetrackdisplay")):r()})},error:r})}catch(p){r(),t.warn(p)}}};l.readyState=0,l.shimActiveCues=null,l._shimActiveCues=null,l.activeCues=null,l.cues=null,e(n).unbind(u,c),e(a).unbind("checktrackmode",c),e(n).on(u,c),e(a).on("checktrackmode",c),s&&(l.mode=o[l.kind]?"showing":"hidden",c())},i.createTextTrack=function(n,a){var o,s;return a.nodeName&&(s=t.data(a,"trackData"),s&&(g(a,s),o=s.track)),o||(o=l(t.objectCreate(d)),u||f.forEach(function(t){var n=e.prop(a,t);n&&(o[m[t]||t]=n)}),a.nodeName?(u&&f.forEach(function(n){t.defineProperty(o,m[n]||n,{get:function(){return e.prop(a,n)}})}),s=t.data(a,"trackData",{track:o}),i.loadTextTrack(n,a,s,e.prop(a,"default")&&e(a).siblings("track[default]")[r]()[0]==a)):(u&&f.forEach(function(e){t.defineProperty(o,m[e]||e,{value:a[e],writeable:!1})}),o.cues=i.createCueList(),o.activeCues=o._shimActiveCues=o.shimActiveCues=i.createCueList(),o.mode="hidden",o.readyState=2)),o},i.parseCaptionChunk=function(){var e=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,n=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,a=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,i=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(r){var o,s,u,l,c,p,d,f,m,h;if(f=n.exec(r))return null;if(f=a.exec(r))return null;if(f=i.exec(r))return null;for(o=r.split(/\n/g);!o[0].replace(/\s+/gi,"").length&&o.length>0;)o.shift();for(o[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(d=o.shift().replace(/\s*/gi,"")+""),p=0;o.length>p;p++){var v=o[p];(m=e.exec(v))&&(c=m.slice(1),s=parseInt(60*60*(c[0]||0),10)+parseInt(60*(c[1]||0),10)+parseInt(c[2]||0,10)+parseFloat("0."+(c[3]||0)),u=parseInt(60*60*(c[4]||0),10)+parseInt(60*(c[5]||0),10)+parseInt(c[6]||0,10)+parseFloat("0."+(c[7]||0))),o=o.slice(0,p).concat(o.slice(p+1));break}return s||u?(l=o.join("\n"),h=new TextTrackCue(s,u,l),d&&(h.id=d),h):(t.warn("couldn't extract time information: "+[s,u,o.join("\n"),d].join(" ; ")),null)}}(),i.parseCaptions=function(e,n,a){i.createCueList();var r,o,s,u,l;e?(s=/^WEBVTT(\s*FILE)?/gi,o=function(c,p){for(;p>c;c++){if(r=e[c],s.test(r))l=!0;else if(r.replace(/\s*/gi,"").length){if(!l){t.error("please use WebVTT format. This is the standard"),a(null);break}r=i.parseCaptionChunk(r,c),r&&n.addCue(r)}if((new Date).getTime()-30>u){c++,setTimeout(function(){u=(new Date).getTime(),o(c,p)},90);break}}c>=p&&(l||t.error("please use WebVTT format. This is the standard"),a(n.cues))},e=e.replace(/\r\n/g,"\n"),setTimeout(function(){e=e.replace(/\r/g,"\n"),setTimeout(function(){u=(new Date).getTime(),e=e.split(/\n\n+/g),o(0,e.length)},9)},9)):t.error("Required parameter captionData not supplied.")},i.createTrackList=function(e,n){return n=n||t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),n.textTracks||(n.textTracks=[],t.defineProperties(n.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null}}),l(n.textTracks)),n.textTracks},Modernizr.track||(t.defineNodeNamesBooleanProperty(["track"],"default"),t.reflectProperties(["track"],["srclang","label"]),t.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),t.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(e){var n=t.data(this,"trackData");this.setAttribute("data-kind",e),n&&(n.attrKind=e)},get:function(){var e=t.data(this,"trackData");return e&&"attrKind"in e?e.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),e.each(f,function(n,a){var i=m[a]||a;t.onNodeNamesPropertyModify("track",a,function(){var n=t.data(this,"trackData"),r=this;n&&("kind"==a&&g(this,n),u||(n.track[i]=e.prop(this,a)),clearTimeout(n.changedTrackPropTimer),n.changedTrackPropTimer=setTimeout(function(){e(r).trigger("updatesubtitlestate")},1))})}),t.onNodeNamesPropertyModify("track","src",function(n){if(n){var a,r=t.data(this,"trackData");r&&(a=e(this).closest("video, audio"),a[0]&&i.loadTextTrack(a,this,r))}}),t.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(e.prop(this,"track")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return i.createTextTrack(e(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),t.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var e=this,n=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),a=i.createTrackList(e,n);return n.blockTrackListUpdate||v.call(e,n,a),a},writeable:!1},addTextTrack:{value:function(e,n,a){var r=i.createTextTrack(this,{kind:s.prop("kind",e||"").prop("kind"),label:n||"",srclang:a||""}),o=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{});return o.scriptedTextTracks||(o.scriptedTextTracks=[]),o.scriptedTextTracks.push(r),v.call(this),r}}},"prop"),e(a).on("emptied ended updatetracklist",function(n){if(e(n.target).is("audio, video")){var a=t.data(n.target,"mediaelementBase");a&&(clearTimeout(a.updateTrackListTimer),a.updateTrackListTimer=setTimeout(function(){v.call(n.target,a)},0))}});var b=function(e,t){return t.readyState||e.readyState},w=function(e){e.originalEvent&&e.stopImmediatePropagation()},T=function(){if(t.implement(this,"track")){var n,a,i=e.prop(this,"track"),r=this.track;r&&(n=e.prop(this,"kind"),a=b(this,r),(r.mode||a)&&(i.mode=p[r.mode]||r.mode),"descriptions"!=n&&(r.mode="string"==typeof r.mode?"disabled":0,this.kind="metadata",e(this).attr({kind:n}))),e(this).on("load error",w)}};t.addReady(function(n,a){var i=a.filter("video, audio, track").closest("audio, video");e("video, audio",n).add(i).each(function(){v.call(this)}).each(function(){if(Modernizr.track){var n=e.prop(this,"textTracks"),a=this.textTracks;n.length!=a.length&&t.error("textTracks couldn't be copied"),e("track",this).each(T)}}),i.each(function(){var e=this,n=t.data(e,"mediaelementBase");n&&(clearTimeout(n.updateTrackListTimer),n.updateTrackListTimer=setTimeout(function(){v.call(e,n)},9))})}),Modernizr.track&&e("video, audio").trigger("trackapichange")});
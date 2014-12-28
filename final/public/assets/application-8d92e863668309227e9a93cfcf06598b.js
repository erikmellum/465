$(document).ready(function(){}),function(t,e){t.rails!==e&&t.error("jquery-ujs has already been loaded!");var n,r=t(document);t.rails=n={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",buttonClickSelector:"button[data-remote]:not(form button), button[data-confirm]:not(form button)",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",disableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input[type=file]",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]",CSRFProtection:function(e){var n=t('meta[name="csrf-token"]').attr("content");n&&e.setRequestHeader("X-CSRF-Token",n)},refreshCSRFTokens:function(){var e=t("meta[name=csrf-token]").attr("content"),n=t("meta[name=csrf-param]").attr("content");t('form input[name="'+n+'"]').val(e)},fire:function(e,n,r){var i=t.Event(n);return e.trigger(i,r),i.result!==!1},confirm:function(t){return confirm(t)},ajax:function(e){return t.ajax(e)},href:function(t){return t.attr("href")},handleRemote:function(r){var i,o,a,l,u,s,c,d;if(n.fire(r,"ajax:before")){if(l=r.data("cross-domain"),u=l===e?null:l,s=r.data("with-credentials")||null,c=r.data("type")||t.ajaxSettings&&t.ajaxSettings.dataType,r.is("form")){i=r.attr("method"),o=r.attr("action"),a=r.serializeArray();var h=r.data("ujs:submit-button");h&&(a.push(h),r.data("ujs:submit-button",null))}else r.is(n.inputChangeSelector)?(i=r.data("method"),o=r.data("url"),a=r.serialize(),r.data("params")&&(a=a+"&"+r.data("params"))):r.is(n.buttonClickSelector)?(i=r.data("method")||"get",o=r.data("url"),a=r.serialize(),r.data("params")&&(a=a+"&"+r.data("params"))):(i=r.data("method"),o=n.href(r),a=r.data("params")||null);return d={type:i||"GET",data:a,dataType:c,beforeSend:function(t,i){return i.dataType===e&&t.setRequestHeader("accept","*/*;q=0.5, "+i.accepts.script),n.fire(r,"ajax:beforeSend",[t,i])?void r.trigger("ajax:send",t):!1},success:function(t,e,n){r.trigger("ajax:success",[t,e,n])},complete:function(t,e){r.trigger("ajax:complete",[t,e])},error:function(t,e,n){r.trigger("ajax:error",[t,e,n])},crossDomain:u},s&&(d.xhrFields={withCredentials:s}),o&&(d.url=o),n.ajax(d)}return!1},handleMethod:function(r){var i=n.href(r),o=r.data("method"),a=r.attr("target"),l=t("meta[name=csrf-token]").attr("content"),u=t("meta[name=csrf-param]").attr("content"),s=t('<form method="post" action="'+i+'"></form>'),c='<input name="_method" value="'+o+'" type="hidden" />';u!==e&&l!==e&&(c+='<input name="'+u+'" value="'+l+'" type="hidden" />'),a&&s.attr("target",a),s.hide().append(c).appendTo("body"),s.submit()},formElements:function(e,n){return e.is("form")?t(e[0].elements).filter(n):e.find(n)},disableFormElements:function(e){n.formElements(e,n.disableSelector).each(function(){n.disableFormElement(t(this))})},disableFormElement:function(t){var n,r;n=t.is("button")?"html":"val",r=t.data("disable-with"),t.data("ujs:enable-with",t[n]()),r!==e&&t[n](r),t.prop("disabled",!0)},enableFormElements:function(e){n.formElements(e,n.enableSelector).each(function(){n.enableFormElement(t(this))})},enableFormElement:function(t){var e=t.is("button")?"html":"val";t.data("ujs:enable-with")&&t[e](t.data("ujs:enable-with")),t.prop("disabled",!1)},allowAction:function(t){var e,r=t.data("confirm"),i=!1;return r?(n.fire(t,"confirm")&&(i=n.confirm(r),e=n.fire(t,"confirm:complete",[i])),i&&e):!0},blankInputs:function(e,n,r){var i,o,a=t(),l=n||"input,textarea",u=e.find(l);return u.each(function(){if(i=t(this),o=i.is("input[type=checkbox],input[type=radio]")?i.is(":checked"):i.val(),!o==!r){if(i.is("input[type=radio]")&&u.filter('input[type=radio]:checked[name="'+i.attr("name")+'"]').length)return!0;a=a.add(i)}}),a.length?a:!1},nonBlankInputs:function(t,e){return n.blankInputs(t,e,!0)},stopEverything:function(e){return t(e.target).trigger("ujs:everythingStopped"),e.stopImmediatePropagation(),!1},disableElement:function(t){var r=t.data("disable-with");t.data("ujs:enable-with",t.html()),r!==e&&t.html(r),t.bind("click.railsDisable",function(t){return n.stopEverything(t)})},enableElement:function(t){t.data("ujs:enable-with")!==e&&(t.html(t.data("ujs:enable-with")),t.removeData("ujs:enable-with")),t.unbind("click.railsDisable")}},n.fire(r,"rails:attachBindings")&&(t.ajaxPrefilter(function(t,e,r){t.crossDomain||n.CSRFProtection(r)}),r.delegate(n.linkDisableSelector,"ajax:complete",function(){n.enableElement(t(this))}),r.delegate(n.buttonDisableSelector,"ajax:complete",function(){n.enableFormElement(t(this))}),r.delegate(n.linkClickSelector,"click.rails",function(r){var i=t(this),o=i.data("method"),a=i.data("params"),l=r.metaKey||r.ctrlKey;if(!n.allowAction(i))return n.stopEverything(r);if(!l&&i.is(n.linkDisableSelector)&&n.disableElement(i),i.data("remote")!==e){if(l&&(!o||"GET"===o)&&!a)return!0;var u=n.handleRemote(i);return u===!1?n.enableElement(i):u.error(function(){n.enableElement(i)}),!1}return i.data("method")?(n.handleMethod(i),!1):void 0}),r.delegate(n.buttonClickSelector,"click.rails",function(e){var r=t(this);if(!n.allowAction(r))return n.stopEverything(e);r.is(n.buttonDisableSelector)&&n.disableFormElement(r);var i=n.handleRemote(r);return i===!1?n.enableFormElement(r):i.error(function(){n.enableFormElement(r)}),!1}),r.delegate(n.inputChangeSelector,"change.rails",function(e){var r=t(this);return n.allowAction(r)?(n.handleRemote(r),!1):n.stopEverything(e)}),r.delegate(n.formSubmitSelector,"submit.rails",function(r){var i,o,a=t(this),l=a.data("remote")!==e;if(!n.allowAction(a))return n.stopEverything(r);if(a.attr("novalidate")==e&&(i=n.blankInputs(a,n.requiredInputSelector),i&&n.fire(a,"ajax:aborted:required",[i])))return n.stopEverything(r);if(l){if(o=n.nonBlankInputs(a,n.fileInputSelector)){setTimeout(function(){n.disableFormElements(a)},13);var u=n.fire(a,"ajax:aborted:file",[o]);return u||setTimeout(function(){n.enableFormElements(a)},13),u}return n.handleRemote(a),!1}setTimeout(function(){n.disableFormElements(a)},13)}),r.delegate(n.formInputClickSelector,"click.rails",function(e){var r=t(this);if(!n.allowAction(r))return n.stopEverything(e);var i=r.attr("name"),o=i?{name:i,value:r.val()}:null;r.closest("form").data("ujs:submit-button",o)}),r.delegate(n.formSubmitSelector,"ajax:send.rails",function(e){this==e.target&&n.disableFormElements(t(this))}),r.delegate(n.formSubmitSelector,"ajax:complete.rails",function(e){this==e.target&&n.enableFormElements(t(this))}),t(function(){n.refreshCSRFTokens()}))}(jQuery),function(){var t,e,n,r,i,o,a,l,u,s,c,d,h,f,p,m,b,v,g,y,E,w,S,k,T,x,_,C,A,j,R,H,F,L,N,O,I,D,q,P,X,M,G,B,U,K,z,$,Q,V,Y,J,W,Z,te,ee,ne=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},re={}.hasOwnProperty,ie=function(t,e){function n(){this.constructor=t}for(var r in e)re.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},oe=[].slice,ae=function(t,e){return function(){return t.apply(e,arguments)}};L={},h=10,Y=!1,q=null,g=null,H=null,X=null,te=null,r={BEFORE_CHANGE:"page:before-change",FETCH:"page:fetch",RECEIVE:"page:receive",CHANGE:"page:change",UPDATE:"page:update",LOAD:"page:load",RESTORE:"page:restore",BEFORE_UNLOAD:"page:before-unload",EXPIRE:"page:expire"},k=function(t){var e;return t=new n(t),K(),d(),null!=q&&q.start(),Y&&(e=J(t.absolute))?(T(e),x(t,null,!1)):x(t,Q)},J=function(t){var e;return e=L[t],e&&!e.transitionCacheDisabled?e:void 0},E=function(t){return null==t&&(t=!0),Y=t},y=function(t){return null==t&&(t=!0),s?t?null!=q?q:q=new o("html"):(null!=q&&q.uninstall(),q=null):void 0},x=function(t,e,n){return null==n&&(n=!0),W(r.FETCH,{url:t.absolute}),null!=te&&te.abort(),te=new XMLHttpRequest,te.open("GET",t.withoutHashForIE10compatibility(),!0),te.setRequestHeader("Accept","text/html, application/xhtml+xml, application/xml"),te.setRequestHeader("X-XHR-Referer",X),te.onload=function(){var n;return W(r.RECEIVE,{url:t.absolute}),(n=D())?(M(t),G(),f.apply(null,S(n)),F(),"function"==typeof e&&e(),W(r.LOAD)):document.location.href=v()||t.absolute},q&&n&&(te.onprogress=function(){return function(t){var e;return e=t.lengthComputable?t.loaded/t.total*100:q.value+(100-q.value)/10,q.advanceTo(e)}}(this)),te.onloadend=function(){return te=null},te.onerror=function(){return document.location.href=t.absolute},te.send()},T=function(t){return null!=te&&te.abort(),f(t.title,t.body),P(t),W(r.RESTORE)},d=function(){var t;return t=new n(g.url),L[t.absolute]={url:t.relative,body:document.body,title:document.title,positionY:window.pageYOffset,positionX:window.pageXOffset,cachedAt:(new Date).getTime(),transitionCacheDisabled:null!=document.querySelector("[data-no-transition-cache]")},m(h)},O=function(t){return null==t&&(t=h),/^[\d]+$/.test(t)?h=parseInt(t):void 0},m=function(t){var e,n,i,o,a,l;for(i=Object.keys(L),e=i.map(function(t){return L[t].cachedAt}).sort(function(t,e){return e-t}),l=[],o=0,a=i.length;a>o;o++)n=i[o],L[n].cachedAt<=e[t]&&(W(r.EXPIRE,L[n]),l.push(delete L[n]));return l},f=function(e,n,i,o){return W(r.BEFORE_UNLOAD),document.title=e,document.documentElement.replaceChild(n,document.body),null!=i&&t.update(i),V(),o&&w(),g=window.history.state,null!=q&&q.done(),W(r.CHANGE),W(r.UPDATE)},w=function(){var t,e,n,r,i,o,a,l,u,s,c,d;for(o=Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')),a=0,u=o.length;u>a;a++)if(i=o[a],""===(c=i.type)||"text/javascript"===c){for(e=document.createElement("script"),d=i.attributes,l=0,s=d.length;s>l;l++)t=d[l],e.setAttribute(t.name,t.value);i.hasAttribute("async")||(e.async=!1),e.appendChild(document.createTextNode(i.innerHTML)),r=i.parentNode,n=i.nextSibling,r.removeChild(i),r.insertBefore(e,n)}},z=function(t){return t.innerHTML=t.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi,""),t},V=function(){var t,e;return t=(e=document.querySelectorAll("input[autofocus], textarea[autofocus]"))[e.length-1],t&&document.activeElement!==t?t.focus():void 0},M=function(t){return(t=new n(t)).absolute!==X?window.history.pushState({turbolinks:!0,url:t.absolute},"",t.absolute):void 0},G=function(){var t,e;return(t=te.getResponseHeader("X-XHR-Redirected-To"))?(t=new n(t),e=t.hasNoHash()?document.location.hash:"",window.history.replaceState(window.history.state,"",t.href+e)):void 0},v=function(){var t;return null!=(t=te.getResponseHeader("Location"))&&new n(t).crossOrigin()?t:void 0},K=function(){return X=document.location.href},U=function(){return window.history.replaceState({turbolinks:!0,url:document.location.href},"",document.location.href)},B=function(){return g=window.history.state},F=function(){var t;return navigator.userAgent.match(/Firefox/)&&!(t=new n).hasNoHash()?(window.history.replaceState(g,"",t.withoutHash()),document.location.hash=t.hash):void 0},P=function(t){return window.scrollTo(t.positionX,t.positionY)},Q=function(){return document.location.hash?document.location.href=document.location.href:window.scrollTo(0,0)},p=function(t){var e,n,r;if(null==t||"object"!=typeof t)return t;e=new t.constructor;for(n in t)r=t[n],e[n]=p(r);return e},I=function(t){var e,n;return e=(null!=(n=document.cookie.match(new RegExp(t+"=(\\w+)")))?n[1].toUpperCase():void 0)||"",document.cookie=t+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/",e},W=function(t,e){var n;return"undefined"!=typeof Prototype&&Event.fire(document,t,e,!0),n=document.createEvent("Events"),e&&(n.data=e),n.initEvent(t,!0,!0),document.dispatchEvent(n)},N=function(t){return!W(r.BEFORE_CHANGE,{url:t})},D=function(){var t,e,n,r,i,o;return e=function(){var t;return 400<=(t=te.status)&&600>t},o=function(){var t;return null!=(t=te.getResponseHeader("Content-Type"))&&t.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)},r=function(t){var e,n,r,i,o;for(i=t.querySelector("head").childNodes,o=[],n=0,r=i.length;r>n;n++)e=i[n],null!=("function"==typeof e.getAttribute?e.getAttribute("data-turbolinks-track"):void 0)&&o.push(e.getAttribute("src")||e.getAttribute("href"));return o},t=function(t){var e;return H||(H=r(document)),e=r(t),e.length!==H.length||i(e,H).length!==H.length},i=function(t,e){var n,r,i,o,a;for(t.length>e.length&&(o=[e,t],t=o[0],e=o[1]),a=[],r=0,i=t.length;i>r;r++)n=t[r],ne.call(e,n)>=0&&a.push(n);return a},!e()&&o()&&(n=b(te.responseText),n&&!t(n))?n:void 0},S=function(e){var n;return n=e.querySelector("title"),[null!=n?n.textContent:void 0,z(e.querySelector("body")),t.get(e).token,"runScripts"]},t={get:function(t){var e;return null==t&&(t=document),{node:e=t.querySelector('meta[name="csrf-token"]'),token:null!=e&&"function"==typeof e.getAttribute?e.getAttribute("content"):void 0}},update:function(t){var e;return e=this.get(),null!=e.token&&null!=t&&e.token!==t?e.node.setAttribute("content",t):void 0}},b=function(t){var e;return e=document.documentElement.cloneNode(),e.innerHTML=t,e.head=e.querySelector("head"),e.body=e.querySelector("body"),e},n=function(){function t(e){return this.original=null!=e?e:document.location.href,this.original.constructor===t?this.original:void this._parse()}return t.prototype.withoutHash=function(){return this.href.replace(this.hash,"").replace("#","")},t.prototype.withoutHashForIE10compatibility=function(){return this.withoutHash()},t.prototype.hasNoHash=function(){return 0===this.hash.length},t.prototype.crossOrigin=function(){return this.origin!==(new t).origin},t.prototype._parse=function(){var t;return(null!=this.link?this.link:this.link=document.createElement("a")).href=this.original,t=this.link,this.href=t.href,this.protocol=t.protocol,this.host=t.host,this.hostname=t.hostname,this.port=t.port,this.pathname=t.pathname,this.search=t.search,this.hash=t.hash,this.origin=[this.protocol,"//",this.hostname].join(""),0!==this.port.length&&(this.origin+=":"+this.port),this.relative=[this.pathname,this.search,this.hash].join(""),this.absolute=this.href},t}(),i=function(t){function e(t){return this.link=t,this.link.constructor===e?this.link:(this.original=this.link.href,this.originalElement=this.link,this.link=this.link.cloneNode(!1),void e.__super__.constructor.apply(this,arguments))}return ie(e,t),e.HTML_EXTENSIONS=["html"],e.allowExtensions=function(){var t,n,r,i;for(n=1<=arguments.length?oe.call(arguments,0):[],r=0,i=n.length;i>r;r++)t=n[r],e.HTML_EXTENSIONS.push(t);return e.HTML_EXTENSIONS},e.prototype.shouldIgnore=function(){return this.crossOrigin()||this._anchored()||this._nonHtml()||this._optOut()||this._target()},e.prototype._anchored=function(){return(this.hash.length>0||"#"===this.href.charAt(this.href.length-1))&&this.withoutHash()===(new n).withoutHash()},e.prototype._nonHtml=function(){return this.pathname.match(/\.[a-z]+$/g)&&!this.pathname.match(new RegExp("\\.(?:"+e.HTML_EXTENSIONS.join("|")+")?$","g"))},e.prototype._optOut=function(){var t,e;for(e=this.originalElement;!t&&e!==document;)t=null!=e.getAttribute("data-no-turbolink"),e=e.parentNode;return t},e.prototype._target=function(){return 0!==this.link.target.length},e}(n),e=function(){function t(t){this.event=t,this.event.defaultPrevented||(this._extractLink(),this._validForTurbolinks()&&(N(this.link.absolute)||Z(this.link.href),this.event.preventDefault()))}return t.installHandlerLast=function(e){return e.defaultPrevented?void 0:(document.removeEventListener("click",t.handle,!1),document.addEventListener("click",t.handle,!1))},t.handle=function(e){return new t(e)},t.prototype._extractLink=function(){var t;for(t=this.event.target;t.parentNode&&"A"!==t.nodeName;)t=t.parentNode;return"A"===t.nodeName&&0!==t.href.length?this.link=new i(t):void 0},t.prototype._validForTurbolinks=function(){return null!=this.link&&!(this.link.shouldIgnore()||this._nonStandardClick())},t.prototype._nonStandardClick=function(){return this.event.which>1||this.event.metaKey||this.event.ctrlKey||this.event.shiftKey||this.event.altKey},t}(),o=function(){function t(t){this.elementSelector=t,this._trickle=ae(this._trickle,this),this.value=0,this.opacity=1,this.content="",this.speed=300,this.install()}var e;return e="turbolinks-progress-bar",t.prototype.install=function(){return this.element=document.querySelector(this.elementSelector),this.element.classList.add(e),this.styleElement=document.createElement("style"),document.head.appendChild(this.styleElement),this._updateStyle()},t.prototype.uninstall=function(){return this.element.classList.remove(e),document.head.removeChild(this.styleElement)},t.prototype.start=function(){return this.advanceTo(5)},t.prototype.advanceTo=function(t){var e;if(t>(e=this.value)&&100>=e){if(this.value=t,this._updateStyle(),100===this.value)return this._stopTrickle();if(this.value>0)return this._startTrickle()}},t.prototype.done=function(){return this.value>0?(this.advanceTo(100),this._reset()):void 0},t.prototype._reset=function(){return setTimeout(function(t){return function(){return t.opacity=0,t._updateStyle()}}(this),this.speed/2),setTimeout(function(t){return function(){return t.value=0,t.opacity=1,t._withSpeed(0,function(){return t._updateStyle(!0)})}}(this),this.speed)},t.prototype._startTrickle=function(){return this.trickling?void 0:(this.trickling=!0,setTimeout(this._trickle,this.speed))},t.prototype._stopTrickle=function(){return delete this.trickling},t.prototype._trickle=function(){return this.trickling?(this.advanceTo(this.value+Math.random()/2),setTimeout(this._trickle,this.speed)):void 0},t.prototype._withSpeed=function(t,e){var n,r;return n=this.speed,this.speed=t,r=e(),this.speed=n,r},t.prototype._updateStyle=function(t){return null==t&&(t=!1),t&&this._changeContentToForceRepaint(),this.styleElement.textContent=this._createCSSRule()},t.prototype._changeContentToForceRepaint=function(){return this.content=""===this.content?" ":""},t.prototype._createCSSRule=function(){return""+this.elementSelector+"."+e+"::before {\n  content: '"+this.content+"';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: "+this.opacity+";\n  width: "+this.value+"%;\n  transition: width "+this.speed+"ms ease-out, opacity "+this.speed/2+"ms ease-in;\n  transform: translate3d(0,0,0);\n}"},t}(),c=function(t){return setTimeout(t,500)},A=function(){return document.addEventListener("DOMContentLoaded",function(){return W(r.CHANGE),W(r.UPDATE)},!0)},R=function(){return"undefined"!=typeof jQuery?jQuery(document).on("ajaxSuccess",function(t,e){return jQuery.trim(e.responseText)?W(r.UPDATE):void 0}):void 0},j=function(t){var e,r;return(null!=(r=t.state)?r.turbolinks:void 0)?(e=L[new n(t.state.url).absolute])?(d(),T(e)):Z(t.target.location.href):void 0},C=function(){return U(),B(),document.addEventListener("click",e.installHandlerLast,!0),window.addEventListener("hashchange",function(){return U(),B()},!1),c(function(){return window.addEventListener("popstate",j,!1)})},_=void 0!==window.history.state||navigator.userAgent.match(/Firefox\/2[6|7]/),u=window.history&&window.history.pushState&&window.history.replaceState&&_,a=!navigator.userAgent.match(/CriOS\//),$="GET"===(ee=I("request_method"))||""===ee,s=u&&a&&$,l=document.addEventListener&&document.createEvent,l&&(A(),R()),s?(Z=k,C()):Z=function(t){return document.location.href=t},this.Turbolinks={visit:Z,pagesCached:O,enableTransitionCache:E,enableProgressBar:y,allowLinkExtensions:i.allowExtensions,supported:s,EVENTS:p(r)}}.call(this),function(){}.call(this),function(){}.call(this),function(){}.call(this),function(){}.call(this),function(){}.call(this),function(){}.call(this),function(){}.call(this),function(){}.call(this),function(){}.call(this);var myApp=angular.module("myApp",[]);myApp.controller("EventController",function(){}),function(){}.call(this);
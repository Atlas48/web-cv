/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-fontface-svgasimg-webp-xhrresponsetypetext-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,A,i;for(var r in u)if(u.hasOwnProperty(r)){if(e=[],n=u[r],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)A=e[a],i=A.split("."),1===i.length?Modernizr[i[0]]=s:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=s),f.push((s?"":"no-")+i.join("-"))}}function a(e){var n=d.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?d.className.baseVal=n:d.className=n)}function A(e,n){if("object"==typeof e)for(var t in e)g(e,t)&&A(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),s=Modernizr[o[0]];if(2==o.length&&(s=s[o[1]]),"undefined"!=typeof s)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,A,l,f,u="modernizr",c=i("div"),p=r();if(parseInt(o,10))for(;o--;)l=i("div"),l.id=s?s[o]:u+(o+1),c.appendChild(l);return a=i("style"),a.type="text/css",a.id="s"+u,(p.fake?p:c).appendChild(a),p.appendChild(c),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),c.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",f=d.style.overflow,d.style.overflow="hidden",d.appendChild(p)),A=t(c,e),p.fake?(p.parentNode.removeChild(p),d.style.overflow=f,d.offsetHeight):c.parentNode.removeChild(c),!!A}var f=[],u=[],c={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){u.push({name:e,fn:n,options:t})},addAsyncTest:function(e){u.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr;var d=n.documentElement,p="svg"===d.nodeName.toLowerCase(),h=function(e){if("undefined"==typeof XMLHttpRequest)return!1;var n=new XMLHttpRequest;n.open("get","/",!0);try{n.responseType=e}catch(t){return!1}return"response"in n&&n.responseType==e};Modernizr.addTest("xhrresponsetypetext",h("text"));var g;!function(){var e={}.hasOwnProperty;g=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),c._l={},c.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},c._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){c.addTest=A}),Modernizr.addAsyncTest(function(){function e(e,n,t){function o(n){var o=n&&"load"===n.type?1==s.width:!1,a="webp"===e;A(e,a&&o?new Boolean(o):o),t&&t(n)}var s=new Image;s.onerror=o,s.onload=o,s.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=n.shift();e(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),Modernizr.addTest("svgasimg",n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var m=c.testStyles=l,w=function(){var e=navigator.userAgent,n=e.match(/w(eb)?osbrowser/gi),t=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return n||t}();w?Modernizr.addTest("fontface",!1):m('@font-face {font-family:"font";src:url("https://")}',function(e,t){var o=n.getElementById("smodernizr"),s=o.sheet||o.styleSheet,a=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":"",A=/src/i.test(a)&&0===a.indexOf(t.split(" ")[0]);Modernizr.addTest("fontface",A)}),s(),a(f),delete c.addTest,delete c.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);

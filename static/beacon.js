var e="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==e&&e,t={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(t.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],o=ArrayBuffer.isView||function(e){return e&&r.indexOf(Object.prototype.toString.call(e))>-1};function n(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function s(e){return"string"!=typeof e&&(e=String(e)),e}function a(e){var r={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t.iterable&&(r[Symbol.iterator]=function(){return r}),r}function i(e){this.map={},e instanceof i?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function c(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function f(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function u(e){var t=new FileReader,r=f(t);return t.readAsArrayBuffer(e),r}function d(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(e){var r;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:t.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:t.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():t.arrayBuffer&&t.blob&&((r=e)&&DataView.prototype.isPrototypeOf(r))?(this._bodyArrayBuffer=d(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):t.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||o(e))?this._bodyArrayBuffer=d(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},t.blob&&(this.blob=function(){var e=c(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=c(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(u)}),this.text=function(){var e,t,r,o=c(this);if(o)return o;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=f(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),o=0;o<t.length;o++)r[o]=String.fromCharCode(t[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},t.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}i.prototype.append=function(e,t){e=n(e),t=s(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},i.prototype.delete=function(e){delete this.map[n(e)]},i.prototype.get=function(e){return e=n(e),this.has(e)?this.map[e]:null},i.prototype.has=function(e){return this.map.hasOwnProperty(n(e))},i.prototype.set=function(e,t){this.map[n(e)]=s(t)},i.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},i.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),a(e)},i.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),a(e)},i.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),a(e)},t.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);var l=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function p(e,t){if(!(this instanceof p))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,o,n=(t=t||{}).body;if(e instanceof p){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new i(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new i(t.headers)),this.method=(r=t.method||this.method||"GET",o=r.toUpperCase(),l.indexOf(o)>-1?o:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(n),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==t.cache&&"no-cache"!==t.cache)){var s=/([?&])_=[^&]*/;if(s.test(this.url))this.url=this.url.replace(s,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function y(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(n))}})),t}function m(e,t){if(!(this instanceof m))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new i(t.headers),this.url=t.url||"",this._initBody(e)}p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},h.call(p.prototype),h.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},m.error=function(){var e=new m(null,{status:0,statusText:""});return e.type="error",e};var b=[301,302,303,307,308];m.redirect=function(e,t){if(-1===b.indexOf(t))throw new RangeError("Invalid status code");return new m(null,{status:t,headers:{location:e}})};var g=e.DOMException;try{new g}catch(e){(g=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),g.prototype.constructor=g}function w(r,o){return new Promise((function(n,a){var c=new p(r,o);if(c.signal&&c.signal.aborted)return a(new g("Aborted","AbortError"));var f=new XMLHttpRequest;function u(){f.abort()}f.onload=function(){var e,t,r={status:f.status,statusText:f.statusText,headers:(e=f.getAllResponseHeaders()||"",t=new i,e.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e})).forEach((function(e){var r=e.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();t.append(o,n)}})),t)};r.url="responseURL"in f?f.responseURL:r.headers.get("X-Request-URL");var o="response"in f?f.response:f.responseText;setTimeout((function(){n(new m(o,r))}),0)},f.onerror=function(){setTimeout((function(){a(new TypeError("Network request failed"))}),0)},f.ontimeout=function(){setTimeout((function(){a(new TypeError("Network request failed"))}),0)},f.onabort=function(){setTimeout((function(){a(new g("Aborted","AbortError"))}),0)},f.open(c.method,function(t){try{return""===t&&e.location.href?e.location.href:t}catch(e){return t}}(c.url),!0),"include"===c.credentials?f.withCredentials=!0:"omit"===c.credentials&&(f.withCredentials=!1),"responseType"in f&&(t.blob?f.responseType="blob":t.arrayBuffer&&c.headers.get("Content-Type")&&-1!==c.headers.get("Content-Type").indexOf("application/octet-stream")&&(f.responseType="arraybuffer")),!o||"object"!=typeof o.headers||o.headers instanceof i?c.headers.forEach((function(e,t){f.setRequestHeader(t,e)})):Object.getOwnPropertyNames(o.headers).forEach((function(e){f.setRequestHeader(e,s(o.headers[e]))})),c.signal&&(c.signal.addEventListener("abort",u),f.onreadystatechange=function(){4===f.readyState&&c.signal.removeEventListener("abort",u)}),f.send(void 0===c._bodyInit?null:c._bodyInit)}))}w.polyfill=!0,e.fetch||(e.fetch=w,e.Headers=i,e.Request=p,e.Response=m),self.fetch.bind(self);let T=document.getElementsByTagName("BODY")[0];if(T){var v=document.createElement("span");v.width=0,v.height=0,v.style.setProperty("display","none","important"),T.appendChild(v)}const E=document.getElementById("term"),S=(e,t="Details")=>{E&&(E.innerHTML+="object"==typeof e?`<details>\n                             <summary style="display:list-item;cursor:pointer">${t}</summary>\n                             <span class="fix" style="font-size:85%">${JSON.stringify(e,null,4)}</span>\n                           </details>`:`<p><span class="clock">${(new Date).toISOString()}</span><span class="msg">${e}<span></p>`)},_=e=>new Promise((t=>setTimeout(t,e))),B=()=>Math.floor(1e8*Math.random())+1,x=async e=>new Promise(((t,r)=>{var o=!1;let n=`${e}${-1!==e.indexOf("?")?"&":"?"}r=${B()}`;if(v){var s=document.createElement("img");s.width=0,s.height=0,s.hidden=!0,s.style.setProperty("display","none","important"),s.referrerPolicy="no-referrer",s.onload=()=>{o=!0,t({asset:n,extra:{failure:!1}})},s.setAttribute("src",n),v.appendChild(s)}setTimeout((()=>{o||t({asset:n,extra:{failure:!0}})}),3e3)})),A=async e=>new Promise(((t,r)=>{var o=!1;let n=`${e}${-1!==e.indexOf("?")?"&":"?"}r=${B()}`;fetch(n).then((e=>e.json())).then((e=>{o=!0,t({asset:n,extra:{failure:!1}})})),setTimeout((()=>{o||t({asset:n,extra:{failure:!0}})}),1e3)})),O=async e=>new Promise(((t,r)=>{var o=!1;let n=`${e}${-1!==e.indexOf("?")?"&":"?"}r=${B()}`;fetch(n).then((e=>e.json())).then((e=>{o=!0,t({asset:n,extra:{responseRegion:e.colo,failure:!1}})})),setTimeout((()=>{o||t({asset:n,extra:{failure:!0}})}),1e3)})),P=()=>Math.floor(Date.now()/1e3),j=e=>e.match(/h1|http\/1/)?"http/1.x":e.match(/h2|http\/2/)?"http/2":!!e.match(/h3|http\/3/)&&"http/3",D=async e=>{const t=e.reduce(((e,t)=>e+t.assets.length),0);if(!(()=>{if("127.0.0.1"===location.hostname||"localhost"===location.hostname)return!0;if(void 0!==window.webdriver)return!1;if(!performance.getEntries().some((e=>e.name.match(/^https:\/\/performance\.radar\.(?:staging\.)?cloudflare\.com\/beacon\.js$/))))return!1;if("https:"!==location.protocol)return!1;if(void 0===performance)return!1;if("function"!=typeof performance.clearResourceTimings)return!1;if("undefined"==typeof sessionStorage)return!1;const e=sessionStorage.getItem("ts");return!(e&&parseInt(e)+60>P())})()||!t)return void S("No measurements to do.");S(`Taking ${t} measurements...`);let r=0;const o=document.querySelector("#cf-error-details h1, .cf-code-label");if(o){const e=o.innerText.match(/Error\s+(?:code\s+)?(\d+)/i);e&&(r=parseInt(e[1])||0)}if(-1!==[1005,1006,1007,1008,1009,1010,1011,1012,1015,1106].indexOf(r))return;performance.clearResourceTimings();let n=[];for(var s in e){let t,r=e[s];switch(r.type){case"coloName":t=O;break;case"api":t=A;break;default:t=x}let o=r.assets,i=0;for(var a in o){if(await t(`${r.prefix}${o[a].url}`,o[a].fetch).then((e=>{let t,s=e.asset,c={targetEntity:o[a].targetName,preWarmedRequest:!1,transferSize:o[a].es||r.es,asset:s,...o[a].extra,...e.extra};const f=o[a].fetch?"fetch":"img",u=`<a href='${o[a].url}' rel='nofollow noreferrer external'>${o[a].targetName}</a>`;if(e.extra&&e.extra.failure){c.transferSize=0;t=`<span style='color:${r.canFail?"#ebcf34":"#eb5334"}'>Failed to measure ${u} (${f})</span>`}else t=`Measured ${u} (${f})`;c.targetObjectHash=o[a].digest,c.targetObjectHash||(c.targetObjectHash="0000000000000000000000000000000000000000000000000000000000000000"),S(t),e.extra&&e.extra.failure&&!r.canFail?i++:n.push(c)})).catch((e=>{S(e)})),i>3)return void S("Too many failed measurements. Nothing to submit.");await _(50)}}const i=performance.getEntriesByType("resource");let c=[];if(i)for(var f in n){let e=n[f],t=i[i.map((e=>e.name)).indexOf(e.asset)];if(t&&performance.timeOrigin||!0===e.failure){if(delete e.asset,e.instanceTimeMs=Math.trunc(performance.timeOrigin),!0===e.failure)e={...e,instanceTimeMs:0,preWarmedRequest:!1,responseRegion:"",domainLookupStart:0,domainLookupEnd:0,connectStart:0,connectEnd:0,connectSecureStart:0,responseStart:0,requestStart:0,responseEnd:0,transferSize:0,encodedBodySize:0,decodedBodySize:0,serverTimeMs:0,connectProtocol:"n/a"};else{e={...e,domainLookupStart:t.domainLookupStart,domainLookupEnd:t.domainLookupEnd,connectStart:t.connectStart,connectEnd:t.connectEnd,connectSecureStart:t.secureConnectionStart,responseStart:t.responseStart,requestStart:t.requestStart,responseEnd:t.responseEnd,transferSize:t.transferSize,encodedBodySize:t.encodedBodySize,decodedBodySize:t.decodedBodySize};let r=j(t.nextHopProtocol);r&&(e.connectProtocol=r)}c.push(e)}}else console.log("Performance API not found");var u;c.length>0?(u={sessionTimeMs:Date.now(),triggerCode:r,measurements:c},fetch("https://performance.radar.cloudflare.com/api/beacon",{method:"POST",referrer:"",referrerPolicy:"no-referrer",headers:{"Content-Type":"application/json;charset=UTF-8","X-Submit-Token":"1681407945-438a4c1fce1229ab0f22d66b9faee5a1c13c94efd541afd299cc71ea074cb28d","Access-Control-Allow-Origin":"*"},body:JSON.stringify(u)}).then((function(e){return e.json()})).then((function(e){S(u,"&nbsp;Sent data (click to expand)..."),S('Measurements successfully sent to <a href="https://radar.cloudflare.com/">Radar</a>.'),sessionStorage.setItem("ts",String(P())),S('<span style="color:#67b522">Thank you for helping us build a better Internet.</span>')}))):S("No measurements to submit.")};function R(){E&&(E.innerHTML=""),D([{"name":"group-cdn-01","rate":0.5,"prefix":"","canFail":false,"allowMobile":false,"assets":[{"targetName":"google","es":200,"url":"https://benchmark.1e100cdn.net/r20-100KB.png","digest":"27bce9e85eaf3567a4695ba2b612e32615394d80d0a3a2dcb07b1fbfdfababc7","size":102400},{"targetName":"akamai-c","es":395,"url":"https://cedexis-test.akamaized.net/img/r20-100KB.png","digest":"27bce9e85eaf3567a4695ba2b612e32615394d80d0a3a2dcb07b1fbfdfababc7","size":102400},{"targetName":"cloudfront-c","es":488,"url":"https://p29.cedexis-test.com/img/r20-100KB.png","digest":"27bce9e85eaf3567a4695ba2b612e32615394d80d0a3a2dcb07b1fbfdfababc7","size":102400},{"targetName":"fastly-c","es":557,"url":"https://fastly.cedexis-test.com/img/20367/r20-100KB.png","digest":"27bce9e85eaf3567a4695ba2b612e32615394d80d0a3a2dcb07b1fbfdfababc7","size":102400},{"targetName":"cloudflare-c","es":358,"url":"https://ptcfc.com/img/284/r20-100KB.png","digest":"27bce9e85eaf3567a4695ba2b612e32615394d80d0a3a2dcb07b1fbfdfababc7","size":102400}],"weight":5},{"name":"group-bgp-safety","rate":0.3,"prefix":"","es":0,"type":"api","canFail":true,"allowMobile":true,"assets":[{"targetName":"bgp-rpki-valid","url":"https://valid.rpki.cloudflare.com/","digest":"75825144b8c594ba4646df2483e7482886dccf475a00fe97bb2efbf343e979e1"},{"targetName":"bgp-rpki-invalid","url":"https://invalid.rpki.cloudflare.com/","digest":"5df3a2de9aef0dc867ae83fd47ff0078f2016999735d337401f771aaedb063e3"}],"weight":2}])}!document.readyState||"complete"!==document.readyState&&"interactive"!==document.readyState?window.addEventListener("DOMContentLoaded",(()=>{R()})):R();
(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>i});var r=t(601),o=t.n(r),a=t(314),c=t.n(a)()(o());c.push([n.id,"body {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #e0e0e0;\n  font-family: sans-serif;\n  margin: 0;\n}\n\n.calculator {\n  width: 260px;\n  border-radius: 15px;\n  background-color: #333;\n  padding: 20px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n}\n\n.display {\n  width: 100%;\n  height: 50px;\n  border: none;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 32px;\n  background-color: #4a4a4a;\n  color: #fff;\n  text-align: right;\n  margin-bottom: 20px;\n  border-radius: 10px;\n}\n\n.keys {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 10px;\n}\n\nbutton {\n  height: 50px;\n  font-size: 1.4rem;\n  border: none;\n  border-radius: 10px;\n  background-color: #505050;\n  color: white;\n  transition: background-color 0.2s;\n}\n\nbutton:hover {\n  cursor: pointer;\n  background-color: #666;\n}\n\nbutton.clear_btn:hover {\n  cursor: pointer;\n  background-color: #f42a2a;\n}\n\nbutton.operator {\n  background-color: #f1a33c;\n}\n\nbutton.operator:hover {\n  background-color: #f09722;\n}\n\nbutton.clear_btn {\n  background-color: #ff5c5c;\n}\n\nbutton#result {\n  background-color: #f1a33c;\n}\n\n.dark-theme {\n  background-color: #121212;\n}\n\n.dark-theme .calculator {\n  background-color: #1e1e1e;\n}\n\n.dark-theme .display {\n  background-color: #424242;\n}\n\n.dark-theme button {\n  background-color: #4a4a4a;\n  color: #fff;\n}\n\n.dark-theme button.clear_btn {\n  background-color: #ff3b3b;\n}\n\n.dark-theme button.clear_btn:hover {\n  background-color: #f42a2a;\n}\n\n.dark-theme button.operator {\n  background-color: #f1a33c;\n}\n\n.dark-theme button.operator:hover {\n  background-color: #f09722;\n}\n\n.theme-toggle {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.toggle-text {\n  margin-top: 5px;\n  font-size: 0.8rem;\n  color: #fff;\n}\n\n.theme-toggle input {\n  display: none;\n}\n\n.toggle-label {\n  width: 60px;\n  height: 30px;\n  background-color: #505050;\n  border-radius: 30px;\n  position: relative;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n\n.toggle-label::after {\n  content: '';\n  width: 26px;\n  height: 26px;\n  background-color: #fff;\n  border-radius: 50%;\n  position: absolute;\n  left: 2px;\n  bottom: 2px;\n  transition: transform 0.2s;\n}\n\n#theme-toggle:checked + .toggle-label {\n  background-color: #f1a33c;\n}\n\n#theme-toggle:checked + .toggle-label::after {\n  transform: translateX(30px);\n}",""]);const i=c},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(c[u]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var u=n[i],l=r.base?u[0]+r.base:u[0],d=a[l]||0,s="".concat(l," ").concat(d);a[l]=d+1;var f=t(s),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var m=o(p,r);r.byIndex=i,e.splice(i,0,{identifier:s,updater:m,references:1})}c.push(s)}return c}function o(n,e){var t=e.domAPI(e);t.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var u=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=u}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),c=t.n(a),i=t(659),u=t.n(i),l=t(56),d=t.n(l),s=t(540),f=t.n(s),p=t(113),m=t.n(p),g=t(208),b={};b.styleTagTransform=m(),b.setAttributes=d(),b.insert=u().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=f();o()(g.A,b);g.A&&g.A.locals&&g.A.locals;function v(n){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},v(n)}function h(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,y(r.key),r)}}function y(n){var e=function(n,e){if("object"!=v(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,e||"default");if("object"!=v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"==v(e)?e:e+""}var k=function(){return n=function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)},e=[{key:"add",value:function(n,e){return(10*n+10*e)/10}},{key:"subtract",value:function(n,e){return n-e}},{key:"multiply",value:function(n,e){return n*e}},{key:"divide",value:function(n,e){return 0===e&&console.log("Cannot divide by zero"),n/e}},{key:"percentage",value:function(n,e){return n*e/100}},{key:"reset",value:function(){this.currentValue=null}}],e&&h(n.prototype,e),t&&h(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,e,t}(),x=new k,S=document.querySelector(".display"),E=document.querySelectorAll(".number"),w=document.querySelectorAll(".operator"),I=document.querySelector(".clear_btn"),L=document.getElementById("result"),A=document.getElementById("comma"),C=document.getElementById("percent"),T=document.getElementById("theme-toggle"),j=document.body,F=document.getElementById("toggle-sign"),M="",P="",_="",O=null,q=!1,z=!1,B=function(n){S.value=n||"0"},N=function(){M="",P="",_="",O=null,q=!1,z=!1,B()};E.forEach((function(n){n.addEventListener("click",(function(){var e=n.textContent;z&&N(),B(q?P+=e:M+=e)}))})),w.forEach((function(n){var e=n.textContent;n.addEventListener("click",(function(){"-"!==e||""!==M||q?"-"===e&&q&&""===P?B(P="-"):(q&&""!==P&&H(),_=e,null===O||q||(M=O.toString()),q=!0,z=!1,B(_)):B(M="-")}))})),C.addEventListener("click",(function(){if(""!==M&&""!==P){B("".concat(P,"%"));var n=x.percentage(parseFloat(M),parseFloat(P));P=n.toString()}}));var H=function(){var n=parseFloat(M),e=parseFloat(P);switch(_){case"+":O=x.add(n,e);break;case"-":O=x.subtract(n,e);break;case"×":O=x.multiply(n,e);break;case"÷":if(0===e)return void B("Error");O=x.divide(n,e)}M=O.toString(),P="",_="",q=!1,z=!0,B(O)};A.addEventListener("click",(function(){(q?P:M).includes(".")||B(q?P+=".":M+=".")})),I.addEventListener("click",(function(){N(),B()})),F.addEventListener("click",(function(){var n=q?P:M;if(""!==n){var e=(-parseFloat(n)).toString();q?P=e:M=e,B(e),z&&(O=parseFloat(e),M=O.toString())}})),L.addEventListener("click",(function(){""!==M&&""!==_&&(""===P&&null!==O&&(P=M),H())})),"dark"===localStorage.getItem("theme")&&(j.classList.add("dark-theme"),T.checked=!0),T.addEventListener("change",(function(){T.checked?(j.classList.add("dark-theme"),localStorage.setItem("theme","dark")):(j.classList.remove("dark-theme"),localStorage.setItem("theme","light"))}))})();
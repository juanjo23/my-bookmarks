(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/self-link_light.277aee37.svg"},function(e,t,a){e.exports=a.p+"static/media/self-link_dark.d7e962e2.svg"},function(e,t,a){e.exports=a.p+"static/media/external-link_light.37f137de.svg"},function(e,t,a){e.exports=a.p+"static/media/external-link_dark.24126654.svg"},function(e,t,a){e.exports=a(38)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),l=(a(16),a(18),function(e){return c.a.createElement("div",{className:"Header"},c.a.createElement("h1",{className:"title"},e.title),c.a.createElement("p",{className:"subtitle"}," ",e.desc," "))}),i=a(1),s=(a(20),a(22),function(e){var t=e.value,a=e.onChange,r=e.label,o=e.id;return Object(n.useEffect)(function(){var e=document.getElementById(o),t=e.previousElementSibling;e.value&&t.classList.add("float-above")},[]),c.a.createElement("div",{className:"input-group"},c.a.createElement("label",{htmlFor:o,className:"float-label"},r),c.a.createElement("input",{type:"text",id:o,className:"input-field",value:t,onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return a(o,e.target.value)}),onFocus:function(e){var t=e.target.nextElementSibling;e.target.previousElementSibling.classList.add("float-above"),t.classList.add("extended")},onBlur:function(e){var t=e.target,a=t.nextElementSibling,n=t.previousElementSibling;a.classList.remove("extended"),!t.value&&n.classList.remove("float-above")},autoComplete:"off"}),c.a.createElement("div",{className:"line-ripple"}))}),u=(a(24),function(e){var t=e.checked,a=e.onChange;return c.a.createElement("label",{className:"mdc-checkbox"},c.a.createElement("input",{type:"checkbox",id:"checkbox",className:"mdc-checkbox__native-control",checked:t,onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return a(!t)})}),c.a.createElement("div",{className:"mdc-checkbox__background"},c.a.createElement("svg",{className:"mdc-checkbox__checkmark",viewBox:"0 0 24 24"},c.a.createElement("path",{stroke:"white",d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),c.a.createElement("div",{className:"mdc-checkbox__mixedmark"})),"Open in external tab")}),m=(a(26),function(e){var t=e.value,a=e.isPrimary,n=e.onClick;return c.a.createElement("button",{className:"button ".concat(a?"primary":"secondary"),onClick:n},t)}),v=a(2),d=(a(28),function(e){var t=e.color,a=e.onClick;return c.a.createElement("div",{className:"cell",onClick:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return a(t)}),style:{background:t}})});function f(e){var t=e.onSelectColor,a=["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800"],n=[].concat(Object(v.a)(a.slice(0,5)),Object(v.a)(a.slice(5,10).reverse()),Object(v.a)(a.slice(10,15)));return c.a.createElement("div",{className:"Palette"},n.map(function(e,a){return c.a.createElement(d,{key:a,color:e,onClick:function(){return t(e)}})}))}a(30);var b=function(e){var t=e.color,a=e.onSelectColor;return c.a.createElement("div",{className:"CustomColor"},c.a.createElement("input",{type:"text",className:"custom",style:{borderColor:t},value:t,onChange:function(e){return a(e.target.value)}}),c.a.createElement(E,{color:t,onSelectColor:a}))};function E(e){var t=e.color,a=e.onSelectColor,n=t.replace("#","");n=3===n.length?n.split("").map(function(e){return e+e}).join(""):n;var r=parseInt(n.substr(0,2),16)||0,o=parseInt(n.substr(2,2),16)||0,l=parseInt(n.substr(4,2),16)||0,i=function(e,n){var c=t.replace("#",""),r=c.substr(0,2),o=c.substr(2,2),l=c.substr(4,2);switch(n=n>255?255:n||0,n=("00"+parseInt(n,10).toString(16)).toUpperCase().slice(-2),e){case"R":c="#".concat(n).concat(o).concat(l);break;case"G":c="#".concat(r).concat(n).concat(l);break;default:c="#".concat(r).concat(o).concat(n)}a(c)};return c.a.createElement("div",null,c.a.createElement(k,{label:"R",value:r,key:"R",onChange:i}),c.a.createElement(k,{label:"G",value:o,key:"G",onChange:i}),c.a.createElement(k,{label:"B",value:l,key:"B",onChange:i}))}function k(e){var t=e.label,a=e.value,r=e.onChange;return Object(n.useEffect)(function(){var e=function(e){38===e.keyCode?(e.preventDefault(),r(t,parseInt(e.target.value)+1)):40===e.keyCode&&r(t,parseInt(e.target.value)-1)},a=document.getElementById(t);return a.addEventListener("keydown",e),function(){a.removeEventListener("keydown",e)}}),c.a.createElement("div",{className:"rgbgroup"},c.a.createElement("div",{className:"rgblabel"},t),c.a.createElement("input",{id:t,className:"rgb",value:a,onChange:function(e){return r(t,e.target.value)},type:"text",autoComplete:"off"}))}a(32);var p=function(e){var t=e.onSave,a=e.bookmark,r=e.dismissModal,o=Object(n.useState)(a.value),l=Object(i.a)(o,2),v=l[0],d=l[1],E=Object(n.useState)(a.url),k=Object(i.a)(E,2),p=k[0],h=k[1],g=Object(n.useState)(a.isExternal),C=Object(i.a)(g,2),N=C[0],y=C[1],x=Object(n.useState)(a.backColor),S=Object(i.a)(x,2),w=S[0],O=S[1];return c.a.createElement("div",{className:"Modal"},c.a.createElement("div",{className:"modal-dialog zoomInUp animated"},c.a.createElement("h2",{className:"modal-title"},"Bookmark options:"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-left"},c.a.createElement(f,{onSelectColor:function(e){return O(e)}}),c.a.createElement(b,{color:w,onSelectColor:function(e){return O(e)}})),c.a.createElement("div",{className:"col-right"},c.a.createElement(s,{id:"name",value:v,onChange:function(e,t){return d(t)},label:"Name"}),c.a.createElement(s,{id:"url",value:p||"",onChange:function(e,t){return h(t)},label:"Url"}),c.a.createElement(u,{checked:N,onChange:function(e){y(e)}}),c.a.createElement(m,{value:"Cancel",isPrimary:!1,onClick:function(){return r()}}),c.a.createElement(m,{value:"Save",isPrimary:!0,onClick:function(){return a.isEmpty=!1,a.value=v,a.url=p,a.isExternal=N,a.backColor=w,void t(a)}})))),c.a.createElement("div",{className:"modal-backdrop",onClick:function(e){return r()}}))},h=(a(34),function(e){var t=e.className;return c.a.createElement("svg",{className:t,viewBox:"0 0 384 512"},c.a.createElement("path",{d:"M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"}))}),g=function(e){var t=e.className;return c.a.createElement("svg",{className:t,viewBox:"0 0 512 512"},c.a.createElement("path",{d:"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"}))},C=function(e){var t=e.className;return c.a.createElement("svg",{className:t,viewBox:"0 0 448 512"},c.a.createElement("path",{fill:"currentColor",d:"M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"}))},N=function(e){var t=e.bookmark,a=e.handleAddEdit,n=e.handleRemove,r={backgroundImage:"url('".concat(t.iconUrl,"')"),backgroundColor:t.backColor};return t.isEmpty?c.a.createElement("button",{className:"Bookmark empty",onClick:function(){return a(t)}},c.a.createElement(h,{className:"add-icon"})):c.a.createElement("div",{className:"Bookmark filled",style:r},c.a.createElement("a",{href:t.url,target:t.isExternal?"_blank":"_self",rel:"noopener noreferrer"},t.value&&c.a.createElement("span",{className:"overlay"}," ",t.value," ")),c.a.createElement("div",{className:"ctas"},c.a.createElement("button",{className:"cta-button",onClick:function(){return a(t)}},c.a.createElement(g,{className:"edit-icon"})),c.a.createElement("button",{className:"cta-button",onClick:function(e){return n(t.key)}},c.a.createElement(C,{className:"edit-icon"}))))},y=a(5),x=function e(){Object(y.a)(this,e),this.key=0,this.isEmpty=!0,this.value="",this.url=void 0,this.iconUrl=void 0,this.isExternal=void 0,this.backColor="black"},S=a(6),w=a.n(S),O=a(7),j=a.n(O),B=a(8),I=a.n(B),M=a(9),F=a.n(M),_=[],L=localStorage.getItem("bookmarks");if(L)_=JSON.parse(L);else for(var z=0;z<8;z+=1)_.push({value:"",key:z,isEmpty:!0,backColor:"black"});var A=function(){var e=Object(n.useState)({showModal:!1,bookmark:new x}),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(_),l=Object(i.a)(o,2),s=l[0],u=l[1];Object(n.useEffect)(function(){localStorage.setItem("bookmarks",JSON.stringify(s))});var m=function(e){r({showModal:!0,bookmark:e})},v=function(e){s[e].isEmpty=!0,u(s)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"BookmarkList"},s.map(function(e){return c.a.createElement(N,{key:e.key,bookmark:e,handleAddEdit:m,handleRemove:v})})),a.showModal?c.a.createElement(p,{onSave:function(e){r({showModal:!1,bookmark:e});var t=function(e){var t="#"===e.charAt(0)?e.substring(1,7):e,a=parseInt(t.substring(0,2),16),n=parseInt(t.substring(2,4),16),c=parseInt(t.substring(4,6),16);return.299*a+.587*n+.114*c<186}(e.backColor);e.iconUrl=e.isExternal?t?I.a:F.a:t?w.a:j.a,s[e.key]=e,u(s)},dismissModal:function(e){r({showModal:!1,bookmark:e})},bookmark:a.bookmark}):null)};a(36);console.log(c.a.version);var V=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(l,{title:"My Bookmarks",desc:"Most daily used links"}),c.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.b9455e65.chunk.js.map
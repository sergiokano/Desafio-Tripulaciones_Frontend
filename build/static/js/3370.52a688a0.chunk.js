"use strict";(self.webpackChunkfrontend_tripulaciones=self.webpackChunkfrontend_tripulaciones||[]).push([[3370],{79347:function(e,t,n){n.d(t,{e:function(){return l}});var r,i,u,a={exports:{}};r=a,i=function(){function e(e,n,i){i=i||2;var u,a,l,f,m,x,p,y=n&&n.length,c=y?n[0]*i:e.length,v=t(e,0,c,i,!0),s=[];if(!v||v.next===v.prev)return s;if(y&&(v=o(e,n,v,i)),e.length>80*i){u=l=e[0],a=f=e[1];for(var d=i;d<c;d+=i)(m=e[d])<u&&(u=m),(x=e[d+1])<a&&(a=x),m>l&&(l=m),x>f&&(f=x);p=0!==(p=Math.max(l-u,f-a))?1/p:0}return r(v,s,i,u,a,p),s}function t(e,t,n,r,i){var u,a;if(i===P(e,t,n,r)>0)for(u=t;u<n;u+=r)a=L(u,e[u],e[u+1],a);else for(u=n-r;u>=t;u-=r)a=L(u,e[u],e[u+1],a);if(a&&b(a,a.next)){var l=a.next;R(a),a=l}return a}function n(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!b(r,r.next)&&0!==h(r.prev,r,r.next))r=r.next;else{var i=r.prev;if(R(r),(r=t=i)===r.next)break;n=!0}}while(n||r!==t);return t}function r(e,t,o,f,m,x,p){if(e){!p&&x&&y(e,f,m,x);for(var c,v,s=e;e.prev!==e.next;)if(c=e.prev,v=e.next,x?u(e,f,m,x):i(e))t.push(c.i/o),t.push(e.i/o),t.push(v.i/o),R(e),e=v.next,s=v.next;else if((e=v)===s){p?1===p?r(e=a(n(e),t,o),t,o,f,m,x,2):2===p&&l(e,t,o,f,m,x):r(n(e),t,o,f,m,x,1);break}}}function i(e){var t=e.prev,n=e,r=e.next;if(h(t,n,r)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(s(t.x,t.y,n.x,n.y,r.x,r.y,i.x,i.y)&&h(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function u(e,t,n,r){var i=e.prev,u=e,a=e.next;if(h(i,u,a)>=0)return!1;for(var l=i.x<u.x?i.x<a.x?i.x:a.x:u.x<a.x?u.x:a.x,o=i.y<u.y?i.y<a.y?i.y:a.y:u.y<a.y?u.y:a.y,f=i.x>u.x?i.x>a.x?i.x:a.x:u.x>a.x?u.x:a.x,m=i.y>u.y?i.y>a.y?i.y:a.y:u.y>a.y?u.y:a.y,x=c(l,o,t,n,r),p=c(f,m,t,n,r),y=e.prevZ,v=e.nextZ;y&&y.z>=x&&v&&v.z<=p;){if(y!==e.prev&&y!==e.next&&s(i.x,i.y,u.x,u.y,a.x,a.y,y.x,y.y)&&h(y.prev,y,y.next)>=0)return!1;if(y=y.prevZ,v!==e.prev&&v!==e.next&&s(i.x,i.y,u.x,u.y,a.x,a.y,v.x,v.y)&&h(v.prev,v,v.next)>=0)return!1;v=v.nextZ}for(;y&&y.z>=x;){if(y!==e.prev&&y!==e.next&&s(i.x,i.y,u.x,u.y,a.x,a.y,y.x,y.y)&&h(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=p;){if(v!==e.prev&&v!==e.next&&s(i.x,i.y,u.x,u.y,a.x,a.y,v.x,v.y)&&h(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function a(e,t,r){var i=e;do{var u=i.prev,a=i.next.next;!b(u,a)&&T(u,i,i.next,a)&&I(u,a)&&I(a,u)&&(t.push(u.i/r),t.push(i.i/r),t.push(a.i/r),R(i),R(i.next),i=e=a),i=i.next}while(i!==e);return n(i)}function l(e,t,i,u,a,l){var o=e;do{for(var f=o.next.next;f!==o.prev;){if(o.i!==f.i&&d(o,f)){var m=O(o,f);return o=n(o,o.next),m=n(m,m.next),r(o,t,i,u,a,l),void r(m,t,i,u,a,l)}f=f.next}o=o.next}while(o!==e)}function o(e,r,i,u){var a,l,o,m=[];for(a=0,l=r.length;a<l;a++)(o=t(e,r[a]*u,a<l-1?r[a+1]*u:e.length,u,!1))===o.next&&(o.steiner=!0),m.push(v(o));for(m.sort(f),a=0;a<m.length;a++)i=n(i=x(m[a],i),i.next);return i}function f(e,t){return e.x-t.x}function m(e){if(e.next.prev===e)return e;for(var t=e;;){var n=t.next;if(n.prev===t||n===t||n===e)break;t=n}return t}function x(e,t){var r=function(e,t){var n,r=t,i=e.x,u=e.y,a=-1/0;do{if(u<=r.y&&u>=r.next.y&&r.next.y!==r.y){var l=r.x+(u-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(l<=i&&l>a){if(a=l,l===i){if(u===r.y)return r;if(u===r.next.y)return r.next}n=r.x<r.next.x?r:r.next}}r=r.next}while(r!==t);if(!n)return null;if(i===a)return n;var o,f=n,m=n.x,x=n.y,y=1/0;r=n;do{i>=r.x&&r.x>=m&&i!==r.x&&s(u<x?i:a,u,m,x,u<x?a:i,u,r.x,r.y)&&(o=Math.abs(u-r.y)/(i-r.x),I(r,e)&&(o<y||o===y&&(r.x>n.x||r.x===n.x&&p(n,r)))&&(n=r,y=o)),r=r.next}while(r!==f);return n}(e,t);if(!r)return t;var i=O(r,e),u=n(r,r.next),a=m(i);return n(a,a.next),u=m(u),m(t===r?u:t)}function p(e,t){return h(e.prev,e,t.prev)<0&&h(t.next,e,e.next)<0}function y(e,t,n,r){var i=e;do{null===i.z&&(i.z=c(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,function(e){var t,n,r,i,u,a,l,o,f=1;do{for(n=e,e=null,u=null,a=0;n;){for(a++,r=n,l=0,t=0;t<f&&(l++,r=r.nextZ);t++);for(o=f;l>0||o>0&&r;)0!==l&&(0===o||!r||n.z<=r.z)?(i=n,n=n.nextZ,l--):(i=r,r=r.nextZ,o--),u?u.nextZ=i:e=i,i.prevZ=u,u=i;n=r}u.nextZ=null,f*=2}while(a>1)}(i)}function c(e,t,n,r,i){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*i)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function v(e){var t=e,n=e;do{(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next}while(t!==e);return n}function s(e,t,n,r,i,u,a,l){return(i-a)*(t-l)-(e-a)*(u-l)>=0&&(e-a)*(r-l)-(n-a)*(t-l)>=0&&(n-a)*(u-l)-(i-a)*(r-l)>=0}function d(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&T(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}(e,t)&&(I(e,t)&&I(t,e)&&function(e,t){var n=e,r=!1,i=(e.x+t.x)/2,u=(e.y+t.y)/2;do{n.y>u!=n.next.y>u&&n.next.y!==n.y&&i<(n.next.x-n.x)*(u-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==e);return r}(e,t)&&(h(e.prev,e,t.prev)||h(e,t.prev,t))||b(e,t)&&h(e.prev,e,e.next)>0&&h(t.prev,t,t.next)>0)}function h(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function b(e,t){return e.x===t.x&&e.y===t.y}function T(e,t,n,r){var i=g(h(e,t,n)),u=g(h(e,t,r)),a=g(h(n,r,e)),l=g(h(n,r,t));return i!==u&&a!==l||!(0!==i||!E(e,n,t))||!(0!==u||!E(e,r,t))||!(0!==a||!E(n,e,r))||!(0!==l||!E(n,t,r))}function E(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function g(e){return e>0?1:e<0?-1:0}function I(e,t){return h(e.prev,e,e.next)<0?h(e,t,e.next)>=0&&h(e,e.prev,t)>=0:h(e,t,e.prev)<0||h(e,e.next,t)<0}function O(e,t){var n=new N(e.i,e.x,e.y),r=new N(t.i,t.x,t.y),i=e.next,u=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,u.next=r,r.prev=u,r}function L(e,t,n,r){var i=new N(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function R(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function N(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function P(e,t,n,r){for(var i=0,u=t,a=n-r;u<n;u+=r)i+=(e[a]-e[u])*(e[u+1]+e[a+1]),a=u;return i}return e.deviation=function(e,t,n,r){var i=t&&t.length,u=i?t[0]*n:e.length,a=Math.abs(P(e,0,u,n));if(i)for(var l=0,o=t.length;l<o;l++){var f=t[l]*n,m=l<o-1?t[l+1]*n:e.length;a-=Math.abs(P(e,f,m,n))}var x=0;for(l=0;l<r.length;l+=3){var p=r[l]*n,y=r[l+1]*n,c=r[l+2]*n;x+=Math.abs((e[p]-e[c])*(e[y+1]-e[p+1])-(e[p]-e[y])*(e[c+1]-e[p+1]))}return 0===a&&0===x?0:Math.abs((x-a)/a)},e.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,i=0;i<e.length;i++){for(var u=0;u<e[i].length;u++)for(var a=0;a<t;a++)n.vertices.push(e[i][u][a]);i>0&&(r+=e[i-1].length,n.holes.push(r))}return n},e},void 0!==(u=i())&&(r.exports=u);var l=a.exports},46618:function(e,t,n){n.d(t,{Bf:function(){return r},PF:function(){return i},Ts:function(){return u},nN:function(){return a}});var r=!0,i=32,u=1.5,a=200},21391:function(e,t,n){n.d(t,{EE:function(){return i},R:function(){return u},_5:function(){return f},aF:function(){return a},f2:function(){return s},fD:function(){return m},fR:function(){return r},nR:function(){return o},r1:function(){return x},vL:function(){return l}});var r,i,u,a,l,o,f,m,x,p,y=n(43144),c=n(15671),v=n(48202);(p=r||(r={}))[p.BACKGROUND=0]="BACKGROUND",p[p.FILL=1]="FILL",p[p.LINE=2]="LINE",p[p.SYMBOL=3]="SYMBOL",p[p.CIRCLE=4]="CIRCLE",function(e){e[e.VISIBLE=0]="VISIBLE",e[e.NONE=1]="NONE"}(i||(i={})),function(e){e[e.POINT=0]="POINT",e[e.LINE=1]="LINE",e[e.LINE_CENTER=2]="LINE_CENTER"}(u||(u={})),function(e){e[e.MAP=0]="MAP",e[e.VIEWPORT=1]="VIEWPORT",e[e.AUTO=2]="AUTO"}(a||(a={})),function(e){e[e.AUTO=0]="AUTO",e[e.LEFT=1]="LEFT",e[e.CENTER=2]="CENTER",e[e.RIGHT=3]="RIGHT"}(l||(l={})),function(e){e[e.CENTER=0]="CENTER",e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT",e[e.TOP=3]="TOP",e[e.BOTTOM=4]="BOTTOM",e[e.TOP_LEFT=5]="TOP_LEFT",e[e.TOP_RIGHT=6]="TOP_RIGHT",e[e.BOTTOM_LEFT=7]="BOTTOM_LEFT",e[e.BOTTOM_RIGHT=8]="BOTTOM_RIGHT"}(o||(o={})),function(e){e[e.NONE=0]="NONE",e[e.UPPERCASE=1]="UPPERCASE",e[e.LOWERCASE=2]="LOWERCASE"}(f||(f={})),function(e){e[e.MAP=0]="MAP",e[e.VIEWPORT=1]="VIEWPORT"}(m||(m={})),function(e){e[e.HORIZONTAL=0]="HORIZONTAL",e[e.VERTICAL=1]="VERTICAL"}(x||(x={}));var s=(0,y.Z)((function e(){(0,c.Z)(this,e)}));s.backgroundLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:i.VISIBLE}},s.fillLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:i.VISIBLE}},s.lineLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:i.VISIBLE},"line-cap":{type:"enum",values:["butt","round","square"],default:v.RL.BUTT},"line-join":{type:"enum",values:["bevel","round","miter"],default:v.AH.MITER},"line-miter-limit":{type:"number",default:2},"line-round-limit":{type:"number",default:1.05}},s.symbolLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:i.VISIBLE},"symbol-avoid-edges":{type:"boolean",default:!1},"symbol-placement":{type:"enum",values:["point","line","line-center"],default:u.POINT},"symbol-sort-key":{type:"number",default:-1},"symbol-spacing":{type:"number",minimum:1,default:250},"icon-allow-overlap":{type:"boolean",default:!1},"icon-anchor":{type:"enum",values:["center","left","right","top","bottom","top-left","top-right","bottom-left","bottom-right"],default:o.CENTER},"icon-ignore-placement":{type:"boolean",default:!1},"icon-image":{type:"string"},"icon-keep-upright":{type:"boolean",default:!1},"icon-offset":{type:"array",value:"number",length:2,default:[0,0]},"icon-optional":{type:"boolean",default:!1},"icon-padding":{type:"number",minimum:0,default:2},"icon-rotate":{type:"number",default:0},"icon-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:a.AUTO},"icon-size":{type:"number",minimum:0,default:1},"text-allow-overlap":{type:"boolean",default:!1},"text-anchor":{type:"enum",values:["center","left","right","top","bottom","top-left","top-right","bottom-left","bottom-right"],default:o.CENTER},"text-field":{type:"string"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"]},"text-ignore-placement":{type:"boolean",default:!1},"text-justify":{type:"enum",values:["auto","left","center","right"],default:l.CENTER},"text-keep-upright":{type:"boolean",default:!0},"text-letter-spacing":{type:"number",default:0},"text-line-height":{type:"number",default:1.2},"text-max-angle":{type:"number",minimum:0,default:45},"text-max-width":{type:"number",minimum:0,default:10},"text-offset":{type:"array",value:"number",length:2,default:[0,0]},"text-optional":{type:"boolean",default:!1},"text-padding":{type:"number",minimum:0,default:2},"text-rotate":{type:"number",default:0},"text-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:a.AUTO},"text-size":{type:"number",minimum:0,default:16},"text-transform":{type:"enum",values:["none","uppercase","lowercase"],default:f.NONE},"text-writing-mode":{type:"array",value:"enum",values:["horizontal","vertical"],default:[x.HORIZONTAL]}},s.circleLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:i.VISIBLE}},s.backgroundPaintDefinition={"background-color":{type:"color",default:[0,0,0,1]},"background-opacity":{type:"number",minimum:0,maximum:1,default:1},"background-pattern":{type:"string"}},s.fillPaintDefinition={"fill-antialias":{type:"boolean",default:!0},"fill-color":{type:"color",default:[0,0,0,1]},"fill-opacity":{type:"number",minimum:0,maximum:1,default:1},"fill-outline-color":{type:"color",default:[0,0,0,0]},"fill-pattern":{type:"string"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0]},"fill-translate-anchor":{type:"enum",values:["map","viewport"],default:m.MAP}},s.linePaintDefinition={"line-blur":{type:"number",minimum:0,default:0},"line-color":{type:"color",default:[0,0,0,1]},"line-dasharray":{type:"array",value:"number",default:[]},"line-gap-width":{type:"number",minimum:0,default:0},"line-offset":{type:"number",default:0},"line-opacity":{type:"number",minimum:0,maximum:1,default:1},"line-pattern":{type:"string"},"line-translate":{type:"array",value:"number",length:2,default:[0,0]},"line-translate-anchor":{type:"enum",values:["map","viewport"],default:m.MAP},"line-width":{type:"number",minimum:0,default:1}},s.symbolPaintDefinition={"icon-color":{type:"color",default:[0,0,0,1]},"icon-halo-blur":{type:"number",minimum:0,default:0},"icon-halo-color":{type:"color",default:[0,0,0,0]},"icon-halo-width":{type:"number",minimum:0,default:0},"icon-opacity":{type:"number",minimum:0,maximum:1,default:1},"icon-translate":{type:"array",value:"number",length:2,default:[0,0]},"icon-translate-anchor":{type:"enum",values:["map","viewport"],default:m.MAP},"text-color":{type:"color",default:[0,0,0,1]},"text-halo-blur":{type:"number",minimum:0,default:0},"text-halo-color":{type:"color",default:[0,0,0,0]},"text-halo-width":{type:"number",minimum:0,default:0},"text-opacity":{type:"number",minimum:0,maximum:1,default:1},"text-translate":{type:"array",value:"number",length:2,default:[0,0]},"text-translate-anchor":{type:"enum",values:["map","viewport"],default:m.MAP}},s.rasterPaintDefinition={"raster-opacity":{type:"number",minimum:0,maximum:1,default:1},"raster-hue-rotate":{type:"number",default:0},"raster-brightness-min":{type:"number",minimum:0,maximum:1,default:0},"raster-brightness-max":{type:"number",minimum:0,maximum:1,default:1},"raster-saturation":{type:"number",minimum:-1,maximum:1,default:0},"raster-contrast":{type:"number",minimum:-1,maximum:1,default:0},"raster-fade-duration":{type:"number",minimum:0,default:300}},s.circlePaintDefinition={"circle-blur":{type:"number",minimum:0,default:0},"circle-color":{type:"color",default:[0,0,0,1]},"circle-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-radius":{type:"number",minimum:0,default:5},"circle-stroke-color":{type:"color",default:[0,0,0,1]},"circle-stroke-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-stroke-width":{type:"number",minimum:0,default:0},"circle-translate":{type:"array",value:"number",length:2,default:[0,0]},"circle-translate-anchor":{type:"enum",values:["map","viewport"],default:m.MAP}}},13200:function(e,t,n){n.d(t,{k3:function(){return a},s5:function(){return u},vX:function(){return l}});Number.POSITIVE_INFINITY,Math.PI;var r=1/Math.LN2;function i(e,t){return(e%=t)>=0?e:e+t}function u(e){return i(.7111111111111111*e,256)}function a(e){return Math.log(e)*r}function l(e,t,n){return e>=t&&e<=n||e>=n&&e<=t}}}]);
//# sourceMappingURL=3370.52a688a0.chunk.js.map
"use strict";(self.webpackChunkfrontend_tripulaciones=self.webpackChunkfrontend_tripulaciones||[]).push([[1486],{76551:function(n,e,a){a.d(e,{Z:function(){return g}});var t=a(15671),r=a(43144),i=a(60136),l=a(29388),u=a(27366),o=a(43404),s=a(49861),f=(a(63780),a(25243),a(69912)),c=a(46784),v=a(57634),d=a(22061),m=new o.X({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"}),p=function(n){(0,i.Z)(a,n);var e=(0,l.Z)(a);function a(){var n;return(0,t.Z)(this,a),(n=e.apply(this,arguments)).baseSymbol=null,n.colorRamp=null,n.type=null,n}return(0,r.Z)(a)}(c.wq);(0,u._)([(0,s.Cb)({type:d.Z,json:{write:!0}})],p.prototype,"baseSymbol",void 0),(0,u._)([(0,s.Cb)({types:v.V,json:{read:{reader:v.i},write:!0}})],p.prototype,"colorRamp",void 0),(0,u._)([(0,s.Cb)({json:{read:m.read,write:m.write}})],p.prototype,"type",void 0);var h=p=(0,u._)([(0,f.j)("esri.rest.support.ClassificationDefinition")],p),b=new o.X({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),y=new o.X({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"}),V=function(n){(0,i.Z)(a,n);var e=(0,l.Z)(a);function a(){var n;return(0,t.Z)(this,a),(n=e.apply(this,arguments)).breakCount=null,n.classificationField=null,n.classificationMethod=null,n.normalizationField=null,n.normalizationType=null,n.type="class-breaks-definition",n}return(0,r.Z)(a,[{key:"standardDeviationInterval",set:function(n){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",n)}},{key:"definedInterval",set:function(n){"defined-interval"===this.classificationMethod&&this._set("definedInterval",n)}}]),a}(h);(0,u._)([(0,s.Cb)({json:{write:!0}})],V.prototype,"breakCount",void 0),(0,u._)([(0,s.Cb)({json:{write:!0}})],V.prototype,"classificationField",void 0),(0,u._)([(0,s.Cb)({type:String,json:{read:b.read,write:b.write}})],V.prototype,"classificationMethod",void 0),(0,u._)([(0,s.Cb)({json:{write:!0}})],V.prototype,"normalizationField",void 0),(0,u._)([(0,s.Cb)({json:{read:y.read,write:y.write}})],V.prototype,"normalizationType",void 0),(0,u._)([(0,s.Cb)({value:null,json:{write:!0}})],V.prototype,"standardDeviationInterval",null),(0,u._)([(0,s.Cb)({value:null,json:{write:!0}})],V.prototype,"definedInterval",null),(0,u._)([(0,s.Cb)()],V.prototype,"type",void 0);var g=V=(0,u._)([(0,f.j)("esri.rest.support.ClassBreaksDefinition")],V)},51905:function(n,e,a){a.d(e,{k:function(){return i}});var t=a(32718).Z.getLogger("esri.rest.support.generateRendererUtils");function r(n,e){return Number(n.toFixed(e))}function i(n){var e=n.normalizationTotal;return{classBreaks:l(n),normalizationTotal:e}}function l(n){var e=n.definition,a=e.classificationMethod,t=e.breakCount,i=e.normalizationType,l=e.definedInterval,f=[],c=n.values;if(0===c.length)return[];c=c.sort((function(n,e){return n-e}));var v=c[0],d=c[c.length-1];if("equal-interval"===a)if(c.length>=t){for(var m=(d-v)/t,p=v,h=1;h<t;h++){var b=r(v+h*m,6);f.push({minValue:p,maxValue:b,label:u(p,b,i)}),p=b}f.push({minValue:p,maxValue:d,label:u(p,d,i)})}else c.forEach((function(n){f.push({minValue:n,maxValue:n,label:u(n,n,i)})}));else if("natural-breaks"===a){for(var y=o(c),V=n.valueFrequency||y.valueFrequency,g=s(y.uniqueValues,V,t),x=v,T=1;T<t;T++)if(y.uniqueValues.length>T){var F=r(y.uniqueValues[g[T]],6);f.push({minValue:x,maxValue:F,label:u(x,F,i)}),x=F}f.push({minValue:x,maxValue:d,label:u(x,d,i)})}else if("quantile"===a)if(c.length>=t&&v!==d){for(var M=v,k=Math.ceil(c.length/t),C=0,D=1;D<t;D++){var z=k+C-1;z>c.length&&(z=c.length-1),z<0&&(z=0),f.push({minValue:M,maxValue:c[z],label:u(M,c[z],i)}),M=c[z],C+=k,k=Math.ceil((c.length-C)/(t-D))}f.push({minValue:M,maxValue:d,label:u(M,d,i)})}else for(var I=-1,w=0;w<c.length;w++){var S=c[w];S!==I&&(I=S,f.push({minValue:I,maxValue:S,label:u(I,S,i)}),I=S)}else if("standard-deviation"===a){var N=function(n){for(var e=0,a=0;a<n.length;a++)e+=n[a];return e/=n.length,e}(c),q=function(n,e){for(var a=0,t=0;t<n.length;t++){var r=n[t];a+=(r-e)*(r-e)}return a/=n.length,Math.sqrt(a)}(c,N);if(0===q)f.push({minValue:c[0],maxValue:c[0],label:u(c[0],c[0],i)});else{for(var Z=function(n,e,a,t,r){var i=Math.max(t-n,e-t)/r/a;return i=i>=1?1:i>=.5?.5:.25,i}(v,d,t,N,q)*q,_=0,B=v,j=t;j>=1;j--){var E=r(N-(j-.5)*Z,6);f.push({minValue:B,maxValue:E,label:u(B,E,i)}),B=E,_++}var L=r(N+.5*Z,6);f.push({minValue:B,maxValue:L,label:u(B,L,i)}),B=L,_++;for(var U=1;U<=t;U++)L=_===2*t?d:r(N+(U+.5)*Z,6),f.push({minValue:B,maxValue:L,label:u(B,L,i)}),B=L,_++}}else if("defined-interval"===a){if(!l)return f;for(var G=c[0],P=c[c.length-1],O=Math.ceil((P-G)/l),X=G,A=1;A<O;A++){var Q=r(G+A*l,6);f.push({minValue:X,maxValue:Q,label:u(X,Q,i)}),X=Q}f.push({minValue:X,maxValue:P,label:u(X,P,i)})}return f}function u(n,e,a){return n===e?a&&"percent-of-total"===a?n+"%":n.toString():a&&"percent-of-total"===a?n+"% - "+e+"%":n+" - "+e}function o(n){for(var e=[],a=[],t=Number.MIN_VALUE,r=1,i=-1,l=0;l<n.length;l++){var u=n[l];u===t?(r++,a[i]=r):null!==u&&(e.push(u),t=u,r=1,a.push(r),i++)}return{uniqueValues:e,valueFrequency:a}}function s(n,e,a){var t=n.length,r=[];a>t&&(a=t);for(var i=0;i<a;i++)r.push(Math.round(i*t/a-1));r.push(t-1);var l=f(r,n,e,a);return function(n,e,a,t,r,i){for(var l=0,u=0,o=0,s=0,f=!0,v=0;v<2&&f;v++){0===v&&(f=!1);for(var d=0;d<i-1;d++)for(;a[d+1]+1!==a[d+2];){a[d+1]=a[d+1]+1;var m=c(d,a,t,r);o=m.sbMean,l=m.sbSdcm;var p=c(d+1,a,t,r);if(s=p.sbMean,!(l+(u=p.sbSdcm)<e[d]+e[d+1])){a[d+1]=a[d+1]-1;break}e[d]=l,e[d+1]=u,n[d]=o,n[d+1]=s,f=!0}for(var h=i-1;h>0;h--)for(;a[h]!==a[h-1]+1;){a[h]=a[h]-1;var b=c(h-1,a,t,r);o=b.sbMean,l=b.sbSdcm;var y=c(h,a,t,r);if(s=y.sbMean,!(l+(u=y.sbSdcm)<e[h-1]+e[h])){a[h]=a[h]+1;break}e[h-1]=l,e[h]=u,n[h-1]=o,n[h]=s,f=!0}}return f}(l.mean,l.sdcm,r,n,e,a)&&(l=f(r,n,e,a)),r}function f(n,e,a,t){for(var r=[],i=[],l=[],u=0,o=[],s=[],f=0;f<t;f++){var v=c(f,n,e,a);o.push(v.sbMean),s.push(v.sbSdcm),u+=s[f]}for(var d,m=u,p=!0;p||u<m;){p=!1,r=[];for(var h=0;h<t;h++)r.push(n[h]);for(var b=0;b<t;b++)for(var y=n[b]+1;y<=n[b+1];y++)if(d=e[y],b>0&&y!==n[b+1]&&Math.abs(d-o[b])>Math.abs(d-o[b-1]))n[b]=y;else if(b<t-1&&n[b]!==y-1&&Math.abs(d-o[b])>Math.abs(d-o[b+1])){n[b+1]=y-1;break}m=u,u=0,i=[],l=[];for(var V=0;V<t;V++){i.push(o[V]),l.push(s[V]);var g=c(V,n,e,a);o[V]=g.sbMean,s[V]=g.sbSdcm,u+=s[V]}}if(u>m){for(var x=0;x<t;x++)n[x]=r[x],o[x]=i[x],s[x]=l[x];u=m}return{mean:o,sdcm:s}}function c(n,e,a,r){for(var i=0,l=0,u=e[n]+1;u<=e[n+1];u++){var o=r[u];i+=a[u]*o,l+=o}l<=0&&t.warn("Exception in Natural Breaks calculation");for(var s=i/l,f=0,c=e[n]+1;c<=e[n+1];c++)f+=r[c]*Math.pow(a[c]-s,2);return{sbMean:s,sbSdcm:f}}},71486:function(n,e,a){a.d(e,{DL:function(){return k},F_:function(){return y},G2:function(){return F},H0:function(){return v},Lq:function(){return p},Qm:function(){return x},S5:function(){return c},XL:function(){return m},eT:function(){return V},fk:function(){return T},i5:function(){return d},oF:function(){return C},wk:function(){return f}});var t=a(37762),r=a(93433),i=a(76551),l=a(51905),u=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,o=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),s=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function f(n){return null==n||"string"==typeof n&&!n?"<Null>":n}function c(n){var e=null!=n.normalizationField||null!=n.normalizationType,a=null!=n.minValue||null!=n.maxValue,t=!!n.sqlExpression&&n.supportsSQLExpression;return!e&&!a&&!t}function v(n){var e=n.returnDistinct?(0,r.Z)(new Set(n.values)):n.values,a=e.filter((function(n){return null!=n})).length,t={count:a};return n.supportsNullCount&&(t.nullcount=e.length-a),n.percentileParams&&(t.median=m(e,n.percentileParams)),t}function d(n){var e,a=n.values,r=n.useSampleStdDev,i=n.supportsNullCount,l=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,o=null,s=null,f=null,c=null,v=0,d=null==n.minValue?-1/0:n.minValue,p=null==n.maxValue?1/0:n.maxValue,h=(0,t.Z)(a);try{for(h.s();!(e=h.n()).done;){var b=e.value;Number.isFinite(b)?b>=d&&b<=p&&(o+=b,l=Math.min(l,b),u=Math.max(u,b),v++):"string"==typeof b&&v++}}catch(F){h.e(F)}finally{h.f()}if(v&&null!=o){s=o/v;var y,V=0,g=(0,t.Z)(a);try{for(g.s();!(y=g.n()).done;){var x=y.value;Number.isFinite(x)&&x>=d&&x<=p&&(V+=Math.pow(x-s,2))}}catch(F){g.e(F)}finally{g.f()}c=r?v>1?V/(v-1):0:v>0?V/v:0,f=Math.sqrt(c)}else l=null,u=null;var T={avg:s,count:v,max:u,min:l,stddev:f,sum:o,variance:c};return i&&(T.nullcount=a.length-v),n.percentileParams&&(T.median=m(a,n.percentileParams)),T}function m(n,e){var a=e.fieldType,t=e.value,i=e.orderBy,l=e.isDiscrete,u=p(a,"desc"===i);if(0===(n=(0,r.Z)(n).filter((function(n){return null!=n})).sort((function(n,e){return u(n,e)}))).length)return null;if(t<=0)return n[0];if(t>=1)return n[n.length-1];var o=(n.length-1)*t,s=Math.floor(o),f=s+1,c=o%1,v=n[s],d=n[f];return f>=n.length||l||"string"==typeof v||"string"==typeof d?v:v*(1-c)+d*c}function p(n,e){var a=e?1:-1,t=function(n){return n?function(n,e){return e-n}:function(n,e){return n-e}}(e),i=h(e);if(!n||!["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID"].concat((0,r.Z)(o)).includes(n))return function(n,e){return"number"==typeof n&&"number"==typeof e?t(n,e):"string"==typeof n&&"string"==typeof e?i(n,e):a};if("esriFieldTypeDate"===n)return function(n,e){var r=new Date(n).getTime(),i=new Date(e).getTime();return isNaN(r)||isNaN(i)?a:t(r,i)};if(o.has(n))return function(n,e){return t(n,e)};if("esriFieldTypeString"===n)return function(n,e){return i(n,e)};if("esriFieldTypeGUID"===n||"esriFieldTypeGlobalID"===n){var l=h(e);return function(n,e){return l(b(n),b(e))}}return e?function(n,e){return 1}:function(n,e){return-1}}function h(n){return n?function(n,e){var a,t;return(n=null===(a=n)||void 0===a?void 0:a.toUpperCase())>(e=null===(t=e)||void 0===t?void 0:t.toUpperCase())?-1:n<e?1:0}:function(n,e){var a,t;return(n=null===(a=n)||void 0===a?void 0:a.toUpperCase())<(e=null===(t=e)||void 0===t?void 0:t.toUpperCase())?-1:n>e?1:0}}function b(n){return n.substr(24,12)+n.substr(19,4)+n.substr(16,2)+n.substr(14,2)+n.substr(11,2)+n.substr(9,2)+n.substr(6,2)+n.substr(4,2)+n.substr(2,2)+n.substr(0,2)}function y(n,e){var a;for(a in n)s.includes(a)&&(Number.isFinite(n[a])||(n[a]=null));return e?(["avg","stddev","variance"].forEach((function(e){null!=n[e]&&(n[e]=Math.ceil(n[e]))})),n):n}function V(n){var e,a={},r=(0,t.Z)(n);try{for(r.s();!(e=r.n()).done;){var i=e.value;(null==i||"string"==typeof i&&""===i.trim())&&(i=null),null==a[i]?a[i]={count:1,data:i}:a[i].count++}}catch(l){r.e(l)}finally{r.f()}return{count:a}}function g(n){return"coded-value"!==(null===n||void 0===n?void 0:n.type)?[]:n.codedValues.map((function(n){return n.code}))}function x(n,e,a,r){var i=n.count,l=[];if(a&&e){var u,o=[],s=g(e[0]),c=(0,t.Z)(s);try{for(c.s();!(u=c.n()).done;){var v=u.value;if(e[1]){var d,m=g(e[1]),p=(0,t.Z)(m);try{for(p.s();!(d=p.n()).done;){var h=d.value;if(e[2]){var b,y=g(e[2]),V=(0,t.Z)(y);try{for(V.s();!(b=V.n()).done;){var x=b.value;o.push("".concat(f(v)).concat(r).concat(f(h)).concat(r).concat(f(x)))}}catch(D){V.e(D)}finally{V.f()}}else o.push("".concat(f(v)).concat(r).concat(f(h)))}}catch(D){p.e(D)}finally{p.f()}}else o.push(v)}}catch(D){c.e(D)}finally{c.f()}for(var T=0,F=o;T<F.length;T++){var M=F[T];i.hasOwnProperty(M)||(i[M]={data:M,count:0})}}for(var k in i){var C=i[k];l.push({value:C.data,count:C.count,label:C.label})}return{uniqueValueInfos:l}}function T(n,e,a,t){var r=null;switch(e){case"log":0!==n&&(r=Math.log(n)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(t)&&0!==t&&(r=n/t*100);break;case"field":Number.isFinite(a)&&0!==a&&(r=n/a);break;case"natural-log":n>0&&(r=Math.log(n));break;case"square-root":n>0&&(r=Math.pow(n,.5))}return r}function F(n,e){var a=M({field:e.field,normalizationType:e.normalizationType,normalizationField:e.normalizationField,classificationMethod:e.classificationMethod,standardDeviationInterval:e.standardDeviationInterval,breakCount:e.numClasses||5});return n=function(n,e,a){var t,r;return e=null!==(t=e)&&void 0!==t?t:-1/0,a=null!==(r=a)&&void 0!==r?r:1/0,n.filter((function(n){return Number.isFinite(n)&&n>=e&&n<=a}))}(n,e.minValue,e.maxValue),(0,l.k)({definition:a,values:n,normalizationTotal:e.normalizationTotal})}function M(n){var e=n.field,a=n.classificationMethod||"equal-interval",t=n.normalizationType,r=n.normalizationField,l=new i.Z;return l.classificationField=e,l.breakCount=n.breakCount,l.classificationMethod=a,l.standardDeviationInterval="standard-deviation"===a?n.standardDeviationInterval||1:void 0,l.normalizationType=t,l.normalizationField="field"===t?r:void 0,l}function k(n,e){var a=n.classBreaks,t=a.length,r=a[0].minValue,i=a[t-1].maxValue,l="standard-deviation"===e,o=u;return a=a.map((function(n){var e=n.label,a={minValue:n.minValue,maxValue:n.maxValue,label:e};if(l&&e){var t=e.match(o).map((function(n){return+n.trim()}));2===t.length?(a.minStdDev=t[0],a.maxStdDev=t[1],t[0]<0&&t[1]>0&&(a.hasAvg=!0)):1===t.length&&(e.includes("<")?(a.minStdDev=null,a.maxStdDev=t[0]):e.includes(">")&&(a.minStdDev=t[0],a.maxStdDev=null))}return a})),{minValue:r,maxValue:i,classBreakInfos:a,normalizationTotal:n.normalizationTotal}}function C(n,e){var a,r=function(n,e){var a=e.field,t=e.classificationMethod,r=e.standardDeviationInterval,i=e.normalizationType,l=e.normalizationField,u=e.normalizationTotal,o=e.minValue,s=e.maxValue,f=e.numBins||10,v=null,m=null,p=null;if(t&&"equal-interval"!==t||i){var h=F(n,{field:a,normalizationType:i,normalizationField:l,normalizationTotal:u,classificationMethod:t,standardDeviationInterval:r,minValue:o,maxValue:s,numClasses:f}).classBreaks;v=h[0].minValue,m=h[h.length-1].maxValue,p=h.map((function(n){return[n.minValue,n.maxValue]}))}else{if(null!=o&&null!=s)v=o,m=s;else{var b=d({values:n,minValue:o,maxValue:s,useSampleStdDev:!i,supportsNullCount:c({normalizationType:i,normalizationField:l,minValue:o,maxValue:s})});v=b.min,m=b.max}p=function(n,e,a){for(var t,r=(e-n)/a,i=[],l=n,u=1;u<=a;u++)t=l+r,t=Number(t.toFixed(16)),i.push([l,u===a?e:t]),l=t;return i}(v,m,f)}return{min:v,max:m,intervals:p}}(n,e),i=r.min,l=r.max,u=r.intervals,o=u.map((function(n,e){return{minValue:u[e][0],maxValue:u[e][1],count:0}})),s=(0,t.Z)(n);try{for(s.s();!(a=s.n()).done;){var f=a.value;if(null!=f&&f>=i&&f<=l){var v=D(u,f);v>-1&&o[v].count++}}}catch(m){s.e(m)}finally{s.f()}return{bins:o,minValue:i,maxValue:l,normalizationTotal:e.normalizationTotal}}function D(n,e){for(var a=-1,t=n.length-1;t>=0;t--)if(e>=n[t][0]){a=t;break}return a}}}]);
//# sourceMappingURL=1486.e94f6d5b.chunk.js.map
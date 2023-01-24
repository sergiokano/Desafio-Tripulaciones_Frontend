"use strict";(self.webpackChunkfrontend_tripulaciones=self.webpackChunkfrontend_tripulaciones||[]).push([[2224],{15909:function(e,r,t){t.d(r,{D:function(){return a}});var n=t(80292);function a(e){e&&e.writtenProperties&&e.writtenProperties.forEach((function(e){var r=e.target,t=e.propName,a=e.newOrigin;(0,n.l)(r)&&a&&r.originOf(t)!==a&&r.updateOrigin(t,a)}))}},80292:function(e,r,t){function n(e){return e&&"getAtOrigin"in e&&"originOf"in e}t.d(r,{l:function(){return n}})},2224:function(e,r,t){t.r(r),t.d(r,{save:function(){return H},saveAll:function(){return ee},saveAs:function(){return re}});var n=t(93433),a=t(37762),u=t(74165),i=t(15861),o=t(63780),s=t(10064),c=t(32718),l=t(92026),p=t(66978),f=t(15909),d=t(64326),y=t(25899),v=t(74368),m=t(37933),h=t(70032),Z=t(98995),w=t(32698),x=t(73117),b=c.Z.getLogger("esri.layers.FeatureLayer"),k="Feature Service";function S(e,r){return"Layer (title: ".concat(e.title,", id: ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(r)}function g(e,r){if(r.type!==k)throw new s.Z("feature-layer:portal-item-wrong-type",S(e,'should have portal item of type "'.concat(k,'"')))}function I(e){return A.apply(this,arguments)}function A(){return(A=(0,i.Z)((0,u.Z)().mark((function e(r){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(!(0,m.rQ)(r)){e.next=4;break}throw new s.Z("feature-layer:save",S(r,"using an in-memory source cannot be saved to a portal item"));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,r){var t,n=(null!==(t=e.messages)&&void 0!==t?t:[]).filter((function(e){return"error"===e.type})).map((function(e){var r=e.name,t=e.message,n=e.details;return new s.Z(r,t,n)}));if(null!==r&&void 0!==r&&r.ignoreUnsupported&&(n=n.filter((function(e){var r=e.name;return"layer:unsupported"!==r&&"symbol:unsupported"!==r&&"symbol-layer:unsupported"!==r&&"property:unsupported"!==r&&"url:unsupported"!==r}))),n.length>0)throw new s.Z("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}function E(e,r,t){return K.apply(this,arguments)}function K(){return(K=(0,i.Z)((0,u.Z)().mark((function e(r,t,n){var a;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0="beforeSave"in r&&"function"==typeof r.beforeSave,!e.t0){e.next=4;break}return e.next=4,r.beforeSave();case 4:return a=r.write({},t),e.abrupt("return",(O(t,n),a));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){var r=e.layer,t=e.layerJSON;return r.isTable?{layers:[],tables:[t]}:{layers:[t],tables:[]}}function D(e){(0,x.qj)(e,x.Kz.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((function(e,r,t){return t.indexOf(e)===r})))}function N(e){var r=e.portalItem;if(!r)throw b.error("save: requires the portalItem property to be set"),new s.Z("feature-layer:portal-item-not-set",S(e,"requires the portalItem property to be set"));if(!r.loaded)throw new s.Z("feature-layer:portal-item-not-loaded",S(e,"cannot be saved to a portal item that does not exist or is inaccessible"));g(e,r)}function L(e,r){return T.apply(this,arguments)}function T(){return(T=(0,i.Z)((0,u.Z)().mark((function e(r,t){var n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",/\/\d+\/?$/.test(null!==(n=r.url)&&void 0!==n?n:"")?P(t[0]):J(r,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,r){return R.apply(this,arguments)}function R(){return(R=(0,i.Z)((0,u.Z)().mark((function e(r,t){var n,i,o,s,c,l,p,f;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t[0].layer,i=n.url,o=n.customParameters,s=n.apiKey,e.next=3,r.fetchData("json");case 3:if(c=e.sent,e.t0=c&&null!=c.layers&&null!=c.tables,e.t0){e.next=9;break}return e.next=8,z(c,{url:null!==i&&void 0!==i?i:"",customParameters:o,apiKey:s},t.map((function(e){return e.layer.layerId})));case 8:c=e.sent;case 9:l=(0,a.Z)(t);try{for(l.s();!(p=l.n()).done;)q((f=p.value).layer,f.layerJSON,c)}catch(u){l.e(u)}finally{l.f()}return e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,r,t){return _.apply(this,arguments)}function _(){return(_=(0,i.Z)((0,u.Z)().mark((function e(r,t,a){var i,o,s,c,l,p,f,d,y,m,h,Z;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r||(r={}),(i=r).layers||(i.layers=[]),(o=r).tables||(o.tables=[]),s=t.url,c=t.customParameters,l=t.apiKey,e.next=6,(0,v.V)(s,{customParameters:c,apiKey:l});case 6:return p=e.sent,f=p.serviceJSON,d=p.layersJSON,y=M(r.layers,f.layers,a),m=M(r.tables,f.tables,a),r.layers=y.itemResources,r.tables=m.itemResources,h=[].concat((0,n.Z)(y.added),(0,n.Z)(m.added)),Z=d?[].concat((0,n.Z)(d.layers),(0,n.Z)(d.tables)):[],e.next=15,Y(r,h,s,Z);case 15:return e.abrupt("return",r);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,r,t){var n=(0,o.e5)(e,r,(function(e,r){return e.id===r.id}));e=e.filter((function(e){return!n.removed.some((function(r){return r.id===e.id}))}));var a=n.added.map((function(e){return{id:e.id}}));return a.forEach((function(r){var t=r.id;e.push({id:t})})),{itemResources:e,added:a.filter((function(e){var r=e.id;return!t.includes(r)}))}}function Y(e,r,t,n){return j.apply(this,arguments)}function j(){return(j=(0,i.Z)((0,u.Z)().mark((function e(r,t,n,a){var i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.map((function(e){var r=e.id;return new d.default({url:n,layerId:r,sourceJSON:a.find((function(e){return e.id===r}))})})),e.next=3,(0,p.as)(i.map((function(e){return e.load()})));case 3:i.forEach((function(e){var t=e.layerId,n=e.loaded,a=e.defaultPopupTemplate;n&&!(0,l.Wi)(a)&&q(e,{id:t,popupInfo:a.toJSON()},r)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,r,t){e.isTable?C(t.tables,r):C(t.layers,r)}function C(e,r){if(e){var t=e.findIndex((function(e){return e.id===r.id}));-1===t?e.push(r):e[t]=r}}function F(e){var r=e.portalItem;return(0,m.y2)(e)&&!e.dynamicDataSource&&!(null===r||void 0===r||!r.loaded)&&r.type===k}function U(e){return G.apply(this,arguments)}function G(){return(G=(0,i.Z)((0,u.Z)().mark((function e(r){var t,n,i,o,c;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==r&&void 0!==r&&r.length){e.next=2;break}throw new s.Z("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");case 2:return e.next=4,Promise.all(r.map((function(e){return e.load()})));case 4:t=(0,a.Z)(r),e.prev=5,t.s();case 7:if((n=t.n()).done){e.next=13;break}if(F(i=n.value)){e.next=11;break}throw new s.Z("feature-layer-utils-saveall:invalid-parameters","'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ".concat(S(i,"does not conform")),{layer:i});case 11:e.next=7;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),t.e(e.t0);case 18:return e.prev=18,t.f(),e.finish(18);case 21:if(o=r.map((function(e){return e.portalItem.id})),!(new Set(o).size>1)){e.next=24;break}throw new s.Z("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");case 24:if(c=r.map((function(e){return e.layerId})),new Set(c).size===c.length){e.next=27;break}throw new s.Z("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service");case 27:case"end":return e.stop()}}),e,null,[[5,15,18,21]])})))).apply(this,arguments)}function V(e,r){var t,n,a,u,i=Z.default.from(r);return i.id&&((i=i.clone()).id=null),null!==(t=(a=i).type)&&void 0!==t||(a.type=k),null!==(n=(u=i).portal)&&void 0!==n||(u.portal=h.Z.getDefault()),g(e,i),i}function B(e,r){return W.apply(this,arguments)}function W(){return(W=(0,i.Z)((0,u.Z)().mark((function e(r,t){var n,a,i,o,s,c,p;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.url,a=r.layerId,i=r.title,o=r.fullExtent,s=r.isTable,c=(0,y.Qc)(n),p=(0,l.pC)(c)&&"FeatureServer"===c.serverType,t.url=p?n:"".concat(n,"/").concat(a),t.title||(t.title=i),t.extent=null,e.t0=!s&&(0,l.pC)(o),!e.t0){e.next=9;break}return e.next=8,(0,x.$o)(o);case 8:t.extent=e.sent;case 9:(0,x.ck)(t,x.Kz.METADATA),(0,x.ck)(t,x.Kz.MULTI_LAYER),(0,x.qj)(t,x.Kz.SINGLE_LAYER),s&&(0,x.qj)(t,x.Kz.TABLE),D(t);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e,r,t){return Q.apply(this,arguments)}function Q(){return(Q=(0,i.Z)((0,u.Z)().mark((function e(r,t,n){var a,i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.portal,e.next=3,null===i||void 0===i?void 0:i._signIn();case 3:return e.next=5,null===i||void 0===i||null===(a=i.user)||void 0===a?void 0:a.addItem({item:r,data:t,folder:null===n||void 0===n?void 0:n.folder});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=(0,p.Ds)((function(e,r){return X.apply(this,arguments)}));function X(){return(X=(0,i.Z)((0,u.Z)().mark((function e(r,t){var n,a,i,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(r);case 2:return N(r),n=r.portalItem,a=(0,w.Y)(n),e.next=7,E(r,a,t);case 7:return i=e.sent,e.next=10,L(n,[{layer:r,layerJSON:i}]);case 10:return o=e.sent,D(n),e.next=14,n.update({data:o});case 14:return(0,f.D)(a),e.abrupt("return",n);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ee=(0,p.Ds)(function(){var e=(0,i.Z)((0,u.Z)().mark((function e(r,t){var n,a,i,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(r);case 2:return n=r[0].portalItem,a=(0,w.Y)(n),e.next=6,Promise.all(r.map((function(e){return E(e,a,t)})));case 6:return i=e.sent,e.next=9,L(n,r.map((function(e,r){return{layer:e,layerJSON:i[r]}})));case 9:return o=e.sent,D(n),e.next=13,n.update({data:o});case 13:return e.next=15,Promise.all(r.slice(1).map((function(e){return e.portalItem.reload()})));case 15:return(0,f.D)(a),e.abrupt("return",n.clone());case 17:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),re=(0,p.Ds)((function(e,r,t){return te.apply(this,arguments)}));function te(){return(te=(0,i.Z)((0,u.Z)().mark((function e(r,t,n){var a,i,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(r);case 2:return a=V(r,t),i=(0,w.Y)(a),e.t0=P,e.t1=r,e.next=8,E(r,i,n);case 8:return e.t2=e.sent,e.t3={layer:e.t1,layerJSON:e.t2},o=(0,e.t0)(e.t3),e.next=13,B(r,a);case 13:return e.next=15,$(a,o,n);case 15:return r.portalItem=a,(0,f.D)(i),e.abrupt("return",a);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},74368:function(e,r,t){t.d(r,{C:function(){return l},V:function(){return o}});var n=t(1413),a=t(74165),u=t(15861),i=t(76200);function o(e,r){return s.apply(this,arguments)}function s(){return s=(0,u.Z)((0,a.Z)().mark((function e(r,t){var n,u,i,o,s,p;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(r,t);case 2:if((o=(o=e.sent)||{}).layers=(null===(n=o.layers)||void 0===n?void 0:n.filter(c))||[],s={serviceJSON:o},!((null!==(u=o.currentVersion)&&void 0!==u?u:0)<10.5)){e.next=7;break}return e.abrupt("return",s);case 7:return e.next=9,l(r+"/layers",t);case 9:return p=e.sent,e.abrupt("return",(s.layersJSON={layers:(null===p||void 0===p||null===(i=p.layers)||void 0===i?void 0:i.filter(c))||[],tables:(null===p||void 0===p?void 0:p.tables)||[]},s));case 11:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function c(e){return!e.type||"Feature Layer"===e.type}function l(e,r){return p.apply(this,arguments)}function p(){return p=(0,u.Z)((0,a.Z)().mark((function e(r,t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.default)(r,{responseType:"json",query:(0,n.Z)((0,n.Z)({f:"json"},null===t||void 0===t?void 0:t.customParameters),{},{token:null===t||void 0===t?void 0:t.apiKey})});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}},32698:function(e,r,t){t.d(r,{Y:function(){return i},h:function(){return u}});var n=t(35995),a=t(70032);function u(e){return{origin:"portal-item",url:(0,n.mN)(e.itemUrl),portal:e.portal||a.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function i(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,n.mN)(e.itemUrl):null,portal:e.portal||a.Z.getDefault(),portalItem:e}}},73117:function(e,r,t){t.d(r,{$o:function(){return y},Kz:function(){return m},_$:function(){return f},ck:function(){return d},qj:function(){return p}});var n=t(37762),a=t(74165),u=t(15861),i=t(52587),o=t(78952),s=t(81753);function c(e){return l.apply(this,arguments)}function l(){return l=(0,u.Z)((0,a.Z)().mark((function e(r){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=r.spatialReference).isWGS84){e.next=3;break}return e.abrupt("return",r.clone());case 3:if(!t.isWebMercator){e.next=5;break}return e.abrupt("return",(0,s.Sx)(r));case 5:return n=o.Z.WGS84,e.next=8,(0,i.iQ)(t,n);case 8:return e.abrupt("return",(0,i.iV)(r,n));case 9:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function p(e,r){if(!f(e,r)){var t=e.typeKeywords;t?t.push(r):e.typeKeywords=[r]}}function f(e,r){var t;return!(null===(t=e.typeKeywords)||void 0===t||!t.includes(r))}function d(e,r){var t=e.typeKeywords;if(t){var n=t.indexOf(r);n>-1&&t.splice(n,1)}}function y(e){return v.apply(this,arguments)}function v(){return(v=(0,u.Z)((0,a.Z)().mark((function e(r){var t,u,i,o,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=r.clone().normalize()).length>1){i=(0,n.Z)(t);try{for(i.s();!(o=i.n()).done;)s=o.value,u?s.width>u.width&&(u=s):u=s}catch(a){i.e(a)}finally{i.f()}}else u=t[0];return e.abrupt("return",c(u));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table"}}}]);
//# sourceMappingURL=2224.23f11f17.chunk.js.map
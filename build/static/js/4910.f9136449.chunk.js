"use strict";(self.webpackChunkfrontend_tripulaciones=self.webpackChunkfrontend_tripulaciones||[]).push([[4910],{80573:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(15671),i=r(43144),o=r(60136),a=r(29388),s=r(27366),l=r(85015),u=r(11582),p=r(79056),c=r(46784),f=r(92026),y=r(49861),d=(r(63780),r(25243),r(69912)),v=0,h=function(e){(0,o.Z)(r,e);var t=(0,a.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).id="".concat(Date.now().toString(16),"-analysis-").concat(v++),i.title=null,i}return(0,i.Z)(r,[{key:"parent",get:function(){return this._get("parent")},set:function(e){var t=this.parent;if((0,f.pC)(t))switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}},{key:"isEditable",get:function(){return this.requiredPropertiesForEditing.every(f.pC)}}]),r}((0,c.eC)((0,u.J)((0,p.IG)(l.Z))));(0,s._)([(0,y.Cb)({type:String,constructOnly:!0,clonable:!1})],h.prototype,"id",void 0),(0,s._)([(0,y.Cb)({type:String})],h.prototype,"title",void 0),(0,s._)([(0,y.Cb)({constructOnly:!0})],h.prototype,"type",void 0),(0,s._)([(0,y.Cb)({clonable:!1,value:null})],h.prototype,"parent",null),(0,s._)([(0,y.Cb)({readOnly:!0})],h.prototype,"isEditable",null),(0,s._)([(0,y.Cb)({readOnly:!0})],h.prototype,"requiredPropertiesForEditing",void 0);var g=h=(0,s._)([(0,d.j)("esri.analysis.Analysis")],h)},66576:function(e,t,r){r.d(t,{B:function(){return Z}});var n=r(74165),i=r(15861),o=r(1413),a=r(37762),s=r(80292),l=r(35995),u=r(71907),p=r(33397),c=r(25265),f=r(49861);function y(e){return d[function(e){return e instanceof Blob?e.type:function(e){var t=(0,l.Ml)(e);return g[t]||v}(e.url)}(e)]||h}var d={},v="text/plain",h=d[v],g={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(var b in g)d[g[b]]=b;var m=r(53283);function Z(e){var t,r=null!==(t=null===e||void 0===e?void 0:e.origins)&&void 0!==t?t:[void 0];return function(t,n){var i,u=function(e,t,r){var n;if("resource"===(null===e||void 0===e?void 0:e.type))return function(e,t,r){var n=(0,p.VZ)(t,r);return{type:String,read:function(e,t,r){var i=(0,m.r)(e,t,r);return n.type===String?i:"function"==typeof n.type?new n.type({url:i}):void 0},write:{writer:function(t,i,a,u){if(!u||!u.resources)return"string"==typeof t?void(i[a]=(0,m.t)(t,u)):void(i[a]=t.write({},u));var p=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),f=(0,m.t)(p,(0,o.Z)((0,o.Z)({},u),{},{verifyItemRelativeUrls:u&&u.verifyItemRelativeUrls?{writtenUrls:u.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0}),m.M.NO),d=n.type!==String&&(!(0,s.l)(this)||u&&u.origin&&this.originIdOf(r)>(0,c.M9)(u.origin)),v={object:this,propertyName:r,value:t,targetUrl:f,dest:i,targetPropertyName:a,context:u,params:e};u&&u.portalItem&&f&&!(0,l.YP)(f)?d?function(e){var t,r=e.context,n=e.targetUrl,i=e.params,a=e.value,s=e.dest,u=e.targetPropertyName;if(!r.portalItem)return;var p=r.portalItem.resourceFromPath(n),c=w(a,n,r),f=y(c),d=(0,l.Ml)(p.path),v=null!==(t=null===i||void 0===i?void 0:i.compress)&&void 0!==t&&t;f===d?(r.resources&&_((0,o.Z)((0,o.Z)({},e),{},{resource:p,content:c,compress:v,updates:r.resources.toUpdate})),s[u]=n):C(e)}(v):function(e){var t=e.context,r=e.targetUrl,n=e.dest,i=e.targetPropertyName;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),n[i]=r)}(v):u&&u.portalItem&&(null==f||null!=(0,m.i)(f)||(0,l.jc)(f)||d)?C(v):i[a]=f}}}}(e,t,r);switch(null!==(n=null===e||void 0===e?void 0:e.type)&&void 0!==n?n:"other"){case"other":return{read:!0,write:!0};case"url":return{read:m.a.read,write:m.a.write}}}(e,t,n),d=(0,a.Z)(r);try{for(d.s();!(i=d.n()).done;){var v=i.value,h=(0,f.CJ)(t,v,n);for(var g in u)h[g]=u[g]}}catch(b){d.e(b)}finally{d.f()}}}function C(e){var t,r,n,i=e.targetUrl,a=e.params,s=e.value,p=e.context,c=e.dest,f=e.targetPropertyName;if(p.portalItem){var d=(0,m.p)(i),v=null!==(t=null===d||void 0===d?void 0:d.filename)&&void 0!==t?t:(0,u.D)(),h=null!==(r=null===a||void 0===a?void 0:a.prefix)&&void 0!==r?r:null===d||void 0===d?void 0:d.prefix,g=w(s,i,p),b=(0,l.v_)(h,v),Z="".concat(b,".").concat(y(g)),C=p.portalItem.resourceFromPath(Z);(0,l.jc)(i)&&p.resources&&p.resources.pendingOperations.push(function(e){return I.apply(this,arguments)}(i).then((function(e){C.path="".concat(b,".").concat(y(e)),c[f]=C.itemRelativeUrl})).catch((function(){})));var j=null!==(n=null===a||void 0===a?void 0:a.compress)&&void 0!==n&&n;p.resources&&_((0,o.Z)((0,o.Z)({},e),{},{resource:C,content:g,compress:j,updates:p.resources.toAdd})),c[f]=C.itemRelativeUrl}}function _(e){var t=e.object,r=e.propertyName,n=e.updates,i=e.resource,o=e.content,a=e.compress;n.push({resource:i,content:o,compress:a,finish:function(e){!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(t,r,e)}})}function w(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}function I(){return I=(0,i.Z)((0,n.Z)().mark((function e(t){var i,o,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(r.bind(r,76200));case 2:return i=e.sent.default,e.next=5,i(t,{responseType:"blob"});case 5:return o=e.sent,a=o.data,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}},80292:function(e,t,r){function n(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:function(){return n}})},44910:function(e,t,r){r.r(t),r.d(t,{default:function(){return H}});var n=r(74165),i=r(15861),o=r(15671),a=r(43144),s=r(60136),l=r(29388),u=r(27366),p=r(37762),c=r(80573),f=r(92026);function y(e,t){return d(e)===d(t)}function d(e){if((0,f.Wi)(e))return null;var t,r=null!=e.layer?e.layer.id:"";return null==(t=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid)?null:"o-".concat(r,"-").concat(t)}var v={json:{write:{writer:function(e,t){var r;(0,f.Wi)(e)||null==(null===(r=e.layer)||void 0===r?void 0:r.objectIdField)||null==e.attributes||(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}}}}};var h=r(85015),g=r(11582),b=r(46784),m=r(49861),Z=(r(63780),r(25243),r(69912)),C=r(66576),_=r(585),w=r(64575),I=function(e){(0,s.Z)(r,e);var t=(0,l.Z)(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).position=null,n.elevationInfo=null,n.feature=null,n}return(0,a.Z)(r,[{key:"equals",value:function(e){return(0,f._W)(this.position,e.position)&&(0,f._W)(this.elevationInfo,e.elevationInfo)&&y(this.feature,e.feature)}}]),r}((0,b.eC)((0,g.J)(h.Z)));(0,u._)([(0,m.Cb)({type:_.Z}),(0,C.B)()],I.prototype,"position",void 0),(0,u._)([(0,m.Cb)({type:w.Z}),(0,C.B)()],I.prototype,"elevationInfo",void 0),(0,u._)([(0,m.Cb)(v)],I.prototype,"feature",void 0);var j=I=(0,u._)([(0,Z.j)("esri.analysis.LineOfSightAnalysisObserver")],I),x=function(e){(0,s.Z)(r,e);var t=(0,l.Z)(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).position=null,n.elevationInfo=null,n.feature=null,n}return(0,a.Z)(r,[{key:"equals",value:function(e){return(0,f._W)(this.position,e.position)&&(0,f._W)(this.elevationInfo,e.elevationInfo)&&y(this.feature,e.feature)}}]),r}((0,b.eC)(g.j));(0,u._)([(0,m.Cb)({type:_.Z}),(0,C.B)()],x.prototype,"position",void 0),(0,u._)([(0,m.Cb)({type:w.Z}),(0,C.B)()],x.prototype,"elevationInfo",void 0),(0,u._)([(0,m.Cb)(v)],x.prototype,"feature",void 0);var O=x=(0,u._)([(0,Z.j)("esri.analysis.LineOfSightAnalysisTarget")],x),k=r(40281),P=r(60354),S=r(94172),R=r(52587),W=r(41414);r(88152);function z(e){return e?F:N}function E(e,t){return function(e,t){return(0,f.Wi)(t)||!t.mode?z(e).mode:t.mode}(!!(0,f.pC)(e)&&e.hasZ,t)}var F={mode:"absolute-height",offset:0},N={mode:"on-the-ground",offset:null};var U=k.Z.ofType(O),L=function(e){(0,s.Z)(r,e);var t=(0,l.Z)(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).type="line-of-sight",n.observer=null,n.extent=null,n}return(0,a.Z)(r,[{key:"initialize",value:function(){var e=this;this.addHandles((0,S.YP)((function(){return e._computeExtent()}),(function(t){((0,f.Wi)(t)||(0,f.Wi)(t.pending))&&e._set("extent",(0,f.pC)(t)?t.extent:null)}),S.tX))}},{key:"targets",get:function(){return this._get("targets")||new U},set:function(e){this._set("targets",(0,P.Z)(e,this.targets,U))}},{key:"spatialReference",get:function(){return(0,f.pC)(this.observer)&&(0,f.pC)(this.observer.position)?this.observer.position.spatialReference:null}},{key:"requiredPropertiesForEditing",get:function(){return[(0,f.yw)(this.observer,(function(e){return e.position}))]}},{key:"waitComputeExtent",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this._computeExtent(),e.abrupt("return",(0,f.pC)(t)?(0,f.Wg)(t.pending):null);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_computeExtent",value:function(){var e=this.spatialReference;if((0,f.Wi)(this.observer)||(0,f.Wi)(this.observer.position)||(0,f.Wi)(e))return null;var t,r=function(e){return"absolute-height"===E(e.position,e.elevationInfo)},n=this.observer.position,i=(0,W.al)(n.x,n.y,n.z,n.x,n.y,n.z),o=(0,p.Z)(this.targets);try{for(o.s();!(t=o.n()).done;){var a=t.value;if((0,f.pC)(a.position)){var s=(0,R.dz)(a.position,e);if((0,f.pC)(s.pending))return{pending:s.pending,extent:null};if((0,f.pC)(s.geometry)){var l=s.geometry,u=l.x,c=l.y,y=l.z;(0,W.pp)(i,[u,c,y])}}}}catch(v){o.e(v)}finally{o.f()}var d=(0,W.HH)(i,e);return r(this.observer)&&this.targets.every(r)||(d.zmin=null,d.zmax=null),{pending:null,extent:d}}},{key:"clear",value:function(){this.observer=null,this.targets.removeAll()}}]),r}(c.Z);(0,u._)([(0,m.Cb)({type:["line-of-sight"]})],L.prototype,"type",void 0),(0,u._)([(0,m.Cb)({type:j,json:{read:!0,write:!0}})],L.prototype,"observer",void 0),(0,u._)([(0,m.Cb)({cast:P.R,type:U,nonNullable:!0,json:{read:!0,write:!0}})],L.prototype,"targets",null),(0,u._)([(0,m.Cb)({value:null,readOnly:!0})],L.prototype,"extent",void 0),(0,u._)([(0,m.Cb)({readOnly:!0})],L.prototype,"spatialReference",null),(0,u._)([(0,m.Cb)({readOnly:!0})],L.prototype,"requiredPropertiesForEditing",null);var A=L=(0,u._)([(0,Z.j)("esri.analysis.LineOfSightAnalysis")],L),q=r(97642),B=r(30651),T=r(6061),J=k.Z.ofType(O),M=function(e){(0,s.Z)(r,e);var t=(0,l.Z)(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).type="line-of-sight",n.operationalLayerType="LineOfSightLayer",n.analysis=new A,n.opacity=1,n}return(0,a.Z)(r,[{key:"initialize",value:function(){var e=this;this.addHandles((0,S.YP)((function(){return e.analysis}),(function(t,r){(0,f.pC)(r)&&r.parent===e&&(r.parent=null),(0,f.pC)(t)&&(t.parent=e)}),S.tX))}},{key:"load",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",((0,f.pC)(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"observer",get:function(){return(0,f.yw)(this.analysis,(function(e){return e.observer}))},set:function(e){(0,f.yw)(this.analysis,(function(t){return t.observer=e}))}},{key:"targets",get:function(){return(0,f.pC)(this.analysis)?this.analysis.targets:new k.Z},set:function(e){var t;(0,P.Z)(e,null===(t=this.analysis)||void 0===t?void 0:t.targets)}},{key:"fullExtent",get:function(){return(0,f.pC)(this.analysis)?this.analysis.extent:null}},{key:"spatialReference",get:function(){return(0,f.pC)(this.analysis)?(0,f.Wg)(this.analysis.spatialReference):null}},{key:"releaseAnalysis",value:function(e){this.analysis===e&&(this.analysis=new A)}}]),r}((0,T.q)((0,q.R)(B.Z)));(0,u._)([(0,m.Cb)({json:{read:!1},readOnly:!0})],M.prototype,"type",void 0),(0,u._)([(0,m.Cb)({type:["LineOfSightLayer"]})],M.prototype,"operationalLayerType",void 0),(0,u._)([(0,m.Cb)({type:j,json:{read:!0,write:{ignoreOrigin:!0}}})],M.prototype,"observer",null),(0,u._)([(0,m.Cb)({type:J,json:{read:!0,write:{ignoreOrigin:!0}}})],M.prototype,"targets",null),(0,u._)([(0,m.Cb)({nonNullable:!0,json:{read:!1,write:!1}})],M.prototype,"analysis",void 0),(0,u._)([(0,m.Cb)({readOnly:!0})],M.prototype,"fullExtent",null),(0,u._)([(0,m.Cb)({readOnly:!0})],M.prototype,"spatialReference",null),(0,u._)([(0,m.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],M.prototype,"opacity",void 0),(0,u._)([(0,m.Cb)({type:["show","hide"]})],M.prototype,"listMode",void 0);var H=M=(0,u._)([(0,Z.j)("esri.layers.LineOfSightLayer")],M)}}]);
//# sourceMappingURL=4910.f9136449.chunk.js.map
"use strict";(self.webpackChunkfrontend_tripulaciones=self.webpackChunkfrontend_tripulaciones||[]).push([[4605],{58971:function(t,e,n){n.d(e,{G6:function(){return b},Ie:function(){return Z},J9:function(){return P},RF:function(){return _},U1:function(){return x},vY:function(){return l},ym:function(){return C}});var r=n(29439),i=n(92026),o=n(77981);var a=function(t,e,n){return[e,n]},s=function(t,e,n){return[e,n,t[2]]},u=function(t,e,n){return[e,n,t[2],t[3]]};function l(t){return t?{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance]:[1,1],translate:(0,i.pC)(t.extent)?[t.extent.xmin,t.extent.ymax]:[0,0]}:null}function h(t,e){var n=t.scale,r=t.translate;return Math.round((e-r[0])/n[0])}function f(t,e){var n=t.scale,r=t.translate;return Math.round((r[1]-e)/n[1])}function c(t,e,n){for(var r,i,o,a,s=[],u=0;u<n.length;u++){var l=n[u];u>0?(o=h(t,l[0]),a=f(t,l[1]),o===r&&a===i||(s.push(e(l,o-r,a-i)),r=o,i=a)):(r=h(t,l[0]),i=f(t,l[1]),s.push(e(l,r,i)))}return s.length>0?s:null}function d(t,e){var n=t.scale,r=t.translate;return e*n[0]+r[0]}function p(t,e){var n=t.scale;return t.translate[1]-e*n[1]}function y(t,e,n){var i=new Array(n.length);if(!n.length)return i;var o=(0,r.Z)(t.scale,2),a=o[0],s=o[1],u=d(t,n[0][0]),l=p(t,n[0][1]);i[0]=e(n[0],u,l);for(var h=1;h<n.length;h++){var f=n[h];u+=f[0]*a,l-=f[1]*s,i[h]=e(f,u,l)}return i}function m(t,e,n){for(var r=new Array(n.length),i=0;i<n.length;i++)r[i]=y(t,e,n[i]);return r}function v(t,e,n,r,i){var o;return e.points=null!==(o=function(t,e,n,r){return c(t,n?r?u:s:r?s:a,e)}(t,n.points,r,i))&&void 0!==o?o:[],e}function _(t,e,n,r,i){return e.x=h(t,n.x),e.y=f(t,n.y),e!==n&&(r&&(e.z=n.z),i&&(e.m=n.m)),e}function g(t,e,n,r,i){var o=function(t,e,n,r){for(var i=[],o=n?r?u:s:r?s:a,l=0;l<e.length;l++){var h=c(t,o,e[l]);h&&h.length>=3&&i.push(h)}return i.length?i:null}(t,n.rings,r,i);return o?(e.rings=o,e):null}function k(t,e,n,r,i){var o=function(t,e,n,r){for(var i=[],o=n?r?u:s:r?s:a,l=0;l<e.length;l++){var h=c(t,o,e[l]);h&&h.length>=2&&i.push(h)}return i.length?i:null}(t,n.paths,r,i);return o?(e.paths=o,e):null}function C(t,e){return t&&e?(0,o.wp)(e)?_(t,{},e,!1,!1):(0,o.l9)(e)?k(t,{},e,!1,!1):(0,o.oU)(e)?g(t,{},e,!1,!1):(0,o.aW)(e)?v(t,{},e,!1,!1):(0,o.YX)(e)?function(t,e,n,r,i){return e.xmin=h(t,n.xmin),e.ymin=f(t,n.ymin),e.xmax=h(t,n.xmax),e.ymax=f(t,n.ymax),e!==n&&(r&&(e.zmin=n.zmin,e.zmax=n.zmax),i&&(e.mmin=n.mmin,e.mmax=n.mmax)),e}(t,{},e,!1,!1):null:null}function P(t,e,n,r,o){return(0,i.pC)(n)&&(e.points=function(t,e,n,r){return y(t,n?r?u:s:r?s:a,e)}(t,n.points,r,o)),e}function x(t,e,n,r,o){return(0,i.Wi)(n)||(e.x=d(t,n.x),e.y=p(t,n.y),e!==n&&(r&&(e.z=n.z),o&&(e.m=n.m))),e}function Z(t,e,n,r,o){return(0,i.pC)(n)&&(e.rings=function(t,e,n,r){return m(t,n?r?u:s:r?s:a,e)}(t,n.rings,r,o)),e}function b(t,e,n,r,o){return(0,i.pC)(n)&&(e.paths=function(t,e,n,r){return m(t,n?r?u:s:r?s:a,e)}(t,n.paths,r,o)),e}},44605:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var r=n(1413),i=n(15671),o=n(43144),a=n(37762),s=n(41644),u=n(92026),l=n(95439),h=n(78952),f=n(93501),c=(n(59896),n(93169),n(41414)),d=n(65156),p=(n(58971),n(27823),n(83040));n(92975);var y=(0,o.Z)((function t(e,n,r){(0,i.Z)(this,t),this.uid=e,this.geometry=n,this.attributes=r,this.visible=!0,this.objectId=null,this.centroid=null}));var m=(0,o.Z)((function t(){(0,i.Z)(this,t),this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}));(0,c.Ue)(),(0,d.Ue)();var v=n(83406);function _(t,e){return e}function g(t,e,n,r){switch(n){case 0:return x(t,e+r,0);case 1:return"lowerLeft"===t.originPosition?x(t,e+r,1):function(t,e,n){var r=t.translate,i=t.scale;return r[n]-e*i[n]}(t,e+r,1)}}function k(t,e,n,r){return 2===n?x(t,e,2):g(t,e,n,r)}function C(t,e,n,r){return 2===n?x(t,e,3):g(t,e,n,r)}function P(t,e,n,r){return 3===n?x(t,e,3):k(t,e,n,r)}function x(t,e,n){var r=t.translate,i=t.scale;return r[n]+e*i[n]}var Z=function(){function t(e){(0,i.Z)(this,t),this._options=e,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=_,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=function(){return(0,o.Z)((function t(){(0,i.Z)(this,t)}))}()}return(0,o.Z)(t,[{key:"createFeatureResult",value:function(){return new m}},{key:"finishFeatureResult",value:function(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=function(){return(0,o.Z)((function t(){(0,i.Z)(this,t)}))}(),this._coordinateBuffer=null,this._lengths.length=0,t.hasZ){var e=(0,f.k)(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(!(0,u.Wi)(e)){var n,r=(0,a.Z)(t.features);try{for(r.s();!(n=r.n()).done;){e(n.value.geometry)}}catch(s){r.e(s)}finally{r.f()}}}}},{key:"createSpatialReference",value:function(){return new h.Z}},{key:"addField",value:function(t,e){t.fields.push(p.Z.fromJSON(e));var n=t.fields.map((function(t){return t.name}));this._attributesConstructor=function(){var t,e=(0,a.Z)(n);try{for(e.s();!(t=e.n()).done;){this[t.value]=null}}catch(r){e.e(r)}finally{e.f()}}}},{key:"addFeature",value:function(t,e){var n=this._options.maxStringAttributeLength?this._options.maxStringAttributeLength:0;if(n>0)for(var r in e.attributes){var i=e.attributes[r];"string"==typeof i&&i.length>n&&(e.attributes[r]="")}t.features.push(e)}},{key:"addQueryGeometry",value:function(t,e){var n=e.queryGeometry,r=e.queryGeometryType,i=(0,v.$g)(n.clone(),n,!1,!1,this._transform),o=(0,v.di)(i,r,!1,!1),a=null;switch(r){case"esriGeometryPoint":a="point";break;case"esriGeometryPolygon":a="polygon";break;case"esriGeometryPolyline":a="polyline";break;case"esriGeometryMultipoint":a="multipoint"}o.type=a,t.queryGeometryType=r,t.queryGeometry=o}},{key:"prepareFeatures",value:function(t){var e=this;switch(this._transform=t.transform,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"point":this.addCoordinate=function(t,n,r){return e.addCoordinatePoint(t,n,r)},this.createGeometry=function(t){return e.createPointGeometry(t)};break;case"polygon":this.addCoordinate=function(t,n,r){return e._addCoordinatePolygon(t,n,r)},this.createGeometry=function(t){return e._createPolygonGeometry(t)};break;case"polyline":this.addCoordinate=function(t,n,r){return e._addCoordinatePolyline(t,n,r)},this.createGeometry=function(t){return e._createPolylineGeometry(t)};break;case"multipoint":this.addCoordinate=function(t,n,r){return e._addCoordinateMultipoint(t,n,r)},this.createGeometry=function(t){return e._createMultipointGeometry(t)};break;case"mesh":case"extent":break;default:(0,s.Bg)(t.geometryType)}}},{key:"createFeature",value:function(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new y((0,l.D)(),null,new this._attributesConstructor)}},{key:"allocateCoordinates",value:function(){var t=this._lengths.reduce((function(t,e){return t+e}),0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0}},{key:"addLength",value:function(t,e,n){0===this._lengths.length&&(this._toAddInCurrentPath=e),this._lengths.push(e)}},{key:"createPointGeometry",value:function(t){var e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}},{key:"addCoordinatePoint",value:function(t,e,n){switch(e=this._applyTransform(this._transform,e,n,0),n){case 0:t.x=e;break;case 1:t.y=e;break;case 2:t.hasZ?t.z=e:t.m=e;break;case 3:t.m=e}}},{key:"_transformPathLikeValue",value:function(t,e){var n=0;return e<=1&&(n=this._previousCoordinate[e],this._previousCoordinate[e]+=t),this._applyTransform(this._transform,t,e,n)}},{key:"_addCoordinatePolyline",value:function(t,e,n){this._dehydratedAddPointsCoordinate(t.paths,e,n)}},{key:"_addCoordinatePolygon",value:function(t,e,n){this._dehydratedAddPointsCoordinate(t.rings,e,n)}},{key:"_addCoordinateMultipoint",value:function(t,e,n){0===n&&t.points.push([]);var r=this._transformPathLikeValue(e,n);t.points[t.points.length-1].push(r)}},{key:"_createPolygonGeometry",value:function(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}},{key:"_createPolylineGeometry",value:function(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}},{key:"_createMultipointGeometry",value:function(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}},{key:"_dehydratedAddPointsCoordinate",value:function(t,e,n){0===n&&0==this._toAddInCurrentPath--&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);var r=this._transformPathLikeValue(e,n),i=t[t.length-1];0===n&&i.push(new Float64Array(this._coordinateBuffer.buffer,this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this._vertexDimension)),this._coordinateBuffer[this._coordinateBufferPtr++]=r}},{key:"_deriveApplyTransform",value:function(t){var e=t.hasZ,n=t.hasM;return e&&n?P:e?k:n?C:g}}]),t}(),b=n(27607),G=function(){function t(){(0,i.Z)(this,t)}return(0,o.Z)(t,[{key:"_parseFeatureQuery",value:function(t){var e=(0,b.C)(t.buffer,new Z(t.options)),n=(0,r.Z)((0,r.Z)({},e),{},{spatialReference:e.spatialReference.toJSON(),fields:e.fields?e.fields.map((function(t){return t.toJSON()})):void 0});return Promise.resolve(n)}}]),t}();function w(){return new G}}}]);
//# sourceMappingURL=4605.977826a9.chunk.js.map
"use strict";(self.webpackChunkfrontend_tripulaciones=self.webpackChunkfrontend_tripulaciones||[]).push([[6741],{98701:function(e,t,r){r.r(t),r.d(t,{default:function(){return Y}});var o=r(37762),n=r(74165),i=r(15861),s=r(15671),p=r(43144),u=r(97326),a=r(11752),l=r(61120),c=r(60136),d=r(29388),y=r(27366),f=(r(59486),r(44055)),v=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(28189),r(9014),r(40464)),h=r(97642),m=r(49861),g=(r(63780),r(25243),r(69912)),C=r(27823),b=r(30651),S=r(29439),_=r(10064),x=r(54472),R=r(92026),k=r(67213),F=r(49818),w=r(78952),Z=function(e){(0,c.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).featureDefinition=null,e.type="ogc-feature",e}return(0,p.Z)(r,[{key:"load",value:function(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}},{key:"getSource",value:function(){var e=this.featureDefinition,t=e.collection,r=e.layerDefinition,o=e.spatialReference,n=e.supportedCrs,i=this.layer,s=i.apiKey,p=i.customParameters;return{type:"ogc-source",collection:t,layerDefinition:r,maxRecordCount:i.effectiveMaxRecordCount,queryParameters:{apiKey:s,customParameters:p},spatialReference:o,supportedCrs:n}}},{key:"queryExtent",value:function(e){return null}},{key:"queryFeatureCount",value:function(e){return null}},{key:"queryFeatures",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.queryFeaturesJSON(e,t).then((function(e){return F.default.fromJSON(e)}))}},{key:"queryFeaturesJSON",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.getSource();return this.load(t).then((function(){return(0,k.yN)(r,e,t)}))}},{key:"queryObjectIds",value:function(e){return null}},{key:"serviceSupportsSpatialReference",value:function(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}},{key:"_conformsToType",value:function(e,t){var r,o=new RegExp("^".concat(t,"$"),"i");return null!==(r=e.conformsTo.some((function(e){return o.test(e)})))&&void 0!==r&&r}},{key:"_getCapabilities",value:function(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}},{key:"_getMaxRecordCount",value:function(e){var t,r,o,n,i,s,p,u,a;return null!==(t=null===e||void 0===e||null===(r=e.components)||void 0===r||null===(o=r.parameters)||void 0===o||null===(n=o.limit)||void 0===n||null===(i=n.schema)||void 0===i?void 0:i.maximum)&&void 0!==t?t:null===e||void 0===e||null===(s=e.components)||void 0===s||null===(p=s.parameters)||void 0===p||null===(u=p.limitFeatures)||void 0===u||null===(a=u.schema)||void 0===a?void 0:a.maximum}},{key:"_getStorageSpatialReference",value:function(e){var t,r=null!==(t=e.storageCrs)&&void 0!==t?t:k.$9,o=(0,k.d)(r);return(0,R.Wi)(o)?w.Z.WGS84:new w.Z({wkid:o})}},{key:"_getSupportedSpatialReferences",value:function(e,t){var r,o="#/crs",n=null!==(r=e.crs)&&void 0!==r?r:[k.$9],i=n.includes(o)?n.filter((function(e){return e!==o})).concat(t.crs):n,s=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return i.filter((function(e){return!s.test(e)}))}},{key:"_loadOGCServices",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){var i,s,p,u,a,l,c,d,y,f,v,h,m,g,b,x,F,w,Z,I,O,T,D,j,P,E,M,Q,q,G;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,R.pC)(r)?r.signal:null,s=t.apiKey,p=t.collectionId,u=t.customParameters,a=t.fields,l=t.geometryType,c=t.hasZ,d=t.objectIdField,y=t.timeInfo,f=t.url,v={fields:null===a||void 0===a?void 0:a.map((function(e){return e.toJSON()})),geometryType:C.P$.toJSON(l),hasZ:c,objectIdField:d,timeInfo:null===y||void 0===y?void 0:y.toJSON()},h={apiKey:s,customParameters:u,signal:i},e.next=14,(0,k.gp)(f,h);case 14:return m=e.sent,e.next=17,Promise.all([(0,k.G4)(m,h),(0,k.j)(m,h)]);case 17:if(g=e.sent,b=(0,S.Z)(g,2),x=b[0],F=b[1],this._conformsToType(x,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson")){e.next=23;break}throw new _.Z("ogc-feature-layer:no-geojson-support","Server does not support geojson");case 23:if(w=F.collections.find((function(e){return e.id===p})),w){e.next=26;break}throw new _.Z("ogc-feature-layer:collection-not-found","Server does not contain the named collection");case 26:if(!this._conformsToType(x,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")){e.next=32;break}return e.next=29,(0,k.eS)(m,h);case 29:e.t0=e.sent,e.next=33;break;case 32:e.t0=null;case 33:return Z=e.t0,e.next=36,(0,k.w9)(w,v,h);case 36:I=e.sent,O=this._getMaxRecordCount(Z),T=this._getCapabilities(I.hasZ,O),D=this._getStorageSpatialReference(w).toJSON(),j=this._getSupportedSpatialReferences(w,F),P=new RegExp("^".concat(k.Lu),"i"),E={},M=(0,o.Z)(j);try{for(M.s();!(Q=M.n()).done;)q=Q.value,G=(0,k.d)(q),(0,R.pC)(G)&&(E[G]||(E[G]=q.replace(P,"")))}catch(n){M.e(n)}finally{M.f()}this.featureDefinition={capabilities:T,collection:w,layerDefinition:I,spatialReference:D,supportedCrs:E};case 46:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),r}(x.Z);(0,y._)([(0,m.Cb)()],Z.prototype,"featureDefinition",void 0),(0,y._)([(0,m.Cb)({constructOnly:!0})],Z.prototype,"layer",void 0),(0,y._)([(0,m.Cb)()],Z.prototype,"type",void 0),Z=(0,y._)([(0,g.j)("esri.layers.graphics.sources.OGCFeatureSource")],Z);var I=r(27961),O=r(6693),T=r(46671),D=r(7632),j=r(64390),P=r(6061),E=r(94207),M=r(29598),Q=r(71684),q=r(56811),G=r(99063),A=r(45948),B=r(87165),N=r(83040),H=r(25610),L=r(80031),z=r(77748),J=r(85116),U=r(86638),V=r(81085),W=r(53866),$=(0,H.v)(),K=function(e){(0,c.Z)(r,e);var t=(0,d.Z)(r);function r(e){var o;return(0,s.Z)(this,r),(o=t.call(this,e)).collectionId=null,o.copyright=null,o.definitionExpression=null,o.description=null,o.displayField=null,o.elevationInfo=null,o.fields=null,o.fieldsIndex=null,o.fullExtent=null,o.geometryType=null,o.hasZ=void 0,o.labelingInfo=null,o.labelsVisible=!0,o.legendEnabled=!0,o.maxRecordCount=null,o.objectIdField=null,o.operationalLayerType="OGCFeatureLayer",o.popupEnabled=!0,o.popupTemplate=null,o.screenSizePerspectiveEnabled=!0,o.source=new Z({layer:(0,u.Z)(o)}),o.spatialReference=null,o.title=null,o.type="ogc-feature",o.typeIdField=null,o.types=null,o.url=null,o}return(0,p.Z)(r,[{key:"destroy",value:function(){var e;null===(e=this.source)||void 0===e||e.destroy()}},{key:"load",value:function(e){var t=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((function(){return t._fetchService(e)}))),this.when()}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"effectiveMaxRecordCount",get:function(){var e,t,r;return null!==(e=null!==(t=this.maxRecordCount)&&void 0!==t?t:null===(r=this.capabilities)||void 0===r?void 0:r.query.maxRecordCount)&&void 0!==e?e:5e3}},{key:"isTable",get:function(){return this.loaded&&null==this.geometryType}},{key:"renderer",set:function(e){(0,L.YN)(e,this.fieldsIndex),this._set("renderer",e)}},{key:"on",value:function(e,t){return(0,a.Z)((0,l.Z)(r.prototype),"on",this).call(this,e,t)}},{key:"createPopupTemplate",value:function(e){return(0,V.eZ)(this,e)}},{key:"createQuery",value:function(){return new U.Z}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFieldDomain",value:function(e,t){var r,o,n=this,i=!1,s=null===t||void 0===t||null===(r=t.feature)||void 0===r?void 0:r.attributes,p=this.typeIdField&&(null===s||void 0===s?void 0:s[this.typeIdField]);return null!=p&&this.types&&(i=this.types.some((function(t){var r,i;return t.id==p&&("inherited"===(null===(i=o=null===(r=t.domains)||void 0===r?void 0:r[e])||void 0===i?void 0:i.type)&&(o=n._getLayerDomain(e)),!0)}))),i||o||(o=this._getLayerDomain(e)),o}},{key:"queryFeatures",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatures(U.Z.from(e)||r.createQuery(),t)})).then((function(e){var t;return null!==e&&void 0!==e&&null!==(t=e.features)&&void 0!==t&&t.forEach((function(e){e.layer=e.sourceLayer=r})),e}))}},{key:"serviceSupportsSpatialReference",value:function(e){var t,r;return null!==(t=null===(r=this.source)||void 0===r?void 0:r.serviceSupportsSpatialReference(e))&&void 0!==t&&t}},{key:"_fetchService",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.source.load(t);case 2:this.read(this.source.featureDefinition,{origin:"service"}),(0,L.YN)(this.renderer,this.fieldsIndex),(0,L.UF)(this.timeInfo,this.fieldsIndex);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getLayerDomain",value:function(e){if(!this.fields)return null;var t,r=(0,o.Z)(this.fields);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(n.name===e&&n.domain)return n.domain}}catch(i){r.e(i)}finally{r.f()}return null}}]),r}((0,I.V)((0,T.N)((0,j.M)((0,D.b)((0,O.h)((0,E.c)((0,G.n)((0,q.M)((0,P.q)((0,M.I)((0,Q.Q)((0,h.R)(b.Z)))))))))))));(0,y._)([(0,m.Cb)({readOnly:!0,json:{origins:{service:{read:!0}}}})],K.prototype,"capabilities",void 0),(0,y._)([(0,m.Cb)({type:String,json:{write:!0}})],K.prototype,"collectionId",void 0),(0,y._)([(0,m.Cb)({type:String})],K.prototype,"copyright",void 0),(0,y._)([(0,m.Cb)({readOnly:!0})],K.prototype,"defaultPopupTemplate",null),(0,y._)([(0,m.Cb)({type:String})],K.prototype,"definitionExpression",void 0),(0,y._)([(0,m.Cb)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],K.prototype,"description",void 0),(0,y._)([(0,m.Cb)({type:String})],K.prototype,"displayField",void 0),(0,y._)([(0,m.Cb)({type:Number})],K.prototype,"effectiveMaxRecordCount",null),(0,y._)([(0,m.Cb)(A.PV)],K.prototype,"elevationInfo",void 0),(0,y._)([(0,m.Cb)({type:[N.Z],json:{origins:{service:{name:"layerDefinition.fields"}}}})],K.prototype,"fields",void 0),(0,y._)([(0,m.Cb)($.fieldsIndex)],K.prototype,"fieldsIndex",void 0),(0,y._)([(0,m.Cb)({readOnly:!0,type:W.Z,json:{origins:{service:{name:"layerDefinition.extent"}}}})],K.prototype,"fullExtent",void 0),(0,y._)([(0,m.Cb)({type:C.Mk.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:C.Mk.read}}}}})],K.prototype,"geometryType",void 0),(0,y._)([(0,m.Cb)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],K.prototype,"hasZ",void 0),(0,y._)([(0,m.Cb)({type:Boolean,readOnly:!0})],K.prototype,"isTable",null),(0,y._)([(0,m.Cb)({type:[z.Z],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:J.r},write:!0}}}})],K.prototype,"labelingInfo",void 0),(0,y._)([(0,m.Cb)(A.iR)],K.prototype,"labelsVisible",void 0),(0,y._)([(0,m.Cb)(A.rn)],K.prototype,"legendEnabled",void 0),(0,y._)([(0,m.Cb)({type:Number})],K.prototype,"maxRecordCount",void 0),(0,y._)([(0,m.Cb)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],K.prototype,"objectIdField",void 0),(0,y._)([(0,m.Cb)({type:["OGCFeatureLayer"]})],K.prototype,"operationalLayerType",void 0),(0,y._)([(0,m.Cb)(A.C_)],K.prototype,"popupEnabled",void 0),(0,y._)([(0,m.Cb)({type:f.Z,json:{name:"popupInfo",write:!0}})],K.prototype,"popupTemplate",void 0),(0,y._)([(0,m.Cb)({types:v.A,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:v.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],K.prototype,"renderer",null),(0,y._)([(0,m.Cb)(A.YI)],K.prototype,"screenSizePerspectiveEnabled",void 0),(0,y._)([(0,m.Cb)({readOnly:!0})],K.prototype,"source",void 0),(0,y._)([(0,m.Cb)({readOnly:!0,type:w.Z,json:{origins:{service:{read:!0}}}})],K.prototype,"spatialReference",void 0),(0,y._)([(0,m.Cb)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],K.prototype,"title",void 0),(0,y._)([(0,m.Cb)({readOnly:!0,json:{read:!1}})],K.prototype,"type",void 0),(0,y._)([(0,m.Cb)({type:String,readOnly:!0})],K.prototype,"typeIdField",void 0),(0,y._)([(0,m.Cb)({type:[B.Z]})],K.prototype,"types",void 0),(0,y._)([(0,m.Cb)(A.HQ)],K.prototype,"url",void 0);var Y=K=(0,y._)([(0,g.j)("esri.layers.OGCFeatureLayer")],K)},60480:function(e,t,r){r.d(t,{g:function(){return o}});var o={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}}]);
//# sourceMappingURL=6741.17177c9a.chunk.js.map
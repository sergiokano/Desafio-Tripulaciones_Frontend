"use strict";(self.webpackChunkfrontend_tripulaciones=self.webpackChunkfrontend_tripulaciones||[]).push([[5738],{4321:function(e,t,i){i.d(t,{Y:function(){return c}});var n=i(15671),r=i(43144),a=i(60136),u=i(29388),l=i(27366),s=(i(32718),i(25243),i(63780),i(10064),i(93169),i(69912)),o=i(9849),c=function(e){var t=function(e){(0,a.Z)(i,e);var t=(0,u.Z)(i);function i(){return(0,n.Z)(this,i),t.apply(this,arguments)}return(0,r.Z)(i,[{key:"attach",value:function(){this.view.timeline.record("".concat(this.layer.title," (BitmapTileLayer) Attach")),this._bitmapView=new o.s(this._tileInfoView),this.container.addChild(this._bitmapView)}},{key:"detach",value:function(){var e;this.container.removeChild(this._bitmapView),null===(e=this._bitmapView)||void 0===e||e.removeAllChildren()}}]),i}(e);return t=(0,l._)([(0,s.j)("esri.views.2d.layers.BitmapTileLayerView2D")],t)}},5738:function(e,t,i){i.r(t),i.d(t,{default:function(){return L}});var n=i(1413),r=i(74165),a=i(15861),u=i(29439),l=i(15671),s=i(43144),o=i(11752),c=i(61120),h=i(60136),f=i(29388),d=i(27366),p=i(32718),v=i(66978),y=i(94172),_=i(49861),w=(i(63780),i(25243),i(69912)),m=i(92975),g=i(4321),k=i(95986),Z=i(34622),I=i(37995),b=i(73828),x=i(32344),S=i(85269),V=i(67581),T=i(13107),M=[102113,102100,3857,3785,900913],C=[0,0],R=function(e){(0,h.Z)(i,e);var t=(0,f.Z)(i);function i(){var e;return(0,l.Z)(this,i),(e=t.apply(this,arguments))._tileStrategy=null,e._fetchQueue=null,e._tileRequests=new Map,e.layer=null,e}return(0,s.Z)(i,[{key:"tileMatrixSet",get:function(){var e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}},{key:"update",value:function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}},{key:"attach",value:function(){var e=this;if(this.tileMatrixSet){var t=this.tileMatrixSet.tileInfo;this._tileInfoView=new I.Z(t),this._fetchQueue=new x.Z({tileInfoView:this._tileInfoView,concurrency:16,process:function(t,i){return e.fetchTile(t,i)}}),this._tileStrategy=new S.Z({cachePolicy:"keep",resampling:!0,acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView}),this.handles.add((0,y.YP)((function(){var t,i;return[null===(t=e.layer)||void 0===t||null===(i=t.activeLayer)||void 0===i?void 0:i.styleId,e.tileMatrixSet]}),(function(){return e._refresh()})),this.declaredClass),(0,o.Z)((0,c.Z)(i.prototype),"attach",this).call(this)}}},{key:"detach",value:function(){var e,t;(0,o.Z)((0,c.Z)(i.prototype),"detach",this).call(this),this.handles.remove(this.declaredClass),null!==(e=this._tileStrategy)&&void 0!==e&&e.destroy(),null!==(t=this._fetchQueue)&&void 0!==t&&t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}},{key:"moveStart",value:function(){this.requestUpdate()}},{key:"viewChange",value:function(){this.requestUpdate()}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"releaseTile",value:function(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(function(){return e.destroy()})),this.requestUpdate()}},{key:"acquireTile",value:function(e){var t,i,n,r=this._bitmapView.createTile(e),a=r.bitmap;return t=this._tileInfoView.getTileCoords(C,r.key),i=(0,u.Z)(t,2),a.x=i[0],a.y=i[1],a.resolution=this._tileInfoView.getTileResolution(r.key),n=(0,u.Z)(this._tileInfoView.tileInfo.size,2),a.width=n[0],a.height=n[1],this._enqueueTileFetch(r),this._bitmapView.addChild(r),this.requestUpdate(),r}},{key:"doRefresh",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!this.attached||this.updateRequested||this.suspended||this._refresh();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){var e,t;return null!==(e=null===(t=this._fetchQueue)||void 0===t?void 0:t.updating)&&void 0!==e&&e}},{key:"fetchTile",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var i,a,u,l,s,o,c,h,f,d,p=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=p.length>1&&void 0!==p[1]?p[1]:{},a="tilemapCache"in this.layer?this.layer.tilemapCache:null,u=i.signal,l=i.resamplingLevel,s=void 0===l?0:l,a){e.next=4;break}return e.abrupt("return",this._fetchImage(t,u));case 4:return o=new b.Z(0,0,0,0),e.prev=5,e.next=8,a.fetchAvailabilityUpsample(t.level,t.row,t.col,o,{signal:u});case 8:return e.next=10,this._fetchImage(o,u);case 10:c=e.sent,e.next=26;break;case 13:if(e.prev=13,e.t0=e.catch(5),!(0,v.D_)(e.t0)){e.next=17;break}throw e.t0;case 17:if(!(s<3)){e.next=25;break}if(!(h=this._tileInfoView.getTileParentId(t.id))){e.next=25;break}return f=new b.Z(h),e.next=23,this.fetchTile(f,(0,n.Z)((0,n.Z)({},i),{},{resamplingLevel:s+1}));case 23:return d=e.sent,e.abrupt("return",(0,Z.i)(this._tileInfoView,d,f,t));case 25:throw e.t0;case 26:return e.abrupt("return",(0,Z.i)(this._tileInfoView,c,o,t));case 27:case"end":return e.stop()}}),e,this,[[5,13]])})));return function(t){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){var e=(0,o.Z)((0,c.Z)(i.prototype),"canResume",this).call(this);return e?null!==this.tileMatrixSet:e}},{key:"supportsSpatialReference",value:function(e){return this.layer.activeLayer.tileMatrixSets.some((function(t){return(0,m.fS)(t.tileInfo.spatialReference,e)}))}},{key:"_enqueueTileFetch",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var i,n=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._fetchQueue.has(t.key.id)){e.next=12;break}return e.prev=1,e.next=4,this._fetchQueue.push(t.key);case 4:i=e.sent,t.bitmap.source=i,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",(function(){return n.requestUpdate()})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),(0,v.D_)(e.t0)||p.Z.getLogger(this.declaredClass).error(e.t0);case 11:this.requestUpdate();case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchImage",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:i}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"_refresh",value:function(){var e=this;this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((function(t){if(t.bitmap.source){var i={id:t.key.id,fulfilled:!1,promise:e._fetchQueue.push(t.key).then((function(e){t.bitmap.source=e})).catch((function(e){(0,v.D_)(e)||(t.bitmap.source=null)})).finally((function(){t.requestRender(),i.fulfilled=!0}))};e._tileRequests.set(t,i)}}))}},{key:"_getTileMatrixSetBySpatialReference",value:function(e){var t=this.view.spatialReference;if(!e.tileMatrixSets)return null;var i=e.tileMatrixSets.find((function(e){return(0,m.fS)(e.tileInfo.spatialReference,t)}));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find((function(e){return M.includes(e.tileInfo.spatialReference.wkid)}))),i}}]),i}((0,T.Z)((0,g.Y)((0,k.y)(V.Z))));(0,d._)([(0,_.Cb)()],R.prototype,"_fetchQueue",void 0),(0,d._)([(0,_.Cb)({readOnly:!0})],R.prototype,"tileMatrixSet",null);var L=R=(0,d._)([(0,w.j)("esri.views.2d.layers.WMTSLayerView2D")],R)},34622:function(e,t,i){i.d(t,{V:function(){return a},i:function(){return r}});var n=i(29439);function r(e,t,i,n){if(i.level===n.level)return t;var r=e.tileInfo.size,u=e.getTileResolution(i.level),l=e.getTileResolution(n.level),s=e.getLODInfoAt(n.level),o=s.getXForColumn(n.col),c=s.getYForRow(n.row),h=(s=e.getLODInfoAt(i.level)).getXForColumn(i.col),f=s.getYForRow(i.row),d=function(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}(t)/r[0],p=function(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}(t)/r[1],v=Math.round(d*((o-h)/u)),y=Math.round(p*(-(c-f)/u)),_=Math.round(d*r[0]*(l/u)),w=Math.round(p*r[1]*(l/u)),m=a(r);return m.getContext("2d").drawImage(t,v,y,_,w,0,0,r[0],r[1]),m}function a(e){var t,i=document.createElement("canvas");return t=(0,n.Z)(e,2),i.width=t[0],i.height=t[1],i}},13107:function(e,t,i){i.d(t,{Z:function(){return d}});var n=i(15671),r=i(43144),a=i(60136),u=i(29388),l=i(27366),s=i(32718),o=i(66978),c=i(94172),h=i(49861),f=(i(63780),i(25243),i(69912)),d=function(e){var t=function(e){(0,a.Z)(i,e);var t=(0,u.Z)(i);function i(){return(0,n.Z)(this,i),t.apply(this,arguments)}return(0,r.Z)(i,[{key:"initialize",value:function(){var e=this;this.handles.add((0,c.on)((function(){return e.layer}),"refresh",(function(t){e.doRefresh(t.dataChanged).catch((function(t){(0,o.D_)(t)||s.Z.getLogger(e.declaredClass).error(t)}))})),"RefreshableLayerView")}}]),i}(e);return(0,l._)([(0,h.Cb)()],t.prototype,"layer",void 0),t=(0,l._)([(0,f.j)("esri.layers.mixins.RefreshableLayerView")],t)}}}]);
//# sourceMappingURL=5738.d33c5611.chunk.js.map
this.google=this.google||{},this.google.maps=this.google.maps||{},this.google.maps.plugins=this.google.maps.plugins||{},this.google.maps.plugins.markermanager=function(t){"use strict";function s(t,s){return new google.maps.Point(~~(.5+(i=t.lng(),(1+i/180)*(2<<s+6))),~~(.5+function(t){const s=Math.sin(t*Math.PI/180);return 1-.5/Math.PI*Math.log((1+s)/(1-s))}(t.lat())*(2<<s+6)));var i}class i{constructor(t,s){this.z=s,this.minX=Math.min(t[0].x,t[1].x),this.maxX=Math.max(t[0].x,t[1].x),this.minY=Math.min(t[0].y,t[1].y),this.maxY=Math.max(t[0].y,t[1].y)}equals(t){return this.maxX===t.maxX&&this.maxY===t.maxY&&this.minX===t.minX&&this.minY===t.minY}containsPoint(t){return this.minX<=t.x&&this.maxX>=t.x&&this.minY<=t.y&&this.maxY>=t.y}}return t.MarkerManager=class{constructor(t,{maxZoom:s=19,trackMarkers:i,shown:e=!0,borderPadding:o=100}){this._tileSize=1024,this._map=t,this._mapZoom=t.getZoom(),this._maxZoom=s,this._trackMarkers=i,this._swPadding=new google.maps.Size(-o,o),this._nePadding=new google.maps.Size(o,-o),this._gridWidth={},this._grid=[],this._grid[this._maxZoom]=[],this._numMarkers={},this._numMarkers[this._maxZoom]=0,this.shownMarkers=0,this.shown=e,google.maps.event.addListenerOnce(t,"idle",(()=>{this._initialize()}))}_initialize(){const t=this._map.mapTypes;for(const s in t)s in t&&t.get(s)&&"number"===t.get(s).maxZoom&&this._map.mapTypes.get(s).maxZoom;google.maps.event.addListener(this._map,"dragend",this._onMapMoveEnd.bind(this)),google.maps.event.addListener(this._map,"idle",this._onMapMoveEnd.bind(this)),google.maps.event.addListener(this._map,"zoom_changed",this._onMapMoveEnd.bind(this)),this.resetManager(),this._shownBounds=this._getMapGridBounds(),google.maps.event.trigger(this,"loaded")}_removeOverlay(t){t.setMap(null),this.shownMarkers--}_addOverlay(t){this.shown&&(t.setMap(this._map),this.shownMarkers++)}resetManager(){let t=256;for(let s=0;s<=this._maxZoom;++s)this._grid[s]=[],this._numMarkers[s]=0,this._gridWidth[s]=Math.ceil(t/this._tileSize),t<<=1}clearMarkers(){this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.resetManager()}_getTilePoint(t,i,e){const o=s(t,i);return new google.maps.Point(Math.floor((o.x+e.width)/this._tileSize),Math.floor((o.y+e.height)/this._tileSize))}_addMarkerBatch(t,s,i){const e=t.getPosition();t.set("__minZoom",s),this._trackMarkers&&google.maps.event.addListener(t,"changed",((t,s,i)=>{this._onMarkerMoved(t,s,i)}));const o=this._getTilePoint(e,i,new google.maps.Size(0,0));for(let e=i;e>=s;e--){this._getGridCellCreate(o.x,o.y,e).push(t),o.x=o.x>>1,o.y=o.y>>1}}_isGridPointVisible(t){const s=this._shownBounds.minY<=t.y&&t.y<=this._shownBounds.maxY,i=this._shownBounds.minX;let e=i<=t.x&&t.x<=this._shownBounds.maxX;if(!e&&i<0){const s=this._gridWidth[this._shownBounds.z];e=i+s<=t.x&&t.x<=s-1}return s&&e}_onMarkerMoved(t,s,i){let e=this._maxZoom,o=!1;const h=this._getTilePoint(s,e,new google.maps.Size(0,0)),r=this._getTilePoint(i,e,new google.maps.Size(0,0));for(;e>=0&&(h.x!==r.x||h.y!==r.y);){const s=this._getGridCellNoCreate(h.x,h.y,e);s&&this._removeMarkerFromCell(s,t)&&this._getGridCellCreate(r.x,r.y,e).push(t),e===this._mapZoom&&(this._isGridPointVisible(h)?this._isGridPointVisible(r)||(this._removeOverlay(t),o=!0):this._isGridPointVisible(r)&&(this._addOverlay(t),o=!0)),h.x=h.x>>1,h.y=h.y>>1,r.x=r.x>>1,r.y=r.y>>1,--e}o&&this._notifyListeners()}removeMarker(t){let s=this._maxZoom,i=!1;const e=t.getPosition(),o=this._getTilePoint(e,s,new google.maps.Size(0,0));for(;s>=0;){const e=this._getGridCellNoCreate(o.x,o.y,s);e&&this._removeMarkerFromCell(e,t),s===this._mapZoom&&this._isGridPointVisible(o)&&(this._removeOverlay(t),i=!0),o.x=o.x>>1,o.y=o.y>>1,--s}i&&this._notifyListeners(),this._numMarkers[t.get("__minZoom")]--}addMarkers(t,s,i){i=this._getOptmaxZoom(i);for(let e=t.length-1;e>=0;e--)this._addMarkerBatch(t[e],s,i);this._numMarkers[s]+=t.length}_getOptmaxZoom(t){return t||this._maxZoom}getMarkerCount(t){let s=0;for(let i=0;i<=t;i++)s+=this._numMarkers[i];return s}getMarker(t,s,i){const e=new google.maps.LatLng(t,s),o=this._getTilePoint(e,i,new google.maps.Size(0,0));let h=new google.maps.Marker({position:e});const r=this._getGridCellNoCreate(o.x,o.y,i);if(void 0!==r)for(let i=0;i<r.length;i++)t===r[i].getPosition().lat()&&s===r[i].getPosition().lng()&&(h=r[i]);return h}addMarker(t,s,i){i=this._getOptmaxZoom(i),this._addMarkerBatch(t,s,i);const e=this._getTilePoint(t.getPosition(),this._mapZoom,new google.maps.Size(0,0));this._isGridPointVisible(e)&&s<=this._shownBounds.z&&this._shownBounds.z<=i&&(this._addOverlay(t),this._notifyListeners()),this._numMarkers[s]++}_getGridCellCreate(t,s,i){return t<0&&(t+=this._gridWidth[i]),this._grid[i]||(this._grid[i]=[]),this._grid[i][t]||(this._grid[i][t]=[]),this._grid[i][t][s]||(this._grid[i][t][s]=[]),this._grid[i][t][s]}_getGridCellNoCreate(t,s,i){return t<0&&(t+=this._gridWidth[i]),this._grid[i]&&this._grid[i][t]&&this._grid[i][t][s]?this._grid[i][t][s]:null}_getGridBounds(t,s,e,o){s=Math.min(s,this._maxZoom);const h=t.getSouthWest(),r=t.getNorthEast(),n=this._getTilePoint(h,s,e),a=this._getTilePoint(r,s,o),_=this._gridWidth[s];(r.lng()<h.lng()||a.x<n.x)&&(n.x-=_),a.x-n.x+1>=_&&(n.x=0,a.x=_-1);const l=new i([n,a],s);return l.z=s,l}_getMapGridBounds(){return this._getGridBounds(this._map.getBounds(),this._mapZoom,this._swPadding,this._nePadding)}_onMapMoveEnd(){window.setTimeout(this._updateMarkers.bind(this),0)}visible(){return!!this.shown}isHidden(){return!this.shown}show(){this.shown=!0,this.refresh()}hide(){this.shown=!1,this.refresh()}toggle(){this.shown=!this.shown,this.refresh()}refresh(){this.shownMarkers>0&&this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.show&&this._processAll(this._shownBounds,this._addOverlay.bind(this)),this._notifyListeners()}_updateMarkers(){this._mapZoom=this._map.getZoom();const t=this._getMapGridBounds();t.equals(this._shownBounds)&&t.z===this._shownBounds.z||(t.z!==this._shownBounds.z?(this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.show&&this._processAll(t,this._addOverlay.bind(this))):(this._rectangleDiff(this._shownBounds,t,this._removeCellMarkers.bind(this)),this.show&&this._rectangleDiff(t,this._shownBounds,this._addCellMarkers.bind(this))),this._shownBounds=t,this._notifyListeners())}_notifyListeners(){google.maps.event.trigger(this,"changed",this._shownBounds,this.shownMarkers)}_processAll(t,s){for(let i=t.minX;i<=t.maxX;i++)for(let e=t.minY;e<=t.maxY;e++)this._processCellMarkers(i,e,t.z,s)}_processCellMarkers(t,s,i,e){const o=this._getGridCellNoCreate(t,s,i);if(o)for(let t=o.length-1;t>=0;t--)e(o[t])}_removeCellMarkers(t,s,i){this._processCellMarkers(t,s,i,this._removeOverlay.bind(this))}_addCellMarkers(t,s,i){this._processCellMarkers(t,s,i,this._addOverlay.bind(this))}_rectangleDiff(t,s,i){this._rectangleDiffCoords(t,s,((s,e)=>{i(s,e,t.z)}))}_rectangleDiffCoords(t,s,i){const e=t.minX,o=t.minY,h=t.maxX,r=t.maxY,n=s.minX,a=s.minY,_=s.maxX,l=s.maxY;let d,g;for(d=e;d<=h;d++){for(g=o;g<=r&&g<a;g++)i(d,g);for(g=Math.max(l+1,o);g<=r;g++)i(d,g)}for(g=Math.max(o,a);g<=Math.min(r,l);g++){for(d=Math.min(h+1,n)-1;d>=e;d--)i(d,g);for(d=Math.max(e,_+1);d<=h;d++)i(d,g)}}_removeMarkerFromCell(t,s){let i=0;for(let e=0;e<t.length;++e)t[e]===s&&(t.splice(e--,1),i++);return i}},Object.defineProperty(t,"__esModule",{value:!0}),t}({});
//# sourceMappingURL=index.dev.js.map

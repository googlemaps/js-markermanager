!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(((t="undefined"!=typeof globalThis?globalThis:t||self).google=t.google||{},t.google.maps=t.google.maps||{},t.google.maps.plugins=t.google.maps.plugins||{},t.google.maps.plugins.markermanager={}))}(this,(function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t,e){return t(e={exports:{}},e.exports),e.exports}var s,a,u=function(t){return t&&t.Math==Math&&t},h=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof i&&i)||function(){return this}()||Function("return this")(),l=function(t){try{return!!t()}catch(t){return!0}},c=!l((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f={}.propertyIsEnumerable,g=Object.getOwnPropertyDescriptor,d={f:g&&!f.call({1:2},1)?function(t){var e=g(this,t);return!!e&&e.enumerable}:f},m=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},v={}.toString,p=function(t){return v.call(t).slice(8,-1)},_="".split,y=l((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==p(t)?_.call(t,""):Object(t)}:Object,b=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},w=function(t){return y(b(t))},M=function(t){return"function"==typeof t},k=function(t){return"object"==typeof t?null!==t:M(t)},x=function(t){return M(t)?t:void 0},O=function(t,e){return arguments.length<2?x(h[t]):h[t]&&h[t][e]},S=O("navigator","userAgent")||"",P=h.process,C=h.Deno,j=P&&P.versions||C&&C.version,T=j&&j.v8;T?a=(s=T.split("."))[0]<4?1:s[0]+s[1]:S&&(!(s=S.match(/Edge\/(\d+)/))||s[1]>=74)&&(s=S.match(/Chrome\/(\d+)/))&&(a=s[1]);var z=a&&+a,B=!!Object.getOwnPropertySymbols&&!l((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&z&&z<41})),E=B&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,G=E?function(t){return"symbol"==typeof t}:function(t){var e=O("Symbol");return M(e)&&Object(t)instanceof e},Z=function(t){if(M(t))return t;throw TypeError(function(t){try{return String(t)}catch(t){return"Object"}}(t)+" is not a function")},A=function(t,e){try{Object.defineProperty(h,t,{value:e,configurable:!0,writable:!0})}catch(n){h[t]=e}return e},L="__core-js_shared__",X=h[L]||A(L,{}),Y=o((function(t){(t.exports=function(t,e){return X[t]||(X[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.18.0",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),F=function(t){return Object(b(t))},N={}.hasOwnProperty,I=Object.hasOwn||function(t,e){return N.call(F(t),e)},D=0,W=Math.random(),V=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++D+W).toString(36)},R=Y("wks"),q=h.Symbol,U=E?q:q&&q.withoutSetter||V,H=function(t){return I(R,t)&&(B||"string"==typeof R[t])||(B&&I(q,t)?R[t]=q[t]:R[t]=U("Symbol."+t)),R[t]},K=H("toPrimitive"),$=function(t,e){if(!k(t)||G(t))return t;var n,r,i=null==(n=t[K])?void 0:Z(n);if(i){if(void 0===e&&(e="default"),r=i.call(t,e),!k(r)||G(r))return r;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),function(t,e){var n,r;if("string"===e&&M(n=t.toString)&&!k(r=n.call(t)))return r;if(M(n=t.valueOf)&&!k(r=n.call(t)))return r;if("string"!==e&&M(n=t.toString)&&!k(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}(t,e)},J=function(t){var e=$(t,"string");return G(e)?e:String(e)},Q=h.document,tt=k(Q)&&k(Q.createElement),et=!c&&!l((function(){return 7!=Object.defineProperty((t="div",tt?Q.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),nt=Object.getOwnPropertyDescriptor,rt={f:c?nt:function(t,e){if(t=w(t),e=J(e),et)try{return nt(t,e)}catch(t){}if(I(t,e))return m(!d.f.call(t,e),t[e])}},it=function(t){if(k(t))return t;throw TypeError(String(t)+" is not an object")},ot=Object.defineProperty,st={f:c?ot:function(t,e,n){if(it(t),e=J(e),it(n),et)try{return ot(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},at=c?function(t,e,n){return st.f(t,e,m(1,n))}:function(t,e,n){return t[e]=n,t},ut=Function.toString;M(X.inspectSource)||(X.inspectSource=function(t){return ut.call(t)});var ht,lt,ct,ft,gt=X.inspectSource,dt=h.WeakMap,mt=M(dt)&&/native code/.test(gt(dt)),vt=Y("keys"),pt={},_t="Object already initialized",yt=h.WeakMap;if(mt||X.state){var bt=X.state||(X.state=new yt),wt=bt.get,Mt=bt.has,kt=bt.set;ht=function(t,e){if(Mt.call(bt,t))throw new TypeError(_t);return e.facade=t,kt.call(bt,t,e),e},lt=function(t){return wt.call(bt,t)||{}},ct=function(t){return Mt.call(bt,t)}}else{var xt=vt[ft="state"]||(vt[ft]=V(ft));pt[xt]=!0,ht=function(t,e){if(I(t,xt))throw new TypeError(_t);return e.facade=t,at(t,xt,e),e},lt=function(t){return I(t,xt)?t[xt]:{}},ct=function(t){return I(t,xt)}}var Ot={set:ht,get:lt,has:ct,enforce:function(t){return ct(t)?lt(t):ht(t,{})},getterFor:function(t){return function(e){var n;if(!k(e)||(n=lt(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},St=Function.prototype,Pt=c&&Object.getOwnPropertyDescriptor,Ct=I(St,"name"),jt={EXISTS:Ct,PROPER:Ct&&"something"===function(){}.name,CONFIGURABLE:Ct&&(!c||c&&Pt(St,"name").configurable)},Tt=o((function(t){var e=jt.CONFIGURABLE,n=Ot.get,r=Ot.enforce,i=String(String).split("String");(t.exports=function(t,n,o,s){var a,u=!!s&&!!s.unsafe,l=!!s&&!!s.enumerable,c=!!s&&!!s.noTargetGet,f=s&&void 0!==s.name?s.name:n;M(o)&&("Symbol("===String(f).slice(0,7)&&(f="["+String(f).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!I(o,"name")||e&&o.name!==f)&&at(o,"name",f),(a=r(o)).source||(a.source=i.join("string"==typeof f?f:""))),t!==h?(u?!c&&t[n]&&(l=!0):delete t[n],l?t[n]=o:at(t,n,o)):l?t[n]=o:A(n,o)})(Function.prototype,"toString",(function(){return M(this)&&n(this).source||gt(this)}))})),zt=Math.ceil,Bt=Math.floor,Et=function(t){return isNaN(t=+t)?0:(t>0?Bt:zt)(t)},Gt=Math.min,Zt=function(t){return t>0?Gt(Et(t),9007199254740991):0},At=Math.max,Lt=Math.min,Xt=function(t,e){var n=Et(t);return n<0?At(n+e,0):Lt(n,e)},Yt=function(t){return function(e,n,r){var i,o=w(e),s=Zt(o.length),a=Xt(r,s);if(t&&n!=n){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((t||a in o)&&o[a]===n)return t||a||0;return!t&&-1}},Ft={includes:Yt(!0),indexOf:Yt(!1)}.indexOf,Nt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),It={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,r=w(t),i=0,o=[];for(n in r)!I(pt,n)&&I(r,n)&&o.push(n);for(;e.length>i;)I(r,n=e[i++])&&(~Ft(o,n)||o.push(n));return o}(t,Nt)}},Dt={f:Object.getOwnPropertySymbols},Wt=O("Reflect","ownKeys")||function(t){var e=It.f(it(t)),n=Dt.f;return n?e.concat(n(t)):e},Vt=function(t,e){for(var n=Wt(e),r=st.f,i=rt.f,o=0;o<n.length;o++){var s=n[o];I(t,s)||r(t,s,i(e,s))}},Rt=/#|\.prototype\./,qt=function(t,e){var n=Ht[Ut(t)];return n==$t||n!=Kt&&(M(e)?l(e):!!e)},Ut=qt.normalize=function(t){return String(t).replace(Rt,".").toLowerCase()},Ht=qt.data={},Kt=qt.NATIVE="N",$t=qt.POLYFILL="P",Jt=qt,Qt=rt.f,te=Array.isArray||function(t){return"Array"==p(t)},ee={};ee[H("toStringTag")]="z";var ne,re="[object z]"===String(ee),ie=H("toStringTag"),oe="Arguments"==p(function(){return arguments}()),se=re?p:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),ie))?n:oe?p(e):"Object"==(r=p(e))&&M(e.callee)?"Arguments":r},ae=[],ue=O("Reflect","construct"),he=/^\s*(?:class|function)\b/,le=he.exec,ce=!he.exec((function(){})),fe=function(t){if(!M(t))return!1;try{return ue(Object,ae,t),!0}catch(t){return!1}},ge=!ue||l((function(){var t;return fe(fe.call)||!fe(Object)||!fe((function(){t=!0}))||t}))?function(t){if(!M(t))return!1;switch(se(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return ce||!!le.call(he,gt(t))}:fe,de=H("species"),me=function(t,e){return new(function(t){var e;return te(t)&&(e=t.constructor,(ge(e)&&(e===Array||te(e.prototype))||k(e)&&null===(e=e[de]))&&(e=void 0)),void 0===e?Array:e}(t))(0===e?0:e)},ve=function(t,e,n){var r=J(e);r in t?st.f(t,r,m(0,n)):t[r]=n},pe=H("species"),_e=(ne="splice",z>=51||!l((function(){var t=[];return(t.constructor={})[pe]=function(){return{foo:1}},1!==t[ne](Boolean).foo}))),ye=Math.max,be=Math.min,we=9007199254740991,Me="Maximum allowed length exceeded";function ke(t,e){return new google.maps.Point(~~(.5+(i=t.lng(),(1+i/180)*(2<<e+6))),~~(.5+(n=t.lat(),r=Math.sin(n*Math.PI/180),(1-.5/Math.PI*Math.log((1+r)/(1-r)))*(2<<e+6))));var n,r,i}!function(t,e){var n,r,i,o,s,a=t.target,u=t.global,l=t.stat;if(n=u?h:l?h[a]||A(a,{}):(h[a]||{}).prototype)for(r in e){if(o=e[r],i=t.noTargetGet?(s=Qt(n,r))&&s.value:n[r],!Jt(u?r:a+(l?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;Vt(o,i)}(t.sham||i&&i.sham)&&at(o,"sham",!0),Tt(n,r,o,t)}}({target:"Array",proto:!0,forced:!_e},{splice:function(t,e){var n,r,i,o,s,a,u=F(this),h=Zt(u.length),l=Xt(t,h),c=arguments.length;if(0===c?n=r=0:1===c?(n=0,r=h-l):(n=c-2,r=be(ye(Et(e),0),h-l)),h+n-r>we)throw TypeError(Me);for(i=me(u,r),o=0;o<r;o++)(s=l+o)in u&&ve(i,o,u[s]);if(i.length=r,n<r){for(o=l;o<h-r;o++)a=o+n,(s=o+r)in u?u[a]=u[s]:delete u[a];for(o=h;o>h-r+n;o--)delete u[o-1]}else if(n>r)for(o=h-r;o>l;o--)a=o+n-1,(s=o+r-1)in u?u[a]=u[s]:delete u[a];for(o=0;o<n;o++)u[o+l]=arguments[o+2];return u.length=h-r+n,i}});var xe=function(){function t(n,r){e(this,t),this.z=r,this.minX=Math.min(n[0].x,n[1].x),this.maxX=Math.max(n[0].x,n[1].x),this.minY=Math.min(n[0].y,n[1].y),this.maxY=Math.max(n[0].y,n[1].y)}return r(t,[{key:"equals",value:function(t){return this.maxX===t.maxX&&this.maxY===t.maxY&&this.minX===t.minX&&this.minY===t.minY}},{key:"containsPoint",value:function(t){return this.minX<=t.x&&this.maxX>=t.x&&this.minY<=t.y&&this.maxY>=t.y}}]),t}(),Oe=function(){function t(n,r){var i=this,o=r.maxZoom,s=void 0===o?19:o,a=r.trackMarkers,u=r.shown,h=void 0===u||u,l=r.borderPadding,c=void 0===l?100:l;e(this,t),this._tileSize=1024,this._map=n,this._mapZoom=n.getZoom(),this._maxZoom=s,this._trackMarkers=a,this._swPadding=new google.maps.Size(-c,c),this._nePadding=new google.maps.Size(c,-c),this._gridWidth={},this._grid=[],this._grid[this._maxZoom]=[],this._numMarkers={},this._numMarkers[this._maxZoom]=0,this.shownMarkers=0,this.shown=h,google.maps.event.addListenerOnce(n,"idle",(function(){i._initialize()}))}return r(t,[{key:"_initialize",value:function(){var t=this._map.mapTypes;for(var e in t)e in t&&t.get(e)&&"number"===t.get(e).maxZoom&&this._map.mapTypes.get(e).maxZoom;google.maps.event.addListener(this._map,"dragend",this._onMapMoveEnd.bind(this)),google.maps.event.addListener(this._map,"idle",this._onMapMoveEnd.bind(this)),google.maps.event.addListener(this._map,"zoom_changed",this._onMapMoveEnd.bind(this)),this.resetManager(),this._shownBounds=this._getMapGridBounds(),google.maps.event.trigger(this,"loaded")}},{key:"_removeOverlay",value:function(t){t.setMap(null),this.shownMarkers--}},{key:"_addOverlay",value:function(t){this.shown&&(t.setMap(this._map),this.shownMarkers++)}},{key:"resetManager",value:function(){for(var t=256,e=0;e<=this._maxZoom;++e)this._grid[e]=[],this._numMarkers[e]=0,this._gridWidth[e]=Math.ceil(t/this._tileSize),t<<=1}},{key:"clearMarkers",value:function(){this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.resetManager()}},{key:"_getTilePoint",value:function(t,e,n){var r=ke(t,e);return new google.maps.Point(Math.floor((r.x+n.width)/this._tileSize),Math.floor((r.y+n.height)/this._tileSize))}},{key:"_addMarkerBatch",value:function(t,e,n){var r=this,i=t.getPosition();t.set("__minZoom",e),this._trackMarkers&&google.maps.event.addListener(t,"changed",(function(t,e,n){r._onMarkerMoved(t,e,n)}));for(var o=this._getTilePoint(i,n,new google.maps.Size(0,0)),s=n;s>=e;s--){this._getGridCellCreate(o.x,o.y,s).push(t),o.x=o.x>>1,o.y=o.y>>1}}},{key:"_isGridPointVisible",value:function(t){var e=this._shownBounds.minY<=t.y&&t.y<=this._shownBounds.maxY,n=this._shownBounds.minX,r=n<=t.x&&t.x<=this._shownBounds.maxX;if(!r&&n<0){var i=this._gridWidth[this._shownBounds.z];r=n+i<=t.x&&t.x<=i-1}return e&&r}},{key:"_onMarkerMoved",value:function(t,e,n){for(var r=this._maxZoom,i=!1,o=this._getTilePoint(e,r,new google.maps.Size(0,0)),s=this._getTilePoint(n,r,new google.maps.Size(0,0));r>=0&&(o.x!==s.x||o.y!==s.y);){var a=this._getGridCellNoCreate(o.x,o.y,r);a&&this._removeMarkerFromCell(a,t)&&this._getGridCellCreate(s.x,s.y,r).push(t),r===this._mapZoom&&(this._isGridPointVisible(o)?this._isGridPointVisible(s)||(this._removeOverlay(t),i=!0):this._isGridPointVisible(s)&&(this._addOverlay(t),i=!0)),o.x=o.x>>1,o.y=o.y>>1,s.x=s.x>>1,s.y=s.y>>1,--r}i&&this._notifyListeners()}},{key:"removeMarker",value:function(t){for(var e=this._maxZoom,n=!1,r=t.getPosition(),i=this._getTilePoint(r,e,new google.maps.Size(0,0));e>=0;){var o=this._getGridCellNoCreate(i.x,i.y,e);o&&this._removeMarkerFromCell(o,t),e===this._mapZoom&&this._isGridPointVisible(i)&&(this._removeOverlay(t),n=!0),i.x=i.x>>1,i.y=i.y>>1,--e}n&&this._notifyListeners(),this._numMarkers[t.get("__minZoom")]--}},{key:"addMarkers",value:function(t,e,n){n=this._getOptmaxZoom(n);for(var r=t.length-1;r>=0;r--)this._addMarkerBatch(t[r],e,n);this._numMarkers[e]+=t.length}},{key:"_getOptmaxZoom",value:function(t){return t||this._maxZoom}},{key:"getMarkerCount",value:function(t){for(var e=0,n=0;n<=t;n++)e+=this._numMarkers[n];return e}},{key:"getMarker",value:function(t,e,n){var r=new google.maps.LatLng(t,e),i=this._getTilePoint(r,n,new google.maps.Size(0,0)),o=new google.maps.Marker({position:r}),s=this._getGridCellNoCreate(i.x,i.y,n);if(void 0!==s)for(var a=0;a<s.length;a++)t===s[a].getPosition().lat()&&e===s[a].getPosition().lng()&&(o=s[a]);return o}},{key:"addMarker",value:function(t,e,n){n=this._getOptmaxZoom(n),this._addMarkerBatch(t,e,n);var r=this._getTilePoint(t.getPosition(),this._mapZoom,new google.maps.Size(0,0));this._isGridPointVisible(r)&&e<=this._shownBounds.z&&this._shownBounds.z<=n&&(this._addOverlay(t),this._notifyListeners()),this._numMarkers[e]++}},{key:"_getGridCellCreate",value:function(t,e,n){return t<0&&(t+=this._gridWidth[n]),this._grid[n]||(this._grid[n]=[]),this._grid[n][t]||(this._grid[n][t]=[]),this._grid[n][t][e]||(this._grid[n][t][e]=[]),this._grid[n][t][e]}},{key:"_getGridCellNoCreate",value:function(t,e,n){return t<0&&(t+=this._gridWidth[n]),this._grid[n]&&this._grid[n][t]&&this._grid[n][t][e]?this._grid[n][t][e]:null}},{key:"_getGridBounds",value:function(t,e,n,r){e=Math.min(e,this._maxZoom);var i=t.getSouthWest(),o=t.getNorthEast(),s=this._getTilePoint(i,e,n),a=this._getTilePoint(o,e,r),u=this._gridWidth[e];(o.lng()<i.lng()||a.x<s.x)&&(s.x-=u),a.x-s.x+1>=u&&(s.x=0,a.x=u-1);var h=new xe([s,a],e);return h.z=e,h}},{key:"_getMapGridBounds",value:function(){return this._getGridBounds(this._map.getBounds(),this._mapZoom,this._swPadding,this._nePadding)}},{key:"_onMapMoveEnd",value:function(){window.setTimeout(this._updateMarkers.bind(this),0)}},{key:"visible",value:function(){return!!this.shown}},{key:"isHidden",value:function(){return!this.shown}},{key:"show",value:function(){this.shown=!0,this.refresh()}},{key:"hide",value:function(){this.shown=!1,this.refresh()}},{key:"toggle",value:function(){this.shown=!this.shown,this.refresh()}},{key:"refresh",value:function(){this.shownMarkers>0&&this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.show&&this._processAll(this._shownBounds,this._addOverlay.bind(this)),this._notifyListeners()}},{key:"_updateMarkers",value:function(){this._mapZoom=this._map.getZoom();var t=this._getMapGridBounds();t.equals(this._shownBounds)&&t.z===this._shownBounds.z||(t.z!==this._shownBounds.z?(this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.show&&this._processAll(t,this._addOverlay.bind(this))):(this._rectangleDiff(this._shownBounds,t,this._removeCellMarkers.bind(this)),this.show&&this._rectangleDiff(t,this._shownBounds,this._addCellMarkers.bind(this))),this._shownBounds=t,this._notifyListeners())}},{key:"_notifyListeners",value:function(){google.maps.event.trigger(this,"changed",this._shownBounds,this.shownMarkers)}},{key:"_processAll",value:function(t,e){for(var n=t.minX;n<=t.maxX;n++)for(var r=t.minY;r<=t.maxY;r++)this._processCellMarkers(n,r,t.z,e)}},{key:"_processCellMarkers",value:function(t,e,n,r){var i=this._getGridCellNoCreate(t,e,n);if(i)for(var o=i.length-1;o>=0;o--)r(i[o])}},{key:"_removeCellMarkers",value:function(t,e,n){this._processCellMarkers(t,e,n,this._removeOverlay.bind(this))}},{key:"_addCellMarkers",value:function(t,e,n){this._processCellMarkers(t,e,n,this._addOverlay.bind(this))}},{key:"_rectangleDiff",value:function(t,e,n){this._rectangleDiffCoords(t,e,(function(e,r){n(e,r,t.z)}))}},{key:"_rectangleDiffCoords",value:function(t,e,n){var r,i,o=t.minX,s=t.minY,a=t.maxX,u=t.maxY,h=e.minX,l=e.minY,c=e.maxX,f=e.maxY;for(r=o;r<=a;r++){for(i=s;i<=u&&i<l;i++)n(r,i);for(i=Math.max(f+1,s);i<=u;i++)n(r,i)}for(i=Math.max(s,l);i<=Math.min(u,f);i++){for(r=Math.min(a+1,h)-1;r>=o;r--)n(r,i);for(r=Math.max(o,c+1);r<=a;r++)n(r,i)}}},{key:"_removeMarkerFromCell",value:function(t,e){for(var n=0,r=0;r<t.length;++r)t[r]===e&&(t.splice(r--,1),n++);return n}}]),t}();t.MarkerManager=Oe,Object.defineProperty(t,"__esModule",{value:!0})}));

this.google=this.google||{},this.google.maps=this.google.maps||{},this.google.maps.plugins=this.google.maps.plugins||{},this.google.maps.plugins.markermanager=function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t,e){return t(e={exports:{}},e.exports),e.exports}var s,a,u=function(t){return t&&t.Math==Math&&t},h=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof i&&i)||function(){return this}()||Function("return this")(),l=function(t){try{return!!t()}catch(t){return!0}},c=!l((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f=Function.prototype.call,g=f.bind?f.bind(f):function(){return f.apply(f,arguments)},d={}.propertyIsEnumerable,m=Object.getOwnPropertyDescriptor,v={f:m&&!d.call({1:2},1)?function(t){var e=m(this,t);return!!e&&e.enumerable}:d},p=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},_=Function.prototype,y=_.bind,b=_.call,w=y&&y.bind(b),M=y?function(t){return t&&w(b,t)}:function(t){return t&&function(){return b.apply(t,arguments)}},k=M({}.toString),x=M("".slice),O=function(t){return x(k(t),8,-1)},S=h.Object,P=M("".split),C=l((function(){return!S("z").propertyIsEnumerable(0)}))?function(t){return"String"==O(t)?P(t,""):S(t)}:S,j=h.TypeError,z=function(t){if(null==t)throw j("Can't call method on "+t);return t},B=function(t){return C(z(t))},T=function(t){return"function"==typeof t},E=function(t){return"object"==typeof t?null!==t:T(t)},G=function(t){return T(t)?t:void 0},Z=function(t,e){return arguments.length<2?G(h[t]):h[t]&&h[t][e]},A=M({}.isPrototypeOf),L=Z("navigator","userAgent")||"",X=h.process,Y=h.Deno,F=X&&X.versions||Y&&Y.version,N=F&&F.v8;N&&(a=(s=N.split("."))[0]>0&&s[0]<4?1:+(s[0]+s[1])),!a&&L&&(!(s=L.match(/Edge\/(\d+)/))||s[1]>=74)&&(s=L.match(/Chrome\/(\d+)/))&&(a=+s[1]);var I=a,D=!!Object.getOwnPropertySymbols&&!l((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&I&&I<41})),W=D&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,V=h.Object,R=W?function(t){return"symbol"==typeof t}:function(t){var e=Z("Symbol");return T(e)&&A(e.prototype,V(t))},q=h.String,U=h.TypeError,H=function(t){if(T(t))return t;throw U(function(t){try{return q(t)}catch(t){return"Object"}}(t)+" is not a function")},K=h.TypeError,$=Object.defineProperty,J=function(t,e){try{$(h,t,{value:e,configurable:!0,writable:!0})}catch(n){h[t]=e}return e},Q="__core-js_shared__",tt=h[Q]||J(Q,{}),et=o((function(t){(t.exports=function(t,e){return tt[t]||(tt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),nt=h.Object,rt=function(t){return nt(z(t))},it=M({}.hasOwnProperty),ot=Object.hasOwn||function(t,e){return it(rt(t),e)},st=0,at=Math.random(),ut=M(1..toString),ht=function(t){return"Symbol("+(void 0===t?"":t)+")_"+ut(++st+at,36)},lt=et("wks"),ct=h.Symbol,ft=ct&&ct.for,gt=W?ct:ct&&ct.withoutSetter||ht,dt=function(t){if(!ot(lt,t)||!D&&"string"!=typeof lt[t]){var e="Symbol."+t;D&&ot(ct,t)?lt[t]=ct[t]:lt[t]=W&&ft?ft(e):gt(e)}return lt[t]},mt=h.TypeError,vt=dt("toPrimitive"),pt=function(t,e){if(!E(t)||R(t))return t;var n,r,i=null==(n=t[vt])?void 0:H(n);if(i){if(void 0===e&&(e="default"),r=g(i,t,e),!E(r)||R(r))return r;throw mt("Can't convert object to primitive value")}return void 0===e&&(e="number"),function(t,e){var n,r;if("string"===e&&T(n=t.toString)&&!E(r=g(n,t)))return r;if(T(n=t.valueOf)&&!E(r=g(n,t)))return r;if("string"!==e&&T(n=t.toString)&&!E(r=g(n,t)))return r;throw K("Can't convert object to primitive value")}(t,e)},_t=function(t){var e=pt(t,"string");return R(e)?e:e+""},yt=h.document,bt=E(yt)&&E(yt.createElement),wt=!c&&!l((function(){return 7!=Object.defineProperty((t="div",bt?yt.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),Mt=Object.getOwnPropertyDescriptor,kt={f:c?Mt:function(t,e){if(t=B(t),e=_t(e),wt)try{return Mt(t,e)}catch(t){}if(ot(t,e))return p(!g(v.f,t,e),t[e])}},xt=h.String,Ot=h.TypeError,St=function(t){if(E(t))return t;throw Ot(xt(t)+" is not an object")},Pt=h.TypeError,Ct=Object.defineProperty,jt={f:c?Ct:function(t,e,n){if(St(t),e=_t(e),St(n),wt)try{return Ct(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Pt("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},zt=c?function(t,e,n){return jt.f(t,e,p(1,n))}:function(t,e,n){return t[e]=n,t},Bt=M(Function.toString);T(tt.inspectSource)||(tt.inspectSource=function(t){return Bt(t)});var Tt,Et,Gt,Zt,At=tt.inspectSource,Lt=h.WeakMap,Xt=T(Lt)&&/native code/.test(At(Lt)),Yt=et("keys"),Ft={},Nt="Object already initialized",It=h.TypeError,Dt=h.WeakMap;if(Xt||tt.state){var Wt=tt.state||(tt.state=new Dt),Vt=M(Wt.get),Rt=M(Wt.has),qt=M(Wt.set);Tt=function(t,e){if(Rt(Wt,t))throw new It(Nt);return e.facade=t,qt(Wt,t,e),e},Et=function(t){return Vt(Wt,t)||{}},Gt=function(t){return Rt(Wt,t)}}else{var Ut=Yt[Zt="state"]||(Yt[Zt]=ht(Zt));Ft[Ut]=!0,Tt=function(t,e){if(ot(t,Ut))throw new It(Nt);return e.facade=t,zt(t,Ut,e),e},Et=function(t){return ot(t,Ut)?t[Ut]:{}},Gt=function(t){return ot(t,Ut)}}var Ht={set:Tt,get:Et,has:Gt,enforce:function(t){return Gt(t)?Et(t):Tt(t,{})},getterFor:function(t){return function(e){var n;if(!E(e)||(n=Et(e)).type!==t)throw It("Incompatible receiver, "+t+" required");return n}}},Kt=Function.prototype,$t=c&&Object.getOwnPropertyDescriptor,Jt=ot(Kt,"name"),Qt={EXISTS:Jt,PROPER:Jt&&"something"===function(){}.name,CONFIGURABLE:Jt&&(!c||c&&$t(Kt,"name").configurable)},te=o((function(t){var e=Qt.CONFIGURABLE,n=Ht.get,r=Ht.enforce,i=String(String).split("String");(t.exports=function(t,n,o,s){var a,u=!!s&&!!s.unsafe,l=!!s&&!!s.enumerable,c=!!s&&!!s.noTargetGet,f=s&&void 0!==s.name?s.name:n;T(o)&&("Symbol("===String(f).slice(0,7)&&(f="["+String(f).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!ot(o,"name")||e&&o.name!==f)&&zt(o,"name",f),(a=r(o)).source||(a.source=i.join("string"==typeof f?f:""))),t!==h?(u?!c&&t[n]&&(l=!0):delete t[n],l?t[n]=o:zt(t,n,o)):l?t[n]=o:J(n,o)})(Function.prototype,"toString",(function(){return T(this)&&n(this).source||At(this)}))})),ee=Math.ceil,ne=Math.floor,re=function(t){var e=+t;return e!=e||0===e?0:(e>0?ne:ee)(e)},ie=Math.max,oe=Math.min,se=function(t,e){var n=re(t);return n<0?ie(n+e,0):oe(n,e)},ae=Math.min,ue=function(t){return(e=t.length)>0?ae(re(e),9007199254740991):0;var e},he=function(t){return function(e,n,r){var i,o=B(e),s=ue(o),a=se(r,s);if(t&&n!=n){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((t||a in o)&&o[a]===n)return t||a||0;return!t&&-1}},le={includes:he(!0),indexOf:he(!1)}.indexOf,ce=M([].push),fe=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),ge={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,r=B(t),i=0,o=[];for(n in r)!ot(Ft,n)&&ot(r,n)&&ce(o,n);for(;e.length>i;)ot(r,n=e[i++])&&(~le(o,n)||ce(o,n));return o}(t,fe)}},de={f:Object.getOwnPropertySymbols},me=M([].concat),ve=Z("Reflect","ownKeys")||function(t){var e=ge.f(St(t)),n=de.f;return n?me(e,n(t)):e},pe=function(t,e){for(var n=ve(e),r=jt.f,i=kt.f,o=0;o<n.length;o++){var s=n[o];ot(t,s)||r(t,s,i(e,s))}},_e=/#|\.prototype\./,ye=function(t,e){var n=we[be(t)];return n==ke||n!=Me&&(T(e)?l(e):!!e)},be=ye.normalize=function(t){return String(t).replace(_e,".").toLowerCase()},we=ye.data={},Me=ye.NATIVE="N",ke=ye.POLYFILL="P",xe=ye,Oe=kt.f,Se=Array.isArray||function(t){return"Array"==O(t)},Pe={};Pe[dt("toStringTag")]="z";var Ce,je="[object z]"===String(Pe),ze=dt("toStringTag"),Be=h.Object,Te="Arguments"==O(function(){return arguments}()),Ee=je?O:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Be(t),ze))?n:Te?O(e):"Object"==(r=O(e))&&T(e.callee)?"Arguments":r},Ge=function(){},Ze=[],Ae=Z("Reflect","construct"),Le=/^\s*(?:class|function)\b/,Xe=M(Le.exec),Ye=!Le.exec(Ge),Fe=function(t){if(!T(t))return!1;try{return Ae(Ge,Ze,t),!0}catch(t){return!1}},Ne=!Ae||l((function(){var t;return Fe(Fe.call)||!Fe(Object)||!Fe((function(){t=!0}))||t}))?function(t){if(!T(t))return!1;switch(Ee(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return Ye||!!Xe(Le,At(t))}:Fe,Ie=dt("species"),De=h.Array,We=function(t,e){return new(function(t){var e;return Se(t)&&(e=t.constructor,(Ne(e)&&(e===De||Se(e.prototype))||E(e)&&null===(e=e[Ie]))&&(e=void 0)),void 0===e?De:e}(t))(0===e?0:e)},Ve=function(t,e,n){var r=_t(e);r in t?jt.f(t,r,p(0,n)):t[r]=n},Re=dt("species"),qe=(Ce="splice",I>=51||!l((function(){var t=[];return(t.constructor={})[Re]=function(){return{foo:1}},1!==t[Ce](Boolean).foo}))),Ue=h.TypeError,He=Math.max,Ke=Math.min,$e=9007199254740991,Je="Maximum allowed length exceeded";function Qe(t,e){return new google.maps.Point(~~(.5+(i=t.lng(),(1+i/180)*(2<<e+6))),~~(.5+(n=t.lat(),r=Math.sin(n*Math.PI/180),(1-.5/Math.PI*Math.log((1+r)/(1-r)))*(2<<e+6))));var n,r,i}!function(t,e){var n,r,i,o,s,a=t.target,u=t.global,l=t.stat;if(n=u?h:l?h[a]||J(a,{}):(h[a]||{}).prototype)for(r in e){if(o=e[r],i=t.noTargetGet?(s=Oe(n,r))&&s.value:n[r],!xe(u?r:a+(l?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;pe(o,i)}(t.sham||i&&i.sham)&&zt(o,"sham",!0),te(n,r,o,t)}}({target:"Array",proto:!0,forced:!qe},{splice:function(t,e){var n,r,i,o,s,a,u=rt(this),h=ue(u),l=se(t,h),c=arguments.length;if(0===c?n=r=0:1===c?(n=0,r=h-l):(n=c-2,r=Ke(He(re(e),0),h-l)),h+n-r>$e)throw Ue(Je);for(i=We(u,r),o=0;o<r;o++)(s=l+o)in u&&Ve(i,o,u[s]);if(i.length=r,n<r){for(o=l;o<h-r;o++)a=o+n,(s=o+r)in u?u[a]=u[s]:delete u[a];for(o=h;o>h-r+n;o--)delete u[o-1]}else if(n>r)for(o=h-r;o>l;o--)a=o+n-1,(s=o+r-1)in u?u[a]=u[s]:delete u[a];for(o=0;o<n;o++)u[o+l]=arguments[o+2];return u.length=h-r+n,i}});var tn=function(){function t(n,r){e(this,t),this.z=r,this.minX=Math.min(n[0].x,n[1].x),this.maxX=Math.max(n[0].x,n[1].x),this.minY=Math.min(n[0].y,n[1].y),this.maxY=Math.max(n[0].y,n[1].y)}return r(t,[{key:"equals",value:function(t){return this.maxX===t.maxX&&this.maxY===t.maxY&&this.minX===t.minX&&this.minY===t.minY}},{key:"containsPoint",value:function(t){return this.minX<=t.x&&this.maxX>=t.x&&this.minY<=t.y&&this.maxY>=t.y}}]),t}(),en=function(){function t(n,r){var i=this,o=r.maxZoom,s=void 0===o?19:o,a=r.trackMarkers,u=r.shown,h=void 0===u||u,l=r.borderPadding,c=void 0===l?100:l;e(this,t),this._tileSize=1024,this._map=n,this._mapZoom=n.getZoom(),this._maxZoom=s,this._trackMarkers=a,this._swPadding=new google.maps.Size(-c,c),this._nePadding=new google.maps.Size(c,-c),this._gridWidth={},this._grid=[],this._grid[this._maxZoom]=[],this._numMarkers={},this._numMarkers[this._maxZoom]=0,this.shownMarkers=0,this.shown=h,google.maps.event.addListenerOnce(n,"idle",(function(){i._initialize()}))}return r(t,[{key:"_initialize",value:function(){var t=this._map.mapTypes;for(var e in t)e in t&&t.get(e)&&"number"===t.get(e).maxZoom&&this._map.mapTypes.get(e).maxZoom;google.maps.event.addListener(this._map,"dragend",this._onMapMoveEnd.bind(this)),google.maps.event.addListener(this._map,"idle",this._onMapMoveEnd.bind(this)),google.maps.event.addListener(this._map,"zoom_changed",this._onMapMoveEnd.bind(this)),this.resetManager(),this._shownBounds=this._getMapGridBounds(),google.maps.event.trigger(this,"loaded")}},{key:"_removeOverlay",value:function(t){t.setMap(null),this.shownMarkers--}},{key:"_addOverlay",value:function(t){this.shown&&(t.setMap(this._map),this.shownMarkers++)}},{key:"resetManager",value:function(){for(var t=256,e=0;e<=this._maxZoom;++e)this._grid[e]=[],this._numMarkers[e]=0,this._gridWidth[e]=Math.ceil(t/this._tileSize),t<<=1}},{key:"clearMarkers",value:function(){this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.resetManager()}},{key:"_getTilePoint",value:function(t,e,n){var r=Qe(t,e);return new google.maps.Point(Math.floor((r.x+n.width)/this._tileSize),Math.floor((r.y+n.height)/this._tileSize))}},{key:"_addMarkerBatch",value:function(t,e,n){var r=this,i=t.getPosition();t.set("__minZoom",e),this._trackMarkers&&google.maps.event.addListener(t,"changed",(function(t,e,n){r._onMarkerMoved(t,e,n)}));for(var o=this._getTilePoint(i,n,new google.maps.Size(0,0)),s=n;s>=e;s--){this._getGridCellCreate(o.x,o.y,s).push(t),o.x=o.x>>1,o.y=o.y>>1}}},{key:"_isGridPointVisible",value:function(t){var e=this._shownBounds.minY<=t.y&&t.y<=this._shownBounds.maxY,n=this._shownBounds.minX,r=n<=t.x&&t.x<=this._shownBounds.maxX;if(!r&&n<0){var i=this._gridWidth[this._shownBounds.z];r=n+i<=t.x&&t.x<=i-1}return e&&r}},{key:"_onMarkerMoved",value:function(t,e,n){for(var r=this._maxZoom,i=!1,o=this._getTilePoint(e,r,new google.maps.Size(0,0)),s=this._getTilePoint(n,r,new google.maps.Size(0,0));r>=0&&(o.x!==s.x||o.y!==s.y);){var a=this._getGridCellNoCreate(o.x,o.y,r);a&&this._removeMarkerFromCell(a,t)&&this._getGridCellCreate(s.x,s.y,r).push(t),r===this._mapZoom&&(this._isGridPointVisible(o)?this._isGridPointVisible(s)||(this._removeOverlay(t),i=!0):this._isGridPointVisible(s)&&(this._addOverlay(t),i=!0)),o.x=o.x>>1,o.y=o.y>>1,s.x=s.x>>1,s.y=s.y>>1,--r}i&&this._notifyListeners()}},{key:"removeMarker",value:function(t){for(var e=this._maxZoom,n=!1,r=t.getPosition(),i=this._getTilePoint(r,e,new google.maps.Size(0,0));e>=0;){var o=this._getGridCellNoCreate(i.x,i.y,e);o&&this._removeMarkerFromCell(o,t),e===this._mapZoom&&this._isGridPointVisible(i)&&(this._removeOverlay(t),n=!0),i.x=i.x>>1,i.y=i.y>>1,--e}n&&this._notifyListeners(),this._numMarkers[t.get("__minZoom")]--}},{key:"addMarkers",value:function(t,e,n){n=this._getOptmaxZoom(n);for(var r=t.length-1;r>=0;r--)this._addMarkerBatch(t[r],e,n);this._numMarkers[e]+=t.length}},{key:"_getOptmaxZoom",value:function(t){return t||this._maxZoom}},{key:"getMarkerCount",value:function(t){for(var e=0,n=0;n<=t;n++)e+=this._numMarkers[n];return e}},{key:"getMarker",value:function(t,e,n){var r=new google.maps.LatLng(t,e),i=this._getTilePoint(r,n,new google.maps.Size(0,0)),o=new google.maps.Marker({position:r}),s=this._getGridCellNoCreate(i.x,i.y,n);if(void 0!==s)for(var a=0;a<s.length;a++)t===s[a].getPosition().lat()&&e===s[a].getPosition().lng()&&(o=s[a]);return o}},{key:"addMarker",value:function(t,e,n){n=this._getOptmaxZoom(n),this._addMarkerBatch(t,e,n);var r=this._getTilePoint(t.getPosition(),this._mapZoom,new google.maps.Size(0,0));this._isGridPointVisible(r)&&e<=this._shownBounds.z&&this._shownBounds.z<=n&&(this._addOverlay(t),this._notifyListeners()),this._numMarkers[e]++}},{key:"_getGridCellCreate",value:function(t,e,n){return t<0&&(t+=this._gridWidth[n]),this._grid[n]||(this._grid[n]=[]),this._grid[n][t]||(this._grid[n][t]=[]),this._grid[n][t][e]||(this._grid[n][t][e]=[]),this._grid[n][t][e]}},{key:"_getGridCellNoCreate",value:function(t,e,n){return t<0&&(t+=this._gridWidth[n]),this._grid[n]&&this._grid[n][t]&&this._grid[n][t][e]?this._grid[n][t][e]:null}},{key:"_getGridBounds",value:function(t,e,n,r){e=Math.min(e,this._maxZoom);var i=t.getSouthWest(),o=t.getNorthEast(),s=this._getTilePoint(i,e,n),a=this._getTilePoint(o,e,r),u=this._gridWidth[e];(o.lng()<i.lng()||a.x<s.x)&&(s.x-=u),a.x-s.x+1>=u&&(s.x=0,a.x=u-1);var h=new tn([s,a],e);return h.z=e,h}},{key:"_getMapGridBounds",value:function(){return this._getGridBounds(this._map.getBounds(),this._mapZoom,this._swPadding,this._nePadding)}},{key:"_onMapMoveEnd",value:function(){window.setTimeout(this._updateMarkers.bind(this),0)}},{key:"visible",value:function(){return!!this.shown}},{key:"isHidden",value:function(){return!this.shown}},{key:"show",value:function(){this.shown=!0,this.refresh()}},{key:"hide",value:function(){this.shown=!1,this.refresh()}},{key:"toggle",value:function(){this.shown=!this.shown,this.refresh()}},{key:"refresh",value:function(){this.shownMarkers>0&&this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.show&&this._processAll(this._shownBounds,this._addOverlay.bind(this)),this._notifyListeners()}},{key:"_updateMarkers",value:function(){this._mapZoom=this._map.getZoom();var t=this._getMapGridBounds();t.equals(this._shownBounds)&&t.z===this._shownBounds.z||(t.z!==this._shownBounds.z?(this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.show&&this._processAll(t,this._addOverlay.bind(this))):(this._rectangleDiff(this._shownBounds,t,this._removeCellMarkers.bind(this)),this.show&&this._rectangleDiff(t,this._shownBounds,this._addCellMarkers.bind(this))),this._shownBounds=t,this._notifyListeners())}},{key:"_notifyListeners",value:function(){google.maps.event.trigger(this,"changed",this._shownBounds,this.shownMarkers)}},{key:"_processAll",value:function(t,e){for(var n=t.minX;n<=t.maxX;n++)for(var r=t.minY;r<=t.maxY;r++)this._processCellMarkers(n,r,t.z,e)}},{key:"_processCellMarkers",value:function(t,e,n,r){var i=this._getGridCellNoCreate(t,e,n);if(i)for(var o=i.length-1;o>=0;o--)r(i[o])}},{key:"_removeCellMarkers",value:function(t,e,n){this._processCellMarkers(t,e,n,this._removeOverlay.bind(this))}},{key:"_addCellMarkers",value:function(t,e,n){this._processCellMarkers(t,e,n,this._addOverlay.bind(this))}},{key:"_rectangleDiff",value:function(t,e,n){this._rectangleDiffCoords(t,e,(function(e,r){n(e,r,t.z)}))}},{key:"_rectangleDiffCoords",value:function(t,e,n){var r,i,o=t.minX,s=t.minY,a=t.maxX,u=t.maxY,h=e.minX,l=e.minY,c=e.maxX,f=e.maxY;for(r=o;r<=a;r++){for(i=s;i<=u&&i<l;i++)n(r,i);for(i=Math.max(f+1,s);i<=u;i++)n(r,i)}for(i=Math.max(s,l);i<=Math.min(u,f);i++){for(r=Math.min(a+1,h)-1;r>=o;r--)n(r,i);for(r=Math.max(o,c+1);r<=a;r++)n(r,i)}}},{key:"_removeMarkerFromCell",value:function(t,e){for(var n=0,r=0;r<t.length;++r)t[r]===e&&(t.splice(r--,1),n++);return n}}]),t}();return t.MarkerManager=en,Object.defineProperty(t,"__esModule",{value:!0}),t}({});
//# sourceMappingURL=index.dev.js.map

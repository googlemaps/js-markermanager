!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(((t="undefined"!=typeof globalThis?globalThis:t||self).google=t.google||{},t.google.maps=t.google.maps||{},t.google.maps.plugins=t.google.maps.plugins||{},t.google.maps.plugins.markermanager={}))}(this,(function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){return t&&t.Math==Math&&t},s=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof i&&i)||function(){return this}()||Function("return this")(),a={},u=function(t){try{return!!t()}catch(t){return!0}},h=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l=!u((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),c=l,f=Function.prototype.call,g=c?f.bind(f):function(){return f.apply(f,arguments)},d={},m={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,v=p&&!m.call({1:2},1);d.f=v?function(t){var e=p(this,t);return!!e&&e.enumerable}:m;var y,_,b=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},w=l,M=Function.prototype,k=M.bind,x=M.call,O=w&&k.bind(x,x),P=w?function(t){return t&&O(t)}:function(t){return t&&function(){return x.apply(t,arguments)}},S=P,C=S({}.toString),j=S("".slice),z=function(t){return j(C(t),8,-1)},T=u,B=z,E=Object,G=P("".split),Z=T((function(){return!E("z").propertyIsEnumerable(0)}))?function(t){return"String"==B(t)?G(t,""):E(t)}:E,L=TypeError,A=function(t){if(null==t)throw L("Can't call method on "+t);return t},X=Z,Y=A,F=function(t){return X(Y(t))},N=function(t){return"function"==typeof t},I=N,D=function(t){return"object"==typeof t?null!==t:I(t)},W=s,V=N,R=function(t){return V(t)?t:void 0},q=function(t,e){return arguments.length<2?R(W[t]):W[t]&&W[t][e]},U=P({}.isPrototypeOf),H=s,K=q("navigator","userAgent")||"",$=H.process,J=H.Deno,Q=$&&$.versions||J&&J.version,tt=Q&&Q.v8;tt&&(_=(y=tt.split("."))[0]>0&&y[0]<4?1:+(y[0]+y[1])),!_&&K&&(!(y=K.match(/Edge\/(\d+)/))||y[1]>=74)&&(y=K.match(/Chrome\/(\d+)/))&&(_=+y[1]);var et=_,nt=et,rt=u,it=!!Object.getOwnPropertySymbols&&!rt((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&nt&&nt<41})),ot=it&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,st=q,at=N,ut=U,ht=Object,lt=ot?function(t){return"symbol"==typeof t}:function(t){var e=st("Symbol");return at(e)&&ut(e.prototype,ht(t))},ct=String,ft=function(t){try{return ct(t)}catch(t){return"Object"}},gt=N,dt=ft,mt=TypeError,pt=function(t){if(gt(t))return t;throw mt(dt(t)+" is not a function")},vt=g,yt=N,_t=D,bt=TypeError,wt={exports:{}},Mt=s,kt=Object.defineProperty,xt=function(t,e){try{kt(Mt,t,{value:e,configurable:!0,writable:!0})}catch(n){Mt[t]=e}return e},Ot=xt,Pt="__core-js_shared__",St=s[Pt]||Ot(Pt,{}),Ct=St;(wt.exports=function(t,e){return Ct[t]||(Ct[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.23.3",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE",source:"https://github.com/zloirock/core-js"});var jt=A,zt=Object,Tt=function(t){return zt(jt(t))},Bt=Tt,Et=P({}.hasOwnProperty),Gt=Object.hasOwn||function(t,e){return Et(Bt(t),e)},Zt=P,Lt=0,At=Math.random(),Xt=Zt(1..toString),Yt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Xt(++Lt+At,36)},Ft=s,Nt=wt.exports,It=Gt,Dt=Yt,Wt=it,Vt=ot,Rt=Nt("wks"),qt=Ft.Symbol,Ut=qt&&qt.for,Ht=Vt?qt:qt&&qt.withoutSetter||Dt,Kt=function(t){if(!It(Rt,t)||!Wt&&"string"!=typeof Rt[t]){var e="Symbol."+t;Wt&&It(qt,t)?Rt[t]=qt[t]:Rt[t]=Vt&&Ut?Ut(e):Ht(e)}return Rt[t]},$t=g,Jt=D,Qt=lt,te=function(t,e){var n=t[e];return null==n?void 0:pt(n)},ee=function(t,e){var n,r;if("string"===e&&yt(n=t.toString)&&!_t(r=vt(n,t)))return r;if(yt(n=t.valueOf)&&!_t(r=vt(n,t)))return r;if("string"!==e&&yt(n=t.toString)&&!_t(r=vt(n,t)))return r;throw bt("Can't convert object to primitive value")},ne=TypeError,re=Kt("toPrimitive"),ie=function(t,e){if(!Jt(t)||Qt(t))return t;var n,r=te(t,re);if(r){if(void 0===e&&(e="default"),n=$t(r,t,e),!Jt(n)||Qt(n))return n;throw ne("Can't convert object to primitive value")}return void 0===e&&(e="number"),ee(t,e)},oe=lt,se=function(t){var e=ie(t,"string");return oe(e)?e:e+""},ae=D,ue=s.document,he=ae(ue)&&ae(ue.createElement),le=function(t){return he?ue.createElement(t):{}},ce=!h&&!u((function(){return 7!=Object.defineProperty(le("div"),"a",{get:function(){return 7}}).a})),fe=h,ge=g,de=d,me=b,pe=F,ve=se,ye=Gt,_e=ce,be=Object.getOwnPropertyDescriptor;a.f=fe?be:function(t,e){if(t=pe(t),e=ve(e),_e)try{return be(t,e)}catch(t){}if(ye(t,e))return me(!ge(de.f,t,e),t[e])};var we={},Me=h&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),ke=D,xe=String,Oe=TypeError,Pe=function(t){if(ke(t))return t;throw Oe(xe(t)+" is not an object")},Se=h,Ce=ce,je=Me,ze=Pe,Te=se,Be=TypeError,Ee=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,Ze="enumerable",Le="configurable",Ae="writable";we.f=Se?je?function(t,e,n){if(ze(t),e=Te(e),ze(n),"function"==typeof t&&"prototype"===e&&"value"in n&&Ae in n&&!n.writable){var r=Ge(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:Le in n?n.configurable:r.configurable,enumerable:Ze in n?n.enumerable:r.enumerable,writable:!1})}return Ee(t,e,n)}:Ee:function(t,e,n){if(ze(t),e=Te(e),ze(n),Ce)try{return Ee(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Be("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Xe=we,Ye=b,Fe=h?function(t,e,n){return Xe.f(t,e,Ye(1,n))}:function(t,e,n){return t[e]=n,t},Ne={exports:{}},Ie=h,De=Gt,We=Function.prototype,Ve=Ie&&Object.getOwnPropertyDescriptor,Re=De(We,"name"),qe={EXISTS:Re,PROPER:Re&&"something"===function(){}.name,CONFIGURABLE:Re&&(!Ie||Ie&&Ve(We,"name").configurable)},Ue=N,He=St,Ke=P(Function.toString);Ue(He.inspectSource)||(He.inspectSource=function(t){return Ke(t)});var $e,Je,Qe,tn=He.inspectSource,en=N,nn=tn,rn=s.WeakMap,on=en(rn)&&/native code/.test(nn(rn)),sn=wt.exports,an=Yt,un=sn("keys"),hn={},ln=on,cn=s,fn=P,gn=D,dn=Fe,mn=Gt,pn=St,vn=function(t){return un[t]||(un[t]=an(t))},yn=hn,_n="Object already initialized",bn=cn.TypeError,wn=cn.WeakMap;if(ln||pn.state){var Mn=pn.state||(pn.state=new wn),kn=fn(Mn.get),xn=fn(Mn.has),On=fn(Mn.set);$e=function(t,e){if(xn(Mn,t))throw new bn(_n);return e.facade=t,On(Mn,t,e),e},Je=function(t){return kn(Mn,t)||{}},Qe=function(t){return xn(Mn,t)}}else{var Pn=vn("state");yn[Pn]=!0,$e=function(t,e){if(mn(t,Pn))throw new bn(_n);return e.facade=t,dn(t,Pn,e),e},Je=function(t){return mn(t,Pn)?t[Pn]:{}},Qe=function(t){return mn(t,Pn)}}var Sn={set:$e,get:Je,has:Qe,enforce:function(t){return Qe(t)?Je(t):$e(t,{})},getterFor:function(t){return function(e){var n;if(!gn(e)||(n=Je(e)).type!==t)throw bn("Incompatible receiver, "+t+" required");return n}}},Cn=u,jn=N,zn=Gt,Tn=h,Bn=qe.CONFIGURABLE,En=tn,Gn=Sn.enforce,Zn=Sn.get,Ln=Object.defineProperty,An=Tn&&!Cn((function(){return 8!==Ln((function(){}),"length",{value:8}).length})),Xn=String(String).split("String"),Yn=Ne.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!zn(t,"name")||Bn&&t.name!==e)&&(Tn?Ln(t,"name",{value:e,configurable:!0}):t.name=e),An&&n&&zn(n,"arity")&&t.length!==n.arity&&Ln(t,"length",{value:n.arity});try{n&&zn(n,"constructor")&&n.constructor?Tn&&Ln(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=Gn(t);return zn(r,"source")||(r.source=Xn.join("string"==typeof e?e:"")),t};Function.prototype.toString=Yn((function(){return jn(this)&&Zn(this).source||En(this)}),"toString");var Fn=N,Nn=we,In=Ne.exports,Dn=xt,Wn={},Vn=Math.ceil,Rn=Math.floor,qn=Math.trunc||function(t){var e=+t;return(e>0?Rn:Vn)(e)},Un=function(t){var e=+t;return e!=e||0===e?0:qn(e)},Hn=Un,Kn=Math.max,$n=Math.min,Jn=function(t,e){var n=Hn(t);return n<0?Kn(n+e,0):$n(n,e)},Qn=Un,tr=Math.min,er=function(t){return t>0?tr(Qn(t),9007199254740991):0},nr=function(t){return er(t.length)},rr=F,ir=Jn,or=nr,sr=function(t){return function(e,n,r){var i,o=rr(e),s=or(o),a=ir(r,s);if(t&&n!=n){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((t||a in o)&&o[a]===n)return t||a||0;return!t&&-1}},ar={includes:sr(!0),indexOf:sr(!1)},ur=Gt,hr=F,lr=ar.indexOf,cr=hn,fr=P([].push),gr=function(t,e){var n,r=hr(t),i=0,o=[];for(n in r)!ur(cr,n)&&ur(r,n)&&fr(o,n);for(;e.length>i;)ur(r,n=e[i++])&&(~lr(o,n)||fr(o,n));return o},dr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Wn.f=Object.getOwnPropertyNames||function(t){return gr(t,dr)};var mr={};mr.f=Object.getOwnPropertySymbols;var pr=q,vr=Wn,yr=mr,_r=Pe,br=P([].concat),wr=pr("Reflect","ownKeys")||function(t){var e=vr.f(_r(t)),n=yr.f;return n?br(e,n(t)):e},Mr=Gt,kr=wr,xr=a,Or=we,Pr=u,Sr=N,Cr=/#|\.prototype\./,jr=function(t,e){var n=Tr[zr(t)];return n==Er||n!=Br&&(Sr(e)?Pr(e):!!e)},zr=jr.normalize=function(t){return String(t).replace(Cr,".").toLowerCase()},Tr=jr.data={},Br=jr.NATIVE="N",Er=jr.POLYFILL="P",Gr=jr,Zr=s,Lr=a.f,Ar=Fe,Xr=function(t,e,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:e;if(Fn(n)&&In(n,o,r),r.global)i?t[e]=n:Dn(e,n);else{try{r.unsafe?t[e]&&(i=!0):delete t[e]}catch(t){}i?t[e]=n:Nn.f(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t},Yr=xt,Fr=function(t,e,n){for(var r=kr(e),i=Or.f,o=xr.f,s=0;s<r.length;s++){var a=r[s];Mr(t,a)||n&&Mr(n,a)||i(t,a,o(e,a))}},Nr=Gr,Ir=TypeError,Dr=z,Wr=Array.isArray||function(t){return"Array"==Dr(t)},Vr={};Vr[Kt("toStringTag")]="z";var Rr="[object z]"===String(Vr),qr=N,Ur=z,Hr=Kt("toStringTag"),Kr=Object,$r="Arguments"==Ur(function(){return arguments}()),Jr=P,Qr=u,ti=N,ei=Rr?Ur:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Kr(t),Hr))?n:$r?Ur(e):"Object"==(r=Ur(e))&&qr(e.callee)?"Arguments":r},ni=tn,ri=function(){},ii=[],oi=q("Reflect","construct"),si=/^\s*(?:class|function)\b/,ai=Jr(si.exec),ui=!si.exec(ri),hi=function(t){if(!ti(t))return!1;try{return oi(ri,ii,t),!0}catch(t){return!1}},li=function(t){if(!ti(t))return!1;switch(ei(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return ui||!!ai(si,ni(t))}catch(t){return!0}};li.sham=!0;var ci=!oi||Qr((function(){var t;return hi(hi.call)||!hi(Object)||!hi((function(){t=!0}))||t}))?li:hi,fi=Wr,gi=ci,di=D,mi=Kt("species"),pi=Array,vi=function(t){var e;return fi(t)&&(e=t.constructor,(gi(e)&&(e===pi||fi(e.prototype))||di(e)&&null===(e=e[mi]))&&(e=void 0)),void 0===e?pi:e},yi=se,_i=we,bi=b,wi=ft,Mi=TypeError,ki=u,xi=et,Oi=Kt("species"),Pi=function(t,e){var n,r,i,o,s,a=t.target,u=t.global,h=t.stat;if(n=u?Zr:h?Zr[a]||Yr(a,{}):(Zr[a]||{}).prototype)for(r in e){if(o=e[r],i=t.dontCallGetSet?(s=Lr(n,r))&&s.value:n[r],!Nr(u?r:a+(h?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;Fr(o,i)}(t.sham||i&&i.sham)&&Ar(o,"sham",!0),Xr(n,r,o,t)}},Si=Tt,Ci=Jn,ji=Un,zi=nr,Ti=function(t){if(t>9007199254740991)throw Ir("Maximum allowed index exceeded");return t},Bi=function(t,e){return new(vi(t))(0===e?0:e)},Ei=function(t,e,n){var r=yi(e);r in t?_i.f(t,r,bi(0,n)):t[r]=n},Gi=function(t,e){if(!delete t[e])throw Mi("Cannot delete property "+wi(e)+" of "+wi(t))},Zi=function(t){return xi>=51||!ki((function(){var e=[];return(e.constructor={})[Oi]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}("splice"),Li=Math.max,Ai=Math.min;function Xi(t,e){return new google.maps.Point(~~(.5+(i=t.lng(),(1+i/180)*(2<<e+6))),~~(.5+(n=t.lat(),r=Math.sin(n*Math.PI/180),(1-.5/Math.PI*Math.log((1+r)/(1-r)))*(2<<e+6))));var n,r,i}Pi({target:"Array",proto:!0,forced:!Zi},{splice:function(t,e){var n,r,i,o,s,a,u=Si(this),h=zi(u),l=Ci(t,h),c=arguments.length;for(0===c?n=r=0:1===c?(n=0,r=h-l):(n=c-2,r=Ai(Li(ji(e),0),h-l)),Ti(h+n-r),i=Bi(u,r),o=0;o<r;o++)(s=l+o)in u&&Ei(i,o,u[s]);if(i.length=r,n<r){for(o=l;o<h-r;o++)a=o+n,(s=o+r)in u?u[a]=u[s]:Gi(u,a);for(o=h;o>h-r+n;o--)Gi(u,o-1)}else if(n>r)for(o=h-r;o>l;o--)a=o+n-1,(s=o+r-1)in u?u[a]=u[s]:Gi(u,a);for(o=0;o<n;o++)u[o+l]=arguments[o+2];return u.length=h-r+n,i}});var Yi=function(){function t(n,r){e(this,t),this.z=r,this.minX=Math.min(n[0].x,n[1].x),this.maxX=Math.max(n[0].x,n[1].x),this.minY=Math.min(n[0].y,n[1].y),this.maxY=Math.max(n[0].y,n[1].y)}return r(t,[{key:"equals",value:function(t){return this.maxX===t.maxX&&this.maxY===t.maxY&&this.minX===t.minX&&this.minY===t.minY}},{key:"containsPoint",value:function(t){return this.minX<=t.x&&this.maxX>=t.x&&this.minY<=t.y&&this.maxY>=t.y}}]),t}(),Fi=function(){function t(n,r){var i=this,o=r.maxZoom,s=void 0===o?19:o,a=r.trackMarkers,u=r.shown,h=void 0===u||u,l=r.borderPadding,c=void 0===l?100:l;e(this,t),this._tileSize=1024,this._map=n,this._mapZoom=n.getZoom(),this._maxZoom=s,this._trackMarkers=a,this._swPadding=new google.maps.Size(-c,c),this._nePadding=new google.maps.Size(c,-c),this._gridWidth={},this._grid=[],this._grid[this._maxZoom]=[],this._numMarkers={},this._numMarkers[this._maxZoom]=0,this.shownMarkers=0,this.shown=h,google.maps.event.addListenerOnce(n,"idle",(function(){i._initialize()}))}return r(t,[{key:"_initialize",value:function(){var t=this._map.mapTypes;for(var e in t)e in t&&t.get(e)&&"number"===t.get(e).maxZoom&&this._map.mapTypes.get(e).maxZoom;google.maps.event.addListener(this._map,"dragend",this._onMapMoveEnd.bind(this)),google.maps.event.addListener(this._map,"idle",this._onMapMoveEnd.bind(this)),google.maps.event.addListener(this._map,"zoom_changed",this._onMapMoveEnd.bind(this)),this.resetManager(),this._shownBounds=this._getMapGridBounds(),google.maps.event.trigger(this,"loaded")}},{key:"_removeOverlay",value:function(t){t.setMap(null),this.shownMarkers--}},{key:"_addOverlay",value:function(t){this.shown&&(t.setMap(this._map),this.shownMarkers++)}},{key:"resetManager",value:function(){for(var t=256,e=0;e<=this._maxZoom;++e)this._grid[e]=[],this._numMarkers[e]=0,this._gridWidth[e]=Math.ceil(t/this._tileSize),t<<=1}},{key:"clearMarkers",value:function(){this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.resetManager()}},{key:"_getTilePoint",value:function(t,e,n){var r=Xi(t,e);return new google.maps.Point(Math.floor((r.x+n.width)/this._tileSize),Math.floor((r.y+n.height)/this._tileSize))}},{key:"_addMarkerBatch",value:function(t,e,n){var r=this,i=t.getPosition();t.set("__minZoom",e),this._trackMarkers&&google.maps.event.addListener(t,"changed",(function(t,e,n){r._onMarkerMoved(t,e,n)}));for(var o=this._getTilePoint(i,n,new google.maps.Size(0,0)),s=n;s>=e;s--){this._getGridCellCreate(o.x,o.y,s).push(t),o.x=o.x>>1,o.y=o.y>>1}}},{key:"_isGridPointVisible",value:function(t){var e=this._shownBounds.minY<=t.y&&t.y<=this._shownBounds.maxY,n=this._shownBounds.minX,r=n<=t.x&&t.x<=this._shownBounds.maxX;if(!r&&n<0){var i=this._gridWidth[this._shownBounds.z];r=n+i<=t.x&&t.x<=i-1}return e&&r}},{key:"_onMarkerMoved",value:function(t,e,n){for(var r=this._maxZoom,i=!1,o=this._getTilePoint(e,r,new google.maps.Size(0,0)),s=this._getTilePoint(n,r,new google.maps.Size(0,0));r>=0&&(o.x!==s.x||o.y!==s.y);){var a=this._getGridCellNoCreate(o.x,o.y,r);a&&this._removeMarkerFromCell(a,t)&&this._getGridCellCreate(s.x,s.y,r).push(t),r===this._mapZoom&&(this._isGridPointVisible(o)?this._isGridPointVisible(s)||(this._removeOverlay(t),i=!0):this._isGridPointVisible(s)&&(this._addOverlay(t),i=!0)),o.x=o.x>>1,o.y=o.y>>1,s.x=s.x>>1,s.y=s.y>>1,--r}i&&this._notifyListeners()}},{key:"removeMarker",value:function(t){for(var e=this._maxZoom,n=!1,r=t.getPosition(),i=this._getTilePoint(r,e,new google.maps.Size(0,0));e>=0;){var o=this._getGridCellNoCreate(i.x,i.y,e);o&&this._removeMarkerFromCell(o,t),e===this._mapZoom&&this._isGridPointVisible(i)&&(this._removeOverlay(t),n=!0),i.x=i.x>>1,i.y=i.y>>1,--e}n&&this._notifyListeners(),this._numMarkers[t.get("__minZoom")]--}},{key:"addMarkers",value:function(t,e,n){n=this._getOptmaxZoom(n);for(var r=t.length-1;r>=0;r--)this._addMarkerBatch(t[r],e,n);this._numMarkers[e]+=t.length}},{key:"_getOptmaxZoom",value:function(t){return t||this._maxZoom}},{key:"getMarkerCount",value:function(t){for(var e=0,n=0;n<=t;n++)e+=this._numMarkers[n];return e}},{key:"getMarker",value:function(t,e,n){var r=new google.maps.LatLng(t,e),i=this._getTilePoint(r,n,new google.maps.Size(0,0)),o=new google.maps.Marker({position:r}),s=this._getGridCellNoCreate(i.x,i.y,n);if(void 0!==s)for(var a=0;a<s.length;a++)t===s[a].getPosition().lat()&&e===s[a].getPosition().lng()&&(o=s[a]);return o}},{key:"addMarker",value:function(t,e,n){n=this._getOptmaxZoom(n),this._addMarkerBatch(t,e,n);var r=this._getTilePoint(t.getPosition(),this._mapZoom,new google.maps.Size(0,0));this._isGridPointVisible(r)&&e<=this._shownBounds.z&&this._shownBounds.z<=n&&(this._addOverlay(t),this._notifyListeners()),this._numMarkers[e]++}},{key:"_getGridCellCreate",value:function(t,e,n){return t<0&&(t+=this._gridWidth[n]),this._grid[n]||(this._grid[n]=[]),this._grid[n][t]||(this._grid[n][t]=[]),this._grid[n][t][e]||(this._grid[n][t][e]=[]),this._grid[n][t][e]}},{key:"_getGridCellNoCreate",value:function(t,e,n){return t<0&&(t+=this._gridWidth[n]),this._grid[n]&&this._grid[n][t]&&this._grid[n][t][e]?this._grid[n][t][e]:null}},{key:"_getGridBounds",value:function(t,e,n,r){e=Math.min(e,this._maxZoom);var i=t.getSouthWest(),o=t.getNorthEast(),s=this._getTilePoint(i,e,n),a=this._getTilePoint(o,e,r),u=this._gridWidth[e];(o.lng()<i.lng()||a.x<s.x)&&(s.x-=u),a.x-s.x+1>=u&&(s.x=0,a.x=u-1);var h=new Yi([s,a],e);return h.z=e,h}},{key:"_getMapGridBounds",value:function(){return this._getGridBounds(this._map.getBounds(),this._mapZoom,this._swPadding,this._nePadding)}},{key:"_onMapMoveEnd",value:function(){window.setTimeout(this._updateMarkers.bind(this),0)}},{key:"visible",value:function(){return!!this.shown}},{key:"isHidden",value:function(){return!this.shown}},{key:"show",value:function(){this.shown=!0,this.refresh()}},{key:"hide",value:function(){this.shown=!1,this.refresh()}},{key:"toggle",value:function(){this.shown=!this.shown,this.refresh()}},{key:"refresh",value:function(){this.shownMarkers>0&&this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.show&&this._processAll(this._shownBounds,this._addOverlay.bind(this)),this._notifyListeners()}},{key:"_updateMarkers",value:function(){this._mapZoom=this._map.getZoom();var t=this._getMapGridBounds();t.equals(this._shownBounds)&&t.z===this._shownBounds.z||(t.z!==this._shownBounds.z?(this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.show&&this._processAll(t,this._addOverlay.bind(this))):(this._rectangleDiff(this._shownBounds,t,this._removeCellMarkers.bind(this)),this.show&&this._rectangleDiff(t,this._shownBounds,this._addCellMarkers.bind(this))),this._shownBounds=t,this._notifyListeners())}},{key:"_notifyListeners",value:function(){google.maps.event.trigger(this,"changed",this._shownBounds,this.shownMarkers)}},{key:"_processAll",value:function(t,e){for(var n=t.minX;n<=t.maxX;n++)for(var r=t.minY;r<=t.maxY;r++)this._processCellMarkers(n,r,t.z,e)}},{key:"_processCellMarkers",value:function(t,e,n,r){var i=this._getGridCellNoCreate(t,e,n);if(i)for(var o=i.length-1;o>=0;o--)r(i[o])}},{key:"_removeCellMarkers",value:function(t,e,n){this._processCellMarkers(t,e,n,this._removeOverlay.bind(this))}},{key:"_addCellMarkers",value:function(t,e,n){this._processCellMarkers(t,e,n,this._addOverlay.bind(this))}},{key:"_rectangleDiff",value:function(t,e,n){this._rectangleDiffCoords(t,e,(function(e,r){n(e,r,t.z)}))}},{key:"_rectangleDiffCoords",value:function(t,e,n){var r,i,o=t.minX,s=t.minY,a=t.maxX,u=t.maxY,h=e.minX,l=e.minY,c=e.maxX,f=e.maxY;for(r=o;r<=a;r++){for(i=s;i<=u&&i<l;i++)n(r,i);for(i=Math.max(f+1,s);i<=u;i++)n(r,i)}for(i=Math.max(s,l);i<=Math.min(u,f);i++){for(r=Math.min(a+1,h)-1;r>=o;r--)n(r,i);for(r=Math.max(o,c+1);r<=a;r++)n(r,i)}}},{key:"_removeMarkerFromCell",value:function(t,e){for(var n=0,r=0;r<t.length;++r)t[r]===e&&(t.splice(r--,1),n++);return n}}]),t}();t.MarkerManager=Fi,Object.defineProperty(t,"__esModule",{value:!0})}));

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(((t="undefined"!=typeof globalThis?globalThis:t||self).google=t.google||{},t.google.maps=t.google.maps||{},t.google.maps.plugins=t.google.maps.plugins||{},t.google.maps.plugins.markermanager={}))}(this,(function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){return t&&t.Math==Math&&t},s=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof i&&i)||function(){return this}()||Function("return this")(),a={},u=function(t){try{return!!t()}catch(t){return!0}},h=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l=!u((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),c=l,f=Function.prototype.call,g=c?f.bind(f):function(){return f.apply(f,arguments)},d={},m={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,v=p&&!m.call({1:2},1);d.f=v?function(t){var e=p(this,t);return!!e&&e.enumerable}:m;var y,_,b=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},w=l,k=Function.prototype,M=k.bind,x=k.call,O=w&&M.bind(x,x),P=w?function(t){return t&&O(t)}:function(t){return t&&function(){return x.apply(t,arguments)}},S=P,j=S({}.toString),C=S("".slice),z=function(t){return C(j(t),8,-1)},T=P,B=u,E=z,G=s.Object,Z=T("".split),L=B((function(){return!G("z").propertyIsEnumerable(0)}))?function(t){return"String"==E(t)?Z(t,""):G(t)}:G,A=s.TypeError,X=function(t){if(null==t)throw A("Can't call method on "+t);return t},Y=L,F=X,N=function(t){return Y(F(t))},I=function(t){return"function"==typeof t},D=I,W=function(t){return"object"==typeof t?null!==t:D(t)},V=s,R=I,q=function(t){return R(t)?t:void 0},U=function(t,e){return arguments.length<2?q(V[t]):V[t]&&V[t][e]},H=P({}.isPrototypeOf),K=s,$=U("navigator","userAgent")||"",J=K.process,Q=K.Deno,tt=J&&J.versions||Q&&Q.version,et=tt&&tt.v8;et&&(_=(y=et.split("."))[0]>0&&y[0]<4?1:+(y[0]+y[1])),!_&&$&&(!(y=$.match(/Edge\/(\d+)/))||y[1]>=74)&&(y=$.match(/Chrome\/(\d+)/))&&(_=+y[1]);var nt=_,rt=nt,it=u,ot=!!Object.getOwnPropertySymbols&&!it((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&rt&&rt<41})),st=ot&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,at=U,ut=I,ht=H,lt=st,ct=s.Object,ft=lt?function(t){return"symbol"==typeof t}:function(t){var e=at("Symbol");return ut(e)&&ht(e.prototype,ct(t))},gt=s.String,dt=I,mt=function(t){try{return gt(t)}catch(t){return"Object"}},pt=s.TypeError,vt=function(t){if(dt(t))return t;throw pt(mt(t)+" is not a function")},yt=g,_t=I,bt=W,wt=s.TypeError,kt={exports:{}},Mt=s,xt=Object.defineProperty,Ot=function(t,e){try{xt(Mt,t,{value:e,configurable:!0,writable:!0})}catch(n){Mt[t]=e}return e},Pt=Ot,St="__core-js_shared__",jt=s[St]||Pt(St,{}),Ct=jt;(kt.exports=function(t,e){return Ct[t]||(Ct[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"});var zt=X,Tt=s.Object,Bt=function(t){return Tt(zt(t))},Et=Bt,Gt=P({}.hasOwnProperty),Zt=Object.hasOwn||function(t,e){return Gt(Et(t),e)},Lt=P,At=0,Xt=Math.random(),Yt=Lt(1..toString),Ft=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Yt(++At+Xt,36)},Nt=s,It=kt.exports,Dt=Zt,Wt=Ft,Vt=ot,Rt=st,qt=It("wks"),Ut=Nt.Symbol,Ht=Ut&&Ut.for,Kt=Rt?Ut:Ut&&Ut.withoutSetter||Wt,$t=function(t){if(!Dt(qt,t)||!Vt&&"string"!=typeof qt[t]){var e="Symbol."+t;Vt&&Dt(Ut,t)?qt[t]=Ut[t]:qt[t]=Rt&&Ht?Ht(e):Kt(e)}return qt[t]},Jt=g,Qt=W,te=ft,ee=function(t,e){var n=t[e];return null==n?void 0:vt(n)},ne=function(t,e){var n,r;if("string"===e&&_t(n=t.toString)&&!bt(r=yt(n,t)))return r;if(_t(n=t.valueOf)&&!bt(r=yt(n,t)))return r;if("string"!==e&&_t(n=t.toString)&&!bt(r=yt(n,t)))return r;throw wt("Can't convert object to primitive value")},re=$t,ie=s.TypeError,oe=re("toPrimitive"),se=function(t,e){if(!Qt(t)||te(t))return t;var n,r=ee(t,oe);if(r){if(void 0===e&&(e="default"),n=Jt(r,t,e),!Qt(n)||te(n))return n;throw ie("Can't convert object to primitive value")}return void 0===e&&(e="number"),ne(t,e)},ae=ft,ue=function(t){var e=se(t,"string");return ae(e)?e:e+""},he=W,le=s.document,ce=he(le)&&he(le.createElement),fe=function(t){return ce?le.createElement(t):{}},ge=!h&&!u((function(){return 7!=Object.defineProperty(fe("div"),"a",{get:function(){return 7}}).a})),de=h,me=g,pe=d,ve=b,ye=N,_e=ue,be=Zt,we=ge,ke=Object.getOwnPropertyDescriptor;a.f=de?ke:function(t,e){if(t=ye(t),e=_e(e),we)try{return ke(t,e)}catch(t){}if(be(t,e))return ve(!me(pe.f,t,e),t[e])};var Me={},xe=h&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Oe=s,Pe=W,Se=Oe.String,je=Oe.TypeError,Ce=function(t){if(Pe(t))return t;throw je(Se(t)+" is not an object")},ze=h,Te=ge,Be=xe,Ee=Ce,Ge=ue,Ze=s.TypeError,Le=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,Xe="enumerable",Ye="configurable",Fe="writable";Me.f=ze?Be?function(t,e,n){if(Ee(t),e=Ge(e),Ee(n),"function"==typeof t&&"prototype"===e&&"value"in n&&Fe in n&&!n.writable){var r=Ae(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:Ye in n?n.configurable:r.configurable,enumerable:Xe in n?n.enumerable:r.enumerable,writable:!1})}return Le(t,e,n)}:Le:function(t,e,n){if(Ee(t),e=Ge(e),Ee(n),Te)try{return Le(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Ze("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Ne=Me,Ie=b,De=h?function(t,e,n){return Ne.f(t,e,Ie(1,n))}:function(t,e,n){return t[e]=n,t},We={exports:{}},Ve=h,Re=Zt,qe=Function.prototype,Ue=Ve&&Object.getOwnPropertyDescriptor,He=Re(qe,"name"),Ke={EXISTS:He,PROPER:He&&"something"===function(){}.name,CONFIGURABLE:He&&(!Ve||Ve&&Ue(qe,"name").configurable)},$e=I,Je=jt,Qe=P(Function.toString);$e(Je.inspectSource)||(Je.inspectSource=function(t){return Qe(t)});var tn,en,nn,rn=Je.inspectSource,on=I,sn=rn,an=s.WeakMap,un=on(an)&&/native code/.test(sn(an)),hn=kt.exports,ln=Ft,cn=hn("keys"),fn={},gn=un,dn=s,mn=P,pn=W,vn=De,yn=Zt,_n=jt,bn=function(t){return cn[t]||(cn[t]=ln(t))},wn=fn,kn="Object already initialized",Mn=dn.TypeError,xn=dn.WeakMap;if(gn||_n.state){var On=_n.state||(_n.state=new xn),Pn=mn(On.get),Sn=mn(On.has),jn=mn(On.set);tn=function(t,e){if(Sn(On,t))throw new Mn(kn);return e.facade=t,jn(On,t,e),e},en=function(t){return Pn(On,t)||{}},nn=function(t){return Sn(On,t)}}else{var Cn=bn("state");wn[Cn]=!0,tn=function(t,e){if(yn(t,Cn))throw new Mn(kn);return e.facade=t,vn(t,Cn,e),e},en=function(t){return yn(t,Cn)?t[Cn]:{}},nn=function(t){return yn(t,Cn)}}var zn={set:tn,get:en,has:nn,enforce:function(t){return nn(t)?en(t):tn(t,{})},getterFor:function(t){return function(e){var n;if(!pn(e)||(n=en(e)).type!==t)throw Mn("Incompatible receiver, "+t+" required");return n}}},Tn=u,Bn=I,En=Zt,Gn=h,Zn=Ke.CONFIGURABLE,Ln=rn,An=zn.enforce,Xn=zn.get,Yn=Object.defineProperty,Fn=Gn&&!Tn((function(){return 8!==Yn((function(){}),"length",{value:8}).length})),Nn=String(String).split("String"),In=We.exports=function(t,e,n){if("Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!En(t,"name")||Zn&&t.name!==e)&&Yn(t,"name",{value:e,configurable:!0}),Fn&&n&&En(n,"arity")&&t.length!==n.arity&&Yn(t,"length",{value:n.arity}),n&&En(n,"constructor")&&n.constructor){if(Gn)try{Yn(t,"prototype",{writable:!1})}catch(t){}}else t.prototype=void 0;var r=An(t);return En(r,"source")||(r.source=Nn.join("string"==typeof e?e:"")),t};Function.prototype.toString=In((function(){return Bn(this)&&Xn(this).source||Ln(this)}),"toString");var Dn=s,Wn=I,Vn=De,Rn=We.exports,qn=Ot,Un={},Hn=Math.ceil,Kn=Math.floor,$n=function(t){var e=+t;return e!=e||0===e?0:(e>0?Kn:Hn)(e)},Jn=$n,Qn=Math.max,tr=Math.min,er=function(t,e){var n=Jn(t);return n<0?Qn(n+e,0):tr(n,e)},nr=$n,rr=Math.min,ir=function(t){return t>0?rr(nr(t),9007199254740991):0},or=function(t){return ir(t.length)},sr=N,ar=er,ur=or,hr=function(t){return function(e,n,r){var i,o=sr(e),s=ur(o),a=ar(r,s);if(t&&n!=n){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((t||a in o)&&o[a]===n)return t||a||0;return!t&&-1}},lr={includes:hr(!0),indexOf:hr(!1)},cr=Zt,fr=N,gr=lr.indexOf,dr=fn,mr=P([].push),pr=function(t,e){var n,r=fr(t),i=0,o=[];for(n in r)!cr(dr,n)&&cr(r,n)&&mr(o,n);for(;e.length>i;)cr(r,n=e[i++])&&(~gr(o,n)||mr(o,n));return o},vr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Un.f=Object.getOwnPropertyNames||function(t){return pr(t,vr)};var yr={};yr.f=Object.getOwnPropertySymbols;var _r=U,br=Un,wr=yr,kr=Ce,Mr=P([].concat),xr=_r("Reflect","ownKeys")||function(t){var e=br.f(kr(t)),n=wr.f;return n?Mr(e,n(t)):e},Or=Zt,Pr=xr,Sr=a,jr=Me,Cr=u,zr=I,Tr=/#|\.prototype\./,Br=function(t,e){var n=Gr[Er(t)];return n==Lr||n!=Zr&&(zr(e)?Cr(e):!!e)},Er=Br.normalize=function(t){return String(t).replace(Tr,".").toLowerCase()},Gr=Br.data={},Zr=Br.NATIVE="N",Lr=Br.POLYFILL="P",Ar=Br,Xr=s,Yr=a.f,Fr=De,Nr=function(t,e,n,r){var i=!!r&&!!r.unsafe,o=!!r&&!!r.enumerable,s=!!r&&!!r.noTargetGet,a=r&&void 0!==r.name?r.name:e;return Wn(n)&&Rn(n,a,r),t===Dn?(o?t[e]=n:qn(e,n),t):(i?!s&&t[e]&&(o=!0):delete t[e],o?t[e]=n:Vn(t,e,n),t)},Ir=Ot,Dr=function(t,e,n){for(var r=Pr(e),i=jr.f,o=Sr.f,s=0;s<r.length;s++){var a=r[s];Or(t,a)||n&&Or(n,a)||i(t,a,o(e,a))}},Wr=Ar,Vr=z,Rr=Array.isArray||function(t){return"Array"==Vr(t)},qr={};qr[$t("toStringTag")]="z";var Ur=s,Hr="[object z]"===String(qr),Kr=I,$r=z,Jr=$t("toStringTag"),Qr=Ur.Object,ti="Arguments"==$r(function(){return arguments}()),ei=P,ni=u,ri=I,ii=Hr?$r:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Qr(t),Jr))?n:ti?$r(e):"Object"==(r=$r(e))&&Kr(e.callee)?"Arguments":r},oi=rn,si=function(){},ai=[],ui=U("Reflect","construct"),hi=/^\s*(?:class|function)\b/,li=ei(hi.exec),ci=!hi.exec(si),fi=function(t){if(!ri(t))return!1;try{return ui(si,ai,t),!0}catch(t){return!1}},gi=function(t){if(!ri(t))return!1;switch(ii(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return ci||!!li(hi,oi(t))}catch(t){return!0}};gi.sham=!0;var di=!ui||ni((function(){var t;return fi(fi.call)||!fi(Object)||!fi((function(){t=!0}))||t}))?gi:fi,mi=s,pi=Rr,vi=di,yi=W,_i=$t("species"),bi=mi.Array,wi=function(t){var e;return pi(t)&&(e=t.constructor,(vi(e)&&(e===bi||pi(e.prototype))||yi(e)&&null===(e=e[_i]))&&(e=void 0)),void 0===e?bi:e},ki=ue,Mi=Me,xi=b,Oi=u,Pi=nt,Si=$t("species"),ji=function(t,e){var n,r,i,o,s,a=t.target,u=t.global,h=t.stat;if(n=u?Xr:h?Xr[a]||Ir(a,{}):(Xr[a]||{}).prototype)for(r in e){if(o=e[r],i=t.noTargetGet?(s=Yr(n,r))&&s.value:n[r],!Wr(u?r:a+(h?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;Dr(o,i)}(t.sham||i&&i.sham)&&Fr(o,"sham",!0),Nr(n,r,o,t)}},Ci=s,zi=er,Ti=$n,Bi=or,Ei=Bt,Gi=function(t,e){return new(wi(t))(0===e?0:e)},Zi=function(t,e,n){var r=ki(e);r in t?Mi.f(t,r,xi(0,n)):t[r]=n},Li=function(t){return Pi>=51||!Oi((function(){var e=[];return(e.constructor={})[Si]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}("splice"),Ai=Ci.TypeError,Xi=Math.max,Yi=Math.min,Fi=9007199254740991,Ni="Maximum allowed length exceeded";function Ii(t,e){return new google.maps.Point(~~(.5+(i=t.lng(),(1+i/180)*(2<<e+6))),~~(.5+(n=t.lat(),r=Math.sin(n*Math.PI/180),(1-.5/Math.PI*Math.log((1+r)/(1-r)))*(2<<e+6))));var n,r,i}ji({target:"Array",proto:!0,forced:!Li},{splice:function(t,e){var n,r,i,o,s,a,u=Ei(this),h=Bi(u),l=zi(t,h),c=arguments.length;if(0===c?n=r=0:1===c?(n=0,r=h-l):(n=c-2,r=Yi(Xi(Ti(e),0),h-l)),h+n-r>Fi)throw Ai(Ni);for(i=Gi(u,r),o=0;o<r;o++)(s=l+o)in u&&Zi(i,o,u[s]);if(i.length=r,n<r){for(o=l;o<h-r;o++)a=o+n,(s=o+r)in u?u[a]=u[s]:delete u[a];for(o=h;o>h-r+n;o--)delete u[o-1]}else if(n>r)for(o=h-r;o>l;o--)a=o+n-1,(s=o+r-1)in u?u[a]=u[s]:delete u[a];for(o=0;o<n;o++)u[o+l]=arguments[o+2];return u.length=h-r+n,i}});var Di=function(){function t(n,r){e(this,t),this.z=r,this.minX=Math.min(n[0].x,n[1].x),this.maxX=Math.max(n[0].x,n[1].x),this.minY=Math.min(n[0].y,n[1].y),this.maxY=Math.max(n[0].y,n[1].y)}return r(t,[{key:"equals",value:function(t){return this.maxX===t.maxX&&this.maxY===t.maxY&&this.minX===t.minX&&this.minY===t.minY}},{key:"containsPoint",value:function(t){return this.minX<=t.x&&this.maxX>=t.x&&this.minY<=t.y&&this.maxY>=t.y}}]),t}(),Wi=function(){function t(n,r){var i=this,o=r.maxZoom,s=void 0===o?19:o,a=r.trackMarkers,u=r.shown,h=void 0===u||u,l=r.borderPadding,c=void 0===l?100:l;e(this,t),this._tileSize=1024,this._map=n,this._mapZoom=n.getZoom(),this._maxZoom=s,this._trackMarkers=a,this._swPadding=new google.maps.Size(-c,c),this._nePadding=new google.maps.Size(c,-c),this._gridWidth={},this._grid=[],this._grid[this._maxZoom]=[],this._numMarkers={},this._numMarkers[this._maxZoom]=0,this.shownMarkers=0,this.shown=h,google.maps.event.addListenerOnce(n,"idle",(function(){i._initialize()}))}return r(t,[{key:"_initialize",value:function(){var t=this._map.mapTypes;for(var e in t)e in t&&t.get(e)&&"number"===t.get(e).maxZoom&&this._map.mapTypes.get(e).maxZoom;google.maps.event.addListener(this._map,"dragend",this._onMapMoveEnd.bind(this)),google.maps.event.addListener(this._map,"idle",this._onMapMoveEnd.bind(this)),google.maps.event.addListener(this._map,"zoom_changed",this._onMapMoveEnd.bind(this)),this.resetManager(),this._shownBounds=this._getMapGridBounds(),google.maps.event.trigger(this,"loaded")}},{key:"_removeOverlay",value:function(t){t.setMap(null),this.shownMarkers--}},{key:"_addOverlay",value:function(t){this.shown&&(t.setMap(this._map),this.shownMarkers++)}},{key:"resetManager",value:function(){for(var t=256,e=0;e<=this._maxZoom;++e)this._grid[e]=[],this._numMarkers[e]=0,this._gridWidth[e]=Math.ceil(t/this._tileSize),t<<=1}},{key:"clearMarkers",value:function(){this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.resetManager()}},{key:"_getTilePoint",value:function(t,e,n){var r=Ii(t,e);return new google.maps.Point(Math.floor((r.x+n.width)/this._tileSize),Math.floor((r.y+n.height)/this._tileSize))}},{key:"_addMarkerBatch",value:function(t,e,n){var r=this,i=t.getPosition();t.set("__minZoom",e),this._trackMarkers&&google.maps.event.addListener(t,"changed",(function(t,e,n){r._onMarkerMoved(t,e,n)}));for(var o=this._getTilePoint(i,n,new google.maps.Size(0,0)),s=n;s>=e;s--){this._getGridCellCreate(o.x,o.y,s).push(t),o.x=o.x>>1,o.y=o.y>>1}}},{key:"_isGridPointVisible",value:function(t){var e=this._shownBounds.minY<=t.y&&t.y<=this._shownBounds.maxY,n=this._shownBounds.minX,r=n<=t.x&&t.x<=this._shownBounds.maxX;if(!r&&n<0){var i=this._gridWidth[this._shownBounds.z];r=n+i<=t.x&&t.x<=i-1}return e&&r}},{key:"_onMarkerMoved",value:function(t,e,n){for(var r=this._maxZoom,i=!1,o=this._getTilePoint(e,r,new google.maps.Size(0,0)),s=this._getTilePoint(n,r,new google.maps.Size(0,0));r>=0&&(o.x!==s.x||o.y!==s.y);){var a=this._getGridCellNoCreate(o.x,o.y,r);a&&this._removeMarkerFromCell(a,t)&&this._getGridCellCreate(s.x,s.y,r).push(t),r===this._mapZoom&&(this._isGridPointVisible(o)?this._isGridPointVisible(s)||(this._removeOverlay(t),i=!0):this._isGridPointVisible(s)&&(this._addOverlay(t),i=!0)),o.x=o.x>>1,o.y=o.y>>1,s.x=s.x>>1,s.y=s.y>>1,--r}i&&this._notifyListeners()}},{key:"removeMarker",value:function(t){for(var e=this._maxZoom,n=!1,r=t.getPosition(),i=this._getTilePoint(r,e,new google.maps.Size(0,0));e>=0;){var o=this._getGridCellNoCreate(i.x,i.y,e);o&&this._removeMarkerFromCell(o,t),e===this._mapZoom&&this._isGridPointVisible(i)&&(this._removeOverlay(t),n=!0),i.x=i.x>>1,i.y=i.y>>1,--e}n&&this._notifyListeners(),this._numMarkers[t.get("__minZoom")]--}},{key:"addMarkers",value:function(t,e,n){n=this._getOptmaxZoom(n);for(var r=t.length-1;r>=0;r--)this._addMarkerBatch(t[r],e,n);this._numMarkers[e]+=t.length}},{key:"_getOptmaxZoom",value:function(t){return t||this._maxZoom}},{key:"getMarkerCount",value:function(t){for(var e=0,n=0;n<=t;n++)e+=this._numMarkers[n];return e}},{key:"getMarker",value:function(t,e,n){var r=new google.maps.LatLng(t,e),i=this._getTilePoint(r,n,new google.maps.Size(0,0)),o=new google.maps.Marker({position:r}),s=this._getGridCellNoCreate(i.x,i.y,n);if(void 0!==s)for(var a=0;a<s.length;a++)t===s[a].getPosition().lat()&&e===s[a].getPosition().lng()&&(o=s[a]);return o}},{key:"addMarker",value:function(t,e,n){n=this._getOptmaxZoom(n),this._addMarkerBatch(t,e,n);var r=this._getTilePoint(t.getPosition(),this._mapZoom,new google.maps.Size(0,0));this._isGridPointVisible(r)&&e<=this._shownBounds.z&&this._shownBounds.z<=n&&(this._addOverlay(t),this._notifyListeners()),this._numMarkers[e]++}},{key:"_getGridCellCreate",value:function(t,e,n){return t<0&&(t+=this._gridWidth[n]),this._grid[n]||(this._grid[n]=[]),this._grid[n][t]||(this._grid[n][t]=[]),this._grid[n][t][e]||(this._grid[n][t][e]=[]),this._grid[n][t][e]}},{key:"_getGridCellNoCreate",value:function(t,e,n){return t<0&&(t+=this._gridWidth[n]),this._grid[n]&&this._grid[n][t]&&this._grid[n][t][e]?this._grid[n][t][e]:null}},{key:"_getGridBounds",value:function(t,e,n,r){e=Math.min(e,this._maxZoom);var i=t.getSouthWest(),o=t.getNorthEast(),s=this._getTilePoint(i,e,n),a=this._getTilePoint(o,e,r),u=this._gridWidth[e];(o.lng()<i.lng()||a.x<s.x)&&(s.x-=u),a.x-s.x+1>=u&&(s.x=0,a.x=u-1);var h=new Di([s,a],e);return h.z=e,h}},{key:"_getMapGridBounds",value:function(){return this._getGridBounds(this._map.getBounds(),this._mapZoom,this._swPadding,this._nePadding)}},{key:"_onMapMoveEnd",value:function(){window.setTimeout(this._updateMarkers.bind(this),0)}},{key:"visible",value:function(){return!!this.shown}},{key:"isHidden",value:function(){return!this.shown}},{key:"show",value:function(){this.shown=!0,this.refresh()}},{key:"hide",value:function(){this.shown=!1,this.refresh()}},{key:"toggle",value:function(){this.shown=!this.shown,this.refresh()}},{key:"refresh",value:function(){this.shownMarkers>0&&this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.show&&this._processAll(this._shownBounds,this._addOverlay.bind(this)),this._notifyListeners()}},{key:"_updateMarkers",value:function(){this._mapZoom=this._map.getZoom();var t=this._getMapGridBounds();t.equals(this._shownBounds)&&t.z===this._shownBounds.z||(t.z!==this._shownBounds.z?(this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.show&&this._processAll(t,this._addOverlay.bind(this))):(this._rectangleDiff(this._shownBounds,t,this._removeCellMarkers.bind(this)),this.show&&this._rectangleDiff(t,this._shownBounds,this._addCellMarkers.bind(this))),this._shownBounds=t,this._notifyListeners())}},{key:"_notifyListeners",value:function(){google.maps.event.trigger(this,"changed",this._shownBounds,this.shownMarkers)}},{key:"_processAll",value:function(t,e){for(var n=t.minX;n<=t.maxX;n++)for(var r=t.minY;r<=t.maxY;r++)this._processCellMarkers(n,r,t.z,e)}},{key:"_processCellMarkers",value:function(t,e,n,r){var i=this._getGridCellNoCreate(t,e,n);if(i)for(var o=i.length-1;o>=0;o--)r(i[o])}},{key:"_removeCellMarkers",value:function(t,e,n){this._processCellMarkers(t,e,n,this._removeOverlay.bind(this))}},{key:"_addCellMarkers",value:function(t,e,n){this._processCellMarkers(t,e,n,this._addOverlay.bind(this))}},{key:"_rectangleDiff",value:function(t,e,n){this._rectangleDiffCoords(t,e,(function(e,r){n(e,r,t.z)}))}},{key:"_rectangleDiffCoords",value:function(t,e,n){var r,i,o=t.minX,s=t.minY,a=t.maxX,u=t.maxY,h=e.minX,l=e.minY,c=e.maxX,f=e.maxY;for(r=o;r<=a;r++){for(i=s;i<=u&&i<l;i++)n(r,i);for(i=Math.max(f+1,s);i<=u;i++)n(r,i)}for(i=Math.max(s,l);i<=Math.min(u,f);i++){for(r=Math.min(a+1,h)-1;r>=o;r--)n(r,i);for(r=Math.max(o,c+1);r<=a;r++)n(r,i)}}},{key:"_removeMarkerFromCell",value:function(t,e){for(var n=0,r=0;r<t.length;++r)t[r]===e&&(t.splice(r--,1),n++);return n}}]),t}();t.MarkerManager=Wi,Object.defineProperty(t,"__esModule",{value:!0})}));

this.google=this.google||{},this.google.maps=this.google.maps||{},this.google.maps.plugins=this.google.maps.plugins||{},this.google.maps.plugins.markermanager=function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){return t&&t.Math==Math&&t},s=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof i&&i)||function(){return this}()||Function("return this")(),a={},u=function(t){try{return!!t()}catch(t){return!0}},h=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l=Function.prototype.call,c=l.bind?l.bind(l):function(){return l.apply(l,arguments)},f={},g={}.propertyIsEnumerable,d=Object.getOwnPropertyDescriptor,m=d&&!g.call({1:2},1);f.f=m?function(t){var e=d(this,t);return!!e&&e.enumerable}:g;var p,v,y=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},_=Function.prototype,b=_.bind,w=_.call,M=b&&b.bind(w,w),k=b?function(t){return t&&M(t)}:function(t){return t&&function(){return w.apply(t,arguments)}},x=k,O=x({}.toString),P=x("".slice),S=function(t){return P(O(t),8,-1)},C=k,j=u,z=S,B=s.Object,T=C("".split),E=j((function(){return!B("z").propertyIsEnumerable(0)}))?function(t){return"String"==z(t)?T(t,""):B(t)}:B,G=s.TypeError,Z=function(t){if(null==t)throw G("Can't call method on "+t);return t},A=E,L=Z,X=function(t){return A(L(t))},Y=function(t){return"function"==typeof t},F=Y,N=function(t){return"object"==typeof t?null!==t:F(t)},D=s,I=Y,W=function(t){return I(t)?t:void 0},V=function(t,e){return arguments.length<2?W(D[t]):D[t]&&D[t][e]},R=k({}.isPrototypeOf),q=s,U=V("navigator","userAgent")||"",H=q.process,K=q.Deno,$=H&&H.versions||K&&K.version,J=$&&$.v8;J&&(v=(p=J.split("."))[0]>0&&p[0]<4?1:+(p[0]+p[1])),!v&&U&&(!(p=U.match(/Edge\/(\d+)/))||p[1]>=74)&&(p=U.match(/Chrome\/(\d+)/))&&(v=+p[1]);var Q=v,tt=Q,et=u,nt=!!Object.getOwnPropertySymbols&&!et((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&tt&&tt<41})),rt=nt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,it=V,ot=Y,st=R,at=rt,ut=s.Object,ht=at?function(t){return"symbol"==typeof t}:function(t){var e=it("Symbol");return ot(e)&&st(e.prototype,ut(t))},lt=s.String,ct=Y,ft=function(t){try{return lt(t)}catch(t){return"Object"}},gt=s.TypeError,dt=function(t){if(ct(t))return t;throw gt(ft(t)+" is not a function")},mt=c,pt=Y,vt=N,yt=s.TypeError,_t={exports:{}},bt=s,wt=Object.defineProperty,Mt=function(t,e){try{wt(bt,t,{value:e,configurable:!0,writable:!0})}catch(n){bt[t]=e}return e},kt=Mt,xt="__core-js_shared__",Ot=s[xt]||kt(xt,{}),Pt=Ot;(_t.exports=function(t,e){return Pt[t]||(Pt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.20.2",mode:"global",copyright:"© 2022 Denis Pushkarev (zloirock.ru)"});var St=Z,Ct=s.Object,jt=function(t){return Ct(St(t))},zt=jt,Bt=k({}.hasOwnProperty),Tt=Object.hasOwn||function(t,e){return Bt(zt(t),e)},Et=k,Gt=0,Zt=Math.random(),At=Et(1..toString),Lt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+At(++Gt+Zt,36)},Xt=s,Yt=_t.exports,Ft=Tt,Nt=Lt,Dt=nt,It=rt,Wt=Yt("wks"),Vt=Xt.Symbol,Rt=Vt&&Vt.for,qt=It?Vt:Vt&&Vt.withoutSetter||Nt,Ut=function(t){if(!Ft(Wt,t)||!Dt&&"string"!=typeof Wt[t]){var e="Symbol."+t;Dt&&Ft(Vt,t)?Wt[t]=Vt[t]:Wt[t]=It&&Rt?Rt(e):qt(e)}return Wt[t]},Ht=c,Kt=N,$t=ht,Jt=function(t,e){var n=t[e];return null==n?void 0:dt(n)},Qt=function(t,e){var n,r;if("string"===e&&pt(n=t.toString)&&!vt(r=mt(n,t)))return r;if(pt(n=t.valueOf)&&!vt(r=mt(n,t)))return r;if("string"!==e&&pt(n=t.toString)&&!vt(r=mt(n,t)))return r;throw yt("Can't convert object to primitive value")},te=Ut,ee=s.TypeError,ne=te("toPrimitive"),re=function(t,e){if(!Kt(t)||$t(t))return t;var n,r=Jt(t,ne);if(r){if(void 0===e&&(e="default"),n=Ht(r,t,e),!Kt(n)||$t(n))return n;throw ee("Can't convert object to primitive value")}return void 0===e&&(e="number"),Qt(t,e)},ie=ht,oe=function(t){var e=re(t,"string");return ie(e)?e:e+""},se=N,ae=s.document,ue=se(ae)&&se(ae.createElement),he=function(t){return ue?ae.createElement(t):{}},le=!h&&!u((function(){return 7!=Object.defineProperty(he("div"),"a",{get:function(){return 7}}).a})),ce=h,fe=c,ge=f,de=y,me=X,pe=oe,ve=Tt,ye=le,_e=Object.getOwnPropertyDescriptor;a.f=ce?_e:function(t,e){if(t=me(t),e=pe(e),ye)try{return _e(t,e)}catch(t){}if(ve(t,e))return de(!fe(ge.f,t,e),t[e])};var be={},we=h&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Me=s,ke=N,xe=Me.String,Oe=Me.TypeError,Pe=function(t){if(ke(t))return t;throw Oe(xe(t)+" is not an object")},Se=h,Ce=le,je=we,ze=Pe,Be=oe,Te=s.TypeError,Ee=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,Ze="enumerable",Ae="configurable",Le="writable";be.f=Se?je?function(t,e,n){if(ze(t),e=Be(e),ze(n),"function"==typeof t&&"prototype"===e&&"value"in n&&Le in n&&!n.writable){var r=Ge(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:Ae in n?n.configurable:r.configurable,enumerable:Ze in n?n.enumerable:r.enumerable,writable:!1})}return Ee(t,e,n)}:Ee:function(t,e,n){if(ze(t),e=Be(e),ze(n),Ce)try{return Ee(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Te("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Xe=be,Ye=y,Fe=h?function(t,e,n){return Xe.f(t,e,Ye(1,n))}:function(t,e,n){return t[e]=n,t},Ne={exports:{}},De=Y,Ie=Ot,We=k(Function.toString);De(Ie.inspectSource)||(Ie.inspectSource=function(t){return We(t)});var Ve,Re,qe,Ue=Ie.inspectSource,He=Y,Ke=Ue,$e=s.WeakMap,Je=He($e)&&/native code/.test(Ke($e)),Qe=_t.exports,tn=Lt,en=Qe("keys"),nn={},rn=Je,on=s,sn=k,an=N,un=Fe,hn=Tt,ln=Ot,cn=function(t){return en[t]||(en[t]=tn(t))},fn=nn,gn="Object already initialized",dn=on.TypeError,mn=on.WeakMap;if(rn||ln.state){var pn=ln.state||(ln.state=new mn),vn=sn(pn.get),yn=sn(pn.has),_n=sn(pn.set);Ve=function(t,e){if(yn(pn,t))throw new dn(gn);return e.facade=t,_n(pn,t,e),e},Re=function(t){return vn(pn,t)||{}},qe=function(t){return yn(pn,t)}}else{var bn=cn("state");fn[bn]=!0,Ve=function(t,e){if(hn(t,bn))throw new dn(gn);return e.facade=t,un(t,bn,e),e},Re=function(t){return hn(t,bn)?t[bn]:{}},qe=function(t){return hn(t,bn)}}var wn={set:Ve,get:Re,has:qe,enforce:function(t){return qe(t)?Re(t):Ve(t,{})},getterFor:function(t){return function(e){var n;if(!an(e)||(n=Re(e)).type!==t)throw dn("Incompatible receiver, "+t+" required");return n}}},Mn=h,kn=Tt,xn=Function.prototype,On=Mn&&Object.getOwnPropertyDescriptor,Pn=kn(xn,"name"),Sn=Pn&&"something"===function(){}.name,Cn=Pn&&(!Mn||Mn&&On(xn,"name").configurable),jn=s,zn=Y,Bn=Tt,Tn=Fe,En=Mt,Gn=Ue,Zn={EXISTS:Pn,PROPER:Sn,CONFIGURABLE:Cn}.CONFIGURABLE,An=wn.get,Ln=wn.enforce,Xn=String(String).split("String");(Ne.exports=function(t,e,n,r){var i,o=!!r&&!!r.unsafe,s=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet,u=r&&void 0!==r.name?r.name:e;zn(n)&&("Symbol("===String(u).slice(0,7)&&(u="["+String(u).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Bn(n,"name")||Zn&&n.name!==u)&&Tn(n,"name",u),(i=Ln(n)).source||(i.source=Xn.join("string"==typeof u?u:""))),t!==jn?(o?!a&&t[e]&&(s=!0):delete t[e],s?t[e]=n:Tn(t,e,n)):s?t[e]=n:En(e,n)})(Function.prototype,"toString",(function(){return zn(this)&&An(this).source||Gn(this)}));var Yn={},Fn=Math.ceil,Nn=Math.floor,Dn=function(t){var e=+t;return e!=e||0===e?0:(e>0?Nn:Fn)(e)},In=Dn,Wn=Math.max,Vn=Math.min,Rn=function(t,e){var n=In(t);return n<0?Wn(n+e,0):Vn(n,e)},qn=Dn,Un=Math.min,Hn=function(t){return t>0?Un(qn(t),9007199254740991):0},Kn=function(t){return Hn(t.length)},$n=X,Jn=Rn,Qn=Kn,tr=function(t){return function(e,n,r){var i,o=$n(e),s=Qn(o),a=Jn(r,s);if(t&&n!=n){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((t||a in o)&&o[a]===n)return t||a||0;return!t&&-1}},er={includes:tr(!0),indexOf:tr(!1)},nr=Tt,rr=X,ir=er.indexOf,or=nn,sr=k([].push),ar=function(t,e){var n,r=rr(t),i=0,o=[];for(n in r)!nr(or,n)&&nr(r,n)&&sr(o,n);for(;e.length>i;)nr(r,n=e[i++])&&(~ir(o,n)||sr(o,n));return o},ur=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Yn.f=Object.getOwnPropertyNames||function(t){return ar(t,ur)};var hr={};hr.f=Object.getOwnPropertySymbols;var lr=V,cr=Yn,fr=hr,gr=Pe,dr=k([].concat),mr=lr("Reflect","ownKeys")||function(t){var e=cr.f(gr(t)),n=fr.f;return n?dr(e,n(t)):e},pr=Tt,vr=mr,yr=a,_r=be,br=u,wr=Y,Mr=/#|\.prototype\./,kr=function(t,e){var n=Or[xr(t)];return n==Sr||n!=Pr&&(wr(e)?br(e):!!e)},xr=kr.normalize=function(t){return String(t).replace(Mr,".").toLowerCase()},Or=kr.data={},Pr=kr.NATIVE="N",Sr=kr.POLYFILL="P",Cr=kr,jr=s,zr=a.f,Br=Fe,Tr=Ne.exports,Er=Mt,Gr=function(t,e,n){for(var r=vr(e),i=_r.f,o=yr.f,s=0;s<r.length;s++){var a=r[s];pr(t,a)||n&&pr(n,a)||i(t,a,o(e,a))}},Zr=Cr,Ar=S,Lr=Array.isArray||function(t){return"Array"==Ar(t)},Xr={};Xr[Ut("toStringTag")]="z";var Yr=s,Fr="[object z]"===String(Xr),Nr=Y,Dr=S,Ir=Ut("toStringTag"),Wr=Yr.Object,Vr="Arguments"==Dr(function(){return arguments}()),Rr=k,qr=u,Ur=Y,Hr=Fr?Dr:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Wr(t),Ir))?n:Vr?Dr(e):"Object"==(r=Dr(e))&&Nr(e.callee)?"Arguments":r},Kr=Ue,$r=function(){},Jr=[],Qr=V("Reflect","construct"),ti=/^\s*(?:class|function)\b/,ei=Rr(ti.exec),ni=!ti.exec($r),ri=function(t){if(!Ur(t))return!1;try{return Qr($r,Jr,t),!0}catch(t){return!1}},ii=function(t){if(!Ur(t))return!1;switch(Hr(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return ni||!!ei(ti,Kr(t))}catch(t){return!0}};ii.sham=!0;var oi=!Qr||qr((function(){var t;return ri(ri.call)||!ri(Object)||!ri((function(){t=!0}))||t}))?ii:ri,si=s,ai=Lr,ui=oi,hi=N,li=Ut("species"),ci=si.Array,fi=function(t){var e;return ai(t)&&(e=t.constructor,(ui(e)&&(e===ci||ai(e.prototype))||hi(e)&&null===(e=e[li]))&&(e=void 0)),void 0===e?ci:e},gi=oe,di=be,mi=y,pi=u,vi=Q,yi=Ut("species"),_i=function(t,e){var n,r,i,o,s,a=t.target,u=t.global,h=t.stat;if(n=u?jr:h?jr[a]||Er(a,{}):(jr[a]||{}).prototype)for(r in e){if(o=e[r],i=t.noTargetGet?(s=zr(n,r))&&s.value:n[r],!Zr(u?r:a+(h?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;Gr(o,i)}(t.sham||i&&i.sham)&&Br(o,"sham",!0),Tr(n,r,o,t)}},bi=s,wi=Rn,Mi=Dn,ki=Kn,xi=jt,Oi=function(t,e){return new(fi(t))(0===e?0:e)},Pi=function(t,e,n){var r=gi(e);r in t?di.f(t,r,mi(0,n)):t[r]=n},Si=function(t){return vi>=51||!pi((function(){var e=[];return(e.constructor={})[yi]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}("splice"),Ci=bi.TypeError,ji=Math.max,zi=Math.min,Bi=9007199254740991,Ti="Maximum allowed length exceeded";function Ei(t,e){return new google.maps.Point(~~(.5+(i=t.lng(),(1+i/180)*(2<<e+6))),~~(.5+(n=t.lat(),r=Math.sin(n*Math.PI/180),(1-.5/Math.PI*Math.log((1+r)/(1-r)))*(2<<e+6))));var n,r,i}_i({target:"Array",proto:!0,forced:!Si},{splice:function(t,e){var n,r,i,o,s,a,u=xi(this),h=ki(u),l=wi(t,h),c=arguments.length;if(0===c?n=r=0:1===c?(n=0,r=h-l):(n=c-2,r=zi(ji(Mi(e),0),h-l)),h+n-r>Bi)throw Ci(Ti);for(i=Oi(u,r),o=0;o<r;o++)(s=l+o)in u&&Pi(i,o,u[s]);if(i.length=r,n<r){for(o=l;o<h-r;o++)a=o+n,(s=o+r)in u?u[a]=u[s]:delete u[a];for(o=h;o>h-r+n;o--)delete u[o-1]}else if(n>r)for(o=h-r;o>l;o--)a=o+n-1,(s=o+r-1)in u?u[a]=u[s]:delete u[a];for(o=0;o<n;o++)u[o+l]=arguments[o+2];return u.length=h-r+n,i}});var Gi=function(){function t(n,r){e(this,t),this.z=r,this.minX=Math.min(n[0].x,n[1].x),this.maxX=Math.max(n[0].x,n[1].x),this.minY=Math.min(n[0].y,n[1].y),this.maxY=Math.max(n[0].y,n[1].y)}return r(t,[{key:"equals",value:function(t){return this.maxX===t.maxX&&this.maxY===t.maxY&&this.minX===t.minX&&this.minY===t.minY}},{key:"containsPoint",value:function(t){return this.minX<=t.x&&this.maxX>=t.x&&this.minY<=t.y&&this.maxY>=t.y}}]),t}(),Zi=function(){function t(n,r){var i=this,o=r.maxZoom,s=void 0===o?19:o,a=r.trackMarkers,u=r.shown,h=void 0===u||u,l=r.borderPadding,c=void 0===l?100:l;e(this,t),this._tileSize=1024,this._map=n,this._mapZoom=n.getZoom(),this._maxZoom=s,this._trackMarkers=a,this._swPadding=new google.maps.Size(-c,c),this._nePadding=new google.maps.Size(c,-c),this._gridWidth={},this._grid=[],this._grid[this._maxZoom]=[],this._numMarkers={},this._numMarkers[this._maxZoom]=0,this.shownMarkers=0,this.shown=h,google.maps.event.addListenerOnce(n,"idle",(function(){i._initialize()}))}return r(t,[{key:"_initialize",value:function(){var t=this._map.mapTypes;for(var e in t)e in t&&t.get(e)&&"number"===t.get(e).maxZoom&&this._map.mapTypes.get(e).maxZoom;google.maps.event.addListener(this._map,"dragend",this._onMapMoveEnd.bind(this)),google.maps.event.addListener(this._map,"idle",this._onMapMoveEnd.bind(this)),google.maps.event.addListener(this._map,"zoom_changed",this._onMapMoveEnd.bind(this)),this.resetManager(),this._shownBounds=this._getMapGridBounds(),google.maps.event.trigger(this,"loaded")}},{key:"_removeOverlay",value:function(t){t.setMap(null),this.shownMarkers--}},{key:"_addOverlay",value:function(t){this.shown&&(t.setMap(this._map),this.shownMarkers++)}},{key:"resetManager",value:function(){for(var t=256,e=0;e<=this._maxZoom;++e)this._grid[e]=[],this._numMarkers[e]=0,this._gridWidth[e]=Math.ceil(t/this._tileSize),t<<=1}},{key:"clearMarkers",value:function(){this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.resetManager()}},{key:"_getTilePoint",value:function(t,e,n){var r=Ei(t,e);return new google.maps.Point(Math.floor((r.x+n.width)/this._tileSize),Math.floor((r.y+n.height)/this._tileSize))}},{key:"_addMarkerBatch",value:function(t,e,n){var r=this,i=t.getPosition();t.set("__minZoom",e),this._trackMarkers&&google.maps.event.addListener(t,"changed",(function(t,e,n){r._onMarkerMoved(t,e,n)}));for(var o=this._getTilePoint(i,n,new google.maps.Size(0,0)),s=n;s>=e;s--){this._getGridCellCreate(o.x,o.y,s).push(t),o.x=o.x>>1,o.y=o.y>>1}}},{key:"_isGridPointVisible",value:function(t){var e=this._shownBounds.minY<=t.y&&t.y<=this._shownBounds.maxY,n=this._shownBounds.minX,r=n<=t.x&&t.x<=this._shownBounds.maxX;if(!r&&n<0){var i=this._gridWidth[this._shownBounds.z];r=n+i<=t.x&&t.x<=i-1}return e&&r}},{key:"_onMarkerMoved",value:function(t,e,n){for(var r=this._maxZoom,i=!1,o=this._getTilePoint(e,r,new google.maps.Size(0,0)),s=this._getTilePoint(n,r,new google.maps.Size(0,0));r>=0&&(o.x!==s.x||o.y!==s.y);){var a=this._getGridCellNoCreate(o.x,o.y,r);a&&this._removeMarkerFromCell(a,t)&&this._getGridCellCreate(s.x,s.y,r).push(t),r===this._mapZoom&&(this._isGridPointVisible(o)?this._isGridPointVisible(s)||(this._removeOverlay(t),i=!0):this._isGridPointVisible(s)&&(this._addOverlay(t),i=!0)),o.x=o.x>>1,o.y=o.y>>1,s.x=s.x>>1,s.y=s.y>>1,--r}i&&this._notifyListeners()}},{key:"removeMarker",value:function(t){for(var e=this._maxZoom,n=!1,r=t.getPosition(),i=this._getTilePoint(r,e,new google.maps.Size(0,0));e>=0;){var o=this._getGridCellNoCreate(i.x,i.y,e);o&&this._removeMarkerFromCell(o,t),e===this._mapZoom&&this._isGridPointVisible(i)&&(this._removeOverlay(t),n=!0),i.x=i.x>>1,i.y=i.y>>1,--e}n&&this._notifyListeners(),this._numMarkers[t.get("__minZoom")]--}},{key:"addMarkers",value:function(t,e,n){n=this._getOptmaxZoom(n);for(var r=t.length-1;r>=0;r--)this._addMarkerBatch(t[r],e,n);this._numMarkers[e]+=t.length}},{key:"_getOptmaxZoom",value:function(t){return t||this._maxZoom}},{key:"getMarkerCount",value:function(t){for(var e=0,n=0;n<=t;n++)e+=this._numMarkers[n];return e}},{key:"getMarker",value:function(t,e,n){var r=new google.maps.LatLng(t,e),i=this._getTilePoint(r,n,new google.maps.Size(0,0)),o=new google.maps.Marker({position:r}),s=this._getGridCellNoCreate(i.x,i.y,n);if(void 0!==s)for(var a=0;a<s.length;a++)t===s[a].getPosition().lat()&&e===s[a].getPosition().lng()&&(o=s[a]);return o}},{key:"addMarker",value:function(t,e,n){n=this._getOptmaxZoom(n),this._addMarkerBatch(t,e,n);var r=this._getTilePoint(t.getPosition(),this._mapZoom,new google.maps.Size(0,0));this._isGridPointVisible(r)&&e<=this._shownBounds.z&&this._shownBounds.z<=n&&(this._addOverlay(t),this._notifyListeners()),this._numMarkers[e]++}},{key:"_getGridCellCreate",value:function(t,e,n){return t<0&&(t+=this._gridWidth[n]),this._grid[n]||(this._grid[n]=[]),this._grid[n][t]||(this._grid[n][t]=[]),this._grid[n][t][e]||(this._grid[n][t][e]=[]),this._grid[n][t][e]}},{key:"_getGridCellNoCreate",value:function(t,e,n){return t<0&&(t+=this._gridWidth[n]),this._grid[n]&&this._grid[n][t]&&this._grid[n][t][e]?this._grid[n][t][e]:null}},{key:"_getGridBounds",value:function(t,e,n,r){e=Math.min(e,this._maxZoom);var i=t.getSouthWest(),o=t.getNorthEast(),s=this._getTilePoint(i,e,n),a=this._getTilePoint(o,e,r),u=this._gridWidth[e];(o.lng()<i.lng()||a.x<s.x)&&(s.x-=u),a.x-s.x+1>=u&&(s.x=0,a.x=u-1);var h=new Gi([s,a],e);return h.z=e,h}},{key:"_getMapGridBounds",value:function(){return this._getGridBounds(this._map.getBounds(),this._mapZoom,this._swPadding,this._nePadding)}},{key:"_onMapMoveEnd",value:function(){window.setTimeout(this._updateMarkers.bind(this),0)}},{key:"visible",value:function(){return!!this.shown}},{key:"isHidden",value:function(){return!this.shown}},{key:"show",value:function(){this.shown=!0,this.refresh()}},{key:"hide",value:function(){this.shown=!1,this.refresh()}},{key:"toggle",value:function(){this.shown=!this.shown,this.refresh()}},{key:"refresh",value:function(){this.shownMarkers>0&&this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.show&&this._processAll(this._shownBounds,this._addOverlay.bind(this)),this._notifyListeners()}},{key:"_updateMarkers",value:function(){this._mapZoom=this._map.getZoom();var t=this._getMapGridBounds();t.equals(this._shownBounds)&&t.z===this._shownBounds.z||(t.z!==this._shownBounds.z?(this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.show&&this._processAll(t,this._addOverlay.bind(this))):(this._rectangleDiff(this._shownBounds,t,this._removeCellMarkers.bind(this)),this.show&&this._rectangleDiff(t,this._shownBounds,this._addCellMarkers.bind(this))),this._shownBounds=t,this._notifyListeners())}},{key:"_notifyListeners",value:function(){google.maps.event.trigger(this,"changed",this._shownBounds,this.shownMarkers)}},{key:"_processAll",value:function(t,e){for(var n=t.minX;n<=t.maxX;n++)for(var r=t.minY;r<=t.maxY;r++)this._processCellMarkers(n,r,t.z,e)}},{key:"_processCellMarkers",value:function(t,e,n,r){var i=this._getGridCellNoCreate(t,e,n);if(i)for(var o=i.length-1;o>=0;o--)r(i[o])}},{key:"_removeCellMarkers",value:function(t,e,n){this._processCellMarkers(t,e,n,this._removeOverlay.bind(this))}},{key:"_addCellMarkers",value:function(t,e,n){this._processCellMarkers(t,e,n,this._addOverlay.bind(this))}},{key:"_rectangleDiff",value:function(t,e,n){this._rectangleDiffCoords(t,e,(function(e,r){n(e,r,t.z)}))}},{key:"_rectangleDiffCoords",value:function(t,e,n){var r,i,o=t.minX,s=t.minY,a=t.maxX,u=t.maxY,h=e.minX,l=e.minY,c=e.maxX,f=e.maxY;for(r=o;r<=a;r++){for(i=s;i<=u&&i<l;i++)n(r,i);for(i=Math.max(f+1,s);i<=u;i++)n(r,i)}for(i=Math.max(s,l);i<=Math.min(u,f);i++){for(r=Math.min(a+1,h)-1;r>=o;r--)n(r,i);for(r=Math.max(o,c+1);r<=a;r++)n(r,i)}}},{key:"_removeMarkerFromCell",value:function(t,e){for(var n=0,r=0;r<t.length;++r)t[r]===e&&(t.splice(r--,1),n++);return n}}]),t}();return t.MarkerManager=Zi,Object.defineProperty(t,"__esModule",{value:!0}),t}({});
//# sourceMappingURL=index.dev.js.map

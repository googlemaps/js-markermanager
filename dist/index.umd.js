!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(((t="undefined"!=typeof globalThis?globalThis:t||self).google=t.google||{},t.google.maps=t.google.maps||{},t.google.maps.plugins=t.google.maps.plugins||{},t.google.maps.plugins.markermanager={}))}(this,(function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){return t&&t.Math==Math&&t},s=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof i&&i)||function(){return this}()||Function("return this")(),a={},u=function(t){try{return!!t()}catch(t){return!0}},h=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l=Function.prototype.call,c=l.bind?l.bind(l):function(){return l.apply(l,arguments)},f={},d={}.propertyIsEnumerable,g=Object.getOwnPropertyDescriptor,m=g&&!d.call({1:2},1);f.f=m?function(t){var e=g(this,t);return!!e&&e.enumerable}:d;var p,v,y=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},_=Function.prototype,b=_.bind,w=_.call,M=b&&b.bind(w),k=b?function(t){return t&&M(w,t)}:function(t){return t&&function(){return w.apply(t,arguments)}},x=k,O=x({}.toString),P=x("".slice),S=function(t){return P(O(t),8,-1)},C=k,j=u,T=S,z=s.Object,B=C("".split),E=j((function(){return!z("z").propertyIsEnumerable(0)}))?function(t){return"String"==T(t)?B(t,""):z(t)}:z,G=s.TypeError,Z=function(t){if(null==t)throw G("Can't call method on "+t);return t},A=E,L=Z,X=function(t){return A(L(t))},Y=function(t){return"function"==typeof t},F=Y,N=function(t){return"object"==typeof t?null!==t:F(t)},I=s,D=Y,W=function(t){return D(t)?t:void 0},V=function(t,e){return arguments.length<2?W(I[t]):I[t]&&I[t][e]},R=k({}.isPrototypeOf),q=s,U=V("navigator","userAgent")||"",H=q.process,K=q.Deno,$=H&&H.versions||K&&K.version,J=$&&$.v8;J&&(v=(p=J.split("."))[0]>0&&p[0]<4?1:+(p[0]+p[1])),!v&&U&&(!(p=U.match(/Edge\/(\d+)/))||p[1]>=74)&&(p=U.match(/Chrome\/(\d+)/))&&(v=+p[1]);var Q=v,tt=Q,et=u,nt=!!Object.getOwnPropertySymbols&&!et((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&tt&&tt<41})),rt=nt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,it=V,ot=Y,st=R,at=rt,ut=s.Object,ht=at?function(t){return"symbol"==typeof t}:function(t){var e=it("Symbol");return ot(e)&&st(e.prototype,ut(t))},lt=s.String,ct=Y,ft=function(t){try{return lt(t)}catch(t){return"Object"}},dt=s.TypeError,gt=function(t){if(ct(t))return t;throw dt(ft(t)+" is not a function")},mt=c,pt=Y,vt=N,yt=s.TypeError,_t={exports:{}},bt=s,wt=Object.defineProperty,Mt=function(t,e){try{wt(bt,t,{value:e,configurable:!0,writable:!0})}catch(n){bt[t]=e}return e},kt=Mt,xt="__core-js_shared__",Ot=s[xt]||kt(xt,{}),Pt=Ot;(_t.exports=function(t,e){return Pt[t]||(Pt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.20.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var St=Z,Ct=s.Object,jt=function(t){return Ct(St(t))},Tt=jt,zt=k({}.hasOwnProperty),Bt=Object.hasOwn||function(t,e){return zt(Tt(t),e)},Et=k,Gt=0,Zt=Math.random(),At=Et(1..toString),Lt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+At(++Gt+Zt,36)},Xt=s,Yt=_t.exports,Ft=Bt,Nt=Lt,It=nt,Dt=rt,Wt=Yt("wks"),Vt=Xt.Symbol,Rt=Vt&&Vt.for,qt=Dt?Vt:Vt&&Vt.withoutSetter||Nt,Ut=function(t){if(!Ft(Wt,t)||!It&&"string"!=typeof Wt[t]){var e="Symbol."+t;It&&Ft(Vt,t)?Wt[t]=Vt[t]:Wt[t]=Dt&&Rt?Rt(e):qt(e)}return Wt[t]},Ht=c,Kt=N,$t=ht,Jt=function(t,e){var n=t[e];return null==n?void 0:gt(n)},Qt=function(t,e){var n,r;if("string"===e&&pt(n=t.toString)&&!vt(r=mt(n,t)))return r;if(pt(n=t.valueOf)&&!vt(r=mt(n,t)))return r;if("string"!==e&&pt(n=t.toString)&&!vt(r=mt(n,t)))return r;throw yt("Can't convert object to primitive value")},te=Ut,ee=s.TypeError,ne=te("toPrimitive"),re=function(t,e){if(!Kt(t)||$t(t))return t;var n,r=Jt(t,ne);if(r){if(void 0===e&&(e="default"),n=Ht(r,t,e),!Kt(n)||$t(n))return n;throw ee("Can't convert object to primitive value")}return void 0===e&&(e="number"),Qt(t,e)},ie=ht,oe=function(t){var e=re(t,"string");return ie(e)?e:e+""},se=N,ae=s.document,ue=se(ae)&&se(ae.createElement),he=function(t){return ue?ae.createElement(t):{}},le=!h&&!u((function(){return 7!=Object.defineProperty(he("div"),"a",{get:function(){return 7}}).a})),ce=h,fe=c,de=f,ge=y,me=X,pe=oe,ve=Bt,ye=le,_e=Object.getOwnPropertyDescriptor;a.f=ce?_e:function(t,e){if(t=me(t),e=pe(e),ye)try{return _e(t,e)}catch(t){}if(ve(t,e))return ge(!fe(de.f,t,e),t[e])};var be={},we=s,Me=N,ke=we.String,xe=we.TypeError,Oe=function(t){if(Me(t))return t;throw xe(ke(t)+" is not an object")},Pe=h,Se=le,Ce=Oe,je=oe,Te=s.TypeError,ze=Object.defineProperty;be.f=Pe?ze:function(t,e,n){if(Ce(t),e=je(e),Ce(n),Se)try{return ze(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Te("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Be=be,Ee=y,Ge=h?function(t,e,n){return Be.f(t,e,Ee(1,n))}:function(t,e,n){return t[e]=n,t},Ze={exports:{}},Ae=Y,Le=Ot,Xe=k(Function.toString);Ae(Le.inspectSource)||(Le.inspectSource=function(t){return Xe(t)});var Ye,Fe,Ne,Ie=Le.inspectSource,De=Y,We=Ie,Ve=s.WeakMap,Re=De(Ve)&&/native code/.test(We(Ve)),qe=_t.exports,Ue=Lt,He=qe("keys"),Ke={},$e=Re,Je=s,Qe=k,tn=N,en=Ge,nn=Bt,rn=Ot,on=function(t){return He[t]||(He[t]=Ue(t))},sn=Ke,an="Object already initialized",un=Je.TypeError,hn=Je.WeakMap;if($e||rn.state){var ln=rn.state||(rn.state=new hn),cn=Qe(ln.get),fn=Qe(ln.has),dn=Qe(ln.set);Ye=function(t,e){if(fn(ln,t))throw new un(an);return e.facade=t,dn(ln,t,e),e},Fe=function(t){return cn(ln,t)||{}},Ne=function(t){return fn(ln,t)}}else{var gn=on("state");sn[gn]=!0,Ye=function(t,e){if(nn(t,gn))throw new un(an);return e.facade=t,en(t,gn,e),e},Fe=function(t){return nn(t,gn)?t[gn]:{}},Ne=function(t){return nn(t,gn)}}var mn={set:Ye,get:Fe,has:Ne,enforce:function(t){return Ne(t)?Fe(t):Ye(t,{})},getterFor:function(t){return function(e){var n;if(!tn(e)||(n=Fe(e)).type!==t)throw un("Incompatible receiver, "+t+" required");return n}}},pn=h,vn=Bt,yn=Function.prototype,_n=pn&&Object.getOwnPropertyDescriptor,bn=vn(yn,"name"),wn=bn&&"something"===function(){}.name,Mn=bn&&(!pn||pn&&_n(yn,"name").configurable),kn=s,xn=Y,On=Bt,Pn=Ge,Sn=Mt,Cn=Ie,jn={EXISTS:bn,PROPER:wn,CONFIGURABLE:Mn}.CONFIGURABLE,Tn=mn.get,zn=mn.enforce,Bn=String(String).split("String");(Ze.exports=function(t,e,n,r){var i,o=!!r&&!!r.unsafe,s=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet,u=r&&void 0!==r.name?r.name:e;xn(n)&&("Symbol("===String(u).slice(0,7)&&(u="["+String(u).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!On(n,"name")||jn&&n.name!==u)&&Pn(n,"name",u),(i=zn(n)).source||(i.source=Bn.join("string"==typeof u?u:""))),t!==kn?(o?!a&&t[e]&&(s=!0):delete t[e],s?t[e]=n:Pn(t,e,n)):s?t[e]=n:Sn(e,n)})(Function.prototype,"toString",(function(){return xn(this)&&Tn(this).source||Cn(this)}));var En={},Gn=Math.ceil,Zn=Math.floor,An=function(t){var e=+t;return e!=e||0===e?0:(e>0?Zn:Gn)(e)},Ln=An,Xn=Math.max,Yn=Math.min,Fn=function(t,e){var n=Ln(t);return n<0?Xn(n+e,0):Yn(n,e)},Nn=An,In=Math.min,Dn=function(t){return t>0?In(Nn(t),9007199254740991):0},Wn=function(t){return Dn(t.length)},Vn=X,Rn=Fn,qn=Wn,Un=function(t){return function(e,n,r){var i,o=Vn(e),s=qn(o),a=Rn(r,s);if(t&&n!=n){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((t||a in o)&&o[a]===n)return t||a||0;return!t&&-1}},Hn={includes:Un(!0),indexOf:Un(!1)},Kn=Bt,$n=X,Jn=Hn.indexOf,Qn=Ke,tr=k([].push),er=function(t,e){var n,r=$n(t),i=0,o=[];for(n in r)!Kn(Qn,n)&&Kn(r,n)&&tr(o,n);for(;e.length>i;)Kn(r,n=e[i++])&&(~Jn(o,n)||tr(o,n));return o},nr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");En.f=Object.getOwnPropertyNames||function(t){return er(t,nr)};var rr={};rr.f=Object.getOwnPropertySymbols;var ir=V,or=En,sr=rr,ar=Oe,ur=k([].concat),hr=ir("Reflect","ownKeys")||function(t){var e=or.f(ar(t)),n=sr.f;return n?ur(e,n(t)):e},lr=Bt,cr=hr,fr=a,dr=be,gr=u,mr=Y,pr=/#|\.prototype\./,vr=function(t,e){var n=_r[yr(t)];return n==wr||n!=br&&(mr(e)?gr(e):!!e)},yr=vr.normalize=function(t){return String(t).replace(pr,".").toLowerCase()},_r=vr.data={},br=vr.NATIVE="N",wr=vr.POLYFILL="P",Mr=vr,kr=s,xr=a.f,Or=Ge,Pr=Ze.exports,Sr=Mt,Cr=function(t,e,n){for(var r=cr(e),i=dr.f,o=fr.f,s=0;s<r.length;s++){var a=r[s];lr(t,a)||n&&lr(n,a)||i(t,a,o(e,a))}},jr=Mr,Tr=S,zr=Array.isArray||function(t){return"Array"==Tr(t)},Br={};Br[Ut("toStringTag")]="z";var Er=s,Gr="[object z]"===String(Br),Zr=Y,Ar=S,Lr=Ut("toStringTag"),Xr=Er.Object,Yr="Arguments"==Ar(function(){return arguments}()),Fr=k,Nr=u,Ir=Y,Dr=Gr?Ar:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Xr(t),Lr))?n:Yr?Ar(e):"Object"==(r=Ar(e))&&Zr(e.callee)?"Arguments":r},Wr=Ie,Vr=function(){},Rr=[],qr=V("Reflect","construct"),Ur=/^\s*(?:class|function)\b/,Hr=Fr(Ur.exec),Kr=!Ur.exec(Vr),$r=function(t){if(!Ir(t))return!1;try{return qr(Vr,Rr,t),!0}catch(t){return!1}},Jr=function(t){if(!Ir(t))return!1;switch(Dr(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Kr||!!Hr(Ur,Wr(t))}catch(t){return!0}};Jr.sham=!0;var Qr=!qr||Nr((function(){var t;return $r($r.call)||!$r(Object)||!$r((function(){t=!0}))||t}))?Jr:$r,ti=s,ei=zr,ni=Qr,ri=N,ii=Ut("species"),oi=ti.Array,si=function(t){var e;return ei(t)&&(e=t.constructor,(ni(e)&&(e===oi||ei(e.prototype))||ri(e)&&null===(e=e[ii]))&&(e=void 0)),void 0===e?oi:e},ai=oe,ui=be,hi=y,li=u,ci=Q,fi=Ut("species"),di=function(t,e){var n,r,i,o,s,a=t.target,u=t.global,h=t.stat;if(n=u?kr:h?kr[a]||Sr(a,{}):(kr[a]||{}).prototype)for(r in e){if(o=e[r],i=t.noTargetGet?(s=xr(n,r))&&s.value:n[r],!jr(u?r:a+(h?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;Cr(o,i)}(t.sham||i&&i.sham)&&Or(o,"sham",!0),Pr(n,r,o,t)}},gi=s,mi=Fn,pi=An,vi=Wn,yi=jt,_i=function(t,e){return new(si(t))(0===e?0:e)},bi=function(t,e,n){var r=ai(e);r in t?ui.f(t,r,hi(0,n)):t[r]=n},wi=function(t){return ci>=51||!li((function(){var e=[];return(e.constructor={})[fi]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}("splice"),Mi=gi.TypeError,ki=Math.max,xi=Math.min,Oi=9007199254740991,Pi="Maximum allowed length exceeded";function Si(t,e){return new google.maps.Point(~~(.5+(i=t.lng(),(1+i/180)*(2<<e+6))),~~(.5+(n=t.lat(),r=Math.sin(n*Math.PI/180),(1-.5/Math.PI*Math.log((1+r)/(1-r)))*(2<<e+6))));var n,r,i}di({target:"Array",proto:!0,forced:!wi},{splice:function(t,e){var n,r,i,o,s,a,u=yi(this),h=vi(u),l=mi(t,h),c=arguments.length;if(0===c?n=r=0:1===c?(n=0,r=h-l):(n=c-2,r=xi(ki(pi(e),0),h-l)),h+n-r>Oi)throw Mi(Pi);for(i=_i(u,r),o=0;o<r;o++)(s=l+o)in u&&bi(i,o,u[s]);if(i.length=r,n<r){for(o=l;o<h-r;o++)a=o+n,(s=o+r)in u?u[a]=u[s]:delete u[a];for(o=h;o>h-r+n;o--)delete u[o-1]}else if(n>r)for(o=h-r;o>l;o--)a=o+n-1,(s=o+r-1)in u?u[a]=u[s]:delete u[a];for(o=0;o<n;o++)u[o+l]=arguments[o+2];return u.length=h-r+n,i}});var Ci=function(){function t(n,r){e(this,t),this.z=r,this.minX=Math.min(n[0].x,n[1].x),this.maxX=Math.max(n[0].x,n[1].x),this.minY=Math.min(n[0].y,n[1].y),this.maxY=Math.max(n[0].y,n[1].y)}return r(t,[{key:"equals",value:function(t){return this.maxX===t.maxX&&this.maxY===t.maxY&&this.minX===t.minX&&this.minY===t.minY}},{key:"containsPoint",value:function(t){return this.minX<=t.x&&this.maxX>=t.x&&this.minY<=t.y&&this.maxY>=t.y}}]),t}(),ji=function(){function t(n,r){var i=this,o=r.maxZoom,s=void 0===o?19:o,a=r.trackMarkers,u=r.shown,h=void 0===u||u,l=r.borderPadding,c=void 0===l?100:l;e(this,t),this._tileSize=1024,this._map=n,this._mapZoom=n.getZoom(),this._maxZoom=s,this._trackMarkers=a,this._swPadding=new google.maps.Size(-c,c),this._nePadding=new google.maps.Size(c,-c),this._gridWidth={},this._grid=[],this._grid[this._maxZoom]=[],this._numMarkers={},this._numMarkers[this._maxZoom]=0,this.shownMarkers=0,this.shown=h,google.maps.event.addListenerOnce(n,"idle",(function(){i._initialize()}))}return r(t,[{key:"_initialize",value:function(){var t=this._map.mapTypes;for(var e in t)e in t&&t.get(e)&&"number"===t.get(e).maxZoom&&this._map.mapTypes.get(e).maxZoom;google.maps.event.addListener(this._map,"dragend",this._onMapMoveEnd.bind(this)),google.maps.event.addListener(this._map,"idle",this._onMapMoveEnd.bind(this)),google.maps.event.addListener(this._map,"zoom_changed",this._onMapMoveEnd.bind(this)),this.resetManager(),this._shownBounds=this._getMapGridBounds(),google.maps.event.trigger(this,"loaded")}},{key:"_removeOverlay",value:function(t){t.setMap(null),this.shownMarkers--}},{key:"_addOverlay",value:function(t){this.shown&&(t.setMap(this._map),this.shownMarkers++)}},{key:"resetManager",value:function(){for(var t=256,e=0;e<=this._maxZoom;++e)this._grid[e]=[],this._numMarkers[e]=0,this._gridWidth[e]=Math.ceil(t/this._tileSize),t<<=1}},{key:"clearMarkers",value:function(){this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.resetManager()}},{key:"_getTilePoint",value:function(t,e,n){var r=Si(t,e);return new google.maps.Point(Math.floor((r.x+n.width)/this._tileSize),Math.floor((r.y+n.height)/this._tileSize))}},{key:"_addMarkerBatch",value:function(t,e,n){var r=this,i=t.getPosition();t.set("__minZoom",e),this._trackMarkers&&google.maps.event.addListener(t,"changed",(function(t,e,n){r._onMarkerMoved(t,e,n)}));for(var o=this._getTilePoint(i,n,new google.maps.Size(0,0)),s=n;s>=e;s--){this._getGridCellCreate(o.x,o.y,s).push(t),o.x=o.x>>1,o.y=o.y>>1}}},{key:"_isGridPointVisible",value:function(t){var e=this._shownBounds.minY<=t.y&&t.y<=this._shownBounds.maxY,n=this._shownBounds.minX,r=n<=t.x&&t.x<=this._shownBounds.maxX;if(!r&&n<0){var i=this._gridWidth[this._shownBounds.z];r=n+i<=t.x&&t.x<=i-1}return e&&r}},{key:"_onMarkerMoved",value:function(t,e,n){for(var r=this._maxZoom,i=!1,o=this._getTilePoint(e,r,new google.maps.Size(0,0)),s=this._getTilePoint(n,r,new google.maps.Size(0,0));r>=0&&(o.x!==s.x||o.y!==s.y);){var a=this._getGridCellNoCreate(o.x,o.y,r);a&&this._removeMarkerFromCell(a,t)&&this._getGridCellCreate(s.x,s.y,r).push(t),r===this._mapZoom&&(this._isGridPointVisible(o)?this._isGridPointVisible(s)||(this._removeOverlay(t),i=!0):this._isGridPointVisible(s)&&(this._addOverlay(t),i=!0)),o.x=o.x>>1,o.y=o.y>>1,s.x=s.x>>1,s.y=s.y>>1,--r}i&&this._notifyListeners()}},{key:"removeMarker",value:function(t){for(var e=this._maxZoom,n=!1,r=t.getPosition(),i=this._getTilePoint(r,e,new google.maps.Size(0,0));e>=0;){var o=this._getGridCellNoCreate(i.x,i.y,e);o&&this._removeMarkerFromCell(o,t),e===this._mapZoom&&this._isGridPointVisible(i)&&(this._removeOverlay(t),n=!0),i.x=i.x>>1,i.y=i.y>>1,--e}n&&this._notifyListeners(),this._numMarkers[t.get("__minZoom")]--}},{key:"addMarkers",value:function(t,e,n){n=this._getOptmaxZoom(n);for(var r=t.length-1;r>=0;r--)this._addMarkerBatch(t[r],e,n);this._numMarkers[e]+=t.length}},{key:"_getOptmaxZoom",value:function(t){return t||this._maxZoom}},{key:"getMarkerCount",value:function(t){for(var e=0,n=0;n<=t;n++)e+=this._numMarkers[n];return e}},{key:"getMarker",value:function(t,e,n){var r=new google.maps.LatLng(t,e),i=this._getTilePoint(r,n,new google.maps.Size(0,0)),o=new google.maps.Marker({position:r}),s=this._getGridCellNoCreate(i.x,i.y,n);if(void 0!==s)for(var a=0;a<s.length;a++)t===s[a].getPosition().lat()&&e===s[a].getPosition().lng()&&(o=s[a]);return o}},{key:"addMarker",value:function(t,e,n){n=this._getOptmaxZoom(n),this._addMarkerBatch(t,e,n);var r=this._getTilePoint(t.getPosition(),this._mapZoom,new google.maps.Size(0,0));this._isGridPointVisible(r)&&e<=this._shownBounds.z&&this._shownBounds.z<=n&&(this._addOverlay(t),this._notifyListeners()),this._numMarkers[e]++}},{key:"_getGridCellCreate",value:function(t,e,n){return t<0&&(t+=this._gridWidth[n]),this._grid[n]||(this._grid[n]=[]),this._grid[n][t]||(this._grid[n][t]=[]),this._grid[n][t][e]||(this._grid[n][t][e]=[]),this._grid[n][t][e]}},{key:"_getGridCellNoCreate",value:function(t,e,n){return t<0&&(t+=this._gridWidth[n]),this._grid[n]&&this._grid[n][t]&&this._grid[n][t][e]?this._grid[n][t][e]:null}},{key:"_getGridBounds",value:function(t,e,n,r){e=Math.min(e,this._maxZoom);var i=t.getSouthWest(),o=t.getNorthEast(),s=this._getTilePoint(i,e,n),a=this._getTilePoint(o,e,r),u=this._gridWidth[e];(o.lng()<i.lng()||a.x<s.x)&&(s.x-=u),a.x-s.x+1>=u&&(s.x=0,a.x=u-1);var h=new Ci([s,a],e);return h.z=e,h}},{key:"_getMapGridBounds",value:function(){return this._getGridBounds(this._map.getBounds(),this._mapZoom,this._swPadding,this._nePadding)}},{key:"_onMapMoveEnd",value:function(){window.setTimeout(this._updateMarkers.bind(this),0)}},{key:"visible",value:function(){return!!this.shown}},{key:"isHidden",value:function(){return!this.shown}},{key:"show",value:function(){this.shown=!0,this.refresh()}},{key:"hide",value:function(){this.shown=!1,this.refresh()}},{key:"toggle",value:function(){this.shown=!this.shown,this.refresh()}},{key:"refresh",value:function(){this.shownMarkers>0&&this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.show&&this._processAll(this._shownBounds,this._addOverlay.bind(this)),this._notifyListeners()}},{key:"_updateMarkers",value:function(){this._mapZoom=this._map.getZoom();var t=this._getMapGridBounds();t.equals(this._shownBounds)&&t.z===this._shownBounds.z||(t.z!==this._shownBounds.z?(this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.show&&this._processAll(t,this._addOverlay.bind(this))):(this._rectangleDiff(this._shownBounds,t,this._removeCellMarkers.bind(this)),this.show&&this._rectangleDiff(t,this._shownBounds,this._addCellMarkers.bind(this))),this._shownBounds=t,this._notifyListeners())}},{key:"_notifyListeners",value:function(){google.maps.event.trigger(this,"changed",this._shownBounds,this.shownMarkers)}},{key:"_processAll",value:function(t,e){for(var n=t.minX;n<=t.maxX;n++)for(var r=t.minY;r<=t.maxY;r++)this._processCellMarkers(n,r,t.z,e)}},{key:"_processCellMarkers",value:function(t,e,n,r){var i=this._getGridCellNoCreate(t,e,n);if(i)for(var o=i.length-1;o>=0;o--)r(i[o])}},{key:"_removeCellMarkers",value:function(t,e,n){this._processCellMarkers(t,e,n,this._removeOverlay.bind(this))}},{key:"_addCellMarkers",value:function(t,e,n){this._processCellMarkers(t,e,n,this._addOverlay.bind(this))}},{key:"_rectangleDiff",value:function(t,e,n){this._rectangleDiffCoords(t,e,(function(e,r){n(e,r,t.z)}))}},{key:"_rectangleDiffCoords",value:function(t,e,n){var r,i,o=t.minX,s=t.minY,a=t.maxX,u=t.maxY,h=e.minX,l=e.minY,c=e.maxX,f=e.maxY;for(r=o;r<=a;r++){for(i=s;i<=u&&i<l;i++)n(r,i);for(i=Math.max(f+1,s);i<=u;i++)n(r,i)}for(i=Math.max(s,l);i<=Math.min(u,f);i++){for(r=Math.min(a+1,h)-1;r>=o;r--)n(r,i);for(r=Math.max(o,c+1);r<=a;r++)n(r,i)}}},{key:"_removeMarkerFromCell",value:function(t,e){for(var n=0,r=0;r<t.length;++r)t[r]===e&&(t.splice(r--,1),n++);return n}}]),t}();t.MarkerManager=ji,Object.defineProperty(t,"__esModule",{value:!0})}));

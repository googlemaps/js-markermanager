this.google=this.google||{},this.google.maps=this.google.maps||{},this.google.maps.plugins=this.google.maps.plugins||{},this.google.maps.plugins.markermanager=function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){return t&&t.Math==Math&&t},s=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof i&&i)||function(){return this}()||Function("return this")(),a={},u=function(t){try{return!!t()}catch(t){return!0}},h=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l=!u((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),c=l,f=Function.prototype.call,g=c?f.bind(f):function(){return f.apply(f,arguments)},d={},m={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,v=p&&!m.call({1:2},1);d.f=v?function(t){var e=p(this,t);return!!e&&e.enumerable}:m;var y,_,b=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},w=l,M=Function.prototype,k=M.bind,x=M.call,O=w&&k.bind(x,x),P=w?function(t){return t&&O(t)}:function(t){return t&&function(){return x.apply(t,arguments)}},S=P,j=S({}.toString),C=S("".slice),z=function(t){return C(j(t),8,-1)},T=u,B=z,E=Object,G=P("".split),Z=T((function(){return!E("z").propertyIsEnumerable(0)}))?function(t){return"String"==B(t)?G(t,""):E(t)}:E,L=function(t){return null==t},A=L,X=TypeError,Y=function(t){if(A(t))throw X("Can't call method on "+t);return t},F=Z,N=Y,D=function(t){return F(N(t))},I=function(t){return"function"==typeof t},W=I,V="object"==typeof document&&document.all,R=void 0===V&&void 0!==V?function(t){return"object"==typeof t?null!==t:W(t)||t===V}:function(t){return"object"==typeof t?null!==t:W(t)},q=s,U=I,H=function(t){return U(t)?t:void 0},K=function(t,e){return arguments.length<2?H(q[t]):q[t]&&q[t][e]},$=P({}.isPrototypeOf),J=s,Q=K("navigator","userAgent")||"",tt=J.process,et=J.Deno,nt=tt&&tt.versions||et&&et.version,rt=nt&&nt.v8;rt&&(_=(y=rt.split("."))[0]>0&&y[0]<4?1:+(y[0]+y[1])),!_&&Q&&(!(y=Q.match(/Edge\/(\d+)/))||y[1]>=74)&&(y=Q.match(/Chrome\/(\d+)/))&&(_=+y[1]);var it=_,ot=it,st=u,at=!!Object.getOwnPropertySymbols&&!st((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&ot&&ot<41})),ut=at&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ht=K,lt=I,ct=$,ft=Object,gt=ut?function(t){return"symbol"==typeof t}:function(t){var e=ht("Symbol");return lt(e)&&ct(e.prototype,ft(t))},dt=String,mt=function(t){try{return dt(t)}catch(t){return"Object"}},pt=I,vt=mt,yt=TypeError,_t=function(t){if(pt(t))return t;throw yt(vt(t)+" is not a function")},bt=L,wt=g,Mt=I,kt=R,xt=TypeError,Ot={exports:{}},Pt=s,St=Object.defineProperty,jt=function(t,e){try{St(Pt,t,{value:e,configurable:!0,writable:!0})}catch(n){Pt[t]=e}return e},Ct=jt,zt="__core-js_shared__",Tt=s[zt]||Ct(zt,{}),Bt=Tt;(Ot.exports=function(t,e){return Bt[t]||(Bt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.25.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Et=Y,Gt=Object,Zt=function(t){return Gt(Et(t))},Lt=Zt,At=P({}.hasOwnProperty),Xt=Object.hasOwn||function(t,e){return At(Lt(t),e)},Yt=P,Ft=0,Nt=Math.random(),Dt=Yt(1..toString),It=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Dt(++Ft+Nt,36)},Wt=s,Vt=Ot.exports,Rt=Xt,qt=It,Ut=at,Ht=ut,Kt=Vt("wks"),$t=Wt.Symbol,Jt=$t&&$t.for,Qt=Ht?$t:$t&&$t.withoutSetter||qt,te=function(t){if(!Rt(Kt,t)||!Ut&&"string"!=typeof Kt[t]){var e="Symbol."+t;Ut&&Rt($t,t)?Kt[t]=$t[t]:Kt[t]=Ht&&Jt?Jt(e):Qt(e)}return Kt[t]},ee=g,ne=R,re=gt,ie=function(t,e){var n=t[e];return bt(n)?void 0:_t(n)},oe=function(t,e){var n,r;if("string"===e&&Mt(n=t.toString)&&!kt(r=wt(n,t)))return r;if(Mt(n=t.valueOf)&&!kt(r=wt(n,t)))return r;if("string"!==e&&Mt(n=t.toString)&&!kt(r=wt(n,t)))return r;throw xt("Can't convert object to primitive value")},se=TypeError,ae=te("toPrimitive"),ue=function(t,e){if(!ne(t)||re(t))return t;var n,r=ie(t,ae);if(r){if(void 0===e&&(e="default"),n=ee(r,t,e),!ne(n)||re(n))return n;throw se("Can't convert object to primitive value")}return void 0===e&&(e="number"),oe(t,e)},he=gt,le=function(t){var e=ue(t,"string");return he(e)?e:e+""},ce=R,fe=s.document,ge=ce(fe)&&ce(fe.createElement),de=function(t){return ge?fe.createElement(t):{}},me=!h&&!u((function(){return 7!=Object.defineProperty(de("div"),"a",{get:function(){return 7}}).a})),pe=h,ve=g,ye=d,_e=b,be=D,we=le,Me=Xt,ke=me,xe=Object.getOwnPropertyDescriptor;a.f=pe?xe:function(t,e){if(t=be(t),e=we(e),ke)try{return xe(t,e)}catch(t){}if(Me(t,e))return _e(!ve(ye.f,t,e),t[e])};var Oe={},Pe=h&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Se=R,je=String,Ce=TypeError,ze=function(t){if(Se(t))return t;throw Ce(je(t)+" is not an object")},Te=h,Be=me,Ee=Pe,Ge=ze,Ze=le,Le=TypeError,Ae=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Ye="enumerable",Fe="configurable",Ne="writable";Oe.f=Te?Ee?function(t,e,n){if(Ge(t),e=Ze(e),Ge(n),"function"==typeof t&&"prototype"===e&&"value"in n&&Ne in n&&!n.writable){var r=Xe(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:Fe in n?n.configurable:r.configurable,enumerable:Ye in n?n.enumerable:r.enumerable,writable:!1})}return Ae(t,e,n)}:Ae:function(t,e,n){if(Ge(t),e=Ze(e),Ge(n),Be)try{return Ae(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Le("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var De=Oe,Ie=b,We=h?function(t,e,n){return De.f(t,e,Ie(1,n))}:function(t,e,n){return t[e]=n,t},Ve={exports:{}},Re=h,qe=Xt,Ue=Function.prototype,He=Re&&Object.getOwnPropertyDescriptor,Ke=qe(Ue,"name"),$e={EXISTS:Ke,PROPER:Ke&&"something"===function(){}.name,CONFIGURABLE:Ke&&(!Re||Re&&He(Ue,"name").configurable)},Je=I,Qe=Tt,tn=P(Function.toString);Je(Qe.inspectSource)||(Qe.inspectSource=function(t){return tn(t)});var en,nn,rn,on=Qe.inspectSource,sn=I,an=s.WeakMap,un=sn(an)&&/native code/.test(String(an)),hn=Ot.exports,ln=It,cn=hn("keys"),fn={},gn=un,dn=s,mn=P,pn=R,vn=We,yn=Xt,_n=Tt,bn=function(t){return cn[t]||(cn[t]=ln(t))},wn=fn,Mn="Object already initialized",kn=dn.TypeError,xn=dn.WeakMap;if(gn||_n.state){var On=_n.state||(_n.state=new xn),Pn=mn(On.get),Sn=mn(On.has),jn=mn(On.set);en=function(t,e){if(Sn(On,t))throw kn(Mn);return e.facade=t,jn(On,t,e),e},nn=function(t){return Pn(On,t)||{}},rn=function(t){return Sn(On,t)}}else{var Cn=bn("state");wn[Cn]=!0,en=function(t,e){if(yn(t,Cn))throw kn(Mn);return e.facade=t,vn(t,Cn,e),e},nn=function(t){return yn(t,Cn)?t[Cn]:{}},rn=function(t){return yn(t,Cn)}}var zn={set:en,get:nn,has:rn,enforce:function(t){return rn(t)?nn(t):en(t,{})},getterFor:function(t){return function(e){var n;if(!pn(e)||(n=nn(e)).type!==t)throw kn("Incompatible receiver, "+t+" required");return n}}},Tn=u,Bn=I,En=Xt,Gn=h,Zn=$e.CONFIGURABLE,Ln=on,An=zn.enforce,Xn=zn.get,Yn=Object.defineProperty,Fn=Gn&&!Tn((function(){return 8!==Yn((function(){}),"length",{value:8}).length})),Nn=String(String).split("String"),Dn=Ve.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!En(t,"name")||Zn&&t.name!==e)&&(Gn?Yn(t,"name",{value:e,configurable:!0}):t.name=e),Fn&&n&&En(n,"arity")&&t.length!==n.arity&&Yn(t,"length",{value:n.arity});try{n&&En(n,"constructor")&&n.constructor?Gn&&Yn(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=An(t);return En(r,"source")||(r.source=Nn.join("string"==typeof e?e:"")),t};Function.prototype.toString=Dn((function(){return Bn(this)&&Xn(this).source||Ln(this)}),"toString");var In=I,Wn=Oe,Vn=Ve.exports,Rn=jt,qn={},Un=Math.ceil,Hn=Math.floor,Kn=Math.trunc||function(t){var e=+t;return(e>0?Hn:Un)(e)},$n=function(t){var e=+t;return e!=e||0===e?0:Kn(e)},Jn=$n,Qn=Math.max,tr=Math.min,er=function(t,e){var n=Jn(t);return n<0?Qn(n+e,0):tr(n,e)},nr=$n,rr=Math.min,ir=function(t){return t>0?rr(nr(t),9007199254740991):0},or=function(t){return ir(t.length)},sr=D,ar=er,ur=or,hr=function(t){return function(e,n,r){var i,o=sr(e),s=ur(o),a=ar(r,s);if(t&&n!=n){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((t||a in o)&&o[a]===n)return t||a||0;return!t&&-1}},lr={includes:hr(!0),indexOf:hr(!1)},cr=Xt,fr=D,gr=lr.indexOf,dr=fn,mr=P([].push),pr=function(t,e){var n,r=fr(t),i=0,o=[];for(n in r)!cr(dr,n)&&cr(r,n)&&mr(o,n);for(;e.length>i;)cr(r,n=e[i++])&&(~gr(o,n)||mr(o,n));return o},vr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");qn.f=Object.getOwnPropertyNames||function(t){return pr(t,vr)};var yr={};yr.f=Object.getOwnPropertySymbols;var _r=K,br=qn,wr=yr,Mr=ze,kr=P([].concat),xr=_r("Reflect","ownKeys")||function(t){var e=br.f(Mr(t)),n=wr.f;return n?kr(e,n(t)):e},Or=Xt,Pr=xr,Sr=a,jr=Oe,Cr=u,zr=I,Tr=/#|\.prototype\./,Br=function(t,e){var n=Gr[Er(t)];return n==Lr||n!=Zr&&(zr(e)?Cr(e):!!e)},Er=Br.normalize=function(t){return String(t).replace(Tr,".").toLowerCase()},Gr=Br.data={},Zr=Br.NATIVE="N",Lr=Br.POLYFILL="P",Ar=Br,Xr=s,Yr=a.f,Fr=We,Nr=function(t,e,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:e;if(In(n)&&Vn(n,o,r),r.global)i?t[e]=n:Rn(e,n);else{try{r.unsafe?t[e]&&(i=!0):delete t[e]}catch(t){}i?t[e]=n:Wn.f(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t},Dr=jt,Ir=function(t,e,n){for(var r=Pr(e),i=jr.f,o=Sr.f,s=0;s<r.length;s++){var a=r[s];Or(t,a)||n&&Or(n,a)||i(t,a,o(e,a))}},Wr=Ar,Vr=z,Rr=Array.isArray||function(t){return"Array"==Vr(t)},qr=h,Ur=Rr,Hr=TypeError,Kr=Object.getOwnPropertyDescriptor,$r=qr&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}()?function(t,e){if(Ur(t)&&!Kr(t,"length").writable)throw Hr("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e},Jr=TypeError,Qr={};Qr[te("toStringTag")]="z";var ti="[object z]"===String(Qr),ei=I,ni=z,ri=te("toStringTag"),ii=Object,oi="Arguments"==ni(function(){return arguments}()),si=P,ai=u,ui=I,hi=ti?ni:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=ii(t),ri))?n:oi?ni(e):"Object"==(r=ni(e))&&ei(e.callee)?"Arguments":r},li=on,ci=function(){},fi=[],gi=K("Reflect","construct"),di=/^\s*(?:class|function)\b/,mi=si(di.exec),pi=!di.exec(ci),vi=function(t){if(!ui(t))return!1;try{return gi(ci,fi,t),!0}catch(t){return!1}},yi=function(t){if(!ui(t))return!1;switch(hi(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return pi||!!mi(di,li(t))}catch(t){return!0}};yi.sham=!0;var _i=!gi||ai((function(){var t;return vi(vi.call)||!vi(Object)||!vi((function(){t=!0}))||t}))?yi:vi,bi=Rr,wi=_i,Mi=R,ki=te("species"),xi=Array,Oi=function(t){var e;return bi(t)&&(e=t.constructor,(wi(e)&&(e===xi||bi(e.prototype))||Mi(e)&&null===(e=e[ki]))&&(e=void 0)),void 0===e?xi:e},Pi=le,Si=Oe,ji=b,Ci=mt,zi=TypeError,Ti=u,Bi=it,Ei=te("species"),Gi=function(t,e){var n,r,i,o,s,a=t.target,u=t.global,h=t.stat;if(n=u?Xr:h?Xr[a]||Dr(a,{}):(Xr[a]||{}).prototype)for(r in e){if(o=e[r],i=t.dontCallGetSet?(s=Yr(n,r))&&s.value:n[r],!Wr(u?r:a+(h?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;Ir(o,i)}(t.sham||i&&i.sham)&&Fr(o,"sham",!0),Nr(n,r,o,t)}},Zi=Zt,Li=er,Ai=$n,Xi=or,Yi=$r,Fi=function(t){if(t>9007199254740991)throw Jr("Maximum allowed index exceeded");return t},Ni=function(t,e){return new(Oi(t))(0===e?0:e)},Di=function(t,e,n){var r=Pi(e);r in t?Si.f(t,r,ji(0,n)):t[r]=n},Ii=function(t,e){if(!delete t[e])throw zi("Cannot delete property "+Ci(e)+" of "+Ci(t))},Wi=function(t){return Bi>=51||!Ti((function(){var e=[];return(e.constructor={})[Ei]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}("splice"),Vi=Math.max,Ri=Math.min;function qi(t,e){return new google.maps.Point(~~(.5+(i=t.lng(),(1+i/180)*(2<<e+6))),~~(.5+(n=t.lat(),r=Math.sin(n*Math.PI/180),(1-.5/Math.PI*Math.log((1+r)/(1-r)))*(2<<e+6))));var n,r,i}Gi({target:"Array",proto:!0,forced:!Wi},{splice:function(t,e){var n,r,i,o,s,a,u=Zi(this),h=Xi(u),l=Li(t,h),c=arguments.length;for(0===c?n=r=0:1===c?(n=0,r=h-l):(n=c-2,r=Ri(Vi(Ai(e),0),h-l)),Fi(h+n-r),i=Ni(u,r),o=0;o<r;o++)(s=l+o)in u&&Di(i,o,u[s]);if(i.length=r,n<r){for(o=l;o<h-r;o++)a=o+n,(s=o+r)in u?u[a]=u[s]:Ii(u,a);for(o=h;o>h-r+n;o--)Ii(u,o-1)}else if(n>r)for(o=h-r;o>l;o--)a=o+n-1,(s=o+r-1)in u?u[a]=u[s]:Ii(u,a);for(o=0;o<n;o++)u[o+l]=arguments[o+2];return Yi(u,h-r+n),i}});var Ui=function(){function t(n,r){e(this,t),this.z=r,this.minX=Math.min(n[0].x,n[1].x),this.maxX=Math.max(n[0].x,n[1].x),this.minY=Math.min(n[0].y,n[1].y),this.maxY=Math.max(n[0].y,n[1].y)}return r(t,[{key:"equals",value:function(t){return this.maxX===t.maxX&&this.maxY===t.maxY&&this.minX===t.minX&&this.minY===t.minY}},{key:"containsPoint",value:function(t){return this.minX<=t.x&&this.maxX>=t.x&&this.minY<=t.y&&this.maxY>=t.y}}]),t}(),Hi=function(){function t(n,r){var i=this,o=r.maxZoom,s=void 0===o?19:o,a=r.trackMarkers,u=r.shown,h=void 0===u||u,l=r.borderPadding,c=void 0===l?100:l;e(this,t),this._tileSize=1024,this._map=n,this._mapZoom=n.getZoom(),this._maxZoom=s,this._trackMarkers=a,this._swPadding=new google.maps.Size(-c,c),this._nePadding=new google.maps.Size(c,-c),this._gridWidth={},this._grid=[],this._grid[this._maxZoom]=[],this._numMarkers={},this._numMarkers[this._maxZoom]=0,this.shownMarkers=0,this.shown=h,google.maps.event.addListenerOnce(n,"idle",(function(){i._initialize()}))}return r(t,[{key:"_initialize",value:function(){var t=this._map.mapTypes;for(var e in t)e in t&&t.get(e)&&"number"===t.get(e).maxZoom&&this._map.mapTypes.get(e).maxZoom;google.maps.event.addListener(this._map,"dragend",this._onMapMoveEnd.bind(this)),google.maps.event.addListener(this._map,"idle",this._onMapMoveEnd.bind(this)),google.maps.event.addListener(this._map,"zoom_changed",this._onMapMoveEnd.bind(this)),this.resetManager(),this._shownBounds=this._getMapGridBounds(),google.maps.event.trigger(this,"loaded")}},{key:"_removeOverlay",value:function(t){t.setMap(null),this.shownMarkers--}},{key:"_addOverlay",value:function(t){this.shown&&(t.setMap(this._map),this.shownMarkers++)}},{key:"resetManager",value:function(){for(var t=256,e=0;e<=this._maxZoom;++e)this._grid[e]=[],this._numMarkers[e]=0,this._gridWidth[e]=Math.ceil(t/this._tileSize),t<<=1}},{key:"clearMarkers",value:function(){this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.resetManager()}},{key:"_getTilePoint",value:function(t,e,n){var r=qi(t,e);return new google.maps.Point(Math.floor((r.x+n.width)/this._tileSize),Math.floor((r.y+n.height)/this._tileSize))}},{key:"_addMarkerBatch",value:function(t,e,n){var r=this,i=t.getPosition();t.set("__minZoom",e),this._trackMarkers&&google.maps.event.addListener(t,"changed",(function(t,e,n){r._onMarkerMoved(t,e,n)}));for(var o=this._getTilePoint(i,n,new google.maps.Size(0,0)),s=n;s>=e;s--){this._getGridCellCreate(o.x,o.y,s).push(t),o.x=o.x>>1,o.y=o.y>>1}}},{key:"_isGridPointVisible",value:function(t){var e=this._shownBounds.minY<=t.y&&t.y<=this._shownBounds.maxY,n=this._shownBounds.minX,r=n<=t.x&&t.x<=this._shownBounds.maxX;if(!r&&n<0){var i=this._gridWidth[this._shownBounds.z];r=n+i<=t.x&&t.x<=i-1}return e&&r}},{key:"_onMarkerMoved",value:function(t,e,n){for(var r=this._maxZoom,i=!1,o=this._getTilePoint(e,r,new google.maps.Size(0,0)),s=this._getTilePoint(n,r,new google.maps.Size(0,0));r>=0&&(o.x!==s.x||o.y!==s.y);){var a=this._getGridCellNoCreate(o.x,o.y,r);a&&this._removeMarkerFromCell(a,t)&&this._getGridCellCreate(s.x,s.y,r).push(t),r===this._mapZoom&&(this._isGridPointVisible(o)?this._isGridPointVisible(s)||(this._removeOverlay(t),i=!0):this._isGridPointVisible(s)&&(this._addOverlay(t),i=!0)),o.x=o.x>>1,o.y=o.y>>1,s.x=s.x>>1,s.y=s.y>>1,--r}i&&this._notifyListeners()}},{key:"removeMarker",value:function(t){for(var e=this._maxZoom,n=!1,r=t.getPosition(),i=this._getTilePoint(r,e,new google.maps.Size(0,0));e>=0;){var o=this._getGridCellNoCreate(i.x,i.y,e);o&&this._removeMarkerFromCell(o,t),e===this._mapZoom&&this._isGridPointVisible(i)&&(this._removeOverlay(t),n=!0),i.x=i.x>>1,i.y=i.y>>1,--e}n&&this._notifyListeners(),this._numMarkers[t.get("__minZoom")]--}},{key:"addMarkers",value:function(t,e,n){n=this._getOptmaxZoom(n);for(var r=t.length-1;r>=0;r--)this._addMarkerBatch(t[r],e,n);this._numMarkers[e]+=t.length}},{key:"_getOptmaxZoom",value:function(t){return t||this._maxZoom}},{key:"getMarkerCount",value:function(t){for(var e=0,n=0;n<=t;n++)e+=this._numMarkers[n];return e}},{key:"getMarker",value:function(t,e,n){var r=new google.maps.LatLng(t,e),i=this._getTilePoint(r,n,new google.maps.Size(0,0)),o=new google.maps.Marker({position:r}),s=this._getGridCellNoCreate(i.x,i.y,n);if(void 0!==s)for(var a=0;a<s.length;a++)t===s[a].getPosition().lat()&&e===s[a].getPosition().lng()&&(o=s[a]);return o}},{key:"addMarker",value:function(t,e,n){n=this._getOptmaxZoom(n),this._addMarkerBatch(t,e,n);var r=this._getTilePoint(t.getPosition(),this._mapZoom,new google.maps.Size(0,0));this._isGridPointVisible(r)&&e<=this._shownBounds.z&&this._shownBounds.z<=n&&(this._addOverlay(t),this._notifyListeners()),this._numMarkers[e]++}},{key:"_getGridCellCreate",value:function(t,e,n){return t<0&&(t+=this._gridWidth[n]),this._grid[n]||(this._grid[n]=[]),this._grid[n][t]||(this._grid[n][t]=[]),this._grid[n][t][e]||(this._grid[n][t][e]=[]),this._grid[n][t][e]}},{key:"_getGridCellNoCreate",value:function(t,e,n){return t<0&&(t+=this._gridWidth[n]),this._grid[n]&&this._grid[n][t]&&this._grid[n][t][e]?this._grid[n][t][e]:null}},{key:"_getGridBounds",value:function(t,e,n,r){e=Math.min(e,this._maxZoom);var i=t.getSouthWest(),o=t.getNorthEast(),s=this._getTilePoint(i,e,n),a=this._getTilePoint(o,e,r),u=this._gridWidth[e];(o.lng()<i.lng()||a.x<s.x)&&(s.x-=u),a.x-s.x+1>=u&&(s.x=0,a.x=u-1);var h=new Ui([s,a],e);return h.z=e,h}},{key:"_getMapGridBounds",value:function(){return this._getGridBounds(this._map.getBounds(),this._mapZoom,this._swPadding,this._nePadding)}},{key:"_onMapMoveEnd",value:function(){window.setTimeout(this._updateMarkers.bind(this),0)}},{key:"visible",value:function(){return!!this.shown}},{key:"isHidden",value:function(){return!this.shown}},{key:"show",value:function(){this.shown=!0,this.refresh()}},{key:"hide",value:function(){this.shown=!1,this.refresh()}},{key:"toggle",value:function(){this.shown=!this.shown,this.refresh()}},{key:"refresh",value:function(){this.shownMarkers>0&&this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.show&&this._processAll(this._shownBounds,this._addOverlay.bind(this)),this._notifyListeners()}},{key:"_updateMarkers",value:function(){this._mapZoom=this._map.getZoom();var t=this._getMapGridBounds();t.equals(this._shownBounds)&&t.z===this._shownBounds.z||(t.z!==this._shownBounds.z?(this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.show&&this._processAll(t,this._addOverlay.bind(this))):(this._rectangleDiff(this._shownBounds,t,this._removeCellMarkers.bind(this)),this.show&&this._rectangleDiff(t,this._shownBounds,this._addCellMarkers.bind(this))),this._shownBounds=t,this._notifyListeners())}},{key:"_notifyListeners",value:function(){google.maps.event.trigger(this,"changed",this._shownBounds,this.shownMarkers)}},{key:"_processAll",value:function(t,e){for(var n=t.minX;n<=t.maxX;n++)for(var r=t.minY;r<=t.maxY;r++)this._processCellMarkers(n,r,t.z,e)}},{key:"_processCellMarkers",value:function(t,e,n,r){var i=this._getGridCellNoCreate(t,e,n);if(i)for(var o=i.length-1;o>=0;o--)r(i[o])}},{key:"_removeCellMarkers",value:function(t,e,n){this._processCellMarkers(t,e,n,this._removeOverlay.bind(this))}},{key:"_addCellMarkers",value:function(t,e,n){this._processCellMarkers(t,e,n,this._addOverlay.bind(this))}},{key:"_rectangleDiff",value:function(t,e,n){this._rectangleDiffCoords(t,e,(function(e,r){n(e,r,t.z)}))}},{key:"_rectangleDiffCoords",value:function(t,e,n){var r,i,o=t.minX,s=t.minY,a=t.maxX,u=t.maxY,h=e.minX,l=e.minY,c=e.maxX,f=e.maxY;for(r=o;r<=a;r++){for(i=s;i<=u&&i<l;i++)n(r,i);for(i=Math.max(f+1,s);i<=u;i++)n(r,i)}for(i=Math.max(s,l);i<=Math.min(u,f);i++){for(r=Math.min(a+1,h)-1;r>=o;r--)n(r,i);for(r=Math.max(o,c+1);r<=a;r++)n(r,i)}}},{key:"_removeMarkerFromCell",value:function(t,e){for(var n=0,r=0;r<t.length;++r)t[r]===e&&(t.splice(r--,1),n++);return n}}]),t}();return t.MarkerManager=Hi,Object.defineProperty(t,"__esModule",{value:!0}),t}({});
//# sourceMappingURL=index.dev.js.map

this.google=this.google||{},this.google.maps=this.google.maps||{},this.google.maps.plugins=this.google.maps.plugins||{},this.google.maps.plugins.markermanager=function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){return t&&t.Math==Math&&t},s=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof i&&i)||function(){return this}()||Function("return this")(),a={},u=function(t){try{return!!t()}catch(t){return!0}},h=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l=!u((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),c=l,f=Function.prototype.call,g=c?f.bind(f):function(){return f.apply(f,arguments)},d={},m={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,y=p&&!m.call({1:2},1);d.f=y?function(t){var e=p(this,t);return!!e&&e.enumerable}:m;var v,_,b=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},w=l,M=Function.prototype,k=M.call,x=w&&M.bind.bind(k,k),O=function(t){return w?x(t):function(){return k.apply(t,arguments)}},S=O,P=S({}.toString),j=S("".slice),C=function(t){return j(P(t),8,-1)},T=C,z=O,B=function(t){if("Function"===T(t))return z(t)},E=u,G=C,L=Object,Z=B("".split),A=E((function(){return!L("z").propertyIsEnumerable(0)}))?function(t){return"String"==G(t)?Z(t,""):L(t)}:L,D=function(t){return null==t},F=D,X=TypeError,Y=function(t){if(F(t))throw X("Can't call method on "+t);return t},I=A,N=Y,W=function(t){return I(N(t))},V="object"==typeof document&&document.all,R={all:V,IS_HTMLDDA:void 0===V&&void 0!==V},H=R.all,q=R.IS_HTMLDDA?function(t){return"function"==typeof t||t===H}:function(t){return"function"==typeof t},U=q,K=R.all,$=R.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:U(t)||t===K}:function(t){return"object"==typeof t?null!==t:U(t)},J=s,Q=q,tt=function(t){return Q(t)?t:void 0},et=function(t,e){return arguments.length<2?tt(J[t]):J[t]&&J[t][e]},nt=B({}.isPrototypeOf),rt=s,it=et("navigator","userAgent")||"",ot=rt.process,st=rt.Deno,at=ot&&ot.versions||st&&st.version,ut=at&&at.v8;ut&&(_=(v=ut.split("."))[0]>0&&v[0]<4?1:+(v[0]+v[1])),!_&&it&&(!(v=it.match(/Edge\/(\d+)/))||v[1]>=74)&&(v=it.match(/Chrome\/(\d+)/))&&(_=+v[1]);var ht=_,lt=ht,ct=u,ft=!!Object.getOwnPropertySymbols&&!ct((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&lt&&lt<41})),gt=ft&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,dt=et,mt=q,pt=nt,yt=Object,vt=gt?function(t){return"symbol"==typeof t}:function(t){var e=dt("Symbol");return mt(e)&&pt(e.prototype,yt(t))},_t=String,bt=function(t){try{return _t(t)}catch(t){return"Object"}},wt=q,Mt=bt,kt=TypeError,xt=function(t){if(wt(t))return t;throw kt(Mt(t)+" is not a function")},Ot=D,St=g,Pt=q,jt=$,Ct=TypeError,Tt={exports:{}},zt=s,Bt=Object.defineProperty,Et=function(t,e){try{Bt(zt,t,{value:e,configurable:!0,writable:!0})}catch(n){zt[t]=e}return e},Gt=Et,Lt="__core-js_shared__",Zt=s[Lt]||Gt(Lt,{}),At=Zt;(Tt.exports=function(t,e){return At[t]||(At[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.25.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",source:"https://github.com/zloirock/core-js"});var Dt=Y,Ft=Object,Xt=function(t){return Ft(Dt(t))},Yt=Xt,It=B({}.hasOwnProperty),Nt=Object.hasOwn||function(t,e){return It(Yt(t),e)},Wt=B,Vt=0,Rt=Math.random(),Ht=Wt(1..toString),qt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Ht(++Vt+Rt,36)},Ut=s,Kt=Tt.exports,$t=Nt,Jt=qt,Qt=ft,te=gt,ee=Kt("wks"),ne=Ut.Symbol,re=ne&&ne.for,ie=te?ne:ne&&ne.withoutSetter||Jt,oe=function(t){if(!$t(ee,t)||!Qt&&"string"!=typeof ee[t]){var e="Symbol."+t;Qt&&$t(ne,t)?ee[t]=ne[t]:ee[t]=te&&re?re(e):ie(e)}return ee[t]},se=g,ae=$,ue=vt,he=function(t,e){var n=t[e];return Ot(n)?void 0:xt(n)},le=function(t,e){var n,r;if("string"===e&&Pt(n=t.toString)&&!jt(r=St(n,t)))return r;if(Pt(n=t.valueOf)&&!jt(r=St(n,t)))return r;if("string"!==e&&Pt(n=t.toString)&&!jt(r=St(n,t)))return r;throw Ct("Can't convert object to primitive value")},ce=TypeError,fe=oe("toPrimitive"),ge=function(t,e){if(!ae(t)||ue(t))return t;var n,r=he(t,fe);if(r){if(void 0===e&&(e="default"),n=se(r,t,e),!ae(n)||ue(n))return n;throw ce("Can't convert object to primitive value")}return void 0===e&&(e="number"),le(t,e)},de=vt,me=function(t){var e=ge(t,"string");return de(e)?e:e+""},pe=$,ye=s.document,ve=pe(ye)&&pe(ye.createElement),_e=function(t){return ve?ye.createElement(t):{}},be=!h&&!u((function(){return 7!=Object.defineProperty(_e("div"),"a",{get:function(){return 7}}).a})),we=h,Me=g,ke=d,xe=b,Oe=W,Se=me,Pe=Nt,je=be,Ce=Object.getOwnPropertyDescriptor;a.f=we?Ce:function(t,e){if(t=Oe(t),e=Se(e),je)try{return Ce(t,e)}catch(t){}if(Pe(t,e))return xe(!Me(ke.f,t,e),t[e])};var Te={},ze=h&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Be=$,Ee=String,Ge=TypeError,Le=function(t){if(Be(t))return t;throw Ge(Ee(t)+" is not an object")},Ze=h,Ae=be,De=ze,Fe=Le,Xe=me,Ye=TypeError,Ie=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,We="enumerable",Ve="configurable",Re="writable";Te.f=Ze?De?function(t,e,n){if(Fe(t),e=Xe(e),Fe(n),"function"==typeof t&&"prototype"===e&&"value"in n&&Re in n&&!n.writable){var r=Ne(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:Ve in n?n.configurable:r.configurable,enumerable:We in n?n.enumerable:r.enumerable,writable:!1})}return Ie(t,e,n)}:Ie:function(t,e,n){if(Fe(t),e=Xe(e),Fe(n),Ae)try{return Ie(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Ye("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var He=Te,qe=b,Ue=h?function(t,e,n){return He.f(t,e,qe(1,n))}:function(t,e,n){return t[e]=n,t},Ke={exports:{}},$e=h,Je=Nt,Qe=Function.prototype,tn=$e&&Object.getOwnPropertyDescriptor,en=Je(Qe,"name"),nn={EXISTS:en,PROPER:en&&"something"===function(){}.name,CONFIGURABLE:en&&(!$e||$e&&tn(Qe,"name").configurable)},rn=q,on=Zt,sn=B(Function.toString);rn(on.inspectSource)||(on.inspectSource=function(t){return sn(t)});var an,un,hn,ln=on.inspectSource,cn=q,fn=s.WeakMap,gn=cn(fn)&&/native code/.test(String(fn)),dn=Tt.exports,mn=qt,pn=dn("keys"),yn={},vn=gn,_n=s,bn=$,wn=Ue,Mn=Nt,kn=Zt,xn=function(t){return pn[t]||(pn[t]=mn(t))},On=yn,Sn="Object already initialized",Pn=_n.TypeError,jn=_n.WeakMap;if(vn||kn.state){var Cn=kn.state||(kn.state=new jn);Cn.get=Cn.get,Cn.has=Cn.has,Cn.set=Cn.set,an=function(t,e){if(Cn.has(t))throw Pn(Sn);return e.facade=t,Cn.set(t,e),e},un=function(t){return Cn.get(t)||{}},hn=function(t){return Cn.has(t)}}else{var Tn=xn("state");On[Tn]=!0,an=function(t,e){if(Mn(t,Tn))throw Pn(Sn);return e.facade=t,wn(t,Tn,e),e},un=function(t){return Mn(t,Tn)?t[Tn]:{}},hn=function(t){return Mn(t,Tn)}}var zn={set:an,get:un,has:hn,enforce:function(t){return hn(t)?un(t):an(t,{})},getterFor:function(t){return function(e){var n;if(!bn(e)||(n=un(e)).type!==t)throw Pn("Incompatible receiver, "+t+" required");return n}}},Bn=u,En=q,Gn=Nt,Ln=h,Zn=nn.CONFIGURABLE,An=ln,Dn=zn.enforce,Fn=zn.get,Xn=Object.defineProperty,Yn=Ln&&!Bn((function(){return 8!==Xn((function(){}),"length",{value:8}).length})),In=String(String).split("String"),Nn=Ke.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!Gn(t,"name")||Zn&&t.name!==e)&&(Ln?Xn(t,"name",{value:e,configurable:!0}):t.name=e),Yn&&n&&Gn(n,"arity")&&t.length!==n.arity&&Xn(t,"length",{value:n.arity});try{n&&Gn(n,"constructor")&&n.constructor?Ln&&Xn(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=Dn(t);return Gn(r,"source")||(r.source=In.join("string"==typeof e?e:"")),t};Function.prototype.toString=Nn((function(){return En(this)&&Fn(this).source||An(this)}),"toString");var Wn=q,Vn=Te,Rn=Ke.exports,Hn=Et,qn={},Un=Math.ceil,Kn=Math.floor,$n=Math.trunc||function(t){var e=+t;return(e>0?Kn:Un)(e)},Jn=function(t){var e=+t;return e!=e||0===e?0:$n(e)},Qn=Jn,tr=Math.max,er=Math.min,nr=function(t,e){var n=Qn(t);return n<0?tr(n+e,0):er(n,e)},rr=Jn,ir=Math.min,or=function(t){return t>0?ir(rr(t),9007199254740991):0},sr=function(t){return or(t.length)},ar=W,ur=nr,hr=sr,lr=function(t){return function(e,n,r){var i,o=ar(e),s=hr(o),a=ur(r,s);if(t&&n!=n){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((t||a in o)&&o[a]===n)return t||a||0;return!t&&-1}},cr={includes:lr(!0),indexOf:lr(!1)},fr=Nt,gr=W,dr=cr.indexOf,mr=yn,pr=B([].push),yr=function(t,e){var n,r=gr(t),i=0,o=[];for(n in r)!fr(mr,n)&&fr(r,n)&&pr(o,n);for(;e.length>i;)fr(r,n=e[i++])&&(~dr(o,n)||pr(o,n));return o},vr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");qn.f=Object.getOwnPropertyNames||function(t){return yr(t,vr)};var _r={};_r.f=Object.getOwnPropertySymbols;var br=et,wr=qn,Mr=_r,kr=Le,xr=B([].concat),Or=br("Reflect","ownKeys")||function(t){var e=wr.f(kr(t)),n=Mr.f;return n?xr(e,n(t)):e},Sr=Nt,Pr=Or,jr=a,Cr=Te,Tr=u,zr=q,Br=/#|\.prototype\./,Er=function(t,e){var n=Lr[Gr(t)];return n==Ar||n!=Zr&&(zr(e)?Tr(e):!!e)},Gr=Er.normalize=function(t){return String(t).replace(Br,".").toLowerCase()},Lr=Er.data={},Zr=Er.NATIVE="N",Ar=Er.POLYFILL="P",Dr=Er,Fr=s,Xr=a.f,Yr=Ue,Ir=function(t,e,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:e;if(Wn(n)&&Rn(n,o,r),r.global)i?t[e]=n:Hn(e,n);else{try{r.unsafe?t[e]&&(i=!0):delete t[e]}catch(t){}i?t[e]=n:Vn.f(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t},Nr=Et,Wr=function(t,e,n){for(var r=Pr(e),i=Cr.f,o=jr.f,s=0;s<r.length;s++){var a=r[s];Sr(t,a)||n&&Sr(n,a)||i(t,a,o(e,a))}},Vr=Dr,Rr=C,Hr=Array.isArray||function(t){return"Array"==Rr(t)},qr=h,Ur=Hr,Kr=TypeError,$r=Object.getOwnPropertyDescriptor,Jr=qr&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}()?function(t,e){if(Ur(t)&&!$r(t,"length").writable)throw Kr("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e},Qr=TypeError,ti={};ti[oe("toStringTag")]="z";var ei="[object z]"===String(ti),ni=q,ri=C,ii=oe("toStringTag"),oi=Object,si="Arguments"==ri(function(){return arguments}()),ai=B,ui=u,hi=q,li=ei?ri:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=oi(t),ii))?n:si?ri(e):"Object"==(r=ri(e))&&ni(e.callee)?"Arguments":r},ci=ln,fi=function(){},gi=[],di=et("Reflect","construct"),mi=/^\s*(?:class|function)\b/,pi=ai(mi.exec),yi=!mi.exec(fi),vi=function(t){if(!hi(t))return!1;try{return di(fi,gi,t),!0}catch(t){return!1}},_i=function(t){if(!hi(t))return!1;switch(li(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return yi||!!pi(mi,ci(t))}catch(t){return!0}};_i.sham=!0;var bi=!di||ui((function(){var t;return vi(vi.call)||!vi(Object)||!vi((function(){t=!0}))||t}))?_i:vi,wi=Hr,Mi=bi,ki=$,xi=oe("species"),Oi=Array,Si=function(t){var e;return wi(t)&&(e=t.constructor,(Mi(e)&&(e===Oi||wi(e.prototype))||ki(e)&&null===(e=e[xi]))&&(e=void 0)),void 0===e?Oi:e},Pi=me,ji=Te,Ci=b,Ti=bt,zi=TypeError,Bi=u,Ei=ht,Gi=oe("species"),Li=function(t,e){var n,r,i,o,s,a=t.target,u=t.global,h=t.stat;if(n=u?Fr:h?Fr[a]||Nr(a,{}):(Fr[a]||{}).prototype)for(r in e){if(o=e[r],i=t.dontCallGetSet?(s=Xr(n,r))&&s.value:n[r],!Vr(u?r:a+(h?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;Wr(o,i)}(t.sham||i&&i.sham)&&Yr(o,"sham",!0),Ir(n,r,o,t)}},Zi=Xt,Ai=nr,Di=Jn,Fi=sr,Xi=Jr,Yi=function(t){if(t>9007199254740991)throw Qr("Maximum allowed index exceeded");return t},Ii=function(t,e){return new(Si(t))(0===e?0:e)},Ni=function(t,e,n){var r=Pi(e);r in t?ji.f(t,r,Ci(0,n)):t[r]=n},Wi=function(t,e){if(!delete t[e])throw zi("Cannot delete property "+Ti(e)+" of "+Ti(t))},Vi=function(t){return Ei>=51||!Bi((function(){var e=[];return(e.constructor={})[Gi]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}("splice"),Ri=Math.max,Hi=Math.min;function qi(t,e){return new google.maps.Point(~~(.5+(i=t.lng(),(1+i/180)*(2<<e+6))),~~(.5+(n=t.lat(),r=Math.sin(n*Math.PI/180),(1-.5/Math.PI*Math.log((1+r)/(1-r)))*(2<<e+6))));var n,r,i}Li({target:"Array",proto:!0,forced:!Vi},{splice:function(t,e){var n,r,i,o,s,a,u=Zi(this),h=Fi(u),l=Ai(t,h),c=arguments.length;for(0===c?n=r=0:1===c?(n=0,r=h-l):(n=c-2,r=Hi(Ri(Di(e),0),h-l)),Yi(h+n-r),i=Ii(u,r),o=0;o<r;o++)(s=l+o)in u&&Ni(i,o,u[s]);if(i.length=r,n<r){for(o=l;o<h-r;o++)a=o+n,(s=o+r)in u?u[a]=u[s]:Wi(u,a);for(o=h;o>h-r+n;o--)Wi(u,o-1)}else if(n>r)for(o=h-r;o>l;o--)a=o+n-1,(s=o+r-1)in u?u[a]=u[s]:Wi(u,a);for(o=0;o<n;o++)u[o+l]=arguments[o+2];return Xi(u,h-r+n),i}});var Ui=function(){function t(n,r){e(this,t),this.z=r,this.minX=Math.min(n[0].x,n[1].x),this.maxX=Math.max(n[0].x,n[1].x),this.minY=Math.min(n[0].y,n[1].y),this.maxY=Math.max(n[0].y,n[1].y)}return r(t,[{key:"equals",value:function(t){return this.maxX===t.maxX&&this.maxY===t.maxY&&this.minX===t.minX&&this.minY===t.minY}},{key:"containsPoint",value:function(t){return this.minX<=t.x&&this.maxX>=t.x&&this.minY<=t.y&&this.maxY>=t.y}}]),t}(),Ki=function(){function t(n,r){var i=this,o=r.maxZoom,s=void 0===o?19:o,a=r.trackMarkers,u=r.shown,h=void 0===u||u,l=r.borderPadding,c=void 0===l?100:l;e(this,t),this._tileSize=1024,this._map=n,this._mapZoom=n.getZoom(),this._maxZoom=s,this._trackMarkers=a,this._swPadding=new google.maps.Size(-c,c),this._nePadding=new google.maps.Size(c,-c),this._gridWidth={},this._grid=[],this._grid[this._maxZoom]=[],this._numMarkers={},this._numMarkers[this._maxZoom]=0,this.shownMarkers=0,this.shown=h,google.maps.event.addListenerOnce(n,"idle",(function(){i._initialize()}))}return r(t,[{key:"_initialize",value:function(){var t=this._map.mapTypes;for(var e in t)e in t&&t.get(e)&&"number"===t.get(e).maxZoom&&this._map.mapTypes.get(e).maxZoom;google.maps.event.addListener(this._map,"dragend",this._onMapMoveEnd.bind(this)),google.maps.event.addListener(this._map,"idle",this._onMapMoveEnd.bind(this)),google.maps.event.addListener(this._map,"zoom_changed",this._onMapMoveEnd.bind(this)),this.resetManager(),this._shownBounds=this._getMapGridBounds(),google.maps.event.trigger(this,"loaded")}},{key:"_removeOverlay",value:function(t){t.setMap(null),this.shownMarkers--}},{key:"_addOverlay",value:function(t){this.shown&&(t.setMap(this._map),this.shownMarkers++)}},{key:"resetManager",value:function(){for(var t=256,e=0;e<=this._maxZoom;++e)this._grid[e]=[],this._numMarkers[e]=0,this._gridWidth[e]=Math.ceil(t/this._tileSize),t<<=1}},{key:"clearMarkers",value:function(){this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.resetManager()}},{key:"_getTilePoint",value:function(t,e,n){var r=qi(t,e);return new google.maps.Point(Math.floor((r.x+n.width)/this._tileSize),Math.floor((r.y+n.height)/this._tileSize))}},{key:"_addMarkerBatch",value:function(t,e,n){var r=this,i=t.getPosition();t.set("__minZoom",e),this._trackMarkers&&google.maps.event.addListener(t,"changed",(function(t,e,n){r._onMarkerMoved(t,e,n)}));for(var o=this._getTilePoint(i,n,new google.maps.Size(0,0)),s=n;s>=e;s--){this._getGridCellCreate(o.x,o.y,s).push(t),o.x=o.x>>1,o.y=o.y>>1}}},{key:"_isGridPointVisible",value:function(t){var e=this._shownBounds.minY<=t.y&&t.y<=this._shownBounds.maxY,n=this._shownBounds.minX,r=n<=t.x&&t.x<=this._shownBounds.maxX;if(!r&&n<0){var i=this._gridWidth[this._shownBounds.z];r=n+i<=t.x&&t.x<=i-1}return e&&r}},{key:"_onMarkerMoved",value:function(t,e,n){for(var r=this._maxZoom,i=!1,o=this._getTilePoint(e,r,new google.maps.Size(0,0)),s=this._getTilePoint(n,r,new google.maps.Size(0,0));r>=0&&(o.x!==s.x||o.y!==s.y);){var a=this._getGridCellNoCreate(o.x,o.y,r);a&&this._removeMarkerFromCell(a,t)&&this._getGridCellCreate(s.x,s.y,r).push(t),r===this._mapZoom&&(this._isGridPointVisible(o)?this._isGridPointVisible(s)||(this._removeOverlay(t),i=!0):this._isGridPointVisible(s)&&(this._addOverlay(t),i=!0)),o.x=o.x>>1,o.y=o.y>>1,s.x=s.x>>1,s.y=s.y>>1,--r}i&&this._notifyListeners()}},{key:"removeMarker",value:function(t){for(var e=this._maxZoom,n=!1,r=t.getPosition(),i=this._getTilePoint(r,e,new google.maps.Size(0,0));e>=0;){var o=this._getGridCellNoCreate(i.x,i.y,e);o&&this._removeMarkerFromCell(o,t),e===this._mapZoom&&this._isGridPointVisible(i)&&(this._removeOverlay(t),n=!0),i.x=i.x>>1,i.y=i.y>>1,--e}n&&this._notifyListeners(),this._numMarkers[t.get("__minZoom")]--}},{key:"addMarkers",value:function(t,e,n){n=this._getOptmaxZoom(n);for(var r=t.length-1;r>=0;r--)this._addMarkerBatch(t[r],e,n);this._numMarkers[e]+=t.length}},{key:"_getOptmaxZoom",value:function(t){return t||this._maxZoom}},{key:"getMarkerCount",value:function(t){for(var e=0,n=0;n<=t;n++)e+=this._numMarkers[n];return e}},{key:"getMarker",value:function(t,e,n){var r=new google.maps.LatLng(t,e),i=this._getTilePoint(r,n,new google.maps.Size(0,0)),o=new google.maps.Marker({position:r}),s=this._getGridCellNoCreate(i.x,i.y,n);if(void 0!==s)for(var a=0;a<s.length;a++)t===s[a].getPosition().lat()&&e===s[a].getPosition().lng()&&(o=s[a]);return o}},{key:"addMarker",value:function(t,e,n){n=this._getOptmaxZoom(n),this._addMarkerBatch(t,e,n);var r=this._getTilePoint(t.getPosition(),this._mapZoom,new google.maps.Size(0,0));this._isGridPointVisible(r)&&e<=this._shownBounds.z&&this._shownBounds.z<=n&&(this._addOverlay(t),this._notifyListeners()),this._numMarkers[e]++}},{key:"_getGridCellCreate",value:function(t,e,n){return t<0&&(t+=this._gridWidth[n]),this._grid[n]||(this._grid[n]=[]),this._grid[n][t]||(this._grid[n][t]=[]),this._grid[n][t][e]||(this._grid[n][t][e]=[]),this._grid[n][t][e]}},{key:"_getGridCellNoCreate",value:function(t,e,n){return t<0&&(t+=this._gridWidth[n]),this._grid[n]&&this._grid[n][t]&&this._grid[n][t][e]?this._grid[n][t][e]:null}},{key:"_getGridBounds",value:function(t,e,n,r){e=Math.min(e,this._maxZoom);var i=t.getSouthWest(),o=t.getNorthEast(),s=this._getTilePoint(i,e,n),a=this._getTilePoint(o,e,r),u=this._gridWidth[e];(o.lng()<i.lng()||a.x<s.x)&&(s.x-=u),a.x-s.x+1>=u&&(s.x=0,a.x=u-1);var h=new Ui([s,a],e);return h.z=e,h}},{key:"_getMapGridBounds",value:function(){return this._getGridBounds(this._map.getBounds(),this._mapZoom,this._swPadding,this._nePadding)}},{key:"_onMapMoveEnd",value:function(){window.setTimeout(this._updateMarkers.bind(this),0)}},{key:"visible",value:function(){return!!this.shown}},{key:"isHidden",value:function(){return!this.shown}},{key:"show",value:function(){this.shown=!0,this.refresh()}},{key:"hide",value:function(){this.shown=!1,this.refresh()}},{key:"toggle",value:function(){this.shown=!this.shown,this.refresh()}},{key:"refresh",value:function(){this.shownMarkers>0&&this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.show&&this._processAll(this._shownBounds,this._addOverlay.bind(this)),this._notifyListeners()}},{key:"_updateMarkers",value:function(){this._mapZoom=this._map.getZoom();var t=this._getMapGridBounds();t.equals(this._shownBounds)&&t.z===this._shownBounds.z||(t.z!==this._shownBounds.z?(this._processAll(this._shownBounds,this._removeOverlay.bind(this)),this.show&&this._processAll(t,this._addOverlay.bind(this))):(this._rectangleDiff(this._shownBounds,t,this._removeCellMarkers.bind(this)),this.show&&this._rectangleDiff(t,this._shownBounds,this._addCellMarkers.bind(this))),this._shownBounds=t,this._notifyListeners())}},{key:"_notifyListeners",value:function(){google.maps.event.trigger(this,"changed",this._shownBounds,this.shownMarkers)}},{key:"_processAll",value:function(t,e){for(var n=t.minX;n<=t.maxX;n++)for(var r=t.minY;r<=t.maxY;r++)this._processCellMarkers(n,r,t.z,e)}},{key:"_processCellMarkers",value:function(t,e,n,r){var i=this._getGridCellNoCreate(t,e,n);if(i)for(var o=i.length-1;o>=0;o--)r(i[o])}},{key:"_removeCellMarkers",value:function(t,e,n){this._processCellMarkers(t,e,n,this._removeOverlay.bind(this))}},{key:"_addCellMarkers",value:function(t,e,n){this._processCellMarkers(t,e,n,this._addOverlay.bind(this))}},{key:"_rectangleDiff",value:function(t,e,n){this._rectangleDiffCoords(t,e,(function(e,r){n(e,r,t.z)}))}},{key:"_rectangleDiffCoords",value:function(t,e,n){var r,i,o=t.minX,s=t.minY,a=t.maxX,u=t.maxY,h=e.minX,l=e.minY,c=e.maxX,f=e.maxY;for(r=o;r<=a;r++){for(i=s;i<=u&&i<l;i++)n(r,i);for(i=Math.max(f+1,s);i<=u;i++)n(r,i)}for(i=Math.max(s,l);i<=Math.min(u,f);i++){for(r=Math.min(a+1,h)-1;r>=o;r--)n(r,i);for(r=Math.max(o,c+1);r<=a;r++)n(r,i)}}},{key:"_removeMarkerFromCell",value:function(t,e){for(var n=0,r=0;r<t.length;++r)t[r]===e&&(t.splice(r--,1),n++);return n}}]),t}();return t.MarkerManager=Ki,Object.defineProperty(t,"__esModule",{value:!0}),t}({});
//# sourceMappingURL=index.dev.js.map

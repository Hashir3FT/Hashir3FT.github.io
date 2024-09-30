((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_926",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,I,E,K,L,M,D,F,A={amH:function amH(d){this.a=d},Di:function Di(){},aJN:function aJN(){},mf:function mf(){},
eyR(d,e,f,g){var x=$.ap(),w=e==null?new D.aAF().LO():e
return new A.pI(new B.dj(d,x,g.k("dj<0?>")),$,!1,!1,new D.rn(y._),new D.rn(y.J),x,B.a6(y.N,y.A),w,f,g.k("pI<0>"))},
pI:function pI(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.fr=d
_.aix$=e
_.a18$=f
_.aiy$=g
_.x=null
_.y=h
_.z=i
_.B$=0
_.A$=j
_.V$=_.T$=0
_.c=k
_.d=l
_.e=m
_.a=null
_.$ti=n},
acU:function acU(){},
mq:function mq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f28(){return new A.Bi(null)},
Bi:function Bi(d){this.a=d},
aEj:function aEj(d,e){var _=this
_.d=d
_.e=null
_.r=_.f=!1
_.w=$
_.x=null
_.y=e
_.c=_.a=null},
cGW:function cGW(){},
cGV:function cGV(){},
cGX:function cGX(){},
cGY:function cGY(d){this.a=d},
cGU:function cGU(){},
cGS:function cGS(d){this.a=d},
cGT:function cGT(d){this.a=d},
cGP:function cGP(d,e){this.a=d
this.b=e},
cGK:function cGK(d){this.a=d},
cGL:function cGL(d){this.a=d},
cGM:function cGM(d){this.a=d},
cGN:function cGN(d){this.a=d},
cGO:function cGO(d){this.a=d},
cGQ:function cGQ(d){this.a=d},
cGG:function cGG(){},
cGJ:function cGJ(d){this.a=d},
cGI:function cGI(){},
cGH:function cGH(d){this.a=d},
cGF:function cGF(d,e){this.a=d
this.b=e},
cGE:function cGE(d,e,f){this.a=d
this.b=e
this.c=f},
cGD:function cGD(d,e,f){this.a=d
this.b=e
this.c=f},
cGC:function cGC(d){this.a=d},
cGR:function cGR(){},
agc(d){return A.eZe(d)},
eZe(a0){var x=0,w=B.i(y.Z),v,u=2,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$agc=B.j(function(a1,a2){if(a1===1){t=a2
x=u}while(true)switch(x){case 0:u=4
s=B.aN("GET",B.ad($.ah+"/System/GetUserTasks?userId="+a0,0,null))
x=7
return B.c(J.aO(s),$async$agc)
case 7:r=a2
x=8
return B.c(C.E.ai(r.w),$async$agc)
case 8:q=a2
if(r.b===200){p=C.k.C(0,q,null)
o=B.b([],y.u)
for(l=J.aZ(J.z(p,"data"));l.O();){n=l.ga2(l)
k=n
j=J.aI(k)
i=j.i(k,"TaskKey")
if(i==null)i=""
h=j.i(k,"Description")
if(h==null)h=""
g=j.i(k,"ParentKey")
if(g==null)g=""
f=j.i(k,"ParentAccount")
if(f==null)f=""
k=J.J(j.i(k,"Status"),0)
J.cc(o,new A.mq(i,h,g,f,!k))}v=new B.x(o,1,null,null,y.Z)
x=1
break}l=B.X(C.k.C(0,q,null),y.D)
v=l
x=1
break
u=2
x=6
break
case 4:u=3
d=t
m=B.V(d)
l=J.u(m)
v=new B.x(null,0,l,null,y.Z)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.f(v,w)
case 2:return B.e(t,w)}})
return B.h($async$agc,w)},
agq(d,e){return A.f_h(d,e)},
f_h(d,e){var x=0,w=B.i(y.X),v,u=2,t,s,r,q,p,o,n,m,l,k,j
var $async$agq=B.j(function(f,g){if(f===1){t=g
x=u}while(true)switch(x){case 0:u=4
s=B.aN("POST",B.ad($.ah+"/System/SaveUserTasks?userId="+e,0,null))
r=C.k.cj(d,null)
l=y.N
q=B.a8(["Content-Type","application/json"],l,l)
s.r.F(0,q)
J.de(s,r)
x=7
return B.c(J.aO(s),$async$agq)
case 7:p=g
x=8
return B.c(C.E.ai(p.w),$async$agq)
case 8:o=g
if(p.b===200){n=C.k.C(0,o,null)
l=B.X(n,y.z)
v=l
x=1
break}l=B.X(C.k.C(0,o,null),y.z)
v=l
x=1
break
u=2
x=6
break
case 4:u=3
j=t
m=B.V(j)
l=J.u(m)
v=new B.x(null,0,l,null,y.X)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.f(v,w)
case 2:return B.e(t,w)}})
return B.h($async$agq,w)}},G
J=c[1]
B=c[0]
C=c[2]
H=c[378]
I=c[375]
E=c[290]
K=c[369]
L=c[377]
M=c[385]
D=c[257]
F=c[463]
A=a.updateHolder(c[212],A)
G=c[690]
A.amH.prototype={
m(d){return"DuplicateKeyException: "+this.a+"}"},
$idZ:1}
A.Di.prototype={
gp(d){return A.mf.prototype.gkH.call(this,0)},
gkH(d){return A.mf.prototype.gkH.call(this,0)},
gmG(){return B.dO(A.mf.prototype.gmG.call(this),!0,y.M)},
gaHh(d){var x
if(this.x!=null)throw B.C(D.ah2(this))
x=this.y.gwJ()
return new B.hL(x,B.a_(x).k("hL<1>"))},
gaOZ(d){var x
if(this.x!=null)throw B.C(D.ah2(this))
x=this.z.gwJ()
return new B.hL(x,B.a_(x).k("hL<1>"))},
gaLW(){return B.a5(D.f1f(this,"The insertNodes stream is not allowedfor the ListenableNode. The index based operations like 'insert' are not implemented in ListenableNode"))},
X(d,e){this.a7I(0,e)
this.NV()
this.Yz(new D.pp(B.dO([e],!0,y.E),y.x))},
S(d,e){this.bcT(0,e)
this.NV()
this.aAQ(new D.wf(B.dO([e],!0,y.E),y.b))},
fg(d,e){return this.a7J(0,e)},
i(d,e){return this.a7J(0,e)},
v(){this.y.bm(0)
this.z.bm(0)
this.jN()},
NV(){this.aR()
var x=this.x
if(x!=null)x.NV()},
Yz(d){if(this.x==null)this.y.gwJ().X(0,d)
else A.mf.prototype.gkH.call(this,0).Yz(d)},
aAQ(d){if(this.x==null)this.z.gwJ().X(0,d)
else A.mf.prototype.gkH.call(this,0).aAQ(d)},
$iaS:1,
gav(d){return this.x}}
A.aJN.prototype={}
A.mf.prototype={
gkH(d){return y.A.a(D.fq.prototype.gkH.call(this,0))},
gmG(){var x=this.c.gbl(0)
return B.a4(x,!1,B.a_(x).k("a0.E"))},
X(d,e){var x=this.c,w=e.d
if(x.E(0,w))throw B.C(new A.amH("Key: "+w+" already exists. Please use unique strings as keys"))
e.x=this
x.h(0,w,e)},
S(d,e){this.c.S(0,e.d)},
i(d,e){return this.a7J(0,e)},
fg(d,e){var x,w,v,u,t,s
for(x=D.eKn(e),w=x.length,v=this,u=0;u<x.length;x.length===w||(0,B.ay)(x),++u){t=x[u]
if(J.J(t,v.d))continue
else{s=v.c.i(0,t)
if(s==null)throw B.C(D.exF(t,e))}v=s}return v},
m(d){return"Node{children: "+this.c.m(0)+", key: "+this.d+", parent: "+B.p(this.x)+"}"},
gi9(d){return this.d},
gav(d){return this.e}}
A.pI.prototype={
ga29(){return this.fr}}
A.acU.prototype={}
A.mq.prototype={
b5(){var x=this
return B.a8(["TaskKey",x.a,"Description",x.b,"ParentKey",x.c,"ParentAccount",x.d,"Status",x.e],y.N,y.z)}}
A.Bi.prototype={
W(){return new A.aEj(new B.y(null,y.S),B.b([],y.u))}}
A.aEj.prototype={
bYm(){var x=null
return K.af(new A.cGV(),new A.cGW(),this.d,x,x,!0,new A.cGX(),x,"Users",!0,new A.cGY(this),x,this.e,y.q)},
Mc(){var x=0,w=B.i(y.D),v,u=this,t,s,r
var $async$Mc=B.j(function(d,e){if(d===1)return B.e(e,w)
while(true)switch(x){case 0:s=B.b([],y.u)
r=u.e.a
r.toString
x=3
return B.c(A.agc(r),$async$Mc)
case 3:t=e
if(t.c!==0){r=t.a
r.toString
s=r}v=s
x=1
break
case 1:return B.f(v,w)}})
return B.h($async$Mc,w)},
L(){var x=0,w=B.i(y.H),v=this,u,t
var $async$L=B.j(function(d,e){if(d===1)return B.e(e,w)
while(true)switch(x){case 0:v.j(new A.cGS(v))
x=2
return B.c(E.vm(" AND Isnull(IsAdministrator,0)=0"),$async$L)
case 2:u=e
if(u.c!==0){t=u.a
t.toString
v.e=J.z(t,0)}v.j(new A.cGT(v))
v.w=v.Mc()
return B.f(null,w)}})
return B.h($async$L,w)},
a4(){this.ac()
this.L()},
J(d){var x=this,w=null,v=B.F(d,w,y.w).w.a.a>1200?20:10,u=B.aj(x.bYm(),1),t=x.r?C.x:new L.D(new A.cGP(x,d),M.aa,"Save",w,w),s=y.p
t=B.m(B.b([C.t,u,C.t,t],s),C.c,w,C.d,C.b,w)
if(x.f)u=B.bR(B.d0("assets/animations/loading.json",w,w),w,w)
else{u=x.w
u===$&&B.a()
u=B.eg(new A.cGQ(x),u,y.D)}return B.bh(w,new B.ar(new B.aJ(v,15,v,15),B.aL(B.K(B.b([C.u,G.aHU,C.u,C.i,t,u],s),C.c,w,C.d,C.b,C.m),w,C.y,w,w,w,w,C.C),w),w,w,w,w)},
aH6(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=J.hG(e,new A.cGC(f)),l=B.a4(m,!0,m.$ti.k("a0.E"))
for(m=l.length,x=y.E,w=y.x,v=y.O,u=d.y,t=u.$ti.k("qU<1>"),s=0;s<m;++s){r=l[s]
q=r.a
if(q==="StockIssue")r.b="Stock Issue to Department"
else if(q==="ChangeDateInStockIssue")r.b="Change StockIssue Date"
else if(q==="StockReturn")r.b="Stock Return to Department"
else if(q==="ChangeDateInStocReturn")r.b="Change StockReturn Date"
else if(q==="SaleCopyOfPurchaseInvoice")r.b="Multi Invoice"
p=A.eyR(r,q,d,v)
d.a7I(0,p)
d.aR()
o=d.x
if(o!=null)o.NV()
o=new D.pp(B.dO([p],!0,x),w)
if(d.x==null){n=u.a
if(n==null)n=u.a=new B.qU(null,null,t)
n.X(0,o)}else A.mf.prototype.gkH.call(d,0).Yz(o)
this.aH6(p,e,q)}},
aIn(d,e){var x,w,v,u,t
for(x=B.dO(A.mf.prototype.gmG.call(d),!0,y.M),w=x.length,v=y.v,u=0;u<w;++u){d=v.a(x[u])
t=d.fr.a
if(t!=null)t.e=e
this.aIn(d,e)}this.j(new A.cGR())},
ap2(d){var x,w,v,u,t,s
for(x=B.dO(A.mf.prototype.gmG.call(d),!0,y.M),w=x.length,v=y.v,u=0;u<w;++u){d=v.a(x[u])
t=d.fr.a
s=t.e
s.toString
if(s)this.y.push(t)
this.ap2(d)}}}
var z=a.updateTypes(["L(mq)","~()","~(fq)","r(v,cd<q<mq>>)","~(Gg<mq,pI<mq>>)","yZ(v,ig<@>)","eQ(v,pI<mq>)"])
A.cGW.prototype={
$2(d,e){var x=null,w=e==null?x:e.c
if(w==null)w=""
return B.l(w,x,C.o,x,x,$.o().l(13,C.q),x,x,x)},
$S:143}
A.cGV.prototype={
$1(d){return this.aWK(d)},
aWK(d){var x=0,w=B.i(y.L),v,u
var $async$$1=B.j(function(e,f){if(e===1)return B.e(f,w)
while(true)switch(x){case 0:x=3
return B.c(E.vm(" AND Isnull(IsAdministrator,0)=0"),$async$$1)
case 3:u=f.a
v=u==null?B.b([],y.P):u
x=1
break
case 1:return B.f(v,w)}})
return B.h($async$$1,w)},
$S:144}
A.cGX.prototype={
$1(d){var x=d.c
x.toString
return x},
$S:145}
A.cGY.prototype={
$1(d){return this.aWJ(d)},
aWJ(d){var x=0,w=B.i(y.a),v=this,u
var $async$$1=B.j(function(e,f){if(e===1)return B.e(f,w)
while(true)switch(x){case 0:if(d!=null){u=v.a
u.e=d
u.w=u.Mc()
u.j(new A.cGU())}return B.f(null,w)}})
return B.h($async$$1,w)},
$S:137}
A.cGU.prototype={
$0(){},
$S:0}
A.cGS.prototype={
$0(){this.a.f=!0},
$S:0}
A.cGT.prototype={
$0(){this.a.f=!1},
$S:0}
A.cGP.prototype={
$0(){var x=0,w=B.i(y.H),v,u=this,t,s,r,q
var $async$$0=B.j(function(d,e){if(d===1)return B.e(e,w)
while(true)switch(x){case 0:q=u.a
q.y=B.b([],y.u)
t=q.x
if(t!=null)C.f.b0(t.$ti.y[1].a(t.a.a).gmG(),new A.cGK(q))
q.j(new A.cGL(q))
t=q.y
s=q.e.a
s.toString
x=3
return B.c(A.agq(t,s),$async$$0)
case 3:r=e
if(r.c!==0){t=u.b
if(t.e==null){x=1
break}B.O(null,null,!0,null,new A.cGM(r),t,null,!0,y.z)}else{t=u.b
if(t.e==null){x=1
break}B.O(null,null,!0,null,new A.cGN(r),t,null,!0,y.z)}q.j(new A.cGO(q))
case 1:return B.f(v,w)}})
return B.h($async$$0,w)},
$S:5}
A.cGK.prototype={
$1(d){var x,w,v
y.v.a(d)
x=d.fr
w=x.a
v=w.e
v.toString
if(v){v=this.a
if(!C.f.q(v.y,w)){w=v.y
x=x.a
x.toString
w.push(x)}}this.a.ap2(d)},
$S:z+2}
A.cGL.prototype={
$0(){this.a.r=!0},
$S:0}
A.cGM.prototype={
$1(d){var x=this.a.e
x.toString
return B.R(x,null,null,null,"Hurray",C.a6)},
$S:1}
A.cGN.prototype={
$1(d){var x=this.a.d
x.toString
return B.R(x,null,null,null,"Oops",C.B)},
$S:1}
A.cGO.prototype={
$0(){this.a.r=!1},
$S:0}
A.cGQ.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null
if(e.a===C.aO)return B.bR(B.d0("assets/animations/loading.json",i,i),i,i)
else{x=e.c
if(x!=null)return B.l("Error: "+J.u(x),i,i,i,i,i,i,i,i)}x=e.b
x.toString
w=y.O
v=A.eyR(i,i,i,w)
u=J.hG(x,new A.cGG())
t=B.a4(u,!0,u.$ti.k("a0.E"))
for(u=t.length,s=y.E,r=y.x,q=this.a,p=v.y,o=p.$ti.k("qU<1>"),n=0;n<u;++n){m=t[n]
l=m.a
if(l==="StockIssue")m.b="Stock Issue to Department"
k=$.ao().p2
k.toString
if(k)if(l==="SaleCopyOfPurchaseInvoice")m.b="Multi Invoice"
j=A.eyR(m,l,i,w)
q.aH6(j,x,l)
v.a7I(0,j)
v.aR()
l=v.x
if(l!=null)l.NV()
l=new D.pp(B.dO([j],!0,s),r)
if(v.x==null){k=p.a
if(k==null)k=p.a=new B.qU(i,i,o)
k.X(0,l)}else A.mf.prototype.gkH.call(v,0).Yz(l)}return D.eKU(new A.cGH(q),F.DX,new A.cGI(),!0,F.Fz,i,i,new A.cGJ(q),i,i,i,i,!1,!0,v,w,y.v)},
$S:z+3}
A.cGG.prototype={
$1(d){return d.c===""},
$S:z+0}
A.cGJ.prototype={
$1(d){this.a.x=d},
$S:z+4}
A.cGI.prototype={
$2(d,e){return D.eIo(C.z,C.ou,C.bk,e)},
$S:z+5}
A.cGH.prototype={
$2(d,e){return new B.eQ(new A.cGF(this.a,e),null)},
$S:z+6}
A.cGF.prototype={
$2(d,e){var x=null,w=this.b,v=w.fr.a,u=v==null,t=u?x:v.e
t=I.aa(x,!1,x,x,x,x,!1,x,x,new A.cGE(this.a,e,w),x,x,x,x,x,!1,t)
return new B.ar(C.vF,B.hK(!1,x,x,x,!0,x,x,x,!1,x,t,x,x,x,x,!1,x,x,x,x,x,B.l(B.p(u?x:v.b),x,x,x,x,x,x,x,x),x,x),x)},
$S:52}
A.cGE.prototype={
$1(d){this.b.$1(new A.cGD(this.a,this.c,d))},
$S:3}
A.cGD.prototype={
$0(){var x=this,w=x.b,v=w.fr.a
if(v!=null)v.e=x.c
v=x.c
v.toString
x.a.aIn(w,v)},
$S:0}
A.cGC.prototype={
$1(d){return d.c===this.a},
$S:z+0}
A.cGR.prototype={
$0(){},
$S:0};(function aliases(){var x=A.mf.prototype
x.a7I=x.X
x.bcT=x.S
x.a7J=x.fg})();(function installTearOffs(){var x=a._instance_0u
x(A.Di.prototype,"giW","v",1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.ag,[A.amH,A.mq])
v(A.mf,D.fq)
v(A.aJN,A.mf)
v(A.Di,A.aJN)
v(A.acU,A.Di)
v(A.pI,A.acU)
v(A.Bi,B.G)
v(A.aEj,B.Q)
w(B.bk,[A.cGW,A.cGQ,A.cGI,A.cGH,A.cGF])
w(B.b0,[A.cGV,A.cGX,A.cGY,A.cGK,A.cGM,A.cGN,A.cGG,A.cGJ,A.cGE,A.cGC])
w(B.b8,[A.cGU,A.cGS,A.cGT,A.cGP,A.cGL,A.cGO,A.cGD,A.cGR])
x(A.aJN,B.bw)
x(A.acU,D.ig)})()
B.b6(b.typeUniverse,JSON.parse('{"amH":{"dZ":[]},"Di":{"mf":[],"bw":[],"fq":[],"aS":[]},"mf":{"fq":[]},"pI":{"Di":[],"ig":["1"],"mf":[],"bw":[],"fq":[],"aS":[]},"Bi":{"G":[],"r":[]},"aEj":{"Q":["Bi"]}}'))
B.Us(b.typeUniverse,JSON.parse('{"acU":1}'))
var y=(function rtii(){var x=B.I
return{Z:x("x<q<mq>>"),X:x("x<@>"),_:x("rn<pp<fq>>"),J:x("rn<wf<fq>>"),E:x("fq"),P:x("n<eD>"),u:x("n<mq>"),p:x("n<r>"),S:x("y<ac<eD>>"),L:x("q<eD>"),D:x("q<mq>"),M:x("Di"),w:x("ba"),A:x("mf"),x:x("pp<fq>"),b:x("wf<fq>"),a:x("H"),N:x("d"),v:x("pI<mq>"),q:x("eD"),O:x("mq"),z:x("@"),H:x("~")}})();(function constants(){G.aHU=new H.bj("User Tasks",null,"system",null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_926",e:"endPart",h:b})})($__dart_deferred_initializers__,"0CStafzGgFA8miE8AlQ2ovxr/6s=");
((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1071",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={akG:function akG(d){this.a=d},D8:function D8(){},aDM:function aDM(){},mb:function mb(){},
eqa(d,e,f,g){var x=$.aq(),w=e==null?new D.awb().I5():e
return new A.pr(new B.dd(d,x,g.j("dd<0?>")),$,!1,!1,new D.r5(y._),new D.r5(y.J),x,B.a7(y.N,y.A),w,f,g.j("pr<0>"))},
pr:function pr(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.fr=d
_.aaB$=e
_.Xd$=f
_.aaC$=g
_.x=null
_.y=h
_.z=i
_.u$=0
_.B$=j
_.T$=_.P$=0
_.U$=!1
_.c=k
_.d=l
_.e=m
_.a=null
_.$ti=n},
acP:function acP(){},
mn:function mn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eU8(){return new A.B8(null)},
B8:function B8(d){this.a=d},
ay8:function ay8(d,e,f){var _=this
_.d=d
_.e=null
_.r=_.f=!1
_.w=$
_.x=null
_.y=e
_.a=null
_.b=f
_.c=null},
cyN:function cyN(){},
cyM:function cyM(){},
cyO:function cyO(){},
cyP:function cyP(d){this.a=d},
cyL:function cyL(){},
cyJ:function cyJ(d){this.a=d},
cyK:function cyK(d){this.a=d},
cyG:function cyG(d,e){this.a=d
this.b=e},
cyB:function cyB(d){this.a=d},
cyC:function cyC(d){this.a=d},
cyD:function cyD(d){this.a=d},
cyE:function cyE(d){this.a=d},
cyF:function cyF(d){this.a=d},
cyH:function cyH(d){this.a=d},
cyx:function cyx(){},
cyA:function cyA(d){this.a=d},
cyz:function cyz(){},
cyy:function cyy(d){this.a=d},
cyw:function cyw(d,e){this.a=d
this.b=e},
cyv:function cyv(d,e,f){this.a=d
this.b=e
this.c=f},
cyu:function cyu(d,e,f){this.a=d
this.b=e
this.c=f},
cyt:function cyt(d){this.a=d},
cyI:function cyI(){},
afW(d){return A.eQg(d)},
eQg(a0){var x=0,w=B.i(y.Z),v,u=2,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$afW=B.j(function(a1,a2){if(a1===1){t=a2
x=u}while(true)switch(x){case 0:u=4
s=B.aO("GET",B.ac($.ag+"/System/GetUserTasks?userId="+a0,0,null))
x=7
return B.c(J.aP(s),$async$afW)
case 7:r=a2
x=8
return B.c(C.F.af(r.w),$async$afW)
case 8:q=a2
if(r.b===200){p=C.k.C(0,q,null)
o=B.b([],y.u)
for(l=J.aZ(J.B(p,"data"));l.L();){n=l.ga1(l)
k=n
j=J.aK(k)
i=j.i(k,"TaskKey")
if(i==null)i=""
h=j.i(k,"Description")
if(h==null)h=""
g=j.i(k,"ParentKey")
if(g==null)g=""
f=j.i(k,"ParentAccount")
if(f==null)f=""
k=J.G(j.i(k,"Status"),0)
J.c9(o,new A.mn(i,h,g,f,!k))}v=new B.x(o,1,null,null,y.Z)
x=1
break}l=B.Z(C.k.C(0,q,null),y.D)
v=l
x=1
break
u=2
x=6
break
case 4:u=3
d=t
m=B.W(d)
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
return B.h($async$afW,w)},
ag7(d,e){return A.eRh(d,e)},
eRh(d,e){var x=0,w=B.i(y.X),v,u=2,t,s,r,q,p,o,n,m,l,k,j
var $async$ag7=B.j(function(f,g){if(f===1){t=g
x=u}while(true)switch(x){case 0:u=4
s=B.aO("POST",B.ac($.ag+"/System/SaveUserTasks?userId="+e,0,null))
r=C.k.c4(d,null)
l=y.N
q=B.a8(["Content-Type","application/json"],l,l)
s.r.F(0,q)
J.db(s,r)
x=7
return B.c(J.aP(s),$async$ag7)
case 7:p=g
x=8
return B.c(C.F.af(p.w),$async$ag7)
case 8:o=g
if(p.b===200){n=C.k.C(0,o,null)
l=B.Z(n,y.z)
v=l
x=1
break}l=B.Z(C.k.C(0,o,null),y.z)
v=l
x=1
break
u=2
x=6
break
case 4:u=3
j=t
m=B.W(j)
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
return B.h($async$ag7,w)}},E,H,I,F,K,L,M,D,G
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[212],A)
E=c[788]
H=c[375]
I=c[378]
F=c[290]
K=c[368]
L=c[377]
M=c[385]
D=c[258]
G=c[462]
A.akG.prototype={
m(d){return"DuplicateKeyException: "+this.a+"}"},
$idO:1}
A.D8.prototype={
gp(d){return A.mb.prototype.gij.call(this,0)},
gij(d){return A.mb.prototype.gij.call(this,0)},
gk9(){return B.dK(A.mb.prototype.gk9.call(this),!0,y.M)},
gaxk(d){var x
if(this.x!=null)throw B.C(D.agK(this))
x=this.y.gtX()
return new B.im(x,B.a2(x).j("im<1>"))},
gaFx(d){var x
if(this.x!=null)throw B.C(D.agK(this))
x=this.z.gtX()
return new B.im(x,B.a2(x).j("im<1>"))},
gaCe(){return B.R(D.eTf(this,"The insertNodes stream is not allowedfor the ListenableNode. The index based operations like 'insert' are not implemented in ListenableNode"))},
X(d,e){this.a1_(0,e)
this.K6()
this.TV(new D.pb(B.dK([e],!0,y.E),y.x))},
O(d,e){this.b3A(0,e)
this.K6()
this.aqI(new D.w8(B.dK([e],!0,y.E),y.b))},
d4(d,e){return this.a10(0,e)},
i(d,e){return this.a10(0,e)},
A(){this.y.bc(0)
this.z.bc(0)
this.ht()},
K6(){this.aN()
var x=this.x
if(x!=null)x.K6()},
TV(d){if(this.x==null)this.y.gtX().X(0,d)
else A.mb.prototype.gij.call(this,0).TV(d)},
aqI(d){if(this.x==null)this.z.gtX().X(0,d)
else A.mb.prototype.gij.call(this,0).aqI(d)},
$iaU:1,
gao(d){return this.x}}
A.aDM.prototype={}
A.mb.prototype={
gij(d){return y.A.a(D.fj.prototype.gij.call(this,0))},
gk9(){var x=this.c.gbe(0)
return B.a5(x,!1,B.a2(x).j("a1.E"))},
X(d,e){var x=this.c,w=e.d
if(x.E(0,w))throw B.C(new A.akG("Key: "+w+" already exists. Please use unique strings as keys"))
e.x=this
x.h(0,w,e)},
O(d,e){this.c.O(0,e.d)},
i(d,e){return this.a10(0,e)},
d4(d,e){var x,w,v,u,t,s
for(x=D.eBv(e),w=x.length,v=this,u=0;u<x.length;x.length===w||(0,B.ax)(x),++u){t=x[u]
if(J.G(t,v.d))continue
else{s=v.c.i(0,t)
if(s==null)throw B.C(D.eoY(t,e))}v=s}return v},
m(d){return"Node{children: "+this.c.m(0)+", key: "+this.d+", parent: "+B.o(this.x)+"}"},
gf0(d){return this.d},
gao(d){return this.e}}
A.pr.prototype={
gY4(){return this.fr}}
A.acP.prototype={}
A.mn.prototype={
b_(){var x=this
return B.a8(["TaskKey",x.a,"Description",x.b,"ParentKey",x.c,"ParentAccount",x.d,"Status",x.e],y.N,y.z)}}
A.B8.prototype={
W(){return new A.ay8(new B.z(null,y.S),B.b([],y.u),C.y)}}
A.ay8.prototype={
bPl(){var x=null
return K.ae(new A.cyM(),new A.cyN(),this.d,x,x,!0,new A.cyO(),x,"Users",!0,new A.cyP(this),x,this.e,y.q)},
Iu(){var x=0,w=B.i(y.D),v,u=this,t,s,r
var $async$Iu=B.j(function(d,e){if(d===1)return B.e(e,w)
while(true)switch(x){case 0:s=B.b([],y.u)
r=u.e.a
r.toString
x=3
return B.c(A.afW(r),$async$Iu)
case 3:t=e
if(t.c!==0){r=t.a
r.toString
s=r}v=s
x=1
break
case 1:return B.f(v,w)}})
return B.h($async$Iu,w)},
K(){var x=0,w=B.i(y.H),v=this,u,t
var $async$K=B.j(function(d,e){if(d===1)return B.e(e,w)
while(true)switch(x){case 0:v.k(new A.cyJ(v))
x=2
return B.c(F.vb(" AND Isnull(IsAdministrator,0)=0"),$async$K)
case 2:u=e
if(u.c!==0){t=u.a
t.toString
v.e=J.B(t,0)}v.k(new A.cyK(v))
v.w=v.Iu()
return B.f(null,w)}})
return B.h($async$K,w)},
a6(){this.aa()
this.K()},
J(d){var x=this,w=null,v=B.H(d,w,y.w).w.a.a>1200?20:10,u=B.aj(x.bPl(),1),t=x.r?C.x:new L.D(new A.cyG(x,d),M.a9,"Save",w,w),s=y.p
t=B.l(B.b([C.t,u,C.t,t],s),C.c,w,C.d,C.b,w)
if(x.f)u=B.bV(B.d3("assets/animations/loading.json",w,w),w,w)
else{u=x.w
u===$&&B.a()
u=B.ed(new A.cyH(x),u,y.D)}return B.bl(w,new B.at(new B.aL(v,15,v,15),B.aN(B.K(B.b([C.u,E.avg,C.u,C.h,t,u],s),C.c,w,C.d,C.b,C.l),w,C.z,w,w,w,w,C.D),w),w,w,w,w)},
ax5(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=J.hG(e,new A.cyt(f)),l=B.a5(m,!0,m.$ti.j("a1.E"))
for(m=l.length,x=y.E,w=y.x,v=y.O,u=d.y,t=u.$ti.j("qC<1>"),s=0;s<m;++s){r=l[s]
q=r.a
if(q==="StockIssue")r.b="Stock Issue to Department"
else if(q==="ChangeDateInStockIssue")r.b="Change StockIssue Date"
else if(q==="StockReturn")r.b="Stock Return to Department"
else if(q==="ChangeDateInStocReturn")r.b="Change StockReturn Date"
else if(q==="SaleCopyOfPurchaseInvoice")r.b="Multi Invoice"
p=A.eqa(r,q,d,v)
d.a1_(0,p)
d.aN()
o=d.x
if(o!=null)o.K6()
o=new D.pb(B.dK([p],!0,x),w)
if(d.x==null){n=u.a
if(n==null)n=u.a=new B.qC(null,null,t)
n.X(0,o)}else A.mb.prototype.gij.call(d,0).TV(o)
this.ax5(p,e,q)}},
ayt(d,e){var x,w,v,u,t
for(x=B.dK(A.mb.prototype.gk9.call(d),!0,y.M),w=x.length,v=y.v,u=0;u<w;++u){d=v.a(x[u])
t=d.fr.a
if(t!=null)t.e=e
this.ayt(d,e)}this.k(new A.cyI())},
afe(d){var x,w,v,u,t,s
for(x=B.dK(A.mb.prototype.gk9.call(d),!0,y.M),w=x.length,v=y.v,u=0;u<w;++u){d=v.a(x[u])
t=d.fr.a
s=t.e
s.toString
if(s)this.y.push(t)
this.afe(d)}}}
var z=a.updateTypes(["L(mn)","~()","~(fj)","r(v,ci<q<mn>>)","~(G9<mn,pr<mn>>)","yK(v,i8<@>)","eP(v,pr<mn>)"])
A.cyN.prototype={
$2(d,e){var x=null,w=e==null?x:e.c
if(w==null)w=""
return B.n(w,x,C.o,x,x,$.p().l(13,C.r),x,x,x)},
$S:128}
A.cyM.prototype={
$1(d){return this.aNm(d)},
aNm(d){var x=0,w=B.i(y.L),v,u
var $async$$1=B.j(function(e,f){if(e===1)return B.e(f,w)
while(true)switch(x){case 0:x=3
return B.c(F.vb(" AND Isnull(IsAdministrator,0)=0"),$async$$1)
case 3:u=f.a
v=u==null?B.b([],y.P):u
x=1
break
case 1:return B.f(v,w)}})
return B.h($async$$1,w)},
$S:125}
A.cyO.prototype={
$1(d){var x=d.c
x.toString
return x},
$S:146}
A.cyP.prototype={
$1(d){return this.aNl(d)},
aNl(d){var x=0,w=B.i(y.a),v=this,u
var $async$$1=B.j(function(e,f){if(e===1)return B.e(f,w)
while(true)switch(x){case 0:if(d!=null){u=v.a
u.e=d
u.w=u.Iu()
u.k(new A.cyL())}return B.f(null,w)}})
return B.h($async$$1,w)},
$S:127}
A.cyL.prototype={
$0(){},
$S:0}
A.cyJ.prototype={
$0(){this.a.f=!0},
$S:0}
A.cyK.prototype={
$0(){this.a.f=!1},
$S:0}
A.cyG.prototype={
$0(){var x=0,w=B.i(y.H),v,u=this,t,s,r,q
var $async$$0=B.j(function(d,e){if(d===1)return B.e(e,w)
while(true)switch(x){case 0:q=u.a
q.y=B.b([],y.u)
t=q.x
if(t!=null)C.f.aV(t.$ti.y[1].a(t.a.a).gk9(),new A.cyB(q))
q.k(new A.cyC(q))
t=q.y
s=q.e.a
s.toString
x=3
return B.c(A.ag7(t,s),$async$$0)
case 3:r=e
if(r.c!==0){t=u.b
if(t.e==null){x=1
break}B.O(null,null,!0,null,new A.cyD(r),t,null,!0,y.z)}else{t=u.b
if(t.e==null){x=1
break}B.O(null,null,!0,null,new A.cyE(r),t,null,!0,y.z)}q.k(new A.cyF(q))
case 1:return B.f(v,w)}})
return B.h($async$$0,w)},
$S:7}
A.cyB.prototype={
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
w.push(x)}}this.a.afe(d)},
$S:z+2}
A.cyC.prototype={
$0(){this.a.r=!0},
$S:0}
A.cyD.prototype={
$1(d){var x=this.a.e
x.toString
return B.a3(x,null,null,null,"Hurray",C.a5)},
$S:1}
A.cyE.prototype={
$1(d){var x=this.a.d
x.toString
return B.a3(x,null,null,null,"Oops",C.C)},
$S:1}
A.cyF.prototype={
$0(){this.a.r=!1},
$S:0}
A.cyH.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null
if(e.a===C.aM)return B.bV(B.d3("assets/animations/loading.json",i,i),i,i)
else{x=e.c
if(x!=null)return B.n("Error: "+J.u(x),i,i,i,i,i,i,i,i)}x=e.b
x.toString
w=y.O
v=A.eqa(i,i,i,w)
u=J.hG(x,new A.cyx())
t=B.a5(u,!0,u.$ti.j("a1.E"))
for(u=t.length,s=y.E,r=y.x,q=this.a,p=v.y,o=p.$ti.j("qC<1>"),n=0;n<u;++n){m=t[n]
l=m.a
if(l==="StockIssue")m.b="Stock Issue to Department"
k=$.ao().p2
k.toString
if(k)if(l==="SaleCopyOfPurchaseInvoice")m.b="Multi Invoice"
j=A.eqa(m,l,i,w)
q.ax5(j,x,l)
v.a1_(0,j)
v.aN()
l=v.x
if(l!=null)l.K6()
l=new D.pb(B.dK([j],!0,s),r)
if(v.x==null){k=p.a
if(k==null)k=p.a=new B.qC(i,i,o)
k.X(0,l)}else A.mb.prototype.gij.call(v,0).TV(l)}return D.eBZ(new A.cyy(q),G.DI,new A.cyz(),!0,G.Fo,i,i,new A.cyA(q),i,i,i,i,!1,!0,v,w,y.v)},
$S:z+3}
A.cyx.prototype={
$1(d){return d.c===""},
$S:z+0}
A.cyA.prototype={
$1(d){this.a.x=d},
$S:z+4}
A.cyz.prototype={
$2(d,e){return D.ezz(C.B,C.o6,C.bf,e)},
$S:z+5}
A.cyy.prototype={
$2(d,e){return new B.eP(new A.cyw(this.a,e),null)},
$S:z+6}
A.cyw.prototype={
$2(d,e){var x=null,w=this.b,v=w.fr.a,u=v==null,t=u?x:v.e
t=H.a9(x,!1,x,x,x,x,!1,x,x,new A.cyv(this.a,e,w),x,x,x,x,x,!1,t)
return new B.at(C.uW,B.hP(!1,x,x,x,!0,x,x,x,!1,x,t,x,x,x,x,!1,x,x,x,x,x,B.n(B.o(u?x:v.b),x,x,x,x,x,x,x,x),x,x),x)},
$S:48}
A.cyv.prototype={
$1(d){this.b.$1(new A.cyu(this.a,this.c,d))},
$S:3}
A.cyu.prototype={
$0(){var x=this,w=x.b,v=w.fr.a
if(v!=null)v.e=x.c
v=x.c
v.toString
x.a.ayt(w,v)},
$S:0}
A.cyt.prototype={
$1(d){return d.c===this.a},
$S:z+0}
A.cyI.prototype={
$0(){},
$S:0};(function aliases(){var x=A.mb.prototype
x.a1_=x.X
x.b3A=x.O
x.a10=x.d4})();(function installTearOffs(){var x=a._instance_0u
x(A.D8.prototype,"gfu","A",1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.af,[A.akG,A.mn])
v(A.mb,D.fj)
v(A.aDM,A.mb)
v(A.D8,A.aDM)
v(A.acP,A.D8)
v(A.pr,A.acP)
v(A.B8,B.I)
v(A.ay8,B.Q)
w(B.bn,[A.cyN,A.cyH,A.cyz,A.cyy,A.cyw])
w(B.b2,[A.cyM,A.cyO,A.cyP,A.cyB,A.cyD,A.cyE,A.cyx,A.cyA,A.cyv,A.cyt])
w(B.ba,[A.cyL,A.cyJ,A.cyK,A.cyG,A.cyC,A.cyF,A.cyu,A.cyI])
x(A.aDM,B.bB)
x(A.acP,D.i8)})()
B.b8(b.typeUniverse,JSON.parse('{"akG":{"dO":[]},"D8":{"mb":[],"bB":[],"fj":[],"aU":[]},"mb":{"fj":[]},"pr":{"D8":[],"i8":["1"],"mb":[],"bB":[],"fj":[],"aU":[]},"B8":{"I":[],"r":[]},"ay8":{"Q":["B8"]}}'))
B.GY(b.typeUniverse,JSON.parse('{"acP":1}'))
var y=(function rtii(){var x=B.E
return{Z:x("x<q<mn>>"),X:x("x<@>"),_:x("r5<pb<fj>>"),J:x("r5<w8<fj>>"),E:x("fj"),P:x("m<ez>"),u:x("m<mn>"),p:x("m<r>"),S:x("z<ab<ez>>"),L:x("q<ez>"),D:x("q<mn>"),M:x("D8"),w:x("be"),A:x("mb"),x:x("pb<fj>"),b:x("w8<fj>"),a:x("J"),N:x("d"),v:x("pr<mn>"),q:x("ez"),O:x("mn"),z:x("@"),H:x("~")}})();(function constants(){E.avg=new I.bm("User Tasks",null,"system",null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1071",e:"endPart",h:b})})($__dart_deferred_initializers__,"Ac5lePjv7PgOoWj1gr1dQXN0Q18=");
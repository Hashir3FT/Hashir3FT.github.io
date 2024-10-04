((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_905",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,I,E,K,L,D,F,M,A={amE:function amE(d){this.a=d},Dh:function Dh(){},aJK:function aJK(){},mf:function mf(){},
eye(d,e,f,g){var x=$.ap(),w=e==null?new D.aAC().LZ():e
return new A.pI(new B.dj(d,x,g.k("dj<0?>")),$,!1,!1,new D.rn(y._),new D.rn(y.J),x,B.a6(y.N,y.A),w,f,g.k("pI<0>"))},
pI:function pI(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.fr=d
_.aiI$=e
_.a1k$=f
_.aiJ$=g
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
acR:function acR(){},
mq:function mq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f1u(){return new A.Bh(null)},
Bh:function Bh(d){this.a=d},
aEg:function aEg(d,e){var _=this
_.d=d
_.e=null
_.r=_.f=!1
_.w=$
_.x=null
_.y=e
_.c=_.a=null},
cGh:function cGh(){},
cGg:function cGg(){},
cGi:function cGi(){},
cGj:function cGj(d){this.a=d},
cGf:function cGf(){},
cGd:function cGd(d){this.a=d},
cGe:function cGe(d){this.a=d},
cGa:function cGa(d,e){this.a=d
this.b=e},
cG5:function cG5(d){this.a=d},
cG6:function cG6(d){this.a=d},
cG7:function cG7(d){this.a=d},
cG8:function cG8(d){this.a=d},
cG9:function cG9(d){this.a=d},
cGb:function cGb(d){this.a=d},
cG1:function cG1(){},
cG4:function cG4(d){this.a=d},
cG3:function cG3(){},
cG2:function cG2(d){this.a=d},
cG0:function cG0(d,e){this.a=d
this.b=e},
cG_:function cG_(d,e,f){this.a=d
this.b=e
this.c=f},
cFZ:function cFZ(d,e,f){this.a=d
this.b=e
this.c=f},
cFY:function cFY(d){this.a=d},
cGc:function cGc(){},
ag9(d){return A.eYA(d)},
eYA(a0){var x=0,w=B.i(y.Z),v,u=2,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$ag9=B.j(function(a1,a2){if(a1===1){t=a2
x=u}while(true)switch(x){case 0:u=4
s=B.aN("GET",B.ad($.ah+"/System/GetUserTasks?userId="+a0,0,null))
x=7
return B.c(J.aO(s),$async$ag9)
case 7:r=a2
x=8
return B.c(C.E.ak(r.w),$async$ag9)
case 8:q=a2
if(r.b===200){p=C.k.C(0,q,null)
o=B.b([],y.u)
for(l=J.b_(J.A(p,"data"));l.N();){n=l.ga3(l)
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
J.cd(o,new A.mq(i,h,g,f,!k))}v=new B.x(o,1,null,null,y.Z)
x=1
break}l=B.W(C.k.C(0,q,null),y.D)
v=l
x=1
break
u=2
x=6
break
case 4:u=3
d=t
m=B.V(d)
l=J.v(m)
v=new B.x(null,0,l,null,y.Z)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.f(v,w)
case 2:return B.e(t,w)}})
return B.h($async$ag9,w)},
agn(d,e){return A.eZD(d,e)},
eZD(d,e){var x=0,w=B.i(y.X),v,u=2,t,s,r,q,p,o,n,m,l,k,j
var $async$agn=B.j(function(f,g){if(f===1){t=g
x=u}while(true)switch(x){case 0:u=4
s=B.aN("POST",B.ad($.ah+"/System/SaveUserTasks?userId="+e,0,null))
r=C.k.cj(d,null)
l=y.N
q=B.a8(["Content-Type","application/json"],l,l)
s.r.F(0,q)
J.dd(s,r)
x=7
return B.c(J.aO(s),$async$agn)
case 7:p=g
x=8
return B.c(C.E.ak(p.w),$async$agn)
case 8:o=g
if(p.b===200){n=C.k.C(0,o,null)
l=B.W(n,y.z)
v=l
x=1
break}l=B.W(C.k.C(0,o,null),y.z)
v=l
x=1
break
u=2
x=6
break
case 4:u=3
j=t
m=B.V(j)
l=J.v(m)
v=new B.x(null,0,l,null,y.X)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.f(v,w)
case 2:return B.e(t,w)}})
return B.h($async$agn,w)}},G
J=c[1]
B=c[0]
C=c[2]
H=c[378]
I=c[375]
E=c[289]
K=c[369]
L=c[377]
D=c[257]
F=c[462]
M=c[385]
A=a.updateHolder(c[212],A)
G=c[670]
A.amE.prototype={
m(d){return"DuplicateKeyException: "+this.a+"}"},
$idY:1}
A.Dh.prototype={
gp(d){return A.mf.prototype.gkO.call(this,0)},
gkO(d){return A.mf.prototype.gkO.call(this,0)},
gmM(){return B.dN(A.mf.prototype.gmM.call(this),!0,y.M)},
gaHr(d){var x
if(this.x!=null)throw B.C(D.ah_(this))
x=this.y.gwS()
return new B.hL(x,B.a_(x).k("hL<1>"))},
gaPa(d){var x
if(this.x!=null)throw B.C(D.ah_(this))
x=this.z.gwS()
return new B.hL(x,B.a_(x).k("hL<1>"))},
gaM7(){return B.a5(D.f0B(this,"The insertNodes stream is not allowedfor the ListenableNode. The index based operations like 'insert' are not implemented in ListenableNode"))},
X(d,e){this.a7X(0,e)
this.O4()
this.YK(new D.pq(B.dN([e],!0,y.E),y.x))},
S(d,e){this.bd3(0,e)
this.O4()
this.aB_(new D.wf(B.dN([e],!0,y.E),y.b))},
fi(d,e){return this.a7Y(0,e)},
i(d,e){return this.a7Y(0,e)},
u(){this.y.bn(0)
this.z.bn(0)
this.jW()},
O4(){this.aS()
var x=this.x
if(x!=null)x.O4()},
YK(d){if(this.x==null)this.y.gwS().X(0,d)
else A.mf.prototype.gkO.call(this,0).YK(d)},
aB_(d){if(this.x==null)this.z.gwS().X(0,d)
else A.mf.prototype.gkO.call(this,0).aB_(d)},
$iaS:1,
gaz(d){return this.x}}
A.aJK.prototype={}
A.mf.prototype={
gkO(d){return y.A.a(D.fq.prototype.gkO.call(this,0))},
gmM(){var x=this.c.gbm(0)
return B.a4(x,!1,B.a_(x).k("a0.E"))},
X(d,e){var x=this.c,w=e.d
if(x.E(0,w))throw B.C(new A.amE("Key: "+w+" already exists. Please use unique strings as keys"))
e.x=this
x.h(0,w,e)},
S(d,e){this.c.S(0,e.d)},
i(d,e){return this.a7Y(0,e)},
fi(d,e){var x,w,v,u,t,s
for(x=D.eJL(e),w=x.length,v=this,u=0;u<x.length;x.length===w||(0,B.ay)(x),++u){t=x[u]
if(J.J(t,v.d))continue
else{s=v.c.i(0,t)
if(s==null)throw B.C(D.ex2(t,e))}v=s}return v},
m(d){return"Node{children: "+this.c.m(0)+", key: "+this.d+", parent: "+B.p(this.x)+"}"},
gic(d){return this.d},
gaz(d){return this.e}}
A.pI.prototype={
ga2m(){return this.fr}}
A.acR.prototype={}
A.mq.prototype={
b6(){var x=this
return B.a8(["TaskKey",x.a,"Description",x.b,"ParentKey",x.c,"ParentAccount",x.d,"Status",x.e],y.N,y.z)}}
A.Bh.prototype={
W(){return new A.aEg(new B.y(null,y.S),B.b([],y.u))}}
A.aEg.prototype={
bYx(){var x=null
return K.af(new A.cGg(),new A.cGh(),this.d,x,x,!0,new A.cGi(),x,"Users",!0,new A.cGj(this),x,this.e,y.q)},
Mn(){var x=0,w=B.i(y.D),v,u=this,t,s,r
var $async$Mn=B.j(function(d,e){if(d===1)return B.e(e,w)
while(true)switch(x){case 0:s=B.b([],y.u)
r=u.e.a
r.toString
x=3
return B.c(A.ag9(r),$async$Mn)
case 3:t=e
if(t.c!==0){r=t.a
r.toString
s=r}v=s
x=1
break
case 1:return B.f(v,w)}})
return B.h($async$Mn,w)},
L(){var x=0,w=B.i(y.H),v=this,u,t
var $async$L=B.j(function(d,e){if(d===1)return B.e(e,w)
while(true)switch(x){case 0:v.j(new A.cGd(v))
x=2
return B.c(E.vm(" AND Isnull(IsAdministrator,0)=0"),$async$L)
case 2:u=e
if(u.c!==0){t=u.a
t.toString
v.e=J.A(t,0)}v.j(new A.cGe(v))
v.w=v.Mn()
return B.f(null,w)}})
return B.h($async$L,w)},
a5(){this.ac()
this.L()},
J(d){var x=this,w=null,v=B.F(d,w,y.w).w.a.a>1200?20:10,u=B.aj(x.bYx(),1),t=x.r?C.x:new L.D(new A.cGa(x,d),M.aa,"Save",w,w),s=y.p
t=B.m(B.b([C.t,u,C.t,t],s),C.c,w,C.d,C.b,w)
if(x.f)u=B.bS(B.d2("assets/animations/loading.json",w,w),w,w)
else{u=x.w
u===$&&B.a()
u=B.ei(new A.cGb(x),u,y.D)}return B.bh(w,new B.as(new B.aJ(v,15,v,15),B.aM(B.K(B.b([C.u,G.aH_,C.u,C.i,t,u],s),C.c,w,C.d,C.b,C.m),w,C.y,w,w,w,w,C.C),w),w,w,w,w)},
aHg(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=J.hG(e,new A.cFY(f)),l=B.a4(m,!0,m.$ti.k("a0.E"))
for(m=l.length,x=y.E,w=y.x,v=y.O,u=d.y,t=u.$ti.k("qU<1>"),s=0;s<m;++s){r=l[s]
q=r.a
if(q==="StockIssue")r.b="Stock Issue to Department"
else if(q==="ChangeDateInStockIssue")r.b="Change StockIssue Date"
else if(q==="StockReturn")r.b="Stock Return to Department"
else if(q==="ChangeDateInStocReturn")r.b="Change StockReturn Date"
else if(q==="SaleCopyOfPurchaseInvoice")r.b="Multi Invoice"
p=A.eye(r,q,d,v)
d.a7X(0,p)
d.aS()
o=d.x
if(o!=null)o.O4()
o=new D.pq(B.dN([p],!0,x),w)
if(d.x==null){n=u.a
if(n==null)n=u.a=new B.qU(null,null,t)
n.X(0,o)}else A.mf.prototype.gkO.call(d,0).YK(o)
this.aHg(p,e,q)}},
aIz(d,e){var x,w,v,u,t
for(x=B.dN(A.mf.prototype.gmM.call(d),!0,y.M),w=x.length,v=y.v,u=0;u<w;++u){d=v.a(x[u])
t=d.fr.a
if(t!=null)t.e=e
this.aIz(d,e)}this.j(new A.cGc())},
apc(d){var x,w,v,u,t,s
for(x=B.dN(A.mf.prototype.gmM.call(d),!0,y.M),w=x.length,v=y.v,u=0;u<w;++u){d=v.a(x[u])
t=d.fr.a
s=t.e
s.toString
if(s)this.y.push(t)
this.apc(d)}}}
var z=a.updateTypes(["L(mq)","~()","~(fq)","r(u,cf<q<mq>>)","~(Gf<mq,pI<mq>>)","yY(u,ig<@>)","eQ(u,pI<mq>)"])
A.cGh.prototype={
$2(d,e){var x=null,w=e==null?x:e.c
if(w==null)w=""
return B.k(w,x,C.o,x,x,$.o().l(13,C.q),x,x,x)},
$S:143}
A.cGg.prototype={
$1(d){return this.aWV(d)},
aWV(d){var x=0,w=B.i(y.L),v,u
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
A.cGi.prototype={
$1(d){var x=d.c
x.toString
return x},
$S:145}
A.cGj.prototype={
$1(d){return this.aWU(d)},
aWU(d){var x=0,w=B.i(y.a),v=this,u
var $async$$1=B.j(function(e,f){if(e===1)return B.e(f,w)
while(true)switch(x){case 0:if(d!=null){u=v.a
u.e=d
u.w=u.Mn()
u.j(new A.cGf())}return B.f(null,w)}})
return B.h($async$$1,w)},
$S:137}
A.cGf.prototype={
$0(){},
$S:0}
A.cGd.prototype={
$0(){this.a.f=!0},
$S:0}
A.cGe.prototype={
$0(){this.a.f=!1},
$S:0}
A.cGa.prototype={
$0(){var x=0,w=B.i(y.H),v,u=this,t,s,r,q
var $async$$0=B.j(function(d,e){if(d===1)return B.e(e,w)
while(true)switch(x){case 0:q=u.a
q.y=B.b([],y.u)
t=q.x
if(t!=null)C.f.b1(t.$ti.y[1].a(t.a.a).gmM(),new A.cG5(q))
q.j(new A.cG6(q))
t=q.y
s=q.e.a
s.toString
x=3
return B.c(A.agn(t,s),$async$$0)
case 3:r=e
if(r.c!==0){t=u.b
if(t.e==null){x=1
break}B.O(null,null,!0,null,new A.cG7(r),t,null,!0,y.z)}else{t=u.b
if(t.e==null){x=1
break}B.O(null,null,!0,null,new A.cG8(r),t,null,!0,y.z)}q.j(new A.cG9(q))
case 1:return B.f(v,w)}})
return B.h($async$$0,w)},
$S:5}
A.cG5.prototype={
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
w.push(x)}}this.a.apc(d)},
$S:z+2}
A.cG6.prototype={
$0(){this.a.r=!0},
$S:0}
A.cG7.prototype={
$1(d){var x=this.a.e
x.toString
return B.R(x,null,null,null,"Hurray",C.a5)},
$S:1}
A.cG8.prototype={
$1(d){var x=this.a.d
x.toString
return B.R(x,null,null,null,"Oops",C.B)},
$S:1}
A.cG9.prototype={
$0(){this.a.r=!1},
$S:0}
A.cGb.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null
if(e.a===C.aR)return B.bS(B.d2("assets/animations/loading.json",i,i),i,i)
else{x=e.c
if(x!=null)return B.k("Error: "+J.v(x),i,i,i,i,i,i,i,i)}x=e.b
x.toString
w=y.O
v=A.eye(i,i,i,w)
u=J.hG(x,new A.cG1())
t=B.a4(u,!0,u.$ti.k("a0.E"))
for(u=t.length,s=y.E,r=y.x,q=this.a,p=v.y,o=p.$ti.k("qU<1>"),n=0;n<u;++n){m=t[n]
l=m.a
if(l==="StockIssue")m.b="Stock Issue to Department"
k=$.ao().p2
k.toString
if(k)if(l==="SaleCopyOfPurchaseInvoice")m.b="Multi Invoice"
j=A.eye(m,l,i,w)
q.aHg(j,x,l)
v.a7X(0,j)
v.aS()
l=v.x
if(l!=null)l.O4()
l=new D.pq(B.dN([j],!0,s),r)
if(v.x==null){k=p.a
if(k==null)k=p.a=new B.qU(i,i,o)
k.X(0,l)}else A.mf.prototype.gkO.call(v,0).YK(l)}return D.eKh(new A.cG2(q),F.DJ,new A.cG3(),!0,F.Fl,i,i,new A.cG4(q),i,i,i,i,!1,!0,v,w,y.v)},
$S:z+3}
A.cG1.prototype={
$1(d){return d.c===""},
$S:z+0}
A.cG4.prototype={
$1(d){this.a.x=d},
$S:z+4}
A.cG3.prototype={
$2(d,e){return D.eHM(C.z,C.ol,C.bk,e)},
$S:z+5}
A.cG2.prototype={
$2(d,e){return new B.eQ(new A.cG0(this.a,e),null)},
$S:z+6}
A.cG0.prototype={
$2(d,e){var x=null,w=this.b,v=w.fr.a,u=v==null,t=u?x:v.e
t=I.aa(x,!1,x,x,x,x,!1,x,x,new A.cG_(this.a,e,w),x,x,x,x,x,!1,t)
return new B.as(C.vt,B.hK(!1,x,x,x,!0,x,x,x,!1,x,t,x,x,x,x,!1,x,x,x,x,x,B.k(B.p(u?x:v.b),x,x,x,x,x,x,x,x),x,x),x)},
$S:52}
A.cG_.prototype={
$1(d){this.b.$1(new A.cFZ(this.a,this.c,d))},
$S:3}
A.cFZ.prototype={
$0(){var x=this,w=x.b,v=w.fr.a
if(v!=null)v.e=x.c
v=x.c
v.toString
x.a.aIz(w,v)},
$S:0}
A.cFY.prototype={
$1(d){return d.c===this.a},
$S:z+0}
A.cGc.prototype={
$0(){},
$S:0};(function aliases(){var x=A.mf.prototype
x.a7X=x.X
x.bd3=x.S
x.a7Y=x.fi})();(function installTearOffs(){var x=a._instance_0u
x(A.Dh.prototype,"gj4","u",1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.ag,[A.amE,A.mq])
v(A.mf,D.fq)
v(A.aJK,A.mf)
v(A.Dh,A.aJK)
v(A.acR,A.Dh)
v(A.pI,A.acR)
v(A.Bh,B.G)
v(A.aEg,B.Q)
w(B.bk,[A.cGh,A.cGb,A.cG3,A.cG2,A.cG0])
w(B.b0,[A.cGg,A.cGi,A.cGj,A.cG5,A.cG7,A.cG8,A.cG1,A.cG4,A.cG_,A.cFY])
w(B.b8,[A.cGf,A.cGd,A.cGe,A.cGa,A.cG6,A.cG9,A.cFZ,A.cGc])
x(A.aJK,B.bw)
x(A.acR,D.ig)})()
B.b6(b.typeUniverse,JSON.parse('{"amE":{"dY":[]},"Dh":{"mf":[],"bw":[],"fq":[],"aS":[]},"mf":{"fq":[]},"pI":{"Dh":[],"ig":["1"],"mf":[],"bw":[],"fq":[],"aS":[]},"Bh":{"G":[],"r":[]},"aEg":{"Q":["Bh"]}}'))
B.Uq(b.typeUniverse,JSON.parse('{"acR":1}'))
var y=(function rtii(){var x=B.I
return{Z:x("x<q<mq>>"),X:x("x<@>"),_:x("rn<pq<fq>>"),J:x("rn<wf<fq>>"),E:x("fq"),P:x("n<eD>"),u:x("n<mq>"),p:x("n<r>"),S:x("y<ac<eD>>"),L:x("q<eD>"),D:x("q<mq>"),M:x("Dh"),w:x("ba"),A:x("mf"),x:x("pq<fq>"),b:x("wf<fq>"),a:x("H"),N:x("d"),v:x("pI<mq>"),q:x("eD"),O:x("mq"),z:x("@"),H:x("~")}})();(function constants(){G.aH_=new H.bj("User Tasks",null,"system",null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_905",e:"endPart",h:b})})($__dart_deferred_initializers__,"8uJ1LrVZAhCGIo0qspmTYXb27jE=");
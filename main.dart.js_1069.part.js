((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1069",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={amz:function amz(d){this.a=d},Dc:function Dc(){},aIq:function aIq(){},md:function md(){},
exr(d,e,f,g){var x=$.ap(),w=e==null?new D.azi().Ix():e
return new A.pF(new B.dh(d,x,g.k("dh<0?>")),$,!1,!1,new D.rj(y._),new D.rj(y.J),x,B.a6(y.N,y.A),w,f,g.k("pF<0>"))},
pF:function pF(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.fr=d
_.ad3$=e
_.XA$=f
_.ad4$=g
_.x=null
_.y=h
_.z=i
_.B$=0
_.A$=j
_.U$=_.S$=0
_.c=k
_.d=l
_.e=m
_.a=null
_.$ti=n},
acL:function acL(){},
mo:function mo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f0L(){return new A.Bc(null)},
Bc:function Bc(d){this.a=d},
aCX:function aCX(d,e){var _=this
_.d=d
_.e=null
_.r=_.f=!1
_.w=$
_.x=null
_.y=e
_.c=_.a=null},
cFx:function cFx(){},
cFw:function cFw(){},
cFy:function cFy(){},
cFz:function cFz(d){this.a=d},
cFv:function cFv(){},
cFt:function cFt(d){this.a=d},
cFu:function cFu(d){this.a=d},
cFq:function cFq(d,e){this.a=d
this.b=e},
cFl:function cFl(d){this.a=d},
cFm:function cFm(d){this.a=d},
cFn:function cFn(d){this.a=d},
cFo:function cFo(d){this.a=d},
cFp:function cFp(d){this.a=d},
cFr:function cFr(d){this.a=d},
cFh:function cFh(){},
cFk:function cFk(d){this.a=d},
cFj:function cFj(){},
cFi:function cFi(d){this.a=d},
cFg:function cFg(d,e){this.a=d
this.b=e},
cFf:function cFf(d,e,f){this.a=d
this.b=e
this.c=f},
cFe:function cFe(d,e,f){this.a=d
this.b=e
this.c=f},
cFd:function cFd(d){this.a=d},
cFs:function cFs(){},
ag3(d){return A.eXR(d)},
eXR(a0){var x=0,w=B.i(y.Z),v,u=2,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$ag3=B.j(function(a1,a2){if(a1===1){t=a2
x=u}while(true)switch(x){case 0:u=4
s=B.aN("GET",B.ad($.ah+"/System/GetUserTasks?userId="+a0,0,null))
x=7
return B.c(J.aO(s),$async$ag3)
case 7:r=a2
x=8
return B.c(C.E.ae(r.w),$async$ag3)
case 8:q=a2
if(r.b===200){p=C.k.C(0,q,null)
o=B.b([],y.u)
for(l=J.aZ(J.A(p,"data"));l.N();){n=l.ga1(l)
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
J.cd(o,new A.mo(i,h,g,f,!k))}v=new B.x(o,1,null,null,y.Z)
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
m=B.U(d)
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
return B.h($async$ag3,w)},
agh(d,e){return A.eYU(d,e)},
eYU(d,e){var x=0,w=B.i(y.X),v,u=2,t,s,r,q,p,o,n,m,l,k,j
var $async$agh=B.j(function(f,g){if(f===1){t=g
x=u}while(true)switch(x){case 0:u=4
s=B.aN("POST",B.ad($.ah+"/System/SaveUserTasks?userId="+e,0,null))
r=C.k.cc(d,null)
l=y.N
q=B.a8(["Content-Type","application/json"],l,l)
s.r.F(0,q)
J.dd(s,r)
x=7
return B.c(J.aO(s),$async$agh)
case 7:p=g
x=8
return B.c(C.E.ae(p.w),$async$agh)
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
m=B.U(j)
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
return B.h($async$agh,w)}},E,H,I,F,K,L,M,D,G
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[212],A)
E=c[786]
H=c[374]
I=c[377]
F=c[290]
K=c[368]
L=c[376]
M=c[384]
D=c[258]
G=c[462]
A.amz.prototype={
m(d){return"DuplicateKeyException: "+this.a+"}"},
$idX:1}
A.Dc.prototype={
gp(d){return A.md.prototype.gjm.call(this,0)},
gjm(d){return A.md.prototype.gjm.call(this,0)},
glg(){return B.dM(A.md.prototype.glg.call(this),!0,y.M)},
gaBL(d){var x
if(this.x!=null)throw B.C(D.agU(this))
x=this.y.guL()
return new B.hI(x,B.Z(x).k("hI<1>"))},
gaJt(d){var x
if(this.x!=null)throw B.C(D.agU(this))
x=this.z.guL()
return new B.hI(x,B.Z(x).k("hI<1>"))},
gaGq(){return B.a5(D.f_S(this,"The insertNodes stream is not allowedfor the ListenableNode. The index based operations like 'insert' are not implemented in ListenableNode"))},
X(d,e){this.a2i(0,e)
this.Ku()
this.Ul(new D.pn(B.dM([e],!0,y.E),y.x))},
P(d,e){this.b7q(0,e)
this.Ku()
this.avk(new D.wd(B.dM([e],!0,y.E),y.b))},
e9(d,e){return this.a2j(0,e)},
i(d,e){return this.a2j(0,e)},
v(){this.y.bi(0)
this.z.bi(0)
this.iC()},
Ku(){this.aN()
var x=this.x
if(x!=null)x.Ku()},
Ul(d){if(this.x==null)this.y.guL().X(0,d)
else A.md.prototype.gjm.call(this,0).Ul(d)},
avk(d){if(this.x==null)this.z.guL().X(0,d)
else A.md.prototype.gjm.call(this,0).avk(d)},
$iaS:1,
gao(d){return this.x}}
A.aIq.prototype={}
A.md.prototype={
gjm(d){return y.A.a(D.fn.prototype.gjm.call(this,0))},
glg(){var x=this.c.gbg(0)
return B.a4(x,!1,B.Z(x).k("a_.E"))},
X(d,e){var x=this.c,w=e.d
if(x.E(0,w))throw B.C(new A.amz("Key: "+w+" already exists. Please use unique strings as keys"))
e.x=this
x.h(0,w,e)},
P(d,e){this.c.P(0,e.d)},
i(d,e){return this.a2j(0,e)},
e9(d,e){var x,w,v,u,t,s
for(x=D.eIY(e),w=x.length,v=this,u=0;u<x.length;x.length===w||(0,B.ay)(x),++u){t=x[u]
if(J.J(t,v.d))continue
else{s=v.c.i(0,t)
if(s==null)throw B.C(D.ewf(t,e))}v=s}return v},
m(d){return"Node{children: "+this.c.m(0)+", key: "+this.d+", parent: "+B.p(this.x)+"}"},
gh3(d){return this.d},
gao(d){return this.e}}
A.pF.prototype={
gYq(){return this.fr}}
A.acL.prototype={}
A.mo.prototype={
b1(){var x=this
return B.a8(["TaskKey",x.a,"Description",x.b,"ParentKey",x.c,"ParentAccount",x.d,"Status",x.e],y.N,y.z)}}
A.Bc.prototype={
W(){return new A.aCX(new B.z(null,y.S),B.b([],y.u))}}
A.aCX.prototype={
bSV(){var x=null
return K.af(new A.cFw(),new A.cFx(),this.d,x,x,!0,new A.cFy(),x,"Users",!0,new A.cFz(this),x,this.e,y.q)},
IW(){var x=0,w=B.i(y.D),v,u=this,t,s,r
var $async$IW=B.j(function(d,e){if(d===1)return B.e(e,w)
while(true)switch(x){case 0:s=B.b([],y.u)
r=u.e.a
r.toString
x=3
return B.c(A.ag3(r),$async$IW)
case 3:t=e
if(t.c!==0){r=t.a
r.toString
s=r}v=s
x=1
break
case 1:return B.f(v,w)}})
return B.h($async$IW,w)},
K(){var x=0,w=B.i(y.H),v=this,u,t
var $async$K=B.j(function(d,e){if(d===1)return B.e(e,w)
while(true)switch(x){case 0:v.j(new A.cFt(v))
x=2
return B.c(F.vk(" AND Isnull(IsAdministrator,0)=0"),$async$K)
case 2:u=e
if(u.c!==0){t=u.a
t.toString
v.e=J.A(t,0)}v.j(new A.cFu(v))
v.w=v.IW()
return B.f(null,w)}})
return B.h($async$K,w)},
a3(){this.ab()
this.K()},
I(d){var x=this,w=null,v=B.E(d,w,y.w).w.a.a>1200?20:10,u=B.aj(x.bSV(),1),t=x.r?C.x:new L.D(new A.cFq(x,d),M.a9,"Save",w,w),s=y.p
t=B.l(B.b([C.t,u,C.t,t],s),C.c,w,C.d,C.b,w)
if(x.f)u=B.bR(B.d0("assets/animations/loading.json",w,w),w,w)
else{u=x.w
u===$&&B.a()
u=B.ed(new A.cFr(x),u,y.D)}return B.bh(w,new B.as(new B.aK(v,15,v,15),B.aL(B.K(B.b([C.u,E.aKa,C.u,C.i,t,u],s),C.c,w,C.d,C.b,C.l),w,C.y,w,w,w,w,C.C),w),w,w,w,w)},
aBA(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=J.hD(e,new A.cFd(f)),l=B.a4(m,!0,m.$ti.k("a_.E"))
for(m=l.length,x=y.E,w=y.x,v=y.O,u=d.y,t=u.$ti.k("qR<1>"),s=0;s<m;++s){r=l[s]
q=r.a
if(q==="StockIssue")r.b="Stock Issue to Department"
else if(q==="ChangeDateInStockIssue")r.b="Change StockIssue Date"
else if(q==="StockReturn")r.b="Stock Return to Department"
else if(q==="ChangeDateInStocReturn")r.b="Change StockReturn Date"
else if(q==="SaleCopyOfPurchaseInvoice")r.b="Multi Invoice"
p=A.exr(r,q,d,v)
d.a2i(0,p)
d.aN()
o=d.x
if(o!=null)o.Ku()
o=new D.pn(B.dM([p],!0,x),w)
if(d.x==null){n=u.a
if(n==null)n=u.a=new B.qR(null,null,t)
n.X(0,o)}else A.md.prototype.gjm.call(d,0).Ul(o)
this.aBA(p,e,q)}},
aCS(d,e){var x,w,v,u,t
for(x=B.dM(A.md.prototype.glg.call(d),!0,y.M),w=x.length,v=y.v,u=0;u<w;++u){d=v.a(x[u])
t=d.fr.a
if(t!=null)t.e=e
this.aCS(d,e)}this.j(new A.cFs())},
ajw(d){var x,w,v,u,t,s
for(x=B.dM(A.md.prototype.glg.call(d),!0,y.M),w=x.length,v=y.v,u=0;u<w;++u){d=v.a(x[u])
t=d.fr.a
s=t.e
s.toString
if(s)this.y.push(t)
this.ajw(d)}}}
var z=a.updateTypes(["L(mo)","~()","~(fn)","r(v,ce<q<mo>>)","~(Gc<mo,pF<mo>>)","yW(v,ib<@>)","eO(v,pF<mo>)"])
A.cFx.prototype={
$2(d,e){var x=null,w=e==null?x:e.c
if(w==null)w=""
return B.n(w,x,C.o,x,x,$.o().l(13,C.q),x,x,x)},
$S:146}
A.cFw.prototype={
$1(d){return this.aRf(d)},
aRf(d){var x=0,w=B.i(y.L),v,u
var $async$$1=B.j(function(e,f){if(e===1)return B.e(f,w)
while(true)switch(x){case 0:x=3
return B.c(F.vk(" AND Isnull(IsAdministrator,0)=0"),$async$$1)
case 3:u=f.a
v=u==null?B.b([],y.P):u
x=1
break
case 1:return B.f(v,w)}})
return B.h($async$$1,w)},
$S:140}
A.cFy.prototype={
$1(d){var x=d.c
x.toString
return x},
$S:133}
A.cFz.prototype={
$1(d){return this.aRe(d)},
aRe(d){var x=0,w=B.i(y.a),v=this,u
var $async$$1=B.j(function(e,f){if(e===1)return B.e(f,w)
while(true)switch(x){case 0:if(d!=null){u=v.a
u.e=d
u.w=u.IW()
u.j(new A.cFv())}return B.f(null,w)}})
return B.h($async$$1,w)},
$S:128}
A.cFv.prototype={
$0(){},
$S:0}
A.cFt.prototype={
$0(){this.a.f=!0},
$S:0}
A.cFu.prototype={
$0(){this.a.f=!1},
$S:0}
A.cFq.prototype={
$0(){var x=0,w=B.i(y.H),v,u=this,t,s,r,q
var $async$$0=B.j(function(d,e){if(d===1)return B.e(e,w)
while(true)switch(x){case 0:q=u.a
q.y=B.b([],y.u)
t=q.x
if(t!=null)C.f.aW(t.$ti.y[1].a(t.a.a).glg(),new A.cFl(q))
q.j(new A.cFm(q))
t=q.y
s=q.e.a
s.toString
x=3
return B.c(A.agh(t,s),$async$$0)
case 3:r=e
if(r.c!==0){t=u.b
if(t.e==null){x=1
break}B.O(null,null,!0,null,new A.cFn(r),t,null,!0,y.z)}else{t=u.b
if(t.e==null){x=1
break}B.O(null,null,!0,null,new A.cFo(r),t,null,!0,y.z)}q.j(new A.cFp(q))
case 1:return B.f(v,w)}})
return B.h($async$$0,w)},
$S:5}
A.cFl.prototype={
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
w.push(x)}}this.a.ajw(d)},
$S:z+2}
A.cFm.prototype={
$0(){this.a.r=!0},
$S:0}
A.cFn.prototype={
$1(d){var x=this.a.e
x.toString
return B.a1(x,null,null,null,"Hurray",C.a5)},
$S:1}
A.cFo.prototype={
$1(d){var x=this.a.d
x.toString
return B.a1(x,null,null,null,"Oops",C.B)},
$S:1}
A.cFp.prototype={
$0(){this.a.r=!1},
$S:0}
A.cFr.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null
if(e.a===C.aN)return B.bR(B.d0("assets/animations/loading.json",i,i),i,i)
else{x=e.c
if(x!=null)return B.n("Error: "+J.u(x),i,i,i,i,i,i,i,i)}x=e.b
x.toString
w=y.O
v=A.exr(i,i,i,w)
u=J.hD(x,new A.cFh())
t=B.a4(u,!0,u.$ti.k("a_.E"))
for(u=t.length,s=y.E,r=y.x,q=this.a,p=v.y,o=p.$ti.k("qR<1>"),n=0;n<u;++n){m=t[n]
l=m.a
if(l==="StockIssue")m.b="Stock Issue to Department"
k=$.ao().p2
k.toString
if(k)if(l==="SaleCopyOfPurchaseInvoice")m.b="Multi Invoice"
j=A.exr(m,l,i,w)
q.aBA(j,x,l)
v.a2i(0,j)
v.aN()
l=v.x
if(l!=null)l.Ku()
l=new D.pn(B.dM([j],!0,s),r)
if(v.x==null){k=p.a
if(k==null)k=p.a=new B.qR(i,i,o)
k.X(0,l)}else A.md.prototype.gjm.call(v,0).Ul(l)}return D.eJu(new A.cFi(q),G.Ez,new A.cFj(),!0,G.Ge,i,i,new A.cFk(q),i,i,i,i,!1,!0,v,w,y.v)},
$S:z+3}
A.cFh.prototype={
$1(d){return d.c===""},
$S:z+0}
A.cFk.prototype={
$1(d){this.a.x=d},
$S:z+4}
A.cFj.prototype={
$2(d,e){return D.eGZ(C.z,C.oJ,C.bk,e)},
$S:z+5}
A.cFi.prototype={
$2(d,e){return new B.eO(new A.cFg(this.a,e),null)},
$S:z+6}
A.cFg.prototype={
$2(d,e){var x=null,w=this.b,v=w.fr.a,u=v==null,t=u?x:v.e
t=H.aa(x,!1,x,x,x,x,!1,x,x,new A.cFf(this.a,e,w),x,x,x,x,x,!1,t)
return new B.as(C.vY,B.hH(!1,x,x,x,!0,x,x,x,!1,x,t,x,x,x,x,!1,x,x,x,x,x,B.n(B.p(u?x:v.b),x,x,x,x,x,x,x,x),x,x),x)},
$S:51}
A.cFf.prototype={
$1(d){this.b.$1(new A.cFe(this.a,this.c,d))},
$S:3}
A.cFe.prototype={
$0(){var x=this,w=x.b,v=w.fr.a
if(v!=null)v.e=x.c
v=x.c
v.toString
x.a.aCS(w,v)},
$S:0}
A.cFd.prototype={
$1(d){return d.c===this.a},
$S:z+0}
A.cFs.prototype={
$0(){},
$S:0};(function aliases(){var x=A.md.prototype
x.a2i=x.X
x.b7q=x.P
x.a2j=x.e9})();(function installTearOffs(){var x=a._instance_0u
x(A.Dc.prototype,"ghL","v",1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.ag,[A.amz,A.mo])
v(A.md,D.fn)
v(A.aIq,A.md)
v(A.Dc,A.aIq)
v(A.acL,A.Dc)
v(A.pF,A.acL)
v(A.Bc,B.G)
v(A.aCX,B.Q)
w(B.bk,[A.cFx,A.cFr,A.cFj,A.cFi,A.cFg])
w(B.b0,[A.cFw,A.cFy,A.cFz,A.cFl,A.cFn,A.cFo,A.cFh,A.cFk,A.cFf,A.cFd])
w(B.b8,[A.cFv,A.cFt,A.cFu,A.cFq,A.cFm,A.cFp,A.cFe,A.cFs])
x(A.aIq,B.by)
x(A.acL,D.ib)})()
B.b6(b.typeUniverse,JSON.parse('{"amz":{"dX":[]},"Dc":{"md":[],"by":[],"fn":[],"aS":[]},"md":{"fn":[]},"pF":{"Dc":[],"ib":["1"],"md":[],"by":[],"fn":[],"aS":[]},"Bc":{"G":[],"r":[]},"aCX":{"Q":["Bc"]}}'))
B.Uo(b.typeUniverse,JSON.parse('{"acL":1}'))
var y=(function rtii(){var x=B.H
return{Z:x("x<q<mo>>"),X:x("x<@>"),_:x("rj<pn<fn>>"),J:x("rj<wd<fn>>"),E:x("fn"),P:x("m<eB>"),u:x("m<mo>"),p:x("m<r>"),S:x("z<ac<eB>>"),L:x("q<eB>"),D:x("q<mo>"),M:x("Dc"),w:x("ba"),A:x("md"),x:x("pn<fn>"),b:x("wd<fn>"),a:x("I"),N:x("d"),v:x("pF<mo>"),q:x("eB"),O:x("mo"),z:x("@"),H:x("~")}})();(function constants(){E.aKa=new I.bj("User Tasks",null,"system",null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1069",e:"endPart",h:b})})($__dart_deferred_initializers__,"iWAtKiVvetjdA/V5nZVvC4GjS+k=");
((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_768",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,G,H,E,D,F,I,K,L,A={amJ:function amJ(d){this.a=d},Dh:function Dh(){},aJP:function aJP(){},mc:function mc(){},
eyV(d,e,f,g){var x=$.ap(),w=e==null?new D.aAH().Op():e
return new A.pG(new B.dj(d,x,g.k("dj<0?>")),$,!1,!1,new D.rm(y._),new D.rm(y.y),x,B.a6(y.N,y.A),w,f,g.k("pG<0>"))},
pG:function pG(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.fr=d
_.aq1$=e
_.a6I$=f
_.aq2$=g
_.x=null
_.y=h
_.z=i
_.B$=0
_.A$=j
_.W$=_.T$=0
_.c=k
_.d=l
_.e=m
_.a=null
_.$ti=n},
acW:function acW(){},
mn:function mn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f2c(){return new A.Bh(null)},
Bh:function Bh(d){this.a=d},
aEl:function aEl(d,e){var _=this
_.d=d
_.e=null
_.r=_.f=!1
_.w=$
_.x=null
_.y=e
_.z=$
_.c=_.a=null},
cGY:function cGY(){},
cGX:function cGX(){},
cGZ:function cGZ(){},
cH_:function cH_(d){this.a=d},
cGW:function cGW(){},
cGU:function cGU(d){this.a=d},
cGV:function cGV(d){this.a=d},
cGR:function cGR(d,e){this.a=d
this.b=e},
cGM:function cGM(d){this.a=d},
cGN:function cGN(d){this.a=d},
cGO:function cGO(d,e){this.a=d
this.b=e},
cGP:function cGP(d,e){this.a=d
this.b=e},
cGQ:function cGQ(d){this.a=d},
cGS:function cGS(d){this.a=d},
cGI:function cGI(){},
cGL:function cGL(d){this.a=d},
cGK:function cGK(){},
cGJ:function cGJ(d){this.a=d},
cGH:function cGH(d,e){this.a=d
this.b=e},
cGG:function cGG(d,e,f){this.a=d
this.b=e
this.c=f},
cGF:function cGF(d,e,f){this.a=d
this.b=e
this.c=f},
cGE:function cGE(d){this.a=d},
cGT:function cGT(){},
age(d){return A.eZi(d)},
eZi(a0){var x=0,w=B.k(y.Z),v,u=2,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$age=B.l(function(a1,a2){if(a1===1){t=a2
x=u}while(true)switch(x){case 0:u=4
s=B.aO("GET",B.ad($.ah+"/System/GetUserTasks?userId="+a0,0,null))
x=7
return B.d(J.aQ(s),$async$age)
case 7:r=a2
x=8
return B.d(C.E.am(r.w),$async$age)
case 8:q=a2
if(r.b===200){p=C.k.C(0,q,null)
o=B.b([],y.u)
for(l=J.b0(J.A(p,"data"));l.O();){n=l.ga4(l)
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
k=J.H(j.i(k,"Status"),0)
J.cf(o,new A.mn(i,h,g,f,!k))}v=new B.x(o,1,null,null,y.Z)
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
case 6:case 1:return B.i(v,w)
case 2:return B.h(t,w)}})
return B.j($async$age,w)},
ags(d,e){return A.f_l(d,e)},
f_l(d,e){var x=0,w=B.k(y.X),v,u=2,t,s,r,q,p,o,n,m,l,k,j
var $async$ags=B.l(function(f,g){if(f===1){t=g
x=u}while(true)switch(x){case 0:u=4
s=B.aO("POST",B.ad($.ah+"/System/SaveUserTasks?userId="+e,0,null))
r=C.k.ct(d,null)
l=y.N
q=B.a8(["Content-Type","application/json"],l,l)
s.r.F(0,q)
J.df(s,r)
x=7
return B.d(J.aQ(s),$async$ags)
case 7:p=g
x=8
return B.d(C.E.am(p.w),$async$ags)
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
case 6:case 1:return B.i(v,w)
case 2:return B.h(t,w)}})
return B.j($async$ags,w)}}
J=c[1]
B=c[0]
C=c[2]
G=c[377]
H=c[374]
E=c[289]
D=c[257]
F=c[413]
I=c[368]
K=c[376]
L=c[383]
A=a.updateHolder(c[212],A)
A.amJ.prototype={
m(d){return"DuplicateKeyException: "+this.a+"}"},
$idY:1}
A.Dh.prototype={
gp(d){return A.mc.prototype.gl8.call(this,0)},
gl8(d){return A.mc.prototype.gl8.call(this,0)},
gn4(){return B.dN(A.mc.prototype.gn4.call(this),!0,y.M)},
gaP1(d){var x
if(this.x!=null)throw B.C(D.ah4(this))
x=this.y.gxG()
return new B.hK(x,B.a_(x).k("hK<1>"))},
gaWH(d){var x
if(this.x!=null)throw B.C(D.ah4(this))
x=this.z.gxG()
return new B.hK(x,B.a_(x).k("hK<1>"))},
gaTF(){return B.a5(D.f1j(this,"The insertNodes stream is not allowedfor the ListenableNode. The index based operations like 'insert' are not implemented in ListenableNode"))},
Y(d,e){this.af7(0,e)
this.QK()
this.a24(new D.po(B.dN([e],!0,y.E),y.x))},
S(d,e){this.bkC(0,e)
this.QK()
this.aIA(new D.wc(B.dN([e],!0,y.E),y.b))},
fs(d,e){return this.af8(0,e)},
i(d,e){return this.af8(0,e)},
v(){this.y.bv(0)
this.z.bv(0)
this.kc()},
QK(){this.aX()
var x=this.x
if(x!=null)x.QK()},
a24(d){if(this.x==null)this.y.gxG().Y(0,d)
else A.mc.prototype.gl8.call(this,0).a24(d)},
aIA(d){if(this.x==null)this.z.gxG().Y(0,d)
else A.mc.prototype.gl8.call(this,0).aIA(d)},
$iaU:1,
gaE(d){return this.x}}
A.aJP.prototype={}
A.mc.prototype={
gl8(d){return y.A.a(D.fp.prototype.gl8.call(this,0))},
gn4(){var x=this.c.gbu(0)
return B.a4(x,!1,B.a_(x).k("a0.E"))},
Y(d,e){var x=this.c,w=e.d
if(x.E(0,w))throw B.C(new A.amJ("Key: "+w+" already exists. Please use unique strings as keys"))
e.x=this
x.h(0,w,e)},
S(d,e){this.c.S(0,e.d)},
i(d,e){return this.af8(0,e)},
fs(d,e){var x,w,v,u,t,s
for(x=D.eKs(e),w=x.length,v=this,u=0;u<x.length;x.length===w||(0,B.ay)(x),++u){t=x[u]
if(J.H(t,v.d))continue
else{s=v.c.i(0,t)
if(s==null)throw B.C(D.exJ(t,e))}v=s}return v},
m(d){return"Node{children: "+this.c.m(0)+", key: "+this.d+", parent: "+B.p(this.x)+"}"},
git(d){return this.d},
gaE(d){return this.e}}
A.pG.prototype={
ga8d(){return this.fr}}
A.acW.prototype={}
A.mn.prototype={
bb(){var x=this
return B.a8(["TaskKey",x.a,"Description",x.b,"ParentKey",x.c,"ParentAccount",x.d,"Status",x.e],y.N,y.z)}}
A.Bh.prototype={
X(){return new A.aEl(new B.y(null,y.S),B.b([],y.u))}}
A.aEl.prototype={
c55(){var x=this,w=null,v=x.z
v===$&&B.a()
return I.af(new A.cGX(),new A.cGY(),x.d,w,w,!0,new A.cGZ(),w,v.gOf(),!0,new A.cH_(x),w,x.e,y.q)},
ap(){var x=this.c
x.toString
x=B.aJ(x,C.M,y.J)
x.toString
this.z=x
this.aI()},
OP(){var x=0,w=B.k(y.D),v,u=this,t,s,r
var $async$OP=B.l(function(d,e){if(d===1)return B.h(e,w)
while(true)switch(x){case 0:s=B.b([],y.u)
r=u.e.a
r.toString
x=3
return B.d(A.age(r),$async$OP)
case 3:t=e
if(t.c!==0){r=t.a
r.toString
s=r}v=s
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$OP,w)},
L(){var x=0,w=B.k(y.H),v=this,u,t
var $async$L=B.l(function(d,e){if(d===1)return B.h(e,w)
while(true)switch(x){case 0:v.j(new A.cGU(v))
x=2
return B.d(E.vj(" AND Isnull(IsAdministrator,0)=0"),$async$L)
case 2:u=e
if(u.c!==0){t=u.a
t.toString
v.e=J.A(t,0)}v.j(new A.cGV(v))
v.w=v.OP()
return B.i(null,w)}})
return B.j($async$L,w)},
a6(){this.ae()
this.L()},
J(d){var x,w,v,u=this,t=null,s=B.E(d,t,y.w).w.a.a>1200?20:10,r=u.z
r===$&&B.a()
r=r.gavv()
x=B.ak(u.c55(),1)
if(u.r)w=C.x
else{w=u.z
w=new K.D(new A.cGR(u,d),L.ab,w.gc3(w),t,t)}v=y.p
w=B.m(B.b([C.t,x,C.t,w],v),C.c,t,C.d,C.b,t)
if(u.f)x=B.bU(B.d1("assets/animations/loading.json",t,t),t,t)
else{x=u.w
x===$&&B.a()
x=B.ee(new A.cGS(u),x,y.D)}return B.bj(t,new B.aq(new B.aL(s,15,s,15),B.aN(B.J(B.b([C.u,new G.bk(r,t,"system",t),C.u,C.i,w,x],v),C.c,t,C.d,C.b,C.m),t,C.y,t,t,t,t,C.C),t),t,t,t,t)},
aOR(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=J.hF(e,new A.cGE(f)),k=B.a4(l,!0,l.$ti.k("a0.E"))
for(l=k.length,x=y.E,w=y.x,v=y.O,u=d.y,t=u.$ti.k("qT<1>"),s=0;s<l;++s){r=k[s]
q=r.a
if(q==="StockIssue"){p=m.z
p===$&&B.a()
r.b=p.ga_n()}else if(q==="ChangeDateInStockIssue"){p=m.z
p===$&&B.a()
r.b=p.ganw()}else if(q==="StockReturn"){p=m.z
p===$&&B.a()
r.b=p.gaeM()}else if(q==="ChangeDateInStocReturn"){p=m.z
p===$&&B.a()
r.b=p.gauC()}else if(q==="SaleCopyOfPurchaseInvoice"){p=m.z
p===$&&B.a()
r.b=p.gN8()}o=A.eyV(r,q,d,v)
d.af7(0,o)
d.aX()
p=d.x
if(p!=null)p.QK()
p=new D.po(B.dN([o],!0,x),w)
if(d.x==null){n=u.a
if(n==null)n=u.a=new B.qT(null,null,t)
n.Y(0,p)}else A.mc.prototype.gl8.call(d,0).a24(p)
m.aOR(o,e,q)}},
aQ7(d,e){var x,w,v,u,t
for(x=B.dN(A.mc.prototype.gn4.call(d),!0,y.M),w=x.length,v=y.v,u=0;u<w;++u){d=v.a(x[u])
t=d.fr.a
if(t!=null)t.e=e
this.aQ7(d,e)}this.j(new A.cGT())},
awP(d){var x,w,v,u,t,s
for(x=B.dN(A.mc.prototype.gn4.call(d),!0,y.M),w=x.length,v=y.v,u=0;u<w;++u){d=v.a(x[u])
t=d.fr.a
s=t.e
s.toString
if(s)this.y.push(t)
this.awP(d)}}}
var z=a.updateTypes(["K(mn)","~()","~(fp)","r(v,cg<q<mn>>)","~(Gg<mn,pG<mn>>)","yY(v,ie<@>)","eQ(v,pG<mn>)"])
A.cGY.prototype={
$2(d,e){var x=null,w=e==null?x:e.c
if(w==null)w=""
return B.c(w,x,C.o,x,x,$.o().l(13,C.q),x,x,x)},
$S:143}
A.cGX.prototype={
$1(d){return this.b3s(d)},
b3s(d){var x=0,w=B.k(y.L),v,u
var $async$$1=B.l(function(e,f){if(e===1)return B.h(f,w)
while(true)switch(x){case 0:x=3
return B.d(E.vj(" AND Isnull(IsAdministrator,0)=0"),$async$$1)
case 3:u=f.a
v=u==null?B.b([],y.P):u
x=1
break
case 1:return B.i(v,w)}})
return B.j($async$$1,w)},
$S:144}
A.cGZ.prototype={
$1(d){var x=d.c
x.toString
return x},
$S:145}
A.cH_.prototype={
$1(d){return this.b3r(d)},
b3r(d){var x=0,w=B.k(y.a),v=this,u
var $async$$1=B.l(function(e,f){if(e===1)return B.h(f,w)
while(true)switch(x){case 0:if(d!=null){u=v.a
u.e=d
u.w=u.OP()
u.j(new A.cGW())}return B.i(null,w)}})
return B.j($async$$1,w)},
$S:137}
A.cGW.prototype={
$0(){},
$S:0}
A.cGU.prototype={
$0(){this.a.f=!0},
$S:0}
A.cGV.prototype={
$0(){this.a.f=!1},
$S:0}
A.cGR.prototype={
$0(){var x=0,w=B.k(y.H),v,u=this,t,s,r,q
var $async$$0=B.l(function(d,e){if(d===1)return B.h(e,w)
while(true)switch(x){case 0:q=u.a
q.y=B.b([],y.u)
t=q.x
if(t!=null)C.f.b6(t.$ti.y[1].a(t.a.a).gn4(),new A.cGM(q))
q.j(new A.cGN(q))
t=q.y
s=q.e.a
s.toString
x=3
return B.d(A.ags(t,s),$async$$0)
case 3:r=e
if(r.c!==0){t=u.b
if(t.e==null){x=1
break}B.N(null,null,!0,null,new A.cGO(q,r),t,null,!0,y.z)}else{t=u.b
if(t.e==null){x=1
break}B.N(null,null,!0,null,new A.cGP(q,r),t,null,!0,y.z)}q.j(new A.cGQ(q))
case 1:return B.i(v,w)}})
return B.j($async$$0,w)},
$S:5}
A.cGM.prototype={
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
w.push(x)}}this.a.awP(d)},
$S:z+2}
A.cGN.prototype={
$0(){this.a.r=!0},
$S:0}
A.cGO.prototype={
$1(d){var x,w=this.a.z
w===$&&B.a()
w=w.gbO()
x=this.b.e
x.toString
return B.P(x,null,null,null,w,C.a5)},
$S:1}
A.cGP.prototype={
$1(d){var x,w=this.a.z
w===$&&B.a()
w=w.gaa()
x=this.b.d
x.toString
return B.P(x,null,null,null,w,C.B)},
$S:1}
A.cGQ.prototype={
$0(){this.a.r=!1},
$S:0}
A.cGS.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null
if(e.a===C.aO)return B.bU(B.d1("assets/animations/loading.json",i,i),i,i)
else{x=e.c
if(x!=null)return B.c("Error: "+J.u(x),i,i,i,i,i,i,i,i)}x=e.b
x.toString
w=y.O
v=A.eyV(i,i,i,w)
u=J.hF(x,new A.cGI())
t=B.a4(u,!0,u.$ti.k("a0.E"))
for(u=t.length,s=y.E,r=y.x,q=this.a,p=v.y,o=p.$ti.k("qT<1>"),n=0;n<u;++n){m=t[n]
l=m.a
if(l==="StockIssue"){k=q.z
k===$&&B.a()
m.b=k.ga_n()}k=$.ao().p2
k.toString
if(k)if(l==="SaleCopyOfPurchaseInvoice"){k=q.z
k===$&&B.a()
m.b=k.gN8()}j=A.eyV(m,l,i,w)
q.aOR(j,x,l)
v.af7(0,j)
v.aX()
l=v.x
if(l!=null)l.QK()
l=new D.po(B.dN([j],!0,s),r)
if(v.x==null){k=p.a
if(k==null)k=p.a=new B.qT(i,i,o)
k.Y(0,l)}else A.mc.prototype.gl8.call(v,0).a24(l)}return D.eKZ(new A.cGJ(q),F.BT,new A.cGK(),!0,F.Di,i,i,new A.cGL(q),i,i,i,i,!1,!0,v,w,y.v)},
$S:z+3}
A.cGI.prototype={
$1(d){return d.c===""},
$S:z+0}
A.cGL.prototype={
$1(d){this.a.x=d},
$S:z+4}
A.cGK.prototype={
$2(d,e){return D.eIt(C.z,C.nW,C.bj,e)},
$S:z+5}
A.cGJ.prototype={
$2(d,e){return new B.eQ(new A.cGH(this.a,e),null)},
$S:z+6}
A.cGH.prototype={
$2(d,e){var x=null,w=this.b,v=w.fr.a,u=v==null,t=u?x:v.e
t=H.aa(x,!1,x,x,x,x,!1,x,x,new A.cGG(this.a,e,w),x,x,x,x,x,!1,t)
return new B.aq(C.ul,B.hJ(!1,x,x,x,!0,x,x,x,!1,x,t,x,x,x,x,!1,x,x,x,x,x,B.c(B.p(u?x:v.b),x,x,x,x,x,x,x,x),x,x),x)},
$S:52}
A.cGG.prototype={
$1(d){this.b.$1(new A.cGF(this.a,this.c,d))},
$S:3}
A.cGF.prototype={
$0(){var x=this,w=x.b,v=w.fr.a
if(v!=null)v.e=x.c
v=x.c
v.toString
x.a.aQ7(w,v)},
$S:0}
A.cGE.prototype={
$1(d){return d.c===this.a},
$S:z+0}
A.cGT.prototype={
$0(){},
$S:0};(function aliases(){var x=A.mc.prototype
x.af7=x.Y
x.bkC=x.S
x.af8=x.fs})();(function installTearOffs(){var x=a._instance_0u
x(A.Dh.prototype,"gjg","v",1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.ag,[A.amJ,A.mn])
v(A.mc,D.fp)
v(A.aJP,A.mc)
v(A.Dh,A.aJP)
v(A.acW,A.Dh)
v(A.pG,A.acW)
v(A.Bh,B.F)
v(A.aEl,B.R)
w(B.bm,[A.cGY,A.cGS,A.cGK,A.cGJ,A.cGH])
w(B.b2,[A.cGX,A.cGZ,A.cH_,A.cGM,A.cGO,A.cGP,A.cGI,A.cGL,A.cGG,A.cGE])
w(B.ba,[A.cGW,A.cGU,A.cGV,A.cGR,A.cGN,A.cGQ,A.cGF,A.cGT])
x(A.aJP,B.bA)
x(A.acW,D.ie)})()
B.b8(b.typeUniverse,JSON.parse('{"amJ":{"dY":[]},"Dh":{"mc":[],"bA":[],"fp":[],"aU":[]},"mc":{"fp":[]},"pG":{"Dh":[],"ie":["1"],"mc":[],"bA":[],"fp":[],"aU":[]},"Bh":{"F":[],"r":[]},"aEl":{"R":["Bh"]}}'))
B.Us(b.typeUniverse,JSON.parse('{"acW":1}'))
var y=(function rtii(){var x=B.I
return{Z:x("x<q<mn>>"),X:x("x<@>"),J:x("bv"),_:x("rm<po<fp>>"),y:x("rm<wc<fp>>"),E:x("fp"),P:x("n<eC>"),u:x("n<mn>"),p:x("n<r>"),S:x("y<ac<eC>>"),L:x("q<eC>"),D:x("q<mn>"),M:x("Dh"),w:x("bc"),A:x("mc"),x:x("po<fp>"),b:x("wc<fp>"),a:x("G"),N:x("e"),v:x("pG<mn>"),q:x("eC"),O:x("mn"),z:x("@"),H:x("~")}})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_768",e:"endPart",h:b})})($__dart_deferred_initializers__,"lx44oEU4Nkl3kZrzgpQdtkcRfMg=");
((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_623",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,K,L,I,M,N,E,F,O,G,H,A={rV:function rV(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
faR(){return new A.EO(null)},
R_(d,e){var w=x.K
w=new A.auB(d,B.b([],w),B.b([],w),B.b([],w),B.b([],w),B.a6(x.N,x.Q),B.b([],x.R),0,null,new B.av(B.b([],x.f),x.Z),new B.av(B.b([],x.E),x.I),$.ap())
w.biF(d,e)
return w},
EO:function EO(d){this.a=d},
aMW:function aMW(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.f=$
_.r=f
_.w=g
_.x=h
_.ax=_.at=_.Q=_.z=_.y=!1
_.c=_.a=null},
dPr:function dPr(){},
dPs:function dPs(d){this.a=d},
dPq:function dPq(d,e){this.a=d
this.b=e},
dPm:function dPm(d){this.a=d},
dPn:function dPn(d){this.a=d},
dPo:function dPo(d){this.a=d},
dPp:function dPp(d){this.a=d},
dP6:function dP6(d){this.a=d},
dOW:function dOW(d){this.a=d},
dP5:function dP5(d,e){this.a=d
this.b=e},
dOX:function dOX(d,e){this.a=d
this.b=e},
dPe:function dPe(d){this.a=d},
dP7:function dP7(d,e){this.a=d
this.b=e},
dP4:function dP4(d,e){this.a=d
this.b=e},
dPf:function dPf(d,e){this.a=d
this.b=e},
dP3:function dP3(d,e,f){this.a=d
this.b=e
this.c=f},
dPg:function dPg(d){this.a=d},
dP2:function dP2(d,e){this.a=d
this.b=e},
dPh:function dPh(d){this.a=d},
dP1:function dP1(d,e){this.a=d
this.b=e},
dPj:function dPj(d){this.a=d},
dP0:function dP0(d){this.a=d},
dPi:function dPi(d){this.a=d},
dPl:function dPl(d){this.a=d},
dOZ:function dOZ(d){this.a=d},
dPk:function dPk(d,e){this.a=d
this.b=e},
dP_:function dP_(d,e){this.a=d
this.b=e},
dP8:function dP8(d,e){this.a=d
this.b=e},
dOY:function dOY(d,e,f){this.a=d
this.b=e
this.c=f},
dP9:function dP9(d){this.a=d},
dOV:function dOV(d,e){this.a=d
this.b=e},
dPa:function dPa(d){this.a=d},
dOU:function dOU(d,e){this.a=d
this.b=e},
dPc:function dPc(d){this.a=d},
dOT:function dOT(d){this.a=d},
dPb:function dPb(d){this.a=d},
dPd:function dPd(d){this.a=d},
auB:function auB(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.fy=d
_.go=e
_.x=f
_.y=g
_.z=h
_.Q=!1
_.as=null
_.at=i
_.ax=j
_.fC$=k
_.fv$=l
_.a=m
_.b=n
_.B$=0
_.A$=o
_.V$=_.T$=0},
bzN:function bzN(){},
bzM:function bzM(d){this.a=d},
bzK:function bzK(){},
bzL:function bzL(){},
VR(d,e,f,g,h){return A.eX7(d,e,f,!1,h)},
eX7(a4,a5,a6,a7,a8){var w=0,v=B.i(x.l),u,t=2,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$VR=B.j(function(a9,b0){if(a9===1){s=b0
w=t}while(true)switch(w){case 0:t=4
r=B.aN("GET",B.ad($.ah+"/Stock/ReCalculateStock?productId="+a4+"&salesmanId="+a8+"&isUpdateBatch=false&isSalesmanStock="+a6+"&isOnlyDefaultSalesman="+a5,0,null))
w=7
return B.c(J.aO(r),$async$VR)
case 7:q=b0
w=8
return B.c(C.E.ai(q.w),$async$VR)
case 8:p=b0
w=q.b===200?9:10
break
case 9:k=C.k.C(0,p,null)
w=11
return B.c(x._.b(k)?k:B.bT(k,x.z),$async$VR)
case 11:o=b0
n=B.b([],x.e)
for(k=J.aZ(J.z(o,"data"));k.O();){m=k.ga2(k)
j=m
i=J.aI(j)
h=i.i(j,"ProductName")
g=i.i(j,"ProductId")
f=i.i(j,"Cost")
e=i.i(j,"ExpiryDate")
d=i.i(j,"Quantity")
a0=i.i(j,"AfterUpdate")
a1=i.i(j,"BeforeUpdate")
J.cc(n,new A.rV(i.i(j,"SMID"),g,h,d,a1,a0,f,e))}u=new B.x(n,1,null,null,x.l)
w=1
break
case 10:k=B.X(C.k.C(0,p,null),x.X)
u=k
w=1
break
t=2
w=6
break
case 4:t=3
a3=s
l=B.V(a3)
k=J.u(l)
u=new B.x(null,0,k,null,x.l)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.f(u,v)
case 2:return B.e(s,v)}})
return B.h($async$VR,v)},
Xy(d,e,f){return A.f17(d,e,!1)},
f17(d,e,f){var w=0,v=B.i(x.O),u,t=2,s,r,q,p,o,n,m,l,k,j,i,h
var $async$Xy=B.j(function(g,a0){if(g===1){s=a0
w=t}while(true)switch(w){case 0:t=4
r=B.aN("POST",B.ad($.ah+"/Stock/UpdateReCalculateStock?isUpdateBatchStock=false&isSalesmanStock="+e,0,null))
k=J.cv(d,new A.aYp(),x.P)
q=C.k.cj(B.a4(k,!0,k.$ti.k("aA.E")),null)
k=x.N
p=B.a8(["Content-Type","application/json"],k,k)
J.de(r,q)
r.r.F(0,p)
w=7
return B.c(J.aO(r).c3K(0,B.eH(0,0,0,0,5,0)),$async$Xy)
case 7:o=a0
w=8
return B.c(C.E.ai(o.w),$async$Xy)
case 8:n=a0
w=o.b===200?9:10
break
case 9:k=C.k.C(0,n,null)
j=x.z
w=11
return B.c(x._.b(k)?k:B.bT(k,j),$async$Xy)
case 11:m=a0
k=B.X(m,j)
u=k
w=1
break
case 10:k=B.X(C.k.C(0,n,null),x.z)
u=k
w=1
break
t=2
w=6
break
case 4:t=3
h=s
l=B.V(h)
k=J.u(l)
u=new B.x(null,0,k,null,x.O)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.f(u,v)
case 2:return B.e(s,v)}})
return B.h($async$Xy,v)},
aYp:function aYp(){}},D
J=c[1]
B=c[0]
C=c[2]
K=c[430]
L=c[431]
I=c[531]
M=c[344]
N=c[378]
E=c[354]
F=c[427]
O=c[350]
G=c[375]
H=c[377]
A=a.updateHolder(c[89],A)
D=c[674]
A.rV.prototype={
b5(){var w=this
return B.a8(["ProductName",w.c,"ProductId",w.b,"Cost",w.r,"ExpiryDate",w.w,"Quantity",w.d,"AfterUpdate",w.f,"BeforeUpdate",w.e,"SMID",w.a],x.N,x.z)}}
A.EO.prototype={
W(){var w=$.ap(),v=x.e
return new A.aMW(new B.N(C.p,w),new B.N(C.p,w),B.b([],v),B.fy(B.b([],v),x.X),B.b([],v))}}
A.aMW.prototype={
Au(){var w=0,v=B.i(x.X),u,t=this,s,r,q,p
var $async$Au=B.j(function(d,e){if(d===1)return B.e(e,v)
while(true)switch(w){case 0:s=t.d.a.a
r=t.e.a.a
q=t.y
w=3
return B.c(A.VR(s,t.Q,q,!1,r),$async$Au)
case 3:p=e
r=t.x=B.b([],x.e)
if(p.c!==0){s=p.a
s.toString
s=t.x=s}else s=r
u=s
w=1
break
case 1:return B.f(u,v)}})
return B.h($async$Au,v)},
b3(){var w=null,v=J.fg(this.x),u=x.z,t=this.c
if(v){t.toString
B.O(w,w,!0,w,new A.dPr(),t,w,!0,u)
return}else{t.toString
B.O(w,w,!0,w,new A.dPs(this),t,w,!0,u)}},
a4(){var w,v=this
v.ac()
w=v.c
w.toString
v.f=A.R_(w,v.r)},
J(d){var w,v=this,u=null,t="Product ID",s="Salesman ID",r=B.F(d,u,x.w).w.a.a>1200?20:10,q=v.d,p=B.E(C.eo,q,u,u,u,!1,!1,u,!1,u,u,t,u,!0,new A.dP5(v,d),new A.dP6(v),u,u),o=v.y,n=v.e,m=B.hY(new B.k(3,C.e,B.E(u,n,u,u,u,!1,!0,u,!1,u,u,s,u,u,new A.dP7(v,d),new A.dPe(v),u,u),u),!1,!1,!1,C.aW,o),l=x.p
o=B.cr(C.N,B.b([new B.W(230,u,B.m(B.b([G.aa(u,!1,u,u,u,u,!1,u,u,new A.dPf(v,d),u,u,u,u,u,!1,o),D.aUu],l),C.c,u,C.d,C.b,u),u),C.t,new B.W(330,u,B.m(B.b([G.aa(u,!1,u,u,u,u,!1,u,u,new A.dPg(v),u,u,u,u,u,!1,v.Q),D.aU6],l),C.c,u,C.d,C.b,u),u),C.t,new B.W(130,u,B.m(B.b([G.aa(u,!1,u,u,u,u,!1,u,u,new A.dPh(v),u,u,u,u,u,!1,v.z),D.a_j],l),C.c,u,C.d,C.b,u),u),C.t],l),C.a8,C.M,C.N,10,0)
w=v.ax?C.x:new H.D(new A.dPi(v),I.wo,"Update",u,u)
w=B.K(B.b([B.m(B.b([new B.k(3,C.e,p,u),C.t,m,C.w,o,C.t,new H.D(new A.dPj(v),C.mt,"Search",u,u),C.t,w,C.d_],l),C.c,u,C.d,C.b,u)],l),C.c,u,C.d,C.b,C.m)
q=B.E(u,q,u,u,u,!1,!1,u,!1,u,u,t,u,!0,new A.dPk(v,d),new A.dPl(v),u,u)
o=v.y
o=B.m(B.b([new B.k(2,C.e,q,u),B.hY(new B.k(2,C.e,B.E(u,n,u,u,u,!1,!1,u,!1,u,u,s,u,u,u,u,u,u),u),!1,!1,!1,C.aW,o)],l),C.c,u,C.d,C.b,u)
n=B.cr(C.N,B.b([B.m(B.b([G.aa(u,!1,u,u,u,u,!1,u,u,new A.dP8(v,d),u,u,u,u,u,!1,v.y),D.aU1,C.t,G.aa(u,!1,u,u,u,u,!1,u,u,new A.dP9(v),u,u,u,u,u,!1,v.z),D.a_j],l),C.c,u,C.d,C.b,u)],l),C.a8,C.M,C.N,10,0)
q=B.m(B.b([G.aa(u,!1,u,u,u,u,!1,u,u,new A.dPa(v),u,u,u,u,u,!1,v.Q),D.aV1],l),C.c,u,C.d,C.b,u)
p=v.ax?C.x:new H.D(new A.dPb(v),I.wo,"Update",u,u)
return B.bh(u,new B.ar(new B.aJ(r,15,r,15),B.K(B.b([C.u,D.aHW,C.u,new B.bp(w,u,B.K(B.b([o,C.i,n,q,C.i,B.m(B.b([new H.D(new A.dPc(v),C.mt,"Search",u,u),C.t,p],l),C.c,u,C.I,C.b,u)],l),C.c,u,C.d,C.b,C.m),u),C.aI,B.eg(new A.dPd(v),v.w,x.X)],l),C.c,u,C.d,C.b,C.m),u),u,u,u,u)}}
A.auB.prototype={
biF(d,e){var w=J.cv(e,new A.bzN(),x.n)
this.go=B.a4(w,!0,w.$ti.k("aA.E"))},
gdn(d){return this.go},
fu(d){var w=d.a,v=B.aq(w).k("ak<1,r>")
return new E.dW(null,B.a4(new B.ak(w,new A.bzM(this),v),!0,v.k("aA.E")))}}
var z=a.updateTypes(["r(v,cd<q<rV>>)","au(rV)","c0(M<@>)","bg<d,@>(rV)"])
A.dPr.prototype={
$1(d){return D.aAx},
$S:1}
A.dPs.prototype={
$1(d){return B.R("Do you want to update the stock",null,new A.dPq(this.a,d),null,"Are You Sure",C.aX)},
$S:1}
A.dPq.prototype={
$0(){var w=0,v=B.i(x.a),u,t=this,s,r,q
var $async$$0=B.j(function(d,e){if(d===1)return B.e(e,v)
while(true)switch(w){case 0:q=t.b
B.T(q,!1).bk()
s=t.a
s.j(new A.dPm(s))
w=3
return B.c(A.Xy(s.x,s.y,!1),$async$$0)
case 3:r=e
if(r.c!==0){J.lY(s.x)
if(q.e==null){w=1
break}B.O(null,null,!0,null,new A.dPn(r),q,null,!0,x.z)}else{if(q.e==null){w=1
break}B.O(null,null,!0,null,new A.dPo(r),q,null,!0,x.z)}s.j(new A.dPp(s))
case 1:return B.f(u,v)}})
return B.h($async$$0,v)},
$S:16}
A.dPm.prototype={
$0(){this.a.ax=!0},
$S:0}
A.dPn.prototype={
$1(d){var w=this.a.e
w.toString
return B.R(w,null,null,null,"Hurray",C.a6)},
$S:1}
A.dPo.prototype={
$1(d){var w=this.a.d
w.toString
return B.R(w,null,null,null,"Oops",C.B)},
$S:1}
A.dPp.prototype={
$0(){this.a.ax=!1},
$S:0}
A.dP6.prototype={
$1(d){var w=this.a
w.j(new A.dOW(w))},
$S:4}
A.dOW.prototype={
$0(){var w=this.a
w.w=w.Au()},
$S:0}
A.dP5.prototype={
$1(d){return this.b3f(d)},
b3f(d){var w=0,v=B.i(x.H),u=this,t
var $async$$1=B.j(function(e,f){if(e===1)return B.e(f,v)
while(true)switch(w){case 0:t=u.a
t.j(new A.dOX(t,u.b))
return B.f(null,v)}})
return B.h($async$$1,v)},
$S:10}
A.dOX.prototype={
$0(){var w=this.a
J.lY(w.x)
w.f=A.R_(this.b,w.x)},
$S:0}
A.dPe.prototype={
$1(d){var w=this.a
w.w=w.Au()},
$S:4}
A.dP7.prototype={
$1(d){return this.b3e(d)},
b3e(d){var w=0,v=B.i(x.H),u=this,t
var $async$$1=B.j(function(e,f){if(e===1)return B.e(f,v)
while(true)switch(w){case 0:t=u.a
t.j(new A.dP4(t,u.b))
return B.f(null,v)}})
return B.h($async$$1,v)},
$S:10}
A.dP4.prototype={
$0(){var w=this.a
J.lY(w.x)
w.f=A.R_(this.b,w.x)},
$S:0}
A.dPf.prototype={
$1(d){var w=this.a
w.j(new A.dP3(w,d,this.b))},
$S:3}
A.dP3.prototype={
$0(){var w=this.a,v=this.b
v.toString
w.y=v
J.lY(w.x)
w.f=A.R_(this.c,w.x)},
$S:0}
A.dPg.prototype={
$1(d){var w=this.a
w.j(new A.dP2(w,d))},
$S:3}
A.dP2.prototype={
$0(){var w=this.b
w.toString
this.a.Q=w},
$S:0}
A.dPh.prototype={
$1(d){var w=this.a
w.j(new A.dP1(w,d))},
$S:3}
A.dP1.prototype={
$0(){var w=this.b
w.toString
this.a.z=w},
$S:0}
A.dPj.prototype={
$0(){var w=this.a
w.j(new A.dP0(w))
w.w=w.Au()},
$S:0}
A.dP0.prototype={
$0(){this.a.at=!0},
$S:0}
A.dPi.prototype={
$0(){this.a.b3()},
$S:0}
A.dPl.prototype={
$1(d){var w=this.a
w.j(new A.dOZ(w))},
$S:4}
A.dOZ.prototype={
$0(){var w=this.a
w.w=w.Au()},
$S:0}
A.dPk.prototype={
$1(d){return this.b3d(d)},
b3d(d){var w=0,v=B.i(x.H),u=this,t
var $async$$1=B.j(function(e,f){if(e===1)return B.e(f,v)
while(true)switch(w){case 0:t=u.a
t.j(new A.dP_(t,u.b))
return B.f(null,v)}})
return B.h($async$$1,v)},
$S:10}
A.dP_.prototype={
$0(){var w=this.a
J.lY(w.x)
w.f=A.R_(this.b,w.x)},
$S:0}
A.dP8.prototype={
$1(d){var w=this.a
w.j(new A.dOY(w,d,this.b))},
$S:3}
A.dOY.prototype={
$0(){var w=this.a,v=this.b
v.toString
w.y=v
J.lY(w.x)
w.f=A.R_(this.c,w.x)},
$S:0}
A.dP9.prototype={
$1(d){var w=this.a
w.j(new A.dOV(w,d))},
$S:3}
A.dOV.prototype={
$0(){var w=this.a,v=this.b
v.toString
w.y=v
J.lY(w.x)},
$S:0}
A.dPa.prototype={
$1(d){var w=this.a
w.j(new A.dOU(w,d))},
$S:3}
A.dOU.prototype={
$0(){var w=this.b
w.toString
this.a.Q=w},
$S:0}
A.dPc.prototype={
$0(){var w=this.a
w.j(new A.dOT(w))
w.w=w.Au()},
$S:0}
A.dOT.prototype={
$0(){this.a.at=!0},
$S:0}
A.dPb.prototype={
$0(){this.a.b3()},
$S:0}
A.dPd.prototype={
$2(d,e){var w,v,u,t,s=null
if(e.a===C.aO)return B.d0("assets/animations/loading.json",s,s)
else{w=e.c
if(w!=null)return B.bR(B.l("Error "+J.u(w),s,s,s,s,s,s,s,s),s,s)}w=e.b
w.toString
v=this.a
w=A.R_(d,w)
v.f=w
v=v.y&&v.at
v=E.aH(!0,!0,!0,"smId",F.a5,B.U(C.z,D.aTl,C.r,s,s,s,s,s,s,s,C.X,s,s,s),v,0/0)
u=E.aH(!0,!0,!0,"id",F.a5,B.U(C.z,K.ch,C.r,s,s,s,s,s,s,s,C.X,s,s,s),!0,0/0)
t=B.F(d,s,x.w).w.a.a>1200?F.as:F.a5
return B.aj(M.hm(!0,!0,B.b([v,u,E.aH(!0,!0,!0,"name",t,B.U(C.z,L.iC,C.r,s,s,s,s,s,s,s,C.X,s,s,s),!0,0/0),E.aH(!0,!0,!0,"before",F.a5,B.U(C.z,D.aSZ,C.r,s,s,s,s,s,s,s,C.X,s,s,s),!0,0/0),E.aH(!0,!0,!0,"after",F.a5,B.U(C.z,D.aUa,C.r,s,s,s,s,s,s,s,C.X,s,s,s),!0,0/0)],x.t),s,50,s,!1,w),1)},
$S:z+0}
A.bzN.prototype={
$1(d){var w=x.F
return new E.au(B.b([new E.M("smId",d.a,w),new E.M("id",d.b,w),new E.M("name",d.c,w),new E.M("before",d.e,w),new E.M("after",d.f,w)],x.W))},
$S:z+1}
A.bzM.prototype={
$1(d){var w=null
if(d.a==="actions")return B.U(C.ah,new O.eM(new A.bzK(),new A.bzL(),w,w,this.a.fy,w),C.r,w,w,w,w,w,w,w,C.P,w,w,w)
else return B.U(C.z,B.l(J.u(d.b),w,C.o,w,w,w,w,w,w),C.r,w,w,w,w,w,w,w,C.P,w,w,w)},
$S:z+2}
A.bzK.prototype={
$0(){},
$S:0}
A.bzL.prototype={
$0(){},
$S:0}
A.aYp.prototype={
$1(d){return d.b5()},
$S:z+3};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(A.rV,B.ag)
w(A.EO,B.G)
w(A.aMW,B.Q)
v(B.b0,[A.dPr,A.dPs,A.dPn,A.dPo,A.dP6,A.dP5,A.dPe,A.dP7,A.dPf,A.dPg,A.dPh,A.dPl,A.dPk,A.dP8,A.dP9,A.dPa,A.bzN,A.bzM,A.aYp])
v(B.b8,[A.dPq,A.dPm,A.dPp,A.dOW,A.dOX,A.dP4,A.dP3,A.dP2,A.dP1,A.dPj,A.dP0,A.dPi,A.dOZ,A.dP_,A.dOY,A.dOV,A.dOU,A.dPc,A.dOT,A.dPb,A.bzK,A.bzL])
w(A.dPd,B.bk)
w(A.auB,E.dQ)})()
B.b6(b.typeUniverse,JSON.parse('{"EO":{"G":[],"r":[]},"aMW":{"Q":["EO"]},"auB":{"bw":[],"aS":[]}}'))
var y={b:"Only Default SM Sale/Return Current Stock"}
var x=(function rtii(){var w=B.I
return{l:w("x<q<rV>>"),O:w("x<@>"),F:w("M<@>"),n:w("au"),_:w("t<@>"),W:w("n<M<@>>"),K:w("n<au>"),t:w("n<dF>"),e:w("n<rV>"),R:w("n<dK>"),p:w("n<r>"),E:w("n<~({propertyName:d?,recalculateRowHeight:L,rowColumnIndex:aB?})>"),f:w("n<~({rowColumnIndex:aB?})>"),Q:w("q<dv>"),X:w("q<rV>"),P:w("bg<d,@>"),w:w("ba"),a:w("H"),I:w("av<~({propertyName:d?,recalculateRowHeight:L,rowColumnIndex:aB?})>"),Z:w("av<~({rowColumnIndex:aB?})>"),N:w("d"),z:w("@"),H:w("~")}})();(function constants(){D.aAx=new B.dl("Missing Information","No data available for update",C.a4,null,null,null,null)
D.aHW=new N.bj("Re Calculate Stock",null,"stock",null)
D.aSZ=new B.B("Before",null,null,null,null,null,null,null,null,null,null)
D.aTl=new B.B("SMID",null,null,null,null,null,null,null,null,null,null)
D.aU1=new B.B("Salesman Current Stock",null,null,null,null,null,null,null,null,null,null)
D.aU6=new B.B(y.b,null,null,null,null,null,C.o,null,null,null,null)
D.aUa=new B.B("After Update ",null,null,null,null,null,null,null,null,null,null)
D.aUu=new B.B("Salesman Current Stock",null,null,null,null,null,C.o,null,null,null,null)
D.a_j=new B.B("Is StockList",null,null,null,null,null,null,null,null,null,null)
D.aV1=new B.B(y.b,null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_623",e:"endPart",h:b})})($__dart_deferred_initializers__,"xNv8EhSIsyCbmh25US9niCF+/rg=");
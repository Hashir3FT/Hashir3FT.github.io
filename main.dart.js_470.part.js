((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_470",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
eA2(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){return new B.jL(s,t,q,a0,v,f,g,w,h,j,i,u,r,n,l,p,o,x,d,k,e,m)},
eA3(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.aK(a1),d=e.i(a1,"NetValue"),a0=e.i(a1,"InvOfferFTax")
if(a0==null)a0=0
x=e.i(a1,"PartyName")
w=e.i(a1,"Narration")
if(w==null)w=""
v=e.i(a1,"BillNo")
if(v==null)v=""
u=e.i(a1,"VendorId")
if(u==null)u=""
t=e.i(a1,"UserID")
if(t==null)t=0
s=e.i(a1,"SpecialDiscount")
if(s==null)s=0
r=e.i(a1,"PurchaseId")
q=e.i(a1,"OfficeID")
if(q==null)q=0
p=e.i(a1,"IsPosted")
if(p==null)p=!1
o=e.i(a1,"IsFinalized")
n=e.i(a1,"AccountNo")
if(n==null)n=""
m=e.i(a1,"Disc2Ratio")
if(m==null)m=0
l=e.i(a1,"FTaxRatio")
if(l==null)l=0
k=e.i(a1,"InvOfferDiscount")
if(k==null)k=0
j=e.i(a1,"InvOfferSTax")
if(j==null)j=0
i=e.i(a1,"PreviousCredit")
if(i==null)i=0
h=e.i(a1,"PurReturnId")
g=e.i(a1,"ReceivedAmount")
if(g==null)g=0
f=e.i(a1,"ReturnDate")
if(f==null)f=""
e=y.d.a(e.i(a1,"ListBody"))
if(e==null)e=null
else{e=J.cw(e,new B.bqV(),y.g)
e=A.a5(e,!0,e.$ti.j("az.E"))}return B.eA2(n,v,m,l,k,a0,j,o,p,e,w,d,q,x,i,h,r,g,f,s,t,u)},
eA0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4,a5,a6,a7){return new B.mf(w,u,q,o,a0,x,d,t,e,g,f,p,a2,a3,n,m,j,a7,a6,a5,i,h,s,l,k,a1,v,r)},
jL:function jL(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=t
_.CW=u
_.cx=v
_.cy=w
_.db=x
_.dx=a0},
bqV:function bqV(){},
bqW:function bqW(){},
mf:function mf(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4,a5,a6){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=t
_.CW=u
_.cx=v
_.cy=w
_.db=x
_.dx=a0
_.dy=a1
_.fr=a2
_.fx=a3
_.fy=a4
_.go=a5
_.id=a6},
MQ(d,e,f,g,h){return B.eO8(d,e,f,g,h)},
eO8(d,e,f,g,h){var x=0,w=A.i(y.m),v,u=2,t,s,r,q,p,o,n,m,l,k,j
var $async$MQ=A.j(function(i,a0){if(i===1){t=a0
x=u}while(true)switch(x){case 0:u=4
s=A.aO("GET",A.ac($.ag+"/Purchase/GetAllPurchaseReturns?fromDate="+d+"&toDate="+e+"&filter="+f+"&vendor="+h+"&officeId="+g,0,null))
x=7
return A.c(J.aP(s),$async$MQ)
case 7:r=a0
x=8
return A.c(C.F.af(r.w),$async$MQ)
case 8:q=a0
x=r.b===200?9:10
break
case 9:l=C.k.C(0,q,null)
x=11
return A.c(y.i.b(l)?l:A.bU(l,y.b),$async$MQ)
case 11:p=a0
o=A.b([],y.j)
for(l=J.aZ(J.B(p,"data"));l.L();){n=l.ga1(l)
J.c9(o,B.eA3(n))}v=new A.x(o,1,null,null,y.m)
x=1
break
case 10:l=A.Z(C.k.C(0,q,null),y.a)
v=l
x=1
break
u=2
x=6
break
case 4:u=3
j=t
m=A.W(j)
l=J.u(m)
v=new A.x(null,0,l,null,y.m)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$MQ,w)},
Aj(d){return B.ePQ(d)},
ePQ(d){var x=0,w=A.i(y.z),v,u=2,t,s,r,q,p,o,n,m,l
var $async$Aj=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.aO("GET",A.ac($.ag+"/Purchase/GetPurchaseReturnById?invoiceId="+d,0,null))
x=7
return A.c(J.aP(s),$async$Aj)
case 7:r=f
x=8
return A.c(C.F.af(r.w),$async$Aj)
case 8:q=f
x=r.b===200?9:10
break
case 9:n=C.k.C(0,q,null)
x=11
return A.c(y.i.b(n)?n:A.bU(n,y.b),$async$Aj)
case 11:p=f
n=B.eA3(J.B(p,"data"))
v=new A.x(n,1,null,null,y.z)
x=1
break
case 10:n=A.Z(C.k.C(0,q,null),y.b)
v=n
x=1
break
u=2
x=6
break
case 4:u=3
l=t
o=A.W(l)
n=J.u(o)
v=new A.x(null,0,n,null,y.z)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$Aj,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[245],B)
B.jL.prototype={
b_(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=" ",d=f.a,a0=f.b,a1=f.d
if(a1==null)a1=e
x=f.e
if(x==null)x=e
w=f.f
if(w==null)w=0
v=f.r
if(v==null)v=0
u=f.w
if(u==null)u=0
t=f.x
if(t==null)t=0
s=f.y
if(s==null)s=0
r=f.z
if(r==null)r=0
q=f.Q
if(q==null)q=0
p=f.as
if(p==null)p=0
o=f.at
if(o==null)o=e
n=f.ay
if(n==null)n=0
m=f.ch
if(m==null)m=0
l=f.CW
if(l==null)l=0
k=f.cx
if(k==null)k=e
j=f.c
if(j==null)j=e
i=f.db
if(i==null)i=e
h=f.dx
if(h==null)h=null
else{g=A.ar(h).j("ak<1,bk<d,@>>")
g=A.a5(new A.ak(h,new B.bqW(),g),!0,g.j("az.E"))
h=g}return A.a8(["PurReturnId",d,"PurchaseId",a0,"VendorId",a1,"ReturnDate",x,"Disc2Ratio",w,"FTaxRatio",v,"SpecialDiscount",u,"InvOfferDiscount",t,"InvOfferSTax",s,"InvOfferFTax",r,"ReceivedAmount",q,"PreviousCredit",p,"Narration",o,"IsPosted",f.ax===!0,"OfficeID",n,"NetValue",m,"UserID",l,"AccountNo",k,"IsFinalized",f.cy===!0,"PartyName",j,"BillNo",i,"ListBody",h],y.w,y.b)}}
B.mf.prototype={
b_(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.d
if(e==null)e=1
x=f.as
if(x==null)x=0
w=f.y
if(w==null)w=0
v=f.x
if(v==null)v=0
u=f.dx
if(u==null)u=0
t=f.w
if(t==null)t=0
s=f.r
if(s==null)s=0
r=f.e
if(r==null)r=0
q=f.f
if(q==null)q=0
p=f.CW
if(p==null)p=0
o=f.cy
if(o==null)o=0
n=f.db
if(n==null)n=0
m=f.Q
if(m==null)m=0
l=f.dy
if(l==null)l=0
k=f.at
if(k==null)k=0
j=f.cx
if(j==null)j=0
i=f.z
if(i==null)i=0
h=f.go
if(h==null)h=""
g=f.id
if(g==null)g=""
return A.a8(["PurReturnId",f.a,"IsFinalized",f.fx===!0,"ProductId",f.b,"Multiplier",e,"STaxRatio",x,"DiscValPack",w,"DiscRatio",v,"ExtraFTaxBns",u,"PricePack",t,"BnsLose",s,"QtyPack",r,"QtyLose",q,"TTLValue",p,"TTLFTax",o,"PackingId",f.c,"ExtraSTaxBns",n,"IsFreeProduct",f.fr===!0,"IsFTaxExempted",f.ch===!0,"IsValueB4Ratio",f.ax===!0,"OfferDiscount",m,"PerUnitCostLose",l,"STaxValPack",k,"TTLSTax",j,"IsSTaxOnBns",f.ay===!0,"DiscValLose",i,"ProductName",h,"PackingName",g],y.w,y.b)}}
var z=a.updateTypes(["mf(@)","bk<d,@>(mf)"])
B.bqV.prototype={
$1(a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=J.aK(a6),a4=a3.i(a6,"PurReturnId"),a5=a3.i(a6,"IsFinalized")
if(a5==null)a5=!1
x=a3.i(a6,"ProductId")
if(x==null)x=0
w=a3.i(a6,"Multiplier")
if(w==null)w=1
v=a3.i(a6,"STaxRatio")
if(v==null)v=0
u=a3.i(a6,"DiscValPack")
if(u==null)u=0
t=a3.i(a6,"DiscRatio")
if(t==null)t=0
s=a3.i(a6,"ExtraFTaxBns")
if(s==null)s=0
r=a3.i(a6,"PricePack")
if(r==null)r=0
q=a3.i(a6,"BnsLose")
if(q==null)q=0
p=a3.i(a6,"QtyPack")
if(p==null)p=0
o=a3.i(a6,"QtyLose")
if(o==null)o=0
n=a3.i(a6,"TTLValue")
if(n==null)n=0
m=a3.i(a6,"TTLFTax")
if(m==null)m=0
l=a3.i(a6,"PackingId")
k=a3.i(a6,"ExtraSTaxBns")
if(k==null)k=0
j=a3.i(a6,"IsFreeProduct")
if(j==null)j=!1
i=a3.i(a6,"IsFTaxExempted")
if(i==null)i=!1
h=a3.i(a6,"IsValueB4Ratio")
if(h==null)h=!1
g=a3.i(a6,"OfferDiscount")
if(g==null)g=0
f=a3.i(a6,"PerUnitCostLose")
if(f==null)f=0
e=a3.i(a6,"STaxValPack")
if(e==null)e=0
d=a3.i(a6,"TTLSTax")
if(d==null)d=0
a0=a3.i(a6,"IsSTaxOnBns")
if(a0==null)a0=!1
a1=a3.i(a6,"DiscValLose")
if(a1==null)a1=0
a2=a3.i(a6,"ProductName")
if(a2==null)a2=" "
a3=a3.i(a6,"PackingName")
return B.eA0(q,t,a1,u,s,k,i,a5,j,a0,h,w,g,l,a3==null?" ":a3,f,r,x,a2,a4,o,p,null,v,e,null,m,d,n)},
$S:z+0}
B.bqW.prototype={
$1(d){return d.b_()},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.af,[B.jL,B.mf])
x(A.b2,[B.bqV,B.bqW])})()
var y={m:A.E("x<q<jL>>"),z:A.E("x<@>"),i:A.E("t<@>"),j:A.E("m<jL>"),a:A.E("q<jL>"),g:A.E("mf"),w:A.E("d"),b:A.E("@"),d:A.E("q<@>?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_470",e:"endPart",h:b})})($__dart_deferred_initializers__,"ai+gAbbH+mUlLb/C1D+ebn95BrU=");
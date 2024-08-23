((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_556",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={
eAG(c0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=J.aK(c0),b9=b8.i(c0,"OrderId")
if(b9==null)b9=0
x=b8.i(c0,"BillNo")
if(x==null)x=0
w=b8.i(c0,"SectorID")
if(w==null)w=0
v=b8.i(c0,"UserNo")
if(v==null)v=0
u=b8.i(c0,"OfferID")
if(u==null)u=0
t=b8.i(c0,"BookerID")
if(t==null)t=0
s=b8.i(c0,"OfficeID")
if(s==null)s=0
r=b8.i(c0,"DueDays")
if(r==null)r=0
q=b8.i(c0,"IDOffice")
if(q==null)q=0
p=b8.i(c0,"OrderDate")
if(p==null)p=""
o=b8.i(c0,"CustomerId")
if(o==null)o=""
n=b8.i(c0,"SalesmanId")
if(n==null)n=""
m=b8.i(c0,"Narration")
if(m==null)m=""
l=b8.i(c0,"InvoiceNotes")
if(l==null)l=""
k=b8.i(c0,"BiltyNo")
if(k==null)k=""
j=b8.i(c0,"TransportName")
if(j==null)j=""
i=b8.i(c0,"DeliveryDate")
if(i==null)i=""
h=b8.i(c0,"TownName")
if(h==null)h=""
g=b8.i(c0,"SectorName")
if(g==null)g=""
f=b8.i(c0,"SalesmanName")
if(f==null)f=""
e=b8.i(c0,"PartyName")
if(e==null)e=""
d=b8.i(c0,"InvType")
if(d==null)d=""
a0=b8.i(c0,"SupervisorName")
if(a0==null)a0=""
a1=b8.i(c0,"IsStockist")
if(a1==null)a1=!1
a2=b8.i(c0,"OldIsStockist")
a3=b8.i(c0,"IsPosted")
if(a3==null)a3=!1
a4=b8.i(c0,"IsMRP")
if(a4==null)a4=!1
a5=b8.i(c0,"IsRP")
if(a5==null)a5=!1
a6=b8.i(c0,"IsCancel")
if(a6==null)a6=!1
a7=b8.i(c0,"IsSupervised")
if(a7==null)a7=!1
a8=b8.i(c0,"Disc2Ratio")
if(a8==null)a8=0
a9=b8.i(c0,"FTaxRatio")
if(a9==null)a9=0
b0=b8.i(c0,"SpecialDiscount")
if(b0==null)b0=0
b1=b8.i(c0,"InvOfferFTax")
if(b1==null)b1=0
b2=b8.i(c0,"InvOfferSTax")
if(b2==null)b2=0
b3=b8.i(c0,"ReceivedAmount")
if(b3==null)b3=0
b4=b8.i(c0,"PreviousCredit")
if(b4==null)b4=0
b5=b8.i(c0,"NetValue")
if(b5==null)b5=0
b6=b8.i(c0,"DebitLimit")
if(b6==null)b6=0
b7=b8.i(c0,"InvOfferDiscount")
if(b7==null)b7=0
return D.eAF(x,B.f2e(b8.i(c0,"ListBody")),t,k,o,b6,i,a8,r,a9,q,b7,b1,b2,d,l,a6,a4,a3,a5,a1,a7,m,b5,u,s,a2,p,b9,e,b4,b3,n,f,w,g,b0,a0,h,j,v)},
f2e(d){var x
if(y.d.b(d)&&d!=null){x=J.cw(d,new B.bvO(),y.i)
return A.a5(x,!0,x.$ti.j("az.E"))}else return A.b([],y.m)},
bvO:function bvO(){},
MR(d,e,f,g){var x=!1,w=!1,v=!1,u=!1,t=!1,s=!1,r=!1
return B.eOe(d,e,f,g)},
eOe(a1,a2,a3,a4){var x=0,w=A.i(y.q),v,u=2,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$MR=A.j(function(a5,a6){if(a5===1){t=a6
x=u}while(true)switch(x){case 0:j=!1
i=!1
h=!1
g=!1
f=!1
e=!1
d=!1
u=4
s=A.aO("GET",A.ac($.ag+"/Sale/GetSaleOrder?filter="+a1+"&fromDate="+a2+"&toDate="+a3+"&officeId="+a4+"&AllSaleOrders="+A.o(j)+"&vIsDispatchOrder="+A.o(h)+"&ParaInIsDeliveryOrder="+A.o(d)+"&vIsOpenProductName="+A.o(f)+"&IsFromSales="+A.o(g)+"&IsSupervised="+A.o(e)+"&IsCancel="+A.o(i),0,null))
x=7
return A.c(J.aP(s),$async$MR)
case 7:r=a6
x=8
return A.c(C.F.af(r.w),$async$MR)
case 8:q=a6
if(r.b===200){p=C.k.C(0,q,null)
o=A.b([],y.b)
for(l=J.aZ(J.B(p,"data"));l.L();){n=l.ga1(l)
J.c9(o,B.eAG(n))}v=new A.x(o,1,null,null,y.q)
x=1
break}l=A.Z(C.k.C(0,q,null),y.D)
v=l
x=1
break
u=2
x=6
break
case 4:u=3
a0=t
m=A.W(a0)
l=J.u(m)
v=new A.x(null,0,l,null,y.q)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$MR,w)}}
J=c[1]
A=c[0]
C=c[2]
D=c[279]
B=a.updateHolder(c[275],B)
var z=a.updateTypes(["ol(@)"])
B.bvO.prototype={
$1(b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=J.aK(b2),b0=a9.i(b2,"OrderId"),b1=a9.i(b2,"ProductId")
if(b1==null)b1=""
x=a9.i(b2,"PackingId")
if(x==null)x=0
w=a9.i(b2,"Multiplier")
if(w==null)w=0
v=a9.i(b2,"QtyPack")
if(v==null)v=0
u=a9.i(b2,"QtyLose")
if(u==null)u=0
t=a9.i(b2,"BnsLose")
if(t==null)t=0
s=a9.i(b2,"PricePack")
if(s==null)s=0
r=a9.i(b2,"DiscRatio")
if(r==null)r=0
q=a9.i(b2,"DiscValPack")
if(q==null)q=0
p=a9.i(b2,"DiscValLose")
if(p==null)p=0
o=a9.i(b2,"STaxRatio")
if(o==null)o=0
n=a9.i(b2,"STaxValPack")
if(n==null)n=0
m=a9.i(b2,"IsValueB4Ratio")
if(m==null)m=!1
l=a9.i(b2,"IsSTaxOnBns")
if(l==null)l=!1
k=a9.i(b2,"IsFTaxExempted")
if(k==null)k=!1
j=a9.i(b2,"TTLValue")
if(j==null)j=0
i=a9.i(b2,"TTLSTax")
if(i==null)i=0
h=a9.i(b2,"TTLFTax")
if(h==null)h=0
g=a9.i(b2,"ExtraSTaxBns")
if(g==null)g=0
f=a9.i(b2,"ExtraFTaxBns")
if(f==null)f=0
e=a9.i(b2,"PerUnitCostLose")
if(e==null)e=0
d=a9.i(b2,"IsFreeProduct")
if(d==null)d=!1
a0=a9.i(b2,"PriceHistoryId")
if(a0==null)a0=0
a1=a9.i(b2,"OfferDiscount")
if(a1==null)a1=0
a2=a9.i(b2,"IsDeleted")
if(a2==null)a2=!1
a3=a9.i(b2,"OfferID")
if(a3==null)a3=0
a4=a9.i(b2,"IsOffered")
if(a4==null)a4=!1
a5=a9.i(b2,"ProductName")
if(a5==null)a5=""
a6=a9.i(b2,"DiscRatio2")
if(a6==null)a6=0
a7=a9.i(b2,"WeightPerUnit")
if(a7==null)a7=0
a9=a9.i(b2,"WeightPerLtr")
return D.eAD(t,r,a6,p,q,f,g,a2,k,d,a4,l,m,w,a1,a3,b0,x,a8,e,a0,s,b1,a5,u,v,a8,a8,o,n,a8,h,i,j,a9==null?0:a9,a7)},
$S:z+0};(function inheritance(){var x=a.inherit
x(B.bvO,A.b2)})()
var y={q:A.E("x<q<ii>>"),m:A.E("m<ol>"),b:A.E("m<ii>"),D:A.E("q<ii>"),i:A.E("ol"),d:A.E("q<@>?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_556",e:"endPart",h:b})})($__dart_deferred_initializers__,"683F4uKP2JPSFU2+sEYgVA3nixw=");
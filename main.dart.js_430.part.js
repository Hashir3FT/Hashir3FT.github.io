((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_430",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
ezX(c4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=" ",c2=J.aK(c4),c3=c2.i(c4,"Date")
if(c3==null)c3=c1
x=c2.i(c4,"NetValue")
if(x==null)x=0
w=c2.i(c4,"SpecialDiscount")
if(w==null)w=0
v=c2.i(c4,"Narration")
if(v==null)v=c1
u=c2.i(c4,"DueDate")
if(u==null)u=c1
t=c2.i(c4,"GSTax")
if(t==null)t=0
s=c2.i(c4,"IsUploaded")
if(s==null)s=!1
r=c2.i(c4,"CustomerId")
if(r==null)r=""
q=c2.i(c4,"BillNo")
if(q==null)q=""
p=c2.i(c4,"BillDate")
if(p==null)p=c1
o=c2.i(c4,"IDOffice")
n=c2.i(c4,"PaidAmount")
if(n==null)n=0
m=c2.i(c4,"AccountNo")
if(m==null)m=c1
l=c2.i(c4,"Amount")
if(l==null)l=0
k=c2.i(c4,"BiltyNo")
if(k==null)k=c1
j=c2.i(c4,"ExtraSaleTaxVal")
if(j==null)j=0
i=c2.i(c4,"ExtraSaleTaxPer")
if(i==null)i=0
h=c2.i(c4,"FinalBalance")
if(h==null)h=0
g=c2.i(c4,"Freight2")
if(g==null)g=0
f=c2.i(c4,"FrmExp")
if(f==null)f=0
e=c2.i(c4,"FTaxPer")
if(e==null)e=0
d=c2.i(c4,"FTaxValue")
if(d==null)d=0
a0=c2.i(c4,"IncomeTaxPer")
if(a0==null)a0=0
a1=c2.i(c4,"IncomeTaxVal")
if(a1==null)a1=0
a2=c2.i(c4,"InvOfferFTax")
if(a2==null)a2=0
a3=c2.i(c4,"IsFinalized")
if(a3==null)a3=!1
a4=c2.i(c4,"IsPosted")
if(a4==null)a4=!1
a5=c2.i(c4,"ITax2")
if(a5==null)a5=0
a6=c2.i(c4,"OfferID")
if(a6==null)a6=0
a7=c2.i(c4,"OfficeID")
if(a7==null)a7=0
a8=c2.i(c4,"PreviousBal")
if(a8==null)a8=0
a9=c2.i(c4,"PurchaseDate")
b0=c2.i(c4,"PurchaseID")
if(b0==null)b0=c1
b1=c2.i(c4,"PurOrderID")
if(b1==null)b1=0
b2=c2.i(c4,"SaleTaxPer")
if(b2==null)b2=0
b3=c2.i(c4,"SaleTaxVal")
if(b3==null)b3=0
b4=c2.i(c4,"TradeDiscount")
if(b4==null)b4=0
b5=c2.i(c4,"Unloading2")
if(b5==null)b5=0
b6=c2.i(c4,"UserID")
if(b6==null)b6=0
b7=c2.i(c4,"VendorID")
if(b7==null)b7=c1
b8=c2.i(c4,"WHTaxPer ")
if(b8==null)b8=0
b9=c2.i(c4,"PartyName")
if(b9==null)b9=c1
c0=c2.i(c4,"IsMultiInvoice")
if(c0==null)c0=!1
c2=y.d.a(c2.i(c4,"ListBody"))
if(c2==null)c2=null
else{c2=J.cw(c2,new B.bqw(),y.u)
c2=A.a5(c2,!0,c2.$ti.j("az.E"))}return D.ezW(m,l,p,q,k,r,c3,u,j,i,e,d,h,g,f,t,a5,o,a0,a1,a2,a3,c0,a4,s,c2,v,x,a6,a7,n,b9,a8,b1,a9,b0,b2,b3,w,b4,b5,b6,b7,b8)},
bqw:function bqw(){},
MO(d,e,f,g,h,i,j,k){return B.eO6(d,e,f,g,h,i,!1,k)},
eO6(d,e,f,g,h,i,a0,a1){var x=0,w=A.i(y.y),v,u=2,t,s,r,q,p,o,n,m,l,k,j
var $async$MO=A.j(function(a2,a3){if(a2===1){t=a3
x=u}while(true)switch(x){case 0:u=4
s=A.aO("GET",A.ac($.ag+"/Purchase/GetAllPurchaseInvoices?fromDate="+d+"&toDate="+e+"&filter="+h+"&vendor="+a1+"&billNo="+f+"&officeId="+i+"&chkAllInvoices="+g+"&vIsPGP=false",0,null))
x=7
return A.c(J.aP(s),$async$MO)
case 7:r=a3
x=8
return A.c(C.F.af(r.w),$async$MO)
case 8:q=a3
x=r.b===200?9:10
break
case 9:l=C.k.C(0,q,null)
x=11
return A.c(y.i.b(l)?l:A.bU(l,y.b),$async$MO)
case 11:p=a3
o=A.b([],y.h)
for(l=J.aZ(J.B(p,"data"));l.L();){n=l.ga1(l)
J.c9(o,B.ezX(n))}v=new A.x(o,1,null,null,y.y)
x=1
break
case 10:l=A.Z(C.k.C(0,q,null),y.n)
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
v=new A.x(null,0,l,null,y.y)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$MO,w)},
Hm(d,e){return B.ePO(d,!1)},
ePO(d,e){var x=0,w=A.i(y.z),v,u=2,t,s,r,q,p,o,n,m,l
var $async$Hm=A.j(function(f,g){if(f===1){t=g
x=u}while(true)switch(x){case 0:u=4
s=A.aO("GET",A.ac($.ag+"/Purchase/GetPurchaseInvoiceById?invoiceId="+d+"&isPGP=false",0,null))
x=7
return A.c(J.aP(s),$async$Hm)
case 7:r=g
x=8
return A.c(C.F.af(r.w),$async$Hm)
case 8:q=g
x=r.b===200?9:10
break
case 9:n=C.k.C(0,q,null)
x=11
return A.c(y.i.b(n)?n:A.bU(n,y.b),$async$Hm)
case 11:p=g
n=B.ezX(J.B(p,"data"))
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
return A.h($async$Hm,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[243],B)
D=c[269]
var z=a.updateTypes(["mK(@)"])
B.bqw.prototype={
$1(b8){var x,w,v,u,t,s,r,q,p,o,n,m=J.aK(b8),l=m.i(b8,"PurchaseId"),k=m.i(b8,"ProductId"),j=m.i(b8,"PackingId"),i=m.i(b8,"Multiplier"),h=m.i(b8,"QtyPack"),g=m.i(b8,"QtyLose"),f=m.i(b8,"BnsLose"),e=m.i(b8,"PricePack"),d=m.i(b8,"DiscRatio"),a0=m.i(b8,"DiscValPack"),a1=m.i(b8,"DiscValLose"),a2=m.i(b8,"OfferDiscount"),a3=m.i(b8,"STaxRatio"),a4=m.i(b8,"STaxValPack"),a5=m.i(b8,"IsValueB4Ratio"),a6=m.i(b8,"IsSTaxOnBns"),a7=m.i(b8,"IsFTaxExempted"),a8=m.i(b8,"TTLValue"),a9=m.i(b8,"TTLSTax"),b0=m.i(b8,"TTLFTax"),b1=m.i(b8,"TTITax"),b2=m.i(b8,"ExtraFTaxBns"),b3=m.i(b8,"ExtraSTaxBns"),b4=m.i(b8,"PerUnitCostLose"),b5=m.i(b8,"IsFreeProduct"),b6=m.i(b8,"IsDeleted"),b7=m.i(b8,"CustomerId")
if(b7==null)b7=" "
x=m.i(b8,"OfferID")
w=m.i(b8,"IsOffered")
v=m.i(b8,"Damage")
u=m.i(b8,"BarCode")
t=m.i(b8,"ITaxPer")
s=m.i(b8,"ThanQty")
r=m.i(b8,"Meters")
q=m.i(b8,"SizeID")
p=m.i(b8,"ColorID")
o=m.i(b8,"PackingName")
n=m.i(b8,"ProductName")
return D.ezV(u,f,p,b7,v,d,a1,a0,b2,b3,t,b6,a7,b5,w,a6,a5,r,i,m.i(b8,"NetVal"),a2,x,j,o,b4,e,k,n,l,g,h,null,a3,a4,q,b1,b0,a9,a8,s)},
$S:z+0};(function inheritance(){var x=a.inherit
x(B.bqw,A.b2)})()
var y={y:A.E("x<q<k6>>"),z:A.E("x<@>"),i:A.E("t<@>"),h:A.E("m<k6>"),n:A.E("q<k6>"),u:A.E("mK"),b:A.E("@"),d:A.E("q<@>?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_430",e:"endPart",h:b})})($__dart_deferred_initializers__,"5cMwgi7QSAmqURrsRZo2shERJWA=");
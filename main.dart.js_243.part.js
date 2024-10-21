((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_243",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
eIT(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=J.aK(d),f=g.i(d,"OfficeID")
if(f==null)f=0
x=g.i(d,"SpecialDiscount")
if(x==null)x=0
w=g.i(d,"PaidAmount")
if(w==null)w=0
v=g.i(d,"BillDate")
if(v==null)v=""
u=g.i(d,"BillNo")
if(u==null)u=""
t=g.i(d,"CustomerID")
if(t==null)t=""
s=g.i(d,"DemandID")
if(s==null)s=0
r=g.i(d,"DueDate")
if(r==null)r=""
q=g.i(d,"GSTax")
if(q==null)q=0
p=g.i(d,"IDOffice")
if(p==null)p=0
o=g.i(d,"IsUploaded")
if(o==null)o=!1
n=g.i(d,"Narration")
if(n==null)n=" "
m=g.i(d,"OrderDate")
if(m==null)m=" "
l=g.i(d,"PreBalance")
if(l==null)l=0
k=g.i(d,"PurOrderID")
if(k==null)k=0
j=g.i(d,"SalesmanID")
if(j==null)j=""
i=g.i(d,"VendorID")
if(i==null)i=""
h=g.i(d,"PartyName")
if(h==null)h=" "
g=y.d.a(g.i(d,"ListBody"))
if(g==null)g=null
else{g=J.cx(g,new B.byY(),y.x)
g=A.a4(g,!0,g.$ti.k("aA.E"))}return D.eIS(v,u,t,s,r,q,p,o,g,n,f,m,w,h,l,k,j,x,i)},
byY:function byY(){},
MM(d,e,f,g){return B.eX9(d,e,f,g)},
eX9(d,e,f,g){var x=0,w=A.k(y.w),v,u=2,t,s,r,q,p,o,n,m,l,k,j
var $async$MM=A.l(function(h,i){if(h===1){t=i
x=u}while(true)switch(x){case 0:u=4
s=A.aO("GET",A.ad($.ah+"/Purchase/GetAllPurchaseOrders?fromDate="+d+"&toDate="+e+"&filter=&vendor=&billNo=&officeId="+f+"&chkAllOrders=false&vIsPGP=false",0,null))
x=7
return A.d(J.aQ(s),$async$MM)
case 7:r=i
x=8
return A.d(C.E.am(r.w),$async$MM)
case 8:q=i
x=r.b===200?9:10
break
case 9:l=C.k.C(0,q,null)
x=11
return A.d(y.i.b(l)?l:A.bX(l,y.b),$async$MM)
case 11:p=i
o=A.b([],y.F)
for(l=J.b0(J.A(p,"data"));l.O();){n=l.ga4(l)
J.cf(o,B.eIT(n))}v=new A.x(o,1,null,null,y.w)
x=1
break
case 10:l=A.X(C.k.C(0,q,null),y.e)
v=l
x=1
break
u=2
x=6
break
case 4:u=3
j=t
m=A.V(j)
l=J.u(m)
v=new A.x(null,0,l,null,y.w)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.i(v,w)
case 2:return A.h(t,w)}})
return A.j($async$MM,w)},
Ar(d){return B.eYR(d)},
eYR(d){var x=0,w=A.k(y.f),v,u=2,t,s,r,q,p,o,n,m,l
var $async$Ar=A.l(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.aO("GET",A.ad($.ah+"/Purchase/GetPurchaseOrderById?orderId="+d,0,null))
x=7
return A.d(J.aQ(s),$async$Ar)
case 7:r=f
x=8
return A.d(C.E.am(r.w),$async$Ar)
case 8:q=f
x=r.b===200?9:10
break
case 9:n=C.k.C(0,q,null)
x=11
return A.d(y.i.b(n)?n:A.bX(n,y.b),$async$Ar)
case 11:p=f
n=B.eIT(J.A(p,"data"))
v=new A.x(n,1,null,null,y.f)
x=1
break
case 10:n=A.X(C.k.C(0,q,null),y.h)
v=n
x=1
break
u=2
x=6
break
case 4:u=3
l=t
o=A.V(l)
n=J.u(o)
v=new A.x(null,0,n,null,y.f)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.i(v,w)
case 2:return A.h(t,w)}})
return A.j($async$Ar,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[244],B)
D=c[269]
var z=a.updateTypes(["mQ(@)"])
B.byY.prototype={
$1(b8){var x,w,v,u,t,s,r,q,p,o,n,m,l=J.aK(b8),k=l.i(b8,"PurOrderId"),j=l.i(b8,"ProductId"),i=l.i(b8,"PackingId"),h=l.i(b8,"Multiplier"),g=l.i(b8,"QtyPack"),f=l.i(b8,"QtyLose"),e=l.i(b8,"BnsLose"),d=l.i(b8,"PricePack"),a0=l.i(b8,"DiscRatio"),a1=l.i(b8,"DiscValPack"),a2=l.i(b8,"DiscValLose"),a3=l.i(b8,"OfferDiscount"),a4=l.i(b8,"STaxRatio"),a5=l.i(b8,"STaxValPack"),a6=l.i(b8,"IsValueB4Ratio"),a7=l.i(b8,"IsSTaxOnBns"),a8=l.i(b8,"IsFTaxExempted"),a9=l.i(b8,"TTLValue"),b0=l.i(b8,"TTLSTax"),b1=l.i(b8,"TTLFTax"),b2=l.i(b8,"ExtraSTaxBns"),b3=l.i(b8,"ExtraFTaxBns"),b4=l.i(b8,"PerUnitCostLose"),b5=l.i(b8,"IsFreeProduct"),b6=l.i(b8,"IsDeleted"),b7=l.i(b8,"CustomerId")
if(b7==null)b7=" "
x=l.i(b8,"DemandQtyP")
w=l.i(b8,"DemandQtyL")
v=l.i(b8,"SizeID")
u=l.i(b8,"ColorID")
t=l.i(b8,"ITaxPer")
s=l.i(b8,"TTLITax")
r=l.i(b8,"ProductName")
q=l.i(b8,"ShadeCode")
p=l.i(b8,"MinStockLevel")
o=l.i(b8,"MaxStockLevel")
n=l.i(b8,"vTTLSTax")
m=l.i(b8,"Qty")
return D.eye(e,u,b7,w,x,a0,a2,a1,b3,b2,t,b6,a8,b5,a7,a6,o,p,h,a3,i,l.i(b8,"PackingName"),b4,d,j,r,k,m,f,g,null,a4,a5,l.i(b8,"SerialCount"),q,v,b1,s,b0,a9,n)},
$S:z+0};(function inheritance(){var x=a.inherit
x(B.byY,A.b2)})()
var y={w:A.I("x<q<j9>>"),f:A.I("x<j9>"),i:A.I("t<@>"),F:A.I("n<j9>"),e:A.I("q<j9>"),x:A.I("mQ"),h:A.I("j9"),b:A.I("@"),d:A.I("q<@>?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_243",e:"endPart",h:b})})($__dart_deferred_initializers__,"UOX2TTmPDsF/vUrk/Li9im6h7zs=");
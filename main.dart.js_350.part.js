((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_350",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
eHB(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=J.aI(d),f=g.i(d,"OfficeID")
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
else{g=J.cw(g,new B.bxL(),y.x)
g=A.a4(g,!0,g.$ti.k("aA.E"))}return D.eHA(v,u,t,s,r,q,p,o,g,n,f,m,w,h,l,k,j,x,i)},
bxL:function bxL(){},
MW(d,e,f,g){return B.eVV(d,e,f,g)},
eVV(d,e,f,g){var x=0,w=A.i(y.w),v,u=2,t,s,r,q,p,o,n,m,l,k,j
var $async$MW=A.j(function(h,i){if(h===1){t=i
x=u}while(true)switch(x){case 0:u=4
s=A.aN("GET",A.ad($.ah+"/Purchase/GetAllPurchaseOrders?fromDate="+d+"&toDate="+e+"&filter=&vendor=&billNo=&officeId="+f+"&chkAllOrders=false&vIsPGP=false",0,null))
x=7
return A.c(J.aO(s),$async$MW)
case 7:r=i
x=8
return A.c(C.E.ae(r.w),$async$MW)
case 8:q=i
x=r.b===200?9:10
break
case 9:l=C.k.C(0,q,null)
x=11
return A.c(y.i.b(l)?l:A.bR(l,y.b),$async$MW)
case 11:p=i
o=A.b([],y.F)
for(l=J.aZ(J.A(p,"data"));l.N();){n=l.ga1(l)
J.cd(o,B.eHB(n))}v=new A.x(o,1,null,null,y.w)
x=1
break
case 10:l=A.W(C.k.C(0,q,null),y.e)
v=l
x=1
break
u=2
x=6
break
case 4:u=3
j=t
m=A.U(j)
l=J.u(m)
v=new A.x(null,0,l,null,y.w)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$MW,w)},
Am(d){return B.eXC(d)},
eXC(d){var x=0,w=A.i(y.f),v,u=2,t,s,r,q,p,o,n,m,l
var $async$Am=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.aN("GET",A.ad($.ah+"/Purchase/GetPurchaseOrderById?orderId="+d,0,null))
x=7
return A.c(J.aO(s),$async$Am)
case 7:r=f
x=8
return A.c(C.E.ae(r.w),$async$Am)
case 8:q=f
x=r.b===200?9:10
break
case 9:n=C.k.C(0,q,null)
x=11
return A.c(y.i.b(n)?n:A.bR(n,y.b),$async$Am)
case 11:p=f
n=B.eHB(J.A(p,"data"))
v=new A.x(n,1,null,null,y.f)
x=1
break
case 10:n=A.W(C.k.C(0,q,null),y.h)
v=n
x=1
break
u=2
x=6
break
case 4:u=3
l=t
o=A.U(l)
n=J.u(o)
v=new A.x(null,0,n,null,y.f)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$Am,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[244],B)
D=c[270]
var z=a.updateTypes(["mR(@)"])
B.bxL.prototype={
$1(b8){var x,w,v,u,t,s,r,q,p,o,n,m,l=J.aI(b8),k=l.i(b8,"PurOrderId"),j=l.i(b8,"ProductId"),i=l.i(b8,"PackingId"),h=l.i(b8,"Multiplier"),g=l.i(b8,"QtyPack"),f=l.i(b8,"QtyLose"),e=l.i(b8,"BnsLose"),d=l.i(b8,"PricePack"),a0=l.i(b8,"DiscRatio"),a1=l.i(b8,"DiscValPack"),a2=l.i(b8,"DiscValLose"),a3=l.i(b8,"OfferDiscount"),a4=l.i(b8,"STaxRatio"),a5=l.i(b8,"STaxValPack"),a6=l.i(b8,"IsValueB4Ratio"),a7=l.i(b8,"IsSTaxOnBns"),a8=l.i(b8,"IsFTaxExempted"),a9=l.i(b8,"TTLValue"),b0=l.i(b8,"TTLSTax"),b1=l.i(b8,"TTLFTax"),b2=l.i(b8,"ExtraSTaxBns"),b3=l.i(b8,"ExtraFTaxBns"),b4=l.i(b8,"PerUnitCostLose"),b5=l.i(b8,"IsFreeProduct"),b6=l.i(b8,"IsDeleted"),b7=l.i(b8,"CustomerId")
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
return D.ewY(e,u,b7,w,x,a0,a2,a1,b3,b2,t,b6,a8,b5,a7,a6,o,p,h,a3,i,l.i(b8,"PackingName"),b4,d,j,r,k,m,f,g,null,a4,a5,l.i(b8,"SerialCount"),q,v,b1,s,b0,a9,n)},
$S:z+0};(function inheritance(){var x=a.inherit
x(B.bxL,A.b0)})()
var y={w:A.H("x<q<j6>>"),f:A.H("x<j6>"),i:A.H("t<@>"),F:A.H("m<j6>"),e:A.H("q<j6>"),x:A.H("mR"),h:A.H("j6"),b:A.H("@"),d:A.H("q<@>?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_350",e:"endPart",h:b})})($__dart_deferred_initializers__,"+VL2aO8S3bezaHwS8UL89O5Ndmc=");
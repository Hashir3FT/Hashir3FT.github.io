((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_565",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
Ws(){var x=0
return C.eWZ()},
eWZ(){var x=0,w=A.i(y.b),v,u=2,t,s,r,q,p,o,n,m,l,k
var $async$Ws=A.j(function(d,e){if(d===1){t=e
x=u}while(true)switch(x){case 0:l=0
u=4
s=A.aN("GET",A.ad($.ah+"/Sale/GetNextSaleInvoiceId?vOfficeID="+A.p(l),0,null))
x=7
return A.c(J.aO(s),$async$Ws)
case 7:r=e
x=8
return A.c(B.E.ae(r.w),$async$Ws)
case 8:q=e
if(r.b===200){p=B.k.C(0,q,null)
n=J.A(p,"data")
v=new A.x(n,1,null,null,y.b)
x=1
break}n=A.W(B.k.C(0,q,null),y.e)
v=n
x=1
break
u=2
x=6
break
case 4:u=3
k=t
o=A.U(k)
n=J.u(o)
v=new A.x(null,0,n,null,y.b)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$Ws,w)},
Wa(d){return C.eWO(d)},
eWO(d){var x=0,w=A.i(y.b),v,u=2,t,s,r,q,p,o,n,m,l
var $async$Wa=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.aN("GET",A.ad($.ah+"/Sale/GetNewSaleInvoiceId?saleDate="+d,0,null))
x=7
return A.c(J.aO(s),$async$Wa)
case 7:r=f
x=8
return A.c(B.E.ae(r.w),$async$Wa)
case 8:q=f
if(r.b===200){p=B.k.C(0,q,null)
n=J.A(p,"data")
v=new A.x(n,1,null,null,y.b)
x=1
break}n=A.W(B.k.C(0,q,null),y.e)
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
v=new A.x(null,0,n,null,y.b)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$Wa,w)},
WB(d){return C.eX8(d)},
eX8(d){var x=0,w=A.i(y.b),v,u=2,t,s,r,q,p,o,n,m,l
var $async$WB=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.aN("GET",A.ad($.ah+"/Sale/GetPerUnitCost?productId="+d,0,null))
x=7
return A.c(J.aO(s),$async$WB)
case 7:r=f
x=8
return A.c(B.E.ae(r.w),$async$WB)
case 8:q=f
if(r.b===200){p=B.k.C(0,q,null)
n=J.A(p,"data")
v=new A.x(n,1,null,null,y.b)
x=1
break}n=A.W(B.k.C(0,q,null),y.e)
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
v=new A.x(null,0,n,null,y.b)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$WB,w)},
WC(d){return C.eXn(d)},
eXn(d){var x=0,w=A.i(y.b),v,u=2,t,s,r,q,p,o,n,m,l
var $async$WC=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.aN("GET",A.ad($.ah+"/Sale/GetPurCost?productId="+d,0,null))
x=7
return A.c(J.aO(s),$async$WC)
case 7:r=f
x=8
return A.c(B.E.ae(r.w),$async$WC)
case 8:q=f
if(r.b===200){p=B.k.C(0,q,null)
n=J.A(p,"data")
v=new A.x(n,1,null,null,y.b)
x=1
break}n=A.W(B.k.C(0,q,null),y.e)
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
v=new A.x(null,0,n,null,y.b)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$WC,w)}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[247],C)
D=c[704]
var z=a.updateTypes([])
var y={b:A.H("x<@>"),e:A.H("@")};(function constants(){D.Sp=new A.cc("Oops","Order is cancelled.",B.B,null,null,null,null)
D.Su=new A.cc("Oops","Order is not supervised.",B.B,null,null,null,null)
D.Sx=new A.cc("Missing Information","Please select customer before proceeding further.",B.ak,null,null,null,null)
D.jD=new A.cc("Duplicate Product","Product with the same packing already exists.",B.ak,null,null,null,null)
D.tw=new A.y("No Price",null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_565",e:"endPart",h:b})})($__dart_deferred_initializers__,"ZBAI8dUkKdmqTszdyViiJ607vHU=");
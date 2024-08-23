((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_5",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={
evA(d){var x,w,v=J.aK(d),u=v.i(d,"CompanyID")
if(u==null)u=""
x=v.i(d,"CompanyName")
if(x==null)x=""
w=v.i(d,"VendorID")
if(w==null)w=""
v=v.i(d,"PrintWithGroup")
return new D.ad(u,x,w,v==null?"":v)},
fy(){var x=0,w=A.i(y.k),v,u=2,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$fy=A.j(function(d,e){if(d===1){t=e
x=u}while(true)switch(x){case 0:u=4
j=y.g
s=A.a8(["Content-Type","application/json"],j,j)
r=A.aO("GET",A.ac($.ag+"/Coding/GetCompanies?search=",0,null))
r.r.F(0,s)
x=7
return A.c(J.aP(r),$async$fy)
case 7:q=e
x=8
return A.c(C.F.af(q.w),$async$fy)
case 8:p=e
if(q.b===200){o=C.k.C(0,p,null)
n=J.B(o,"data")
m=A.b([],y.p)
for(j=J.aZ(n);j.L();){l=j.ga1(j)
J.c9(m,B.evA(l))}v=new A.x(m,1,null,null,y.k)
x=1
break}else{j=A.Z(A.fkD(p),y.b).d
j.toString
j=A.cW(j)
throw A.C(j)}u=2
x=6
break
case 4:u=3
h=t
k=A.W(h)
j=A.cW(J.u(k))
throw A.C(j)
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$fy,w)}}
J=c[1]
A=c[0]
C=c[2]
D=c[342]
B=a.updateHolder(c[340],B)
var z=a.updateTypes([])
var y={k:A.E("x<q<ad>>"),p:A.E("m<ad>"),g:A.E("d"),b:A.E("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_5",e:"endPart",h:b})})($__dart_deferred_initializers__,"QrV5RprxrYLVkm7gbXMIBeGHvLQ=");
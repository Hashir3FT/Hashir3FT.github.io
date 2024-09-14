((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_5",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,D,C={
eCT(d){var x,w,v=J.aI(d),u=v.i(d,"CompanyID")
if(u==null)u=""
x=v.i(d,"CompanyName")
if(x==null)x=""
w=v.i(d,"VendorID")
if(w==null)w=""
v=v.i(d,"PrintWithGroup")
return new D.ae(u,x,w,v==null?"":v)},
fE(){var x=0,w=A.i(y.k),v,u=2,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$fE=A.j(function(d,e){if(d===1){t=e
x=u}while(true)switch(x){case 0:u=4
j=y.g
s=A.a8(["Content-Type","application/json"],j,j)
r=A.aN("GET",A.ad($.ah+"/Coding/GetCompanies?search=",0,null))
r.r.F(0,s)
x=7
return A.c(J.aO(r),$async$fE)
case 7:q=e
x=8
return A.c(B.E.ae(q.w),$async$fE)
case 8:p=e
if(q.b===200){o=B.k.C(0,p,null)
n=J.A(o,"data")
m=A.b([],y.p)
for(j=J.aZ(n);j.N();){l=j.ga1(j)
J.cd(m,C.eCT(l))}v=new A.x(m,1,null,null,y.k)
x=1
break}else{j=A.W(B.k.C(0,p,null),y.b)
v=new A.x(null,0,j.d,null,y.k)
x=1
break}u=2
x=6
break
case 4:u=3
h=t
k=A.U(h)
j=J.u(k)
v=new A.x(null,0,j,null,y.k)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$fE,w)}}
J=c[1]
A=c[0]
B=c[2]
D=c[342]
C=a.updateHolder(c[340],C)
var z=a.updateTypes([])
var y={k:A.H("x<q<ae>>"),p:A.H("m<ae>"),g:A.H("d"),b:A.H("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_5",e:"endPart",h:b})})($__dart_deferred_initializers__,"K0HI6cvXvobRxHnlcNm+ojh7Z8M=");
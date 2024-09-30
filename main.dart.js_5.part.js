((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_5",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,D,C={
eEi(d){var x,w,v=J.aI(d),u=v.i(d,"CompanyID")
if(u==null)u=""
x=v.i(d,"CompanyName")
if(x==null)x=""
w=v.i(d,"VendorID")
if(w==null)w=""
v=v.i(d,"PrintWithGroup")
return new D.ae(u,x,w,v==null?"":v)},
fH(){var x=0,w=A.i(y.k),v,u=2,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$fH=A.j(function(d,e){if(d===1){t=e
x=u}while(true)switch(x){case 0:u=4
j=y.g
s=A.a8(["Content-Type","application/json"],j,j)
r=A.aN("GET",A.ad($.ah+"/Coding/GetCompanies?search=",0,null))
r.r.F(0,s)
x=7
return A.c(J.aO(r),$async$fH)
case 7:q=e
x=8
return A.c(B.E.ai(q.w),$async$fH)
case 8:p=e
if(q.b===200){o=B.k.C(0,p,null)
n=J.z(o,"data")
m=A.b([],y.p)
for(j=J.aZ(n);j.O();){l=j.ga2(j)
J.cc(m,C.eEi(l))}v=new A.x(m,1,null,null,y.k)
x=1
break}else{j=A.X(B.k.C(0,p,null),y.b)
v=new A.x(null,0,j.d,null,y.k)
x=1
break}u=2
x=6
break
case 4:u=3
h=t
k=A.V(h)
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
return A.h($async$fH,w)}}
J=c[1]
A=c[0]
B=c[2]
D=c[343]
C=a.updateHolder(c[341],C)
var z=a.updateTypes([])
var y={k:A.I("x<q<ae>>"),p:A.I("n<ae>"),g:A.I("d"),b:A.I("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_5",e:"endPart",h:b})})($__dart_deferred_initializers__,"0DlquQ5eXbJoAShM068GxKGVmas=");
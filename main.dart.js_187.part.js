((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_187",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
eKS(d){var x=J.aI(d),w=x.i(d,"TransportID")
if(w==null)w=0
x=x.i(d,"TransportName")
return new B.e3(w,x==null?"":x)},
e3:function e3(d,e){this.a=d
this.b=e},
r3(){var x=0,w=A.i(y.o),v,u=2,t,s,r,q,p,o,n,m,l,k,j,i
var $async$r3=A.j(function(d,e){if(d===1){t=e
x=u}while(true)switch(x){case 0:u=4
k=y.g
s=A.a8(["Content-Type","application/json"],k,k)
r=A.aN("GET",A.ad($.ah+"/Coding/GetTransports?search=",0,null))
r.r.F(0,s)
x=7
return A.c(J.aO(r),$async$r3)
case 7:q=e
x=8
return A.c(C.E.ai(q.w),$async$r3)
case 8:p=e
if(q.b===200){o=C.k.C(0,p,null)
n=A.b([],y.l)
for(k=J.aZ(J.z(o,"data"));k.O();){m=k.ga2(k)
J.cc(n,B.eKS(m))}v=new A.x(n,1,null,null,y.o)
x=1
break}k=A.X(C.k.C(0,p,null),y.b)
v=new A.x(null,0,k.d,null,y.o)
x=1
break
u=2
x=6
break
case 4:u=3
i=t
l=A.V(i)
k=J.u(l)
v=new A.x(null,0,k,null,y.o)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$r3,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[287],B)
B.e3.prototype={
b5(){return A.a8(["TransportID",this.a,"TransportName",this.b],y.g,y.b)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(B.e3,A.ag)})()
var y={o:A.I("x<q<e3>>"),l:A.I("n<e3>"),g:A.I("d"),b:A.I("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_187",e:"endPart",h:b})})($__dart_deferred_initializers__,"1yn75q2XduDEdJ34h5EWhe+VaQ0=");
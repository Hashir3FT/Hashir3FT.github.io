((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_247",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
eJs(d){var x=J.aI(d),w=x.i(d,"TransportID")
if(w==null)w=0
x=x.i(d,"TransportName")
return new B.e1(w,x==null?"":x)},
e1:function e1(d,e){this.a=d
this.b=e},
r0(){var x=0,w=A.i(y.o),v,u=2,t,s,r,q,p,o,n,m,l,k,j,i
var $async$r0=A.j(function(d,e){if(d===1){t=e
x=u}while(true)switch(x){case 0:u=4
k=y.g
s=A.a8(["Content-Type","application/json"],k,k)
r=A.aN("GET",A.ad($.ah+"/Coding/GetTransports?search=",0,null))
r.r.F(0,s)
x=7
return A.c(J.aO(r),$async$r0)
case 7:q=e
x=8
return A.c(C.E.ae(q.w),$async$r0)
case 8:p=e
if(q.b===200){o=C.k.C(0,p,null)
n=A.b([],y.l)
for(k=J.aZ(J.A(o,"data"));k.N();){m=k.ga1(k)
J.cd(n,B.eJs(m))}v=new A.x(n,1,null,null,y.o)
x=1
break}k=A.W(C.k.C(0,p,null),y.b)
v=new A.x(null,0,k.d,null,y.o)
x=1
break
u=2
x=6
break
case 4:u=3
i=t
l=A.U(i)
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
return A.h($async$r0,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[287],B)
B.e1.prototype={
b1(){return A.a8(["TransportID",this.a,"TransportName",this.b],y.g,y.b)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(B.e1,A.ag)})()
var y={o:A.H("x<q<e1>>"),l:A.H("m<e1>"),g:A.H("d"),b:A.H("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_247",e:"endPart",h:b})})($__dart_deferred_initializers__,"/4caNQDaiq29Bxtn6rVZPyLgQao=");
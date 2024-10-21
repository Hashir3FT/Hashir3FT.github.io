((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_179",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
eKX(d){var x=J.aK(d),w=x.i(d,"TransportID")
if(w==null)w=0
x=x.i(d,"TransportName")
return new B.e2(w,x==null?"":x)},
e2:function e2(d,e){this.a=d
this.b=e},
r2(){var x=0,w=A.k(y.o),v,u=2,t,s,r,q,p,o,n,m,l,k,j,i
var $async$r2=A.l(function(d,e){if(d===1){t=e
x=u}while(true)switch(x){case 0:u=4
k=y.g
s=A.a8(["Content-Type","application/json"],k,k)
r=A.aO("GET",A.ad($.ah+"/Coding/GetTransports?search=",0,null))
r.r.F(0,s)
x=7
return A.d(J.aQ(r),$async$r2)
case 7:q=e
x=8
return A.d(C.E.am(q.w),$async$r2)
case 8:p=e
if(q.b===200){o=C.k.C(0,p,null)
n=A.b([],y.l)
for(k=J.b0(J.A(o,"data"));k.O();){m=k.ga4(k)
J.cf(n,B.eKX(m))}v=new A.x(n,1,null,null,y.o)
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
case 6:case 1:return A.i(v,w)
case 2:return A.h(t,w)}})
return A.j($async$r2,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[286],B)
B.e2.prototype={
bb(){return A.a8(["TransportID",this.a,"TransportName",this.b],y.g,y.b)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(B.e2,A.ag)})()
var y={o:A.I("x<q<e2>>"),l:A.I("n<e2>"),g:A.I("e"),b:A.I("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_179",e:"endPart",h:b})})($__dart_deferred_initializers__,"1YpD9KQSIXkPnrm2diWWlHRa1IA=");
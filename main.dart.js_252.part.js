((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_252",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={c9:function c9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fK(d){return B.eYG(d)},
eYG(d){var x=0,w=A.i(y.d),v,u=2,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$fK=A.j(function(a0,a1){if(a0===1){t=a1
x=u}while(true)switch(x){case 0:u=4
s=A.aN("GET",A.ad($.ah+"/Sale/GetProductPackingById?productId="+d,0,null))
x=7
return A.c(J.aO(s),$async$fK)
case 7:r=a1
x=8
return A.c(C.E.ag(r.w),$async$fK)
case 8:q=a1
if(r.b===200){p=C.k.C(0,q,null)
o=A.b([],y.h)
for(l=J.aZ(J.A(p,"data"));l.N();){n=l.ga1(l)
k=n
j=J.aI(k)
i=j.i(k,"PackingId")
if(i==null)i=0
h=j.i(k,"PackingName")
if(h==null)h=""
g=j.i(k,"Multiplier")
if(g==null)g=0
k=j.i(k,"ProductId")
if(k==null)k=""
J.cb(o,new B.c9(k,h,i,g))}v=new A.x(o,1,null,null,y.d)
x=1
break}l=A.X(C.k.C(0,q,null),y.b)
v=new A.x(null,0,l.d,null,y.d)
x=1
break
u=2
x=6
break
case 4:u=3
e=t
m=A.V(e)
l=J.u(m)
v=new A.x(null,0,l,null,y.d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$fK,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[318],B)
B.c9.prototype={
b4(){return A.a8(["PackingId",this.c,"PackingName",this.b,"Multiplier",this.d],y.g,y.b)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(B.c9,A.ag)})()
var y={d:A.I("x<q<c9>>"),h:A.I("n<c9>"),g:A.I("d"),b:A.I("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_252",e:"endPart",h:b})})($__dart_deferred_initializers__,"SLbPmFKojsmoKvYy3MT9UCf05y0=");
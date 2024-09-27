((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_66",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={b4:function b4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
jZ(d){return B.eX0(d)},
eX0(a0){var x=0,w=A.i(y.h),v,u=2,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$jZ=A.j(function(a1,a2){if(a1===1){t=a2
x=u}while(true)switch(x){case 0:u=4
k=y.g
s=A.a8(["Content-Type","application/json"],k,k)
r=A.aN("GET",A.ad($.ah+"/Coding/GetPartiesGroup?groupId="+a0,0,null))
r.r.F(0,s)
x=7
return A.c(J.aO(r),$async$jZ)
case 7:q=a2
x=8
return A.c(C.E.ag(q.w),$async$jZ)
case 8:p=a2
if(q.b===200){o=C.k.C(0,p,null)
n=A.b([],y.c)
for(k=J.aZ(J.A(o,"data"));k.N();){m=k.ga1(k)
j=m
i=J.aI(j)
h=i.i(j,"GroupID")
if(h==null)h=0
g=i.i(j,"GroupName")
if(g==null)g=""
f=i.i(j,"PriceType")
if(f==null)f=""
j=i.i(j,"isSelected")
if(j==null)j=!1
J.cb(n,new B.b4(h,g,f,j))}v=new A.x(n,1,null,null,y.h)
x=1
break}else{k=A.X(C.k.C(0,p,null),y.b)
v=new A.x(null,0,k.d,null,y.h)
x=1
break}u=2
x=6
break
case 4:u=3
d=t
l=A.V(d)
k=J.u(l)
v=new A.x(null,0,k,null,y.h)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$jZ,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[328],B)
B.b4.prototype={
b4(){return A.a8(["GroupID",this.a,"GroupName",this.b,"PriceType",this.c],y.g,y.b)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(B.b4,A.ag)})()
var y={h:A.I("x<q<b4>>"),c:A.I("n<b4>"),g:A.I("d"),b:A.I("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_66",e:"endPart",h:b})})($__dart_deferred_initializers__,"ofCwRY9MTSCUYIwhDP2o/U20hhw=");
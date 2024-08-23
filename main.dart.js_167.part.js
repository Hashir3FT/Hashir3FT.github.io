((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_167",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
ezQ(d){var x,w,v=J.aK(d),u=v.i(d,"GroupID")
if(u==null)u=0
x=v.i(d,"GroupName")
if(x==null)x=""
w=v.i(d,"CompanyID")
if(w==null)w=""
v=v.i(d,"IsGroup")
return new B.aJ(u,x,w,v==null?!1:v)},
aJ:function aJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iU(){var x=0,w=A.i(y.a),v,u=2,t,s,r,q,p,o,n,m,l,k,j,i
var $async$iU=A.j(function(d,e){if(d===1){t=e
x=u}while(true)switch(x){case 0:u=4
k=y.g
s=A.a8(["Content-Type","application/json"],k,k)
r=A.aO("GET",A.ac($.ag+"/Coding/GetProductGroups",0,null))
r.r.F(0,s)
x=7
return A.c(J.aP(r),$async$iU)
case 7:q=e
x=8
return A.c(C.F.af(q.w),$async$iU)
case 8:p=e
if(q.b===200){o=C.k.C(0,p,null)
n=A.b([],y.j)
for(k=J.aZ(J.B(o,"data"));k.L();){m=k.ga1(k)
J.c9(n,B.ezQ(m))}v=new A.x(n,1,null,null,y.a)
x=1
break}else{k=A.Z(C.k.C(0,p,null),y.b)
v=new A.x(null,0,k.d,null,y.a)
x=1
break}u=2
x=6
break
case 4:u=3
i=t
l=A.W(i)
k=J.u(l)
v=new A.x(null,0,k,null,y.a)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$iU,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[333],B)
B.aJ.prototype={
b_(){var x=this
return A.a8(["GroupID",x.a,"GroupName",x.b,"CompanyID",x.c,"IsGroup",x.d],y.g,y.b)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(B.aJ,A.af)})()
var y={a:A.E("x<q<aJ>>"),j:A.E("m<aJ>"),g:A.E("d"),b:A.E("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_167",e:"endPart",h:b})})($__dart_deferred_initializers__,"vHhdor/aAJGKrrB2fB/H2I8Qd9M=");
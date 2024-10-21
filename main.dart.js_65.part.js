((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_65",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
eHE(d){var x,w,v,u,t,s,r,q,p,o=J.aK(d),n=o.i(d,"OfficeID")
if(n==null)n=0
x=o.i(d,"Description")
if(x==null)x=""
w=o.i(d,"OffAddress")
if(w==null)w=""
v=o.i(d,"OffPhone1")
if(v==null)v=""
u=o.i(d,"OffPhone2")
if(u==null)u=""
t=o.i(d,"OffMobile")
if(t==null)t=""
s=o.i(d,"OffFax")
if(s==null)s=""
r=o.i(d,"OffEmail")
if(r==null)r=""
q=o.i(d,"OffWeb")
if(q==null)q=""
p=o.i(d,"OffLogo")
if(p==null)p=""
o=o.i(d,"OffBankDetail")
return new B.w(n,x,w,v,u,t,s,r,q,p,o==null?"":o)},
w:function w(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n},
cD(){var x=0,w=A.k(y.p),v,u=2,t,s,r,q,p,o,n,m,l,k,j,i
var $async$cD=A.l(function(d,e){if(d===1){t=e
x=u}while(true)switch(x){case 0:u=4
s=A.aO("GET",A.ad($.ah+"/Coding/GetOffices?vWhere=",0,null))
x=7
return A.d(J.aQ(s),$async$cD)
case 7:r=e
x=8
return A.d(C.E.am(r.w),$async$cD)
case 8:q=e
if(r.b===200){p=C.k.C(0,q,null)
o=A.b([],y.h)
for(k=J.b0(J.A(p,"data"));k.O();){n=k.ga4(k)
m=B.eHE(n)
J.cf(o,m)}v=new A.x(o,1,null,null,y.p)
x=1
break}k=A.X(C.k.C(0,q,null),y.b)
v=new A.x(null,0,k.d,null,y.p)
x=1
break
u=2
x=6
break
case 4:u=3
i=t
l=A.V(i)
A.iO().$1(J.u(l))
k=J.u(l)
v=new A.x(null,0,k,null,y.p)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.i(v,w)
case 2:return A.h(t,w)}})
return A.j($async$cD,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[358],B)
B.w.prototype={
bb(){var x=this
return A.a8(["OfficeID",x.a,"Description",x.b,"OffAddress",x.c,"OffPhone1",x.d,"OffPhone2",x.e,"OffMobile",x.f,"OffFax",x.r,"OffEmail",x.w,"OffWeb",x.x,"OffLogo",x.y,"OffBankDetail",x.z],y.g,y.b)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(B.w,A.ag)})()
var y={p:A.I("x<q<w>>"),h:A.I("n<w>"),g:A.I("e"),b:A.I("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_65",e:"endPart",h:b})})($__dart_deferred_initializers__,"E+kMCsCFmTrscxdlzKh94gG/ySg=");
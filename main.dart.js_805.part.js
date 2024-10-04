((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_805",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,D,B={
eEW(d){var x=J.aI(d),w=x.i(d,"AdvanceID"),v=x.i(d,"EmployeeID"),u=E.e6(x.i(d,"EntryDate")),t=J.Ve(x.i(d,"AdvanceAmount")),s=x.i(d,"UserID"),r=x.i(d,"Remarks"),q=x.i(d,"Installments"),p=J.Ve(x.i(d,"PerMonth"))
x=x.i(d,"EmployeeName")
return new B.o4(w,v,u,t,s,r,q,p,x==null?"":x)},
o4:function o4(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
afQ(d){return B.eXd(d)},
eXd(d){var x=0,w=A.i(y.d),v,u=2,t,s,r,q,p,o,n,m,l,k
var $async$afQ=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/GetEmployeeAdvances?employeeName="+d,0,null)
x=7
return A.c(D.cL(s,null),$async$afQ)
case 7:r=f
if(r.b===200){m=r
q=C.k.C(0,A.aQ(J.A(A.aP(m.e).c.a,"charset")).aa(0,m.w),null)
p=A.b([],y.z)
for(m=J.b_(J.A(q,"data"));m.N();){o=m.ga3(m)
J.cd(p,B.eEW(o))}v=new A.x(p,1,null,null,y.d)
x=1
break}else{m=r
m=A.W(C.k.C(0,A.aQ(J.A(A.aP(m.e).c.a,"charset")).aa(0,m.w),null),y.b)
v=new A.x(null,0,m.d,null,y.d)
x=1
break}u=2
x=6
break
case 4:u=3
k=t
n=A.V(k)
m=J.v(n)
v=new A.x(null,0,m,null,y.d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$afQ,w)},
W6(d){return B.eXc(d)},
eXc(d){var x=0,w=A.i(y.p),v,u=2,t,s,r,q,p,o,n,m
var $async$W6=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/GetEmployeeAdvanceById?advanceId="+A.p(d),0,null)
x=7
return A.c(D.cL(s,null),$async$W6)
case 7:r=f
if(r.b===200){o=r
q=C.k.C(0,A.aQ(J.A(A.aP(o.e).c.a,"charset")).aa(0,o.w),null)
o=B.eEW(J.A(q,"data"))
v=new A.x(o,1,null,null,y.p)
x=1
break}else{o=r
o=A.W(C.k.C(0,A.aQ(J.A(A.aP(o.e).c.a,"charset")).aa(0,o.w),null),y.w)
v=o
x=1
break}u=2
x=6
break
case 4:u=3
m=t
p=A.V(m)
o=J.v(p)
v=new A.x(null,0,o,null,y.p)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$W6,w)}}
J=c[1]
A=c[0]
C=c[2]
E=c[372]
D=c[356]
B=a.updateHolder(c[235],B)
B.o4.prototype={
b6(){var x=this
return A.a8(["AdvanceID",x.a,"EmployeeID",x.b,"EntryDate",x.c.nv(),"AdvanceAmount",x.d,"UserID",x.e,"Remarks",x.f,"Installments",x.r,"PerMonth",x.w,"EmployeeName",x.x],y.v,y.b)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(B.o4,A.ag)})()
var y={p:A.I("x<o4>"),d:A.I("x<q<o4>>"),w:A.I("o4"),z:A.I("n<o4>"),v:A.I("d"),b:A.I("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_805",e:"endPart",h:b})})($__dart_deferred_initializers__,"AR7Teh4vQkolD66fchdooz4k1oo=");
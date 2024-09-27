((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_859",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,D,B={
eFy(d){var x=J.aI(d),w=x.i(d,"AdvanceID"),v=x.i(d,"EmployeeID"),u=E.e5(x.i(d,"EntryDate")),t=J.Vf(x.i(d,"AdvanceAmount")),s=x.i(d,"UserID"),r=x.i(d,"Remarks"),q=x.i(d,"Installments"),p=J.Vf(x.i(d,"PerMonth"))
x=x.i(d,"EmployeeName")
return new B.o3(w,v,u,t,s,r,q,p,x==null?"":x)},
o3:function o3(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
afT(d){return B.eXR(d)},
eXR(d){var x=0,w=A.i(y.d),v,u=2,t,s,r,q,p,o,n,m,l,k
var $async$afT=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/GetEmployeeAdvances?employeeName="+d,0,null)
x=7
return A.c(D.cM(s,null),$async$afT)
case 7:r=f
if(r.b===200){m=r
q=C.k.C(0,A.aQ(J.A(A.aP(m.e).c.a,"charset")).a9(0,m.w),null)
p=A.b([],y.z)
for(m=J.aZ(J.A(q,"data"));m.N();){o=m.ga1(m)
J.cb(p,B.eFy(o))}v=new A.x(p,1,null,null,y.d)
x=1
break}else{m=r
m=A.X(C.k.C(0,A.aQ(J.A(A.aP(m.e).c.a,"charset")).a9(0,m.w),null),y.b)
v=new A.x(null,0,m.d,null,y.d)
x=1
break}u=2
x=6
break
case 4:u=3
k=t
n=A.V(k)
m=J.u(n)
v=new A.x(null,0,m,null,y.d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$afT,w)},
W7(d){return B.eXQ(d)},
eXQ(d){var x=0,w=A.i(y.p),v,u=2,t,s,r,q,p,o,n,m
var $async$W7=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/GetEmployeeAdvanceById?advanceId="+A.p(d),0,null)
x=7
return A.c(D.cM(s,null),$async$W7)
case 7:r=f
if(r.b===200){o=r
q=C.k.C(0,A.aQ(J.A(A.aP(o.e).c.a,"charset")).a9(0,o.w),null)
o=B.eFy(J.A(q,"data"))
v=new A.x(o,1,null,null,y.p)
x=1
break}else{o=r
o=A.X(C.k.C(0,A.aQ(J.A(A.aP(o.e).c.a,"charset")).a9(0,o.w),null),y.w)
v=o
x=1
break}u=2
x=6
break
case 4:u=3
m=t
p=A.V(m)
o=J.u(p)
v=new A.x(null,0,o,null,y.p)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$W7,w)}}
J=c[1]
A=c[0]
C=c[2]
E=c[372]
D=c[356]
B=a.updateHolder(c[235],B)
B.o3.prototype={
b4(){var x=this
return A.a8(["AdvanceID",x.a,"EmployeeID",x.b,"EntryDate",x.c.n8(),"AdvanceAmount",x.d,"UserID",x.e,"Remarks",x.f,"Installments",x.r,"PerMonth",x.w,"EmployeeName",x.x],y.v,y.b)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(B.o3,A.ag)})()
var y={p:A.I("x<o3>"),d:A.I("x<q<o3>>"),w:A.I("o3"),z:A.I("n<o3>"),v:A.I("d"),b:A.I("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_859",e:"endPart",h:b})})($__dart_deferred_initializers__,"20Iq3yTXE2f1Os5sf7mO5QKjZRw=");
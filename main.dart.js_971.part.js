((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_971",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,D,B={
ewR(d){var x=J.aK(d),w=x.i(d,"AdvanceID"),v=x.i(d,"EmployeeID"),u=E.e0(x.i(d,"EntryDate")),t=J.Vj(x.i(d,"AdvanceAmount")),s=x.i(d,"UserID"),r=x.i(d,"Remarks"),q=x.i(d,"Installments"),p=J.Vj(x.i(d,"PerMonth"))
x=x.i(d,"EmployeeName")
return new B.o_(w,v,u,t,s,r,q,p,x==null?"":x)},
o_:function o_(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
afC(d){return B.eOT(d)},
eOT(d){var x=0,w=A.i(y.d),v,u=2,t,s,r,q,p,o,n,m,l,k
var $async$afC=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.ac($.ag+"/Payroll/GetEmployeeAdvances?employeeName="+d,0,null)
x=7
return A.c(D.cK(s,null),$async$afC)
case 7:r=f
if(r.b===200){m=r
q=C.k.C(0,A.aR(J.B(A.aQ(m.e).c.a,"charset")).a8(0,m.w),null)
p=A.b([],y.z)
for(m=J.aZ(J.B(q,"data"));m.L();){o=m.ga1(m)
J.c9(p,B.ewR(o))}v=new A.x(p,1,null,null,y.d)
x=1
break}else{m=r
m=A.Z(C.k.C(0,A.aR(J.B(A.aQ(m.e).c.a,"charset")).a8(0,m.w),null),y.b)
v=new A.x(null,0,m.d,null,y.d)
x=1
break}u=2
x=6
break
case 4:u=3
k=t
n=A.W(k)
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
return A.h($async$afC,w)},
Wb(d){return B.eOS(d)},
eOS(d){var x=0,w=A.i(y.p),v,u=2,t,s,r,q,p,o,n,m
var $async$Wb=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.ac($.ag+"/Payroll/GetEmployeeAdvanceById?advanceId="+A.o(d),0,null)
x=7
return A.c(D.cK(s,null),$async$Wb)
case 7:r=f
if(r.b===200){o=r
q=C.k.C(0,A.aR(J.B(A.aQ(o.e).c.a,"charset")).a8(0,o.w),null)
o=B.ewR(J.B(q,"data"))
v=new A.x(o,1,null,null,y.p)
x=1
break}else{o=r
o=A.Z(C.k.C(0,A.aR(J.B(A.aQ(o.e).c.a,"charset")).a8(0,o.w),null),y.w)
v=o
x=1
break}u=2
x=6
break
case 4:u=3
m=t
p=A.W(m)
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
return A.h($async$Wb,w)}}
J=c[1]
A=c[0]
C=c[2]
E=c[372]
D=c[355]
B=a.updateHolder(c[235],B)
B.o_.prototype={
b_(){var x=this
return A.a8(["AdvanceID",x.a,"EmployeeID",x.b,"EntryDate",x.c.kU(),"AdvanceAmount",x.d,"UserID",x.e,"Remarks",x.f,"Installments",x.r,"PerMonth",x.w,"EmployeeName",x.x],y.v,y.b)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(B.o_,A.af)})()
var y={p:A.E("x<o_>"),d:A.E("x<q<o_>>"),w:A.E("o_"),z:A.E("m<o_>"),v:A.E("d"),b:A.E("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_971",e:"endPart",h:b})})($__dart_deferred_initializers__,"7AvZ/LHpuItYPqOHaEf6ik69vqM=");
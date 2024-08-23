((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_991",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,E,B={
eyR(d){var x,w,v,u,t,s,r,q,p,o,n,m=null,l="GenerateDate",k="SalaryMonth",j=J.aK(d),i=y.d.a(j.i(d,"ListBody"))
if(i==null)x=m
else{w=J.cw(i,new B.bkU(),y.m)
x=A.a5(w,!0,w.$ti.j("az.E"))}w=j.i(d,"IsPosted")
v=j.i(d,"OverTimeID")
u=j.i(d,l)!=null?D.e0(j.i(d,l)):m
t=j.i(d,k)!=null?D.e0(j.i(d,k)):m
s=j.i(d,"DepartmentTitle")
r=j.i(d,"DepartmentID")
q=j.i(d,"DesignationID")
p=j.i(d,"ShiftID")
o=j.i(d,"Remarks")
n=j.i(d,"TotalSalary")
n=n==null?m:J.Vj(n)
return new B.pc(w,s,v,u,t,r,q,p,o,n,j.i(d,"UserID"),x)},
eyS(d){var x,w,v,u,t,s,r,q="AcceptedTime",p=J.aK(d),o=p.i(d,"OverTimeID"),n=p.i(d,"EmployeeID"),m=p.i(d,"GrossSalary")
if(m==null)m=0
x=p.i(d,"ExcessShort")
x=B.f_U(x==null?0:x)
w=p.i(d,"OvertimeAmount")
if(w==null)w=0
v=p.i(d,"TotalSalary")
if(v==null)v=0
u=p.i(d,"EmployeeName")
t=p.i(d,q)
if(t==null)t="0"
s=new A.N(C.p,$.aq())
s.st(0,J.u(t))
t=p.i(d,q)
if(t==null)t=0
r=p.i(d,"BasicSalary")
if(r==null)r=0
p=p.i(d,"PerSalary")
return new B.u8(o,n,m,x,w,v,u,t,r,p==null?0:p,s)},
f_U(d){if(typeof d=="number")return C.i.a2(d)
else return d},
pc:function pc(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.z=n
_.Q=o},
bkU:function bkU(){},
bkV:function bkV(){},
u8:function u8(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
WF(d){return B.ePs(d)},
ePs(d){var x=0,w=A.i(y.C),v,u=2,t,s,r,q,p,o,n,m
var $async$WF=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.ac($.ag+"/Payroll/GetOvertimeSheetById?sheetId="+d,0,null)
x=7
return A.c(E.cK(s,null),$async$WF)
case 7:r=f
A.dV(s)
if(r.b===200){o=r
q=C.k.C(0,A.aR(J.B(A.aQ(o.e).c.a,"charset")).a8(0,o.w),null)
o=B.eyR(J.B(q,"data"))
v=new A.x(o,1,null,null,y.C)
x=1
break}else{o=r
o=A.Z(C.k.C(0,A.aR(J.B(A.aQ(o.e).c.a,"charset")).a8(0,o.w),null),y.p)
v=o
x=1
break}u=2
x=6
break
case 4:u=3
m=t
p=A.W(m)
o=J.u(p)
v=new A.x(null,0,o,null,y.C)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$WF,w)}}
J=c[1]
A=c[0]
C=c[2]
D=c[372]
E=c[355]
B=a.updateHolder(c[239],B)
B.pc.prototype={
b_(){var x,w,v,u=this,t=u.d
t=t==null?null:t.kU()
x=u.e
x=x==null?null:x.kU()
w=u.Q
if(w==null)w=null
else{v=A.ar(w).j("ak<1,bk<d,@>>")
v=A.a5(new A.ak(w,new B.bkV(),v),!0,v.j("az.E"))
w=v}return A.a8(["DepartmentTitle",u.b,"IsPosted",u.a,"OverTimeID",u.c,"GenerateDate",t,"SalaryMonth",x,"DepartmentID",u.f,"DesignationID",u.r,"ShiftID",u.w,"Remarks",u.x,"TotalSalary",u.y,"UserID",u.z,"ListBody",w],y.w,y.b)}}
B.u8.prototype={
b_(){var x=this
return A.a8(["AcceptedTime",x.z,"OverTimeID",x.a,"EmployeeID",x.b,"GrossSalary",x.c,"ExcessShort",x.d,"OvertimeAmount",x.e,"TotalSalary",x.f,"EmployeeName",x.r,"AcceptedTime",x.w,"BasicSalary",x.x,"PerSalary",x.y],y.w,y.b)}}
var z=a.updateTypes(["u8(@)","bk<d,@>(u8)"])
B.bkU.prototype={
$1(d){return B.eyS(d)},
$S:z+0}
B.bkV.prototype={
$1(d){return d.b_()},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.af,[B.pc,B.u8])
x(A.b2,[B.bkU,B.bkV])})()
var y={C:A.E("x<pc>"),p:A.E("pc"),m:A.E("u8"),w:A.E("d"),b:A.E("@"),d:A.E("q<@>?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_991",e:"endPart",h:b})})($__dart_deferred_initializers__,"Vv1cCrDCZ2ZBat2yneT5Hy30IBc=");
((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_879",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,E,B={
eHH(d){var x,w,v,u,t,s,r,q,p,o,n,m=null,l="GenerateDate",k="SalaryMonth",j=J.aI(d),i=y.d.a(j.i(d,"ListBody"))
if(i==null)x=m
else{w=J.cw(i,new B.bth(),y.m)
x=A.a4(w,!0,w.$ti.k("aA.E"))}w=j.i(d,"IsPosted")
v=j.i(d,"OverTimeID")
u=j.i(d,l)!=null?D.e5(j.i(d,l)):m
t=j.i(d,k)!=null?D.e5(j.i(d,k)):m
s=j.i(d,"DepartmentTitle")
r=j.i(d,"DepartmentID")
q=j.i(d,"DesignationID")
p=j.i(d,"ShiftID")
o=j.i(d,"Remarks")
n=j.i(d,"TotalSalary")
n=n==null?m:J.Vf(n)
return new B.pq(w,s,v,u,t,r,q,p,o,n,j.i(d,"UserID"),x)},
eHJ(d){var x,w,v,u,t,s,r,q="AcceptedTime",p=J.aI(d),o=p.i(d,"OverTimeID"),n=p.i(d,"EmployeeID"),m=p.i(d,"GrossSalary")
if(m==null)m=0
x=p.i(d,"ExcessShort")
x=B.f97(x==null?0:x)
w=p.i(d,"OvertimeAmount")
if(w==null)w=0
v=p.i(d,"TotalSalary")
if(v==null)v=0
u=p.i(d,"EmployeeName")
t=p.i(d,q)
if(t==null)t="0"
s=new A.N(C.p,$.ap())
s.st(0,J.u(t))
t=p.i(d,q)
if(t==null)t=0
r=p.i(d,"BasicSalary")
if(r==null)r=0
p=p.i(d,"PerSalary")
return new B.uf(o,n,m,x,w,v,u,t,r,p==null?0:p,s)},
f97(d){if(typeof d=="number")return C.h.Z(d)
else return d},
pq:function pq(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bth:function bth(){},
bti:function bti(){},
uf:function uf(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
WB(d){return B.eYq(d)},
eYq(d){var x=0,w=A.i(y.C),v,u=2,t,s,r,q,p,o,n,m
var $async$WB=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/GetOvertimeSheetById?sheetId="+d,0,null)
x=7
return A.c(E.cM(s,null),$async$WB)
case 7:r=f
A.ea(s)
if(r.b===200){o=r
q=C.k.C(0,A.aQ(J.A(A.aP(o.e).c.a,"charset")).a9(0,o.w),null)
o=B.eHH(J.A(q,"data"))
v=new A.x(o,1,null,null,y.C)
x=1
break}else{o=r
o=A.X(C.k.C(0,A.aQ(J.A(A.aP(o.e).c.a,"charset")).a9(0,o.w),null),y.p)
v=o
x=1
break}u=2
x=6
break
case 4:u=3
m=t
p=A.V(m)
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
return A.h($async$WB,w)}}
J=c[1]
A=c[0]
C=c[2]
D=c[372]
E=c[356]
B=a.updateHolder(c[239],B)
B.pq.prototype={
b4(){var x,w,v,u=this,t=u.d
t=t==null?null:t.n8()
x=u.e
x=x==null?null:x.n8()
w=u.Q
if(w==null)w=null
else{v=A.aq(w).k("ak<1,bg<d,@>>")
v=A.a4(new A.ak(w,new B.bti(),v),!0,v.k("aA.E"))
w=v}return A.a8(["DepartmentTitle",u.b,"IsPosted",u.a,"OverTimeID",u.c,"GenerateDate",t,"SalaryMonth",x,"DepartmentID",u.f,"DesignationID",u.r,"ShiftID",u.w,"Remarks",u.x,"TotalSalary",u.y,"UserID",u.z,"ListBody",w],y.w,y.b)}}
B.uf.prototype={
b4(){var x=this
return A.a8(["AcceptedTime",x.z,"OverTimeID",x.a,"EmployeeID",x.b,"GrossSalary",x.c,"ExcessShort",x.d,"OvertimeAmount",x.e,"TotalSalary",x.f,"EmployeeName",x.r,"AcceptedTime",x.w,"BasicSalary",x.x,"PerSalary",x.y],y.w,y.b)}}
var z=a.updateTypes(["uf(@)","bg<d,@>(uf)"])
B.bth.prototype={
$1(d){return B.eHJ(d)},
$S:z+0}
B.bti.prototype={
$1(d){return d.b4()},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.ag,[B.pq,B.uf])
x(A.b0,[B.bth,B.bti])})()
var y={C:A.I("x<pq>"),p:A.I("pq"),m:A.I("uf"),w:A.I("d"),b:A.I("@"),d:A.I("q<@>?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_879",e:"endPart",h:b})})($__dart_deferred_initializers__,"jsQ+FrmPe19nkORNViVtLI7i0YY=");
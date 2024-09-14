((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_975",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,E,B={
eI2(d){var x,w,v,u,t,s,r,q="GenerateDate",p="SalaryMonth",o=J.aI(d),n=y.d.a(o.i(d,"ListBody"))
if(n==null)x=null
else{w=J.cw(n,new B.bC2(),y.m)
x=A.a4(w,!0,w.$ti.k("aA.E"))}w=o.i(d,"IsPosted")
v=o.i(d,"SalaryID")
u=o.i(d,q)!=null?D.e4(o.i(d,q)):null
t=o.i(d,p)!=null?D.e4(o.i(d,p)):null
s=o.i(d,"DepartmentID")
r=o.i(d,"DepartmentTitle")
return new B.pw(w,v,u,t,s,o.i(d,"DesignationID"),o.i(d,"ShiftID"),r,o.i(d,"Remarks"),o.i(d,"TotalSalary"),o.i(d,"UserID"),x)},
eI0(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=J.aI(d),j=A.fr(k.i(d,"SalaryID")),i=A.fr(k.i(d,"EmployeeID")),h=A.eb(k.i(d,"EmployeeName")),g=A.j8(k.i(d,"BasicSalary"))
if(g==null)g=l
x=A.j8(k.i(d,"GrossSalary"))
if(x==null)x=l
w=k.i(d,"Presents")
w=B.eI1(w==null?0:w)
v=k.i(d,"Leaves")
v=B.eI1(v==null?0:v)
u=A.j8(k.i(d,"AdvanceAmount"))
if(u==null)u=l
t=A.j8(k.i(d,"EOBI"))
if(t==null)t=l
s=A.j8(k.i(d,"SESSI"))
if(s==null)s=l
r=A.j8(k.i(d,"ITax"))
if(r==null)r=l
q=A.j8(k.i(d,"Allowances"))
if(q==null)q=l
p=A.fr(k.i(d,"deductLeave"))
o=A.fr(k.i(d,"Installments"))
n=A.j8(k.i(d,"PerMonth"))
if(n==null)n=l
m=k.i(d,"EntryDate")
k=A.j8(k.i(d,"NetSalary"))
return new B.wv(j,i,h,g,x,w,v,u,t,s,r,q,p,o,n,m,k==null?l:k)},
eI1(d){if(typeof d=="number")return C.h.Z(d)
return d},
pw:function pw(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bC2:function bC2(){},
bC3:function bC3(){},
wv:function wv(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=t},
afW(d){return B.eXx(d)},
eXx(d){var x=0,w=A.i(y.w),v,u=2,t,s,r,q,p,o,n,m
var $async$afW=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/GetSalarySheetById?sheetId="+d,0,null)
x=7
return A.c(E.cM(s,null),$async$afW)
case 7:r=f
if(r.b===200){o=r
q=C.k.C(0,A.aQ(J.A(A.aP(o.e).c.a,"charset")).a9(0,o.w),null)
o=B.eI2(J.A(q,"data"))
v=new A.x(o,1,null,null,y.w)
x=1
break}else{o=r
o=A.W(C.k.C(0,A.aQ(J.A(A.aP(o.e).c.a,"charset")).a9(0,o.w),null),y.o)
v=o
x=1
break}u=2
x=6
break
case 4:u=3
m=t
p=A.U(m)
o=J.u(p)
v=new A.x(null,0,o,null,y.w)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$afW,w)}}
J=c[1]
A=c[0]
C=c[2]
D=c[371]
E=c[355]
B=a.updateHolder(c[240],B)
B.pw.prototype={
b1(){var x,w,v=this,u=v.c
u=u==null?null:u.lW()
x=v.d
x=x==null?null:x.lW()
w=v.Q
if(w==null)w=null
else{w=J.cw(w,new B.bC3(),y.y)
w=A.a4(w,!0,w.$ti.k("aA.E"))}return A.a8(["IsPosted",v.a,"SalaryID",v.b,"GenerateDate",u,"SalaryMonth",x,"DepartmentID",v.e,"DesignationID",v.f,"DepartmentTitle",v.w,"ShiftID",v.r,"Remarks",v.x,"TotalSalary",v.y,"UserID",v.z,"ListBody",w],y.v,y.b)}}
B.wv.prototype={
b1(){var x=this
return A.a8(["SalaryID",x.a,"EmployeeID",x.b,"EmployeeName",x.c,"BasicSalary",x.d,"GrossSalary",x.e,"Presents",x.f,"Leaves",x.r,"AdvanceAmount",x.w,"EOBI",x.x,"SESSI",x.y,"ITax",x.z,"Allowances",x.Q,"deductLeave",x.as,"Installments",x.at,"PerMonth",x.ax,"EntryDate",x.ay,"NetSalary",x.ch],y.v,y.b)}}
var z=a.updateTypes(["wv(@)","bg<d,@>(wv)"])
B.bC2.prototype={
$1(d){return B.eI0(d)},
$S:z+0}
B.bC3.prototype={
$1(d){return d.b1()},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.ag,[B.pw,B.wv])
x(A.b0,[B.bC2,B.bC3])})()
var y={w:A.H("x<pw>"),y:A.H("bg<d,@>"),m:A.H("wv"),o:A.H("pw"),v:A.H("d"),b:A.H("@"),d:A.H("q<@>?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_975",e:"endPart",h:b})})($__dart_deferred_initializers__,"6cZpmBzLaZ2vEF0SGyfLIKh15W8=");
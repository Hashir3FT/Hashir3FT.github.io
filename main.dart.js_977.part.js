((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_977",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,E,B={
eAA(d){var x,w,v,u,t,s,r,q="GenerateDate",p="SalaryMonth",o=J.aK(d),n=y.d.a(o.i(d,"ListBody"))
if(n==null)x=null
else{w=J.cw(n,new B.bvg(),y.m)
x=A.a5(w,!0,w.$ti.j("az.E"))}w=o.i(d,"IsPosted")
v=o.i(d,"SalaryID")
u=o.i(d,q)!=null?D.e0(o.i(d,q)):null
t=o.i(d,p)!=null?D.e0(o.i(d,p)):null
s=o.i(d,"DepartmentID")
r=o.i(d,"DepartmentTitle")
return new B.pj(w,v,u,t,s,o.i(d,"DesignationID"),o.i(d,"ShiftID"),r,o.i(d,"Remarks"),o.i(d,"TotalSalary"),o.i(d,"UserID"),x)},
eAy(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=J.aK(d),j=A.fw(k.i(d,"SalaryID")),i=A.fw(k.i(d,"EmployeeID")),h=A.dZ(k.i(d,"EmployeeName")),g=A.j8(k.i(d,"BasicSalary"))
if(g==null)g=l
x=A.j8(k.i(d,"GrossSalary"))
if(x==null)x=l
w=k.i(d,"Presents")
w=B.eAz(w==null?0:w)
v=k.i(d,"Leaves")
v=B.eAz(v==null?0:v)
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
p=A.fw(k.i(d,"deductLeave"))
o=A.fw(k.i(d,"Installments"))
n=A.j8(k.i(d,"PerMonth"))
if(n==null)n=l
m=k.i(d,"EntryDate")
k=A.j8(k.i(d,"NetSalary"))
return new B.wn(j,i,h,g,x,w,v,u,t,s,r,q,p,o,n,m,k==null?l:k)},
eAz(d){if(typeof d=="number")return C.i.a2(d)
return d},
pj:function pj(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bvg:function bvg(){},
bvh:function bvh(){},
wn:function wn(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
afO(d){return B.ePX(d)},
ePX(d){var x=0,w=A.i(y.w),v,u=2,t,s,r,q,p,o,n,m
var $async$afO=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.ac($.ag+"/Payroll/GetSalarySheetById?sheetId="+d,0,null)
x=7
return A.c(E.cK(s,null),$async$afO)
case 7:r=f
if(r.b===200){o=r
q=C.k.C(0,A.aR(J.B(A.aQ(o.e).c.a,"charset")).a8(0,o.w),null)
o=B.eAA(J.B(q,"data"))
v=new A.x(o,1,null,null,y.w)
x=1
break}else{o=r
o=A.Z(C.k.C(0,A.aR(J.B(A.aQ(o.e).c.a,"charset")).a8(0,o.w),null),y.o)
v=o
x=1
break}u=2
x=6
break
case 4:u=3
m=t
p=A.W(m)
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
return A.h($async$afO,w)}}
J=c[1]
A=c[0]
C=c[2]
D=c[372]
E=c[355]
B=a.updateHolder(c[240],B)
B.pj.prototype={
b_(){var x,w,v=this,u=v.c
u=u==null?null:u.kU()
x=v.d
x=x==null?null:x.kU()
w=v.Q
if(w==null)w=null
else{w=J.cw(w,new B.bvh(),y.y)
w=A.a5(w,!0,w.$ti.j("az.E"))}return A.a8(["IsPosted",v.a,"SalaryID",v.b,"GenerateDate",u,"SalaryMonth",x,"DepartmentID",v.e,"DesignationID",v.f,"DepartmentTitle",v.w,"ShiftID",v.r,"Remarks",v.x,"TotalSalary",v.y,"UserID",v.z,"ListBody",w],y.v,y.b)}}
B.wn.prototype={
b_(){var x=this
return A.a8(["SalaryID",x.a,"EmployeeID",x.b,"EmployeeName",x.c,"BasicSalary",x.d,"GrossSalary",x.e,"Presents",x.f,"Leaves",x.r,"AdvanceAmount",x.w,"EOBI",x.x,"SESSI",x.y,"ITax",x.z,"Allowances",x.Q,"deductLeave",x.as,"Installments",x.at,"PerMonth",x.ax,"EntryDate",x.ay,"NetSalary",x.ch],y.v,y.b)}}
var z=a.updateTypes(["wn(@)","bk<d,@>(wn)"])
B.bvg.prototype={
$1(d){return B.eAy(d)},
$S:z+0}
B.bvh.prototype={
$1(d){return d.b_()},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.af,[B.pj,B.wn])
x(A.b2,[B.bvg,B.bvh])})()
var y={w:A.E("x<pj>"),y:A.E("bk<d,@>"),m:A.E("wn"),o:A.E("pj"),v:A.E("d"),b:A.E("@"),d:A.E("q<@>?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_977",e:"endPart",h:b})})($__dart_deferred_initializers__,"si+N64RWx8n86CEGf6QLqNexoik=");
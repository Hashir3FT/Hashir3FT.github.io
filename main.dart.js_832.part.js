((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_832",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,E,B={
eJs(d){var x,w,v,u,t,s,r,q="GenerateDate",p="SalaryMonth",o=J.aI(d),n=y.d.a(o.i(d,"ListBody"))
if(n==null)x=null
else{w=J.cv(n,new B.bDr(),y.m)
x=A.a4(w,!0,w.$ti.k("aA.E"))}w=o.i(d,"IsPosted")
v=o.i(d,"SalaryID")
u=o.i(d,q)!=null?D.e6(o.i(d,q)):null
t=o.i(d,p)!=null?D.e6(o.i(d,p)):null
s=o.i(d,"DepartmentID")
r=o.i(d,"DepartmentTitle")
return new B.py(w,v,u,t,s,o.i(d,"DesignationID"),o.i(d,"ShiftID"),r,o.i(d,"Remarks"),o.i(d,"TotalSalary"),o.i(d,"UserID"),x)},
eJq(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=J.aI(d),j=A.fu(k.i(d,"SalaryID")),i=A.fu(k.i(d,"EmployeeID")),h=A.ee(k.i(d,"EmployeeName")),g=A.jc(k.i(d,"BasicSalary"))
if(g==null)g=l
x=A.jc(k.i(d,"GrossSalary"))
if(x==null)x=l
w=k.i(d,"Presents")
w=B.eJr(w==null?0:w)
v=k.i(d,"Leaves")
v=B.eJr(v==null?0:v)
u=A.jc(k.i(d,"AdvanceAmount"))
if(u==null)u=l
t=A.jc(k.i(d,"EOBI"))
if(t==null)t=l
s=A.jc(k.i(d,"SESSI"))
if(s==null)s=l
r=A.jc(k.i(d,"ITax"))
if(r==null)r=l
q=A.jc(k.i(d,"Allowances"))
if(q==null)q=l
p=A.fu(k.i(d,"deductLeave"))
o=A.fu(k.i(d,"Installments"))
n=A.jc(k.i(d,"PerMonth"))
if(n==null)n=l
m=k.i(d,"EntryDate")
k=A.jc(k.i(d,"NetSalary"))
return new B.wx(j,i,h,g,x,w,v,u,t,s,r,q,p,o,n,m,k==null?l:k)},
eJr(d){if(typeof d=="number")return C.h.a_(d)
return d},
py:function py(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bDr:function bDr(){},
bDs:function bDs(){},
wx:function wx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
ag4(d){return B.eYV(d)},
eYV(d){var x=0,w=A.i(y.w),v,u=2,t,s,r,q,p,o,n,m
var $async$ag4=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/GetSalarySheetById?sheetId="+d,0,null)
x=7
return A.c(E.cM(s,null),$async$ag4)
case 7:r=f
if(r.b===200){o=r
q=C.k.C(0,A.aQ(J.z(A.aP(o.e).c.a,"charset")).a9(0,o.w),null)
o=B.eJs(J.z(q,"data"))
v=new A.x(o,1,null,null,y.w)
x=1
break}else{o=r
o=A.X(C.k.C(0,A.aQ(J.z(A.aP(o.e).c.a,"charset")).a9(0,o.w),null),y.o)
v=o
x=1
break}u=2
x=6
break
case 4:u=3
m=t
p=A.V(m)
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
return A.h($async$ag4,w)}}
J=c[1]
A=c[0]
C=c[2]
D=c[372]
E=c[356]
B=a.updateHolder(c[240],B)
B.py.prototype={
b5(){var x,w,v=this,u=v.c
u=u==null?null:u.nm()
x=v.d
x=x==null?null:x.nm()
w=v.Q
if(w==null)w=null
else{w=J.cv(w,new B.bDs(),y.y)
w=A.a4(w,!0,w.$ti.k("aA.E"))}return A.a8(["IsPosted",v.a,"SalaryID",v.b,"GenerateDate",u,"SalaryMonth",x,"DepartmentID",v.e,"DesignationID",v.f,"DepartmentTitle",v.w,"ShiftID",v.r,"Remarks",v.x,"TotalSalary",v.y,"UserID",v.z,"ListBody",w],y.v,y.b)}}
B.wx.prototype={
b5(){var x=this
return A.a8(["SalaryID",x.a,"EmployeeID",x.b,"EmployeeName",x.c,"BasicSalary",x.d,"GrossSalary",x.e,"Presents",x.f,"Leaves",x.r,"AdvanceAmount",x.w,"EOBI",x.x,"SESSI",x.y,"ITax",x.z,"Allowances",x.Q,"deductLeave",x.as,"Installments",x.at,"PerMonth",x.ax,"EntryDate",x.ay,"NetSalary",x.ch],y.v,y.b)}}
var z=a.updateTypes(["wx(@)","bg<d,@>(wx)"])
B.bDr.prototype={
$1(d){return B.eJq(d)},
$S:z+0}
B.bDs.prototype={
$1(d){return d.b5()},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.ag,[B.py,B.wx])
x(A.b0,[B.bDr,B.bDs])})()
var y={w:A.I("x<py>"),y:A.I("bg<d,@>"),m:A.I("wx"),o:A.I("py"),v:A.I("d"),b:A.I("@"),d:A.I("q<@>?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_832",e:"endPart",h:b})})($__dart_deferred_initializers__,"nceuuQaWc+UHZLxNCbeX9Y+odT0=");
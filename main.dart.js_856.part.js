((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_856",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,E,B={
eGQ(d){var x="GenerateDate",w="IncashmentYear",v="ListBody",u=J.aI(d),t=u.i(d,"IsPosted"),s=u.i(d,"ID"),r=u.i(d,x)!=null?D.e6(u.i(d,x)):new A.a2(Date.now(),0,!1),q=u.i(d,w)!=null?D.e6(u.i(d,w)):null,p=u.i(d,"DepartmentTitle"),o=u.i(d,"DepartmentID"),n=u.i(d,"DesignationID"),m=u.i(d,"ShiftID"),l=u.i(d,"Remarks"),k=u.i(d,"TotalSalary"),j=u.i(d,"UserID")
if(u.i(d,v)!=null){u=J.cv(y.i.a(u.i(d,v)),new B.bgf(),y.p)
u=A.a4(u,!0,u.$ti.k("aA.E"))}else u=A.b([],y.m)
return new B.pl(t,s,p,r,q,o,n,m,l,k,j,u)},
eFA(d){var x,w,v,u=J.aI(d),t=u.i(d,"SerialNo"),s=u.i(d,"IncashmentID"),r=u.i(d,"EmployeeID"),q=u.i(d,"GrossSalary")
q=q==null?null:J.Vg(q)
x=u.i(d,"TotalLeaves")
x=B.f5M(x==null?0:x)
w=u.i(d,"RemainingLeaves")
w=w==null?null:J.Vg(w)
v=u.i(d,"TotalIncashment")
v=v==null?null:J.Vg(v)
return new B.tT(t,s,r,q,x,w,v,u.i(d,"EmployeeName"))},
f5M(d){if(typeof d=="number")return C.h.a_(d)
return d},
pl:function pl(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bgf:function bgf(){},
bgg:function bgg(){},
tT:function tT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
Wa(d){return B.eXY(d)},
eXY(d){var x=0,w=A.i(y.j),v,u=2,t,s,r,q,p,o,n,m
var $async$Wa=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/GetEncashmentById?sheetId="+d,0,null)
x=7
return A.c(E.cM(s,null),$async$Wa)
case 7:r=f
if(r.b===200){o=r
q=C.k.C(0,A.aQ(J.z(A.aP(o.e).c.a,"charset")).a9(0,o.w),null)
o=B.eGQ(J.z(q,"data"))
v=new A.x(o,1,null,null,y.j)
x=1
break}else{o=r
o=A.X(C.k.C(0,A.aQ(J.z(A.aP(o.e).c.a,"charset")).a9(0,o.w),null),y.C)
v=o
x=1
break}u=2
x=6
break
case 4:u=3
m=t
p=A.V(m)
o=J.u(p)
v=new A.x(null,0,o,null,y.j)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$Wa,w)}}
J=c[1]
A=c[0]
C=c[2]
D=c[372]
E=c[356]
B=a.updateHolder(c[237],B)
B.pl.prototype={
b5(){var x,w=this,v=w.d.nm(),u=w.e
u=u==null?null:u.nm()
x=J.cv(w.Q,new B.bgg(),y.y)
x=A.a4(x,!0,x.$ti.k("aA.E"))
return A.a8(["IsPosted",w.a,"ID",w.b,"DepartmentTitle",w.c,"GenerateDate",v,"IncashmentYear",u,"DepartmentID",w.f,"DesignationID",w.r,"ShiftID",w.w,"Remarks",w.x,"TotalSalary",w.y,"UserID",w.z,"ListBody",x],y.w,y.b)}}
B.tT.prototype={
b5(){var x=this
return A.a8(["SerialNo",x.a,"IncashmentID",x.b,"EmployeeID",x.c,"GrossSalary",x.d,"TotalLeaves",x.e,"RemainingLeaves",x.f,"TotalIncashment",x.r,"EmployeeName",x.w],y.w,y.b)}}
var z=a.updateTypes(["tT(@)","bg<d,@>(tT)"])
B.bgf.prototype={
$1(d){return B.eFA(d)},
$S:z+0}
B.bgg.prototype={
$1(d){return d.b5()},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.ag,[B.pl,B.tT])
x(A.b0,[B.bgf,B.bgg])})()
var y={j:A.I("x<pl>"),p:A.I("tT"),m:A.I("n<tT>"),C:A.I("pl"),i:A.I("q<@>"),y:A.I("bg<d,@>"),w:A.I("d"),b:A.I("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_856",e:"endPart",h:b})})($__dart_deferred_initializers__,"iISef3M7ydHmBTfwxWgxOg+hGoo=");
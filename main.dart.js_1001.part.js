((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1001",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
ey5(d){var x="GenerateDate",w="IncashmentYear",v="ListBody",u=J.aK(d),t=u.i(d,"IsPosted"),s=u.i(d,"ID"),r=u.i(d,x)!=null?D.e0(u.i(d,x)):new A.S(Date.now(),!1),q=u.i(d,w)!=null?D.e0(u.i(d,w)):null,p=u.i(d,"DepartmentTitle"),o=u.i(d,"DepartmentID"),n=u.i(d,"DesignationID"),m=u.i(d,"ShiftID"),l=u.i(d,"Remarks"),k=u.i(d,"TotalSalary"),j=u.i(d,"UserID")
if(u.i(d,v)!=null){u=J.cw(y.i.a(u.i(d,v)),new B.bai(),y.p)
u=A.a5(u,!0,u.$ti.j("az.E"))}else u=A.b([],y.m)
return new B.p5(t,s,p,r,q,o,n,m,l,k,j,u)},
ewT(d){var x,w,v,u=J.aK(d),t=u.i(d,"SerialNo"),s=u.i(d,"IncashmentID"),r=u.i(d,"EmployeeID"),q=u.i(d,"GrossSalary")
q=q==null?null:J.Vj(q)
x=u.i(d,"TotalLeaves")
x=B.eXK(x==null?0:x)
w=u.i(d,"RemainingLeaves")
w=w==null?null:J.Vj(w)
v=u.i(d,"TotalIncashment")
v=v==null?null:J.Vj(v)
return new B.tM(t,s,r,q,x,w,v,u.i(d,"EmployeeName"))},
eXK(d){if(typeof d=="number")return C.i.a2(d)
return d},
p5:function p5(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bai:function bai(){},
baj:function baj(){},
tM:function tM(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
Wd(d){return B.eP_(d)},
eP_(d){var x=0,w=A.i(y.j),v,u=2,t,s,r,q,p,o,n,m
var $async$Wd=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.ac($.ag+"/Payroll/GetEncashmentById?sheetId="+d,0,null)
x=7
return A.c(E.cK(s,null),$async$Wd)
case 7:r=f
if(r.b===200){o=r
q=C.k.C(0,A.aR(J.B(A.aQ(o.e).c.a,"charset")).a8(0,o.w),null)
o=B.ey5(J.B(q,"data"))
v=new A.x(o,1,null,null,y.j)
x=1
break}else{o=r
o=A.Z(C.k.C(0,A.aR(J.B(A.aQ(o.e).c.a,"charset")).a8(0,o.w),null),y.C)
v=o
x=1
break}u=2
x=6
break
case 4:u=3
m=t
p=A.W(m)
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
return A.h($async$Wd,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[237],B)
D=c[372]
E=c[355]
B.p5.prototype={
b_(){var x,w=this,v=w.d.kU(),u=w.e
u=u==null?null:u.kU()
x=J.cw(w.Q,new B.baj(),y.y)
x=A.a5(x,!0,x.$ti.j("az.E"))
return A.a8(["IsPosted",w.a,"ID",w.b,"DepartmentTitle",w.c,"GenerateDate",v,"IncashmentYear",u,"DepartmentID",w.f,"DesignationID",w.r,"ShiftID",w.w,"Remarks",w.x,"TotalSalary",w.y,"UserID",w.z,"ListBody",x],y.w,y.b)}}
B.tM.prototype={
b_(){var x=this
return A.a8(["SerialNo",x.a,"IncashmentID",x.b,"EmployeeID",x.c,"GrossSalary",x.d,"TotalLeaves",x.e,"RemainingLeaves",x.f,"TotalIncashment",x.r,"EmployeeName",x.w],y.w,y.b)}}
var z=a.updateTypes(["tM(@)","bk<d,@>(tM)"])
B.bai.prototype={
$1(d){return B.ewT(d)},
$S:z+0}
B.baj.prototype={
$1(d){return d.b_()},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.af,[B.p5,B.tM])
x(A.b2,[B.bai,B.baj])})()
var y={j:A.E("x<p5>"),p:A.E("tM"),m:A.E("m<tM>"),C:A.E("p5"),i:A.E("q<@>"),y:A.E("bk<d,@>"),w:A.E("d"),b:A.E("@")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1001",e:"endPart",h:b})})($__dart_deferred_initializers__,"oKRBiEp0lANNl6HmJIMhwc+RMNM=");
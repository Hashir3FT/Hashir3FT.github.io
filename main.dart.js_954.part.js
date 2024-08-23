((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_954",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,D,E,K,L,M,N,O,P,G,Q,R,S,T,H,U,V,B={
eVY(){return new B.BY(null)},
eU9(d,e){var x=y.K
x=new B.ahj(e,d,A.b([],x),A.b([],x),A.b([],x),A.b([],x),A.a7(y.T,y.S),A.b([],y.R),0,null,new A.av(A.b([],y.f),y.Z),new A.av(A.b([],y.E),y.I),$.aq())
x.b89(d,e)
return x},
BY:function BY(d){this.a=d},
aAe:function aAe(d){var _=this
_.d=$
_.a=_.e=null
_.b=d
_.c=null},
cTl:function cTl(d){this.a=d},
cTn:function cTn(d){this.a=d},
cTm:function cTm(d,e){this.a=d
this.b=e},
cTo:function cTo(d){this.a=d},
ahj:function ahj(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.fy=d
_.go=e
_.id=f
_.x=g
_.y=h
_.z=i
_.Q=!1
_.as=null
_.at=j
_.ax=k
_.dm$=l
_.dj$=m
_.a=n
_.b=o
_.u$=0
_.B$=p
_.T$=_.P$=0
_.U$=!1},
aTu:function aTu(){},
aTt:function aTt(d,e,f){this.a=d
this.b=e
this.c=f},
aTp:function aTp(){},
aTq:function aTq(d,e,f){this.a=d
this.b=e
this.c=f},
aTo:function aTo(d){this.a=d},
aTr:function aTr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aTn:function aTn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aTm:function aTm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aTj:function aTj(d){this.a=d},
aTk:function aTk(d){this.a=d},
aTl:function aTl(d){this.a=d},
aTs:function aTs(){},
euO(d){var x="EntryDate",w="AttendaceDateTime",v=J.aK(d),u=A.fw(v.i(d,"AttendanceID")),t=A.fw(v.i(d,"EmployeeID")),s=v.i(d,x)!=null?G.e0(A.eq(v.i(d,x))):null,r=v.i(d,w)!=null?G.e0(A.eq(v.i(d,w))):null,q=A.dZ(v.i(d,"Remarks")),p=A.fw(v.i(d,"UserID")),o=A.dZ(v.i(d,"EmployeeName")),n=A.jD(v.i(d,"IsManual")),m=A.dZ(v.i(d,"ShiftTitle")),l=A.dZ(v.i(d,"DepartmentTitle")),k=A.dZ(v.i(d,"DesignationTitle")),j=A.dZ(v.i(d,"InTime")),i=A.dZ(v.i(d,"OutTime")),h=A.dZ(v.i(d,"IsIn"))
A.dZ(v.i(d,"AttTime"))
return new W.oN(u,t,s,r,q,p,o,n,m,l,k,j,i,h)},
aQ3(d,e){return B.eOo(d,e)},
eOo(d,e){var x=0,w=A.i(y.Q),v,u=2,t,s,r,q,p,o,n,m,l,k
var $async$aQ3=A.j(function(f,g){if(f===1){t=g
x=u}while(true)switch(x){case 0:u=4
s=A.ac($.ag+"/Payroll/GetAttendances?filterDate="+e+"&employeeNameFilter="+d,0,null)
x=7
return A.c(H.cK(s,null),$async$aQ3)
case 7:r=g
if(r.b===200){m=r
q=C.k.C(0,A.aR(J.B(A.aQ(m.e).c.a,"charset")).a8(0,m.w),null)
p=A.b([],y.F)
for(m=J.aZ(J.B(q,"data"));m.L();){o=m.ga1(m)
J.c9(p,B.euO(o))}v=new A.x(p,1,null,null,y.Q)
x=1
break}else{m=r
m=A.Z(C.k.C(0,A.aR(J.B(A.aQ(m.e).c.a,"charset")).a8(0,m.w),null),y.z)
v=new A.x(null,0,m.d,null,y.Q)
x=1
break}u=2
x=6
break
case 4:u=3
k=t
n=A.W(k)
m=J.u(n)
v=new A.x(null,0,m,null,y.Q)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$aQ3,w)},
afv(d){return B.eOp(d)},
eOp(d){var x=0,w=A.i(y.N),v,u=2,t,s,r,q,p,o,n,m
var $async$afv=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.ac($.ag+"/Payroll/GetAttendanceById?attendanceId="+d,0,null)
x=7
return A.c(H.cK(s,null),$async$afv)
case 7:r=f
if(r.b===200){o=r
q=C.k.C(0,A.aR(J.B(A.aQ(o.e).c.a,"charset")).a8(0,o.w),null)
o=B.euO(J.B(q,"data"))
v=new A.x(o,1,null,null,y.N)
x=1
break}else{o=r
o=A.Z(C.k.C(0,A.aR(J.B(A.aQ(o.e).c.a,"charset")).a8(0,o.w),null),y.D)
v=o
x=1
break}u=2
x=6
break
case 4:u=3
m=t
p=A.W(m)
o=J.u(p)
v=new A.x(null,0,o,null,y.N)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$afv,w)},
aPN(d,e,f){return B.eMW(d,e,f)},
eMW(d,e,f){var x=0,w=A.i(y.X),v,u=2,t,s,r,q,p,o,n,m,l
var $async$aPN=A.j(function(g,h){if(g===1){t=h
x=u}while(true)switch(x){case 0:u=4
s=A.ac($.ag+"/Payroll/DeleteAttandence?attendanceId="+d+"&userId="+e+"&employeeId="+A.o(f),0,null)
x=7
return A.c(V.pH(s),$async$aPN)
case 7:r=h
o=y.z
if(r.b===200){n=r
q=C.k.C(0,A.aR(J.B(A.aQ(n.e).c.a,"charset")).a8(0,n.w),null)
o=A.Z(q,o)
v=o
x=1
break}else{n=r
o=A.Z(C.k.C(0,A.aR(J.B(A.aQ(n.e).c.a,"charset")).a8(0,n.w),null),o)
v=o
x=1
break}u=2
x=6
break
case 4:u=3
l=t
p=A.W(l)
o=J.u(p)
v=new A.x(null,0,o,null,y.X)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$aPN,w)}},F,W,X,Y
J=c[1]
A=c[0]
C=c[2]
I=c[367]
D=c[353]
E=c[425]
K=c[343]
L=c[534]
M=c[350]
N=c[446]
O=c[349]
P=c[430]
G=c[372]
Q=c[375]
R=c[608]
S=c[378]
T=c[428]
H=c[355]
U=c[377]
V=c[318]
B=a.updateHolder(c[151],B)
F=c[606]
W=c[234]
X=c[607]
Y=c[605]
B.BY.prototype={
W(){return new B.aAe(C.y)}}
B.aAe.prototype={
cW(){return new U.D(new B.cTl(this),C.aB,"Add",null,null)},
PP(){var x=0,w=A.i(y.e),v,u=this,t,s,r,q
var $async$PP=A.j(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:s=y.F
r=A.b([],s)
q=u.e
x=q!=null?3:4
break
case 3:x=5
return A.c(B.aQ3("",A.aH("MM/dd/yyyy",null).a9(q)),$async$PP)
case 5:t=e
if(t.c!==0){r=t.a
if(r==null)r=A.b([],s)}case 4:v=r
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$PP,w)},
a6(){this.aa()
this.e=new A.S(Date.now(),!1)},
J(d){var x=this,w=null,v=y.p
return A.bl(w,new A.at(C.aL,A.K(A.b([C.u,F.auw,C.u,new A.bs(A.K(A.b([A.l(A.b([new A.k(1,C.e,x.cW(),w),C.w,new A.k(3,C.e,new A.Y(250,w,I.a0(x.e,w,w,w,"Filter",w,new B.cTn(x)),w),w),C.t],v),C.c,w,C.d,C.b,w),C.h],v),C.a0,w,C.d,C.b,C.l),w,A.K(A.b([A.l(A.b([x.cW(),C.u],v),C.c,w,C.K,C.b,w)],v),C.c,w,C.d,C.b,C.l),w),C.ar,A.ed(new B.cTo(x),x.PP(),y.e)],v),C.c,w,C.d,C.b,C.l),w),w,w,w,w)}}
B.ahj.prototype={
b89(d,e){var x=J.cw(this.go,new B.aTu(),y.n)
this.id=A.a5(x,!0,x.$ti.j("az.E"))},
gcC(d){return this.id},
di(d){var x=d.a,w=A.ar(x).j("ak<1,r>")
return new D.dM(null,A.a5(new A.ak(x,new B.aTt(this,d,new M.eH(this.fy)),w),!0,w.j("az.E")))}}
var z=a.updateTypes(["au(oN)","c2(M<@>)","L(M<@>)"])
B.cTl.prototype={
$0(){var x=this.a.c
x.toString
A.ah(x,"add_attendance",null)},
$S:0}
B.cTn.prototype={
$1(d){var x=this.a
x.k(new B.cTm(x,d))},
$S:2}
B.cTm.prototype={
$0(){this.a.e=this.b},
$S:0}
B.cTo.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o=null
if(e.a===C.aM)return A.bV(A.d3("assets/animations/loading.json",o,o),o,o)
else{x=e.c
if(x!=null)return A.n("Error: "+A.o(x),o,o,o,o,o,o,o,o)}x=e.b
x.toString
x=B.eU9(x,d)
this.a.d=x
w=D.aG(!0,!0,!0,"id",E.ah,A.U(C.B,T.bm,C.q,o,o,o,o,o,o,o,C.Q,o,o,o),!0,0/0)
v=y.w
u=A.H(d,o,v).w.a.a<600?E.a4:E.ao
u=D.aG(!0,!0,!0,"date",u,A.U(C.B,N.dg,C.q,o,o,o,o,o,o,o,C.Q,o,o,o),!0,0/0)
t=A.H(d,o,v).w.a.a<600?E.a4:E.ao
t=D.aG(!0,!0,!0,"employee",t,A.U(C.B,X.zv,C.q,o,o,o,o,o,o,o,C.Q,o,o,o),!0,0/0)
s=A.H(d,o,v).w.a.a<600?E.a4:E.ao
s=D.aG(!0,!0,!0,"designation",s,A.U(C.B,F.aIV,C.q,o,o,o,o,o,o,o,C.Q,o,o,o),!0,0/0)
r=A.H(d,o,v).w.a.a<600?E.a4:E.ao
r=D.aG(!0,!0,!0,"department",r,A.U(C.B,Y.nf,C.q,o,o,o,o,o,o,o,C.Q,o,o,o),!0,0/0)
q=A.H(d,o,v).w.a.a<600?E.a4:E.ao
q=D.aG(!0,!0,!0,"shift",q,A.U(C.B,F.aIM,C.q,o,o,o,o,o,o,o,C.Q,o,o,o),!0,0/0)
p=A.H(d,o,v).w.a.a<600?E.a4:E.ao
p=D.aG(!0,!0,!0,"isin",p,A.U(C.B,F.aK4,C.q,o,o,o,o,o,o,o,C.Q,o,o,o),!0,0/0)
v=A.H(d,o,v).w.a.a<600?E.a4:E.ao
return A.aj(K.hi(o,o,A.b([w,u,t,s,r,q,p,D.aG(!0,!0,!0,"manual",v,A.U(C.B,R.zu,C.q,o,o,o,o,o,o,o,C.Q,o,o,o),!0,0/0),D.aG(!0,!1,!1,"actions",E.as,A.U(C.B,P.b_,C.q,o,o,o,o,o,o,o,C.Q,o,o,o),!0,155)],y.t),E.bn,o,E.bP,!1,x),1)},
$S:1093}
B.aTu.prototype={
$1(d){var x,w,v=d.d
v.toString
x=A.aH("MM/dd/yyyy",null).a9(v)
v=y.c
w=y.v
return new D.au(A.b([new D.M("id",d.a,y.d),new D.M("date",x,v),new D.M("employee",d.r,v),new D.M("designation",d.z,v),new D.M("department",d.y,v),new D.M("shift",d.x,v),new D.M("isin",d.at==="true",w),new D.M("manual",d.w===!0,w),L.bi],y.O))},
$S:z+0}
B.aTt.prototype={
$1(d){var x,w,v,u=null,t=d.a
if(t==="actions"){t=this.b
x=C.f.bD(t.a,new B.aTp()).b
w=this.a
v=this.c
return A.U(C.B,new O.eF(new B.aTq(w,v,x),new B.aTr(w,v,x,t),u,u,w.fy,u),C.q,u,u,u,u,u,u,u,C.Q,u,u,u)}else{t=t==="isin"||t==="manual"
w=d.b
if(t)return A.U(C.B,Q.a9(u,!1,u,u,u,u,!1,u,u,new B.aTs(),u,u,u,u,u,!1,A.hd(w)),C.q,u,u,u,u,u,u,u,C.Q,u,u,u)
else return A.U(C.B,A.n(J.u(w),u,C.o,u,u,u,u,u,u),C.q,u,u,u,u,u,u,u,C.Q,u,u,u)}},
$S:z+1}
B.aTp.prototype={
$1(d){return d.a==="id"},
$S:z+2}
B.aTq.prototype={
$0(){var x=0,w=A.i(y.H),v,u=this,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:r=u.b
r.c7(0)
x=3
return A.c(B.afv(u.c),$async$$0)
case 3:t=e
s=t.a
s.toString
A.V(r.a,!0).a7("dialog")
if(t.c!==0){r=u.a.fy
if(r.e==null){x=1
break}A.ah(r,"add_attendance",s)}else{r=u.a.fy
if(r.e==null){x=1
break}A.O(null,null,!0,null,new B.aTo(t),r,null,!0,y.z)}case 1:return A.f(v,w)}})
return A.h($async$$0,w)},
$S:7}
B.aTo.prototype={
$1(d){var x=this.a.d
x.toString
return A.a3(x,null,null,null,"Oops",C.C)},
$S:1}
B.aTr.prototype={
$0(){var x=0,w=A.i(y.H),v=this,u
var $async$$0=A.j(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:u=v.a
A.O(null,null,!0,null,new B.aTn(u,v.b,v.c,v.d),u.fy,null,!0,y.z)
return A.f(null,w)}})
return A.h($async$$0,w)},
$S:7}
B.aTn.prototype={
$1(d){var x=this
return A.a3("Do you really want to delete this employee?",null,new B.aTm(x.a,d,x.b,x.c,x.d),null,"Are you sure?",C.aR)},
$S:1}
B.aTm.prototype={
$0(){var x=0,w=A.i(y.P),v,u=this,t,s,r,q,p,o
var $async$$0=A.j(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:o=u.b
A.V(o,!1).bb()
t=u.c
t.c7(0)
s=u.d
x=3
return A.c(B.afv(s),$async$$0)
case 3:r=e
t=t.a
x=r.c!==0?4:6
break
case 4:q=$.cx().a
q.toString
x=7
return A.c(B.aPN(s,q,r.a.b),$async$$0)
case 7:p=e
A.V(t,!0).a7("dialog")
if(p.c!==0){if(o.e==null){x=1
break}A.O(null,null,!0,null,new B.aTj(p),o,null,!0,y.z)
o=u.a
C.f.O(o.id,u.e)
o.dq()}else{if(o.e==null){x=1
break}A.O(null,null,!0,null,new B.aTk(p),o,null,!0,y.z)}x=5
break
case 6:A.V(t,!0).a7("dialog")
if(o.e==null){x=1
break}A.O(null,null,!0,null,new B.aTl(r),o,null,!0,y.z)
case 5:case 1:return A.f(v,w)}})
return A.h($async$$0,w)},
$S:16}
B.aTj.prototype={
$1(d){var x=this.a.e
x.toString
return A.a3(x,null,null,null,"Hurray",C.a5)},
$S:1}
B.aTk.prototype={
$1(d){var x=this.a.d
x.toString
return A.a3(x,null,null,null,"Oops",C.C)},
$S:1}
B.aTl.prototype={
$1(d){var x=this.a.d
x.toString
return A.a3(x,null,null,null,"Oops",C.C)},
$S:1}
B.aTs.prototype={
$1(d){},
$S:3};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.BY,A.I)
x(B.aAe,A.Q)
w(A.ba,[B.cTl,B.cTm,B.aTq,B.aTr,B.aTm])
w(A.b2,[B.cTn,B.aTu,B.aTt,B.aTp,B.aTo,B.aTn,B.aTj,B.aTk,B.aTl,B.aTs])
x(B.cTo,A.bn)
x(B.ahj,D.dI)})()
A.b8(b.typeUniverse,JSON.parse('{"BY":{"I":[],"r":[]},"aAe":{"Q":["BY"]},"ahj":{"bB":[],"aU":[]}}'))
var y=(function rtii(){var x=A.E
return{N:x("x<oN>"),Q:x("x<q<oN>>"),X:x("x<@>"),D:x("oN"),c:x("M<d>"),v:x("M<L>"),d:x("M<P>"),n:x("au"),F:x("m<oN>"),O:x("m<M<@>>"),K:x("m<au>"),t:x("m<dz>"),R:x("m<dE>"),p:x("m<r>"),E:x("m<~({propertyName:d?,recalculateRowHeight:L,rowColumnIndex:aA?})>"),f:x("m<~({rowColumnIndex:aA?})>"),e:x("q<oN>"),S:x("q<dr>"),w:x("be"),P:x("J"),I:x("av<~({propertyName:d?,recalculateRowHeight:L,rowColumnIndex:aA?})>"),Z:x("av<~({rowColumnIndex:aA?})>"),T:x("d"),z:x("@"),H:x("~")}})();(function constants(){F.auw=new S.bm("Daily Attendance",null,"payroll",null)
F.aIM=new A.y("Shift",null,null,null,null,null,null,null,null,null,null)
F.aIV=new A.y("Designation",null,null,null,null,null,null,null,null,null,null)
F.aK4=new A.y("Is In",null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_954",e:"endPart",h:b})})($__dart_deferred_initializers__,"qyA7OZWaQtdEkJOtYmZpoW4quTM=");
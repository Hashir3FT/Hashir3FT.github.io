((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_952",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,D,E,K,L,M,N,O,P,G,Q,R,S,T,H,U,V,B={
f2H(){return new B.C5(null)},
f0M(d,e){var x=y.K
x=new B.ahx(e,d,A.b([],x),A.b([],x),A.b([],x),A.b([],x),A.a6(y.T,y.S),A.b([],y.R),0,null,new A.av(A.b([],y.f),y.Z),new A.av(A.b([],y.E),y.I),$.ap())
x.bbV(d,e)
return x},
C5:function C5(d){this.a=d},
aF4:function aF4(){var _=this
_.d=$
_.c=_.a=_.e=null},
d_e:function d_e(d){this.a=d},
d_g:function d_g(d){this.a=d},
d_f:function d_f(d,e){this.a=d
this.b=e},
d_h:function d_h(d){this.a=d},
ahx:function ahx(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.er$=l
_.em$=m
_.a=n
_.b=o
_.B$=0
_.A$=p
_.U$=_.S$=0},
aYj:function aYj(){},
aYi:function aYi(d,e,f){this.a=d
this.b=e
this.c=f},
aYe:function aYe(){},
aYf:function aYf(d,e,f){this.a=d
this.b=e
this.c=f},
aYd:function aYd(d){this.a=d},
aYg:function aYg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aYc:function aYc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aYb:function aYb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aY8:function aY8(d){this.a=d},
aY9:function aY9(d){this.a=d},
aYa:function aYa(d){this.a=d},
aYh:function aYh(){},
eC_(d){var x="EntryDate",w="AttendaceDateTime",v=J.aI(d),u=A.fr(v.i(d,"AttendanceID")),t=A.fr(v.i(d,"EmployeeID")),s=v.i(d,x)!=null?G.e4(A.eD(v.i(d,x))):null,r=v.i(d,w)!=null?G.e4(A.eD(v.i(d,w))):null,q=A.eb(v.i(d,"Remarks")),p=A.fr(v.i(d,"UserID")),o=A.eb(v.i(d,"EmployeeName")),n=A.jF(v.i(d,"IsManual")),m=A.eb(v.i(d,"ShiftTitle")),l=A.eb(v.i(d,"DepartmentTitle")),k=A.eb(v.i(d,"DesignationTitle")),j=A.eb(v.i(d,"InTime")),i=A.eb(v.i(d,"OutTime")),h=A.eb(v.i(d,"IsIn"))
A.eb(v.i(d,"AttTime"))
return new W.oY(u,t,s,r,q,p,o,n,m,l,k,j,i,h)},
aUT(d,e){return B.eVZ(d,e)},
eVZ(d,e){var x=0,w=A.i(y.Q),v,u=2,t,s,r,q,p,o,n,m,l,k
var $async$aUT=A.j(function(f,g){if(f===1){t=g
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/GetAttendances?filterDate="+e+"&employeeNameFilter="+d,0,null)
x=7
return A.c(H.cM(s,null),$async$aUT)
case 7:r=g
if(r.b===200){m=r
q=C.k.C(0,A.aQ(J.A(A.aP(m.e).c.a,"charset")).a9(0,m.w),null)
p=A.b([],y.F)
for(m=J.aZ(J.A(q,"data"));m.N();){o=m.ga1(m)
J.cd(p,B.eC_(o))}v=new A.x(p,1,null,null,y.Q)
x=1
break}else{m=r
m=A.W(C.k.C(0,A.aQ(J.A(A.aP(m.e).c.a,"charset")).a9(0,m.w),null),y.z)
v=new A.x(null,0,m.d,null,y.Q)
x=1
break}u=2
x=6
break
case 4:u=3
k=t
n=A.U(k)
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
return A.h($async$aUT,w)},
afD(d){return B.eW_(d)},
eW_(d){var x=0,w=A.i(y.N),v,u=2,t,s,r,q,p,o,n,m
var $async$afD=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/GetAttendanceById?attendanceId="+d,0,null)
x=7
return A.c(H.cM(s,null),$async$afD)
case 7:r=f
if(r.b===200){o=r
q=C.k.C(0,A.aQ(J.A(A.aP(o.e).c.a,"charset")).a9(0,o.w),null)
o=B.eC_(J.A(q,"data"))
v=new A.x(o,1,null,null,y.N)
x=1
break}else{o=r
o=A.W(C.k.C(0,A.aQ(J.A(A.aP(o.e).c.a,"charset")).a9(0,o.w),null),y.D)
v=o
x=1
break}u=2
x=6
break
case 4:u=3
m=t
p=A.U(m)
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
return A.h($async$afD,w)},
aUC(d,e,f){return B.eUw(d,e,f)},
eUw(d,e,f){var x=0,w=A.i(y.X),v,u=2,t,s,r,q,p,o,n,m,l
var $async$aUC=A.j(function(g,h){if(g===1){t=h
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/DeleteAttandence?attendanceId="+d+"&userId="+e+"&employeeId="+A.p(f),0,null)
x=7
return A.c(V.pV(s),$async$aUC)
case 7:r=h
o=y.z
if(r.b===200){n=r
q=C.k.C(0,A.aQ(J.A(A.aP(n.e).c.a,"charset")).a9(0,n.w),null)
o=A.W(q,o)
v=o
x=1
break}else{n=r
o=A.W(C.k.C(0,A.aQ(J.A(A.aP(n.e).c.a,"charset")).a9(0,n.w),null),o)
v=o
x=1
break}u=2
x=6
break
case 4:u=3
l=t
p=A.U(l)
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
return A.h($async$aUC,w)}},F,W,X,Y
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
G=c[371]
Q=c[374]
R=c[608]
S=c[377]
T=c[428]
H=c[355]
U=c[376]
V=c[318]
B=a.updateHolder(c[151],B)
F=c[606]
W=c[234]
X=c[607]
Y=c[605]
B.C5.prototype={
W(){return new B.aF4()}}
B.aF4.prototype={
e3(){return new U.D(new B.d_e(this),C.aB,"Add",null,null)},
Qm(){var x=0,w=A.i(y.e),v,u=this,t,s,r,q
var $async$Qm=A.j(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:s=y.F
r=A.b([],s)
q=u.e
x=q!=null?3:4
break
case 3:x=5
return A.c(B.aUT("",A.aG("MM/dd/yyyy",null).a5(q)),$async$Qm)
case 5:t=e
if(t.c!==0){r=t.a
if(r==null)r=A.b([],s)}case 4:v=r
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$Qm,w)},
a3(){this.ab()
this.e=new A.a2(Date.now(),0,!1)},
I(d){var x=this,w=null,v=y.p
return A.bh(w,new A.as(C.aO,A.K(A.b([C.u,F.aJq,C.u,new A.bp(A.K(A.b([A.l(A.b([new A.k(1,C.e,x.e3(),w),C.w,new A.k(3,C.e,new A.V(250,w,I.a0(x.e,w,w,w,"Filter",w,new B.d_g(x)),w),w),C.t],v),C.c,w,C.d,C.b,w),C.i],v),C.Z,w,C.d,C.b,C.l),w,A.K(A.b([A.l(A.b([x.e3(),C.u],v),C.c,w,C.J,C.b,w)],v),C.c,w,C.d,C.b,C.l),w),C.ar,A.ed(new B.d_h(x),x.Qm(),y.e)],v),C.c,w,C.d,C.b,C.l),w),w,w,w,w)}}
B.ahx.prototype={
bbV(d,e){var x=J.cw(this.go,new B.aYj(),y.n)
this.id=A.a4(x,!0,x.$ti.k("aA.E"))},
gdg(d){return this.id},
el(d){var x=d.a,w=A.aq(x).k("ak<1,r>")
return new D.dU(null,A.a4(new A.ak(x,new B.aYi(this,d,new M.eM(this.fy)),w),!0,w.k("aA.E")))}}
var z=a.updateTypes(["au(oY)","c_(M<@>)","L(M<@>)"])
B.d_e.prototype={
$0(){var x=this.a.c
x.toString
A.ai(x,"add_attendance",null)},
$S:0}
B.d_g.prototype={
$1(d){var x=this.a
x.j(new B.d_f(x,d))},
$S:2}
B.d_f.prototype={
$0(){this.a.e=this.b},
$S:0}
B.d_h.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o=null
if(e.a===C.aN)return A.bR(A.d0("assets/animations/loading.json",o,o),o,o)
else{x=e.c
if(x!=null)return A.n("Error: "+A.p(x),o,o,o,o,o,o,o,o)}x=e.b
x.toString
x=B.f0M(x,d)
this.a.d=x
w=D.aH(!0,!0,!0,"id",E.af,A.T(C.z,T.br,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
v=y.w
u=A.E(d,o,v).w.a.a<600?E.a4:E.as
u=D.aH(!0,!0,!0,"date",u,A.T(C.z,N.dx,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
t=A.E(d,o,v).w.a.a<600?E.a4:E.as
t=D.aH(!0,!0,!0,"employee",t,A.T(C.z,X.Aq,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
s=A.E(d,o,v).w.a.a<600?E.a4:E.as
s=D.aH(!0,!0,!0,"designation",s,A.T(C.z,F.aXp,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
r=A.E(d,o,v).w.a.a<600?E.a4:E.as
r=D.aH(!0,!0,!0,"department",r,A.T(C.z,Y.o_,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
q=A.E(d,o,v).w.a.a<600?E.a4:E.as
q=D.aH(!0,!0,!0,"shift",q,A.T(C.z,F.aXh,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
p=A.E(d,o,v).w.a.a<600?E.a4:E.as
p=D.aH(!0,!0,!0,"isin",p,A.T(C.z,F.aYw,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
v=A.E(d,o,v).w.a.a<600?E.a4:E.as
return A.aj(K.hj(o,o,A.b([w,u,t,s,r,q,p,D.aH(!0,!0,!0,"manual",v,A.T(C.z,R.Ap,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0),D.aH(!0,!1,!1,"actions",E.ao,A.T(C.z,P.b4,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,155)],y.t),E.bs,o,E.bY,!1,x),1)},
$S:1111}
B.aYj.prototype={
$1(d){var x,w,v=d.d
v.toString
x=A.aG("MM/dd/yyyy",null).a5(v)
v=y.c
w=y.v
return new D.au(A.b([new D.M("id",d.a,y.d),new D.M("date",x,v),new D.M("employee",d.r,v),new D.M("designation",d.z,v),new D.M("department",d.y,v),new D.M("shift",d.x,v),new D.M("isin",d.at==="true",w),new D.M("manual",d.w===!0,w),L.bp],y.O))},
$S:z+0}
B.aYi.prototype={
$1(d){var x,w,v,u=null,t=d.a
if(t==="actions"){t=this.b
x=C.f.bH(t.a,new B.aYe()).b
w=this.a
v=this.c
return A.T(C.z,new O.eK(new B.aYf(w,v,x),new B.aYg(w,v,x,t),u,u,w.fy,u),C.r,u,u,u,u,u,u,u,C.P,u,u,u)}else{t=t==="isin"||t==="manual"
w=d.b
if(t)return A.T(C.z,Q.aa(u,!1,u,u,u,u,!1,u,u,new B.aYh(),u,u,u,u,u,!1,A.hf(w)),C.r,u,u,u,u,u,u,u,C.P,u,u,u)
else return A.T(C.z,A.n(J.u(w),u,C.o,u,u,u,u,u,u),C.r,u,u,u,u,u,u,u,C.P,u,u,u)}},
$S:z+1}
B.aYe.prototype={
$1(d){return d.a==="id"},
$S:z+2}
B.aYf.prototype={
$0(){var x=0,w=A.i(y.H),v,u=this,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:r=u.b
r.cq(0)
x=3
return A.c(B.afD(u.c),$async$$0)
case 3:t=e
s=t.a
s.toString
A.S(r.a,!0).a7("dialog")
if(t.c!==0){r=u.a.fy
if(r.e==null){x=1
break}A.ai(r,"add_attendance",s)}else{r=u.a.fy
if(r.e==null){x=1
break}A.O(null,null,!0,null,new B.aYd(t),r,null,!0,y.z)}case 1:return A.f(v,w)}})
return A.h($async$$0,w)},
$S:5}
B.aYd.prototype={
$1(d){var x=this.a.d
x.toString
return A.a1(x,null,null,null,"Oops",C.B)},
$S:1}
B.aYg.prototype={
$0(){var x=0,w=A.i(y.H),v=this,u
var $async$$0=A.j(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:u=v.a
A.O(null,null,!0,null,new B.aYc(u,v.b,v.c,v.d),u.fy,null,!0,y.z)
return A.f(null,w)}})
return A.h($async$$0,w)},
$S:5}
B.aYc.prototype={
$1(d){var x=this
return A.a1("Do you really want to delete this employee?",null,new B.aYb(x.a,d,x.b,x.c,x.d),null,"Are you sure?",C.aV)},
$S:1}
B.aYb.prototype={
$0(){var x=0,w=A.i(y.P),v,u=this,t,s,r,q,p,o
var $async$$0=A.j(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:o=u.b
A.S(o,!1).bf()
t=u.c
t.cq(0)
s=u.d
x=3
return A.c(B.afD(s),$async$$0)
case 3:r=e
t=t.a
x=r.c!==0?4:6
break
case 4:q=$.cx().a
q.toString
x=7
return A.c(B.aUC(s,q,r.a.b),$async$$0)
case 7:p=e
A.S(t,!0).a7("dialog")
if(p.c!==0){if(o.e==null){x=1
break}A.O(null,null,!0,null,new B.aY8(p),o,null,!0,y.z)
o=u.a
C.f.P(o.id,u.e)
o.ev()}else{if(o.e==null){x=1
break}A.O(null,null,!0,null,new B.aY9(p),o,null,!0,y.z)}x=5
break
case 6:A.S(t,!0).a7("dialog")
if(o.e==null){x=1
break}A.O(null,null,!0,null,new B.aYa(r),o,null,!0,y.z)
case 5:case 1:return A.f(v,w)}})
return A.h($async$$0,w)},
$S:16}
B.aY8.prototype={
$1(d){var x=this.a.e
x.toString
return A.a1(x,null,null,null,"Hurray",C.a5)},
$S:1}
B.aY9.prototype={
$1(d){var x=this.a.d
x.toString
return A.a1(x,null,null,null,"Oops",C.B)},
$S:1}
B.aYa.prototype={
$1(d){var x=this.a.d
x.toString
return A.a1(x,null,null,null,"Oops",C.B)},
$S:1}
B.aYh.prototype={
$1(d){},
$S:3};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.C5,A.G)
x(B.aF4,A.Q)
w(A.b8,[B.d_e,B.d_f,B.aYf,B.aYg,B.aYb])
w(A.b0,[B.d_g,B.aYj,B.aYi,B.aYe,B.aYd,B.aYc,B.aY8,B.aY9,B.aYa,B.aYh])
x(B.d_h,A.bk)
x(B.ahx,D.dO)})()
A.b6(b.typeUniverse,JSON.parse('{"C5":{"G":[],"r":[]},"aF4":{"Q":["C5"]},"ahx":{"by":[],"aS":[]}}'))
var y=(function rtii(){var x=A.H
return{N:x("x<oY>"),Q:x("x<q<oY>>"),X:x("x<@>"),D:x("oY"),c:x("M<d>"),v:x("M<L>"),d:x("M<P>"),n:x("au"),F:x("m<oY>"),O:x("m<M<@>>"),K:x("m<au>"),t:x("m<dD>"),R:x("m<dI>"),p:x("m<r>"),E:x("m<~({propertyName:d?,recalculateRowHeight:L,rowColumnIndex:aB?})>"),f:x("m<~({rowColumnIndex:aB?})>"),e:x("q<oY>"),S:x("q<dt>"),w:x("ba"),P:x("I"),I:x("av<~({propertyName:d?,recalculateRowHeight:L,rowColumnIndex:aB?})>"),Z:x("av<~({rowColumnIndex:aB?})>"),T:x("d"),z:x("@"),H:x("~")}})();(function constants(){F.aJq=new S.bj("Daily Attendance",null,"payroll",null)
F.aXh=new A.y("Shift",null,null,null,null,null,null,null,null,null,null)
F.aXp=new A.y("Designation",null,null,null,null,null,null,null,null,null,null)
F.aYw=new A.y("Is In",null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_952",e:"endPart",h:b})})($__dart_deferred_initializers__,"T11/HEfBoPiehqnEm2wZ0BtpCck=");
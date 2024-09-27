((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_842",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,M,N,D,E,O,P,Q,R,G,S,T,H,U,V,B={
f44(){return new B.Ca(null)},
f29(d,e){var x=y.K
x=new B.ahG(e,d,A.b([],x),A.b([],x),A.b([],x),A.b([],x),A.a6(y.T,y.S),A.b([],y.R),0,null,new A.av(A.b([],y.f),y.Z),new A.av(A.b([],y.E),y.I),$.ap())
x.bgj(d,e)
return x},
Ca:function Ca(d){this.a=d},
aGr:function aGr(){var _=this
_.d=$
_.c=_.a=_.e=null},
d0D:function d0D(d){this.a=d},
d0F:function d0F(d){this.a=d},
d0E:function d0E(d,e){this.a=d
this.b=e},
d0G:function d0G(d){this.a=d},
ahG:function ahG(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fA$=l
_.fs$=m
_.a=n
_.b=o
_.B$=0
_.A$=p
_.U$=_.S$=0},
aZH:function aZH(){},
aZG:function aZG(d,e,f){this.a=d
this.b=e
this.c=f},
aZC:function aZC(){},
aZD:function aZD(d,e,f){this.a=d
this.b=e
this.c=f},
aZB:function aZB(d){this.a=d},
aZE:function aZE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZA:function aZA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZz:function aZz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aZw:function aZw(d){this.a=d},
aZx:function aZx(d){this.a=d},
aZy:function aZy(d){this.a=d},
aZF:function aZF(){},
eDp(d){var x="EntryDate",w="AttendaceDateTime",v=J.aI(d),u=A.ft(v.i(d,"AttendanceID")),t=A.ft(v.i(d,"EmployeeID")),s=v.i(d,x)!=null?G.e5(A.eF(v.i(d,x))):null,r=v.i(d,w)!=null?G.e5(A.eF(v.i(d,w))):null,q=A.ed(v.i(d,"Remarks")),p=A.ft(v.i(d,"UserID")),o=A.ed(v.i(d,"EmployeeName")),n=A.jI(v.i(d,"IsManual")),m=A.ed(v.i(d,"ShiftTitle")),l=A.ed(v.i(d,"DepartmentTitle")),k=A.ed(v.i(d,"DesignationTitle")),j=A.ed(v.i(d,"InTime")),i=A.ed(v.i(d,"OutTime")),h=A.ed(v.i(d,"IsIn"))
A.ed(v.i(d,"AttTime"))
return new W.p_(u,t,s,r,q,p,o,n,m,l,k,j,i,h)},
aWg(d,e){return B.eXm(d,e)},
eXm(d,e){var x=0,w=A.i(y.Q),v,u=2,t,s,r,q,p,o,n,m,l,k
var $async$aWg=A.j(function(f,g){if(f===1){t=g
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/GetAttendances?filterDate="+e+"&employeeNameFilter="+d,0,null)
x=7
return A.c(H.cM(s,null),$async$aWg)
case 7:r=g
if(r.b===200){m=r
q=C.k.C(0,A.aQ(J.A(A.aP(m.e).c.a,"charset")).a9(0,m.w),null)
p=A.b([],y.F)
for(m=J.aZ(J.A(q,"data"));m.N();){o=m.ga1(m)
J.cb(p,B.eDp(o))}v=new A.x(p,1,null,null,y.Q)
x=1
break}else{m=r
m=A.X(C.k.C(0,A.aQ(J.A(A.aP(m.e).c.a,"charset")).a9(0,m.w),null),y.z)
v=new A.x(null,0,m.d,null,y.Q)
x=1
break}u=2
x=6
break
case 4:u=3
k=t
n=A.V(k)
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
return A.h($async$aWg,w)},
afM(d){return B.eXn(d)},
eXn(d){var x=0,w=A.i(y.N),v,u=2,t,s,r,q,p,o,n,m
var $async$afM=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/GetAttendanceById?attendanceId="+d,0,null)
x=7
return A.c(H.cM(s,null),$async$afM)
case 7:r=f
if(r.b===200){o=r
q=C.k.C(0,A.aQ(J.A(A.aP(o.e).c.a,"charset")).a9(0,o.w),null)
o=B.eDp(J.A(q,"data"))
v=new A.x(o,1,null,null,y.N)
x=1
break}else{o=r
o=A.X(C.k.C(0,A.aQ(J.A(A.aP(o.e).c.a,"charset")).a9(0,o.w),null),y.D)
v=o
x=1
break}u=2
x=6
break
case 4:u=3
m=t
p=A.V(m)
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
return A.h($async$afM,w)},
aW_(d,e,f){return B.eVU(d,e,f)},
eVU(d,e,f){var x=0,w=A.i(y.X),v,u=2,t,s,r,q,p,o,n,m,l
var $async$aW_=A.j(function(g,h){if(g===1){t=h
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/DeleteAttandence?attendanceId="+d+"&userId="+e+"&employeeId="+A.p(f),0,null)
x=7
return A.c(V.pX(s),$async$aW_)
case 7:r=h
o=y.z
if(r.b===200){n=r
q=C.k.C(0,A.aQ(J.A(A.aP(n.e).c.a,"charset")).a9(0,n.w),null)
o=A.X(q,o)
v=o
x=1
break}else{n=r
o=A.X(C.k.C(0,A.aQ(J.A(A.aP(n.e).c.a,"charset")).a9(0,n.w),null),o)
v=o
x=1
break}u=2
x=6
break
case 4:u=3
l=t
p=A.V(l)
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
return A.h($async$aW_,w)}},F,W,X,Y
J=c[1]
A=c[0]
C=c[2]
I=c[430]
K=c[432]
L=c[368]
M=c[344]
N=c[378]
D=c[354]
E=c[427]
O=c[516]
P=c[351]
Q=c[350]
R=c[448]
G=c[372]
S=c[375]
T=c[564]
H=c[356]
U=c[377]
V=c[319]
B=a.updateHolder(c[151],B)
F=c[562]
W=c[234]
X=c[563]
Y=c[561]
B.Ca.prototype={
W(){return new B.aGr()}}
B.aGr.prototype={
f1(){return new U.D(new B.d0D(this),C.aB,"Add",null,null)},
Te(){var x=0,w=A.i(y.e),v,u=this,t,s,r,q
var $async$Te=A.j(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:s=y.F
r=A.b([],s)
q=u.e
x=q!=null?3:4
break
case 3:x=5
return A.c(B.aWg("",A.aG("MM/dd/yyyy",null).a5(q)),$async$Te)
case 5:t=e
if(t.c!==0){r=t.a
if(r==null)r=A.b([],s)}case 4:v=r
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$Te,w)},
a3(){this.ab()
this.e=new A.a2(Date.now(),0,!1)},
I(d){var x=this,w=null,v=y.p
return A.bh(w,new A.ar(C.aP,A.K(A.b([C.u,F.aJ8,C.u,new A.bp(A.K(A.b([A.l(A.b([new A.k(1,C.e,x.f1(),w),C.w,new A.k(3,C.e,new A.W(250,w,L.a1(x.e,w,w,w,"Filter",w,new B.d0F(x)),w),w),C.t],v),C.c,w,C.d,C.b,w),C.i],v),C.Z,w,C.d,C.b,C.l),w,A.K(A.b([A.l(A.b([x.f1(),C.u],v),C.c,w,C.J,C.b,w)],v),C.c,w,C.d,C.b,C.l),w),C.ar,A.ef(new B.d0G(x),x.Te(),y.e)],v),C.c,w,C.d,C.b,C.l),w),w,w,w,w)}}
B.ahG.prototype={
bgj(d,e){var x=J.cw(this.go,new B.aZH(),y.n)
this.id=A.a4(x,!0,x.$ti.k("aA.E"))},
gdl(d){return this.id},
fq(d){var x=d.a,w=A.aq(x).k("ak<1,r>")
return new D.dV(null,A.a4(new A.ak(x,new B.aZG(this,d,new P.eO(this.fy)),w),!0,w.k("aA.E")))}}
var z=a.updateTypes(["au(p_)","c_(M<@>)","L(M<@>)"])
B.d0D.prototype={
$0(){var x=this.a.c
x.toString
A.ai(x,"add_attendance",null)},
$S:0}
B.d0F.prototype={
$1(d){var x=this.a
x.j(new B.d0E(x,d))},
$S:2}
B.d0E.prototype={
$0(){this.a.e=this.b},
$S:0}
B.d0G.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o=null
if(e.a===C.aO)return A.bR(A.d0("assets/animations/loading.json",o,o),o,o)
else{x=e.c
if(x!=null)return A.m("Error: "+A.p(x),o,o,o,o,o,o,o,o)}x=e.b
x.toString
x=B.f29(x,d)
this.a.d=x
w=D.aH(!0,!0,!0,"id",E.ag,A.T(C.z,I.c_,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
v=y.w
u=A.F(d,o,v).w.a.a<600?E.a4:E.as
u=D.aH(!0,!0,!0,"date",u,A.T(C.z,R.es,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
t=A.F(d,o,v).w.a.a<600?E.a4:E.as
t=D.aH(!0,!0,!0,"employee",t,A.T(C.z,X.A9,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
s=A.F(d,o,v).w.a.a<600?E.a4:E.as
s=D.aH(!0,!0,!0,"designation",s,A.T(C.z,F.aWs,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
r=A.F(d,o,v).w.a.a<600?E.a4:E.as
r=D.aH(!0,!0,!0,"department",r,A.T(C.z,Y.nS,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
q=A.F(d,o,v).w.a.a<600?E.a4:E.as
q=D.aH(!0,!0,!0,"shift",q,A.T(C.z,F.aWl,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
p=A.F(d,o,v).w.a.a<600?E.a4:E.as
p=D.aH(!0,!0,!0,"isin",p,A.T(C.z,F.aXp,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
v=A.F(d,o,v).w.a.a<600?E.a4:E.as
return A.aj(M.hm(o,o,A.b([w,u,t,s,r,q,p,D.aH(!0,!0,!0,"manual",v,A.T(C.z,T.A8,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0),D.aH(!0,!1,!1,"actions",E.ao,A.T(C.z,K.bE,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,155)],y.t),E.br,o,E.bY,!1,x),1)},
$S:1114}
B.aZH.prototype={
$1(d){var x,w,v=d.d
v.toString
x=A.aG("MM/dd/yyyy",null).a5(v)
v=y.c
w=y.v
return new D.au(A.b([new D.M("id",d.a,y.d),new D.M("date",x,v),new D.M("employee",d.r,v),new D.M("designation",d.z,v),new D.M("department",d.y,v),new D.M("shift",d.x,v),new D.M("isin",d.at==="true",w),new D.M("manual",d.w===!0,w),O.bp],y.O))},
$S:z+0}
B.aZG.prototype={
$1(d){var x,w,v,u=null,t=d.a
if(t==="actions"){t=this.b
x=C.f.bI(t.a,new B.aZC()).b
w=this.a
v=this.c
return A.T(C.z,new Q.eM(new B.aZD(w,v,x),new B.aZE(w,v,x,t),u,u,w.fy,u),C.r,u,u,u,u,u,u,u,C.P,u,u,u)}else{t=t==="isin"||t==="manual"
w=d.b
if(t)return A.T(C.z,S.aa(u,!1,u,u,u,u,!1,u,u,new B.aZF(),u,u,u,u,u,!1,A.hi(w)),C.r,u,u,u,u,u,u,u,C.P,u,u,u)
else return A.T(C.z,A.m(J.u(w),u,C.o,u,u,u,u,u,u),C.r,u,u,u,u,u,u,u,C.P,u,u,u)}},
$S:z+1}
B.aZC.prototype={
$1(d){return d.a==="id"},
$S:z+2}
B.aZD.prototype={
$0(){var x=0,w=A.i(y.H),v,u=this,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:r=u.b
r.ct(0)
x=3
return A.c(B.afM(u.c),$async$$0)
case 3:t=e
s=t.a
s.toString
A.S(r.a,!0).a7("dialog")
if(t.c!==0){r=u.a.fy
if(r.e==null){x=1
break}A.ai(r,"add_attendance",s)}else{r=u.a.fy
if(r.e==null){x=1
break}A.O(null,null,!0,null,new B.aZB(t),r,null,!0,y.z)}case 1:return A.f(v,w)}})
return A.h($async$$0,w)},
$S:5}
B.aZB.prototype={
$1(d){var x=this.a.d
x.toString
return A.U(x,null,null,null,"Oops",C.B)},
$S:1}
B.aZE.prototype={
$0(){var x=0,w=A.i(y.H),v=this,u
var $async$$0=A.j(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:u=v.a
A.O(null,null,!0,null,new B.aZA(u,v.b,v.c,v.d),u.fy,null,!0,y.z)
return A.f(null,w)}})
return A.h($async$$0,w)},
$S:5}
B.aZA.prototype={
$1(d){var x=this
return A.U("Do you really want to delete this employee?",null,new B.aZz(x.a,d,x.b,x.c,x.d),null,"Are you sure?",C.aX)},
$S:1}
B.aZz.prototype={
$0(){var x=0,w=A.i(y.P),v,u=this,t,s,r,q,p,o
var $async$$0=A.j(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:o=u.b
A.S(o,!1).bj()
t=u.c
t.ct(0)
s=u.d
x=3
return A.c(B.afM(s),$async$$0)
case 3:r=e
t=t.a
x=r.c!==0?4:6
break
case 4:q=$.cx().a
q.toString
x=7
return A.c(B.aW_(s,q,r.a.b),$async$$0)
case 7:p=e
A.S(t,!0).a7("dialog")
if(p.c!==0){if(o.e==null){x=1
break}A.O(null,null,!0,null,new B.aZw(p),o,null,!0,y.z)
o=u.a
C.f.R(o.id,u.e)
o.fC()}else{if(o.e==null){x=1
break}A.O(null,null,!0,null,new B.aZx(p),o,null,!0,y.z)}x=5
break
case 6:A.S(t,!0).a7("dialog")
if(o.e==null){x=1
break}A.O(null,null,!0,null,new B.aZy(r),o,null,!0,y.z)
case 5:case 1:return A.f(v,w)}})
return A.h($async$$0,w)},
$S:16}
B.aZw.prototype={
$1(d){var x=this.a.e
x.toString
return A.U(x,null,null,null,"Hurray",C.a5)},
$S:1}
B.aZx.prototype={
$1(d){var x=this.a.d
x.toString
return A.U(x,null,null,null,"Oops",C.B)},
$S:1}
B.aZy.prototype={
$1(d){var x=this.a.d
x.toString
return A.U(x,null,null,null,"Oops",C.B)},
$S:1}
B.aZF.prototype={
$1(d){},
$S:3};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ca,A.G)
x(B.aGr,A.Q)
w(A.b8,[B.d0D,B.d0E,B.aZD,B.aZE,B.aZz])
w(A.b0,[B.d0F,B.aZH,B.aZG,B.aZC,B.aZB,B.aZA,B.aZw,B.aZx,B.aZy,B.aZF])
x(B.d0G,A.bk)
x(B.ahG,D.dP)})()
A.b6(b.typeUniverse,JSON.parse('{"Ca":{"G":[],"r":[]},"aGr":{"Q":["Ca"]},"ahG":{"bw":[],"aS":[]}}'))
var y=(function rtii(){var x=A.I
return{N:x("x<p_>"),Q:x("x<q<p_>>"),X:x("x<@>"),D:x("p_"),c:x("M<d>"),v:x("M<L>"),d:x("M<P>"),n:x("au"),F:x("n<p_>"),O:x("n<M<@>>"),K:x("n<au>"),t:x("n<dE>"),R:x("n<dJ>"),p:x("n<r>"),E:x("n<~({propertyName:d?,recalculateRowHeight:L,rowColumnIndex:aB?})>"),f:x("n<~({rowColumnIndex:aB?})>"),e:x("q<p_>"),S:x("q<du>"),w:x("ba"),P:x("H"),I:x("av<~({propertyName:d?,recalculateRowHeight:L,rowColumnIndex:aB?})>"),Z:x("av<~({rowColumnIndex:aB?})>"),T:x("d"),z:x("@"),H:x("~")}})();(function constants(){F.aJ8=new N.bj("Daily Attendance",null,"payroll",null)
F.aWl=new A.z("Shift",null,null,null,null,null,null,null,null,null,null)
F.aWs=new A.z("Designation",null,null,null,null,null,null,null,null,null,null)
F.aXp=new A.z("Is In",null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_842",e:"endPart",h:b})})($__dart_deferred_initializers__,"9d8esaV+Evk1Sb7dROREqhe4w+s=");
((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_671",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,I,K,D,E,L,M,N,F,O,G,P,Q,B={
f48(){return new B.Ca(null)},
f2d(d,e){var x=y.K
x=new B.ahI(e,d,A.b([],x),A.b([],x),A.b([],x),A.b([],x),A.a6(y.T,y.S),A.b([],y.R),0,null,new A.av(A.b([],y.f),y.Z),new A.av(A.b([],y.E),y.I),$.ap())
x.bp7(d,e)
return x},
Ca:function Ca(d){this.a=d},
aGt:function aGt(){var _=this
_.d=$
_.e=null
_.f=$
_.c=_.a=null},
d0G:function d0G(d){this.a=d},
d0I:function d0I(d){this.a=d},
d0H:function d0H(d,e){this.a=d
this.b=e},
d0J:function d0J(d){this.a=d},
ahI:function ahI(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fN$=l
_.fI$=m
_.a=n
_.b=o
_.B$=0
_.A$=p
_.W$=_.T$=0},
aZJ:function aZJ(){},
aZI:function aZI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZE:function aZE(){},
aZF:function aZF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZD:function aZD(d,e){this.a=d
this.b=e},
aZG:function aZG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aZC:function aZC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aZB:function aZB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aZy:function aZy(d,e){this.a=d
this.b=e},
aZz:function aZz(d,e){this.a=d
this.b=e},
aZA:function aZA(d,e){this.a=d
this.b=e},
aZH:function aZH(){},
eDu(d){var x="EntryDate",w="AttendaceDateTime",v=J.aK(d),u=A.ft(v.i(d,"AttendanceID")),t=A.ft(v.i(d,"EmployeeID")),s=v.i(d,x)!=null?F.e5(A.eE(v.i(d,x))):null,r=v.i(d,w)!=null?F.e5(A.eE(v.i(d,w))):null,q=A.ec(v.i(d,"Remarks")),p=A.ft(v.i(d,"UserID")),o=A.ec(v.i(d,"EmployeeName")),n=A.jI(v.i(d,"IsManual")),m=A.ec(v.i(d,"ShiftTitle")),l=A.ec(v.i(d,"DepartmentTitle")),k=A.ec(v.i(d,"DesignationTitle")),j=A.ec(v.i(d,"InTime")),i=A.ec(v.i(d,"OutTime")),h=A.ec(v.i(d,"IsIn"))
A.ec(v.i(d,"AttTime"))
return new R.oY(u,t,s,r,q,p,o,n,m,l,k,j,i,h)},
aWi(d,e){return B.eXq(d,e)},
eXq(d,e){var x=0,w=A.k(y.Q),v,u=2,t,s,r,q,p,o,n,m,l,k
var $async$aWi=A.l(function(f,g){if(f===1){t=g
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/GetAttendances?filterDate="+e+"&employeeNameFilter="+d,0,null)
x=7
return A.d(G.cN(s,null),$async$aWi)
case 7:r=g
if(r.b===200){m=r
q=C.k.C(0,A.aS(J.A(A.aR(m.e).c.a,"charset")).ac(0,m.w),null)
p=A.b([],y.F)
for(m=J.b0(J.A(q,"data"));m.O();){o=m.ga4(m)
J.cf(p,B.eDu(o))}v=new A.x(p,1,null,null,y.Q)
x=1
break}else{m=r
m=A.X(C.k.C(0,A.aS(J.A(A.aR(m.e).c.a,"charset")).ac(0,m.w),null),y.z)
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
case 6:case 1:return A.i(v,w)
case 2:return A.h(t,w)}})
return A.j($async$aWi,w)},
afO(d){return B.eXr(d)},
eXr(d){var x=0,w=A.k(y.N),v,u=2,t,s,r,q,p,o,n,m
var $async$afO=A.l(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/GetAttendanceById?attendanceId="+d,0,null)
x=7
return A.d(G.cN(s,null),$async$afO)
case 7:r=f
if(r.b===200){o=r
q=C.k.C(0,A.aS(J.A(A.aR(o.e).c.a,"charset")).ac(0,o.w),null)
o=B.eDu(J.A(q,"data"))
v=new A.x(o,1,null,null,y.N)
x=1
break}else{o=r
o=A.X(C.k.C(0,A.aS(J.A(A.aR(o.e).c.a,"charset")).ac(0,o.w),null),y.D)
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
case 6:case 1:return A.i(v,w)
case 2:return A.h(t,w)}})
return A.j($async$afO,w)},
aW1(d,e,f){return B.eVY(d,e,f)},
eVY(d,e,f){var x=0,w=A.k(y.X),v,u=2,t,s,r,q,p,o,n,m,l
var $async$aW1=A.l(function(g,h){if(g===1){t=h
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/DeleteAttandence?attendanceId="+d+"&userId="+e+"&employeeId="+A.p(f),0,null)
x=7
return A.d(Q.pX(s),$async$aW1)
case 7:r=h
o=y.z
if(r.b===200){n=r
q=C.k.C(0,A.aS(J.A(A.aR(n.e).c.a,"charset")).ac(0,n.w),null)
o=A.X(q,o)
v=o
x=1
break}else{n=r
o=A.X(C.k.C(0,A.aS(J.A(A.aR(n.e).c.a,"charset")).ac(0,n.w),null),o)
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
case 6:case 1:return A.i(v,w)
case 2:return A.h(t,w)}})
return A.j($async$aW1,w)}},R
J=c[1]
A=c[0]
C=c[2]
H=c[367]
I=c[343]
K=c[377]
D=c[353]
E=c[404]
L=c[430]
M=c[350]
N=c[349]
F=c[371]
O=c[374]
G=c[355]
P=c[376]
Q=c[318]
B=a.updateHolder(c[151],B)
R=c[234]
B.Ca.prototype={
X(){return new B.aGt()}}
B.aGt.prototype={
fe(){var x=this.f
x===$&&A.a()
return new P.D(new B.d0G(this),C.aC,x.geW(x),null,null)},
ap(){var x=this.c
x.toString
x=A.aJ(x,C.M,y.J)
x.toString
this.f=x
this.aI()},
Yl(){var x=0,w=A.k(y.e),v,u=this,t,s,r,q
var $async$Yl=A.l(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:s=y.F
r=A.b([],s)
q=u.e
x=q!=null?3:4
break
case 3:x=5
return A.d(B.aWi("",A.aH("MM/dd/yyyy",null).a8(q)),$async$Yl)
case 5:t=e
if(t.c!==0){r=t.a
if(r==null)r=A.b([],s)}case 4:v=r
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$Yl,w)},
a6(){this.ae()
this.e=new A.a2(Date.now(),0,!1)},
J(d){var x,w,v,u,t=this,s=null,r=t.f
r===$&&A.a()
r=r.gaos()
x=t.fe()
w=t.e
v=t.f
u=y.p
return A.bj(s,new A.aq(C.aP,A.J(A.b([C.u,new K.bk(r,s,"payroll",s),C.u,new A.br(A.J(A.b([A.m(A.b([new A.f(1,C.e,x,s),C.w,new A.f(3,C.e,new A.W(250,s,H.a1(w,s,s,s,v.gAq(v),s,new B.d0I(t)),s),s),C.t],u),C.c,s,C.d,C.b,s),C.i],u),C.a_,s,C.d,C.b,C.m),s,A.J(A.b([A.m(A.b([t.fe(),C.u],u),C.c,s,C.J,C.b,s)],u),C.c,s,C.d,C.b,C.m),s),C.as,A.ee(new B.d0J(t),t.Yl(),y.e)],u),C.c,s,C.d,C.b,C.m),s),s,s,s,s)}}
B.ahI.prototype={
bp7(d,e){var x=J.cx(this.go,new B.aZJ(),y.n)
this.id=A.a4(x,!0,x.$ti.k("aA.E"))},
gdB(d){return this.id},
fH(d){var x,w,v=this.fy,u=A.aJ(v,C.M,y.J)
u.toString
x=d.a
w=A.ar(x).k("al<1,r>")
return new D.dV(null,A.a4(new A.al(x,new B.aZI(this,d,new M.eO(v),u),w),!0,w.k("aA.E")))}}
var z=a.updateTypes(["au(oY)","c3(L<@>)","K(L<@>)"])
B.d0G.prototype={
$0(){var x=this.a.c
x.toString
A.ai(x,"add_attendance",null)},
$S:0}
B.d0I.prototype={
$1(d){var x=this.a
x.j(new B.d0H(x,d))},
$S:2}
B.d0H.prototype={
$0(){this.a.e=this.b},
$S:0}
B.d0J.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n=null
if(e.a===C.aO)return A.bU(A.d1("assets/animations/loading.json",n,n),n,n)
else{x=e.c
if(x!=null)return A.c("Error: "+A.p(x),n,n,n,n,n,n,n,n)}x=e.b
x.toString
w=this.a
x=B.f2d(x,d)
w.d=x
v=w.f
v===$&&A.a()
v=D.aI(!0,!0,!0,"id",E.ag,A.U(C.z,A.c(v.gaH(v),n,n,n,n,n,n,n,n),C.r,n,n,n,n,n,n,n,C.O,n,n,n),!0,0/0)
u=y.w
t=A.E(d,n,u).w.a.a<600?E.a6:E.at
t=D.aI(!0,!0,!0,"date",t,A.U(C.z,A.c(w.f.gix(),n,n,n,n,n,n,n,n),C.r,n,n,n,n,n,n,n,C.O,n,n,n),!0,0/0)
s=A.E(d,n,u).w.a.a<600?E.a6:E.at
s=D.aI(!0,!0,!0,"employee",s,A.U(C.z,A.c(w.f.gkZ(),n,n,n,n,n,n,n,n),C.r,n,n,n,n,n,n,n,C.O,n,n,n),!0,0/0)
r=A.E(d,n,u).w.a.a<600?E.a6:E.at
r=D.aI(!0,!0,!0,"designation",r,A.U(C.z,A.c(w.f.glm(),n,n,n,n,n,n,n,n),C.r,n,n,n,n,n,n,n,C.O,n,n,n),!0,0/0)
q=A.E(d,n,u).w.a.a<600?E.a6:E.at
q=D.aI(!0,!0,!0,"department",q,A.U(C.z,A.c(w.f.gju(),n,n,n,n,n,n,n,n),C.r,n,n,n,n,n,n,n,C.O,n,n,n),!0,0/0)
p=A.E(d,n,u).w.a.a<600?E.a6:E.at
p=D.aI(!0,!0,!0,"shift",p,A.U(C.z,A.c(w.f.gkP(),n,n,n,n,n,n,n,n),C.r,n,n,n,n,n,n,n,C.O,n,n,n),!0,0/0)
o=A.E(d,n,u).w.a.a<600?E.a6:E.at
o=D.aI(!0,!0,!0,"isin",o,A.U(C.z,A.c(w.f.gMQ(),n,n,n,n,n,n,n,n),C.r,n,n,n,n,n,n,n,C.O,n,n,n),!0,0/0)
u=A.E(d,n,u).w.a.a<600?E.a6:E.at
u=D.aI(!0,!0,!0,"manual",u,A.U(C.z,A.c(w.f.gUC(),n,n,n,n,n,n,n,n),C.r,n,n,n,n,n,n,n,C.O,n,n,n),!0,0/0)
w=w.f
return A.ak(I.hk(n,n,A.b([v,t,s,r,q,p,o,u,D.aI(!0,!1,!1,"actions",E.ap,A.U(C.z,A.c(w.gft(w),n,n,n,n,n,n,n,n),C.r,n,n,n,n,n,n,n,C.O,n,n,n),!0,155)],y.t),E.bp,n,E.bX,!1,x),1)},
$S:1114}
B.aZJ.prototype={
$1(d){var x,w,v=d.d
v.toString
x=A.aH("MM/dd/yyyy",null).a8(v)
v=y.c
w=y.v
return new D.au(A.b([new D.L("id",d.a,y.d),new D.L("date",x,v),new D.L("employee",d.r,v),new D.L("designation",d.z,v),new D.L("department",d.y,v),new D.L("shift",d.x,v),new D.L("isin",d.at==="true",w),new D.L("manual",d.w===!0,w),L.bo],y.O))},
$S:z+0}
B.aZI.prototype={
$1(d){var x,w,v,u,t=this,s=null,r=d.a
if(r==="actions"){r=t.b
x=C.f.bW(r.a,new B.aZE()).b
w=t.a
v=t.c
u=t.d
return A.U(C.z,new N.eM(new B.aZF(w,v,x,u),new B.aZG(w,u,v,x,r),s,s,w.fy,s),C.r,s,s,s,s,s,s,s,C.O,s,s,s)}else{r=r==="isin"||r==="manual"
w=d.b
if(r)return A.U(C.z,O.aa(s,!1,s,s,s,s,!1,s,s,new B.aZH(),s,s,s,s,s,!1,A.hg(w)),C.r,s,s,s,s,s,s,s,C.O,s,s,s)
else return A.U(C.z,A.c(J.u(w),s,C.o,s,s,s,s,s,s),C.r,s,s,s,s,s,s,s,C.O,s,s,s)}},
$S:z+1}
B.aZE.prototype={
$1(d){return d.a==="id"},
$S:z+2}
B.aZF.prototype={
$0(){var x=0,w=A.k(y.H),v,u=this,t,s,r
var $async$$0=A.l(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:r=u.b
r.cI(0)
x=3
return A.d(B.afO(u.c),$async$$0)
case 3:t=e
s=t.a
s.toString
A.T(r.a,!0).ab("dialog")
if(t.c!==0){r=u.a.fy
if(r.e==null){x=1
break}A.ai(r,"add_attendance",s)}else{r=u.a.fy
if(r.e==null){x=1
break}A.N(null,null,!0,null,new B.aZD(u.d,t),r,null,!0,y.z)}case 1:return A.i(v,w)}})
return A.j($async$$0,w)},
$S:5}
B.aZD.prototype={
$1(d){var x=this.a.gaa(),w=this.b.d
w.toString
return A.P(w,null,null,null,x,C.B)},
$S:1}
B.aZG.prototype={
$0(){var x=0,w=A.k(y.H),v=this,u
var $async$$0=A.l(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:u=v.a
A.N(null,null,!0,null,new B.aZC(u,v.b,v.c,v.d,v.e),u.fy,null,!0,y.z)
return A.i(null,w)}})
return A.j($async$$0,w)},
$S:5}
B.aZC.prototype={
$1(d){var x=this,w=x.b,v=w.ghG()
return A.P(w.ghH(),null,new B.aZB(x.a,d,x.c,x.d,w,x.e),null,v,C.aX)},
$S:1}
B.aZB.prototype={
$0(){var x=0,w=A.k(y.P),v,u=this,t,s,r,q,p,o
var $async$$0=A.l(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:o=u.b
A.T(o,!1).bt()
t=u.c
t.cI(0)
s=u.d
x=3
return A.d(B.afO(s),$async$$0)
case 3:r=e
t=t.a
x=r.c!==0?4:6
break
case 4:q=$.cz().a
q.toString
x=7
return A.d(B.aW1(s,q,r.a.b),$async$$0)
case 7:p=e
A.T(t,!0).ab("dialog")
if(p.c!==0){if(o.e==null){x=1
break}A.N(null,null,!0,null,new B.aZy(u.e,p),o,null,!0,y.z)
o=u.a
C.f.S(o.id,u.f)
o.fR()}else{if(o.e==null){x=1
break}A.N(null,null,!0,null,new B.aZz(u.e,p),o,null,!0,y.z)}x=5
break
case 6:A.T(t,!0).ab("dialog")
if(o.e==null){x=1
break}A.N(null,null,!0,null,new B.aZA(u.e,r),o,null,!0,y.z)
case 5:case 1:return A.i(v,w)}})
return A.j($async$$0,w)},
$S:16}
B.aZy.prototype={
$1(d){var x=this.a.gbO(),w=this.b.e
w.toString
return A.P(w,null,null,null,x,C.a5)},
$S:1}
B.aZz.prototype={
$1(d){var x=this.a.gaa(),w=this.b.d
w.toString
return A.P(w,null,null,null,x,C.B)},
$S:1}
B.aZA.prototype={
$1(d){var x=this.a.gaa(),w=this.b.d
w.toString
return A.P(w,null,null,null,x,C.B)},
$S:1}
B.aZH.prototype={
$1(d){},
$S:3};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ca,A.F)
x(B.aGt,A.R)
w(A.ba,[B.d0G,B.d0H,B.aZF,B.aZG,B.aZB])
w(A.b2,[B.d0I,B.aZJ,B.aZI,B.aZE,B.aZD,B.aZC,B.aZy,B.aZz,B.aZA,B.aZH])
x(B.d0J,A.bm)
x(B.ahI,D.dP)})()
A.b8(b.typeUniverse,JSON.parse('{"Ca":{"F":[],"r":[]},"aGt":{"R":["Ca"]},"ahI":{"bA":[],"aU":[]}}'))
var y=(function rtii(){var x=A.I
return{N:x("x<oY>"),Q:x("x<q<oY>>"),X:x("x<@>"),J:x("bv"),D:x("oY"),c:x("L<e>"),v:x("L<K>"),d:x("L<Q>"),n:x("au"),F:x("n<oY>"),O:x("n<L<@>>"),K:x("n<au>"),t:x("n<dE>"),R:x("n<dJ>"),p:x("n<r>"),E:x("n<~({propertyName:e?,recalculateRowHeight:K,rowColumnIndex:aB?})>"),f:x("n<~({rowColumnIndex:aB?})>"),e:x("q<oY>"),S:x("q<du>"),w:x("bc"),P:x("G"),I:x("av<~({propertyName:e?,recalculateRowHeight:K,rowColumnIndex:aB?})>"),Z:x("av<~({rowColumnIndex:aB?})>"),T:x("e"),z:x("@"),H:x("~")}})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_671",e:"endPart",h:b})})($__dart_deferred_initializers__,"GUph734pQWiV6kLECpWbs8nrNwM=");
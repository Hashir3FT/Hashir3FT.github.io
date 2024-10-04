((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_788",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,M,N,D,E,O,P,Q,G,R,H,S,T,U,B={
f3q(){return new B.Ca(null)},
f1v(d,e){var x=y.K
x=new B.ahD(e,d,A.b([],x),A.b([],x),A.b([],x),A.b([],x),A.a6(y.T,y.S),A.b([],y.R),0,null,new A.av(A.b([],y.f),y.Z),new A.av(A.b([],y.E),y.I),$.ap())
x.bhy(d,e)
return x},
Ca:function Ca(d){this.a=d},
aGo:function aGo(){var _=this
_.d=$
_.c=_.a=_.e=null},
d0_:function d0_(d){this.a=d},
d01:function d01(d){this.a=d},
d00:function d00(d,e){this.a=d
this.b=e},
d02:function d02(d){this.a=d},
ahD:function ahD(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fF$=l
_.fz$=m
_.a=n
_.b=o
_.B$=0
_.A$=p
_.V$=_.T$=0},
aZE:function aZE(){},
aZD:function aZD(d,e,f){this.a=d
this.b=e
this.c=f},
aZz:function aZz(){},
aZA:function aZA(d,e,f){this.a=d
this.b=e
this.c=f},
aZy:function aZy(d){this.a=d},
aZB:function aZB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZx:function aZx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZw:function aZw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aZt:function aZt(d){this.a=d},
aZu:function aZu(d){this.a=d},
aZv:function aZv(d){this.a=d},
aZC:function aZC(){},
eCN(d){var x="EntryDate",w="AttendaceDateTime",v=J.aI(d),u=A.fu(v.i(d,"AttendanceID")),t=A.fu(v.i(d,"EmployeeID")),s=v.i(d,x)!=null?G.e6(A.eF(v.i(d,x))):null,r=v.i(d,w)!=null?G.e6(A.eF(v.i(d,w))):null,q=A.ee(v.i(d,"Remarks")),p=A.fu(v.i(d,"UserID")),o=A.ee(v.i(d,"EmployeeName")),n=A.jI(v.i(d,"IsManual")),m=A.ee(v.i(d,"ShiftTitle")),l=A.ee(v.i(d,"DepartmentTitle")),k=A.ee(v.i(d,"DesignationTitle")),j=A.ee(v.i(d,"InTime")),i=A.ee(v.i(d,"OutTime")),h=A.ee(v.i(d,"IsIn"))
A.ee(v.i(d,"AttTime"))
return new V.p0(u,t,s,r,q,p,o,n,m,l,k,j,i,h)},
aWd(d,e){return B.eWJ(d,e)},
eWJ(d,e){var x=0,w=A.i(y.Q),v,u=2,t,s,r,q,p,o,n,m,l,k
var $async$aWd=A.j(function(f,g){if(f===1){t=g
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/GetAttendances?filterDate="+e+"&employeeNameFilter="+d,0,null)
x=7
return A.c(H.cL(s,null),$async$aWd)
case 7:r=g
if(r.b===200){m=r
q=C.k.C(0,A.aQ(J.A(A.aP(m.e).c.a,"charset")).aa(0,m.w),null)
p=A.b([],y.F)
for(m=J.b_(J.A(q,"data"));m.N();){o=m.ga3(m)
J.cd(p,B.eCN(o))}v=new A.x(p,1,null,null,y.Q)
x=1
break}else{m=r
m=A.W(C.k.C(0,A.aQ(J.A(A.aP(m.e).c.a,"charset")).aa(0,m.w),null),y.z)
v=new A.x(null,0,m.d,null,y.Q)
x=1
break}u=2
x=6
break
case 4:u=3
k=t
n=A.V(k)
m=J.v(n)
v=new A.x(null,0,m,null,y.Q)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$aWd,w)},
afJ(d){return B.eWK(d)},
eWK(d){var x=0,w=A.i(y.N),v,u=2,t,s,r,q,p,o,n,m
var $async$afJ=A.j(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/GetAttendanceById?attendanceId="+d,0,null)
x=7
return A.c(H.cL(s,null),$async$afJ)
case 7:r=f
if(r.b===200){o=r
q=C.k.C(0,A.aQ(J.A(A.aP(o.e).c.a,"charset")).aa(0,o.w),null)
o=B.eCN(J.A(q,"data"))
v=new A.x(o,1,null,null,y.N)
x=1
break}else{o=r
o=A.W(C.k.C(0,A.aQ(J.A(A.aP(o.e).c.a,"charset")).aa(0,o.w),null),y.D)
v=o
x=1
break}u=2
x=6
break
case 4:u=3
m=t
p=A.V(m)
o=J.v(p)
v=new A.x(null,0,o,null,y.N)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$afJ,w)},
aVX(d,e,f){return B.eVh(d,e,f)},
eVh(d,e,f){var x=0,w=A.i(y.X),v,u=2,t,s,r,q,p,o,n,m,l
var $async$aVX=A.j(function(g,h){if(g===1){t=h
x=u}while(true)switch(x){case 0:u=4
s=A.ad($.ah+"/Payroll/DeleteAttandence?attendanceId="+d+"&userId="+e+"&employeeId="+A.p(f),0,null)
x=7
return A.c(U.pY(s),$async$aVX)
case 7:r=h
o=y.z
if(r.b===200){n=r
q=C.k.C(0,A.aQ(J.A(A.aP(n.e).c.a,"charset")).aa(0,n.w),null)
o=A.W(q,o)
v=o
x=1
break}else{n=r
o=A.W(C.k.C(0,A.aQ(J.A(A.aP(n.e).c.a,"charset")).aa(0,n.w),null),o)
v=o
x=1
break}u=2
x=6
break
case 4:u=3
l=t
p=A.V(l)
o=J.v(p)
v=new A.x(null,0,o,null,y.X)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.f(v,w)
case 2:return A.e(t,w)}})
return A.h($async$aVX,w)}},F,V,W,X
J=c[1]
A=c[0]
C=c[2]
I=c[429]
K=c[431]
L=c[368]
M=c[344]
N=c[378]
D=c[354]
E=c[426]
O=c[515]
P=c[351]
Q=c[350]
G=c[372]
R=c[375]
H=c[356]
S=c[447]
T=c[377]
U=c[319]
B=a.updateHolder(c[151],B)
F=c[556]
V=c[234]
W=c[557]
X=c[555]
B.Ca.prototype={
W(){return new B.aGo()}}
B.aGo.prototype={
f6(){return new T.D(new B.d0_(this),C.aE,"Add",null,null)},
UA(){var x=0,w=A.i(y.e),v,u=this,t,s,r,q
var $async$UA=A.j(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:s=y.F
r=A.b([],s)
q=u.e
x=q!=null?3:4
break
case 3:x=5
return A.c(B.aWd("",A.aH("MM/dd/yyyy",null).a7(q)),$async$UA)
case 5:t=e
if(t.c!==0){r=t.a
if(r==null)r=A.b([],s)}case 4:v=r
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$UA,w)},
a5(){this.ac()
this.e=new A.a2(Date.now(),0,!1)},
J(d){var x=this,w=null,v=y.p
return A.bh(w,new A.as(C.aO,A.K(A.b([C.u,F.aGp,C.u,new A.bp(A.K(A.b([A.m(A.b([new A.l(1,C.e,x.f6(),w),C.w,new A.l(3,C.e,new A.X(250,w,L.a1(x.e,w,w,w,"Filter",w,new B.d01(x)),w),w),C.t],v),C.c,w,C.d,C.b,w),C.i],v),C.Z,w,C.d,C.b,C.m),w,A.K(A.b([A.m(A.b([x.f6(),C.u],v),C.c,w,C.J,C.b,w)],v),C.c,w,C.d,C.b,C.m),w),C.ar,A.ei(new B.d02(x),x.UA(),y.e)],v),C.c,w,C.d,C.b,C.m),w),w,w,w,w)}}
B.ahD.prototype={
bhy(d,e){var x=J.cw(this.go,new B.aZE(),y.n)
this.id=A.a4(x,!0,x.$ti.k("aA.E"))},
gdq(d){return this.id},
fv(d){var x=d.a,w=A.aq(x).k("ak<1,r>")
return new D.dW(null,A.a4(new A.ak(x,new B.aZD(this,d,new P.eO(this.fy)),w),!0,w.k("aA.E")))}}
var z=a.updateTypes(["au(p0)","c1(M<@>)","L(M<@>)"])
B.d0_.prototype={
$0(){var x=this.a.c
x.toString
A.ai(x,"add_attendance",null)},
$S:0}
B.d01.prototype={
$1(d){var x=this.a
x.j(new B.d00(x,d))},
$S:2}
B.d00.prototype={
$0(){this.a.e=this.b},
$S:0}
B.d02.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o=null
if(e.a===C.aR)return A.bS(A.d2("assets/animations/loading.json",o,o),o,o)
else{x=e.c
if(x!=null)return A.k("Error: "+A.p(x),o,o,o,o,o,o,o,o)}x=e.b
x.toString
x=B.f1v(x,d)
this.a.d=x
w=D.aG(!0,!0,!0,"id",E.ag,A.U(C.z,I.cA,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
v=y.w
u=A.F(d,o,v).w.a.a<600?E.a6:E.as
u=D.aG(!0,!0,!0,"date",u,A.U(C.z,S.hw,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
t=A.F(d,o,v).w.a.a<600?E.a6:E.as
t=D.aG(!0,!0,!0,"employee",t,A.U(C.z,W.zF,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
s=A.F(d,o,v).w.a.a<600?E.a6:E.as
s=D.aG(!0,!0,!0,"designation",s,A.U(C.z,F.aT4,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
r=A.F(d,o,v).w.a.a<600?E.a6:E.as
r=D.aG(!0,!0,!0,"department",r,A.U(C.z,X.nC,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
q=A.F(d,o,v).w.a.a<600?E.a6:E.as
q=D.aG(!0,!0,!0,"shift",q,A.U(C.z,F.aSZ,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
p=A.F(d,o,v).w.a.a<600?E.a6:E.as
p=D.aG(!0,!0,!0,"isin",p,A.U(C.z,F.aTP,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0)
v=A.F(d,o,v).w.a.a<600?E.a6:E.as
return A.aj(M.hm(o,o,A.b([w,u,t,s,r,q,p,D.aG(!0,!0,!0,"manual",v,A.U(C.z,F.aT5,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,0/0),D.aG(!0,!1,!1,"actions",E.ao,A.U(C.z,K.bW,C.r,o,o,o,o,o,o,o,C.P,o,o,o),!0,155)],y.t),E.bq,o,E.bX,!1,x),1)},
$S:1114}
B.aZE.prototype={
$1(d){var x,w,v=d.d
v.toString
x=A.aH("MM/dd/yyyy",null).a7(v)
v=y.c
w=y.v
return new D.au(A.b([new D.M("id",d.a,y.d),new D.M("date",x,v),new D.M("employee",d.r,v),new D.M("designation",d.z,v),new D.M("department",d.y,v),new D.M("shift",d.x,v),new D.M("isin",d.at==="true",w),new D.M("manual",d.w===!0,w),O.bp],y.O))},
$S:z+0}
B.aZD.prototype={
$1(d){var x,w,v,u=null,t=d.a
if(t==="actions"){t=this.b
x=C.f.bM(t.a,new B.aZz()).b
w=this.a
v=this.c
return A.U(C.z,new Q.eM(new B.aZA(w,v,x),new B.aZB(w,v,x,t),u,u,w.fy,u),C.r,u,u,u,u,u,u,u,C.P,u,u,u)}else{t=t==="isin"||t==="manual"
w=d.b
if(t)return A.U(C.z,R.aa(u,!1,u,u,u,u,!1,u,u,new B.aZC(),u,u,u,u,u,!1,A.hi(w)),C.r,u,u,u,u,u,u,u,C.P,u,u,u)
else return A.U(C.z,A.k(J.v(w),u,C.o,u,u,u,u,u,u),C.r,u,u,u,u,u,u,u,C.P,u,u,u)}},
$S:z+1}
B.aZz.prototype={
$1(d){return d.a==="id"},
$S:z+2}
B.aZA.prototype={
$0(){var x=0,w=A.i(y.H),v,u=this,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:r=u.b
r.cz(0)
x=3
return A.c(B.afJ(u.c),$async$$0)
case 3:t=e
s=t.a
s.toString
A.T(r.a,!0).a9("dialog")
if(t.c!==0){r=u.a.fy
if(r.e==null){x=1
break}A.ai(r,"add_attendance",s)}else{r=u.a.fy
if(r.e==null){x=1
break}A.O(null,null,!0,null,new B.aZy(t),r,null,!0,y.z)}case 1:return A.f(v,w)}})
return A.h($async$$0,w)},
$S:5}
B.aZy.prototype={
$1(d){var x=this.a.d
x.toString
return A.R(x,null,null,null,"Oops",C.B)},
$S:1}
B.aZB.prototype={
$0(){var x=0,w=A.i(y.H),v=this,u
var $async$$0=A.j(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:u=v.a
A.O(null,null,!0,null,new B.aZx(u,v.b,v.c,v.d),u.fy,null,!0,y.z)
return A.f(null,w)}})
return A.h($async$$0,w)},
$S:5}
B.aZx.prototype={
$1(d){var x=this
return A.R("Do you really want to delete this employee?",null,new B.aZw(x.a,d,x.b,x.c,x.d),null,"Are you sure?",C.aX)},
$S:1}
B.aZw.prototype={
$0(){var x=0,w=A.i(y.P),v,u=this,t,s,r,q,p,o
var $async$$0=A.j(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:o=u.b
A.T(o,!1).bl()
t=u.c
t.cz(0)
s=u.d
x=3
return A.c(B.afJ(s),$async$$0)
case 3:r=e
t=t.a
x=r.c!==0?4:6
break
case 4:q=$.cx().a
q.toString
x=7
return A.c(B.aVX(s,q,r.a.b),$async$$0)
case 7:p=e
A.T(t,!0).a9("dialog")
if(p.c!==0){if(o.e==null){x=1
break}A.O(null,null,!0,null,new B.aZt(p),o,null,!0,y.z)
o=u.a
C.f.S(o.id,u.e)
o.fH()}else{if(o.e==null){x=1
break}A.O(null,null,!0,null,new B.aZu(p),o,null,!0,y.z)}x=5
break
case 6:A.T(t,!0).a9("dialog")
if(o.e==null){x=1
break}A.O(null,null,!0,null,new B.aZv(r),o,null,!0,y.z)
case 5:case 1:return A.f(v,w)}})
return A.h($async$$0,w)},
$S:16}
B.aZt.prototype={
$1(d){var x=this.a.e
x.toString
return A.R(x,null,null,null,"Hurray",C.a5)},
$S:1}
B.aZu.prototype={
$1(d){var x=this.a.d
x.toString
return A.R(x,null,null,null,"Oops",C.B)},
$S:1}
B.aZv.prototype={
$1(d){var x=this.a.d
x.toString
return A.R(x,null,null,null,"Oops",C.B)},
$S:1}
B.aZC.prototype={
$1(d){},
$S:3};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ca,A.G)
x(B.aGo,A.Q)
w(A.b8,[B.d0_,B.d00,B.aZA,B.aZB,B.aZw])
w(A.b0,[B.d01,B.aZE,B.aZD,B.aZz,B.aZy,B.aZx,B.aZt,B.aZu,B.aZv,B.aZC])
x(B.d02,A.bk)
x(B.ahD,D.dQ)})()
A.b6(b.typeUniverse,JSON.parse('{"Ca":{"G":[],"r":[]},"aGo":{"Q":["Ca"]},"ahD":{"bw":[],"aS":[]}}'))
var y=(function rtii(){var x=A.I
return{N:x("x<p0>"),Q:x("x<q<p0>>"),X:x("x<@>"),D:x("p0"),c:x("M<d>"),v:x("M<L>"),d:x("M<P>"),n:x("au"),F:x("n<p0>"),O:x("n<M<@>>"),K:x("n<au>"),t:x("n<dE>"),R:x("n<dJ>"),p:x("n<r>"),E:x("n<~({propertyName:d?,recalculateRowHeight:L,rowColumnIndex:aB?})>"),f:x("n<~({rowColumnIndex:aB?})>"),e:x("q<p0>"),S:x("q<du>"),w:x("ba"),P:x("H"),I:x("av<~({propertyName:d?,recalculateRowHeight:L,rowColumnIndex:aB?})>"),Z:x("av<~({rowColumnIndex:aB?})>"),T:x("d"),z:x("@"),H:x("~")}})();(function constants(){F.aGp=new N.bj("Daily Attendance",null,"payroll",null)
F.aSZ=new A.B("Shift",null,null,null,null,null,null,null,null,null,null)
F.aT4=new A.B("Designation",null,null,null,null,null,null,null,null,null,null)
F.aT5=new A.B("Manual",null,null,null,null,null,null,null,null,null,null)
F.aTP=new A.B("Is In",null,null,null,null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_788",e:"endPart",h:b})})($__dart_deferred_initializers__,"Xygi7G6SpzMsY985JsNMhbEXWHg=");
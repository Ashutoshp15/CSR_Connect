"use strict";(self.webpackChunkCSR_Connect=self.webpackChunkCSR_Connect||[]).push([[644],{644:(q,m,a)=>{a.r(m),a.d(m,{DashboardModule:()=>S});var r=a(8692),g=a(9900),h=a(3851),b=a(5138),t=a(7241),f=a(1491),d=a(5732);function v(s,o){if(1&s&&(t.TgZ(0,"tr")(1,"td")(2,"div",8),t._UZ(3,"img",9),t.TgZ(4,"div",10)(5,"h5",11),t._uU(6),t.qZA(),t.TgZ(7,"span"),t._uU(8),t.qZA()()()(),t.TgZ(9,"td",12),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._UZ(12,"span"),t.qZA(),t.TgZ(13,"td")(14,"h5",13),t._uU(15),t.qZA()()()),2&s){const e=o.$implicit;t.xp6(3),t.Q6J("src",e.image,t.LSH),t.xp6(3),t.Oqu(e.uname),t.xp6(2),t.Oqu(e.gmail),t.xp6(2),t.Oqu(e.productName),t.xp6(2),t.Gre("p-2 bg-",e.status," rounded-circle d-inline-block ms-3"),t.xp6(3),t.Oqu(e.budget)}}let C=(()=>{class s{constructor(e){this.http=e,this.tmpa=0,this.tmp1="",this.feeds=[],this.businessData=[],this.display=[{image:"assets/images/users/user1.jpg",uname:"",gmail:"+1-650-786-9132",productName:"We embrace our responsibility to create a positive impact in the communities in which we work and live",status:"success",weeks:0,budget:0},{image:"assets/images/users/user2.jpg",uname:"",gmail:" (650) 316 3549",productName:" it is our conviction that the engagement with social issues must be deep, meaningful and formed on the bedrock of long term commitment",status:"success",weeks:0,budget:0},{image:"assets/images/users/user3.jpg",uname:"Infosys",gmail:"+1-650-494-6262",productName:"Commited to accelerating sustainable and inclusive growth, we have committed $2 billion to social responsibility efforts by 2030",status:"success",weeks:5400,budget:54e3},{image:"assets/images/users/user4.jpg",uname:"Barclays",gmail:"+1-650-845-3600",productName:"Our mission is to drive transformative social impact by applying  talent in partnership with the most innovative and effective organizations, addressing some of the worlds most pressing issues",status:"info",weeks:3800,budget:38e3}]}ngOnInit(){var i=JSON.parse(localStorage.getItem("usersession")||"{}").name;let p=new d.WM({"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"*","Access-Control-Allow-Headers":"Content-Type, Accept,Origin, X-Requested-With","access-control-allow-credentials":" true"});this.http.get("/api/charity/donationFromBusiness/"+i+"/top",{headers:p}).subscribe(l=>{var c=JSON.stringify(l);this.feeds=JSON.parse(c);for(var n=0;n<this.feeds.length;n++)this.tmpa=this.feeds[n].amount,this.tmp1=this.feeds[n].business,this.display[n].uname=this.tmp1,this.display[n].budget=this.tmpa}),this.http.get("/api/business/all",{headers:p}).subscribe(l=>{var c=JSON.stringify(l);this.businessData=JSON.parse(c);for(var n=0;n<this.businessData.length;n++)for(var u=0;u<this.feeds.length;u++)this.feeds[u].business==this.businessData[n].businessName&&(this.feeds[u].weeks=15*this.businessData[n].id)})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(d.eN))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-top-selling"]],decls:19,vars:1,consts:[[1,"card"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle"],[1,"table-responsive"],[1,"table","align-middle"],[1,"text-dark","font-medium","fs-4"],[4,"ngFor","ngForOf"],[1,"d-flex","align-items-center"],["alt","user","width","45",1,"rounded-circle",3,"src"],[1,"ms-3"],[1,"mb-0","font-medium"],[1,"fs-4"],[1,"mb-0","fw-normal"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Top Contributors Overview"),t.qZA(),t._UZ(4,"h5",3),t.TgZ(5,"div",4)(6,"table",5)(7,"thead")(8,"tr")(9,"th",6),t._uU(10,"Company Info"),t.qZA(),t.TgZ(11,"th",6),t._uU(12,"Agenda"),t.qZA(),t.TgZ(13,"th",6),t._uU(14,"Status"),t.qZA(),t.TgZ(15,"th",6),t._uU(16,"Total Donations"),t.qZA()()(),t.TgZ(17,"tbody"),t.YNc(18,v,16,8,"tr",7),t.qZA()()()()()),2&e&&(t.xp6(18),t.Q6J("ngForOf",i.display))},dependencies:[r.sg],encapsulation:2}),s})();function T(s,o){if(1&s&&(t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div"),t._UZ(5,"i"),t.qZA(),t.TgZ(6,"div",6)(7,"h3",7),t._uU(8),t.qZA(),t.TgZ(9,"small",8),t._uU(10),t.qZA()()()()()()),2&s){const e=o.$implicit;t.xp6(4),t.MT6("btn btn-lg rounded-circle round round-lg fs-6 d-flex align-items-center justify-content-center bg-light-",e.bgcolor," text-",e.bgcolor,""),t.xp6(1),t.Tol(e.icon),t.xp6(3),t.Oqu(e.title),t.xp6(2),t.Oqu(e.subtitle)}}let Z=(()=>{class s{constructor(e){this.http=e,this.data=[{bgcolor:"success",icon:"bi bi-wallet",title:0,subtitle:"Total Donations Recieved"},{bgcolor:"danger",icon:"bi bi-coin",title:5,subtitle:"Total Projects Supported"}],this.totalDonation=0}ngOnInit(){var i=JSON.parse(localStorage.getItem("usersession")||"{}").name;let p=new d.WM({"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"*","Access-Control-Allow-Headers":"Content-Type, Accept,Origin, X-Requested-With","access-control-allow-credentials":" true"});this.http.get("/api/charity/totalDonation/"+i,{headers:p}).subscribe(l=>{var c=JSON.stringify(l);this.totalDonation=JSON.parse(c),this.data[0].title=this.totalDonation})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(d.eN))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-top-cards"]],decls:2,vars:1,consts:[[1,"row"],["class","col-md-12 col-lg-6",4,"ngFor","ngForOf"],[1,"col-md-12","col-lg-6"],[1,"card"],[1,"card-body"],[1,"d-flex","align-items-center"],[1,"ms-3"],[1,"mb-0","font-weight-bold"],[1,"card-subtitle","fs-3"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,T,11,9,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",i.data))},dependencies:[r.sg],encapsulation:2}),s})();const y=[{title:"MLK DAY",subtitle:"400 Contributions",subtext:"Campaign Promoting Equal Rights to all irrespective of Race,Color,Ethnicity.",image:"assets/images/bg/mlk.jpg"},{title:"Pakistan Floods 2022",subtitle:" 1077 Contributions",subtext:"Undergoing Campaign to support victims affected by Pakistan Flood 2022.",image:"assets/images/bg/flood.webp"},{title:"Season Of Giving",subtitle:"3696 Contributions",subtext:"For provide food,shelther this holiday sesion to Homeless people in our Neighborhood.",image:"assets/images/bg/thanks.jpeg"},{title:"Hispanic Heritage Month",subtitle:"687 Contributions",subtext:"To celebrate the various contributions of Hispanic and Latino Community.",image:"assets/images/bg/hispanic.jpg"}];function A(s,o){if(1&s&&(t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"img",5),t.TgZ(3,"div",6)(4,"h4",7),t._uU(5),t.qZA(),t.TgZ(6,"h6",8),t._uU(7),t.qZA(),t.TgZ(8,"p",9),t._uU(9),t.qZA()()()()),2&s){const e=o.$implicit;t.xp6(2),t.Q6J("src",e.image,t.LSH),t.xp6(3),t.Oqu(e.title),t.xp6(2),t.Oqu(e.subtitle),t.xp6(2),t.Oqu(e.subtext)}}function w(s,o){if(1&s&&(t.TgZ(0,"div",1),t.YNc(1,A,10,4,"div",2),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.blogcards)}}let O=(()=>{class s{constructor(){this.flag=!1,this.blogcards=y}ngOnInit(){var i=JSON.parse(localStorage.getItem("usersession")||"{}").name;("Smile Foundation"==i||"smile foundation"==i)&&(this.flag=!0)}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-blog-cards"]],decls:1,vars:1,consts:[["class","row",4,"ngIf"],[1,"row"],["class","col-md-6 col-lg-3",4,"ngFor","ngForOf"],[1,"col-md-6","col-lg-3"],[1,"card"],["alt","blogs",1,"card-img-top",2,"height","150px",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle"],[1,"mt-3"]],template:function(e,i){1&e&&t.YNc(0,w,2,1,"div",0),2&e&&t.Q6J("ngIf",i.flag)},dependencies:[r.sg,r.O5],encapsulation:2}),s})();const x=[{path:"",data:{title:"Dashboard",urls:[{title:"Dashboard",url:"/dashboard"},{title:"Dashboard"}]},component:(()=>{class s{constructor(e){this.apiservice=e,this.subtitle="This is some text within a card block."}ngAfterViewInit(){}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(f.s))},s.\u0275cmp=t.Xpm({type:s,selectors:[["ng-component"]],decls:5,vars:0,consts:[[1,"row"],[1,"col","md-12","lg-6"]],template:function(e,i){1&e&&(t._UZ(0,"app-top-cards"),t.TgZ(1,"div",0)(2,"div",1),t._UZ(3,"app-top-selling"),t.qZA(),t._UZ(4,"app-blog-cards"),t.qZA())},dependencies:[C,Z,O],encapsulation:2}),s})()}];let S=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[g.u5,g.UX,r.ez,h.Bz.forChild(x),b.X]}),s})()}}]);
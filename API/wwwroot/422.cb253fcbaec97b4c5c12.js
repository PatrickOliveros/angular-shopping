(self.webpackChunkclient=self.webpackChunkclient||[]).push([[422],{3422:(e,t,o)=>{"use strict";o.r(t),o.d(t,{AccountModule:()=>P});var r=o(1116),n=o(5425),i=o(8709),l=o(1462),s=o(7368),a=o(2369),p=o(3722);function u(e,t){1&e&&(s.TgZ(0,"span",15),s._uU(1,"E-mail is required!"),s.qZA())}function g(e,t){1&e&&(s.TgZ(0,"span",15),s._uU(1,"E-mail is invalid!"),s.qZA())}function c(e,t){1&e&&(s.TgZ(0,"span",15),s._uU(1,"Password is required!"),s.qZA())}let m=(()=>{class e{constructor(e,t,o){this.accountService=e,this.router=t,this.activatedRoute=o}ngOnInit(){this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop",this.createLoginForm()}createLoginForm(){this.loginForm=new l.cw({email:new l.NI("",[l.kI.required,l.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),password:new l.NI("",l.kI.required)})}onSubmit(){this.accountService.login(this.loginForm.value).subscribe(e=>{this.router.navigateByUrl(this.returnUrl)},e=>{console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(a.B),s.Y36(i.F0),s.Y36(i.gz))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-login"]],decls:39,vars:18,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],[1,"form-label-group",2,"display","none"],["formControlName","email","type","email","id","inputEmail","placeholder","Email address","autofocus","",1,"form-control"],["for","inputEmail"],["class","text-danger",4,"ngIf"],["formControlName","password","type","password","id","inputPassword","placeholder","Password",1,"form-control"],["for","inputPassword"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"disabled"],[1,"col-4"],[1,"text-danger"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"form",2),s.NdJ("ngSubmit",function(){return t.onSubmit()}),s.TgZ(3,"div",3),s.TgZ(4,"h1",4),s._uU(5,"Login"),s.qZA(),s.qZA(),s.TgZ(6,"div",5),s._UZ(7,"input",6),s.TgZ(8,"label",7),s._uU(9,"Email address"),s.qZA(),s.YNc(10,u,2,0,"span",8),s.YNc(11,g,2,0,"span",8),s.qZA(),s.TgZ(12,"div",5),s._UZ(13,"input",9),s.TgZ(14,"label",10),s._uU(15,"Password"),s.qZA(),s.YNc(16,c,2,0,"span",8),s.qZA(),s._UZ(17,"app-text-input",11),s._UZ(18,"app-text-input",12),s.TgZ(19,"button",13),s._uU(20," Sign in "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(21,"div",14),s.TgZ(22,"p"),s._uU(23),s.qZA(),s.TgZ(24,"p"),s._uU(25),s.qZA(),s.TgZ(26,"p"),s._uU(27),s.qZA(),s.TgZ(28,"p"),s._uU(29),s.qZA(),s.TgZ(30,"p"),s._uU(31),s.qZA(),s.TgZ(32,"p"),s._uU(33),s.qZA(),s.TgZ(34,"p"),s._uU(35),s.qZA(),s.TgZ(36,"pre"),s._uU(37),s.ALo(38,"json"),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(2),s.Q6J("formGroup",t.loginForm),s.xp6(8),s.Q6J("ngIf",t.loginForm.get("email").touched&&t.loginForm.get("email").invalid&&t.loginForm.get("email").errors.required),s.xp6(1),s.Q6J("ngIf",t.loginForm.get("email").touched&&t.loginForm.get("email").invalid&&t.loginForm.get("email").errors.pattern),s.xp6(5),s.Q6J("ngIf",t.loginForm.get("password").touched&&t.loginForm.get("password").invalid&&t.loginForm.get("password").errors.required),s.xp6(1),s.Q6J("label","Email Address"),s.xp6(1),s.Q6J("label","Password")("type","password"),s.xp6(1),s.Q6J("disabled",t.loginForm.invalid),s.xp6(4),s.hij("Form Status: ",t.loginForm.status,""),s.xp6(2),s.hij("Email Status: ",t.loginForm.get("email").status,""),s.xp6(2),s.hij("Email Touched: ",t.loginForm.get("email").touched,""),s.xp6(2),s.hij("Email Dirty: ",t.loginForm.get("email").dirty,""),s.xp6(2),s.hij("Password Status: ",t.loginForm.get("password").status,""),s.xp6(2),s.hij("Password Touched: ",t.loginForm.get("password").touched,""),s.xp6(2),s.hij("Password Dirty: ",t.loginForm.get("password").dirty,""),s.xp6(2),s.Oqu(s.lcZ(38,16,t.loginForm.value)))},directives:[l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,r.O5,p.t],pipes:[r.Ts],styles:[".form-label-group[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{height:3.125rem;padding:.75rem}.form-label-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:block;width:100%;margin-bottom:0;line-height:1.5;color:#495057;pointer-events:none;cursor:text;border:1px solid transparent;border-radius:.25rem;transition:all .1s ease-in-out}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown){padding-top:1.25rem;padding-bottom:.25rem}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ label[_ngcontent-%COMP%]{padding-top:.25rem;padding-bottom:.25rem;font-size:12px;color:#777}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill ~ label[_ngcontent-%COMP%]{padding-top:.25rem;padding-bottom:.25rem;font-size:12px;color:#777}@supports (-ms-ime-align:auto){.form-label-group[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse}.form-label-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:static}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#777}}"]}),e})();var d=o(8318),b=o(8569),f=o(8470);function h(e){return!(0,f.k)(e)&&e-parseFloat(e)+1>=0}var Z=o(6163);function w(e){const{index:t,period:o,subscriber:r}=e;if(r.next(t),!r.closed){if(-1===o)return r.complete();e.index=t+1,this.schedule(e,o)}}var x=o(878),_=o(4689),q=o(9996);function v(e,t){if(1&e&&(s.TgZ(0,"li"),s._uU(1),s.qZA()),2&e){const e=t.$implicit;s.xp6(1),s.Oqu(e)}}function F(e,t){if(1&e&&(s.TgZ(0,"ul",10),s.YNc(1,v,2,1,"li",11),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.Q6J("ngForOf",e.errors)}}const A=[{path:"login",component:m},{path:"register",component:(()=>{class e{constructor(e,t,o){this.fb=e,this.accountService=t,this.router=o}ngOnInit(){this.createRegisterForm()}createRegisterForm(){this.registerForm=this.fb.group({displayName:[null,[l.kI.required]],email:[null,[l.kI.required,l.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")],[this.validateEmailNotTaken()]],password:[null,[l.kI.required]]})}onSubmit(){console.log(this.registerForm.value),this.accountService.register(this.registerForm.value).subscribe(e=>{this.router.navigateByUrl("/shop")},e=>{console.log(e),this.errors=e.errors})}validateEmailNotTaken(){return e=>function(e=0,t,o){let r=-1;return h(t)?r=Number(t)<1?1:Number(t):(0,Z.K)(t)&&(o=t),(0,Z.K)(o)||(o=b.P),new d.y(t=>{const n=h(e)?e:+e-o.now();return o.schedule(w,n,{index:0,period:r,subscriber:t})})}(500).pipe((0,_.w)(()=>e.value?this.accountService.checkEmailExists(e.value).pipe((0,q.U)(e=>e?{emailExists:!0}:null)):(0,x.of)(null)))}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(l.qu),s.Y36(a.B),s.Y36(i.F0))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-register"]],decls:12,vars:7,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","displayName",3,"label"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["class","text-danger",4,"ngIf"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"disabled"],[1,"text-danger"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"form",2),s.NdJ("ngSubmit",function(){return t.onSubmit()}),s.TgZ(3,"div",3),s.TgZ(4,"h1",4),s._uU(5,"Register"),s.qZA(),s.qZA(),s._UZ(6,"app-text-input",5),s._UZ(7,"app-text-input",6),s._UZ(8,"app-text-input",7),s.YNc(9,F,2,1,"ul",8),s.TgZ(10,"button",9),s._uU(11," Register "),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(2),s.Q6J("formGroup",t.registerForm),s.xp6(4),s.Q6J("label","Display Name"),s.xp6(1),s.Q6J("label","Email Address"),s.xp6(1),s.Q6J("label","Password")("type","password"),s.xp6(1),s.Q6J("ngIf",t.errors),s.xp6(1),s.Q6J("disabled",t.registerForm.invalid))},directives:[l._Y,l.JL,l.sg,p.t,l.JJ,l.u,r.O5,r.sg],styles:[""]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[i.Bz.forChild(A)],i.Bz]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[r.ez,T,n.m]]}),e})()}}]);
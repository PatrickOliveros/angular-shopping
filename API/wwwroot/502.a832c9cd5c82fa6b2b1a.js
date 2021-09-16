(self.webpackChunkclient=self.webpackChunkclient||[]).push([[502],{2502:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CheckoutModule:()=>P});var o=r(1116),n=r(5425),i=r(8709),c=r(7368);function s(e,t){if(1&e&&(c.TgZ(0,"button",5),c._uU(1,"View your order"),c.qZA()),2&e){const e=c.oxw();c.MGl("routerLink","/orders/",null==e.order?null:e.order.id,"")}}function a(e,t){1&e&&(c.TgZ(0,"button",6),c._uU(1,"View your orders"),c.qZA())}let l=(()=>{class e{constructor(e){this.router=e;const t=this.router.getCurrentNavigation(),r=t&&t.extras&&t.extras.state;r&&(this.order=r)}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(i.F0))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-checkout-success"]],decls:9,vars:2,consts:[[1,"container","mt-5"],[1,"fa","fa-check-circle","fa-5x",2,"color","green"],[1,"mb-4"],["class","btn btn-outline-success",3,"routerLink",4,"ngIf"],["routerLink","/orders","class","btn btn-outline-success",4,"ngIf"],[1,"btn","btn-outline-success",3,"routerLink"],["routerLink","/orders",1,"btn","btn-outline-success"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"div"),c._UZ(2,"i",1),c.qZA(),c.TgZ(3,"h2"),c._uU(4,"Thank you. Your order is confirmed"),c.qZA(),c.TgZ(5,"p",2),c._uU(6,"Your order has not shipped yet, but this is to be expected as we are not a real store"),c.qZA(),c.YNc(7,s,2,1,"button",3),c.YNc(8,a,2,0,"button",4),c.qZA()),2&e&&(c.xp6(7),c.Q6J("ngIf",t.order),c.xp6(1),c.Q6J("ngIf",!t.order))},directives:[o.O5,i.rH],styles:[""]}),e})();var d=r(1462),u=r(2369),p=r(5919),m=r(1993);function h(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"li",4),c.TgZ(1,"button",5),c.NdJ("click",function(){const t=c.CHM(e).index;return c.oxw().onClick(t)}),c._uU(2),c.qZA(),c.qZA()}if(2&e){const e=t.$implicit,r=t.index,o=c.oxw();c.xp6(1),c.ekj("active",o.selectedIndex===r),c.Q6J("disabled",!0),c.xp6(1),c.AsE(" ",e.label,":",e.completed," ")}}let g=(()=>{class e extends m.B8{ngOnInit(){this.linear=this.linearModeSelected}onClick(e){this.selectedIndex=e}}return e.\u0275fac=function(){let t;return function(r){return(t||(t=c.n5z(e)))(r||e)}}(),e.\u0275cmp=c.Xpm({type:e,selectors:[["app-stepper"]],inputs:{linearModeSelected:"linearModeSelected"},features:[c._Bn([{provide:m.B8,useExisting:e}]),c.qOj],decls:5,vars:2,consts:[[1,"container"],[1,"nav","nav-pills","nav-justified"],["class","nav-item",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],[1,"nav-item"],[1,"nav-link","text-uppercase","font-weight-bold","btn-block","py-3",3,"disabled","click"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"ul",1),c.YNc(2,h,3,5,"li",2),c.qZA(),c.TgZ(3,"div"),c.GkF(4,3),c.qZA(),c.qZA()),2&e&&(c.xp6(2),c.Q6J("ngForOf",t.steps),c.xp6(2),c.Q6J("ngTemplateOutlet",t.selected.content))},directives:[o.sg,o.tP],styles:["button.nav-link[_ngcontent-%COMP%]{background:#e9ecef;border-radius:0;border:none}button.nav-link[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{outline:none}button.nav-link.active[_ngcontent-%COMP%]:hover{color:#fff}button.nav-link.active[_ngcontent-%COMP%]:focus, button.nav-link[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active{outline:none}button.nav-link[_ngcontent-%COMP%]:disabled:not(.active){color:#333}"]}),e})();var v=r(3492),f=r(3722);let b=(()=>{class e{constructor(e,t){this.accountService=e,this.toastr=t}ngOnInit(){}saveUserAddress(){this.accountService.updateUserAddress(this.checkoutForm.get("addressForm").value).subscribe(e=>{this.toastr.success("Address saved"),this.checkoutForm.get("addressForm").reset(e)},e=>{this.toastr.error(e.message),console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(u.B),c.Y36(v._W))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-checkout-address"]],inputs:{checkoutForm:"checkoutForm"},decls:26,vars:9,consts:[[1,"mt-4",3,"formGroup"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-outline-success","mb-3",3,"disabled","click"],["formGroupName","addressForm",1,"row"],[1,"form-group","col-6"],["formControlName","firstName",3,"label"],["formControlName","lastName",3,"label"],["formControlName","street",3,"label"],["formControlName","city",3,"label"],["formControlName","state",3,"label"],["formControlName","zipCode",3,"label"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["routerLink","/basket",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-primary",3,"disabled"],[1,"fa","fa-angle-right"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"h4"),c._uU(3,"Shipping address"),c.qZA(),c.TgZ(4,"button",2),c.NdJ("click",function(){return t.saveUserAddress()}),c._uU(5," Save as default address "),c.qZA(),c.qZA(),c.TgZ(6,"div",3),c.TgZ(7,"div",4),c._UZ(8,"app-text-input",5),c.qZA(),c.TgZ(9,"div",4),c._UZ(10,"app-text-input",6),c.qZA(),c.TgZ(11,"div",4),c._UZ(12,"app-text-input",7),c.qZA(),c.TgZ(13,"div",4),c._UZ(14,"app-text-input",8),c.qZA(),c.TgZ(15,"div",4),c._UZ(16,"app-text-input",9),c.qZA(),c.TgZ(17,"div",4),c._UZ(18,"app-text-input",10),c.qZA(),c.qZA(),c.qZA(),c.TgZ(19,"div",11),c.TgZ(20,"button",12),c._UZ(21,"i",13),c._uU(22," Back to basket "),c.qZA(),c.TgZ(23,"button",14),c._uU(24," Go to delivery "),c._UZ(25,"i",15),c.qZA(),c.qZA()),2&e&&(c.Q6J("formGroup",t.checkoutForm),c.xp6(4),c.Q6J("disabled",!t.checkoutForm.get("addressForm").valid||!t.checkoutForm.get("addressForm").dirty),c.xp6(4),c.Q6J("label","First name"),c.xp6(2),c.Q6J("label","Last name"),c.xp6(2),c.Q6J("label","Street"),c.xp6(2),c.Q6J("label","City"),c.xp6(2),c.Q6J("label","State"),c.xp6(2),c.Q6J("label","Zip code"),c.xp6(5),c.Q6J("disabled",t.checkoutForm.get("addressForm").invalid))},directives:[d.JL,d.sg,d.x0,f.t,d.JJ,d.u,i.rH,m.st],styles:[""]}),e})();var Z=r(9996),k=r(529),y=r(2693);let x=(()=>{class e{constructor(e){this.http=e,this.baseUrl=k.N.apiUrl}createOrder(e){return this.http.post(this.baseUrl+"orders",e)}getDeliveryMethods(){return this.http.get(this.baseUrl+"orders/deliveryMethods").pipe((0,Z.U)(e=>e.sort((e,t)=>t.price-e.price)))}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(y.eN))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function A(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"div",9),c.TgZ(1,"input",10),c.NdJ("click",function(){const t=c.CHM(e).$implicit;return c.oxw().setShippingPrice(t)}),c.qZA(),c.TgZ(2,"label",11),c.TgZ(3,"strong"),c._uU(4),c.ALo(5,"currency"),c.qZA(),c._UZ(6,"br"),c.TgZ(7,"span",12),c._uU(8),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=t.$implicit;c.xp6(1),c.s9C("id",e.id),c.s9C("value",e.id),c.xp6(1),c.s9C("for",e.id),c.xp6(2),c.AsE("",e.shortName," - ",c.lcZ(5,6,e.price),""),c.xp6(4),c.Oqu(e.description)}}let T=(()=>{class e{constructor(e,t){this.checkoutService=e,this.basketService=t}ngOnInit(){this.checkoutService.getDeliveryMethods().subscribe(e=>{this.deliveryMethods=e},e=>{console.log(e)})}setShippingPrice(e){this.basketService.setShippingPrice(e)}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(x),c.Y36(p.v))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-checkout-delivery"]],inputs:{checkoutForm:"checkoutForm"},decls:12,vars:3,consts:[[1,"mt-4",3,"formGroup"],[1,"mb-3"],["formGroupName","deliveryForm",1,"row"],["class","col-6 form-group",4,"ngFor","ngForOf"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-primary",3,"disabled"],[1,"fa","fa-angle-right"],[1,"col-6","form-group"],["type","radio","formControlName","deliveryMethod",1,"custom-control-input",3,"id","value","click"],[1,"custom-control-label",3,"for"],[1,"label-description"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"h4",1),c._uU(2,"Choose your delivery method"),c.qZA(),c.TgZ(3,"div",2),c.YNc(4,A,9,8,"div",3),c.qZA(),c.qZA(),c.TgZ(5,"div",4),c.TgZ(6,"button",5),c._UZ(7,"i",6),c._uU(8," Back to address "),c.qZA(),c.TgZ(9,"button",7),c._uU(10," Go to review "),c._UZ(11,"i",8),c.qZA(),c.qZA()),2&e&&(c.Q6J("formGroup",t.checkoutForm),c.xp6(4),c.Q6J("ngForOf",t.deliveryMethods),c.xp6(5),c.Q6J("disabled",t.checkoutForm.get("deliveryForm").invalid))},directives:[d.JL,d.sg,d.x0,o.sg,m.po,m.st,d._,d.Fj,d.JJ,d.u],pipes:[o.H9],styles:[""]}),e})();var q=r(2752);let F=(()=>{class e{constructor(e){this.basketService=e}ngOnInit(){this.basket$=this.basketService.basket$}createPaymentIntent(){return this.basketService.createPaymentIntent().subscribe(e=>{this.appStepper.next()},e=>{console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(p.v))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-checkout-review"]],inputs:{appStepper:"appStepper"},decls:10,vars:4,consts:[[1,"mt-4"],[3,"isBasket","items"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"click"],[1,"fa","fa-angle-right"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c._UZ(1,"app-basket-summary",1),c.ALo(2,"async"),c.qZA(),c.TgZ(3,"div",2),c.TgZ(4,"button",3),c._UZ(5,"i",4),c._uU(6," Back to Delivery "),c.qZA(),c.TgZ(7,"button",5),c.NdJ("click",function(){return t.createPaymentIntent()}),c._uU(8," Go to Payment "),c._UZ(9,"i",6),c.qZA(),c.qZA()),2&e&&(c.xp6(1),c.Q6J("isBasket",!1)("items",c.lcZ(2,2,t.basket$).items))},directives:[q.b,m.po],pipes:[o.Ov],styles:[""]}),e})();function _(e,t,r,o,n,i,c){try{var s=e[i](c),a=s.value}catch(l){return void r(l)}s.done?t(a):Promise.resolve(a).then(o,n)}function C(e){return function(){var t=this,r=arguments;return new Promise(function(o,n){var i=e.apply(t,r);function c(e){_(i,o,n,c,s,"next",e)}function s(e){_(i,o,n,c,s,"throw",e)}c(void 0)})}}const U=["cardNumber"],J=["cardExpiry"],S=["cardCvc"];function N(e,t){if(1&e&&(c.ynx(0),c.TgZ(1,"span",17),c._uU(2),c.qZA(),c.BQk()),2&e){const e=c.oxw();c.xp6(2),c.Oqu(e.cardErrors)}}function w(e,t){1&e&&c._UZ(0,"i",18)}let I=(()=>{class e{constructor(e,t,r,o){this.basketService=e,this.checkoutService=t,this.toastr=r,this.router=o,this.cardHandler=this.onChange.bind(this),this.loading=!1,this.cardNumberValid=!1,this.cardExpiryValid=!1,this.cardCvcValid=!1}ngAfterViewInit(){this.stripe=Stripe("pk_test_51J9uRqKAhdevBSnRYvIwIh4zuhVcp6ASy2120JFMuIls3W8Q8oOWwnY50IGw9hI5AemhNF8EmimbkYiTubEIiOpd00jzQzJK1k");const e=this.stripe.elements();this.cardNumber=e.create("cardNumber"),this.cardNumber.mount(this.cardNumberElement.nativeElement),this.cardNumber.addEventListener("change",this.cardHandler),this.cardExpiry=e.create("cardExpiry"),this.cardExpiry.mount(this.cardExpiryElement.nativeElement),this.cardExpiry.addEventListener("change",this.cardHandler),this.cardCvc=e.create("cardCvc"),this.cardCvc.mount(this.cardCvcElement.nativeElement),this.cardCvc.addEventListener("change",this.cardHandler)}ngOnDestroy(){this.cardNumber.destroy(),this.cardExpiry.destroy(),this.cardCvc.destroy()}ngOnInit(){}onChange(e){switch(this.cardErrors=e.error?e.error.message:null,e.elementType){case"cardNumber":this.cardNumberValid=e.complete;break;case"cardExpiry":this.cardExpiryValid=e.complete;break;case"cardCvc":this.cardCvcValid=e.complete}}submitOrder(){var e=this;return C(function*(){e.loading=!0;const t=e.basketService.getCurrentBasketValue();try{const r=yield e.createOrder(t),o=yield e.confirmPaymentWithStripe(t);o.paymentIntent?(e.basketService.deleteLocalBasket(t.id),e.router.navigate(["checkout/success"],{state:r})):e.toastr.error(o.error.message),e.loading=!1}catch(r){console.log(r),e.loading=!1}})()}confirmPaymentWithStripe(e){var t=this;return C(function*(){return t.stripe.confirmCardPayment(e.clientSecret,{payment_method:{card:t.cardNumber,billing_details:{name:t.checkoutForm.get("paymentForm").get("nameOnCard").value}}})})()}createOrder(e){var t=this;return C(function*(){const r=t.getOrderToCreate(e);return t.checkoutService.createOrder(r).toPromise()})()}getOrderToCreate(e){return{basketId:e.id,deliveryMethodId:+this.checkoutForm.get("deliveryForm").get("deliveryMethod").value,shipToAddress:this.checkoutForm.get("addressForm").value}}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(p.v),c.Y36(x),c.Y36(v._W),c.Y36(i.F0))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-checkout-payment"]],viewQuery:function(e,t){if(1&e&&(c.Gf(U,7),c.Gf(J,7),c.Gf(S,7)),2&e){let e;c.iGM(e=c.CRH())&&(t.cardNumberElement=e.first),c.iGM(e=c.CRH())&&(t.cardExpiryElement=e.first),c.iGM(e=c.CRH())&&(t.cardCvcElement=e.first)}},inputs:{checkoutForm:"checkoutForm"},decls:22,vars:5,consts:[[1,"mt-4",3,"formGroup"],[1,"row"],["formGroupName","paymentForm",1,"form-group","col-12"],["formControlName","nameOnCard",3,"label"],[1,"form-group","col-6"],[1,"form-control","py-3"],["cardNumber",""],[4,"ngIf"],[1,"form-group","col-3"],["cardExpiry",""],["cardCvc",""],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"disabled","click"],[1,"fa","fa-angle-right"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"text-danger"],[1,"fa","fa-spinner","fa-spin"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c._UZ(3,"app-text-input",3),c.qZA(),c.TgZ(4,"div",4),c._UZ(5,"div",5,6),c.YNc(7,N,3,1,"ng-container",7),c.qZA(),c.TgZ(8,"div",8),c._UZ(9,"div",5,9),c.qZA(),c.TgZ(11,"div",8),c._UZ(12,"div",5,10),c.qZA(),c.qZA(),c.qZA(),c.TgZ(14,"div",11),c.TgZ(15,"button",12),c._UZ(16,"i",13),c._uU(17," Back to Review "),c.qZA(),c.TgZ(18,"button",14),c.NdJ("click",function(){return t.submitOrder()}),c._uU(19," Submit order "),c._UZ(20,"i",15),c.YNc(21,w,1,0,"i",16),c.qZA(),c.qZA()),2&e&&(c.Q6J("formGroup",t.checkoutForm),c.xp6(3),c.Q6J("label","Name on card"),c.xp6(4),c.Q6J("ngIf",t.cardErrors),c.xp6(11),c.Q6J("disabled",t.loading||t.checkoutForm.get("paymentForm").invalid||!t.cardNumberValid||!t.cardExpiryValid||!t.cardCvcValid),c.xp6(3),c.Q6J("ngIf",t.loading))},directives:[d.JL,d.sg,d.x0,f.t,d.JJ,d.u,o.O5,m.po],styles:[""]}),e})();var O=r(9363);function Q(e,t){if(1&e&&(c._UZ(0,"app-order-totals",11),c.ALo(1,"async"),c.ALo(2,"async"),c.ALo(3,"async")),2&e){const e=c.oxw();c.Q6J("shippingPrice",c.lcZ(1,3,e.basketTotals$).shipping)("subtotal",c.lcZ(2,5,e.basketTotals$).subtotal)("total",c.lcZ(3,7,e.basketTotals$).total)}}const M=[{path:"",component:(()=>{class e{constructor(e,t,r){this.fb=e,this.accountService=t,this.basketService=r}ngOnInit(){this.createCheckoutForm(),this.getAddressFormValues(),this.getDeliveryMethodValue(),this.basketTotals$=this.basketService.basketTotal$}getDeliveryMethodValue(){const e=this.basketService.getCurrentBasketValue();null!==e.deliveryMethodId&&this.checkoutForm.get("deliveryForm").get("deliveryMethod").patchValue(e.deliveryMethodId.toString())}createCheckoutForm(){this.checkoutForm=this.fb.group({addressForm:this.fb.group({firstName:[null,d.kI.required],lastName:[null,d.kI.required],street:[null,d.kI.required],city:[null,d.kI.required],state:[null,d.kI.required],zipCode:[null,d.kI.required]}),deliveryForm:this.fb.group({deliveryMethod:[null,d.kI.required]}),paymentForm:this.fb.group({nameOnCard:[null,d.kI.required]})})}getAddressFormValues(){this.accountService.getUserAddress().subscribe(e=>{e&&this.checkoutForm.get("addressForm").patchValue(e)},e=>{console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(d.qu),c.Y36(u.B),c.Y36(p.v))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-checkout"]],decls:16,vars:14,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-8"],[3,"linearModeSelected"],["appStepper",""],[3,"label","completed"],[3,"checkoutForm"],[3,"label"],[3,"appStepper"],[1,"col-4"],[3,"shippingPrice","subtotal","total",4,"ngIf"],[3,"shippingPrice","subtotal","total"]],template:function(e,t){if(1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c.TgZ(3,"app-stepper",3,4),c.TgZ(5,"cdk-step",5),c._UZ(6,"app-checkout-address",6),c.qZA(),c.TgZ(7,"cdk-step",5),c._UZ(8,"app-checkout-delivery",6),c.qZA(),c.TgZ(9,"cdk-step",7),c._UZ(10,"app-checkout-review",8),c.qZA(),c.TgZ(11,"cdk-step",7),c._UZ(12,"app-checkout-payment",6),c.qZA(),c.qZA(),c.qZA(),c.TgZ(13,"div",9),c.YNc(14,Q,4,9,"app-order-totals",10),c.ALo(15,"async"),c.qZA(),c.qZA(),c.qZA()),2&e){const e=c.MAs(4);c.xp6(3),c.Q6J("linearModeSelected",!0),c.xp6(2),c.Q6J("label","Address")("completed",t.checkoutForm.get("addressForm").valid),c.xp6(1),c.Q6J("checkoutForm",t.checkoutForm),c.xp6(1),c.Q6J("label","Delivery")("completed",t.checkoutForm.get("deliveryForm").valid),c.xp6(1),c.Q6J("checkoutForm",t.checkoutForm),c.xp6(1),c.Q6J("label","Review"),c.xp6(1),c.Q6J("appStepper",e),c.xp6(1),c.Q6J("label","Payment"),c.xp6(1),c.Q6J("checkoutForm",t.checkoutForm),c.xp6(2),c.Q6J("ngIf",c.lcZ(15,12,t.basketTotals$))}},directives:[g,m.be,b,T,F,I,o.O5,O.S],pipes:[o.Ov],styles:[""]}),e})()},{path:"success",component:l}];let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.Bz.forChild(M)],i.Bz]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[o.ez,E,n.m]]}),e})()}}]);
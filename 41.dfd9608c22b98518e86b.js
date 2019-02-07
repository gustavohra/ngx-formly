(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"+ybM":function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},"1qLx":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'left\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        placeholder: <span class="hljs-string">\'Formly is terrific!\'</span>,\n        addonLeft: {\n          <span class="hljs-keyword">class</span>: <span class="hljs-string">\'fa fa-euro\'</span>,\n        },\n        label: <span class="hljs-string">\'One add-on on the left (icon)\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'both\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        placeholder: <span class="hljs-string">\'How great is this?\'</span>,\n        addonLeft: {\n          <span class="hljs-keyword">class</span>: <span class="hljs-string">\'fa fa-home\'</span>,\n        },\n        addonRight: {\n          text: <span class="hljs-string">\'$\'</span>,\n        },\n        label: <span class="hljs-string">\'One add-on on both side (left: icon, right: text)\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'right\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        placeholder: <span class="hljs-string">\'Nice, isn\\\'t it??\'</span>,\n\n        addonRight: {\n          <span class="hljs-keyword">class</span>: <span class="hljs-string">\'fa fa-heart\'</span>,\n        },\n        label: <span class="hljs-string">\'One add-on on the right (icon)\'</span>,\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},"7yHg":function(n,s,a){"use strict";a.r(s);var o=a("CcnG"),l=a("gIcY"),t=function(){function n(){this.form=new l.FormGroup({}),this.model={},this.options={},this.fields=[{key:"left",type:"input",templateOptions:{placeholder:"Formly is terrific!",addonLeft:{class:"fa fa-euro"},label:"One add-on on the left (icon)"}},{key:"both",type:"input",templateOptions:{placeholder:"How great is this?",addonLeft:{class:"fa fa-home"},addonRight:{text:"$"},label:"One add-on on both side (left: icon, right: text)"}},{key:"right",type:"input",templateOptions:{placeholder:"Nice, isn't it??",addonRight:{class:"fa fa-heart"},label:"One add-on on the right (icon)"}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),p={examples:[{title:"Input add-ons",description:"This example demonstrates how to use input add-ons to decorate your input fields.",component:t,files:[{file:"app.component.html",content:a("uYWk"),filecontent:a("TL3U")},{file:"app.component.ts",content:a("1qLx"),filecontent:a("k3ON")},{file:"app.module.ts",content:a("+ybM"),filecontent:a("JoKT")}]}]},e=function(){return function(){}}(),r=a("NcP4"),m=a("goW2"),i=a("htty"),c=a("LgGJ"),d=a("MT1c"),u=a("1Q/V"),f=a("9+aI"),h=a("haId"),g=a("LJsP"),y=a("yR2A"),j=a("UFMs"),b=a("pMnS"),k=a("4o01"),F=a("Dl9q"),w=a("9Glx"),C=a("UcnZ"),v=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function M(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var l=!0,t=n.component;return"submit"===s&&(l=!1!==o["\u0275nov"](n,2).onSubmit(a)&&l),"reset"===s&&(l=!1!==o["\u0275nov"](n,2).onReset()&&l),"ngSubmit"===s&&(l=!1!==t.submit()&&l),l},null,null)),o["\u0275did"](1,16384,null,0,l["\u0275angular_packages_forms_forms_bh"],[],null,null),o["\u0275did"](2,540672,null,0,l.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,l.ControlContainer,null,[l.FormGroupDirective]),o["\u0275did"](4,16384,null,0,l.NgControlStatusGroup,[[4,l.ControlContainer]],null,null),(n()(),o["\u0275eld"](5,0,null,null,1,"formly-form",[],null,null,null,F.b,F.a)),o["\u0275did"](6,966656,null,0,w.a,[C.a,o.ComponentFactoryResolver,[2,l.NgForm],[2,l.FormGroupDirective],[3,w.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),o["\u0275eld"](7,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,6,0,a.model,a.form,a.fields,a.options)},function(n,s){var a=s.component;n(s,0,0,o["\u0275nov"](s,4).ngClassUntouched,o["\u0275nov"](s,4).ngClassTouched,o["\u0275nov"](s,4).ngClassPristine,o["\u0275nov"](s,4).ngClassDirty,o["\u0275nov"](s,4).ngClassValid,o["\u0275nov"](s,4).ngClassInvalid,o["\u0275nov"](s,4).ngClassPending),n(s,7,0,!a.form.valid)})}function x(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,M,v)),o["\u0275did"](1,49152,null,0,t,[],null,null)],null,null)}var O=o["\u0275ccf"]("formly-app-example",t,x,{},{},[]),_=a("Ip0R"),R=a("M2Lx"),L=a("eDkP"),N=a("Fzqc"),S=a("v9Dh"),G=a("ZYjt"),A=a("Wf4p"),D=a("6LlJ"),I=a("F6kA"),J=a("DAbo"),T=a("dWZg"),U=a("lLAP"),E=a("4c35"),P=a("qAlS"),q=a("La40"),B=a("SMsm"),H=a("UodH"),W=a("5QwG"),Y=a("qkla"),Z=a("iZhS"),Q=a("XR12"),z=a("me7w"),V=a("N3PW"),$=a("l4pn"),K=a("Fv2i"),X=a("wBYW"),nn=a("IE48"),sn=a("Q4Tx"),an=a("Nsh5"),on=a("8mMr"),ln=a("LC5p"),tn=a("0/Q6"),pn=a("mqvi"),en=a("lYui"),rn=a("VGFS"),mn=a("1ey0"),cn=function(){return function(){}}(),dn=a("ZYCi"),un=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return fn});var fn=o["\u0275cmf"](e,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,c.a,d.a,u.a,f.a,h.a,g.a,y.a,j.a,b.a,k.a,O]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,_.NgLocalization,_.NgLocaleLocalization,[o.LOCALE_ID,[2,_["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,R.c,R.c,[]),o["\u0275mpd"](4608,L.c,L.c,[L.i,L.e,o.ComponentFactoryResolver,L.h,L.f,o.Injector,o.NgZone,_.DOCUMENT,N.b,[2,_.Location]]),o["\u0275mpd"](5120,L.j,L.k,[L.c]),o["\u0275mpd"](5120,S.b,S.c,[L.c]),o["\u0275mpd"](4608,G.HAMMER_GESTURE_CONFIG,A.c,[[2,A.g],[2,A.l]]),o["\u0275mpd"](4608,D.a,D.a,[]),o["\u0275mpd"](4608,I.a,I.a,[]),o["\u0275mpd"](4608,l.FormBuilder,l.FormBuilder,[]),o["\u0275mpd"](4608,l["\u0275angular_packages_forms_forms_j"],l["\u0275angular_packages_forms_forms_j"],[]),o["\u0275mpd"](4608,C.a,C.a,[J.b,o.ComponentFactoryResolver]),o["\u0275mpd"](1073742336,_.CommonModule,_.CommonModule,[]),o["\u0275mpd"](1073742336,T.b,T.b,[]),o["\u0275mpd"](1073742336,R.d,R.d,[]),o["\u0275mpd"](1073742336,U.a,U.a,[]),o["\u0275mpd"](1073742336,N.a,N.a,[]),o["\u0275mpd"](1073742336,E.g,E.g,[]),o["\u0275mpd"](1073742336,P.c,P.c,[]),o["\u0275mpd"](1073742336,L.g,L.g,[]),o["\u0275mpd"](1073742336,A.l,A.l,[[2,A.d],[2,G.HAMMER_LOADER]]),o["\u0275mpd"](1073742336,S.e,S.e,[]),o["\u0275mpd"](1073742336,A.v,A.v,[]),o["\u0275mpd"](1073742336,q.j,q.j,[]),o["\u0275mpd"](1073742336,B.c,B.c,[]),o["\u0275mpd"](1073742336,H.c,H.c,[]),o["\u0275mpd"](1073742336,W.b,W.b,[]),o["\u0275mpd"](512,J.b,J.b,[]),o["\u0275mpd"](1024,J.a,function(n,s){return[{wrappers:[{name:"addons",component:Y.a}],extensions:[{name:"addons",extension:{postPopulate:Z.a}}]},Q.b(n),{types:[{name:"input",component:z.a,wrappers:["form-field"]},{name:"checkbox",component:V.a,wrappers:["form-field"]},{name:"radio",component:$.a,wrappers:["form-field"]},{name:"select",component:K.a,wrappers:["form-field"]},{name:"textarea",component:X.a,wrappers:["form-field"]},{name:"multicheckbox",component:nn.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:sn.a}]},Q.b(s),{}]},[J.b,J.b]),o["\u0275mpd"](1073742336,Q.a,Q.a,[J.b,[2,J.a]]),o["\u0275mpd"](1073742336,an.h,an.h,[]),o["\u0275mpd"](1073742336,on.b,on.b,[]),o["\u0275mpd"](1073742336,A.m,A.m,[]),o["\u0275mpd"](1073742336,A.t,A.t,[]),o["\u0275mpd"](1073742336,ln.b,ln.b,[]),o["\u0275mpd"](1073742336,tn.c,tn.c,[]),o["\u0275mpd"](1073742336,pn.a,pn.a,[]),o["\u0275mpd"](1073742336,l["\u0275angular_packages_forms_forms_bc"],l["\u0275angular_packages_forms_forms_bc"],[]),o["\u0275mpd"](1073742336,l.ReactiveFormsModule,l.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,en.a,en.a,[]),o["\u0275mpd"](1073742336,rn.a,rn.a,[]),o["\u0275mpd"](1073742336,mn.a,mn.a,[]),o["\u0275mpd"](1073742336,cn,cn,[]),o["\u0275mpd"](1073742336,dn.s,dn.s,[[2,dn.y],[2,dn.p]]),o["\u0275mpd"](1073742336,e,e,[]),o["\u0275mpd"](1024,dn.n,function(){return[[{path:"",component:un.a,data:p}]]},[])])})},JoKT:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},TL3U:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>'},k3ON:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'left',\n      type: 'input',\n      templateOptions: {\n        placeholder: 'Formly is terrific!',\n        addonLeft: {\n          class: 'fa fa-euro',\n        },\n        label: 'One add-on on the left (icon)',\n      },\n    },\n    {\n      key: 'both',\n      type: 'input',\n      templateOptions: {\n        placeholder: 'How great is this?',\n        addonLeft: {\n          class: 'fa fa-home',\n        },\n        addonRight: {\n          text: '$',\n        },\n        label: 'One add-on on both side (left: icon, right: text)',\n      },\n    },\n    {\n      key: 'right',\n      type: 'input',\n      templateOptions: {\n        placeholder: 'Nice, isn\\'t it??',\n\n        addonRight: {\n          class: 'fa fa-heart',\n        },\n        label: 'One add-on on the right (icon)',\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},uYWk:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>'}}]);
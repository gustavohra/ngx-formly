(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"31jM":function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},"4WQe":function(n,s,o){"use strict";o.r(s);var a=o("CcnG"),l=o("gIcY"),p=function(){function n(){this.form=new l.FormGroup({}),this.model={},this.options={},this.fields=[{key:"text",type:"textarea",templateOptions:{label:"Textarea with specified rows",placeholder:"This has 10 rows",rows:10}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),t={examples:[{title:"Table Rows",description:"\n              With angular-formly-bootstrap-templates, you can specify\n                <code>rows</code> for the\n                <code>textarea</code> type. You can also specify\n                <code>cols</code> but that doesn't matter because the\n                <code>.form-control</code> class will make the textarea have a width of 100% anyway.\n            ",component:p,files:[{file:"app.component.html",content:o("HATa"),filecontent:o("SFb9")},{file:"app.component.ts",content:o("aIIL"),filecontent:o("xtC8")},{file:"app.module.ts",content:o("31jM"),filecontent:o("XPHS")}]}]},e=function(){return function(){}}(),r=o("NcP4"),m=o("goW2"),i=o("htty"),c=o("LgGJ"),d=o("MT1c"),u=o("1Q/V"),f=o("9+aI"),h=o("haId"),g=o("LJsP"),y=o("yR2A"),j=o("UFMs"),b=o("pMnS"),w=o("4o01"),F=o("Dl9q"),C=o("9Glx"),v=o("UcnZ"),k=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function x(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,o){var l=!0,p=n.component;return"submit"===s&&(l=!1!==a["\u0275nov"](n,2).onSubmit(o)&&l),"reset"===s&&(l=!1!==a["\u0275nov"](n,2).onReset()&&l),"ngSubmit"===s&&(l=!1!==p.submit()&&l),l},null,null)),a["\u0275did"](1,16384,null,0,l["\u0275angular_packages_forms_forms_bh"],[],null,null),a["\u0275did"](2,540672,null,0,l.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),a["\u0275prd"](2048,null,l.ControlContainer,null,[l.FormGroupDirective]),a["\u0275did"](4,16384,null,0,l.NgControlStatusGroup,[[4,l.ControlContainer]],null,null),(n()(),a["\u0275eld"](5,0,null,null,1,"formly-form",[],null,null,null,F.b,F.a)),a["\u0275did"](6,966656,null,0,C.a,[v.a,a.ComponentFactoryResolver,[2,l.NgForm],[2,l.FormGroupDirective],[3,C.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),a["\u0275eld"](7,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),a["\u0275ted"](-1,null,["Submit"]))],function(n,s){var o=s.component;n(s,2,0,o.form),n(s,6,0,o.model,o.form,o.fields,o.options)},function(n,s){var o=s.component;n(s,0,0,a["\u0275nov"](s,4).ngClassUntouched,a["\u0275nov"](s,4).ngClassTouched,a["\u0275nov"](s,4).ngClassPristine,a["\u0275nov"](s,4).ngClassDirty,a["\u0275nov"](s,4).ngClassValid,a["\u0275nov"](s,4).ngClassInvalid,a["\u0275nov"](s,4).ngClassPending),n(s,7,0,!o.form.valid)})}function M(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,x,k)),a["\u0275did"](1,49152,null,0,p,[],null,null)],null,null)}var _=a["\u0275ccf"]("formly-app-example",p,M,{},{},[]),R=o("Ip0R"),S=o("M2Lx"),A=o("eDkP"),G=o("Fzqc"),N=o("v9Dh"),L=o("ZYjt"),I=o("Wf4p"),O=o("6LlJ"),T=o("F6kA"),D=o("DAbo"),P=o("dWZg"),E=o("lLAP"),J=o("4c35"),U=o("qAlS"),B=o("La40"),H=o("SMsm"),W=o("UodH"),Y=o("5QwG"),Z=o("qkla"),q=o("iZhS"),Q=o("XR12"),z=o("me7w"),V=o("N3PW"),X=o("l4pn"),K=o("Fv2i"),$=o("wBYW"),nn=o("IE48"),sn=o("Q4Tx"),on=o("Nsh5"),an=o("8mMr"),ln=o("LC5p"),pn=o("0/Q6"),tn=o("mqvi"),en=o("lYui"),rn=o("VGFS"),mn=o("1ey0"),cn=function(){return function(){}}(),dn=o("ZYCi"),un=o("cIcG");o.d(s,"ConfigModuleNgFactory",function(){return fn});var fn=a["\u0275cmf"](e,[],function(n){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,c.a,d.a,u.a,f.a,h.a,g.a,y.a,j.a,b.a,w.a,_]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,R.NgLocalization,R.NgLocaleLocalization,[a.LOCALE_ID,[2,R["\u0275angular_packages_common_common_a"]]]),a["\u0275mpd"](4608,S.c,S.c,[]),a["\u0275mpd"](4608,A.c,A.c,[A.i,A.e,a.ComponentFactoryResolver,A.h,A.f,a.Injector,a.NgZone,R.DOCUMENT,G.b,[2,R.Location]]),a["\u0275mpd"](5120,A.j,A.k,[A.c]),a["\u0275mpd"](5120,N.b,N.c,[A.c]),a["\u0275mpd"](4608,L.HAMMER_GESTURE_CONFIG,I.c,[[2,I.g],[2,I.l]]),a["\u0275mpd"](4608,O.a,O.a,[]),a["\u0275mpd"](4608,T.a,T.a,[]),a["\u0275mpd"](4608,l.FormBuilder,l.FormBuilder,[]),a["\u0275mpd"](4608,l["\u0275angular_packages_forms_forms_j"],l["\u0275angular_packages_forms_forms_j"],[]),a["\u0275mpd"](4608,v.a,v.a,[D.b,a.ComponentFactoryResolver]),a["\u0275mpd"](1073742336,R.CommonModule,R.CommonModule,[]),a["\u0275mpd"](1073742336,P.b,P.b,[]),a["\u0275mpd"](1073742336,S.d,S.d,[]),a["\u0275mpd"](1073742336,E.a,E.a,[]),a["\u0275mpd"](1073742336,G.a,G.a,[]),a["\u0275mpd"](1073742336,J.g,J.g,[]),a["\u0275mpd"](1073742336,U.c,U.c,[]),a["\u0275mpd"](1073742336,A.g,A.g,[]),a["\u0275mpd"](1073742336,I.l,I.l,[[2,I.d],[2,L.HAMMER_LOADER]]),a["\u0275mpd"](1073742336,N.e,N.e,[]),a["\u0275mpd"](1073742336,I.v,I.v,[]),a["\u0275mpd"](1073742336,B.j,B.j,[]),a["\u0275mpd"](1073742336,H.c,H.c,[]),a["\u0275mpd"](1073742336,W.c,W.c,[]),a["\u0275mpd"](1073742336,Y.b,Y.b,[]),a["\u0275mpd"](512,D.b,D.b,[]),a["\u0275mpd"](1024,D.a,function(n,s){return[{wrappers:[{name:"addons",component:Z.a}],extensions:[{name:"addons",extension:{postPopulate:q.a}}]},Q.b(n),{types:[{name:"input",component:z.a,wrappers:["form-field"]},{name:"checkbox",component:V.a,wrappers:["form-field"]},{name:"radio",component:X.a,wrappers:["form-field"]},{name:"select",component:K.a,wrappers:["form-field"]},{name:"textarea",component:$.a,wrappers:["form-field"]},{name:"multicheckbox",component:nn.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:sn.a}]},Q.b(s),{}]},[D.b,D.b]),a["\u0275mpd"](1073742336,Q.a,Q.a,[D.b,[2,D.a]]),a["\u0275mpd"](1073742336,on.h,on.h,[]),a["\u0275mpd"](1073742336,an.b,an.b,[]),a["\u0275mpd"](1073742336,I.m,I.m,[]),a["\u0275mpd"](1073742336,I.t,I.t,[]),a["\u0275mpd"](1073742336,ln.b,ln.b,[]),a["\u0275mpd"](1073742336,pn.c,pn.c,[]),a["\u0275mpd"](1073742336,tn.a,tn.a,[]),a["\u0275mpd"](1073742336,l["\u0275angular_packages_forms_forms_bc"],l["\u0275angular_packages_forms_forms_bc"],[]),a["\u0275mpd"](1073742336,l.ReactiveFormsModule,l.ReactiveFormsModule,[]),a["\u0275mpd"](1073742336,en.a,en.a,[]),a["\u0275mpd"](1073742336,rn.a,rn.a,[]),a["\u0275mpd"](1073742336,mn.a,mn.a,[]),a["\u0275mpd"](1073742336,cn,cn,[]),a["\u0275mpd"](1073742336,dn.s,dn.s,[[2,dn.y],[2,dn.p]]),a["\u0275mpd"](1073742336,e,e,[]),a["\u0275mpd"](1024,dn.n,function(){return[[{path:"",component:un.a,data:t}]]},[])])})},HATa:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},SFb9:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>\n'},XPHS:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},aIIL:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'text\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'textarea\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Textarea with specified rows\'</span>,\n        placeholder: <span class="hljs-string">\'This has 10 rows\'</span>,\n        rows: <span class="hljs-number">10</span>,\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},xtC8:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'text',\n      type: 'textarea',\n      templateOptions: {\n        label: 'Textarea with specified rows',\n        placeholder: 'This has 10 rows',\n        rows: 10,\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"}}]);
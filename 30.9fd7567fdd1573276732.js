(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"/1rU":function(s,n){s.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>'},"4Yxh":function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component, ViewEncapsulation } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n  styleUrls: [<span class="hljs-string">\'./app.component.css\'</span>],\n  encapsulation: ViewEncapsulation.None,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      fieldGroupClassName: <span class="hljs-string">\'display-flex\'</span>,\n      fieldGroup: [\n        {\n          className: <span class="hljs-string">\'flex-1\'</span>,\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n          key: <span class="hljs-string">\'firstName\'</span>,\n          templateOptions: {\n            label: <span class="hljs-string">\'First Name\'</span>,\n          },\n        },\n        {\n          className: <span class="hljs-string">\'flex-1\'</span>,\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n          key: <span class="hljs-string">\'lastName\'</span>,\n          templateOptions: {\n            label: <span class="hljs-string">\'Last Name\'</span>,\n          },\n          expressionProperties: {\n            <span class="hljs-string">\'templateOptions.disabled\'</span>: <span class="hljs-string">\'!model.firstName\'</span>,\n          },\n        },\n      ],\n    },\n    {\n      template: <span class="hljs-string">\'&lt;hr /&gt;&lt;div&gt;&lt;strong&gt;Address:&lt;/strong&gt;&lt;/div&gt;\'</span>,\n    },\n    {\n      fieldGroupClassName: <span class="hljs-string">\'display-flex\'</span>,\n      fieldGroup: [\n        {\n          className: <span class="hljs-string">\'flex-2\'</span>,\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n          key: <span class="hljs-string">\'street\'</span>,\n          templateOptions: {\n            label: <span class="hljs-string">\'Street\'</span>,\n          },\n        },\n        {\n          className: <span class="hljs-string">\'flex-1\'</span>,\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n          key: <span class="hljs-string">\'cityName\'</span>,\n          templateOptions: {\n            label: <span class="hljs-string">\'City\'</span>,\n          },\n        },\n        {\n          className: <span class="hljs-string">\'flex-1\'</span>,\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n          key: <span class="hljs-string">\'zip\'</span>,\n          templateOptions: {\n            <span class="hljs-keyword">type</span>: <span class="hljs-string">\'number\'</span>,\n            label: <span class="hljs-string">\'Zip\'</span>,\n            max: <span class="hljs-number">99999</span>,\n            min: <span class="hljs-number">0</span>,\n            pattern: <span class="hljs-string">\'\\\\d{5}\'</span>,\n          },\n        },\n      ],\n    },\n    {\n      template: <span class="hljs-string">\'&lt;hr /&gt;\'</span>,\n    },\n    {\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      key: <span class="hljs-string">\'otherInput\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Other Input\'</span>,\n      },\n    },\n    {\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'checkbox\'</span>,\n      key: <span class="hljs-string">\'otherToo\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Other Checkbox\'</span>,\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},"9AZ/":function(s,n){s.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},FH01:function(s,n){s.exports='.display-flex { display: flex; }\n\n.flex-1 { flex: 1; }\n\n.flex-2 { flex: 2; }\n\n.flex-3 { flex: 3; }\n\n.flex-4 { flex: 4; }\n\n.flex-5 { flex: 5; }\n\n.flex-6 { flex: 6; }\n\n[class*="flex-"] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n[class*="flex-"]:first-child {\n  padding-left: 0;\n}\n\n[class*="flex-"]:nth-last-child(2) {\n  padding-right: 0;\n}\n'},JMCs:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>'},anDn:function(s,n){s.exports='<span class="hljs-selector-class">.display-flex</span> { <span class="hljs-attribute">display</span>: flex; }\n\n<span class="hljs-selector-class">.flex-1</span> { <span class="hljs-attribute">flex</span>: <span class="hljs-number">1</span>; }\n\n<span class="hljs-selector-class">.flex-2</span> { <span class="hljs-attribute">flex</span>: <span class="hljs-number">2</span>; }\n\n<span class="hljs-selector-class">.flex-3</span> { <span class="hljs-attribute">flex</span>: <span class="hljs-number">3</span>; }\n\n<span class="hljs-selector-class">.flex-4</span> { <span class="hljs-attribute">flex</span>: <span class="hljs-number">4</span>; }\n\n<span class="hljs-selector-class">.flex-5</span> { <span class="hljs-attribute">flex</span>: <span class="hljs-number">5</span>; }\n\n<span class="hljs-selector-class">.flex-6</span> { <span class="hljs-attribute">flex</span>: <span class="hljs-number">6</span>; }\n\n<span class="hljs-selector-attr">[class*="flex-"]</span> {\n  <span class="hljs-attribute">padding-left</span>: <span class="hljs-number">10px</span>;\n  <span class="hljs-attribute">padding-right</span>: <span class="hljs-number">10px</span>;\n}\n\n<span class="hljs-selector-attr">[class*="flex-"]</span><span class="hljs-selector-pseudo">:first-child</span> {\n  <span class="hljs-attribute">padding-left</span>: <span class="hljs-number">0</span>;\n}\n\n<span class="hljs-selector-attr">[class*="flex-"]</span><span class="hljs-selector-pseudo">:nth-last-child(2)</span> {\n  <span class="hljs-attribute">padding-right</span>: <span class="hljs-number">0</span>;\n}\n'},lQhX:function(s,n,a){"use strict";a.r(n);var l=a("CcnG"),p=a("gIcY"),e=function(){function s(){this.form=new p.FormGroup({}),this.model={},this.options={},this.fields=[{fieldGroupClassName:"display-flex",fieldGroup:[{className:"flex-1",type:"input",key:"firstName",templateOptions:{label:"First Name"}},{className:"flex-1",type:"input",key:"lastName",templateOptions:{label:"Last Name"},expressionProperties:{"templateOptions.disabled":"!model.firstName"}}]},{template:"<hr /><div><strong>Address:</strong></div>"},{fieldGroupClassName:"display-flex",fieldGroup:[{className:"flex-2",type:"input",key:"street",templateOptions:{label:"Street"}},{className:"flex-1",type:"input",key:"cityName",templateOptions:{label:"City"}},{className:"flex-1",type:"input",key:"zip",templateOptions:{type:"number",label:"Zip",max:99999,min:0,pattern:"\\d{5}"}}]},{template:"<hr />"},{type:"input",key:"otherInput",templateOptions:{label:"Other Input"}},{type:"checkbox",key:"otherToo",templateOptions:{label:"Other Checkbox"}}]}return s.prototype.submit=function(){alert(JSON.stringify(this.model))},s}(),t={examples:[{title:"Advanced Layout (Flex)",description:"\n              This is an example of using\n              <code>formGroup</code>s and the\n              <code>className</code> property to have an advanced layout.\n            ",component:e,files:[{file:"app.component.html",content:a("JMCs"),filecontent:a("/1rU")},{file:"app.component.ts",content:a("4Yxh"),filecontent:a("lpGR")},{file:"app.component.css",content:a("anDn"),filecontent:a("FH01")},{file:"app.module.ts",content:a("9AZ/"),filecontent:a("mk4r")}]}]},o=function(){return function(){}}(),r=a("NcP4"),m=a("goW2"),i=a("htty"),c=a("LgGJ"),d=a("MT1c"),u=a("1Q/V"),f=a("9+aI"),h=a("haId"),g=a("LJsP"),y=a("yR2A"),j=a("UFMs"),b=a("pMnS"),x=a("4o01"),k=a("Dl9q"),N=a("9Glx"),C=a("UcnZ"),F=l["\u0275crt"]({encapsulation:2,styles:[[".display-flex{display:flex}.flex-1{flex:1}.flex-2{flex:2}.flex-3{flex:3}.flex-4{flex:4}.flex-5{flex:5}.flex-6{flex:6}[class*=flex-]{padding-left:10px;padding-right:10px}[class*=flex-]:first-child{padding-left:0}[class*=flex-]:nth-last-child(2){padding-right:0}"]],data:{}});function w(s){return l["\u0275vid"](0,[(s()(),l["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(s,n,a){var p=!0,e=s.component;return"submit"===n&&(p=!1!==l["\u0275nov"](s,2).onSubmit(a)&&p),"reset"===n&&(p=!1!==l["\u0275nov"](s,2).onReset()&&p),"ngSubmit"===n&&(p=!1!==e.submit()&&p),p},null,null)),l["\u0275did"](1,16384,null,0,p["\u0275angular_packages_forms_forms_bh"],[],null,null),l["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),l["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(s()(),l["\u0275eld"](5,0,null,null,1,"formly-form",[],null,null,null,k.b,k.a)),l["\u0275did"](6,966656,null,0,N.a,[C.a,l.ComponentFactoryResolver,[2,p.NgForm],[2,p.FormGroupDirective],[3,N.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(s()(),l["\u0275eld"](7,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(s()(),l["\u0275ted"](-1,null,["Submit"]))],function(s,n){var a=n.component;s(n,2,0,a.form),s(n,6,0,a.model,a.form,a.fields,a.options)},function(s,n){var a=n.component;s(n,0,0,l["\u0275nov"](n,4).ngClassUntouched,l["\u0275nov"](n,4).ngClassTouched,l["\u0275nov"](n,4).ngClassPristine,l["\u0275nov"](n,4).ngClassDirty,l["\u0275nov"](n,4).ngClassValid,l["\u0275nov"](n,4).ngClassInvalid,l["\u0275nov"](n,4).ngClassPending),s(n,7,0,!a.form.valid)})}function v(s){return l["\u0275vid"](0,[(s()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,w,F)),l["\u0275did"](1,49152,null,0,e,[],null,null)],null,null)}var M=l["\u0275ccf"]("formly-app-example",e,v,{},{},[]),O=a("Ip0R"),G=a("M2Lx"),_=a("eDkP"),R=a("Fzqc"),A=a("v9Dh"),S=a("ZYjt"),L=a("Wf4p"),I=a("6LlJ"),D=a("F6kA"),E=a("DAbo"),U=a("dWZg"),P=a("lLAP"),Z=a("4c35"),J=a("qAlS"),T=a("La40"),B=a("SMsm"),V=a("UodH"),Y=a("5QwG"),z=a("qkla"),q=a("iZhS"),H=a("XR12"),Q=a("me7w"),W=a("N3PW"),X=a("l4pn"),K=a("Fv2i"),$=a("wBYW"),ss=a("IE48"),ns=a("Q4Tx"),as=a("Nsh5"),ls=a("8mMr"),ps=a("LC5p"),es=a("0/Q6"),ts=a("mqvi"),os=a("lYui"),rs=a("VGFS"),ms=a("1ey0"),is=function(){return function(){}}(),cs=a("ZYCi"),ds=a("cIcG");a.d(n,"ConfigModuleNgFactory",function(){return us});var us=l["\u0275cmf"](o,[],function(s){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,c.a,d.a,u.a,f.a,h.a,g.a,y.a,j.a,b.a,x.a,M]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,O.NgLocalization,O.NgLocaleLocalization,[l.LOCALE_ID,[2,O["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,G.c,G.c,[]),l["\u0275mpd"](4608,_.c,_.c,[_.i,_.e,l.ComponentFactoryResolver,_.h,_.f,l.Injector,l.NgZone,O.DOCUMENT,R.b,[2,O.Location]]),l["\u0275mpd"](5120,_.j,_.k,[_.c]),l["\u0275mpd"](5120,A.b,A.c,[_.c]),l["\u0275mpd"](4608,S.HAMMER_GESTURE_CONFIG,L.c,[[2,L.g],[2,L.l]]),l["\u0275mpd"](4608,I.a,I.a,[]),l["\u0275mpd"](4608,D.a,D.a,[]),l["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),l["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_j"],p["\u0275angular_packages_forms_forms_j"],[]),l["\u0275mpd"](4608,C.a,C.a,[E.b,l.ComponentFactoryResolver]),l["\u0275mpd"](1073742336,O.CommonModule,O.CommonModule,[]),l["\u0275mpd"](1073742336,U.b,U.b,[]),l["\u0275mpd"](1073742336,G.d,G.d,[]),l["\u0275mpd"](1073742336,P.a,P.a,[]),l["\u0275mpd"](1073742336,R.a,R.a,[]),l["\u0275mpd"](1073742336,Z.g,Z.g,[]),l["\u0275mpd"](1073742336,J.c,J.c,[]),l["\u0275mpd"](1073742336,_.g,_.g,[]),l["\u0275mpd"](1073742336,L.l,L.l,[[2,L.d],[2,S.HAMMER_LOADER]]),l["\u0275mpd"](1073742336,A.e,A.e,[]),l["\u0275mpd"](1073742336,L.v,L.v,[]),l["\u0275mpd"](1073742336,T.j,T.j,[]),l["\u0275mpd"](1073742336,B.c,B.c,[]),l["\u0275mpd"](1073742336,V.c,V.c,[]),l["\u0275mpd"](1073742336,Y.b,Y.b,[]),l["\u0275mpd"](512,E.b,E.b,[]),l["\u0275mpd"](1024,E.a,function(s,n){return[{wrappers:[{name:"addons",component:z.a}],extensions:[{name:"addons",extension:{postPopulate:q.a}}]},H.b(s),{types:[{name:"input",component:Q.a,wrappers:["form-field"]},{name:"checkbox",component:W.a,wrappers:["form-field"]},{name:"radio",component:X.a,wrappers:["form-field"]},{name:"select",component:K.a,wrappers:["form-field"]},{name:"textarea",component:$.a,wrappers:["form-field"]},{name:"multicheckbox",component:ss.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:ns.a}]},H.b(n),{}]},[E.b,E.b]),l["\u0275mpd"](1073742336,H.a,H.a,[E.b,[2,E.a]]),l["\u0275mpd"](1073742336,as.h,as.h,[]),l["\u0275mpd"](1073742336,ls.b,ls.b,[]),l["\u0275mpd"](1073742336,L.m,L.m,[]),l["\u0275mpd"](1073742336,L.t,L.t,[]),l["\u0275mpd"](1073742336,ps.b,ps.b,[]),l["\u0275mpd"](1073742336,es.c,es.c,[]),l["\u0275mpd"](1073742336,ts.a,ts.a,[]),l["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_bc"],p["\u0275angular_packages_forms_forms_bc"],[]),l["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,os.a,os.a,[]),l["\u0275mpd"](1073742336,rs.a,rs.a,[]),l["\u0275mpd"](1073742336,ms.a,ms.a,[]),l["\u0275mpd"](1073742336,is,is,[]),l["\u0275mpd"](1073742336,cs.s,cs.s,[[2,cs.y],[2,cs.p]]),l["\u0275mpd"](1073742336,o,o,[]),l["\u0275mpd"](1024,cs.n,function(){return[[{path:"",component:ds.a,data:t}]]},[])])})},lpGR:function(s,n){s.exports="import { Component, ViewEncapsulation } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css'],\n  encapsulation: ViewEncapsulation.None,\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      fieldGroupClassName: 'display-flex',\n      fieldGroup: [\n        {\n          className: 'flex-1',\n          type: 'input',\n          key: 'firstName',\n          templateOptions: {\n            label: 'First Name',\n          },\n        },\n        {\n          className: 'flex-1',\n          type: 'input',\n          key: 'lastName',\n          templateOptions: {\n            label: 'Last Name',\n          },\n          expressionProperties: {\n            'templateOptions.disabled': '!model.firstName',\n          },\n        },\n      ],\n    },\n    {\n      template: '<hr /><div><strong>Address:</strong></div>',\n    },\n    {\n      fieldGroupClassName: 'display-flex',\n      fieldGroup: [\n        {\n          className: 'flex-2',\n          type: 'input',\n          key: 'street',\n          templateOptions: {\n            label: 'Street',\n          },\n        },\n        {\n          className: 'flex-1',\n          type: 'input',\n          key: 'cityName',\n          templateOptions: {\n            label: 'City',\n          },\n        },\n        {\n          className: 'flex-1',\n          type: 'input',\n          key: 'zip',\n          templateOptions: {\n            type: 'number',\n            label: 'Zip',\n            max: 99999,\n            min: 0,\n            pattern: '\\\\d{5}',\n          },\n        },\n      ],\n    },\n    {\n      template: '<hr />',\n    },\n    {\n      type: 'input',\n      key: 'otherInput',\n      templateOptions: {\n        label: 'Other Input',\n      },\n    },\n    {\n      type: 'checkbox',\n      key: 'otherToo',\n      templateOptions: {\n        label: 'Other Checkbox',\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},mk4r:function(s,n){s.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"}}]);
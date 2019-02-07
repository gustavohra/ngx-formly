(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"/M8T":function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'input',\n      type: 'input',\n      templateOptions: {\n        label: 'Firstname',\n        addonLeft: {\n          class: 'fa fa-dashboard',\n        },\n        addonRight: {\n          text: '$',\n        },\n      },\n    },\n  ];\n}\n"},"5XqH":function(n,s){n.exports='<span class="hljs-keyword">import</span> { FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addonsExtension</span>(<span class="hljs-params">field: FormlyFieldConfig</span>) </span>{\n  <span class="hljs-keyword">if</span> (!field.templateOptions || (field.wrappers &amp;&amp; field.wrappers.indexOf(<span class="hljs-string">\'addons\'</span>) !== <span class="hljs-number">-1</span>)) {\n    <span class="hljs-keyword">return</span>;\n  }\n\n  <span class="hljs-keyword">if</span> (field.templateOptions.addonLeft || field.templateOptions.addonRight) {\n    field.wrappers = [...(field.wrappers || []), <span class="hljs-string">\'addons\'</span>];\n  }\n}\n'},"8U8i":function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyMaterialModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/material\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-keyword">import</span> { FormlyWrapperAddons } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./addons.wrapper\'</span>;\n<span class="hljs-keyword">import</span> { addonsExtension } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./addons.extension\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyMaterialModule,\n    FormlyModule.forRoot({\n      wrappers: [\n        { name: <span class="hljs-string">\'addons\'</span>, component: FormlyWrapperAddons },\n      ],\n      extensions: [\n        { name: <span class="hljs-string">\'addons\'</span>, extension: { onPopulate: addonsExtension } },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    FormlyWrapperAddons,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},BTjY:function(n,s){n.exports='import { Component, TemplateRef, ViewChild, ViewContainerRef, AfterViewInit } from \'@angular/core\';\nimport { FieldWrapper } from \'@ngx-formly/core\';\n\n@Component({\n  selector: \'formly-wrapper-addons\',\n  template: `\n  <ng-template #matPrefix>\n    <span\n      *ngIf="to.addonLeft"\n      [ngStyle]="{cursor: to.addonLeft.onClick ? \'pointer\' : \'inherit\'}"\n      (click)="addonLeftClick($event)"\n    >\n      <i *ngIf="to.addonLeft.class" [ngClass]="to.addonLeft.class"></i>&nbsp;\n      <span *ngIf="to.addonLeft.text">{{ to.addonLeft.text }}</span>&nbsp;\n    </span>\n  </ng-template>\n\n  <ng-container #fieldComponent></ng-container>\n\n  <ng-template #matSuffix>\n    <span\n      *ngIf="to.addonRight"\n      [ngStyle]="{cursor: to.addonRight.onClick ? \'pointer\' : \'inherit\'}"\n      (click)="addonRightClick($event)"\n    >\n      &nbsp;<i *ngIf="to.addonRight.class" [ngClass]="to.addonRight.class"></i>\n      &nbsp;<span *ngIf="to.addonRight.text">{{ to.addonRight.text }}</span>\n    </span>\n  </ng-template>\n  `,\n})\nexport class FormlyWrapperAddons extends FieldWrapper implements AfterViewInit {\n  @ViewChild(\'fieldComponent\', {read: ViewContainerRef}) fieldComponent!: ViewContainerRef;\n  @ViewChild(\'matPrefix\') matPrefix: TemplateRef<any>;\n  @ViewChild(\'matSuffix\') matSuffix: TemplateRef<any>;\n\n  ngAfterViewInit() {\n    if (this.matPrefix) {\n      Promise.resolve().then(() => this.to.prefix = this.matPrefix);\n    }\n\n    if (this.matSuffix) {\n      Promise.resolve().then(() => this.to.suffix = this.matSuffix);\n    }\n  }\n\n  addonRightClick($event: any) {\n    if (this.to.addonRight.onClick) {\n      this.to.addonRight.onClick(this.to, this, $event);\n    }\n  }\n\n  addonLeftClick($event: any) {\n    if (this.to.addonLeft.onClick) {\n      this.to.addonLeft.onClick(this.to, this, $event);\n    }\n  }\n}\n'},CEgR:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'input\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Firstname\'</span>,\n        addonLeft: {\n          <span class="hljs-keyword">class</span>: <span class="hljs-string">\'fa fa-dashboard\'</span>,\n        },\n        addonRight: {\n          text: <span class="hljs-string">\'$\'</span>,\n        },\n      },\n    },\n  ];\n}\n'},Gff2:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component, TemplateRef, ViewChild, ViewContainerRef, AfterViewInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FieldWrapper } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-wrapper-addons\'</span>,\n  template: <span class="hljs-string">`\n  &lt;ng-template #matPrefix&gt;\n    &lt;span\n      *ngIf="to.addonLeft"\n      [ngStyle]="{cursor: to.addonLeft.onClick ? \'pointer\' : \'inherit\'}"\n      (click)="addonLeftClick($event)"\n    &gt;\n      &lt;i *ngIf="to.addonLeft.class" [ngClass]="to.addonLeft.class"&gt;&lt;/i&gt;&amp;nbsp;\n      &lt;span *ngIf="to.addonLeft.text"&gt;{{ to.addonLeft.text }}&lt;/span&gt;&amp;nbsp;\n    &lt;/span&gt;\n  &lt;/ng-template&gt;\n\n  &lt;ng-container #fieldComponent&gt;&lt;/ng-container&gt;\n\n  &lt;ng-template #matSuffix&gt;\n    &lt;span\n      *ngIf="to.addonRight"\n      [ngStyle]="{cursor: to.addonRight.onClick ? \'pointer\' : \'inherit\'}"\n      (click)="addonRightClick($event)"\n    &gt;\n      &amp;nbsp;&lt;i *ngIf="to.addonRight.class" [ngClass]="to.addonRight.class"&gt;&lt;/i&gt;\n      &amp;nbsp;&lt;span *ngIf="to.addonRight.text"&gt;{{ to.addonRight.text }}&lt;/span&gt;\n    &lt;/span&gt;\n  &lt;/ng-template&gt;\n  `</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FormlyWrapperAddons <span class="hljs-keyword">extends</span> FieldWrapper <span class="hljs-keyword">implements</span> AfterViewInit {\n  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-string">\'fieldComponent\'</span>, {read: ViewContainerRef}) fieldComponent!: ViewContainerRef;\n  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-string">\'matPrefix\'</span>) matPrefix: TemplateRef&lt;<span class="hljs-built_in">any</span>&gt;;\n  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-string">\'matSuffix\'</span>) matSuffix: TemplateRef&lt;<span class="hljs-built_in">any</span>&gt;;\n\n  ngAfterViewInit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.matPrefix) {\n      <span class="hljs-built_in">Promise</span>.resolve().then(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-keyword">this</span>.to.prefix = <span class="hljs-keyword">this</span>.matPrefix);\n    }\n\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.matSuffix) {\n      <span class="hljs-built_in">Promise</span>.resolve().then(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-keyword">this</span>.to.suffix = <span class="hljs-keyword">this</span>.matSuffix);\n    }\n  }\n\n  addonRightClick($event: <span class="hljs-built_in">any</span>) {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.to.addonRight.onClick) {\n      <span class="hljs-keyword">this</span>.to.addonRight.onClick(<span class="hljs-keyword">this</span>.to, <span class="hljs-keyword">this</span>, $event);\n    }\n  }\n\n  addonLeftClick($event: <span class="hljs-built_in">any</span>) {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.to.addonLeft.onClick) {\n      <span class="hljs-keyword">this</span>.to.addonLeft.onClick(<span class="hljs-keyword">this</span>.to, <span class="hljs-keyword">this</span>, $event);\n    }\n  }\n}\n'},"OC/L":function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},Vvcn:function(n,s){n.exports="import { FormlyFieldConfig } from '@ngx-formly/core';\n\nexport function addonsExtension(field: FormlyFieldConfig) {\n  if (!field.templateOptions || (field.wrappers && field.wrappers.indexOf('addons') !== -1)) {\n    return;\n  }\n\n  if (field.templateOptions.addonLeft || field.templateOptions.addonRight) {\n    field.wrappers = [...(field.wrappers || []), 'addons'];\n  }\n}\n"},WXpz:function(n,s,l){"use strict";l.r(s);var a=l("CcnG"),o=l("gIcY"),e=function(){return function(){this.form=new o.FormGroup({}),this.model={},this.options={},this.fields=[{key:"input",type:"input",templateOptions:{label:"Firstname",addonLeft:{class:"fa fa-dashboard"},addonRight:{text:"$"}}}]}}(),t={examples:[{title:"Material Prefix and Suffix",description:"\n              This demonstrates adding a material suffix and prefix for material form fields.\n            ",component:e,files:[{file:"app.component.html",content:l("OC/L"),filecontent:l("bbEY")},{file:"app.component.ts",content:l("CEgR"),filecontent:l("/M8T")},{file:"addons.wrapper.ts",content:l("Gff2"),filecontent:l("BTjY")},{file:"addons.extension.ts",content:l("5XqH"),filecontent:l("Vvcn")},{file:"app.module.ts",content:l("8U8i"),filecontent:l("buv+")}]}]},p=function(){return function(){}}(),r=l("NcP4"),i=l("goW2"),d=l("htty"),m=l("Ev0B"),f=l("SGEG"),c=l("KWUq"),u=l("KANT"),h=l("HHLm"),g=l("sU4I"),y=l("CuW3"),j=l("Ip0R"),w=l("mrSG"),C=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return Object(w.__extends)(s,n),s.prototype.ngAfterViewInit=function(){var n=this;this.matPrefix&&Promise.resolve().then(function(){return n.to.prefix=n.matPrefix}),this.matSuffix&&Promise.resolve().then(function(){return n.to.suffix=n.matSuffix})},s.prototype.addonRightClick=function(n){this.to.addonRight.onClick&&this.to.addonRight.onClick(this.to,this,n)},s.prototype.addonLeftClick=function(n){this.to.addonLeft.onClick&&this.to.addonLeft.onClick(this.to,this,n)},s}(l("HkYz").c),k=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function x(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"i",[],null,null,null,null,null)),a["\u0275did"](1,278528,null,0,j.NgClass,[a.IterableDiffers,a.KeyValueDiffers,a.ElementRef,a.Renderer2],{ngClass:[0,"ngClass"]},null)],function(n,s){n(s,1,0,s.component.to.addonLeft.class)},null)}function R(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a["\u0275ted"](1,null,["",""]))],null,function(n,s){n(s,1,0,s.component.to.addonLeft.text)})}function v(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,8,"span",[],null,[[null,"click"]],function(n,s,l){var a=!0;return"click"===s&&(a=!1!==n.component.addonLeftClick(l)&&a),a},null,null)),a["\u0275did"](1,278528,null,0,j.NgStyle,[a.KeyValueDiffers,a.ElementRef,a.Renderer2],{ngStyle:[0,"ngStyle"]},null),a["\u0275pod"](2,{cursor:0}),(n()(),a["\u0275and"](16777216,null,null,1,null,x)),a["\u0275did"](4,16384,null,0,j.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),a["\u0275ted"](-1,null,["\xa0 "])),(n()(),a["\u0275and"](16777216,null,null,1,null,R)),a["\u0275did"](7,16384,null,0,j.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),a["\u0275ted"](-1,null,["\xa0 "]))],function(n,s){var l=s.component,a=n(s,2,0,l.to.addonLeft.onClick?"pointer":"inherit");n(s,1,0,a),n(s,4,0,l.to.addonLeft.class),n(s,7,0,l.to.addonLeft.text)},null)}function F(n){return a["\u0275vid"](0,[(n()(),a["\u0275and"](16777216,null,null,1,null,v)),a["\u0275did"](1,16384,null,0,j.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),a["\u0275and"](0,null,null,0))],function(n,s){n(s,1,0,s.component.to.addonLeft)},null)}function b(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"i",[],null,null,null,null,null)),a["\u0275did"](1,278528,null,0,j.NgClass,[a.IterableDiffers,a.KeyValueDiffers,a.ElementRef,a.Renderer2],{ngClass:[0,"ngClass"]},null)],function(n,s){n(s,1,0,s.component.to.addonRight.class)},null)}function L(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a["\u0275ted"](1,null,["",""]))],null,function(n,s){n(s,1,0,s.component.to.addonRight.text)})}function I(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,8,"span",[],null,[[null,"click"]],function(n,s,l){var a=!0;return"click"===s&&(a=!1!==n.component.addonRightClick(l)&&a),a},null,null)),a["\u0275did"](1,278528,null,0,j.NgStyle,[a.KeyValueDiffers,a.ElementRef,a.Renderer2],{ngStyle:[0,"ngStyle"]},null),a["\u0275pod"](2,{cursor:0}),(n()(),a["\u0275ted"](-1,null,[" \xa0"])),(n()(),a["\u0275and"](16777216,null,null,1,null,b)),a["\u0275did"](5,16384,null,0,j.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),a["\u0275ted"](-1,null,[" \xa0"])),(n()(),a["\u0275and"](16777216,null,null,1,null,L)),a["\u0275did"](8,16384,null,0,j.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,s){var l=s.component,a=n(s,2,0,l.to.addonRight.onClick?"pointer":"inherit");n(s,1,0,a),n(s,5,0,l.to.addonRight.class),n(s,8,0,l.to.addonRight.text)},null)}function M(n){return a["\u0275vid"](0,[(n()(),a["\u0275and"](16777216,null,null,1,null,I)),a["\u0275did"](1,16384,null,0,j.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),a["\u0275and"](0,null,null,0))],function(n,s){n(s,1,0,s.component.to.addonRight)},null)}function V(n){return a["\u0275vid"](0,[a["\u0275qud"](402653184,1,{fieldComponent:0}),a["\u0275qud"](402653184,2,{matPrefix:0}),a["\u0275qud"](402653184,3,{matSuffix:0}),(n()(),a["\u0275and"](0,[[2,2],["matPrefix",2]],null,0,null,F)),(n()(),a["\u0275eld"](4,16777216,[[1,3],["fieldComponent",1]],null,0,null,null,null,null,null,null,null)),(n()(),a["\u0275and"](0,[[3,2],["matSuffix",2]],null,0,null,M))],null,null)}function _(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"formly-wrapper-addons",[],null,null,null,V,k)),a["\u0275did"](1,4243456,null,0,C,[],null,null)],null,null)}var A=a["\u0275ccf"]("formly-wrapper-addons",C,_,{field:"field",model:"model",form:"form",options:"options"},{},[]),S=l("pMnS"),P=l("4o01"),O=l("Dl9q"),N=l("9Glx"),E=l("UcnZ"),G=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function T(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,6,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,s,l){var o=!0;return"submit"===s&&(o=!1!==a["\u0275nov"](n,2).onSubmit(l)&&o),"reset"===s&&(o=!1!==a["\u0275nov"](n,2).onReset()&&o),o},null,null)),a["\u0275did"](1,16384,null,0,o["\u0275angular_packages_forms_forms_bh"],[],null,null),a["\u0275did"](2,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),a["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),a["\u0275did"](4,16384,null,0,o.NgControlStatusGroup,[[4,o.ControlContainer]],null,null),(n()(),a["\u0275eld"](5,0,null,null,1,"formly-form",[],null,null,null,O.b,O.a)),a["\u0275did"](6,966656,null,0,N.a,[E.a,a.ComponentFactoryResolver,[2,o.NgForm],[2,o.FormGroupDirective],[3,N.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null)],function(n,s){var l=s.component;n(s,2,0,l.form),n(s,6,0,l.model,l.form,l.fields,l.options)},function(n,s){n(s,0,0,a["\u0275nov"](s,4).ngClassUntouched,a["\u0275nov"](s,4).ngClassTouched,a["\u0275nov"](s,4).ngClassPristine,a["\u0275nov"](s,4).ngClassDirty,a["\u0275nov"](s,4).ngClassValid,a["\u0275nov"](s,4).ngClassInvalid,a["\u0275nov"](s,4).ngClassPending)})}function W(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,T,G)),a["\u0275did"](1,49152,null,0,e,[],null,null)],null,null)}var D=a["\u0275ccf"]("formly-app-example",e,W,{},{},[]),$=l("M2Lx"),q=l("eDkP"),U=l("Fzqc"),Y=l("v9Dh"),H=l("ZYjt"),K=l("Wf4p"),Z=l("6LlJ"),B=l("F6kA"),z=l("DAbo"),X=l("uGex"),J=l("dWZg"),Q=l("lLAP"),nn=l("4c35"),sn=l("qAlS"),ln=l("La40"),an=l("SMsm"),on=l("UodH"),en=l("5QwG"),tn=l("ZEvi"),pn=l("uKje"),rn=l("nZjf"),dn=l("/BG1"),mn=l("jkTl"),fn=l("C9di"),cn=l("2Vxy"),un=l("XR12");function hn(n){!n.templateOptions||n.wrappers&&-1!==n.wrappers.indexOf("addons")||(n.templateOptions.addonLeft||n.templateOptions.addonRight)&&(n.wrappers=(n.wrappers||[]).concat(["addons"]))}var gn=l("Nsh5"),yn=l("8mMr"),jn=l("LC5p"),wn=l("0/Q6"),Cn=l("mqvi"),kn=l("seP3"),xn=l("OLx1"),Rn=l("/VYK"),vn=l("b716"),Fn=l("IK0O"),bn=l("u+TE"),Ln=l("9It4"),In=l("lYui"),Mn=l("+A2M"),Vn=l("de3e"),_n=l("/LRX"),An=l("+P3o"),Sn=l("aV63"),Pn=l("jQrH"),On=function(){return function(){}}(),Nn=l("ZYCi"),En=l("cIcG");l.d(s,"ConfigModuleNgFactory",function(){return Gn});var Gn=a["\u0275cmf"](p,[],function(n){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,i.a,d.a,m.a,f.a,c.a,u.a,h.a,g.a,y.a,A,S.a,P.a,D]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,j.NgLocalization,j.NgLocaleLocalization,[a.LOCALE_ID,[2,j["\u0275angular_packages_common_common_a"]]]),a["\u0275mpd"](4608,$.c,$.c,[]),a["\u0275mpd"](4608,q.c,q.c,[q.i,q.e,a.ComponentFactoryResolver,q.h,q.f,a.Injector,a.NgZone,j.DOCUMENT,U.b,[2,j.Location]]),a["\u0275mpd"](5120,q.j,q.k,[q.c]),a["\u0275mpd"](5120,Y.b,Y.c,[q.c]),a["\u0275mpd"](4608,H.HAMMER_GESTURE_CONFIG,K.c,[[2,K.g],[2,K.l]]),a["\u0275mpd"](4608,Z.a,Z.a,[]),a["\u0275mpd"](4608,B.a,B.a,[]),a["\u0275mpd"](4608,o.FormBuilder,o.FormBuilder,[]),a["\u0275mpd"](4608,o["\u0275angular_packages_forms_forms_j"],o["\u0275angular_packages_forms_forms_j"],[]),a["\u0275mpd"](4608,E.a,E.a,[z.b,a.ComponentFactoryResolver]),a["\u0275mpd"](4608,K.b,K.b,[]),a["\u0275mpd"](5120,X.a,X.b,[q.c]),a["\u0275mpd"](1073742336,j.CommonModule,j.CommonModule,[]),a["\u0275mpd"](1073742336,J.b,J.b,[]),a["\u0275mpd"](1073742336,$.d,$.d,[]),a["\u0275mpd"](1073742336,Q.a,Q.a,[]),a["\u0275mpd"](1073742336,U.a,U.a,[]),a["\u0275mpd"](1073742336,nn.g,nn.g,[]),a["\u0275mpd"](1073742336,sn.c,sn.c,[]),a["\u0275mpd"](1073742336,q.g,q.g,[]),a["\u0275mpd"](1073742336,K.l,K.l,[[2,K.d],[2,H.HAMMER_LOADER]]),a["\u0275mpd"](1073742336,Y.e,Y.e,[]),a["\u0275mpd"](1073742336,K.v,K.v,[]),a["\u0275mpd"](1073742336,ln.j,ln.j,[]),a["\u0275mpd"](1073742336,an.c,an.c,[]),a["\u0275mpd"](1073742336,on.c,on.c,[]),a["\u0275mpd"](1073742336,en.b,en.b,[]),a["\u0275mpd"](512,z.b,z.b,[]),a["\u0275mpd"](1024,z.a,function(n){return[{wrappers:[{name:"form-field",component:tn.a}]},{types:[{name:"input",component:pn.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:rn.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:dn.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:mn.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:fn.a,wrappers:["form-field"]}]},{types:[{name:"select",component:cn.a,wrappers:["form-field"]}]},un.b(n),{wrappers:[{name:"addons",component:C}],extensions:[{name:"addons",extension:{onPopulate:hn}}]}]},[z.b]),a["\u0275mpd"](1073742336,un.a,un.a,[z.b,[2,z.a]]),a["\u0275mpd"](1073742336,gn.h,gn.h,[]),a["\u0275mpd"](1073742336,yn.b,yn.b,[]),a["\u0275mpd"](1073742336,K.m,K.m,[]),a["\u0275mpd"](1073742336,K.t,K.t,[]),a["\u0275mpd"](1073742336,jn.b,jn.b,[]),a["\u0275mpd"](1073742336,wn.c,wn.c,[]),a["\u0275mpd"](1073742336,Cn.a,Cn.a,[]),a["\u0275mpd"](1073742336,o["\u0275angular_packages_forms_forms_bc"],o["\u0275angular_packages_forms_forms_bc"],[]),a["\u0275mpd"](1073742336,o.ReactiveFormsModule,o.ReactiveFormsModule,[]),a["\u0275mpd"](1073742336,kn.e,kn.e,[]),a["\u0275mpd"](1073742336,xn.a,xn.a,[]),a["\u0275mpd"](1073742336,Rn.c,Rn.c,[]),a["\u0275mpd"](1073742336,vn.c,vn.c,[]),a["\u0275mpd"](1073742336,Fn.a,Fn.a,[]),a["\u0275mpd"](1073742336,bn.a,bn.a,[]),a["\u0275mpd"](1073742336,Ln.c,Ln.c,[]),a["\u0275mpd"](1073742336,In.a,In.a,[]),a["\u0275mpd"](1073742336,Mn.a,Mn.a,[]),a["\u0275mpd"](1073742336,Vn.c,Vn.c,[]),a["\u0275mpd"](1073742336,_n.a,_n.a,[]),a["\u0275mpd"](1073742336,An.a,An.a,[]),a["\u0275mpd"](1073742336,K.q,K.q,[]),a["\u0275mpd"](1073742336,X.d,X.d,[]),a["\u0275mpd"](1073742336,Sn.a,Sn.a,[]),a["\u0275mpd"](1073742336,Pn.a,Pn.a,[]),a["\u0275mpd"](1073742336,On,On,[]),a["\u0275mpd"](1073742336,Nn.s,Nn.s,[[2,Nn.y],[2,Nn.p]]),a["\u0275mpd"](1073742336,p,p,[]),a["\u0275mpd"](1024,Nn.n,function(){return[[{path:"",component:En.a,data:t}]]},[])])})},bbEY:function(n,s){n.exports='<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n</form>\n'},"buv+":function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyMaterialModule } from '@ngx-formly/material';\n\nimport { AppComponent } from './app.component';\nimport { FormlyWrapperAddons } from './addons.wrapper';\nimport { addonsExtension } from './addons.extension';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyMaterialModule,\n    FormlyModule.forRoot({\n      wrappers: [\n        { name: 'addons', component: FormlyWrapperAddons },\n      ],\n      extensions: [\n        { name: 'addons', extension: { onPopulate: addonsExtension } },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    FormlyWrapperAddons,\n  ],\n})\nexport class AppModule { }\n"}}]);
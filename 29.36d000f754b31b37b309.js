(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"6UWd":function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  <button type="button" class="btn btn-default" (click)="options.resetModel()">Reset</button>\n</form>\n'},OHCr:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFieldCustomInput } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./custom-input.component\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: <span class="hljs-string">\'required\'</span>, message: <span class="hljs-string">\'This field is required\'</span> },\n      ],\n      types: [\n        { name: <span class="hljs-string">\'custom\'</span>, component: FormlyFieldCustomInput, wrappers: [<span class="hljs-string">\'form-field\'</span>] },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    FormlyFieldCustomInput,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},ObCE:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\nimport { FormlyFieldCustomInput } from './custom-input.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n      ],\n      types: [\n        { name: 'custom', component: FormlyFieldCustomInput, wrappers: ['form-field'] },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    FormlyFieldCustomInput,\n  ],\n})\nexport class AppModule { }\n"},QgPX:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FieldType } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-field-custom-input',\n  template: `\n    <input [type]=\"type\" [formControl]=\"formControl\" [formlyAttributes]=\"field\">\n  `,\n})\nexport class FormlyFieldCustomInput extends FieldType {\n  get type() {\n    return this.to.type || 'text';\n  }\n}\n"},TalL:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {\n    formState: {\n      awesomeIsForced: false,\n    },\n  };\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'text',\n      type: 'input',\n      templateOptions: {\n        label: 'Text',\n        placeholder: 'Formly is terrific!',\n        required: true,\n      },\n    },\n    {\n      key: 'nested.story',\n      type: 'textarea',\n      templateOptions: {\n        label: 'Some sweet story',\n        placeholder: 'It allows you to build and maintain your forms with the ease of JavaScript :-)',\n        description: '',\n      },\n      expressionProperties: {\n        'templateOptions.focus': 'formState.awesomeIsForced',\n        'templateOptions.description': (model, formState) => {\n          if (formState.awesomeIsForced) {\n            return 'And look! This field magically got focus!';\n          }\n        },\n      },\n    },\n    {\n      key: 'awesome',\n      type: 'checkbox',\n      templateOptions: { label: '' },\n      expressionProperties: {\n        'templateOptions.disabled': 'formState.awesomeIsForced',\n        'templateOptions.label': (model, formState) => {\n          if (formState.awesomeIsForced) {\n            return 'Too bad, formly is really awesome...';\n          } else {\n            return 'Is formly totally awesome? (uncheck this and see what happens)';\n          }\n        },\n      },\n    },\n    {\n      key: 'whyNot',\n      type: 'textarea',\n      expressionProperties: {\n        'templateOptions.placeholder': (model, formState) => {\n          if (formState.awesomeIsForced) {\n            return 'Too bad... It really is awesome! Wasn\\'t that cool?';\n          } else {\n            return 'Type in here... I dare you';\n          }\n        },\n        'templateOptions.disabled': 'formState.awesomeIsForced',\n      },\n      hideExpression: 'model.awesome',\n      templateOptions: {\n        label: 'Why Not?',\n        placeholder: 'Type in here... I dare you',\n      },\n    },\n    {\n      key: 'custom',\n      type: 'custom',\n      templateOptions: {\n        label: 'Custom inlined',\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},Yxo4:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {\n    formState: {\n      awesomeIsForced: <span class="hljs-literal">false</span>,\n    },\n  };\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'text\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Text\'</span>,\n        placeholder: <span class="hljs-string">\'Formly is terrific!\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'nested.story\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'textarea\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Some sweet story\'</span>,\n        placeholder: <span class="hljs-string">\'It allows you to build and maintain your forms with the ease of JavaScript :-)\'</span>,\n        description: <span class="hljs-string">\'\'</span>,\n      },\n      expressionProperties: {\n        <span class="hljs-string">\'templateOptions.focus\'</span>: <span class="hljs-string">\'formState.awesomeIsForced\'</span>,\n        <span class="hljs-string">\'templateOptions.description\'</span>: <span class="hljs-function">(<span class="hljs-params">model, formState</span>) =&gt;</span> {\n          <span class="hljs-keyword">if</span> (formState.awesomeIsForced) {\n            <span class="hljs-keyword">return</span> <span class="hljs-string">\'And look! This field magically got focus!\'</span>;\n          }\n        },\n      },\n    },\n    {\n      key: <span class="hljs-string">\'awesome\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'checkbox\'</span>,\n      templateOptions: { label: <span class="hljs-string">\'\'</span> },\n      expressionProperties: {\n        <span class="hljs-string">\'templateOptions.disabled\'</span>: <span class="hljs-string">\'formState.awesomeIsForced\'</span>,\n        <span class="hljs-string">\'templateOptions.label\'</span>: <span class="hljs-function">(<span class="hljs-params">model, formState</span>) =&gt;</span> {\n          <span class="hljs-keyword">if</span> (formState.awesomeIsForced) {\n            <span class="hljs-keyword">return</span> <span class="hljs-string">\'Too bad, formly is really awesome...\'</span>;\n          } <span class="hljs-keyword">else</span> {\n            <span class="hljs-keyword">return</span> <span class="hljs-string">\'Is formly totally awesome? (uncheck this and see what happens)\'</span>;\n          }\n        },\n      },\n    },\n    {\n      key: <span class="hljs-string">\'whyNot\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'textarea\'</span>,\n      expressionProperties: {\n        <span class="hljs-string">\'templateOptions.placeholder\'</span>: <span class="hljs-function">(<span class="hljs-params">model, formState</span>) =&gt;</span> {\n          <span class="hljs-keyword">if</span> (formState.awesomeIsForced) {\n            <span class="hljs-keyword">return</span> <span class="hljs-string">\'Too bad... It really is awesome! Wasn\\\'t that cool?\'</span>;\n          } <span class="hljs-keyword">else</span> {\n            <span class="hljs-keyword">return</span> <span class="hljs-string">\'Type in here... I dare you\'</span>;\n          }\n        },\n        <span class="hljs-string">\'templateOptions.disabled\'</span>: <span class="hljs-string">\'formState.awesomeIsForced\'</span>,\n      },\n      hideExpression: <span class="hljs-string">\'model.awesome\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Why Not?\'</span>,\n        placeholder: <span class="hljs-string">\'Type in here... I dare you\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'custom\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'custom\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Custom inlined\'</span>,\n      },\n    },\n  ];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'},aGt6:function(n,s,e){"use strict";e.r(s);var l=e("CcnG"),a=e("gIcY"),o=function(){function n(){this.form=new a.FormGroup({}),this.model={},this.options={formState:{awesomeIsForced:!1}},this.fields=[{key:"text",type:"input",templateOptions:{label:"Text",placeholder:"Formly is terrific!",required:!0}},{key:"nested.story",type:"textarea",templateOptions:{label:"Some sweet story",placeholder:"It allows you to build and maintain your forms with the ease of JavaScript :-)",description:""},expressionProperties:{"templateOptions.focus":"formState.awesomeIsForced","templateOptions.description":function(n,s){if(s.awesomeIsForced)return"And look! This field magically got focus!"}}},{key:"awesome",type:"checkbox",templateOptions:{label:""},expressionProperties:{"templateOptions.disabled":"formState.awesomeIsForced","templateOptions.label":function(n,s){return s.awesomeIsForced?"Too bad, formly is really awesome...":"Is formly totally awesome? (uncheck this and see what happens)"}}},{key:"whyNot",type:"textarea",expressionProperties:{"templateOptions.placeholder":function(n,s){return s.awesomeIsForced?"Too bad... It really is awesome! Wasn't that cool?":"Type in here... I dare you"},"templateOptions.disabled":"formState.awesomeIsForced"},hideExpression:"model.awesome",templateOptions:{label:"Why Not?",placeholder:"Type in here... I dare you"}},{key:"custom",type:"custom",templateOptions:{label:"Custom inlined"}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),t={examples:[{title:"Introduction Example",description:"This is a small subset of the things that formly can do :-) See the other examples and the documentation for more.",component:o,files:[{file:"app.component.html",content:e("ltb9"),filecontent:e("6UWd")},{file:"app.component.ts",content:e("Yxo4"),filecontent:e("TalL")},{file:"app.module.ts",content:e("OHCr"),filecontent:e("ObCE")},{file:"custom-input.component.ts",content:e("hvFh"),filecontent:e("QgPX")}]}]},p=function(){return function(){}}(),r=e("NcP4"),i=e("goW2"),m=e("htty"),c=e("LgGJ"),d=e("MT1c"),u=e("1Q/V"),f=e("9+aI"),h=e("haId"),y=e("LJsP"),g=e("yR2A"),j=e("UFMs"),b=e("gfpZ"),w=e("mrSG"),k=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return Object(w.__extends)(s,n),Object.defineProperty(s.prototype,"type",{get:function(){return this.to.type||"text"},enumerable:!0,configurable:!0}),s}(e("HkYz").b),F=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function v(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,6,"input",[],[[8,"type",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"name",0],[1,"step",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"keyup"],[null,"keydown"],[null,"click"],[null,"change"],[null,"keypress"],[null,"focus"]],function(n,s,e){var a=!0;return"input"===s&&(a=!1!==l["\u0275nov"](n,1)._handleInput(e.target.value)&&a),"blur"===s&&(a=!1!==l["\u0275nov"](n,1).onTouched()&&a),"compositionstart"===s&&(a=!1!==l["\u0275nov"](n,1)._compositionStart()&&a),"compositionend"===s&&(a=!1!==l["\u0275nov"](n,1)._compositionEnd(e.target.value)&&a),"keyup"===s&&(a=!1!==(l["\u0275nov"](n,6).to.keyup&&l["\u0275nov"](n,6).to.keyup(l["\u0275nov"](n,6).field,e))&&a),"keydown"===s&&(a=!1!==(l["\u0275nov"](n,6).to.keydown&&l["\u0275nov"](n,6).to.keydown(l["\u0275nov"](n,6).field,e))&&a),"click"===s&&(a=!1!==(l["\u0275nov"](n,6).to.click&&l["\u0275nov"](n,6).to.click(l["\u0275nov"](n,6).field,e))&&a),"change"===s&&(a=!1!==(l["\u0275nov"](n,6).to.change&&l["\u0275nov"](n,6).to.change(l["\u0275nov"](n,6).field,e))&&a),"keypress"===s&&(a=!1!==(l["\u0275nov"](n,6).to.keypress&&l["\u0275nov"](n,6).to.keypress(l["\u0275nov"](n,6).field,e))&&a),"focus"===s&&(a=!1!==l["\u0275nov"](n,6).onFocus(e)&&a),"blur"===s&&(a=!1!==l["\u0275nov"](n,6).onBlur(e)&&a),a},null,null)),l["\u0275did"](1,16384,null,0,a.DefaultValueAccessor,[l.Renderer2,l.ElementRef,[2,a.COMPOSITION_BUFFER_MODE]],null,null),l["\u0275prd"](1024,null,a.NG_VALUE_ACCESSOR,function(n){return[n]},[a.DefaultValueAccessor]),l["\u0275did"](3,540672,null,0,a.FormControlDirective,[[8,null],[8,null],[6,a.NG_VALUE_ACCESSOR],[2,a["\u0275angular_packages_forms_forms_k"]]],{form:[0,"form"]},null),l["\u0275prd"](2048,null,a.NgControl,null,[a.FormControlDirective]),l["\u0275did"](5,16384,null,0,a.NgControlStatus,[[4,a.NgControl]],null,null),l["\u0275did"](6,802816,null,0,b.a,[l.Renderer2,l.ElementRef],{field:[0,"field"]},null)],function(n,s){var e=s.component;n(s,3,0,e.formControl),n(s,6,0,e.field)},function(n,s){n(s,0,0,s.component.type,l["\u0275nov"](s,5).ngClassUntouched,l["\u0275nov"](s,5).ngClassTouched,l["\u0275nov"](s,5).ngClassPristine,l["\u0275nov"](s,5).ngClassDirty,l["\u0275nov"](s,5).ngClassValid,l["\u0275nov"](s,5).ngClassInvalid,l["\u0275nov"](s,5).ngClassPending,l["\u0275nov"](s,6).field.name,l["\u0275nov"](s,6).to.step)})}function C(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-field-custom-input",[],null,null,null,v,F)),l["\u0275did"](1,49152,null,0,k,[],null,null)],null,null)}var x=l["\u0275ccf"]("formly-field-custom-input",k,C,{field:"field",model:"model",form:"form",options:"options"},{},[]),I=e("pMnS"),S=e("4o01"),O=e("Dl9q"),M=e("9Glx"),_=e("UcnZ"),T=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function R(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,10,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,e){var a=!0,o=n.component;return"submit"===s&&(a=!1!==l["\u0275nov"](n,2).onSubmit(e)&&a),"reset"===s&&(a=!1!==l["\u0275nov"](n,2).onReset()&&a),"ngSubmit"===s&&(a=!1!==o.submit()&&a),a},null,null)),l["\u0275did"](1,16384,null,0,a["\u0275angular_packages_forms_forms_bh"],[],null,null),l["\u0275did"](2,540672,null,0,a.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,a.ControlContainer,null,[a.FormGroupDirective]),l["\u0275did"](4,16384,null,0,a.NgControlStatusGroup,[[4,a.ControlContainer]],null,null),(n()(),l["\u0275eld"](5,0,null,null,1,"formly-form",[],null,null,null,O.b,O.a)),l["\u0275did"](6,966656,null,0,M.a,[_.a,l.ComponentFactoryResolver,[2,a.NgForm],[2,a.FormGroupDirective],[3,M.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),l["\u0275eld"](7,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Submit"])),(n()(),l["\u0275eld"](9,0,null,null,1,"button",[["class","btn btn-default"],["type","button"]],null,[[null,"click"]],function(n,s,e){var l=!0;return"click"===s&&(l=!1!==n.component.options.resetModel()&&l),l},null,null)),(n()(),l["\u0275ted"](-1,null,["Reset"]))],function(n,s){var e=s.component;n(s,2,0,e.form),n(s,6,0,e.model,e.form,e.fields,e.options)},function(n,s){n(s,0,0,l["\u0275nov"](s,4).ngClassUntouched,l["\u0275nov"](s,4).ngClassTouched,l["\u0275nov"](s,4).ngClassPristine,l["\u0275nov"](s,4).ngClassDirty,l["\u0275nov"](s,4).ngClassValid,l["\u0275nov"](s,4).ngClassInvalid,l["\u0275nov"](s,4).ngClassPending)})}function N(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,R,T)),l["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)}var A=l["\u0275ccf"]("formly-app-example",o,N,{},{},[]),E=e("Ip0R"),G=e("M2Lx"),P=e("eDkP"),L=e("Fzqc"),D=e("v9Dh"),q=e("ZYjt"),U=e("Wf4p"),W=e("6LlJ"),J=e("F6kA"),B=e("DAbo"),V=e("dWZg"),Y=e("lLAP"),Z=e("4c35"),H=e("qAlS"),Q=e("La40"),z=e("SMsm"),X=e("UodH"),K=e("5QwG"),$=e("qkla"),nn=e("iZhS"),sn=e("XR12"),en=e("me7w"),ln=e("N3PW"),an=e("l4pn"),on=e("Fv2i"),tn=e("wBYW"),pn=e("IE48"),rn=e("Q4Tx"),mn=e("Nsh5"),cn=e("8mMr"),dn=e("LC5p"),un=e("0/Q6"),fn=e("mqvi"),hn=e("lYui"),yn=e("VGFS"),gn=e("1ey0"),jn=function(){return function(){}}(),bn=e("ZYCi"),wn=e("cIcG");e.d(s,"ConfigModuleNgFactory",function(){return kn});var kn=l["\u0275cmf"](p,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,i.a,m.a,c.a,d.a,u.a,f.a,h.a,y.a,g.a,j.a,x,I.a,S.a,A]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,E.NgLocalization,E.NgLocaleLocalization,[l.LOCALE_ID,[2,E["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,G.c,G.c,[]),l["\u0275mpd"](4608,P.c,P.c,[P.i,P.e,l.ComponentFactoryResolver,P.h,P.f,l.Injector,l.NgZone,E.DOCUMENT,L.b,[2,E.Location]]),l["\u0275mpd"](5120,P.j,P.k,[P.c]),l["\u0275mpd"](5120,D.b,D.c,[P.c]),l["\u0275mpd"](4608,q.HAMMER_GESTURE_CONFIG,U.c,[[2,U.g],[2,U.l]]),l["\u0275mpd"](4608,W.a,W.a,[]),l["\u0275mpd"](4608,J.a,J.a,[]),l["\u0275mpd"](4608,a.FormBuilder,a.FormBuilder,[]),l["\u0275mpd"](4608,a["\u0275angular_packages_forms_forms_j"],a["\u0275angular_packages_forms_forms_j"],[]),l["\u0275mpd"](4608,_.a,_.a,[B.b,l.ComponentFactoryResolver]),l["\u0275mpd"](1073742336,E.CommonModule,E.CommonModule,[]),l["\u0275mpd"](1073742336,V.b,V.b,[]),l["\u0275mpd"](1073742336,G.d,G.d,[]),l["\u0275mpd"](1073742336,Y.a,Y.a,[]),l["\u0275mpd"](1073742336,L.a,L.a,[]),l["\u0275mpd"](1073742336,Z.g,Z.g,[]),l["\u0275mpd"](1073742336,H.c,H.c,[]),l["\u0275mpd"](1073742336,P.g,P.g,[]),l["\u0275mpd"](1073742336,U.l,U.l,[[2,U.d],[2,q.HAMMER_LOADER]]),l["\u0275mpd"](1073742336,D.e,D.e,[]),l["\u0275mpd"](1073742336,U.v,U.v,[]),l["\u0275mpd"](1073742336,Q.j,Q.j,[]),l["\u0275mpd"](1073742336,z.c,z.c,[]),l["\u0275mpd"](1073742336,X.c,X.c,[]),l["\u0275mpd"](1073742336,K.b,K.b,[]),l["\u0275mpd"](512,B.b,B.b,[]),l["\u0275mpd"](1024,B.a,function(n,s){return[{wrappers:[{name:"addons",component:$.a}],extensions:[{name:"addons",extension:{postPopulate:nn.a}}]},sn.b(n),{types:[{name:"input",component:en.a,wrappers:["form-field"]},{name:"checkbox",component:ln.a,wrappers:["form-field"]},{name:"radio",component:an.a,wrappers:["form-field"]},{name:"select",component:on.a,wrappers:["form-field"]},{name:"textarea",component:tn.a,wrappers:["form-field"]},{name:"multicheckbox",component:pn.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:rn.a}]},sn.b(s),{validationMessages:[{name:"required",message:"This field is required"}],types:[{name:"custom",component:k,wrappers:["form-field"]}]}]},[B.b,B.b]),l["\u0275mpd"](1073742336,sn.a,sn.a,[B.b,[2,B.a]]),l["\u0275mpd"](1073742336,mn.h,mn.h,[]),l["\u0275mpd"](1073742336,cn.b,cn.b,[]),l["\u0275mpd"](1073742336,U.m,U.m,[]),l["\u0275mpd"](1073742336,U.t,U.t,[]),l["\u0275mpd"](1073742336,dn.b,dn.b,[]),l["\u0275mpd"](1073742336,un.c,un.c,[]),l["\u0275mpd"](1073742336,fn.a,fn.a,[]),l["\u0275mpd"](1073742336,a["\u0275angular_packages_forms_forms_bc"],a["\u0275angular_packages_forms_forms_bc"],[]),l["\u0275mpd"](1073742336,a.ReactiveFormsModule,a.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,hn.a,hn.a,[]),l["\u0275mpd"](1073742336,yn.a,yn.a,[]),l["\u0275mpd"](1073742336,gn.a,gn.a,[]),l["\u0275mpd"](1073742336,jn,jn,[]),l["\u0275mpd"](1073742336,bn.s,bn.s,[[2,bn.y],[2,bn.p]]),l["\u0275mpd"](1073742336,p,p,[]),l["\u0275mpd"](1024,bn.n,function(){return[[{path:"",component:wn.a,data:t}]]},[])])})},hvFh:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FieldType } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-field-custom-input\'</span>,\n  template: <span class="hljs-string">`\n    &lt;input [type]="type" [formControl]="formControl" [formlyAttributes]="field"&gt;\n  `</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FormlyFieldCustomInput <span class="hljs-keyword">extends</span> FieldType {\n  <span class="hljs-keyword">get</span> <span class="hljs-keyword">type</span>() {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.to.type || <span class="hljs-string">\'text\'</span>;\n  }\n}\n'},ltb9:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-default"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"options.resetModel()"</span>&gt;</span>Reset<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'}}]);
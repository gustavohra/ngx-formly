(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{"2H7Y":function(t,e,i){"use strict";i.r(e),i.d(e,"IonRippleEffect",function(){return a});var n=i("GGff"),a=function(){function t(){this.lastClick=-1e4,this.parent="parent",this.tapClick=!1}return t.prototype.tapClickChanged=function(t){this.enableListener(this,"ionActivated",t,this.parent),this.enableListener(this,"touchstart",!t),this.enableListener(this,"mousedown",!t)},t.prototype.ionActivated=function(t){this.addRipple(t.detail.x,t.detail.y)},t.prototype.touchStart=function(t){this.lastClick=Object(n.a)(t);var e=t.touches[0];this.addRipple(e.clientX,e.clientY)},t.prototype.mouseDown=function(t){var e=Object(n.a)(t);this.lastClick<e-1e3&&this.addRipple(t.pageX,t.pageY)},t.prototype.componentDidLoad=function(){this.tapClickChanged(this.tapClick)},t.prototype.addRipple=function(t,e){var i,n,a,s=this;this.queue.read(function(){var o=s.el.getBoundingClientRect(),r=o.width,p=o.height;a=Math.min(2*Math.sqrt(r*r+p*p),c),i=t-o.left-a/2,n=e-o.top-a/2}),this.queue.write(function(){var t=s.doc.createElement("div");t.classList.add("ripple-effect");var e=t.style,c=Math.max(o*Math.sqrt(a),r);e.top=n+"px",e.left=i+"px",e.width=a+"px",e.height=a+"px",e.animationDuration=c+"ms",(s.el.shadowRoot||s.el).appendChild(t),setTimeout(function(){return t.remove()},c+50)})},t.prototype.render=function(){return null},Object.defineProperty(t,"is",{get:function(){return"ion-ripple-effect"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{addRipple:{method:!0},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},parent:{type:String,attr:"parent"},queue:{context:"queue"},tapClick:{type:Boolean,attr:"tap-click",watchCallbacks:["tapClickChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionActivated",method:"ionActivated",disabled:!0},{name:"touchstart",method:"touchStart",disabled:!0,passive:!0},{name:"mousedown",method:"mouseDown",disabled:!0,passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"[data-ion-ripple-effect-host]{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict}.ripple-effect[data-ion-ripple-effect]{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation-name:rippleAnimation;animation-name:rippleAnimation;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;will-change:transform,opacity;pointer-events:none}@-webkit-keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}@keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}"},enumerable:!0,configurable:!0}),t}(),o=35,r=260,c=550}}]);
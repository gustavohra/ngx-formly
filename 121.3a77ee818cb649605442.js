(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{I8fn:function(t,e,i){"use strict";i.r(e),i.d(e,"IonGesture",function(){return n}),i.d(e,"IonGestureController",function(){return l});var r=i("GGff"),s=function(){function t(t,e,i){this.dirty=!1,this.isPan=0;var r=i*(Math.PI/180);this.isDirX="x"===t,this.maxCosine=Math.cos(r),this.threshold=e*e}return t.prototype.start=function(t,e){this.startX=t,this.startY=e,this.isPan=0,this.dirty=!0},t.prototype.detect=function(t,e){if(!this.dirty)return!1;var i=t-this.startX,r=e-this.startY,s=i*i+r*r;if(s<this.threshold)return!1;var n=Math.sqrt(s),o=(this.isDirX?i:r)/n;return this.isPan=o>this.maxCosine?1:o<-this.maxCosine?-1:0,this.dirty=!1,!0},t.prototype.isGesture=function(){return 0!==this.isPan},t.prototype.getDirection=function(){return this.isPan},t}(),n=function(){function t(){this.positions=[],this.lastTouch=0,this.hasCapturedPan=!1,this.hasStartedPan=!1,this.hasFiredStart=!0,this.isMoveQueued=!1,this.disabled=!1,this.attachTo="child",this.disableScroll=!1,this.direction="x",this.gestureName="",this.gesturePriority=0,this.passive=!0,this.maxAngle=40,this.threshold=10,this.detail={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0}}return t.prototype.componentWillLoad=function(){return t=this,void 0,i=function(){var t;return function(t,e){var i,r,s,n,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return n={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function a(n){return function(a){return function(n){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,r&&(s=2&n[0]?r.return:n[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,n[1])).done)return s;switch(r=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return o.label++,{value:n[1],done:!1};case 5:o.label++,r=n[1],n=[0];continue;case 7:n=o.ops.pop(),o.trys.pop();continue;default:if(!(s=(s=o.trys).length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){o=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){o.label=n[1];break}if(6===n[0]&&o.label<s[1]){o.label=s[1],s=n;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(n);break}s[2]&&o.ops.pop(),o.trys.pop();continue}n=e.call(t,o)}catch(t){n=[6,t],r=0}finally{i=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,a])}}}(this,function(e){switch(e.label){case 0:return this.isServer?[2]:(t=this,[4,this.gestureCtrl.create({name:this.gestureName,priority:this.gesturePriority,disableScroll:this.disableScroll})]);case 1:return t.gesture=e.sent(),[2]}})},new((e=void 0)||(e=Promise))(function(r,s){function n(t){try{a(i.next(t))}catch(t){s(t)}}function o(t){try{a(i.throw(t))}catch(t){s(t)}}function a(t){t.done?r(t.value):new e(function(e){e(t.value)}).then(n,o)}a((i=i.apply(t,[])).next())});var t,e,i},t.prototype.componentDidLoad=function(){this.isServer||(this.pan=new s(this.direction,this.threshold,this.maxAngle),this.disabledChanged(this.disabled))},t.prototype.componentDidUnload=function(){this.gesture&&this.gesture.destroy()},t.prototype.disabledChanged=function(t){this.enableListener(this,"touchstart",!t,this.attachTo,this.passive),this.enableListener(this,"mousedown",!t,this.attachTo,this.passive),t&&this.abortGesture()},t.prototype.onTouchStart=function(t){this.lastTouch=Object(r.a)(t),this.pointerDown(t,this.lastTouch)?(this.enableMouse(!1),this.enableTouch(!0)):this.abortGesture()},t.prototype.onMouseDown=function(t){var e=Object(r.a)(t);(0===this.lastTouch||this.lastTouch+o<e)&&(this.pointerDown(t,e)?(this.enableMouse(!0),this.enableTouch(!1)):this.abortGesture())},t.prototype.pointerDown=function(t,e){if(!this.gesture||this.hasStartedPan||!this.hasFiredStart)return!1;var i=this.detail;return a(t,i),i.startX=i.currentX,i.startY=i.currentY,i.startTimeStamp=i.timeStamp=e,i.velocityX=i.velocityY=i.deltaX=i.deltaY=0,i.event=t,this.positions.length=0,(!this.canStart||!1!==this.canStart(i))&&(this.gesture.release(),!!this.gesture.start()&&(this.positions.push(i.currentX,i.currentY,e),this.hasStartedPan=!0,0===this.threshold?this.tryToCapturePan():(this.pan.start(i.startX,i.startY),!0)))},t.prototype.onTouchMove=function(t){this.lastTouch=this.detail.timeStamp=Object(r.a)(t),this.pointerMove(t)},t.prototype.onMoveMove=function(t){var e=Object(r.a)(t);(0===this.lastTouch||this.lastTouch+o<e)&&(this.detail.timeStamp=e,this.pointerMove(t))},t.prototype.pointerMove=function(t){if(this.hasCapturedPan)!this.isMoveQueued&&this.hasFiredStart&&(this.isMoveQueued=!0,this.calcGestureData(t),this.queue.write(this.fireOnMove.bind(this)));else{var e=this.detail;this.calcGestureData(t),this.pan.detect(e.currentX,e.currentY)&&this.pan.isGesture()&&(this.tryToCapturePan()||this.abortGesture())}},t.prototype.fireOnMove=function(){if(this.hasCapturedPan){var t=this.detail;this.isMoveQueued=!1,this.onMove&&this.onMove(t)}},t.prototype.calcGestureData=function(t){var e=this.detail;a(t,e);var i=e.currentX,r=e.currentY,s=e.timeStamp;e.deltaX=i-e.startX,e.deltaY=r-e.startY,e.event=t;for(var n=s-100,o=this.positions,h=o.length-1;h>0&&o[h]>n;)h-=3;if(h>1){var u=1/(o[h]-s),l=o[h-1]-r;e.velocityX=(o[h-2]-i)*u,e.velocityY=l*u}else e.velocityX=0,e.velocityY=0;o.push(i,r,s)},t.prototype.tryToCapturePan=function(){if(this.gesture&&!this.gesture.capture())return!1;this.hasCapturedPan=!0,this.hasFiredStart=!1;var t=this.detail;return t.startX=t.currentX,t.startY=t.currentY,t.startTimeStamp=t.timeStamp,this.onWillStart?this.onWillStart(this.detail).then(this.fireOnStart.bind(this)):this.fireOnStart(),!0},t.prototype.fireOnStart=function(){this.onStart&&this.onStart(this.detail),this.hasFiredStart=!0},t.prototype.abortGesture=function(){this.reset(),this.enable(!1),this.notCaptured&&this.notCaptured(this.detail)},t.prototype.reset=function(){this.hasCapturedPan=!1,this.hasStartedPan=!1,this.isMoveQueued=!1,this.hasFiredStart=!0,this.gesture&&this.gesture.release()},t.prototype.onTouchCancel=function(t){this.lastTouch=this.detail.timeStamp=Object(r.a)(t),this.pointerUp(t),this.enableTouch(!1)},t.prototype.onMouseUp=function(t){var e=Object(r.a)(t);(0===this.lastTouch||this.lastTouch+o<e)&&(this.detail.timeStamp=e,this.pointerUp(t),this.enableMouse(!1))},t.prototype.pointerUp=function(t){var e=this.hasCapturedPan,i=this.hasFiredStart;if(this.reset(),i){var r=this.detail;this.calcGestureData(t),e?this.onEnd&&this.onEnd(r):this.notCaptured&&this.notCaptured(r)}},t.prototype.enableMouse=function(t){this.enableListener(this,"document:mousemove",t,void 0,this.passive),this.enableListener(this,"document:mouseup",t,void 0,this.passive)},t.prototype.enableTouch=function(t){this.enableListener(this,"touchmove",t,this.attachTo,this.passive),this.enableListener(this,"touchcancel",t,this.attachTo,this.passive),this.enableListener(this,"touchend",t,this.attachTo,this.passive)},t.prototype.enable=function(t){this.enableMouse(t),this.enableTouch(t)},Object.defineProperty(t,"is",{get:function(){return"ion-gesture"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{attachTo:{type:String,attr:"attach-to"},canStart:{type:"Any",attr:"can-start"},direction:{type:String,attr:"direction"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},disableScroll:{type:Boolean,attr:"disable-scroll"},enableListener:{context:"enableListener"},gestureCtrl:{connect:"ion-gesture-controller"},gestureName:{type:String,attr:"gesture-name"},gesturePriority:{type:Number,attr:"gesture-priority"},isServer:{context:"isServer"},maxAngle:{type:Number,attr:"max-angle"},notCaptured:{type:"Any",attr:"not-captured"},onEnd:{type:"Any",attr:"on-end"},onMove:{type:"Any",attr:"on-move"},onStart:{type:"Any",attr:"on-start"},onWillStart:{type:"Any",attr:"on-will-start"},passive:{type:Boolean,attr:"passive"},queue:{context:"queue"},threshold:{type:Number,attr:"threshold"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"touchstart",method:"onTouchStart",disabled:!0,passive:!0},{name:"mousedown",method:"onMouseDown",disabled:!0,passive:!0},{name:"touchmove",method:"onTouchMove",disabled:!0,passive:!0},{name:"document:mousemove",method:"onMoveMove",disabled:!0,passive:!0},{name:"touchcancel",method:"onTouchCancel",disabled:!0,passive:!0},{name:"touchend",method:"onTouchCancel",disabled:!0,passive:!0},{name:"document:mouseup",method:"onMouseUp",disabled:!0,passive:!0}]},enumerable:!0,configurable:!0}),t}(),o=2500;function a(t,e){var i=0,r=0;if(t){var s=t.changedTouches;if(s&&s.length>0){var n=s[0];i=n.clientX,r=n.clientY}else void 0!==t.pageX&&(i=t.pageX,r=t.pageY)}e.currentX=i,e.currentY=r}var h=function(){function t(t,e,i,r,s){this.id=e,this.name=i,this.priority=r,this.disableScroll=s,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),u=function(){function t(t,e,i,r){this.id=t,this.disable=i,this.disableScroll=r,this.ctrl=e}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),l=function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set,this.capturedId=null}return t.prototype.create=function(t){return Promise.resolve(new h(this,this.newID(),t.name,t.priority?t.priority:0,!!t.disableScroll))},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new u(this.newID(),this,t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,i){return this.canStart(t)?(this.requestedStart.set(e,i),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,i){if(!this.start(t,e,i))return!1;var r=this.requestedStart,s=-1e4;return r.forEach(function(t){s=Math.max(s,t)}),s===i?(this.capturedId=e,r.clear(),this.ionGestureCaptured&&this.ionGestureCaptured.emit(t),!0):(r.delete(e),!1)},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId&&t===this.capturedId&&(this.capturedId=null)},t.prototype.disableGesture=function(t,e){var i=this.disabledGestures.get(t);i||(i=new Set,this.disabledGestures.set(t,i)),i.add(e)},t.prototype.enableGesture=function(t,e){var i=this.disabledGestures.get(t);i&&i.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t)},t.prototype.canStart=function(t){return!this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return!!this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},Object.defineProperty(t,"is",{get:function(){return"ion-gesture-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0},createBlocker:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionGestureCaptured",method:"ionGestureCaptured",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}()}}]);
(function(e){function t(t){for(var i,o,l=t[0],r=t[1],u=t[2],d=0,v=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);c&&c(t);while(v.length)v.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],i=!0,l=1;l<s.length;l++){var r=s[l];0!==n[r]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=s[0]))}return e}var i={},n={app:0},a=[];function o(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=i,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(s,i,function(t){return e[t]}.bind(null,i));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/tests/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=r;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"085b":function(e,t,s){"use strict";s("d339")},"0a74":function(e,t,s){},"1b44":function(e,t,s){},"1ddb":function(e,t,s){},"21bb":function(e,t,s){"use strict";s("4850")},4585:function(e,t,s){"use strict";s("1ddb")},"477a":function(e,t,s){"use strict";s("4cf5")},4836:function(e,t,s){},4850:function(e,t,s){},"4cf5":function(e,t,s){},"519f":function(e,t,s){"use strict";s("4836")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"menu",class:e.classMenuVisible},[s("div",{staticClass:"header-menu"},[s("i",{directives:[{name:"show",rawName:"v-show",value:!e.isMobileView,expression:"!isMobileView"}],staticClass:"fas",class:e.menuVisible?["fa-arrow-left","menu-icon"]:["fa-bars","open-icon"],on:{click:e.changeMenuVisible}}),s("i",{directives:[{name:"show",rawName:"v-show",value:e.isMobileView,expression:"isMobileView"}],staticClass:"fas menu-icon",class:e.menuVisible?"fa-times":"fa-bars",on:{click:e.changeMenuVisible}}),s("span",{staticClass:"menu-title"},[e._v("тесты")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.menuVisible,expression:"menuVisible"}]},[s("ul",{class:{"menu-list":!e.isMobileView,"mobile-menu-list":e.isMobileView}},e._l(e.tests,(function(t,i){return s("li",{key:"test-"+i,staticClass:"menu-item"},[s("div",{staticClass:"menu-link",on:{click:function(s){return e.goToTest(t)}}},[s("i",{staticClass:"fas fa-circle"}),e._v(e._s(t.title))])])})),0)])]),s("div",{staticClass:"menu-hidden"},[s("i",{staticClass:"fas fa-bars open-icon",on:{click:e.changeMenuVisible}})]),e.isMobileView?e._e():s("div",{class:{"content-menu-active":e.menuVisible,"content-menu-hidden":!e.menuVisible}},[s("router-view")],1),e.isMobileView?s("div",{directives:[{name:"show",rawName:"v-show",value:!e.menuVisible,expression:"!menuVisible"}],class:{"content-menu-active":e.menuVisible,"content-menu-hidden":!e.menuVisible}},[s("router-view")],1):e._e()])},a=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[e._v(" Выберите тест из списка ")])},l=[],r={name:"Home"},u=r,c=(s("21bb"),s("2877")),d=Object(c["a"])(u,o,l,!1,null,null,null),v=d.exports,m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v(" Ghbdtn! ")])},p=[],h={name:"MobileMenu"},w=h,f=(s("4585"),Object(c["a"])(w,m,p,!1,null,null,null)),b=f.exports,g=[{id:1,title:"Test`s name",description:"Описание теста Test`s name",questions:[{id:1,value:"Вопрос",correctAnswer:"Вариант А",userAnswer:null,answers:[{id:1,value:"Вариант А"},{id:2,value:"Вариант Б"},{id:3,value:"Вариант В"},{id:4,value:"Вариант Г"},{id:5,value:"Вариант Д"},{id:6,value:"Вариант E"}]},{id:2,value:"Вопрос",correctAnswer:"Вариант Б",userAnswer:null,answers:[{id:1,value:"Вариант А"},{id:2,value:"Вариант Б"},{id:3,value:"Вариант В"},{id:4,value:"Вариант Г"},{id:5,value:"Вариант Д"},{id:6,value:"Вариант E"}]},{id:3,value:"Вопрос",correctAnswer:"Вариант В",userAnswer:null,answers:[{id:1,value:"Вариант А"},{id:2,value:"Вариант Б"},{id:3,value:"Вариант В"},{id:4,value:"Вариант Г"},{id:5,value:"Вариант Д"},{id:6,value:"Вариант E"}]},{id:4,value:"Вопрос",correctAnswer:"Вариант А",userAnswer:null,answers:[{id:1,value:"Вариант А"},{id:2,value:"Вариант Б"},{id:3,value:"Вариант В"},{id:4,value:"Вариант Г"},{id:5,value:"Вариант Д"},{id:6,value:"Вариант E"}]},{id:5,value:"Вопрос",correctAnswer:"Lorem ipsum sit amet, consectetur adipiscing elit.",userAnswer:null,answers:[{id:1,value:"Lorem ipsum sit amet, consectetur adipiscing elit."},{id:2,value:"Lorem ipsum dolor sit amet, consectetur adipsicing elit. Aliquam sollicitudin odio sit amet."},{id:3,value:"Lorem ipsum dolor sit amet, aliquam sollicitudin odio sit amet."}]}]},{id:2,title:"Another Test",description:"Описание теста Another Test",questions:[{id:1,value:"Вопрос",correctAnswer:"Вариант А",userAnswer:null,answers:[{id:1,value:"Вариант А"},{id:2,value:"Вариант Б"},{id:3,value:"Вариант В"},{id:4,value:"Вариант Г"},{id:5,value:"Вариант Д"},{id:6,value:"Вариант E"}]},{id:2,value:"Вопрос",correctAnswer:"Вариант Б",userAnswer:null,answers:[{id:1,value:"Вариант А"},{id:2,value:"Вариант Б"},{id:3,value:"Вариант В"},{id:4,value:"Вариант Г"},{id:5,value:"Вариант Д"},{id:6,value:"Вариант E"}]},{id:3,value:"Вопрос",correctAnswer:"Вариант В",userAnswer:null,answers:[{id:1,value:"Вариант А"},{id:2,value:"Вариант Б"},{id:3,value:"Вариант В"},{id:4,value:"Вариант Г"},{id:5,value:"Вариант Д"},{id:6,value:"Вариант E"}]},{id:4,value:"Вопрос",correctAnswer:"Вариант А",userAnswer:null,answers:[{id:1,value:"Вариант А"},{id:2,value:"Вариант Б"},{id:3,value:"Вариант В"},{id:4,value:"Вариант Г"},{id:5,value:"Вариант Д"},{id:6,value:"Вариант E"}]},{id:5,value:"Вопрос",correctAnswer:"Lorem ipsum sit amet, consectetur adipiscing elit.",userAnswer:null,answers:[{id:1,value:"Lorem ipsum sit amet, consectetur adipiscing elit."},{id:2,value:"Lorem ipsum dolor sit amet, consectetur adipsicing elit. Aliquam sollicitudin odio sit amet."},{id:3,value:"Lorem ipsum dolor sit amet, aliquam sollicitudin odio sit amet."}]}]},{id:3,title:"Test",description:"Описание теста Test",questions:[{id:1,value:"Вопрос",correctAnswer:"Вариант А",userAnswer:null,answers:[{id:1,value:"Вариант А"},{id:2,value:"Вариант Б"},{id:3,value:"Вариант В"},{id:4,value:"Вариант Г"},{id:5,value:"Вариант Д"},{id:6,value:"Вариант E"}]},{id:2,value:"Вопрос",correctAnswer:"Вариант Б",userAnswer:null,answers:[{id:1,value:"Вариант А"},{id:2,value:"Вариант Б"},{id:3,value:"Вариант В"},{id:4,value:"Вариант Г"},{id:5,value:"Вариант Д"},{id:6,value:"Вариант E"}]},{id:3,value:"Вопрос",correctAnswer:"Вариант В",userAnswer:null,answers:[{id:1,value:"Вариант А"},{id:2,value:"Вариант Б"},{id:3,value:"Вариант В"},{id:4,value:"Вариант Г"},{id:5,value:"Вариант Д"},{id:6,value:"Вариант E"}]},{id:4,value:"Вопрос",correctAnswer:"Вариант А",userAnswer:null,answers:[{id:1,value:"Вариант А"},{id:2,value:"Вариант Б"},{id:3,value:"Вариант В"},{id:4,value:"Вариант Г"},{id:5,value:"Вариант Д"},{id:6,value:"Вариант E"}]},{id:5,value:"Вопрос",correctAnswer:"Lorem ipsum sit amet, consectetur adipiscing elit.",userAnswer:null,answers:[{id:1,value:"Lorem ipsum sit amet, consectetur adipiscing elit."},{id:2,value:"Lorem ipsum dolor sit amet, consectetur adipsicing elit. Aliquam sollicitudin odio sit amet."},{id:3,value:"Lorem ipsum dolor sit amet, aliquam sollicitudin odio sit amet."}]}]},{id:4,title:"Название теста",description:"Описание теста Название теста",questions:[{id:1,value:"Вопрос",correctAnswer:"Вариант А",userAnswer:null,answers:[{id:1,value:"Вариант А"},{id:2,value:"Вариант Б"},{id:3,value:"Вариант В"},{id:4,value:"Вариант Г"},{id:5,value:"Вариант Д"},{id:6,value:"Вариант E"}]},{id:2,value:"Вопрос",correctAnswer:"Вариант Б",userAnswer:null,answers:[{id:1,value:"Вариант А"},{id:2,value:"Вариант Б"},{id:3,value:"Вариант В"},{id:4,value:"Вариант Г"},{id:5,value:"Вариант Д"},{id:6,value:"Вариант E"}]},{id:3,value:"Вопрос",correctAnswer:"Вариант В",userAnswer:null,answers:[{id:1,value:"Вариант А"},{id:2,value:"Вариант Б"},{id:3,value:"Вариант В"},{id:4,value:"Вариант Г"},{id:5,value:"Вариант Д"},{id:6,value:"Вариант E"}]},{id:4,value:"Вопрос",correctAnswer:"Вариант А",userAnswer:null,answers:[{id:1,value:"Вариант А"},{id:2,value:"Вариант Б"},{id:3,value:"Вариант В"},{id:4,value:"Вариант Г"},{id:5,value:"Вариант Д"},{id:6,value:"Вариант E"}]},{id:5,value:"Вопрос",correctAnswer:"Lorem ipsum sit amet, consectetur adipiscing elit.",userAnswer:null,answers:[{id:1,value:"Lorem ipsum sit amet, consectetur adipiscing elit."},{id:2,value:"Lorem ipsum dolor sit amet, consectetur adipsicing elit. Aliquam sollicitudin odio sit amet."},{id:3,value:"Lorem ipsum dolor sit amet, aliquam sollicitudin odio sit amet."}]}]}],_={name:"App",components:{Home:v,MobileMenu:b},data:function(){return{menuVisible:!0,tests:g,isMobileView:!1,width:0}},created:function(){this.handleView(),window.addEventListener("resize",this.handleView)},computed:{classMenuVisible:function(){return{"menu-hidden-slide-in":this.menuVisible&&!this.isMobileView,"menu-slide-out":!this.menuVisible&&!this.isMobileView}}},beforeDestroy:function(){window.removeEventListener("resize",this.handleView)},methods:{changeMenuVisible:function(){this.menuVisible=!this.menuVisible},goToTest:function(e){e.id&&(this.$router.push({name:"testDescription",params:{testId:e.id,selectedTest:e}}),this.isMobileView&&(this.menuVisible=!1))},handleView:function(){window.innerWidth<=550?(this.isMobileView=!0,this.menuVisible=!1):(this.isMobileView=!1,this.menuVisible=!0)}}},A=_,T=(s("519f"),Object(c["a"])(A,n,a,!1,null,"363563c5",null)),C=T.exports,M=s("9483");Object(M["a"])("".concat("/tests/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var x=s("8c4f"),S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"test-descriptions"},[s("header",{staticClass:"title"},[e._v(" Описание ")]),s("div",{staticClass:"about-test"},[s("div",{staticClass:"description"},[e._v(" "+e._s(e.selectedTest.description)+" ")]),s("div",{staticClass:"buttons"},[s("router-link",{staticClass:"button-description",attrs:{to:{name:"testQuestions",params:{test:e.selectedTest}}}},[e._v("начать")]),s("router-link",{staticClass:"button-description",attrs:{to:"/"}},[e._v("отмена")])],1)])])},V=[],q={name:"TestDescription",props:{selectedTest:{}}},O=q,k=(s("585d"),Object(c["a"])(O,S,V,!1,null,"564a8949",null)),y=k.exports,E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tests-questions"},[s("header",{staticClass:"row"},[s("exit-modal",{directives:[{name:"show",rawName:"v-show",value:e.isShowModal,expression:"isShowModal"}],attrs:{selectedTest:e.selectedTest},on:{close:e.toggleModal}}),s("div",{staticClass:"button-exit",on:{click:e.toggleModal}},[e._v("выход")]),s("div",{staticClass:"title"},[e._v(e._s(e.selectedTest.title))]),s("div",{staticClass:"header-right-block"},[s("span",{staticClass:"button-cancel-answers",on:{click:e.cancelUserAnswer}},[e._v("Сбросить все ответы")]),e._v(" "),s("span",{staticClass:"space"},[e._v("|")]),s("span",[e._v(" "+e._s(e.numberAnswers)+" / "+e._s(e.totalQuestions))]),e._v(" "),s("span",{staticClass:"space"},[e._v("|")]),s("span",[e._v(e._s(e.timeOutput.hours)+":"+e._s(e.timeOutput.minutes)+":"+e._s(e.timeOutput.seconds))])])],1),s("section",{staticClass:"container-tests"},e._l(e.selectedTest.questions,(function(t,i){return s("div",{key:"question-"+i,staticClass:"questions"},[s("div",{staticClass:"question"},[e._v(e._s(t.id)+"."+e._s(t.value))]),s("div",{staticClass:"answers"},e._l(t.answers,(function(i,n){return s("div",{key:"answer-"+n,staticClass:"row-answer"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userAnswer,expression:"question.userAnswer"}],staticClass:"point-answer",attrs:{type:"radio"},domProps:{value:i.value,checked:e._q(t.userAnswer,i.value)},on:{change:function(s){return e.$set(t,"userAnswer",i.value)}}}),s("label",[e._v(e._s(i.value))])])})),0)])})),0),s("button-footer",{attrs:{textButton:e.textButton},nativeOn:{click:function(t){return e.testFinished(e.selectedTest)}}})],1)},j=[],L=(s("fb6a"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"button-footer"},[s("button",{staticClass:"o-button"},[e._v(e._s(e.textButton))])])}),N=[],$={name:"ButtonFooter",props:{textButton:String}},B=$,I=(s("f6ae"),Object(c["a"])(B,L,N,!1,null,null,null)),P=I.exports,Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"exit-modal",on:{click:e.closeModal}},[s("div",{staticClass:"background"}),s("div",{staticClass:"exit-modal-container",on:{click:function(e){e.stopPropagation()}}},[s("div",{staticClass:"exit-modal-content"},[s("span",{staticClass:"modal-header"},[e._v("Вы уверены, что хотите выйти?")]),s("span",{staticClass:"modal-body"},[e._v("Все результаты будут сброшены")]),s("div",{staticClass:"buttons-modal"},[s("button",{staticClass:"button-modal",on:{click:e.exitTest}},[e._v("выход")]),s("button",{staticClass:"button-modal",on:{click:e.closeModal}},[e._v("отмена")])])])])])},U=[],J={name:"exitModal",props:{selectedTest:{}},data:function(){return{isShowModal:!1}},methods:{closeModal:function(){this.$emit("close")},exitTest:function(){this.cancelUserAnswer(),this.$router.push({name:"home"})},cancelUserAnswer:function(){var e=0;for(e;e<this.selectedTest.questions.length;e++)this.selectedTest.questions[e].userAnswer=null}}},F=J,D=(s("477a"),Object(c["a"])(F,Q,U,!1,null,null,null)),R=D.exports,z={name:"TestQuestions",components:{ButtonFooter:P,exitModal:R},props:{test:{}},data:function(){return{textButton:"Завершить",isShowModal:!1,selectedTest:{},startTime:0,time:{hours:0,minutes:0,seconds:0}}},mounted:function(){this.getTest(),this.startTime=(new Date).getTime(),this.displayTimer()},computed:{totalQuestions:function(){var e,t;return null===(e=this.selectedTest)||void 0===e||null===(t=e.questions)||void 0===t?void 0:t.length},numberAnswers:function(){var e,t,s=null===(e=this.selectedTest)||void 0===e||null===(t=e.questions)||void 0===t?void 0:t.length;if(0!==s){for(var i=0,n=0;n<s;n++)null!==this.selectedTest.questions[n].userAnswer&&i++;return i}},timeOutput:function(){return{hours:("0"+this.time.hours).slice(-2),minutes:("0"+this.time.minutes).slice(-2),seconds:("0"+this.time.seconds).slice(-2)}}},watch:{selectedTest:function(){sessionStorage.setItem("selected-test",JSON.stringify(this.selectedTest))}},methods:{getTest:function(){var e=sessionStorage.getItem("selected-test");this.test?this.selectedTest=this.test:e&&(this.selectedTest=JSON.parse(e))},testFinished:function(e){this.$router.push({name:"testResult",params:{test:e,time:this.timeOutput}})},toggleModal:function(){this.isShowModal=!this.isShowModal},countUpTimer:function(){var e=Math.floor((Date.now()-this.startTime)/1e3);this.time.seconds=e,this.time.seconds>59&&(this.time.minutes+=1,this.time.seconds=0),this.time.minutes>59&&(this.time.hours+=1,this.time.minutes=0)},displayTimer:function(){setInterval(this.countUpTimer,1e3)},cancelUserAnswer:function(){var e=0;for(e;e<this.test.questions.length;e++)this.test.questions[e].userAnswer=null}}},H=z,G=(s("e53c"),Object(c["a"])(H,E,j,!1,null,null,null)),W=G.exports,K=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"test-result"},[s("header",{staticClass:"row"},[s("exit-modal",{directives:[{name:"show",rawName:"v-show",value:e.isShowModal,expression:"isShowModal"}],attrs:{selectedTest:e.selectedTest},on:{close:e.toggleModal}}),s("div",{staticClass:"button-exit",on:{click:e.toggleModal}},[e._v("выход")]),s("div",{staticClass:"title"},[e._v(e._s(e.selectedTest.title))]),s("div",{staticClass:"header-right-block"},[s("span",{staticClass:"button-cancel-answers",on:{click:e.cancelUserAnswer}},[e._v("Сбросить все ответы")]),e._v(" "),s("span",{staticClass:"space"},[e._v("|")]),s("span",[e._v(" "+e._s(e.numberCorrectAnswer)+" / "+e._s(e.totalQuestions))]),e._v(" "),s("span",{staticClass:"space"},[e._v("|")]),s("span",[e._v(e._s(e.timeSpent.hours)+":"+e._s(e.timeSpent.minutes)+":"+e._s(e.timeSpent.seconds))])])],1),s("section",{staticClass:"container-results"},[s("span",{staticClass:"text-test-finish"},[e._v("Тест завершён")]),s("span",{staticClass:"number-correct-answer"},[e._v("Вы ответили на "+e._s(e.numberCorrectAnswer)+" из "+e._s(e.totalQuestions)+" вопросов.")]),s("span",{staticClass:"text-your-answers"},[e._v("Ваши ответы")]),e._l(e.selectedTest.questions,(function(e,t){return s("div",{key:"q-"+t},[s("result",{attrs:{id:e.id,question:e.value,correctAnswer:e.correctAnswer,userAnswer:e.userAnswer?e.userAnswer:"Не ответили"}})],1)}))],2),s("button-footer",{attrs:{textButton:e.textButton},nativeOn:{click:function(t){return e.openTestAgain(e.selectedTest)}}})],1)},X=[],Y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"result"},[s("div",{staticClass:"question"},[e._v(e._s(e.id)+". "+e._s(e.question))]),s("div",{staticClass:"answer"},[s("div",[e._v("Правильный ответ: "+e._s(e.correctAnswer)+".")]),s("div",[e._v("Вы ответили: "+e._s(e.userAnswer)+".")])])])},Z=[],ee=(s("a9e3"),{name:"Result",props:{id:Number,question:String,correctAnswer:String,userAnswer:String}}),te=ee,se=(s("aada"),Object(c["a"])(te,Y,Z,!1,null,null,null)),ie=se.exports,ne={name:"TestResult",components:{exitModal:R,ButtonFooter:P,Result:ie},props:{test:{},time:{}},data:function(){return{selectedTest:{},timeSpent:0,numberCorrectAnswer:0,textButton:"Пройти еще раз",isShowModal:!1}},computed:{totalQuestions:function(){return this.selectedTest.questions.length}},created:function(){this.getTest(),this.getTimeSpent(),this.countCorrectAnswer()},watch:{selectedTest:function(){sessionStorage.setItem("test",JSON.stringify(this.selectedTest))},timeSpent:function(){sessionStorage.setItem("time-spent",JSON.stringify(this.timeSpent))}},methods:{getTest:function(){var e=sessionStorage.getItem("test");this.test?this.selectedTest=this.test:e&&(this.selectedTest=JSON.parse(e))},getTimeSpent:function(){var e=sessionStorage.getItem("time-spent");this.time?this.timeSpent=this.time:e&&(this.timeSpent=JSON.parse(e))},countCorrectAnswer:function(){var e=0;for(e;e<this.selectedTest.questions.length;e++)this.selectedTest.questions[e].correctAnswer===this.selectedTest.questions[e].userAnswer&&this.numberCorrectAnswer++},cancelUserAnswer:function(){var e=0;for(e;e<this.selectedTest.questions.length;e++)this.selectedTest.questions[e].userAnswer=null},openTestAgain:function(e){this.cancelUserAnswer(),this.$router.push({name:"testQuestions",params:{test:e}})},toggleModal:function(){this.isShowModal=!this.isShowModal}}},ae=ne,oe=(s("085b"),Object(c["a"])(ae,K,X,!1,null,null,null)),le=oe.exports;i["a"].use(x["a"]);var re=[{path:"/",name:"home",component:v},{path:"/test-description/:testId",name:"testDescription",component:y,props:!0},{path:"/test-questions",name:"testQuestions",component:W,props:!0},{path:"/test-result",name:"testResult",component:le,props:!0},{path:"/mobile-menu",name:"mobileMenu",component:b,props:!0}],ue=new x["a"]({mode:"history",base:"/tests/",routes:re}),ce=ue,de=s("2f62");i["a"].use(de["a"]);var ve=new de["a"].Store({state:{},mutations:{},actions:{},modules:{}});s("9672"),s("b383"),s("c565");i["a"].config.productionTip=!1,new i["a"]({router:ce,store:ve,render:function(e){return e(C)}}).$mount("#app")},"585d":function(e,t,s){"use strict";s("e77d")},9672:function(e,t,s){},aada:function(e,t,s){"use strict";s("0a74")},b383:function(e,t,s){},c565:function(e,t,s){},d339:function(e,t,s){},e53c:function(e,t,s){"use strict";s("edef")},e77d:function(e,t,s){},edef:function(e,t,s){},f6ae:function(e,t,s){"use strict";s("1b44")}});
//# sourceMappingURL=app.b8554333.js.map
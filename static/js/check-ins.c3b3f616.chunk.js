webpackJsonp([4],{1001:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(31),c=t(937),i=t(1002),u=t(1007),l=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n"],["\n"]),s=o.b.div(l),f=function(e){var n=[{name:"Check in form",content:i.a},{name:"Event Messenger Code",content:u.a}];return a.a.createElement(s,null,a.a.createElement(c.a,{panes:n}))};n.a=f},1002:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(1003),c=t(1006),i=function(){return a.a.createElement(o.a,null,function(e){return a.a.createElement(c.a,e)})};n.a=i},1003:function(e,n,t){"use strict";function r(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function r(a,o){try{var c=n[a](o),i=c.value}catch(e){return void t(e)}if(!c.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function c(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var u=t(224),l=t.n(u),s=t(0),f=(t.n(s),t(222)),p=t(83),m=t(1004),d=t(84),b=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),v=function(e){function n(){var e,t,i,u,s=this;o(this,n);for(var f=arguments.length,p=Array(f),m=0;m<f;m++)p[m]=arguments[m];return t=i=c(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(p))),i.state={user:{},success:!1,loading:!1,feedback_url:""},i.handleChange=function(e,n){var t=e.target,r=t.value,o=t.name,c=t.innerText;i.setState({user:Object.assign({},i.state.user,a({},o||n,Boolean(r)?r:c))})},i.handleSubmit=function(){var e=r(l.a.mark(function e(n){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i.setState({loading:!0}),e.next=3,i.props.checkInByForm(i.props.event.id,i.state.user);case 3:t=e.sent,t&&i.setState({success:!0,loading:!1,feedback_url:t.feedback_url});case 5:case"end":return e.stop()}},e,s)}));return function(n){return e.apply(this,arguments)}}(),i.getStateAndActions=function(){return Object.assign({},i.props,i.state,{handleChange:i.handleChange,handleSubmit:i.handleSubmit})},u=t,c(i,u)}return i(n,e),b(n,[{key:"componentWillMount",value:function(e){d.b.currentUser&&this.setState({user:d.b.currentUser})}},{key:"render",value:function(){return this.props.children(this.getStateAndActions())}}]),n}(s.Component),h=function(e,n){return{event:e.events.event}},g=function(e){return Object(p.b)({checkInByForm:m.a},e)};n.a=Object(f.b)(h,g)(v)},1004:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t(1005),a=t(421),o=(t(423),function(e,n){var t=Object(a.a)({requestType:r.a.CHECK_IN_START,receiveType:r.a.CHECK_IN_COMPLETE,failType:r.a.CHECK_IN_FAIL});return Object(a.b)({actions:t,data:n,errorMessage:"Something prevented creating an event",caller:"new event",route:"/api/v1/web/events/"+e+"/check_ins",requestMethod:"POST"})})},1005:function(e,n,t){"use strict";var r=t(225),a=t.n(r);n.a=a()({CHECK_IN_START:null,CHECK_IN_COMPLETE:null,CHECK_IN_FAIL:null})},1006:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(58),c=t(31),i=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  > form {\n    > .field {\n      > label {\n        padding: 20px 0 10px;\n      }\n      \n      &:nth-last-child(2) {\n        margin: 30px 0 20px;\n      }\n    }\n  }\n"],["\n  > form {\n    > .field {\n      > label {\n        padding: 20px 0 10px;\n      }\n      \n      &:nth-last-child(2) {\n        margin: 30px 0 20px;\n      }\n    }\n  }\n"]),u=c.b.div(i),l=[{key:"m",text:"Male",value:"male"},{key:"f",text:"Female",value:"female"}],s=function(e){var n=e.url;return a.a.createElement(o.m,{info:!0},a.a.createElement(o.m.Header,null,"Help us get better with your feedback!"),a.a.createElement("p",null,"Claim your event swags by completing ",a.a.createElement("a",{href:n,target:"_blank"},"this feedback form")," towards the end. Thank you and welcome again!"))},f=function(e){var n=e.user,t=void 0===n?{}:n,r=e.handleChange,c=e.handleSubmit,i=e.success,f=e.loading,p=e.feedback_url;return a.a.createElement(u,null,a.a.createElement(o.g,{loading:f,success:i},a.a.createElement(o.m,{success:!0,header:"Welcome!",content:"You've successfully checked into this event!"}),p&&a.a.createElement(s,{url:p}),a.a.createElement(o.g.Field,null,a.a.createElement("label",null,"First Name"),a.a.createElement("input",{name:"first_name",value:t.first_name,placeholder:"Ciroma",onChange:r})),a.a.createElement(o.g.Field,null,a.a.createElement("label",null,"Last Name"),a.a.createElement("input",{name:"last_name",value:t.last_name,placeholder:"Chukwuma",onChange:r})),a.a.createElement(o.g.Field,null,a.a.createElement("label",null,"Email"),a.a.createElement("input",{name:"email",value:t.email,placeholder:"ciroma@chukwuma.com",onChange:r})),a.a.createElement(o.g.Field,null,a.a.createElement("label",null,"Gender"),a.a.createElement(o.p,{onChange:function(e){return r(e,"gender")},defaultValue:t.gender,placeholder:"Gender",options:l})),a.a.createElement(o.g.Field,null,a.a.createElement(o.d,{label:"I agree to the Terms and Conditions"})),a.a.createElement(o.b,{type:"submit",onClick:c},"Submit")))};n.a=f},1007:function(e,n,t){"use strict";var r=t(1008);t.d(n,"a",function(){return r.a})},1008:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(1009),c=t(1010),i=function(){return a.a.createElement(o.a,null,function(e){return a.a.createElement(c.a,e)})};n.a=i},1009:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var c=t(0),i=(t.n(c),t(38)),u=t(222),l=(t(83),function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}()),s=function(e){function n(){return r(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,e),l(n,[{key:"render",value:function(){return this.props.children(Object.assign({},this.props))}}]),n}(c.Component),f=function(e,n){return{event:e.events.event}};n.a=Object(i.g)(Object(u.b)(f)(s))},1010:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(31),c=t(427),i=(t.n(c),function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  > img {\n    width: 100%;\n  }\n"],["\n  > img {\n    width: 100%;\n  }\n"])),u=o.b.div(i),l=function(e){var n=e.event,t=void 0===n?{}:n;return a.a.createElement(u,null,a.a.createElement("p",null,"Scan this code on Facebook messenger to check into this event"),a.a.createElement("img",{src:t.barcode_url}))};n.a=l},937:function(e,n,t){"use strict";var r=t(938);t.d(n,"a",function(){return r.a})},938:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(58),c=(t(134),t(31)),i=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  > div {\n  \n    .ui.secondary.pointing.menu {\n      display: flex;\n      border-bottom-width: 1px;\n\n      .item {\n        flex: 1;\n\n        &.active {\n          border-color: var(--activeLink);\n          margin: 0 0 -1px;\n\n          &:hover {\n            border-color: var(--activeLink);\n          }\n        }\n      }\n    }\n  }\n"],["\n  > div {\n  \n    .ui.secondary.pointing.menu {\n      display: flex;\n      border-bottom-width: 1px;\n\n      .item {\n        flex: 1;\n\n        &.active {\n          border-color: var(--activeLink);\n          margin: 0 0 -1px;\n\n          &:hover {\n            border-color: var(--activeLink);\n          }\n        }\n      }\n    }\n  }\n"]),u=c.b.div(i),l=function(e){return e.map(function(e){return{menuItem:e.name,render:function(){return a.a.createElement(o.r.Pane,{attached:!1},a.a.createElement(e.content,null))}}})},s=function(e){var n=e.panes;return a.a.createElement(u,null,a.a.createElement(o.r,{menu:{secondary:!0,pointing:!0},panes:l(n)}))};n.a=s},958:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1001);t.d(n,"default",function(){return r.a})}});
//# sourceMappingURL=check-ins.c3b3f616.chunk.js.map
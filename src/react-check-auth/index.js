/* eslint-disable */
// This is a merge of two OPEN PRs in the main repo, checkauth hook and isLoading fix
!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t(require("react"));else if("function"===typeof define&&define.amd)define(["react"],t);else{var n=t("object"===typeof exports?require("react"):e.react);for(var r in n)("object"===typeof exports?exports:e)[r]=n[r]}}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(t,n){t.exports=e},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=t.Consumer=t.Provider=t.AuthContext=void 0;var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),u={isLoading:!0,userInfo:null,error:null,refreshAuth:function(){return!0}},i=o.default.createContext(u),a=i.Provider,f=i.Consumer;t.AuthContext=i,t.Provider=a,t.Consumer=f,t.defaultState=u},function(e,t,n){e.exports=n(3)},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.useCheckAuth=t.AuthConsumer=t.AuthProvider=void 0;var o=n(4),u=r(o),i=n(8),a=r(i),f=n(9),c=r(f);t.AuthProvider=u.default,t.AuthConsumer=a.default,t.useCheckAuth=c.default},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),s=r(c),l=n(1),p=n(5),h=r(p),d=function(e){function t(){o(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.toggleLoading=e.toggleLoading.bind(e),e.fetchSuccess=e.fetchSuccess.bind(e),e.fetchFail=e.fetchFail.bind(e),e.refreshAuth=e.refreshAuth.bind(e),e.state=a({},l.defaultState,{refreshAuth:e.refreshAuth}),e}return i(t,e),f(t,[{key:"componentDidMount",value:function(){return this.props.authUrl?this.fetchInfo():Promise.reject()}},{key:"toggleLoading",value:function(){this.setState(a({},this.state,{isLoading:!0,userInfo:null,error:null}))}},{key:"fetchSuccess",value:function(e){this.setState(a({},this.state,{userInfo:e,isLoading:!1,error:null}))}},{key:"fetchFail",value:function(e){this.setState(a({},this.state,{userInfo:null,isLoading:!1,error:e}))}},{key:"refreshAuth",value:function(){this.fetchInfo()}},{key:"fetchInfo",value:function(){var e=this,t=this.props.reqOptions,n={method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}};return t&&"function"===typeof t?n=t():t&&(n=t),this.toggleLoading(),fetch(this.props.authUrl,n).then(function(e){return 200!==e.status?e.json().then(function(e){return Promise.reject(e)}):e.json()}).then(function(t){e.fetchSuccess(t)}).catch(function(t){e.fetchFail(t)})}},{key:"render",value:function(){return s.default.createElement(l.Provider,{value:this.state},this.props.children)}}]),t}(s.default.Component);d.propTypes={authUrl:h.default.string.isRequired,reqOptions:h.default.oneOfType([h.default.func,h.default.object]),children:h.default.node},t.default=d},function(e,t,n){e.exports=n(6)()},function(e,t,n){"use strict";function r(){}function o(){}var u=n(7);o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,i){if(i!==u){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=r.Consumer},function(e,t,n){function r(){return(0,o.useContext)(u.AuthContext)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(0),u=n(1)}])});
//# sourceMappingURL=index.js.map
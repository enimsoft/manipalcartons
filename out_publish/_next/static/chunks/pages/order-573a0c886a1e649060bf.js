_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"5v1S":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("JXcY"),i=n.n(o),l=n("YFqc"),c=n.n(l),u=r.a.createElement,s=function(){return u("div",{className:i.a.container},u(c.a,{href:"/"},u("div",{className:i.a.logo},u("h2",null,"Manipal Cartons"))),u("div",{className:i.a.navbar}))},f=n("6HWB"),p=n.n(f),m=n("TSYQ"),d=n.n(m),v=r.a.createElement,h=function(){return v("footer",{className:d()(p.a.footer,p.a.grid)},v("div",{className:p.a.contentWrap},v("div",{className:p.a.box},v("h3",null,"Contact"),v("p",null,"+91 7760513189"),v("p",null,"+91 8105780251")),v("div",{className:p.a.box},v("h3",null,"Support"),v("p",null,"manipalcartons@gmail.com")),v("div",{className:p.a.box},v("h3",null,"Made By"),v("a",{href:"https://www.enim.ai"},v("img",{src:"/public/logo512.png",className:p.a.enim,alt:""})),v("p",null,"Enim AI"))))},b=r.a.createElement;t.a=function(e){var t=e.children;return b(r.a.Fragment,null,b(s,null),t,b(h,null))}},"6HWB":function(e,t,n){e.exports={footer:"Footer_footer__31YtZ",contentWrap:"Footer_contentWrap__2rgBf",enim:"Footer_enim__1Hc5T"}},DpsK:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),o=n("rePB"),i=n("HaE+"),l=n("q1tI"),c=n.n(l),u=n("QzEw"),s=n.n(u),f=n("TSYQ"),p=n.n(f),m=n("EBM2"),d=n("5v1S"),v=n("YFqc"),h=n.n(v),b=c.a.createElement;function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t=e.handler,n=Object(l.useState)({name:null,email:null,phone:null,hostel:null,home:null,cartons:null,remarks:null,people:null,location:null,vehicle:null,vehicle_quantity:null}),a=n[0],o=n[1];function c(){return u.apply(this,arguments)}function u(){return(u=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,fetch("/api/send",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({endpoint:"/orders",data:a})});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={hostel:{1:2500,2:4500,3:6e3,4:7e3,5:8e3,6:9e3},flat:{1:3e3,2:5e3,3:7e3},vehicle:{cycle:1e3,bike:2e3,none:0}};return b("div",{className:s.a.container},b("div",{className:s.a.card},b("h1",{className:s.a.heading},"Order"),b("form",{className:p()(s.a.grid,s.a.form)},b("div",{className:s.a.label},"Name"),b("div",{className:s.a.input},b("input",{name:"name",type:"name",className:s.a.field,onChange:function(e){return o(y(y({},a),{},{name:e.target.value}))}})),b("div",{className:s.a.label},"Number Of People"),b("div",{className:s.a.input},b("input",{name:"people",type:"name",className:s.a.field,onChange:function(e){return o(y(y({},a),{},{people:e.target.value}))}})),b("div",{className:s.a.label},"Order Location"),b("div",{className:s.a.input},b("input",{name:"ordertype",type:"radio",value:"flat",onChange:function(e){return o(y(y({},a),{},{location:e.target.value}))}}),"Flat",b("input",{name:"ordertype",type:"radio",value:"hostel",onChange:function(e){return o(y(y({},a),{},{location:e.target.value}))}}),"Hostel"),b("div",{className:s.a.label},"Vehicle"),b("div",{className:s.a.input},b("input",{name:"vehicle",type:"radio",value:"cycle",onChange:function(e){return o(y(y({},a),{},{vehicle:e.target.value}))}}),"Cycle",b("input",{name:"vehicle",type:"radio",value:"bike",onChange:function(e){return o(y(y({},a),{},{vehicle:e.target.value}))}}),"Bike",b("input",{name:"vehicle",type:"radio",value:"none",onChange:function(e){return o(y(y({},a),{},{vehicle:e.target.value}))}}),"None"),b("div",{className:s.a.label},"Number Of Vehicle"),b("div",{className:s.a.input},b("input",{name:"vehicles",type:"name",className:s.a.field,onChange:function(e){return o(y(y({},a),{},{vehicle_quantity:e.target.value}))}})),b("div",{className:s.a.label},"Email"),b("div",{className:s.a.input},b("input",{name:"email",type:"email",className:s.a.field,onChange:function(e){return o(y(y({},a),{},{email:e.target.value}))}})),b("div",{className:s.a.label},"Phone"),b("div",{className:s.a.input},b("input",{name:"phone",type:"phone",className:s.a.field,onChange:function(e){return o(y(y({},a),{},{phone:e.target.value}))}})),b("div",{className:s.a.label},"Hostel Address"),b("div",{className:s.a.input},b("textarea",{name:"hostel",type:"address",className:s.a.textarea,onChange:function(e){return o(y(y({},a),{},{hostel:e.target.value}))}})),b("div",{className:s.a.label},"Home Address"),b("div",{className:s.a.input},b("textarea",{name:"home",type:"address",className:s.a.textarea,onChange:function(e){return o(y(y({},a),{},{home:e.target.value}))}})),b("div",{className:s.a.label},"Estimated no. of cartons"),b("div",{className:s.a.input},b("input",{name:"cartons",type:"number",className:s.a.field,onChange:function(e){return o(y(y({},a),{},{cartons:e.target.value}))}})),b("div",{className:s.a.label},"Remarks (fragile items etc.)"),b("div",{className:s.a.input},b("textarea",{name:"remarks",className:s.a.textarea,onChange:function(e){return o(y(y({},a),{},{remarks:e.target.value}))}}))),b("div",{className:s.a.estimate},b("h1",null,"Estimate:"),b("div",null,a&&a.vehicle&&a.vehicle_quantity&&a.people&&a.location&&b("div",null,f.vehicle[a.vehicle]*parseInt(a.vehicle_quantity)+f[a.location][parseInt(a.people)]))),b("div",{className:s.a.submit},b("button",{class:"btn2",onClick:Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:t();case 3:case"end":return e.stop()}}),e)})))},"Submit"))))},N=function(e){e.handler;return b("div",{className:s.a.container},b("div",{className:s.a.card2},b("h1",{className:s.a.heading},"Order"),b("h2",{className:s.a.heading},"Your request has been submitted! We will contact you shortly."),b("div",{className:s.a.submit2},b(h.a,{href:"/"},b("button",{class:"btn2"},"Okay")))))};t.default=function(){return b(d.a,null,b(m.a,{Before:_,After:N}))}},EBM2:function(e,t,n){"use strict";var a=n("rePB");function r(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=n("q1tI"),i=n.n(o).a.createElement;function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.Before,n=e.After,a=r(e,["Before","After"]),l=Object(o.useState)(!1),u=l[0],s=l[1],f=function(){return s(!u)};return i("div",null,i(u?n:t,c(c({},a),{},{handler:f})))}},"HaE+":function(e,t,n){"use strict";function a(e,t,n,a,r,o,i){try{var l=e[o](i),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function l(e){a(i,r,o,l,c,"next",e)}function c(e){a(i,r,o,l,c,"throw",e)}l(void 0)}))}}n.d(t,"a",(function(){return r}))},JXcY:function(e,t,n){e.exports={container:"Header_container__2tga9",logo:"Header_logo__3lfBX"}},QzEw:function(e,t,n){e.exports={container:"Form_container__3_-8V",card:"Form_card__35PJ3",card2:"Form_card2__2g4-w",form:"Form_form__1jpez",label:"Form_label__3FE52",input:"Form_input__1Lu0K",field:"Form_field__spc6F",textarea:"Form_textarea__m69aL",heading:"Form_heading__2pmTh",submit2:"Form_submit2__2tRVC",submit:"Form_submit__3Nwfs",grid:"Form_grid__F6_oA"}},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},Upp2:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order",function(){return n("DpsK")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var o,i=r(n("q1tI")),l=n("elyg"),c=(n("g/15"),n("nOHt")),u=new Map,s=window.IntersectionObserver,f={};var p=function(e,t){var n=o||(s?o=new s((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function m(e,t,n,a){(0,l.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),f[t+"%"+n]=!0)}var d=function(e){var t=!1!==e.prefetch,n=i.default.useState(),r=a(n,2),o=r[0],u=r[1],d=(0,c.useRouter)(),v=d&&d.pathname||"/",h=i.default.useMemo((function(){var t=(0,l.resolveHref)(v,e.href);return{href:t,as:e.as?(0,l.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),b=h.href,g=h.as;i.default.useEffect((function(){if(t&&s&&o&&o.tagName&&(0,l.isLocalURL)(b)&&!f[b+"%"+g])return p(o,(function(){m(d,b,g)}))}),[t,o,b,g,d]);var y=e.children,_=e.replace,N=e.shallow,O=e.scroll;"string"===typeof y&&(y=i.default.createElement("a",null,y));var w=i.Children.only(y),j={ref:function(e){e&&u(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,d,b,g,_,N,O)}};return t&&(j.onMouseEnter=function(e){(0,l.isLocalURL)(b)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),m(d,b,g,{priority:!0}))}),!e.passHref&&("a"!==w.type||"href"in w.props)||(j.href=(0,l.addBasePath)(g)),i.default.cloneElement(w,j)};t.default=d},rePB:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))}},[["Upp2",0,2,1]]]);
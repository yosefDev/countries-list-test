(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t(57)},25:function(e,a,t){},47:function(e,a,t){},49:function(e,a,t){},51:function(e,a,t){},53:function(e,a,t){},55:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),l=t.n(c),s=(t(25),t(2)),i=t(3),o=t(6),u=t(4),m=t(7),h=t(18),d=t.n(h),f=t(5);var v=Object(f.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.country;switch(t){case"SINGLE_COUNTRY":return n;default:return e}});v.dispatch({type:"INCREMENT"});var g=v;var p=Object(f.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.lisOfCountries;switch(t){case"LIST_OF_COUNTRIES":return n;default:return e}});p.dispatch({type:"INCREMENT"});var E=p,N=(t(47),function(e){var a=e.country,t=e.handleClick;return r.a.createElement("li",{className:"country",onClick:function(){return t(a)}},r.a.createElement("div",{className:"flag",style:{backgroundImage:"url(".concat(a.flag,")")}}),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"nameWrapper"},r.a.createElement("div",{className:"name"},a.name),a.name!==a.nativeName&&r.a.createElement("div",{className:"name"}," - ".concat(a.nativeName))),r.a.createElement("div",{className:"region"},a.region)))}),C=(t(49),function(e){var a=e.handleChange;return r.a.createElement("input",{type:"search",className:"search",onChange:a,placeholder:"Search Country By Name"})}),y=(t(51),function(){return r.a.createElement("div",{className:"loader"})}),O=(t(53),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).state={country:""},t.onClick=function(e){var a=t.props.handleClick;e.target===e.currentTarget&&a("")},g.subscribe(function(){t.setState({country:g.getState()})}),t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.country;return e?r.a.createElement("div",{className:"overlay",onClick:this.onClick},r.a.createElement("div",{className:"countryPopup",id:"countryPopup"},r.a.createElement("h2",{className:"title"},e.name,e.name!==e.nativeName&&" - ".concat(e.nativeName)),r.a.createElement("img",{className:"flag",src:e.flag,alt:e.name}),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"region"},"Region: ",r.a.createElement("span",{className:"infoData"},e.region)),r.a.createElement("div",{className:"capital"},"Capital: ",r.a.createElement("span",{className:"infoData"},e.capital)),r.a.createElement("div",{className:"languages"},"Languages: ",r.a.createElement("ul",{className:"langWrapper"},e.languages.map(function(a){return r.a.createElement("li",{key:"".concat(e.name,"_").concat(a.name),className:"infoData"},a.name,r.a.createElement("br",null))})))))):null}}]),a}(n.Component)),b=(t(55),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).state={lisOfCountries:"",errorMsg:"",searchTerm:""},t.searchCountry=function(e){var a=e.target.value.trim().toLowerCase();t.setState({searchTerm:a})},t.selectCountry=function(e){g.dispatch({type:"SINGLE_COUNTRY",country:e})},E.subscribe(function(){t.setState({lisOfCountries:E.getState()})}),d.a.get("https://restcountries.eu/rest/v2/all").then(function(e){E.dispatch({type:"LIST_OF_COUNTRIES",lisOfCountries:e.data})}).catch(function(e){t.setState({errorMsg:"something went wrong. please try again later"})}),t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.lisOfCountries,n=a.searchTerm,c=a.errorMsg;return t?r.a.createElement("div",{className:"app"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"title"},"Countries",r.a.createElement("span",null,"(",t.length,")")),r.a.createElement(C,{handleChange:this.searchCountry})),r.a.createElement("ul",{className:"lisOfCountries"},t.filter(function(e){return e.name.toLowerCase().includes(n)}).map(function(a){return r.a.createElement(N,{key:a.name,country:a,handleClick:e.selectCountry})})),r.a.createElement(O,{handleClick:this.selectCountry})):c||r.a.createElement(y,null)}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.619e8160.chunk.js.map
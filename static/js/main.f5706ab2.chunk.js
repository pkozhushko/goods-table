(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),s=a(1),i=a(2),m=a(4),o=a(3),u=a(5),d=(a(14),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={products:h},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.searchValue!==e.searchValue){var t=this.props.searchValue,a=h.filter(function(e){return-1!==e.name.toLowerCase().indexOf(t)});this.setState({products:a})}}},{key:"render",value:function(){return 0===this.state.products.length?r.a.createElement("tr",null,r.a.createElement("td",{className:"item__id"},"-"),r.a.createElement("td",{className:"item__name"},"-"),r.a.createElement("td",{className:"item__price"},"-"),r.a.createElement("td",{className:"item__quantity"},"-")):r.a.createElement(n.Fragment,null,this.state.products.map(function(e){return r.a.createElement("tr",{key:e.id,className:"item"},r.a.createElement("td",{className:"item__id"},e.id),r.a.createElement("td",{className:"item__name"},e.name),r.a.createElement("td",{className:"item__price"},e.price),r.a.createElement("td",{className:"item__quantity"},e.quantity))}))}}]),t}(n.Component)),h=[{id:1,name:"Play Station 4",price:500,quantity:3},{id:2,name:"iPhone XS",price:1e3,quantity:2},{id:3,name:"Samsung Galaxy S10",price:1e3,quantity:5}],p=d,E=(a(15),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={searchValue:""},a.handleSearch=function(e){var t=e.target.value.toLowerCase();/\S/.test(t)?a.setState({searchValue:t}):a.setState({searchValue:""})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"table-wrapper"},r.a.createElement("input",{type:"text",className:"search",placeholder:"Search",value:this.state.searchValue,onChange:this.handleSearch}),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"table__head"},r.a.createElement("tr",null,r.a.createElement("td",null,"ID"),r.a.createElement("td",null,"Name"),r.a.createElement("td",null,"Price"),r.a.createElement("td",null,"Quantity"))),r.a.createElement("tbody",{className:"table__body"},r.a.createElement(p,{searchValue:this.state.searchValue}))))}}]),t}(n.Component));var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.f5706ab2.chunk.js.map
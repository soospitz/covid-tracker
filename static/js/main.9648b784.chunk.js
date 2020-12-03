(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{189:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var o=n(6),c=n(0),r=n.n(c),a=n(11),i=n.n(a),d=(n(91),n(33)),s=n(27),l=n(54),u=n(230),h=n(231),f=n(224);n(189);var j=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)({confirmed:"",recovered:"",deaths:""}),j=Object(s.a)(i,2),b=j[0],m=j[1],O=Object(c.useState)([]),v=Object(s.a)(O,2),p=v[0],x=v[1],g=Object(c.useState)([]),C=Object(s.a)(g,2),N=C[0],w=C[1],y=Object(c.useState)([]),I=Object(s.a)(y,2),S=I[0],F=I[1];Object(c.useEffect)((function(){fetch("https://covid19.mathdro.id/api").then((function(e){return e.json()})).then((function(e){var t={confirmed:e.confirmed.value,recovered:e.recovered.value,deaths:e.deaths.value};m(t)}))}),[]),Object(c.useEffect)((function(){fetch("https://covid19.mathdro.id/api/daily").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{reportDate:e.reportDate,confirmed:e.totalConfirmed,recovered:e.recovered.total,deaths:e.deaths.total}}));x(t),console.log(t,"key.totalConfirmed")}))}),[]),Object(c.useEffect)((function(){fetch("https://covid19.mathdro.id/api/countries/").then((function(e){return e.json()})).then((function(e){var t=e.countries;F(t),console.log(t,"countryNameList")}))}),[]);var k={labels:p.map((function(e){return e.reportDate})),datasets:[{label:"Confirmed",data:p.map((function(e){return e.confirmed})),fill:!0,backgroundColor:"rgba(225,225,225,0.2)",borderColor:"#fff"},{label:"Deaths",data:p.map((function(e){return e.deaths})),fill:!1,borderColor:"#fc6978"}]},D={labels:["Confirmed","Deaths","Recovered"],datasets:[{label:["Confirmed","Deaths","Recovered"],data:[b.confirmed,b.deaths,b.recovered],backgroundColor:["#ffffff","#fc6978","#69fca4"]}]},L=Object(f.a)({option:{fontSize:15,"& > span":{marginRight:10,fontSize:18}},floatingLabelFocusStyle:{color:"#d5d8dc"},inputRoot:{color:"white","& .MuiOutlinedInput-notchedOutline":{borderWidth:"2px",borderColor:"white"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"#96d1ea"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"& MuiOutlinedInput-root":{borderColor:"white",color:"white"}}})();return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"top",children:[Object(o.jsx)("h1",{children:"Covid 19 Tracker"}),Object(o.jsx)("div",{className:"search",children:Object(o.jsx)(h.a,{id:"country-select-demo",style:{width:600},options:S,onChange:function(e,t){a(t.name),fetch("https://covid19.mathdro.id/api/countries/".concat(t.name)).then((function(e){return e.json()})).then((function(e){var t={confirmed:e.confirmed.value,recovered:e.recovered.value,deaths:e.deaths.value};m(t),console.log(t,"datas")})),fetch("https://covid19.mathdro.id/api/countries/".concat(t.name,"/confirmed")).then((function(e){return e.json()})).then((function(e){var t=e[0].countryRegion;w(t)}))},classes:{option:L.option,inputRoot:L.inputRoot},autoHighlight:!0,getOptionLabel:function(e){return e.name},renderOption:function(e){return Object(o.jsxs)(r.a.Fragment,{children:[e.name," (",e.iso2,")"]})},renderInput:function(e){return Object(o.jsx)(u.a,Object(d.a)(Object(d.a)({},e),{},{label:"Choose a country",color:"#fff",variant:"outlined",InputLabelProps:{className:L.floatingLabelFocusStyle},inputProps:Object(d.a)(Object(d.a)({},e.inputProps),{},{autoComplete:"new-password"})}))}})})]}),Object(o.jsxs)("div",{className:"bottom",children:[Object(o.jsxs)("div",{className:"left",children:[Object(o.jsx)("div",{className:"country",children:""===n?Object(o.jsx)("h2",{children:"Global"}):Object(o.jsx)("h2",{children:N})}),Object(o.jsxs)("div",{className:"confirmed",children:[Object(o.jsx)("h5",{children:"Total Confirmed"}),Object(o.jsx)("h1",{children:(new Intl.NumberFormat).format(b.confirmed)})]}),Object(o.jsxs)("div",{className:"death",children:[Object(o.jsx)("h5",{children:"Total Deaths"}),Object(o.jsx)("h1",{children:(new Intl.NumberFormat).format(b.deaths)})]}),Object(o.jsxs)("div",{className:"recovered",children:[Object(o.jsx)("h5",{children:"Total Recovered"}),Object(o.jsx)("h1",{children:(new Intl.NumberFormat).format(b.recovered)})]})]}),Object(o.jsx)("div",{className:"right",id:"line",children:""===n?Object(o.jsx)(l.Line,{data:k}):Object(o.jsx)(l.Bar,{data:D})})]})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,233)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),r(e),a(e)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),b()},91:function(e,t,n){}},[[191,1,2]]]);
//# sourceMappingURL=main.9648b784.chunk.js.map
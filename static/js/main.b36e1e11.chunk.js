(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){},163:function(e,t,a){e.exports=a(321)},168:function(e,t,a){},321:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),l=(a(168),a(122),a(18)),o=a(19),s=a(21),m=a(20),p=a(22),u=a(326),h=a(11),b=a(65),d=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={menu:[{url:"/home",name:"Home",icons:"home"},{url:"/profile",name:"Profile",icons:"profile"},{url:"/portofolio",name:"Portofolio",icons:"reconciliation"},{url:"/contact",name:"Contact",icons:"contacts"}]},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(u.b,{mode:"horizontal"},this.state.menu.map(function(e){return r.a.createElement(u.b.Item,{key:e.name},r.a.createElement(b.b,{to:e.url},r.a.createElement(h.a,{type:e.icons,theme:"twoTone"})," ",e.name))}))}}]),t}(n.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(u.b,{mode:"horizontal"},r.a.createElement(u.b.Item,{key:"menu"},r.a.createElement("p",{onClick:this.props.showDrawer},r.a.createElement(h.a,{className:"btn-menu-navbar",type:"menu-unfold"}))))}}]),t}(n.Component),g=a(94),f=a(328),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={current:"mail",visible:!1},a.showDrawer=function(){a.setState({visible:!0})},a.onClose=function(){a.setState({visible:!1})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:"menuBar"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:""},"logo")),r.a.createElement("div",{className:"menuCon"},r.a.createElement("div",{className:"leftMenu"},r.a.createElement(d,null)),r.a.createElement("div",{className:"rightMenu"},r.a.createElement(E,{showDrawer:function(){return e.showDrawer()}})),r.a.createElement(g.a,{className:"barsMenu",type:"primary"},r.a.createElement("span",{className:"barsBtn"},r.a.createElement(h.a,{type:"star",theme:"filled"}))),r.a.createElement(f.a,{title:"Other Menu",placement:"right",closable:!1,onClose:this.onClose,visible:this.state.visible})))}}]),t}(n.Component),v=a(50),x=a(325),j=a(59),O=a(34),w=a(323),k=x.a.Title,C=[{name:"Name",icons:"contacts",content:"Shintya Devi Bachan"},{name:"Date of birth",icons:"calendar",content:"October 15, 1999"},{name:"Address",icons:"environment",content:"Jl. Lempuyangan Tengah, Yogyakarta"},{name:"Phone",icons:"phone",content:"+62 852-2859-9018"},{name:"Email",icons:"mail",content:"icinbachan15@gmail.com"}],D=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j.a,{style:{margin:"16px 0",borderRadius:"5px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",paddingBottom:"50px"}},r.a.createElement(O.a,{xs:12},r.a.createElement(j.a,null,r.a.createElement("img",{src:"images/sally.png",style:{objectFit:"cover",width:"100%"}}))),r.a.createElement(O.a,{xs:12},r.a.createElement(j.a,{style:{margin:"16px 16px"}},r.a.createElement(O.a,{xs:!0},r.a.createElement(k,null,"Shintya Devi Bachan")),r.a.createElement(w.a,{size:"large",dataSource:C,renderItem:function(e){return r.a.createElement(w.a.Item,null,r.a.createElement(h.a,{type:e.icons,theme:"filled"})," \xa0\xa0 \xa0",r.a.createElement(x.a.Text,{strong:!0},e.name," : ")," ",e.content)}}),r.a.createElement("p",null),r.a.createElement(O.a,{xs:!0},r.a.createElement(k,{level:4},"Description")),r.a.createElement(O.a,{xs:!0},"dfjgyerbgnsbcausdwwhjndbcysgywbkjnkdkjs")))))}}]),t}(n.Component),S=a(324),T=a(322),W=a(327),N=a(157),B=a.n(N),A=function(e){var t=e.text;return r.a.createElement("div",null,t)},I=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"60vh",width:"100%"}},r.a.createElement(B.a,{bootstrapURLKeys:{key:"AIzaSyAhrdEzlfpnsnfq4MgU1e1CCsrvVx2d59s"},defaultCenter:this.props.center,defaultZoom:this.props.zoom},r.a.createElement(A,{lat:-7.77545277,lng:110.3742206,text:"My Marker"})))}}]),t}(n.Component);I.defaultProps={center:{lat:-7.77,lng:110.37},zoom:15};var M=I,R=a(161),P=a.n(R),z=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j.a,{style:{margin:"16px 0",borderRadius:"5px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},r.a.createElement(O.a,{xs:10},r.a.createElement(j.a,{style:{margin:"16px 16px"}},r.a.createElement(S.a,{title:"C O N T A C T",bordered:!1,style:{width:300}},r.a.createElement("p",null,"Nama : Shintya Devi Bachan"),r.a.createElement("p",null,"No \xa0 \xa0\xa0 : +62895432456433"),r.a.createElement("p",null,"Email \xa0 : icinbachan15@gmail.com"),r.a.createElement(T.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(T.a.Item,null,r.a.createElement(W.a,{style:{marginBottom:"8px"},prefix:r.a.createElement(h.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Nama"}),r.a.createElement(W.a,{style:{marginBottom:"8px"},prefix:r.a.createElement(h.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"}),r.a.createElement(W.a,{style:{marginBottom:"8px"},prefix:r.a.createElement(h.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Website"}),r.a.createElement(P.a,{style:{marginBottom:"8px"},prefix:r.a.createElement(h.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Message"}),r.a.createElement(g.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Send")))))),r.a.createElement(O.a,{xs:14,style:{padding:"20px"}},r.a.createElement(M,null))))}}]),t}(n.Component),L=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j.a,{style:{margin:"16px 0",borderRadius:"5px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},r.a.createElement(O.a,{xs:10,style:{margin:"40px 30px"}},r.a.createElement("h1",{style:{margin:"0"}},"Hello! I'am "),r.a.createElement("h1",{style:{color:"#ef4b6c"}}," ",r.a.createElement("b",null,"Shintya Devi Bachan")),r.a.createElement("h4",null,'"Saya adalah cinicnicnicnicnincincincinicnicnincincin'),r.a.createElement(g.a,{href:"Profile"},"Kenalan?")),r.a.createElement(O.a,{xs:12},r.a.createElement(j.a,null,r.a.createElement("img",{src:"images/sally.png",style:{width:"90%"}})))))}}]),t}(r.a.Component),U=S.a.Meta,J=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,{style:{width:"200px",margin:"16px 0",borderRadius:"5px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},cover:r.a.createElement("img",{alt:this.props.alt,src:this.props.img}),actions:[r.a.createElement(h.a,{type:"setting"}),r.a.createElement(h.a,{type:"edit"}),r.a.createElement(h.a,{type:"ellipsis"})]},r.a.createElement(U,{title:this.props.title,description:this.props.description}))}}]),t}(r.a.Component),F=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"PORTOFOLIO"),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement(j.a,{gutter:16,justify:"center",type:"flex"},r.a.createElement(O.a,{lg:7,md:12},r.a.createElement(J,{alt:"Web Design",img:"images/portofolio/1.png",title:"Web Design",description:"This is the description"})),r.a.createElement(O.a,{lg:7,md:12},r.a.createElement(J,{alt:"Web Design",img:"images/portofolio/2.png",title:"Web Design",description:"This is the description"})),r.a.createElement(O.a,{lg:7,md:12},r.a.createElement(J,{alt:"Web Design",img:"images/portofolio/3.png",title:"Web Design",description:"This is the description"})),r.a.createElement(O.a,{lg:7,md:12},r.a.createElement(J,{alt:"Web Design",img:"images/portofolio/5.png",title:"Web Design",description:"This is the description"})),r.a.createElement(O.a,{lg:7,md:12},r.a.createElement(J,{alt:"Web Design",img:"images/portofolio/6.png",title:"Web Design",description:"This is the description"}))))}}]),t}(n.Component),H=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",component:L}),r.a.createElement(v.a,{path:"/home",component:L}),r.a.createElement(v.a,{path:"/contact",component:z}),r.a.createElement(v.a,{path:"/profile",component:D}),r.a.createElement(v.a,{path:"/portofolio",component:F}))}}]),t}(n.Component);var K=function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(j.a,{guter:8},r.a.createElement(O.a,{offset:4,span:16},r.a.createElement("br",null),r.a.createElement(H,null))))},q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(b.a,{basename:"/micinTa"},r.a.createElement(K,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/micinTa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/micinTa","/service-worker.js");q?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):V(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):V(t,e)})}}()}},[[163,1,2]]]);
//# sourceMappingURL=main.b36e1e11.chunk.js.map
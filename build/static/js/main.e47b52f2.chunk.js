(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/main.87e9f354.svg"},function(e,a,t){e.exports=t.p+"static/media/diary.0a561c51.svg"},function(e,a,t){e.exports=t.p+"static/media/chat.a51fa3ce.svg"},,,,,,function(e,a,t){e.exports=t.p+"static/media/logout.0749877d.svg"},,function(e,a,t){e.exports=t(35)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var m=t(0),c=t.n(m),l=t(17),r=t.n(l),i=(t(26),t(38)),n=t(41),s=t(40),d=(t(27),t(4)),_=t(5),o=t(7),E=t(6),g=t(8),N=t(37),v=(t(28),t(10)),u=t.n(v),h=t(11),p=t.n(h),f=t(12),y=t.n(f),w=t(18),M=t.n(w),x=function(e){function a(){var e,t;Object(d.a)(this,a);for(var m=arguments.length,c=new Array(m),l=0;l<m;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(c)))).state={username:""},t.saveData=function(e,a){window.localStorage.setItem(e,JSON.stringify(a))},t}return Object(g.a)(a,e),Object(_.a)(a,[{key:"loadData",value:function(e){return JSON.parse(window.localStorage.getItem(e))}},{key:"logout",value:function(){window.localStorage.removeItem("userID"),window.localStorage.removeItem("username")}},{key:"componentDidMount",value:function(){new URLSearchParams(this.props.location.search).get("userID")&&this.saveData("userID",new URLSearchParams(this.props.location.search).get("userID")),new URLSearchParams(this.props.location.search).get("username")&&this.saveData("username",new URLSearchParams(this.props.location.search).get("username")),this.setState({username:this.loadData("username")})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"content"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",{className:"header__logo"},"Calendar"),c.a.createElement("nav",{className:"nav"},c.a.createElement("div",{className:"header__user"},this.state.username),c.a.createElement("form",{action:"/api/logout"},c.a.createElement("button",{className:"nav__item-logout",formMethod:"post",type:"submit",onClick:function(a){return e.logout(a)}},c.a.createElement("img",{src:M.a,alt:"logout",className:"nav__item"}))),c.a.createElement(N.a,{to:"/main"},c.a.createElement("img",{src:u.a,alt:"main",className:"nav__item"})),c.a.createElement(N.a,{to:"/diary"},c.a.createElement("img",{src:p.a,alt:"diary",className:"nav__item"})),c.a.createElement(N.a,{to:"/chat"},c.a.createElement("img",{src:y.a,alt:"chat",className:"nav__item"})))),c.a.createElement("div",null,"Main")))}}]),a}(m.Component),b=(t(31),function(e){function a(){return Object(d.a)(this,a),Object(o.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(_.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"content"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",{className:"header__logo"},"Calendar"),c.a.createElement("nav",{className:"nav"},c.a.createElement(N.a,{to:"/main"},c.a.createElement("img",{src:u.a,alt:"main",className:"nav__item"})),c.a.createElement(N.a,{to:"/diary"},c.a.createElement("img",{src:p.a,alt:"diary",className:"nav__item"})),c.a.createElement(N.a,{to:"/chat"},c.a.createElement("img",{src:y.a,alt:"chat",className:"nav__item"})))),c.a.createElement("div",{className:"calendar main-content"},c.a.createElement("div",{className:"calendar__time"},c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"12 AM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"1 AM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"2 AM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"3 AM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"4 AM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"5 AM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"6 AM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"7 AM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"8 AM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"9 AM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"10 AM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"11 AM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"12 PM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"1 PM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"2 PM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"3 PM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"4 PM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"5 PM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"6 PM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"7 PM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"8 PM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"9 PM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"10 PM")),c.a.createElement("div",{className:"calendar__time-item"},c.a.createElement("span",{className:"calendar__time-item-text"},"11 PM"))),c.a.createElement("div",{className:"calendar__grid"},c.a.createElement("div",{className:"calendar__grid-column"},c.a.createElement("div",{className:"calendar__grid-title"},"Monday"),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"})),c.a.createElement("div",{className:"calendar__grid-column"},c.a.createElement("div",{className:"calendar__grid-title"},"Tuesday"),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"})),c.a.createElement("div",{className:"calendar__grid-column"},c.a.createElement("div",{className:"calendar__grid-title"},"Wednesday"),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"})),c.a.createElement("div",{className:"calendar__grid-column"},c.a.createElement("div",{className:"calendar__grid-title"},"Thursday"),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"})),c.a.createElement("div",{className:"calendar__grid-column"},c.a.createElement("div",{className:"calendar__grid-title"},"Friday"),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"})),c.a.createElement("div",{className:"calendar__grid-column"},c.a.createElement("div",{className:"calendar__grid-title"},"Saturday"),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"})),c.a.createElement("div",{className:"calendar__grid-column"},c.a.createElement("div",{className:"calendar__grid-title"},"Sunday"),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}),c.a.createElement("div",{className:"calendar__grid-item"}))))))}}]),a}(m.Component)),O=t(19),S=(t(32),function(e){function a(){var e,t;Object(d.a)(this,a);for(var m=arguments.length,c=new Array(m),l=0;l<m;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(c)))).state={messages:[],messageInput:""},t.changeInputMessage=function(e){t.setState({messageInput:e.target.value})},t.sendMessageOnEnter=function(e){"Enter"===e.key&&t.state.messageInput&&t.setState(function(e){return{messages:[].concat(Object(O.a)(e.messages),[{text:e.messageInput}]),messageInput:""}})},t}return Object(g.a)(a,e),Object(_.a)(a,[{key:"componentDidUpdate",value:function(){this.messages&&this.messages.scrollIntoView()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"content"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",{className:"header__logo"},"Calendar"),c.a.createElement("nav",{className:"nav"},c.a.createElement(N.a,{to:"/main"},c.a.createElement("img",{src:u.a,alt:"main",className:"nav__item"})),c.a.createElement(N.a,{to:"/diary"},c.a.createElement("img",{src:p.a,alt:"diary",className:"nav__item"})),c.a.createElement(N.a,{to:"/chat"},c.a.createElement("img",{src:y.a,alt:"chat",className:"nav__item"})))),c.a.createElement("div",{className:"chat main-content"},c.a.createElement("div",{className:"chat__left"}),c.a.createElement("div",{className:"chat__right"},c.a.createElement("div",{className:"chat__right-messages"},this.state.messages.map(function(e,a){return c.a.createElement("span",{key:a,className:"chat__right-messages-message"},e.text)}),c.a.createElement("div",{ref:function(a){e.messages=a}})),c.a.createElement("input",{placeholder:"Enter your message",className:"chat__right-input",value:this.state.messageInput,onChange:this.changeInputMessage,onKeyPress:this.sendMessageOnEnter})))))}}]),a}(m.Component)),P=t(39),A=(t(33),function(e){function a(){var e,t;Object(d.a)(this,a);for(var m=arguments.length,c=new Array(m),l=0;l<m;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(c)))).state={mode:"authorization",name:"",email:"",password:"",isAuthorized:""},t.toggleModeAuth=function(){t.setState(function(e){return{mode:e.mode="authorization"}})},t.toggleModeReg=function(){t.setState(function(e){return{mode:e.mode="registration"}})},t.changeName=function(e){t.setState({name:e.target.value})},t.changeEmail=function(e){t.setState({email:e.target.value})},t.changePassword=function(e){t.setState({password:e.target.value})},t}return Object(g.a)(a,e),Object(_.a)(a,[{key:"loadData",value:function(e){return JSON.parse(window.localStorage.getItem(e))}},{key:"componentDidMount",value:function(){var e=this;this.loadData("userID")&&fetch("/api/isAuthorized",{method:"POST"}).then(function(a){200===a.status?e.setState({isAuthorized:!0}):e.setState({isAuthorized:!1})}).catch(function(e){return console.log(e)})}},{key:"renderForm",value:function(){return"authorization"===this.state.mode?c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"content"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",{className:"header__logo"},"Calendar")),c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__form"},c.a.createElement("div",{className:"login__form-title"},c.a.createElement("button",{className:"login__form-title-item login__form-title-item-active",onClick:this.toggleModeAuth},"Authorization"),c.a.createElement("div",{className:"login__form-title-slash"},"/"),c.a.createElement("button",{className:"login__form-title-item",onClick:this.toggleModeReg},"Registration")),c.a.createElement("div",{className:"login__msg"},new URLSearchParams(this.props.location.search).get("msg")),c.a.createElement("form",{action:"/api/auth",method:"POST",className:"login__form-main login__form-authorization"},c.a.createElement("input",{name:"email",type:"text",className:"login__form-item",value:this.state.email,onChange:this.changeEmail,placeholder:"Email"}),c.a.createElement("input",{name:"password",type:"password",className:"login__form-item",value:this.state.password,onChange:this.changePassword,placeholder:"Password"}),c.a.createElement("input",{type:"submit",className:"login__form-button",value:"Log in"})))))):c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"content"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",{className:"header__logo"},"Calendar")),c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__form"},c.a.createElement("div",{className:"login__form-title"},c.a.createElement("button",{className:"login__form-title-item",onClick:this.toggleModeAuth},"Authorization"),c.a.createElement("div",{className:"login__form-title-slash"},"/"),c.a.createElement("button",{className:"login__form-title-item login__form-title-item-active",onClick:this.toggleModeReg},"Registration")),c.a.createElement("div",{className:"login__msg"},new URLSearchParams(this.props.location.search).get("msg")),c.a.createElement("form",{action:"/api/reg",method:"POST",className:"login__form-main login__form-registration"},c.a.createElement("input",{name:"name",type:"text",className:"login__form-item",value:this.state.name,onChange:this.changeName,placeholder:"Name"}),c.a.createElement("input",{name:"email",type:"text",className:"login__form-item",value:this.state.email,onChange:this.changeEmail,placeholder:"Email"}),c.a.createElement("input",{name:"password",type:"password",className:"login__form-item",value:this.state.password,onChange:this.changePassword,placeholder:"Password"}),c.a.createElement("input",{type:"submit",className:"login__form-button",value:"Register"}))))))}},{key:"render",value:function(){return this.state.isAuthorized?c.a.createElement(P.a,{to:"/main"}):c.a.createElement("div",null,this.renderForm())}}]),a}(m.Component)),j=function(){return c.a.createElement("div",null,"404 Not found")};r.a.render(c.a.createElement(function(){return c.a.createElement(i.a,null,c.a.createElement(n.a,null,c.a.createElement(s.a,{exact:!0,path:"/",component:A}),c.a.createElement(s.a,{path:"/main",component:x}),c.a.createElement(s.a,{path:"/diary",component:b}),c.a.createElement(s.a,{path:"/chat",component:S}),c.a.createElement(s.a,{path:"*",component:j})))},null),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.e47b52f2.chunk.js.map
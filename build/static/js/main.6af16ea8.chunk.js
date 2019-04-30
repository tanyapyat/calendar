(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/main.87e9f354.svg"},function(e,a,t){e.exports=t.p+"static/media/diary.0a561c51.svg"},function(e,a,t){e.exports=t.p+"static/media/chat.a51fa3ce.svg"},,,,,,function(e,a,t){e.exports=t.p+"static/media/logout.0749877d.svg"},function(e,a,t){e.exports=t.p+"static/media/add.9ba568b5.svg"},,function(e,a,t){e.exports=t(38)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(15),m=t.n(s),i=(t(28),t(41)),l=t(44),c=t(43),o=t(4),d=t(5),u=t(7),h=t(6),_=t(8),p=t(40),E=(t(29),t(30),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).id="modal",t.div=document.createElement("div"),t.div.id=t.id,document.body.insertAdjacentElement("beforeend",t.div),t}return Object(_.a)(a,e),Object(d.a)(a,[{key:"componentWillUnmount",value:function(){this.div.parentNode.removeChild(this.div)}},{key:"render",value:function(){var e=this.props,a=e.show,t=e.children;return a&&m.a.createPortal(t,document.getElementById(this.id))}}]),a}(n.Component)),f=t(11),g=t.n(f),v=t(12),N=t.n(v),y=t(13),b=t.n(y),M=t(19),S=t.n(M),j=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={username:"",isShowModal:!1,name:"",description:"",projects:[]},t.saveData=function(e,a){window.localStorage.setItem(e,JSON.stringify(a))},t.loadData=function(e){return JSON.parse(window.localStorage.getItem(e))},t.logout=function(){window.localStorage.removeItem("userID"),window.localStorage.removeItem("username")},t.removeMember=function(e,a){fetch("/api/removeMember",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectID:e,memberID:a})}).then(function(e){return 200===e.status&&t.fetchProjects()})},t.fetchProjects=function(){fetch("/api/getProjects",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userID:t.loadData("userID")})}).then(function(e){return 200!==e.status?Promise.reject(e):e.json()}).then(function(e){return t.setState({projects:e})})},t}return Object(_.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){new URLSearchParams(this.props.location.search).get("userID")&&this.saveData("userID",new URLSearchParams(this.props.location.search).get("userID")),new URLSearchParams(this.props.location.search).get("username")&&this.saveData("username",new URLSearchParams(this.props.location.search).get("username")),this.setState({username:this.loadData("username")}),new URLSearchParams(this.props.location.search).get("modal-msg")&&this.setState({isShowModal:!0}),this.fetchProjects()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"wrapper"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__logo"},r.a.createElement(p.a,{to:"/main",className:"header__logo-link"},"Calendar")),r.a.createElement("button",{className:"header__add-button",onClick:function(){return e.setState({isShowModal:!0})}},"Create a new project"),r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"header__user"},this.state.username),r.a.createElement("form",{action:"/api/logout",method:"POST"},r.a.createElement("button",{className:"nav__item-logout",type:"submit",onClick:this.logout},r.a.createElement("img",{src:S.a,alt:"logout",className:"nav__item"}))),r.a.createElement(p.a,{to:"/main"},r.a.createElement("img",{src:g.a,alt:"main",className:"nav__item"})),r.a.createElement(p.a,{to:"/diary"},r.a.createElement("img",{src:N.a,alt:"diary",className:"nav__item"})),r.a.createElement(p.a,{to:"/chat"},r.a.createElement("img",{src:b.a,alt:"chat",className:"nav__item"})))),r.a.createElement("div",{className:"main"},r.a.createElement("ul",{className:"main__projects"},this.state.projects.map(function(a){return r.a.createElement("li",{className:"main__projects-item"},r.a.createElement("header",{className:"main__projects-header",style:{backgroundColor:a.color}},r.a.createElement("h2",{className:"main__projects-header-name"},a.name)),r.a.createElement("div",{className:"main__projects-main"},r.a.createElement("p",{className:"main__projects-description"},a.description),r.a.createElement("h3",{className:"main__projects-subtitle"},"Members: "),r.a.createElement("ul",{className:"main__projects-members"},a.members.map(function(t){return r.a.createElement("li",{className:"main__projects-members-item"},r.a.createElement("div",{className:"main__projects-members-item-user"},r.a.createElement("div",{className:"main__projects-members-item-user-name"},t.name),r.a.createElement("div",{className:"main__projects-members-item-user-email"},t.email)),r.a.createElement("button",{className:"main__projects-members-item-close",onClick:function(){return e.removeMember(a._id,t._id)}},"\u2716"))})),r.a.createElement("h3",{className:"main__projects-subtitle"},"Add a member: "),r.a.createElement("div",{className:"main__projects-msg"},new URLSearchParams(e.props.location.search).get("proj-msg")),r.a.createElement("form",{action:"/api/addMember",method:"POST",className:"main__projects-form"},r.a.createElement("input",{name:"email",type:"text",className:"main__projects-form-item",placeholder:"Email"}),r.a.createElement("input",{name:"projectID",style:{display:"none"},value:a._id}),r.a.createElement("input",{type:"submit",className:"main__projects-form-button",value:"Add"}))))}))),r.a.createElement("footer",{className:"footer"},r.a.createElement("nav",{className:"footer__nav"},r.a.createElement(p.a,{to:"/main",className:"footer__nav-item"},r.a.createElement("div",null,"Main")),r.a.createElement(p.a,{to:"/diary",className:"footer__nav-item"},r.a.createElement("div",null,"Diary")),r.a.createElement(p.a,{to:"/chat",className:"footer__nav-item"},r.a.createElement("div",null,"Chat"))),r.a.createElement("address",{className:"footer__address"},r.a.createElement("a",{href:"mailto:calendar_2019@inbox.ru",className:"footer__address-mail"},"Contact us"))),this.state.isShowModal&&this.renderModal())}},{key:"renderModal",value:function(){var e=this;return r.a.createElement(E,{show:this.state.isShowModal},r.a.createElement("div",{className:"mainModal"},r.a.createElement("header",{className:"mainModal__header"},r.a.createElement("h2",{className:"mainModal__header-title"},"Create a new project"),r.a.createElement("button",{className:"mainModal__header-close",onClick:function(){return e.setState({isShowModal:!1})}},"\u2716")),r.a.createElement("div",{className:"mainModal__msg"},new URLSearchParams(this.props.location.search).get("modal-msg")),r.a.createElement("form",{action:"/api/createProject",method:"POST",className:"mainModal__form"},r.a.createElement("input",{name:"userID",style:{display:"none"},value:this.loadData("userID")}),r.a.createElement("input",{name:"name",type:"text",className:"mainModal__form-item",value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})},placeholder:"Name"}),r.a.createElement("textarea",{name:"description",type:"text",className:"mainModal__form-item mainModal__form-item-textarea",value:this.state.description,onChange:function(a){return e.setState({description:a.target.value})},placeholder:"Description"}),r.a.createElement("input",{type:"submit",className:"mainModal__form-button",value:"Create"}))))}}]),a}(n.Component),w=(t(33),t(9)),k=t.n(w),O=t(20),C=t.n(O),P=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={isShowModal:!1,title:"",timeStart:k()(),timeEnd:k()(),project:"",projects:[],tasks:[],days:[],numberOfWeek:""},t.loadData=function(e){return JSON.parse(window.localStorage.getItem(e))},t.fetchProjects=function(){fetch("/api/getProjects",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userID:t.loadData("userID")})}).then(function(e){return 200!==e.status?Promise.reject(e):e.json()}).then(function(e){t.setState({projects:e}),t.fetchTasks()})},t.fetchTasks=function(){var e=[];t.state.projects.map(function(a){return e.push(a._id)}),fetch("/api/getTasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectsID:e})}).then(function(e){return 200!==e.status?Promise.reject(e):e.json()}).then(function(e){return t.setState({tasks:e})})},t.getDays=function(){for(var e=k()().add("M",-6).isoWeekday(1),a=k()().add("M",6).isoWeekday(7);e<=a;)t.state.days.push(k()(e)),e=k()(e).add("day",1);t.setState({numberOfWeek:t.state.days[182].format("W")})},t.slideToLeft=function(){t.setState({numberOfWeek:t.state.numberOfWeek-1});var e=document.getElementsByClassName("diary__grid-column"),a=!0,n=!1,r=void 0;try{for(var s,m=e[Symbol.iterator]();!(a=(s=m.next()).done);a=!0){var i=s.value;i.style.right="calc(".concat(i.style.right," - 100%)")}}catch(l){n=!0,r=l}finally{try{a||null==m.return||m.return()}finally{if(n)throw r}}},t.slideToRight=function(){t.setState({numberOfWeek:t.state.numberOfWeek- -1});var e=document.getElementsByClassName("diary__grid-column"),a=!0,n=!1,r=void 0;try{for(var s,m=e[Symbol.iterator]();!(a=(s=m.next()).done);a=!0){var i=s.value;i.style.right="calc(".concat(i.style.right," + 100%)")}}catch(l){n=!0,r=l}finally{try{a||null==m.return||m.return()}finally{if(n)throw r}}},t}return Object(_.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchProjects(),this.getDays()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"wrapper"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__logo"},r.a.createElement(p.a,{to:"/main",className:"header__logo-link"},"Calendar")),r.a.createElement("div",{className:"header__buttons"},r.a.createElement("button",{className:"header__buttons-button",onClick:this.slideToLeft},"\u2190"),r.a.createElement("h2",{className:"header__buttons-title"},"Week ",this.state.numberOfWeek),r.a.createElement("button",{className:"header__buttons-button",onClick:this.slideToRight},"\u2192")),r.a.createElement("nav",{className:"nav"},r.a.createElement("button",{className:"nav__item-add",onClick:function(){return e.setState({isShowModal:!0})}},r.a.createElement("img",{src:C.a,alt:"logout",className:"nav__item"})),r.a.createElement(p.a,{to:"/main"},r.a.createElement("img",{src:g.a,alt:"main",className:"nav__item"})),r.a.createElement(p.a,{to:"/diary"},r.a.createElement("img",{src:N.a,alt:"diary",className:"nav__item"})),r.a.createElement(p.a,{to:"/chat"},r.a.createElement("img",{src:b.a,alt:"chat",className:"nav__item"})))),r.a.createElement("main",{className:"diary"},r.a.createElement("ul",{className:"diary__time"},r.a.createElement("li",{className:"diary__time-item"},"12 AM"),r.a.createElement("li",{className:"diary__time-item"},"1 AM"),r.a.createElement("li",{className:"diary__time-item"},"2 AM"),r.a.createElement("li",{className:"diary__time-item"},"3 AM"),r.a.createElement("li",{className:"diary__time-item"},"4 AM"),r.a.createElement("li",{className:"diary__time-item"},"5 AM"),r.a.createElement("li",{className:"diary__time-item"},"6 AM"),r.a.createElement("li",{className:"diary__time-item"},"7 AM"),r.a.createElement("li",{className:"diary__time-item"},"8 AM"),r.a.createElement("li",{className:"diary__time-item"},"9 AM"),r.a.createElement("li",{className:"diary__time-item"},"10 AM"),r.a.createElement("li",{className:"diary__time-item"},"11 AM"),r.a.createElement("li",{className:"diary__time-item"},"12 PM"),r.a.createElement("li",{className:"diary__time-item"},"1 PM"),r.a.createElement("li",{className:"diary__time-item"},"2 PM"),r.a.createElement("li",{className:"diary__time-item"},"3 PM"),r.a.createElement("li",{className:"diary__time-item"},"4 PM"),r.a.createElement("li",{className:"diary__time-item"},"5 PM"),r.a.createElement("li",{className:"diary__time-item"},"6 PM"),r.a.createElement("li",{className:"diary__time-item"},"7 PM"),r.a.createElement("li",{className:"diary__time-item"},"8 PM"),r.a.createElement("li",{className:"diary__time-item"},"9 PM"),r.a.createElement("li",{className:"diary__time-item"},"10 PM"),r.a.createElement("li",{className:"diary__time-item"},"11 PM")),r.a.createElement("ul",{className:"diary__grid"},this.state.days.map(function(a){return r.a.createElement("li",{className:"diary__grid-column",style:{right:"2600%"}},r.a.createElement("h3",{className:"diary__grid-title"},"".concat(a.format("MMM")," ").concat(a.format("DD"),",    ").concat(a.format("ddd"))),r.a.createElement("div",{className:"diary__grid-tasks"},e.state.tasks.map(function(e){return e.timeStart.split("T")[0]===a.format("YYYY-MM-DD")&&r.a.createElement("div",{className:"diary__grid-tasks-task",style:{backgroundColor:e.project.color,top:"".concat(51*e.timeStart.split("T")[1].split(":")[0]+e.timeStart.split("T")[1].split(":")[1]/60*51,"px"),height:"".concat(51*e.timeEnd.split("T")[1].split(":")[0]-51*e.timeStart.split("T")[1].split(":")[0]+e.timeEnd.split("T")[1].split(":")[1]/60*51-e.timeStart.split("T")[1].split(":")[1]/60*51,"px")}},e.title)})))}))),r.a.createElement("footer",{className:"footer"},r.a.createElement("nav",{className:"footer__nav"},r.a.createElement(p.a,{to:"/main",className:"footer__nav-item"},r.a.createElement("div",null,"Main")),r.a.createElement(p.a,{to:"/diary",className:"footer__nav-item"},r.a.createElement("div",null,"Diary")),r.a.createElement(p.a,{to:"/chat",className:"footer__nav-item"},r.a.createElement("div",null,"Chat"))),r.a.createElement("address",{className:"footer__address"},r.a.createElement("a",{href:"mailto:calendar_2019@inbox.ru",className:"footer__address-mail"},"Contact us"))),this.state.isShowModal&&this.renderModal())}},{key:"renderModal",value:function(){var e=this;return r.a.createElement(E,{show:this.state.isShowModal},r.a.createElement("div",{className:"addModal"},r.a.createElement("header",{className:"addModal__header"},r.a.createElement("h2",{className:"addModal__header-title"},"Add a task"),r.a.createElement("button",{className:"addModal__header-close",onClick:function(){return e.setState({isShowModal:!1})}},"\u2716")),r.a.createElement("div",{className:"addModal__msg"},new URLSearchParams(this.props.location.search).get("modal-msg")),r.a.createElement("form",{action:"/api/addTask",method:"POST",className:"addModal__form"},r.a.createElement("input",{name:"title",type:"text",className:"addModal__form-item",value:this.state.title,onChange:function(a){return e.setState({title:a.target.value})},placeholder:"Title"}),r.a.createElement("div",{className:"addModal__form-time"},r.a.createElement("input",{name:"timeStart",type:"datetime-local",className:"addModal__form-time-item",value:this.state.timeStart.format("YYYY-MM-DDTHH:mm"),onChange:function(a){return e.setState({timeStart:k()(a.target.value)})}}),r.a.createElement("b",null,"\u2014"),r.a.createElement("input",{name:"timeEnd",type:"datetime-local",className:"addModal__form-time-item",value:this.state.timeEnd.format("YYYY-MM-DDTHH:mm"),onChange:function(a){return e.setState({timeEnd:k()(a.target.value)})}})),r.a.createElement("select",{name:"project",className:"addModal__form-item",value:this.state.project,onChange:function(a){return e.setState({project:a.target.value})},placeholder:"Project"},this.state.projects.map(function(e){return r.a.createElement("option",{value:e._id},e.name)})),r.a.createElement("input",{type:"submit",className:"addModal__form-button",value:"Add"}))))}}]),a}(n.Component),D=t(21),T=(t(35),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={messages:[],messageInput:""},t.changeInputMessage=function(e){t.setState({messageInput:e.target.value})},t.sendMessageOnEnter=function(e){"Enter"===e.key&&t.state.messageInput&&t.setState(function(e){return{messages:[].concat(Object(D.a)(e.messages),[{text:e.messageInput}]),messageInput:""}})},t}return Object(_.a)(a,e),Object(d.a)(a,[{key:"componentDidUpdate",value:function(){this.messages&&this.messages.scrollIntoView()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"wrapper"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__logo"},r.a.createElement(p.a,{to:"/main",className:"header__logo-link"},"Calendar")),r.a.createElement("nav",{className:"nav"},r.a.createElement(p.a,{to:"/main"},r.a.createElement("img",{src:g.a,alt:"main",className:"nav__item"})),r.a.createElement(p.a,{to:"/diary"},r.a.createElement("img",{src:N.a,alt:"diary",className:"nav__item"})),r.a.createElement(p.a,{to:"/chat"},r.a.createElement("img",{src:b.a,alt:"chat",className:"nav__item"})))),r.a.createElement("main",{className:"chat"},r.a.createElement("div",{className:"chat__left"}),r.a.createElement("div",{className:"chat__right"},r.a.createElement("ul",{className:"chat__right-messages"},this.state.messages.map(function(e,a){return r.a.createElement("li",{key:a,className:"chat__right-messages-message"},e.text)}),r.a.createElement("div",{ref:function(a){e.messages=a}})),r.a.createElement("input",{placeholder:"Enter your message",className:"chat__right-input",value:this.state.messageInput,onChange:this.changeInputMessage,onKeyPress:this.sendMessageOnEnter}))),r.a.createElement("footer",{className:"footer"},r.a.createElement("nav",{className:"footer__nav"},r.a.createElement(p.a,{to:"/main",className:"footer__nav-item"},r.a.createElement("div",null,"Main")),r.a.createElement(p.a,{to:"/diary",className:"footer__nav-item"},r.a.createElement("div",null,"Diary")),r.a.createElement(p.a,{to:"/chat",className:"footer__nav-item"},r.a.createElement("div",null,"Chat"))),r.a.createElement("address",{className:"footer__address"},r.a.createElement("a",{href:"mailto:calendar_2019@inbox.ru",className:"footer__address-mail"},"Contact us"))))}}]),a}(n.Component)),I=t(42),A=(t(36),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={mode:"authorization",name:"",email:"",password:"",isAuthorized:""},t}return Object(_.a)(a,e),Object(d.a)(a,[{key:"loadData",value:function(e){return JSON.parse(window.localStorage.getItem(e))}},{key:"componentDidMount",value:function(){var e=this;this.loadData("userID")&&fetch("/api/isAuthorized",{method:"POST"}).then(function(a){200===a.status?e.setState({isAuthorized:!0}):e.setState({isAuthorized:!1})})}},{key:"render",value:function(){return this.state.isAuthorized?r.a.createElement(I.a,{to:"/main"}):this.renderForm()}},{key:"renderForm",value:function(){return"authorization"===this.state.mode?this.renderAuthorizationMode():this.renderRegistrationMode()}},{key:"renderAuthorizationMode",value:function(){var e=this;return r.a.createElement("div",{id:"wrapper"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__logo"},"Calendar")),r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"login__form"},r.a.createElement("h2",{className:"login__form-title"},r.a.createElement("button",{className:"login__form-title-item-active",onClick:function(){return e.setState({mode:"authorization"})}},"Authorization"),r.a.createElement("div",{className:"login__form-title-slash"},"/"),r.a.createElement("button",{className:"login__form-title-item",onClick:function(){return e.setState({mode:"registration"})}},"Registration")),r.a.createElement("div",{className:"login__msg"},new URLSearchParams(this.props.location.search).get("msg")),r.a.createElement("form",{action:"/api/auth",method:"POST",className:"login__form-main"},r.a.createElement("input",{name:"email",type:"text",className:"login__form-main-item",placeholder:"Email",value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),r.a.createElement("input",{name:"password",type:"password",className:"login__form-main-item",placeholder:"Password",value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})}}),r.a.createElement("input",{type:"submit",className:"login__form-main-button",value:"Log in"})))))}},{key:"renderRegistrationMode",value:function(){var e=this;return r.a.createElement("div",{id:"wrapper"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__logo"},"Calendar")),r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"login__form"},r.a.createElement("h2",{className:"login__form-title"},r.a.createElement("button",{className:"login__form-title-item",onClick:function(){return e.setState({mode:"authorization"})}},"Authorization"),r.a.createElement("div",{className:"login__form-title-slash"},"/"),r.a.createElement("button",{className:"login__form-title-item-active",onClick:function(){return e.setState({mode:"registration"})}},"Registration")),r.a.createElement("div",{className:"login__msg"},new URLSearchParams(this.props.location.search).get("msg")),r.a.createElement("form",{action:"/api/reg",method:"POST",className:"login__form-main"},r.a.createElement("input",{name:"name",type:"text",className:"login__form-main-item",placeholder:"Name",value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})}}),r.a.createElement("input",{name:"email",type:"text",className:"login__form-main-item",placeholder:"Email",value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),r.a.createElement("input",{name:"password",type:"password",className:"login__form-main-item",placeholder:"Password",value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})}}),r.a.createElement("input",{type:"submit",className:"login__form-main-button",value:"Register"})))))}}]),a}(n.Component)),x=function(){return r.a.createElement("div",null,"404 Not found")};m.a.render(r.a.createElement(function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,null,r.a.createElement(c.a,{exact:!0,path:"/",component:A}),r.a.createElement(c.a,{path:"/main",component:j}),r.a.createElement(c.a,{path:"/diary",component:P}),r.a.createElement(c.a,{path:"/chat",component:T}),r.a.createElement(c.a,{path:"*",component:x})))},null),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.6af16ea8.chunk.js.map
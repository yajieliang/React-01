(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(6),l=n.n(r),i=n(7),s=n(1),u=n(2),c=n(4),d=n(3),p=function(t){Object(c.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"box"},a.a.createElement("label",{htmlFor:"inp"},"todolist"),a.a.createElement("input",{id:"inp",ref:function(e){return t.input=e},value:this.props.inpValue,type:"text",onChange:this.props.handleChange}),a.a.createElement("button",{onClick:this.props.addTodo},"\u6dfb\u52a0"))}}]),n}(o.Component),h=function(t){Object(c.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))).renderTodos=function(e){return t.props.todos.map((function(n,o){if(e==n.done)return a.a.createElement("li",null,a.a.createElement("input",{onClick:function(){return t.props.toggle(o)},checked:e,type:"checkbox"}),a.a.createElement("span",{dangerouslySetInnerHTML:{__html:n.title}}),a.a.createElement("button",{onClick:function(){return t.props.delTodo(o)}},"\u5220\u9664"))}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.todos.filter((function(t){return!t.done})),e=this.props.todos.filter((function(t){return t.done}));return a.a.createElement("div",null,a.a.createElement("h2",null,"\u6b63\u5728\u8fdb\u884c",t.length),a.a.createElement("ul",null,this.renderTodos(!1)),a.a.createElement("h2",null,"\u5df2\u7ecf\u5b8c\u6210",e.length),a.a.createElement("ul",null,this.renderTodos(!0)))}}]),n}(o.Component),f=function(t){Object(c.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).handleonChange=function(e){t.setState({inpValue:e.target.value})},t.addTodo=function(){""!=t.state.inpValue&&(t.setState({todos:[{title:t.state.inpValue,done:!1}].concat(Object(i.a)(t.state.todos))}),t.setState({inpValue:""}))},t.delTodo=function(e){t.setState({todos:t.state.todos.filter((function(t,n){return n!=e}))})},t.toggle=function(e){var n=JSON.parse(JSON.stringify(t.state.todos));n[e].done=!n[e].done,t.setState({todos:n})},t.state={inpValue:"",todos:[{title:"1",done:!1},{title:"2",done:!0},{title:"3",done:!0},{title:"4",done:!1}]},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("todos");t&&this.setState({todos:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(){this.state.inpValue&&localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(p,{inpValue:this.state.inpValue,handleChange:this.handleChange,addTodo:this.addTodo}),a.a.createElement(h,{todos:this.state.todos,toggle:this.toggle,delTodo:this.delTodo}))}}]),n}(o.Component);l.a.render(a.a.createElement(f,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.55832095.chunk.js.map
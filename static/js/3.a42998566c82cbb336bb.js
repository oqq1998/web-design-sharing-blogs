webpackJsonp([3],{O1yF:function(e,t){},YDhy:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Dd8w"),s=r.n(n),a=r("NYxO"),o={data:function(){return{username:"",password:""}},methods:s()({},Object(a.b)(["register"]),{onRegister:function(){var e=this;this.register({username:this.username,password:this.password}).then(function(){e.$router.push({path:"/"})})}})},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"register"}},[r("h4",[e._v("新建用户名")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"新建用户名"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),r("h4",[e._v("用户密码")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"用户密码"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onRegister(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),r("el-button",{on:{click:e.onRegister}},[e._v("立即注册")])],1)},staticRenderFns:[]};var u=r("VU/8")(o,i,!1,function(e){r("O1yF")},"data-v-6faad48a",null);t.default=u.exports}});
//# sourceMappingURL=3.a42998566c82cbb336bb.js.map
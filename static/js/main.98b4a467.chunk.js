(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{51:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(32),i=n.n(c),a=(n(51),n(13)),s=n(14),d=n(17),l=n(16),u=n(43),p=(n(90),n(91),n(56)),j=n.n(p),x=n(102),b=n(103),h=n(74),g=n(101),y=n(99),f=n(104),O=n(105),m=n(106),v=n(107),k=n(108),C=(n(46),"Add_Todo"),_="Edit_Todo",w="Remove_Todo",T="Clear_Todo",N="Completed",z="Canceled",M=n(5),A=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={text:"",date:new Date,background:"",display:"",color:""},e.render_todo=function(){var t=e.props.todo;return console.log(t),Object(M.jsx)("div",{children:t.map((function(t){return Object(M.jsxs)(x.a,{className:"todo",style:{background:t.background},children:[Object(M.jsxs)(b.a,{xs:24,xl:8,children:[Object(M.jsx)("p",{style:{color:t.color},children:j()(new Date(t.date)).format("MMMM Do YYYY, h:mm:ss a")}),Object(M.jsx)("h4",{style:{color:t.color},children:t.text})]}),Object(M.jsxs)(b.a,{xs:24,xl:8,className:"icon",children:[Object(M.jsx)(h.a,{size:"large",type:"danger",icon:Object(M.jsx)(f.a,{}),shape:"circle",onClick:function(){return e.props.remove_todo(t.id)}}),Object(M.jsxs)("div",{style:{display:t.display},children:[Object(M.jsx)(h.a,{size:"large",type:"primary",icon:Object(M.jsx)(O.a,{}),shape:"circle",onClick:function(){return e.props.edit_todo(t.id)}}),Object(M.jsx)(h.a,{size:"large",type:"danger",shape:"circle",onClick:function(){return e.props.canceled(t.id)},children:"X"}),Object(M.jsx)(h.a,{size:"large",type:"success",icon:Object(M.jsx)(m.a,{}),shape:"circle",onClick:function(){return e.props.completed(t.id)}})]})]})]},t.id)}))})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;console.log(this.props);var t=g.a.Content,n="large";return Object(M.jsxs)(g.a,{className:"layout",children:[Object(M.jsx)("h1",{className:"h1",children:"Todo List"}),Object(M.jsxs)(t,{className:"site-layout-background content",style:{margin:"14px 16px",padding:24,minHeight:660},children:[Object(M.jsxs)(x.a,{style:{textAlign:"center"},children:[Object(M.jsx)(b.a,{xs:24,lg:12,xl:12,style:{paddingRight:10},children:Object(M.jsx)(y.a,{type:"text",value:this.state.text,onChange:function(t){return e.setState({text:t.target.value})},placeholder:"Add New Todo"})}),Object(M.jsxs)(b.a,{xs:24,lg:8,xl:12,children:[Object(M.jsx)(h.a,{type:"success",shape:"circle",icon:Object(M.jsx)(v.a,{}),size:n,style:{marginRight:10},onClick:function(){if(""===e.state.text)return e.state.text;e.props.add_todo(e.state.text,e.state.date,e.state.background,e.state.display),e.setState({text:""})}}),Object(M.jsx)(h.a,{type:"danger",shape:"circle",icon:Object(M.jsx)(k.a,{}),size:n,onClick:function(){e.props.clear_todo()}})]})]}),this.render_todo()]})]})}}]),n}(r.Component);var D=Object(u.b)((function(e){return{todo:e}}),{add_todo:function(e,t,n,r,o){return{type:C,text:e,date:t,background:n,display:r,color:o}},remove_todo:function(e){return{type:w,id:e}},edit_todo:function(e){return{type:_,id:e}},clear_todo:function(){return{type:T}},completed:function(e){return{type:N,id:e}},canceled:function(e){return{type:z,id:e}}})(A),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,109)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),c(e),i(e)}))},S=n(36),Y=n(75),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=null;if(t.type===C)return n=[].concat(Object(Y.a)(e),[{text:t.text,date:t.date,background:t.background,display:t.display,id:Math.random()}]),console.log("todo is : "+n),n;if(t.type===_){var r=prompt("Enter Name New Todo");return n=e.filter((function(e){return e.id===t.id?(e.text=r,e):e}))}if(t.type===w)return n=e.filter((function(e){return e.id!==t.id}));if(t.type===T)return n=[];if(t.type===N){var o="green",c="white",i="none";return n=e.filter((function(e){return e.id===t.id?(e.background=o,e.color=c,e.display=i,e):e}))}if(t.type===z){var a="red",s="white",d="none";return n=e.filter((function(e){return e.id===t.id?(e.background=a,e.color=s,e.display=d,e):e}))}return e},L=Object(S.b)(E);i.a.render(Object(M.jsx)(u.a,{store:L,children:Object(M.jsx)(o.a.StrictMode,{children:Object(M.jsx)(D,{})})}),document.getElementById("root")),F()}},[[95,1,2]]]);
//# sourceMappingURL=main.98b4a467.chunk.js.map
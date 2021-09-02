(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,o){},,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(1),c=o(4),a=o.n(c),r=(o(12),o(6)),s=o(2);var i=o(0),d=Object(n.createContext)();function l(e){var t=e.children,o=function(e,t){var o=Object(n.useState)(!0),c=Object(s.a)(o,2),a=c[0],r=c[1],i=Object(n.useState)(!1),d=Object(s.a)(i,2),l=d[0],u=d[1],j=Object(n.useState)(t),b=Object(s.a)(j,2),O=b[0],h=b[1];return Object(n.useEffect)((function(){setTimeout((function(){try{var o,n=localStorage.getItem(e);n?o=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),o=t),h(o),r(!1)}catch(l){u(l)}}),3e3)}),[a,l,O,t,e]),{item:O,saveItem:function(t){try{var o=JSON.stringify(t);localStorage.setItem(e,o),h(t)}catch(l){u(l)}},loading:a,error:l}}("TODOS_V1",[]),c=o.item,a=o.saveItem,l=o.loading,u=o.error,j=Object(n.useState)(""),b=Object(s.a)(j,2),O=b[0],h=b[1],f=Object(n.useState)(!1),m=Object(s.a)(f,2),x=m[0],p=m[1],T=c.filter((function(e){return!!e.completed})).length,v=c.length,g=[];g=O.length>=1?c.filter((function(e){var t=e.description.toLowerCase(),o=O.toLowerCase();return t.includes(o)})):c;return Object(i.jsx)(d.Provider,{value:{searchValue:O,setSearchValue:h,totalTodos:v,completedTodos:T,searchedTodos:g,onTodoChangeStatus:function(e){var t=c.findIndex((function(t){return t.id===e})),o=Object(r.a)(c);o[t].completed=!o[t].completed,a(o)},onDeleteTodo:function(e){var t=c.findIndex((function(t){return t.id===e})),o=Object(r.a)(c);o.splice(t,1),a(o)},onAddTodo:function(e){var t=Object(r.a)(c);t.push({id:"_"+Math.random().toString(36).substring(2,10),completed:!1,description:e}),a(t)},loading:l,error:u,openModal:x,setOpenModal:p},children:t})}o(14);function u(){var e=Object(n.useContext)(d),t=e.totalTodos,o=e.completedTodos;return Object(i.jsx)("div",{className:"TodoCounter",children:Object(i.jsxs)("h2",{className:"TodoCounter--text",children:["You have done ",Object(i.jsxs)("span",{className:"TodoCounter--highlight",children:[" ",o," "]})," of ",Object(i.jsxs)("span",{className:"TodoCounter--highlight",children:[" ",t," "]})," ToDo"]})})}o(15);function j(){var e=Object(n.useContext)(d),t=e.searchValue,o=e.setSearchValue;return Object(i.jsx)("input",{className:"TodoSearch",placeholder:"Search a ToDo",value:t,onChange:function(e){o(e.target.value)}})}o(16);function b(e){var t=e.children;return Object(i.jsx)("ul",{className:"TodoList",children:t})}o(17);function O(e){var t=e.text,o=e.completed,n=e.onTodoChangeStatus,c=e.onDeleteTodo;return Object(i.jsxs)("div",{className:"TodoItem",children:[Object(i.jsx)("i",{className:o?"TodoItem--status far fa-check-circle":"TodoItem--status far fa-circle",onClick:n}),Object(i.jsx)("p",{className:"TodoItem--text",children:t}),Object(i.jsx)("i",{className:"TodoItem--delete fas fa-minus-circle",onClick:c})]})}o(18);function h(e){var t=e.openModal,o=e.setOpenModal;return Object(i.jsx)("button",{className:"TodoCreateButton",onClick:function(){o(!t)},children:Object(i.jsx)("i",{className:"TodoCreateButton-icon fas fa-plus"})})}o(19);function f(e){var t=e.children;return a.a.createPortal(Object(i.jsx)("div",{className:"Modal-background",children:t}),document.getElementById("modal"))}o(20);function m(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),o=t[0],c=t[1],a=Object(n.useContext)(d),r=a.onAddTodo,l=a.setOpenModal;return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(o),l(!1)},children:[Object(i.jsx)("label",{children:"Todo create"}),Object(i.jsx)("textarea",{placeholder:"Descripcion del todo",value:o,onChange:function(e){var t=e.target;c(t.value)}}),Object(i.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(i.jsx)("button",{type:"button",onClick:function(){l(!1)},className:"TodoForm-button TodoForm-button-cancel",children:"Cancelar"}),Object(i.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button-add",children:"Crear"})]})]})}o(21);var x=function(){return Object(i.jsx)(f,{children:Object(i.jsx)("div",{className:"loader"})})},p=(o(22),o(23),function(){return Object(i.jsx)(f,{children:Object(i.jsx)("div",{className:"ErrorAlert animate-bottom",children:Object(i.jsx)("p",{className:"ErrorAlert-text",children:"Ocurrio un error, vuelva a intentarlo m\xe1s tarde"})})})}),T=(o(24),function(){return Object(i.jsx)("div",{className:"NoTodoPlaceholder",children:Object(i.jsx)("p",{className:"NoTodoPlaceholder-text",children:"Agrega tu primer Todo"})})});function v(){var e=Object(n.useContext)(d),t=e.error,o=e.loading,c=e.searchedTodos,a=e.onTodoChangeStatus,r=e.onDeleteTodo,s=e.openModal,l=e.setOpenModal;return Object(i.jsx)(i.Fragment,{children:o?Object(i.jsx)(x,{}):t?Object(i.jsx)(p,{}):Object(i.jsxs)("div",{className:"AppContainer",children:[Object(i.jsx)(u,{}),Object(i.jsx)(j,{}),o||c.length?Object(i.jsx)(b,{children:c.map((function(e){return Object(i.jsx)(O,{text:e.description,completed:e.completed,onTodoChangeStatus:function(){return a(e.id)},onDeleteTodo:function(){return r(e.id)}},e.id)}))}):Object(i.jsx)(T,{}),!!s&&Object(i.jsx)(f,{children:Object(i.jsx)(m,{})}),Object(i.jsx)(h,{openModal:s,setOpenModal:l})]})})}o(25);var g=function(){return Object(i.jsx)(l,{children:Object(i.jsx)(v,{})})};a.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.28d4321e.chunk.js.map
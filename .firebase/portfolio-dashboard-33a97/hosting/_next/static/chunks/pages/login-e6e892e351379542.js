(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{2070:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(6409)}])},7433:function(e,t,n){"use strict";var s=n(5893),l=n(5156),r=n.n(l);t.Z=function(e){return(0,s.jsx)("div",{className:r().box,children:e.children})}},88:function(e,t,n){"use strict";var s=n(5893),l=n(7031),r=n.n(l);t.Z=function(e){return(0,s.jsx)("button",{disabled:!1===e.valid,className:!0===e.valid?r().submit_button:r().disable_button,type:"submit",children:e.children})}},2267:function(e,t,n){"use strict";var s=n(5893),l=n(3679),r=n.n(l),i=n(3854),a=n(6893),o=n(2010),u=n(7294);n(1163),t.Z=function(e){let[t,n]=(0,u.useState)(!1),{theme:l,setTheme:_}=(0,o.F)();if((0,u.useEffect)(()=>{n(!0)},[]),!t)return null;let c=e=>{e.preventDefault(),_("dark"===l?"light":"dark")};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:r().theme_button,children:(0,s.jsx)("button",{className:r().button,onClick:c,children:"dark"===l?(0,s.jsx)(a.kXG,{style:{fontSize:"1.5rem"},className:r().sunOpen}):(0,s.jsx)(i.Fxr,{style:{fontSize:"1.5rem"},className:r().moonOpen})})})})}},6409:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var s=n(5893),l=n(8760),r=n(8214),i=n.n(r),a=n(7433),o=n(2010),u=n(2267),_=n(88),c=n(7294);let m=e=>{let[t,n]=(0,c.useState)(""),[s,l]=(0,c.useState)(!1),r=e(t),i=e=>{n(e.target.value)},a=e=>{l(!0)},o=()=>{n(""),l(!1)};return{value:t,isValid:r,hasError:!r&&s,valueChangeHandler:i,inputBlurHandler:a,reset:o}};var d=function(e){let{value:t,isValid:n,hasError:r,valueChangeHandler:c,inputBlurHandler:d,reset:h}=m(e=>""!==e.trim()),{value:f,isValid:b,hasError:p,valueChangeHandler:x,inputBlurHandler:g,reset:j}=m(e=>e.includes("@")),v=!1;return!0===b&&!0===n&&(v=!0),(0,s.jsx)(o.f,{themes:["dark","light"],enableSystem:!1,children:(0,s.jsxs)(l.Z,{maxWidth:"lg",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"},children:[(0,s.jsx)(u.Z,{}),(0,s.jsxs)(a.Z,{children:[(0,s.jsx)("h2",{className:i().form_title,style:{margin:".5rem 0",textAlign:"center"},children:"Login"}),(0,s.jsx)("p",{className:i().form_desc,style:{margin:"2rem ",textAlign:"center"},children:"Hello! Please input the field provided below!"}),(0,s.jsxs)("form",{action:"/send-data-here",method:"post",className:i().form,children:[(0,s.jsxs)("div",{className:i().form_input_container,children:[(0,s.jsx)("label",{className:i().label,htmlFor:"first",children:"Email"}),(0,s.jsx)("input",{className:i().input,type:"email",id:"email",onChange:x,onBlur:g,value:f}),p&&(0,s.jsx)("p",{className:i().error,children:"Please enter a valid email."})]}),(0,s.jsxs)("div",{className:i().form_input_container,style:{marginBottom:"1rem"},children:[(0,s.jsx)("label",{className:i().label,htmlFor:"last",children:"Password"}),(0,s.jsx)("input",{className:i().input,id:"password",onChange:c,onBlur:d,value:t}),r&&(0,s.jsx)("p",{className:i().error,children:"Password cant be empty!"})]}),(0,s.jsx)(_.Z,{valid:v,children:"Submit"})]})]})]})})}},5156:function(e){e.exports={box:"CustomBox_box__8ZVOb"}},7031:function(e){e.exports={submit_button:"CustomButton_submit_button___DhVL",disable_button:"CustomButton_disable_button__2Syo7"}},3679:function(e){e.exports={sunOpen:"ToggleTheme_sunOpen__M8Lz1",moonOpen:"ToggleTheme_moonOpen__rkNK2",theme_button:"ToggleTheme_theme_button__exs17",button:"ToggleTheme_button__hegPK"}},8214:function(e){e.exports={form:"login_form__WiaT0",form_input_container:"login_form_input_container__a4w8S",input:"login_input__D_Trd",submit_button:"login_submit_button__FLPps",form_desc:"login_form_desc___gpcy",label:"login_label__0eUNx",error:"login_error__Gg_eL"}}},function(e){e.O(0,[556,766,774,888,179],function(){return e(e.s=2070)}),_N_E=e.O()}]);
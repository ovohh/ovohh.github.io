import{ap as y,as as V,aq as i,at as b,au as w,ar as F,av as q}from"./page-BrkCYm1w.js";import{E as C,a as E}from"./el-form-item-Ba8rQDVa.js";import{u as B}from"./user-ySumtv3C.js";import{j as z,r as N,E as x,m as R,n as s,a8 as $,l as A,v as g,B as o,Y as _,ad as D,ae as U,af as L}from"./index-CrA-A6yx.js";import"./_Uint8Array-6LAaurwg.js";const T=d=>(D("data-v-b5dbedea"),d=d(),U(),d),Z={class:"card-header"},j=T(()=>g("span",null,"登录",-1)),M={class:"box"},P=z({__name:"SignIn",setup(d){const c=B(),f=y(),p=N(),r=x({username:"",password:""}),v=n=>{n&&(n.resetFields(),i.success("重置成功"))},k=x({username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,max:10,message:"仅支持5-10个字符",trigger:"blur"},{pattern:/^[a-zA-Z0-9]+$/,message:"只能输入数字和字母",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:5,max:16,message:"长度为5-16",trigger:"blur"},{pattern:/^[a-zA-Z0-9]+$/,message:"只能输入数字和字母",trigger:"blur"}]}),I=async n=>{n&&await n.validate(async(a,l)=>{a?b.post(f.api+"/signin",{username:r.username,password:r.password},{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){if(t.status===200)if(t.data.code===200){const m=t.data.token.access_token;localStorage.setItem("token",m),w.success({title:"登录成功",message:"欢迎回来，"+r.username}),b.get(f.api+"/user",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(function(e){e.status===200?e.data.code===200?(i.success("刷新用户信息成功"),c.userData.username=e.data.data.username,c.userData.vip_expiration_timestamp=e.data.data.vip_expiration_timestamp,c.userData.qq_bind=e.data.data.qq_bind):i.error(e.data.msg):e.status===401?i({message:"登录失败333",type:"success"}):i.error("请求失败")}).catch(function(e){alert(e),console.log(e)})}else alert(t.data.msg);else t.status===401?alert("登录失效"):(console.log(t),alert("登录失败"))}).catch(function(t){w.error({title:"登录失败",message:t})}):console.log("error submit!",l)})};return(n,a)=>{const l=F,t=$("RouterLink"),m=q,e=C,S=E,h=V;return A(),R(h,{style:{"max-width":"480px"}},{header:s(()=>[g("div",Z,[j,o(t,{to:"/"},{default:s(()=>[o(l,{type:"danger",size:"small"},{default:s(()=>[_("关闭")]),_:1})]),_:1})])]),default:s(()=>[g("div",M,[o(S,{model:r,rules:k,ref_key:"ruleFormRef",ref:p,"label-width":"auto",style:{"max-width":"600px"},"status-icon":""},{default:s(()=>[o(e,{label:"用户名：",prop:"username"},{default:s(()=>[o(m,{modelValue:r.username,"onUpdate:modelValue":a[0]||(a[0]=u=>r.username=u)},null,8,["modelValue"])]),_:1}),o(e,{label:"登录密码：",prop:"password"},{default:s(()=>[o(m,{modelValue:r.password,"onUpdate:modelValue":a[1]||(a[1]=u=>r.password=u),type:"password"},null,8,["modelValue"])]),_:1}),o(e,null,{default:s(()=>[o(l,{type:"primary",onClick:a[2]||(a[2]=u=>I(p.value))},{default:s(()=>[_("登录")]),_:1}),o(l,{onClick:a[3]||(a[3]=u=>v(p.value))},{default:s(()=>[_("清空")]),_:1})]),_:1})]),_:1},8,["model","rules"])])]),_:1})}}}),O=L(P,[["__scopeId","data-v-b5dbedea"]]);export{O as default};

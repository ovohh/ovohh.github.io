import{am as y,ap as x,an as v,aq as k,ao as E}from"./axios-C_uVDudZ.js";import{E as F,a as U}from"./el-form-item-CeV2jItU.js";import{j as $,r as C,E as g,a5 as I,l as Q,m as B,n as s,v as p,B as a,Y as m,aa as S,ab as z,ac as A}from"./index-9c-LS0zl.js";const R=i=>(S("data-v-b84fbaeb"),i=i(),z(),i),Z=R(()=>p("div",{class:"card-header"},[p("span",null,"注册")],-1)),N={class:"box"},L=$({__name:"SignUp",setup(i){const _=(l,e,t)=>{console.log(l),e===""?t(new Error("Please input the password again")):e!==r.password?t(new Error("两次输入密码不同")):t()},u=C(),r=g({username:"",password:"",password_confirm:"",qq_bind:"",key:""}),b=async l=>{l&&await l.validate((e,t)=>{e?x.post("http://192.168.31.102:8000/signup",{username:r.username,password:r.password,qq_bind:r.qq_bind,key:r.key}).then(function(n){console.log(n.data)}):console.log("error submit!",t)})},f=l=>{l&&(l.resetFields(),v.success("重置成功"))},c=g({username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,max:10,message:"仅支持5-10个字符",trigger:"blur"},{pattern:/^[a-zA-Z0-9]+$/,message:"只能输入数字和字母",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:5,max:16,message:"长度为5-16",trigger:"blur"},{pattern:/^[a-zA-Z0-9]+$/,message:"只能输入数字和字母",trigger:"blur"}],password_confirm:[{required:!0,message:"请确认密码",trigger:"blur"},{min:5,max:16,message:"长度为5-16",trigger:"blur"},{pattern:/^[a-zA-Z0-9]+$/,message:"只能输入数字和字母",trigger:"blur"},{validator:_,trigger:"blur"}],qq_bind:[{required:!0,message:"请输入绑定QQ",trigger:"blur"},{min:5,max:10,message:"QQ号码格式有误",trigger:"blur"},{pattern:/^[0-9]+$/,message:"只能输入数字",trigger:"blur"}],key:[{required:!0,message:"请输入激活码",trigger:"blur"},{min:24,max:24,message:"激活码格式有误",trigger:"blur"},{pattern:/^[a-zA-Z0-9]+$/,message:"只能输入数字和字母",trigger:"blur"}]});return(l,e)=>{const t=k,n=F,d=E,w=I("RouterLink"),q=U,V=y;return Q(),B(V,{style:{"max-width":"480px"}},{header:s(()=>[Z]),default:s(()=>[p("div",N,[a(q,{model:r,rules:c,"label-position":"right",ref_key:"ruleFormRef",ref:u,"label-width":"auto",style:{"max-width":"600px"},"status-icon":""},{default:s(()=>[a(n,{label:"用户名：",prop:"username","label-position":"left"},{default:s(()=>[a(t,{modelValue:r.username,"onUpdate:modelValue":e[0]||(e[0]=o=>r.username=o)},null,8,["modelValue"])]),_:1}),a(n,{label:"登录密码：",prop:"password","label-position":"left"},{default:s(()=>[a(t,{modelValue:r.password,"onUpdate:modelValue":e[1]||(e[1]=o=>r.password=o),type:"password"},null,8,["modelValue"])]),_:1}),a(n,{label:"确认密码：",prop:"password_confirm","label-position":"left"},{default:s(()=>[a(t,{modelValue:r.password_confirm,"onUpdate:modelValue":e[2]||(e[2]=o=>r.password_confirm=o),type:"password"},null,8,["modelValue"])]),_:1}),a(n,{label:"绑定QQ：",prop:"qq_bind","label-position":"left"},{default:s(()=>[a(t,{modelValue:r.qq_bind,"onUpdate:modelValue":e[3]||(e[3]=o=>r.qq_bind=o)},null,8,["modelValue"])]),_:1}),a(n,{label:"卡密：",prop:"key","label-position":"left"},{default:s(()=>[a(t,{modelValue:r.key,"onUpdate:modelValue":e[4]||(e[4]=o=>r.key=o)},null,8,["modelValue"])]),_:1}),a(n,null,{default:s(()=>[a(d,{type:"primary",onClick:e[5]||(e[5]=o=>b(u.value))},{default:s(()=>[m("注册")]),_:1}),a(d,{onClick:e[6]||(e[6]=o=>f(u.value))},{default:s(()=>[m("清空")]),_:1}),a(w,{to:"/"},{default:s(()=>[a(d,{type:"primary"},{default:s(()=>[m("返回首页")]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])])]),_:1})}}}),M=A(L,[["__scopeId","data-v-b84fbaeb"]]);export{M as default};
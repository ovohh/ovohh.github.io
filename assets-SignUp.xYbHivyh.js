import{ap as k,as as E,at as F,au as m,aq as f,ar as U,av as S}from"./assets-page.BzasPhui.js";import{E as $,a as h}from"./assets-el-form-item.DeYBPv6J.js";import{j as C,r as I,E as c,m as Q,n as r,a8 as z,l as B,v as _,B as s,Y as g,ad as A,ae as N,af as R}from"./assets-index.RS9h-nau.js";import"./assets-_Uint8Array.CmkiBG3s.js";const Z=u=>(A("data-v-82eb97d3"),u=u(),N(),u),P={class:"card-header"},L=Z(()=>_("span",null,"注册",-1)),j={class:"box"},M=C({__name:"SignUp",setup(u){const b=k(),w=(n,e,o)=>{e===""?o(new Error("Please input the password again")):e!==a.password?o(new Error("两次输入密码不同")):o()},p=I(),a=c({username:"",password:"",password_confirm:"",qq_bind:"",key:""}),q=async n=>{n&&await n.validate(async(e,o)=>{e?F.post(b.api+"/signup",{username:a.username,password:a.password,qq_bind:a.qq_bind,key_code:a.key}).then(function(l){l.status===200?l.data.code===200?(m.success({title:"注册成功！",message:l.data.msg}),f.success("注册成功")):m.error({title:"注册失败！",message:l.data.msg}):m.error({title:"请求失败02",message:l.data.msg})}).catch(function(l){m.error({title:"请求失败01",message:l})}):console.log("error submit!",o)})},V=n=>{n&&(n.resetFields(),f.success("重置成功"))},y=c({username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,max:10,message:"仅支持5-10个字符",trigger:"blur"},{pattern:/^[a-zA-Z0-9]+$/,message:"只能输入数字和字母",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:5,max:16,message:"长度为5-16",trigger:"blur"},{pattern:/^[a-zA-Z0-9]+$/,message:"只能输入数字和字母",trigger:"blur"}],password_confirm:[{required:!0,message:"请确认密码",trigger:"blur"},{min:5,max:16,message:"长度为5-16",trigger:"blur"},{pattern:/^[a-zA-Z0-9]+$/,message:"只能输入数字和字母",trigger:"blur"},{validator:w,trigger:"blur"}],qq_bind:[{required:!0,message:"绑定QQ用于展示头像、找回密码",trigger:"blur"},{min:5,max:10,message:"QQ号码格式有误",trigger:"blur"},{pattern:/^[0-9]+$/,message:"只能输入数字",trigger:"blur"}],key:[{required:!0,message:"请输入激活码",trigger:"blur"},{min:24,max:24,message:"激活码格式有误",trigger:"blur"},{pattern:/^[a-zA-Z0-9]+$/,message:"只能输入数字和字母",trigger:"blur"}]});return(n,e)=>{const o=U,l=z("RouterLink"),d=S,i=$,x=h,v=E;return B(),Q(v,{style:{"max-width":"480px"}},{header:r(()=>[_("div",P,[L,s(l,{to:"/"},{default:r(()=>[s(o,{type:"danger",size:"small"},{default:r(()=>[g("关闭")]),_:1})]),_:1})])]),default:r(()=>[_("div",j,[s(x,{model:a,rules:y,"label-position":"right",ref_key:"ruleFormRef",ref:p,"label-width":"auto",style:{"max-width":"600px"},"status-icon":""},{default:r(()=>[s(i,{label:"用户名：",prop:"username","label-position":"left"},{default:r(()=>[s(d,{modelValue:a.username,"onUpdate:modelValue":e[0]||(e[0]=t=>a.username=t),placeholder:"5-10位字母或数字"},null,8,["modelValue"])]),_:1}),s(i,{label:"登录密码：",prop:"password","label-position":"left"},{default:r(()=>[s(d,{modelValue:a.password,"onUpdate:modelValue":e[1]||(e[1]=t=>a.password=t),type:"password",placeholder:"5-16位字符"},null,8,["modelValue"])]),_:1}),s(i,{label:"确认密码：",prop:"password_confirm","label-position":"left"},{default:r(()=>[s(d,{modelValue:a.password_confirm,"onUpdate:modelValue":e[2]||(e[2]=t=>a.password_confirm=t),type:"password",placeholder:"5-16位字符"},null,8,["modelValue"])]),_:1}),s(i,{label:"绑定QQ：",prop:"qq_bind","label-position":"left"},{default:r(()=>[s(d,{modelValue:a.qq_bind,"onUpdate:modelValue":e[3]||(e[3]=t=>a.qq_bind=t),placeholder:"用于展示头像、找回密码"},null,8,["modelValue"])]),_:1}),s(i,{label:"卡密：",prop:"key","label-position":"left"},{default:r(()=>[s(d,{modelValue:a.key,"onUpdate:modelValue":e[4]||(e[4]=t=>a.key=t)},null,8,["modelValue"])]),_:1}),s(i,null,{default:r(()=>[s(o,{type:"primary",onClick:e[5]||(e[5]=t=>q(p.value))},{default:r(()=>[g("注册")]),_:1}),s(o,{onClick:e[6]||(e[6]=t=>V(p.value))},{default:r(()=>[g("清空")]),_:1})]),_:1})]),_:1},8,["model","rules"])])]),_:1})}}}),H=R(M,[["__scopeId","data-v-82eb97d3"]]);export{H as default};

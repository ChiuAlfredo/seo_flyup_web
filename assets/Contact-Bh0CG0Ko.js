import{r as g,c as p,o as f,b as s,g as x,i as y,h as w,j as c,v as m,t as v,n as k}from"./app-D5UKDJA7.js";class u{constructor(t=0,a="Network Error"){this.status=t,this.text=a}}const j=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},d={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:j()},V=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},S=async(e,t,a={})=>{const r=await fetch(d.origin+e,{method:"POST",headers:a,body:t}),i=await r.text(),n=new u(r.status,i);if(r.ok)return n;throw n},T=(e,t,a)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||typeof a!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},_=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},L=e=>e.webdriver||!e.languages||e.languages.length===0,P=()=>new u(451,"Unavailable For Headless Browser"),B=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},E=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},M=(e,t)=>e instanceof FormData?e.get(t):e[t],R=(e,t)=>{if(E(e))return!1;B(e.list,e.watchVariable);const a=M(t,e.watchVariable);return typeof a!="string"?!1:e.list.includes(a)},C=()=>new u(403,"Forbidden"),H=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},q=async(e,t,a)=>{const r=Number(await a.get(e)||0);return t-Date.now()+r},N=async(e,t,a)=>{if(!t.throttle||!a)return!1;H(t.throttle,t.id);const r=t.id||e;return await q(r,t.throttle,a)>0?!0:(await a.set(r,Date.now().toString()),!1)},D=()=>new u(429,"Too Many Requests"),O=async(e,t,a,r)=>{const i=V(r),n=i.publicKey||d.publicKey,o=i.blockHeadless||d.blockHeadless,l=i.storageProvider||d.storageProvider,h={...d.blockList,...i.blockList},b={...d.limitRate,...i.limitRate};return o&&L(navigator)?Promise.reject(P()):(T(n,e,t),_(a),a&&R(h,a)?Promise.reject(C()):await N(location.pathname,b,l)?Promise.reject(D()):S("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:n,service_id:e,template_id:t,template_params:a}),{"Content-type":"application/json"}))},U={send:O},z={class:"min-h-screen py-16 bg-gray-50"},F={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},I={class:"max-w-3xl mx-auto"},K={class:"bg-white py-8 px-6 shadow rounded-lg sm:px-10"},A={class:"mt-1"},J={class:"mt-1"},W={class:"mt-1"},G={class:"mt-1"},Q=["disabled"],Z={__name:"Contact",setup(e){const t=g({name:"",email:"",phone:"",message:""}),a=g(!1),r=g({success:!1,message:""}),i=async()=>{a.value=!0,r.value={success:!1,message:""};try{await U.send("service_4rhl6dm","template_3vjurbm",{to_email:"petercy32@gmail.com",from_name:t.value.name,from_email:t.value.email,phone:t.value.phone,message:t.value.message},"FPdj02WkwEtmTld54"),r.value={success:!0,message:"訊息已成功送出！我們將盡快與您聯繫。"},t.value={name:"",email:"",phone:"",message:""}}catch(n){r.value={success:!1,message:"抱歉，訊息傳送失敗。請稍後再試。"},console.error("Email sending failed:",n)}finally{a.value=!1}};return(n,o)=>(f(),p("div",z,[s("div",F,[o[9]||(o[9]=s("div",{class:"lg:text-center mb-16"},[s("h2",{class:"text-base text-indigo-600 font-semibold tracking-wide uppercase"},"聯絡我們"),s("p",{class:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"}," 與我們開始對話 "),s("p",{class:"mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"}," 填寫以下表單，我們將盡快與您聯繫，為您提供專業的諮詢服務。 ")],-1)),s("div",I,[s("div",K,[s("form",{onSubmit:y(i,["prevent"]),class:"space-y-6"},[s("div",null,[o[4]||(o[4]=s("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"姓名",-1)),s("div",A,[c(s("input",{id:"name",type:"text",required:"","onUpdate:modelValue":o[0]||(o[0]=l=>t.value.name=l),class:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"},null,512),[[m,t.value.name]])])]),s("div",null,[o[5]||(o[5]=s("label",{for:"email",class:"block text-sm font-medium text-gray-700"},"電子郵件",-1)),s("div",J,[c(s("input",{id:"email",type:"email",required:"","onUpdate:modelValue":o[1]||(o[1]=l=>t.value.email=l),class:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"},null,512),[[m,t.value.email]])])]),s("div",null,[o[6]||(o[6]=s("label",{for:"phone",class:"block text-sm font-medium text-gray-700"},"電話",-1)),s("div",W,[c(s("input",{id:"phone",type:"tel","onUpdate:modelValue":o[2]||(o[2]=l=>t.value.phone=l),class:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"},null,512),[[m,t.value.phone]])])]),s("div",null,[o[7]||(o[7]=s("label",{for:"message",class:"block text-sm font-medium text-gray-700"},"訊息內容",-1)),s("div",G,[c(s("textarea",{id:"message",rows:"4",required:"","onUpdate:modelValue":o[3]||(o[3]=l=>t.value.message=l),class:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"},null,512),[[m,t.value.message]])])]),s("div",null,[s("button",{type:"submit",disabled:a.value,class:"w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},v(a.value?"傳送中...":"送出訊息"),9,Q)]),r.value.message?(f(),p("div",{key:0,class:k(["mt-4 p-4 rounded-md",{"bg-green-50 text-green-800":r.value.success,"bg-red-50 text-red-800":!r.value.success}])},v(r.value.message),3)):w("",!0)],32)]),o[8]||(o[8]=x('<div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3"><div class="flex items-center"><div class="flex-shrink-0"><svg class="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div><div class="ml-3"><p class="text-lg font-medium text-gray-900">電話諮詢</p><p class="mt-1 text-gray-500">0966-680-565</p></div></div><div class="flex items-center"><div class="flex-shrink-0"><svg class="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><div class="ml-3"><p class="text-lg font-medium text-gray-900">電子郵件</p><p class="mt-1 text-gray-500">petercy32@gmail.com</p></div></div><div class="flex items-center"><div class="flex-shrink-0"><svg class="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></div><div class="ml-3"><p class="text-lg font-medium text-gray-900">LINE</p><p class="mt-1 text-gray-500">peter4101</p></div></div></div>',1))])])]))}};export{Z as default};

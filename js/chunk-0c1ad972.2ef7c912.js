(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c1ad972"],{"1dde":function(t,e,a){var n=a("d039"),c=a("b622"),l=a("2d00"),o=c("species");t.exports=function(t){return l>=51||!n((function(){var e=[],a=e.constructor={};return a[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},8418:function(t,e,a){"use strict";var n=a("c04e"),c=a("9bf2"),l=a("5c6c");t.exports=function(t,e,a){var o=n(e);o in t?c.f(t,o,l(0,a)):t[o]=a}},"99af":function(t,e,a){"use strict";var n=a("23e7"),c=a("d039"),l=a("e8b5"),o=a("861d"),r=a("7b0b"),s=a("50c4"),i=a("8418"),u=a("65f0"),d=a("1dde"),b=a("b622"),h=a("2d00"),m=b("isConcatSpreadable"),f=9007199254740991,p="Maximum allowed index exceeded",j=h>=51||!c((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),O=d("concat"),v=function(t){if(!o(t))return!1;var e=t[m];return void 0!==e?!!e:l(t)},g=!j||!O;n({target:"Array",proto:!0,forced:g},{concat:function(t){var e,a,n,c,l,o=r(this),d=u(o,0),b=0;for(e=-1,n=arguments.length;e<n;e++)if(l=-1===e?o:arguments[e],v(l)){if(c=s(l.length),b+c>f)throw TypeError(p);for(a=0;a<c;a++,b++)a in l&&i(d,b,l[a])}else{if(b>=f)throw TypeError(p);i(d,b++,l)}return d.length=b,d}})},b0c0:function(t,e,a){var n=a("83ab"),c=a("9bf2").f,l=Function.prototype,o=l.toString,r=/^\s*function ([^ (]*)/,s="name";n&&!(s in l)&&c(l,s,{configurable:!0,get:function(){try{return o.call(this).match(r)[1]}catch(t){return""}}})},b789:function(t,e,a){"use strict";a.r(e);a("b0c0");var n=a("7a23"),c=Object(n["h"])("h1",null,"購物車列表",-1),l={class:"container"},o={class:"table align-middle"},r=Object(n["h"])("thead",null,[Object(n["h"])("tr",null,[Object(n["h"])("th",null,"品名"),Object(n["h"])("th",{style:{width:"150px"}},"數量/單位"),Object(n["h"])("th",null,"單價"),Object(n["h"])("th",{style:{width:"150px"}})])],-1),s={class:"input-group input-group-sm mt-3"},i={class:"input-group mb-3"},u=Object(n["h"])("span",{class:"input-group-text",id:"basic-addon2"},"數量",-1),d=Object(n["h"])("i",{class:"fas fa-spinner fa-pulse"},null,-1),b=Object(n["g"])(" x "),h=Object(n["h"])("tfoot",null,[Object(n["h"])("tr",null,[Object(n["h"])("td",{colspan:"3",class:"text-end"},"總計"),Object(n["h"])("td",{class:"text-end"})]),Object(n["h"])("tr",null,[Object(n["h"])("td",{colspan:"3",class:"text-end text-success"},"折扣價"),Object(n["h"])("td",{class:"text-end text-success"})])],-1),m={class:"my-5 row justify-content-center"},f={class:"mb-3"},p=Object(n["h"])("label",{for:"email"},"E-mail",-1),j={class:"mb-3"},O=Object(n["h"])("label",{for:"name"},"姓名",-1),v={class:"mb-3"},g=Object(n["h"])("label",{for:"number"},"聯絡方式",-1),x={class:"mb-3"},y=Object(n["h"])("label",{for:"address"},"地址",-1),V={class:"mb-3"},w=Object(n["h"])("label",{for:"textarea"},"留言區",-1),C=Object(n["h"])("div",{class:"text-end"},[Object(n["h"])("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function k(t,e,a,k,S,q){var U=Object(n["A"])("Field"),$=Object(n["A"])("ErrorMessage"),E=Object(n["A"])("Form");return Object(n["t"])(),Object(n["e"])("div",null,[c,Object(n["h"])("div",l,[Object(n["h"])("table",o,[r,Object(n["h"])("tbody",null,[S.cart.carts?(Object(n["t"])(!0),Object(n["e"])(n["a"],{key:0},Object(n["y"])(S.cart.carts,(function(t){return Object(n["t"])(),Object(n["e"])("tr",{key:t.id},[Object(n["h"])("td",null,Object(n["D"])(t.product.title),1),Object(n["h"])("td",null,[Object(n["h"])("div",s,[Object(n["h"])("div",i,[Object(n["L"])(Object(n["h"])("input",{min:"1",type:"number",onChange:function(e){return q.updateCart(t)},disabled:t.id===S.loadingStatus.loadingItem,"onUpdate:modelValue":function(e){return t.qty=e},class:"form-control"},null,40,["onChange","disabled","onUpdate:modelValue"]),[[n["G"],t.qty,void 0,{number:!0}]]),u])])]),Object(n["h"])("td",null,Object(n["D"])(t.total),1),Object(n["h"])("td",null,[Object(n["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:Object(n["M"])((function(e){return q.delProduct(t.id)}),["prevent"])},[d,b],8,["onClick"])])])})),128)):Object(n["f"])("",!0)]),h])]),Object(n["h"])("div",m,[Object(n["h"])(E,{onSubmit:q.onSubmit,class:"col-md-6",ref:"form"},{default:Object(n["K"])((function(t){var a=t.errors;return[Object(n["h"])("div",f,[p,Object(n["h"])(U,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":a["email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:S.form.user.email,"onUpdate:modelValue":e[1]||(e[1]=function(t){return S.form.user.email=t})},null,8,["class","modelValue"]),Object(n["h"])($,{name:"email",class:"invalid-feedback"})]),Object(n["h"])("div",j,[O,Object(n["h"])(U,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":a["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:S.form.user.name,"onUpdate:modelValue":e[2]||(e[2]=function(t){return S.form.user.name=t})},null,8,["class","modelValue"]),Object(n["h"])($,{name:"姓名",class:"invalid-feedback"})]),Object(n["h"])("div",v,[g,Object(n["h"])(U,{id:"number",name:"聯絡方式",type:"number",class:["form-control",{"is-invalid":a["聯絡方式"]}],placeholder:"請輸入聯絡方式",rules:q.isPhone,modelValue:S.form.user.tel,"onUpdate:modelValue":e[3]||(e[3]=function(t){return S.form.user.tel=t})},null,8,["class","rules","modelValue"]),Object(n["h"])($,{role:"alert",name:"聯絡方式",class:"invalid-feedback"})]),Object(n["h"])("div",x,[y,Object(n["h"])(U,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":a["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:S.form.user.address,"onUpdate:modelValue":e[4]||(e[4]=function(t){return S.form.user.address=t})},null,8,["class","modelValue"]),Object(n["h"])($,{role:"alert",name:"地址",class:"invalid-feedback"})]),Object(n["h"])("div",V,[w,Object(n["L"])(Object(n["h"])("textarea",{id:"textarea",name:"留言區",type:"textarea",class:["form-control",{"is-invalid":a["留言區"]}],placeholder:"請輸入留言","onUpdate:modelValue":e[5]||(e[5]=function(t){return S.form.message=t})},null,2),[[n["G"],S.form.message]])]),C]})),_:1},8,["onSubmit"])])])}a("99af");var S={data:function(){return{cart:{},loadingStatus:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("lj787448952","/cart");this.$http.get(e).then((function(e){t.cart=e.data.data})).catch((function(t){alert("出錯了，找問題"),console.log(t.data)}))},delProduct:function(t){var e=this,a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("lj787448952","/cart/").concat(t);this.$http.delete(a).then((function(t){t.data.success?(console.log(t),e.getCart()):alert(t.data.message)})).catch((function(t){alert("出錯了，找問題"),console.log(t.data)}))},updateCart:function(t){var e=this;this.loadingStatus.loadingItem=t.id;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("lj787448952","/cart/").concat(t.id),n={product_id:t.product.id,qty:t.qty};console.log(n,a),this.$http.put(a,{data:n}).then((function(t){console.log(t),e.loadingStatus.loadingItem="",e.getCart()})).catch((function(t){alert("出錯了，找問題"),console.log(t.data)}))},isPhone:function(t){var e=/^(09)[0-9]{8}$/;return!!e.test(t)||"需要正確的聯絡方式"},onSubmit:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("lj787448952","/order"),a=this.form;this.$http.post(e,{data:a}).then((function(e){e.data.success?(alert(e.data.message),t.$refs.form.resetForm(),t.getCart()):alert(e.data.message)}))}},created:function(){this.getCart()}};S.render=k;e["default"]=S}}]);
//# sourceMappingURL=chunk-0c1ad972.2ef7c912.js.map
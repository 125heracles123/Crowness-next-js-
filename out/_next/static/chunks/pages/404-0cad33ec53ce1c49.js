(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{5467:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(4654)}])},2407:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var a=t(1527),r=t(2884),s=t(9200),o=t.n(s),i=t(5027),l=t.n(i),c=t(7758),m=t.n(c),d=t(3462),u=t(2147),h=t(959),x=t(3669),b=t(8806);function p(){let e;let n=(0,h.useRef)(null),[t,s]=(0,h.useState)(""),[o,i]=(0,h.useState)(!1),[c,p]=(0,h.useState)([]),j=b.Z.Search,f=(0,h.useCallback)(async n=>{s(n.target.value),""!==n.target.value?(await (clearTimeout(e),new Promise(function(n){e=setTimeout(function(){n(null)},700)})),x.Z.get(j+n.target.value).then(e=>p(e.data.data)).catch(e=>console.log(e.message))):p([])},[j]),g=(0,h.useCallback)(e=>{n.current&&!n.current.contains(e.target)&&(i(!1),window.removeEventListener("click",g))},[]),v=(0,h.useCallback)(()=>{i(!0),window.removeEventListener("click",g)},[g]),w=(0,r.useRouter)(),[y,k]=(0,h.useState)(!1);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"navbar bg-gray-700 items-start",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("div",{className:"mt-10"}),(0,a.jsx)(l(),{href:"/",className:"normal-case text-2xl font-bold text-indigo-100",children:(0,a.jsx)(m(),{alt:"logo",src:"/alice.png",width:50,height:10})})]}),(0,a.jsxs)("div",{className:"flex-none gap-2",children:[(0,a.jsxs)("div",{className:"form-control",children:[(0,a.jsx)("input",{type:"text",placeholder:"Search ....",className:"input input-ghost w-full max-w-xs rounded-xl",onChange:f,onFocus:v,value:t}),(0,a.jsx)("div",{className:"",children:o&&c&&t?t.length>0&&(0,a.jsx)("ul",{className:"absolute z-50 border border-cyan-400 bg-base-100 rounded-xl",children:c.map(e=>{let{mal_id:n,title:t,url:r}=e;return(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:r,children:(0,a.jsx)("p",{className:"font-semibold transition duration-500 ease-in-out hover:text-blue-500",children:t})})},n)})}):null})]}),(0,a.jsxs)("div",{className:"dropdown dropdown-end rounded-lg",onClick:()=>y?k(!1):k(!0),children:[(0,a.jsx)("label",{tabIndex:0,className:"btn btn-rounded btn-outline rounded-lg",children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)(d.G,{icon:u.xiG})})}),y?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("ul",{tabIndex:0,className:"mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-lg w-52",children:[(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/",className:"/"===w.pathname?"justify-between border-solid border-2 hover:rounded-xl border-sky-700":"justify-between hover:border-solid hover:border-2 hover:border-sky-500",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/movie",className:"/movie"===w.pathname?"justify-between border-solid border-2 border-sky-700":"justify-between hover:border-solid hover:border-2 hover:border-sky-500",children:"Movie"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/about",className:"/about"===w.pathname?"justify-between border-solid border-2 border-sky-700":"justify-between hover:border-solid hover:border-2 hover:border-sky-500",children:"About"})})]})}):()=>k(!1)]})]})]})})}function j(e){let n=(0,r.useRouter)(),t="/alice.png";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("link",{rel:"icon",type:"image/png",href:t}),(0,a.jsx)("link",{rel:"shorcut icon",href:t}),(0,a.jsx)("link",{rel:"canonical",href:n.pathname}),(0,a.jsx)("meta",{name:"referrer",content:"no-referrer-when-downgrade"}),(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{name:"title",content:e.name}),(0,a.jsx)("meta",{name:"description",content:"InfoAnime adalah informasi seputar anime series tv yg akan rilis dan movie, berdasarkan informasi bersumber dari MyAnimeList"}),(0,a.jsx)("meta",{name:"keywords",content:"infoanime, animeinfo, anime, info, ianime, animes"}),(0,a.jsx)("meta",{name:"robots",content:"index, follow"}),(0,a.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,a.jsx)("meta",{name:"language",content:"id"}),(0,a.jsx)("meta",{name:"revisit-after",content:"1 days"}),(0,a.jsx)("meta",{name:"author",content:e.name}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}),(0,a.jsx)("meta",{name:"theme-color",content:"#000000"}),(0,a.jsx)("meta",{name:"og:locale",property:"og:locale",content:"id"}),(0,a.jsx)("meta",{name:"og:title",property:"og:title",content:e.name}),(0,a.jsx)("meta",{name:"og:description",property:"og:description",content:"InfoAnime adalah informasi seputar anime series tv yg akan rilis dan movie, berdasarkan informasi bersumber dari MyAnimeList"}),(0,a.jsx)("meta",{name:"og:site_name",property:"og:site_name",content:e.name}),(0,a.jsx)("meta",{name:"og:type",property:"og:type",content:"website"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-title",property:"apple-mobile-web-app-title",content:e.name}),(0,a.jsx)("meta",{name:"mobile-web-app-capable",property:"mobile-web-app-capable",content:"yes"}),(0,a.jsx)("meta",{httpEquiv:"content-language",content:"id"}),(0,a.jsx)("title",{children:e.name+" | "+e.title})]}),(0,a.jsxs)("div",{className:"",children:[e.children,(0,a.jsx)(p,{}),(0,a.jsx)("div",{className:"mt-10"})]})]})}},8806:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});let a="https://api.jikan.moe/v4";class r{}r.Home=a+"/seasons/upcoming",r.Movie=a+"/anime?type=movie&status=upcoming",r.Search=a+"/anime?q=",r.Detail=a+"/anime/:id/full"},4654:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var a=t(1527),r=t(2407);function s(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{title:"Not Found",name:"InfoAnime"}),(0,a.jsx)("h1",{className:"font-bold text-center",children:"Whatcu lookin for? You are lost, you can click logo in left corner"})]})}}},function(e){e.O(0,[286,723,774,888,179],function(){return e(e.s=5467)}),_N_E=e.O()}]);
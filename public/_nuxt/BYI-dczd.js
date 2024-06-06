import{h as _,r as x,l as c,o as d,ah as y,w as r,a as t,b as A,i,aj as m,f as w,c as p,ae as g,ad as v,t as o,p as L,e as D,H as B,_ as I}from"./CbpzXT-0.js";import{_ as T}from"./Bof6gUt1.js";import{a as k}from"./A8dt0P_x.js";import"./LvLPZ7TO.js";const l=a=>(L("data-v-4607fdbf"),a=a(),D(),a),F={class:"trading-history"},N={class:"flex items-center justify-center flex-wrap gap-y-2.5 sm:block"},V={class:"mr-4 sm:mr-0 sm:mb-3"},E=l(()=>t("option",{selected:""},"年月で絞り込み",-1)),S=[E],O={class:"mr-4 sm:mr-0 sm:mb-3"},R=l(()=>t("option",{selected:""},"加盟店で絞り込み",-1)),C=[R],j=l(()=>t("div",{class:"text-center mr-4 sm:mr-0 sm:mb-3"},[t("button",{type:"submit",class:"w-[130px] h-14 block-vector-right px-12 rounded-lg font-bold bg-primary sm:w-full"},"検索 ")],-1)),H={id:"table-list",class:"px-3 py-4 gap-2 sm:block sm:overflow-x-auto"},P=l(()=>t("thead",null,[t("tr",null,[t("th",{class:"font-bold py-4 px-3 bg-secondary text-white h-12 min-w-56"},"申請日付"),t("th",{class:"font-bold py-4 px-3 bg-secondary text-white h-12 min-w-32"},"申請内容"),t("th",{class:"font-bold py-4 px-3 bg-secondary text-white h-12 min-w-32"},"状態"),t("th",{class:"font-bold py-4 px-3 bg-secondary text-white h-12 min-w-32"},"取引額(pt)"),t("th",{class:"font-bold py-4 px-3 bg-secondary text-white h-12 min-w-32"},"残高(pt)"),t("th",{class:"font-bold py-4 px-3 bg-secondary text-white h-12 min-w-56"},"詳細")])],-1)),U={class:"color-secondary"},$=_({__name:"trading-history",setup(a){const{$html2pdf:u}=B();function b(){if(document){const e=document.getElementById("table-list").cloneNode(!0);e.classList.remove("hidden"),e.classList.add("block"),document.body.appendChild(e),u(e,{filename:"filename.pdf",image:{type:"png"},enableLinks:!0}),e.remove()}}const n=x({date:"年月で絞り込み",store:"加盟店で絞り込み"});c(["申請日付","申請内容","状態","取引額(pt)","残高(pt)","詳細"]);const h=c([{date:"2024/01/01 00:00:00",content:"送付/TRF",statue:"処理済み",transactionAmount:"100.00",balance:"0",detail:"NO DATA AVAILABLE"},{date:"2024/01/01 00:00:00",content:"送付/TRF",statue:"処理済み",transactionAmount:"100.00",balance:"100",detail:"NO DATA AVAILABLE"},{date:"2024/01/01 00:00:00",content:"送付/TRF",statue:"処理済み",transactionAmount:"100.00",balance:"200",detail:"NO DATA AVAILABLE"},{date:"2024/01/01 00:00:00",content:"送付/TRF",statue:"処理済み",transactionAmount:"100.00",balance:"300",detail:"NO DATA AVAILABLE"},{date:"2024/01/01 00:00:00",content:"送付/TRF",statue:"処理済み",transactionAmount:"100.00",balance:"400",detail:"NO DATA AVAILABLE"}]);return(f,e)=>(d(),y(T,{loginStatus:!0},{default:r(()=>[t("div",F,[A(w(k),{class:"mb-5"},{default:r(()=>[t("div",N,[t("div",V,[i(t("select",{"onUpdate:modelValue":e[0]||(e[0]=s=>n.date=s),class:"w-60 h-14 px-4 py-2 border border-grayD2 box-border vector sm:w-full"},S,512),[[m,n.date]])]),t("div",O,[i(t("select",{"onUpdate:modelValue":e[1]||(e[1]=s=>n.store=s),class:"w-60 h-14 px-4 py-2 border border-grayD2 box-border vector sm:w-full"},C,512),[[m,n.store]])]),j,t("div",{class:"text-center sm:mb-3"},[t("button",{type:"button",class:"w-[130px] h-14 white-vector-right px-12 rounded-lg font-bold text-white bg-secondary sm:w-full",onClick:b},"PDF ")])])]),_:1}),t("div",null,[t("table",H,[P,t("tbody",U,[(d(!0),p(v,null,g(h.value,s=>(d(),p("tr",null,[t("td",null,o(s.date),1),t("td",null,o(s.content),1),t("td",null,o(s.statue),1),t("td",null,o(s.transactionAmount),1),t("td",null,o(s.balance),1),t("td",null,o(s.detail),1)]))),256))])])])])]),_:1}))}}),J=I($,[["__scopeId","data-v-4607fdbf"]]);export{J as default};

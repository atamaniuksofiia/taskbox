import{f as m}from"./index-BGrE5xGg.js";import{j as a}from"./jsx-runtime-D_zvdyIk.js";function e(){var A="C:/Users/atama/taskbox/src/components/Task.tsx",c="50734e2214e973ce04ce71b765b18069256af3b9",t=window,o="__coverage__",l={path:"C:/Users/atama/taskbox/src/components/Task.tsx",statementMap:{0:{start:{line:7,column:2},end:{line:51,column:7}},1:{start:{line:25,column:85},end:{line:25,column:102}},2:{start:{line:44,column:23},end:{line:44,column:36}},3:{start:{line:54,column:0},end:{line:54,column:1268}}},fnMap:{0:{name:"Task",decl:{start:{line:2,column:24},end:{line:2,column:28}},loc:{start:{line:6,column:3},end:{line:52,column:1}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:25,column:79},end:{line:25,column:80}},loc:{start:{line:25,column:85},end:{line:25,column:102}},line:25},2:{name:"(anonymous_2)",decl:{start:{line:44,column:17},end:{line:44,column:18}},loc:{start:{line:44,column:23},end:{line:44,column:36}},line:44}},branchMap:{0:{loc:{start:{line:40,column:4},end:{line:50,column:5}},type:"binary-expr",locations:[{start:{line:40,column:4},end:{line:40,column:29}},{start:{line:40,column:49},end:{line:50,column:5}}],line:40}},s:{0:0,1:0,2:0,3:0},f:{0:0,1:0,2:0},b:{0:[0,0]},inputSourceMap:{version:3,file:null,sources:["C:/Users/atama/taskbox/src/components/Task.tsx"],names:[],mappings:"AAeM,SAKE,KALF;AAPN,wBAAwB,KAAK;AAAA,EAC3B,MAAM,EAAE,IAAI,OAAO,MAAM;AAAA,EACzB;AAAA,EACA;AACF,GAAc;AACZ,SACE,qBAAC,SAAI,WAAW,aAAa,KAAK,IAChC;AAAA;AAAA,MAAC;AAAA;AAAA,QACC,SAAS,eAAe,EAAE;AAAA,QAC1B,cAAY,eAAe,EAAE;AAAA,QAC7B,WAAU;AAAA,QAEV;AAAA;AAAA,YAAC;AAAA;AAAA,cACC,MAAK;AAAA,cACL,UAAU;AAAA,cACV,MAAK;AAAA,cACL,IAAI,eAAe,EAAE;AAAA,cACrB,SAAS,UAAU;AAAA;AAAA,UACrB;AAAA,UACA,oBAAC,UAAK,WAAU,mBAAkB,SAAS,MAAM,cAAc,EAAE,GAAG;AAAA;AAAA;AAAA,IACtE;AAAA,IAEA,oBAAC,WAAM,SAAS,SAAS,EAAE,IAAI,cAAY,OAAO,WAAU,SAC1D;AAAA,MAAC;AAAA;AAAA,QACC,MAAK;AAAA,QACL,OAAO;AAAA,QACP,UAAU;AAAA,QACV,MAAK;AAAA,QACL,IAAI,SAAS,EAAE;AAAA,QACf,aAAY;AAAA;AAAA,IACd,GACF;AAAA,IACC,UAAU,mBACT;AAAA,MAAC;AAAA;AAAA,QACC,WAAU;AAAA,QACV,SAAS,MAAM,UAAU,EAAE;AAAA,QAC3B,IAAI,WAAW,EAAE;AAAA,QACjB,cAAY,WAAW,EAAE;AAAA,QAGzB,8BAAC,UAAK,WAAW,aAAa;AAAA;AAAA,MAFzB,WAAW,EAAE;AAAA,IAGpB;AAAA,KAEJ;AAEJ;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"50734e2214e973ce04ce71b765b18069256af3b9"},i=t[o]||(t[o]={});(!i[A]||i[A].hash!==c)&&(i[A]=l);var u=i[A];return e=function(){return u},u}e();function v({task:{id:A,title:c,state:t},onArchiveTask:o,onPinTask:l}){return e().f[0]++,e().s[0]++,a.jsxs("div",{className:`list-item ${t}`,children:[a.jsxs("label",{htmlFor:`archiveTask-${A}`,"aria-label":`archiveTask-${A}`,className:"checkbox",children:[a.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${A}`,checked:t==="TASK_ARCHIVED"}),a.jsx("span",{className:"checkbox-custom",onClick:()=>(e().f[1]++,e().s[1]++,o(A))})]}),a.jsx("label",{htmlFor:`title-${A}`,"aria-label":c,className:"title",children:a.jsx("input",{type:"text",value:c,readOnly:!0,name:"title",id:`title-${A}`,placeholder:"Input title"})}),(e().b[0][0]++,t!=="TASK_ARCHIVED"&&(e().b[0][1]++,a.jsx("button",{className:"pin-button",onClick:()=>(e().f[2]++,e().s[2]++,l(A)),id:`pinTask-${A}`,"aria-label":`pinTask-${A}`,children:a.jsx("span",{className:"icon-star"})},`pinTask-${A}`)))]})}e().s[3]++;v.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
  id: string;\r
  title: string;\r
  state: "TASK_ARCHIVED" | "TASK_INBOX" | "TASK_PINNED";\r
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"state",value:{name:"union",raw:'"TASK_ARCHIVED" | "TASK_INBOX" | "TASK_PINNED"',elements:[{name:"literal",value:'"TASK_ARCHIVED"'},{name:"literal",value:'"TASK_INBOX"'},{name:"literal",value:'"TASK_PINNED"'}],required:!0}}]}},description:""},onArchiveTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onPinTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const _={onArchiveTask:m(),onPinTask:m()},b={component:v,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{..._}},n={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},s={args:{task:{...n.args.task,state:"TASK_PINNED"}}},r={args:{task:{...n.args.task,state:"TASK_ARCHIVED"}}};var d,p,C;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(C=(p=n.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var k,E,T;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(T=(E=s.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var g,S,I;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(I=(S=r.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const h=["ActionsData","Default","Pinned","Archived"],B=Object.freeze(Object.defineProperty({__proto__:null,ActionsData:_,Archived:r,Default:n,Pinned:s,__namedExportsOrder:h,default:b},Symbol.toStringTag,{value:"Module"}));export{n as D,v as T,B as a};
//# sourceMappingURL=Task.stories-Cobc4MV-.js.map

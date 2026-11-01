const $="dwt666-agri-contents-v1",h=(t=200)=>new Promise(s=>setTimeout(s,t)),r=t=>new Date(Date.now()-t*36e5).toISOString(),_=(t,s,n)=>({id:`log-${t}-${s}`,action:t,operator:"sysadmin",at:s,note:n});function c(t){const s=t.updated_at||r(24);return{category:"农技知识",summary:"",cover_url:"",crop_codes:[],tags:[],audience_roles:[],source:"平台农技组",author:"内容运营",version:"1.0",published_at:null,created_at:r(120),updated_at:s,operation_logs:[_("创建内容",r(120),"根据农事场景整理"),...t.review_status==="approved"?[_("审核通过",r(40),"技术要点复核完成")]:[],...t.publish_status==="published"?[_("发布内容",s,"发布前完成二次确认")]:[]],...t}}const A=[c({id:"ac-1001",content_type:"science_article",category:"病虫害防治",title:"番茄晚疫病的早期识别与绿色防控",summary:"从叶缘水渍斑、湿度条件和传播路径入手，建立看叶、控湿、早隔离的田间检查习惯。",body_markdown:`# 番茄晚疫病：先看叶缘，再控湿度

晚疫病在低温高湿环境下扩展很快。建议每天上午巡棚时重点检查植株中下部叶片。

## 快速识别

- 叶尖或叶缘出现暗绿色水渍状斑
- 湿度大时病斑背面出现稀疏白霉
- 茎部病斑呈黑褐色，并可迅速环绕茎秆

> 发现中心病株后，应先隔离和清除病叶，再评估是否需要药剂处理。

1. 将棚内相对湿度控制在 **85% 以下**。
2. 晴天中午短时通风，避免夜间叶面长时间结露。
3. 滴灌替代大水漫灌，降低地面蒸发。`,crop_codes:["TOMATO"],tags:["晚疫病","温室管理"],author:"林禾",version:"1.2",review_status:"approved",publish_status:"published",published_at:r(18),updated_at:r(18)}),c({id:"ac-1002",content_type:"science_article",category:"环境调控",title:"连续阴雨天，温室如何稳住根区环境",summary:"阴雨天不宜只盯空气温度，应同时关注根区温度、湿度和二氧化碳变化，减少植株应激。",body_markdown:`# 阴雨天环境调控的三个优先级

连续阴雨天光照弱，植株蒸腾下降，棚内很容易出现低温高湿的叠加风险。

## 短时通风

中午温度较高时进行 2 到 3 次短时通风，每次 15 到 20 分钟。

## 控住地面水分

- 暂停大水漫灌
- 采用小水勤浇，保持根区透气
- 操作道积水及时清除

## 查看曲线

环境调控后，在 30 分钟和 2 小时后各查看一次温湿度曲线。`,crop_codes:["TOMATO","CUCUMBER"],tags:["阴雨天","通风","根区环境"],author:"周岚",review_status:"reviewed",publish_status:"draft",updated_at:r(8)}),c({id:"ac-1003",content_type:"knowledge",category:"病害知识",title:"叶霉病与早疫病：症状对照速查",summary:"用叶面病斑形状、颜色层次和发生位置三个维度，快速区分温室番茄常见叶部病害。",body_markdown:`# 叶霉病与早疫病速查

两者都可能造成叶片黄化，但病斑细节不同。

| 观察维度 | 叶霉病 | 早疫病 |
| --- | --- | --- |
| 病斑形状 | 不规则淡黄色斑 | 同心轮纹圆斑 |
| 叶背特征 | 橄榄褐色霉层 | 一般无明显霉层 |
| 常见位置 | 中下部叶片 | 老叶先发生 |

## 田间隔间检查法

1. 先看叶背是否有霉层。
2. 再看病斑是否有同心轮纹。
3. 记录病叶所在高度和扩散方向。`,crop_codes:["TOMATO"],tags:["叶霉病","早疫病","症状识别"],source:"平台知识库病害图鉴",author:"陈木",version:"2.1",review_status:"approved",publish_status:"published",published_at:r(72),updated_at:r(72)}),c({id:"ac-1004",content_type:"knowledge",category:"种植知识",title:"滴灌系统的日常检查清单",summary:"从压力、滴头流量、过滤器和 EC/pH 五个环节，建立每周十分钟的滴灌巡检流程。",body_markdown:`# 滴灌系统巡检清单

## 每周检查

- 首部过滤器压差是否明显增大
- 主管道压力是否稳定
- 随机抽查 5 个滴头流量
- 记录灌溉液 EC 与 pH
- 检查末端是否有堵塞或漏水

## 发现问题后

1. 先关闭分区阀门，避免带压拆卸。
2. 对滴头进行清洗或更换。
3. 在台账中记录处理时间与更换数量。

> 灌溉系统的小问题会放大为根区水分不均，建议固定巡检时段并留痕。`,crop_codes:["TOMATO","CUCUMBER","PEPPER"],tags:["滴灌","巡检"],source:"设施园艺作业规范",author:"周岚",version:"1.1",review_status:"draft",publish_status:"draft",updated_at:r(5)}),c({id:"ac-1005",content_type:"help",category:"入门指南",title:"农场管理端快速上手：从看板到地块详情",summary:"帮助农场管理者完成登录、查看地块、定位设备异常，并从预警详情进入诊断记录。",body_markdown:`# 农场管理端快速上手

欢迎使用农场管理端。本指南按首次登录后的操作顺序整理。

## 1. 查看今日概览

登录后首先进入农场数据看板，关注设备在线率与待处置预警。

## 2. 进入地块管理

在左侧菜单选择 **地块管理**。可以按名称搜索，也可以按温室、塑料大棚、露地或果园筛选。

## 3. 查看地块详情

点击地块卡片，查看设备在线状态、最新 CO₂、温度湿度、24/48 小时环境趋势和最近诊断建议。

> 农场工作人员账号为只读数据范围，只能查看被授权地块。`,tags:["新手","地块","只读权限"],audience_roles:["FARM_MANAGER"],source:"平台使用帮助中心",author:"产品运营组",version:"1.3",review_status:"approved",publish_status:"published",published_at:r(30),updated_at:r(30)}),c({id:"ac-1006",content_type:"help",category:"常见问题",title:"工作人员如何查看被授权地块",summary:"工作人员账号默认只读。了解如何识别授权数据范围，以及为什么看不到某些地块。",body_markdown:`# 查看被授权地块

农场工作人员账号登录后，地块管理页只展示管理员分配给你的地块。

## 你仍然可以

- 查看地块环境最新值
- 查看设备在线状态和最后上报时间
- 查看最近检测、诊断与处置建议
- 进入诊断详情了解历史记录

## 你不会看到

- 新建或编辑地块
- 管理成员与权限
- 发布或下架农技内容

如果怀疑地块授权不完整，请联系所在农场的农场管理者。`,tags:["工作人员","授权","数据范围"],audience_roles:["FARM_WORKER"],source:"平台使用帮助中心",author:"产品运营组",version:"1.0",review_status:"approved",publish_status:"published",published_at:r(44),updated_at:r(44)}),c({id:"ac-1007",content_type:"help",category:"设备与告警",title:"环境设备离线时应该怎么处理",summary:"先检查电源与网关，再确认最后上报时间；不要直接拆装传感器。",body_markdown:`# 设备离线处理指引

## 先做三项确认

1. 查看该设备的最后上报时间。
2. 检查棚内供电与网关指示灯。
3. 确认是否处于计划维护时段。

## 请不要

- 带电拆装传感器
- 随意重置网关
- 多个分区同时断电重启

完成现场确认后，将设备编码与现象反馈给农场管理者。`,tags:["设备离线","网关","故障排查"],audience_roles:["FARM_MANAGER","FARM_WORKER"],source:"设备运维手册",author:"硬件支持组",version:"0.9",review_status:"reviewed",publish_status:"offline",published_at:r(300),updated_at:r(96)}),c({id:"ac-1008",content_type:"science_article",category:"采收管理",title:"春季番茄分批采收与品质记录",summary:"按成熟度分批采收，并同步记录单果重、裂果率和商品率，为下一轮种植复盘提供依据。",body_markdown:`# 分批采收，让品质数据可追溯

## 采收原则

- 根据销售半径确定成熟度
- 同一批次尽量在相近时间段完成采收
- 采收筐标注地块、日期和批次

## 建议记录

| 指标 | 记录方式 |
| --- | --- |
| 单果重 | 每批随机 20 果 |
| 裂果率 | 裂果数 / 采收总数 |
| 商品率 | 商品果重量 / 总重量 |

持续记录 3 到 4 个批次后，可以结合环境曲线复盘品质波动原因。`,crop_codes:["TOMATO"],tags:["采收","品质","批次管理"],source:"农场生产记录模板",author:"林禾",version:"1.0",review_status:"retired",publish_status:"offline",published_at:r(800),updated_at:r(200)})],f=t=>JSON.parse(JSON.stringify(t));function g(){try{const s=localStorage.getItem($);if(s){const n=JSON.parse(s);if(Array.isArray(n))return n}}catch{}const t=f(A);return w(t),t}function w(t){try{localStorage.setItem($,JSON.stringify(t))}catch{}}async function E(t={},s=1,n=20){var d;await h();let e=g();const a=((d=t.keyword)==null?void 0:d.trim().toLowerCase())??"";a&&(e=e.filter(o=>[o.title,o.summary,o.category,o.author,o.source,...o.tags,...o.crop_codes].join(" ").toLowerCase().includes(a))),t.content_type&&(e=e.filter(o=>o.content_type===t.content_type)),t.review_status&&(e=e.filter(o=>o.review_status===t.review_status)),t.publish_status&&(e=e.filter(o=>o.publish_status===t.publish_status)),e=e.slice().sort((o,l)=>Date.parse(l.updated_at)-Date.parse(o.updated_at));const i=e.length,u=(s-1)*n;return{items:e.slice(u,u+n),total:i,page:s,size:n}}async function k(t){await h(120);const s=g().find(n=>n.id===t);if(!s)throw new Error("农技内容不存在或已被删除");return f(s)}function b(t,s,n){const e=new Date().toISOString();t.operation_logs.unshift(_(s,e,n)),t.updated_at=e}async function C(t){await h(260);const s=g(),n=new Date().toISOString(),e=t.id?s.findIndex(i=>i.id===t.id):-1;if(t.id&&e<0)throw new Error("农技内容不存在，无法保存");let a;if(e>=0){const i=s[e];a={...i,...t,id:i.id,created_at:i.created_at,updated_at:n,published_at:i.published_at,operation_logs:i.operation_logs},b(a,"编辑内容",`版本 ${a.version}`),s.splice(e,1,a)}else a={...t,id:`ac-${Date.now()}`,created_at:n,updated_at:n,published_at:t.publish_status==="published"?n:null,operation_logs:[_("创建内容",n,"新建农技内容")]},s.unshift(a);return a.publish_status==="published"&&(a.published_at=a.published_at||n),w(s),f(a)}async function S(t){await h(240);const s=g(),n=s.find(e=>e.id===t);if(!n)throw new Error("农技内容不存在");if(n.review_status!=="approved")throw new Error("只有审核状态为已批准的内容可以发布");return n.publish_status="published",n.published_at=new Date().toISOString(),b(n,"发布内容","发布前完成二次确认"),w(s),f(n)}async function M(t){await h(240);const s=g(),n=s.find(e=>e.id===t);if(!n)throw new Error("农技内容不存在");return n.publish_status="offline",b(n,"下架内容","下架前完成二次确认"),w(s),f(n)}function O(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function p(t){return t.replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/__([^_]+)__/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function R(t){if(!t.trim())return"";const n=O(t.replace(/\r\n/g,`
`)).split(`
`),e=[];let a=!1,i=null;const u=()=>{i&&(e.push(`</${i}>`),i=null)};for(const d of n){const o=d.trimEnd();if(/^```/.test(o)){u(),a?(e.push("</code></pre>"),a=!1):(e.push("<pre><code>"),a=!0);continue}if(a){e.push(`${d}
`);continue}if(!o.trim()){u();continue}const l=/^(#{1,4})\s+(.+)$/.exec(o);if(l){u();const v=l[1].length+1;e.push(`<h${v}>${p(l[2])}</h${v}>`);continue}if(/^&gt;\s?/.test(o)){u(),e.push(`<blockquote>${p(o.replace(/^&gt;\s?/,""))}</blockquote>`);continue}const y=/^\d+\.\s+(.+)$/.exec(o);if(y){i!=="ol"&&(u(),e.push("<ol>"),i="ol"),e.push(`<li>${p(y[1])}</li>`);continue}const m=/^[-*]\s+(.+)$/.exec(o);if(m){i!=="ul"&&(u(),e.push("<ul>"),i="ul"),e.push(`<li>${p(m[1])}</li>`);continue}if(/^(-{3,}|\*{3,})$/.test(o)){u(),e.push("<hr />");continue}u(),e.push(`<p>${p(o)}</p>`)}return u(),a&&e.push("</code></pre>"),e.join(`
`)}export{k as g,E as l,M as o,S as p,R as r,C as s};

if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const l=e=>n(e,r),f={module:{uri:r},exports:o,require:l};s[r]=Promise.all(t.map((e=>f[e]||l(e)))).then((e=>(i(...e),o)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"bundle.f8139cfbc364d8eb4690.js",revision:null},{url:"bundle.f8139cfbc364d8eb4690.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"index.html",revision:"770b3311f0462fccabeab64c7384a659"},{url:"style.8c5b220bf6f482881a90.css",revision:null}],{})}));

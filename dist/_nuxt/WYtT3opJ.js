import{a3 as a,a4 as i,a5 as c}from"./C2IkTLXT.js";import{f as d,s as l}from"./Czuc8aud.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const w=()=>{const e=window;e.addEventListener("statusTap",()=>{a(()=>{const n=e.innerWidth,s=e.innerHeight,o=document.elementFromPoint(n/2,s/2);if(!o)return;const t=d(o);t&&new Promise(r=>i(t,r)).then(()=>{c(async()=>{t.style.setProperty("--overflow","hidden"),await l(t,300),t.style.removeProperty("--overflow")})})})})};export{w as startStatusTap};

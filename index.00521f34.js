const t=document.querySelector("#productTable"),e=document.querySelector("#productDetails");t.addEventListener("click",(function(t){if("TD"!==t.target.nodeName)return;const n=t.target.parentNode,r=n.firstElementChild.textContent,o=n.lastElementChild.textContent;e.innerHTML=`Ви вибрали ${r} за ${o}`}));
//# sourceMappingURL=index.00521f34.js.map

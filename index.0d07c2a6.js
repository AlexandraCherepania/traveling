const n=document.querySelector("select"),e=["en","ua"];n.addEventListener("change",(function(){let e=n.value;location.href=window.location.pathname+"#"+e,location.reload()})),function(){let o=window.location.hash;o=o.substring(1),console.log(o),e.includes(o)||(location.href=window.location.pathname+"#ua",location.reload()),n.value=o;for(let n in landArr){let e=document.querySelector(".lng-"+n);e&&(e.innerHTML=landArr[n][o])}}();
//# sourceMappingURL=index.0d07c2a6.js.map

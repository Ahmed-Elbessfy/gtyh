"use strict";var main=document.querySelector("main"),header=document.querySelector("header"),percent=document.querySelector(".percent"),counterDone=!1;function animateValue(n,t,o,c){function r(e){a=a||e,e=Math.min((e-a)/c,1),n.innerHTML="\n        <p class='percent-num'>+".concat(Math.floor(e*(o-t)+t),"</p>\n          <p class='percent-mark'>%</p>\n          <p class='month'>3 <br> شهور</p>\n        "),e<1&&window.requestAnimationFrame(r)}var a=null;window.requestAnimationFrame(r)}document.addEventListener("DOMContentLoaded",function(){main.style="margin-top:".concat(header.offsetHeight+200,"px")}),document.addEventListener("scroll",function(){var e,n,t=percent.offsetTop-window.innerHeight+percent.offsetHeight;window.scrollY>=t&&!counterDone&&(counterDone=!0,animateValue(percent,60,96,3e3),clearTimeout(e),clearTimeout(n),setTimeout(function(){percent.classList.add("scaleup"),n=setTimeout(function(){percent.classList.remove("scaleup")},500)},3e3))});
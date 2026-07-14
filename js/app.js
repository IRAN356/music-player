document.addEventListener("DOMContentLoaded",()=>{

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(40px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:700,
fill:"forwards",
easing:"ease"

});

observer.unobserve(entry.target);

}

});

},{
threshold:.2
});

cards.forEach(card=>{

card.style.opacity="0";

observer.observe(card);

});

const buttons=document.querySelectorAll("button");

buttons.forEach(button=>{

button.addEventListener("touchstart",()=>{

button.style.transform="scale(.96)";

});

button.addEventListener("touchend",()=>{

button.style.transform="scale(1)";

});

button.addEventListener("mousedown",()=>{

button.style.transform="scale(.96)";

});

button.addEventListener("mouseup",()=>{

button.style.transform="scale(1)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});

const themeBtn=document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

themeBtn.textContent=document.body.classList.contains("light") ? "☀️" : "🌙";

});

});

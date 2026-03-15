const text = "Future Software Developer";
let index = 0;

function type() {
    const typingElement = document.getElementById("typing");

    if (!typingElement) return; // stop if element doesn't exist

    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 70);
    }
}

type();


document.addEventListener("DOMContentLoaded", () => {

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

if(toggle && nav){
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

});

window.addEventListener("scroll",function(){
const nav=document.querySelector(".navbar");

if(window.scrollY>50){
nav.style.background="rgba(255,255,255,0.6)";
}else{
nav.style.background="rgba(255,255,255,0.25)";
}
});


const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll(".page-wrapper").forEach(el=>{
el.classList.add("fade-in");
observer.observe(el);
});
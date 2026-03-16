document.addEventListener("DOMContentLoaded", () => {
// ---------------- TYPING EFFECT ----------------

const texts = [
"Future Software Developer",
"Web Developer",
"CSE Student"
];

let textIndex = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");
let isDeleting = false;

function typeEffect(){

if(!typingElement) return;

let currentText = texts[textIndex];

if(isDeleting){
typingElement.textContent = currentText.substring(0,charIndex--);
}else{
typingElement.textContent = currentText.substring(0,charIndex++);
}

let speed = isDeleting ? 40 : 80;

if(!isDeleting && charIndex === currentText.length){
speed = 1500;
isDeleting = true;
}

if(isDeleting && charIndex === 0){
isDeleting = false;
textIndex++;
if(textIndex >= texts.length){
textIndex = 0;
}
speed = 500;
}

setTimeout(typeEffect, speed);

}

typeEffect();


// ---------------- MOBILE MENU ----------------

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle && navLinks){

menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("active");
menuToggle.classList.toggle("active");

});

}


// ---------------- DARK MODE ----------------

const toggle = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark");
toggle.textContent="☀️";
}

toggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
toggle.textContent="☀️";
localStorage.setItem("theme","dark");
}else{
toggle.textContent="🌙";
localStorage.setItem("theme","light");
}

});


// ---------------- NAVBAR SCROLL EFFECT ----------------

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");
if(!navbar) return;

if(window.scrollY > 50){

if(document.body.classList.contains("dark")){
navbar.style.background="rgba(15,23,42,0.9)";
}else{
navbar.style.background="rgba(255,255,255,0.6)";
}

}else{

if(document.body.classList.contains("dark")){
navbar.style.background="rgba(15,23,42,0.7)";
}else{
navbar.style.background="rgba(255,255,255,0.25)";
}

}

});


// ---------------- SCROLL ANIMATION ----------------

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll(".page-wrapper").forEach(el => {
el.classList.add("fade-in");
observer.observe(el);
});

// ---------------- PAGE TRANSITION ----------------

// ---------------- PAGE TRANSITION ----------------

document.body.classList.add("fade-in");

document.querySelectorAll("a").forEach(link => {

link.addEventListener("click", function(e){

const target = this.getAttribute("href");

if(target && target.endsWith(".html")){

e.preventDefault();

document.body.classList.add("fade-out");

setTimeout(() => {
window.location = target;
}, 15);

}

});

});


// ---------------- INTRO ANIMATION ----------------

// ---------------- INTRO ANIMATION (20 MIN RULE) ----------------

// ---------------- INTRO ANIMATION (20 MIN RULE) ----------------

// ---------------- INTRO ANIMATION (20 MIN RULE) ----------------

const loader = document.getElementById("intro-loader");

const lastVisit = localStorage.getItem("introTime");
const now = Date.now();
const twentyMinutes = 20 * 60 * 1000;

function showPage(){
document.body.classList.add("loaded");
}

if(!lastVisit || (now - lastVisit) > twentyMinutes){

setTimeout(() => {

if(loader){
loader.classList.add("hide");
}

showPage();

},800);

localStorage.setItem("introTime", now);

}else{

if(loader){
loader.style.display = "none";
}

showPage();

}
// MOUSE GLOW EFFECT

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});











});
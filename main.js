document.addEventListener("DOMContentLoaded", () => {

                // ---------------- TYPING EFFECT ----------------

                const texts = ["Future Software Developer ", "Web Developer ", "CSE Student "];
                let textIndex = 0, charIndex = 0, isDeleting = false;
                const typingElement = document.getElementById("typing");

                function typeEffect() {
                    if (!typingElement) return;
                    const currentText = texts[textIndex];

                    typingElement.textContent = isDeleting 
                        ? currentText.substring(0, charIndex--) 
                        : currentText.substring(0, charIndex++);

                    let speed = isDeleting ? 40 : 80;

                    if (!isDeleting && charIndex === currentText.length) {
                        speed = 1500;
                        isDeleting = true;
                    }

                    if (isDeleting && charIndex === 0) {
                        isDeleting = false;
                        textIndex = (textIndex + 1) % texts.length;
                        speed = 500;
                    }

                    setTimeout(typeEffect, speed);
                }
                typeEffect();



                // ---------------- MOBILE MENU ----------------

                const menuToggle = document.getElementById("menu-toggle");
                const navLinks = document.querySelector(".nav-links");
                if (menuToggle && navLinks) {
                    menuToggle.addEventListener("click", () => {
                        navLinks.classList.toggle("active");
                        menuToggle.classList.toggle("active");
                    });
                }



                // ---------------- DARK MODE ----------------
                
                const themeToggle = document.getElementById("theme-toggle");
                if (localStorage.getItem("theme") === "dark") {
                    document.body.classList.add("dark");
                    themeToggle.textContent = "☀️";
                }
                themeToggle.addEventListener("click", () => {
                    document.body.classList.toggle("dark");
                    if (document.body.classList.contains("dark")) {
                        themeToggle.textContent = "☀️";
                        localStorage.setItem("theme", "dark");
                    } else {
                        themeToggle.textContent = "🌙";
                        localStorage.setItem("theme", "light");
                    }
                });

                // ---------------- NAVBAR SCROLL EFFECT ----------------
                const navbar = document.querySelector(".navbar");
                window.addEventListener("scroll", () => {
                    if (!navbar) return;
                    if (window.scrollY > 50) {
                        navbar.style.background = document.body.classList.contains("dark")
                            ? "rgba(15,23,42,0.9)"
                            : "rgba(255,255,255,0.6)";
                    } else {
                        navbar.style.background = document.body.classList.contains("dark")
                            ? "rgba(15,23,42,0.7)"
                            : "rgba(255,255,255,0.25)";
                    }
                });

                // ---------------- SCROLL ANIMATION ----------------
                const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) entry.target.classList.add("show");
                    });
                });
                document.querySelectorAll(".page-wrapper").forEach(el => {
                    el.classList.add("fade-in");
                    observer.observe(el);
                });

                // ---------------- PAGE TRANSITION ----------------
                document.body.classList.add("fade-in");
                document.querySelectorAll("a").forEach(link => {
                    link.addEventListener("click", function(e) {
                        const target = this.getAttribute("href");
                        if (target && target.endsWith(".html")) {
                            e.preventDefault();
                            document.body.classList.add("fade-out");
                            setTimeout(() => window.location = target, 150);
                        }
                    });
                });

                // ---------------- INTRO ANIMATION (20 MIN RULE) ----------------
                const loader = document.getElementById("intro-loader");
                const lastVisit = localStorage.getItem("introTime");
                const now = Date.now();
                const twentyMinutes = 20 * 60 * 1000;

                function showPage() { document.body.classList.add("loaded"); }

                if (!lastVisit || (now - lastVisit) > twentyMinutes) {
                    setTimeout(() => {
                        if (loader) loader.classList.add("hide");
                        showPage();
                    }, 800);
                    localStorage.setItem("introTime", now);
                } else {
                    if (loader) loader.style.display = "none";
                    showPage();
                }

                // ---------------- MOUSE GLOW EFFECT ----------------
                const glow = document.querySelector(".cursor-glow");
                let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;
                document.addEventListener("mousemove", e => {
                    mouseX = e.clientX + window.scrollX;
                    mouseY = e.clientY + window.scrollY;
                });
                function animateGlow() {
                    if (!glow) return;
                    glowX += (mouseX - glowX) * 0.08;
                    glowY += (mouseY - glowY) * 0.08;
                    glow.style.left = glowX + "px";
                    glow.style.top = glowY + "px";
                    requestAnimationFrame(animateGlow);
                }
                animateGlow();

                // ---------------- CARD 3D HOVER EFFECT ----------------
                const cards = document.querySelectorAll(".card-1, .card-2, .contact-card");
                cards.forEach(card => {
                    card.addEventListener("mousemove", e => {
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const rotateX = (y - centerY) / (card.classList.contains("contact-card") ? 50 : 10);
                        const rotateY = (centerX - x) / (card.classList.contains("contact-card") ? 50 : 10);
                        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
                    });
                    card.addEventListener("mouseleave", () => {
                        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
                    });
                });

                // ---------------- PARTICLE BACKGROUND ----------------
                const canvas = document.getElementById("particles");
                if (canvas) {
                    const ctx = canvas.getContext("2d");
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    let particles = Array.from({ length: 80 }, () => ({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        size: Math.random() * 2,
                        speedX: (Math.random() - 0.5) * 0.5,
                        speedY: (Math.random() - 0.5) * 0.5
                    }));
                    function animateParticles() {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        particles.forEach(p => {
                            p.x += p.speedX;
                            p.y += p.speedY;
                            ctx.beginPath();
                            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                            ctx.fillStyle = "rgba(59,108,255,0.5)";
                            ctx.fill();
                        });
                        requestAnimationFrame(animateParticles);
                    }
                    animateParticles();
                }

            // ---------------- MATH CAPTCHA ----------------
            let num1, num2, correctAnswer;

            function generateCaptcha(){
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;

            correctAnswer = num1 + num2;

            document.getElementById("captcha-question").textContent =
            `What is ${num1} + ${num2}?`;
            }

                        // run once
                        generateCaptcha();


                        // ---------------- CONTACT FORM ----------------
                        const form = document.getElementById("contactForm");
                        const message = document.getElementById("form-message");

                        if(form){

                        form.addEventListener("submit", async function(e){

                        e.preventDefault();

                        const userAnswer = document.getElementById("captcha-input").value;

                        // ❌ WRONG CAPTCHA
                        if(parseInt(userAnswer) !== correctAnswer){
                        message.textContent = "❌ Wrong answer! Try again.";
                        message.classList.remove("hidden");

                        generateCaptcha();

                        setTimeout(()=>{
                        message.classList.add("hidden");
                        },3000);

                        return;
                        }

                        // ✅ SEND FORM
                        const data = new FormData(form);

                        try{

                        const res = await fetch(form.action,{
                        method: form.method,
                        body: data,
                        headers:{ 'Accept':'application/json' }
                        });

                        if(res.ok){
                        message.textContent = "✅ Message sent successfully!";
                        form.reset();
                        generateCaptcha();
                        }else{
                        message.textContent = "❌ Failed to send.";
                        }

                        message.classList.remove("hidden");

                        setTimeout(()=>{
                        message.classList.add("hidden");
                        },3000);

                        }catch(err){

                        message.textContent = "❌ Something went wrong.";
                        message.classList.remove("hidden");

                        }

            });

            }

});
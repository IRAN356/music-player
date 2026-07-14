document.addEventListener("DOMContentLoaded", () => {

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("light");

themeBtn.textContent =
document.body.classList.contains("light")
? "☀️"
: "🌙";

});

}


const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

observer.unobserve(entry.target);

}

});

}, {

threshold: 0.15

});


document.querySelectorAll(".card,.feature,.glass-card,.about-card").forEach((el) => {

el.classList.add("hidden");

observer.observe(el);

});


document.querySelectorAll("button").forEach((button) => {

button.addEventListener("pointerdown", () => {

button.style.transform = "scale(.96)";

});

button.addEventListener("pointerup", () => {

button.style.transform = "";

});

button.addEventListener("pointerleave", () => {

button.style.transform = "";

});

});


const startBtn = document.querySelector(".primary");

if (startBtn) {

startBtn.addEventListener("click", () => {

alert("به NEXORA AI خوش آمدید 🚀");

});

}


const featureBtn = document.querySelector(".secondary");

if (featureBtn) {

featureBtn.addEventListener("click", () => {

document.querySelector(".tools")?.scrollIntoView({

behavior: "smooth"

});

});

}


const navItems = document.querySelectorAll("nav li");

navItems.forEach((item) => {

item.addEventListener("click", () => {

const text = item.textContent.trim();

if (text === "امکانات") {

document.querySelector(".tools")?.scrollIntoView({

behavior: "smooth"

});

}

if (text === "درباره") {

document.querySelector(".about")?.scrollIntoView({

behavior: "smooth"

});

}

if (text === "خانه") {

window.scrollTo({

top: 0,

behavior: "smooth"

});

}

});

});


const navBtn = document.querySelector(".nav-btn");

if (navBtn) {

navBtn.addEventListener("click", () => {

window.location.href = "admin.html";

});

}

});

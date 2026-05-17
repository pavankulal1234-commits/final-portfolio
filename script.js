// ===== Mobile Menu =====
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== Scroll Reveal Animation =====
window.addEventListener("scroll", reveal);

function reveal(){
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element)=>{
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100;

    if(elementTop < windowHeight - elementVisible){
      element.classList.add("active");
    }
  });
}

// ===== Typing Effect =====
const typing = document.querySelector(".typing");
const text = ["Web Developer", "Cyber Security Learner", "Frontend Designer"];
let index = 0;
let charIndex = 0;

function typeEffect(){
  if(charIndex < text[index].length){
    typing.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect(){
  if(charIndex > 0){
    typing.textContent = text[index].substring(0,charIndex-1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();
// Floating hearts & sparkles
function createFloating(elementType="💗") {
  const el = document.createElement("div");
  el.className = elementType==="✨" ? "sparkle" : "heart";
  el.innerText = elementType;
  el.style.left = Math.random()*100 + "vw";
  el.style.animationDuration = 3 + Math.random()*2 + "s";
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),5000);
}
setInterval(()=>createFloating("💗"), 700);
setInterval(()=>createFloating("✨"), 1500);

// Appreciate button
const btn = document.getElementById("appreciateBtn");
const hidden = document.getElementById("hiddenMessage");
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {
  hidden.style.display = "block";
  music.volume = 0.2;
  music.play();

  for(let i=0;i<50;i++){
    setTimeout(()=>createFloating(["💗","💕","💞"][Math.floor(Math.random()*3)]), i*100);
    setTimeout(()=>createFloating("✨"), i*150);
  }
});

// Scroll animations
const scrollElements = document.querySelectorAll('.scrollFade');

function scrollFade() {
  scrollElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(elementTop < windowHeight - 100){
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener('scroll', scrollFade);
window.addEventListener('load', scrollFade);

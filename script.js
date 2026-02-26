// Loader
window.addEventListener("load",()=>{
  document.getElementById("loader").style.display="none";
  document.body.classList.add("loaded");
});

// Typing Effect
const words=["Full Stack Developer","Problem Solver","Tech Enthusiast"];
let i=0,j=0,current="",isDeleting=false;

function type(){
  current=words[i];
  if(!isDeleting){
    document.getElementById("typing").textContent=current.slice(0,++j);
    if(j===current.length){isDeleting=true;setTimeout(type,1000);return;}
  }else{
    document.getElementById("typing").textContent=current.slice(0,--j);
    if(j===0){isDeleting=false;i=(i+1)%words.length;}
  }
  setTimeout(type,100);
}
type();

// Skill Filter
const filterButtons = document.querySelectorAll(".skill-btn");
const skillCards = document.querySelectorAll(".skill-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    // Remove active class
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    skillCards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});
// Page Load Fade
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  document.getElementById("loader").style.display = "none";
});

// Scroll Reveal
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
// Particles
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];
for(let k=0;k<80;k++){
  particles.push({x:Math.random()*canvas.width,
  y:Math.random()*canvas.height,
  r:Math.random()*3});
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="#00f5ff";
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
    p.y+=0.5;
    if(p.y>canvas.height)p.y=0;
  });
}
setInterval(draw,30);

// Contact Form
document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  alert("Message Sent Successfully!");
});
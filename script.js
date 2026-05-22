function openInvite(){
  const landing = document.getElementById("landing");
  const blueInvite = document.querySelector(".blue-invite");
  const seal = document.querySelector(".seal");
  const content = document.getElementById("content");
  const music = document.getElementById("bgMusic");

  music.volume = 0.25;
  music.play().catch((e)=>console.log("Audio blocked:", e));

  seal.classList.add("opening");
  blueInvite.classList.add("opening");

  setTimeout(()=>{
    landing.style.display = "none";
    content.style.display = "block";
    document.querySelector(".hero").scrollIntoView();
    triggerReveal();
  }, 1050);
}

const weddingDate = new Date("July 4, 2026 12:39:00").getTime();

function updateCountdown(){
  const now = new Date().getTime();
  const distance = weddingDate - now;

  document.getElementById("days").innerHTML =
    Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));

  document.getElementById("hours").innerHTML =
    Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

  document.getElementById("minutes").innerHTML =
    Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));

  document.getElementById("seconds").innerHTML =
    Math.max(0, Math.floor((distance % (1000 * 60)) / 1000));
}

function triggerReveal(){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.querySelectorAll(".reveal").forEach((el, index)=>{
          setTimeout(()=>el.classList.add("show"), index * 90);
        });
      }
    });
  }, { threshold:0.55 });

  document.querySelectorAll(".reveal-page").forEach(section=>{
    observer.observe(section);
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);
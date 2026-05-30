function openInvite(){
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");
  const music = document.getElementById("bgMusic");

  music.volume = 0.25;
  music.play().catch((e)=>console.log("Audio blocked:", e));

  page1.classList.add("opening");

  setTimeout(()=>{
    page1.style.display = "none";
    page2.style.display = "block";
  }, 900);
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

updateCountdown();
setInterval(updateCountdown, 1000);
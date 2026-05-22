function openInvite(){

  const seal =
  document.querySelector(".seal");

  const opening =
  document.getElementById("opening");

  const content =
  document.getElementById("content");

  /* SEAL EXPANSION */

  seal.style.transform =
  "scale(12) rotate(25deg)";

  seal.style.opacity = "0";

  /* OPENING FADE */

  opening.style.opacity = "0";

  setTimeout(() => {

    opening.style.display = "none";

    content.style.display = "block";

    content.style.animation =
    "fadeIn 1.5s ease";

  },1200);
}

/* COUNTDOWN */

const weddingDate =
new Date("July 4, 2026 12:39:00").getTime();

setInterval(() => {

  const now =
  new Date().getTime();

  const distance =
  weddingDate - now;

  const days =
  Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").innerHTML =
  days + " Days To Go ❤️";

},1000);

/* PAGE FADE */

const style =
document.createElement("style");

style.innerHTML = `

@keyframes fadeIn{

  from{
    opacity:0;
    transform:translateY(40px);
  }

  to{
    opacity:1;
    transform:translateY(0);
  }
}
`;

document.head.appendChild(style);
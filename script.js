function openInvite(){

  const opening =
  document.querySelector(".opening");

  opening.style.opacity = "0";

  setTimeout(() => {

    opening.style.display = "none";

    document.getElementById("content").style.display =
    "block";

  },1000);
}

/* COUNTDOWN */

const weddingDate =
new Date("April 26, 2026 09:00:00").getTime();

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
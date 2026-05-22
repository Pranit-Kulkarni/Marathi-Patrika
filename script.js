function openInvite(){

  document.querySelector(".opening").style.display = "none";

  document.getElementById("mainContent").style.display = "block";
}

/* COUNTDOWN */

const weddingDate = new Date("April 26, 2026 09:00:00").getTime();

setInterval(() => {

  const now = new Date().getTime();

  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").innerHTML =
    days + " Days To Go ❤️";

}, 1000);
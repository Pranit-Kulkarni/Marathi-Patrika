function openInvite(){

  const opening =
  document.getElementById("opening");

  const seal =
  document.querySelector(".seal");

  const content =
  document.getElementById("content");

  const music =
  document.getElementById("bgMusic");

  /* PLAY MUSIC */

  music.volume = 0.25;

  music.play().catch((e)=>{
    console.log(e);
  });

  /* SEAL EFFECT */

  seal.style.transform =
  "scale(18)";

  seal.style.opacity =
  "0";

  /* FADE OUT */

  opening.style.opacity =
  "0";

  setTimeout(()=>{

    opening.style.display =
    "none";

    content.style.display =
    "block";

  },1200);
}

/* COUNTDOWN */

const weddingDate =
new Date(
"July 4, 2026 12:39:00"
).getTime();

function updateCountdown(){

  const now =
  new Date().getTime();

  const distance =
  weddingDate - now;

  const days =
  Math.floor(
  distance /
  (1000 * 60 * 60 * 24)
  );

  const hours =
  Math.floor(
  (distance %
  (1000 * 60 * 60 * 24)) /
  (1000 * 60 * 60)
  );

  const minutes =
  Math.floor(
  (distance %
  (1000 * 60 * 60)) /
  (1000 * 60)
  );

  const seconds =
  Math.floor(
  (distance %
  (1000 * 60)) /
  1000
  );

  document.getElementById("days").innerHTML =
  days;

  document.getElementById("hours").innerHTML =
  hours;

  document.getElementById("minutes").innerHTML =
  minutes;

  document.getElementById("seconds").innerHTML =
  seconds;
}

updateCountdown();

setInterval(
updateCountdown,
1000
);
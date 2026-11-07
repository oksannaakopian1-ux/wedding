const envelope = document.getElementById("envelope");
const intro = document.getElementById("intro");
const invitation = document.getElementById("invitation");
const closeButton = document.getElementById("closeButton");
const rsvpForm = document.getElementById("rsvpForm");
const formNote = document.getElementById("formNote");
let opened = false;

envelope.addEventListener("click", () => {
  if (opened) return;
  opened = true;
  envelope.classList.add("open");
  envelope.setAttribute("aria-expanded", "true");
  intro.classList.add("hide");
  window.setTimeout(() => {
    invitation.classList.add("show");
    invitation.setAttribute("aria-hidden", "false");
  }, 650);
});

closeButton.addEventListener("click", () => {
  invitation.classList.remove("show");
  invitation.setAttribute("aria-hidden", "true");
  window.setTimeout(() => {
    envelope.classList.remove("open");
    envelope.setAttribute("aria-expanded", "false");
    intro.classList.remove("hide");
    opened = false;
  }, 450);
});

rsvpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("guestName").value.trim();
  const answer = document.getElementById("attendance").value;
  if (!name || !answer) return;
  formNote.textContent = `Շնորհակալություն, ${name}։ Ձեր պատասխանը գրանցված է այս դեմո էջում։`;
  rsvpForm.reset();
});

const music = document.getElementById("weddingMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", async () => {
    try {
        if (music.paused) {
            await music.play();
            musicButton.textContent = "♫ Pause Music";
        } else {
            music.pause();
            musicButton.textContent = "♫ Play Music";
        }
    } catch (error) {
        console.error("Music error:", error);
    }
});
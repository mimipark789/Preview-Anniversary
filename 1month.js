function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === "123125") {
    document.getElementById("passwordScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
    startHearts();
  } else {
    alert("No way you got this wrong 💔");
  }
}

function openEnvelope() {
  document.getElementById("envelope").classList.add("open");
  document.getElementById("gallery").style.display = "flex";
}

function startHearts() {
  const heartContainer = document.querySelector(".hearts");

  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 400);
}
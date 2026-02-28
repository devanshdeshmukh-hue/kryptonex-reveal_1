const handArea = document.getElementById("handArea");
const scanLine = document.querySelector(".scan-line");
const statusText = document.getElementById("statusText");
const kryptonex = document.getElementById("kryptonex");

const scanSound = document.getElementById("scanSound");
const revealSound = document.getElementById("revealSound");

handArea.addEventListener("click", () => {

    statusText.innerText = "Scanning...";
    scanLine.style.animation = "scan 2s linear";

    if (scanSound) scanSound.play();

    setTimeout(() => {
        statusText.innerText = "Biometric Match Confirmed";
    }, 2000);

    setTimeout(() => {
        handArea.style.display = "none";
        statusText.style.display = "none";
        kryptonex.classList.remove("hidden");
        if (revealSound) revealSound.play();
    }, 3000);

});

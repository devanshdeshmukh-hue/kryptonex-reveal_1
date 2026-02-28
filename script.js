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

    document.body.classList.add("shake");

    const flash = document.querySelector(".flash");
    flash.classList.add("active");

    setTimeout(() => {

    document.body.classList.add("shake");

    if (revealSound) revealSound.play();

    handArea.style.display = "none";
    statusText.style.display = "none";
    kryptonex.classList.remove("hidden");

}, 3000);

    leftCurtain.classList.add("open-left");
    rightCurtain.classList.add("open-right");

    if (revealSound) revealSound.play();

    setTimeout(() => {
        handArea.style.display = "none";
        statusText.style.display = "none";
        kryptonex.classList.remove("hidden");
    }, 1500);

}, 3000);

});



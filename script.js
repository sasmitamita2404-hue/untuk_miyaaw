const bgMusic = document.getElementById("bgMusic");
const flowers = document.getElementById("flowers");

let flowerTimer = null;
let currentPhoto = 0;

const photoSources = [
    "images/foto1.jpg",
    "images/foto2.jpg",
    "images/foto3.jpg"
];

// Berpindah slide tanpa memulai ulang musik
function showSlide(slideId) {
    document.querySelectorAll(".slide").forEach(slide => {
        slide.classList.remove("active");
    });

    document.getElementById(slideId).classList.add("active");
}

// Memulai kejutan
function enterGarden() {
    showSlide("transition");

    bgMusic.play().catch(() => {
        console.log("Browser tidak dapat memutar musik.");
    });

    startFlowers();

    const waitText = document.getElementById("waitText");
    const someoneText = document.getElementById("someoneText");

    waitText.style.opacity = "1";
    someoneText.style.opacity = "0";

    setTimeout(() => {
        waitText.style.opacity = "0";
        someoneText.style.opacity = "1";
    }, 1800);

    setTimeout(() => {
        showSlide("birthday");
    }, 5500);
}

// Bunga jatuh
function startFlowers() {
    if (flowerTimer) return;

    const symbols = ["✿", "❀", "✳", "✾"];

    flowerTimer = setInterval(() => {
        const flower = document.createElement("span");

        flower.className = "flower";
        flower.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        flower.style.left = Math.random() * 100 + "vw";
        flower.style.fontSize = (12 + Math.random() * 13) + "px";
        flower.style.animationDuration = (5 + Math.random() * 4) + "s";
        flower.style.color = "#fff7ed";

        flowers.appendChild(flower);

        setTimeout(() => flower.remove(), 9500);
    }, 500);
}

// Membuka foto
function openPhoto(index) {
    currentPhoto = index;

    document.getElementById("largePhoto").src =
        photoSources[currentPhoto];

    showSlide("photoViewer");
}

// Foto sebelumnya atau selanjutnya
function changePhoto(direction) {
    currentPhoto =
        (currentPhoto + direction + photoSources.length) %
        photoSources.length;

    document.getElementById("largePhoto").src =
        photoSources[currentPhoto];
}

// Kejutan saat membuat harapan
function makeWish() {
    const message = document.getElementById("wishMessage");
    const button = document.getElementById("wishButton");

    message.textContent =
        "may your wishes find their way to you. ♡";

    button.textContent = "WISH MADE ✳";
}
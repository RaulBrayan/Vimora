const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".lightbox-img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.getElementById("closeLightbox");

let lastTransform = "";

// 🔵 PAUSAR carrusel
function pauseCarousel() {
    slider.style.animationPlayState = "paused";
}


// 🟢 REANUDAR carrusel
function resumeCarousel() {
    slider.style.animationPlayState = "running";
}


// 🟡 Abrir lightbox con animación desde la posición original
images.forEach(img => {
    img.addEventListener("click", () => {

        pauseCarousel();

        // Obtener posición real de la imagen en pantalla
        const rect = img.getBoundingClientRect();

        // Aplicar imagen al lightbox
        lightboxImage.src = img.src;

        // Estilos iniciales (tamaño y posición original)
        lightboxImage.style.transition = "none";
        lightboxImage.style.position = "fixed";
        lightboxImage.style.left = rect.left + "px";
        lightboxImage.style.top = rect.top + "px";
        lightboxImage.style.width = rect.width + "px";
        lightboxImage.style.height = rect.height + "px";

        lightbox.style.display = "flex";

        // Forzar reflow (necesario para animación)
        void lightboxImage.offsetWidth;

        // Animar hacia el centro
        lightboxImage.style.transition = "1s ease";
        lightboxImage.style.left = "50%";
        lightboxImage.style.top = "50%";
        lightboxImage.style.transform = "translate(-50%, -50%)";
        lightboxImage.style.width = "70vw";
        lightboxImage.style.height = "80vh";

    });
});

// 🔴 Cerrar lightbox con animación de fade + scale
closeBtn.addEventListener("click", () => {

    // Animación suave al cerrar
    lightboxImage.style.transition = "0.3s ease";
    lightboxImage.style.transform = "translate(-50%, -50%) scale(0.7)";
    lightboxImage.style.opacity = "0";

    setTimeout(() => {
        lightbox.style.display = "none";
        // Restaurar valores
        lightboxImage.style.opacity = "1";
        lightboxImage.style.transform = "translate(-50%, -50%) scale(1)";
        resumeCarousel();
    }, 300);
});


lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {

        lightboxImage.style.transition = "0.3s ease";
        lightboxImage.style.transform = "translate(-50%, -50%) scale(0.7)";
        lightboxImage.style.opacity = "0";

        setTimeout(() => {
            lightbox.style.display = "none";
            lightboxImage.style.opacity = "1";
            lightboxImage.style.transform = "translate(-50%, -50%) scale(1)";
            resumeCarousel();
        }, 300);
    }
});
const modal = document.getElementById("myModal");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.querySelector(".close");

const title = document.getElementById("modal-title");
const text = document.getElementById("modal-text");
const modalImg = document.getElementById("modal-img");
const btnWhatsapp = document.getElementById("btn-whatsapp");


// Evento para IMAGEN + ICONO + CUALQUIER elemento con .open-modal
document.querySelectorAll(".open-modal").forEach(trigger => {
    trigger.addEventListener("click", () => {

        // Buscar la tarjeta a la que pertenece
        const card = trigger.closest(".card-product");

        // Obtener info
        const img = card.getAttribute("data-img");
        const printal = card.getAttribute("data-title");
        const info = card.getAttribute("data-text");

        // Rellenar modal
        modalImg.src = img;
        title.textContent = printal;
        text.textContent = info;

        // Mensaje dinámico
        const mensaje = encodeURIComponent(`Hola, quiero comprar: ${printal}`);
        btnWhatsapp.href = `https://wa.me/51974192779?text=${mensaje}`;

        // Mostrar modal
        modal.style.display = "flex";
    });
});



document.querySelectorAll('.add-cart').forEach(boton => {

    boton.addEventListener('click', () => {

        // Buscar la tarjeta padre
        const card = boton.closest('.card-product');

        // Obtener el nombre desde data-title
        const producto = card.dataset.title;

        // Crear mensaje dinámico
        const mensaje = encodeURIComponent(`Hola, quiero comprar: ${producto}`);

        const numero = "51974192779";

        // Abrir WhatsApp
        window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");

    });

});



// Cerrar modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

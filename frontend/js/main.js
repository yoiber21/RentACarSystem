function validateReservationForm() {
    const fechaRecogida = new Date(document.getElementById('fecha_recogida').value);
    const fechaEntrega = new Date(document.getElementById('fecha_entrega').value);

    if (fechaRecogida >= fechaEntrega) {
        alert('La fecha de entrega debe ser posterior a la fecha de recogida.');
        return false;
    }

    // Validaciones adicionales si es necesario

    return true;
}

let currentIndex = 0;

function moveCarousel(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const track = document.querySelector('.carousel-track');
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

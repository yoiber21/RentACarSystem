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

// Validación del formulario de citas
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap
    const forms = document.querySelectorAll('.needs-validation');

    // Bucle para prevenir envío si hay campos inválidos
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false);
    });
    
    // Configurar datepicker para el campo de fecha (si existe)
    const fechaInput = document.getElementById('fecha');
    if (fechaInput) {
        // Establecer la fecha mínima como hoy
        const today = new Date().toISOString().split('T')[0];
        fechaInput.setAttribute('min', today);
        
        // Agregar 3 meses a la fecha actual para la fecha máxima
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 3);
        const maxDateStr = maxDate.toISOString().split('T')[0];
        fechaInput.setAttribute('max', maxDateStr);
    }
    
    // Mostrar la confirmación de compra (si existe el botón)
    const comprarBtn = document.querySelector('.comprar-btn');
    if (comprarBtn) {
        comprarBtn.addEventListener('click', function(e) {
            if (!confirm('¿Confirmar la compra de este eBook?')) {
                e.preventDefault();
            }
        });
    }
    
    // Efecto de desplazamiento suave para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Cerrar automáticamente las alertas después de 5 segundos
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            const bsAlert = new bootstrap.Alert(alert);
            bsAlert.close();
        }, 5000);
    });
});

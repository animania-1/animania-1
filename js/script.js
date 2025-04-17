// Inicializa EmailJS (usa tu ID público)
emailjs.init("J4sC6bTK94RIIrZrl");

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  emailjs.sendForm("service_4yav7km", "template_ri2e9uc", this)
    .then(() => {
      alert("✅ Cita confirmada. Revisa tu correo.");
      window.location.href = "index.html"; // Redirige al inicio
    })
    .catch(() => {
      alert("❌ Error al enviar. Por favor, inténtalo más tarde.");
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Validación de formularios
    const forms = document.querySelectorAll('.needs-validation');
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // Configurar fecha
    const fechaInput = document.getElementById('fecha');
    if (fechaInput) {
        const today = new Date().toISOString().split('T')[0];
        fechaInput.setAttribute('min', today);
        
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 3);
        const maxDateStr = maxDate.toISOString().split('T')[0];
        fechaInput.setAttribute('max', maxDateStr);
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Cerrar alertas
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.style.display = 'none';
        }, 5000);
    });
});

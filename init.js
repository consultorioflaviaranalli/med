// ============================================
// INIT.JS — Aplica CONFIG a todos los HTML
// Se ejecuta automáticamente en cada página
// ============================================

document.addEventListener("DOMContentLoaded", function() {

    // Título de la página
    if (document.title.includes("–") || document.title.includes("-")) {
        document.title = document.title.replace(/Dra\. Guerra Verónica|PediMed|Consultorio Pediátrico/g, CONFIG.nombreApp);
    }

    // Logo círculo — letra e ícono
    document.querySelectorAll(".logo-circle").forEach(el => {
        el.textContent = CONFIG.logoIcono;
        el.style.background = "linear-gradient(135deg, " + CONFIG.colorPrimario + ", " + CONFIG.colorSecundario + ")";
    });

    // Nombre de la app en topbar
    document.querySelectorAll(".topbar h1").forEach(el => {
        const partes = CONFIG.nombreApp.match(/^(.+?)([A-Z][a-z]+)$/);
        if (partes) {
            el.innerHTML = partes[1] + "<span>" + partes[2] + "</span>";
        } else {
            el.textContent = CONFIG.nombreApp;
        }
        el.querySelector("span") && (el.querySelector("span").style.color = CONFIG.colorPrimario);
    });

    // Avatar de la Dra. en topbar
    document.querySelectorAll(".user-avatar").forEach(el => {
        el.textContent = CONFIG.iniciales;
        el.style.background = CONFIG.colorPrimario;
    });

    // Nombre de la Dra. en topbar
    document.querySelectorAll(".user-chip span").forEach(el => {
        if (el.textContent.includes("Guerra") || el.textContent.includes("Dra.")) {
            el.textContent = CONFIG.titulo + " " + CONFIG.nombre;
        }
    });

    // Buen día en panel
    const saludo = document.querySelector(".page-header h2");
    if (saludo && saludo.textContent.includes("Dra.")) {
        saludo.textContent = "Buen día, " + CONFIG.nombreCorto + " 👋";
    }

    // Colores primarios en botones y elementos
    document.querySelectorAll(".btn-action.primary").forEach(el => {
        el.style.background = CONFIG.colorPrimario;
        el.style.borderColor = CONFIG.colorPrimario;
    });

    // Teleconsulta banner
    document.querySelectorAll(".teleconsulta-banner").forEach(el => {
        el.style.background = "linear-gradient(135deg, " + CONFIG.colorPrimario + " 0%, " + CONFIG.colorSecundario + " 100%)";
    });

    // Nombre profesional en confirmación de turno
    document.querySelectorAll("[id='resumenTurno'] span, .turno-resumen span").forEach(el => {
        if (el.textContent.includes("Guerra") || el.textContent.includes("Pediatría")) {
            el.textContent = CONFIG.titulo + " " + CONFIG.nombre + " · " + CONFIG.especialidad;
        }
    });

});

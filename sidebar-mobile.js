// ============================================
// SIDEBAR-MOBILE.JS — Hamburguesa para mobile
// Agregar en todos los HTML del panel médico:
// <script src="sidebar-mobile.js"></script>
// ============================================

(function() {

  // ── CSS ───────────────────────────────────────────────────────────────────
  const css = `
    /* BOTÓN HAMBURGUESA — solo mobile */
    .btn-hamburguesa {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 6px 8px;
      border-radius: 8px;
      color: #4a5568;
      font-size: 20px;
      line-height: 1;
      margin-right: 4px;
    }
    .btn-hamburguesa:hover { background: #f7fafc; }

    /* OVERLAY oscuro detrás del sidebar */
    .sidebar-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,.45);
      z-index: 150;
    }
    .sidebar-overlay.open { display: block; }

    @media (max-width: 768px) {

      /* Mostrar hamburguesa */
      .btn-hamburguesa { display: flex; align-items: center; justify-content: center; }

      /* Ocultar elementos del topbar que no caben */
      .badge-online { display: none !important; }
      .user-chip span { display: none !important; }
      .btn-logout { font-size: 12px; padding: 5px 10px; }

      /* Sidebar: oculto por defecto, slide desde la izquierda */
      .sidebar {
        position: fixed !important;
        top: 0;
        left: 0;
        height: 100vh !important;
        z-index: 200;
        transform: translateX(-100%);
        transition: transform .25s ease;
        box-shadow: 4px 0 20px rgba(0,0,0,.15);
        padding-top: 60px !important;
        overflow-y: auto;
      }
      .sidebar.open {
        transform: translateX(0);
      }

      /* El contenido principal ocupa todo el ancho */
      .layout { display: block !important; }
      .main { padding: 1rem !important; }

      /* Título de página más chico */
      .page-header h2 { font-size: 18px !important; }
    }
  `;

  // Inyectar CSS
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ── DOM: agregar botón y overlay ──────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function() {

    const topbarLeft = document.querySelector('.topbar-left');
    const sidebar = document.querySelector('.sidebar, nav.sidebar');

    if (!topbarLeft || !sidebar) return;

    // Botón hamburguesa
    const btn = document.createElement('button');
    btn.className = 'btn-hamburguesa';
    btn.setAttribute('aria-label', 'Menú');
    btn.innerHTML = '☰';
    topbarLeft.insertBefore(btn, topbarLeft.firstChild);

    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    // Abrir sidebar
    function abrirSidebar() {
      sidebar.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    // Cerrar sidebar
    function cerrarSidebar() {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    btn.addEventListener('click', function() {
      if (sidebar.classList.contains('open')) {
        cerrarSidebar();
      } else {
        abrirSidebar();
      }
    });

    // Cerrar al tocar el overlay
    overlay.addEventListener('click', cerrarSidebar);

    // Cerrar al navegar (tocar un link del sidebar)
    sidebar.querySelectorAll('a.nav-item').forEach(function(link) {
      link.addEventListener('click', function() {
        cerrarSidebar();
      });
    });

    // Cerrar con Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') cerrarSidebar();
    });

  });

})();

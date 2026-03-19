const hamburger = document.getElementById("hamburger")
const sidebar = document.getElementById("sidebar")
const overlay = document.getElementById("overlay")
const closeBtn = document.getElementById("closeBtn")
const menuLinks = document.querySelectorAll(".menu-link")
const cardButtons = document.querySelectorAll(".card[data-section]")
const backgroundDiv = document.getElementById("background")

// Función para mostrar una sección
function showSection(sectionId) {

  // 1. Ocultar todas las secciones
  const sections = document.querySelectorAll(".section")
  sections.forEach((section) => {
    section.style.display = "none"
  })

  // 2. Mostrar sección seleccionada
  const selectedSection = document.getElementById(sectionId)
  if (selectedSection) {
    selectedSection.style.display = "block"
    window.scrollTo(0, 0)
  }

  // =====================================================
  // 3. CONTROL DE FONDOS SIN IMÁGENES — SOLO CLASES CSS
  // =====================================================

  // Limpiar clases de fondo
  backgroundDiv.className = ""

  if (sectionId === "inicio") {
    backgroundDiv.classList.add("bg-inicio")

  } else if (sectionId === "circulacion") {
    backgroundDiv.classList.add("bg-circulacion")

  } else if (sectionId === "linea-tiempo") {
    backgroundDiv.classList.add("bg-linea")

  } else if (sectionId === "mini-juegos") {
    backgroundDiv.classList.add("bg-mini")

  } else if (sectionId === "museo") {
    backgroundDiv.classList.add("bg-museo")
  }

  // 4. Cerrar menú
  sidebar.classList.remove("active")
  overlay.classList.remove("active")
}

// Abrir menú
hamburger.addEventListener("click", () => {
  sidebar.classList.add("active")
  overlay.classList.add("active")
})

// Cerrar menú
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active")
  overlay.classList.remove("active")
})

// Cerrar menú al hacer clic fuera
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active")
  overlay.classList.remove("active")
})

// Navegación desde el menú
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {

    // ❌ Si es el título del submenú, NO navega
    if (link.classList.contains("submenu-title")) return;

    e.preventDefault();
    const sectionId = link.getAttribute("data-section");
    if (sectionId) showSection(sectionId);
  });
});

// Navegación desde las tarjetas
cardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const sectionId = button.getAttribute("data-section")
    showSection(sectionId)
  })
})

// Mostrar sección de inicio automáticamente
document.addEventListener("DOMContentLoaded", () => {
  showSection("inicio")
})

// --- CAMBIAR SECCIÓN DESDE LOS BOTONES DEL INICIO ---
const botonesInicio = document.querySelectorAll('.btn-inicio');
const secciones = document.querySelectorAll('.section');

botonesInicio.forEach(btn => {
    btn.addEventListener('click', () => {
        const destino = btn.getAttribute('data-section');

        // Oculta todas las secciones
        secciones.forEach(sec => sec.style.display = 'none');

        // Muestra la sección seleccionada
        const secDestino = document.getElementById(destino);
        if (secDestino) secDestino.style.display = 'block';

        // (Opcional) Si usas cambio de fondo dinámico
        if (typeof cambiarFondo === "function") {
            cambiarFondo(destino);
        }
    });
});

// Submenú desplegable
document.querySelectorAll(".submenu-title").forEach(title => {
    title.addEventListener("click", (e) => {
        e.preventDefault();
        const parent = title.parentElement;
        parent.classList.toggle("open");
    });
});

// BOTÓN PARA IR A LA LÍNEA DEL TIEMPO DESDE LA SECCIÓN ESTUDIANTE
document.addEventListener("DOMContentLoaded", () => {
    const explorar = document.getElementById("btn-explorar-linea");
    if (explorar) {
        explorar.addEventListener("click", () => {
            showSection("linea-tiempo");
        });
    }
});
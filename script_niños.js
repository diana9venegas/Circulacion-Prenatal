const timeline = document.getElementById('progressTimeline');
const scrollAmount = 1450;

function scrollTimeline(direction) {
    const timeline = document.getElementById('progressTimeline');
    
    if (!timeline) {
        console.error("No se encontró el elemento con ID 'progressTimeline'.");
        return;
    }
    if (direction === 'left') {
        timeline.scrollBy({ 
            left: -scrollAmount, 
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        timeline.scrollBy({ 
            left: scrollAmount, 
            behavior: 'smooth' 
        });
    }
}

const circulationData = [
    { title: "Paso 1: Placenta", 
    text: `
    <p>¡Aquí empieza la aventura! La <strong>placenta</strong> es como una estación de energía.</p>
    <p>Desde aquí, mamá le envía al bebé todo el oxígeno y la comida que necesita para crecer fuerte.</p>
    `},
    { title: "Paso 2: Paso parcial por el hígado", 
    text: `
    <p>La sangre viaja por un <strong>tubo mágico</strong> llamado vena umbilical.</p>
    <p>Es como un puente especial que conecta la pancita del bebé con la mamá para recibir todo lo bueno.</p>
    `},
    { title: "Paso 3: Mezcla en la vena cava inferior.", 
    text: `
    <p>Al llegar al hígado, la sangre toma un <strong>atajo súper rápido</strong> llamado conducto venoso.</p>
    <p>Es como un túnel secreto para cruzar rápido sin detenerse en el tráfico.</p>
    <br>
        <a href="Sopa_niños.html" class="boton-jugar">
            🔍 Minijuego: ¡Resuelve la sopa de letras!
        </a>
    `},
    { title: "Paso 4: La sangre llega a la auricula derecha", 
    text: `
    <p>¡Subiendo! La sangre entra en un <strong>ascensor gigante</strong>.</p>
    <p>Este ascensor recoge a los viajeros que vienen de las piernas y la barriga para llevarlos directo hacia el corazón.</p>
    `},
    { title: "Paso 5: Primer Camino (Hacia la Aurícula Izquierda)", 
    text: `
    <p>Llegamos a la <strong>sala de entrada</strong> del corazón.</p>
    <p>Aquí llega toda la sangre, pero la que trae mucho oxígeno tiene un pase VIP para no hacer fila.</p>
    `},
    { title: "Paso 6: Segundo Camino (Ventrículo Derecho)", 
    text: `
    <p>Como los pulmones del bebé están dormidos, la sangre usa una <strong>puerta secreta</strong> llamada <strong>Foramen Oval</strong>.</p>
    <p>Así cruza directamente al otro lado del corazón sin perder tiempo.</p>
    <br>
        <a href="quiz_niños.html" class="boton-jugar">
            ❓ Minijuego: ¡Quiz Rápido!
        </a>
    `},
    { title:"Paso 7: Arteria pulmonar.",
    text:`
    <p>Ahora estamos en el <strong>cuarto de espera</strong> del lado izquierdo.</p>
    <p>La sangre oxigenada se prepara y se acomoda para ser lanzada con fuerza hacia todo el cuerpo.</p>
    `},
    { title:"Paso 8: Conducto Arterioso.",
    text:`
    <p>¡El gran motor! Esta parte del corazón es súper fuerte.</p>
    <p>Da un <strong>empujón gigante</strong> para mandar la sangre limpia hacia la cabeza y el cerebro.</p>
    `},
    { 
    title: "Paso 9: Aurícula Izquierda", 
    text: `
    <p>Es la <strong>superautopista</strong> del cuerpo.</p>
    <p>La primera salida es la más importante: lleva el oxígeno directo al cerebro para que el bebé sea muy listo.</p>
    <br>
        <a href="rompecabezas.html" class="boton-jugar">
            🧩 Minijuego: ¡Arma el rompecabezas!
        </a>
    `
    },
    { 
    title: "Paso 10: Aorta Ascendente", 
    text: `
    <p>La sangre que ya visitó el cerebro regresa bajando por un <strong>tobogán</strong>.</p>
    <p>Ya está un poco cansada y tiene menos oxígeno, así que vuelve a entrar al corazón.</p>
    `
    },
    { 
    title: "Paso 11: Aorta Descendente", 
    text: `
    <p>Esta sangre cansada intenta ir hacia los pulmones, pero recuerda... ¡están llenos de agua!</p>
    <p>El corazón la empuja, pero encuentra el camino cerrado.</p>
    `},
    { 
    title: "Paso 12: Retorno a la Placenta", 
    text: `
    <p>¡Cuidado! Para no chocar con los pulmones, la sangre usa un <strong>tobogán de escape</strong> llamado <strong>Ductus Arterioso</strong>.</p>
    <p>Baja hacia las piernas para volver a la placenta y recargarse de nuevo.</p>
    <br>
        <a href="ArrastrarV.html" class="boton-jugar">
            👆 Minijuego: Arrastra y Acierta.
    
        </a>
    `
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.getElementById('progressTimeline');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    function updateArrows() {
        if (!leftArrow || !rightArrow || !timeline) return;

        const tolerance = 10; 
        if (timeline.scrollLeft <= tolerance) {
            leftArrow.style.opacity = '0';
            leftArrow.style.pointerEvents = 'none'; 
        } else {
            leftArrow.style.opacity = '1';
            leftArrow.style.pointerEvents = 'auto';
        }

        const lastCard = timeline.querySelector('.container:last-child');
        
        if (lastCard) {
            const lastCardRight = lastCard.getBoundingClientRect().right;
            const timelineRight = timeline.getBoundingClientRect().right;

            if (lastCardRight <= timelineRight + 50) {
                rightArrow.style.opacity = '0';
                rightArrow.style.pointerEvents = 'none';
            } else {
                rightArrow.style.opacity = '1';
                rightArrow.style.pointerEvents = 'auto';
            }
        }
    }

    if (timeline) {
        timeline.addEventListener('scroll', updateArrows);
        window.addEventListener('resize', updateArrows);
        updateArrows();
    }

    const detailBox = document.getElementById('step-details');
    
    if (detailBox) {
        detailBox.style.display = 'none';
        detailBox.classList.remove('visible');
    }

    const stepContainers = document.querySelectorAll('.container');

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);

    if (detailBox) {
        overlay.appendChild(detailBox);
        if (!detailBox.querySelector('.close-button')) {
            detailBox.insertAdjacentHTML('afterbegin', '<span class="close-button">&times;</span>');
        }
    }

    const closeButton = detailBox ? detailBox.querySelector('.close-button') : null;
    const newDetailTitle = detailBox ? detailBox.querySelector('#detail-title') : null;
    const newDetailText = detailBox ? detailBox.querySelector('#detail-text') : null;

    function closeDetails() {
        if (detailBox) {
            detailBox.classList.remove('visible');
            detailBox.style.display = 'none';
        }
        overlay.classList.remove('visible');
        document.body.style.overflow = '';
    }

    stepContainers.forEach((container, index) => {
        const circle = container.querySelector('.step-circle');
        circle.addEventListener('click', () => {
            const data = circulationData[index];

            if (data && detailBox) {
                newDetailTitle.textContent = data.title;
                newDetailText.innerHTML = data.text;

                let detailImage = document.getElementById('detail-image');
                if (!detailImage) {
                    detailImage = document.createElement('img');
                    detailImage.id = 'detail-image';
                    newDetailTitle.after(detailImage);
                }

                if (data.image) {
                    detailImage.src = data.image;
                    detailImage.style.display = 'block';
                } else {
                    detailImage.style.display = 'none';
                }
                
                detailBox.style.display = 'block';
                setTimeout(() => {
                    detailBox.classList.add('visible');
                    overlay.classList.add('visible');
                }, 10);
                
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (closeButton) {
        closeButton.addEventListener('click', closeDetails);
    }
    
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            closeDetails();
        }
    });

    function toggleMenu() {
        const nav = document.getElementById('mobileNav');
        const overlay = document.getElementById('menuOverlay');
        const icon = document.querySelector('.menu-icon');

        if (nav && overlay && icon) {
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
            icon.classList.toggle('active');
        }
    }

    function toggleSubmenu(event, submenuId) {
        event.preventDefault(); 
        const submenu = document.getElementById(submenuId);
        if (submenu) {
            submenu.classList.toggle('open');
        }
    }

    window.toggleMenu = toggleMenu;
    window.toggleSubmenu = toggleSubmenu;
    window.scrollTimeline = scrollTimeline;
    window.scrollTimeline = scrollTimeline;
});

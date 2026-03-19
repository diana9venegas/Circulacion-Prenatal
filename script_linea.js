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
    <p>Todo comienza en la placenta. Desde aquí, la sangre con la <strong>mayor riqueza de oxígeno (~80%)</strong> ingresa al cuerpo del feto viajando a través de la <strong>vena umbilical izquierda.</strong>.</p>
    <p>Este flujo sanguíneo entra con fuerza, manteniéndose a <strong>alta presión</strong> gracias al impulso de bombeo que recibe directamente de la placenta.</p>
    `,
    },
    { title: "Paso 2: Paso parcial por el hígado", 
    text: `
    <p>Al llegar al hígado, el flujo sanguíneo se divide estratégicamente:</p>
    <ul>
        <li>Una pequeña parte ingresa a los <strong>sinusoides hepáticos</strong> por las venas vitelinas para nutrir el órgano.</li>
        <li>La mayor parte toma un atajo directo a través del <strong>conducto venoso</strong>.</li>
    </ul>
    <p>Al evitar el tejido hepático, la sangre conserva su <strong>alta oxigenación</strong> y avanza rápidamente hacia el corazón.</p>
    `},
    { title: "Paso 3: Mezcla en la vena cava inferior.", 
    text: `
    <p>El flujo del conducto venoso converge en la <strong>vena cava inferior (VCI)</strong>.</p>
    <p>En este trayecto, el contenido oxigenado se combina con el retorno venoso</p>
    <p>desoxigenado proveniente de:</p>
    <ul>
        <li>La región pélvica.</li>
        <li>Las extremidades inferiores.</li>
        <li>Los riñones.</li>
    </ul> 
    <p>Posteriormente, la VCI conduce esta mezcla sanguínea en ascenso hacia la <strong>aurícula derecha</strong> del corazón.</p>
    <br>
        <a href="Sopa_letras.html" class="boton-jugar">
            🔎 Minijuego: Sopa de Letras.
        </a>
    `},
    { title: "Paso 4: La sangre llega a la auricula derecha", 
    text: `
    <p>La orientación anatómica de la VCI canaliza el flujo oxigenado preferentemente hacia el <strong>septo interauricular</strong>.
    Simultáneamente, ocurre una confluencia menor con el retorno venoso de la <strong>Vena Cava Superior</strong> (región cefálica y brazos).</p>
    <p>Esta mezcla secundaria aporta sangre considerablemente <strong>más desoxigenada</strong> al sistema.</p>
    <p style="margin-top: 40px; padding-top: 20px; border-top: 2px dashed #fadadd;">
        Tras mezclarse con el retorno de la Vena Cava Superior, la sangre fetal se enfrenta a una <strong>bifurcación fisiológica</strong>.
    </p> 
    <p>Dependiendo de su velocidad y dirección, el flujo toma uno de <strong>dos caminos</strong>:</p>
    <ul>
        <li>La mayor parte cruza el <strong>foramen oval</strong> directamente hacia la aurícula izquierda (AI).</li>
        <li>El resto desciende al <strong>ventrículo derecho</strong> (VD), dirigiéndose a laS arteriaS pulmonares derecha e izquierda y al conducto arterioso.</li>
    </ul>
    <p><strong>Ambos caminos se describen a continuación.</strong></p>
    `},
    { title: "Paso 5: Primer Camino (Hacia la Aurícula Izquierda)", 
    text: `
    <p>La sangre con <strong>mayor presión y oxigenación</strong> es dirigida por la VCI directamente contra el tabique interauricular.</p>
    <p>Este flujo cruza hacia la aurícula izquierda a través de:</p>
    <ul>
        <li>El <strong>Foramen Oval</strong>.</li>
        <li>El <strong>Ostium o foramen Secundum</strong>.</li>
    </ul>
    <p>Al evitar el circuito pulmonar, la sangre pasa al <strong>ventrículo izquierdo</strong> y es eyectada por la <strong>aorta ascendente</strong>, garantizando el oxígeno para el desarrollo del <strong>cerebro y el corazón</strong>.</p>
    `},
    { title: "Paso 6: Segundo Camino (Ventrículo Derecho)", 
    text: `
    <p>Dado que el foramen oval es relativamente pequeño, no puede desviar todo el caudal. El excedente de sangre (principalmente <strong>desoxigenada</strong>) toma la ruta alternativa.</p>
    <p>Este flujo sigue el circuito tradicional del corazón derecho:</p>
    <ul>
        <li>Cruza la <strong>válvula tricúspide</strong>.</li>
        <li>Ingresa al <strong>ventrículo derecho</strong>.</li>
        <li>Es eyectado hacia la <strong>arteria pulmonar</strong>.</li>
    </ul>
    <p>Finalmente, esta sangre será la que retornará a la placenta a través de las arterias umbilicales para limpiarse.</p>
    <br>
        <a href="quiz.html" class="boton-jugar">
            ❓ Minijuego: ¡Quiz Rápido!
        </a>
    `},
    { title:"Paso 7: Arteria pulmonar.",
    text:`
    <p>La sangre es eyectada con fuerza del <strong>ventrículo derecho</strong> hacia el tronco de la <strong>arteria pulmonar</strong>.</p>
    <p>Sin embargo, en esta etapa el flujo encuentra un obstáculo mayor:</p>
    <ul>
        <li>Los pulmones fetales están <strong>presentan una elevada resistencia vascular</strong> (no tienen aire).</li>
    </ul>
    <p>Como consecuencia, solo una fracción <strong>mínima</strong> de sangre logra entrar realmente al tejido pulmonar para nutrirlo.</p>
    `},
    { title:"Paso 8: Conducto Arterioso.",
    text:`
    <p>Ante la alta resistencia pulmonar, la sangre busca una vía de escape inmediata.</p>
    <p>Aproximadamente el <strong>88% del flujo</strong> de la arteria pulmonar toma este atajo:</p>
    <ul>
        <li>Pasa directamente a través del <strong>conducto arterioso</strong>.</li>
        <li>Es desviada hacia la <strong>aorta descendente</strong>.</li>
    </ul>
    <p>Esto permite que la sangre evite los pulmones y continúe su camino para irrigar la mitad inferior del cuerpo fetal.</p>
    `},
    { 
    title: "Paso 9: Aurícula Izquierda", 
    text: `
    <p>La sangre que llena la <strong>aurícula izquierda</strong> proviene casi en su totalidad del cruce por el foramen oval.</p>
    <p>Sin embargo, en esta cámara ocurre una <strong>mezcla leve</strong> con:</p>
    <ul>
        <li>Sangre poco oxigenada que retorna de las <strong>venas pulmonares</strong>.</li>
        <li>(Este aporte es de volumen mínimo debido al colapso pulmonar).</li>
    </ul>
    <p>Una vez integrada esta mezcla, el flujo desciende hacia el <strong>ventrículo izquierdo</strong>, preparándose para ser bombeado al cuerpo.</p>
    `
    },
    { 
    title: "Paso 10: Aorta Ascendente", 
    text: `
    <p>El <strong>ventrículo izquierdo</strong> impulsa la sangre con mayor saturación de oxígeno hacia la <strong>aorta ascendente</strong>.</p>
    <p>Este flujo privilegiado está destinado a la irrigación de zonas críticas:</p>
    <ul>
        <li>El <strong>cerebro</strong> (órgano con altísima demanda de oxígeno).</li>
        <li>El tejido del propio <strong>corazón</strong> (vía coronarias).</li>
        <li>La parte superior del cuerpo.</li>
    </ul>
    <p>Gracias a las <strong>arterias carótidas</strong>, el feto asegura que su sistema nervioso central reciba la sangre de mejor calidad disponible.</p>
    `
    },
    { 
    title: "Paso 11: Aorta Descendente", 
    text: `
    <p>El flujo restante desciende por la <strong>aorta descendente</strong>, transportando ahora sangre con una <strong>menor saturación de oxígeno</strong> (mezclada).</p>
    <p>Esta sangre se distribuye para irrigar las estructuras de la mitad inferior:</p>
    <ul>
        <li>Tronco y abdomen.</li>
        <li>Pelvis.</li>
        <li>Extremidades inferiores.</li>
    </ul>
    <p>Finalmente, el circuito se canaliza hacia las <strong>arterias umbilicales</strong>, que transportan la sangre desoxigenada de vuelta a la placenta para su renovación.</p>
    `
    },
    { 
    title: "Paso 12: Retorno a la Placenta", 
    text: `
    <p>El ciclo culmina cuando las <strong>arterias umbilicales</strong> transportan la sangre desoxigenada de regreso al lecho placentario.</p>
    <p>En este sitio ocurre el intercambio metabólico final:</p>
    <ul>
        <li>La sangre libera <strong>CO₂ y desechos</strong>.</li>
        <li>Se recarga de <strong>oxígeno (O₂) y nutrientes</strong> esenciales.</li>
        <li>Queda lista para <strong>reiniciar el ciclo</strong> circulatorio una vez más.</li>
    </ul>
    <br>
        <a href="ArrastrarE.html" class="boton-jugar">
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

    /* --- LÓGICA DEL MENÚ Y SUBMENÚ --- */
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
});
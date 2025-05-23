

// Mostrar contenido con retraso (animación inicial)
window.addEventListener('load', () => {
    setTimeout(() => {
        const content = document.querySelector('.content');
        content.classList.add('visible');
    }, 500); // aparece después del balón
});

// Contadores de estadísticas


function animarContador(id, inicio, fin, duracion, esPorcentaje = false) {
    const elemento = document.getElementById(id);
    const incremento = (fin - inicio) / (duracion / 10);
    let valor = inicio;
    const intervalo = setInterval(() => {
        valor += incremento;
        if (valor >= fin) {
            valor = fin;
            clearInterval(intervalo);
        }
        elemento.innerText = esPorcentaje ? `${Math.round(valor)}%` : Math.floor(valor);
    }, 10);
}

window.onload = () => {
    iniciarContadores();
};


// Aparición del contenido (más rápida)
function mostrarContenido() {
    const contenido = document.querySelector(".content");
    setTimeout(() => {
        contenido.classList.add("visible");
    }, 1300); // Ahora aparece más rápido
}

// Contadores animados


function animar(selector, valorFinal, duracion, sufijo = "") {
    const elemento = document.querySelector(selector);
    let inicio = 0;
    const incremento = Math.ceil(valorFinal / (duracion / 50));

    const contador = setInterval(() => {
        inicio += incremento;
        if (inicio >= valorFinal) {
            inicio = valorFinal;
            clearInterval(contador);
        }
        elemento.textContent = sufijo ? `${inicio}${sufijo}` : inicio;
    }, 50);
}

// Mostrar popup después de 10 segundos
function mostrarPopup() {
    const popup = document.getElementById("popup-promocion");
    setTimeout(() => {
        popup.style.display = "block";
    }, 10000); // 10 segundos
}

// Inicialización total
window.onload = function () {
    startAnalisisCountdown();
    mostrarContenido();
    animarContadores();
    mostrarPopup();
};


// Mostrar recuadro de promoción después de 10 segundos
setTimeout(() => {
    const promo = document.getElementById('promoPopup');
    if (promo) promo.style.display = 'block';
  }, 10000);
  
  function cerrarPromo() {
    const promo = document.getElementById('promoPopup');
    if (promo) promo.style.display = 'none';
  }

  
  // Contador de 27 minutos para el próximo análisis
function iniciarContadorAnalisis() {
    let duracion = 27 * 60; // 27 minutos en segundos
    const elemento = document.getElementById("contador-analisis");
  
    const intervalo = setInterval(() => {
      const minutos = Math.floor(duracion / 60);
      const segundos = duracion % 60;
      elemento.innerText = `${minutos}:${segundos.toString().padStart(2, '0')}`;
  
      if (duracion <= 0) {
        clearInterval(intervalo);
        elemento.innerText = "¡Nuevo análisis disponible! Únete ahora";
      }
  
      duracion--;
    }, 1000);
  }
  
  window.onload = () => {
    iniciarContadores(); // ya lo tienes
    iniciarContadorAnalisis(); // nuevo
  };

  // Ocultar balón después de animación
document.addEventListener("DOMContentLoaded", () => {
    const balon = document.querySelector(".balon-animado");
    if (balon) {
      setTimeout(() => {
        balon.style.display = "none";
      }, 1900); // justo después de que termina la animación
    }
  });

  
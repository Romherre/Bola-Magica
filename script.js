document.getElementById('preguntarBoton').addEventListener('click', function() {
    const respuestas = [
        "Sí",
        "No",
        "Tal vez",
        "De una",
        "Ni lo pienses",
        "Confirmadísimo",
        "Pregúntame más tarde",
        "No puedo decirlo ahora"
    ];

    const respuestaElemento = document.getElementById('respuesta');
    const pregunta = document.getElementById('pregunta').value;
    const otraPregunta = document.getElementById('otraPregunta');
    
    // Oculta el botón de otra pregunta inicialmente
    otraPregunta.style.display = 'none';
    respuestaElemento.style.display = 'none';
    
    // Agrega la clase de animación
    const bola = document.querySelector('.bola');
    bola.style.animation = 'none';
    setTimeout(() => {
        bola.style.animation = 'girar 2s ease-in-out';
    }, 0);

    if (pregunta.trim() === "") {
        respuestaElemento.textContent = "Por favor, hace una pregunta.";
        respuestaElemento.style.display = 'block';
    } else {
        setTimeout(() => {
            const indiceAleatorio = Math.floor(Math.random() * respuestas.length);
            respuestaElemento.textContent = respuestas[indiceAleatorio];
            respuestaElemento.style.display = 'block'; // Muestra la respuesta después de la animación
            
            // Muestra el botón de otra pregunta
            setTimeout(() => {
                otraPregunta.style.display = 'block';
            }, 500);
        }, 2000); // La animación de giro dura 2 segundos
    }
});

document.getElementById('siBoton').addEventListener('click', function() {
    document.getElementById('pregunta').value = '';
    document.getElementById('respuesta').textContent = '...';
    document.getElementById('respuesta').style.display = 'none';
    document.getElementById('otraPregunta').style.display = 'none';
});

document.getElementById('noBoton').addEventListener('click', function() {
    alert("Gracias por usar la Bola Mágica. ¡Hasta la próxima!");
});


🚀 Temporizador de Cuenta Regresiva (Launch Countdown Timer)
Un proyecto simple y funcional que simula la cuenta regresiva para el lanzamiento de un cohete. Utiliza HTML, CSS y JavaScript puro para gestionar la interfaz, los estilos y la lógica del temporizador.

🌟 Características
Cuenta Regresiva de 60 Segundos: Temporizador preciso que decrementa el tiempo cada segundo.

Animación Visual: El número de la cuenta regresiva tiene un efecto visual de "pulso" para atraer la atención.

Manejo de Estados: El botón de inicio se desactiva automáticamente mientras el temporizador está corriendo y muestra el estado "Corriendo...".

Mensaje de Éxito: Al llegar a cero, el contador se reemplaza con un mensaje de "¡DESPEGUE! 🚀" e incrusta un video (asumiendo que existe el archivo Cohete.mp4).

Función de Reinicio: El botón se habilita y cambia a "Reiniciar" al finalizar, permitiendo ejecutar la cuenta regresiva de nuevo.

🛠️ Tecnologías Utilizadas
Este proyecto fue desarrollado utilizando el stack fundamental de desarrollo web:

HTML5: Estructura base del temporizador.

CSS3: Estilos modernos, uso de flexbox para centrado y animaciones (@keyframes) para el efecto pulse y fadeIn.

JavaScript (ES6+): Lógica del temporizador usando setInterval() y manejo de eventos del DOM.

💻 Estructura del Proyecto
El proyecto está organizado en una estructura típica de desarrollo web:

.
├── index.html         # La estructura principal de la página.
├── style.css          # Todos los estilos y animaciones CSS.
├── script.js          # La lógica del temporizador en JavaScript.
└── Cohete.mp4         # (OPCIONAL) Archivo de video para la simulación del despegue.

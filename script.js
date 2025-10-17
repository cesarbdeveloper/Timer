document.addEventListener('DOMContentLoaded', () => {
    const countdownDisplay = document.getElementById('countdown');
    const startButton = document.getElementById('startButton');
    const messageDisplay = document.getElementById('message');

    let timeLeft = 60;
    let timerInterval;

    const startTimer = () => {
        clearInterval(timerInterval); // evita intervalos duplicados

        // Reinicia valores
        timeLeft = 60;
        countdownDisplay.textContent = timeLeft;
        messageDisplay.classList.add('hidden');
        countdownDisplay.classList.remove('hidden');

        // Desactiva el botón mientras corre
        startButton.disabled = true;
        startButton.textContent = "Corriendo...";

        timerInterval = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                showLaunchMessage();
                return;
            }

            timeLeft -= 2;
            countdownDisplay.textContent = timeLeft;
        }, 1000);
    };

    const showLaunchMessage = () => {
        countdownDisplay.classList.add('hidden');
        messageDisplay.classList.remove('hidden');
        messageDisplay.innerHTML = "¡DESPEGUE! 🚀 <br><video src='Cohete.mp4' controls autoPlay></video>";

        // Cambia el botón a reinicio
        startButton.disabled = false;
        startButton.textContent = "Reiniciar";
    };

    startButton.addEventListener('click', startTimer);
});

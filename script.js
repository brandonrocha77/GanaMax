function startCountdown() {
    let countdownElement = document.getElementById("countdown");
    let timeLeft = 24 * 60 * 60;

    function updateCountdown() {
        let hours = Math.floor(timeLeft / 3600);
        let minutes = Math.floor((timeLeft % 3600) / 60);
        let seconds = timeLeft % 60;
        countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
        if (timeLeft > 0) {
            timeLeft--;
            setTimeout(updateCountdown, 1000);
        }
    }

    updateCountdown();
}

window.onload = startCountdown;

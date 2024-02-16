function startTimer(startDate) {
    function updateTimer() {
        var currentDate = new Date();
        var timeDifference = currentDate - startDate;
        var seconds  = Math.floor((timeDifference / 1000) % 60);
        var minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        var hours   = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        var days    = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        document.getElementById("timer").innerHTML = "<span class='h1 font-monospace'>" + days + "</span> dias <span class='h1 font-monospace'>" + hours + "</span> horas <span class='h1 font-monospace'>" + minutes + "</span> minutos <span class='h1 font-monospace'>" + seconds + "</span> segundos ";

    }

    setInterval(updateTimer, 1000);
}
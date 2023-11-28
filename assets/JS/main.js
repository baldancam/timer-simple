function relogio() {

    function getTimeFromSegunds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }


    const relogio = document.querySelector('.relogio');
    /*
    const start = document.querySelector('.start');
    const stop = document.querySelector('.stop');
    const reset = document.querySelector('.reset');
    */
    let segundos = 0;
    let timer;

    function startRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeFromSegunds(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('start')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            startRelogio();
        }

        if (el.classList.contains('stop')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

        if (el.classList.contains('reset')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }



    })


    /*
    start.addEventListener('click', function(event) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        startRelogio();
    });
    
    stop.addEventListener('click', function(event) {
        clearInterval(timer);
        relogio.classList.add('pausado');
    });
    
    reset.addEventListener('click', function(event) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    });
    */

}
relogio();
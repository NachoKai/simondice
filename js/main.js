const $form = document.querySelector("#form")
let secuenciaPc = []
let secuenciaUser = []
let turnoUser = false
let turnos = 0
let ronda = 0

function play1() {
    let sonidoUno = document.querySelector("#audio-uno")
    sonidoUno.play();
}

function play2() {
    let sonidoDos = document.querySelector("#audio-dos")
    sonidoDos.play();
}

function play3() {
    let sonidoTres = document.querySelector("#audio-tres")
    sonidoTres.play();
}

function play4() {
    let sonidoCuatro = document.querySelector("#audio-cuatro")
    sonidoCuatro.play();
}

function playStart() {
    let sonidoStart = document.querySelector("#audio-start")
    sonidoStart.play();
}

function playCorrect() {
    let sonidoCorrect = document.querySelector("#audio-correct")
    sonidoCorrect.play();
}

function playWrong() {
    let sonidoWrong = document.querySelector("#audio-wrong")
    sonidoWrong.play();
}

function actualizarMensaje(mensaje) {
    const $mensaje = document.querySelector('#mensaje');
    $mensaje.value = mensaje;
}

function permiteClickear() {
    if (turnoUser === false) {
        return turnoUser = true
    }
}

function noPermiteClickear() {
    if (turnoUser === true) {
        return turnoUser = false
    }
}

function actualizarNumeroRonda(ronda) {
    document.querySelector('#ronda').textContent = ronda;
}

function turnoPc() {
    noPermiteClickear()
    setTimeout(function () {
        ronda++
        actualizarNumeroRonda(ronda)
        actualizarMensaje('Es el turno de la computadora...')
    }, 900)
    setTimeout(function () {
        eligeRandom()
    }, 900)
}

function eligeRandom() {
    noPermiteClickear()
    let nodoRojo = $form.querySelector("#rojo")
    let nodoVerde = $form.querySelector("#verde")
    let nodoAzul = $form.querySelector("#azul")
    let nodoAmarillo = $form.querySelector("#amarillo")
    let eligeRojo = 1
    let eligeVerde = 2
    let eligeAzul = 3
    let eligeAmarillo = 4
    let numerosRandoms = iteracionDeRandoms()

    for (let i = 0; i < numerosRandoms.length; i++) {
        let tiempo = ((i + 1) * 900)
        const RETRASO_TURNO_JUGADOR = (numerosRandoms.length + 1) * 800;

        if (numerosRandoms[i] === eligeRojo) {
            setTimeout(function () {
                play1()
                nodoRojo.className = ('rojoActivado')
            }, tiempo)
            setTimeout(function () {
                nodoRojo.className = ('boton-rojo')
            }, tiempo + 500)
        }

        if (numerosRandoms[i] === eligeVerde) {
            setTimeout(function () {
                play2()
                nodoVerde.className = ('verdeActivado')
            }, tiempo)
            setTimeout(function () {
                nodoVerde.className = ('boton-verde')
            }, tiempo + 500)
        }

        if (numerosRandoms[i] === eligeAzul) {
            setTimeout(function () {
                play3()
                nodoAzul.className = ('azulActivado')
            }, tiempo)
            setTimeout(function () {
                nodoAzul.className = ('boton-azul')
            }, tiempo + 500)
        }

        if (numerosRandoms[i] === eligeAmarillo) {
            setTimeout(function () {
                play4()
                nodoAmarillo.className = ('amarilloActivado')
            }, tiempo)
            setTimeout(function () {
                nodoAmarillo.className = ('boton-amarillo')
            }, tiempo + 500)
        }

        setTimeout(function () {
            turnoUsuario()
        }, RETRASO_TURNO_JUGADOR)
        turnos = 0
    }
}

function turnoUsuario() {
    permiteClickear()
    actualizarMensaje('Es tu turno!')
}

function iteracionDeRandoms() {
    for (let i = 0; i < 25; i++) {
        secuenciaPc.push(Math.floor(Math.random() * 4) + 1)
        return (secuenciaPc)
    }
}

function asignarPuntajeMaximo() {
    let nodoPMaximo = $form.pmaximo
    let nodoPuntaje = $form.puntaje
    let puntaje = Number(nodoPuntaje.value)
    let pmaximo = Number(nodoPMaximo.value)
    if (puntaje > pmaximo) {
        nodoPMaximo.value = puntaje
    }
}

function gameOver() {
    let nodoRojo = $form.querySelector("#rojo")
    let nodoVerde = $form.querySelector("#verde")
    let nodoAzul = $form.querySelector("#azul")
    let nodoAmarillo = $form.querySelector("#amarillo")

    nodoRojo.className = ('rojoActivado')
    nodoVerde.className = ('verdeActivado')
    nodoAzul.className = ('azulActivado')
    nodoAmarillo.className = ('amarilloActivado')
}

function gameStart() {
    let nodoRojo = $form.querySelector("#rojo")
    let nodoVerde = $form.querySelector("#verde")
    let nodoAzul = $form.querySelector("#azul")
    let nodoAmarillo = $form.querySelector("#amarillo")

    nodoRojo.className = ('boton-rojo')
    nodoVerde.className = ('boton-verde')
    nodoAzul.className = ('boton-azul')
    nodoAmarillo.className = ('boton-amarillo')
}

function turnoJugador(num) {
    permiteClickear()
    let nodoPuntaje = $form.puntaje
    let puntaje = Number(nodoPuntaje.value)

    if (num == secuenciaPc[turnos]) {
        if (turnos === secuenciaPc.length - 1) {
            actualizarMensaje('Correcto!')
            nodoPuntaje.value = puntaje + 1
            playCorrect()
            turnoPc()
        } else {
            turnos++
            return ''
        }
    }

    if (num != secuenciaPc[turnos]) {
        noPermiteClickear()
        actualizarMensaje('Incorrecto! Vuelve a empezar')
        playWrong()
        gameOver()
        asignarPuntajeMaximo()
        return ''
    }
}

$form.start.onclick = function () {
    playStart()
    gameStart()
    noPermiteClickear()
    actualizarNumeroRonda('-');
    puntaje.value = 0
    secuenciaPc = []
    turnos = 0
    ronda = 0
    actualizarMensaje('Suerte!')
    turnoPc()
}

$form.querySelector("#rojo").onclick = function (event) {
    play1()
    if (turnoUser === true) {
        turnoJugador(1)
        event.preventDefault()
    } else {
        return function () {};
    }
}

$form.querySelector("#verde").onclick = function (event) {
    play2()
    if (turnoUser === true) {
        turnoJugador(2)
        event.preventDefault()
    } else {
        return function () {};
    }
}

$form.querySelector("#azul").onclick = function (event) {
    play3()
    if (turnoUser === true) {
        turnoJugador(3)
        event.preventDefault()
    } else {
        return function () {};
    }
}

$form.querySelector("#amarillo").onclick = function (event) {
    play4()
    if (turnoUser === true) {
        turnoJugador(4)
        event.preventDefault()
    } else {
        return function () {};
    }
}
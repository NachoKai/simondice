const $form = document.querySelector("#form")
let secuenciaPc = [],
    secuenciaUser = [],
    turnoUser = false,
    turnos = 0,
    ronda = 0,
    sonidoUno = document.querySelector("#audio-uno"),
    sonidoDos = document.querySelector("#audio-dos"),
    sonidoTres = document.querySelector("#audio-tres"),
    sonidoCuatro = document.querySelector("#audio-cuatro"),
    sonidoStart = document.querySelector("#audio-start"),
    sonidoCorrect = document.querySelector("#audio-correct"),
    sonidoWrong = document.querySelector("#audio-wrong")
const $mensaje = document.querySelector('#mensaje')

const SOUNDS = {
    play1: () => sonidoUno.play(),
    play2: () => sonidoDos.play(),
    play3: () => sonidoTres.play(),
    play4: () => sonidoCuatro.play(),
    playStart: () => sonidoStart.play(),
    playCorrect: () => sonidoCorrect.play(),
    playWrong: () => sonidoWrong.play()
}

actualizarMensaje = (mensaje) => $mensaje.value = mensaje

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

let actualizarNumeroRonda = (ronda) => document.querySelector('#ronda').textContent = ronda

function turnoPc() {
    noPermiteClickear()
    setTimeout(() => {
        ronda++
        actualizarNumeroRonda(ronda)
        actualizarMensaje('Es el turno de la computadora...')
    }, 900)
    setTimeout(() => eligeRandom(), 900)
}

function eligeRandom() {
    noPermiteClickear()
    let nodoRojo = $form.querySelector("#rojo"),
        nodoVerde = $form.querySelector("#verde"),
        nodoAzul = $form.querySelector("#azul"),
        nodoAmarillo = $form.querySelector("#amarillo"),
        eligeRojo = 1,
        eligeVerde = 2,
        eligeAzul = 3,
        eligeAmarillo = 4,
        numerosRandoms = iteracionDeRandoms()

    for (let i = 0; i < numerosRandoms.length; i++) {
        let tiempo = ((i + 1) * 900)
        const RETRASO_TURNO_JUGADOR = (numerosRandoms.length + 1) * 800;

        if (numerosRandoms[i] === eligeRojo) {
            setTimeout(() => {
                SOUNDS.play1()
                nodoRojo.className = ('rojoActivado')
            }, tiempo)
            setTimeout(() => {
                nodoRojo.className = ('boton-rojo')
            }, tiempo + 500)
        }

        if (numerosRandoms[i] === eligeVerde) {
            setTimeout(() => {
                SOUNDS.play1()
                nodoVerde.className = ('verdeActivado')
            }, tiempo)
            setTimeout(() => {
                nodoVerde.className = ('boton-verde')
            }, tiempo + 500)
        }

        if (numerosRandoms[i] === eligeAzul) {
            setTimeout(() => {
                SOUNDS.play3()
                nodoAzul.className = ('azulActivado')
            }, tiempo)
            setTimeout(() => {
                nodoAzul.className = ('boton-azul')
            }, tiempo + 500)
        }

        if (numerosRandoms[i] === eligeAmarillo) {
            setTimeout(() => {
                SOUNDS.play4()
                nodoAmarillo.className = ('amarilloActivado')
            }, tiempo)
            setTimeout(() => {
                nodoAmarillo.className = ('boton-amarillo')
            }, tiempo + 500)
        }

        setTimeout(() => {
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
    let nodoPMaximo = $form.pmaximo,
        nodoPuntaje = $form.puntaje,
        puntaje = Number(nodoPuntaje.value),
        pmaximo = Number(nodoPMaximo.value)
    if (puntaje > pmaximo) {
        nodoPMaximo.value = puntaje
    }
}

function gameOver() {
    let nodoRojo = $form.querySelector("#rojo"),
        nodoVerde = $form.querySelector("#verde"),
        nodoAzul = $form.querySelector("#azul"),
        nodoAmarillo = $form.querySelector("#amarillo")

    nodoRojo.className = ('rojoActivado')
    nodoVerde.className = ('verdeActivado')
    nodoAzul.className = ('azulActivado')
    nodoAmarillo.className = ('amarilloActivado')
}

function gameStart() {
    let nodoRojo = $form.querySelector("#rojo"),
        nodoVerde = $form.querySelector("#verde"),
        nodoAzul = $form.querySelector("#azul"),
        nodoAmarillo = $form.querySelector("#amarillo")

    nodoRojo.className = ('boton-rojo')
    nodoVerde.className = ('boton-verde')
    nodoAzul.className = ('boton-azul')
    nodoAmarillo.className = ('boton-amarillo')
}

function turnoJugador(num) {
    permiteClickear()
    let nodoPuntaje = $form.puntaje,
        puntaje = Number(nodoPuntaje.value)

    if (num == secuenciaPc[turnos]) {
        if (turnos === secuenciaPc.length - 1) {
            actualizarMensaje('Correcto!')
            nodoPuntaje.value = puntaje + 1
            SOUNDS.playCorrect()
            turnoPc()
        } else {
            turnos++
            return ''
        }
    }

    if (num != secuenciaPc[turnos]) {
        noPermiteClickear()
        gameOver()
        SOUNDS.playWrong()
        actualizarMensaje('Vuelve a empezar...')
        failed()
        asignarPuntajeMaximo()
        mostrarBotonStart()
        return ''
    }
}

$form.start.onclick = () => {
    SOUNDS.playStart()
    gameStart()
    noPermiteClickear()
    actualizarNumeroRonda('-');
    puntaje.value = 0
    secuenciaPc = []
    turnos = 0
    ronda = 0
    actualizarMensaje('Suerte!')
    ocultarBotonStart()
    turnoPc()
}

$form.querySelector("#rojo").onclick = (event) => {
    SOUNDS.play1()
    if (turnoUser === true) {
        turnoJugador(1)
        event.preventDefault()
    } else {
        return () => {};
    }
}

$form.querySelector("#verde").onclick = (event) => {
    SOUNDS.play1()
    if (turnoUser === true) {
        turnoJugador(2)
        event.preventDefault()
    } else {
        return () => {};
    }
}

$form.querySelector("#azul").onclick = (event) => {
    SOUNDS.play3()
    if (turnoUser === true) {
        turnoJugador(3)
        event.preventDefault()
    } else {
        return () => {};
    }
}

$form.querySelector("#amarillo").onclick = (event) => {
    SOUNDS.play4()
    if (turnoUser === true) {
        turnoJugador(4)
        event.preventDefault()
    } else {
        return () => {};
    }
}

function failed() {
    Swal.fire({
        icon: 'error',
        title: 'Incorrecto!',
        text: 'Intenta nuevamente, haz click en START.',
        allowOutsideClick: true,
        allowEscapeKey: true,
        showConfirmButton: true,
    })
}

ocultarBotonStart = () => start.className = 'hidden'
mostrarBotonStart = () => start.className = 'button'

document.getElementById("current-year").innerHTML = new Date().getFullYear();

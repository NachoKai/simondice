const $form = document.querySelector("#form")
let puntaje = $form.querySelector("#puntaje")
let pmaximo = $form.querySelector("#pmaximo")
let rojo = $form.querySelector("#rojo")
let verde = $form.querySelector("#verde")
let azul = $form.querySelector("#azul")
let amarillo = $form.querySelector("#amarillo")
let mensaje = $form.querySelector("#mensaje")
let start = $form.querySelector("#start")
let secuenciaPc = []
let turnoUser = false
let turnos = 0

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

function mostrarMensajeSuerte() {
    let nodoMensaje = $form.mensaje
    nodoMensaje.value = 'Suerte!'
}

function turnoPc() {
    noPermiteClickear()
    let nodoMensaje = $form.mensaje
    setTimeout(function () {
        nodoMensaje.value = 'Es el turno de la computadora...'
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
        let tiempo = ((i + 1) * 1000)

        if (numerosRandoms[i] === eligeRojo) {
            setTimeout(function () {
                nodoRojo.className = ('rojoActivado')
            }, tiempo)
            setTimeout(function () {
                nodoRojo.className = ('boton-rojo')
            }, tiempo + 400)
        }

        if (numerosRandoms[i] === eligeVerde) {
            setTimeout(function () {
                nodoVerde.className = ('verdeActivado')
            }, tiempo)
            setTimeout(function () {
                nodoVerde.className = ('boton-verde')
            }, tiempo + 400)
        }

        if (numerosRandoms[i] === eligeAzul) {
            setTimeout(function () {
                nodoAzul.className = ('azulActivado')
            }, tiempo)
            setTimeout(function () {
                nodoAzul.className = ('boton-azul')
            }, tiempo + 400)
        }

        if (numerosRandoms[i] === eligeAmarillo) {
            setTimeout(function () {
                nodoAmarillo.className = ('amarilloActivado')
            }, tiempo)
            setTimeout(function () {
                nodoAmarillo.className = ('boton-amarillo')
            }, tiempo + 400)
        }

        setTimeout(function () {
            mostrarMensajeTurnoUser()
        }, tiempo + 400)
        turnos = 0
    }
}

function iteracionDeRandoms() {
    for (let i = 0; i < 25; i++) {
        secuenciaPc.push(Math.floor(Math.random() * 4) + 1)
        return (secuenciaPc)
    }
}

function mostrarMensajeTurnoUser() {
    permiteClickear()
    let nodoMensaje = $form.mensaje
    setTimeout(function () {
        nodoMensaje.value = 'Es tu turno!'
    }, 400)
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

function gameOver(){
    let nodoRojo = $form.querySelector("#rojo")
    let nodoVerde = $form.querySelector("#verde")
    let nodoAzul = $form.querySelector("#azul")
    let nodoAmarillo = $form.querySelector("#amarillo")

    nodoRojo.className = ('rojoActivado')
    nodoVerde.className = ('verdeActivado')
    nodoAzul.className = ('azulActivado')
    nodoAmarillo.className = ('amarilloActivado')
}

function gameStart(){
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
    let nodoMensaje = $form.mensaje

    if (num == secuenciaPc[turnos]) {
        if (turnos === secuenciaPc.length - 1) {
            nodoMensaje.value = 'Correcto!'
            nodoPuntaje.value = puntaje + 1
            asignarPuntajeMaximo()
            turnoPc()
        } else {
            turnos++
            return ''
        }
    }

    if (num != secuenciaPc[turnos]) {
        noPermiteClickear()
        nodoMensaje.value = 'Incorrecto! Vuelve a empezar'
        gameOver()
        asignarPuntajeMaximo()
        return ''
    }
}

$form.start.onclick = function () {
    gameStart()
    noPermiteClickear()
    puntaje.value = 0
    secuenciaPc = []
    turnos = 0
    mostrarMensajeSuerte()
    turnoPc()
}

$form.querySelector("#rojo").onclick = function (event) {
    if (turnoUser === true) {
        turnoJugador(1)
        event.preventDefault()
    } else {
        return ''
    }
}

$form.querySelector("#verde").onclick = function (event) {
    if (turnoUser === true) {
        turnoJugador(2)
        event.preventDefault()
    } else {
        return ''
    }
}

$form.querySelector("#azul").onclick = function (event) {
    if (turnoUser === true) {
        turnoJugador(3)
        event.preventDefault()
    } else {
        return ''
    }
}

$form.querySelector("#amarillo").onclick = function (event) {
    if (turnoUser === true) {
        turnoJugador(4)
        event.preventDefault()
    } else {
        return ''
    }
}
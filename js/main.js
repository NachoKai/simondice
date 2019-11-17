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
let secuenciaUser = []
let turnoUser = false

function permiteClickear(){
    if (turnoUser === false) {
        return turnoUser = true
    }
}

function noPermiteClickear(){
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
    }, 1000)
    setTimeout(function () {
        eligeRandom()
    }, 800)
}

function eligeRandom() {
    let nodoRojo = $form.querySelector("#rojo")
    let nodoVerde = $form.querySelector("#verde")
    let nodoAzul = $form.querySelector("#azul")
    let nodoAmarillo = $form.querySelector("#amarillo")
    let eligeRojo = 1
    let eligeVerde = 2
    let eligeAzul = 3
    let eligeAmarillo = 4
    let numerosRandoms = iteracionDeRandoms()

    for(let i = 0; i<numerosRandoms.length;i++){
    let j = i+1;
    let tiempo = (j*1000)
    if (numerosRandoms[i] === eligeRojo) {
        setTimeout(function () {
            nodoRojo.className = ('rojoActivado')
        }, tiempo)
        setTimeout(function () {
            nodoRojo.className = ('boton-rojo')
        }, tiempo+500)
    }
    if (numerosRandoms[i] === eligeVerde) {
        setTimeout(function () {
            nodoVerde.className = ('verdeActivado')
        }, tiempo)
        setTimeout(function () {
            nodoVerde.className = ('boton-verde')
        }, tiempo+500)
    }
    if (numerosRandoms[i] === eligeAzul) {
        setTimeout(function () {
            nodoAzul.className = ('azulActivado')
        }, tiempo)
        setTimeout(function () {
            nodoAzul.className = ('boton-azul')
        }, tiempo+500)
    }
    if (numerosRandoms[i] === eligeAmarillo) {
        setTimeout(function () {
            nodoAmarillo.className = ('amarilloActivado')
        }, tiempo)
        setTimeout(function () {
            nodoAmarillo.className = ('boton-amarillo')
        }, tiempo+500)
    }

    setTimeout(function () {
        mostrarMensajeTurnoUser()
    }, tiempo+800)
}
}

function iteracionDeRandoms() {
    for (let i = 0; i < 25; i++) {
        secuenciaPc.push(Math.floor(Math.random() * 4) + 1);
        return (secuenciaPc)
    }
}

function mostrarMensajeTurnoUser() {
    permiteClickear()
    let nodoMensaje = $form.mensaje
    setTimeout(function () {
        nodoMensaje.value = 'Es tu turno!'
    }, 500)
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

function turnoJugador() {
    let nodoPuntaje = $form.puntaje
    let puntaje = Number(nodoPuntaje.value)
    let nodoMensaje = $form.mensaje
    if (secuenciaUser[secuenciaUser.length - 1] === secuenciaPc[secuenciaPc.length - 1]) {
        nodoMensaje.value = 'Correcto!'
        nodoPuntaje.value = puntaje + 1
        asignarPuntajeMaximo()
        turnoPc()
    } else {
        nodoMensaje.value = 'Incorrecto! Vuelve a empezar'
        if (turnoUser === true) {
            asignarPuntajeMaximo()
            return turnoUser = false
        }
    }
}

$form.start.onclick = function () {
    puntaje.value = 0
    secuenciaPc.value = []
    secuenciaUser.value = []
    mostrarMensajeSuerte()
    turnoPc()
}

$form.querySelector("#rojo").onclick = function (event) {
    if (turnoUser === true) {
        secuenciaUser.push(1)
        turnoJugador()
        event.preventDefault()
    } else {
        return ''
    }

}

$form.querySelector("#verde").onclick = function (event) {
    if (turnoUser === true) {
        secuenciaUser.push(2)
        turnoJugador()
        event.preventDefault()
    } else {
        return ''
    }
}

$form.querySelector("#azul").onclick = function (event) {
    if (turnoUser === true) {
        secuenciaUser.push(3)
        turnoJugador()
        event.preventDefault()
    } else {
        return ''
    }
}

$form.querySelector("#amarillo").onclick = function (event) {
    if (turnoUser === true) {
        secuenciaUser.push(4)
        turnoJugador()
        event.preventDefault()
    } else {
        return ''
    }
}
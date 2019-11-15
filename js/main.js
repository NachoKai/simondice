/*
YA *START para correr el programa
YA    >> Mensaje muestra: Suerte! >> (timer)
YA    >> Mensaje muestra: Es el turno de la computadora...
YA    >> una funcion elige un random entre 1 y 4 (asignarle un numero a cada color?) y elige uno de los colores
YA    >> se ilumina el color con un cambio de clase >> (timer para cuando tenga que elegir el siguiente color)
YA    >> Mensaje muestra: Es tu turno...
YA        >> si se presiona el mismo color: 
ERR            >> Mensaje: Correcto! 
ERR            >> Puntaje aumenta +1
            >> Puntaje Maximo aumenta +1 si el numero es menor a Puntaje
            >> Es el turno de la computadora
            >> se activa la funcion random pero ahora elije dos numeros respetando orden del array
            >> se ilumina un color con un cambio de clase (timer), se ilumina el otro
            >> Es tu turno
        >> si se presiona otro color:
            >> mensaje: Incorrecto! Vuelve a empezar
            >> se resetea Puntaje
            >> Puntaje Maximo guarda el numero mas alto de Puntaje, y si es mas alto le cambia el valor y lo guarda

*Desactivar botones a menos que sea el momento de tocarlos (turno usuario)
////////////////////////////////////////*/

const $form = document.querySelector("#form")
let puntaje = $form.querySelector("#puntaje")
let start = $form.querySelector("#start")
let pmaximo = $form.querySelector("#pmaximo")
let rojo = $form.querySelector("#rojo")
let verde = $form.querySelector("#verde")
let azul = $form.querySelector("#azul")
let amarillo = $form.querySelector("#amarillo")
let mensaje = $form.querySelector("#mensaje")
let orden = []
let ordenJugador = []
let turno = document.querySelector("#turno")
let turnoDelJugador = false

$form.start.onclick = function () {
    startGame()
}

function startGame() {
    let nodoPuntaje = $form.puntaje
    nodoPuntaje.value = 0

    mostrarMensajeSuerte()
    setTimeout(function () {
        mostrarMensajeTurnoPc()
    }, 500)
}

function mostrarMensajeSuerte() {
    let nodoMensaje = $form.mensaje
    nodoMensaje.className = ('')
    nodoMensaje.value = 'Suerte!'
}

function mostrarMensajeTurnoPc() {
    let turnoDelJugador = false
    setTimeout(function () {
        eligeRandom()
    }, 800)
    let nodoMensaje = $form.mensaje
    setTimeout(function () {
        nodoMensaje.value = 'Es el turno de la computadora...'
    }, 1000)
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
    let numeroRandom = iteracionDeRandoms()
    let turnoDelJugador = false

    function iteracionDeRandoms() {
        for (let i = 0; i < 25; i++) {
            orden.push(Math.floor(Math.random() * 4) + 1);
            return (orden[i])
        }
    }

    if (numeroRandom === eligeRojo) {
        setTimeout(function () {
            nodoRojo.className = ('rojoActivado')
        }, 1500)
        setTimeout(function () {
            nodoRojo.className = ('boton-rojo')
        }, 2500)
    }
    if (numeroRandom === eligeVerde) {
        setTimeout(function () {
            nodoVerde.className = ('verdeActivado')
        }, 1500)
        setTimeout(function () {
            nodoVerde.className = ('boton-verde')
        }, 2500)
    }
    if (numeroRandom === eligeAzul) {
        setTimeout(function () {
            nodoAzul.className = ('azulActivado')
        }, 1500)
        setTimeout(function () {
            nodoAzul.className = ('boton-azul')
        }, 2500)
    }
    if (numeroRandom === eligeAmarillo) {
        setTimeout(function () {
            nodoAmarillo.className = ('amarilloActivado')
        }, 1500)
        setTimeout(function () {
            nodoAmarillo.className = ('boton-amarillo')
        }, 2500)
    }

    setTimeout(function () {
        mostrarMensajeTuTurno()
    }, 2300)
}

function mostrarMensajeTuTurno() {
    let nodoMensaje = $form.mensaje
    setTimeout(function () {
        nodoMensaje.className = ('')
        nodoMensaje.value = 'Es tu turno!'
    }, 500)
    let turnoJugador = true
}

$form.querySelector("#rojo").onclick = function (event) {
    if (turnoDelJugador = true) {
        ordenJugador.push(1)
    } else {
        return ''
    }
    turnoJugador()
    event.preventDefault()
}

$form.querySelector("#verde").onclick = function (event) {
    if (turnoDelJugador = true) {
        ordenJugador.push(2)
    } else {
        return ''
    }
    turnoJugador()
    event.preventDefault()
}

$form.querySelector("#azul").onclick = function (event) {
    if (turnoDelJugador = true) {
        ordenJugador.push(3)
    } else {
        return ''
    }
    turnoJugador()
    event.preventDefault()
}

$form.querySelector("#amarillo").onclick = function (event) {
    if (turnoDelJugador = true) {
        ordenJugador.push(4)
    } else {
        return ''
    }
    turnoJugador()
    event.preventDefault()
}

function turnoJugador() {
    let nodoPuntaje = $form.puntaje
    let nodoMensaje = $form.mensaje
    if (ordenJugador[ordenJugador.length - 1] === orden[orden.length - 1]) {
        nodoMensaje.value = 'Correcto!'
        nodoPuntaje.value = puntaje + 1
        mostrarMensajeTurnoPc()
    } else {
        nodoMensaje.value = 'Incorrecto! Vuelve a empezar'
    }
}
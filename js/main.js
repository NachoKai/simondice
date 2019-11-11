/*
YA *START para correr el programa
YA    >> Mensaje muestra: Suerte! >> (timer)
YA    >> Mensaje muestra: Es el turno de la computadora...
YA    >> una funcion elige un random entre 1 y 4 (asignarle un numero a cada color?) y elige uno de los colores
YA    >> se ilumina el color con un cambio de clase >> (timer para cuando tenga que elegir el siguiente color)
    >> Mensaje muestra: Es tu turno...
        >> si se presiona el mismo color: 
            >> Mensaje: Correcto! Haz click en CONTINUAR
            >> Puntaje aumenta +1
            >> Puntaje Maximo aumenta +1 si el numero es menor a Puntaje
            >> al clickear CONTINUAR se activa la funcion random pero ahora elije dos numeros (colores)
            >> se ilumina un color con un cambio de clase (timer), se ilumina el otro
        >> si se presiona otro color:
            >> mensaje: Incorrecto! Vuelve a empezar
            >> se resetea Puntaje
            >> Puntaje Maximo guarda el numero mas alto de Puntaje, y si es mas alto le cambia el valor y lo guarda

*REINICIAR borra el Puntaje y comienza a correr el programa de nuevo, no borra Puntaje Maximo. */

/* VARIABLES */
const $form = document.querySelector("#form")

let puntaje = $form.querySelector("#puntaje")
let start = $form.querySelector("#start")
let pmaximo = $form.querySelector("#pmaximo")

let rojo = $form.querySelector("#rojo")
let verde = $form.querySelector("#verde")
let azul = $form.querySelector("#azul")
let amarillo = $form.querySelector("#amarillo")

let reiniciar = $form.querySelector("#reiniciar")
let continuar = $form.querySelector("#continuar")

let mensaje = $form.querySelector("#mensaje")

/* MAIN */

$form.start.onclick = function () {
    mostrarMensajeSuerte()
}

$form.reiniciar.onclick = function () {
    reiniciarJuego()
}

/* FUNCIONES */

function mostrarMensajeSuerte() {
    let nodoMensaje = $form.mensaje
    let nodoPuntaje = $form.puntaje
    nodoMensaje.className = ('')
    nodoMensaje.value = 'Suerte!'
    nodoPuntaje.value = 0
    setTimeout(function () {
        mostrarMensajeTurnoPc()
    }, 1000)
    setTimeout(function () {
        eligeRandom()
    }, 1000)
    setTimeout(function () {
        mostrarMensajeTuTurno()
    }, 2500)
}

function reiniciarJuego() {
    let nodoMensaje = $form.mensaje
    let nodoPuntaje = $form.puntaje
    nodoMensaje.className = ('mensajeLose')
    nodoMensaje.value = 'Juego reiniciado'
    nodoPuntaje.value = 0
}

function mostrarMensajeTurnoPc() {
    let nodoMensaje = $form.mensaje
    setTimeout(function () {
        nodoMensaje.value = 'Es el turno de la computadora...'
    }, 1500)
}

function eligeRandom() {
    let nodoRojo = $form.rojo
    let nodoVerde = $form.verde
    let nodoAzul = $form.azul
    let nodoAmarillo = $form.amarillo
    let eligeRojo = 1
    let eligeVerde = 2
    let eligeAzul = 3
    let eligeAmarillo = 4
    let numeroRandom = Math.floor((Math.random() * 4) + 1);

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
}

function mostrarMensajeTuTurno() {
    let nodoMensaje = $form.mensaje
    setTimeout(function () {
        nodoMensaje.className = ('')
        nodoMensaje.value = 'Es tu turno!'
    }, 1500)
}
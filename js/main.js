/*
*START para correr el programa
    >> Mensaje muestra: Suerte! >> (timer)
    >> Mensaje muestra: Es el turno de la computadora...
    >> una funcion elige un random entre 1 y 4 (asignarle un numero a cada color?) y elige uno de los colores
    >> se ilumina el color con un cambio de clase >> (timer)
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

*REINICIAR borra el Puntaje y comienza a correr el programa de nuevo, no borra Puntaje Maximo.
*/

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

$form.start.onclick = function () {
    mostrarMensajeSuerte()
}

function mostrarMensajeSuerte() {
    let nodoMensaje = $form.mensaje
    let nodoPuntaje = $form.puntaje
    nodoMensaje.className = ('mensajeWin')
    nodoMensaje.value = 'Suerte!'
    nodoPuntaje.value = 0
    setTimeout(function () {
        nodoMensaje.value = 'Es el turno de la computadora...'
    }, 1500)
    setTimeout(function () {
        eligeRandom()
    }, 1500)
}

$form.reiniciar.onclick = function () {
    reiniciarJuego()
}

function reiniciarJuego() {
    let nodoMensaje = $form.mensaje
    let nodoPuntaje = $form.puntaje
    nodoMensaje.className = ('mensajeLose')
    nodoMensaje.value = 'Juego reiniciado'
    nodoPuntaje.value = 0
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
        nodoRojo.className = ('rojoActivado')
        setTimeout(function () {
            nodoRojo.className = ('boton-rojo')
        }, 1000)
    }
    if (numeroRandom === eligeVerde) {
        nodoVerde.className = ('verdeActivado')
        setTimeout(function () {
            nodoVerde.className = ('boton-verde')
        }, 1000)
    }
    if (numeroRandom === eligeAzul) {
        nodoAzul.className = ('azulActivado')
        setTimeout(function () {
            nodoAzul.className = ('boton-azul')
        }, 1000)
    }
    if (numeroRandom === eligeAmarillo) {
        nodoAmarillo.className = ('amarilloActivado')
        setTimeout(function () {
            nodoAmarillo.className = ('boton-amarillo')
        }, 1000)
    }
}

/*
*START para correr el programa
    >>mensaje muestra: suerte! (timer)
    >> mensaje muestra: es el turno de la computadora 
    >> una funcion elige un random entre 1 y 4 (asignarle un numero a cada color?) y elige uno de los colores
    >> se ilumina el color con un cambio de clase (timer)
    >> mensaje muestra: es tu turno
        >> si se presiona el mismo color: 
            >> mensaje: Correcto! haz click en continuar
            >> Puntaje aumenta +1
            >> Puntaje maximo aumenta +1 si el numero es menor a Puntaje
            >>al clickear continuar se activa la funcion random pero ahora elije dos numeros (colores)
            >>se ilumina un color con un cambio de clase (timer), se ilumina el otro
        >> si se presiona otro color 
            >> mensaje: Incorrecto! vuelve a empezar
            >> se resetea Puntaje
            >> Puntaje Maximo guarda el numero de Puntaje

*Puntaje que va aumentando con cada respuesta correcta, se reinicia cuando hay respuesta incorrecta
*Puntaje Maximo guarda el numero maximo alcanzado en Puntaje.
 *Reiniciar borra el Puntaje y comienza a correr el programa de nuevo, no borra Puntaje Maximo.
*Turno de: 
*Continuar corre el turno siguiente si la respuesta es correcta.
 *Mensaje muestra si es turno de la Computadora o el Usuario, si la respuesta es correcta (para poder ejecutar continuar) o si es incorrecta (para ejecutar reiniciar)
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


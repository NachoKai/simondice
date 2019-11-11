
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
        >> si se presiona otro color 
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


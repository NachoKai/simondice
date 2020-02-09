const $form = document.querySelector('#form');
let secuenciaPc = [];
let turnoUser = false;
let turnos = 0;

const sonidoUno = document.querySelector('#audio-uno');
const sonidoDos = document.querySelector('#audio-dos');
const sonidoTres = document.querySelector('#audio-tres');
const sonidoCuatro = document.querySelector('#audio-cuatro');
const sonidoStart = document.querySelector('#audio-start');
const sonidoCorrect = document.querySelector('#audio-correct');
const sonidoWrong = document.querySelector('#audio-wrong');
const $mensaje = document.querySelector('#mensaje');

const SOUNDS = {
  play1: () => sonidoUno.play(),
  play2: () => sonidoDos.play(),
  play3: () => sonidoTres.play(),
  play4: () => sonidoCuatro.play(),
  playStart: () => sonidoStart.play(),
  playCorrect: () => sonidoCorrect.play(),
  playWrong: () => sonidoWrong.play(),
};

function actualizarMensaje(mensaje) {
  ($mensaje.value = mensaje);
}

function permiteClickear() {
  if (turnoUser === false) {
    turnoUser = true;
  }
}

function noPermiteClickear() {
  if (turnoUser === true) {
    turnoUser = false;
  }
}

const actualizarNumeroRonda = (ronda) => (document.querySelector('#ronda').textContent = ronda);

function turnoPc() {
  noPermiteClickear();
  setTimeout(() => {
    ronda++;
    actualizarNumeroRonda(ronda);
    actualizarMensaje('Es el turno de la computadora...');
  }, 900);
  setTimeout(() => eligeRandom(), 900);
}

function eligeRandom() {
  noPermiteClickear();
  const nodoRojo = $form.querySelector('#rojo');
  const nodoVerde = $form.querySelector('#verde');
  const nodoAzul = $form.querySelector('#azul');
  const nodoAmarillo = $form.querySelector('#amarillo');
  const eligeRojo = 1;
  const eligeVerde = 2;
  const eligeAzul = 3;
  const eligeAmarillo = 4;
  const numerosRandoms = iteracionDeRandoms();

  for (let i = 0; i < numerosRandoms.length; i++) {
    const tiempo = (i + 1) * 900;
    const RETRASO_TURNO_JUGADOR = (numerosRandoms.length + 1) * 800;

    if (numerosRandoms[i] === eligeRojo) {
      setTimeout(() => {
        SOUNDS.play1();
        nodoRojo.className = 'rojoActivado';
      }, tiempo);
      setTimeout(() => {
        nodoRojo.className = 'boton-rojo';
      }, tiempo + 500);
    }

    if (numerosRandoms[i] === eligeVerde) {
      setTimeout(() => {
        SOUNDS.play2();
        nodoVerde.className = 'verdeActivado';
      }, tiempo);
      setTimeout(() => {
        nodoVerde.className = 'boton-verde';
      }, tiempo + 500);
    }

    if (numerosRandoms[i] === eligeAzul) {
      setTimeout(() => {
        SOUNDS.play3();
        nodoAzul.className = 'azulActivado';
      }, tiempo);
      setTimeout(() => {
        nodoAzul.className = 'boton-azul';
      }, tiempo + 500);
    }

    if (numerosRandoms[i] === eligeAmarillo) {
      setTimeout(() => {
        SOUNDS.play4();
        nodoAmarillo.className = 'amarilloActivado';
      }, tiempo);
      setTimeout(() => {
        nodoAmarillo.className = 'boton-amarillo';
      }, tiempo + 500);
    }

    setTimeout(() => {
      turnoUsuario();
    }, RETRASO_TURNO_JUGADOR);
    turnos = 0;
  }
}

function turnoUsuario() {
  permiteClickear();
  actualizarMensaje('Es tu turno!');
}

function iteracionDeRandoms() {
  for (let i = 0; i < 25; i++) {
    secuenciaPc.push(Math.floor(Math.random() * 4) + 1);
    return secuenciaPc;
  }
}

function asignarPuntajeMaximo() {
  const nodoPMaximo = $form.pmaximo;
  const nodoPuntaje = $form.puntaje;
  const puntaje = Number(nodoPuntaje.value);
  const pmaximo = Number(nodoPMaximo.value);
  if (puntaje > pmaximo) {
    nodoPMaximo.value = puntaje;
  }
}

function gameOver() {
  const nodoRojo = $form.querySelector('#rojo');
  const nodoVerde = $form.querySelector('#verde');
  const nodoAzul = $form.querySelector('#azul');
  const nodoAmarillo = $form.querySelector('#amarillo');

  nodoRojo.className = 'rojoActivado';
  nodoVerde.className = 'verdeActivado';
  nodoAzul.className = 'azulActivado';
  nodoAmarillo.className = 'amarilloActivado';
}

function gameStart() {
  const nodoRojo = $form.querySelector('#rojo');
  const nodoVerde = $form.querySelector('#verde');
  const nodoAzul = $form.querySelector('#azul');
  const nodoAmarillo = $form.querySelector('#amarillo');

  nodoRojo.className = 'boton-rojo';
  nodoVerde.className = 'boton-verde';
  nodoAzul.className = 'boton-azul';
  nodoAmarillo.className = 'boton-amarillo';
}

function turnoJugador(num) {
  permiteClickear();
  const nodoPuntaje = $form.puntaje;
  const puntaje = Number(nodoPuntaje.value);

  if (num === secuenciaPc[turnos]) {
    if (turnos === secuenciaPc.length - 1) {
      actualizarMensaje('Correcto!');
      nodoPuntaje.value = puntaje + 1;
      SOUNDS.playCorrect();
      turnoPc();
    } else {
      turnos++;
      return '';
    }
  }

  if (num != secuenciaPc[turnos]) {
    noPermiteClickear();
    gameOver();
    SOUNDS.playWrong();
    actualizarMensaje('Vuelve a empezar...');
    failed();
    asignarPuntajeMaximo();
    mostrarBotonStart();
    return '';
  }
}

$form.start.onclick = () => {
  SOUNDS.playStart();
  gameStart();
  noPermiteClickear();
  actualizarNumeroRonda('-');
  puntaje.value = 0;
  secuenciaPc = [];
  turnos = 0;
  ronda = 0;
  actualizarMensaje('Suerte!');
  ocultarBotonStart();
  turnoPc();
};

$form.querySelector('#rojo').onclick = (event) => {
  SOUNDS.play1();
  if (turnoUser === true) {
    turnoJugador(1);
    event.preventDefault();
  } else {
    return () => {};
  }
};

$form.querySelector('#verde').onclick = (event) => {
  SOUNDS.play2();
  if (turnoUser === true) {
    turnoJugador(2);
    event.preventDefault();
  } else {
    return () => {};
  }
};

$form.querySelector('#azul').onclick = (event) => {
  SOUNDS.play3();
  if (turnoUser === true) {
    turnoJugador(3);
    event.preventDefault();
  } else {
    return () => {};
  }
};

$form.querySelector('#amarillo').onclick = (event) => {
  SOUNDS.play4();
  if (turnoUser === true) {
    turnoJugador(4);
    event.preventDefault();
  } else {
    return () => {};
  }
};

function failed() {
  Swal.fire({
    icon: 'error',
    title: 'Incorrecto!',
    text: 'Intenta nuevamente, haz click en START.',
    allowOutsideClick: true,
    allowEscapeKey: true,
    showConfirmButton: true,
  });
}

ocultarBotonStart = () => {
  (start.className = 'hidden');
};
mostrarBotonStart = () => {
  (start.className = 'button');
};

document.getElementById('current-year').innerHTML = new Date().getFullYear();

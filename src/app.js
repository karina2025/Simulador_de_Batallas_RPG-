// src/app.js

const Personaje = require('./models/Personaje');
const Guerrero = require('./models/Guerrero');
const Mago = require('./models/Mago');
const Arquero = require('./models/Arquero');
const NotificadorConsola = require('./services/NotificadorConsola'); // Importa el notificador
const chalk = require('chalk'); // Importa chalk si no lo tenías para cosas fuera del notificador

// Instancia del notificador
const notificador = new NotificadorConsola();

notificador.notificar(chalk.bold.inverse('--- Simulador de Batallas RPG (Paso 3: Notificador y Interfaces) ---'), 'info');

// --- Creación de Personajes de Diferentes Clases ---
// Usaremos el notificador para algunos mensajes
const arthur = new Guerrero('Arthur');
notificador.exito(`¡${arthur.nombre} ha sido creado!`);
const merlin = new Mago('Merlin');
notificador.exito(`¡${merlin.nombre} ha sido creado!`);
const legolas = new Arquero('Legolas');
notificador.exito(`¡${legolas.nombre} ha sido creado!`);
const goblin = new Personaje('Goblin Malvado', 60, 18, 7);
notificador.notificar(`Un ${goblin.nombre} salvaje ha aparecido.`, 'info');


notificador.notificar('\n--- Personajes Creados ---', 'info');
console.log(chalk.cyan(arthur.toString()));
console.log(chalk.magenta(merlin.toString()));
console.log(chalk.green(legolas.toString()));
console.log(chalk.red(goblin.toString()));

notificador.notificar('\n--- Demostración de Batalla (Notificador en acción) ---', 'info');

// Demostración de ataque polimórfico (todos usan .atacar())
notificador.notificar(chalk.underline('\nTurno 1: Arthur ataca a Goblin'), 'info');
arthur.atacar(goblin); // Llama al atacar() del Guerrero
if (!goblin.estaVivo()) { // Si el goblin es derrotado
    notificador.success(`${goblin.nombre} ha sido derrotado.`);
}

if (goblin.estaVivo()) {
    notificador.notificar(chalk.underline('\nTurno 2: Merlin ataca a Goblin'), 'info');
    merlin.atacar(goblin); // Llama al atacar() del Mago
    if (!goblin.estaVivo()) {
        notificador.success(`${goblin.nombre} ha sido derrotado.`);
    }
}
if (goblin.estaVivo()) {
    notificador.notificar(chalk.underline('\nTurno 3: Legolas ataca a Goblin'), 'info');
    legolas.atacar(goblin); // Llama al atacar() del Arquero (con chance de crítico)
    if (!goblin.estaVivo()) {
        notificador.success(`${goblin.nombre} ha sido derrotado.`);
    }
} else {
    notificador.warning('El goblin ya estaba derrotado, Legolas no ataca.');
}


notificador.notificar('\n--- Estado después de ataques ---', 'info');
console.log(chalk.cyan(arthur.toString()));
console.log(chalk.magenta(merlin.toString()));
console.log(chalk.green(legolas.toString()));
console.log(chalk.red(goblin.toString()));

// Demostración de habilidades especiales
notificador.notificar('\n--- Demostración de Habilidades Especiales ---', 'info');
if (goblin.estaVivo()) {
    arthur.golpePoderoso(goblin); // Habilidad de Guerrero
} else {
    notificador.warning('No se puede usar habilidad, el objetivo está derrotado.');
}

if (goblin.estaVivo()) {
    merlin.bolaDeFuego(goblin); // Habilidad de Mago
} else {
    notificador.warning('No se puede usar habilidad, el objetivo está derrotado.');
}

if (goblin.estaVivo()) {
    legolas.disparoPreciso(goblin); // Habilidad de Arquero
} else {
    notificador.warning('No se puede usar habilidad, el objetivo está derrotado.');
}

notificador.notificar('\n--- Estado después de habilidades ---', 'info');
console.log(chalk.cyan(arthur.toString()));
console.log(chalk.magenta(merlin.toString()));
console.log(chalk.green(legolas.toString()));
console.log(chalk.red(goblin.toString()));


// Demostración de Subida de Nivel (afecta diferentes estadísticas por clase)
notificador.notificar('\n--- Demostración de Subida de Nivel (Polimorfismo) ---', 'info');
arthur.ganarExperiencia(150); // Debería subir de nivel
notificador.exito(`¡${arthur.nombre} ha subido de nivel!`);
merlin.ganarExperiencia(150);
notificador.exito(`¡${merlin.nombre} ha subido de nivel!`);
legolas.ganarExperiencia(150);
notificador.exito(`¡${legolas.nombre} ha subido de nivel!`);

notificador.notificar('\n--- Estado después de XP y Nivel ---', 'info');
console.log(chalk.cyan(arthur.toString()));
console.log(chalk.magenta(merlin.toString()));
console.log(chalk.green(legolas.toString()));

notificador.notificar(chalk.bold.inverse('\n--- Fin de la Demostración del Paso 3 ---'), 'info');
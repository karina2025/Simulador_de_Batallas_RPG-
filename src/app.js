// src/app.js

const Personaje = require('./models/Personaje'); // Clase base
const Guerrero = require('./models/Guerrero');   // Clase Guerrero
const Mago = require('./models/Mago');         // Clase Mago
const Arquero = require('./models/Arquero');   // Clase Arquero
const chalk = require('chalk'); // Importa chalk para añadir color

console.log(chalk.bold.green('--- Simulador de Batallas RPG (Paso 2) ---'));

// --- Creación de Personajes de Diferentes Clases ---
const arthur = new Guerrero('Arthur');
const merlin = new Mago('Merlin');
const legolas = new Arquero('Legolas');
const goblin = new Personaje('Goblin Malvado', 60, 18, 7); // Un enemigo genérico

console.log('\n' + chalk.bold.blue('--- Personajes Creados ---'));
console.log(chalk.cyan(arthur.toString()));
console.log(chalk.magenta(merlin.toString()));
console.log(chalk.green(legolas.toString()));
console.log(chalk.red(goblin.toString()));

console.log('\n' + chalk.bold.blue('--- Demostración de Batalla entre Clases ---'));

// Demostración de ataque polimórfico (todos usan .atacar())
console.log(chalk.underline('\nTurno 1: Arthur ataca a Goblin'));
arthur.atacar(goblin); // Llama al atacar() del Guerrero
if (goblin.estaVivo()) {
    console.log(chalk.underline('\nTurno 2: Merlin ataca a Goblin'));
    merlin.atacar(goblin); // Llama al atacar() del Mago
}
if (goblin.estaVivo()) {
    console.log(chalk.underline('\nTurno 3: Legolas ataca a Goblin'));
    legolas.atacar(goblin); // Llama al atacar() del Arquero (con chance de crítico)
}

console.log('\n' + chalk.bold.blue('--- Estado después de ataques ---'));
console.log(chalk.cyan(arthur.toString()));
console.log(chalk.magenta(merlin.toString()));
console.log(chalk.green(legolas.toString()));
console.log(chalk.red(goblin.toString()));

// Demostración de habilidades especiales
console.log('\n' + chalk.bold.blue('--- Demostración de Habilidades Especiales ---'));
if (goblin.estaVivo()) {
    arthur.golpePoderoso(goblin); // Habilidad de Guerrero
}
if (goblin.estaVivo() && merlin.mana >= 15) { // Solo si el mago tiene maná
    merlin.bolaDeFuego(goblin); // Habilidad de Mago
}
if (goblin.estaVivo()) {
    legolas.disparoPreciso(goblin); // Habilidad de Arquero
}

console.log('\n' + chalk.bold.blue('--- Estado después de habilidades ---'));
console.log(chalk.cyan(arthur.toString()));
console.log(chalk.magenta(merlin.toString()));
console.log(chalk.green(legolas.toString()));
console.log(chalk.red(goblin.toString()));

// Demostración de Subida de Nivel (afecta diferentes estadísticas por clase)
console.log('\n' + chalk.bold.blue('--- Demostración de Subida de Nivel (Polimorfismo) ---'));
arthur.ganarExperiencia(150); // Debería subir de nivel
merlin.ganarExperiencia(150);
legolas.ganarExperiencia(150);

console.log('\n' + chalk.bold.blue('--- Estado después de XP y Nivel ---'));
console.log(chalk.cyan(arthur.toString()));
console.log(chalk.magenta(merlin.toString()));
console.log(chalk.green(legolas.toString()));

console.log(chalk.bold.green('\n--- Fin de la Demostración del Paso 2 ---'));
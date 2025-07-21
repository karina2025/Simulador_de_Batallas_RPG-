// src/models/Arquero.js
const Personaje = require('./Personaje'); // Importa la clase base Personaje
const chalk = require('chalk'); 

/**
 * Clase Arquero, hereda de Personaje.
 * Especializado en ataques a distancia y precisión.
 * Demuestra Herencia, Polimorfismo (sobrescribiendo subirNivel y atacar), y OCP.
 */
class Arquero extends Personaje {
    // Atributo específico del Arquero: probabilidad de golpe crítico
    #probabilidadCritico;

    /**
     * @param {string} nombre - El nombre del Arquero.
     */
    constructor(nombre) {
        // Llama al constructor de la clase base (Personaje)
        // Salud, Ataque, Defensa iniciales para un Arquero
        super(nombre, 90, 22, 10);
        this.#probabilidadCritico = 0.2; // 20% de probabilidad de golpe crítico
        console.log(`Arquero ${nombre} creado. ¡Ojo de halcón!`);
    }

    // --- Getters específicos ---
    get probabilidadCritico() {
        return this.#probabilidadCritico;
    }

    // --- Métodos de comportamiento específicos ---

    /**
     * Sobrescribe el método atacar de Personaje para añadir lógica de golpe crítico.
     * Demuestra Polimorfismo.
     * @param {Personaje} objetivo - El personaje objetivo del ataque.
     */
    atacar(objetivo) {
        console.log(`${this.nombre} dispara una flecha a ${objetivo.nombre}!`);
        let danoBase = this.ataque;
        let esCritico = false;

        // Calcula si es un golpe crítico
        if (Math.random() < this.#probabilidadCritico) {
            danoBase *= 1.5; // 50% de daño adicional por crítico
            esCritico = true;
            console.log(chalk.yellow(`¡Golpe CRÍTICO de ${this.nombre}!`));
        }

        // Calcula el daño final considerando la defensa del objetivo
        const danoFinal = Math.max(0, danoBase - objetivo.defensa);
        console.log(`${this.nombre} ataca a ${objetivo.nombre}. Daño base: ${danoBase.toFixed(0)}, Defensa de ${objetivo.nombre}: ${objetivo.defensa}. Daño infligido: ${danoFinal.toFixed(0)}`);
        objetivo.recibirDano(danoFinal);
    }

    /**
     * Habilidad especial del Arquero: Disparo Preciso.
     * Mayor daño y mayor probabilidad de crítico.
     * @param {Personaje} objetivo - El personaje objetivo.
     */
    disparoPreciso(objetivo) {
        if (!objetivo.estaVivo()) {
            console.log(`${objetivo.nombre} ya está derrotado.`);
            return;
        }
        console.log(`${this.nombre} realiza un ¡DISPARO PRECISO! contra ${objetivo.nombre}.`);
        let danoBase = this.ataque * 1.2; // 20% más de daño base
        let esCritico = false;

        // Mayor probabilidad de crítico para esta habilidad
        if (Math.random() < (this.#probabilidadCritico + 0.2)) { // +20% de probabilidad
            danoBase *= 1.8; // Más daño en crítico
            esCritico = true;
            console.log(chalk.yellow(`¡Disparo Preciso CRÍTICO de ${this.nombre}!`));
        }

        const danoFinal = Math.max(0, danoBase - objetivo.defensa);
        objetivo.recibirDano(danoFinal);
    }

    /**
     * Sobrescribe el método subirNivel de Personaje.
     * Los Arqueros ganan más ataque y probabilidad de crítico al subir de nivel.
     * Demuestra Polimorfismo y personalización de la herencia.
     */
    subirNivel() {
        super.subirNivel(); // Llama al método de la clase base
        // Mejoras específicas del Arquero
        this.ataque += 7; // Más ataque
        this.#probabilidadCritico = Math.min(0.5, this.#probabilidadCritico + 0.02); // Aumenta, máximo 50%
        console.log(`¡${this.nombre} como Arquero, siente su puntería afinar!`);
    }

    /**
     * Retorna una representación en cadena de los atributos del Arquero.
     * @returns {string}
     */
    toString() {
        return `${super.toString()}, Probabilidad Crítico: ${(this.#probabilidadCritico * 100).toFixed(0)}%`;
    }
}

module.exports = Arquero;   
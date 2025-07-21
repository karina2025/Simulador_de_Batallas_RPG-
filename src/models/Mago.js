// src/models/Mago.js
const Personaje = require('./Personaje'); // Importa la clase base Personaje

/**
 * Clase Mago, hereda de Personaje.
 * Especializado en daño mágico y uso de maná.
 * Demuestra Herencia, Polimorfismo (sobrescribiendo subirNivel y atacar), y OCP.
 */
class Mago extends Personaje {
    #mana;
    #manaMaximo;
    #poderMagico; // Atributo específico para daño mágico

    /**
     * @param {string} nombre - El nombre del Mago.
     */
    constructor(nombre) {
        // Llama al constructor de la clase base (Personaje)
        // Salud, Ataque (físico bajo), Defensa iniciales para un Mago
        super(nombre, 80, 10, 8); // Magos tienen menos salud y defensa física
        this.#manaMaximo = 50; // Maná inicial
        this.#mana = 50;
        this.#poderMagico = 30; // Poder mágico inicial
        console.log(`Mago ${nombre} creado. ¡Con el poder de la magia!`);
    }

    // --- Getters específicos ---
    get mana() {
        return this.#mana;
    }

    get manaMaximo() {
        return this.#manaMaximo;
    }

    get poderMagico() {
        return this.#poderMagico;
    }

    // --- Métodos de comportamiento específicos ---

    /**
     * Sobrescribe el método atacar de Personaje para que el ataque básico sea mágico.
     * Demuestra Polimorfismo.
     * @param {Personaje} objetivo - El personaje objetivo del ataque.
     */
    atacar(objetivo) {
        console.log(`${this.nombre} lanza un orbe de energía mágica contra ${objetivo.nombre}!`);
        // El ataque básico del mago también puede ser considerado mágico
        const dano = this.calcularDanoMagico(objetivo);
        objetivo.recibirDano(dano);
    }

    /**
     * Calcula el daño mágico infligido a un objetivo.
     * Utiliza poderMagico en lugar de ataque físico.
     * @param {Personaje} objetivo - El personaje al que se va a atacar.
     * @returns {number} - El daño mágico calculado.
     */
    calcularDanoMagico(objetivo) {
        let danoBaseMagico = this.#poderMagico;
        // Podríamos tener una "resistencia mágica" en el objetivo, pero por ahora solo defensa
        let danoFinal = Math.max(0, danoBaseMagico - (objetivo.defensa / 2)); // Magia ignora parte de la defensa
        console.log(`${this.nombre} conjura. Poder mágico: ${danoBaseMagico}, Defensa de ${objetivo.nombre}: ${objetivo.defensa}. Daño mágico infligido: ${danoFinal}`);
        return danoFinal;
    }

    /**
     * Habilidad especial del Mago: Bola de Fuego.
     * Requiere maná para ser utilizada.
     * @param {Personaje} objetivo - El personaje objetivo.
     */
    bolaDeFuego(objetivo) {
        const costeMana = 15;
        if (!objetivo.estaVivo()) {
            console.log(`${objetivo.nombre} ya está derrotado.`);
            return;
        }
        if (this.#mana >= costeMana) {
            console.log(`${this.nombre} conjura una ¡BOLA DE FUEGO! contra ${objetivo.nombre}.`);
            this.#mana -= costeMana;
            const danoAdicional = 20 + Math.floor(this.nivel * 3);
            const danoTotal = this.calcularDanoMagico(objetivo) + danoAdicional;
            objetivo.recibirDano(danoTotal);
            console.log(`Maná restante de ${this.nombre}: ${this.#mana}/${this.#manaMaximo}`);
        } else {
            console.log(`${this.nombre} no tiene suficiente maná para Bola de Fuego. Requiere ${costeMana}, tiene ${this.#mana}.`);
        }
    }

    /**
     * Recupera maná del Mago.
     * @param {number} cantidad - Cantidad de maná a recuperar.
     */
    recuperarMana(cantidad) {
        this.#mana += cantidad;
        if (this.#mana > this.#manaMaximo) {
            this.#mana = this.#manaMaximo;
        }
        console.log(`${this.nombre} recupera ${cantidad} de maná. Maná actual: ${this.#mana}/${this.#manaMaximo}`);
    }

    /**
     * Sobrescribe el método subirNivel de Personaje.
     * Los Magos ganan más maná y poder mágico al subir de nivel.
     * Demuestra Polimorfismo y personalización de la herencia.
     */
    subirNivel() {
        super.subirNivel(); // Llama al método de la clase base
        // Mejoras específicas del Mago
        this.#manaMaximo += 15;
        this.#mana = this.#manaMaximo; // Restaura maná al subir de nivel
        this.#poderMagico += 7;
        console.log(`¡${this.nombre} como Mago, siente su poder arcano crecer!`);
    }

    /**
     * Retorna una representación en cadena de los atributos del Mago.
     * @returns {string}
     */
    toString() {
        return `${super.toString()}, Maná: ${this.#mana}/${this.#manaMaximo}, Poder Mágico: ${this.#poderMagico}`;
    }
}

module.exports = Mago;
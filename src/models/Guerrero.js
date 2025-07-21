// src/models/Guerrero.js
const Personaje = require('./Personaje'); // Importa la clase base Personaje

/**
 * Clase Guerrero, hereda de Personaje.
 * Especializado en combate cuerpo a cuerpo y resistencia.
 * Demuestra Herencia, Polimorfismo (sobrescribiendo subirNivel y atacar), y OCP.
 */
class Guerrero extends Personaje {
    // Atributo específico del Guerrero: un porcentaje de bonificación de defensa
    #bonificacionDefensa;

    /**
     * @param {string} nombre - El nombre del Guerrero.
     */
    constructor(nombre) {
        // Llama al constructor de la clase base (Personaje)
        // Salud, Ataque, Defensa iniciales para un Guerrero
        super(nombre, 120, 25, 15);
        this.#bonificacionDefensa = 0.1; // 10% de defensa adicional
        console.log(`Guerrero ${nombre} creado. ¡Listo para la batalla!`);
    }

    // --- Getters específicos ---
    get bonificacionDefensa() {
        return this.#bonificacionDefensa;
    }

    // --- Métodos de comportamiento específicos ---

    /**
     * Sobrescribe el método atacar de Personaje para añadir una habilidad especial
     * o un mensaje específico del Guerrero.
     * Demuestra Polimorfismo.
     * @param {Personaje} objetivo - El personaje objetivo del ataque.
     */
    atacar(objetivo) {
        console.log(`${this.nombre} se lanza con su espada contra ${objetivo.nombre}!`);
        // Llama al método atacar de la clase base para el cálculo de daño estándar
        super.atacar(objetivo);
        // Podríamos añadir una probabilidad de aturdir, por ejemplo.
    }

    /**
     * Habilidad especial del Guerrero: Golpe Poderoso.
     * Inflige daño adicional una vez por turno o con un cooldown.
     * Por simplicidad, solo inflige más daño aquí.
     * @param {Personaje} objetivo - El personaje objetivo.
     */
    golpePoderoso(objetivo) {
        if (!objetivo.estaVivo()) {
            console.log(`${objetivo.nombre} ya está derrotado.`);
            return;
        }
        console.log(`${this.nombre} prepara un ¡GOLPE PODEROSO! contra ${objetivo.nombre}.`);
        const danoAdicional = 10 + Math.floor(this.nivel * 2); // Daño extra basado en nivel
        const danoTotal = this.calcularDano(objetivo) + danoAdicional;
        objetivo.recibirDano(danoTotal);
    }

    /**
     * Sobrescribe el método subirNivel de Personaje.
     * Los Guerreros ganan más salud y defensa al subir de nivel.
     * Demuestra Polimorfismo y personalización de la herencia.
     */
    subirNivel() {
        super.subirNivel(); // Llama al método de la clase base para las mejoras generales
        // Mejoras específicas del Guerrero
        this.saludMaxima += 30; // Más salud
        this.salud = this.saludMaxima;
        this.defensa += 5; // Más defensa
        this.#bonificacionDefensa += 0.01; // Ligera mejora en bonificación
        console.log(`¡${this.nombre} como Guerrero, siente su fuerza crecer!`);
    }

    /**
     * Retorna una representación en cadena de los atributos del Guerrero.
     * @returns {string}
     */
    toString() {
        // Incluye la información de la clase base y añade la específica del Guerrero
        return `${super.toString()}, Bonificación Defensa: ${(this.#bonificacionDefensa * 100).toFixed(0)}%`;
    }
}

module.exports = Guerrero;
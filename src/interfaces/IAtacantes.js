// src/interfaces/IAtacante.js

/**
 * @interface IAtacante
 * Define el contrato para cualquier objeto que sea capaz de realizar un ataque.
 * Es una abstracción para el Principio de Inversión de Dependencias (DIP) y Segregación de Interfaces (ISP).
 *
 * Las clases que "implementen" esta interfaz deberían tener al menos los siguientes métodos:
 * - atacar(objetivo: Personaje): void
 * - calcularDano(objetivo: Personaje): number
 * - get nombre(): string (para identificación)
 */
class IAtacante {
    // En JavaScript, esto es una clase conceptual para representar la interfaz.
    // No se instancia directamente.
    // Los métodos aquí son "abstractos" en el sentido de que deben ser implementados
    // por cualquier clase que se considere un IAtacante.

    /**
     * Realiza una acción de ataque contra un objetivo.
     * @param {Personaje} objetivo - El personaje objetivo del ataque.
     * @abstract
     */
    atacar(objetivo) {
        throw new Error('El método atacar() debe ser implementado por la clase que implemente IAtacante.');
    }

    /**
     * Calcula el daño que infligiría el atacante a un objetivo.
     * @param {Personaje} objetivo - El personaje objetivo.
     * @returns {number} - El valor del daño calculado.
     * @abstract
     */
    calcularDano(objetivo) {
        throw new Error('El método calcularDano() debe ser implementado por la clase que implemente IAtacante.');
    }

    /**
     * @returns {string} El nombre del atacante.
     * @abstract
     */
    get nombre() {
        throw new Error('La propiedad nombre debe ser implementada por la clase que implemente IAtacante.');
    }
}

// Exportamos la clase para referencia, aunque no se "implemente" directamente.
// Es más una convención de documentación y para herramientas de análisis estático.
module.exports = IAtacante;
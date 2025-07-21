// src/interfaces/ICurable.js

/**
 * @interface ICurable
 * Define el contrato para cualquier objeto que sea capaz de ser curado.
 * Sirve para el Principio de Segregación de Interfaces (ISP):
 * solo las clases que necesitan ser curadas implementarán o cumplirán con esta "interfaz".
 *
 * Las clases que "implementen" esta interfaz deberían tener al menos los siguientes métodos:
 * - curar(cantidad: number): void
 * - get salud(): number
 * - get saludMaxima(): number
 */
class ICurable {
    /**
     * Aumenta la salud del objeto por la cantidad especificada.
     * @param {number} cantidad - La cantidad de salud a recuperar.
     * @abstract
     */
    curar(cantidad) {
        throw new Error('El método curar() debe ser implementado por la clase que implemente ICurable.');
    }

    /**
     * @returns {number} La salud actual del objeto.
     * @abstract
     */
    get salud() {
        throw new Error('La propiedad salud debe ser implementada por la clase que implemente ICurable.');
    }

    /**
     * @returns {number} La salud máxima del objeto.
     * @abstract
     */
    get saludMaxima() {
        throw new Error('La propiedad saludMaxima debe ser implementada por la clase que implemente ICurable.');
    }
}

module.exports = ICurable;
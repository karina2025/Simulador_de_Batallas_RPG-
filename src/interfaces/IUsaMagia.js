// src/interfaces/IUsaMagia.js

/**
 * @interface IUsaMagia
 * Define el contrato para cualquier objeto que sea capaz de utilizar magia (tener maná y usarlo).
 * Aplica el Principio de Segregación de Interfaces (ISP):
 * solo los magos o clases con maná implementarán esta "interfaz", no forzando a guerreros o arqueros.
 *
 * Las clases que "implementen" esta interfaz deberían tener al menos los siguientes métodos/propiedades:
 * - get mana(): number
 * - get manaMaximo(): number
 * - gastarMana(cantidad: number): boolean
 * - recuperarMana(cantidad: number): void
 */
class IUsaMagia {
    /**
     * @returns {number} El maná actual.
     * @abstract
     */
    get mana() {
        throw new Error('La propiedad mana debe ser implementada por la clase que implemente IUsaMagia.');
    }

    /**
     * @returns {number} El maná máximo.
     * @abstract
     */
    get manaMaximo() {
        throw new Error('La propiedad manaMaximo debe ser implementada por la clase que implemente IUsaMagia.');
    }

    /**
     * Gasta una cantidad de maná.
     * @param {number} cantidad - Cantidad de maná a gastar.
     * @returns {boolean} True si se pudo gastar el maná, false si no hay suficiente.
     * @abstract
     */
    gastarMana(cantidad) {
        throw new Error('El método gastarMana() debe ser implementado por la clase que implemente IUsaMagia.');
    }

    /**
     * Recupera una cantidad de maná.
     * @param {number} cantidad - Cantidad de maná a recuperar.
     * @abstract
     */
    recuperarMana(cantidad) {
        throw new Error('El método recuperarMana() debe ser implementado por la clase que implemente IUsaMagia.');
    }
}

module.exports = IUsaMagia;
// src/interfaces/INotificador.js

/**
 * @interface INotificador
 * Define el contrato para cualquier servicio que sea capaz de enviar notificaciones
 * o mensajes a través de algún medio (consola, archivo, log, etc.).
 * Es clave para el Principio de Inversión de Dependencias (DIP).
 *
 * Las clases que "implementen" esta interfaz deberían tener al menos los siguientes métodos:
 * - notificar(mensaje: string, tipo: string = 'info'): void
 * - error(mensaje: string): void
 * - advertencia(mensaje: string): void
 * - exito(mensaje: string): void
 */
class INotificador {
    /**
     * Envía un mensaje de notificación general.
     * @param {string} mensaje - El mensaje a notificar.
     * @param {string} [tipo='info'] - Tipo de mensaje (info, error, warning, success).
     * @abstract
     */
    notificar(mensaje, tipo = 'info') {
        throw new Error('El método notificar() debe ser implementado por la clase que implemente INotificador.');
    }

    /**
     * Envía un mensaje de error.
     * @param {string} mensaje - El mensaje de error.
     * @abstract
     */
    error(mensaje) {
        throw new Error('El método error() debe ser implementado por la clase que implemente INotificador.');
    }

    /**
     * Envía un mensaje de advertencia.
     * @param {string} mensaje - El mensaje de advertencia.
     * @abstract
     */
    advertencia(mensaje) {
        throw new Error('El método advertencia() debe ser implementado por la clase que implemente INotificador.');
    }

    /**
     * Envía un mensaje de éxito.
     * @param {string} mensaje - El mensaje de éxito.
     * @abstract
     */
    exito(mensaje) {
        throw new Error('El método exito() debe ser implementado por la clase que implemente INotificador.');
    }
}

module.exports = INotificador;
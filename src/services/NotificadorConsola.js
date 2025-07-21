// src/services/NotificadorConsola.js
const chalk = require('chalk');
const INotificador = require('../interfaces/INotificador'); // Importa la "interfaz"

/**
 * Implementación concreta de la interfaz INotificador para mostrar mensajes en la consola.
 * Utiliza 'chalk' para dar color a los mensajes.
 * Demuestra la implementación de una abstracción para el Principio de Inversión de Dependencias (DIP).
 */
class NotificadorConsola extends INotificador { // Aunque no es una herencia real de interfaz, es conceptual
    /**
     * Envía un mensaje de notificación a la consola con un tipo específico de color.
     * @param {string} mensaje - El mensaje a notificar.
     * @param {string} [tipo='info'] - Tipo de mensaje: 'info', 'error', 'warning', 'success'.
     */
    notificar(mensaje, tipo = 'info') {
        switch (tipo) {
            case 'error':
                console.error(chalk.bold.red(`[ERROR] ${mensaje}`));
                break;
            case 'warning':
                console.warn(chalk.yellow(`[ADVERTENCIA] ${mensaje}`));
                break;
            case 'success':
                console.log(chalk.green(`[ÉXITO] ${mensaje}`));
                break;
            case 'info':
            default:
                console.log(chalk.blue(`[INFO] ${mensaje}`));
                break;
        }
    }

    /**
     * Envía un mensaje de error.
     * @param {string} mensaje - El mensaje de error.
     */
    error(mensaje) {
        this.notificar(mensaje, 'error');
    }

    /**
     * Envía un mensaje de advertencia.
     * @param {string} mensaje - El mensaje de advertencia.
     */
    advertencia(mensaje) {
        this.notificar(mensaje, 'warning');
    }

    /**
     * Envía un mensaje de éxito.
     * @param {string} mensaje - El mensaje de éxito.
     */
    exito(mensaje) {
        this.notificar(mensaje, 'success');
    }
}

module.exports = NotificadorConsola;
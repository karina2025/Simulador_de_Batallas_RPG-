// src/models/Personaje.js

/**
 * Clase base para todos los personajes del juego (jugadores y enemigos).
 * Aplica el principio de encapsulamiento con propiedades privadas (#).
 * Representa la base para el Principio de Sustitución de Liskov (LSP):
 * cualquier Personaje derivado (Guerrero, Mago, Enemigo) puede ser usado
 * donde se espera un Personaje base sin romper la funcionalidad.
 */
class Personaje {
    // Propiedades privadas para encapsular los datos internos del personaje.
    // Solo se pueden acceder y modificar a través de getters y setters (si los hubiera)
    // o métodos públicos de la propia clase.
    #id; // Usaremos un ID único para cada personaje (se generará en el GestorPersonajes)
    #nombre;
    #salud;
    #saludMaxima;
    #ataque;
    #defensa;
    #nivel;
    #experiencia;
    #experienciaParaSiguienteNivel;

    /**
     * Constructor de la clase Personaje.
     * @param {string} nombre - El nombre del personaje.
     * @param {number} salud - La salud inicial y máxima del personaje.
     * @param {number} ataque - El valor de ataque base del personaje.
     * @param {number} defensa - El valor de defensa base del personaje.
     * @param {string} [id=null] - ID único del personaje. Si no se proporciona, se generará más tarde.
     */
    constructor(nombre, salud, ataque, defensa, id = null) {
        this.#id = id; // El ID podría ser generado por un Gestor de Personajes
        this.#nombre = nombre;
        this.#saludMaxima = salud; // La salud máxima del personaje
        this.#salud = salud;       // La salud actual del personaje
        this.#ataque = ataque;
        this.#defensa = defensa;
        this.#nivel = 1;
        this.#experiencia = 0;
        this.#experienciaParaSiguienteNivel = 100; // XP inicial para subir de nivel
    }

    // --- Getters (Métodos para acceder a las propiedades privadas) ---
    // Son importantes para el encapsulamiento, permitiendo leer el estado del personaje
    // sin acceder directamente a las propiedades privadas.

    get id() {
        return this.#id;
    }

    set id(newId) { // Setter para el ID, útil al cargar personajes guardados
        if (!this.#id) { // Solo permite establecer el ID si aún no tiene uno
            this.#id = newId;
        } else {
            console.warn(`Advertencia: Intentando cambiar el ID de ${this.#nombre} de ${this.#id} a ${newId}. ID ya establecido.`);
        }
    }

    get nombre() {
        return this.#nombre;
    }

    get salud() {
        return this.#salud;
    }

    get saludMaxima() {
        return this.#saludMaxima;
    }

    get ataque() {
        return this.#ataque;
    }

    get defensa() {
        return this.#defensa;
    }

    get nivel() {
        return this.#nivel;
    }

    get experiencia() {
        return this.#experiencia;
    }

    get experienciaParaSiguienteNivel() {
        return this.#experienciaParaSiguienteNivel;
    }

    // --- Métodos de Comportamiento ---

    /**
     * Reduce la salud del personaje por la cantidad de daño especificada.
     * La salud no puede ser menor a 0.
     * @param {number} cantidad - La cantidad de daño a recibir.
     */
    recibirDano(cantidad) {
        this.#salud -= cantidad;
        if (this.#salud < 0) {
            this.#salud = 0;
        }
        // console.log(`${this.#nombre} recibe ${cantidad} de daño. Salud actual: ${this.#salud}/${this.#saludMaxima}`);
    }

    /**
     * Aumenta la salud del personaje por la cantidad especificada, sin exceder la salud máxima.
     * @param {number} cantidad - La cantidad de salud a recuperar.
     */
    curar(cantidad) {
        this.#salud += cantidad;
        if (this.#salud > this.#saludMaxima) {
            this.#salud = this.#saludMaxima;
        }
        // console.log(`${this.#nombre} se cura ${cantidad} de salud. Salud actual: ${this.#salud}/${this.#saludMaxima}`);
    }

    /**
     * Verifica si el personaje está vivo.
     * @returns {boolean} - Verdadero si la salud es mayor a 0, falso de lo contrario.
     */
    estaVivo() {
        return this.#salud > 0;
    }

    /**
     * Añade experiencia al personaje y comprueba si sube de nivel.
     * Aplica un ciclo `while` para manejar múltiples subidas de nivel si se gana mucha XP.
     * @param {number} cantidad - La cantidad de experiencia a añadir.
     */
    ganarExperiencia(cantidad) {
        this.#experiencia += cantidad;
        // console.log(`${this.#nombre} gana ${cantidad} de experiencia. Total: ${this.#experiencia}/${this.#experienciaParaSiguienteNivel}`);

        // Bucle para subir múltiples niveles si la XP es suficiente
        while (this.#experiencia >= this.#experienciaParaSiguienteNivel) {
            this.subirNivel(); // Llama al método polimórfico de subir nivel
            // Restar la XP del nivel actual y calcular la XP para el siguiente
            this.#experiencia -= this.#experienciaParaSiguienteNivel;
            // Aumentar la XP requerida para el siguiente nivel (ej. 50% más por nivel)
            this.#experienciaParaSiguienteNivel = Math.floor(this.#experienciaParaSiguienteNivel * 1.5);
        }
    }

    /**
     * Aumenta el nivel del personaje y mejora sus estadísticas base.
     * Este método es "polimórfico": será sobrescrito por las clases hijas (Guerrero, Mago, etc.)
     * para aplicar mejoras específicas a cada clase.
     * El Principio Abierto/Cerrado (OCP) se aplica aquí: la clase base es estable,
     * y las mejoras específicas se añaden extendiendo y sobrescribiendo.
     */
    subirNivel() {
        this.#nivel++;
        // Mejoras generales aplicables a cualquier personaje al subir de nivel
        this.#saludMaxima += 15; // Mejora base de salud
        this.#salud = this.#saludMaxima; // Restaura salud al subir de nivel
        this.#ataque += 3; // Mejora base de ataque
        this.#defensa += 2; // Mejora base de defensa
        // console.log(`¡${this.#nombre} ha subido al nivel ${this.#nivel}!`);
        // console.log(`Estadísticas mejoradas: Salud Max: ${this.#saludMaxima}, Ataque: ${this.#ataque}, Defensa: ${this.#defensa}`);
    }

    /**
     * Calcula el daño infligido a un objetivo antes de que este lo reciba.
     * Este método puede ser sobrescrito por las clases hijas para ataques especiales
     * (ej. daño mágico, críticos).
     * @param {Personaje} objetivo - El personaje al que se va a atacar.
     * @returns {number} - El daño calculado antes de la defensa del objetivo.
     */
    calcularDano(objetivo) {
        // Un cálculo de daño simple: ataque del atacante menos defensa del objetivo.
        // El daño mínimo siempre será 0.
        let danoBase = this.#ataque;
        let danoFinal = Math.max(0, danoBase - objetivo.defensa);
        // console.log(`${this.#nombre} ataca a ${objetivo.nombre}. Daño base: ${danoBase}, Defensa de ${objetivo.nombre}: ${objetivo.defensa}. Daño infligido: ${danoFinal}`);
        return danoFinal;
    }

    /**
     * Realiza una acción de ataque básica contra un objetivo.
     * Este método es polimórfico: las subclases lo sobrescribirán para implementar
     * su lógica de ataque específica (ej. ataque físico, ataque mágico, etc.).
     * @param {Personaje} objetivo - El personaje objetivo del ataque.
     */
    atacar(objetivo) {
        if (!objetivo.estaVivo()) {
            // console.log(`${objetivo.nombre} ya está derrotado.`);
            return;
        }
        const dano = this.calcularDano(objetivo);
        objetivo.recibirDano(dano);
    }

    /**
     * Retorna una representación en cadena de los atributos del personaje.
     * Útil para mostrar el estado actual del personaje en la consola.
     * @returns {string}
     */
    toString() {
        return `[${this.#nombre}] Nivel: ${this.#nivel}, Salud: ${this.#salud}/${this.#saludMaxima}, Ataque: ${this.#ataque}, Defensa: ${this.#defensa}, XP: ${this.#experiencia}/${this.#experienciaParaSiguienteNivel}`;
    }
}

module.exports = Personaje;
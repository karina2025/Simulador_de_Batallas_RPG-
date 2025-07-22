# Simulador_de_Batallas_RPG-

# ⚔️ RPG Battle Simulator por Consola ⚔️

Este proyecto es un simulador de batallas RPG (Role-Playing Game) interactivo para consola, desarrollado con Node.js. El objetivo principal es aplicar los principios de la Programación Orientada a Objetos (POO) y los principios SOLID para construir un sistema de juego robusto, modular y fácil de mantener y extender.

---

## 🎯 Objetivo del Proyecto

Desarrollar una aplicación de consola que simule batallas por turnos entre personajes con diferentes clases (guerrero, mago, arquero, etc.), incluyendo gestión de personajes, inventario básico y enemigos controlados por una IA simple. El proyecto enfatiza el uso de:

* **JavaScript con Node.js**
* **Programación Orientada a Objetos (POO):** Herencia, Polimorfismo, Encapsulamiento, Relaciones entre clases.
* **Principios SOLID:** SRP, OCP, LSP, ISP, DIP.
* **Diseño de Código Limpio y Modular.**


---

## 🚀 Funcionalidades Actuales (Progreso hasta el Paso 3)
 implementado una base sólida para el sistema de personajes y la estructura del proyecto:

* **Estructura de Carpetas:** Organización del código en directorios lógicos (`src/models`, `src/services`, `src/interfaces`, `src/utils`, `src/config`, `src/data`) para promover el Principio de Responsabilidad Única (SRP).
* **Clase Base `Personaje` (`src/models/Personaje.js`):**
    * Define los atributos y comportamientos fundamentales que cualquier entidad en el juego (héroe o enemigo) debe tener (salud, ataque, defensa, nivel, experiencia).
    * Aplica **Encapsulamiento** mediante propiedades privadas (`#`).
    * Establece la base para el **Principio de Sustitución de Liskov (LSP)**.
* **Clases de Personajes Específicas (`src/models/Guerrero.js`, `src/models/Mago.js`, `src/models/Arquero.js`):**
    * Heredan de la clase `Personaje` utilizando `extends` y `super()`, demostrando **Herencia**.
    * Sobrescriben métodos como `atacar()` y `subirNivel()` para implementar comportamientos y mejoras de estadísticas específicos para cada clase, mostrando **Polimorfismo**.
    * Cumplen con el **Principio Abierto/Cerrado (OCP)**, permitiendo añadir nuevas clases de personaje sin modificar el código existente de la clase base `Personaje` o la lógica de batalla general.
* **Definición de "Interfaces" (`src/interfaces/`):**
    * Se han definido contratos conceptuales para las capacidades de los objetos (`IAtacante`, `ICurable`, `INotificador`, `IUsaMagia`).
    * Esto prepara el terreno para el **Principio de Segregación de Interfaces (ISP)**, asegurando que las clases solo dependan de los métodos que realmente necesitan.
* **Servicio de Notificación por Consola (`src/services/NotificadorConsola.js`):**
    * Una implementación concreta de la "interfaz" `INotificador`.
    * Se encarga exclusivamente de mostrar mensajes formateados y coloreados en la consola utilizando `chalk`.
    * Es el primer paso tangible hacia el **Principio de Inversión de Dependencias (DIP)**, ya que las clases de alto nivel dependerán de `INotificador` (la abstracción) en lugar de `NotificadorConsola` (la implementación concreta).

---

## 🛠️ Tecnologías Utilizadas

* **Node.js**
* **JavaScript (ES6+)**
* **NPM** (Node Package Manager)

### Librerías (NPM Packages)

* [`inquirer`](https://www.npmjs.com/package/inquirer): Para crear menús interactivos en la consola.
* [`chalk`](https://www.npmjs.com/package/chalk): Para dar estilos y colores a la salida de texto en la consola.
* `uuid` (próximamente): Para generar IDs únicos (cuando implementemos la gestión completa de personajes).
* `lowdb` o `fs` (opcional, para guardar/cargar progreso): Para la persistencia de datos.

---

## 📦 Estructura del Proyecto

¡Absolutamente! Es una excelente idea ir completando el README.md a medida que avanzamos. Así, tendrás la documentación al día y clara para ti y tu equipo.

Aquí tienes una propuesta para el contenido de tu README.md con lo que hemos hecho hasta ahora, incluyendo una sección para el Diagrama UML que deberás añadir más adelante.

README.md Propuesta
Markdown

# ⚔️ RPG Battle Simulator por Consola ⚔️

Este proyecto es un simulador de batallas RPG (Role-Playing Game) interactivo para consola, desarrollado con Node.js. El objetivo principal es aplicar los principios de la Programación Orientada a Objetos (POO) y los principios SOLID para construir un sistema de juego robusto, modular y fácil de mantener y extender.

---

## 🎯 Objetivo del Proyecto

Desarrollar una aplicación de consola que simule batallas por turnos entre personajes con diferentes clases (guerrero, mago, arquero, etc.), incluyendo gestión de personajes, inventario básico y enemigos controlados por una IA simple. El proyecto enfatiza el uso de:

* **JavaScript con Node.js**
* **Programación Orientada a Objetos (POO):** Herencia, Polimorfismo, Encapsulamiento, Relaciones entre clases.
* **Principios SOLID:** SRP, OCP, LSP, ISP, DIP.
* **Diseño de Código Limpio y Modular.**
* **Trabajo en Equipo** (gestión con Git/GitHub).

---

## 🚀 Funcionalidades Actuales (Progreso hasta el Paso 3)

Hasta ahora, hemos implementado una base sólida para el sistema de personajes y la estructura del proyecto:

* **Estructura de Carpetas:** Organización del código en directorios lógicos (`src/models`, `src/services`, `src/interfaces`, `src/utils`, `src/config`, `src/data`) para promover el Principio de Responsabilidad Única (SRP).
* **Clase Base `Personaje` (`src/models/Personaje.js`):**
    * Define los atributos y comportamientos fundamentales que cualquier entidad en el juego (héroe o enemigo) debe tener (salud, ataque, defensa, nivel, experiencia).
    * Aplica **Encapsulamiento** mediante propiedades privadas (`#`).
    * Establece la base para el **Principio de Sustitución de Liskov (LSP)**.
* **Clases de Personajes Específicas (`src/models/Guerrero.js`, `src/models/Mago.js`, `src/models/Arquero.js`):**
    * Heredan de la clase `Personaje` utilizando `extends` y `super()`, demostrando **Herencia**.
    * Sobrescriben métodos como `atacar()` y `subirNivel()` para implementar comportamientos y mejoras de estadísticas específicos para cada clase, mostrando **Polimorfismo**.
    * Cumplen con el **Principio Abierto/Cerrado (OCP)**, permitiendo añadir nuevas clases de personaje sin modificar el código existente de la clase base `Personaje` o la lógica de batalla general.
* **Definición de "Interfaces" (`src/interfaces/`):**
    * Se han definido contratos conceptuales para las capacidades de los objetos (`IAtacante`, `ICurable`, `INotificador`, `IUsaMagia`).
    * Esto prepara el terreno para el **Principio de Segregación de Interfaces (ISP)**, asegurando que las clases solo dependan de los métodos que realmente necesitan.
* **Servicio de Notificación por Consola (`src/services/NotificadorConsola.js`):**
    * Una implementación concreta de la "interfaz" `INotificador`.
    * Se encarga exclusivamente de mostrar mensajes formateados y coloreados en la consola utilizando `chalk`.
    * Es el primer paso tangible hacia el **Principio de Inversión de Dependencias (DIP)**, ya que las clases de alto nivel dependerán de `INotificador` (la abstracción) en lugar de `NotificadorConsola` (la implementación concreta).

---

## 🛠️ Tecnologías Utilizadas

* **Node.js**
* **JavaScript (ES6+)**
* **NPM** (Node Package Manager)

### Librerías (NPM Packages)

* [`inquirer`](https://www.npmjs.com/package/inquirer): Para crear menús interactivos en la consola.
* [`chalk`](https://www.npmjs.com/package/chalk): Para dar estilos y colores a la salida de texto en la consola.
* `uuid` (próximamente): Para generar IDs únicos (cuando implementemos la gestión completa de personajes).
* `lowdb` o `fs` (opcional, para guardar/cargar progreso): Para la persistencia de datos.

---

## 📦 Estructura del Proyecto

Simulador_de_Batallas_RPG/
├── node_modules/           # Módulos de Node.js instalados por npm (ignorados por Git)
├── src/                    # Código fuente de la aplicación
│   ├── app.js              # Punto de entrada principal y orquestador
│   │
│   ├── config/             # Archivos de configuración del juego
│   │   └── gameConfig.js
│   │
│   ├── models/             # Clases que representan las entidades del juego
│   │   ├── Personaje.js    # Clase base
│   │   ├── Guerrero.js
│   │   ├── Mago.js
│   │   ├── Arquero.js
│   │   ├── Enemigo.js      # (Pendiente de implementación)
│   │   ├── Item.js         # (Pendiente de implementación)
│   │   ├── Arma.js         # (Pendiente de implementación)
│   │   ├── Pocion.js       # (Pendiente de implementación)
│   │   └── Armadura.js     # (Pendiente de implementación)
│   │
│   ├── interfaces/         # Definiciones conceptuales de interfaces (abstracciones para SOLID)
│   │   ├── IAtacante.js
│   │   ├── ICurable.js
│   │   ├── INotificador.js
│   │   └── IUsaMagia.js
│   │
│   ├── services/           # Clases con lógica de negocio y coordinación
│   │   ├── GestorBatalla.js    # (Pendiente de implementación)
│   │   ├── GestorInventario.js # (Pendiente de implementación)
│   │   ├── GestorPersonajes.js # (Pendiente de implementación)
│   │   ├── NotificadorConsola.js # Implementación concreta de INotificador
│   │   ├── MenuPrincipal.js    # (Pendiente de implementación)
│   │   └── GeneradorEnemigos.js # (Pendiente de implementación)
│   │
│   ├── utils/              # Funciones auxiliares y constantes
│   │   ├── constants.js    # (Pendiente de implementación)
│   │   └── helpers.js      # (Pendiente de implementación)
│   │
│   └── data/               # Archivos para persistencia de datos (opcional)
│       └── characters.json # (Pendiente de implementación)
│
├── .gitignore              # Archivo para ignorar en control de versiones (ej. node_modules/)
├── package.json            # Metadatos del proyecto y dependencias
├── package-lock.json       # Estado exacto de las dependencias
└── README.md               # Este archivo de documentación

## ⚙️ Cómo Ejecutar el Proyecto

Para poner en marcha este simulador, sigue los siguientes pasos:

1.  **Clonar el Repositorio:**
    ```bash
    git clone https://github.com/karina2025/Simulador_de_Batallas_RPG-.git
    cd rpg-battle-simulator
    ```

2.  **Instalar Dependencias:**
    Asegúrate de estar en el directorio raíz del proyecto (`rpg-battle-simulator`) y ejecuta:
    ```bash
    npm install
    ```
    Esto instalará todas las librerías necesarias (como `inquirer` y `chalk`).

3.  **Ejecutar la Aplicación:**
    Para iniciar la demostración actual del proyecto, ejecuta:
    ```bash
    node src/app.js
    ```
    Verás la salida de la consola mostrando la creación de personajes, sus interacciones de batalla y las pruebas de subida de nivel.

---


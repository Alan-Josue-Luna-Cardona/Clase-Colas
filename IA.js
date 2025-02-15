class Cola {
    constructor(tamanoMaximo = 10) {
        this.items = [];
        this.tamanoMaximo = tamanoMaximo;
    }

    /**
     * Crea una nueva cola vacía
     * @returns {string} Mensaje de confirmación
     */
    crearCola() {
        this.items = [];
        return "Se ha creado una nueva cola vacía";
    }

    /**
     * Añade un elemento al final de la cola
     * @param {any} elemento - Elemento a insertar
     * @returns {string} Mensaje de éxito o error
     */
    insertar(elemento) {
        if (this.colaLlena()) {
            return `No se puede insertar: la cola está llena (máximo ${this.tamanoMaximo} elementos)`;
        }
        this.items.push(elemento);
        return `Se ha insertado "${elemento}" al final de la cola`;
    }

    /**
     * Retira el elemento del frente de la cola
     * @returns {string} Mensaje con el elemento retirado o error
     */
    quitar() {
        if (this.colaVacia()) {
            return "No se puede quitar elementos: la cola está vacía";
        }
        const elemento = this.items.shift();
        return `Se ha retirado "${elemento}" del frente de la cola`;
    }

    /**
     * Verifica si la cola está vacía
     * @returns {boolean} true si está vacía, false si no
     */
    colaVacia() {
        return this.items.length === 0;
    }

    /**
     * Verifica si la cola está llena
     * @returns {boolean} true si está llena, false si no
     */
    colaLlena() {
        return this.items.length >= this.tamanoMaximo;
    }

    /**
     * Obtiene el elemento del frente sin removerlo
     * @returns {string} Elemento del frente o mensaje de error
     */
    frente() {
        if (this.colaVacia()) {
            return "La cola está vacía";
        }
        return `El elemento del frente es: "${this.items[0]}"`;
    }

    /**
     * Obtiene el tamaño máximo de la cola
     * @returns {string} Información del tamaño de la cola
     */
    tamanoDeLaCola() {
        return `Tamaño actual: ${this.items.length}/${this.tamanoMaximo} elementos`;
    }

    /**
     * Muestra el estado actual de la cola
     * @returns {string} Representación de la cola
     */
    mostrar() {
        if (this.colaVacia()) {
            return "Cola: []";
        }
        return `Cola: [${this.items.join(' <- ')}]`;
    }
}

// Ejemplo de uso interactivo
const demostrarCola = () => {
    const cola = new Cola(5); // Cola con máximo 5 elementos
    
    console.log("=== Sistema de Cola Interactivo ===");
    console.log(cola.crearCola());
    console.log(cola.mostrar());
    
    console.log("\n=== Insertando elementos ===");
    console.log(cola.insertar("A"));
    console.log(cola.insertar("B"));
    console.log(cola.insertar("C"));
    console.log(cola.mostrar());
    console.log(cola.tamanoDeLaCola());
    
    console.log("\n=== Consultando el frente ===");
    console.log(cola.frente());
    
    console.log("\n=== Quitando elementos ===");
    console.log(cola.quitar());
    console.log(cola.mostrar());
    
    console.log("\n=== Verificando estado ===");
    console.log(`¿Cola vacía?: ${cola.colaVacia()}`);
    console.log(`¿Cola llena?: ${cola.colaLlena()}`);
    console.log(cola.tamanoDeLaCola());
}

// Ejecutar demostración
demostrarCola();

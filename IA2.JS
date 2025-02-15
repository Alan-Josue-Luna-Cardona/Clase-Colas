const readline = require('readline');

class Cola {
    constructor(tamanoMaximo = 10) {
        this.items = [];
        this.tamanoMaximo = tamanoMaximo;
    }

    crearCola() {
        this.items = [];
        return "Se ha creado una nueva cola vacía";
    }

    insertar(elemento) {
        if (this.colaLlena()) {
            return `No se puede insertar: la cola está llena (máximo ${this.tamanoMaximo} elementos)`;
        }
        this.items.push(elemento);
        return `Se ha insertado "${elemento}" al final de la cola`;
    }

    quitar() {
        if (this.colaVacia()) {
            return "No se puede quitar elementos: la cola está vacía";
        }
        const elemento = this.items.shift();
        return `Se ha retirado "${elemento}" del frente de la cola`;
    }

    colaVacia() {
        return this.items.length === 0;
    }

    colaLlena() {
        return this.items.length >= this.tamanoMaximo;
    }

    frente() {
        if (this.colaVacia()) {
            return "La cola está vacía";
        }
        return `El elemento del frente es: "${this.items[0]}"`;
    }

    tamanoDeLaCola() {
        return `Tamaño actual: ${this.items.length}/${this.tamanoMaximo} elementos`;
    }

    mostrar() {
        if (this.colaVacia()) {
            return "Cola: []";
        }
        return `Cola: [${this.items.join(' <- ')}]`;
    }
}

// Crear interfaz para lectura de entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Crear instancia de la cola
const cola = new Cola(5);

// Función para mostrar el menú
function mostrarMenu() {
    console.log("\n=== SISTEMA DE COLA INTERACTIVO ===");
    console.log("1. Crear nueva cola");
    console.log("2. Insertar elemento");
    console.log("3. Quitar elemento");
    console.log("4. Ver frente de la cola");
    console.log("5. Verificar si la cola está vacía");
    console.log("6. Verificar si la cola está llena");
    console.log("7. Ver tamaño de la cola");
    console.log("8. Mostrar cola completa");
    console.log("9. Salir");
    console.log("\nEstado actual:");
    console.log(cola.mostrar());
    console.log(cola.tamanoDeLaCola());
}

// Función para procesar la opción seleccionada
function procesarOpcion(opcion) {
    switch (opcion) {
        case "1":
            console.log(cola.crearCola());
            continuarOperacion();
            break;
        case "2":
            rl.question("Ingrese el elemento a insertar: ", (elemento) => {
                console.log(cola.insertar(elemento));
                continuarOperacion();
            });
            break;
        case "3":
            console.log(cola.quitar());
            continuarOperacion();
            break;
        case "4":
            console.log(cola.frente());
            continuarOperacion();
            break;
        case "5":
            console.log(`La cola ${cola.colaVacia() ? 'está' : 'no está'} vacía`);
            continuarOperacion();
            break;
        case "6":
            console.log(`La cola ${cola.colaLlena() ? 'está' : 'no está'} llena`);
            continuarOperacion();
            break;
        case "7":
            console.log(cola.tamanoDeLaCola());
            continuarOperacion();
            break;
        case "8":
            console.log(cola.mostrar());
            continuarOperacion();
            break;
        case "9":
            console.log("¡Gracias por usar el sistema!");
            rl.close();
            break;
        default:
            console.log("Opción no válida. Por favor, intente de nuevo.");
            continuarOperacion();
    }
}

// Función para continuar con la operación
function continuarOperacion() {
    mostrarMenu();
    rl.question("\nSeleccione una opción (1-9): ", (opcion) => {
        procesarOpcion(opcion);
    });
}

// Iniciar el programa
console.log("Bienvenido al Sistema de Cola Interactivo");
continuarOperacion();
# Implementación de una Cola en JavaScript

Este proyecto contiene una implementación de una estructura de datos de tipo **Cola** en JavaScript. La cola sigue el principio **FIFO** (First In, First Out), donde el primer elemento en entrar es el primero en salir.

## Colaboradores

- **Alan Luna**: Claude.ia  
  (Imagen de referencia)  
  Alan proporcionó el código base y solicitó que se añadieran funcionalidades adicionales para hacer el código más versátil y capaz de interactuar con el usuario.

- **Franklin López**: DeepSeek  
  Franklin aportó documentos y especificaciones para mejorar el código, incluyendo operaciones como crear cola, insertar elementos, quitar elementos, verificar si la cola está vacía o llena, obtener el frente y el tamaño de la cola.

## Código Base

```javascript
class Cola {
    constructor(){
        this.items = [];
    }

    enqueue(elemento) {
        this.items.push(elemento);
    }

    dequeue() {
        if (this.isEmpty()){
            return "La cola esta vacia";
        }
        return this.items.shift();
    }

    frente(){
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    mostrar(){
        console.log(this.items);
    }
}

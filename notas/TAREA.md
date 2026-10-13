# Tarea: Mi componente interactivo 

## Componente elegido 

Lista de tareas interactiva (Gestor de tareas)

## Version 1: solo DOM 

Qué agregué:Estructura HTML básica y manipulación simple del DOM para rendirizar un elemento inicial dinámicamente.

Por qué:Para verificar la conexión entre el JavaScript y el DOM, asegurando la creación e inserción de nodos (`createElement`, `appendChild`).

Qué cambió en el comportamiento:La página renderiza una lista estática en pantalla al cargar.

```javascript
const listaTareas = document.querySelector("#listaTareas");
const li = document.createElement("li");
li.textContent = "Tarea de prueba [General]";
listaTareas.appendChild(li);
```

## Version 2: con eventos 

Qué agregué: Eventos de formulario (submit), filtrado en tiempo real (input), interacción al hacer clic en los elementos (click) y mensajes de validación visibles en pantalla.

Por qué: Para permitir al usuario interactuar dinámicamente agregando, marcando y eliminando elementos de la lista sin recargar la página.

Qué cambió en el comportamiento: La página responde en tiempo real a los clics e inputs del usuario, mostrando mensajes de error si intenta enviar un título vacío.

```javascript
formTarea.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputTitulo.value.trim() === "") {
    mensajeError.style.display = "block";
    return;
  }
  mensajeError.style.display = "none";
});
```
## Version 3: con clases y objetos 

Qué agregué: Implementación de la clase Tarea y gestión del estado dentro de un arreglo de objetos.

Por qué: Para desacoplar los datos de la interfaz visual, permitiendo modificar y mantener el estado de cada tarea (completada/pendiente) incluso al aplicar filtros de búsqueda.

Qué cambió en el comportamiento: Cada tarea gestiona su propio estado interno y los datos permanecen sincronizados al filtrar o actualizar la lista.

```JavaScript
class Tarea {
  constructor(titulo, categoria) {
    this.titulo = titulo;
    this.categoria = categoria;
    this.completada = false;
  }

  cambiarEstado() {
    this.completada = !this.completada;
  }
  obtenerTexto() {
    return `${this.titulo} [${this.categoria}]`;
  }
}
```

## Donde uso DOM, eventos y objetos 

| Pieza | Línea de código relevante |Para qué sirve| 
|--------|-----------------------------|------------------| 
| DOM | document.createElement("li") / listaTareas.appendChild(li) | Crea nodos HTML dinámicamente e inserta las tareas en la lista visual. | 
| Eventos | formTarea.addEventListener("submit", ...) / inputFiltro.addEventListener("input", ...) | Captura el envío de datos del usuario y el texto ingresado en el buscador en tiempo real. | 
| Objetos | const nuevaTarea = new Tarea(...) / tarea.cambiarEstado() | Instancia y modifica los objetos que representan las tareas y sus métodos. | 

## Pruebas realizadas 

| Acción | Resultado esperado | Resultado obtenido | ¿Cumple? (Sí/No) |
|--------|--------------------|--------------------|------------------| 
| Intentar agregar con título vacío | Muestra un mensaje de error en rojo en la página | Muestra el mensaje de error en rojo | Sí |
| Agregar "Comprar pan" - "Hogar" | Muestra "Comprar pan [Hogar]" y actualiza el contador a 1 | Muestra la tarea y el contador cambia a 1 | Sí |
| Hacer clic en una tarea | Alterna el tachado del texto (completada) | El texto se tacha y destacha al hacer clic | Sí |
| Escribir en el filtro de texto | Filtra la lista mostrando solo coincidencias | Oculta las tareas que no coinciden | Sí |
| Hacer clic en botón "Eliminar" | Remueve la tarea del DOM y disminuye el contador | Elimina el elemento y actualiza el contador | Sí |

## Por que diseñe asi mi clase 

Diseñé la clase Tarea con los atributos titulo, categoria y completada porque representan la información fundamental que define a una tarea pendiente. Los métodos cambiarEstado() y obtenerTexto() se incluyeron para encapsular la lógica interna del objeto: el primero invierte su estado booleano sin manipular el DOM directamente, y el segundo le da formato al texto antes de presentarlo en la interfaz.

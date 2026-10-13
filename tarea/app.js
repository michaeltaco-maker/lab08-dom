// Clase propia para la Tarea
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

// Selección de elementos DOM
const formTarea = document.querySelector("#formTarea");
const inputTitulo = document.querySelector("#inputTitulo");
const inputCategoria = document.querySelector("#inputCategoria");
const mensajeError = document.querySelector("#mensajeError");
const listaTareas = document.querySelector("#listaTareas");
const contadorElem = document.querySelector("#contador");
const inputFiltro = document.querySelector("#inputFiltro");

let tareas = [];

// Evento 1: submit en el formulario
formTarea.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validación sin alert
  if (inputTitulo.value.trim() === "") {
    mensajeError.style.display = "block";
    return;
  }
  mensajeError.style.display = "none";

  const categoria = inputCategoria.value.trim() || "General";
  const nuevaTarea = new Tarea(inputTitulo.value.trim(), categoria);
  tareas.push(nuevaTarea);

  renderizarTareas();
  formTarea.reset();
});

// Evento 2: input para filtrar tareas en tiempo real
inputFiltro.addEventListener("input", () => {
  renderizarTareas();
});

// Función para renderizar elementos DOM
function renderizarTareas() {
  listaTareas.innerHTML = "";
  const textoFiltro = inputFiltro.value.toLowerCase();

  const tareasFiltradas = tareas.filter(t => 
    t.titulo.toLowerCase().includes(textoFiltro) || 
    t.categoria.toLowerCase().includes(textoFiltro)
  );

  tareasFiltradas.forEach((tarea, index) => {
    const li = document.createElement("li");
    
    const span = document.createElement("span");
    span.textContent = tarea.obtenerTexto();
    if (tarea.completada) span.classList.add("completada");

    // Evento 3: click en el texto de la tarea para cambiar estado
    span.addEventListener("click", () => {
      tarea.cambiarEstado();
      renderizarTareas();
    });

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Eliminar";
    btnBorrar.classList.add("borrar");

    // Evento 3 (alternativo): click para eliminar la tarea del DOM y arreglo
    btnBorrar.addEventListener("click", () => {
      const indiceReal = tareas.indexOf(tarea);
      if (indiceReal !== -1) tareas.splice(indiceReal, 1);
      renderizarTareas();
    });

    li.appendChild(span);
    li.appendChild(btnBorrar);
    listaTareas.appendChild(li);
  });

  contadorElem.textContent = tareas.length;
}
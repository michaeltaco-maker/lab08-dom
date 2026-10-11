# Bitacora de JavaScript interactivo 
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos. 
Navegador usado: (escribe aqui cual usaste) 
## Ejercicio 2: Seleccionar y modificar el DOM 

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) | 
|-------------|---------------------------|---------------------------------| 
| textContent desde la consola | Cambió el título a "Hola desde la consola" | NO | 
| textContent desde app.js | Cambió el título a "Hola TECSUP" | SI | 
| style.color | Cambió el color del título a azul ("blue") | SI | 
| classList.add | Le aplicó la clase "destacado" al mensaje (le puso el fondo amarillo) | SI | 
| createElement + appendChild | Agregó la etiqueta lista con el texto "JavaScript" al final de la lista | SI | 

## Ejercicio 3: Evento click 

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion | 
|----------------|-----------------------|------------------------| 
| click | Hacer un solo clic con el ratón sobre el botón | 1 | 
| dblclick | Hacer un doble clic rápido sobre el botón | 1 | 
| mouseover | Pasar el puntero del ratón por encima del botón (sin hacer clic) | 1 | 

## Ejercicio 4: Eventos input y submit 

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) | 
|--------|-------------------------|------------------------------| 
| Escribir en el campo nombre | El texto "Hola, ..." se fue actualizando letra por letra en tiempo real a medida que tecleabas. | NO | 
| Enviar sin preventDefault | Apareció el texto "Enviado: ..." por un milisegundo y se borró todo inmediatamente. | SI | 
| Enviar con preventDefault, correo sin @ | Mostró el mensaje de error "Correo no valido: falta @" en color rojo. | NO | 
| Enviar con preventDefault, correo con @ | Mostró el mensaje de éxito "Enviado: correo@gmail.com" en texto normal. | NO | 

## Ejercicio 5: Clases y objetos 

| Objeto | nombre | precio | descripcion() | conDescuento(0.25) | 
|--------|--------|--------|---------------|--------------------| 
| laptop | laptop | 2500 | Laptop - S/ 2500.00 | 1875.00 |
| mouse | mouse | 45 | Mouse - S/ 45.00 | 33.75 | 
| teclado | teclado | 120 | Teclado - S/ 120.00 | 90.00 | 
| monitor | monitor | 680 | Monitor - S/ 680.00 | 510.00 | 

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba | Total que muestra la pagina | Correcto (Si/No) | 
|--------|-----------------------------|------------------| 
| Cuaderno 12.50 | S/ 12.50 | SI | 
| + Lapicero 3.20 | S/ 15.70 | SI | 
| + Mochila 89.90 | No se muestra (Error en consola) | SI | 
| Sin Number() | No se muestra (Error en consola) | NO | 

| Pieza | Linea de tu codigo donde aparece | Para que sirve | 
|-------|----------------------------------|----------------| 
| DOM | document.querySelector("#formProducto") / document.createElement("li") | Permite acceder y manipular los elementos HTML desde JavaScript (como leer inputs o crear nuevos ítems en la lista). | 
| Evento | formProducto.addEventListener("submit", ...) | Escucha la acción del usuario (en este caso, al enviar el formulario) para ejecutar el código de agregar producto sin recargar la página. | 
| Objeto | const producto = new Producto(...) / const carrito = new Carrito() | Instancia la estructura de datos que encapsula sus propios atributos (nombre, precio) y métodos (calcular total, obtener descripción). |

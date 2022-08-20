function mostrarMenu() {
  console.group("---------- Actividades Semanales ------------");
  console.log("1. Crea tareas");
  console.log("2. Mostrar tareas");
  console.log("3. editar tareas");
  console.log("4. Eliminar tareas realizadas");
  console.log("-----------------------------------");
  console.groupEnd();
  opcion = Number(prompt("Escoja la opcion que desees "));
}

function operacionSwitch() {
  switch (opcion) {
    case 1:
      let repeat = 0;
      do {
        aTareas.push(prompt("Ingrese la tarea del día"));
        repeat = Number(
          prompt("tarea nueva, digite 0 ....... para salir digite 1")
        );
      } while (!repeat);

      break;
    case 2:
      console.log("----------- Listado de Tareas ----------");
      if (aTareas.length > 0) {
        aTareas.forEach((tareas) => {
          console.log(`${tareas}`);
        });
      } else {
        console.log("Aun no ingresa datos... regrese al menú");
      }
      console.log("------------- -------------- -----------");
      break;
    case 3:
      if (aTareas.length > 0) {
        aTareas.map((elemento) => {
          console.log(elemento);
        });
        let posElemento = aTareas.indexOf(
          prompt("Ingrese el texto a modificar")
        );
        aTareas[posElemento] = prompt("texto nuevo");
      } else {
        console.log("Aun no ingresa datos... regrese al menú");
      }

      break;
    case 4:
      if (aTareas.length > 0) {
        console.log("----------- escoja la opcion a eliminar de su listado");
        aTareas.forEach((elemento, indice) => {
          console.log(`${indice}. ${elemento}`);
        });
        let pos = Number(
          prompt("ingrese uno de los indices que desea eliminar: ")
        );
        aTareas.splice(pos, 1);
        console.log(aTareas);
      } else {
        console.log("Aun no ingresa datos... regrese al menú");
      }

      break;
    default:
      console.log("opcion errada");
      break;
  }
  salir = Number(
    prompt("para volver al menú digite 0 ..... para salir presione otro numero")
  );
}

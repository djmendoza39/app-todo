const app = document.querySelector("#app");
const modal = document.createElement("div");
const crudTareas = document.createElement("div");
const cerrar = document.querySelector(".cerrar");

crudTareas.innerHTML += `
<div class="modificar-tarea">
<div class="contenedor-iconos">
  <i class="bi bi-trash"></i>
  <i class="bi bi-x cerrar"></i>
</div>
<form>
  <input
    type="text"
    name="titulo"
    id="titulo"
    placeholder="Ingrese título"
  />
  <textarea
    name="descripcion"
    id="descripcion"
    placeholder="Ingrese detalles de la actividad"
  ></textarea>
</form>
<ul>
  <li><i class="bi bi-cloud"></i> Attach file</li>
  <li><i class="bi bi-card-list"></i>Add Assigne</li>
  <li><i class="bi bi-calendar-check"></i>Add date</li>
  <li><i class="bi bi-arrow-return-right"></i>Add subtask</li>
</ul>
</div>

`;
const mostrarModal = document.querySelector("#mostrarModal");

modal.setAttribute("class", "modal");

mostrarModal.addEventListener("click", () => {
  console.log("llamado al evento correctamente");
  app.appendChild(modal);
  modal.appendChild(crudTareas);
});

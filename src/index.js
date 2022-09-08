import { Eventos } from "./core/Eventos";
import { Persistencia } from "./core/Persistencia";
import { Todo } from "./core/Todo";
import { App } from "./app/App";

((app, event) => {
  
  const aLista = [];
  let ul = document.querySelector("ul");
  const inputText = document.querySelector("#inputTask");

  event.click("#addTarea", () => {
    if (inputText.value === "") {
      alert("campo tarea vacio.... rellenelo");
    } else {
      aLista.push({ tarea: inputText.value });
      if (app.dato.save("tarea", aLista)) {
        let li = document.createElement("li");
        let eliminar = document.createElement("button");
        let editar = document.createElement("button");
        let contenedorBtn = document.createElement('div');
        editar.textContent='editar'
        eliminar.textContent = "eliminar";
        eliminar.setAttribute('class', 'btnEliminar')
        editar.setAttribute('class', 'btnEditar')
        li.textContent = inputText.value;
        ul.appendChild(li);
        li.append(contenedorBtn);
        contenedorBtn.append(editar, eliminar)
        inputText.value = "";
      }
    }
  });

    if(app.dato.show('tarea')){
      app.dato.show('tarea').forEach(element =>{
        let li = document.createElement("li");
        let eliminar = document.createElement('button');
        let editar = document.createElement("button");
        let contenedorBtn = document.createElement('div');
        editar.textContent = 'editar';
        eliminar.textContent = 'eliminar';
        eliminar.setAttribute('class', 'btnEliminar');
        editar.setAttribute('class', 'btnEditar');
        li.textContent = element.tarea;
        ul.appendChild(li);
        li.appendChild(contenedorBtn);
        contenedorBtn.append(editar, eliminar);
        aLista.push(element);
      });
    }
    

  

  

  

})(new App(new Todo(new Persistencia())), new Eventos());

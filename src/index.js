import { Eventos } from "./core/Eventos";
import { Persistencia } from "./core/Persistencia";
import { Todo } from "./core/Todo";
import { App } from "./app/App";

((app, event)=>{

    const aListaTarea = [];
    const ul = document.querySelector('ul');
    
    event.click('#addTarea', ()=>{
        const inputTarea = document.querySelector('#inputTask');
        if(inputTarea.value === ''){
            alert('ingrese una tarea');
        }else{
            let li = document.createElement('li');
            const btnEliminar = document.createElement('button')
            const btnActualizar = document.createElement('button')
            const containerButton = document.createElement('div');
            containerButton.setAttribute('class', 'containerButtons');
            btnEliminar.innerHTML= `<i class="bi bi-trash-fill miColor"></i>`;
            btnEliminar.setAttribute('class', 'btnEliminar');
            btnActualizar.innerHTML = `<i class="bi bi-pencil-fill "></i>`;
            btnActualizar.setAttribute('class', 'btnModificar');
            aListaTarea.push({tarea: inputTarea.value});
            
            if(app.dato.save('tarea', aListaTarea)){
                inputTarea.value = '';
                
                alert('tarea guardada con exito');
                app.dato.show('tarea').forEach((elemento, pos)=>{
                    li.textContent = elemento.tarea + ' ' + pos;
                    ul.appendChild(li);
                    li.appendChild(containerButton);
                    containerButton.appendChild(btnEliminar);  
                    containerButton.appendChild(btnActualizar); 
                });
                console.log(aListaTarea)
            }else{
                console.log('error al guardar la informacion')
            }
            
        }
    });

    app.dato.show('tarea').forEach((element, pos) => {
        const btnEliminar = document.createElement('button')
        let li = document.createElement('li');
        const btnActualizar = document.createElement('button')
        const containerButton = document.createElement('div');
        containerButton.setAttribute('class', 'containerButtons');
        btnEliminar.innerHTML= `<i class="bi bi-trash-fill miColor"></i>`;
        btnEliminar.setAttribute('class', 'btnEliminar');
        btnActualizar.innerHTML = `<i class="bi bi-pencil-fill"></i>`
        btnActualizar.setAttribute('class', 'btnModificar');
        li.textContent = element.tarea + pos;
        ul.appendChild(li);
        li.appendChild(containerButton);
        containerButton.appendChild(btnEliminar); 
        containerButton.appendChild(btnActualizar); 
        aListaTarea.push(element);
        

    });


})(new App(new Todo(new Persistencia)), new Eventos)
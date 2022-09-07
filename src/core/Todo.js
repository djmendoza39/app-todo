//clase logica del negocio todo

export class Todo{
    todo;

    constructor(todo){
        this.todo = todo;
    }

    save(key, value){
        return this.todo.setItem(key, value); 
    }

    show(key){
        return this.todo.getItem(key);
    }

    update(){

    }

    delete(key){
        return this.todo.removeItem(key);
    }




}
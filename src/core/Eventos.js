export class Eventos{

    click(selector, action){
        document.querySelector(selector).addEventListener('click', action);
    }
}
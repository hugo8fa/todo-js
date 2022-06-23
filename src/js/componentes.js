import { Todo } from "../classes";
import { todoList } from "../index";

// Referencias en el html
const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');
export const countTodo = document.querySelector('.todo-count'); 

export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
        <li class="${ ( todo.completado ) ? 'completed' : '' }" data-id="${ todo.id }">
            <div class="view">
                <input class="toggle" type="checkbox" ${ ( todo.completado ) ? 'checked' : '' } >
                <label>${ todo.tarea }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `;

    // Crear el elemento html
    const div = document.createElement( 'div' );
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;
}

// Eventos 
txtInput.addEventListener( 'keyup' , ( event ) => {
    
    // Alternativa usar event.key === 'Enter' 
    if ( event.keyCode === 13 && txtInput.value.length > 0 ) {
        
        const nuevoTodo = new Todo( txtInput.value );
        // Agrega una nueva tarea al arreglo 
        todoList.nuevoTodo( nuevoTodo );
        crearTodoHtml( nuevoTodo );
        // console.log( nuevoTodo.tarea );
        txtInput.value = '';
    }
});

divTodoList.addEventListener( 'click', ( event ) => {

    // El local name hace referencia a un elemento html puede ser input label o button
    const nombreElemento = event.target.localName ; // input, label o button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute( 'data-id' );

    if ( nombreElemento.includes( 'input' ) ) { // click en el check
        todoList.marcarCompletado( todoId );
        // classList para acceder a las clases de un elemento
        // classList.Toggle para agregar o eliminar las clases
        todoElemento.classList.toggle( 'completed' );
    } else if ( nombreElemento.includes( 'button' ) ) { // Hay q borrar al usuario
        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento );
    }

});

btnBorrar.addEventListener( 'click', () => {

    todoList.eliminarCompletados();

    for ( let i = divTodoList.children.length - 1; i >= 0 ; i-- ) {
        const elemento = divTodoList.children[i];
        if ( elemento.classList.contains( 'completed' ) ) {
            divTodoList.removeChild( elemento );
        }
    }

});

ulFiltros.addEventListener( 'click', ( event ) => {

    // console.log( event.target.text );
    const filtro = event.target.text;

    if ( !filtro ) { return; }

    anchorFiltros.forEach( elem => elem.classList.remove( 'selected' ) );

    event.target.classList.add( 'selected' );

    for (const elemento of divTodoList.children ) {

        elemento.classList.remove( 'hidden' );
        
        const completado = elemento.classList.contains( 'completed' );

        switch ( filtro ) {
            case 'Pendientes':
                if ( completado ) {
                    elemento.classList.add( 'hidden' );
                }
                break;
            case 'Completados':
                if ( !completado ) {
                    elemento.classList.add( 'hidden' );
                }
                break;

            default:
                break;
        }
    }


});
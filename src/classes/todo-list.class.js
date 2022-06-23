
import { Todo } from "./todo.class";
import { countTodo } from "../js/componentes";

export class TodoList {

    todos = '';

    constructor() {
        // Este el arreglo quq contiene todas las tareas
        // this.todos = [];
        this.cargarLocalStorage();
        this.countPendientes();
    }

    nuevoTodo( todo ) {
        // Esta función recibe una tarea y la agraga al arreglo todos
        // Esta tarea sera un objeto de la clase todo
        this.todos.push( todo );
        this.guardarLocalStorage();
        this.countPendientes();
    }

    eliminarTodo( id  ) {
        this.todos = this.todos.filter( todo => todo.id !== parseInt( id ) );
        this.guardarLocalStorage();
        this.countPendientes();
    }

    marcarCompletado( id ) {
        
        for (const todo of this.todos ) {

            if ( todo.id === parseInt(id) ) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                this.countPendientes();
                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        localStorage.setItem( 'todo', JSON.stringify(this.todos) );
    }

    cargarLocalStorage() {

        this.todos = ( localStorage.getItem( 'todo' ) ) 
            ? JSON.parse( localStorage.getItem( 'todo' ) ) 
            : [] ;
        
        // this.todos = this.todos.map( obj => Todo.fromJson( obj ) );
        // Funcion acortada cuando se resibe un sólo argumento
        this.todos = this.todos.map( Todo.fromJson );

    }

    countPendientes() {
        let pendientes = 0;
        let countBox = countTodo.firstElementChild;
        for (let todo of this.todos) {
            (!todo.completado === true) ? pendientes++ : null;
        }
        countBox.innerHTML = pendientes;
    }
    
}


// importación usando index.js
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
// import { Todo } from "./class/todo.class";
// import { TodoList } from "./class/todo-list.class";
import './styles.css';

// En esta clase todoList se almacenan todas las tareas en un arreglo que contiene objetos 
export const todoList = new TodoList();

// const tarea = new Todo( 'Aprender JavaScript' );

// todoList.nuevoTodo( tarea );

// console.log( todoList );

// crearTodoHtml( tarea );

// localStorage.setItem( 'mi-key', 'ABC12345' );

// funcion de flecha corta con un solo argumento
todoList.todos.forEach( crearTodoHtml );

// const newTodo = new Todo( 'Aprender JavaScript' );
// todoList.nuevoTodo( newTodo );

// console.log( 'todos', todoList.todos );

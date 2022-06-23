
export class Todo {

    static fromJson({ id, tarea, completado, creado }) {

        const tempTodo = new Todo( tarea );

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = completado;

        return tempTodo; 

    }

    tarea = '';

    constructor( tarea ) {

        this.tarea = tarea;

        this.id = new Date().getTime(); // id: 1655929512771 Representación actual de la fecha y la hora minuto segundo milisegundo
        this.completado = false;
        this.creado = new Date();

    }
}

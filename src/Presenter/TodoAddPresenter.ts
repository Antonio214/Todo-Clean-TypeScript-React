import { title } from "process";
import { TodoModel } from "../Domain/Entities/Todo";
import { iCreateTodo } from "../Interfaces/iCreateTodo";
import { iTodoAddForm } from "../Interfaces/iTodoAddForm";

export class TodoAddPresenter implements iTodoAddForm {
    private readonly createTodo: iCreateTodo;

    constructor(createTodo: iCreateTodo) {
        this.createTodo = createTodo;
    }

    AddTodoCallback(title: String, description: String) {
        console.log("Creating Todo");

        let newTodo: TodoModel = this.createTodo.fromTitleAndDescription(title, description);
        return newTodo;
    }
}
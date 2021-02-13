import { title } from "process";
import { TodoModel } from "../Domain/Entities/Todo";
import { iCreateTodo } from "../Interfaces/iCreateTodo";
import { iTodoPresenter } from "../Interfaces/iTodoPresenter";

export class TodoPresenter implements iTodoPresenter {
    private readonly createTodo: iCreateTodo;

    constructor(createTodo: iCreateTodo) {
        this.createTodo = createTodo;
    }

    AddTodoCallback(title: String) {
        console.log("Creating Todo");

        let newTodo: TodoModel = this.createTodo.fromTitleAndDescription(title, '');
        console.log(newTodo);
    }
}
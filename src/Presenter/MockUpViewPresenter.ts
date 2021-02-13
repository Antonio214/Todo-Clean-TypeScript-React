import { TodoModel } from "../Domain/Entities/Todo";
import { iTodoViewPresenter } from "../Interfaces/iTodoViewPresenter";

export class MockupPresenter implements iTodoViewPresenter {

    private readonly todoList: TodoModel[];

    constructor() {
        this.todoList = [
            new TodoModel('Titulo 1', 'Descrição 1', false),
            new TodoModel('Titulo 2', 'Descrição 2', false),
            new TodoModel('Titulo 3', 'Descrição 3', false),
            new TodoModel('Titulo 4', 'Descrição 4', false)
        ]
    }

    loadTodoList() {
        return this.todoList;
    };

}
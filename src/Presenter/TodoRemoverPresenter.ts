import { TodoModel } from "../Domain/Entities/Todo";
import { iTodoRemoverPresenter } from "../Interfaces/iTodoRemoverPresenter";

export class TodoRemoverPresenter implements iTodoRemoverPresenter {
    constructor() {

    }

    removeCallBack(todoList: TodoModel[], indexToRemove: number) {
        let newTodoList = todoList;

        newTodoList.splice(indexToRemove, 1);

        return newTodoList;
    };


}
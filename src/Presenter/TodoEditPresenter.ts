import { TodoModel } from "../Domain/Entities/Todo";
import { iEditCase } from "../Interfaces/iEditCase";
import { iTodoEditPresenter } from "../Interfaces/iTodoEditPresenter";

export class TodoEditPresenter implements iTodoEditPresenter {
    constructor(private readonly editCase: iEditCase) {

    }

    toggleTodoCallback(todosList: TodoModel[], indexToToggle: number) {
        let todoToToggle = todosList[indexToToggle];

        if (todoToToggle.isComplete) {
            todosList[indexToToggle] = this.editCase.uncomplete(todoToToggle);
        } else {
            todosList[indexToToggle] = this.editCase.complete(todoToToggle);
        }

        return todosList;
    };

}
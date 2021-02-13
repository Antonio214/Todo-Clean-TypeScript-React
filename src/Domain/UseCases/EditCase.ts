import { iEditCase } from "../../Interfaces/iEditCase";
import { TodoModel } from "../Entities/Todo";

export class EditCase implements iEditCase {
    constructor() { }

    complete(todoToComplete: TodoModel) {
        let completedVersion = new TodoModel(todoToComplete.title, todoToComplete.description, true);
        return completedVersion;
    }

    uncomplete(todoToUncomplete: TodoModel) {
        let uncompletedVersion = new TodoModel(todoToUncomplete.title, todoToUncomplete.description, false);
        return uncompletedVersion;
    }
}
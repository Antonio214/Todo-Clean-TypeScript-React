import { TodoModel } from "../Domain/Entities/Todo";

export interface iEditCase {
    complete: (todoToComplete: TodoModel) => TodoModel,
    uncomplete: (todoToUncomplete: TodoModel) => TodoModel
}
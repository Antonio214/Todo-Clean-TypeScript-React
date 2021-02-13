import { TodoModel } from "../Domain/Entities/Todo";

export interface iTodoAddForm {
    AddTodoCallback: (title: String, description: String) => TodoModel,
}
import { TodoModel } from "../Domain/Entities/Todo";

export interface iCreateTodo {
    fromTitleAndDescription: (title: String, description: String) => TodoModel;
}
import { TodoModel } from "../Domain/Entities/Todo";

export interface iTodoViewPresenter {
    loadTodoList: () => TodoModel[]
}
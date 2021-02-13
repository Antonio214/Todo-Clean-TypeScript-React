import { TodoModel } from "../Domain/Entities/Todo";

export interface iTodoRemoverPresenter {
    removeCallBack: (todoList: TodoModel[], indexToRemove: number) => TodoModel[],
}
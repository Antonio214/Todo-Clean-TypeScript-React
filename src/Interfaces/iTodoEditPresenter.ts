import { TodoModel } from "../Domain/Entities/Todo"

export interface iTodoEditPresenter {
    toggleTodoCallback: (todosList: TodoModel[], indexToToggle: number) => TodoModel[],
}
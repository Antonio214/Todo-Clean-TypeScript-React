import { iCreateTodo } from "../../Interfaces/iCreateTodo";
import { TodoModel } from "../Entities/Todo";

export class CreateTodo implements iCreateTodo {
    fromTitleAndDescription(title: String, description: String): TodoModel {
        if (!title) {
            title = "Nova Tarefa";
        }

        if (!description) {
            description = "Sem Descrição";
        }

        return new TodoModel(title, description, false);
    }
}
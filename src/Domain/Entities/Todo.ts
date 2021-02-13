export class TodoModel {
    readonly title: String;
    readonly description: String;
    readonly isComplete: boolean;

    constructor(title: String, description: String, isComplete: boolean) {
        this.title = title;
        this.description = description;
        this.isComplete = isComplete;
    }
}
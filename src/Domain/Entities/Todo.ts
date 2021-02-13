export class TodoModel {
    readonly title: String;
    readonly description: String;
    readonly isComplete: Boolean;

    constructor(title: String, description: String, isComplete: Boolean) {
        this.title = title;
        this.description = description;
        this.isComplete = isComplete;
    }
}
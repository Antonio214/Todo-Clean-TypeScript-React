export class TodoModel {
    private readonly title: String;
    private readonly description: String;
    private readonly isComplete: Boolean;

    constructor(title: String, description: String, isComplete: Boolean) {
        this.title = title;
        this.description = description;
        this.isComplete = isComplete;
    }
}
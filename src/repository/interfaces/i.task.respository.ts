import Task from "../../model/task.model"

export default interface ITaskRepository {
    getTasks(): Array<Task>
    getTask(id: string): Task | undefined
    addNewTask(newTask: Task): void
    deleteTask(id: string): void
    getTasksByUser(id: string): Array<Task>
}
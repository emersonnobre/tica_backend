import Task from "../../model/task.model"

export default interface ITaskRepository {
    getTasks(): Promise<Array<Task>>
    getTask(id: string): Promise<Task | null>
    addNewTask(newTask: Task): Promise<Task>
    deleteTask(task: Task): Promise<Task>
}
import { TaskRequest } from '../../dto/requests/task.request'
import Task from '../../model/task.model'

export default interface ITaskService {
    getTasks(): Array<Task>
    getTask(id: string): Task | undefined
    addNewTask(newTask: TaskRequest): void
    deleteTask(id: string): void
}
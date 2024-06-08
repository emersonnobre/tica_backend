import { TaskRequest } from '../../util/requests/task.request'
import Task from '../../model/task.model'

export default interface ITaskService {
    getTasks(): Promise<Array<Task>>
    getTask(id: string): Promise<Task | null>
    addNewTask(newTask: TaskRequest): Promise<string | null>
    deleteTask(id: string): Promise<void>
}
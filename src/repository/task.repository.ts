import { injectable } from 'tsyringe';
import Task from '../model/task.model';
import ITaskRepository from './interfaces/i.task.respository';

@injectable()
export default class TaskRepository implements ITaskRepository {
    tasks: Array<Task> = []

    getTasks(): Array<Task> {
        return this.tasks
    }

    getTask(id: string): Task | undefined {
        return this.tasks.find(task => task.id == id)
    }

    getTasksByUser(id: string): Array<Task> {
        return this.tasks.filter(task => task.owner.id == id)
    }

    addNewTask(newTask: Task): void {
        this.tasks.push(newTask)
    }

    deleteTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id != id)
    }
}
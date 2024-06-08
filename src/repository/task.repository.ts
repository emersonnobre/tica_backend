import { injectable } from 'tsyringe';
import { Repository } from 'typeorm';
import Task from '../model/task.model';
import ITaskRepository from './interfaces/i.task.respository';
import { dataSource } from '../config/database';

@injectable()
export default class TaskRepository implements ITaskRepository {
    tasks: Array<Task> = []
    _taskRepository: Repository<Task>
    
    constructor() {
        this._taskRepository = dataSource.getRepository(Task)    
    }

    getTasks(): Promise<Array<Task>> {
        return this._taskRepository.find()
    }

    getTask(id: string): Promise<Task | null> {
        return this._taskRepository.findOneBy({ id })
    }

    addNewTask(newTask: Task): Promise<Task> {
        return this._taskRepository.save(newTask)
    }

    deleteTask(task: Task): Promise<Task> {
        return this._taskRepository.remove(task)
    }
}
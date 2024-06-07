import { injectable, inject } from 'tsyringe';
import { v1 } from 'uuid'
import { TaskRequest } from '../dto/requests/task.request';
import Task from '../model/task.model';
import ITaskService from './interfaces/i.task.service';
import TaskRepository from '../repository/task.repository';
import ITaskRepository from '../repository/interfaces/i.task.respository';
import Priority from '../dto/enum/priority.enum';
import Category from '../dto/enum/category.enum';
import UserRepository from '../repository/user.repository';
import IUserRepository from '../repository/interfaces/i.user.repository';

@injectable()
export default class TaskService implements ITaskService {
    constructor(
        @inject(TaskRepository) private taskRepository: ITaskRepository,
        @inject(UserRepository) private userRepository: IUserRepository
    ) {}

    getTasks(): Task[] {
        return this.taskRepository.getTasks()
    }

    getTask(id: string): Task | undefined {
        return this.taskRepository.getTask(id)
    }

    addNewTask(taskRequest: TaskRequest): void {
        const owner = this.userRepository.getUser(taskRequest.userId)

        if (owner == undefined) return
        
        const task: Task = new Task(
            v1(), 
            taskRequest.title, 
            Priority.intToPriority(taskRequest.priority), 
            Category.intToCategory(taskRequest.category),
            owner
        )
        this.taskRepository.addNewTask(task)
    }

    deleteTask(id: string): void {
        this.taskRepository.deleteTask(id)
    }
}
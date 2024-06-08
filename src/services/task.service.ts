import { injectable, inject } from 'tsyringe';
import { v1 } from 'uuid'
import { TaskRequest } from '../util/requests/task.request';
import Task from '../model/task.model';
import ITaskService from './interfaces/i.task.service';
import TaskRepository from '../repository/task.repository';
import ITaskRepository from '../repository/interfaces/i.task.respository';
import Priority from '../util/enum/priority.enum';
import Category from '../util/enum/category.enum';
import UserRepository from '../repository/user.repository';
import IUserRepository from '../repository/interfaces/i.user.repository';

@injectable()
export default class TaskService implements ITaskService {
    constructor(
        @inject(TaskRepository) private taskRepository: ITaskRepository,
        @inject(UserRepository) private userRepository: IUserRepository
    ) {}

    async getTasks(): Promise<Task[]> {
        try {
            const tasks = await this.taskRepository.getTasks()
            return tasks
        } catch(err) {
            console.log(err)
            return []
        }
    }

    async getTask(id: string): Promise<Task | null> {
        try {
            return await this.taskRepository.getTask(id)
        } catch(err) {
            console.log(err)
            return null
        }
    }

    async addNewTask(taskRequest: TaskRequest): Promise<string | null> {
        try {
            const owner = await this.userRepository.getUser(taskRequest.userId)
            if (owner == undefined) return null
            const task: Task = new Task(
                v1(), 
                taskRequest.title, 
                Priority.intToPriority(taskRequest.priority), 
                Category.intToCategory(taskRequest.category),
                owner
            )
            this.taskRepository.addNewTask(task)
            return task.id
        } catch(err) {
            console.log(err)
            return null
        }
    }

    async deleteTask(id: string): Promise<void> {
        const task = await this.taskRepository.getTask(id)
        if (!task) return
        await this.taskRepository.deleteTask(task)
    }
}
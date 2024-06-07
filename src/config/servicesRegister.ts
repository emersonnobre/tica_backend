import { container } from 'tsyringe'
import TaskRepository from '../repository/task.repository'
import ITaskRepository from '../repository/interfaces/i.task.respository'
import ITaskService from '../services/interfaces/i.task.service'
import TaskService from '../services/task.service'
import { TaskController } from '../api/task.routes'
import { UserController } from '../api/user.routes'

container.registerSingleton<ITaskRepository>(TaskRepository)

container.registerSingleton<ITaskService>(TaskService)

container.registerSingleton(TaskController)
container.registerSingleton(UserController)
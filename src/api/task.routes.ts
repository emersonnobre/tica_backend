import { Router, Request, Response } from 'express'
import { container, inject, injectable } from 'tsyringe'
import { TaskRequest } from '../dto/requests/task.request'
import TaskService from '../services/task.service'
import ITaskService from '../services/interfaces/i.task.service'

@injectable()
export class TaskController {
    constructor(@inject(TaskService) private taskService: ITaskService) {}

    getTasks(_: Request, res: Response) {
        res.json(this.taskService.getTasks())
    }

    addNewTask(req: Request, res: Response) {
        const taskRequest: TaskRequest = req.body
        this.taskService.addNewTask(taskRequest)
        res.status(201).json({ id: 'as' })
    }

    getTask (req: Request, res: Response) {
        const taskId = req.params.id as string
        if (taskId == undefined)
            return res.sendStatus(400)
        res.json(this.taskService.getTask(taskId))
    }

    deleteTask(req: Request, res: Response) {
        const taskId = req.params.id as string
        if (taskId == undefined)
            return res.sendStatus(400)
        this.taskService.deleteTask(taskId)
        res.sendStatus(200)
    }
}

const router = Router()
const taskController = container.resolve(TaskController)

router.route('/task')
    .post(taskController.addNewTask.bind(taskController))
    .get(taskController.getTasks.bind(taskController))

router.route('/task/:id')
    .get(taskController.getTask.bind(taskController))
    .delete(taskController.deleteTask.bind(taskController))

export default router
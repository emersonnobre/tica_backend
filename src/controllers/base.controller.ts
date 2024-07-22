import { z } from 'zod'
import ApiResponse from '../util/responses/api.response'

export default abstract class BaseController {
  protected validateRequest(validator: z.AnyZodObject, request: any) {
    const v = validator.safeParse(request)
    if (!v.success) {
      const { issues } = v.error
      const messages = issues.map(issue => issue.message)
      return { status: false, response: new ApiResponse<null>(false, 400, messages.join('\n'), null) }
    }
    return { status: true }
  }
}
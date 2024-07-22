import { z } from "zod";
import { getMaxLengthMessage, getRequiredMessage } from "./message.factory";

export const CreateEmployeeValidator = z.object({
  name: z.string({ required_error: getRequiredMessage("o nome do funcionário") }).max(100, getMaxLengthMessage("nome", 100)),
})

import { z } from "zod";
import { getInvalidTypeMessage, getMaxLengthMessage, getMinimumValueMessage, getRequiredMessage } from "./message.factory";

export const CreateTransactionValidator = z.object({
  reason: z.string({ required_error: getRequiredMessage("motivo") }).max(200, getMaxLengthMessage("motivo", 200)),
  quantity: z.number({ required_error: getRequiredMessage("quantidade"), invalid_type_error: getInvalidTypeMessage("quantidade", "numérico") }),
  salePrice: z.number({ invalid_type_error: getInvalidTypeMessage("preco de compra", "numérico") }).optional(),
  type: z.number({ required_error: getRequiredMessage("tipo de movimentacão"), invalid_type_error: getInvalidTypeMessage("tipo de movimentacão", "numérico") }),
  createdById: z.string({ required_error: getRequiredMessage("funcionário") }),
})
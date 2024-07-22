import { z } from "zod";
import { getInvalidTypeMessage, getMaxLengthMessage, getMinimumValueMessage, getRequiredMessage } from "./message.factory";

export const CreateProductValidator = z.object({
  name: z.string({ required_error: getRequiredMessage("nome") }).max(100, getMaxLengthMessage("nome", 100)),
  purchasePrice: z.number({ required_error: getRequiredMessage("preco de compra"), invalid_type_error: getInvalidTypeMessage("preco de compra", "numérico") }),
  salePrice: z.number({ invalid_type_error: getInvalidTypeMessage("preco de compra", "numérico") }).optional(),
  categoryId: z.number({ required_error: getRequiredMessage("categoria"), invalid_type_error: getInvalidTypeMessage("categoria", "numérico") }),
  stock: z.number({ required_error: getRequiredMessage("estoque"), invalid_type_error: getInvalidTypeMessage("estoque", "numérico") }).gte(0, getMinimumValueMessage("estoque", 0)),
  isFeedstock: z.boolean({ required_error: "Informe se é matéria prima ou não!" }),
  createdById: z.string({ required_error: getRequiredMessage("funcionário") }),
})

export const UpdateProductValidator = z.object({
  name: z.string({ required_error: getRequiredMessage("nome") }).max(100, getMaxLengthMessage("nome", 100)),
  purchasePrice: z.number({ required_error: getRequiredMessage("preco de compra"), invalid_type_error: getInvalidTypeMessage("preco de compra", "numérico") }),
  salePrice: z.number({ invalid_type_error: getInvalidTypeMessage("preco de compra", "numérico") }).optional(),
  categoryId: z.number({ required_error: getRequiredMessage("categoria"), invalid_type_error: getInvalidTypeMessage("categoria", "numérico") }),
  isFeedstock: z.boolean({ required_error: "Informe se é matéria prima ou não!" }),
  updatedById: z.string({ required_error: getRequiredMessage("funcionário") }),
})
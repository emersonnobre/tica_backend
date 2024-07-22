import { z } from "zod";
import { getInvalidTypeMessage, getMaxLengthMessage, getRequiredMessage } from "./message.factory";

export const CreateCustomer = z.object({
  name: z.string({ required_error: getRequiredMessage("o nome do cliente") }).max(100, getMaxLengthMessage("nome", 100)),
  cpf: z.string({ required_error: getRequiredMessage("o CPF do cliente!") }).max(11,  getMaxLengthMessage("CPF", 11)),
  phone: z.string().max(20, getMaxLengthMessage("telefone", 20)).optional(),
  email: z.string().max(100, getMaxLengthMessage("e-mail", 100)).email("Formato do e-mail inválido").optional(),
  socialMedia: z.string().max(70,  getMaxLengthMessage("usuário do instagram", 70)).optional(),
  birthday: z.string().date("Formato da data de aniversário inválida!").optional(),
  wishList: z.string().max(1000,  getMaxLengthMessage("lista de desejos", 1000)).optional(),
  createdById: z.string({ required_error: getRequiredMessage("o id do funcionário!") }),
  addresses: z.array(z.object({
    street: z.string({ required_error: getRequiredMessage("a rua do endereco!") }).max(200,  getMaxLengthMessage("rua", 200)),
    neighborhood: z.string({ required_error: getRequiredMessage("o bairro do endereco!") }).max(70,  getMaxLengthMessage("bairro", 70)),
    cep: z.string().max(8,  getMaxLengthMessage("CEP", 8)).optional(),
  })).optional()
})

export const UpdateCustomerValidator = z.object({
  name: z.string({ required_error: getRequiredMessage("o nome do cliente!") }).max(100, getMaxLengthMessage("nome", 100)),
  phone: z.string().max(20,  getMaxLengthMessage("telefone", 20)).optional(),
  email: z.string().max(100,  getMaxLengthMessage("e-mail", 100)).email("Formato do e-mail inválido").optional(),
  socialMedia: z.string().max(70,  getMaxLengthMessage("usuário do instagram", 70)).optional(),
  birthday: z.string().date("Formato da data de aniversário inválida!").optional(),
  wishList: z.string().max(1000,  getMaxLengthMessage("lista de desejos", 1000)).optional(),
  updatedById: z.string({ required_error: getRequiredMessage("o id do funcionário!") }),
  addresses: z.array(z.object({
    id: z.number({ invalid_type_error: getInvalidTypeMessage("O id do endereco", "numérico") }).optional(),
    street: z.string({ required_error: getRequiredMessage("a rua do endereco!") }).max(200,  getMaxLengthMessage("rua", 200)),
    neighborhood: z.string({ required_error: getRequiredMessage("o bairro do endereco!") }).max(70,  getMaxLengthMessage("bairro", 70)),
    cep: z.string().max(8,  getMaxLengthMessage("CEP", 8)).optional(),
  })).optional()
})
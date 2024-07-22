import { z } from "zod";

export const CreateCustomer = z.object({
  name: z.string({ required_error: "Informe o nome do cliente!" }).max(100, "O nome deve ter no máximo 100 caracteres!"),
  cpf: z.string({ required_error: "Informe o CPF do cliente!" }).max(11,  "O CPF deve ter no máximo 11 caracteres!"),
  phone: z.string().max(20,  "O telefone deve ter no máximo 20 caracteres!").optional(),
  email: z.string().max(100,  "O e-mail deve ter no máximo 100 caracteres!").email("Formato do e-mail inválido").optional(),
  socialMedia: z.string().max(70,  "O usuário do instagram deve ter no máximo 70 caracteres!").optional(),
  birthday: z.string().date("Formato da data de aniversário inválida!").optional(),
  wishList: z.string().max(1000,  "A lista de desejos deve ter no máximo 1000 caracteres!").optional(),
  createdById: z.string({ required_error: "Informe o id do funcionário!" }),
  addresses: z.array(z.object({
    street: z.string({ required_error: "Informe a rua do endereco!" }).max(200,  "A rua deve ter no máximo 200 caracteres!"),
    neighborhood: z.string({ required_error: "Informe o bairro do endereco!" }).max(70,  "O bairro deve ter no máximo 70 caracteres!"),
    cep: z.string().max(8,  "O CEP deve ter no máximo 8 caracteres!").optional(),
  })).optional()
})
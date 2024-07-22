export function getRequiredMessage(subject: string): string {
  return `Informe o campo ${subject}!`
}

export function getInvalidTypeMessage(subject: string, type: string): string {
  return `O campo ${subject} deve estar no formato ${type}!`
}

export function getMaxLengthMessage(subject: string, maxLength: number): string {
  return `O campo ${subject} deve ter no máximo ${maxLength} caracteres!`
}

export function getMinimumValueMessage(subject: string, minimum: number): string {
  return `O campo ${subject} deve ser maior ou igual a ${minimum}!`
}
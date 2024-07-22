export function getRequiredMessage(subject: string): string {
  return `Informe ${subject}!`
}

export function getInvalidTypeMessage(subject: string, type: string): string {
  return `${subject} deve estar no formato ${type}!`
}

export function getMaxLengthMessage(subject: string, maxLength: number): string {
  return `O campo ${subject} deve ter no máximo ${maxLength} caracteres!`
}
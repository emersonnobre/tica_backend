import { genSalt, hash, compare } from 'bcrypt'

export class PasswordManager {
    static async generate(plainPassword: string): Promise<string> {
        const saltRounds: number = 10
        const salt = await genSalt(saltRounds)
        return hash(plainPassword, salt)
    }

    static async compare(ecryptedPassword: string, passwordToVerify: string): Promise<boolean> {
        return compare(passwordToVerify, ecryptedPassword)
    }
}
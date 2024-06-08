import jwt from 'jsonwebtoken'

export class TokenManager {
    constructor() {
        console.log(process.env.JWT_SECRET)
    }

    static create(payload: object) {
        return jwt.sign(payload, process.env.JWT_SECRET ?? '', { expiresIn: '5d' })
    }

    static verify(token: string, cb: Function) {
        jwt.verify(token, process.env.JWT_SECRET ?? '', (err, data) => {
            if (err) throw new Error('Invalid credentials!')
            cb(data)
        })
    }
}
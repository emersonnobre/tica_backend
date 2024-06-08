import { Request, Response, NextFunction } from 'express'
import { TokenManager } from '../../util/security/token'

export function auth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    req.user = { id: '' }

    if (!token)
        return res.status(401).json({ message: 'Invalid credentials!' })
    try {
        TokenManager.verify(token, (data: { id: string }) => { 
            req.user = data
            next()
        })
    } catch(err) {
        res.status(401).json({ message: 'Invalid credentials!' })
    }
}
import { Request, Response, NextFunction } from 'express'
import { TokenManager } from '../util/security/token'

export function auth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    // const token = authHeader && authHeader.split(' ')[1] todo: voltar a logica do token, retirada temporariamente para facilitar o desenvolvimento
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTcyNTVkLTQzY2MtNGU2Yy1iN2M1LWNiOTRkNTFiNmRlOCIsImlhdCI6MTcyMTQwOTgyNCwiZXhwIjoxNzIxODQxODI0fQ.f_cIPTbxVWf6yL6FiEM5CMX57JSY7wc6zLUHKHPPubM'
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
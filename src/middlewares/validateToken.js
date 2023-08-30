import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from "../config.js"


export const authRequired = (req, res, next) => {
  const authorization = req.get('authorization')
  let token = ''

  if (authorization && authorization.toLocaleLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }

  if (!token)
    return res.status(401).json({ message: "No hay token, autorizacion denegada" })

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Token inválido" })
    req.user = user
    next()

  })

}
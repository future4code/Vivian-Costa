import { compare } from "../../services/hashManager"
import { Request, Response } from "express"
import connection from "../../connection"
import { generateToken } from "../../services/authenticator"
import { userCredential } from "../../types"

export default async function login(
    req: Request,
    res: Response
    ): Promise<void> { 
        try {

            const {email, password_user}: userCredential = req.body

            if(!email || !password_user){
                res.statusCode = 422
                throw new Error ("'email' e 'senha' são obrigatórios ")
            }

            const [user] = await connection('register_user')
            .where({email})

            if(!user) {
                res.statusCode = 404
                throw new Error ("Não encontrado")
            }

            const hashCompare = await compare(password_user, user.password_user)

            if(!hashCompare) {
                res.statusCode = 401
                throw new Error ("Senha incorreta")
            }

            const token: string = generateToken ({id: user.id})

            res.send({token})
            
        } catch (error) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
             } else {
                res.send({ message: error.message })
             }        
    
        }  
}
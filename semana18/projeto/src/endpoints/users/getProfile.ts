import { Request, Response } from "express"
import connection from "../../connection"
import { getTokenData } from "../../services/authenticator";

export default async function getProfile(
    req: Request,
    res: Response
    ): Promise<void> {
    
        try {

            const token: string = req.headers.authorization!

            const tokenData = getTokenData(token)

            const[user] =  await connection('register_user')
                .where({id: tokenData?.id})
                
            const {id, email, name_user} = user    
            
            res.send({id, email, name_user})    

        } catch (error) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
             } else {
                res.send({ message: error.message || error.sqlMessage })
             }            
        }
}
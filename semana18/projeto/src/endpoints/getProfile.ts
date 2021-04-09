import { Request, Response } from "express"
import connection from "../connection"

export default async function getProfile(
    req: Request,
    res: Response
    ): Promise<void> {
    
        try {
            
            await connection.raw(`
            SELECT  id, name_user, email FROM register_user `) ;
         

        } catch (error) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
             } else {
                res.send({ message: error.message || error.sqlMessage })
             }            
        }
}
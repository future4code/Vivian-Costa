import { Request, Response } from "express"
import connection from "../../connection"
import { getTokenData } from "../../services/authenticator"
import generateId from "../../services/idGenerator"

export default async function createRecipe(
    req: Request,
    res: Response
    ): Promise<void> {
        try {
            const token = req.headers.authorization
            const {title, description} = req.body

            const tokenData = getTokenData(token!)
            const id =generateId()

            const createdAt = new Date()

            await connection('cookenu_recipes')
            .insert({
                id,
                title,
                description,
                created_at: createdAt,
                author_id: tokenData!.id
            })

            res.send("Receita criada com sucesso!")
            
        } catch (error) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
             } else {
                res.send({ message: error.message || error.sqlMessage })
             }            

        }
    }

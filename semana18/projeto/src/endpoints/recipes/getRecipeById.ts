import { Request, Response } from "express"

export default async function getRecipeById(
    req: Request,
    res: Response
    ): Promise<void> {
        try {
            
            
        } catch (error) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
             } else {
                res.send({ message: error.message || error.sqlMessage })
             }            

        }
    }

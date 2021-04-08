import { Request, Response } from "express"
import connection from "../connection"
import insertUser from "../data/insertUser";

export default async function createUser(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const {name, email, password} = req.body
        let errorCode = 400;

        if(!name || !email || !password){
            errorCode = 422;
            throw new Error("Campos obrigatorios!")
        }
        if(password < 6){
            errorCode = 422;
            throw new Error("Senha deve conter no minimo 6 caracteres!")
        }

        res.status(201).send({ message: 'Registration successfully created!' })

        await insertUser(
            req.body.name,
            req.body.email,
            req.body.password
        )
        
    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message })
         } else {
            res.send({ message: error.message })
         }        
    }
}
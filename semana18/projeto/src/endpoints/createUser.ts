import { Request, Response } from "express"
import connection from "../connection"
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { registerUser } from "../types";

export default async function createUser(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const {name_user, email, password_user} = req.body
        let errorCode = 400;

        if(!name_user || !email || !password_user){
            errorCode = 422;
            throw new Error("Campos obrigatorios!")
        }
        if(password_user < 6){
            errorCode = 422;
            throw new Error("Senha deve conter no minimo 6 caracteres!")
        }

        const [user] = await connection('register_user')
            .where({email})
        
        if(user) {
            res.statusCode = 409
            throw new Error('Email já cadastrado')
        }    

        const id: string = generateId()

        const newUser: registerUser = {id, name_user, email, password_user}

        await connection('register_user')
        .insert(newUser)

        const token: string = generateToken({id})

        res.status(201).send({ newUser, token })
        
    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message })
         } else {
            res.send({ message: error.message })
         }        
    }
}
import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import {generateId} from "../services/idGenerator";
import { signUp, user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body

      if ( !email || email.indexOf("@") === -1) {
         res.statusCode = 422
         throw new Error("Email invalido")
      }

      if ( !password || password.length < 6) {
         res.statusCode = 422
         throw new Error("Senha invalida")
      }


      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }
      
      const userData = {
         email: req.body.email,
         password: req.body.password
      }
      const id: string = generateId()


      const newUser: signUp = ( userData.email, userData.password )
      const token = generateToken({id})

      await connection('to_do_list_users')
         .insert(newUser)

      res.status(201).send({ newUser, token })
      
         // if (!req.body.email || req.body.email.indexOf("@") === -1) {
         //   throw new Error("Invalid email");
         // }
     
         // if (!req.body.password || req.body.password.length < 6) {
         //   throw new Error("Invalid password");
         // }
     
         // const userData: signUp = {
         //   email: req.body.email,
         //   password: req.body.password,
         // };
     
         // const id = generateId();
     
       
         // await createUser = (id, userData.email, userData.password);
     
         // const token = generateToken({
         //   id,
         // });
     
         // res.status(200).send({
         //   token,
         // });

   } catch (error) {
      
      if (res.statusCode === 200) {
         res.status(500).send({ message: error.message })
      } else {
         res.send({ message: error.message })
      }
   }
}
import { SignupInputDTO, user } from "../entities/User";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager"
import { UserDatabase } from "../data/UserDatabase";
import { TokenManager } from "../services/TokenManager";

export class UserBusiness {
    async signup(input: SignupInputDTO): Promise<string>{

        try {
            if (!input.name || !input.email || !input.password) {

                throw new Error('"name", "email" and "password" must be provided')
            }
            const idGenerator = new IdGenerator()
            const id: string = idGenerator.generateId()
       
             const hashMagager = new HashManager()
             const cypherPassword = await hashMagager.hash(input.password)
            
             const user: user = {
                 id,
                 name: input.name,
                 email: input.email,
                 password: cypherPassword
             } 


             const userDatabase = new UserDatabase()
             await userDatabase.insertUser(user)

             const tokenManager = new TokenManager()
             const token: string = tokenManager.generateToken({ id })

             return token
    
        } catch (error) {
            throw new Error(error.message)
        }
    }
}
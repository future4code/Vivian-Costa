import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { bankUsers } from './clients'

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/users/create", (req: Request, res: Response) =>{
    try{

        const {name, cpf, birthdate} =req.body
        const[day, month, year] = birthdate.split("/")
        const birthDate: Date = new Date(`${year}-${month}-${day}`)

        const ages: number = Date.now() - birthDate.getTime()
        const newAge: number = ages / 1000 / 60 / 60 / 24 / 365

        if(newAge < 18){
            res.statusCode = 406
            throw new Error("Age must be over 18 years old!")
        }

        bankUsers.push({
            name,
            cpf,
            birthDate,
            balance: 0,
            statement: []
        })
        res.status(201).send("Account created successfully!")

    } catch(error) {
        console.log(error)
        res.send({message: error.message})
    }
})

app.get("/users/all", (req: Request, res: Response) => {
    try{
        if(!bankUsers.length){
            res.statusCode = 404
            throw new Error("Account not find")
        }
        res.status(200).send(bankUsers)
    } catch (error){
         res.send({message: error.message})
    }
  
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

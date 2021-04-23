import { BandDatabase } from "../data/BandDatabase";
import { InvalidInputError } from "../error/InvalidInputError";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { Band, BandInputDTO } from "../model/Band";
import { UserRole } from "../model/User";
import { IdGenerator } from "../services/IdGenerator"

export class BandBusiness {
    constructor (
        private bandDarabase: BandDatabase,
        private idGenerator: IdGenerator,
        private authenticator: AudioContext
     ) {}

     async registerBand(input: BandInputDTO, token: string) {
         const tokenData = this.authenticator.getData(token)

        if(tokenData.role !== UserRole.ADMIN){
             throw new UnauthorizedError("Only admins can acess this feauture")
        }

        if (!input.name || !input.mainGenre || !input.responsible) {
             throw new InvalidInputError("Invalid input to registerBand")
        }

        await this.bandDarabase.createBand(
            Band.toBand({
                ...input,
                id: this.idGenerator.generate()
            })!
        )
     }
}
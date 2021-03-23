
export type Transactions = {
    value: number,
    date: Date,
    description: string
}

export type AccountData = {
    name: string,
    cpf: string,
    birthDate: Date,
    balance: number,
    statement: Array<Transactions>
}




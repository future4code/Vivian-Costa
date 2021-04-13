export type authenticationData = {
    id: string
}

export type userCredential = {
    email: string,
    password_user: string
}

export type userPersonalInfo = {
    name_user: string,
}

export type recipe = {
    id: string,
    title: string,
    description: string,
    createAt: string,
    authorId: string
}

export type user = authenticationData & userCredential & userPersonalInfo
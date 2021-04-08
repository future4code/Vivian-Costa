import connection from "../connection";

export default async function insertUser(
    name: string,
    email: string,
    password: string
) {
    await connection.insert({
        name,
        email,
        password
    }).into('register_user')
}
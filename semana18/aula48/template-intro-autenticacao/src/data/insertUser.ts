import connection from "../connection";

const userTableName = "User";

export default async function createUser(
  id: string,
  email: string,
  password: string
) {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
}

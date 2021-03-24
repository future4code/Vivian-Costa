import connection from '../connection'


  //B
  const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
  }

  console.log(searchActor);
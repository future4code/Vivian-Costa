import connection from '../connection'


const getActorById = async (
    id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }
  
  console.log( getActorById("001") )

//EXERCICIO 1

  /*Resposta A: 
  
  */


  

  export default getActorById
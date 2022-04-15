const pool = require("./config")

const insertCurso = async(nombre,nivel,fecha,duracion) => {
    const client = await pool.connect()
    const query = {
        text: "INSERT INTO cursos (nombre,nivel,fecha,duracion) values($1,$2,$3,$4) RETURNING*;",
        values: [nombre,nivel,fecha,duracion]
    }
    try{
        const respuesta = await client.query(query);
 
        return respuesta.rows;
    }catch(error){
        console.log(error)
        return error
    }finally{
        client.release()
    }
}


const getCursos = async() => {
    const client = await pool.connect()
    try{
        const respuesta = await client.query("SELECT * FROM cursos;");
        return respuesta.rows;
    }catch(error){
        console.log(error)
        return error
    }finally{
        client.release()
    }
}

const putCurso = async(nombre,nivel,fecha,duracion) => {
    const client = await pool.connect()
    const query = {
        text: "INSERT INTO cursos (nombre,nivel,fecha,duracion) values($1,$2,$3,$4) RETURNING*;",
        values: [nombre,nivel,fecha,duracion]
    }
    try{
        const respuesta = await client.query(query);
        return respuesta.rows;
    }catch(error){
        console.log(error)
        return error
    }finally{
        client.release()
    }
}


const deleteCurso = async(id) => {
    const client = await pool.connect()
    const query = {
        text: "DELETE FROM cursos WHERE id = $1 RETURNING*;",
        values: [id]
    }
    try{
        const respuesta = await client.query(query);
        return respuesta.rows;
    }catch(error){
        console.log(error)
        return error
    }finally{
        client.release()
    }
}



module.exports = {
    getCursos,
    insertCurso,
    deleteCurso,
    putCurso};
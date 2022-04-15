const express = require("express");
const {getCursos, insertCurso, deleteCurso, putCurso} = require("./db/database")
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"));
app.use(express.json())



app.post("/curso" , async(req,res) => {
    const {nombre,nivelTecnico,fechaInicio,duracion} = req.body;
   await insertCurso(nombre,nivelTecnico,fechaInicio,duracion) 
   return res.sendFile(__dirname + "/public/index.html")  
 })

app.get("/cursos", async(req,res) => { 
    const respuesta = await getCursos();
    return res.json(respuesta); 
    
 })


app.put("/curso", async(req,res) => {
    const {nombre,nivelTecnico,fechaInicio,duracion} = req.body
   
    await putCurso(nombre,nivelTecnico,fechaInicio,duracion)
    return res.sendFile(__dirname + "/public/index.html")  

 })

app.delete("/curso/:id", async(req,res) => {
    const {id} = req.params;
    await deleteCurso(id)
   return res.sendFile(__dirname + "/public/index.html")  

})

 app.listen(3000, () => console.log("servidor andando 3000"))
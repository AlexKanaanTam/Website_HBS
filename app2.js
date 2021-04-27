
const http = require("http");

http.createServer((req, res)=>{
    
    // res.setHeader("Content-Disposition", "attachment; filename=lista.csv" )
    // res.writeHead(404, {"Content-Type": "application/json"})

    // const persona={
    //     id: 1,
    //     nombre: "Alex"
    // }

    // res.write(JSON.stringify(persona))
    res.write("Hola mundo")
    // res.write("1, Alex")
    // res.write("2, Emil")
    // res.write("3, Joao")
    // res.write("4, Ugur")
    res.end()

}).listen(8080) 


console.log("Escuchando en el puerto 8080")







//El puerto 8080 es el que usmaos en pruebas como desarrollo
//El método ".write" se usa con el argumento "res" para enviar una respuesta
//Tenemos que usar el paquete http incorporado en Node
//Tenemos que indicar cuando nuestra respuesta ha terminado, así pues 
//El "writeHead" haria como de "res.status(404)" en este caso en Node deberemos poner res.writeHead(404)
//Los headers son aquellos valores/llaves que incluimos en nuestro URL
//Para texto: text/plain  Para json: application/json Para celdas: application/csv


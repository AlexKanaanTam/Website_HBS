const express = require('express')
const app = express();
const hbs = require('hbs');
require("dotenv").config();
const port= process.env.PORT

//debemos requerir el hbs, mas tarde
//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials'); //el registerPartals solo redirecciona a la carpeta con parciales

//Servir contenido estatico

app.use(express.static("public")) //middleware

 
app.get('/', (req, res)=> {     //A esto le llamamos controlador

  res.render('home', {
      nombre: "Alex Kanaan",
      titulo: "Curso node"
  });

})

app.get('/generic', (req, res)=> {     //A esto le llamamos controlador

    res.render('generic', {
        nombre: "Alex Kanaan",
        titulo: "Curso node"
    });

})

app.get('/elements', (req, res)=> {     //A esto le llamamos controlador

    res.render('elements', {
        nombre: "Alex Kanaan",
        titulo: "Curso node"
    });
  
})




app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html')
  })
 
app.listen(3000)

app.get("/generic", function (req, res) {
    res.sendFile(__dirname + '/public/generic.html')
  })
 
app.listen(port, ()=>{
    console.log(`App siendo escuchada en el puerto ${port}`)
})


//En EXPRESS debemos definir todas las rutas, sino marcara un error 404 en nuestro localhost

//Si donde las rutas ponemos un "*" esto indicara que la ruta sea todas menos las indicadas con anterioridad

//Creamos un folder Public, que significa que todo el que sepa el URL puede entrar

//Una vez creado el HTML en public no aparece nada porque nosotros le tenemos que decir a Express que la haga public
//mediante un Middleware

//Si hacemos el middleware linkando con html public, la ruta inicial se solapa dejandola inutilizada

//Si queremos hacer un HTML desde Hola mundo lo que podemos hacer es crear otra carpeta en public con otro index
//El nombre de la carpeta de public DEBE SER IGUAL al path que asignamos

//Si queremos redireccionar una respuesta a un archivo debemos usar "sendFile()" con PATH ABSOLUTO

//Los estilos CSS los importamos directamente en el HTML que deseemos

//Para evitar que el endpoint salga con el index.html, podemos modificar el path en el index.html con el endpoint indicado en Node

//Pasos uso HBS: 
    //1. Agrupamos todo el html estatico en una carpeta llamada PUBLIC que contenga otra carpeta llamada TEMPLATE
    //2. Hacemos ---app.set("view engine", "hbs")---
    //3. Creamos una carpeta llamada VIEWS porque trabajamos con el VIEW ENGINE de
    //4. En la carpeta VIEWS creamos un documento llamado "home.hbs" (corresponde al INDEX.HTML)
    //5. Copiamos el Index.html en el documento home.hbs
    //6. Creamos una respuesta en nuestro app.get con un --res.render("home")-- - (se obvia que es ".hbs")

//Si cerramos Nodemon no funcionara porque nuestro server deja de funcionar y senviar los response al cliente

//Como durante el deployment no tengo forma de saber cual sera el puerto crearemos un ".env" donde dejaremos
//como constante nuestro PORT

//Para crear nuestra variable de PORT haremos el require("dotenv").config() y asignaremos a la constante port
//el siguiente valor const port= process.env.PORT

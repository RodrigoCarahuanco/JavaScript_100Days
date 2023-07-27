// Importamos express
import express from 'express'
// Importamos path
import {join,dirname} from 'path'
// Importamos url
import {fileURLToPath, pathToFileURL} from 'url'

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));



// Damos visualizacion de EJS
app.set('views', join(__dirname,'views'))

app.set('view engine', 'ejs');


// Controlamos la respuesta en el cliente
app.get('/',(req,res) => {
    res.render('pagina1');
});



app.listen(3000);
console.log(`Escuchando en el puerto 3000`)
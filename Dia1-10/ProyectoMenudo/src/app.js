import express from 'express';
import {join,dirname} from 'path';
import {fileURLToPath} from 'url';
import indexRoutes from './routes/routes.js';
const app = express();

// Dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

// Routes
app.use(indexRoutes);

// EJS
app.set('view engine','ejs');
app.set('views',join(__dirname,'views'));

// Implementamos un puerto
const PUERTO = 3000;
app.listen(3000);
console.log(`Escuchando desde el puerto ${PUERTO}`);
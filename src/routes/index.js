const { Router } = require('express');
const productsRouter = require('./products');
const cartRouter = require('./cart');
const productsRouterDB = require('./productsMongoDB');


// Conexion a la base de datos
const mongoose = require('mongoose');
const user = 'root';
const password = 'mafe';
const bd = 'myeccomerce';
const uri = `mongodb+srv://root:${password}@cluster0.cvm762g.mongodb.net/${bd}?retryWrites=true&w=majority`;
mongoose.set('strictQuery', true);
mongoose.connect(uri)
  .then(() => console.log('Connected!'))
  .catch(e => console.log(e));



//Rutas del proyecto
const routerMain = Router();
//Routers desde la base de datos
routerMain.use('/productsDB', productsRouterDB);

module.exports = routerMain;
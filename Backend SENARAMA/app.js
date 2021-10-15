import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

// Conexión base de datos
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/senarama';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

// Or using promises
mongoose.connect(uri, options).then(
    /** ready to use. The `mongoose.connect()` promise resolves to
   mongoose instance. */
    () => { console.log('Conectado a mongoDB') },
    /** handle initial connection error */
    err => { console.log(err) }
   );

const senarautaSchema = mongoose.Schema({
    nombre:String,
    codigo:Number,
    area:String
}, {versionKey:false} )
const SenarautaModel = mongoose.model('senarautas', senarautaSchema)

//mostrar
const mostrar = async ()=>{
    const senarauta = await SenarautaModel.find()
    console.log(senarauta)
}

//Crear
const crear = async ()=>{
    const senarauta = new SenarautaModel({
    nombre:'Kathe Master',
    codigo:'666999',
    area:'Deportes'
})
    const resultado = await senarauta.save()
    console.log(resultado)
}
const actualizar = async (id)=>{
    const senarauta = await SenarautaModel.updateOne({_id:id},
     {
        $set:{
            codigo:'12121',
            area:'Cultura'
        } 
})
}
const eliminar = async (id)=>{
    const senarauta = await SenarautaModel.deleteOne({_id:id})
        console.log(senarauta)
    }
//mostrar()
//crear()
//actualizar('6168963e74dbc81d1a33e536')
eliminar('616895f4f9ae1ed1740de88c')


//MIDDLEWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));


//RUTAS
app.use('/api', require('./routes/senarauta'));

app.get('/', function (req, res) {
 res.send('EDWIN ANDRES RODRIGUEZ RUALES');
}); 

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//PUERTO
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
 console.log('Example app listening on port'+ app.get('puerto'));
});

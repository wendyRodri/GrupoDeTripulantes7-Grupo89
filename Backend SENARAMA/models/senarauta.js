import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const senarautaSchema = new Schema({
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    descripcion: String,
    usuarioId: String,
    date:{type: Date, default: Date.now},
    activo: {type: Boolean, default: true}
});

// Convertir a modelo
const Senarauta = mongoose.model('Senarauta', senarautaSchema);
export default Senarauta;
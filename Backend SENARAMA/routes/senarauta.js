import express from 'express';
const router = express.Router();

// importar el modelo senarauta
import Senarauta from '../models/senarauta';

// Agregar una senarauta
router.post('/nuevo-senarauta', async(req, res) => {
 const body = req.body;
 try {
 const senarautaDB = await Senarauta.create(body);
 res.status(200).json(senarautaDB);
 } catch (error) {
 return res.status(500).json({
 mensaje: 'Ocurrio un error',
 error
 })
 }
});

// Get con parámetros
router.get('/senarauta/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const senarautaDB = await Senarauta.findOne({_id});
    res.json(senarautaDB);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
    });

    // Get con todos los documentos
router.get('/senarauta', async(req, res) => {
    try {
    const senarautaDB = await Senarauta.find();
    res.json(senarautaDB);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });

   // Delete eliminar una senarauta
router.delete('/senarauta/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const senarautaDB = await Senarauta.findByIdAndDelete({_id});
    if(!senarautaDB){
    return res.status(400).json({
    mensaje: 'No se encontró el id indicado',
    error
    })
    }
    res.json(senarautaDB);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });

   // Put actualizar una senarauta
router.put('/senarauta/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
    const senarautaDB = await Senarauta.findByIdAndUpdate(
        _id,
        body,
        {new: true});
        res.json(senarautaDB);
        } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
        })
        }
       });
   
// Exportamos la configuración de express app
module.exports = router;


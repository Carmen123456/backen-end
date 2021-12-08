import mongoose  from "mongoose";
import FraseSchema  from "../Models/FraseModel.js";

//object creando a partir de shema de Personaje
const Frase = mongoose.model('Frase', FraseSchema)
export const insertFrase=(req, res)=>{
//accion de isertar nuevo Frases
//nuevo objero nasado en el DAD
let nuevoFrase= new Frase(req.body)
//grabar Frases en mongo
nuevoFrase.save((error, frase)=>{
    if(error){
        res.send(`Errooooooor detectadooo: ${error}`)
    }else{
        res.json(frase)
    }
}
)
}
export const getFrases=(req, res)=>{
    Frase.find({},(error, frases)=>{
        if(error){
            res.send(error)
        }
        else{
            res.json(frases)
        }
    })

}
// Acción para obtener una persona por :contactoId (El detalle)
export const getFraseById=(req, res)=>{
    
    Frase.findById(req.params.fraseId, (error, FrasePorId)=>{
        if(error){
            res.send(`Error detectado en el get por id: ${error}`);
        }else{
            res.json(FrasePorId);
        }
    });
}
//Acción para actualizar una persona por :contactoId 
export const updateFrase=(req, res)=>{
    Frase.findOneAndUpdate(
                                {_id:req.params.fraseId}, 
                                req.body,
                                {
                                    new: true
                                },
    (error)=>{
        if(error){
            res.send(`Error detectado en el insert: ${error}`);
        }else{
            res.send('El registro fue actualizado exitosamente');
        }
    })
}

//Acción para eliminar una persona por _id:contactoId
export const deleteFrase=(req, res)=>{  
    Frase.deleteOne({_id: req.params.fraseId}, (error, FraseDelete)=>{
        if(error){
            res.send(`Error detectado en el delete: ${error}`);
        }else{
            res.send('El registro fue eliminado exitosamente');
        }
    });
}
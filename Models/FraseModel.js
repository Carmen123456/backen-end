import mongoose from 'mongoose';

//crear un objero schema
const Schema = mongoose.Schema

//construir 
const FraseSchema = new Schema({
    titulo:{
        type:String,
        required:'titulo vacio'
    },
    contexto:{
        type: String,
        required: 'apellido vacio'
    },
    frase:{
        type: String,
        required: 'holaa'
    },
    autor:{
        type: String,
    },
    fecha_creacion:{
        type: Date,
        default: Date.now
    }
})
export default FraseSchema;
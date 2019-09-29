const mongoose = require ('mongoose');
const moment = require ('moment')


let etapaVida={
    values:[
        'Prenatal',
        'Primera infancia',
        'Niñez temprana',
        'Niñez intermedia',
        'Adolescencia',
        'Juventud',
        'Madurez',
        'Adultez madura',
        'Tercera edad'
    ],
    message: '{VALUE} no es un etapa válida'
}

const patientSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    edad:{
        type: Number,
        required: true
    },
    etapaVida:{
        type: String,
        required: true,
        enum:etapaVida
    },
    estadoCivil:{
        type: String,
        required: true,
        enum: [
            'Soltero',
            'Casado'
        ]
    },
    sexo:{
        type: String,
        required: true,
        enum: [
            'Masculino',
            'Femenino'
        ]
    },
    fechaNacimiento: {
        type: Date,
        required: true 
    },

})

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
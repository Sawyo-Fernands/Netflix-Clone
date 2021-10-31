
const mongo=require('../database')

const usuario=new mongo.Schema({

        nome:{
           type: String,
           required:true,
        },
        email:{
           type: String,
           required:true,
        },
        senha:{
           type: String,
           required:true,
        },
        
})

const Usuario=mongo.model('Usuario',usuario)

module.exports=Usuario
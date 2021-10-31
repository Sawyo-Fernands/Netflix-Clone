
const mongo=require('../database')

const temporada=new mongo.Schema({

        filme_id:{
            type:mongo.Types.ObjectId,
            ref:'Filme'
        },
        titulo:{
            type:String,
            required:true,
        },
        
})

const Temporada=mongo.model('Temporada',temporada)

module.exports=Temporada
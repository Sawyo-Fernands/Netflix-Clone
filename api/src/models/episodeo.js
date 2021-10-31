
const mongo=require('../database')

const episodio=new mongo.Schema({

        temporada_id:{
            type:mongo.Types.ObjectId,
            ref:'Temporada'
        },
        titulo:{
            type:String,
            required:true,
        },
        descricao:{
            type:String,
            required:true,
        },
        numero:{
            type:Number,
            required:true,
        },
        capa:{
            type:String,
            required:true,
        },
        
})

const Episodio=mongo.model('Episodeo',episodio)

module.exports=Episodio

const mongo=require('../database')

const filme=new mongo.Schema({

        titulo:{
           type: String,
           required:true,
        },
        tipo:{
           type: String,
           required:true,
        },
        capa:{
           type: String,
           required:true,
        },
        logo:{
           type: String,
           required:true,
        },
        thumb:{
           type: String,
           required:true,
        },
        descricao:{
         type: String,
         required:true,
      },
         generos:{
         type: Array,
         required:true,
      },
         elenco:{
         type: Array,
         required:true,
      },
         cenas_momentos:{
         type: Array,
         required:true,
      },
})

const Filme=mongo.model('Filme',filme)

module.exports=Filme
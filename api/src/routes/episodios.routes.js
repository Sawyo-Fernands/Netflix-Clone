const express=require('express')
const router=express.Router()

const Episodio=require('../models/episodeo')

router.get('/temporada/:temporada',async (req,res)=>{

    try{
        const temporada_id=req.params.temporada
        const episodios= await Episodio.find({
            temporada_id,
        })

       res.send({error:false,episodios})
     
    }catch(error){
        console.log(error)
    }

})


module.exports=router
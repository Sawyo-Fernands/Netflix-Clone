const express=require('express')
const router=express.Router()

const Usuario=require('../models/usuario')

router.post('/login',async (req,res)=>{

    try{

        const {email,senha}=req.body
        const usuario= await Usuario.findOne({email,senha})

        if(usuario){
            res.send({error:false,usuario})
        }else{
            res.send({error:true,'message':'Nenhum usuario encontrado'})
        }
    }catch(error){
        console.log(error)
    }

})


module.exports=router
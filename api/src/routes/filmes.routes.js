const express=require('express')
const router=express.Router()
const _=require('underscore')
const Filme=require('../models')
const Temporada=require('../models/temporada')


//Home
router.get('/home',async(req,res)=>{
    try{
        //recuperar todos os filmes
        let filmes =await Filme.find()
        let newFilmes=[]
        //recuperando temporadas
        for(let filme of filmes){

            const temporadas=await Temporada.find({
                filme_id:filme._id
            })
            const newFilme={...filme._doc,temporadas}
            newFilmes.push(newFilme)
                }
         //Misturar resultados aleatoriamente
         newFilmes=_.shuffle(newFilmes)

         //Filme principal
         const principal=newFilmes[0]

         //separar em seções
         const secoes=_.chunk(newFilmes,5)

         res.send({error:false,principal,secoes})
        }catch(error){
        res.send(error)
    }
})


//Pegar registros
router.get('/', async (req,res)=>{

    try{
        const data= await Filme.find()
    res.send(data)

    }catch(error){
        console.log(error)
    }
})

//Pegar registro com o id
router.get('/:id', async (req,res)=>{
    
    try{
        const id=req.params.id

    const data= await  Filme.findById(id)
    res.send(data)
    }catch(error){
        console.log(error)
    }
})

//Criar registros
router.post('/', async (req,res)=>{
    try{

        const body=req.body
        const data= await  Filme.create(body)
        res.send({data})

    }catch(error){
        console.log(error)
    }
})

//Editar um registro
router.put('/:id', async (req,res)=>{
    try{

        const id=req.params.id

        const body=req.body

        const data= await Filme.findByIdAndUpdate(id,body,{new:true})

        res.send({data})

    }catch(error){
        res.send(error)
    }

})

//Deletar registro com id
router.delete('/:id', async (req,res)=>{
    try{
        const id=req.params.id
    
    await Filme.findByIdAndDelete(id)
    res.send({"message":'Filme deletado'})
    }catch(error){
        console.log(error)
    }

})





module.exports=router
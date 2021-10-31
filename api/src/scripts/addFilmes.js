
const mongo=require('../database')
const Filmes=require('../models')
const filmeJSON=require('../data/filme.json')
const addFilmes= async ()=>{

    try{

        for( let filme of filmeJSON ){
            console.log(`Inserindo ${filme.titulo}`)
            await Filmes.create(filme)
        }
            console.log("deu certo")
    }catch(error){
        console.log(error)
    }

}

addFilmes()

const mongo=require('../database')
const Usuario=require('../models/usuario')
const usuarioJSON=require('../data/usuario.json')
const addUsers= async ()=>{

    try{

        for( let usuario of usuarioJSON ){
            console.log(`Inserindo ${usuario.nome}`)
            await Usuario.create(usuario)
        }
            console.log("deu certo")
    }catch(error){
        console.log(error)
    }

}

addUsers()
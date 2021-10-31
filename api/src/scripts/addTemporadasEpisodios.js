
const mongo=require('../database')
const Filmes=require('../models')
const Temporada=require('../models/temporada')
const Episodio=require('../models/episodeo')

const addTemporadasEpisodios= async ()=>{

    try{

        const series=await Filmes.find({tipo:'serie'}).select('_id')

        for(let serie of series){

            console.log(`SERIE : ${serie}---`)
            const numTemporadas=Math.floor(Math.random() * 5 ) + 1

            for(let i=1; i<=numTemporadas;i++){
                console.log(`Inserindo temporada ${i} de ${numTemporadas}`)
                const temporada=await Temporada.create({
                    filme_id:serie,
                    titulo:`Temporada ${i}`
                })

            const numEpisodios=Math.floor(Math.random() * 5 ) + 1
                for(let x=1;x<=numEpisodios;x++){
                    console.log(`Inserindo episodio ${x} de ${numEpisodios}`)
                    await Episodio.create({
                        temporada_id:temporada._id,
                        titulo:`Episodio ${x}`,
                        numero:x,
                        descricao:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                        capa:'https://picsum.photos/300/200',
                    })
                }
            }
        }
        
    }catch(error){
        console.log(error)
    }

}

addTemporadasEpisodios()
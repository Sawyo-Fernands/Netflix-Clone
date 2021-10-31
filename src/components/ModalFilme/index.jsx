import React,{useState,useEffect} from 'react'
import Episodio from '../Episodio';

import axios from 'axios'
import Card from '../Card';

export default function ModalFilme(){

  const [infos,setInfos]=useState({})
  const [episodios,setEpisodios]=useState([])
  const getEpisodios= async(temporada_id)=>{

    try{
     const response=await axios.get(`http://localhost:5000/episodio/temporada/${temporada_id}`)
     const res=response.data
     setEpisodios(res)
}catch(error){
  console.log(error)
}

  }


  const selectFilmeListener=()=>{
    window.addEventListener('selectFilme',(data)=>{
      setInfos(data.detail)
    })

  }

  useEffect(()=>{
    selectFilmeListener()
  },[])
  useEffect(()=>{
    if(infos.tipo=="serie"){
      getEpisodios(infos.temporadas[0]?._id)
    }

  },[infos])
    return(
        <div className="modal fade" id="modal-filme" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-hero" style={{backgroundImage:`url(${infos.thumb})`}}>
              <img src={infos.logo} alt=""/>
              <div className="col-12 modal-hero-infos">
                <button className="btn btn-lg btn-custom-white">
                  <span className="mdi mdi-play"></span> Assistir
                </button>
                <a
                  href="#"
                  className="btn-custom-round btn btn-lg btn-light rounded-circle"
                >
                  <span className="mdi mdi-play"></span>
                </a>
                <a
                  href="#"
                  className="btn-custom-round border-white btn btn-lg rounded-circle opacity-50"
                >
                  <span className="mdi mdi-thumb-up text-white"></span>
                </a>
                <a
                  href="#"
                  className="btn-custom-round border-white btn btn-lg rounded-circle opacity-50"
                >
                  <span className="mdi mdi-thumb-down text-white"></span>
                </a>
              </div>
            </div>
            <div className="modal-infos">
              <div className="container">
                <div className="row">
                  <div className="col-7">
                    <p className="filme_descricao">
                      {infos.descricao}
                    </p>
                  </div>
                  <div className="col-5">
                    <p className="filme_elenco">
                      Elenco:
                      <text>
                       {" "} {infos.elenco?.join(', ')}.</text>
                      
                      <br />
                      <br />
                      Gêneros: <text>{" "} {infos.generos?.join(', ')} </text>
                      <br />
                      <br />
                      Cenas e momentos: <text>{" "} {infos.cenas_momentos?.join(', ')}</text>
                    </p>
                  </div>
                </div>
                <br />
                {infos.tipo=="serie" && 
                <>
                <div className="row">
                <div className="col-7">
                  <h3 className="text-white">Episódios</h3>
                </div>
                <div className="col-5 text-right">
                  <select className="form-control">
                    {infos.temporadas?.map(temporada => <option>{temporada.titulo}</option>)}
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <ul id="lista_episodeos">
                <li>
        <div className="row">
          <div className="col-1 my-auto text-center">
            <h3 className="text-white">1</h3>
          </div>
          <div className="col-4">
            <img className="img-fluid" src={infos.thumb} alt="" />
          </div>
          <div className="col-7">
            <h6 className="text-white">Nome do episódio</h6>
            <p className="text-muted">
              There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration
              in some form, by injected humour.
            </p>
          </div>
        </div>
      </li>        
                </ul>
              </div>
              </>
              }
                
              </div>
            </div>
          </div>
        </div>
      </div>
  
    );

}
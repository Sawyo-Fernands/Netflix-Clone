
import React from 'react'

import top from '../../assets/badge-top-10.png'
import logoFilme from '../../assets/diabo-de-cada-dia.png'

export default function Hero({filme}){

    return(
        <div id="hero" class="container-fluid" 
        style={{backgroundImage:`url(${filme.capa})`}}>
        <div class="container">
          <div class="row" id="hero_infos">
            <div class="col-6">
              <img class="logo" src= {filme.logo} alt="name"/>
              <h1 class="text-white">
                <img src= {top} alt="" />Top 1 de hoje no Brasil.
              </h1>
              <p class="text-white">
                {filme.descricao?.substr(0,150)} ...
              </p>
              <br />
              <button class="btn btn-lg btn-custom-white mr-3">
                <span class="mdi mdi-play"></span> Assistir
              </button>
              <button class="btn btn-lg btn-custom-translucent">
                <span class="mdi mdi-information-outline"></span> Mais Informações
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
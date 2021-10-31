
import React from 'react'
import Card from '../Card';


export default function Secao({secao}){

    return(
        <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="text-white">{secao[0]?.generos[0]}</h5>
            </div>
          </div>
        </div>
        <div className="col-12">
          <ul className="filme_lista">
           {secao.map(filme=><Card filme={filme}/> ) }
          </ul>
        </div>
      </section>
    );
}

import React from 'react'

import imgEp from "../../assets/capa-filme.png"

export default function Episodio({episodio}){

    return (
        <li>
        <div className="row">
          <div className="col-1 my-auto text-center">
            <h3 className="text-white">1</h3>
          </div>
          <div className="col-4">
            <img className="img-fluid" src={imgEp} alt="" />
          </div>
          <div className="col-7">
            <h6 className="text-white">Nome do episódeo</h6>
            <p className="text-muted">
              There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration
              in some form, by injected humour.
            </p>
          </div>
        </div>
      </li> 
    );

}


import React,{useState,useEffect} from 'react'
import Logo from '../../assets/logo.png'

export default function Header({isHidden}){

  const [user,setUser]=useState({})

  const logout=()=>{
    localStorage.clear()
    window.location.reload()
  }


  

    useEffect(()=>{
      setUser(JSON.parse(localStorage.getItem('@user')))
    },[])

    return(
      <header className="row">
        <div className="col-2">
          <img src={Logo} alt="Logo"/>
        </div>
        {!isHidden &&
        <>
        <div className="col-8">
        <ul className="menu_list">
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Séries</a>
          </li>
          <li>
            <a href="#">Filmes</a>
          </li>
          <li>
            <a href="#">Mais Recentes</a>
          </li>
          <li>
            <a href="#">Minha lista</a>
          </li>
        </ul>
      </div>
      <div className="col-2">
      <a href="#" className="text-white text-right" onClick={logout}>Olá {user?.nome}. Sair</a>
    </div>
    </>
      }
        
      </header>
      
   
    );

}
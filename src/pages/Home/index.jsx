
import React,{useState,useEffect} from 'react'

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ModalFilme from '../../components/ModalFilme';
import Secao from '../../components/Secao';

import '../../styles/style.css'

import axios from 'axios'


function Home() {

  const [principal,setPrincipal]=useState({})
  const [secoes,setSecoes]=useState([])

 


  useEffect(()=>{

    axios.get('http://localhost:5000/home')
    .then((response)=>{
      setPrincipal(response.data.principal)
      setSecoes(response.data.secoes)
    })

  },[])

    return (
      <>
      <ModalFilme/>

      <div className="container-fluid">
      <Header/>
      </div>
      
      <Hero filme={principal}/>
   

    <div id="main-content">
      {secoes.map(secao => <Secao secao={secao} /> )}
    </div>
    </>
    );
  }
  
export default Home;
  
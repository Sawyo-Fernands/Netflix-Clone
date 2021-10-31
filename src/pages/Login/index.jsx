
import React,{useEffect, useState} from 'react'

import '../../styles/style.css'

import Logo from '../../assets/logo.png'
import Header from '../../components/Header';

import axios from 'axios'

export default function Login(){

  const [data,setData]=useState({
    email:'',
    senha:''
  })

const verifyAccount=(e)=>{
  try{ 
    e.preventDefault();
   
   axios.post("http://localhost:5000/usuario/login",data)
   .then((res)=>{
     const finalresponse=res.data

     if(finalresponse.error){
       
       alert(finalresponse.message)
       return false
     }
     else{
         localStorage.setItem('@user',JSON.stringify(finalresponse.usuario))
         window.location.reload()
     }
   } )
   
   

 }catch(error){
     console.log(error)
   }
   
 }


    return(
        
    <div className="container-fluid bg_filmes">
     <Header isHidden />
      <div id="caixa_login" className="col-4 offset-4">
        <h1 className="text-white">Entrar</h1>
        <br />
        <form onSubmit={verifyAccount} >
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Email ou número de telefone"
            onChange={(e)=>{
                setData({
                  ...data,
                  email:e.target.value
                })
            }}
          />
          <br />
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Senha"
            onChange={(e)=>{
              setData({
                ...data,
                senha:e.target.value
              })
          }}
          />
          <br />
          <button className="btn btn-lg btn-block btn-danger">Entrar</button>
          <div className="row mt-4">
            <div className="col text-muted">
              <input type="checkbox" /> Lembrar de mim.
            </div>
            <div className="col text-right">
              <a href="#" class="text-muted">Precisa de ajuda?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
}
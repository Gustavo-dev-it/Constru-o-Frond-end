import React from 'react'

export default function Sorteados() {

    

const getAleatorio = Math.floor(Math.random()* 60) 

  return (
    <>
    <div ><h2>Sorteio da Mega Sena</h2></div>
     
      
      <p>O numero sorteado é : {getAleatorio}</p>
      
    </>
  )
}
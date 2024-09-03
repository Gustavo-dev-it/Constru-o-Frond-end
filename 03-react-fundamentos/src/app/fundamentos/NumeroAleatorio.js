/* rfc - atalho para criar estruturas */


import React from 'react'

export default function NumeroAleatorio() {

    

const getAleatorio = Math.floor(Math.random()* 100) + 1

  return (
    <>
     <h2>NumeroAleatorio</h2>
      
      <p>O numero  é : {getAleatorio}</p>
      
    </>
  )
}

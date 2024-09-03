import React from 'react'

export default function ImagemAleatoria() {

const NumeroAleatorio = Math.floor(Math.random() * 200) + 1 

const urlImagem = ``

  return (
    <>
<h3>imagem aleatorio</h3>
   <img src="https://picsum.photos/200/300?random=1"></img>
      
    </>
  )
}

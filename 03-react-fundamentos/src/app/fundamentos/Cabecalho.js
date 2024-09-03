
import React from 'react'

import style from './fundamentos.module.css'

export default function Cabecalho(props) {

    const {titulo, descricao} = props
  
  return (
    <div>
      
<h1 className={style.titulo}>{titulo}</h1>
<p className={style.descricao}>{descricao}</p>
<hr/>


    </div>
  )
}

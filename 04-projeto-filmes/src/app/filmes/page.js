'use client'
import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import apiFilmes from '../apis/apiFilmes'
import Pagina from '../components/Pagina'

export default function page() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        buscarFilmes()

   
}, [])


    async function buscarFilmes() {

        const resultado = await apiFilmes.get("/movie/top_rated?language=pt-BR")

        const filmesRecebidos = resultado.data.results
        setFilmes(filmesRecebidos)
    }

    return (

        <Pagina titulo="filmes">

<Row>

{filmes.map(filme =>{
    return(
        <Col>
        <p>{filme.original_title}</p>
        </Col>
    )
})}

</Row>



        </Pagina>

        



    )
}

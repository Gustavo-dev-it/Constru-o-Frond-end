'use client'
import { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Pagina from '@/app/components/Pagina'
import apiFilmes from '@/app/apis/apiFilmes'

export default function page() {

    const [filmes, setSeries] = useState([])

    useEffect(() => {
        buscarSeries()

   
}, [])


    async function buscarSeries() {

        const resultado = await apiFilmes.get("/tv/on_the_air?language=pt-BR.")
      

        const seriesRecebidos = resultado.data.results
        console.log(seriesRecebidos)
        setSeries(seriesRecebidos)
    }

    return (

        <Pagina titulo="filmes melhores avaliados">

<Row md={4}>

{filmes.map(serie =>{
    return(
        <Col className='py-2'>

<Card>
<Card.Img src={"https://image.tmdb.org/t/p/w500/" + serie.poster_path }/>

<Card.Title>{serie.original_title}</Card.Title>
<p><b>Nota:</b> {serie.vote_average} ⭐</p>
<Card.Footer>

    <Button className='bg-danger' href={'/filmes/' + serie.id}>Detalhes</Button>
</Card.Footer>

</Card>


      
      
        </Col>
    )
})}

</Row>



        </Pagina>

        



    )
}

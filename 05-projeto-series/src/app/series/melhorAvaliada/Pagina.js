'use client'
import { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Pagina from '@/app/components/Pagina'

import apiSeries from '@/app/apis/apiSeries'

export default function page() {

    const [series, setSeries] = useState([])

    useEffect(() => {
        buscarFilmes()

   
}, [])


    async function buscarSeries() {

        const resultado = await apiSeries.get("/tv/top_rated?language=pt-BR.")
      

        const seriesRecebidos = resultado.data.results
        console.log(seriesRecebidos)
        setSeries(seriesRecebidos)
    }

    return (

        <Pagina titulo="Series Melhores avaliadas">

<Row md={4}>

{series.map(serie =>{
    return(
        <Col className='py-2'>

<Card>
<Card.Img src={"https://image.tmdb.org/t/p/w500/" + serie.poster_path }/>

<Card.Title>{serie.original_title}</Card.Title>
<p><b>Nota:</b> {serie.vote_average} ⭐</p>
<Card.Footer>

    <Button className='bg-danger' href={'/series/' + serie.id}>Detalhes</Button>
</Card.Footer>

</Card>


      
      
        </Col>
    )
})}

</Row>



        </Pagina>

        



    )
}
